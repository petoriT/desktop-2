import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { ThrowStmt } from "@angular/compiler";

@Injectable({
  providedIn: "root",
})
export class CartService {
  private cart = [];
  private cartItemCount = new BehaviorSubject(0);

  constructor() {}

  clearCart() {
    this.cart = [];
    this.cartItemCount.next(0);
  }

  getCart() {
    return this.cart;
  }

  getCartItemCount() {
    if (!!localStorage.getItem("cart")) {
      this.cart = JSON.parse(localStorage.getItem("cart"));
      let cartAmount = 0;
      for (let p of this.cart) {
        cartAmount += p.amount;
      }
      //let cart_total = this.cartItemCount.value + cartAmount;
      this.cartItemCount.next(cartAmount);
      return this.cartItemCount;
    } else {
      return this.cartItemCount;
    }
  }

  addProduct(product) {
    let added = false;
    //if the product already exist in the cart
    for (let p of this.cart) {
      // if product has no promo
      if (
        p._id === product._id &&
        p.productPrice === product.productPrice &&
        !p.promo_kind
      ) {
        p.amount += 1;
        this.cartItemCount.next(this.cartItemCount.value + 1);
        added = true;
        break;
      }

      //Item discount
      if (
        p._id === product._id &&
        p.productPrice === product.productPrice &&
        p.promo_kind == "itemDiscount"
      ) {
        p.amount += 1;
        this.cartItemCount.next(this.cartItemCount.value + 1);
        added = true;
        break;
      }

      //volume discount
      if (
        p._id === product._id &&
        p.productPrice === product.productPrice &&
        p.promo_kind == "volume"
      ) {
        console.log("volume");
        p.amount += product.thresh;
        this.cartItemCount.next(this.cartItemCount.value + product.thresh);
        added = true;
        break;
      }

      //buy1get1 discount
      if (
        p._id === product._id &&
        p.productPrice === product.productPrice &&
        p.promo_kind == "buy1get1free"
      ) {
        console.log("buy1get1free");
        p.amount += 1;
        this.cartItemCount.next(this.cartItemCount.value + 1);
        added = true;
        break;
      }

      //combo discount
      if (
        p._id === product._id &&
        p.productPrice === product.productPrice &&
        p.promo_kind == "combo"
      ) {
        console.log("combo");
        p.amount += 1;
        this.cartItemCount.next(this.cartItemCount.value + 1);
        added = true;
        break;
      }
    }
    // if first time product
    if (!added) {
      this.cart.push(product);
      //Update cartItemCount and cart
      this.cartItemCount.next(this.cartItemCount.value + product.amount);
    }
    localStorage.setItem("cart", JSON.stringify(this.cart));
  }

  increaseProduct(product) {
    if (product.promo_kind) {
      for (let p of this.cart) {
        //if  item Discount
        if (
          p._id === product._id &&
          p.productPrice === product.productPrice &&
          product.promo_kind == "itemDiscount"
        ) {
          p.amount += 1;
          this.cartItemCount.next(this.cartItemCount.value + 1);
          break;
        }
        // if volume Discount
        if (
          p._id === product._id &&
          p.productPrice === product.productPrice &&
          product.promo_kind == "volume"
        ) {
          p.amount += product.thresh;
          this.cartItemCount.next(this.cartItemCount.value + product.thresh);
          break;
        }

        //buy1get1free Discount
        if (
          p._id === product._id &&
          p.productPrice === product.productPrice &&
          product.promo_kind == "buy1get1free"
        ) {
          p.amount += 1;
          this.cartItemCount.next(this.cartItemCount.value + 1);
          break;
        }

        //Combo Discount
        if (
          p._id === product._id &&
          p.productPrice === product.productPrice &&
          product.promo_kind == "combo"
        ) {
          p.amount += 1;
          this.cartItemCount.next(this.cartItemCount.value + 1);
          break;
        }
      }

      for (let p of this.cart) {
        // if buy1get1 & product is free
        if (
          p._id === product._id &&
          p.productPrice === 0 &&
          product.promo_kind == "buy1get1free"
        ) {
          p.amount += product.thresh;
          this.cartItemCount.next(this.cartItemCount.value + product.thresh);
          break;
        }
      }
    } else {
      // if product has no promo
      for (let p of this.cart) {
        if (
          p._id === product._id &&
          p.productPrice === product.productPrice &&
          !p.promo_kind
        ) {
          p.amount += 1;
          this.cartItemCount.next(this.cartItemCount.value + 1);
          break;
        }
      }
    }
    localStorage.setItem("cart", JSON.stringify(this.cart));
  }

