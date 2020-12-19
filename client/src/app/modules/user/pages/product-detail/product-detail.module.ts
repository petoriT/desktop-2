import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ProductDetailPage } from './product-detail.page';

//Nested Modules
import { ComponentsModule } from '../../shared/components/components.module';
import { DetailComponentsModule } from './components/detail-components.module';

const routes: Routes = [
  {
    path: '',
    component:ProductDetailPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    DetailComponentsModule,
    RouterModule.forChild(routes),

  ],
  declarations: [ProductDetailPage]
})
export class ProductDetailPageModule {}
