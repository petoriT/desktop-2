(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["update-info-update-info-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/auth/pages/welcome/update-info/update-info.page.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/auth/pages/welcome/update-info/update-info.page.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content >\r\n  <ion-fab vertical=\"top\" horizontal=\"start\">\r\n   <ion-fab-button size=\"small\">\r\n    <ion-back-button  defaultHref=\"user/landing/home\" ></ion-back-button>\r\n   </ion-fab-button>\r\n   \r\n  </ion-fab>\r\n\r\n  <ion-slides style=\"height: 100vh;\" #UpdateinfoSlides pager=\"true\">\r\n    <ion-slide >\r\n      <form [formGroup]=\"profileFormSlide1\">\r\n        <ion-grid>\r\n          <ion-row>\r\n            <ion-col size=\"12\">\r\n              <img style=\"height:30vh\" src=\"../assets/userAuthUserUpdateInfo2.svg\" />\r\n            </ion-col>\r\n            <ion-col size=\"12\" style=\"padding-bottom: 48px;\">\r\n              <ion-title>\r\n                <h1 style=\"text-align: center\">Basic User Info</h1>\r\n              </ion-title>\r\n              <ion-text style=\"text-align: center\">\r\n                <sub>\r\n                  Key in your basic information for tracking and reference purposes \r\n                </sub>\r\n              </ion-text>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n        <ion-grid>\r\n          <ion-row>\r\n            <ion-col size=\"6\">\r\n              <ion-item >\r\n                <ion-label position=\"floating\">\r\n                  First Name\r\n                </ion-label>\r\n                <ion-input    \r\n                type=\"text\"\r\n                 formControlName=\"first_name\"\r\n                 \r\n               ></ion-input>\r\n              </ion-item>\r\n        \r\n            </ion-col>\r\n            <ion-col size=\"6\">\r\n              <ion-item >\r\n                <ion-label position=\"floating\">\r\n                  Last Name\r\n                </ion-label>\r\n              <ion-input\r\n                type=\"text\"\r\n                formControlName=\"last_name\"\r\n              ></ion-input>\r\n              </ion-item>\r\n            </ion-col>\r\n         \r\n          </ion-row>\r\n        </ion-grid>\r\n      </form>\r\n    </ion-slide>\r\n   \r\n  \r\n    <ion-slide >\r\n      <form [formGroup]=\"profileForm\" (ngSubmit)=\"onSubmit()\">\r\n        <ion-grid>\r\n          <ion-row>\r\n            <ion-col size=\"12\">\r\n              <div formGroupName=\"address\">\r\n                <ion-grid>\r\n                  <ion-row>\r\n                    <ion-col size=\"12\" style=\"padding-bottom: 48px;\">\r\n                      <ion-title>\r\n                        <h1 style=\"text-align: center\">User Address</h1>\r\n                      </ion-title>\r\n                      <ion-text style=\"text-align: center\">\r\n                        <sub>\r\n                          key in address for deliveries and for references \r\n                        </sub>\r\n                      </ion-text>\r\n                    </ion-col>\r\n\r\n                  \r\n                    <ion-col size=\"5\">\r\n                      <ion-item >\r\n                        <ion-label position=\"floating\">\r\n                          House No\r\n                        </ion-label>\r\n                      <ion-input\r\n                        type=\"text\"\r\n                        formControlName=\"unit\"\r\n                      ></ion-input>\r\n                      </ion-item>\r\n                    </ion-col>\r\n                    <ion-col size=\"7\">\r\n                      <ion-item >\r\n                        <ion-label position=\"floating\">\r\n                          Street Name\r\n                        </ion-label>\r\n                      <ion-input\r\n                 \r\n                        type=\"text\"\r\n                        formControlName=\"street_name\"\r\n                      \r\n                      ></ion-input>\r\n                      </ion-item>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                  <ion-row>\r\n                    <ion-col size=\"12\">\r\n                      <ion-item >\r\n                        <ion-label position=\"floating\">\r\n                          Complex(optional)\r\n                        </ion-label>\r\n                      <ion-input\r\n                        type=\"text\"\r\n                        formControlName=\"complex\"\r\n                      ></ion-input>\r\n                      </ion-item>\r\n                    </ion-col>\r\n                    <ion-col size=\"6\">\r\n                      <ion-item >\r\n                        <ion-label position=\"floating\">\r\n                          Suburb\r\n                        </ion-label>\r\n                      <ion-input\r\n                 \r\n                        type=\"text\"\r\n                        formControlName=\"suburb\"\r\n                      ></ion-input>\r\n                      </ion-item>\r\n                    </ion-col>\r\n\r\n                    <ion-col soze=\"6\">\r\n                      <ion-item >\r\n                        <ion-label position=\"floating\">\r\n                         City\r\n                        </ion-label>\r\n                      <ion-input\r\n                    \r\n                        type=\"text\"\r\n                        formControlName=\"city\"\r\n                      ></ion-input>\r\n                      </ion-item>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                  <ion-row>\r\n                    <ion-col size=\"8\">\r\n                      <ion-item >\r\n                        <ion-label position=\"floating\">\r\n                          Province\r\n                        </ion-label>\r\n                      <ion-input\r\n                        type=\"text\"\r\n                        formControlName=\"province\"\r\n                      ></ion-input>\r\n                      </ion-item>\r\n                    </ion-col>\r\n                    <ion-col size=\"4\">\r\n                      <ion-item >\r\n                        <ion-label position=\"floating\">\r\n                        Code\r\n                        </ion-label>\r\n                      <ion-input\r\n                \r\n                        type=\"text\"\r\n                        formControlName=\"zip\"\r\n                      ></ion-input>\r\n                      </ion-item>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                  <ion-row>\r\n                    <ion-col size=\"12\">\r\n                      <ion-button shape=\"round\" type=\"submit\" [disabled]=\"!profileForm.valid\">\r\n                        Submit\r\n                      </ion-button>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </ion-grid>\r\n              </div>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </form>\r\n\r\n      <!--<p>\r\n      Form Status: {{ profileForm.status }} Form Value: {{ profileForm.value |\r\n      json }}\r\n    </p>-->\r\n    </ion-slide>\r\n  </ion-slides>\r\n  <ion-fab *ngIf=\"showNext \" vertical=\"bottom\" horizontal=\"end\">\r\n    <ion-button\r\n      shape=\"round\"\r\n      class=\"ion-padding-end\"\r\n      style=\"color: #000000\"\r\n      size=\"small\"\r\n      color=\"white\"\r\n      (click)=\"next()\"\r\n    >\r\n      next\r\n    </ion-button>\r\n  </ion-fab>\r\n  <ion-fab *ngIf=\"showBack \" horizontal=\"start\" vertical=\"bottom\">\r\n    <ion-button\r\n      shape=\"round\"\r\n      class=\"ion-padding-start\"\r\n      style=\"color: #000000\"\r\n      size=\"small\"\r\n      color=\"white\"\r\n      (click)=\" slidesBack()\"\r\n    >\r\n      back\r\n    </ion-button>\r\n  </ion-fab>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/modules/auth/pages/welcome/update-info/update-info-routing.module.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/auth/pages/welcome/update-info/update-info-routing.module.ts ***!
  \**************************************************************************************/
/*! exports provided: UpdateInfoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateInfoPageRoutingModule", function() { return UpdateInfoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _update_info_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./update-info.page */ "./src/app/modules/auth/pages/welcome/update-info/update-info.page.ts");




var routes = [
    {
        path: '',
        component: _update_info_page__WEBPACK_IMPORTED_MODULE_3__["UpdateInfoPage"]
    }
];
var UpdateInfoPageRoutingModule = /** @class */ (function () {
    function UpdateInfoPageRoutingModule() {
    }
    UpdateInfoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], UpdateInfoPageRoutingModule);
    return UpdateInfoPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/auth/pages/welcome/update-info/update-info.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/modules/auth/pages/welcome/update-info/update-info.module.ts ***!
  \******************************************************************************/
/*! exports provided: UpdateInfoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateInfoPageModule", function() { return UpdateInfoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _update_info_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./update-info-routing.module */ "./src/app/modules/auth/pages/welcome/update-info/update-info-routing.module.ts");
/* harmony import */ var _update_info_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./update-info.page */ "./src/app/modules/auth/pages/welcome/update-info/update-info.page.ts");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/expansion.es5.js");









