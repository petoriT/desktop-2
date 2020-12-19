import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { EnvService } from "src/app/env.service";

@Injectable({
  providedIn: "root",
})
export class ReceiptApiService {
  _urlUserReceipts = `${this.env.apiUrl}/api/receipt/get_user_receipts`;
  _urlStoreReceipts = `${this.env.apiUrl}/api/receipt/get_store_receipts`;
  _urlStoreReceiptsById = `${this.env.apiUrl}/api/receipt/get_store_receiptsById`;
  _urlOrderReceipt = `${this.env.apiUrl}/api/receipt/get_order_receipt`;
  _urlUpdateReceipt = `${this.env.apiUrl}/api/receipt/update_receipt`;
  _urlPayfastReceipts = `${this.env.apiUrl}/api/receipt/get_payfast_receipt`;

  constructor(private _http: HttpClient, private env: EnvService) {}

  getUserReceipts() {
    return this._http.get<any>(this._urlUserReceipts);
  }

  getStoreReceipts() {
    return this._http.get<any>(this._urlStoreReceipts);
  }

  getStoreReceiptsById(id) {
    return this._http.post<any>(this._urlStoreReceiptsById, id);
  }

  getOrderReceipt(data) {
    return this._http.post<any>(this._urlOrderReceipt, data);
  }

  updateReceipt(data) {
    return this._http.put<any>(this._urlUpdateReceipt, data);
  }

  //only for cartalist
  getPayfastReceipts() {
    return this._http.get<any>(this._urlPayfastReceipts);
  }
}
