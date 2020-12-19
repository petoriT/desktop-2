import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { PaymentPage } from './payment.page';

const routes: Routes = [
  {
    path: 'payment',
    component: PaymentPage,
    children: [
      {
        path: 'checkout',
        children:[
          {
            path: '',
            loadChildren: () => import('../pages/checkout/checkout.module').then( m => m.CheckoutPageModule),
          },
          {
            path: 'payfast',
            children:[
              { path: 'success', loadChildren: () => import('../pages/payfast/success/success.module').then( m => m.SuccessPageModule)},
              { path: 'cancel', loadChildren: () => import('../pages/payfast/cancel/cancel.module').then( m => m.CancelPageModule)}
            ]
          },
          {
            path: '',
            redirectTo: '/buy/payment/checkout',
            pathMatch: 'full'
          }

        ]
      },
      {
        path: '',
        redirectTo: '/buy/payment/checkout',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/buy/payment/checkout',
    pathMatch: 'full'
  }

]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PaymentRoutingModule {}
