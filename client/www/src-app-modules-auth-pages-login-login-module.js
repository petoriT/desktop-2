(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-modules-auth-pages-login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/auth/pages/login/login.page.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/auth/pages/login/login.page.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n  <div color=\"tertiary\" class=\"circle_top\">\r\n \r\n  </div>\r\n  <ion-fab vertical=\"top\" horizontal=\"start\">\r\n    <ion-fab-button  [routerLink]=\"['']\" size=\"small\">\r\n      <ion-icon color=\"tertiary\" name=\"close\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n  <div class=\"upper_part center\">\r\n    <ion-img style=\"height:400px\" src=\"../assets/undraw_Gift_box_re_vau4 1.svg\"></ion-img>\r\n  </div>\r\n\r\n\r\n  <ion-card  color=\"primary\" class=\"lower_part\">\r\n    <ion-card-content>\r\n      <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\r\n        <ion-grid >\r\n          <ion-row>\r\n            <ion-col class=\"center\" size= 12>\r\n\r\n             <ion-grid class=\"ion-no-padding\" >\r\n               <ion-row>\r\n                <ion-col size=12 class=\"ion-no-padding\">\r\n                    <ion-item  color=\"primary center\">\r\n                      <ion-input  autocomplete=\"off\" placeholder=\"Email\" id=\"email\" [(ngModel)]=\"emailVaule\"  formControlName=\"email\" type=\"email\" ></ion-input>\r\n                    </ion-item>\r\n                  \r\n                   </ion-col>\r\n                <ion-col size=12 class=\"ion-no-padding\">\r\n                    <div *ngIf=\"loginForm.get('email').invalid && loginForm.get('email').touched \">\r\n                      <ion-text *ngIf=\"loginForm.get('email').errors?.required\" color=\"danger\">email is required</ion-text>\r\n                    </div>\r\n                    <div *ngIf=\"loginForm.get('email').invalid && loginForm.get('email').touched \">\r\n\r\n                      <ion-text *ngIf=\"loginForm.get('email').errors?.maxlength\" color=\"danger\">email must be at most 20 Characters</ion-text>\r\n                      <ion-text *ngIf=\"loginForm.get('email').errors?.pattern&&!loginForm.get('email').errors?.maxlength\" color=\"danger\">email e.g user@host.com</ion-text>\r\n                    </div>\r\n                </ion-col>\r\n               </ion-row>\r\n             </ion-grid>\r\n\r\n            </ion-col>\r\n\r\n            <ion-col class=\"center  \" size= 12>\r\n              <ion-grid class=\"ion-no-padding\">\r\n                <ion-row >\r\n                  \r\n                  <ion-col size=12 class=\"ion-no-padding\">\r\n                    <ion-item color=\"primary center\">\r\n                      <ion-input  placeholder=\"Password\"  [(ngModel)]=\"passwordValue\" formControlName=\"password\" [type]=\"passwordType\" >\r\n                      \r\n                      </ion-input>\r\n                      <ion-icon item-end [name]=\"passwordIcon\" class=\"passwordIcon\" (click)='hideShowPassword()'></ion-icon>\r\n                   \r\n                    </ion-item>\r\n                    </ion-col>\r\n\r\n                  <ion-col size=12 class=\"ion-no-padding\">\r\n                        <div  *ngIf=\"loginForm.get('password').invalid && loginForm.get('password').touched\">\r\n                          <ion-text *ngIf=\"loginForm.get('password').errors?.required\" color=\"danger\">Password is required</ion-text>\r\n                        </div>\r\n\r\n\r\n                      <div  *ngIf=\"loginForm.get('password').invalid && loginForm.get('password').touched\">\r\n                        <ion-text *ngIf=\"loginForm.get('password').errors?.minlength\" color=\"danger\">Password must be at least 6 Characters</ion-text>\r\n                      </div>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-grid>\r\n\r\n            </ion-col>\r\n\r\n            <ion-col  size=12>\r\n              <ion-button (click)=\"activateLoad()\" size=\"small\" style=\"width: 80%;margin: auto;\"  expand=\"full\" shape=\"round\" type=\"submit\" color=\"secondary\" >\r\n\r\n                <div style=\"color:#018786\" class=\"center\"  *ngIf=\"Submit_load\">\r\n                  SignIn\r\n                 </div>\r\n                <div class=\"center\" style=\"color:#018786\" *ngIf=\"!Submit_load\">\r\n                  SigningIn\r\n                  <ion-spinner style=\"padding-left: 5px;\" name=\"crescent\"></ion-spinner>\r\n                </div>\r\n\r\n              </ion-button>\r\n            </ion-col>\r\n\r\n            <ion-col size=12  >\r\n              <ion-button [routerLink]=\"['/user/forgot-password']\" expand=\"full\" shape=\"round\"  color=\"primary\" ><sub style=\"color: #90DED7;\">Forgot Password</sub></ion-button>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n\r\n\r\n      </form>\r\n\r\n    </ion-card-content>\r\n\r\n\r\n  </ion-card>\r\n  <div  [routerLink]=\"['/auth/user/register']\" class=\"bottom_link\" >\r\n   <sub style=\"color: #018786;\">SignUp</sub>\r\n\r\n  </div>\r\n\r\n\r\n <!--\r\n  <ion-item *ngIf=\"message\" >\r\n    <ion-text color=\"success\"><sub>{{message | json}}</sub></ion-text>\r\n  </ion-item>\r\n\r\n   The Log in Form starts here\r\n    <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\r\n\r\n\r\n      <ion-item class=\"roundBorder\" >\r\n\r\n        <ion-label position=\"floating\" >Email</ion-label>\r\n\r\n          <ion-input id=\"email\" [(ngModel)]=\"emailVaule\"  formControlName=\"email\" type=\"email\" ></ion-input>\r\n          <div *ngIf=\"loginForm.get('email').invalid && loginForm.get('email').touched \">\r\n             <ion-text *ngIf=\"loginForm.get('email').errors?.required\" color=\"danger\"><sub>email is required</sub></ion-text>\r\n          </div>\r\n      </ion-item>\r\n\r\n      <div *ngIf=\"loginForm.get('email').invalid && loginForm.get('email').touched \">\r\n\r\n        <ion-text *ngIf=\"loginForm.get('email').errors?.maxlength\" color=\"danger\"><sub>email must be at most 20 Characters</sub></ion-text>\r\n        <ion-text *ngIf=\"loginForm.get('email').errors?.pattern&&!loginForm.get('email').errors?.maxlength\" color=\"danger\"><sub>email e.g user@host.com</sub></ion-text>\r\n      </div>\r\n\r\n\r\n\r\n\r\n      <div class=\"space\"></div>\r\n\r\n      <ion-item class=\"roundBorder\" >\r\n        <ion-label position=\"floating\">Password</ion-label>\r\n        <ion-input  [(ngModel)]=\"passwordVelue\" formControlName=\"password\" type=\"password\" ></ion-input>\r\n        <div  *ngIf=\"loginForm.get('password').invalid && loginForm.get('password').touched\">\r\n          <ion-text *ngIf=\"loginForm.get('password').errors?.required\" color=\"danger\"><sub>Password is required</sub></ion-text>\r\n        </div>\r\n      </ion-item>\r\n\r\n      <div  *ngIf=\"loginForm.get('password').invalid && loginForm.get('password').touched\">\r\n        <ion-text *ngIf=\"loginForm.get('password').errors?.minlength\" color=\"danger\"><sub>Password must be at least 6 Characters</sub></ion-text>\r\n      </div>\r\n\r\n      <div class=\"space\"></div>\r\n     <ion-button  [disabled]=\"!loginForm.valid\" expand=\"full\" shape=\"round\" type=\"submit\" color=\"warning\" >Submit</ion-button>\r\n\r\n\r\n\r\n     <ion-grid>\r\n      <ion-row>\r\n        <ion-col col-2>\r\n          <ion-fab>\r\n            <ion-fab-button color=\"orange\">\r\n              <ion-icon size=\"large\"color=\"danger\" name=\"logo-google\"><a href=\"{{goGoogle}}\">Google</a></ion-icon>\r\n             </ion-fab-button>\r\n           </ion-fab>\r\n\r\n        </ion-col>\r\n\r\n        <ion-col col-10>\r\n          <ion-fab style=\"left:-90px\">\r\n            <ion-fab-button>\r\n              <ion-icon size=\"large\" (click)=\"facebookSignIn()\" name=\"logo-facebook\"></ion-icon>\r\n            </ion-fab-button>\r\n           </ion-fab>\r\n\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>-->\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n      <!--\r\n    </form>\r\n    Log in form ends here-\r\n\r\n\r\n\r\n\r\n\r\n\r\n  <ion-item >\r\n\r\n    <hr>\r\n    <a color=\"medium\" [routerLink]=\"['/user/forgot-password']\">forgotPassword</a>\r\n  </ion-item>\r\n\r\n-->\r\n");

