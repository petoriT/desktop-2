(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-payfast-success-success-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/payments/pages/payfast/success/success.page.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/payments/pages/payfast/success/success.page.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>success</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/modules/payments/pages/payfast/success/success.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/modules/payments/pages/payfast/success/success.module.ts ***!
  \**************************************************************************/
/*! exports provided: SuccessPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuccessPageModule", function() { return SuccessPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _success_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./success.page */ "./src/app/modules/payments/pages/payfast/success/success.page.ts");







var routes = [
    {
        path: '',
        component: _success_page__WEBPACK_IMPORTED_MODULE_6__["SuccessPage"]
    }
];
var SuccessPageModule = /** @class */ (function () {
    function SuccessPageModule() {
    }
    SuccessPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_success_page__WEBPACK_IMPORTED_MODULE_6__["SuccessPage"]]
        })
    ], SuccessPageModule);
    return SuccessPageModule;
}());



/***/ }),

/***/ "./src/app/modules/payments/pages/payfast/success/success.page.scss":
/*!**************************************************************************!*\
  !*** ./src/app/modules/payments/pages/payfast/success/success.page.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGF5bWVudHMvcGFnZXMvcGF5ZmFzdC9zdWNjZXNzL3N1Y2Nlc3MucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/payments/pages/payfast/success/success.page.ts":
/*!************************************************************************!*\
  !*** ./src/app/modules/payments/pages/payfast/success/success.page.ts ***!
  \************************************************************************/
/*! exports provided: SuccessPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuccessPage", function() { return SuccessPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var src_app_core_modules_services_cart_cart_state_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core-modules/services/cart/cart-state/cart.service */ "./src/app/core-modules/services/cart/cart-state/cart.service.ts");



var SuccessPage = /** @class */ (function () {
    function SuccessPage(cartService) {
        this.cartService = cartService;
    }
    SuccessPage.prototype.ngOnInit = function () {
        localStorage.removeItem("cart");
        this.cartService.clearCart();
    };
    SuccessPage.ctorParameters = function () { return [
        { type: src_app_core_modules_services_cart_cart_state_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"] }
    ]; };
    SuccessPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-success",
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./success.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/payments/pages/payfast/success/success.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./success.page.scss */ "./src/app/modules/payments/pages/payfast/success/success.page.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_core_modules_services_cart_cart_state_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"]])
    ], SuccessPage);
    return SuccessPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-payfast-success-success-module.js.map