(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-modules-admin-store-pages-pricing-pricing-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin-store/pages/pricing/pricing.page.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin-store/pages/pricing/pricing.page.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-fab vertical=\"top\" horizontal=\"start\" slot=\"fixed\">\r\n  <ion-fab-button size=\"small\" (click)=\"backClicked()\">\r\n    <ion-icon name=\"close-outline\"></ion-icon>\r\n  </ion-fab-button>\r\n</ion-fab>\r\n\r\n<ion-content> \r\n  <!--<ion-range style=\"    padding-top: 21px;padding-bottom: 21px;\"(ionChange)=\"rangeChange($event)\" min=\"6\" max=\"30\" step=\"1\"  pin >\r\n    \r\n  </ion-range>-->\r\n\r\n  <ion-slides\r\n  (ionSlideDidChange)=\"slideChange($event)\"\r\n  #userSlides\r\n  pager=\"true\"\r\n>\r\n<ion-slide>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col size=12>\r\n        <ion-img\r\n        src=\"../assets/licences.svg\"\r\n      ></ion-img>\r\n      </ion-col>\r\n      <ion-col size=12>\r\n        <ion-title>\r\n          <h1>Usage Licenses</h1>\r\n        </ion-title>\r\n        <ion-chip>\r\n          Access features\r\n        </ion-chip>\r\n        <ion-chip>\r\n          Sized for you\r\n        </ion-chip>\r\n      </ion-col>\r\n    \r\n      <ion-col size=12>\r\n        <ion-text>\r\n          <sub>\r\n            Licenses are priced based on the number of products you have and the number of store admins you have.\r\n           <br>\r\n           <br>\r\n             <b style=\"color:#018786\">By choosing the numberof products and admin users you get a license suited for you store</b>\r\n           </sub>\r\n        </ion-text>\r\n      </ion-col>\r\n      <ion-col size=12>\r\n        <ion-button shape=\"round\" color=\"secondary\" (click)=\"showBasicPicker( userSlides)\">\r\n          Add license\r\n        </ion-button>\r\n        \r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-slide>\r\n<ion-slide style=\"width:100vw;\">\r\n<ion-grid>\r\n  <ion-row>\r\n    <ion-col size=12>\r\n      <ion-title >\r\n        <ion-title>\r\n          <h1 style=\"text-align: center\"> Choose A license </h1>\r\n        </ion-title>\r\n        <ion-text style=\"text-align: center\">\r\n          <sub> All features are included, No extra costs </sub>\r\n        </ion-text>\r\n      </ion-title>\r\n    </ion-col>\r\n    <ion-col *ngIf=\"show_licenses\" size=12>\r\n      <div style=\"    overflow-x: auto;\r\n      display: flex; width: 100vw;padding-left: 52px\r\n  \">\r\n        <div style=\"display: inline-block;float:left;\" *ngFor=\"let reco of recommended_license_index;let i  = index\">\r\n          <ion-card color=\"primary\" class=\"card_license\" >\r\n              <ion-item  color=\"primary\"  style=\"width: 95%;--inner-padding-end:0px;  border-radius: 5vw;\">\r\n                <ion-title style=\"text-align:center\">\r\n                  <sub>{{reco.license_name}} </sub>\r\n                </ion-title>\r\n              </ion-item>\r\n              <ion-grid>\r\n                <ion-row>\r\n                  <ion-col size=12>\r\n                    <ion-icon color=\"secondary\" style=\"font-size:15vw;\" name=\"ribbon\"></ion-icon>\r\n                  </ion-col>\r\n                  <ion-col size=12>\r\n                    <ion-chip  >\r\n                      Recommended <ion-icon  color=\"success\" name=\"checkmark-circle\"></ion-icon>\r\n                    </ion-chip>\r\n                  </ion-col>\r\n                  <ion-col  *ngIf=\"license_focus==reco.license_name \" size=12>\r\n                    <h1 style=\"margin-top: 0px; text-decoration: line-through;font-size: 21px;color: #90DED7\">\r\n                      {{reco.monthly_price*12 | currency: 'R'}} /year <!-- <ion-badge color=\"tertiary\"><sub> SAVE</sub></ion-badge> --> \r\n                    </h1>\r\n                  </ion-col>\r\n                  <ion-col  *ngIf=\"license_focus==reco.license_name \" size=12>\r\n                  \r\n                      <h1 class=\"center\" style=\"margin-top: 0px;\">\r\n                        {{reco.annual_advance_payment | currency: 'R'}} /<a (click)=\"showAnnual('none','mon')\" >year <ion-icon size=\"small\"name=\"caret-down-outline\"></ion-icon></a>\r\n                      </h1> \r\n                \r\n                  \r\n                  </ion-col>\r\n                  <ion-col  *ngIf=\"license_focus !==reco.license_name \" size=12>\r\n                    <h1 class=\"center\" style=\"margin-top: 0px;\">\r\n                      {{reco.monthly_price | currency: 'R'}} /<a (click)=\"showAnnual(reco.license_name,'yearly')\" fill=\"clear\">mon<ion-icon size=\"small\" name=\"caret-down-outline\"></ion-icon></a>\r\n                    </h1>\r\n                  </ion-col>\r\n                  <ion-col size=12>\r\n                    <ion-item color=\"primary\" >\r\n                      <ion-icon slot=\"start\" name=\"gift\"></ion-icon>\r\n                      <ion-label>{{reco.number_of_products}} Products</ion-label>\r\n                    </ion-item>\r\n                  </ion-col>\r\n                  <ion-col size=12>\r\n                    <ion-item color=\"primary\" >\r\n                      <ion-icon slot=\"start\" name=\"people\"></ion-icon>\r\n                      <ion-label>{{reco.number_of_users}} Users</ion-label>\r\n                    </ion-item>\r\n                  </ion-col>\r\n                  <ion-col size=\"12\">\r\n                    <ion-button (click)=\"postLicense(reco)\" color=\"secondary\" shape=\"round\">\r\n                      Select\r\n                    </ion-button>\r\n                  </ion-col>\r\n                  \r\n                </ion-row>\r\n              </ion-grid>\r\n           \r\n          </ion-card>\r\n        </div>\r\n        <div style=\"display: inline-block;float:left;\" *ngFor=\"let li of other_licenses\">\r\n          <ion-card   class=\"card_license\" >\r\n              <ion-item  style=\"width: 95%;--inner-padding-end:0px;\">\r\n                <ion-title style=\"text-align:center\">\r\n                  <sub>{{li.license_name}} </sub>\r\n                </ion-title>\r\n              </ion-item>\r\n              <ion-grid>\r\n                <ion-row>\r\n                  <ion-col size=12>\r\n                    <ion-icon color=\"primary\" style=\"font-size:15vw;\" name=\"document-text\"></ion-icon>\r\n  \r\n             \r\n                  </ion-col>\r\n                  <ion-col  *ngIf=\"license_focus==li.license_name \" size=12>\r\n                    <h1 style=\"margin-top: 0px; text-decoration: line-through;font-size: 21px\">\r\n                      {{li.monthly_price*12 | currency: 'R'}} /year <!-- <ion-badge color=\"tertiary\"><sub> SAVE</sub></ion-badge> --> \r\n                    </h1>\r\n                  </ion-col>\r\n                  <ion-col  *ngIf=\"license_focus==li.license_name \" size=12>\r\n                  \r\n                      <h1 class=\"center\" style=\"margin-top: 0px;\">\r\n                        {{li.annual_advance_payment | currency: 'R'}} /<a (click)=\"showAnnual('none','mon')\" >year <ion-icon size=\"small\"name=\"caret-down-outline\"></ion-icon></a>\r\n                      </h1> \r\n                \r\n                  \r\n                  </ion-col>\r\n                  <ion-col  *ngIf=\"license_focus !==li.license_name \" size=12>\r\n                    <h1 class=\"center\" style=\"margin-top: 0px;\">\r\n                      {{li.monthly_price | currency: 'R'}} /<a (click)=\"showAnnual(li.license_name,'yearly')\" fill=\"clear\">mon<ion-icon size=\"small\" name=\"caret-down-outline\"></ion-icon></a>\r\n                    </h1>\r\n                  </ion-col>\r\n\r\n                 \r\n                  <ion-col size=12>\r\n                    <ion-item >\r\n                      <ion-icon slot=\"start\" name=\"gift\"></ion-icon>\r\n                      <ion-label>{{li.number_of_products}} Products</ion-label>\r\n                    </ion-item>\r\n                  </ion-col>\r\n                  <ion-col size=12>\r\n                    <ion-item >\r\n                      <ion-icon slot=\"start\" name=\"people\"></ion-icon>\r\n                      <ion-label>{{li.number_of_users}} Users</ion-label>\r\n                    </ion-item>\r\n                  </ion-col>\r\n                  <ion-col size=\"12\">\r\n                    <ion-button (click)=\"postLicense(li)\" color=\"secondary\" shape=\"round\">\r\n                      Select\r\n                    </ion-button>\r\n                  </ion-col>\r\n                  \r\n                </ion-row>\r\n              </ion-grid>\r\n           \r\n          </ion-card>\r\n        </div>\r\n    \r\n      </div>\r\n    </ion-col>\r\n    <ion-col size=12>\r\n\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-grid>\r\n\r\n\r\n</ion-slide>\r\n<ion-slide> \r\n  \r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col size=12>\r\n        <ion-title >\r\n          <ion-title>\r\n            <h1 style=\"text-align: center\"> Confirm License  </h1>\r\n          </ion-title>\r\n          <ion-text style=\"text-align: center\">\r\n            <sub> Scroll to see all the features the license has </sub>\r\n          </ion-text>\r\n        </ion-title>\r\n      </ion-col>\r\n      <ion-col *ngIf=\"selected_license\"size=12>\r\n        <ion-list style=\"    height: 23vh;\r\n        overflow: scroll;\">\r\n          <ion-chip color=\"primary\" *ngFor=\"let feature of selected_license.features\">\r\n            <ion-label><sub> {{feature}}  </sub></ion-label>\r\n          </ion-chip>\r\n         \r\n        </ion-list>\r\n\r\n      </ion-col>\r\n      <ion-col size=12>\r\n        <ion-text>\r\n          <sub>\r\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis\r\n          </sub>\r\n        </ion-text>\r\n      </ion-col>\r\n      <ion-col size=12>\r\n       <ion-button (click)=\"payfastNav()\">payNow</ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n \r\n\r\n</ion-slide>\r\n\r\n<ion-slide style=\"height: 100vh;\">\r\n  \r\n</ion-slide>\r\n</ion-slides>\r\n<ion-fab *ngIf=\"showBack \" horizontal=\"start\" vertical=\"bottom\">\r\n  <ion-button\r\n    shape=\"round\"\r\n    class=\"ion-padding-start\"\r\n    style=\"color: #000000\"\r\n    size=\"small\"\r\n    color=\"white\"\r\n    (click)=\"  back()\"\r\n  >\r\n    back\r\n  </ion-button>\r\n</ion-fab>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/core-modules/services/auth/auth-state/auth-state.service.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/core-modules/services/auth/auth-state/auth-state.service.ts ***!
  \*****************************************************************************/
/*! exports provided: AuthStateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthStateService", function() { return AuthStateService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var AuthStateService = /** @class */ (function () {
    function AuthStateService() {
        this.licenses$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([
            {
                license_name: "Novice-Vendor-Lite",
                monthly_price: 180.0,
                annual_price: 2160.0,
                annual_advance_payment: 1944.0,
                number_of_stores: "Single store",
                number_of_products: 5,
                number_of_users: 1,
                features: [
                    "24/7 SUPPORT",
                    "SALES CHANNELS",
                    "PROMOTIONS (Market Places, Google Ads, Social Media",
                    "BILL OF MATERIAL CONFIGURATOR",
                    "DELIVERY COMFIRMATION",
                    "ORDER FULFILMENT",
                    "SALES CAMPAIGN",
                    "DISCOUNT VOUCHER",
                    "CHECKOUT PAYMENT SYSTEM",
                    "SSL CERTIFICATE",
                    "ABANDONED CART RECOVERY*",
                    "PROFESSIONAL REPORTS",
                    "THIRD-PARTY CALCULATED SHIPPING RATES",
                    "Show calculated rates with your own account or third-party couriers",
                ],
                transaction_percentage: {
                    cartalist: 1.2,
                    payment_gateway: 5,
                },
            },
            {
                license_name: "Novice-Vendor-Premium",
                monthly_price: 270.0,
                annual_price: 3564.0,
                annual_advance_payment: 3207.6,
                number_of_stores: "Single store",
                number_of_products: 25,
                number_of_users: 2,
                features: [
                    "24/7 SUPPORT",
                    "SALES CHANNELS",
                    "PROMOTIONS (Market Places, Google Ads, Social Media",
                    "BILL OF MATERIAL CONFIGURATOR",
                    "DELIVERY COMFIRMATION",
                    "ORDER FULFILMENT",
                    "SALES CAMPAIGN",
                    "DISCOUNT VOUCHER",
                    "CHECKOUT PAYMENT SYSTEM",
                    "SSL CERTIFICATE",
                    "ABANDONED CART RECOVERY*",
                    "PROFESSIONAL REPORTS",
                    "THIRD-PARTY CALCULATED SHIPPING RATES",
                    "Show calculated rates with your own account or third-party couriers",
                ],
                transaction_percentage: {
                    cartalist: 1.2,
                    payment_gateway: 5,
                },
            },
            {
                license_name: "Novice-Vendor-Alist",
                monthly_price: 360.0,
                annual_price: 4752.0,
                annual_advance_payment: 4276.8,
                number_of_stores: "Single store",
                number_of_products: 50,
                number_of_users: 5,
                features: [
                    "24/7 SUPPORT",
                    "SALES CHANNELS",
                    "PROMOTIONS (Market Places, Google Ads, Social Media",
                    "BILL OF MATERIAL CONFIGURATOR",
                    "DELIVERY COMFIRMATION",
                    "ORDER FULFILMENT",
                    "SALES CAMPAIGN",
                    "DISCOUNT VOUCHER",
                    "CHECKOUT PAYMENT SYSTEM",
                    "SSL CERTIFICATE",
                    "ABANDONED CART RECOVERY*",
                    "PROFESSIONAL REPORTS",
                    "THIRD-PARTY CALCULATED SHIPPING RATES",
                    "Show calculated rates with your own account or third-party couriers",
                ],
                transaction_percentage: {
                    cartalist: 1.2,
                    payment_gateway: 5,
                },
            },
            {
                license_name: "Start-Up",
                monthly_price: 1800.0,
                annual_price: 23760.0,
                annual_advance_payment: 21384.0,
                number_of_stores: "Two stores",
                number_of_products: 75,
                number_of_users: 20,
                features: [
                    "24/7 SUPPORT",
                    "SALES CHANNELS",
                    "PROMOTIONS (Market Places, Google Ads, Social Media",
                    "BILL OF MATERIAL CONFIGURATOR",
                    "DELIVERY COMFIRMATION",
                    "ORDER FULFILMENT",
                    "SALES CAMPAIGN",
                    "DISCOUNT VOUCHER",
                    "CHECKOUT PAYMENT SYSTEM",
                    "SSL CERTIFICATE",
                    "ABANDONED CART RECOVERY*",
                    "PROFESSIONAL REPORTS",
                    "THIRD-PARTY CALCULATED SHIPPING RATES",
                    "Show calculated rates with your own account or third-party couriers",
                ],
                transaction_percentage: {
                    cartalist: 1.2,
                    payment_gateway: 5,
                },
            },
            {
                license_name: "Start-Up-Premium",
                monthly_price: 3600.0,
                annual_price: 47520.0,
                annual_advance_payment: 42768.0,
                number_of_stores: "Two stores",
                number_of_products: 500,
                number_of_users: 40,
                features: [
                    "24/7 SUPPORT",
                    "SALES CHANNELS",
                    "PROMOTIONS (Market Places, Google Ads, Social Media",
                    "BILL OF MATERIAL CONFIGURATOR",
                    "DELIVERY COMFIRMATION",
                    "ORDER FULFILMENT",
                    "SALES CAMPAIGN",
                    "DISCOUNT VOUCHER",
                    "CHECKOUT PAYMENT SYSTEM",
                    "SSL CERTIFICATE",
                    "ABANDONED CART RECOVERY*",
                    "PROFESSIONAL REPORTS",
                    "THIRD-PARTY CALCULATED SHIPPING RATES",
                    "Show calculated rates with your own account or third-party couriers",
                ],
                transaction_percentage: {
                    cartalist: 1.2,
                    payment_gateway: 5,
                },
            },
            {
                license_name: "Start-Up-Advance",
                monthly_price: 9000.0,
                annual_price: 118800.0,
                annual_advance_payment: 106920.0,
                number_of_stores: "Multi stores",
                number_of_products: 2500,
                number_of_users: 100,
                features: [
                    "24/7 SUPPORT",
                    "SALES CHANNELS",
                    "PROMOTIONS (Market Places, Google Ads, Social Media",
                    "BILL OF MATERIAL CONFIGURATOR",
                    "DELIVERY COMFIRMATION",
                    "ORDER FULFILMENT",
                    "SALES CAMPAIGN",
                    "DISCOUNT VOUCHER",
                    "CHECKOUT PAYMENT SYSTEM",
                    "SSL CERTIFICATE",
                    "ABANDONED CART RECOVERY*",
                    "PROFESSIONAL REPORTS",
                    "THIRD-PARTY CALCULATED SHIPPING RATES",
                    "Show calculated rates with your own account or third-party couriers",
                ],
                transaction_percentage: {
                    cartalist: 1.2,
                    payment_gateway: 5,
                },
            },
            {
                license_name: "Start-Up-Alist",
                monthly_price: 18000.0,
                annual_price: 237600.0,
                annual_advance_payment: 213840.0,
                number_of_stores: "Multi stores",
                number_of_products: 5000,
                number_of_users: 200,
                features: [
                    "24/7 SUPPORT",
                    "SALES CHANNELS",
                    "PROMOTIONS (Market Places, Google Ads, Social Media",
                    "BILL OF MATERIAL CONFIGURATOR",
                    "DELIVERY COMFIRMATION",
                    "ORDER FULFILMENT",
                    "SALES CAMPAIGN",
                    "DISCOUNT VOUCHER",
                    "CHECKOUT PAYMENT SYSTEM",
                    "SSL CERTIFICATE",
                    "ABANDONED CART RECOVERY*",
                    "PROFESSIONAL REPORTS",
                    "THIRD-PARTY CALCULATED SHIPPING RATES",
                    "Show calculated rates with your own account or third-party couriers",
                ],
                transaction_percentage: {
                    cartalist: 1.2,
                    payment_gateway: 5,
                },
            },
            {
                license_name: "Start-Up-Alist",
                monthly_price: 36000.0,
                annual_price: 475200.0,
                annual_advance_payment: 427680.0,
                number_of_stores: "Multi stores",
                number_of_products: "unlimited",
                number_of_users: "unlimited",
                features: [
                    "24/7 SUPPORT",
                    "SALES CHANNELS",
                    "PROMOTIONS (Market Places, Google Ads, Social Media",
                    "BILL OF MATERIAL CONFIGURATOR",
                    "DELIVERY COMFIRMATION",
                    "ORDER FULFILMENT",
                    "SALES CAMPAIGN",
                    "DISCOUNT VOUCHER",
                    "CHECKOUT PAYMENT SYSTEM",
                    "SSL CERTIFICATE",
                    "ABANDONED CART RECOVERY*",
                    "PROFESSIONAL REPORTS",
                    "THIRD-PARTY CALCULATED SHIPPING RATES",
                    "Show calculated rates with your own account or third-party couriers",
                ],
                transaction_percentage: {
                    cartalist: 1.2,
                    payment_gateway: 5,
                },
            },
        ]);
    }
    AuthStateService.prototype.getPremadeLicenses = function () {
        return this.licenses$.asObservable();
    };
    AuthStateService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root",
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], AuthStateService);
    return AuthStateService;
}());



