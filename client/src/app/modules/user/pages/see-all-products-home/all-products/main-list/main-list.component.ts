import { Component, OnInit, OnDestroy } from "@angular/core";
import { ProductFacadeService } from "src/app/core-modules/services/products/product-facade/product-facade.service";
import { CartFacadeService } from "src/app/core-modules/services/cart/cart-facade/cart-facade.service";
import { CategoryFacadeService } from "src/app/core-modules/services/categories/category-facade/category-facade.service";
import { Router } from "@angular/router";
import { HeaderStateService } from "src/app/core-modules/services/header/header-state/header-state.service";
import { distinctUntilChanged } from "rxjs/operators";

@Component({
  selector: "app-main-list",
  templateUrl: "./main-list.component.html",
  styleUrls: ["./main-list.component.scss"],
})
export class MainListComponent implements OnInit, OnDestroy {
  public products$;
  public reset;
  categories$;
  all_p;
  public selected_categgory = [];
  public product_type_categories = [];
  public current_group;
  public categories;
  products;
  constructor(
    private _productFacade: ProductFacadeService,
    private cartFacade: CartFacadeService,
    private categoryFacade: CategoryFacadeService,
    private headerState: HeaderStateService,
    private router: Router
  ) {}

  ngOnInit() {
    //getCategories
    this.categories$ = this.categoryFacade.getCategories$();
    //get products as observable
    this.all_p = localStorage.getItem("all_p");
    this.categories$.subscribe((res) => {
      //this.categories = res;
      res.forEach((group) => {
        //get current group name
        if (group.name == localStorage.getItem("current_group")) {
          this.current_group = group.name;
          //get sub grouped names
          // loop through category list and group
          var groupBy = function (xs, key) {
            return xs.reduce(function (rv, x) {
              (rv[x[key]] = rv[x[key]] || []).push(x);
              return rv;
            }, {});
          };

          // Group by subcategor
          let grouped = groupBy(group.list, "Categories");

          let grouped_sub = Object.keys(grouped);

          let cleaned = grouped_sub.filter((sub) => {
            return sub !== "";
          });

          this.selected_categgory = cleaned;
        }
      });
    });

    this.products$ = this._productFacade.getMainProducts().pipe(distinctUntilChanged());
    console.log(this.products$)
    this.reset = 0;
  }

  count(i) {
    this.reset += 1;
    if (this.reset == 5) {
      this.reset = 1;
    }
    switch (this.reset) {
      case 1:
        return "product2";
        break;
      case 2:
        return "productTwo";
        break;
      case 3:
        return "productTwo2";
        break;
      case 4:
        return "product";
        break;
    }
  }

  loadCategoryProducts(category) {
    this.product_type_categories = [];
    this._productFacade.onMarketSearch("");
  }

  loadSubCategoryProducts(sub_category) {
    this._productFacade.onMarketSearch(sub_category);
    this.categories$.subscribe((res) => {
      //this.categories = res;
      res.forEach((group) => {
        //get current group name
        if (group.name == localStorage.getItem("current_group")) {
          this.current_group = group.name;
          //get sub grouped names
          // loop through category list and group
          var groupBy = function (xs, key) {
            return xs.reduce(function (rv, x) {
              (rv[x[key]] = rv[x[key]] || []).push(x);
              return rv;
            }, {});
          };

          // Group by subcategor
          let grouped = groupBy(group.list, "Product type");

          let grouped_sub = Object.keys(grouped);

          let cleaned = grouped_sub.filter((sub) => {
            return sub !== "";
          });

          this.product_type_categories = cleaned;
        }
      });
    });
  }

  loadProductTypeCategory(selected) {
    this._productFacade.onMarketSearch(selected);
  }

  searchItems(ev) {
    // set val to the value of the searchbar
    let val = ev.target.value;
    this._productFacade.onMarketSearch(val);
  }

  viewDetailPage(product) {
    this.headerState.updateHeaderStatus("product_detail");
    //navigate
    this.router.navigate([`/user/landing/product-detail`, product._id]);
  }

  addToCart(product) {
    this.cartFacade.addToCart(product);
  }

  loadCurrentCategories(category) {
    localStorage.setItem("current_group", category);
  }

  ngOnDestroy() {
    localStorage.removeItem("all_p");
    localStorage.removeItem("current_group");
    this._productFacade.resetMainList();
  }
}
