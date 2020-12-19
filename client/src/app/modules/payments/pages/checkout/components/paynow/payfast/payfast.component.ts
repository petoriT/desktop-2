import { Component, OnInit } from "@angular/core";
import { Md5 } from "ts-md5/dist/md5";
import { PayfastFacadeService } from "src/app/core-modules/services/payments/payfast-facade/payfast-facade.service";

@Component({
  selector: "app-payfast",
  templateUrl: "./payfast.component.html",
  styleUrls: ["./payfast.component.scss"],
})
export class PayfastComponent implements OnInit {
  md5 = new Md5();

  // payfast Form
  payfastForm: any = {};

  constructor(private payfastFacade: PayfastFacadeService) {}

  ngOnInit() {
    this.payfastForm = this.payfastFacade.getPayfastForm();
  }

  tempCart(order_info) {
    // Temporary cart for success response
    this.payfastFacade.temporaryOrder(order_info, null);
  }
}
