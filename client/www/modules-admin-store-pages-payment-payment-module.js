(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-admin-store-pages-payment-payment-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin-store/pages/payment/payment.page.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin-store/pages/payment/payment.page.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>payment</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form\n  #form\n  action=\"https://sandbox.payfast.co.za/eng/process\"\n  method=\"POST\"\n  >\n  <!-- Merchant details -->\n  <input\n    type=\"hidden\"\n    name=\"merchant_id\"\n    value=\"{{payfastForm.merchant_id}}\"\n  />\n  <input\n    type=\"hidden\"\n    name=\"merchant_key\"\n    value=\"{{payfastForm.merchant_key}}\"\n  />\n  <input\n    type=\"hidden\"\n    name=\"return_url\"\n    value=\"{{payfastForm.return_url}}\"\n  />\n  <input\n    type=\"hidden\"\n    name=\"cancel_url\"\n    value=\"{{payfastForm.cancel_url}}\"\n  />\n  <input\n    type=\"hidden\"\n    name=\"notify_url\"\n    value=\"{{payfastForm.notify_url}}\"\n  />\n  \n  <!-- Buyer Details -->\n  <input\n    type=\"hidden\"\n    name=\"email_address\"\n    value=\"{{payfastForm.buyer_email}}\"\n  />\n  \n  <!-- Transaction Details -->\n  <input\n    type=\"hidden\"\n    name=\"m_payment_id\"\n    value=\"{{payfastForm.m_payment_id}}\"\n  />\n  <input type=\"hidden\" name=\"amount\" value=\"{{payfastForm.amount}}\" />\n  <input\n    type=\"hidden\"\n    name=\"item_name\"\n    value=\"{{payfastForm.item_name}}\"\n  />\n  <input\n    type=\"hidden\"\n    name=\"item_description\"\n    value=\"{{payfastForm.item_description}}\"\n  />\n  \n  <input\n    type=\"hidden\"\n    name=\"email_confirmation\"\n    value=\"{{payfastForm.email_confirmation}}\"\n  />\n  <input\n    type=\"hidden\"\n    name=\"confirmation_address\"\n    value=\"{{payfastForm.confirmation_address}}\"\n  />\n  \n  <!-- Set Payment Method -->\n  <input\n    type=\"hidden\"\n    name=\"payment_method\"\n    value=\"{{payfastForm.payment_method}}\"\n  />\n  <input\n    type=\"hidden\"\n    name=\"signature\"\n    value=\"{{payfastForm.signature}}\"\n  />\n  \n  <ion-button   (click)=\" onSub(payfastForm); form.submit()\"   *ngIf=\"billing_cycle_selected == 'yearly'\" expand=\"block\" shape=\"round\">\n    {{selected_license.annual_price | currency: 'R' }} PayFast <ion-icon name=\"card-outline\"></ion-icon>\n  </ion-button>\n  <ion-button   (click)=\" onSub(payfastForm); form.submit()\"  *ngIf=\"billing_cycle_selected == 'mon'\" expand=\"block\" shape=\"round\">\n    {{selected_license.monthly_price | currency: 'R' }} PayFast <ion-icon name=\"card-outline\"></ion-icon>\n  </ion-button>\n  \n  </form>\n  \n</ion-content>\n");

/***/ }),

/***/ "./src/app/modules/admin-store/pages/payment/payment-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/admin-store/pages/payment/payment-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: PaymentPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentPageRoutingModule", function() { return PaymentPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _payment_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./payment.page */ "./src/app/modules/admin-store/pages/payment/payment.page.ts");




var routes = [
    {
        path: '',
        component: _payment_page__WEBPACK_IMPORTED_MODULE_3__["PaymentPage"]
    }
];
var PaymentPageRoutingModule = /** @class */ (function () {
    function PaymentPageRoutingModule() {
    }
    PaymentPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], PaymentPageRoutingModule);
    return PaymentPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/admin-store/pages/payment/payment.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/modules/admin-store/pages/payment/payment.module.ts ***!
  \*********************************************************************/
/*! exports provided: PaymentPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentPageModule", function() { return PaymentPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _payment_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./payment-routing.module */ "./src/app/modules/admin-store/pages/payment/payment-routing.module.ts");
/* harmony import */ var _payment_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./payment.page */ "./src/app/modules/admin-store/pages/payment/payment.page.ts");







var PaymentPageModule = /** @class */ (function () {
    function PaymentPageModule() {
    }
    PaymentPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _payment_routing_module__WEBPACK_IMPORTED_MODULE_5__["PaymentPageRoutingModule"]
            ],
            declarations: [_payment_page__WEBPACK_IMPORTED_MODULE_6__["PaymentPage"]]
        })
    ], PaymentPageModule);
    return PaymentPageModule;
}());



/***/ }),

/***/ "./src/app/modules/admin-store/pages/payment/payment.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/modules/admin-store/pages/payment/payment.page.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4tc3RvcmUvcGFnZXMvcGF5bWVudC9wYXltZW50LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/admin-store/pages/payment/payment.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/modules/admin-store/pages/payment/payment.page.ts ***!
  \*******************************************************************/
