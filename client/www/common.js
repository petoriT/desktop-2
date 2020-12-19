(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/@ionic/core/dist/esm-es5/button-active-5da929d4.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/button-active-5da929d4.js ***!
  \*************************************************************************/
/*! exports provided: c */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createButtonActiveGesture; });
/* harmony import */ var _index_92848855_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-92848855.js */ "./node_modules/@ionic/core/dist/esm-es5/index-92848855.js");
/* harmony import */ var _index_eea61379_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-eea61379.js */ "./node_modules/@ionic/core/dist/esm-es5/index-eea61379.js");
/* harmony import */ var _haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./haptic-7b8ba70a.js */ "./node_modules/@ionic/core/dist/esm-es5/haptic-7b8ba70a.js");



var createButtonActiveGesture = function (el, isButton) {
    var currentTouchedButton;
    var initialTouchedButton;
    var activateButtonAtPoint = function (x, y, hapticFeedbackFn) {
        if (typeof document === 'undefined') {
            return;
        }
        var target = document.elementFromPoint(x, y);
        if (!target || !isButton(target)) {
            clearActiveButton();
            return;
        }
        if (target !== currentTouchedButton) {
            clearActiveButton();
            setActiveButton(target, hapticFeedbackFn);
        }
    };
    var setActiveButton = function (button, hapticFeedbackFn) {
        currentTouchedButton = button;
        if (!initialTouchedButton) {
            initialTouchedButton = currentTouchedButton;
        }
        var buttonToModify = currentTouchedButton;
        Object(_index_92848855_js__WEBPACK_IMPORTED_MODULE_0__["c"])(function () { return buttonToModify.classList.add('ion-activated'); });
        hapticFeedbackFn();
    };
    var clearActiveButton = function (dispatchClick) {
        if (dispatchClick === void 0) { dispatchClick = false; }
        if (!currentTouchedButton) {
            return;
        }
        var buttonToModify = currentTouchedButton;
        Object(_index_92848855_js__WEBPACK_IMPORTED_MODULE_0__["c"])(function () { return buttonToModify.classList.remove('ion-activated'); });
        /**
         * Clicking on one button, but releasing on another button
         * does not dispatch a click event in browsers, so we
         * need to do it manually here. Some browsers will
         * dispatch a click if clicking on one button, dragging over
         * another button, and releasing on the original button. In that
         * case, we need to make sure we do not cause a double click there.
         */
        if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
            currentTouchedButton.click();
        }
        currentTouchedButton = undefined;
    };
    return Object(_index_eea61379_js__WEBPACK_IMPORTED_MODULE_1__["createGesture"])({
        el: el,
        gestureName: 'buttonActiveDrag',
        threshold: 0,
        onStart: function (ev) { return activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__["a"]); },
        onMove: function (ev) { return activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__["b"]); },
        onEnd: function () {
            clearActiveButton(true);
            Object(_haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__["h"])();
            initialTouchedButton = undefined;
        }
    });
};



/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm-es5/framework-delegate-d1eb6504.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/framework-delegate-d1eb6504.js ***!
  \******************************************************************************/
/*! exports provided: a, d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return attachComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return detachComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var attachComponent = function (delegate, container, component, cssClasses, componentProps) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function () {
    var el;
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (delegate) {
                    return [2 /*return*/, delegate.attachViewToDom(container, component, componentProps, cssClasses)];
                }
                if (typeof component !== 'string' && !(component instanceof HTMLElement)) {
                    throw new Error('framework delegate is missing');
                }
                el = (typeof component === 'string')
                    ? container.ownerDocument && container.ownerDocument.createElement(component)
                    : component;
                if (cssClasses) {
                    cssClasses.forEach(function (c) { return el.classList.add(c); });
                }
                if (componentProps) {
                    Object.assign(el, componentProps);
                }
                container.appendChild(el);
                if (!el.componentOnReady) return [3 /*break*/, 2];
                return [4 /*yield*/, el.componentOnReady()];
            case 1:
                _a.sent();
                _a.label = 2;
            case 2: return [2 /*return*/, el];
        }
    });
}); };
var detachComponent = function (delegate, element) {
    if (element) {
        if (delegate) {
            var container = element.parentElement;
            return delegate.removeViewFromDom(container, element);
        }
        element.remove();
    }
    return Promise.resolve();
};



/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm-es5/haptic-7b8ba70a.js":
/*!******************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/haptic-7b8ba70a.js ***!
  \******************************************************************/
