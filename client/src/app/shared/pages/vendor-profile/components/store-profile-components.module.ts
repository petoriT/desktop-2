import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent} from './profile/profile.component'
import { StoreProductsComponent} from './store-products/store-products.component'
import { FormsModule } from '@angular/forms';
import {GemionicUiModule} from "src/assets/gm-components/gemionic.ui.module"


@NgModule({
  declarations: [
  	ProfileComponent,
  	StoreProductsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    GemionicUiModule
  ],
  exports: [
  	ProfileComponent,
  	StoreProductsComponent
  ]
})
export class StoreProfileComponentsModule { }
