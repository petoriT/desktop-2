import { Injectable } from "@angular/core";
import { Md5 } from "ts-md5/dist/md5";
import { ProfileApiService } from "src/app/core-modules/services/profile/profile-api/profile-api.service";
import { PaymentApiService } from "src/app/core-modules/services/payments/payment-api/payment-api.service";
import { EnvService } from "src/app/env.service";

@Injectable({
  providedIn: "root",
})
export class PayfastFacadeService {
  md5 = new Md5();

  constructor(
    private paymentApi: PaymentApiService,
    private userApi: ProfileApiService,
    private env: EnvService
  ) {}

  temporaryOrder(order_info, lisence) {
    let cart;
    let real;
    //check if its license or product
    if (lisence) {
      cart = lisence;
      real = true;
    } else {
      cart = JSON.parse(localStorage.getItem("cart"));
    }
    let temp = {
      data: order_info,
      cart: cart,
      lisence: real,
    };

    this.paymentApi.tempOrder(temp).subscribe(
      (res) => {
        return res.order[0].m_payment_id;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  getPayfastForm() {
    // get auth and process paymnet

    let payfastForm: any = {};
    let hash;

    this.userApi.getUser().subscribe(
      (res) => {
        // Merchant details
        payfastForm.merchant_id = "10016542";
        payfastForm.merchant_key = "w7wn35bsap1pf";
        payfastForm.return_url = `${this.env.apiUrl}/buy/payment/checkout/payfast/success`;
        payfastForm.cancel_url = `${this.env.apiUrl}/buy/payment/checkout/payfast/cancel`;
        payfastForm.notify_url = `${this.env.apiUrl}/api/payfast/notify_url`;

        // Buyer Details
        payfastForm.buyer_email = res.user.email;

        // Transaction Details
        payfastForm.m_payment_id = this.randomize();
        payfastForm.amount = parseFloat(localStorage.getItem("total")).toFixed(
          2
        );
        payfastForm.item_name = this.randomize();
        payfastForm.item_description = this.randomize();
        payfastForm.email_confirmation = "1";
        payfastForm.confirmation_address = res.user.email;

        // Set Payment Method
        payfastForm.payment_method = "eft";

        //generate a signature
        hash = `merchant_id=${encodeURIComponent(
          payfastForm.merchant_id
        )}&merchant_key=${encodeURIComponent(
          payfastForm.merchant_key
        )}&return_url=${encodeURIComponent(
          payfastForm.return_url
        )}&cancel_url=${encodeURIComponent(
          payfastForm.cancel_url
        )}&notify_url=${encodeURIComponent(
          payfastForm.notify_url
        )}&email_address=${encodeURIComponent(
          payfastForm.buyer_email
        )}&m_payment_id=${encodeURIComponent(
          payfastForm.m_payment_id
        )}&amount=${encodeURIComponent(
          payfastForm.amount
        )}&item_name=${encodeURI(
          payfastForm.item_name
        )}&item_description=${encodeURI(
          payfastForm.item_description
        )}&email_confirmation=${encodeURIComponent(
          payfastForm.email_confirmation
        )}&confirmation_address=${encodeURIComponent(
          payfastForm.confirmation_address
        )}&payment_method=${encodeURIComponent(payfastForm.payment_method)}`;

        // MD5 encode
        payfastForm.signature = this.md5.appendStr(hash).end();
      },
      (err) => {
        console.log(err);
      }
    );
    return payfastForm;
  }

  // randomize m_payment_id
  randomize() {
    // Randomize chars
    let length = 10;
    let chars =
      "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var result = "";
    for (var i = length; i > 0; --i)
      result += chars[Math.floor(Math.random() * chars.length)];
    return result;
  }
}
