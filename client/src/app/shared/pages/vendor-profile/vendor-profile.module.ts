import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { VendorProfilePageRoutingModule } from "./vendor-profile-routing.module";

import { VendorProfilePage } from "./vendor-profile.page";
import { ComponentsModule } from "src/app/modules/user/shared/components/components.module";
import { StoreProfileComponentsModule } from "./components/store-profile-components.module";
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    StoreProfileComponentsModule,
    VendorProfilePageRoutingModule,
  ],
  declarations: [VendorProfilePage],
})
export class VendorProfilePageModule {}
