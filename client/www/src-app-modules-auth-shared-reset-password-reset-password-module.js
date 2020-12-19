(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-modules-auth-shared-reset-password-reset-password-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/auth/shared/reset-password/reset-password.page.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/auth/shared/reset-password/reset-password.page.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>reset-password</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <form [formGroup]=\"resetPasswordForm\" (ngSubmit)=\"onSubmit()\">\r\n    <ion-item>\r\n      <ion-input formControlName=\"id\" type=\"hidden\"></ion-input>\r\n      <ion-input formControlName=\"token\" type=\"hidden\"></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-input formControlName=\"password\" type=\"password\" placeholder=\"Password\"></ion-input>\r\n      <div *ngIf=\"resetPasswordForm.get('password').invalid && resetPasswordForm.get('password').touched\">\r\n        <ion-text *ngIf=\"resetPasswordForm.get('password').errors?.required\" color=\"danger\"><sub>Password is required</sub></ion-text>\r\n        <ion-text *ngIf=\"resetPasswordForm.get('password').errors?.minlength\" color=\"danger\"><sub>Password must be at least 6 Characters</sub></ion-text>\r\n      </div>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-input [class.is-invalid]=\"resetPasswordForm.errors?.misMatch\" formControlName=\"confirmPassword\" type=\"password\" placeholder=\"Confirm Password\"></ion-input>\r\n      <ion-text *ngIf=\"resetPasswordForm.errors?.misMatch\" color=\"danger\"><sub>Passwords do not match</sub></ion-text>\r\n    </ion-item>\r\n    <ion-button [disabled]=\"!resetPasswordForm.valid\"  type=\"submit\" color=\"primary\" >Submit</ion-button>\r\n  </form>\r\n  {{resetPasswordForm.value | json}}\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/modules/auth/shared/reset-password/reset-password.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/auth/shared/reset-password/reset-password.module.ts ***!
  \*****************************************************************************/
/*! exports provided: ResetPasswordPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordPageModule", function() { return ResetPasswordPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _reset_password_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reset-password.page */ "./src/app/modules/auth/shared/reset-password/reset-password.page.ts");








var routes = [
    {
        path: '',
        component: _reset_password_page__WEBPACK_IMPORTED_MODULE_6__["ResetPasswordPage"]
    }
];
var ResetPasswordPageModule = /** @class */ (function () {
    function ResetPasswordPageModule() {
    }
    ResetPasswordPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            ],
            declarations: [_reset_password_page__WEBPACK_IMPORTED_MODULE_6__["ResetPasswordPage"]]
        })
    ], ResetPasswordPageModule);
    return ResetPasswordPageModule;
}());



/***/ }),

/***/ "./src/app/modules/auth/shared/reset-password/reset-password.page.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/auth/shared/reset-password/reset-password.page.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYXV0aC9zaGFyZWQvcmVzZXQtcGFzc3dvcmQvcmVzZXQtcGFzc3dvcmQucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/auth/shared/reset-password/reset-password.page.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/auth/shared/reset-password/reset-password.page.ts ***!
  \***************************************************************************/
/*! exports provided: ResetPasswordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordPage", function() { return ResetPasswordPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var src_app_core_modules_services_auth_auth_api_auth_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core-modules/services/auth/auth-api/auth-api.service */ "./src/app/core-modules/services/auth/auth-api/auth-api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _shared_password_validator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/password.validator */ "./src/app/modules/auth/shared/password.validator.ts");






var ResetPasswordPage = /** @class */ (function () {
    function ResetPasswordPage(_authService, router, activatedRoute, formBuilder) {
        this._authService = _authService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.formBuilder = formBuilder;
    }
    ResetPasswordPage.prototype.ngOnInit = function () {
        var _this = this;
        //get params from backend query string
        this.activatedRoute.queryParams.subscribe(function (params) {
            _this.initId = params['id'];
            _this.initToken = params['token'];
        });
        //create new form-group instance
        this.resetPasswordForm = this.formBuilder.group({
            //create instances of form-control
            id: [this.initId, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            token: [this.initToken, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(6)]],
            confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        }, { validator: _shared_password_validator__WEBPACK_IMPORTED_MODULE_5__["PasswordValidator"] });
    };
    ResetPasswordPage.prototype.onSubmit = function () {
        var _this = this;
        //register to service and subscribe to observable
        this._authService.resetPassword(this.resetPasswordForm.value).subscribe(function (response) {
            console.log(response);
            _this.router.navigate(['/user/login'], { state: { data: response.message } });
        }, function (error) { return console.error('Error', error); });
    };
    ResetPasswordPage.ctorParameters = function () { return [
        { type: src_app_core_modules_services_auth_auth_api_auth_api_service__WEBPACK_IMPORTED_MODULE_2__["AuthApiService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
    ]; };
    ResetPasswordPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-reset-password',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./reset-password.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/auth/shared/reset-password/reset-password.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./reset-password.page.scss */ "./src/app/modules/auth/shared/reset-password/reset-password.page.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_core_modules_services_auth_auth_api_auth_api_service__WEBPACK_IMPORTED_MODULE_2__["AuthApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], ResetPasswordPage);
    return ResetPasswordPage;
}());



/***/ })

}]);
//# sourceMappingURL=src-app-modules-auth-shared-reset-password-reset-password-module.js.map