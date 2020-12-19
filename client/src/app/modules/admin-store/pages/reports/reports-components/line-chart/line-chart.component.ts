import { Component, OnInit, ViewChild,Input } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';
import * as pluginAnnotations from 'chartjs-plugin-annotation';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss'],
})
export class LineChartComponent implements OnInit {

@Input() lineChartDataInput: any;/*chart data set from parent report*/
@Input() lineChartLabelInput:any;
public lineChartData: ChartDataSets[] ;
  public lineChartLabels: Label[] ;
  public lineChartOptions: (ChartOptions & { annotation: any }) = {
    responsive: true,
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      xAxes: [{}],
      yAxes: [
        {
          id: 'y-axis-0',
          position: 'left',
        },
     
      ]
    },
    annotation: {
      annotations: [
        {
          type: 'line',
          mode: 'vertical',
          scaleID: 'x-axis-0',
          value: 'March',
          borderColor: 'orange',
          borderWidth: 2,
          label: {
            enabled: true,
            fontColor: 'orange',
            content: 'LineAnno'
          }
        },
      ],
    },
  };
 public lineChartColors: Color[] = [
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


  public lineChartLegend = true;
  public lineChartType = 'line';



  @ViewChild(BaseChartDirective, { static: true }) chart: BaseChartDirective;



  constructor() { }

  ngOnInit() {

   this.lineChartData = this.lineChartDataInput
   this.lineChartLabels = this.lineChartLabelInput
  }
/* ********** check below code on how it updates the chart data *********/
  /*public randomize(): void {
    for (let i = 0; i < this.lineChartData.length; i++) {
      for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        this.lineChartData[i].data[j] = this.generateNumber(i);
      }
    }
    this.chart.update();

  }*/

  private generateNumber(i: number) {
    return Math.floor((Math.random() * (i < 2 ? 100 : 1000)) + 1);
  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public hideOne() {
    const isHidden = this.chart.isDatasetHidden(1);
    this.chart.hideDataset(1, !isHidden);
  }

  public pushOne() {
    this.lineChartData.forEach((x, i) => {
      const num = this.generateNumber(i);
      const data: number[] = x.data as number[];
      data.push(num);
    });
    this.lineChartLabels.push(`Label ${this.lineChartLabels.length}`);
  }

  public changeColor() {
    this.lineChartColors[2].borderColor = 'green';
    this.lineChartColors[2].backgroundColor = `rgba(0, 255, 0, 0.3)`;
  }



}
