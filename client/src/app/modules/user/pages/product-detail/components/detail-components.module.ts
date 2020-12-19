import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatExpansionModule} from '@angular/material/expansion';
import { IonicRatingModule } from 'ionic4-rating';

//Detail modules
import { DetailsComponent  } from './details/details.component';
import { SimilarProductsComponent  } from'./similar-products/similar-products.component';


@NgModule({
  declarations: [
  DetailsComponent,
  SimilarProductsComponent,
],
  imports: [
    CommonModule,
    IonicRatingModule,
    MatExpansionModule,
  ],
  exports: [
    DetailsComponent,
    SimilarProductsComponent,
  ]
})
export class DetailComponentsModule { }
