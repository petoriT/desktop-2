import {
  Component,
  OnChanges,
  Input,
  OnInit,
  SimpleChanges,
} from "@angular/core";
import { distinctUntilChanged } from "rxjs/operators";
import { OrderFacadeService } from "src/app/core-modules/services/orders/order-facade/order-facade.service";
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

@Component({
  selector: "app-payments",
  templateUrl: "./payments.component.html",
  styleUrls: ["./payments.component.scss"],
})
export class PaymentsComponent implements OnInit, OnChanges {
  orderList$;
  no_order;
  device_screen;
  clickButton;
  expand_detail
  detail_view_product
  desktopViewOrder
  public filtered_array;
  @Input() orders;

  public active_expansion;
  public panelOpenState = false;
  constructor(private orderFacade: OrderFacadeService,breakpointObserver: BreakpointObserver) {
    breakpointObserver.observe([
      Breakpoints.Handset
    ]).subscribe(result => {
      if (result.matches) {
        this.device_screen = "Handset"
      }
    });
    breakpointObserver.observe([
      Breakpoints.Tablet
    ]).subscribe(result => {
      if (result.matches) {
        this.device_screen = "Tablet"
      }
    });

    breakpointObserver.observe([
      Breakpoints.Web
    ]).subscribe(result => {
      if (result.matches) {
        this.device_screen = "Web"
      }
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    this.orderList$ = this.orders.pipe(distinctUntilChanged());
  }
  ngOnInit() {
    //getOrders

    this.orderList$.subscribe(
      (res) => {
        if (res == undefined || res.length < 1) {
          this.no_order = true;
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }

  openOrder(id) {
    this.clickButton = false;
    this.active_expansion = id;
    console.log(this.active_expansion);
  }
  checkId(id) {
    if (this.panelOpenState === true) {
      return this.active_expansion === id;
    }
  }
  setDesktopOrderView( order){
    this.desktopViewOrder = order
    console.log(order)
  }
  expand(event){
    if(this.expand_detail){
      this.expand_detail = false
    }else{
      this.expand_detail = true
    }
    this.detail_view_product =false
  }

  viewProduct(item){
    this.detail_view_product = item
    console.log(item)
  }
  checkProductReady(order_id) {
    this.orderList$.subscribe(
      (res) => {
        let filtered_array = res.filter((item) => {
          return item._id === order_id;
        });

        this.filtered_array = filtered_array;
      },
      (err) => {
        console.log(err);
      }
    );

    let stat = [];
    this.filtered_array[0].items.forEach((z) => {
      stat.push(z.order_status);
    });

    if (stat.includes("pending")) {
      return false;
    } else if (stat.includes("preparing")) {
      return false;
    } else {
      return true;
    }
  }

}
