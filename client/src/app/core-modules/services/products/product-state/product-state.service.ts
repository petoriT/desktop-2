import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ProductStateService {
  private updating$ = new BehaviorSubject<boolean>(false);
  private products$ = new BehaviorSubject<any[]>([]);
  private current_product$ = new BehaviorSubject<any>([]);
  private store_products$ = new BehaviorSubject<any[]>([]);
  private current_items$ = new BehaviorSubject<any[]>([]);

  ////**************Market Place ****************//////
  private current_store_product$ = new BehaviorSubject<any[]>([]);
  private main_products$ = new BehaviorSubject<any[]>([]);
  private searching_products$ = new BehaviorSubject<any[]>([]);
  private user_reviews$ = new BehaviorSubject<any[]>([]);
  private user_liked_products$ = new BehaviorSubject<any[]>([]);

  constructor() {}

  resetCurrentProduct() {
    return this.current_product$.next([]);
  }

  resetStoreProducts() {
    this.products$.next([]);
    return this.store_products$.next([]);
  }

  resetMainList() {
    this.main_products$.next([]);
    this.searching_products$.next([]);
  }

  // return updating$ status
  isUpdating$() {
    return this.updating$.asObservable();
  }

  // change updating$ status
  setUpdating(isUpdating: boolean) {
    this.updating$.next(isUpdating);
  }

  //reviews
  setUserReviews(products) {
    this.user_reviews$.next(products);
  }

  getUserReviews() {
    return this.user_reviews$.asObservable();
  }

  //reviews
  setUserLikedProducts(products) {
    this.user_liked_products$.next(products);
  }

  getUserLikedProducts() {
    return this.user_liked_products$.asObservable();
  }

  // return products$ state
  getProducts$() {
    return this.products$.asObservable();
  }
  getCurrentProduct() {
    return this.current_product$;
  }

  getStoreProducts() {
    return this.store_products$.asObservable();
  }
  getCurrentStoreProducts() {
    return this.current_store_product$.asObservable();
  }
  getCurrentItems() {
    return this.current_items$.asObservable();
  }

  // Load new set of products
  setProducts(products) {
    this.products$.next(products);
  }
  setStoreProducts(products) {
    this.store_products$.next(products);
  }
  setCurrentStoreProducts(product) {
    this.current_store_product$.next(product);
  }
  setCurrentProduct(product) {
    this.current_product$.next(product);
  }

  setCurrentItems(products) {
    this.current_items$.next(products);
  }

  // add new product to products$ state
  addProduct(product) {
    const currentValue = this.products$.getValue();
    this.products$.next([...currentValue, product]);
  }

  // update product in products$ state
  updateProduct(updatedproduct) {
    const products = this.store_products$.getValue();
    const indexOfUpdated = products.findIndex((product) => {
      return product._id === updatedproduct._id;
    });
    products[indexOfUpdated] = updatedproduct;
    this.store_products$.next([...products]);
  }

  ////**************Market Place ****************//////
  setSegmentsProducts(products, signal) {
    if (signal == "category") {
      this.main_products$.next(products);
      this.searching_products$.next(products);
      console.log(products, this.main_products$, this.searching_products$);
    }
  }

  setSearchingProducts(products) {
    this.searching_products$.next(products);
  }
  setMainProducts(products) {
    this.main_products$.next(products);
  }
  getSearchingProducts() {
    return this.searching_products$.asObservable();
  }
  getMainProducts() {
    return this.main_products$.asObservable();
  }

  ////**************Market Place ****************//////

  // remove product from products$
  removeProduct(productRemove) {
  const products = this.store_products$.getValue();
    const indexOfUpdated = products.findIndex((product) => {
      return product._id === productRemove._id;
    });
    products.splice(indexOfUpdated,1)
    console.log(products)
    this.store_products$.next([...products]);
}
}
