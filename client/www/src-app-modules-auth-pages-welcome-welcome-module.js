(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-modules-auth-pages-welcome-welcome-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/auth/pages/welcome/welcome.page.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/auth/pages/welcome/welcome.page.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n<ion-content>\r\n <div style=\"background-color:#90DED7 ;height: 100%;\">\r\n  <div color=\"tertiary\" class=\"circle_top\">\r\n\r\n\r\n  </div>\r\n  <ion-img style=\"height:20px\" class=\"log\" src=\"../assets/CartalistLogoPirmaryAlt.svg\"></ion-img>\r\n   <div class=\"upper_part center\">\r\n    <ion-img style=\"height:400px\" src=\"../assets/userFirsttimeWelcome.svg\"></ion-img>\r\n    </div>\r\n    <div class=\"center pops\"  *ngIf=\"!register_store\">  <ion-button  expand=\"block\" shape=\"round\"  (click)=\"next()\">Get Started </ion-button> </div>\r\n    <div class=\"center pops\"    *ngIf=\"register_store\"><ion-button (click)=\"storeRegister()\">Get Started</ion-button></div>\r\n\r\n\r\n\r\n  </div>\r\n\r\n</ion-content>\r\n\r\n\r\n<!--\r\n  <ion-item>\r\n    <ion-text *ngIf=\"registeredUserData\" color=\"success\"><sub>{{registeredUserData.message | json}}</sub></ion-text>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-text color=\"medium\"><sub>Normal User</sub></ion-text>\r\n    <hr>\r\n    <ion-button (click)=\"next()\">Next</ion-button>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-text color=\"danger\"><sub>Register Your store</sub></ion-text>\r\n    <hr>\r\n    <ion-button (click)=\"storeRegister()\">Store</ion-button>\r\n  </ion-item>\r\n  {{register_store}}-->\r\n");

/***/ }),

/***/ "./src/app/modules/auth/pages/welcome/welcome-routing.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/modules/auth/pages/welcome/welcome-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: WelcomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomePageRoutingModule", function() { return WelcomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _welcome_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./welcome.page */ "./src/app/modules/auth/pages/welcome/welcome.page.ts");




var routes = [
    {
        path: '',
        component: _welcome_page__WEBPACK_IMPORTED_MODULE_3__["WelcomePage"]
    },
    {
        path: 'update-info',
        loadChildren: function () { return __webpack_require__.e(/*! import() | update-info-update-info-module */ "update-info-update-info-module").then(__webpack_require__.bind(null, /*! ./update-info/update-info.module */ "./src/app/modules/auth/pages/welcome/update-info/update-info.module.ts")).then(function (m) { return m.UpdateInfoPageModule; }); }
    }
];
var WelcomePageRoutingModule = /** @class */ (function () {
    function WelcomePageRoutingModule() {
    }
    WelcomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], WelcomePageRoutingModule);
    return WelcomePageRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/auth/pages/welcome/welcome.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/modules/auth/pages/welcome/welcome.module.ts ***!
  \**************************************************************/
/*! exports provided: WelcomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomePageModule", function() { return WelcomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _welcome_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./welcome-routing.module */ "./src/app/modules/auth/pages/welcome/welcome-routing.module.ts");
/* harmony import */ var _welcome_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./welcome.page */ "./src/app/modules/auth/pages/welcome/welcome.page.ts");







var WelcomePageModule = /** @class */ (function () {
    function WelcomePageModule() {
    }
    WelcomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _welcome_routing_module__WEBPACK_IMPORTED_MODULE_5__["WelcomePageRoutingModule"]
            ],
            declarations: [_welcome_page__WEBPACK_IMPORTED_MODULE_6__["WelcomePage"]]
        })
    ], WelcomePageModule);
    return WelcomePageModule;
}());



/***/ }),

