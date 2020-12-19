(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-modules-user-pages-product-detail-product-detail-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/user/pages/product-detail/components/details/details.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/user/pages/product-detail/components/details/details.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngFor=\"let product of product$ | async\">\r\n  <!---\r\n  <div class=\"properties_container\" *ngIf=\"show_properties && has_BOM \">\r\n    <mat-accordion multi=\"false\">\r\n      <ion-fab style=\"left: 13vw;\">\r\n        <ion-fab-button\r\n          (click)=\"disProperties(false)\"\r\n          color=\"light\"\r\n          style=\"height: 20px; width: 20px;\"\r\n          size=\"small\"\r\n        >\r\n          <ion-icon color=\"medium\" name=\"close-outline\"></ion-icon>\r\n        </ion-fab-button>\r\n      </ion-fab>\r\n      <mat-expansion-panel\r\n        [expanded]=\"step === 0\"\r\n        (opened)=\"setStep(0)\"\r\n        hideToggle\r\n        class=\"innerProperty\"\r\n      >\r\n        <mat-expansion-panel-header>\r\n          <h6 [ngClass]=\"classZero\" class=\"heading_six_position\">\r\n            <sub>colors</sub>\r\n          </h6>\r\n        </mat-expansion-panel-header>\r\n\r\n        <ng-template matExpansionPanelContent class=\"center\">\r\n          <div class=\"expansion_inner\">\r\n           <chip *ngFor=\"let chip of components\">\r\n              <sub> {{chip.name}} {{chip.price | currency:'R'}} </sub>\r\n           </chip>\r\n          </div>\r\n        </ng-template>\r\n      </mat-expansion-panel>\r\n\r\n      <mat-expansion-panel\r\n        [expanded]=\"step === 1\"\r\n        (opened)=\"setStep(1)\"\r\n        hideToggle\r\n        class=\"innerProperty\"\r\n      >\r\n        <mat-expansion-panel-header>\r\n          <h6 [ngClass]=\"classOne\" class=\"heading_six_position\">\r\n            <sub>colors</sub>\r\n          </h6>\r\n        </mat-expansion-panel-header>\r\n\r\n        <ng-template matExpansionPanelContent>\r\n          <div class=\"expansion_inner\">\r\n            <ion-badge>\r\n              color\r\n            </ion-badge>\r\n          </div>\r\n        </ng-template>\r\n      </mat-expansion-panel>\r\n\r\n      <mat-expansion-panel\r\n        [expanded]=\"step === 2\"\r\n        (opened)=\"setStep(2)\"\r\n        hideToggle\r\n        class=\"innerProperty\"\r\n      >\r\n        <mat-expansion-panel-header>\r\n          <h6 [ngClass]=\"classTwo\" class=\"heading_six_position\">\r\n            <sub>colors</sub>\r\n          </h6>\r\n        </mat-expansion-panel-header>\r\n        <ng-template style=\"height: 20vh;\" matExpansionPanelContent>\r\n          <div class=\"expansion_inner\">\r\n            Some deferred content\r\n          </div>\r\n        </ng-template>\r\n      </mat-expansion-panel>\r\n    </mat-accordion>\r\n  </div> -->\r\n  <!--<ion-button\r\n    [@inOutAnimation]\r\n    (click)=\"disProperties(true)\"\r\n    *ngIf=\"!show_properties\"\r\n    style=\"z-index: 3; height: 3%; position: fixed; bottom: 42vh;\"\r\n  >\r\n    <sub>Options</sub>\r\n  </ion-button>\r\n\r\n\r\n  <ion-fab *ngIf=\"product.sale_type\" style=\"position: fixed; bottom: 42vh; left:43vw\">\r\n    <ion-badge  *ngIf=\"product.sale_type\" color=\"danger\">\r\n      SALE!\r\n    </ion-badge>\r\n  </ion-fabyle>-->\r\n\r\n  <ion-slides\r\n    style=\"height: 65vh\"\r\n    class=\"slides\"\r\n    pager=\"true\"\r\n    [options]=\"slideOpts\"\r\n  >\r\n    <!--  <ion-fab class=\"expandButton\" horizontal=\"end\" >\r\n    <ion-fab-button shape=\"round\" expand=\"block\" size=\"small\" fill=\"solid\">\r\n\r\n    </ion-fab-button>\r\n  </ion-fab>-->\r\n    <ion-slide *ngFor=\"let img of product.productImage\" class=\"first_slides\">\r\n      <ion-img src=\"{{ img.url }}\"></ion-img>\r\n    </ion-slide>\r\n   \r\n  </ion-slides>\r\n\r\n  <ion-fab\r\n    *ngIf=\"!seeBOM\"\r\n    style=\"top: 62vh\"\r\n    class=\"center\"\r\n    vertical=\"center\"\r\n    horizontal=\"end\"\r\n  >\r\n   <ion-fab-button\r\n      class=\"center\"\r\n      size=\"small\"\r\n      fill=\"clear\"\r\n      (click)=\"likeA(product)\"\r\n    >\r\n      <div class=\"center\">\r\n        <ion-icon\r\n          *ngIf=\"!product.likes.includes(profile.email)\"\r\n          size=\"large\"\r\n          name=\"heart\"\r\n        ></ion-icon>\r\n        <ion-icon\r\n          *ngIf=\"product.likes.includes(profile.email)\"\r\n          color=\"danger\"\r\n          size=\"large\"\r\n          name=\"heart\"\r\n        ></ion-icon>\r\n      </div>\r\n \r\n    </ion-fab-button> \r\n         <!--<ion-badge class=\"like_badge\"> {{ product.likes.length }}</ion-badge>-->\r\n  </ion-fab>\r\n  <ion-fab\r\n    *ngIf=\"seeBOM\"\r\n    style=\"top: 62vh\"\r\n    class=\"center\"\r\n    vertical=\"center\"\r\n    horizontal=\"end\"\r\n  >\r\n    <ion-fab-button size=\"small\" color=\"light\" (click)=\"showBOM(false)\">\r\n      <ion-icon name=\"close\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n\r\n  <ion-card style=\"padding-bottom: 7vh\" class=\"bottom_content\">\r\n    <ion-card-content *ngIf=\"!seeBOM\">\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col class=\"product_title\" size=\"12\">\r\n            <ion-toolbar>\r\n              <h3 style=\"font-size: 20px; color: #018786\">\r\n                {{ product.amount }} {{ product.productName }}\r\n              </h3>\r\n\r\n              <ion-buttons slot=\"end\">\r\n                <ion-button\r\n                  fill=\"solid\"\r\n                  (click)=\"showBOM(true)\"\r\n                  color=\"secondary\"\r\n                  shape=\"round\"\r\n                  size=\"small\"\r\n                >\r\n                  <ion-label> <sub>see Options</sub> </ion-label>\r\n                </ion-button>\r\n              </ion-buttons>\r\n            </ion-toolbar>\r\n            <rating\r\n              [rate]=\"rating(product.ratings)\"\r\n              class=\"rating\"\r\n              readonly=\"true\"\r\n              size=\"small\"\r\n              (rateChange)=\"onRateChange($event)\"\r\n              style=\"display: inline-block\"\r\n            >\r\n            </rating>\r\n            <ion-badge color=\"light\">\r\n              <sub color=\"tertiary\">{{ product.ratings.length }} Reviews </sub>\r\n            </ion-badge>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col size=\"3\" class=\"ion-no-padding\">\r\n            <ion-text>\r\n              <sub> In-Stock: {{ product.in_stock }} </sub>\r\n            </ion-text>\r\n          </ion-col>\r\n          <ion-col class=\"ion-no-padding\" style=\"text-align: left\" size=\"9\">\r\n            <ion-row>\r\n              <ion-col class=\"ion-no-padding\" size=\"12\">\r\n                <ion-badge>\r\n                  <sub>JHB</sub>\r\n                </ion-badge>\r\n                <ion-badge style=\"margin-left: 5px; text-align: center\">\r\n                  <sub>CPT</sub>\r\n                </ion-badge>\r\n                <ion-badge style=\"margin-left: 5px; text-align: center\">\r\n                  <sub>KZN</sub>\r\n                </ion-badge>\r\n\r\n                <ion-badge\r\n                  style=\"margin-left: 5px; text-align: center\"\r\n                  color=\"tertiary\"\r\n                >\r\n                  <sub> Free Delivery </sub>\r\n                </ion-badge>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col size=\"12\">\r\n            <ion-text>\r\n              <sub>\r\n                {{\r\n                  product.productDescription.length > 200\r\n                    ? (product.productDescription | slice: 0:150) + \"....\"\r\n                    : product.productDescription\r\n                }}\r\n                <a\r\n                  *ngIf=\"product.productDescription.length > 200\"\r\n                  style=\"color: #018786\"\r\n                  (click)=\"showFull()\"\r\n                  >more</a\r\n                >\r\n              </sub>\r\n            </ion-text>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col size=\"12\">\r\n            <ion-toolbar>\r\n              <h6>Product Features:</h6>\r\n              <ion-buttons slot=\"end\">\r\n                <ion-button\r\n                  (click)=\"vendorPage()\"\r\n                  class=\"center\"\r\n                  color=\"light\"\r\n                  size=\"small\"\r\n                  fill=\"solid\"\r\n                  shape=\"round\"\r\n                >\r\n                  <ion-label> <sub>vendor</sub> </ion-label>\r\n                  <ion-icon name=\"business-outline\"></ion-icon>\r\n                </ion-button>\r\n              </ion-buttons>\r\n            </ion-toolbar>\r\n            <div *ngFor=\"let tag of product.features\">\r\n              <ion-chip style=\"float: left\">\r\n                {{ tag.featurename }}\r\n              </ion-chip>\r\n            </div>\r\n          </ion-col>\r\n          <ion-col size=\"12\">\r\n            <app-similar-products></app-similar-products>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-card-content>\r\n    <ion-card-content *ngIf=\"seeBOM\">\r\n      <h3 style=\"color: #018786\">Product Variations</h3>\r\n      <ion-text *ngIf=\"components_incuded.length == 0\">\r\n        Select or add different materials colors and componets.\r\n      </ion-text>\r\n      <ion-card>\r\n        <div\r\n          style=\"height: fit-content\"\r\n          *ngFor=\"let BOM of components_incuded; let i = index\"\r\n        >\r\n          <ion-chip\r\n            class=\"ion-float-left\"\r\n            style=\"background: #018786; color: white\"\r\n          >\r\n            {{ BOM.componentname }} {{ BOM.price | currency: \"R\" }}\r\n            <ion-icon\r\n              color=\"danger\"\r\n              (click)=\"removeBOM(BOM, BOM._id)\"\r\n              name=\"close-circle\"\r\n            ></ion-icon>\r\n          </ion-chip>\r\n        </div>\r\n      </ion-card>\r\n\r\n      <div *ngFor=\"let chip of components; let i = index\">\r\n        <ion-chip class=\"ion-float-left\">\r\n          <sub> {{ chip.componentname }} {{ chip.price | currency: \"R\" }} </sub>\r\n          <ion-icon\r\n            (click)=\"addBOM(chip, chip._id)\"\r\n            color=\"primary\"\r\n            name=\"add-circle\"\r\n          ></ion-icon>\r\n        </ion-chip>\r\n      </div>\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n  <div class=\"price_container\">\r\n    <div class=\"inner_content\">\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col class=\"center\" size=\"6\">\r\n            <ion-label color=\"tertiary\">\r\n              {{ product.productPrice | currency: \"R\" }}\r\n            </ion-label>\r\n          </ion-col>\r\n          <ion-col size=\"6\">\r\n            <ion-button\r\n              (click)=\"addToCart(product)\"\r\n              class=\"center\"\r\n              color=\"secondary\"\r\n              size=\"small\"\r\n              fill=\"solid\"\r\n              shape=\"round\"\r\n              expand=\"full\"\r\n            >\r\n              <ion-label> <sub>Add to Cart</sub> </ion-label>\r\n              <ion-icon size=\"large\" name=\"cart-outline\"></ion-icon>\r\n            </ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/user/pages/product-detail/components/similar-products/similar-products.component.html":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/user/pages/product-detail/components/similar-products/similar-products.component.html ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h6>Similar Products</h6>\n<ion-card\n  class=\"productsCard\"\n  color=\"primary\"\n  *ngFor=\"let product of similarProducts$\"\n  item-left\n>\n  <div\n    (click)=\"viewDetailPage(product)\"\n    style=\"background-image: url({{\n      image.url\n    }});background-position: center;background-size: cover; height: 100%;width: 100%;\"\n    *ngFor=\"let image of product.productImage\"\n    class=\"productInnerDisplay\"\n  ></div>\n</ion-card>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/user/pages/product-detail/product-detail.page.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/user/pages/product-detail/product-detail.page.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar\r\n    style=\"\r\n      --background: transparent;\r\n      --ion-color-base: transparent !important;\r\n      position: absolute;\r\n      --border-width: 0 !important;\r\n    \"\r\n    class=\"justify-content: center\"\r\n    no-padding\r\n  >\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button  color=\"primary\"></ion-back-button>\r\n    </ion-buttons>\r\n\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button *ngIf=\"(cartItemCount | async) > 0\" (click)=\"openCart()\">\r\n        <div>{{ cartItemCount | async }}</div>\r\n        <ion-icon color=\"primary\" slot=\"icon-only\" name=\"cart\"></ion-icon>\r\n      </ion-button>\r\n      <ion-button [routerLink]=\"['/user/user_profile']\">\r\n        <ion-icon color=\"primary\" slot=\"icon-only\" name=\"person\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content *ngIf=\"product\">\r\n  <app-details [product_id]=\"id\" [detail_product]=\"product\"></app-details>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/modules/user/pages/product-detail/components/detail-components.module.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/user/pages/product-detail/components/detail-components.module.ts ***!
  \******************************************************************************************/
/*! exports provided: DetailComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailComponentsModule", function() { return DetailComponentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/expansion.es5.js");
/* harmony import */ var ionic4_rating__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ionic4-rating */ "./node_modules/ionic4-rating/__ivy_ngcc__/dist/index.js");
/* harmony import */ var _details_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./details/details.component */ "./src/app/modules/user/pages/product-detail/components/details/details.component.ts");
/* harmony import */ var _similar_products_similar_products_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./similar-products/similar-products.component */ "./src/app/modules/user/pages/product-detail/components/similar-products/similar-products.component.ts");





