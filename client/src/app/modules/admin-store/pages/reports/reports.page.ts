import { Component, OnInit ,HostListener } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.page.html',
  styleUrls: ['./reports.page.scss'],
})
export class ReportsPage implements OnInit {
  public segment;
  scrHeight:any;
    scrWidth:any;
   public landScape; 
     @HostListener('window:resize', ['$event'])
    getScreenSize(event?) {
          this.scrHeight = window.innerHeight;
          this.scrWidth = window.innerWidth;
     
          if(this.scrHeight > this.scrWidth ){
          	  	this.landScape = false
          	  }else{
          	  	this.landScape = true
          	  }
    }

public innerWidth
  constructor( public actionSheetController: ActionSheetController ) { 
  this.getScreenSize();
  }

  ngOnInit() {
  	this.innerWidth = window.innerWidth
  	console.log(this.innerWidth)
  }

    async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Chart-type',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Donaut chart',
    
        icon: 'trash',
        handler: () => {
          this.segment = 'bar-chart' ;
        }
      }, {
        text: 'line Graph',
        icon: 'share',
        handler: () => {
       this.segment = 'line-graph' ;
        }
      }, {
        text: 'Dynamic',
        icon: 'caret-forward-circle',
        handler: () => {
         this.segment = 'dynamic' ;
        }
      }, {
        text: 'pie chart',
        icon: 'heart',
        handler: () => {
          this.segment = 'pie-chart';
        }
      }, 

       {
        text: 'polar chart',
        icon: 'heart',
        handler: () => {
          this.segment = 'polar-chart';
        }
      },

   {
        text: 'rader Chart',
        icon: 'heart',
        handler: () => {
          this.segment = 'rader-chart';
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


}
