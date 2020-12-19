import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AllProductsModule  } from "./all-products/all-products.module";
import { IonicModule } from '@ionic/angular';

import { SeeAllProductsHomePageRoutingModule } from './see-all-products-home-routing.module';

import { SeeAllProductsHomePage } from './see-all-products-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllProductsModule ,
    SeeAllProductsHomePageRoutingModule
  ],
  declarations: [SeeAllProductsHomePage]
})
export class SeeAllProductsHomePageModule {}
