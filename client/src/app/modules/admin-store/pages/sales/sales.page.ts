import { Component, OnInit } from "@angular/core";
import { ModalController, ToastController } from "@ionic/angular";
import { OrderFacadeService } from "src/app/core-modules/services/orders/order-facade/order-facade.service";
import { UserFacadeService } from "src/app/core-modules/services/profile/profile-facade/profile-facade.service";
import { distinctUntilChanged } from "rxjs/operators";
import { VoucherFacadeService } from "src/app/core-modules/services/vouchers/voucher-facade/voucher-facade.service";
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

@Component({
  selector: "app-sales",
  templateUrl: "./sales.page.html",
  styleUrls: ["./sales.page.scss"],
})
export class SalesPage implements OnInit {
  public segmentChanged = "orders";
  
  allowed;
  orders$;
  vouchers$;
  device_screen;

  constructor(
    public modalController: ModalController,
    private userFacade: UserFacadeService,
    private orderFacade: OrderFacadeService,
    private voucherFacade: VoucherFacadeService,
    public toastController: ToastController,
    breakpointObserver: BreakpointObserver,

  ) {
    
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

  ngOnInit() {
    //get orders then pass data
    this.getOrders();
    this.loadVouchers();
  }

  getOrders() {
    //get current store
    let store = this.userFacade.getCurrentStore();
    //load store profile and subscribe store products
    if (Object.keys(store).length === 0) {
      this.userFacade.getUser$().subscribe(
        //load default store
        (res) => {
          this.userFacade.loadStoreProfile(res.store_id);
          this.orderFacade.loadStoreOrdersById(res.store_id);
          this.orders$ = this.orderFacade
            .getStoreOrders$()
            .pipe(distinctUntilChanged());
        },
        (err) => {
          console.log(err);
        }
      );
    } else {
      this.userFacade.loadStoreProfile(store._id);
      this.orderFacade.loadStoreOrdersById(store._id);
      this.orders$ = this.orderFacade
        .getStoreOrders$()
        .pipe(distinctUntilChanged());
    }
  }

  loadVouchers() {
    let store = this.userFacade.getCurrentStore();
    //load store profile and subscribe store products
    if (Object.keys(store).length === 0) {
      this.userFacade.getUser$().subscribe(
        (res) => {
          this.userFacade.loadStoreProfile(res.store_id);
          this.voucherFacade.loadStoreVouchersById({ id: res.store_id });
        },
        (err) => {
          console.log(err);
        }
      );
    } else {
      this.userFacade.loadStoreProfile(store._id);
      this.voucherFacade.loadStoreVouchersById({ id: store._id });
    }
  }

  getNotification(evt) {
    this.segmentChanged = evt;
  }

  //
  changeSegment(data) {
      this.segmentChanged = data;
  }

  searchItems(ev) {
    // Reset items back to all of the items
    this.orderFacade.loadStoreOrders();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != "") {
      this.orderFacade.loadSearchedStoreOrders(val);
    }
  }

  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2500,
    });
    toast.present();
  }
}
