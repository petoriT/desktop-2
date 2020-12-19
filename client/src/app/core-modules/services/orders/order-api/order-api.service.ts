import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { EnvService } from "src/app/env.service";

@Injectable({
  providedIn: "root",
})
export class OrderApiService {
  _urlUserOrders = `${this.env.apiUrl}/api/payfast/get_user_orders`;
  _urlStoreOrders = `${this.env.apiUrl}/api/payfast/get_store_orders`;
  _urlStoreOrdersById = `${this.env.apiUrl}/api/payfast/get_store_ordersById`;
  _urlUpdateOrder = `${this.env.apiUrl}/api/payfast/update_order_status`;
  _urlverifyOrderDelivery = `${this.env.apiUrl}/api/payfast/update_order_delivery`;

  constructor(private _http: HttpClient, private env: EnvService) {}

  getUserOrders() {
    return this._http.get<any>(this._urlUserOrders);
  }

  getStoreOrders() {
    return this._http.get<any>(this._urlStoreOrders);
  }

  getStoreOrdersById(id) {
    return this._http.post<any>(this._urlStoreOrdersById, id);
  }

  // update order by user or admin
  updateOrderStatus(data: any) {
    return this._http.post<any>(this._urlUpdateOrder, data);
  }

  verifyOrderDelivery(data: any) {
    return this._http.post<any>(this._urlverifyOrderDelivery, data);
  }

  // remove order
}
