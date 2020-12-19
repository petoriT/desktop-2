import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReturnPolicyPageRoutingModule } from './return-policy-routing.module';

import { ReturnPolicyPage } from './return-policy.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReturnPolicyPageRoutingModule
  ],
  declarations: [ReturnPolicyPage]
})
export class ReturnPolicyPageModule {}