//Detail modules


var DetailComponentsModule = /** @class */ (function () {
    function DetailComponentsModule() {
    }
    DetailComponentsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _details_details_component__WEBPACK_IMPORTED_MODULE_5__["DetailsComponent"],
                _similar_products_similar_products_component__WEBPACK_IMPORTED_MODULE_6__["SimilarProductsComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                ionic4_rating__WEBPACK_IMPORTED_MODULE_4__["IonicRatingModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__["MatExpansionModule"],
            ],
            exports: [
                _details_details_component__WEBPACK_IMPORTED_MODULE_5__["DetailsComponent"],
                _similar_products_similar_products_component__WEBPACK_IMPORTED_MODULE_6__["SimilarProductsComponent"],
            ]
        })
    ], DetailComponentsModule);
    return DetailComponentsModule;
}());



/***/ }),

/***/ "./src/app/modules/user/pages/product-detail/components/details/details.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/user/pages/product-detail/components/details/details.component.scss ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-img {\n  -o-object-fit: cover;\n     object-fit: cover;\n  height: 100%;\n}\n\n.bottom_content {\n  z-index: 1;\n  width: 100%;\n  margin: 0;\n  border-radius: 20px 20px 0px 0px;\n  top: -2vh;\n}\n\n.incri_button {\n  height: 20px;\n  width: 25px;\n}\n\n.price_container {\n  z-index: 3;\n  background-color: #018786;\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  height: 50px;\n  border-radius: 50px 0px 0px 0px;\n}\n\n.slides .swiper-pagination {\n  bottom: 20vh;\n}\n\n.properties_container {\n  width: 18vw;\n  height: 55vh;\n  position: absolute;\n  left: 1vw;\n  bottom: 35vh;\n  z-index: 3;\n}\n\n.innerProperty {\n  /* height: 27%;\n   width: 100%;\n   margin:15%;\n  */\n  border-radius: 20px;\n}\n\n::ng-deep .mat-accordion .mat-expansion-panel:first-of-type {\n  border-radius: 20px;\n  border-top-right-radius: 20px !important;\n  border-top-left-radius: 20px !important;\n}\n\n::ng-deep .mat-accordion .mat-expansion-panel:last-of-type {\n  border-bottom-right-radius: 20px !important;\n  border-bottom-left-radius: 20px !important;\n}\n\n.div.swiper-pagination {\n  bottom: 0vh;\n}\n\n.expansion_inner {\n  height: 32vh;\n  text-align: center;\n}\n\n.mat-expansion-panel-header {\n  padding: 2px;\n}\n\n::ng-deep .mat-expansion-panel-body {\n  padding: 2px !important;\n}\n\n.heading_six_position {\n  width: 100%;\n  text-align: center;\n}\n\n.active_expansion {\n  color: var(--ion-color-primary);\n}\n\n.not_active_expansion {\n  color: var(--ion-color-light);\n}\n\n.product_title {\n  text-align: initial;\n  color: var(--ion-color-primary);\n}\n\n::ng-deep .rating ion-button {\n  height: 3vh;\n  width: 5vw;\n  margin: 1vw;\n  --padding-start: 0px;\n  --padding-bottom: 0px;\n  --padding-top: 0px;\n  --padding-end: 0px;\n}\n\n::ng-deep .sc-ion-buttons-md-s .button-has-icon-only.button-clear {\n  height: 3vh;\n  width: 5vw;\n  margin: 1vw;\n  --padding-start: 0px;\n  --padding-bottom: 0px;\n  --padding-top: 0px;\n  --padding-end: 0px;\n}\n\n::ng-deep .rating ion-buttons {\n  display: block;\n}\n\n.like_badge {\n  font-size: 0.6em;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  position: absolute;\n  right: -7px;\n  top: 10px;\n  outline: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy91c2VyL3BhZ2VzL3Byb2R1Y3QtZGV0YWlsL2NvbXBvbmVudHMvZGV0YWlscy9DOlxcVXNlcnNcXE1hcnZpblxcRG9jdW1lbnRzXFxHaXRIdWJcXGFmcm9iXFxjbGllbnQvc3JjXFxhcHBcXG1vZHVsZXNcXHVzZXJcXHBhZ2VzXFxwcm9kdWN0LWRldGFpbFxcY29tcG9uZW50c1xcZGV0YWlsc1xcZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy91c2VyL3BhZ2VzL3Byb2R1Y3QtZGV0YWlsL2NvbXBvbmVudHMvZGV0YWlscy9kZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksb0JBQUE7S0FBQSxpQkFBQTtFQUNBLFlBQUE7QUNESjs7QURJQTtFQUVJLFVBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0EsU0FBQTtBQ0ZKOztBRE9BO0VBRUksWUFBQTtFQUNBLFdBQUE7QUNMSjs7QURPQTtFQUNJLFVBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwrQkFBQTtBQ0pKOztBRFNBO0VBQ0ksWUFBQTtBQ05KOztBRFFBO0VBRUksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQ05KOztBRFVDO0VBRUU7OztHQUFBO0VBR0UsbUJBQUE7QUNQTDs7QURVQTtFQUNJLG1CQUFBO0VBQ0Esd0NBQUE7RUFDQSx1Q0FBQTtBQ1BKOztBRFNBO0VBQ0ksMkNBQUE7RUFDQSwwQ0FBQTtBQ05KOztBRFVBO0VBQ0ksV0FBQTtBQ1BKOztBRFNBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0FDTko7O0FEUUE7RUFDSSxZQUFBO0FDTEo7O0FET0E7RUFDSSx1QkFBQTtBQ0pKOztBRE9JO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0FDSlI7O0FETUk7RUFDSSwrQkFBQTtBQ0hSOztBREtLO0VBQ0UsNkJBQUE7QUNGUDs7QURJSTtFQUNJLG1CQUFBO0VBQ0EsK0JBQUE7QUNEUjs7QURHSTtFQUNJLFdBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDQVI7O0FERUk7RUFFRSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0FOOztBREdJO0VBQ0UsY0FBQTtBQ0FOOztBREVHO0VBQ0MsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdXNlci9wYWdlcy9wcm9kdWN0LWRldGFpbC9jb21wb25lbnRzL2RldGFpbHMvZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuaW9uLWltZ3tcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgaGVpZ2h0OiAxMDAlXHJcbn1cclxuXHJcbi5ib3R0b21fY29udGVudHtcclxuICBcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHggMjBweCAwcHggMHB4O1xyXG4gICAgdG9wOiAtMnZoO1xyXG5cclxuICAgXHJcbn1cclxuXHJcbi5pbmNyaV9idXR0b257XHJcblxyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgd2lkdGg6IDI1cHg7XHJcbn1cclxuLnByaWNlX2NvbnRhaW5lcntcclxuICAgIHotaW5kZXg6MztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMTg3ODY7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHggMHB4IDBweCAwcHg7XHJcbn1cclxuLmlubmVyX2NvbnRlbnR7XHJcbiAgICAvL3BhZGRpbmc6MjBweDtcclxufVxyXG4uc2xpZGVzIC5zd2lwZXItcGFnaW5hdGlvbntcclxuICAgIGJvdHRvbTogMjB2aDtcclxufVxyXG4ucHJvcGVydGllc19jb250YWluZXJ7XHJcblxyXG4gICAgd2lkdGg6IDE4dnc7XHJcbiAgICBoZWlnaHQ6IDU1dmg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAxdnc7XHJcbiAgICBib3R0b206IDM1dmg7XHJcbiAgICB6LWluZGV4OiAzO1xyXG59XHJcblxyXG5cclxuIC5pbm5lclByb3BlcnR5e1xyXG5cclxuICAgLyogaGVpZ2h0OiAyNyU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjoxNSU7XHJcbiAgICovYm9yZGVyLXJhZGl1czoyMHB4IDtcclxuXHJcbn1cclxuOjpuZy1kZWVwIC5tYXQtYWNjb3JkaW9uIC5tYXQtZXhwYW5zaW9uLXBhbmVsOmZpcnN0LW9mLXR5cGV7XHJcbiAgICBib3JkZXItcmFkaXVzOjIwcHggO1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDIwcHggIWltcG9ydGFudDtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIwcHggIWltcG9ydGFudDtcclxufVxyXG46Om5nLWRlZXAgLm1hdC1hY2NvcmRpb24gLm1hdC1leHBhbnNpb24tcGFuZWw6bGFzdC1vZi10eXBlIHtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG4uZGl2LnN3aXBlci1wYWdpbmF0aW9uIHtcclxuICAgIGJvdHRvbTowdmhcclxufVxyXG4uZXhwYW5zaW9uX2lubmVye1xyXG4gICAgaGVpZ2h0OjMydmg7XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlclxyXG59XHJcbi5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlcntcclxuICAgIHBhZGRpbmc6IDJweDtcclxufVxyXG46Om5nLWRlZXAgLm1hdC1leHBhbnNpb24tcGFuZWwtYm9keXtcclxuICAgIHBhZGRpbmc6MnB4ICFpbXBvcnRhbnRcclxufVxyXG5cclxuICAgIC5oZWFkaW5nX3NpeF9wb3NpdGlvbntcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAuYWN0aXZlX2V4cGFuc2lvbntcclxuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgIH1cclxuICAgICAubm90X2FjdGl2ZV9leHBhbnNpb257XHJcbiAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxuICAgICB9XHJcbiAgICAucHJvZHVjdF90aXRsZXtcclxuICAgICAgICB0ZXh0LWFsaWduOiBpbml0aWFsO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICB9XHJcbiAgICA6Om5nLWRlZXAgLnJhdGluZyBpb24tYnV0dG9uIHtcclxuICAgICAgICBoZWlnaHQ6IDN2aDtcclxuICAgICAgICB3aWR0aDogNXZ3O1xyXG4gICAgICAgIG1hcmdpbjogMXZ3O1xyXG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xyXG4gICAgICAgIC0tcGFkZGluZy1ib3R0b206IDBweDtcclxuICAgICAgICAtLXBhZGRpbmctdG9wOiAwcHg7XHJcbiAgICAgICAgLS1wYWRkaW5nLWVuZDogMHB4O1xyXG4gICAgfVxyXG4gICAgOjpuZy1kZWVwIC5zYy1pb24tYnV0dG9ucy1tZC1zIC5idXR0b24taGFzLWljb24tb25seS5idXR0b24tY2xlYXIge1xyXG4gICAgICAvL0B3YXJuXHJcbiAgICAgIGhlaWdodDogM3ZoO1xyXG4gICAgICB3aWR0aDogNXZ3O1xyXG4gICAgICBtYXJnaW46IDF2dztcclxuICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XHJcbiAgICAgIC0tcGFkZGluZy1ib3R0b206IDBweDtcclxuICAgICAgLS1wYWRkaW5nLXRvcDogMHB4O1xyXG4gICAgICAtLXBhZGRpbmctZW5kOiAwcHg7XHJcblxyXG4gICAgfVxyXG4gICAgOjpuZy1kZWVwIC5yYXRpbmcgaW9uLWJ1dHRvbnMge1xyXG4gICAgICBkaXNwbGF5OmJsb2NrXHJcbiAgICB9XHJcbiAgIC5saWtlX2JhZGdle1xyXG4gICAgZm9udC1zaXplOiAwLjZlbTtcclxuICAgIC0tcGFkZGluZy1zdGFydDogNHB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogNHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IC03cHg7XHJcbiAgICB0b3A6IDEwcHg7XHJcbiAgICBvdXRsaW5lOiBhdXRvO1xyXG4gICAgfVxyXG4iLCJpb24taW1nIHtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmJvdHRvbV9jb250ZW50IHtcbiAgei1pbmRleDogMTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMDtcbiAgYm9yZGVyLXJhZGl1czogMjBweCAyMHB4IDBweCAwcHg7XG4gIHRvcDogLTJ2aDtcbn1cblxuLmluY3JpX2J1dHRvbiB7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDI1cHg7XG59XG5cbi5wcmljZV9jb250YWluZXIge1xuICB6LWluZGV4OiAzO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDE4Nzg2O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTBweCAwcHggMHB4IDBweDtcbn1cblxuLnNsaWRlcyAuc3dpcGVyLXBhZ2luYXRpb24ge1xuICBib3R0b206IDIwdmg7XG59XG5cbi5wcm9wZXJ0aWVzX2NvbnRhaW5lciB7XG4gIHdpZHRoOiAxOHZ3O1xuICBoZWlnaHQ6IDU1dmg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMXZ3O1xuICBib3R0b206IDM1dmg7XG4gIHotaW5kZXg6IDM7XG59XG5cbi5pbm5lclByb3BlcnR5IHtcbiAgLyogaGVpZ2h0OiAyNyU7XG4gICB3aWR0aDogMTAwJTtcbiAgIG1hcmdpbjoxNSU7XG4gICovXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG5cbjo6bmctZGVlcCAubWF0LWFjY29yZGlvbiAubWF0LWV4cGFuc2lvbi1wYW5lbDpmaXJzdC1vZi10eXBlIHtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDIwcHggIWltcG9ydGFudDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweCAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLm1hdC1hY2NvcmRpb24gLm1hdC1leHBhbnNpb24tcGFuZWw6bGFzdC1vZi10eXBlIHtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDIwcHggIWltcG9ydGFudDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjBweCAhaW1wb3J0YW50O1xufVxuXG4uZGl2LnN3aXBlci1wYWdpbmF0aW9uIHtcbiAgYm90dG9tOiAwdmg7XG59XG5cbi5leHBhbnNpb25faW5uZXIge1xuICBoZWlnaHQ6IDMydmg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyIHtcbiAgcGFkZGluZzogMnB4O1xufVxuXG46Om5nLWRlZXAgLm1hdC1leHBhbnNpb24tcGFuZWwtYm9keSB7XG4gIHBhZGRpbmc6IDJweCAhaW1wb3J0YW50O1xufVxuXG4uaGVhZGluZ19zaXhfcG9zaXRpb24ge1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYWN0aXZlX2V4cGFuc2lvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbi5ub3RfYWN0aXZlX2V4cGFuc2lvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xufVxuXG4ucHJvZHVjdF90aXRsZSB7XG4gIHRleHQtYWxpZ246IGluaXRpYWw7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbjo6bmctZGVlcCAucmF0aW5nIGlvbi1idXR0b24ge1xuICBoZWlnaHQ6IDN2aDtcbiAgd2lkdGg6IDV2dztcbiAgbWFyZ2luOiAxdnc7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAtLXBhZGRpbmctYm90dG9tOiAwcHg7XG4gIC0tcGFkZGluZy10b3A6IDBweDtcbiAgLS1wYWRkaW5nLWVuZDogMHB4O1xufVxuXG46Om5nLWRlZXAgLnNjLWlvbi1idXR0b25zLW1kLXMgLmJ1dHRvbi1oYXMtaWNvbi1vbmx5LmJ1dHRvbi1jbGVhciB7XG4gIGhlaWdodDogM3ZoO1xuICB3aWR0aDogNXZ3O1xuICBtYXJnaW46IDF2dztcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDBweDtcbiAgLS1wYWRkaW5nLXRvcDogMHB4O1xuICAtLXBhZGRpbmctZW5kOiAwcHg7XG59XG5cbjo6bmctZGVlcCAucmF0aW5nIGlvbi1idXR0b25zIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5saWtlX2JhZGdlIHtcbiAgZm9udC1zaXplOiAwLjZlbTtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDRweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogLTdweDtcbiAgdG9wOiAxMHB4O1xuICBvdXRsaW5lOiBhdXRvO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/user/pages/product-detail/components/details/details.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/user/pages/product-detail/components/details/details.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: DetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsComponent", function() { return DetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm5/animations.js");
/* harmony import */ var src_app_core_modules_services_cart_cart_facade_cart_facade_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core-modules/services/cart/cart-facade/cart-facade.service */ "./src/app/core-modules/services/cart/cart-facade/cart-facade.service.ts");
/* harmony import */ var src_app_core_modules_services_products_product_facade_product_facade_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core-modules/services/products/product-facade/product-facade.service */ "./src/app/core-modules/services/products/product-facade/product-facade.service.ts");
/* harmony import */ var src_app_core_modules_services_header_header_state_header_state_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core-modules/services/header/header-state/header-state.service */ "./src/app/core-modules/services/header/header-state/header-state.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var src_app_core_modules_services_profile_profile_facade_profile_facade_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core-modules/services/profile/profile-facade/profile-facade.service */ "./src/app/core-modules/services/profile/profile-facade/profile-facade.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");









