import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  Validators,
} from "@angular/forms";
import { Router } from "@angular/router";
import { AuthApiService } from "src/app/core-modules/services/auth/auth-api/auth-api.service";
import { PasswordValidator } from "src/app/modules/auth/shared/password.validator";
import { ToastController } from "@ionic/angular";
import { ProductApiService } from "src/app/core-modules/services/products/product-api/product-api.service";
import { HeaderStateService } from 'src/app/core-modules/services/header/header-state/header-state.service'
import { UserFacadeService } from 'src/app/core-modules/services/profile/profile-facade/profile-facade.service';
import { MenuStateService } from 'src/app/core-modules/services/menus/menu-state/menu-state.service';

@Component({
  selector: "app-register",
  templateUrl: "./register.page.html",
  styleUrls: ["./register.page.scss"],
})
export class RegisterPage implements OnInit {
  public Submit_load;
  public submitted: boolean;
  public picture_spinner = false;
  //initialize new empty form-group of type FormGroup
  private registrationForm: FormGroup;

  public register_store: boolean = false;

  public picture_uploaded: any;

  constructor(
    public toastController: ToastController,
    private formBuilder: FormBuilder,
    private _authService: AuthApiService,
    private router: Router,
    private productApi: ProductApiService,
    private headerState: HeaderStateService,
    public menuState: MenuStateService,
    private userFacade: UserFacadeService
  ) { }

  ngOnInit() {
    this.Submit_load = true;
    //create new form-group instance
    this.registrationForm = this.formBuilder.group(
      {
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
        password: ["", [Validators.required, Validators.minLength(6)]],
        confirmPassword: ["", Validators.required],
      },
      { validator: PasswordValidator }
    );
  }

  onSubmit() {
    if (this.picture_uploaded) { //this should check if the is a picture uploaded before proceeding
      if (this.submitted) {
        this.presentToast("already submitted");
      } else {
        this.Submit_load = false;
        this.submitted = true;
        this.presentToast("submitting...");
        let registered = {
          ...this.registrationForm.value,
          profileImage: this.picture_uploaded,
        };
        //register to service and subscribe to observable
        this._authService.userRegister(registered).subscribe(
          (response) => {
            localStorage.setItem("token", response.token);
            this.headerState.policy_header = true
            //set user state
            this.userFacade.loadUser();
            //set menu state
            this.menuState.updateMenuStatus("user");

            this.router.navigate(["/about"], {
              state: { data: response, rs: this.register_store },
            });
            this.Submit_load = true;
            this.presentToast("Profile Registered successfully ");
          },
          (error) => {
            this.submitted = false;
            this.Submit_load = true;
            this.presentToast("fill in the form or Try a different email address ");

            console.error("Error", error);
          }
        );
      }

    } else {
      this.presentToast("Upload a picture first !!")
    }

  }
  sendToParent() { }
  sendToggleVlaue(data) {
    this.register_store = data.detail.checked;
  }

  async presentToast(data) {
    const toast = await this.toastController.create({
      message: data,
      duration: 3000,
      position: "bottom",
    });
    toast.present();
  }

  handleFileInput(event) {
    console.log(event)
    let file = event.target.files[0];
    if (file.type == "image/jpeg" || file.type == "image/png") {
      const _formData = new FormData();
      _formData.append("image", file);

      //save picture
      this.productApi.uploadImage(_formData).subscribe((res) => {
        this.picture_spinner = true
        this.picture_uploaded = res.data;
      });
    }

  }

  async presentSaleToast(data) {
    const toast = await this.toastController.create({
      message: data,
      position: "bottom",
      animated: true,
      duration: 3000,
    });
    toast.present();
  }
}
