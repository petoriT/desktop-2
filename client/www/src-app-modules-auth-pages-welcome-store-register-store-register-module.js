(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-modules-auth-pages-welcome-store-register-store-register-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/auth/pages/welcome/store-register/store-register.page.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/auth/pages/welcome/store-register/store-register.page.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n  <ion-fab *ngIf=\"back && !backTouser\" vertical=\"top\" horizontal=\"start\">\r\n    <ion-fab-button size=\"small\" (click)=\"onClickBack()\">\r\n      <ion-icon name=\"close-outline\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n  <ion-fab *ngIf=\"backTouser && !back\" vertical=\"top\" horizontal=\"start\">\r\n    <ion-fab-button size=\"small\" (click)=\"backToUser()\">\r\n      <ion-icon name=\"close-outline\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n\r\n  <ion-slides\r\n    (ionSlideDidChange)=\"slideChange($event)\"\r\n    #registerStore\r\n    pager=\"true\"\r\n  >\r\n    <ion-slide class=\"slide1\">\r\n      <ion-grid>\r\n        <form [formGroup]=\"companyRegistrationForm\">\r\n          <ion-row>\r\n            <ion-col size=\"12\">\r\n              <ion-title>\r\n                <h1>Store Registration</h1>\r\n              </ion-title>\r\n              <ion-text><sub> Create a store profile </sub></ion-text>\r\n            </ion-col>\r\n\r\n            <ion-col size=\"12\">\r\n              <ion-img\r\n                src=\"../assets/userFirsttimeStoreRegisterSlide1.svg\"\r\n              ></ion-img>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col size=\"6\">\r\n              <ion-item>\r\n                <ion-label position=\"floating \"> Store name: </ion-label>\r\n                <ion-input formControlName=\"name\" type=\"text\"></ion-input>\r\n              </ion-item>\r\n\r\n              <div\r\n                *ngIf=\"companyRegistrationForm.get('name').invalid && companyRegistrationForm.get('name').touched\"\r\n              >\r\n                <ion-text\r\n                  *ngIf=\"companyRegistrationForm.get('name').errors?.required\"\r\n                  color=\"danger\"\r\n                  ><sub>Store name is required</sub></ion-text\r\n                >\r\n                <ion-text\r\n                  *ngIf=\"companyRegistrationForm.get('name').errors?.minlength\"\r\n                  color=\"danger\"\r\n                  ><sub>Store name must be at least 3 Characters</sub></ion-text\r\n                >\r\n              </div>\r\n            </ion-col>\r\n            <ion-col size=\"6\">\r\n              <ion-item>\r\n                <ion-label position=\"floating\"> Store Email </ion-label>\r\n                <ion-input formControlName=\"email\" type=\"email\"></ion-input>\r\n              </ion-item>\r\n\r\n              <div\r\n                *ngIf=\"companyRegistrationForm.get('email').invalid && companyRegistrationForm.get('email').touched\"\r\n              >\r\n                <ion-text\r\n                  *ngIf=\"companyRegistrationForm.get('email').errors?.required\"\r\n                  color=\"danger\"\r\n                >\r\n                  <sub>email is required</sub>\r\n                </ion-text>\r\n                <ion-text\r\n                  *ngIf=\"companyRegistrationForm.get('email').errors?.maxlength\"\r\n                  color=\"danger\"\r\n                >\r\n                  <sub>email must be at most 20 Characters</sub>\r\n                </ion-text>\r\n                <ion-text\r\n                  *ngIf=\"companyRegistrationForm.get('email').errors?.pattern\"\r\n                  color=\"danger\"\r\n                >\r\n                  <sub>email e.g info@company.com</sub>\r\n                </ion-text>\r\n              </div>\r\n            </ion-col>\r\n            <ion-col size=\"12\">\r\n              <ion-item>\r\n                <ion-label position=\"floating\"> Tag Line </ion-label>\r\n                <ion-input\r\n                  formControlName=\"tag_line\"\r\n                  type=\"text\"\r\n                  value=\"example:LG life is Good\"\r\n                  placeholder=\"example:LG life is Good\"\r\n                ></ion-input>\r\n              </ion-item>\r\n\r\n              <div\r\n                *ngIf=\"companyRegistrationForm.get('tag_line').invalid && companyRegistrationForm.get('tag_line').touched\"\r\n              >\r\n                <ion-text\r\n                  *ngIf=\"companyRegistrationForm.get('tag_line').errors?.required\"\r\n                  color=\"danger\"\r\n                  ><sub>Store tag_line is required</sub></ion-text\r\n                >\r\n                <ion-text\r\n                  *ngIf=\"companyRegistrationForm.get('tag_line').errors?.minlength\"\r\n                  color=\"danger\"\r\n                  ><sub\r\n                    >Store tag_line must be at least 60 Characters</sub\r\n                  ></ion-text\r\n                >\r\n              </div>\r\n            </ion-col>\r\n            <ion-col size=\"12\">\r\n              <ion-item>\r\n                <ion-label position=\"floating\">\r\n                  Store Contact Number\r\n                </ion-label>\r\n                <ion-input formControlName=\"phone\" type=\"tel\"></ion-input>\r\n              </ion-item>\r\n\r\n              <div\r\n                *ngIf=\"companyRegistrationForm.get('phone').invalid && companyRegistrationForm.get('phone').touched\"\r\n              >\r\n                <ion-text\r\n                  *ngIf=\"companyRegistrationForm.get('phone').errors?.required\"\r\n                  color=\"danger\"\r\n                >\r\n                  <sub>phone is required</sub>\r\n                </ion-text>\r\n                <ion-text\r\n                  *ngIf=\"companyRegistrationForm.get('phone').errors?.minlength\"\r\n                  color=\"danger\"\r\n                >\r\n                  <sub>phone must be 10 digits</sub>\r\n                </ion-text>\r\n              </div>\r\n            </ion-col>\r\n            <ion-col size=\"12\">\r\n              <ion-grid>\r\n                <ion-row>\r\n                  <ion-col class=\"center\" size=\"8\">\r\n                    <ion-label\r\n                      ><sub\r\n                        >Is your Business registered with the CIPC?</sub\r\n                      ></ion-label\r\n                    >\r\n                  </ion-col>\r\n                  <ion-col class=\"center\" size=\"4\">\r\n                    <ion-toggle\r\n                      (ionChange)=\"sendToggleVlaue($event)\"\r\n                    ></ion-toggle>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-grid>\r\n            </ion-col>\r\n          </ion-row>\r\n        </form>\r\n      </ion-grid>\r\n    </ion-slide>\r\n    <ion-slide class=\"slideImg\">\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col size=\"12\">\r\n            <img src=\"../assets/userAuthStoreRegisterSlideImg.svg\" />\r\n          </ion-col>\r\n          <ion-col size=\"12\">\r\n            <h6 *ngIf=\"!picture_uploaded\">\r\n              upload your brand image/logo or an image that discribes your store\r\n              best\r\n            </h6>\r\n          </ion-col>\r\n          <ion-col size=\"12\">\r\n            <div class=\"center\" style=\"height: 30vh\">\r\n              <ion-grid>\r\n                <ion-row>\r\n                  <ion-col size=\"12\">\r\n                    <ion-img\r\n                      *ngIf=\"picture_uploaded\"\r\n                      src=\"{{picture_uploaded[0].url}}\"\r\n                      style=\"height: 30vh\"\r\n                    ></ion-img>\r\n                    <img\r\n                      *ngIf=\"!picture_uploaded\"\r\n                      src=\"../assets/carbon_user-filled.svg\"\r\n                    />\r\n                  </ion-col>\r\n                  <ion-col *ngIf=\"!picture_uploaded\" size=\"12\">\r\n                    <ion-button>\r\n                      <ion-label> add Image </ion-label>\r\n                      <ion-icon name=\"add-circle-outline\"></ion-icon>\r\n                    </ion-button>\r\n                    <ion-input\r\n                      class=\"upload\"\r\n                      type=\"file\"\r\n                      multiple\r\n                      (change)=\"handleFileInput($event)\"\r\n                      placeholder=\"+\"\r\n                      style=\"\r\n                        height: 10vh;\r\n                        top: 0vh;\r\n                        position: absolute;\r\n                        opacity: 0;\r\n                      \"\r\n                    ></ion-input>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-grid>\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-slide>\r\n    <ion-slide class=\"slide2\">\r\n      <form [formGroup]=\"productsInfo\">\r\n        <ion-grid>\r\n          <ion-row>\r\n            <ion-col size=\"12\">\r\n              <img src=\"../assets/userFirsttimeStoreRegisterSlide2.svg\" />\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-item>\r\n              <ion-col *ngIf=\"business_registered\" size=\"12\">\r\n                <ion-label><sub>Company Registration number </sub></ion-label>\r\n                <ion-input\r\n                  formControlName=\"comp_reg_num\"\r\n                  placeholder=\"enter Registration Number\"\r\n                ></ion-input>\r\n              </ion-col>\r\n            </ion-item>\r\n\r\n            <ion-col size=\"12\">\r\n              <ion-item>\r\n                <ion-label position=\"floating\">\r\n                  <sub>How do You deliver</sub></ion-label\r\n                >\r\n                <ion-select\r\n                  formControlName=\"delivery\"\r\n                  placeholder=\"choose a delivery method\"\r\n                  multiple=\"true\"\r\n                  value=\"source\"\r\n                  interface=\"action-sheet\"\r\n                >\r\n                  <ion-select-option value=\"selfMake\"\r\n                    >Self Deliver\r\n                  </ion-select-option>\r\n                  <ion-select-option value=\"imported\"\r\n                    >third Party couriers\r\n                  </ion-select-option>\r\n                </ion-select>\r\n              </ion-item>\r\n            </ion-col>\r\n            <ion-col size=\"12\"> </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </form>\r\n    </ion-slide>\r\n    <ion-slide>\r\n      <ion-grid>\r\n        <ion-row>\r\n          <!--<ion-col size=\"12\" >\r\n            <img style=\"max-width: 85%\" src=\"../assets/authReturns.svg\" />\r\n          </ion-col>-->\r\n          <ion-col size=\"12\">\r\n            <ion-title>\r\n              <h1>Delivery</h1>\r\n            </ion-title>\r\n            <ion-text>\r\n              <sub> Slide and select your free delivery regions </sub>\r\n            </ion-text>\r\n          </ion-col>\r\n          \r\n          <ion-col size=\"12\" *ngIf=\"areas\">\r\n            <ion-item style=\"--inner-padding-end:0px;max-width: 100vw; overflow-x: auto;display: flex;\">\r\n              <div *ngFor=\"let area of areas; let i = index\">\r\n                <ion-chip *ngIf=\"areas\" color=\"primary\" class=\"ion-float-left\">\r\n                  {{ area }}\r\n                  <ion-icon\r\n                    (click)=\"clearAreas(area)\"\r\n                    name=\"close-circle-outline\"\r\n                  ></ion-icon>\r\n                </ion-chip>\r\n              </div>\r\n            </ion-item>\r\n             \r\n           \r\n            \r\n          </ion-col>\r\n          <ion-col size=\"12\">\r\n            <ion-label> Choose Province </ion-label>\r\n            <ion-item style=\"--inner-padding-end:0px;max-width: 100vw; overflow-x: auto;display: flex;\">\r\n              <div *ngFor=\"let province of south_africa\">\r\n                <ion-chip\r\n                  class=\"ion-float-left\"\r\n                  (click)=\"setProvince(province.province_name)\"\r\n                >\r\n                  {{province.province_name}}\r\n                </ion-chip>\r\n              </div>\r\n            </ion-item>\r\n          \r\n          </ion-col>\r\n          <ion-col *ngIf=\"cities\" size=\"12\">\r\n            <ion-label> Choose City </ion-label>\r\n            <ion-item style=\"--inner-padding-end:0px;max-width: 100vw; overflow-x: auto;display: flex;\">\r\n             \r\n              <div *ngFor=\"let city of cities\">\r\n                <ion-chip class=\"ion-float-left\" (click)=\"setArea(city)\">\r\n                  {{city}}\r\n                </ion-chip>\r\n              </div>\r\n            </ion-item>\r\n           \r\n          </ion-col>\r\n          <!--<ion-col size=\"12\">  GOOGLE ADDRESS  API \r\n            <form [formGroup]=\"addressFormGroup\">\r\n              <ion-searchbar\r\n                formControlName=\"address\"\r\n DO NOT DELETE             placeholder=\" Search a city..\"\r\n              >\r\n              </ion-searchbar>\r\n              <mat-google-maps-autocomplete formControlName=\"address\">\r\n              </mat-google-maps-autocomplete>\r\n            </form>\r\n          </ion-col>-->\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col size=\"8\">\r\n            <ion-label>\r\n              <sub> Do you also deliver outside this regions? </sub>\r\n            </ion-label>\r\n          </ion-col>\r\n          <ion-col class=\"center\" size=\"4\">\r\n            <ion-toggle (ionChange)=\"outOfBound($event)\"></ion-toggle>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col *ngIf=\"out_of_bound \" size=\"12\">\r\n            <ion-item>\r\n              <ion-label position=\"floating\">\r\n                Out of range delivery fee\r\n              </ion-label>\r\n              <form [formGroup]=\"out_bound\">\r\n                <ion-input\r\n                  formControlName=\"out_bound_fee\"\r\n                  type=\"number\"\r\n                ></ion-input>\r\n              </form>\r\n            </ion-item>\r\n          </ion-col>\r\n          <ion-col size=\"12\">\r\n            <ion-button\r\n              size=\"small\"\r\n              expand=\"full\"\r\n              shape=\"round\"\r\n              type=\"submit\"\r\n              color=\"primary\"\r\n              (click)=\"submit()\"\r\n              >submit</ion-button\r\n            >\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-slide>\r\n\r\n    <!--<ion-slide>\r\n      <h1>Slide 3</h1>\r\n    </ion-slide>-->\r\n  </ion-slides>\r\n  <ion-fab *ngIf=\"showNext\" vertical=\"bottom\" horizontal=\"end\">\r\n    <ion-button\r\n      shape=\"round\"\r\n      class=\"ion-padding-end\"\r\n      style=\"color: #000000\"\r\n      size=\"small\"\r\n      color=\"white\"\r\n      (click)=\"next()\"\r\n    >\r\n      next\r\n    </ion-button>\r\n  </ion-fab>\r\n\r\n  <ion-fab *ngIf=\"showBack\" horizontal=\"start\" vertical=\"bottom\">\r\n    <ion-button\r\n      shape=\"round\"\r\n      class=\"ion-padding-start\"\r\n      style=\"color: #000000\"\r\n      size=\"small\"\r\n      color=\"white\"\r\n      (click)=\" slidesBack()\"\r\n    >\r\n      back\r\n    </ion-button>\r\n  </ion-fab>\r\n</ion-content>\r\n\r\n<!--<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>store-register 1/2</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <form [formGroup]=\"companyRegistrationForm\" (ngSubmit)=\"onSubmit()\">\r\n    <ion-item>\r\n      <ion-input formControlName=\"name\" type=\"text\" placeholder=\"Store Name\"></ion-input>\r\n      <div *ngIf=\"companyRegistrationForm.get('name').invalid && companyRegistrationForm.get('name').touched\">\r\n        <ion-text *ngIf=\"companyRegistrationForm.get('name').errors?.required\" color=\"danger\"><sub>Store name is required</sub></ion-text>\r\n        <ion-text *ngIf=\"companyRegistrationForm.get('name').errors?.minlength\" color=\"danger\"><sub>Store name must be at least 3 Characters</sub></ion-text>\r\n      </div>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-input  formControlName=\"email\" type=\"email\" placeholder=\"Store Email\"></ion-input>\r\n      <div *ngIf=\"companyRegistrationForm.get('email').invalid && companyRegistrationForm.get('email').touched\">\r\n        <ion-text *ngIf=\"companyRegistrationForm.get('email').errors?.required\" color=\"danger\">\r\n          <sub>email is required</sub>\r\n        </ion-text>\r\n        <ion-text *ngIf=\"companyRegistrationForm.get('email').errors?.maxlength\" color=\"danger\">\r\n          <sub>email must be at most 20 Characters</sub>\r\n        </ion-text>\r\n        <ion-text *ngIf=\"companyRegistrationForm.get('email').errors?.pattern\" color=\"danger\">\r\n          <sub>email e.g info@company.com</sub>\r\n        </ion-text>\r\n      </div>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-input formControlName=\"phone\" type=\"number\" placeholder=\"Store Phone Number\"></ion-input>\r\n      <div *ngIf=\"companyRegistrationForm.get('phone').invalid && companyRegistrationForm.get('phone').touched\">\r\n        <ion-text *ngIf=\"companyRegistrationForm.get('phone').errors?.required\" color=\"danger\">\r\n          <sub>phone is required</sub>\r\n        </ion-text>\r\n        <ion-text *ngIf=\"companyRegistrationForm.get('phone').errors?.minlength\" color=\"danger\">\r\n          <sub>phone must be 10 digits</sub>\r\n        </ion-text>\r\n      </div>\r\n    </ion-item>\r\n\r\n    <ion-button [disabled]=\"!companyRegistrationForm.valid\"  type=\"submit\" color=\"primary\" >Next</ion-button>\r\n  </form>\r\n  {{companyRegistrationForm.value | json}}\r\n</ion-content>-->\r\n");

