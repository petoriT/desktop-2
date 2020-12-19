(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-admin-store-pages-settings-settings-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin-store/pages/settings/settings.page.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin-store/pages/settings/settings.page.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header style=\"padding-bottom: 5px\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button\r\n        size=\"small\"\r\n        defaultHref=\"/admin-store/store/dashboard\"\r\n        slot=\"icon-only\"\r\n        name=\"arrow-back\"\r\n      >\r\n      </ion-back-button>\r\n    </ion-buttons>\r\n\r\n    <ion-searchbar\r\n      (ionInput)=\"searchItems($event)\"\r\n      [debounce]=\"1000\"\r\n      placeholder=\"search Settings...\"\r\n      style=\"display: block\"\r\n    ></ion-searchbar>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-segment value=\"orders\" fill=\"solid\">\r\n  <ion-segment-button size=\"small\" value=\"orders\">\r\n    <ion-label>Settings</ion-label>\r\n  </ion-segment-button>\r\n</ion-segment>\r\n\r\n<ion-content class=\"center\">\r\n  <div\r\n    style=\"margin-left: 30%; color: #03dac6\"\r\n    *ngFor=\"let p of profile.lisence | async\"\r\n  >\r\n    <ion-item>\r\n      <h6>{{p.base_package.name</h6>\r\n    </ion-item>\r\n  </div>\r\n  <ion-card>\r\n    <ion-item routerLink=\"/admin-store/store/pricing\">\r\n      <ion-icon name=\"newspaper-outline\" slot=\"start\"></ion-icon>\r\n\r\n      <ion-label>Licenses</ion-label>\r\n    </ion-item>\r\n\r\n    <ion-item routerLink=\"/store/return-policy\">\r\n      <ion-icon name=\"newspaper-outline\" slot=\"start\"></ion-icon>\r\n\r\n      <ion-label>Return policy</ion-label>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-icon name=\"people-circle-outline\" slot=\"start\"></ion-icon>\r\n\r\n      <ion-label>Payment and account</ion-label>\r\n    </ion-item>\r\n\r\n    <ion-item (click)=\"activateFreeTrial()\">\r\n      <ion-icon name=\"alarm\" slot=\"start\"></ion-icon>\r\n\r\n      <ion-label>Free Trial</ion-label>\r\n    </ion-item>\r\n\r\n\r\n \r\n  </ion-card>\r\n</ion-content>\r\n<ion-footer>\r\n  <ion-toolbar>\r\n    <ion-row>\r\n      <ion-col class=\"center\" size=\"4\"> </ion-col>\r\n      <ion-col class=\"center\" size=\"4\">\r\n        <ion-fab>\r\n          <ion-fab-button\r\n            [routerLink]=\"['/admin-store/store/dashboard']\"\r\n            size=\"small\"\r\n            color=\"white\"\r\n          >\r\n            <ion-icon color=\"primary\" name=\"home\"></ion-icon>\r\n          </ion-fab-button>\r\n        </ion-fab>\r\n      </ion-col>\r\n      <ion-col class=\"center\" size=\"4\"> </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n");

/***/ }),

/***/ "./src/app/modules/admin-store/pages/settings/settings-components/settings-components.module.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/admin-store/pages/settings/settings-components/settings-components.module.ts ***!
  \******************************************************************************************************/
/*! exports provided: SettingsComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponentsModule", function() { return SettingsComponentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");



var SettingsComponentsModule = /** @class */ (function () {
    function SettingsComponentsModule() {
    }
    SettingsComponentsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ]
        })
    ], SettingsComponentsModule);
    return SettingsComponentsModule;
}());



/***/ }),

/***/ "./src/app/modules/admin-store/pages/settings/settings-routing.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/admin-store/pages/settings/settings-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: SettingsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageRoutingModule", function() { return SettingsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings.page */ "./src/app/modules/admin-store/pages/settings/settings.page.ts");




var routes = [
    {
        path: '',
        component: _settings_page__WEBPACK_IMPORTED_MODULE_3__["SettingsPage"]
    }
];
var SettingsPageRoutingModule = /** @class */ (function () {
    function SettingsPageRoutingModule() {
    }
    SettingsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], SettingsPageRoutingModule);
    return SettingsPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/admin-store/pages/settings/settings.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/modules/admin-store/pages/settings/settings.module.ts ***!
  \***********************************************************************/
