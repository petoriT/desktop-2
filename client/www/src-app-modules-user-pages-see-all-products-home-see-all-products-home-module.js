(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-modules-user-pages-see-all-products-home-see-all-products-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/user/pages/see-all-products-home/all-products/main-list/main-list.component.html":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/user/pages/see-all-products-home/all-products/main-list/main-list.component.html ***!
  \************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-searchbar\r\n      (ionInput)=\"searchItems($event)\"\r\n      [debounce]=\"1000\"\r\n      placeholder=\"search anything...\"\r\n    ></ion-searchbar>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<div *ngIf=\"all_p\">\r\n  <!--<div *ngFor=\"let category of categories$ | async; let i = index\">\r\n    <ion-chip (click)=\"loadCurrentCategories(category.name)\">\r\n      {{ category.name }}\r\n    </ion-chip>\r\n  </div>-->\r\n  <ion-toolbar>\r\n    <ion-title>\r\n      <h1> {{ all_p }} </h1>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n\r\n</div>\r\n<div *ngIf=\"current_group\">\r\n  <ion-chip (click)=\"loadCategoryProducts(current_group)\">\r\n    {{ current_group }}\r\n  </ion-chip>\r\n  <ion-chip\r\n    (click)=\"loadSubCategoryProducts(selected)\"\r\n    *ngFor=\"let selected of selected_categgory; let i = index\"\r\n    color=\"primary\"\r\n  >\r\n    {{ selected }}\r\n  </ion-chip>\r\n  <ion-chip\r\n    (click)=\"loadProductTypeCategory(selected)\"\r\n    *ngFor=\"let selected of product_type_categories; let i = index\"\r\n    color=\"secondary\"\r\n  >\r\n    {{ selected }}\r\n  </ion-chip>\r\n</div>\r\n<!--\r\n\r\n\r\n<div *ngFor=\"let product of products$ | async; let i = index\">\r\n  <ion-card *ngIf=\"i !== 13\" [class]=\"count(i)\">\r\n    <div\r\n      (click)=\"viewDetailPage(product)\"\r\n      style=\"background-image: url({{\r\n        image.url\r\n      }});background-position: center;background-size: cover; height: 70%;width: 100%;\"\r\n      *ngFor=\"let image of product.productImage\"\r\n    ></div>\r\n    <ion-card-header\r\n      style=\"height: 100%; padding: 5px; background-color: #018786\"\r\n    >\r\n      <ion-toolbar color=\"primary\">\r\n        <ion-label>\r\n          {{ product.productPrice | currency: \"R\" }}\r\n        </ion-label>\r\n        <ion-buttons slot=\"end\">\r\n          <ion-button\r\n            fill=\"solid\"\r\n            color=\"primary\"\r\n            size=\"small\"\r\n            (click)=\"addToCart(product)\"\r\n            class=\"add_cart\"\r\n          >\r\n            <ion-icon color=\"tertiary\" name=\"cart-outline\"></ion-icon>\r\n          </ion-button>\r\n        </ion-buttons>\r\n      </ion-toolbar>\r\n    </ion-card-header>\r\n  </ion-card>\r\n  <ion-card class=\"product2\" *ngIf=\"i == 13\">\r\n    <div\r\n      (click)=\"viewDetailPage(product)\"\r\n      style=\"background-image: url({{\r\n        image.url\r\n      }});background-position: center;background-size: cover; height: 50%;width: 100%;\"\r\n      *ngFor=\"let image of product.productImage\"\r\n    ></div>\r\n    <ion-card-header\r\n      style=\"height: 100%; padding: 5px; background-color: #018786\"\r\n    >\r\n      <ion-toolbar color=\"primary\">\r\n        <ion-label>\r\n          {{ product.productPrice | currency: \"R\" }}\r\n        </ion-label>\r\n        <ion-buttons slot=\"end\">\r\n          <ion-button\r\n            fill=\"solid\"\r\n            color=\"primary\"\r\n            size=\"small\"\r\n            (click)=\"addToCart(product)\"\r\n            class=\"add_cart\"\r\n          >\r\n            <ion-icon color=\"tertiary\" name=\"cart-outline\"></ion-icon>\r\n          </ion-button>\r\n        </ion-buttons>\r\n      </ion-toolbar>\r\n    </ion-card-header>\r\n  </ion-card>\r\n</div>-->\r\n\r\n  <div class=\"masonry\" style=\"padding: 5px;\">\r\n    <div style=\" max-width: 50vw;\" class=\"item\" *ngFor=\"let product of products$ | async; let i = index\" >\r\n      <gm-feed-card>\r\n     \r\n          <ion-grid style=\"padding-left: 0px;\r\n          padding-right: 0px;\" >\r\n            <ion-row class=\"ion-no-padding\">\r\n              <ion-col class=\"ion-no-padding\" size=12>\r\n      \r\n                <ion-card (click)=\"viewDetailPage(product)\"  class=\"product\">\r\n          \r\n                  <ion-fab style=\"    top: 1vw;\r\n                  left: 1vw;\" *ngIf=\"product.sale\" >\r\n                    <ion-badge  class=\"center\" color=\"secondary\">\r\n                  SALE\r\n                   \r\n                    </ion-badge>\r\n                  \r\n                  \r\n                  </ion-fab>\r\n               \r\n        \r\n                <div  *ngFor=\"let image of product.productImage; let i = index\">\r\n                  <ion-img *ngIf=\"i ===0 \" style=\" width: 100%;\r\n                  height: 100%;\"  src=\"{{image.url}}\">\r\n        \r\n                  </ion-img>\r\n               \r\n                </div>\r\n                 \r\n              \r\n         \r\n                </ion-card>\r\n              </ion-col>\r\n             <ion-col size=12>\r\n               <ion-toolbar>\r\n                 <ion-grid class=\"ion-no-padding\" style=\"padding-left: 2px;\">\r\n                   <ion-row class=\"ion-no-padding ion-justify-content-evenly\">\r\n                     <ion-col class=\"ion-no-padding\" size=12>\r\n                      <h6 style=\"\r\n                            text-overflow: ellipsis;\r\n                            overflow: hidden;\r\n                            white-space: nowrap;\r\n                            margin-top: 0px;\r\n                            margin-bottom: 0px;\r\n                            max-width: 45vw; \r\n                      \">\r\n                        {{product.productName}}\r\n                      </h6>\r\n                     </ion-col>\r\n             \r\n                   </ion-row>\r\n                   <ion-row class=\"ion-no-padding ion-justify-content-evenly\">\r\n                     \r\n                    <ion-col class=\"ion-no-padding center\" size=8>\r\n                      <ion-label style=\"    text-align: justify;width: 100%;\r\n                      \">\r\n                        {{ product.productPrice | currency: \"R\" }}\r\n                      </ion-label>\r\n                   \r\n                     </ion-col>\r\n                     <ion-col class=\"ion-no-padding ion-justify-content-evenly center\" size=4>\r\n                      <ion-button\r\n                      fill=\"solid\"\r\n                shape=\"round\"\r\n                      size=\"small\"\r\n                      (click)=\"addToCart(product)\"\r\n                      class=\"add_cart\"\r\n                      style=\"width:-webkit-fill-available\"\r\n                    >\r\n                      <ion-icon style=\"position:absolute;\" name=\"cart-outline\"></ion-icon>\r\n                    </ion-button>\r\n                     </ion-col>\r\n                   </ion-row>\r\n                 </ion-grid>\r\n                 \r\n                \r\n               </ion-toolbar>\r\n              \r\n             </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n    </gm-feed-card>\r\n    </div>\r\n \r\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/user/pages/see-all-products-home/see-all-products-home.page.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/user/pages/see-all-products-home/see-all-products-home.page.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<ion-content>\r\n  <app-main-list></app-main-list>\r\n</ion-content>\r\n<ion-footer>\r\n  <ion-toolbar\r\n    color=\"primary\"\r\n    style=\"\r\n      margin: auto;\r\n      width: 95%;\r\n      height: 40px;\r\n      bottom: 5px;\r\n      border-radius: 20px;\r\n      box-shadow: 0px -8px 10px -10px rgba(0, 0, 0, 0.8);\r\n    \"\r\n  >\r\n    <ion-grid>\r\n      <ion-row style=\"margin-top: -12px;\">\r\n        <ion-col size=\"4\">\r\n          <!--<ion-button color=\"secondary\"expand=\"block\" fill=\"clear \"size=\"small\">\r\n           <ion-icon  slot=\"icon-only\"name=\"notifications\"></ion-icon>\r\n          </ion-button>-->\r\n        </ion-col>\r\n        <ion-col class=\"center\" size=\"4\">\r\n          <ion-fab>\r\n            <ion-fab-button color=\"secondary\" (click)=\"goBack()\" size=\"small\">\r\n            \r\n              <ion-icon\r\n              color=\"primary\"\r\n                name=\"basket-outline\"\r\n              ></ion-icon>\r\n            </ion-fab-button>\r\n          </ion-fab>\r\n          <!--<ion-button expand=\"block\" fill=\"clear\"size=\"small\">\r\n            <ion-icon  size=\"large\" slot=\"icon-only\" name=\"document\"></ion-icon>\r\n          </ion-button>-->\r\n        </ion-col>\r\n        <ion-col size=\"4\">\r\n          <!--<ion-button expand=\"block\"fill=\"clear\"size=\"small\">\r\n            <ion-icon  color=\"secondary\" slot=\"icon-only\" name=\"chatbubbles\" ></ion-icon>\r\n            \r\n          </ion-button>-->\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n\r\n");

