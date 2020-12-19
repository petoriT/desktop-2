(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-modules-admin-store-pages-users-users-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin-store/pages/users/components/activity/activity.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin-store/pages/users/components/activity/activity.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div *ngIf=\"no_Activity\" >\n\n\n    <ion-grid>\n      <ion-row style=\"height: 70vh;\" class=\"center\">\n        <ion-col size=\"12\">\n          <ion-label>\n            No user activity\n          </ion-label>\n        </ion-col>\n      \n      </ion-row>\n    </ion-grid>\n\n</div>\n<div *ngIf=\"!no_Activity\">\n  \n    <ion-card (click)=\"setRead()\" [ngClass]=\"read\" *ngFor=\"let activity of  activities$ | async  ; let i = index\"  class=\"ion-margin-top\"  style=\"display:block;margin:5px;\" color=\"light\">\n      <ion-grid>\n        <ion-row>\n              <ion-col class=\"center\" size=2>\n                <ion-chip>\n                  {{activity.user_ini}}\n                </ion-chip>\n              </ion-col>\n              <ion-col  class=\"center\"   size=6>\n                <h5>\n                  <sub>{{activity.user_name}}</sub>\n                </h5>\n              </ion-col>\n              <ion-col  class=\"center\"  size=4>\n                <ion-label style=\"width: 100%;  text-align: end;\">\n                  <sub>{{activity.date | date:'MMM d, y'}}</sub>\n                </ion-label>\n              </ion-col>\n        </ion-row>\n           \n        <ion-row>\n              <ion-col size=2>\n\n              </ion-col>\n              <ion-col size=10>\n                \n                <ion-text>\n                \n                    {{activity.msg}}\n                \n                 \n                </ion-text>\n              \n              </ion-col>\n       \n       </ion-row>\n     \n      \n      </ion-grid>\n  </ion-card>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin-store/pages/users/components/ad-user/ad-user.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin-store/pages/users/components/ad-user/ad-user.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-slides  style=\"height: 90vh;\" #userSlides>\n  <ion-slide>\n    <form [formGroup]=\"slideOne\" (ngSubmit)=\"onSubmit()\">\n      <ion-row>\n        <ion-col style=\"height: 50vh;\" size=\"12\">\n          <ion-img\n            style=\"height: -webkit-fill-available;\"\n            src=\"./assets/adminUserAdduserSlide1.svg\"\n          ></ion-img>\n          <ion-h3>\n            Add New User\n          </ion-h3>\n        </ion-col>\n        <ion-col size=\"12\">\n          <ion-grid>\n            <ion-row>\n              <ion-col size=\"12\">\n                <ion-item>\n                  <ion-input\n                    class=\"bottom_border\"\n                    placeholder=\"Email\"\n                    id=\"email\"\n                    [(ngModel)]=\"emailVaule\"\n                    formControlName=\"email\"\n                    type=\"email\"\n                  ></ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col size=\"12\" class=\"ion-no-padding\">\n                <div\n                  *ngIf=\"\n                    slideOne.get('email').invalid &&\n                    slideOne.get('email').touched\n                  \"\n                >\n                  <ion-text\n                    *ngIf=\"slideOne.get('email').errors?.required\"\n                    color=\"danger\"\n                    ><sub>email is required</sub></ion-text\n                  >\n                </div>\n                <div\n                  *ngIf=\"\n                    slideOne.get('email').invalid &&\n                    slideOne.get('email').touched\n                  \"\n                >\n                  <ion-text\n                    *ngIf=\"slideOne.get('email').errors?.maxlength\"\n                    color=\"danger\"\n                    ><sub>email must be at most 20 Characters</sub></ion-text\n                  >\n                  <ion-text\n                    *ngIf=\"\n                      slideOne.get('email').errors?.pattern &&\n                      !slideOne.get('email').errors?.maxlength\n                    \"\n                    color=\"danger\"\n                    ><sub>email e.g user@host.com</sub></ion-text\n                  >\n                </div>\n              </ion-col>\n              <ion-col size=\"12\">\n                <ion-item>\n                  <ion-label position=\"floating\">\n                    <sub>Role/ Position</sub>\n                  </ion-label>\n                  <ion-input formControlName=\"role\" type=\"text\"> </ion-input>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col size=\"12\">\n                <ion-item>\n                  <ion-label> <sub>User Type :</sub></ion-label>\n                  <ion-select\n                    formControlName=\"user_type\"\n                    interface=\"action-sheet\"\n                    style=\"display: contents;\"\n                  >\n                    <ion-select-option value=\"admin\">Admin </ion-select-option>\n                    <ion-select-option value=\"user\">User</ion-select-option>\n                  </ion-select>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-button (click)=\"next()\" shape=\"round\" size=\"small\">\n            Next\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </form>\n  </ion-slide>\n  <ion-slide>\n    <ion-grid>\n      <ion-row>\n        <ion-col style=\"height: 40vh;\" size=\"12\">\n          <ion-img\n            style=\"height: -webkit-fill-available;\"\n            src=\"./assets/adminUserAduserSlide2.svg\"\n          ></ion-img>\n        </ion-col>\n\n        <ion-col size=\"12\">\n          <ion-label>\n            <sub> Module Permissions </sub>\n          </ion-label>\n        </ion-col>\n        <ion-col size=\"12\" *ngIf=\"modules\">\n          <div style=\"display: inline;\" *ngFor=\"let module of modules\">\n            <ion-chip>\n              <ion-label>{{ module }}</ion-label>\n              <ion-icon (click)=\"deleteModule(module)\" name=\"close\"></ion-icon>\n            </ion-chip>\n          </div>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"12\">\n          <!-- use this button to open a selector with all modules-->\n\n          <ion-button (click)=\"addModule()\" shape=\"round\">\n            <ion-select\n              [(ngModel)]=\"modules\"\n              (ionChange)=\"onChange($event)\"\n              style=\"opacity: 0; position: absolute; width: 100%;\"\n              multiple=\"true\"\n              cancelText=\"Nah\"\n              okText=\"Okay!\"\n            >\n              <ion-select-option value=\"Campaigns\"\n                >Campaigns and Promotions</ion-select-option\n              >\n              <ion-select-option value=\"Order\"\n                >Order Fulfillment\n              </ion-select-option>\n              <ion-select-option value=\"Payments\"> Payments</ion-select-option>\n              <ion-select-option value=\"Users\">Manage Users</ion-select-option>\n              <ion-select-option value=\"Activity\"\n                >User Activity</ion-select-option\n              >\n              <ion-select-option value=\"Inventory\">Inventory</ion-select-option>\n              <ion-select-option value=\"Products\"\n                >Manage Products</ion-select-option\n              >\n              <ion-select-option value=\"Reports\"\n                >Export Of Reports</ion-select-option\n              >\n            </ion-select>\n\n            <ion-label>Add Module</ion-label>\n            <ion-icon name=\"add-circle-outline\"></ion-icon>\n          </ion-button>\n        </ion-col>\n        <ion-col size=\"12\" *ngIf=\"modules\">\n          <ion-button\n            expand=\"full\"\n            shape=\"round\"\n            size=\"small\"\n            color=\"secondary\"\n            (click)=\"onSubmit()\"\n            >add user\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-slide>\n</ion-slides>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin-store/pages/users/components/admin-users/admin-users.component.html":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin-store/pages/users/components/admin-users/admin-users.component.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"no_user\">\n  <ion-grid>\n    <ion-row style=\"height: 70vh;\" class=\"center\">\n      <ion-col size=\"12\">\n        <ion-label>\n          No users\n        </ion-label>\n      </ion-col>\n      <ion-col size=\"12\">\n        <ion-button (click)=\"changeSegment('ad_user')\" shape=\"round\">Add A user <ion-icon name=\"add-circle-outline\">\n          </ion-icon>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</div>\n<div *ngIf=\"!no_user\">\n  <mat-accordion>\n    <ion-toolbar>\n      <ion-grid>\n        <ion-row>\n          <ion-col no-padding size=\"1\"> </ion-col>\n          <ion-col class=\"center\" size=\"8\">\n            <ion-label>\n              <sub> USER NAME </sub>\n            </ion-label>\n          </ion-col>\n\n          <ion-col size=\"3\">\n            <ion-label>\n              <sub> USER TYPE </sub>\n            </ion-label>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-toolbar>\n\n    <mat-expansion-panel (click)=\"expanded(user)\" *ngFor=\"let user of users; let i = index\" hideToggle>\n      <mat-expansion-panel-header [collapsedHeight]=\"'fit-content'\" style=\"padding: 0px;\">\n        <ion-item-sliding>\n          <ion-item class=\"ion-no-padding\" style=\"--inner-padding-end: 0px;\">\n            <ion-grid>\n              <ion-row>\n                <ion-col size=\"1\">\n                  <ion-chip>\n                    <ion-label>\n                      <sub>\n                        {{ i + 1 }}\n                      </sub>\n                    </ion-label>\n                  </ion-chip>\n                </ion-col>\n\n                <ion-col class=\"center\" size=\"7\">\n                  <h5 style=\"margin: 10px;\">\n                    <sub>\n                      {{ user.email }}\n                    </sub>\n                  </h5>\n                </ion-col>\n                <ion-col class=\"center\" size=\"4\">\n                  <ion-badge style=\"width: 100%;\">\n                    {{ user.role }}\n                  </ion-badge>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col size=\"1\"> </ion-col>\n                <ion-col *ngIf=\"user.user_type == 'Main Admin'\" size=\"11\">\n                  <ion-badge color=\"secondary\" style=\"width: 100%;\">\n                    <ion-label>\n                      <sub>\n                        {{ user.user_type }}\n                      </sub>\n                    </ion-label>\n                  </ion-badge>\n                </ion-col>\n                <ion-col *ngIf=\"user.user_type !== 'Main Admin'\" size=\"11\">\n                  <ion-badge color=\"light\" style=\"width: 100%;\">\n                    {{ user.user_type }}\n                  </ion-badge>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-item>\n          <ion-item-options>\n            <ion-item-option color=\"light\">\n              <ion-button *ngIf=\"!edit\" shape=\"round\" fill=\"solid\" (click)=\"editUser(user)\" size=\"small\"\n                color=\"primary\">\n                <ion-icon size=\"small\" slot=\"icon-only\" name=\"create\"></ion-icon>\n              </ion-button>\n              <ion-button *ngIf=\"edit\" [disabled]=\"updateUser.invalid\" shape=\"round\" type=\"submit\" fill=\"solid\"\n                (click)=\"update(user)\" size=\"small\" color=\"primary\">\n                <ion-icon size=\"small\" slot=\"icon-only\" name=\"save-outline\"></ion-icon>\n              </ion-button>\n            </ion-item-option>\n            <ion-item-option color=\"light\">\n              <ion-button shape=\"round\" (click)=\"onDelete(user)\" size=\"small\" color=\"danger\">\n                <ion-icon fill=\"solid\" size=\"small\" slot=\"icon-only\" name=\"trash\"></ion-icon>\n              </ion-button>\n            </ion-item-option>\n          </ion-item-options>\n        </ion-item-sliding>\n      </mat-expansion-panel-header>\n\n      <ng-template matExpansionPanelContent>\n        <form [formGroup]=\"updateUser\">\n          <ion-grid>\n            <ion-row>\n              <ion-col size=\"8\">\n                <ion-item>\n                  <ion-label position=\"floating\">\n                    <sub>Role/ Position</sub>\n                  </ion-label>\n                  <ion-input [attr.disabled]=\"!edit\" value=\"{{ user.role }}\" formControlName=\"role\" type=\"text\">\n                  </ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col size=\"4\"> </ion-col>\n              <ion-col class=\"center\" size=\"12\">\n                <ion-item style=\"width: 100%;\">\n                  <ion-label> <sub>User Type :</sub></ion-label>\n                  <ion-select [attr.disabled]=\"!edit\" value=\"{{ user.user_type }}\" formControlName=\"user_type\"\n                    interface=\"action-sheet\" style=\"display: contents;\">\n                    <ion-select-option value=\"admin\">Admin </ion-select-option>\n                    <ion-select-option value=\"user\">User</ion-select-option>\n                  </ion-select>\n                </ion-item>\n              </ion-col>\n              <ion-col size=\"12\" *ngIf=\"modules\">\n                <div style=\"display: inline;\" *ngFor=\"let module of modules\">\n                  <ion-chip>\n                    <ion-label>{{ module }}</ion-label>\n                    <ion-icon [attr.disabled]=\"!edit\" (click)=\"deleteModule(module)\" name=\"close\"></ion-icon>\n                  </ion-chip>\n                </div>\n              </ion-col>\n\n              <ion-col size=\"12\">\n                <!-- use this button to open a selector with all modules-->\n\n                <ion-button (click)=\"addModule()\" shape=\"round\">\n                  <ion-select [attr.disabled]=\"!edit\" (ionChange)=\"onChange($event)\"\n                    style=\"opacity: 0; position: absolute; width: 100%;\" multiple=\"true\" cancelText=\"Nah\"\n                    okText=\"Okay!\">\n                    <ion-select-option value=\"Campaigns\">Campaigns and Promotions</ion-select-option>\n                    <ion-select-option value=\"Order\">Order Fulfillment\n                    </ion-select-option>\n                    <ion-select-option value=\"Payments\">\n                      Payments</ion-select-option>\n                    <ion-select-option value=\"Users\">Manage Users</ion-select-option>\n                    <ion-select-option value=\"Activity\">User Activity</ion-select-option>\n                    <ion-select-option value=\"Inventory\">Inventory</ion-select-option>\n                    <ion-select-option value=\"Products\">Manage Products</ion-select-option>\n                    <ion-select-option value=\"Reports\">Export Of Reports</ion-select-option>\n                  </ion-select>\n\n                  <ion-label>Add Module</ion-label>\n                  <ion-icon name=\"add-circle-outline\"></ion-icon>\n                </ion-button>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </form>\n      </ng-template>\n    </mat-expansion-panel>\n  </mat-accordion>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin-store/pages/users/components/privileges/privileges.component.html":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin-store/pages/users/components/privileges/privileges.component.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  privileges works!\n</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin-store/pages/users/users.page.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin-store/pages/users/users.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header style=\"padding-top: 5px\" *ngIf=\"segmentChanged !== 'ad_user'\" >\n  <ion-toolbar class=\"center\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button size=\"small\" defaultHref=\"/admin-store/store/dashboard\" slot=\"icon-only\" name=\"arrow-back\">\n      </ion-back-button>\n    </ion-buttons>\n    <ion-searchbar  placeholder=\"search\" ></ion-searchbar>\n    <ion-button size=\"small\" slot=\"end\" shape=\"round\" (click)=\"changeSegment('ad_user')\" >\n      <ion-icon color=\"secondary\"slot=\"icon-only\" name=\"add\"></ion-icon>\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-fab  *ngIf=\"segmentChanged == 'ad_user'\" >\n  <ion-fab-button (click)=\"changeSegment('users')\" size=\"small\">\n    <ion-icon name=\"close-outline\"></ion-icon>\n  </ion-fab-button>\n</ion-fab>\n\n<ion-segment *ngIf=\"segmentChanged !== 'ad_user'\" value=\"promo\" fill=\"solid\" [(ngModel)]=\"segmentChanged\">\n  <ion-segment-button size=\"small\" value=\"users\">\n    <ion-label >Users</ion-label>\n  </ion-segment-button>\n  <ion-segment-button value=\"activity\">\n    <ion-label >Activity</ion-label>\n  </ion-segment-button>\n</ion-segment>\n\n<ion-content>\n  <div [ngSwitch]=\"segmentChanged\" >\n    <app-activity  *ngSwitchCase=\"'activity'\"  ></app-activity>\n    <app-admin-users [users$]=\"users\" (segment)=\"changeSegment($event)\" *ngSwitchCase=\"'users'\"></app-admin-users>\n    <app-ad-user *ngSwitchCase=\"'ad_user'\" ></app-ad-user>\n  </div>\n</ion-content>\n\n<ion-footer >\n  <ion-toolbar >\n    \n    <ion-row>\n      <ion-col class=\" center \" size=4>\n\n         \n            <ion-button size=\"small\" shape=\"round\"  fill=\"clear\" [routerLink]=\"['/admin-store/store/products']\">\n               \n                      <img style=\"max-width: 30%; display: block;\" src=\"./assets/greyUserIcon.svg\" alt=\"\">\n                <sub style=\"color: grey; left:5px\">Products</sub>\n            </ion-button> \n          \n      </ion-col>\n        <ion-col class=\" center  \" size=4>\n            <ion-fab>\n              <ion-fab-button [routerLink]=\"['/admin-store/store/dashboard']\" size=\"small\" color=\"white\">\n              <ion-icon color=\"primary\" name=\"home\"></ion-icon>\n              </ion-fab-button>\n            </ion-fab>\n\n        </ion-col>\n      <ion-col class=\" center\" size=4>\n            <ion-button size=\"small\"  fill=\"clear\" shape=\"round\" [routerLink]=\"['/admin-store/store/sales']\">\n                <img style=\"max-width: 30%; display: block;\" src=\"./assets/grey divIcons made by a href=httpswww.flaticon.comauthorssrip title=sripsripa from a href=httpswww.flaticon.com title=Flaticonwww.flaticon.comadiv  1.svg\" alt=\"\">\n         \n                   \n                <sub style=\"color: grey; left:5px\">SALES</sub>\n             </ion-button>\n      </ion-col>\n    </ion-row>\n\n  </ion-toolbar>\n</ion-footer>\n");

