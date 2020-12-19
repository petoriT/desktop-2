(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-checkout-checkout-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/payments/pages/checkout/checkout.page.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/payments/pages/checkout/checkout.page.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button\r\n        defaultHref=\"/user/landing\"\r\n        slot=\"icon-only\"\r\n        name=\"arrow-back\"\r\n      >\r\n      </ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title\r\n      style=\"text-align: center; padding-left: 0px; padding-right: 30px\"\r\n      >checkout</ion-title\r\n    >\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content *ngIf=\"token\">\r\n  <ion-slides #checkout  (ionSlideDidChange)=\"slideChange($event,checkout)\"  pager=\"true\" >\r\n    <ion-slide>\r\n    \r\n      <ion-grid>\r\n        <ion-col size=12>\r\n          <ion-title>\r\n            <h1>Delivery Adress</h1>\r\n          </ion-title>\r\n          <ion-text><sub> Review Your Deliver Adress </sub></ion-text>\r\n        </ion-col> \r\n        <ion-col size=12>\r\n          <ion-card\r\n          *ngIf=\"!modify\"\r\n          color=\"light\"\r\n          style=\"box-shadow: none !important\"\r\n        >\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col class=\"center\" size=\"12\">\r\n                <ion-chip>\r\n                  <ion-avatar item-left>\r\n                    <div *ngFor=\"let pic of profile$.profileImage\">\r\n                      <img src=\"{{pic.url}}\" />\r\n                    </div>\r\n                  </ion-avatar>\r\n                  <ion-label>\r\n                    {{profile$.first_name}} {{profile$.last_name}}\r\n                  </ion-label>\r\n                </ion-chip>\r\n              </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n              <ion-col class=\"center\" size=\"12\">\r\n                <h6 style=\"display: block; text-align: start\">Deliver to</h6>\r\n              </ion-col>\r\n              <ion-col class=\"adress ion-no-padding\" size=\"12\">\r\n                <ion-text>\r\n                  {{profile$.address.unit}} {{profile$.address.street_name}}\r\n                </ion-text>\r\n              </ion-col>\r\n              <ion-col class=\"adress ion-no-padding\" size=\"12\">\r\n                <ion-text> {{profile$.address.complex}} </ion-text>\r\n              </ion-col>\r\n              <ion-col class=\"adress ion-no-padding\" size=\"12\">\r\n                <ion-text> {{profile$.address.suburb}} </ion-text>\r\n              </ion-col>\r\n              <ion-col class=\"adress ion-no-padding\" size=\"12\">\r\n                <ion-text> {{profile$.address.province}} </ion-text>\r\n              </ion-col>\r\n              <ion-col class=\"adress ion-no-padding\" size=\"12\">\r\n                <ion-text> {{profile$.address.zip}} </ion-text>\r\n              </ion-col>\r\n              <ion-col size=\"12\">\r\n                <ion-button (click)=\"editAddress()\" shape=\"round\">\r\n                  Edit\r\n                </ion-button>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-card>\r\n        </ion-col>\r\n      </ion-grid>\r\n\r\n     \r\n    \r\n\r\n      <ion-grid style=\"position: fixed; top: 0\">\r\n        <div *ngIf=\"modify\">\r\n          <ion-row>\r\n            <ion-col size=\"12\">\r\n              <h1 style=\"margin-bottom: 35px; margin-top: 56px\">\r\n                <a style=\"color: #018786\">D</a>elivery\r\n                <a style=\"color: #ffd700\">A</a>ddress\r\n              </h1>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col size=\"6\">\r\n              <ion-item>\r\n                <ion-label position=\"floating\">Street number</ion-label>\r\n                <ion-input\r\n                  value=\"{{profile$.address.unit}}\"\r\n                  type=\"street-address\"\r\n                ></ion-input>\r\n              </ion-item>\r\n            </ion-col>\r\n            <ion-col size=\"6\">\r\n              <ion-item>\r\n                <ion-label position=\"floating\">Street Name</ion-label>\r\n                <ion-input\r\n                  value=\"{{profile$.address.street_name}}\"\r\n                  type=\"street-address\"\r\n                ></ion-input>\r\n              </ion-item>\r\n            </ion-col>\r\n            <ion-col size=\"12\">\r\n              <ion-item>\r\n                <ion-label position=\"floating\"\r\n                  >Unit No and Complex (optional)</ion-label\r\n                >\r\n                <ion-input\r\n                  value=\"{{profile$.address.complex}}\"\r\n                  type=\"address-line2\"\r\n                ></ion-input>\r\n              </ion-item>\r\n            </ion-col>\r\n            <ion-col size=\"12\">\r\n              <ion-item>\r\n                <ion-label position=\"floating\">Suburb</ion-label>\r\n                <ion-input\r\n                  value=\"{{profile$.address.suburb}}\"\r\n                  type=\"address-line3\"\r\n                ></ion-input>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col size=\"8\">\r\n              <ion-item>\r\n                <ion-label position=\"floating\">province</ion-label>\r\n                <ion-input\r\n                  value=\"{{profile$.address.province}}\"\r\n                  type=\"address-line3\"\r\n                ></ion-input>\r\n              </ion-item>\r\n            </ion-col>\r\n            <ion-col size=\"4\">\r\n              <ion-item>\r\n                <ion-label position=\"floating\">Area Code</ion-label>\r\n                <ion-input\r\n                  value=\"{{profile$.address.zip}}\"\r\n                  type=\"postal-code\"\r\n                ></ion-input>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n        </div>\r\n      </ion-grid>\r\n\r\n    </ion-slide>\r\n    <ion-slide>\r\n      <div  style=\" overflow: scroll; max-height: 90vh;\">\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col size=\"12\">\r\n            <ion-title>\r\n              <h1>Confirm Order</h1>\r\n            </ion-title>\r\n            <ion-text><sub> Check Your Order and Pay </sub></ion-text>\r\n          </ion-col>\r\n\r\n         \r\n          <ion-col size=\"12\">\r\n          \r\n             \r\n           <div *ngFor=\"let product of cart; let i = index\">\r\n                <ion-item\r\n                  \r\n                  class=\"ion-no-padding\"\r\n                  (click)=\"edits(product)\"\r\n                  style=\"--inner-padding-end: 0px;\"\r\n                  [class.grey]= \"product === edit\"\r\n                >\r\n            \r\n  \r\n                  <ion-grid>\r\n                    <ion-row>\r\n                      <ion-col size=\"2\">\r\n                        <div *ngFor=\"let image of product.productImage;let z = index\" >\r\n                          <ion-avatar  *ngIf=\"z === 0 \"  >\r\n                            <ion-img src=\"{{image.url}}\" ></ion-img>\r\n                        </ion-avatar>\r\n                        </div>\r\n                  \r\n                      </ion-col>\r\n  \r\n                      <ion-col size=\"10\">\r\n                        <ion-row>\r\n                          <ion-col class=\"center\" size=\"6\">\r\n                            <ion-label>\r\n                              <sub> {{product.productName}} </sub>\r\n                              {{selected(product)}}\r\n                            </ion-label>\r\n                          </ion-col>\r\n                          <ion-col class=\"center\" size=\"2\">\r\n                            <ion-label>\r\n                              <sub> {{product.amount}} </sub>\r\n                            </ion-label>\r\n                          </ion-col>\r\n                          <ion-col class=\"center\" size=\"4\">\r\n                            <ion-label>\r\n                              <sub>\r\n                                {{ product.amount * product.productPrice |\r\n                                currency: \"R\" }}\r\n                              </sub>\r\n                            </ion-label>\r\n                          </ion-col>\r\n                        </ion-row>\r\n                      \r\n                      </ion-col>\r\n                    </ion-row>\r\n                  </ion-grid>\r\n                </ion-item>\r\n                <ion-item    [class.grey]= \"product === edit\" *ngIf=\"edit == product && !(product.productPrice == 0 || product.sec)\">\r\n                \r\n                    <ion-grid >\r\n                      <ion-row >\r\n                          <ion-col size=\"7\">\r\n                            <ion-row\r\n                              style=\"background: #f5fafa; border-radius: 20px\"\r\n                            >\r\n                              <ion-col size=\"4\" class=\"center\">\r\n                                <ion-button\r\n                                  fill=\"clear\"\r\n                                  *ngIf=\"!(product.productPrice == 0 || product.sec)\"\r\n                                  (click)=\"decreaseCartItem(product)\"\r\n                                >\r\n                                  <ion-icon\r\n                                    name=\"remove-circle\"\r\n                                    slot=\"icon-only\"\r\n                                  ></ion-icon>\r\n                                </ion-button>\r\n                              </ion-col>\r\n                              <ion-col size=\"4\" class=\"center\">\r\n                                <ion-input\r\n                                  (input)=\"onAmountChange(product, $event.target.value)\"\r\n                                  type=\"number\"\r\n                                  value=\"{{ product.amount }}\"\r\n                                ></ion-input>\r\n                              </ion-col>\r\n                              <ion-col size=\"4\" class=\"center\">\r\n                                <ion-button\r\n                                  fill=\"clear\"\r\n                                  *ngIf=\"!(product.productPrice == 0 || product.sec)\"\r\n                                  (click)=\"increaseCartItem(product)\"\r\n                                >\r\n                                  <ion-icon\r\n                                    name=\"add-circle\"\r\n                                    slot=\"icon-only\"\r\n                                  ></ion-icon>\r\n                                </ion-button>\r\n                              </ion-col>\r\n                            </ion-row>\r\n                          </ion-col>\r\n                          <ion-col class=\"center\" *ngIf=\"!product.sec\" size=\"5\">\r\n                            <ion-button\r\n  \r\n                              shape=\"round\"\r\n                              color=\"danger\"\r\n                              (click)=\"removeCartItem(product)\"\r\n                            >\r\n                          \r\n                            Remove\r\n                              <ion-icon\r\n                             \r\n                                name=\"close-circle\"\r\n                                slot=\"icon-only\"\r\n                              ></ion-icon>\r\n                            </ion-button>\r\n                          </ion-col>\r\n                      </ion-row>\r\n                    </ion-grid>\r\n               \r\n                </ion-item>\r\n              </div>\r\n         \r\n\r\n            \r\n           \r\n          </ion-col>\r\n          <ion-col style=\"padding-bottom: 64px;\" *ngIf=\"paynow\" size=\"12\">\r\n            <ion-button shape=\"round\" (click)=\"next()\">\r\n              <app-payfast></app-payfast>\r\n            </ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n     \r\n      </div>\r\n    </ion-slide>\r\n\r\n  \r\n\r\n  </ion-slides>\r\n  <ion-fab *ngIf=\"showNext\" vertical=\"bottom\" horizontal=\"end\">\r\n    <ion-button\r\n      shape=\"round\"\r\n      class=\"ion-padding-end\"\r\n     \r\n      size=\"small\"\r\n      style=\"color: #000000;--background:white\"\r\n      (click)=\"next(checkout )\"\r\n    >\r\n      next\r\n    </ion-button>\r\n  </ion-fab>\r\n\r\n  <ion-fab *ngIf=\"showBack\" horizontal=\"start\" vertical=\"bottom\">\r\n    <ion-button\r\n      shape=\"round\"\r\n      class=\"ion-padding-start\"\r\n      style=\"color: #000000;--background:white\"\r\n      size=\"small\"\r\n  \r\n      (click)=\" slidesBack(checkout)\"\r\n    >\r\n      back\r\n    </ion-button>\r\n  </ion-fab>\r\n</ion-content>\r\n<ion-content *ngIf=\"!token\">\r\n  <ion-img src=\"../assets/afrobIlustration.svg\"> </ion-img>\r\n  <ion-toolbar>\r\n    <ion-button\r\n      (click)=\"goToGuest()\"\r\n      color=\"secondary\"\r\n      shape=\"round\"\r\n      expand=\"block\"\r\n    >\r\n      Buy as Guest\r\n    </ion-button>\r\n  </ion-toolbar>\r\n  <ion-toolbar>\r\n    <ion-button (click)=\"logIn()\" shape=\"round\" expand=\"block\">\r\n      or log in\r\n    </ion-button>\r\n  </ion-toolbar>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/modules/payments/pages/checkout/checkout.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/payments/pages/checkout/checkout.module.ts ***!
  \********************************************************************/
/*! exports provided: CheckoutPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutPageModule", function() { return CheckoutPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/components.module */ "./src/app/modules/payments/pages/checkout/components/components.module.ts");
/* harmony import */ var _checkout_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./checkout.page */ "./src/app/modules/payments/pages/checkout/checkout.page.ts");






 // TODO: Delete later if no use

