import { Component, OnInit, OnChanges } from '@angular/core';
import { PayfastFacadeService } from "src/app/core-modules/services/payments/payfast-facade/payfast-facade.service";
import { ProfileApiService } from 'src/app/core-modules/services/profile/profile-api/profile-api.service';
import { Md5 } from "ts-md5/dist/md5";

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit, OnChanges {
  md5 = new Md5();
  user_email
  payfastForm;
  selected_license
  billing_cycle_selected
  constructor(
    private payFacade: PayfastFacadeService,
    private userApi: ProfileApiService,
  ) { }
  ngOnChanges(){
    console.log(this.payfastForm)
  }

  ngOnInit() {
    let state = window.history.state
    this.user_email = state.user_email
    this.selected_license = {...state.selected_license}
    this.billing_cycle_selected = state.billing_cycle_selected
    this.payFast()
    console.log(this.payfastForm)
  }

  //Send form to payfast
  onSub(info) {
    localStorage.removeItem("license_name")
    let license = this.selected_license;  
    this.payFacade.temporaryOrder(info, license);
  }

  payFast() {
    if(this.selected_license){
      let payfastForm: any = {};
        // Merchant details
        payfastForm.merchant_id = "10016542";
        payfastForm.merchant_key = "w7wn35bsap1pf";
        payfastForm.return_url =
          "https://cartalist.herokuapp.com/buy/payment/checkout/payfast/success";
        payfastForm.cancel_url =
          "https://cartalist.herokuapp.com/buy/payment/checkout/payfast/cancel";
        payfastForm.notify_url = "https://cartalist.herokuapp.com/api/payfast/notify_url";

        // Buyer Details
        payfastForm.buyer_email = this.user_email;

        // Transaction Details
        payfastForm.m_payment_id = this.randomize();
        payfastForm.amount = this.selected_license.payed_amount.amount.toFixed(2);
        payfastForm.item_name = "Lisence";
        payfastForm.item_description = this.selected_license.license_name;
        payfastForm.email_confirmation = "1";
        payfastForm.confirmation_address = this.user_email;

        // Set Payment Method
        payfastForm.payment_method = "eft";
        
        let hash = `merchant_id=${encodeURIComponent(
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
        
        this.payfastForm = payfastForm
        
      
        console.log(payfastForm,this.payfastForm)
    }
    
    
  }

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
