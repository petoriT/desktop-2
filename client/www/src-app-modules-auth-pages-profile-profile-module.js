(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-modules-auth-pages-profile-profile-module"],{

/***/ "./node_modules/@angular/cdk/__ivy_ngcc__/esm5/stepper.es5.js":
/*!********************************************************************!*\
  !*** ./node_modules/@angular/cdk/__ivy_ngcc__/esm5/stepper.es5.js ***!
  \********************************************************************/
/*! exports provided: StepperSelectionEvent, STEP_STATE, STEPPER_GLOBAL_OPTIONS, MAT_STEPPER_GLOBAL_OPTIONS, CdkStep, CdkStepper, CdkStepLabel, CdkStepperNext, CdkStepperPrevious, CdkStepperModule, CdkStepHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StepperSelectionEvent", function() { return StepperSelectionEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STEP_STATE", function() { return STEP_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STEPPER_GLOBAL_OPTIONS", function() { return STEPPER_GLOBAL_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_STEPPER_GLOBAL_OPTIONS", function() { return MAT_STEPPER_GLOBAL_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkStep", function() { return CdkStep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkStepper", function() { return CdkStepper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkStepLabel", function() { return CdkStepLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkStepperNext", function() { return CdkStepperNext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkStepperPrevious", function() { return CdkStepperPrevious; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkStepperModule", function() { return CdkStepperModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkStepHeader", function() { return CdkStepHeader; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/__ivy_ngcc__/esm5/a11y.es5.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/__ivy_ngcc__/esm5/bidi.es5.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/__ivy_ngcc__/esm5/coercion.es5.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/__ivy_ngcc__/esm5/keycodes.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */









/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



function CdkStep_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
} }
var _c0 = ["*"];
var CdkStepHeader = /** @class */ (function () {
    function CdkStepHeader(_elementRef) {
        this._elementRef = _elementRef;
    }
    /** Focuses the step header. */
    /**
     * Focuses the step header.
     * @return {?}
     */
    CdkStepHeader.prototype.focus = /**
     * Focuses the step header.
     * @return {?}
     */
    function () {
        this._elementRef.nativeElement.focus();
    };
    /** @nocollapse */
    CdkStepHeader.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
    ]; };
CdkStepHeader.ɵfac = function CdkStepHeader_Factory(t) { return new (t || CdkStepHeader)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
CdkStepHeader.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: CdkStepHeader, selectors: [["", "cdkStepHeader", ""]], hostAttrs: ["role", "tab"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkStepHeader, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[cdkStepHeader]',
                host: {
                    'role': 'tab'
                }
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, null); })();
    return CdkStepHeader;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CdkStepLabel = /** @class */ (function () {
    function CdkStepLabel(/** @docs-private */ template) {
        this.template = template;
    }
    /** @nocollapse */
    CdkStepLabel.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }
    ]; };
CdkStepLabel.ɵfac = function CdkStepLabel_Factory(t) { return new (t || CdkStepLabel)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])); };
CdkStepLabel.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: CdkStepLabel, selectors: [["", "cdkStepLabel", ""]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkStepLabel, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[cdkStepLabel]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }]; }, null); })();
    return CdkStepLabel;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Used to generate unique ID for each stepper component.
 * @type {?}
 */
var nextId = 0;
/**
 * Change event emitted on selection changes.
 */
var  /**
 * Change event emitted on selection changes.
 */
StepperSelectionEvent = /** @class */ (function () {
    function StepperSelectionEvent() {
    }
    return StepperSelectionEvent;
}());
/**
 * Enum to represent the different states of the steps.
 * @type {?}
 */
var STEP_STATE = {
    NUMBER: 'number',
    EDIT: 'edit',
    DONE: 'done',
    ERROR: 'error'
};
/**
 * InjectionToken that can be used to specify the global stepper options.
 * @type {?}
 */
var STEPPER_GLOBAL_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('STEPPER_GLOBAL_OPTIONS');
/**
 * InjectionToken that can be used to specify the global stepper options.
 * @deprecated Use `STEPPER_GLOBAL_OPTIONS` instead.
 * \@breaking-change 8.0.0.
 * @type {?}
 */
var MAT_STEPPER_GLOBAL_OPTIONS = STEPPER_GLOBAL_OPTIONS;
var CdkStep = /** @class */ (function () {
    /** @breaking-change 8.0.0 remove the `?` after `stepperOptions` */
    function CdkStep(_stepper, stepperOptions) {
        this._stepper = _stepper;
        /**
         * Whether user has seen the expanded step content or not.
         */
        this.interacted = false;
        this._editable = true;
        this._optional = false;
        this._completedOverride = null;
        this._customError = null;
        this._stepperOptions = stepperOptions ? stepperOptions : {};
        this._displayDefaultIndicatorType = this._stepperOptions.displayDefaultIndicatorType !== false;
        this._showError = !!this._stepperOptions.showError;
    }
    Object.defineProperty(CdkStep.prototype, "editable", {
        /** Whether the user can return to this step once it has been marked as completed. */
        get: /**
         * Whether the user can return to this step once it has been marked as completed.
         * @return {?}
         */
        function () {
            return this._editable;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._editable = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkStep.prototype, "optional", {
        /** Whether the completion of step is optional. */
        get: /**
         * Whether the completion of step is optional.
         * @return {?}
         */
        function () {
            return this._optional;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._optional = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkStep.prototype, "completed", {
        /** Whether step is marked as completed. */
        get: /**
         * Whether step is marked as completed.
         * @return {?}
         */
        function () {
            return this._completedOverride == null ? this._getDefaultCompleted() : this._completedOverride;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._completedOverride = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @return {?}
     */
    CdkStep.prototype._getDefaultCompleted = /**
     * @private
     * @return {?}
     */
    function () {
        return this.stepControl ? this.stepControl.valid && this.interacted : this.interacted;
    };
    Object.defineProperty(CdkStep.prototype, "hasError", {
        /** Whether step has an error. */
        get: /**
         * Whether step has an error.
         * @return {?}
         */
        function () {
            return this._customError == null ? this._getDefaultError() : this._customError;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._customError = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @return {?}
     */
    CdkStep.prototype._getDefaultError = /**
     * @private
     * @return {?}
     */
    function () {
        return this.stepControl && this.stepControl.invalid && this.interacted;
    };
    /** Selects this step component. */
    /**
     * Selects this step component.
     * @return {?}
     */
    CdkStep.prototype.select = /**
     * Selects this step component.
     * @return {?}
     */
    function () {
        this._stepper.selected = this;
    };
    /** Resets the step to its initial state. Note that this includes resetting form data. */
    /**
     * Resets the step to its initial state. Note that this includes resetting form data.
     * @return {?}
     */
    CdkStep.prototype.reset = /**
     * Resets the step to its initial state. Note that this includes resetting form data.
     * @return {?}
     */
    function () {
        this.interacted = false;
        if (this._completedOverride != null) {
            this._completedOverride = false;
        }
        if (this._customError != null) {
            this._customError = false;
        }
        if (this.stepControl) {
            this.stepControl.reset();
        }
    };
    /**
     * @return {?}
     */
    CdkStep.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        // Since basically all inputs of the MatStep get proxied through the view down to the
        // underlying MatStepHeader, we have to make sure that change detection runs correctly.
        this._stepper._stateChanged();
    };
    /** @nocollapse */
    CdkStep.ctorParameters = function () { return [
        { type: CdkStepper, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((/**
                         * @return {?}
                         */
                        function () { return CdkStepper; })),] }] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [STEPPER_GLOBAL_OPTIONS,] }] }
    ]; };
    CdkStep.propDecorators = {
        stepLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [CdkStepLabel, { static: false },] }],
        content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], { static: true },] }],
        stepControl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        label: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        errorMessage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        ariaLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['aria-label',] }],
        ariaLabelledby: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['aria-labelledby',] }],
        state: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        editable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        optional: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        completed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        hasError: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
CdkStep.ɵfac = function CdkStep_Factory(t) { return new (t || CdkStep)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(( /**
                 * @return {?}
                 */function () { return CdkStepper; }))), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](STEPPER_GLOBAL_OPTIONS, 8)); };
CdkStep.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CdkStep, selectors: [["cdk-step"]], contentQueries: function CdkStep_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, CdkStepLabel, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.stepLabel = _t.first);
    } }, viewQuery: function CdkStep_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
    } }, inputs: { editable: "editable", optional: "optional", completed: "completed", hasError: "hasError", stepControl: "stepControl", label: "label", errorMessage: "errorMessage", ariaLabel: ["aria-label", "ariaLabel"], ariaLabelledby: ["aria-labelledby", "ariaLabelledby"], state: "state" }, exportAs: ["cdkStep"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c0, decls: 1, vars: 0, template: function CdkStep_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CdkStep_ng_template_0_Template, 1, 0, "ng-template");
    } }, encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkStep, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{ selector: 'cdk-step',
                exportAs: 'cdkStep',
                template: '<ng-template><ng-content></ng-content></ng-template>',
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: CdkStepper, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(( /**
                                     * @return {?}
                                     */function () { return CdkStepper; }))]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [STEPPER_GLOBAL_OPTIONS]
            }] }]; }, { editable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], optional: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], completed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], hasError: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], stepLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [CdkStepLabel, { static: false }]
        }], content: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], { static: true }]
        }], stepControl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], label: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], errorMessage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], ariaLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['aria-label']
        }], ariaLabelledby: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['aria-labelledby']
        }], state: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
    return CdkStep;
}());
var CdkStepper = /** @class */ (function () {
    function CdkStepper(_dir, _changeDetectorRef, _elementRef, _document) {
        this._dir = _dir;
        this._changeDetectorRef = _changeDetectorRef;
        this._elementRef = _elementRef;
        /**
         * Emits when the component is destroyed.
         */
        this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this._linear = false;
        this._selectedIndex = 0;
        /**
         * Event emitted when the selected step has changed.
         */
        this.selectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._orientation = 'horizontal';
        this._groupId = nextId++;
        this._document = _document;
    }
    Object.defineProperty(CdkStepper.prototype, "steps", {
        /** The list of step components that the stepper is holding. */
        get: /**
         * The list of step components that the stepper is holding.
         * @return {?}
         */
        function () {
            return this._steps;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkStepper.prototype, "linear", {
        /** Whether the validity of previous steps should be checked or not. */
        get: /**
         * Whether the validity of previous steps should be checked or not.
         * @return {?}
         */
        function () {
            return this._linear;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._linear = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkStepper.prototype, "selectedIndex", {
        /** The index of the selected step. */
        get: /**
         * The index of the selected step.
         * @return {?}
         */
        function () {
            return this._selectedIndex;
        },
        set: /**
         * @param {?} index
         * @return {?}
         */
        function (index) {
            /** @type {?} */
            var newIndex = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceNumberProperty"])(index);
            if (this.steps) {
                // Ensure that the index can't be out of bounds.
                if (newIndex < 0 || newIndex > this.steps.length - 1) {
                    throw Error('cdkStepper: Cannot assign out-of-bounds value to `selectedIndex`.');
                }
                if (this._selectedIndex != newIndex && !this._anyControlsInvalidOrPending(newIndex) &&
                    (newIndex >= this._selectedIndex || this.steps.toArray()[newIndex].editable)) {
                    this._updateSelectedItemIndex(index);
                }
            }
            else {
                this._selectedIndex = newIndex;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkStepper.prototype, "selected", {
        /** The step that is selected. */
        get: /**
         * The step that is selected.
         * @return {?}
         */
        function () {
            // @breaking-change 8.0.0 Change return type to `CdkStep | undefined`.
            return this.steps ? this.steps.toArray()[this.selectedIndex] : (/** @type {?} */ (undefined));
        },
        set: /**
         * @param {?} step
         * @return {?}
         */
        function (step) {
            this.selectedIndex = this.steps ? this.steps.toArray().indexOf(step) : -1;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CdkStepper.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // Note that while the step headers are content children by default, any components that
        // extend this one might have them as view chidren. We initialize the keyboard handling in
        // AfterViewInit so we're guaranteed for both view and content children to be defined.
        this._keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["FocusKeyManager"](this._stepHeader)
            .withWrap()
            .withVerticalOrientation(this._orientation === 'vertical');
        (this._dir ? ((/** @type {?} */ (this._dir.change))) : Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(this._layoutDirection()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this._destroyed))
            .subscribe((/**
         * @param {?} direction
         * @return {?}
         */
        function (direction) { return _this._keyManager.withHorizontalOrientation(direction); }));
        this._keyManager.updateActiveItemIndex(this._selectedIndex);
        this.steps.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this._destroyed)).subscribe((/**
         * @return {?}
         */
        function () {
            if (!_this.selected) {
                _this._selectedIndex = Math.max(_this._selectedIndex - 1, 0);
            }
        }));
    };
    /**
     * @return {?}
     */
    CdkStepper.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._destroyed.next();
        this._destroyed.complete();
    };
    /** Selects and focuses the next step in list. */
    /**
     * Selects and focuses the next step in list.
     * @return {?}
     */
    CdkStepper.prototype.next = /**
     * Selects and focuses the next step in list.
     * @return {?}
     */
    function () {
        this.selectedIndex = Math.min(this._selectedIndex + 1, this.steps.length - 1);
    };
    /** Selects and focuses the previous step in list. */
    /**
     * Selects and focuses the previous step in list.
     * @return {?}
     */
    CdkStepper.prototype.previous = /**
     * Selects and focuses the previous step in list.
     * @return {?}
     */
    function () {
        this.selectedIndex = Math.max(this._selectedIndex - 1, 0);
    };
    /** Resets the stepper to its initial state. Note that this includes clearing form data. */
    /**
     * Resets the stepper to its initial state. Note that this includes clearing form data.
     * @return {?}
     */
    CdkStepper.prototype.reset = /**
     * Resets the stepper to its initial state. Note that this includes clearing form data.
     * @return {?}
     */
    function () {
        this._updateSelectedItemIndex(0);
        this.steps.forEach((/**
         * @param {?} step
         * @return {?}
         */
        function (step) { return step.reset(); }));
        this._stateChanged();
    };
    /** Returns a unique id for each step label element. */
    /**
     * Returns a unique id for each step label element.
     * @param {?} i
     * @return {?}
     */
    CdkStepper.prototype._getStepLabelId = /**
     * Returns a unique id for each step label element.
     * @param {?} i
     * @return {?}
     */
    function (i) {
        return "cdk-step-label-" + this._groupId + "-" + i;
    };
    /** Returns unique id for each step content element. */
    /**
     * Returns unique id for each step content element.
     * @param {?} i
     * @return {?}
     */
    CdkStepper.prototype._getStepContentId = /**
     * Returns unique id for each step content element.
     * @param {?} i
     * @return {?}
     */
    function (i) {
        return "cdk-step-content-" + this._groupId + "-" + i;
    };
    /** Marks the component to be change detected. */
    /**
     * Marks the component to be change detected.
     * @return {?}
     */
    CdkStepper.prototype._stateChanged = /**
     * Marks the component to be change detected.
     * @return {?}
     */
    function () {
        this._changeDetectorRef.markForCheck();
    };
    /** Returns position state of the step with the given index. */
    /**
     * Returns position state of the step with the given index.
     * @param {?} index
     * @return {?}
     */
    CdkStepper.prototype._getAnimationDirection = /**
     * Returns position state of the step with the given index.
     * @param {?} index
     * @return {?}
     */
    function (index) {
        /** @type {?} */
        var position = index - this._selectedIndex;
        if (position < 0) {
            return this._layoutDirection() === 'rtl' ? 'next' : 'previous';
        }
        else if (position > 0) {
            return this._layoutDirection() === 'rtl' ? 'previous' : 'next';
        }
        return 'current';
    };
    /** Returns the type of icon to be displayed. */
    /**
     * Returns the type of icon to be displayed.
     * @param {?} index
     * @param {?=} state
     * @return {?}
     */
    CdkStepper.prototype._getIndicatorType = /**
     * Returns the type of icon to be displayed.
     * @param {?} index
     * @param {?=} state
     * @return {?}
     */
    function (index, state) {
        if (state === void 0) { state = STEP_STATE.NUMBER; }
        /** @type {?} */
        var step = this.steps.toArray()[index];
        /** @type {?} */
        var isCurrentStep = this._isCurrentStep(index);
        return step._displayDefaultIndicatorType ? this._getDefaultIndicatorLogic(step, isCurrentStep) :
            this._getGuidelineLogic(step, isCurrentStep, state);
    };
    /**
     * @private
     * @param {?} step
     * @param {?} isCurrentStep
     * @return {?}
     */
    CdkStepper.prototype._getDefaultIndicatorLogic = /**
     * @private
     * @param {?} step
     * @param {?} isCurrentStep
     * @return {?}
     */
    function (step, isCurrentStep) {
        if (step._showError && step.hasError && !isCurrentStep) {
            return STEP_STATE.ERROR;
        }
        else if (!step.completed || isCurrentStep) {
            return STEP_STATE.NUMBER;
        }
        else {
            return step.editable ? STEP_STATE.EDIT : STEP_STATE.DONE;
        }
    };
    /**
     * @private
     * @param {?} step
     * @param {?} isCurrentStep
     * @param {?=} state
     * @return {?}
     */
    CdkStepper.prototype._getGuidelineLogic = /**
     * @private
     * @param {?} step
     * @param {?} isCurrentStep
     * @param {?=} state
     * @return {?}
     */
    function (step, isCurrentStep, state) {
        if (state === void 0) { state = STEP_STATE.NUMBER; }
        if (step._showError && step.hasError && !isCurrentStep) {
            return STEP_STATE.ERROR;
        }
        else if (step.completed && !isCurrentStep) {
            return STEP_STATE.DONE;
        }
        else if (step.completed && isCurrentStep) {
            return state;
        }
        else if (step.editable && isCurrentStep) {
            return STEP_STATE.EDIT;
        }
        else {
            return state;
        }
    };
    /**
     * @private
     * @param {?} index
     * @return {?}
     */
    CdkStepper.prototype._isCurrentStep = /**
     * @private
     * @param {?} index
     * @return {?}
     */
    function (index) {
        return this._selectedIndex === index;
    };
    /** Returns the index of the currently-focused step header. */
    /**
     * Returns the index of the currently-focused step header.
     * @return {?}
     */
    CdkStepper.prototype._getFocusIndex = /**
     * Returns the index of the currently-focused step header.
     * @return {?}
     */
    function () {
        return this._keyManager ? this._keyManager.activeItemIndex : this._selectedIndex;
    };
    /**
     * @private
     * @param {?} newIndex
     * @return {?}
     */
    CdkStepper.prototype._updateSelectedItemIndex = /**
     * @private
     * @param {?} newIndex
     * @return {?}
     */
    function (newIndex) {
        /** @type {?} */
        var stepsArray = this.steps.toArray();
        this.selectionChange.emit({
            selectedIndex: newIndex,
            previouslySelectedIndex: this._selectedIndex,
            selectedStep: stepsArray[newIndex],
            previouslySelectedStep: stepsArray[this._selectedIndex],
        });
        // If focus is inside the stepper, move it to the next header, otherwise it may become
        // lost when the active step content is hidden. We can't be more granular with the check
        // (e.g. checking whether focus is inside the active step), because we don't have a
        // reference to the elements that are rendering out the content.
        this._containsFocus() ? this._keyManager.setActiveItem(newIndex) :
            this._keyManager.updateActiveItemIndex(newIndex);
        this._selectedIndex = newIndex;
        this._stateChanged();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    CdkStepper.prototype._onKeydown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var hasModifier = Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__["hasModifierKey"])(event);
        /** @type {?} */
        var keyCode = event.keyCode;
        /** @type {?} */
        var manager = this._keyManager;
        if (manager.activeItemIndex != null && !hasModifier &&
            (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__["SPACE"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__["ENTER"])) {
            this.selectedIndex = manager.activeItemIndex;
            event.preventDefault();
        }
        else if (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__["HOME"]) {
            manager.setFirstItemActive();
            event.preventDefault();
        }
        else if (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__["END"]) {
            manager.setLastItemActive();
            event.preventDefault();
        }
        else {
            manager.onKeydown(event);
        }
    };
    /**
     * @private
     * @param {?} index
     * @return {?}
     */
    CdkStepper.prototype._anyControlsInvalidOrPending = /**
     * @private
     * @param {?} index
     * @return {?}
     */
    function (index) {
        /** @type {?} */
        var steps = this.steps.toArray();
        steps[this._selectedIndex].interacted = true;
        if (this._linear && index >= 0) {
            return steps.slice(0, index).some((/**
             * @param {?} step
             * @return {?}
             */
            function (step) {
                /** @type {?} */
                var control = step.stepControl;
                /** @type {?} */
                var isIncomplete = control ? (control.invalid || control.pending || !step.interacted) : !step.completed;
                return isIncomplete && !step.optional && !step._completedOverride;
            }));
        }
        return false;
    };
    /**
     * @private
     * @return {?}
     */
    CdkStepper.prototype._layoutDirection = /**
     * @private
     * @return {?}
     */
    function () {
        return this._dir && this._dir.value === 'rtl' ? 'rtl' : 'ltr';
    };
    /** Checks whether the stepper contains the focused element. */
    /**
     * Checks whether the stepper contains the focused element.
     * @private
     * @return {?}
     */
    CdkStepper.prototype._containsFocus = /**
     * Checks whether the stepper contains the focused element.
     * @private
     * @return {?}
     */
    function () {
        if (!this._document || !this._elementRef) {
            return false;
        }
        /** @type {?} */
        var stepperElement = this._elementRef.nativeElement;
        /** @type {?} */
        var focusedElement = this._document.activeElement;
        return stepperElement === focusedElement || stepperElement.contains(focusedElement);
    };
    /** @nocollapse */
    CdkStepper.ctorParameters = function () { return [
        { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"],] }] }
    ]; };
    CdkStepper.propDecorators = {
        _steps: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [CdkStep,] }],
        _stepHeader: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [CdkStepHeader,] }],
        linear: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        selectedIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        selected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        selectionChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
CdkStepper.ɵfac = function CdkStepper_Factory(t) { return new (t || CdkStepper)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"])); };
CdkStepper.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: CdkStepper, selectors: [["", "cdkStepper", ""]], contentQueries: function CdkStepper_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, CdkStep, false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, CdkStepHeader, false);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._steps = _t);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._stepHeader = _t);
    } }, inputs: { linear: "linear", selectedIndex: "selectedIndex", selected: "selected" }, outputs: { selectionChange: "selectionChange" }, exportAs: ["cdkStepper"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkStepper, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[cdkStepper]',
                exportAs: 'cdkStepper'
            }]
    }], function () { return [{ type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["Directionality"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]
            }] }]; }, { selectionChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], linear: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], selectedIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], selected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], _steps: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
            args: [CdkStep]
        }], _stepHeader: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
            args: [CdkStepHeader]
        }] }); })();
    return CdkStepper;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Button that moves to the next step in a stepper workflow.
 */
var CdkStepperNext = /** @class */ (function () {
    function CdkStepperNext(_stepper) {
        this._stepper = _stepper;
        /**
         * Type of the next button. Defaults to "submit" if not specified.
         */
        this.type = 'submit';
    }
    // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
    // In Ivy the `host` bindings will be merged when this class is extended, whereas in
    // ViewEngine they're overwritten.
    // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
    // tslint:disable-next-line:no-host-decorator-in-concrete
    // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
    // In Ivy the `host` bindings will be merged when this class is extended, whereas in
    // ViewEngine they're overwritten.
    // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
    // tslint:disable-next-line:no-host-decorator-in-concrete
    /**
     * @return {?}
     */
    CdkStepperNext.prototype._handleClick = 
    // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
    // In Ivy the `host` bindings will be merged when this class is extended, whereas in
    // ViewEngine they're overwritten.
    // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
    // tslint:disable-next-line:no-host-decorator-in-concrete
    /**
     * @return {?}
     */
    function () {
        this._stepper.next();
    };
    /** @nocollapse */
    CdkStepperNext.ctorParameters = function () { return [
        { type: CdkStepper }
    ]; };
    CdkStepperNext.propDecorators = {
        type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        _handleClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['click',] }]
    };
