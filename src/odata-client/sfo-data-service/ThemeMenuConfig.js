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
 * @deprecated since v1.6.0. Use [[ThemeMenuConfig.build]] instead.
 */
function createThemeMenuConfig(json) {
    return ThemeMenuConfig.build(json);
}
exports.createThemeMenuConfig = createThemeMenuConfig;
/**
 * ThemeMenuConfigField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var ThemeMenuConfigField = /** @class */ (function (_super) {
    __extends(ThemeMenuConfigField, _super);
    function ThemeMenuConfigField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[ThemeMenuConfig.activeBgColor]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.activeBgColor = new ThemeColor_1.ThemeColorField('activeBgColor', _this);
        /**
         * Representation of the [[ThemeMenuConfig.activeTextColor]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.activeTextColor = new ThemeColor_1.ThemeColorField('activeTextColor', _this);
        /**
         * Representation of the [[ThemeMenuConfig.bgColor]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.bgColor = new ThemeColor_1.ThemeColorField('bgColor', _this);
        /**
         * Representation of the [[ThemeMenuConfig.hoverBgColor]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.hoverBgColor = new ThemeColor_1.ThemeColorField('hoverBgColor', _this);
        /**
         * Representation of the [[ThemeMenuConfig.hoverBgColorDisabled]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.hoverBgColorDisabled = new ThemeColor_1.ThemeColorField('hoverBgColorDisabled', _this);
        /**
         * Representation of the [[ThemeMenuConfig.hoverTextColor]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.hoverTextColor = new ThemeColor_1.ThemeColorField('hoverTextColor', _this);
        /**
         * Representation of the [[ThemeMenuConfig.textColor]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.textColor = new ThemeColor_1.ThemeColorField('textColor', _this);
        /**
         * Representation of the [[ThemeMenuConfig.textColorDisabled]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.textColorDisabled = new ThemeColor_1.ThemeColorField('textColorDisabled', _this);
        return _this;
    }
    return ThemeMenuConfigField;
}(core_1.ComplexTypeField));
exports.ThemeMenuConfigField = ThemeMenuConfigField;
var ThemeMenuConfig;
(function (ThemeMenuConfig) {
    function build(json) {
        return core_1.createComplexType(json, {
            activeBgColor: function (activeBgColor) { return ({ activeBgColor: ThemeColor_1.ThemeColor.build(activeBgColor) }); },
            activeTextColor: function (activeTextColor) { return ({ activeTextColor: ThemeColor_1.ThemeColor.build(activeTextColor) }); },
            bgColor: function (bgColor) { return ({ bgColor: ThemeColor_1.ThemeColor.build(bgColor) }); },
            hoverBgColor: function (hoverBgColor) { return ({ hoverBgColor: ThemeColor_1.ThemeColor.build(hoverBgColor) }); },
            hoverBgColorDisabled: function (hoverBgColorDisabled) { return ({ hoverBgColorDisabled: ThemeColor_1.ThemeColor.build(hoverBgColorDisabled) }); },
            hoverTextColor: function (hoverTextColor) { return ({ hoverTextColor: ThemeColor_1.ThemeColor.build(hoverTextColor) }); },
            textColor: function (textColor) { return ({ textColor: ThemeColor_1.ThemeColor.build(textColor) }); },
            textColorDisabled: function (textColorDisabled) { return ({ textColorDisabled: ThemeColor_1.ThemeColor.build(textColorDisabled) }); }
        });
    }
    ThemeMenuConfig.build = build;
})(ThemeMenuConfig = exports.ThemeMenuConfig || (exports.ThemeMenuConfig = {}));
//# sourceMappingURL=ThemeMenuConfig.js.map