import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReceiptStateService {

  private updating$ = new BehaviorSubject<boolean>(false);
  private receipt$ = new BehaviorSubject<any>({});

  constructor() { }

  // return updating$ status
  isUpdating$() {
    return this.updating$.asObservable();
  }

  // change updating$ status
  setUpdating(isUpdating: boolean) {
    this.updating$.next(isUpdating);
  }

  // return receipt$ state
  getReceipts$() {
   return this.receipt$.asObservable();
  }

  // Load new set of receipt
  setReceipt(receipt) {
    this.receipt$.next(receipt);
  }

  // update receipt in receipt$ state
  updateReceipt(updatedReceipt) {
    const receipt = this.receipt$.getValue();
    const indexOfUpdated = receipt.findIndex(receipt => {
      receipt.id === updatedReceipt.id
    });
    receipt[indexOfUpdated] = updatedReceipt;
    this.receipt$.next([...receipt]);
  }

}
