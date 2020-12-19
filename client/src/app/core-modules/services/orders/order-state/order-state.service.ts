import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class OrderStateService {
  private updating$ = new BehaviorSubject<boolean>(false);
  private orders$ = new BehaviorSubject<any[]>([]);
  private current_order_delivery = new BehaviorSubject<any>({});

  constructor() {}

  resetStoreOrders() {
    this.orders$.next([]);
    this.current_order_delivery.next({});
  }

  getOrderDelivery$() {
    return this.current_order_delivery.asObservable();
  }

  setOrderDelivery$(orders) {
    this.current_order_delivery.next(orders);
  }

  // return updating$ status
  isUpdating$() {
    return this.updating$.asObservable();
  }

  // change updating$ status
  setUpdating(isUpdating: boolean) {
    this.updating$.next(isUpdating);
  }

  // return orders$ state
  getOrders$() {
    return this.orders$.asObservable();
  }

  // Load new set of orders
  setOrders(orders) {
    this.orders$.next(orders);
  }

  // add new order to orders$ state
  addOrder(order) {
    const currentValue = this.orders$.getValue();
    this.orders$.next([...currentValue, order]);
  }

  // update order in orders$ state
  updateOrder(data) {
    const orders = this.orders$.getValue();
    //update order item status
    for (let i = 0; i < orders.length; i++) {
      if (orders[i]._id === data._id) {
        orders[i] = data;
      }
    }
    console.log(data,orders)

    this.orders$.next([...orders]);
  }

  // remove order from orders$
  removeOrder(orderRemove) {
    const currentValue = this.orders$.getValue();
    this.orders$.next(currentValue.filter((order) => order !== orderRemove));
  }
}