/***/ }),

/***/ "./src/app/modules/admin-store/pages/users/components/activity/activity.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/admin-store/pages/users/components/activity/activity.component.scss ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".read_class {\n  background-color: white;\n}\n\n.not_read {\n  background-color: #f4f5f8;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hZG1pbi1zdG9yZS9wYWdlcy91c2Vycy9jb21wb25lbnRzL2FjdGl2aXR5L0M6XFxVc2Vyc1xcTWFydmluXFxEb2N1bWVudHNcXEdpdEh1YlxcYWZyb2JcXGNsaWVudC9zcmNcXGFwcFxcbW9kdWxlc1xcYWRtaW4tc3RvcmVcXHBhZ2VzXFx1c2Vyc1xcY29tcG9uZW50c1xcYWN0aXZpdHlcXGFjdGl2aXR5LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2FkbWluLXN0b3JlL3BhZ2VzL3VzZXJzL2NvbXBvbmVudHMvYWN0aXZpdHkvYWN0aXZpdHkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBQTtBQ0NGOztBRENBO0VBQ0kseUJBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4tc3RvcmUvcGFnZXMvdXNlcnMvY29tcG9uZW50cy9hY3Rpdml0eS9hY3Rpdml0eS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZWFkX2NsYXNze1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbi5ub3RfcmVhZHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNWY4O1xufSIsIi5yZWFkX2NsYXNzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5ub3RfcmVhZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNGY1Zjg7XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/admin-store/pages/users/components/activity/activity.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/admin-store/pages/users/components/activity/activity.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: ActivityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityComponent", function() { return ActivityComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var src_app_core_modules_services_activities_activity_facade_activity_facade_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core-modules/services/activities/activity-facade/activity-facade.service */ "./src/app/core-modules/services/activities/activity-facade/activity-facade.service.ts");
/* harmony import */ var src_app_core_modules_services_profile_profile_facade_profile_facade_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core-modules/services/profile/profile-facade/profile-facade.service */ "./src/app/core-modules/services/profile/profile-facade/profile-facade.service.ts");




