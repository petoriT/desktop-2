import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class MenuStateService {
  private menuStatus$ = new BehaviorSubject<string>("user");

  private islogged$ = new BehaviorSubject<boolean>(false);

  constructor() {}

  getMenuStatus() {
    return this.menuStatus$.asObservable();
  }

  updateMenuStatus(status) {
    return this.menuStatus$.next(status);
  }

  loggedIn() {
    this.islogged$.next(!!localStorage.getItem("token"));
    return this.islogged$.asObservable();
  }
}
