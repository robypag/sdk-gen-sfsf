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
 * @deprecated since v1.6.0. Use [[ThemeDiagramConfig.build]] instead.
 */
function createThemeDiagramConfig(json) {
    return ThemeDiagramConfig.build(json);
}
exports.createThemeDiagramConfig = createThemeDiagramConfig;
/**
 * ThemeDiagramConfigField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var ThemeDiagramConfigField = /** @class */ (function (_super) {
    __extends(ThemeDiagramConfigField, _super);
    function ThemeDiagramConfigField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[ThemeDiagramConfig.backgroundColor]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.backgroundColor = new ThemeColor_1.ThemeColorField('backgroundColor', _this);
        /**
         * Representation of the [[ThemeDiagramConfig.lineColor]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineColor = new ThemeColor_1.ThemeColorField('lineColor', _this);
        /**
         * Representation of the [[ThemeDiagramConfig.negativeThresholdColor]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.negativeThresholdColor = new ThemeColor_1.ThemeColorField('negativeThresholdColor', _this);
        /**
         * Representation of the [[ThemeDiagramConfig.neutralThresholdColor]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.neutralThresholdColor = new ThemeColor_1.ThemeColorField('neutralThresholdColor', _this);
        /**
         * Representation of the [[ThemeDiagramConfig.paletteColor10]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.paletteColor10 = new ThemeColor_1.ThemeColorField('paletteColor10', _this);
        /**
         * Representation of the [[ThemeDiagramConfig.paletteColor2]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.paletteColor2 = new ThemeColor_1.ThemeColorField('paletteColor2', _this);
        /**
         * Representation of the [[ThemeDiagramConfig.paletteColor3]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.paletteColor3 = new ThemeColor_1.ThemeColorField('paletteColor3', _this);
        /**
         * Representation of the [[ThemeDiagramConfig.paletteColor4]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.paletteColor4 = new ThemeColor_1.ThemeColorField('paletteColor4', _this);
        /**
         * Representation of the [[ThemeDiagramConfig.paletteColor5]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.paletteColor5 = new ThemeColor_1.ThemeColorField('paletteColor5', _this);
        /**
         * Representation of the [[ThemeDiagramConfig.paletteColor6]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.paletteColor6 = new ThemeColor_1.ThemeColorField('paletteColor6', _this);
        /**
         * Representation of the [[ThemeDiagramConfig.paletteColor7]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.paletteColor7 = new ThemeColor_1.ThemeColorField('paletteColor7', _this);
        /**
         * Representation of the [[ThemeDiagramConfig.paletteColor8]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.paletteColor8 = new ThemeColor_1.ThemeColorField('paletteColor8', _this);
        /**
         * Representation of the [[ThemeDiagramConfig.paletteColor9]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.paletteColor9 = new ThemeColor_1.ThemeColorField('paletteColor9', _this);
        /**
         * Representation of the [[ThemeDiagramConfig.positiveThresholdColor]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.positiveThresholdColor = new ThemeColor_1.ThemeColorField('positiveThresholdColor', _this);
        /**
         * Representation of the [[ThemeDiagramConfig.primaryColor]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.primaryColor = new ThemeColor_1.ThemeColorField('primaryColor', _this);
        /**
         * Representation of the [[ThemeDiagramConfig.textColor]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.textColor = new ThemeColor_1.ThemeColorField('textColor', _this);
        /**
         * Representation of the [[ThemeDiagramConfig.titleColor]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.titleColor = new ThemeColor_1.ThemeColorField('titleColor', _this);
        return _this;
    }
    return ThemeDiagramConfigField;
}(core_1.ComplexTypeField));
exports.ThemeDiagramConfigField = ThemeDiagramConfigField;
var ThemeDiagramConfig;
(function (ThemeDiagramConfig) {
    function build(json) {
        return core_1.createComplexType(json, {
            backgroundColor: function (backgroundColor) { return ({ backgroundColor: ThemeColor_1.ThemeColor.build(backgroundColor) }); },
            lineColor: function (lineColor) { return ({ lineColor: ThemeColor_1.ThemeColor.build(lineColor) }); },
            negativeThresholdColor: function (negativeThresholdColor) { return ({ negativeThresholdColor: ThemeColor_1.ThemeColor.build(negativeThresholdColor) }); },
            neutralThresholdColor: function (neutralThresholdColor) { return ({ neutralThresholdColor: ThemeColor_1.ThemeColor.build(neutralThresholdColor) }); },
            paletteColor10: function (paletteColor10) { return ({ paletteColor10: ThemeColor_1.ThemeColor.build(paletteColor10) }); },
            paletteColor2: function (paletteColor2) { return ({ paletteColor2: ThemeColor_1.ThemeColor.build(paletteColor2) }); },
            paletteColor3: function (paletteColor3) { return ({ paletteColor3: ThemeColor_1.ThemeColor.build(paletteColor3) }); },
            paletteColor4: function (paletteColor4) { return ({ paletteColor4: ThemeColor_1.ThemeColor.build(paletteColor4) }); },
            paletteColor5: function (paletteColor5) { return ({ paletteColor5: ThemeColor_1.ThemeColor.build(paletteColor5) }); },
            paletteColor6: function (paletteColor6) { return ({ paletteColor6: ThemeColor_1.ThemeColor.build(paletteColor6) }); },
            paletteColor7: function (paletteColor7) { return ({ paletteColor7: ThemeColor_1.ThemeColor.build(paletteColor7) }); },
            paletteColor8: function (paletteColor8) { return ({ paletteColor8: ThemeColor_1.ThemeColor.build(paletteColor8) }); },
            paletteColor9: function (paletteColor9) { return ({ paletteColor9: ThemeColor_1.ThemeColor.build(paletteColor9) }); },
            positiveThresholdColor: function (positiveThresholdColor) { return ({ positiveThresholdColor: ThemeColor_1.ThemeColor.build(positiveThresholdColor) }); },
            primaryColor: function (primaryColor) { return ({ primaryColor: ThemeColor_1.ThemeColor.build(primaryColor) }); },
            textColor: function (textColor) { return ({ textColor: ThemeColor_1.ThemeColor.build(textColor) }); },
            titleColor: function (titleColor) { return ({ titleColor: ThemeColor_1.ThemeColor.build(titleColor) }); }
        });
    }
    ThemeDiagramConfig.build = build;
})(ThemeDiagramConfig = exports.ThemeDiagramConfig || (exports.ThemeDiagramConfig = {}));
//# sourceMappingURL=ThemeDiagramConfig.js.map