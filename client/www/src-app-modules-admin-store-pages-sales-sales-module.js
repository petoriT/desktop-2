(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-modules-admin-store-pages-sales-sales-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin-store/pages/sales/components/modals/addpromo/addpromo.component.html":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin-store/pages/sales/components/modals/addpromo/addpromo.component.html ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<ion-header>\n  <ion-button (click)=dismiss()>dismiss</ion-button>\n</ion-header>\n<ion-content scroll-y=\"true\">\n  <ion-card fill=\"outline\">\n    <ion-card-header>\n      <ion-title>Add Promo</ion-title>\n    </ion-card-header>\n\n    <ion-card-content >\n        <form [formGroup]=\"addPromo\" (ngSubmit)=\"onSubmit()\">\n          <ion-grid>\n\n            <ion-row>\n\n              <ion-col size=3>\n                <ion-button shape=\"round\"  (click)=\"addProduct()\" color=\"primary\" size=\"small\" >Add</ion-button>\n              </ion-col>\n              <ion-col size=9>\n                <div  formArrayName=\"products\">\n                  <div  *ngFor=\"let product of productFormGroup.controls; let i = index;\">\n                      <div [formGroupName]=\"i\" >\n                        <div>\n                              <ion-row>\n                              <ion-col size=8>\n                              <ion-select value=\"selectValue\" okText=\"Okay\" cancelText=\"Dismiss\">\n                                <ion-label position=\"floating\" >Product</ion-label>\n                                <ion-select-option value=\"selectValue\">Select Prooduct</ion-select-option>\n                                <ion-item no-padding  *ngFor=\"let product of products\" >\n                                  <ion-select-option  formControlName=\"product_Id\" value=\"{{ product._id }}\">{{product.productName}}</ion-select-option>\n                                </ion-item>\n                              </ion-select>\n                              </ion-col>\n\n                              <ion-col size=4>\n                                <ion-item>\n                                  <ion-label position=\"floating\">Quota</ion-label>\n                                  <ion-input formControlName=\"quota\" type=\"Number\" name=\"quota\"></ion-input>\n                                </ion-item>\n                              </ion-col>\n                              </ion-row>\n\n                        </div>\n                        <div>\n                            <ion-button color=\"success\" type=\"button\" (click)=\"removeProduct(i)\"> Remove </ion-button>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n              </ion-col>\n            </ion-row>\n\n\n            <ion-row no-padding>\n              <ion-toolbar>\n                <ion-segment formControlName=\"runSale\" value=\"runSale\">\n                  <ion-segment-button value=\"runSale\">\n                    <ion-label>RunSale</ion-label>\n                  </ion-segment-button>\n                  <ion-segment-button value=\"voucher\">\n                    <ion-label>Create Voucher</ion-label>\n                  </ion-segment-button>\n                </ion-segment>\n              </ion-toolbar>\n            </ion-row>\n            <ion-row no-padding>\n              <ion-grid>\n                <ion-row>\n                  <ion-col size=12>\n                    <ion-item>\n                      <ion-label position=\"floating\">Choose Promo Type</ion-label>\n                      <ion-select formControlName=\"type\" placeholder=\"Select One\">\n                        <ion-select-option value=\"buy1get1free\">Buy 1 Get 1 Free</ion-select-option>\n                        <ion-select-option value=\"volumeDiscount\">Volume Discount</ion-select-option>\n                        <ion-select-option value=\"itemDisscount\">Item Discount</ion-select-option>\n                        <ion-select-option value=\"comboDeal\">Combo deals</ion-select-option>\n\n                      </ion-select>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n                <ion-row no-padding>\n                  <ion-col size=12>\n                    <ion-item>\n                      <ion-label position=\"floating\">Title</ion-label>\n                      <ion-input formControlName=\"title\" type=\"text\" name=\"Title\"></ion-input>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n                <ion-row no-padding>\n                  <ion-col size=6>\n                    <ion-item>\n                      <ion-label position=\"floating\">Discount</ion-label>\n                      <ion-input formControlName=\"discount\" type=\"number\" name=\"Discount\"></ion-input>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col size=6>\n                    <ion-item>\n                      <ion-label position=\"floating\">Exp Date</ion-label>\n                      <ion-input formControlName=\"date\" type=\"date\" name=\"ExpDate\"></ion-input>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col size=6>\n                    <ion-item>\n                        <ion-label position=\"floating\" >Active Platform</ion-label>\n                          <ion-select formControlName=\"platform\" multiple=\"true\"value=\"Facebook\" okText=\"Okay\" cancelText=\"Dismiss\">\n                          <ion-select-option value=\"Facebook\">Facebook</ion-select-option>\n                          <ion-select-option value=\"GoogleADS\">GoogleADS</ion-select-option>\n                          <ion-select-option value=\"Twitter\">Twiter</ion-select-option>\n                          <ion-select-option value=\"Instagram\">Instagram</ion-select-option>\n                          <ion-select-option value=\"Youtube\">Youtube</ion-select-option>\n                        </ion-select>\n                      </ion-item>\n                  </ion-col >\n                  <ion-col size=6>\n                    <ion-item>\n                      <ion-label position=\"floating\">Items Exceeding</ion-label>\n                      <ion-input formControlName=\"items_exceeding\" type=\"Number\" name=\"items_exceeding\"></ion-input>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n                <ion-card>\n                  <ion-card-content>\n                    <ion-grid>\n                      <ion-row>\n                        <ion-col size=6>\n                          <ion-label>\n                            Products\n                          </ion-label>\n                        </ion-col>\n                        <ion-col size=6>\n                          <ion-item>\n                            <ion-label position=\"floating\">Total Quota</ion-label>\n                            <ion-input disabled formControlName=\"total_quota\" type=\"Number\" name=\"total_quota\"></ion-input>\n                          </ion-item>\n                        </ion-col>\n                      </ion-row>\n                    </ion-grid>\n                  </ion-card-content>\n                </ion-card>\n              </ion-grid>\n            </ion-row>\n          </ion-grid>\n        </form>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin-store/pages/sales/components/orders/deliver/deliver.component.html":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin-store/pages/sales/components/orders/deliver/deliver.component.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-slides\n  style=\"height: 90vh;\"\n  pager=\"true\"\n  [options]=\"slideOpts\"\n  #deliverSlider\n>\n  <ion-slide>\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-text>\n            <ion-row>\n              <ion-col size=\"12\">\n                <!-- use [src] angular method to manage assets -->\n                <ion-img src=\"assets/AdminSalesdeliverSlideOne.svg\"></ion-img>\n              </ion-col>\n              <ion-col size=\"12\">\n                <h3>\n                  <b>H</b>ow will You <br />\n                  <b>D</b>eliver\n                </h3>\n              </ion-col>\n            </ion-row>\n          </ion-text>\n        </ion-col>\n        <ion-col size=\"12\">\n          <ion-segment\n            value=\"Self_delivery\"\n            (ionChange)=\"segmentChanged($event)\"\n          >\n            <!-- The SwipeNext function swipes the slide on select and shows promo type badge on top -->\n            <ion-segment-button (click)=\"swipeNextSelf()\" value=\"Self_delivery\">\n              <ion-label>Self Delivery</ion-label>\n            </ion-segment-button>\n            <ion-segment-button (click)=\"swipeNextCour()\" value=\"third_party\">\n              <ion-label>Using Courier</ion-label>\n            </ion-segment-button>\n          </ion-segment>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-slide>\n\n  <!-- slide one ends here -->\n  <!-- slide two starts from below-->\n\n  <ion-slide>\n    <div *ngIf=\"self_delivery\">\n      <form>\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"12\">\n              <ion-img src=\"assets/AdminSalesdeliverSlideOne.svg\"></ion-img>\n            </ion-col>\n\n            <ion-col size=\"12\">\n              <ion-item>\n                <ion-label position=\"stacked\">Add delivery Date</ion-label>\n\n                <ion-datetime\n                  style=\"font-size: 12px;\"\n                  displayFormat=\"DD/MM/YYYY\"\n                  value=\"{{ today | date: 'DDDD MMM D,YYYY' }}\"\n                  (ionChange)=\"deliveryDate($event)\"\n                ></ion-datetime>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"12\">\n              <ion-button (click)=\"updateDelivery('self_delivery')\"\n                >Complete</ion-button\n              >\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </form>\n    </div>\n\n    <div *ngIf=\"!self_delivery\">\n      <form [formGroup]=\"courier_delivery_form\">\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"12\">\n              <ion-img\n                style=\"height: 15vh;\"\n                src=\"assets/adminSalesDeliverSlideTwo.svg\"\n              ></ion-img>\n            </ion-col>\n\n            <ion-col size=\"12\">\n              <ion-item>\n                <ion-label position=\"floating\"> Courier Name</ion-label>\n                <ion-input\n                  formControlName=\"courier_name\"\n                  clearOnEdit=\"true\"\n                ></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"12\">\n              <ion-item>\n                <ion-label position=\"floating\"\n                  >Tracking Key/reference\n                </ion-label>\n                <ion-input\n                  formControlName=\"courier_ref\"\n                  clearOnEdit=\"true\"\n                ></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"12\">\n              <ion-item>\n                <ion-label position=\"floating\">Delivery date </ion-label>\n                <ion-datetime\n                  style=\"font-size: 12px;\"\n                  displayFormat=\"DD/MM/YYYY\"\n                  value=\"{{ today | date: 'DDDD MMM D,YYYY' }}\"\n                  (ionChange)=\"deliveryDate($event)\"\n                ></ion-datetime>\n              </ion-item>\n            </ion-col>\n\n            <ion-col size=\"12\">\n              <ion-button (click)=\"updateDelivery('courier_delivery')\"\n                >Complete</ion-button\n              >\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </form>\n    </div>\n  </ion-slide>\n\n  <!--slide three starts  here\n\n      <ion-slide>\n\n\n\n        <form [formGroup]=\"slideThree\">\n          <ion-grid>\n              <ion-row>\n                  <ion-col size=12>\n\n                      <ion-img style=\"height: 7em;\" src=\"..\\..\\..\\..\\..\\assets\\adminSalesRunPromoAddPromoSlide3.svg\"></ion-img>\n                  </ion-col>\n                  <ion-col size=12>\n                      <ion-item>\n                          <ion-label position=\"floating\">Promo Type</ion-label>\n                          <ion-select (ionChange)=\"promo_typeOnChange($event)\" formControlName=\"type\" [interfaceOptions]=\"customActionSheetOptions\" interface=\"action-sheet\" placeholder=\"Select One\">\n                            <ion-select-option value=\"buy1get1free\">Buy One Get One Free</ion-select-option> <!--  this make available secondary Product field and auto add the primary product to the secondary -->\n  <!--on selecting the below show %discoun\n                            <ion-select-option value=\"combo\">Combo Discount</ion-select-option> <!-- on selecting Combo make available secondary Product fie                            <ion-select-option value=\"itemDiscount\">Item Discount</ion-select-option>\n                          </ion-select>\n                      </ion-item>\n                  </ion-col>\n              </ion-row>\n\n                <ion-row>\n                  <ion-col size=12>\n                      <ion-item>\n                          <ion-label>Active Platform</ion-label>\n                          <ion-select formControlName=\"platform\" multiple=\"true\" cancelText=\"Nah\" okText=\"Okay!\">\n\n                            <ion-select-option value=\"Facebook\">Facebook</ion-select-option>\n                            <ion-select-option value=\"twitter\">Twitter</ion-select-option>\n                            <ion-select-option value=\"insta\">instagram</ion-select-option>\n\n                          </ion-select>\n                        </ion-item>\n                  </ion-col>\n              </ion-row>\n          </ion-grid>\n        </form>\n      </ion-slide>\n      4th slide start here -->\n\n  <!--\n      <ion-slide>\n\n        <ion-fab  vertical=\"top\" horizontal=\"start\" slot=\"fixed\">\n          <ion-chip>\n            <ion-label>{{promo_type}}</ion-label>\n          </ion-chip>\n        </ion-fab>\n\n\n\n        <ion-grid>\n          <form [formGroup]=\"slideFour\">\n          <ion-row>\n            <ion-col size=12>\n              <ion-img style=\"height: 7em;\" src=\"..\\..\\..\\..\\..\\assets\\adminSalesRunPromoAddPromoSlide4.svg\"></ion-img>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"12\">\n\n                <ion-button size=\"small\" expand=\"block\" (click)=\"addProduct()\"> <ion-icon name=\"add-circle\"></ion-icon></ion-button>\n\n            </ion-col>\n          </ion-row>\n\n          <div  formArrayName=\"products\">\n            <div  *ngFor=\"let product of productFormGroup.controls; let i = index;\">\n                <div [formGroupName]=\"i\" >\n                    <ion-row>\n                      <ion-item class=\"primary_Product\">\n                        <ion-col size=8>\n                          <ion-item>\n                            <ion-label position=\"floating\">Products</ion-label>\n                            <ion-select formControlName=\"p_id\"  (ionChange)=\"changeSecProduct($event)\" [interfaceOptions]=\"customPopoverOptions\" interface=\"popover\" placeholder=\"Select One\">\n                              <ion-item no-padding  *ngFor=\"let product of products\" >\n                                <ion-select-option value=\"{{ product._id }}\">{{product.productName}}</ion-select-option>\n                              </ion-item>\n                            </ion-select>\n                          </ion-item>\n                        </ion-col>\n\n\n\n                        <ion-col size=4>\n                          <ion-item>\n                            <ion-label position=\"floating\">Quota</ion-label>\n                            <ion-input formControlName=\"p_quota\" type=\"number\"></ion-input>\n                        </ion-item>\n                        </ion-col>\n                      </ion-item>\n\n                    </ion-row>\n\n                    <ion-row *ngIf=\"buy1get1free\">\n                        <ion-col size=6>\n                            <ion-item *ngIf=\"discount\" >\n                                <ion-label   position=\"floating\">Discount</ion-label>\n                                <ion-input formControlName=\"discount\" clearOnEdit=\"true\" type=\"number\"></ion-input>\n                            </ion-item>\n                        </ion-col>\n                        <ion-col size=6>\n                            <ion-item  *ngIf=\"item_limit\" >\n                                <ion-label position=\"floating\">Item limit</ion-label>\n                                <ion-input formControlName=\"items_exceeding\" clearOnEdit=\"true\" type=\"number\"><ion-button>More</ion-button></ion-input>\n                            </ion-item>\n                        </ion-col>\n                      </ion-row>\n\n                    <ion-row>\n                      <ion-item class=\"secondary_Product\" *ngIf=\"secondary_Product\">\n                        <ion-col size=12>\n                          <ion-item>\n                            <ion-label position=\"floating\">Products</ion-label>\n                            <ion-select formControlName=\"s_id\" [interfaceOptions]=\"customPopoverOptions\" interface=\"popover\" placeholder=\"Select One\">\n                              <ion-item no-padding  *ngFor=\"let product of products\" >\n                                <ion-select-option  value=\"{{ product._id }}\">{{product.productName}}</ion-select-option>\n                              </ion-item>\n                            </ion-select>\n                          </ion-item>\n                        </ion-col>\n\n                      </ion-item>\n                    </ion-row>\n                    <div>\n                        <ion-button size=\"small\" color=\"danger\" type=\"button\" (click)=\"removeProduct(i)\"><ion-icon name=\"trash\"></ion-icon></ion-button>\n                    </div>\n        </div>\n      </div>\n    </div>\n  </form>\n          <ion-row>\n            <ion-col>\n                <ion-button expand=\"block\" (click)=\"createPromo()\">submit</ion-button>\n            </ion-col>\n          </ion-row>\n\n        </ion-grid>\n\n      </ion-slide>\n</ion-slides>-->\n</ion-slides>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin-store/pages/sales/components/orders/orders.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin-store/pages/sales/components/orders/orders.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"no_order\">\n  <ion-grid>\n    <ion-row style=\"height: 70vh\" class=\"center\">\n      <ion-col size=\"12\">\n        <ion-label> No Orders </ion-label>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</div>\n\n<mat-accordion *ngIf=\"!no_order\">\n  <ion-toolbar>\n    <ion-grid>\n      <ion-row>\n        <ion-col class=\"property_badge\" size=\"5\"> </ion-col>\n        <ion-col class=\"property_badge\" size=\"1\">\n          <ion-label>\n            <sub> No Items </sub>\n          </ion-label>\n        </ion-col>\n        <ion-col class=\"property_badge\" size=\"3\">\n          <ion-label>\n            <sub> Amount </sub>\n          </ion-label>\n        </ion-col>\n        <ion-col class=\"property_badge\" size=\"3\">\n          <ion-label>\n            <sub> Date </sub>\n          </ion-label>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n  <div *ngFor=\"let order of orderList$ | async; let i = index\">\n    <mat-expansion-panel\n      [disabled]=\"clickButton\"\n      (click)=\"openOrder(order._id)\"\n      (opened)=\"panelOpenState = true\"\n      (closed)=\"panelOpenState = false\"\n      class=\"{{ order.order_number }}\"\n      hideToggle\n    >\n      <mat-expansion-panel-header\n        *ngIf=\"!order.delivery_ready\"\n        [collapsedHeight]=\"'20vh'\"\n      >\n        <ion-grid>\n          <ion-row>\n            <ion-col class=\"property_badge\" size=\"5\">\n              <ion-label>{{ order.order_number }}</ion-label>\n            </ion-col>\n            <ion-col class=\"property_badge\" size=\"1\">\n              <ion-label>\n                {{ order.items.length }}\n              </ion-label>\n            </ion-col>\n            <ion-col class=\"property_badge\" size=\"3\">\n              <ion-label>\n                {{ order.items.length }}\n              </ion-label>\n            </ion-col>\n\n            <ion-col class=\"property_badge\" size=\"3\">\n              <ion-label\n                *ngIf=\"order.commit_date == null && !checkId(order._id)\"\n              >\n                {{ order.date | date: \"dd MMM\" }}\n              </ion-label>\n\n              <form [formGroup]=\"date_form\">\n                <ion-item\n                  (click)=\"onCommit()\"\n                  class=\"ion-no-padding\"\n                  style=\"--inner-padding-end: 0px\"\n                  *ngIf=\"checkId(order._id) && !order.commit_date\"\n                >\n                  <!--<ion-label class=\"center\" style=\"left:10%\"><sub>Commit</sub></ion-label>-->\n                  <ion-datetime\n                    formControlName=\"date\"\n                    style=\"font-size: 12px\"\n                    placeholder=\"Commit\"\n                    #myPicker\n                    displayFormat=\"DD/MM/YYYY\"\n                    (ionChange)=\"\n                      commit(order._id, order.order_number, myPicker.value)\n                    \"\n                  ></ion-datetime>\n                </ion-item>\n              </form>\n\n              <ion-label *ngIf=\"order.commit_date && !checkId(order._id)\">\n                <ion-badge\n                  color=\"danger\"\n                  *ngIf=\"countDown(order.commit_date) < 0\"\n                >\n                  Overdue\n                </ion-badge>\n                <ion-badge\n                  color=\"warning\"\n                  *ngIf=\"\n                    countDown(order.commit_date) > 0 &&\n                    !checkProductReady(order._id)\n                  \"\n                  >{{ countDown(order.commit_date) }}</ion-badge\n                >\n                <ion-badge\n                  color=\"success\"\n                  *ngIf=\"\n                    countDown(order.commit_date) > 0 &&\n                    checkProductReady(order._id)\n                  \"\n                  >{{ countDown(order.commit_date) }}</ion-badge\n                >\n              </ion-label>\n              <ion-button\n                (click)=\"deliver(order)\"\n                color=\"success\"\n                *ngIf=\"\n                  checkProductReady(order._id) &&\n                  checkId(order._id) &&\n                  order.commit_date\n                \"\n              >\n                <ion-icon size=\"large\" src=\"assets/delivery.svg\"></ion-icon>\n              </ion-button>\n            </ion-col>\n          </ion-row>\n          <ion-row *ngIf=\"!checkId(order._id)\">\n            <ion-col class=\"center\" size=\"12\">\n              <div\n                style=\"float: left; margin: 5px\"\n                *ngFor=\"let item of order.items; let i = index\"\n              >\n                <div *ngFor=\"let image of item.productImage; let i = index\">\n                  <ion-avatar *ngIf=\"i == 0\">\n                    <img src=\"{{ image.url }}\" />\n                  </ion-avatar>\n                </div>\n              </div>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </mat-expansion-panel-header>\n\n      <ng-template matExpansionPanelContent>\n        <ion-item\n          class=\"ion-no-padding\"\n          style=\"--inner-padding-end: 0px\"\n          *ngFor=\"let item of order.items; let i = index\"\n        >\n          <ion-grid>\n            <ion-row>\n              <ion-col size=\"2\">\n                <div *ngFor=\"let image of item.productImage; let i = index\">\n                  <ion-avatar *ngIf=\"i == 0\">\n                    <img src=\"{{ image.url }}\" />\n                  </ion-avatar>\n                </div>\n              </ion-col>\n\n              <ion-col class=\"center\" size=\"4\">\n                <ion-label>\n                  <sub>\n                    {{ item.productName }}\n                  </sub>\n                </ion-label>\n              </ion-col>\n              <ion-col class=\"property_badge center\" size=\"1\">\n                <ion-label>\n                  {{ item.amount }}\n                </ion-label>\n              </ion-col>\n              <ion-col class=\"property_badge center\" size=\"2\">\n                <ion-label>\n                  {{ item.productPrice }}\n                </ion-label>\n              </ion-col>\n              <ion-col class=\"center\" size=\"3\">\n                <ion-button\n                  (click)=\"\n                    showBasicPicker(\n                      item,\n                      order._id,\n                      order.order_number,\n                      order.commit_date\n                    )\n                  \"\n                  >{{ item.order_status }}</ion-button\n                >\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-item>\n      </ng-template>\n    </mat-expansion-panel>\n  </div>\n</mat-accordion>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin-store/pages/sales/components/payments/payments.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin-store/pages/sales/components/payments/payments.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"no_order\">\n  <ion-grid>\n    <ion-row style=\"height: 70vh\" class=\"center\">\n      <ion-col size=\"12\">\n        <ion-label> No Orders </ion-label>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</div>\n\n<ion-toolbar>\n  <ion-grid>\n    <ion-row>\n      <ion-col class=\"property_badge\" size=\"5\"> </ion-col>\n      <ion-col class=\"property_badge\" size=\"1\">\n        <ion-label>\n          <sub>NO ITEMS</sub>\n        </ion-label>\n      </ion-col>\n      <ion-col class=\"property_badge\" size=\"3\">\n        <ion-label>\n          <sub> ORDER AMOUNT </sub>\n        </ion-label>\n      </ion-col>\n      <ion-col class=\"property_badge\" size=\"3\">\n        <ion-label>\n          <sub> DATE </sub>\n        </ion-label>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-toolbar>\n\n<mat-accordion>\n  <mat-expansion-panel\n    [disabled]=\"clickButton\"\n    (click)=\"openOrder(order._id)\"\n    (opened)=\"panelOpenState = true\"\n    (closed)=\"panelOpenState = false\"\n    class=\"{{ order.order_number }}\"\n    hideToggle\n    *ngFor=\"let order of orderList$ | async; let i = index\"\n  >\n    <mat-expansion-panel-header\n      *ngIf=\"order.delivery_ready\"\n      [collapsedHeight]=\"'20vh'\"\n    >\n      <ion-grid>\n        <ion-row>\n          <ion-col class=\"property_badge\" size=\"5\">\n            <ion-label>{{ order.order_number }}</ion-label>\n          </ion-col>\n          <ion-col class=\"property_badge\" size=\"1\">\n            <ion-label>\n              {{ order.items.length }}\n            </ion-label>\n          </ion-col>\n          <ion-col class=\"property_badge\" size=\"3\">\n            <ion-label>\n              {{ order.items.length }}\n            </ion-label>\n          </ion-col>\n\n          <ion-col class=\"property_badge\" size=\"3\">\n            <ion-chip\n              *ngIf=\"!order.return\"\n              style=\"box-shadow: none !important; margin: 0\"\n              class=\"center\"\n              style=\"\n                width: 25vw;\n                height: 10vw;\n                padding-left: 0px;\n                padding-right: 0px;\n              \"\n            >\n              {{ order.delivery_status }}\n            </ion-chip>\n            <ion-chip\n              *ngIf=\"order.return\"\n              color=\"danger\"\n              style=\"box-shadow: none !important; margin: 0\"\n              class=\"center\"\n              style=\"\n                width: 25vw;\n                height: 10vw;\n                padding-left: 0px;\n                padding-right: 0px;\n              \"\n            >\n              return\n            </ion-chip>\n          </ion-col>\n        </ion-row>\n        <ion-row *ngIf=\"!checkId(order._id)\">\n          <ion-col class=\"center\" size=\"12\">\n            <div\n              style=\"float: left; margin: 5px\"\n              *ngFor=\"let item of order.items; let i = index\"\n            >\n              <div *ngFor=\"let image of item.productImage; let i = index\">\n                <ion-avatar *ngIf=\"i == 0\">\n                  <img src=\"{{ image.url }}\" />\n                </ion-avatar>\n              </div>\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </mat-expansion-panel-header>\n\n    <ng-template matExpansionPanelContent>\n      <ion-item\n        class=\"ion-no-padding\"\n        style=\"--inner-padding-end: 0px\"\n        *ngFor=\"let item of order.items; let i = index\"\n      >\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"2\">\n              <div *ngFor=\"let image of item.productImage; let i = index\">\n                <ion-avatar *ngIf=\"i == 0\">\n                  <img src=\"{{ image.url }}\" />\n                </ion-avatar>\n              </div>\n            </ion-col>\n\n            <ion-col class=\"center\" size=\"4\">\n              <ion-label>\n                <sub>\n                  {{ item.productName }}\n                </sub>\n              </ion-label>\n            </ion-col>\n            <ion-col class=\"property_badge center\" size=\"1\">\n              <ion-label>\n                {{ item.amount }}\n              </ion-label>\n            </ion-col>\n            <ion-col class=\"property_badge center\" size=\"2\">\n              <ion-label>\n                {{ item.productPrice }}\n              </ion-label>\n            </ion-col>\n            <ion-col class=\"center\" size=\"3\">\n              <ion-button\n                (click)=\"\n                  showBasicPicker(\n                    item,\n                    order._id,\n                    order.order_number,\n                    order.commit_date\n                  )\n                \"\n                >{{ item.order_status }}</ion-button\n              >\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n    </ng-template>\n  </mat-expansion-panel>\n</mat-accordion>\n\n<!--<div\n  style=\"padding-top: 3px;\"\n  class=\"{{ order.order_number }}\"\n  *ngFor=\"let order of orderList$ | async; let i = index\"\n></div>\n<ion-toolbar>\n  <ion-grid>\n    <ion-row>\n      <ion-col no-padding size=\"1\"> </ion-col>\n      <ion-col class=\"property_badge\" size=\"5\"> </ion-col>\n      <ion-col class=\"property_badge\" size=\"1\">\n        <ion-label>\n          No Items\n        </ion-label>\n      </ion-col>\n      <ion-col class=\"property_badge\" size=\"2\">\n        <ion-label>\n          Order Amount\n        </ion-label>\n      </ion-col>\n      <ion-col class=\"property_badge\" size=\"3\">\n        <ion-label>\n          Date\n        </ion-label>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-toolbar>\n\n<mat-accordion>\n\n  <mat-expansion-panel\n    [disabled]=\"clickButton\"\n    (click)=\"openOrder(order._id)\"\n    (opened)=\"panelOpenState = true\"\n    (closed)=\"panelOpenState = false\"\n    class=\"{{ order.order_number }}\"\n    hideToggle\n    *ngFor=\"let order of orderList$ | async; let i = index\"\n  >\n    <mat-expansion-panel-header\n      *ngIf=\"order.delivery_ready\"\n      [collapsedHeight]=\"'20vh'\"\n    >\n      <ion-grid>\n        <ion-row>\n          <ion-col no-padding size=\"1\">\n            <ion-chip>\n              <ion-label>{{ i + 1 }}</ion-label>\n            </ion-chip>\n          </ion-col>\n          <ion-col class=\"property_badge\" size=\"5\">\n            <ion-label>{{ order.order_number }}</ion-label>\n          </ion-col>\n          <ion-col class=\"property_badge\" size=\"1\">\n            <ion-label>\n              {{ order.items.length }}\n            </ion-label>\n          </ion-col>\n          <ion-col class=\"property_badge\" size=\"5\">\n            <ion-label>\n              {{ order.items.length }}\n            </ion-label>\n          </ion-col>\n        </ion-row>\n  \n      <ion-row *ngIf=\"!panelOpenState\">\n          <ion-col class=\"center\" size=\"12\">\n            <div\n              style=\"float: left; margin: 5px;\"\n              *ngFor=\"let item of order.items; let i = index\"\n            >\n              <div *ngFor=\"let image of item.productImage\">\n                <ion-avatar *ngIf=\"i==0\">\n                  <img src=\"{{ image.url }}\" />\n                </ion-avatar>\n              </div>\n            </div>\n          </ion-col>\n        </ion-row>  \n      </ion-grid>\n    </mat-expansion-panel-header>\n\n    <ng-template matExpansionPanelContent>\n      <ion-item\n        class=\"ion-no-padding\"\n        style=\"--inner-padding-end: 0px;\"\n        *ngFor=\"let item of order.items; let i = index\"\n      >\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"2\">\n              <div *ngFor=\"let image of item.productImage;let i = index\">\n                <ion-avatar *ngIf=\"i == 0\">\n                  <img src=\"{{ image.url }}\" />\n                </ion-avatar>\n              </div>\n            </ion-col>\n\n            <ion-col class=\"center\" size=\"4\">\n              <ion-label>\n                <sub>\n                  {{ item.productName }}\n                </sub>\n              </ion-label>\n            </ion-col>\n            <ion-col class=\"property_badge center\" size=\"1\">\n              <ion-label>\n                {{ item.amount }}\n              </ion-label>\n            </ion-col>\n            <ion-col class=\"property_badge center\" size=\"2\">\n              <ion-label>\n                {{ item.productPrice }}\n              </ion-label>\n            </ion-col>\n            <ion-col class=\"center\" size=\"3\">\n              <ion-button\n               \n                >{{ item.order_status }}</ion-button\n              >\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n    </ng-template>\n  </mat-expansion-panel>\n</mat-accordion>\n-->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin-store/pages/sales/components/payments/receipts/receipts.component.html":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin-store/pages/sales/components/payments/receipts/receipts.component.html ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"padding-top: 3px;\" class=\"{{order.order_number}}\"  *ngFor=\"let order of orderList$ | async ; let i = index\">\n\n\n</div>\n\n<mat-accordion>\n  <ion-toolbar>\n\n    \n\n  </ion-toolbar>\n\n  <mat-expansion-panel class=\"{{order.order_number}}\" (click)=\"expanded(order.order_number)\" hideToggle *ngFor=\"let order of orderList$ | async; let i = index\"  >\n\n    <mat-expansion-panel-header >\n\n\n    </mat-expansion-panel-header>\n\n    <ng-template matExpansionPanelContent>\n      <ion-item *ngFor=\"let item of order.items; let i = index\">\n\n\n      </ion-item>\n    </ng-template>\n\n\n\n\n\n  </mat-expansion-panel>\n\n</mat-accordion>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin-store/pages/sales/components/promo/promo.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin-store/pages/sales/components/promo/promo.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"no_promo\" class=\"center\">\n  <ion-grid>\n    <ion-row style=\"height: 70vh\" class=\"center\">\n      <ion-col size=\"12\">\n        <ion-label> No records of Promotion or Sale </ion-label>\n      </ion-col>\n      <ion-col size=\"12\">\n        <ion-button (click)=\"addPromo()\" shape=\"round\"\n          >Add Promotion <ion-icon name=\"add-circle-outline\"></ion-icon\n        ></ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</div>\n\n<div *ngIf=\"!no_promo\">\n  <ion-toolbar>\n    <ion-grid>\n      <ion-row>\n        <ion-col class=\"property_badge\" size=\"6\">\n          <ion-grid class=\"ion-no-padding\">\n            <ion-row class=\"ion-no-padding\">\n              <ion-col class=\"ion-no-padding\" size=\"12\">\n                <ion-label style=\"display: block\"> Title </ion-label>\n              </ion-col>\n              <ion-col class=\"ion-no-padding\" size=\"12\">\n                <ion-label>\n                  <sub> (voucher Number ) </sub>\n                </ion-label>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-col>\n        <ion-col class=\"center property_badge\" size=\"2\">\n          <ion-label> Target Qouta </ion-label>\n        </ion-col>\n        <ion-col class=\"center property_badge\" size=\"2\">\n          <ion-label> Qouta Spent </ion-label>\n        </ion-col>\n        <ion-col class=\"center property_badge\" size=\"2\">\n          <ion-label> Exp Date </ion-label>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n\n  <mat-accordion>\n    <mat-expansion-panel\n      hideToggle\n      *ngFor=\"let voucher of all_vouchers; let i = index\"\n    >\n      <ion-fab style=\"position: relative; top: -55px; left: 250px\" edge>\n        <ion-button\n          shape=\"round\"\n          fill=\"solid\"\n          (click)=\"updatePromo(voucher)\"\n          size=\"small\"\n          color=\"primary\"\n        >\n          <ion-icon size=\"small\" slot=\"icon-only\" name=\"create\"></ion-icon>\n        </ion-button>\n        <ion-button\n          shape=\"round\"\n          (click)=\"onDeletePromo(voucher._id)\"\n          size=\"small\"\n          color=\"danger\"\n        >\n          <ion-icon\n            fill=\"solid\"\n            size=\"small\"\n            slot=\"icon-only\"\n            name=\"trash\"\n          ></ion-icon>\n        </ion-button>\n      </ion-fab>\n\n      <mat-expansion-panel-header>\n        <ion-grid>\n          <ion-row>\n            <ion-col no-padding size=\"1\">\n              <ion-chip>\n                <ion-label>\n                  {{ i + 1 }}\n                </ion-label>\n              </ion-chip>\n            </ion-col>\n            <ion-col class=\"center\" size=\"5\">\n              <ion-label>\n                {{ voucher.title }}\n\n                <!-- <sub> {{voucher.voucher_number}}</sub>-->\n              </ion-label>\n            </ion-col>\n\n            <ion-col class=\"center\" size=\"2\">\n              <ion-label [ngSwitch]=\"voucher.type\">\n                <ion-badge *ngSwitchCase=\"'buy1get1free'\">Get1Free</ion-badge>\n                <ion-badge *ngSwitchCase=\"'combo'\">Combo</ion-badge>\n                <ion-badge *ngSwitchCase=\"'volume'\">Volume </ion-badge>\n                <ion-badge *ngSwitchCase=\"'itemDiscount'\">Discount </ion-badge>\n              </ion-label>\n            </ion-col>\n            <ion-col class=\"center\" size=\"2\">\n              <ion-label>\n                {{ voucher.total_quota }}\n              </ion-label>\n            </ion-col>\n            <ion-col class=\"center\" size=\"2\">\n              <ion-label>\n                {{ voucher.date | date: \"dd MMM\" }}\n              </ion-label>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </mat-expansion-panel-header>\n\n      <ng-template matExpansionPanelContent>\n        <div>\n          <ion-grid>\n            <ion-row>\n              <ion-col size=\"1\"> </ion-col>\n              <ion-col class=\"center\" size=\"5\">\n                <ion-label>\n                  <sub> Product Name </sub>\n                </ion-label>\n              </ion-col>\n              <ion-col class=\"center\" size=\"2\">\n                <ion-label>\n                  <sub>Quota</sub>\n                </ion-label>\n              </ion-col>\n              <ion-col class=\"center\" size=\"2\">\n                <ion-label>\n                  <sub>Product Price </sub>\n                </ion-label>\n              </ion-col>\n              <ion-col class=\"center\" size=\"2\">\n                <ion-label>\n                  <sub>Discount </sub>\n                </ion-label>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </div>\n        <div *ngFor=\"let product of voucher.products; let i = index\">\n          <ion-grid>\n            <ion-row>\n              <ion-col size=\"1\">\n                <ion-avatar>\n                  <img\n                    src=\"https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y\"\n                  />\n                </ion-avatar>\n              </ion-col>\n              <ion-col class=\"center\" size=\"5\">\n                <ion-label>\n                  {{ product.prod.productName }}\n                </ion-label>\n              </ion-col>\n              <ion-col class=\"center\" size=\"2\">\n                <ion-label>\n                  {{ product.p_quota }}\n                </ion-label>\n              </ion-col>\n              <ion-col class=\"center\" size=\"2\">\n                <ion-label>\n                  {{ product.prod.productPrice }}\n                </ion-label>\n              </ion-col>\n              <ion-col class=\"center\" size=\"2\">\n                <ion-label>\n                  {{ product.discount }}\n                </ion-label>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </div>\n      </ng-template>\n    </mat-expansion-panel>\n  </mat-accordion>\n\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n    <ion-infinite-scroll-content\n      loadingSpinner=\"bubbles\"\n      loadingText=\"Loading more data...\"\n    >\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</div>\n\n<!--\n    date: \"2020-05-02T14:59:20.147Z\"\nplatform: (2) [\"twitter\", \"insta\"]\nproducts: [{…}]\nrun_sale: true\nstore_id: \"5e4ab5a2e1cb938add570192\"\ntitle: \"Happy Monday\"\ntotal_quota: 15\ntype: \"combo\"\nvoucher_number: \"QSonQqgiBi\"\n__v: 0\n_id: \"5ead8ac881d04c4e14177457\"\n-->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin-store/pages/sales/components/promo/runSale/runsale.component.html":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin-store/pages/sales/components/promo/runSale/runsale.component.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (" \n  <ion-fab *ngIf=\"showBadgeSale\" vertical=\"top\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button  color=\"secondary\">\n      <ion-text >Sale</ion-text>\n    </ion-fab-button>\n  </ion-fab>\n\n  <ion-fab *ngIf=\"showBadgeVoucher\" vertical=\"top\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button color=\"tertiary\">\n      <ion-text >Voucher</ion-text>\n    </ion-fab-button>\n  </ion-fab>\n\n<ion-slides pager=\"true\" [options]=\"slideOpts\" #addPromoSlider>\n      <ion-slide>\n\n        <ion-grid>\n            <ion-row>\n                <ion-col size=12>\n                    <ion-text>\n                        <ion-row>\n                            <ion-col size=12>\n                                <!-- use [src] angular method to manage assets -->\n                                <ion-img src=\"./assets/adminSalesRunPromoAddPromoSlide1.svg\"></ion-img>\n                            </ion-col>\n                            <ion-col size=12>\n                                <h3>\n                                    You can run a <b>Sale</b> or create a Promotion Voucher<br>\n\n                                </h3>\n                            </ion-col>\n\n                        </ion-row>\n\n\n                    </ion-text>\n                </ion-col>\n                <ion-col size=12>\n                    <ion-segment (ionChange)=\"segmentChanged($event)\" >\n                        <!-- The SwipeNext function swipes the slide on select and shows promo type badge on top -->\n                        <ion-segment-button (click)=\"swipeNextSale()\"value=\"sale\">\n                          <ion-label>Items sale</ion-label>\n                        </ion-segment-button>\n                        <ion-segment-button (click)=\"swipeNextVoucher()\" value=\"voucher\">\n                          <ion-label>Promo Voucher</ion-label>\n                        </ion-segment-button>\n                      </ion-segment>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n\n\n  <ion-fab  style=\"z-index: 11\"vertical=\"bottom\" horizontal=\"end\">\n  <ion-button   (click)=\"swipeNext()\" size=\"small\">\n    next\n  </ion-button>\n  </ion-fab>\n\n      </ion-slide>\n\n      <!-- slide one ends here -->\n      <!-- slide two starts from below-->\n\n      <ion-slide>\n        <form [formGroup]=\"slideTwo\">\n        <ion-grid>\n            <ion-row>\n                <ion-col size=12>\n\n                    <ion-img src=\"./assets/adminSalesRunPromoAddPromoSlide2.svg\"></ion-img>\n                </ion-col>\n                <ion-col size=12>\n                    <ion-item>\n                        <ion-label position=\"floating\">Title</ion-label>\n                        <ion-input formControlName=\"title\"  clearOnEdit=\"true\" value=\"Month End Sale\"></ion-input>\n                    </ion-item>\n                </ion-col>\n                <ion-col size=12>\n                    <ion-item>\n                        <ion-label position=\"stacked\" >Expiry Date</ion-label>\n                        <ion-datetime formControlName=\"exp_date\" displayFormat=\"DDDD MMM D, YYYY\" min=\"2020\" max=\"2030\" value=\"2020-04-19\"></ion-datetime>\n\n                    </ion-item>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n        </form>\n  <ion-fab style=\"z-index: 11\" vertical=\"bottom\" horizontal=\"end\">\n  <ion-button (click)=\"swipeNext()\"  size=\"small\">\n    next\n  </ion-button>\n  </ion-fab>\n\n      </ion-slide>\n\n      <!--slide three starts  here -->\n\n      <ion-slide>\n\n\n\n        <form [formGroup]=\"slideThree\">\n          <ion-grid>\n              <ion-row>\n                  <ion-col size=12>\n\n                      <ion-img src=\"./assets/adminSalesRunPromoAddPromoSlide3.svg\"></ion-img>\n                  </ion-col>\n                  <ion-col size=12>\n                      <ion-item>\n                          <ion-label position=\"floating\">Promo Type</ion-label>\n                          <ion-select (ionChange)=\"promo_typeOnChange($event)\" formControlName=\"type\" [interfaceOptions]=\"customActionSheetOptions\" interface=\"action-sheet\" placeholder=\"Select One\">\n                            <ion-select-option value=\"buy1get1free\">Buy One Get One Free</ion-select-option> <!--  this make available secondary Product field and auto add the primary product to the secondary -->\n                            <!--on selecting the below show %discount-->\n                            <ion-select-option value=\"combo\">Combo Discount</ion-select-option> <!-- on selecting Combo make available secondary Product field-->\n                            <ion-select-option value=\"volume\">Volume Discount</ion-select-option><!-- make avalaible the product exceeding field-->\n                            <ion-select-option value=\"itemDiscount\">Item Discount</ion-select-option>\n                          </ion-select>\n                      </ion-item>\n                  </ion-col>\n              </ion-row>\n\n                <ion-row>\n                  <ion-col size=12>\n                      <ion-item>\n                          <ion-label>Active Platform</ion-label>\n                          <ion-select formControlName=\"platform\" multiple=\"true\" cancelText=\"Nah\" okText=\"Okay!\">\n\n                            <ion-select-option value=\"Facebook\">Facebook</ion-select-option>\n                            <ion-select-option value=\"twitter\">Twitter</ion-select-option>\n                            <ion-select-option value=\"insta\">instagram</ion-select-option>\n\n                          </ion-select>\n                        </ion-item>\n                  </ion-col>\n              </ion-row>\n          </ion-grid>\n        </form>\n\n  <ion-fab style=\"z-index: 11\" vertical=\"bottom\" horizontal=\"end\">\n  <ion-button (click)=\"swipeNext()\"  size=\"small\">\n    next\n  </ion-button>\n  </ion-fab>\n\n      </ion-slide>\n      <!-- 4th slide start here -->\n\n\n      <ion-slide>\n\n        <ion-fab  vertical=\"top\" horizontal=\"start\" slot=\"fixed\">\n          <ion-chip>\n            <ion-label>{{promo_type}}</ion-label>\n          </ion-chip>\n        </ion-fab>\n\n\n\n        <ion-grid>\n          <form [formGroup]=\"slideFour\">\n          <ion-row>\n            <ion-col size=12>\n              <ion-img  src=\"./assets/adminSalesRunPromoAddPromoSlide4.svg\"></ion-img>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"12\">\n\n                <ion-button size=\"small\" expand=\"block\" (click)=\"addProduct()\"> <ion-icon name=\"add-circle\"></ion-icon></ion-button>\n\n            </ion-col>\n          </ion-row>\n\n          <div  formArrayName=\"products\">\n            <div  *ngFor=\"let product of productFormGroup.controls; let i = index;\">\n                <div [formGroupName]=\"i\" >\n                    <ion-row>\n                      <ion-item class=\"primary_Product\">\n                        <ion-col size=8>\n                          <ion-item>\n                            <ion-label position=\"floating\">Products</ion-label>\n                            <ion-select formControlName=\"p_id\"  (ionChange)=\"changeSecProduct($event)\" [interfaceOptions]=\"customPopoverOptions\" interface=\"popover\" placeholder=\"Select One\">\n                              <ion-item no-padding  *ngFor=\"let product of products\" >\n                                <ion-select-option value=\"{{ product._id }}\">{{product.productName}}</ion-select-option>\n                              </ion-item>\n                            </ion-select>\n                          </ion-item>\n                        </ion-col>\n\n\n\n                        <ion-col size=4>\n                          <ion-item>\n                            <ion-label position=\"floating\">Quota</ion-label>\n                            <ion-input formControlName=\"p_quota\" type=\"number\"></ion-input>\n                        </ion-item>\n                        </ion-col>\n                      </ion-item>\n\n                    </ion-row>\n\n                    <ion-row *ngIf=\"buy1get1free\">\n                        <ion-col size=6>\n                            <ion-item *ngIf=\"discount\" >\n                                <ion-label   position=\"floating\">Discount</ion-label>\n                                <ion-input formControlName=\"discount\" clearOnEdit=\"true\" type=\"number\"></ion-input>\n                            </ion-item>\n                        </ion-col>\n                        <ion-col size=6>\n                            <ion-item  *ngIf=\"item_limit\" >\n                                <ion-label position=\"floating\">Item limit</ion-label>\n                                <ion-input formControlName=\"items_exceeding\" clearOnEdit=\"true\" type=\"number\"><ion-button>More</ion-button></ion-input>\n                            </ion-item>\n                        </ion-col>\n                      </ion-row>\n\n                    <ion-row>\n                      <ion-item class=\"secondary_Product\" *ngIf=\"secondary_Product\">\n                        <ion-col size=12>\n                          <ion-item>\n                            <ion-label position=\"floating\">Products</ion-label>\n                            <ion-select formControlName=\"s_id\" [interfaceOptions]=\"customPopoverOptions\" interface=\"popover\" placeholder=\"Select One\">\n                              <ion-item no-padding  *ngFor=\"let product of products\" >\n                                <ion-select-option  value=\"{{ product._id }}\">{{product.productName}}</ion-select-option>\n                              </ion-item>\n                            </ion-select>\n                          </ion-item>\n                        </ion-col>\n\n                      </ion-item>\n                    </ion-row>\n                    <div>\n                        <ion-button size=\"small\" color=\"danger\" type=\"button\" (click)=\"removeProduct(i)\"><ion-icon name=\"trash\"></ion-icon></ion-button>\n                    </div>\n        </div>\n      </div>\n    </div>\n  </form>\n          <ion-row>\n            <ion-col>\n                <ion-button expand=\"block\" (click)=\"createPromo()\">submit</ion-button>\n            </ion-col>\n          </ion-row>\n\n        </ion-grid>\n\n\n      </ion-slide>\n</ion-slides>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin-store/pages/sales/sales.page.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin-store/pages/sales/sales.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header\n  *ngIf=\"segmentChanged !== 'ad_promo' && segmentChanged !=='deliver' \"\n  style=\"padding-top: 5px\"\n>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button\n        size=\"small\"\n        defaultHref=\"/admin-store/store/dashboard\"\n        slot=\"icon-only\"\n        name=\"arrow-back\"\n      >\n      </ion-back-button>\n    </ion-buttons>\n    <ion-searchbar\n      (ionInput)=\"searchItems($event)\"\n      [debounce]=\"1000\"\n      placeholder=\"search {{searchPlaceholder}}...\"\n    ></ion-searchbar>\n    <ion-button\n      size=\"small\"\n      slot=\"end\"\n      shape=\"round\"\n      (click)=\"changeSegment('ad_promo')\"\n    >\n      <ion-icon color=\"secondary\" slot=\"icon-only\" name=\"add\"></ion-icon>\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-fab\n  *ngIf=\"segmentChanged == 'ad_promo' || segmentChanged =='deliver' \"\n  vertical=\"top\"\n  horizontal=\"start\"\n  slot=\"fixed\"\n>\n  <ion-fab-button\n    *ngIf=\"segmentChanged == 'ad_promo'\"\n    size=\"small\"\n    (click)=\"changeSegment('promo')\"\n  >\n    <ion-icon size=\"small\" name=\"close-outline\"></ion-icon>\n  </ion-fab-button>\n  <ion-fab-button\n    *ngIf=\"segmentChanged == 'deliver'\"\n    size=\"small\"\n    (click)=\"changeSegment('orders')\"\n  >\n    <ion-icon size=\"small\" name=\"close-outline\"></ion-icon>\n  </ion-fab-button>\n</ion-fab>\n\n<ion-segment\n  *ngIf=\"segmentChanged !== 'ad_promo' && segmentChanged !=='deliver' \"\n  value=\"promo\"\n  fill=\"solid\"\n  [(ngModel)]=\"segmentChanged\"\n>\n  <ion-segment-button size=\"small\" value=\"orders\">\n    <ion-label>Orders</ion-label>\n  </ion-segment-button>\n  <ion-segment-button value=\"payments\">\n    <ion-label> Processed </ion-label>\n  </ion-segment-button>\n  <ion-segment-button value=\"promo\">\n    <ion-label>Promotions</ion-label>\n  </ion-segment-button>\n</ion-segment>\n<ion-content>\n  <div [ngSwitch]=\"segmentChanged\">\n    <app-promo\n      [vouchers]=\"vouchers$\"\n      (notifyParent)=\"getNotification($event)\"\n      *ngSwitchCase=\"'promo'\"\n    ></app-promo>\n    <app-runsale *ngSwitchCase=\"'ad_promo'\"></app-runsale>\n    <app-payments [orders]=\"orders$\" *ngSwitchCase=\"'payments'\">\n      payments</app-payments\n    >\n    <app-orders\n      [orders]=\"orders$\"\n      (notifyParent)=\"getNotification($event)\"\n      *ngSwitchCase=\"'orders'\"\n    ></app-orders>\n    <app-deliver *ngSwitchCase=\"'deliver'\"></app-deliver>\n  </div>\n</ion-content>\n<ion-footer *ngIf=\"segmentChanged !== 'ad_promo' \">\n  <ion-toolbar>\n    <ion-row>\n      <ion-col class=\"center\" size=\"4\">\n        <ion-button\n          color=\"light\"\n          size=\"small\"\n          shape=\"round\"\n          fill=\"clear\"\n          [routerLink]=\"['/admin-store/store/products']\"\n        >\n          <img\n            style=\"max-width: 30%; display: block\"\n            src=\"./assets/greyUserIcon.svg\"\n            alt=\"\"\n          />\n          <sub style=\"color: grey; left: 5px\">Products</sub>\n        </ion-button>\n      </ion-col>\n      <ion-col class=\"center\" size=\"4\">\n        <ion-fab>\n          <ion-fab-button\n            [routerLink]=\"['/admin-store/store/dashboard']\"\n            size=\"small\"\n            color=\"white\"\n          >\n            <ion-icon color=\"primary\" name=\"home\"></ion-icon>\n          </ion-fab-button>\n        </ion-fab>\n      </ion-col>\n      <ion-col class=\"center\" size=\"4\">\n        <ion-button\n          color=\"light\"\n          size=\"small\"\n          fill=\"clear\"\n          shape=\"round\"\n          [routerLink]=\"['/admin-store/store/users']\"\n        >\n          <img\n            style=\"max-width: 30%; display: block\"\n            src=\"./assets/grey users divIcons made by a href=httpswww.flaticon.comauthorssrip title=sripsripa from a href=httpswww.flaticon.com title=Flaticonwww.flaticon.comadiv 1 (1).svg\"\n          />\n          <sub style=\"color: grey; left: 5px\">Users</sub>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n");

/***/ }),