var routes = [
    {
        path: '',
        component: _checkout_page__WEBPACK_IMPORTED_MODULE_7__["CheckoutPage"]
    }
];
var CheckoutPageModule = /** @class */ (function () {
    function CheckoutPageModule() {
    }
    CheckoutPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_checkout_page__WEBPACK_IMPORTED_MODULE_7__["CheckoutPage"]]
        })
    ], CheckoutPageModule);
    return CheckoutPageModule;
}());



/***/ }),

/***/ "./src/app/modules/payments/pages/checkout/checkout.page.scss":
/*!********************************************************************!*\
  !*** ./src/app/modules/payments/pages/checkout/checkout.page.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".adress {\n  float: left;\n}\n\nion-slide {\n  height: 90vh;\n}\n\ndiv .item-inner {\n  padding-right: 0px;\n}\n\n.one {\n  background: #018786;\n  height: 40vh;\n  width: 40vh;\n  position: absolute;\n  top: 10vh;\n  border-radius: 40vh;\n  left: -20vh;\n}\n\n.two {\n  background: #FFD700;\n  height: 40vh;\n  width: 40vh;\n  position: absolute;\n  top: 10vh;\n  border-radius: 40vh;\n  left: 20vh;\n}\n\n.three {\n  background: #90DED7;\n  height: 30vw;\n  width: 30vw;\n  top: 0;\n  border-radius: 30vh;\n  left: 6vw;\n  position: absolute;\n}\n\n.grey {\n  --background: var(--ion-item-background, var(--ion-background-color,#e9ecef));\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wYXltZW50cy9wYWdlcy9jaGVja291dC9DOlxcVXNlcnNcXE1hcnZpblxcRG9jdW1lbnRzXFxHaXRIdWJcXGFmcm9iXFxjbGllbnQvc3JjXFxhcHBcXG1vZHVsZXNcXHBheW1lbnRzXFxwYWdlc1xcY2hlY2tvdXRcXGNoZWNrb3V0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9wYXltZW50cy9wYWdlcy9jaGVja291dC9jaGVja291dC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0FDQ0o7O0FEQ0E7RUFDSSxZQUFBO0FDRUo7O0FEQUE7RUFDSSxrQkFBQTtBQ0dKOztBRERBO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQ0lKOztBREZBO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtBQ0tKOztBREhBO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLE1BQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtBQ01KOztBREpBO0VBRUksNkVBQUE7QUNNSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGF5bWVudHMvcGFnZXMvY2hlY2tvdXQvY2hlY2tvdXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFkcmVzc3tcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG59XHJcbmlvbi1zbGlkZXtcclxuICAgIGhlaWdodDogOTB2aDtcclxufVxyXG5kaXYgLml0ZW0taW5uZXJ7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OjBweFxyXG59XHJcbi5vbmV7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDE4Nzg2O1xyXG4gICAgaGVpZ2h0OiA0MHZoO1xyXG4gICAgd2lkdGg6IDQwdmg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDEwdmg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0MHZoO1xyXG4gICAgbGVmdDogLTIwdmg7XHJcbn1cclxuLnR3b3tcclxuICAgIGJhY2tncm91bmQ6ICNGRkQ3MDA7XHJcbiAgICBoZWlnaHQ6IDQwdmg7XHJcbiAgICB3aWR0aDogNDB2aDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTB2aDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDQwdmg7XHJcbiAgICBsZWZ0OiAyMHZoO1xyXG59XHJcbi50aHJlZXtcclxuICAgIGJhY2tncm91bmQ6ICM5MERFRDc7XHJcbiAgICBoZWlnaHQ6IDMwdnc7XHJcbiAgICB3aWR0aDogMzB2dztcclxuICAgIHRvcDogMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDMwdmg7XHJcbiAgICBsZWZ0OiA2dnc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuLmdyZXl7XHJcbiAgICBcclxuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWl0ZW0tYmFja2dyb3VuZCwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsI2U5ZWNlZikpO1xyXG59IiwiLmFkcmVzcyB7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG5pb24tc2xpZGUge1xuICBoZWlnaHQ6IDkwdmg7XG59XG5cbmRpdiAuaXRlbS1pbm5lciB7XG4gIHBhZGRpbmctcmlnaHQ6IDBweDtcbn1cblxuLm9uZSB7XG4gIGJhY2tncm91bmQ6ICMwMTg3ODY7XG4gIGhlaWdodDogNDB2aDtcbiAgd2lkdGg6IDQwdmg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMHZoO1xuICBib3JkZXItcmFkaXVzOiA0MHZoO1xuICBsZWZ0OiAtMjB2aDtcbn1cblxuLnR3byB7XG4gIGJhY2tncm91bmQ6ICNGRkQ3MDA7XG4gIGhlaWdodDogNDB2aDtcbiAgd2lkdGg6IDQwdmg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMHZoO1xuICBib3JkZXItcmFkaXVzOiA0MHZoO1xuICBsZWZ0OiAyMHZoO1xufVxuXG4udGhyZWUge1xuICBiYWNrZ3JvdW5kOiAjOTBERUQ3O1xuICBoZWlnaHQ6IDMwdnc7XG4gIHdpZHRoOiAzMHZ3O1xuICB0b3A6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDMwdmg7XG4gIGxlZnQ6IDZ2dztcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4uZ3JleSB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWl0ZW0tYmFja2dyb3VuZCwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsI2U5ZWNlZikpO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/payments/pages/checkout/checkout.page.ts":
/*!******************************************************************!*\
  !*** ./src/app/modules/payments/pages/checkout/checkout.page.ts ***!
  \******************************************************************/
