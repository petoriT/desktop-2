import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UnitsSoldComponent} from './units-sold/units-sold.component';
import {ReportsComponentsModule} from '../reports-components/reports-components.module';
import {DatePipe} from '@angular/common'

@NgModule({
  declarations: [

  UnitsSoldComponent

  ],providers:[DatePipe],
  imports: [
    CommonModule,
    ReportsComponentsModule
  ],exports:[
UnitsSoldComponent
  ]
})
export class SubReportsModule { }
