import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { EnvService } from "src/app/env.service";

@Injectable({
  providedIn: "root",
})
export class ProfileApiService {
  _urlUserProfile = `${this.env.apiUrl}/api/profile`;
  _urlUserUpdate = `${this.env.apiUrl}/api/profile/update`;
  _urlUserRemove = `${this.env.apiUrl}/api/profile/remove`;
  _urlStoreRegister = `${this.env.apiUrl}/api/store/register`;
  _urlProfileRegister = `${this.env.apiUrl}/api/store/profiling`;
  _urlStoreProfile = `${this.env.apiUrl}/api/store/store_profile`;
  _urlStoreRemoveAdmin = `${this.env.apiUrl}/api/store/remove_admin`;
  _urlStoreUpdateAdmin = `${this.env.apiUrl}/api/store/update_admin`;
  _urlUpdateStoreProfile = `${this.env.apiUrl}/api/store/update_return_policy`;

  constructor(private _http: HttpClient, private env: EnvService) { }

  getUser() {
    return this._http.get<any>(this._urlUserProfile);
  }
  updateStoreProfile(data) {
    return this._http.post<any>(this._urlUpdateStoreProfile, data);
  }

  updateUser(data) {
    return this._http.put<any>(this._urlUserUpdate, data);
  }

  removeUser(id) {
    return this._http.post<any>(this._urlUserRemove, id);
  }

  // this should be under auth api
  storeRegister(data) {
    return this._http.post<any>(this._urlStoreRegister, data);
  }
  // this should be under auth api
  storeProfiling(data) {
    return this._http.post<any>(this._urlProfileRegister, data);
  }

  storeProfile(data) {
    return this._http.post<any>(this._urlStoreProfile, data);
  }

  storeRemoveAdmin(data) {
    return this._http.post<any>(this._urlStoreRemoveAdmin, data);
  }
  storeUpdateAdmin(data) {
    return this._http.post<any>(this._urlStoreUpdateAdmin, data);
  }
}
