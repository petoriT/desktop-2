import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { CartFacadeService } from "src/app/core-modules/services/cart/cart-facade/cart-facade.service";
import { ProductFacadeService } from "src/app/core-modules/services/products/product-facade/product-facade.service";
import { HeaderStateService } from "src/app/core-modules/services/header/header-state/header-state.service";
import { CartService } from "src/app/core-modules/services/cart/cart-state/cart.service";
import { ProfileApiService } from "src/app/core-modules/services/profile/profile-api/profile-api.service";
import { UserFacadeService } from "src/app/core-modules/services/profile/profile-facade/profile-facade.service";
@Component({
  selector: "app-vendor-profile",
  templateUrl: "./vendor-profile.page.html",
  styleUrls: ["./vendor-profile.page.scss"],
})
export class VendorProfilePage implements OnInit {
  public id: string;
  constructor(
    private route: ActivatedRoute,
    private userFacade: UserFacadeService,
    private _profileApi: ProfileApiService,
    private cartFacade: CartFacadeService,
    private _productFacade: ProductFacadeService,
    private headerState: HeaderStateService,
    private cartService: CartService,
    private router: Router
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id");

    //get all vendor products and subscribe
    this._productFacade.loadStoreProducts(this.id);

    //load profile
    this.userFacade.loadStoreProfile(this.id);
  }

  goHome() {
    this.router.navigate(["/user/landing"]);
  }
}
