import { Component, OnInit } from "@angular/core";
import { UserFacadeService } from "src/app/core-modules/services/profile/profile-facade/profile-facade.service";
import { MenuStateService } from "src/app/core-modules/services/menus/menu-state/menu-state.service";
import { ProductFacadeService } from "src/app/core-modules/services/products/product-facade/product-facade.service";


@Component({
  selector: "app-layout",
  templateUrl: "./layout.page.html",
  styleUrls: ["./layout.page.scss"],
})
export class LayoutPage implements OnInit {
  profile$;
  id;
  constructor(
    public menuState: MenuStateService,
    private userFacade: UserFacadeService,
    private productFacade: ProductFacadeService,
  ) { }

  ngOnInit() {
    //Load Graph data //todo
    // load approppriate menu
    this.menuState.updateMenuStatus("admin");

    this.menuState.loggedIn();
    //get profile

    this.userFacade.getUser$().subscribe(
      (res) => {
        this.userFacade.loadStoreProfile(res.store_id);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  changeStore(val) {
    let id = { id: val };
    this.productFacade.loadStoreProducts(id);
  }


}