/*! exports provided: a, b, c, d, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hapticSelectionStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hapticSelectionChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hapticSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return hapticImpact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hapticSelectionEnd; });
var HapticEngine = {
    getEngine: function () {
        var win = window;
        return (win.TapticEngine) || (win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics);
    },
    available: function () {
        return !!this.getEngine();
    },
    isCordova: function () {
        return !!window.TapticEngine;
    },
    isCapacitor: function () {
        var win = window;
        return !!win.Capacitor;
    },
    impact: function (options) {
        var engine = this.getEngine();
        if (!engine) {
            return;
        }
        var style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
        engine.impact({ style: style });
    },
    notification: function (options) {
        var engine = this.getEngine();
        if (!engine) {
            return;
        }
        var style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
        engine.notification({ style: style });
    },
    selection: function () {
        this.impact({ style: 'light' });
    },
    selectionStart: function () {
        var engine = this.getEngine();
        if (!engine) {
            return;
        }
        if (this.isCapacitor()) {
            engine.selectionStart();
        }
        else {
            engine.gestureSelectionStart();
        }
    },
    selectionChanged: function () {
        var engine = this.getEngine();
        if (!engine) {
            return;
        }
        if (this.isCapacitor()) {
            engine.selectionChanged();
        }
        else {
            engine.gestureSelectionChanged();
        }
    },
    selectionEnd: function () {
        var engine = this.getEngine();
        if (!engine) {
            return;
        }
        if (this.isCapacitor()) {
            engine.selectionEnd();
        }
        else {
            engine.gestureSelectionEnd();
        }
    }
};
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
var hapticSelection = function () {
    HapticEngine.selection();
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
var hapticSelectionStart = function () {
    HapticEngine.selectionStart();
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
var hapticSelectionChanged = function () {
    HapticEngine.selectionChanged();
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
var hapticSelectionEnd = function () {
    HapticEngine.selectionEnd();
};
/**
 * Use this to indicate success/failure/warning to the user.
 * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
 */
var hapticImpact = function (options) {
    HapticEngine.impact(options);
};



/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm-es5/spinner-configs-c78e170e.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/spinner-configs-c78e170e.js ***!
  \***************************************************************************/
