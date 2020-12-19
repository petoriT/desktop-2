(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-modules-auth-shared-forgot-password-forgot-password-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/auth/shared/forgot-password/forgot-password.page.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/auth/shared/forgot-password/forgot-password.page.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>forgotPassword</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <form [formGroup]=\"resetPasswordForm\" (ngSubmit)=\"onSubmit()\">\r\n    <ion-item>\r\n      <ion-input formControlName=\"email\" type=\"email\" placeholder=\"Enter Your Email Address\"></ion-input>\r\n      <div *ngIf=\"resetPasswordForm.get('email').invalid && resetPasswordForm.get('email').touched\">\r\n        <ion-text *ngIf=\"resetPasswordForm.get('email').errors?.required\" color=\"danger\"><sub>email is required</sub></ion-text>\r\n        <ion-text *ngIf=\"resetPasswordForm.get('email').errors?.maxlength\" color=\"danger\"><sub>email must be at most 20 Characters</sub></ion-text>\r\n        <ion-text *ngIf=\"resetPasswordForm.get('email').errors?.pattern\" color=\"danger\"><sub>email e.g user@host.com</sub></ion-text>\r\n      </div>\r\n    </ion-item>\r\n    <ion-button [disabled]=\"!resetPasswordForm.valid\"  type=\"submit\" color=\"tertiary\" >Submit</ion-button>\r\n  </form>\r\n  <ion-item>\r\n    <a color=\"medium\" [routerLink]=\"['']\">Go Back</a>\r\n  </ion-item>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/modules/auth/shared/forgot-password/forgot-password.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/auth/shared/forgot-password/forgot-password.module.ts ***!
  \*******************************************************************************/
/*! exports provided: ForgotPasswordPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordPageModule", function() { return ForgotPasswordPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _forgot_password_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forgot-password.page */ "./src/app/modules/auth/shared/forgot-password/forgot-password.page.ts");







//Import Specific sub modules and include

var routes = [
    {
        path: '',
        component: _forgot_password_page__WEBPACK_IMPORTED_MODULE_6__["ForgotPasswordPage"]
    }
];
var ForgotPasswordPageModule = /** @class */ (function () {
    function ForgotPasswordPageModule() {
    }
    ForgotPasswordPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            ],
            declarations: [_forgot_password_page__WEBPACK_IMPORTED_MODULE_6__["ForgotPasswordPage"]]
        })
    ], ForgotPasswordPageModule);
    return ForgotPasswordPageModule;
}());



/***/ }),

/***/ "./src/app/modules/auth/shared/forgot-password/forgot-password.page.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/auth/shared/forgot-password/forgot-password.page.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYXV0aC9zaGFyZWQvZm9yZ290LXBhc3N3b3JkL2ZvcmdvdC1wYXNzd29yZC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/auth/shared/forgot-password/forgot-password.page.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/auth/shared/forgot-password/forgot-password.page.ts ***!
  \*****************************************************************************/
/*! exports provided: ForgotPasswordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordPage", function() { return ForgotPasswordPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var src_app_core_modules_services_auth_auth_api_auth_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core-modules/services/auth/auth-api/auth-api.service */ "./src/app/core-modules/services/auth/auth-api/auth-api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");





var ForgotPasswordPage = /** @class */ (function () {
    function ForgotPasswordPage(formBuilder, _authService, router) {
        this.formBuilder = formBuilder;
        this._authService = _authService;
        this.router = router;
    }
    ForgotPasswordPage.prototype.ngOnInit = function () {
        this.resetPasswordForm = this.formBuilder.group({
            email: ['',
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$'),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
            ]
        });
    };
    ForgotPasswordPage.prototype.onSubmit = function () {
        var _this = this;
        this._authService.forgotPassword(this.resetPasswordForm.value).subscribe(function (res) {
            _this.router.navigate(['/user/login'], { state: { data: res.message } });
        }, function (error) { return console.error('Error: ', error); });
    };
    ForgotPasswordPage.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: src_app_core_modules_services_auth_auth_api_auth_api_service__WEBPACK_IMPORTED_MODULE_3__["AuthApiService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    ForgotPasswordPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-forgot-password',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./forgot-password.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/auth/shared/forgot-password/forgot-password.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./forgot-password.page.scss */ "./src/app/modules/auth/shared/forgot-password/forgot-password.page.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            src_app_core_modules_services_auth_auth_api_auth_api_service__WEBPACK_IMPORTED_MODULE_3__["AuthApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], ForgotPasswordPage);
    return ForgotPasswordPage;
}());



/***/ })

}]);
//# sourceMappingURL=src-app-modules-auth-shared-forgot-password-forgot-password-module.js.map