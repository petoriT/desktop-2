import { Component, OnInit } from "@angular/core";
import { ProductFacadeService } from "src/app/core-modules/services/products/product-facade/product-facade.service";
import { ProductStateService } from "src/app/core-modules/services/products/product-state/product-state.service";
import { Router } from "@angular/router";
import { HeaderStateService } from "src/app/core-modules/services/header/header-state/header-state.service";
import { CartFacadeService } from "src/app/core-modules/services/cart/cart-facade/cart-facade.service";
import { ProductApiService } from "src/app/core-modules/services/products/product-api/product-api.service";

@Component({
  selector: "app-most-liked",
  templateUrl: "./most-liked.component.html",
  styleUrls: ["./most-liked.component.scss"],
})
export class MostLikedComponent implements OnInit {
  public products$;
  constructor(
    private _productFacade: ProductFacadeService,
    private productState: ProductStateService,
    private router: Router,
    private headerState: HeaderStateService,
    private cartFacade: CartFacadeService,

    private productApi: ProductApiService
  ) {}

  ngOnInit() {
    //get recommended products, assign to products
    this.productApi
      .getSegmentProducts({
        value: null,
        signal: "liked_products",
      })
      .subscribe(
        (res) => {
          this.products$ = res.products;
          console.log(this.products$)
        },
        (err) => {
          console.log(err);
        }
      );
  }

  loadLikedProducts() {
    localStorage.setItem("all_p", "Most liked products");
    this.productState.setMainProducts(this.products$);
    this.productState.setSearchingProducts(this.products$);
    this.router.navigate(["/landing/all-products"]);
  }

  viewDetailPage(product) {
    this.headerState.updateHeaderStatus("product_detail");
    //navigate
    this.router.navigate([`/user/landing/product-detail`, product._id]);
  }

  addToCart(product) {
    this.cartFacade.addToCart(product);
  }
}
