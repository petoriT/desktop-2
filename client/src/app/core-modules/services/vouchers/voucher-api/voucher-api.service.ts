import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { EnvService } from "src/app/env.service";

@Injectable({
  providedIn: "root",
})
export class VoucherApiService {
  _urlCreateVoucher = `${this.env.apiUrl}/api/voucher/create_voucher`;
  _urlGetVoucher = `${this.env.apiUrl}/api/voucher/retrieve_voucher`;
  _urlGetStoreVouchers = `${this.env.apiUrl}/api/voucher/retrieve_store_voucher`;
  _urlGetAllVouchers = `${this.env.apiUrl}/api/voucher/retrieve_all_vouchers`;
  _urlGetStoreVouchersById = `${this.env.apiUrl}/api/voucher/retrieve_all_vouchersById`;
  _urlGetVoucherByNumber = `${this.env.apiUrl}/api/voucher/retrieve_voucher_by_number`;
  constructor(private _http: HttpClient, private env: EnvService) {}

  getVoucher(id) {
    console.log(id);
    return this._http.post<any>(this._urlGetVoucher, id);
  }

  getVoucherByNumber(voucher_number) {
    return this._http.post<any>(this._urlGetVoucherByNumber, voucher_number);
  }

  createVoucher(data) {
    return this._http.post<any>(this._urlCreateVoucher, data);
  }

  getAllVouchers() {
    return this._http.get<any>(this._urlGetAllVouchers);
  }

  getStoreVouchers() {
    return this._http.get<any>(this._urlGetStoreVouchers);
  }

  getStoreVouchersById(id) {
    return this._http.post<any>(this._urlGetStoreVouchersById, id);
  }

  updateVoucher(data) {
    return this._http.put<any>(this._urlGetStoreVouchers, data);
  }
}