/***/ }),

/***/ "./src/app/modules/user/pages/see-all-products-home/all-products/all-products.module.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/user/pages/see-all-products-home/all-products/all-products.module.ts ***!
  \**********************************************************************************************/
/*! exports provided: AllProductsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllProductsModule", function() { return AllProductsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _main_list_main_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main-list/main-list.component */ "./src/app/modules/user/pages/see-all-products-home/all-products/main-list/main-list.component.ts");
/* harmony import */ var src_assets_gm_components_gemionic_ui_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/assets/gm-components/gemionic.ui.module */ "./src/assets/gm-components/gemionic.ui.module.ts");





var AllProductsModule = /** @class */ (function () {
    function AllProductsModule() {
    }
    AllProductsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _main_list_main_list_component__WEBPACK_IMPORTED_MODULE_3__["MainListComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                src_assets_gm_components_gemionic_ui_module__WEBPACK_IMPORTED_MODULE_4__["GemionicUiModule"]
            ],
            exports: [
                _main_list_main_list_component__WEBPACK_IMPORTED_MODULE_3__["MainListComponent"]
            ]
        })
    ], AllProductsModule);
    return AllProductsModule;
}());



/***/ }),

/***/ "./src/app/modules/user/pages/see-all-products-home/all-products/main-list/main-list.component.scss":
/*!**********************************************************************************************************!*\
  !*** ./src/app/modules/user/pages/see-all-products-home/all-products/main-list/main-list.component.scss ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".product {\n  margin-bottom: 5px;\n  margin: 12px;\n  border-radius: 15px;\n  margin-left: 0px;\n  margin-right: 0px;\n}\n\n.product2 {\n  height: 25vh;\n  width: 43vw;\n  display: inline;\n  margin: 12px;\n  border-radius: 25px;\n  float: right;\n}\n\n.productTwo {\n  height: 25vh;\n  width: 43vw;\n  display: inline;\n  margin: 12px;\n  border-radius: 25px;\n  float: left;\n}\n\n.productTwo2 {\n  height: 25vh;\n  width: 43vw;\n  display: inline;\n  margin: 12px;\n  border-radius: 25px;\n  float: right;\n}\n\n.productTwos {\n  height: 25vh;\n  width: 100vw;\n  display: inline;\n  margin: 12px;\n  border-radius: 25px;\n  float: right;\n}\n\n.masonry {\n  -moz-column-width: auto;\n  -webkit-column-width: auto;\n  -moz-column-gap: 0.3125em;\n  -webkit-column-gap: 0.3125em;\n  -moz-column-count: 2;\n       column-count: 2;\n}\n\n.masonry .item {\n  display: inline-block;\n  width: 100%;\n  padding-left: 5px;\n  padding-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy91c2VyL3BhZ2VzL3NlZS1hbGwtcHJvZHVjdHMtaG9tZS9hbGwtcHJvZHVjdHMvbWFpbi1saXN0L0M6XFxVc2Vyc1xcTWFydmluXFxEb2N1bWVudHNcXEdpdEh1YlxcYWZyb2JcXGNsaWVudC9zcmNcXGFwcFxcbW9kdWxlc1xcdXNlclxccGFnZXNcXHNlZS1hbGwtcHJvZHVjdHMtaG9tZVxcYWxsLXByb2R1Y3RzXFxtYWluLWxpc3RcXG1haW4tbGlzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy91c2VyL3BhZ2VzL3NlZS1hbGwtcHJvZHVjdHMtaG9tZS9hbGwtcHJvZHVjdHMvbWFpbi1saXN0L21haW4tbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGtCQUFBO0VBRUEsWUFBQTtFQUNBLG1CQUFBO0VBRUEsZ0JBQUE7RUFDQSxpQkFBQTtBQ0ZKOztBRE1BO0VBQ0MsWUFBQTtFQUNHLFdBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNDLG1CQUFBO0VBQ0EsWUFBQTtBQ0hMOztBREtBO0VBQ0MsWUFBQTtFQUNHLFdBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNDLG1CQUFBO0VBQ0EsV0FBQTtBQ0ZMOztBRElBO0VBQ0MsWUFBQTtFQUNHLFdBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNDLG1CQUFBO0VBQ0EsWUFBQTtBQ0RMOztBREdBO0VBQ0MsWUFBQTtFQUNHLFlBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNDLG1CQUFBO0VBQ0EsWUFBQTtBQ0FMOztBREVBO0VBQ0ksdUJBQUE7RUFDQSwwQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxvQkFBQTtPQUFBLGVBQUE7QUNDSjs7QURFRztFQUNDLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdXNlci9wYWdlcy9zZWUtYWxsLXByb2R1Y3RzLWhvbWUvYWxsLXByb2R1Y3RzL21haW4tbGlzdC9tYWluLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZHVjdHtcclxuXHRcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuIFxyXG4gICAgbWFyZ2luOiAxMnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuXHJcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbn1cclxuXHJcblxyXG4ucHJvZHVjdDJ7XHJcblx0aGVpZ2h0OiAyNXZoO1xyXG4gICAgd2lkdGg6IDQzdnc7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICBtYXJnaW46MTJweDtcclxuICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgIGZsb2F0OnJpZ2h0XHJcbn1cclxuLnByb2R1Y3RUd297XHJcblx0aGVpZ2h0OiAyNXZoO1xyXG4gICAgd2lkdGg6IDQzdnc7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICBtYXJnaW46MTJweDtcclxuICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgIGZsb2F0OmxlZnRcclxufVxyXG4ucHJvZHVjdFR3bzJ7XHJcblx0aGVpZ2h0OiAyNXZoO1xyXG4gICAgd2lkdGg6IDQzdnc7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICBtYXJnaW46MTJweDtcclxuICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgIGZsb2F0OnJpZ2h0XHJcbn1cclxuLnByb2R1Y3RUd29ze1xyXG5cdGhlaWdodDogMjV2aDtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgIG1hcmdpbjoxMnB4O1xyXG4gICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICAgZmxvYXQ6cmlnaHRcclxufVxyXG4ubWFzb25yeSB7XHJcbiAgICAtbW96LWNvbHVtbi13aWR0aDogYXV0bztcclxuICAgIC13ZWJraXQtY29sdW1uLXdpZHRoOiBhdXRvO1xyXG4gICAgLW1vei1jb2x1bW4tZ2FwOiAwLjMxMjVlbTtcclxuICAgIC13ZWJraXQtY29sdW1uLWdhcDogMC4zMTI1ZW07XHJcbiAgICBjb2x1bW4tY291bnQ6IDI7XHJcbiAgIH1cclxuICAgIFxyXG4gICAubWFzb25yeSAuaXRlbSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogIDEwMCU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuICAgfSIsIi5wcm9kdWN0IHtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBtYXJnaW46IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIG1hcmdpbi1sZWZ0OiAwcHg7XG4gIG1hcmdpbi1yaWdodDogMHB4O1xufVxuXG4ucHJvZHVjdDIge1xuICBoZWlnaHQ6IDI1dmg7XG4gIHdpZHRoOiA0M3Z3O1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIG1hcmdpbjogMTJweDtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4ucHJvZHVjdFR3byB7XG4gIGhlaWdodDogMjV2aDtcbiAgd2lkdGg6IDQzdnc7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgbWFyZ2luOiAxMnB4O1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBmbG9hdDogbGVmdDtcbn1cblxuLnByb2R1Y3RUd28yIHtcbiAgaGVpZ2h0OiAyNXZoO1xuICB3aWR0aDogNDN2dztcbiAgZGlzcGxheTogaW5saW5lO1xuICBtYXJnaW46IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLnByb2R1Y3RUd29zIHtcbiAgaGVpZ2h0OiAyNXZoO1xuICB3aWR0aDogMTAwdnc7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgbWFyZ2luOiAxMnB4O1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi5tYXNvbnJ5IHtcbiAgLW1vei1jb2x1bW4td2lkdGg6IGF1dG87XG4gIC13ZWJraXQtY29sdW1uLXdpZHRoOiBhdXRvO1xuICAtbW96LWNvbHVtbi1nYXA6IDAuMzEyNWVtO1xuICAtd2Via2l0LWNvbHVtbi1nYXA6IDAuMzEyNWVtO1xuICBjb2x1bW4tY291bnQ6IDI7XG59XG5cbi5tYXNvbnJ5IC5pdGVtIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/user/pages/see-all-products-home/all-products/main-list/main-list.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/modules/user/pages/see-all-products-home/all-products/main-list/main-list.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: MainListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainListComponent", function() { return MainListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var src_app_core_modules_services_products_product_facade_product_facade_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core-modules/services/products/product-facade/product-facade.service */ "./src/app/core-modules/services/products/product-facade/product-facade.service.ts");
