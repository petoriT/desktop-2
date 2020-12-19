import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryStateService {

  private updating$ = new BehaviorSubject<boolean>(false);
  private categories$ = new BehaviorSubject<any[]>([]);

  constructor() { }

  // return updating$ status
  isUpdating$() {
    return this.updating$.asObservable();
  }

  // change updating$ status
  setUpdating(isUpdating: boolean) {
    this.updating$.next(isUpdating);
  }

  // return categories$ state
  getCategories$() {
   return this.categories$.asObservable();
  }

  // Load new set of categories
  setCategories(categories) {
    this.categories$.next(categories);
  }

  // add new category to categories$ state
  addCategory(category) {
    const currentValue = this.categories$.getValue();
    this.categories$.next([...currentValue, category]);
  }

  // update category in categories$ state
  updateCategory(updatedCategory) {
    const categories = this.categories$.getValue();
    const indexOfUpdated = categories.findIndex(category => {
      category.id === updatedCategory.id
    });
    categories[indexOfUpdated] = updatedCategory;
    this.categories$.next([...categories]);
  }

  // remove category from categories$
  removeCategory(categoryRemove) {
    const currentValue = this.categories$.getValue();
    this.categories$.next(currentValue.filter(category => category !== categoryRemove));
  }

}
