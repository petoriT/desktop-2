import { AfterViewInit, Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ProductFacadeService } from "src/app/core-modules/services/products/product-facade/product-facade.service";
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import { UserFacadeService } from "src/app/core-modules/services/profile/profile-facade/profile-facade.service";
import { OrderFacadeService } from "src/app/core-modules/services/orders/order-facade/order-facade.service";
import { distinctUntilChanged } from "rxjs/operators";
import { HeaderStateService } from "src/app/core-modules/services/header/header-state/header-state.service";
import {PopoverComponent} from"src/app/modules/admin-store/shared/components/popover/popover.component"
import { PopoverController } from '@ionic/angular';
@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.page.html",
  styleUrls: ["./dashboard.page.scss"],
})
export class DashboardPage implements OnInit, AfterViewInit {
  item: any = "";
  datas: string = "Users";
  message: string;
  device_screen;
  users: boolean = true;
  sales: boolean = false;
  store;
  orders$;
  products$;
  sales_value = 3567;
  public viewReports = false;
  public dashStatus = "dash";
  actvated_tab = "dashboard";

  constructor(
    private router: Router,
    private productFacade: ProductFacadeService,
    breakpointObserver: BreakpointObserver,
    private userFacade: UserFacadeService,
    private orderFacade: OrderFacadeService,
    private headerStateService: HeaderStateService,
    public popoverController: PopoverController
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
    this.userFacade.getStoreProfile$().subscribe(
      (res) => {
        this.store = res;
      },
      (err) => {
        console.log(err);
      }
    );
    console.log(this.store)
    this.getOrders();
    this.getProducts();
  }
  ngAfterViewInit() {
  }

  //pop over fuction 
  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true
    });
    console.log(ev)
    return await popover.present();
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
    console.log(this.orders$)
  }

  accept(selectedData) {
    this.datas = selectedData;
    if (selectedData == "users") {
      this.sales = false;
      this.users = true;
    } else if (selectedData == "sales") {
      this.users = false;
      this.sales = true;
    }
  }

  goProduct() {
    this.productFacade.loadVendorProducts();
    this.router.navigate(["/admin-store/store/products"]);
  }

  getProducts() {
    //get current store
    let store = this.userFacade.getCurrentStore();
    //load store profile and subscribe store products

    if (Object.keys(store).length === 0) {
      this.userFacade.getUser$().subscribe(
        (res) => {
          this.userFacade.loadStoreProfile(res.store_id);
          this.productFacade.loadStoreProducts(res.store_id);
          this.products$ = this.productFacade
                            .getCurrentStoreProducts()  
                            .pipe(distinctUntilChanged());
                           
        },
        (err) => {
          console.log(err);
        }
      );
    } else {
      this.userFacade.loadStoreProfile(store._id);
      this.productFacade.loadStoreProducts(store._id);
      this.products$ = this.productFacade
        .getCurrentStoreProducts()
        .pipe(distinctUntilChanged());
    }
    console.log( this.products$ )
  }
  reportSelection(data) {
    this.viewReports = data;
    if (data == true) {
      this.dashStatus = "reports"
    } else {
      this.dashStatus = "dash"
    }
  }
  
  orderValue(order){
    let y = 0 
    for (let i= 0; i < order.items.length; i++) {
      
      let x = order.items[i].productPrice
     y = y + x
      
    }
    return y
  }
  navigateTo(route,data_pass){
    if(route == "/admin-store/store/products" ){
      setTimeout(() => {
        this.productFacade.loadVendorProducts();
        this.headerStateService.desktop_data_pass = data_pass
        this.router.navigate(["/admin-store/store/products"]);
        this.actvated_tab ='dashboard';

      }, 250);
    }else{
    
      setTimeout(() => {
        this.headerStateService.desktop_data_pass = data_pass
        this.router.navigate([route])
        this.actvated_tab ='dashboard'
      }, 250);
    }
  

  }
}
