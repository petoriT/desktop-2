import { Component, OnInit } from '@angular/core';
import { UserFacadeService } from "src/app/core-modules/services/profile/profile-facade/profile-facade.service";
import { MenuStateService } from "src/app/core-modules/services/menus/menu-state/menu-state.service";
import { Router } from "@angular/router";
@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {

  constructor(   public menuState: MenuStateService,   private router: Router,
    private userFacade: UserFacadeService,) { }

  ngOnInit() {}
  logout() {
    localStorage.removeItem("token");
    this.userFacade.resetUserObs();
    this.menuState.loggedIn();
    this.menuState.updateMenuStatus("none");
    this.router.navigate(["/user/login"]);
  }

}