var DetailsComponent = /** @class */ (function () {
    function DetailsComponent(cartFacade, _productFacade, headerState, route, activeRoute, userFacade, toastController) {
        this.cartFacade = cartFacade;
        this._productFacade = _productFacade;
        this.headerState = headerState;
        this.route = route;
        this.activeRoute = activeRoute;
        this.userFacade = userFacade;
        this.toastController = toastController;
        this.fullDescription = false;
        this.components_incuded = [];
        //the product$ should have tche component as this
        this.components = [];
        this.classZero = "active_expansion";
        this.classOne = "not_active_expansion";
        this.classTwo = "not_active_expansion";
        this.step = 0;
    }
    DetailsComponent.prototype.ngOnChanges = function (changes) {
        console.log(changes);
        this.product$ = this.detail_product;
        setTimeout(function () {
            console.log("now...");
        }, 1000);
    };
    DetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userFacade.loadUser();
        this.seeBOM = false;
        /*this.product$ = this._productFacade
          .getCurrentProduct()
          .pipe(distinctUntilChanged());*/
        this.product$.subscribe(function (res) {
            _this.product = res[0];
            //here check if the products has a bill of material if has set has_BOM to true
            if (res[0]) {
                if (res[0].bill_of_material) {
                    _this.has_BOM = true;
                    //push to components only if selected is false
                    _this.components = res[0].bill_of_material.filter(function (item) {
                        return !item.selected;
                    });
                    _this.components_incuded = res[0].bill_of_material.filter(function (item) {
                        return item.selected;
                    });
                }
                else {
                    _this.components_incuded = [];
                    _this.components = [];
                }
            }
        }, function (err) {
            console.log(err);
        });
        this.userFacade.getUser$().subscribe(function (res) {
            _this.profile = res;
        }, function (err) {
            console.log(err);
        });
        this.show_properties = true;
        setTimeout(function () {
            this.show_properties = false;
        }, 2000);
    };
    DetailsComponent.prototype.addBOM = function (chip, chipID) {
        var new_product = this.product;
        chip.selected = true;
        this.components_incuded.push(chip);
        var c = this.components.filter(function (item) {
            return item._id !== chipID;
        });
        this.components = c;
        new_product["bill_of_material"] = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(this.components_incuded, this.components);
        //modify product price
        var new_price;
        if (chip.BOM_type == "material") {
            new_price =
                this.product.productPrice -
                    parseInt(chip.base_material_price) +
                    parseInt(chip.price);
            //construct bom
            new_product["modified_price"] = new_price;
            new_product["productPrice"] = new_price;
        }
        else {
            new_price = this.product.productPrice + parseInt(chip.price);
            new_product["modified_price"] = new_price;
            new_product["productPrice"] = new_price;
        }
        this._productFacade.setCurrentProduct([new_product]);
    };
    DetailsComponent.prototype.showBOM = function (data) {
        this.seeBOM = data;
    };
    DetailsComponent.prototype.removeBOM = function (chip, chipID) {
        var new_product = this.product;
        chip.selected = false;
        this.components.push(chip);
        var c = this.components_incuded.filter(function (item) {
            return item._id !== chipID;
        });
        this.components_incuded = c;
        new_product["bill_of_material"] = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(this.components_incuded, this.components);
        //modify product price
        var new_price;
        if (chip.BOM_type == "material") {
            new_price =
                this.product.productPrice -
                    parseInt(chip.price) +
                    parseInt(chip.base_material_price);
            new_product["modified_price"] = new_price;
            new_product["productPrice"] = new_price;
        }
        else {
            new_price = this.product.productPrice - parseInt(chip.price);
            new_product["modified_price"] = new_price;
            new_product["productPrice"] = new_price;
        }
        this._productFacade.setCurrentProduct([new_product]);
    };
    DetailsComponent.prototype.disProperties = function (data) {
        this.show_properties = data;
    };
    DetailsComponent.prototype.onRateChange = function (data) {
        console.log(data);
    };
    DetailsComponent.prototype.setStep = function (index) {
        this.step = index;
        switch (this.step) {
            case 0:
                this.classZero = "active_expansion";
                this.classOne = "not_active_expansion";
                this.classTwo = "not_active_expansion";
                break;
            case 1:
                this.classZero = "not_active_expansion";
                this.classOne = "active_expansion";
                this.classTwo = "not_active_expansion";
                break;
            case 2:
                this.classZero = "not_active_expansion";
                this.classOne = "not_active_expansion";
                this.classTwo = "active_expansion";
                break;
        }
    };
    DetailsComponent.prototype.rating = function (ratings) {
        //get AVERAGE RATING
        var total = 0;
        for (var i = 0; i < ratings.length; i++) {
            total += ratings[i].rate;
        }
        var avg = total / ratings.length;
        return avg;
    };
    DetailsComponent.prototype.nextStep = function () {
        this.step++;
    };
    DetailsComponent.prototype.prevStep = function () {
        this.step--;
    };
    DetailsComponent.prototype.addToCart = function (product) {
        this.cartFacade.addToCart(product);
    };
    DetailsComponent.prototype.vendorPage = function () {
        this.route.navigate(["/vendor-profile/", this.product.storeId]);
    };
    DetailsComponent.prototype.likeA = function (product) {
        this._productFacade.updateLike(product);
    };
    DetailsComponent.prototype.showFull = function () {
        this.fullDescription = true;
    };
    DetailsComponent.prototype.showLess = function () {
        this.fullDescription = false;
    };
    DetailsComponent.prototype.presentSaleToast = function (data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var toast;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: data,
                            position: "bottom",
                            animated: true,
                            duration: 2000,
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    DetailsComponent.prototype.next2 = function () {
        this.slides.slideNext();
        this.slides.slideNext();
        this.presentSaleToast("slide to go back");
    };
    DetailsComponent.prototype.next = function () {
        this.slides.slideNext();
        this.presentSaleToast("slide to see more");
    };
    DetailsComponent.prototype.ngOnDestroy = function () {
        this._productFacade.resetCurrentProduct();
    };
    DetailsComponent.ctorParameters = function () { return [
        { type: src_app_core_modules_services_cart_cart_facade_cart_facade_service__WEBPACK_IMPORTED_MODULE_3__["CartFacadeService"] },
        { type: src_app_core_modules_services_products_product_facade_product_facade_service__WEBPACK_IMPORTED_MODULE_4__["ProductFacadeService"] },
        { type: src_app_core_modules_services_header_header_state_header_state_service__WEBPACK_IMPORTED_MODULE_5__["HeaderStateService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
        { type: src_app_core_modules_services_profile_profile_facade_profile_facade_service__WEBPACK_IMPORTED_MODULE_7__["UserFacadeService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ToastController"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], DetailsComponent.prototype, "product_id", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], DetailsComponent.prototype, "detail_product", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("productDetailSlide", { static: true }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonSlides"])
    ], DetailsComponent.prototype, "slides", void 0);
    DetailsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-details",
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/user/pages/product-detail/components/details/details.component.html")).default,
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])("inOutAnimation", [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(":enter", [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: "translateY(-45vh)", opacity: 1, color: "white" }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])("1s ease-out", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1 })),
                    ]),
                ]),
            ],
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./details.component.scss */ "./src/app/modules/user/pages/product-detail/components/details/details.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_core_modules_services_cart_cart_facade_cart_facade_service__WEBPACK_IMPORTED_MODULE_3__["CartFacadeService"],
            src_app_core_modules_services_products_product_facade_product_facade_service__WEBPACK_IMPORTED_MODULE_4__["ProductFacadeService"],
            src_app_core_modules_services_header_header_state_header_state_service__WEBPACK_IMPORTED_MODULE_5__["HeaderStateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            src_app_core_modules_services_profile_profile_facade_profile_facade_service__WEBPACK_IMPORTED_MODULE_7__["UserFacadeService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ToastController"]])
    ], DetailsComponent);
    return DetailsComponent;
}());



