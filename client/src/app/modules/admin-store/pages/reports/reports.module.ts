import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReportsPageRoutingModule } from './reports-routing.module';

import { ReportsPage } from './reports.page';

import {SubReportsModule} from './sub-reports/sub-reports.module'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReportsPageRoutingModule,
   
    SubReportsModule
    
  ],
  declarations: [ReportsPage]
})
export class ReportsPageModule {}