/*! exports provided: S */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return SPINNERS; });
var spinners = {
    'bubbles': {
        dur: 1000,
        circles: 9,
        fn: function (dur, index, total) {
            var animationDelay = (dur * index / total) - dur + "ms";
            var angle = 2 * Math.PI * index / total;
            return {
                r: 5,
                style: {
                    'top': 9 * Math.sin(angle) + "px",
                    'left': 9 * Math.cos(angle) + "px",
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'circles': {
        dur: 1000,
        circles: 8,
        fn: function (dur, index, total) {
            var step = index / total;
            var animationDelay = (dur * step) - dur + "ms";
            var angle = 2 * Math.PI * step;
            return {
                r: 5,
                style: {
                    'top': 9 * Math.sin(angle) + "px",
                    'left': 9 * Math.cos(angle) + "px",
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'circular': {
        dur: 1400,
        elmDuration: true,
        circles: 1,
        fn: function () {
            return {
                r: 20,
                cx: 48,
                cy: 48,
                fill: 'none',
                viewBox: '24 24 48 48',
                transform: 'translate(0,0)',
                style: {}
            };
        }
    },
    'crescent': {
        dur: 750,
        circles: 1,
        fn: function () {
            return {
                r: 26,
                style: {}
            };
        }
    },
    'dots': {
        dur: 750,
        circles: 3,
        fn: function (_, index) {
            var animationDelay = -(110 * index) + 'ms';
            return {
                r: 6,
                style: {
                    'left': 9 - (9 * index) + "px",
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'lines': {
        dur: 1000,
        lines: 12,
        fn: function (dur, index, total) {
            var transform = "rotate(" + (30 * index + (index < 6 ? 180 : -180)) + "deg)";
            var animationDelay = (dur * index / total) - dur + "ms";
            return {
                y1: 17,
                y2: 29,
                style: {
                    'transform': transform,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'lines-small': {
        dur: 1000,
        lines: 12,
        fn: function (dur, index, total) {
            var transform = "rotate(" + (30 * index + (index < 6 ? 180 : -180)) + "deg)";
            var animationDelay = (dur * index / total) - dur + "ms";
            return {
                y1: 12,
                y2: 20,
                style: {
                    'transform': transform,
                    'animation-delay': animationDelay,
                }
            };
        }
    }
};
var SPINNERS = spinners;



/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm-es5/theme-5641d27f.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/theme-5641d27f.js ***!
  \*****************************************************************/
/*! exports provided: c, g, h, o */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createColorClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getClassMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hostContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return openURL; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var hostContext = function (selector, el) {
    return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
var createColorClasses = function (color, cssClassMap) {
    var _a;
    return (typeof color === 'string' && color.length > 0) ? Object.assign((_a = { 'ion-color': true }, _a["ion-color-" + color] = true, _a), cssClassMap) : cssClassMap;
};
var getClassList = function (classes) {
    if (classes !== undefined) {
        var array = Array.isArray(classes) ? classes : classes.split(' ');
        return array
            .filter(function (c) { return c != null; })
            .map(function (c) { return c.trim(); })
            .filter(function (c) { return c !== ''; });
    }
    return [];
};
var getClassMap = function (classes) {
    var map = {};
    getClassList(classes).forEach(function (c) { return map[c] = true; });
    return map;
};
var SCHEME = /^[a-z][a-z0-9+\-.]*:/;
var openURL = function (url, ev, direction, animation) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function () {
    var router;
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
        if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
            router = document.querySelector('ion-router');
            if (router) {
                if (ev != null) {
                    ev.preventDefault();
                }
                return [2 /*return*/, router.push(url, direction, animation)];
            }
        }
        return [2 /*return*/, false];
    });
}); };



/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/auth/pages/profile/returns/returns.page.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/auth/pages/profile/returns/returns.page.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-fab vertical=\"top\" horizontal=\"start\" slot=\"fixed\">\r\n  <ion-fab-button size=\"small\" (click)=\"backClicked()\">\r\n    <ion-icon name=\"close-outline\"></ion-icon>\r\n  </ion-fab-button>\r\n</ion-fab>\r\n\r\n<ion-content>\r\n  <ion-slides\r\n    #check_slides\r\n    style=\"min-height: 100%\"\r\n    [options]=\"{pagination:true}\"\r\n  >\r\n    <ion-slide>\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col size=\"12\">\r\n            <ion-img src=\"../assets/authReturns.svg\"> </ion-img>\r\n          </ion-col>\r\n          <ion-col size=\"12\">\r\n            <ion-title>\r\n              <h1 style=\"text-align: center\">Return Products</h1>\r\n            </ion-title>\r\n            <ion-text style=\"text-align: center\">\r\n              <sub> Whats the reason for returns? </sub>\r\n            </ion-text>\r\n          </ion-col>\r\n          <ion-col size=\"12\">\r\n            <ion-chip\r\n              [ngClass]=\"isSelected(reason) \"\r\n              (click)=\"setReturnReason(reason)\"\r\n              *ngFor=\"let reason  of return_reason\"\r\n            >\r\n              {{reason }}\r\n            </ion-chip>\r\n          </ion-col>\r\n          <ion-col\r\n            style=\"padding-top: 20%\"\r\n            *ngIf=\"selectedReturnReasons.length\"\r\n            size=\"12\"\r\n          >\r\n            <ion-button\r\n              color=\"secondary\"\r\n              shape=\"round\"\r\n              (click)=\"next(check_slides)\"\r\n            >\r\n              next\r\n            </ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-slide>\r\n    <ion-slide>\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col size=\"12\">\r\n            <ion-img src=\"../assets/userReturns.svg\"> </ion-img>\r\n          </ion-col>\r\n          <ion-col size=\"12\">\r\n            <ion-title>\r\n              <h1 style=\"text-align: center\">Return Policy</h1>\r\n            </ion-title>\r\n            <ion-text style=\"text-align: center\">\r\n              <sub>Vendor return form</sub>\r\n            </ion-text>\r\n          </ion-col>\r\n\r\n          <ion-col size=\"12\">\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Comment</ion-label>\r\n              <ion-textarea [(ngModel)]=\"policy_comment\"></ion-textarea>\r\n            </ion-item>\r\n          </ion-col>\r\n          <ion-col style=\"padding-bottom: 65px\" size=\"12\">\r\n            <ion-button\r\n              color=\"secondary\"\r\n              shape=\"round\"\r\n              (click)=\"submit();backClicked()\"\r\n            >\r\n              Submit\r\n            </ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-slide>\r\n  </ion-slides>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/assets/gm-components/gm-feed-card/gm-feed-card.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/assets/gm-components/gm-feed-card/gm-feed-card.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Generated template for the GmFeedCardComponent component -->\r\n<ng-content>\r\n\r\n</ng-content>\r\n\r\n<!-- Sample Code - Copy and Paste this Code in your page for a complete example -->\r\n\r\n<!-- <gm-feed-card>\r\n  <img src=\"http://placehold.it/300x200/ff0000/ffffff\" alt=\"\">\r\n  <div class=\"content\">\r\n    <h2 class=\"secondary-font\">From russia with love : Around the world and back for dinner</h2>\r\n    <h6 class=\"primary-font\">Lifestyle</h6>\r\n  </div>\r\n</gm-feed-card> -->\r\n");

/***/ }),

/***/ "./src/app/core-modules/services/activities/activity-api/activity-api.service.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/core-modules/services/activities/activity-api/activity-api.service.ts ***!
  \***************************************************************************************/
/*! exports provided: ActivityApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityApiService", function() { return ActivityApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var src_app_env_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/env.service */ "./src/app/env.service.ts");




var ActivityApiService = /** @class */ (function () {
    function ActivityApiService(_http, env) {
        this._http = _http;
        this.env = env;
        this._urlPushActivity = this.env.apiUrl + "/api/activities/pushActivity";
        this._urlgetActivities = this.env.apiUrl + "/api/activities/getActivities";
        this._urlPushNotification = this.env.apiUrl + "/api/notifications/pushNotification";
        this._urlgetNotifications = this.env.apiUrl + "/api/notifications/getNotifications";
    }
    ActivityApiService.prototype.pushActivity = function (data) {
        return this._http.post(this._urlPushActivity, data);
    };
    ActivityApiService.prototype.getActivities = function (data) {
        return this._http.post(this._urlgetActivities, data);
    };
    ActivityApiService.prototype.pushNotification = function (data) {
        return this._http.post(this._urlPushNotification, data);
    };
    ActivityApiService.prototype.getNotifications = function () {
        return this._http.get(this._urlgetNotifications);
    };
    ActivityApiService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: src_app_env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"] }
    ]; };
    ActivityApiService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root",
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], src_app_env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"]])
    ], ActivityApiService);
    return ActivityApiService;
}());



/***/ }),

/***/ "./src/app/core-modules/services/activities/activity-facade/activity-facade.service.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/core-modules/services/activities/activity-facade/activity-facade.service.ts ***!
  \*********************************************************************************************/
/*! exports provided: ActivityFacadeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityFacadeService", function() { return ActivityFacadeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var src_app_core_modules_services_activities_activity_api_activity_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core-modules/services/activities/activity-api/activity-api.service */ "./src/app/core-modules/services/activities/activity-api/activity-api.service.ts");
/* harmony import */ var src_app_core_modules_services_activities_activity_state_activity_state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core-modules/services/activities/activity-state/activity-state.service */ "./src/app/core-modules/services/activities/activity-state/activity-state.service.ts");




