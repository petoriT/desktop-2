import { Component, OnInit } from "@angular/core";
import { CategoryFacadeService } from "src/app/core-modules/services/categories/category-facade/category-facade.service";
import { ProductFacadeService } from "src/app/core-modules/services/products/product-facade/product-facade.service";
import { Router } from "@angular/router";
import { ProductStateService } from "src/app/core-modules/services/products/product-state/product-state.service";
@Component({
  selector: "app-shop-by-department",
  templateUrl: "./shop-by-department.component.html",
  styleUrls: ["./shop-by-department.component.scss"],
})
export class ShopByDepartmentComponent implements OnInit {
  categories$;
  public reset = 1;
  public data;

  constructor(
    private categoryFacade: CategoryFacadeService,
    private _productFacade: ProductFacadeService,
    private productState: ProductStateService,
    private router: Router
  ) {}

  ngOnInit() {
    //getCategories
    this.categories$ = this.categoryFacade.getCategories$();
    this.categories$.subscribe((res) => {
      if (res.length == 0) {
        this.data = true;
      } else {
        this.data = false;
      }
    });
  }
  count(i) {
    this.reset += 1;
    if (this.reset == 4) {
      this.reset = 1;
    }
    switch (this.reset) {
      case 1:
        return " secondary";
        break;
      case 2:
        return " norm";
        break;
      case 3:
        return "tertiary";
        break;
    }
  }

  //load product categorie
  loadCategory(category) {
    localStorage.setItem("current_group", category);
    this._productFacade.loadSegmentProducts(category, "category");
    this.router.navigate(["/landing/all-products"]);
  }

  loadAllProducts() {
    localStorage.setItem("all_p", "all departments");
    this._productFacade.loadProducts();
    this._productFacade.getProducts$().subscribe(
      (res) => {
        this.productState.setMainProducts(res);
        this.productState.setSearchingProducts(res);
        this.router.navigate(["/landing/all-products"]);
      },
      (err) => {}
    );
  }
}
