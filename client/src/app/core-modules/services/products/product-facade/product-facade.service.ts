import { Injectable } from "@angular/core";
import { ProductApiService } from "src/app/core-modules/services/products/product-api/product-api.service";
import { ProductStateService } from "src/app/core-modules/services/products/product-state/product-state.service";

@Injectable({
  providedIn: "root",
})
export class ProductFacadeService {
  constructor(
    private productApi: ProductApiService,
    private productState: ProductStateService
  ) {}

  isUpdating$() {
    return this.productState.isUpdating$();
  }

  /************************************ Admin ****************************************/

  resetStoreProducts() {
    return this.productState.resetStoreProducts();
  }

  getStoreProducts$() {
    return this.productState.getStoreProducts();
  }

  getCurrentStoreProducts() {
    return this.productState.getCurrentStoreProducts();
  }

  setStoreProducts(product) {
    return this.productState.setStoreProducts(product);
  }

  loadStoreProducts(id) {
    this.productState.setUpdating(true);

    this.productApi.getStoreProductsById({ id: id }).subscribe(
      (res) => {
        let products = res.products;
        this.productState.setStoreProducts(products);
        this.productState.setCurrentStoreProducts(products);
        this.productState.setUpdating(false);
      },
      (err) => {
        console.log(err);
      },
      () => this.productState.setUpdating(false)
    );
  }
  loadVendorProducts() {
    this.productState.setUpdating(true);

    this.productApi.getStoreProducts().subscribe(
      (res) => {
        let products = res.products;
        this.productState.setStoreProducts(products);
        this.productState.setUpdating(false);
      },
      (err) => {
        console.log(err);
      },
      () => this.productState.setUpdating(false)
    );
  }

  /************************************ Admin ****************************************/

  resetCurrentProduct() {
    return this.productState.resetCurrentProduct();
  }

  resetMainList() {
    return this.productState.resetMainList();
  }

  getProducts$() {
    // here we just pass the state without any projections
    // it may happen that it is necessary to combine two or more streams and expose to the components
    return this.productState.getProducts$();
  }

  getCurrentProduct() {
    return this.productState.getCurrentProduct();
  }

  getCurrentItems() {
    return this.productState.getCurrentItems();
  }

  setCurrentProduct(product) {
    return this.productState.setCurrentProduct(product);
  }
  setCurrentItems(product) {
    return this.productState.setCurrentItems(product);
  }

  loadCurrentProduct(_id) {
    this.productApi.getProduct({ id: _id }).subscribe(
      (res) => {
        return this.productState.setCurrentProduct(res.product);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  loadSearchedStoreProducts(val) {
    this.productState.setUpdating(true);

    this.productApi.getStoreProducts().subscribe(
      (res) => {
        let products = res.products;
        let searched = products.filter((item) => {
          return item.productName.toLowerCase().indexOf(val.toLowerCase()) > -1;
        });
        this.productState.setStoreProducts(searched);
        this.productState.setUpdating(false);
      },
      (err) => {
        console.log(err);
      },
      () => this.productState.setUpdating(false)
    );
  }

  loadProducts() {
    this.productState.setUpdating(true);

    this.productApi.getProducts().subscribe(
      (res) => {
        let products = res.products;
        //check vouchers
        this.productState.setProducts(products);
        this.productState.setUpdating(false);
      },
      (err) => {
        console.log(err);
      },
      () => this.productState.setUpdating(false)
    );
  }

  //load special category products

  loadSegmentProducts(val, signal) {
    this.productState.setUpdating(true);

    ////**************Market Place ****************//////
    /* load category for main list component */
    let value;
    if (signal == "category") {
      value = val;
    } else {
      value = null;
    }
    this.productApi
      .getSegmentProducts({ value: value, signal: signal })
      .subscribe(
        (res) => {
          let products = res.products;
          console.log(products);
          this.productState.setSegmentsProducts(products, signal);
          this.productState.setUpdating(false);
        },
        (err) => {
          console.log(err);
        },
        () => this.productState.setUpdating(false)
      );
    ////**************Market Place ****************//////
  }

  ////**************Market Place ****************//////
  onMarketSearch(val) {
    this.productState.getSearchingProducts().subscribe(
      (res) => {
        if (val == "") {
          return this.productState.setMainProducts(res);
        } else {
          let searched = res.filter((item) => {
            return (
              item.productName.toLowerCase().indexOf(val.toLowerCase()) > -1
            );
          });

          //search sub category products
          let searched_sub = res.filter((item) => {
            return item.category.sub_category == val;
          });

          if (searched_sub.length > 0) {
            return this.productState.setMainProducts(searched_sub);
          } else {
            //if product type category products
            let p_type_categories = res.filter((item) => {
              return item.category.product_type == val;
            });
            if (p_type_categories.length > 0) {
              return this.productState.setMainProducts(p_type_categories);
            } else {
              //if searched
              return this.productState.setMainProducts(searched);
            }
          }
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }
  ////**************Market Place ****************//////

  searchSegmentProduct(val) {
    this.productState.getCurrentItems().subscribe(
      (res) => {
        let searched = res.filter((item) => {
          return item.productName.toLowerCase().indexOf(val.toLowerCase()) > -1;
        });
        return this.productState.setCurrentProduct(searched);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  getMainProducts() {
    return this.productState.getMainProducts();
  }

  // optimistic update
  // 1. update UI state
  // 2. call API
  createProduct(product) {
    this.productState.setUpdating(true);
    this.productApi.createProduct(product).subscribe(
      (res) => {
        let new_product = res.product;
        // success callback - we have product generated by the server, let's update the state
        this.productState.addProduct(new_product);
        //update state
      },
      (error) => {
        // error callback - we need to rollback the state change
        console.log(error);
      },
      () => this.productState.setUpdating(false)
    );
  }

  // pessimistic update
  // 1. call API
  // 2. update UI state
  updateProduct(product) {
    this.productState.setUpdating(true);
    this.productState.updateProduct(product.product)
    this.productApi.updateProduct(product).subscribe(
      (p) => {
        this.productState.updateProduct(p.product);
      },
      (error) => console.log(error),
      () => this.productState.setUpdating(false)
    );
  }

  removeProduct(product) {
    //change the state
    this.productState.removeProduct(product);
    //update database
    let id = { id: product._id };
    this.productApi.deleteProduct(id).subscribe(
      (res) => {
        console.log(res); //// TODO:
      },
      (err) => {
        //on err roll back
        this.productState.addProduct(product);
      }
    );
  }

  updateLike(product) {
    //update database then update a list
    this.productApi.updateLike({ _id: product._id }).subscribe(
      (res) => {
        this.productState.updateProduct(res.product);
        this.productState.setCurrentProduct([res.product]);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  updateReview(product) {
    //update database then update a list
    this.productApi.updateReview(product).subscribe(
      (res) => {
        if (res.product) {
          this.productState.updateProduct(res.product);
          this.productState.setCurrentProduct([res.product]);
        } else {
          //toast message
          console.log(res);
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }

  loadUserReviews() {
    //update database then update a list
    this.productApi.getUserReviews().subscribe(
      (res) => {
        this.productState.setUserReviews(res.products_reviews);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  getUserReviews() {
    return this.productState.getUserReviews();
  }

  loadUserlikedProducts() {
    //update database then update a list
    this.productApi.getUserlikedProducts().subscribe(
      (res) => {
        console.log(res.products);
        this.productState.setUserLikedProducts(res.products);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  getUserlikedProducts() {
    return this.productState.getUserLikedProducts();
  }
}