/***/ "./src/app/modules/admin-store/pages/sales/components/modals/addpromo/addpromo.component.scss":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/admin-store/pages/sales/components/modals/addpromo/addpromo.component.scss ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-card {\n  display: flex;\n  flex-direction: column;\n  width: 100% !important;\n  margin: 0 !important;\n  height: 90%;\n}\n\nion-item {\n  border: 1px solid #018786;\n  border-radius: 4px;\n  --ion-background-color: white;\n}\n\n.boxv {\n  border: 1px solid #018786;\n  border-radius: 4px;\n  --ion-background-color: white;\n}\n\n.custom-modal-css .modal-wrapper {\n  height: 95% !important;\n  top: 5% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hZG1pbi1zdG9yZS9wYWdlcy9zYWxlcy9jb21wb25lbnRzL21vZGFscy9hZGRwcm9tby9DOlxcVXNlcnNcXE1hcnZpblxcRG9jdW1lbnRzXFxHaXRIdWJcXGFmcm9iXFxjbGllbnQvc3JjXFxhcHBcXG1vZHVsZXNcXGFkbWluLXN0b3JlXFxwYWdlc1xcc2FsZXNcXGNvbXBvbmVudHNcXG1vZGFsc1xcYWRkcHJvbW9cXGFkZHByb21vLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2FkbWluLXN0b3JlL3BhZ2VzL3NhbGVzL2NvbXBvbmVudHMvbW9kYWxzL2FkZHByb21vL2FkZHByb21vLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0csYUFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7QUNDSDs7QURDQztFQUNDLHlCQUFBO0VBQ0Esa0JBQUE7RUFDRCw2QkFBQTtBQ0VEOztBREFBO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNELDZCQUFBO0FDR0Q7O0FEQUE7RUFDSSxzQkFBQTtFQUNBLGtCQUFBO0FDR0oiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2FkbWluLXN0b3JlL3BhZ2VzL3NhbGVzL2NvbXBvbmVudHMvbW9kYWxzL2FkZHByb21vL2FkZHByb21vLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmR7XG4gICBkaXNwbGF5OiBmbGV4O1xuICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgIGhlaWdodDogOTAlXG4gfVxuIGlvbi1pdGVte1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDE4Nzg2O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gLS1pb24tYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG4uYm94dntcbiAgYm9yZGVyOiAxcHggc29saWQgIzAxODc4NjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4uY3VzdG9tLW1vZGFsLWNzcyAubW9kYWwtd3JhcHBlciB7XG4gICAgaGVpZ2h0OiA5NSUgIWltcG9ydGFudDtcbiAgICB0b3A6IDUlICFpbXBvcnRhbnQ7XG4gIH1cbiIsImlvbi1jYXJkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogOTAlO1xufVxuXG5pb24taXRlbSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMTg3ODY7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5ib3h2IHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAxODc4NjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLmN1c3RvbS1tb2RhbC1jc3MgLm1vZGFsLXdyYXBwZXIge1xuICBoZWlnaHQ6IDk1JSAhaW1wb3J0YW50O1xuICB0b3A6IDUlICFpbXBvcnRhbnQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/admin-store/pages/sales/components/modals/addpromo/addpromo.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/admin-store/pages/sales/components/modals/addpromo/addpromo.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: AddpromoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddpromoComponent", function() { return AddpromoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var src_app_core_modules_services_products_product_api_product_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core-modules/services/products/product-api/product-api.service */ "./src/app/core-modules/services/products/product-api/product-api.service.ts");
/* harmony import */ var src_app_core_modules_services_vouchers_voucher_api_voucher_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core-modules/services/vouchers/voucher-api/voucher-api.service */ "./src/app/core-modules/services/vouchers/voucher-api/voucher-api.service.ts");






