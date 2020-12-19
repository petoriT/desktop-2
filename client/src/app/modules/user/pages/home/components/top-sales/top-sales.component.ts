import { Component, OnInit } from "@angular/core";
import { ProductFacadeService } from "src/app/core-modules/services/products/product-facade/product-facade.service";
import { CartFacadeService } from "src/app/core-modules/services/cart/cart-facade/cart-facade.service";
import { Router } from "@angular/router";
import { HeaderStateService } from "src/app/core-modules/services/header/header-state/header-state.service";
import { ProductStateService } from "src/app/core-modules/services/products/product-state/product-state.service";
import { ProductApiService } from "src/app/core-modules/services/products/product-api/product-api.service";

@Component({
  selector: "app-top-sales",
  templateUrl: "./top-sales.component.html",
  styleUrls: ["./top-sales.component.scss"],
})
export class TopSalesComponent implements OnInit {
  //// TODO: Pass filtered values
  public products;
  reset = 1;
  //Observale
  public products$;
  public label;
  public data;

  constructor(
    private _productFacade: ProductFacadeService,
    private cartFacade: CartFacadeService,
    private router: Router,
    private productState: ProductStateService,
    private headerState: HeaderStateService,
    private productApi: ProductApiService
  ) {}

  ngOnInit() {
    //get top sale products, assign to products
    this.productApi
      .getSegmentProducts({
        value: null,
        signal: "top_sales",
      })
      .subscribe(
        (res) => {
          this.products$ = res.products;
          if (res.length == 0) {
            this.data = true;
          } else {
            this.data = false;
          }
        },
        (err) => {
          console.log(err);
        }
      );
  }

  viewDetailPage(product) {
    this.headerState.updateHeaderStatus("product_detail");
    //navigate
    this.router.navigate([`/user/landing/product-detail`, product._id]);
  }

  addToCart(product) {
    this.cartFacade.addToCart(product);
  }

  loadTopSalesProducts() {
    localStorage.setItem("all_p", "Top Sales");
    this.productState.setSearchingProducts(this.products$);
    this.productState.setMainProducts(this.products$);
    this.router.navigate(["/landing/all-products"]);
  }
}