var ActivityFacadeService = /** @class */ (function () {
    function ActivityFacadeService(activityApi, activityState) {
        this.activityApi = activityApi;
        this.activityState = activityState;
    }
    ActivityFacadeService.prototype.isUpdating$ = function () {
        return this.activityState.isUpdating$();
    };
    ActivityFacadeService.prototype.getActivities$ = function () {
        return this.activityState.getActivities$();
    };
    ActivityFacadeService.prototype.pushActivity = function (data) {
        var _this = this;
        this.activityState.setUpdating(true);
        this.activityApi.pushActivity(data).subscribe(function (res) {
            _this.activityState.addActivity(data);
        }, function (err) {
            console.log(err);
        });
    };
    ActivityFacadeService.prototype.loadActivities = function (id) {
        var _this = this;
        this.activityState.setUpdating(true);
        this.activityApi.getActivities({ id: id }).subscribe(function (res) {
            var activities = res.activities;
            _this.activityState.setActivity(activities);
        }, function (err) {
            console.log(err);
        }, function () { return _this.activityState.setUpdating(false); });
    };
    ActivityFacadeService.prototype.removeActivity = function (activity) {
        //change the state
        this.activityState.removeActivity(activity);
        //update database
        var id = { id: activity._id };
    };
    /////****Notification ***//// */
    ActivityFacadeService.prototype.getNotifications$ = function () {
        return this.activityState.getNotifications$();
    };
    ActivityFacadeService.prototype.pushNotification = function (data) {
        var _this = this;
        this.activityState.setUpdating(true);
        this.activityApi.pushNotification(data).subscribe(function (res) {
            _this.activityState.addNotification(data);
        }, function (err) {
            console.log(err);
        });
    };
    ActivityFacadeService.prototype.loadNotifications = function () {
        var _this = this;
        this.activityState.setUpdating(true);
        this.activityApi.getNotifications().subscribe(function (res) {
            console.log(res);
            var activities = res.notifications;
            _this.activityState.setNotification(activities);
        }, function (err) {
            console.log(err);
        }, function () { return _this.activityState.setUpdating(false); });
    };
    ActivityFacadeService.ctorParameters = function () { return [
        { type: src_app_core_modules_services_activities_activity_api_activity_api_service__WEBPACK_IMPORTED_MODULE_2__["ActivityApiService"] },
        { type: src_app_core_modules_services_activities_activity_state_activity_state_service__WEBPACK_IMPORTED_MODULE_3__["ActivityStateService"] }
    ]; };
    ActivityFacadeService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root",
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_core_modules_services_activities_activity_api_activity_api_service__WEBPACK_IMPORTED_MODULE_2__["ActivityApiService"],
            src_app_core_modules_services_activities_activity_state_activity_state_service__WEBPACK_IMPORTED_MODULE_3__["ActivityStateService"]])
    ], ActivityFacadeService);
    return ActivityFacadeService;
}());



/***/ }),

/***/ "./src/app/core-modules/services/activities/activity-state/activity-state.service.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/core-modules/services/activities/activity-state/activity-state.service.ts ***!
  \*******************************************************************************************/
