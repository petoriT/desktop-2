import { Component, OnInit } from "@angular/core";
import { ProductStateService } from "src/app/core-modules/services/products/product-state/product-state.service";
import { Router } from "@angular/router";
import { HeaderStateService } from "src/app/core-modules/services/header/header-state/header-state.service";
import { CartFacadeService } from "src/app/core-modules/services/cart/cart-facade/cart-facade.service";
import { ProductApiService } from "src/app/core-modules/services/products/product-api/product-api.service";

@Component({
  selector: "app-ad-space",
  templateUrl: "./ad-space.component.html",
  styleUrls: ["./ad-space.component.scss"],
})
export class AdSpaceComponent implements OnInit {
  products$;
  public data;
  constructor(
    private productState: ProductStateService,
    private router: Router,
    private cartFacade: CartFacadeService,
    private headerState: HeaderStateService,
    private productApi: ProductApiService
  ) {}

  ngOnInit() {
    //get recommended products, assign to products
    this.productApi
      .getSegmentProducts({
        value: null,
        signal: "recommended_products",
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

  loadRecommendedProducts() {
    localStorage.setItem("all_p", "Recommended products");
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