CdkStepperNext.ɵfac = function CdkStepperNext_Factory(t) { return new (t || CdkStepperNext)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](CdkStepper)); };
CdkStepperNext.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: CdkStepperNext, selectors: [["button", "cdkStepperNext", ""]], hostVars: 1, hostBindings: function CdkStepperNext_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CdkStepperNext_click_HostBindingHandler() { return ctx._handleClick(); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("type", ctx.type);
    } }, inputs: { type: "type" } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkStepperNext, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: 'button[cdkStepperNext]',
                host: {
                    '[type]': 'type'
                }
            }]
    }], function () { return [{ type: CdkStepper }]; }, { type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], _handleClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['click']
        }] }); })();
    return CdkStepperNext;
}());
/**
 * Button that moves to the previous step in a stepper workflow.
 */
var CdkStepperPrevious = /** @class */ (function () {
    function CdkStepperPrevious(_stepper) {
        this._stepper = _stepper;
        /**
         * Type of the previous button. Defaults to "button" if not specified.
         */
        this.type = 'button';
    }
    // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
    // In Ivy the `host` bindings will be merged when this class is extended, whereas in
    // ViewEngine they're overwritten.
    // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
    // tslint:disable-next-line:no-host-decorator-in-concrete
    // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
    // In Ivy the `host` bindings will be merged when this class is extended, whereas in
    // ViewEngine they're overwritten.
    // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
    // tslint:disable-next-line:no-host-decorator-in-concrete
    /**
     * @return {?}
     */
    CdkStepperPrevious.prototype._handleClick = 
    // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
    // In Ivy the `host` bindings will be merged when this class is extended, whereas in
    // ViewEngine they're overwritten.
    // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
    // tslint:disable-next-line:no-host-decorator-in-concrete
    /**
     * @return {?}
     */
    function () {
        this._stepper.previous();
    };
    /** @nocollapse */
    CdkStepperPrevious.ctorParameters = function () { return [
        { type: CdkStepper }
    ]; };
    CdkStepperPrevious.propDecorators = {
        type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        _handleClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['click',] }]
    };
CdkStepperPrevious.ɵfac = function CdkStepperPrevious_Factory(t) { return new (t || CdkStepperPrevious)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](CdkStepper)); };
CdkStepperPrevious.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: CdkStepperPrevious, selectors: [["button", "cdkStepperPrevious", ""]], hostVars: 1, hostBindings: function CdkStepperPrevious_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CdkStepperPrevious_click_HostBindingHandler() { return ctx._handleClick(); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("type", ctx.type);
    } }, inputs: { type: "type" } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkStepperPrevious, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: 'button[cdkStepperPrevious]',
                host: {
                    '[type]': 'type'
                }
            }]
    }], function () { return [{ type: CdkStepper }]; }, { type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], _handleClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['click']
        }] }); })();
    return CdkStepperPrevious;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CdkStepperModule = /** @class */ (function () {
    function CdkStepperModule() {
    }
CdkStepperModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CdkStepperModule });
CdkStepperModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CdkStepperModule_Factory(t) { return new (t || CdkStepperModule)(); }, imports: [[_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["BidiModule"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CdkStepperModule, { declarations: function () { return [CdkStep,
        CdkStepper,
        CdkStepHeader,
        CdkStepLabel,
        CdkStepperNext,
        CdkStepperPrevious]; }, imports: function () { return [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["BidiModule"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"]]; }, exports: function () { return [CdkStep,
        CdkStepper,
        CdkStepHeader,
        CdkStepLabel,
        CdkStepperNext,
        CdkStepperPrevious]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkStepperModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["BidiModule"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"]],
                exports: [
                    CdkStep,
                    CdkStepper,
                    CdkStepHeader,
                    CdkStepLabel,
                    CdkStepperNext,
                    CdkStepperPrevious,
                ],
                declarations: [
                    CdkStep,
                    CdkStepper,
                    CdkStepHeader,
                    CdkStepLabel,
                    CdkStepperNext,
                    CdkStepperPrevious,
                ]
            }]
    }], function () { return []; }, null); })();
    return CdkStepperModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=stepper.es5.js.map

/***/ }),

/***/ "./node_modules/@angular/material/__ivy_ngcc__/esm5/button.es5.js":
/*!************************************************************************!*\
  !*** ./node_modules/@angular/material/__ivy_ngcc__/esm5/button.es5.js ***!
  \************************************************************************/
/*! exports provided: MatButtonModule, MatButton, MatAnchor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatButtonModule", function() { return MatButtonModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatButton", function() { return MatButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatAnchor", function() { return MatAnchor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/__ivy_ngcc__/esm5/a11y.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/core.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/animations.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */







/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Default color palette for round buttons (mat-fab and mat-mini-fab)
 * @type {?}
 */




var _c0 = ["mat-button", ""];
var _c1 = ["*"];
var DEFAULT_ROUND_BUTTON_COLOR = 'accent';
/**
 * List of classes to add to MatButton instances based on host attributes to
 * style as different variants.
 * @type {?}
 */
var BUTTON_HOST_ATTRIBUTES = [
    'mat-button',
    'mat-flat-button',
    'mat-icon-button',
    'mat-raised-button',
    'mat-stroked-button',
    'mat-mini-fab',
    'mat-fab',
];
// Boilerplate for applying mixins to MatButton.
/**
 * \@docs-private
 */
var 
// Boilerplate for applying mixins to MatButton.
/**
 * \@docs-private
 */
MatButtonBase = /** @class */ (function () {
    function MatButtonBase(_elementRef) {
        this._elementRef = _elementRef;
    }
    return MatButtonBase;
}());
/** @type {?} */
var _MatButtonMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["mixinColor"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["mixinDisabled"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["mixinDisableRipple"])(MatButtonBase)));
/**
 * Material design button.
 */
var MatButton = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MatButton, _super);
    function MatButton(elementRef, _focusMonitor, _animationMode) {
        var _this = _super.call(this, elementRef) || this;
        _this._focusMonitor = _focusMonitor;
        _this._animationMode = _animationMode;
        /**
         * Whether the button is round.
         */
        _this.isRoundButton = _this._hasHostAttributes('mat-fab', 'mat-mini-fab');
        /**
         * Whether the button is icon button.
         */
        _this.isIconButton = _this._hasHostAttributes('mat-icon-button');
        // For each of the variant selectors that is present in the button's host
        // attributes, add the correct corresponding class.
        for (var _i = 0, BUTTON_HOST_ATTRIBUTES_1 = BUTTON_HOST_ATTRIBUTES; _i < BUTTON_HOST_ATTRIBUTES_1.length; _i++) {
            var attr = BUTTON_HOST_ATTRIBUTES_1[_i];
            if (_this._hasHostAttributes(attr)) {
                ((/** @type {?} */ (_this._getHostElement()))).classList.add(attr);
            }
        }
        // Add a class that applies to all buttons. This makes it easier to target if somebody
        // wants to target all Material buttons. We do it here rather than `host` to ensure that
        // the class is applied to derived classes.
        elementRef.nativeElement.classList.add('mat-button-base');
        _this._focusMonitor.monitor(_this._elementRef, true);
        if (_this.isRoundButton) {
            _this.color = DEFAULT_ROUND_BUTTON_COLOR;
        }
        return _this;
    }
    /**
     * @return {?}
     */
    MatButton.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._focusMonitor.stopMonitoring(this._elementRef);
    };
    /** Focuses the button. */
    /**
     * Focuses the button.
     * @param {?=} origin
     * @param {?=} options
     * @return {?}
     */
    MatButton.prototype.focus = /**
     * Focuses the button.
     * @param {?=} origin
     * @param {?=} options
     * @return {?}
     */
    function (origin, options) {
        if (origin === void 0) { origin = 'program'; }
        this._focusMonitor.focusVia(this._getHostElement(), origin, options);
    };
    /**
     * @return {?}
     */
    MatButton.prototype._getHostElement = /**
     * @return {?}
     */
    function () {
        return this._elementRef.nativeElement;
    };
    /**
     * @return {?}
     */
    MatButton.prototype._isRippleDisabled = /**
     * @return {?}
     */
    function () {
        return this.disableRipple || this.disabled;
    };
    /** Gets whether the button has one of the given attributes. */
    /**
     * Gets whether the button has one of the given attributes.
     * @param {...?} attributes
     * @return {?}
     */
    MatButton.prototype._hasHostAttributes = /**
     * Gets whether the button has one of the given attributes.
     * @param {...?} attributes
     * @return {?}
     */
    function () {
        var _this = this;
        var attributes = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            attributes[_i] = arguments[_i];
        }
        return attributes.some((/**
         * @param {?} attribute
         * @return {?}
         */
        function (attribute) { return _this._getHostElement().hasAttribute(attribute); }));
    };
    /** @nocollapse */
    MatButton.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] },
        { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["FocusMonitor"] },
        { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["ANIMATION_MODULE_TYPE"],] }] }
    ]; };
    MatButton.propDecorators = {
        ripple: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatRipple"], { static: false },] }]
    };
MatButton.ɵfac = function MatButton_Factory(t) { return new (t || MatButton)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["FocusMonitor"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["ANIMATION_MODULE_TYPE"], 8)); };
MatButton.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: MatButton, selectors: [["button", "mat-button", ""], ["button", "mat-raised-button", ""], ["button", "mat-icon-button", ""], ["button", "mat-fab", ""], ["button", "mat-mini-fab", ""], ["button", "mat-stroked-button", ""], ["button", "mat-flat-button", ""]], viewQuery: function MatButton_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatRipple"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.ripple = _t.first);
    } }, hostVars: 3, hostBindings: function MatButton_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("disabled", ctx.disabled || null);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");
    } }, inputs: { disabled: "disabled", disableRipple: "disableRipple", color: "color" }, exportAs: ["matButton"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], attrs: _c0, ngContentSelectors: _c1, decls: 4, vars: 5, consts: [[1, "mat-button-wrapper"], ["matRipple", "", 1, "mat-button-ripple", 3, "matRippleDisabled", "matRippleCentered", "matRippleTrigger"], [1, "mat-button-focus-overlay"]], template: function MatButton_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "div", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("mat-button-ripple-round", ctx.isRoundButton || ctx.isIconButton);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matRippleDisabled", ctx._isRippleDisabled())("matRippleCentered", ctx.isIconButton)("matRippleTrigger", ctx._getHostElement());
    } }, directives: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatRipple"]], styles: [".mat-button .mat-button-focus-overlay,.mat-icon-button .mat-button-focus-overlay{opacity:0}.mat-button:hover .mat-button-focus-overlay,.mat-stroked-button:hover .mat-button-focus-overlay{opacity:.04}@media (hover:none){.mat-button:hover .mat-button-focus-overlay,.mat-stroked-button:hover .mat-button-focus-overlay{opacity:0}}.mat-button,.mat-flat-button,.mat-icon-button,.mat-stroked-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:0;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible}.mat-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner{border:0}.mat-button[disabled],.mat-flat-button[disabled],.mat-icon-button[disabled],.mat-stroked-button[disabled]{cursor:default}.mat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-button.cdk-program-focused .mat-button-focus-overlay,.mat-flat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-flat-button.cdk-program-focused .mat-button-focus-overlay,.mat-icon-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-icon-button.cdk-program-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner{border:0}.mat-raised-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:0;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0,0,0);transition:background .4s cubic-bezier(.25,.8,.25,1),box-shadow 280ms cubic-bezier(.4,0,.2,1)}.mat-raised-button::-moz-focus-inner{border:0}.mat-raised-button[disabled]{cursor:default}.mat-raised-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-raised-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-raised-button::-moz-focus-inner{border:0}._mat-animation-noopable.mat-raised-button{transition:none;animation:none}.mat-stroked-button{border:1px solid currentColor;padding:0 15px;line-height:34px}.mat-stroked-button .mat-button-focus-overlay,.mat-stroked-button .mat-button-ripple.mat-ripple{top:-1px;left:-1px;right:-1px;bottom:-1px}.mat-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:0;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0,0,0);transition:background .4s cubic-bezier(.25,.8,.25,1),box-shadow 280ms cubic-bezier(.4,0,.2,1);min-width:0;border-radius:50%;width:56px;height:56px;padding:0;flex-shrink:0}.mat-fab::-moz-focus-inner{border:0}.mat-fab[disabled]{cursor:default}.mat-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-fab{transition:none;animation:none}.mat-fab .mat-button-wrapper{padding:16px 0;display:inline-block;line-height:24px}.mat-mini-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:0;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0,0,0);transition:background .4s cubic-bezier(.25,.8,.25,1),box-shadow 280ms cubic-bezier(.4,0,.2,1);min-width:0;border-radius:50%;width:40px;height:40px;padding:0;flex-shrink:0}.mat-mini-fab::-moz-focus-inner{border:0}.mat-mini-fab[disabled]{cursor:default}.mat-mini-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-mini-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-mini-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-mini-fab{transition:none;animation:none}.mat-mini-fab .mat-button-wrapper{padding:8px 0;display:inline-block;line-height:24px}.mat-icon-button{padding:0;min-width:0;width:40px;height:40px;flex-shrink:0;line-height:40px;border-radius:50%}.mat-icon-button .mat-icon,.mat-icon-button i{line-height:24px}.mat-button-focus-overlay,.mat-button-ripple.mat-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-button-ripple.mat-ripple:not(:empty){transform:translateZ(0)}.mat-button-focus-overlay{opacity:0;transition:opacity .2s cubic-bezier(.35,0,.25,1),background-color .2s cubic-bezier(.35,0,.25,1)}._mat-animation-noopable .mat-button-focus-overlay{transition:none}@media (-ms-high-contrast:active){.mat-button-focus-overlay{background-color:#fff}}@media (-ms-high-contrast:black-on-white){.mat-button-focus-overlay{background-color:#000}}.mat-button-ripple-round{border-radius:50%;z-index:1}.mat-button .mat-button-wrapper>*,.mat-fab .mat-button-wrapper>*,.mat-flat-button .mat-button-wrapper>*,.mat-icon-button .mat-button-wrapper>*,.mat-mini-fab .mat-button-wrapper>*,.mat-raised-button .mat-button-wrapper>*,.mat-stroked-button .mat-button-wrapper>*{vertical-align:middle}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button{display:block;font-size:inherit;width:2.5em;height:2.5em}@media (-ms-high-contrast:active){.mat-button,.mat-fab,.mat-flat-button,.mat-icon-button,.mat-mini-fab,.mat-raised-button{outline:solid 1px}}"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatButton, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{ selector: "button[mat-button], button[mat-raised-button], button[mat-icon-button],\n             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],\n             button[mat-flat-button]",
                exportAs: 'matButton',
                host: {
                    '[attr.disabled]': 'disabled || null',
                    '[class._mat-animation-noopable]': '_animationMode === "NoopAnimations"'
                },
                template: "<span class=\"mat-button-wrapper\"><ng-content></ng-content></span><div matRipple class=\"mat-button-ripple\" [class.mat-button-ripple-round]=\"isRoundButton || isIconButton\" [matRippleDisabled]=\"_isRippleDisabled()\" [matRippleCentered]=\"isIconButton\" [matRippleTrigger]=\"_getHostElement()\"></div><div class=\"mat-button-focus-overlay\"></div>",
                styles: [".mat-button .mat-button-focus-overlay,.mat-icon-button .mat-button-focus-overlay{opacity:0}.mat-button:hover .mat-button-focus-overlay,.mat-stroked-button:hover .mat-button-focus-overlay{opacity:.04}@media (hover:none){.mat-button:hover .mat-button-focus-overlay,.mat-stroked-button:hover .mat-button-focus-overlay{opacity:0}}.mat-button,.mat-flat-button,.mat-icon-button,.mat-stroked-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:0;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible}.mat-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner{border:0}.mat-button[disabled],.mat-flat-button[disabled],.mat-icon-button[disabled],.mat-stroked-button[disabled]{cursor:default}.mat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-button.cdk-program-focused .mat-button-focus-overlay,.mat-flat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-flat-button.cdk-program-focused .mat-button-focus-overlay,.mat-icon-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-icon-button.cdk-program-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner{border:0}.mat-raised-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:0;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0,0,0);transition:background .4s cubic-bezier(.25,.8,.25,1),box-shadow 280ms cubic-bezier(.4,0,.2,1)}.mat-raised-button::-moz-focus-inner{border:0}.mat-raised-button[disabled]{cursor:default}.mat-raised-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-raised-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-raised-button::-moz-focus-inner{border:0}._mat-animation-noopable.mat-raised-button{transition:none;animation:none}.mat-stroked-button{border:1px solid currentColor;padding:0 15px;line-height:34px}.mat-stroked-button .mat-button-focus-overlay,.mat-stroked-button .mat-button-ripple.mat-ripple{top:-1px;left:-1px;right:-1px;bottom:-1px}.mat-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:0;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0,0,0);transition:background .4s cubic-bezier(.25,.8,.25,1),box-shadow 280ms cubic-bezier(.4,0,.2,1);min-width:0;border-radius:50%;width:56px;height:56px;padding:0;flex-shrink:0}.mat-fab::-moz-focus-inner{border:0}.mat-fab[disabled]{cursor:default}.mat-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-fab{transition:none;animation:none}.mat-fab .mat-button-wrapper{padding:16px 0;display:inline-block;line-height:24px}.mat-mini-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:0;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0,0,0);transition:background .4s cubic-bezier(.25,.8,.25,1),box-shadow 280ms cubic-bezier(.4,0,.2,1);min-width:0;border-radius:50%;width:40px;height:40px;padding:0;flex-shrink:0}.mat-mini-fab::-moz-focus-inner{border:0}.mat-mini-fab[disabled]{cursor:default}.mat-mini-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-mini-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-mini-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-mini-fab{transition:none;animation:none}.mat-mini-fab .mat-button-wrapper{padding:8px 0;display:inline-block;line-height:24px}.mat-icon-button{padding:0;min-width:0;width:40px;height:40px;flex-shrink:0;line-height:40px;border-radius:50%}.mat-icon-button .mat-icon,.mat-icon-button i{line-height:24px}.mat-button-focus-overlay,.mat-button-ripple.mat-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-button-ripple.mat-ripple:not(:empty){transform:translateZ(0)}.mat-button-focus-overlay{opacity:0;transition:opacity .2s cubic-bezier(.35,0,.25,1),background-color .2s cubic-bezier(.35,0,.25,1)}._mat-animation-noopable .mat-button-focus-overlay{transition:none}@media (-ms-high-contrast:active){.mat-button-focus-overlay{background-color:#fff}}@media (-ms-high-contrast:black-on-white){.mat-button-focus-overlay{background-color:#000}}.mat-button-ripple-round{border-radius:50%;z-index:1}.mat-button .mat-button-wrapper>*,.mat-fab .mat-button-wrapper>*,.mat-flat-button .mat-button-wrapper>*,.mat-icon-button .mat-button-wrapper>*,.mat-mini-fab .mat-button-wrapper>*,.mat-raised-button .mat-button-wrapper>*,.mat-stroked-button .mat-button-wrapper>*{vertical-align:middle}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button{display:block;font-size:inherit;width:2.5em;height:2.5em}@media (-ms-high-contrast:active){.mat-button,.mat-fab,.mat-flat-button,.mat-icon-button,.mat-mini-fab,.mat-raised-button{outline:solid 1px}}"],
                inputs: ['disabled', 'disableRipple', 'color'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] }, { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["FocusMonitor"] }, { type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["ANIMATION_MODULE_TYPE"]]
            }] }]; }, { ripple: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatRipple"], { static: false }]
        }] }); })();
    return MatButton;
}(_MatButtonMixinBase));
/**
 * Material design anchor button.
 */
var MatAnchor = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MatAnchor, _super);
    function MatAnchor(focusMonitor, elementRef, animationMode) {
        return _super.call(this, elementRef, focusMonitor, animationMode) || this;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    MatAnchor.prototype._haltDisabledEvents = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        // A disabled button shouldn't apply any actions
        if (this.disabled) {
            event.preventDefault();
            event.stopImmediatePropagation();
        }
    };
    /** @nocollapse */
    MatAnchor.ctorParameters = function () { return [
        { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["FocusMonitor"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] },
        { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["ANIMATION_MODULE_TYPE"],] }] }
    ]; };
    MatAnchor.propDecorators = {
        tabIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
    };
