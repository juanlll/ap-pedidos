"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var gradient_common_1 = require("./gradient-common");
var utils_1 = require("tns-core-modules/utils/utils");
var LINEAR_GRADIENT = 0;
var Gradient = (function (_super) {
    __extends(Gradient, _super);
    function Gradient() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Gradient.prototype.createNativeView = function () {
        this._android = new org.nativescript.widgets.StackLayout(this._context);
        this._backgroundDrawable = new android.graphics.drawable.GradientDrawable();
        this._android.setBackgroundDrawable(this._backgroundDrawable);
        return this._android;
    };
    Gradient.prototype.updateBorderRadius = function (radius) {
        if (radius) {
            this._backgroundDrawable.setCornerRadius(radius * utils_1.layout.getDisplayDensity());
        }
    };
    Gradient.prototype.updateColors = function (colors) {
        if (colors && colors.length >= 2 && this._android) {
            var _androidColors = [];
            for (var _i = 0, colors_1 = colors; _i < colors_1.length; _i++) {
                var _color = colors_1[_i];
                _androidColors.push(_color.android);
            }
            this._backgroundDrawable.setGradientType(LINEAR_GRADIENT);
            this._backgroundDrawable.setColors(_androidColors);
        }
    };
    Gradient.prototype.updateDirection = function (direction) {
        if (direction) {
            this._backgroundDrawable.setOrientation(Gradient.determineOrientation(direction));
        }
    };
    Gradient.determineOrientation = function (direction) {
        switch (direction) {
            case gradient_common_1.GradientDirection.TO_BOTTOM:
                return android.graphics.drawable.GradientDrawable.Orientation.TOP_BOTTOM;
            case gradient_common_1.GradientDirection.TO_TOP:
                return android.graphics.drawable.GradientDrawable.Orientation.BOTTOM_TOP;
            case gradient_common_1.GradientDirection.TO_RIGHT:
                return android.graphics.drawable.GradientDrawable.Orientation.LEFT_RIGHT;
            case gradient_common_1.GradientDirection.TO_LEFT:
                return android.graphics.drawable.GradientDrawable.Orientation.RIGHT_LEFT;
            case gradient_common_1.GradientDirection.TO_BOTTOM_LEFT:
                return android.graphics.drawable.GradientDrawable.Orientation.TR_BL;
            case gradient_common_1.GradientDirection.TO_TOP_LEFT:
                return android.graphics.drawable.GradientDrawable.Orientation.BR_TL;
            case gradient_common_1.GradientDirection.TO_BOTTOM_RIGHT:
                return android.graphics.drawable.GradientDrawable.Orientation.TL_BR;
            case gradient_common_1.GradientDirection.TO_TOP_RIGHT:
                return android.graphics.drawable.GradientDrawable.Orientation.BL_TR;
            default:
                return android.graphics.drawable.GradientDrawable.Orientation.TOP_BOTTOM;
        }
    };
    return Gradient;
}(gradient_common_1.Gradient));
exports.Gradient = Gradient;
//# sourceMappingURL=gradient.js.map