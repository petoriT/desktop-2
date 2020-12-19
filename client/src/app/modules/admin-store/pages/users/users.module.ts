import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {MatExpansionModule} from '@angular/material/expansion';

import { IonicModule } from '@ionic/angular';
import {UsersComponentModule} from './components/users-component.module'
import { UsersPageRoutingModule } from './users-routing.module';

import { UsersPage } from './users.page';


@NgModule({
  imports: [
  	UsersComponentModule,
    CommonModule,
    FormsModule,
    IonicModule,
    MatExpansionModule,
 
    UsersPageRoutingModule
  ],
  declarations: [UsersPage,]

})
export class UsersPageModule {}
