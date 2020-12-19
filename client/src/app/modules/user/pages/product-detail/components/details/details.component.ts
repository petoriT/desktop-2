import {
  Component,
  OnInit,
  OnChanges,
  Input,
  ViewChild,
  SimpleChanges,
  OnDestroy,
} from "@angular/core";
import { trigger, style, animate, transition } from "@angular/animations";
import { CartFacadeService } from "src/app/core-modules/services/cart/cart-facade/cart-facade.service";
import { ProductFacadeService } from "src/app/core-modules/services/products/product-facade/product-facade.service";
import { HeaderStateService } from "src/app/core-modules/services/header/header-state/header-state.service";
import { Router, ActivatedRoute } from "@angular/router";
import { UserFacadeService } from "src/app/core-modules/services/profile/profile-facade/profile-facade.service";
import { IonSlides, ToastController } from "@ionic/angular";
import { distinctUntilChanged } from "rxjs/operators";

@Component({
  selector: "app-details",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.scss"],
  animations: [
    trigger("inOutAnimation", [
      transition(":enter", [
        style({ transform: "translateY(-45vh)", opacity: 1, color: "white" }),
        animate("1s ease-out", style({ opacity: 1 })),
      ]),
      /*transition(
        ':leave',
        [
          style({  opacity: 1 }),
          animate('1s ease-in',
                  style({ height: 0, opacity: 0 }))
        ]
      )*/
    ]),
  ],
})
export class DetailsComponent implements OnInit, OnChanges, OnDestroy {
  @Input() product_id: string;
  public fullDescription = false;
  public product$;
  public product;
  public cart$;
  public profile;
  public seeBOM;
  public has_BOM;
  public components_incuded: any[] = [];
  public features;
  @Input() detail_product;

  //the product$ should have tche component as this
  public components = [];

