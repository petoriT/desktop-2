import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicRatingModule } from 'ionic4-rating';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { OrdersComponent } from "./orders/orders.component";
import { NotificationsComponent} from "./notifications/notifications.component";
import { ProductReviewComponent} from "./product-review/product-review.component";
import { AddReviewComponent} from "./add-review/add-review.component";
import {QueryComponent} from "./orders/query/query.component"

import {SettingsComponent} from "./settings/settings.component";
import {MatExpansionModule} from '@angular/material/expansion';
import { RouterModule } from '@angular/router';
import {MatStepperModule} from '@angular/material/stepper';

@NgModule({
  declarations: [
 
    OrdersComponent,
    NotificationsComponent,
    SettingsComponent,
    ProductReviewComponent,
    AddReviewComponent,
    QueryComponent
  ],
  imports: [

    CommonModule,
    MatExpansionModule,
    IonicRatingModule,
    FormsModule, 
    ReactiveFormsModule,
    RouterModule,
    MatStepperModule

  ],
  exports:[

    OrdersComponent,
    NotificationsComponent,
    SettingsComponent,
    ProductReviewComponent,
    AddReviewComponent,
    QueryComponent
  

  ]
})
export class ProfileComponentsModule { }
