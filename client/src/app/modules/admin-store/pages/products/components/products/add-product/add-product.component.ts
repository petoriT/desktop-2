import {
  Component,
  OnInit,
  ViewChild,
  Output,
  EventEmitter,
  HostListener,
  OnDestroy
} from "@angular/core";
import { Camera, CameraOptions } from "@ionic-native/camera/ngx";
import { CategoryFacadeService } from "src/app/core-modules/services/categories/category-facade/category-facade.service";
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { ProductFacadeService } from "src/app/core-modules/services/products/product-facade/product-facade.service";
import { ProductApiService } from "src/app/core-modules/services/products/product-api/product-api.service";
import { Router } from "@angular/router";
import { map, finalize } from "rxjs/operators";
import { Observable } from "rxjs";
import {
  ActionSheetController,
  LoadingController,
  Platform,
  ToastController,
} from "@ionic/angular";
import { UserFacadeService } from "src/app/core-modules/services/profile/profile-facade/profile-facade.service";

import { FormGroup, FormArray, FormBuilder, Validators } from "@angular/forms";

import { ImageCroppedEvent, ImageCropperComponent } from "ngx-image-cropper";
import { IonSlides } from "@ionic/angular";
import { AlertController } from '@ionic/angular';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

//import { AngularFireStorage, AngularFireUploadTask } from 'angularfire2/storage'
@Component({
  selector: "app-add-product",
  templateUrl: "./add-product.component.html",
  styleUrls: ["./add-product.component.scss"],
})
export class AddProductComponent implements OnInit, OnDestroy {
  @HostListener('unloaded')
  @Output() segment: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild("add") slides: IonSlides;

  //firebase
  task: AngularFireUploadTask;
  progress: any;  // Observable 0 to 100

  image: string; // base64

  public imagePickerOptions = {
    maximumImagesCount: 1,
    quality: 50,
  };
  private createProduct: FormGroup;
  private productComponentsForm: FormGroup;
  private productMetatagsForm: FormGroup;
  private productFeaturesForm: FormGroup;
  public android_platform: boolean;
  public metaTagList: FormArray;
  public featureList: FormArray;
  public bill_of_material: any[] = [];
  public picture_uploaded: any[] = [];
  public file_uploaded = [];
  public component_file_uploaded = [];
  public component_picture_uploaded = [];
  categories$;
  isUpdating$;
  imageurl: any;
  device_screen;
  import;
  public defaultR = 'outlined';
  oneone;
  done = false;
  addBillOfMaterial;
  material_substitude;
  bill_type_selected;
  component_info_added;
  selected_extra;
  category;
  showNext;
  slides_number = 1;
  pic_remove;
  sub_category;
  sub_segment_category;
  show_this_selected_categories = [];
  product_types;
  //this are properties that hide and show categories
  category_view = true;
  sub_category_view = true;
  sub_segment_category_view = true;
  product_types_view = true;
  // BOM types go here
  public BOM_type;
  public small = true;

  // images
  @ViewChild(ImageCropperComponent, { static: false })
  angularCropper: ImageCropperComponent;
  myImage = null;
  croppedFileImage = null;
  croppedImage = null;
  file_name;
  myFileImages = [];
  imageURI;
  showBack;

  private choose_category = {
    category: [""],
    sub_category: [""],
    product_segment: [""],
    product_type: [""],
    unit: [""],
  };

  get metaTagFormGroup() {
    return this.productMetatagsForm.get("metaTags") as FormArray;
  }
  get featureFormGroup() {
    return this.productFeaturesForm.get("features") as FormArray;
  }