/* harmony import */ var src_app_core_modules_services_cart_cart_facade_cart_facade_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core-modules/services/cart/cart-facade/cart-facade.service */ "./src/app/core-modules/services/cart/cart-facade/cart-facade.service.ts");
/* harmony import */ var src_app_core_modules_services_categories_category_facade_category_facade_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core-modules/services/categories/category-facade/category-facade.service */ "./src/app/core-modules/services/categories/category-facade/category-facade.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var src_app_core_modules_services_header_header_state_header_state_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core-modules/services/header/header-state/header-state.service */ "./src/app/core-modules/services/header/header-state/header-state.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");








var MainListComponent = /** @class */ (function () {
    function MainListComponent(_productFacade, cartFacade, categoryFacade, headerState, router) {
        this._productFacade = _productFacade;
        this.cartFacade = cartFacade;
        this.categoryFacade = categoryFacade;
        this.headerState = headerState;
        this.router = router;
        this.selected_categgory = [];
        this.product_type_categories = [];
    }
    MainListComponent.prototype.ngOnInit = function () {
        var _this = this;
        //getCategories
        this.categories$ = this.categoryFacade.getCategories$();
        //get products as observable
        this.all_p = localStorage.getItem("all_p");
        this.categories$.subscribe(function (res) {
            //this.categories = res;
            res.forEach(function (group) {
                //get current group name
                if (group.name == localStorage.getItem("current_group")) {
                    _this.current_group = group.name;
                    //get sub grouped names
                    // loop through category list and group
                    var groupBy = function (xs, key) {
                        return xs.reduce(function (rv, x) {
                            (rv[x[key]] = rv[x[key]] || []).push(x);
                            return rv;
                        }, {});
                    };
                    // Group by subcategor
                    var grouped = groupBy(group.list, "Categories");
                    var grouped_sub = Object.keys(grouped);
                    var cleaned = grouped_sub.filter(function (sub) {
                        return sub !== "";
                    });
                    _this.selected_categgory = cleaned;
                }
            });
        });
        this.products$ = this._productFacade.getMainProducts().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["distinctUntilChanged"])());
        console.log(this.products$);
        this.reset = 0;
    };
    MainListComponent.prototype.count = function (i) {
        this.reset += 1;
        if (this.reset == 5) {
            this.reset = 1;
        }
        switch (this.reset) {
            case 1:
                return "product2";
                break;
            case 2:
                return "productTwo";
                break;
            case 3:
                return "productTwo2";
                break;
            case 4:
                return "product";
                break;
        }
    };
    MainListComponent.prototype.loadCategoryProducts = function (category) {
        this.product_type_categories = [];
        this._productFacade.onMarketSearch("");
    };
    MainListComponent.prototype.loadSubCategoryProducts = function (sub_category) {
        var _this = this;
        this._productFacade.onMarketSearch(sub_category);
        this.categories$.subscribe(function (res) {
            //this.categories = res;
            res.forEach(function (group) {
                //get current group name
                if (group.name == localStorage.getItem("current_group")) {
                    _this.current_group = group.name;
                    //get sub grouped names
                    // loop through category list and group
                    var groupBy = function (xs, key) {
                        return xs.reduce(function (rv, x) {
                            (rv[x[key]] = rv[x[key]] || []).push(x);
                            return rv;
                        }, {});
                    };
                    // Group by subcategor
                    var grouped = groupBy(group.list, "Product type");
                    var grouped_sub = Object.keys(grouped);
                    var cleaned = grouped_sub.filter(function (sub) {
                        return sub !== "";
                    });
                    _this.product_type_categories = cleaned;
                }
            });
        });
    };
    MainListComponent.prototype.loadProductTypeCategory = function (selected) {
        this._productFacade.onMarketSearch(selected);
    };
    MainListComponent.prototype.searchItems = function (ev) {
        // set val to the value of the searchbar
        var val = ev.target.value;
        this._productFacade.onMarketSearch(val);
    };
    MainListComponent.prototype.viewDetailPage = function (product) {
        this.headerState.updateHeaderStatus("product_detail");
        //navigate
        this.router.navigate(["/user/landing/product-detail", product._id]);
    };
    MainListComponent.prototype.addToCart = function (product) {
        this.cartFacade.addToCart(product);
    };
    MainListComponent.prototype.loadCurrentCategories = function (category) {
        localStorage.setItem("current_group", category);
    };
    MainListComponent.prototype.ngOnDestroy = function () {
        localStorage.removeItem("all_p");
        localStorage.removeItem("current_group");
        this._productFacade.resetMainList();
    };
    MainListComponent.ctorParameters = function () { return [
        { type: src_app_core_modules_services_products_product_facade_product_facade_service__WEBPACK_IMPORTED_MODULE_2__["ProductFacadeService"] },
        { type: src_app_core_modules_services_cart_cart_facade_cart_facade_service__WEBPACK_IMPORTED_MODULE_3__["CartFacadeService"] },
        { type: src_app_core_modules_services_categories_category_facade_category_facade_service__WEBPACK_IMPORTED_MODULE_4__["CategoryFacadeService"] },
        { type: src_app_core_modules_services_header_header_state_header_state_service__WEBPACK_IMPORTED_MODULE_6__["HeaderStateService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    MainListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-main-list",
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./main-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/user/pages/see-all-products-home/all-products/main-list/main-list.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./main-list.component.scss */ "./src/app/modules/user/pages/see-all-products-home/all-products/main-list/main-list.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_core_modules_services_products_product_facade_product_facade_service__WEBPACK_IMPORTED_MODULE_2__["ProductFacadeService"],
            src_app_core_modules_services_cart_cart_facade_cart_facade_service__WEBPACK_IMPORTED_MODULE_3__["CartFacadeService"],
            src_app_core_modules_services_categories_category_facade_category_facade_service__WEBPACK_IMPORTED_MODULE_4__["CategoryFacadeService"],
            src_app_core_modules_services_header_header_state_header_state_service__WEBPACK_IMPORTED_MODULE_6__["HeaderStateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], MainListComponent);
    return MainListComponent;
}());



/***/ }),

/***/ "./src/app/modules/user/pages/see-all-products-home/see-all-products-home-routing.module.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/user/pages/see-all-products-home/see-all-products-home-routing.module.ts ***!
  \**************************************************************************************************/
/*! exports provided: SeeAllProductsHomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeeAllProductsHomePageRoutingModule", function() { return SeeAllProductsHomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _see_all_products_home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./see-all-products-home.page */ "./src/app/modules/user/pages/see-all-products-home/see-all-products-home.page.ts");




