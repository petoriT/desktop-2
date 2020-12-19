import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductAdditionPageRoutingModule } from './product-addition-routing.module';

import { ProductAdditionPage } from './product-addition.page';
import { ProductsComponentsModule } from '../components/products-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductAdditionPageRoutingModule,
    ProductsComponentsModule
  ],
  declarations: [ProductAdditionPage]
})
export class ProductAdditionPageModule {}