  decreaseProduct(product) {
    if (product.promo_kind) {
      for (let [index, p] of this.cart.entries()) {
        //if  item Discount
        if (
          p._id === product._id &&
          p.productPrice === product.productPrice &&
          product.promo_kind == "itemDiscount"
        ) {
          p.amount -= 1;
          if (p.amount == 0) {
            this.cart.splice(index, 1);
            p.amount = 1;
          }
          this.cartItemCount.next(this.cartItemCount.value - 1);
          break;
        }

        // if volume Discount
        if (
          p._id === product._id &&
          p.productPrice === product.productPrice &&
          product.promo_kind == "volume"
        ) {
          p.amount -= product.thresh;
          if (p.amount == 0) {
            this.cart.splice(index, 1);
            p.amount = 1;
          }
          this.cartItemCount.next(this.cartItemCount.value - product.thresh);
          break;
        }

        // if buy1get1free
        if (
          p._id === product._id &&
          p.productPrice === product.productPrice &&
          product.promo_kind == "buy1get1free"
        ) {
          p.amount -= 1;
          if (p.amount == 0) {
            this.cart.splice(index, 1);
            p.amount = 1;
          }
          this.cartItemCount.next(this.cartItemCount.value - 1);
          break;
        }

        //Combo Discount
        if (
          p._id === product._id &&
          p.productPrice === product.productPrice &&
          product.promo_kind == "combo"
        ) {
          p.amount -= 1;
          if (p.amount == 0) {
            this.cart.splice(index, 1);
            p.amount = 1;
          }
          this.cartItemCount.next(this.cartItemCount.value - 1);
          break;
        }
      }

      for (let [index, p] of this.cart.entries()) {
        // if buy1get1 & product is free
        if (
          p._id === product._id &&
          p.productPrice === 0 &&
          product.promo_kind == "buy1get1free"
        ) {
          p.amount -= 1;
          if (p.amount == 0) {
            this.cart.splice(index, 1);
            p.amount = 1;
          }
          this.cartItemCount.next(this.cartItemCount.value - 1);
          break;
        }
      }
    } else {
      // if product has no promo
      for (let [index, p] of this.cart.entries()) {
        if (
          p._id === product._id &&
          p.productPrice === product.productPrice &&
          !p.promo_kind
        ) {
          p.amount -= 1;
          if (p.amount == 0) {
            this.cart.splice(index, 1);
            p.amount = 1;
          }
          this.cartItemCount.next(this.cartItemCount.value - 1);
          break;
        }
      }
    }
    localStorage.setItem("cart", JSON.stringify(this.cart));
  }

  removeProduct(product) {
    for (let [index, p] of this.cart.entries()) {
      if (p._id === product._id && p.productPrice === product.productPrice) {
        this.cartItemCount.next(this.cartItemCount.value - p.amount);
        this.cart.splice(index, 1);
        p.amount = 1;
      }
    }

    for (let [index, p] of this.cart.entries()) {
      // if buy1get1free
      if (
        p._id === product._id &&
        p.productPrice === 0 &&
        product.promo_kind == "buy1get1free"
      ) {
        this.cartItemCount.next(this.cartItemCount.value - p.amount);
        this.cart.splice(index, 1);
        p.amount = 1;
      }

      // if combo
      if (
        p._id === product._id &&
        p.productPrice === product.productPrice &&
        product.promo_kind == "combo"
      ) {
        this.cartItemCount.next(this.cartItemCount.value - p.amount);
        this.cart.splice(index, 1);
        p.amount = 1;
      }
    }
    localStorage.setItem("cart", JSON.stringify(this.cart));
  }
}
