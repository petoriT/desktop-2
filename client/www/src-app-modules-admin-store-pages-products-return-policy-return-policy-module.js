(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-modules-admin-store-pages-products-return-policy-return-policy-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin-store/pages/products/return-policy/return-policy.page.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin-store/pages/products/return-policy/return-policy.page.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-fab vertical=\"top\" horizontal=\"start\" slot=\"fixed\">\n  <ion-fab-button size=\"small\" (click)=\"backClicked()\">\n    <ion-icon name=\"close-outline\"></ion-icon>\n  </ion-fab-button>\n</ion-fab>\n\n<ion-content>\n  <ion-slides\n    #check_slides\n    style=\"min-height: 100%\"\n    [options]=\"{pagination:true}\"\n  >\n    <ion-slide>\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-img src=\"../assets/authReturns.svg\"> </ion-img>\n          </ion-col>\n          <ion-col size=\"12\">\n            <ion-title>\n              <h1 style=\"text-align: center\">Return Policy</h1>\n            </ion-title>\n            <ion-text style=\"text-align: center\">\n              <sub> Customers can return products if they are : </sub>\n            </ion-text>\n          </ion-col>\n          <ion-col size=\"12\">\n            <ion-chip *ngFor=\"let reason  of return_reason\">\n              {{reason }}\n            </ion-chip>\n          </ion-col>\n          <ion-col style=\"padding-top: 20%\" size=\"12\">\n            <ion-text style=\"text-align: center\">\n              <sub> Add your store return questionnaire </sub>\n            </ion-text>\n          </ion-col>\n\n          <ion-col size=\"12\">\n            <ion-button\n              color=\"secondary\"\n              shape=\"round\"\n              (click)=\"next(check_slides)\"\n            >\n              Continue\n            </ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-slide>\n    <ion-slide>\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-img src=\"../assets/userReturns.svg\"> </ion-img>\n          </ion-col>\n          <ion-col size=\"12\">\n            <ion-title>\n              <h1 style=\"text-align: center\">Add Policy</h1>\n            </ion-title>\n            <ion-text style=\"text-align: center\">\n              <sub> example:\" Is warranty seal broken ? \" </sub>\n            </ion-text>\n          </ion-col>\n          <ion-col size=\"12\">\n            <ion-chip *ngFor=\"let question  of  added_question\">\n              {{ question }}\n            </ion-chip>\n          </ion-col>\n          <ion-col size=\"12\">\n            <ion-item>\n              <ion-label position=\"floating\"> Question: </ion-label>\n              <ion-textarea [(ngModel)]=\"current_question\"></ion-textarea>\n            </ion-item>\n            <ion-button\n              size=\"small\"\n              color=\"primary\"\n              shape=\"round\"\n              (click)=\"addQuestion()\"\n            >\n              Add another Question\n            </ion-button>\n          </ion-col>\n          <ion-col size=\"12\">\n            <ion-button\n              *ngIf=\" added_question.length > 0\"\n              color=\"secondary\"\n              shape=\"round\"\n              (click)=\"addReturnPolicy()\"\n            >\n              complete\n            </ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-slide>\n  </ion-slides>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/modules/admin-store/pages/products/return-policy/return-policy-routing.module.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/admin-store/pages/products/return-policy/return-policy-routing.module.ts ***!
  \**************************************************************************************************/
/*! exports provided: ReturnPolicyPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReturnPolicyPageRoutingModule", function() { return ReturnPolicyPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _return_policy_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./return-policy.page */ "./src/app/modules/admin-store/pages/products/return-policy/return-policy.page.ts");




var routes = [
    {
        path: '',
        component: _return_policy_page__WEBPACK_IMPORTED_MODULE_3__["ReturnPolicyPage"]
    }
];
var ReturnPolicyPageRoutingModule = /** @class */ (function () {
    function ReturnPolicyPageRoutingModule() {
    }
    ReturnPolicyPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ReturnPolicyPageRoutingModule);
    return ReturnPolicyPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/admin-store/pages/products/return-policy/return-policy.module.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/admin-store/pages/products/return-policy/return-policy.module.ts ***!
  \******************************************************************************************/
/*! exports provided: ReturnPolicyPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReturnPolicyPageModule", function() { return ReturnPolicyPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _return_policy_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./return-policy-routing.module */ "./src/app/modules/admin-store/pages/products/return-policy/return-policy-routing.module.ts");
/* harmony import */ var _return_policy_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./return-policy.page */ "./src/app/modules/admin-store/pages/products/return-policy/return-policy.page.ts");