/*! exports provided: CheckoutPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutPage", function() { return CheckoutPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var src_app_core_modules_services_profile_profile_facade_profile_facade_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core-modules/services/profile/profile-facade/profile-facade.service */ "./src/app/core-modules/services/profile/profile-facade/profile-facade.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var src_app_core_modules_services_header_header_state_header_state_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core-modules/services/header/header-state/header-state.service */ "./src/app/core-modules/services/header/header-state/header-state.service.ts");
/* harmony import */ var src_app_core_modules_services_cart_cart_state_cart_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core-modules/services/cart/cart-state/cart.service */ "./src/app/core-modules/services/cart/cart-state/cart.service.ts");






var CheckoutPage = /** @class */ (function () {
    function CheckoutPage(userFacade, router, headerState, cartService) {
        this.userFacade = userFacade;
        this.router = router;
        this.headerState = headerState;
        this.cartService = cartService;
        this.path = true;
    }
    CheckoutPage.prototype.ngOnInit = function () {
        var _this = this;
        this.showNext = true;
        this.showBack = false;
        this.token = !!localStorage.getItem("token");
        this.userFacade.getUser$().subscribe(function (res) {
            _this.profile$ = res;
        }, function (err) {
            console.log(err);
        });
        this.cart = this.cartService.getCart();
    };
    CheckoutPage.prototype.logIn = function () {
        this.router.navigate(["/auth"]);
        this.headerState.setReturnRoute("/buy");
    };
    CheckoutPage.prototype.goToGuest = function () {
        this.router.navigate(["/guest"]);
    };
    CheckoutPage.prototype.editAddress = function () {
        this.modify = true;
    };
    CheckoutPage.prototype.next = function (slide) {
        slide.lockSwipes(false);
        slide.slideNext();
        slide.lockSwipes(true);
        this.paynow = true;
    };
    CheckoutPage.prototype.slidesBack = function (slide) {
        slide.lockSwipes(false);
        slide.slidePrev();
        slide.lockSwipes(true);
    };
    CheckoutPage.prototype.decreaseCartItem = function (product) {
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
    CheckoutPage.prototype.increaseCartItem = function (product) {
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
    CheckoutPage.prototype.removeCartItem = function (product) {
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
    CheckoutPage.prototype.edits = function (product) {
        if (product == this.edit) {
            this.edit = null;
        }
        else {
            this.edit = product;
        }
    };
    CheckoutPage.prototype.selected = function (data) {
        if (this.edit == data)
            return "grey";
    };
    CheckoutPage.prototype.slideChange = function (event, slides) {
        var _this = this;
        slides.getActiveIndex().then(function (data) {
            if (data == 1) {
                _this.showNext = false;
                _this.showBack = true;
            }
            else if (data == 0) {
                _this.showBack = false;
                _this.showNext = true;
            }
            else {
                _this.showNext = true;
                _this.showBack = true;
            }
        });
    };
    CheckoutPage.ctorParameters = function () { return [
        { type: src_app_core_modules_services_profile_profile_facade_profile_facade_service__WEBPACK_IMPORTED_MODULE_2__["UserFacadeService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: src_app_core_modules_services_header_header_state_header_state_service__WEBPACK_IMPORTED_MODULE_4__["HeaderStateService"] },
        { type: src_app_core_modules_services_cart_cart_state_cart_service__WEBPACK_IMPORTED_MODULE_5__["CartService"] }
    ]; };
    CheckoutPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-checkout",
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./checkout.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/payments/pages/checkout/checkout.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./checkout.page.scss */ "./src/app/modules/payments/pages/checkout/checkout.page.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_core_modules_services_profile_profile_facade_profile_facade_service__WEBPACK_IMPORTED_MODULE_2__["UserFacadeService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            src_app_core_modules_services_header_header_state_header_state_service__WEBPACK_IMPORTED_MODULE_4__["HeaderStateService"],
            src_app_core_modules_services_cart_cart_state_cart_service__WEBPACK_IMPORTED_MODULE_5__["CartService"]])
    ], CheckoutPage);
    return CheckoutPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-checkout-checkout-module.js.map