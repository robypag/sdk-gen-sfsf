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
 * @deprecated since v1.6.0. Use [[ThemeBackgroundConfig.build]] instead.
 */
function createThemeBackgroundConfig(json) {
    return ThemeBackgroundConfig.build(json);
}
exports.createThemeBackgroundConfig = createThemeBackgroundConfig;
/**
 * ThemeBackgroundConfigField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var ThemeBackgroundConfigField = /** @class */ (function (_super) {
    __extends(ThemeBackgroundConfigField, _super);
    function ThemeBackgroundConfigField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[ThemeBackgroundConfig.baseColor]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.baseColor = new ThemeColor_1.ThemeColorField('baseColor', _this);
        /**
         * Representation of the [[ThemeBackgroundConfig.imageHorizontalPosition]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.imageHorizontalPosition = new core_1.ComplexTypeStringPropertyField('imageHorizontalPosition', _this, 'Edm.String');
        /**
         * Representation of the [[ThemeBackgroundConfig.imageOption]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.imageOption = new core_1.ComplexTypeStringPropertyField('imageOption', _this, 'Edm.String');
        /**
         * Representation of the [[ThemeBackgroundConfig.imageRepeat]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.imageRepeat = new core_1.ComplexTypeStringPropertyField('imageRepeat', _this, 'Edm.String');
        /**
         * Representation of the [[ThemeBackgroundConfig.imageVerticalPosition]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.imageVerticalPosition = new core_1.ComplexTypeStringPropertyField('imageVerticalPosition', _this, 'Edm.String');
        /**
         * Representation of the [[ThemeBackgroundConfig.lighting]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lighting = new core_1.ComplexTypeStringPropertyField('lighting', _this, 'Edm.String');
        /**
         * Representation of the [[ThemeBackgroundConfig.texture]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.texture = new core_1.ComplexTypeStringPropertyField('texture', _this, 'Edm.String');
        /**
         * Representation of the [[ThemeBackgroundConfig.url]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.url = new ThemeUrl_1.ThemeUrlField('url', _this);
        return _this;
    }
    return ThemeBackgroundConfigField;
}(core_1.ComplexTypeField));
exports.ThemeBackgroundConfigField = ThemeBackgroundConfigField;
var ThemeBackgroundConfig;
(function (ThemeBackgroundConfig) {
    function build(json) {
        return core_1.createComplexType(json, {
            baseColor: function (baseColor) { return ({ baseColor: ThemeColor_1.ThemeColor.build(baseColor) }); },
            imageHorizontalPosition: function (imageHorizontalPosition) { return ({ imageHorizontalPosition: core_1.edmToTs(imageHorizontalPosition, 'Edm.String') }); },
            imageOption: function (imageOption) { return ({ imageOption: core_1.edmToTs(imageOption, 'Edm.String') }); },
            imageRepeat: function (imageRepeat) { return ({ imageRepeat: core_1.edmToTs(imageRepeat, 'Edm.String') }); },
            imageVerticalPosition: function (imageVerticalPosition) { return ({ imageVerticalPosition: core_1.edmToTs(imageVerticalPosition, 'Edm.String') }); },
            lighting: function (lighting) { return ({ lighting: core_1.edmToTs(lighting, 'Edm.String') }); },
            texture: function (texture) { return ({ texture: core_1.edmToTs(texture, 'Edm.String') }); },
            url: function (url) { return ({ url: ThemeUrl_1.ThemeUrl.build(url) }); }
        });
    }
    ThemeBackgroundConfig.build = build;
})(ThemeBackgroundConfig = exports.ThemeBackgroundConfig || (exports.ThemeBackgroundConfig = {}));
//# sourceMappingURL=ThemeBackgroundConfig.js.map