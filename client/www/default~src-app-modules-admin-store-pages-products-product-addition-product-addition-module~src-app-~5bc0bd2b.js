(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~src-app-modules-admin-store-pages-products-product-addition-product-addition-module~src-app-~5bc0bd2b"],{

/***/ "./node_modules/ngx-image-cropper/__ivy_ngcc__/fesm5/ngx-image-cropper.js":
/*!********************************************************************************!*\
  !*** ./node_modules/ngx-image-cropper/__ivy_ngcc__/fesm5/ngx-image-cropper.js ***!
  \********************************************************************************/
/*! exports provided: ImageCropperComponent, ImageCropperModule, base64ToFile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageCropperComponent", function() { return ImageCropperComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageCropperModule", function() { return ImageCropperModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "base64ToFile", function() { return base64ToFile; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");





/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Black 2x1 JPEG, with the following meta information set:
// - EXIF Orientation: 6 (Rotated 90° CCW)
// Source: https://github.com/blueimp/JavaScript-Load-Image
/** @type {?} */




var _c0 = ["wrapper"];
var _c1 = ["sourceImage"];
function ImageCropperComponent_img_2_Template(rf, ctx) { if (rf & 1) {
    var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 4, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("load", function ImageCropperComponent_img_2_Template_img_load_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.imageLoadedInView(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("visibility", ctx_r1.imageVisible ? "visible" : "hidden")("transform", ctx_r1.safeTransformStyle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.safeImgDataUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ImageCropperComponent_div_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function ImageCropperComponent_div_4_ng_container_2_Template_span_mousedown_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.startMove($event, ctx_r7.moveTypes.Resize, "topleft"); })("touchstart", function ImageCropperComponent_div_4_ng_container_2_Template_span_touchstart_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r9.startMove($event, ctx_r9.moveTypes.Resize, "topleft"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function ImageCropperComponent_div_4_ng_container_2_Template_span_mousedown_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r10.startMove($event, ctx_r10.moveTypes.Resize, "topright"); })("touchstart", function ImageCropperComponent_div_4_ng_container_2_Template_span_touchstart_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r11.startMove($event, ctx_r11.moveTypes.Resize, "topright"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function ImageCropperComponent_div_4_ng_container_2_Template_span_mousedown_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r12.startMove($event, ctx_r12.moveTypes.Resize, "bottomright"); })("touchstart", function ImageCropperComponent_div_4_ng_container_2_Template_span_touchstart_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r13.startMove($event, ctx_r13.moveTypes.Resize, "bottomright"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function ImageCropperComponent_div_4_ng_container_2_Template_span_mousedown_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r14.startMove($event, ctx_r14.moveTypes.Resize, "bottomleft"); })("touchstart", function ImageCropperComponent_div_4_ng_container_2_Template_span_touchstart_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r15.startMove($event, ctx_r15.moveTypes.Resize, "bottomleft"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function ImageCropperComponent_div_4_ng_container_2_Template_span_mousedown_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r16.startMove($event, ctx_r16.moveTypes.Resize, "top"); })("touchstart", function ImageCropperComponent_div_4_ng_container_2_Template_span_touchstart_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r17.startMove($event, ctx_r17.moveTypes.Resize, "top"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function ImageCropperComponent_div_4_ng_container_2_Template_span_mousedown_18_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r18.startMove($event, ctx_r18.moveTypes.Resize, "right"); })("touchstart", function ImageCropperComponent_div_4_ng_container_2_Template_span_touchstart_18_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r19.startMove($event, ctx_r19.moveTypes.Resize, "right"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function ImageCropperComponent_div_4_ng_container_2_Template_span_mousedown_19_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r20.startMove($event, ctx_r20.moveTypes.Resize, "bottom"); })("touchstart", function ImageCropperComponent_div_4_ng_container_2_Template_span_touchstart_19_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r21.startMove($event, ctx_r21.moveTypes.Resize, "bottom"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function ImageCropperComponent_div_4_ng_container_2_Template_span_mousedown_20_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r22.startMove($event, ctx_r22.moveTypes.Resize, "left"); })("touchstart", function ImageCropperComponent_div_4_ng_container_2_Template_span_touchstart_20_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r23.startMove($event, ctx_r23.moveTypes.Resize, "left"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function ImageCropperComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function ImageCropperComponent_div_4_Template_div_keydown_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r24.keyboardAccess($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function ImageCropperComponent_div_4_Template_div_mousedown_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r26.startMove($event, ctx_r26.moveTypes.Move); })("touchstart", function ImageCropperComponent_div_4_Template_div_touchstart_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r27.startMove($event, ctx_r27.moveTypes.Move); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ImageCropperComponent_div_4_ng_container_2_Template, 21, 0, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("top", ctx_r2.cropper.y1, "px")("left", ctx_r2.cropper.x1, "px")("width", ctx_r2.cropper.x2 - ctx_r2.cropper.x1, "px")("height", ctx_r2.cropper.y2 - ctx_r2.cropper.y1, "px")("margin-left", ctx_r2.alignImage === "center" ? ctx_r2.marginLeft : null)("visibility", ctx_r2.imageVisible ? "visible" : "hidden");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("rounded", ctx_r2.roundCropper);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.hideResizeSquares);
} }
var testAutoOrientationImageURL = 'data:image/jpeg;base64,/9j/4QAiRXhpZgAATU0AKgAAAAgAAQESAAMAAAABAAYAAAA' +
    'AAAD/2wCEAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBA' +
    'QEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQE' +
    'BAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAf/AABEIAAEAAgMBEQACEQEDEQH/x' +
    'ABKAAEAAAAAAAAAAAAAAAAAAAALEAEAAAAAAAAAAAAAAAAAAAAAAQEAAAAAAAAAAAAAAAA' +
    'AAAAAEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwA/8H//2Q==';
/**
 * @return {?}
 */
function supportsAutomaticRotation() {
    return new Promise((/**
     * @param {?} resolve
     * @return {?}
     */
    function (resolve) {
        /** @type {?} */
        var img = new Image();
        img.onload = (/**
         * @return {?}
         */
        function () {
            // Check if browser supports automatic image orientation:
            /** @type {?} */
            var supported = img.width === 1 && img.height === 2;
            resolve(supported);
        });
        img.src = testAutoOrientationImageURL;
    }));
}
/**
 * @param {?} exifRotationOrBase64Image
 * @return {?}
 */
function getTransformationsFromExifData(exifRotationOrBase64Image) {
    if (typeof exifRotationOrBase64Image === 'string') {
        exifRotationOrBase64Image = getExifRotation(exifRotationOrBase64Image);
    }
    switch (exifRotationOrBase64Image) {
        case 2: return { rotate: 0, flip: true };
        case 3: return { rotate: 2, flip: false };
        case 4: return { rotate: 2, flip: true };
        case 5: return { rotate: 1, flip: true };
        case 6: return { rotate: 1, flip: false };
        case 7: return { rotate: 3, flip: true };
        case 8: return { rotate: 3, flip: false };
        default: return { rotate: 0, flip: false };
    }
}
/**
 * @param {?} imageBase64
 * @return {?}
 */
function getExifRotation(imageBase64) {
    /** @type {?} */
    var view = new DataView(base64ToArrayBuffer(imageBase64));
    if (view.getUint16(0, false) != 0xFFD8) {
        return -2;
    }
    /** @type {?} */
    var length = view.byteLength;
    /** @type {?} */
    var offset = 2;
    while (offset < length) {
        if (view.getUint16(offset + 2, false) <= 8)
            return -1;
        /** @type {?} */
        var marker = view.getUint16(offset, false);
        offset += 2;
        if (marker == 0xFFE1) {
            if (view.getUint32(offset += 2, false) != 0x45786966) {
                return -1;
            }
            /** @type {?} */
            var little = view.getUint16(offset += 6, false) == 0x4949;
            offset += view.getUint32(offset + 4, little);
            /** @type {?} */
            var tags = view.getUint16(offset, little);
            offset += 2;
            for (var i = 0; i < tags; i++) {
                if (view.getUint16(offset + (i * 12), little) == 0x0112) {
                    return view.getUint16(offset + (i * 12) + 8, little);
                }
            }
        }
        else if ((marker & 0xFF00) != 0xFF00) {
            break;
        }
        else {
            offset += view.getUint16(offset, false);
        }
    }
    return -1;
}
/**
 * @param {?} imageBase64
 * @return {?}
 */
function base64ToArrayBuffer(imageBase64) {
    imageBase64 = imageBase64.replace(/^data\:([^\;]+)\;base64,/gmi, '');
    /** @type {?} */
    var binaryString = atob(imageBase64);
    /** @type {?} */
    var len = binaryString.length;
    /** @type {?} */
    var bytes = new Uint8Array(len);
    for (var i = 0; i < len; i++) {
        bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes.buffer;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
 * Hermite resize - fast image resize/resample using Hermite filter.
 * https://github.com/viliusle/Hermite-resize
 */
/**
 * @param {?} canvas
 * @param {?} width
 * @param {?} height
 * @return {?}
 */
function resizeCanvas(canvas, width, height) {
    /** @type {?} */
    var width_source = canvas.width;
    /** @type {?} */
    var height_source = canvas.height;
    width = Math.round(width);
    height = Math.round(height);
    /** @type {?} */
    var ratio_w = width_source / width;
    /** @type {?} */
    var ratio_h = height_source / height;
    /** @type {?} */
    var ratio_w_half = Math.ceil(ratio_w / 2);
    /** @type {?} */
    var ratio_h_half = Math.ceil(ratio_h / 2);
    /** @type {?} */
    var ctx = canvas.getContext('2d');
    if (ctx) {
        /** @type {?} */
        var img = ctx.getImageData(0, 0, width_source, height_source);
        /** @type {?} */
        var img2 = ctx.createImageData(width, height);
        /** @type {?} */
        var data = img.data;
        /** @type {?} */
        var data2 = img2.data;
        for (var j = 0; j < height; j++) {
            for (var i = 0; i < width; i++) {
                /** @type {?} */
                var x2 = (i + j * width) * 4;
                /** @type {?} */
                var center_y = j * ratio_h;
                /** @type {?} */
                var weight = 0;
                /** @type {?} */
                var weights = 0;
                /** @type {?} */
                var weights_alpha = 0;
                /** @type {?} */
                var gx_r = 0;
                /** @type {?} */
                var gx_g = 0;
                /** @type {?} */
                var gx_b = 0;
                /** @type {?} */
                var gx_a = 0;
                /** @type {?} */
                var xx_start = Math.floor(i * ratio_w);
                /** @type {?} */
                var yy_start = Math.floor(j * ratio_h);
                /** @type {?} */
                var xx_stop = Math.ceil((i + 1) * ratio_w);
                /** @type {?} */
                var yy_stop = Math.ceil((j + 1) * ratio_h);
                xx_stop = Math.min(xx_stop, width_source);
                yy_stop = Math.min(yy_stop, height_source);
                for (var yy = yy_start; yy < yy_stop; yy++) {
                    /** @type {?} */
                    var dy = Math.abs(center_y - yy) / ratio_h_half;
                    /** @type {?} */
                    var center_x = i * ratio_w;
                    /** @type {?} */
                    var w0 = dy * dy;
                    for (var xx = xx_start; xx < xx_stop; xx++) {
                        /** @type {?} */
                        var dx = Math.abs(center_x - xx) / ratio_w_half;
                        /** @type {?} */
                        var w = Math.sqrt(w0 + dx * dx);
                        if (w >= 1) {
                            //pixel too far
                            continue;
                        }
                        //hermite filter
                        weight = 2 * w * w * w - 3 * w * w + 1;
                        /** @type {?} */
                        var pos_x = 4 * (xx + yy * width_source);
                        //alpha
                        gx_a += weight * data[pos_x + 3];
                        weights_alpha += weight;
                        //colors
                        if (data[pos_x + 3] < 255)
                            weight = weight * data[pos_x + 3] / 250;
                        gx_r += weight * data[pos_x];
                        gx_g += weight * data[pos_x + 1];
                        gx_b += weight * data[pos_x + 2];
                        weights += weight;
                    }
                }
                data2[x2] = gx_r / weights;
                data2[x2 + 1] = gx_g / weights;
                data2[x2 + 2] = gx_b / weights;
                data2[x2 + 3] = gx_a / weights_alpha;
            }
        }
        canvas.width = width;
        canvas.height = height;
        //draw
        ctx.putImageData(img2, 0, 0);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function MoveStart() { }
if (false) {}
/** @enum {string} */
var MoveTypes = {
    Move: 'move',
    Resize: 'resize',
    Pinch: 'pinch',
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ImageCropperComponent = /** @class */ (function () {
    function ImageCropperComponent(sanitizer, cd) {
        this.sanitizer = sanitizer;
        this.cd = cd;
        this.Hammer = typeof window !== 'undefined'
            ? (/** @type {?} */ (((/** @type {?} */ (window))).Hammer))
            : null;
        this.setImageMaxSizeRetries = 0;
        this.cropperScaledMinWidth = 20;
        this.cropperScaledMinHeight = 20;
        this.exifTransform = { rotate: 0, flip: false };
        this.autoRotateSupported = supportsAutomaticRotation();
        this.stepSize = 3;
        this.marginLeft = '0px';
        this.imageVisible = false;
        this.moveTypes = MoveTypes;
        this.format = 'png';
        this.maintainAspectRatio = true;
        this.transform = {};
        this.aspectRatio = 1;
        this.resizeToWidth = 0;
        this.resizeToHeight = 0;
        this.cropperMinWidth = 0;
        this.cropperMinHeight = 0;
        this.cropperStaticWidth = 0;
        this.cropperStaticHeight = 0;
        this.canvasRotation = 0;
        this.initialStepSize = 3;
        this.roundCropper = false;
        this.onlyScaleDown = false;
        this.imageQuality = 92;
        this.autoCrop = true;
        this.containWithinAspectRatio = false;
        this.hideResizeSquares = false;
        this.cropper = {
            x1: -100,
            y1: -100,
            x2: 10000,
            y2: 10000
        };
        this.alignImage = 'center';
        this.disabled = false;
        this.imageCropped = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.startCropImage = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.imageLoaded = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.cropperReady = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.loadImageFailed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.initCropper();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ImageCropperComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (this.cropperStaticHeight && this.cropperStaticWidth) {
            this.hideResizeSquares = true;
            this.cropperMinWidth = this.cropperStaticWidth;
            this.cropperMinHeight = this.cropperStaticHeight;
            this.maintainAspectRatio = false;
        }
        this.onChangesInputImage(changes);
        if (this.originalImage && this.originalImage.complete && this.exifTransform
            && (changes.containWithinAspectRatio || changes.canvasRotation)) {
            this.transformOriginalImage();
        }
        if (changes.cropper) {
            this.setMaxSize();
            this.setCropperScaledMinSize();
            this.checkCropperPosition(false);
            this.doAutoCrop();
            this.cd.markForCheck();
        }
        if (changes.aspectRatio && this.imageVisible) {
            this.resetCropperPosition();
        }
        if (changes.transform) {
            this.transform = this.transform || {};
            this.setCssTransform();
            this.doAutoCrop();
        }
    };
    /**
     * @private
     * @param {?} changes
     * @return {?}
     */
    ImageCropperComponent.prototype.onChangesInputImage = /**
     * @private
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.imageChangedEvent || changes.imageURL || changes.imageBase64 || changes.imageFile) {
            this.initCropper();
        }
        if (changes.imageChangedEvent && this.isValidImageChangedEvent()) {
            this.loadImageFile(this.imageChangedEvent.target.files[0]);
        }
        if (changes.imageURL && this.imageURL) {
            this.loadImageFromURL(this.imageURL);
        }
        if (changes.imageBase64 && this.imageBase64) {
            this.loadBase64Image(this.imageBase64);
        }
        if (changes.imageFile && this.imageFile) {
            this.loadImageFile(this.imageFile);
        }
    };
    /**
     * @private
     * @return {?}
     */
    ImageCropperComponent.prototype.isValidImageChangedEvent = /**
     * @private
     * @return {?}
     */
    function () {
        return this.imageChangedEvent
            && this.imageChangedEvent.target
            && this.imageChangedEvent.target.files
            && this.imageChangedEvent.target.files.length > 0;
    };
    /**
     * @private
     * @return {?}
     */
    ImageCropperComponent.prototype.setCssTransform = /**
     * @private
     * @return {?}
     */
    function () {
        this.safeTransformStyle = this.sanitizer.bypassSecurityTrustStyle('scaleX(' + (this.transform.scale || 1) * (this.transform.flipH ? -1 : 1) + ')' +
            'scaleY(' + (this.transform.scale || 1) * (this.transform.flipV ? -1 : 1) + ')' +
            'rotate(' + (this.transform.rotate || 0) + 'deg)');
    };
    /**
     * @return {?}
     */
    ImageCropperComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.stepSize = this.initialStepSize;
        this.activatePinchGesture();
    };
    /**
     * @private
     * @return {?}
     */
    ImageCropperComponent.prototype.initCropper = /**
     * @private
     * @return {?}
     */
    function () {
        this.imageVisible = false;
        this.transformedImage = null;
        this.safeImgDataUrl = 'data:image/png;base64,iVBORw0KGg'
            + 'oAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVQYV2NgAAIAAAU'
            + 'AAarVyFEAAAAASUVORK5CYII=';
        this.moveStart = {
            active: false,
            type: null,
            position: null,
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 0,
            clientX: 0,
            clientY: 0
        };
        this.maxSize = {
            width: 0,
            height: 0
        };
        this.originalSize = {
            width: 0,
            height: 0
        };
        this.transformedSize = {
            width: 0,
            height: 0
        };
        this.cropper.x1 = -100;
        this.cropper.y1 = -100;
        this.cropper.x2 = 10000;
        this.cropper.y2 = 10000;
    };
    /**
     * @private
     * @param {?} imageBase64
     * @param {?} imageType
     * @return {?}
     */
    ImageCropperComponent.prototype.loadImage = /**
     * @private
     * @param {?} imageBase64
     * @param {?} imageType
     * @return {?}
     */
    function (imageBase64, imageType) {
        if (this.isValidImageType(imageType)) {
            this.loadBase64Image(imageBase64);
        }
        else {
            this.loadImageFailed.emit();
        }
    };
    /**
     * @private
     * @param {?} file
     * @return {?}
     */
    ImageCropperComponent.prototype.loadImageFile = /**
     * @private
     * @param {?} file
     * @return {?}
     */
    function (file) {
        var _this = this;
        /** @type {?} */
        var fileReader = new FileReader();
        fileReader.onload = (/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return _this.loadImage(event.target.result, file.type); });
        fileReader.readAsDataURL(file);
    };
    /**
     * @private
     * @param {?} type
     * @return {?}
     */
    ImageCropperComponent.prototype.isValidImageType = /**
     * @private
     * @param {?} type
     * @return {?}
     */
    function (type) {
        return /image\/(png|jpg|jpeg|bmp|gif|tiff|webp)/.test(type);
    };
    /**
     * @private
     * @param {?} imageBase64
     * @return {?}
     */
    ImageCropperComponent.prototype.loadBase64Image = /**
     * @private
     * @param {?} imageBase64
     * @return {?}
     */
    function (imageBase64) {
        var _this = this;
        this.autoRotateSupported
            .then((/**
         * @param {?} supported
         * @return {?}
         */
        function (supported) { return _this.checkExifAndLoadBase64Image(imageBase64, supported); }))
            .then((/**
         * @return {?}
         */
        function () { return _this.transformOriginalImage(); }))
            .catch((/**
         * @param {?} error
         * @return {?}
         */
        function (error) {
            _this.loadImageFailed.emit();
            _this.originalImage = null;
            _this.originalBase64 = null;
            console.error(error);
        }));
    };
    /**
     * @private
     * @param {?} imageBase64
     * @param {?} autoRotateSupported
     * @return {?}
     */
    ImageCropperComponent.prototype.checkExifAndLoadBase64Image = /**
     * @private
     * @param {?} imageBase64
     * @param {?} autoRotateSupported
     * @return {?}
     */
    function (imageBase64, autoRotateSupported) {
        var _this = this;
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        function (resolve, reject) {
            _this.originalImage = new Image();
            _this.originalImage.onload = (/**
             * @return {?}
             */
            function () {
                _this.originalBase64 = imageBase64;
                _this.exifTransform = getTransformationsFromExifData(autoRotateSupported ? -1 : imageBase64);
                _this.originalSize.width = _this.originalImage.naturalWidth;
                _this.originalSize.height = _this.originalImage.naturalHeight;
                resolve();
            });
            _this.originalImage.onerror = reject;
            _this.originalImage.src = imageBase64;
        }));
    };
    /**
     * @private
     * @param {?} url
     * @return {?}
     */
    ImageCropperComponent.prototype.loadImageFromURL = /**
     * @private
     * @param {?} url
     * @return {?}
     */
    function (url) {
        var _this = this;
        /** @type {?} */
        var img = new Image();
        img.onerror = (/**
         * @return {?}
         */
        function () { return _this.loadImageFailed.emit(); });
        img.onload = (/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var canvas = document.createElement('canvas');
            /** @type {?} */
            var context = canvas.getContext('2d');
            canvas.width = img.width;
            canvas.height = img.height;
            context.drawImage(img, 0, 0);
            _this.loadBase64Image(canvas.toDataURL());
        });
        img.crossOrigin = 'anonymous';
        img.src = url;
    };
    /**
     * @private
     * @return {?}
     */
    ImageCropperComponent.prototype.transformOriginalImage = /**
     * @private
     * @return {?}
     */
    function () {
        if (!this.originalImage || !this.originalImage.complete || !this.exifTransform) {
            return Promise.reject(new Error('No image loaded'));
        }
        /** @type {?} */
        var transformedBase64 = this.transformImageBase64();
        return this.setTransformedImage(transformedBase64);
    };
    /**
     * @private
     * @return {?}
     */
    ImageCropperComponent.prototype.transformImageBase64 = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var canvasRotation = this.canvasRotation + this.exifTransform.rotate;
        if (canvasRotation === 0 && !this.exifTransform.flip && !this.containWithinAspectRatio) {
            return this.originalBase64;
        }
        /** @type {?} */
        var transformedSize = this.getTransformedSize();
        /** @type {?} */
        var canvas = document.createElement('canvas');
        canvas.width = transformedSize.width;
        canvas.height = transformedSize.height;
        /** @type {?} */
        var ctx = canvas.getContext('2d');
        ctx.setTransform(this.exifTransform.flip ? -1 : 1, 0, 0, 1, canvas.width / 2, canvas.height / 2);
        ctx.rotate(Math.PI * (canvasRotation / 2));
        ctx.drawImage(this.originalImage, -this.originalSize.width / 2, -this.originalSize.height / 2);
        return canvas.toDataURL();
    };
    /**
     * @private
     * @return {?}
     */
    ImageCropperComponent.prototype.getTransformedSize = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var canvasRotation = this.canvasRotation + this.exifTransform.rotate;
        if (this.containWithinAspectRatio) {
            if (canvasRotation % 2) {
                /** @type {?} */
                var minWidthToContain = this.originalSize.width * this.aspectRatio;
                /** @type {?} */
                var minHeightToContain = this.originalSize.height / this.aspectRatio;
                return {
                    width: Math.max(this.originalSize.height, minWidthToContain),
                    height: Math.max(this.originalSize.width, minHeightToContain),
                };
            }
            else {
                /** @type {?} */
                var minWidthToContain = this.originalSize.height * this.aspectRatio;
                /** @type {?} */
                var minHeightToContain = this.originalSize.width / this.aspectRatio;
                return {
                    width: Math.max(this.originalSize.width, minWidthToContain),
                    height: Math.max(this.originalSize.height, minHeightToContain),
                };
            }
        }
        if (canvasRotation % 2) {
            return {
                height: this.originalSize.width,
                width: this.originalSize.height,
            };
        }
        return {
            width: this.originalSize.width,
            height: this.originalSize.height,
        };
    };
    /**
     * @private
     * @param {?} transformedBase64
     * @return {?}
     */
    ImageCropperComponent.prototype.setTransformedImage = /**
     * @private
     * @param {?} transformedBase64
     * @return {?}
     */
    function (transformedBase64) {
        var _this = this;
        return new Promise((/**
         * @param {?} resolve
         * @return {?}
         */
        function (resolve) {
            _this.transformedBase64 = transformedBase64;
            _this.safeImgDataUrl = _this.sanitizer.bypassSecurityTrustResourceUrl(transformedBase64);
            _this.transformedImage = new Image();
            _this.transformedImage.onload = (/**
             * @return {?}
             */
            function () {
                _this.transformedSize.width = _this.transformedImage.naturalWidth;
                _this.transformedSize.height = _this.transformedImage.naturalHeight;
                _this.cd.markForCheck();
                resolve();
            });
            _this.transformedImage.src = _this.transformedBase64;
        }));
    };
    /**
     * @return {?}
     */
    ImageCropperComponent.prototype.imageLoadedInView = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.transformedImage != null) {
            this.imageLoaded.emit();
            this.setImageMaxSizeRetries = 0;
            setTimeout((/**
             * @return {?}
             */
            function () { return _this.checkImageMaxSizeRecursively(); }));
        }
    };
    /**
     * @private
     * @return {?}
     */
    ImageCropperComponent.prototype.checkImageMaxSizeRecursively = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.setImageMaxSizeRetries > 40) {
            this.loadImageFailed.emit();
        }
        else if (this.sourceImageLoaded()) {
            this.setMaxSize();
            this.setCropperScaledMinSize();
            this.resetCropperPosition();
            this.cropperReady.emit(Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, this.maxSize));
            this.cd.markForCheck();
        }
        else {
            this.setImageMaxSizeRetries++;
            setTimeout((/**
             * @return {?}
             */
            function () { return _this.checkImageMaxSizeRecursively(); }), 50);
        }
    };
    /**
     * @private
     * @return {?}
     */
    ImageCropperComponent.prototype.sourceImageLoaded = /**
     * @private
     * @return {?}
     */
    function () {
        return this.sourceImage && this.sourceImage.nativeElement && this.sourceImage.nativeElement.offsetWidth > 0;
    };
    /**
     * @return {?}
     */
    ImageCropperComponent.prototype.onResize = /**
     * @return {?}
     */
    function () {
        this.resizeCropperPosition();
        this.setMaxSize();
        this.setCropperScaledMinSize();
    };
    /**
     * @private
     * @return {?}
     */
    ImageCropperComponent.prototype.activatePinchGesture = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.Hammer) {
            /** @type {?} */
            var hammer = new this.Hammer(this.wrapper.nativeElement);
            hammer.get('pinch').set({ enable: true });
            hammer.on('pinchmove', this.onPinch.bind(this));
            hammer.on('pinchend', this.pinchStop.bind(this));
            hammer.on('pinchstart', this.startPinch.bind(this));
        }
        else if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["isDevMode"])()) {
            console.warn('[NgxImageCropper] Could not find HammerJS - Pinch Gesture won\'t work');
        }
    };
    /**
     * @private
     * @return {?}
     */
    ImageCropperComponent.prototype.resizeCropperPosition = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var sourceImageElement = this.sourceImage.nativeElement;
        if (this.maxSize.width !== sourceImageElement.offsetWidth || this.maxSize.height !== sourceImageElement.offsetHeight) {
            this.cropper.x1 = this.cropper.x1 * sourceImageElement.offsetWidth / this.maxSize.width;
            this.cropper.x2 = this.cropper.x2 * sourceImageElement.offsetWidth / this.maxSize.width;
            this.cropper.y1 = this.cropper.y1 * sourceImageElement.offsetHeight / this.maxSize.height;
            this.cropper.y2 = this.cropper.y2 * sourceImageElement.offsetHeight / this.maxSize.height;
        }
    };
    /**
     * @return {?}
     */
    ImageCropperComponent.prototype.resetCropperPosition = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var sourceImageElement = this.sourceImage.nativeElement;
        if (this.cropperStaticHeight && this.cropperStaticWidth) {
            this.cropper.x1 = 0;
            this.cropper.x2 = sourceImageElement.offsetWidth > this.cropperStaticWidth ?
                this.cropperStaticWidth : sourceImageElement.offsetWidth;
            this.cropper.y1 = 0;
            this.cropper.y2 = sourceImageElement.offsetHeight > this.cropperStaticHeight ?
                this.cropperStaticHeight : sourceImageElement.offsetHeight;
        }
        else {
            if (!this.maintainAspectRatio) {
                this.cropper.x1 = 0;
                this.cropper.x2 = sourceImageElement.offsetWidth;
                this.cropper.y1 = 0;
                this.cropper.y2 = sourceImageElement.offsetHeight;
            }
            else if (sourceImageElement.offsetWidth / this.aspectRatio < sourceImageElement.offsetHeight) {
                this.cropper.x1 = 0;
                this.cropper.x2 = sourceImageElement.offsetWidth;
                /** @type {?} */
                var cropperHeight = sourceImageElement.offsetWidth / this.aspectRatio;
                this.cropper.y1 = (sourceImageElement.offsetHeight - cropperHeight) / 2;
                this.cropper.y2 = this.cropper.y1 + cropperHeight;
            }
            else {
                this.cropper.y1 = 0;
                this.cropper.y2 = sourceImageElement.offsetHeight;
                /** @type {?} */
                var cropperWidth = sourceImageElement.offsetHeight * this.aspectRatio;
                this.cropper.x1 = (sourceImageElement.offsetWidth - cropperWidth) / 2;
                this.cropper.x2 = this.cropper.x1 + cropperWidth;
            }
        }
        this.doAutoCrop();
        this.imageVisible = true;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ImageCropperComponent.prototype.keyboardAccess = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.changeKeyboardStepSize(event);
        this.keyboardMoveCropper(event);
    };
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    ImageCropperComponent.prototype.changeKeyboardStepSize = /**
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.key >= '1' && event.key <= '9') {
            this.stepSize = +event.key;
            return;
        }
    };
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    ImageCropperComponent.prototype.keyboardMoveCropper = /**
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var keyboardWhiteList = ['ArrowUp', 'ArrowDown', 'ArrowRight', 'ArrowLeft'];
        if (!(keyboardWhiteList.includes(event.key))) {
            return;
        }
        /** @type {?} */
        var moveType = event.shiftKey ? MoveTypes.Resize : MoveTypes.Move;
        /** @type {?} */
        var position = event.altKey ? this.getInvertedPositionForKey(event.key) : this.getPositionForKey(event.key);
        /** @type {?} */
        var moveEvent = this.getEventForKey(event.key, this.stepSize);
        event.preventDefault();
        event.stopPropagation();
        this.startMove({ clientX: 0, clientY: 0 }, moveType, position);
        this.moveImg(moveEvent);
        this.moveStop();
    };
    /**
     * @private
     * @param {?} key
     * @return {?}
     */
    ImageCropperComponent.prototype.getPositionForKey = /**
     * @private
     * @param {?} key
     * @return {?}
     */
    function (key) {
        switch (key) {
            case 'ArrowUp':
                return 'top';
            case 'ArrowRight':
                return 'right';
            case 'ArrowDown':
                return 'bottom';
            case 'ArrowLeft':
            default:
                return 'left';
        }
    };
    /**
     * @private
     * @param {?} key
     * @return {?}
     */
    ImageCropperComponent.prototype.getInvertedPositionForKey = /**
     * @private
     * @param {?} key
     * @return {?}
     */
    function (key) {
        switch (key) {
            case 'ArrowUp':
                return 'bottom';
            case 'ArrowRight':
                return 'left';
            case 'ArrowDown':
                return 'top';
            case 'ArrowLeft':
            default:
                return 'right';
        }
    };
    /**
     * @private
     * @param {?} key
     * @param {?} stepSize
     * @return {?}
     */
    ImageCropperComponent.prototype.getEventForKey = /**
     * @private
     * @param {?} key
     * @param {?} stepSize
     * @return {?}
     */
    function (key, stepSize) {
        switch (key) {
            case 'ArrowUp':
                return { clientX: 0, clientY: stepSize * -1 };
            case 'ArrowRight':
                return { clientX: stepSize, clientY: 0 };
            case 'ArrowDown':
                return { clientX: 0, clientY: stepSize };
            case 'ArrowLeft':
            default:
                return { clientX: stepSize * -1, clientY: 0 };
        }
    };
    /**
     * @param {?} event
     * @param {?} moveType
     * @param {?=} position
     * @return {?}
     */
    ImageCropperComponent.prototype.startMove = /**
     * @param {?} event
     * @param {?} moveType
     * @param {?=} position
     * @return {?}
     */
    function (event, moveType, position) {
        if (position === void 0) { position = null; }
        if (this.moveStart && this.moveStart.active && this.moveStart.type === MoveTypes.Pinch) {
            return;
        }
        if (event.preventDefault) {
            event.preventDefault();
        }
        this.moveStart = Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({ active: true, type: moveType, position: position, clientX: this.getClientX(event), clientY: this.getClientY(event) }, this.cropper);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ImageCropperComponent.prototype.startPinch = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (!this.safeImgDataUrl) {
            return;
        }
        if (event.preventDefault) {
            event.preventDefault();
        }
        this.moveStart = Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({ active: true, type: MoveTypes.Pinch, position: 'center', clientX: this.cropper.x1 + (this.cropper.x2 - this.cropper.x1) / 2, clientY: this.cropper.y1 + (this.cropper.y2 - this.cropper.y1) / 2 }, this.cropper);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ImageCropperComponent.prototype.moveImg = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.moveStart.active) {
            if (event.stopPropagation) {
                event.stopPropagation();
            }
            if (event.preventDefault) {
                event.preventDefault();
            }
            if (this.moveStart.type === MoveTypes.Move) {
                this.move(event);
                this.checkCropperPosition(true);
            }
            else if (this.moveStart.type === MoveTypes.Resize) {
                if (!this.cropperStaticWidth && !this.cropperStaticHeight) {
                    this.resize(event);
                }
                this.checkCropperPosition(false);
            }
            this.cd.detectChanges();
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ImageCropperComponent.prototype.onPinch = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.moveStart.active) {
            if (event.stopPropagation) {
                event.stopPropagation();
            }
            if (event.preventDefault) {
                event.preventDefault();
            }
            if (this.moveStart.type === MoveTypes.Pinch) {
                this.resize(event);
                this.checkCropperPosition(false);
            }
            this.cd.detectChanges();
        }
    };
    /**
     * @private
     * @return {?}
     */
    ImageCropperComponent.prototype.setMaxSize = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.sourceImage) {
            /** @type {?} */
            var sourceImageElement = this.sourceImage.nativeElement;
            this.maxSize.width = sourceImageElement.offsetWidth;
            this.maxSize.height = sourceImageElement.offsetHeight;
            this.marginLeft = this.sanitizer.bypassSecurityTrustStyle('calc(50% - ' + this.maxSize.width / 2 + 'px)');
        }
    };
    /**
     * @private
     * @return {?}
     */
    ImageCropperComponent.prototype.setCropperScaledMinSize = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.transformedImage) {
            this.setCropperScaledMinWidth();
            this.setCropperScaledMinHeight();
        }
        else {
            this.cropperScaledMinWidth = 20;
            this.cropperScaledMinHeight = 20;
        }
    };
    /**
     * @private
     * @return {?}
     */
    ImageCropperComponent.prototype.setCropperScaledMinWidth = /**
     * @private
     * @return {?}
     */
    function () {
        this.cropperScaledMinWidth = this.cropperMinWidth > 0
            ? Math.max(20, this.cropperMinWidth / this.transformedImage.width * this.maxSize.width)
            : 20;
    };
    /**
     * @private
     * @return {?}
     */
    ImageCropperComponent.prototype.setCropperScaledMinHeight = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.maintainAspectRatio) {
            this.cropperScaledMinHeight = Math.max(20, this.cropperScaledMinWidth / this.aspectRatio);
        }
        else if (this.cropperMinHeight > 0) {
            this.cropperScaledMinHeight = Math.max(20, this.cropperMinHeight / this.transformedImage.height * this.maxSize.height);
        }
        else {
            this.cropperScaledMinHeight = 20;
        }
    };
    /**
     * @private
     * @param {?=} maintainSize
     * @return {?}
     */
    ImageCropperComponent.prototype.checkCropperPosition = /**
     * @private
     * @param {?=} maintainSize
     * @return {?}
     */
    function (maintainSize) {
        if (maintainSize === void 0) { maintainSize = false; }
        if (this.cropper.x1 < 0) {
            this.cropper.x2 -= maintainSize ? this.cropper.x1 : 0;
            this.cropper.x1 = 0;
        }
        if (this.cropper.y1 < 0) {
            this.cropper.y2 -= maintainSize ? this.cropper.y1 : 0;
            this.cropper.y1 = 0;
        }
        if (this.cropper.x2 > this.maxSize.width) {
            this.cropper.x1 -= maintainSize ? (this.cropper.x2 - this.maxSize.width) : 0;
            this.cropper.x2 = this.maxSize.width;
        }
        if (this.cropper.y2 > this.maxSize.height) {
            this.cropper.y1 -= maintainSize ? (this.cropper.y2 - this.maxSize.height) : 0;
            this.cropper.y2 = this.maxSize.height;
        }
    };
    /**
     * @return {?}
     */
    ImageCropperComponent.prototype.moveStop = /**
     * @return {?}
     */
    function () {
        if (this.moveStart.active) {
            this.moveStart.active = false;
            this.doAutoCrop();
        }
    };
    /**
     * @return {?}
     */
    ImageCropperComponent.prototype.pinchStop = /**
     * @return {?}
     */
    function () {
        if (this.moveStart.active) {
            this.moveStart.active = false;
            this.doAutoCrop();
        }
    };
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    ImageCropperComponent.prototype.move = /**
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var diffX = this.getClientX(event) - this.moveStart.clientX;
        /** @type {?} */
        var diffY = this.getClientY(event) - this.moveStart.clientY;
        this.cropper.x1 = this.moveStart.x1 + diffX;
        this.cropper.y1 = this.moveStart.y1 + diffY;
        this.cropper.x2 = this.moveStart.x2 + diffX;
        this.cropper.y2 = this.moveStart.y2 + diffY;
    };
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    ImageCropperComponent.prototype.resize = /**
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var diffX = this.getClientX(event) - this.moveStart.clientX;
        /** @type {?} */
        var diffY = this.getClientY(event) - this.moveStart.clientY;
        switch (this.moveStart.position) {
            case 'left':
                this.cropper.x1 = Math.min(this.moveStart.x1 + diffX, this.cropper.x2 - this.cropperScaledMinWidth);
                break;
            case 'topleft':
                this.cropper.x1 = Math.min(this.moveStart.x1 + diffX, this.cropper.x2 - this.cropperScaledMinWidth);
                this.cropper.y1 = Math.min(this.moveStart.y1 + diffY, this.cropper.y2 - this.cropperScaledMinHeight);
                break;
            case 'top':
                this.cropper.y1 = Math.min(this.moveStart.y1 + diffY, this.cropper.y2 - this.cropperScaledMinHeight);
                break;
            case 'topright':
                this.cropper.x2 = Math.max(this.moveStart.x2 + diffX, this.cropper.x1 + this.cropperScaledMinWidth);
                this.cropper.y1 = Math.min(this.moveStart.y1 + diffY, this.cropper.y2 - this.cropperScaledMinHeight);
                break;
            case 'right':
                this.cropper.x2 = Math.max(this.moveStart.x2 + diffX, this.cropper.x1 + this.cropperScaledMinWidth);
                break;
            case 'bottomright':
                this.cropper.x2 = Math.max(this.moveStart.x2 + diffX, this.cropper.x1 + this.cropperScaledMinWidth);
                this.cropper.y2 = Math.max(this.moveStart.y2 + diffY, this.cropper.y1 + this.cropperScaledMinHeight);
                break;
            case 'bottom':
                this.cropper.y2 = Math.max(this.moveStart.y2 + diffY, this.cropper.y1 + this.cropperScaledMinHeight);
                break;
            case 'bottomleft':
                this.cropper.x1 = Math.min(this.moveStart.x1 + diffX, this.cropper.x2 - this.cropperScaledMinWidth);
                this.cropper.y2 = Math.max(this.moveStart.y2 + diffY, this.cropper.y1 + this.cropperScaledMinHeight);
                break;
            case 'center':
                /** @type {?} */
                var scale = event.scale;
                /** @type {?} */
                var newWidth = (Math.abs(this.moveStart.x2 - this.moveStart.x1)) * scale;
                /** @type {?} */
                var newHeight = (Math.abs(this.moveStart.y2 - this.moveStart.y1)) * scale;
                /** @type {?} */
                var x1 = this.cropper.x1;
                /** @type {?} */
                var y1 = this.cropper.y1;
                this.cropper.x1 = Math.min(this.moveStart.clientX - (newWidth / 2), this.cropper.x2 - this.cropperScaledMinWidth);
                this.cropper.y1 = Math.min(this.moveStart.clientY - (newHeight / 2), this.cropper.y2 - this.cropperScaledMinHeight);
                this.cropper.x2 = Math.max(this.moveStart.clientX + (newWidth / 2), x1 + this.cropperScaledMinWidth);
                this.cropper.y2 = Math.max(this.moveStart.clientY + (newHeight / 2), y1 + this.cropperScaledMinHeight);
                break;
        }
        if (this.maintainAspectRatio) {
            this.checkAspectRatio();
        }
    };
    /**
     * @private
     * @return {?}
     */
    ImageCropperComponent.prototype.checkAspectRatio = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var overflowX = 0;
        /** @type {?} */
        var overflowY = 0;
        switch (this.moveStart.position) {
            case 'top':
                this.cropper.x2 = this.cropper.x1 + (this.cropper.y2 - this.cropper.y1) * this.aspectRatio;
                overflowX = Math.max(this.cropper.x2 - this.maxSize.width, 0);
                overflowY = Math.max(0 - this.cropper.y1, 0);
                if (overflowX > 0 || overflowY > 0) {
                    this.cropper.x2 -= (overflowY * this.aspectRatio) > overflowX ? (overflowY * this.aspectRatio) : overflowX;
                    this.cropper.y1 += (overflowY * this.aspectRatio) > overflowX ? overflowY : overflowX / this.aspectRatio;
                }
                break;
            case 'bottom':
                this.cropper.x2 = this.cropper.x1 + (this.cropper.y2 - this.cropper.y1) * this.aspectRatio;
                overflowX = Math.max(this.cropper.x2 - this.maxSize.width, 0);
                overflowY = Math.max(this.cropper.y2 - this.maxSize.height, 0);
                if (overflowX > 0 || overflowY > 0) {
                    this.cropper.x2 -= (overflowY * this.aspectRatio) > overflowX ? (overflowY * this.aspectRatio) : overflowX;
                    this.cropper.y2 -= (overflowY * this.aspectRatio) > overflowX ? overflowY : (overflowX / this.aspectRatio);
                }
                break;
            case 'topleft':
                this.cropper.y1 = this.cropper.y2 - (this.cropper.x2 - this.cropper.x1) / this.aspectRatio;
                overflowX = Math.max(0 - this.cropper.x1, 0);
                overflowY = Math.max(0 - this.cropper.y1, 0);
                if (overflowX > 0 || overflowY > 0) {
                    this.cropper.x1 += (overflowY * this.aspectRatio) > overflowX ? (overflowY * this.aspectRatio) : overflowX;
                    this.cropper.y1 += (overflowY * this.aspectRatio) > overflowX ? overflowY : overflowX / this.aspectRatio;
                }
                break;
            case 'topright':
                this.cropper.y1 = this.cropper.y2 - (this.cropper.x2 - this.cropper.x1) / this.aspectRatio;
                overflowX = Math.max(this.cropper.x2 - this.maxSize.width, 0);
                overflowY = Math.max(0 - this.cropper.y1, 0);
                if (overflowX > 0 || overflowY > 0) {
                    this.cropper.x2 -= (overflowY * this.aspectRatio) > overflowX ? (overflowY * this.aspectRatio) : overflowX;
                    this.cropper.y1 += (overflowY * this.aspectRatio) > overflowX ? overflowY : overflowX / this.aspectRatio;
                }
                break;
            case 'right':
            case 'bottomright':
                this.cropper.y2 = this.cropper.y1 + (this.cropper.x2 - this.cropper.x1) / this.aspectRatio;
                overflowX = Math.max(this.cropper.x2 - this.maxSize.width, 0);
                overflowY = Math.max(this.cropper.y2 - this.maxSize.height, 0);
                if (overflowX > 0 || overflowY > 0) {
                    this.cropper.x2 -= (overflowY * this.aspectRatio) > overflowX ? (overflowY * this.aspectRatio) : overflowX;
                    this.cropper.y2 -= (overflowY * this.aspectRatio) > overflowX ? overflowY : overflowX / this.aspectRatio;
                }
                break;
            case 'left':
            case 'bottomleft':
                this.cropper.y2 = this.cropper.y1 + (this.cropper.x2 - this.cropper.x1) / this.aspectRatio;
                overflowX = Math.max(0 - this.cropper.x1, 0);
                overflowY = Math.max(this.cropper.y2 - this.maxSize.height, 0);
                if (overflowX > 0 || overflowY > 0) {
                    this.cropper.x1 += (overflowY * this.aspectRatio) > overflowX ? (overflowY * this.aspectRatio) : overflowX;
                    this.cropper.y2 -= (overflowY * this.aspectRatio) > overflowX ? overflowY : overflowX / this.aspectRatio;
                }
                break;
            case 'center':
                this.cropper.x2 = this.cropper.x1 + (this.cropper.y2 - this.cropper.y1) * this.aspectRatio;
                this.cropper.y2 = this.cropper.y1 + (this.cropper.x2 - this.cropper.x1) / this.aspectRatio;
                /** @type {?} */
                var overflowX1 = Math.max(0 - this.cropper.x1, 0);
                /** @type {?} */
                var overflowX2 = Math.max(this.cropper.x2 - this.maxSize.width, 0);
                /** @type {?} */
                var overflowY1 = Math.max(this.cropper.y2 - this.maxSize.height, 0);
                /** @type {?} */
                var overflowY2 = Math.max(0 - this.cropper.y1, 0);
                if (overflowX1 > 0 || overflowX2 > 0 || overflowY1 > 0 || overflowY2 > 0) {
                    this.cropper.x1 += (overflowY1 * this.aspectRatio) > overflowX1 ? (overflowY1 * this.aspectRatio) : overflowX1;
                    this.cropper.x2 -= (overflowY2 * this.aspectRatio) > overflowX2 ? (overflowY2 * this.aspectRatio) : overflowX2;
                    this.cropper.y1 += (overflowY2 * this.aspectRatio) > overflowX2 ? overflowY2 : overflowX2 / this.aspectRatio;
                    this.cropper.y2 -= (overflowY1 * this.aspectRatio) > overflowX1 ? overflowY1 : overflowX1 / this.aspectRatio;
                }
                break;
        }
    };
    /**
     * @private
     * @return {?}
     */
    ImageCropperComponent.prototype.doAutoCrop = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.autoCrop) {
            this.crop();
        }
    };
    /**
     * @return {?}
     */
    ImageCropperComponent.prototype.crop = /**
     * @return {?}
     */
    function () {
        if (this.sourceImage && this.sourceImage.nativeElement && this.transformedImage != null) {
            this.startCropImage.emit();
            /** @type {?} */
            var imagePosition = this.getImagePosition();
            /** @type {?} */
            var width = imagePosition.x2 - imagePosition.x1;
            /** @type {?} */
            var height = imagePosition.y2 - imagePosition.y1;
            /** @type {?} */
            var cropCanvas = (/** @type {?} */ (document.createElement('canvas')));
            cropCanvas.width = width;
            cropCanvas.height = height;
            /** @type {?} */
            var ctx = cropCanvas.getContext('2d');
            if (ctx) {
                if (this.backgroundColor != null) {
                    ctx.fillStyle = this.backgroundColor;
                    ctx.fillRect(0, 0, width, height);
                }
                /** @type {?} */
                var scaleX = (this.transform.scale || 1) * (this.transform.flipH ? -1 : 1);
                /** @type {?} */
                var scaleY = (this.transform.scale || 1) * (this.transform.flipV ? -1 : 1);
                ctx.setTransform(scaleX, 0, 0, scaleY, this.transformedSize.width / 2, this.transformedSize.height / 2);
                ctx.translate(-imagePosition.x1 / scaleX, -imagePosition.y1 / scaleY);
                ctx.rotate((this.transform.rotate || 0) * Math.PI / 180);
                ctx.drawImage(this.transformedImage, -this.transformedSize.width / 2, -this.transformedSize.height / 2);
                /** @type {?} */
                var output = {
                    width: width, height: height,
                    imagePosition: imagePosition,
                    cropperPosition: Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, this.cropper)
                };
                if (this.containWithinAspectRatio) {
                    output.offsetImagePosition = this.getOffsetImagePosition();
                }
                /** @type {?} */
                var resizeRatio = this.getResizeRatio(width, height);
                if (resizeRatio !== 1) {
                    output.width = Math.round(width * resizeRatio);
                    output.height = this.maintainAspectRatio
                        ? Math.round(output.width / this.aspectRatio)
                        : Math.round(height * resizeRatio);
                    resizeCanvas(cropCanvas, output.width, output.height);
                }
                output.base64 = this.cropToBase64(cropCanvas);
                this.imageCropped.emit(output);
                return output;
            }
        }
        return null;
    };
    /**
     * @private
     * @return {?}
     */
    ImageCropperComponent.prototype.getImagePosition = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var sourceImageElement = this.sourceImage.nativeElement;
        /** @type {?} */
        var ratio = this.transformedSize.width / sourceImageElement.offsetWidth;
        /** @type {?} */
        var out = {
            x1: Math.round(this.cropper.x1 * ratio),
            y1: Math.round(this.cropper.y1 * ratio),
            x2: Math.round(this.cropper.x2 * ratio),
            y2: Math.round(this.cropper.y2 * ratio)
        };
        if (!this.containWithinAspectRatio) {
            out.x1 = Math.max(out.x1, 0);
            out.y1 = Math.max(out.y1, 0);
            out.x2 = Math.min(out.x2, this.transformedSize.width);
            out.y2 = Math.min(out.y2, this.transformedSize.height);
        }
        return out;
    };
    /**
     * @private
     * @return {?}
     */
    ImageCropperComponent.prototype.getOffsetImagePosition = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var canvasRotation = this.canvasRotation + this.exifTransform.rotate;
        /** @type {?} */
        var sourceImageElement = this.sourceImage.nativeElement;
        /** @type {?} */
        var ratio = this.transformedSize.width / sourceImageElement.offsetWidth;
        /** @type {?} */
        var offsetX;
        /** @type {?} */
        var offsetY;
        if (canvasRotation % 2) {
            offsetX = (this.transformedSize.width - this.originalSize.height) / 2;
            offsetY = (this.transformedSize.height - this.originalSize.width) / 2;
        }
        else {
            offsetX = (this.transformedSize.width - this.originalSize.width) / 2;
            offsetY = (this.transformedSize.height - this.originalSize.height) / 2;
        }
        /** @type {?} */
        var out = {
            x1: Math.round(this.cropper.x1 * ratio) - offsetX,
            y1: Math.round(this.cropper.y1 * ratio) - offsetY,
            x2: Math.round(this.cropper.x2 * ratio) - offsetX,
            y2: Math.round(this.cropper.y2 * ratio) - offsetY
        };
        if (!this.containWithinAspectRatio) {
            out.x1 = Math.max(out.x1, 0);
            out.y1 = Math.max(out.y1, 0);
            out.x2 = Math.min(out.x2, this.transformedSize.width);
            out.y2 = Math.min(out.y2, this.transformedSize.height);
        }
        return out;
    };
    /**
     * @private
     * @param {?} cropCanvas
     * @return {?}
     */
    ImageCropperComponent.prototype.cropToBase64 = /**
     * @private
     * @param {?} cropCanvas
     * @return {?}
     */
    function (cropCanvas) {
        return cropCanvas.toDataURL('image/' + this.format, this.getQuality());
    };
    /**
     * @private
     * @return {?}
     */
    ImageCropperComponent.prototype.getQuality = /**
     * @private
     * @return {?}
     */
    function () {
        return Math.min(1, Math.max(0, this.imageQuality / 100));
    };
    /**
     * @param {?} width
     * @param {?} height
     * @return {?}
     */
    ImageCropperComponent.prototype.getResizeRatio = /**
     * @param {?} width
     * @param {?} height
     * @return {?}
     */
    function (width, height) {
        /** @type {?} */
        var ratioWidth = this.resizeToWidth / width;
        /** @type {?} */
        var ratioHeight = this.resizeToHeight / height;
        /** @type {?} */
        var ratios = new Array();
        if (this.resizeToWidth > 0) {
            ratios.push(ratioWidth);
        }
        if (this.resizeToHeight > 0) {
            ratios.push(ratioHeight);
        }
        /** @type {?} */
        var result = ratios.length === 0 ? 1 : Math.min.apply(Math, Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__spread"])(ratios));
        if (result > 1 && !this.onlyScaleDown) {
            return result;
        }
        return Math.min(result, 1);
    };
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    ImageCropperComponent.prototype.getClientX = /**
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        return (event.touches && event.touches[0] ? event.touches[0].clientX : event.clientX) || 0;
    };
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    ImageCropperComponent.prototype.getClientY = /**
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        return (event.touches && event.touches[0] ? event.touches[0].clientY : event.clientY) || 0;
    };
    /** @nocollapse */
    ImageCropperComponent.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
    ]; };
    ImageCropperComponent.propDecorators = {
        wrapper: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['wrapper', { static: true },] }],
        sourceImage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['sourceImage', { static: false },] }],
        imageChangedEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        imageURL: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        imageBase64: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        imageFile: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        format: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        maintainAspectRatio: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        transform: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        aspectRatio: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        resizeToWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        resizeToHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cropperMinWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cropperMinHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cropperStaticWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cropperStaticHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        canvasRotation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        initialStepSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        roundCropper: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        onlyScaleDown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        imageQuality: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        autoCrop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        backgroundColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        containWithinAspectRatio: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        hideResizeSquares: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cropper: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        alignImage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.text-align',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.disabled',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        imageCropped: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        startCropImage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        imageLoaded: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        cropperReady: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        loadImageFailed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        onResize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['window:resize',] }],
        moveImg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['document:mousemove', ['$event'],] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['document:touchmove', ['$event'],] }],
        moveStop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['document:mouseup',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['document:touchend',] }]
    };