var ActivityComponent = /** @class */ (function () {
    function ActivityComponent(userFacade, activityFacade) {
        this.userFacade = userFacade;
        this.activityFacade = activityFacade;
    }
    ActivityComponent.prototype.ngOnInit = function () {
        var _this = this;
        //Load activities
        var store = this.userFacade.getCurrentStore();
        this.activityFacade.loadActivities(store._id);
        //get activities
        this.activities$ = this.activityFacade.getActivities$();
        //Terrrence
        this.activities$.subscribe(function (res) {
            if (res == undefined || res.length < 1) {
                _this.no_Activity = true;
            }
        }, function (err) {
            console.log(err);
        });
        this.read = "not_read";
        this.no_Activity = false;
    };
    ActivityComponent.prototype.setRead = function () {
        this.read = "read_class";
    };
    ActivityComponent.prototype.pushActivity = function () {
        //Prepare activity
        var notify = {
            type: "Activity",
            title: "admin deleted a product",
            msg: "product two from Shoes Categories",
            user_ini: "TM",
            user_name: "Terrence Mashego",
        };
        var data = { activity: notify };
        //send data
        this.activityFacade.pushActivity(data);
    };
    ActivityComponent.ctorParameters = function () { return [
        { type: src_app_core_modules_services_profile_profile_facade_profile_facade_service__WEBPACK_IMPORTED_MODULE_3__["UserFacadeService"] },
        { type: src_app_core_modules_services_activities_activity_facade_activity_facade_service__WEBPACK_IMPORTED_MODULE_2__["ActivityFacadeService"] }
    ]; };
    ActivityComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-activity",
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./activity.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin-store/pages/users/components/activity/activity.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./activity.component.scss */ "./src/app/modules/admin-store/pages/users/components/activity/activity.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_core_modules_services_profile_profile_facade_profile_facade_service__WEBPACK_IMPORTED_MODULE_3__["UserFacadeService"],
            src_app_core_modules_services_activities_activity_facade_activity_facade_service__WEBPACK_IMPORTED_MODULE_2__["ActivityFacadeService"]])
    ], ActivityComponent);
    return ActivityComponent;
}());



