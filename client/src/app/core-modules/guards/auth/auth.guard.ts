import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthApiService } from 'src/app/core-modules/services/auth/auth-api/auth-api.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{

  constructor(
    private _authService: AuthApiService ,
    private _router: Router
  ){ }

  canActivate(): boolean {
    if (this._authService.loggedIn()){
      return true
    }else{
      this._router.navigate(['/user/login'])
      return false
    }
  }
}
