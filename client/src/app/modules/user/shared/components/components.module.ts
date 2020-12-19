import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import {MatExpansionModule} from '@angular/material/expansion';
import { IonicRatingModule } from 'ionic4-rating';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CartModalComponent } from './modals/cart-modal/cart-modal.component';
import { UserReviewsComponent } from './user-reviews/user-reviews.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    CartModalComponent,
    UserReviewsComponent
  ],
  imports: [
    MatExpansionModule,
    CommonModule,
    IonicModule,
    IonicRatingModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    CartModalComponent,
    UserReviewsComponent
  ],
  entryComponents: [
    CartModalComponent
  ],
})
export class ComponentsModule { }
