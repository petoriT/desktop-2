import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { HeaderStateService } from "src/app/core-modules/services/header/header-state/header-state.service";
import { UserFacadeService } from "src/app/core-modules/services/profile/profile-facade/profile-facade.service";
import { ProfileApiService } from "src/app/core-modules/services/profile/profile-api/profile-api.service";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"],
})
export class ProfileComponent implements OnInit {
  @Input() id: string;

  public profile;

  constructor(
    private route: ActivatedRoute,
    private userFacade: UserFacadeService,
    private headerState: HeaderStateService,
    private _profileApi: ProfileApiService
  ) {}

  ngOnInit() {
    console.log(this.id);

    this.userFacade.getStoreProfile$().subscribe(
      (res) => {
        this.profile = res;
      },
      (err) => {
        console.log(err);
      }
    );
    console.log("Profile: ", this.profile);
  }
}
