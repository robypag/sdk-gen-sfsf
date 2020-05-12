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
 * @deprecated since v1.6.0. Use [[ThemeHeaderBackgroundConfig.build]] instead.
 */
function createThemeHeaderBackgroundConfig(json) {
    return ThemeHeaderBackgroundConfig.build(json);
}
exports.createThemeHeaderBackgroundConfig = createThemeHeaderBackgroundConfig;
/**
 * ThemeHeaderBackgroundConfigField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var ThemeHeaderBackgroundConfigField = /** @class */ (function (_super) {
    __extends(ThemeHeaderBackgroundConfigField, _super);
    function ThemeHeaderBackgroundConfigField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[ThemeHeaderBackgroundConfig.baseColor]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.baseColor = new ThemeColor_1.ThemeColorField('baseColor', _this);
        /**
         * Representation of the [[ThemeHeaderBackgroundConfig.bgOption]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.bgOption = new core_1.ComplexTypeStringPropertyField('bgOption', _this, 'Edm.String');
        /**
         * Representation of the [[ThemeHeaderBackgroundConfig.imageHorizontalPosition]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.imageHorizontalPosition = new core_1.ComplexTypeStringPropertyField('imageHorizontalPosition', _this, 'Edm.String');
        /**
         * Representation of the [[ThemeHeaderBackgroundConfig.imageRepeat]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.imageRepeat = new core_1.ComplexTypeStringPropertyField('imageRepeat', _this, 'Edm.String');
        /**
         * Representation of the [[ThemeHeaderBackgroundConfig.imageVerticalPosition]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.imageVerticalPosition = new core_1.ComplexTypeStringPropertyField('imageVerticalPosition', _this, 'Edm.String');
        /**
         * Representation of the [[ThemeHeaderBackgroundConfig.styleOption]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.styleOption = new core_1.ComplexTypeStringPropertyField('styleOption', _this, 'Edm.String');
        /**
         * Representation of the [[ThemeHeaderBackgroundConfig.url]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.url = new ThemeUrl_1.ThemeUrlField('url', _this);
        return _this;
    }
    return ThemeHeaderBackgroundConfigField;
}(core_1.ComplexTypeField));
exports.ThemeHeaderBackgroundConfigField = ThemeHeaderBackgroundConfigField;
var ThemeHeaderBackgroundConfig;
(function (ThemeHeaderBackgroundConfig) {
    function build(json) {
        return core_1.createComplexType(json, {
            baseColor: function (baseColor) { return ({ baseColor: ThemeColor_1.ThemeColor.build(baseColor) }); },
            bgOption: function (bgOption) { return ({ bgOption: core_1.edmToTs(bgOption, 'Edm.String') }); },
            imageHorizontalPosition: function (imageHorizontalPosition) { return ({ imageHorizontalPosition: core_1.edmToTs(imageHorizontalPosition, 'Edm.String') }); },
            imageRepeat: function (imageRepeat) { return ({ imageRepeat: core_1.edmToTs(imageRepeat, 'Edm.String') }); },
            imageVerticalPosition: function (imageVerticalPosition) { return ({ imageVerticalPosition: core_1.edmToTs(imageVerticalPosition, 'Edm.String') }); },
            styleOption: function (styleOption) { return ({ styleOption: core_1.edmToTs(styleOption, 'Edm.String') }); },
            url: function (url) { return ({ url: ThemeUrl_1.ThemeUrl.build(url) }); }
        });
    }
    ThemeHeaderBackgroundConfig.build = build;
})(ThemeHeaderBackgroundConfig = exports.ThemeHeaderBackgroundConfig || (exports.ThemeHeaderBackgroundConfig = {}));
//# sourceMappingURL=ThemeHeaderBackgroundConfig.js.map