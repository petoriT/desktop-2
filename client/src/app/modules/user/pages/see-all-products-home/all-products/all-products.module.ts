import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainListComponent } from "./main-list/main-list.component";
import {GemionicUiModule} from "src/assets/gm-components/gemionic.ui.module"


@NgModule({
  declarations: [
    MainListComponent
  ],
  imports: [
    CommonModule,
    GemionicUiModule
  ],
  exports:[
    MainListComponent
  ]
})
export class AllProductsModule { }
