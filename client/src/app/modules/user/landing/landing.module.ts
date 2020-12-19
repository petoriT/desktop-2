import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

// Sub Modules
import { LandingPage } from './landing.page';
import { LandingRoutingModule } from './landing.routing.module';
import { ComponentsModule } from '../shared/components/components.module';
import { HomeComponentsModule } from "../pages/home/components/home-components.module";
//Where is product detail, where do you route product detail?
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LandingRoutingModule,
    ComponentsModule,
    HomeComponentsModule
  ],
  declarations: [LandingPage]
})
export class LandingPageModule {}
