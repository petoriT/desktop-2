import { Component, OnInit, Input } from "@angular/core";
import { ProductApiService } from "src/app/core-modules/services/products/product-api/product-api.service";

@Component({
  selector: "app-similar-products",
  templateUrl: "./similar-products.component.html",
  styleUrls: ["./similar-products.component.scss"],
})
export class SimilarProductsComponent implements OnInit {
  @Input() category: any;
  public similarProducts$;

  constructor(private productApi: ProductApiService) {}

  ngOnInit() {
    this.productApi
      .getSegmentProducts({
        value: this.category,
        signal: "similar_products",
      })
      .subscribe(
        (res) => {
          this.similarProducts$ = res.products;
        },
        (err) => {
          console.log(err);
        }
      );
  }
}
