import { Component, OnInit } from "@angular/core";
import { MenuController } from "@ionic/angular";
import { ProductFacadeService } from "src/app/core-modules/services/products/product-facade/product-facade.service";
@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  constructor(
    private menu: MenuController,
    private productFacade: ProductFacadeService
  ) {}

  ngOnInit() {}

  openAdminMenu() {
    this.menu.enable(true, "admin-menu");
    this.menu.open("admin-menu");
  }
}