var AddpromoComponent = /** @class */ (function () {
    function AddpromoComponent(modalController, formBuilder, productService, voucherService) {
        this.modalController = modalController;
        this.formBuilder = formBuilder;
        this.productService = productService;
        this.voucherService = voucherService;
    }
    Object.defineProperty(AddpromoComponent.prototype, "productFormGroup", {
        // returns all form groups under properties
        get: function () {
            return this.addPromo.get('products');
        },
        enumerable: true,
        configurable: true
    });
    AddpromoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productService.getStoreProducts().subscribe(function (res) {
            _this.products = res.product;
        }, function (err) {
            console.log(err);
        });
        this.addPromo = this.formBuilder.group({
            run_sale: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            type: ['Item_Discount', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            title: ['DecemberSpecial', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            //products: this.formBuilder.array([this.createProduct()]),
            products: [[
                    {
                        _id: '5e9c6fe56a3e45389012e7af',
                        quota: 1
                    }
                ], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            total_quota: [25, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            platform: ['Youtube', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            discount: [0.1, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            items_exceeding: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            exp_date: ["2020-05-19T15:36:05.635Z", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
        });
        console.log(this.addPromo.value);
        this.voucherService.createVoucher(this.addPromo.value).subscribe(function (res) {
            console.log(res);
        }, function (err) {
            console.log(err);
        });
        // set productList to the form control containing propeties
        this.productList = this.addPromo.get('products');
    };
    // Generate new product
    AddpromoComponent.prototype.createProduct = function () {
        return this.formBuilder.group({
            productname: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
        });
    };
    AddpromoComponent.prototype.addProduct = function () {
        this.productList.push(this.createProduct());
    };
    AddpromoComponent.prototype.removeProduct = function (index) {
        this.productList.removeAt(index);
    };
    AddpromoComponent.prototype.getProductFormGroup = function (index) {
        var formGroup = this.productList.controls[index];
        return formGroup;
    };
    AddpromoComponent.prototype.dismiss = function () {
        this.modalController.dismiss({
            'dismissed': true
        });
    };
    AddpromoComponent.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: src_app_core_modules_services_products_product_api_product_api_service__WEBPACK_IMPORTED_MODULE_4__["ProductApiService"] },
        { type: src_app_core_modules_services_vouchers_voucher_api_voucher_api_service__WEBPACK_IMPORTED_MODULE_5__["VoucherApiService"] }
    ]; };
    AddpromoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-addpromo',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./addpromo.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin-store/pages/sales/components/modals/addpromo/addpromo.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./addpromo.component.scss */ "./src/app/modules/admin-store/pages/sales/components/modals/addpromo/addpromo.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            src_app_core_modules_services_products_product_api_product_api_service__WEBPACK_IMPORTED_MODULE_4__["ProductApiService"],
            src_app_core_modules_services_vouchers_voucher_api_voucher_api_service__WEBPACK_IMPORTED_MODULE_5__["VoucherApiService"]])
    ], AddpromoComponent);
    return AddpromoComponent;
}());



