import { Component, OnInit, ViewChild } from "@angular/core";
import { HeaderStateService } from "src/app/core-modules/services/header/header-state/header-state.service";
import { IonSlides } from "@ionic/angular";
import { ToastController } from "@ionic/angular";
import { Location } from "@angular/common";
import { ProfileApiService } from "src/app/core-modules/services/profile/profile-api/profile-api.service";
import { OrderFacadeService } from "src/app/core-modules/services/orders/order-facade/order-facade.service";
import { UserFacadeService } from "src/app/core-modules/services/profile/profile-facade/profile-facade.service";

@Component({
  selector: "app-returns",
  templateUrl: "./returns.page.html",
  styleUrls: ["./returns.page.scss"],
})
export class ReturnsPage implements OnInit {
  @ViewChild("check_slides", { static: true }) slides: IonSlides;
  public product;
  public order;
  public returnPolicy;
  public policy_comment = "";
  public selectedReturnReasons: any = [];
  public return_reason = [
    "Damaged Goods",
    "Wrong Order Delivered",
    "SCAM",
    "size variation ",
  ];
  store;

  constructor(
    private headerState: HeaderStateService,
    public toastController: ToastController,
    private _location: Location,
    private userApi: ProfileApiService,
    private orderFacade: OrderFacadeService,
    private userFacade: UserFacadeService
  ) {}

  ngOnInit() {
    this.product = this.headerState.data_passed.product;
    this.order = this.headerState.data_passed.order;
    this.store = this.userFacade.getCurrentStore();
    console.log(this.store);
    this.userApi.storeProfile({ _id: this.store._id }).subscribe(
      (res_store) => {
        //loadStore
        let store = res_store.store;
        this.returnPolicy = store.return_policy;
      },
      (err) => {
        console.log(err);
      }
    );
  }
  setReturnReason(reason) {
    if (this.selectedReturnReasons.includes(reason)) {
      let i = this.selectedReturnReasons.indexOf(reason);
      this.selectedReturnReasons.splice(i, 1);
    } else {
      console.log(
        this.selectedReturnReasons,
        "len",
        this.selectedReturnReasons.length
      );
      this.selectedReturnReasons.push(reason);
    }
  }
  isSelected(reason) {
    if (this.selectedReturnReasons.includes(reason)) {
      return "selected";
    }
  }
  next(slides) {
    slides.slideNext();
    this.presentToast("slide to go back");
  }

  async presentToast(data) {
    const toast = await this.toastController.create({
      message: data,
      duration: 3000,
      position: "bottom",
    });
    toast.present();
  }

  submit() {
    const elementsIndex = this.order.items.findIndex((item) => {
      return item._id == this.product._id;
    });

    let newArray = [...this.order.items];
    let return_reason = {
      return_reasons: this.selectedReturnReasons,
      return_comment: this.policy_comment,
    };

    //modify order product
    newArray[elementsIndex] = {
      ...newArray[elementsIndex],
      return: return_reason,
    };
    let new_product = newArray[0];
    let data = {
      return: true,
      return_reason: return_reason,
      order_id: this.order._id,
      product: new_product,
    };
    console.log(data);
    this.orderFacade.updateStoreOrder({ data: data });
  }

  backClicked() {
    this._location.back();
  }
}