/***/ }),

/***/ "./src/app/modules/auth/pages/welcome/store-register/store-register.module.ts":
/*!************************************************************************************!*\
  !*** ./src/app/modules/auth/pages/welcome/store-register/store-register.module.ts ***!
  \************************************************************************************/
/*! exports provided: StoreRegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreRegisterPageModule", function() { return StoreRegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _angular_material_extensions_google_maps_autocomplete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular-material-extensions/google-maps-autocomplete */ "./node_modules/@angular-material-extensions/google-maps-autocomplete/__ivy_ngcc__/fesm5/angular-material-extensions-google-maps-autocomplete.js");
/* harmony import */ var _store_register_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./store-register.page */ "./src/app/modules/auth/pages/welcome/store-register/store-register.page.ts");









var routes = [
    {
        path: "",
        component: _store_register_page__WEBPACK_IMPORTED_MODULE_7__["StoreRegisterPage"],
    },
];
var StoreRegisterPageModule = /** @class */ (function () {
    function StoreRegisterPageModule() {
    }
    StoreRegisterPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _angular_material_extensions_google_maps_autocomplete__WEBPACK_IMPORTED_MODULE_6__["MatGoogleMapsAutocompleteModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            ],
            declarations: [_store_register_page__WEBPACK_IMPORTED_MODULE_7__["StoreRegisterPage"]],
        })
    ], StoreRegisterPageModule);
    return StoreRegisterPageModule;
}());