/***/ }),

/***/ "./src/app/modules/auth/pages/login/login-routing.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/modules/auth/pages/login/login-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "./src/app/modules/auth/pages/login/login.page.ts");




var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
var LoginPageRoutingModule = /** @class */ (function () {
    function LoginPageRoutingModule() {
    }
    LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], LoginPageRoutingModule);
    return LoginPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/auth/pages/login/login.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/modules/auth/pages/login/login.module.ts ***!
  \**********************************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/modules/auth/pages/login/login-routing.module.ts");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/modules/auth/pages/login/login.page.ts");








var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/modules/auth/pages/login/login.page.scss":
/*!**********************************************************!*\
  !*** ./src/app/modules/auth/pages/login/login.page.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".upper_part {\n  height: 52%;\n  right: 0;\n  top: 0;\n}\n\n.lower_part {\n  min-height: 44%;\n  border-radius: 75px 5px 150px 5px;\n  margin: 5px;\n  position: fixed;\n  bottom: 0px;\n}\n\nion-item {\n  background-color: none;\n}\n\n.topPadding {\n  padding-top: 10px;\n}\n\n.circle_top {\n  position: absolute;\n  top: -5%;\n  left: -5%;\n  width: 35%;\n  height: 20%;\n  border-radius: 50%;\n  background: #90DED7;\n}\n\n.bottom_link {\n  position: absolute;\n  left: 86%;\n  top: 94%;\n}\n\nion-item {\n  --ion-background-color:transparent ;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hdXRoL3BhZ2VzL2xvZ2luL0M6XFxVc2Vyc1xcTWFydmluXFxEb2N1bWVudHNcXEdpdEh1YlxcYWZyb2JcXGNsaWVudC9zcmNcXGFwcFxcbW9kdWxlc1xcYXV0aFxccGFnZXNcXGxvZ2luXFxsb2dpbi5wYWdlLnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvYXV0aC9wYWdlcy9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7QUNDSjs7QURHQTtFQUNJLGVBQUE7RUFDQSxpQ0FBQTtFQUNBLFdBQUE7RUFFQSxlQUFBO0VBQ0EsV0FBQTtBQ0RKOztBREdBO0VBQ0ksc0JBQUE7QUNBSjs7QURHQTtFQUNJLGlCQUFBO0FDQUo7O0FERUE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0FDQ0o7O0FEQ0E7RUFDSSxtQ0FBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9hdXRoL3BhZ2VzL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi51cHBlcl9wYXJ0e1xyXG4gICAgaGVpZ2h0OiA1MiU7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRvcDogMDtcclxuXHJcblxyXG59XHJcbi5sb3dlcl9wYXJ0e1xyXG4gICAgbWluLWhlaWdodDo0NCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA3NXB4IDVweCAxNTBweCA1cHg7XHJcbiAgICBtYXJnaW46IDVweDtcclxuXHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBib3R0b206MHB4XHJcbn1cclxuaW9uLWl0ZW17XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBub25lO1xyXG59XHJcblxyXG4udG9wUGFkZGluZ3tcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG59XHJcbi5jaXJjbGVfdG9we1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAtNSU7XHJcbiAgICBsZWZ0OiAtNSU7XHJcbiAgICB3aWR0aDogMzUlO1xyXG4gICAgaGVpZ2h0OiAyMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjOTBERUQ3O1xyXG5cclxufVxyXG4uYm90dG9tX2xpbmt7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiA4NiU7XHJcbiAgICB0b3A6IDk0JTtcclxufVxyXG5pb24taXRlbXtcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnRcclxufSIsIi51cHBlcl9wYXJ0IHtcbiAgaGVpZ2h0OiA1MiU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG59XG5cbi5sb3dlcl9wYXJ0IHtcbiAgbWluLWhlaWdodDogNDQlO1xuICBib3JkZXItcmFkaXVzOiA3NXB4IDVweCAxNTBweCA1cHg7XG4gIG1hcmdpbjogNXB4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMHB4O1xufVxuXG5pb24taXRlbSB7XG4gIGJhY2tncm91bmQtY29sb3I6IG5vbmU7XG59XG5cbi50b3BQYWRkaW5nIHtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59XG5cbi5jaXJjbGVfdG9wIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC01JTtcbiAgbGVmdDogLTUlO1xuICB3aWR0aDogMzUlO1xuICBoZWlnaHQ6IDIwJTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiAjOTBERUQ3O1xufVxuXG4uYm90dG9tX2xpbmsge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDg2JTtcbiAgdG9wOiA5NCU7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudCA7XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/auth/pages/login/login.page.ts":
/*!********************************************************!*\
  !*** ./src/app/modules/auth/pages/login/login.page.ts ***!
  \********************************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var src_app_core_modules_services_auth_auth_api_auth_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core-modules/services/auth/auth-api/auth-api.service */ "./src/app/core-modules/services/auth/auth-api/auth-api.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var src_app_core_modules_services_header_header_state_header_state_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core-modules/services/header/header-state/header-state.service */ "./src/app/core-modules/services/header/header-state/header-state.service.ts");
