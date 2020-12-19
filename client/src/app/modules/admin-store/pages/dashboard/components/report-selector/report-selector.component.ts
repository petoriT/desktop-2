import { Component, OnInit } from '@angular/core';
import { ReportFacadeService } from "src/app/core-modules/services/reports/report-facade/report-facade.service"
import { ReportStateService } from 'src/app/core-modules/services/reports/report-state/report-state.service';

@Component({
  selector: 'app-report-selector',
  templateUrl: './report-selector.component.html',
  styleUrls: ['./report-selector.component.scss'],
})
export class ReportSelectorComponent implements OnInit {

  constructor(   	private reportState: ReportStateService,
private reportsFacade: ReportFacadeService) { }

  ngOnInit() {
 

  }

gotTo(data){
	let obj = {
		"a": "1"
	}


	  this.reportState.updateReportStatus(obj)  

	  
}


}
