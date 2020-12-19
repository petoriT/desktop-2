(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-modules-admin-store-pages-dashboard-dashboard-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin-store/pages/dashboard/components/report-selector/report-selector.component.html":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin-store/pages/dashboard/components/report-selector/report-selector.component.html ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (" <ion-list-header>Sales Reports</ion-list-header>\n      <p>\n        <ion-chip outline  [routerLink]=\"['/admin-store/store/report']\" (click) = \"gotTo('unit_sold')\" color=\"primary\">\n          <ion-label>Unit  sold</ion-label>\n        </ion-chip>\n\n        <ion-chip outline  color=\"secondary\">\n        \n          <ion-label>Sales</ion-label>\n        </ion-chip>\n        <ion-chip outline  color=\"tertiary\">\n       \n          <ion-label>Cost of Sale</ion-label>\n        </ion-chip>\n        <ion-chip outline  color=\"medium\">\n       \n          <ion-label>Discount Allowed</ion-label>\n        </ion-chip>\n        <ion-chip outline  color=\"dark\">\n       \n          <ion-label>Tax Report</ion-label>\n        </ion-chip>\n      </p>\n\n  <ion-list-header>Stock Reports</ion-list-header>\n      <p>\n        <ion-chip  outline  color=\"secondary\">\n          <ion-label>Stock levels</ion-label>\n        </ion-chip>\n\n        <ion-chip outline  color=\"primary\">\n        \n          <ion-label>Total Items out</ion-label>\n        </ion-chip>\n        <ion-chip outline  color=\"tertiary\">\n       \n          <ion-label> Return To Supplier</ion-label>\n        </ion-chip>\n           <ion-chip outline  color=\"medium\">\n       \n          <ion-label> BOM Listing Report</ion-label>\n        </ion-chip>\n            <ion-chip outline  color=\"dark\">\n       \n          <ion-label> Stock Listing Report</ion-label>\n        </ion-chip>\n         <ion-chip outline  color=\"primary\">\n       \n          <ion-label> Cost Price</ion-label>\n        </ion-chip>\n      </p>\n\n    <ion-list-header>Buyers Reports</ion-list-header>\n      <p>\n        <ion-chip outline  color=\"primary\">\n          <ion-label>Consumer Spend</ion-label>\n        </ion-chip>\n\n        <ion-chip outline  color=\"dark\">\n        \n          <ion-label>Add to cart</ion-label>\n        </ion-chip>\n        <ion-chip outline  color=\"primary\">\n       \n          <ion-label> unsuccesful Checkout</ion-label>\n        </ion-chip>\n          <ion-chip outline  color=\"tertiary\">\n       \n          <ion-label> Store Visitst</ion-label>\n        </ion-chip>\n      </p>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin-store/pages/dashboard/components/widgets/progress-bar/progress-bar.component.html":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin-store/pages/dashboard/components/widgets/progress-bar/progress-bar.component.html ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n                <ion-grid>\n                  <ion-row>\n                    <ion-col size=\"6\">\n\n                        <ion-card color=\"tertiary\">\n                          <ion-grid>\n                            <ion-row>\n                              <ion-col size= 4>\n                                <ion-icon name=\"journal-outline\"></ion-icon>\n                              </ion-col>\n                              <ion-col size=8>\n                                <ion-text style=\"color:white\">\n                                  Revenue\n                                </ion-text>\n                                <ion-icon color=\"success\" name=\"arrow-up-outline\"></ion-icon>\n                              </ion-col>\n                            </ion-row>\n                                <ion-row>\n                              <ion-col class=\"center\" size=12>\n                                 <ion-text style=\"color:white\">\n                                  <h4>\n                                    {{revenue | currency: 'R'}}\n                                  </h4>\n\n                                </ion-text>\n                              </ion-col>\n                            </ion-row>\n                          </ion-grid>\n                          \n                        </ion-card>\n\n                    </ion-col>\n                      <ion-col size=\"6\">\n\n                        <ion-card color=\"dark\">\n                          <ion-grid>\n                            <ion-row>\n                              <ion-col size= 4>\n                               <ion-icon name=\"shirt-outline\"></ion-icon>\n                              </ion-col>\n                              <ion-col  size=8>\n                                <ion-text>\n                                  Sales\n                                </ion-text>\n                          <ion-icon color=\"danger\" name=\"arrow-down-outline\"></ion-icon>\n                              </ion-col>\n                            </ion-row>\n                            <ion-row>\n                              <ion-col class=\"center\" size=12>\n                                      <ion-text>\n                                  <h4>\n                                    {{sales }}\n                                  </h4>\n\n                                </ion-text>\n                              </ion-col>\n                            </ion-row>\n                          </ion-grid>\n                          \n                        </ion-card>\n\n                    </ion-col>\n                  </ion-row>\n                </ion-grid>\n                <div class=\"card-body\" style=\"padding-top: 0px;padding-bottom: 0px;\">\n                  <h4 class=\"small font-weight-bold\">Sales Conversion<span class=\"float-right\">20%</span></h4>\n                  <div class=\"progress mb-4\">\n                    <div class=\"progress-bar \" role=\"progressbar\" style=\"width: 20% ;background: #018786;\" aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                  </div>\n                  <h4 class=\"small font-weight-bold\">Order fullfilled <span class=\"float-right\">40%</span></h4>\n                  <div class=\"progress mb-4\">\n                    <div class=\"progress-bar \" role=\"progressbar\" style=\"width: 40%; border-radius: 0px;background: #ffd700;\" aria-valuenow=\"40\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                  </div>\n                  \n                 \n                </div>\n     ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin-store/pages/dashboard/components/widgets/users/users.component.html":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin-store/pages/dashboard/components/widgets/users/users.component.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ngx-charts-bar-horizontal\n  [view]=\"view\"\n  [scheme]=\"colorScheme\"\n  [results]=\"single\"\n  [gradient]=\"gradient\"\n  [xAxis]=\"showXAxis\"\n  [yAxis]=\"showYAxis\"\n  [legend]=\"showLegend\"\n  [showXAxisLabel]=\"showXAxisLabel\"\n  [showYAxisLabel]=\"showYAxisLabel\"\n  [xAxisLabel]=\"xAxisLabel\"\n  [yAxisLabel]=\"yAxisLabel\"\n  (select)=\"onSelect($event)\"\n  (activate)=\"onActivate($event)\"\n  (deactivate)=\"onDeactivate($event)\">\n</ngx-charts-bar-horizontal>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin-store/pages/dashboard/components/widgetsnav/widgetsnav.component.html":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin-store/pages/dashboard/components/widgetsnav/widgetsnav.component.html ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--<ion-item style=\"margin-top: auto;\">\n  <ion-toolbar>\n\n    \n      <ion-button fill=\"solid\" expand=\"full\">\n        <ion-label size=\"small\" (click)=\"user()\">Users</ion-label>\n      </ion-button>\n\n      <ion-button fill=\"solid\" expand=\"full\">\n        <ion-label size=\"small\" (click)=\"sales()\">Sales</ion-label>\n      </ion-button>\n\n      <ion-button fill=\"solid\" expand=\"full\">\n        <ion-label size=\"small\">Traffic</ion-label>\n      </ion-button>\n\n      <ion-button fill=\"solid\" expand=\"full\">\n        <ion-label size=\"small\">Ads</ion-label>\n      </ion-button>\n\n   \n  </ion-toolbar>\n<ion-item>-->\n\n  <ion-fab vertical=\"top\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button (click)=\"showExp()\"color=\"tertiary\" size=\"small\"style=\" --box-shadow:none\">\n      <ion-icon color=\"primary\"name=\"pulse\"></ion-icon>\n    </ion-fab-button>\n    <ion-fab-list  side=\"bottom\">\n      <ion-button (click)=\"showExpAgain()\"color=\"tertiary\"size=\"small\"fill=\"solid\" expand=\"full\">\n        <ion-label color=\"primary\" size=\"small\" (click)=\"user()\">Users</ion-label>\n      </ion-button>\n\n      <ion-button (click)=\"showExpAgain()\" color=\"tertiary\" size=\"small\" fill=\"solid\" expand=\"full\">\n        <ion-label color=\"primary\" size=\"small\" (click)=\"sales()\">Sales</ion-label>\n      </ion-button>\n\n      <ion-button (click)=\"showExpAgain()\" color=\"tertiary\" size=\"small\" fill=\"solid\" expand=\"full\">\n        <ion-label color=\"primary\" size=\"small\">Traffic</ion-label>\n      </ion-button>\n\n      <ion-button (click)=\"showExpAgain()\" color=\"tertiary\" size=\"small\" fill=\"solid\" expand=\"full\">\n        <ion-label color=\"primary\" size=\"small\">Ads</ion-label>\n      </ion-button>\n    </ion-fab-list>\n  </ion-fab>\n\n  <ion-fab *ngIf=\"showExpB\" color=\"tertiary\"vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button color=\"tertiary\" size=\"small\"style=\" --box-shadow:none\">\n      <ion-icon color=\"primary\"name=\"expand\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin-store/pages/dashboard/dashboard.page.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin-store/pages/dashboard/dashboard.page.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--<ion-content>\n  <ion-card\n    color=\"primary\"\n    style=\"\n      height: 50%;\n      box-shadow: none !important;\n      border-radius: 0px;\n      margin: 0px;\n    \"\n  >\n    <ion-card-header style=\"padding-top: 5px;\">\n      <ion-card-title style=\"text-align: center; color: #03dac6;\"\n        >{{datas}}</ion-card-title\n      >\n    </ion-card-header>\n    <hr\n      style=\"top: -25px; margin-left: auto; margin-right: auto; width: 80%;\"\n    />\n    <app-widgetsnav (selected)=\"accept($event)\"></app-widgetsnav>\n\n    <ion-card-content style=\"top: -50px;\">\n\n      <app-users *ngIf=\"users\"></app-users>\n    </ion-card-content>\n  </ion-card>\n\n  <div style=\"background-color: #018786;\">\n    <div\n      style=\"\n        background-color: #f1f3f6;\n        border-radius: 65px 65px 0px 0px;\n        box-shadow: inset 0 10px 10px -10px rgba(0, 0, 0, 0.8);\n      \"\n    >\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"6\">\n            <ion-toolbar style=\"margin: auto; width: 100%;\">\n            \n              <div class=\"container\">\n                <a class=\"cta\" [routerLink]=\"['/admin-store/store/sales']\">\n                  <ion-grid>\n                    <ion-row>\n                      <ion-col class=\"ion-no-padding\" size=\"12\">\n                        <a\n                          ><ion-icon\n                            color=\"primary\"\n                            size=\"large\"\n                            slot=\"icon-only\"\n                            name=\"card\"\n                          ></ion-icon\n                        ></a>\n                      </ion-col>\n                      <ion-col size=\"12\">\n                        <div style=\"text-align: center;\">\n                          <ion-text color=\"primary\">Sales</ion-text>\n                        </div>\n                      </ion-col>\n                    </ion-row>\n                  </ion-grid>\n                </a>\n              </div>\n            </ion-toolbar>\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-toolbar style=\"margin: auto; width: 100%;\">\n             \n              <div (click)=\"goProduct()\" class=\"container\">\n                <a class=\"cta\">\n                  <ion-grid>\n                    <ion-row>\n                      <ion-col class=\"ion-no-padding\" size=\"12\">\n                        <a\n                          ><ion-icon\n                            size=\"large\"\n                            slot=\"icon-only\"\n                            name=\"basket\"\n                          ></ion-icon\n                        ></a>\n                      </ion-col>\n                      <ion-col size=\"12\">\n                        <div style=\"text-align: center;\">\n                          <ion-text>Product</ion-text>\n                        </div>\n                      </ion-col>\n                    </ion-row>\n                  </ion-grid>\n                </a>\n              </div>\n            </ion-toolbar>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"6\">\n            <ion-toolbar style=\"margin: auto; width: 100%;\">\n           \n              <div class=\"container\">\n                <a class=\"cta\" [routerLink]=\"['/admin-store/store/users']\">\n                  <ion-grid>\n                    <ion-row>\n                      <ion-col class=\"ion-no-padding\" size=\"12\">\n                        <a\n                          ><ion-icon\n                            color=\"primary\"\n                            size=\"large\"\n                            slot=\"icon-only\"\n                            name=\"people\"\n                          ></ion-icon\n                        ></a>\n                      </ion-col>\n                      <ion-col size=\"12\">\n                        <div style=\"text-align: center;\">\n                          <ion-text color=\"primary\">Users</ion-text>\n                        </div>\n                      </ion-col>\n                    </ion-row>\n                  </ion-grid>\n                </a>\n              </div>\n            </ion-toolbar>\n          </ion-col>\n          <ion-col size=\"6\">\n\n\n\n\n\n       <ion-toolbar style=\"margin: auto; width: 100%;\">\n          \n              <div class=\"container\">\n                <a class=\"cta\" [routerLink]=\"['/admin-store/store/settings']\">\n                  <ion-grid>\n                    <ion-row>\n                      <ion-col size=\"12\">\n                        <a>\n                          <ion-icon\n                            color=\"primary\"\n                            size=\"large\"\n                            slot=\"icon-only\"\n                            name=\"settings\"\n                          ></ion-icon\n                        ></a>\n                      </ion-col>\n                      <ion-col size=\"12\">\n                        <div style=\"text-align: center;\">\n                          <ion-text color=\"primary\">Settings</ion-text>\n                        </div>\n                      </ion-col>\n                    </ion-row>\n                  </ion-grid>\n                </a>\n              </div>\n            </ion-toolbar>\n\n\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n  </div>\n</ion-content> -->\n<app-header></app-header>\n<ion-grid class=\"ion-no-padding\">\n  <ion-row class=\"ion-no-padding\">\n    <ion-col class=\"ion-no-padding\" style=\"height: 55%\" size=12>\n      <div class=\"top\">\n        <ion-card [class]=\"dashStatus\" class=\"dash\">\n          <h6 *ngIf=\"!viewReports \" style=\"text-align: center; margin-bottom: 5px;\">Dashboard</h6>\n          <h6 *ngIf=\"viewReports \" style=\"text-align: center; margin-bottom: 5px;\">Reports</h6>\n          <ion-fab *ngIf=\"!viewReports \" horizontal=\"end\" style=\"top: 6%;\">\n            <ion-fab-button color=\"white\" style=\"width: 24px;height: 24px\" size=\"small\">\n              <ion-icon size=\"small\" color=\"primary\" name=\"expand\"></ion-icon>\n            </ion-fab-button>\n          </ion-fab>\n          <hr style=\"    width: 80%;\n    border-bottom: 1px groove ;margin-top: 0px;margin: 0px !important ; \">\n\n\n          <app-progress-bar *ngIf=\"!viewReports \"></app-progress-bar>\n          <app-report-selector *ngIf=\"viewReports \"></app-report-selector>\n\n\n        </ion-card>\n        <ion-card class=\"center\"\n          style=\" margin-top: 1px !important; width: 40vw;height: 5vh;float:right ; border-radius: 0vw 0vw 30vw 30vw; \">\n          <ion-button *ngIf=\"!viewReports\" (click)=\"reportSelection(true)\" size=\"small\" shape=\"round\" fill=\"clear\">\n            <ion-icon color=\"tertiary\" name=\"trending-up\"></ion-icon> <sub style=\"left:1vw\">Reports</sub>\n          </ion-button>\n          <ion-button *ngIf=\"viewReports\" (click)=\"reportSelection(false)\" size=\"small\" shape=\"round\" fill=\"clear\">\n            <ion-icon color=\"tertiary\" name=\"chevron-up\"></ion-icon> <sub style=\"left:1vw\">Minimise</sub>\n          </ion-button>\n          <ion-ripple-effect></ion-ripple-effect>\n        </ion-card>\n        <!--<app-bar-chart></app-bar-chart>-->\n      </div>\n    </ion-col>\n    <ion-col class=\"ion-no-padding\" style=\"top: 20vh;\" size=12>\n      <div *ngIf=\"!viewReports \" class=\"bottom\">\n        <ion-grid>\n          <ion-row>\n            <ion-col size=4>\n              <a [routerLink]=\"['/admin-store/store/sales']\">\n                <ion-card color=\"secondary\" class=\"option center\">\n                  <img style=\"max-width: 50%; display: block;\"\n                    src=\"./assets/icon/sign · ecommerce · shopping · tag · sale.svg\" alt=\"\">\n                </ion-card>\n                <ion-label class=\"center\">\n                  <sub>\n                    SALES\n                  </sub>\n                </ion-label>\n\n              </a>\n\n            </ion-col>\n\n            <ion-col size=4>\n              <a (click)=\"goProduct()\">\n                <ion-card color=\"tertiary\" class=\"option center\">\n                  <img style=\"max-width: 50%; display: block;\" src=\"./assets/icon/Vector.svg\" alt=\"\">\n                </ion-card>\n                <ion-label class=\"center\">\n                  <sub>\n                    PRODUCTS\n                  </sub>\n                </ion-label>\n              </a>\n            </ion-col>\n\n            <ion-col size=4>\n              <a [routerLink]=\"['/admin-store/store/users']\">\n                <ion-card color=\"primary\" class=\"option center\">\n                  <img style=\"max-width: 50%; display: block;\"\n                    src=\"./assets/icon/users divIcons made by a href=httpswww.flaticon.comauthorssrip title=sripsripa from a href=httpswww.flaticon.com title=Flaticonwww.flaticon.comadiv 1.svg\">\n\n\n                </ion-card>\n                <ion-label class=\"center\">\n                  <sub>\n                    USERS\n                  </sub>\n                </ion-label>\n              </a>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </div>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n\n<app-footer></app-footer>");

