import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { IonicModule } from "@ionic/angular";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { MatExpansionModule } from "@angular/material/expansion";

import { ProductsComponent } from "./products/products.component";
import { CategoryComponent } from "./category/category.component";

import { AddProductComponent } from "./products/add-product/add-product.component";
import { InventoryComponent } from "./inventory/inventory.component";
import { ProductViewModalComponent } from "../modals/product-view-modal/product-view-modal.component";

import { CsvComponent } from "./csv/csv.component";
import { ImagesComponent } from "./products/images/images.component";
import { ImageCropperModule } from "ngx-image-cropper";
import {ProductsPopoverComponent} from "./products/products-popover/products-popover.component";
import {AutosizeModule} from 'ngx-autosize';

@NgModule({
  declarations: [
    CategoryComponent,
    ProductsComponent,
    AddProductComponent,
    InventoryComponent,
    CsvComponent,
    ImagesComponent,
    ProductViewModalComponent,
    ProductsPopoverComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    MatExpansionModule,
    ImageCropperModule,
    AutosizeModule
  ],
  exports: [
    CategoryComponent,
    ProductsComponent,
    AddProductComponent,
    InventoryComponent,
    CsvComponent,
    ProductViewModalComponent,
    ImagesComponent,
    ProductsPopoverComponent
  ],
  entryComponents: [],
})
export class ProductsComponentsModule {}
