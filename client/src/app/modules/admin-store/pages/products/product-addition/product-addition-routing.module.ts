import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductAdditionPage } from './product-addition.page';

const routes: Routes = [
  {
    path: '',
    component: ProductAdditionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductAdditionPageRoutingModule {}
