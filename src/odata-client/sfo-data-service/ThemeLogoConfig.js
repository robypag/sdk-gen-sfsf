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
var ThemeUrl_1 = require("./ThemeUrl");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated since v1.6.0. Use [[ThemeLogoConfig.build]] instead.
 */
function createThemeLogoConfig(json) {
    return ThemeLogoConfig.build(json);
}
exports.createThemeLogoConfig = createThemeLogoConfig;
/**
 * ThemeLogoConfigField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var ThemeLogoConfigField = /** @class */ (function (_super) {
    __extends(ThemeLogoConfigField, _super);
    function ThemeLogoConfigField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[ThemeLogoConfig.backdropColor]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.backdropColor = new ThemeColor_1.ThemeColorField('backdropColor', _this);
        /**
         * Representation of the [[ThemeLogoConfig.position]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.position = new core_1.ComplexTypeStringPropertyField('position', _this, 'Edm.String');
        /**
         * Representation of the [[ThemeLogoConfig.url]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.url = new ThemeUrl_1.ThemeUrlField('url', _this);
        /**
         * Representation of the [[ThemeLogoConfig.useBackdrop]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.useBackdrop = new core_1.ComplexTypeBooleanPropertyField('useBackdrop', _this, 'Edm.Boolean');
        /**
         * Representation of the [[ThemeLogoConfig.useUploadedLogo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.useUploadedLogo = new core_1.ComplexTypeBooleanPropertyField('useUploadedLogo', _this, 'Edm.Boolean');
        return _this;
    }
    return ThemeLogoConfigField;
}(core_1.ComplexTypeField));
exports.ThemeLogoConfigField = ThemeLogoConfigField;
var ThemeLogoConfig;
(function (ThemeLogoConfig) {
    function build(json) {
        return core_1.createComplexType(json, {
            backdropColor: function (backdropColor) { return ({ backdropColor: ThemeColor_1.ThemeColor.build(backdropColor) }); },
            position: function (position) { return ({ position: core_1.edmToTs(position, 'Edm.String') }); },
            url: function (url) { return ({ url: ThemeUrl_1.ThemeUrl.build(url) }); },
            useBackdrop: function (useBackdrop) { return ({ useBackdrop: core_1.edmToTs(useBackdrop, 'Edm.Boolean') }); },
            useUploadedLogo: function (useUploadedLogo) { return ({ useUploadedLogo: core_1.edmToTs(useUploadedLogo, 'Edm.Boolean') }); }
        });
    }
    ThemeLogoConfig.build = build;
})(ThemeLogoConfig = exports.ThemeLogoConfig || (exports.ThemeLogoConfig = {}));
//# sourceMappingURL=ThemeLogoConfig.js.map