var ReturnPolicyPageModule = /** @class */ (function () {
    function ReturnPolicyPageModule() {
    }
    ReturnPolicyPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _return_policy_routing_module__WEBPACK_IMPORTED_MODULE_5__["ReturnPolicyPageRoutingModule"]
            ],
            declarations: [_return_policy_page__WEBPACK_IMPORTED_MODULE_6__["ReturnPolicyPage"]]
        })
    ], ReturnPolicyPageModule);
    return ReturnPolicyPageModule;
}());



/***/ }),

/***/ "./src/app/modules/admin-store/pages/products/return-policy/return-policy.page.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/admin-store/pages/products/return-policy/return-policy.page.scss ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4tc3RvcmUvcGFnZXMvcHJvZHVjdHMvcmV0dXJuLXBvbGljeS9yZXR1cm4tcG9saWN5LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/admin-store/pages/products/return-policy/return-policy.page.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/admin-store/pages/products/return-policy/return-policy.page.ts ***!
  \****************************************************************************************/
/*! exports provided: ReturnPolicyPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReturnPolicyPage", function() { return ReturnPolicyPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var src_app_core_modules_services_header_header_state_header_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core-modules/services/header/header-state/header-state.service */ "./src/app/core-modules/services/header/header-state/header-state.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var src_app_core_modules_services_profile_profile_facade_profile_facade_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core-modules/services/profile/profile-facade/profile-facade.service */ "./src/app/core-modules/services/profile/profile-facade/profile-facade.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");








var ReturnPolicyPage = /** @class */ (function () {
    function ReturnPolicyPage(headerState, toastController, _location, router, userFacade) {
        this.headerState = headerState;
        this.toastController = toastController;
        this._location = _location;
        this.router = router;
        this.userFacade = userFacade;
        this.current_question = "";
        this.added_question = [];
        this.return_reason = [
            "Damaged Goods",
            "Wrong Order Delivered",
            "SCAM",
            "size variation ",
        ];
    }
    ReturnPolicyPage.prototype.ngOnInit = function () {
        this.store_id = localStorage.getItem("st");
    };
    ReturnPolicyPage.prototype.next = function (slides) {
        slides.slideNext();
        this.presentToast("swipe to go back");
    };
    ReturnPolicyPage.prototype.presentToast = function (data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var toast;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: data,
                            duration: 3000,
                            position: "bottom",
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    ReturnPolicyPage.prototype.backClicked = function () {
        this._location.back();
    };
    ReturnPolicyPage.prototype.addQuestion = function () {
        this.added_question.push(this.current_question);
        this.current_question = "";
    };
    ReturnPolicyPage.prototype.addReturnPolicy = function () {
        this.userFacade.updateStoreProfile({
            return_policy: this.added_question,
            store_id: this.store_id,
        });
        //complete
        this.router.navigate(["/admin-store/store"]);
    };
    ReturnPolicyPage.ctorParameters = function () { return [
        { type: src_app_core_modules_services_header_header_state_header_state_service__WEBPACK_IMPORTED_MODULE_2__["HeaderStateService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: src_app_core_modules_services_profile_profile_facade_profile_facade_service__WEBPACK_IMPORTED_MODULE_5__["UserFacadeService"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("check_slides", { static: true }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonSlides"])
    ], ReturnPolicyPage.prototype, "slides", void 0);
    ReturnPolicyPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-return-policy",
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./return-policy.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin-store/pages/products/return-policy/return-policy.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./return-policy.page.scss */ "./src/app/modules/admin-store/pages/products/return-policy/return-policy.page.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_core_modules_services_header_header_state_header_state_service__WEBPACK_IMPORTED_MODULE_2__["HeaderStateService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            src_app_core_modules_services_profile_profile_facade_profile_facade_service__WEBPACK_IMPORTED_MODULE_5__["UserFacadeService"]])
    ], ReturnPolicyPage);
    return ReturnPolicyPage;
}());



/***/ })

}]);
//# sourceMappingURL=src-app-modules-admin-store-pages-products-return-policy-return-policy-module.js.map