/***/ }),

/***/ "./src/app/core-modules/services/toast/toast.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/core-modules/services/toast/toast.service.ts ***!
  \**************************************************************/
/*! exports provided: ToastService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastService", function() { return ToastService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");



var ToastService = /** @class */ (function () {
    function ToastService(toastController) {
        this.toastController = toastController;
    }
    ToastService.prototype.presentToast = function (data) {
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
    ToastService.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] }
    ]; };
    ToastService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]])
    ], ToastService);
    return ToastService;
}());



/***/ }),

/***/ "./src/app/modules/admin-store/pages/pricing/pricing-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/admin-store/pages/pricing/pricing-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: PricingPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PricingPageRoutingModule", function() { return PricingPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _pricing_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pricing.page */ "./src/app/modules/admin-store/pages/pricing/pricing.page.ts");




var routes = [
    {
        path: '',
        component: _pricing_page__WEBPACK_IMPORTED_MODULE_3__["PricingPage"]
    }
];
var PricingPageRoutingModule = /** @class */ (function () {
    function PricingPageRoutingModule() {
    }
    PricingPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], PricingPageRoutingModule);
    return PricingPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/admin-store/pages/pricing/pricing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/modules/admin-store/pages/pricing/pricing.module.ts ***!
  \*********************************************************************/
