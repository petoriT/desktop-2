import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartsModule } from 'ng2-charts';
import {BarChartComponent} from'./bar-chart/bar-chart.component';

import {LineChartComponent} from'./line-chart/line-chart.component';
import { DynamicChartComponent } from'./dynamic-chart/dynamic-chart.component';
import { PieChartComponent  } from'./pie-chart/pie-chart.component';
import {  PolarChartComponent   } from'./polar-chart/polar-chart.component';
import { RaderChartComponent   } from'./rader-chart/rader-chart.component';

@NgModule({
  declarations: [
     BarChartComponent,
     LineChartComponent,
     DynamicChartComponent ,
     PieChartComponent,
     PolarChartComponent ,
     RaderChartComponent
  ],
  imports: [
    CommonModule,
     ChartsModule
  ],
  exports:[
     BarChartComponent,
     LineChartComponent,
       DynamicChartComponent ,
       PieChartComponent,
       PolarChartComponent ,
       RaderChartComponent
  ]
})
export class ReportsComponentsModule { }
