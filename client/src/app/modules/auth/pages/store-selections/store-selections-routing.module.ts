import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StoreSelectionsPage } from './store-selections.page';

const routes: Routes = [
  {
    path: '',
    component: StoreSelectionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StoreSelectionsPageRoutingModule {}
