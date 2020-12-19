import { Component, OnInit } from "@angular/core";
import { ProductFacadeService } from "src/app/core-modules/services/products/product-facade/product-facade.service";
import { FormGroup, FormControl } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-add-review",
  templateUrl: "./add-review.component.html",
  styleUrls: ["./add-review.component.scss"],
})
export class AddReviewComponent implements OnInit {
  public product$;

  reviewForm = new FormGroup({
    rate: new FormControl(""),
    comment: new FormControl(""),
  });

  constructor(
    private router: Router,
    private _productFacade: ProductFacadeService
  ) {}

  ngOnInit() {
    this.product$ = this._productFacade.getCurrentProduct();
  }

  onSubmit() {
    //construct the ratings for backend.
    this.product$.subscribe(
      (res) => {
        let data = {
          _id: res[0]._id,
          rate: this.reviewForm.value.rate,
          comment: "none",
        };
        this._productFacade.updateReview(data);
        //change segment
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
