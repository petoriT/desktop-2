import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EnvService } from 'src/app/env.service';

@Injectable({
  providedIn: 'root'
})
export class EmailsApiService {

  _urlSendEmail = `${this.env.apiUrl}/api/emails/send_email`;

  constructor(
    private _http: HttpClient,
    private env: EnvService
  ) { }

  sendEmail(data){
    return this._http.post<any>(this._urlSendEmail, data)
  }

}