ImageCropperComponent.ɵfac = function ImageCropperComponent_Factory(t) { return new (t || ImageCropperComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
ImageCropperComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ImageCropperComponent, selectors: [["image-cropper"]], viewQuery: function ImageCropperComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.wrapper = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sourceImage = _t.first);
    } }, hostVars: 4, hostBindings: function ImageCropperComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function ImageCropperComponent_resize_HostBindingHandler() { return ctx.onResize(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"])("mousemove", function ImageCropperComponent_mousemove_HostBindingHandler($event) { return ctx.moveImg($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"])("touchmove", function ImageCropperComponent_touchmove_HostBindingHandler($event) { return ctx.moveImg($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"])("mouseup", function ImageCropperComponent_mouseup_HostBindingHandler() { return ctx.moveStop(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"])("touchend", function ImageCropperComponent_touchend_HostBindingHandler() { return ctx.moveStop(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("text-align", ctx.alignImage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx.disabled);
    } }, inputs: { format: "format", maintainAspectRatio: "maintainAspectRatio", transform: "transform", aspectRatio: "aspectRatio", resizeToWidth: "resizeToWidth", resizeToHeight: "resizeToHeight", cropperMinWidth: "cropperMinWidth", cropperMinHeight: "cropperMinHeight", cropperStaticWidth: "cropperStaticWidth", cropperStaticHeight: "cropperStaticHeight", canvasRotation: "canvasRotation", initialStepSize: "initialStepSize", roundCropper: "roundCropper", onlyScaleDown: "onlyScaleDown", imageQuality: "imageQuality", autoCrop: "autoCrop", containWithinAspectRatio: "containWithinAspectRatio", hideResizeSquares: "hideResizeSquares", cropper: "cropper", alignImage: "alignImage", disabled: "disabled", imageChangedEvent: "imageChangedEvent", imageURL: "imageURL", imageBase64: "imageBase64", imageFile: "imageFile", backgroundColor: "backgroundColor" }, outputs: { imageCropped: "imageCropped", startCropImage: "startCropImage", imageLoaded: "imageLoaded", cropperReady: "cropperReady", loadImageFailed: "loadImageFailed" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 5, vars: 10, consts: [["wrapper", ""], ["class", "source-image", 3, "src", "visibility", "transform", "load", 4, "ngIf"], [1, "overlay"], ["class", "cropper", "tabindex", "0", 3, "rounded", "top", "left", "width", "height", "margin-left", "visibility", "keydown", 4, "ngIf"], [1, "source-image", 3, "src", "load"], ["sourceImage", ""], ["tabindex", "0", 1, "cropper", 3, "keydown"], [1, "move", 3, "mousedown", "touchstart"], [4, "ngIf"], [1, "resize", "topleft", 3, "mousedown", "touchstart"], [1, "square"], [1, "resize", "top"], [1, "resize", "topright", 3, "mousedown", "touchstart"], [1, "resize", "right"], [1, "resize", "bottomright", 3, "mousedown", "touchstart"], [1, "resize", "bottom"], [1, "resize", "bottomleft", 3, "mousedown", "touchstart"], [1, "resize", "left"], [1, "resize-bar", "top", 3, "mousedown", "touchstart"], [1, "resize-bar", "right", 3, "mousedown", "touchstart"], [1, "resize-bar", "bottom", 3, "mousedown", "touchstart"], [1, "resize-bar", "left", 3, "mousedown", "touchstart"]], template: function ImageCropperComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", null, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ImageCropperComponent_img_2_Template, 2, 5, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ImageCropperComponent_div_4_Template, 3, 15, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", ctx.imageVisible && ctx.backgroundColor, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefaultStyleSanitizer"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.safeImgDataUrl);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.maxSize.width, "px")("height", ctx.maxSize.height, "px")("margin-left", ctx.alignImage === "center" ? ctx.marginLeft : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.imageVisible);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: ["[_nghost-%COMP%]{display:flex;position:relative;width:100%;max-width:100%;max-height:100%;overflow:hidden;padding:5px;text-align:center}[_nghost-%COMP%] > div[_ngcontent-%COMP%]{width:100%;position:relative}[_nghost-%COMP%] > div[_ngcontent-%COMP%]   img.source-image[_ngcontent-%COMP%]{max-width:100%;max-height:100%;transform-origin:center}[_nghost-%COMP%]   .overlay[_ngcontent-%COMP%]{position:absolute;pointer-events:none;touch-action:none;outline:var(--cropper-overlay-color,#fff) solid 100vw;top:0;left:0}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]{position:absolute;display:flex;color:#53535c;background:0 0;outline:rgba(255,255,255,.3) solid 100vw;outline:var(--cropper-outline-color,rgba(255,255,255,.3)) solid 100vw;touch-action:none}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]:after{position:absolute;content:\"\";top:0;bottom:0;left:0;right:0;pointer-events:none;border:1px dashed;opacity:.75;color:inherit;z-index:1}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .move[_ngcontent-%COMP%]{width:100%;cursor:move;border:1px solid rgba(255,255,255,.5)}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]:focus   .move[_ngcontent-%COMP%]{border-color:#1e90ff;border-width:2px}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize[_ngcontent-%COMP%]{position:absolute;display:inline-block;line-height:6px;padding:8px;opacity:.85;z-index:1}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize[_ngcontent-%COMP%]   .square[_ngcontent-%COMP%]{display:inline-block;background:#53535c;width:6px;height:6px;border:1px solid rgba(255,255,255,.5);box-sizing:content-box}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize.topleft[_ngcontent-%COMP%]{top:-12px;left:-12px;cursor:nwse-resize}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize.top[_ngcontent-%COMP%]{top:-12px;left:calc(50% - 12px);cursor:ns-resize}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize.topright[_ngcontent-%COMP%]{top:-12px;right:-12px;cursor:nesw-resize}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize.right[_ngcontent-%COMP%]{top:calc(50% - 12px);right:-12px;cursor:ew-resize}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize.bottomright[_ngcontent-%COMP%]{bottom:-12px;right:-12px;cursor:nwse-resize}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize.bottom[_ngcontent-%COMP%]{bottom:-12px;left:calc(50% - 12px);cursor:ns-resize}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize.bottomleft[_ngcontent-%COMP%]{bottom:-12px;left:-12px;cursor:nesw-resize}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize.left[_ngcontent-%COMP%]{top:calc(50% - 12px);left:-12px;cursor:ew-resize}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize-bar[_ngcontent-%COMP%]{position:absolute;z-index:1}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize-bar.top[_ngcontent-%COMP%]{top:-11px;left:11px;width:calc(100% - 22px);height:22px;cursor:ns-resize}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize-bar.right[_ngcontent-%COMP%]{top:11px;right:-11px;height:calc(100% - 22px);width:22px;cursor:ew-resize}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize-bar.bottom[_ngcontent-%COMP%]{bottom:-11px;left:11px;width:calc(100% - 22px);height:22px;cursor:ns-resize}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize-bar.left[_ngcontent-%COMP%]{top:11px;left:-11px;height:calc(100% - 22px);width:22px;cursor:ew-resize}[_nghost-%COMP%]   .cropper.rounded[_ngcontent-%COMP%]{outline-color:transparent}[_nghost-%COMP%]   .cropper.rounded[_ngcontent-%COMP%]:after{border-radius:100%;box-shadow:0 0 0 100vw rgba(255,255,255,.3);box-shadow:0 0 0 100vw var(--cropper-outline-color,rgba(255,255,255,.3))}@media (orientation:portrait){[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]{outline-width:100vh}[_nghost-%COMP%]   .cropper.rounded[_ngcontent-%COMP%]:after{box-shadow:0 0 0 100vh rgba(255,255,255,.3);box-shadow:0 0 0 100vh var(--cropper-outline-color,rgba(255,255,255,.3))}}[_nghost-%COMP%]   .cropper.rounded[_ngcontent-%COMP%]   .move[_ngcontent-%COMP%]{border-radius:100%}.disabled[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .move[_ngcontent-%COMP%], .disabled[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize[_ngcontent-%COMP%], .disabled[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize-bar[_ngcontent-%COMP%]{display:none}"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImageCropperComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'image-cropper',
                template: "<div [style.background]=\"imageVisible && backgroundColor\"\n     #wrapper\n>\n    <img\n      #sourceImage\n      class=\"source-image\"\n      *ngIf=\"safeImgDataUrl\"\n      [src]=\"safeImgDataUrl\"\n      [style.visibility]=\"imageVisible ? 'visible' : 'hidden'\"\n      [style.transform]=\"safeTransformStyle\"\n      (load)=\"imageLoadedInView()\"\n    />\n    <div\n        class=\"overlay\"\n        [style.width.px]=\"maxSize.width\"\n        [style.height.px]=\"maxSize.height\"\n        [style.margin-left]=\"alignImage === 'center' ? marginLeft : null\"\n    ></div>\n    <div class=\"cropper\"\n         *ngIf=\"imageVisible\"\n         [class.rounded]=\"roundCropper\"\n         [style.top.px]=\"cropper.y1\"\n         [style.left.px]=\"cropper.x1\"\n         [style.width.px]=\"cropper.x2 - cropper.x1\"\n         [style.height.px]=\"cropper.y2 - cropper.y1\"\n         [style.margin-left]=\"alignImage === 'center' ? marginLeft : null\"\n         [style.visibility]=\"imageVisible ? 'visible' : 'hidden'\"\n         (keydown)=\"keyboardAccess($event)\"\n         tabindex=\"0\"\n    >\n        <div\n            (mousedown)=\"startMove($event, moveTypes.Move)\"\n            (touchstart)=\"startMove($event, moveTypes.Move)\"\n            class=\"move\">\n        </div>\n        <ng-container *ngIf=\"!hideResizeSquares\">\n            <span class=\"resize topleft\"\n                  (mousedown)=\"startMove($event, moveTypes.Resize, 'topleft')\"\n                  (touchstart)=\"startMove($event, moveTypes.Resize, 'topleft')\">\n                <span class=\"square\"></span>\n            </span>\n            <span class=\"resize top\">\n                <span class=\"square\"></span>\n            </span>\n            <span class=\"resize topright\"\n                  (mousedown)=\"startMove($event, moveTypes.Resize, 'topright')\"\n                  (touchstart)=\"startMove($event, moveTypes.Resize, 'topright')\">\n                <span class=\"square\"></span>\n            </span>\n            <span class=\"resize right\">\n                <span class=\"square\"></span>\n            </span>\n            <span class=\"resize bottomright\"\n                  (mousedown)=\"startMove($event, moveTypes.Resize, 'bottomright')\"\n                  (touchstart)=\"startMove($event, moveTypes.Resize, 'bottomright')\">\n                <span class=\"square\"></span>\n            </span>\n            <span class=\"resize bottom\">\n                <span class=\"square\"></span>\n            </span>\n            <span class=\"resize bottomleft\"\n                  (mousedown)=\"startMove($event, moveTypes.Resize, 'bottomleft')\"\n                  (touchstart)=\"startMove($event, moveTypes.Resize, 'bottomleft')\">\n                <span class=\"square\"></span>\n            </span>\n            <span class=\"resize left\">\n                <span class=\"square\"></span>\n            </span>\n            <span class=\"resize-bar top\"\n                  (mousedown)=\"startMove($event, moveTypes.Resize, 'top')\"\n                  (touchstart)=\"startMove($event, moveTypes.Resize, 'top')\">\n            </span>\n            <span class=\"resize-bar right\"\n                  (mousedown)=\"startMove($event, moveTypes.Resize, 'right')\"\n                  (touchstart)=\"startMove($event, moveTypes.Resize, 'right')\">\n            </span>\n            <span class=\"resize-bar bottom\"\n                  (mousedown)=\"startMove($event, moveTypes.Resize, 'bottom')\"\n                  (touchstart)=\"startMove($event, moveTypes.Resize, 'bottom')\">\n            </span>\n            <span class=\"resize-bar left\"\n                  (mousedown)=\"startMove($event, moveTypes.Resize, 'left')\"\n                  (touchstart)=\"startMove($event, moveTypes.Resize, 'left')\">\n            </span>\n        </ng-container>\n    </div>\n</div>\n",
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                styles: [":host{display:flex;position:relative;width:100%;max-width:100%;max-height:100%;overflow:hidden;padding:5px;text-align:center}:host>div{width:100%;position:relative}:host>div img.source-image{max-width:100%;max-height:100%;transform-origin:center}:host .overlay{position:absolute;pointer-events:none;touch-action:none;outline:var(--cropper-overlay-color,#fff) solid 100vw;top:0;left:0}:host .cropper{position:absolute;display:flex;color:#53535c;background:0 0;outline:rgba(255,255,255,.3) solid 100vw;outline:var(--cropper-outline-color,rgba(255,255,255,.3)) solid 100vw;touch-action:none}:host .cropper:after{position:absolute;content:\"\";top:0;bottom:0;left:0;right:0;pointer-events:none;border:1px dashed;opacity:.75;color:inherit;z-index:1}:host .cropper .move{width:100%;cursor:move;border:1px solid rgba(255,255,255,.5)}:host .cropper:focus .move{border-color:#1e90ff;border-width:2px}:host .cropper .resize{position:absolute;display:inline-block;line-height:6px;padding:8px;opacity:.85;z-index:1}:host .cropper .resize .square{display:inline-block;background:#53535c;width:6px;height:6px;border:1px solid rgba(255,255,255,.5);box-sizing:content-box}:host .cropper .resize.topleft{top:-12px;left:-12px;cursor:nwse-resize}:host .cropper .resize.top{top:-12px;left:calc(50% - 12px);cursor:ns-resize}:host .cropper .resize.topright{top:-12px;right:-12px;cursor:nesw-resize}:host .cropper .resize.right{top:calc(50% - 12px);right:-12px;cursor:ew-resize}:host .cropper .resize.bottomright{bottom:-12px;right:-12px;cursor:nwse-resize}:host .cropper .resize.bottom{bottom:-12px;left:calc(50% - 12px);cursor:ns-resize}:host .cropper .resize.bottomleft{bottom:-12px;left:-12px;cursor:nesw-resize}:host .cropper .resize.left{top:calc(50% - 12px);left:-12px;cursor:ew-resize}:host .cropper .resize-bar{position:absolute;z-index:1}:host .cropper .resize-bar.top{top:-11px;left:11px;width:calc(100% - 22px);height:22px;cursor:ns-resize}:host .cropper .resize-bar.right{top:11px;right:-11px;height:calc(100% - 22px);width:22px;cursor:ew-resize}:host .cropper .resize-bar.bottom{bottom:-11px;left:11px;width:calc(100% - 22px);height:22px;cursor:ns-resize}:host .cropper .resize-bar.left{top:11px;left:-11px;height:calc(100% - 22px);width:22px;cursor:ew-resize}:host .cropper.rounded{outline-color:transparent}:host .cropper.rounded:after{border-radius:100%;box-shadow:0 0 0 100vw rgba(255,255,255,.3);box-shadow:0 0 0 100vw var(--cropper-outline-color,rgba(255,255,255,.3))}@media (orientation:portrait){:host .cropper{outline-width:100vh}:host .cropper.rounded:after{box-shadow:0 0 0 100vh rgba(255,255,255,.3);box-shadow:0 0 0 100vh var(--cropper-outline-color,rgba(255,255,255,.3))}}:host .cropper.rounded .move{border-radius:100%}:host.disabled .cropper .move,:host.disabled .cropper .resize,:host.disabled .cropper .resize-bar{display:none}"]
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, { format: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], maintainAspectRatio: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], transform: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], aspectRatio: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], resizeToWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], resizeToHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], cropperMinWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], cropperMinHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], cropperStaticWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], cropperStaticHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], canvasRotation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], initialStepSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], roundCropper: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], onlyScaleDown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], imageQuality: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], autoCrop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], containWithinAspectRatio: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], hideResizeSquares: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], cropper: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], alignImage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.text-align']
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.disabled']
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], imageCropped: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], startCropImage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], imageLoaded: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], cropperReady: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], loadImageFailed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], onResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:resize']
        }], moveImg: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['document:mousemove', ['$event']]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['document:touchmove', ['$event']]
        }], moveStop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['document:mouseup']
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['document:touchend']
        }], wrapper: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['wrapper', { static: true }]
        }], sourceImage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['sourceImage', { static: false }]
        }], imageChangedEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], imageURL: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], imageBase64: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], imageFile: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], backgroundColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
    return ImageCropperComponent;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ImageCropperModule = /** @class */ (function () {
    function ImageCropperModule() {
    }
ImageCropperModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ImageCropperModule });
ImageCropperModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ImageCropperModule_Factory(t) { return new (t || ImageCropperModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ImageCropperModule, { declarations: function () { return [ImageCropperComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]; }, exports: function () { return [ImageCropperComponent]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImageCropperModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                declarations: [
                    ImageCropperComponent
                ],
                exports: [
                    ImageCropperComponent
                ]
            }]
    }], function () { return []; }, null); })();
    return ImageCropperModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} base64Image
 * @return {?}
 */