/***/ }),

/***/ "./src/app/modules/admin-store/pages/dashboard/components/dashboard-components.module.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/admin-store/pages/dashboard/components/dashboard-components.module.ts ***!
  \***********************************************************************************************/
/*! exports provided: DashboardComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponentsModule", function() { return DashboardComponentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _widgetsnav_widgetsnav_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./widgetsnav/widgetsnav.component */ "./src/app/modules/admin-store/pages/dashboard/components/widgetsnav/widgetsnav.component.ts");
/* harmony import */ var _widgets_users_users_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./widgets/users/users.component */ "./src/app/modules/admin-store/pages/dashboard/components/widgets/users/users.component.ts");
/* harmony import */ var _widgets_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./widgets/progress-bar/progress-bar.component */ "./src/app/modules/admin-store/pages/dashboard/components/widgets/progress-bar/progress-bar.component.ts");
/* harmony import */ var _report_selector_report_selector_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./report-selector/report-selector.component */ "./src/app/modules/admin-store/pages/dashboard/components/report-selector/report-selector.component.ts");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/expansion.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/select.es5.js");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng2-charts */ "./node_modules/ng2-charts/__ivy_ngcc__/fesm2015/valor-software-ng2-charts.js");














var DashboardComponentsModule = /** @class */ (function () {
    function DashboardComponentsModule() {
    }
    DashboardComponentsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _widgetsnav_widgetsnav_component__WEBPACK_IMPORTED_MODULE_6__["WidgetsnavComponent"],
                _widgets_users_users_component__WEBPACK_IMPORTED_MODULE_7__["UsersComponent"],
                _widgets_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_8__["ProgressBarComponent"],
                _report_selector_report_selector_component__WEBPACK_IMPORTED_MODULE_9__["ReportSelectorComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MatExpansionModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"],
                ng2_charts__WEBPACK_IMPORTED_MODULE_12__["ChartsModule"]
            ],
            exports: [
                _widgetsnav_widgetsnav_component__WEBPACK_IMPORTED_MODULE_6__["WidgetsnavComponent"],
                _widgets_users_users_component__WEBPACK_IMPORTED_MODULE_7__["UsersComponent"],
                _widgets_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_8__["ProgressBarComponent"],
                _report_selector_report_selector_component__WEBPACK_IMPORTED_MODULE_9__["ReportSelectorComponent"]
            ],
            entryComponents: []
        })
    ], DashboardComponentsModule);
    return DashboardComponentsModule;
}());