/*! exports provided: ActivityStateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityStateService", function() { return ActivityStateService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var ActivityStateService = /** @class */ (function () {
    function ActivityStateService() {
        this.updating$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.activity$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.notification$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
    }
    // return updating$ status
    ActivityStateService.prototype.isUpdating$ = function () {
        return this.updating$.asObservable();
    };
    // change updating$ status
    ActivityStateService.prototype.setUpdating = function (isUpdating) {
        this.updating$.next(isUpdating);
    };
    // return activity$ state
    ActivityStateService.prototype.getActivities$ = function () {
        return this.activity$.asObservable();
    };
    // Load new set of activity
    ActivityStateService.prototype.setActivity = function (activity) {
        this.activity$.next(activity);
    };
    // add new activity to activity$ state
    ActivityStateService.prototype.addActivity = function (activity) {
        var currentValue = this.activity$.getValue();
        this.activity$.next(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(currentValue, [activity]));
    };
    // remove activity from activity$
    ActivityStateService.prototype.removeActivity = function (activityRemove) {
        var currentValue = this.activity$.getValue();
        this.activity$.next(currentValue.filter(function (activity) { return activity !== activityRemove; }));
    };
    ////*** notifications ***/  */
    // Load new set of activity
    ActivityStateService.prototype.setNotification = function (activity) {
        this.notification$.next([]);
        this.notification$.next(activity);
    };
    // return activity$ state
    ActivityStateService.prototype.getNotifications$ = function () {
        return this.notification$.asObservable();
    };
    // add new activity to activity$ state
    ActivityStateService.prototype.addNotification = function (activity) {
        var currentValue = this.activity$.getValue();
        this.notification$.next(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(currentValue, [activity]));
    };
    ActivityStateService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root",
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], ActivityStateService);
    return ActivityStateService;
}());



/***/ }),

/***/ "./src/app/core-modules/services/orders/order-api/order-api.service.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/core-modules/services/orders/order-api/order-api.service.ts ***!
  \*****************************************************************************/
/*! exports provided: OrderApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderApiService", function() { return OrderApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var src_app_env_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/env.service */ "./src/app/env.service.ts");




var OrderApiService = /** @class */ (function () {
    function OrderApiService(_http, env) {
        this._http = _http;
        this.env = env;
        this._urlUserOrders = this.env.apiUrl + "/api/payfast/get_user_orders";
        this._urlStoreOrders = this.env.apiUrl + "/api/payfast/get_store_orders";
        this._urlStoreOrdersById = this.env.apiUrl + "/api/payfast/get_store_ordersById";
        this._urlUpdateOrder = this.env.apiUrl + "/api/payfast/update_order_status";
        this._urlverifyOrderDelivery = this.env.apiUrl + "/api/payfast/update_order_delivery";
    }
    OrderApiService.prototype.getUserOrders = function () {
        return this._http.get(this._urlUserOrders);
    };
    OrderApiService.prototype.getStoreOrders = function () {
        return this._http.get(this._urlStoreOrders);
    };
    OrderApiService.prototype.getStoreOrdersById = function (id) {
        return this._http.post(this._urlStoreOrdersById, id);
    };
    // update order by user or admin
    OrderApiService.prototype.updateOrderStatus = function (data) {
        return this._http.post(this._urlUpdateOrder, data);
    };
    OrderApiService.prototype.verifyOrderDelivery = function (data) {
        return this._http.post(this._urlverifyOrderDelivery, data);
    };
    OrderApiService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: src_app_env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"] }
    ]; };
    OrderApiService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root",
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], src_app_env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"]])
    ], OrderApiService);
    return OrderApiService;
}());



/***/ }),

/***/ "./src/app/core-modules/services/orders/order-facade/order-facade.service.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/core-modules/services/orders/order-facade/order-facade.service.ts ***!
  \***********************************************************************************/
/*! exports provided: OrderFacadeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderFacadeService", function() { return OrderFacadeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var src_app_core_modules_services_orders_order_api_order_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core-modules/services/orders/order-api/order-api.service */ "./src/app/core-modules/services/orders/order-api/order-api.service.ts");
/* harmony import */ var src_app_core_modules_services_orders_order_state_order_state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core-modules/services/orders/order-state/order-state.service */ "./src/app/core-modules/services/orders/order-state/order-state.service.ts");