MatAnchor.ɵfac = function MatAnchor_Factory(t) { return new (t || MatAnchor)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["FocusMonitor"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["ANIMATION_MODULE_TYPE"], 8)); };
MatAnchor.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: MatAnchor, selectors: [["a", "mat-button", ""], ["a", "mat-raised-button", ""], ["a", "mat-icon-button", ""], ["a", "mat-fab", ""], ["a", "mat-mini-fab", ""], ["a", "mat-stroked-button", ""], ["a", "mat-flat-button", ""]], hostVars: 5, hostBindings: function MatAnchor_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MatAnchor_click_HostBindingHandler($event) { return ctx._haltDisabledEvents($event); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("tabindex", ctx.disabled ? 0 - 1 : ctx.tabIndex || 0)("disabled", ctx.disabled || null)("aria-disabled", ctx.disabled.toString());
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");
    } }, inputs: { disabled: "disabled", disableRipple: "disableRipple", color: "color", tabIndex: "tabIndex" }, exportAs: ["matButton", "matAnchor"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], attrs: _c0, ngContentSelectors: _c1, decls: 4, vars: 5, consts: [[1, "mat-button-wrapper"], ["matRipple", "", 1, "mat-button-ripple", 3, "matRippleDisabled", "matRippleCentered", "matRippleTrigger"], [1, "mat-button-focus-overlay"]], template: function MatAnchor_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "div", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("mat-button-ripple-round", ctx.isRoundButton || ctx.isIconButton);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matRippleDisabled", ctx._isRippleDisabled())("matRippleCentered", ctx.isIconButton)("matRippleTrigger", ctx._getHostElement());
    } }, directives: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatRipple"]], styles: [".mat-button .mat-button-focus-overlay,.mat-icon-button .mat-button-focus-overlay{opacity:0}.mat-button:hover .mat-button-focus-overlay,.mat-stroked-button:hover .mat-button-focus-overlay{opacity:.04}@media (hover:none){.mat-button:hover .mat-button-focus-overlay,.mat-stroked-button:hover .mat-button-focus-overlay{opacity:0}}.mat-button,.mat-flat-button,.mat-icon-button,.mat-stroked-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:0;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible}.mat-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner{border:0}.mat-button[disabled],.mat-flat-button[disabled],.mat-icon-button[disabled],.mat-stroked-button[disabled]{cursor:default}.mat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-button.cdk-program-focused .mat-button-focus-overlay,.mat-flat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-flat-button.cdk-program-focused .mat-button-focus-overlay,.mat-icon-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-icon-button.cdk-program-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner{border:0}.mat-raised-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:0;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0,0,0);transition:background .4s cubic-bezier(.25,.8,.25,1),box-shadow 280ms cubic-bezier(.4,0,.2,1)}.mat-raised-button::-moz-focus-inner{border:0}.mat-raised-button[disabled]{cursor:default}.mat-raised-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-raised-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-raised-button::-moz-focus-inner{border:0}._mat-animation-noopable.mat-raised-button{transition:none;animation:none}.mat-stroked-button{border:1px solid currentColor;padding:0 15px;line-height:34px}.mat-stroked-button .mat-button-focus-overlay,.mat-stroked-button .mat-button-ripple.mat-ripple{top:-1px;left:-1px;right:-1px;bottom:-1px}.mat-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:0;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0,0,0);transition:background .4s cubic-bezier(.25,.8,.25,1),box-shadow 280ms cubic-bezier(.4,0,.2,1);min-width:0;border-radius:50%;width:56px;height:56px;padding:0;flex-shrink:0}.mat-fab::-moz-focus-inner{border:0}.mat-fab[disabled]{cursor:default}.mat-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-fab{transition:none;animation:none}.mat-fab .mat-button-wrapper{padding:16px 0;display:inline-block;line-height:24px}.mat-mini-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:0;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0,0,0);transition:background .4s cubic-bezier(.25,.8,.25,1),box-shadow 280ms cubic-bezier(.4,0,.2,1);min-width:0;border-radius:50%;width:40px;height:40px;padding:0;flex-shrink:0}.mat-mini-fab::-moz-focus-inner{border:0}.mat-mini-fab[disabled]{cursor:default}.mat-mini-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-mini-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-mini-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-mini-fab{transition:none;animation:none}.mat-mini-fab .mat-button-wrapper{padding:8px 0;display:inline-block;line-height:24px}.mat-icon-button{padding:0;min-width:0;width:40px;height:40px;flex-shrink:0;line-height:40px;border-radius:50%}.mat-icon-button .mat-icon,.mat-icon-button i{line-height:24px}.mat-button-focus-overlay,.mat-button-ripple.mat-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-button-ripple.mat-ripple:not(:empty){transform:translateZ(0)}.mat-button-focus-overlay{opacity:0;transition:opacity .2s cubic-bezier(.35,0,.25,1),background-color .2s cubic-bezier(.35,0,.25,1)}._mat-animation-noopable .mat-button-focus-overlay{transition:none}@media (-ms-high-contrast:active){.mat-button-focus-overlay{background-color:#fff}}@media (-ms-high-contrast:black-on-white){.mat-button-focus-overlay{background-color:#000}}.mat-button-ripple-round{border-radius:50%;z-index:1}.mat-button .mat-button-wrapper>*,.mat-fab .mat-button-wrapper>*,.mat-flat-button .mat-button-wrapper>*,.mat-icon-button .mat-button-wrapper>*,.mat-mini-fab .mat-button-wrapper>*,.mat-raised-button .mat-button-wrapper>*,.mat-stroked-button .mat-button-wrapper>*{vertical-align:middle}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button{display:block;font-size:inherit;width:2.5em;height:2.5em}@media (-ms-high-contrast:active){.mat-button,.mat-fab,.mat-flat-button,.mat-icon-button,.mat-mini-fab,.mat-raised-button{outline:solid 1px}}"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatAnchor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{ selector: "a[mat-button], a[mat-raised-button], a[mat-icon-button], a[mat-fab],\n             a[mat-mini-fab], a[mat-stroked-button], a[mat-flat-button]",
                exportAs: 'matButton, matAnchor',
                host: {
                    // Note that we ignore the user-specified tabindex when it's disabled for
                    // consistency with the `mat-button` applied on native buttons where even
                    // though they have an index, they're not tabbable.
                    '[attr.tabindex]': 'disabled ? -1 : (tabIndex || 0)',
                    '[attr.disabled]': 'disabled || null',
                    '[attr.aria-disabled]': 'disabled.toString()',
                    '(click)': '_haltDisabledEvents($event)',
                    '[class._mat-animation-noopable]': '_animationMode === "NoopAnimations"'
                },
                inputs: ['disabled', 'disableRipple', 'color'],
                template: "<span class=\"mat-button-wrapper\"><ng-content></ng-content></span><div matRipple class=\"mat-button-ripple\" [class.mat-button-ripple-round]=\"isRoundButton || isIconButton\" [matRippleDisabled]=\"_isRippleDisabled()\" [matRippleCentered]=\"isIconButton\" [matRippleTrigger]=\"_getHostElement()\"></div><div class=\"mat-button-focus-overlay\"></div>",
                styles: [".mat-button .mat-button-focus-overlay,.mat-icon-button .mat-button-focus-overlay{opacity:0}.mat-button:hover .mat-button-focus-overlay,.mat-stroked-button:hover .mat-button-focus-overlay{opacity:.04}@media (hover:none){.mat-button:hover .mat-button-focus-overlay,.mat-stroked-button:hover .mat-button-focus-overlay{opacity:0}}.mat-button,.mat-flat-button,.mat-icon-button,.mat-stroked-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:0;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible}.mat-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner{border:0}.mat-button[disabled],.mat-flat-button[disabled],.mat-icon-button[disabled],.mat-stroked-button[disabled]{cursor:default}.mat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-button.cdk-program-focused .mat-button-focus-overlay,.mat-flat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-flat-button.cdk-program-focused .mat-button-focus-overlay,.mat-icon-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-icon-button.cdk-program-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner{border:0}.mat-raised-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:0;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0,0,0);transition:background .4s cubic-bezier(.25,.8,.25,1),box-shadow 280ms cubic-bezier(.4,0,.2,1)}.mat-raised-button::-moz-focus-inner{border:0}.mat-raised-button[disabled]{cursor:default}.mat-raised-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-raised-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-raised-button::-moz-focus-inner{border:0}._mat-animation-noopable.mat-raised-button{transition:none;animation:none}.mat-stroked-button{border:1px solid currentColor;padding:0 15px;line-height:34px}.mat-stroked-button .mat-button-focus-overlay,.mat-stroked-button .mat-button-ripple.mat-ripple{top:-1px;left:-1px;right:-1px;bottom:-1px}.mat-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:0;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0,0,0);transition:background .4s cubic-bezier(.25,.8,.25,1),box-shadow 280ms cubic-bezier(.4,0,.2,1);min-width:0;border-radius:50%;width:56px;height:56px;padding:0;flex-shrink:0}.mat-fab::-moz-focus-inner{border:0}.mat-fab[disabled]{cursor:default}.mat-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-fab{transition:none;animation:none}.mat-fab .mat-button-wrapper{padding:16px 0;display:inline-block;line-height:24px}.mat-mini-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:0;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0,0,0);transition:background .4s cubic-bezier(.25,.8,.25,1),box-shadow 280ms cubic-bezier(.4,0,.2,1);min-width:0;border-radius:50%;width:40px;height:40px;padding:0;flex-shrink:0}.mat-mini-fab::-moz-focus-inner{border:0}.mat-mini-fab[disabled]{cursor:default}.mat-mini-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-mini-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-mini-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-mini-fab{transition:none;animation:none}.mat-mini-fab .mat-button-wrapper{padding:8px 0;display:inline-block;line-height:24px}.mat-icon-button{padding:0;min-width:0;width:40px;height:40px;flex-shrink:0;line-height:40px;border-radius:50%}.mat-icon-button .mat-icon,.mat-icon-button i{line-height:24px}.mat-button-focus-overlay,.mat-button-ripple.mat-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-button-ripple.mat-ripple:not(:empty){transform:translateZ(0)}.mat-button-focus-overlay{opacity:0;transition:opacity .2s cubic-bezier(.35,0,.25,1),background-color .2s cubic-bezier(.35,0,.25,1)}._mat-animation-noopable .mat-button-focus-overlay{transition:none}@media (-ms-high-contrast:active){.mat-button-focus-overlay{background-color:#fff}}@media (-ms-high-contrast:black-on-white){.mat-button-focus-overlay{background-color:#000}}.mat-button-ripple-round{border-radius:50%;z-index:1}.mat-button .mat-button-wrapper>*,.mat-fab .mat-button-wrapper>*,.mat-flat-button .mat-button-wrapper>*,.mat-icon-button .mat-button-wrapper>*,.mat-mini-fab .mat-button-wrapper>*,.mat-raised-button .mat-button-wrapper>*,.mat-stroked-button .mat-button-wrapper>*{vertical-align:middle}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button{display:block;font-size:inherit;width:2.5em;height:2.5em}@media (-ms-high-contrast:active){.mat-button,.mat-fab,.mat-flat-button,.mat-icon-button,.mat-mini-fab,.mat-raised-button{outline:solid 1px}}"],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["FocusMonitor"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] }, { type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["ANIMATION_MODULE_TYPE"]]
            }] }]; }, { tabIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }] }); })();
    return MatAnchor;
}(MatButton));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MatButtonModule = /** @class */ (function () {
    function MatButtonModule() {
    }
MatButtonModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: MatButtonModule });
MatButtonModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function MatButtonModule_Factory(t) { return new (t || MatButtonModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatRippleModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"],
        ],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](MatButtonModule, { declarations: function () { return [MatButton,
        MatAnchor]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatRippleModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"]]; }, exports: function () { return [MatButton,
        MatAnchor,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"]]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatButtonModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatRippleModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"],
                ],
                exports: [
                    MatButton,
                    MatAnchor,
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"],
                ],
                declarations: [
                    MatButton,
                    MatAnchor,
                ]
            }]
    }], function () { return []; }, null); })();
    return MatButtonModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=button.es5.js.map

/***/ }),

/***/ "./node_modules/@angular/material/__ivy_ngcc__/esm5/stepper.es5.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@angular/material/__ivy_ngcc__/esm5/stepper.es5.js ***!
  \*************************************************************************/
/*! exports provided: MatStepperModule, MatStepLabel, MatStep, MatStepper, MatHorizontalStepper, MatVerticalStepper, MatStepperNext, MatStepperPrevious, MatStepHeader, MAT_STEPPER_INTL_PROVIDER_FACTORY, MatStepperIntl, MAT_STEPPER_INTL_PROVIDER, matStepperAnimations, MatStepperIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatStepperModule", function() { return MatStepperModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatStepLabel", function() { return MatStepLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatStep", function() { return MatStep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatStepper", function() { return MatStepper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatHorizontalStepper", function() { return MatHorizontalStepper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatVerticalStepper", function() { return MatVerticalStepper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatStepperNext", function() { return MatStepperNext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatStepperPrevious", function() { return MatStepperPrevious; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatStepHeader", function() { return MatStepHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_STEPPER_INTL_PROVIDER_FACTORY", function() { return MAT_STEPPER_INTL_PROVIDER_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatStepperIntl", function() { return MatStepperIntl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_STEPPER_INTL_PROVIDER", function() { return MAT_STEPPER_INTL_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matStepperAnimations", function() { return matStepperAnimations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatStepperIcon", function() { return MatStepperIcon; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/__ivy_ngcc__/esm5/stepper.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/__ivy_ngcc__/esm5/a11y.es5.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm5/animations.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/__ivy_ngcc__/esm5/bidi.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/core.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/__ivy_ngcc__/esm5/portal.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/button.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/icon.es5.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */














/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */







function MatStepHeader_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0, 9);
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.iconOverrides[ctx_r0.state])("ngTemplateOutletContext", ctx_r0._getIconContext());
} }
function MatStepHeader_ng_container_4_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r6._getDefaultTextForState(ctx_r6.state));
} }
function MatStepHeader_ng_container_4_mat_icon_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r7._getDefaultTextForState(ctx_r7.state));
} }
function MatStepHeader_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MatStepHeader_ng_container_4_span_1_Template, 2, 1, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, MatStepHeader_ng_container_4_mat_icon_2_Template, 2, 1, "mat-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitch", ctx_r1.state);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "number");
} }
function MatStepHeader_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0, 13);
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r2._templateLabel().template);
} }
function MatStepHeader_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r3.label);
} }
function MatStepHeader_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r4._intl.optionalLabel);
} }
function MatStepHeader_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r5.errorMessage);
} }
function MatStep_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
} }
var _c0 = ["*"];
function MatHorizontalStepper_ng_container_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 6);
} }
function MatHorizontalStepper_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-step-header", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MatHorizontalStepper_ng_container_1_Template_mat_step_header_click_1_listener() { var step_r2 = ctx.$implicit; return step_r2.select(); })("keydown", function MatHorizontalStepper_ng_container_1_Template_mat_step_header_keydown_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7._onKeydown($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, MatHorizontalStepper_ng_container_1_div_2_Template, 1, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var step_r2 = ctx.$implicit;
    var i_r3 = ctx.index;
    var isLast_r4 = ctx.last;
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("tabIndex", ctx_r0._getFocusIndex() === i_r3 ? 0 : 0 - 1)("id", ctx_r0._getStepLabelId(i_r3))("index", i_r3)("state", ctx_r0._getIndicatorType(i_r3, step_r2.state))("label", step_r2.stepLabel || step_r2.label)("selected", ctx_r0.selectedIndex === i_r3)("active", step_r2.completed || ctx_r0.selectedIndex === i_r3 || !ctx_r0.linear)("optional", step_r2.optional)("errorMessage", step_r2.errorMessage)("iconOverrides", ctx_r0._iconOverrides)("disableRipple", ctx_r0.disableRipple);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-posinset", i_r3 + 1)("aria-setsize", ctx_r0.steps.length)("aria-controls", ctx_r0._getStepContentId(i_r3))("aria-selected", ctx_r0.selectedIndex == i_r3)("aria-label", step_r2.ariaLabel || null)("aria-labelledby", !step_r2.ariaLabel && step_r2.ariaLabelledby ? step_r2.ariaLabelledby : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !isLast_r4);
} }
function MatHorizontalStepper_div_3_Template(rf, ctx) { if (rf & 1) {
    var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("@stepTransition.done", function MatHorizontalStepper_div_3_Template_div_animation_stepTransition_done_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r11._animationDone.next($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](1, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var step_r9 = ctx.$implicit;
    var i_r10 = ctx.index;
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@stepTransition", ctx_r1._getAnimationDirection(i_r10))("id", ctx_r1._getStepContentId(i_r10));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("tabindex", ctx_r1.selectedIndex === i_r10 ? 0 : null)("aria-labelledby", ctx_r1._getStepLabelId(i_r10))("aria-expanded", ctx_r1.selectedIndex === i_r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", step_r9.content);
} }
function MatVerticalStepper_div_0_Template(rf, ctx) { if (rf & 1) {
    var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-step-header", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MatVerticalStepper_div_0_Template_mat_step_header_click_1_listener() { var step_r1 = ctx.$implicit; return step_r1.select(); })("keydown", function MatVerticalStepper_div_0_Template_mat_step_header_keydown_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5._onKeydown($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("@stepTransition.done", function MatVerticalStepper_div_0_Template_div_animation_stepTransition_done_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7._animationDone.next($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](5, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var step_r1 = ctx.$implicit;
    var i_r2 = ctx.index;
    var isLast_r3 = ctx.last;
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("tabIndex", ctx_r0._getFocusIndex() == i_r2 ? 0 : 0 - 1)("id", ctx_r0._getStepLabelId(i_r2))("index", i_r2)("state", ctx_r0._getIndicatorType(i_r2, step_r1.state))("label", step_r1.stepLabel || step_r1.label)("selected", ctx_r0.selectedIndex === i_r2)("active", step_r1.completed || ctx_r0.selectedIndex === i_r2 || !ctx_r0.linear)("optional", step_r1.optional)("errorMessage", step_r1.errorMessage)("iconOverrides", ctx_r0._iconOverrides)("disableRipple", ctx_r0.disableRipple);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-posinset", i_r2 + 1)("aria-setsize", ctx_r0.steps.length)("aria-controls", ctx_r0._getStepContentId(i_r2))("aria-selected", ctx_r0.selectedIndex === i_r2)("aria-label", step_r1.ariaLabel || null)("aria-labelledby", !step_r1.ariaLabel && step_r1.ariaLabelledby ? step_r1.ariaLabelledby : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mat-stepper-vertical-line", !isLast_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@stepTransition", ctx_r0._getAnimationDirection(i_r2))("id", ctx_r0._getStepContentId(i_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("tabindex", ctx_r0.selectedIndex === i_r2 ? 0 : null)("aria-labelledby", ctx_r0._getStepLabelId(i_r2))("aria-expanded", ctx_r0.selectedIndex === i_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", step_r1.content);
} }
var MatStepLabel = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MatStepLabel, _super);
    function MatStepLabel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
MatStepLabel.ɵfac = function MatStepLabel_Factory(t) { return ɵMatStepLabel_BaseFactory(t || MatStepLabel); };
MatStepLabel.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: MatStepLabel, selectors: [["", "matStepLabel", ""]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]] });
var ɵMatStepLabel_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](MatStepLabel);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatStepLabel, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: '[matStepLabel]'
            }]
    }], null, null); })();
    return MatStepLabel;
}(_angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_2__["CdkStepLabel"]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Stepper data that is required for internationalization.
 */
var MatStepperIntl = /** @class */ (function () {
    function MatStepperIntl() {
        /**
         * Stream that emits whenever the labels here are changed. Use this to notify
         * components if the labels have changed after initialization.
         */
        this.changes = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        /**
         * Label that is rendered below optional steps.
         */
        this.optionalLabel = 'Optional';
    }
    /** @nocollapse */ MatStepperIntl.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function MatStepperIntl_Factory() { return new MatStepperIntl(); }, token: MatStepperIntl, providedIn: "root" });
MatStepperIntl.ɵfac = function MatStepperIntl_Factory(t) { return new (t || MatStepperIntl)(); };
MatStepperIntl.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: MatStepperIntl, factory: function (t) { return MatStepperIntl.ɵfac(t); }, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatStepperIntl, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return []; }, null); })();
    return MatStepperIntl;
}());
/**
 * \@docs-private
 * @param {?} parentIntl
 * @return {?}
 */
function MAT_STEPPER_INTL_PROVIDER_FACTORY(parentIntl) {
    return parentIntl || new MatStepperIntl();
}
/**
 * \@docs-private
 * @type {?}
 */
var MAT_STEPPER_INTL_PROVIDER = {
    provide: MatStepperIntl,
    deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"](), MatStepperIntl]],
    useFactory: MAT_STEPPER_INTL_PROVIDER_FACTORY
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MatStepHeader = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MatStepHeader, _super);
    function MatStepHeader(_intl, _focusMonitor, _elementRef, changeDetectorRef) {
        var _this = _super.call(this, _elementRef) || this;
        _this._intl = _intl;
        _this._focusMonitor = _focusMonitor;
        _focusMonitor.monitor(_elementRef, true);
        _this._intlSubscription = _intl.changes.subscribe((/**
         * @return {?}
         */
        function () { return changeDetectorRef.markForCheck(); }));
        return _this;
    }
    /**
     * @return {?}
     */
    MatStepHeader.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._intlSubscription.unsubscribe();
        this._focusMonitor.stopMonitoring(this._elementRef);
    };
    /** Focuses the step header. */
    /**
     * Focuses the step header.
     * @return {?}
     */
    MatStepHeader.prototype.focus = /**
     * Focuses the step header.
     * @return {?}
     */
    function () {
        this._focusMonitor.focusVia(this._elementRef, 'program');
    };
    /** Returns string label of given step if it is a text label. */
    /**
     * Returns string label of given step if it is a text label.
     * @return {?}
     */
    MatStepHeader.prototype._stringLabel = /**
     * Returns string label of given step if it is a text label.
     * @return {?}
     */
    function () {
        return this.label instanceof MatStepLabel ? null : this.label;
    };
    /** Returns MatStepLabel if the label of given step is a template label. */
    /**
     * Returns MatStepLabel if the label of given step is a template label.
     * @return {?}
     */
    MatStepHeader.prototype._templateLabel = /**
     * Returns MatStepLabel if the label of given step is a template label.
     * @return {?}
     */
    function () {
        return this.label instanceof MatStepLabel ? this.label : null;
    };
    /** Returns the host HTML element. */
    /**
     * Returns the host HTML element.
     * @return {?}
     */
    MatStepHeader.prototype._getHostElement = /**
     * Returns the host HTML element.
     * @return {?}
     */
    function () {
        return this._elementRef.nativeElement;
    };
    /** Template context variables that are exposed to the `matStepperIcon` instances. */
    /**
     * Template context variables that are exposed to the `matStepperIcon` instances.
     * @return {?}
     */
    MatStepHeader.prototype._getIconContext = /**
     * Template context variables that are exposed to the `matStepperIcon` instances.
     * @return {?}
     */
    function () {
        return {
            index: this.index,
            active: this.active,
            optional: this.optional
        };
    };
    /**
     * @param {?} state
     * @return {?}
     */
    MatStepHeader.prototype._getDefaultTextForState = /**
     * @param {?} state
     * @return {?}
     */
    function (state$$1) {
        if (state$$1 == 'number') {
            return "" + (this.index + 1);
        }
        if (state$$1 == 'edit') {
            return 'create';
        }
        if (state$$1 == 'error') {
            return 'warning';
        }
        return state$$1;
    };
    /** @nocollapse */
    MatStepHeader.ctorParameters = function () { return [
        { type: MatStepperIntl },
        { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__["FocusMonitor"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
    ]; };
    MatStepHeader.propDecorators = {
        state: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        label: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        errorMessage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        iconOverrides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        index: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        selected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        active: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        optional: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        disableRipple: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
    };
MatStepHeader.ɵfac = function MatStepHeader_Factory(t) { return new (t || MatStepHeader)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MatStepperIntl), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__["FocusMonitor"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"])); };
MatStepHeader.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MatStepHeader, selectors: [["mat-step-header"]], hostAttrs: ["role", "tab", 1, "mat-step-header"], inputs: { state: "state", label: "label", errorMessage: "errorMessage", iconOverrides: "iconOverrides", index: "index", selected: "selected", active: "active", optional: "optional", disableRipple: "disableRipple" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 10, vars: 19, consts: [["matRipple", "", 1, "mat-step-header-ripple", 3, "matRippleTrigger", "matRippleDisabled"], [1, "mat-step-icon-content", 3, "ngSwitch"], [3, "ngTemplateOutlet", "ngTemplateOutletContext", 4, "ngSwitchCase"], [3, "ngSwitch", 4, "ngSwitchDefault"], [1, "mat-step-label"], [3, "ngTemplateOutlet", 4, "ngIf"], ["class", "mat-step-text-label", 4, "ngIf"], ["class", "mat-step-optional", 4, "ngIf"], ["class", "mat-step-sub-label-error", 4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [3, "ngTemplateOutlet"], [1, "mat-step-text-label"], [1, "mat-step-optional"], [1, "mat-step-sub-label-error"]], template: function MatStepHeader_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, MatStepHeader_ng_container_3_Template, 1, 2, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, MatStepHeader_ng_container_4_Template, 3, 2, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, MatStepHeader_ng_container_6_Template, 1, 1, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, MatStepHeader_div_7_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, MatStepHeader_div_8_Template, 2, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, MatStepHeader_div_9_Template, 2, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRippleTrigger", ctx._getHostElement())("matRippleDisabled", ctx.disableRipple);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("mat-step-icon-state-", ctx.state, " mat-step-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mat-step-icon-selected", ctx.selected);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitch", !!(ctx.iconOverrides && ctx.iconOverrides[ctx.state]));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mat-step-label-active", ctx.active)("mat-step-label-selected", ctx.selected)("mat-step-label-error", ctx.state == "error");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx._templateLabel());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx._stringLabel());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.optional && ctx.state != "error");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.state == "error");
    } }, directives: [_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatRipple"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgTemplateOutlet"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"]], styles: [".mat-step-header{overflow:hidden;outline:0;cursor:pointer;position:relative;box-sizing:content-box;-webkit-tap-highlight-color:transparent}.mat-step-optional,.mat-step-sub-label-error{font-size:12px}.mat-step-icon{border-radius:50%;height:24px;width:24px;flex-shrink:0;position:relative}.mat-step-icon .mat-icon,.mat-step-icon-content{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.mat-step-icon .mat-icon{font-size:16px;height:16px;width:16px}.mat-step-icon-state-error .mat-icon{font-size:24px;height:24px;width:24px}.mat-step-label{display:inline-block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:50px;vertical-align:middle}.mat-step-text-label{text-overflow:ellipsis;overflow:hidden}.mat-step-header .mat-step-header-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatStepHeader, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{ selector: 'mat-step-header',
                template: "<div class=\"mat-step-header-ripple\" matRipple [matRippleTrigger]=\"_getHostElement()\" [matRippleDisabled]=\"disableRipple\"></div><div class=\"mat-step-icon-state-{{state}} mat-step-icon\" [class.mat-step-icon-selected]=\"selected\"><div class=\"mat-step-icon-content\" [ngSwitch]=\"!!(iconOverrides && iconOverrides[state])\"><ng-container *ngSwitchCase=\"true\" [ngTemplateOutlet]=\"iconOverrides[state]\" [ngTemplateOutletContext]=\"_getIconContext()\"></ng-container><ng-container *ngSwitchDefault [ngSwitch]=\"state\"><span *ngSwitchCase=\"'number'\">{{_getDefaultTextForState(state)}}</span><mat-icon *ngSwitchDefault>{{_getDefaultTextForState(state)}}</mat-icon></ng-container></div></div><div class=\"mat-step-label\" [class.mat-step-label-active]=\"active\" [class.mat-step-label-selected]=\"selected\" [class.mat-step-label-error]=\"state == 'error'\"><ng-container *ngIf=\"_templateLabel()\" [ngTemplateOutlet]=\"_templateLabel()!.template\"></ng-container><div class=\"mat-step-text-label\" *ngIf=\"_stringLabel()\">{{label}}</div><div class=\"mat-step-optional\" *ngIf=\"optional && state != 'error'\">{{_intl.optionalLabel}}</div><div class=\"mat-step-sub-label-error\" *ngIf=\"state == 'error'\">{{errorMessage}}</div></div>",
                styles: [".mat-step-header{overflow:hidden;outline:0;cursor:pointer;position:relative;box-sizing:content-box;-webkit-tap-highlight-color:transparent}.mat-step-optional,.mat-step-sub-label-error{font-size:12px}.mat-step-icon{border-radius:50%;height:24px;width:24px;flex-shrink:0;position:relative}.mat-step-icon .mat-icon,.mat-step-icon-content{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.mat-step-icon .mat-icon{font-size:16px;height:16px;width:16px}.mat-step-icon-state-error .mat-icon{font-size:24px;height:24px;width:24px}.mat-step-label{display:inline-block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:50px;vertical-align:middle}.mat-step-text-label{text-overflow:ellipsis;overflow:hidden}.mat-step-header .mat-step-header-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}"],
                host: {
                    'class': 'mat-step-header',
                    'role': 'tab'
                },
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: MatStepperIntl }, { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__["FocusMonitor"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }]; }, { state: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], label: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], errorMessage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], iconOverrides: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], index: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], selected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], active: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], optional: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], disableRipple: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();
    return MatStepHeader;
}(_angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_2__["CdkStepHeader"]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Animations used by the Material steppers.
 * \@docs-private
 * @type {?}
 */
var matStepperAnimations = {
    /**
     * Animation that transitions the step along the X axis in a horizontal stepper.
     */
    horizontalStepTransition: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["trigger"])('stepTransition', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["state"])('previous', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ transform: 'translate3d(-100%, 0, 0)', visibility: 'hidden' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["state"])('current', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ transform: 'none', visibility: 'visible' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["state"])('next', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ transform: 'translate3d(100%, 0, 0)', visibility: 'hidden' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])('* => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])('500ms cubic-bezier(0.35, 0, 0.25, 1)'))
    ]),
    /**
     * Animation that transitions the step along the Y axis in a vertical stepper.
     */
    verticalStepTransition: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["trigger"])('stepTransition', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["state"])('previous', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ height: '0px', visibility: 'hidden' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["state"])('next', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ height: '0px', visibility: 'hidden' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["state"])('current', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ height: '*', visibility: 'visible' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])('* <=> current', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))
    ])
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Template to be used to override the icons inside the step header.
 */
