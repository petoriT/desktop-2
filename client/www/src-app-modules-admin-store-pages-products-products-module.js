(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-modules-admin-store-pages-products-products-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin-store/pages/products/products.page.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin-store/pages/products/products.page.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header style=\"padding-top: 5px\" *ngIf=\"segment !== 'add_product' \">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button\r\n        size=\"small\"\r\n        defaultHref=\"/admin-store/store/dashboard\"\r\n        slot=\"icon-only\"\r\n        name=\"arrow-back\"\r\n      >\r\n      </ion-back-button>\r\n    </ion-buttons>\r\n    <ion-searchbar\r\n      (ionInput)=\"searchItems($event)\"\r\n      [debounce]=\"1000\"\r\n      placeholder=\"search {{searchPlaceholder}}...\"\r\n    ></ion-searchbar>\r\n    <ion-button\r\n      size=\"small\"\r\n      slot=\"end\"\r\n      shape=\"round\"\r\n      (click)=\"addProductSlides('add_product')\"\r\n      *ngIf=\"products || category\"\r\n    >\r\n      <ion-icon color=\"secondary\" slot=\"icon-only\" name=\"add\"></ion-icon>\r\n    </ion-button>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-segment\r\n  *ngIf=\"segment !== 'add_product' \"\r\n  value=\"inventory\"\r\n  fill=\"solid\"\r\n  [(ngModel)]=\"segment\"\r\n>\r\n  <ion-segment-button value=\"inventory\">\r\n    <ion-label>Inventory</ion-label>\r\n  </ion-segment-button>\r\n  <ion-segment-button size=\"small\" value=\"products\">\r\n    <ion-label>Products</ion-label>\r\n  </ion-segment-button>\r\n  <!--\r\n<ion-segment-button value=\"category\">\r\n    <ion-label>Category</ion-label>\r\n  </ion-segment-button>\r\n-->\r\n</ion-segment>\r\n\r\n<ion-content scroll=\"true\">\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\r\n    <ion-refresher-content></ion-refresher-content>\r\n  </ion-refresher>\r\n  <div [ngSwitch]=\"segment\">\r\n    <app-category-comp\r\n      *ngSwitchCase=\"'category'\"\r\n      (shareCategory)=\"acceptCategory($event)\"\r\n    ></app-category-comp>\r\n    <app-products-comp\r\n      [p_products]=\"products$\"\r\n      *ngSwitchCase=\"'products'\"\r\n      (segment)=\"addProductSlides($event)\"\r\n    ></app-products-comp>\r\n    <app-add-product\r\n      (segment)=\"fromAddProduct($event)\"\r\n      *ngSwitchCase=\"'add_product'\"\r\n    ></app-add-product>\r\n    <app-inventory\r\n      [inventory_products]=\"products$\"\r\n      (segment)=\"addProductSlides($event)\"\r\n      #inventory\r\n      *ngSwitchCase=\"'inventory'\"\r\n    ></app-inventory>\r\n  </div>\r\n</ion-content>\r\n<ion-footer *ngIf=\"segment!=='add_product'\">\r\n  <ion-toolbar>\r\n    <ion-row>\r\n      <ion-col class=\"center\" size=\"4\">\r\n        <ion-button\r\n          size=\"small\"\r\n          shape=\"round\"\r\n          fill=\"clear\"\r\n          [routerLink]=\"['/admin-store/store/sales']\"\r\n        >\r\n          <img\r\n            style=\"max-width: 30%; display: block\"\r\n            src=\"./assets/grey divIcons made by a href=httpswww.flaticon.comauthorssrip title=sripsripa from a href=httpswww.flaticon.com title=Flaticonwww.flaticon.comadiv  1.svg\"\r\n            alt=\"\"\r\n          />\r\n\r\n          <sub style=\"color: grey; left: 5px\">SALES</sub>\r\n        </ion-button>\r\n      </ion-col>\r\n      <ion-col class=\"center\" size=\"4\">\r\n        <ion-fab>\r\n          <ion-fab-button\r\n            [routerLink]=\"['/admin-store/store/dashboard']\"\r\n            size=\"small\"\r\n            color=\"white\"\r\n          >\r\n            <ion-icon color=\"primary\" name=\"home\"></ion-icon>\r\n          </ion-fab-button>\r\n        </ion-fab>\r\n      </ion-col>\r\n      <ion-col class=\"center\" size=\"4\">\r\n        <ion-button\r\n          size=\"small\"\r\n          fill=\"clear\"\r\n          shape=\"round\"\r\n          [routerLink]=\"['/admin-store/store/users']\"\r\n        >\r\n          <img\r\n            style=\"max-width: 30%; display: block\"\r\n            src=\"./assets/grey users divIcons made by a href=httpswww.flaticon.comauthorssrip title=sripsripa from a href=httpswww.flaticon.com title=Flaticonwww.flaticon.comadiv 1 (1).svg\"\r\n          />\r\n          <sub style=\"color: grey; left: 5px\">Users</sub>\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n");

