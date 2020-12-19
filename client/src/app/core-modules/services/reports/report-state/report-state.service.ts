import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportStateService {

  private reportStatus$ = new BehaviorSubject<any>({});

  constructor() { }

  getReportStatus(){
    return this.reportStatus$.asObservable()
  }

  updateReportStatus(status){
    return this.reportStatus$.next(status)
  }

  resetReportStatus(){
    return this.reportStatus$.next({})
  }
}
