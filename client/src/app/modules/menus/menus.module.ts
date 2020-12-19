import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { AdminComponent } from './side/admin/admin.component';
import { UserComponent } from './side/user/user.component';
import {MatTreeModule} from '@angular/material/tree';

@NgModule({
  declarations: [
    AdminComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    IonicModule,
    MatTreeModule
  ],
  exports: [
    AdminComponent,
    UserComponent
  ]
})
export class MenusModule { }
