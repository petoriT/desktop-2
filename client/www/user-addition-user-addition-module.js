(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-addition-user-addition-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin-store/pages/users/user-addition/user-addition.page.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin-store/pages/users/user-addition/user-addition.page.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>user-addition</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/modules/admin-store/pages/users/user-addition/user-addition-routing.module.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/admin-store/pages/users/user-addition/user-addition-routing.module.ts ***!
  \***********************************************************************************************/
/*! exports provided: UserAdditionPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAdditionPageRoutingModule", function() { return UserAdditionPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _user_addition_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-addition.page */ "./src/app/modules/admin-store/pages/users/user-addition/user-addition.page.ts");




var routes = [
    {
        path: '',
        component: _user_addition_page__WEBPACK_IMPORTED_MODULE_3__["UserAdditionPage"]
    }
];
var UserAdditionPageRoutingModule = /** @class */ (function () {
    function UserAdditionPageRoutingModule() {
    }
    UserAdditionPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], UserAdditionPageRoutingModule);
    return UserAdditionPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/admin-store/pages/users/user-addition/user-addition.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/admin-store/pages/users/user-addition/user-addition.module.ts ***!
  \***************************************************************************************/
/*! exports provided: UserAdditionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAdditionPageModule", function() { return UserAdditionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _user_addition_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-addition-routing.module */ "./src/app/modules/admin-store/pages/users/user-addition/user-addition-routing.module.ts");
/* harmony import */ var _user_addition_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-addition.page */ "./src/app/modules/admin-store/pages/users/user-addition/user-addition.page.ts");







var UserAdditionPageModule = /** @class */ (function () {
    function UserAdditionPageModule() {
    }
    UserAdditionPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _user_addition_routing_module__WEBPACK_IMPORTED_MODULE_5__["UserAdditionPageRoutingModule"]
            ],
            declarations: [_user_addition_page__WEBPACK_IMPORTED_MODULE_6__["UserAdditionPage"]]
        })
    ], UserAdditionPageModule);
    return UserAdditionPageModule;
}());



/***/ }),

/***/ "./src/app/modules/admin-store/pages/users/user-addition/user-addition.page.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/admin-store/pages/users/user-addition/user-addition.page.scss ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4tc3RvcmUvcGFnZXMvdXNlcnMvdXNlci1hZGRpdGlvbi91c2VyLWFkZGl0aW9uLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/admin-store/pages/users/user-addition/user-addition.page.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/admin-store/pages/users/user-addition/user-addition.page.ts ***!
  \*************************************************************************************/
/*! exports provided: UserAdditionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAdditionPage", function() { return UserAdditionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var UserAdditionPage = /** @class */ (function () {
    function UserAdditionPage() {
    }
    UserAdditionPage.prototype.ngOnInit = function () {
    };
    UserAdditionPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-addition',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./user-addition.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin-store/pages/users/user-addition/user-addition.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./user-addition.page.scss */ "./src/app/modules/admin-store/pages/users/user-addition/user-addition.page.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], UserAdditionPage);
    return UserAdditionPage;
}());



/***/ })

}]);
//# sourceMappingURL=user-addition-user-addition-module.js.map