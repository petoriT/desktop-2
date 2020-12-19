import { Component, OnInit } from "@angular/core";
import { ToastController } from '@ionic/angular';
import { AuthApiService } from 'src/app/core-modules/services/auth/auth-api/auth-api.service';
import { UserFacadeService } from "src/app/core-modules/services/profile/profile-facade/profile-facade.service";

@Component({
  selector: "app-settings",
  templateUrl: "./settings.page.html",
  styleUrls: ["./settings.page.scss"],
})
export class SettingsPage implements OnInit {
  profile;
  constructor(
    private userFacade: UserFacadeService, 
    private authApi: AuthApiService,
    public toastController: ToastController
    ) {}

  ngOnInit() {
    this.userFacade.getUser$().subscribe(
      //load store profile
      (res) => {
        this.userFacade.loadStoreProfile(res.store_id);
        this.profile = this.userFacade.getStoreProfile$();
        this.profile.subscribe(
          (res) => {
            console.log(res);
          },
          (err) => {
            console.log(err);
          }
        );
      },
      (err) => {
        console.log(err);
      }
    );
  }

  activateFreeTrial(){
    let store = this.userFacade.getCurrentStore();

    let today_ms =  Date.now()
    let one_day_ms = 86400000

    let half_month_ms = one_day_ms * 15

    let trial_end_period = today_ms + half_month_ms

    let data = {
      store_id: store._id,
      allowed_products: 5, 
      end_date: trial_end_period
    }
  
    if(store.free_trial){
      this.presentToast(
        "Trial already Activated"
      );
    }else{
      this.authApi.activateFreeTrial({data:data}).subscribe(
        res => {
          this.presentToast(
            "15 Day Trial Activated"
          );
        },
        err => {
          console.log(err)
        }
      )
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