/***/ }),

/***/ "./src/app/modules/admin-store/pages/sales/components/orders/deliver/deliver.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/admin-store/pages/sales/components/orders/deliver/deliver.component.scss ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4tc3RvcmUvcGFnZXMvc2FsZXMvY29tcG9uZW50cy9vcmRlcnMvZGVsaXZlci9kZWxpdmVyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/admin-store/pages/sales/components/orders/deliver/deliver.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/admin-store/pages/sales/components/orders/deliver/deliver.component.ts ***!
  \************************************************************************************************/
/*! exports provided: DeliverComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliverComponent", function() { return DeliverComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var src_app_core_modules_services_orders_order_facade_order_facade_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core-modules/services/orders/order-facade/order-facade.service */ "./src/app/core-modules/services/orders/order-facade/order-facade.service.ts");
/* harmony import */ var src_app_core_modules_services_profile_profile_facade_profile_facade_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core-modules/services/profile/profile-facade/profile-facade.service */ "./src/app/core-modules/services/profile/profile-facade/profile-facade.service.ts");









var DeliverComponent = /** @class */ (function () {
    function DeliverComponent(toastController, alertController, orderFacade, router, userFacade) {
        this.toastController = toastController;
        this.alertController = alertController;
        this.orderFacade = orderFacade;
        this.router = router;
        this.userFacade = userFacade;
        this.self_delivery = true;
        this.courier_delivery_form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            courier_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](""),
            courier_ref: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](""),
        });
    }
    DeliverComponent.prototype.ngOnInit = function () {
        this.today = new Date();
    };
    DeliverComponent.prototype.deliveryDate = function (e) {
        this.delivery_date = e.detail.value;
    };
    DeliverComponent.prototype.updateDelivery = function (data) {
        var _this = this;
        var store = this.userFacade.getCurrentStore();
        if (data == "courier_delivery") {
            this.orderFacade.getOrderDelivery().subscribe(function (res) {
                var dat = _this.courier_delivery_form.value;
                _this.orderFacade.updateStoreOrder({
                    data: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ order_id: res._id, delivery_type: "Courier", delivery_date: _this.delivery_date }, dat),
                    store_id: store._id,
                });
                //reload data todo:
                _this.router.navigate(["/store/sales"]);
            }, function (err) {
                console.log(err);
            });
        }
        else {
            this.orderFacade.getOrderDelivery().subscribe(function (res) {
                _this.orderFacade.updateStoreOrder({ data: {
                        order_id: res._id,
                        delivery_type: "Self",
                        delivery_date: _this.delivery_date,
                        self: true,
                    }, store_id: store._id, });
                //reload data todo:
                _this.router.navigate(["/store/sales"]);
            }, function (err) {
                console.log(err);
            });
        }
    };
    DeliverComponent.prototype.presentSelfToast = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var toast;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: "Self Delivery Selected as a delivery Method",
                            position: "bottom",
                            animated: true,
                            duration: 2000,
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        //  this.showBadgeSale=true;
                        //  this.showBadgeVoucher=false;
                        setTimeout(function () {
                            //this.notifyToSwipe()
                        }, 2010);
                        return [2 /*return*/];
                }
            });
        });
    };
    DeliverComponent.prototype.presentCourToast = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var toast;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: "Courier Selected as a delivery Method",
                            position: "bottom",
                            animated: true,
                            duration: 2000,
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        //  this.showBadgeSale=true;
                        //this.showBadgeVoucher=false;
                        setTimeout(function () {
                            //this.notifyToSwipe()
                        }, 2010);
                        return [2 /*return*/];
                }
            });
        });
    };
    DeliverComponent.prototype.swipeNextCour = function () {
        var _this = this;
        setTimeout(function () {
            _this.slides.slideNext();
            _this.presentCourToast();
        }, 1000);
    };
    DeliverComponent.prototype.segmentChanged = function (value) {
        var data = value.detail.value;
        if (data == "Self_delivery") {
            console.log(data);
            this.self_delivery = true;
        }
        if (data == "third_party") {
            this.self_delivery = false;
            console.log(data);
        }
    };
    DeliverComponent.prototype.swipeNextSelf = function () {
        var _this = this;
        setTimeout(function () {
            _this.slides.slideNext();
            _this.presentSelfToast();
        }, 1000);
    };
    DeliverComponent.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
        { type: src_app_core_modules_services_orders_order_facade_order_facade_service__WEBPACK_IMPORTED_MODULE_5__["OrderFacadeService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: src_app_core_modules_services_profile_profile_facade_profile_facade_service__WEBPACK_IMPORTED_MODULE_6__["UserFacadeService"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("deliverSlider", { static: true }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"])
    ], DeliverComponent.prototype, "slides", void 0);
    DeliverComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-deliver",
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./deliver.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin-store/pages/sales/components/orders/deliver/deliver.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./deliver.component.scss */ "./src/app/modules/admin-store/pages/sales/components/orders/deliver/deliver.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            src_app_core_modules_services_orders_order_facade_order_facade_service__WEBPACK_IMPORTED_MODULE_5__["OrderFacadeService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            src_app_core_modules_services_profile_profile_facade_profile_facade_service__WEBPACK_IMPORTED_MODULE_6__["UserFacadeService"]])
    ], DeliverComponent);
    return DeliverComponent;
}());



