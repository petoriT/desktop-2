import { Component, OnInit } from "@angular/core";
import { ProductFacadeService } from "src/app/core-modules/services/products/product-facade/product-facade.service";

@Component({
  selector: "app-product-review",
  templateUrl: "./product-review.component.html",
  styleUrls: ["./product-review.component.scss"],
})
export class ProductReviewComponent implements OnInit {
  public productReviews$;

  constructor(private _productFacade: ProductFacadeService) {}

  ngOnInit() {
    this._productFacade.loadUserReviews();
    this.productReviews$ = this._productFacade.getUserReviews();
    console.log(this.productReviews$)
  }
}