/***/ }),

/***/ "./src/app/modules/admin-store/pages/dashboard/components/data.service.ts":
/*!********************************************************************************!*\
  !*** ./src/app/modules/admin-store/pages/dashboard/components/data.service.ts ***!
  \********************************************************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var DataService = /** @class */ (function () {
    function DataService() {
        this.messageSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]("users");
        this.currentMessage = this.messageSource.asObservable();
    }
    DataService.prototype.changeMessage = function (message) {
        this.messageSource.next(message);
    };
    DataService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/modules/admin-store/pages/dashboard/components/report-selector/report-selector.component.scss":
/*!***************************************************************************************************************!*\
  !*** ./src/app/modules/admin-store/pages/dashboard/components/report-selector/report-selector.component.scss ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4tc3RvcmUvcGFnZXMvZGFzaGJvYXJkL2NvbXBvbmVudHMvcmVwb3J0LXNlbGVjdG9yL3JlcG9ydC1zZWxlY3Rvci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/admin-store/pages/dashboard/components/report-selector/report-selector.component.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/modules/admin-store/pages/dashboard/components/report-selector/report-selector.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: ReportSelectorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportSelectorComponent", function() { return ReportSelectorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var src_app_core_modules_services_reports_report_facade_report_facade_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core-modules/services/reports/report-facade/report-facade.service */ "./src/app/core-modules/services/reports/report-facade/report-facade.service.ts");