/* harmony import */ var src_app_core_modules_services_profile_profile_facade_profile_facade_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core-modules/services/profile/profile-facade/profile-facade.service */ "./src/app/core-modules/services/profile/profile-facade/profile-facade.service.ts");
/* harmony import */ var src_app_core_modules_services_menus_menu_state_menu_state_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core-modules/services/menus//menu-state/menu-state.service */ "./src/app/core-modules/services/menus/menu-state/menu-state.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");











var LoginPage = /** @class */ (function () {
    function LoginPage(toastController, formBuilder, _authService, router, headerState, userFacade, menuState) {
        this.toastController = toastController;
        this.formBuilder = formBuilder;
        this._authService = _authService;
        this.router = router;
        this.headerState = headerState;
        this.userFacade = userFacade;
        this.menuState = menuState;
        this.title = "AfroB**";
        this.login = false;
        this.goGoogle = "http://localhost:3000/api/oauth/google";
        this.emailVaule = "";
        this.Submit_load = true;
        this.passwordType = "password";
        this.passwordIcon = "eye-off";
    }
    LoginPage.prototype.createOnline$ = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["merge"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["fromEvent"])(window, "offline").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["map"])(function () { return false; })), Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["fromEvent"])(window, "online").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["map"])(function () { return true; })), new rxjs__WEBPACK_IMPORTED_MODULE_9__["Observable"](function (sub) {
            sub.next(navigator.onLine);
            sub.complete();
        }));
    };
    LoginPage.prototype.ngOnInit = function () {
        var _this = this;
        this.createOnline$().subscribe(function (isOnline) {
            if (isOnline && !!localStorage.getItem("token")) {
                _this.menuState.updateMenuStatus("user");
                _this.router.navigate(["/user/landing"]);
            }
        });
        this.loginForm = this.formBuilder.group({
            email: [
                "",
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$"),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                ]),
            ],
            password: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]],
        });
    };
    LoginPage.prototype.onSubmit = function () {
        var _this = this;
        this.return_to = this.headerState.return_route;
        this._authService.userLogin(this.loginForm.value).subscribe(function (res) {
            localStorage.setItem("token", res.token);
            _this.userFacade.loadUser();
            _this.menuState.loggedIn();
            if (res.user.storeOwner && !_this.return_to) {
                _this.menuState.updateMenuStatus("admin");
                _this.router.navigate(["/admin-store/store"]);
            }
            else if (res.user.admin && !_this.return_to) {
                _this.router.navigate(["/super/admin"]);
            }
            else if (_this.return_to) {
                _this.router.navigate([_this.return_to]);
                _this.headerState.return_route = null;
            }
            else {
                _this.menuState.updateMenuStatus("user");
                _this.router.navigate(["/user/landing"]);
            }
            _this.presentToast("SignedIn successfully ");
        }, function (error) {
            console.error(error.usText, error);
            _this.presentToast("error! wrong credentials");
            _this.Submit_load = true;
        });
    };
    LoginPage.prototype.sendToParent = function () { };
    //Check if internet connection
    LoginPage.prototype.activateLoad = function () {
        this.Submit_load = false;
    };
    LoginPage.prototype.presentToast = function (data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var toast;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: data,
                            duration: 2000,
                            position: "bottom",
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.hideShowPassword = function () {
        this.passwordType = this.passwordType === "text" ? "password" : "text";
        this.passwordIcon = this.passwordIcon === "eye-off" ? "eye" : "eye-off";
        console.log("this");
    };
    LoginPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: src_app_core_modules_services_auth_auth_api_auth_api_service__WEBPACK_IMPORTED_MODULE_4__["AuthApiService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: src_app_core_modules_services_header_header_state_header_state_service__WEBPACK_IMPORTED_MODULE_6__["HeaderStateService"] },
        { type: src_app_core_modules_services_profile_profile_facade_profile_facade_service__WEBPACK_IMPORTED_MODULE_7__["UserFacadeService"] },
        { type: src_app_core_modules_services_menus_menu_state_menu_state_service__WEBPACK_IMPORTED_MODULE_8__["MenuStateService"] }
    ]; };
    LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-login",
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/auth/pages/login/login.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./login.page.scss */ "./src/app/modules/auth/pages/login/login.page.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            src_app_core_modules_services_auth_auth_api_auth_api_service__WEBPACK_IMPORTED_MODULE_4__["AuthApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            src_app_core_modules_services_header_header_state_header_state_service__WEBPACK_IMPORTED_MODULE_6__["HeaderStateService"],
            src_app_core_modules_services_profile_profile_facade_profile_facade_service__WEBPACK_IMPORTED_MODULE_7__["UserFacadeService"],
            src_app_core_modules_services_menus_menu_state_menu_state_service__WEBPACK_IMPORTED_MODULE_8__["MenuStateService"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=src-app-modules-auth-pages-login-login-module.js.map