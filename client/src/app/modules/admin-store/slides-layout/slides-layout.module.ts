import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SlidesLayoutPageRoutingModule } from './slides-layout-routing.module';

import { SlidesLayoutPage } from './slides-layout.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SlidesLayoutPageRoutingModule
  ],
  declarations: [SlidesLayoutPage]
})
export class SlidesLayoutPageModule {}