var MatStepperIcon = /** @class */ (function () {
    function MatStepperIcon(templateRef) {
        this.templateRef = templateRef;
    }
    /** @nocollapse */
    MatStepperIcon.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] }
    ]; };
    MatStepperIcon.propDecorators = {
        name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['matStepperIcon',] }]
    };
MatStepperIcon.ɵfac = function MatStepperIcon_Factory(t) { return new (t || MatStepperIcon)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])); };
MatStepperIcon.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: MatStepperIcon, selectors: [["ng-template", "matStepperIcon", ""]], inputs: { name: ["matStepperIcon", "name"] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatStepperIcon, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: 'ng-template[matStepperIcon]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] }]; }, { name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['matStepperIcon']
        }] }); })();
    return MatStepperIcon;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MatStep = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MatStep, _super);
    /** @breaking-change 8.0.0 remove the `?` after `stepperOptions` */
    function MatStep(stepper, _errorStateMatcher, stepperOptions) {
        var _this = _super.call(this, stepper, stepperOptions) || this;
        _this._errorStateMatcher = _errorStateMatcher;
        return _this;
    }
    /** Custom error state matcher that additionally checks for validity of interacted form. */
    /**
     * Custom error state matcher that additionally checks for validity of interacted form.
     * @param {?} control
     * @param {?} form
     * @return {?}
     */
    MatStep.prototype.isErrorState = /**
     * Custom error state matcher that additionally checks for validity of interacted form.
     * @param {?} control
     * @param {?} form
     * @return {?}
     */
    function (control, form) {
        /** @type {?} */
        var originalErrorState = this._errorStateMatcher.isErrorState(control, form);
        // Custom error state checks for the validity of form that is not submitted or touched
        // since user can trigger a form change by calling for another step without directly
        // interacting with the current form.
        /** @type {?} */
        var customErrorState = !!(control && control.invalid && this.interacted);
        return originalErrorState || customErrorState;
    };
    /** @nocollapse */
    MatStep.ctorParameters = function () { return [
        { type: MatStepper, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])((/**
                         * @return {?}
                         */
                        function () { return MatStepper; })),] }] },
        { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["ErrorStateMatcher"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"] }] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_2__["STEPPER_GLOBAL_OPTIONS"],] }] }
    ]; };
    MatStep.propDecorators = {
        stepLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"], args: [MatStepLabel, { static: false },] }]
    };
MatStep.ɵfac = function MatStep_Factory(t) { return new (t || MatStep)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(( /**
                 * @return {?}
                 */function () { return MatStepper; }))), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["ErrorStateMatcher"], 4), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_2__["STEPPER_GLOBAL_OPTIONS"], 8)); };
MatStep.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MatStep, selectors: [["mat-step"]], contentQueries: function MatStep_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, MatStepLabel, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.stepLabel = _t.first);
    } }, exportAs: ["matStep"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{ provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["ErrorStateMatcher"], useExisting: MatStep }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], ngContentSelectors: _c0, decls: 1, vars: 0, template: function MatStep_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, MatStep_ng_template_0_Template, 1, 0, "ng-template");
    } }, encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatStep, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{ selector: 'mat-step',
                template: "<ng-template><ng-content></ng-content></ng-template>",
                providers: [{ provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["ErrorStateMatcher"], useExisting: MatStep }],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                exportAs: 'matStep',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: MatStepper, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(( /**
                                     * @return {?}
                                     */function () { return MatStepper; }))]
            }] }, { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["ErrorStateMatcher"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_2__["STEPPER_GLOBAL_OPTIONS"]]
            }] }]; }, { stepLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
            args: [MatStepLabel, { static: false }]
        }] }); })();
    return MatStep;
}(_angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_2__["CdkStep"]));
var MatStepper = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MatStepper, _super);
    function MatStepper() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Event emitted when the current step is done transitioning in.
         */
        _this.animationDone = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Consumer-specified template-refs to be used to override the header icons.
         */
        _this._iconOverrides = {};
        /**
         * Stream of animation `done` events when the body expands/collapses.
         */
        _this._animationDone = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        return _this;
    }
    /**
     * @return {?}
     */
    MatStepper.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._icons.forEach((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var name = _a.name, templateRef = _a.templateRef;
            return _this._iconOverrides[name] = templateRef;
        }));
        // Mark the component for change detection whenever the content children query changes
        this._steps.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["takeUntil"])(this._destroyed)).subscribe((/**
         * @return {?}
         */
        function () { return _this._stateChanged(); }));
        this._animationDone.pipe(
        // This needs a `distinctUntilChanged` in order to avoid emitting the same event twice due
        // to a bug in animations where the `.done` callback gets invoked twice on some browsers.
        // See https://github.com/angular/angular/issues/24084
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["distinctUntilChanged"])((/**
         * @param {?} x
         * @param {?} y
         * @return {?}
         */
        function (x, y) { return x.fromState === y.fromState && x.toState === y.toState; })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["takeUntil"])(this._destroyed)).subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            if (((/** @type {?} */ (event.toState))) === 'current') {
                _this.animationDone.emit();
            }
        }));
    };
    MatStepper.propDecorators = {
        _stepHeader: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"], args: [MatStepHeader,] }],
        _steps: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"], args: [MatStep,] }],
        _icons: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"], args: [MatStepperIcon,] }],
        animationDone: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
        disableRipple: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
    };
MatStepper.ɵfac = function MatStepper_Factory(t) { return ɵMatStepper_BaseFactory(t || MatStepper); };
MatStepper.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: MatStepper, selectors: [["", "matStepper", ""]], contentQueries: function MatStepper_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, MatStep, false);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, MatStepperIcon, false);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._steps = _t);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._icons = _t);
    } }, viewQuery: function MatStepper_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](MatStepHeader, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._stepHeader = _t);
    } }, inputs: { disableRipple: "disableRipple" }, outputs: { animationDone: "animationDone" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{ provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_2__["CdkStepper"], useExisting: MatStepper }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]] });
var ɵMatStepper_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](MatStepper);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatStepper, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{ selector: '[matStepper]', providers: [{ provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_2__["CdkStepper"], useExisting: MatStepper }] }]
    }], null, { _stepHeader: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"],
            args: [MatStepHeader]
        }], _steps: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"],
            args: [MatStep]
        }], _icons: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"],
            args: [MatStepperIcon]
        }], animationDone: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], disableRipple: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();
    return MatStepper;
}(_angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_2__["CdkStepper"]));
var MatHorizontalStepper = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MatHorizontalStepper, _super);
    function MatHorizontalStepper() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Whether the label should display in bottom or end position.
         */
        _this.labelPosition = 'end';
        return _this;
    }
    MatHorizontalStepper.propDecorators = {
        labelPosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
    };
MatHorizontalStepper.ɵfac = function MatHorizontalStepper_Factory(t) { return ɵMatHorizontalStepper_BaseFactory(t || MatHorizontalStepper); };
MatHorizontalStepper.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MatHorizontalStepper, selectors: [["mat-horizontal-stepper"]], hostAttrs: ["aria-orientation", "horizontal", "role", "tablist", 1, "mat-stepper-horizontal"], hostVars: 4, hostBindings: function MatHorizontalStepper_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mat-stepper-label-position-end", ctx.labelPosition == "end")("mat-stepper-label-position-bottom", ctx.labelPosition == "bottom");
    } }, inputs: { selectedIndex: "selectedIndex", labelPosition: "labelPosition" }, exportAs: ["matHorizontalStepper"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([
            { provide: MatStepper, useExisting: MatHorizontalStepper },
            { provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_2__["CdkStepper"], useExisting: MatHorizontalStepper }
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 4, vars: 2, consts: [[1, "mat-horizontal-stepper-header-container"], [4, "ngFor", "ngForOf"], [1, "mat-horizontal-content-container"], ["class", "mat-horizontal-stepper-content", "role", "tabpanel", 3, "id", 4, "ngFor", "ngForOf"], [1, "mat-horizontal-stepper-header", 3, "tabIndex", "id", "index", "state", "label", "selected", "active", "optional", "errorMessage", "iconOverrides", "disableRipple", "click", "keydown"], ["class", "mat-stepper-horizontal-line", 4, "ngIf"], [1, "mat-stepper-horizontal-line"], ["role", "tabpanel", 1, "mat-horizontal-stepper-content", 3, "id"], [3, "ngTemplateOutlet"]], template: function MatHorizontalStepper_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MatHorizontalStepper_ng_container_1_Template, 3, 18, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, MatHorizontalStepper_div_3_Template, 2, 6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.steps);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.steps);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], MatStepHeader, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgTemplateOutlet"]], styles: [".mat-stepper-horizontal,.mat-stepper-vertical{display:block}.mat-horizontal-stepper-header-container{white-space:nowrap;display:flex;align-items:center}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header-container{align-items:flex-start}.mat-stepper-horizontal-line{border-top-width:1px;border-top-style:solid;flex:auto;height:0;margin:0 -16px;min-width:32px}.mat-stepper-label-position-bottom .mat-stepper-horizontal-line{margin:0;min-width:0;position:relative;top:36px}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before{border-top-width:1px;border-top-style:solid;content:'';display:inline-block;height:0;position:absolute;top:36px;width:calc(50% - 20px)}.mat-horizontal-stepper-header{display:flex;height:72px;overflow:hidden;align-items:center;padding:0 24px}.mat-horizontal-stepper-header .mat-step-icon{margin-right:8px;flex:none}[dir=rtl] .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:8px}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header{box-sizing:border-box;flex-direction:column;height:auto;padding:24px}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after{right:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before{left:0}[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:first-child::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:last-child::before{display:none}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-label{padding:16px 0 0 0;text-align:center;width:100%}.mat-vertical-stepper-header{display:flex;align-items:center;padding:24px;height:24px}.mat-vertical-stepper-header .mat-step-icon{margin-right:12px}[dir=rtl] .mat-vertical-stepper-header .mat-step-icon{margin-right:0;margin-left:12px}.mat-horizontal-stepper-content{outline:0}.mat-horizontal-stepper-content[aria-expanded=false]{height:0;overflow:hidden}.mat-horizontal-content-container{overflow:hidden;padding:0 24px 24px 24px}.mat-vertical-content-container{margin-left:36px;border:0;position:relative}[dir=rtl] .mat-vertical-content-container{margin-left:0;margin-right:36px}.mat-stepper-vertical-line::before{content:'';position:absolute;top:-16px;bottom:-16px;left:0;border-left-width:1px;border-left-style:solid}[dir=rtl] .mat-stepper-vertical-line::before{left:auto;right:0}.mat-vertical-stepper-content{overflow:hidden;outline:0}.mat-vertical-content{padding:0 24px 24px 24px}.mat-step:last-child .mat-vertical-content-container{border:none}"], encapsulation: 2, data: { animation: [matStepperAnimations.horizontalStepTransition] }, changeDetection: 0 });
var ɵMatHorizontalStepper_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](MatHorizontalStepper);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatHorizontalStepper, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{ selector: 'mat-horizontal-stepper',
                exportAs: 'matHorizontalStepper',
                template: "<div class=\"mat-horizontal-stepper-header-container\"><ng-container *ngFor=\"let step of steps; let i = index; let isLast = last\"><mat-step-header class=\"mat-horizontal-stepper-header\" (click)=\"step.select()\" (keydown)=\"_onKeydown($event)\" [tabIndex]=\"_getFocusIndex() === i ? 0 : -1\" [id]=\"_getStepLabelId(i)\" [attr.aria-posinset]=\"i + 1\" [attr.aria-setsize]=\"steps.length\" [attr.aria-controls]=\"_getStepContentId(i)\" [attr.aria-selected]=\"selectedIndex == i\" [attr.aria-label]=\"step.ariaLabel || null\" [attr.aria-labelledby]=\"(!step.ariaLabel && step.ariaLabelledby) ? step.ariaLabelledby : null\" [index]=\"i\" [state]=\"_getIndicatorType(i, step.state)\" [label]=\"step.stepLabel || step.label\" [selected]=\"selectedIndex === i\" [active]=\"step.completed || selectedIndex === i || !linear\" [optional]=\"step.optional\" [errorMessage]=\"step.errorMessage\" [iconOverrides]=\"_iconOverrides\" [disableRipple]=\"disableRipple\"></mat-step-header><div *ngIf=\"!isLast\" class=\"mat-stepper-horizontal-line\"></div></ng-container></div><div class=\"mat-horizontal-content-container\"><div *ngFor=\"let step of steps; let i = index\" [attr.tabindex]=\"selectedIndex === i ? 0 : null\" class=\"mat-horizontal-stepper-content\" role=\"tabpanel\" [@stepTransition]=\"_getAnimationDirection(i)\" (@stepTransition.done)=\"_animationDone.next($event)\" [id]=\"_getStepContentId(i)\" [attr.aria-labelledby]=\"_getStepLabelId(i)\" [attr.aria-expanded]=\"selectedIndex === i\"><ng-container [ngTemplateOutlet]=\"step.content\"></ng-container></div></div>",
                styles: [".mat-stepper-horizontal,.mat-stepper-vertical{display:block}.mat-horizontal-stepper-header-container{white-space:nowrap;display:flex;align-items:center}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header-container{align-items:flex-start}.mat-stepper-horizontal-line{border-top-width:1px;border-top-style:solid;flex:auto;height:0;margin:0 -16px;min-width:32px}.mat-stepper-label-position-bottom .mat-stepper-horizontal-line{margin:0;min-width:0;position:relative;top:36px}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before{border-top-width:1px;border-top-style:solid;content:'';display:inline-block;height:0;position:absolute;top:36px;width:calc(50% - 20px)}.mat-horizontal-stepper-header{display:flex;height:72px;overflow:hidden;align-items:center;padding:0 24px}.mat-horizontal-stepper-header .mat-step-icon{margin-right:8px;flex:none}[dir=rtl] .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:8px}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header{box-sizing:border-box;flex-direction:column;height:auto;padding:24px}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after{right:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before{left:0}[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:first-child::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:last-child::before{display:none}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-label{padding:16px 0 0 0;text-align:center;width:100%}.mat-vertical-stepper-header{display:flex;align-items:center;padding:24px;height:24px}.mat-vertical-stepper-header .mat-step-icon{margin-right:12px}[dir=rtl] .mat-vertical-stepper-header .mat-step-icon{margin-right:0;margin-left:12px}.mat-horizontal-stepper-content{outline:0}.mat-horizontal-stepper-content[aria-expanded=false]{height:0;overflow:hidden}.mat-horizontal-content-container{overflow:hidden;padding:0 24px 24px 24px}.mat-vertical-content-container{margin-left:36px;border:0;position:relative}[dir=rtl] .mat-vertical-content-container{margin-left:0;margin-right:36px}.mat-stepper-vertical-line::before{content:'';position:absolute;top:-16px;bottom:-16px;left:0;border-left-width:1px;border-left-style:solid}[dir=rtl] .mat-stepper-vertical-line::before{left:auto;right:0}.mat-vertical-stepper-content{overflow:hidden;outline:0}.mat-vertical-content{padding:0 24px 24px 24px}.mat-step:last-child .mat-vertical-content-container{border:none}"],
                inputs: ['selectedIndex'],
                host: {
                    'class': 'mat-stepper-horizontal',
                    '[class.mat-stepper-label-position-end]': 'labelPosition == "end"',
                    '[class.mat-stepper-label-position-bottom]': 'labelPosition == "bottom"',
                    'aria-orientation': 'horizontal',
                    'role': 'tablist'
                },
                animations: [matStepperAnimations.horizontalStepTransition],
                providers: [
                    { provide: MatStepper, useExisting: MatHorizontalStepper },
                    { provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_2__["CdkStepper"], useExisting: MatHorizontalStepper }
                ],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
            }]
    }], null, { labelPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();
    return MatHorizontalStepper;
}(MatStepper));
var MatVerticalStepper = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MatVerticalStepper, _super);
    function MatVerticalStepper(dir, changeDetectorRef, 
    // @breaking-change 8.0.0 `elementRef` and `_document` parameters to become required.
    elementRef, _document) {
        var _this = _super.call(this, dir, changeDetectorRef, elementRef, _document) || this;
        _this._orientation = 'vertical';
        return _this;
    }
    /** @nocollapse */
    MatVerticalStepper.ctorParameters = function () { return [
        { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DOCUMENT"],] }] }
    ]; };
MatVerticalStepper.ɵfac = function MatVerticalStepper_Factory(t) { return new (t || MatVerticalStepper)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__["DOCUMENT"])); };
MatVerticalStepper.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MatVerticalStepper, selectors: [["mat-vertical-stepper"]], hostAttrs: ["aria-orientation", "vertical", "role", "tablist", 1, "mat-stepper-vertical"], inputs: { selectedIndex: "selectedIndex" }, exportAs: ["matVerticalStepper"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([
            { provide: MatStepper, useExisting: MatVerticalStepper },
            { provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_2__["CdkStepper"], useExisting: MatVerticalStepper }
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 1, consts: [["class", "mat-step", 4, "ngFor", "ngForOf"], [1, "mat-step"], [1, "mat-vertical-stepper-header", 3, "tabIndex", "id", "index", "state", "label", "selected", "active", "optional", "errorMessage", "iconOverrides", "disableRipple", "click", "keydown"], [1, "mat-vertical-content-container"], ["role", "tabpanel", 1, "mat-vertical-stepper-content", 3, "id"], [1, "mat-vertical-content"], [3, "ngTemplateOutlet"]], template: function MatVerticalStepper_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, MatVerticalStepper_div_0_Template, 6, 25, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.steps);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], MatStepHeader, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgTemplateOutlet"]], styles: [".mat-stepper-horizontal,.mat-stepper-vertical{display:block}.mat-horizontal-stepper-header-container{white-space:nowrap;display:flex;align-items:center}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header-container{align-items:flex-start}.mat-stepper-horizontal-line{border-top-width:1px;border-top-style:solid;flex:auto;height:0;margin:0 -16px;min-width:32px}.mat-stepper-label-position-bottom .mat-stepper-horizontal-line{margin:0;min-width:0;position:relative;top:36px}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before{border-top-width:1px;border-top-style:solid;content:'';display:inline-block;height:0;position:absolute;top:36px;width:calc(50% - 20px)}.mat-horizontal-stepper-header{display:flex;height:72px;overflow:hidden;align-items:center;padding:0 24px}.mat-horizontal-stepper-header .mat-step-icon{margin-right:8px;flex:none}[dir=rtl] .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:8px}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header{box-sizing:border-box;flex-direction:column;height:auto;padding:24px}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after{right:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before{left:0}[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:first-child::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:last-child::before{display:none}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-label{padding:16px 0 0 0;text-align:center;width:100%}.mat-vertical-stepper-header{display:flex;align-items:center;padding:24px;height:24px}.mat-vertical-stepper-header .mat-step-icon{margin-right:12px}[dir=rtl] .mat-vertical-stepper-header .mat-step-icon{margin-right:0;margin-left:12px}.mat-horizontal-stepper-content{outline:0}.mat-horizontal-stepper-content[aria-expanded=false]{height:0;overflow:hidden}.mat-horizontal-content-container{overflow:hidden;padding:0 24px 24px 24px}.mat-vertical-content-container{margin-left:36px;border:0;position:relative}[dir=rtl] .mat-vertical-content-container{margin-left:0;margin-right:36px}.mat-stepper-vertical-line::before{content:'';position:absolute;top:-16px;bottom:-16px;left:0;border-left-width:1px;border-left-style:solid}[dir=rtl] .mat-stepper-vertical-line::before{left:auto;right:0}.mat-vertical-stepper-content{overflow:hidden;outline:0}.mat-vertical-content{padding:0 24px 24px 24px}.mat-step:last-child .mat-vertical-content-container{border:none}"], encapsulation: 2, data: { animation: [matStepperAnimations.verticalStepTransition] }, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatVerticalStepper, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{ selector: 'mat-vertical-stepper',
                exportAs: 'matVerticalStepper',
                template: "<div class=\"mat-step\" *ngFor=\"let step of steps; let i = index; let isLast = last\"><mat-step-header class=\"mat-vertical-stepper-header\" (click)=\"step.select()\" (keydown)=\"_onKeydown($event)\" [tabIndex]=\"_getFocusIndex() == i ? 0 : -1\" [id]=\"_getStepLabelId(i)\" [attr.aria-posinset]=\"i + 1\" [attr.aria-setsize]=\"steps.length\" [attr.aria-controls]=\"_getStepContentId(i)\" [attr.aria-selected]=\"selectedIndex === i\" [attr.aria-label]=\"step.ariaLabel || null\" [attr.aria-labelledby]=\"(!step.ariaLabel && step.ariaLabelledby) ? step.ariaLabelledby : null\" [index]=\"i\" [state]=\"_getIndicatorType(i, step.state)\" [label]=\"step.stepLabel || step.label\" [selected]=\"selectedIndex === i\" [active]=\"step.completed || selectedIndex === i || !linear\" [optional]=\"step.optional\" [errorMessage]=\"step.errorMessage\" [iconOverrides]=\"_iconOverrides\" [disableRipple]=\"disableRipple\"></mat-step-header><div class=\"mat-vertical-content-container\" [class.mat-stepper-vertical-line]=\"!isLast\"><div class=\"mat-vertical-stepper-content\" role=\"tabpanel\" [attr.tabindex]=\"selectedIndex === i ? 0 : null\" [@stepTransition]=\"_getAnimationDirection(i)\" (@stepTransition.done)=\"_animationDone.next($event)\" [id]=\"_getStepContentId(i)\" [attr.aria-labelledby]=\"_getStepLabelId(i)\" [attr.aria-expanded]=\"selectedIndex === i\"><div class=\"mat-vertical-content\"><ng-container [ngTemplateOutlet]=\"step.content\"></ng-container></div></div></div></div>",
                styles: [".mat-stepper-horizontal,.mat-stepper-vertical{display:block}.mat-horizontal-stepper-header-container{white-space:nowrap;display:flex;align-items:center}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header-container{align-items:flex-start}.mat-stepper-horizontal-line{border-top-width:1px;border-top-style:solid;flex:auto;height:0;margin:0 -16px;min-width:32px}.mat-stepper-label-position-bottom .mat-stepper-horizontal-line{margin:0;min-width:0;position:relative;top:36px}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before{border-top-width:1px;border-top-style:solid;content:'';display:inline-block;height:0;position:absolute;top:36px;width:calc(50% - 20px)}.mat-horizontal-stepper-header{display:flex;height:72px;overflow:hidden;align-items:center;padding:0 24px}.mat-horizontal-stepper-header .mat-step-icon{margin-right:8px;flex:none}[dir=rtl] .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:8px}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header{box-sizing:border-box;flex-direction:column;height:auto;padding:24px}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after{right:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before{left:0}[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:first-child::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:last-child::before{display:none}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-label{padding:16px 0 0 0;text-align:center;width:100%}.mat-vertical-stepper-header{display:flex;align-items:center;padding:24px;height:24px}.mat-vertical-stepper-header .mat-step-icon{margin-right:12px}[dir=rtl] .mat-vertical-stepper-header .mat-step-icon{margin-right:0;margin-left:12px}.mat-horizontal-stepper-content{outline:0}.mat-horizontal-stepper-content[aria-expanded=false]{height:0;overflow:hidden}.mat-horizontal-content-container{overflow:hidden;padding:0 24px 24px 24px}.mat-vertical-content-container{margin-left:36px;border:0;position:relative}[dir=rtl] .mat-vertical-content-container{margin-left:0;margin-right:36px}.mat-stepper-vertical-line::before{content:'';position:absolute;top:-16px;bottom:-16px;left:0;border-left-width:1px;border-left-style:solid}[dir=rtl] .mat-stepper-vertical-line::before{left:auto;right:0}.mat-vertical-stepper-content{overflow:hidden;outline:0}.mat-vertical-content{padding:0 24px 24px 24px}.mat-step:last-child .mat-vertical-content-container{border:none}"],
                inputs: ['selectedIndex'],
                host: {
                    'class': 'mat-stepper-vertical',
                    'aria-orientation': 'vertical',
                    'role': 'tablist'
                },
                animations: [matStepperAnimations.verticalStepTransition],
                providers: [
                    { provide: MatStepper, useExisting: MatVerticalStepper },
                    { provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_2__["CdkStepper"], useExisting: MatVerticalStepper }
                ],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DOCUMENT"]]
            }] }]; }, null); })();
    return MatVerticalStepper;
}(MatStepper));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Button that moves to the next step in a stepper workflow.
 */
