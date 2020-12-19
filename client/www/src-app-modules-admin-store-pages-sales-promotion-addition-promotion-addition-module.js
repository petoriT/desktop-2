(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-modules-admin-store-pages-sales-promotion-addition-promotion-addition-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin-store/pages/sales/promotion-addition/promotion-addition.page.html":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin-store/pages/sales/promotion-addition/promotion-addition.page.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>promotion-addition</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/modules/admin-store/pages/sales/promotion-addition/promotion-addition-routing.module.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/modules/admin-store/pages/sales/promotion-addition/promotion-addition-routing.module.ts ***!
  \*********************************************************************************************************/
/*! exports provided: PromotionAdditionPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromotionAdditionPageRoutingModule", function() { return PromotionAdditionPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _promotion_addition_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./promotion-addition.page */ "./src/app/modules/admin-store/pages/sales/promotion-addition/promotion-addition.page.ts");




var routes = [
    {
        path: '',
        component: _promotion_addition_page__WEBPACK_IMPORTED_MODULE_3__["PromotionAdditionPage"]
    }
];
var PromotionAdditionPageRoutingModule = /** @class */ (function () {
    function PromotionAdditionPageRoutingModule() {
    }
    PromotionAdditionPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], PromotionAdditionPageRoutingModule);
    return PromotionAdditionPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/admin-store/pages/sales/promotion-addition/promotion-addition.module.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/admin-store/pages/sales/promotion-addition/promotion-addition.module.ts ***!
  \*************************************************************************************************/
/*! exports provided: PromotionAdditionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromotionAdditionPageModule", function() { return PromotionAdditionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _promotion_addition_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./promotion-addition-routing.module */ "./src/app/modules/admin-store/pages/sales/promotion-addition/promotion-addition-routing.module.ts");
/* harmony import */ var _promotion_addition_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./promotion-addition.page */ "./src/app/modules/admin-store/pages/sales/promotion-addition/promotion-addition.page.ts");







var PromotionAdditionPageModule = /** @class */ (function () {
    function PromotionAdditionPageModule() {
    }
    PromotionAdditionPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _promotion_addition_routing_module__WEBPACK_IMPORTED_MODULE_5__["PromotionAdditionPageRoutingModule"]
            ],
            declarations: [_promotion_addition_page__WEBPACK_IMPORTED_MODULE_6__["PromotionAdditionPage"]]
        })
    ], PromotionAdditionPageModule);
    return PromotionAdditionPageModule;
}());



/***/ }),

/***/ "./src/app/modules/admin-store/pages/sales/promotion-addition/promotion-addition.page.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/admin-store/pages/sales/promotion-addition/promotion-addition.page.scss ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4tc3RvcmUvcGFnZXMvc2FsZXMvcHJvbW90aW9uLWFkZGl0aW9uL3Byb21vdGlvbi1hZGRpdGlvbi5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/admin-store/pages/sales/promotion-addition/promotion-addition.page.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/admin-store/pages/sales/promotion-addition/promotion-addition.page.ts ***!
  \***********************************************************************************************/
/*! exports provided: PromotionAdditionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromotionAdditionPage", function() { return PromotionAdditionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var PromotionAdditionPage = /** @class */ (function () {
    function PromotionAdditionPage() {
    }
    PromotionAdditionPage.prototype.ngOnInit = function () {
    };
    PromotionAdditionPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-promotion-addition',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./promotion-addition.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin-store/pages/sales/promotion-addition/promotion-addition.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./promotion-addition.page.scss */ "./src/app/modules/admin-store/pages/sales/promotion-addition/promotion-addition.page.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], PromotionAdditionPage);
    return PromotionAdditionPage;
}());



/***/ })

}]);
//# sourceMappingURL=src-app-modules-admin-store-pages-sales-promotion-addition-promotion-addition-module.js.map