/***/ }),

/***/ "./src/app/modules/admin-store/pages/users/components/ad-user/ad-user.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/admin-store/pages/users/components/ad-user/ad-user.component.scss ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4tc3RvcmUvcGFnZXMvdXNlcnMvY29tcG9uZW50cy9hZC11c2VyL2FkLXVzZXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/admin-store/pages/users/components/ad-user/ad-user.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/admin-store/pages/users/components/ad-user/ad-user.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: AdUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdUserComponent", function() { return AdUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var src_app_core_modules_services_auth_auth_api_auth_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core-modules/services/auth/auth-api/auth-api.service */ "./src/app/core-modules/services/auth/auth-api/auth-api.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var src_app_core_modules_services_profile_profile_facade_profile_facade_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core-modules/services/profile/profile-facade/profile-facade.service */ "./src/app/core-modules/services/profile/profile-facade/profile-facade.service.ts");








var AdUserComponent = /** @class */ (function () {
    function AdUserComponent(formBuilder, _authService, router, toastController, userFacade) {
        this.formBuilder = formBuilder;
        this._authService = _authService;
        this.router = router;
        this.toastController = toastController;
        this.userFacade = userFacade;
    }
    AdUserComponent.prototype.ngOnInit = function () {
        //create new form-group instance
        this.slideOne = this.formBuilder.group({
            //create instances of form-control
            email: [
                "",
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$"),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                ]),
            ],
            user_type: [""],
            role: [""],
        });
    };
    AdUserComponent.prototype.onChange = function (event) {
        this.modules = event.detail.value;
    };
    AdUserComponent.prototype.deleteModule = function (data) {
        var modules = this.modules.filter(function (module) {
            return module !== data;
        });
        this.modules = modules;
    };
    AdUserComponent.prototype.onSubmit = function () {
        var _this = this;
        var store = this.userFacade.getCurrentStore();
        var data = {
            email: this.slideOne.value.email,
            user_type: this.slideOne.value.user_type,
            role: this.slideOne.value.role,
            module_access: this.modules,
            password: "XR@Z147",
            store_id: store._id,
        };
        //subscribe to api ox2
        this._authService.adminRegister(data).subscribe(function (res) {
            if (res.store) {
                _this.userFacade.setCurrentStore(res.store);
                _this.userFacade.loadUser();
                _this.router.navigate(["/admin-store/store"]);
            }
            _this.presentToast(res.msg);
        }, function (err) {
            console.log(err.err);
            _this.presentToast(err.msg);
        });
    };
    AdUserComponent.prototype.next = function () {
        this.slides.slideNext();
    };
    AdUserComponent.prototype.presentToast = function (data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var toast;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: data,
                            duration: 2000,
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
    AdUserComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: src_app_core_modules_services_auth_auth_api_auth_api_service__WEBPACK_IMPORTED_MODULE_4__["AuthApiService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
        { type: src_app_core_modules_services_profile_profile_facade_profile_facade_service__WEBPACK_IMPORTED_MODULE_6__["UserFacadeService"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("userSlides"),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonSlides"])
    ], AdUserComponent.prototype, "slides", void 0);
    AdUserComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-ad-user",
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./ad-user.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin-store/pages/users/components/ad-user/ad-user.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./ad-user.component.scss */ "./src/app/modules/admin-store/pages/users/components/ad-user/ad-user.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            src_app_core_modules_services_auth_auth_api_auth_api_service__WEBPACK_IMPORTED_MODULE_4__["AuthApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"],
            src_app_core_modules_services_profile_profile_facade_profile_facade_service__WEBPACK_IMPORTED_MODULE_6__["UserFacadeService"]])
    ], AdUserComponent);
    return AdUserComponent;
}());



