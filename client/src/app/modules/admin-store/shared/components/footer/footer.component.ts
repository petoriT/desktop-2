import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MenuStateService } from "src/app/core-modules/services/menus//menu-state/menu-state.service";
import { UserFacadeService } from "src/app/core-modules/services/profile/profile-facade/profile-facade.service";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"],
})
export class FooterComponent implements OnInit {
  constructor(
    public menuState: MenuStateService,
    private router: Router,
    private userFacade: UserFacadeService
  ) {}

  ngOnInit() {}

  goMarketPlace() {
    this.menuState.updateMenuStatus("user");
    this.router.navigate(["/user/landing"]);
  }

  gotoSettings() {
    localStorage.setItem("st", this.userFacade.getCurrentStore()._id);
    this.router.navigate(["/admin-store/store/settings"]);
  }
}