/***/ }),

/***/ "./src/app/modules/auth/pages/welcome/store-register/store-register.page.scss":
/*!************************************************************************************!*\
  !*** ./src/app/modules/auth/pages/welcome/store-register/store-register.page.scss ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".slide1 {\n  height: 100vh;\n}\n\n.slide2 {\n  height: 100vh;\n}\n\n.slideImg {\n  height: 100vh;\n}\n\nion-slide {\n  --bullet-background: #a8a8a8;\n}\n\n.heading {\n  font-family: porkyFont;\n  font-size: 30px;\n}\n\n.one {\n  color: #ffd700;\n}\n\n.two {\n  color: #018786;\n}\n\nion-toggle {\n  height: 22px;\n  --background: #f4f5f8;\n  --background-checked: #ffd700;\n  --handle-background: #ffff url(/assets/No.svg) no-repeat center / contain;\n  --handle-background-checked: #018786 url(/assets/Yes.svg) no-repeat center /\n    contain;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hdXRoL3BhZ2VzL3dlbGNvbWUvc3RvcmUtcmVnaXN0ZXIvQzpcXFVzZXJzXFxNYXJ2aW5cXERvY3VtZW50c1xcR2l0SHViXFxhZnJvYlxcY2xpZW50L3NyY1xcYXBwXFxtb2R1bGVzXFxhdXRoXFxwYWdlc1xcd2VsY29tZVxcc3RvcmUtcmVnaXN0ZXJcXHN0b3JlLXJlZ2lzdGVyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9hdXRoL3BhZ2VzL3dlbGNvbWUvc3RvcmUtcmVnaXN0ZXIvc3RvcmUtcmVnaXN0ZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUUsYUFBQTtBQ0FGOztBREVBO0VBRUUsYUFBQTtBQ0FGOztBREVBO0VBQ0UsYUFBQTtBQ0NGOztBREdBO0VBQ0UsNEJBQUE7QUNBRjs7QURFQTtFQUNFLHNCQUFBO0VBQ0EsZUFBQTtBQ0NGOztBRENBO0VBQ0UsY0FBQTtBQ0VGOztBREFBO0VBQ0UsY0FBQTtBQ0dGOztBRERBO0VBQ0UsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsNkJBQUE7RUFFQSx5RUFBQTtFQUNBO1dBQUE7QUNJRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYXV0aC9wYWdlcy93ZWxjb21lL3N0b3JlLXJlZ2lzdGVyL3N0b3JlLXJlZ2lzdGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zbGlkZTEge1xuXG4gIGhlaWdodDogMTAwdmg7XG59XG4uc2xpZGUyIHtcblxuICBoZWlnaHQ6IDEwMHZoO1xufVxuLnNsaWRlSW1nIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuXG5pb24tc2xpZGUge1xuICAtLWJ1bGxldC1iYWNrZ3JvdW5kOiAjYThhOGE4O1xufVxuLmhlYWRpbmcge1xuICBmb250LWZhbWlseTogcG9ya3lGb250O1xuICBmb250LXNpemU6IDMwcHg7XG59XG4ub25lIHtcbiAgY29sb3I6ICNmZmQ3MDA7XG59XG4udHdvIHtcbiAgY29sb3I6ICMwMTg3ODY7XG59XG5pb24tdG9nZ2xlIHtcbiAgaGVpZ2h0OiAyMnB4O1xuICAtLWJhY2tncm91bmQ6ICNmNGY1Zjg7XG4gIC0tYmFja2dyb3VuZC1jaGVja2VkOiAjZmZkNzAwO1xuXG4gIC0taGFuZGxlLWJhY2tncm91bmQ6ICNmZmZmIHVybCgvYXNzZXRzL05vLnN2Zykgbm8tcmVwZWF0IGNlbnRlciAvIGNvbnRhaW47XG4gIC0taGFuZGxlLWJhY2tncm91bmQtY2hlY2tlZDogIzAxODc4NiB1cmwoL2Fzc2V0cy9ZZXMuc3ZnKSBuby1yZXBlYXQgY2VudGVyIC9cbiAgICBjb250YWluO1xufVxuIiwiLnNsaWRlMSB7XG4gIGhlaWdodDogMTAwdmg7XG59XG5cbi5zbGlkZTIge1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuXG4uc2xpZGVJbWcge1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuXG5pb24tc2xpZGUge1xuICAtLWJ1bGxldC1iYWNrZ3JvdW5kOiAjYThhOGE4O1xufVxuXG4uaGVhZGluZyB7XG4gIGZvbnQtZmFtaWx5OiBwb3JreUZvbnQ7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cblxuLm9uZSB7XG4gIGNvbG9yOiAjZmZkNzAwO1xufVxuXG4udHdvIHtcbiAgY29sb3I6ICMwMTg3ODY7XG59XG5cbmlvbi10b2dnbGUge1xuICBoZWlnaHQ6IDIycHg7XG4gIC0tYmFja2dyb3VuZDogI2Y0ZjVmODtcbiAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6ICNmZmQ3MDA7XG4gIC0taGFuZGxlLWJhY2tncm91bmQ6ICNmZmZmIHVybCgvYXNzZXRzL05vLnN2Zykgbm8tcmVwZWF0IGNlbnRlciAvIGNvbnRhaW47XG4gIC0taGFuZGxlLWJhY2tncm91bmQtY2hlY2tlZDogIzAxODc4NiB1cmwoL2Fzc2V0cy9ZZXMuc3ZnKSBuby1yZXBlYXQgY2VudGVyIC9cbiAgICBjb250YWluO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/auth/pages/welcome/store-register/store-register.page.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/auth/pages/welcome/store-register/store-register.page.ts ***!
  \**********************************************************************************/
