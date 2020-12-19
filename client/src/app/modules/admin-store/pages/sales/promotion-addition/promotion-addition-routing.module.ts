import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PromotionAdditionPage } from './promotion-addition.page';

const routes: Routes = [
  {
    path: '',
    component: PromotionAdditionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PromotionAdditionPageRoutingModule {}