/* harmony import */ var src_app_core_modules_services_reports_report_state_report_state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core-modules/services/reports/report-state/report-state.service */ "./src/app/core-modules/services/reports/report-state/report-state.service.ts");




var ReportSelectorComponent = /** @class */ (function () {
    function ReportSelectorComponent(reportState, reportsFacade) {
        this.reportState = reportState;
        this.reportsFacade = reportsFacade;
    }
    ReportSelectorComponent.prototype.ngOnInit = function () {
    };
    ReportSelectorComponent.prototype.gotTo = function (data) {
        var obj = {
            "a": "1"
        };
        this.reportState.updateReportStatus(obj);
    };
    ReportSelectorComponent.ctorParameters = function () { return [
        { type: src_app_core_modules_services_reports_report_state_report_state_service__WEBPACK_IMPORTED_MODULE_3__["ReportStateService"] },
        { type: src_app_core_modules_services_reports_report_facade_report_facade_service__WEBPACK_IMPORTED_MODULE_2__["ReportFacadeService"] }
    ]; };
    ReportSelectorComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-report-selector',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./report-selector.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin-store/pages/dashboard/components/report-selector/report-selector.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./report-selector.component.scss */ "./src/app/modules/admin-store/pages/dashboard/components/report-selector/report-selector.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_core_modules_services_reports_report_state_report_state_service__WEBPACK_IMPORTED_MODULE_3__["ReportStateService"],
            src_app_core_modules_services_reports_report_facade_report_facade_service__WEBPACK_IMPORTED_MODULE_2__["ReportFacadeService"]])
    ], ReportSelectorComponent);
    return ReportSelectorComponent;
}());



