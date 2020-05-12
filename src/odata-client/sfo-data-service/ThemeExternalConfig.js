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
var ThemeUrl_1 = require("./ThemeUrl");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated since v1.6.0. Use [[ThemeExternalConfig.build]] instead.
 */
function createThemeExternalConfig(json) {
    return ThemeExternalConfig.build(json);
}
exports.createThemeExternalConfig = createThemeExternalConfig;
/**
 * ThemeExternalConfigField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var ThemeExternalConfigField = /** @class */ (function (_super) {
    __extends(ThemeExternalConfigField, _super);
    function ThemeExternalConfigField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[ThemeExternalConfig.faviconOption]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.faviconOption = new core_1.ComplexTypeStringPropertyField('faviconOption', _this, 'Edm.String');
        /**
         * Representation of the [[ThemeExternalConfig.faviconUrl]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.faviconUrl = new ThemeUrl_1.ThemeUrlField('faviconUrl', _this);
        /**
         * Representation of the [[ThemeExternalConfig.footerLogoOption]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.footerLogoOption = new core_1.ComplexTypeStringPropertyField('footerLogoOption', _this, 'Edm.String');
        /**
         * Representation of the [[ThemeExternalConfig.footerLogoUrl]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.footerLogoUrl = new ThemeUrl_1.ThemeUrlField('footerLogoUrl', _this);
        return _this;
    }
    return ThemeExternalConfigField;
}(core_1.ComplexTypeField));
exports.ThemeExternalConfigField = ThemeExternalConfigField;
var ThemeExternalConfig;
(function (ThemeExternalConfig) {
    function build(json) {
        return core_1.createComplexType(json, {
            faviconOption: function (faviconOption) { return ({ faviconOption: core_1.edmToTs(faviconOption, 'Edm.String') }); },
            faviconUrl: function (faviconUrl) { return ({ faviconUrl: ThemeUrl_1.ThemeUrl.build(faviconUrl) }); },
            footerLogoOption: function (footerLogoOption) { return ({ footerLogoOption: core_1.edmToTs(footerLogoOption, 'Edm.String') }); },
            footerLogoUrl: function (footerLogoUrl) { return ({ footerLogoUrl: ThemeUrl_1.ThemeUrl.build(footerLogoUrl) }); }
        });
    }
    ThemeExternalConfig.build = build;
})(ThemeExternalConfig = exports.ThemeExternalConfig || (exports.ThemeExternalConfig = {}));
//# sourceMappingURL=ThemeExternalConfig.js.map