/***/ }),

/***/ "./src/app/modules/admin-store/pages/products/products.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/modules/admin-store/pages/products/products.module.ts ***!
  \***********************************************************************/
/*! exports provided: ProductsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsPageModule", function() { return ProductsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _shared_components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/components/components.module */ "./src/app/modules/admin-store/shared/components/components.module.ts");
/* harmony import */ var _components_products_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/products-components.module */ "./src/app/modules/admin-store/pages/products/components/products-components.module.ts");
/* harmony import */ var _products_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./products.page */ "./src/app/modules/admin-store/pages/products/products.page.ts");









var routes = [
    {
        path: '',
        component: _products_page__WEBPACK_IMPORTED_MODULE_8__["ProductsPage"]
    }
];
var ProductsPageModule = /** @class */ (function () {
    function ProductsPageModule() {
    }
    ProductsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _shared_components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"],
                _components_products_components_module__WEBPACK_IMPORTED_MODULE_7__["ProductsComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_products_page__WEBPACK_IMPORTED_MODULE_8__["ProductsPage"]]
        })
    ], ProductsPageModule);
    return ProductsPageModule;
}());



/***/ }),

/***/ "./src/app/modules/admin-store/pages/products/products.page.scss":
/*!***********************************************************************!*\
  !*** ./src/app/modules/admin-store/pages/products/products.page.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-card {\n  display: flex;\n  flex-direction: column;\n  width: 100% !important;\n  margin: 0 !important;\n  height: 100%;\n}\n\nion-scroll {\n  height: 100%;\n}\n\nion-item {\n  max-height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\nion-segment-button {\n  --padding-end:1px;\n  --padding-start:1px ;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hZG1pbi1zdG9yZS9wYWdlcy9wcm9kdWN0cy9DOlxcVXNlcnNcXE1hcnZpblxcRG9jdW1lbnRzXFxHaXRIdWJcXGFmcm9iXFxjbGllbnQvc3JjXFxhcHBcXG1vZHVsZXNcXGFkbWluLXN0b3JlXFxwYWdlc1xccHJvZHVjdHNcXHByb2R1Y3RzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9hZG1pbi1zdG9yZS9wYWdlcy9wcm9kdWN0cy9wcm9kdWN0cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRyxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtBQ0NIOztBREVBO0VBQ0UsWUFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUNDRjs7QURDQTtFQUNFLGlCQUFBO0VBQ0Esb0JBQUE7QUNFRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4tc3RvcmUvcGFnZXMvcHJvZHVjdHMvcHJvZHVjdHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmR7XG4gICBkaXNwbGF5OiBmbGV4O1xuICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgIGhlaWdodDogMTAwJVxufVxuXG5pb24tc2Nyb2xsIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5pb24taXRlbSB7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5pb24tc2VnbWVudC1idXR0b257XG4gIC0tcGFkZGluZy1lbmQ6MXB4O1xuICAtLXBhZGRpbmctc3RhcnQ6MXB4XG59XG4iLCJpb24tY2FyZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbmlvbi1zY3JvbGwge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbmlvbi1pdGVtIHtcbiAgbWF4LWhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgLS1wYWRkaW5nLWVuZDoxcHg7XG4gIC0tcGFkZGluZy1zdGFydDoxcHggO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/admin-store/pages/products/products.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/modules/admin-store/pages/products/products.page.ts ***!
  \*********************************************************************/
/*! exports provided: ProductsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsPage", function() { return ProductsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var src_app_core_modules_services_products_product_facade_product_facade_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core-modules/services/products/product-facade/product-facade.service */ "./src/app/core-modules/services/products/product-facade/product-facade.service.ts");
/* harmony import */ var src_app_core_modules_services_categories_category_facade_category_facade_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core-modules/services/categories/category-facade/category-facade.service */ "./src/app/core-modules/services/categories/category-facade/category-facade.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var src_app_core_modules_services_profile_profile_facade_profile_facade_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core-modules/services/profile/profile-facade/profile-facade.service */ "./src/app/core-modules/services/profile/profile-facade/profile-facade.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_core_modules_services_menus_menu_state_menu_state_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core-modules/services/menus/menu-state/menu-state.service */ "./src/app/core-modules/services/menus/menu-state/menu-state.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");









