import { Injectable } from "@angular/core";
import { OrderApiService } from "src/app/core-modules/services/orders/order-api/order-api.service";
import { OrderStateService } from "src/app/core-modules/services/orders/order-state/order-state.service";

@Injectable({
  providedIn: "root",
})
export class OrderFacadeService {
  constructor(
    private orderApi: OrderApiService,
    private orderState: OrderStateService
  ) {}

  isUpdating$() {
    return this.orderState.isUpdating$();
  }

  resetStoreOrders() {
    return this.orderState.resetStoreOrders();
  }

  getOrderDelivery() {
    return this.orderState.getOrderDelivery$();
  }

  setOrderDelivery(order) {
    this.orderState.setOrderDelivery$(order);
  }

  getStoreOrders$() {
    // here we just pass the state without any projections
    // it may happen that it is necessary to combine two or more streams and expose to the components
    return this.orderState.getOrders$();
  }

  loadStoreOrders() {
    this.orderState.setUpdating(true);

    this.orderApi.getStoreOrders().subscribe(
      (res) => {
        let orders = res.orders;
        this.orderState.setOrders(orders);
      },
      (err) => {
        console.log(err);
      },
      () => this.orderState.setUpdating(false)
    );
  }

  loadStoreOrdersById(id) {
    this.orderState.setUpdating(true);

    this.orderApi.getStoreOrdersById({ id: id }).subscribe(
      (res) => {
        let orders = res.orders;
        this.orderState.setOrders(orders);
      },
      (err) => {
        console.log(err);
      },
      () => this.orderState.setUpdating(false)
    );
  }

  loadSearchedStoreOrders(val) {
    this.orderState.setUpdating(true);

    this.orderApi.getStoreOrders().subscribe(
      (res) => {
        let orders = res.orders;
        let searched = orders.filter((item) => {
          return (
            item.order_number.toLowerCase().indexOf(val.toLowerCase()) > -1
          );
        });
        this.orderState.setOrders(searched);
      },
      (err) => {
        console.log(err);
      },
      () => this.orderState.setUpdating(false)
    );
  }

  // update store status order optimistic way
  updateStoreOrder(data) {
    this.orderState.setUpdating(true);
    //update order state
    this.orderState.updateOrder(data.data);

    //update database order item status
    this.orderApi.updateOrderStatus(data).subscribe(
      (res) => {
        console.log(res);
        this.orderState.updateOrder(res.order);
      },
      (err) => {
        // TODO:
        //we need to rollback
        console.log(err);
      },
      () => this.orderState.setUpdating(false)
    );
  }

  // TODO: Update store order

  removeStoreOrder(order) {
    //change the state
    this.orderState.removeOrder(order);
    //update database
    let id = { id: order._id };
  }

  /**User Orders**/
  getUserOrders$() {
    // here we just pass the state without any projections
    // it may happen that it is necessary to combine two or more streams and expose to the components
    return this.orderState.getOrders$();
  }

  loadUserOrders() {
    this.orderState.setUpdating(true);

    this.orderApi.getUserOrders().subscribe(
      (res) => {
        let orders = res.orders;
        this.orderState.setOrders(orders);
      },
      (err) => {
        console.log(err);
      },
      () => this.orderState.setUpdating(false)
    );
  }

  // update order optimistic way
  updateUserOrder(data) {
    this.orderState.setUpdating(true);
    //update order state
    // TODO: Update User Order
  }

  verifyOrderDelivery(data) {
    //update order delivery
    this.orderApi.verifyOrderDelivery(data).subscribe(
      (res) => {
        console.log(res);
        //update user notification
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
