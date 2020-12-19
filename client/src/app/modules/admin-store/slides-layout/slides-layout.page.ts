import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ProductFacadeService } from "src/app/core-modules/services/products/product-facade/product-facade.service";
import { OrderFacadeService } from "src/app/core-modules/services/orders/order-facade/order-facade.service";


@Component({
  selector: 'app-slides-layout',
  templateUrl: './slides-layout.page.html',
  styleUrls: ['./slides-layout.page.scss'],
})
export class SlidesLayoutPage implements OnInit {

  constructor(
  	  private router: Router,
  	  private productFacade: ProductFacadeService,
      private orderFacade: OrderFacadeService
  	) { }

  ngOnInit() {

  	 this.productFacade.loadVendorProducts();

    //Load Orders
    this.orderFacade.loadStoreOrders();
  }

}
