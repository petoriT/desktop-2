import { Component, OnInit } from "@angular/core";
import { UserFacadeService } from "src/app/core-modules/services/profile/profile-facade/profile-facade.service";
import { AuthApiService } from "src/app/core-modules/services/auth/auth-api/auth-api.service";
import { Router } from "@angular/router";
import { VoucherFacadeService } from "src/app/core-modules/services/vouchers/voucher-facade/voucher-facade.service";
import { ProductFacadeService } from "src/app/core-modules/services/products/product-facade/product-facade.service";
import { OrderFacadeService } from "src/app/core-modules/services/orders/order-facade/order-facade.service";
import { LoadingController } from "@ionic/angular";
@Component({
  selector: "app-stores-list",
  templateUrl: "./stores-list.component.html",
  styleUrls: ["./stores-list.component.scss"],
})
export class StoresListComponent implements OnInit {
  public stores$;
  public user;
  constructor(
    private userFacade: UserFacadeService,
    private authApi: AuthApiService,
    private router: Router,
    private voucherFacade: VoucherFacadeService,
    private productFacade: ProductFacadeService,
    private orderFacade: OrderFacadeService,
    public loadingController: LoadingController
  ) {}

  ngOnInit() {
    this.userFacade.getUser$().subscribe(
      (res) => {
        console.log(res);
        this.user = res;
      },
      (err) => {
        console.log(err);
      }
    );

    this.presentLoading();
    this.authApi
      .getVendorStores()
      .pipe()
      .subscribe((res) => {
        this.loadingController.dismiss();
        this.stores$ = res.stores;
        console.log(res);
      });
  }
  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: "custom-class",
      message: "Please wait...",
      // duration: 2000,
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    loading.dismiss()
    console.log("Loading dismissed!");
  }

  SwitchStore(store) {
    this.productFacade.loadStoreProducts(store._id);
    this.userFacade.setCurrentStore(store);
    console.log(store);
    setTimeout(() => {
      this.router.navigate(["/admin-store"]);
    }, 1000);
  }
}
