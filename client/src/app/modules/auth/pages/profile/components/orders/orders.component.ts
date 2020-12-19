import { Component, OnInit, EventEmitter, Output, Input } from "@angular/core";
import { OrderFacadeService } from "src/app/core-modules/services/orders/order-facade/order-facade.service";
import { HeaderStateService } from "src/app/core-modules/services/header/header-state/header-state.service";
import { Router } from "@angular/router";
import { PopoverController } from '@ionic/angular';
import {QueryComponent} from './query/query.component'


@Component({
  selector: "app-orders",
  templateUrl: "./orders.component.html",
  styleUrls: ["./orders.component.scss"],
})
export class OrdersComponent implements OnInit {
  @Output() notifyParent: EventEmitter<any> = new EventEmitter();
  //Observable,
  public purchases_segment = "active";
  public onItsWay;
  public Delivered;
  public processed;

  panelOpenState = false;
  orderList$;
public step1;

active_order;
  constructor(
    private orderFacade: OrderFacadeService,
    private headerState: HeaderStateService,
    private router: Router,
    public popoverController: PopoverController,
   
  ) {}

  ngOnInit() {
    this.orderFacade.loadUserOrders();
    this.orderList$ = this.orderFacade.getUserOrders$();
    console.log(this.orderList$);
 
  }
  show(data) {
    console.log(data);
  }
  segmentChanged(data) {
    this.purchases_segment = data.detail.value;
    console.log(this.purchases_segment);
  }
  return(item, order) {
    this.headerState.setDataPassed({ product: item, order: order });
    this.router.navigate(["/user/return"]);
  }

  countDown(commit_date) {
    let dateSent = new Date();
    let currentDate = new Date(commit_date);

    return Math.floor(
      (Date.UTC(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        currentDate.getDate()
      ) -
        Date.UTC(
          dateSent.getFullYear(),
          dateSent.getMonth(),
          dateSent.getDate()
        )) /
        (1000 * 60 * 60 * 24)
    );
  }

  activeOrder(order){
    if(order == this.active_order ){
      this.active_order = null
    }else{
      this.active_order = order
    }

  }
  orderProgress(order) {
  
    //first check if it has commit date
    let x;
    if(order.commit_date){
      //check delivery ready start 
        if(order.delivery_ready){
            //check delivery sattus start 

            if(order.delivery_status =="Delivery on the Way" ){
                //check if its fullfiled  start
                if(order.fullfilled){
                  x = "100%"
                }else{
                  x = '50%'
                }
                   //check if its fullfiled  end

            }else{
              x = '10%'
            }
               //check delivery sattus end
        }else{
          x = '0%'
        }
       //check delivery ready end
   

    }else{
      x = '0%'
    }

    return x

  }

  //checks if the order is processed 
  isOrderProcessed(order){
    let x;
    if (order.commit_date){
      //check if its processed 
      if(order.delivery_ready){
        x ='active'
        console.log('here erev')
      }else{
        x = 'pending_commit heartbeat'
      }
    }else{
      x = ' being_processed'
    }
    return x
  }

  //check if order is on its way
  isOrderOnTheWay(order){
    let x 

    if(order.delivery_status == 'Delivery on the Way'){
      x ='active'
    }else{
      x = 'being_processed '
    }
    return x
  }
  isOrderDelivered(order){
    let y 
    if(order.fullfilled){
      y = 'active'
    }else{
      y = 'being_processed'
    }
    return y
  }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: QueryComponent,
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true
    });
    return await popover.present();
  }

  returnedProducts(order){
    let x;
    for(let i=0; i <order.items;i++){
      if(order.items[i].return){
        x = x +1
      }
      console.log(x)
    }
    return x
  }
}
