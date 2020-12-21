import {
  Component,
  OnInit,
  Output,
  Input,
  EventEmitter,
  SimpleChanges,
  OnChanges,
} from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { PickerController } from "@ionic/angular";
import { OrderFacadeService } from "src/app/core-modules/services/orders/order-facade/order-facade.service";
import { UserFacadeService } from "src/app/core-modules/services/profile/profile-facade/profile-facade.service";
//Interfaces
import { PickerOptions } from "src/app/models/picker-model";
import { distinctUntilChanged } from "rxjs/operators";
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

/*import { PickerButton } from 'src/app/models/picker-model';
import { PickerColumn } from 'src/app/models/picker-model';
import { PickerColumnOption } from 'src/app/models/picker-model';*/

@Component({
  selector: "app-orders",
  templateUrl: "./orders.component.html",
  styleUrls: ["./orders.component.scss"],
})
export class OrdersComponent implements OnInit, OnChanges {
  @Output() notifyParent: EventEmitter<any> = new EventEmitter();

  public framework = "pending";
  public views_order = [];
  public active_expansion;
  public filtered_array;
  public panelOpenState = false;
  clickButton;
  public commit_date;
  public desktopViewOrder;
  public commit_chip = true;
  //observables
  orderList$;
  isUpdating$;
  no_order;
  device_screen
  expand_detail
  detail_view_product
  //public date: any = new Date().toISOString();
  public date_form: FormGroup;
  @Input() orders;

  constructor(
    private formBuilder: FormBuilder,
    private pickerCtrl: PickerController,
    private orderFacade: OrderFacadeService,
    private userFacade: UserFacadeService,
    breakpointObserver: BreakpointObserver
  ) {
    ////loading
    this.isUpdating$ = this.orderFacade.isUpdating$();
    
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
    this.date_form = this.formBuilder.group({
      date: [new Date().toISOString()],
    });

    setTimeout(() => {
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
    }, 5000);
  }

  async showBasicPicker(item, order_id, order_number, commit_date) {
    let opts: PickerOptions = {
      buttons: [
        {
          text: "cancel",
          role: "cancel",
        },
        {
          text: "done",
        },
      ],
      columns: [
        {
          name: "framework",
          options: [
            { text: "ready", value: "ready" },
            { text: "pending", value: "pending" },

            { text: "preparing", value: "preparing" },
          ],
        },
      ],
    };
    let picker = await this.pickerCtrl.create(opts);
    picker.present();
    picker.onDidDismiss().then(async (data) => {
      let col = await picker.getColumn("framework");
      this.framework = col.options[col.selectedIndex].text;
      this.postToUpdateOrder(
        item,
        order_id,
        order_number,
        commit_date,
        this.framework
      );
    });
  }

  postToUpdateOrder(item, order_id, order_number, commit_date, product_status) {
    let store = this.userFacade.getCurrentStore();
    let data = {
      order_id: order_id,
      item: item,
      product_status: product_status,
      order_number: order_number,
    };
    this.orderFacade.updateStoreOrder({ data: data, store_id: store._id });
  }

  commit(order_id, order_number, commit_date) {
    let store = this.userFacade.getCurrentStore();
    let data = {
      _id: order_id,
      order_id: order_id,
      commit_date: commit_date,
      order_number: order_number,
    };

    this.orderFacade.updateStoreOrder({ data: data, store_id: store._id });
  }

  expanded(order_number) {
    if (this.active_expansion === order_number) {
      this.active_expansion = null;
    } else {
      this.active_expansion = order_number;
    }
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

  deliver(order) {
    this.orderFacade.setOrderDelivery(order);
    this.notifyParent.emit("deliver");
  }
  onCommit() {
    this.clickButton = true;
    this.commit_chip = false;
  }
  orderClicked(id) {
    console.log(id);
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


}
