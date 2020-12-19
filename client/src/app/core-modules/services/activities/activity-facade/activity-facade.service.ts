import { Injectable } from "@angular/core";
import { ActivityApiService } from "src/app/core-modules/services/activities/activity-api/activity-api.service";
import { ActivityStateService } from "src/app/core-modules/services/activities/activity-state/activity-state.service";

@Injectable({
  providedIn: "root",
})
export class ActivityFacadeService {
  constructor(
    private activityApi: ActivityApiService,
    private activityState: ActivityStateService
  ) {}

  isUpdating$() {
    return this.activityState.isUpdating$();
  }

  getActivities$() {
    return this.activityState.getActivities$();
  }

  pushActivity(data) {
    this.activityState.setUpdating(true);
    this.activityApi.pushActivity(data).subscribe(
      (res) => {
        this.activityState.addActivity(data);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  loadActivities(id) {
    this.activityState.setUpdating(true);

    this.activityApi.getActivities({ id: id }).subscribe(
      (res) => {
        let activities = res.activities;
        this.activityState.setActivity(activities);
      },
      (err) => {
        console.log(err);
      },
      () => this.activityState.setUpdating(false)
    );
  }

  removeActivity(activity) {
    //change the state
    this.activityState.removeActivity(activity);
    //update database
    let id = { id: activity._id };
  }

  /////****Notification ***//// */
  getNotifications$() {
    return this.activityState.getNotifications$();
  }

  pushNotification(data) {
    this.activityState.setUpdating(true);
    this.activityApi.pushNotification(data).subscribe(
      (res) => {
        this.activityState.addNotification(data);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  loadNotifications() {
    this.activityState.setUpdating(true);

    this.activityApi.getNotifications().subscribe(
      (res) => {
        console.log(res);
        let activities = res.notifications;
        this.activityState.setNotification(activities);
      },
      (err) => {
        console.log(err);
      },
      () => this.activityState.setUpdating(false)
    );
  }
}