/*! exports provided: PricingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PricingPageModule", function() { return PricingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _pricing_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pricing-routing.module */ "./src/app/modules/admin-store/pages/pricing/pricing-routing.module.ts");
/* harmony import */ var _pricing_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pricing.page */ "./src/app/modules/admin-store/pages/pricing/pricing.page.ts");








var PricingPageModule = /** @class */ (function () {
    function PricingPageModule() {
    }
    PricingPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _pricing_routing_module__WEBPACK_IMPORTED_MODULE_5__["PricingPageRoutingModule"],
            ],
            declarations: [_pricing_page__WEBPACK_IMPORTED_MODULE_6__["PricingPage"]],
        })
    ], PricingPageModule);
    return PricingPageModule;
}());



/***/ }),

/***/ "./src/app/modules/admin-store/pages/pricing/pricing.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/modules/admin-store/pages/pricing/pricing.page.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-slide {\n  height: 100vh;\n}\n\n.card_license {\n  border-radius: 5vw 5vw 5vw 5vw;\n  width: 70vw;\n  overflow: visible;\n  height: 68vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hZG1pbi1zdG9yZS9wYWdlcy9wcmljaW5nL0M6XFxVc2Vyc1xcTWFydmluXFxEb2N1bWVudHNcXEdpdEh1YlxcYWZyb2JcXGNsaWVudC9zcmNcXGFwcFxcbW9kdWxlc1xcYWRtaW4tc3RvcmVcXHBhZ2VzXFxwcmljaW5nXFxwcmljaW5nLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9hZG1pbi1zdG9yZS9wYWdlcy9wcmljaW5nL3ByaWNpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtBQ0NKOztBRENBO0VBQ0ksOEJBQUE7RUFFQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2FkbWluLXN0b3JlL3BhZ2VzL3ByaWNpbmcvcHJpY2luZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tc2xpZGV7XHJcbiAgICBoZWlnaHQ6MTAwdmg7XHJcbn1cclxuLmNhcmRfbGljZW5zZXtcclxuICAgIGJvcmRlci1yYWRpdXM6IDV2dyA1dncgNXZ3IDV2dztcclxuICBcclxuICAgIHdpZHRoOiA3MHZ3O1xyXG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XHJcbiAgICBoZWlnaHQ6IDY4dmg7XHJcbn0iLCJpb24tc2xpZGUge1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuXG4uY2FyZF9saWNlbnNlIHtcbiAgYm9yZGVyLXJhZGl1czogNXZ3IDV2dyA1dncgNXZ3O1xuICB3aWR0aDogNzB2dztcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG4gIGhlaWdodDogNjh2aDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/admin-store/pages/pricing/pricing.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/modules/admin-store/pages/pricing/pricing.page.ts ***!
  \*******************************************************************/
