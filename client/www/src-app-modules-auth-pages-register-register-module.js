(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-modules-auth-pages-register-register-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/auth/pages/register/register.page.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/auth/pages/register/register.page.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div color=\"tertiary\" class=\"circle_top\">\r\n\r\n</div>\r\n\r\n<ion-fab vertical=\"top\" horizontal=\"start\">\r\n  <ion-fab-button [routerLink]=\"['']\" size=\"small\">\r\n    <ion-icon color=\"tertiary\" name=\"close\"></ion-icon>\r\n  </ion-fab-button>\r\n</ion-fab>\r\n\r\n<div class=\"upper_part\">\r\n  <ion-img  style=\"height: 430px;\" src=\"../assets/userAuthRegister.svg\"></ion-img>\r\n</div>\r\n\r\n<ion-card color=\"primary\" class=\"lower_part clearfix\">\r\n\r\n  <ion-avatar style=\"background-color: #c4c4c4;\" class=\"profile_pic\">\r\n    <ion-input\r\n      class=\"upload\"\r\n      type=\"file\"\r\n      multiple\r\n      (change)=\"handleFileInput($event)\"\r\n      placeholder=\"+\"\r\n    ></ion-input>\r\n\r\n    <!--Upload Image-->\r\n    <img *ngIf=\" !picture_uploaded\" src=\"../assets/carbon_user-filled.svg\" />\r\n    <ion-img *ngIf=\"picture_uploaded\" src=\"{{picture_uploaded[0].url}}\" ></ion-img>\r\n    \r\n    <ion-badge class=\"ion_badge\" color=\"primary\">\r\n      <ion-icon name=\"add-outline\"></ion-icon>\r\n    </ion-badge>\r\n  </ion-avatar>\r\n\r\n  <ion-card-content>\r\n    <form [formGroup]=\"registrationForm\" (ngSubmit)=\"onSubmit()\">\r\n\r\n      <ion-grid>\r\n        <ion-row>\r\n\r\n          <ion-col class=\"center \" size=\"12\">\r\n            <ion-grid class=\"ion-no-padding\">\r\n              <ion-row>\r\n                <ion-col size=\"12\">\r\n                  <ion-item color=\"primary center\">\r\n                   \r\n                    <ion-input\r\n                    placeholder=\"Email\"\r\n                    formControlName=\"email\"\r\n                    type=\"email\"\r\n                  ></ion-input>\r\n                  </ion-item>\r\n                </ion-col>\r\n                <ion-col size=\"12\" class=\"ion-no-padding\">\r\n                  <div\r\n                    *ngIf=\"registrationForm.get('email').invalid && registrationForm.get('email').touched\"\r\n                  >\r\n                    <ion-text *ngIf=\"registrationForm.get('email').errors?.required\" color=\"danger\"\r\n                      >email is required\r\n                      </ion-text\r\n                    >\r\n                  </div>\r\n                  <div\r\n                    *ngIf=\"registrationForm.get('email').invalid && registrationForm.get('email').touched\"\r\n                  >\r\n                    <ion-text\r\n                      *ngIf=\"registrationForm.get('email').errors?.maxlength\"\r\n                      color=\"danger\"\r\n                      >email must be at most 20 Characters</ion-text\r\n                    >\r\n                    <ion-text\r\n                      *ngIf=\"registrationForm.get('email').errors?.pattern&&!registrationForm.get('email').errors?.maxlength\"\r\n                      color=\"danger\"\r\n                      >email e.g user@host.com</ion-text\r\n                    >\r\n                  </div>\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-grid>\r\n          </ion-col>\r\n\r\n          <ion-col class=\"center\" size=\"12\">\r\n            <ion-grid class=\"ion-no-padding\">\r\n              <ion-row>\r\n                <ion-col size=\"12\">\r\n                  <ion-item color=\"primary center\">\r\n                      <ion-input\r\n                    \r\n                      placeholder=\"Password\"\r\n                      formControlName=\"password\"\r\n                      type=\"password\"\r\n                    ></ion-input>\r\n                  </ion-item>\r\n                </ion-col>\r\n                <ion-col size=\"12\" class=\"ion-no-padding\">\r\n                  <div\r\n                    *ngIf=\"registrationForm.get('password').invalid && registrationForm.get('password').touched\"\r\n                  >\r\n                    <ion-text\r\n                      *ngIf=\"registrationForm.get('password').errors?.required\"\r\n                      color=\"danger\"\r\n                      >Password is required</ion-text\r\n                    >\r\n                  </div>\r\n                  <div\r\n                    *ngIf=\"registrationForm.get('password').invalid && registrationForm.get('password').touched\"\r\n                  >\r\n                    <ion-text *ngIf=\"registrationForm.get('password').errors?.minlength\"  color=\"danger\"\r\n                      >Password must be at least 6 Characters</ion-text\r\n                    >\r\n                  </div>\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-grid>\r\n          </ion-col>\r\n\r\n          <ion-col class=\"center\" size=\"12\">\r\n            <ion-grid class=\"ion-no-padding\">\r\n              <ion-row>\r\n                <ion-col size=\"12\">\r\n                  <ion-item color=\"primary center\">\r\n                    <ion-input\r\n               \r\n                    [class.is-invalid]=\"registrationForm.errors?.misMatch\"\r\n                    formControlName=\"confirmPassword\"\r\n                    type=\"password\"\r\n                    placeholder=\"Confirm Password\"\r\n                  ></ion-input>\r\n                  </ion-item>\r\n                </ion-col>\r\n\r\n                <ion-col size=\"12\" class=\"ion-no-padding\">\r\n                  <ion-text *ngIf=\"registrationForm.errors?.misMatch\"  color=\"danger\"  >Passwords do not match</ion-text>\r\n                </ion-col>\r\n\r\n              </ion-row>\r\n            </ion-grid>\r\n          </ion-col>\r\n\r\n          <ion-col size=\"12\">\r\n            <ion-row>\r\n              <ion-col class=\"center\" size=\"8\">\r\n                <ion-label style=\"color: #90ded7;\">\r\n                  Want to register a Store?</ion-label>\r\n              </ion-col>\r\n              <ion-col class=\"center\" size=\"4\">\r\n                <ion-toggle (ionChange)=\"sendToggleVlaue($event)\"></ion-toggle>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-col>\r\n\r\n          <ion-col size=\"12\">\r\n            <ion-button\r\n\r\n              style=\"max-width: 80%; margin: auto;\"\r\n              size=\"small\"\r\n              expand=\"block\"\r\n              shape=\"round\"\r\n              type=\"submit\"\r\n              color=\"secondary\"\r\n            >\r\n              <div style=\"color: #018786;\" class=\"center\" *ngIf=\"Submit_load\">\r\n                Submit\r\n              </div>\r\n              <div class=\"center\" style=\"color: #018786;\" *ngIf=\"!Submit_load\">\r\n                Submitting\r\n                <ion-spinner\r\n                  style=\"padding-left: 5px;\"\r\n                  name=\"crescent\"\r\n                ></ion-spinner>\r\n              </div>\r\n            </ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n\r\n    </form>\r\n  </ion-card-content>\r\n</ion-card>\r\n\r\n<div [routerLink]=\"['/auth/user/login']\" class=\"bottom_link\">\r\n  <sub style=\"color: #018786;\">SignIn</sub>\r\n</div>\r\n\r\n<!--\r\n  <form [formGroup]=\"registrationForm\" (ngSubmit)=\"onSubmit()\">\r\n    <ion-item class=\"roundBorder\">\r\n\r\n      <ion-label position=\"floating\" >Email</ion-label>\r\n      <ion-input formControlName=\"email\" type=\"email\" ></ion-input>\r\n      <div *ngIf=\"registrationForm.get('email').invalid && registrationForm.get('email').touched\">\r\n        <ion-text *ngIf=\"registrationForm.get('email').errors?.required\" color=\"danger\"><sub>email is required</sub></ion-text>\r\n\r\n      </div>\r\n    </ion-item>\r\n    <div *ngIf=\"registrationForm.get('email').invalid && registrationForm.get('email').touched\">\r\n        <ion-text *ngIf=\"registrationForm.get('email').errors?.maxlength\" color=\"danger\"><sub>email must be at most 20 Characters</sub></ion-text>\r\n        <ion-text *ngIf=\"registrationForm.get('email').errors?.pattern&&!registrationForm.get('email').errors?.maxlength\" color=\"danger\"><sub>email e.g user@host.com</sub></ion-text>\r\n    </div>\r\n    <div class=\"space\"></div>\r\n    <ion-item class=\"roundBorder\">\r\n      <ion-label position=\"floating\" >Password</ion-label>\r\n      <ion-input formControlName=\"password\" type=\"password\" ></ion-input>\r\n      <div *ngIf=\"registrationForm.get('password').invalid && registrationForm.get('password').touched\">\r\n      <ion-text *ngIf=\"registrationForm.get('password').errors?.required\" color=\"danger\"><sub>Password is required</sub></ion-text>\r\n    </div>\r\n    </ion-item>\r\n\r\n    <div *ngIf=\"registrationForm.get('password').invalid && registrationForm.get('password').touched\">\r\n      <ion-text *ngIf=\"registrationForm.get('password').errors?.minlength\" color=\"danger\"><sub>Password must be at least 6 Characters</sub></ion-text>\r\n    </div>\r\n\r\n<div class=\"space\"></div>\r\n\r\n    <ion-item class=\"roundBorder\">\r\n      <ion-label position=\"floating\" >Password</ion-label>\r\n      <ion-input [class.is-invalid]=\"registrationForm.errors?.misMatch\" formControlName=\"confirmPassword\" type=\"password\" placeholder=\"Confirm Password\"></ion-input>\r\n      <ion-text *ngIf=\"registrationForm.errors?.misMatch\" color=\"danger\"><sub>Passwords do not match</sub></ion-text>\r\n    </ion-item>\r\n    <div class=\"space\"></div>\r\n    <ion-button [disabled]=\"!registrationForm.valid\"  expand=\"full\"  shape=\"round\" type=\"submit\" color=\"warning\" >Submit</ion-button>\r\n  </form>\r\n-->\r\n");