var routes = [
    {
        path: '',
        component: _see_all_products_home_page__WEBPACK_IMPORTED_MODULE_3__["SeeAllProductsHomePage"]
    }
];
var SeeAllProductsHomePageRoutingModule = /** @class */ (function () {
    function SeeAllProductsHomePageRoutingModule() {
    }
    SeeAllProductsHomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], SeeAllProductsHomePageRoutingModule);
    return SeeAllProductsHomePageRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/user/pages/see-all-products-home/see-all-products-home.module.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/user/pages/see-all-products-home/see-all-products-home.module.ts ***!
  \******************************************************************************************/
/*! exports provided: SeeAllProductsHomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeeAllProductsHomePageModule", function() { return SeeAllProductsHomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _all_products_all_products_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./all-products/all-products.module */ "./src/app/modules/user/pages/see-all-products-home/all-products/all-products.module.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _see_all_products_home_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./see-all-products-home-routing.module */ "./src/app/modules/user/pages/see-all-products-home/see-all-products-home-routing.module.ts");
/* harmony import */ var _see_all_products_home_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./see-all-products-home.page */ "./src/app/modules/user/pages/see-all-products-home/see-all-products-home.page.ts");








var SeeAllProductsHomePageModule = /** @class */ (function () {
    function SeeAllProductsHomePageModule() {
    }
    SeeAllProductsHomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _all_products_all_products_module__WEBPACK_IMPORTED_MODULE_4__["AllProductsModule"],
                _see_all_products_home_routing_module__WEBPACK_IMPORTED_MODULE_6__["SeeAllProductsHomePageRoutingModule"]
            ],
            declarations: [_see_all_products_home_page__WEBPACK_IMPORTED_MODULE_7__["SeeAllProductsHomePage"]]
        })
    ], SeeAllProductsHomePageModule);
    return SeeAllProductsHomePageModule;
}());



