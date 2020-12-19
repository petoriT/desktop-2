(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-modules-user-pages-home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/user/pages/home/home.page.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/user/pages/home/home.page.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-user-header></app-user-header>\r\n<ion-content overflow-scroll=\"true\">\r\n  <app-promo-slides class=\"headline\"></app-promo-slides>\r\n  <ion-toolbar>\r\n    <ion-text>\r\n      <h6 style=\"color: #018786; padding-left: 4px\">DEPARTMENTS</h6>\r\n    </ion-text>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button\r\n        size=\"small\"\r\n        shape=\"round\"\r\n        color=\"primary\"\r\n        fill=\"outline\"\r\n        (click)=\"department.loadAllProducts()\"\r\n        class=\"pageSectionalToogle\"\r\n      >\r\n        Show all\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n<ion-item style=\"--inner-padding-end:5px\" class=\"ion-no-padding\">\r\n\r\n  <app-shop-by-department\r\n    #department\r\n    style=\"overflow-x: auto; display: flex;\"\r\n    class=\"bottom-padding\"\r\n  ></app-shop-by-department>\r\n  \r\n</ion-item>\r\n<ion-toolbar *ngIf=\"show_liked\">\r\n  <ion-text>\r\n    <h6 style=\"color: #018786; padding-left: 4px\">YOUR LIKED</h6>\r\n  </ion-text>\r\n  <ion-buttons slot=\"end\">\r\n    <ion-button\r\n      size=\"small\"\r\n      shape=\"round\"\r\n      color=\"primary\"\r\n      fill=\"outline\"\r\n      (click)=\"ad_space.loadRecommendedProducts()\"\r\n      class=\"pageSectionalToogle\"\r\n    >\r\n      Show all\r\n    </ion-button>\r\n  </ion-buttons>\r\n</ion-toolbar>\r\n<ion-item  *ngIf=\"show_liked\" class=\"ion-no-padding end-padding\">\r\n  <app-user-liked  style=\"overflow-x: auto; display: flex;\"  class=\"bottom-padding\" #userLikedProducts> \r\n\r\n  </app-user-liked>\r\n</ion-item>\r\n  <ion-toolbar *ngIf=\"show_top_picks\">\r\n    <ion-text>\r\n      <h6 style=\"color: #018786; padding-left: 4px\">TOP PICKS</h6>\r\n    </ion-text>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button\r\n        size=\"small\"\r\n        shape=\"round\"\r\n        color=\"primary\"\r\n        fill=\"outline\"\r\n        (click)=\"ad_space.loadRecommendedProducts()\"\r\n        class=\"pageSectionalToogle\"\r\n      >\r\n        Show all\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n  <ion-item  *ngIf=\"show_top_picks\" class=\"ion-no-padding end-padding\">\r\n    <app-ad-space #ad_space    class=\"bottom-padding\" ></app-ad-space>\r\n  </ion-item>\r\n\r\n\r\n  <ion-toolbar>\r\n    <ion-text>\r\n      <h6 style=\"color: #018786; padding-left: 4px\">PROMOTIONS</h6>\r\n    </ion-text>\r\n \r\n  </ion-toolbar>\r\n  <ion-item class=\"ion-no-padding  end-padding\">\r\n  <app-promotions class=\"bottom-padding\" > </app-promotions>\r\n  </ion-item>\r\n  <ion-toolbar>\r\n    <ion-text>\r\n      <h6 style=\"color: #018786; padding-left: 4px\">TOP SALES</h6>\r\n    </ion-text>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button\r\n        size=\"small\"\r\n        shape=\"round\"\r\n        color=\"primary\"\r\n        fill=\"outline\"\r\n        (click)=\"top_sales.loadTopSalesProducts()\"\r\n        class=\"pageSectionalToogle\"\r\n      >\r\n        Show all\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n  <ion-item class=\"ion-no-padding  end-padding\">\r\n    <app-top-sales     style=\"overflow-x: auto; display: flex;\"  #top_sales  class=\"bottom-padding\" ></app-top-sales>\r\n  </ion-item>\r\n\r\n  <ion-toolbar>\r\n    <ion-text>\r\n      <h6 style=\"color: #018786; padding-left: 4px\">PRODUCTS ON SALE</h6>\r\n    </ion-text>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button\r\n        size=\"small\"\r\n        shape=\"round\"\r\n        color=\"primary\"\r\n        fill=\"outline\"\r\n        (click)=\"sales.loadSalesProducts()\"\r\n        class=\"pageSectionalToogle\"\r\n      >\r\n        Show all\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n  <ion-item  class=\"ion-no-padding  end-padding \">\r\n    <app-sales #sales  class=\"bottom-padding\" ></app-sales>\r\n  </ion-item>\r\n\r\n  <ion-toolbar>\r\n    <ion-text>\r\n      <h6 style=\"color: #018786; padding-left: 4px\">MOST LIKED</h6>\r\n    </ion-text>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button\r\n        size=\"small\"\r\n        shape=\"round\"\r\n        color=\"primary\"\r\n        fill=\"outline\"\r\n        (click)=\"most_liked.loadLikedProducts()\"\r\n        class=\"pageSectionalToogle\"\r\n      >\r\n        Show all\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n  <ion-item class=\"ion-no-padding  end-padding\">\r\n  <app-most-liked  style=\"overflow-x: auto; display: flex;\"   class=\"bottom-padding\" #most_liked></app-most-liked>\r\n  </ion-item>\r\n\r\n  <!--modified vouchers products-->\r\n  <!--app-home-one></app-home-one>\r\nnormal products without vouchers\r\n<app-home-two></app-home-two>\r\n<app-home-three></app-home-three>-->\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/modules/user/pages/home/home.module.ts":
/*!********************************************************!*\
  !*** ./src/app/modules/user/pages/home/home.module.ts ***!
  \********************************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _shared_components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/components/components.module */ "./src/app/modules/user/shared/components/components.module.ts");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home.page */ "./src/app/modules/user/pages/home/home.page.ts");