function base64ToFile(base64Image) {
    /** @type {?} */
    var split = base64Image.split(',');
    /** @type {?} */
    var type = split[0].replace('data:', '').replace(';base64', '');
    /** @type {?} */
    var byteString = atob(split[1]);
    /** @type {?} */
    var ab = new ArrayBuffer(byteString.length);
    /** @type {?} */
    var ia = new Uint8Array(ab);
    for (var i = 0; i < byteString.length; i += 1) {
        ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], { type: type });
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=ngx-image-cropper.js.map

/***/ }),

/***/ "./node_modules/ngx-papaparse/__ivy_ngcc__/fesm5/ngx-papaparse.js":
/*!************************************************************************!*\
  !*** ./node_modules/ngx-papaparse/__ivy_ngcc__/fesm5/ngx-papaparse.js ***!
  \************************************************************************/
/*! exports provided: Papa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Papa", function() { return Papa; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var papaparse_papaparse_min_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! papaparse/papaparse.min.js */ "./node_modules/papaparse/papaparse.min.js");
/* harmony import */ var papaparse_papaparse_min_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(papaparse_papaparse_min_js__WEBPACK_IMPORTED_MODULE_1__);



/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

var Papa = /** @class */ (function () {
    function Papa() {
        this._papa = papaparse_papaparse_min_js__WEBPACK_IMPORTED_MODULE_1__;
    }
    /**
     * Parse CSV to an array
     * @param {?} csv
     * @param {?=} config
     * @return {?}
     */
    Papa.prototype.parse = /**
     * Parse CSV to an array
     * @param {?} csv
     * @param {?=} config
     * @return {?}
     */
    function (csv, config) {
        return this._papa.parse(csv, config);
    };
    /**
     * Convert an array into CSV
     * @param {?} data
     * @param {?=} config
     * @return {?}
     */
    Papa.prototype.unparse = /**
     * Convert an array into CSV
     * @param {?} data
     * @param {?=} config
     * @return {?}
     */
    function (data, config) {
        return this._papa.unparse(data, config);
    };
    /**
     * Set the size in bytes of each file chunk.
     * Used when streaming files obtained from the DOM that
     * exist on the local computer. Default 10 MB.
     * @param {?} value
     * @return {?}
     */
    Papa.prototype.setLocalChunkSize = /**
     * Set the size in bytes of each file chunk.
     * Used when streaming files obtained from the DOM that
     * exist on the local computer. Default 10 MB.
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this._papa.LocalChunkSize = value;
    };
    /**
     * Set the size in bytes of each remote file chunk.
     * Used when streaming remote files. Default 5 MB.
     * @param {?} value
     * @return {?}
     */
    Papa.prototype.setRemoteChunkSize = /**
     * Set the size in bytes of each remote file chunk.
     * Used when streaming remote files. Default 5 MB.
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this._papa.RemoteChunkSize = value;
    };
    /**
     * Set the delimiter used when it is left unspecified and cannot be detected automatically. Default is comma.
     * @param {?} value
     * @return {?}
     */
    Papa.prototype.setDefaultDelimiter = /**
     * Set the delimiter used when it is left unspecified and cannot be detected automatically. Default is comma.
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this._papa.DefaultDelimiter = value;
    };
    Object.defineProperty(Papa.prototype, "badDelimiters", {
        /**
         * An array of characters that are not allowed as delimiters.
         */
        get: /**
         * An array of characters that are not allowed as delimiters.
         * @return {?}
         */
        function () {
            return this._papa.BAD_DELIMITERS;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Papa.prototype, "recordSeparator", {
        /**
         * The true delimiter. Invisible. ASCII code 30.
         * Should be doing the job we strangely rely upon commas and tabs for.
         */
        get: /**
         * The true delimiter. Invisible. ASCII code 30.
         * Should be doing the job we strangely rely upon commas and tabs for.
         * @return {?}
         */
        function () {
            return this._papa.RECORD_SEP;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Papa.prototype, "unitSeparator", {
        /**
         * Also sometimes used as a delimiting character. ASCII code 31.
         */
        get: /**
         * Also sometimes used as a delimiting character. ASCII code 31.
         * @return {?}
         */
        function () {
            return this._papa.UNIT_SEP;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Papa.prototype, "workersSupported", {
        /**
         * Whether or not the browser supports HTML5 Web Workers.
         * If false, worker: true will have no effect.
         */
        get: /**
         * Whether or not the browser supports HTML5 Web Workers.
         * If false, worker: true will have no effect.
         * @return {?}
         */
        function () {
            return this._papa.WORKERS_SUPPORTED;
        },
        enumerable: true,
        configurable: true
    });
    /** @nocollapse */ Papa.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function Papa_Factory() { return new Papa(); }, token: Papa, providedIn: "root" });
Papa.ɵfac = function Papa_Factory(t) { return new (t || Papa)(); };
Papa.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: Papa, factory: function (t) { return Papa.ɵfac(t); }, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Papa, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();
    return Papa;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXBhcGFwYXJzZS5qcyIsInNvdXJjZXMiOlsibmc6L25neC1wYXBhcGFyc2UvbGliL3BhcGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7cUJBVW1CLEdBQUc7Ozs7Ozs7O0lBS1gsb0JBQUs7Ozs7OztjQUFDLEdBQWdCLEVBQUUsTUFBb0I7UUFDL0MsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLENBQUM7Ozs7Ozs7O0lBTWxDLHNCQUFPOzs7Ozs7Y0FBQyxJQUFJLEVBQUUsTUFBc0I7UUFDdkMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7Ozs7Ozs7OztJQVFyQyxnQ0FBaUI7Ozs7Ozs7Y0FBQyxLQUFhO1FBQ2xDLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQzs7Ozs7Ozs7SUFPL0IsaUNBQWtCOzs7Ozs7Y0FBQyxLQUFhO1FBQ25DLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQzs7Ozs7OztJQU1oQyxrQ0FBbUI7Ozs7O2NBQUMsS0FBYTtRQUNwQyxJQUFJLENBQUMsS0FBSyxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQzs7SUFNeEMsc0JBQUksK0JBQWE7Ozs7Ozs7O1FBQWpCO1lBQ0ksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQztTQUNwQzs7O09BQUE7SUFNRCxzQkFBSSxpQ0FBZTs7Ozs7Ozs7OztRQUFuQjtZQUNJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUM7U0FDaEM7OztPQUFBO0lBS0Qsc0JBQUksK0JBQWE7Ozs7Ozs7O1FBQWpCO1lBQ0ksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQztTQUM5Qjs7O09BQUE7SUFNRCxzQkFBSSxrQ0FBZ0I7Ozs7Ozs7Ozs7UUFBcEI7WUFDSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUM7U0FDdkM7OztPQUFBLEFBckVLO3dDQUhULFVBQVUsU0FBQyxzQkFDUixVQUFVLEVBQUUsTUFBTSxtQkFDckI7Ozs7Ozs7O2dEQVFPO2VBaEJSIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGFyc2VSZXN1bHQgfSBmcm9tICcuL2ludGVyZmFjZXMvcGFyc2UtcmVzdWx0JztcbmltcG9ydCB7IFBhcnNlQ29uZmlnIH0gZnJvbSAnLi9pbnRlcmZhY2VzL3BhcnNlLWNvbmZpZyc7XG5pbXBvcnQgeyBVbnBhcnNlQ29uZmlnIH0gZnJvbSAnLi9pbnRlcmZhY2VzL3VucGFyc2UtY29uZmlnJztcbmltcG9ydCAqIGFzIGxpYiBmcm9tICdwYXBhcGFyc2UvcGFwYXBhcnNlLm1pbi5qcyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFBhcGEge1xuICAgIHB1YmxpYyBfcGFwYSA9IGxpYjtcblxuICAgIC8qKlxuICAgICAqIFBhcnNlIENTViB0byBhbiBhcnJheVxuICAgICAqL1xuICAgIHB1YmxpYyBwYXJzZShjc3Y6IHN0cmluZ3xGaWxlLCBjb25maWc/OiBQYXJzZUNvbmZpZyk6IFBhcnNlUmVzdWx0IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BhcGEucGFyc2UoY3N2LCBjb25maWcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvbnZlcnQgYW4gYXJyYXkgaW50byBDU1ZcbiAgICAgKi9cbiAgICBwdWJsaWMgdW5wYXJzZShkYXRhLCBjb25maWc/OiBVbnBhcnNlQ29uZmlnKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BhcGEudW5wYXJzZShkYXRhLCBjb25maWcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCB0aGUgc2l6ZSBpbiBieXRlcyBvZiBlYWNoIGZpbGUgY2h1bmsuXG4gICAgICogVXNlZCB3aGVuIHN0cmVhbWluZyBmaWxlcyBvYnRhaW5lZCBmcm9tIHRoZSBET00gdGhhdFxuICAgICAqIGV4aXN0IG9uIHRoZSBsb2NhbCBjb21wdXRlci4gRGVmYXVsdCAxMCBNQi5cbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0TG9jYWxDaHVua1NpemUodmFsdWU6IG51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLl9wYXBhLkxvY2FsQ2h1bmtTaXplID0gdmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IHRoZSBzaXplIGluIGJ5dGVzIG9mIGVhY2ggcmVtb3RlIGZpbGUgY2h1bmsuXG4gICAgICogVXNlZCB3aGVuIHN0cmVhbWluZyByZW1vdGUgZmlsZXMuIERlZmF1bHQgNSBNQi5cbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0UmVtb3RlQ2h1bmtTaXplKHZhbHVlOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fcGFwYS5SZW1vdGVDaHVua1NpemUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgdGhlIGRlbGltaXRlciB1c2VkIHdoZW4gaXQgaXMgbGVmdCB1bnNwZWNpZmllZCBhbmQgY2Fubm90IGJlIGRldGVjdGVkIGF1dG9tYXRpY2FsbHkuIERlZmF1bHQgaXMgY29tbWEuXG4gICAgICovXG4gICAgcHVibGljIHNldERlZmF1bHREZWxpbWl0ZXIodmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICB0aGlzLl9wYXBhLkRlZmF1bHREZWxpbWl0ZXIgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBbiBhcnJheSBvZiBjaGFyYWN0ZXJzIHRoYXQgYXJlIG5vdCBhbGxvd2VkIGFzIGRlbGltaXRlcnMuXG4gICAgICovXG4gICAgZ2V0IGJhZERlbGltaXRlcnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wYXBhLkJBRF9ERUxJTUlURVJTO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSB0cnVlIGRlbGltaXRlci4gSW52aXNpYmxlLiBBU0NJSSBjb2RlIDMwLlxuICAgICAqIFNob3VsZCBiZSBkb2luZyB0aGUgam9iIHdlIHN0cmFuZ2VseSByZWx5IHVwb24gY29tbWFzIGFuZCB0YWJzIGZvci5cbiAgICAgKi9cbiAgICBnZXQgcmVjb3JkU2VwYXJhdG9yKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcGFwYS5SRUNPUkRfU0VQO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFsc28gc29tZXRpbWVzIHVzZWQgYXMgYSBkZWxpbWl0aW5nIGNoYXJhY3Rlci4gQVNDSUkgY29kZSAzMS5cbiAgICAgKi9cbiAgICBnZXQgdW5pdFNlcGFyYXRvcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BhcGEuVU5JVF9TRVA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogV2hldGhlciBvciBub3QgdGhlIGJyb3dzZXIgc3VwcG9ydHMgSFRNTDUgV2ViIFdvcmtlcnMuXG4gICAgICogSWYgZmFsc2UsIHdvcmtlcjogdHJ1ZSB3aWxsIGhhdmUgbm8gZWZmZWN0LlxuICAgICAqL1xuICAgIGdldCB3b3JrZXJzU3VwcG9ydGVkKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fcGFwYS5XT1JLRVJTX1NVUFBPUlRFRDtcbiAgICB9XG59XG4iXX0=

/***/ }),

/***/ "./node_modules/papaparse/papaparse.min.js":
/*!*************************************************!*\
  !*** ./node_modules/papaparse/papaparse.min.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* @license
Papa Parse
v5.2.0
https://github.com/mholt/PapaParse
License: MIT
*/
!function(e,t){ true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):undefined}(this,function s(){"use strict";var f="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==f?f:{};var n=!f.document&&!!f.postMessage,o=n&&/blob:/i.test((f.location||{}).protocol),a={},h=0,b={parse:function(e,t){var i=(t=t||{}).dynamicTyping||!1;U(i)&&(t.dynamicTypingFunction=i,i={});if(t.dynamicTyping=i,t.transform=!!U(t.transform)&&t.transform,t.worker&&b.WORKERS_SUPPORTED){var r=function(){if(!b.WORKERS_SUPPORTED)return!1;var e=(i=f.URL||f.webkitURL||null,r=s.toString(),b.BLOB_URL||(b.BLOB_URL=i.createObjectURL(new Blob(["(",r,")();"],{type:"text/javascript"})))),t=new f.Worker(e);var i,r;return t.onmessage=_,t.id=h++,a[t.id]=t}();return r.userStep=t.step,r.userChunk=t.chunk,r.userComplete=t.complete,r.userError=t.error,t.step=U(t.step),t.chunk=U(t.chunk),t.complete=U(t.complete),t.error=U(t.error),delete t.worker,void r.postMessage({input:e,config:t,workerId:r.id})}var n=null;b.NODE_STREAM_INPUT,"string"==typeof e?n=t.download?new l(t):new p(t):!0===e.readable&&U(e.read)&&U(e.on)?n=new g(t):(f.File&&e instanceof File||e instanceof Object)&&(n=new c(t));return n.stream(e)},unparse:function(e,t){var n=!1,_=!0,m=",",v="\r\n",s='"',a=s+s,i=!1,r=null;!function(){if("object"!=typeof t)return;"string"!=typeof t.delimiter||b.BAD_DELIMITERS.filter(function(e){return-1!==t.delimiter.indexOf(e)}).length||(m=t.delimiter);("boolean"==typeof t.quotes||"function"==typeof t.quotes||Array.isArray(t.quotes))&&(n=t.quotes);"boolean"!=typeof t.skipEmptyLines&&"string"!=typeof t.skipEmptyLines||(i=t.skipEmptyLines);"string"==typeof t.newline&&(v=t.newline);"string"==typeof t.quoteChar&&(s=t.quoteChar);"boolean"==typeof t.header&&(_=t.header);if(Array.isArray(t.columns)){if(0===t.columns.length)throw new Error("Option columns is empty");r=t.columns}void 0!==t.escapeChar&&(a=t.escapeChar+s)}();var o=new RegExp(q(s),"g");"string"==typeof e&&(e=JSON.parse(e));if(Array.isArray(e)){if(!e.length||Array.isArray(e[0]))return u(null,e,i);if("object"==typeof e[0])return u(r||h(e[0]),e,i)}else if("object"==typeof e)return"string"==typeof e.data&&(e.data=JSON.parse(e.data)),Array.isArray(e.data)&&(e.fields||(e.fields=e.meta&&e.meta.fields),e.fields||(e.fields=Array.isArray(e.data[0])?e.fields:h(e.data[0])),Array.isArray(e.data[0])||"object"==typeof e.data[0]||(e.data=[e.data])),u(e.fields||[],e.data||[],i);throw new Error("Unable to serialize unrecognized input");function h(e){if("object"!=typeof e)return[];var t=[];for(var i in e)t.push(i);return t}function u(e,t,i){var r="";"string"==typeof e&&(e=JSON.parse(e)),"string"==typeof t&&(t=JSON.parse(t));var n=Array.isArray(e)&&0<e.length,s=!Array.isArray(t[0]);if(n&&_){for(var a=0;a<e.length;a++)0<a&&(r+=m),r+=y(e[a],a);0<t.length&&(r+=v)}for(var o=0;o<t.length;o++){var h=n?e.length:t[o].length,u=!1,f=n?0===Object.keys(t[o]).length:0===t[o].length;if(i&&!n&&(u="greedy"===i?""===t[o].join("").trim():1===t[o].length&&0===t[o][0].length),"greedy"===i&&n){for(var d=[],l=0;l<h;l++){var c=s?e[l]:l;d.push(t[o][c])}u=""===d.join("").trim()}if(!u){for(var p=0;p<h;p++){0<p&&!f&&(r+=m);var g=n&&s?e[p]:p;r+=y(t[o][g],p)}o<t.length-1&&(!i||0<h&&!f)&&(r+=v)}}return r}function y(e,t){if(null==e)return"";if(e.constructor===Date)return JSON.stringify(e).slice(1,25);var i=e.toString().replace(o,a),r="boolean"==typeof n&&n||"function"==typeof n&&n(e,t)||Array.isArray(n)&&n[t]||function(e,t){for(var i=0;i<t.length;i++)if(-1<e.indexOf(t[i]))return!0;return!1}(i,b.BAD_DELIMITERS)||-1<i.indexOf(m)||" "===i.charAt(0)||" "===i.charAt(i.length-1);return r?s+i+s:i}}};if(b.RECORD_SEP=String.fromCharCode(30),b.UNIT_SEP=String.fromCharCode(31),b.BYTE_ORDER_MARK="\ufeff",b.BAD_DELIMITERS=["\r","\n",'"',b.BYTE_ORDER_MARK],b.WORKERS_SUPPORTED=!n&&!!f.Worker,b.NODE_STREAM_INPUT=1,b.LocalChunkSize=10485760,b.RemoteChunkSize=5242880,b.DefaultDelimiter=",",b.Parser=w,b.ParserHandle=i,b.NetworkStreamer=l,b.FileStreamer=c,b.StringStreamer=p,b.ReadableStreamStreamer=g,f.jQuery){var d=f.jQuery;d.fn.parse=function(o){var i=o.config||{},h=[];return this.each(function(e){if(!("INPUT"===d(this).prop("tagName").toUpperCase()&&"file"===d(this).attr("type").toLowerCase()&&f.FileReader)||!this.files||0===this.files.length)return!0;for(var t=0;t<this.files.length;t++)h.push({file:this.files[t],inputElem:this,instanceConfig:d.extend({},i)})}),e(),this;function e(){if(0!==h.length){var e,t,i,r,n=h[0];if(U(o.before)){var s=o.before(n.file,n.inputElem);if("object"==typeof s){if("abort"===s.action)return e="AbortError",t=n.file,i=n.inputElem,r=s.reason,void(U(o.error)&&o.error({name:e},t,i,r));if("skip"===s.action)return void u();"object"==typeof s.config&&(n.instanceConfig=d.extend(n.instanceConfig,s.config))}else if("skip"===s)return void u()}var a=n.instanceConfig.complete;n.instanceConfig.complete=function(e){U(a)&&a(e,n.file,n.inputElem),u()},b.parse(n.file,n.instanceConfig)}else U(o.complete)&&o.complete()}function u(){h.splice(0,1),e()}}}function u(e){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},function(e){var t=E(e);t.chunkSize=parseInt(t.chunkSize),e.step||e.chunk||(t.chunkSize=null);this._handle=new i(t),(this._handle.streamer=this)._config=t}.call(this,e),this.parseChunk=function(e,t){if(this.isFirstChunk&&U(this._config.beforeFirstChunk)){var i=this._config.beforeFirstChunk(e);void 0!==i&&(e=i)}this.isFirstChunk=!1,this._halted=!1;var r=this._partialLine+e;this._partialLine="";var n=this._handle.parse(r,this._baseIndex,!this._finished);if(!this._handle.paused()&&!this._handle.aborted()){var s=n.meta.cursor;this._finished||(this._partialLine=r.substring(s-this._baseIndex),this._baseIndex=s),n&&n.data&&(this._rowCount+=n.data.length);var a=this._finished||this._config.preview&&this._rowCount>=this._config.preview;if(o)f.postMessage({results:n,workerId:b.WORKER_ID,finished:a});else if(U(this._config.chunk)&&!t){if(this._config.chunk(n,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);n=void 0,this._completeResults=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(n.data),this._completeResults.errors=this._completeResults.errors.concat(n.errors),this._completeResults.meta=n.meta),this._completed||!a||!U(this._config.complete)||n&&n.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),a||n&&n.meta.paused||this._nextChunk(),n}this._halted=!0},this._sendError=function(e){U(this._config.error)?this._config.error(e):o&&this._config.error&&f.postMessage({workerId:b.WORKER_ID,error:e,finished:!1})}}function l(e){var r;(e=e||{}).chunkSize||(e.chunkSize=b.RemoteChunkSize),u.call(this,e),this._nextChunk=n?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(e){this._input=e,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(r=new XMLHttpRequest,this._config.withCredentials&&(r.withCredentials=this._config.withCredentials),n||(r.onload=y(this._chunkLoaded,this),r.onerror=y(this._chunkError,this)),r.open(this._config.downloadRequestBody?"POST":"GET",this._input,!n),this._config.downloadRequestHeaders){var e=this._config.downloadRequestHeaders;for(var t in e)r.setRequestHeader(t,e[t])}if(this._config.chunkSize){var i=this._start+this._config.chunkSize-1;r.setRequestHeader("Range","bytes="+this._start+"-"+i)}try{r.send(this._config.downloadRequestBody)}catch(e){this._chunkError(e.message)}n&&0===r.status&&this._chunkError()}},this._chunkLoaded=function(){4===r.readyState&&(r.status<200||400<=r.status?this._chunkError():(this._start+=this._config.chunkSize?this._config.chunkSize:r.responseText.length,this._finished=!this._config.chunkSize||this._start>=function(e){var t=e.getResponseHeader("Content-Range");if(null===t)return-1;return parseInt(t.substring(t.lastIndexOf("/")+1))}(r),this.parseChunk(r.responseText)))},this._chunkError=function(e){var t=r.statusText||e;this._sendError(new Error(t))}}function c(e){var r,n;(e=e||{}).chunkSize||(e.chunkSize=b.LocalChunkSize),u.call(this,e);var s="undefined"!=typeof FileReader;this.stream=function(e){this._input=e,n=e.slice||e.webkitSlice||e.mozSlice,s?((r=new FileReader).onload=y(this._chunkLoaded,this),r.onerror=y(this._chunkError,this)):r=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var e=this._input;if(this._config.chunkSize){var t=Math.min(this._start+this._config.chunkSize,this._input.size);e=n.call(e,this._start,t)}var i=r.readAsText(e,this._config.encoding);s||this._chunkLoaded({target:{result:i}})},this._chunkLoaded=function(e){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(e.target.result)},this._chunkError=function(){this._sendError(r.error)}}function p(e){var i;u.call(this,e=e||{}),this.stream=function(e){return i=e,this._nextChunk()},this._nextChunk=function(){if(!this._finished){var e,t=this._config.chunkSize;return t?(e=i.substring(0,t),i=i.substring(t)):(e=i,i=""),this._finished=!i,this.parseChunk(e)}}}function g(e){u.call(this,e=e||{});var t=[],i=!0,r=!1;this.pause=function(){u.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){u.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(e){this._input=e,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){r&&1===t.length&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),t.length?this.parseChunk(t.shift()):i=!0},this._streamData=y(function(e){try{t.push("string"==typeof e?e:e.toString(this._config.encoding)),i&&(i=!1,this._checkIsFinished(),this.parseChunk(t.shift()))}catch(e){this._streamError(e)}},this),this._streamError=y(function(e){this._streamCleanUp(),this._sendError(e)},this),this._streamEnd=y(function(){this._streamCleanUp(),r=!0,this._streamData("")},this),this._streamCleanUp=y(function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)},this)}function i(m){var a,o,h,r=Math.pow(2,53),n=-r,s=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)(e[-+]?\d+)?\s*$/,u=/(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))/,t=this,i=0,f=0,d=!1,e=!1,l=[],c={data:[],errors:[],meta:{}};if(U(m.step)){var p=m.step;m.step=function(e){if(c=e,_())g();else{if(g(),0===c.data.length)return;i+=e.data.length,m.preview&&i>m.preview?o.abort():(c.data=c.data[0],p(c,t))}}}function v(e){return"greedy"===m.skipEmptyLines?""===e.join("").trim():1===e.length&&0===e[0].length}function g(){if(c&&h&&(k("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+b.DefaultDelimiter+"'"),h=!1),m.skipEmptyLines)for(var e=0;e<c.data.length;e++)v(c.data[e])&&c.data.splice(e--,1);return _()&&function(){if(!c)return;function e(e){U(m.transformHeader)&&(e=m.transformHeader(e)),l.push(e)}if(Array.isArray(c.data[0])){for(var t=0;_()&&t<c.data.length;t++)c.data[t].forEach(e);c.data.splice(0,1)}else c.data.forEach(e)}(),function(){if(!c||!m.header&&!m.dynamicTyping&&!m.transform)return c;function e(e,t){var i,r=m.header?{}:[];for(i=0;i<e.length;i++){var n=i,s=e[i];m.header&&(n=i>=l.length?"__parsed_extra":l[i]),m.transform&&(s=m.transform(s,n)),s=y(n,s),"__parsed_extra"===n?(r[n]=r[n]||[],r[n].push(s)):r[n]=s}return m.header&&(i>l.length?k("FieldMismatch","TooManyFields","Too many fields: expected "+l.length+" fields but parsed "+i,f+t):i<l.length&&k("FieldMismatch","TooFewFields","Too few fields: expected "+l.length+" fields but parsed "+i,f+t)),r}var t=1;!c.data.length||Array.isArray(c.data[0])?(c.data=c.data.map(e),t=c.data.length):c.data=e(c.data,0);m.header&&c.meta&&(c.meta.fields=l);return f+=t,c}()}function _(){return m.header&&0===l.length}function y(e,t){return i=e,m.dynamicTypingFunction&&void 0===m.dynamicTyping[i]&&(m.dynamicTyping[i]=m.dynamicTypingFunction(i)),!0===(m.dynamicTyping[i]||m.dynamicTyping)?"true"===t||"TRUE"===t||"false"!==t&&"FALSE"!==t&&(function(e){if(s.test(e)){var t=parseFloat(e);if(n<t&&t<r)return!0}return!1}(t)?parseFloat(t):u.test(t)?new Date(t):""===t?null:t):t;var i}function k(e,t,i,r){var n={type:e,code:t,message:i};void 0!==r&&(n.row=r),c.errors.push(n)}this.parse=function(e,t,i){var r=m.quoteChar||'"';if(m.newline||(m.newline=function(e,t){e=e.substring(0,1048576);var i=new RegExp(q(t)+"([^]*?)"+q(t),"gm"),r=(e=e.replace(i,"")).split("\r"),n=e.split("\n"),s=1<n.length&&n[0].length<r[0].length;if(1===r.length||s)return"\n";for(var a=0,o=0;o<r.length;o++)"\n"===r[o][0]&&a++;return a>=r.length/2?"\r\n":"\r"}(e,r)),h=!1,m.delimiter)U(m.delimiter)&&(m.delimiter=m.delimiter(e),c.meta.delimiter=m.delimiter);else{var n=function(e,t,i,r,n){var s,a,o,h;n=n||[",","\t","|",";",b.RECORD_SEP,b.UNIT_SEP];for(var u=0;u<n.length;u++){var f=n[u],d=0,l=0,c=0;o=void 0;for(var p=new w({comments:r,delimiter:f,newline:t,preview:10}).parse(e),g=0;g<p.data.length;g++)if(i&&v(p.data[g]))c++;else{var _=p.data[g].length;l+=_,void 0!==o?0<_&&(d+=Math.abs(_-o),o=_):o=_}0<p.data.length&&(l/=p.data.length-c),(void 0===a||d<=a)&&(void 0===h||h<l)&&1.99<l&&(a=d,s=f,h=l)}return{successful:!!(m.delimiter=s),bestDelimiter:s}}(e,m.newline,m.skipEmptyLines,m.comments,m.delimitersToGuess);n.successful?m.delimiter=n.bestDelimiter:(h=!0,m.delimiter=b.DefaultDelimiter),c.meta.delimiter=m.delimiter}var s=E(m);return m.preview&&m.header&&s.preview++,a=e,o=new w(s),c=o.parse(a,t,i),g(),d?{meta:{paused:!0}}:c||{meta:{paused:!1}}},this.paused=function(){return d},this.pause=function(){d=!0,o.abort(),a=U(m.chunk)?"":a.substring(o.getCharIndex())},this.resume=function(){t.streamer._halted?(d=!1,t.streamer.parseChunk(a,!0)):setTimeout(t.resume,3)},this.aborted=function(){return e},this.abort=function(){e=!0,o.abort(),c.meta.aborted=!0,U(m.complete)&&m.complete(c),a=""}}function q(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function w(e){var O,D=(e=e||{}).delimiter,I=e.newline,T=e.comments,A=e.step,L=e.preview,F=e.fastMode,z=O=void 0===e.quoteChar?'"':e.quoteChar;if(void 0!==e.escapeChar&&(z=e.escapeChar),("string"!=typeof D||-1<b.BAD_DELIMITERS.indexOf(D))&&(D=","),T===D)throw new Error("Comment character same as delimiter");!0===T?T="#":("string"!=typeof T||-1<b.BAD_DELIMITERS.indexOf(T))&&(T=!1),"\n"!==I&&"\r"!==I&&"\r\n"!==I&&(I="\n");var M=0,j=!1;this.parse=function(a,t,i){if("string"!=typeof a)throw new Error("Input must be a string");var r=a.length,e=D.length,n=I.length,s=T.length,o=U(A),h=[],u=[],f=[],d=M=0;if(!a)return R();if(F||!1!==F&&-1===a.indexOf(O)){for(var l=a.split(I),c=0;c<l.length;c++){if(f=l[c],M+=f.length,c!==l.length-1)M+=I.length;else if(i)return R();if(!T||f.substring(0,s)!==T){if(o){if(h=[],b(f.split(D)),S(),j)return R()}else b(f.split(D));if(L&&L<=c)return h=h.slice(0,L),R(!0)}}return R()}for(var p=a.indexOf(D,M),g=a.indexOf(I,M),_=new RegExp(q(z)+q(O),"g"),m=a.indexOf(O,M);;)if(a[M]!==O)if(T&&0===f.length&&a.substring(M,M+s)===T){if(-1===g)return R();M=g+n,g=a.indexOf(I,M),p=a.indexOf(D,M)}else{if(-1!==p&&(p<g||-1===g)){if(!(p<m)){f.push(a.substring(M,p)),M=p+e,p=a.indexOf(D,M);continue}var v=x(p,m,g);if(v&&void 0!==v.nextDelim){p=v.nextDelim,m=v.quoteSearch,f.push(a.substring(M,p)),M=p+e,p=a.indexOf(D,M);continue}}if(-1===g)break;if(f.push(a.substring(M,g)),C(g+n),o&&(S(),j))return R();if(L&&h.length>=L)return R(!0)}else for(m=M,M++;;){if(-1===(m=a.indexOf(O,m+1)))return i||u.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:h.length,index:M}),E();if(m===r-1)return E(a.substring(M,m).replace(_,O));if(O!==z||a[m+1]!==z){if(O===z||0===m||a[m-1]!==z){-1!==p&&p<m+1&&(p=a.indexOf(D,m+1)),-1!==g&&g<m+1&&(g=a.indexOf(I,m+1));var y=w(-1===g?p:Math.min(p,g));if(a[m+1+y]===D){f.push(a.substring(M,m).replace(_,O)),a[M=m+1+y+e]!==O&&(m=a.indexOf(O,M)),p=a.indexOf(D,M),g=a.indexOf(I,M);break}var k=w(g);if(a.substring(m+1+k,m+1+k+n)===I){if(f.push(a.substring(M,m).replace(_,O)),C(m+1+k+n),p=a.indexOf(D,M),m=a.indexOf(O,M),o&&(S(),j))return R();if(L&&h.length>=L)return R(!0);break}u.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:h.length,index:M}),m++}}else m++}return E();function b(e){h.push(e),d=M}function w(e){var t=0;if(-1!==e){var i=a.substring(m+1,e);i&&""===i.trim()&&(t=i.length)}return t}function E(e){return i||(void 0===e&&(e=a.substring(M)),f.push(e),M=r,b(f),o&&S()),R()}function C(e){M=e,b(f),f=[],g=a.indexOf(I,M)}function R(e){return{data:h,errors:u,meta:{delimiter:D,linebreak:I,aborted:j,truncated:!!e,cursor:d+(t||0)}}}function S(){A(R()),h=[],u=[]}function x(e,t,i){var r={nextDelim:void 0,quoteSearch:void 0},n=a.indexOf(O,t+1);if(t<e&&e<n&&(n<i||-1===i)){var s=a.indexOf(D,n);if(-1===s)return r;n<s&&(n=a.indexOf(O,n+1)),r=x(s,n,i)}else r={nextDelim:e,quoteSearch:t};return r}},this.abort=function(){j=!0},this.getCharIndex=function(){return M}}function _(e){var t=e.data,i=a[t.workerId],r=!1;if(t.error)i.userError(t.error,t.file);else if(t.results&&t.results.data){var n={abort:function(){r=!0,m(t.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:v,resume:v};if(U(i.userStep)){for(var s=0;s<t.results.data.length&&(i.userStep({data:t.results.data[s],errors:t.results.errors,meta:t.results.meta},n),!r);s++);delete t.results}else U(i.userChunk)&&(i.userChunk(t.results,n,t.file),delete t.results)}t.finished&&!r&&m(t.workerId,t.results)}function m(e,t){var i=a[e];U(i.userComplete)&&i.userComplete(t),i.terminate(),delete a[e]}function v(){throw new Error("Not implemented.")}function E(e){if("object"!=typeof e||null===e)return e;var t=Array.isArray(e)?[]:{};for(var i in e)t[i]=E(e[i]);return t}function y(e,t){return function(){e.apply(t,arguments)}}function U(e){return"function"==typeof e}return o&&(f.onmessage=function(e){var t=e.data;void 0===b.WORKER_ID&&t&&(b.WORKER_ID=t.workerId);if("string"==typeof t.input)f.postMessage({workerId:b.WORKER_ID,results:b.parse(t.input,t.config),finished:!0});else if(f.File&&t.input instanceof File||t.input instanceof Object){var i=b.parse(t.input,t.config);i&&f.postMessage({workerId:b.WORKER_ID,results:i,finished:!0})}}),(l.prototype=Object.create(u.prototype)).constructor=l,(c.prototype=Object.create(u.prototype)).constructor=c,(p.prototype=Object.create(p.prototype)).constructor=p,(g.prototype=Object.create(u.prototype)).constructor=g,b});

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin-store/pages/products/components/category/category.component.html":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin-store/pages/products/components/category/category.component.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-list overflow-scroll=\"true\">\n  <div class=\"\" *ngFor=\"let category of categories$ | async; let i = index\">\n    <ion-grid no-padding>\n      <ion-row no-padding>\n        <ion-col no-padding size=\"1\">\n          <ion-avatar style=\"position: relative; z-index: 1;\">\n            <img\n              src=\"https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y\"\n            />\n          </ion-avatar>\n        </ion-col>\n        <ion-col no-padding size=\"11\">\n          <ion-item>\n            <ion-text value=\"category.categoryName\"\n              ><sub>{{ category.name }}</sub></ion-text\n            >\n          </ion-item>\n          <ion-label color=\"danger\" *ngIf=\"isUpdating$ | async\"\n            >Is updating</ion-label\n          >\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-buttons *ngIf=\"false\" slot=\"end\">\n      <ion-button\n        (click)=\"updateCategory(category)\"\n        size=\"small\"\n        color=\"primary\"\n      >\n        <ion-icon size=\"small\" slot=\"icon-only\" name=\"create\"></ion-icon>\n      </ion-button>\n      <ion-button\n        (click)=\"onDeleteCategory(category)\"\n        size=\"small\"\n        color=\"danger\"\n      >\n        <ion-icon size=\"small\" slot=\"icon-only\" name=\"trash\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </div>\n</ion-list>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin-store/pages/products/components/csv/csv.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin-store/pages/products/components/csv/csv.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-fab vertical=\"bottom\" horizontal=\"start\" >\n  <ion-fab-button   (click)=\"exportCSV()\">\n    Export \n    \n  </ion-fab-button>\n</ion-fab>\n<ion-img src=\"../assets/undraw_filing_system_b5d2.svg\">\n\n</ion-img>\n<ion-title style=\"padding-bottom: 30px;\">\n  <h1 style=\"text-align: center;\">\n    Import products \n  </h1>\n  <ion-text style=\"text-align: center;\">\n    import products from CSV file\n  </ion-text>\n</ion-title>\n<ion-toolbar>\n\n<ion-item>\n  <input type=\"file\" id=\"file\" (change)=\"handleFileInput($event)\">\n</ion-item>\n  <button *ngIf=\"uploaded\" color=\"success\" (click)=\"saveProducts()\">save</button>\n\n</ion-toolbar>\n\n\n\n<!--<button *ngIf=\"!ProductReady\" (click)=\"loadProducts()\">Export products</button>-->\n<table *ngIf=\"uploaded\" border=\"1\" class=\"data-table\">\n  <tr>\n    <td *ngFor=\"let header of headerRow\" text-center>\n      <b>{{ header }}</b>\n    </td>\n  </tr>\n  <tr *ngFor=\"let row of csvData; let i =index\">\n    <td *ngFor=\"let data of row; let j =index\">\n      <ion-label>{{data}}</ion-label>\n    </td>\n  </tr>\n</table>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin-store/pages/products/components/inventory/inventory.component.html":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin-store/pages/products/components/inventory/inventory.component.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"no_product\">\r\n  <ion-grid>\r\n    <ion-row style=\"height: 70vh\" class=\"center\">\r\n      <ion-col size=\"12\">\r\n        <ion-label> No Products </ion-label>\r\n      </ion-col>\r\n      <ion-col size=\"12\">\r\n        <ion-button (click)=\"sendToParent()\" shape=\"round\"\r\n          >Add A product <ion-icon name=\"add-circle-outline\"></ion-icon\r\n        ></ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</div>\r\n<div *ngIf=\"!no_product\">\r\n  <mat-accordion>\r\n    <ion-toolbar>\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col class=\"center\" size=\"8\"> </ion-col>\r\n          <ion-col class=\"center\" size=\"2\">\r\n            <ion-label\r\n              ><sub style=\"vertical-align: top\">IN STOCK</sub></ion-label\r\n            >\r\n          </ion-col>\r\n          <ion-col class=\"center\" size=\"2\">\r\n            <ion-label><sub>SOLD</sub></ion-label>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-toolbar>\r\n\r\n    <mat-expansion-panel\r\n      [disabled]=\"clickButton\"\r\n      (click)=\"clickButton = false\"\r\n      (click)=\"expanded(product)\"\r\n      hideToggle\r\n      *ngFor=\"let product of products$ | async; let i = index\"\r\n    >\r\n      <mat-expansion-panel-header\r\n        [collapsedHeight]=\"'12vh'\"\r\n        style=\"padding: 0px\"\r\n      >\r\n        <ion-item-sliding>\r\n          <ion-item lines=\"none\" style=\"--inner-padding-end: 0px\">\r\n            <ion-grid>\r\n              <ion-row>\r\n                <ion-col class=\"center\" size=\"2\">\r\n                  <ion-avatar style=\"height: 13vw; width: auto\">\r\n                    <img src=\"{{ product.productImage[0].url }}\" />\r\n                  </ion-avatar>\r\n                </ion-col>\r\n                <ion-col class=\"center\" size=\"6\">\r\n                  <ion-label\r\n                    style=\"text-align: center\"\r\n                    value=\"product.productName\"\r\n                  >\r\n                    <sub>{{ product.productName }}</sub>\r\n                  </ion-label>\r\n                </ion-col>\r\n                <ion-col class=\"center\" size=\"2\">\r\n                  <ion-label\r\n                    ><sub>{{ product.in_stock }}</sub></ion-label\r\n                  >\r\n                </ion-col>\r\n                <ion-col class=\"center\" size=\"2\">\r\n                  <ion-label\r\n                    ><sub>{{ product.sold }}</sub></ion-label\r\n                  >\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-grid>\r\n          </ion-item>\r\n\r\n          <ion-item-options>\r\n            <ion-item-option color=\"light\">\r\n              <ion-col size=\"12\">\r\n                <ion-button\r\n                  *ngIf=\"!edit\"\r\n                  shape=\"round\"\r\n                  fill=\"solid\"\r\n                  (click)=\"editProduct()\"\r\n                  size=\"small\"\r\n                  color=\"primary\"\r\n                >\r\n                  <ion-icon\r\n                    size=\"small\"\r\n                    slot=\"icon-only\"\r\n                    name=\"create\"\r\n                  ></ion-icon>\r\n                </ion-button>\r\n                <ion-button\r\n                  *ngIf=\"edit\"\r\n                  [disabled]=\"updateProduct.invalid\"\r\n                  shape=\"round\"\r\n                  type=\"submit\"\r\n                  fill=\"solid\"\r\n                  (click)=\"update()\"\r\n                  size=\"small\"\r\n                  color=\"primary\"\r\n                >\r\n                  <ion-icon\r\n                    size=\"small\"\r\n                    slot=\"icon-only\"\r\n                    name=\"save-outline\"\r\n                  ></ion-icon>\r\n                </ion-button>\r\n              </ion-col>\r\n            </ion-item-option>\r\n          </ion-item-options>\r\n        </ion-item-sliding>\r\n      </mat-expansion-panel-header>\r\n\r\n      <ng-template matExpansionPanelContent>\r\n        <form [formGroup]=\"updateProduct\">\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col size=\"12\">\r\n                <ion-label><sub>Production Status</sub></ion-label>\r\n                <ion-select\r\n                  [attr.disabled]=\"!edit\"\r\n                  formControlName=\"production_status\"\r\n                  value=\"{{ product.production_status }}\"\r\n                >\r\n                  <ion-select-option value=\"onHold\"\r\n                    ><sub>On hold</sub></ion-select-option\r\n                  >\r\n                  <ion-select-option value=\"Active\"\r\n                    ><sub>Active</sub></ion-select-option\r\n                  >\r\n                  <ion-select-option value=\"OutOfStock\"\r\n                    ><sub>Out of Stock</sub></ion-select-option\r\n                  >\r\n                  <ion-select-option value=\"Discontinued\"\r\n                    ><sub>Discontinued</sub></ion-select-option\r\n                  >\r\n                </ion-select>\r\n              </ion-col>\r\n              <ion-col *ngIf=\"product.production_status == 'Active'\" size=\"12\">\r\n                <ion-label><sub>In Stock</sub></ion-label>\r\n                <ion-input\r\n                  formControlName=\"in_stock\"\r\n                  [attr.disabled]=\"!edit\"\r\n                  clearInput\r\n                  value=\"{{ product.in_stock }}\"\r\n                ></ion-input>\r\n              </ion-col>\r\n              <ion-col\r\n                *ngIf=\"\r\n                  product.production_status == 'OutOfStock' ||\r\n                  product.production_status == 'onHold'\r\n                \"\r\n                size=\"12\"\r\n              >\r\n                <ion-item>\r\n                  <ion-label position=\"stacked\"\r\n                    ><sub>next Available Date</sub></ion-label\r\n                  >\r\n                  <ion-datetime\r\n                    formControlName=\"next_available_date\"\r\n                    [attr.disabled]=\"!edit\"\r\n                    displayFormat=\"DDDD MMM D, YYYY\"\r\n                    min=\"2020\"\r\n                    max=\"2030\"\r\n                    value=\"2020-04-19\"\r\n                  ></ion-datetime>\r\n                </ion-item>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </form>\r\n      </ng-template>\r\n    </mat-expansion-panel>\r\n  </mat-accordion>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin-store/pages/products/components/products/add-product/add-product.component.html":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin-store/pages/products/components/products/add-product/add-product.component.html ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-fab vertical=\"top\" horizontal=\"start\">\r\n  <ion-fab-button size=\"small\" (click)=\"onClickBack()\">\r\n    <ion-icon name=\"arrow-back-outline\"></ion-icon>\r\n  </ion-fab-button>\r\n</ion-fab>\r\n\r\n\r\n\r\n<app-csv *ngIf=\"import\"></app-csv>\r\n\r\n<ion-slides  (ionSlideDidChange)=\"slideChange($event)\" *ngIf=\"!import\" pager=\"true\"  #add >\r\n  <ion-slide>\r\n   <!--<ion-fab\r\n      style=\"\r\n        background: white;\r\n        border-radius: 24px;\r\n        border: solid;\r\n        border-width: 1px;\r\n        border-color: #01878621;\r\n      \"\r\n      vertical=\"bottom\"\r\n      horizontal=\"end\"\r\n    >\r\n      <ion-label *ngIf=\"!import\">\r\n        <sub> import </sub><br />\r\n        <sub> products </sub>\r\n      </ion-label>\r\n      <ion-fab-button (click)=\"showCSV()\">\r\n        <ion-icon *ngIf=\"!import\" name=\"download-outline\"></ion-icon>\r\n        <ion-icon *ngIf=\"import\" name=\"chevron-back-outline\"></ion-icon>\r\n      </ion-fab-button>\r\n    </ion-fab>-->\r\n\r\n    <!--<form [formGroup]=\"choose_category\" (ngSubmit)=\"onSubmit()\">-->\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col size=\"12\">\r\n          <ion-img\r\n            src=\"./assets/adminProductsProductAddproductSlide1.svg\"\r\n          ></ion-img>\r\n        </ion-col>\r\n        <ion-col *ngIf=\"show_this_selected_categories\" size=\"12\">\r\n          <div\r\n            *ngFor=\"let chip of show_this_selected_categories; let i = index\"\r\n          >\r\n            <ion-chip\r\n              *ngIf=\"show_this_selected_categories\"\r\n              color=\"primary\"\r\n              class=\"ion-float-left\"\r\n            >\r\n              {{ chip }}\r\n              <ion-icon\r\n                (click)=\"clearCategories()\"\r\n                name=\"close-circle-outline\"\r\n              ></ion-icon>\r\n            </ion-chip>\r\n          </div>\r\n        </ion-col>\r\n        <ion-col *ngIf=\"category_view\" size=\"12\">\r\n          <ion-label> Choose a Category </ion-label>\r\n          <div *ngFor=\"let category of categories$ | async\">\r\n            <ion-chip\r\n              class=\"ion-float-left\"\r\n              (click)=\"set('category', category.name)\"\r\n            >\r\n              {{ category.name }}\r\n            </ion-chip>\r\n          </div>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"12\" *ngIf=\"sub_category && sub_category_view\">\r\n          <ion-label> Choose a Sub Category </ion-label>\r\n          <div *ngFor=\"let item of sub_category | keyvalue\">\r\n            <ion-chip\r\n              class=\"ion-float-left\"\r\n              (click)=\"set('sub_category', item.key)\"\r\n            >\r\n              {{ item.key }}\r\n            </ion-chip>\r\n          </div>\r\n        </ion-col>\r\n\r\n        <ion-col\r\n          size=\"12\"\r\n          *ngIf=\"sub_segment_category && sub_segment_category_view\"\r\n        >\r\n          <ion-label> Choose a Category Segment </ion-label>\r\n          <div *ngFor=\"let item of sub_segment_category | keyvalue\">\r\n            <ion-chip\r\n              class=\"ion-float-left\"\r\n              (click)=\"set('sub_segment_category', item.key)\"\r\n            >\r\n              {{ item.key }}\r\n            </ion-chip>\r\n          </div>\r\n        </ion-col>\r\n        <ion-col size=\"12\" *ngIf=\"product_types && product_types_view\">\r\n          <ion-label> Choose a Product Type </ion-label>\r\n          <div *ngFor=\"let item of product_types | keyvalue\">\r\n            <ion-chip\r\n              class=\"ion-float-left\"\r\n              (click)=\"set('product_types', item.key)\"\r\n            >\r\n              {{ item.key }}\r\n            </ion-chip>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n    <!--   </form>-->\r\n  </ion-slide>\r\n\r\n  <ion-slide *ngIf=\"!import\">\r\n    <form [formGroup]=\"createProduct\" (ngSubmit)=\"onSubmit()\">\r\n      <ion-grid>\r\n        <ion-row>\r\n          <!--<ion-col size=\"12\">\r\n            <ion-img src=\"./assets/adminAddProductSlide3.svg\"></ion-img>\r\n          </ion-col>-->\r\n          <ion-col size=\"12\" style=\"padding-bottom: 48px;\">\r\n            <ion-title>\r\n              <h1 style=\"text-align: center\">Product Details</h1>\r\n            </ion-title>\r\n            <ion-text style=\"text-align: center\">\r\n              <sub>\r\n                key in basic information about your product\r\n              </sub>\r\n            </ion-text>\r\n          </ion-col>\r\n\r\n          <ion-col size=\"6\">\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Product Name</ion-label>\r\n              <ion-input\r\n                formControlName=\"productName\"\r\n                position=\"floating\"\r\n              >\r\n            </ion-input>\r\n            <div\r\n            *ngIf=\"\r\n              createProduct.get('productName').invalid &&\r\n              createProduct.get('productName').touched\r\n            \"\r\n          >\r\n            <ion-text\r\n              *ngIf=\"createProduct.get('productName').errors?.required\"\r\n              color=\"danger\"\r\n              ><sub>Product name is required</sub></ion-text\r\n            >\r\n            <ion-text\r\n              *ngIf=\"createProduct.get('productName').errors?.minlength\"\r\n              color=\"danger\"\r\n              ><sub\r\n                >Product name must be at least 2 Characters</sub\r\n              ></ion-text\r\n            >\r\n          </div>\r\n            </ion-item>\r\n          </ion-col>\r\n          <ion-col size=\"6\">\r\n            <ion-item style=\"height: 100%\">\r\n              <ion-label position=\"floating\">Price</ion-label>\r\n              <ion-input\r\n                type=\"number\"\r\n                formControlName=\"productPrice\"\r\n              ></ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n          <ion-col size=\"12\">\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Description</ion-label>\r\n              <ion-textarea style=\"height:20vh\" formControlName=\"productDescription\">\r\n             \r\n              </ion-textarea>\r\n              <div\r\n              *ngIf=\"\r\n                createProduct.get('productDescription').invalid &&\r\n                createProduct.get('productDescription').touched\r\n              \"\r\n            >\r\n              <ion-text\r\n                *ngIf=\"\r\n                  createProduct.get('productDescription').errors?.required\r\n                \"\r\n                color=\"danger\"\r\n                ><sub>Descrption is required</sub></ion-text\r\n              >\r\n              <ion-text\r\n                *ngIf=\"\r\n                  createProduct.get('productDescription').errors?.minlength\r\n                \"\r\n                color=\"danger\"\r\n                ><sub>Descrption must be at least 5 Characters</sub></ion-text\r\n              >\r\n            </div>\r\n            </ion-item>\r\n          </ion-col>\r\n          <ion-col size=\"12\">\r\n            <ion-item>\r\n              <ion-label position=\"floating\"\r\n                >Number Of In-stock Product</ion-label\r\n              >\r\n              <ion-input type=\"number\" formControlName=\"in_stock\"></ion-input>\r\n           \r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </form>\r\n  </ion-slide>\r\n  <ion-slide>\r\n    <form [formGroup]=\"productMetatagsForm\" (ngSubmit)=\"onSubmit()\">\r\n      <ion-grid>\r\n        <ion-row>\r\n         \r\n          <ion-col  style=\"padding-bottom: 48px;\" size=\"12\">\r\n            <ion-title>\r\n              <h1 style=\"text-align: center\">Metatag and inStock</h1>\r\n            </ion-title>\r\n            <ion-text style=\"text-align: center\">\r\n              <sub >\r\n                A Metatag is a keyword that can be associated with your product\r\n              </sub>\r\n            </ion-text>\r\n          </ion-col>\r\n     \r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col size=\"12\">\r\n            <ion-button\r\n              shape=\"round\"\r\n              (click)=\"addMetaTag()\"\r\n              color=\"primary\"\r\n              size=\"small\"\r\n              >Add MetaTag</ion-button\r\n            >\r\n          </ion-col>\r\n          <ion-col size=\"12\">\r\n            <ion-item style=\"padding-bottom: 10vh\">\r\n              <!--metaTag-->\r\n              <div formArrayName=\"metaTags\">\r\n                <div\r\n                  *ngFor=\"\r\n                    let metaTag of metaTagFormGroup.controls;\r\n                    let i = index\r\n                  \"\r\n                >\r\n                  <div [formGroupName]=\"i\">\r\n                    <ion-chip style=\"float: left\">\r\n                      <ion-input\r\n                        formControlName=\"metaTagname\"\r\n                        type=\"text\"\r\n                        placeholder=\"Input MetaTag \"\r\n                      ></ion-input>\r\n                      <ion-text\r\n                        color=\"danger\"\r\n                        *ngIf=\"\r\n                          getMetaTagsFormGroup(i).controls['metaTagname']\r\n                            .touched &&\r\n                          getMetaTagsFormGroup(i).controls[\r\n                            'metaTagname'\r\n                          ].hasError('required')\r\n                        \"\r\n                      >\r\n                        MetaTag is required!\r\n                      </ion-text>\r\n                      <ion-icon\r\n                        (click)=\"removeMetaTag(i)\"\r\n                        name=\"close-circle\"\r\n                      ></ion-icon>\r\n                    </ion-chip>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </form>\r\n  </ion-slide>\r\n\r\n  <ion-slide>\r\n    <form [formGroup]=\"productFeaturesForm\" (ngSubmit)=\"onSubmit()\">\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col size=\"12\">\r\n            <ion-img src=\"./assets/undraw_reviewed_docs_neeb.svg\"></ion-img>\r\n          </ion-col>\r\n          <ion-col  style=\"padding-bottom: 48px;\" size=\"12\">\r\n            <ion-title>\r\n              <h1 style=\"text-align: center\">Product features</h1>\r\n            </ion-title>\r\n            <ion-text style=\"text-align: center\">\r\n              <sub>\r\n                things that describe your products apperance,functionality,\r\n                components and capability\r\n              </sub>\r\n            </ion-text>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col size=\"12\">\r\n            <ion-button\r\n              shape=\"round\"\r\n              (click)=\"addFeature()\"\r\n              color=\"primary\"\r\n              size=\"small\"\r\n              >Add Feature</ion-button\r\n            >\r\n          </ion-col>\r\n          <ion-col size=\"12\">\r\n            <ion-item style=\"padding-bottom: 10vh\">\r\n              <!--metaTag-->\r\n              <div formArrayName=\"features\">\r\n                <div\r\n                  *ngFor=\"\r\n                    let feature of featureFormGroup.controls;\r\n                    let i = index\r\n                  \"\r\n                >\r\n                  <div [formGroupName]=\"i\">\r\n                    <ion-chip style=\"float: left\">\r\n                      <ion-input\r\n                        formControlName=\"featurename\"\r\n                        type=\"text\"\r\n                        placeholder=\"Input Feature \"\r\n                      ></ion-input>\r\n                      <ion-text\r\n                        color=\"danger\"\r\n                        *ngIf=\"\r\n                          getFeaturesFormGroup(i).controls['featurename']\r\n                            .touched &&\r\n                          getFeaturesFormGroup(i).controls[\r\n                            'featurename'\r\n                          ].hasError('required')\r\n                        \"\r\n                      >\r\n                        Feature is required!\r\n                      </ion-text>\r\n                      <ion-icon\r\n                        (click)=\"removeFeature(i)\"\r\n                        name=\"close-circle\"\r\n                      ></ion-icon>\r\n                    </ion-chip>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </form>\r\n  </ion-slide>\r\n\r\n  <ion-slide>\r\n    <form [formGroup]=\"productComponentsForm\" (ngSubmit)=\"onSubmit()\">\r\n      <ion-grid style=\"padding-bottom: 10vh;width: 100vw;\">\r\n        <ion-row *ngIf=\"!bill_type_selected\" >\r\n          <ion-col size=\"12\">\r\n            <ion-img src=\"./assets/adminProductsAddproductsBill.svg\"></ion-img>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row *ngIf=\"addBillOfMaterial\">\r\n          <ion-col size=\"12\">\r\n            <ion-title>\r\n              <h1 style=\"text-align: center\">Bill Of Materials</h1>\r\n            </ion-title>\r\n            <ion-text style=\"text-align: center\">\r\n              <sub>\r\n               \r\n               Are parts,components,or raw material making up and are optional to your\r\n                product.\r\n              </sub>\r\n              <sub>\r\n                A BOM can be an <b>Extra</b>, an optional aditional part like a charger. It can also be a <b> Material Substitude</b> in which a material,component or color replaces the base material. \r\n              </sub>\r\n            </ion-text>\r\n          </ion-col>\r\n          <ion-col size=12>\r\n            <ion-button shape=\"round\"  color=\"secondary\" (click)=\" yesAddBillOfMaterial()\">\r\n                Add Bill Of Material\r\n            </ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row *ngIf=\"!addBillOfMaterial\">\r\n          <ion-col size=\"12\">\r\n            <div *ngFor=\"let chip of bill_of_material; let i = index\">\r\n              <ion-chip class=\"ion-float-left\">\r\n                {{ chip.componentname }}\r\n                <ion-avatar style=\"margin-left: 5px;margin-right: 0px; \">\r\n                  <ion-img src=\"{{ chip.pictures[0].url }}\"> </ion-img>\r\n                </ion-avatar>\r\n                <ion-icon\r\n                  (click)=\"removeComponent(i)\"\r\n                  name=\"close-circle-outline\"\r\n                ></ion-icon>\r\n              </ion-chip>\r\n            </div>\r\n          </ion-col>\r\n\r\n          <ion-col size=\"12\">\r\n            <ion-grid *ngIf=\"!bill_type_selected\">\r\n              <ion-row>\r\n                <ion-col size=12>\r\n                  <ion-title>\r\n                    <h1 style=\"text-align: center\"> Select Bill OF Material Type</h1>\r\n                  </ion-title>\r\n                  <ion-text style=\"text-align: center\">\r\n                    <sub>\r\n                      An <b>Extra</b> is additional to the product and <b>Material Substitute</b> is a material,component or color that substitudes a base or standard material.\r\n                    </sub>\r\n                  </ion-text>\r\n                </ion-col>\r\n                <ion-col size=12>\r\n                    <ion-chip *ngIf=\"!selected_extra\" (click)=\"selected_extra=true ; selectBom('extra')\">\r\n                      Extra Component\r\n                    </ion-chip>\r\n                    \r\n                    <ion-chip *ngIf=\"!material_substitude\" (click)=\"material_substitude = true;selectBom('material')\">\r\n                      Material Substitude\r\n                    </ion-chip>\r\n                 \r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-grid>\r\n            <ion-grid *ngIf=\"bill_type_selected && !component_info_added\">\r\n              <ion-row>\r\n                <ion-col size=12>\r\n                  <ion-title style=\" padding-right: 0px;\" *ngIf=\"selected_extra\" >\r\n                    <h1 class=\"center\" style=\"text-align: center\">  Extra Component  <ion-button (click)=\"selected_extra=false;selectBom('clear')\" fill=\"clear\">\r\n                      <ion-icon name=\"close-circle-outline\"></ion-icon>\r\n                    </ion-button> </h1> \r\n                   \r\n                  </ion-title>\r\n                  <ion-text *ngIf=\"selected_extra\" style=\"text-align: center\">\r\n                    <sub>\r\n                      The price of an extra component is additional to the product price\r\n                    </sub>\r\n                  </ion-text>\r\n                  <ion-title style=\" padding-right: 0px;\" *ngIf=\"material_substitude\" >\r\n                    <h1 class=\"center\" style=\"text-align: center\">  Material Substitude     <ion-button (click)=\"material_substitude = false;selectBom('clear')\" fill=\"clear\">\r\n                      <ion-icon name=\"close-circle-outline\"></ion-icon>\r\n                    </ion-button> </h1>\r\n                \r\n                  </ion-title>\r\n                  <ion-text *ngIf=\"material_substitude\" style=\"text-align: center\">\r\n                    <sub>\r\n                      The price of a material Substitude replaces the price of the base material being replaced\r\n                    </sub>\r\n                  </ion-text>\r\n                </ion-col>\r\n                <ion-col size=\"6\">\r\n                  <ion-item>\r\n                    <ion-label position=\"floating\">\r\n                      <sub>Component Name</sub></ion-label\r\n                    >\r\n                    <ion-input\r\n                      formControlName=\"componentname\"\r\n                      type=\"text\"\r\n                    ></ion-input>\r\n                  </ion-item>\r\n                </ion-col>\r\n                <ion-col *ngIf=\"BOM_type == 'material'\" size=\"5\">\r\n                  <ion-item style=\"--inner-padding-end:0px\">\r\n                    <ion-label position=\"floating\">\r\n                      <sub>Base Material Price </sub></ion-label\r\n                    >\r\n                    <ion-input\r\n                      formControlName=\"base_material_price\"\r\n                      type=\"numeric\"\r\n                    ></ion-input>\r\n                  \r\n                  </ion-item>\r\n                </ion-col>\r\n                <ion-col class=\"center\" size=1>\r\n                  <ion-icon (click)=\"presentAlertMultipleButtons()\" style=\"font-size: 32px; padding-top: 15px;\" name=\"information-circle-outline\">  </ion-icon>\r\n                </ion-col>\r\n             \r\n              </ion-row>\r\n              <ion-row>\r\n                <ion-col size=\"12\">\r\n                  <ion-item>\r\n                    <ion-label position=\"floating\">\r\n                      <sub>Description</sub></ion-label\r\n                    >\r\n                    <ion-textarea formControlName=\"descrip\"></ion-textarea>\r\n                  </ion-item>\r\n                </ion-col>\r\n\r\n               \r\n              </ion-row>\r\n              <ion-row>\r\n                <ion-col size=\"5\">\r\n                  <ion-item>\r\n                    <ion-label position=\"floating\"> <sub>Component Price</sub></ion-label>\r\n                    <ion-input\r\n                      formControlName=\"price\"\r\n                      type=\"numeric\"\r\n                    ></ion-input>\r\n                  </ion-item>\r\n                </ion-col>\r\n                <ion-col size=\"7\">\r\n                  <ion-item style=\"--inner-padding-end:0px\">\r\n                    <ion-label position=\"floating\">\r\n                      <sub>Unit of measure e.g: kg</sub></ion-label\r\n                    >\r\n                    <ion-input\r\n                      formControlName=\"unit_of_measure\"\r\n                      type=\"text\"\r\n                    ></ion-input>\r\n                  </ion-item>\r\n                </ion-col>\r\n                <ion-col size=\"12\">\r\n                  <ion-button color=\"secondary\" shape=\"round\" (click)=\"component_info_added = true\" [disabled]=\"\">\r\n                    Continue\r\n                  </ion-button>\r\n                \r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-grid>\r\n            <ion-grid *ngIf=\"component_info_added\">\r\n              <ion-row>\r\n                <ion-col *ngIf=\"bill_type_selected\" size=12>\r\n              \r\n                    <ion-title style=\"padding-right: 0px;padding-left: 0px;\">\r\n                      <h1 class=\"center\" style=\"text-align: center\"> Picture of Component <ion-button (click)=\"component_info_added= false\" fill=\"clear\">\r\n                        <ion-icon name=\"close-circle-outline\"></ion-icon></ion-button></h1>\r\n                    </ion-title>\r\n                    <ion-text style=\"text-align: center\">\r\n                      <sub> \r\n                        Product picture that includes the component\r\n                      </sub>\r\n                    </ion-text>\r\n               \r\n                </ion-col>\r\n                <ion-col *ngIf=\"  !croppedImage && bill_type_selected\" size=\"12\">\r\n                  <div *ngFor=\"let pic of component_picture_uploaded\">\r\n                  \r\n                      <ion-avatar\r\n                        style=\"  border: groove; width: 30vw;\r\n                        height: 30vw;\r\n                        display: inline-block;\r\n                        float: left; \"\r\n                        (click)=\"removePic(pic);\"\r\n                      >\r\n                      <ion-fab *ngIf=\"pic == pic_remove\">\r\n                        <ion-fab-button\r\n                        size=\"small\"\r\n                          color=\"light\"\r\n                          (click)=\"clearOneComponent(pic)\">\r\n                          <ion-icon color=\"danger\"  name=\"close\" ></ion-icon>\r\n                        </ion-fab-button>\r\n                      </ion-fab>\r\n                       \r\n    \r\n                     <ion-img src=\"{{ pic }}\"> </ion-img>\r\n                         \r\n                      </ion-avatar>\r\n                    \r\n                  </div>\r\n                </ion-col>\r\n                <ion-col *ngIf=\"small\" size=12 >\r\n                  <image-cropper\r\n                  [imageBase64]=\"myImage\"\r\n                  [imageChangedEvent]=\"imageChangedEvent\"\r\n                  [maintainAspectRatio]=\"true\"\r\n                  [aspectRatio]=\"1/1.56\"\r\n                  style=\"max-height: 55vh;max-width: 100vw;\"\r\n    \r\n                  format=\"png\"\r\n                  (imageCropped)=\"imageCropped($event)\"\r\n                  outputType=\"base64\"\r\n           \r\n                ></image-cropper>\r\n                </ion-col>\r\n                \r\n                <ion-col *ngIf=\"!small\" size=12 >\r\n                  <image-cropper\r\n                  [imageBase64]=\"myImage\"\r\n                  [imageChangedEvent]=\"imageChangedEvent\"\r\n                  [maintainAspectRatio]=\"true\"\r\n                  [aspectRatio]=\"1/1\"\r\n              \r\n                  style=\"max-height: 55vh;max-width: 100vw;\"\r\n                  format=\"png\"\r\n                  (imageCropped)=\"imageCropped($event)\"\r\n                  outputType=\"base64\"\r\n           \r\n                ></image-cropper>\r\n                </ion-col>\r\n                <ion-col *ngIf=\"croppedImage\" size=12>\r\n                  <ion-grid>\r\n                    <ion-row>\r\n                      <ion-col class=\"center\" size=6>\r\n                       <div style=\"width:30%;border-radius: 10px;\" [class]=\"defaultR\" (click)=\"aspectSelect('large')\">\r\n                        <ion-img style=\"height: 10vh;\" src=\"./assets/aspecRatio1156.svg\">\r\n\r\n                        </ion-img>\r\n                       </div>\r\n                         \r\n                       \r\n                      </ion-col>\r\n                      <ion-col class=\"center\" size=6>\r\n                      <div style=\"width:45%;border-radius: 10px;\" [class]=\"oneone\" (click)=\"aspectSelect('small')\" >\r\n                        <ion-img style=\"height: 10vh;\"  src=\"./assets/aspectRatio11.svg\">\r\n\r\n                        </ion-img>\r\n                      </div>\r\n                       \r\n                        \r\n                      </ion-col>\r\n                    </ion-row>\r\n                  </ion-grid>\r\n              </ion-col>\r\n              <ion-col  *ngIf=\"croppedImage\" size = 12>\r\n                <ion-toolbar>\r\n                  \r\n                  <ion-button  fill=\"clear\" color=\"danger\" (click)=\"clearImage()\">\r\n                    <ion-icon name=\"close\" slot=\"icon-only\"></ion-icon>\r\n                  </ion-button>\r\n                  <ion-button\r\n                    fill=\"clear\"\r\n                    color=\"primary\"\r\n                    (click)=\" saveComponentCropper()\"\r\n                  >\r\n                    <ion-icon name=\"checkmark\" slot=\"icon-only\"></ion-icon>\r\n                  </ion-button>\r\n                </ion-toolbar>\r\n              </ion-col>\r\n                <ion-col class=\"center\" size=12>\r\n                  <ion-button color=\"light\" *ngIf=\"!android_platform && !croppedImage && bill_type_selected\">\r\n                    <sub style=\"position: absolute; top: 50%\"> Choose a pic </sub>\r\n      \r\n                    <ion-input\r\n                      #myfile\r\n                      style=\"opacity: 0\"\r\n                      type=\"file\"\r\n                      multiple\r\n                      (change)=\" handleComponentFileInput($event)\"\r\n                    ></ion-input>\r\n                  </ion-button>\r\n               <ion-button\r\n                    color=\"primary\"\r\n                    (click)=\"selectImage()\"\r\n                    *ngIf=\"android_platform && !croppedImage && bill_type_selected\"\r\n                  >\r\n                    Select an image\r\n                  </ion-button>\r\n                </ion-col>\r\n                <ion-col size=\"12\">\r\n                  <ion-button *ngIf=\"!croppedImage && component_picture_uploaded && bill_type_selected\" color=\"secondary\" shape=\"round\" (click)=\"bill_type_selected=false;addComponent();selectBom('clear');component_info_added = false\" [disabled]=\"\">\r\n                    Add Component\r\n                  </ion-button>\r\n                </ion-col>\r\n              </ion-row>\r\n\r\n            </ion-grid>\r\n          </ion-col>\r\n          \r\n        </ion-row>\r\n \r\n         \r\n       \r\n      </ion-grid>\r\n    </form>\r\n  </ion-slide>\r\n\r\n  <ion-slide *ngIf=\"!import\">\r\n    <ion-grid>\r\n      <ion-row>\r\n        \r\n   \r\n            <ion-title *ngIf=\"!croppedImage\">\r\n              <ion-title>\r\n                <h1 style=\"text-align: center\">Upload Product pictures</h1>\r\n              </ion-title>\r\n              <ion-text style=\"text-align: center\">\r\n                <sub> the first pic is the main product picture </sub>\r\n              </ion-text>\r\n            </ion-title>\r\n        \r\n    \r\n            <ion-col *ngIf=\"  !croppedImage\" size=\"12\">\r\n              <div *ngFor=\"let pic of picture_uploaded\">\r\n              \r\n                  <ion-avatar\r\n                    style=\"  border: groove; width: 30vw;\r\n                    height: 30vw;\r\n                    display: inline-block;\r\n                    float: left; \"\r\n                    (click)=\"removePic(pic);\"\r\n                  >\r\n                  <ion-fab *ngIf=\"pic == pic_remove\">\r\n                    <ion-fab-button\r\n                    size=\"small\"\r\n                      color=\"light\"\r\n                      (click)=\"clearOne(pic)\">\r\n                      <ion-icon color=\"danger\"  name=\"close\" ></ion-icon>\r\n                    </ion-fab-button>\r\n                  </ion-fab>\r\n                   \r\n\r\n                 <ion-img src=\"{{ pic }}\"> </ion-img>\r\n                     \r\n                  </ion-avatar>\r\n                \r\n              </div>\r\n            </ion-col>\r\n            <ion-col class=\"center\" size=12>\r\n              <ion-button color=\"light\" *ngIf=\"  !croppedImage && !android_platform  \">\r\n                <sub style=\"position: absolute; top: 50%\"> Choose a pic </sub>\r\n  \r\n                <ion-input\r\n                  #myfile\r\n                  style=\"opacity: 0\"\r\n                  type=\"file\"\r\n                  multiple\r\n                  (change)=\"handleFileInput($event)\"\r\n                ></ion-input>\r\n              </ion-button>\r\n          <ion-button\r\n                color=\"primary\"\r\n                (click)=\"selectImage()\"\r\n                *ngIf=\"android_platform && !croppedImage\"\r\n              >\r\n                Select an image\r\n              </ion-button>\r\n            </ion-col>\r\n          \r\n\r\n        \r\n            <ion-col *ngIf=\"small\" size=12 >\r\n              <image-cropper\r\n              [imageBase64]=\"myImage\"\r\n              [imageChangedEvent]=\"imageChangedEvent\"\r\n              [maintainAspectRatio]=\"true\"\r\n              [aspectRatio]=\"1/1.56\"\r\n              style=\"max-height: 55vh;max-width: 100vw;\"\r\n\r\n              format=\"png\"\r\n              (imageCropped)=\"imageCropped($event)\"\r\n              outputType=\"base64\"\r\n       \r\n            ></image-cropper>\r\n            </ion-col>\r\n            \r\n            <ion-col *ngIf=\"!small\" size=12 >\r\n              <image-cropper\r\n              [imageBase64]=\"myImage\"\r\n              [imageChangedEvent]=\"imageChangedEvent\"\r\n              [maintainAspectRatio]=\"true\"\r\n              [aspectRatio]=\"1/1\"\r\n          \r\n              style=\"max-height: 55vh;max-width: 100vw;\"\r\n              format=\"png\"\r\n              (imageCropped)=\"imageCropped($event)\"\r\n              outputType=\"base64\"\r\n       \r\n            ></image-cropper>\r\n            </ion-col>\r\n           <!--  <ion-card-content>\r\n              <img [src]=\"croppedImage\" />\r\n              </ion-card-content>--> \r\n             <ion-col *ngIf=\"croppedImage\" size=12>\r\n                  <ion-grid>\r\n                    <ion-row>\r\n                      <ion-col class=\"center\" size=6>\r\n                       <div style=\"width:30%;border-radius: 10px;\" [class]=\"defaultR\" (click)=\"aspectSelect('large')\">\r\n                        <ion-img style=\"height: 10vh;\" src=\"./assets/aspecRatio1156.svg\">\r\n\r\n                        </ion-img>\r\n                       </div>\r\n                         \r\n                       \r\n                      </ion-col>\r\n                      <ion-col class=\"center\" size=6>\r\n                      <div style=\"width:45%;border-radius: 10px;\" [class]=\"oneone\" (click)=\"aspectSelect('small')\" >\r\n                        <ion-img style=\"height: 10vh;\"  src=\"./assets/aspectRatio11.svg\">\r\n\r\n                        </ion-img>\r\n                      </div>\r\n                       \r\n                        \r\n                      </ion-col>\r\n                    </ion-row>\r\n                  </ion-grid>\r\n              </ion-col>\r\n            <ion-col  *ngIf=\"croppedImage\" size = 12>\r\n              <ion-toolbar>\r\n                \r\n                <ion-button  fill=\"clear\" color=\"danger\" (click)=\"clearImage()\">\r\n                  <ion-icon name=\"close\" slot=\"icon-only\"></ion-icon>\r\n                </ion-button>\r\n                <ion-button\r\n                  fill=\"clear\"\r\n                  color=\"primary\"\r\n                  (click)=\"saveCropper()\"\r\n                >\r\n                  <ion-icon name=\"checkmark\" slot=\"icon-only\"></ion-icon>\r\n                </ion-button>\r\n              </ion-toolbar>\r\n            </ion-col>\r\n\r\n            <ion-col   *ngIf=\"!croppedImage\" size=\"12\">\r\n              <ion-button\r\n              *ngIf=\"!done\"\r\n                size=\"small\"\r\n                shape=\"round\"\r\n                expand=\"full\"\r\n                type=\"submit\"\r\n                color=\"primary\"\r\n                (click)=\"onSubmit()\"\r\n                >Save Images\r\n              </ion-button>\r\n              <ion-button\r\n              *ngIf=\"done\"\r\n                size=\"small\"\r\n                shape=\"round\"\r\n                color=\"primary\"\r\n                (click)=\"pushToDatabase()\"\r\n                >Publish Product\r\n              </ion-button>\r\n            </ion-col>\r\n   \r\n      \r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-slide>\r\n</ion-slides>\r\n\r\n<ion-fab *ngIf=\"showNext \" vertical=\"bottom\" horizontal=\"end\">\r\n  <ion-button\r\n    shape=\"round\"\r\n    class=\"ion-padding-end\"\r\n    style=\"color: #000000\"\r\n    size=\"small\"\r\n    color=\"white\"\r\n    (click)=\"next()\"\r\n  >\r\n    next\r\n  </ion-button>\r\n</ion-fab>\r\n\r\n<ion-fab *ngIf=\"showBack \" horizontal=\"start\" vertical=\"bottom\">\r\n  <ion-button\r\n    shape=\"round\"\r\n    class=\"ion-padding-start\"\r\n    style=\"color: #000000\"\r\n    size=\"small\"\r\n    color=\"white\"\r\n    (click)=\" slidesBack()\"\r\n  >\r\n    back\r\n  </ion-button>\r\n</ion-fab>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin-store/pages/products/components/products/images/images.component.html":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin-store/pages/products/components/products/images/images.component.html ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"choose_category\" (ngSubmit)=\"onSubmit()\">\n  <ion-grid>\n   <ion-row>\n\n     <ion-col size=12>\n        <ion-button>Upload</ion-button>\n     </ion-col>\n\n     <ion-col size=12>\n        <ion-input type=\"file\"></ion-input>\n     </ion-col>\n\n   </ion-row>\n  </ion-grid>\n</form>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin-store/pages/products/components/products/products.component.html":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin-store/pages/products/components/products/products.component.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"no_product\">\r\n  <ion-grid>\r\n    <ion-row style=\"height: 70vh\" class=\"center\">\r\n      <ion-col size=\"12\">\r\n        <ion-label> No Products </ion-label>\r\n      </ion-col>\r\n      <ion-col size=\"12\">\r\n        <ion-button (click)=\"sendToParent()\" shape=\"round\"\r\n          >Add A product <ion-icon name=\"add-circle-outline\"></ion-icon\r\n        ></ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</div>\r\n<div *ngIf=\"!no_product\">\r\n  <mat-accordion>\r\n    <ion-toolbar>\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col class=\"center\" size=\"4.8\"> </ion-col>\r\n          <ion-col class=\"center\" size=\"2\"> </ion-col>\r\n          <ion-col class=\"center\" size=\"1.4\"> </ion-col>\r\n          <ion-col class=\"center\" size=\"1.3\"> </ion-col>\r\n          <ion-col class=\"center\" size=\"2.5\">\r\n            <ion-label><sub style=\"text-align: left\">PRICE</sub></ion-label>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-toolbar>\r\n    <ion-scroll scrollY=\"true\">\r\n      <mat-expansion-panel\r\n        (click)=\"expanded(product)\"\r\n        [disabled]=\"clickButton\"\r\n        (click)=\"clickButton = false\"\r\n        hideToggle\r\n        *ngFor=\"let product of products$ | async; let i = index\"\r\n      >\r\n        <mat-expansion-panel-header\r\n          [collapsedHeight]=\"'12vh'\"\r\n          style=\"padding: 0px\"\r\n        >\r\n          <ion-item-sliding>\r\n            <ion-item style=\"--inner-padding-end: 0px\">\r\n              <ion-grid>\r\n                <ion-row>\r\n                  <ion-col class=\"center\" size=\"2\">\r\n                    <ion-avatar style=\"height: 13vw; width: auto\">\r\n                      <img src=\"{{ product.productImage[0].url }}\" />\r\n                    </ion-avatar>\r\n                  </ion-col>\r\n                  <ion-col class=\"center\" size=\"7\">\r\n                    <ion-label\r\n                      #name\r\n                      style=\"text-align: center\"\r\n                      value=\"product.productName\"\r\n                      ><sub>{{ product.productName }}</sub></ion-label\r\n                    >\r\n                  </ion-col>\r\n                  <ion-col class=\"center\" size=\"3\">\r\n                    <ion-label #price\r\n                      ><sub\r\n                        >{{ product.productPrice | currency: \"R\" }}\r\n                      </sub></ion-label\r\n                    >\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-grid>\r\n            </ion-item>\r\n\r\n            <ion-item-options>\r\n              <ion-item-option color=\"light\">\r\n                <ion-button\r\n                  *ngIf=\"!edit\"\r\n                  shape=\"round\"\r\n                  fill=\"solid\"\r\n                  (click)=\"editProduct()\"\r\n                  size=\"small\"\r\n                  color=\"primary\"\r\n                >\r\n                  <ion-icon\r\n                    size=\"small\"\r\n                    slot=\"icon-only\"\r\n                    name=\"create\"\r\n                  ></ion-icon>\r\n                </ion-button>\r\n                <ion-button\r\n                  *ngIf=\"edit\"\r\n                  [disabled]=\"updateProduct.invalid\"\r\n                  shape=\"round\"\r\n                  type=\"submit\"\r\n                  fill=\"solid\"\r\n                  (click)=\"update()\"\r\n                  size=\"small\"\r\n                  color=\"primary\"\r\n                >\r\n                  <ion-icon\r\n                    size=\"small\"\r\n                    slot=\"icon-only\"\r\n                    name=\"save-outline\"\r\n                  ></ion-icon>\r\n                </ion-button>\r\n              </ion-item-option>\r\n              <ion-item-option color=\"light\">\r\n                <ion-button\r\n                  shape=\"round\"\r\n                  (click)=\"onDeleteProduct(product)\"\r\n                  size=\"small\"\r\n                  color=\"danger\"\r\n                >\r\n                  <ion-icon\r\n                    fill=\"solid\"\r\n                    size=\"small\"\r\n                    slot=\"icon-only\"\r\n                    name=\"trash\"\r\n                  ></ion-icon>\r\n                </ion-button>\r\n              </ion-item-option>\r\n            </ion-item-options>\r\n          </ion-item-sliding>\r\n        </mat-expansion-panel-header>\r\n\r\n        <div matExpansionPanelContent>\r\n          <form [formGroup]=\"updateProduct\">\r\n            <ion-grid>\r\n              <ion-row>\r\n                <ion-col size=\"8\">\r\n                  <ion-item>\r\n                    <ion-label position=\"floating\">Product Name:</ion-label>\r\n                    <ion-input\r\n                      formControlName=\"productName\"\r\n                      [attr.disabled]=\"!edit\"\r\n                      value=\"{{ product.productName }}\"\r\n                      position=\"floating\"\r\n                    >\r\n                    </ion-input>\r\n                    <div\r\n                      *ngIf=\"\r\n                        updateProduct.get('productName').invalid &&\r\n                        updateProduct.get('productName').touched\r\n                      \"\r\n                    >\r\n                      <ion-text\r\n                        *ngIf=\"\r\n                          updateProduct.get('productName').errors?.required\r\n                        \"\r\n                        color=\"danger\"\r\n                        ><sub>Product name is required</sub></ion-text\r\n                      >\r\n                      <ion-text\r\n                        *ngIf=\"\r\n                          updateProduct.get('productName').errors?.minlength\r\n                        \"\r\n                        color=\"danger\"\r\n                        ><sub\r\n                          >Product name must be at least 2 Characters</sub\r\n                        ></ion-text\r\n                      >\r\n                    </div>\r\n                  </ion-item>\r\n                </ion-col>\r\n                <ion-col size=\"4\">\r\n                  <ion-item>\r\n                    <ion-label position=\"floating\">Price</ion-label>\r\n                    <ion-input\r\n                      formControlName=\"productPrice\"\r\n                      [attr.disabled]=\"!edit\"\r\n                      value=\"{{ product.productPrice }}\"\r\n                    ></ion-input>\r\n                  </ion-item>\r\n                </ion-col>\r\n\r\n                <ion-col size=\"12\" class=\"center\">\r\n                  <ion-item>\r\n                    <ion-label position=\"floating\">Description</ion-label>\r\n                    <!--todo: enable edit inputs-->\r\n                    <ion-textarea\r\n                      style=\"font-size: 12px\"\r\n                      formControlName=\"productDescription\"\r\n                      value=\"{{ product.productDescription }}\"\r\n                      [attr.disabled]=\"!edit\"\r\n                      type=\"text\"\r\n                    ></ion-textarea>\r\n                    <div\r\n                      *ngIf=\"\r\n                        updateProduct.get('productDescription').invalid &&\r\n                        updateProduct.get('productDescription').touched\r\n                      \"\r\n                    >\r\n                      <ion-text\r\n                        *ngIf=\"\r\n                          updateProduct.get('productDescription').errors\r\n                            ?.required\r\n                        \"\r\n                        color=\"danger\"\r\n                        ><sub>Description is required</sub></ion-text\r\n                      >\r\n                      <ion-text\r\n                        *ngIf=\"\r\n                          updateProduct.get('productDescription').errors\r\n                            ?.minlength\r\n                        \"\r\n                        color=\"danger\"\r\n                        ><sub\r\n                          >Description must be at least 5 Characters</sub\r\n                        ></ion-text\r\n                      >\r\n                    </div>\r\n                  </ion-item>\r\n                </ion-col>\r\n              </ion-row>\r\n              <ion-row>\r\n                <ion-col class=\"center\" size=\"12\">\r\n                  <ion-row>\r\n                    <ion-col size=\"12\">\r\n                      <ion-label position=\"floating\">category</ion-label>\r\n                      <ion-select\r\n                        formControlName=\"selectCategory\"\r\n                        [attr.disabled]=\"!edit\"\r\n                        value=\"{{ product.category }}\"\r\n                      >\r\n                        <ion-item\r\n                          class=\"\"\r\n                          *ngFor=\"\r\n                            let category of categories$ | async;\r\n                            let i = index\r\n                          \"\r\n                        >\r\n                          <ion-select-option\r\n                            value=\"{{ category.categoryName }}\"\r\n                            >{{ category.categoryName }}</ion-select-option\r\n                          >\r\n                        </ion-item>\r\n                      </ion-select>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </ion-col>\r\n              </ion-row>\r\n              <ion-row>\r\n                <ion-col\r\n                  class=\"center\"\r\n                  style=\"background-color: #f1f3f6\"\r\n                  size=\"12\"\r\n                >\r\n                  <!--<ion-grid>\r\n                    <ion-row>\r\n                      <ion-col size=\"12\">\r\n                     \r\n\r\n                        <ion-item >\r\n                        <div *ngFor=\"let image of product.productImage\">\r\n                          <ion-avatar  style=\"height: 13vw; width: auto;\">\r\n                            <img src=\"{{ image.url }}\" >\r\n                          </ion-avatar>\r\n                        </div>\r\n                        </ion-item>\r\n\r\n\r\n                      </ion-col>\r\n                      <ion-col size=\"12\">\r\n                        <ion-button\r\n                          size=\"small\"\r\n                          shape=\"round\"\r\n                          (click)=\"uploadImage()\"\r\n                          ><sub>Upload Image</sub>\r\n                          <ion-input\r\n                          style=\"z-index: 10;\r\n                          position: absolute;\r\n                          width: 101px;\r\n                          opacity: 0;\"\r\n                          [attr.disabled]=\"!edit\"\r\n                          type=\"file\"\r\n                          multiple\r\n                          (change)=\"handleFileInput($event)\"\r\n                        ></ion-input>\r\n\r\n                          </ion-button\r\n                        >\r\n                      </ion-col>\r\n                    </ion-row>\r\n                  </ion-grid>-->\r\n                  <div *ngFor=\"let image of product.productImage\">\r\n                    <ion-avatar\r\n                      style=\"\r\n                        border: groove;\r\n                        width: 30vw;\r\n                        height: 30vw;\r\n                        display: inline-block;\r\n                        float: left;\r\n                      \"\r\n                    >\r\n                      <ion-img\r\n                        (click)=\"viewImageOptions(image, product)\"\r\n                        picture_uploaded\r\n                        src=\"{{ image.url }}\"\r\n                      >\r\n                      </ion-img>\r\n                    </ion-avatar>\r\n                  </div>\r\n                </ion-col>\r\n              </ion-row>\r\n              <ion-row>\r\n                <ion-col class=\"center\" size=\"12\">\r\n                  <div *ngFor=\"let metaTag of product.metaTags\">\r\n                    <ion-chip>\r\n                      <ion-label>{{ metaTag.metaTagname }}</ion-label>\r\n                      <ion-icon name=\"close-circle\"></ion-icon>\r\n                    </ion-chip>\r\n                  </div>\r\n                  <ion-chip>\r\n                    <ion-icon (click)=\"addMetaTag()\" name=\"add-circle-outline\">\r\n                      <!--TODO: Add metatag-->\r\n                    </ion-icon>\r\n                  </ion-chip>\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-grid>\r\n          </form>\r\n        </div>\r\n      </mat-expansion-panel>\r\n    </ion-scroll>\r\n  </mat-accordion>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin-store/pages/products/modals/product-view-modal/product-view-modal.component.html":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin-store/pages/products/modals/product-view-modal/product-view-modal.component.html ***!
  \******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  product-view-modal works!\n</p>\n");

