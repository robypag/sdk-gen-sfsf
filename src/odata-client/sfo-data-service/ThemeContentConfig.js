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
 * @deprecated since v1.6.0. Use [[ThemeContentConfig.build]] instead.
 */
function createThemeContentConfig(json) {
    return ThemeContentConfig.build(json);
}
exports.createThemeContentConfig = createThemeContentConfig;
/**
 * ThemeContentConfigField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var ThemeContentConfigField = /** @class */ (function (_super) {
    __extends(ThemeContentConfigField, _super);
    function ThemeContentConfigField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[ThemeContentConfig.bgColor]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.bgColor = new ThemeColor_1.ThemeColorField('bgColor', _this);
        /**
         * Representation of the [[ThemeContentConfig.bgColorVariant]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.bgColorVariant = new ThemeColor_1.ThemeColorField('bgColorVariant', _this);
        /**
         * Representation of the [[ThemeContentConfig.iconScheme]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.iconScheme = new core_1.ComplexTypeStringPropertyField('iconScheme', _this, 'Edm.String');
        /**
         * Representation of the [[ThemeContentConfig.linkTextColor]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.linkTextColor = new ThemeColor_1.ThemeColorField('linkTextColor', _this);
        /**
         * Representation of the [[ThemeContentConfig.textColor]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.textColor = new ThemeColor_1.ThemeColorField('textColor', _this);
        /**
         * Representation of the [[ThemeContentConfig.textColorVariant]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.textColorVariant = new ThemeColor_1.ThemeColorField('textColorVariant', _this);
        return _this;
    }
    return ThemeContentConfigField;
}(core_1.ComplexTypeField));
exports.ThemeContentConfigField = ThemeContentConfigField;
var ThemeContentConfig;
(function (ThemeContentConfig) {
    function build(json) {
        return core_1.createComplexType(json, {
            bgColor: function (bgColor) { return ({ bgColor: ThemeColor_1.ThemeColor.build(bgColor) }); },
            bgColorVariant: function (bgColorVariant) { return ({ bgColorVariant: ThemeColor_1.ThemeColor.build(bgColorVariant) }); },
            iconScheme: function (iconScheme) { return ({ iconScheme: core_1.edmToTs(iconScheme, 'Edm.String') }); },
            linkTextColor: function (linkTextColor) { return ({ linkTextColor: ThemeColor_1.ThemeColor.build(linkTextColor) }); },
            textColor: function (textColor) { return ({ textColor: ThemeColor_1.ThemeColor.build(textColor) }); },
            textColorVariant: function (textColorVariant) { return ({ textColorVariant: ThemeColor_1.ThemeColor.build(textColorVariant) }); }
        });
    }
    ThemeContentConfig.build = build;
})(ThemeContentConfig = exports.ThemeContentConfig || (exports.ThemeContentConfig = {}));
//# sourceMappingURL=ThemeContentConfig.js.map