import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopByDepartmentComponent} from "./shop-by-department/shop-by-department.component";
import { TopSalesComponent} from "./top-sales/top-sales.component";
import { PromoSlidesComponent } from "./promo-slides/promo-slides.component";
import { SalesComponent} from './sales/sales.component'
import { AdSpaceComponent } from "./ad-space/ad-space.component";
import {MostLikedComponent}  from "./most-liked/most-liked.component";
import { PromotionsComponent} from "./promotions/promotions.component"
import {UserLikedComponent } from "./user-liked/user-liked.component"
@NgModule({
  declarations: [
    ShopByDepartmentComponent,
    TopSalesComponent,
    PromoSlidesComponent,
    SalesComponent,
    AdSpaceComponent,
    MostLikedComponent,
    PromotionsComponent,
    UserLikedComponent 
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ShopByDepartmentComponent,
    TopSalesComponent,
      PromoSlidesComponent,
      SalesComponent,
      AdSpaceComponent, 
      MostLikedComponent,
      PromotionsComponent,
      UserLikedComponent 
  ]
})
export class HomeComponentsModule { }
