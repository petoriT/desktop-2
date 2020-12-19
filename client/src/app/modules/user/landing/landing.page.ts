import { Component, OnInit  } from "@angular/core";
import { Router } from "@angular/router";
import { UserFacadeService } from "src/app/core-modules/services/profile/profile-facade/profile-facade.service";
import { MenuStateService } from "src/app/core-modules/services/menus/menu-state/menu-state.service";
import { ActivatedRoute } from "@angular/router";
import { VoucherFacadeService } from "src/app/core-modules/services/vouchers/voucher-facade/voucher-facade.service";
import { ProductFacadeService } from "src/app/core-modules/services/products/product-facade/product-facade.service";
import { CategoryFacadeService } from "src/app/core-modules/services/categories/category-facade/category-facade.service";

@Component({
  selector: "app-landing",
  templateUrl: "./landing.page.html",
  styleUrls: ["./landing.page.scss"],
})
export class LandingPage implements OnInit {
  title = "Afro-Ballerina || User";

  landing = {};
  name: string;
  has_footer;
  //observables
  profile$;
  isUpdating$;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public menuState: MenuStateService,
    private userFacade: UserFacadeService,
    private voucherFacade: VoucherFacadeService,
    private _productFacade: ProductFacadeService,
    private categoryFacade: CategoryFacadeService
  ) {
    ////loading
    this.isUpdating$ = this.userFacade.isUpdating$();
  }

  ngOnInit() {
    //load menu
    this.menuState.loggedIn();

    ///**************Market Place ****************//////

    this.categoryFacade.loadCategories();

    //get User profile
    this.userFacade.loadUser();
    this.profile$ = this.userFacade.getUser$();

    this.voucherFacade.loadVouchers();

    let current_route = this.route.snapshot["_routerState"].url;
    if (current_route == "/user/landing/product-detail") {
      this.has_footer = false;
    } else {
      this.has_footer = true;
    }
  }

}
