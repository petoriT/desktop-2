(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-modules-admin-store-pages-products-product-addition-product-addition-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin-store/pages/products/product-addition/product-addition.page.html":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin-store/pages/products/product-addition/product-addition.page.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-add-product></app-add-product>");

/***/ }),

/***/ "./src/app/modules/admin-store/pages/products/product-addition/product-addition-routing.module.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/modules/admin-store/pages/products/product-addition/product-addition-routing.module.ts ***!
  \********************************************************************************************************/
/*! exports provided: ProductAdditionPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductAdditionPageRoutingModule", function() { return ProductAdditionPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _product_addition_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product-addition.page */ "./src/app/modules/admin-store/pages/products/product-addition/product-addition.page.ts");




var routes = [
    {
        path: '',
        component: _product_addition_page__WEBPACK_IMPORTED_MODULE_3__["ProductAdditionPage"]
    }
];
var ProductAdditionPageRoutingModule = /** @class */ (function () {
    function ProductAdditionPageRoutingModule() {
    }
    ProductAdditionPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ProductAdditionPageRoutingModule);
    return ProductAdditionPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/admin-store/pages/products/product-addition/product-addition.module.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/admin-store/pages/products/product-addition/product-addition.module.ts ***!
  \************************************************************************************************/
/*! exports provided: ProductAdditionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductAdditionPageModule", function() { return ProductAdditionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _product_addition_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product-addition-routing.module */ "./src/app/modules/admin-store/pages/products/product-addition/product-addition-routing.module.ts");
/* harmony import */ var _product_addition_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product-addition.page */ "./src/app/modules/admin-store/pages/products/product-addition/product-addition.page.ts");
/* harmony import */ var _components_products_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/products-components.module */ "./src/app/modules/admin-store/pages/products/components/products-components.module.ts");








var ProductAdditionPageModule = /** @class */ (function () {
    function ProductAdditionPageModule() {
    }
    ProductAdditionPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _product_addition_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProductAdditionPageRoutingModule"],
                _components_products_components_module__WEBPACK_IMPORTED_MODULE_7__["ProductsComponentsModule"]
            ],
            declarations: [_product_addition_page__WEBPACK_IMPORTED_MODULE_6__["ProductAdditionPage"]]
        })
    ], ProductAdditionPageModule);
    return ProductAdditionPageModule;
}());



/***/ }),

/***/ "./src/app/modules/admin-store/pages/products/product-addition/product-addition.page.scss":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/admin-store/pages/products/product-addition/product-addition.page.scss ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4tc3RvcmUvcGFnZXMvcHJvZHVjdHMvcHJvZHVjdC1hZGRpdGlvbi9wcm9kdWN0LWFkZGl0aW9uLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/admin-store/pages/products/product-addition/product-addition.page.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/admin-store/pages/products/product-addition/product-addition.page.ts ***!
  \**********************************************************************************************/
/*! exports provided: ProductAdditionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductAdditionPage", function() { return ProductAdditionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var ProductAdditionPage = /** @class */ (function () {
    function ProductAdditionPage() {
    }
    ProductAdditionPage.prototype.ngOnInit = function () {
    };
    ProductAdditionPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-addition',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./product-addition.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin-store/pages/products/product-addition/product-addition.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./product-addition.page.scss */ "./src/app/modules/admin-store/pages/products/product-addition/product-addition.page.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], ProductAdditionPage);
    return ProductAdditionPage;
}());



/***/ })

}]);
//# sourceMappingURL=src-app-modules-admin-store-pages-products-product-addition-product-addition-module.js.map