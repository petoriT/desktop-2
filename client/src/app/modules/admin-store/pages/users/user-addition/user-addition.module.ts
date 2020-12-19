import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserAdditionPageRoutingModule } from './user-addition-routing.module';

import { UserAdditionPage } from './user-addition.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserAdditionPageRoutingModule
  ],
  declarations: [UserAdditionPage]
})
export class UserAdditionPageModule {}
