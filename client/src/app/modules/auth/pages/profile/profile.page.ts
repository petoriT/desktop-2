import { Component, OnInit } from "@angular/core";
import { UserFacadeService } from "src/app/core-modules/services/profile/profile-facade/profile-facade.service";
import { Location } from "@angular/common";
import { OrderFacadeService } from "src/app/core-modules/services/orders/order-facade/order-facade.service";
import { ProductFacadeService } from "src/app/core-modules/services/products/product-facade/product-facade.service";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.page.html",
  styleUrls: ["./profile.page.scss"],
})
export class ProfilePage implements OnInit {
  public bottom_component = "default";
  public title;
  //observables
  profile$;
  isUpdating$;
  orderList$;
  order_list;
  productReviews$;
  reviews
  constructor(
    private _productFacade: ProductFacadeService,
    private orderFacade: OrderFacadeService,
    private _location: Location,
    private userFacade: UserFacadeService
  ) {
    ////loading
    this.isUpdating$ = this.userFacade.isUpdating$();
  }

  ngOnInit() {
    this.title = "Account";
    this.userFacade.loadUser();
    //get User profile
    this.userFacade.getUser$().subscribe(
      (res) => {
        this.profile$ = res;
        console.log(res)
      },
      (err) => {
        console.log(err);
      }
    );
    console.log(this.profile$);
    this.orderFacade.loadUserOrders();
    this.orderList$ = this.orderFacade.getUserOrders$();
    this.orderList$.subscribe(
      res => {
        this.order_list = res.filter(order => !order.fullfilled ).length
 
      }
   
    )
    this._productFacade.loadUserReviews();
    this.productReviews$ = this._productFacade.getUserReviews();
    this.productReviews$.subscribe(
      res => {
        if(res){
          this.reviews = res.length
        }else{
          this.reviews = 0
        }
       
 
      }
   
    )
  }

  goBack() {
    if (this.bottom_component === "default") {
      this._location.back();
    } else {
      this.bottom_component = "default";
      this.title = "Account";
    }
  }
  goTo(data) {
    this.bottom_component = data;
    this.title = data;
 
  }

  received(data) {
    this.goTo(data);
  }

  activeOrders(){
    
  }
}
