import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { EnvService } from "src/app/env.service";

@Injectable({
  providedIn: "root",
})
export class AuthApiService {
  _urlUserRegister = `${this.env.apiUrl}/api/user/register`;
  _urlUserLogin = `${this.env.apiUrl}/api/user/login`;
  _urlUserVerify = `${this.env.apiUrl}/api/verify`;
  _urlVerifyAgain = `${this.env.apiUrl}/api/verify/resend`;
  _urlForgotPassword = `${this.env.apiUrl}/api/forgotPassword/resetLink`;
  _urlResetPassword = `${this.env.apiUrl}/api/forgotPassword/resetPassword`;
  _urlUpdatePassword = `${this.env.apiUrl}/api/forgotPassword/updatePassword`;
  _urlUpdateUser = `${this.env.apiUrl}/api/user/update_user_details`;
  _urlAdminRegister = `${this.env.apiUrl}/api/user/admin_register`;
  _urlGetVendorStores = `${this.env.apiUrl}/api/store/get_vendor_stores`;
  _urlActivateFreeTrial = `${this.env.apiUrl}/api/store/activate_free_trial`;


  constructor(private _http: HttpClient, private env: EnvService) { }

  userRegister(userData) {
    return this._http.post<any>(this._urlUserRegister, userData);
  }

  activateFreeTrial(data) {
    return this._http.post<any>(this._urlActivateFreeTrial, data);
  }

  getVendorStores() {
    return this._http.get<any>(this._urlGetVendorStores);
  }

  adminRegister(data) {
    return this._http.post<any>(this._urlAdminRegister, data);
  }

  userUpdate(data) {
    return this._http.post<any>(this._urlUpdateUser, data);
  }

  userLogin(userData) {
    return this._http.post<any>(this._urlUserLogin, userData);
  }

  verifyUser(userData) {
    return this._http.post<any>(this._urlUserVerify, userData);
  }

  verifyAgain() {
    return this._http.get<any>(this._urlVerifyAgain);
  }

  forgotPassword(userData) {
    return this._http.post<any>(this._urlForgotPassword, userData);
  }

  resetPassword(userData) {
    return this._http.post<any>(this._urlResetPassword, userData);
  }

  updatePassword(userData) {
    return this._http.post<any>(this._urlUpdatePassword, userData);
  }

  loggedIn() {
    return !!localStorage.getItem("token");
  }

  getToken() {
    return localStorage.getItem("token");
  }


}
