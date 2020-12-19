import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PoliciesPageRoutingModule } from './policies-routing.module';

import { PoliciesPage } from './policies.page';
import {MatExpansionModule} from '@angular/material/expansion';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatExpansionModule,
    PoliciesPageRoutingModule
  ],
  declarations: [PoliciesPage]
})
export class PoliciesPageModule {}
