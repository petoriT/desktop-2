import { Component, OnInit } from "@angular/core";
import { ProductFacadeService } from "src/app/core-modules/services/products/product-facade/product-facade.service";
import { VoucherFacadeService } from "src/app/core-modules/services/vouchers/voucher-facade/voucher-facade.service";
import { Router } from "@angular/router";
import { ProductStateService } from "src/app/core-modules/services/products/product-state/product-state.service";
import { HeaderStateService } from "src/app/core-modules/services/header/header-state/header-state.service";
import { CartFacadeService } from "src/app/core-modules/services/cart/cart-facade/cart-facade.service";
import { PickerController } from "@ionic/angular";
import { PickerOptions } from "@ionic/core";
import { async } from '@angular/core/testing';

@Component({
  selector: "app-promotions",
  templateUrl: "./promotions.component.html",
  styleUrls: ["./promotions.component.scss"],
})
export class PromotionsComponent implements OnInit {
  public products$;
  public promo_type;
  public products_with_promos;
  public promotions = ['Buy one get one free',
                      'Discounted price',
                      'Bulk Volume Discount','Combo Sales']
  constructor(
    private _productFacade: ProductFacadeService,
    private voucherFacade: VoucherFacadeService,
    private productState: ProductStateService,
    private router: Router,
    private cartFacade: CartFacadeService,
    private headerState: HeaderStateService,
    private pickerController: PickerController
  ) {}

  async showPicker() {
    let options: PickerOptions = {
      buttons: [
        {
          text: "Cancel",
          role: 'cancel'
        },
        {
          text:'Ok',
          handler:(value:any) => {
            console.log(value);
          }
        }
      ],
      columns:[{
        name:'Promotions',
        options:this.getColumnOptions() 
      }]
    };

    let picker = await this.pickerController.create(options);
    picker.present()
    picker.onDidDismiss().then(async data =>{
      let col = await picker.getColumn('Promotions');
      this.promo_type = col.options[col.selectedIndex].value
      
    })
   
  }

  getColumnOptions(){
    let options = [];
      
    this.products$.subscribe(
      (res) => {
        this.products_with_promos = res 
      },
      (err) => {
        console.log(err);
      }
    );

for (let i= 0; i < this.promotions.length; i++) {
  const type = this.promotions[i]
  switch(type) { 
    case 'Buy one get one free': { 
      const filtered =  this.products_with_promos.filter(function(product) {
        return product.sale_type == 'buy1get1free'
      });
if(filtered.length > 0){
  options.push({text:type,value:'buy1get1free'})
}
       break; 
    } 
    case 'Discounted price': { 
      const filtered =  this.products_with_promos.filter(function(product) {
        return product.sale_type == 'itemDiscount'
      });
    if(filtered.length > 0){
      options.push({text:type,value:'itemDiscount'})
    }
       break; 
    } 

    case 'Bulk Volume Discount': { 
      const filtered =  this.products_with_promos.filter(function(product) {
        return product.sale_type == 'volume'
      });
    if(filtered.length > 0){
      options.push({text:type,value:'volume'})
    }
       break; 
    } 
    case 'Combo Sales': { 
      const filtered =  this.products_with_promos.filter(function(product) {
        return product.sale_type == 'combo'
      });
    if(filtered.length > 0){
      options.push({text:type,value:'combo'})
    }
       break; 
    } 
    
 }
  
}
console.log(options)
    return options;
  }


  

  ngOnInit() {
    this.products$ = this.voucherFacade.getVouchersProducts();
  

  }

  selectPromo(data) {
    this.promo_type = data;
  }
  onback() {
    this.promo_type = false;
  }

  loadPromoProducts() {
    this.products$.subscribe(
      (res) => {
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
}
