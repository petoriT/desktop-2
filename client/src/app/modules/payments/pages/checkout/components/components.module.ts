import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PayfastComponent } from './paynow/payfast/payfast.component';


@NgModule({
  declarations: [
    PayfastComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    PayfastComponent
  ]
})
export class ComponentsModule { }
