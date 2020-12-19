import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoresListComponent} from './stores-list/stores-list.component';


@NgModule({
  declarations: [
    StoresListComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    StoresListComponent
  ]
})
export class StoresModule { }
