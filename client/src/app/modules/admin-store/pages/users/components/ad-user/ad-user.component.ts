import { Component, OnInit, ViewChild } from "@angular/core";
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from "@angular/forms";
import { Router } from "@angular/router";
import { AuthApiService } from "src/app/core-modules/services/auth/auth-api/auth-api.service";
import { PasswordValidator } from "src/app/modules/auth/shared/password.validator";
import { IonSlides } from "@ionic/angular";
import { ToastController } from "@ionic/angular";
import { UserFacadeService } from "src/app/core-modules/services/profile/profile-facade/profile-facade.service";

@Component({
  selector: "app-ad-user",
  templateUrl: "./ad-user.component.html",
  styleUrls: ["./ad-user.component.scss"],
})
export class AdUserComponent implements OnInit {
  @ViewChild("userSlides") slides: IonSlides;
  public Submit_load;
  public submitted: boolean;

  //initialize new empty form-group of type FormGroup
  private slideOne: FormGroup;
  public modules;

  constructor(
    private formBuilder: FormBuilder,
    private _authService: AuthApiService,
    private router: Router,
    public toastController: ToastController,

    private userFacade: UserFacadeService
  ) { }

  ngOnInit() {
    //create new form-group instance
    this.slideOne = this.formBuilder.group({
      //create instances of form-control
      email: [
        "",
        Validators.compose([
          Validators.maxLength(50),
          Validators.pattern(
            "^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$"
          ),
          Validators.required,
        ]),
      ],
      user_type: [""],
      role: [""],
    });
  }

  onChange(event) {
    this.modules = event.detail.value;
  }

  deleteModule(data) {
    let modules = this.modules.filter((module) => {
      return module !== data;
    });
    this.modules = modules;
  }

  onSubmit() {
    let store = this.userFacade.getCurrentStore();

    let data = {
      email: this.slideOne.value.email,
      user_type: this.slideOne.value.user_type,
      role: this.slideOne.value.role,
      module_access: this.modules,
      password: "XR@Z147",
      store_id: store._id,
    };
    //subscribe to api ox2
    this._authService.adminRegister(data).subscribe(
      (res) => {
        if (res.store) {
          this.userFacade.setCurrentStore(res.store);
          this.userFacade.loadUser();
          this.router.navigate(["/admin-store/store"])
        }

        this.presentToast(res.msg)
      },
      (err) => {
        console.log(err.err);
        this.presentToast(err.msg);
      }
    );
  }
  next() {
    this.slides.slideNext();
  }
  async presentToast(data) {
    const toast = await this.toastController.create({
      message: data,
      duration: 2000,
      position: "bottom",
    });
    toast.present();
  }
}
