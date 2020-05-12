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
 * @deprecated since v1.6.0. Use [[ThemeModulePickerConfig.build]] instead.
 */
function createThemeModulePickerConfig(json) {
    return ThemeModulePickerConfig.build(json);
}
exports.createThemeModulePickerConfig = createThemeModulePickerConfig;
/**
 * ThemeModulePickerConfigField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var ThemeModulePickerConfigField = /** @class */ (function (_super) {
    __extends(ThemeModulePickerConfigField, _super);
    function ThemeModulePickerConfigField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[ThemeModulePickerConfig.activeHeaderBgColor]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.activeHeaderBgColor = new ThemeColor_1.ThemeColorField('activeHeaderBgColor', _this);
        /**
         * Representation of the [[ThemeModulePickerConfig.activeHeaderTextColor]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.activeHeaderTextColor = new ThemeColor_1.ThemeColorField('activeHeaderTextColor', _this);
        /**
         * Representation of the [[ThemeModulePickerConfig.boxBorderColor]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.boxBorderColor = new ThemeColor_1.ThemeColorField('boxBorderColor', _this);
        /**
         * Representation of the [[ThemeModulePickerConfig.deriveColors]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.deriveColors = new core_1.ComplexTypeBooleanPropertyField('deriveColors', _this, 'Edm.Boolean');
        /**
         * Representation of the [[ThemeModulePickerConfig.headerTextColor]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.headerTextColor = new ThemeColor_1.ThemeColorField('headerTextColor', _this);
        /**
         * Representation of the [[ThemeModulePickerConfig.hoverHeaderBgColor]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.hoverHeaderBgColor = new ThemeColor_1.ThemeColorField('hoverHeaderBgColor', _this);
        /**
         * Representation of the [[ThemeModulePickerConfig.hoverHeaderTextColor]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.hoverHeaderTextColor = new ThemeColor_1.ThemeColorField('hoverHeaderTextColor', _this);
        /**
         * Representation of the [[ThemeModulePickerConfig.iconTextColor]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.iconTextColor = new ThemeColor_1.ThemeColorField('iconTextColor', _this);
        return _this;
    }
    return ThemeModulePickerConfigField;
}(core_1.ComplexTypeField));
exports.ThemeModulePickerConfigField = ThemeModulePickerConfigField;
var ThemeModulePickerConfig;
(function (ThemeModulePickerConfig) {
    function build(json) {
        return core_1.createComplexType(json, {
            activeHeaderBgColor: function (activeHeaderBgColor) { return ({ activeHeaderBgColor: ThemeColor_1.ThemeColor.build(activeHeaderBgColor) }); },
            activeHeaderTextColor: function (activeHeaderTextColor) { return ({ activeHeaderTextColor: ThemeColor_1.ThemeColor.build(activeHeaderTextColor) }); },
            boxBorderColor: function (boxBorderColor) { return ({ boxBorderColor: ThemeColor_1.ThemeColor.build(boxBorderColor) }); },
            deriveColors: function (deriveColors) { return ({ deriveColors: core_1.edmToTs(deriveColors, 'Edm.Boolean') }); },
            headerTextColor: function (headerTextColor) { return ({ headerTextColor: ThemeColor_1.ThemeColor.build(headerTextColor) }); },
            hoverHeaderBgColor: function (hoverHeaderBgColor) { return ({ hoverHeaderBgColor: ThemeColor_1.ThemeColor.build(hoverHeaderBgColor) }); },
            hoverHeaderTextColor: function (hoverHeaderTextColor) { return ({ hoverHeaderTextColor: ThemeColor_1.ThemeColor.build(hoverHeaderTextColor) }); },
            iconTextColor: function (iconTextColor) { return ({ iconTextColor: ThemeColor_1.ThemeColor.build(iconTextColor) }); }
        });
    }
    ThemeModulePickerConfig.build = build;
})(ThemeModulePickerConfig = exports.ThemeModulePickerConfig || (exports.ThemeModulePickerConfig = {}));
//# sourceMappingURL=ThemeModulePickerConfig.js.map