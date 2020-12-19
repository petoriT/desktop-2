import { Component, OnDestroy, OnInit } from "@angular/core";
import { Platform } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { AuthApiService } from "src/app/core-modules/services/auth/auth-api/auth-api.service";
import { NavigationStart, Router } from "@angular/router";
import { AlertController } from "@ionic/angular";
import { UserFacadeService } from "src/app/core-modules/services/profile/profile-facade/profile-facade.service";
import { MenuStateService } from "src/app/core-modules/services/menus/menu-state/menu-state.service";
import { Observable, Observer, fromEvent, merge, Subscription } from "rxjs";
import { map } from "rxjs/operators";
import { distinctUntilChanged } from "rxjs/operators";
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
export let browserRefresh = false;


@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
})
export class AppComponent implements OnInit, OnDestroy {
  user: any;
  ownStore: boolean;
  location: boolean;
  isVerified: boolean;
  isOnline: boolean;
  public loggedIn;
  public token;
  device_screen ;
  //observables
  profile$;
  isUpdating$;
  menuStatus$: any;
  public show;

  subscription: Subscription;

  //Check if internet connection
  createOnline$() {
    return merge<boolean>(
      fromEvent(window, "offline").pipe(map(() => false)),
      fromEvent(window, "online").pipe(map(() => true)),
      new Observable((sub: Observer<boolean>) => {
        sub.next(navigator.onLine);
        sub.complete();
      })
    );
  }

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private authService: AuthApiService,
    public alertController: AlertController,
    public menuState: MenuStateService,
    private userFacade: UserFacadeService,
    breakpointObserver: BreakpointObserver,
  ) {
    this.initializeApp();
    ////loading
    this.isUpdating$ = this.userFacade.isUpdating$();

    this.subscription = router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        browserRefresh = !router.navigated;
      }
    });
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

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    //check if internet is on
    this.createOnline$().subscribe((isOnline) => {
      if (isOnline) {
        this.isOnline = isOnline;
        //update menu appropriately
        this.menuStatus$ = this.menuState
          .getMenuStatus()
          .pipe(distinctUntilChanged());
        // Is user logged in
        this.loggedIn = this.menuState.loggedIn().pipe(distinctUntilChanged());

        if (!!localStorage.getItem("token")) {
          //get User profile
          this.userFacade.loadUser();

          this.profile$ = this.userFacade
            .getUser$()
            .pipe(distinctUntilChanged());
        } else {
          //if User not logged in
          this.menuState.updateMenuStatus("none");
        }
        this.token = !!localStorage.getItem("token");
        console.log(this.profile$);
      } else {
        //if user offline
        this.router.navigate(["/auth/user/login"]);
      }
    });
  }

  verifyAgain() {
    this.authService.verifyAgain().subscribe(
      (res) => {
        console.log(res.message);
        //alertController
      },
      (err) => {
        console.log(err);
      }
    );
  }

  logout() {
    localStorage.removeItem("token");
    this.userFacade.resetUserObs();
    this.menuState.loggedIn();
    this.menuState.updateMenuStatus("none");
    this.router.navigate(["/user/login"]);
  }

  show_Confirm() {
    this.show = true;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