/***/ }),

/***/ "./src/app/modules/user/pages/product-detail/components/similar-products/similar-products.component.scss":
/*!***************************************************************************************************************!*\
  !*** ./src/app/modules/user/pages/product-detail/components/similar-products/similar-products.component.scss ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".productsCard {\n  display: inline-block;\n  border-radius: 20px;\n  height: 10vh;\n  min-width: 20vw;\n  margin-top: 5px;\n  margin-left: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy91c2VyL3BhZ2VzL3Byb2R1Y3QtZGV0YWlsL2NvbXBvbmVudHMvc2ltaWxhci1wcm9kdWN0cy9DOlxcVXNlcnNcXE1hcnZpblxcRG9jdW1lbnRzXFxHaXRIdWJcXGFmcm9iXFxjbGllbnQvc3JjXFxhcHBcXG1vZHVsZXNcXHVzZXJcXHBhZ2VzXFxwcm9kdWN0LWRldGFpbFxcY29tcG9uZW50c1xcc2ltaWxhci1wcm9kdWN0c1xcc2ltaWxhci1wcm9kdWN0cy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy91c2VyL3BhZ2VzL3Byb2R1Y3QtZGV0YWlsL2NvbXBvbmVudHMvc2ltaWxhci1wcm9kdWN0cy9zaW1pbGFyLXByb2R1Y3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdXNlci9wYWdlcy9wcm9kdWN0LWRldGFpbC9jb21wb25lbnRzL3NpbWlsYXItcHJvZHVjdHMvc2ltaWxhci1wcm9kdWN0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9kdWN0c0NhcmQge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGhlaWdodDogMTB2aDtcbiAgbWluLXdpZHRoOiAyMHZ3O1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIG1hcmdpbi1sZWZ0OiAwO1xufVxuIiwiLnByb2R1Y3RzQ2FyZCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgaGVpZ2h0OiAxMHZoO1xuICBtaW4td2lkdGg6IDIwdnc7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgbWFyZ2luLWxlZnQ6IDA7XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/user/pages/product-detail/components/similar-products/similar-products.component.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/modules/user/pages/product-detail/components/similar-products/similar-products.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: SimilarProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimilarProductsComponent", function() { return SimilarProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var src_app_core_modules_services_products_product_api_product_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core-modules/services/products/product-api/product-api.service */ "./src/app/core-modules/services/products/product-api/product-api.service.ts");



