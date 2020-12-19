import { Injectable } from "@angular/core";
import { ReceiptApiService } from "src/app/core-modules/services/receipt/receipt-api/receipt-api.service";
import { ReceiptStateService } from "src/app/core-modules/services/receipt/receipt-state/receipt-state.service";

@Injectable({
  providedIn: "root",
})
export class ReceiptFacadeService {
  constructor(
    private receiptApi: ReceiptApiService,
    private receiptState: ReceiptStateService
  ) {}

  isUpdating$() {
    return this.receiptState.isUpdating$();
  }

  getReceipts$() {
    return this.receiptState.getReceipts$();
  }

  loadUserReceipts() {
    this.receiptState.setUpdating(true);
    this.receiptApi.getUserReceipts().subscribe(
      //// TODO: make it generic
      (res) => {
        let receipts = res.receipts;
        this.receiptState.setReceipt(receipts);
      },
      (err) => {
        console.log(err);
      },
      () => this.receiptState.setUpdating(false)
    );
  }

  loadStoreReceipts() {
    this.receiptState.setUpdating(true);
    this.receiptApi.getStoreReceipts().subscribe(
      //// TODO: make it generic
      (res) => {
        let receipts = res.receipts;
        this.receiptState.setReceipt(receipts);
      },
      (err) => {
        console.log(err);
      },
      () => this.receiptState.setUpdating(false)
    );
  }

  loadStoreReceiptsById(id) {
    this.receiptState.setUpdating(true);
    this.receiptApi.getStoreReceiptsById(id).subscribe(
      //// TODO: make it generic
      (res) => {
        let receipts = res.receipts;
        this.receiptState.setReceipt(receipts);
      },
      (err) => {
        console.log(err);
      },
      () => this.receiptState.setUpdating(false)
    );
  }

  // update receipt optimistic way
  updateReceipt(data) {
    this.receiptState.setUpdating(true);
    //update receipt state
    this.receiptState.updateReceipt(data);

    //update database receipt item status
    this.receiptApi.updateReceipt(data).subscribe(
      (res) => {
        console.log("item updated");
      },
      (err) => {
        //we need to rollback
        console.log(err);
      },
      () => this.receiptState.setUpdating(false)
    );
  }
}
