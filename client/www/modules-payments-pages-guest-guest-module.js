(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-payments-pages-guest-guest-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/payments/pages/guest/guest.page.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/payments/pages/guest/guest.page.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>checkout</ion-title>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button  slot=\"icon-only\" name=\"arrow-back\">\r\n      </ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-slides pager=\"true\" [options]=\"slideOpts\" #guest_slides>\r\n    <ion-slide>\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col class=\"center\" size=12>\r\n            <ion-img style=\"max-width: 75%;\" src=\"../assets/undraw_personal_information_962o.svg\">\r\n\r\n            </ion-img>\r\n          </ion-col>\r\n          <ion-col size=12>\r\n            <ion-item>\r\n              <ion-label position=\"floating\"> Name:</ion-label>\r\n              <ion-input type=\"name\"></ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n          <ion-col size=12>\r\n            <ion-item>\r\n              <ion-label position=\"floating\"> Email: </ion-label>\r\n              <ion-input type=\"email\"></ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n          <ion-col size=12>\r\n            <ion-item>\r\n              <ion-label position=\"floating\"> Contact Number: </ion-label>\r\n              <ion-input type=\"tel\" ></ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n          <ion-col style=\"padding-top: 5vh;\" class=\"class\" size=12>\r\n            <ion-button shape=\"round\" (click)=\"next()\">\r\n              next\r\n            </ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    \r\n    </ion-slide>\r\n    <ion-slide>\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col size=12>\r\n            <h2 >\r\n              <b style=\"color: #018786;\">D</b>elivery <b style=\"color: #FFD700;\">A</b>ddress\r\n            </h2>\r\n          </ion-col>\r\n          <ion-col size=6>\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Street number</ion-label>\r\n              <ion-input type=\"street-address\"></ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n          <ion-col size=6>\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Street Name</ion-label>\r\n              <ion-input type=\"street-address\"></ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n          <ion-col size=12>\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Unit No and Complex (optional)</ion-label>\r\n              <ion-input type=\"address-line2\"></ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n          <ion-col size=12>\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Suburb</ion-label>\r\n              <ion-input type=\"address-line3\"></ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n       \r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col size=8>\r\n            <ion-item>\r\n              <ion-label position=\"floating\">province</ion-label>\r\n              <ion-input type=\"address-line3\"></ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n          <ion-col size=4>\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Area Code</ion-label>\r\n              <ion-input type=\"postal-code\"></ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n          <ion-col style=\"padding-top: 5vh;\" class=\"class\" size=12>\r\n            <ion-button shape=\"round\" (click)=\"next()\">\r\n              next\r\n            </ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n      \r\n    </ion-slide>\r\n    <ion-slide>\r\n    \r\n<ion-grid>\r\n  <ion-row>\r\n    <ion-col size=12>\r\n      <h2 style=\"display: block;text-align: center;\">\r\n        <b style=\"color: #018786;\">C</b>onfirm  <b style=\"color: #FFD700;\">O</b>rder\r\n      </h2>\r\n    </ion-col>\r\n    <ion-col size=12>\r\n      <ion-card style=\"overflow: visible;\">\r\n        \r\n        <ion-item class=\"ion-no-padding\" style=\"padding:0 !important;overflow: visible; \" *ngFor=\"let product of cart; let i = index\">\r\n          <ion-fab *ngIf=\"edit !== product \" style=\"right: -20px;\"  >\r\n            <ion-fab-button style=\"width: 25px;height: 25px;\" (click)=\"edits(product)\" color=\"light\" size=\"small\">\r\n              <ion-icon color=\"primary\" size=\"small\" name=\"pencil-outline\"></ion-icon>\r\n            </ion-fab-button>\r\n          </ion-fab>\r\n\r\n          <ion-grid>\r\n            <ion-row>\r\n            \r\n              <ion-col size=2>\r\n                <ion-avatar>\r\n                  <div *ngFor=\"let image of product.productImage;let z = index\">\r\n                    <img *ngIf=\"z === 0 \" src=\"{{image.url}}\">\r\n                  </div>\r\n                \r\n                </ion-avatar>\r\n              </ion-col>\r\n\r\n              <ion-col size=10>\r\n             \r\n                <ion-row>\r\n                  <ion-col class=\"center\" size=6>\r\n                    <ion-label>\r\n                      <sub> {{product.productName}} </sub> \r\n                    </ion-label>\r\n                  </ion-col>\r\n                  <ion-col class=\"center\" size=2>\r\n                    <ion-label>\r\n                     <sub>\r\n                      {{product.amount}}\r\n                     </sub>\r\n                    </ion-label>\r\n                  </ion-col>\r\n                  <ion-col class=\"center\" size=4>\r\n                    <ion-label>\r\n                      <sub> {{ product.amount * product.productPrice | currency: \"R\" }} </sub>\r\n                    </ion-label>\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row *ngIf=\"edit == product \">\r\n\r\n                  <ion-col size=8>\r\n                    <ion-row style=\"background: #f5fafa; border-radius: 20px;\">\r\n                      <ion-col size=\"4\" class=\"center\">\r\n                        <ion-button\r\n                          fill=\"clear\"\r\n                          *ngIf=\"!(product.productPrice == 0 || product.sec)\"\r\n                          (click)=\"decreaseCartItem(product)\"\r\n                        >\r\n                          <ion-icon name=\"remove-circle\" slot=\"icon-only\"></ion-icon>\r\n                        </ion-button>\r\n                      </ion-col>\r\n                      <ion-col size=\"4\" class=\"center\">\r\n                        <ion-input\r\n                          (input)=\"onAmountChange(product, $event.target.value)\"\r\n                          type=\"number\"\r\n                          value=\"{{ product.amount }}\"\r\n                        ></ion-input>\r\n                      </ion-col>\r\n                      <ion-col size=\"4\" class=\"center\">\r\n                        <ion-button\r\n                          fill=\"clear\"\r\n                          *ngIf=\"!(product.productPrice == 0 || product.sec)\"\r\n                          (click)=\"increaseCartItem(product)\"\r\n                        >\r\n                          <ion-icon name=\"add-circle\" slot=\"icon-only\"></ion-icon>\r\n                        </ion-button>\r\n                      </ion-col>\r\n                    </ion-row>\r\n\r\n                  </ion-col>\r\n                  <ion-col class=\"center\"  *ngIf=\"!product.sec\" size=4>\r\n                    <ion-button fill=\"clear\" (click)=\"removeCartItem(product)\">\r\n                      <ion-icon\r\n                        color=\"danger\"\r\n                        name=\"close-circle\"\r\n                        slot=\"icon-only\"\r\n                      ></ion-icon>\r\n                    </ion-button>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-col>\r\n           \r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n\r\n    \r\n    \r\n    </ion-card>\r\n    </ion-col>\r\n    <ion-col size=12>\r\n      <ion-button  shape=\"round\" (click)=\"next()\" >\r\n        <app-payfast></app-payfast>\r\n    </ion-button>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-grid>\r\n    \r\n    </ion-slide>\r\n\r\n  </ion-slides>\r\n\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/modules/payments/pages/guest/guest-routing.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/modules/payments/pages/guest/guest-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: GuestPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuestPageRoutingModule", function() { return GuestPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _guest_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./guest.page */ "./src/app/modules/payments/pages/guest/guest.page.ts");




var routes = [
    {
        path: '',
        component: _guest_page__WEBPACK_IMPORTED_MODULE_3__["GuestPage"]
    }
];
var GuestPageRoutingModule = /** @class */ (function () {
    function GuestPageRoutingModule() {
    }
    GuestPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], GuestPageRoutingModule);
    return GuestPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/payments/pages/guest/guest.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/modules/payments/pages/guest/guest.module.ts ***!
  \**************************************************************/
/*! exports provided: GuestPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuestPageModule", function() { return GuestPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _guest_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./guest-routing.module */ "./src/app/modules/payments/pages/guest/guest-routing.module.ts");
/* harmony import */ var _guest_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./guest.page */ "./src/app/modules/payments/pages/guest/guest.page.ts");
/* harmony import */ var _checkout_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../checkout/components/components.module */ "./src/app/modules/payments/pages/checkout/components/components.module.ts");