/***/ }),

/***/ "./src/app/modules/admin-store/pages/products/components/category/category.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/admin-store/pages/products/components/category/category.component.scss ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-item {\n  --background:white;\n  --border-radius:2px;\n  top: 5px;\n  height: 70%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hZG1pbi1zdG9yZS9wYWdlcy9wcm9kdWN0cy9jb21wb25lbnRzL2NhdGVnb3J5L0M6XFxVc2Vyc1xcTWFydmluXFxEb2N1bWVudHNcXEdpdEh1YlxcYWZyb2JcXGNsaWVudC9zcmNcXGFwcFxcbW9kdWxlc1xcYWRtaW4tc3RvcmVcXHBhZ2VzXFxwcm9kdWN0c1xcY29tcG9uZW50c1xcY2F0ZWdvcnlcXGNhdGVnb3J5LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2FkbWluLXN0b3JlL3BhZ2VzL3Byb2R1Y3RzL2NvbXBvbmVudHMvY2F0ZWdvcnkvY2F0ZWdvcnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4tc3RvcmUvcGFnZXMvcHJvZHVjdHMvY29tcG9uZW50cy9jYXRlZ29yeS9jYXRlZ29yeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pdGVte1xuICAgIC0tYmFja2dyb3VuZDp3aGl0ZTtcbiAgICAtLWJvcmRlci1yYWRpdXM6MnB4O1xuICAgIHRvcDogNXB4O1xuICAgIGhlaWdodDo3MCU7XG59IiwiaW9uLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6d2hpdGU7XG4gIC0tYm9yZGVyLXJhZGl1czoycHg7XG4gIHRvcDogNXB4O1xuICBoZWlnaHQ6IDcwJTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/admin-store/pages/products/components/category/category.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/admin-store/pages/products/components/category/category.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: CategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryComponent", function() { return CategoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var src_app_core_modules_services_categories_category_facade_category_facade_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core-modules/services/categories/category-facade/category-facade.service */ "./src/app/core-modules/services/categories/category-facade/category-facade.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var ngx_papaparse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-papaparse */ "./node_modules/ngx-papaparse/__ivy_ngcc__/fesm5/ngx-papaparse.js");





var CategoryComponent = /** @class */ (function () {
    function CategoryComponent(categoryFacade, loadingController, papa) {
        this.categoryFacade = categoryFacade;
        this.loadingController = loadingController;
        this.papa = papa;
        this.shareCategory = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        //categories load
        this.jsonData = [];
        this.csvData = [];
        this.headerRow = [];
        this.uploaded = false;
    }
    CategoryComponent.prototype.ngOnInit = function () {
        //getCategories
        this.categories$ = this.categoryFacade.getCategories$();
    };
    CategoryComponent.prototype.presentLoading = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var loading, _a, role, data;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: "Please wait...",
                            duration: 500,
                        })];
                    case 1:
                        loading = _b.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _b.sent();
                        return [4 /*yield*/, loading.onDidDismiss()];
                    case 3:
                        _a = _b.sent(), role = _a.role, data = _a.data;
                        return [2 /*return*/];
                }
            });
        });
    };
    CategoryComponent.ctorParameters = function () { return [
        { type: src_app_core_modules_services_categories_category_facade_category_facade_service__WEBPACK_IMPORTED_MODULE_2__["CategoryFacadeService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
        { type: ngx_papaparse__WEBPACK_IMPORTED_MODULE_4__["Papa"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], CategoryComponent.prototype, "shareCategory", void 0);
    CategoryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-category-comp",
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./category.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin-store/pages/products/components/category/category.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./category.component.scss */ "./src/app/modules/admin-store/pages/products/components/category/category.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_core_modules_services_categories_category_facade_category_facade_service__WEBPACK_IMPORTED_MODULE_2__["CategoryFacadeService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            ngx_papaparse__WEBPACK_IMPORTED_MODULE_4__["Papa"]])
    ], CategoryComponent);
    return CategoryComponent;
}());



