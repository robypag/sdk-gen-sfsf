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
 * @deprecated since v1.6.0. Use [[ThemeLoginBackgroundConfig.build]] instead.
 */
function createThemeLoginBackgroundConfig(json) {
    return ThemeLoginBackgroundConfig.build(json);
}
exports.createThemeLoginBackgroundConfig = createThemeLoginBackgroundConfig;
/**
 * ThemeLoginBackgroundConfigField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var ThemeLoginBackgroundConfigField = /** @class */ (function (_super) {
    __extends(ThemeLoginBackgroundConfigField, _super);
    function ThemeLoginBackgroundConfigField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[ThemeLoginBackgroundConfig.backgroundType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.backgroundType = new core_1.ComplexTypeStringPropertyField('backgroundType', _this, 'Edm.String');
        /**
         * Representation of the [[ThemeLoginBackgroundConfig.baseColor]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.baseColor = new ThemeColor_1.ThemeColorField('baseColor', _this);
        /**
         * Representation of the [[ThemeLoginBackgroundConfig.imageHorizontalPosition]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.imageHorizontalPosition = new core_1.ComplexTypeStringPropertyField('imageHorizontalPosition', _this, 'Edm.String');
        /**
         * Representation of the [[ThemeLoginBackgroundConfig.imageRepeat]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.imageRepeat = new core_1.ComplexTypeStringPropertyField('imageRepeat', _this, 'Edm.String');
        /**
         * Representation of the [[ThemeLoginBackgroundConfig.imageVerticalPosition]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.imageVerticalPosition = new core_1.ComplexTypeStringPropertyField('imageVerticalPosition', _this, 'Edm.String');
        /**
         * Representation of the [[ThemeLoginBackgroundConfig.option]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.option = new core_1.ComplexTypeStringPropertyField('option', _this, 'Edm.String');
        /**
         * Representation of the [[ThemeLoginBackgroundConfig.overlayOpacity]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.overlayOpacity = new core_1.ComplexTypeNumberPropertyField('overlayOpacity', _this, 'Edm.Double');
        /**
         * Representation of the [[ThemeLoginBackgroundConfig.overlayOption]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.overlayOption = new core_1.ComplexTypeStringPropertyField('overlayOption', _this, 'Edm.String');
        /**
         * Representation of the [[ThemeLoginBackgroundConfig.url]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.url = new ThemeUrl_1.ThemeUrlField('url', _this);
        return _this;
    }
    return ThemeLoginBackgroundConfigField;
}(core_1.ComplexTypeField));
exports.ThemeLoginBackgroundConfigField = ThemeLoginBackgroundConfigField;
var ThemeLoginBackgroundConfig;
(function (ThemeLoginBackgroundConfig) {
    function build(json) {
        return core_1.createComplexType(json, {
            backgroundType: function (backgroundType) { return ({ backgroundType: core_1.edmToTs(backgroundType, 'Edm.String') }); },
            baseColor: function (baseColor) { return ({ baseColor: ThemeColor_1.ThemeColor.build(baseColor) }); },
            imageHorizontalPosition: function (imageHorizontalPosition) { return ({ imageHorizontalPosition: core_1.edmToTs(imageHorizontalPosition, 'Edm.String') }); },
            imageRepeat: function (imageRepeat) { return ({ imageRepeat: core_1.edmToTs(imageRepeat, 'Edm.String') }); },
            imageVerticalPosition: function (imageVerticalPosition) { return ({ imageVerticalPosition: core_1.edmToTs(imageVerticalPosition, 'Edm.String') }); },
            option: function (option) { return ({ option: core_1.edmToTs(option, 'Edm.String') }); },
            overlayOpacity: function (overlayOpacity) { return ({ overlayOpacity: core_1.edmToTs(overlayOpacity, 'Edm.Double') }); },
            overlayOption: function (overlayOption) { return ({ overlayOption: core_1.edmToTs(overlayOption, 'Edm.String') }); },
            url: function (url) { return ({ url: ThemeUrl_1.ThemeUrl.build(url) }); }
        });
    }
    ThemeLoginBackgroundConfig.build = build;
})(ThemeLoginBackgroundConfig = exports.ThemeLoginBackgroundConfig || (exports.ThemeLoginBackgroundConfig = {}));
//# sourceMappingURL=ThemeLoginBackgroundConfig.js.map