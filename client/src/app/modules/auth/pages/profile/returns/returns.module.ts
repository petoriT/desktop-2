import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReturnsPageRoutingModule } from './returns-routing.module';

import { ReturnsPage } from './returns.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReturnsPageRoutingModule
  ],
  declarations: [ReturnsPage]
})
export class ReturnsPageModule {}