/***/ }),

/***/ "./src/app/modules/admin-store/pages/users/components/admin-users/admin-users.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/admin-store/pages/users/components/admin-users/admin-users.component.scss ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep div .mat-expansion-panel-content {\n  padding: 24px 5px 16px 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hZG1pbi1zdG9yZS9wYWdlcy91c2Vycy9jb21wb25lbnRzL2FkbWluLXVzZXJzL0M6XFxVc2Vyc1xcTWFydmluXFxEb2N1bWVudHNcXEdpdEh1YlxcYWZyb2JcXGNsaWVudC9zcmNcXGFwcFxcbW9kdWxlc1xcYWRtaW4tc3RvcmVcXHBhZ2VzXFx1c2Vyc1xcY29tcG9uZW50c1xcYWRtaW4tdXNlcnNcXGFkbWluLXVzZXJzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2FkbWluLXN0b3JlL3BhZ2VzL3VzZXJzL2NvbXBvbmVudHMvYWRtaW4tdXNlcnMvYWRtaW4tdXNlcnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwyQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9hZG1pbi1zdG9yZS9wYWdlcy91c2Vycy9jb21wb25lbnRzL2FkbWluLXVzZXJzL2FkbWluLXVzZXJzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIGRpdiAubWF0LWV4cGFuc2lvbi1wYW5lbC1jb250ZW50IHtcbiAgICBwYWRkaW5nOiAyNHB4IDVweCAxNnB4IDI0cHg7fVxuIiwiOjpuZy1kZWVwIGRpdiAubWF0LWV4cGFuc2lvbi1wYW5lbC1jb250ZW50IHtcbiAgcGFkZGluZzogMjRweCA1cHggMTZweCAyNHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/admin-store/pages/users/components/admin-users/admin-users.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/admin-store/pages/users/components/admin-users/admin-users.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: AdminUsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminUsersComponent", function() { return AdminUsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var src_app_core_modules_services_profile_profile_facade_profile_facade_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core-modules/services/profile/profile-facade/profile-facade.service */ "./src/app/core-modules/services/profile/profile-facade/profile-facade.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");





