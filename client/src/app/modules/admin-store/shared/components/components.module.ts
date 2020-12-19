import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { NgxChartsModule } from '@swimlane/ngx-charts';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSelectModule} from '@angular/material/select';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    IonicModule,
    NgxChartsModule,
    ReactiveFormsModule,
    MatExpansionModule,
    MatSelectModule,
    FormsModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
  ],
  entryComponents: [

  ],
})
export class ComponentsModule { }