/***/ }),

/***/ "./src/app/modules/admin-store/pages/products/components/csv/csv.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/admin-store/pages/products/components/csv/csv.component.scss ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4tc3RvcmUvcGFnZXMvcHJvZHVjdHMvY29tcG9uZW50cy9jc3YvY3N2LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/admin-store/pages/products/components/csv/csv.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/modules/admin-store/pages/products/components/csv/csv.component.ts ***!
  \************************************************************************************/
/*! exports provided: CsvComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CsvComponent", function() { return CsvComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var ngx_papaparse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-papaparse */ "./node_modules/ngx-papaparse/__ivy_ngcc__/fesm5/ngx-papaparse.js");
/* harmony import */ var src_app_core_modules_services_products_product_api_product_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core-modules/services/products/product-api/product-api.service */ "./src/app/core-modules/services/products/product-api/product-api.service.ts");
/* harmony import */ var src_app_core_modules_services_profile_profile_facade_profile_facade_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core-modules/services/profile/profile-facade/profile-facade.service */ "./src/app/core-modules/services/profile/profile-facade/profile-facade.service.ts");




//import { File } from '@ionic-native/file/ngx';


var CsvComponent = /** @class */ (function () {
    function CsvComponent(http, papa, 
    //private file: File,
    productApi, userFacade) {
        this.http = http;
        this.papa = papa;
        this.productApi = productApi;
        this.userFacade = userFacade;
        this.jsonData = [];
        this.csvData = [];
        this.headerRow = [];
        this.uploaded = false;
        this.allowed = false;
    }
    CsvComponent.prototype.ngOnInit = function () {
    };
    CsvComponent.prototype.handleFileInput = function (event) {
        this.uploaded = true;
        var file = event.target.files[0];
        this.extractData(file);
    };
    CsvComponent.prototype.extractData = function (data) {
        var _this = this;
        var csvData = data || "";
        this.papa.parse(csvData, {
            complete: function (parseData) {
                _this.headerRow = parseData.data.splice(0, 1)[0];
                _this.csvData = parseData.data;
            },
        });
    };
    CsvComponent.prototype.saveProducts = function () {
        var store = this.userFacade.getCurrentStore();
        this.productApi
            .createBulkProducts({ csv: this.csvData, store_id: store._id })
            .subscribe(function (res) { return console.log(res); }, function (err) { return console.log(err); });
    };
    CsvComponent.prototype.loadProducts = function () {
        var _this = this;
        var store = this.userFacade.getCurrentStore();
        this.productApi.getStoreProductsById(store._id).subscribe(function (res) {
            _this.jsonData = res.products;
            if (_this.jsonData) {
                _this.ProductReady = true;
                _this.headerRow = Object.keys(_this.jsonData[0]);
            }
        }, function (err) { return console.log(err); });
    };
    CsvComponent.prototype.exportCSV = function () {
        if (this.allowed) {
            var csv = this.papa.unparse({
                fields: this.headerRow,
                data: this.jsonData,
            });
            // desktop download
            var blob = new Blob([csv]);
            var a = window.document.createElement("a");
            a.href = window.URL.createObjectURL(blob);
            a.download = "Cartalist_products.csv";
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        }
        else {
            console.log("buy lisence");
        }
    };
    CsvComponent.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: ngx_papaparse__WEBPACK_IMPORTED_MODULE_3__["Papa"] },
        { type: src_app_core_modules_services_products_product_api_product_api_service__WEBPACK_IMPORTED_MODULE_4__["ProductApiService"] },
        { type: src_app_core_modules_services_profile_profile_facade_profile_facade_service__WEBPACK_IMPORTED_MODULE_5__["UserFacadeService"] }
    ]; };
    CsvComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-csv",
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./csv.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin-store/pages/products/components/csv/csv.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./csv.component.scss */ "./src/app/modules/admin-store/pages/products/components/csv/csv.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            ngx_papaparse__WEBPACK_IMPORTED_MODULE_3__["Papa"],
            src_app_core_modules_services_products_product_api_product_api_service__WEBPACK_IMPORTED_MODULE_4__["ProductApiService"],
            src_app_core_modules_services_profile_profile_facade_profile_facade_service__WEBPACK_IMPORTED_MODULE_5__["UserFacadeService"]])
    ], CsvComponent);
    return CsvComponent;
}());