var AdminUsersComponent = /** @class */ (function () {
    function AdminUsersComponent(userFacade, formBuilder, toastController) {
        this.userFacade = userFacade;
        this.formBuilder = formBuilder;
        this.toastController = toastController;
        this.segment = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    AdminUsersComponent.prototype.ngOnChanges = function () {
        this.users = this.users$;
    };
    AdminUsersComponent.prototype.ngOnInit = function () {
        this.no_user = false;
        // this.users = this.userFacade.getCurrentStore().users;
        //initiATE FORM
        this.updateUser = this.formBuilder.group({
            //create instances of form-control
            email: [""],
            user_type: [""],
            role: [""],
        });
    };
    AdminUsersComponent.prototype.expanded = function (v) {
        var user = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, v);
        if (this.email == user.email) {
            return null;
        }
        else {
            this.email = user.email;
            this.modules = user.module_access;
            this.updateUser.patchValue({
                email: user.email,
                user_type: user.user_type,
                role: user.role,
            });
        }
        console.log(this.modules);
    };
    AdminUsersComponent.prototype.onChange = function (event) {
        this.modules = event.detail.value;
    };
    AdminUsersComponent.prototype.deleteModule = function (data) {
        var modules = this.modules.filter(function (module) {
            return module !== data;
        });
        this.modules = modules;
    };
    AdminUsersComponent.prototype.editUser = function (admin) {
        //this.clickButton = true;
        if (admin.user_type == "Main") {
            this.presentToast("You cannot modify main user");
            this.edit = false;
        }
        else {
            this.edit = true;
        }
    };
    AdminUsersComponent.prototype.update = function (admin) {
        var store = this.userFacade.getCurrentStore();
        this.edit = false;
        var user = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.updateUser.value), { module_access: this.modules });
        //update current and database
        var other_users = this.users.filter(function (fs) {
            return fs.email !== user.email;
        });
        var users = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(other_users, [user]); //update on index
        this.users = users;
        //update database
        var data = {
            store_id: store._id,
            users: users
        };
        this.userFacade.updateAdmin(data);
    };
    AdminUsersComponent.prototype.onDelete = function (admin) {
        //remove from state
        var data = this.users.filter(function (user) {
            return user !== admin;
        });
        if (admin.user_type == "Main") {
            this.presentToast("You cannot delete main user");
        }
        else {
            this.users = data;
            //this.userFacade.store;
            this.userFacade.removeAdmin(admin);
        }
    };
    AdminUsersComponent.prototype.changeSegment = function (data) {
        this.segment.emit(data);
        console.log(data);
    };
    AdminUsersComponent.prototype.presentToast = function (data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var toast;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: data,
                            duration: 2000,
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
    AdminUsersComponent.ctorParameters = function () { return [
        { type: src_app_core_modules_services_profile_profile_facade_profile_facade_service__WEBPACK_IMPORTED_MODULE_2__["UserFacadeService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], AdminUsersComponent.prototype, "segment", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], AdminUsersComponent.prototype, "users$", void 0);
    AdminUsersComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-admin-users",
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./admin-users.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin-store/pages/users/components/admin-users/admin-users.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./admin-users.component.scss */ "./src/app/modules/admin-store/pages/users/components/admin-users/admin-users.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_core_modules_services_profile_profile_facade_profile_facade_service__WEBPACK_IMPORTED_MODULE_2__["UserFacadeService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]])
    ], AdminUsersComponent);
    return AdminUsersComponent;
}());



