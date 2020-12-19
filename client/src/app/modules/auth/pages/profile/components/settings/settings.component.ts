import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { HeaderStateService } from "src/app/core-modules/services/header/header-state/header-state.service";
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {

  constructor(private headerState: HeaderStateService,  private router: Router) { }

  ngOnInit() {}
  setRoute(){
    this.headerState.setReturnRoute("fromUser");
    this.router.navigate( ['/auth/user/store-register'] )

  }
  gotTo(data){
    this.router.navigate( [data] )
  }
}
