import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthApiService } from 'src/app/core-modules/services/auth/auth-api/auth-api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {

  private resetPasswordForm:FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private _authService: AuthApiService,
    private router: Router
  ) { }

  ngOnInit() {
    this.resetPasswordForm = this.formBuilder.group({
      email:['',
        Validators.compose([Validators.maxLength(50),
        Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$'),
        Validators.required])
      ]
    })
  }

  onSubmit(){
    this._authService.forgotPassword(this.resetPasswordForm.value).subscribe(
      res => {
        this.router.navigate(['/user/login'], {state: {data: res.message}});
      },
      error => console.error('Error: ', error)
      )
  }

}