/***/ }),

/***/ "./src/app/modules/admin-store/pages/users/components/privileges/privileges.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/admin-store/pages/users/components/privileges/privileges.component.scss ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4tc3RvcmUvcGFnZXMvdXNlcnMvY29tcG9uZW50cy9wcml2aWxlZ2VzL3ByaXZpbGVnZXMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/admin-store/pages/users/components/privileges/privileges.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/admin-store/pages/users/components/privileges/privileges.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: PrivilegesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivilegesComponent", function() { return PrivilegesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var PrivilegesComponent = /** @class */ (function () {
    function PrivilegesComponent() {
    }
    PrivilegesComponent.prototype.ngOnInit = function () { };
    PrivilegesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-privileges',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./privileges.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin-store/pages/users/components/privileges/privileges.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./privileges.component.scss */ "./src/app/modules/admin-store/pages/users/components/privileges/privileges.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], PrivilegesComponent);
    return PrivilegesComponent;
}());



/***/ }),

/***/ "./src/app/modules/admin-store/pages/users/components/users-component.module.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/admin-store/pages/users/components/users-component.module.ts ***!
  \**************************************************************************************/
/*! exports provided: UsersComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponentModule", function() { return UsersComponentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _activity_activity_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./activity/activity.component */ "./src/app/modules/admin-store/pages/users/components/activity/activity.component.ts");
/* harmony import */ var _admin_users_admin_users_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin-users/admin-users.component */ "./src/app/modules/admin-store/pages/users/components/admin-users/admin-users.component.ts");
/* harmony import */ var _privileges_privileges_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./privileges/privileges.component */ "./src/app/modules/admin-store/pages/users/components/privileges/privileges.component.ts");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/expansion.es5.js");
/* harmony import */ var _ad_user_ad_user_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ad-user/ad-user.component */ "./src/app/modules/admin-store/pages/users/components/ad-user/ad-user.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");












var UsersComponentModule = /** @class */ (function () {
    function UsersComponentModule() {
    }
    UsersComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _activity_activity_component__WEBPACK_IMPORTED_MODULE_3__["ActivityComponent"],
                _admin_users_admin_users_component__WEBPACK_IMPORTED_MODULE_4__["AdminUsersComponent"],
                _privileges_privileges_component__WEBPACK_IMPORTED_MODULE_5__["PrivilegesComponent"],
                _ad_user_ad_user_component__WEBPACK_IMPORTED_MODULE_7__["AdUserComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonicModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__["MatExpansionModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            ],
            exports: [
                _activity_activity_component__WEBPACK_IMPORTED_MODULE_3__["ActivityComponent"],
                _admin_users_admin_users_component__WEBPACK_IMPORTED_MODULE_4__["AdminUsersComponent"],
                _privileges_privileges_component__WEBPACK_IMPORTED_MODULE_5__["PrivilegesComponent"],
                _ad_user_ad_user_component__WEBPACK_IMPORTED_MODULE_7__["AdUserComponent"],
            ],
        })
    ], UsersComponentModule);
    return UsersComponentModule;
}());



/***/ }),

/***/ "./src/app/modules/admin-store/pages/users/users-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/modules/admin-store/pages/users/users-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: UsersPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersPageRoutingModule", function() { return UsersPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _users_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./users.page */ "./src/app/modules/admin-store/pages/users/users.page.ts");




