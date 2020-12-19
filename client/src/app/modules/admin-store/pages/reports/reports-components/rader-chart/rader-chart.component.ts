import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartType, RadialChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-rader-chart',
  templateUrl: './rader-chart.component.html',
  styleUrls: ['./rader-chart.component.scss'],
})
export class RaderChartComponent implements OnInit {
  // Radar
  public radarChartOptions: RadialChartOptions = {
    responsive: true,
  };
  public radarChartLabels: Label[] = ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];

  public radarChartData: ChartDataSets[] = [
    { data: [65, 59, 0, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 96, 27, 2], label: 'Series B' }
  ];
  public radarChartType: ChartType = 'radar';
   public radarColors= [
    { // grey
      backgroundColor: 'rgba(1, 135, 134,0.5)',
      borderColor: 'rgba(1, 135, 134,1)',
      pointBackgroundColor: 'rgba(1, 135, 134,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(1, 135, 134,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(255, 215, 0,0.5)',
      borderColor: 'rgba(255, 215, 0,1)',
      pointBackgroundColor: 'rgba(255, 215, 0,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(255, 215, 0,1)'
    },
    { // red
      backgroundColor: 'rgba(144, 222, 215,0.5)',
      borderColor: 'rgba(144, 222, 215,1)',
      pointBackgroundColor: 'rgba(144, 222, 215,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(144, 222, 215,0.8)'
    }
  ];


  constructor() { }

  ngOnInit() {}
  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

}
