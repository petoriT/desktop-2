import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { EnvService } from "src/app/env.service";
import { HTTP } from '@ionic-native/http/ngx';
import { Platform } from '@ionic/angular';
import { from } from 'rxjs';
import { BehaviorSubject, Observable } from "rxjs";
@Injectable({
  providedIn: "root",
})
export class ProductApiService {
  _urlCreateProduct = `${this.env.apiUrl}/api/product/createProduct`;
  _urlUploadPicture = `${this.env.apiUrl}/api/product/uploadImage`;
  _urlUpdateProduct = `${this.env.apiUrl}/api/product/updateProduct`;
  _urlViewProducts = `${this.env.apiUrl}/api/product/view_all_products`;
  _urlViewStoreProducts = `${this.env.apiUrl}/api/product/view_store_products`;
  _urlViewStoreProductsById = `${this.env.apiUrl}/api/product/view_vendor_products`;
  _urlDeleteProduct = `${this.env.apiUrl}/api/product/deleteProduct`;
  _urlcreateBulkProduct = `${this.env.apiUrl}/api/product/create_bulk_products`;
  _urlUpdateLikeProduct = `${this.env.apiUrl}/api/product/update_like`;
  _urlgetProduct = `${this.env.apiUrl}/api/product/view_product`;
  _urlUpdateReviewProduct = `${this.env.apiUrl}/api/product/update_review`;
  _urlgetSegmentProducts = `${this.env.apiUrl}/api/product/view_segment_products`;
  _urlGetUserReviews = `${this.env.apiUrl}/api/product/get_user_reviews`;
  _urlGetUserLikedProducts = `${this.env.apiUrl}/api/product/get_user_liked_products`;
  _urlDelete_cloudinary_image = `${this.env.apiUrl}/api/product/delete_cloudinary_image`;
  constructor(private platform: Platform, private _http: HttpClient, private env: EnvService, private nativeHTTP: HTTP) { }
  androidImage = new BehaviorSubject<any>({});
  getProducts() {
    return this._http.get<any>(this._urlViewProducts);
  }

  deleteCloudImage(data) {
    return this._http.post<any>(this._urlDelete_cloudinary_image, data);
  }

  createBulkProducts(data) {
    return this._http.post<any>(this._urlcreateBulkProduct, data);
  }

  getStoreProducts() {
    return this._http.get<any>(this._urlViewStoreProducts);
  }

  getStoreProductsById(id) {
    return this._http.post<any>(this._urlViewStoreProductsById, id);
  }

  createProduct(data) {
    return this._http.post<any>(this._urlCreateProduct, data);
  }

  updateProduct(product) {
    return this._http.post<any>(this._urlUpdateProduct, product);
  }

  deleteProduct(id) {
    return this._http.post<any>(this._urlDeleteProduct, id);
  }

  uploadImage(data) {
    //Add headers
    return this._http.post<any>(this._urlUploadPicture, data);
  }

  async androidImageUpload(data) {
    await this.nativeHTTP.sendRequest(this._urlUploadPicture, {
      method: 'post',
      serializer: 'multipart',
      data: data, // form data
    }).then(res => {
      console.log("hello", res, res.data)
      this.androidImage.next(res.data)
      return this.androidImage.asObservable()
    }).catch(err => console.log(err))
  }

  updateLike(data) {
    return this._http.post<any>(this._urlUpdateLikeProduct, data);
  }

  updateReview(data) {
    return this._http.post<any>(this._urlUpdateReviewProduct, data);
  }

  getUserReviews() {
    return this._http.get<any>(this._urlGetUserReviews);
  }

  getUserlikedProducts() {
    return this._http.get<any>(this._urlGetUserLikedProducts);
  }

  getProduct(data) {
    return this._http.post<any>(this._urlgetProduct, data);
  }

  getSegmentProducts(data) {
    return this._http.post<any>(this._urlgetSegmentProducts, data);
  }
}
