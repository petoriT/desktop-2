import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class VoucherStateService {
  private updating$ = new BehaviorSubject<boolean>(false);
  private vouchers_length$ = new BehaviorSubject<number>(0);
  private vouchers$ = new BehaviorSubject<any[]>([]);
  private vouchers_products$ = new BehaviorSubject<any[]>([]);
  private store_vouchers = new BehaviorSubject<any[]>([]);
  constructor() {}

  resetVouchers() {
    this.vouchers$.next([]);
    this.vouchers_products$.next([]);
    this.vouchers_length$.next(0);
  }

  getStoreVouchers() {
    return this.store_vouchers.asObservable();
  } // return updating$ status
  isUpdating$() {
    return this.updating$.asObservable();
  }

  // change updating$ status
  setUpdating(isUpdating: boolean) {
    this.updating$.next(isUpdating);
  }

  // return vouchers$ state
  getVouchers$() {
    return this.vouchers$.asObservable();
  }

  getVouchersLength$() {
    return this.vouchers_length$.asObservable();
  }

  // Load new set of vouchers
  setVouchers(voucher, array_length) {
    const currentValue = this.vouchers$.getValue();
    this.store_vouchers.next(voucher);
    // modified voucher product stream
    this.vouchers$.next(currentValue.concat([voucher]));
    if (array_length) {
      this.vouchers_length$.next(array_length);
    }
  }

  // add new voucher to vouchers$ state
  addVoucher(voucher) {
    const currentValue = this.vouchers$.getValue();
    this.vouchers$.next([...currentValue, voucher]);
  }

  // update voucher in vouchers$ state
  updateVoucher(updatedVoucher) {
    const vouchers = this.vouchers$.getValue();
    const indexOfUpdated = vouchers.findIndex((voucher) => {
      voucher.id === updatedVoucher.id;
    });
    vouchers[indexOfUpdated] = updatedVoucher;
    this.vouchers$.next([...vouchers]);
  }

  // remove voucher from vouchers$
  removeVoucher(voucherRemove) {
    const currentValue = this.vouchers$.getValue();
    this.vouchers$.next(
      currentValue.filter((voucher) => voucher !== voucherRemove)
    );
  }

  /****voucher products user handle****/

  // return all vouchers_products$ state
  getVouchersProducts$() {
    return this.vouchers_products$.asObservable();
  }

  // Load new set of products
  setVouchersProducts(product) {
    const currentValue = this.vouchers_products$.getValue();
    // modified voucher product stream
    this.vouchers_products$.next(currentValue.concat([product]));
  }
}
