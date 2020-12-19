import { Component, OnInit, Input, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from "@angular/forms";
import { ProfileApiService } from "src/app/core-modules/services/profile/profile-api/profile-api.service";
import { ProductApiService } from "src/app/core-modules/services/products/product-api/product-api.service";
import { HeaderStateService } from "src/app/core-modules/services/header/header-state/header-state.service";
import { IonSlides } from "@ionic/angular";
import { Location } from "@angular/common";
import { ToastController } from "@ionic/angular";
import { UserFacadeService } from 'src/app/core-modules/services/profile/profile-facade/profile-facade.service';
import { MenuStateService } from 'src/app/core-modules/services/menus/menu-state/menu-state.service';

@Component({
  selector: "app-store-register",
  templateUrl: "./store-register.page.html",
  styleUrls: ["./store-register.page.scss"],
})
export class StoreRegisterPage implements OnInit {
  //later use if google users are allowed to have a store
  //GoogleStrategy;
  @ViewChild("registerStore", { static: true }) slides: IonSlides;
  public business_registered = false;
  private companyRegistrationForm: FormGroup;
  private productsInfo: FormGroup;
  public picture_uploaded: any;
  public back;
  public backTouser;
  public returnUrl;
  public showNext;
  public showBack;
  public out_of_bound;
  public slides_number;
  public show;

  cities;
  areas = [];
  out_bound: FormGroup;
  //addressFormGroup: FormGroup;

  setProvince(province) {
    let provi = this.south_africa.filter((prov) => {
      return prov.province_name === province;
    });
    console.log(provi);
    this.cities = provi[0].cities;
  }

  setArea(city) {
    console.log(city);
    let found = this.areas.filter((area) => {
      return area === city;
    });
    if (found.length > 0) {
      return null;
    } else {
      this.areas.push(city);
    }
    console.log(this.areas);
  }

  clearAreas(i_area) {
    let cleared = this.areas.filter((area) => {
      return area !== i_area;
    });
    this.areas = cleared;
  }
  constructor(
    private formBuilder: FormBuilder,
    private userApi: ProfileApiService,
    private router: Router,
    private productApi: ProductApiService,
    private headerState: HeaderStateService,
    private _location: Location,
    public toastController: ToastController,

    public menuState: MenuStateService,
    private userFacade: UserFacadeService
  ) { }

  ionViewDidEnter() {
    this.slides.lockSwipes(true);
  }
  ngOnInit() {
    this.back = this.backFunction();
    this.showNext = true;
    this.showBack = false;
    this.backTouser = this.userBackFunction();
    this.returnUrl = this.headerState.return_route;

    this.slides.getActiveIndex().then((data) => {
      this.slides_number = data + 1;
    });

    this.companyRegistrationForm = this.formBuilder.group({
      name: [
        "",
        Validators.compose([Validators.minLength(3), Validators.required]),
      ],
      tag_line: [
        "",
        Validators.compose([Validators.maxLength(60), Validators.required]),
      ],
      email: [
        "",
        Validators.compose([
          Validators.maxLength(320),
          Validators.pattern(
            "^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$"
          ),
          Validators.required,
        ]),
      ],
      phone: [
        "",
        Validators.compose([Validators.minLength(10), Validators.required]),
      ],
    });

    this.productsInfo = this.formBuilder.group({
      delivery: new FormControl(),
      comp_reg_num: new FormControl(),
    });

    this.out_bound = this.formBuilder.group({
      out_bound_fee: new FormControl(),
    });

    /*this.addressFormGroup = new FormGroup({
      address: new FormControl(),
    });

    this.addressFormGroup
      .get("address")
      .valueChanges.subscribe((value) => console.log("value changed", value));
*/
  }

  submit() {
    let c_register = {
      ...this.companyRegistrationForm.value,
      logo: this.picture_uploaded,
      out_bound_fee: this.out_bound.value.out_bound_fee,
      free_delivery: this.areas,
    };
    this.userApi.storeRegister(c_register).subscribe(
      (res) => {
        this.userApi.storeProfiling(this.productsInfo.value).subscribe(
          (result) => {

            console.log(result)
            let store = result.store
            let user = result.user
            this.userFacade.loadUser()
            this.menuState.updateMenuStatus("admin");
            this.userFacade.loadStoreProfile(store._id);
            this.router.navigate(["/admin-store/store"]);
          },
          (err) => {
            this.presentToast("Error! ");
            console.log(err);
          }
        );
      },
      (err) => this.presentToast("Error! incomplete fields ")
    );
  }

  sendToggleVlaue(data) {
    this.business_registered = data.detail.checked;
  }
  outOfBound(data) {
    this.out_of_bound = data.detail.checked;
  }
  handleFileInput(event) {
    let file = event.target.files[0];
    if (file.type == "image/jpeg" || file.type == "image/png") {
      const _formData = new FormData();
      _formData.append("image", file);

      //save picture
      this.productApi.uploadImage(_formData).subscribe((res) => {
        this.picture_uploaded = res.data;
        console.log(this.picture_uploaded);
      });
    }
  }
  onClickBack() {
    this.router.navigate([this.returnUrl]);
  }
  next() {
    this.slides.lockSwipes(false);
    this.slides.slideNext();
    this.slides.lockSwipes(true);
  }

  slidesBack() {
    this.slides.lockSwipes(false);
    this.slides.slidePrev();
    this.slides.lockSwipes(true);
  }

  backFunction() {
    if (this.headerState.return_route == "/user/stores") {
      return true;
    } else {
      return false;
    }
  }
  userBackFunction() {
    if (this.headerState.return_route == "fromUser") {
      return true;
    } else {
      return false;
    }
  }
  backToUser() {
    this._location.back();
  }

  slideChange(event) {
    this.slides.getActiveIndex().then((data) => {
      this.slides_number = data + 1;

      if (data == 3) {
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
  }
  async presentToast(data) {
    const toast = await this.toastController.create({
      message: data,
      duration: 2000,
      position: "bottom",
    });
    toast.present();
  }

  public south_africa = [
    {
      province_name: "Limpopo",
      cities: [
        "Polokwane",
        "Giyane",
        "Lebowakgomo",
        "Musina",
        "Phalaborwa",
        "Seshego",
        "Sibasa",
        "Mokopane",
        "Thohoyandou",
        "Thabazimbi",
      ],
    },
    {
      province_name: "Gauteng",
      cities: [
        "Benoni",
        "Boksburg",
        "Brakpan",
        "Carletonville",
        "Germiston",
        "Johannesburg",
        "Krugersdorp",
        "Randburg",
        "Randfontein",
        "Roodeport",
        "Pretoria",
        "Soweto",
        "Springs",
        "Vanderbijlpark",
        "Vereeniging",
      ],
    },
    {
      province_name: "Kwazulu Natal",
      cities: [
        "Durban",
        "Empangeni",
        "Ladysmith",
        "Newcastle",
        "Pietermaritzburg",
        "Pinetown",
        "Ulundi",
        "Umlazi",
      ],
    },
    {
      province_name: "North West",
      cities: [
        "Klerksdorp",
        "Mahikeng",
        "Mmabatho",
        "Potchefstroom",
        "Rustenburg",
      ],
    },
    {
      province_name: "Northen Cape",
      cities: [
        "Kimberley",
        "Kuruman",
        "Port Nolloth",
        "Upington",
        "De Aar",
        "Bellville",
      ],
    },
    {
      province_name: "Western Cape",
      cities: [
        "Bellville",
        "Cape Town",
        "Constantia",
        "George",
        "Hopefield",
        "Oudtshoorn",
        "Paarl",
        "Simon’s Town",
        "Stellenbosch",
        "Swellendam",
        "Worcester",
      ],
    },
    {
      province_name: "Mpumalanga",
      cities: [
        "Emalahleni",
        "Nelspruit",
        "Secunda",
        "Bushbuckridge",
        "Hazeyview",
      ],
    },
    {
      province_name: "Free State",
      cities: [
        "Bethlehem",
        "Bloemfontein",
        "Jagersfontein",
        "Kroonstad",
        "Odendaalsrus",
        "Parys",
        "Phuthaditjhaba",
        "Sasolburg",
        "Virginia",
        "Welkom",
      ],
    },
    {
      province_name: "Eastern Cape",
      cities: [
        "Alice",
        "Butterworth",
        "Jagersfontein",
        "Graaff-Reinet",
        "Grahamstown",
        "Parys",
        "Phuthaditjhaba",
        "King William’s Town",
        "Mthatha",
        "Port Elizabeth",
        "Queenstown",
        "Uitenhage",
        "Zwelitsha",
      ],
    },
  ];
}
