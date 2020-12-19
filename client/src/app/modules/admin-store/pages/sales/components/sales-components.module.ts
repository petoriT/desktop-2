import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import {MatExpansionModule} from '@angular/material/expansion';

import { PromoComponent } from './promo/promo.component';
import { PaymentsComponent } from './payments/payments.component';
import { OrdersComponent } from './orders/orders.component';
import { AddpromoComponent } from './modals/addpromo/addpromo.component';
import { RunsaleComponent } from './promo/runSale/runsale.component';
import { DeliverComponent } from './orders/deliver/deliver.component';
import { ReceiptsComponent } from './payments/receipts/receipts.component';


@NgModule({
  declarations: [
    PromoComponent,
    PaymentsComponent,
    OrdersComponent,
    AddpromoComponent,
    RunsaleComponent,
    DeliverComponent,
    ReceiptsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    IonicModule,
    ReactiveFormsModule,
    FormsModule,
    MatExpansionModule
  ],
  exports: [
    PromoComponent,
    PaymentsComponent,
    OrdersComponent,
    AddpromoComponent,
    RunsaleComponent,
    DeliverComponent,
    ReceiptsComponent
  ],
  entryComponents: [
    AddpromoComponent
  ]
})
export class SalesComponentsModule { }
