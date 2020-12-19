import { Component, OnInit } from '@angular/core';
import { ProductFacadeService } from "src/app/core-modules/services/products/product-facade/product-facade.service";
import { HeaderStateService } from "src/app/core-modules/services/header/header-state/header-state.service";
import { CartFacadeService } from "src/app/core-modules/services/cart/cart-facade/cart-facade.service";
import { Router } from "@angular/router";
@Component({
  selector: 'app-user-liked',
  templateUrl: './user-liked.component.html',
  styleUrls: ['./user-liked.component.scss'],
})
export class UserLikedComponent implements OnInit {

  products$;
public liked;
  constructor(private _productFacade: ProductFacadeService,
  
    private headerState: HeaderStateService,
    private cartFacade: CartFacadeService,
    private router: Router,) {}

  ngOnInit() {
    this._productFacade.loadUserlikedProducts();
    this.products$ = this._productFacade.getUserlikedProducts();
    console.log(this.products$);
    this.products$.subscribe(
      res => {
        this.liked = res
      }
    )
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