/***/ }),

/***/ "./src/app/modules/user/pages/see-all-products-home/see-all-products-home.page.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/user/pages/see-all-products-home/see-all-products-home.page.scss ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdXNlci9wYWdlcy9zZWUtYWxsLXByb2R1Y3RzLWhvbWUvc2VlLWFsbC1wcm9kdWN0cy1ob21lLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/user/pages/see-all-products-home/see-all-products-home.page.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/user/pages/see-all-products-home/see-all-products-home.page.ts ***!
  \****************************************************************************************/
/*! exports provided: SeeAllProductsHomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeeAllProductsHomePage", function() { return SeeAllProductsHomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var src_app_core_modules_services_products_product_state_product_state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core-modules/services/products/product-state/product-state.service */ "./src/app/core-modules/services/products/product-state/product-state.service.ts");
/* harmony import */ var src_app_core_modules_services_products_product_facade_product_facade_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core-modules/services/products/product-facade/product-facade.service */ "./src/app/core-modules/services/products/product-facade/product-facade.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");






var SeeAllProductsHomePage = /** @class */ (function () {
    function SeeAllProductsHomePage(_location, productState, _productFacade, router) {
        this._location = _location;
        this.productState = productState;
        this._productFacade = _productFacade;
        this.router = router;
    }
    SeeAllProductsHomePage.prototype.ngOnInit = function () {
        var _this = this;
        this._productFacade.getProducts$().subscribe(function (res) {
            if (res.length > 0) {
                null;
            }
            else {
                _this._productFacade.loadProducts();
                _this._productFacade.getProducts$().subscribe(function (res) {
                    _this.productState.setMainProducts(res);
                    _this.productState.setSearchingProducts(res);
                    _this.router.navigate(["/landing/all-products"]);
                }, function (err) { console.log(err); });
            }
        }, function (err) { console.log(err); });
    };
    SeeAllProductsHomePage.prototype.goBack = function () {
        this._location.back();
    };
    SeeAllProductsHomePage.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] },
        { type: src_app_core_modules_services_products_product_state_product_state_service__WEBPACK_IMPORTED_MODULE_3__["ProductStateService"] },
        { type: src_app_core_modules_services_products_product_facade_product_facade_service__WEBPACK_IMPORTED_MODULE_4__["ProductFacadeService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    SeeAllProductsHomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-see-all-products-home',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./see-all-products-home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/user/pages/see-all-products-home/see-all-products-home.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./see-all-products-home.page.scss */ "./src/app/modules/user/pages/see-all-products-home/see-all-products-home.page.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            src_app_core_modules_services_products_product_state_product_state_service__WEBPACK_IMPORTED_MODULE_3__["ProductStateService"],
            src_app_core_modules_services_products_product_facade_product_facade_service__WEBPACK_IMPORTED_MODULE_4__["ProductFacadeService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], SeeAllProductsHomePage);
    return SeeAllProductsHomePage;
}());



/***/ })

}]);
//# sourceMappingURL=src-app-modules-user-pages-see-all-products-home-see-all-products-home-module.js.map