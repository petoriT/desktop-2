import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivityComponent } from './activity/activity.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { PrivilegesComponent } from './privileges/privileges.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {  AdUserComponent } from "./ad-user/ad-user.component";
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [
  	ActivityComponent,
  	AdminUsersComponent,
    PrivilegesComponent,
    AdUserComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    IonicModule,
    MatExpansionModule,
    ReactiveFormsModule,
    FormsModule,
  ],
    exports: [
 	ActivityComponent,
 	AdminUsersComponent,
   PrivilegesComponent,
   AdUserComponent,

  ],

})
export class UsersComponentModule { }
