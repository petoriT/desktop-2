import { Component, Output, OnInit, ViewChild,  EventEmitter, } from "@angular/core";
import { FormGroup, FormArray, FormBuilder, Validators } from "@angular/forms";
import { IonSlides } from "@ionic/angular";
import { ToastController } from "@ionic/angular";
import { AlertController } from "@ionic/angular";
import { ProductApiService } from "src/app/core-modules/services/products/product-api/product-api.service";
import { VoucherApiService } from "src/app/core-modules/services/vouchers/voucher-api/voucher-api.service";
import { Router } from "@angular/router";
import { UserFacadeService } from "src/app/core-modules/services/profile/profile-facade/profile-facade.service";
import { VoucherFacadeService } from 'src/app/core-modules/services/vouchers/voucher-facade/voucher-facade.service';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

@Component({
  selector: "app-runsale",
  templateUrl: "./runsale.component.html",
  styleUrls: ["./runsale.component.scss"],
})
export class RunsaleComponent implements OnInit {
  @ViewChild("addPromoSlider") slides: IonSlides;
  @Output() notifyParent: EventEmitter<any> = new EventEmitter<any>();
  public run_sale: boolean;
  public slideTwo: FormGroup;
  public slideThree: FormGroup;
  public slideFour: FormGroup;

  showBadgeSale: boolean = false;
  showBadgeVoucher: boolean = false;
  public productList: FormArray;
  public products: any;
  public showMe: boolean;

  // on Selection promo_type
  public discount: boolean;
  public item_limit: boolean;
  public secondary_Product: boolean;
  public buy1get1free: boolean;
  public volume: boolean;
  public productId: string;
  public promo_type: string;
  device_screen;
  showBack;
  showNext;
  slides_number = 1;
  // returns all form groups under properties
  get productFormGroup() {
    return this.slideFour.get("products") as FormArray;
  }

 
  constructor(
    private formBuilder: FormBuilder,
    public toastController: ToastController,
    public alertController: AlertController,
    private voucherService: VoucherApiService,
    private voucherFacade: VoucherFacadeService,
    private userFacade: UserFacadeService,
    private productApi: ProductApiService,
    private router: Router,
    breakpointObserver: BreakpointObserver,
  ) {
    
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

  ngOnInit() {
    //get current store
    this.showBack = false;
    this.showNext = true;

    let store = this.userFacade.getCurrentStore();
    this.productApi.getStoreProductsById({ id: store._id }).subscribe(
      (res) => {
        this.products = res.products;
      },
      (err) => {
        console.log(err);
      }
    );

    // slide forms

    // First slide uses segments

    this.slideTwo = this.formBuilder.group({
      title: [""],
      exp_date: [""],
    });

    this.slideThree = this.formBuilder.group({
      type: [""],
      platform: [[]],
    });

    this.slideFour = this.formBuilder.group({
      products: this.formBuilder.array([this.createProduct()]),
    });

    // set productList to the form control containing propeties
    this.productList = this.slideFour.get("products") as FormArray;
  }

  // concatinate all values to one object
  createPromo() {
    let store = this.userFacade.getCurrentStore();
    let promo = {
      run_sale: this.run_sale,
      type: this.slideThree.value.type,
      title: this.slideTwo.value.title,
      products: this.slideFour.value.products,
      total_quota: 15,
      platform: this.slideThree.value.platform,
      exp_date: this.slideTwo.value.exp_date,
    };
    this.voucherService
      .createVoucher({ promo: promo, store_id: store._id })
      .subscribe(
        (res) => {
          this.router.navigate(["/store/sales"]);
        },
        (err) => {
          console.log(err);
        }
      );
  }

  // Sale or Voucher Selection
  segmentChanged(value) {
    let data = value.detail.value;
    if (data == "sale") {
      this.run_sale = true;
    }
    if (data == "voucher") {
      this.run_sale = false;
    }
  }

  changeSecProduct(value) {
    this.productId = value.detail.value;
  }

  promo_typeOnChange(event) {
    this.promo_type = event.detail.value;
    switch (event.detail.value) {
      case "buy1get1free":
        this.buy1get1free = false;
        this.secondary_Product = false;
        this.volume = false;
        break;

      case "combo":
        this.buy1get1free = true;
        this.item_limit = false;
        this.discount = true;
        this.secondary_Product = true;
        this.volume = false;
        break;

      case "volume":
        this.buy1get1free = true;
        this.discount = true;
        this.item_limit = true;
        this.volume = true;
        this.secondary_Product = false;
        break;

      case "itemDiscount":
        this.buy1get1free = true;
        this.discount = true;
        this.item_limit = false;
        this.secondary_Product = false;
        this.volume = false;
        break;
    }
  }

  swipeNextSale() {
    setTimeout(() => {
      this.slides.slideNext();
      this.presentSaleToast();
    }, 1000);
  }

  swipeNext() {
    this.slides.slideNext();
  }

  swipeNextVoucher() {
    setTimeout(() => {
      this.slides.slideNext(), this.presentVoucherToast();
    }, 1000);
  }

  next() {
    this.slides.lockSwipes(false);
    this.slides.slideNext();

  }

  slidesBack() {
    this.slides.lockSwipes(false);
    this.slides.slidePrev();

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
    this.slides.lockSwipes(true);
  }

  async presentSaleToast() {
    const toast = await this.toastController.create({
      message: "Sale selected as promo type",
      position: "bottom",
      animated: true,
      duration: 2000,
    });

    toast.present();
    this.showBadgeSale = true;
    this.showBadgeVoucher = false;
    setTimeout(() => {
   
    }, 2010);
  }
  async presentVoucherToast() {
    const toast = await this.toastController.create({
      message: "Voucher selected as Promo type.",
      position: "bottom",
      animated: true,
      duration: 2000,
    });
    toast.present();
    this.showBadgeVoucher = true;
    this.showBadgeSale = false;
    setTimeout(() => {
   
    }, 2010);
  }

  /*here we will have to have a way of making sure it run once*/
 

  // Generate new product
  createProduct(): FormGroup {
    return this.formBuilder.group({
      p_id: [""],
      p_quota: [""],
      discount: [""],
      items_exceeding: [""],
      s_id: [""],
    });
  }

  addProduct() {
    this.productList.push(this.createProduct());
    console.log(this.productFormGroup.controls)
  }

  removeProduct(index) {
    this.productList.removeAt(index);
  }

  getProductFormGroup(index): FormGroup {
    const formGroup = this.productList.controls[index] as FormGroup;
    return formGroup;
  }
  onClickBack() {
   
      this.notifyParent.emit("ad_promo");
    console.log('dff')
  }

}
