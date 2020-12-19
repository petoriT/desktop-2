import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserAdditionPage } from './user-addition.page';

const routes: Routes = [
  {
    path: '',
    component: UserAdditionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserAdditionPageRoutingModule {}
