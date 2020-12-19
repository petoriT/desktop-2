import { Component, OnInit } from "@angular/core";
import { OrderFacadeService } from "src/app/core-modules/services/orders/order-facade/order-facade.service";
import { FormGroup, FormControl } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-delivery-verification",
  templateUrl: "./delivery-verification.page.html",
  styleUrls: ["./delivery-verification.page.scss"],
})
export class DeliveryVerificationPage implements OnInit {
  verifyReviewForm = new FormGroup({
    courier_ref: new FormControl(""),
    courier_OTP: new FormControl(""),
  });

  constructor(
    private _orderFacade: OrderFacadeService,
    private router: Router
  ) {}

  ngOnInit() {}

  verifyDelivery() {
    let data = this.verifyReviewForm.value;
    this._orderFacade.verifyOrderDelivery(data);
    this.router.navigate(["/user/landing/home"]);
  }
}