  constructor(
    private formBuilder: FormBuilder,
    private categoryFacade: CategoryFacadeService,
    private productFacade: ProductFacadeService,
    private productApi: ProductApiService,
    private router: Router,
    private transfer: FileTransfer,
    public toastController: ToastController,
    private userFacade: UserFacadeService,
    private camera: Camera,
    public actionSheetController: ActionSheetController,
    private platform: Platform,
    public loadingController: LoadingController,
    public alertController: AlertController,
    public storage: AngularFireStorage,
    breakpointObserver: BreakpointObserver,
  ) {
  
    ////loading
    
    breakpointObserver.observe([
      Breakpoints.Handset
    ]).subscribe(result => {
      if (result.matches) {
        this.device_screen = "Handset"
      }
    });
    breakpointObserver.observe([
      Breakpoints.Tablet
    ]).subscribe(result => {
      if (result.matches) {
        this.device_screen = "Tablet"
      }
    });

    breakpointObserver.observe([
      Breakpoints.Web
    ]).subscribe(result => {
      if (result.matches) {
        this.device_screen = "Web"
      }
    });
    this.isUpdating$ = this.categoryFacade.isUpdating$();
  }
  ionViewDidEnter() {
    this.slides.lockSwipes(true);

  }
  ngOnInit() {
    //slides functions


    this.addBillOfMaterial = true;
    this.showBack = false;
    this.showNext = true;

    //end of slide functions 
    this.android_platform = this.platform.is("android");
    console.log(this.android_platform)
    //getCategories
    this.categories$ = this.categoryFacade.getCategories$();

    this.createProduct = this.formBuilder.group({
      productName: [
        "",
        Validators.compose([Validators.minLength(2), Validators.required]),
      ],
      productDescription: [
        "",
        Validators.compose([Validators.minLength(5), Validators.required]),
      ],

      productPrice: [
        "",
        Validators.compose([Validators.minLength(2), Validators.required]),
      ],
      in_stock: ["",
        Validators.compose([Validators.minLength(2), Validators.required]),],
    });
    this.productMetatagsForm = this.formBuilder.group({
      metaTags: this.formBuilder.array([this.createMetaTag()]),

    });

    this.productFeaturesForm = this.formBuilder.group({
      features: this.formBuilder.array([this.createFeature()]),
    });

    this.productComponentsForm = this.formBuilder.group({
      componentname: ["", Validators.compose([Validators.minLength(2)])],
      price: ["", Validators.compose([Validators.minLength(2)])],
      base_material_price: ["", Validators.compose([Validators.minLength(2)])],
      descrip: ["", Validators.compose([Validators.minLength(2)])],
      unit_of_measure: ["", Validators.compose([Validators.minLength(2)])],
    });

    // set metaTagList to the form control containing propeties
    this.metaTagList = this.productMetatagsForm.get("metaTags") as FormArray;

    this.featureList = this.productFeaturesForm.get("features") as FormArray;
  }

  ///*** components bill of material*/
  addComponent() {

    function randomString(length, chars) {
      var result = "";
      for (var i = length; i > 0; --i)
        result += chars[Math.floor(Math.random() * chars.length)];
      return result;
    }
    let length = 10;
    let chars =
      "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let id = randomString(length, chars);

    let pic1 = this.component_picture_uploaded[0];
    let pic2 = this.component_picture_uploaded[1];
    let pic3 = this.component_picture_uploaded[2];
    console.log(this.component_picture_uploaded)
    this.presentLoading();
    const uploadPictures = async () => {

      if (pic1) {
        await this.uploadBOMPix(pic1, id)
      }
      if (pic2) {
        await this.uploadBOMPix(pic2, id)
      }
      if (pic3) {
        await this.uploadBOMPix(pic3, id)
      }

    }

    uploadPictures()
  }

  uploadBOMPix(pic, id) {
    console.log(pic)
    fetch(pic)
      .then((res) => res.blob())
      .then((blob) => {
        const file = new File([blob], this.file_name, {
          type: "image/png",
        });
        if (this.platform.is("cordova")) {
          var n = Date.now();

          //where is stored in the cloud
          const filePath = `Products/${n}.jpeg`;
          this.image = pic
          let fileRef = this.storage.ref(filePath)
          this.task = fileRef.putString(this.image, 'data_url', { contentType: "image/jpeg" });
          this.progress = this.task.percentageChanges();

          this.task.snapshotChanges()
            .pipe(
              finalize(() => {
                let data = fileRef.getDownloadURL();
                data.subscribe(url => {
                  let url_img
                  if (url) {
                    url_img = url;
                    console.log(url)
                  }
                  this.component_file_uploaded.push({ id: "Images/firebase", url: url_img })
                  if (this.component_picture_uploaded.length == this.component_file_uploaded.length) {
                    let component = {
                      ...this.productComponentsForm.value,
                      BOM_type: this.BOM_type,
                      selected: false,
                      _id: id,
                      pictures: this.component_file_uploaded
                    };

                    this.bill_of_material.push(component);
                    this.component_file_uploaded = []
                    this.component_picture_uploaded = []
                  }
                });
              })
            )
            .subscribe(url => {
              if (url) {
                return
              }
            });
        } else {
          const _formData = new FormData();
          _formData.append("image", file);
          //save picture
          console.log(file, _formData)
          this.productApi.uploadImage(_formData).subscribe((res) => {
            let data = res.data[0]
            console.log(res)
            if (data.url) {
              this.component_file_uploaded.push(data)
              console.log(this.component_picture_uploaded, this.component_file_uploaded)
              if (this.component_picture_uploaded.length == this.component_file_uploaded.length) {
                let component = {
                  ...this.productComponentsForm.value,
                  BOM_type: this.BOM_type,
                  selected: false,
                  _id: id,
                  pictures: this.component_file_uploaded
                };

                this.bill_of_material.push(component);
                this.component_file_uploaded = []
                this.component_picture_uploaded = []
              }
            } else {
              this.presentToast("Ooops try to use browser");
            }

            return
          }, err => {
            console.log(err)
          });
        }
      });
  }

