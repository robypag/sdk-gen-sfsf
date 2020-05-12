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
 * @deprecated since v1.6.0. Use [[ThemePlacematConfig.build]] instead.
 */
function createThemePlacematConfig(json) {
    return ThemePlacematConfig.build(json);
}
exports.createThemePlacematConfig = createThemePlacematConfig;
/**
 * ThemePlacematConfigField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var ThemePlacematConfigField = /** @class */ (function (_super) {
    __extends(ThemePlacematConfigField, _super);
    function ThemePlacematConfigField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[ThemePlacematConfig.backgroundType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.backgroundType = new core_1.ComplexTypeStringPropertyField('backgroundType', _this, 'Edm.String');
        /**
         * Representation of the [[ThemePlacematConfig.bgColor]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.bgColor = new ThemeColor_1.ThemeColorField('bgColor', _this);
        /**
         * Representation of the [[ThemePlacematConfig.borderColor]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.borderColor = new ThemeColor_1.ThemeColorField('borderColor', _this);
        /**
         * Representation of the [[ThemePlacematConfig.linkColor]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.linkColor = new ThemeColor_1.ThemeColorField('linkColor', _this);
        /**
         * Representation of the [[ThemePlacematConfig.opacity]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.opacity = new core_1.ComplexTypeNumberPropertyField('opacity', _this, 'Edm.Double');
        /**
         * Representation of the [[ThemePlacematConfig.selectedTabColor]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.selectedTabColor = new ThemeColor_1.ThemeColorField('selectedTabColor', _this);
        /**
         * Representation of the [[ThemePlacematConfig.useShadow]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.useShadow = new core_1.ComplexTypeBooleanPropertyField('useShadow', _this, 'Edm.Boolean');
        return _this;
    }
    return ThemePlacematConfigField;
}(core_1.ComplexTypeField));
exports.ThemePlacematConfigField = ThemePlacematConfigField;
var ThemePlacematConfig;
(function (ThemePlacematConfig) {
    function build(json) {
        return core_1.createComplexType(json, {
            backgroundType: function (backgroundType) { return ({ backgroundType: core_1.edmToTs(backgroundType, 'Edm.String') }); },
            bgColor: function (bgColor) { return ({ bgColor: ThemeColor_1.ThemeColor.build(bgColor) }); },
            borderColor: function (borderColor) { return ({ borderColor: ThemeColor_1.ThemeColor.build(borderColor) }); },
            linkColor: function (linkColor) { return ({ linkColor: ThemeColor_1.ThemeColor.build(linkColor) }); },
            opacity: function (opacity) { return ({ opacity: core_1.edmToTs(opacity, 'Edm.Double') }); },
            selectedTabColor: function (selectedTabColor) { return ({ selectedTabColor: ThemeColor_1.ThemeColor.build(selectedTabColor) }); },
            useShadow: function (useShadow) { return ({ useShadow: core_1.edmToTs(useShadow, 'Edm.Boolean') }); }
        });
    }
    ThemePlacematConfig.build = build;
})(ThemePlacematConfig = exports.ThemePlacematConfig || (exports.ThemePlacematConfig = {}));
//# sourceMappingURL=ThemePlacematConfig.js.map