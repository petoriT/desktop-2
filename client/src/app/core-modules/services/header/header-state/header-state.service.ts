import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderStateService {

  private headerStatus$ = new BehaviorSubject<string>('default');
  public policy_header;
  public return_route;
  public data_passed;
  public desktop_data_pass = new BehaviorSubject<string>('')

  constructor() { 
    
  }
  getDesktopSideMenuState(){
    return this.desktop_data_pass.asObservable()
  }
  setDesktopSideMenuState(data){
    this.desktop_data_pass.next(data)
  }
  getHeaderStatus(){
    return this.headerStatus$.asObservable()
  }

  updateHeaderStatus(status){
    return this.headerStatus$.next(status)
  }

  resetHeaderStatus(){
    return this.headerStatus$.next('default')
  }
  setReturnRoute(route){
    this.return_route = route
  }
  setDataPassed(data){
    this.data_passed = data

  }
  
}
