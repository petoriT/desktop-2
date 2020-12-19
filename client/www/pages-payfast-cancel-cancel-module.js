(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-payfast-cancel-cancel-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/payments/pages/payfast/cancel/cancel.page.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/payments/pages/payfast/cancel/cancel.page.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>cancel</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/modules/payments/pages/payfast/cancel/cancel.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/modules/payments/pages/payfast/cancel/cancel.module.ts ***!
  \************************************************************************/
/*! exports provided: CancelPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CancelPageModule", function() { return CancelPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _cancel_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cancel.page */ "./src/app/modules/payments/pages/payfast/cancel/cancel.page.ts");







var routes = [
    {
        path: '',
        component: _cancel_page__WEBPACK_IMPORTED_MODULE_6__["CancelPage"]
    }
];
var CancelPageModule = /** @class */ (function () {
    function CancelPageModule() {
    }
    CancelPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_cancel_page__WEBPACK_IMPORTED_MODULE_6__["CancelPage"]]
        })
    ], CancelPageModule);
    return CancelPageModule;
}());



/***/ }),

/***/ "./src/app/modules/payments/pages/payfast/cancel/cancel.page.scss":
/*!************************************************************************!*\
  !*** ./src/app/modules/payments/pages/payfast/cancel/cancel.page.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGF5bWVudHMvcGFnZXMvcGF5ZmFzdC9jYW5jZWwvY2FuY2VsLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/payments/pages/payfast/cancel/cancel.page.ts":
/*!**********************************************************************!*\
  !*** ./src/app/modules/payments/pages/payfast/cancel/cancel.page.ts ***!
  \**********************************************************************/
/*! exports provided: CancelPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CancelPage", function() { return CancelPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var CancelPage = /** @class */ (function () {
    function CancelPage() {
    }
    CancelPage.prototype.ngOnInit = function () {
    };
    CancelPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cancel',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./cancel.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/payments/pages/payfast/cancel/cancel.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./cancel.page.scss */ "./src/app/modules/payments/pages/payfast/cancel/cancel.page.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], CancelPage);
    return CancelPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-payfast-cancel-cancel-module.js.map