/*! exports provided: SettingsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function() { return SettingsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _settings_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./settings-routing.module */ "./src/app/modules/admin-store/pages/settings/settings-routing.module.ts");
/* harmony import */ var _settings_components_settings_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./settings-components/settings-components.module */ "./src/app/modules/admin-store/pages/settings/settings-components/settings-components.module.ts");
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./settings.page */ "./src/app/modules/admin-store/pages/settings/settings.page.ts");








var SettingsPageModule = /** @class */ (function () {
    function SettingsPageModule() {
    }
    SettingsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _settings_routing_module__WEBPACK_IMPORTED_MODULE_5__["SettingsPageRoutingModule"],
                _settings_components_settings_components_module__WEBPACK_IMPORTED_MODULE_6__["SettingsComponentsModule"],
            ],
            declarations: [_settings_page__WEBPACK_IMPORTED_MODULE_7__["SettingsPage"]]
        })
    ], SettingsPageModule);
    return SettingsPageModule;
}());



/***/ }),

/***/ "./src/app/modules/admin-store/pages/settings/settings.page.scss":
/*!***********************************************************************!*\
  !*** ./src/app/modules/admin-store/pages/settings/settings.page.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4tc3RvcmUvcGFnZXMvc2V0dGluZ3Mvc2V0dGluZ3MucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/admin-store/pages/settings/settings.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/modules/admin-store/pages/settings/settings.page.ts ***!
  \*********************************************************************/
/*! exports provided: SettingsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPage", function() { return SettingsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var src_app_core_modules_services_auth_auth_api_auth_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core-modules/services/auth/auth-api/auth-api.service */ "./src/app/core-modules/services/auth/auth-api/auth-api.service.ts");
/* harmony import */ var src_app_core_modules_services_profile_profile_facade_profile_facade_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core-modules/services/profile/profile-facade/profile-facade.service */ "./src/app/core-modules/services/profile/profile-facade/profile-facade.service.ts");





var SettingsPage = /** @class */ (function () {
    function SettingsPage(userFacade, authApi, toastController) {
        this.userFacade = userFacade;
        this.authApi = authApi;
        this.toastController = toastController;
    }
    SettingsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.userFacade.getUser$().subscribe(
        //load store profile
        function (res) {
            _this.userFacade.loadStoreProfile(res.store_id);
            _this.profile = _this.userFacade.getStoreProfile$();
            _this.profile.subscribe(function (res) {
                console.log(res);
            }, function (err) {
                console.log(err);
            });
        }, function (err) {
            console.log(err);
        });
    };
    SettingsPage.prototype.activateFreeTrial = function () {
        var _this = this;
        var store = this.userFacade.getCurrentStore();
        var today_ms = Date.now();
        var one_day_ms = 86400000;
        var half_month_ms = one_day_ms * 15;
        var trial_end_period = today_ms + half_month_ms;
        var data = {
            store_id: store._id,
            allowed_products: 5,
            end_date: trial_end_period
        };
        if (store.free_trial) {
            this.presentToast("Trial already Activated");
        }
        else {
            this.authApi.activateFreeTrial({ data: data }).subscribe(function (res) {
                _this.presentToast("15 Day Trial Activated");
            }, function (err) {
                console.log(err);
            });
        }
    };
    SettingsPage.prototype.presentToast = function (msg) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var toast;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: msg,
                            duration: 2500,
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    SettingsPage.ctorParameters = function () { return [
        { type: src_app_core_modules_services_profile_profile_facade_profile_facade_service__WEBPACK_IMPORTED_MODULE_4__["UserFacadeService"] },
        { type: src_app_core_modules_services_auth_auth_api_auth_api_service__WEBPACK_IMPORTED_MODULE_3__["AuthApiService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] }
    ]; };
    SettingsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-settings",
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./settings.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin-store/pages/settings/settings.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./settings.page.scss */ "./src/app/modules/admin-store/pages/settings/settings.page.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_core_modules_services_profile_profile_facade_profile_facade_service__WEBPACK_IMPORTED_MODULE_4__["UserFacadeService"],
            src_app_core_modules_services_auth_auth_api_auth_api_service__WEBPACK_IMPORTED_MODULE_3__["AuthApiService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]])
    ], SettingsPage);
    return SettingsPage;
}());



/***/ })

}]);
//# sourceMappingURL=modules-admin-store-pages-settings-settings-module.js.map