/***/ }),

/***/ "./src/app/modules/auth/pages/register/register-routing.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/modules/auth/pages/register/register-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: RegisterPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageRoutingModule", function() { return RegisterPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register.page */ "./src/app/modules/auth/pages/register/register.page.ts");




var routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_3__["RegisterPage"]
    }
];
var RegisterPageRoutingModule = /** @class */ (function () {
    function RegisterPageRoutingModule() {
    }
    RegisterPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], RegisterPageRoutingModule);
    return RegisterPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/auth/pages/register/register.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/modules/auth/pages/register/register.module.ts ***!
  \****************************************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _register_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register-routing.module */ "./src/app/modules/auth/pages/register/register-routing.module.ts");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register.page */ "./src/app/modules/auth/pages/register/register.page.ts");








var RegisterPageModule = /** @class */ (function () {
    function RegisterPageModule() {
    }
    RegisterPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _register_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegisterPageRoutingModule"]
            ],
            declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
        })
    ], RegisterPageModule);
    return RegisterPageModule;
}());



/***/ }),

/***/ "./src/app/modules/auth/pages/register/register.page.scss":
/*!****************************************************************!*\
  !*** ./src/app/modules/auth/pages/register/register.page.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".upper_part {\n  height: 52%;\n  right: 0;\n  top: 0;\n}\n\n.lower_part {\n  min-height: 44%;\n  border-radius: 75px 5px 150px 5px;\n  margin: 5px;\n  overflow: visible;\n  position: fixed;\n  bottom: 0px;\n}\n\n.topPadding {\n  padding-top: 10px;\n}\n\n.circle_top {\n  position: absolute;\n  top: -5%;\n  left: -5%;\n  width: 35%;\n  height: 20%;\n  border-radius: 50%;\n  background: #90ded7;\n}\n\n.bottom_link {\n  position: absolute;\n  left: 86%;\n  top: 94%;\n}\n\nion-toggle {\n  height: 22px;\n  --background: #5ba59e;\n  --background-checked: #90ded7;\n  --handle-background: #90ded7 url(/assets/No.svg) no-repeat center / contain;\n  --handle-background-checked: #018786 url(/assets/Yes.svg) no-repeat center /\n    contain;\n}\n\n.profile_pic {\n  position: absolute;\n  left: 37%;\n  top: -25%;\n  min-width: 100px;\n  min-height: 100px;\n}\n\n.ion_badge {\n  position: absolute;\n  top: 28%;\n  right: -15%;\n}\n\n.upload {\n  height: 11vh;\n  position: absolute;\n  left: 20vw;\n  width: 10vw;\n  opacity: 0;\n}\n\nion-item {\n  background-color: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hdXRoL3BhZ2VzL3JlZ2lzdGVyL0M6XFxVc2Vyc1xcTWFydmluXFxEb2N1bWVudHNcXEdpdEh1YlxcYWZyb2JcXGNsaWVudC9zcmNcXGFwcFxcbW9kdWxlc1xcYXV0aFxccGFnZXNcXHJlZ2lzdGVyXFxyZWdpc3Rlci5wYWdlLnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvYXV0aC9wYWdlcy9yZWdpc3Rlci9yZWdpc3Rlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7QUNDRjs7QURDQTtFQUNFLGVBQUE7RUFDQSxpQ0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FDRUY7O0FERUE7RUFDRSxpQkFBQTtBQ0NGOztBRENBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ0VGOztBREFBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtBQ0dGOztBRERBO0VBQ0UsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsNkJBQUE7RUFFQSwyRUFBQTtFQUNBO1dBQUE7QUNJRjs7QUREQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDSUY7O0FERkE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0FDS0Y7O0FESEE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUNNRjs7QURKQTtFQUNFLHNCQUFBO0FDT0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2F1dGgvcGFnZXMvcmVnaXN0ZXIvcmVnaXN0ZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVwcGVyX3BhcnQge1xyXG4gIGhlaWdodDogNTIlO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHRvcDogMDtcclxufVxyXG4ubG93ZXJfcGFydCB7XHJcbiAgbWluLWhlaWdodDogNDQlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDc1cHggNXB4IDE1MHB4IDVweDtcclxuICBtYXJnaW46IDVweDtcclxuICBvdmVyZmxvdzogdmlzaWJsZTtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYm90dG9tOiAwcHg7XHJcbn1cclxuXHJcblxyXG4udG9wUGFkZGluZyB7XHJcbiAgcGFkZGluZy10b3A6IDEwcHg7XHJcbn1cclxuLmNpcmNsZV90b3Age1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IC01JTtcclxuICBsZWZ0OiAtNSU7XHJcbiAgd2lkdGg6IDM1JTtcclxuICBoZWlnaHQ6IDIwJTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYmFja2dyb3VuZDogIzkwZGVkNztcclxufVxyXG4uYm90dG9tX2xpbmsge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiA4NiU7XHJcbiAgdG9wOiA5NCU7XHJcbn1cclxuaW9uLXRvZ2dsZSB7XHJcbiAgaGVpZ2h0OiAyMnB4O1xyXG4gIC0tYmFja2dyb3VuZDogIzViYTU5ZTtcclxuICAtLWJhY2tncm91bmQtY2hlY2tlZDogIzkwZGVkNztcclxuXHJcbiAgLS1oYW5kbGUtYmFja2dyb3VuZDogIzkwZGVkNyB1cmwoL2Fzc2V0cy9Oby5zdmcpIG5vLXJlcGVhdCBjZW50ZXIgLyBjb250YWluO1xyXG4gIC0taGFuZGxlLWJhY2tncm91bmQtY2hlY2tlZDogIzAxODc4NiB1cmwoL2Fzc2V0cy9ZZXMuc3ZnKSBuby1yZXBlYXQgY2VudGVyIC9cclxuICAgIGNvbnRhaW47XHJcbn1cclxuLnByb2ZpbGVfcGljIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMzclO1xyXG4gIHRvcDogLTI1JTtcclxuICBtaW4td2lkdGg6IDEwMHB4O1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xyXG59XHJcbi5pb25fYmFkZ2Uge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDI4JTtcclxuICByaWdodDogLTE1JTtcclxufVxyXG4udXBsb2FkIHtcclxuICBoZWlnaHQ6IDExdmg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDIwdnc7XHJcbiAgd2lkdGg6IDEwdnc7XHJcbiAgb3BhY2l0eTogMDtcclxufVxyXG5pb24taXRlbXtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBub25lO1xyXG59IiwiLnVwcGVyX3BhcnQge1xuICBoZWlnaHQ6IDUyJTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbn1cblxuLmxvd2VyX3BhcnQge1xuICBtaW4taGVpZ2h0OiA0NCU7XG4gIGJvcmRlci1yYWRpdXM6IDc1cHggNXB4IDE1MHB4IDVweDtcbiAgbWFyZ2luOiA1cHg7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMHB4O1xufVxuXG4udG9wUGFkZGluZyB7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuXG4uY2lyY2xlX3RvcCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtNSU7XG4gIGxlZnQ6IC01JTtcbiAgd2lkdGg6IDM1JTtcbiAgaGVpZ2h0OiAyMCU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogIzkwZGVkNztcbn1cblxuLmJvdHRvbV9saW5rIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA4NiU7XG4gIHRvcDogOTQlO1xufVxuXG5pb24tdG9nZ2xlIHtcbiAgaGVpZ2h0OiAyMnB4O1xuICAtLWJhY2tncm91bmQ6ICM1YmE1OWU7XG4gIC0tYmFja2dyb3VuZC1jaGVja2VkOiAjOTBkZWQ3O1xuICAtLWhhbmRsZS1iYWNrZ3JvdW5kOiAjOTBkZWQ3IHVybCgvYXNzZXRzL05vLnN2Zykgbm8tcmVwZWF0IGNlbnRlciAvIGNvbnRhaW47XG4gIC0taGFuZGxlLWJhY2tncm91bmQtY2hlY2tlZDogIzAxODc4NiB1cmwoL2Fzc2V0cy9ZZXMuc3ZnKSBuby1yZXBlYXQgY2VudGVyIC9cbiAgICBjb250YWluO1xufVxuXG4ucHJvZmlsZV9waWMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDM3JTtcbiAgdG9wOiAtMjUlO1xuICBtaW4td2lkdGg6IDEwMHB4O1xuICBtaW4taGVpZ2h0OiAxMDBweDtcbn1cblxuLmlvbl9iYWRnZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyOCU7XG4gIHJpZ2h0OiAtMTUlO1xufVxuXG4udXBsb2FkIHtcbiAgaGVpZ2h0OiAxMXZoO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDIwdnc7XG4gIHdpZHRoOiAxMHZ3O1xuICBvcGFjaXR5OiAwO1xufVxuXG5pb24taXRlbSB7XG4gIGJhY2tncm91bmQtY29sb3I6IG5vbmU7XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/auth/pages/register/register.page.ts":
/*!**************************************************************!*\
  !*** ./src/app/modules/auth/pages/register/register.page.ts ***!
  \**************************************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var src_app_core_modules_services_auth_auth_api_auth_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core-modules/services/auth/auth-api/auth-api.service */ "./src/app/core-modules/services/auth/auth-api/auth-api.service.ts");