var MatStepperNext = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MatStepperNext, _super);
    function MatStepperNext() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
MatStepperNext.ɵfac = function MatStepperNext_Factory(t) { return ɵMatStepperNext_BaseFactory(t || MatStepperNext); };
MatStepperNext.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: MatStepperNext, selectors: [["button", "matStepperNext", ""]], hostVars: 1, hostBindings: function MatStepperNext_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵhostProperty"]("type", ctx.type);
    } }, inputs: { type: "type" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]] });
var ɵMatStepperNext_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](MatStepperNext);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatStepperNext, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: 'button[matStepperNext]',
                host: {
                    '[type]': 'type'
                },
                inputs: ['type']
            }]
    }], null, null); })();
    return MatStepperNext;
}(_angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_2__["CdkStepperNext"]));
/**
 * Button that moves to the previous step in a stepper workflow.
 */
var MatStepperPrevious = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MatStepperPrevious, _super);
    function MatStepperPrevious() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
MatStepperPrevious.ɵfac = function MatStepperPrevious_Factory(t) { return ɵMatStepperPrevious_BaseFactory(t || MatStepperPrevious); };
MatStepperPrevious.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: MatStepperPrevious, selectors: [["button", "matStepperPrevious", ""]], hostVars: 1, hostBindings: function MatStepperPrevious_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵhostProperty"]("type", ctx.type);
    } }, inputs: { type: "type" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]] });
