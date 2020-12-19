import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LayoutPage } from './layout.page';
import { LayoutRoutingModule } from './layout.routing.module';
import { ComponentsModule } from '../shared/components/components.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LayoutRoutingModule,
    ComponentsModule,
  ],
  declarations: [LayoutPage]
})
export class LayoutPageModule {}