var routes = [
    {
        path: "",
        component: _update_info_page__WEBPACK_IMPORTED_MODULE_7__["UpdateInfoPage"],
    },
];
var UpdateInfoPageModule = /** @class */ (function () {
    function UpdateInfoPageModule() {
    }
    UpdateInfoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _update_info_routing_module__WEBPACK_IMPORTED_MODULE_6__["UpdateInfoPageRoutingModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatExpansionModule"]
            ],
            declarations: [_update_info_page__WEBPACK_IMPORTED_MODULE_7__["UpdateInfoPage"]],
        })
    ], UpdateInfoPageModule);
    return UpdateInfoPageModule;
}());



/***/ }),

/***/ "./src/app/modules/auth/pages/welcome/update-info/update-info.page.scss":
/*!******************************************************************************!*\
  !*** ./src/app/modules/auth/pages/welcome/update-info/update-info.page.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYXV0aC9wYWdlcy93ZWxjb21lL3VwZGF0ZS1pbmZvL3VwZGF0ZS1pbmZvLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/auth/pages/welcome/update-info/update-info.page.ts":
/*!****************************************************************************!*\
  !*** ./src/app/modules/auth/pages/welcome/update-info/update-info.page.ts ***!
  \****************************************************************************/
/*! exports provided: UpdateInfoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateInfoPage", function() { return UpdateInfoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var src_app_core_modules_services_auth_auth_api_auth_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core-modules/services/auth/auth-api/auth-api.service */ "./src/app/core-modules/services/auth/auth-api/auth-api.service.ts");
/* harmony import */ var src_app_core_modules_services_header_header_state_header_state_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core-modules/services/header/header-state/header-state.service */ "./src/app/core-modules/services/header/header-state/header-state.service.ts");
/* harmony import */ var src_app_core_modules_services_profile_profile_facade_profile_facade_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core-modules/services/profile/profile-facade/profile-facade.service */ "./src/app/core-modules/services/profile/profile-facade/profile-facade.service.ts");









