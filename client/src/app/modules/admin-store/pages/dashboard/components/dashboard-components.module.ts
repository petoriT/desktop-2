import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { WidgetsnavComponent } from './widgetsnav/widgetsnav.component';
import { UsersComponent } from './widgets/users/users.component';

import {ProgressBarComponent} from './widgets/progress-bar/progress-bar.component';
import {  ReportSelectorComponent } from './report-selector/report-selector.component';

import {MatExpansionModule} from '@angular/material/expansion';
import {MatSelectModule} from '@angular/material/select';
import { ChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    WidgetsnavComponent,
    UsersComponent,
 
ProgressBarComponent,
 ReportSelectorComponent

  ],
  imports: [
    CommonModule,
    RouterModule,
    IonicModule,
    ReactiveFormsModule,
    FormsModule,

    MatExpansionModule,
    MatSelectModule,
   ChartsModule
  ],
  exports: [
    WidgetsnavComponent,
    UsersComponent,

    ProgressBarComponent,
     ReportSelectorComponent
    ],

    
  entryComponents: [
  ]
})
export class DashboardComponentsModule { }
