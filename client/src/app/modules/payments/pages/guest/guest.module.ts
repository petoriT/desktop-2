import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GuestPageRoutingModule } from './guest-routing.module';

import { GuestPage } from './guest.page';
import { ComponentsModule } from '../checkout/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GuestPageRoutingModule,
    ComponentsModule
  ],
  declarations: [GuestPage]
})
export class GuestPageModule {}