var GuestPageModule = /** @class */ (function () {
    function GuestPageModule() {
    }
    GuestPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _guest_routing_module__WEBPACK_IMPORTED_MODULE_5__["GuestPageRoutingModule"],
                _checkout_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
            ],
            declarations: [_guest_page__WEBPACK_IMPORTED_MODULE_6__["GuestPage"]]
        })
    ], GuestPageModule);
    return GuestPageModule;
}());



/***/ }),

/***/ "./src/app/modules/payments/pages/guest/guest.page.scss":
/*!**************************************************************!*\
  !*** ./src/app/modules/payments/pages/guest/guest.page.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-slide {\n  height: 90vh;\n}\n\ndiv .item-inner {\n  padding-right: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wYXltZW50cy9wYWdlcy9ndWVzdC9DOlxcVXNlcnNcXE1hcnZpblxcRG9jdW1lbnRzXFxHaXRIdWJcXGFmcm9iXFxjbGllbnQvc3JjXFxhcHBcXG1vZHVsZXNcXHBheW1lbnRzXFxwYWdlc1xcZ3Vlc3RcXGd1ZXN0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9wYXltZW50cy9wYWdlcy9ndWVzdC9ndWVzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FDQ0o7O0FEQ0E7RUFDSSxrQkFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9wYXltZW50cy9wYWdlcy9ndWVzdC9ndWVzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tc2xpZGV7XHJcbiAgICBoZWlnaHQ6IDkwdmg7XHJcbn1cclxuZGl2IC5pdGVtLWlubmVye1xyXG4gICAgcGFkZGluZy1yaWdodDowcHhcclxufSIsImlvbi1zbGlkZSB7XG4gIGhlaWdodDogOTB2aDtcbn1cblxuZGl2IC5pdGVtLWlubmVyIHtcbiAgcGFkZGluZy1yaWdodDogMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/payments/pages/guest/guest.page.ts":
/*!************************************************************!*\
  !*** ./src/app/modules/payments/pages/guest/guest.page.ts ***!
  \************************************************************/
