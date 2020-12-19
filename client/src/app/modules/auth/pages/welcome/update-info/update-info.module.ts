import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { IonicModule } from "@ionic/angular";

import { UpdateInfoPageRoutingModule } from "./update-info-routing.module";

import { UpdateInfoPage } from "./update-info.page";
import {MatExpansionModule} from '@angular/material/expansion';
const routes: Routes = [
  {
    path: "",
    component: UpdateInfoPage,
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    UpdateInfoPageRoutingModule,
    RouterModule.forChild(routes),
    MatExpansionModule
  ],
  declarations: [UpdateInfoPage],
})
export class UpdateInfoPageModule {}