var SimilarProductsComponent = /** @class */ (function () {
    function SimilarProductsComponent(productApi) {
        this.productApi = productApi;
    }
    SimilarProductsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productApi
            .getSegmentProducts({
            value: this.category,
            signal: "similar_products",
        })
            .subscribe(function (res) {
            _this.similarProducts$ = res.products;
        }, function (err) {
            console.log(err);
        });
    };
    SimilarProductsComponent.ctorParameters = function () { return [
        { type: src_app_core_modules_services_products_product_api_product_api_service__WEBPACK_IMPORTED_MODULE_2__["ProductApiService"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], SimilarProductsComponent.prototype, "category", void 0);
    SimilarProductsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-similar-products",
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./similar-products.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/user/pages/product-detail/components/similar-products/similar-products.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./similar-products.component.scss */ "./src/app/modules/user/pages/product-detail/components/similar-products/similar-products.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_core_modules_services_products_product_api_product_api_service__WEBPACK_IMPORTED_MODULE_2__["ProductApiService"]])
    ], SimilarProductsComponent);
    return SimilarProductsComponent;
}());



/***/ }),

/***/ "./src/app/modules/user/pages/product-detail/product-detail.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/modules/user/pages/product-detail/product-detail.module.ts ***!
  \****************************************************************************/
