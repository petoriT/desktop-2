import { Injectable } from '@angular/core';
import { ReportStateService } from 'src/app/core-modules/services/reports/report-state/report-state.service';

@Injectable({
  providedIn: 'root'
})
export class ReportFacadeService {

  constructor(
  	private reportState: ReportStateService,
  	) { }

  getReportStatus(){
    return this.reportState.getReportStatus()
  }

  updateReportStatus(status){
    return this.reportState.updateReportStatus(status)
  }

  resetReportStatus(){
    return this.reportState.resetReportStatus()
  }
}
