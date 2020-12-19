import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { DeliveryVerificationPageRoutingModule } from "./delivery-verification-routing.module";

import { DeliveryVerificationPage } from "./delivery-verification.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    DeliveryVerificationPageRoutingModule,
  ],
  declarations: [DeliveryVerificationPage],
})
export class DeliveryVerificationPageModule {}