/***/ }),

/***/ "./src/app/modules/admin-store/pages/sales/components/orders/orders.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/admin-store/pages/sales/components/orders/orders.component.scss ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-expansion-panel-header {\n  padding: 0 0px;\n}\n\n.property_badge {\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.odd_position {\n  left: 38vw;\n  top: -1vh;\n  position: fixed;\n}\n\n::ng-deep div.mat-expansion-panel-body {\n  padding-right: 0px;\n  padding-left: 0px;\n}\n\n.datetime-text {\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hZG1pbi1zdG9yZS9wYWdlcy9zYWxlcy9jb21wb25lbnRzL29yZGVycy9DOlxcVXNlcnNcXE1hcnZpblxcRG9jdW1lbnRzXFxHaXRIdWJcXGFmcm9iXFxjbGllbnQvc3JjXFxhcHBcXG1vZHVsZXNcXGFkbWluLXN0b3JlXFxwYWdlc1xcc2FsZXNcXGNvbXBvbmVudHNcXG9yZGVyc1xcb3JkZXJzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2FkbWluLXN0b3JlL3BhZ2VzL3NhbGVzL2NvbXBvbmVudHMvb3JkZXJzL29yZGVycy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUNDRjs7QURBRTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNHRjs7QURBQTtFQUNFLFVBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtBQ0dGOztBRERBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtBQ0lGOztBRERBO0VBQ0UsZUFBQTtBQ0lGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9hZG1pbi1zdG9yZS9wYWdlcy9zYWxlcy9jb21wb25lbnRzL29yZGVycy9vcmRlcnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIge1xuICBwYWRkaW5nOiAwIDBweDt9XG4gIC5wcm9wZXJ0eV9iYWRnZXtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLm9kZF9wb3NpdGlvbntcbiAgbGVmdDogMzh2dztcbiAgdG9wOiAtMXZoO1xuICBwb3NpdGlvbjogZml4ZWQ7XG59XG46Om5nLWRlZXAgZGl2Lm1hdC1leHBhbnNpb24tcGFuZWwtYm9keSB7XG4gIHBhZGRpbmctcmlnaHQ6IDBweDtcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gIFxufVxuLmRhdGV0aW1lLXRleHR7XG4gIGZvbnQtc2l6ZTogMTJweDtcblxufVxuXG4iLCIubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIge1xuICBwYWRkaW5nOiAwIDBweDtcbn1cblxuLnByb3BlcnR5X2JhZGdlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLm9kZF9wb3NpdGlvbiB7XG4gIGxlZnQ6IDM4dnc7XG4gIHRvcDogLTF2aDtcbiAgcG9zaXRpb246IGZpeGVkO1xufVxuXG46Om5nLWRlZXAgZGl2Lm1hdC1leHBhbnNpb24tcGFuZWwtYm9keSB7XG4gIHBhZGRpbmctcmlnaHQ6IDBweDtcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XG59XG5cbi5kYXRldGltZS10ZXh0IHtcbiAgZm9udC1zaXplOiAxMnB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/admin-store/pages/sales/components/orders/orders.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/admin-store/pages/sales/components/orders/orders.component.ts ***!
  \***************************************************************************************/
