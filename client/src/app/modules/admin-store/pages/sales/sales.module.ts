import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { ComponentsModule } from '../../shared/components/components.module';
import { SalesComponentsModule } from './components/sales-components.module';
import { SalesPage } from './sales.page';

const routes: Routes = [
  {
    path: '',
    component: SalesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    SalesComponentsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SalesPage]
})
export class SalesPageModule {}
