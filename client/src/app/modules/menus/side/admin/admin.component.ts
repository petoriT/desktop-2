import { Component, OnInit } from "@angular/core";
import { MenuStateService } from "src/app/core-modules/services/menus/menu-state/menu-state.service";
import { UserFacadeService } from "src/app/core-modules/services/profile/profile-facade/profile-facade.service";
import { distinctUntilChanged } from "rxjs/operators";
import { NavigationEnd, Router } from "@angular/router";
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import { HeaderStateService } from "src/app/core-modules/services/header/header-state/header-state.service";
import { ProductFacadeService } from "src/app/core-modules/services/products/product-facade/product-facade.service";

@Component({
  selector: "app-admin-menu",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.scss"],
})
export class AdminComponent implements OnInit {
  token;
  device_screen 
  public avatar;
  public profile$;
  actvated_tab ;
  private value_of_desktop_side_menu;

  constructor(
 
    public menuState: MenuStateService,
    private userFacade: UserFacadeService,
    private router: Router,
    breakpointObserver: BreakpointObserver,
    private headerStateService: HeaderStateService,
    private productFacade: ProductFacadeService,

  ){
    breakpointObserver.observe([
      Breakpoints.Handset
    ]).subscribe(result => {
      if (result.matches) {
        this.device_screen = "Handset"
      }
    });
    breakpointObserver.observe([
      Breakpoints.Tablet
    ]).subscribe(result => {
      if (result.matches) {
        this.device_screen = "Tablet"
      }
    });

    breakpointObserver.observe([
      Breakpoints.Web
    ]).subscribe(result => {
      if (result.matches) {
        this.device_screen = "Web"
      }
    });

router.events.subscribe(
  (value)=>{
    console.log(value)
    if(value instanceof NavigationEnd){
      this.changeMenuSideStatus(value.url)
       console.log(value.url)
    }
  }
)
  }

  ngOnInit() {
    this.token = !!localStorage.getItem("token");
    this.actvated_tab = this.headerStateService.getDesktopSideMenuState()
    this.userFacade
    this.userFacade
      .getUser$()
      .pipe(distinctUntilChanged())
      .subscribe(
        (res) => {
          this.profile$ = res;

          if (this.profile$.profileImage) {
            this.avatar = false;
          } else {
            this.avatar = true;
          }

          console.log(this.profile$);
        },
        (err) => {
          console.log(err);
        }
      );
  }

  userShow(user) {
    // TODO: test method
    this.menuState.updateMenuStatus(user);
  }
  
  gotoSettings() {
    localStorage.setItem("st", this.userFacade.getCurrentStore()._id);
    this.router.navigate(["/admin-store/store/settings"]);
  }
  
  goMarketPlace() {
    this.menuState.updateMenuStatus("user");
    this.router.navigate(["/user/landing"]);
  }
  setDesktopSideMenuStateValue(data){
    this.headerStateService.setDesktopSideMenuState(data)
  }
  changeMenuSideStatus(url){
    switch (url) {
      case '/admin-store/store/dashboard':
       
        this.headerStateService.getDesktopSideMenuState().subscribe(
          (res)=>{
           this.value_of_desktop_side_menu = res
          },(err)=>{
            console.log(err)
          }
        )

        if(this.value_of_desktop_side_menu !=='dashboard'){
          this.headerStateService.setDesktopSideMenuState('dashboard')
        }
        break;
        case '/admin-store/store/sales':

          this.headerStateService.getDesktopSideMenuState().subscribe(
            (res)=>{
             this.value_of_desktop_side_menu = res
            },(err)=>{
              console.log(err)
            }
          )
            this.headerStateService.setDesktopSideMenuState(this.value_of_desktop_side_menu )
  
          break;
          case '/admin-store/store/products':

          this.headerStateService.getDesktopSideMenuState().subscribe(
            (res)=>{
             this.value_of_desktop_side_menu = res
            },(err)=>{
              console.log(err)
            }
          )
            this.headerStateService.setDesktopSideMenuState(this.value_of_desktop_side_menu )
  
          break;
          case  '/admin-store/store/users':
       
            this.headerStateService.getDesktopSideMenuState().subscribe(
              (res)=>{
               this.value_of_desktop_side_menu = res
              },(err)=>{
                console.log(err)
              }
            )
    
            if(this.value_of_desktop_side_menu !=='users'){
              this.headerStateService.setDesktopSideMenuState('users')
            }
            break;
            case  '/admin-store/store/settings':
       
            this.headerStateService.getDesktopSideMenuState().subscribe(
              (res)=>{
               this.value_of_desktop_side_menu = res
              },(err)=>{
                console.log(err)
              }
            )
    
            if(this.value_of_desktop_side_menu !=='settings'){
              this.headerStateService.setDesktopSideMenuState('settings')
            }
            break;
            case '/admin-store/store/report':
            this.headerStateService.getDesktopSideMenuState().subscribe(
              (res)=>{
               this.value_of_desktop_side_menu = res
              },(err)=>{
                console.log(err)
              }
            )
    
            if(this.value_of_desktop_side_menu !=='reports'){
              this.headerStateService.setDesktopSideMenuState('reports')
            }

            break;
      default:
        break;
    }
    console.log("function fires")
  }
}
