import { Component, OnInit } from "@angular/core";
import { ProductFacadeService } from "src/app/core-modules/services/products/product-facade/product-facade.service";
import { ProductStateService } from "src/app/core-modules/services/products/product-state/product-state.service";
import { Router } from "@angular/router";
import { HeaderStateService } from "src/app/core-modules/services/header/header-state/header-state.service";
import { CartFacadeService } from "src/app/core-modules/services/cart/cart-facade/cart-facade.service";
import { VoucherFacadeService } from "src/app/core-modules/services/vouchers/voucher-facade/voucher-facade.service";

@Component({
  selector: "app-sales",
  templateUrl: "./sales.component.html",
  styleUrls: ["./sales.component.scss"],
})
export class SalesComponent implements OnInit {
  public reset = 1;
  public products$;
  public more = 4;
  public sale_length;
  constructor(
    private router: Router,
    private cartFacade: CartFacadeService,
    private headerState: HeaderStateService,
    private _productFacade: ProductFacadeService,
    private productState: ProductStateService,

    private voucherFacade: VoucherFacadeService
  ) {}

  ngOnInit() {
    //this.products$ = this.productState.getSegmentProducts("sales_products");
    this.products$ = this.voucherFacade.getVouchersProducts();
    this.products$.subscribe((res) => {
      console.log(res.length)
      this.sale_length = res.length;
    });
  }

  loadSalesProducts() {
    this.products$.subscribe(
      (res) => {
        localStorage.setItem("all_p", "Products on sale");
        this.productState.setSearchingProducts(res);
        this.productState.setMainProducts(res);
        this.router.navigate(["/landing/all-products"]);
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
  seeMore() {
    this.more = 10;
  }
  calculatePerc(price,original){
    let i =( (original - price )/ original)*100
    let percent = Math.trunc(i)
    return percent
  }
}
