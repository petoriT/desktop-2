import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { PaymentRoutingModule } from './payment.routing.module';
import { PaymentPage } from './payment.page';
import { ComponentsModule } from '../pages/checkout/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaymentRoutingModule,
    ComponentsModule
  ],
  declarations: [PaymentPage]
})
export class PaymentPageModule {}
