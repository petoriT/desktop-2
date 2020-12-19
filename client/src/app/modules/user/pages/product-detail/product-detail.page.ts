import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ProductFacadeService } from "src/app/core-modules/services/products/product-facade/product-facade.service";
import { CartService } from "src/app/core-modules/services/cart/cart-state/cart.service";
import { distinctUntilChanged } from "rxjs/operators";
import { Location } from "@angular/common";
@Component({
  selector: "app-product-detail",
  templateUrl: "./product-detail.page.html",
  styleUrls: ["./product-detail.page.scss"],
})
export class ProductDetailPage implements OnInit {
  cartItemCount;
  product;
  constructor(
    private route: ActivatedRoute,
    private _productFacade: ProductFacadeService,
    private cartService: CartService,
    private _location: Location
  ) {}

  ngOnInit() {
    //get produuct by id
    this.cartItemCount = this.cartService.getCartItemCount();
    let id = this.route.snapshot.paramMap.get("id");

    this._productFacade.loadCurrentProduct(id);
    this.product = this._productFacade
      .getCurrentProduct()
      .pipe(distinctUntilChanged());
  }
  goBack(){
  this._location.back();
  }
}
