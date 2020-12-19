import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { EnvService } from "src/app/env.service";

@Injectable({
  providedIn: "root",
})
export class ActivityApiService {
  _urlPushActivity = `${this.env.apiUrl}/api/activities/pushActivity`;
  _urlgetActivities = `${this.env.apiUrl}/api/activities/getActivities`;
  _urlPushNotification = `${this.env.apiUrl}/api/notifications/pushNotification`;
  _urlgetNotifications = `${this.env.apiUrl}/api/notifications/getNotifications`;

  constructor(private _http: HttpClient, private env: EnvService) {}

  pushActivity(data) {
    return this._http.post<any>(this._urlPushActivity, data);
  }

  getActivities(data) {
    return this._http.post<any>(this._urlgetActivities, data);
  }

  pushNotification(data) {
    return this._http.post<any>(this._urlPushNotification, data);
  }

  getNotifications() {
    return this._http.get<any>(this._urlgetNotifications);
  }
}