/* harmony import */ var src_app_modules_user_pages_home_components_home_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/modules/user/pages/home/components/home-components.module */ "./src/app/modules/user/pages/home/components/home-components.module.ts");









var routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_7__["HomePage"]
    }
];
var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _shared_components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"],
                src_app_modules_user_pages_home_components_home_components_module__WEBPACK_IMPORTED_MODULE_8__["HomeComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_7__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/modules/user/pages/home/home.page.scss":
/*!********************************************************!*\
  !*** ./src/app/modules/user/pages/home/home.page.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".fullprice {\n  text-decoration: line-through;\n}\n\n.headline {\n  height: 323px;\n  background-color: 0;\n}\n\n.whiteBackgroudOne {\n  position: relative;\n  background: white;\n  overflow: visible;\n}\n\n.pageSectionalTitle {\n  font-size: 16px;\n  font-weight: 400;\n}\n\n.pageSectionalToogle {\n  font-size: 12px;\n}\n\n.bottom-padding {\n  padding-bottom: 16px;\n}\n\n.end-padding {\n  --inner-padding-end: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy91c2VyL3BhZ2VzL2hvbWUvQzpcXFVzZXJzXFxNYXJ2aW5cXERvY3VtZW50c1xcR2l0SHViXFxhZnJvYlxcY2xpZW50L3NyY1xcYXBwXFxtb2R1bGVzXFx1c2VyXFxwYWdlc1xcaG9tZVxcaG9tZS5wYWdlLnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvdXNlci9wYWdlcy9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNkJBQUE7QUNDRjs7QURDQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ0VBOztBREFBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FDR0Y7O0FEREE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUNJRjs7QURGQTtFQUNHLGVBQUE7QUNLSDs7QURIQTtFQUNFLG9CQUFBO0FDTUY7O0FESkE7RUFDQSx3QkFBQTtBQ09BIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy91c2VyL3BhZ2VzL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZnVsbHByaWNlIHtcclxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcclxufVxyXG4uaGVhZGxpbmV7XHJcbmhlaWdodDogMzIzcHg7XHJcbmJhY2tncm91bmQtY29sb3I6IGdyZWVuKCRjb2xvcjogIzAwMDAwMCk7XHJcbn1cclxuLndoaXRlQmFja2dyb3VkT25le1xyXG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xyXG59XHJcbi5wYWdlU2VjdGlvbmFsVGl0bGV7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuLnBhZ2VTZWN0aW9uYWxUb29nbGV7XHJcbiAgIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG4uYm90dG9tLXBhZGRpbmd7XHJcbiAgcGFkZGluZy1ib3R0b206IDE2cHg7XHJcbn1cclxuLmVuZC1wYWRkaW5ne1xyXG4tLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XHJcbn1cclxuIiwiLmZ1bGxwcmljZSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xufVxuXG4uaGVhZGxpbmUge1xuICBoZWlnaHQ6IDMyM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAwO1xufVxuXG4ud2hpdGVCYWNrZ3JvdWRPbmUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbn1cblxuLnBhZ2VTZWN0aW9uYWxUaXRsZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLnBhZ2VTZWN0aW9uYWxUb29nbGUge1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5ib3R0b20tcGFkZGluZyB7XG4gIHBhZGRpbmctYm90dG9tOiAxNnB4O1xufVxuXG4uZW5kLXBhZGRpbmcge1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/user/pages/home/home.page.ts":
/*!******************************************************!*\
  !*** ./src/app/modules/user/pages/home/home.page.ts ***!
  \******************************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var src_app_core_modules_services_cart_cart_state_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core-modules/services/cart/cart-state/cart.service */ "./src/app/core-modules/services/cart/cart-state/cart.service.ts");
