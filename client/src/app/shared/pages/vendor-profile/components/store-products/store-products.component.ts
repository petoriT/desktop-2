import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { CartFacadeService } from "src/app/core-modules/services/cart/cart-facade/cart-facade.service";
import { ProductFacadeService } from "src/app/core-modules/services/products/product-facade/product-facade.service";
import { HeaderStateService } from "src/app/core-modules/services/header/header-state/header-state.service";
import { CartService } from "src/app/core-modules/services/cart/cart-state/cart.service";

@Component({
  selector: "app-store-products",
  templateUrl: "./store-products.component.html",
  styleUrls: ["./store-products.component.scss"],
})
export class StoreProductsComponent implements OnInit {
  @Input() count: number;
  public trackIndex;
  public products$;

  constructor(
    private cartFacade: CartFacadeService,
    private _productFacade: ProductFacadeService,
    private headerState: HeaderStateService,
    private cartService: CartService,
    private router: Router
  ) {}

  ngOnInit() {
    this.products$ = this._productFacade.getCurrentStoreProducts();
    console.log(this.products$);
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