/*! exports provided: ProductDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailPageModule", function() { return ProductDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _product_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product-detail.page */ "./src/app/modules/user/pages/product-detail/product-detail.page.ts");
/* harmony import */ var _shared_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/components/components.module */ "./src/app/modules/user/shared/components/components.module.ts");
/* harmony import */ var _components_detail_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/detail-components.module */ "./src/app/modules/user/pages/product-detail/components/detail-components.module.ts");







//Nested Modules


var routes = [
    {
        path: '',
        component: _product_detail_page__WEBPACK_IMPORTED_MODULE_6__["ProductDetailPage"]
    }
];
var ProductDetailPageModule = /** @class */ (function () {
    function ProductDetailPageModule() {
    }
    ProductDetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _shared_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                _components_detail_components_module__WEBPACK_IMPORTED_MODULE_8__["DetailComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            ],
            declarations: [_product_detail_page__WEBPACK_IMPORTED_MODULE_6__["ProductDetailPage"]]
        })
    ], ProductDetailPageModule);
    return ProductDetailPageModule;
}());



/***/ }),

/***/ "./src/app/modules/user/pages/product-detail/product-detail.page.scss":
/*!****************************************************************************!*\
  !*** ./src/app/modules/user/pages/product-detail/product-detail.page.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdXNlci9wYWdlcy9wcm9kdWN0LWRldGFpbC9wcm9kdWN0LWRldGFpbC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/user/pages/product-detail/product-detail.page.ts":
/*!**************************************************************************!*\
  !*** ./src/app/modules/user/pages/product-detail/product-detail.page.ts ***!
  \**************************************************************************/