/*! exports provided: StoreRegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreRegisterPage", function() { return StoreRegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var src_app_core_modules_services_profile_profile_api_profile_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core-modules/services/profile/profile-api/profile-api.service */ "./src/app/core-modules/services/profile/profile-api/profile-api.service.ts");
/* harmony import */ var src_app_core_modules_services_products_product_api_product_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core-modules/services/products/product-api/product-api.service */ "./src/app/core-modules/services/products/product-api/product-api.service.ts");
/* harmony import */ var src_app_core_modules_services_header_header_state_header_state_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core-modules/services/header/header-state/header-state.service */ "./src/app/core-modules/services/header/header-state/header-state.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var src_app_core_modules_services_profile_profile_facade_profile_facade_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core-modules/services/profile/profile-facade/profile-facade.service */ "./src/app/core-modules/services/profile/profile-facade/profile-facade.service.ts");
/* harmony import */ var src_app_core_modules_services_menus_menu_state_menu_state_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core-modules/services/menus/menu-state/menu-state.service */ "./src/app/core-modules/services/menus/menu-state/menu-state.service.ts");












var StoreRegisterPage = /** @class */ (function () {
    function StoreRegisterPage(formBuilder, userApi, router, productApi, headerState, _location, toastController, menuState, userFacade) {
        this.formBuilder = formBuilder;
        this.userApi = userApi;
        this.router = router;
        this.productApi = productApi;
        this.headerState = headerState;
        this._location = _location;
        this.toastController = toastController;
        this.menuState = menuState;
        this.userFacade = userFacade;
        this.business_registered = false;
        this.areas = [];
        this.south_africa = [
            {
                province_name: "Limpopo",
                cities: [
                    "Polokwane",
                    "Giyane",
                    "Lebowakgomo",
                    "Musina",
                    "Phalaborwa",
                    "Seshego",
                    "Sibasa",
                    "Mokopane",
                    "Thohoyandou",
                    "Thabazimbi",
                ],
            },
            {
                province_name: "Gauteng",
                cities: [
                    "Benoni",
                    "Boksburg",
                    "Brakpan",
                    "Carletonville",
                    "Germiston",
                    "Johannesburg",
                    "Krugersdorp",
                    "Randburg",
                    "Randfontein",
                    "Roodeport",
                    "Pretoria",
                    "Soweto",
                    "Springs",
                    "Vanderbijlpark",
                    "Vereeniging",
                ],
            },
            {
                province_name: "Kwazulu Natal",
                cities: [
                    "Durban",
                    "Empangeni",
                    "Ladysmith",
                    "Newcastle",
                    "Pietermaritzburg",
                    "Pinetown",
                    "Ulundi",
                    "Umlazi",
                ],
            },
            {
                province_name: "North West",
                cities: [
                    "Klerksdorp",
                    "Mahikeng",
                    "Mmabatho",
                    "Potchefstroom",
                    "Rustenburg",
                ],
            },
            {
                province_name: "Northen Cape",
                cities: [
                    "Kimberley",
                    "Kuruman",
                    "Port Nolloth",
                    "Upington",
                    "De Aar",
                    "Bellville",
                ],
            },
            {
                province_name: "Western Cape",
                cities: [
                    "Bellville",
                    "Cape Town",
                    "Constantia",
                    "George",
                    "Hopefield",
                    "Oudtshoorn",
                    "Paarl",
                    "Simon’s Town",
                    "Stellenbosch",
                    "Swellendam",
                    "Worcester",
                ],
            },
            {
                province_name: "Mpumalanga",
                cities: [
                    "Emalahleni",
                    "Nelspruit",
                    "Secunda",
                    "Bushbuckridge",
                    "Hazeyview",
                ],
            },
            {
                province_name: "Free State",
                cities: [
                    "Bethlehem",
                    "Bloemfontein",
                    "Jagersfontein",
                    "Kroonstad",
                    "Odendaalsrus",
                    "Parys",
                    "Phuthaditjhaba",
                    "Sasolburg",
                    "Virginia",
                    "Welkom",
                ],
            },
            {
                province_name: "Eastern Cape",
                cities: [
                    "Alice",
                    "Butterworth",
                    "Jagersfontein",
                    "Graaff-Reinet",
                    "Grahamstown",
                    "Parys",
                    "Phuthaditjhaba",
                    "King William’s Town",
                    "Mthatha",
                    "Port Elizabeth",
                    "Queenstown",
                    "Uitenhage",
                    "Zwelitsha",
                ],
            },
        ];
    }
    //addressFormGroup: FormGroup;
    StoreRegisterPage.prototype.setProvince = function (province) {
        var provi = this.south_africa.filter(function (prov) {
            return prov.province_name === province;
        });
        console.log(provi);
        this.cities = provi[0].cities;
    };
    StoreRegisterPage.prototype.setArea = function (city) {
        console.log(city);
        var found = this.areas.filter(function (area) {
            return area === city;
        });
        if (found.length > 0) {
            return null;
        }
        else {
            this.areas.push(city);
        }
        console.log(this.areas);
    };
    StoreRegisterPage.prototype.clearAreas = function (i_area) {
        var cleared = this.areas.filter(function (area) {
            return area !== i_area;
        });
        this.areas = cleared;
    };
    StoreRegisterPage.prototype.ionViewDidEnter = function () {
        this.slides.lockSwipes(true);
    };
    StoreRegisterPage.prototype.ngOnInit = function () {
        var _this = this;
        this.back = this.backFunction();
        this.showNext = true;
        this.showBack = false;
        this.backTouser = this.userBackFunction();
        this.returnUrl = this.headerState.return_route;
        this.slides.getActiveIndex().then(function (data) {
            _this.slides_number = data + 1;
        });
        this.companyRegistrationForm = this.formBuilder.group({
            name: [
                "",
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            ],
            tag_line: [
                "",
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(60), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            ],
            email: [
                "",
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(320),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern("^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$"),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                ]),
            ],
            phone: [
                "",
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            ],
        });
        this.productsInfo = this.formBuilder.group({
            delivery: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            comp_reg_num: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
        });
        this.out_bound = this.formBuilder.group({
            out_bound_fee: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
        });
        /*this.addressFormGroup = new FormGroup({
          address: new FormControl(),
        });
    
        this.addressFormGroup
          .get("address")
          .valueChanges.subscribe((value) => console.log("value changed", value));
    */
    };
    StoreRegisterPage.prototype.submit = function () {
        var _this = this;
        var c_register = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.companyRegistrationForm.value), { logo: this.picture_uploaded, out_bound_fee: this.out_bound.value.out_bound_fee, free_delivery: this.areas });
        this.userApi.storeRegister(c_register).subscribe(function (res) {
            _this.userApi.storeProfiling(_this.productsInfo.value).subscribe(function (result) {
                console.log(result);
                var store = result.store;
                var user = result.user;
                _this.userFacade.loadUser();
                _this.menuState.updateMenuStatus("admin");
                _this.userFacade.loadStoreProfile(store._id);
                _this.router.navigate(["/admin-store/store"]);
            }, function (err) {
                _this.presentToast("Error! ");
                console.log(err);
            });
        }, function (err) { return _this.presentToast("Error! incomplete fields "); });
    };
    StoreRegisterPage.prototype.sendToggleVlaue = function (data) {
        this.business_registered = data.detail.checked;
    };
    StoreRegisterPage.prototype.outOfBound = function (data) {
        this.out_of_bound = data.detail.checked;
    };
    StoreRegisterPage.prototype.handleFileInput = function (event) {
        var _this = this;
        var file = event.target.files[0];
        if (file.type == "image/jpeg" || file.type == "image/png") {
            var _formData = new FormData();
            _formData.append("image", file);
            //save picture
            this.productApi.uploadImage(_formData).subscribe(function (res) {
                _this.picture_uploaded = res.data;
                console.log(_this.picture_uploaded);
            });
        }
    };
    StoreRegisterPage.prototype.onClickBack = function () {
        this.router.navigate([this.returnUrl]);
    };
    StoreRegisterPage.prototype.next = function () {
        this.slides.lockSwipes(false);
        this.slides.slideNext();
        this.slides.lockSwipes(true);
    };
    StoreRegisterPage.prototype.slidesBack = function () {
        this.slides.lockSwipes(false);
        this.slides.slidePrev();
        this.slides.lockSwipes(true);
    };
    StoreRegisterPage.prototype.backFunction = function () {
        if (this.headerState.return_route == "/user/stores") {
            return true;
        }
        else {
            return false;
        }
    };
    StoreRegisterPage.prototype.userBackFunction = function () {
        if (this.headerState.return_route == "fromUser") {
            return true;
        }
        else {
            return false;
        }
    };
    StoreRegisterPage.prototype.backToUser = function () {
        this._location.back();
    };
    StoreRegisterPage.prototype.slideChange = function (event) {
        var _this = this;
        this.slides.getActiveIndex().then(function (data) {
            _this.slides_number = data + 1;
            if (data == 3) {
                _this.showNext = false;
                _this.showBack = true;
            }
            else if (data == 0) {
                _this.showBack = false;
                _this.showNext = true;
            }
            else {
                _this.showNext = true;
                _this.showBack = true;
            }
        });
    };
    StoreRegisterPage.prototype.presentToast = function (data) {
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
    StoreRegisterPage.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: src_app_core_modules_services_profile_profile_api_profile_api_service__WEBPACK_IMPORTED_MODULE_4__["ProfileApiService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: src_app_core_modules_services_products_product_api_product_api_service__WEBPACK_IMPORTED_MODULE_5__["ProductApiService"] },
        { type: src_app_core_modules_services_header_header_state_header_state_service__WEBPACK_IMPORTED_MODULE_6__["HeaderStateService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ToastController"] },
        { type: src_app_core_modules_services_menus_menu_state_menu_state_service__WEBPACK_IMPORTED_MODULE_10__["MenuStateService"] },
        { type: src_app_core_modules_services_profile_profile_facade_profile_facade_service__WEBPACK_IMPORTED_MODULE_9__["UserFacadeService"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("registerStore", { static: true }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonSlides"])
    ], StoreRegisterPage.prototype, "slides", void 0);
    StoreRegisterPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-store-register",
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./store-register.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/auth/pages/welcome/store-register/store-register.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./store-register.page.scss */ "./src/app/modules/auth/pages/welcome/store-register/store-register.page.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            src_app_core_modules_services_profile_profile_api_profile_api_service__WEBPACK_IMPORTED_MODULE_4__["ProfileApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_app_core_modules_services_products_product_api_product_api_service__WEBPACK_IMPORTED_MODULE_5__["ProductApiService"],
            src_app_core_modules_services_header_header_state_header_state_service__WEBPACK_IMPORTED_MODULE_6__["HeaderStateService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ToastController"],
            src_app_core_modules_services_menus_menu_state_menu_state_service__WEBPACK_IMPORTED_MODULE_10__["MenuStateService"],
            src_app_core_modules_services_profile_profile_facade_profile_facade_service__WEBPACK_IMPORTED_MODULE_9__["UserFacadeService"]])
    ], StoreRegisterPage);
    return StoreRegisterPage;
}());



/***/ })

}]);
//# sourceMappingURL=src-app-modules-auth-pages-welcome-store-register-store-register-module.js.map