/***/ "./src/app/modules/auth/pages/welcome/welcome.page.scss":
/*!**************************************************************!*\
  !*** ./src/app/modules/auth/pages/welcome/welcome.page.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".circle_top {\n  position: absolute;\n  top: -5%;\n  left: -5%;\n  width: 35%;\n  height: 20%;\n  border-radius: 50%;\n  background: #FFD700;\n}\n\n.upper_part {\n  top: 20%;\n  position: relative;\n}\n\n.log {\n  display: inline;\n  position: absolute;\n  top: -44%;\n  left: -9%;\n}\n\n.pops {\n  top: 10%;\n  position: relative;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hdXRoL3BhZ2VzL3dlbGNvbWUvQzpcXFVzZXJzXFxNYXJ2aW5cXERvY3VtZW50c1xcR2l0SHViXFxhZnJvYlxcY2xpZW50L3NyY1xcYXBwXFxtb2R1bGVzXFxhdXRoXFxwYWdlc1xcd2VsY29tZVxcd2VsY29tZS5wYWdlLnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvYXV0aC9wYWdlcy93ZWxjb21lL3dlbGNvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREdBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0FDQUE7O0FERUE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtBQ0NKOztBREVBO0VBQ0ksUUFBQTtFQUNBLGtCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2F1dGgvcGFnZXMvd2VsY29tZS93ZWxjb21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaXJjbGVfdG9we1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAtNSU7XHJcbiAgICBsZWZ0OiAtNSU7XHJcbiAgICB3aWR0aDogMzUlO1xyXG4gICAgaGVpZ2h0OiAyMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkZENzAwO1xyXG5cclxuXHJcbn1cclxuLnVwcGVyX3BhcnR7XHJcbnRvcDogMjAlO1xyXG5wb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLmxvZ3tcclxuICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogLTQ0JTtcclxuICAgIGxlZnQ6IC05JTtcclxuXHJcbn1cclxuLnBvcHN7XHJcbiAgICB0b3A6IDEwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4iLCIuY2lyY2xlX3RvcCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtNSU7XG4gIGxlZnQ6IC01JTtcbiAgd2lkdGg6IDM1JTtcbiAgaGVpZ2h0OiAyMCU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogI0ZGRDcwMDtcbn1cblxuLnVwcGVyX3BhcnQge1xuICB0b3A6IDIwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ubG9nIHtcbiAgZGlzcGxheTogaW5saW5lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTQ0JTtcbiAgbGVmdDogLTklO1xufVxuXG4ucG9wcyB7XG4gIHRvcDogMTAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/auth/pages/welcome/welcome.page.ts":
/*!************************************************************!*\
  !*** ./src/app/modules/auth/pages/welcome/welcome.page.ts ***!
  \************************************************************/
/*! exports provided: WelcomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomePage", function() { return WelcomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var src_app_core_modules_services_header_header_state_header_state_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core-modules/services/header/header-state/header-state.service */ "./src/app/core-modules/services/header/header-state/header-state.service.ts");





var WelcomePage = /** @class */ (function () {
    function WelcomePage(modalController, router, headerState) {
        this.modalController = modalController;
        this.router = router;
        this.headerState = headerState;
    }
    WelcomePage.prototype.ngOnInit = function () {
        this.registeredUserData = history.state.data;
        this.register_store = history.state.rs;
    };
    WelcomePage.prototype.next = function () {
        this.router.navigate(["/user/landing/home"]);
        this.headerState.setReturnRoute("none");
    };
    WelcomePage.prototype.storeRegister = function () {
        this.router.navigate(["/auth/user/store-register"]);
        this.headerState.setReturnRoute("none");
    };
    WelcomePage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: src_app_core_modules_services_header_header_state_header_state_service__WEBPACK_IMPORTED_MODULE_4__["HeaderStateService"] }
    ]; };
    WelcomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-welcome",
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./welcome.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/auth/pages/welcome/welcome.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./welcome.page.scss */ "./src/app/modules/auth/pages/welcome/welcome.page.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            src_app_core_modules_services_header_header_state_header_state_service__WEBPACK_IMPORTED_MODULE_4__["HeaderStateService"]])
    ], WelcomePage);
    return WelcomePage;
}());



/***/ })

}]);
//# sourceMappingURL=src-app-modules-auth-pages-welcome-welcome-module.js.map