var UpdateInfoPage = /** @class */ (function () {
    function UpdateInfoPage(toastController, router, authApi, headerState, userFacade) {
        this.toastController = toastController;
        this.router = router;
        this.authApi = authApi;
        this.headerState = headerState;
        this.userFacade = userFacade;
        this.profileFormSlide1 = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            first_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](""),
            last_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](""),
        });
        this.profileForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                unit: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](""),
                street_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](""),
                complex: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](""),
                suburb: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](""),
                city: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](""),
                province: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](""),
                zip: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](""),
            }),
        });
        this.showNext = true;
        this.showBack = false;
    }
    UpdateInfoPage.prototype.presentSaleToast = function (data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var toast;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: data,
                            position: "bottom",
                            animated: true,
                            duration: 2000,
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    UpdateInfoPage.prototype.ngOnInit = function () { };
    UpdateInfoPage.prototype.onSubmit = function () {
        var _this = this;
        this.return_to = this.headerState.return_route;
        console.log(this.profileForm.value, this.profileFormSlide1.value);
        var new_form = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.profileForm.value), this.profileFormSlide1.value);
        this.authApi.userUpdate(new_form).subscribe(function (res) {
            _this.userFacade.loadUser();
            _this.presentSaleToast("Info Updated and ready to get started");
            setTimeout(function () {
                if (_this.return_to) {
                    _this.router.navigate([_this.return_to]);
                }
                else {
                    _this.router.navigate(["/user/user_profile"]);
                }
            }, 1500);
        }, function (err) {
            console.log(err);
            _this.presentSaleToast("Error!");
        });
    };
    UpdateInfoPage.prototype.next = function () {
        this.slides.slideNext();
        this.showNext = false;
        this.showBack = true;
    };
    UpdateInfoPage.prototype.slidesBack = function () {
        this.showNext = true;
        this.showBack = false;
        this.slides.slidePrev();
    };
    UpdateInfoPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: src_app_core_modules_services_auth_auth_api_auth_api_service__WEBPACK_IMPORTED_MODULE_5__["AuthApiService"] },
        { type: src_app_core_modules_services_header_header_state_header_state_service__WEBPACK_IMPORTED_MODULE_6__["HeaderStateService"] },
        { type: src_app_core_modules_services_profile_profile_facade_profile_facade_service__WEBPACK_IMPORTED_MODULE_7__["UserFacadeService"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("UpdateinfoSlides", { static: true }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonSlides"])
    ], UpdateInfoPage.prototype, "slides", void 0);
    UpdateInfoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-update-info",
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./update-info.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/auth/pages/welcome/update-info/update-info.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./update-info.page.scss */ "./src/app/modules/auth/pages/welcome/update-info/update-info.page.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            src_app_core_modules_services_auth_auth_api_auth_api_service__WEBPACK_IMPORTED_MODULE_5__["AuthApiService"],
            src_app_core_modules_services_header_header_state_header_state_service__WEBPACK_IMPORTED_MODULE_6__["HeaderStateService"],
            src_app_core_modules_services_profile_profile_facade_profile_facade_service__WEBPACK_IMPORTED_MODULE_7__["UserFacadeService"]])
    ], UpdateInfoPage);
    return UpdateInfoPage;
}());



/***/ })

}]);
//# sourceMappingURL=update-info-update-info-module.js.map