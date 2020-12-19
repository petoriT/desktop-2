(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-admin-store-slides-layout-slides-layout-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin-store/slides-layout/slides-layout.page.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin-store/slides-layout/slides-layout.page.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("  <ion-router-outlet></ion-router-outlet>");

/***/ }),

/***/ "./src/app/modules/admin-store/slides-layout/slides-layout-routing.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/admin-store/slides-layout/slides-layout-routing.module.ts ***!
  \***********************************************************************************/
/*! exports provided: SlidesLayoutPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlidesLayoutPageRoutingModule", function() { return SlidesLayoutPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _slides_layout_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./slides-layout.page */ "./src/app/modules/admin-store/slides-layout/slides-layout.page.ts");




var routes = [
    {
        path: 'add',
        component: _slides_layout_page__WEBPACK_IMPORTED_MODULE_3__["SlidesLayoutPage"],
        children: [
            {
                path: "product",
                loadChildren: function () {
                    return Promise.all(/*! import() | src-app-modules-admin-store-pages-products-product-addition-product-addition-module */[__webpack_require__.e("default~src-app-modules-admin-store-pages-products-product-addition-product-addition-module~src-app-~5bc0bd2b"), __webpack_require__.e("src-app-modules-admin-store-pages-products-product-addition-product-addition-module")]).then(__webpack_require__.bind(null, /*! src/app/modules/admin-store/pages/products/product-addition/product-addition.module */ "./src/app/modules/admin-store/pages/products/product-addition/product-addition.module.ts")).then(function (m) { return m.ProductAdditionPageModule; });
                },
            },
            {
                path: "promo",
                loadChildren: function () {
                    return __webpack_require__.e(/*! import() | src-app-modules-admin-store-pages-sales-promotion-addition-promotion-addition-module */ "src-app-modules-admin-store-pages-sales-promotion-addition-promotion-addition-module").then(__webpack_require__.bind(null, /*! src/app/modules/admin-store/pages/sales/promotion-addition/promotion-addition.module */ "./src/app/modules/admin-store/pages/sales/promotion-addition/promotion-addition.module.ts")).then(function (m) { return m.PromotionAdditionPageModule; });
                },
            },
            {
                path: "user",
                loadChildren: function () {
                    return __webpack_require__.e(/*! import() | src-app-modules-admin-store-pages-users-user-addition-user-addition-module */ "user-addition-user-addition-module").then(__webpack_require__.bind(null, /*! src/app/modules/admin-store/pages/users/user-addition/user-addition.module */ "./src/app/modules/admin-store/pages/users/user-addition/user-addition.module.ts")).then(function (m) { return m.UserAdditionPageModule; });
                },
            },
        ]
    }
];
var SlidesLayoutPageRoutingModule = /** @class */ (function () {
    function SlidesLayoutPageRoutingModule() {
    }
    SlidesLayoutPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], SlidesLayoutPageRoutingModule);
    return SlidesLayoutPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/admin-store/slides-layout/slides-layout.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/admin-store/slides-layout/slides-layout.module.ts ***!
  \***************************************************************************/
/*! exports provided: SlidesLayoutPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlidesLayoutPageModule", function() { return SlidesLayoutPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _slides_layout_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./slides-layout-routing.module */ "./src/app/modules/admin-store/slides-layout/slides-layout-routing.module.ts");
/* harmony import */ var _slides_layout_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./slides-layout.page */ "./src/app/modules/admin-store/slides-layout/slides-layout.page.ts");







var SlidesLayoutPageModule = /** @class */ (function () {
    function SlidesLayoutPageModule() {
    }
    SlidesLayoutPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _slides_layout_routing_module__WEBPACK_IMPORTED_MODULE_5__["SlidesLayoutPageRoutingModule"]
            ],
            declarations: [_slides_layout_page__WEBPACK_IMPORTED_MODULE_6__["SlidesLayoutPage"]]
        })
    ], SlidesLayoutPageModule);
    return SlidesLayoutPageModule;
}());



/***/ }),

/***/ "./src/app/modules/admin-store/slides-layout/slides-layout.page.scss":
/*!***************************************************************************!*\
  !*** ./src/app/modules/admin-store/slides-layout/slides-layout.page.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4tc3RvcmUvc2xpZGVzLWxheW91dC9zbGlkZXMtbGF5b3V0LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/admin-store/slides-layout/slides-layout.page.ts":
/*!*************************************************************************!*\
  !*** ./src/app/modules/admin-store/slides-layout/slides-layout.page.ts ***!
  \*************************************************************************/
/*! exports provided: SlidesLayoutPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlidesLayoutPage", function() { return SlidesLayoutPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var src_app_core_modules_services_products_product_facade_product_facade_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core-modules/services/products/product-facade/product-facade.service */ "./src/app/core-modules/services/products/product-facade/product-facade.service.ts");
/* harmony import */ var src_app_core_modules_services_orders_order_facade_order_facade_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core-modules/services/orders/order-facade/order-facade.service */ "./src/app/core-modules/services/orders/order-facade/order-facade.service.ts");





var SlidesLayoutPage = /** @class */ (function () {
    function SlidesLayoutPage(router, productFacade, orderFacade) {
        this.router = router;
        this.productFacade = productFacade;
        this.orderFacade = orderFacade;
    }
    SlidesLayoutPage.prototype.ngOnInit = function () {
        this.productFacade.loadVendorProducts();
        //Load Orders
        this.orderFacade.loadStoreOrders();
    };
    SlidesLayoutPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: src_app_core_modules_services_products_product_facade_product_facade_service__WEBPACK_IMPORTED_MODULE_3__["ProductFacadeService"] },
        { type: src_app_core_modules_services_orders_order_facade_order_facade_service__WEBPACK_IMPORTED_MODULE_4__["OrderFacadeService"] }
    ]; };
    SlidesLayoutPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-slides-layout',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./slides-layout.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin-store/slides-layout/slides-layout.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./slides-layout.page.scss */ "./src/app/modules/admin-store/slides-layout/slides-layout.page.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_app_core_modules_services_products_product_facade_product_facade_service__WEBPACK_IMPORTED_MODULE_3__["ProductFacadeService"],
            src_app_core_modules_services_orders_order_facade_order_facade_service__WEBPACK_IMPORTED_MODULE_4__["OrderFacadeService"]])
    ], SlidesLayoutPage);
    return SlidesLayoutPage;
}());



/***/ })

}]);
//# sourceMappingURL=modules-admin-store-slides-layout-slides-layout-module.js.map