/***/ }),

/***/ "./src/app/modules/admin-store/pages/products/components/inventory/inventory.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/admin-store/pages/products/components/inventory/inventory.component.scss ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4tc3RvcmUvcGFnZXMvcHJvZHVjdHMvY29tcG9uZW50cy9pbnZlbnRvcnkvaW52ZW50b3J5LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/admin-store/pages/products/components/inventory/inventory.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/admin-store/pages/products/components/inventory/inventory.component.ts ***!
  \************************************************************************************************/
/*! exports provided: InventoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryComponent", function() { return InventoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var src_app_core_modules_services_products_product_facade_product_facade_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core-modules/services/products/product-facade/product-facade.service */ "./src/app/core-modules/services/products/product-facade/product-facade.service.ts");
/* harmony import */ var src_app_core_modules_services_categories_category_facade_category_facade_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core-modules/services/categories/category-facade/category-facade.service */ "./src/app/core-modules/services/categories/category-facade/category-facade.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var src_app_core_modules_services_profile_profile_facade_profile_facade_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core-modules/services/profile/profile-facade/profile-facade.service */ "./src/app/core-modules/services/profile/profile-facade/profile-facade.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");








var InventoryComponent = /** @class */ (function () {
    function InventoryComponent(userFacade, productFacade, categoryFacade, loadingController, formBuilder) {
        this.userFacade = userFacade;
        this.productFacade = productFacade;
        this.categoryFacade = categoryFacade;
        this.loadingController = loadingController;
        this.formBuilder = formBuilder;
        this.shareProduct = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.segment = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    InventoryComponent.prototype.ngOnChanges = function (changes) {
        this.products$ = this.inventory_products.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["distinctUntilChanged"])());
    };
    InventoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        //getCategories
        this.categories$ = this.categoryFacade.getCategories$();
        //getproducts
        setTimeout(function () {
            _this.products$.subscribe(function (res) {
                if (res == []) {
                    if (res == undefined || res.length < 1) {
                        _this.no_product = true;
                    }
                }
            }, function (err) {
                console.log(err);
            });
        }, 5000);
        //form
        this.updateProduct = this.formBuilder.group({
            product_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            production_status: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            next_available_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            productName: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            selectCategory: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            productDescription: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            productImage: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            metaTags: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            productPrice: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            in_stock: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            sold: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
        });
    };
    InventoryComponent.prototype.ngAfterViewInit = function () { };
    InventoryComponent.prototype.expanded = function (p) {
        var product = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, p);
        console.log(product);
        // Patch the values to html
        if (this.id == product._id) {
            return null;
        }
        else {
            this.id = product._id;
            this.updateProduct.patchValue({
                product_id: product._id,
                productName: product.productName,
                selectCategory: product.category,
                productDescription: product.productDescription,
                productImage: product.productImage,
                metaTags: product.metaTags,
                productPrice: product.productPrice,
                production_status: product.production_status,
                next_available_date: product.next_available_date,
                in_stock: product.in_stock,
                sold: product.sold,
            });
        }
    };
    InventoryComponent.prototype.update = function () {
        var store = this.userFacade.getCurrentStore();
        this.edit = false;
        var product = this.updateProduct.value;
        product._id = product.product_id;
        this.productFacade.updateProduct({ product: product, store_id: store._id });
        this.clickButton = true;
    };
    InventoryComponent.prototype.editProduct = function () {
        this.edit = true;
        this.clickButton = true;
    };
    InventoryComponent.prototype.sendToParent = function () {
        this.segment.emit("add_product");
    };
    // present loading
    InventoryComponent.prototype.presentLoading = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var loading, _a, role, data;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: "Please wait...",
                            duration: 500,
                        })];
                    case 1:
                        loading = _b.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _b.sent();
                        return [4 /*yield*/, loading.onDidDismiss()];
                    case 3:
                        _a = _b.sent(), role = _a.role, data = _a.data;
                        return [2 /*return*/];
                }
            });
        });
    };
    InventoryComponent.ctorParameters = function () { return [
        { type: src_app_core_modules_services_profile_profile_facade_profile_facade_service__WEBPACK_IMPORTED_MODULE_6__["UserFacadeService"] },
        { type: src_app_core_modules_services_products_product_facade_product_facade_service__WEBPACK_IMPORTED_MODULE_2__["ProductFacadeService"] },
        { type: src_app_core_modules_services_categories_category_facade_category_facade_service__WEBPACK_IMPORTED_MODULE_3__["CategoryFacadeService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], InventoryComponent.prototype, "shareProduct", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], InventoryComponent.prototype, "segment", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], InventoryComponent.prototype, "inventory_products", void 0);
    InventoryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-inventory",
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./inventory.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin-store/pages/products/components/inventory/inventory.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./inventory.component.scss */ "./src/app/modules/admin-store/pages/products/components/inventory/inventory.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_core_modules_services_profile_profile_facade_profile_facade_service__WEBPACK_IMPORTED_MODULE_6__["UserFacadeService"],
            src_app_core_modules_services_products_product_facade_product_facade_service__WEBPACK_IMPORTED_MODULE_2__["ProductFacadeService"],
            src_app_core_modules_services_categories_category_facade_category_facade_service__WEBPACK_IMPORTED_MODULE_3__["CategoryFacadeService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]])
    ], InventoryComponent);
    return InventoryComponent;
}());



/***/ }),