/***/ }),

/***/ "./src/app/modules/admin-store/pages/dashboard/components/widgets/data.ts":
/*!********************************************************************************!*\
  !*** ./src/app/modules/admin-store/pages/dashboard/components/widgets/data.ts ***!
  \********************************************************************************/
/*! exports provided: single */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "single", function() { return single; });
var single = [
    {
        "name": "Jan",
        "value": 894
    },
    {
        "name": "Feb",
        "value": 500
    },
    {
        "name": "Mar",
        "value": 720
    },
    {
        "name": "Apr",
        "value": 1652
    },
    {
        "name": "May",
        "value": 1485
    }
];


/***/ }),

/***/ "./src/app/modules/admin-store/pages/dashboard/components/widgets/progress-bar/progress-bar.component.scss":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/modules/admin-store/pages/dashboard/components/widgets/progress-bar/progress-bar.component.scss ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4tc3RvcmUvcGFnZXMvZGFzaGJvYXJkL2NvbXBvbmVudHMvd2lkZ2V0cy9wcm9ncmVzcy1iYXIvcHJvZ3Jlc3MtYmFyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/admin-store/pages/dashboard/components/widgets/progress-bar/progress-bar.component.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/modules/admin-store/pages/dashboard/components/widgets/progress-bar/progress-bar.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: ProgressBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressBarComponent", function() { return ProgressBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var ProgressBarComponent = /** @class */ (function () {
    function ProgressBarComponent() {
        this.revenue = 5000;
        this.sales = 2520;
    }
    ProgressBarComponent.prototype.ngOnInit = function () { };
    ProgressBarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-progress-bar',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./progress-bar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin-store/pages/dashboard/components/widgets/progress-bar/progress-bar.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./progress-bar.component.scss */ "./src/app/modules/admin-store/pages/dashboard/components/widgets/progress-bar/progress-bar.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], ProgressBarComponent);
    return ProgressBarComponent;
}());