/*! exports provided: OrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersComponent", function() { return OrdersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var src_app_core_modules_services_orders_order_facade_order_facade_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core-modules/services/orders/order-facade/order-facade.service */ "./src/app/core-modules/services/orders/order-facade/order-facade.service.ts");
/* harmony import */ var src_app_core_modules_services_profile_profile_facade_profile_facade_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core-modules/services/profile/profile-facade/profile-facade.service */ "./src/app/core-modules/services/profile/profile-facade/profile-facade.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");







/*import { PickerButton } from 'src/app/models/picker-model';
import { PickerColumn } from 'src/app/models/picker-model';
import { PickerColumnOption } from 'src/app/models/picker-model';*/
var OrdersComponent = /** @class */ (function () {
    function OrdersComponent(formBuilder, pickerCtrl, orderFacade, userFacade) {
        this.formBuilder = formBuilder;
        this.pickerCtrl = pickerCtrl;
        this.orderFacade = orderFacade;
        this.userFacade = userFacade;
        this.notifyParent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.framework = "pending";
        this.views_order = [];
        this.panelOpenState = false;
        this.commit_chip = true;
        ////loading
        this.isUpdating$ = this.orderFacade.isUpdating$();
    }
    OrdersComponent.prototype.ngOnChanges = function (changes) {
        this.orderList$ = this.orders.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["distinctUntilChanged"])());
    };
    OrdersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.date_form = this.formBuilder.group({
            date: [new Date().toISOString()],
        });
        setTimeout(function () {
            _this.orderList$.subscribe(function (res) {
                if (res == undefined || res.length < 1) {
                    _this.no_order = true;
                }
            }, function (err) {
                console.log(err);
            });
        }, 5000);
    };
    OrdersComponent.prototype.showBasicPicker = function (item, order_id, order_number, commit_date) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var opts, picker;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        opts = {
                            buttons: [
                                {
                                    text: "cancel",
                                    role: "cancel",
                                },
                                {
                                    text: "done",
                                },
                            ],
                            columns: [
                                {
                                    name: "framework",
                                    options: [
                                        { text: "ready", value: "ready" },
                                        { text: "pending", value: "pending" },
                                        { text: "preparing", value: "preparing" },
                                    ],
                                },
                            ],
                        };
                        return [4 /*yield*/, this.pickerCtrl.create(opts)];
                    case 1:
                        picker = _a.sent();
                        picker.present();
                        picker.onDidDismiss().then(function (data) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                            var col;
                            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, picker.getColumn("framework")];
                                    case 1:
                                        col = _a.sent();
                                        this.framework = col.options[col.selectedIndex].text;
                                        this.postToUpdateOrder(item, order_id, order_number, commit_date, this.framework);
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                        return [2 /*return*/];
                }
            });
        });
    };
    OrdersComponent.prototype.postToUpdateOrder = function (item, order_id, order_number, commit_date, product_status) {
        var store = this.userFacade.getCurrentStore();
        var data = {
            order_id: order_id,
            item: item,
            product_status: product_status,
            order_number: order_number,
        };
        this.orderFacade.updateStoreOrder({ data: data, store_id: store._id });
    };
    OrdersComponent.prototype.commit = function (order_id, order_number, commit_date) {
        var store = this.userFacade.getCurrentStore();
        var data = {
            _id: order_id,
            order_id: order_id,
            commit_date: commit_date,
            order_number: order_number,
        };
        this.orderFacade.updateStoreOrder({ data: data, store_id: store._id });
    };
    OrdersComponent.prototype.expanded = function (order_number) {
        if (this.active_expansion === order_number) {
            this.active_expansion = null;
        }
        else {
            this.active_expansion = order_number;
        }
    };
    OrdersComponent.prototype.checkProductReady = function (order_id) {
        var _this = this;
        this.orderList$.subscribe(function (res) {
            var filtered_array = res.filter(function (item) {
                return item._id === order_id;
            });
            _this.filtered_array = filtered_array;
        }, function (err) {
            console.log(err);
        });
        var stat = [];
        this.filtered_array[0].items.forEach(function (z) {
            stat.push(z.order_status);
        });
        if (stat.includes("pending")) {
            return false;
        }
        else if (stat.includes("preparing")) {
            return false;
        }
        else {
            return true;
        }
    };
    OrdersComponent.prototype.countDown = function (commit_date) {
        var dateSent = new Date();
        var currentDate = new Date(commit_date);
        return Math.floor((Date.UTC(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate()) -
            Date.UTC(dateSent.getFullYear(), dateSent.getMonth(), dateSent.getDate())) /
            (1000 * 60 * 60 * 24));
    };
    OrdersComponent.prototype.deliver = function (order) {
        this.orderFacade.setOrderDelivery(order);
        this.notifyParent.emit("deliver");
    };
    OrdersComponent.prototype.onCommit = function () {
        this.clickButton = true;
        this.commit_chip = false;
    };
    OrdersComponent.prototype.orderClicked = function (id) {
        console.log(id);
    };
    OrdersComponent.prototype.openOrder = function (id) {
        this.clickButton = false;
        this.active_expansion = id;
        console.log(this.active_expansion);
    };
    OrdersComponent.prototype.checkId = function (id) {
        if (this.panelOpenState === true) {
            return this.active_expansion === id;
        }
    };
    OrdersComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PickerController"] },
        { type: src_app_core_modules_services_orders_order_facade_order_facade_service__WEBPACK_IMPORTED_MODULE_4__["OrderFacadeService"] },
        { type: src_app_core_modules_services_profile_profile_facade_profile_facade_service__WEBPACK_IMPORTED_MODULE_5__["UserFacadeService"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], OrdersComponent.prototype, "notifyParent", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], OrdersComponent.prototype, "orders", void 0);
    OrdersComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-orders",
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./orders.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin-store/pages/sales/components/orders/orders.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./orders.component.scss */ "./src/app/modules/admin-store/pages/sales/components/orders/orders.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PickerController"],
            src_app_core_modules_services_orders_order_facade_order_facade_service__WEBPACK_IMPORTED_MODULE_4__["OrderFacadeService"],
            src_app_core_modules_services_profile_profile_facade_profile_facade_service__WEBPACK_IMPORTED_MODULE_5__["UserFacadeService"]])
    ], OrdersComponent);
    return OrdersComponent;
}());



/***/ }),

/***/ "./src/app/modules/admin-store/pages/sales/components/payments/payments.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/admin-store/pages/sales/components/payments/payments.component.scss ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-expansion-panel-header {\n  padding: 0 0px;\n}\n\n.property_badge {\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.odd_position {\n  left: 38vw;\n  top: -1vh;\n  position: fixed;\n}\n\n::ng-deep div.mat-expansion-panel-body {\n  padding-right: 0px;\n  padding-left: 0px;\n}\n\n.datetime-text {\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hZG1pbi1zdG9yZS9wYWdlcy9zYWxlcy9jb21wb25lbnRzL3BheW1lbnRzL0M6XFxVc2Vyc1xcTWFydmluXFxEb2N1bWVudHNcXEdpdEh1YlxcYWZyb2JcXGNsaWVudC9zcmNcXGFwcFxcbW9kdWxlc1xcYWRtaW4tc3RvcmVcXHBhZ2VzXFxzYWxlc1xcY29tcG9uZW50c1xccGF5bWVudHNcXHBheW1lbnRzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2FkbWluLXN0b3JlL3BhZ2VzL3NhbGVzL2NvbXBvbmVudHMvcGF5bWVudHMvcGF5bWVudHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDRUY7O0FEQ0E7RUFDRSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7QUNFRjs7QURBQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7QUNHRjs7QUREQTtFQUNFLGVBQUE7QUNJRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4tc3RvcmUvcGFnZXMvc2FsZXMvY29tcG9uZW50cy9wYXltZW50cy9wYXltZW50cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlciB7XG4gIHBhZGRpbmc6IDAgMHB4O1xufVxuLnByb3BlcnR5X2JhZGdlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLm9kZF9wb3NpdGlvbiB7XG4gIGxlZnQ6IDM4dnc7XG4gIHRvcDogLTF2aDtcbiAgcG9zaXRpb246IGZpeGVkO1xufVxuOjpuZy1kZWVwIGRpdi5tYXQtZXhwYW5zaW9uLXBhbmVsLWJvZHkge1xuICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG4gIHBhZGRpbmctbGVmdDogMHB4O1xufVxuLmRhdGV0aW1lLXRleHQge1xuICBmb250LXNpemU6IDEycHg7XG59XG4iLCIubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIge1xuICBwYWRkaW5nOiAwIDBweDtcbn1cblxuLnByb3BlcnR5X2JhZGdlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLm9kZF9wb3NpdGlvbiB7XG4gIGxlZnQ6IDM4dnc7XG4gIHRvcDogLTF2aDtcbiAgcG9zaXRpb246IGZpeGVkO1xufVxuXG46Om5nLWRlZXAgZGl2Lm1hdC1leHBhbnNpb24tcGFuZWwtYm9keSB7XG4gIHBhZGRpbmctcmlnaHQ6IDBweDtcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XG59XG5cbi5kYXRldGltZS10ZXh0IHtcbiAgZm9udC1zaXplOiAxMnB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/admin-store/pages/sales/components/payments/payments.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/admin-store/pages/sales/components/payments/payments.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: PaymentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentsComponent", function() { return PaymentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_core_modules_services_orders_order_facade_order_facade_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core-modules/services/orders/order-facade/order-facade.service */ "./src/app/core-modules/services/orders/order-facade/order-facade.service.ts");




var PaymentsComponent = /** @class */ (function () {
    function PaymentsComponent(orderFacade) {
        this.orderFacade = orderFacade;
        this.panelOpenState = false;
    }
    PaymentsComponent.prototype.ngOnChanges = function (changes) {
        this.orderList$ = this.orders.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])());
    };
    PaymentsComponent.prototype.ngOnInit = function () {
        //getOrders
        var _this = this;
        this.orderList$.subscribe(function (res) {
            if (res == undefined || res.length < 1) {
                _this.no_order = true;
            }
        }, function (err) {
            console.log(err);
        });
    };
    PaymentsComponent.prototype.openOrder = function (id) {
        this.clickButton = false;
        this.active_expansion = id;
        console.log(this.active_expansion);
    };
    PaymentsComponent.prototype.checkId = function (id) {
        if (this.panelOpenState === true) {
            return this.active_expansion === id;
        }
    };
    PaymentsComponent.ctorParameters = function () { return [
        { type: src_app_core_modules_services_orders_order_facade_order_facade_service__WEBPACK_IMPORTED_MODULE_3__["OrderFacadeService"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], PaymentsComponent.prototype, "orders", void 0);
    PaymentsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-payments",
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./payments.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin-store/pages/sales/components/payments/payments.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./payments.component.scss */ "./src/app/modules/admin-store/pages/sales/components/payments/payments.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_core_modules_services_orders_order_facade_order_facade_service__WEBPACK_IMPORTED_MODULE_3__["OrderFacadeService"]])
    ], PaymentsComponent);
    return PaymentsComponent;
}());



/***/ }),

/***/ "./src/app/modules/admin-store/pages/sales/components/payments/receipts/receipts.component.scss":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/admin-store/pages/sales/components/payments/receipts/receipts.component.scss ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4tc3RvcmUvcGFnZXMvc2FsZXMvY29tcG9uZW50cy9wYXltZW50cy9yZWNlaXB0cy9yZWNlaXB0cy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/admin-store/pages/sales/components/payments/receipts/receipts.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/admin-store/pages/sales/components/payments/receipts/receipts.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: ReceiptsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReceiptsComponent", function() { return ReceiptsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var ReceiptsComponent = /** @class */ (function () {
    function ReceiptsComponent() {
    }
    ReceiptsComponent.prototype.ngOnInit = function () { };
    ReceiptsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-receipts',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./receipts.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin-store/pages/sales/components/payments/receipts/receipts.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./receipts.component.scss */ "./src/app/modules/admin-store/pages/sales/components/payments/receipts/receipts.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], ReceiptsComponent);
    return ReceiptsComponent;
}());



/***/ }),

