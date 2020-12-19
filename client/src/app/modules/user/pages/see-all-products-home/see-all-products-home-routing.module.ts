import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeeAllProductsHomePage } from './see-all-products-home.page';

const routes: Routes = [
  {
    path: '',
    component: SeeAllProductsHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeeAllProductsHomePageRoutingModule {}
