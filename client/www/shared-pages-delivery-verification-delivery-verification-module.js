(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["shared-pages-delivery-verification-delivery-verification-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/pages/delivery-verification/delivery-verification.page.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/pages/delivery-verification/delivery-verification.page.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-toolbar>\r\n  <ion-buttons slot=\"start\">\r\n    <ion-back-button defaultHref=\"home\"></ion-back-button>\r\n  </ion-buttons>\r\n</ion-toolbar>\r\n<ion-slides\r\n  style=\"height: 90vh; width: 100vw;\"\r\n  pager=\"true\"\r\n  [options]=\"slideOpts\"\r\n>\r\n  <ion-slide>\r\n    <form [formGroup]=\"verifyReviewForm\" (ngSubmit)=\"verifyDelivery()\">\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col size=\"\">\r\n            <ion-img src=\"./assets/sharedVerify.svg\"></ion-img>\r\n          </ion-col>\r\n          <ion-col size=\"12\">\r\n            <h1>Verify Order</h1>\r\n          </ion-col>\r\n          <ion-col size=\"\">\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Courier reference</ion-label>\r\n              <ion-input formControlName=\"courier_ref\"></ion-input>\r\n            </ion-item>\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Client OTP</ion-label>\r\n              <ion-input formControlName=\"courier_OTP\"></ion-input>\r\n            </ion-item>\r\n            <ion-button\r\n              (click)=\"verifyDelivery()\"\r\n              type=\"submit\"\r\n              color=\"secondary\"\r\n              shape=\"round\"\r\n              expand=\"block\"\r\n            >\r\n              Verify\r\n            </ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </form>\r\n  </ion-slide>\r\n  <ion-slide>\r\n    <h1>Slide 2</h1>\r\n  </ion-slide>\r\n  <ion-slide>\r\n    <h1>Slide 3</h1>\r\n  </ion-slide>\r\n</ion-slides>\r\n");

/***/ }),

/***/ "./src/app/shared/pages/delivery-verification/delivery-verification-routing.module.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/shared/pages/delivery-verification/delivery-verification-routing.module.ts ***!
  \********************************************************************************************/
/*! exports provided: DeliveryVerificationPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliveryVerificationPageRoutingModule", function() { return DeliveryVerificationPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _delivery_verification_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./delivery-verification.page */ "./src/app/shared/pages/delivery-verification/delivery-verification.page.ts");




var routes = [
    {
        path: '',
        component: _delivery_verification_page__WEBPACK_IMPORTED_MODULE_3__["DeliveryVerificationPage"]
    }
];
var DeliveryVerificationPageRoutingModule = /** @class */ (function () {
    function DeliveryVerificationPageRoutingModule() {
    }
    DeliveryVerificationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], DeliveryVerificationPageRoutingModule);
    return DeliveryVerificationPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/shared/pages/delivery-verification/delivery-verification.module.ts":
/*!************************************************************************************!*\
  !*** ./src/app/shared/pages/delivery-verification/delivery-verification.module.ts ***!
  \************************************************************************************/
/*! exports provided: DeliveryVerificationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliveryVerificationPageModule", function() { return DeliveryVerificationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _delivery_verification_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./delivery-verification-routing.module */ "./src/app/shared/pages/delivery-verification/delivery-verification-routing.module.ts");
/* harmony import */ var _delivery_verification_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./delivery-verification.page */ "./src/app/shared/pages/delivery-verification/delivery-verification.page.ts");







var DeliveryVerificationPageModule = /** @class */ (function () {
    function DeliveryVerificationPageModule() {
    }
    DeliveryVerificationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _delivery_verification_routing_module__WEBPACK_IMPORTED_MODULE_5__["DeliveryVerificationPageRoutingModule"],
            ],
            declarations: [_delivery_verification_page__WEBPACK_IMPORTED_MODULE_6__["DeliveryVerificationPage"]],
        })
    ], DeliveryVerificationPageModule);
    return DeliveryVerificationPageModule;
}());



/***/ }),

/***/ "./src/app/shared/pages/delivery-verification/delivery-verification.page.scss":
/*!************************************************************************************!*\
  !*** ./src/app/shared/pages/delivery-verification/delivery-verification.page.scss ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9wYWdlcy9kZWxpdmVyeS12ZXJpZmljYXRpb24vZGVsaXZlcnktdmVyaWZpY2F0aW9uLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/shared/pages/delivery-verification/delivery-verification.page.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/shared/pages/delivery-verification/delivery-verification.page.ts ***!
  \**********************************************************************************/
/*! exports provided: DeliveryVerificationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliveryVerificationPage", function() { return DeliveryVerificationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var src_app_core_modules_services_orders_order_facade_order_facade_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core-modules/services/orders/order-facade/order-facade.service */ "./src/app/core-modules/services/orders/order-facade/order-facade.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");





var DeliveryVerificationPage = /** @class */ (function () {
    function DeliveryVerificationPage(_orderFacade, router) {
        this._orderFacade = _orderFacade;
        this.router = router;
        this.verifyReviewForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            courier_ref: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
            courier_OTP: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
        });
    }
    DeliveryVerificationPage.prototype.ngOnInit = function () { };
    DeliveryVerificationPage.prototype.verifyDelivery = function () {
        var data = this.verifyReviewForm.value;
        this._orderFacade.verifyOrderDelivery(data);
        this.router.navigate(["/user/landing/home"]);
    };
    DeliveryVerificationPage.ctorParameters = function () { return [
        { type: src_app_core_modules_services_orders_order_facade_order_facade_service__WEBPACK_IMPORTED_MODULE_2__["OrderFacadeService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    DeliveryVerificationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-delivery-verification",
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./delivery-verification.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/pages/delivery-verification/delivery-verification.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./delivery-verification.page.scss */ "./src/app/shared/pages/delivery-verification/delivery-verification.page.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_core_modules_services_orders_order_facade_order_facade_service__WEBPACK_IMPORTED_MODULE_2__["OrderFacadeService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], DeliveryVerificationPage);
    return DeliveryVerificationPage;
}());



/***/ })

}]);
//# sourceMappingURL=shared-pages-delivery-verification-delivery-verification-module.js.map