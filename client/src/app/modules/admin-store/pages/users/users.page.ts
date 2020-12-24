import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { UserFacadeService } from 'src/app/core-modules/services/profile/profile-facade/profile-facade.service';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {
  public segmentChanged = "users"
  public users;
  device_screen;
  constructor(
    private userFacade: UserFacadeService,
    public toastController: ToastController,
    breakpointObserver: BreakpointObserver,
  ) {
    
    breakpointObserver.observe([
      Breakpoints.Handset
    ]).subscribe(result => {
      if (result.matches) {
        this.device_screen = "Handset"
      }
    });
    breakpointObserver.observe([
      Breakpoints.Tablet
    ]).subscribe(result => {
      if (result.matches) {
        this.device_screen = "Tablet"
      }
    });

    breakpointObserver.observe([
      Breakpoints.Web
    ]).subscribe(result => {
      if (result.matches) {
        this.device_screen = "Web"
      }
    });
   }

  ngOnInit() {
    this.getUsers()
  }

  getUsers() {
    //get current store
    let store = this.userFacade.getCurrentStore();
    //load store profile and subscribe store products
    if (Object.keys(store).length === 0) {
      this.userFacade.getUser$().subscribe(
        //load default store
        (res) => {
          this.userFacade.loadStoreProfile(res.store_id);
          let default_store = this.userFacade.getCurrentStore();
          this.users = default_store.users
        },
        (err) => {
          console.log(err);
        }
      );
    } else {
      this.userFacade.loadStoreProfile(store._id);
      let default_store = this.userFacade.getCurrentStore();
      this.users = default_store.users
    }
  }

changeSegment(data){
  
  let store = this.userFacade.getCurrentStore();
  let store_users = store.users.length
  let lisences = store.lisence
  let today_ms =  Date.now()
  let one_day_ms = 86400000

  let allow_access = false
  
  lisences.forEach(lisence => {
    let lisence_end_date = lisence.payed_amount.end_date
    let time_remaining = (lisence_end_date - today_ms)/one_day_ms

    if(store_users < lisence.number_of_users && time_remaining > 0){
      allow_access = true
    }
    if(allow_access){
      this.segmentChanged = data
    }
  });

  if(!allow_access){
    this.presentToast(
      "Buy license to add more users"
    );
  }
}

async presentToast(msg) {
  const toast = await this.toastController.create({
    message: msg,
    duration: 2500,
  });
  toast.present();
}
}
