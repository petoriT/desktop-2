import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StoreSelectionsPageRoutingModule } from './store-selections-routing.module';

import { StoreSelectionsPage } from './store-selections.page';
import { StoresModule  } from './stores/stores.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StoresModule ,
    StoreSelectionsPageRoutingModule,
   
  ],
  declarations: [StoreSelectionsPage]
})
export class StoreSelectionsPageModule {}