var ɵMatStepperPrevious_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](MatStepperPrevious);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatStepperPrevious, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: 'button[matStepperPrevious]',
                host: {
                    '[type]': 'type'
                },
                inputs: ['type']
            }]
    }], null, null); })();
    return MatStepperPrevious;
}(_angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_2__["CdkStepperPrevious"]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MatStepperModule = /** @class */ (function () {
    function MatStepperModule() {
    }
MatStepperModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: MatStepperModule });
MatStepperModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function MatStepperModule_Factory(t) { return new (t || MatStepperModule)(); }, providers: [MAT_STEPPER_INTL_PROVIDER, _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["ErrorStateMatcher"]], imports: [[
            _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatCommonModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"],
            _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_10__["PortalModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
            _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_2__["CdkStepperModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatRippleModule"],
        ],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatCommonModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MatStepperModule, { declarations: function () { return [MatHorizontalStepper,
        MatVerticalStepper,
        MatStep,
        MatStepLabel,
        MatStepper,
        MatStepperNext,
        MatStepperPrevious,
        MatStepHeader,
        MatStepperIcon]; }, imports: function () { return [_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatCommonModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"],
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_10__["PortalModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
        _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_2__["CdkStepperModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatRippleModule"]]; }, exports: function () { return [_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatCommonModule"],
        MatHorizontalStepper,
        MatVerticalStepper,
        MatStep,
        MatStepLabel,
        MatStepper,
        MatStepperNext,
        MatStepperPrevious,
        MatStepHeader,
        MatStepperIcon]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatStepperModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatCommonModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"],
                    _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_10__["PortalModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
                    _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_2__["CdkStepperModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatRippleModule"],
                ],
                exports: [
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatCommonModule"],
                    MatHorizontalStepper,
                    MatVerticalStepper,
                    MatStep,
                    MatStepLabel,
                    MatStepper,
                    MatStepperNext,
                    MatStepperPrevious,
                    MatStepHeader,
                    MatStepperIcon,
                ],
                declarations: [
                    MatHorizontalStepper,
                    MatVerticalStepper,
                    MatStep,
                    MatStepLabel,
                    MatStepper,
                    MatStepperNext,
                    MatStepperPrevious,
                    MatStepHeader,
                    MatStepperIcon,
                ],
                providers: [MAT_STEPPER_INTL_PROVIDER, _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["ErrorStateMatcher"]]
            }]
    }], function () { return []; }, null); })();
    return MatStepperModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=stepper.es5.js.map

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/auth/pages/profile/components/add-review/add-review.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/auth/pages/profile/components/add-review/add-review.component.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<ion-card>\r\n  <ion-item style=\"--inner-padding-end:0px\" class=\"ion-no-padding\" *ngFor=\"let product of product$ | async\">\r\n    <ion-grid>\r\n     <!--\r\n  <ion-row>\r\n        <ion-col size=4>\r\n          <ion-img src=\"{{product.productImage[0].url}}\"></ion-img>\r\n        </ion-col>\r\n        <ion-col size=4>\r\n          <ion-img src=\"{{product.productImage[0].url}}\"></ion-img>\r\n        </ion-col>\r\n        <ion-col size=4>\r\n          <ion-img src=\"{{product.productImage[0].url}}\"></ion-img>\r\n        </ion-col>\r\n      </ion-row>\r\n     --> \r\n      <ion-row>\r\n        <ion-col  class=\"center\" size=2>\r\n          <div  style=\"float: left; margin: 5px\" *ngFor=\"let image of product.productImage; let g = index\">\r\n            <ion-avatar style=\"width: 15vw;height: 15vw;\" *ngIf=\"g == 0\">\r\n              <img src=\"{{ image.url }}\" />\r\n            </ion-avatar>\r\n          </div>\r\n        </ion-col>\r\n        <ion-col  class=\"center\" size=6>\r\n          <ion-label class=\"center\">\r\n            {{product.productName}}\r\n          </ion-label>\r\n        </ion-col>\r\n        <ion-col  class=\"center\" size=4>\r\n          <ion-label  class=\"center\">\r\n          {{product.productPrice | currency:\"R\"}}\r\n            </ion-label>\r\n          </ion-col>\r\n      </ion-row>\r\n    \r\n  \r\n    </ion-grid>\r\n   \r\n  </ion-item>\r\n  \r\n  <form [formGroup]=\"reviewForm\" (ngSubmit)=\"onSubmit()\">\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col size=\"4\">\r\n          <ion-label>\r\n            <sub>\r\n              Rate the Product\r\n            </sub>\r\n          </ion-label>\r\n        </ion-col>\r\n  \r\n        <ion-col size=\"8\">\r\n          <rating\r\n          formControlName=\"rate\"\r\n          [rate]=\"rate\"\r\n          class=\"rating\"\r\n          readonly=\"false\"\r\n          size=\"small\"\r\n        >\r\n        </rating>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col size=12>\r\n          <ion-button type=\"submit\" expand=\"full\" shape=\"round\">\r\n            Submit\r\n          </ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n    \r\n  </form>\r\n</ion-card>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/auth/pages/profile/components/notifications/notifications.component.html":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/auth/pages/profile/components/notifications/notifications.component.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n\r\n\r\n<ion-card style=\"border-radius: 5vw; height:78vh\">\r\n \r\n\r\n  <ion-card-content style=\"min-height:100%; padding: 13px 5px 13px 5px; --background: #f5fafa; overflow: scroll\">\r\n\r\n    \r\n\r\n    <div *ngFor=\"let notification of notifications$ | async; let i = index\">\r\n      <ion-card\r\n    \r\n    *ngIf=\"notification.type == 'Order_review'\"\r\n    class=\"ion-margin-top inner_notification\"\r\n    style=\"display: block;\"\r\n    color=\"light\"\r\n\r\n  >\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col size=\"4\">\r\n        <h6>\r\n          <sub>{{ notification.title }} : </sub>\r\n        </h6>\r\n      </ion-col>\r\n      <ion-col size=\"8\" style=\"text-align: right;\">\r\n        <sub>{{ notification.date | date: \"MMM d, y\" }}</sub>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-text\r\n          ><sub>{{ notification.msg }}</sub></ion-text>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col size=12>\r\n  \r\n          <ion-chip outline class=\"center\">\r\n            <ion-avatar (click)=\"  reviewProduct(item)\" *ngFor=\"let item of notification.order.items\">\r\n         \r\n                <ion-img src=\"{{item.productImage[0].url}}\"></ion-img>\r\n          \r\n              </ion-avatar>\r\n          </ion-chip>\r\n\r\n    \r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  </ion-card>\r\n\r\n    <ion-card\r\n      class=\"ion-margin-top inner_notification \"\r\n      *ngIf=\"notification.type == 'Order_progress'\"\r\n      style=\"display: block;\"\r\n      color=\"light\"\r\n    >\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col size=\"4\">\r\n            <h6>\r\n              <sub>{{ notification.title }} : </sub>\r\n            </h6>\r\n          </ion-col>\r\n          <ion-col size=\"8\" style=\"text-align: right;\">\r\n            <sub>{{ notification.date | date: \"MMM d, y\" }}</sub></ion-col\r\n          >\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-text\r\n              ><sub>{{ notification.msg }}</sub></ion-text\r\n            >\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-card>\r\n    <ion-card\r\n      (click)=\"reviewProduct(notification.to_review_product_id)\"\r\n      class=\"ion-margin-top inner_notification\"\r\n      *ngIf=\"notification.type == 'Reviews'\"\r\n      style=\"display: block;\"\r\n      color=\"tertiary\"\r\n    >\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col size=\"4\">\r\n            <h6>\r\n              <sub>{{ notification.title }} : </sub>\r\n            </h6>\r\n          </ion-col>\r\n          <ion-col size=\"8\" style=\"text-align: right;\">\r\n            <sub>{{ notification.date | date: \"MMM d, y\" }}</sub></ion-col\r\n          >\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-text\r\n              ><sub>{{ notification.msg }}</sub></ion-text\r\n            >\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-card>\r\n    <ion-card\r\n      class=\"ion-margin-top inner_notification\"\r\n      *ngIf=\"notification.type == 'msg'\"\r\n      style=\"display: block;\"\r\n      color=\"dark\"\r\n      height=\"100%\"\r\n    >\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col size=\"4\">\r\n            <h6>\r\n              <sub>{{ notification.title }} : </sub>\r\n            </h6>\r\n          </ion-col>\r\n          <ion-col size=\"8\" style=\"text-align: right;\">\r\n            <sub>{{ notification.date | date: \"MMM d, y\" }}</sub></ion-col\r\n          >\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-textarea\r\n              ><sub>{{ notification.msg }}</sub></ion-textarea\r\n            >\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-card>\r\n\r\n      <!--<ion-card class=\"ion-margin-top inner_notification\" style=\"display: block;\" color=\"dark\">\r\n        <ion-grid>\r\n          <ion-row>\r\n            <ion-col size=\"4\">\r\n              <h6>\r\n                <sub>{{ notification.title }} : </sub>\r\n              </h6>\r\n            </ion-col>\r\n            <ion-col size=\"8\" style=\"text-align: right;\">\r\n              <sub>{{ notification.date | date: \"MMM d, y\" }}</sub></ion-col\r\n            >\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-text\r\n                ><sub>{{ notification.msg }}</sub></ion-text\r\n              >\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </ion-card>-->\r\n\r\n    \r\n    </div>\r\n  </ion-card-content>\r\n</ion-card>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/auth/pages/profile/components/orders/orders.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/auth/pages/profile/components/orders/orders.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-card style=\"border-radius: 5vw; height:78vh\">\r\n\r\n  <ion-card-content style=\"min-height:100%; padding: 13px 5px 13px 5px; --background: #f5fafa;overflow:scroll\">\r\n    <ion-toolbar style=\"padding-bottom: 16px;\">\r\n      <ion-segment value=\"active\" (ionChange)=\"segmentChanged($event)\">\r\n        <ion-segment-button value=\"active\"> Active </ion-segment-button>\r\n        <ion-segment-button value=\"older\"> Fullfilled </ion-segment-button>\r\n       <!---<ion-segment-button value=\"Returns\"> Returns </ion-segment-button>--> \r\n      </ion-segment>\r\n    </ion-toolbar>\r\n\r\n    <div [ngSwitch]=\"purchases_segment\">\r\n\r\n      <div *ngSwitchCase=\"'active'\">\r\n        <div *ngFor=\"let order of orderList$ | async; let i = index\">\r\n          <ion-card     (click)=\"activeOrder(order.order_number)\"  *ngIf=\"!order.fullfilled\" >\r\n            <ion-grid class=\"ion-no-margin\">\r\n              <ion-row style=\"padding-top: 16px;\">\r\n                <ion-col class=\"center\" size=\"6\">\r\n                  <ion-label style=\"padding-left: 5px; text-align: start;width: 100%;\" >ORDER <b style=\"color: #018786;\">#{{ order.order_number }}</b></ion-label>\r\n                </ion-col>\r\n                <ion-col class=\"center\" size=\"6\">\r\n                   <ion-label style=\"padding-right: 5px; text-align: end;width: 100%;\" > \r\n                        Date: {{ order.date | date: \"MMM d\" }}\r\n                   </ion-label>\r\n                </ion-col>\r\n\r\n              </ion-row>\r\n              <ion-row>\r\n                <ion-col size=7>\r\n\r\n                  <ion-label style=\"padding-right: 5px;width: 100%;\" *ngIf=\"order.delivery_date\">\r\n                    Delivery Date: {{order.delivery_date | date: \"MMM d ,yy\" }}\r\n                   </ion-label>\r\n                </ion-col>\r\n                <ion-col size=5 style=\"text-align: end;\">\r\n                 \r\n                    <ion-label style=\"padding-right: 5px; text-align: end;width: 100%;\"  *ngIf=\"countDown(order.commit_date) >0 && order.commit_date \">\r\n                     Ready in {{countDown(order.commit_date)}} days\r\n                    </ion-label>\r\n\r\n                    <ion-label style=\"padding-right: 5px;width: 100%;\"  *ngIf=\"order.commit_date == null\">\r\n                    \r\n                       <sub> Queued 4 Pocessing </sub> \r\n                   \r\n                     </ion-label>\r\n                     \r\n                   \r\n                      <ion-button (click)=\"presentPopover($event)\" style=\"z-index: 5;\" expand=\"block\"  shape=\"round\" size=\"small\" *ngIf=\"countDown(order.commit_date) < 0 && order.commit_date && !order.delivery_ready \">\r\n                        Query Order\r\n                      </ion-button>\r\n                \r\n                  \r\n              \r\n                </ion-col>\r\n              </ion-row>\r\n              <ion-row *ngIf=\"active_order !== order.order_number && !panelOpenState \">\r\n                <ion-item   class=\"ion-no-padding ion-no-margin \" style=\"    --inner-padding-end: 0px;width: 100%;\">\r\n                  <div\r\n               \r\n                  *ngFor=\"let item of order.items; let z = index\"\r\n                >\r\n                  <div  style=\"float: left; margin: 5px\" *ngFor=\"let image of item.productImage; let g = index\">\r\n                    <ion-avatar *ngIf=\"g == 0\">\r\n                      <img src=\"{{ image.url }}\" />\r\n                    </ion-avatar>\r\n                  </div>\r\n                </div>\r\n                </ion-item>\r\n              </ion-row>\r\n              <ion-row *ngIf=\"active_order !== order.order_number && !panelOpenState \">\r\n                <ion-col style=\"padding-bottom:48px;padding-top: 16px;\" size=12>\r\n                  <div class=\"progress\" style=\"margin-right: 5px;\r\n                  margin-left: 5px;\">\r\n                    <div style=\"width: 90vw;\" [style.width]=\"orderProgress(order)\" class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\">\r\n                    \r\n                     \r\n              \r\n                  <ion-card [class]=\"isOrderProcessed(order)\" class=\"center progress-card one ion-no-margin\">\r\n                    <ion-icon  style=\"color: white;font-size: 5vw;\" name=\"reader\"></ion-icon>\r\n              \r\n                  </ion-card>\r\n                  <ion-label class=\"one\" style=\"padding-top: 64px  !important ;z-index: 2;padding-top: 16px;color:grey\">\r\n                    Processed\r\n                </ion-label>\r\n                 \r\n                \r\n              \r\n                  <ion-card [class]=\"isOrderOnTheWay(order)\" class=\"progress-card center three ion-no-margin\">\r\n               \r\n                      <img style=\"max-width: 75%; display: block;\" src=\"./assets/Accountsshipped.svg\" alt=\"\">\r\n                    \r\n                  </ion-card>\r\n                  <ion-label class=\"three\" style=\" padding-top: 64px !important;z-index: 2;padding-top: 16px;color:grey\">\r\n                    En Rout\r\n                  </ion-label>\r\n              \r\n              \r\n                  <ion-card [class]=\"isOrderDelivered(order)\" class=\" center progress-card four  ion-no-margin\">\r\n              \r\n                      \r\n                      <ion-icon style=\"font-size: 5vw;color: white;\" name=\"home\"></ion-icon>\r\n                 \r\n                \r\n                  </ion-card>\r\n                  <ion-label class=\"four \" style=\"padding-top: 64px !important;z-index: 2;padding-top: 16px;color:grey\">\r\n                    Delivered\r\n                  </ion-label>\r\n               \r\n              \r\n                   \r\n               \r\n                    \r\n                   \r\n                    </div>\r\n                 \r\n                 \r\n                  </div>\r\n                </ion-col>\r\n              </ion-row>\r\n              <ion-row>\r\n                <ion-col size=12>\r\n                  <div *ngIf=\"active_order == order.order_number \">\r\n             \r\n                    <div *ngFor=\"let item of order.items; let i = index\" size=12>\r\n                   \r\n                        <ion-item class=\"ion-no-padding ion-no-margin\" style=\"    --inner-padding-end: 0px;\">\r\n                          <ion-grid>\r\n                            <ion-row>\r\n                              <ion-col class=\"center\" size=\"2\">\r\n                               \r\n                               \r\n                                <div   *ngFor=\"let image of item.productImage; let w = index\">\r\n                                  <ion-avatar *ngIf=\"w == 0\">\r\n                                    <img src=\"{{ image.url }}\" />\r\n                                  </ion-avatar>\r\n                                </div>\r\n                            \r\n                               \r\n                              </ion-col>\r\n                              <ion-col class=\"center\" size=\"4\">\r\n                                <ion-label>\r\n                                  <sub>\r\n                                    {{ item.productName }}\r\n                                  </sub>\r\n                                </ion-label>\r\n                              </ion-col>\r\n                              <ion-col class=\"center\" size=\"3\">\r\n                                <ion-label>\r\n                                  <sub> {{item.amount}} </sub>\r\n                                </ion-label>\r\n                              </ion-col>\r\n                              <ion-col class=\"center\" size=\"3\">\r\n                                <ion-badge>\r\n                                  <sub>\r\n                                    {{ item.order_status }}\r\n                                  </sub>\r\n                                </ion-badge>\r\n                              </ion-col>\r\n                            </ion-row>\r\n                          </ion-grid>\r\n                        </ion-item>\r\n                    \r\n                      </div>\r\n                 \r\n    \r\n                  </div>\r\n                </ion-col>\r\n              </ion-row>\r\n              \r\n              <!--       <ion-row>\r\n                <ion-col *ngIf=\"order.delivery_ready\" class=\"center\" size=\"6\">\r\n                  <ion-label>Delivery on the way</ion-label>\r\n                </ion-col>\r\n              </ion-row>-->\r\n            </ion-grid>\r\n       \r\n          </ion-card>\r\n        </div>\r\n      </div>\r\n\r\n      \r\n     \r\n\r\n      <!------------------------------------Older orders--------------------------------->\r\n\r\n        \r\n      <div *ngSwitchCase=\"'older'\">\r\n        <div *ngFor=\"let order of orderList$ | async; let i = index\">\r\n          <ion-card     (click)=\"activeOrder(order.order_number)\"  *ngIf=\"order.fullfilled \"  >\r\n            <ion-grid class=\"ion-no-margin\">\r\n              <ion-row style=\"padding-top: 16px;\">\r\n                <ion-col class=\"center\" size=\"6\">\r\n                  <ion-label style=\"padding-left: 5px; text-align: start;width: 100%;\" >ORDER <b style=\"color: #018786;\">#{{ order.order_number }}</b></ion-label>\r\n                </ion-col>\r\n                <ion-col class=\"center\" size=\"6\">\r\n                  \r\n                      <ion-label style=\"padding-right: 5px; text-align: end;width: 100%;\" > \r\n                        Date: {{ order.date | date: \"MMM d\" }}\r\n                      </ion-label>\r\n                  \r\n                </ion-col>\r\n\r\n              </ion-row>\r\n              <ion-row>\r\n                <ion-col size=7>\r\n\r\n                  <ion-label style=\"padding-right: 5px; text-align: end;width: 100%;\" *ngIf=\"order.delivery_date\">\r\n                    Delivered: {{order.delivery_date | date: \"MMM d ,yy\" }}\r\n                   </ion-label>\r\n                </ion-col>\r\n                <ion-col  style=\"text-align: end;\" size=5>\r\n                 \r\n                    <ion-label color=\"danger\" style=\"padding-right: 5px; text-align: end;width: 100%;\"  *ngIf=\"order.return\">\r\n                      Has Return\r\n                    </ion-label>\r\n\r\n                   \r\n                \r\n                  \r\n              \r\n                </ion-col>\r\n              </ion-row>\r\n              <ion-row *ngIf=\"active_order !== order.order_number && !panelOpenState \">\r\n                <ion-item   class=\"ion-no-padding ion-no-margin \" style=\"    --inner-padding-end: 0px;width: 100%;\">\r\n                  <div\r\n               \r\n                  *ngFor=\"let item of order.items; let z = index\"\r\n                >\r\n                  <div  style=\"float: left; margin: 5px\" *ngFor=\"let image of item.productImage; let g = index\">\r\n                    <ion-avatar *ngIf=\"g == 0 && !item.return\">\r\n                      <img src=\"{{ image.url }}\" />\r\n                    </ion-avatar>\r\n                  </div>\r\n                </div>\r\n                </ion-item>\r\n              </ion-row>\r\n              <ion-row *ngIf=\"active_order !== order.order_number && !panelOpenState \">\r\n                <ion-col style=\"padding-bottom:48px;padding-top: 16px;\" size=12>\r\n                  <div class=\"progress\" style=\"margin-right: 5px;\r\n                  margin-left: 5px;\">\r\n                    <div style=\"width: 90vw;\" style=\"width: 100%;\" class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\">\r\n                    \r\n                     \r\n              \r\n                  <ion-card class=\"center active progress-card one ion-no-margin\">\r\n                    <ion-icon  style=\"color: white;font-size: 5vw;\" name=\"reader\"></ion-icon>\r\n              \r\n                  </ion-card>\r\n                  <ion-label class=\"one\" style=\"padding-top: 64px  !important ;z-index: 2;padding-top: 16px;color:grey\">\r\n                    Processed\r\n                </ion-label>\r\n                 \r\n                \r\n              \r\n                  <ion-card  class=\"active progress-card center three ion-no-margin\">\r\n               \r\n                      <img style=\"max-width: 75%; display: block;\" src=\"./assets/Accountsshipped.svg\" alt=\"\">\r\n                    \r\n                  </ion-card>\r\n                  <ion-label class=\"three\" style=\" padding-top: 64px !important;z-index: 2;padding-top: 16px;color:grey\">\r\n                    En Rout\r\n                  </ion-label>\r\n              \r\n              \r\n                  <ion-card  class=\"active heartbeat center progress-card four  ion-no-margin\">\r\n              \r\n                      \r\n                      <ion-icon style=\"font-size: 5vw;color: white;\" name=\"home\"></ion-icon>\r\n                 \r\n                \r\n                  </ion-card>\r\n                  <ion-label class=\"four \" style=\"padding-top: 64px !important;z-index: 2;padding-top: 16px;color:grey\">\r\n                    Delivered\r\n                  </ion-label>\r\n               \r\n              \r\n                   \r\n               \r\n                    \r\n                   \r\n                    </div>\r\n                 \r\n                 \r\n                  </div>\r\n                </ion-col>\r\n              </ion-row>\r\n              <ion-row>\r\n                <ion-col size=12>\r\n                  <div *ngIf=\"active_order == order.order_number \">\r\n             \r\n                    <div *ngFor=\"let item of order.items; let i = index\" size=12>\r\n                      <ion-item-sliding>\r\n                        <ion-item-options side=\"end\">\r\n                          <ion-item-option style=\"z-index: 2;\" color=\"danger\" (click)=\"return(item, order)\"\r\n                            >Return</ion-item-option\r\n                          >\r\n                        </ion-item-options>\r\n\r\n                        <ion-item class=\"ion-no-padding ion-no-margin\" style=\"    --inner-padding-end: 0px;\">\r\n                          <ion-grid>\r\n                            <ion-row>\r\n                              <ion-col class=\"center\" size=\"2\">\r\n                               \r\n                               \r\n                                <div   *ngFor=\"let image of item.productImage; let w = index\">\r\n                                  <ion-avatar *ngIf=\"w == 0\">\r\n                                    <img src=\"{{ image.url }}\" />\r\n                                  </ion-avatar>\r\n                                </div>\r\n                            \r\n                               \r\n                              </ion-col>\r\n                              <ion-col class=\"center\" size=\"4\">\r\n                                <ion-label>\r\n                                  <sub>\r\n                                    {{ item.productName }}\r\n                                  </sub>\r\n                                </ion-label>\r\n                              </ion-col>\r\n                              <ion-col class=\"center\" size=\"3\">\r\n                                <ion-label>\r\n                                  <sub> {{item.amount}} </sub>\r\n                                </ion-label>\r\n                              </ion-col>\r\n                              <ion-col class=\"center\" size=\"3\">\r\n                                <ion-badge color=\"danger\" *ngIf=\"item.return\">\r\n                                  <sub>\r\n                                  Returned\r\n                                  </sub>\r\n                                </ion-badge>\r\n                              </ion-col>\r\n                            </ion-row>\r\n                          </ion-grid>\r\n                        </ion-item>\r\n\r\n                    </ion-item-sliding>\r\n                      </div>\r\n                 \r\n    \r\n                  </div>\r\n                </ion-col>\r\n              </ion-row>\r\n              \r\n              <!--       <ion-row>\r\n                <ion-col *ngIf=\"order.delivery_ready\" class=\"center\" size=\"6\">\r\n                  <ion-label>Delivery on the way</ion-label>\r\n                </ion-col>\r\n              </ion-row>-->\r\n            </ion-grid>\r\n       \r\n          </ion-card>\r\n        </div>\r\n      </div>\r\n\r\n     \r\n      <!------------------------------------returned orders ---------------------\r\n\r\n      <div *ngSwitchCase=\"'Returns'\">\r\n        <div *ngFor=\"let order of orderList$ | async; let i = index\">\r\n          <ion-card     (click)=\"activeOrder(order.order_number)\"  *ngIf=\"order.fullfilled && order.return\" >\r\n            <ion-grid class=\"ion-no-margin\">\r\n              <ion-row style=\"padding-top: 16px;\">\r\n                <ion-col class=\"center\" size=\"6\">\r\n                  <ion-label style=\"padding-left: 5px; text-align: start;width: 100%;\" >ORDER <b style=\"color: #018786;\">#{{ order.order_number }}</b></ion-label>\r\n                </ion-col>\r\n                <ion-col class=\"center\" size=\"6\">\r\n                  \r\n                      <ion-label style=\"padding-right: 5px; text-align: end;width: 100%;\" > \r\n                        Date: {{ order.date | date: \"MMM d\" }}\r\n                      </ion-label>\r\n                  \r\n                </ion-col>\r\n\r\n              </ion-row>\r\n              <ion-row>\r\n                <ion-col size=7>\r\n\r\n                  <ion-label style=\"padding-right: 5px; text-align: end;width: 100%;\" *ngIf=\"order.delivery_date\">\r\n                    Delivery Date: {{order.delivery_date | date: \"MMM d ,yy\" }}\r\n                   </ion-label>\r\n                </ion-col>\r\n                <ion-col size=5>\r\n                 \r\n                   \r\n\r\n                    <ion-label style=\"padding-right: 5px; text-align: end;width: 100%;\"  *ngIf=\"order.commit_date == null\">\r\n                    \r\n                       <sub> Queued 4 Pocessing </sub> \r\n                   \r\n                     </ion-label>\r\n                     <ion-chip class=\"center\" style=\"padding-right: 5px; width: 100%;\" outline *ngIf=\"order.return\">\r\n                        Returned\r\n                     </ion-chip>\r\n                   \r\n                    \r\n                  \r\n              \r\n                </ion-col>\r\n              </ion-row>\r\n              <ion-row *ngIf=\"active_order !== order.order_number && !panelOpenState \">\r\n                <ion-item   class=\"ion-no-padding ion-no-margin \" style=\"    --inner-padding-end: 0px;width: 100%;\">\r\n                  <div\r\n               \r\n                  *ngFor=\"let item of order.items; let z = index\"\r\n                >\r\n                  <div  style=\"float: left; margin: 5px\" *ngFor=\"let image of item.productImage; let g = index\">\r\n                    <ion-avatar *ngIf=\"g == 0\">\r\n                      <img src=\"{{ image.url }}\" />\r\n                    </ion-avatar>\r\n                  </div>\r\n                </div>\r\n                </ion-item>\r\n              </ion-row>\r\n             \r\n              <ion-row>\r\n                <ion-col size=12>\r\n                  <div *ngIf=\"active_order == order.order_number \">\r\n             \r\n                    <div *ngFor=\"let item of order.items; let i = index\" size=12>\r\n                   \r\n                        <ion-item *ngIf=\"return\" class=\"ion-no-padding ion-no-margin\" style=\"    --inner-padding-end: 0px;\">\r\n                          <ion-grid>\r\n                            <ion-row>\r\n                              <ion-col class=\"center\" size=\"2\">\r\n                               \r\n                               \r\n                                <div   *ngFor=\"let image of item.productImage; let w = index\">\r\n                                  <ion-avatar *ngIf=\"w == 0\">\r\n                                    <img src=\"{{ image.url }}\" />\r\n                                  </ion-avatar>\r\n                                </div>\r\n                            \r\n                               \r\n                              </ion-col>\r\n                              <ion-col class=\"center\" size=\"4\">\r\n                                <ion-label>\r\n                                  <sub>\r\n                                    {{ item.productName }}\r\n                                  </sub>\r\n                                </ion-label>\r\n                              </ion-col>\r\n                              <ion-col class=\"center\" size=\"3\">\r\n                                <ion-label>\r\n                                  <sub> {{item.amount}} </sub>\r\n                                </ion-label>\r\n                              </ion-col>\r\n                              <ion-col class=\"center\" size=\"3\">\r\n                                <ion-badge color=\"danger\">\r\n                                  <sub>\r\n                                   RETURN\r\n                                  </sub>\r\n                                </ion-badge>\r\n                              </ion-col>\r\n                            </ion-row>\r\n                         \r\n                          </ion-grid>\r\n                        </ion-item>\r\n                    \r\n                      </div>\r\n                 \r\n    \r\n                  </div>\r\n                </ion-col>\r\n              </ion-row>\r\n              \r\n                   <ion-row>\r\n                <ion-col *ngIf=\"order.delivery_ready\" class=\"center\" size=\"6\">\r\n                  <ion-label>Delivery on the way</ion-label>\r\n                </ion-col>\r\n              </ion-row>-\r\n            </ion-grid>\r\n       \r\n          </ion-card>\r\n        </div>\r\n      </div>\r\n      ------------>\r\n     </div>\r\n    \r\n\r\n\r\n    \r\n  </ion-card-content>\r\n</ion-card>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/auth/pages/profile/components/orders/query/query.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/auth/pages/profile/components/orders/query/query.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-list>\r\n  <ion-list-header style=\"text-align: center;\"><h1> Order </h1></ion-list-header>\r\n  <ion-item button>Cancel Order</ion-item>\r\n  <ion-item  button>Allow More Time</ion-item>\r\n\r\n  <ion-item lines=\"none\" detail=\"false\" button onClick=\"dismissPopover()\">Close</ion-item>\r\n</ion-list>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/auth/pages/profile/components/product-review/product-review.component.html":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/auth/pages/profile/components/product-review/product-review.component.html ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-card style=\"border-radius: 5vw; height:78vh\" >\r\n  <ion-card-content style=\"min-height:100%; padding: 13px 5px 13px 5px; --background: #f5fafa; overflow: scroll\">\r\n   \r\n      <div *ngFor=\"let review of productReviews$ |async \">\r\n\r\n        <ion-card>\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col size=2>\r\n \r\n                <div   *ngFor=\"let image of review.product.productImage ; let w = index\">\r\n                  <ion-avatar style=\"height: 15vw;width: 15vw;\" *ngIf=\"w == 0\">\r\n                    <img src=\"{{ image.url }}\" />\r\n                  </ion-avatar>\r\n                </div>\r\n\r\n              </ion-col>\r\n              <ion-col style=\"    padding-left: 15px\" class=\"center\" size=\"7\">\r\n                <ion-label style=\"text-overflow: ellipsis;\r\n                overflow: hidden;\r\n                white-space: nowrap;\">{{ review.product.productName }}</ion-label>\r\n              </ion-col>\r\n              <ion-col class=\"center\" size=\"3\">\r\n                <ion-label>{{ review.product.productPrice | currency: \"R\" }}</ion-label>\r\n              </ion-col>\r\n\r\n            </ion-row>\r\n            <ion-row>\r\n              <ion-col size=12>\r\n                <rating\r\n                    [rate]=\"review.rating.rate\"\r\n                    class=\"rating\"\r\n                    readonly=\"true\"\r\n                    size=\"small\"\r\n                    (rateChange)=\"onRateChange($event)\"\r\n                  ></rating>\r\n              </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n              <ion-col size=12>\r\n                <ion-label>\r\n                  <sub>\r\n                    {{ review.rating.comment }}\r\n                  </sub>\r\n                </ion-label>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-card>\r\n\r\n      </div>\r\n  \r\n         \r\n\r\n     \r\n          \r\n\r\n\r\n\r\n  </ion-card-content>\r\n</ion-card>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/auth/pages/profile/components/settings/settings.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/auth/pages/profile/components/settings/settings.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-card style=\"border-radius: 5vw; height:78vh\">\r\n\r\n  <ion-card-content  class=\"center\" style=\"height:100%;--background: #F5FAFA;overflow:visible\">\r\n \r\n  <ion-grid>\r\n      <ion-row>\r\n        <ion-col size=12>\r\n          <ion-button (click)=\"gotTo('/user/forgot-password')\"  color=\"white\" class=\"ion-no-padding\" fill=\"solid\" expand=\"block\" shape=\"round\" size=\"default\">\r\n            <ion-icon slot=\"icon-only\" style=\"color: #018786\" class=\"ion-padding-end\" name=\"key-outline\"></ion-icon>\r\n            <sub style=\"color: #018786\">Change Password</sub>\r\n          </ion-button>\r\n        </ion-col>\r\n        <!--\r\n        <ion-col size=12>\r\n          <ion-button  color=\"white\" class=\"ion-no-padding\" fill=\"solid\" expand=\"block\" shape=\"round\" size=\"default\">\r\n            <ion-icon  slot=\"icon-only\" style=\"color: #018786\" class=\"ion-padding-end\" name=\"card-outline\"></ion-icon>\r\n            <sub style=\"color: #018786\">Change Payment Details</sub>\r\n          </ion-button>\r\n        </ion-col>\r\n        -->\r\n       \r\n        <ion-col size=12>\r\n          <ion-button  (click)=\"setRoute()\"  color=\"white\" class=\"ion-no-padding\" fill=\"solid\" expand=\"block\" shape=\"round\" size=\"default\">\r\n           \r\n            <ion-icon slot=\"icon-only\" style=\" color: #018786\" class=\"ion-padding-end\" name=\"clipboard-outline\" ></ion-icon>\r\n            <sub style=\"color: #018786\">Register A store</sub>\r\n          </ion-button>\r\n        </ion-col>\r\n        <!--\r\n  <ion-col size=12>\r\n          <ion-button  color=\"white\" class=\"ion-no-padding\" fill=\"solid\" expand=\"block\" shape=\"round\" size=\"default\">\r\n            <ion-icon slot=\"icon-only\" style=\" color: #018786\" class=\"ion-padding-end\"  name=\"trash-outline\"></ion-icon>\r\n            <sub style=\"color: #018786\">Delete Profile</sub>\r\n          </ion-button>\r\n        </ion-col>\r\n        -->\r\n       \r\n   \r\n       \r\n      </ion-row>\r\n    </ion-grid>\r\n\r\n\r\n  </ion-card-content>\r\n\r\n\r\n</ion-card>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/auth/pages/profile/profile.page.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/auth/pages/profile/profile.page.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar class=\"clear_navbar ion-text-center\">\r\n    <ion-buttons (click)=\"goBack()\" slot=\"start\">\r\n      <ion-icon name=\"chevron-back-outline\"></ion-icon>\r\n    </ion-buttons>\r\n\r\n    <ion-label color=\"primary\">\r\n      {{title}}\r\n    </ion-label>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n<ion-img style=\"    position: absolute;\" src=\"../assets/diego-ph-fIq0tET6llw-unsplash.jpg\">\r\n\r\n</ion-img>\r\n\r\n\r\n  <ion-card  *ngIf=\"bottom_component == 'default'\" style=\"border-radius: 5vw; margin: 20vh 10px 10px 10px !important;height: 70vh;overflow: visible;\">\r\n\r\n\r\n<div style=\"    padding-top: 20px;\">\r\n  <ion-grid >\r\n    <ion-row>\r\n      <ion-col size=4>\r\n\r\n      </ion-col>\r\n      <ion-col class=\"center\" size=4>\r\n        <ion-fab style=\"top:-11vh\" *ngFor=\"let image of profile$.profileImage\">\r\n          <ion-avatar *ngIf=\"!image\" class=\"profile_pic\">\r\n            <ion-img src=\"../assets/carbon_user-filled.svg\"></ion-img>\r\n          </ion-avatar>\r\n          <ion-avatar *ngIf=\"image\" class=\"profile_pic\">\r\n            <ion-img src=\"{{image.url}}\"></ion-img>\r\n          </ion-avatar>\r\n        </ion-fab>\r\n      </ion-col>\r\n      <ion-col size=4>\r\n        \r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col size=12>\r\n        <ion-title class=\"center\">\r\n          <h1 >\r\n            {{profile$.first_name}} {{profile$.last_name}}\r\n          </h1>\r\n        </ion-title>\r\n      </ion-col>\r\n      <ion-col class=\"ion-no-padding\"  size=12>\r\n        <ion-text class=\"center\">\r\n          <sub>\r\n            {{profile$.address.city  }},{{profile$.address.province }}\r\n          </sub>\r\n        </ion-text>\r\n      </ion-col>\r\n  \r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col size=12>\r\n        <ion-item  style=\"--inner-padding-end: 0px\" class=\"ion-no-padding\">\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col size=4>\r\n                <ion-label class=\"center grey\">\r\n                  <sub>\r\n                    NOTIFICATIONS\r\n                  </sub>\r\n                </ion-label>\r\n                <h1 class=\"center \">\r\n                  1\r\n                </h1>\r\n              </ion-col>\r\n              <ion-col size=4>\r\n                <ion-label class=\"center grey\">\r\n                  <sub>\r\n                    ACTIVE ORDERS\r\n                  </sub>\r\n                </ion-label>\r\n                <h1 class=\"center\">\r\n                  {{order_list }}\r\n                </h1>\r\n              </ion-col>\r\n              <ion-col size=4>\r\n                <ion-label  class=\"center grey\">\r\n                  <sub >\r\n                    REVIEWS\r\n                  </sub>\r\n                </ion-label>\r\n                <h1 class=\"center\">\r\n                  {{reviews }}\r\n                </h1>\r\n              </ion-col>\r\n            </ion-row>\r\n           \r\n          </ion-grid>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n  \r\n  </ion-grid>\r\n \r\n</div>\r\n\r\n<div>\r\n <ion-grid>\r\n   <ion-row>\r\n     <ion-col class=\"center\" size=6>\r\n       <a  (click)=\"goTo('Purchases')\">\r\n        <ion-card color=\"tertiary\" class=\"option\">\r\n          <img style=\"max-width: 100%; display: block;\" src=\"./assets/accountsOrders.svg\" alt=\"\">\r\n         \r\n        </ion-card>\r\n        <ion-label class=\"center\">\r\n          <sub>\r\n            MANAGE PURCHASES\r\n          </sub>\r\n      </ion-label>\r\n       </a>\r\n    \r\n     </ion-col>\r\n     <ion-col class=\"center\" size=6>\r\n       <a      (click)=\"goTo('Reviews')\">\r\n        <ion-card color=\"secondary\" class=\"option\">\r\n          <img style=\"max-width: 100%; display: block;\" src=\"./assets/accountsReview.svg\" alt=\"\">\r\n        </ion-card>\r\n        <ion-label class=\"center\">\r\n          <sub>\r\n           PRODUCT REVIEWS\r\n          </sub>\r\n      </ion-label>\r\n       </a>\r\n    </ion-col>\r\n   </ion-row>\r\n  <!--\r\n<ion-row>\r\n    <ion-col size=12>\r\n      <ion-button color=\"primary\" fill=\"outline\" expand=\"block\" shape=\"round\">\r\n        Edit account\r\n      </ion-button>\r\n    </ion-col>\r\n  </ion-row>\r\n  --> \r\n  \r\n </ion-grid>\r\n</div>\r\n\r\n\r\n\r\n \r\n</ion-card>\r\n\r\n<div [ngSwitch]=\"bottom_component\">\r\n\r\n  <app-orders class=\"component\" *ngSwitchCase=\"'Purchases'\"></app-orders>\r\n  <app-notifications\r\n    class=\"component\"\r\n    *ngSwitchCase=\"'notifications'\"\r\n    (childSegment)=\"received($event)\"\r\n  ></app-notifications>\r\n  <app-settings class=\"component\" *ngSwitchCase=\"'Settings'\"></app-settings>\r\n  <app-product-review\r\n    class=\"component\"\r\n    *ngSwitchCase=\"'Reviews'\"\r\n  ></app-product-review>\r\n  <app-add-review\r\n    class=\"component\"\r\n    *ngSwitchCase=\"'add-Reviews'\"\r\n    (childSegment)=\"received($event)\"\r\n  ></app-add-review>\r\n</div>\r\n\r\n<!--\r\n  <ion-grid class=\"top_grid\">\r\n    <ion-row *ngFor=\"let image of profile$.profileImage\">\r\n      <ion-col class=\"center\" size=\"6\">\r\n        <ion-avatar *ngIf=\"!image\" class=\"profile_pic\">\r\n          <ion-img src=\"../assets/carbon_user-filled.svg\"></ion-img>\r\n        </ion-avatar>\r\n        <ion-avatar *ngIf=\"image\" class=\"profile_pic\">\r\n          <ion-img src=\"{{image.url}}\"></ion-img>\r\n        </ion-avatar>\r\n      </ion-col>\r\n      <ion-col size=\"6\">\r\n        <ion-grid class=\"ion-no-padding\">\r\n          <ion-row class=\"ion-no-padding\">\r\n            <ion-col class=\"ion-no-padding\" size=\"12\">\r\n              <h5 style=\"color: #018786;\">\r\n                {{profile$.first_name}} {{profile$.last_name}}\r\n              </h5>\r\n            </ion-col>\r\n            <ion-col class=\"ion-no-padding\" size=\"12\">\r\n              <ion-label>\r\n                <sub style=\"color: #018786;\">\r\n                  {{profile$.email}}\r\n                </sub>\r\n              </ion-label>\r\n            </ion-col>\r\n            <ion-col class=\"ion-no-padding location\" size=\"12\">\r\n              <ion-label>\r\n                <sub style=\"color: #018786;\">\r\n                 {{profile$.address.city}},{{profile$.address.province}}\r\n                </sub>\r\n              </ion-label>\r\n            </ion-col>\r\n            <ion-col size=\"12\">\r\n              <ion-toolbar style=\"left:-15vw;--background: transparent;\">\r\n                <ion-buttons slot=\"start\">\r\n                  <ion-button (click)=\"goTo('notifications')\">\r\n                    <ion-icon class=\"ion-padding\"     name=\"Notifications-outline\"></ion-icon>\r\n                  </ion-button>\r\n                </ion-buttons>\r\n                <ion-buttons slot=\"end\">\r\n                  <ion-button>\r\n                    <ion-icon class=\"ion-padding\" name=\"create-outline\"></ion-icon>\r\n                  </ion-button>\r\n                </ion-buttons>\r\n              </ion-toolbar>\r\n      \r\n            </ion-col>\r\n\r\n          </ion-row>\r\n        </ion-grid>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <div class=\"main_panel\" *ngIf=\"bottom_component == 'default'\">\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col size=\"12\">\r\n          <ion-button\r\n            (click)=\"goTo('Purchases')\"\r\n            class=\"ion-no-padding\"\r\n            fill=\"clear\"\r\n            size=\"default\"\r\n          >\r\n            <ion-icon\r\n              class=\"ion-padding-end\"\r\n              name=\"pricetags-outline\"\r\n            ></ion-icon>\r\n            purchases\r\n          </ion-button>\r\n        </ion-col>\r\n        <ion-col size=\"12\">\r\n          <ion-button\r\n            (click)=\"goTo('Reviews')\"\r\n            class=\"ion-no-padding\"\r\n            fill=\"clear\"\r\n            size=\"default\"\r\n          >\r\n            <ion-icon\r\n              class=\"ion-padding-end\"\r\n              name=\"heart-half-outline\"\r\n            ></ion-icon>\r\n            Product Reviews\r\n          </ion-button>\r\n        </ion-col>\r\n        <ion-col size=\"12\">\r\n          <ion-button\r\n            (click)=\"goTo('Settings')\"\r\n            class=\"ion-no-padding\"\r\n            fill=\"clear\"\r\n            size=\"default\"\r\n          >\r\n            <ion-icon\r\n              class=\"ion-padding-end\"\r\n              name=\"settings-outline\"\r\n            ></ion-icon>\r\n            Settings\r\n          </ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </div>\r\n  <div [ngSwitch]=\"bottom_component\">\r\n\r\n    <app-orders class=\"component\" *ngSwitchCase=\"'Purchases'\"></app-orders>\r\n    <app-notifications\r\n      class=\"component\"\r\n      *ngSwitchCase=\"'notifications'\"\r\n      (childSegment)=\"received($event)\"\r\n    ></app-notifications>\r\n    <app-settings class=\"component\" *ngSwitchCase=\"'Settings'\"></app-settings>\r\n    <app-product-review\r\n      class=\"component\"\r\n      *ngSwitchCase=\"'Reviews'\"\r\n    ></app-product-review>\r\n    <app-add-review\r\n      class=\"component\"\r\n      *ngSwitchCase=\"'add-Reviews'\"\r\n      (childSegment)=\"received($event)\"\r\n    ></app-add-review>\r\n  </div>\r\n-->\r\n</ion-content>\r\n\r\n<ion-footer >\r\n  <ion-toolbar\r\n\r\n  \r\n  >\r\n    <ion-grid>\r\n      <ion-row >\r\n        <ion-col size=\"4\">\r\n          <ion-button\r\n          size=\"small\"\r\n          fill=\"clear\"\r\n          shape=\"round\"\r\n          (click)=\"goTo('notifications')\"\r\n      \r\n        >\r\n          <ion-icon style=\"color: grey\" name=\"notifications-outline\"></ion-icon>\r\n          <sub style=\"color: grey; left: 5px\">  NOTIFICATIONS</sub>\r\n        </ion-button>\r\n\r\n\r\n        </ion-col>\r\n        <ion-col class=\"center\" size=\"4\">\r\n          <ion-fab>\r\n            <ion-fab-button color=\"white\" (click)=\"goBack()\" size=\"small\">\r\n              <ion-icon\r\n                *ngIf=\"bottom_component !=='default'\"\r\n                name=\"home\"\r\n                color=\"primary\"\r\n              ></ion-icon>\r\n            \r\n              <ion-icon *ngIf=\"bottom_component =='default'\"      color=\"primary\" name=\"basket\"></ion-icon>\r\n            </ion-fab-button>\r\n          </ion-fab>\r\n          <!--<ion-button expand=\"block\" fill=\"clear\"size=\"small\">\r\n            <ion-icon  size=\"large\" slot=\"icon-only\" name=\"document\"></ion-icon>\r\n          </ion-button>-->\r\n        </ion-col>\r\n        <ion-col size=\"4\">\r\n\r\n          <ion-button\r\n          size=\"small\"\r\n          fill=\"clear\"\r\n          shape=\"round\"\r\n          (click)=\"goTo('Settings')\"\r\n      \r\n        >\r\n          <ion-icon style=\"color: grey\" name=\"settings-outline\"></ion-icon>\r\n          <sub style=\"color: grey; left: 5px\">   SETTINGS </sub>\r\n        </ion-button>\r\n\r\n\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n");

