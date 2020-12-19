import { Component, OnInit, Input } from "@angular/core";
import { MenuStateService } from "src/app/core-modules/services/menus//menu-state/menu-state.service";
import { UserFacadeService } from "src/app/core-modules/services/profile/profile-facade/profile-facade.service";
import { distinctUntilChanged } from "rxjs/operators";

@Component({
  selector: "app-user-menu",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.scss"],
})
export class UserComponent implements OnInit {
  public order;
  public avatar;
  isUpdating$;
  profile$;
  token;
  @Input() storeOwner: boolean;

  constructor(
    public menuState: MenuStateService,
    private userFacade: UserFacadeService
  ) {
    this.isUpdating$ = this.userFacade.isUpdating$();
  }

  ngOnInit() {
    //get user orders

    //get User profile
    this.token = !!localStorage.getItem("token");
    this.userFacade
      .getUser$()
      .pipe(distinctUntilChanged())
      .subscribe(
        (res) => {
          this.profile$ = res;
          if (this.profile$.profileImage) {
            this.avatar = false;
          } else {
            this.avatar = true;
          }
          console.log(this.profile$);
        },
        (err) => {
          console.log(err);
        }
      );
  }

  adminShow(admin) {
    this.menuState.updateMenuStatus(admin);
  }
}
