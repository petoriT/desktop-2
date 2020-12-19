import { Component, OnInit } from '@angular/core';
import { single } from './data';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss'],
})
export class BarChartComponent implements OnInit {

  // Doughnut
  public doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales0','Download Sales',];
  public doughnutChartData: MultiDataSet = [
    [350, 450, 100,350,],
  
  ];
  public doughnutChartType: ChartType = 'doughnut';
    public chartColors: Array<any> = [
    { // all colors in order
      backgroundColor: ['#018786', ' #FFD700', ' #90DED7','#977C0C','#663399','#808080','#F5F5DC','#F0FFFF']
    },
      { // all colors in order
      backgroundColor: ['#018786', ' #FFD700', ' #90DED7','#977C0C','#663399','#808080','#F5F5DC','#F0FFFF']
    },
    { // all colors in order
      backgroundColor: ['#018786', ' #FFD700', ' #90DED7','#977C0C','#663399','#808080','#F5F5DC','#F0FFFF']
    },
    { // all colors in order
      backgroundColor: ['#018786', ' #FFD700', ' #90DED7','#977C0C','#663399','#808080','#F5F5DC','#F0FFFF']
    },
    { // all colors in order
      backgroundColor: ['#018786', ' #FFD700', ' #90DED7','#977C0C','#663399','#808080','#F5F5DC','#F0FFFF']
    },
    { // all colors in order
      backgroundColor: ['#018786', ' #FFD700', ' #90DED7','#977C0C','#663399','#808080','#F5F5DC','#F0FFFF']
    },
    { // all colors in order
      backgroundColor: ['#018786', ' #FFD700', ' #90DED7','#977C0C','#663399','#808080','#F5F5DC','#F0FFFF']
    },
    { // all colors in order
      backgroundColor: ['#018786', ' #FFD700', ' #90DED7','#977C0C','#663399','#808080','#F5F5DC','#F0FFFF']
    },
    { // all colors in order
      backgroundColor: ['#018786', ' #FFD700', ' #90DED7','#977C0C','#663399','#808080','#F5F5DC','#F0FFFF']
    },
    { // all colors in order
      backgroundColor: ['#018786', ' #FFD700', ' #90DED7','#977C0C','#663399','#808080','#F5F5DC','#F0FFFF']
    },
    { // all colors in order
      backgroundColor: ['#018786', ' #FFD700', ' #90DED7','#977C0C','#663399','#808080','#F5F5DC','#F0FFFF']
    },
    { // all colors in order
      backgroundColor: ['#018786', ' #FFD700', ' #90DED7','#977C0C','#663399','#808080','#F5F5DC','#F0FFFF']
    },
    { // all colors in order
      backgroundColor: ['#018786', ' #FFD700', ' #90DED7','#977C0C','#663399','#808080','#F5F5DC','#F0FFFF']
    },
    
    

]


    

  constructor() {
    Object.assign(this, { single });

  }




  ngOnInit() {}
    // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

}
