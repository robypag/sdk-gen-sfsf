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
 * @deprecated since v1.6.0. Use [[ThemePortletConfig.build]] instead.
 */
function createThemePortletConfig(json) {
    return ThemePortletConfig.build(json);
}
exports.createThemePortletConfig = createThemePortletConfig;
/**
 * ThemePortletConfigField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var ThemePortletConfigField = /** @class */ (function (_super) {
    __extends(ThemePortletConfigField, _super);
    function ThemePortletConfigField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[ThemePortletConfig.alertTextColor]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.alertTextColor = new ThemeColor_1.ThemeColorField('alertTextColor', _this);
        /**
         * Representation of the [[ThemePortletConfig.bodyBackgroundColor]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.bodyBackgroundColor = new ThemeColor_1.ThemeColorField('bodyBackgroundColor', _this);
        /**
         * Representation of the [[ThemePortletConfig.bodyLinkTextColor]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.bodyLinkTextColor = new ThemeColor_1.ThemeColorField('bodyLinkTextColor', _this);
        /**
         * Representation of the [[ThemePortletConfig.bodyTextColor]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.bodyTextColor = new ThemeColor_1.ThemeColorField('bodyTextColor', _this);
        /**
         * Representation of the [[ThemePortletConfig.calloutTextColor]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.calloutTextColor = new ThemeColor_1.ThemeColorField('calloutTextColor', _this);
        /**
         * Representation of the [[ThemePortletConfig.custom1TextColor]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.custom1TextColor = new ThemeColor_1.ThemeColorField('custom1TextColor', _this);
        /**
         * Representation of the [[ThemePortletConfig.custom2TextColor]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.custom2TextColor = new ThemeColor_1.ThemeColorField('custom2TextColor', _this);
        /**
         * Representation of the [[ThemePortletConfig.dimmedTextColor]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.dimmedTextColor = new ThemeColor_1.ThemeColorField('dimmedTextColor', _this);
        /**
         * Representation of the [[ThemePortletConfig.headerBgColor]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.headerBgColor = new ThemeColor_1.ThemeColorField('headerBgColor', _this);
        /**
         * Representation of the [[ThemePortletConfig.headerLinkTextColor]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.headerLinkTextColor = new ThemeColor_1.ThemeColorField('headerLinkTextColor', _this);
        /**
         * Representation of the [[ThemePortletConfig.headerTextColor]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.headerTextColor = new ThemeColor_1.ThemeColorField('headerTextColor', _this);
        /**
         * Representation of the [[ThemePortletConfig.sidebarColor]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.sidebarColor = new ThemeColor_1.ThemeColorField('sidebarColor', _this);
        /**
         * Representation of the [[ThemePortletConfig.sidebarLinkTextColor]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.sidebarLinkTextColor = new ThemeColor_1.ThemeColorField('sidebarLinkTextColor', _this);
        /**
         * Representation of the [[ThemePortletConfig.sidebarTextColor]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.sidebarTextColor = new ThemeColor_1.ThemeColorField('sidebarTextColor', _this);
        return _this;
    }
    return ThemePortletConfigField;
}(core_1.ComplexTypeField));
exports.ThemePortletConfigField = ThemePortletConfigField;
var ThemePortletConfig;
(function (ThemePortletConfig) {
    function build(json) {
        return core_1.createComplexType(json, {
            alertTextColor: function (alertTextColor) { return ({ alertTextColor: ThemeColor_1.ThemeColor.build(alertTextColor) }); },
            bodyBackgroundColor: function (bodyBackgroundColor) { return ({ bodyBackgroundColor: ThemeColor_1.ThemeColor.build(bodyBackgroundColor) }); },
            bodyLinkTextColor: function (bodyLinkTextColor) { return ({ bodyLinkTextColor: ThemeColor_1.ThemeColor.build(bodyLinkTextColor) }); },
            bodyTextColor: function (bodyTextColor) { return ({ bodyTextColor: ThemeColor_1.ThemeColor.build(bodyTextColor) }); },
            calloutTextColor: function (calloutTextColor) { return ({ calloutTextColor: ThemeColor_1.ThemeColor.build(calloutTextColor) }); },
            custom1TextColor: function (custom1TextColor) { return ({ custom1TextColor: ThemeColor_1.ThemeColor.build(custom1TextColor) }); },
            custom2TextColor: function (custom2TextColor) { return ({ custom2TextColor: ThemeColor_1.ThemeColor.build(custom2TextColor) }); },
            dimmedTextColor: function (dimmedTextColor) { return ({ dimmedTextColor: ThemeColor_1.ThemeColor.build(dimmedTextColor) }); },
            headerBgColor: function (headerBgColor) { return ({ headerBgColor: ThemeColor_1.ThemeColor.build(headerBgColor) }); },
            headerLinkTextColor: function (headerLinkTextColor) { return ({ headerLinkTextColor: ThemeColor_1.ThemeColor.build(headerLinkTextColor) }); },
            headerTextColor: function (headerTextColor) { return ({ headerTextColor: ThemeColor_1.ThemeColor.build(headerTextColor) }); },
            sidebarColor: function (sidebarColor) { return ({ sidebarColor: ThemeColor_1.ThemeColor.build(sidebarColor) }); },
            sidebarLinkTextColor: function (sidebarLinkTextColor) { return ({ sidebarLinkTextColor: ThemeColor_1.ThemeColor.build(sidebarLinkTextColor) }); },
            sidebarTextColor: function (sidebarTextColor) { return ({ sidebarTextColor: ThemeColor_1.ThemeColor.build(sidebarTextColor) }); }
        });
    }
    ThemePortletConfig.build = build;
})(ThemePortletConfig = exports.ThemePortletConfig || (exports.ThemePortletConfig = {}));
//# sourceMappingURL=ThemePortletConfig.js.map