  rate;
  public show_properties;
  panelOpenState;
  classZero = "active_expansion";
  classOne = "not_active_expansion";
  classTwo = "not_active_expansion";
  step = 0;
  @ViewChild("productDetailSlide", { static: true }) slides: IonSlides;
  constructor(
    private cartFacade: CartFacadeService,
    private _productFacade: ProductFacadeService,
    private headerState: HeaderStateService,
    private route: Router,
    private activeRoute: ActivatedRoute,
    private userFacade: UserFacadeService,
    public toastController: ToastController
  ) {}

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    this.product$ = this.detail_product;
    setTimeout(() => {
      console.log("now...");
    }, 1000);
  }

  ngOnInit() {
    this.userFacade.loadUser();
    this.seeBOM = false;

    /*this.product$ = this._productFacade
      .getCurrentProduct()
      .pipe(distinctUntilChanged());*/

    this.product$.subscribe(
      (res) => {
        this.product = res[0];
        //here check if the products has a bill of material if has set has_BOM to true

        if (res[0]) {
          if (res[0].bill_of_material) {
            this.has_BOM = true;
            //push to components only if selected is false
            this.components = res[0].bill_of_material.filter((item) => {
              return !item.selected;
            });
            this.components_incuded = res[0].bill_of_material.filter((item) => {
              return item.selected;
            });
          } else {
            this.components_incuded = [];
            this.components = [];
          }
        }
      },
      (err) => {
        console.log(err);
      }
    );

    this.userFacade.getUser$().subscribe(
      (res) => {
        this.profile = res;
      },
      (err) => {
        console.log(err);
      }
    );

    this.show_properties = true;
    setTimeout(function () {
      this.show_properties = false;
    }, 2000);
  }

  addBOM(chip, chipID) {
    let new_product = this.product;
    chip.selected = true;
    this.components_incuded.push(chip);
    let c = this.components.filter((item) => {
      return item._id !== chipID;
    });
    this.components = c;
    new_product["bill_of_material"] = [
      ...this.components_incuded,
      ...this.components,
    ];
    //modify product price
    let new_price;
    if (chip.BOM_type == "material") {
      new_price =
        this.product.productPrice -
        parseInt(chip.base_material_price) +
        parseInt(chip.price);
      //construct bom
      new_product["modified_price"] = new_price;
      new_product["productPrice"] = new_price;
    } else {
      new_price = this.product.productPrice + parseInt(chip.price);
      new_product["modified_price"] = new_price;
      new_product["productPrice"] = new_price;
    }

    this._productFacade.setCurrentProduct([new_product]);
  }

  showBOM(data) {
    this.seeBOM = data;
  }
  removeBOM(chip, chipID) {
    let new_product = this.product;
    chip.selected = false;
    this.components.push(chip);
    let c = this.components_incuded.filter((item) => {
      return item._id !== chipID;
    });
    this.components_incuded = c;

    new_product["bill_of_material"] = [
      ...this.components_incuded,
      ...this.components,
    ];
    //modify product price
    let new_price;
    if (chip.BOM_type == "material") {
      new_price =
        this.product.productPrice -
        parseInt(chip.price) +
        parseInt(chip.base_material_price);
      new_product["modified_price"] = new_price;
      new_product["productPrice"] = new_price;
    } else {
      new_price = this.product.productPrice - parseInt(chip.price);
      new_product["modified_price"] = new_price;
      new_product["productPrice"] = new_price;
    }

    this._productFacade.setCurrentProduct([new_product]);
  }

  disProperties(data) {
    this.show_properties = data;
  }
  onRateChange(data) {
    console.log(data);
  }

  setStep(index: number) {
    this.step = index;
    switch (this.step) {
      case 0:
        this.classZero = "active_expansion";
        this.classOne = "not_active_expansion";
        this.classTwo = "not_active_expansion";
        break;
      case 1:
        this.classZero = "not_active_expansion";
        this.classOne = "active_expansion";
        this.classTwo = "not_active_expansion";
        break;
      case 2:
        this.classZero = "not_active_expansion";
        this.classOne = "not_active_expansion";
        this.classTwo = "active_expansion";
        break;
    }
  }

  rating(ratings) {
    //get AVERAGE RATING
    let total = 0;
    for (let i = 0; i < ratings.length; i++) {
      total += ratings[i].rate;
    }
    let avg = total / ratings.length;
    return avg;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  addToCart(product) {
    this.cartFacade.addToCart(product);
  }

  vendorPage() {
    this.route.navigate(["/vendor-profile/", this.product.storeId]);
  }

  likeA(product) {
    this._productFacade.updateLike(product);
  }
  showFull() {
    this.fullDescription = true;
  }
  showLess() {
    this.fullDescription = false;
  }
  async presentSaleToast(data) {
    const toast = await this.toastController.create({
      message: data,
      position: "bottom",
      animated: true,
      duration: 2000,
    });
    toast.present();
  }
  next2() {
    this.slides.slideNext();
    this.slides.slideNext();
    this.presentSaleToast("slide to go back");
  }
  next() {
    this.slides.slideNext();
    this.presentSaleToast("slide to see more");
  }

  ngOnDestroy() {
    this._productFacade.resetCurrentProduct();
  }
  /*decreaseItem(product){
      for(let cart_p of this.cart$){
        if(product._id == cart_p._id){
          this.decreasing(product)
        }else{
          return null
        }
      }
    }

    decreasing(product){
      //if combo look for sec product
      if(product.secondary_product){
        let sec_pro = this.cart$.filter(item => {
          return item._id == product.secondary_product._id
        })
        this.cartService.decreaseProduct(sec_pro[0])
      }
      // if any
      this.cartService.decreaseProduct(product);
    }

    increaseItem(product){
      for(let cart_p of this.cart$){
        if(product._id == cart_p._id){
          this.adding(product)
        }else{
          this.cartFacade.addToCart(product);
          this.adding(product)
        }
      }
    }

    adding(product){
      //if combo look for sec product
      if(product.secondary_product){
        let sec_pro = this.cart$.filter(item => {
          return item._id == product.secondary_product._id
        })
        this.cartService.increaseProduct(sec_pro[0])
      }
      // if any
      this.cartService.increaseProduct(product)
    }

    removeCartItem(product){
      for(let cart_p of this.cart$){
        if(product._id == cart_p._id){
          this.removing(product)
        }else{
          return null
        }
      }
    }

    removing(product){
      //if combo look for sec product
      if(product.secondary_product){
        let sec_pro = this.cart$.filter(item => {
          return item._id == product.secondary_product._id
        })
        this.cartService.removeProduct(sec_pro[0])
      }
      // if any
      this.cartService.removeProduct(product)
    }*/
}
