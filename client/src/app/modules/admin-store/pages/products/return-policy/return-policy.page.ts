import { Component, OnInit, ViewChild } from "@angular/core";
import { HeaderStateService } from "src/app/core-modules/services/header/header-state/header-state.service";
import { IonSlides } from "@ionic/angular";
import { ToastController } from "@ionic/angular";
import { Location } from "@angular/common";
import { UserFacadeService } from "src/app/core-modules/services/profile/profile-facade/profile-facade.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-return-policy",
  templateUrl: "./return-policy.page.html",
  styleUrls: ["./return-policy.page.scss"],
})
export class ReturnPolicyPage implements OnInit {
  @ViewChild("check_slides", { static: true }) slides: IonSlides;
  public current_question = "";
  public added_question: any = [];
  store_id;
  constructor(
    private headerState: HeaderStateService,
    public toastController: ToastController,
    private _location: Location,
    private router: Router,
    private userFacade: UserFacadeService
  ) { }
  public return_reason = [
    "Damaged Goods",
    "Wrong Order Delivered",
    "SCAM",
    "size variation ",
  ];
  ngOnInit() {
    this.store_id = localStorage.getItem("st");
  }

  next(slides) {
    slides.slideNext();
    this.presentToast("swipe to go back");
  }

  async presentToast(data) {
    const toast = await this.toastController.create({
      message: data,
      duration: 3000,
      position: "bottom",
    });
    toast.present();
  }

  backClicked() {
    this._location.back();
  }
  addQuestion() {
    this.added_question.push(this.current_question);
    this.current_question = "";
  }

  addReturnPolicy() {
    this.userFacade.updateStoreProfile({
      return_policy: this.added_question,
      store_id: this.store_id,
    });
    //complete
    this.router.navigate(["/admin-store/store"]);
  }
}