/***/ }),

/***/ "./src/app/modules/admin-store/pages/dashboard/components/widgets/users/users.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/admin-store/pages/dashboard/components/widgets/users/users.component.scss ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4tc3RvcmUvcGFnZXMvZGFzaGJvYXJkL2NvbXBvbmVudHMvd2lkZ2V0cy91c2Vycy91c2Vycy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/admin-store/pages/dashboard/components/widgets/users/users.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/admin-store/pages/dashboard/components/widgets/users/users.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data */ "./src/app/modules/admin-store/pages/dashboard/components/widgets/data.ts");



var UsersComponent = /** @class */ (function () {
    function UsersComponent() {
        this.view = [220, 200];
        // options
        this.showXAxis = true;
        this.showYAxis = true;
        this.gradient = false;
        this.showLegend = false;
        this.showXAxisLabel = false;
        this.yAxisLabel = 'Months';
        this.showYAxisLabel = false;
        this.xAxisLabel = 'Users';
        this.colorScheme = {
            domain: ['#03dac6', '#fef4a9', '#03dac6', '#fef4a9', '#03dac6']
        };
        Object.assign(this, { single: _data__WEBPACK_IMPORTED_MODULE_2__["single"] });
    }
    UsersComponent.prototype.ngOnInit = function () { };
    UsersComponent.prototype.onSelect = function (data) {
        console.log('Item clicked', JSON.parse(JSON.stringify(data)));
    };
    UsersComponent.prototype.onActivate = function (data) {
        console.log('Activate', JSON.parse(JSON.stringify(data)));
    };
    UsersComponent.prototype.onDeactivate = function (data) {
        console.log('Deactivate', JSON.parse(JSON.stringify(data)));
    };
    UsersComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-users',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./users.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin-store/pages/dashboard/components/widgets/users/users.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./users.component.scss */ "./src/app/modules/admin-store/pages/dashboard/components/widgets/users/users.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "./src/app/modules/admin-store/pages/dashboard/components/widgetsnav/widgetsnav.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/admin-store/pages/dashboard/components/widgetsnav/widgetsnav.component.scss ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-item {\n  --ion-background-color:white;\n}\n\nion-fab-list {\n  right: 0px;\n  align-items: unset;\n  top: -13px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hZG1pbi1zdG9yZS9wYWdlcy9kYXNoYm9hcmQvY29tcG9uZW50cy93aWRnZXRzbmF2L0M6XFxVc2Vyc1xcTWFydmluXFxEb2N1bWVudHNcXEdpdEh1YlxcYWZyb2JcXGNsaWVudC9zcmNcXGFwcFxcbW9kdWxlc1xcYWRtaW4tc3RvcmVcXHBhZ2VzXFxkYXNoYm9hcmRcXGNvbXBvbmVudHNcXHdpZGdldHNuYXZcXHdpZGdldHNuYXYuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvYWRtaW4tc3RvcmUvcGFnZXMvZGFzaGJvYXJkL2NvbXBvbmVudHMvd2lkZ2V0c25hdi93aWRnZXRzbmF2LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNEJBQUE7QUNDSjs7QURFQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUNDQSIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4tc3RvcmUvcGFnZXMvZGFzaGJvYXJkL2NvbXBvbmVudHMvd2lkZ2V0c25hdi93aWRnZXRzbmF2LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWl0ZW17XG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcbn1cblxuaW9uLWZhYi1saXN0IHtcbnJpZ2h0OiAwcHg7XG5hbGlnbi1pdGVtczogdW5zZXQ7XG50b3A6IC0xM3B4O1xufVxuIiwiaW9uLWl0ZW0ge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xufVxuXG5pb24tZmFiLWxpc3Qge1xuICByaWdodDogMHB4O1xuICBhbGlnbi1pdGVtczogdW5zZXQ7XG4gIHRvcDogLTEzcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/admin-store/pages/dashboard/components/widgetsnav/widgetsnav.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/admin-store/pages/dashboard/components/widgetsnav/widgetsnav.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: WidgetsnavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetsnavComponent", function() { return WidgetsnavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/modules/admin-store/pages/dashboard/components/data.service.ts");



var WidgetsnavComponent = /** @class */ (function () {
    function WidgetsnavComponent(data) {
        this.data = data;
        this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.showExpB = true;
    }
    WidgetsnavComponent.prototype.ngOnInit = function () {
    };
    WidgetsnavComponent.prototype.user = function () {
        this.selected.emit("users");
    };
    WidgetsnavComponent.prototype.sales = function () {
        this.selected.emit("sales");
    };
    WidgetsnavComponent.prototype.showExp = function () {
        this.showExpB = false;
    };
    WidgetsnavComponent.prototype.showExpAgain = function () {
        this.showExpB = true;
    };
    WidgetsnavComponent.ctorParameters = function () { return [
        { type: _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], WidgetsnavComponent.prototype, "selected", void 0);
    WidgetsnavComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widgetsnav',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./widgetsnav.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin-store/pages/dashboard/components/widgetsnav/widgetsnav.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./widgetsnav.component.scss */ "./src/app/modules/admin-store/pages/dashboard/components/widgetsnav/widgetsnav.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], WidgetsnavComponent);
    return WidgetsnavComponent;
}());



/***/ }),

/***/ "./src/app/modules/admin-store/pages/dashboard/dashboard.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/modules/admin-store/pages/dashboard/dashboard.module.ts ***!
  \*************************************************************************/
/*! exports provided: DashboardPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPageModule", function() { return DashboardPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard.page */ "./src/app/modules/admin-store/pages/dashboard/dashboard.page.ts");
/* harmony import */ var _shared_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/components/components.module */ "./src/app/modules/admin-store/shared/components/components.module.ts");
/* harmony import */ var _components_dashboard_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/dashboard-components.module */ "./src/app/modules/admin-store/pages/dashboard/components/dashboard-components.module.ts");









