import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./core-modules/guards/auth/auth.guard";

import { LayoutPage } from "./modules/admin-store/layout/layout.page";

const routes: Routes = [
  { path: "", redirectTo: "user", pathMatch: "full" },

  //Auth routes
  {
    path: "auth",
    loadChildren: () =>
      import("./modules/auth/layout/layout.module").then(
        (m) => m.LayoutAuthPageModule
      ),
  },
  //Users routes
  {
    path: "user",
    loadChildren: () =>
      import("./modules/user/landing/landing.module").then(
        (m) => m.LandingPageModule
      ),
  },
  //Admin routes
  {
    path: "admin-store",
    loadChildren: () =>
      import("./modules/admin-store/layout/layout.module").then(
        (m) => m.LayoutPageModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: "admin/product-addition",
    loadChildren: () =>
      import("./modules/admin-store/slides-layout/slides-layout.module").then(
        (m) => m.SlidesLayoutPageModule
      ),
    canActivate: [AuthGuard],
  },

  {
    path: "vendor-profile/:id",
    loadChildren: () =>
      import("./shared/pages/vendor-profile/vendor-profile.module").then(
        (m) => m.VendorProfilePageModule
      ),
  },
  {
    path: "delivery-verification",
    loadChildren: () =>
      import(
        "./shared/pages/delivery-verification/delivery-verification.module"
      ).then((m) => m.DeliveryVerificationPageModule),
  },
  //pa
  //payments routes
  {
    path: "buy",
    loadChildren: () =>
      import("./modules/payments/payment/payment.module").then(
        (m) => m.PaymentPageModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: "guest",
    loadChildren: () =>
      import("./modules/payments/pages/guest/guest.module").then(
        (m) => m.GuestPageModule
      ),
  },
  {
    path: "settings",
    loadChildren: () =>
      import("./modules/admin-store/pages/settings/settings.module").then(
        (m) => m.SettingsPageModule
      ),
  },
  {
    path: "store-selections",
    loadChildren: () =>
      import(
        "src/app/modules/auth/pages/store-selections/store-selections.module"
      ).then((m) => m.StoreSelectionsPageModule),
  },
  {
    path: "delivery-verification",
    loadChildren: () =>
      import(
        "./shared/pages/delivery-verification/delivery-verification.module"
      ).then((m) => m.DeliveryVerificationPageModule),
  },
  {
    path: "about",
    loadChildren: () =>
      import("./shared/pages/policies/policies.module").then(
        (m) => m.PoliciesPageModule
      ),
  },
  {
    path: "policies",
    loadChildren: () =>
      import("./shared/pages/policies/policies.module").then(
        (m) => m.PoliciesPageModule
      ),
  },
  {
    path: "guest",
    loadChildren: () =>
      import("./modules/payments/pages/guest/guest.module").then(
        (m) => m.GuestPageModule
      ),
  },
  {
    path: 'payment',
    loadChildren: () => import('./modules/admin-store/pages/payment/payment.module').then( m => m.PaymentPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
