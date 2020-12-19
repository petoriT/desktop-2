(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-modules-auth-pages-store-selections-store-selections-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/auth/pages/store-selections/store-selections.page.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/auth/pages/store-selections/store-selections.page.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n\r\n\r\n<ion-toolbar  > \r\n  <ion-buttons slot=\"start\">\r\n    <ion-back-button   defaultHref=\"/admin-store/store/dashboard\" ></ion-back-button>\r\n  </ion-buttons>\r\n    \r\n  <ion-searchbar\r\n  (ionInput)=\"searchItems($event)\"\r\n  [debounce]=\"1000\"\r\n  placeholder=\"search {{searchPlaceholder}}...\"\r\n></ion-searchbar>\r\n<ion-button\r\nsize=\"small\"\r\nslot=\"end\"\r\nshape=\"round\"\r\ncolor=\"secondary\"\r\n(click)=\"setRoute()\"\r\n\r\n>\r\n<ion-icon color=\"primary\" slot=\"icon-only\" name=\"add\"></ion-icon>\r\n</ion-button>\r\n\r\n</ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n\r\n<ion-content>\r\n \r\n  <ion-title >\r\n    <h1 style=\"text-align: center;\">\r\n   Your Stores\r\n    </h1>\r\n \r\n  </ion-title>\r\n  <ion-text style=\"text-align: center;display: block;\">\r\n    <sub> Manage your stores </sub>\r\n  </ion-text>\r\n    \r\n<app-stores-list></app-stores-list>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/auth/pages/store-selections/stores/stores-list/stores-list.component.html":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/auth/pages/store-selections/stores/stores-list/stores-list.component.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--<ion-card\">\r\n\r\n</ion-card>-->\r\n<ion-card\r\n  style=\"--ion-background-color: #ffffff; height: 30vh\"\r\n  *ngFor=\"let store of stores$\"\r\n>\r\n  <div (click)=\"SwitchStore(store)\">\r\n    <div *ngFor=\"let logo of store.logo\">\r\n      <ion-img\r\n        style=\"object-fit: cover; height: 15vh\"\r\n        src=\"{{ logo.url }}\"\r\n      ></ion-img>\r\n    </div>\r\n\r\n    <ion-card-header>\r\n      <ion-card-subtitle>{{ store.name }}</ion-card-subtitle>\r\n      <ion-card-title>{{ store.tag_line }}</ion-card-title>\r\n    </ion-card-header>\r\n  </div>\r\n</ion-card>\r\n");

/***/ }),

/***/ "./src/app/modules/auth/pages/store-selections/store-selections-routing.module.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/auth/pages/store-selections/store-selections-routing.module.ts ***!
  \****************************************************************************************/
/*! exports provided: StoreSelectionsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreSelectionsPageRoutingModule", function() { return StoreSelectionsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _store_selections_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store-selections.page */ "./src/app/modules/auth/pages/store-selections/store-selections.page.ts");




var routes = [
    {
        path: '',
        component: _store_selections_page__WEBPACK_IMPORTED_MODULE_3__["StoreSelectionsPage"]
    }
];
var StoreSelectionsPageRoutingModule = /** @class */ (function () {
    function StoreSelectionsPageRoutingModule() {
    }
    StoreSelectionsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], StoreSelectionsPageRoutingModule);
    return StoreSelectionsPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/auth/pages/store-selections/store-selections.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/modules/auth/pages/store-selections/store-selections.module.ts ***!
  \********************************************************************************/
/*! exports provided: StoreSelectionsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreSelectionsPageModule", function() { return StoreSelectionsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _store_selections_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./store-selections-routing.module */ "./src/app/modules/auth/pages/store-selections/store-selections-routing.module.ts");
/* harmony import */ var _store_selections_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./store-selections.page */ "./src/app/modules/auth/pages/store-selections/store-selections.page.ts");
/* harmony import */ var _stores_stores_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./stores/stores.module */ "./src/app/modules/auth/pages/store-selections/stores/stores.module.ts");








var StoreSelectionsPageModule = /** @class */ (function () {
    function StoreSelectionsPageModule() {
    }
    StoreSelectionsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _stores_stores_module__WEBPACK_IMPORTED_MODULE_7__["StoresModule"],
                _store_selections_routing_module__WEBPACK_IMPORTED_MODULE_5__["StoreSelectionsPageRoutingModule"],
            ],
            declarations: [_store_selections_page__WEBPACK_IMPORTED_MODULE_6__["StoreSelectionsPage"]]
        })
    ], StoreSelectionsPageModule);
    return StoreSelectionsPageModule;
}());



/***/ }),

