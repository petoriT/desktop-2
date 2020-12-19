import { Component, OnInit } from "@angular/core";
import { UserFacadeService } from "src/app/core-modules/services/profile/profile-facade/profile-facade.service";
import { Router } from "@angular/router";
import { HeaderStateService } from "src/app/core-modules/services/header/header-state/header-state.service";
import { IonSlides } from "@ionic/angular";
import { CartService } from "src/app/core-modules/services/cart/cart-state/cart.service";
@Component({
  selector: "app-checkout",
  templateUrl: "./checkout.page.html",
  styleUrls: ["./checkout.page.scss"],
})
export class CheckoutPage implements OnInit {

  public token;
  public path = true;
  public profile$;
  public modify;
  public cart;
  public paynow;
public edit;
public showNext;
public showBack;



  constructor(
    private userFacade: UserFacadeService,
    private router: Router,
    private headerState: HeaderStateService,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.showNext = true;
    this.showBack = false;
    this.token = !!localStorage.getItem("token");

    this.userFacade.getUser$().subscribe(
      (res) => {
        this.profile$ = res;
      },
      (err) => {
        console.log(err);
      }
    );
    this.cart = this.cartService.getCart();
  }

  logIn() {
    this.router.navigate(["/auth"]);
    this.headerState.setReturnRoute("/buy");
  }
  goToGuest() {
    this.router.navigate(["/guest"]);
  }
  editAddress() {
    this.modify = true;
  }

  next(slide) {
    slide.lockSwipes(false);
   slide.slideNext();
   slide.lockSwipes(true);
    this.paynow = true;

  }

  slidesBack(slide) {
    slide.lockSwipes(false);
    slide.slidePrev();
    slide.lockSwipes(true);
  
  }

  decreaseCartItem(product) {
    //if combo look for sec product
    if (product.secondary_product) {
      let sec_pro = this.cart.filter((item) => {
        return item._id == product.secondary_product._id;
      });
      this.cartService.decreaseProduct(sec_pro[0]);
    }
    // if any
    this.cartService.decreaseProduct(product);
  }

  increaseCartItem(product) {
    //if combo look for sec product
    if (product.secondary_product) {
      let sec_pro = this.cart.filter((item) => {
        return item._id == product.secondary_product._id;
      });
      this.cartService.increaseProduct(sec_pro[0]);
    }
    // if any
    this.cartService.increaseProduct(product);
  }
  removeCartItem(product) {
    //if combo look for sec product
    if (product.secondary_product) {
      let sec_pro = this.cart.filter((item) => {
        return item._id == product.secondary_product._id;
      });
      this.cartService.removeProduct(sec_pro[0]);
    }
    // if any
    this.cartService.removeProduct(product);
  }
  edits(product){
    if(product == this.edit){
      this.edit = null
    }else{
      this.edit = product
    }

  }

  selected(data){
if (this.edit == data)
    return "grey"
  }
  
  slideChange(event,slides) {
    slides.getActiveIndex().then((data) => {
  

      if (data == 1) {
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

}