var routes = [
    {
        path: '',
        component: _dashboard_page__WEBPACK_IMPORTED_MODULE_6__["DashboardPage"]
    }
];
var DashboardPageModule = /** @class */ (function () {
    function DashboardPageModule() {
    }
    DashboardPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _shared_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                _components_dashboard_components_module__WEBPACK_IMPORTED_MODULE_8__["DashboardComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_dashboard_page__WEBPACK_IMPORTED_MODULE_6__["DashboardPage"]]
        })
    ], DashboardPageModule);
    return DashboardPageModule;
}());



/***/ }),

/***/ "./src/app/modules/admin-store/pages/dashboard/dashboard.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/modules/admin-store/pages/dashboard/dashboard.page.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".top {\n  width: 100vw;\n}\n\n.bottom {\n  width: 100vw;\n  position: fixed;\n  bottom: 12vh;\n}\n\n.option {\n  height: 28vw;\n  width: 28vw;\n  border-radius: 28vw;\n  margin-right: 8px;\n  margin-left: 8px;\n  margin-bottom: 12px;\n  margin-top: 12px;\n}\n\n.reports:active {\n  backgroud-color: #018786;\n}\n\n.dash {\n  height: 52vh;\n  border-radius: 5vw 5vw 0vw 5vw;\n  margin-bottom: 0px !important;\n  overflow: scroll;\n}\n\n.reports {\n  height: 72vh;\n  border-radius: 5vw 5vw 0vw 5vw;\n  margin-bottom: 0px !important;\n  overflow: scroll;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hZG1pbi1zdG9yZS9wYWdlcy9kYXNoYm9hcmQvQzpcXFVzZXJzXFxNYXJ2aW5cXERvY3VtZW50c1xcR2l0SHViXFxhZnJvYlxcY2xpZW50L3NyY1xcYXBwXFxtb2R1bGVzXFxhZG1pbi1zdG9yZVxccGFnZXNcXGRhc2hib2FyZFxcZGFzaGJvYXJkLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9hZG1pbi1zdG9yZS9wYWdlcy9kYXNoYm9hcmQvZGFzaGJvYXJkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUVFLFlBQUE7QUNERjs7QURHQTtFQUNFLFlBQUE7RUFDSSxlQUFBO0VBQ0osWUFBQTtBQ0FGOztBREVBO0VBQ0UsWUFBQTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDSixtQkFBQTtFQUNBLGdCQUFBO0FDQ0E7O0FERUE7RUFDQyx3QkFBQTtBQ0NEOztBREVBO0VBQ0MsWUFBQTtFQUNBLDhCQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtBQ0NEOztBRENBO0VBQ0MsWUFBQTtFQUNBLDhCQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtBQ0VEIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9hZG1pbi1zdG9yZS9wYWdlcy9kYXNoYm9hcmQvZGFzaGJvYXJkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLnRvcHtcblxuICB3aWR0aDogMTAwdnc7XG59XG4uYm90dG9te1xuICB3aWR0aDogMTAwdnc7O1xuICAgICAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDEydmg7XG59XG4ub3B0aW9ue1xuICBoZWlnaHQ6IDI4dnc7XG4gICAgd2lkdGg6IDI4dnc7XG4gICAgYm9yZGVyLXJhZGl1czogMjh2dztcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xubWFyZ2luLWJvdHRvbToxMnB4O1xubWFyZ2luLXRvcDoxMnB4XG4gICAgXG59XG4ucmVwb3J0czphY3RpdmUge1xuXHRiYWNrZ3JvdWQtY29sb3I6IzAxODc4NlxufVxuXG4uZGFzaHtcblx0aGVpZ2h0OiA1MnZoO1xuXHRib3JkZXItcmFkaXVzOiA1dncgNXZ3IDB2dyA1dnc7XG5cdG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50IDtcblx0b3ZlcmZsb3c6IHNjcm9sbFxufVxuLnJlcG9ydHN7XG5cdGhlaWdodDogNzJ2aDtcblx0Ym9yZGVyLXJhZGl1czogNXZ3IDV2dyAwdncgNXZ3O1xuXHRtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudCA7XG5cdG92ZXJmbG93OiBzY3JvbGw7XG5cbn0iLCIudG9wIHtcbiAgd2lkdGg6IDEwMHZ3O1xufVxuXG4uYm90dG9tIHtcbiAgd2lkdGg6IDEwMHZ3O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMTJ2aDtcbn1cblxuLm9wdGlvbiB7XG4gIGhlaWdodDogMjh2dztcbiAgd2lkdGg6IDI4dnc7XG4gIGJvcmRlci1yYWRpdXM6IDI4dnc7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xuICBtYXJnaW4tbGVmdDogOHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICBtYXJnaW4tdG9wOiAxMnB4O1xufVxuXG4ucmVwb3J0czphY3RpdmUge1xuICBiYWNrZ3JvdWQtY29sb3I6ICMwMTg3ODY7XG59XG5cbi5kYXNoIHtcbiAgaGVpZ2h0OiA1MnZoO1xuICBib3JkZXItcmFkaXVzOiA1dncgNXZ3IDB2dyA1dnc7XG4gIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xuICBvdmVyZmxvdzogc2Nyb2xsO1xufVxuXG4ucmVwb3J0cyB7XG4gIGhlaWdodDogNzJ2aDtcbiAgYm9yZGVyLXJhZGl1czogNXZ3IDV2dyAwdncgNXZ3O1xuICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/admin-store/pages/dashboard/dashboard.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/modules/admin-store/pages/dashboard/dashboard.page.ts ***!
  \***********************************************************************/
/*! exports provided: DashboardPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPage", function() { return DashboardPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");



var DashboardPage = /** @class */ (function () {
    function DashboardPage(router) {
        this.router = router;
        this.item = "";
        this.datas = "Users";
        this.users = true;
        this.sales = false;
        this.viewReports = false;
        this.dashStatus = "dash";
    }
    DashboardPage.prototype.ngOnInit = function () {
    };
    DashboardPage.prototype.ngAfterViewInit = function () {
    };
    DashboardPage.prototype.accept = function (selectedData) {
        this.datas = selectedData;
        if (selectedData == "users") {
            this.sales = false;
            this.users = true;
        }
        else if (selectedData == "sales") {
            this.users = false;
            this.sales = true;
        }
    };
    DashboardPage.prototype.goProduct = function () {
        this.router.navigate(["/admin-store/store/products"]);
    };
    DashboardPage.prototype.reportSelection = function (data) {
        this.viewReports = data;
        if (data == true) {
            this.dashStatus = "reports";
        }
        else {
            this.dashStatus = "dash";
        }
    };
    DashboardPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    DashboardPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-dashboard",
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./dashboard.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin-store/pages/dashboard/dashboard.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./dashboard.page.scss */ "./src/app/modules/admin-store/pages/dashboard/dashboard.page.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], DashboardPage);
    return DashboardPage;
}());



/***/ })

}]);
//# sourceMappingURL=src-app-modules-admin-store-pages-dashboard-dashboard-module.js.map