/* harmony import */ var src_app_modules_auth_shared_password_validator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/modules/auth/shared/password.validator */ "./src/app/modules/auth/shared/password.validator.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var src_app_core_modules_services_products_product_api_product_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core-modules/services/products/product-api/product-api.service */ "./src/app/core-modules/services/products/product-api/product-api.service.ts");
/* harmony import */ var src_app_core_modules_services_header_header_state_header_state_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core-modules/services/header/header-state/header-state.service */ "./src/app/core-modules/services/header/header-state/header-state.service.ts");
/* harmony import */ var src_app_core_modules_services_profile_profile_facade_profile_facade_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core-modules/services/profile/profile-facade/profile-facade.service */ "./src/app/core-modules/services/profile/profile-facade/profile-facade.service.ts");
/* harmony import */ var src_app_core_modules_services_menus_menu_state_menu_state_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core-modules/services/menus/menu-state/menu-state.service */ "./src/app/core-modules/services/menus/menu-state/menu-state.service.ts");











var RegisterPage = /** @class */ (function () {
    function RegisterPage(toastController, formBuilder, _authService, router, productApi, headerState, menuState, userFacade) {
        this.toastController = toastController;
        this.formBuilder = formBuilder;
        this._authService = _authService;
        this.router = router;
        this.productApi = productApi;
        this.headerState = headerState;
        this.menuState = menuState;
        this.userFacade = userFacade;
        this.picture_spinner = false;
        this.register_store = false;
    }
    RegisterPage.prototype.ngOnInit = function () {
        this.Submit_load = true;
        //create new form-group instance
        this.registrationForm = this.formBuilder.group({
            //create instances of form-control
            email: [
                "",
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$"),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                ]),
            ],
            password: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]],
            confirmPassword: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        }, { validator: src_app_modules_auth_shared_password_validator__WEBPACK_IMPORTED_MODULE_5__["PasswordValidator"] });
    };
    RegisterPage.prototype.onSubmit = function () {
        var _this = this;
        if (this.picture_uploaded) { //this should check if the is a picture uploaded before proceeding
            if (this.submitted) {
                this.presentToast("already submitted");
            }
            else {
                this.Submit_load = false;
                this.submitted = true;
                this.presentToast("submitting...");
                var registered = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.registrationForm.value), { profileImage: this.picture_uploaded });
                //register to service and subscribe to observable
                this._authService.userRegister(registered).subscribe(function (response) {
                    localStorage.setItem("token", response.token);
                    _this.headerState.policy_header = true;
                    //set user state
                    _this.userFacade.loadUser();
                    //set menu state
                    _this.menuState.updateMenuStatus("user");
                    _this.router.navigate(["/about"], {
                        state: { data: response, rs: _this.register_store },
                    });
                    _this.Submit_load = true;
                    _this.presentToast("Profile Registered successfully ");
                }, function (error) {
                    _this.submitted = false;
                    _this.Submit_load = true;
                    _this.presentToast("fill in the form or Try a different email address ");
                    console.error("Error", error);
                });
            }
        }
        else {
            this.presentToast("Upload a picture first !!");
        }
    };
    RegisterPage.prototype.sendToParent = function () { };
    RegisterPage.prototype.sendToggleVlaue = function (data) {
        this.register_store = data.detail.checked;
    };
    RegisterPage.prototype.presentToast = function (data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var toast;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: data,
                            duration: 3000,
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
    RegisterPage.prototype.handleFileInput = function (event) {
        var _this = this;
        console.log(event);
        var file = event.target.files[0];
        if (file.type == "image/jpeg" || file.type == "image/png") {
            var _formData = new FormData();
            _formData.append("image", file);
            //save picture
            this.productApi.uploadImage(_formData).subscribe(function (res) {
                _this.picture_spinner = true;
                _this.picture_uploaded = res.data;
            });
        }
    };
    RegisterPage.prototype.presentSaleToast = function (data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var toast;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: data,
                            position: "bottom",
                            animated: true,
                            duration: 3000,
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    RegisterPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: src_app_core_modules_services_auth_auth_api_auth_api_service__WEBPACK_IMPORTED_MODULE_4__["AuthApiService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: src_app_core_modules_services_products_product_api_product_api_service__WEBPACK_IMPORTED_MODULE_7__["ProductApiService"] },
        { type: src_app_core_modules_services_header_header_state_header_state_service__WEBPACK_IMPORTED_MODULE_8__["HeaderStateService"] },
        { type: src_app_core_modules_services_menus_menu_state_menu_state_service__WEBPACK_IMPORTED_MODULE_10__["MenuStateService"] },
        { type: src_app_core_modules_services_profile_profile_facade_profile_facade_service__WEBPACK_IMPORTED_MODULE_9__["UserFacadeService"] }
    ]; };
    RegisterPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-register",
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./register.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/auth/pages/register/register.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./register.page.scss */ "./src/app/modules/auth/pages/register/register.page.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            src_app_core_modules_services_auth_auth_api_auth_api_service__WEBPACK_IMPORTED_MODULE_4__["AuthApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            src_app_core_modules_services_products_product_api_product_api_service__WEBPACK_IMPORTED_MODULE_7__["ProductApiService"],
            src_app_core_modules_services_header_header_state_header_state_service__WEBPACK_IMPORTED_MODULE_8__["HeaderStateService"],
            src_app_core_modules_services_menus_menu_state_menu_state_service__WEBPACK_IMPORTED_MODULE_10__["MenuStateService"],
            src_app_core_modules_services_profile_profile_facade_profile_facade_service__WEBPACK_IMPORTED_MODULE_9__["UserFacadeService"]])
    ], RegisterPage);
    return RegisterPage;
}());



/***/ })

}]);
//# sourceMappingURL=src-app-modules-auth-pages-register-register-module.js.map