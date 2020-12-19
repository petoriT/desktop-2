import { Component, OnInit, ViewChild  } from '@angular/core';
import { IonSlides } from "@ionic/angular";
import { CartService } from "src/app/core-modules/services/cart/cart-state/cart.service";

@Component({
  selector: 'app-guest',
  templateUrl: './guest.page.html',
  styleUrls: ['./guest.page.scss'],
})
export class GuestPage implements OnInit {
public cart;
public edit;
  @ViewChild("guest_slides", { static: true }) slides: IonSlides;
  constructor(
    private cartService: CartService,
  ) { }

  ngOnInit() {
    this.cart = this.cartService.getCart();
    console.log(this.cart)
  }
  next(){
    this.slides.slideNext();
    console.log("okay")
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
    this.edit = product
  }

 
}
