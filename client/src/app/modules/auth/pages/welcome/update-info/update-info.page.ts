import { Component, OnInit, ViewChild } from "@angular/core";
import { FormGroup, FormControl, FormControlName } from "@angular/forms";
import { IonSlides } from "@ionic/angular";
import { ToastController } from "@ionic/angular";
import { Router } from "@angular/router";
import { AuthApiService } from "src/app/core-modules/services/auth/auth-api/auth-api.service";
import { Data } from "./za";
import { HeaderStateService } from "src/app/core-modules/services/header/header-state/header-state.service";
import { UserFacadeService } from 'src/app/core-modules/services/profile/profile-facade/profile-facade.service';


@Component({
  selector: "app-update-info",
  templateUrl: "./update-info.page.html",
  styleUrls: ["./update-info.page.scss"],
})
export class UpdateInfoPage implements OnInit {
  @ViewChild("UpdateinfoSlides", { static: true }) slides: IonSlides;
  profileFormSlide1 = new FormGroup({
    first_name: new FormControl(""),
    last_name: new FormControl(""),
  });
  profileForm = new FormGroup({
    address: new FormGroup({
      unit: new FormControl(""),
      street_name: new FormControl(""),
      complex: new FormControl(""),
      suburb: new FormControl(""),
      city: new FormControl(""),
      province: new FormControl(""),
      zip: new FormControl(""),
    }),
  });
  public Data: any;
  public return_to;
  showNext = true;
  showBack = false;
  constructor(
    public toastController: ToastController,
    private router: Router,
    private authApi: AuthApiService,
    private headerState: HeaderStateService,
    private userFacade: UserFacadeService
  ) { }

  async presentSaleToast(data) {
    const toast = await this.toastController.create({
      message: data,
      position: "bottom",
      animated: true,
      duration: 2000,
    });
    toast.present();
  }

  ngOnInit() { }

  onSubmit() {
    this.return_to = this.headerState.return_route;
    console.log(this.profileForm.value, this.profileFormSlide1.value);
    let new_form = {
      ...this.profileForm.value,
      ...this.profileFormSlide1.value,
    };
    this.authApi.userUpdate(new_form).subscribe(
      (res) => {
        this.userFacade.loadUser()
        this.presentSaleToast("Info Updated and ready to get started");
        setTimeout(() => {
          if (this.return_to) {
            this.router.navigate([this.return_to])
          } else {
            this.router.navigate(["/user/user_profile"]);
          }

        }, 1500);
      },
      (err) => {
        console.log(err);
        this.presentSaleToast("Error!");
      }
    );
  }
  next() {
    this.slides.slideNext();
    this.showNext = false;
    this.showBack = true;
  }
  slidesBack() {
    this.showNext = true;
    this.showBack = false;
    this.slides.slidePrev();
  }
}
