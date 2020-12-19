import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthApiService } from 'src/app/core-modules/services/auth/auth-api/auth-api.service';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.page.html',
  styleUrls: ['./verify.page.scss'],
})
export class VerifyPage implements OnInit {

  token: string;
  message: string;

  constructor(
    private _authService: AuthApiService ,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    //get params from backend query string
    this.activatedRoute.queryParams.subscribe(
      params => {
        this.token = params['token'];
      }
    )
    //User Verified?
    this._authService.verifyUser({token :this.token}).subscribe(
        res => {
          this.message = res.msg;
        },
        error => console.error('Error', error)
      )
  }



}