/***/ "./src/app/modules/admin-store/pages/products/components/products-components.module.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/admin-store/pages/products/components/products-components.module.ts ***!
  \*********************************************************************************************/
/*! exports provided: ProductsComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponentsModule", function() { return ProductsComponentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/expansion.es5.js");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./products/products.component */ "./src/app/modules/admin-store/pages/products/components/products/products.component.ts");
/* harmony import */ var _category_category_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./category/category.component */ "./src/app/modules/admin-store/pages/products/components/category/category.component.ts");
/* harmony import */ var _products_add_product_add_product_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./products/add-product/add-product.component */ "./src/app/modules/admin-store/pages/products/components/products/add-product/add-product.component.ts");
/* harmony import */ var _inventory_inventory_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./inventory/inventory.component */ "./src/app/modules/admin-store/pages/products/components/inventory/inventory.component.ts");
/* harmony import */ var _modals_product_view_modal_product_view_modal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../modals/product-view-modal/product-view-modal.component */ "./src/app/modules/admin-store/pages/products/modals/product-view-modal/product-view-modal.component.ts");
/* harmony import */ var _csv_csv_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./csv/csv.component */ "./src/app/modules/admin-store/pages/products/components/csv/csv.component.ts");
/* harmony import */ var _products_images_images_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./products/images/images.component */ "./src/app/modules/admin-store/pages/products/components/products/images/images.component.ts");
/* harmony import */ var ngx_image_cropper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-image-cropper */ "./node_modules/ngx-image-cropper/__ivy_ngcc__/fesm5/ngx-image-cropper.js");
















var ProductsComponentsModule = /** @class */ (function () {
    function ProductsComponentsModule() {
    }
    ProductsComponentsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _category_category_component__WEBPACK_IMPORTED_MODULE_8__["CategoryComponent"],
                _products_products_component__WEBPACK_IMPORTED_MODULE_7__["ProductsComponent"],
                _products_add_product_add_product_component__WEBPACK_IMPORTED_MODULE_9__["AddProductComponent"],
                _inventory_inventory_component__WEBPACK_IMPORTED_MODULE_10__["InventoryComponent"],
                _csv_csv_component__WEBPACK_IMPORTED_MODULE_12__["CsvComponent"],
                _products_images_images_component__WEBPACK_IMPORTED_MODULE_13__["ImagesComponent"],
                _modals_product_view_modal_product_view_modal_component__WEBPACK_IMPORTED_MODULE_11__["ProductViewModalComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__["MatExpansionModule"],
                ngx_image_cropper__WEBPACK_IMPORTED_MODULE_14__["ImageCropperModule"],
            ],
            exports: [
                _category_category_component__WEBPACK_IMPORTED_MODULE_8__["CategoryComponent"],
                _products_products_component__WEBPACK_IMPORTED_MODULE_7__["ProductsComponent"],
                _products_add_product_add_product_component__WEBPACK_IMPORTED_MODULE_9__["AddProductComponent"],
                _inventory_inventory_component__WEBPACK_IMPORTED_MODULE_10__["InventoryComponent"],
                _csv_csv_component__WEBPACK_IMPORTED_MODULE_12__["CsvComponent"],
                _modals_product_view_modal_product_view_modal_component__WEBPACK_IMPORTED_MODULE_11__["ProductViewModalComponent"],
                _products_images_images_component__WEBPACK_IMPORTED_MODULE_13__["ImagesComponent"],
            ],
            entryComponents: [],
        })
    ], ProductsComponentsModule);
    return ProductsComponentsModule;
}());



/***/ }),

/***/ "./src/app/modules/admin-store/pages/products/components/products/add-product/add-product.component.scss":
/*!***************************************************************************************************************!*\
  !*** ./src/app/modules/admin-store/pages/products/components/products/add-product/add-product.component.scss ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-slide {\n  height: 100vh;\n}\n\n.outlined {\n  border: 1px solid #018786;\n}\n\n.normal {\n  border: none;\n}\n\n:host ::ng-deep .cropper {\n  height: 124.8vw;\n  width: 80vw;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hZG1pbi1zdG9yZS9wYWdlcy9wcm9kdWN0cy9jb21wb25lbnRzL3Byb2R1Y3RzL2FkZC1wcm9kdWN0L0M6XFxVc2Vyc1xcTWFydmluXFxEb2N1bWVudHNcXEdpdEh1YlxcYWZyb2JcXGNsaWVudC9zcmNcXGFwcFxcbW9kdWxlc1xcYWRtaW4tc3RvcmVcXHBhZ2VzXFxwcm9kdWN0c1xcY29tcG9uZW50c1xccHJvZHVjdHNcXGFkZC1wcm9kdWN0XFxhZGQtcHJvZHVjdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9hZG1pbi1zdG9yZS9wYWdlcy9wcm9kdWN0cy9jb21wb25lbnRzL3Byb2R1Y3RzL2FkZC1wcm9kdWN0L2FkZC1wcm9kdWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtBQ0NGOztBRENBO0VBQ0UseUJBQUE7QUNFRjs7QURBQTtFQUNFLFlBQUE7QUNHRjs7QUREQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0FDSUYiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2FkbWluLXN0b3JlL3BhZ2VzL3Byb2R1Y3RzL2NvbXBvbmVudHMvcHJvZHVjdHMvYWRkLXByb2R1Y3QvYWRkLXByb2R1Y3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tc2xpZGV7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxufVxyXG4ub3V0bGluZWR7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzAxODc4NiA7XHJcbn1cclxuLm5vcm1hbHtcclxuICBib3JkZXI6bm9uZSA7XHJcbn1cclxuOmhvc3QgOjpuZy1kZWVwIC5jcm9wcGVyIHtcclxuICBoZWlnaHQ6IDEyNC44dnc7XHJcbiAgd2lkdGg6IDgwdndcclxufSIsImlvbi1zbGlkZSB7XG4gIGhlaWdodDogMTAwdmg7XG59XG5cbi5vdXRsaW5lZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMTg3ODY7XG59XG5cbi5ub3JtYWwge1xuICBib3JkZXI6IG5vbmU7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuY3JvcHBlciB7XG4gIGhlaWdodDogMTI0Ljh2dztcbiAgd2lkdGg6IDgwdnc7XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/admin-store/pages/products/components/products/add-product/add-product.component.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/modules/admin-store/pages/products/components/products/add-product/add-product.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: AddProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProductComponent", function() { return AddProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var src_app_core_modules_services_categories_category_facade_category_facade_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core-modules/services/categories/category-facade/category-facade.service */ "./src/app/core-modules/services/categories/category-facade/category-facade.service.ts");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var src_app_core_modules_services_products_product_facade_product_facade_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core-modules/services/products/product-facade/product-facade.service */ "./src/app/core-modules/services/products/product-facade/product-facade.service.ts");
/* harmony import */ var src_app_core_modules_services_products_product_api_product_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core-modules/services/products/product-api/product-api.service */ "./src/app/core-modules/services/products/product-api/product-api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var src_app_core_modules_services_profile_profile_facade_profile_facade_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core-modules/services/profile/profile-facade/profile-facade.service */ "./src/app/core-modules/services/profile/profile-facade/profile-facade.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var ngx_image_cropper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-image-cropper */ "./node_modules/ngx-image-cropper/__ivy_ngcc__/fesm5/ngx-image-cropper.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js");
















