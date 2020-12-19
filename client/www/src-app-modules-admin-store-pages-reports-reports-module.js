(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-modules-admin-store-pages-reports-reports-module"],{

/***/ "./node_modules/chartjs-plugin-datalabels/dist/chartjs-plugin-datalabels.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/chartjs-plugin-datalabels/dist/chartjs-plugin-datalabels.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * chartjs-plugin-datalabels v0.7.0
 * https://chartjs-plugin-datalabels.netlify.com
 * (c) 2019 Chart.js Contributors
 * Released under the MIT license
 */
(function (global, factory) {
 true ? module.exports = factory(__webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/Chart.js")) :
undefined;
}(this, function (Chart) { 'use strict';

Chart = Chart && Chart.hasOwnProperty('default') ? Chart['default'] : Chart;

var helpers = Chart.helpers;

var devicePixelRatio = (function() {
	if (typeof window !== 'undefined') {
		if (window.devicePixelRatio) {
			return window.devicePixelRatio;
		}

		// devicePixelRatio is undefined on IE10
		// https://stackoverflow.com/a/20204180/8837887
		// https://github.com/chartjs/chartjs-plugin-datalabels/issues/85
		var screen = window.screen;
		if (screen) {
			return (screen.deviceXDPI || 1) / (screen.logicalXDPI || 1);
		}
	}

	return 1;
}());

var utils = {
	// @todo move this in Chart.helpers.toTextLines
	toTextLines: function(inputs) {
		var lines = [];
		var input;

		inputs = [].concat(inputs);
		while (inputs.length) {
			input = inputs.pop();
			if (typeof input === 'string') {
				lines.unshift.apply(lines, input.split('\n'));
			} else if (Array.isArray(input)) {
				inputs.push.apply(inputs, input);
			} else if (!helpers.isNullOrUndef(inputs)) {
				lines.unshift('' + input);
			}
		}

		return lines;
	},

	// @todo move this method in Chart.helpers.canvas.toFont (deprecates helpers.fontString)
	// @see https://developer.mozilla.org/en-US/docs/Web/CSS/font
	toFontString: function(font) {
		if (!font || helpers.isNullOrUndef(font.size) || helpers.isNullOrUndef(font.family)) {
			return null;
		}

		return (font.style ? font.style + ' ' : '')
			+ (font.weight ? font.weight + ' ' : '')
			+ font.size + 'px '
			+ font.family;
	},

	// @todo move this in Chart.helpers.canvas.textSize
	// @todo cache calls of measureText if font doesn't change?!
	textSize: function(ctx, lines, font) {
		var items = [].concat(lines);
		var ilen = items.length;
		var prev = ctx.font;
		var width = 0;
		var i;

		ctx.font = font.string;

		for (i = 0; i < ilen; ++i) {
			width = Math.max(ctx.measureText(items[i]).width, width);
		}

		ctx.font = prev;

		return {
			height: ilen * font.lineHeight,
			width: width
		};
	},

	// @todo move this method in Chart.helpers.options.toFont
	parseFont: function(value) {
		var global = Chart.defaults.global;
		var size = helpers.valueOrDefault(value.size, global.defaultFontSize);
		var font = {
			family: helpers.valueOrDefault(value.family, global.defaultFontFamily),
			lineHeight: helpers.options.toLineHeight(value.lineHeight, size),
			size: size,
			style: helpers.valueOrDefault(value.style, global.defaultFontStyle),
			weight: helpers.valueOrDefault(value.weight, null),
			string: ''
		};

		font.string = utils.toFontString(font);
		return font;
	},

	/**
	 * Returns value bounded by min and max. This is equivalent to max(min, min(value, max)).
	 * @todo move this method in Chart.helpers.bound
	 * https://doc.qt.io/qt-5/qtglobal.html#qBound
	 */
	bound: function(min, value, max) {
		return Math.max(min, Math.min(value, max));
	},

	/**
	 * Returns an array of pair [value, state] where state is:
	 * * -1: value is only in a0 (removed)
	 * *  1: value is only in a1 (added)
	 */
	arrayDiff: function(a0, a1) {
		var prev = a0.slice();
		var updates = [];
		var i, j, ilen, v;

		for (i = 0, ilen = a1.length; i < ilen; ++i) {
			v = a1[i];
			j = prev.indexOf(v);

			if (j === -1) {
				updates.push([v, 1]);
			} else {
				prev.splice(j, 1);
			}
		}

		for (i = 0, ilen = prev.length; i < ilen; ++i) {
			updates.push([prev[i], -1]);
		}

		return updates;
	},

	/**
	 * https://github.com/chartjs/chartjs-plugin-datalabels/issues/70
	 */
	rasterize: function(v) {
		return Math.round(v * devicePixelRatio) / devicePixelRatio;
	}
};

function orient(point, origin) {
	var x0 = origin.x;
	var y0 = origin.y;

	if (x0 === null) {
		return {x: 0, y: -1};
	}
	if (y0 === null) {
		return {x: 1, y: 0};
	}

	var dx = point.x - x0;
	var dy = point.y - y0;
	var ln = Math.sqrt(dx * dx + dy * dy);

	return {
		x: ln ? dx / ln : 0,
		y: ln ? dy / ln : -1
	};
}

function aligned(x, y, vx, vy, align) {
	switch (align) {
	case 'center':
		vx = vy = 0;
		break;
	case 'bottom':
		vx = 0;
		vy = 1;
		break;
	case 'right':
		vx = 1;
		vy = 0;
		break;
	case 'left':
		vx = -1;
		vy = 0;
		break;
	case 'top':
		vx = 0;
		vy = -1;
		break;
	case 'start':
		vx = -vx;
		vy = -vy;
		break;
	case 'end':
		// keep natural orientation
		break;
	default:
		// clockwise rotation (in degree)
		align *= (Math.PI / 180);
		vx = Math.cos(align);
		vy = Math.sin(align);
		break;
	}

	return {
		x: x,
		y: y,
		vx: vx,
		vy: vy
	};
}

// Line clipping (Cohen–Sutherland algorithm)
// https://en.wikipedia.org/wiki/Cohen–Sutherland_algorithm

var R_INSIDE = 0;
var R_LEFT = 1;
var R_RIGHT = 2;
var R_BOTTOM = 4;
var R_TOP = 8;

function region(x, y, rect) {
	var res = R_INSIDE;

	if (x < rect.left) {
		res |= R_LEFT;
	} else if (x > rect.right) {
		res |= R_RIGHT;
	}
	if (y < rect.top) {
		res |= R_TOP;
	} else if (y > rect.bottom) {
		res |= R_BOTTOM;
	}

	return res;
}

function clipped(segment, area) {
	var x0 = segment.x0;
	var y0 = segment.y0;
	var x1 = segment.x1;
	var y1 = segment.y1;
	var r0 = region(x0, y0, area);
	var r1 = region(x1, y1, area);
	var r, x, y;

	// eslint-disable-next-line no-constant-condition
	while (true) {
		if (!(r0 | r1) || (r0 & r1)) {
			// both points inside or on the same side: no clipping
			break;
		}

		// at least one point is outside
		r = r0 || r1;

		if (r & R_TOP) {
			x = x0 + (x1 - x0) * (area.top - y0) / (y1 - y0);
			y = area.top;
		} else if (r & R_BOTTOM) {
			x = x0 + (x1 - x0) * (area.bottom - y0) / (y1 - y0);
			y = area.bottom;
		} else if (r & R_RIGHT) {
			y = y0 + (y1 - y0) * (area.right - x0) / (x1 - x0);
			x = area.right;
		} else if (r & R_LEFT) {
			y = y0 + (y1 - y0) * (area.left - x0) / (x1 - x0);
			x = area.left;
		}

		if (r === r0) {
			x0 = x;
			y0 = y;
			r0 = region(x0, y0, area);
		} else {
			x1 = x;
			y1 = y;
			r1 = region(x1, y1, area);
		}
	}

	return {
		x0: x0,
		x1: x1,
		y0: y0,
		y1: y1
	};
}

function compute(range, config) {
	var anchor = config.anchor;
	var segment = range;
	var x, y;

	if (config.clamp) {
		segment = clipped(segment, config.area);
	}

	if (anchor === 'start') {
		x = segment.x0;
		y = segment.y0;
	} else if (anchor === 'end') {
		x = segment.x1;
		y = segment.y1;
	} else {
		x = (segment.x0 + segment.x1) / 2;
		y = (segment.y0 + segment.y1) / 2;
	}

	return aligned(x, y, range.vx, range.vy, config.align);
}

var positioners = {
	arc: function(vm, config) {
		var angle = (vm.startAngle + vm.endAngle) / 2;
		var vx = Math.cos(angle);
		var vy = Math.sin(angle);
		var r0 = vm.innerRadius;
		var r1 = vm.outerRadius;

		return compute({
			x0: vm.x + vx * r0,
			y0: vm.y + vy * r0,
			x1: vm.x + vx * r1,
			y1: vm.y + vy * r1,
			vx: vx,
			vy: vy
		}, config);
	},

	point: function(vm, config) {
		var v = orient(vm, config.origin);
		var rx = v.x * vm.radius;
		var ry = v.y * vm.radius;

		return compute({
			x0: vm.x - rx,
			y0: vm.y - ry,
			x1: vm.x + rx,
			y1: vm.y + ry,
			vx: v.x,
			vy: v.y
		}, config);
	},

	rect: function(vm, config) {
		var v = orient(vm, config.origin);
		var x = vm.x;
		var y = vm.y;
		var sx = 0;
		var sy = 0;

		if (vm.horizontal) {
			x = Math.min(vm.x, vm.base);
			sx = Math.abs(vm.base - vm.x);
		} else {
			y = Math.min(vm.y, vm.base);
			sy = Math.abs(vm.base - vm.y);
		}

		return compute({
			x0: x,
			y0: y + sy,
			x1: x + sx,
			y1: y,
			vx: v.x,
			vy: v.y
		}, config);
	},

	fallback: function(vm, config) {
		var v = orient(vm, config.origin);

		return compute({
			x0: vm.x,
			y0: vm.y,
			x1: vm.x,
			y1: vm.y,
			vx: v.x,
			vy: v.y
		}, config);
	}
};

var helpers$1 = Chart.helpers;
var rasterize = utils.rasterize;

function boundingRects(model) {
	var borderWidth = model.borderWidth || 0;
	var padding = model.padding;
	var th = model.size.height;
	var tw = model.size.width;
	var tx = -tw / 2;
	var ty = -th / 2;

	return {
		frame: {
			x: tx - padding.left - borderWidth,
			y: ty - padding.top - borderWidth,
			w: tw + padding.width + borderWidth * 2,
			h: th + padding.height + borderWidth * 2
		},
		text: {
			x: tx,
			y: ty,
			w: tw,
			h: th
		}
	};
}

function getScaleOrigin(el) {
	var horizontal = el._model.horizontal;
	var scale = el._scale || (horizontal && el._xScale) || el._yScale;

	if (!scale) {
		return null;
	}

	if (scale.xCenter !== undefined && scale.yCenter !== undefined) {
		return {x: scale.xCenter, y: scale.yCenter};
	}

	var pixel = scale.getBasePixel();
	return horizontal ?
		{x: pixel, y: null} :
		{x: null, y: pixel};
}

function getPositioner(el) {
	if (el instanceof Chart.elements.Arc) {
		return positioners.arc;
	}
	if (el instanceof Chart.elements.Point) {
		return positioners.point;
	}
	if (el instanceof Chart.elements.Rectangle) {
		return positioners.rect;
	}
	return positioners.fallback;
}

function drawFrame(ctx, rect, model) {
	var bgColor = model.backgroundColor;
	var borderColor = model.borderColor;
	var borderWidth = model.borderWidth;

	if (!bgColor && (!borderColor || !borderWidth)) {
		return;
	}

	ctx.beginPath();

	helpers$1.canvas.roundedRect(
		ctx,
		rasterize(rect.x) + borderWidth / 2,
		rasterize(rect.y) + borderWidth / 2,
		rasterize(rect.w) - borderWidth,
		rasterize(rect.h) - borderWidth,
		model.borderRadius);

	ctx.closePath();

	if (bgColor) {
		ctx.fillStyle = bgColor;
		ctx.fill();
	}

	if (borderColor && borderWidth) {
		ctx.strokeStyle = borderColor;
		ctx.lineWidth = borderWidth;
		ctx.lineJoin = 'miter';
		ctx.stroke();
	}
}

function textGeometry(rect, align, font) {
	var h = font.lineHeight;
	var w = rect.w;
	var x = rect.x;
	var y = rect.y + h / 2;

	if (align === 'center') {
		x += w / 2;
	} else if (align === 'end' || align === 'right') {
		x += w;
	}

	return {
		h: h,
		w: w,
		x: x,
		y: y
	};
}

function drawTextLine(ctx, text, cfg) {
	var shadow = ctx.shadowBlur;
	var stroked = cfg.stroked;
	var x = rasterize(cfg.x);
	var y = rasterize(cfg.y);
	var w = rasterize(cfg.w);

	if (stroked) {
		ctx.strokeText(text, x, y, w);
	}

	if (cfg.filled) {
		if (shadow && stroked) {
			// Prevent drawing shadow on both the text stroke and fill, so
			// if the text is stroked, remove the shadow for the text fill.
			ctx.shadowBlur = 0;
		}

		ctx.fillText(text, x, y, w);

		if (shadow && stroked) {
			ctx.shadowBlur = shadow;
		}
	}
}

function drawText(ctx, lines, rect, model) {
	var align = model.textAlign;
	var color = model.color;
	var filled = !!color;
	var font = model.font;
	var ilen = lines.length;
	var strokeColor = model.textStrokeColor;
	var strokeWidth = model.textStrokeWidth;
	var stroked = strokeColor && strokeWidth;
	var i;

	if (!ilen || (!filled && !stroked)) {
		return;
	}

	// Adjust coordinates based on text alignment and line height
	rect = textGeometry(rect, align, font);

	ctx.font = font.string;
	ctx.textAlign = align;
	ctx.textBaseline = 'middle';
	ctx.shadowBlur = model.textShadowBlur;
	ctx.shadowColor = model.textShadowColor;

	if (filled) {
		ctx.fillStyle = color;
	}
	if (stroked) {
		ctx.lineJoin = 'round';
		ctx.lineWidth = strokeWidth;
		ctx.strokeStyle = strokeColor;
	}

	for (i = 0, ilen = lines.length; i < ilen; ++i) {
		drawTextLine(ctx, lines[i], {
			stroked: stroked,
			filled: filled,
			w: rect.w,
			x: rect.x,
			y: rect.y + rect.h * i
		});
	}
}

var Label = function(config, ctx, el, index) {
	var me = this;

	me._config = config;
	me._index = index;
	me._model = null;
	me._rects = null;
	me._ctx = ctx;
	me._el = el;
};

helpers$1.extend(Label.prototype, {
	/**
	 * @private
	 */
	_modelize: function(display, lines, config, context) {
		var me = this;
		var index = me._index;
		var resolve = helpers$1.options.resolve;
		var font = utils.parseFont(resolve([config.font, {}], context, index));
		var color = resolve([config.color, Chart.defaults.global.defaultFontColor], context, index);

		return {
			align: resolve([config.align, 'center'], context, index),
			anchor: resolve([config.anchor, 'center'], context, index),
			area: context.chart.chartArea,
			backgroundColor: resolve([config.backgroundColor, null], context, index),
			borderColor: resolve([config.borderColor, null], context, index),
			borderRadius: resolve([config.borderRadius, 0], context, index),
			borderWidth: resolve([config.borderWidth, 0], context, index),
			clamp: resolve([config.clamp, false], context, index),
			clip: resolve([config.clip, false], context, index),
			color: color,
			display: display,
			font: font,
			lines: lines,
			offset: resolve([config.offset, 0], context, index),
			opacity: resolve([config.opacity, 1], context, index),
			origin: getScaleOrigin(me._el),
			padding: helpers$1.options.toPadding(resolve([config.padding, 0], context, index)),
			positioner: getPositioner(me._el),
			rotation: resolve([config.rotation, 0], context, index) * (Math.PI / 180),
			size: utils.textSize(me._ctx, lines, font),
			textAlign: resolve([config.textAlign, 'start'], context, index),
			textShadowBlur: resolve([config.textShadowBlur, 0], context, index),
			textShadowColor: resolve([config.textShadowColor, color], context, index),
			textStrokeColor: resolve([config.textStrokeColor, color], context, index),
			textStrokeWidth: resolve([config.textStrokeWidth, 0], context, index)
		};
	},

	update: function(context) {
		var me = this;
		var model = null;
		var rects = null;
		var index = me._index;
		var config = me._config;
		var value, label, lines;

		// We first resolve the display option (separately) to avoid computing
		// other options in case the label is hidden (i.e. display: false).
		var display = helpers$1.options.resolve([config.display, true], context, index);

		if (display) {
			value = context.dataset.data[index];
			label = helpers$1.valueOrDefault(helpers$1.callback(config.formatter, [value, context]), value);
			lines = helpers$1.isNullOrUndef(label) ? [] : utils.toTextLines(label);

			if (lines.length) {
				model = me._modelize(display, lines, config, context);
				rects = boundingRects(model);
			}
		}

		me._model = model;
		me._rects = rects;
	},

	geometry: function() {
		return this._rects ? this._rects.frame : {};
	},

	rotation: function() {
		return this._model ? this._model.rotation : 0;
	},

	visible: function() {
		return this._model && this._model.opacity;
	},

	model: function() {
		return this._model;
	},

	draw: function(chart, center) {
		var me = this;
		var ctx = chart.ctx;
		var model = me._model;
		var rects = me._rects;
		var area;

		if (!this.visible()) {
			return;
		}

		ctx.save();

		if (model.clip) {
			area = model.area;
			ctx.beginPath();
			ctx.rect(
				area.left,
				area.top,
				area.right - area.left,
				area.bottom - area.top);
			ctx.clip();
		}

		ctx.globalAlpha = utils.bound(0, model.opacity, 1);
		ctx.translate(rasterize(center.x), rasterize(center.y));
		ctx.rotate(model.rotation);

		drawFrame(ctx, rects.frame, model);
		drawText(ctx, model.lines, rects.text, model);

		ctx.restore();
	}
});

var helpers$2 = Chart.helpers;

var MIN_INTEGER = Number.MIN_SAFE_INTEGER || -9007199254740991; // eslint-disable-line es/no-number-minsafeinteger
var MAX_INTEGER = Number.MAX_SAFE_INTEGER || 9007199254740991;  // eslint-disable-line es/no-number-maxsafeinteger

function rotated(point, center, angle) {
	var cos = Math.cos(angle);
	var sin = Math.sin(angle);
	var cx = center.x;
	var cy = center.y;

	return {
		x: cx + cos * (point.x - cx) - sin * (point.y - cy),
		y: cy + sin * (point.x - cx) + cos * (point.y - cy)
	};
}

function projected(points, axis) {
	var min = MAX_INTEGER;
	var max = MIN_INTEGER;
	var origin = axis.origin;
	var i, pt, vx, vy, dp;

	for (i = 0; i < points.length; ++i) {
		pt = points[i];
		vx = pt.x - origin.x;
		vy = pt.y - origin.y;
		dp = axis.vx * vx + axis.vy * vy;
		min = Math.min(min, dp);
		max = Math.max(max, dp);
	}

	return {
		min: min,
		max: max
	};
}

function toAxis(p0, p1) {
	var vx = p1.x - p0.x;
	var vy = p1.y - p0.y;
	var ln = Math.sqrt(vx * vx + vy * vy);

	return {
		vx: (p1.x - p0.x) / ln,
		vy: (p1.y - p0.y) / ln,
		origin: p0,
		ln: ln
	};
}

var HitBox = function() {
	this._rotation = 0;
	this._rect = {
		x: 0,
		y: 0,
		w: 0,
		h: 0
	};
};

helpers$2.extend(HitBox.prototype, {
	center: function() {
		var r = this._rect;
		return {
			x: r.x + r.w / 2,
			y: r.y + r.h / 2
		};
	},

	update: function(center, rect, rotation) {
		this._rotation = rotation;
		this._rect = {
			x: rect.x + center.x,
			y: rect.y + center.y,
			w: rect.w,
			h: rect.h
		};
	},

	contains: function(point) {
		var me = this;
		var margin = 1;
		var rect = me._rect;

		point = rotated(point, me.center(), -me._rotation);

		return !(point.x < rect.x - margin
			|| point.y < rect.y - margin
			|| point.x > rect.x + rect.w + margin * 2
			|| point.y > rect.y + rect.h + margin * 2);
	},

	// Separating Axis Theorem
	// https://gamedevelopment.tutsplus.com/tutorials/collision-detection-using-the-separating-axis-theorem--gamedev-169
	intersects: function(other) {
		var r0 = this._points();
		var r1 = other._points();
		var axes = [
			toAxis(r0[0], r0[1]),
			toAxis(r0[0], r0[3])
		];
		var i, pr0, pr1;

		if (this._rotation !== other._rotation) {
			// Only separate with r1 axis if the rotation is different,
			// else it's enough to separate r0 and r1 with r0 axis only!
			axes.push(
				toAxis(r1[0], r1[1]),
				toAxis(r1[0], r1[3])
			);
		}

		for (i = 0; i < axes.length; ++i) {
			pr0 = projected(r0, axes[i]);
			pr1 = projected(r1, axes[i]);

			if (pr0.max < pr1.min || pr1.max < pr0.min) {
				return false;
			}
		}

		return true;
	},

	/**
	 * @private
	 */
	_points: function() {
		var me = this;
		var rect = me._rect;
		var angle = me._rotation;
		var center = me.center();

		return [
			rotated({x: rect.x, y: rect.y}, center, angle),
			rotated({x: rect.x + rect.w, y: rect.y}, center, angle),
			rotated({x: rect.x + rect.w, y: rect.y + rect.h}, center, angle),
			rotated({x: rect.x, y: rect.y + rect.h}, center, angle)
		];
	}
});

function coordinates(view, model, geometry) {
	var point = model.positioner(view, model);
	var vx = point.vx;
	var vy = point.vy;

	if (!vx && !vy) {
		// if aligned center, we don't want to offset the center point
		return {x: point.x, y: point.y};
	}

	var w = geometry.w;
	var h = geometry.h;

	// take in account the label rotation
	var rotation = model.rotation;
	var dx = Math.abs(w / 2 * Math.cos(rotation)) + Math.abs(h / 2 * Math.sin(rotation));
	var dy = Math.abs(w / 2 * Math.sin(rotation)) + Math.abs(h / 2 * Math.cos(rotation));

	// scale the unit vector (vx, vy) to get at least dx or dy equal to
	// w or h respectively (else we would calculate the distance to the
	// ellipse inscribed in the bounding rect)
	var vs = 1 / Math.max(Math.abs(vx), Math.abs(vy));
	dx *= vx * vs;
	dy *= vy * vs;

	// finally, include the explicit offset
	dx += model.offset * vx;
	dy += model.offset * vy;

	return {
		x: point.x + dx,
		y: point.y + dy
	};
}

function collide(labels, collider) {
	var i, j, s0, s1;

	// IMPORTANT Iterate in the reverse order since items at the end of the
	// list have an higher weight/priority and thus should be less impacted
	// by the overlapping strategy.

	for (i = labels.length - 1; i >= 0; --i) {
		s0 = labels[i].$layout;

		for (j = i - 1; j >= 0 && s0._visible; --j) {
			s1 = labels[j].$layout;

			if (s1._visible && s0._box.intersects(s1._box)) {
				collider(s0, s1);
			}
		}
	}

	return labels;
}

function compute$1(labels) {
	var i, ilen, label, state, geometry, center;

	// Initialize labels for overlap detection
	for (i = 0, ilen = labels.length; i < ilen; ++i) {
		label = labels[i];
		state = label.$layout;

		if (state._visible) {
			geometry = label.geometry();
			center = coordinates(label._el._model, label.model(), geometry);
			state._box.update(center, geometry, label.rotation());
		}
	}

	// Auto hide overlapping labels
	return collide(labels, function(s0, s1) {
		var h0 = s0._hidable;
		var h1 = s1._hidable;

		if ((h0 && h1) || h1) {
			s1._visible = false;
		} else if (h0) {
			s0._visible = false;
		}
	});
}

var layout = {
	prepare: function(datasets) {
		var labels = [];
		var i, j, ilen, jlen, label;

		for (i = 0, ilen = datasets.length; i < ilen; ++i) {
			for (j = 0, jlen = datasets[i].length; j < jlen; ++j) {
				label = datasets[i][j];
				labels.push(label);
				label.$layout = {
					_box: new HitBox(),
					_hidable: false,
					_visible: true,
					_set: i,
					_idx: j
				};
			}
		}

		// TODO New `z` option: labels with a higher z-index are drawn
		// of top of the ones with a lower index. Lowest z-index labels
		// are also discarded first when hiding overlapping labels.
		labels.sort(function(a, b) {
			var sa = a.$layout;
			var sb = b.$layout;

			return sa._idx === sb._idx
				? sb._set - sa._set
				: sb._idx - sa._idx;
		});

		this.update(labels);

		return labels;
	},

	update: function(labels) {
		var dirty = false;
		var i, ilen, label, model, state;

		for (i = 0, ilen = labels.length; i < ilen; ++i) {
			label = labels[i];
			model = label.model();
			state = label.$layout;
			state._hidable = model && model.display === 'auto';
			state._visible = label.visible();
			dirty |= state._hidable;
		}

		if (dirty) {
			compute$1(labels);
		}
	},

	lookup: function(labels, point) {
		var i, state;

		// IMPORTANT Iterate in the reverse order since items at the end of
		// the list have an higher z-index, thus should be picked first.

		for (i = labels.length - 1; i >= 0; --i) {
			state = labels[i].$layout;

			if (state && state._visible && state._box.contains(point)) {
				return labels[i];
			}
		}

		return null;
	},

	draw: function(chart, labels) {
		var i, ilen, label, state, geometry, center;

		for (i = 0, ilen = labels.length; i < ilen; ++i) {
			label = labels[i];
			state = label.$layout;

			if (state._visible) {
				geometry = label.geometry();
				center = coordinates(label._el._view, label.model(), geometry);
				state._box.update(center, geometry, label.rotation());
				label.draw(chart, center);
			}
		}
	}
};

var helpers$3 = Chart.helpers;

var formatter = function(value) {
	if (helpers$3.isNullOrUndef(value)) {
		return null;
	}

	var label = value;
	var keys, klen, k;
	if (helpers$3.isObject(value)) {
		if (!helpers$3.isNullOrUndef(value.label)) {
			label = value.label;
		} else if (!helpers$3.isNullOrUndef(value.r)) {
			label = value.r;
		} else {
			label = '';
			keys = Object.keys(value);
			for (k = 0, klen = keys.length; k < klen; ++k) {
				label += (k !== 0 ? ', ' : '') + keys[k] + ': ' + value[keys[k]];
			}
		}
	}

	return '' + label;
};

/**
 * IMPORTANT: make sure to also update tests and TypeScript definition
 * files (`/test/specs/defaults.spec.js` and `/types/options.d.ts`)
 */

var defaults = {
	align: 'center',
	anchor: 'center',
	backgroundColor: null,
	borderColor: null,
	borderRadius: 0,
	borderWidth: 0,
	clamp: false,
	clip: false,
	color: undefined,
	display: true,
	font: {
		family: undefined,
		lineHeight: 1.2,
		size: undefined,
		style: undefined,
		weight: null
	},
	formatter: formatter,
	labels: undefined,
	listeners: {},
	offset: 4,
	opacity: 1,
	padding: {
		top: 4,
		right: 4,
		bottom: 4,
		left: 4
	},
	rotation: 0,
	textAlign: 'start',
	textStrokeColor: undefined,
	textStrokeWidth: 0,
	textShadowBlur: 0,
	textShadowColor: undefined
};

/**
 * @see https://github.com/chartjs/Chart.js/issues/4176
 */

var helpers$4 = Chart.helpers;
var EXPANDO_KEY = '$datalabels';
var DEFAULT_KEY = '$default';

function configure(dataset, options) {
	var override = dataset.datalabels;
	var listeners = {};
	var configs = [];
	var labels, keys;

	if (override === false) {
		return null;
	}
	if (override === true) {
		override = {};
	}

	options = helpers$4.merge({}, [options, override]);
	labels = options.labels || {};
	keys = Object.keys(labels);
	delete options.labels;

	if (keys.length) {
		keys.forEach(function(key) {
			if (labels[key]) {
				configs.push(helpers$4.merge({}, [
					options,
					labels[key],
					{_key: key}
				]));
			}
		});
	} else {
		// Default label if no "named" label defined.
		configs.push(options);
	}

	// listeners: {<event-type>: {<label-key>: <fn>}}
	listeners = configs.reduce(function(target, config) {
		helpers$4.each(config.listeners || {}, function(fn, event) {
			target[event] = target[event] || {};
			target[event][config._key || DEFAULT_KEY] = fn;
		});

		delete config.listeners;
		return target;
	}, {});

	return {
		labels: configs,
		listeners: listeners
	};
}

function dispatchEvent(chart, listeners, label) {
	if (!listeners) {
		return;
	}

	var context = label.$context;
	var groups = label.$groups;
	var callback;

	if (!listeners[groups._set]) {
		return;
	}

	callback = listeners[groups._set][groups._key];
	if (!callback) {
		return;
	}

	if (helpers$4.callback(callback, [context]) === true) {
		// Users are allowed to tweak the given context by injecting values that can be
		// used in scriptable options to display labels differently based on the current
		// event (e.g. highlight an hovered label). That's why we update the label with
		// the output context and schedule a new chart render by setting it dirty.
		chart[EXPANDO_KEY]._dirty = true;
		label.update(context);
	}
}

function dispatchMoveEvents(chart, listeners, previous, label) {
	var enter, leave;

	if (!previous && !label) {
		return;
	}

	if (!previous) {
		enter = true;
	} else if (!label) {
		leave = true;
	} else if (previous !== label) {
		leave = enter = true;
	}

	if (leave) {
		dispatchEvent(chart, listeners.leave, previous);
	}
	if (enter) {
		dispatchEvent(chart, listeners.enter, label);
	}
}

function handleMoveEvents(chart, event) {
	var expando = chart[EXPANDO_KEY];
	var listeners = expando._listeners;
	var previous, label;

	if (!listeners.enter && !listeners.leave) {
		return;
	}

	if (event.type === 'mousemove') {
		label = layout.lookup(expando._labels, event);
	} else if (event.type !== 'mouseout') {
		return;
	}

	previous = expando._hovered;
	expando._hovered = label;
	dispatchMoveEvents(chart, listeners, previous, label);
}

function handleClickEvents(chart, event) {
	var expando = chart[EXPANDO_KEY];
	var handlers = expando._listeners.click;
	var label = handlers && layout.lookup(expando._labels, event);
	if (label) {
		dispatchEvent(chart, handlers, label);
	}
}

// https://github.com/chartjs/chartjs-plugin-datalabels/issues/108
function invalidate(chart) {
	if (chart.animating) {
		return;
	}

	// `chart.animating` can be `false` even if there is animation in progress,
	// so let's iterate all animations to find if there is one for the `chart`.
	var animations = Chart.animationService.animations;
	for (var i = 0, ilen = animations.length; i < ilen; ++i) {
		if (animations[i].chart === chart) {
			return;
		}
	}

	// No render scheduled: trigger a "lazy" render that can be canceled in case
	// of hover interactions. The 1ms duration is a workaround to make sure an
	// animation is created so the controller can stop it before any transition.
	chart.render({duration: 1, lazy: true});
}

Chart.defaults.global.plugins.datalabels = defaults;

var plugin = {
	id: 'datalabels',

	beforeInit: function(chart) {
		chart[EXPANDO_KEY] = {
			_actives: []
		};
	},

	beforeUpdate: function(chart) {
		var expando = chart[EXPANDO_KEY];
		expando._listened = false;
		expando._listeners = {};     // {<event-type>: {<dataset-index>: {<label-key>: <fn>}}}
		expando._datasets = [];      // per dataset labels: [Label[]]
		expando._labels = [];        // layouted labels: Label[]
	},

	afterDatasetUpdate: function(chart, args, options) {
		var datasetIndex = args.index;
		var expando = chart[EXPANDO_KEY];
		var labels = expando._datasets[datasetIndex] = [];
		var visible = chart.isDatasetVisible(datasetIndex);
		var dataset = chart.data.datasets[datasetIndex];
		var config = configure(dataset, options);
		var elements = args.meta.data || [];
		var ctx = chart.ctx;
		var i, j, ilen, jlen, cfg, key, el, label;

		ctx.save();

		for (i = 0, ilen = elements.length; i < ilen; ++i) {
			el = elements[i];
			el[EXPANDO_KEY] = [];

			if (visible && el && !el.hidden && !el._model.skip) {
				for (j = 0, jlen = config.labels.length; j < jlen; ++j) {
					cfg = config.labels[j];
					key = cfg._key;

					label = new Label(cfg, ctx, el, i);
					label.$groups = {
						_set: datasetIndex,
						_key: key || DEFAULT_KEY
					};
					label.$context = {
						active: false,
						chart: chart,
						dataIndex: i,
						dataset: dataset,
						datasetIndex: datasetIndex
					};

					label.update(label.$context);
					el[EXPANDO_KEY].push(label);
					labels.push(label);
				}
			}
		}

		ctx.restore();

		// Store listeners at the chart level and per event type to optimize
		// cases where no listeners are registered for a specific event.
		helpers$4.merge(expando._listeners, config.listeners, {
			merger: function(event, target, source) {
				target[event] = target[event] || {};
				target[event][args.index] = source[event];
				expando._listened = true;
			}
		});
	},

	afterUpdate: function(chart, options) {
		chart[EXPANDO_KEY]._labels = layout.prepare(
			chart[EXPANDO_KEY]._datasets,
			options);
	},

	// Draw labels on top of all dataset elements
	// https://github.com/chartjs/chartjs-plugin-datalabels/issues/29
	// https://github.com/chartjs/chartjs-plugin-datalabels/issues/32
	afterDatasetsDraw: function(chart) {
		layout.draw(chart, chart[EXPANDO_KEY]._labels);
	},

	beforeEvent: function(chart, event) {
		// If there is no listener registered for this chart, `listened` will be false,
		// meaning we can immediately ignore the incoming event and avoid useless extra
		// computation for users who don't implement label interactions.
		if (chart[EXPANDO_KEY]._listened) {
			switch (event.type) {
			case 'mousemove':
			case 'mouseout':
				handleMoveEvents(chart, event);
				break;
			case 'click':
				handleClickEvents(chart, event);
				break;
			default:
			}
		}
	},

	afterEvent: function(chart) {
		var expando = chart[EXPANDO_KEY];
		var previous = expando._actives;
		var actives = expando._actives = chart.lastActive || [];  // public API?!
		var updates = utils.arrayDiff(previous, actives);
		var i, ilen, j, jlen, update, label, labels;

		for (i = 0, ilen = updates.length; i < ilen; ++i) {
			update = updates[i];
			if (update[1]) {
				labels = update[0][EXPANDO_KEY] || [];
				for (j = 0, jlen = labels.length; j < jlen; ++j) {
					label = labels[j];
					label.$context.active = (update[1] === 1);
					label.update(label.$context);
				}
			}
		}

		if (expando._dirty || updates.length) {
			layout.update(expando._labels);
			invalidate(chart);
		}

		delete expando._dirty;
	}
};

// TODO Remove at version 1, we shouldn't automatically register plugins.
// https://github.com/chartjs/chartjs-plugin-datalabels/issues/42
Chart.plugins.register(plugin);

return plugin;

}));


/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin-store/pages/reports/reports-components/bar-chart/bar-chart.component.html":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin-store/pages/reports/reports-components/bar-chart/bar-chart.component.html ***!
  \***********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n  <div>\n    <div>\n      <canvas baseChart\n      style=\"height: 80vh; width: 80vw\"\n        [data]=\"doughnutChartData\"\n        [labels]=\"doughnutChartLabels\"\n         [colors] =\"chartColors\"\n        [chartType]=\"doughnutChartType\">\n\n      </canvas>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin-store/pages/reports/reports-components/dynamic-chart/dynamic-chart.component.html":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin-store/pages/reports/reports-components/dynamic-chart/dynamic-chart.component.html ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n  <div>\n    <div>\n      <div style=\"display: block\">\n        <canvas baseChart [datasets]=\"barChartData\" [labels]=\"barChartLabels\" [options]=\"barChartOptions\"\n          [legend]=\"barChartLegend\" [chartType]=\"barChartType\" (chartHover)=\"chartHovered($event)\"\n          (chartClick)=\"chartClicked($event)\"\n          \t  style=\"width: 80vw;height: 80vh\"\n             [colors]=\"barChartColors\"\n          ></canvas>\n      </div>\n      <button mat-button mat-raised-button color=\"primary\" (click)=\"randomize()\">Update</button>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin-store/pages/reports/reports-components/line-chart/line-chart.component.html":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin-store/pages/reports/reports-components/line-chart/line-chart.component.html ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"flex\">\n  <div class=\"flex-item\">\n    <div style=\"display: block;\">\n    <canvas baseChart   style=\"width:100%;height: 100%\"\n                [datasets]=\"lineChartData\"\n                [labels]=\"lineChartLabels\"\n                [options]=\"lineChartOptions\"\n                [colors]=\"lineChartColors\"\n                [legend]=\"lineChartLegend\"\n                [chartType]=\"lineChartType\"\n         \n                (chartHover)=\"chartHovered($event)\"\n                (chartClick)=\"chartClicked($event)\"></canvas>\n    </div>\n  </div>\n  <div class=\"flex-item\">\n\n    <button mat-button mat-raised-button color=\"primary\" (click)=\"pushOne()\">Push</button>\n\n\n\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin-store/pages/reports/reports-components/pie-chart/pie-chart.component.html":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin-store/pages/reports/reports-components/pie-chart/pie-chart.component.html ***!
  \***********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n  <div>\n    <div class=\"chart\">\n      <canvas baseChart\n        style=\"width: 100vw;height: 100vh\"\n        [data]=\"pieChartData\"\n        [labels]=\"pieChartLabels\"\n        [chartType]=\"pieChartType\"\n        [options]=\"pieChartOptions\"\n        [plugins]=\"pieChartPlugins\"\n        [colors]=\"pieChartColors\"\n        [legend]=\"pieChartLegend\">\n      </canvas>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin-store/pages/reports/reports-components/polar-chart/polar-chart.component.html":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin-store/pages/reports/reports-components/polar-chart/polar-chart.component.html ***!
  \***************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n  <div>\n    <div style=\"display: block\">\n      <canvas  baseChart\n        [data]=\"polarAreaChartData\"\n        [labels]=\"polarAreaChartLabels\"\n        [legend]=\"polarAreaLegend\"\n        [chartType]=\"polarAreaChartType\"\n        [colors] =\"chartColors\"\n        style=\"width: 80vw;height: 80vh\">\n\n      </canvas>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin-store/pages/reports/reports-components/rader-chart/rader-chart.component.html":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin-store/pages/reports/reports-components/rader-chart/rader-chart.component.html ***!
  \***************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n  <div>\n    <div style=\"display: block\">\n      <canvas baseChart\n        style=\"width: 80vw;height: 80vh\"\n        [datasets]=\"radarChartData\"\n        [options]=\"radarChartOptions\"\n        [labels]=\"radarChartLabels\"\n        [colors]=\"radarColors\"\n        [chartType]=\"radarChartType\">\n      </canvas>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin-store/pages/reports/reports.page.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin-store/pages/reports/reports.page.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-content >\n<ion-fab vertical=\"top\" horizontal=\"start\" slot=\"fixed\">\n    <ion-fab-button [routerLink]=\"['/admin-store/store/dashboard']\"  size=\"small\">\n     <ion-icon size=\"small\" name=\"close-outline\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n  <ion-fab vertical=\"bottom\" horizontal=\"start\" slot=\"fixed\">\n    <ion-fab-button  (click)=\"presentActionSheet()\" size=\"small\">\n   <ion-icon name=\"newspaper-outline\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n<div *ngIf=\"!landScape\" class=\"center\" style=\"height: 100vh;width: 100vw\">\n<ion-grid>\n\t<ion-row>\n\t\t<ion-col size=12>\n\t\t\t <img style=\"max-width: 100%; display: block;\" src=\"./assets/undraw_landscape_mode_53ej.svg\" alt=\"\">\n\n\t\t</ion-col>\n\t\t<ion-col size=12>\n\n \t\t\t <h1 style=\"color:#018786\">Rotate Your Phone</h1>\n\t\t</ion-col>\n\t</ion-row>\n</ion-grid>\n\n\n</div>\n\n<app-units-sold></app-units-sold>\n\n<div  class=\"center\" style=\"height: 100vh;width: 100vw\"  *ngIf=\"landScape\">\n\t<div [ngSwitch]=\"segment\">\n\t\t<app-bar-chart  *ngSwitchCase=\"'bar-chart'\" style=\"width: 100%;\" ></app-bar-chart>\n\t\t<app-line-chart  *ngSwitchCase=\"'line-graph'\"></app-line-chart>\n\t\t<app-dynamic-chart  *ngSwitchCase=\"'dynamic'\" ></app-dynamic-chart>\n\t\t<app-pie-chart  *ngSwitchCase=\"'pie-chart'\" ></app-pie-chart>\n\t\t<app-polar-chart  *ngSwitchCase=\"'polar-chart'\" ></app-polar-chart>\n\t\t<app-rader-chart  *ngSwitchCase=\"'rader-chart'\"></app-rader-chart>\n\t</div>\n</div>\n\n\n\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin-store/pages/reports/sub-reports/units-sold/units-sold.component.html":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin-store/pages/reports/sub-reports/units-sold/units-sold.component.html ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-text class=\"center\">\r\n  <h4 >UNIT SOLD</h4>\r\n</ion-text>\r\n         \r\n<ion-toolbar>\r\n <ion-segment (ionChange)=\"segmentChanged($event)\" value=\"total\">\r\n  <ion-segment-button value=\"total\">\r\n    <ion-label>Total </ion-label>\r\n  </ion-segment-button>\r\n  <ion-segment-button value=\"products\">\r\n    <ion-label>As Products</ion-label>\r\n  </ion-segment-button>\r\n   <ion-segment-button value=\"categories\">\r\n    <ion-label>categories</ion-label>\r\n  </ion-segment-button>\r\n    <ion-segment-button value=\"Regions\">\r\n    <ion-label>Regions</ion-label>\r\n  </ion-segment-button>\r\n</ion-segment>  \r\n</ion-toolbar>\r\n\r\n<ion-toolbar>\r\n\r\n  <ion-chip>\r\n      Filter Report : <ion-button fill=\"clear\" (click)=\"presentActionSheet() \"> {{currentFilter}} </ion-button>\r\n  </ion-chip>\r\n\r\n  <ion-chip>\r\n    {{range}} {{currentFilter}}\r\n  </ion-chip>\r\n\r\n</ion-toolbar>\r\n\r\n\r\n <ion-item  class=\"ion-align-items-center\">\r\n     <ion-chip  style=\"margin-right: 0px;\"class=\"center\" slot=\"start\"> {{startDateO }}</ion-chip>\r\n    <ion-range style=\"    padding-top: 21px;padding-bottom: 21px;\"(ionChange)=\"rangeChange($event)\" min=\"6\" max=\"30\" step=\"1\"  pin >\r\n    </ion-range>\r\n \r\n       <ion-chip  outline color =\"primary\"  style=\"margin-left: 0px;\" slot=\"end\" >\r\n\r\n        <ion-datetime *ngIf=\"currentFilter == 'Days'\" value=\"{{today}}\"  (ionChange)=\"startDateChange($event)\"  display-timezone=\"utc\"></ion-datetime>\r\n\r\n          <ion-datetime  *ngIf=\"currentFilter == 'Months'\"  value=\"{{today}}\"  display-format=\"MMM YY\" (ionChange)=\"startDateChange($event)\"  display-timezone=\"utc\"></ion-datetime>\r\n           <ion-datetime  *ngIf=\"currentFilter == 'Years'\"  value=\"{{today}}\"  display-format=\"YYYY\" (ionChange)=\"startDateChange($event)\"  display-timezone=\"utc\"></ion-datetime>\r\n\r\n         <ion-icon name=\"today-outline\"></ion-icon>\r\n      </ion-chip>\r\n    \r\n  </ion-item>\r\n\r\n<app-line-chart [lineChartDataInput]=\"lineChartDataInput\"  [lineChartLabelInput]=\"lineChartLabelInput\" ></app-line-chart>\r\n<app-pie-chart> </app-pie-chart>\r\n\r\n");

/***/ }),

/***/ "./src/app/modules/admin-store/pages/reports/reports-components/bar-chart/bar-chart.component.scss":
/*!*********************************************************************************************************!*\
  !*** ./src/app/modules/admin-store/pages/reports/reports-components/bar-chart/bar-chart.component.scss ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".advanced-pie-legend .total-value {\n  font-size: 25px !important;\n}\n\n.advanced-pie-legend .legend-items-container .legend-items .legend-item .item-value {\n  font-size: 12px;\n}\n\n.advanced-pie-legend .legend-items-container .legend-items .legend-item .item-percent {\n  font-size: 20px;\n}\n\n.advanced-pie-legend .total-label {\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hZG1pbi1zdG9yZS9wYWdlcy9yZXBvcnRzL3JlcG9ydHMtY29tcG9uZW50cy9iYXItY2hhcnQvQzpcXFVzZXJzXFxNYXJ2aW5cXERvY3VtZW50c1xcR2l0SHViXFxhZnJvYlxcY2xpZW50L3NyY1xcYXBwXFxtb2R1bGVzXFxhZG1pbi1zdG9yZVxccGFnZXNcXHJlcG9ydHNcXHJlcG9ydHMtY29tcG9uZW50c1xcYmFyLWNoYXJ0XFxiYXItY2hhcnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvYWRtaW4tc3RvcmUvcGFnZXMvcmVwb3J0cy9yZXBvcnRzLWNvbXBvbmVudHMvYmFyLWNoYXJ0L2Jhci1jaGFydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQztFQUNHLDBCQUFBO0FDREo7O0FESUE7RUFDSSxlQUFBO0FDREo7O0FES0k7RUFDQSxlQUFBO0FDRko7O0FETUk7RUFDQSxlQUFBO0FDSEoiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2FkbWluLXN0b3JlL3BhZ2VzL3JlcG9ydHMvcmVwb3J0cy1jb21wb25lbnRzL2Jhci1jaGFydC9iYXItY2hhcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuIC5hZHZhbmNlZC1waWUtbGVnZW5kIC50b3RhbC12YWx1ZSB7XG4gICAgZm9udC1zaXplOiAyNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5hZHZhbmNlZC1waWUtbGVnZW5kIC5sZWdlbmQtaXRlbXMtY29udGFpbmVyIC5sZWdlbmQtaXRlbXMgLmxlZ2VuZC1pdGVtIC5pdGVtLXZhbHVlIHtcbiAgICBmb250LXNpemU6IDEycHg7XG5cbiAgICB9XG5cbiAgICAuYWR2YW5jZWQtcGllLWxlZ2VuZCAubGVnZW5kLWl0ZW1zLWNvbnRhaW5lciAubGVnZW5kLWl0ZW1zIC5sZWdlbmQtaXRlbSAuaXRlbS1wZXJjZW50IHtcbiAgICBmb250LXNpemU6IDIwcHg7XG5cbiAgICB9XG5cbiAgICAuYWR2YW5jZWQtcGllLWxlZ2VuZCAudG90YWwtbGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB9IiwiLmFkdmFuY2VkLXBpZS1sZWdlbmQgLnRvdGFsLXZhbHVlIHtcbiAgZm9udC1zaXplOiAyNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5hZHZhbmNlZC1waWUtbGVnZW5kIC5sZWdlbmQtaXRlbXMtY29udGFpbmVyIC5sZWdlbmQtaXRlbXMgLmxlZ2VuZC1pdGVtIC5pdGVtLXZhbHVlIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uYWR2YW5jZWQtcGllLWxlZ2VuZCAubGVnZW5kLWl0ZW1zLWNvbnRhaW5lciAubGVnZW5kLWl0ZW1zIC5sZWdlbmQtaXRlbSAuaXRlbS1wZXJjZW50IHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uYWR2YW5jZWQtcGllLWxlZ2VuZCAudG90YWwtbGFiZWwge1xuICBmb250LXNpemU6IDIwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/admin-store/pages/reports/reports-components/bar-chart/bar-chart.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/modules/admin-store/pages/reports/reports-components/bar-chart/bar-chart.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: BarChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarChartComponent", function() { return BarChartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data */ "./src/app/modules/admin-store/pages/reports/reports-components/bar-chart/data.ts");



var BarChartComponent = /** @class */ (function () {
    function BarChartComponent() {
        // Doughnut
        this.doughnutChartLabels = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales0', 'Download Sales',];
        this.doughnutChartData = [
            [350, 450, 100, 350,],
        ];
        this.doughnutChartType = 'doughnut';
        this.chartColors = [
            {
                backgroundColor: ['#018786', ' #FFD700', ' #90DED7', '#977C0C', '#663399', '#808080', '#F5F5DC', '#F0FFFF']
            },
            {
                backgroundColor: ['#018786', ' #FFD700', ' #90DED7', '#977C0C', '#663399', '#808080', '#F5F5DC', '#F0FFFF']
            },
            {
                backgroundColor: ['#018786', ' #FFD700', ' #90DED7', '#977C0C', '#663399', '#808080', '#F5F5DC', '#F0FFFF']
            },
            {
                backgroundColor: ['#018786', ' #FFD700', ' #90DED7', '#977C0C', '#663399', '#808080', '#F5F5DC', '#F0FFFF']
            },
            {
                backgroundColor: ['#018786', ' #FFD700', ' #90DED7', '#977C0C', '#663399', '#808080', '#F5F5DC', '#F0FFFF']
            },
            {
                backgroundColor: ['#018786', ' #FFD700', ' #90DED7', '#977C0C', '#663399', '#808080', '#F5F5DC', '#F0FFFF']
            },
            {
                backgroundColor: ['#018786', ' #FFD700', ' #90DED7', '#977C0C', '#663399', '#808080', '#F5F5DC', '#F0FFFF']
            },
            {
                backgroundColor: ['#018786', ' #FFD700', ' #90DED7', '#977C0C', '#663399', '#808080', '#F5F5DC', '#F0FFFF']
            },
            {
                backgroundColor: ['#018786', ' #FFD700', ' #90DED7', '#977C0C', '#663399', '#808080', '#F5F5DC', '#F0FFFF']
            },
            {
                backgroundColor: ['#018786', ' #FFD700', ' #90DED7', '#977C0C', '#663399', '#808080', '#F5F5DC', '#F0FFFF']
            },
            {
                backgroundColor: ['#018786', ' #FFD700', ' #90DED7', '#977C0C', '#663399', '#808080', '#F5F5DC', '#F0FFFF']
            },
            {
                backgroundColor: ['#018786', ' #FFD700', ' #90DED7', '#977C0C', '#663399', '#808080', '#F5F5DC', '#F0FFFF']
            },
            {
                backgroundColor: ['#018786', ' #FFD700', ' #90DED7', '#977C0C', '#663399', '#808080', '#F5F5DC', '#F0FFFF']
            },
        ];
        Object.assign(this, { single: _data__WEBPACK_IMPORTED_MODULE_2__["single"] });
    }
    BarChartComponent.prototype.ngOnInit = function () { };
    // events
    BarChartComponent.prototype.chartClicked = function (_a) {
        var event = _a.event, active = _a.active;
        console.log(event, active);
    };
    BarChartComponent.prototype.chartHovered = function (_a) {
        var event = _a.event, active = _a.active;
        console.log(event, active);
    };
    BarChartComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bar-chart',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./bar-chart.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin-store/pages/reports/reports-components/bar-chart/bar-chart.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./bar-chart.component.scss */ "./src/app/modules/admin-store/pages/reports/reports-components/bar-chart/bar-chart.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], BarChartComponent);
    return BarChartComponent;
}());



/***/ }),

/***/ "./src/app/modules/admin-store/pages/reports/reports-components/bar-chart/data.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/admin-store/pages/reports/reports-components/bar-chart/data.ts ***!
  \****************************************************************************************/
/*! exports provided: single */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "single", function() { return single; });
var single = [
    {
        "name": "Marketing",
        "value": 8940000
    },
    {
        "name": "Sales",
        "value": 5000000
    }
];


/***/ }),

/***/ "./src/app/modules/admin-store/pages/reports/reports-components/dynamic-chart/dynamic-chart.component.scss":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/modules/admin-store/pages/reports/reports-components/dynamic-chart/dynamic-chart.component.scss ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4tc3RvcmUvcGFnZXMvcmVwb3J0cy9yZXBvcnRzLWNvbXBvbmVudHMvZHluYW1pYy1jaGFydC9keW5hbWljLWNoYXJ0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/admin-store/pages/reports/reports-components/dynamic-chart/dynamic-chart.component.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/modules/admin-store/pages/reports/reports-components/dynamic-chart/dynamic-chart.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: DynamicChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicChartComponent", function() { return DynamicChartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var DynamicChartComponent = /** @class */ (function () {
    function DynamicChartComponent() {
        this.barChartOptions = {
            responsive: true,
            // We use these empty structures as placeholders for dynamic theming.
            scales: { xAxes: [{}], yAxes: [{}] },
        };
        this.barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.barChartData = [
            { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
            { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
        ];
        this.barChartColors = [
            { backgroundColor: '#018786' },
            { backgroundColor: ' #FFD700' },
            { backgroundColor: ' #90DED7' },
            { backgroundColor: '#977C0C' },
            { backgroundColor: '#663399' }
        ];
    }
    DynamicChartComponent.prototype.ngOnInit = function () { };
    // events
    DynamicChartComponent.prototype.chartClicked = function (_a) {
        var event = _a.event, active = _a.active;
        console.log(event, active);
    };
    DynamicChartComponent.prototype.chartHovered = function (_a) {
        var event = _a.event, active = _a.active;
        console.log(event, active);
    };
    DynamicChartComponent.prototype.randomize = function () {
        this.barChartType = this.barChartType === 'bar' ? 'line' : 'bar';
    };
    DynamicChartComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dynamic-chart',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./dynamic-chart.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin-store/pages/reports/reports-components/dynamic-chart/dynamic-chart.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./dynamic-chart.component.scss */ "./src/app/modules/admin-store/pages/reports/reports-components/dynamic-chart/dynamic-chart.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], DynamicChartComponent);
    return DynamicChartComponent;
}());



/***/ }),

/***/ "./src/app/modules/admin-store/pages/reports/reports-components/line-chart/line-chart.component.scss":
/*!***********************************************************************************************************!*\
  !*** ./src/app/modules/admin-store/pages/reports/reports-components/line-chart/line-chart.component.scss ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4tc3RvcmUvcGFnZXMvcmVwb3J0cy9yZXBvcnRzLWNvbXBvbmVudHMvbGluZS1jaGFydC9saW5lLWNoYXJ0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/admin-store/pages/reports/reports-components/line-chart/line-chart.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/modules/admin-store/pages/reports/reports-components/line-chart/line-chart.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: LineChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineChartComponent", function() { return LineChartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-charts */ "./node_modules/ng2-charts/__ivy_ngcc__/fesm2015/valor-software-ng2-charts.js");



var LineChartComponent = /** @class */ (function () {
    function LineChartComponent() {
        this.lineChartOptions = {
            responsive: true,
            scales: {
                // We use this empty structure as a placeholder for dynamic theming.
                xAxes: [{}],
                yAxes: [
                    {
                        id: 'y-axis-0',
                        position: 'left',
                    },
                ]
            },
            annotation: {
                annotations: [
                    {
                        type: 'line',
                        mode: 'vertical',
                        scaleID: 'x-axis-0',
                        value: 'March',
                        borderColor: 'orange',
                        borderWidth: 2,
                        label: {
                            enabled: true,
                            fontColor: 'orange',
                            content: 'LineAnno'
                        }
                    },
                ],
            },
        };
        this.lineChartColors = [
            {
                backgroundColor: 'rgba(1, 135, 134,0.5)',
                borderColor: 'rgba(1, 135, 134,1)',
                pointBackgroundColor: 'rgba(1, 135, 134,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(1, 135, 134,0.8)'
            },
            {
                backgroundColor: 'rgba(255, 215, 0,0.5)',
                borderColor: 'rgba(255, 215, 0,1)',
                pointBackgroundColor: 'rgba(255, 215, 0,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(255, 215, 0,1)'
            },
            {
                backgroundColor: 'rgba(144, 222, 215,0.5)',
                borderColor: 'rgba(144, 222, 215,1)',
                pointBackgroundColor: 'rgba(144, 222, 215,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(144, 222, 215,0.8)'
            }
        ];
        this.lineChartLegend = true;
        this.lineChartType = 'line';
    }
    LineChartComponent.prototype.ngOnInit = function () {
        this.lineChartData = this.lineChartDataInput;
        this.lineChartLabels = this.lineChartLabelInput;
    };
    /* ********** check below code on how it updates the chart data *********/
    /*public randomize(): void {
      for (let i = 0; i < this.lineChartData.length; i++) {
        for (let j = 0; j < this.lineChartData[i].data.length; j++) {
          this.lineChartData[i].data[j] = this.generateNumber(i);
        }
      }
      this.chart.update();
  
    }*/
    LineChartComponent.prototype.generateNumber = function (i) {
        return Math.floor((Math.random() * (i < 2 ? 100 : 1000)) + 1);
    };
    // events
    LineChartComponent.prototype.chartClicked = function (_a) {
        var event = _a.event, active = _a.active;
        console.log(event, active);
    };
    LineChartComponent.prototype.chartHovered = function (_a) {
        var event = _a.event, active = _a.active;
        console.log(event, active);
    };
    LineChartComponent.prototype.hideOne = function () {
        var isHidden = this.chart.isDatasetHidden(1);
        this.chart.hideDataset(1, !isHidden);
    };
    LineChartComponent.prototype.pushOne = function () {
        var _this = this;
        this.lineChartData.forEach(function (x, i) {
            var num = _this.generateNumber(i);
            var data = x.data;
            data.push(num);
        });
        this.lineChartLabels.push("Label " + this.lineChartLabels.length);
    };
    LineChartComponent.prototype.changeColor = function () {
        this.lineChartColors[2].borderColor = 'green';
        this.lineChartColors[2].backgroundColor = "rgba(0, 255, 0, 0.3)";
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], LineChartComponent.prototype, "lineChartDataInput", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], LineChartComponent.prototype, "lineChartLabelInput", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(ng2_charts__WEBPACK_IMPORTED_MODULE_2__["BaseChartDirective"], { static: true }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", ng2_charts__WEBPACK_IMPORTED_MODULE_2__["BaseChartDirective"])
    ], LineChartComponent.prototype, "chart", void 0);
    LineChartComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-line-chart',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./line-chart.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin-store/pages/reports/reports-components/line-chart/line-chart.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./line-chart.component.scss */ "./src/app/modules/admin-store/pages/reports/reports-components/line-chart/line-chart.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], LineChartComponent);
    return LineChartComponent;
}());



/***/ }),

/***/ "./src/app/modules/admin-store/pages/reports/reports-components/pie-chart/pie-chart.component.scss":
/*!*********************************************************************************************************!*\
  !*** ./src/app/modules/admin-store/pages/reports/reports-components/pie-chart/pie-chart.component.scss ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4tc3RvcmUvcGFnZXMvcmVwb3J0cy9yZXBvcnRzLWNvbXBvbmVudHMvcGllLWNoYXJ0L3BpZS1jaGFydC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/admin-store/pages/reports/reports-components/pie-chart/pie-chart.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/modules/admin-store/pages/reports/reports-components/pie-chart/pie-chart.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: PieChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PieChartComponent", function() { return PieChartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var chartjs_plugin_datalabels__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chartjs-plugin-datalabels */ "./node_modules/chartjs-plugin-datalabels/dist/chartjs-plugin-datalabels.js");
/* harmony import */ var chartjs_plugin_datalabels__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(chartjs_plugin_datalabels__WEBPACK_IMPORTED_MODULE_2__);



var PieChartComponent = /** @class */ (function () {
    function PieChartComponent() {
        this.pieChartOptions = {
            responsive: true,
            legend: {
                position: 'top',
            },
            plugins: {
                datalabels: {
                    formatter: function (value, ctx) {
                        var label = ctx.chart.data.labels[ctx.dataIndex];
                        return label;
                    },
                },
            }
        };
        this.pieChartLabels = ['Mail Sales', 'terrence', 'two', 'three'];
        this.pieChartData = [300, 500, 100, 235];
        this.pieChartType = 'pie';
        this.pieChartLegend = true;
        this.pieChartPlugins = [chartjs_plugin_datalabels__WEBPACK_IMPORTED_MODULE_2__];
        this.pieChartColors = [
            {
                backgroundColor: ['#018786', ' #FFD700', ' #90DED7', '#977C0C', '#663399', '#808080', '#F5F5DC', '#F0FFFF'],
            },
        ];
    }
    PieChartComponent.prototype.ngOnInit = function () { };
    // events
    PieChartComponent.prototype.chartClicked = function (_a) {
        var event = _a.event, active = _a.active;
        console.log(event, active);
    };
    PieChartComponent.prototype.chartHovered = function (_a) {
        var event = _a.event, active = _a.active;
        console.log(event, active);
    };
    PieChartComponent.prototype.changeLabels = function () {
        var words = ['hen', 'variable', 'embryo', 'instal', 'pleasant', 'physical', 'bomber', 'army', 'add', 'film',
            'conductor', 'comfortable', 'flourish', 'establish', 'circumstance', 'chimney', 'crack', 'hall', 'energy',
            'treat', 'window', 'shareholder', 'division', 'disk', 'temptation', 'chord', 'left', 'hospital', 'beef',
            'patrol', 'satisfied', 'academy', 'acceptance', 'ivory', 'aquarium', 'building', 'store', 'replace', 'language',
            'redeem', 'honest', 'intention', 'silk', 'opera', 'sleep', 'innocent', 'ignore', 'suite', 'applaud', 'funny'];
        var randomWord = function () { return words[Math.trunc(Math.random() * words.length)]; };
        this.pieChartLabels = Array.apply(null, { length: 3 }).map(function (_) { return randomWord(); });
    };
    PieChartComponent.prototype.addSlice = function () {
        this.pieChartLabels.push(['Line 1', 'Line 2', 'Line 3']);
        this.pieChartData.push(400);
        this.pieChartColors[0].backgroundColor.push('rgba(196,79,244,0.3)');
    };
    PieChartComponent.prototype.removeSlice = function () {
        this.pieChartLabels.pop();
        this.pieChartData.pop();
        this.pieChartColors[0].backgroundColor.pop();
    };
    PieChartComponent.prototype.changeLegendPosition = function () {
        this.pieChartOptions.legend.position = this.pieChartOptions.legend.position === 'left' ? 'top' : 'left';
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], PieChartComponent.prototype, "pieChartLabelsInput", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], PieChartComponent.prototype, "pieChartDataInput", void 0);
    PieChartComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pie-chart',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./pie-chart.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin-store/pages/reports/reports-components/pie-chart/pie-chart.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./pie-chart.component.scss */ "./src/app/modules/admin-store/pages/reports/reports-components/pie-chart/pie-chart.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], PieChartComponent);
    return PieChartComponent;
}());



/***/ }),

/***/ "./src/app/modules/admin-store/pages/reports/reports-components/polar-chart/polar-chart.component.scss":
/*!*************************************************************************************************************!*\
  !*** ./src/app/modules/admin-store/pages/reports/reports-components/polar-chart/polar-chart.component.scss ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4tc3RvcmUvcGFnZXMvcmVwb3J0cy9yZXBvcnRzLWNvbXBvbmVudHMvcG9sYXItY2hhcnQvcG9sYXItY2hhcnQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/admin-store/pages/reports/reports-components/polar-chart/polar-chart.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/modules/admin-store/pages/reports/reports-components/polar-chart/polar-chart.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: PolarChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolarChartComponent", function() { return PolarChartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var PolarChartComponent = /** @class */ (function () {
    function PolarChartComponent() {
        // PolarArea
        this.polarAreaChartLabels = ['Download Sales', 'In-Store Sales', 'Mail Sales', 'Telesales', 'Corporate Sales'];
        this.polarAreaChartData = [300, 500, 100, 40, 120];
        this.polarAreaLegend = true;
        this.polarAreaChartType = 'polarArea';
        this.chartColors = [
            {
                backgroundColor: ['#018786', ' #FFD700', ' #90DED7', '#977C0C', ' #e0bd00', '#017776', '#7fc3bd', ' #856d0b']
            }
        ];
    }
    PolarChartComponent.prototype.ngOnInit = function () { };
    // events
    // events
    PolarChartComponent.prototype.chartClicked = function (_a) {
        var event = _a.event, active = _a.active;
        console.log(event, active);
    };
    PolarChartComponent.prototype.chartHovered = function (_a) {
        var event = _a.event, active = _a.active;
        console.log(event, active);
    };
    PolarChartComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-polar-chart',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./polar-chart.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin-store/pages/reports/reports-components/polar-chart/polar-chart.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./polar-chart.component.scss */ "./src/app/modules/admin-store/pages/reports/reports-components/polar-chart/polar-chart.component.scss")).default]
        })
    ], PolarChartComponent);
    return PolarChartComponent;
}());



/***/ }),

/***/ "./src/app/modules/admin-store/pages/reports/reports-components/rader-chart/rader-chart.component.scss":
/*!*************************************************************************************************************!*\
  !*** ./src/app/modules/admin-store/pages/reports/reports-components/rader-chart/rader-chart.component.scss ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4tc3RvcmUvcGFnZXMvcmVwb3J0cy9yZXBvcnRzLWNvbXBvbmVudHMvcmFkZXItY2hhcnQvcmFkZXItY2hhcnQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/admin-store/pages/reports/reports-components/rader-chart/rader-chart.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/modules/admin-store/pages/reports/reports-components/rader-chart/rader-chart.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: RaderChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RaderChartComponent", function() { return RaderChartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var RaderChartComponent = /** @class */ (function () {
    function RaderChartComponent() {
        // Radar
        this.radarChartOptions = {
            responsive: true,
        };
        this.radarChartLabels = ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];
        this.radarChartData = [
            { data: [65, 59, 0, 81, 56, 55, 40], label: 'Series A' },
            { data: [28, 48, 40, 19, 96, 27, 2], label: 'Series B' }
        ];
        this.radarChartType = 'radar';
        this.radarColors = [
            {
                backgroundColor: 'rgba(1, 135, 134,0.5)',
                borderColor: 'rgba(1, 135, 134,1)',
                pointBackgroundColor: 'rgba(1, 135, 134,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(1, 135, 134,0.8)'
            },
            {
                backgroundColor: 'rgba(255, 215, 0,0.5)',
                borderColor: 'rgba(255, 215, 0,1)',
                pointBackgroundColor: 'rgba(255, 215, 0,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(255, 215, 0,1)'
            },
            {
                backgroundColor: 'rgba(144, 222, 215,0.5)',
                borderColor: 'rgba(144, 222, 215,1)',
                pointBackgroundColor: 'rgba(144, 222, 215,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(144, 222, 215,0.8)'
            }
        ];
    }
    RaderChartComponent.prototype.ngOnInit = function () { };
    // events
    RaderChartComponent.prototype.chartClicked = function (_a) {
        var event = _a.event, active = _a.active;
        console.log(event, active);
    };
    RaderChartComponent.prototype.chartHovered = function (_a) {
        var event = _a.event, active = _a.active;
        console.log(event, active);
    };
    RaderChartComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-rader-chart',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./rader-chart.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin-store/pages/reports/reports-components/rader-chart/rader-chart.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./rader-chart.component.scss */ "./src/app/modules/admin-store/pages/reports/reports-components/rader-chart/rader-chart.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], RaderChartComponent);
    return RaderChartComponent;
}());



/***/ }),

/***/ "./src/app/modules/admin-store/pages/reports/reports-components/reports-components.module.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/admin-store/pages/reports/reports-components/reports-components.module.ts ***!
  \***************************************************************************************************/
/*! exports provided: ReportsComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsComponentsModule", function() { return ReportsComponentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-charts */ "./node_modules/ng2-charts/__ivy_ngcc__/fesm2015/valor-software-ng2-charts.js");
/* harmony import */ var _bar_chart_bar_chart_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bar-chart/bar-chart.component */ "./src/app/modules/admin-store/pages/reports/reports-components/bar-chart/bar-chart.component.ts");
/* harmony import */ var _line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./line-chart/line-chart.component */ "./src/app/modules/admin-store/pages/reports/reports-components/line-chart/line-chart.component.ts");
/* harmony import */ var _dynamic_chart_dynamic_chart_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dynamic-chart/dynamic-chart.component */ "./src/app/modules/admin-store/pages/reports/reports-components/dynamic-chart/dynamic-chart.component.ts");
/* harmony import */ var _pie_chart_pie_chart_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pie-chart/pie-chart.component */ "./src/app/modules/admin-store/pages/reports/reports-components/pie-chart/pie-chart.component.ts");
/* harmony import */ var _polar_chart_polar_chart_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./polar-chart/polar-chart.component */ "./src/app/modules/admin-store/pages/reports/reports-components/polar-chart/polar-chart.component.ts");
/* harmony import */ var _rader_chart_rader_chart_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./rader-chart/rader-chart.component */ "./src/app/modules/admin-store/pages/reports/reports-components/rader-chart/rader-chart.component.ts");










var ReportsComponentsModule = /** @class */ (function () {
    function ReportsComponentsModule() {
    }
    ReportsComponentsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _bar_chart_bar_chart_component__WEBPACK_IMPORTED_MODULE_4__["BarChartComponent"],
                _line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_5__["LineChartComponent"],
                _dynamic_chart_dynamic_chart_component__WEBPACK_IMPORTED_MODULE_6__["DynamicChartComponent"],
                _pie_chart_pie_chart_component__WEBPACK_IMPORTED_MODULE_7__["PieChartComponent"],
                _polar_chart_polar_chart_component__WEBPACK_IMPORTED_MODULE_8__["PolarChartComponent"],
                _rader_chart_rader_chart_component__WEBPACK_IMPORTED_MODULE_9__["RaderChartComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                ng2_charts__WEBPACK_IMPORTED_MODULE_3__["ChartsModule"]
            ],
            exports: [
                _bar_chart_bar_chart_component__WEBPACK_IMPORTED_MODULE_4__["BarChartComponent"],
                _line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_5__["LineChartComponent"],
                _dynamic_chart_dynamic_chart_component__WEBPACK_IMPORTED_MODULE_6__["DynamicChartComponent"],
                _pie_chart_pie_chart_component__WEBPACK_IMPORTED_MODULE_7__["PieChartComponent"],
                _polar_chart_polar_chart_component__WEBPACK_IMPORTED_MODULE_8__["PolarChartComponent"],
                _rader_chart_rader_chart_component__WEBPACK_IMPORTED_MODULE_9__["RaderChartComponent"]
            ]
        })
    ], ReportsComponentsModule);
    return ReportsComponentsModule;
}());



/***/ }),

/***/ "./src/app/modules/admin-store/pages/reports/reports-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/admin-store/pages/reports/reports-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: ReportsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsPageRoutingModule", function() { return ReportsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _reports_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reports.page */ "./src/app/modules/admin-store/pages/reports/reports.page.ts");




var routes = [
    {
        path: '',
        component: _reports_page__WEBPACK_IMPORTED_MODULE_3__["ReportsPage"]
    }
];
var ReportsPageRoutingModule = /** @class */ (function () {
    function ReportsPageRoutingModule() {
    }
    ReportsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ReportsPageRoutingModule);
    return ReportsPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/admin-store/pages/reports/reports.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/modules/admin-store/pages/reports/reports.module.ts ***!
  \*********************************************************************/
/*! exports provided: ReportsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsPageModule", function() { return ReportsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _reports_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reports-routing.module */ "./src/app/modules/admin-store/pages/reports/reports-routing.module.ts");
/* harmony import */ var _reports_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reports.page */ "./src/app/modules/admin-store/pages/reports/reports.page.ts");
/* harmony import */ var _sub_reports_sub_reports_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sub-reports/sub-reports.module */ "./src/app/modules/admin-store/pages/reports/sub-reports/sub-reports.module.ts");








var ReportsPageModule = /** @class */ (function () {
    function ReportsPageModule() {
    }
    ReportsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _reports_routing_module__WEBPACK_IMPORTED_MODULE_5__["ReportsPageRoutingModule"],
                _sub_reports_sub_reports_module__WEBPACK_IMPORTED_MODULE_7__["SubReportsModule"]
            ],
            declarations: [_reports_page__WEBPACK_IMPORTED_MODULE_6__["ReportsPage"]]
        })
    ], ReportsPageModule);
    return ReportsPageModule;
}());



/***/ }),

/***/ "./src/app/modules/admin-store/pages/reports/reports.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/modules/admin-store/pages/reports/reports.page.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4tc3RvcmUvcGFnZXMvcmVwb3J0cy9yZXBvcnRzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/admin-store/pages/reports/reports.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/modules/admin-store/pages/reports/reports.page.ts ***!
  \*******************************************************************/
/*! exports provided: ReportsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsPage", function() { return ReportsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");



var ReportsPage = /** @class */ (function () {
    function ReportsPage(actionSheetController) {
        this.actionSheetController = actionSheetController;
        this.getScreenSize();
    }
    ReportsPage.prototype.getScreenSize = function (event) {
        this.scrHeight = window.innerHeight;
        this.scrWidth = window.innerWidth;
        if (this.scrHeight > this.scrWidth) {
            this.landScape = false;
        }
        else {
            this.landScape = true;
        }
    };
    ReportsPage.prototype.ngOnInit = function () {
        this.innerWidth = window.innerWidth;
        console.log(this.innerWidth);
    };
    ReportsPage.prototype.presentActionSheet = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetController.create({
                            header: 'Chart-type',
                            cssClass: 'my-custom-class',
                            buttons: [{
                                    text: 'Donaut chart',
                                    icon: 'trash',
                                    handler: function () {
                                        _this.segment = 'bar-chart';
                                    }
                                }, {
                                    text: 'line Graph',
                                    icon: 'share',
                                    handler: function () {
                                        _this.segment = 'line-graph';
                                    }
                                }, {
                                    text: 'Dynamic',
                                    icon: 'caret-forward-circle',
                                    handler: function () {
                                        _this.segment = 'dynamic';
                                    }
                                }, {
                                    text: 'pie chart',
                                    icon: 'heart',
                                    handler: function () {
                                        _this.segment = 'pie-chart';
                                    }
                                },
                                {
                                    text: 'polar chart',
                                    icon: 'heart',
                                    handler: function () {
                                        _this.segment = 'polar-chart';
                                    }
                                },
                                {
                                    text: 'rader Chart',
                                    icon: 'heart',
                                    handler: function () {
                                        _this.segment = 'rader-chart';
                                    }
                                },
                                {
                                    text: 'Cancel',
                                    icon: 'close',
                                    role: 'cancel',
                                    handler: function () {
                                        console.log('Cancel clicked');
                                    }
                                }]
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
    ReportsPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event']),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
    ], ReportsPage.prototype, "getScreenSize", null);
    ReportsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-reports',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./reports.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin-store/pages/reports/reports.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./reports.page.scss */ "./src/app/modules/admin-store/pages/reports/reports.page.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"]])
    ], ReportsPage);
    return ReportsPage;
}());



/***/ }),

/***/ "./src/app/modules/admin-store/pages/reports/sub-reports/sub-reports.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/admin-store/pages/reports/sub-reports/sub-reports.module.ts ***!
  \*************************************************************************************/
/*! exports provided: SubReportsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubReportsModule", function() { return SubReportsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _units_sold_units_sold_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./units-sold/units-sold.component */ "./src/app/modules/admin-store/pages/reports/sub-reports/units-sold/units-sold.component.ts");
/* harmony import */ var _reports_components_reports_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reports-components/reports-components.module */ "./src/app/modules/admin-store/pages/reports/reports-components/reports-components.module.ts");






var SubReportsModule = /** @class */ (function () {
    function SubReportsModule() {
    }
    SubReportsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _units_sold_units_sold_component__WEBPACK_IMPORTED_MODULE_3__["UnitsSoldComponent"]
            ], providers: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _reports_components_reports_components_module__WEBPACK_IMPORTED_MODULE_4__["ReportsComponentsModule"]
            ], exports: [
                _units_sold_units_sold_component__WEBPACK_IMPORTED_MODULE_3__["UnitsSoldComponent"]
            ]
        })
    ], SubReportsModule);
    return SubReportsModule;
}());



/***/ }),

/***/ "./src/app/modules/admin-store/pages/reports/sub-reports/units-sold/MOCK_DATA.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/admin-store/pages/reports/sub-reports/units-sold/MOCK_DATA.ts ***!
  \***************************************************************************************/
/*! exports provided: Data */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Data", function() { return Data; });
var Data = [{ "id": 1, "product_name": "Cheese - Bakers Cream Cheese", "amount": 803, "discount": "157.60", "cost": "1711.92", "date": "2016-09-02T23:57:59Z", "category": "Electronics", "city": "Saguenay", "orderRating": 7 },
    { "id": 2, "product_name": "Wine - Riesling Dr. Pauly", "amount": 51, "discount": "53.09", "cost": "671.48", "date": "2016-10-15T03:00:31Z", "category": "Grocery", "city": "Huangtudian", "orderRating": 1 },
    { "id": 3, "product_name": "Yukon Jack", "amount": 226, "discount": "172.18", "cost": "1820.61", "date": "2017-11-10T06:49:37Z", "category": "Toys", "city": "Adelaide Mail Centre", "orderRating": 6 },
    { "id": 4, "product_name": "Pineapple - Regular", "amount": 247, "discount": "133.63", "cost": "489.65", "date": "2016-01-21T05:27:18Z", "category": "Home", "city": "Paola", "orderRating": 2 },
    { "id": 5, "product_name": "Pork - European Side Bacon", "amount": 435, "discount": "62.38", "cost": "1817.23", "date": "2019-01-12T17:33:47Z", "category": "Home", "city": "Bourg-lès-Valence", "orderRating": 2 },
    { "id": 6, "product_name": "Breadfruit", "amount": 990, "discount": "129.31", "cost": "769.14", "date": "2020-07-22T01:30:38Z", "category": "Health", "city": "Syracuse", "orderRating": 3 },
    { "id": 7, "product_name": "Cheese - Brick With Pepper", "amount": 372, "discount": "176.20", "cost": "4871.18", "date": "2015-10-27T09:27:46Z", "category": "Health", "city": "Pringsewu", "orderRating": 1 },
    { "id": 8, "product_name": "Yogurt - Banana, 175 Gr", "amount": 85, "discount": "22.93", "cost": "4914.25", "date": "2017-10-18T17:44:36Z", "category": "Grocery", "city": "La Viña", "orderRating": 1 },
    { "id": 9, "product_name": "Cactus Pads", "amount": 309, "discount": "37.78", "cost": "1181.81", "date": "2020-02-29T05:53:14Z", "category": "Kids", "city": "Pesisir", "orderRating": 2 },
    { "id": 10, "product_name": "Nut - Pecan, Halves", "amount": 200, "discount": "166.60", "cost": "788.59", "date": "2015-12-08T13:36:57Z", "category": "Games", "city": "El Parco District", "orderRating": 7 },
    { "id": 11, "product_name": "Pepper - Black, Ground", "amount": 89, "discount": "190.37", "cost": "4707.00", "date": "2018-05-27T21:01:40Z", "category": "Sports", "city": "Olbramovice", "orderRating": 1 },
    { "id": 12, "product_name": "Container - Hngd Cll Blk 7x7x3", "amount": 792, "discount": "162.22", "cost": "468.69", "date": "2018-02-27T14:02:17Z", "category": "Jewelery", "city": "Wengang", "orderRating": 2 },
    { "id": 13, "product_name": "Pepsi - Diet, 355 Ml", "amount": 585, "discount": "144.91", "cost": "1828.33", "date": "2018-06-14T18:33:20Z", "category": "Baby", "city": "Kota Kinabalu", "orderRating": 6 },
    { "id": 14, "product_name": "Sausage - Meat", "amount": 952, "discount": "143.65", "cost": "3921.57", "date": "2017-12-10T09:49:01Z", "category": "Beauty", "city": "Skopje", "orderRating": 4 },
    { "id": 15, "product_name": "Juice - Orange 1.89l", "amount": 712, "discount": "120.71", "cost": "2623.30", "date": "2019-03-01T14:11:04Z", "category": "Tools", "city": "Cicurug", "orderRating": 1 },
    { "id": 16, "product_name": "Longos - Lasagna Veg", "amount": 712, "discount": "174.81", "cost": "1740.90", "date": "2016-06-17T19:55:03Z", "category": "Outdoors", "city": "Chalu", "orderRating": 2 },
    { "id": 17, "product_name": "Soup - Base Broth Beef", "amount": 198, "discount": "178.33", "cost": "1031.67", "date": "2019-07-18T20:07:11Z", "category": "Grocery", "city": "Zoumaling", "orderRating": 4 },
    { "id": 18, "product_name": "Lettuce - Romaine, Heart", "amount": 895, "discount": "149.57", "cost": "3136.49", "date": "2018-10-16T01:25:21Z", "category": "Grocery", "city": "Cijengkol", "orderRating": 5 },
    { "id": 19, "product_name": "Assorted Desserts", "amount": 399, "discount": "119.98", "cost": "4082.91", "date": "2020-06-28T15:43:20Z", "category": "Kids", "city": "Alto do Estanqueiro", "orderRating": 4 },
    { "id": 20, "product_name": "Apple - Royal Gala", "amount": 26, "discount": "41.47", "cost": "2078.52", "date": "2020-02-28T06:31:43Z", "category": "Games", "city": "Atlanta", "orderRating": 7 },
    { "id": 21, "product_name": "Brandy Cherry - Mcguinness", "amount": 207, "discount": "126.39", "cost": "44.56", "date": "2018-11-03T11:33:06Z", "category": "Baby", "city": "Daniwato", "orderRating": 5 },
    { "id": 22, "product_name": "Prunes - Pitted", "amount": 865, "discount": "148.66", "cost": "2944.73", "date": "2016-03-17T00:53:53Z", "category": "Industrial", "city": "‘Aqrah", "orderRating": 6 },
    { "id": 23, "product_name": "Wine - Red, Colio Cabernet", "amount": 572, "discount": "175.12", "cost": "4780.78", "date": "2019-03-27T06:13:12Z", "category": "Industrial", "city": "Nong Khai", "orderRating": 7 },
    { "id": 24, "product_name": "Ham - Black Forest", "amount": 193, "discount": "143.53", "cost": "1400.49", "date": "2017-07-13T00:14:37Z", "category": "Shoes", "city": "Bayt al ‘Awābī", "orderRating": 4 },
    { "id": 25, "product_name": "Sausage - Andouille", "amount": 538, "discount": "198.48", "cost": "2517.02", "date": "2016-03-24T05:40:36Z", "category": "Home", "city": "Buenos Aires", "orderRating": 6 },
    { "id": 26, "product_name": "Pasta - Orzo, Dry", "amount": 388, "discount": "81.82", "cost": "3722.75", "date": "2019-09-02T13:43:26Z", "category": "Movies", "city": "Dalongzhan", "orderRating": 5 },
    { "id": 27, "product_name": "Onions - Cippolini", "amount": 129, "discount": "67.69", "cost": "1515.30", "date": "2018-09-07T08:56:37Z", "category": "Tools", "city": "Changqing", "orderRating": 5 },
    { "id": 28, "product_name": "Sun - Dried Tomatoes", "amount": 244, "discount": "153.50", "cost": "1050.25", "date": "2016-03-07T00:38:53Z", "category": "Automotive", "city": "Kristianstad", "orderRating": 6 },
    { "id": 29, "product_name": "Mangostein", "amount": 222, "discount": "42.12", "cost": "4396.44", "date": "2018-07-06T23:52:14Z", "category": "Grocery", "city": "Jefferson City", "orderRating": 2 },
    { "id": 30, "product_name": "General Purpose Trigger", "amount": 290, "discount": "31.10", "cost": "1941.78", "date": "2019-03-03T17:31:08Z", "category": "Tools", "city": "Chuanpu", "orderRating": 1 },
    { "id": 31, "product_name": "Bread - Italian Sesame Poly", "amount": 319, "discount": "77.84", "cost": "3155.25", "date": "2019-04-26T02:35:11Z", "category": "Books", "city": "Ganjun", "orderRating": 3 },
    { "id": 32, "product_name": "Kellogs Special K Cereal", "amount": 300, "discount": "71.73", "cost": "2829.71", "date": "2019-11-15T04:03:21Z", "category": "Computers", "city": "Zilang", "orderRating": 3 },
    { "id": 33, "product_name": "Eggplant - Regular", "amount": 494, "discount": "14.03", "cost": "1444.07", "date": "2016-09-15T15:02:45Z", "category": "Beauty", "city": "San Pa Tong", "orderRating": 5 },
    { "id": 34, "product_name": "Juice - Propel Sport", "amount": 500, "discount": "64.33", "cost": "1602.87", "date": "2019-11-24T09:02:10Z", "category": "Books", "city": "Syntul", "orderRating": 2 },
    { "id": 35, "product_name": "Juice - Orange 1.89l", "amount": 546, "discount": "174.44", "cost": "4527.52", "date": "2018-04-24T20:33:33Z", "category": "Home", "city": "Rueil-Malmaison", "orderRating": 7 },
    { "id": 36, "product_name": "Bamboo Shoots - Sliced", "amount": 339, "discount": "164.45", "cost": "1981.40", "date": "2019-08-09T02:09:27Z", "category": "Grocery", "city": "Datong", "orderRating": 6 },
    { "id": 37, "product_name": "Bread - Rye", "amount": 798, "discount": "32.48", "cost": "2698.62", "date": "2018-07-21T12:48:37Z", "category": "Shoes", "city": "Großklein", "orderRating": 5 },
    { "id": 38, "product_name": "Energy - Boo - Koo", "amount": 459, "discount": "80.63", "cost": "108.60", "date": "2017-12-12T02:19:12Z", "category": "Shoes", "city": "Aoji-ri", "orderRating": 7 },
    { "id": 39, "product_name": "Doilies - 10, Paper", "amount": 29, "discount": "176.34", "cost": "3260.12", "date": "2016-09-19T06:19:49Z", "category": "Automotive", "city": "Jacobina", "orderRating": 3 },
    { "id": 40, "product_name": "Cherries - Fresh", "amount": 149, "discount": "113.49", "cost": "4183.29", "date": "2015-12-08T08:41:48Z", "category": "Automotive", "city": "Askainen", "orderRating": 2 },
    { "id": 41, "product_name": "Tomatoes - Plum, Canned", "amount": 366, "discount": "6.37", "cost": "3118.85", "date": "2019-12-15T00:54:39Z", "category": "Baby", "city": "Sinubong", "orderRating": 3 },
    { "id": 42, "product_name": "Bar Mix - Lemon", "amount": 562, "discount": "146.83", "cost": "938.17", "date": "2019-12-08T13:55:16Z", "category": "Tools", "city": "Kassala", "orderRating": 2 },
    { "id": 43, "product_name": "Butter Ripple - Phillips", "amount": 126, "discount": "178.57", "cost": "3066.55", "date": "2019-02-03T04:59:05Z", "category": "Shoes", "city": "Tamana", "orderRating": 4 },
    { "id": 44, "product_name": "Roe - Lump Fish, Red", "amount": 185, "discount": "52.92", "cost": "2477.55", "date": "2016-03-18T11:24:40Z", "category": "Clothing", "city": "Hongqi", "orderRating": 7 },
    { "id": 45, "product_name": "Wine - Vouvray Cuvee Domaine", "amount": 192, "discount": "42.76", "cost": "3218.90", "date": "2019-06-04T17:23:34Z", "category": "Home", "city": "Seredeyskiy", "orderRating": 2 },
    { "id": 46, "product_name": "Doilies - 10, Paper", "amount": 757, "discount": "88.05", "cost": "4597.42", "date": "2015-11-07T08:15:02Z", "category": "Games", "city": "Carandaí", "orderRating": 4 },
    { "id": 47, "product_name": "Toothpick Frilled", "amount": 392, "discount": "24.48", "cost": "21.15", "date": "2018-10-22T09:29:42Z", "category": "Automotive", "city": "Poja", "orderRating": 4 },
    { "id": 48, "product_name": "Wine - Zonnebloem Pinotage", "amount": 888, "discount": "183.79", "cost": "1177.74", "date": "2018-06-29T19:15:55Z", "category": "Home", "city": "Partille", "orderRating": 1 },
    { "id": 49, "product_name": "Cabbage - Red", "amount": 704, "discount": "132.96", "cost": "178.45", "date": "2017-08-06T13:17:32Z", "category": "Toys", "city": "Kihurio", "orderRating": 1 },
    { "id": 50, "product_name": "Salad Dressing", "amount": 111, "discount": "86.13", "cost": "960.44", "date": "2017-08-18T07:23:05Z", "category": "Sports", "city": "Ręczno", "orderRating": 5 },
    { "id": 51, "product_name": "Basil - Fresh", "amount": 349, "discount": "78.48", "cost": "263.41", "date": "2017-07-23T22:59:20Z", "category": "Kids", "city": "Culasian", "orderRating": 6 },
    { "id": 52, "product_name": "Beef - Top Butt Aaa", "amount": 102, "discount": "99.75", "cost": "1051.89", "date": "2015-11-10T15:33:11Z", "category": "Automotive", "city": "Jiangwei", "orderRating": 1 },
    { "id": 53, "product_name": "Tart - Butter Plain Squares", "amount": 947, "discount": "68.16", "cost": "1887.57", "date": "2020-08-04T16:30:21Z", "category": "Clothing", "city": "Xihu", "orderRating": 2 },
    { "id": 54, "product_name": "Syrup - Monin, Irish Cream", "amount": 242, "discount": "166.08", "cost": "1806.07", "date": "2016-10-13T04:57:12Z", "category": "Books", "city": "Qingshanhu", "orderRating": 2 },
    { "id": 55, "product_name": "Tobasco Sauce", "amount": 526, "discount": "92.22", "cost": "395.35", "date": "2019-09-29T18:40:47Z", "category": "Industrial", "city": "Yanghe", "orderRating": 4 },
    { "id": 56, "product_name": "Flour - Fast / Rapid", "amount": 957, "discount": "180.49", "cost": "3278.62", "date": "2020-01-08T20:45:13Z", "category": "Electronics", "city": "Sydney", "orderRating": 5 },
    { "id": 57, "product_name": "Gelatine Leaves - Envelopes", "amount": 480, "discount": "107.33", "cost": "2550.55", "date": "2019-10-31T20:50:27Z", "category": "Shoes", "city": "Panadura", "orderRating": 4 },
    { "id": 58, "product_name": "Samosa - Veg", "amount": 797, "discount": "101.40", "cost": "3729.31", "date": "2016-05-03T22:41:02Z", "category": "Industrial", "city": "Al Bilād", "orderRating": 2 },
    { "id": 59, "product_name": "Chocolate - Dark Callets", "amount": 948, "discount": "10.11", "cost": "829.23", "date": "2020-06-20T14:00:56Z", "category": "Music", "city": "Qincheng", "orderRating": 2 },
    { "id": 60, "product_name": "Radish - Pickled", "amount": 406, "discount": "100.01", "cost": "3922.74", "date": "2017-09-21T22:31:01Z", "category": "Jewelery", "city": "Chipinge", "orderRating": 2 },
    { "id": 61, "product_name": "Bread - Crumbs, Bulk", "amount": 969, "discount": "150.55", "cost": "2027.20", "date": "2015-12-19T21:42:19Z", "category": "Sports", "city": "San Jose", "orderRating": 6 },
    { "id": 62, "product_name": "Cheese - Woolwich Goat, Log", "amount": 689, "discount": "150.68", "cost": "3716.74", "date": "2017-01-24T12:06:36Z", "category": "Jewelery", "city": "Zalţan", "orderRating": 1 },
    { "id": 63, "product_name": "Lemonade - Island Tea, 591 Ml", "amount": 218, "discount": "141.06", "cost": "1206.82", "date": "2020-02-17T13:44:14Z", "category": "Electronics", "city": "Douane", "orderRating": 4 },
    { "id": 64, "product_name": "Sauce - Black Current, Dry Mix", "amount": 184, "discount": "71.37", "cost": "1750.32", "date": "2017-10-22T22:27:58Z", "category": "Tools", "city": "Rivesaltes", "orderRating": 4 },
    { "id": 65, "product_name": "Clementine", "amount": 342, "discount": "152.62", "cost": "294.07", "date": "2018-10-17T16:57:44Z", "category": "Computers", "city": "Oceanside", "orderRating": 6 },
    { "id": 66, "product_name": "Oil - Sesame", "amount": 177, "discount": "106.20", "cost": "3306.02", "date": "2018-05-09T23:20:24Z", "category": "Clothing", "city": "Welkom", "orderRating": 6 },
    { "id": 67, "product_name": "Petite Baguette", "amount": 570, "discount": "68.35", "cost": "4810.19", "date": "2020-06-20T07:23:17Z", "category": "Automotive", "city": "Losino-Petrovskiy", "orderRating": 5 },
    { "id": 68, "product_name": "Tea - Herbal I Love Lemon", "amount": 330, "discount": "130.73", "cost": "3746.41", "date": "2017-04-02T11:42:26Z", "category": "Electronics", "city": "Soljani", "orderRating": 3 },
    { "id": 69, "product_name": "Wine - Malbec Trapiche Reserve", "amount": 639, "discount": "11.08", "cost": "3348.01", "date": "2016-09-25T10:59:47Z", "category": "Grocery", "city": "Lyon", "orderRating": 7 },
    { "id": 70, "product_name": "Pasta - Fettuccine, Dry", "amount": 536, "discount": "168.02", "cost": "3418.94", "date": "2018-11-14T09:35:24Z", "category": "Toys", "city": "Xishan", "orderRating": 6 },
    { "id": 71, "product_name": "Pastry - Choclate Baked", "amount": 764, "discount": "23.22", "cost": "1052.65", "date": "2020-07-21T18:13:21Z", "category": "Home", "city": "Chumphon Buri", "orderRating": 6 },
    { "id": 72, "product_name": "Kahlua", "amount": 108, "discount": "19.26", "cost": "52.79", "date": "2015-10-25T18:52:53Z", "category": "Sports", "city": "Palmas", "orderRating": 7 },
    { "id": 73, "product_name": "Chicken Giblets", "amount": 560, "discount": "11.25", "cost": "1563.06", "date": "2018-10-12T02:39:55Z", "category": "Electronics", "city": "Kuala Lumpur", "orderRating": 4 },
    { "id": 74, "product_name": "Browning Caramel Glace", "amount": 847, "discount": "134.38", "cost": "1261.09", "date": "2018-06-30T23:59:10Z", "category": "Sports", "city": "Ansan-si", "orderRating": 4 },
    { "id": 75, "product_name": "Syrup - Monin, Irish Cream", "amount": 759, "discount": "40.76", "cost": "1833.18", "date": "2019-02-01T23:47:28Z", "category": "Jewelery", "city": "Marabá", "orderRating": 3 },
    { "id": 76, "product_name": "Chips - Assorted", "amount": 435, "discount": "89.29", "cost": "2585.08", "date": "2019-09-28T07:22:45Z", "category": "Books", "city": "Fuyo", "orderRating": 6 },
    { "id": 77, "product_name": "Juice - Orange", "amount": 854, "discount": "166.46", "cost": "9.96", "date": "2019-11-11T23:39:27Z", "category": "Clothing", "city": "San Antonio", "orderRating": 1 },
    { "id": 78, "product_name": "Bread - French Baquette", "amount": 205, "discount": "48.43", "cost": "848.20", "date": "2018-12-13T21:16:29Z", "category": "Sports", "city": "Melgar", "orderRating": 6 },
    { "id": 79, "product_name": "Cheese - Shred Cheddar / Mozza", "amount": 102, "discount": "25.51", "cost": "1891.83", "date": "2019-08-11T03:44:57Z", "category": "Health", "city": "Dolna Banya", "orderRating": 6 },
    { "id": 80, "product_name": "Salt - Table", "amount": 179, "discount": "80.38", "cost": "2955.79", "date": "2017-06-11T12:04:46Z", "category": "Outdoors", "city": "Umabay", "orderRating": 4 },
    { "id": 81, "product_name": "Yams", "amount": 312, "discount": "39.53", "cost": "2522.08", "date": "2018-07-17T02:00:29Z", "category": "Kids", "city": "Rio", "orderRating": 1 },
    { "id": 82, "product_name": "Sauce - Rosee", "amount": 573, "discount": "161.99", "cost": "1961.75", "date": "2017-05-24T00:08:58Z", "category": "Garden", "city": "Nāṟay", "orderRating": 2 },
    { "id": 83, "product_name": "Orange - Blood", "amount": 641, "discount": "171.46", "cost": "1927.61", "date": "2018-06-09T01:53:28Z", "category": "Movies", "city": "Euclides da Cunha", "orderRating": 5 },
    { "id": 84, "product_name": "Curry Paste - Green Masala", "amount": 1000, "discount": "138.04", "cost": "3963.71", "date": "2017-10-07T22:46:35Z", "category": "Baby", "city": "Ḩadīdah", "orderRating": 5 },
    { "id": 85, "product_name": "Shrimp - Black Tiger 13/15", "amount": 732, "discount": "15.94", "cost": "3020.81", "date": "2016-08-22T16:27:02Z", "category": "Computers", "city": "Tremembé", "orderRating": 1 },
    { "id": 86, "product_name": "Mace Ground", "amount": 281, "discount": "9.39", "cost": "50.31", "date": "2015-12-11T00:30:05Z", "category": "Shoes", "city": "Yongchang", "orderRating": 1 },
    { "id": 87, "product_name": "Bread - Mini Hamburger Bun", "amount": 775, "discount": "62.58", "cost": "3891.88", "date": "2018-12-01T23:53:16Z", "category": "Jewelery", "city": "Rouyuan", "orderRating": 5 },
    { "id": 88, "product_name": "Muffin Batt - Blueberry Passion", "amount": 185, "discount": "18.66", "cost": "4131.73", "date": "2017-10-19T05:33:04Z", "category": "Computers", "city": "Anaráchi", "orderRating": 3 },
    { "id": 89, "product_name": "Coffee - Dark Roast", "amount": 271, "discount": "101.02", "cost": "3911.30", "date": "2020-07-25T12:16:02Z", "category": "Grocery", "city": "Venezuela", "orderRating": 7 },
    { "id": 90, "product_name": "Wine - Niagara Peninsula Vqa", "amount": 266, "discount": "3.38", "cost": "370.83", "date": "2017-06-06T07:49:15Z", "category": "Outdoors", "city": "Nong Don", "orderRating": 1 },
    { "id": 91, "product_name": "Pasta - Angel Hair", "amount": 708, "discount": "169.83", "cost": "2321.91", "date": "2017-08-18T11:06:15Z", "category": "Grocery", "city": "Changning", "orderRating": 3 },
    { "id": 92, "product_name": "Clam - Cherrystone", "amount": 570, "discount": "103.29", "cost": "2486.25", "date": "2017-05-31T11:57:44Z", "category": "Clothing", "city": "Радишани", "orderRating": 4 },
    { "id": 93, "product_name": "Tart Shells - Savory, 3", "amount": 739, "discount": "116.31", "cost": "4982.73", "date": "2018-03-05T06:37:48Z", "category": "Outdoors", "city": "Szemud", "orderRating": 7 },
    { "id": 94, "product_name": "Chilli Paste, Ginger Garlic", "amount": 124, "discount": "192.87", "cost": "2670.97", "date": "2016-07-28T20:44:01Z", "category": "Kids", "city": "Zizhao", "orderRating": 4 },
    { "id": 95, "product_name": "Crab - Dungeness, Whole, live", "amount": 60, "discount": "134.07", "cost": "819.05", "date": "2017-04-11T19:43:53Z", "category": "Toys", "city": "Sabana Grande de Boyá", "orderRating": 7 },
    { "id": 96, "product_name": "Persimmons", "amount": 396, "discount": "45.62", "cost": "1882.52", "date": "2018-10-26T02:46:29Z", "category": "Baby", "city": "Dong Charoen", "orderRating": 7 },
    { "id": 97, "product_name": "Wine - Coteaux Du Tricastin Ac", "amount": 593, "discount": "149.73", "cost": "2408.10", "date": "2016-01-06T10:38:25Z", "category": "Movies", "city": "Krông Kmar", "orderRating": 1 },
    { "id": 98, "product_name": "Hagen Daza - Dk Choocolate", "amount": 443, "discount": "99.13", "cost": "1147.89", "date": "2016-05-28T00:53:55Z", "category": "Movies", "city": "Kafr Şūr", "orderRating": 3 },
    { "id": 99, "product_name": "Roe - White Fish", "amount": 82, "discount": "6.73", "cost": "3146.64", "date": "2020-02-23T05:34:48Z", "category": "Music", "city": "Independencia", "orderRating": 3 },
    { "id": 100, "product_name": "Plasticknivesblack", "amount": 548, "discount": "74.96", "cost": "3455.74", "date": "2015-12-28T07:14:07Z", "category": "Tools", "city": "Basqal", "orderRating": 1 },
    { "id": 101, "product_name": "Duck - Whole", "amount": 389, "discount": "83.42", "cost": "127.09", "date": "2016-11-17T17:24:38Z", "category": "Music", "city": "Huadian", "orderRating": 7 },
    { "id": 102, "product_name": "Trueblue - Blueberry 12x473ml", "amount": 978, "discount": "134.02", "cost": "4819.34", "date": "2018-06-07T07:47:54Z", "category": "Shoes", "city": "Valle San Francisco", "orderRating": 2 },
    { "id": 103, "product_name": "Wine - White, Schroder And Schyl", "amount": 345, "discount": "87.46", "cost": "4887.70", "date": "2020-05-02T20:25:49Z", "category": "Games", "city": "Ludishan", "orderRating": 3 },
    { "id": 104, "product_name": "Latex Rubber Gloves Size 9", "amount": 856, "discount": "75.66", "cost": "4345.50", "date": "2020-04-04T16:21:06Z", "category": "Outdoors", "city": "Ebebiyin", "orderRating": 5 },
    { "id": 105, "product_name": "Sole - Iqf", "amount": 366, "discount": "45.39", "cost": "3485.74", "date": "2017-09-28T05:28:59Z", "category": "Automotive", "city": "Menlou’ao", "orderRating": 5 },
    { "id": 106, "product_name": "Bread - Burger", "amount": 122, "discount": "44.87", "cost": "1327.25", "date": "2018-03-15T00:57:51Z", "category": "Clothing", "city": "Bragança", "orderRating": 7 },
    { "id": 107, "product_name": "Rice - Brown", "amount": 986, "discount": "152.93", "cost": "2297.83", "date": "2018-04-27T06:28:47Z", "category": "Music", "city": "Biała Piska", "orderRating": 6 },
    { "id": 108, "product_name": "Food Colouring - Green", "amount": 710, "discount": "11.51", "cost": "1939.80", "date": "2016-11-18T07:19:01Z", "category": "Home", "city": "Kebloran", "orderRating": 7 },
    { "id": 109, "product_name": "Puff Pastry - Sheets", "amount": 239, "discount": "49.94", "cost": "129.09", "date": "2018-07-25T10:16:59Z", "category": "Toys", "city": "Tataouine", "orderRating": 3 },
    { "id": 110, "product_name": "Cranberries - Fresh", "amount": 320, "discount": "40.74", "cost": "1418.14", "date": "2019-11-09T02:01:36Z", "category": "Clothing", "city": "Ciénaga", "orderRating": 2 },
    { "id": 111, "product_name": "Bagel - Plain", "amount": 949, "discount": "78.61", "cost": "2160.48", "date": "2017-04-12T01:50:17Z", "category": "Beauty", "city": "Sokolniki", "orderRating": 1 },
    { "id": 112, "product_name": "Syrup - Chocolate", "amount": 440, "discount": "10.85", "cost": "1757.55", "date": "2020-07-19T19:18:15Z", "category": "Grocery", "city": "Pallisa", "orderRating": 1 },
    { "id": 113, "product_name": "Sugar - Brown", "amount": 295, "discount": "80.21", "cost": "766.73", "date": "2017-03-30T13:31:40Z", "category": "Books", "city": "Kisasa", "orderRating": 2 },
    { "id": 114, "product_name": "Oil - Olive, Extra Virgin", "amount": 158, "discount": "171.62", "cost": "2050.08", "date": "2020-07-04T05:39:17Z", "category": "Movies", "city": "Tres Isletas", "orderRating": 4 },
    { "id": 115, "product_name": "Pasta - Bauletti, Chicken White", "amount": 72, "discount": "174.44", "cost": "955.83", "date": "2016-09-14T23:02:19Z", "category": "Sports", "city": "Pandak", "orderRating": 5 },
    { "id": 116, "product_name": "Pasta - Ravioli", "amount": 192, "discount": "188.71", "cost": "3153.91", "date": "2016-06-30T07:43:13Z", "category": "Books", "city": "San Miguel de Cauri", "orderRating": 7 },
    { "id": 117, "product_name": "Beef - Top Butt", "amount": 962, "discount": "114.58", "cost": "3341.52", "date": "2017-04-08T05:40:14Z", "category": "Sports", "city": "Dahe", "orderRating": 4 },
    { "id": 118, "product_name": "Nantucket - Kiwi Berry Cktl.", "amount": 171, "discount": "12.27", "cost": "168.10", "date": "2017-11-16T07:35:44Z", "category": "Movies", "city": "Woken", "orderRating": 4 },
    { "id": 119, "product_name": "Lumpfish Black", "amount": 851, "discount": "176.53", "cost": "920.47", "date": "2017-07-21T12:18:38Z", "category": "Toys", "city": "Nobo", "orderRating": 1 },
    { "id": 120, "product_name": "Venison - Striploin", "amount": 646, "discount": "197.18", "cost": "3700.69", "date": "2016-02-14T04:07:27Z", "category": "Beauty", "city": "Manjo", "orderRating": 3 },
    { "id": 121, "product_name": "Lemonade - Pineapple Passion", "amount": 469, "discount": "35.83", "cost": "966.47", "date": "2019-07-28T20:01:27Z", "category": "Games", "city": "Sosnovyy Bor", "orderRating": 2 },
    { "id": 122, "product_name": "Oil - Peanut", "amount": 913, "discount": "29.31", "cost": "609.89", "date": "2019-12-24T12:15:09Z", "category": "Automotive", "city": "Shezë", "orderRating": 6 },
    { "id": 123, "product_name": "Creme De Cacao Mcguines", "amount": 263, "discount": "37.75", "cost": "12.67", "date": "2020-03-18T23:05:52Z", "category": "Home", "city": "Sungai Nyamuk", "orderRating": 4 },
    { "id": 124, "product_name": "Oysters - Smoked", "amount": 800, "discount": "108.98", "cost": "4952.37", "date": "2016-03-23T06:05:08Z", "category": "Home", "city": "Muquiyauyo", "orderRating": 7 },
    { "id": 125, "product_name": "Mussels - Frozen", "amount": 681, "discount": "2.59", "cost": "1409.32", "date": "2019-07-29T18:17:10Z", "category": "Kids", "city": "Elías", "orderRating": 7 },
    { "id": 126, "product_name": "Oil - Safflower", "amount": 633, "discount": "69.17", "cost": "1544.33", "date": "2016-08-26T05:12:44Z", "category": "Movies", "city": "Yylanly", "orderRating": 3 },
    { "id": 127, "product_name": "Chicken Breast Wing On", "amount": 761, "discount": "119.85", "cost": "4106.57", "date": "2016-09-15T23:51:02Z", "category": "Games", "city": "Viejo Daan Banua", "orderRating": 2 },
    { "id": 128, "product_name": "Flour - Strong", "amount": 302, "discount": "35.96", "cost": "1478.90", "date": "2016-02-20T16:32:48Z", "category": "Games", "city": "Horní Bečva", "orderRating": 2 },
    { "id": 129, "product_name": "Loquat", "amount": 957, "discount": "81.66", "cost": "1341.05", "date": "2020-01-30T18:10:53Z", "category": "Movies", "city": "Shireet", "orderRating": 1 },
    { "id": 130, "product_name": "Lamb - Ground", "amount": 323, "discount": "47.22", "cost": "277.84", "date": "2020-06-24T05:30:31Z", "category": "Clothing", "city": "Nishiwaki", "orderRating": 1 },
    { "id": 131, "product_name": "Chestnuts - Whole,canned", "amount": 165, "discount": "68.77", "cost": "3853.16", "date": "2017-07-26T05:46:45Z", "category": "Health", "city": "Saint Pierre", "orderRating": 4 },
    { "id": 132, "product_name": "Garlic - Peeled", "amount": 354, "discount": "189.38", "cost": "2413.16", "date": "2020-06-07T18:58:12Z", "category": "Grocery", "city": "Badou", "orderRating": 6 },
    { "id": 133, "product_name": "Juice - Cranberry, 341 Ml", "amount": 763, "discount": "165.26", "cost": "984.64", "date": "2018-04-19T04:43:49Z", "category": "Home", "city": "San Vicente", "orderRating": 3 },
    { "id": 134, "product_name": "Langers - Ruby Red Grapfruit", "amount": 765, "discount": "119.70", "cost": "506.31", "date": "2016-11-22T23:32:02Z", "category": "Automotive", "city": "Beixinjie", "orderRating": 7 },
    { "id": 135, "product_name": "Flour - All Purpose", "amount": 921, "discount": "43.49", "cost": "4656.17", "date": "2018-09-14T01:35:18Z", "category": "Outdoors", "city": "Qiancang", "orderRating": 6 },
    { "id": 136, "product_name": "Water - San Pellegrino", "amount": 628, "discount": "157.31", "cost": "1616.52", "date": "2016-05-30T05:59:45Z", "category": "Garden", "city": "Reserva", "orderRating": 6 },
    { "id": 137, "product_name": "Lobster - Live", "amount": 149, "discount": "87.69", "cost": "835.98", "date": "2019-05-28T20:05:43Z", "category": "Automotive", "city": "Nedakonice", "orderRating": 6 },
    { "id": 138, "product_name": "Sausage - Andouille", "amount": 617, "discount": "61.87", "cost": "3794.76", "date": "2020-05-21T15:49:21Z", "category": "Grocery", "city": "Железный порт", "orderRating": 2 },
    { "id": 139, "product_name": "Turkey - Breast, Double", "amount": 42, "discount": "37.88", "cost": "2261.60", "date": "2016-06-26T14:32:18Z", "category": "Grocery", "city": "Vykhino-Zhulebino", "orderRating": 3 },
    { "id": 140, "product_name": "Cranberries - Frozen", "amount": 296, "discount": "97.64", "cost": "2609.23", "date": "2020-01-26T21:09:03Z", "category": "Toys", "city": "Bisée", "orderRating": 6 },
    { "id": 141, "product_name": "Papayas", "amount": 749, "discount": "34.06", "cost": "81.93", "date": "2016-06-21T05:57:09Z", "category": "Shoes", "city": "Pembroke", "orderRating": 4 },
    { "id": 142, "product_name": "Garlic - Primerba, Paste", "amount": 587, "discount": "14.22", "cost": "341.27", "date": "2016-11-19T10:17:17Z", "category": "Jewelery", "city": "Lyon", "orderRating": 7 },
    { "id": 143, "product_name": "Alize Gold Passion", "amount": 382, "discount": "174.86", "cost": "4821.94", "date": "2019-09-07T03:34:27Z", "category": "Tools", "city": "Uthal", "orderRating": 7 },
    { "id": 144, "product_name": "Sword Pick Asst", "amount": 562, "discount": "72.36", "cost": "1835.09", "date": "2020-06-18T08:39:57Z", "category": "Garden", "city": "Paraisópolis", "orderRating": 6 },
    { "id": 145, "product_name": "Cheese - St. Paulin", "amount": 985, "discount": "138.36", "cost": "4055.72", "date": "2020-04-18T19:50:13Z", "category": "Industrial", "city": "Paulba", "orderRating": 4 },
    { "id": 146, "product_name": "Pepper - Paprika, Spanish", "amount": 380, "discount": "48.07", "cost": "3001.62", "date": "2016-12-24T08:30:16Z", "category": "Clothing", "city": "Dean", "orderRating": 5 },
    { "id": 147, "product_name": "Table Cloth 62x120 White", "amount": 363, "discount": "10.40", "cost": "770.07", "date": "2017-03-04T06:06:42Z", "category": "Tools", "city": "Aldeia", "orderRating": 6 },
    { "id": 148, "product_name": "Red Snapper - Fresh, Whole", "amount": 907, "discount": "28.66", "cost": "4357.65", "date": "2019-04-18T00:40:41Z", "category": "Home", "city": "Chaumont", "orderRating": 4 },
    { "id": 149, "product_name": "Cake - Box Window 10x10x2.5", "amount": 736, "discount": "12.35", "cost": "1221.58", "date": "2019-06-08T14:30:37Z", "category": "Outdoors", "city": "Morohongō", "orderRating": 3 },
    { "id": 150, "product_name": "Beef - Bresaola", "amount": 804, "discount": "100.24", "cost": "261.05", "date": "2015-10-22T01:10:18Z", "category": "Tools", "city": "Al Fayyūm", "orderRating": 3 },
    { "id": 151, "product_name": "Bar - Sweet And Salty Chocolate", "amount": 723, "discount": "5.10", "cost": "3944.95", "date": "2016-12-11T22:56:43Z", "category": "Computers", "city": "Sorochinsk", "orderRating": 4 },
    { "id": 152, "product_name": "Coconut - Shredded, Unsweet", "amount": 648, "discount": "29.71", "cost": "796.12", "date": "2020-03-26T21:43:25Z", "category": "Beauty", "city": "Valuyki", "orderRating": 7 },
    { "id": 153, "product_name": "Tandoori Curry Paste", "amount": 759, "discount": "68.21", "cost": "1473.02", "date": "2017-05-08T19:37:14Z", "category": "Computers", "city": "Malgobek", "orderRating": 7 },
    { "id": 154, "product_name": "Bread Bowl Plain", "amount": 282, "discount": "197.71", "cost": "2155.78", "date": "2019-01-19T01:32:21Z", "category": "Electronics", "city": "Toledo", "orderRating": 5 },
    { "id": 155, "product_name": "Pork - European Side Bacon", "amount": 932, "discount": "26.71", "cost": "3530.08", "date": "2017-08-01T05:12:41Z", "category": "Music", "city": "Pekijing", "orderRating": 7 },
    { "id": 156, "product_name": "Island Oasis - Strawberry", "amount": 364, "discount": "164.08", "cost": "4849.18", "date": "2019-11-27T00:00:00Z", "category": "Grocery", "city": "Arevik", "orderRating": 5 },
    { "id": 157, "product_name": "Soup - Campbells, Chix Gumbo", "amount": 592, "discount": "53.01", "cost": "4962.84", "date": "2016-01-11T01:16:30Z", "category": "Tools", "city": "Weiyuankou", "orderRating": 2 },
    { "id": 158, "product_name": "Soup - Campbells Chicken", "amount": 336, "discount": "1.83", "cost": "2212.47", "date": "2019-01-28T14:40:27Z", "category": "Games", "city": "Novopokrovskaya", "orderRating": 7 },
    { "id": 159, "product_name": "Lamb - Leg, Bone In", "amount": 657, "discount": "180.09", "cost": "2935.23", "date": "2018-05-26T16:25:10Z", "category": "Clothing", "city": "Nova Friburgo", "orderRating": 3 },
    { "id": 160, "product_name": "Apple - Custard", "amount": 586, "discount": "169.20", "cost": "2377.49", "date": "2015-11-05T16:18:03Z", "category": "Computers", "city": "Lingdangge", "orderRating": 5 },
    { "id": 161, "product_name": "Muffin Orange Individual", "amount": 803, "discount": "138.87", "cost": "3282.53", "date": "2017-04-09T02:48:10Z", "category": "Toys", "city": "Xiejiaya", "orderRating": 7 },
    { "id": 162, "product_name": "Kippers - Smoked", "amount": 51, "discount": "152.19", "cost": "1031.21", "date": "2016-07-16T02:37:44Z", "category": "Baby", "city": "Zgurovka", "orderRating": 7 },
    { "id": 163, "product_name": "Sage Derby", "amount": 869, "discount": "101.78", "cost": "1849.03", "date": "2018-04-28T05:43:11Z", "category": "Grocery", "city": "Al Fuwayliq", "orderRating": 6 },
    { "id": 164, "product_name": "Rum - Coconut, Malibu", "amount": 612, "discount": "110.07", "cost": "2174.26", "date": "2019-08-14T17:36:59Z", "category": "Tools", "city": "Yablochnyy", "orderRating": 1 },
    { "id": 165, "product_name": "Bagelers", "amount": 977, "discount": "31.10", "cost": "4778.51", "date": "2019-09-16T20:55:20Z", "category": "Electronics", "city": "Dąbrowice", "orderRating": 2 },
    { "id": 166, "product_name": "Ecolab Crystal Fusion", "amount": 84, "discount": "116.48", "cost": "4287.35", "date": "2019-02-01T00:24:14Z", "category": "Automotive", "city": "Herzliya Pituah", "orderRating": 4 },
    { "id": 167, "product_name": "Sour Puss Raspberry", "amount": 776, "discount": "101.18", "cost": "406.13", "date": "2017-05-31T16:25:51Z", "category": "Music", "city": "Cullhuas", "orderRating": 5 },
    { "id": 168, "product_name": "Tomatoes - Grape", "amount": 829, "discount": "170.91", "cost": "3160.23", "date": "2019-03-19T05:24:12Z", "category": "Home", "city": "Thongwa", "orderRating": 6 },
    { "id": 169, "product_name": "Coke - Diet, 355 Ml", "amount": 936, "discount": "172.89", "cost": "2479.96", "date": "2019-11-14T13:42:19Z", "category": "Games", "city": "Dajianchang", "orderRating": 5 },
    { "id": 170, "product_name": "Veal - Inside Round / Top, Lean", "amount": 209, "discount": "15.26", "cost": "1813.04", "date": "2020-05-08T13:59:34Z", "category": "Movies", "city": "Palca", "orderRating": 4 },
    { "id": 171, "product_name": "Paper Towel Touchless", "amount": 386, "discount": "69.31", "cost": "1996.37", "date": "2018-01-23T00:22:41Z", "category": "Books", "city": "Hässelby", "orderRating": 7 },
    { "id": 172, "product_name": "Oil - Safflower", "amount": 859, "discount": "14.60", "cost": "668.93", "date": "2016-09-20T02:55:36Z", "category": "Tools", "city": "Qingshui", "orderRating": 3 },
    { "id": 173, "product_name": "Cup Translucent 9 Oz", "amount": 437, "discount": "48.59", "cost": "2681.71", "date": "2017-04-18T21:22:35Z", "category": "Grocery", "city": "Shiren", "orderRating": 1 },
    { "id": 174, "product_name": "Steampan - Lid For Half Size", "amount": 60, "discount": "85.40", "cost": "4319.17", "date": "2016-01-28T17:37:17Z", "category": "Automotive", "city": "Gelsenkirchen", "orderRating": 5 },
    { "id": 175, "product_name": "Beef - Ox Tongue, Pickled", "amount": 132, "discount": "118.01", "cost": "1017.90", "date": "2019-10-05T18:18:41Z", "category": "Garden", "city": "Gorodets", "orderRating": 7 },
    { "id": 176, "product_name": "Beer - True North Strong Ale", "amount": 629, "discount": "153.30", "cost": "3617.20", "date": "2018-10-04T18:24:18Z", "category": "Baby", "city": "Easington", "orderRating": 5 },
    { "id": 177, "product_name": "Egg - Salad Premix", "amount": 213, "discount": "122.15", "cost": "4281.22", "date": "2019-07-26T23:44:06Z", "category": "Movies", "city": "Igoumenítsa", "orderRating": 3 },
    { "id": 178, "product_name": "Rabbit - Whole", "amount": 17, "discount": "106.27", "cost": "456.93", "date": "2016-07-27T20:13:00Z", "category": "Industrial", "city": "Hasan", "orderRating": 1 },
    { "id": 179, "product_name": "Oil - Sesame", "amount": 11, "discount": "52.21", "cost": "2974.80", "date": "2016-06-10T10:42:49Z", "category": "Baby", "city": "Mulifanua", "orderRating": 3 },
    { "id": 180, "product_name": "Vodka - Smirnoff", "amount": 767, "discount": "113.89", "cost": "1640.65", "date": "2018-12-17T05:26:29Z", "category": "Industrial", "city": "Mazha", "orderRating": 4 },
    { "id": 181, "product_name": "Wakami Seaweed", "amount": 783, "discount": "95.14", "cost": "3962.93", "date": "2019-07-28T19:59:46Z", "category": "Outdoors", "city": "Yandun", "orderRating": 2 },
    { "id": 182, "product_name": "Beans - Kidney White", "amount": 448, "discount": "33.73", "cost": "2622.81", "date": "2019-08-07T10:04:50Z", "category": "Movies", "city": "Ambon", "orderRating": 2 },
    { "id": 183, "product_name": "Beef - Shank", "amount": 79, "discount": "123.27", "cost": "3752.79", "date": "2016-07-12T02:50:46Z", "category": "Clothing", "city": "Longaví", "orderRating": 2 },
    { "id": 184, "product_name": "Sauce - Soya, Dark", "amount": 949, "discount": "82.85", "cost": "1268.50", "date": "2019-09-12T02:11:54Z", "category": "Electronics", "city": "Angered", "orderRating": 6 },
    { "id": 185, "product_name": "Octopus", "amount": 142, "discount": "56.73", "cost": "4703.51", "date": "2017-10-13T13:26:38Z", "category": "Garden", "city": "Ganyesa", "orderRating": 3 },
    { "id": 186, "product_name": "Bread - Pumpernickel", "amount": 143, "discount": "59.49", "cost": "1300.11", "date": "2018-10-10T11:37:49Z", "category": "Baby", "city": "Tëploye", "orderRating": 4 },
    { "id": 187, "product_name": "Chocolate Liqueur - Godet White", "amount": 366, "discount": "81.10", "cost": "1581.72", "date": "2017-07-12T04:36:51Z", "category": "Jewelery", "city": "Orlando", "orderRating": 7 },
    { "id": 188, "product_name": "Meldea Green Tea Liquor", "amount": 648, "discount": "9.44", "cost": "957.47", "date": "2016-02-04T04:28:24Z", "category": "Automotive", "city": "Suzaka", "orderRating": 5 },
    { "id": 189, "product_name": "Lettuce - Boston Bib", "amount": 534, "discount": "124.85", "cost": "938.57", "date": "2018-02-11T04:41:49Z", "category": "Beauty", "city": "Condega", "orderRating": 6 },
    { "id": 190, "product_name": "Flavouring - Rum", "amount": 916, "discount": "4.14", "cost": "4669.68", "date": "2020-01-04T18:50:57Z", "category": "Toys", "city": "El Alamo", "orderRating": 4 },
    { "id": 191, "product_name": "Tea - Apple Green Tea", "amount": 760, "discount": "31.92", "cost": "4740.04", "date": "2017-10-11T21:59:58Z", "category": "Garden", "city": "Adigeni", "orderRating": 7 },
    { "id": 192, "product_name": "Blouse / Shirt / Sweater", "amount": 934, "discount": "80.80", "cost": "2547.52", "date": "2017-10-04T00:10:10Z", "category": "Kids", "city": "Ebute Ikorodu", "orderRating": 1 },
    { "id": 193, "product_name": "Bar - Granola Trail Mix Fruit Nut", "amount": 313, "discount": "52.34", "cost": "1944.44", "date": "2020-05-29T12:42:20Z", "category": "Health", "city": "Muskegon", "orderRating": 4 },
    { "id": 194, "product_name": "Spinach - Spinach Leaf", "amount": 403, "discount": "168.74", "cost": "2669.81", "date": "2016-12-28T13:25:00Z", "category": "Jewelery", "city": "Ailuk", "orderRating": 1 },
    { "id": 195, "product_name": "Jerusalem Artichoke", "amount": 417, "discount": "31.74", "cost": "574.04", "date": "2017-03-03T19:22:42Z", "category": "Grocery", "city": "Jinzao", "orderRating": 6 },
    { "id": 196, "product_name": "Veal - Chops, Split, Frenched", "amount": 288, "discount": "37.42", "cost": "1334.11", "date": "2017-06-06T14:55:00Z", "category": "Games", "city": "Daxin", "orderRating": 5 },
    { "id": 197, "product_name": "Pork Ham Prager", "amount": 24, "discount": "132.51", "cost": "4878.09", "date": "2016-06-26T22:10:15Z", "category": "Automotive", "city": "Ushirombo", "orderRating": 2 },
    { "id": 198, "product_name": "Bread - Rye", "amount": 693, "discount": "22.80", "cost": "1732.43", "date": "2019-11-26T03:38:35Z", "category": "Health", "city": "Cortinhas", "orderRating": 2 },
    { "id": 199, "product_name": "Sponge Cake Mix - Vanilla", "amount": 787, "discount": "95.60", "cost": "802.16", "date": "2020-02-24T02:10:06Z", "category": "Beauty", "city": "Yueyahe", "orderRating": 2 },
    { "id": 200, "product_name": "Scallops 60/80 Iqf", "amount": 348, "discount": "5.09", "cost": "3607.42", "date": "2018-01-24T05:54:56Z", "category": "Toys", "city": "Pyay", "orderRating": 7 },
    { "id": 201, "product_name": "Liqueur Banana, Ramazzotti", "amount": 747, "discount": "57.47", "cost": "4701.33", "date": "2017-03-31T13:17:14Z", "category": "Kids", "city": "Lajeosa do Mondego", "orderRating": 7 },
    { "id": 202, "product_name": "Pork - Back, Long Cut, Boneless", "amount": 220, "discount": "99.74", "cost": "1130.84", "date": "2017-06-27T01:27:08Z", "category": "Games", "city": "Ban Houakhoua", "orderRating": 6 },
    { "id": 203, "product_name": "Wine - Red, Gamay Noir", "amount": 992, "discount": "117.75", "cost": "2502.73", "date": "2016-05-11T02:37:28Z", "category": "Outdoors", "city": "Pancanagara", "orderRating": 7 },
    { "id": 204, "product_name": "Gatorade - Lemon Lime", "amount": 243, "discount": "105.05", "cost": "2212.78", "date": "2015-10-14T00:14:43Z", "category": "Industrial", "city": "Puerto Rico", "orderRating": 5 },
    { "id": 205, "product_name": "Steamers White", "amount": 362, "discount": "25.14", "cost": "3601.25", "date": "2016-08-09T01:34:46Z", "category": "Outdoors", "city": "Si’en", "orderRating": 4 },
    { "id": 206, "product_name": "Beer - Moosehead", "amount": 3, "discount": "27.33", "cost": "1232.96", "date": "2019-02-21T17:56:36Z", "category": "Games", "city": "Morazán", "orderRating": 4 },
    { "id": 207, "product_name": "Pork Loin Bine - In Frenched", "amount": 580, "discount": "26.55", "cost": "889.18", "date": "2018-02-25T14:26:18Z", "category": "Industrial", "city": "Weibin", "orderRating": 1 },
    { "id": 208, "product_name": "Nori Sea Weed - Gold Label", "amount": 394, "discount": "143.96", "cost": "4721.35", "date": "2016-11-25T18:00:50Z", "category": "Grocery", "city": "Iqaluit", "orderRating": 7 },
    { "id": 209, "product_name": "Pastry - Chocolate Marble Tea", "amount": 273, "discount": "142.45", "cost": "4575.84", "date": "2017-02-20T05:36:57Z", "category": "Tools", "city": "Soeng Sang", "orderRating": 4 },
    { "id": 210, "product_name": "Tuna - Salad Premix", "amount": 441, "discount": "22.97", "cost": "3131.00", "date": "2017-03-22T02:02:32Z", "category": "Health", "city": "Pécs", "orderRating": 1 },
    { "id": 211, "product_name": "Lemonade - Strawberry, 591 Ml", "amount": 432, "discount": "175.99", "cost": "2585.74", "date": "2019-10-18T01:26:08Z", "category": "Grocery", "city": "Yiwa", "orderRating": 7 },
    { "id": 212, "product_name": "Bread - Sour Batard", "amount": 927, "discount": "9.24", "cost": "4477.65", "date": "2020-05-28T10:00:10Z", "category": "Sports", "city": "Shizi", "orderRating": 5 },
    { "id": 213, "product_name": "Snapple - Iced Tea Peach", "amount": 638, "discount": "12.83", "cost": "224.59", "date": "2018-03-19T21:45:31Z", "category": "Outdoors", "city": "Yosowilangun", "orderRating": 6 },
    { "id": 214, "product_name": "Beer - Blue Light", "amount": 777, "discount": "191.02", "cost": "104.88", "date": "2020-01-26T01:42:59Z", "category": "Sports", "city": "Jinping", "orderRating": 5 },
    { "id": 215, "product_name": "Sprouts - China Rose", "amount": 973, "discount": "74.49", "cost": "3820.40", "date": "2016-07-26T14:35:11Z", "category": "Music", "city": "Colima", "orderRating": 4 },
    { "id": 216, "product_name": "Brandy Apricot", "amount": 837, "discount": "32.02", "cost": "901.88", "date": "2020-03-01T22:06:50Z", "category": "Electronics", "city": "Severo-Zadonsk", "orderRating": 2 },
    { "id": 217, "product_name": "Chip - Potato Dill Pickle", "amount": 984, "discount": "61.97", "cost": "3039.45", "date": "2020-05-28T20:12:09Z", "category": "Garden", "city": "Nîmes", "orderRating": 1 },
    { "id": 218, "product_name": "Jerusalem Artichoke", "amount": 597, "discount": "57.75", "cost": "3332.29", "date": "2017-10-07T08:34:34Z", "category": "Grocery", "city": "Guisser", "orderRating": 1 },
    { "id": 219, "product_name": "Sprouts - Baby Pea Tendrils", "amount": 5, "discount": "192.68", "cost": "1070.74", "date": "2018-01-12T03:47:54Z", "category": "Health", "city": "Balidian", "orderRating": 7 },
    { "id": 220, "product_name": "Cheese - Cheddar With Claret", "amount": 912, "discount": "135.23", "cost": "3683.52", "date": "2019-12-21T15:44:47Z", "category": "Industrial", "city": "Peace River", "orderRating": 5 },
    { "id": 221, "product_name": "Energy Drink Red Bull", "amount": 923, "discount": "146.84", "cost": "3887.92", "date": "2019-04-28T06:07:50Z", "category": "Outdoors", "city": "Nelazskoye", "orderRating": 7 },
    { "id": 222, "product_name": "Paper Towel Touchless", "amount": 653, "discount": "153.09", "cost": "3963.56", "date": "2020-07-19T12:36:05Z", "category": "Kids", "city": "Chaniá", "orderRating": 6 },
    { "id": 223, "product_name": "Turkey - Ground. Lean", "amount": 379, "discount": "163.56", "cost": "16.18", "date": "2019-04-08T13:38:34Z", "category": "Computers", "city": "Buchou", "orderRating": 1 },
    { "id": 224, "product_name": "Mahi Mahi", "amount": 372, "discount": "154.62", "cost": "924.86", "date": "2015-11-12T03:07:04Z", "category": "Baby", "city": "Bastan", "orderRating": 4 },
    { "id": 225, "product_name": "Squash - Sunburst", "amount": 925, "discount": "100.68", "cost": "1674.06", "date": "2020-08-09T00:04:04Z", "category": "Kids", "city": "Åkersberga", "orderRating": 7 },
    { "id": 226, "product_name": "Eggplant Italian", "amount": 224, "discount": "100.26", "cost": "2120.91", "date": "2016-04-20T03:36:42Z", "category": "Kids", "city": "Delães", "orderRating": 3 },
    { "id": 227, "product_name": "Nantucket - Carrot Orange", "amount": 210, "discount": "100.75", "cost": "2676.91", "date": "2019-08-25T15:55:07Z", "category": "Books", "city": "Xianshuigu", "orderRating": 2 },
    { "id": 228, "product_name": "Peppercorns - Pink", "amount": 550, "discount": "85.22", "cost": "2320.20", "date": "2015-12-30T09:24:51Z", "category": "Electronics", "city": "Santo Domingo Oeste", "orderRating": 3 },
    { "id": 229, "product_name": "Nacho Chips", "amount": 679, "discount": "177.12", "cost": "1127.97", "date": "2017-11-03T21:34:03Z", "category": "Outdoors", "city": "La Esperanza", "orderRating": 5 },
    { "id": 230, "product_name": "Wine - Chenin Blanc K.w.v.", "amount": 938, "discount": "101.48", "cost": "3539.97", "date": "2018-10-30T18:23:10Z", "category": "Beauty", "city": "Xingxi", "orderRating": 7 },
    { "id": 231, "product_name": "Longan", "amount": 115, "discount": "44.41", "cost": "172.47", "date": "2019-11-17T17:33:37Z", "category": "Electronics", "city": "Baoli", "orderRating": 6 },
    { "id": 232, "product_name": "Lettuce - Boston Bib - Organic", "amount": 953, "discount": "94.40", "cost": "863.29", "date": "2018-06-14T17:25:24Z", "category": "Grocery", "city": "Broumov", "orderRating": 2 },
    { "id": 233, "product_name": "Beer - Rickards Red", "amount": 102, "discount": "7.06", "cost": "333.11", "date": "2018-03-27T02:47:36Z", "category": "Garden", "city": "Jenzan", "orderRating": 2 },
    { "id": 234, "product_name": "Rum - White, Gg White", "amount": 174, "discount": "134.04", "cost": "3524.99", "date": "2019-01-06T18:10:42Z", "category": "Home", "city": "Pombal", "orderRating": 3 },
    { "id": 235, "product_name": "Clementine", "amount": 327, "discount": "9.18", "cost": "2702.58", "date": "2019-08-31T15:04:05Z", "category": "Grocery", "city": "Mpika", "orderRating": 6 },
    { "id": 236, "product_name": "Pork - Tenderloin, Frozen", "amount": 304, "discount": "74.23", "cost": "4377.33", "date": "2016-07-11T18:08:18Z", "category": "Industrial", "city": "Arcena Pequena", "orderRating": 4 },
    { "id": 237, "product_name": "Wine - Spumante Bambino White", "amount": 161, "discount": "17.06", "cost": "3456.30", "date": "2020-04-22T11:45:25Z", "category": "Jewelery", "city": "Praia da Vagueira", "orderRating": 7 },
    { "id": 238, "product_name": "Chicken Giblets", "amount": 378, "discount": "169.27", "cost": "1844.45", "date": "2017-12-23T02:09:17Z", "category": "Computers", "city": "Kodamachō-kodamaminami", "orderRating": 6 },
    { "id": 239, "product_name": "Chocolate - Liqueur Cups With Foil", "amount": 616, "discount": "7.26", "cost": "4986.00", "date": "2019-06-18T09:46:57Z", "category": "Games", "city": "Santander de Quilichao", "orderRating": 5 },
    { "id": 240, "product_name": "Carbonated Water - Peach", "amount": 68, "discount": "86.96", "cost": "1561.30", "date": "2017-10-03T11:09:24Z", "category": "Computers", "city": "Al Jawādīyah", "orderRating": 7 },
    { "id": 241, "product_name": "Beef - Ox Tail, Frozen", "amount": 378, "discount": "118.56", "cost": "609.90", "date": "2016-04-29T20:18:35Z", "category": "Music", "city": "Panunggangan", "orderRating": 2 },
    { "id": 242, "product_name": "Ice Cream - Vanilla", "amount": 937, "discount": "82.13", "cost": "1111.36", "date": "2016-12-01T00:06:06Z", "category": "Movies", "city": "Kostinbrod", "orderRating": 2 },
    { "id": 243, "product_name": "Catfish - Fillets", "amount": 195, "discount": "71.44", "cost": "2293.84", "date": "2018-04-16T16:51:01Z", "category": "Toys", "city": "Markaz Mudhaykirah", "orderRating": 6 },
    { "id": 244, "product_name": "Longos - Lasagna Beef", "amount": 955, "discount": "174.92", "cost": "2828.39", "date": "2017-10-01T07:08:14Z", "category": "Jewelery", "city": "San Ramon", "orderRating": 4 },
    { "id": 245, "product_name": "Ecolab - Hobart Washarm End Cap", "amount": 288, "discount": "2.15", "cost": "18.85", "date": "2018-03-20T08:20:00Z", "category": "Home", "city": "Goragorskiy", "orderRating": 7 },
    { "id": 246, "product_name": "Carbonated Water - White Grape", "amount": 793, "discount": "135.23", "cost": "227.65", "date": "2017-02-12T03:47:44Z", "category": "Toys", "city": "Ustrzyki Dolne", "orderRating": 4 },
    { "id": 247, "product_name": "Mushroom - Chanterelle Frozen", "amount": 363, "discount": "147.45", "cost": "472.83", "date": "2020-07-07T01:19:08Z", "category": "Electronics", "city": "Själevad", "orderRating": 4 },
    { "id": 248, "product_name": "Cup Translucent 9 Oz", "amount": 488, "discount": "46.56", "cost": "431.28", "date": "2017-08-13T15:43:40Z", "category": "Garden", "city": "Baochang", "orderRating": 5 },
    { "id": 249, "product_name": "Chocolate - Milk, Callets", "amount": 511, "discount": "132.80", "cost": "1202.82", "date": "2020-01-15T04:48:13Z", "category": "Games", "city": "Cibugel", "orderRating": 7 },
    { "id": 250, "product_name": "Squid Ink", "amount": 561, "discount": "125.58", "cost": "2788.46", "date": "2016-08-08T07:38:08Z", "category": "Toys", "city": "Klampis", "orderRating": 5 },
    { "id": 251, "product_name": "Potatoes - Instant, Mashed", "amount": 36, "discount": "71.63", "cost": "4563.41", "date": "2018-12-29T04:51:59Z", "category": "Clothing", "city": "Bergen", "orderRating": 2 },
    { "id": 252, "product_name": "Carbonated Water - Blackcherry", "amount": 614, "discount": "186.45", "cost": "4797.41", "date": "2018-02-09T04:38:01Z", "category": "Health", "city": "Fushë-Bulqizë", "orderRating": 1 },
    { "id": 253, "product_name": "Veal - Loin", "amount": 34, "discount": "6.42", "cost": "2997.13", "date": "2017-05-24T03:28:25Z", "category": "Electronics", "city": "Pýli", "orderRating": 2 },
    { "id": 254, "product_name": "Lettuce - Boston Bib", "amount": 555, "discount": "164.93", "cost": "2012.98", "date": "2018-06-13T12:49:38Z", "category": "Jewelery", "city": "Säffle", "orderRating": 3 },
    { "id": 255, "product_name": "Pepper - Red Thai", "amount": 911, "discount": "132.29", "cost": "1867.22", "date": "2019-12-16T07:09:14Z", "category": "Clothing", "city": "Surazh", "orderRating": 1 },
    { "id": 256, "product_name": "Dried Cranberries", "amount": 209, "discount": "106.06", "cost": "537.35", "date": "2017-11-06T22:19:44Z", "category": "Beauty", "city": "Ziyuan", "orderRating": 1 },
    { "id": 257, "product_name": "Extract - Raspberry", "amount": 618, "discount": "124.59", "cost": "403.04", "date": "2016-07-11T20:01:20Z", "category": "Music", "city": "Lom Sak", "orderRating": 3 },
    { "id": 258, "product_name": "Coffee - 10oz Cup 92961", "amount": 41, "discount": "69.72", "cost": "2211.68", "date": "2016-01-07T14:19:46Z", "category": "Baby", "city": "Baofeng", "orderRating": 5 },
    { "id": 259, "product_name": "Lobster - Tail, 3 - 4 Oz", "amount": 57, "discount": "169.49", "cost": "2812.29", "date": "2019-08-22T05:34:28Z", "category": "Books", "city": "Batibati", "orderRating": 3 },
    { "id": 260, "product_name": "Petit Baguette", "amount": 546, "discount": "73.70", "cost": "1350.82", "date": "2020-01-19T11:27:03Z", "category": "Computers", "city": "Heshan", "orderRating": 5 },
    { "id": 261, "product_name": "Ecolab - Lime - A - Way 4/4 L", "amount": 596, "discount": "116.72", "cost": "4687.11", "date": "2019-12-30T05:59:36Z", "category": "Garden", "city": "Freetown", "orderRating": 6 },
    { "id": 262, "product_name": "Chocolate - Mi - Amere Semi", "amount": 357, "discount": "180.32", "cost": "859.42", "date": "2016-02-14T09:47:35Z", "category": "Books", "city": "Guayabal", "orderRating": 7 },
    { "id": 263, "product_name": "Soup - Campbells, Butternut", "amount": 719, "discount": "165.34", "cost": "2762.24", "date": "2017-03-18T15:10:18Z", "category": "Outdoors", "city": "Yaurisque", "orderRating": 2 },
    { "id": 264, "product_name": "Numi - Assorted Teas", "amount": 103, "discount": "123.96", "cost": "3594.31", "date": "2018-03-03T22:39:47Z", "category": "Home", "city": "Carcavelos", "orderRating": 5 },
    { "id": 265, "product_name": "Soup Campbells - Italian Wedding", "amount": 570, "discount": "94.15", "cost": "1791.88", "date": "2017-10-03T06:30:35Z", "category": "Home", "city": "Nechanice", "orderRating": 2 },
    { "id": 266, "product_name": "Beef - Short Loin", "amount": 82, "discount": "142.77", "cost": "1830.27", "date": "2020-04-14T11:02:36Z", "category": "Games", "city": "Caminaca", "orderRating": 4 },
    { "id": 267, "product_name": "Compound - Passion Fruit", "amount": 143, "discount": "160.05", "cost": "2233.50", "date": "2015-12-06T07:16:48Z", "category": "Sports", "city": "Santana do Livramento", "orderRating": 5 },
    { "id": 268, "product_name": "Syrup - Monin, Irish Cream", "amount": 763, "discount": "58.52", "cost": "2037.30", "date": "2019-01-28T12:13:33Z", "category": "Automotive", "city": "Växjö", "orderRating": 6 },
    { "id": 269, "product_name": "Turkey Tenderloin Frozen", "amount": 247, "discount": "70.70", "cost": "1400.64", "date": "2018-09-02T11:26:32Z", "category": "Grocery", "city": "Suwalan", "orderRating": 4 },
    { "id": 270, "product_name": "Dill Weed - Dry", "amount": 49, "discount": "52.79", "cost": "4487.64", "date": "2019-12-29T02:50:49Z", "category": "Grocery", "city": "Akkol’", "orderRating": 7 },
    { "id": 271, "product_name": "Muffin Mix - Oatmeal", "amount": 294, "discount": "73.05", "cost": "694.22", "date": "2016-01-24T06:11:16Z", "category": "Music", "city": "Pitai", "orderRating": 2 },
    { "id": 272, "product_name": "Cumin - Ground", "amount": 900, "discount": "71.50", "cost": "1687.46", "date": "2017-06-19T20:15:47Z", "category": "Sports", "city": "Chaiyaphum", "orderRating": 7 },
    { "id": 273, "product_name": "Tomatoes - Orange", "amount": 642, "discount": "148.95", "cost": "466.12", "date": "2016-11-03T05:06:31Z", "category": "Games", "city": "Dongping", "orderRating": 2 },
    { "id": 274, "product_name": "Mortadella", "amount": 70, "discount": "15.04", "cost": "4639.41", "date": "2019-10-14T20:59:29Z", "category": "Grocery", "city": "Belsk Duży", "orderRating": 1 },
    { "id": 275, "product_name": "Liqueur - Melon", "amount": 966, "discount": "150.76", "cost": "1278.32", "date": "2018-01-21T12:51:38Z", "category": "Health", "city": "Prachin Buri", "orderRating": 3 },
    { "id": 276, "product_name": "White Fish - Filets", "amount": 682, "discount": "45.65", "cost": "2651.73", "date": "2016-06-03T15:52:28Z", "category": "Baby", "city": "Bondowoso", "orderRating": 4 },
    { "id": 277, "product_name": "Wine - White, Ej", "amount": 127, "discount": "28.65", "cost": "1020.48", "date": "2019-02-01T10:21:32Z", "category": "Baby", "city": "Tyret’ Pervaya", "orderRating": 2 },
    { "id": 278, "product_name": "Cut Wakame - Hanawakaba", "amount": 970, "discount": "38.78", "cost": "4765.82", "date": "2017-11-15T05:25:55Z", "category": "Home", "city": "Babakan", "orderRating": 3 },
    { "id": 279, "product_name": "Chicken - Bones", "amount": 119, "discount": "28.02", "cost": "4289.88", "date": "2018-01-21T10:49:34Z", "category": "Kids", "city": "Jiaojie", "orderRating": 5 },
    { "id": 280, "product_name": "Soup Campbells Beef With Veg", "amount": 986, "discount": "121.42", "cost": "4971.96", "date": "2017-05-08T22:59:06Z", "category": "Shoes", "city": "Kaeng Khoi", "orderRating": 5 },
    { "id": 281, "product_name": "Tart - Lemon", "amount": 230, "discount": "136.17", "cost": "4081.94", "date": "2018-06-26T11:54:38Z", "category": "Movies", "city": "Myadzyel", "orderRating": 3 },
    { "id": 282, "product_name": "Puree - Mocha", "amount": 853, "discount": "15.15", "cost": "2696.07", "date": "2017-09-16T02:41:43Z", "category": "Electronics", "city": "Jetak Kulon", "orderRating": 1 },
    { "id": 283, "product_name": "Soup - Campbells Tomato Ravioli", "amount": 192, "discount": "8.57", "cost": "3963.60", "date": "2016-08-28T02:32:58Z", "category": "Home", "city": "Santiago del Estero", "orderRating": 1 },
    { "id": 284, "product_name": "Lettuce - Lambs Mash", "amount": 176, "discount": "187.63", "cost": "2223.31", "date": "2016-08-01T04:23:47Z", "category": "Home", "city": "Beltinci", "orderRating": 6 },
    { "id": 285, "product_name": "Wine - Mas Chicet Rose, Vintage", "amount": 311, "discount": "45.03", "cost": "2226.61", "date": "2017-09-24T04:50:13Z", "category": "Music", "city": "Bataiporã", "orderRating": 1 },
    { "id": 286, "product_name": "Grand Marnier", "amount": 236, "discount": "103.64", "cost": "3458.98", "date": "2019-12-01T07:16:51Z", "category": "Home", "city": "Little Rock", "orderRating": 2 },
    { "id": 287, "product_name": "Nantucket Cranberry Juice", "amount": 359, "discount": "68.17", "cost": "1167.37", "date": "2017-08-03T01:09:27Z", "category": "Shoes", "city": "Pittsburgh", "orderRating": 7 },
    { "id": 288, "product_name": "Beef - Ox Tail, Frozen", "amount": 437, "discount": "67.17", "cost": "131.19", "date": "2016-08-28T00:40:09Z", "category": "Shoes", "city": "Shar’ya", "orderRating": 1 },
    { "id": 289, "product_name": "Clam - Cherrystone", "amount": 829, "discount": "72.13", "cost": "172.51", "date": "2016-05-23T12:35:14Z", "category": "Kids", "city": "Putrajaya", "orderRating": 7 },
    { "id": 290, "product_name": "Wine - Cave Springs Dry Riesling", "amount": 289, "discount": "42.88", "cost": "2910.76", "date": "2019-08-01T12:03:19Z", "category": "Electronics", "city": "Jiangqiao", "orderRating": 3 },
    { "id": 291, "product_name": "Chicken - Soup Base", "amount": 394, "discount": "194.02", "cost": "2219.18", "date": "2019-06-04T12:09:49Z", "category": "Baby", "city": "San Fernando del Valle de Catamarca", "orderRating": 7 },
    { "id": 292, "product_name": "Bread - Rye", "amount": 451, "discount": "89.99", "cost": "697.35", "date": "2019-03-16T18:28:03Z", "category": "Sports", "city": "Jinqiao", "orderRating": 2 },
    { "id": 293, "product_name": "Rootbeer", "amount": 794, "discount": "122.64", "cost": "3180.68", "date": "2020-05-04T07:42:47Z", "category": "Beauty", "city": "Jinshandian", "orderRating": 4 },
    { "id": 294, "product_name": "Wine - Ice Wine", "amount": 684, "discount": "95.65", "cost": "1195.47", "date": "2019-10-30T00:20:22Z", "category": "Outdoors", "city": "Nunsena", "orderRating": 1 },
    { "id": 295, "product_name": "Toothpick Frilled", "amount": 53, "discount": "159.05", "cost": "1562.71", "date": "2016-03-22T20:26:09Z", "category": "Automotive", "city": "Sława", "orderRating": 5 },
    { "id": 296, "product_name": "Spring Roll Veg Mini", "amount": 943, "discount": "11.97", "cost": "3821.77", "date": "2019-10-03T13:06:29Z", "category": "Home", "city": "Hobart", "orderRating": 1 },
    { "id": 297, "product_name": "Miso - Soy Bean Paste", "amount": 262, "discount": "59.31", "cost": "2089.98", "date": "2016-03-30T15:40:44Z", "category": "Industrial", "city": "Kamyanyuki", "orderRating": 6 },
    { "id": 298, "product_name": "Wine - Red, Lurton Merlot De", "amount": 793, "discount": "82.17", "cost": "4922.48", "date": "2019-12-21T02:58:09Z", "category": "Books", "city": "Thanh Nê", "orderRating": 2 },
    { "id": 299, "product_name": "Tarts Assorted", "amount": 961, "discount": "134.31", "cost": "1259.66", "date": "2016-02-14T13:30:02Z", "category": "Games", "city": "Wuyahe", "orderRating": 3 },
    { "id": 300, "product_name": "Longos - Chicken Wings", "amount": 640, "discount": "123.13", "cost": "1419.24", "date": "2019-10-03T17:13:35Z", "category": "Electronics", "city": "Tysmenychany", "orderRating": 3 },
    { "id": 301, "product_name": "Pastry - Trippleberry Muffin - Mini", "amount": 907, "discount": "145.79", "cost": "4132.28", "date": "2019-03-01T20:54:31Z", "category": "Electronics", "city": "Yantan", "orderRating": 6 },
    { "id": 302, "product_name": "Soup - Campbells, Lentil", "amount": 758, "discount": "66.82", "cost": "575.93", "date": "2016-07-15T01:13:53Z", "category": "Beauty", "city": "Quintãs", "orderRating": 1 },
    { "id": 303, "product_name": "Island Oasis - Cappucino Mix", "amount": 295, "discount": "49.84", "cost": "1110.04", "date": "2016-12-08T08:40:17Z", "category": "Garden", "city": "Zvečan", "orderRating": 7 },
    { "id": 304, "product_name": "Petite Baguette", "amount": 659, "discount": "26.28", "cost": "3584.10", "date": "2016-03-23T03:04:31Z", "category": "Shoes", "city": "São Mamede de Infesta", "orderRating": 1 },
    { "id": 305, "product_name": "Bread - 10 Grain", "amount": 896, "discount": "181.04", "cost": "3246.73", "date": "2019-12-17T09:18:14Z", "category": "Tools", "city": "Wangren", "orderRating": 1 },
    { "id": 306, "product_name": "Cheese - Pied De Vents", "amount": 388, "discount": "27.14", "cost": "2024.79", "date": "2018-07-27T17:08:56Z", "category": "Clothing", "city": "Limoges", "orderRating": 1 },
    { "id": 307, "product_name": "Turkey - Breast, Smoked", "amount": 761, "discount": "178.59", "cost": "161.24", "date": "2016-06-11T08:23:31Z", "category": "Computers", "city": "Tarutung", "orderRating": 3 },
    { "id": 308, "product_name": "Chicken - Base, Ultimate", "amount": 515, "discount": "56.85", "cost": "2980.16", "date": "2018-08-18T01:23:13Z", "category": "Games", "city": "Hulei", "orderRating": 1 },
    { "id": 309, "product_name": "Syrup - Monin - Passion Fruit", "amount": 439, "discount": "155.60", "cost": "454.99", "date": "2017-03-20T21:26:17Z", "category": "Baby", "city": "Qorveh", "orderRating": 7 },
    { "id": 310, "product_name": "Cream - 10%", "amount": 836, "discount": "35.09", "cost": "403.65", "date": "2017-09-01T01:55:32Z", "category": "Beauty", "city": "Karangsono", "orderRating": 2 },
    { "id": 311, "product_name": "Chocolate - Pistoles, Lactee, Milk", "amount": 288, "discount": "112.76", "cost": "4955.18", "date": "2016-12-19T14:12:21Z", "category": "Grocery", "city": "Baoping", "orderRating": 1 },
    { "id": 312, "product_name": "Pasta - Canelloni", "amount": 686, "discount": "72.57", "cost": "1099.90", "date": "2018-12-18T15:39:34Z", "category": "Health", "city": "Jinhua", "orderRating": 5 },
    { "id": 313, "product_name": "Veal - Heart", "amount": 127, "discount": "173.45", "cost": "4085.59", "date": "2019-05-30T18:23:08Z", "category": "Beauty", "city": "Nova Petrópolis", "orderRating": 1 },
    { "id": 314, "product_name": "Soap - Hand Soap", "amount": 541, "discount": "195.28", "cost": "3203.63", "date": "2016-12-28T11:09:56Z", "category": "Tools", "city": "Kingston", "orderRating": 6 },
    { "id": 315, "product_name": "Gherkin - Sour", "amount": 671, "discount": "115.55", "cost": "3234.96", "date": "2018-08-10T15:29:45Z", "category": "Sports", "city": "Wakkanai", "orderRating": 4 },
    { "id": 316, "product_name": "Flour - Rye", "amount": 185, "discount": "127.14", "cost": "4716.54", "date": "2017-06-16T04:16:57Z", "category": "Toys", "city": "Damāvand", "orderRating": 1 },
    { "id": 317, "product_name": "Sea Bass - Whole", "amount": 515, "discount": "106.56", "cost": "4919.31", "date": "2020-05-21T19:11:16Z", "category": "Movies", "city": "Lyuboml’", "orderRating": 3 },
    { "id": 318, "product_name": "Coconut - Creamed, Pure", "amount": 325, "discount": "137.47", "cost": "4242.68", "date": "2018-03-04T02:12:54Z", "category": "Kids", "city": "Gardinovci", "orderRating": 4 },
    { "id": 319, "product_name": "Sole - Fillet", "amount": 458, "discount": "57.30", "cost": "485.88", "date": "2017-08-19T03:07:08Z", "category": "Outdoors", "city": "Pimenta Bueno", "orderRating": 6 },
    { "id": 320, "product_name": "Lemonade - Island Tea, 591 Ml", "amount": 215, "discount": "111.47", "cost": "1417.28", "date": "2019-12-10T21:04:14Z", "category": "Garden", "city": "San Lucas", "orderRating": 1 },
    { "id": 321, "product_name": "Beer - Corona", "amount": 114, "discount": "67.80", "cost": "4733.62", "date": "2016-09-02T08:25:52Z", "category": "Shoes", "city": "Sofifi", "orderRating": 1 },
    { "id": 322, "product_name": "Baking Soda", "amount": 560, "discount": "105.88", "cost": "135.89", "date": "2017-04-10T09:44:44Z", "category": "Music", "city": "Huangliu", "orderRating": 5 },
    { "id": 323, "product_name": "Wine - White, Schroder And Schyl", "amount": 22, "discount": "186.06", "cost": "691.11", "date": "2018-11-05T09:13:07Z", "category": "Tools", "city": "Pingya", "orderRating": 3 },
    { "id": 324, "product_name": "Bread - Pita", "amount": 736, "discount": "173.42", "cost": "4237.41", "date": "2018-07-24T07:38:53Z", "category": "Games", "city": "Muli", "orderRating": 7 },
    { "id": 325, "product_name": "Ham - Black Forest", "amount": 598, "discount": "72.76", "cost": "901.07", "date": "2018-07-07T13:53:38Z", "category": "Garden", "city": "Punta Gorda", "orderRating": 7 },
    { "id": 326, "product_name": "Tamarillo", "amount": 355, "discount": "58.11", "cost": "4159.17", "date": "2017-05-10T20:35:01Z", "category": "Games", "city": "San Antonio", "orderRating": 2 },
    { "id": 327, "product_name": "Basil - Seedlings Cookstown", "amount": 561, "discount": "69.96", "cost": "4316.73", "date": "2018-02-20T16:59:02Z", "category": "Shoes", "city": "Trąbki", "orderRating": 3 },
    { "id": 328, "product_name": "Savory", "amount": 684, "discount": "54.13", "cost": "3035.63", "date": "2018-04-10T12:28:29Z", "category": "Movies", "city": "Yarumela", "orderRating": 3 },
    { "id": 329, "product_name": "Goat - Whole Cut", "amount": 971, "discount": "116.87", "cost": "2716.28", "date": "2018-03-25T03:52:29Z", "category": "Jewelery", "city": "Poroçan", "orderRating": 3 },
    { "id": 330, "product_name": "Bread - Assorted Rolls", "amount": 64, "discount": "129.25", "cost": "3672.51", "date": "2020-05-01T10:06:29Z", "category": "Shoes", "city": "Obsza", "orderRating": 3 },
    { "id": 331, "product_name": "Soup - Knorr, Chicken Noodle", "amount": 563, "discount": "75.09", "cost": "1396.68", "date": "2020-04-02T11:11:27Z", "category": "Tools", "city": "Santo Antônio de Jesus", "orderRating": 7 },
    { "id": 332, "product_name": "Cheese - Brie,danish", "amount": 14, "discount": "191.62", "cost": "551.10", "date": "2016-01-05T04:03:12Z", "category": "Movies", "city": "Korets’", "orderRating": 1 },
    { "id": 333, "product_name": "Juice - Apple, 341 Ml", "amount": 239, "discount": "93.55", "cost": "1621.47", "date": "2020-06-26T08:42:07Z", "category": "Automotive", "city": "Stung Treng", "orderRating": 4 },
    { "id": 334, "product_name": "Spinach - Frozen", "amount": 429, "discount": "69.65", "cost": "541.69", "date": "2019-04-04T09:46:58Z", "category": "Electronics", "city": "Langchuan", "orderRating": 3 },
    { "id": 335, "product_name": "Puree - Blackcurrant", "amount": 9, "discount": "11.15", "cost": "2424.06", "date": "2020-07-08T20:38:57Z", "category": "Industrial", "city": "Bulls", "orderRating": 1 },
    { "id": 336, "product_name": "Capers - Pickled", "amount": 982, "discount": "135.77", "cost": "3882.13", "date": "2018-01-25T11:59:43Z", "category": "Jewelery", "city": "Del Valle", "orderRating": 7 },
    { "id": 337, "product_name": "Soap - Hand Soap", "amount": 165, "discount": "91.23", "cost": "4767.78", "date": "2017-03-26T23:36:29Z", "category": "Games", "city": "Legen", "orderRating": 1 },
    { "id": 338, "product_name": "Energy Drink Red Bull", "amount": 959, "discount": "180.15", "cost": "865.48", "date": "2019-08-29T18:41:51Z", "category": "Industrial", "city": "Wongka", "orderRating": 1 },
    { "id": 339, "product_name": "Basil - Seedlings Cookstown", "amount": 871, "discount": "129.72", "cost": "3499.27", "date": "2018-09-24T04:56:50Z", "category": "Automotive", "city": "Ganyi", "orderRating": 7 },
    { "id": 340, "product_name": "Veal - Striploin", "amount": 233, "discount": "139.57", "cost": "4395.78", "date": "2016-01-07T21:53:27Z", "category": "Electronics", "city": "Hanggan", "orderRating": 2 },
    { "id": 341, "product_name": "Milk - Chocolate 250 Ml", "amount": 986, "discount": "149.85", "cost": "1788.93", "date": "2017-03-24T11:37:22Z", "category": "Baby", "city": "Echarate", "orderRating": 1 },
    { "id": 342, "product_name": "Bread Sour Rolls", "amount": 314, "discount": "87.95", "cost": "2700.66", "date": "2019-09-29T19:08:26Z", "category": "Sports", "city": "Fresno", "orderRating": 1 },
    { "id": 343, "product_name": "Wine - Conde De Valdemar", "amount": 618, "discount": "29.99", "cost": "2176.04", "date": "2019-07-14T00:19:25Z", "category": "Movies", "city": "Derzhavīnsk", "orderRating": 5 },
    { "id": 344, "product_name": "Pur Source", "amount": 280, "discount": "70.05", "cost": "2721.54", "date": "2016-07-18T13:19:29Z", "category": "Toys", "city": "Vishnyakovskiye Dachi", "orderRating": 3 },
    { "id": 345, "product_name": "Waffle Stix", "amount": 649, "discount": "167.27", "cost": "2274.34", "date": "2018-07-28T15:59:21Z", "category": "Computers", "city": "Sungaibengkal", "orderRating": 4 },
    { "id": 346, "product_name": "Olives - Nicoise", "amount": 608, "discount": "49.72", "cost": "2603.76", "date": "2018-02-28T00:09:33Z", "category": "Outdoors", "city": "Lianozovo", "orderRating": 2 },
    { "id": 347, "product_name": "Turnip - Wax", "amount": 854, "discount": "159.94", "cost": "3441.12", "date": "2017-02-27T11:44:13Z", "category": "Tools", "city": "Musanze", "orderRating": 3 },
    { "id": 348, "product_name": "Soup - Campbells Beef Stew", "amount": 948, "discount": "21.49", "cost": "3895.88", "date": "2016-07-01T00:14:28Z", "category": "Industrial", "city": "Kaustinen", "orderRating": 3 },
    { "id": 349, "product_name": "Aspic - Light", "amount": 726, "discount": "35.44", "cost": "860.21", "date": "2019-08-07T12:20:36Z", "category": "Jewelery", "city": "Wakapuken", "orderRating": 5 },
    { "id": 350, "product_name": "Lamb - Shoulder", "amount": 349, "discount": "10.29", "cost": "306.58", "date": "2020-05-06T01:01:30Z", "category": "Toys", "city": "Fenglin", "orderRating": 6 },
    { "id": 351, "product_name": "Nestea - Iced Tea", "amount": 832, "discount": "98.36", "cost": "3111.67", "date": "2015-12-04T19:50:41Z", "category": "Shoes", "city": "Florencia", "orderRating": 5 },
    { "id": 352, "product_name": "Coffee Decaf Colombian", "amount": 844, "discount": "90.15", "cost": "1321.99", "date": "2020-02-25T07:30:58Z", "category": "Books", "city": "Saparbay", "orderRating": 7 },
    { "id": 353, "product_name": "Sprouts - Alfalfa", "amount": 143, "discount": "168.99", "cost": "1498.20", "date": "2017-04-05T08:42:48Z", "category": "Baby", "city": "Naka", "orderRating": 1 },
    { "id": 354, "product_name": "Apple - Granny Smith", "amount": 373, "discount": "64.76", "cost": "467.20", "date": "2019-10-05T06:47:21Z", "category": "Toys", "city": "Bilo", "orderRating": 1 },
    { "id": 355, "product_name": "Nut - Macadamia", "amount": 383, "discount": "194.21", "cost": "3748.31", "date": "2015-10-19T16:17:58Z", "category": "Garden", "city": "Hînceşti", "orderRating": 3 },
    { "id": 356, "product_name": "Sauce - Marinara", "amount": 321, "discount": "149.20", "cost": "2204.55", "date": "2018-01-07T11:03:36Z", "category": "Health", "city": "Tena", "orderRating": 2 },
    { "id": 357, "product_name": "Water, Tap", "amount": 952, "discount": "194.08", "cost": "4951.33", "date": "2016-02-05T02:30:21Z", "category": "Books", "city": "Xinbu", "orderRating": 2 },
    { "id": 358, "product_name": "Oil - Sesame", "amount": 154, "discount": "3.97", "cost": "1085.04", "date": "2019-12-04T09:14:26Z", "category": "Games", "city": "Matahuasi", "orderRating": 1 },
    { "id": 359, "product_name": "Pasta - Fusili Tri - Coloured", "amount": 219, "discount": "178.46", "cost": "1581.01", "date": "2017-02-06T05:50:18Z", "category": "Tools", "city": "Wuci", "orderRating": 4 },
    { "id": 360, "product_name": "Celery", "amount": 108, "discount": "50.51", "cost": "137.47", "date": "2017-08-22T23:55:38Z", "category": "Toys", "city": "Huangchuan", "orderRating": 2 },
    { "id": 361, "product_name": "Ecolab - Power Fusion", "amount": 336, "discount": "65.13", "cost": "2314.09", "date": "2019-06-10T22:29:16Z", "category": "Jewelery", "city": "Stockholm", "orderRating": 5 },
    { "id": 362, "product_name": "Greens Mustard", "amount": 303, "discount": "171.41", "cost": "2739.14", "date": "2016-06-29T01:57:28Z", "category": "Outdoors", "city": "Yokosuka", "orderRating": 7 },
    { "id": 363, "product_name": "Chestnuts - Whole,canned", "amount": 332, "discount": "63.01", "cost": "2549.07", "date": "2019-12-20T14:57:06Z", "category": "Games", "city": "Labuhankananga", "orderRating": 3 },
    { "id": 364, "product_name": "Yukon Jack", "amount": 278, "discount": "150.54", "cost": "4815.16", "date": "2017-10-18T19:52:59Z", "category": "Industrial", "city": "São João de Meriti", "orderRating": 3 },
    { "id": 365, "product_name": "Sponge Cake Mix - Chocolate", "amount": 817, "discount": "164.29", "cost": "3318.50", "date": "2020-06-11T14:19:50Z", "category": "Beauty", "city": "Skopje", "orderRating": 6 },
    { "id": 366, "product_name": "Juice - Orange, Concentrate", "amount": 805, "discount": "25.52", "cost": "3194.47", "date": "2018-01-09T06:16:43Z", "category": "Computers", "city": "Karangasem", "orderRating": 6 },
    { "id": 367, "product_name": "Paper Cocktail Umberlla 80 - 180", "amount": 525, "discount": "185.81", "cost": "4804.44", "date": "2019-12-18T19:50:56Z", "category": "Grocery", "city": "Borgo Maggiore", "orderRating": 5 },
    { "id": 368, "product_name": "Sea Bass - Whole", "amount": 189, "discount": "53.48", "cost": "3940.21", "date": "2016-10-01T01:11:57Z", "category": "Beauty", "city": "Mrkonjić Grad", "orderRating": 5 },
    { "id": 369, "product_name": "Table Cloth 62x114 White", "amount": 142, "discount": "172.29", "cost": "4215.28", "date": "2020-04-08T21:14:55Z", "category": "Grocery", "city": "Mobile", "orderRating": 3 },
    { "id": 370, "product_name": "Pasta - Tortellini, Fresh", "amount": 375, "discount": "185.14", "cost": "3419.62", "date": "2019-02-04T10:41:47Z", "category": "Industrial", "city": "Seixezelo", "orderRating": 2 },
    { "id": 371, "product_name": "Beef - Ox Tongue", "amount": 438, "discount": "168.91", "cost": "3473.54", "date": "2016-03-13T00:16:11Z", "category": "Music", "city": "Johnson City", "orderRating": 4 },
    { "id": 372, "product_name": "Loquat", "amount": 498, "discount": "36.05", "cost": "1009.20", "date": "2016-12-04T01:51:35Z", "category": "Health", "city": "'s-Hertogenbosch", "orderRating": 3 },
    { "id": 373, "product_name": "Snapple - Mango Maddness", "amount": 27, "discount": "80.66", "cost": "1053.06", "date": "2019-07-31T21:46:56Z", "category": "Health", "city": "Las Lomas", "orderRating": 1 },
    { "id": 374, "product_name": "Bok Choy - Baby", "amount": 327, "discount": "172.85", "cost": "1737.66", "date": "2019-09-12T12:50:22Z", "category": "Computers", "city": "Nijmegen", "orderRating": 6 },
    { "id": 375, "product_name": "Tomatoes - Vine Ripe, Yellow", "amount": 818, "discount": "86.41", "cost": "3341.41", "date": "2016-04-20T23:11:56Z", "category": "Computers", "city": "Tucson", "orderRating": 3 },
    { "id": 376, "product_name": "Couscous", "amount": 131, "discount": "141.13", "cost": "567.37", "date": "2018-02-18T07:41:42Z", "category": "Industrial", "city": "Lian", "orderRating": 7 },
    { "id": 377, "product_name": "Chocolate - Dark", "amount": 471, "discount": "119.33", "cost": "4143.50", "date": "2018-04-30T11:14:15Z", "category": "Sports", "city": "Ekibastuz", "orderRating": 7 },
    { "id": 378, "product_name": "Appetizer - Assorted Box", "amount": 789, "discount": "126.04", "cost": "1247.83", "date": "2018-08-24T21:38:28Z", "category": "Clothing", "city": "Yanjiang", "orderRating": 4 },
    { "id": 379, "product_name": "Onions - Vidalia", "amount": 586, "discount": "144.09", "cost": "2135.07", "date": "2019-10-09T20:04:46Z", "category": "Industrial", "city": "Kobryn", "orderRating": 6 },
    { "id": 380, "product_name": "Sausage - Breakfast", "amount": 996, "discount": "65.90", "cost": "2602.00", "date": "2018-01-07T13:45:32Z", "category": "Tools", "city": "Wiri", "orderRating": 7 },
    { "id": 381, "product_name": "Dip - Tapenade", "amount": 282, "discount": "93.46", "cost": "1927.65", "date": "2018-04-14T20:09:43Z", "category": "Health", "city": "Pocito", "orderRating": 5 },
    { "id": 382, "product_name": "Energy Drink", "amount": 108, "discount": "51.90", "cost": "2826.48", "date": "2016-12-17T12:29:28Z", "category": "Books", "city": "Zhangjiafang", "orderRating": 7 },
    { "id": 383, "product_name": "Pickles - Gherkins", "amount": 30, "discount": "130.65", "cost": "3850.39", "date": "2019-06-15T08:38:21Z", "category": "Clothing", "city": "Río Ceballos", "orderRating": 3 },
    { "id": 384, "product_name": "Oil - Grapeseed Oil", "amount": 507, "discount": "41.83", "cost": "3415.83", "date": "2016-04-30T12:48:25Z", "category": "Health", "city": "Kaiama", "orderRating": 1 },
    { "id": 385, "product_name": "Soup - Knorr, French Onion", "amount": 149, "discount": "36.05", "cost": "1131.19", "date": "2018-11-01T03:27:25Z", "category": "Books", "city": "Banī Mazār", "orderRating": 3 },
    { "id": 386, "product_name": "Whmis - Spray Bottle Trigger", "amount": 978, "discount": "171.68", "cost": "4817.66", "date": "2019-08-21T20:24:27Z", "category": "Computers", "city": "Panzhuang", "orderRating": 3 },
    { "id": 387, "product_name": "Silicone Parch. 16.3x24.3", "amount": 711, "discount": "60.08", "cost": "2316.71", "date": "2017-02-25T08:18:10Z", "category": "Games", "city": "Kendung Timur", "orderRating": 6 },
    { "id": 388, "product_name": "Coconut - Shredded, Unsweet", "amount": 896, "discount": "14.03", "cost": "801.85", "date": "2016-03-11T05:13:03Z", "category": "Books", "city": "Jiangchi", "orderRating": 7 },
    { "id": 389, "product_name": "Veal - Provimi Inside", "amount": 264, "discount": "153.65", "cost": "496.21", "date": "2016-11-27T04:35:01Z", "category": "Outdoors", "city": "Rive-de-Gier", "orderRating": 3 },
    { "id": 390, "product_name": "Duck - Whole", "amount": 740, "discount": "174.53", "cost": "565.22", "date": "2019-01-17T22:49:58Z", "category": "Home", "city": "Ekpoma", "orderRating": 5 },
    { "id": 391, "product_name": "Veal - Liver", "amount": 438, "discount": "78.70", "cost": "3902.66", "date": "2017-06-21T03:54:06Z", "category": "Outdoors", "city": "Randusari", "orderRating": 4 },
    { "id": 392, "product_name": "Carbonated Water - Wildberry", "amount": 770, "discount": "121.57", "cost": "2957.47", "date": "2016-05-31T02:56:09Z", "category": "Sports", "city": "Amersfoort", "orderRating": 2 },
    { "id": 393, "product_name": "Apple - Delicious, Red", "amount": 771, "discount": "109.49", "cost": "4925.12", "date": "2020-07-17T20:23:44Z", "category": "Home", "city": "Níkaia", "orderRating": 4 },
    { "id": 394, "product_name": "Club Soda - Schweppes, 355 Ml", "amount": 106, "discount": "23.03", "cost": "4659.12", "date": "2019-11-12T04:03:03Z", "category": "Jewelery", "city": "Lamut", "orderRating": 7 },
    { "id": 395, "product_name": "Tamarillo", "amount": 552, "discount": "165.91", "cost": "4392.95", "date": "2020-03-22T16:15:52Z", "category": "Home", "city": "Kanlagay", "orderRating": 5 },
    { "id": 396, "product_name": "Muffin - Zero Transfat", "amount": 852, "discount": "127.61", "cost": "50.27", "date": "2015-10-02T05:08:06Z", "category": "Baby", "city": "Liangshan", "orderRating": 3 },
    { "id": 397, "product_name": "Calypso - Strawberry Lemonade", "amount": 589, "discount": "101.33", "cost": "1070.56", "date": "2017-06-30T02:33:01Z", "category": "Health", "city": "Lyon", "orderRating": 7 },
    { "id": 398, "product_name": "Wine - Jackson Triggs Okonagan", "amount": 558, "discount": "129.76", "cost": "2372.18", "date": "2016-02-16T17:54:00Z", "category": "Movies", "city": "Cocachacra", "orderRating": 2 },
    { "id": 399, "product_name": "Flounder - Fresh", "amount": 907, "discount": "98.87", "cost": "4689.46", "date": "2018-12-04T19:31:45Z", "category": "Computers", "city": "Jiuli", "orderRating": 3 },
    { "id": 400, "product_name": "Shichimi Togarashi Peppeers", "amount": 490, "discount": "10.09", "cost": "2374.05", "date": "2019-10-07T22:30:00Z", "category": "Electronics", "city": "Alue Glumpang", "orderRating": 6 },
    { "id": 401, "product_name": "Chocolate - Semi Sweet, Calets", "amount": 41, "discount": "72.59", "cost": "639.32", "date": "2017-11-18T23:33:13Z", "category": "Tools", "city": "Moro", "orderRating": 1 },
    { "id": 402, "product_name": "Muffin Carrot - Individual", "amount": 963, "discount": "22.65", "cost": "1712.01", "date": "2020-03-28T12:57:43Z", "category": "Automotive", "city": "Klishkivtsi", "orderRating": 1 },
    { "id": 403, "product_name": "Cup - Paper 10oz 92959", "amount": 630, "discount": "35.61", "cost": "4824.55", "date": "2018-07-07T00:31:05Z", "category": "Industrial", "city": "Qārah", "orderRating": 3 },
    { "id": 404, "product_name": "Bread - Corn Muffaleta Onion", "amount": 134, "discount": "192.16", "cost": "3862.88", "date": "2019-04-25T13:15:53Z", "category": "Kids", "city": "Zakhim", "orderRating": 4 },
    { "id": 405, "product_name": "Vermacelli - Sprinkles, Assorted", "amount": 819, "discount": "32.30", "cost": "1578.19", "date": "2018-02-21T04:16:17Z", "category": "Jewelery", "city": "Pieksämäki", "orderRating": 5 },
    { "id": 406, "product_name": "Shrimp - 31/40", "amount": 850, "discount": "106.74", "cost": "4129.17", "date": "2018-08-07T06:29:54Z", "category": "Toys", "city": "Gonzalo Pizarro", "orderRating": 1 },
    { "id": 407, "product_name": "Coffee - Frthy Coffee Crisp", "amount": 716, "discount": "56.85", "cost": "1573.75", "date": "2017-03-14T22:42:10Z", "category": "Baby", "city": "Cuilco", "orderRating": 2 },
    { "id": 408, "product_name": "Tarragon - Fresh", "amount": 195, "discount": "9.77", "cost": "2251.57", "date": "2017-03-13T11:30:15Z", "category": "Beauty", "city": "Dante Delgado", "orderRating": 1 },
    { "id": 409, "product_name": "Green Scrubbie Pad H.duty", "amount": 306, "discount": "81.43", "cost": "291.47", "date": "2018-02-13T19:07:02Z", "category": "Grocery", "city": "Mahuta", "orderRating": 4 },
    { "id": 410, "product_name": "Icecream - Dstk Super Cone", "amount": 670, "discount": "199.74", "cost": "3719.86", "date": "2016-05-06T21:18:06Z", "category": "Computers", "city": "Keruguya", "orderRating": 6 },
    { "id": 411, "product_name": "Lettuce - Radicchio", "amount": 976, "discount": "39.45", "cost": "552.13", "date": "2019-11-15T12:22:37Z", "category": "Computers", "city": "San Sebastian", "orderRating": 7 },
    { "id": 412, "product_name": "Milkettes - 2%", "amount": 26, "discount": "51.40", "cost": "2012.13", "date": "2015-10-26T08:56:28Z", "category": "Garden", "city": "Fraga", "orderRating": 2 },
    { "id": 413, "product_name": "Truffle Paste", "amount": 141, "discount": "43.90", "cost": "1807.25", "date": "2018-12-03T18:14:04Z", "category": "Beauty", "city": "Sepolong Timur", "orderRating": 4 },
    { "id": 414, "product_name": "Beef - Bones, Cut - Up", "amount": 662, "discount": "29.59", "cost": "3357.11", "date": "2020-03-02T00:49:30Z", "category": "Games", "city": "Nangen", "orderRating": 1 },
    { "id": 415, "product_name": "Dried Figs", "amount": 468, "discount": "68.77", "cost": "4725.82", "date": "2020-03-26T03:31:26Z", "category": "Grocery", "city": "Dijon", "orderRating": 5 },
    { "id": 416, "product_name": "Vermouth - White, Cinzano", "amount": 949, "discount": "167.49", "cost": "2741.28", "date": "2017-08-28T09:17:40Z", "category": "Tools", "city": "Lokot’", "orderRating": 1 },
    { "id": 417, "product_name": "Carbonated Water - Cherry", "amount": 467, "discount": "97.35", "cost": "927.72", "date": "2017-03-01T02:43:08Z", "category": "Clothing", "city": "Waalwijk", "orderRating": 3 },
    { "id": 418, "product_name": "Canada Dry", "amount": 540, "discount": "116.39", "cost": "4717.25", "date": "2017-07-23T21:48:50Z", "category": "Music", "city": "Abut", "orderRating": 5 },
    { "id": 419, "product_name": "Limes", "amount": 743, "discount": "58.16", "cost": "2242.63", "date": "2020-04-07T13:20:17Z", "category": "Tools", "city": "Tiemen", "orderRating": 5 },
    { "id": 420, "product_name": "Beans - Turtle, Black, Dry", "amount": 669, "discount": "85.94", "cost": "4094.52", "date": "2019-11-10T04:36:23Z", "category": "Electronics", "city": "Spassk", "orderRating": 7 },
    { "id": 421, "product_name": "Lobster - Canned Premium", "amount": 409, "discount": "74.70", "cost": "1611.47", "date": "2018-08-08T09:39:59Z", "category": "Toys", "city": "Tandil", "orderRating": 1 },
    { "id": 422, "product_name": "Pur Source", "amount": 417, "discount": "128.02", "cost": "1449.82", "date": "2018-01-05T00:37:17Z", "category": "Toys", "city": "Erenhot", "orderRating": 7 },
    { "id": 423, "product_name": "V8 - Tropical Blend", "amount": 793, "discount": "138.68", "cost": "224.66", "date": "2017-05-19T00:25:11Z", "category": "Automotive", "city": "Risālpur", "orderRating": 1 },
    { "id": 424, "product_name": "Tea - Herbal Sweet Dreams", "amount": 169, "discount": "45.12", "cost": "3656.09", "date": "2018-09-15T04:47:42Z", "category": "Automotive", "city": "Pleasant Point", "orderRating": 4 },
    { "id": 425, "product_name": "Food Colouring - Blue", "amount": 821, "discount": "133.59", "cost": "4192.02", "date": "2020-01-10T23:14:07Z", "category": "Games", "city": "Hua Hin", "orderRating": 5 },
    { "id": 426, "product_name": "Jolt Cola - Red Eye", "amount": 998, "discount": "100.40", "cost": "1577.41", "date": "2018-05-11T21:45:44Z", "category": "Music", "city": "Boskovice", "orderRating": 5 },
    { "id": 427, "product_name": "Vodka - Moskovskaya", "amount": 186, "discount": "82.80", "cost": "1112.15", "date": "2018-08-09T21:36:54Z", "category": "Grocery", "city": "Dongfeng", "orderRating": 4 },
    { "id": 428, "product_name": "Greens Mustard", "amount": 498, "discount": "176.21", "cost": "980.61", "date": "2020-06-15T04:57:55Z", "category": "Tools", "city": "Gustavsberg", "orderRating": 1 },
    { "id": 429, "product_name": "Beef - Baby, Liver", "amount": 728, "discount": "185.10", "cost": "3570.51", "date": "2019-03-03T11:45:56Z", "category": "Garden", "city": "Talayan", "orderRating": 7 },
    { "id": 430, "product_name": "Anisette - Mcguiness", "amount": 335, "discount": "166.46", "cost": "1993.79", "date": "2018-09-03T03:29:48Z", "category": "Grocery", "city": "Orléans", "orderRating": 6 },
    { "id": 431, "product_name": "Bols Melon Liqueur", "amount": 903, "discount": "97.69", "cost": "165.17", "date": "2016-10-07T15:23:28Z", "category": "Kids", "city": "Martigues", "orderRating": 6 },
    { "id": 432, "product_name": "Eggroll", "amount": 568, "discount": "13.35", "cost": "345.83", "date": "2017-10-16T11:26:53Z", "category": "Electronics", "city": "Yaohua", "orderRating": 5 },
    { "id": 433, "product_name": "Ginger - Pickled", "amount": 455, "discount": "62.68", "cost": "2362.12", "date": "2017-08-03T04:11:17Z", "category": "Beauty", "city": "Amolatar", "orderRating": 1 },
    { "id": 434, "product_name": "Halibut - Steaks", "amount": 127, "discount": "78.51", "cost": "1005.21", "date": "2020-08-04T12:18:21Z", "category": "Jewelery", "city": "Xikou", "orderRating": 4 },
    { "id": 435, "product_name": "Cheese - Mozzarella, Shredded", "amount": 82, "discount": "94.79", "cost": "396.56", "date": "2019-10-14T01:35:15Z", "category": "Toys", "city": "Alibago", "orderRating": 2 },
    { "id": 436, "product_name": "Hummus - Spread", "amount": 524, "discount": "68.64", "cost": "853.72", "date": "2017-05-16T01:06:31Z", "category": "Automotive", "city": "Papringan", "orderRating": 6 },
    { "id": 437, "product_name": "Tomato Puree", "amount": 320, "discount": "141.89", "cost": "1505.17", "date": "2017-07-29T03:43:54Z", "category": "Computers", "city": "Tha Mai", "orderRating": 1 },
    { "id": 438, "product_name": "Ham - Smoked, Bone - In", "amount": 600, "discount": "169.23", "cost": "2009.50", "date": "2020-02-29T17:54:49Z", "category": "Tools", "city": "Dipayal", "orderRating": 5 },
    { "id": 439, "product_name": "Beef - Bresaola", "amount": 459, "discount": "91.16", "cost": "4953.50", "date": "2019-08-30T10:09:41Z", "category": "Toys", "city": "Tongzha", "orderRating": 6 },
    { "id": 440, "product_name": "Chip - Potato Dill Pickle", "amount": 551, "discount": "24.77", "cost": "2882.30", "date": "2019-01-27T09:19:58Z", "category": "Tools", "city": "Barranco de Loba", "orderRating": 3 },
    { "id": 441, "product_name": "Glaze - Apricot", "amount": 19, "discount": "105.11", "cost": "4708.13", "date": "2019-04-19T07:34:48Z", "category": "Grocery", "city": "Yaizu", "orderRating": 5 },
    { "id": 442, "product_name": "Fish - Base, Bouillion", "amount": 194, "discount": "133.78", "cost": "2379.04", "date": "2015-12-28T03:17:29Z", "category": "Automotive", "city": "Vlachovice", "orderRating": 7 },
    { "id": 443, "product_name": "Chicken - Whole", "amount": 229, "discount": "69.39", "cost": "3631.67", "date": "2019-05-05T10:29:54Z", "category": "Computers", "city": "Sisŏphŏn", "orderRating": 3 },
    { "id": 444, "product_name": "Beef Tenderloin Aaa", "amount": 790, "discount": "23.60", "cost": "2267.44", "date": "2017-05-01T08:05:37Z", "category": "Automotive", "city": "Novo Cruzeiro", "orderRating": 5 },
    { "id": 445, "product_name": "Cheese - Fontina", "amount": 178, "discount": "132.73", "cost": "30.56", "date": "2016-02-15T17:04:09Z", "category": "Grocery", "city": "Thessaloníki", "orderRating": 2 },
    { "id": 446, "product_name": "Bag - Regular Kraft 20 Lb", "amount": 571, "discount": "113.21", "cost": "3129.16", "date": "2020-05-05T07:24:46Z", "category": "Electronics", "city": "Xipingle", "orderRating": 4 },
    { "id": 447, "product_name": "Compound - Mocha", "amount": 754, "discount": "111.16", "cost": "1894.14", "date": "2016-10-02T09:39:27Z", "category": "Garden", "city": "Včelná", "orderRating": 2 },
    { "id": 448, "product_name": "Pasta - Linguini, Dry", "amount": 530, "discount": "20.61", "cost": "2320.99", "date": "2020-05-28T09:40:33Z", "category": "Health", "city": "Ptení", "orderRating": 2 },
    { "id": 449, "product_name": "Tea - Lemon Scented", "amount": 555, "discount": "14.18", "cost": "3948.04", "date": "2019-10-27T23:34:21Z", "category": "Garden", "city": "Blois", "orderRating": 4 },
    { "id": 450, "product_name": "Lid - 0090 Clear", "amount": 156, "discount": "43.55", "cost": "325.10", "date": "2020-07-05T20:56:45Z", "category": "Sports", "city": "Jintang", "orderRating": 2 },
    { "id": 451, "product_name": "Muffin Mix - Lemon Cranberry", "amount": 336, "discount": "19.08", "cost": "3840.89", "date": "2018-10-29T11:55:47Z", "category": "Clothing", "city": "Australia Square", "orderRating": 3 },
    { "id": 452, "product_name": "Bandage - Finger Cots", "amount": 942, "discount": "45.16", "cost": "2083.42", "date": "2019-05-07T14:37:06Z", "category": "Health", "city": "Lambayong", "orderRating": 5 },
    { "id": 453, "product_name": "Sausage - Blood Pudding", "amount": 751, "discount": "55.28", "cost": "1210.54", "date": "2018-01-24T01:55:53Z", "category": "Grocery", "city": "Kefar Tavor", "orderRating": 7 },
    { "id": 454, "product_name": "Five Alive Citrus", "amount": 108, "discount": "104.20", "cost": "498.50", "date": "2019-01-11T09:12:39Z", "category": "Home", "city": "Asahikawa", "orderRating": 7 },
    { "id": 455, "product_name": "Bread - Rye", "amount": 581, "discount": "196.51", "cost": "1798.43", "date": "2020-01-03T07:49:23Z", "category": "Tools", "city": "Ampeleíes", "orderRating": 5 },
    { "id": 456, "product_name": "Nut - Pecan, Pieces", "amount": 745, "discount": "137.06", "cost": "38.29", "date": "2019-08-10T02:49:48Z", "category": "Music", "city": "Negara", "orderRating": 3 },
    { "id": 457, "product_name": "Spring Roll Wrappers", "amount": 904, "discount": "174.49", "cost": "3453.55", "date": "2018-11-17T07:30:20Z", "category": "Games", "city": "Pocrí", "orderRating": 6 },
    { "id": 458, "product_name": "Muffin Carrot - Individual", "amount": 502, "discount": "25.29", "cost": "758.83", "date": "2016-01-05T06:24:31Z", "category": "Industrial", "city": "Emiliano Zapata", "orderRating": 1 },
    { "id": 459, "product_name": "Pepper - Gypsy Pepper", "amount": 430, "discount": "69.51", "cost": "2690.43", "date": "2016-05-29T06:28:31Z", "category": "Baby", "city": "Müllendorf", "orderRating": 4 },
    { "id": 460, "product_name": "Wine - Pinot Noir Mondavi Coastal", "amount": 523, "discount": "87.82", "cost": "4358.08", "date": "2017-12-28T06:33:40Z", "category": "Health", "city": "Xiapu", "orderRating": 3 },
    { "id": 461, "product_name": "Remy Red Berry Infusion", "amount": 893, "discount": "145.08", "cost": "1032.66", "date": "2019-06-15T05:26:17Z", "category": "Movies", "city": "Puan Selatan", "orderRating": 7 },
    { "id": 462, "product_name": "Bacardi Breezer - Tropical", "amount": 678, "discount": "127.65", "cost": "3641.88", "date": "2018-05-27T15:57:46Z", "category": "Health", "city": "Tagiura", "orderRating": 7 },
    { "id": 463, "product_name": "Lettuce - Mini Greens, Whole", "amount": 22, "discount": "22.77", "cost": "3566.05", "date": "2017-03-26T22:51:34Z", "category": "Health", "city": "Hitoyoshi", "orderRating": 7 },
    { "id": 464, "product_name": "Oil - Macadamia", "amount": 947, "discount": "40.97", "cost": "2900.84", "date": "2019-04-08T23:56:50Z", "category": "Home", "city": "Shuimen", "orderRating": 6 },
    { "id": 465, "product_name": "Cheese - Brie Roitelet", "amount": 420, "discount": "146.75", "cost": "2949.19", "date": "2018-12-31T20:57:19Z", "category": "Computers", "city": "Tallahassee", "orderRating": 3 },
    { "id": 466, "product_name": "Venison - Racks Frenched", "amount": 215, "discount": "21.40", "cost": "4109.35", "date": "2020-03-02T14:58:13Z", "category": "Electronics", "city": "Guadalupe", "orderRating": 2 },
    { "id": 467, "product_name": "Wine - Prosecco Valdobiaddene", "amount": 616, "discount": "166.41", "cost": "4728.60", "date": "2017-12-10T01:22:16Z", "category": "Games", "city": "Bakersfield", "orderRating": 7 },
    { "id": 468, "product_name": "Pepper - Roasted Red", "amount": 616, "discount": "59.87", "cost": "2573.27", "date": "2019-04-14T18:06:02Z", "category": "Garden", "city": "Daban", "orderRating": 6 },
    { "id": 469, "product_name": "Swordfish Loin Portions", "amount": 666, "discount": "81.83", "cost": "1875.70", "date": "2019-04-11T17:27:55Z", "category": "Clothing", "city": "Iradan", "orderRating": 3 },
    { "id": 470, "product_name": "Wine - Chateau Timberlay", "amount": 938, "discount": "52.72", "cost": "2953.58", "date": "2020-03-06T10:56:32Z", "category": "Beauty", "city": "Fengtai Chengguanzhen", "orderRating": 4 },
    { "id": 471, "product_name": "Chocolate - Mi - Amere Semi", "amount": 380, "discount": "131.48", "cost": "268.20", "date": "2016-12-17T13:49:09Z", "category": "Health", "city": "Rosario de Lerma", "orderRating": 7 },
    { "id": 472, "product_name": "Milk - 2%", "amount": 276, "discount": "125.62", "cost": "4835.93", "date": "2020-06-11T18:52:03Z", "category": "Garden", "city": "Yaurisque", "orderRating": 4 },
    { "id": 473, "product_name": "Tart - Lemon", "amount": 889, "discount": "45.52", "cost": "1128.34", "date": "2019-01-11T16:02:30Z", "category": "Computers", "city": "Iznoski", "orderRating": 7 },
    { "id": 474, "product_name": "Pernod", "amount": 966, "discount": "18.39", "cost": "1071.94", "date": "2016-11-23T10:05:51Z", "category": "Clothing", "city": "Nouaseur", "orderRating": 6 },
    { "id": 475, "product_name": "Chinese Foods - Plain Fried Rice", "amount": 203, "discount": "33.64", "cost": "2889.28", "date": "2020-04-16T04:06:47Z", "category": "Computers", "city": "Bagé", "orderRating": 7 },
    { "id": 476, "product_name": "Wine - Gato Negro Cabernet", "amount": 563, "discount": "91.05", "cost": "1265.80", "date": "2017-03-24T14:42:16Z", "category": "Computers", "city": "Malārd", "orderRating": 2 },
    { "id": 477, "product_name": "Lettuce - Lolla Rosa", "amount": 795, "discount": "97.35", "cost": "4064.39", "date": "2019-03-01T03:46:21Z", "category": "Electronics", "city": "Kapsan-ŭp", "orderRating": 4 },
    { "id": 478, "product_name": "Bread - Pumpernickel", "amount": 926, "discount": "161.67", "cost": "4007.34", "date": "2016-11-30T23:19:17Z", "category": "Garden", "city": "Jocotán", "orderRating": 3 },
    { "id": 479, "product_name": "Juice - Pineapple, 48 Oz", "amount": 344, "discount": "172.15", "cost": "122.43", "date": "2019-11-16T08:13:24Z", "category": "Computers", "city": "Baziqiao", "orderRating": 6 },
    { "id": 480, "product_name": "Lamb Leg - Bone - In Nz", "amount": 669, "discount": "67.38", "cost": "4513.53", "date": "2020-04-07T23:30:35Z", "category": "Home", "city": "Myingyan", "orderRating": 2 },
    { "id": 481, "product_name": "Glass Clear 8 Oz", "amount": 619, "discount": "51.21", "cost": "2751.17", "date": "2015-12-25T20:50:34Z", "category": "Games", "city": "Sayán", "orderRating": 7 },
    { "id": 482, "product_name": "Wine - Crozes Hermitage E.", "amount": 309, "discount": "71.43", "cost": "353.76", "date": "2017-11-10T06:47:39Z", "category": "Grocery", "city": "Chaguaramas", "orderRating": 5 },
    { "id": 483, "product_name": "Pickerel - Fillets", "amount": 849, "discount": "18.82", "cost": "2173.64", "date": "2020-05-02T15:25:56Z", "category": "Baby", "city": "Orlando", "orderRating": 2 },
    { "id": 484, "product_name": "Ham - Virginia", "amount": 671, "discount": "13.23", "cost": "4351.61", "date": "2017-11-16T02:49:47Z", "category": "Health", "city": "Pasar Kulon", "orderRating": 4 },
    { "id": 485, "product_name": "Bread Cranberry Foccacia", "amount": 204, "discount": "17.22", "cost": "61.29", "date": "2020-03-09T19:21:39Z", "category": "Baby", "city": "Hortolândia", "orderRating": 6 },
    { "id": 486, "product_name": "Bread - Corn Muffaleta Onion", "amount": 86, "discount": "115.66", "cost": "2442.59", "date": "2020-04-09T20:32:09Z", "category": "Jewelery", "city": "Jianxincun", "orderRating": 2 },
    { "id": 487, "product_name": "Cucumber - Pickling Ontario", "amount": 647, "discount": "84.09", "cost": "2908.50", "date": "2017-10-20T17:13:43Z", "category": "Baby", "city": "Hesi", "orderRating": 6 },
    { "id": 488, "product_name": "Shrimp - 150 - 250", "amount": 739, "discount": "197.53", "cost": "4325.58", "date": "2019-01-10T03:14:39Z", "category": "Grocery", "city": "Velikiye Luki", "orderRating": 3 },
    { "id": 489, "product_name": "Foam Dinner Plate", "amount": 905, "discount": "24.17", "cost": "1572.62", "date": "2015-12-11T00:55:36Z", "category": "Music", "city": "Sámara", "orderRating": 6 },
    { "id": 490, "product_name": "Flour - Buckwheat, Dark", "amount": 516, "discount": "93.77", "cost": "165.72", "date": "2019-08-01T13:38:52Z", "category": "Jewelery", "city": "Dalai", "orderRating": 1 },
    { "id": 491, "product_name": "Bread - Bagels, Plain", "amount": 427, "discount": "42.69", "cost": "1533.03", "date": "2017-07-28T21:19:04Z", "category": "Beauty", "city": "Sundsvall", "orderRating": 1 },
    { "id": 492, "product_name": "Cornish Hen", "amount": 75, "discount": "108.78", "cost": "2147.26", "date": "2016-05-06T12:35:13Z", "category": "Computers", "city": "Bonneville", "orderRating": 2 },
    { "id": 493, "product_name": "Rice - Brown", "amount": 290, "discount": "185.52", "cost": "1233.10", "date": "2017-11-27T11:43:14Z", "category": "Toys", "city": "Pantukan", "orderRating": 4 },
    { "id": 494, "product_name": "Soup Campbells Beef With Veg", "amount": 832, "discount": "127.91", "cost": "2846.09", "date": "2019-12-23T03:52:12Z", "category": "Kids", "city": "Malati", "orderRating": 4 },
    { "id": 495, "product_name": "Hot Chocolate - Individual", "amount": 991, "discount": "145.83", "cost": "197.07", "date": "2017-05-13T03:57:36Z", "category": "Automotive", "city": "Cikuya", "orderRating": 4 },
    { "id": 496, "product_name": "Mushroom - Porcini Frozen", "amount": 705, "discount": "155.97", "cost": "4328.12", "date": "2017-01-24T22:41:44Z", "category": "Automotive", "city": "Gialo", "orderRating": 2 },
    { "id": 497, "product_name": "Schnappes - Peach, Walkers", "amount": 480, "discount": "41.52", "cost": "1457.57", "date": "2018-08-05T11:41:13Z", "category": "Electronics", "city": "Đạ Tẻh", "orderRating": 2 },
    { "id": 498, "product_name": "Fuji Apples", "amount": 108, "discount": "21.81", "cost": "4640.21", "date": "2019-12-27T05:12:55Z", "category": "Outdoors", "city": "Shenzhong", "orderRating": 6 },
    { "id": 499, "product_name": "Wine - Prem Select Charddonany", "amount": 842, "discount": "166.32", "cost": "596.84", "date": "2020-06-15T00:07:23Z", "category": "Grocery", "city": "Qal‘ah-ye Shāhī", "orderRating": 7 },
    { "id": 500, "product_name": "Coffee Decaf Colombian", "amount": 785, "discount": "92.59", "cost": "3680.48", "date": "2016-10-07T08:52:07Z", "category": "Clothing", "city": "Hutang", "orderRating": 2 },
    { "id": 501, "product_name": "Transfer Sheets", "amount": 76, "discount": "150.04", "cost": "4636.40", "date": "2016-11-14T03:21:02Z", "category": "Electronics", "city": "Neftegorsk", "orderRating": 2 },
    { "id": 502, "product_name": "The Pop Shoppe - Root Beer", "amount": 805, "discount": "107.71", "cost": "57.83", "date": "2017-04-04T11:29:41Z", "category": "Movies", "city": "Cinangka", "orderRating": 6 },
    { "id": 503, "product_name": "Apron", "amount": 384, "discount": "97.51", "cost": "4661.23", "date": "2016-05-31T04:33:46Z", "category": "Garden", "city": "Podstepki", "orderRating": 4 },
    { "id": 504, "product_name": "Shrimp - 150 - 250", "amount": 513, "discount": "24.16", "cost": "2419.54", "date": "2019-02-19T03:17:21Z", "category": "Clothing", "city": "Dong’an", "orderRating": 4 },
    { "id": 505, "product_name": "Icecream - Dstk Super Cone", "amount": 708, "discount": "77.12", "cost": "3173.74", "date": "2019-10-22T20:01:31Z", "category": "Movies", "city": "Wałcz", "orderRating": 5 },
    { "id": 506, "product_name": "Muffin Batt - Blueberry Passion", "amount": 606, "discount": "98.36", "cost": "3252.97", "date": "2016-03-03T20:41:47Z", "category": "Clothing", "city": "Jijia", "orderRating": 1 },
    { "id": 507, "product_name": "Sauce - Marinara", "amount": 42, "discount": "63.89", "cost": "3268.83", "date": "2018-05-24T04:03:40Z", "category": "Jewelery", "city": "Virginia Beach", "orderRating": 7 },
    { "id": 508, "product_name": "Cheese - Cambozola", "amount": 289, "discount": "69.22", "cost": "3596.70", "date": "2017-06-01T03:06:37Z", "category": "Toys", "city": "Siqiao", "orderRating": 1 },
    { "id": 509, "product_name": "Icecream Cone - Areo Chocolate", "amount": 79, "discount": "43.42", "cost": "569.79", "date": "2016-02-29T12:07:24Z", "category": "Beauty", "city": "Lühua", "orderRating": 6 },
    { "id": 510, "product_name": "Beets - Candy Cane, Organic", "amount": 999, "discount": "94.28", "cost": "2602.19", "date": "2018-07-04T09:31:10Z", "category": "Kids", "city": "Purranque", "orderRating": 5 },
    { "id": 511, "product_name": "Emulsifier", "amount": 911, "discount": "136.28", "cost": "1145.72", "date": "2018-09-12T13:10:20Z", "category": "Toys", "city": "Xishanzui", "orderRating": 5 },
    { "id": 512, "product_name": "Soup - Campbells Mac N Cheese", "amount": 565, "discount": "182.49", "cost": "3276.55", "date": "2017-09-02T09:00:17Z", "category": "Health", "city": "Tāngāil", "orderRating": 7 },
    { "id": 513, "product_name": "Capon - Whole", "amount": 932, "discount": "62.35", "cost": "1158.55", "date": "2017-03-15T21:10:14Z", "category": "Baby", "city": "Melati", "orderRating": 6 },
    { "id": 514, "product_name": "Water Chestnut - Canned", "amount": 590, "discount": "105.97", "cost": "320.73", "date": "2016-02-16T21:49:04Z", "category": "Grocery", "city": "Bezlyudivka", "orderRating": 3 },
    { "id": 515, "product_name": "Smoked Paprika", "amount": 558, "discount": "187.81", "cost": "4652.95", "date": "2015-12-10T15:45:41Z", "category": "Automotive", "city": "Xunzhai", "orderRating": 6 },
    { "id": 516, "product_name": "Garbage Bag - Clear", "amount": 382, "discount": "131.33", "cost": "377.46", "date": "2015-11-21T19:03:30Z", "category": "Music", "city": "Huiqi", "orderRating": 5 },
    { "id": 517, "product_name": "Gelatine Leaves - Envelopes", "amount": 355, "discount": "155.80", "cost": "1072.60", "date": "2017-04-03T02:18:21Z", "category": "Industrial", "city": "Boulogne-Billancourt", "orderRating": 4 },
    { "id": 518, "product_name": "Cake Slab", "amount": 397, "discount": "38.00", "cost": "4502.20", "date": "2016-03-18T10:27:47Z", "category": "Computers", "city": "Novokhovrino", "orderRating": 4 },
    { "id": 519, "product_name": "Hold Up Tool Storage Rack", "amount": 661, "discount": "36.92", "cost": "4381.34", "date": "2020-06-11T11:52:38Z", "category": "Electronics", "city": "Zel’va", "orderRating": 4 },
    { "id": 520, "product_name": "Wine - German Riesling", "amount": 621, "discount": "160.73", "cost": "2652.21", "date": "2018-12-22T02:19:48Z", "category": "Industrial", "city": "Estrada", "orderRating": 6 },
    { "id": 521, "product_name": "Cups 10oz Trans", "amount": 383, "discount": "61.97", "cost": "1104.06", "date": "2020-05-01T08:09:06Z", "category": "Clothing", "city": "Pryazha", "orderRating": 2 },
    { "id": 522, "product_name": "Shiro Miso", "amount": 770, "discount": "81.19", "cost": "3278.94", "date": "2019-06-26T07:50:15Z", "category": "Shoes", "city": "Poli", "orderRating": 7 },
    { "id": 523, "product_name": "Wine - Zonnebloem Pinotage", "amount": 614, "discount": "18.66", "cost": "936.75", "date": "2018-09-27T06:43:56Z", "category": "Electronics", "city": "Ronda", "orderRating": 1 },
    { "id": 524, "product_name": "Doilies - 12, Paper", "amount": 973, "discount": "38.03", "cost": "4530.36", "date": "2018-09-28T05:19:13Z", "category": "Jewelery", "city": "Xinfu", "orderRating": 7 },
    { "id": 525, "product_name": "Mousse - Passion Fruit", "amount": 670, "discount": "134.52", "cost": "1250.60", "date": "2017-10-15T08:47:04Z", "category": "Electronics", "city": "Nirji", "orderRating": 2 },
    { "id": 526, "product_name": "Nacho Chips", "amount": 911, "discount": "147.71", "cost": "1186.03", "date": "2017-12-18T02:18:00Z", "category": "Games", "city": "Sunbu", "orderRating": 3 },
    { "id": 527, "product_name": "Avocado", "amount": 324, "discount": "46.79", "cost": "2496.59", "date": "2017-08-27T13:55:53Z", "category": "Electronics", "city": "Tokuyama", "orderRating": 6 },
    { "id": 528, "product_name": "Temperature Recording Station", "amount": 382, "discount": "180.06", "cost": "3504.38", "date": "2020-05-07T12:48:47Z", "category": "Baby", "city": "Kabankalan", "orderRating": 7 },
    { "id": 529, "product_name": "Wine - White, Gewurtzraminer", "amount": 377, "discount": "56.44", "cost": "1624.18", "date": "2017-05-11T22:19:34Z", "category": "Industrial", "city": "Tirah", "orderRating": 2 },
    { "id": 530, "product_name": "Cabbage - Nappa", "amount": 579, "discount": "180.58", "cost": "1011.57", "date": "2016-05-02T20:48:22Z", "category": "Grocery", "city": "Borzechów", "orderRating": 2 },
    { "id": 531, "product_name": "Beer - Paulaner Hefeweisse", "amount": 294, "discount": "28.04", "cost": "4256.77", "date": "2017-03-01T21:23:07Z", "category": "Shoes", "city": "Houyu", "orderRating": 5 },
    { "id": 532, "product_name": "Soy Protein", "amount": 95, "discount": "27.02", "cost": "4480.32", "date": "2015-12-05T07:04:31Z", "category": "Baby", "city": "Norakert", "orderRating": 1 },
    { "id": 533, "product_name": "Cheese - Bocconcini", "amount": 903, "discount": "172.82", "cost": "11.21", "date": "2020-05-23T13:21:54Z", "category": "Computers", "city": "Standerton", "orderRating": 7 },
    { "id": 534, "product_name": "Dried Cranberries", "amount": 932, "discount": "149.71", "cost": "3766.98", "date": "2019-06-09T11:19:29Z", "category": "Shoes", "city": "Carrigtwohill", "orderRating": 5 },
    { "id": 535, "product_name": "Tomato - Green", "amount": 357, "discount": "33.89", "cost": "3437.46", "date": "2020-02-22T09:18:36Z", "category": "Kids", "city": "Chennevières-sur-Marne", "orderRating": 5 },
    { "id": 536, "product_name": "Pear - Packum", "amount": 967, "discount": "189.08", "cost": "3319.14", "date": "2017-06-11T01:06:04Z", "category": "Tools", "city": "Kenamoen", "orderRating": 3 },
    { "id": 537, "product_name": "Juice - Prune", "amount": 429, "discount": "40.29", "cost": "380.64", "date": "2016-03-31T03:09:59Z", "category": "Electronics", "city": "Kambaxoi", "orderRating": 6 },
    { "id": 538, "product_name": "Olives - Black, Pitted", "amount": 681, "discount": "24.27", "cost": "4582.84", "date": "2019-05-25T13:08:16Z", "category": "Music", "city": "Padre Bernardo", "orderRating": 4 },
    { "id": 539, "product_name": "Coffee - 10oz Cup 92961", "amount": 152, "discount": "52.86", "cost": "738.70", "date": "2020-05-15T06:17:09Z", "category": "Movies", "city": "Port Antonio", "orderRating": 5 },
    { "id": 540, "product_name": "Orange Roughy 4/6 Oz", "amount": 458, "discount": "187.35", "cost": "4739.10", "date": "2019-01-08T22:54:03Z", "category": "Music", "city": "Az Zaytūnīyah", "orderRating": 1 },
    { "id": 541, "product_name": "Chinese Foods - Chicken", "amount": 308, "discount": "111.81", "cost": "3736.23", "date": "2020-05-20T16:15:08Z", "category": "Jewelery", "city": "El Matama", "orderRating": 1 },
    { "id": 542, "product_name": "Ecolab - Medallion", "amount": 710, "discount": "67.34", "cost": "1688.06", "date": "2016-07-11T00:31:16Z", "category": "Garden", "city": "Guanshui", "orderRating": 6 },
    { "id": 543, "product_name": "Cookies - Fortune", "amount": 687, "discount": "95.31", "cost": "3268.97", "date": "2017-10-17T09:10:06Z", "category": "Grocery", "city": "Taichung", "orderRating": 3 },
    { "id": 544, "product_name": "Sauce Tomato Pouch", "amount": 533, "discount": "194.43", "cost": "4148.09", "date": "2015-11-19T15:55:38Z", "category": "Sports", "city": "Landskrona", "orderRating": 6 },
    { "id": 545, "product_name": "Lettuce - Green Leaf", "amount": 762, "discount": "162.88", "cost": "3975.13", "date": "2018-11-05T01:36:03Z", "category": "Shoes", "city": "Al Ḩarf", "orderRating": 3 },
    { "id": 546, "product_name": "Pepper - Black, Ground", "amount": 145, "discount": "174.03", "cost": "115.71", "date": "2019-05-30T22:40:01Z", "category": "Sports", "city": "Hudson Bay", "orderRating": 7 },
    { "id": 547, "product_name": "Apricots - Halves", "amount": 537, "discount": "21.23", "cost": "373.91", "date": "2019-10-11T00:15:43Z", "category": "Health", "city": "Xiekou", "orderRating": 3 },
    { "id": 548, "product_name": "Bread - Italian Roll With Herbs", "amount": 379, "discount": "115.10", "cost": "4233.94", "date": "2017-06-17T06:48:35Z", "category": "Music", "city": "Ush-Tyube", "orderRating": 3 },
    { "id": 549, "product_name": "Salt - Table", "amount": 438, "discount": "189.99", "cost": "896.57", "date": "2018-06-18T07:14:28Z", "category": "Jewelery", "city": "Chandler", "orderRating": 7 },
    { "id": 550, "product_name": "Milk Powder", "amount": 338, "discount": "28.00", "cost": "4440.22", "date": "2015-12-07T13:13:40Z", "category": "Music", "city": "Mỹ Tho", "orderRating": 5 },
    { "id": 551, "product_name": "Pork - Bacon, Double Smoked", "amount": 945, "discount": "1.05", "cost": "1771.36", "date": "2016-05-09T15:09:14Z", "category": "Garden", "city": "Karbunara e Vogël", "orderRating": 1 },
    { "id": 552, "product_name": "Coffee Guatemala Dark", "amount": 986, "discount": "136.12", "cost": "3059.58", "date": "2015-11-25T00:31:55Z", "category": "Clothing", "city": "Tafí del Valle", "orderRating": 5 },
    { "id": 553, "product_name": "Milk - 1%", "amount": 411, "discount": "190.54", "cost": "696.27", "date": "2016-06-23T09:35:13Z", "category": "Music", "city": "Kungsbacka", "orderRating": 4 },
    { "id": 554, "product_name": "Aspic - Light", "amount": 901, "discount": "198.11", "cost": "3054.92", "date": "2020-03-17T19:37:13Z", "category": "Toys", "city": "Stockholm", "orderRating": 3 },
    { "id": 555, "product_name": "Muffin Puck Ww Carrot", "amount": 339, "discount": "64.29", "cost": "3726.24", "date": "2016-05-20T04:55:51Z", "category": "Clothing", "city": "Nowe Skalmierzyce", "orderRating": 2 },
    { "id": 556, "product_name": "Red Pepper Paste", "amount": 223, "discount": "92.45", "cost": "4573.75", "date": "2020-06-28T16:17:54Z", "category": "Toys", "city": "Cheremnoye", "orderRating": 4 },
    { "id": 557, "product_name": "Filo Dough", "amount": 532, "discount": "38.15", "cost": "924.16", "date": "2019-10-02T15:42:14Z", "category": "Toys", "city": "Sacramento", "orderRating": 4 },
    { "id": 558, "product_name": "Sage - Fresh", "amount": 719, "discount": "196.69", "cost": "977.42", "date": "2019-06-21T10:17:16Z", "category": "Games", "city": "Marisgama", "orderRating": 7 },
    { "id": 559, "product_name": "Lobster - Cooked", "amount": 901, "discount": "159.44", "cost": "2405.30", "date": "2018-10-10T19:51:20Z", "category": "Books", "city": "Wenwusha", "orderRating": 1 },
    { "id": 560, "product_name": "Cheese - Brie, Triple Creme", "amount": 930, "discount": "48.77", "cost": "1487.74", "date": "2018-11-01T07:15:19Z", "category": "Garden", "city": "Chrysoúpolis", "orderRating": 7 },
    { "id": 561, "product_name": "Squash - Guords", "amount": 434, "discount": "169.67", "cost": "2488.98", "date": "2020-07-26T06:30:37Z", "category": "Automotive", "city": "Cascais", "orderRating": 7 },
    { "id": 562, "product_name": "Beef - Ground, Extra Lean, Fresh", "amount": 501, "discount": "147.17", "cost": "1053.76", "date": "2019-01-25T15:43:14Z", "category": "Electronics", "city": "Ts’khinvali", "orderRating": 6 },
    { "id": 563, "product_name": "Dried Cherries", "amount": 665, "discount": "165.04", "cost": "3920.04", "date": "2017-11-13T03:00:26Z", "category": "Outdoors", "city": "Hlusk", "orderRating": 7 },
    { "id": 564, "product_name": "Remy Red", "amount": 995, "discount": "100.16", "cost": "548.82", "date": "2019-08-08T23:40:45Z", "category": "Industrial", "city": "Jaguaribe", "orderRating": 5 },
    { "id": 565, "product_name": "Red Currants", "amount": 423, "discount": "113.84", "cost": "4998.96", "date": "2017-11-07T15:51:21Z", "category": "Games", "city": "Muang Sing", "orderRating": 6 },
    { "id": 566, "product_name": "Jam - Apricot", "amount": 557, "discount": "24.60", "cost": "906.17", "date": "2017-09-29T06:37:19Z", "category": "Home", "city": "Gunjur", "orderRating": 5 },
    { "id": 567, "product_name": "Pike - Frozen Fillet", "amount": 28, "discount": "189.56", "cost": "4088.54", "date": "2020-01-29T23:30:23Z", "category": "Outdoors", "city": "Ústí nad Labem", "orderRating": 1 },
    { "id": 568, "product_name": "Lamb - Shoulder, Boneless", "amount": 881, "discount": "171.71", "cost": "1718.04", "date": "2017-09-13T22:43:18Z", "category": "Kids", "city": "Al Ghizlānīyah", "orderRating": 2 },
    { "id": 569, "product_name": "Soup Bowl Clear 8oz92008", "amount": 359, "discount": "130.29", "cost": "3415.48", "date": "2017-03-30T00:09:43Z", "category": "Books", "city": "Beitai", "orderRating": 4 },
    { "id": 570, "product_name": "Flower - Leather Leaf Fern", "amount": 53, "discount": "63.61", "cost": "1944.49", "date": "2016-02-17T12:11:02Z", "category": "Garden", "city": "Aldeia da Mata", "orderRating": 4 },
    { "id": 571, "product_name": "Canadian Emmenthal", "amount": 300, "discount": "120.29", "cost": "3020.57", "date": "2017-02-24T11:06:03Z", "category": "Home", "city": "Shatian", "orderRating": 2 },
    { "id": 572, "product_name": "Steampan Lid", "amount": 530, "discount": "154.60", "cost": "4590.83", "date": "2018-04-22T22:48:55Z", "category": "Movies", "city": "Pskov", "orderRating": 4 },
    { "id": 573, "product_name": "Strawberries - California", "amount": 277, "discount": "88.92", "cost": "1289.17", "date": "2018-07-10T04:11:52Z", "category": "Grocery", "city": "Mengla", "orderRating": 3 },
    { "id": 574, "product_name": "Fish - Bones", "amount": 399, "discount": "94.54", "cost": "4622.19", "date": "2018-08-15T20:03:22Z", "category": "Baby", "city": "Tha Mai", "orderRating": 6 },
    { "id": 575, "product_name": "Apple - Royal Gala", "amount": 236, "discount": "110.47", "cost": "857.44", "date": "2019-10-05T11:23:35Z", "category": "Outdoors", "city": "Sheki", "orderRating": 4 },
    { "id": 576, "product_name": "Pecan Raisin - Tarts", "amount": 828, "discount": "129.13", "cost": "2844.71", "date": "2016-11-20T03:40:53Z", "category": "Books", "city": "Santo António das Areias", "orderRating": 5 },
    { "id": 577, "product_name": "Cookie Dough - Oatmeal Rasin", "amount": 160, "discount": "197.86", "cost": "1515.79", "date": "2017-01-05T17:26:49Z", "category": "Jewelery", "city": "Tilamuta", "orderRating": 6 },
    { "id": 578, "product_name": "Cake - Mini Potato Pancake", "amount": 784, "discount": "4.24", "cost": "4244.00", "date": "2019-06-30T18:34:01Z", "category": "Tools", "city": "Gulong", "orderRating": 6 },
    { "id": 579, "product_name": "Potatoes - Idaho 80 Count", "amount": 732, "discount": "7.00", "cost": "4592.49", "date": "2017-08-04T18:05:04Z", "category": "Automotive", "city": "Xinzhou", "orderRating": 4 },
    { "id": 580, "product_name": "Tea - Grapefruit Green Tea", "amount": 31, "discount": "64.95", "cost": "3684.85", "date": "2016-04-08T22:01:32Z", "category": "Clothing", "city": "Glendale", "orderRating": 1 },
    { "id": 581, "product_name": "Pepper - White, Whole", "amount": 760, "discount": "70.44", "cost": "4582.46", "date": "2017-09-22T18:01:53Z", "category": "Shoes", "city": "Brak", "orderRating": 2 },
    { "id": 582, "product_name": "Rice Wine - Aji Mirin", "amount": 683, "discount": "91.94", "cost": "4792.99", "date": "2017-08-27T22:38:47Z", "category": "Grocery", "city": "Montilla", "orderRating": 1 },
    { "id": 583, "product_name": "Vinegar - White", "amount": 245, "discount": "140.77", "cost": "900.34", "date": "2018-07-21T22:15:10Z", "category": "Movies", "city": "Russkaya Polyana", "orderRating": 1 },
    { "id": 584, "product_name": "Juice - Apple, 1.36l", "amount": 136, "discount": "87.49", "cost": "3257.56", "date": "2016-10-13T01:39:57Z", "category": "Beauty", "city": "Waru", "orderRating": 3 },
    { "id": 585, "product_name": "Carbonated Water - Blackberry", "amount": 827, "discount": "0.75", "cost": "2682.55", "date": "2018-04-24T19:28:41Z", "category": "Grocery", "city": "Sulūq", "orderRating": 7 },
    { "id": 586, "product_name": "Pail With Metal Handle 16l White", "amount": 601, "discount": "94.89", "cost": "4441.36", "date": "2016-09-14T21:18:36Z", "category": "Clothing", "city": "Cholet", "orderRating": 3 },
    { "id": 587, "product_name": "Bread - Hamburger Buns", "amount": 885, "discount": "99.62", "cost": "2914.72", "date": "2017-07-10T07:17:31Z", "category": "Outdoors", "city": "Shuibian", "orderRating": 5 },
    { "id": 588, "product_name": "Pumpkin - Seed", "amount": 326, "discount": "12.07", "cost": "881.42", "date": "2016-10-23T21:08:21Z", "category": "Outdoors", "city": "Pajoreja", "orderRating": 1 },
    { "id": 589, "product_name": "Dc Hikiage Hira Huba", "amount": 905, "discount": "49.06", "cost": "2231.55", "date": "2018-02-01T00:19:25Z", "category": "Tools", "city": "Imaan", "orderRating": 5 },
    { "id": 590, "product_name": "Mushroom - Porcini Frozen", "amount": 38, "discount": "122.09", "cost": "511.15", "date": "2018-05-30T16:23:41Z", "category": "Books", "city": "Gorzyce", "orderRating": 7 },
    { "id": 591, "product_name": "Tart - Raisin And Pecan", "amount": 756, "discount": "196.34", "cost": "3174.97", "date": "2016-08-03T08:46:30Z", "category": "Shoes", "city": "Dąbrowa", "orderRating": 1 },
    { "id": 592, "product_name": "Chicken - Soup Base", "amount": 285, "discount": "45.41", "cost": "837.98", "date": "2016-04-23T18:08:13Z", "category": "Beauty", "city": "Villaguay", "orderRating": 2 },
    { "id": 593, "product_name": "Nut - Pecan, Pieces", "amount": 312, "discount": "46.92", "cost": "780.49", "date": "2019-03-11T22:49:28Z", "category": "Movies", "city": "Blagnac", "orderRating": 4 },
    { "id": 594, "product_name": "Basil - Pesto Sauce", "amount": 273, "discount": "41.07", "cost": "3277.48", "date": "2018-04-02T09:22:49Z", "category": "Home", "city": "Hongtang", "orderRating": 5 },
    { "id": 595, "product_name": "Thyme - Dried", "amount": 355, "discount": "61.65", "cost": "2645.74", "date": "2018-06-14T22:56:16Z", "category": "Electronics", "city": "Grande Rivière Noire", "orderRating": 3 },
    { "id": 596, "product_name": "Tart Shells - Sweet, 3", "amount": 74, "discount": "69.69", "cost": "4005.61", "date": "2017-07-29T03:14:16Z", "category": "Books", "city": "Morales", "orderRating": 7 },
    { "id": 597, "product_name": "Soup - Verve - Chipotle Chicken", "amount": 933, "discount": "35.29", "cost": "4134.80", "date": "2020-06-15T16:12:41Z", "category": "Jewelery", "city": "Parigi", "orderRating": 3 },
    { "id": 598, "product_name": "Wine - Riesling Alsace Ac 2001", "amount": 895, "discount": "81.99", "cost": "3023.96", "date": "2018-11-14T05:47:49Z", "category": "Computers", "city": "Honkajoki", "orderRating": 3 },
    { "id": 599, "product_name": "Island Oasis - Ice Cream Mix", "amount": 851, "discount": "136.51", "cost": "4745.39", "date": "2017-08-10T02:17:05Z", "category": "Outdoors", "city": "General Lavalle", "orderRating": 4 },
    { "id": 600, "product_name": "Cup - 3.5oz, Foam", "amount": 487, "discount": "125.90", "cost": "2664.29", "date": "2018-09-24T23:31:49Z", "category": "Movies", "city": "Mataguži", "orderRating": 4 },
    { "id": 601, "product_name": "Soup Campbells Beef With Veg", "amount": 136, "discount": "199.76", "cost": "3064.31", "date": "2017-05-03T03:30:56Z", "category": "Movies", "city": "Kojagete", "orderRating": 4 },
    { "id": 602, "product_name": "Pastry - Apple Large", "amount": 425, "discount": "169.77", "cost": "3426.68", "date": "2016-04-20T08:58:44Z", "category": "Books", "city": "Uppsala", "orderRating": 2 },
    { "id": 603, "product_name": "Milk - 2% 250 Ml", "amount": 755, "discount": "140.73", "cost": "1815.21", "date": "2017-09-22T11:56:12Z", "category": "Games", "city": "Pogórze", "orderRating": 6 },
    { "id": 604, "product_name": "Bandage - Fexible 1x3", "amount": 923, "discount": "194.04", "cost": "113.08", "date": "2020-04-21T10:59:45Z", "category": "Industrial", "city": "Dianzi", "orderRating": 2 },
    { "id": 605, "product_name": "Daikon Radish", "amount": 911, "discount": "74.33", "cost": "2327.99", "date": "2018-09-24T04:54:13Z", "category": "Shoes", "city": "Hotaka", "orderRating": 5 },
    { "id": 606, "product_name": "Pasta - Canelloni, Single Serve", "amount": 430, "discount": "159.52", "cost": "4975.03", "date": "2017-10-10T05:13:37Z", "category": "Industrial", "city": "Länsi-Turunmaa", "orderRating": 6 },
    { "id": 607, "product_name": "Cheese - Brie, Cups 125g", "amount": 646, "discount": "59.56", "cost": "4219.50", "date": "2019-05-20T09:17:17Z", "category": "Shoes", "city": "Dingbu", "orderRating": 3 },
    { "id": 608, "product_name": "Creamers - 10%", "amount": 693, "discount": "148.42", "cost": "1255.22", "date": "2019-10-13T09:12:06Z", "category": "Grocery", "city": "Prata", "orderRating": 2 },
    { "id": 609, "product_name": "Onion - Dried", "amount": 656, "discount": "80.47", "cost": "49.98", "date": "2020-03-03T21:56:19Z", "category": "Books", "city": "Oslo", "orderRating": 7 },
    { "id": 610, "product_name": "Tray - Foam, Square 4 - S", "amount": 622, "discount": "150.04", "cost": "2794.13", "date": "2020-03-07T19:36:13Z", "category": "Garden", "city": "Ortega", "orderRating": 7 },
    { "id": 611, "product_name": "Nut - Pine Nuts, Whole", "amount": 54, "discount": "168.31", "cost": "4711.28", "date": "2017-04-12T23:52:19Z", "category": "Garden", "city": "Krzęcin", "orderRating": 7 },
    { "id": 612, "product_name": "Sugar Thermometer", "amount": 44, "discount": "66.27", "cost": "1500.60", "date": "2020-06-26T00:24:32Z", "category": "Clothing", "city": "Mamanguape", "orderRating": 4 },
    { "id": 613, "product_name": "Appetizer - Chicken Satay", "amount": 119, "discount": "15.65", "cost": "3677.91", "date": "2017-08-29T02:53:13Z", "category": "Movies", "city": "Stare Miasto", "orderRating": 4 },
    { "id": 614, "product_name": "Wine - Tribal Sauvignon", "amount": 352, "discount": "109.94", "cost": "4624.90", "date": "2017-10-26T10:44:15Z", "category": "Jewelery", "city": "Portela", "orderRating": 6 },
    { "id": 615, "product_name": "Soup - Campbells, Cream Of", "amount": 763, "discount": "140.38", "cost": "4362.37", "date": "2018-07-25T10:41:53Z", "category": "Grocery", "city": "Carpina", "orderRating": 4 },
    { "id": 616, "product_name": "Wine - Savigny - Les - Beaune", "amount": 927, "discount": "122.65", "cost": "1586.25", "date": "2020-04-02T22:03:12Z", "category": "Home", "city": "Malainen Luma", "orderRating": 6 },
    { "id": 617, "product_name": "Filo Dough", "amount": 262, "discount": "152.50", "cost": "4370.81", "date": "2020-03-28T22:27:21Z", "category": "Industrial", "city": "Watulimo", "orderRating": 7 },
    { "id": 618, "product_name": "Figs", "amount": 13, "discount": "180.58", "cost": "3694.71", "date": "2019-08-10T17:46:18Z", "category": "Tools", "city": "Los Rastrojos", "orderRating": 4 },
    { "id": 619, "product_name": "Apple - Macintosh", "amount": 571, "discount": "165.43", "cost": "1033.44", "date": "2019-08-14T01:12:50Z", "category": "Jewelery", "city": "Wakkanai", "orderRating": 3 },
    { "id": 620, "product_name": "Pasta - Angel Hair", "amount": 899, "discount": "74.78", "cost": "1047.90", "date": "2017-09-22T02:50:34Z", "category": "Automotive", "city": "Port Area", "orderRating": 6 },
    { "id": 621, "product_name": "Lamb - Shoulder", "amount": 320, "discount": "14.41", "cost": "1141.75", "date": "2016-04-16T10:37:39Z", "category": "Games", "city": "Saransk", "orderRating": 6 },
    { "id": 622, "product_name": "Puree - Raspberry", "amount": 683, "discount": "53.12", "cost": "223.72", "date": "2018-09-02T15:57:06Z", "category": "Grocery", "city": "Sydney", "orderRating": 2 },
    { "id": 623, "product_name": "Ice Cream Bar - Hageen Daz To", "amount": 810, "discount": "55.59", "cost": "3523.67", "date": "2017-08-14T04:30:39Z", "category": "Music", "city": "Ébolowa", "orderRating": 4 },
    { "id": 624, "product_name": "Spic And Span All Purpose", "amount": 281, "discount": "149.96", "cost": "4433.69", "date": "2018-01-02T20:08:17Z", "category": "Music", "city": "Jiuhua", "orderRating": 5 },
    { "id": 625, "product_name": "Garbage Bag - Clear", "amount": 262, "discount": "77.88", "cost": "613.32", "date": "2019-04-30T20:37:36Z", "category": "Beauty", "city": "Bantarsari Kulon", "orderRating": 3 },
    { "id": 626, "product_name": "Sauce - Thousand Island", "amount": 558, "discount": "139.04", "cost": "4095.34", "date": "2017-11-07T06:02:40Z", "category": "Music", "city": "Novosel’ye", "orderRating": 6 },
    { "id": 627, "product_name": "Coffee - Dark Roast", "amount": 393, "discount": "112.18", "cost": "3271.51", "date": "2019-05-23T09:30:34Z", "category": "Movies", "city": "Boroko", "orderRating": 6 },
    { "id": 628, "product_name": "Black Currants", "amount": 727, "discount": "199.93", "cost": "1592.83", "date": "2017-06-23T06:37:58Z", "category": "Kids", "city": "Sinop", "orderRating": 6 },
    { "id": 629, "product_name": "Chocolate - Mi - Amere Semi", "amount": 368, "discount": "84.36", "cost": "4412.66", "date": "2018-09-11T16:26:04Z", "category": "Movies", "city": "Kant", "orderRating": 5 },
    { "id": 630, "product_name": "Bread Country Roll", "amount": 603, "discount": "51.92", "cost": "943.25", "date": "2016-10-22T16:22:37Z", "category": "Jewelery", "city": "Long Loreh", "orderRating": 2 },
    { "id": 631, "product_name": "Lobster - Canned Premium", "amount": 551, "discount": "3.00", "cost": "216.99", "date": "2017-11-18T15:37:00Z", "category": "Tools", "city": "Kafr Zībād", "orderRating": 6 },
    { "id": 632, "product_name": "Mix - Cappucino Cocktail", "amount": 33, "discount": "17.58", "cost": "1443.26", "date": "2018-11-28T08:38:19Z", "category": "Home", "city": "Jejkowice", "orderRating": 7 },
    { "id": 633, "product_name": "Container - Clear 32 Oz", "amount": 963, "discount": "4.22", "cost": "4741.26", "date": "2017-02-15T03:29:48Z", "category": "Outdoors", "city": "Jungutbatu Kaja Dua", "orderRating": 4 },
    { "id": 634, "product_name": "Salmon - Sockeye Raw", "amount": 206, "discount": "123.68", "cost": "4718.17", "date": "2015-10-19T03:54:52Z", "category": "Grocery", "city": "Ōta", "orderRating": 5 },
    { "id": 635, "product_name": "Wine - Zinfandel California 2002", "amount": 451, "discount": "112.42", "cost": "2371.41", "date": "2019-04-05T17:45:21Z", "category": "Movies", "city": "General Vedia", "orderRating": 6 },
    { "id": 636, "product_name": "Pepsi - Diet, 355 Ml", "amount": 218, "discount": "127.92", "cost": "333.76", "date": "2015-11-10T14:58:32Z", "category": "Health", "city": "Chishan", "orderRating": 5 },
    { "id": 637, "product_name": "Chicken - Wings, Tip Off", "amount": 38, "discount": "66.68", "cost": "3901.30", "date": "2016-01-06T08:05:37Z", "category": "Automotive", "city": "Emmaboda", "orderRating": 5 },
    { "id": 638, "product_name": "Raspberries - Fresh", "amount": 781, "discount": "140.51", "cost": "1880.73", "date": "2016-11-05T14:38:07Z", "category": "Sports", "city": "Shuangxiqiao", "orderRating": 6 },
    { "id": 639, "product_name": "Apple - Delicious, Golden", "amount": 16, "discount": "63.87", "cost": "1352.30", "date": "2019-03-23T11:55:15Z", "category": "Movies", "city": "Carangola", "orderRating": 6 },
    { "id": 640, "product_name": "Duck - Legs", "amount": 369, "discount": "126.90", "cost": "4276.90", "date": "2018-03-20T15:49:12Z", "category": "Beauty", "city": "Khānaqāh", "orderRating": 1 },
    { "id": 641, "product_name": "Beef - Ground, Extra Lean, Fresh", "amount": 70, "discount": "69.19", "cost": "3923.66", "date": "2016-08-14T16:11:38Z", "category": "Music", "city": "Chengbei", "orderRating": 2 },
    { "id": 642, "product_name": "Soup Campbells", "amount": 939, "discount": "125.62", "cost": "1764.98", "date": "2018-07-28T20:45:32Z", "category": "Baby", "city": "Igunga", "orderRating": 6 },
    { "id": 643, "product_name": "Soup - Campbells - Tomato", "amount": 243, "discount": "18.71", "cost": "4496.19", "date": "2016-11-23T11:40:21Z", "category": "Toys", "city": "Garagoa", "orderRating": 7 },
    { "id": 644, "product_name": "Toothpick Frilled", "amount": 410, "discount": "76.28", "cost": "38.38", "date": "2016-08-12T04:38:56Z", "category": "Baby", "city": "Vila Chã", "orderRating": 2 },
    { "id": 645, "product_name": "Pasta - Cheese / Spinach Bauletti", "amount": 388, "discount": "98.10", "cost": "521.82", "date": "2019-07-03T23:10:49Z", "category": "Sports", "city": "Tan Sum", "orderRating": 1 },
    { "id": 646, "product_name": "Wine - Red, Black Opal Shiraz", "amount": 503, "discount": "9.17", "cost": "3358.45", "date": "2018-10-24T00:47:43Z", "category": "Clothing", "city": "Hope", "orderRating": 6 },
    { "id": 647, "product_name": "Schnappes Peppermint - Walker", "amount": 215, "discount": "102.63", "cost": "3285.30", "date": "2017-01-03T15:26:48Z", "category": "Industrial", "city": "Kloulklubed", "orderRating": 5 },
    { "id": 648, "product_name": "Smoked Tongue", "amount": 639, "discount": "16.88", "cost": "3659.63", "date": "2016-08-20T10:24:21Z", "category": "Tools", "city": "Porto Velho", "orderRating": 7 },
    { "id": 649, "product_name": "Apple - Granny Smith", "amount": 940, "discount": "13.13", "cost": "1319.46", "date": "2019-02-18T15:02:33Z", "category": "Movies", "city": "Tournon-sur-Rhône", "orderRating": 2 },
    { "id": 650, "product_name": "Wine - Sicilia Igt Nero Avola", "amount": 119, "discount": "161.72", "cost": "237.28", "date": "2019-08-30T00:52:47Z", "category": "Home", "city": "Clarines", "orderRating": 2 },
    { "id": 651, "product_name": "Oregano - Dry, Rubbed", "amount": 161, "discount": "135.80", "cost": "1093.80", "date": "2018-09-11T02:34:41Z", "category": "Automotive", "city": "Sjöbo", "orderRating": 4 },
    { "id": 652, "product_name": "Fruit Salad Deluxe", "amount": 225, "discount": "137.90", "cost": "1266.12", "date": "2019-10-09T12:57:24Z", "category": "Baby", "city": "Ar Rumaythīyah", "orderRating": 5 },
    { "id": 653, "product_name": "Flour - Strong Pizza", "amount": 239, "discount": "185.22", "cost": "616.71", "date": "2020-04-12T03:08:29Z", "category": "Computers", "city": "Talzemt", "orderRating": 7 },
    { "id": 654, "product_name": "Chicken - Leg / Back Attach", "amount": 270, "discount": "10.16", "cost": "4594.71", "date": "2016-02-08T08:38:42Z", "category": "Baby", "city": "Yitang", "orderRating": 4 },
    { "id": 655, "product_name": "Juice - Apple, 341 Ml", "amount": 312, "discount": "119.36", "cost": "460.13", "date": "2018-05-02T20:47:27Z", "category": "Baby", "city": "Lianglin", "orderRating": 6 },
    { "id": 656, "product_name": "Wine - Stoneliegh Sauvignon", "amount": 849, "discount": "32.38", "cost": "3105.55", "date": "2015-10-23T13:26:46Z", "category": "Movies", "city": "La Reforma", "orderRating": 5 },
    { "id": 657, "product_name": "Pear - Prickly", "amount": 992, "discount": "33.77", "cost": "3996.93", "date": "2018-10-29T17:03:25Z", "category": "Industrial", "city": "Okhtyrka", "orderRating": 7 },
    { "id": 658, "product_name": "Soup - Campbells, Minestrone", "amount": 543, "discount": "195.69", "cost": "474.14", "date": "2020-08-01T14:43:17Z", "category": "Books", "city": "Mubende", "orderRating": 3 },
    { "id": 659, "product_name": "Wine - Prosecco Valdobiaddene", "amount": 88, "discount": "106.68", "cost": "3870.33", "date": "2019-10-13T04:28:31Z", "category": "Home", "city": "Taklale", "orderRating": 7 },
    { "id": 660, "product_name": "Pasta - Shells, Medium, Dry", "amount": 596, "discount": "180.14", "cost": "4479.97", "date": "2016-08-03T15:47:58Z", "category": "Outdoors", "city": "Lambayong", "orderRating": 2 },
    { "id": 661, "product_name": "Ginsing - Fresh", "amount": 640, "discount": "2.23", "cost": "158.76", "date": "2018-03-29T01:39:26Z", "category": "Kids", "city": "Oslo", "orderRating": 4 },
    { "id": 662, "product_name": "Maintenance Removal Charge", "amount": 982, "discount": "157.77", "cost": "2003.49", "date": "2015-11-07T18:03:19Z", "category": "Beauty", "city": "Forssa", "orderRating": 3 },
    { "id": 663, "product_name": "Juice - Apple, 1.36l", "amount": 567, "discount": "151.29", "cost": "2916.32", "date": "2020-02-06T23:49:02Z", "category": "Kids", "city": "Qinling Jieban", "orderRating": 2 },
    { "id": 664, "product_name": "Bagel - Sesame Seed Presliced", "amount": 108, "discount": "82.49", "cost": "3205.08", "date": "2016-10-27T01:34:28Z", "category": "Movies", "city": "Itambé", "orderRating": 1 },
    { "id": 665, "product_name": "Chips - Potato Jalapeno", "amount": 116, "discount": "147.11", "cost": "2943.32", "date": "2020-06-28T23:02:39Z", "category": "Industrial", "city": "Pengwan", "orderRating": 4 },
    { "id": 666, "product_name": "Sobe - Lizard Fuel", "amount": 356, "discount": "114.79", "cost": "1405.30", "date": "2018-05-31T16:10:30Z", "category": "Grocery", "city": "Nāḩiyat as Sab‘ Biyār", "orderRating": 3 },
    { "id": 667, "product_name": "Saskatoon Berries - Frozen", "amount": 32, "discount": "94.65", "cost": "1935.03", "date": "2016-04-22T16:41:07Z", "category": "Grocery", "city": "Kryvichy", "orderRating": 2 },
    { "id": 668, "product_name": "Barramundi", "amount": 711, "discount": "195.62", "cost": "1698.86", "date": "2019-06-20T16:22:19Z", "category": "Electronics", "city": "Qiaotou", "orderRating": 6 },
    { "id": 669, "product_name": "Olives - Green, Pitted", "amount": 374, "discount": "60.61", "cost": "4963.09", "date": "2016-01-08T10:04:17Z", "category": "Health", "city": "Tiemen", "orderRating": 5 },
    { "id": 670, "product_name": "Quail - Jumbo Boneless", "amount": 733, "discount": "179.46", "cost": "902.57", "date": "2016-11-01T22:27:36Z", "category": "Music", "city": "Pietermaritzburg", "orderRating": 5 },
    { "id": 671, "product_name": "Water - San Pellegrino", "amount": 37, "discount": "167.77", "cost": "1257.10", "date": "2016-07-18T15:21:39Z", "category": "Grocery", "city": "Foz do Arelho", "orderRating": 2 },
    { "id": 672, "product_name": "Mushrooms - Honey", "amount": 226, "discount": "159.19", "cost": "4144.47", "date": "2016-06-21T09:03:30Z", "category": "Movies", "city": "Blangpulo", "orderRating": 2 },
    { "id": 673, "product_name": "Pastry - Lemon Danish - Mini", "amount": 571, "discount": "33.56", "cost": "4869.93", "date": "2016-03-10T01:41:02Z", "category": "Shoes", "city": "Bealanana", "orderRating": 5 },
    { "id": 674, "product_name": "Chicken Thigh - Bone Out", "amount": 952, "discount": "15.50", "cost": "814.00", "date": "2019-08-04T13:46:36Z", "category": "Health", "city": "Stírion", "orderRating": 2 },
    { "id": 675, "product_name": "Wine - Red, Gamay Noir", "amount": 667, "discount": "149.60", "cost": "1194.58", "date": "2020-03-22T23:00:37Z", "category": "Clothing", "city": "Salt Lake City", "orderRating": 1 },
    { "id": 676, "product_name": "Vodka - Lemon, Absolut", "amount": 90, "discount": "99.78", "cost": "836.39", "date": "2016-03-22T01:21:48Z", "category": "Books", "city": "Puzi", "orderRating": 5 },
    { "id": 677, "product_name": "Carbonated Water - Strawberry", "amount": 418, "discount": "192.62", "cost": "3595.70", "date": "2019-12-23T14:41:40Z", "category": "Music", "city": "Gwangtan", "orderRating": 5 },
    { "id": 678, "product_name": "Nut - Hazelnut, Whole", "amount": 118, "discount": "69.05", "cost": "2819.21", "date": "2019-04-17T07:54:47Z", "category": "Home", "city": "Genzi", "orderRating": 5 },
    { "id": 679, "product_name": "Tomato Paste", "amount": 277, "discount": "67.93", "cost": "2228.85", "date": "2017-07-04T18:08:28Z", "category": "Electronics", "city": "Hoorn", "orderRating": 4 },
    { "id": 680, "product_name": "Cheese - Grie Des Champ", "amount": 331, "discount": "59.52", "cost": "1417.38", "date": "2016-08-27T02:30:40Z", "category": "Sports", "city": "Kongwan", "orderRating": 6 },
    { "id": 681, "product_name": "Scallops - U - 10", "amount": 790, "discount": "162.91", "cost": "3068.50", "date": "2016-03-27T06:33:20Z", "category": "Tools", "city": "Namangan", "orderRating": 1 },
    { "id": 682, "product_name": "Beer - Paulaner Hefeweisse", "amount": 149, "discount": "139.56", "cost": "2331.91", "date": "2020-03-18T07:52:33Z", "category": "Garden", "city": "Lowotukan", "orderRating": 1 },
    { "id": 683, "product_name": "Mousse - Mango", "amount": 567, "discount": "183.31", "cost": "2512.50", "date": "2019-05-22T16:51:44Z", "category": "Electronics", "city": "Teslić", "orderRating": 1 },
    { "id": 684, "product_name": "Cactus Pads", "amount": 446, "discount": "194.30", "cost": "4558.44", "date": "2020-06-12T18:35:15Z", "category": "Outdoors", "city": "São Joaquim", "orderRating": 1 },
    { "id": 685, "product_name": "Crab - Dungeness, Whole", "amount": 849, "discount": "190.53", "cost": "4739.66", "date": "2015-12-28T01:24:48Z", "category": "Outdoors", "city": "Chornobay", "orderRating": 4 },
    { "id": 686, "product_name": "Vermouth - White, Cinzano", "amount": 185, "discount": "64.30", "cost": "1317.76", "date": "2017-07-26T21:13:33Z", "category": "Clothing", "city": "Ambatofinandrahana", "orderRating": 3 },
    { "id": 687, "product_name": "Garbage Bags - Black", "amount": 229, "discount": "52.70", "cost": "1340.20", "date": "2020-06-30T06:38:17Z", "category": "Grocery", "city": "Lycksele", "orderRating": 6 },
    { "id": 688, "product_name": "Cookie Double Choco", "amount": 402, "discount": "114.57", "cost": "551.91", "date": "2020-04-20T09:07:28Z", "category": "Home", "city": "Vygonichi", "orderRating": 4 },
    { "id": 689, "product_name": "Wine - White, Ej Gallo", "amount": 673, "discount": "7.48", "cost": "4332.55", "date": "2019-07-27T01:43:01Z", "category": "Electronics", "city": "Ḩabūr", "orderRating": 6 },
    { "id": 690, "product_name": "Pasta - Detalini, White, Fresh", "amount": 620, "discount": "146.65", "cost": "3806.03", "date": "2016-04-20T16:18:10Z", "category": "Industrial", "city": "Newtown", "orderRating": 1 },
    { "id": 691, "product_name": "Split Peas - Yellow, Dry", "amount": 583, "discount": "72.72", "cost": "3352.14", "date": "2019-07-26T00:52:46Z", "category": "Shoes", "city": "Ube", "orderRating": 1 },
    { "id": 692, "product_name": "Cucumber - English", "amount": 646, "discount": "143.86", "cost": "3022.52", "date": "2016-04-10T23:54:24Z", "category": "Automotive", "city": "Adraskan", "orderRating": 3 },
    { "id": 693, "product_name": "Dill Weed - Dry", "amount": 451, "discount": "22.27", "cost": "4214.44", "date": "2016-08-26T21:42:51Z", "category": "Games", "city": "Guantou", "orderRating": 6 },
    { "id": 694, "product_name": "Ginger - Fresh", "amount": 211, "discount": "24.78", "cost": "2982.77", "date": "2018-02-21T03:13:35Z", "category": "Music", "city": "Córdoba", "orderRating": 3 },
    { "id": 695, "product_name": "Lamb - Whole, Fresh", "amount": 121, "discount": "189.47", "cost": "1104.17", "date": "2015-12-22T17:53:59Z", "category": "Garden", "city": "Jinzhou", "orderRating": 1 },
    { "id": 696, "product_name": "Soup - Campbells Mac N Cheese", "amount": 612, "discount": "82.48", "cost": "2686.24", "date": "2020-06-27T19:09:13Z", "category": "Movies", "city": "Goléré", "orderRating": 4 },
    { "id": 697, "product_name": "Lambcasing", "amount": 650, "discount": "53.84", "cost": "189.56", "date": "2017-10-04T06:16:51Z", "category": "Industrial", "city": "Kilafors", "orderRating": 3 },
    { "id": 698, "product_name": "Cheese - Cheddar, Medium", "amount": 116, "discount": "80.92", "cost": "1005.72", "date": "2016-02-24T16:37:44Z", "category": "Grocery", "city": "Türkmenbaşy", "orderRating": 4 },
    { "id": 699, "product_name": "Brownies - Two Bite, Chocolate", "amount": 729, "discount": "98.57", "cost": "740.47", "date": "2018-01-27T14:12:28Z", "category": "Tools", "city": "Österbybruk", "orderRating": 4 },
    { "id": 700, "product_name": "Pasta - Lasagna Noodle, Frozen", "amount": 160, "discount": "176.64", "cost": "65.32", "date": "2017-07-11T09:47:42Z", "category": "Industrial", "city": "Cañaveral", "orderRating": 6 },
    { "id": 701, "product_name": "Juice - Happy Planet", "amount": 950, "discount": "171.66", "cost": "282.88", "date": "2019-06-19T09:36:18Z", "category": "Books", "city": "Hendala", "orderRating": 1 },
    { "id": 702, "product_name": "Chip - Potato Dill Pickle", "amount": 934, "discount": "53.80", "cost": "2688.00", "date": "2018-01-20T11:38:16Z", "category": "Industrial", "city": "Lucban", "orderRating": 6 },
    { "id": 703, "product_name": "Jam - Apricot", "amount": 725, "discount": "40.58", "cost": "4076.59", "date": "2018-02-26T06:39:17Z", "category": "Books", "city": "Medianeira", "orderRating": 6 },
    { "id": 704, "product_name": "Okra", "amount": 900, "discount": "87.13", "cost": "1826.73", "date": "2018-09-26T04:22:44Z", "category": "Health", "city": "Pasirbatang", "orderRating": 1 },
    { "id": 705, "product_name": "Muffin Chocolate Individual Wrap", "amount": 748, "discount": "43.13", "cost": "2338.20", "date": "2016-11-09T02:12:23Z", "category": "Grocery", "city": "Ipoti", "orderRating": 1 },
    { "id": 706, "product_name": "Cookie Dough - Chocolate Chip", "amount": 550, "discount": "106.94", "cost": "1822.39", "date": "2016-01-11T22:15:27Z", "category": "Automotive", "city": "Jasper Park Lodge", "orderRating": 7 },
    { "id": 707, "product_name": "Juice - Tomato, 48 Oz", "amount": 29, "discount": "169.43", "cost": "4722.88", "date": "2017-11-24T15:50:40Z", "category": "Computers", "city": "Melenki", "orderRating": 7 },
    { "id": 708, "product_name": "Lotus Root", "amount": 804, "discount": "27.99", "cost": "1047.48", "date": "2017-07-05T07:52:41Z", "category": "Grocery", "city": "Mādabā", "orderRating": 5 },
    { "id": 709, "product_name": "Cauliflower", "amount": 927, "discount": "142.27", "cost": "849.10", "date": "2017-08-22T06:30:11Z", "category": "Health", "city": "Cap-Santé", "orderRating": 3 },
    { "id": 710, "product_name": "Seedlings - Mix, Organic", "amount": 110, "discount": "98.38", "cost": "3404.11", "date": "2016-10-06T11:02:03Z", "category": "Automotive", "city": "Mikstat", "orderRating": 5 },
    { "id": 711, "product_name": "Capon - Whole", "amount": 260, "discount": "53.07", "cost": "1200.49", "date": "2017-05-29T20:10:41Z", "category": "Outdoors", "city": "Chishan", "orderRating": 5 },
    { "id": 712, "product_name": "Compound - Pear", "amount": 983, "discount": "120.57", "cost": "4149.31", "date": "2020-01-22T15:55:07Z", "category": "Industrial", "city": "Esperanza", "orderRating": 2 },
    { "id": 713, "product_name": "Appetizer - Cheese Bites", "amount": 346, "discount": "89.67", "cost": "2944.08", "date": "2017-11-14T02:51:49Z", "category": "Jewelery", "city": "Lidingö", "orderRating": 7 },
    { "id": 714, "product_name": "Pepper - Pablano", "amount": 668, "discount": "177.45", "cost": "3688.15", "date": "2018-12-31T05:43:52Z", "category": "Shoes", "city": "Guaçuí", "orderRating": 6 },
    { "id": 715, "product_name": "Cheese - Cheddar, Old White", "amount": 491, "discount": "24.04", "cost": "4956.46", "date": "2016-10-20T06:31:58Z", "category": "Automotive", "city": "Xiadingjia", "orderRating": 1 },
    { "id": 716, "product_name": "Marjoram - Dried, Rubbed", "amount": 325, "discount": "71.46", "cost": "273.79", "date": "2019-04-28T11:25:48Z", "category": "Tools", "city": "Tlumačov", "orderRating": 1 },
    { "id": 717, "product_name": "Wine - Red, Harrow Estates, Cab", "amount": 407, "discount": "31.23", "cost": "1421.51", "date": "2018-08-05T15:17:06Z", "category": "Tools", "city": "Pizarrete", "orderRating": 7 },
    { "id": 718, "product_name": "Chocolate Bar - Reese Pieces", "amount": 910, "discount": "98.89", "cost": "1562.37", "date": "2016-04-20T00:30:27Z", "category": "Tools", "city": "Ulcinj", "orderRating": 4 },
    { "id": 719, "product_name": "Muffin Carrot - Individual", "amount": 447, "discount": "83.72", "cost": "4368.50", "date": "2015-12-22T05:57:11Z", "category": "Automotive", "city": "São Joaquim", "orderRating": 2 },
    { "id": 720, "product_name": "Creme De Cacao White", "amount": 777, "discount": "30.79", "cost": "91.57", "date": "2018-11-13T03:03:39Z", "category": "Automotive", "city": "Xiaozhoushan", "orderRating": 1 },
    { "id": 721, "product_name": "Appetizer - Tarragon Chicken", "amount": 355, "discount": "47.76", "cost": "4150.83", "date": "2019-05-12T13:52:23Z", "category": "Outdoors", "city": "Tongxing", "orderRating": 5 },
    { "id": 722, "product_name": "Crush - Orange, 355ml", "amount": 91, "discount": "127.63", "cost": "3012.81", "date": "2019-03-11T00:43:13Z", "category": "Baby", "city": "Solnechnoye", "orderRating": 5 },
    { "id": 723, "product_name": "Watercress", "amount": 294, "discount": "28.36", "cost": "1693.25", "date": "2016-06-10T18:25:42Z", "category": "Kids", "city": "Dlemer", "orderRating": 1 },
    { "id": 724, "product_name": "Spice - Greek 1 Step", "amount": 813, "discount": "45.75", "cost": "1546.91", "date": "2015-10-23T22:52:10Z", "category": "Kids", "city": "Bulog", "orderRating": 5 },
    { "id": 725, "product_name": "Garlic Powder", "amount": 717, "discount": "171.21", "cost": "884.49", "date": "2016-05-19T15:58:52Z", "category": "Garden", "city": "Tazhuang", "orderRating": 5 },
    { "id": 726, "product_name": "White Fish - Filets", "amount": 634, "discount": "108.44", "cost": "2912.46", "date": "2019-03-21T08:38:39Z", "category": "Industrial", "city": "Manouba", "orderRating": 3 },
    { "id": 727, "product_name": "Pomegranates", "amount": 577, "discount": "7.40", "cost": "490.42", "date": "2016-03-01T22:10:40Z", "category": "Garden", "city": "Yegor’yevsk", "orderRating": 3 },
    { "id": 728, "product_name": "Juice - V8 Splash", "amount": 205, "discount": "19.10", "cost": "52.91", "date": "2019-02-19T20:39:08Z", "category": "Home", "city": "Sozopol", "orderRating": 3 },
    { "id": 729, "product_name": "Mushroom - Enoki, Dry", "amount": 313, "discount": "153.30", "cost": "2397.48", "date": "2018-12-28T00:53:39Z", "category": "Jewelery", "city": "Phon Charoen", "orderRating": 1 },
    { "id": 730, "product_name": "Tomatoes - Vine Ripe, Yellow", "amount": 201, "discount": "107.89", "cost": "2432.67", "date": "2018-12-25T19:30:02Z", "category": "Sports", "city": "Purwosari", "orderRating": 2 },
    { "id": 731, "product_name": "Lamb Leg - Bone - In Nz", "amount": 638, "discount": "110.61", "cost": "1683.64", "date": "2018-09-17T03:40:53Z", "category": "Home", "city": "Cerquilho", "orderRating": 2 },
    { "id": 732, "product_name": "Lamb - Rack", "amount": 262, "discount": "146.37", "cost": "2698.26", "date": "2015-10-20T05:27:06Z", "category": "Electronics", "city": "Insrom", "orderRating": 5 },
    { "id": 733, "product_name": "Wine - Riesling Dr. Pauly", "amount": 537, "discount": "132.85", "cost": "3976.95", "date": "2017-12-06T02:19:22Z", "category": "Industrial", "city": "Ambatolampy", "orderRating": 3 },
    { "id": 734, "product_name": "Wine - Rosso Toscano Igt", "amount": 344, "discount": "20.73", "cost": "4768.58", "date": "2018-12-29T12:47:15Z", "category": "Garden", "city": "Yeniköy", "orderRating": 1 },
    { "id": 735, "product_name": "Tomatoes - Heirloom", "amount": 448, "discount": "13.63", "cost": "4530.83", "date": "2018-05-21T08:01:33Z", "category": "Automotive", "city": "Surkh Bilandī", "orderRating": 7 },
    { "id": 736, "product_name": "C - Plus, Orange", "amount": 674, "discount": "70.73", "cost": "1119.27", "date": "2018-03-06T05:03:24Z", "category": "Sports", "city": "Mayantoc", "orderRating": 2 },
    { "id": 737, "product_name": "Beans - Soya Bean", "amount": 762, "discount": "52.89", "cost": "2147.42", "date": "2017-04-03T13:49:17Z", "category": "Health", "city": "Npongge", "orderRating": 6 },
    { "id": 738, "product_name": "Broccoli - Fresh", "amount": 479, "discount": "19.54", "cost": "4716.89", "date": "2017-03-26T10:07:45Z", "category": "Garden", "city": "Luksuhin", "orderRating": 3 },
    { "id": 739, "product_name": "Cape Capensis - Fillet", "amount": 107, "discount": "28.72", "cost": "575.93", "date": "2016-09-22T22:31:46Z", "category": "Industrial", "city": "Zhongxi", "orderRating": 1 },
    { "id": 740, "product_name": "Cup - 8oz Coffee Perforated", "amount": 343, "discount": "27.52", "cost": "1175.61", "date": "2016-11-17T00:07:10Z", "category": "Books", "city": "San Narciso", "orderRating": 1 },
    { "id": 741, "product_name": "Beans - Yellow", "amount": 89, "discount": "4.70", "cost": "4278.71", "date": "2019-06-12T22:39:28Z", "category": "Kids", "city": "Żywiec", "orderRating": 2 },
    { "id": 742, "product_name": "Walkers Special Old Whiskey", "amount": 939, "discount": "184.86", "cost": "2717.68", "date": "2015-12-18T14:42:51Z", "category": "Games", "city": "Salto", "orderRating": 4 },
    { "id": 743, "product_name": "Beef - Ox Tongue", "amount": 969, "discount": "102.62", "cost": "3831.82", "date": "2017-11-13T02:56:24Z", "category": "Automotive", "city": "Kijang", "orderRating": 5 },
    { "id": 744, "product_name": "Beer - Pilsner Urquell", "amount": 243, "discount": "98.34", "cost": "486.68", "date": "2018-12-10T10:19:56Z", "category": "Home", "city": "Noshiro", "orderRating": 6 },
    { "id": 745, "product_name": "Arizona - Plum Green Tea", "amount": 892, "discount": "128.86", "cost": "2378.16", "date": "2020-05-11T10:32:39Z", "category": "Baby", "city": "Dabou", "orderRating": 2 },
    { "id": 746, "product_name": "Assorted Desserts", "amount": 658, "discount": "81.06", "cost": "4545.72", "date": "2019-11-24T09:12:50Z", "category": "Beauty", "city": "Yegor’yevsk", "orderRating": 2 },
    { "id": 747, "product_name": "Foam Espresso Cup Plain White", "amount": 89, "discount": "96.33", "cost": "958.80", "date": "2019-09-08T13:20:44Z", "category": "Grocery", "city": "San Jose", "orderRating": 6 },
    { "id": 748, "product_name": "Wine - Sauvignon Blanc Oyster", "amount": 435, "discount": "148.12", "cost": "4696.69", "date": "2016-09-09T06:48:05Z", "category": "Jewelery", "city": "Krasnapollye", "orderRating": 4 },
    { "id": 749, "product_name": "Wine La Vielle Ferme Cote Du", "amount": 876, "discount": "151.65", "cost": "318.62", "date": "2017-04-27T11:46:15Z", "category": "Garden", "city": "Āwash", "orderRating": 3 },
    { "id": 750, "product_name": "Trueblue - Blueberry", "amount": 414, "discount": "101.83", "cost": "2381.87", "date": "2018-12-16T20:56:00Z", "category": "Shoes", "city": "Tigpalay", "orderRating": 2 },
    { "id": 751, "product_name": "Fish - Base, Bouillion", "amount": 665, "discount": "10.77", "cost": "1688.21", "date": "2019-06-25T22:42:29Z", "category": "Games", "city": "Guadalupe Victoria", "orderRating": 2 },
    { "id": 752, "product_name": "Trueblue - Blueberry Cranberry", "amount": 856, "discount": "21.92", "cost": "4318.23", "date": "2019-03-21T03:27:26Z", "category": "Baby", "city": "Leskovac", "orderRating": 7 },
    { "id": 753, "product_name": "Flavouring - Raspberry", "amount": 667, "discount": "142.20", "cost": "1738.88", "date": "2016-05-20T12:35:18Z", "category": "Toys", "city": "Prince Edward", "orderRating": 3 },
    { "id": 754, "product_name": "Cake Circle, Foil, Scallop", "amount": 256, "discount": "137.11", "cost": "4876.54", "date": "2018-06-13T03:44:41Z", "category": "Beauty", "city": "Nginokrajan", "orderRating": 1 },
    { "id": 755, "product_name": "Wine - Prem Select Charddonany", "amount": 664, "discount": "20.59", "cost": "3908.16", "date": "2020-04-07T18:01:59Z", "category": "Games", "city": "Mushie", "orderRating": 5 },
    { "id": 756, "product_name": "Wine - Barossa Valley Estate", "amount": 738, "discount": "19.85", "cost": "1922.76", "date": "2016-08-21T22:17:34Z", "category": "Electronics", "city": "Donghui", "orderRating": 1 },
    { "id": 757, "product_name": "Steel Wool", "amount": 573, "discount": "26.55", "cost": "3180.80", "date": "2019-06-01T19:51:07Z", "category": "Tools", "city": "Seara", "orderRating": 3 },
    { "id": 758, "product_name": "Wine - Jafflin Bourgongone", "amount": 517, "discount": "183.32", "cost": "2307.83", "date": "2016-08-22T11:55:38Z", "category": "Music", "city": "Farsta", "orderRating": 4 },
    { "id": 759, "product_name": "Soup - Campbells Chicken", "amount": 235, "discount": "22.29", "cost": "1521.01", "date": "2018-01-13T07:11:39Z", "category": "Sports", "city": "Sebeta", "orderRating": 3 },
    { "id": 760, "product_name": "Oranges - Navel, 72", "amount": 373, "discount": "140.45", "cost": "3929.91", "date": "2016-03-07T10:20:45Z", "category": "Kids", "city": "Loma Alta", "orderRating": 1 },
    { "id": 761, "product_name": "Ecolab Silver Fusion", "amount": 773, "discount": "124.66", "cost": "1134.78", "date": "2017-04-28T10:13:32Z", "category": "Health", "city": "Jarry", "orderRating": 4 },
    { "id": 762, "product_name": "Pork - Bacon Cooked Slcd", "amount": 81, "discount": "50.80", "cost": "2662.28", "date": "2019-09-19T09:18:25Z", "category": "Movies", "city": "Ţūbās", "orderRating": 4 },
    { "id": 763, "product_name": "Juice - Propel Sport", "amount": 942, "discount": "178.79", "cost": "1228.30", "date": "2015-10-16T10:04:06Z", "category": "Beauty", "city": "Sierra Imataca", "orderRating": 6 },
    { "id": 764, "product_name": "Monkfish - Fresh", "amount": 844, "discount": "194.01", "cost": "3044.06", "date": "2018-11-24T13:10:52Z", "category": "Computers", "city": "Corbeil-Essonnes", "orderRating": 7 },
    { "id": 765, "product_name": "Peach - Fresh", "amount": 250, "discount": "83.76", "cost": "2626.26", "date": "2018-04-23T09:47:18Z", "category": "Outdoors", "city": "Saint Petersburg", "orderRating": 2 },
    { "id": 766, "product_name": "Wiberg Super Cure", "amount": 551, "discount": "105.90", "cost": "657.90", "date": "2017-07-06T22:44:22Z", "category": "Books", "city": "Huangdao", "orderRating": 1 },
    { "id": 767, "product_name": "Glucose", "amount": 477, "discount": "136.23", "cost": "1808.78", "date": "2018-04-11T03:22:22Z", "category": "Tools", "city": "Babah Rot", "orderRating": 7 },
    { "id": 768, "product_name": "Split Peas - Yellow, Dry", "amount": 72, "discount": "125.06", "cost": "407.19", "date": "2019-12-03T08:22:13Z", "category": "Kids", "city": "Sanyi", "orderRating": 5 },
    { "id": 769, "product_name": "Lemon Tarts", "amount": 223, "discount": "153.04", "cost": "1293.12", "date": "2015-10-26T14:54:02Z", "category": "Movies", "city": "Peras Ruivas", "orderRating": 5 },
    { "id": 770, "product_name": "Wine - Touraine Azay - Le - Rideau", "amount": 710, "discount": "86.07", "cost": "3190.27", "date": "2018-08-02T04:13:44Z", "category": "Toys", "city": "Złocieniec", "orderRating": 1 },
    { "id": 771, "product_name": "Pepper - Paprika, Spanish", "amount": 875, "discount": "86.71", "cost": "2918.14", "date": "2018-11-12T11:22:53Z", "category": "Computers", "city": "Nanae", "orderRating": 5 },
    { "id": 772, "product_name": "Wine - Gewurztraminer Pierre", "amount": 180, "discount": "178.38", "cost": "2608.46", "date": "2019-10-04T13:12:11Z", "category": "Movies", "city": "Maquanzhen", "orderRating": 6 },
    { "id": 773, "product_name": "V8 Splash Strawberry Kiwi", "amount": 940, "discount": "136.38", "cost": "4295.75", "date": "2017-06-21T23:45:19Z", "category": "Industrial", "city": "Rodez", "orderRating": 6 },
    { "id": 774, "product_name": "Beer - Guiness", "amount": 40, "discount": "103.81", "cost": "2716.08", "date": "2019-07-01T03:23:41Z", "category": "Beauty", "city": "Chengcun", "orderRating": 2 },
    { "id": 775, "product_name": "Sterno - Chafing Dish Fuel", "amount": 712, "discount": "40.26", "cost": "1636.00", "date": "2018-01-11T17:19:47Z", "category": "Electronics", "city": "Zhanggongmiao", "orderRating": 3 },
    { "id": 776, "product_name": "Cumin - Whole", "amount": 847, "discount": "34.73", "cost": "4307.08", "date": "2017-01-19T15:53:14Z", "category": "Outdoors", "city": "Paris La Défense", "orderRating": 6 },
    { "id": 777, "product_name": "Soup - Tomato Mush. Florentine", "amount": 399, "discount": "34.60", "cost": "633.97", "date": "2019-08-22T19:02:03Z", "category": "Home", "city": "Pires do Rio", "orderRating": 7 },
    { "id": 778, "product_name": "Wine - Pinot Noir Stoneleigh", "amount": 880, "discount": "60.83", "cost": "4478.97", "date": "2017-01-26T04:32:04Z", "category": "Toys", "city": "Alto de la Estancia", "orderRating": 7 },
    { "id": 779, "product_name": "Crackers - Soda / Saltins", "amount": 291, "discount": "177.91", "cost": "853.10", "date": "2018-09-24T02:54:55Z", "category": "Tools", "city": "Diaoluoshan", "orderRating": 3 },
    { "id": 780, "product_name": "Curry Powder", "amount": 723, "discount": "34.77", "cost": "2616.37", "date": "2018-11-17T23:29:38Z", "category": "Books", "city": "Tandayag", "orderRating": 2 },
    { "id": 781, "product_name": "Apple - Granny Smith", "amount": 831, "discount": "72.63", "cost": "3612.46", "date": "2018-01-16T19:23:18Z", "category": "Outdoors", "city": "Ipoh", "orderRating": 7 },
    { "id": 782, "product_name": "Wine - Peller Estates Late", "amount": 819, "discount": "76.08", "cost": "2040.99", "date": "2020-03-31T22:16:34Z", "category": "Grocery", "city": "Thawi Watthana", "orderRating": 3 },
    { "id": 783, "product_name": "Split Peas - Yellow, Dry", "amount": 327, "discount": "59.32", "cost": "111.55", "date": "2017-01-11T14:39:32Z", "category": "Music", "city": "Sansanné-Mango", "orderRating": 1 },
    { "id": 784, "product_name": "Tray - 16in Rnd Blk", "amount": 320, "discount": "78.03", "cost": "1329.10", "date": "2019-02-24T15:21:54Z", "category": "Music", "city": "Nanbin", "orderRating": 4 },
    { "id": 785, "product_name": "Numi - Assorted Teas", "amount": 98, "discount": "50.16", "cost": "79.02", "date": "2016-03-30T08:28:11Z", "category": "Outdoors", "city": "Caen", "orderRating": 6 },
    { "id": 786, "product_name": "Noodles - Cellophane, Thin", "amount": 819, "discount": "13.98", "cost": "1626.52", "date": "2019-10-26T22:27:24Z", "category": "Home", "city": "Vila do Maio", "orderRating": 6 },
    { "id": 787, "product_name": "Napkin White - Starched", "amount": 767, "discount": "6.65", "cost": "1700.98", "date": "2020-07-01T13:13:39Z", "category": "Games", "city": "Zagora", "orderRating": 5 },
    { "id": 788, "product_name": "Cheese - Manchego, Spanish", "amount": 739, "discount": "78.61", "cost": "2938.32", "date": "2018-08-31T10:16:45Z", "category": "Electronics", "city": "Pansoy", "orderRating": 3 },
    { "id": 789, "product_name": "Containter - 3oz Microwave Rect.", "amount": 597, "discount": "59.41", "cost": "1828.68", "date": "2019-02-19T07:15:49Z", "category": "Jewelery", "city": "Zouparria do Monte", "orderRating": 3 },
    { "id": 790, "product_name": "Chick Peas - Dried", "amount": 411, "discount": "30.66", "cost": "4059.89", "date": "2015-12-19T06:36:49Z", "category": "Toys", "city": "Pulau Pinang", "orderRating": 2 },
    { "id": 791, "product_name": "Veal - Brisket, Provimi, Bone - In", "amount": 632, "discount": "22.35", "cost": "1941.40", "date": "2020-01-15T01:10:08Z", "category": "Kids", "city": "Beisijiazi", "orderRating": 6 },
    { "id": 792, "product_name": "Sausage - Liver", "amount": 726, "discount": "1.71", "cost": "1694.01", "date": "2018-12-15T13:24:51Z", "category": "Shoes", "city": "Przystajń", "orderRating": 1 },
    { "id": 793, "product_name": "Soup - Campbells, Chix Gumbo", "amount": 425, "discount": "46.69", "cost": "906.97", "date": "2017-03-16T19:36:06Z", "category": "Tools", "city": "Jiangqiao", "orderRating": 7 },
    { "id": 794, "product_name": "Bread - Ciabatta Buns", "amount": 614, "discount": "86.77", "cost": "4408.60", "date": "2018-05-26T15:56:01Z", "category": "Automotive", "city": "Biała Piska", "orderRating": 1 },
    { "id": 795, "product_name": "Macaroons - Homestyle Two Bit", "amount": 289, "discount": "72.81", "cost": "4793.53", "date": "2019-02-28T17:24:29Z", "category": "Toys", "city": "Mosjøen", "orderRating": 2 },
    { "id": 796, "product_name": "Loaf Pan - 2 Lb, Foil", "amount": 599, "discount": "81.50", "cost": "2296.10", "date": "2020-01-05T06:36:33Z", "category": "Health", "city": "Takaishi", "orderRating": 1 },
    { "id": 797, "product_name": "Whmis Spray Bottle Graduated", "amount": 835, "discount": "168.42", "cost": "3657.80", "date": "2018-03-03T23:01:42Z", "category": "Toys", "city": "Pilawa", "orderRating": 2 },
    { "id": 798, "product_name": "Container - Hngd Cll Blk 7x7x3", "amount": 360, "discount": "169.55", "cost": "4913.07", "date": "2020-01-30T16:05:07Z", "category": "Games", "city": "Brezovica", "orderRating": 6 },
    { "id": 799, "product_name": "Cheese - Boursin, Garlic / Herbs", "amount": 263, "discount": "98.32", "cost": "2527.45", "date": "2016-04-01T07:54:49Z", "category": "Books", "city": "Polzela", "orderRating": 5 },
    { "id": 800, "product_name": "Vinegar - Red Wine", "amount": 585, "discount": "63.02", "cost": "442.92", "date": "2020-04-27T17:12:03Z", "category": "Kids", "city": "Tinumpuk", "orderRating": 6 },
    { "id": 801, "product_name": "Venison - Striploin", "amount": 113, "discount": "18.04", "cost": "3127.32", "date": "2016-01-21T04:20:42Z", "category": "Tools", "city": "Perdões", "orderRating": 6 },
    { "id": 802, "product_name": "Water - Evian 355 Ml", "amount": 557, "discount": "119.74", "cost": "106.54", "date": "2018-11-17T17:42:23Z", "category": "Clothing", "city": "Pawak", "orderRating": 2 },
    { "id": 803, "product_name": "Lime Cordial - Roses", "amount": 227, "discount": "32.33", "cost": "4173.24", "date": "2016-06-28T00:09:32Z", "category": "Clothing", "city": "Yashio-shi", "orderRating": 6 },
    { "id": 804, "product_name": "Turkey Leg With Drum And Thigh", "amount": 84, "discount": "179.38", "cost": "2458.79", "date": "2016-12-18T13:29:19Z", "category": "Electronics", "city": "Tarrafal", "orderRating": 6 },
    { "id": 805, "product_name": "Veal - Inside, Choice", "amount": 737, "discount": "92.39", "cost": "2022.92", "date": "2018-11-09T23:09:54Z", "category": "Industrial", "city": "Boulder", "orderRating": 7 },
    { "id": 806, "product_name": "Bread - Corn Muffaletta", "amount": 756, "discount": "16.65", "cost": "3259.59", "date": "2020-08-01T13:44:55Z", "category": "Health", "city": "Dong’an", "orderRating": 6 },
    { "id": 807, "product_name": "Toothpick Frilled", "amount": 534, "discount": "188.74", "cost": "3506.19", "date": "2016-10-29T16:04:42Z", "category": "Outdoors", "city": "Romanovo", "orderRating": 5 },
    { "id": 808, "product_name": "Rum - White, Gg White", "amount": 454, "discount": "87.92", "cost": "3525.14", "date": "2020-04-06T13:00:32Z", "category": "Toys", "city": "Portet-sur-Garonne", "orderRating": 2 },
    { "id": 809, "product_name": "Leeks - Baby, White", "amount": 405, "discount": "33.10", "cost": "4119.83", "date": "2016-03-18T10:06:30Z", "category": "Automotive", "city": "El Quebrachal", "orderRating": 3 },
    { "id": 810, "product_name": "Lettuce - Frisee", "amount": 879, "discount": "110.62", "cost": "2284.26", "date": "2019-08-04T17:27:08Z", "category": "Tools", "city": "Karipidita", "orderRating": 1 },
    { "id": 811, "product_name": "Cheese - Brie, Triple Creme", "amount": 547, "discount": "138.31", "cost": "3526.24", "date": "2018-02-20T12:38:38Z", "category": "Garden", "city": "Naifaru", "orderRating": 4 },
    { "id": 812, "product_name": "Wine - White, Colubia Cresh", "amount": 531, "discount": "119.93", "cost": "2362.20", "date": "2016-07-02T06:09:07Z", "category": "Jewelery", "city": "Paraíso", "orderRating": 2 },
    { "id": 813, "product_name": "Veal - Slab Bacon", "amount": 633, "discount": "57.36", "cost": "1029.51", "date": "2017-12-02T22:57:14Z", "category": "Sports", "city": "Tandag", "orderRating": 7 },
    { "id": 814, "product_name": "Cookie - Oreo 100x2", "amount": 372, "discount": "41.32", "cost": "3801.12", "date": "2017-05-27T19:44:09Z", "category": "Home", "city": "Amarillo", "orderRating": 3 },
    { "id": 815, "product_name": "Chicken - Ground", "amount": 771, "discount": "19.77", "cost": "373.85", "date": "2018-02-16T12:34:04Z", "category": "Movies", "city": "Kuzhorskaya", "orderRating": 2 },
    { "id": 816, "product_name": "Pie Shell - 5", "amount": 716, "discount": "56.30", "cost": "2953.27", "date": "2018-04-18T16:09:34Z", "category": "Automotive", "city": "Belogorskīy", "orderRating": 5 },
    { "id": 817, "product_name": "Radish - Pickled", "amount": 2, "discount": "198.71", "cost": "3932.96", "date": "2020-02-20T14:06:15Z", "category": "Toys", "city": "Krzczonów", "orderRating": 1 },
    { "id": 818, "product_name": "Seaweed Green Sheets", "amount": 33, "discount": "90.02", "cost": "1795.79", "date": "2016-01-22T19:09:55Z", "category": "Games", "city": "Bei", "orderRating": 4 },
    { "id": 819, "product_name": "Clam Nectar", "amount": 262, "discount": "183.49", "cost": "695.14", "date": "2016-07-06T15:31:32Z", "category": "Grocery", "city": "Banjar Anyar", "orderRating": 6 },
    { "id": 820, "product_name": "Chilli Paste, Hot Sambal Oelek", "amount": 350, "discount": "189.53", "cost": "2867.44", "date": "2017-02-18T09:45:20Z", "category": "Books", "city": "Semënovskoye", "orderRating": 4 },
    { "id": 821, "product_name": "Sponge Cake Mix - Chocolate", "amount": 186, "discount": "117.73", "cost": "1626.30", "date": "2016-12-20T06:40:08Z", "category": "Beauty", "city": "Minas de Marcona", "orderRating": 6 },
    { "id": 822, "product_name": "Juice - Orange 1.89l", "amount": 686, "discount": "98.10", "cost": "2472.41", "date": "2018-09-02T10:45:05Z", "category": "Home", "city": "Binangun", "orderRating": 5 },
    { "id": 823, "product_name": "Iced Tea Concentrate", "amount": 310, "discount": "145.02", "cost": "4080.62", "date": "2018-06-09T06:59:07Z", "category": "Shoes", "city": "Derbent", "orderRating": 5 },
    { "id": 824, "product_name": "Truffle Shells - White Chocolate", "amount": 949, "discount": "16.61", "cost": "1686.15", "date": "2018-02-17T22:05:09Z", "category": "Jewelery", "city": "Moss", "orderRating": 6 },
    { "id": 825, "product_name": "Longos - Chicken Cordon Bleu", "amount": 481, "discount": "57.95", "cost": "4145.76", "date": "2018-01-25T16:18:08Z", "category": "Sports", "city": "Pagsañgahan", "orderRating": 6 },
    { "id": 826, "product_name": "Chocolate - Chips Compound", "amount": 96, "discount": "93.02", "cost": "3211.59", "date": "2018-02-07T22:20:44Z", "category": "Electronics", "city": "La Oroya", "orderRating": 7 },
    { "id": 827, "product_name": "Soup - Campbells Chili", "amount": 45, "discount": "175.93", "cost": "1936.23", "date": "2019-01-06T13:38:24Z", "category": "Electronics", "city": "El Cantón", "orderRating": 6 },
    { "id": 828, "product_name": "Gloves - Goldtouch Disposable", "amount": 848, "discount": "115.25", "cost": "3611.76", "date": "2019-08-30T14:02:23Z", "category": "Garden", "city": "Zhonghekou", "orderRating": 5 },
    { "id": 829, "product_name": "Lamb - Whole Head Off,nz", "amount": 535, "discount": "23.37", "cost": "1518.25", "date": "2016-10-30T11:54:28Z", "category": "Games", "city": "Protaras", "orderRating": 2 },
    { "id": 830, "product_name": "Snapple Lemon Tea", "amount": 975, "discount": "92.37", "cost": "4675.40", "date": "2017-08-12T06:00:11Z", "category": "Industrial", "city": "Cran-Gevrier", "orderRating": 1 },
    { "id": 831, "product_name": "Cattail Hearts", "amount": 99, "discount": "76.10", "cost": "2070.60", "date": "2016-05-02T10:55:09Z", "category": "Shoes", "city": "Seattle", "orderRating": 7 },
    { "id": 832, "product_name": "Chicken - Wieners", "amount": 225, "discount": "133.70", "cost": "1698.96", "date": "2018-10-16T01:26:03Z", "category": "Games", "city": "Ban Thai Tan", "orderRating": 3 },
    { "id": 833, "product_name": "Fennel - Seeds", "amount": 210, "discount": "105.50", "cost": "2325.82", "date": "2020-01-04T17:12:07Z", "category": "Electronics", "city": "Paka", "orderRating": 1 },
    { "id": 834, "product_name": "Food Colouring - Green", "amount": 618, "discount": "94.68", "cost": "2425.99", "date": "2020-06-29T12:24:13Z", "category": "Health", "city": "Rehoboth", "orderRating": 6 },
    { "id": 835, "product_name": "Raspberries - Fresh", "amount": 498, "discount": "10.04", "cost": "2086.72", "date": "2019-05-17T02:16:35Z", "category": "Sports", "city": "Seke", "orderRating": 5 },
    { "id": 836, "product_name": "Soupfoamcont12oz 112con", "amount": 911, "discount": "43.65", "cost": "660.99", "date": "2019-04-16T13:05:48Z", "category": "Garden", "city": "Vólos", "orderRating": 5 },
    { "id": 837, "product_name": "Cookies - Englishbay Wht", "amount": 680, "discount": "197.88", "cost": "2733.82", "date": "2017-04-20T23:15:09Z", "category": "Automotive", "city": "Ergong", "orderRating": 3 },
    { "id": 838, "product_name": "Pail For Lid 1537", "amount": 216, "discount": "199.34", "cost": "2588.96", "date": "2017-12-14T07:38:45Z", "category": "Toys", "city": "Mikró Monastíri", "orderRating": 4 },
    { "id": 839, "product_name": "Chevere Logs", "amount": 31, "discount": "115.16", "cost": "2323.54", "date": "2017-03-26T04:05:34Z", "category": "Books", "city": "Tanjungsari Barat", "orderRating": 7 },
    { "id": 840, "product_name": "Asparagus - White, Canned", "amount": 900, "discount": "53.72", "cost": "1736.74", "date": "2015-11-25T02:13:26Z", "category": "Movies", "city": "Maiorca", "orderRating": 1 },
    { "id": 841, "product_name": "Appetizer - Southwestern", "amount": 298, "discount": "151.96", "cost": "4602.18", "date": "2017-04-03T22:44:03Z", "category": "Home", "city": "Terrugem", "orderRating": 4 },
    { "id": 842, "product_name": "Nut - Walnut, Pieces", "amount": 817, "discount": "130.99", "cost": "1543.36", "date": "2017-10-16T06:51:28Z", "category": "Electronics", "city": "Santa Cruz La Laguna", "orderRating": 2 },
    { "id": 843, "product_name": "Truffle Cups - Red", "amount": 589, "discount": "97.31", "cost": "1747.01", "date": "2019-04-16T15:33:23Z", "category": "Books", "city": "Piippola", "orderRating": 3 },
    { "id": 844, "product_name": "Tea - Lemon Green Tea", "amount": 611, "discount": "136.28", "cost": "1192.39", "date": "2018-01-20T18:01:01Z", "category": "Garden", "city": "Panitian", "orderRating": 3 },
    { "id": 845, "product_name": "Pepper Squash", "amount": 183, "discount": "126.73", "cost": "143.18", "date": "2019-06-08T02:52:20Z", "category": "Health", "city": "Fatufeto", "orderRating": 6 },
    { "id": 846, "product_name": "Ketchup - Tomato", "amount": 798, "discount": "60.82", "cost": "2244.55", "date": "2020-06-03T10:18:24Z", "category": "Shoes", "city": "Jomsom", "orderRating": 4 },
    { "id": 847, "product_name": "Island Oasis - Strawberry", "amount": 583, "discount": "147.87", "cost": "2036.28", "date": "2017-12-26T06:11:56Z", "category": "Industrial", "city": "Badai", "orderRating": 6 },
    { "id": 848, "product_name": "Lobster - Baby, Boiled", "amount": 366, "discount": "164.64", "cost": "3735.98", "date": "2018-09-07T00:31:30Z", "category": "Automotive", "city": "Xamba", "orderRating": 5 },
    { "id": 849, "product_name": "Gooseberry", "amount": 960, "discount": "17.84", "cost": "3815.76", "date": "2017-02-28T10:39:31Z", "category": "Sports", "city": "Borzęta", "orderRating": 3 },
    { "id": 850, "product_name": "Gatorade - Xfactor Berry", "amount": 932, "discount": "30.97", "cost": "4508.07", "date": "2016-04-15T03:02:37Z", "category": "Automotive", "city": "Las Junturas", "orderRating": 4 },
    { "id": 851, "product_name": "Raisin - Dark", "amount": 719, "discount": "69.52", "cost": "3578.49", "date": "2016-01-10T16:09:05Z", "category": "Jewelery", "city": "Iracemápolis", "orderRating": 4 },
    { "id": 852, "product_name": "Wine - Peller Estates Late", "amount": 369, "discount": "65.26", "cost": "3795.35", "date": "2016-07-11T15:56:20Z", "category": "Outdoors", "city": "Nantes", "orderRating": 6 },
    { "id": 853, "product_name": "Toothpick Frilled", "amount": 540, "discount": "0.42", "cost": "4193.47", "date": "2016-03-14T10:05:47Z", "category": "Beauty", "city": "Solikamsk", "orderRating": 3 },
    { "id": 854, "product_name": "Juice - Pineapple, 341 Ml", "amount": 596, "discount": "170.68", "cost": "873.11", "date": "2019-08-10T05:21:58Z", "category": "Music", "city": "Khlong Toei", "orderRating": 1 },
    { "id": 855, "product_name": "Anchovy Paste - 56 G Tube", "amount": 589, "discount": "52.50", "cost": "410.29", "date": "2015-11-21T16:46:06Z", "category": "Garden", "city": "Chechen-Aul", "orderRating": 2 },
    { "id": 856, "product_name": "Appetizer - Seafood Assortment", "amount": 475, "discount": "31.49", "cost": "59.75", "date": "2020-03-09T08:31:28Z", "category": "Games", "city": "Ilioúpoli", "orderRating": 6 },
    { "id": 857, "product_name": "Chocolate Bar - Reese Pieces", "amount": 695, "discount": "78.93", "cost": "1122.30", "date": "2018-01-21T17:09:13Z", "category": "Jewelery", "city": "Youfang", "orderRating": 2 },
    { "id": 858, "product_name": "Juice - Apple 284ml", "amount": 289, "discount": "131.45", "cost": "2673.42", "date": "2016-06-19T10:34:41Z", "category": "Computers", "city": "Sukamanah", "orderRating": 6 },
    { "id": 859, "product_name": "Shiro Miso", "amount": 753, "discount": "178.81", "cost": "1588.84", "date": "2016-11-17T05:51:54Z", "category": "Jewelery", "city": "Xialiao", "orderRating": 3 },
    { "id": 860, "product_name": "Mushroom - Porcini Frozen", "amount": 643, "discount": "140.95", "cost": "4569.69", "date": "2015-10-04T04:13:30Z", "category": "Health", "city": "Dolní Dvořiště", "orderRating": 3 },
    { "id": 861, "product_name": "Salmon - Fillets", "amount": 842, "discount": "120.50", "cost": "3229.85", "date": "2018-06-10T11:01:43Z", "category": "Toys", "city": "Toledo", "orderRating": 2 },
    { "id": 862, "product_name": "Cheese - Parmesan Grated", "amount": 98, "discount": "97.95", "cost": "1733.46", "date": "2020-02-18T11:14:44Z", "category": "Industrial", "city": "Sexiong", "orderRating": 1 },
    { "id": 863, "product_name": "Cheese - Goat", "amount": 312, "discount": "182.93", "cost": "371.18", "date": "2017-12-09T18:09:27Z", "category": "Garden", "city": "Brooklyn", "orderRating": 6 },
    { "id": 864, "product_name": "Pepper - Red Bell", "amount": 867, "discount": "189.08", "cost": "4968.71", "date": "2016-05-21T01:10:47Z", "category": "Computers", "city": "Yilongyong", "orderRating": 4 },
    { "id": 865, "product_name": "Sugar - Splenda Sweetener", "amount": 349, "discount": "114.08", "cost": "2124.52", "date": "2018-07-10T09:53:24Z", "category": "Shoes", "city": "Pisaras", "orderRating": 3 },
    { "id": 866, "product_name": "Wine - Red, Cooking", "amount": 783, "discount": "177.72", "cost": "4374.98", "date": "2016-05-20T07:25:44Z", "category": "Sports", "city": "Tmourghout", "orderRating": 3 },
    { "id": 867, "product_name": "Shiratamako - Rice Flour", "amount": 649, "discount": "123.09", "cost": "458.33", "date": "2016-08-27T05:32:13Z", "category": "Computers", "city": "Encañada", "orderRating": 3 },
    { "id": 868, "product_name": "Ice Cream - Chocolate", "amount": 349, "discount": "51.95", "cost": "786.27", "date": "2016-09-24T12:24:22Z", "category": "Music", "city": "Businovo", "orderRating": 6 },
    { "id": 869, "product_name": "Pepper - Gypsy Pepper", "amount": 613, "discount": "137.19", "cost": "4214.34", "date": "2020-07-22T18:31:58Z", "category": "Garden", "city": "Bal Chirāgh", "orderRating": 7 },
    { "id": 870, "product_name": "Longos - Assorted Sandwich", "amount": 335, "discount": "82.83", "cost": "2539.49", "date": "2020-05-14T02:11:40Z", "category": "Tools", "city": "Sainte-Agathe-des-Monts", "orderRating": 7 },
    { "id": 871, "product_name": "Flour - Rye", "amount": 61, "discount": "173.09", "cost": "1591.12", "date": "2020-08-04T16:32:41Z", "category": "Movies", "city": "Meziměstí", "orderRating": 4 },
    { "id": 872, "product_name": "Pasta - Cappellini, Dry", "amount": 810, "discount": "11.95", "cost": "4660.74", "date": "2019-08-08T03:32:48Z", "category": "Shoes", "city": "Nueva Esperanza", "orderRating": 2 },
    { "id": 873, "product_name": "Wine - German Riesling", "amount": 627, "discount": "100.68", "cost": "1311.18", "date": "2017-08-12T12:45:27Z", "category": "Electronics", "city": "Wujing", "orderRating": 3 },
    { "id": 874, "product_name": "Bok Choy - Baby", "amount": 396, "discount": "166.19", "cost": "558.17", "date": "2019-05-01T19:32:40Z", "category": "Baby", "city": "Puerto Asís", "orderRating": 4 },
    { "id": 875, "product_name": "Cornflakes", "amount": 108, "discount": "67.99", "cost": "3067.99", "date": "2018-09-26T06:43:47Z", "category": "Jewelery", "city": "Asempapak", "orderRating": 6 },
    { "id": 876, "product_name": "Rice - Jasmine Sented", "amount": 552, "discount": "82.91", "cost": "2500.07", "date": "2018-03-19T19:02:41Z", "category": "Music", "city": "Aimin", "orderRating": 2 },
    { "id": 877, "product_name": "Nestea - Ice Tea, Diet", "amount": 672, "discount": "134.80", "cost": "1037.86", "date": "2017-05-25T02:43:32Z", "category": "Books", "city": "Shatou", "orderRating": 2 },
    { "id": 878, "product_name": "Mushroom - Morels, Dry", "amount": 218, "discount": "161.73", "cost": "373.47", "date": "2020-05-08T11:23:30Z", "category": "Home", "city": "Itum-Kali", "orderRating": 5 },
    { "id": 879, "product_name": "Beans - Kidney, Red Dry", "amount": 116, "discount": "87.67", "cost": "3795.62", "date": "2016-04-02T21:04:07Z", "category": "Games", "city": "Ksawerów", "orderRating": 6 },
    { "id": 880, "product_name": "Spice - Montreal Steak Spice", "amount": 444, "discount": "7.24", "cost": "2905.54", "date": "2016-01-15T11:22:26Z", "category": "Automotive", "city": "Brisbane", "orderRating": 5 },
    { "id": 881, "product_name": "Garbage Bags - Clear", "amount": 291, "discount": "183.33", "cost": "2363.39", "date": "2016-06-23T23:33:00Z", "category": "Beauty", "city": "Wierzchosławice", "orderRating": 1 },
    { "id": 882, "product_name": "Butter Balls Salted", "amount": 811, "discount": "91.96", "cost": "4546.72", "date": "2017-05-18T07:10:21Z", "category": "Grocery", "city": "Margahayukencana", "orderRating": 3 },
    { "id": 883, "product_name": "Beets - Candy Cane, Organic", "amount": 883, "discount": "167.01", "cost": "2397.93", "date": "2015-11-05T00:57:52Z", "category": "Clothing", "city": "Rogoźnik", "orderRating": 3 },
    { "id": 884, "product_name": "Tuna - Canned, Flaked, Light", "amount": 630, "discount": "65.86", "cost": "3628.81", "date": "2016-05-28T14:47:19Z", "category": "Beauty", "city": "Strel'na", "orderRating": 4 },
    { "id": 885, "product_name": "Apple - Fuji", "amount": 797, "discount": "57.00", "cost": "4127.54", "date": "2016-09-01T18:37:52Z", "category": "Music", "city": "Virden", "orderRating": 7 },
    { "id": 886, "product_name": "Wasabi Paste", "amount": 796, "discount": "151.41", "cost": "205.89", "date": "2020-06-29T13:35:39Z", "category": "Movies", "city": "Moravský Beroun", "orderRating": 2 },
    { "id": 887, "product_name": "Bread - Italian Roll With Herbs", "amount": 826, "discount": "190.27", "cost": "411.22", "date": "2020-05-03T18:29:11Z", "category": "Home", "city": "Kratié", "orderRating": 2 },
    { "id": 888, "product_name": "Chicken - Bones", "amount": 147, "discount": "81.11", "cost": "4445.25", "date": "2020-02-22T23:18:22Z", "category": "Movies", "city": "Chrzanów", "orderRating": 6 },
    { "id": 889, "product_name": "Roe - Flying Fish", "amount": 459, "discount": "116.80", "cost": "1640.20", "date": "2020-01-16T12:47:19Z", "category": "Beauty", "city": "Irupi", "orderRating": 6 },
    { "id": 890, "product_name": "Shrimp - Baby, Warm Water", "amount": 530, "discount": "147.21", "cost": "2655.79", "date": "2020-07-04T11:40:16Z", "category": "Games", "city": "Staraya Stanitsa", "orderRating": 4 },
    { "id": 891, "product_name": "Asparagus - White, Fresh", "amount": 41, "discount": "36.26", "cost": "2904.56", "date": "2019-01-27T17:13:18Z", "category": "Clothing", "city": "Jablonec nad Nisou", "orderRating": 5 },
    { "id": 892, "product_name": "Paste - Black Olive", "amount": 134, "discount": "61.32", "cost": "3668.26", "date": "2020-03-15T19:46:50Z", "category": "Computers", "city": "Pandasan", "orderRating": 2 },
    { "id": 893, "product_name": "Rabbit - Whole", "amount": 898, "discount": "106.70", "cost": "989.48", "date": "2018-01-02T02:35:48Z", "category": "Baby", "city": "Juntas", "orderRating": 5 },
    { "id": 894, "product_name": "V8 Splash Strawberry Banana", "amount": 676, "discount": "119.35", "cost": "490.43", "date": "2018-12-06T13:57:34Z", "category": "Kids", "city": "Sölvesborg", "orderRating": 6 },
    { "id": 895, "product_name": "Truffle Shells - Semi - Sweet", "amount": 713, "discount": "162.30", "cost": "2947.53", "date": "2018-02-26T03:51:26Z", "category": "Health", "city": "Tanjung Timur", "orderRating": 4 },
    { "id": 896, "product_name": "Lettuce - Arugula", "amount": 890, "discount": "120.18", "cost": "1672.96", "date": "2018-05-04T04:48:11Z", "category": "Books", "city": "Sarakhs", "orderRating": 3 },
    { "id": 897, "product_name": "Onions - Cippolini", "amount": 206, "discount": "4.62", "cost": "3330.12", "date": "2016-02-14T05:35:42Z", "category": "Garden", "city": "Gjoçaj", "orderRating": 7 },
    { "id": 898, "product_name": "Tomatoes - Orange", "amount": 243, "discount": "78.80", "cost": "2509.08", "date": "2017-06-04T15:59:43Z", "category": "Computers", "city": "Uherce Mineralne", "orderRating": 1 },
    { "id": 899, "product_name": "Scallops - In Shell", "amount": 721, "discount": "55.19", "cost": "2633.69", "date": "2015-11-07T13:22:45Z", "category": "Baby", "city": "Rzhavki", "orderRating": 7 },
    { "id": 900, "product_name": "Cookie Dough - Double", "amount": 474, "discount": "60.63", "cost": "4297.02", "date": "2020-02-15T22:54:20Z", "category": "Clothing", "city": "Rio Claro", "orderRating": 4 },
    { "id": 901, "product_name": "Bar Mix - Lemon", "amount": 432, "discount": "6.37", "cost": "668.70", "date": "2017-06-25T20:23:53Z", "category": "Movies", "city": "Conception Bay South", "orderRating": 4 },
    { "id": 902, "product_name": "Sage - Rubbed", "amount": 217, "discount": "196.64", "cost": "1749.78", "date": "2019-12-24T22:46:28Z", "category": "Sports", "city": "Mirskoy", "orderRating": 3 },
    { "id": 903, "product_name": "Nut - Walnut, Chopped", "amount": 620, "discount": "149.52", "cost": "3807.25", "date": "2018-08-19T11:26:56Z", "category": "Beauty", "city": "Tarrafal de São Nicolau", "orderRating": 6 },
    { "id": 904, "product_name": "Cherries - Bing, Canned", "amount": 175, "discount": "113.99", "cost": "4784.49", "date": "2019-09-02T18:22:22Z", "category": "Grocery", "city": "Радишани", "orderRating": 5 },
    { "id": 905, "product_name": "Cheese - Perron Cheddar", "amount": 511, "discount": "100.99", "cost": "3733.62", "date": "2018-06-01T13:02:38Z", "category": "Baby", "city": "Santa Teresa", "orderRating": 5 },
    { "id": 906, "product_name": "Pastry - Butterscotch Baked", "amount": 673, "discount": "49.66", "cost": "1777.69", "date": "2019-11-17T09:45:59Z", "category": "Health", "city": "Bogorame", "orderRating": 3 },
    { "id": 907, "product_name": "Icecream - Dstk Strw Chseck", "amount": 683, "discount": "147.20", "cost": "4111.23", "date": "2017-04-02T23:45:08Z", "category": "Beauty", "city": "Gondar", "orderRating": 5 },
    { "id": 908, "product_name": "Food Colouring - Blue", "amount": 217, "discount": "81.50", "cost": "191.74", "date": "2019-10-15T08:37:32Z", "category": "Jewelery", "city": "Sunagawa", "orderRating": 4 },
    { "id": 909, "product_name": "Sauce - Hollandaise", "amount": 724, "discount": "170.63", "cost": "275.17", "date": "2016-05-16T22:23:03Z", "category": "Outdoors", "city": "Caper", "orderRating": 6 },
    { "id": 910, "product_name": "Lamb Tenderloin Nz Fr", "amount": 479, "discount": "143.37", "cost": "2581.08", "date": "2017-03-17T22:44:20Z", "category": "Jewelery", "city": "Bom Despacho", "orderRating": 6 },
    { "id": 911, "product_name": "Tofu - Soft", "amount": 98, "discount": "63.61", "cost": "3135.99", "date": "2016-02-11T21:32:12Z", "category": "Baby", "city": "Laoxialu", "orderRating": 3 },
    { "id": 912, "product_name": "Tilapia - Fillets", "amount": 271, "discount": "144.50", "cost": "3609.97", "date": "2016-09-13T06:50:27Z", "category": "Toys", "city": "Al Matlīn", "orderRating": 5 },
    { "id": 913, "product_name": "Juice - Orange 1.89l", "amount": 717, "discount": "178.94", "cost": "2923.80", "date": "2018-03-24T02:04:29Z", "category": "Tools", "city": "Pilar do Sul", "orderRating": 5 },
    { "id": 914, "product_name": "Broom And Brush Rack Black", "amount": 241, "discount": "27.39", "cost": "2423.80", "date": "2018-10-01T06:10:20Z", "category": "Books", "city": "Semampir", "orderRating": 7 },
    { "id": 915, "product_name": "Potatoes - Peeled", "amount": 682, "discount": "63.66", "cost": "596.56", "date": "2017-05-28T08:14:41Z", "category": "Grocery", "city": "Yili", "orderRating": 2 },
    { "id": 916, "product_name": "Chilli Paste, Hot Sambal Oelek", "amount": 941, "discount": "38.98", "cost": "4085.11", "date": "2017-12-02T03:08:45Z", "category": "Outdoors", "city": "Alingsås", "orderRating": 1 },
    { "id": 917, "product_name": "Muffin Hinge - 211n", "amount": 331, "discount": "20.73", "cost": "2886.73", "date": "2020-04-28T00:14:56Z", "category": "Games", "city": "Varberg", "orderRating": 5 },
    { "id": 918, "product_name": "Star Fruit", "amount": 566, "discount": "8.24", "cost": "40.35", "date": "2016-05-25T22:17:51Z", "category": "Health", "city": "Sandyford", "orderRating": 3 },
    { "id": 919, "product_name": "Beef Dry Aged Tenderloin Aaa", "amount": 156, "discount": "33.85", "cost": "1015.48", "date": "2018-02-20T04:36:43Z", "category": "Baby", "city": "Krutja e Poshtme", "orderRating": 1 },
    { "id": 920, "product_name": "Milk - 2%", "amount": 35, "discount": "75.72", "cost": "129.44", "date": "2017-11-25T19:27:20Z", "category": "Movies", "city": "Pangrumasan", "orderRating": 6 },
    { "id": 921, "product_name": "Mushroom - Chantrelle, Fresh", "amount": 101, "discount": "82.54", "cost": "334.44", "date": "2017-06-21T15:46:05Z", "category": "Automotive", "city": "Uyskoye", "orderRating": 5 },
    { "id": 922, "product_name": "Tea - English Breakfast", "amount": 926, "discount": "135.83", "cost": "3383.32", "date": "2018-10-05T23:13:01Z", "category": "Baby", "city": "Leles", "orderRating": 2 },
    { "id": 923, "product_name": "Nestea - Iced Tea", "amount": 126, "discount": "91.39", "cost": "3868.83", "date": "2020-04-28T07:42:24Z", "category": "Books", "city": "Gaojimiao", "orderRating": 7 },
    { "id": 924, "product_name": "Pastry - Key Limepoppy Seed Tea", "amount": 421, "discount": "0.30", "cost": "2760.49", "date": "2018-03-31T00:41:55Z", "category": "Grocery", "city": "Dragash", "orderRating": 1 },
    { "id": 925, "product_name": "Paper Towel Touchless", "amount": 138, "discount": "191.14", "cost": "3189.62", "date": "2018-08-16T00:25:20Z", "category": "Beauty", "city": "Rucava", "orderRating": 4 },
    { "id": 926, "product_name": "Cheese - Oka", "amount": 631, "discount": "27.35", "cost": "4276.10", "date": "2018-07-23T09:39:13Z", "category": "Music", "city": "Gurinai", "orderRating": 6 },
    { "id": 927, "product_name": "Wine - Wyndham Estate Bin 777", "amount": 30, "discount": "84.15", "cost": "2532.57", "date": "2016-07-05T22:43:12Z", "category": "Tools", "city": "Ganping", "orderRating": 6 },
    { "id": 928, "product_name": "Pate Pans Yellow", "amount": 459, "discount": "146.73", "cost": "2111.02", "date": "2017-10-11T19:27:34Z", "category": "Shoes", "city": "Umbulan", "orderRating": 3 },
    { "id": 929, "product_name": "Wine - Magnotta - Belpaese", "amount": 255, "discount": "60.78", "cost": "2689.60", "date": "2018-04-25T17:55:17Z", "category": "Shoes", "city": "Linfen", "orderRating": 5 },
    { "id": 930, "product_name": "Coffee - Egg Nog Capuccino", "amount": 236, "discount": "63.15", "cost": "3329.53", "date": "2015-11-08T03:47:57Z", "category": "Clothing", "city": "Volokolamsk", "orderRating": 5 },
    { "id": 931, "product_name": "Danishes - Mini Cheese", "amount": 1, "discount": "91.76", "cost": "12.05", "date": "2019-08-01T08:42:02Z", "category": "Sports", "city": "Carodok", "orderRating": 5 },
    { "id": 932, "product_name": "Sauce - Sesame Thai Dressing", "amount": 737, "discount": "53.94", "cost": "4602.66", "date": "2016-07-29T14:45:16Z", "category": "Toys", "city": "Mehona", "orderRating": 7 },
    { "id": 933, "product_name": "Yams", "amount": 397, "discount": "94.97", "cost": "4592.80", "date": "2018-06-02T12:04:54Z", "category": "Kids", "city": "Gualán", "orderRating": 6 },
    { "id": 934, "product_name": "Mini - Vol Au Vents", "amount": 891, "discount": "192.31", "cost": "2753.02", "date": "2018-12-12T20:22:36Z", "category": "Jewelery", "city": "Namangan Shahri", "orderRating": 7 },
    { "id": 935, "product_name": "Stock - Beef, Brown", "amount": 491, "discount": "170.21", "cost": "4791.72", "date": "2020-03-26T02:43:43Z", "category": "Clothing", "city": "Nakamura", "orderRating": 4 },
    { "id": 936, "product_name": "Pastry - Apple Large", "amount": 698, "discount": "184.20", "cost": "1892.95", "date": "2017-08-18T05:27:57Z", "category": "Jewelery", "city": "Penisihan", "orderRating": 1 },
    { "id": 937, "product_name": "Nut - Pistachio, Shelled", "amount": 267, "discount": "80.16", "cost": "4440.47", "date": "2016-01-21T15:04:02Z", "category": "Kids", "city": "Giporlos", "orderRating": 4 },
    { "id": 938, "product_name": "Onions - Green", "amount": 842, "discount": "14.51", "cost": "1419.00", "date": "2020-08-05T18:25:14Z", "category": "Games", "city": "Egbe", "orderRating": 2 },
    { "id": 939, "product_name": "Table Cloth 54x72 Colour", "amount": 616, "discount": "153.09", "cost": "4164.44", "date": "2016-07-31T10:57:44Z", "category": "Health", "city": "Krasnystaw", "orderRating": 2 },
    { "id": 940, "product_name": "Pork Loin Bine - In Frenched", "amount": 390, "discount": "56.97", "cost": "3825.18", "date": "2016-03-21T02:47:31Z", "category": "Beauty", "city": "Chaumont", "orderRating": 3 },
    { "id": 941, "product_name": "Wine - Zonnebloem Pinotage", "amount": 39, "discount": "29.56", "cost": "4397.62", "date": "2019-05-27T12:35:55Z", "category": "Shoes", "city": "Bayramaly", "orderRating": 1 },
    { "id": 942, "product_name": "Mushroom - Lg - Cello", "amount": 147, "discount": "159.50", "cost": "1441.58", "date": "2019-01-31T04:50:34Z", "category": "Jewelery", "city": "Putou", "orderRating": 2 },
    { "id": 943, "product_name": "Gin - Gilbeys London, Dry", "amount": 38, "discount": "153.68", "cost": "3259.22", "date": "2016-09-29T18:05:22Z", "category": "Industrial", "city": "Cholet", "orderRating": 2 },
    { "id": 944, "product_name": "Chinese Foods - Plain Fried Rice", "amount": 992, "discount": "93.75", "cost": "3084.77", "date": "2019-04-12T08:34:34Z", "category": "Books", "city": "Brody", "orderRating": 3 },
    { "id": 945, "product_name": "Lobster - Base", "amount": 511, "discount": "194.64", "cost": "3720.88", "date": "2019-12-09T03:34:36Z", "category": "Home", "city": "Atolina", "orderRating": 7 },
    { "id": 946, "product_name": "Pasta - Fett Alfredo, Single Serve", "amount": 904, "discount": "31.40", "cost": "1767.65", "date": "2019-07-07T06:49:43Z", "category": "Beauty", "city": "Dayan", "orderRating": 6 },
    { "id": 947, "product_name": "Chip - Potato Dill Pickle", "amount": 902, "discount": "50.02", "cost": "2380.08", "date": "2016-10-01T10:31:50Z", "category": "Music", "city": "Nova Petrópolis", "orderRating": 7 },
    { "id": 948, "product_name": "Beef Tenderloin Aaa", "amount": 390, "discount": "91.31", "cost": "625.10", "date": "2019-06-14T11:11:55Z", "category": "Kids", "city": "Qingfeng", "orderRating": 5 },
    { "id": 949, "product_name": "Worcestershire Sauce", "amount": 802, "discount": "85.80", "cost": "3427.45", "date": "2018-03-05T13:03:20Z", "category": "Home", "city": "Kamensk-Shakhtinskiy", "orderRating": 4 },
    { "id": 950, "product_name": "Dr. Pepper - 355ml", "amount": 261, "discount": "36.30", "cost": "2867.40", "date": "2016-02-22T15:53:01Z", "category": "Industrial", "city": "Konstancin-Jeziorna", "orderRating": 3 },
    { "id": 951, "product_name": "Chocolate Bar - Oh Henry", "amount": 739, "discount": "12.10", "cost": "4377.21", "date": "2016-06-11T07:02:08Z", "category": "Home", "city": "Pasto", "orderRating": 4 },
    { "id": 952, "product_name": "Cabbage - Savoy", "amount": 131, "discount": "63.49", "cost": "619.91", "date": "2017-07-04T07:50:02Z", "category": "Garden", "city": "Bledzew", "orderRating": 6 },
    { "id": 953, "product_name": "Meldea Green Tea Liquor", "amount": 316, "discount": "160.03", "cost": "1601.84", "date": "2019-01-21T08:58:58Z", "category": "Industrial", "city": "Banjar Bau Kawan", "orderRating": 6 },
    { "id": 954, "product_name": "Cheese - Perron Cheddar", "amount": 595, "discount": "102.00", "cost": "673.11", "date": "2015-11-03T17:23:00Z", "category": "Music", "city": "Seredyna-Buda", "orderRating": 2 },
    { "id": 955, "product_name": "Veal - Leg, Provimi - 50 Lb Max", "amount": 736, "discount": "84.31", "cost": "3657.23", "date": "2016-04-22T23:53:28Z", "category": "Tools", "city": "Paucar", "orderRating": 7 },
    { "id": 956, "product_name": "Beer - Steamwhistle", "amount": 143, "discount": "182.87", "cost": "4130.85", "date": "2017-05-20T01:44:17Z", "category": "Books", "city": "Nancy", "orderRating": 4 },
    { "id": 957, "product_name": "Beef - Rouladin, Sliced", "amount": 863, "discount": "54.61", "cost": "4448.68", "date": "2019-04-12T23:47:14Z", "category": "Games", "city": "Banjarsari", "orderRating": 1 },
    { "id": 958, "product_name": "Chicken - Diced, Cooked", "amount": 989, "discount": "73.84", "cost": "4849.27", "date": "2018-12-08T18:07:59Z", "category": "Electronics", "city": "Vilca", "orderRating": 4 },
    { "id": 959, "product_name": "Spring Roll Veg Mini", "amount": 149, "discount": "76.02", "cost": "335.07", "date": "2015-10-14T02:59:40Z", "category": "Music", "city": "Diré", "orderRating": 2 },
    { "id": 960, "product_name": "Iced Tea - Lemon, 460 Ml", "amount": 828, "discount": "2.26", "cost": "1091.04", "date": "2017-09-30T00:01:32Z", "category": "Shoes", "city": "Łobżenica", "orderRating": 4 },
    { "id": 961, "product_name": "Chicken - Whole", "amount": 84, "discount": "113.94", "cost": "4047.66", "date": "2017-02-04T18:28:05Z", "category": "Garden", "city": "Jilin", "orderRating": 6 },
    { "id": 962, "product_name": "Wine - Gato Negro Cabernet", "amount": 958, "discount": "27.35", "cost": "4708.77", "date": "2016-09-01T01:39:07Z", "category": "Movies", "city": "Palena", "orderRating": 4 },
    { "id": 963, "product_name": "Pork - Smoked Back Bacon", "amount": 453, "discount": "163.51", "cost": "4872.61", "date": "2017-06-12T17:42:02Z", "category": "Home", "city": "Buriram", "orderRating": 5 },
    { "id": 964, "product_name": "Uniform Linen Charge", "amount": 830, "discount": "53.07", "cost": "1635.27", "date": "2018-06-15T22:48:12Z", "category": "Books", "city": "Pasirmadang", "orderRating": 2 },
    { "id": 965, "product_name": "Beef - Eye Of Round", "amount": 680, "discount": "178.13", "cost": "4817.20", "date": "2016-07-14T12:37:04Z", "category": "Kids", "city": "Lyon", "orderRating": 5 },
    { "id": 966, "product_name": "Sugar - Fine", "amount": 283, "discount": "197.05", "cost": "4940.86", "date": "2018-08-27T20:59:23Z", "category": "Shoes", "city": "Złotów", "orderRating": 2 },
    { "id": 967, "product_name": "Vinegar - Cider", "amount": 27, "discount": "85.71", "cost": "3262.66", "date": "2016-02-10T05:45:34Z", "category": "Books", "city": "Čejkovice", "orderRating": 7 },
    { "id": 968, "product_name": "Towels - Paper / Kraft", "amount": 578, "discount": "0.14", "cost": "1972.06", "date": "2017-04-28T16:45:48Z", "category": "Industrial", "city": "Suileng", "orderRating": 4 },
    { "id": 969, "product_name": "Gooseberry", "amount": 489, "discount": "6.21", "cost": "4981.89", "date": "2018-05-21T01:11:54Z", "category": "Grocery", "city": "Huarong Chengguanzhen", "orderRating": 6 },
    { "id": 970, "product_name": "Oil - Shortening,liqud, Fry", "amount": 876, "discount": "124.93", "cost": "2083.90", "date": "2016-08-06T20:00:56Z", "category": "Books", "city": "Jargalant", "orderRating": 5 },
    { "id": 971, "product_name": "Longos - Assorted Sandwich", "amount": 161, "discount": "99.53", "cost": "860.47", "date": "2017-07-11T05:12:02Z", "category": "Jewelery", "city": "Beiwenquan", "orderRating": 7 },
    { "id": 972, "product_name": "Pasta - Fettuccine, Egg, Fresh", "amount": 150, "discount": "186.49", "cost": "291.74", "date": "2019-09-26T04:54:14Z", "category": "Baby", "city": "Malangabang", "orderRating": 7 },
    { "id": 973, "product_name": "Mcguinness - Blue Curacao", "amount": 108, "discount": "137.76", "cost": "4903.15", "date": "2017-08-29T22:38:23Z", "category": "Clothing", "city": "Paobokol", "orderRating": 2 },
    { "id": 974, "product_name": "Wine - Ruffino Chianti", "amount": 536, "discount": "98.96", "cost": "3808.89", "date": "2019-01-24T10:52:38Z", "category": "Tools", "city": "Yuyue", "orderRating": 4 },
    { "id": 975, "product_name": "Longos - Greek Salad", "amount": 697, "discount": "9.23", "cost": "4214.59", "date": "2015-10-22T23:56:39Z", "category": "Sports", "city": "Mönhbulag", "orderRating": 7 },
    { "id": 976, "product_name": "Cactus Pads", "amount": 237, "discount": "76.85", "cost": "748.32", "date": "2015-11-29T05:55:08Z", "category": "Outdoors", "city": "Jindřichův Hradec", "orderRating": 6 },
    { "id": 977, "product_name": "Coffee - Decaffeinato Coffee", "amount": 414, "discount": "84.19", "cost": "3608.93", "date": "2017-02-16T09:12:47Z", "category": "Toys", "city": "Thaba Nchu", "orderRating": 1 },
    { "id": 978, "product_name": "Beets - Mini Golden", "amount": 137, "discount": "37.14", "cost": "3230.10", "date": "2020-02-04T03:36:17Z", "category": "Baby", "city": "Bardiyā", "orderRating": 7 },
    { "id": 979, "product_name": "Oranges - Navel, 72", "amount": 90, "discount": "40.03", "cost": "1909.95", "date": "2019-02-27T05:18:53Z", "category": "Music", "city": "Xijiadian", "orderRating": 3 },
    { "id": 980, "product_name": "Olives - Nicoise", "amount": 640, "discount": "72.76", "cost": "1674.94", "date": "2020-07-16T12:39:16Z", "category": "Books", "city": "Blimbing", "orderRating": 1 },
    { "id": 981, "product_name": "Miso Paste White", "amount": 997, "discount": "132.54", "cost": "2994.22", "date": "2016-10-16T09:45:16Z", "category": "Health", "city": "Muroto-misakicho", "orderRating": 1 },
    { "id": 982, "product_name": "Cornflakes", "amount": 740, "discount": "56.46", "cost": "2844.87", "date": "2019-09-02T17:21:17Z", "category": "Books", "city": "Bom Despacho", "orderRating": 3 },
    { "id": 983, "product_name": "Ice Cream - Vanilla", "amount": 868, "discount": "103.91", "cost": "712.88", "date": "2017-10-30T01:56:28Z", "category": "Shoes", "city": "Uujim", "orderRating": 4 },
    { "id": 984, "product_name": "Veal - Nuckle", "amount": 385, "discount": "38.88", "cost": "528.11", "date": "2019-12-29T15:22:58Z", "category": "Home", "city": "Pindangan Centro", "orderRating": 3 },
    { "id": 985, "product_name": "Beer - Guiness", "amount": 819, "discount": "197.84", "cost": "1108.47", "date": "2020-02-28T23:28:03Z", "category": "Automotive", "city": "São João do Campo", "orderRating": 5 },
    { "id": 986, "product_name": "Juice - Orange, 341 Ml", "amount": 144, "discount": "91.30", "cost": "3134.49", "date": "2016-09-16T11:58:23Z", "category": "Garden", "city": "Gentilly", "orderRating": 6 },
    { "id": 987, "product_name": "Wine - Remy Pannier Rose", "amount": 774, "discount": "135.32", "cost": "542.94", "date": "2019-11-06T23:57:49Z", "category": "Books", "city": "Laozhuang", "orderRating": 4 },
    { "id": 988, "product_name": "Mushroom - Shitake, Dry", "amount": 962, "discount": "4.71", "cost": "2088.55", "date": "2018-04-01T04:50:04Z", "category": "Outdoors", "city": "Agdangan", "orderRating": 2 },
    { "id": 989, "product_name": "Icecream - Dstk Strw Chseck", "amount": 858, "discount": "172.77", "cost": "4654.12", "date": "2018-12-16T02:55:20Z", "category": "Garden", "city": "Lodwar", "orderRating": 5 },
    { "id": 990, "product_name": "Vinegar - Sherry", "amount": 277, "discount": "152.97", "cost": "1473.94", "date": "2016-09-14T00:45:31Z", "category": "Books", "city": "Sośno", "orderRating": 5 },
    { "id": 991, "product_name": "Cabbage Roll", "amount": 82, "discount": "175.90", "cost": "1398.87", "date": "2016-06-11T18:45:47Z", "category": "Baby", "city": "Bang Kaeo", "orderRating": 4 },
    { "id": 992, "product_name": "Peas - Frozen", "amount": 755, "discount": "33.49", "cost": "353.85", "date": "2020-02-20T23:53:53Z", "category": "Garden", "city": "Yongfeng", "orderRating": 5 },
    { "id": 993, "product_name": "Glycerine", "amount": 446, "discount": "6.71", "cost": "1084.50", "date": "2020-05-09T14:06:10Z", "category": "Computers", "city": "Pasembon", "orderRating": 7 },
    { "id": 994, "product_name": "Carbonated Water - Cherry", "amount": 912, "discount": "10.68", "cost": "3878.29", "date": "2018-01-14T02:37:52Z", "category": "Baby", "city": "Taganskiy", "orderRating": 3 },
    { "id": 995, "product_name": "Shrimp - Baby, Cold Water", "amount": 333, "discount": "126.56", "cost": "3861.68", "date": "2018-06-18T23:13:43Z", "category": "Garden", "city": "Bayan-Ovoo", "orderRating": 3 },
    { "id": 996, "product_name": "Hog / Sausage Casing - Pork", "amount": 856, "discount": "133.21", "cost": "2951.26", "date": "2016-11-07T05:43:06Z", "category": "Sports", "city": "Gaopeng", "orderRating": 6 },
    { "id": 997, "product_name": "Plums - Red", "amount": 460, "discount": "6.80", "cost": "450.86", "date": "2016-12-05T09:54:00Z", "category": "Beauty", "city": "Cipanjang", "orderRating": 7 },
    { "id": 998, "product_name": "Pie Box - Cello Window 2.5", "amount": 934, "discount": "20.28", "cost": "2038.09", "date": "2019-04-11T07:49:18Z", "category": "Home", "city": "Trois-Rivières", "orderRating": 2 },
    { "id": 999, "product_name": "Sansho Powder", "amount": 93, "discount": "97.34", "cost": "1962.94", "date": "2017-01-19T05:21:57Z", "category": "Industrial", "city": "Xuanzhou", "orderRating": 2 },
    { "id": 1000, "product_name": "Salmon - Smoked, Sliced", "amount": 77, "discount": "110.14", "cost": "3249.44", "date": "2018-03-06T14:24:25Z", "category": "Music", "city": "Itaperuna", "orderRating": 1 }];


/***/ }),

/***/ "./src/app/modules/admin-store/pages/reports/sub-reports/units-sold/units-sold.component.scss":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/admin-store/pages/reports/sub-reports/units-sold/units-sold.component.scss ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4tc3RvcmUvcGFnZXMvcmVwb3J0cy9zdWItcmVwb3J0cy91bml0cy1zb2xkL3VuaXRzLXNvbGQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/admin-store/pages/reports/sub-reports/units-sold/units-sold.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/admin-store/pages/reports/sub-reports/units-sold/units-sold.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: UnitsSoldComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnitsSoldComponent", function() { return UnitsSoldComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var src_app_core_modules_services_reports_report_state_report_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core-modules/services/reports/report-state/report-state.service */ "./src/app/core-modules/services/reports/report-state/report-state.service.ts");
/* harmony import */ var src_app_core_modules_services_reports_report_facade_report_facade_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core-modules/services/reports/report-facade/report-facade.service */ "./src/app/core-modules/services/reports/report-facade/report-facade.service.ts");
/* harmony import */ var _MOCK_DATA__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MOCK_DATA */ "./src/app/modules/admin-store/pages/reports/sub-reports/units-sold/MOCK_DATA.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");







var UnitsSoldComponent = /** @class */ (function () {
    function UnitsSoldComponent(actionSheetController, datepipe, reportState, reportFacade) {
        this.actionSheetController = actionSheetController;
        this.datepipe = datepipe;
        this.reportState = reportState;
        this.reportFacade = reportFacade;
        this.range = 7;
        this.today = new Date();
        this.lineOutPudata = [];
        this.lineOutlabel = [];
        this.currentFilter = 'Days';
        Object.assign(this, { Data: _MOCK_DATA__WEBPACK_IMPORTED_MODULE_4__["Data"] });
    }
    /* data draft
    
        product id
        product name
        product category
        amount
        price
        discount
        category
        data-time*/
    UnitsSoldComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataDayFilter();
        /*for (let i = 0 ; i < Data.length; i++) {
         let saleDate = new Date(Data[i].date)
        if(this.daysDifference(saleDate,startDate)< this.range ){
          console.log(Data[i])
        }
        }*/
        this.reportState.getReportStatus().subscribe(function (res) {
            _this.report_status = res;
        }, function (err) {
            console.log(err);
        });
    };
    /*external fuction from here*/
    UnitsSoldComponent.prototype.filterBydays = function (today, startDate) {
        if (this.daysDifference(today, startDate) < this.range) {
            return true;
        }
    };
    UnitsSoldComponent.prototype.daysDifference = function (startDate, endDate) {
        return Math.floor((Date.UTC(startDate.getFullYear(), startDate.getMonth(), startDate.getDate()) - Date.UTC(endDate.getFullYear(), endDate.getMonth(), endDate.getDate())) / (1000 * 60 * 60 * 24));
    };
    UnitsSoldComponent.prototype.monthsDifference = function (startDate, endDate) {
        var startDateMonth = startDate.getUTCMonth();
        var startDateYear = startDate.getFullYear();
        var firstOfstartDate = new Date(startDateYear, startDateMonth, 1);
        var endDateMonth = endDate.getUTCMonth();
        var endDateYear = endDate.getFullYear();
        var lastOfEndDate = new Date(endDateYear, endDateMonth + 1, 0);
        return Math.floor((Date.UTC(firstOfstartDate.getFullYear(), firstOfstartDate.getMonth(), firstOfstartDate.getDate()) - Date.UTC(lastOfEndDate.getFullYear(), lastOfEndDate.getMonth(), lastOfEndDate.getDate())) / (1000 * 60 * 60 * 24));
    };
    /*this function filteres data by day*/
    UnitsSoldComponent.prototype.dataDayFilter = function () {
        var _this = this;
        this.lineOutPudata.splice(0, this.lineOutPudata.length); /*this clears the output data */
        this.lineOutlabel.splice(0, this.lineOutlabel.length); /*this clears the output data */
        var startDate = new Date();
        /*let day  = today.getDate();
        let year = today.getUTCMonth();
        let month= today.getFullYear();*/
        startDate.setDate(startDate.getDate() - this.range);
        var startDateHolder = new Date();
        startDateHolder.setDate(this.today.getDate() - this.range);
        /*from*/
        if (this.currentFilter == 'Days') {
            this.startDateO = this.datepipe.transform(startDate, 'MMM d,y');
            /*console.log(start.toString())*/
            /*console.log(Data.filter(word => word.category == "Jewelery"))*/
            /*console.log(this.daysDifference(today,startDate));*/
            this.filtered = _MOCK_DATA__WEBPACK_IMPORTED_MODULE_4__["Data"].filter(function (p) {
                var saleDate = new Date(p.date);
                if (_this.daysDifference(saleDate, startDate) < _this.range) {
                    return true;
                }
            });
            /** data set for pie chart*/
            var groupBy = function (xs, key) {
                return xs.reduce(function (rv, x) {
                    (rv[x[key]] = rv[x[key]] || []).push(x);
                    return rv;
                }, {});
            };
            var soldCategoryData = groupBy(this.filtered, "date");
            var soldCategoryDatakeys = Object.keys(soldCategoryData); /*this gets the keys from soldCategoryData*/
            console.log(soldCategoryData);
            var _loop_1 = function (i) {
                var dateOfrange = new Date();
                dateOfrange.setDate(this_1.today.getDate() - i);
                /* this sets start date based on range*/
                var dateOfrangeLatest = this_1.datepipe.transform(dateOfrange, 'MMM d');
                var dayOfrange = dateOfrange.getDate();
                var monthOfrange = dateOfrange.getUTCMonth();
                var yearOfrange = dateOfrange.getFullYear();
                var second = this_1.filtered.filter(function (z) {
                    var pDate = new Date(z.date);
                    if (_this.daysDifference(pDate, dateOfrange) == 0) {
                        return true;
                    }
                });
                total = 0;
                for (var i_1 = 0; i_1 < second.length; i_1++) {
                    total = total + second[i_1].amount;
                }
                ;
                this_1.lineOutPudata.push(total);
                this_1.lineOutlabel.push(dateOfrangeLatest);
            };
            var this_1 = this, total;
            /****** DAY DATA SET line Graph***/
            for (var i = this.range; i > -1; i--) {
                _loop_1(i);
            }
            /*assign to line data set*/
            var objLineData = {};
            objLineData["data"] = this.lineOutPudata;
            objLineData["label"] = "Total Unit sold/day";
            this.lineChartDataInput = [];
            this.lineChartDataInput.push(objLineData);
            /*assign to line labels */
            this.lineChartLabelInput = this.lineOutlabel;
        }
        /* filter by months */
        if (this.currentFilter == 'Months') {
            this.startDateO = this.datepipe.transform(startDate, 'MMM,y');
            this.filtered = _MOCK_DATA__WEBPACK_IMPORTED_MODULE_4__["Data"].filter(function (p) {
                var saleDate = new Date(p.date);
                if ((_this.monthsDifference(startDate, saleDate) / 31) < (_this.range)) {
                    /*hope that 31 works :-) */
                    return true;
                }
            });
            var _loop_2 = function (i) {
                var dateOfrange = new Date();
                dateOfrange.setMonth(this_2.today.getUTCMonth() - i);
                /* this sets start date based on range*/
                var dateOfrangeLatest = this_2.datepipe.transform(dateOfrange, 'MMM,y');
                console.log(dateOfrangeLatest);
                var dayOfrange = dateOfrange.getDate();
                var monthOfrange = dateOfrange.getUTCMonth();
                var yearOfrange = dateOfrange.getFullYear();
                var second = this_2.filtered.filter(function (z) {
                    var pDate = new Date(z.date);
                    var pDateMonth = pDate.getUTCMonth();
                    var pDateYear = pDate.getFullYear();
                    if (pDateMonth == monthOfrange && pDateYear == yearOfrange) {
                        return true;
                    }
                });
                total = 0;
                for (var i_2 = 0; i_2 < second.length; i_2++) {
                    total = total + second[i_2].amount;
                }
                ;
                this_2.lineOutPudata.push(total);
                this_2.lineOutlabel.push(dateOfrangeLatest);
            };
            var this_2 = this, total;
            for (var i = this.range; i > -1; i--) {
                _loop_2(i);
            }
        }
        /*this is the annual filter*/
        if (this.currentFilter == 'Years') {
            this.startDateO = this.today.getFullYear() - this.range;
            console.log(this.startDateO);
            this.filtered = _MOCK_DATA__WEBPACK_IMPORTED_MODULE_4__["Data"].filter(function (p) {
                var saleDate = new Date(p.date);
                var saleDateYear = saleDate.getFullYear();
                var endDateYear = _this.today.getFullYear();
                var startDateYear = endDateYear - _this.range;
                if (saleDateYear < endDateYear && saleDateYear > startDateYear) {
                    return true;
                }
            });
            var _loop_3 = function (i) {
                var dateOfrange = new Date();
                dateOfrange.setFullYear(this_3.today.getFullYear() - i);
                /* this sets start date based on range*/
                var dateOfrangeLatest = this_3.datepipe.transform(dateOfrange, 'y');
                var yearOfrange = dateOfrange.getFullYear();
                var second = this_3.filtered.filter(function (z) {
                    var pDate = new Date(z.date);
                    var pDateYear = pDate.getFullYear();
                    if (pDateYear == yearOfrange) {
                        return true;
                    }
                });
                total = 0;
                for (var i_3 = 0; i_3 < second.length; i_3++) {
                    total = total + second[i_3].amount;
                }
                ;
                this_3.lineOutPudata.push(total);
                this_3.lineOutlabel.push(dateOfrangeLatest);
            };
            var this_3 = this, total;
            for (var i = this.range; i > -1; i--) {
                _loop_3(i);
            }
        }
    };
    /****filter Action *****/
    UnitsSoldComponent.prototype.presentActionSheet = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetController.create({
                            header: 'Albums',
                            cssClass: 'my-custom-class',
                            buttons: [{
                                    text: 'Days',
                                    handler: function () {
                                        _this.currentFilter = "Days";
                                        _this.dataDayFilter();
                                    }
                                }, {
                                    text: 'Month',
                                    handler: function () {
                                        _this.currentFilter = "Months";
                                        _this.dataDayFilter();
                                    }
                                }, {
                                    text: 'Annual',
                                    handler: function () {
                                        _this.currentFilter = "Years";
                                        _this.dataDayFilter();
                                    }
                                },
                                {
                                    text: 'Cancel',
                                    icon: 'close',
                                    role: 'cancel',
                                    handler: function () {
                                        console.log('Cancel clicked');
                                    }
                                }]
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
    UnitsSoldComponent.prototype.rangeChange = function (event) {
        this.range = event.detail.value;
        console.log(this.range);
        this.dataDayFilter();
    };
    UnitsSoldComponent.prototype.startDateChange = function (event) {
        this.today = new Date(event.detail.value);
        this.dataDayFilter();
    };
    UnitsSoldComponent.prototype.segmentChanged = function (event) {
    };
    UnitsSoldComponent.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ActionSheetController"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"] },
        { type: src_app_core_modules_services_reports_report_state_report_state_service__WEBPACK_IMPORTED_MODULE_2__["ReportStateService"] },
        { type: src_app_core_modules_services_reports_report_facade_report_facade_service__WEBPACK_IMPORTED_MODULE_3__["ReportFacadeService"] }
    ]; };
    UnitsSoldComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-units-sold',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./units-sold.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin-store/pages/reports/sub-reports/units-sold/units-sold.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./units-sold.component.scss */ "./src/app/modules/admin-store/pages/reports/sub-reports/units-sold/units-sold.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ActionSheetController"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"], src_app_core_modules_services_reports_report_state_report_state_service__WEBPACK_IMPORTED_MODULE_2__["ReportStateService"], src_app_core_modules_services_reports_report_facade_report_facade_service__WEBPACK_IMPORTED_MODULE_3__["ReportFacadeService"]])
    ], UnitsSoldComponent);
    return UnitsSoldComponent;
}());



/***/ })

}]);
//# sourceMappingURL=src-app-modules-admin-store-pages-reports-reports-module.js.map