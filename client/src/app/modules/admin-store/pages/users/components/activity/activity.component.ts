import { Component, OnInit } from "@angular/core";
import { ActivityFacadeService } from "src/app/core-modules/services/activities/activity-facade/activity-facade.service";
import { UserFacadeService } from "src/app/core-modules/services/profile/profile-facade/profile-facade.service";

@Component({
  selector: "app-activity",
  templateUrl: "./activity.component.html",
  styleUrls: ["./activity.component.scss"],
})
export class ActivityComponent implements OnInit {
  public no_Activity;
  public read;
  public activities$;
  constructor(
    private userFacade: UserFacadeService,
    private activityFacade: ActivityFacadeService
  ) {}

  ngOnInit() {
    //Load activities
    let store = this.userFacade.getCurrentStore();

    this.activityFacade.loadActivities(store._id);

    //get activities
    this.activities$ = this.activityFacade.getActivities$();
    //Terrrence
    this.activities$.subscribe(
      (res) => {
        if (res == undefined || res.length < 1) {
          this.no_Activity = true;
        }
      },
      (err) => {
        console.log(err);
      }
    );

    this.read = "not_read";
    this.no_Activity = false;
  }
  setRead() {
    this.read = "read_class";
  }

  pushActivity() {
    //Prepare activity
    let notify = {
      type: "Activity",
      title: "admin deleted a product",
      msg: "product two from Shoes Categories",
      user_ini: "TM",
      user_name: "Terrence Mashego",
    };
    let data = { activity: notify };

    //send data
    this.activityFacade.pushActivity(data);
  }
}
