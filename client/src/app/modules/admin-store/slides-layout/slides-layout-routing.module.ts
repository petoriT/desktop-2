import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SlidesLayoutPage } from './slides-layout.page';

const routes: Routes = [
  {
    path: 'add',
    component: SlidesLayoutPage,
     children: [
     	  {
        path: "product",
        loadChildren: () =>
          import(
            "src/app/modules/admin-store/pages/products/product-addition/product-addition.module"
          ).then((m) => m.ProductAdditionPageModule),
      },
        	{
        path: "promo",
        loadChildren: () =>
          import(
            "src/app/modules/admin-store/pages/sales/promotion-addition/promotion-addition.module"
          ).then((m) => m.PromotionAdditionPageModule),
      },
         	{
        path: "user",
        loadChildren: () =>
          import(
            "src/app/modules/admin-store/pages/users/user-addition/user-addition.module"
          ).then((m) => m.UserAdditionPageModule),
      },


     ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SlidesLayoutPageRoutingModule {}