/* harmony import */ var src_app_core_modules_services_products_product_facade_product_facade_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core-modules/services/products/product-facade/product-facade.service */ "./src/app/core-modules/services/products/product-facade/product-facade.service.ts");
/* harmony import */ var src_app_core_modules_services_header_header_state_header_state_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core-modules/services/header/header-state/header-state.service */ "./src/app/core-modules/services/header/header-state/header-state.service.ts");






var HomePage = /** @class */ (function () {
    function HomePage(cartService, alertController, _productFacade, headerState) {
        this.cartService = cartService;
        this.alertController = alertController;
        this._productFacade = _productFacade;
        this.headerState = headerState;
    }
    HomePage.prototype.ngOnInit = function () {
        var _this = this;
        //load all products
        this._productFacade.loadProducts();
        this._productFacade.loadUserlikedProducts();
        this.products$ = this._productFacade.getUserlikedProducts();
        this.products$.subscribe(function (res) {
            if (res.length == 0) {
                _this.show_liked = false;
            }
            else {
                _this.show_liked = true;
            }
            _this.liked = res;
            console.log(_this.show_liked);
        });
    };
    HomePage.prototype.addToCart = function (product) {
        this.cartService.addProduct(product);
    };
    HomePage.ctorParameters = function () { return [
        { type: src_app_core_modules_services_cart_cart_state_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
        { type: src_app_core_modules_services_products_product_facade_product_facade_service__WEBPACK_IMPORTED_MODULE_4__["ProductFacadeService"] },
        { type: src_app_core_modules_services_header_header_state_header_state_service__WEBPACK_IMPORTED_MODULE_5__["HeaderStateService"] }
    ]; };
    HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-home",
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/user/pages/home/home.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./home.page.scss */ "./src/app/modules/user/pages/home/home.page.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_core_modules_services_cart_cart_state_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            src_app_core_modules_services_products_product_facade_product_facade_service__WEBPACK_IMPORTED_MODULE_4__["ProductFacadeService"],
            src_app_core_modules_services_header_header_state_header_state_service__WEBPACK_IMPORTED_MODULE_5__["HeaderStateService"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=src-app-modules-user-pages-home-home-module.js.map