var OrderFacadeService = /** @class */ (function () {
    function OrderFacadeService(orderApi, orderState) {
        this.orderApi = orderApi;
        this.orderState = orderState;
    }
    OrderFacadeService.prototype.isUpdating$ = function () {
        return this.orderState.isUpdating$();
    };
    OrderFacadeService.prototype.resetStoreOrders = function () {
        return this.orderState.resetStoreOrders();
    };
    OrderFacadeService.prototype.getOrderDelivery = function () {
        return this.orderState.getOrderDelivery$();
    };
    OrderFacadeService.prototype.setOrderDelivery = function (order) {
        this.orderState.setOrderDelivery$(order);
    };
    OrderFacadeService.prototype.getStoreOrders$ = function () {
        // here we just pass the state without any projections
        // it may happen that it is necessary to combine two or more streams and expose to the components
        return this.orderState.getOrders$();
    };
    OrderFacadeService.prototype.loadStoreOrders = function () {
        var _this = this;
        this.orderState.setUpdating(true);
        this.orderApi.getStoreOrders().subscribe(function (res) {
            var orders = res.orders;
            _this.orderState.setOrders(orders);
        }, function (err) {
            console.log(err);
        }, function () { return _this.orderState.setUpdating(false); });
    };
    OrderFacadeService.prototype.loadStoreOrdersById = function (id) {
        var _this = this;
        this.orderState.setUpdating(true);
        this.orderApi.getStoreOrdersById({ id: id }).subscribe(function (res) {
            var orders = res.orders;
            _this.orderState.setOrders(orders);
        }, function (err) {
            console.log(err);
        }, function () { return _this.orderState.setUpdating(false); });
    };
    OrderFacadeService.prototype.loadSearchedStoreOrders = function (val) {
        var _this = this;
        this.orderState.setUpdating(true);
        this.orderApi.getStoreOrders().subscribe(function (res) {
            var orders = res.orders;
            var searched = orders.filter(function (item) {
                return (item.order_number.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
            _this.orderState.setOrders(searched);
        }, function (err) {
            console.log(err);
        }, function () { return _this.orderState.setUpdating(false); });
    };
    // update store status order optimistic way
    OrderFacadeService.prototype.updateStoreOrder = function (data) {
        var _this = this;
        this.orderState.setUpdating(true);
        //update order state
        this.orderState.updateOrder(data.data);
        //update database order item status
        this.orderApi.updateOrderStatus(data).subscribe(function (res) {
            console.log(res);
            _this.orderState.updateOrder(res.order);
        }, function (err) {
            // TODO:
            //we need to rollback
            console.log(err);
        }, function () { return _this.orderState.setUpdating(false); });
    };
    // TODO: Update store order
    OrderFacadeService.prototype.removeStoreOrder = function (order) {
        //change the state
        this.orderState.removeOrder(order);
        //update database
        var id = { id: order._id };
    };
    /**User Orders**/
    OrderFacadeService.prototype.getUserOrders$ = function () {
        // here we just pass the state without any projections
        // it may happen that it is necessary to combine two or more streams and expose to the components
        return this.orderState.getOrders$();
    };
    OrderFacadeService.prototype.loadUserOrders = function () {
        var _this = this;
        this.orderState.setUpdating(true);
        this.orderApi.getUserOrders().subscribe(function (res) {
            var orders = res.orders;
            _this.orderState.setOrders(orders);
        }, function (err) {
            console.log(err);
        }, function () { return _this.orderState.setUpdating(false); });
    };
    // update order optimistic way
    OrderFacadeService.prototype.updateUserOrder = function (data) {
        this.orderState.setUpdating(true);
        //update order state
        // TODO: Update User Order
    };
    OrderFacadeService.prototype.verifyOrderDelivery = function (data) {
        //update order delivery
        this.orderApi.verifyOrderDelivery(data).subscribe(function (res) {
            console.log(res);
            //update user notification
        }, function (err) {
            console.log(err);
        });
    };
    OrderFacadeService.ctorParameters = function () { return [
        { type: src_app_core_modules_services_orders_order_api_order_api_service__WEBPACK_IMPORTED_MODULE_2__["OrderApiService"] },
        { type: src_app_core_modules_services_orders_order_state_order_state_service__WEBPACK_IMPORTED_MODULE_3__["OrderStateService"] }
    ]; };
    OrderFacadeService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root",
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_core_modules_services_orders_order_api_order_api_service__WEBPACK_IMPORTED_MODULE_2__["OrderApiService"],
            src_app_core_modules_services_orders_order_state_order_state_service__WEBPACK_IMPORTED_MODULE_3__["OrderStateService"]])
    ], OrderFacadeService);
    return OrderFacadeService;
}());



/***/ }),

/***/ "./src/app/core-modules/services/orders/order-state/order-state.service.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/core-modules/services/orders/order-state/order-state.service.ts ***!
  \*********************************************************************************/
/*! exports provided: OrderStateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderStateService", function() { return OrderStateService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var OrderStateService = /** @class */ (function () {
    function OrderStateService() {
        this.updating$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.orders$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.current_order_delivery = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({});
    }
    OrderStateService.prototype.resetStoreOrders = function () {
        this.orders$.next([]);
        this.current_order_delivery.next({});
    };
    OrderStateService.prototype.getOrderDelivery$ = function () {
        return this.current_order_delivery.asObservable();
    };
    OrderStateService.prototype.setOrderDelivery$ = function (orders) {
        this.current_order_delivery.next(orders);
    };
    // return updating$ status
    OrderStateService.prototype.isUpdating$ = function () {
        return this.updating$.asObservable();
    };
    // change updating$ status
    OrderStateService.prototype.setUpdating = function (isUpdating) {
        this.updating$.next(isUpdating);
    };
    // return orders$ state
    OrderStateService.prototype.getOrders$ = function () {
        return this.orders$.asObservable();
    };
    // Load new set of orders
    OrderStateService.prototype.setOrders = function (orders) {
        this.orders$.next(orders);
    };
    // add new order to orders$ state
    OrderStateService.prototype.addOrder = function (order) {
        var currentValue = this.orders$.getValue();
        this.orders$.next(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(currentValue, [order]));
    };
    // update order in orders$ state
    OrderStateService.prototype.updateOrder = function (data) {
        var orders = this.orders$.getValue();
        //update order item status
        for (var i = 0; i < orders.length; i++) {
            if (orders[i]._id === data._id) {
                orders[i] = data;
            }
        }
        console.log(data, orders);
        this.orders$.next(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(orders));
    };
    // remove order from orders$
    OrderStateService.prototype.removeOrder = function (orderRemove) {
        var currentValue = this.orders$.getValue();
        this.orders$.next(currentValue.filter(function (order) { return order !== orderRemove; }));
    };
    OrderStateService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root",
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], OrderStateService);
    return OrderStateService;
}());



