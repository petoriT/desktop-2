import { Component, OnInit } from "@angular/core";
import { CartService } from "src/app/core-modules/services/cart/cart-state/cart.service";

@Component({
  selector: "app-success",
  templateUrl: "./success.page.html",
  styleUrls: ["./success.page.scss"],
})
export class SuccessPage implements OnInit {
  constructor(private cartService: CartService) {}

  ngOnInit() {
    localStorage.removeItem("cart");
    this.cartService.clearCart();
  }
}
