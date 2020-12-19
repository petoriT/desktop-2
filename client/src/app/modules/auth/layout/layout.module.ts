import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LayoutPageRoutingModule } from './layout-routing.module';
import { LayoutPage } from './layout.page';
import { ComponentsModule } from '../shared/components/components.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LayoutPageRoutingModule,
    ComponentsModule
  ],
  declarations: [LayoutPage]
})
export class LayoutAuthPageModule {}
