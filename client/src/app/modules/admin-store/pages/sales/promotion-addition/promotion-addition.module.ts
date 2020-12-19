import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PromotionAdditionPageRoutingModule } from './promotion-addition-routing.module';

import { PromotionAdditionPage } from './promotion-addition.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PromotionAdditionPageRoutingModule
  ],
  declarations: [PromotionAdditionPage]
})
export class PromotionAdditionPageModule {}