/***/ }),

/***/ "./src/app/modules/auth/pages/profile/components/add-review/add-review.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/auth/pages/profile/components/add-review/add-review.component.scss ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYXV0aC9wYWdlcy9wcm9maWxlL2NvbXBvbmVudHMvYWRkLXJldmlldy9hZGQtcmV2aWV3LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/auth/pages/profile/components/add-review/add-review.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/auth/pages/profile/components/add-review/add-review.component.ts ***!
  \******************************************************************************************/
/*! exports provided: AddReviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddReviewComponent", function() { return AddReviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var src_app_core_modules_services_products_product_facade_product_facade_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core-modules/services/products/product-facade/product-facade.service */ "./src/app/core-modules/services/products/product-facade/product-facade.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");





var AddReviewComponent = /** @class */ (function () {
    function AddReviewComponent(router, _productFacade) {
        this.router = router;
        this._productFacade = _productFacade;
        this.reviewForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            rate: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
            comment: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
        });
    }
    AddReviewComponent.prototype.ngOnInit = function () {
        this.product$ = this._productFacade.getCurrentProduct();
    };
    AddReviewComponent.prototype.onSubmit = function () {
        var _this = this;
        //construct the ratings for backend.
        this.product$.subscribe(function (res) {
            var data = {
                _id: res[0]._id,
                rate: _this.reviewForm.value.rate,
                comment: "none",
            };
            _this._productFacade.updateReview(data);
            //change segment
        }, function (err) {
            console.log(err);
        });
    };
    AddReviewComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: src_app_core_modules_services_products_product_facade_product_facade_service__WEBPACK_IMPORTED_MODULE_2__["ProductFacadeService"] }
    ]; };
    AddReviewComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-add-review",
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./add-review.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/auth/pages/profile/components/add-review/add-review.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./add-review.component.scss */ "./src/app/modules/auth/pages/profile/components/add-review/add-review.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            src_app_core_modules_services_products_product_facade_product_facade_service__WEBPACK_IMPORTED_MODULE_2__["ProductFacadeService"]])
    ], AddReviewComponent);
    return AddReviewComponent;
}());



/***/ }),

/***/ "./src/app/modules/auth/pages/profile/components/notifications/notifications.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/auth/pages/profile/components/notifications/notifications.component.scss ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-card {\n  display: flex;\n  flex-direction: column;\n}\n\n::ng-deep .mat-expansion-panel-header {\n  padding: 0px;\n}\n\n.inner_notification {\n  box-shadow: none;\n  display: block;\n  margin-left: 0px;\n  margin-right: 0px;\n  margin-bottom: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hdXRoL3BhZ2VzL3Byb2ZpbGUvY29tcG9uZW50cy9ub3RpZmljYXRpb25zL0M6XFxVc2Vyc1xcTWFydmluXFxEb2N1bWVudHNcXEdpdEh1YlxcYWZyb2JcXGNsaWVudC9zcmNcXGFwcFxcbW9kdWxlc1xcYXV0aFxccGFnZXNcXHByb2ZpbGVcXGNvbXBvbmVudHNcXG5vdGlmaWNhdGlvbnNcXG5vdGlmaWNhdGlvbnMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvYXV0aC9wYWdlcy9wcm9maWxlL2NvbXBvbmVudHMvbm90aWZpY2F0aW9ucy9ub3RpZmljYXRpb25zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxZQUFBO0FDRUY7O0FEQUE7RUFDRSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNHRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYXV0aC9wYWdlcy9wcm9maWxlL2NvbXBvbmVudHMvbm90aWZpY2F0aW9ucy9ub3RpZmljYXRpb25zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG46Om5nLWRlZXAgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyIHtcclxuICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuLmlubmVyX25vdGlmaWNhdGlvbntcclxuICBib3gtc2hhZG93OiBub25lO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTowcHhcclxuXHJcbn1cclxuIiwiaW9uLWNhcmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG46Om5nLWRlZXAgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyIHtcbiAgcGFkZGluZzogMHB4O1xufVxuXG4uaW5uZXJfbm90aWZpY2F0aW9uIHtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiAwcHg7XG4gIG1hcmdpbi1yaWdodDogMHB4O1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/auth/pages/profile/components/notifications/notifications.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/auth/pages/profile/components/notifications/notifications.component.ts ***!
  \************************************************************************************************/
/*! exports provided: NotificationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsComponent", function() { return NotificationsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var src_app_core_modules_services_products_product_facade_product_facade_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core-modules/services/products/product-facade/product-facade.service */ "./src/app/core-modules/services/products/product-facade/product-facade.service.ts");
/* harmony import */ var src_app_core_modules_services_activities_activity_facade_activity_facade_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core-modules/services/activities/activity-facade/activity-facade.service */ "./src/app/core-modules/services/activities/activity-facade/activity-facade.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var NotificationsComponent = /** @class */ (function () {
    function NotificationsComponent(_productFacade, activityFacade) {
        this._productFacade = _productFacade;
        this.activityFacade = activityFacade;
        this.childSegment = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.rate_order_notification = [];
    }
    NotificationsComponent.prototype.ngOnInit = function () {
        //Load activities
        this.activityFacade.loadNotifications();
        //get activities
        this.notifications$ = this.activityFacade.getNotifications$().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])());
    };
    NotificationsComponent.prototype.reviewProduct = function (data) {
        this.childSegment.emit("add-Reviews");
        //set currrent product
        this._productFacade.loadCurrentProduct(data);
    };
    NotificationsComponent.ctorParameters = function () { return [
        { type: src_app_core_modules_services_products_product_facade_product_facade_service__WEBPACK_IMPORTED_MODULE_2__["ProductFacadeService"] },
        { type: src_app_core_modules_services_activities_activity_facade_activity_facade_service__WEBPACK_IMPORTED_MODULE_3__["ActivityFacadeService"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], NotificationsComponent.prototype, "childSegment", void 0);
    NotificationsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-notifications",
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./notifications.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/auth/pages/profile/components/notifications/notifications.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./notifications.component.scss */ "./src/app/modules/auth/pages/profile/components/notifications/notifications.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_core_modules_services_products_product_facade_product_facade_service__WEBPACK_IMPORTED_MODULE_2__["ProductFacadeService"],
            src_app_core_modules_services_activities_activity_facade_activity_facade_service__WEBPACK_IMPORTED_MODULE_3__["ActivityFacadeService"]])
    ], NotificationsComponent);
    return NotificationsComponent;
}());



/***/ }),

/***/ "./src/app/modules/auth/pages/profile/components/orders/orders.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/modules/auth/pages/profile/components/orders/orders.component.scss ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep .mat-expansion-panel-header {\n  padding: 0px;\n}\n\nion-card {\n  display: flex;\n  flex-direction: column;\n}\n\n.progress-card {\n  z-index: 1;\n  height: 10vw;\n  width: 10vw;\n  border-radius: 20vw;\n  --background:#e9ecef;\n  overflow: visible;\n}\n\n.one {\n  left: 0;\n  margin-left: 2%;\n  position: absolute;\n}\n\n.three {\n  left: 45%;\n  position: absolute;\n}\n\n.four {\n  right: 2%;\n  position: absolute;\n}\n\n.progress-bar {\n  background-color: #018786 !important;\n}\n\n.active {\n  --background: #018786!important;\n}\n\n.pending_commit {\n  --background: #FFD700!important;\n}\n\n.being_processed {\n  --background: #e9ecef!important;\n}\n\nion-avatar {\n  height: 15vw;\n  width: 15vw;\n}\n\n/* ----------------------------------------------\n * Generated by Animista on 2020-10-8 22:22:56\n * Licensed under FreeBSD License.\n * See http://animista.net/license for more info. \n * w: http://animista.net, t: @cssanimista\n * ---------------------------------------------- */\n\n/**\n * ----------------------------------------\n * animation heartbeat\n * ----------------------------------------\n */\n\n@-webkit-keyframes heartbeat {\n  from {\n    transform: scale(1);\n    transform-origin: center center;\n    -webkit-animation-timing-function: ease-out;\n    animation-timing-function: ease-out;\n  }\n  10% {\n    transform: scale(0.91);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n  }\n  17% {\n    transform: scale(0.98);\n    -webkit-animation-timing-function: ease-out;\n    animation-timing-function: ease-out;\n  }\n  33% {\n    transform: scale(0.87);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n  }\n  45% {\n    transform: scale(1);\n    -webkit-animation-timing-function: ease-out;\n    animation-timing-function: ease-out;\n  }\n}\n\n@keyframes heartbeat {\n  from {\n    transform: scale(1);\n    transform-origin: center center;\n    -webkit-animation-timing-function: ease-out;\n    animation-timing-function: ease-out;\n  }\n  10% {\n    transform: scale(0.91);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n  }\n  17% {\n    transform: scale(0.98);\n    -webkit-animation-timing-function: ease-out;\n    animation-timing-function: ease-out;\n  }\n  33% {\n    transform: scale(0.87);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n  }\n  45% {\n    transform: scale(1);\n    -webkit-animation-timing-function: ease-out;\n    animation-timing-function: ease-out;\n  }\n}\n\n.heartbeat {\n  -webkit-animation: heartbeat 8s ease-in-out infinite both;\n  animation: heartbeat 8s ease-in-out infinite both;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hdXRoL3BhZ2VzL3Byb2ZpbGUvY29tcG9uZW50cy9vcmRlcnMvQzpcXFVzZXJzXFxNYXJ2aW5cXERvY3VtZW50c1xcR2l0SHViXFxhZnJvYlxcY2xpZW50L3NyY1xcYXBwXFxtb2R1bGVzXFxhdXRoXFxwYWdlc1xccHJvZmlsZVxcY29tcG9uZW50c1xcb3JkZXJzXFxvcmRlcnMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvYXV0aC9wYWdlcy9wcm9maWxlL2NvbXBvbmVudHMvb3JkZXJzL29yZGVycy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQ0NGOztBRENBO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFFQSxvQkFBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FER0E7RUFDRSxPQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDQUY7O0FER0E7RUFDRSxTQUFBO0VBQ0Esa0JBQUE7QUNBRjs7QURFQTtFQUNFLFNBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0Usb0NBQUE7QUNDRjs7QURFQTtFQUNFLCtCQUFBO0FDQ0Y7O0FERUE7RUFDRSwrQkFBQTtBQ0NGOztBRENBO0VBQ0UsK0JBQUE7QUNFRjs7QURBQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FDR0Y7O0FEQUE7Ozs7O21EQUFBOztBQU9BOzs7O0VBQUE7O0FBS0M7RUFDQztJQUVVLG1CQUFBO0lBRUEsK0JBQUE7SUFDUiwyQ0FBQTtJQUNRLG1DQUFBO0VDRVY7RURBQTtJQUVVLHNCQUFBO0lBQ1IsMENBQUE7SUFDUSxrQ0FBQTtFQ0VWO0VEQUE7SUFFVSxzQkFBQTtJQUNSLDJDQUFBO0lBQ1EsbUNBQUE7RUNFVjtFREFBO0lBRVUsc0JBQUE7SUFDUiwwQ0FBQTtJQUNRLGtDQUFBO0VDRVY7RURBQTtJQUVVLG1CQUFBO0lBQ1IsMkNBQUE7SUFDUSxtQ0FBQTtFQ0VWO0FBQ0Y7O0FEQUE7RUFDRTtJQUVVLG1CQUFBO0lBRUEsK0JBQUE7SUFDUiwyQ0FBQTtJQUNRLG1DQUFBO0VDRVY7RURBQTtJQUVVLHNCQUFBO0lBQ1IsMENBQUE7SUFDUSxrQ0FBQTtFQ0VWO0VEQUE7SUFFVSxzQkFBQTtJQUNSLDJDQUFBO0lBQ1EsbUNBQUE7RUNFVjtFREFBO0lBRVUsc0JBQUE7SUFDUiwwQ0FBQTtJQUNRLGtDQUFBO0VDRVY7RURBQTtJQUVVLG1CQUFBO0lBQ1IsMkNBQUE7SUFDUSxtQ0FBQTtFQ0VWO0FBQ0Y7O0FEQUE7RUFDQyx5REFBQTtFQUNRLGlEQUFBO0FDRVQiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2F1dGgvcGFnZXMvcHJvZmlsZS9jb21wb25lbnRzL29yZGVycy9vcmRlcnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyIHtcclxuICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuXHJcbmlvbi1jYXJkIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuLnByb2dyZXNzLWNhcmR7XHJcbiAgei1pbmRleDogMTtcclxuICBoZWlnaHQ6IDEwdnc7XHJcbiAgd2lkdGg6IDEwdnc7XHJcbiAgYm9yZGVyLXJhZGl1czogMjB2dztcclxuXHJcbiAgLS1iYWNrZ3JvdW5kOiNlOWVjZWY7XHJcbiAgb3ZlcmZsb3c6IHZpc2libGU7XHJcbiAgXHJcbiBcclxufVxyXG4ub25le1xyXG4gIGxlZnQ6MDtcclxuICBtYXJnaW4tbGVmdDogMiU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcblxyXG4udGhyZWV7XHJcbiAgbGVmdDo0NSU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcbi5mb3Vye1xyXG4gIHJpZ2h0OjIlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHJcbn1cclxuLnByb2dyZXNzLWJhciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAxODc4NiFpbXBvcnRhbnQ7XHJcblxyXG59XHJcbi5hY3RpdmV7XHJcbiAgLS1iYWNrZ3JvdW5kOiAgIzAxODc4NiFpbXBvcnRhbnQ7XHJcblxyXG59XHJcbi5wZW5kaW5nX2NvbW1pdHtcclxuICAtLWJhY2tncm91bmQ6ICAjRkZENzAwIWltcG9ydGFudDtcclxufVxyXG4uYmVpbmdfcHJvY2Vzc2Vke1xyXG4gIC0tYmFja2dyb3VuZDogICNlOWVjZWYhaW1wb3J0YW50O1xyXG59XHJcbmlvbi1hdmF0YXJ7XHJcbiAgaGVpZ2h0OiAxNXZ3O1xyXG4gIHdpZHRoOiAxNXZ3O1xyXG59XHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqIEdlbmVyYXRlZCBieSBBbmltaXN0YSBvbiAyMDIwLTEwLTggMjI6MjI6NTZcclxuICogTGljZW5zZWQgdW5kZXIgRnJlZUJTRCBMaWNlbnNlLlxyXG4gKiBTZWUgaHR0cDovL2FuaW1pc3RhLm5ldC9saWNlbnNlIGZvciBtb3JlIGluZm8uIFxyXG4gKiB3OiBodHRwOi8vYW5pbWlzdGEubmV0LCB0OiBAY3NzYW5pbWlzdGFcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuLyoqXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogYW5pbWF0aW9uIGhlYXJ0YmVhdFxyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqL1xyXG4gQC13ZWJraXQta2V5ZnJhbWVzIGhlYXJ0YmVhdCB7XHJcbiAgZnJvbSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBjZW50ZXI7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBjZW50ZXI7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xyXG4gICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcclxuICB9XHJcbiAgMTAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjkxKTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjkxKTtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcclxuICAgICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcclxuICB9XHJcbiAgMTclIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjk4KTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk4KTtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xyXG4gIH1cclxuICAzMyUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuODcpO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuODcpO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xyXG4gICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xyXG4gIH1cclxuICA0NSUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcclxuICAgICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XHJcbiAgfVxyXG59XHJcbkBrZXlmcmFtZXMgaGVhcnRiZWF0IHtcclxuICBmcm9tIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGNlbnRlcjtcclxuICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGNlbnRlcjtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xyXG4gIH1cclxuICAxMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuOTEpO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTEpO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xyXG4gICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xyXG4gIH1cclxuICAxNyUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuOTgpO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTgpO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcclxuICAgICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XHJcbiAgfVxyXG4gIDMzJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC44Nyk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC44Nyk7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XHJcbiAgfVxyXG4gIDQ1JSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xyXG4gICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcclxuICB9XHJcbn1cclxuLmhlYXJ0YmVhdCB7XHJcblx0LXdlYmtpdC1hbmltYXRpb246IGhlYXJ0YmVhdCA4cyBlYXNlLWluLW91dCBpbmZpbml0ZSBib3RoO1xyXG5cdCAgICAgICAgYW5pbWF0aW9uOiBoZWFydGJlYXQgOHMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYm90aDtcclxufVxyXG4iLCI6Om5nLWRlZXAgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyIHtcbiAgcGFkZGluZzogMHB4O1xufVxuXG5pb24tY2FyZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5wcm9ncmVzcy1jYXJkIHtcbiAgei1pbmRleDogMTtcbiAgaGVpZ2h0OiAxMHZ3O1xuICB3aWR0aDogMTB2dztcbiAgYm9yZGVyLXJhZGl1czogMjB2dztcbiAgLS1iYWNrZ3JvdW5kOiNlOWVjZWY7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xufVxuXG4ub25lIHtcbiAgbGVmdDogMDtcbiAgbWFyZ2luLWxlZnQ6IDIlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi50aHJlZSB7XG4gIGxlZnQ6IDQ1JTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4uZm91ciB7XG4gIHJpZ2h0OiAyJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4ucHJvZ3Jlc3MtYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAxODc4NiAhaW1wb3J0YW50O1xufVxuXG4uYWN0aXZlIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMDE4Nzg2IWltcG9ydGFudDtcbn1cblxuLnBlbmRpbmdfY29tbWl0IHtcbiAgLS1iYWNrZ3JvdW5kOiAjRkZENzAwIWltcG9ydGFudDtcbn1cblxuLmJlaW5nX3Byb2Nlc3NlZCB7XG4gIC0tYmFja2dyb3VuZDogI2U5ZWNlZiFpbXBvcnRhbnQ7XG59XG5cbmlvbi1hdmF0YXIge1xuICBoZWlnaHQ6IDE1dnc7XG4gIHdpZHRoOiAxNXZ3O1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBHZW5lcmF0ZWQgYnkgQW5pbWlzdGEgb24gMjAyMC0xMC04IDIyOjIyOjU2XG4gKiBMaWNlbnNlZCB1bmRlciBGcmVlQlNEIExpY2Vuc2UuXG4gKiBTZWUgaHR0cDovL2FuaW1pc3RhLm5ldC9saWNlbnNlIGZvciBtb3JlIGluZm8uIFxuICogdzogaHR0cDovL2FuaW1pc3RhLm5ldCwgdDogQGNzc2FuaW1pc3RhXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGFuaW1hdGlvbiBoZWFydGJlYXRcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuQC13ZWJraXQta2V5ZnJhbWVzIGhlYXJ0YmVhdCB7XG4gIGZyb20ge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGNlbnRlcjtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgY2VudGVyO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XG4gIH1cbiAgMTAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC45MSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjkxKTtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbiAgfVxuICAxNyUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjk4KTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTgpO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XG4gIH1cbiAgMzMlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC44Nyk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjg3KTtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbiAgfVxuICA0NSUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XG4gIH1cbn1cbkBrZXlmcmFtZXMgaGVhcnRiZWF0IHtcbiAgZnJvbSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgY2VudGVyO1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBjZW50ZXI7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcbiAgfVxuICAxMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjkxKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTEpO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xuICB9XG4gIDE3JSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuOTgpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45OCk7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcbiAgfVxuICAzMyUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjg3KTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuODcpO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xuICB9XG4gIDQ1JSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcbiAgfVxufVxuLmhlYXJ0YmVhdCB7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBoZWFydGJlYXQgOHMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYm90aDtcbiAgYW5pbWF0aW9uOiBoZWFydGJlYXQgOHMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYm90aDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/auth/pages/profile/components/orders/orders.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/auth/pages/profile/components/orders/orders.component.ts ***!
  \**********************************************************************************/
/*! exports provided: OrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersComponent", function() { return OrdersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var src_app_core_modules_services_orders_order_facade_order_facade_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core-modules/services/orders/order-facade/order-facade.service */ "./src/app/core-modules/services/orders/order-facade/order-facade.service.ts");
/* harmony import */ var src_app_core_modules_services_header_header_state_header_state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core-modules/services/header/header-state/header-state.service */ "./src/app/core-modules/services/header/header-state/header-state.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _query_query_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./query/query.component */ "./src/app/modules/auth/pages/profile/components/orders/query/query.component.ts");







