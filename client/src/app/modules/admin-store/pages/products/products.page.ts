import { Component, OnDestroy, OnInit } from "@angular/core";
import { ProductFacadeService } from "src/app/core-modules/services/products/product-facade/product-facade.service";
import { CategoryFacadeService } from "src/app/core-modules/services/categories/category-facade/category-facade.service";
import { Router } from "@angular/router";
import { UserFacadeService } from "src/app/core-modules/services/profile/profile-facade/profile-facade.service";
import { distinctUntilChanged } from "rxjs/operators";
import { browserRefresh } from "src/app/app.component";
import { MenuStateService } from "src/app/core-modules/services/menus/menu-state/menu-state.service";
import { ToastController } from "@ionic/angular";
import { HeaderStateService } from "src/app/core-modules/services/header/header-state/header-state.service";
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

@Component({
  selector: "app-products",
  templateUrl: "./products.page.html",
  styleUrls: ["./products.page.scss"],
})
export class ProductsPage implements OnInit {
  products: boolean = false;
  public segment:any = "inventory";
  category: boolean = true;
  updateProduct: any = {};
  products$;
  searchPlaceholder: string = "Products";
  device_screen ;

  constructor(
    private productFacade: ProductFacadeService,
    private categoryFacade: CategoryFacadeService,
    private userFacade: UserFacadeService,
    private route: Router,
    public menuState: MenuStateService,
    public toastController: ToastController,
    private headerStateService: HeaderStateService,
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
    //get current store
    this.checkSegment()
    this.getProducts();

    this.menuState.loggedIn();
    //load categories
    this.categoryFacade.loadCategories();
  }
  checkSegment(){
    if(this.headerStateService.desktop_data_pass){
      this.segment = this.headerStateService.desktop_data_pass
    }
    console.log(this.segment)
  }

  doRefresh(event) {
    if (event.returnValue) {
      this.getProducts();
    }
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
  }

  fromAddProduct(data) {
    this.segment = data;
  }

  addProductSlides(data) {
    let products;
    if (data === "add_product") {
      //check lisence

      this.productFacade
        .getStoreProducts$()
        .pipe(distinctUntilChanged())
        .subscribe((res) => {
          products = res;
          let product_length = products.length
          let store = this.userFacade.getCurrentStore();
          let free_trial = store.free_trial;
          let trial_end_date
          let trial_number_products
          if (free_trial) {
            trial_end_date = free_trial.end_date;
            trial_number_products = free_trial.allowed_products
          }
          let return_policy_length = store.return_policy.length
          let lisences = store.lisence
          let today_ms = Date.now()
          let one_day_ms = 86400000
          console.log(product_length, return_policy_length)
          //check for lisence
          if (product_length == 0 && return_policy_length == 0) {
            this.presentToast(
              "set up your return policy first!"
            );
            /*setTimeout(() => {
            this.route.navigate(["/store/return-policy"]);
          }, 1000)*/
          } else {
            let allow_access = false
            if (lisences.length > 0) {
              lisences.forEach(lisence => {
                let lisence_end_date = lisence.payed_amount.end_date
                let time_remaining = (lisence_end_date - today_ms) / one_day_ms

                if (product_length < lisence.number_of_products && time_remaining > 0) {
                  allow_access = true
                }
              });
            } else {
              let trial_time_remaining = (trial_end_date - today_ms) / one_day_ms

              if (trial_time_remaining > 0 && product_length < trial_number_products) {
                allow_access = true
              }
            }

            if (allow_access) {
              this.segment = data
            } else {
              this.presentToast(
                "Buy license or try our 15 days trial to add more products"
              );
            }
          }
        });

    } else {
      this.segment = data;
    }
  }

  searchItems(ev) {
    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != "") {
      this.productFacade.loadSearchedStoreProducts(val);
    } else {
      // Reset items back to all of the items
      this.productFacade.loadVendorProducts();
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
