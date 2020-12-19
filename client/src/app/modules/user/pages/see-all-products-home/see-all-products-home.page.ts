import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { ProductStateService } from 'src/app/core-modules/services/products/product-state/product-state.service';
import { ProductFacadeService } from 'src/app/core-modules/services/products/product-facade/product-facade.service';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-see-all-products-home',
  templateUrl: './see-all-products-home.page.html',
  styleUrls: ['./see-all-products-home.page.scss'],
})
export class SeeAllProductsHomePage implements OnInit {

  constructor(
    private _location: Location,
    private productState: ProductStateService,
    private _productFacade: ProductFacadeService,
    private router: Router,
  ) { }

  ngOnInit() {
    
    this._productFacade.getProducts$().subscribe(
      (res) => {
        if(res.length > 0){
          null
        }else{
          this._productFacade.loadProducts();
          this._productFacade.getProducts$().subscribe(
            (res) => {
                this.productState.setMainProducts(res);
              this.productState.setSearchingProducts(res);
              this.router.navigate(["/landing/all-products"]);
            },
            (err) => {console.log(err)}
          );
        }
        
      },
      (err) => {console.log(err)}
    );
  }
  goBack() {
   
      this._location.back();
 
  }

}