/***/ }),

/***/ "./src/app/modules/auth/pages/profile/returns/returns-routing.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/modules/auth/pages/profile/returns/returns-routing.module.ts ***!
  \******************************************************************************/
/*! exports provided: ReturnsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReturnsPageRoutingModule", function() { return ReturnsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _returns_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./returns.page */ "./src/app/modules/auth/pages/profile/returns/returns.page.ts");




var routes = [
    {
        path: '',
        component: _returns_page__WEBPACK_IMPORTED_MODULE_3__["ReturnsPage"]
    }
];
var ReturnsPageRoutingModule = /** @class */ (function () {
    function ReturnsPageRoutingModule() {
    }
    ReturnsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ReturnsPageRoutingModule);
    return ReturnsPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/auth/pages/profile/returns/returns.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/modules/auth/pages/profile/returns/returns.module.ts ***!
  \**********************************************************************/
/*! exports provided: ReturnsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReturnsPageModule", function() { return ReturnsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _returns_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./returns-routing.module */ "./src/app/modules/auth/pages/profile/returns/returns-routing.module.ts");
/* harmony import */ var _returns_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./returns.page */ "./src/app/modules/auth/pages/profile/returns/returns.page.ts");







var ReturnsPageModule = /** @class */ (function () {
    function ReturnsPageModule() {
    }
    ReturnsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _returns_routing_module__WEBPACK_IMPORTED_MODULE_5__["ReturnsPageRoutingModule"]
            ],
            declarations: [_returns_page__WEBPACK_IMPORTED_MODULE_6__["ReturnsPage"]]
        })
    ], ReturnsPageModule);
    return ReturnsPageModule;
}());



/***/ }),

/***/ "./src/app/modules/auth/pages/profile/returns/returns.page.scss":
/*!**********************************************************************!*\
  !*** ./src/app/modules/auth/pages/profile/returns/returns.page.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYXV0aC9wYWdlcy9wcm9maWxlL3JldHVybnMvcmV0dXJucy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/auth/pages/profile/returns/returns.page.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/auth/pages/profile/returns/returns.page.ts ***!
  \********************************************************************/
/*! exports provided: ReturnsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReturnsPage", function() { return ReturnsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var src_app_core_modules_services_header_header_state_header_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core-modules/services/header/header-state/header-state.service */ "./src/app/core-modules/services/header/header-state/header-state.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var src_app_core_modules_services_profile_profile_api_profile_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core-modules/services/profile/profile-api/profile-api.service */ "./src/app/core-modules/services/profile/profile-api/profile-api.service.ts");
/* harmony import */ var src_app_core_modules_services_orders_order_facade_order_facade_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core-modules/services/orders/order-facade/order-facade.service */ "./src/app/core-modules/services/orders/order-facade/order-facade.service.ts");
/* harmony import */ var src_app_core_modules_services_profile_profile_facade_profile_facade_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core-modules/services/profile/profile-facade/profile-facade.service */ "./src/app/core-modules/services/profile/profile-facade/profile-facade.service.ts");









