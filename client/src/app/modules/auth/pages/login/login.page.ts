import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthApiService } from "src/app/core-modules/services/auth/auth-api/auth-api.service";
import { ToastController } from "@ionic/angular";
import { HeaderStateService } from "src/app/core-modules/services/header/header-state/header-state.service";
import { UserFacadeService } from "src/app/core-modules/services/profile/profile-facade/profile-facade.service";
import { MenuStateService } from "src/app/core-modules/services/menus//menu-state/menu-state.service";
import { Observer, fromEvent, merge, Observable } from "rxjs";
import { map } from "rxjs/operators";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  title: string = "AfroB**";

  login: boolean = false;
  goGoogle: string = "http://localhost:3000/api/oauth/google";

  private loginForm: FormGroup;

  public emailVaule = "";
  public passwordValue;
  public Submit_load = true;
  passwordType: string = "password";
  passwordIcon: string = "eye-off";
  public return_to;

  createOnline$() {
    return merge<boolean>(
      fromEvent(window, "offline").pipe(map(() => false)),
      fromEvent(window, "online").pipe(map(() => true)),
      new Observable((sub: Observer<boolean>) => {
        sub.next(navigator.onLine);
        sub.complete();
      })
    );
  }

  constructor(
    public toastController: ToastController,
    private formBuilder: FormBuilder,
    private _authService: AuthApiService,
    private router: Router,
    private headerState: HeaderStateService,
    private userFacade: UserFacadeService,

    public menuState: MenuStateService
  ) { }

  ngOnInit() {

    this.createOnline$().subscribe((isOnline) => {
      if (isOnline && !!localStorage.getItem("token")) {
        this.menuState.updateMenuStatus("user");
        this.router.navigate(["/user/landing"]);
      }
    });
    this.loginForm = this.formBuilder.group({
      email: [
        "",
        Validators.compose([
          Validators.maxLength(20),
          Validators.pattern(
            "^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$"
          ),
          Validators.required,
        ]),
      ],
      password: ["", [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    this.return_to = this.headerState.return_route;

    this._authService.userLogin(this.loginForm.value).subscribe(
      (res) => {
        localStorage.setItem("token", res.token);
        this.userFacade.loadUser();
        this.menuState.loggedIn();
        if (res.user.storeOwner && !this.return_to) {
          this.menuState.updateMenuStatus("admin");
          this.router.navigate(["/admin-store/store"]);
        } else if (res.user.admin && !this.return_to) {
          this.router.navigate(["/super/admin"]);
        } else if (this.return_to) {
          this.router.navigate([this.return_to]);
          this.headerState.return_route = null;
        } else {
          this.menuState.updateMenuStatus("user");
          this.router.navigate(["/user/landing"]);
        }
        this.presentToast("SignedIn successfully ");
      },
      (error) => {
        console.error(error.usText, error);
        this.presentToast("error! wrong credentials");
        this.Submit_load = true;
      }
    );
  }

  sendToParent() { }

  //Check if internet connection

  activateLoad() {
    this.Submit_load = false;
  }
  async presentToast(data) {
    const toast = await this.toastController.create({
      message: data,
      duration: 2000,
      position: "bottom",
    });
    toast.present();
  }
  hideShowPassword() {
    this.passwordType = this.passwordType === "text" ? "password" : "text";
    this.passwordIcon = this.passwordIcon === "eye-off" ? "eye" : "eye-off";
    console.log("this");
  }
}
