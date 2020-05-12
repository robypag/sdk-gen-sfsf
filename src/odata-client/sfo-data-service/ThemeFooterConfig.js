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
 * @deprecated since v1.6.0. Use [[ThemeFooterConfig.build]] instead.
 */
function createThemeFooterConfig(json) {
    return ThemeFooterConfig.build(json);
}
exports.createThemeFooterConfig = createThemeFooterConfig;
/**
 * ThemeFooterConfigField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var ThemeFooterConfigField = /** @class */ (function (_super) {
    __extends(ThemeFooterConfigField, _super);
    function ThemeFooterConfigField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[ThemeFooterConfig.logoScheme]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.logoScheme = new core_1.ComplexTypeStringPropertyField('logoScheme', _this, 'Edm.String');
        /**
         * Representation of the [[ThemeFooterConfig.textColor]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.textColor = new ThemeColor_1.ThemeColorField('textColor', _this);
        return _this;
    }
    return ThemeFooterConfigField;
}(core_1.ComplexTypeField));
exports.ThemeFooterConfigField = ThemeFooterConfigField;
var ThemeFooterConfig;
(function (ThemeFooterConfig) {
    function build(json) {
        return core_1.createComplexType(json, {
            logoScheme: function (logoScheme) { return ({ logoScheme: core_1.edmToTs(logoScheme, 'Edm.String') }); },
            textColor: function (textColor) { return ({ textColor: ThemeColor_1.ThemeColor.build(textColor) }); }
        });
    }
    ThemeFooterConfig.build = build;
})(ThemeFooterConfig = exports.ThemeFooterConfig || (exports.ThemeFooterConfig = {}));
//# sourceMappingURL=ThemeFooterConfig.js.map