/***/ "./src/app/modules/admin-store/pages/sales/components/promo/promo.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/admin-store/pages/sales/components/promo/promo.component.scss ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".property_badge {\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\nion-toolbar ion-label {\n  font-size: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hZG1pbi1zdG9yZS9wYWdlcy9zYWxlcy9jb21wb25lbnRzL3Byb21vL0M6XFxVc2Vyc1xcTWFydmluXFxEb2N1bWVudHNcXEdpdEh1YlxcYWZyb2JcXGNsaWVudC9zcmNcXGFwcFxcbW9kdWxlc1xcYWRtaW4tc3RvcmVcXHBhZ2VzXFxzYWxlc1xcY29tcG9uZW50c1xccHJvbW9cXHByb21vLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2FkbWluLXN0b3JlL3BhZ2VzL3NhbGVzL2NvbXBvbmVudHMvcHJvbW8vcHJvbW8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDQ0o7O0FEQ0U7RUFDRSxlQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2FkbWluLXN0b3JlL3BhZ2VzL3NhbGVzL2NvbXBvbmVudHMvcHJvbW8vcHJvbW8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvcGVydHlfYmFkZ2V7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuICBpb24tdG9vbGJhciBpb24tbGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgfSIsIi5wcm9wZXJ0eV9iYWRnZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbmlvbi10b29sYmFyIGlvbi1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/admin-store/pages/sales/components/promo/promo.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/admin-store/pages/sales/components/promo/promo.component.ts ***!
  \*************************************************************************************/
/*! exports provided: PromoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromoComponent", function() { return PromoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_core_modules_services_profile_profile_facade_profile_facade_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core-modules/services/profile/profile-facade/profile-facade.service */ "./src/app/core-modules/services/profile/profile-facade/profile-facade.service.ts");
/* harmony import */ var src_app_core_modules_services_vouchers_voucher_facade_voucher_facade_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core-modules/services/vouchers/voucher-facade/voucher-facade.service */ "./src/app/core-modules/services/vouchers/voucher-facade/voucher-facade.service.ts");







var PromoComponent = /** @class */ (function () {
    function PromoComponent(userFacade, voucherFacade) {
        this.userFacade = userFacade;
        this.voucherFacade = voucherFacade;
        //notify sale page to change segment
        this.notifyParent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.getScreenSize();
        ////loading
        this.updating$ = this.voucherFacade.isUpdating$();
    }
    PromoComponent.prototype.getScreenSize = function (event) {
        this.scrHeight = window.innerHeight;
        this.scrWidth = window.innerWidth;
    };
    PromoComponent.prototype.ngOnChanges = function () { };
    PromoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.item_tresh = Math.round(this.scrHeight / 50);
        // get user and assign user_id
        this.profile$ = this.userFacade.getUser$();
        this.user_id = this.profile$._id;
        //get voucher length
        this.voucherFacade
            .getStoreVouchers()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])())
            .subscribe(function (res) {
            console.log(res.length);
            _this.vouchers$ = res;
            _this.vouchers_length$ = res.length;
            // get store vouchers and prepare them for infiniteScroll
            console.log(res);
            if (_this.vouchers_length$ == 0) {
                _this.no_promo = true;
            }
            else {
                _this.no_promo = false;
                if (_this.vouchers_length$ > _this.item_tresh) {
                    //check if data us long enough to for infinit scroll
                    _this.all_vouchers = [];
                    for (var i = 0; i < _this.item_tresh; i++) {
                        _this.all_vouchers.push(_this.vouchers$[i]);
                        console.log("infinite scroll active");
                    }
                }
                else {
                    _this.all_vouchers = _this.vouchers$;
                    console.log("load complete");
                }
            }
        });
        console.log(this.all_vouchers);
    };
    PromoComponent.prototype.loadMoreItems = function () {
        var z = this.all_vouchers.length - 1;
        for (var i = z; i < z + this.item_tresh; i++) {
            this.all_vouchers.push(this.vouchers$[i]);
        }
        return this.all_vouchers;
    };
    PromoComponent.prototype.loadData = function (event) {
        var _this = this;
        setTimeout(function () {
            _this.loadMoreItems();
            event.target.complete();
            // App logic to determine if all data is loaded
            // and disable the infinite scroll
            // if (data.length == 1000) {
            //  event.target.disabled = true;
            //  }
        }, 500);
    };
    // notify a sale page to change segment
    PromoComponent.prototype.addPromo = function () {
        this.notifyParent.emit("ad_promo");
    };
    PromoComponent.prototype.updatePromo = function (data) { };
    PromoComponent.prototype.onDeletePromo = function (data) { };
    PromoComponent.ctorParameters = function () { return [
        { type: src_app_core_modules_services_profile_profile_facade_profile_facade_service__WEBPACK_IMPORTED_MODULE_4__["UserFacadeService"] },
        { type: src_app_core_modules_services_vouchers_voucher_facade_voucher_facade_service__WEBPACK_IMPORTED_MODULE_5__["VoucherFacadeService"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], PromoComponent.prototype, "notifyParent", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"])
    ], PromoComponent.prototype, "infiniteScroll", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("window:resize", ["$event"]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
    ], PromoComponent.prototype, "getScreenSize", null);
    PromoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-promo",
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./promo.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin-store/pages/sales/components/promo/promo.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./promo.component.scss */ "./src/app/modules/admin-store/pages/sales/components/promo/promo.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_core_modules_services_profile_profile_facade_profile_facade_service__WEBPACK_IMPORTED_MODULE_4__["UserFacadeService"],
            src_app_core_modules_services_vouchers_voucher_facade_voucher_facade_service__WEBPACK_IMPORTED_MODULE_5__["VoucherFacadeService"]])
    ], PromoComponent);
    return PromoComponent;
}());



/***/ }),

/***/ "./src/app/modules/admin-store/pages/sales/components/promo/runSale/runsale.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/admin-store/pages/sales/components/promo/runSale/runsale.component.scss ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-slides {\n  height: 100vh;\n  top: 0px;\n  bottom: 0px;\n}\n\n.productItem {\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hZG1pbi1zdG9yZS9wYWdlcy9zYWxlcy9jb21wb25lbnRzL3Byb21vL3J1blNhbGUvQzpcXFVzZXJzXFxNYXJ2aW5cXERvY3VtZW50c1xcR2l0SHViXFxhZnJvYlxcY2xpZW50L3NyY1xcYXBwXFxtb2R1bGVzXFxhZG1pbi1zdG9yZVxccGFnZXNcXHNhbGVzXFxjb21wb25lbnRzXFxwcm9tb1xccnVuU2FsZVxccnVuc2FsZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9hZG1pbi1zdG9yZS9wYWdlcy9zYWxlcy9jb21wb25lbnRzL3Byb21vL3J1blNhbGUvcnVuc2FsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtBQ0NKOztBRENBO0VBQ0EsK0dBQUE7QUNFQSIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4tc3RvcmUvcGFnZXMvc2FsZXMvY29tcG9uZW50cy9wcm9tby9ydW5TYWxlL3J1bnNhbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tc2xpZGVze1xuICAgIGhlaWdodDoxMDB2aDtcbiAgICB0b3A6IDBweDtcbiAgICBib3R0b206MHB4O1xufVxuLnByb2R1Y3RJdGVte1xuYm94LXNoYWRvdzowIDJweCAycHggMCByZ2JhKDAsMCwwLC4xNCksIDAgM3B4IDFweCAtMnB4IHJnYmEoMCwwLDAsLjIpLCAwIDFweCA1cHggMCByZ2JhKDAsMCwwLC4xMik7XG59XG5cbiIsImlvbi1zbGlkZXMge1xuICBoZWlnaHQ6IDEwMHZoO1xuICB0b3A6IDBweDtcbiAgYm90dG9tOiAwcHg7XG59XG5cbi5wcm9kdWN0SXRlbSB7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/admin-store/pages/sales/components/promo/runSale/runsale.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/admin-store/pages/sales/components/promo/runSale/runsale.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: RunsaleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RunsaleComponent", function() { return RunsaleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var src_app_core_modules_services_products_product_api_product_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core-modules/services/products/product-api/product-api.service */ "./src/app/core-modules/services/products/product-api/product-api.service.ts");
/* harmony import */ var src_app_core_modules_services_vouchers_voucher_api_voucher_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core-modules/services/vouchers/voucher-api/voucher-api.service */ "./src/app/core-modules/services/vouchers/voucher-api/voucher-api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var src_app_core_modules_services_profile_profile_facade_profile_facade_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core-modules/services/profile/profile-facade/profile-facade.service */ "./src/app/core-modules/services/profile/profile-facade/profile-facade.service.ts");
/* harmony import */ var src_app_core_modules_services_vouchers_voucher_facade_voucher_facade_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core-modules/services/vouchers/voucher-facade/voucher-facade.service */ "./src/app/core-modules/services/vouchers/voucher-facade/voucher-facade.service.ts");











var RunsaleComponent = /** @class */ (function () {
    function RunsaleComponent(formBuilder, toastController, alertController, voucherService, voucherFacade, userFacade, productApi, router) {
        this.formBuilder = formBuilder;
        this.toastController = toastController;
        this.alertController = alertController;
        this.voucherService = voucherService;
        this.voucherFacade = voucherFacade;
        this.userFacade = userFacade;
        this.productApi = productApi;
        this.router = router;
        this.showBadgeSale = false;
        this.showBadgeVoucher = false;
    }
    Object.defineProperty(RunsaleComponent.prototype, "productFormGroup", {
        // returns all form groups under properties
        get: function () {
            return this.slideFour.get("products");
        },
        enumerable: true,
        configurable: true
    });
    RunsaleComponent.prototype.ngOnInit = function () {
        var _this = this;
        //get current store
        var store = this.userFacade.getCurrentStore();
        this.productApi.getStoreProductsById({ id: store._id }).subscribe(function (res) {
            _this.products = res.products;
        }, function (err) {
            console.log(err);
        });
        // slide forms
        // First slide uses segments
        this.slideTwo = this.formBuilder.group({
            title: [""],
            exp_date: [""],
        });
        this.slideThree = this.formBuilder.group({
            type: [""],
            platform: [[]],
        });
        this.slideFour = this.formBuilder.group({
            products: this.formBuilder.array([this.createProduct()]),
        });
        // set productList to the form control containing propeties
        this.productList = this.slideFour.get("products");
    };
    // concatinate all values to one object
    RunsaleComponent.prototype.createPromo = function () {
        var _this = this;
        var store = this.userFacade.getCurrentStore();
        var promo = {
            run_sale: this.run_sale,
            type: this.slideThree.value.type,
            title: this.slideTwo.value.title,
            products: this.slideFour.value.products,
            total_quota: 15,
            platform: this.slideThree.value.platform,
            exp_date: this.slideTwo.value.exp_date,
        };
        this.voucherService
            .createVoucher({ promo: promo, store_id: store._id })
            .subscribe(function (res) {
            _this.router.navigate(["/store/sales"]);
        }, function (err) {
            console.log(err);
        });
    };
    // Sale or Voucher Selection
    RunsaleComponent.prototype.segmentChanged = function (value) {
        var data = value.detail.value;
        if (data == "sale") {
            this.run_sale = true;
        }
        if (data == "voucher") {
            this.run_sale = false;
        }
    };
    RunsaleComponent.prototype.changeSecProduct = function (value) {
        this.productId = value.detail.value;
    };
    RunsaleComponent.prototype.promo_typeOnChange = function (event) {
        this.promo_type = event.detail.value;
        switch (event.detail.value) {
            case "buy1get1free":
                this.buy1get1free = false;
                this.secondary_Product = false;
                this.volume = false;
                break;
            case "combo":
                this.buy1get1free = true;
                this.item_limit = false;
                this.discount = true;
                this.secondary_Product = true;
                this.volume = false;
                break;
            case "volume":
                this.buy1get1free = true;
                this.discount = true;
                this.item_limit = true;
                this.volume = true;
                this.secondary_Product = false;
                break;
            case "itemDiscount":
                this.buy1get1free = true;
                this.discount = true;
                this.item_limit = false;
                this.secondary_Product = false;
                this.volume = false;
                break;
        }
    };
    RunsaleComponent.prototype.swipeNextSale = function () {
        var _this = this;
        setTimeout(function () {
            _this.slides.slideNext();
            _this.presentSaleToast();
        }, 1000);
    };
    RunsaleComponent.prototype.swipeNext = function () {
        this.slides.slideNext();
    };
    RunsaleComponent.prototype.swipeNextVoucher = function () {
        var _this = this;
        setTimeout(function () {
            _this.slides.slideNext(), _this.presentVoucherToast();
        }, 1000);
    };
    RunsaleComponent.prototype.presentSaleToast = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var toast;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: "Sale selected as promo type",
                            position: "bottom",
                            animated: true,
                            duration: 2000,
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        this.showBadgeSale = true;
                        this.showBadgeVoucher = false;
                        setTimeout(function () {
                            _this.notifyToSwipe();
                        }, 2010);
                        return [2 /*return*/];
                }
            });
        });
    };
    RunsaleComponent.prototype.presentVoucherToast = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var toast;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: "Voucher selected as Promo type.",
                            position: "bottom",
                            animated: true,
                            duration: 2000,
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        this.showBadgeVoucher = true;
                        this.showBadgeSale = false;
                        setTimeout(function () {
                            _this.notifyToSwipe();
                        }, 2010);
                        return [2 /*return*/];
                }
            });
        });
    };
    /*here we will have to have a way of making sure it run once*/
    RunsaleComponent.prototype.notifyToSwipe = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var alert;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: "Alert",
                            /*subHeader: 'swipe navigation',*/
                            message: "After input swipe to continue",
                            buttons: ["OK"],
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // Generate new product
    RunsaleComponent.prototype.createProduct = function () {
        return this.formBuilder.group({
            p_id: [""],
            p_quota: [""],
            discount: [""],
            items_exceeding: [""],
            s_id: [""],
        });
    };
    RunsaleComponent.prototype.addProduct = function () {
        this.productList.push(this.createProduct());
    };
    RunsaleComponent.prototype.removeProduct = function (index) {
        this.productList.removeAt(index);
    };
    RunsaleComponent.prototype.getProductFormGroup = function (index) {
        var formGroup = this.productList.controls[index];
        return formGroup;
    };
    RunsaleComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
        { type: src_app_core_modules_services_vouchers_voucher_api_voucher_api_service__WEBPACK_IMPORTED_MODULE_5__["VoucherApiService"] },
        { type: src_app_core_modules_services_vouchers_voucher_facade_voucher_facade_service__WEBPACK_IMPORTED_MODULE_8__["VoucherFacadeService"] },
        { type: src_app_core_modules_services_profile_profile_facade_profile_facade_service__WEBPACK_IMPORTED_MODULE_7__["UserFacadeService"] },
        { type: src_app_core_modules_services_products_product_api_product_api_service__WEBPACK_IMPORTED_MODULE_4__["ProductApiService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("addPromoSlider", { static: true }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonSlides"])
    ], RunsaleComponent.prototype, "slides", void 0);
    RunsaleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-runsale",
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./runsale.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin-store/pages/sales/components/promo/runSale/runsale.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./runsale.component.scss */ "./src/app/modules/admin-store/pages/sales/components/promo/runSale/runsale.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            src_app_core_modules_services_vouchers_voucher_api_voucher_api_service__WEBPACK_IMPORTED_MODULE_5__["VoucherApiService"],
            src_app_core_modules_services_vouchers_voucher_facade_voucher_facade_service__WEBPACK_IMPORTED_MODULE_8__["VoucherFacadeService"],
            src_app_core_modules_services_profile_profile_facade_profile_facade_service__WEBPACK_IMPORTED_MODULE_7__["UserFacadeService"],
            src_app_core_modules_services_products_product_api_product_api_service__WEBPACK_IMPORTED_MODULE_4__["ProductApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], RunsaleComponent);
    return RunsaleComponent;
}());