var ReturnsPage = /** @class */ (function () {
    function ReturnsPage(headerState, toastController, _location, userApi, orderFacade, userFacade) {
        this.headerState = headerState;
        this.toastController = toastController;
        this._location = _location;
        this.userApi = userApi;
        this.orderFacade = orderFacade;
        this.userFacade = userFacade;
        this.policy_comment = "";
        this.selectedReturnReasons = [];
        this.return_reason = [
            "Damaged Goods",
            "Wrong Order Delivered",
            "SCAM",
            "size variation ",
        ];
    }
    ReturnsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.product = this.headerState.data_passed.product;
        this.order = this.headerState.data_passed.order;
        this.store = this.userFacade.getCurrentStore();
        console.log(this.store);
        this.userApi.storeProfile({ _id: this.store._id }).subscribe(function (res_store) {
            //loadStore
            var store = res_store.store;
            _this.returnPolicy = store.return_policy;
        }, function (err) {
            console.log(err);
        });
    };
    ReturnsPage.prototype.setReturnReason = function (reason) {
        if (this.selectedReturnReasons.includes(reason)) {
            var i = this.selectedReturnReasons.indexOf(reason);
            this.selectedReturnReasons.splice(i, 1);
        }
        else {
            console.log(this.selectedReturnReasons, "len", this.selectedReturnReasons.length);
            this.selectedReturnReasons.push(reason);
        }
    };
    ReturnsPage.prototype.isSelected = function (reason) {
        if (this.selectedReturnReasons.includes(reason)) {
            return "selected";
        }
    };
    ReturnsPage.prototype.next = function (slides) {
        slides.slideNext();
        this.presentToast("slide to go back");
    };
    ReturnsPage.prototype.presentToast = function (data) {
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
    ReturnsPage.prototype.submit = function () {
        var _this = this;
        var elementsIndex = this.order.items.findIndex(function (item) {
            return item._id == _this.product._id;
        });
        var newArray = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(this.order.items);
        var return_reason = {
            return_reasons: this.selectedReturnReasons,
            return_comment: this.policy_comment,
        };
        //modify order product
        newArray[elementsIndex] = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, newArray[elementsIndex]), { return: return_reason });
        var new_product = newArray[0];
        var data = {
            return: true,
            return_reason: return_reason,
            order_id: this.order._id,
            product: new_product,
        };
        console.log(data);
        this.orderFacade.updateStoreOrder({ data: data });
    };
    ReturnsPage.prototype.backClicked = function () {
        this._location.back();
    };
    ReturnsPage.ctorParameters = function () { return [
        { type: src_app_core_modules_services_header_header_state_header_state_service__WEBPACK_IMPORTED_MODULE_2__["HeaderStateService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
        { type: src_app_core_modules_services_profile_profile_api_profile_api_service__WEBPACK_IMPORTED_MODULE_5__["ProfileApiService"] },
        { type: src_app_core_modules_services_orders_order_facade_order_facade_service__WEBPACK_IMPORTED_MODULE_6__["OrderFacadeService"] },
        { type: src_app_core_modules_services_profile_profile_facade_profile_facade_service__WEBPACK_IMPORTED_MODULE_7__["UserFacadeService"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("check_slides", { static: true }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonSlides"])
    ], ReturnsPage.prototype, "slides", void 0);
    ReturnsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-returns",
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./returns.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/auth/pages/profile/returns/returns.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./returns.page.scss */ "./src/app/modules/auth/pages/profile/returns/returns.page.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_core_modules_services_header_header_state_header_state_service__WEBPACK_IMPORTED_MODULE_2__["HeaderStateService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"],
            src_app_core_modules_services_profile_profile_api_profile_api_service__WEBPACK_IMPORTED_MODULE_5__["ProfileApiService"],
            src_app_core_modules_services_orders_order_facade_order_facade_service__WEBPACK_IMPORTED_MODULE_6__["OrderFacadeService"],
            src_app_core_modules_services_profile_profile_facade_profile_facade_service__WEBPACK_IMPORTED_MODULE_7__["UserFacadeService"]])
    ], ReturnsPage);
    return ReturnsPage;
}());



/***/ }),

/***/ "./src/app/modules/auth/shared/password.validator.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/auth/shared/password.validator.ts ***!
  \***********************************************************/
/*! exports provided: PasswordValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordValidator", function() { return PasswordValidator; });
function PasswordValidator(control) {
    var password = control.get('password');
    var confirmPassword = control.get('confirmPassword');
    if (password.pristine || confirmPassword.pristine) {
        return null;
    }
    return password && confirmPassword && password.value !== confirmPassword.value ?
        { "misMatch": true } : null;
}


/***/ }),

/***/ "./src/assets/gm-components/gemionic.ui.module.ts":
/*!********************************************************!*\
  !*** ./src/assets/gm-components/gemionic.ui.module.ts ***!
  \********************************************************/
/*! exports provided: GemionicUiModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GemionicUiModule", function() { return GemionicUiModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _gm_feed_card_gm_feed_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gm-feed-card/gm-feed-card */ "./src/assets/gm-components/gm-feed-card/gm-feed-card.ts");



var GemionicUiModule = /** @class */ (function () {
    function GemionicUiModule() {
    }
    GemionicUiModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_gm_feed_card_gm_feed_card__WEBPACK_IMPORTED_MODULE_2__["GmFeedCardComponent"]],
            imports: [],
            exports: [_gm_feed_card_gm_feed_card__WEBPACK_IMPORTED_MODULE_2__["GmFeedCardComponent"]]
        })
    ], GemionicUiModule);
    return GemionicUiModule;
}());



/***/ }),

/***/ "./src/assets/gm-components/gm-feed-card/gm-feed-card.ts":
/*!***************************************************************!*\
  !*** ./src/assets/gm-components/gm-feed-card/gm-feed-card.ts ***!
  \***************************************************************/
/*! exports provided: GmFeedCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GmFeedCardComponent", function() { return GmFeedCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


/**
 * Generated class for the GmFeedCardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var GmFeedCardComponent = /** @class */ (function () {
    function GmFeedCardComponent() {
        console.log('Hello GmFeedCardComponent Component');
        this.text = 'Hello World';
    }
    GmFeedCardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'gm-feed-card',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./gm-feed-card.html */ "./node_modules/raw-loader/dist/cjs.js!./src/assets/gm-components/gm-feed-card/gm-feed-card.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], GmFeedCardComponent);
    return GmFeedCardComponent;
}());



/***/ })

}]);
//# sourceMappingURL=common.js.map