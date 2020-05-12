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
 * @deprecated since v1.6.0. Use [[ThemeNavigationConfig.build]] instead.
 */
function createThemeNavigationConfig(json) {
    return ThemeNavigationConfig.build(json);
}
exports.createThemeNavigationConfig = createThemeNavigationConfig;
/**
 * ThemeNavigationConfigField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var ThemeNavigationConfigField = /** @class */ (function (_super) {
    __extends(ThemeNavigationConfigField, _super);
    function ThemeNavigationConfigField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[ThemeNavigationConfig.activeTextColor]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.activeTextColor = new ThemeColor_1.ThemeColorField('activeTextColor', _this);
        /**
         * Representation of the [[ThemeNavigationConfig.allowCondensedView]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.allowCondensedView = new core_1.ComplexTypeBooleanPropertyField('allowCondensedView', _this, 'Edm.Boolean');
        /**
         * Representation of the [[ThemeNavigationConfig.hoverTextColor]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.hoverTextColor = new ThemeColor_1.ThemeColorField('hoverTextColor', _this);
        /**
         * Representation of the [[ThemeNavigationConfig.textColor]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.textColor = new ThemeColor_1.ThemeColorField('textColor', _this);
        return _this;
    }
    return ThemeNavigationConfigField;
}(core_1.ComplexTypeField));
exports.ThemeNavigationConfigField = ThemeNavigationConfigField;
var ThemeNavigationConfig;
(function (ThemeNavigationConfig) {
    function build(json) {
        return core_1.createComplexType(json, {
            activeTextColor: function (activeTextColor) { return ({ activeTextColor: ThemeColor_1.ThemeColor.build(activeTextColor) }); },
            allowCondensedView: function (allowCondensedView) { return ({ allowCondensedView: core_1.edmToTs(allowCondensedView, 'Edm.Boolean') }); },
            hoverTextColor: function (hoverTextColor) { return ({ hoverTextColor: ThemeColor_1.ThemeColor.build(hoverTextColor) }); },
            textColor: function (textColor) { return ({ textColor: ThemeColor_1.ThemeColor.build(textColor) }); }
        });
    }
    ThemeNavigationConfig.build = build;
})(ThemeNavigationConfig = exports.ThemeNavigationConfig || (exports.ThemeNavigationConfig = {}));
//# sourceMappingURL=ThemeNavigationConfig.js.map