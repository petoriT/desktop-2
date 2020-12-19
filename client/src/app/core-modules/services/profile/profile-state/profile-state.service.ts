import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ProfileStateService {
  private updating$ = new BehaviorSubject<boolean>(false);
  private user$ = new BehaviorSubject<any>({});
  private store$ = new BehaviorSubject<any>({});
  private current_store = new BehaviorSubject<any>({});

  constructor() { }

  getCurrentStore() {
    return this.current_store.value;
  }

  setCurrentStore(data) {
    this.current_store.next({});
    return this.current_store.next(data);
  }

  //reset

  resetUserObs() {
    this.user$.next({});
    this.store$.next({});
    this.current_store.next({});
  }

  // return updating$ status
  isUpdating$() {
    return this.updating$.asObservable();
  }

  // change updating$ status
  setUpdating(isUpdating: boolean) {
    this.updating$.next(isUpdating);
  }

  // return user$ state
  getUser$() {
    return this.user$.asObservable();
  }

  // Load new set of user
  setUser(user) {
    this.user$.next(user);
  }

  //set up store profile
  getStoreProfile$() {
    return this.store$.asObservable();
  }

  // Load new set of user
  setStoreProfile(store) {
    this.store$.next({});
    this.store$.next(store);
  }

  // add new user to user$ state
  addUser(user) {
    const currentValue = this.user$.getValue();
    this.user$.next([...currentValue, user]);
  }

  // update user in user$ state
  updateUser(updatedUser) {
    const user = this.user$.getValue();
    const indexOfUpdated = user.findIndex((user) => {
      user.id === updatedUser.id;
    });
    user[indexOfUpdated] = updatedUser;
    this.user$.next([...user]);
  }

  // remove user from user$
  removeUser(userRemove) {
    const currentValue = this.user$.getValue();
    this.user$.next(currentValue.filter((user) => user !== userRemove));
  }
}
