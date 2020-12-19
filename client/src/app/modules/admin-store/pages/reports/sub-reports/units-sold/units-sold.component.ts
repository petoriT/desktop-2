import { Component, OnInit } from '@angular/core';
import { ReportStateService } from 'src/app/core-modules/services/reports/report-state/report-state.service';

import { ReportFacadeService } from "src/app/core-modules/services/reports/report-facade/report-facade.service";
import {Data} from'./MOCK_DATA';
import {DatePipe} from '@angular/common';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-units-sold',
  templateUrl: './units-sold.component.html',
  styleUrls: ['./units-sold.component.scss'],
})
export class UnitsSoldComponent implements OnInit {
lineChartDataInput:any; /*line chart data set*/
lineChartLabelInput:any;
pieChartDataInput:any;
pieChartLabelsInput:any;



  constructor(public actionSheetController: ActionSheetController, public datepipe:DatePipe, private reportState: ReportStateService,private reportFacade: ReportFacadeService , ) {
Object.assign(this,{Data})

   }

public report_status;
public range = 7;
public filtered;  
public today = new  Date();
public startDateO;
public lineOutPudata =[];
public lineOutlabel =[];
public currentFilter = 'Days';

Data:any;
/* data draft 

    product id 
    product name
    product category
    amount
    price
    discount
    category
    data-time*/ 

  ngOnInit() {

this.dataDayFilter()

/*for (let i = 0 ; i < Data.length; i++) {
 let saleDate = new Date(Data[i].date)
if(this.daysDifference(saleDate,startDate)< this.range ){
  console.log(Data[i])
}
}*/
  


  	this.reportState.getReportStatus().subscribe(
  		res => {
  		this.report_status = res
  		},
  		err => {
  			console.log(err)
  		}
  		)

  }

  /*external fuction from here*/

  filterBydays(today,startDate){
    if(this.daysDifference(today,startDate) < this.range){
      return true
    }
    

  }