/*! exports provided: ProductDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailPage", function() { return ProductDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var src_app_core_modules_services_products_product_facade_product_facade_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core-modules/services/products/product-facade/product-facade.service */ "./src/app/core-modules/services/products/product-facade/product-facade.service.ts");
/* harmony import */ var src_app_core_modules_services_cart_cart_state_cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core-modules/services/cart/cart-state/cart.service */ "./src/app/core-modules/services/cart/cart-state/cart.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");







var ProductDetailPage = /** @class */ (function () {
    function ProductDetailPage(route, _productFacade, cartService, _location) {
        this.route = route;
        this._productFacade = _productFacade;
        this.cartService = cartService;
        this._location = _location;
    }
    ProductDetailPage.prototype.ngOnInit = function () {
        //get produuct by id
        this.cartItemCount = this.cartService.getCartItemCount();
        var id = this.route.snapshot.paramMap.get("id");
        this._productFacade.loadCurrentProduct(id);
        this.product = this._productFacade
            .getCurrentProduct()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["distinctUntilChanged"])());
    };
    ProductDetailPage.prototype.goBack = function () {
        this._location.back();
    };
    ProductDetailPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: src_app_core_modules_services_products_product_facade_product_facade_service__WEBPACK_IMPORTED_MODULE_3__["ProductFacadeService"] },
        { type: src_app_core_modules_services_cart_cart_state_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"] }
    ]; };
    ProductDetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-product-detail",
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./product-detail.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/user/pages/product-detail/product-detail.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./product-detail.page.scss */ "./src/app/modules/user/pages/product-detail/product-detail.page.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            src_app_core_modules_services_products_product_facade_product_facade_service__WEBPACK_IMPORTED_MODULE_3__["ProductFacadeService"],
            src_app_core_modules_services_cart_cart_state_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"]])
    ], ProductDetailPage);
    return ProductDetailPage;
}());



/***/ })

}]);
//# sourceMappingURL=src-app-modules-user-pages-product-detail-product-detail-module.js.map