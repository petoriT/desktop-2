import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { CategoryFacadeService } from "src/app/core-modules/services/categories/category-facade/category-facade.service";
import { Observable, BehaviorSubject } from "rxjs";
import { FormsModule } from "@angular/forms";
import { LoadingController } from "@ionic/angular";
import { Papa } from "ngx-papaparse";
import { ProductApiService } from "src/app/core-modules/services/products/product-api/product-api.service";

@Component({
  selector: "app-category-comp",
  templateUrl: "./category.component.html",
  styleUrls: ["./category.component.scss"],
})
export class CategoryComponent implements OnInit {
  public productsSegment;
  @Output() shareCategory = new EventEmitter();

  //observables
  categories$;
  isUpdating$;

  //categories load
  jsonData: any[] = [];
  csvData: any[] = [];
  headerRow: any[] = [];
  uploaded: boolean = false;

  localUrl;
  CategoryReady: boolean;

  constructor(
    private categoryFacade: CategoryFacadeService,
    public loadingController: LoadingController,
    private papa: Papa
  ) {}

  ngOnInit() {
    //getCategories
    this.categories$ = this.categoryFacade.getCategories$();
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: "Please wait...",
      duration: 500,
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
  }
}