//import { AngularFireStorage, AngularFireUploadTask } from 'angularfire2/storage'
var AddProductComponent = /** @class */ (function () {
    function AddProductComponent(formBuilder, categoryFacade, productFacade, productApi, router, transfer, toastController, userFacade, camera, actionSheetController, platform, loadingController, alertController, storage) {
        this.formBuilder = formBuilder;
        this.categoryFacade = categoryFacade;
        this.productFacade = productFacade;
        this.productApi = productApi;
        this.router = router;
        this.transfer = transfer;
        this.toastController = toastController;
        this.userFacade = userFacade;
        this.camera = camera;
        this.actionSheetController = actionSheetController;
        this.platform = platform;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.storage = storage;
        this.segment = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.imagePickerOptions = {
            maximumImagesCount: 1,
            quality: 50,
        };
        this.bill_of_material = [];
        this.picture_uploaded = [];
        this.file_uploaded = [];
        this.component_file_uploaded = [];
        this.component_picture_uploaded = [];
        this.defaultR = 'outlined';
        this.done = false;
        this.slides_number = 1;
        this.show_this_selected_categories = [];
        //this are properties that hide and show categories
        this.category_view = true;
        this.sub_category_view = true;
        this.sub_segment_category_view = true;
        this.product_types_view = true;
        this.small = true;
        this.myImage = null;
        this.croppedFileImage = null;
        this.croppedImage = null;
        this.myFileImages = [];
        this.choose_category = {
            category: [""],
            sub_category: [""],
            product_segment: [""],
            product_type: [""],
            unit: [""],
        };
        ////loading
        this.isUpdating$ = this.categoryFacade.isUpdating$();
    }
    Object.defineProperty(AddProductComponent.prototype, "metaTagFormGroup", {
        get: function () {
            return this.productMetatagsForm.get("metaTags");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddProductComponent.prototype, "featureFormGroup", {
        get: function () {
            return this.productFeaturesForm.get("features");
        },
        enumerable: true,
        configurable: true
    });
    AddProductComponent.prototype.ionViewDidEnter = function () {
        this.slides.lockSwipes(true);
    };
    AddProductComponent.prototype.ngOnInit = function () {
        //slides functions
        this.addBillOfMaterial = true;
        this.showBack = false;
        this.showNext = true;
        //end of slide functions 
        this.android_platform = this.platform.is("android");
        console.log(this.android_platform);
        //getCategories
        this.categories$ = this.categoryFacade.getCategories$();
        this.createProduct = this.formBuilder.group({
            productName: [
                "",
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required]),
            ],
            productDescription: [
                "",
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required]),
            ],
            productPrice: [
                "",
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required]),
            ],
            in_stock: ["",
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required]),],
        });
        this.productMetatagsForm = this.formBuilder.group({
            metaTags: this.formBuilder.array([this.createMetaTag()]),
        });
        this.productFeaturesForm = this.formBuilder.group({
            features: this.formBuilder.array([this.createFeature()]),
        });
        this.productComponentsForm = this.formBuilder.group({
            componentname: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].minLength(2)])],
            price: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].minLength(2)])],
            base_material_price: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].minLength(2)])],
            descrip: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].minLength(2)])],
            unit_of_measure: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].minLength(2)])],
        });
        // set metaTagList to the form control containing propeties
        this.metaTagList = this.productMetatagsForm.get("metaTags");
        this.featureList = this.productFeaturesForm.get("features");
    };
    ///*** components bill of material*/
    AddProductComponent.prototype.addComponent = function () {
        var _this = this;
        function randomString(length, chars) {
            var result = "";
            for (var i = length; i > 0; --i)
                result += chars[Math.floor(Math.random() * chars.length)];
            return result;
        }
        var length = 10;
        var chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var id = randomString(length, chars);
        var pic1 = this.component_picture_uploaded[0];
        var pic2 = this.component_picture_uploaded[1];
        var pic3 = this.component_picture_uploaded[2];
        console.log(this.component_picture_uploaded);
        this.presentLoading();
        var uploadPictures = function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!pic1) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.uploadBOMPix(pic1, id)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        if (!pic2) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.uploadBOMPix(pic2, id)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        if (!pic3) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.uploadBOMPix(pic3, id)];
                    case 5:
                        _a.sent();
                        _a.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        }); };
        uploadPictures();
    };
    AddProductComponent.prototype.uploadBOMPix = function (pic, id) {
        var _this = this;
        console.log(pic);
        fetch(pic)
            .then(function (res) { return res.blob(); })
            .then(function (blob) {
            var file = new File([blob], _this.file_name, {
                type: "image/png",
            });
            if (_this.platform.is("cordova")) {
                var n = Date.now();
                //where is stored in the cloud
                var filePath = "Products/" + n + ".jpeg";
                _this.image = pic;
                var fileRef_1 = _this.storage.ref(filePath);
                _this.task = fileRef_1.putString(_this.image, 'data_url', { contentType: "image/jpeg" });
                _this.progress = _this.task.percentageChanges();
                _this.task.snapshotChanges()
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(function () {
                    var data = fileRef_1.getDownloadURL();
                    data.subscribe(function (url) {
                        var url_img;
                        if (url) {
                            url_img = url;
                            console.log(url);
                        }
                        _this.component_file_uploaded.push({ id: "Images/firebase", url: url_img });
                        if (_this.component_picture_uploaded.length == _this.component_file_uploaded.length) {
                            var component = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.productComponentsForm.value), { BOM_type: _this.BOM_type, selected: false, _id: id, pictures: _this.component_file_uploaded });
                            _this.bill_of_material.push(component);
                            _this.component_file_uploaded = [];
                            _this.component_picture_uploaded = [];
                        }
                    });
                }))
                    .subscribe(function (url) {
                    if (url) {
                        return;
                    }
                });
            }
            else {
                var _formData = new FormData();
                _formData.append("image", file);
                //save picture
                console.log(file, _formData);
                _this.productApi.uploadImage(_formData).subscribe(function (res) {
                    var data = res.data[0];
                    console.log(res);
                    if (data.url) {
                        _this.component_file_uploaded.push(data);
                        console.log(_this.component_picture_uploaded, _this.component_file_uploaded);
                        if (_this.component_picture_uploaded.length == _this.component_file_uploaded.length) {
                            var component = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.productComponentsForm.value), { BOM_type: _this.BOM_type, selected: false, _id: id, pictures: _this.component_file_uploaded });
                            _this.bill_of_material.push(component);
                            _this.component_file_uploaded = [];
                            _this.component_picture_uploaded = [];
                        }
                    }
                    else {
                        _this.presentToast("Ooops try to use browser");
                    }
                    return;
                }, function (err) {
                    console.log(err);
                });
            }
        });
    };
    AddProductComponent.prototype.removeComponent = function (index) {
        this.bill_of_material.splice(index, 1);
    };
    ///***End  components */
    // Generate new metaTag
    AddProductComponent.prototype.createMetaTag = function () {
        return this.formBuilder.group({
            metaTagname: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required])],
        });
    };
    AddProductComponent.prototype.createFeature = function () {
        return this.formBuilder.group({
            featurename: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required])],
        });
    };
    AddProductComponent.prototype.addMetaTag = function () {
        this.metaTagList.push(this.createMetaTag());
    };
    AddProductComponent.prototype.addFeature = function () {
        this.featureList.push(this.createFeature());
    };
    AddProductComponent.prototype.removeMetaTag = function (index) {
        this.metaTagList.removeAt(index);
    };
    AddProductComponent.prototype.removeFeature = function (index) {
        this.featureList.removeAt(index);
    };
    AddProductComponent.prototype.getMetaTagsFormGroup = function (index) {
        var formGroup = this.metaTagList.controls[index];
        return formGroup;
    };
    AddProductComponent.prototype.getFeaturesFormGroup = function (index) {
        var formGroup = this.featureList.controls[index];
        return formGroup;
    };
    AddProductComponent.prototype.showCSV = function () {
        if (this.import) {
            this.import = false;
        }
        else {
            this.import = true;
        }
    };
    /**** Images****/
    AddProductComponent.prototype.handleFileInput = function (event) {
        var file = event.target.files[0];
        //android
        if (this.picture_uploaded.length >= 3) {
            this.presentToast("Only three pictures can be added");
        }
        else {
            if (file.type == "image/jpeg" || file.type == "image/png") {
                //set MyImage
                this.getBase64(file);
            }
            else {
                this.presentToast("check your file format");
            }
        }
    };
    AddProductComponent.prototype.handleComponentFileInput = function (event) {
        var file = event.target.files[0];
        //android
        if (this.component_picture_uploaded.length >= 3) {
            this.presentToast("Only three pictures can be added");
        }
        else {
            if (file.type == "image/jpeg" || file.type == "image/png") {
                //set MyImage
                this.getBase64(file);
            }
            else {
                this.presentToast("check your file format");
            }
        }
    };
    AddProductComponent.prototype.selectImage = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetController.create({
                            header: "Select Image source",
                            buttons: [
                                {
                                    text: "Load from Library",
                                    handler: function () {
                                        _this.pickImage(_this.camera.PictureSourceType.PHOTOLIBRARY);
                                    },
                                },
                                {
                                    text: "Use Camera",
                                    handler: function () {
                                        _this.pickImage(_this.camera.PictureSourceType.CAMERA);
                                    },
                                },
                                {
                                    text: "Cancel",
                                    role: "cancel",
                                },
                            ],
                        })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AddProductComponent.prototype.pickImage = function (sourceType) {
        var _this = this;
        var options = {
            quality: 100,
            sourceType: sourceType,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
        };
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            _this.myImage = "data:image/jpeg;base64," + imageData;
        }, function (err) {
            // Handle error
            _this.presentToast("oops something went wrong");
        });
    };
    AddProductComponent.prototype.imageCropped = function (event) {
        this.croppedImage = event.base64;
    };
    AddProductComponent.prototype.clearOne = function (image) {
        var new_array = this.picture_uploaded.filter(function (res) {
            return res !== image;
        });
        this.picture_uploaded = new_array;
    };
    AddProductComponent.prototype.clearOneComponent = function (image) {
        var new_array = this.component_picture_uploaded.filter(function (res) {
            return res !== image;
        });
        this.component_picture_uploaded = new_array;
    };
    AddProductComponent.prototype.clearImage = function () {
        this.angularCropper.imageBase64 = null;
        this.myImage = null;
        this.croppedImage = null;
    };
    AddProductComponent.prototype.saveCropper = function () {
        this.angularCropper.crop();
        this.picture_uploaded.push(this.croppedImage);
        this.clearImage();
    };
    AddProductComponent.prototype.saveComponentCropper = function () {
        this.angularCropper.crop();
        this.component_picture_uploaded.push(this.croppedImage);
        this.clearImage();
    };
    AddProductComponent.prototype.convertBase64ToFile = function (url) {
        var _this = this;
        fetch(url)
            .then(function (res) { return res.blob(); })
            .then(function (blob) {
            var file = new File([blob], _this.file_name, { type: "image/png" });
            return file;
        });
    };
    AddProductComponent.prototype.getBase64 = function (file) {
        var _this = this;
        this.file_name = file.name;
        var reader = new FileReader();
        var image;
        reader.readAsDataURL(file);
        reader.onload = function () {
            image = reader.result;
        };
        setTimeout(function () {
            _this.myImage = image;
        }, 2000);
        reader.onerror = function (error) {
            console.log("Error: ", error);
        };
    };
    AddProductComponent.prototype.onSubmit = function () {
        //save picture
        var _this = this;
        var pic1 = this.picture_uploaded[0];
        var pic2 = this.picture_uploaded[1];
        var pic3 = this.picture_uploaded[2];
        console.log(this.picture_uploaded);
        this.presentLoading();
        var uploadPictures = function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!pic1) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.uploadPix(pic1)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        if (!pic2) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.uploadPix(pic2)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        if (!pic3) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.uploadPix(pic3)];
                    case 5:
                        _a.sent();
                        _a.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        }); };
        uploadPictures();
        this.done = true;
    };
    AddProductComponent.prototype.uploadPix = function (pic) {
        var _this = this;
        fetch(pic)
            .then(function (res) { return res.blob(); })
            .then(function (blob) {
            var file = new File([blob], _this.file_name, {
                type: "image/jpeg",
            });
            //android 
            console.log(file);
            if (_this.platform.is('cordova')) {
                var n = Date.now();
                //where is stored in the cloud
                var filePath = "Products/" + n + ".jpeg";
                _this.image = pic;
                var fileRef_2 = _this.storage.ref(filePath);
                _this.task = fileRef_2.putString(_this.image, 'data_url', { contentType: "image/jpeg" });
                _this.progress = _this.task.percentageChanges();
                _this.task.snapshotChanges()
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(function () {
                    var data = fileRef_2.getDownloadURL();
                    data.subscribe(function (url) {
                        var url_img;
                        if (url) {
                            url_img = url;
                            console.log(url);
                        }
                        _this.file_uploaded.push({ id: "Images/firebase", url: url_img });
                    });
                }))
                    .subscribe(function (url) {
                    if (url) {
                        return;
                    }
                });
            }
            else {
                //web
                var _formData = new FormData();
                _formData.append("image", file);
                //save picture
                console.log(file, _formData);
                _this.productApi.uploadImage(_formData).subscribe(function (res) {
                    var data = res.data[0];
                    console.log(res);
                    if (data.url) {
                        _this.file_uploaded.push(data);
                    }
                    else {
                        _this.presentToast("Ooops try to use browser");
                    }
                    return;
                }, function (err) {
                    console.log(err);
                });
            }
        });
    };
    AddProductComponent.prototype.presentLoading = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var loading, _a, role, data;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            cssClass: "custom-class",
                            message: "Please wait...",
                            duration: 5000,
                        })];
                    case 1:
                        loading = _b.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _b.sent();
                        return [4 /*yield*/, loading.onDidDismiss()];
                    case 3:
                        _a = _b.sent(), role = _a.role, data = _a.data;
                        loading.dismiss();
                        console.log("Loading dismissed!");
                        return [2 /*return*/];
                }
            });
        });
    };
    AddProductComponent.prototype.pushToDatabase = function () {
        var store = this.userFacade.getCurrentStore();
        var product = {
            productName: this.createProduct.value.productName,
            productDescription: this.createProduct.value.productDescription,
            productImage: this.file_uploaded,
            metaTags: this.productMetatagsForm.value.metaTags,
            features: this.productFeaturesForm.value.features,
            in_stock: this.createProduct.value.in_stock,
            productPrice: this.createProduct.value.productPrice,
            bill_of_material: this.bill_of_material,
            selectCategory: this.choose_category,
            store_id: store._id,
        };
        //save produc
        console.log(product);
        this.productFacade.createProduct(product);
        ///redirect to products
        this.presentToast("product successfully uploaded");
        //
        console.log(product);
        //this.router.navigate["/store/"]
        setTimeout(function () {
            location.reload();
        }, 1000);
    };
    /***************Select Category ***********************/
    //category selected
    AddProductComponent.prototype.onChange = function (event) {
        var _this = this;
        //get event
        var category_name = event;
        //compare and assign category list
        this.categories$.subscribe(function (res) {
            var category = res.filter(function (item) {
                return item.name == category_name;
            });
            var sub_cat = category[0].list;
            // loop through category list and group
            var groupBy = function (xs, key) {
                return xs.reduce(function (rv, x) {
                    (rv[x[key]] = rv[x[key]] || []).push(x);
                    return rv;
                }, {});
            };
            // Group by subcategor
            var grouped = groupBy(sub_cat, "Categories");
            _this.sub_category = grouped;
        }, function (err) {
            console.log(err);
        });
    };
    AddProductComponent.prototype.onChangeSub = function (event) {
        var sub_name = event;
        //check if it exists and pass
        var arr = this.sub_category[sub_name];
        // loop through category list and group
        var groupBy = function (xs, key) {
            return xs.reduce(function (rv, x) {
                (rv[x[key]] = rv[x[key]] || []).push(x);
                return rv;
            }, {});
        };
        // Group by sub segment categor
        var grouped = groupBy(arr, "Product segment");
        this.sub_segment_category = grouped;
    };
    /*onChangeSub(event) {
      
    }*/
    AddProductComponent.prototype.onChangeCatSeg = function (event) {
        var sub_name = event;
        var new_sub = [];
        //check if it exists and pass
        if (this.sub_segment_category.hasOwnProperty(sub_name)) {
            new_sub.push(this.sub_segment_category[sub_name]);
        }
        // loop through category list and group
        var groupBy = function (xs, key) {
            return xs.reduce(function (rv, x) {
                (rv[x[key]] = rv[x[key]] || []).push(x);
                return rv;
            }, {});
        };
        // Group by sub segment categor
        var grouped = groupBy(new_sub[0], "Product type");
        this.product_types = grouped;
    };
    AddProductComponent.prototype.onChangeProductType = function (event) {
        var e_1, _a;
        var p_type = event;
        var arr = this.product_types[p_type];
        try {
            for (var arr_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(arr), arr_1_1 = arr_1.next(); !arr_1_1.done; arr_1_1 = arr_1.next()) {
                var x = arr_1_1.value;
                if (x["Product type"] == p_type) {
                    //this.choose_category.value.unit = x.Unit;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (arr_1_1 && !arr_1_1.done && (_a = arr_1.return)) _a.call(arr_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    AddProductComponent.prototype.set = function (setThis, value) {
        switch (setThis) {
            case "category": {
                this.choose_category.category = value;
                this.show_this_selected_categories.push(value);
                this.category_view = false;
                this.onChange(value);
                break;
            }
            case "sub_category": {
                this.choose_category.sub_category = value;
                this.show_this_selected_categories.push(value);
                this.sub_category_view = false;
                this.onChangeSub(value);
                break;
            }
            case "sub_segment_category": {
                this.choose_category.product_segment = value;
                this.show_this_selected_categories.push(value);
                this.sub_segment_category_view = false;
                this.onChangeCatSeg(value);
                break;
            }
            case "product_types": {
                this.choose_category.product_type = value;
                this.show_this_selected_categories.push(value);
                this.product_types_view = false;
                this.onChangeProductType(value);
                break;
            }
            default: {
                //statements;
                break;
            }
        }
    };
    AddProductComponent.prototype.clearCategories = function () {
        this.category_view = true;
        this.sub_category = null;
        this.sub_category_view = true;
        this.sub_segment_category = null;
        this.sub_segment_category_view = true;
        this.product_types = null;
        this.product_types_view = true;
        this.show_this_selected_categories = ["clear"];
    };
    /***************Category Ends***********************/
    AddProductComponent.prototype.onClickBack = function () {
        if (this.import) {
            this.import = false;
        }
        else {
            this.segment.emit("products");
        }
    };
    AddProductComponent.prototype.presentToast = function (data) {
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
    AddProductComponent.prototype.slideChange = function (event) {
        var _this = this;
        this.slides.getActiveIndex().then(function (data) {
            _this.slides_number = data + 1;
            if (data == 5) {
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
        this.slides.lockSwipes(true);
    };
    AddProductComponent.prototype.next = function () {
        this.slides.lockSwipes(false);
        this.slides.slideNext();
    };
    AddProductComponent.prototype.slidesBack = function () {
        this.slides.lockSwipes(false);
        this.slides.slidePrev();
    };
    AddProductComponent.prototype.aspectSelect = function (data) {
        if (data == "large") {
            this.defaultR = "outlined";
            this.oneone = "normal";
            this.small = true;
        }
        else if (data == "small") {
            this.oneone = 'outlined';
            this.defaultR = "normal";
            this.small = false;
        }
    };
    AddProductComponent.prototype.removePic = function (data) {
        if (data == this.pic_remove) {
            this.pic_remove = null;
        }
        else {
            this.pic_remove = data;
        }
    };
    AddProductComponent.prototype.yesAddBillOfMaterial = function () {
        this.addBillOfMaterial = false;
    };
    AddProductComponent.prototype.selectBom = function (data) {
        switch (data) {
            case "extra": {
                this.BOM_type = "Extra";
                this.bill_type_selected = true;
                this.showNext = false;
                this.showBack = false;
                break;
            }
            case "material": {
                this.BOM_type = "material";
                this.bill_type_selected = true;
                this.showNext = false;
                this.showBack = false;
                break;
            }
            case "clear": {
                //statements; 
                this.BOM_type = null;
                this.bill_type_selected = false;
                this.selected_extra = false;
                this.material_substitude = false;
                this.showNext = true;
                this.showBack = true;
                break;
            }
        }
    };
    AddProductComponent.prototype.presentAlertMultipleButtons = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var alert;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("alert");
                        return [4 /*yield*/, this.alertController.create({
                                cssClass: 'my-custom-class',
                                header: 'Base Material Price',
                                message: 'Is the price of the standard material that this component will replace',
                                buttons: ['Cancel']
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
    AddProductComponent.prototype.ngOnDestroy = function () {
        console.log('Items destroyed');
    };
    AddProductComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormBuilder"] },
        { type: src_app_core_modules_services_categories_category_facade_category_facade_service__WEBPACK_IMPORTED_MODULE_3__["CategoryFacadeService"] },
        { type: src_app_core_modules_services_products_product_facade_product_facade_service__WEBPACK_IMPORTED_MODULE_5__["ProductFacadeService"] },
        { type: src_app_core_modules_services_products_product_api_product_api_service__WEBPACK_IMPORTED_MODULE_6__["ProductApiService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
        { type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_4__["FileTransfer"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["ToastController"] },
        { type: src_app_core_modules_services_profile_profile_facade_profile_facade_service__WEBPACK_IMPORTED_MODULE_10__["UserFacadeService"] },
        { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__["Camera"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["ActionSheetController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["Platform"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["LoadingController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["AlertController"] },
        { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_13__["AngularFireStorage"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('unloaded'),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], AddProductComponent.prototype, "segment", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("add"),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonSlides"])
    ], AddProductComponent.prototype, "slides", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(ngx_image_cropper__WEBPACK_IMPORTED_MODULE_12__["ImageCropperComponent"], { static: false }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", ngx_image_cropper__WEBPACK_IMPORTED_MODULE_12__["ImageCropperComponent"])
    ], AddProductComponent.prototype, "angularCropper", void 0);
    AddProductComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-add-product",
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./add-product.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin-store/pages/products/components/products/add-product/add-product.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./add-product.component.scss */ "./src/app/modules/admin-store/pages/products/components/products/add-product/add-product.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormBuilder"],
            src_app_core_modules_services_categories_category_facade_category_facade_service__WEBPACK_IMPORTED_MODULE_3__["CategoryFacadeService"],
            src_app_core_modules_services_products_product_facade_product_facade_service__WEBPACK_IMPORTED_MODULE_5__["ProductFacadeService"],
            src_app_core_modules_services_products_product_api_product_api_service__WEBPACK_IMPORTED_MODULE_6__["ProductApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_4__["FileTransfer"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["ToastController"],
            src_app_core_modules_services_profile_profile_facade_profile_facade_service__WEBPACK_IMPORTED_MODULE_10__["UserFacadeService"],
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__["Camera"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["ActionSheetController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["Platform"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["AlertController"],
            _angular_fire_storage__WEBPACK_IMPORTED_MODULE_13__["AngularFireStorage"]])
    ], AddProductComponent);
    return AddProductComponent;
}());



/***/ }),

/***/ "./src/app/modules/admin-store/pages/products/components/products/images/images.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/admin-store/pages/products/components/products/images/images.component.scss ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4tc3RvcmUvcGFnZXMvcHJvZHVjdHMvY29tcG9uZW50cy9wcm9kdWN0cy9pbWFnZXMvaW1hZ2VzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/admin-store/pages/products/components/products/images/images.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/admin-store/pages/products/components/products/images/images.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: ImagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagesComponent", function() { return ImagesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var ImagesComponent = /** @class */ (function () {
    function ImagesComponent() {
    }
    ImagesComponent.prototype.ngOnInit = function () { };
    ImagesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-images',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./images.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin-store/pages/products/components/products/images/images.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./images.component.scss */ "./src/app/modules/admin-store/pages/products/components/products/images/images.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], ImagesComponent);
    return ImagesComponent;
}());



/***/ }),

/***/ "./src/app/modules/admin-store/pages/products/components/products/products.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/admin-store/pages/products/components/products/products.component.scss ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-item {\n  --background:white;\n  --border-radius:2px;\n  top: 5px;\n  width: 100%;\n  height: 100%;\n}\n\n.box {\n  background-color: #fef4a9;\n  width: 100%;\n  height: 100%;\n}\n\n.attri sub {\n  position: relative;\n  display: contents;\n  color: #018786;\n}\n\n.vl {\n  border-left: 1px solid grey;\n  position: absolute;\n  left: -2px;\n  height: 15px;\n}\n\nion-scroll {\n  height: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hZG1pbi1zdG9yZS9wYWdlcy9wcm9kdWN0cy9jb21wb25lbnRzL3Byb2R1Y3RzL0M6XFxVc2Vyc1xcTWFydmluXFxEb2N1bWVudHNcXEdpdEh1YlxcYWZyb2JcXGNsaWVudC9zcmNcXGFwcFxcbW9kdWxlc1xcYWRtaW4tc3RvcmVcXHBhZ2VzXFxwcm9kdWN0c1xcY29tcG9uZW50c1xccHJvZHVjdHNcXHByb2R1Y3RzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2FkbWluLXN0b3JlL3BhZ2VzL3Byb2R1Y3RzL2NvbXBvbmVudHMvcHJvZHVjdHMvcHJvZHVjdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQ0o7O0FEQ0E7RUFDSSx5QkFBQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0FDQ0o7O0FEQ0E7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ0VKOztBREVBO0VBQ0ksMkJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FDQ0o7O0FEQ0U7RUFDQSxhQUFBO0FDRUYiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2FkbWluLXN0b3JlL3BhZ2VzL3Byb2R1Y3RzL2NvbXBvbmVudHMvcHJvZHVjdHMvcHJvZHVjdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taXRlbXtcbiAgICAtLWJhY2tncm91bmQ6d2hpdGU7XG4gICAgLS1ib3JkZXItcmFkaXVzOjJweDtcbiAgICB0b3A6IDVweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6MTAwJTtcbn1cbi5ib3h7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZjRhOTtcblxuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbn1cbi5hdHRyaSBzdWJ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGNvbnRlbnRzO1xuICAgIGNvbG9yOiMwMTg3ODY7XG59XG5cblxuLnZse1xuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgZ3JleTtcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICBsZWZ0Oi0ycHg7XG4gICAgaGVpZ2h0OjE1cHg7XG4gIH1cbiAgaW9uLXNjcm9sbCB7XG4gIGhlaWdodDogMTAwcHg7XG4gIH1cblxuIiwiaW9uLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6d2hpdGU7XG4gIC0tYm9yZGVyLXJhZGl1czoycHg7XG4gIHRvcDogNXB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uYm94IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZjRhOTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmF0dHJpIHN1YiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogY29udGVudHM7XG4gIGNvbG9yOiAjMDE4Nzg2O1xufVxuXG4udmwge1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIGdyZXk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogLTJweDtcbiAgaGVpZ2h0OiAxNXB4O1xufVxuXG5pb24tc2Nyb2xsIHtcbiAgaGVpZ2h0OiAxMDBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/admin-store/pages/products/components/products/products.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/admin-store/pages/products/components/products/products.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var src_app_core_modules_services_products_product_facade_product_facade_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core-modules/services/products/product-facade/product-facade.service */ "./src/app/core-modules/services/products/product-facade/product-facade.service.ts");
/* harmony import */ var src_app_core_modules_services_categories_category_facade_category_facade_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core-modules/services/categories/category-facade/category-facade.service */ "./src/app/core-modules/services/categories/category-facade/category-facade.service.ts");
/* harmony import */ var src_app_core_modules_services_profile_profile_facade_profile_facade_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core-modules/services/profile/profile-facade/profile-facade.service */ "./src/app/core-modules/services/profile/profile-facade/profile-facade.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var src_app_core_modules_services_products_product_api_product_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core-modules/services/products/product-api/product-api.service */ "./src/app/core-modules/services/products/product-api/product-api.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");










var ProductsComponent = /** @class */ (function () {
    function ProductsComponent(productFacade, userFacade, categoryFacade, loadingController, formBuilder, route, productApi, alertController, modalController, toastController) {
        this.productFacade = productFacade;
        this.userFacade = userFacade;
        this.categoryFacade = categoryFacade;
        this.loadingController = loadingController;
        this.formBuilder = formBuilder;
        this.route = route;
        this.productApi = productApi;
        this.alertController = alertController;
        this.modalController = modalController;
        this.toastController = toastController;
        this.shareProduct = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.segment = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        ////loading
        //this.isUpdating$ = this.productFacade.isUpdating$();
    }
    ProductsComponent.prototype.ngOnChanges = function () {
        this.products$ = this.p_products.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["distinctUntilChanged"])());
    };
    ProductsComponent.prototype.ngOnInit = function () {
        var _this = this;
        //getCategories
        this.categories$ = this.categoryFacade.getCategories$();
        this.products$.subscribe(function (res) {
            if (res == undefined || res.length < 1) {
                _this.no_product = true;
            }
        }, function (err) {
            console.log(err);
        });
        // FormGroup
        this.updateProduct = this.formBuilder.group({
            product_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](),
            production_status: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](),
            next_available_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](),
            productName: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](),
            selectCategory: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](),
            productDescription: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](),
            productImage: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](),
            metaTags: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](),
            productPrice: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](),
            in_stock: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](),
            sold: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](),
        });
    };
    ProductsComponent.prototype.viewImageOptions = function (image, product) {
        var data = { cloudImage: image, product: product };
        //View picture and get more options
        //this.presentImageView(data);
        this.pictureOptions(image, product);
    };
    ProductsComponent.prototype.pictureOptions = function (image, product) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var data, alert;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        data = { public_id: image.id };
                        return [4 /*yield*/, this.alertController.create({
                                cssClass: "my-custom-class",
                                header: "Confirm!",
                                message: "Replace Image!!!",
                                buttons: [
                                    {
                                        text: "Cancel",
                                        role: "cancel",
                                        cssClass: "secondary",
                                        handler: function () { },
                                    },
                                    {
                                        text: "Okay",
                                        handler: function () {
                                            console.log("product: ", product, "image: ", data);
                                            ////upload new image
                                            //update product
                                            //delete cloudinary image
                                            //this.deleteCloudImage(Image_data);
                                        },
                                    },
                                ],
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
    /*async presentImageView(data) {
      console.log(data);
      const modal = await this.modalController.create({
        component: ProductViewModalComponent,
        cssClass: "my-custom-class",
        componentProps: { ...data },
      });
      return await modal.present();
    }*/
    ProductsComponent.prototype.handleFileInput = function (event) {
        var file = event.target.files[0];
        if (file.type == "image/jpeg" || file.type == "image/png") {
            this.picture_uploaded = file;
        }
    };
    ProductsComponent.prototype.uploadImage = function () {
        var _this = this;
        var _formData = new FormData();
        _formData.append("image", this.picture_uploaded);
        //save picture
        this.productApi.uploadImage(_formData).subscribe(function (res) {
            var imagedata = res.data;
            _this.updateProduct.value.productImage = imagedata;
            console.log(imagedata);
        }, function (err) {
            console.log(err);
        });
    };
    ProductsComponent.prototype.update = function () {
        var store = this.userFacade.getCurrentStore();
        this.edit = false;
        var product = this.updateProduct.value;
        product._id = product.product_id;
        this.productFacade.updateProduct({ product: product, store_id: store._id });
        this.clickButton = true;
    };
    ProductsComponent.prototype.editProduct = function () {
        this.edit = true;
        this.clickButton = true;
    };
    ProductsComponent.prototype.onDeleteProduct = function (product) {
        this.productFacade.removeProduct(product);
        this.clickButton = true;
    };
    ProductsComponent.prototype.expanded = function (p) {
        var product = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, p);
        // Patch the values to html
        if (this.id == product._id) {
            return null;
        }
        else {
            this.id = product._id;
            this.updateProduct.patchValue({
                product_id: product._id,
                productName: product.productName,
                selectCategory: product.category,
                productDescription: product.productDescription,
                productImage: product.productImage,
                metaTags: product.metaTags,
                productPrice: product.productPrice,
                production_status: product.production_status,
                next_available_date: product.next_available_date,
                in_stock: product.in_stock,
                sold: product.sold,
            });
        }
    };
    ProductsComponent.prototype.onSubmit = function () {
        console.log("submit: ", this.updateProduct.value);
    };
    ProductsComponent.prototype.sendToParent = function () {
        var _this = this;
        var products;
        var data = "add_product";
        //check for lisence
        this.productFacade
            .getStoreProducts$()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["distinctUntilChanged"])())
            .subscribe(function (res) {
            products = res;
            var product_length = products.length;
            var store = _this.userFacade.getCurrentStore();
            var free_trial = store.free_trial;
            var trial_end_date;
            var trial_number_products;
            if (free_trial) {
                trial_end_date = free_trial.end_date;
                trial_number_products = free_trial.allowed_products;
            }
            var return_policy_length = store.return_policy.length;
            var lisences = store.lisence;
            var today_ms = Date.now();
            var one_day_ms = 86400000;
            //check for lisence
            if (product_length == 0 && return_policy_length == 0) {
                _this.presentToast("set up your return policy first!");
                /*setTimeout(() => {
                  this.route.navigate(["/store/return-policy"]);
                }, 1000)*/
            }
            else {
                var allow_access_1 = false;
                if (lisences.length > 0) {
                    lisences.forEach(function (lisence) {
                        var lisence_end_date = lisence.payed_amount.end_date;
                        var time_remaining = (lisence_end_date - today_ms) / one_day_ms;
                        if (product_length < lisence.number_of_products && time_remaining > 0) {
                            allow_access_1 = true;
                        }
                    });
                }
                else {
                    var trial_time_remaining = (trial_end_date - today_ms) / one_day_ms;
                    if (trial_time_remaining > 0 && product_length < trial_number_products) {
                        allow_access_1 = true;
                    }
                }
                if (allow_access_1) {
                    _this.segment.emit(data);
                }
                else {
                    _this.presentToast("Buy license to add more products");
                }
            }
        });
    };
    // present loading
    ProductsComponent.prototype.presentLoading = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var loading, _a, role, data;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: "Please wait...",
                            duration: 500,
                        })];
                    case 1:
                        loading = _b.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _b.sent();
                        return [4 /*yield*/, loading.onDidDismiss()];
                    case 3:
                        _a = _b.sent(), role = _a.role, data = _a.data;
                        return [2 /*return*/];
                }
            });
        });
    };
    ProductsComponent.prototype.presentToast = function (msg) {
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
    ProductsComponent.ctorParameters = function () { return [
        { type: src_app_core_modules_services_products_product_facade_product_facade_service__WEBPACK_IMPORTED_MODULE_2__["ProductFacadeService"] },
        { type: src_app_core_modules_services_profile_profile_facade_profile_facade_service__WEBPACK_IMPORTED_MODULE_4__["UserFacadeService"] },
        { type: src_app_core_modules_services_categories_category_facade_category_facade_service__WEBPACK_IMPORTED_MODULE_3__["CategoryFacadeService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] },
        { type: src_app_core_modules_services_products_product_api_product_api_service__WEBPACK_IMPORTED_MODULE_7__["ProductApiService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], ProductsComponent.prototype, "shareProduct", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], ProductsComponent.prototype, "segment", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], ProductsComponent.prototype, "p_products", void 0);
    ProductsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-products-comp",
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./products.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin-store/pages/products/components/products/products.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./products.component.scss */ "./src/app/modules/admin-store/pages/products/components/products/products.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_core_modules_services_products_product_facade_product_facade_service__WEBPACK_IMPORTED_MODULE_2__["ProductFacadeService"],
            src_app_core_modules_services_profile_profile_facade_profile_facade_service__WEBPACK_IMPORTED_MODULE_4__["UserFacadeService"],
            src_app_core_modules_services_categories_category_facade_category_facade_service__WEBPACK_IMPORTED_MODULE_3__["CategoryFacadeService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"],
            src_app_core_modules_services_products_product_api_product_api_service__WEBPACK_IMPORTED_MODULE_7__["ProductApiService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"]])
    ], ProductsComponent);
    return ProductsComponent;
}());



/***/ }),

/***/ "./src/app/modules/admin-store/pages/products/modals/product-view-modal/product-view-modal.component.scss":
/*!****************************************************************************************************************!*\
  !*** ./src/app/modules/admin-store/pages/products/modals/product-view-modal/product-view-modal.component.scss ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4tc3RvcmUvcGFnZXMvcHJvZHVjdHMvbW9kYWxzL3Byb2R1Y3Qtdmlldy1tb2RhbC9wcm9kdWN0LXZpZXctbW9kYWwuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/admin-store/pages/products/modals/product-view-modal/product-view-modal.component.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/modules/admin-store/pages/products/modals/product-view-modal/product-view-modal.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: ProductViewModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductViewModalComponent", function() { return ProductViewModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var src_app_core_modules_services_products_product_api_product_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core-modules/services/products/product-api/product-api.service */ "./src/app/core-modules/services/products/product-api/product-api.service.ts");



var ProductViewModalComponent = /** @class */ (function () {
    function ProductViewModalComponent(productApi) {
        this.productApi = productApi;
    }
    ProductViewModalComponent.prototype.ngOnInit = function () {
        console.log(this.data);
    };
    ProductViewModalComponent.prototype.replacePicture = function () {
        //upload new image
        //update product
        //delete cloudinary image
        //this.deleteCloudImage(Image_data);
    };
    ProductViewModalComponent.prototype.deleteCloudImage = function (data) {
        this.productApi.deleteCloudImage(data).subscribe(function (res) {
            console.log(res);
        }, function (err) {
            console.log(err);
        });
    };
    ProductViewModalComponent.ctorParameters = function () { return [
        { type: src_app_core_modules_services_products_product_api_product_api_service__WEBPACK_IMPORTED_MODULE_2__["ProductApiService"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], ProductViewModalComponent.prototype, "data", void 0);
    ProductViewModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-product-view-modal",
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./product-view-modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin-store/pages/products/modals/product-view-modal/product-view-modal.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./product-view-modal.component.scss */ "./src/app/modules/admin-store/pages/products/modals/product-view-modal/product-view-modal.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_core_modules_services_products_product_api_product_api_service__WEBPACK_IMPORTED_MODULE_2__["ProductApiService"]])
    ], ProductViewModalComponent);
    return ProductViewModalComponent;
}());



/***/ })

}]);
//# sourceMappingURL=default~src-app-modules-admin-store-pages-products-product-addition-product-addition-module~src-app-~5bc0bd2b.js.map