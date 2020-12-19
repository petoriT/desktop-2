import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { EnvService } from "src/app/env.service";

@Injectable({
  providedIn: "root",
})
export class CategoryApiService {
  _urlViewCategory = `${this.env.apiUrl}/api/category/viewCategory`;
  _urlCreateCategory = `${this.env.apiUrl}/api/category/createCategory`;
  _urlUpdateCategory = `${this.env.apiUrl}/api/category/updateCategory`;
  _urlDeleteCategory = `${this.env.apiUrl}/api/category/deleteCategory`;
  _urlLoadBulk = `${this.env.apiUrl}/api/category/load_bulk`;

  constructor(private _http: HttpClient, private env: EnvService) {}

  getCategories() {
    return this._http.get<any>(this._urlViewCategory);
  }

  loadBulk(bulk) {
    console.log(bulk);
    return this._http.post(this._urlLoadBulk, bulk);
  }

  createCategory(category) {
    return this._http.post<any>(this._urlCreateCategory, category);
  }

  updateCategory(category) {
    return this._http.put<any>(this._urlUpdateCategory, category);
  }

  deleteCategory(id) {
    return this._http.post<any>(this._urlDeleteCategory, id);
  }
}