var OrdersComponent = /** @class */ (function () {
    function OrdersComponent(orderFacade, headerState, router, popoverController) {
        this.orderFacade = orderFacade;
        this.headerState = headerState;
        this.router = router;
        this.popoverController = popoverController;
        this.notifyParent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        //Observable,
        this.purchases_segment = "active";
        this.panelOpenState = false;
    }
    OrdersComponent.prototype.ngOnInit = function () {
        this.orderFacade.loadUserOrders();
        this.orderList$ = this.orderFacade.getUserOrders$();
        console.log(this.orderList$);
    };
    OrdersComponent.prototype.show = function (data) {
        console.log(data);
    };
    OrdersComponent.prototype.segmentChanged = function (data) {
        this.purchases_segment = data.detail.value;
        console.log(this.purchases_segment);
    };
    OrdersComponent.prototype.return = function (item, order) {
        this.headerState.setDataPassed({ product: item, order: order });
        this.router.navigate(["/user/return"]);
    };
    OrdersComponent.prototype.countDown = function (commit_date) {
        var dateSent = new Date();
        var currentDate = new Date(commit_date);
        return Math.floor((Date.UTC(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate()) -
            Date.UTC(dateSent.getFullYear(), dateSent.getMonth(), dateSent.getDate())) /
            (1000 * 60 * 60 * 24));
    };
    OrdersComponent.prototype.activeOrder = function (order) {
        if (order == this.active_order) {
            this.active_order = null;
        }
        else {
            this.active_order = order;
        }
    };
    OrdersComponent.prototype.orderProgress = function (order) {
        //first check if it has commit date
        var x;
        if (order.commit_date) {
            //check delivery ready start 
            if (order.delivery_ready) {
                //check delivery sattus start 
                if (order.delivery_status == "Delivery on the Way") {
                    //check if its fullfiled  start
                    if (order.fullfilled) {
                        x = "100%";
                    }
                    else {
                        x = '50%';
                    }
                    //check if its fullfiled  end
                }
                else {
                    x = '10%';
                }
                //check delivery sattus end
            }
            else {
                x = '0%';
            }
            //check delivery ready end
        }
        else {
            x = '0%';
        }
        return x;
    };
    //checks if the order is processed 
    OrdersComponent.prototype.isOrderProcessed = function (order) {
        var x;
        if (order.commit_date) {
            //check if its processed 
            if (order.delivery_ready) {
                x = 'active';
                console.log('here erev');
            }
            else {
                x = 'pending_commit heartbeat';
            }
        }
        else {
            x = ' being_processed';
        }
        return x;
    };
    //check if order is on its way
    OrdersComponent.prototype.isOrderOnTheWay = function (order) {
        var x;
        if (order.delivery_status == 'Delivery on the Way') {
            x = 'active';
        }
        else {
            x = 'being_processed ';
        }
        return x;
    };
    OrdersComponent.prototype.isOrderDelivered = function (order) {
        var y;
        if (order.fullfilled) {
            y = 'active';
        }
        else {
            y = 'being_processed';
        }
        return y;
    };
    OrdersComponent.prototype.presentPopover = function (ev) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var popover;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverController.create({
                            component: _query_query_component__WEBPACK_IMPORTED_MODULE_6__["QueryComponent"],
                            cssClass: 'my-custom-class',
                            event: ev,
                            translucent: true
                        })];
                    case 1:
                        popover = _a.sent();
                        return [4 /*yield*/, popover.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    OrdersComponent.prototype.returnedProducts = function (order) {
        var x;
        for (var i = 0; i < order.items; i++) {
            if (order.items[i].return) {
                x = x + 1;
            }
            console.log(x);
        }
        return x;
    };
    OrdersComponent.ctorParameters = function () { return [
        { type: src_app_core_modules_services_orders_order_facade_order_facade_service__WEBPACK_IMPORTED_MODULE_2__["OrderFacadeService"] },
        { type: src_app_core_modules_services_header_header_state_header_state_service__WEBPACK_IMPORTED_MODULE_3__["HeaderStateService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["PopoverController"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], OrdersComponent.prototype, "notifyParent", void 0);
    OrdersComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-orders",
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./orders.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/auth/pages/profile/components/orders/orders.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./orders.component.scss */ "./src/app/modules/auth/pages/profile/components/orders/orders.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_core_modules_services_orders_order_facade_order_facade_service__WEBPACK_IMPORTED_MODULE_2__["OrderFacadeService"],
            src_app_core_modules_services_header_header_state_header_state_service__WEBPACK_IMPORTED_MODULE_3__["HeaderStateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["PopoverController"]])
    ], OrdersComponent);
    return OrdersComponent;
}());



/***/ }),

/***/ "./src/app/modules/auth/pages/profile/components/orders/query/query.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/auth/pages/profile/components/orders/query/query.component.scss ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYXV0aC9wYWdlcy9wcm9maWxlL2NvbXBvbmVudHMvb3JkZXJzL3F1ZXJ5L3F1ZXJ5LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/auth/pages/profile/components/orders/query/query.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/auth/pages/profile/components/orders/query/query.component.ts ***!
  \***************************************************************************************/
/*! exports provided: QueryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryComponent", function() { return QueryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var QueryComponent = /** @class */ (function () {
    function QueryComponent() {
    }
    QueryComponent.prototype.ngOnInit = function () { };
    QueryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-query',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./query.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/auth/pages/profile/components/orders/query/query.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./query.component.scss */ "./src/app/modules/auth/pages/profile/components/orders/query/query.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], QueryComponent);
    return QueryComponent;
}());



/***/ }),

/***/ "./src/app/modules/auth/pages/profile/components/product-review/product-review.component.scss":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/auth/pages/profile/components/product-review/product-review.component.scss ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep .mat-expansion-panel-header {\n  padding: 0px;\n}\n\n::ng-deep .rating ion-button {\n  height: 20px;\n  width: 20px;\n  margin: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hdXRoL3BhZ2VzL3Byb2ZpbGUvY29tcG9uZW50cy9wcm9kdWN0LXJldmlldy9DOlxcVXNlcnNcXE1hcnZpblxcRG9jdW1lbnRzXFxHaXRIdWJcXGFmcm9iXFxjbGllbnQvc3JjXFxhcHBcXG1vZHVsZXNcXGF1dGhcXHBhZ2VzXFxwcm9maWxlXFxjb21wb25lbnRzXFxwcm9kdWN0LXJldmlld1xccHJvZHVjdC1yZXZpZXcuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvYXV0aC9wYWdlcy9wcm9maWxlL2NvbXBvbmVudHMvcHJvZHVjdC1yZXZpZXcvcHJvZHVjdC1yZXZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FDQ0o7O0FEQ0U7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYXV0aC9wYWdlcy9wcm9maWxlL2NvbXBvbmVudHMvcHJvZHVjdC1yZXZpZXcvcHJvZHVjdC1yZXZpZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVye1xyXG4gICAgcGFkZGluZzowcHhcclxuICB9XHJcbiAgOjpuZy1kZWVwIC5yYXRpbmcgaW9uLWJ1dHRvbiB7XHJcbiAgICBoZWlnaHQ6MjBweDtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbn1cclxuICAiLCI6Om5nLWRlZXAgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyIHtcbiAgcGFkZGluZzogMHB4O1xufVxuXG46Om5nLWRlZXAgLnJhdGluZyBpb24tYnV0dG9uIHtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMjBweDtcbiAgbWFyZ2luOiAwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/auth/pages/profile/components/product-review/product-review.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/auth/pages/profile/components/product-review/product-review.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: ProductReviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductReviewComponent", function() { return ProductReviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var src_app_core_modules_services_products_product_facade_product_facade_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core-modules/services/products/product-facade/product-facade.service */ "./src/app/core-modules/services/products/product-facade/product-facade.service.ts");



var ProductReviewComponent = /** @class */ (function () {
    function ProductReviewComponent(_productFacade) {
        this._productFacade = _productFacade;
    }
    ProductReviewComponent.prototype.ngOnInit = function () {
        this._productFacade.loadUserReviews();
        this.productReviews$ = this._productFacade.getUserReviews();
        console.log(this.productReviews$);
    };
    ProductReviewComponent.ctorParameters = function () { return [
        { type: src_app_core_modules_services_products_product_facade_product_facade_service__WEBPACK_IMPORTED_MODULE_2__["ProductFacadeService"] }
    ]; };
    ProductReviewComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-product-review",
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./product-review.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/auth/pages/profile/components/product-review/product-review.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./product-review.component.scss */ "./src/app/modules/auth/pages/profile/components/product-review/product-review.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_core_modules_services_products_product_facade_product_facade_service__WEBPACK_IMPORTED_MODULE_2__["ProductFacadeService"]])
    ], ProductReviewComponent);
    return ProductReviewComponent;
}());



/***/ }),

/***/ "./src/app/modules/auth/pages/profile/components/profile-components.module.ts":
/*!************************************************************************************!*\
  !*** ./src/app/modules/auth/pages/profile/components/profile-components.module.ts ***!
  \************************************************************************************/
/*! exports provided: ProfileComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponentsModule", function() { return ProfileComponentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var ionic4_rating__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ionic4-rating */ "./node_modules/ionic4-rating/__ivy_ngcc__/dist/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _orders_orders_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./orders/orders.component */ "./src/app/modules/auth/pages/profile/components/orders/orders.component.ts");
/* harmony import */ var _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notifications/notifications.component */ "./src/app/modules/auth/pages/profile/components/notifications/notifications.component.ts");
/* harmony import */ var _product_review_product_review_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./product-review/product-review.component */ "./src/app/modules/auth/pages/profile/components/product-review/product-review.component.ts");
/* harmony import */ var _add_review_add_review_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./add-review/add-review.component */ "./src/app/modules/auth/pages/profile/components/add-review/add-review.component.ts");
/* harmony import */ var _orders_query_query_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./orders/query/query.component */ "./src/app/modules/auth/pages/profile/components/orders/query/query.component.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/modules/auth/pages/profile/components/settings/settings.component.ts");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/expansion.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/stepper.es5.js");














var ProfileComponentsModule = /** @class */ (function () {
    function ProfileComponentsModule() {
    }
    ProfileComponentsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _orders_orders_component__WEBPACK_IMPORTED_MODULE_5__["OrdersComponent"],
                _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_6__["NotificationsComponent"],
                _settings_settings_component__WEBPACK_IMPORTED_MODULE_10__["SettingsComponent"],
                _product_review_product_review_component__WEBPACK_IMPORTED_MODULE_7__["ProductReviewComponent"],
                _add_review_add_review_component__WEBPACK_IMPORTED_MODULE_8__["AddReviewComponent"],
                _orders_query_query_component__WEBPACK_IMPORTED_MODULE_9__["QueryComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__["MatExpansionModule"],
                ionic4_rating__WEBPACK_IMPORTED_MODULE_3__["IonicRatingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterModule"],
                _angular_material_stepper__WEBPACK_IMPORTED_MODULE_13__["MatStepperModule"]
            ],
            exports: [
                _orders_orders_component__WEBPACK_IMPORTED_MODULE_5__["OrdersComponent"],
                _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_6__["NotificationsComponent"],
                _settings_settings_component__WEBPACK_IMPORTED_MODULE_10__["SettingsComponent"],
                _product_review_product_review_component__WEBPACK_IMPORTED_MODULE_7__["ProductReviewComponent"],
                _add_review_add_review_component__WEBPACK_IMPORTED_MODULE_8__["AddReviewComponent"],
                _orders_query_query_component__WEBPACK_IMPORTED_MODULE_9__["QueryComponent"]
            ]
        })
    ], ProfileComponentsModule);
    return ProfileComponentsModule;
}());



/***/ }),

/***/ "./src/app/modules/auth/pages/profile/components/settings/settings.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/auth/pages/profile/components/settings/settings.component.scss ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYXV0aC9wYWdlcy9wcm9maWxlL2NvbXBvbmVudHMvc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/auth/pages/profile/components/settings/settings.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/auth/pages/profile/components/settings/settings.component.ts ***!
  \**************************************************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var src_app_core_modules_services_header_header_state_header_state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core-modules/services/header/header-state/header-state.service */ "./src/app/core-modules/services/header/header-state/header-state.service.ts");




var SettingsComponent = /** @class */ (function () {
    function SettingsComponent(headerState, router) {
        this.headerState = headerState;
        this.router = router;
    }
    SettingsComponent.prototype.ngOnInit = function () { };
    SettingsComponent.prototype.setRoute = function () {
        this.headerState.setReturnRoute("fromUser");
        this.router.navigate(['/auth/user/store-register']);
    };
    SettingsComponent.prototype.gotTo = function (data) {
        this.router.navigate([data]);
    };
    SettingsComponent.ctorParameters = function () { return [
        { type: src_app_core_modules_services_header_header_state_header_state_service__WEBPACK_IMPORTED_MODULE_3__["HeaderStateService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    SettingsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-settings',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./settings.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/auth/pages/profile/components/settings/settings.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./settings.component.scss */ "./src/app/modules/auth/pages/profile/components/settings/settings.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_core_modules_services_header_header_state_header_state_service__WEBPACK_IMPORTED_MODULE_3__["HeaderStateService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "./src/app/modules/auth/pages/profile/profile-routing.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/modules/auth/pages/profile/profile-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: ProfilePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageRoutingModule", function() { return ProfilePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile.page */ "./src/app/modules/auth/pages/profile/profile.page.ts");




var routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_3__["ProfilePage"]
    },
    {
        path: 'returns',
        loadChildren: function () { return __webpack_require__.e(/*! import() | returns-returns-module */ "common").then(__webpack_require__.bind(null, /*! ./returns/returns.module */ "./src/app/modules/auth/pages/profile/returns/returns.module.ts")).then(function (m) { return m.ReturnsPageModule; }); }
    }
];
var ProfilePageRoutingModule = /** @class */ (function () {
    function ProfilePageRoutingModule() {
    }
    ProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ProfilePageRoutingModule);
    return ProfilePageRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/auth/pages/profile/profile.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/modules/auth/pages/profile/profile.module.ts ***!
  \**************************************************************/
/*! exports provided: ProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile-routing.module */ "./src/app/modules/auth/pages/profile/profile-routing.module.ts");
/* harmony import */ var _components_profile_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/profile-components.module */ "./src/app/modules/auth/pages/profile/components/profile-components.module.ts");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./profile.page */ "./src/app/modules/auth/pages/profile/profile.page.ts");








var ProfilePageModule = /** @class */ (function () {
    function ProfilePageModule() {
    }
    ProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfilePageRoutingModule"],
                _components_profile_components_module__WEBPACK_IMPORTED_MODULE_6__["ProfileComponentsModule"]
            ],
            declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_7__["ProfilePage"]]
        })
    ], ProfilePageModule);
    return ProfilePageModule;
}());



/***/ }),

/***/ "./src/app/modules/auth/pages/profile/profile.page.scss":
/*!**************************************************************!*\
  !*** ./src/app/modules/auth/pages/profile/profile.page.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".clear_navbar {\n  --background: transparent;\n  --ion-color-base: transparent !important;\n  position: absolute;\n  --border-width: 0 !important;\n}\n\n.profile_pic {\n  height: 15vh;\n  width: 15vh;\n  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;\n}\n\n.top_grid {\n  top: 10vh;\n  position: fixed;\n}\n\n.location {\n  right: 2vw;\n}\n\n.toolbar {\n  right: 4vw;\n}\n\n.main_panel {\n  position: fixed;\n  top: 40vh;\n}\n\napp-liked-products {\n  position: fixed;\n  top: 65vh;\n  width: 100%;\n}\n\n.component {\n  width: 100%;\n  top: 10vh;\n  position: fixed;\n  height: 20vh;\n}\n\n.grey {\n  color: grey;\n}\n\n.option {\n  height: 28vw;\n  width: 28vw;\n  border-radius: 28vw;\n  margin-right: 8px;\n  margin-left: 8px;\n  margin-bottom: 12px;\n  margin-top: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hdXRoL3BhZ2VzL3Byb2ZpbGUvQzpcXFVzZXJzXFxNYXJ2aW5cXERvY3VtZW50c1xcR2l0SHViXFxhZnJvYlxcY2xpZW50L3NyY1xcYXBwXFxtb2R1bGVzXFxhdXRoXFxwYWdlc1xccHJvZmlsZVxccHJvZmlsZS5wYWdlLnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvYXV0aC9wYWdlcy9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7RUFDQSx3Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsNEJBQUE7QUNDSjs7QURHQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EseUhBQUE7QUNBSjs7QURFQTtFQUNDLFNBQUE7RUFDRyxlQUFBO0FDQ0o7O0FEQ0E7RUFDRSxVQUFBO0FDRUY7O0FEQUE7RUFDQyxVQUFBO0FDR0Q7O0FEREE7RUFDQyxlQUFBO0VBQ0EsU0FBQTtBQ0lEOztBREZBO0VBQ0MsZUFBQTtFQUNHLFNBQUE7RUFDQSxXQUFBO0FDS0o7O0FERkE7RUFDQSxXQUFBO0VBQ0MsU0FBQTtFQUNDLGVBQUE7RUFDQSxZQUFBO0FDS0Y7O0FESEE7RUFDSSxXQUFBO0FDTUo7O0FESkE7RUFDSSxZQUFBO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNKLG1CQUFBO0VBQ0EsZ0JBQUE7QUNPRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYXV0aC9wYWdlcy9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNsZWFyX25hdmJhcntcclxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAtLWlvbi1jb2xvci1iYXNlOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgLS1ib3JkZXItd2lkdGg6IDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbi5wcm9maWxlX3BpY3tcclxuICAgIGhlaWdodDogMTV2aDtcclxuICAgIHdpZHRoOiAxNXZoO1xyXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjIpIDBweCAzcHggMXB4IC0ycHgsIHJnYmEoMCwgMCwgMCwgMC4xNCkgMHB4IDJweCAycHggMHB4LCByZ2JhKDAsIDAsIDAsIDAuMTIpIDBweCAxcHggNXB4IDBweDtcclxufVxyXG4udG9wX2dyaWR7XHJcblx0dG9wOiAxMHZoO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG59XHJcbi5sb2NhdGlvbntcclxuXHQgcmlnaHQ6MnZ3XHJcbn1cclxuLnRvb2xiYXJ7XHJcblx0cmlnaHQ6NHZ3XHJcbn1cclxuLm1haW5fcGFuZWx7XHJcblx0cG9zaXRpb246Zml4ZWQ7XHJcblx0dG9wOjQwdmhcclxufVxyXG5hcHAtbGlrZWQtcHJvZHVjdHN7XHJcblx0cG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiA2NXZoO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG59XHJcbi5jb21wb25lbnR7XHJcbndpZHRoOiAxMDAlO1xyXG5cdHRvcDoxMHZoO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBoZWlnaHQ6MjB2aDtcclxufVxyXG4uZ3JleXtcclxuICAgIGNvbG9yOiBncmV5O1xyXG59XHJcbi5vcHRpb257XHJcbiAgICBoZWlnaHQ6IDI4dnc7XHJcbiAgICAgIHdpZHRoOiAyOHZ3O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAyOHZ3O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICBtYXJnaW4tYm90dG9tOjEycHg7XHJcbiAgbWFyZ2luLXRvcDoxMnB4XHJcbiAgICAgIFxyXG4gIH0iLCIuY2xlYXJfbmF2YmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1pb24tY29sb3ItYmFzZTogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICAtLWJvcmRlci13aWR0aDogMCAhaW1wb3J0YW50O1xufVxuXG4ucHJvZmlsZV9waWMge1xuICBoZWlnaHQ6IDE1dmg7XG4gIHdpZHRoOiAxNXZoO1xuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMikgMHB4IDNweCAxcHggLTJweCwgcmdiYSgwLCAwLCAwLCAwLjE0KSAwcHggMnB4IDJweCAwcHgsIHJnYmEoMCwgMCwgMCwgMC4xMikgMHB4IDFweCA1cHggMHB4O1xufVxuXG4udG9wX2dyaWQge1xuICB0b3A6IDEwdmg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbn1cblxuLmxvY2F0aW9uIHtcbiAgcmlnaHQ6IDJ2dztcbn1cblxuLnRvb2xiYXIge1xuICByaWdodDogNHZ3O1xufVxuXG4ubWFpbl9wYW5lbCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA0MHZoO1xufVxuXG5hcHAtbGlrZWQtcHJvZHVjdHMge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogNjV2aDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jb21wb25lbnQge1xuICB3aWR0aDogMTAwJTtcbiAgdG9wOiAxMHZoO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGhlaWdodDogMjB2aDtcbn1cblxuLmdyZXkge1xuICBjb2xvcjogZ3JleTtcbn1cblxuLm9wdGlvbiB7XG4gIGhlaWdodDogMjh2dztcbiAgd2lkdGg6IDI4dnc7XG4gIGJvcmRlci1yYWRpdXM6IDI4dnc7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xuICBtYXJnaW4tbGVmdDogOHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICBtYXJnaW4tdG9wOiAxMnB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/auth/pages/profile/profile.page.ts":
/*!************************************************************!*\
  !*** ./src/app/modules/auth/pages/profile/profile.page.ts ***!
  \************************************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var src_app_core_modules_services_profile_profile_facade_profile_facade_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core-modules/services/profile/profile-facade/profile-facade.service */ "./src/app/core-modules/services/profile/profile-facade/profile-facade.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var src_app_core_modules_services_orders_order_facade_order_facade_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core-modules/services/orders/order-facade/order-facade.service */ "./src/app/core-modules/services/orders/order-facade/order-facade.service.ts");
/* harmony import */ var src_app_core_modules_services_products_product_facade_product_facade_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core-modules/services/products/product-facade/product-facade.service */ "./src/app/core-modules/services/products/product-facade/product-facade.service.ts");






var ProfilePage = /** @class */ (function () {
    function ProfilePage(_productFacade, orderFacade, _location, userFacade) {
        this._productFacade = _productFacade;
        this.orderFacade = orderFacade;
        this._location = _location;
        this.userFacade = userFacade;
        this.bottom_component = "default";
        ////loading
        this.isUpdating$ = this.userFacade.isUpdating$();
    }
    ProfilePage.prototype.ngOnInit = function () {
        var _this = this;
        this.title = "Account";
        this.userFacade.loadUser();
        //get User profile
        this.userFacade.getUser$().subscribe(function (res) {
            _this.profile$ = res;
            console.log(res);
        }, function (err) {
            console.log(err);
        });
        console.log(this.profile$);
        this.orderFacade.loadUserOrders();
        this.orderList$ = this.orderFacade.getUserOrders$();
        this.orderList$.subscribe(function (res) {
            _this.order_list = res.filter(function (order) { return !order.fullfilled; }).length;
        });
        this._productFacade.loadUserReviews();
        this.productReviews$ = this._productFacade.getUserReviews();
        this.productReviews$.subscribe(function (res) {
            if (res) {
                _this.reviews = res.length;
            }
            else {
                _this.reviews = 0;
            }
        });
    };
    ProfilePage.prototype.goBack = function () {
        if (this.bottom_component === "default") {
            this._location.back();
        }
        else {
            this.bottom_component = "default";
            this.title = "Account";
        }
    };
    ProfilePage.prototype.goTo = function (data) {
        this.bottom_component = data;
        this.title = data;
    };
    ProfilePage.prototype.received = function (data) {
        this.goTo(data);
    };
    ProfilePage.prototype.activeOrders = function () {
    };
    ProfilePage.ctorParameters = function () { return [
        { type: src_app_core_modules_services_products_product_facade_product_facade_service__WEBPACK_IMPORTED_MODULE_5__["ProductFacadeService"] },
        { type: src_app_core_modules_services_orders_order_facade_order_facade_service__WEBPACK_IMPORTED_MODULE_4__["OrderFacadeService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] },
        { type: src_app_core_modules_services_profile_profile_facade_profile_facade_service__WEBPACK_IMPORTED_MODULE_2__["UserFacadeService"] }
    ]; };
    ProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-profile",
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./profile.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/auth/pages/profile/profile.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./profile.page.scss */ "./src/app/modules/auth/pages/profile/profile.page.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_core_modules_services_products_product_facade_product_facade_service__WEBPACK_IMPORTED_MODULE_5__["ProductFacadeService"],
            src_app_core_modules_services_orders_order_facade_order_facade_service__WEBPACK_IMPORTED_MODULE_4__["OrderFacadeService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"],
            src_app_core_modules_services_profile_profile_facade_profile_facade_service__WEBPACK_IMPORTED_MODULE_2__["UserFacadeService"]])
    ], ProfilePage);
    return ProfilePage;
}());



/***/ })

}]);
//# sourceMappingURL=src-app-modules-auth-pages-profile-profile-module.js.map