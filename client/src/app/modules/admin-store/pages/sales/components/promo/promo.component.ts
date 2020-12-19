import {
  Component,
  OnInit,
  ViewChild,
  Output,
  EventEmitter,
  OnChanges,
} from "@angular/core";
import { HostListener } from "@angular/core";
import { IonInfiniteScroll } from "@ionic/angular";
import { distinctUntilChanged } from "rxjs/operators";
import { UserFacadeService } from "src/app/core-modules/services/profile/profile-facade/profile-facade.service";
import { VoucherFacadeService } from "src/app/core-modules/services/vouchers/voucher-facade/voucher-facade.service";

@Component({
  selector: "app-promo",
  templateUrl: "./promo.component.html",
  styleUrls: ["./promo.component.scss"],
})
export class PromoComponent implements OnInit, OnChanges {
  //notify sale page to change segment
  @Output() notifyParent: EventEmitter<any> = new EventEmitter();

  public all_vouchers;
  no_promo;
  user_id;
  item_tresh;

  scrHeight: any;
  scrWidth: any;

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  @HostListener("window:resize", ["$event"])
  getScreenSize(event?) {
    this.scrHeight = window.innerHeight;
    this.scrWidth = window.innerWidth;
  }

  //Observables
  updating$;
  vouchers$;
  profile$;
  vouchers_length$;

  constructor(
    private userFacade: UserFacadeService,
    private voucherFacade: VoucherFacadeService
  ) {
    this.getScreenSize();
    ////loading
    this.updating$ = this.voucherFacade.isUpdating$();
  }

  ngOnChanges() {}

  ngOnInit() {
    this.item_tresh = Math.round(this.scrHeight / 50);

    // get user and assign user_id
    this.profile$ = this.userFacade.getUser$();

    this.user_id = this.profile$._id;

    //get voucher length
    this.voucherFacade
      .getStoreVouchers()
      .pipe(distinctUntilChanged())
      .subscribe((res) => {
        console.log(res.length);
        this.vouchers$ = res;
        this.vouchers_length$ = res.length;
        // get store vouchers and prepare them for infiniteScroll
        console.log(res);
        if (this.vouchers_length$ == 0) {
          this.no_promo = true;
        } else {
          this.no_promo = false;
          if (this.vouchers_length$ > this.item_tresh) {
            //check if data us long enough to for infinit scroll
            this.all_vouchers = [];
            for (let i = 0; i < this.item_tresh; i++) {
              this.all_vouchers.push(this.vouchers$[i]);
              console.log("infinite scroll active");
            }
          } else {
            this.all_vouchers = this.vouchers$;
            console.log("load complete");
          }
        }
      });

    console.log(this.all_vouchers);
  }

  loadMoreItems() {
    let z = this.all_vouchers.length - 1;
    for (let i = z; i < z + this.item_tresh; i++) {
      this.all_vouchers.push(this.vouchers$[i]);
    }
    return this.all_vouchers;
  }

  loadData(event) {
    setTimeout(() => {
      this.loadMoreItems();
      event.target.complete();
      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      // if (data.length == 1000) {
      //  event.target.disabled = true;
      //  }
    }, 500);
  }

  // notify a sale page to change segment
  addPromo() {
    this.notifyParent.emit("ad_promo");
  }

  updatePromo(data) {}

  onDeletePromo(data) {}
}
