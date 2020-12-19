import { Component, OnInit } from "@angular/core";
import { ToastController } from "@ionic/angular";
import { HeaderStateService } from "src/app/core-modules/services/header/header-state/header-state.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-policies",
  templateUrl: "./policies.page.html",
  styleUrls: ["./policies.page.scss"],
})
export class PoliciesPage implements OnInit {
  public privacy_value;
  public user;
  public header_state;
  register_store;
  constructor(
    public toastController: ToastController,
    private headerState: HeaderStateService,
    private router: Router
  ) {}

  ngOnInit() {
    this.header_state = this.headerState.policy_header;
    console.log(this.header_state);
    this.register_store = history.state.rs;
  }

  async presentToastWithOptions(msg, data) {
    const toast = await this.toastController.create({
      header: "Acceptance Confirmation!",
      message: msg,
      position: "bottom",
      buttons: [
        {
          text: "Confirm",
          role: "cancel",
          handler: () => {
            console.log("confirmed clicked");
          },
        },
      ],
    });
    toast.present();
  }

  toast(data) {
    switch (data) {
      case "user": {
        if (this.user == true) {
          let msg = "You have Accepted the AFROB END USER LICENSE AGREEMENT";
          this.presentToastWithOptions(msg, data);
        } else if (this.user == false) {
          let msg =
            "You have Not Accepted the AFROB END USER LICENSE AGREEMENT";
          this.presentToastWithOptions(msg, data);
        }

        break;
      }

      case "privacy": {
        if (data == "privacy" && this.privacy_value == true) {
          let msg = "You have Accepted the DATA PRIVACY POLICY ";
          this.presentToastWithOptions(msg, data);
        } else if (data == "privacy" && this.privacy_value == false) {
          let msg = "You have Not Accepted the DATA PRIVACY POLICY ";
          this.presentToastWithOptions(msg, data);
        }
        break;
      }
    }
  }
  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 3500,
    });
    toast.present();
  }

  next() {
    if (this.privacy_value && this.user) {
      this.router.navigate(["/auth/user/welcome"], {
        state: { rs: this.register_store },
      });

      this.headerState.policy_header = false;
    } else {
      let msg =
        " Accept the USER LICENSE AGREEMENT and the DATA PRIVACY POLICY first";
      this.presentToast(msg);
    }
  }
}