/*! exports provided: PricingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PricingPage", function() { return PricingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var src_app_core_modules_services_profile_profile_api_profile_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core-modules/services/profile/profile-api/profile-api.service */ "./src/app/core-modules/services/profile/profile-api/profile-api.service.ts");
/* harmony import */ var ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ts-md5/dist/md5 */ "./node_modules/ts-md5/dist/md5.js");
/* harmony import */ var ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var src_app_core_modules_services_auth_auth_state_auth_state_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core-modules/services/auth/auth-state/auth-state.service */ "./src/app/core-modules/services/auth/auth-state/auth-state.service.ts");
/* harmony import */ var src_app_core_modules_services_payments_payfast_facade_payfast_facade_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core-modules/services/payments/payfast-facade/payfast-facade.service */ "./src/app/core-modules/services/payments/payfast-facade/payfast-facade.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var src_app_core_modules_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core-modules/services/toast/toast.service */ "./src/app/core-modules/services/toast/toast.service.ts");
/* harmony import */ var src_app_core_modules_services_profile_profile_facade_profile_facade_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core-modules/services/profile/profile-facade/profile-facade.service */ "./src/app/core-modules/services/profile/profile-facade/profile-facade.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");














var PricingPage = /** @class */ (function () {
    function PricingPage(toastService, userApi, payFacade, _location, userFacade, authState, pickerCtrl, alertController, router) {
        this.toastService = toastService;
        this.userApi = userApi;
        this.payFacade = payFacade;
        this._location = _location;
        this.userFacade = userFacade;
        this.authState = authState;
        this.pickerCtrl = pickerCtrl;
        this.alertController = alertController;
        this.router = router;
        //Vars
        this.payfastForm = {};
        this.md5 = new ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_4__["Md5"]();
        this.paynow = false;
        this.recommended_license_index = [];
        //Form
        this.pricingForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            products_number: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](""),
        });
    }
    PricingPage.prototype.ionViewDidEnter = function () {
        this.slides.lockSwipes(true);
    };
    PricingPage.prototype.ngOnInit = function () {
        var _this = this;
        this.showBack = false;
        this.current_store = this.userFacade.getCurrentStore();
        this.authState.getPremadeLicenses().subscribe(function (res) {
            _this.licenses = res;
        }, function (err) {
            console.log(err);
        });
        this.slides.lockSwipes(true);
        this.show_licenses = false;
    };
    //Lisence is selected and assigned
    PricingPage.prototype.postLicense = function (license) {
        var store = this.userFacade.getCurrentStore();
        license.store_id = store._id;
        var today_ms = Date.now();
        var one_day_ms = 86400000;
        var one_month_ms = one_day_ms * 30;
        var one_year_ms = one_day_ms * 30 * 12;
        var month_end_period = today_ms + one_month_ms;
        var year_end_period = today_ms + one_year_ms;
        if (this.billing_cycle_selected == "yearly") {
            license.payed_amount = { amount: license.annual_price, type: "Yearly", end_date: year_end_period };
        }
        else {
            license.payed_amount = { amount: license.monthly_price, type: "Monthly", end_date: month_end_period };
        }
        //assign license
        this.selected_license = license;
        if (this.billing_cycle_selected == "yearly" && this.license_focus == license.license_name) {
            this.presentAlertConfirmYearly();
        }
        else if (this.billing_cycle_selected == "mon" && this.license_focus == license.license_name) {
            this.presentAlertConfirmMonth();
        }
        else {
            this.presentAlertConfirmMonth();
            this.billing_cycle_selected = "mon";
        }
    };
    //Send form to payfast
    PricingPage.prototype.onSub = function (info) {
        var license = this.selected_license;
        this.payFacade.temporaryOrder(info, license);
    };
    PricingPage.prototype.payfastNav = function () {
        var _this = this;
        this.userApi.getUser().subscribe(function (res) {
            _this.router.navigate(["payment"], {
                state: {
                    user_email: res.user.email,
                    selected_license: _this.selected_license,
                    billing_cycle_selected: _this.billing_cycle_selected
                }
            });
        }, function (err) {
            console.log(err);
        });
    };
    PricingPage.prototype.randomize = function () {
        // Randomize chars
        var length = 10;
        var chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var result = "";
        for (var i = length; i > 0; --i)
            result += chars[Math.floor(Math.random() * chars.length)];
        return result;
    };
    PricingPage.prototype.backClicked = function () {
        this._location.back();
    };
    PricingPage.prototype.next = function () {
        this.slides.lockSwipes(false);
        this.slides.slideNext();
        this.slides.lockSwipes(true);
        window.scroll(0, 0);
    };
    PricingPage.prototype.back = function () {
        this.slides.lockSwipes(false);
        this.slides.slidePrev();
        this.slides.lockSwipes(true);
    };
    PricingPage.prototype.showBasicPicker = function (slides) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var opts, picker;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        opts = {
                            buttons: [
                                {
                                    text: "cancel",
                                    role: "cancel",
                                },
                                {
                                    text: "done",
                                },
                            ],
                            columns: [
                                {
                                    name: "products",
                                    options: [
                                        { text: "No Products", value: "default" },
                                        { text: "0 - 5", value: "5" },
                                        { text: "5 - 25", value: "25" },
                                        { text: "25 - 50", value: "50" },
                                        { text: "50 - 75", value: "75" },
                                        { text: "75 - 500", value: "500" },
                                        { text: "500 - 2500", value: "2500" },
                                        { text: "2500 - 5000", value: "5000" },
                                        { text: "unlimited", value: "unlimited" },
                                    ],
                                },
                                {
                                    name: "users",
                                    options: [
                                        { text: "No Users", value: "default" },
                                        { text: "1", value: "1" },
                                        { text: "2", value: "2" },
                                        { text: "2 - 5", value: "5" },
                                        { text: "5 - 20", value: "20" },
                                        { text: "20 - 40", value: "40" },
                                        { text: "40 - 100", value: "100" },
                                        { text: "100 - 200", value: "200" },
                                        { text: "unlimited", value: "unlimited" },
                                    ],
                                },
                            ],
                        };
                        return [4 /*yield*/, this.pickerCtrl.create(opts)];
                    case 1:
                        picker = _a.sent();
                        picker.present();
                        picker.onDidDismiss().then(function (data) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                            var col, col1;
                            var _this = this;
                            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, picker.getColumn("products")];
                                    case 1:
                                        col = _a.sent();
                                        return [4 /*yield*/, picker.getColumn("users")];
                                    case 2:
                                        col1 = _a.sent();
                                        this.number_products = col.options[col.selectedIndex].value;
                                        this.number_users = col1.options[col1.selectedIndex].value;
                                        console.log(this.number_products, this.number_users);
                                        if (this.number_products == 'default') {
                                            this.toastService.presentToast("select Your Number of Products");
                                        }
                                        else if (this.number_users == "default") {
                                            this.toastService.presentToast("select your Number of Users");
                                        }
                                        else {
                                            this.next();
                                            this.outPutLicense();
                                            this.show_licenses = true;
                                            this.toastService.presentToast("Slide to see other licenses");
                                            this.license_focus = this.recommended_license_index[0].license_name;
                                            setTimeout(function () {
                                                _this.license_focus = "none";
                                                _this.toastService.presentToast("Select billing cycle by pressing /mon or /Year");
                                            }, 3000);
                                        }
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                        return [2 /*return*/];
                }
            });
        });
    };
    PricingPage.prototype.outPutLicense = function () {
        var _this = this;
        var y;
        this.recommended_license_index = this.licenses.filter(function (license) {
            return license.number_of_products == _this.number_products || license.number_of_users == _this.number_users;
        });
        y = this.licenses.filter(function (license) {
            return license !== _this.recommended_license_index[0]; //|| license !== this.recommended_license_index[1]
        });
        if (this.recommended_license_index.length > 1) {
            this.other_licenses = y.filter(function (license) {
                return license !== _this.recommended_license_index[1];
            });
        }
        else {
            this.other_licenses = y;
        }
        console.log(this.other_licenses);
        console.log(this.recommended_license_index);
        //for (let index = 0; index < this.licenses.length; index++) {
        // if(this.number_products == this.licenses[index].number_of_products || this.number_users == this.licenses[index].number_of_users){
        // this.recommended_license_index.push(this.licenses[index])
        //y.push(index)
        // }
        // } 
        //for( let x = 0; x < y.length; x++){
        // this.licenses.splice(y[x],1)
        // }
    };
    PricingPage.prototype.slideChange = function (event) {
        var _this = this;
        this.slides.getActiveIndex().then(function (data) {
            _this.slides_number = data + 1;
            if (_this.slides_number == 1) {
                _this.showBack = false;
            }
            else if (_this.slides_number > 1) {
                _this.showBack = true;
            }
        });
    };
    PricingPage.prototype.presentAlertConfirmMonth = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            cssClass: 'my-custom-class',
                            header: 'Confirm Billing Cycle!',
                            message: 'You have Chosen to pay Monthly',
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        console.log('Confirm Cancel: blah');
                                    }
                                }, {
                                    text: 'Okay',
                                    handler: function () {
                                        _this.paynow = true;
                                        _this.slides.lockSwipes(false);
                                        _this.slides.slideNext();
                                        _this.slides.lockSwipes(true);
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PricingPage.prototype.presentAlertConfirmYearly = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            cssClass: 'my-custom-class',
                            header: 'Confirm Billing Cycle!',
                            message: 'You have Chosen to pay Per Year',
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        console.log('Confirm Cancel: blah');
                                    }
                                }, {
                                    text: 'Okay',
                                    handler: function () {
                                        _this.paynow = true;
                                        _this.slides.lockSwipes(false);
                                        _this.slides.slideNext();
                                        _this.slides.lockSwipes(true);
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PricingPage.prototype.showAnnual = function (license_name, data) {
        this.license_focus = license_name;
        this.billing_cycle_selected = data;
    };
    PricingPage.ctorParameters = function () { return [
        { type: src_app_core_modules_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_9__["ToastService"] },
        { type: src_app_core_modules_services_profile_profile_api_profile_api_service__WEBPACK_IMPORTED_MODULE_3__["ProfileApiService"] },
        { type: src_app_core_modules_services_payments_payfast_facade_payfast_facade_service__WEBPACK_IMPORTED_MODULE_7__["PayfastFacadeService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"] },
        { type: src_app_core_modules_services_profile_profile_facade_profile_facade_service__WEBPACK_IMPORTED_MODULE_10__["UserFacadeService"] },
        { type: src_app_core_modules_services_auth_auth_state_auth_state_service__WEBPACK_IMPORTED_MODULE_6__["AuthStateService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["PickerController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("userSlides", { static: true }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonSlides"])
    ], PricingPage.prototype, "slides", void 0);
    PricingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-pricing",
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./pricing.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin-store/pages/pricing/pricing.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./pricing.page.scss */ "./src/app/modules/admin-store/pages/pricing/pricing.page.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_core_modules_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_9__["ToastService"],
            src_app_core_modules_services_profile_profile_api_profile_api_service__WEBPACK_IMPORTED_MODULE_3__["ProfileApiService"],
            src_app_core_modules_services_payments_payfast_facade_payfast_facade_service__WEBPACK_IMPORTED_MODULE_7__["PayfastFacadeService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"],
            src_app_core_modules_services_profile_profile_facade_profile_facade_service__WEBPACK_IMPORTED_MODULE_10__["UserFacadeService"],
            src_app_core_modules_services_auth_auth_state_auth_state_service__WEBPACK_IMPORTED_MODULE_6__["AuthStateService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["PickerController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"]])
    ], PricingPage);
    return PricingPage;
}());



/***/ })

}]);
//# sourceMappingURL=src-app-modules-admin-store-pages-pricing-pricing-module.js.map