var routes = [
    {
        path: '',
        component: _users_page__WEBPACK_IMPORTED_MODULE_3__["UsersPage"]
    },
    {
        path: 'user-addition',
        loadChildren: function () { return __webpack_require__.e(/*! import() | user-addition-user-addition-module */ "user-addition-user-addition-module").then(__webpack_require__.bind(null, /*! ./user-addition/user-addition.module */ "./src/app/modules/admin-store/pages/users/user-addition/user-addition.module.ts")).then(function (m) { return m.UserAdditionPageModule; }); }
    }
];
var UsersPageRoutingModule = /** @class */ (function () {
    function UsersPageRoutingModule() {
    }
    UsersPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], UsersPageRoutingModule);
    return UsersPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/admin-store/pages/users/users.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/admin-store/pages/users/users.module.ts ***!
  \*****************************************************************/
/*! exports provided: UsersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersPageModule", function() { return UsersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/expansion.es5.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _components_users_component_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/users-component.module */ "./src/app/modules/admin-store/pages/users/components/users-component.module.ts");
/* harmony import */ var _users_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./users-routing.module */ "./src/app/modules/admin-store/pages/users/users-routing.module.ts");
/* harmony import */ var _users_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./users.page */ "./src/app/modules/admin-store/pages/users/users.page.ts");









var UsersPageModule = /** @class */ (function () {
    function UsersPageModule() {
    }
    UsersPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _components_users_component_module__WEBPACK_IMPORTED_MODULE_6__["UsersComponentModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatExpansionModule"],
                _users_routing_module__WEBPACK_IMPORTED_MODULE_7__["UsersPageRoutingModule"]
            ],
            declarations: [_users_page__WEBPACK_IMPORTED_MODULE_8__["UsersPage"],]
        })
    ], UsersPageModule);
    return UsersPageModule;
}());



/***/ }),

/***/ "./src/app/modules/admin-store/pages/users/users.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/modules/admin-store/pages/users/users.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4tc3RvcmUvcGFnZXMvdXNlcnMvdXNlcnMucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/admin-store/pages/users/users.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/admin-store/pages/users/users.page.ts ***!
  \***************************************************************/
/*! exports provided: UsersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersPage", function() { return UsersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var src_app_core_modules_services_profile_profile_facade_profile_facade_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core-modules/services/profile/profile-facade/profile-facade.service */ "./src/app/core-modules/services/profile/profile-facade/profile-facade.service.ts");




var UsersPage = /** @class */ (function () {
    function UsersPage(userFacade, toastController) {
        this.userFacade = userFacade;
        this.toastController = toastController;
        this.segmentChanged = "users";
    }
    UsersPage.prototype.ngOnInit = function () {
        this.getUsers();
    };
    UsersPage.prototype.getUsers = function () {
        var _this = this;
        //get current store
        var store = this.userFacade.getCurrentStore();
        //load store profile and subscribe store products
        if (Object.keys(store).length === 0) {
            this.userFacade.getUser$().subscribe(
            //load default store
            function (res) {
                _this.userFacade.loadStoreProfile(res.store_id);
                var default_store = _this.userFacade.getCurrentStore();
                _this.users = default_store.users;
            }, function (err) {
                console.log(err);
            });
        }
        else {
            this.userFacade.loadStoreProfile(store._id);
            var default_store = this.userFacade.getCurrentStore();
            this.users = default_store.users;
        }
    };
    UsersPage.prototype.changeSegment = function (data) {
        var _this = this;
        var store = this.userFacade.getCurrentStore();
        var store_users = store.users.length;
        var lisences = store.lisence;
        var today_ms = Date.now();
        var one_day_ms = 86400000;
        var allow_access = false;
        lisences.forEach(function (lisence) {
            var lisence_end_date = lisence.payed_amount.end_date;
            var time_remaining = (lisence_end_date - today_ms) / one_day_ms;
            if (store_users < lisence.number_of_users && time_remaining > 0) {
                allow_access = true;
            }
            if (allow_access) {
                _this.segmentChanged = data;
            }
        });
        if (!allow_access) {
            this.presentToast("Buy license to add more users");
        }
    };
    UsersPage.prototype.presentToast = function (msg) {
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
    UsersPage.ctorParameters = function () { return [
        { type: src_app_core_modules_services_profile_profile_facade_profile_facade_service__WEBPACK_IMPORTED_MODULE_3__["UserFacadeService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] }
    ]; };
    UsersPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-users',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./users.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin-store/pages/users/users.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./users.page.scss */ "./src/app/modules/admin-store/pages/users/users.page.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_core_modules_services_profile_profile_facade_profile_facade_service__WEBPACK_IMPORTED_MODULE_3__["UserFacadeService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]])
    ], UsersPage);
    return UsersPage;
}());



/***/ })

}]);
//# sourceMappingURL=src-app-modules-admin-store-pages-users-users-module.js.map