  removeComponent(index) {
    this.bill_of_material.splice(index, 1);
  }
  ///***End  components */

  // Generate new metaTag
  createMetaTag(): FormGroup {
    return this.formBuilder.group({
      metaTagname: [null, Validators.compose([Validators.required])],
    });
  }

  createFeature(): FormGroup {
    return this.formBuilder.group({
      featurename: [null, Validators.compose([Validators.required])],
    });
  }

  addMetaTag() {
    this.metaTagList.push(this.createMetaTag());
  }

  addFeature() {
    this.featureList.push(this.createFeature());
  }

  removeMetaTag(index) {
    this.metaTagList.removeAt(index);
  }

  removeFeature(index) {
    this.featureList.removeAt(index);
  }

  getMetaTagsFormGroup(index): FormGroup {
    const formGroup = this.metaTagList.controls[index] as FormGroup;
    return formGroup;
  }

  getFeaturesFormGroup(index): FormGroup {
    const formGroup = this.featureList.controls[index] as FormGroup;
    return formGroup;
  }

  showCSV() {
    if (this.import) {
      this.import = false;
    } else {
      this.import = true;
    }
  }

  /**** Images****/
  handleFileInput(event) {
    let file = event.target.files[0];
    //android
    if (this.picture_uploaded.length >= 3) {
      this.presentToast("Only three pictures can be added");
    } else {
      if (file.type == "image/jpeg" || file.type == "image/png") {
        //set MyImage
        this.getBase64(file);
      } else {
        this.presentToast("check your file format");
      }
    }
  }
  handleComponentFileInput(event) {
    let file = event.target.files[0];
    //android
    if (this.component_picture_uploaded.length >= 3) {
      this.presentToast("Only three pictures can be added");
    } else {
      if (file.type == "image/jpeg" || file.type == "image/png") {
        //set MyImage
        this.getBase64(file);
      } else {
        this.presentToast("check your file format");
      }
    }
  }

  async selectImage() {
    const actionSheet = await this.actionSheetController.create({
      header: "Select Image source",
      buttons: [
        {
          text: "Load from Library",
          handler: () => {
            this.pickImage(this.camera.PictureSourceType.PHOTOLIBRARY);
          },
        },
        {
          text: "Use Camera",
          handler: () => {
            this.pickImage(this.camera.PictureSourceType.CAMERA);
          },
        },
        {
          text: "Cancel",
          role: "cancel",
        },
      ],
    });
    await actionSheet.present();
  }