/***/ }),

/***/ "./src/app/modules/admin-store/pages/sales/components/sales-components.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/admin-store/pages/sales/components/sales-components.module.ts ***!
  \***************************************************************************************/
/*! exports provided: SalesComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalesComponentsModule", function() { return SalesComponentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/expansion.es5.js");
/* harmony import */ var _promo_promo_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./promo/promo.component */ "./src/app/modules/admin-store/pages/sales/components/promo/promo.component.ts");
/* harmony import */ var _payments_payments_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./payments/payments.component */ "./src/app/modules/admin-store/pages/sales/components/payments/payments.component.ts");
/* harmony import */ var _orders_orders_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./orders/orders.component */ "./src/app/modules/admin-store/pages/sales/components/orders/orders.component.ts");
/* harmony import */ var _modals_addpromo_addpromo_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modals/addpromo/addpromo.component */ "./src/app/modules/admin-store/pages/sales/components/modals/addpromo/addpromo.component.ts");
/* harmony import */ var _promo_runSale_runsale_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./promo/runSale/runsale.component */ "./src/app/modules/admin-store/pages/sales/components/promo/runSale/runsale.component.ts");
/* harmony import */ var _orders_deliver_deliver_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./orders/deliver/deliver.component */ "./src/app/modules/admin-store/pages/sales/components/orders/deliver/deliver.component.ts");
/* harmony import */ var _payments_receipts_receipts_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./payments/receipts/receipts.component */ "./src/app/modules/admin-store/pages/sales/components/payments/receipts/receipts.component.ts");















var SalesComponentsModule = /** @class */ (function () {
    function SalesComponentsModule() {
    }
    SalesComponentsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _promo_promo_component__WEBPACK_IMPORTED_MODULE_7__["PromoComponent"],
                _payments_payments_component__WEBPACK_IMPORTED_MODULE_8__["PaymentsComponent"],
                _orders_orders_component__WEBPACK_IMPORTED_MODULE_9__["OrdersComponent"],
                _modals_addpromo_addpromo_component__WEBPACK_IMPORTED_MODULE_10__["AddpromoComponent"],
                _promo_runSale_runsale_component__WEBPACK_IMPORTED_MODULE_11__["RunsaleComponent"],
                _orders_deliver_deliver_component__WEBPACK_IMPORTED_MODULE_12__["DeliverComponent"],
                _payments_receipts_receipts_component__WEBPACK_IMPORTED_MODULE_13__["ReceiptsComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__["MatExpansionModule"]
            ],
            exports: [
                _promo_promo_component__WEBPACK_IMPORTED_MODULE_7__["PromoComponent"],
                _payments_payments_component__WEBPACK_IMPORTED_MODULE_8__["PaymentsComponent"],
                _orders_orders_component__WEBPACK_IMPORTED_MODULE_9__["OrdersComponent"],
                _modals_addpromo_addpromo_component__WEBPACK_IMPORTED_MODULE_10__["AddpromoComponent"],
                _promo_runSale_runsale_component__WEBPACK_IMPORTED_MODULE_11__["RunsaleComponent"],
                _orders_deliver_deliver_component__WEBPACK_IMPORTED_MODULE_12__["DeliverComponent"],
                _payments_receipts_receipts_component__WEBPACK_IMPORTED_MODULE_13__["ReceiptsComponent"]
            ],
            entryComponents: [
                _modals_addpromo_addpromo_component__WEBPACK_IMPORTED_MODULE_10__["AddpromoComponent"]
            ]
        })
    ], SalesComponentsModule);
    return SalesComponentsModule;
}());



/***/ }),

/***/ "./src/app/modules/admin-store/pages/sales/sales.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/admin-store/pages/sales/sales.module.ts ***!
  \*****************************************************************/
/*! exports provided: SalesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalesPageModule", function() { return SalesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _shared_components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/components/components.module */ "./src/app/modules/admin-store/shared/components/components.module.ts");
/* harmony import */ var _components_sales_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/sales-components.module */ "./src/app/modules/admin-store/pages/sales/components/sales-components.module.ts");
/* harmony import */ var _sales_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sales.page */ "./src/app/modules/admin-store/pages/sales/sales.page.ts");









var routes = [
    {
        path: '',
        component: _sales_page__WEBPACK_IMPORTED_MODULE_8__["SalesPage"]
    }
];
var SalesPageModule = /** @class */ (function () {
    function SalesPageModule() {
    }
    SalesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _shared_components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"],
                _components_sales_components_module__WEBPACK_IMPORTED_MODULE_7__["SalesComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_sales_page__WEBPACK_IMPORTED_MODULE_8__["SalesPage"]]
        })
    ], SalesPageModule);
    return SalesPageModule;
}());



/***/ }),

/***/ "./src/app/modules/admin-store/pages/sales/sales.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/modules/admin-store/pages/sales/sales.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-card {\n  display: flex;\n  flex-direction: column;\n  width: 100% !important;\n  margin: 0 !important;\n  height: 100%;\n}\n\nion-scroll {\n  height: 100%;\n}\n\nion-item {\n  max-height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\nion-segment-button {\n  --padding-end:1px;\n  --padding-start:1px ;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hZG1pbi1zdG9yZS9wYWdlcy9zYWxlcy9DOlxcVXNlcnNcXE1hcnZpblxcRG9jdW1lbnRzXFxHaXRIdWJcXGFmcm9iXFxjbGllbnQvc3JjXFxhcHBcXG1vZHVsZXNcXGFkbWluLXN0b3JlXFxwYWdlc1xcc2FsZXNcXHNhbGVzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9hZG1pbi1zdG9yZS9wYWdlcy9zYWxlcy9zYWxlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRyxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtBQ0NIOztBREVBO0VBQ0UsWUFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUNDRjs7QURDQTtFQUNFLGlCQUFBO0VBQ0Esb0JBQUE7QUNFRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4tc3RvcmUvcGFnZXMvc2FsZXMvc2FsZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmR7XG4gICBkaXNwbGF5OiBmbGV4O1xuICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgIGhlaWdodDogMTAwJVxufVxuXG5pb24tc2Nyb2xsIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5pb24taXRlbSB7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5pb24tc2VnbWVudC1idXR0b257XG4gIC0tcGFkZGluZy1lbmQ6MXB4O1xuICAtLXBhZGRpbmctc3RhcnQ6MXB4XG59XG4iLCJpb24tY2FyZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbmlvbi1zY3JvbGwge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbmlvbi1pdGVtIHtcbiAgbWF4LWhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgLS1wYWRkaW5nLWVuZDoxcHg7XG4gIC0tcGFkZGluZy1zdGFydDoxcHggO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/admin-store/pages/sales/sales.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/admin-store/pages/sales/sales.page.ts ***!
  \***************************************************************/
/*! exports provided: SalesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalesPage", function() { return SalesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var src_app_core_modules_services_orders_order_facade_order_facade_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core-modules/services/orders/order-facade/order-facade.service */ "./src/app/core-modules/services/orders/order-facade/order-facade.service.ts");
/* harmony import */ var src_app_core_modules_services_profile_profile_facade_profile_facade_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core-modules/services/profile/profile-facade/profile-facade.service */ "./src/app/core-modules/services/profile/profile-facade/profile-facade.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_core_modules_services_vouchers_voucher_facade_voucher_facade_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core-modules/services/vouchers/voucher-facade/voucher-facade.service */ "./src/app/core-modules/services/vouchers/voucher-facade/voucher-facade.service.ts");







var SalesPage = /** @class */ (function () {
    function SalesPage(modalController, userFacade, orderFacade, voucherFacade, toastController) {
        this.modalController = modalController;
        this.userFacade = userFacade;
        this.orderFacade = orderFacade;
        this.voucherFacade = voucherFacade;
        this.toastController = toastController;
        this.segmentChanged = "orders";
    }
    SalesPage.prototype.ngOnInit = function () {
        //get orders then pass data
        this.getOrders();
        this.loadVouchers();
    };
    SalesPage.prototype.getOrders = function () {
        var _this = this;
        //get current store
        var store = this.userFacade.getCurrentStore();
        //load store profile and subscribe store products
        if (Object.keys(store).length === 0) {
            this.userFacade.getUser$().subscribe(
            //load default store
            function (res) {
                _this.userFacade.loadStoreProfile(res.store_id);
                _this.orderFacade.loadStoreOrdersById(res.store_id);
                _this.orders$ = _this.orderFacade
                    .getStoreOrders$()
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["distinctUntilChanged"])());
            }, function (err) {
                console.log(err);
            });
        }
        else {
            this.userFacade.loadStoreProfile(store._id);
            this.orderFacade.loadStoreOrdersById(store._id);
            this.orders$ = this.orderFacade
                .getStoreOrders$()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["distinctUntilChanged"])());
        }
    };
    SalesPage.prototype.loadVouchers = function () {
        var _this = this;
        var store = this.userFacade.getCurrentStore();
        //load store profile and subscribe store products
        if (Object.keys(store).length === 0) {
            this.userFacade.getUser$().subscribe(function (res) {
                _this.userFacade.loadStoreProfile(res.store_id);
                _this.voucherFacade.loadStoreVouchersById({ id: res.store_id });
            }, function (err) {
                console.log(err);
            });
        }
        else {
            this.userFacade.loadStoreProfile(store._id);
            this.voucherFacade.loadStoreVouchersById({ id: store._id });
        }
    };
    SalesPage.prototype.getNotification = function (evt) {
        this.segmentChanged = evt;
    };
    //
    SalesPage.prototype.changeSegment = function (data) {
        this.segmentChanged = data;
    };
    SalesPage.prototype.searchItems = function (ev) {
        // Reset items back to all of the items
        this.orderFacade.loadStoreOrders();
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != "") {
            this.orderFacade.loadSearchedStoreOrders(val);
        }
    };
    SalesPage.prototype.presentToast = function (msg) {
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
    SalesPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: src_app_core_modules_services_profile_profile_facade_profile_facade_service__WEBPACK_IMPORTED_MODULE_4__["UserFacadeService"] },
        { type: src_app_core_modules_services_orders_order_facade_order_facade_service__WEBPACK_IMPORTED_MODULE_3__["OrderFacadeService"] },
        { type: src_app_core_modules_services_vouchers_voucher_facade_voucher_facade_service__WEBPACK_IMPORTED_MODULE_6__["VoucherFacadeService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] }
    ]; };
    SalesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-sales",
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./sales.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin-store/pages/sales/sales.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./sales.page.scss */ "./src/app/modules/admin-store/pages/sales/sales.page.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            src_app_core_modules_services_profile_profile_facade_profile_facade_service__WEBPACK_IMPORTED_MODULE_4__["UserFacadeService"],
            src_app_core_modules_services_orders_order_facade_order_facade_service__WEBPACK_IMPORTED_MODULE_3__["OrderFacadeService"],
            src_app_core_modules_services_vouchers_voucher_facade_voucher_facade_service__WEBPACK_IMPORTED_MODULE_6__["VoucherFacadeService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]])
    ], SalesPage);
    return SalesPage;
}());



/***/ })

}]);
//# sourceMappingURL=src-app-modules-admin-store-pages-sales-sales-module.js.map