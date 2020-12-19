import { Component, OnInit } from '@angular/core';
import { AuthApiService } from 'src/app/core-modules/services/auth/auth-api/auth-api.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { PasswordValidator } from '../../shared/password.validator';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage implements OnInit {

  initId: string;
  initToken: string;

  private resetPasswordForm : FormGroup

  constructor(
    private _authService: AuthApiService, 
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder
  ) { }

    ngOnInit() {
      //get params from backend query string
      this.activatedRoute.queryParams.subscribe(
        params => {
          this.initId = params['id'];
          this.initToken = params['token']
        }
      )
      //create new form-group instance
      this.resetPasswordForm = this.formBuilder.group({
        //create instances of form-control
        id: [this.initId, [Validators.required]],
        token: [this.initToken, [Validators.required]],
        password: ['', [Validators.required, Validators.minLength(6) ]],
        confirmPassword: ['', Validators.required],
      }, {validator: PasswordValidator});
    }

    onSubmit(){
      //register to service and subscribe to observable
      this._authService.resetPassword(this.resetPasswordForm.value).subscribe(
          response => {
            console.log(response)
          this.router.navigate(['/user/login'], {state: {data: response.message}});
          },
          error => console.error('Error', error)
        )
    }

}
