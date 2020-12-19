import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { ProductFacadeService } from "src/app/core-modules/services/products/product-facade/product-facade.service";
import { ActivityFacadeService } from "src/app/core-modules/services/activities/activity-facade/activity-facade.service";
import { distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: "app-notifications",
  templateUrl: "./notifications.component.html",
  styleUrls: ["./notifications.component.scss"],
})
export class NotificationsComponent implements OnInit {
  @Output() childSegment = new EventEmitter<string>();

  public notifications$;
  public rate_order_notification = [];
  public review;
  constructor(
    private _productFacade: ProductFacadeService,
    private activityFacade: ActivityFacadeService
  ) {}

  ngOnInit() {
    //Load activities
    this.activityFacade.loadNotifications();

    //get activities
    this.notifications$ = this.activityFacade.getNotifications$().pipe(distinctUntilChanged());
  }

  reviewProduct(data) {
    this.childSegment.emit("add-Reviews");
    //set currrent product
    this._productFacade.loadCurrentProduct(data);
  }
}