  daysDifference(startDate,endDate){
     return Math.floor((Date.UTC(startDate.getFullYear(), startDate.getMonth(),startDate.getDate()) - Date.UTC(endDate.getFullYear(),endDate.getMonth(),endDate.getDate()) ) /(1000 * 60 * 60 * 24));

  }
  monthsDifference(startDate,endDate){

      let startDateMonth = startDate.getUTCMonth()
      let startDateYear = startDate.getFullYear() 
      let firstOfstartDate = new Date(startDateYear,startDateMonth , 1)

      let endDateMonth = endDate.getUTCMonth()
      let endDateYear = endDate.getFullYear()
      let lastOfEndDate = new Date(endDateYear,endDateMonth + 1, 0)

   return Math.floor((Date.UTC(firstOfstartDate.getFullYear(), firstOfstartDate.getMonth(),firstOfstartDate.getDate()) - Date.UTC(lastOfEndDate.getFullYear(),lastOfEndDate.getMonth(),lastOfEndDate.getDate()) ) /(1000 * 60 * 60 * 24));

  } 



/*this function filteres data by day*/
  dataDayFilter(){


this.lineOutPudata.splice( 0,this.lineOutPudata.length) /*this clears the output data */
this.lineOutlabel.splice(0, this.lineOutlabel.length) /*this clears the output data */

let startDate = new Date();
/*let day  = today.getDate();
let year = today.getUTCMonth();
let month= today.getFullYear();*/

startDate.setDate(startDate.getDate() - this.range)
let startDateHolder = new Date()
startDateHolder.setDate(this.today.getDate() - this.range)



/*from*/
if(this.currentFilter == 'Days' ){
  
 this.startDateO = this.datepipe.transform(startDate,'MMM d,y')

/*console.log(start.toString())*/
/*console.log(Data.filter(word => word.category == "Jewelery"))*/
/*console.log(this.daysDifference(today,startDate));*/

this.filtered= Data.filter(p => {
  let saleDate = new Date(p.date)
 if(this.daysDifference(saleDate,startDate)< this.range ){
   return true
 }
} )

 /** data set for pie chart*/
  var groupBy = function (xs, key) {
            return xs.reduce(function (rv, x) {
              (rv[x[key]] = rv[x[key]] || []).push(x);
              return rv;
            }, {});
          };
  let soldCategoryData = groupBy(this.filtered ,"date")

  let soldCategoryDatakeys = Object.keys(soldCategoryData) /*this gets the keys from soldCategoryData*/

console.log(soldCategoryData)
 
/****** DAY DATA SET line Graph***/
for (let i = this.range; i > -1; i--) {

let dateOfrange = new Date();
 dateOfrange.setDate(this.today.getDate() - i)

/* this sets start date based on range*/


 let dateOfrangeLatest =this.datepipe.transform(dateOfrange,'MMM d')

 let dayOfrange = dateOfrange.getDate()
let monthOfrange = dateOfrange.getUTCMonth();
let yearOfrange = dateOfrange.getFullYear();

let second= this.filtered.filter(z =>{
  let pDate = new Date(z.date)
  if(this.daysDifference(pDate,dateOfrange) == 0 ){
      return true
     }
})

var total =0;

for (let i = 0; i < second.length; i++) {
  total = total + second[i].amount

};

this.lineOutPudata.push(total)
this. lineOutlabel.push(dateOfrangeLatest )

}

/*assign to line data set*/
let objLineData = {}
objLineData["data"] =this.lineOutPudata
objLineData["label"] = "Total Unit sold/day"
this.lineChartDataInput = [];
this.lineChartDataInput.push(objLineData)

/*assign to line labels */

  this.lineChartLabelInput = this.lineOutlabel

        }

/* filter by months */

if(this.currentFilter == 'Months' ){

   this.startDateO = this.datepipe.transform(startDate,'MMM,y')

   this.filtered= Data.filter(p => {
    let saleDate = new Date(p.date)
   if((this.monthsDifference(startDate,saleDate)/31)< (this.range) ){
       /*hope that 31 works :-) */

     return true
   }
  } )

for (let i = this.range; i > -1; i--) {

  let dateOfrange = new Date();

 dateOfrange.setMonth(this.today.getUTCMonth() - i)

/* this sets start date based on range*/


 let dateOfrangeLatest =this.datepipe.transform(dateOfrange,'MMM,y')
console.log(dateOfrangeLatest)
 let dayOfrange = dateOfrange.getDate()
let monthOfrange = dateOfrange.getUTCMonth();
let yearOfrange = dateOfrange.getFullYear();

let second= this.filtered.filter(z =>{
  let pDate = new Date(z.date)
  let pDateMonth = pDate.getUTCMonth()
  let pDateYear = pDate.getFullYear()

  if( pDateMonth == monthOfrange && pDateYear == yearOfrange){

      return true
     }
})

var total =0;

for (let i = 0; i < second.length; i++) {
  total = total + second[i].amount

};

this.lineOutPudata.push(total)
this. lineOutlabel.push(dateOfrangeLatest )


    }
  }

/*this is the annual filter*/
if(this.currentFilter == 'Years' ){

   this.startDateO = this.today.getFullYear() - this.range

   console.log(this.startDateO)
   this.filtered= Data.filter(p => {
    let saleDate = new Date(p.date)
    let saleDateYear = saleDate.getFullYear()
    let endDateYear = this.today.getFullYear()
    let startDateYear = endDateYear - this.range
 
   if( saleDateYear < endDateYear && saleDateYear > startDateYear  ){
      
     return true
   }
  } )

for (let i = this.range; i > -1; i--) {

  let dateOfrange = new Date();

 dateOfrange.setFullYear(this.today.getFullYear() - i)

/* this sets start date based on range*/


 let dateOfrangeLatest =this.datepipe.transform(dateOfrange,'y')



let yearOfrange = dateOfrange.getFullYear();

let second= this.filtered.filter(z =>{
  let pDate = new Date(z.date)
  let pDateYear = pDate.getFullYear()

  if(  pDateYear == yearOfrange){
      return true
     }
})

var total =0;

for (let i = 0; i < second.length; i++) {
  total = total + second[i].amount

};

this.lineOutPudata.push(total)
this. lineOutlabel.push(dateOfrangeLatest )


    }

}

  }





  /****filter Action *****/
    async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Albums',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Days',
       
        handler: () => {
          this.currentFilter  ="Days"
          this.dataDayFilter()
        }
      }, {
        text: 'Month',
        
        handler: () => {
        this.currentFilter  ="Months"
         this.dataDayFilter()
        }
      },  {
        text: 'Annual',
       
        handler: () => {
             this.currentFilter  ="Years"
             this.dataDayFilter()
        }
      },

       {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }
 rangeChange(event){
    this.range = event.detail.value
    console.log(this.range)


    this.dataDayFilter()
  } 

  startDateChange(event){
    this.today = new Date( event.detail.value) 
    this.dataDayFilter()

  }
  segmentChanged(event){

  }


}
