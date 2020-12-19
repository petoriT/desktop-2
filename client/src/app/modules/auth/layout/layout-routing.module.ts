import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "src/app/core-modules/guards/auth/auth.guard";
import { LayoutPage } from "./layout.page";

const routes: Routes = [
  {
    path: "user",
    component: LayoutPage,
    children: [
      {
        path: "user_profile",
        loadChildren: () =>
          import("src/app/modules/auth/pages/profile/profile.module").then(
            (m) => m.ProfilePageModule
          ),
        canActivate: [AuthGuard],
      },
      {
        path: "return",
        loadChildren: () =>
          import("src/app/modules/auth/pages/profile/returns/returns.module").then(
            (m) => m.ReturnsPageModule
          ),
        canActivate: [AuthGuard],
      },
      {
        path: "login",
        loadChildren: () =>
          import("src/app/modules/auth/pages/login/login.module").then(
            (m) => m.LoginPageModule
          ),
      },
      {
        path: "register",
        loadChildren: () =>
          import("src/app/modules/auth/pages/register/register.module").then(
            (m) => m.RegisterPageModule
          ),
      },
      {
        path: "welcome",
        loadChildren: () =>
          import("src/app/modules/auth/pages/welcome/welcome.module").then(
            (m) => m.WelcomePageModule
          ),
        canActivate: [AuthGuard],
      },
      {
        path: "store-register",
        loadChildren: () =>
          import(
            "src/app/modules/auth/pages/welcome/store-register/store-register.module"
          ).then((m) => m.StoreRegisterPageModule),
        canActivate: [AuthGuard],
      },
      {
        path: "update-info",
        loadChildren: () =>
          import(
            "src/app/modules/auth/pages/welcome/update-info/update-info.module"
          ).then((m) => m.UpdateInfoPageModule),
        canActivate: [AuthGuard],
      },
      {
        path: "google",
        loadChildren: () =>
          import("src/app/modules/auth/pages/google/google.module").then(
            (m) => m.GooglePageModule
          ),
      },
      {
        path: "verify",
        loadChildren: () =>
          import("src/app/modules/auth/shared/verify/verify.module").then(
            (m) => m.VerifyPageModule
          ),
      },
      {
        path: "forgot-password",
        loadChildren: () =>
          import(
            "src/app/modules/auth/shared/forgot-password/forgot-password.module"
          ).then((m) => m.ForgotPasswordPageModule),
      },
      {
        path: "user/reset-password",
        loadChildren: () =>
          import(
            "src/app/modules/auth/shared/reset-password/reset-password.module"
          ).then((m) => m.ResetPasswordPageModule),
      },
      {
        path: "stores",
        loadChildren: () =>
          import(
            "src/app/modules/auth/pages/store-selections/store-selections.module"
          ).then((m) => m. StoreSelectionsPageModule),
      },
      {
        path: "",
        redirectTo: "/auth/user/user_profile",
        pathMatch: "full",
      },
    ],
  },
  {
    path: "",
    redirectTo: "/auth/user/user_profile",
    pathMatch: "full",
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutPageRoutingModule {}
