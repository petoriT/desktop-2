import { Component, OnInit, ViewChild } from "@angular/core";
import { IonSlides } from "@ionic/angular";
import { Router } from "@angular/router";
import { ToastController } from "@ionic/angular";
import { AlertController } from "@ionic/angular";
import { FormGroup, FormControl } from "@angular/forms";
import { OrderFacadeService } from "src/app/core-modules/services/orders/order-facade/order-facade.service";
import { UserFacadeService } from "src/app/core-modules/services/profile/profile-facade/profile-facade.service";
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

@Component({
  selector: "app-deliver",
  templateUrl: "./deliver.component.html",
  styleUrls: ["./deliver.component.scss"],
})
export class DeliverComponent implements OnInit {
  public self_delivery = true;
  public delivery_date;
  public today;
  device_screen;
 showBack ;
 slides_number=1
showNext
  courier_delivery_form = new FormGroup({
    courier_name: new FormControl(""),
    courier_ref: new FormControl(""),
  });

 
  @ViewChild("deliverSlider") slides: IonSlides;

  constructor(
    public toastController: ToastController,
    public alertController: AlertController,
    private orderFacade: OrderFacadeService,
    private router: Router,
    private userFacade: UserFacadeService,
    breakpointObserver: BreakpointObserver,
 
  ) {
    
    ////loading
    
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
    this.showBack = false;
    this.showNext = true;
    this.today = new Date();
  }

  deliveryDate(e) {
    this.delivery_date = e.detail.value;
  }

  updateDelivery(data) {
    let store = this.userFacade.getCurrentStore();
    if (data == "courier_delivery") {
      this.orderFacade.getOrderDelivery().subscribe(
        (res) => {
          let dat = this.courier_delivery_form.value;
          this.orderFacade.updateStoreOrder({
          data: {
            order_id: res._id,
            delivery_type: "Courier",
            delivery_date: this.delivery_date,
            ...dat,
            },
          store_id: store._id,
        });
          //reload data todo:
          this.router.navigate(["/store/sales"]);
        },
        (err) => {
          console.log(err);
        }
      );
    } else {
      this.orderFacade.getOrderDelivery().subscribe(
        (res) => {
          this.orderFacade.updateStoreOrder({data:{
            order_id: res._id,
            delivery_type: "Self",
            delivery_date: this.delivery_date,
            self: true,
          }, store_id: store._id,});
          //reload data todo:
          this.router.navigate(["/store/sales"]);
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }

  async presentSelfToast() {
    const toast = await this.toastController.create({
      message: "Self Delivery Selected as a delivery Method",
      position: "bottom",
      animated: true,
      duration: 2000,
    });

    toast.present();
    //  this.showBadgeSale=true;
    //  this.showBadgeVoucher=false;
    setTimeout(() => {
      //this.notifyToSwipe()
    }, 2010);
  }

  async presentCourToast() {
    const toast = await this.toastController.create({
      message: "Courier Selected as a delivery Method",
      position: "bottom",
      animated: true,
      duration: 2000,
    });

    toast.present();
    //  this.showBadgeSale=true;
    //this.showBadgeVoucher=false;
    setTimeout(() => {
      //this.notifyToSwipe()
    }, 2010);
  }

  swipeNextCour() {
    setTimeout(() => {
      this.slides.slideNext();
      this.presentCourToast();
    }, 1000);
  }

  segmentChanged(value) {
    let data = value.detail.value;
    if (data == "Self_delivery") {
      console.log(data);
      this.self_delivery = true;
    }
    if (data == "third_party") {
      this.self_delivery = false;
      console.log(data);
    }
  }

  swipeNextSelf() {
    setTimeout(() => {
      this.slides.slideNext();
      this.presentSelfToast();
    }, 1000);
  }
  slideChange(event) {
    this.slides.getActiveIndex().then((data) => {
      this.slides_number = data + 1;

      if (data == 2) {
        this.showNext = false;
        this.showBack = true;
      } else if (data == 0) {
        this.showBack = false;
        this.showNext = true;
      } else {
        this.showNext = true;
        this.showBack = true;
      }
    });
    this.slides.lockSwipes(true);
  }
  next() {
    this.slides.lockSwipes(false);
    this.slides.slideNext();

  }

  slidesBack() {
    this.slides.lockSwipes(false);
    this.slides.slidePrev();

  }
}
