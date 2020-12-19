import { Injectable } from "@angular/core";
import { ProfileApiService } from "src/app/core-modules/services/profile/profile-api/profile-api.service";
import { ProfileStateService } from "src/app/core-modules/services/profile/profile-state/profile-state.service";
import { ProductFacadeService } from "src/app/core-modules/services/products/product-facade/product-facade.service";
import { distinctUntilChanged } from "rxjs/operators";
import { ProductApiService } from "src/app/core-modules/services/products/product-api/product-api.service";
import { ProductStateService } from "src/app/core-modules/services/products/product-state/product-state.service";
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: "root",
})
export class UserFacadeService {
  constructor(
    private productFacade: ProductFacadeService,
    private userApi: ProfileApiService,
    private userState: ProfileStateService,
    private productApi: ProductApiService,
    private productState: ProductStateService,
    public toastController: ToastController
  ) { }

  isUpdating$() {
    return this.userState.isUpdating$();
  }

  resetUserObs() {
    return this.userState.resetUserObs();
  }

  getCurrentStore() {
    return this.userState.getCurrentStore();
  }

  setCurrentStore(data) {
    return this.userState.setCurrentStore(data);
  }

  getUser$() {
    // here we just pass the state without any projections
    // it may happen that it is necessary to combine two or more streams and expose to the components
    return this.userState.getUser$();
  }

  getStoreProfile$() {
    return this.userState.getStoreProfile$();
  }

  loadStoreProfile(id) {
    this.userState.setUpdating(true);
    this.userApi.storeProfile({ _id: id }).subscribe(
      (res_store) => {
        //loadStore
        let store = res_store.store;
        this.userState.setStoreProfile(store);
        this.setCurrentStore(store);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  updateStoreProfile(data) {
    this.userState.setUpdating(true);
    this.userApi.updateStoreProfile(data).subscribe(
      (res_store) => {
        //loadStore
        let store = res_store.store;
        this.userState.setStoreProfile(store);
        this.setCurrentStore(store);
        this.presentToast(
          "store updated"
        );
      },
      (err) => {
        console.log(err);
        this.presentToast(
          "oops! something went wrong"
        );
      }
    );
  }

  loadUser() {
    this.userState.setUpdating(true);

    this.userApi.getUser().subscribe(
      (res) => {
        let user = res.user;
        this.userState.setUser(user);
      },
      (err) => {
        console.log(err);
      },
      () => this.userState.setUpdating(false)
    );
  }

  // update user optimistic way
  updateUser(data) {
    this.userState.setUpdating(true);
    //update user state
    this.userState.updateUser(data);

    //update database user item status
    this.userApi.updateUser(data).subscribe(
      (res) => {
        console.log("item updated");
      },
      (err) => {
        //we need to rollback
        console.log(err);
      },
      () => this.userState.setUpdating(false)
    );
  }

  removeUser(user) {
    //change the state
    this.userState.removeUser(user);
    //update database
    let id = { id: user._id };
  }

  updateAdmin(data) {
    this.userApi.storeUpdateAdmin(data).subscribe(
      res => {
        this.setCurrentStore(res.store)
        this.presentToast("Admin user modified!")
      }, err => {
        console.log(err)
      }
    );
  }

  removeAdmin(admin) {
    //remove from database
    this.userApi.storeRemoveAdmin(admin).subscribe(
      res => {
        console.log(res)
      }, err => {
        console.log(err)
      }
    );
  }

  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2500,
    });
    toast.present();
  }
}