var ProductsPage = /** @class */ (function () {
    function ProductsPage(productFacade, categoryFacade, userFacade, route, menuState, toastController) {
        this.productFacade = productFacade;
        this.categoryFacade = categoryFacade;
        this.userFacade = userFacade;
        this.route = route;
        this.menuState = menuState;
        this.toastController = toastController;
        this.products = false;
        this.segment = "inventory";
        this.category = true;
        this.updateProduct = {};
        this.searchPlaceholder = "Products";
    }
    ProductsPage.prototype.ngOnInit = function () {
        //get current store
        this.getProducts();
        this.menuState.loggedIn();
        //load categories
        this.categoryFacade.loadCategories();
    };
    ProductsPage.prototype.doRefresh = function (event) {
        if (event.returnValue) {
            this.getProducts();
        }
    };
    ProductsPage.prototype.getProducts = function () {
        var _this = this;
        //get current store
        var store = this.userFacade.getCurrentStore();
        //load store profile and subscribe store products
        if (Object.keys(store).length === 0) {
            this.userFacade.getUser$().subscribe(function (res) {
                _this.userFacade.loadStoreProfile(res.store_id);
                _this.productFacade.loadStoreProducts(res.store_id);
                _this.products$ = _this.productFacade
                    .getCurrentStoreProducts()
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["distinctUntilChanged"])());
            }, function (err) {
                console.log(err);
            });
        }
        else {
            this.userFacade.loadStoreProfile(store._id);
            this.productFacade.loadStoreProducts(store._id);
            this.products$ = this.productFacade
                .getCurrentStoreProducts()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["distinctUntilChanged"])());
        }
    };
    ProductsPage.prototype.fromAddProduct = function (data) {
        this.segment = data;
    };
    ProductsPage.prototype.addProductSlides = function (data) {
        var _this = this;
        var products;
        if (data === "add_product") {
            //check lisence
            this.productFacade
                .getStoreProducts$()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["distinctUntilChanged"])())
                .subscribe(function (res) {
                products = res;
                var product_length = products.length;
                var store = _this.userFacade.getCurrentStore();
                var free_trial = store.free_trial;
                var trial_end_date;
                var trial_number_products;
                if (free_trial) {
                    trial_end_date = free_trial.end_date;
                    trial_number_products = free_trial.allowed_products;
                }
                var return_policy_length = store.return_policy.length;
                var lisences = store.lisence;
                var today_ms = Date.now();
                var one_day_ms = 86400000;
                console.log(product_length, return_policy_length);
                //check for lisence
                if (product_length == 0 && return_policy_length == 0) {
                    _this.presentToast("set up your return policy first!");
                    /*setTimeout(() => {
                    this.route.navigate(["/store/return-policy"]);
                  }, 1000)*/
                }
                else {
                    var allow_access_1 = false;
                    if (lisences.length > 0) {
                        lisences.forEach(function (lisence) {
                            var lisence_end_date = lisence.payed_amount.end_date;
                            var time_remaining = (lisence_end_date - today_ms) / one_day_ms;
                            if (product_length < lisence.number_of_products && time_remaining > 0) {
                                allow_access_1 = true;
                            }
                        });
                    }
                    else {
                        var trial_time_remaining = (trial_end_date - today_ms) / one_day_ms;
                        if (trial_time_remaining > 0 && product_length < trial_number_products) {
                            allow_access_1 = true;
                        }
                    }
                    if (allow_access_1) {
                        _this.segment = data;
                    }
                    else {
                        _this.presentToast("Buy license or try our 15 days trial to add more products");
                    }
                }
            });
        }
        else {
            this.segment = data;
        }
    };
    ProductsPage.prototype.searchItems = function (ev) {
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != "") {
            this.productFacade.loadSearchedStoreProducts(val);
        }
        else {
            // Reset items back to all of the items
            this.productFacade.loadVendorProducts();
        }
    };
    ProductsPage.prototype.presentToast = function (msg) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var toast;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: msg,
                            duration: 2500,
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProductsPage.ctorParameters = function () { return [
        { type: src_app_core_modules_services_products_product_facade_product_facade_service__WEBPACK_IMPORTED_MODULE_2__["ProductFacadeService"] },
        { type: src_app_core_modules_services_categories_category_facade_category_facade_service__WEBPACK_IMPORTED_MODULE_3__["CategoryFacadeService"] },
        { type: src_app_core_modules_services_profile_profile_facade_profile_facade_service__WEBPACK_IMPORTED_MODULE_5__["UserFacadeService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: src_app_core_modules_services_menus_menu_state_menu_state_service__WEBPACK_IMPORTED_MODULE_7__["MenuStateService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ToastController"] }
    ]; };
    ProductsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-products",
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./products.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin-store/pages/products/products.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./products.page.scss */ "./src/app/modules/admin-store/pages/products/products.page.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_core_modules_services_products_product_facade_product_facade_service__WEBPACK_IMPORTED_MODULE_2__["ProductFacadeService"],
            src_app_core_modules_services_categories_category_facade_category_facade_service__WEBPACK_IMPORTED_MODULE_3__["CategoryFacadeService"],
            src_app_core_modules_services_profile_profile_facade_profile_facade_service__WEBPACK_IMPORTED_MODULE_5__["UserFacadeService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            src_app_core_modules_services_menus_menu_state_menu_state_service__WEBPACK_IMPORTED_MODULE_7__["MenuStateService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ToastController"]])
    ], ProductsPage);
    return ProductsPage;
}());



/***/ })

}]);
//# sourceMappingURL=src-app-modules-admin-store-pages-products-products-module.js.map