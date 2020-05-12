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
 * @deprecated since v1.6.0. Use [[ThemeButtonConfig.build]] instead.
 */
function createThemeButtonConfig(json) {
    return ThemeButtonConfig.build(json);
}
exports.createThemeButtonConfig = createThemeButtonConfig;
/**
 * ThemeButtonConfigField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var ThemeButtonConfigField = /** @class */ (function (_super) {
    __extends(ThemeButtonConfigField, _super);
    function ThemeButtonConfigField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[ThemeButtonConfig.bgColor]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.bgColor = new ThemeColor_1.ThemeColorField('bgColor', _this);
        /**
         * Representation of the [[ThemeButtonConfig.borderColor]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.borderColor = new ThemeColor_1.ThemeColorField('borderColor', _this);
        /**
         * Representation of the [[ThemeButtonConfig.borderWidth]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.borderWidth = new core_1.ComplexTypeStringPropertyField('borderWidth', _this, 'Edm.String');
        /**
         * Representation of the [[ThemeButtonConfig.disabledBgColor]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.disabledBgColor = new ThemeColor_1.ThemeColorField('disabledBgColor', _this);
        /**
         * Representation of the [[ThemeButtonConfig.disabledBorderColor]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.disabledBorderColor = new ThemeColor_1.ThemeColorField('disabledBorderColor', _this);
        /**
         * Representation of the [[ThemeButtonConfig.disabledTextColor]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.disabledTextColor = new ThemeColor_1.ThemeColorField('disabledTextColor', _this);
        /**
         * Representation of the [[ThemeButtonConfig.hoverBgColor]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.hoverBgColor = new ThemeColor_1.ThemeColorField('hoverBgColor', _this);
        /**
         * Representation of the [[ThemeButtonConfig.hoverBorderColor]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.hoverBorderColor = new ThemeColor_1.ThemeColorField('hoverBorderColor', _this);
        /**
         * Representation of the [[ThemeButtonConfig.hoverTextColor]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.hoverTextColor = new ThemeColor_1.ThemeColorField('hoverTextColor', _this);
        /**
         * Representation of the [[ThemeButtonConfig.textColor]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.textColor = new ThemeColor_1.ThemeColorField('textColor', _this);
        return _this;
    }
    return ThemeButtonConfigField;
}(core_1.ComplexTypeField));
exports.ThemeButtonConfigField = ThemeButtonConfigField;
var ThemeButtonConfig;
(function (ThemeButtonConfig) {
    function build(json) {
        return core_1.createComplexType(json, {
            bgColor: function (bgColor) { return ({ bgColor: ThemeColor_1.ThemeColor.build(bgColor) }); },
            borderColor: function (borderColor) { return ({ borderColor: ThemeColor_1.ThemeColor.build(borderColor) }); },
            borderWidth: function (borderWidth) { return ({ borderWidth: core_1.edmToTs(borderWidth, 'Edm.String') }); },
            disabledBgColor: function (disabledBgColor) { return ({ disabledBgColor: ThemeColor_1.ThemeColor.build(disabledBgColor) }); },
            disabledBorderColor: function (disabledBorderColor) { return ({ disabledBorderColor: ThemeColor_1.ThemeColor.build(disabledBorderColor) }); },
            disabledTextColor: function (disabledTextColor) { return ({ disabledTextColor: ThemeColor_1.ThemeColor.build(disabledTextColor) }); },
            hoverBgColor: function (hoverBgColor) { return ({ hoverBgColor: ThemeColor_1.ThemeColor.build(hoverBgColor) }); },
            hoverBorderColor: function (hoverBorderColor) { return ({ hoverBorderColor: ThemeColor_1.ThemeColor.build(hoverBorderColor) }); },
            hoverTextColor: function (hoverTextColor) { return ({ hoverTextColor: ThemeColor_1.ThemeColor.build(hoverTextColor) }); },
            textColor: function (textColor) { return ({ textColor: ThemeColor_1.ThemeColor.build(textColor) }); }
        });
    }
    ThemeButtonConfig.build = build;
})(ThemeButtonConfig = exports.ThemeButtonConfig || (exports.ThemeButtonConfig = {}));
//# sourceMappingURL=ThemeButtonConfig.js.map