/*! exports provided: GuestPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuestPage", function() { return GuestPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var src_app_core_modules_services_cart_cart_state_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core-modules/services/cart/cart-state/cart.service */ "./src/app/core-modules/services/cart/cart-state/cart.service.ts");




var GuestPage = /** @class */ (function () {
    function GuestPage(cartService) {
        this.cartService = cartService;
    }
    GuestPage.prototype.ngOnInit = function () {
        this.cart = this.cartService.getCart();
        console.log(this.cart);
    };
    GuestPage.prototype.next = function () {
        this.slides.slideNext();
        console.log("okay");
    };
    GuestPage.prototype.decreaseCartItem = function (product) {
        //if combo look for sec product
        if (product.secondary_product) {
            var sec_pro = this.cart.filter(function (item) {
                return item._id == product.secondary_product._id;
            });
            this.cartService.decreaseProduct(sec_pro[0]);
        }
        // if any
        this.cartService.decreaseProduct(product);
    };
    GuestPage.prototype.increaseCartItem = function (product) {
        //if combo look for sec product
        if (product.secondary_product) {
            var sec_pro = this.cart.filter(function (item) {
                return item._id == product.secondary_product._id;
            });
            this.cartService.increaseProduct(sec_pro[0]);
        }
        // if any
        this.cartService.increaseProduct(product);
    };
    GuestPage.prototype.removeCartItem = function (product) {
        //if combo look for sec product
        if (product.secondary_product) {
            var sec_pro = this.cart.filter(function (item) {
                return item._id == product.secondary_product._id;
            });
            this.cartService.removeProduct(sec_pro[0]);
        }
        // if any
        this.cartService.removeProduct(product);
    };
    GuestPage.prototype.edits = function (product) {
        this.edit = product;
    };
    GuestPage.ctorParameters = function () { return [
        { type: src_app_core_modules_services_cart_cart_state_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("guest_slides", { static: true }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"])
    ], GuestPage.prototype, "slides", void 0);
    GuestPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-guest',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./guest.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/payments/pages/guest/guest.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./guest.page.scss */ "./src/app/modules/payments/pages/guest/guest.page.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_core_modules_services_cart_cart_state_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"]])
    ], GuestPage);
    return GuestPage;
}());



/***/ })

}]);
//# sourceMappingURL=modules-payments-pages-guest-guest-module.js.map