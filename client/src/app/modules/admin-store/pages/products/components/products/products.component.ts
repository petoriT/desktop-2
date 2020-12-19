import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  OnChanges,
  Input,
  OnDestroy,
} from "@angular/core";
import { ProductFacadeService } from "src/app/core-modules/services/products/product-facade/product-facade.service";
import { CategoryFacadeService } from "src/app/core-modules/services/categories/category-facade/category-facade.service";
import { UserFacadeService } from "src/app/core-modules/services/profile/profile-facade/profile-facade.service";
import {
  AlertController,
  LoadingController,
  ModalController,
  ToastController,
} from "@ionic/angular";
import { FormGroup, FormBuilder, FormControl } from "@angular/forms";
import { ProductApiService } from "src/app/core-modules/services/products/product-api/product-api.service";
import { browserRefresh } from "src/app/app.component";
import { distinctUntilChanged } from "rxjs/operators";
import { Router } from '@angular/router';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import { PopoverController } from '@ionic/angular';
import { ProductsPopoverComponent } from '../products/products-popover/products-popover.component'


@Component({
  selector: "app-products-comp",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.scss"],
})
export class ProductsComponent implements OnInit, OnChanges {
  edit;
  clickButton;
  active_expansion;
  no_product;
  detail_view_product;

  @Output() shareProduct = new EventEmitter();
  @Output() segment = new EventEmitter();

  //FormState
  id;
  updateProduct: FormGroup;
  public picture_uploaded: any;

  //observables
  products$;
  categories$;
  isUpdating$;
  device_screen; 

  @Input() p_products;

  constructor(
    private productFacade: ProductFacadeService,
    private userFacade: UserFacadeService,
    private categoryFacade: CategoryFacadeService,
    public loadingController: LoadingController,
    private formBuilder: FormBuilder,
    private route: Router,
    private productApi: ProductApiService,
    public alertController: AlertController,
    public modalController: ModalController,
    public toastController: ToastController,
    breakpointObserver: BreakpointObserver,
    public popoverController: PopoverController
  ) {
    ////loading
    //this.isUpdating$ = this.productFacade.isUpdating$();
 
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
  }

  ngOnChanges() {
    this.products$ = this.p_products.pipe(distinctUntilChanged());
  }

  ngOnInit() {
    //getCategories
    this.categories$ = this.categoryFacade.getCategories$();

    this.products$.subscribe(
      (res) => {
        if (res == undefined || res.length < 1) {
          this.no_product = true;
        }
      },
      (err) => {
        console.log(err);
      }
    );

    // FormGroup
    this.updateProduct = this.formBuilder.group({
      product_id: new FormControl(),
      production_status: new FormControl(),
      next_available_date: new FormControl(),
      productName: new FormControl(),
      selectCategory: new FormControl(),
      productDescription: new FormControl(),
      productImage: new FormControl(),
      metaTags: new FormControl(),
      productPrice: new FormControl(),
      in_stock: new FormControl(),
      sold: new FormControl(),
    });
  }

  viewImageOptions(image, product) {
    let data = { cloudImage: image, product: product };
    //View picture and get more options
    //this.presentImageView(data);
    this.pictureOptions(image, product);
  }

  async pictureOptions(image, product) {
    const data = { public_id: image.id };
    const alert = await this.alertController.create({
      cssClass: "my-custom-class",
      header: "Confirm!",
      message: "Replace Image!!!",
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          cssClass: "secondary",
          handler: () => { },
        },
        {
          text: "Okay",
          handler: () => {
            console.log("product: ", product, "image: ", data);

            ////upload new image
            //update product
            //delete cloudinary image
            //this.deleteCloudImage(Image_data);
          },
        },
      ],
    });

    await alert.present();
  }

  /*async presentImageView(data) {
    console.log(data);
    const modal = await this.modalController.create({
      component: ProductViewModalComponent,
      cssClass: "my-custom-class",
      componentProps: { ...data },
    });
    return await modal.present();
  }*/

  handleFileInput(event) {
    let file = event.target.files[0];
    if (file.type == "image/jpeg" || file.type == "image/png") {
      this.picture_uploaded = file;
    }
  }

  uploadImage() {
    const _formData = new FormData();
    _formData.append("image", this.picture_uploaded);

    //save picture
    this.productApi.uploadImage(_formData).subscribe(
      (res) => {
        let imagedata = res.data;
        this.updateProduct.value.productImage = imagedata;
        console.log(imagedata);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  update() {
    let store = this.userFacade.getCurrentStore();
    this.edit = false;

    let product = this.updateProduct.value;
    product._id = product.product_id
    this.productFacade.updateProduct({ product: product, store_id: store._id });
    this.clickButton = true;
  }

  editProduct() {
    this.edit = true;
    this.clickButton = true;
  }

  onDeleteProduct(product) {
    this.productFacade.removeProduct(product);
    this.clickButton = true;
  }

  expanded(p) {
    let product = { ...p };
    // Patch the values to html
    if (this.id == product._id) {
      return null;
    } else {
      this.id = product._id;
      this.updateProduct.patchValue({
        product_id: product._id,
        productName: product.productName,
        selectCategory: product.category,
        productDescription: product.productDescription,
        productImage: product.productImage,
        metaTags: product.metaTags,
        productPrice: product.productPrice,
        production_status: product.production_status,
        next_available_date: product.next_available_date,
        in_stock: product.in_stock,
        sold: product.sold,
      });
    }
  }

  onSubmit() {
    console.log("submit: ", this.updateProduct.value);
  }

  sendToParent() {
    let products;
    let data = "add_product"
    //check for lisence
    this.productFacade
      .getStoreProducts$()
      .pipe(distinctUntilChanged())
      .subscribe((res) => {
        products = res;
        let product_length = products.length
        let store = this.userFacade.getCurrentStore();
        let free_trial = store.free_trial;
        let trial_end_date
        let trial_number_products
        if (free_trial) {
          trial_end_date = free_trial.end_date;
          trial_number_products = free_trial.allowed_products
        }
        let return_policy_length = store.return_policy.length
        let lisences = store.lisence
        let today_ms = Date.now()
        let one_day_ms = 86400000

        //check for lisence
        if (product_length == 0 && return_policy_length == 0) {
          this.presentToast(
            "set up your return policy first!"
          );
          /*setTimeout(() => {
            this.route.navigate(["/store/return-policy"]);
          }, 1000)*/
        } else {
          let allow_access = false
          if (lisences.length > 0) {
            lisences.forEach(lisence => {
              let lisence_end_date = lisence.payed_amount.end_date
              let time_remaining = (lisence_end_date - today_ms) / one_day_ms

              if (product_length < lisence.number_of_products && time_remaining > 0) {
                allow_access = true
              }
            });
          } else {
            let trial_time_remaining = (trial_end_date - today_ms) / one_day_ms

            if (trial_time_remaining > 0 && product_length < trial_number_products) {
              allow_access = true
            }
          }

          if (allow_access) {
            this.segment.emit(data)
          } else {
            this.presentToast(
              "Buy license to add more products"
            );
          }
        }
      });
  }

  // present loading
  async presentLoading() {
    const loading = await this.loadingController.create({
      message: "Please wait...",
      duration: 500,
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
  }

  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2500,
    });
    toast.present();
  }
  setDesktopProductView(product){
    this.detail_view_product = product

  }
  
  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: ProductsPopoverComponent,
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true
    });
    console.log(ev)
    return await popover.present();
  }
  



}