  pickImage(sourceType) {
    const options: CameraOptions = {
      quality: 100,
      sourceType: sourceType,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
    };
    this.camera.getPicture(options).then(
      (imageData) => {
        // imageData is either a base64 encoded string or a file URI
        // If it's base64 (DATA_URL):
        this.myImage = "data:image/jpeg;base64," + imageData;

      },
      (err) => {
        // Handle error
        this.presentToast("oops something went wrong");
      }
    );


  }

  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
  }

  clearOne(image) {
    let new_array = this.picture_uploaded.filter((res) => {
      return res !== image;
    });
    this.picture_uploaded = new_array;
  }

  clearOneComponent(image) {
    let new_array = this.component_picture_uploaded.filter((res) => {
      return res !== image;
    });
    this.component_picture_uploaded = new_array;
  }

  clearImage() {

    this.angularCropper.imageBase64 = null;
    this.myImage = null;
    this.croppedImage = null;
  }

  saveCropper() {
    this.angularCropper.crop();
    this.picture_uploaded.push(this.croppedImage);
    this.clearImage();
  }

  saveComponentCropper() {
    this.angularCropper.crop();
    this.component_picture_uploaded.push(this.croppedImage);
    this.clearImage();
  }

  convertBase64ToFile(url) {
    fetch(url)
      .then((res) => res.blob())
      .then((blob) => {
        const file = new File([blob], this.file_name, { type: "image/png" });

        return file;
      });
  }

  getBase64(file) {
    this.file_name = file.name;
    var reader = new FileReader();
    let image;
    reader.readAsDataURL(file);
    reader.onload = function () {
      image = reader.result;
    };

    setTimeout(() => {
      this.myImage = image;
    }, 2000);

    reader.onerror = function (error) {
      console.log("Error: ", error);
    };
  }

  onSubmit() {
    //save picture

    let pic1 = this.picture_uploaded[0];
    let pic2 = this.picture_uploaded[1];
    let pic3 = this.picture_uploaded[2];
    console.log(this.picture_uploaded)
    this.presentLoading();
    const uploadPictures = async () => {

      if (pic1) {
        await this.uploadPix(pic1)
      }
      if (pic2) {
        await this.uploadPix(pic2)
      }
      if (pic3) {
        await this.uploadPix(pic3)
      }

    }

    uploadPictures()

    this.done = true
  }

  uploadPix(pic) {
    fetch(pic)
      .then((res) => res.blob())
      .then((blob) => {
        const file = new File([blob], this.file_name, {
          type: "image/jpeg",
        });
        //android 
        console.log(file)
        if (this.platform.is('cordova')) {

          var n = Date.now();

          //where is stored in the cloud
          const filePath = `Products/${n}.jpeg`;
          this.image = pic
          let fileRef = this.storage.ref(filePath)
          this.task = fileRef.putString(this.image, 'data_url', { contentType: "image/jpeg" });
          this.progress = this.task.percentageChanges();

          this.task.snapshotChanges()
            .pipe(
              finalize(() => {
                let data = fileRef.getDownloadURL();
                data.subscribe(url => {
                  let url_img
                  if (url) {
                    url_img = url;
                    console.log(url)
                  }
                  this.file_uploaded.push({ id: "Images/firebase", url: url_img });
                });
              })
            )
            .subscribe(url => {
              if (url) {
                return
              }
            });

        } else {
          //web
          const _formData = new FormData();
          _formData.append("image", file);
          //save picture
          console.log(file, _formData)
          this.productApi.uploadImage(_formData).subscribe((res) => {
            let data = res.data[0]
            console.log(res)
            if (data.url) {
              this.file_uploaded.push(data);
            } else {
              this.presentToast("Ooops try to use browser");
            }

            return
          }, err => {
            console.log(err)
          });
        }

      });
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: "custom-class",
      message: "Please wait...",
      duration: 5000,
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    loading.dismiss()
    console.log("Loading dismissed!");
  }

  pushToDatabase() {

    let store = this.userFacade.getCurrentStore();
    let product = {
      productName: this.createProduct.value.productName,
      productDescription: this.createProduct.value.productDescription,
      productImage: this.file_uploaded,
      metaTags: this.productMetatagsForm.value.metaTags,
      features: this.productFeaturesForm.value.features,
      in_stock: this.createProduct.value.in_stock,
      productPrice: this.createProduct.value.productPrice,
      bill_of_material: this.bill_of_material,
      selectCategory: this.choose_category,
      store_id: store._id,
    };
    //save produc
    console.log(product)
    this.productFacade.createProduct(product);
    ///redirect to products
    this.presentToast("product successfully uploaded");
    //
    console.log(product)
    //this.router.navigate["/store/"]
    setTimeout(() => {
      location.reload()
    }, 1000)
  }

  /***************Select Category ***********************/

  //category selected
  onChange(event) {
    //get event
    let category_name = event;
    //compare and assign category list
    this.categories$.subscribe(
      (res) => {
        let category = res.filter((item) => {
          return item.name == category_name;
        });
        let sub_cat = category[0].list;

        // loop through category list and group
        var groupBy = function (xs, key) {
          return xs.reduce(function (rv, x) {
            (rv[x[key]] = rv[x[key]] || []).push(x);
            return rv;
          }, {});
        };

        // Group by subcategor

        let grouped = groupBy(sub_cat, "Categories");

        this.sub_category = grouped;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  onChangeSub(event) {
    let sub_name = event;

    //check if it exists and pass
    let arr = this.sub_category[sub_name];

    // loop through category list and group
    var groupBy = function (xs, key) {
      return xs.reduce(function (rv, x) {
        (rv[x[key]] = rv[x[key]] || []).push(x);
        return rv;
      }, {});
    };
    // Group by sub segment categor

    let grouped = groupBy(arr, "Product segment");
    this.sub_segment_category = grouped;
  }

  /*onChangeSub(event) {
    
  }*/

  onChangeCatSeg(event) {
    let sub_name = event;
    let new_sub = [];
    //check if it exists and pass
    if (this.sub_segment_category.hasOwnProperty(sub_name)) {
      new_sub.push(this.sub_segment_category[sub_name]);
    }
    // loop through category list and group
    var groupBy = function (xs, key) {
      return xs.reduce(function (rv, x) {
        (rv[x[key]] = rv[x[key]] || []).push(x);
        return rv;
      }, {});
    };
    // Group by sub segment categor
    let grouped = groupBy(new_sub[0], "Product type");
    this.product_types = grouped;
  }

  onChangeProductType(event) {
    let p_type = event;
    let arr = this.product_types[p_type];
    for (let x of arr) {
      if (x["Product type"] == p_type) {
        //this.choose_category.value.unit = x.Unit;
      }
    }
  }



  set(setThis, value) {
    switch (setThis) {
      case "category": {
        this.choose_category.category = value;
        this.show_this_selected_categories.push(value);
        this.category_view = false;
        this.onChange(value);
        break;
      }
      case "sub_category": {
        this.choose_category.sub_category = value;
        this.show_this_selected_categories.push(value);
        this.sub_category_view = false;
        this.onChangeSub(value);

        break;
      }
      case "sub_segment_category": {
        this.choose_category.product_segment = value;
        this.show_this_selected_categories.push(value);
        this.sub_segment_category_view = false;
        this.onChangeCatSeg(value);

        break;
      }
      case "product_types": {
        this.choose_category.product_type = value;
        this.show_this_selected_categories.push(value);
        this.product_types_view = false;
        this.onChangeProductType(value);

        break;
      }
      default: {
        //statements;
        break;
      }
    }
  }
  clearCategories() {
    this.category_view = true;

    this.sub_category = null;
    this.sub_category_view = true;

    this.sub_segment_category = null;
    this.sub_segment_category_view = true;

    this.product_types = null;
    this.product_types_view = true;
    this.show_this_selected_categories = ["clear"];
  }
  /***************Category Ends***********************/
  onClickBack() {
    if (this.import) {
      this.import = false;
    } else {
      this.segment.emit("products");
    }
  }

  async presentToast(data) {
    const toast = await this.toastController.create({
      message: data,
      duration: 2000,
      position: "bottom",
    });
    toast.present();
  }

  slideChange(event) {
    this.slides.getActiveIndex().then((data) => {
      this.slides_number = data + 1;

      if (data == 5) {
        this.showNext = false;
        this.showBack = true;
      } else if (data == 0) {
        this.showBack = false;
        this.showNext = true;
      } else {
        this.showNext = true;
        this.showBack = true;
      }
    });
    this.slides.lockSwipes(true);
  }

  next() {
    this.slides.lockSwipes(false);
    this.slides.slideNext();

  }

  slidesBack() {
    this.slides.lockSwipes(false);
    this.slides.slidePrev();

  }
  aspectSelect(data) {
    if (data == "large") {
      this.defaultR = "outlined"
      this.oneone = "normal"
      this.small = true
    } else if (data == "small") {
      this.oneone = 'outlined'
      this.defaultR = "normal"
      this.small = false

    }
  }

  removePic(data) {
    if (data == this.pic_remove) {
      this.pic_remove = null
    } else {
      this.pic_remove = data
    }

  }
  yesAddBillOfMaterial() {
    this.addBillOfMaterial = false
  }
  selectBom(data) {

    switch (data) {
      case "extra": {
        this.BOM_type = "Extra"
        this.bill_type_selected = true
        this.showNext = false
        this.showBack = false
        break;
      }
      case "material": {
        this.BOM_type = "material"
        this.bill_type_selected = true
        this.showNext = false
        this.showBack = false
        break;
      }
      case "clear": {
        //statements; 
        this.BOM_type = null
        this.bill_type_selected = false
        this.selected_extra = false
        this.material_substitude = false
        this.showNext = true
        this.showBack = true
        break;
      }

    }


  }
  async presentAlertMultipleButtons() {
    console.log("alert")
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Base Material Price',
      message: 'Is the price of the standard material that this component will replace',
      buttons: ['Cancel']
    });

    await alert.present();
  }

  ngOnDestroy() {
    console.log('Items destroyed');
  }
}
