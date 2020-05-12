"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var ThemeColor_1 = require("./ThemeColor");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated since v1.6.0. Use [[ThemeLandingPageTileConfig.build]] instead.
 */
function createThemeLandingPageTileConfig(json) {
    return ThemeLandingPageTileConfig.build(json);
}
exports.createThemeLandingPageTileConfig = createThemeLandingPageTileConfig;
/**
 * ThemeLandingPageTileConfigField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var ThemeLandingPageTileConfigField = /** @class */ (function (_super) {
    __extends(ThemeLandingPageTileConfigField, _super);
    function ThemeLandingPageTileConfigField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[ThemeLandingPageTileConfig.alertTextColor]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.alertTextColor = new ThemeColor_1.ThemeColorField('alertTextColor', _this);
        /**
         * Representation of the [[ThemeLandingPageTileConfig.bgColor]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.bgColor = new ThemeColor_1.ThemeColorField('bgColor', _this);
        /**
         * Representation of the [[ThemeLandingPageTileConfig.bodyTextColor]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.bodyTextColor = new ThemeColor_1.ThemeColorField('bodyTextColor', _this);
        /**
         * Representation of the [[ThemeLandingPageTileConfig.borderColor]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.borderColor = new ThemeColor_1.ThemeColorField('borderColor', _this);
        /**
         * Representation of the [[ThemeLandingPageTileConfig.headerTextColor]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.headerTextColor = new ThemeColor_1.ThemeColorField('headerTextColor', _this);
        /**
         * Representation of the [[ThemeLandingPageTileConfig.iconColor]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.iconColor = new ThemeColor_1.ThemeColorField('iconColor', _this);
        /**
         * Representation of the [[ThemeLandingPageTileConfig.neutralTextColor]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.neutralTextColor = new ThemeColor_1.ThemeColorField('neutralTextColor', _this);
        return _this;
    }
    return ThemeLandingPageTileConfigField;
}(core_1.ComplexTypeField));
exports.ThemeLandingPageTileConfigField = ThemeLandingPageTileConfigField;
var ThemeLandingPageTileConfig;
(function (ThemeLandingPageTileConfig) {
    function build(json) {
        return core_1.createComplexType(json, {
            alertTextColor: function (alertTextColor) { return ({ alertTextColor: ThemeColor_1.ThemeColor.build(alertTextColor) }); },
            bgColor: function (bgColor) { return ({ bgColor: ThemeColor_1.ThemeColor.build(bgColor) }); },
            bodyTextColor: function (bodyTextColor) { return ({ bodyTextColor: ThemeColor_1.ThemeColor.build(bodyTextColor) }); },
            borderColor: function (borderColor) { return ({ borderColor: ThemeColor_1.ThemeColor.build(borderColor) }); },
            headerTextColor: function (headerTextColor) { return ({ headerTextColor: ThemeColor_1.ThemeColor.build(headerTextColor) }); },
            iconColor: function (iconColor) { return ({ iconColor: ThemeColor_1.ThemeColor.build(iconColor) }); },
            neutralTextColor: function (neutralTextColor) { return ({ neutralTextColor: ThemeColor_1.ThemeColor.build(neutralTextColor) }); }
        });
    }
    ThemeLandingPageTileConfig.build = build;
})(ThemeLandingPageTileConfig = exports.ThemeLandingPageTileConfig || (exports.ThemeLandingPageTileConfig = {}));
//# sourceMappingURL=ThemeLandingPageTileConfig.js.map