/***/ "./src/app/modules/auth/pages/store-selections/store-selections.page.scss":
/*!********************************************************************************!*\
  !*** ./src/app/modules/auth/pages/store-selections/store-selections.page.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYXV0aC9wYWdlcy9zdG9yZS1zZWxlY3Rpb25zL3N0b3JlLXNlbGVjdGlvbnMucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/auth/pages/store-selections/store-selections.page.ts":
/*!******************************************************************************!*\
  !*** ./src/app/modules/auth/pages/store-selections/store-selections.page.ts ***!
  \******************************************************************************/
/*! exports provided: StoreSelectionsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreSelectionsPage", function() { return StoreSelectionsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var src_app_core_modules_services_header_header_state_header_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core-modules/services/header/header-state/header-state.service */ "./src/app/core-modules/services/header/header-state/header-state.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");




var StoreSelectionsPage = /** @class */ (function () {
    function StoreSelectionsPage(headerState, router) {
        this.headerState = headerState;
        this.router = router;
    }
    StoreSelectionsPage.prototype.ngOnInit = function () {
    };
    StoreSelectionsPage.prototype.setRoute = function () {
        this.headerState.setReturnRoute("/user/stores");
        this.router.navigate(['/auth/user/store-register']);
    };
    StoreSelectionsPage.ctorParameters = function () { return [
        { type: src_app_core_modules_services_header_header_state_header_state_service__WEBPACK_IMPORTED_MODULE_2__["HeaderStateService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    StoreSelectionsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-store-selections',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./store-selections.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/auth/pages/store-selections/store-selections.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./store-selections.page.scss */ "./src/app/modules/auth/pages/store-selections/store-selections.page.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_core_modules_services_header_header_state_header_state_service__WEBPACK_IMPORTED_MODULE_2__["HeaderStateService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], StoreSelectionsPage);
    return StoreSelectionsPage;
}());



/***/ }),

/***/ "./src/app/modules/auth/pages/store-selections/stores/stores-list/stores-list.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/auth/pages/store-selections/stores/stores-list/stores-list.component.scss ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".custom-class {\n  background: whitesmoke;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hdXRoL3BhZ2VzL3N0b3JlLXNlbGVjdGlvbnMvc3RvcmVzL3N0b3Jlcy1saXN0L0M6XFxVc2Vyc1xcTWFydmluXFxEb2N1bWVudHNcXEdpdEh1YlxcYWZyb2JcXGNsaWVudC9zcmNcXGFwcFxcbW9kdWxlc1xcYXV0aFxccGFnZXNcXHN0b3JlLXNlbGVjdGlvbnNcXHN0b3Jlc1xcc3RvcmVzLWxpc3RcXHN0b3Jlcy1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2F1dGgvcGFnZXMvc3RvcmUtc2VsZWN0aW9ucy9zdG9yZXMvc3RvcmVzLWxpc3Qvc3RvcmVzLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9hdXRoL3BhZ2VzL3N0b3JlLXNlbGVjdGlvbnMvc3RvcmVzL3N0b3Jlcy1saXN0L3N0b3Jlcy1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmN1c3RvbS1jbGFzcyB7XHJcbiAgYmFja2dyb3VuZDogd2hpdGVzbW9rZTtcclxufVxyXG4iLCIuY3VzdG9tLWNsYXNzIHtcbiAgYmFja2dyb3VuZDogd2hpdGVzbW9rZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/auth/pages/store-selections/stores/stores-list/stores-list.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/auth/pages/store-selections/stores/stores-list/stores-list.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: StoresListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoresListComponent", function() { return StoresListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var src_app_core_modules_services_profile_profile_facade_profile_facade_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core-modules/services/profile/profile-facade/profile-facade.service */ "./src/app/core-modules/services/profile/profile-facade/profile-facade.service.ts");
/* harmony import */ var src_app_core_modules_services_auth_auth_api_auth_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core-modules/services/auth/auth-api/auth-api.service */ "./src/app/core-modules/services/auth/auth-api/auth-api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var src_app_core_modules_services_vouchers_voucher_facade_voucher_facade_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core-modules/services/vouchers/voucher-facade/voucher-facade.service */ "./src/app/core-modules/services/vouchers/voucher-facade/voucher-facade.service.ts");
/* harmony import */ var src_app_core_modules_services_products_product_facade_product_facade_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core-modules/services/products/product-facade/product-facade.service */ "./src/app/core-modules/services/products/product-facade/product-facade.service.ts");
/* harmony import */ var src_app_core_modules_services_orders_order_facade_order_facade_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core-modules/services/orders/order-facade/order-facade.service */ "./src/app/core-modules/services/orders/order-facade/order-facade.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");









var StoresListComponent = /** @class */ (function () {
    function StoresListComponent(userFacade, authApi, router, voucherFacade, productFacade, orderFacade, loadingController) {
        this.userFacade = userFacade;
        this.authApi = authApi;
        this.router = router;
        this.voucherFacade = voucherFacade;
        this.productFacade = productFacade;
        this.orderFacade = orderFacade;
        this.loadingController = loadingController;
    }
    StoresListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userFacade.getUser$().subscribe(function (res) {
            console.log(res);
            _this.user = res;
        }, function (err) {
            console.log(err);
        });
        this.presentLoading();
        this.authApi
            .getVendorStores()
            .pipe()
            .subscribe(function (res) {
            _this.loadingController.dismiss();
            _this.stores$ = res.stores;
            console.log(res);
        });
    };
    StoresListComponent.prototype.presentLoading = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var loading, _a, role, data;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            cssClass: "custom-class",
                            message: "Please wait...",
                        })];
                    case 1:
                        loading = _b.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _b.sent();
                        return [4 /*yield*/, loading.onDidDismiss()];
                    case 3:
                        _a = _b.sent(), role = _a.role, data = _a.data;
                        loading.dismiss();
                        console.log("Loading dismissed!");
                        return [2 /*return*/];
                }
            });
        });
    };
    StoresListComponent.prototype.SwitchStore = function (store) {
        var _this = this;
        this.productFacade.loadStoreProducts(store._id);
        this.userFacade.setCurrentStore(store);
        console.log(store);
        setTimeout(function () {
            _this.router.navigate(["/admin-store"]);
        }, 1000);
    };
    StoresListComponent.ctorParameters = function () { return [
        { type: src_app_core_modules_services_profile_profile_facade_profile_facade_service__WEBPACK_IMPORTED_MODULE_2__["UserFacadeService"] },
        { type: src_app_core_modules_services_auth_auth_api_auth_api_service__WEBPACK_IMPORTED_MODULE_3__["AuthApiService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: src_app_core_modules_services_vouchers_voucher_facade_voucher_facade_service__WEBPACK_IMPORTED_MODULE_5__["VoucherFacadeService"] },
        { type: src_app_core_modules_services_products_product_facade_product_facade_service__WEBPACK_IMPORTED_MODULE_6__["ProductFacadeService"] },
        { type: src_app_core_modules_services_orders_order_facade_order_facade_service__WEBPACK_IMPORTED_MODULE_7__["OrderFacadeService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["LoadingController"] }
    ]; };
    StoresListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-stores-list",
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./stores-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/auth/pages/store-selections/stores/stores-list/stores-list.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./stores-list.component.scss */ "./src/app/modules/auth/pages/store-selections/stores/stores-list/stores-list.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_core_modules_services_profile_profile_facade_profile_facade_service__WEBPACK_IMPORTED_MODULE_2__["UserFacadeService"],
            src_app_core_modules_services_auth_auth_api_auth_api_service__WEBPACK_IMPORTED_MODULE_3__["AuthApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            src_app_core_modules_services_vouchers_voucher_facade_voucher_facade_service__WEBPACK_IMPORTED_MODULE_5__["VoucherFacadeService"],
            src_app_core_modules_services_products_product_facade_product_facade_service__WEBPACK_IMPORTED_MODULE_6__["ProductFacadeService"],
            src_app_core_modules_services_orders_order_facade_order_facade_service__WEBPACK_IMPORTED_MODULE_7__["OrderFacadeService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["LoadingController"]])
    ], StoresListComponent);
    return StoresListComponent;
}());



/***/ }),

/***/ "./src/app/modules/auth/pages/store-selections/stores/stores.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/auth/pages/store-selections/stores/stores.module.ts ***!
  \*****************************************************************************/
/*! exports provided: StoresModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoresModule", function() { return StoresModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _stores_list_stores_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stores-list/stores-list.component */ "./src/app/modules/auth/pages/store-selections/stores/stores-list/stores-list.component.ts");




var StoresModule = /** @class */ (function () {
    function StoresModule() {
    }
    StoresModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _stores_list_stores_list_component__WEBPACK_IMPORTED_MODULE_3__["StoresListComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ],
            exports: [
                _stores_list_stores_list_component__WEBPACK_IMPORTED_MODULE_3__["StoresListComponent"]
            ]
        })
    ], StoresModule);
    return StoresModule;
}());



/***/ })

}]);
//# sourceMappingURL=src-app-modules-auth-pages-store-selections-store-selections-module.js.map