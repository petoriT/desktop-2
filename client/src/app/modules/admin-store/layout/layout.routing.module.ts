import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

import { LayoutPage } from "./layout.page";

const routes: Routes = [
  {
    path: "store",
    component: LayoutPage,
    children: [
      {
        path: "dashboard",
        loadChildren: () =>
          import(
            "src/app/modules/admin-store/pages/dashboard/dashboard.module"
          ).then((m) => m.DashboardPageModule),
      },
      {
        path: "products",
        loadChildren: () =>
          import(
            "src/app/modules/admin-store/pages/products/products.module"
          ).then((m) => m.ProductsPageModule),
      },
      {
        path: "add-products",
        loadChildren: () =>
          import(
            "src/app/modules/admin-store/pages/products/product-addition/product-addition.module"
          ).then((m) => m.ProductAdditionPageModule),
      },
      {
        path: "return-policy",
   
        loadChildren: () => import('src/app/modules/admin-store/pages/products/return-policy/return-policy.module')
        .then( m => m.ReturnPolicyPageModule)
 
      },

      {
        path: "sales",
        loadChildren: () =>
          import("src/app/modules/admin-store/pages/sales/sales.module").then(
            (m) => m.SalesPageModule
          ),
      },
      {
        path: "users",
        loadChildren: () =>
          import("src/app/modules/admin-store/pages/users/users.module").then(
            (m) => m.UsersPageModule
          ),
      },
      {
        path: "settings",
        loadChildren: () =>
          import(
            "src/app/modules/admin-store/pages/settings/settings.module"
          ).then((m) => m.SettingsPageModule),
      },
      {
        path: "pricing",
        loadChildren: () =>
          import(
            "src/app/modules/admin-store/pages/pricing/pricing.module"
          ).then((m) => m.PricingPageModule),
      },
      {
        path: "report",
        loadChildren: () =>
          import(
            "src/app/modules/admin-store/pages/reports/reports.module"
          ).then((m) => m.ReportsPageModule),
      },
      {
        path: "",
        redirectTo: "/admin-store/store/dashboard",
        pathMatch: "full",
      },
    ],
  },
  {
    path: "",
    redirectTo: "/admin-store/store/dashboard",
    pathMatch: "full",
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
