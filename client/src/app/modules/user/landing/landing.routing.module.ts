import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

import { LandingPage } from "./landing.page";

const routes: Routes = [
  {
    path: "landing",
    component: LandingPage,
    children: [
      {
        path: "home",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("src/app/modules/user/pages/home/home.module").then(
                (m) => m.HomePageModule
              ),
          },
        ],
      },
      {
        path: "product-detail/:id",
        children: [
          {
            path: "",
            loadChildren: () =>
              import(
                "src/app/modules/user/pages/product-detail/product-detail.module"
              ).then((m) => m.ProductDetailPageModule),
          },
        ],
      },
      {
        path: "all-products",
        children: [
          {
            path: "",
            loadChildren: () =>
              import(
                "src/app/modules/user/pages/see-all-products-home/see-all-products-home.module"
              ).then((m) => m.SeeAllProductsHomePageModule),
          },
        ],
      },
      {
        path: "",
        redirectTo: "/user/landing/home",
        pathMatch: "full",
      },
    ],
  },

  {
    path: "",
    redirectTo: "/user/landing/home",
    pathMatch: "full",
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LandingRoutingModule {}
