import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { Router } from "@angular/router";
import { StoreRegisterPage } from "./store-register/store-register.page";
import { HeaderStateService } from "src/app/core-modules/services/header/header-state/header-state.service";
@Component({
  selector: "app-welcome",
  templateUrl: "./welcome.page.html",
  styleUrls: ["./welcome.page.scss"],
})
export class WelcomePage implements OnInit {
  register_store;
  registeredUserData;

  constructor(
    private modalController: ModalController,
    private router: Router,
    private headerState: HeaderStateService
    
  ) {}

  ngOnInit() {
    this.registeredUserData = history.state.data;
    this.register_store = history.state.rs;
  }

  next() {
    this.router.navigate(["/user/landing/home"]);
    this.headerState.setReturnRoute("none");
  }
  
  storeRegister() {
    this.router.navigate(["/auth/user/store-register"]);
    this.headerState.setReturnRoute("none");

  }
}