/*! exports provided: PaymentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentPage", function() { return PaymentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var src_app_core_modules_services_payments_payfast_facade_payfast_facade_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core-modules/services/payments/payfast-facade/payfast-facade.service */ "./src/app/core-modules/services/payments/payfast-facade/payfast-facade.service.ts");
/* harmony import */ var src_app_core_modules_services_profile_profile_api_profile_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core-modules/services/profile/profile-api/profile-api.service */ "./src/app/core-modules/services/profile/profile-api/profile-api.service.ts");
/* harmony import */ var ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ts-md5/dist/md5 */ "./node_modules/ts-md5/dist/md5.js");
/* harmony import */ var ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_4__);





var PaymentPage = /** @class */ (function () {
    function PaymentPage(payFacade, userApi) {
        this.payFacade = payFacade;
        this.userApi = userApi;
        this.md5 = new ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_4__["Md5"]();
    }
    PaymentPage.prototype.ngOnChanges = function () {
        console.log(this.payfastForm);
    };
    PaymentPage.prototype.ngOnInit = function () {
        var state = window.history.state;
        this.user_email = state.user_email;
        this.selected_license = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state.selected_license);
        this.billing_cycle_selected = state.billing_cycle_selected;
        this.payFast();
        console.log(this.payfastForm);
    };
    //Send form to payfast
    PaymentPage.prototype.onSub = function (info) {
        localStorage.removeItem("license_name");
        var license = this.selected_license;
        this.payFacade.temporaryOrder(info, license);
    };
    PaymentPage.prototype.payFast = function () {
        if (this.selected_license) {
            var payfastForm = {};
            // Merchant details
            payfastForm.merchant_id = "10016542";
            payfastForm.merchant_key = "w7wn35bsap1pf";
            payfastForm.return_url =
                "https://cartalist.herokuapp.com/buy/payment/checkout/payfast/success";
            payfastForm.cancel_url =
                "https://cartalist.herokuapp.com/buy/payment/checkout/payfast/cancel";
            payfastForm.notify_url = "https://cartalist.herokuapp.com/api/payfast/notify_url";
            // Buyer Details
            payfastForm.buyer_email = this.user_email;
            // Transaction Details
            payfastForm.m_payment_id = this.randomize();
            payfastForm.amount = this.selected_license.payed_amount.amount.toFixed(2);
            payfastForm.item_name = "Lisence";
            payfastForm.item_description = this.selected_license.license_name;
            payfastForm.email_confirmation = "1";
            payfastForm.confirmation_address = this.user_email;
            // Set Payment Method
            payfastForm.payment_method = "eft";
            var hash = "merchant_id=" + encodeURIComponent(payfastForm.merchant_id) + "&merchant_key=" + encodeURIComponent(payfastForm.merchant_key) + "&return_url=" + encodeURIComponent(payfastForm.return_url) + "&cancel_url=" + encodeURIComponent(payfastForm.cancel_url) + "&notify_url=" + encodeURIComponent(payfastForm.notify_url) + "&email_address=" + encodeURIComponent(payfastForm.buyer_email) + "&m_payment_id=" + encodeURIComponent(payfastForm.m_payment_id) + "&amount=" + encodeURIComponent(payfastForm.amount) + "&item_name=" + encodeURI(payfastForm.item_name) + "&item_description=" + encodeURI(payfastForm.item_description) + "&email_confirmation=" + encodeURIComponent(payfastForm.email_confirmation) + "&confirmation_address=" + encodeURIComponent(payfastForm.confirmation_address) + "&payment_method=" + encodeURIComponent(payfastForm.payment_method);
            // MD5 encode
            payfastForm.signature = this.md5.appendStr(hash).end();
            this.payfastForm = payfastForm;
            console.log(payfastForm, this.payfastForm);
        }
    };
    PaymentPage.prototype.randomize = function () {
        // Randomize chars
        var length = 10;
        var chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var result = "";
        for (var i = length; i > 0; --i)
            result += chars[Math.floor(Math.random() * chars.length)];
        return result;
    };
    PaymentPage.ctorParameters = function () { return [
        { type: src_app_core_modules_services_payments_payfast_facade_payfast_facade_service__WEBPACK_IMPORTED_MODULE_2__["PayfastFacadeService"] },
        { type: src_app_core_modules_services_profile_profile_api_profile_api_service__WEBPACK_IMPORTED_MODULE_3__["ProfileApiService"] }
    ]; };
    PaymentPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-payment',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./payment.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin-store/pages/payment/payment.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./payment.page.scss */ "./src/app/modules/admin-store/pages/payment/payment.page.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_core_modules_services_payments_payfast_facade_payfast_facade_service__WEBPACK_IMPORTED_MODULE_2__["PayfastFacadeService"],
            src_app_core_modules_services_profile_profile_api_profile_api_service__WEBPACK_IMPORTED_MODULE_3__["ProfileApiService"]])
    ], PaymentPage);
    return PaymentPage;
}());



/***/ })

}]);
//# sourceMappingURL=modules-admin-store-pages-payment-payment-module.js.map