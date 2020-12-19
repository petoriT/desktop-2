import { Component, OnInit } from '@angular/core';
import { HeaderStateService } from "src/app/core-modules/services/header/header-state/header-state.service";
import { Router } from "@angular/router";
@Component({
  selector: 'app-store-selections',
  templateUrl: './store-selections.page.html',
  styleUrls: ['./store-selections.page.scss'],
})
export class StoreSelectionsPage implements OnInit {

  constructor( private headerState: HeaderStateService,  private router: Router,) { }

  ngOnInit() {
  }
  setRoute(){
    this.headerState.setReturnRoute("/user/stores");
    this.router.navigate(['/auth/user/store-register'])
  }
}
