import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EnvService } from 'src/app/env.service';

@Injectable({
  providedIn: 'root'
})
export class PaymentApiService {

  _urlTempOrder = `${this.env.apiUrl}/api/payfast/create_order`;

  constructor(
    private _http: HttpClient,
    private env: EnvService
  ) { }

  tempOrder(data){
    return this._http.post<any>(this._urlTempOrder, data)
  }

}
