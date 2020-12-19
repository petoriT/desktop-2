import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ActivityStateService {
  private updating$ = new BehaviorSubject<boolean>(false);
  private activity$ = new BehaviorSubject<any>([]);
  private notification$ = new BehaviorSubject<any>([]);

  constructor() {}

  // return updating$ status
  isUpdating$() {
    return this.updating$.asObservable();
  }

  // change updating$ status
  setUpdating(isUpdating: boolean) {
    this.updating$.next(isUpdating);
  }

  // return activity$ state
  getActivities$() {
    return this.activity$.asObservable();
  }

  // Load new set of activity
  setActivity(activity) {
    this.activity$.next(activity);
  }

  // add new activity to activity$ state
  addActivity(activity) {
    const currentValue = this.activity$.getValue();
    this.activity$.next([...currentValue, activity]);
  }

  // remove activity from activity$
  removeActivity(activityRemove) {
    const currentValue = this.activity$.getValue();
    this.activity$.next(
      currentValue.filter((activity) => activity !== activityRemove)
    );
  }

  ////*** notifications ***/  */
  // Load new set of activity
  setNotification(activity) {
    this.notification$.next([])
    this.notification$.next(activity);
  }
  // return activity$ state
  getNotifications$() {
    return this.notification$.asObservable();
  }
  // add new activity to activity$ state
  addNotification(activity) {
    const currentValue = this.activity$.getValue();
    this.notification$.next([...currentValue, activity]);
  }
}
