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
 * @deprecated since v1.6.0. Use [[ThemeTileConfig.build]] instead.
 */
function createThemeTileConfig(json) {
    return ThemeTileConfig.build(json);
}
exports.createThemeTileConfig = createThemeTileConfig;
/**
 * ThemeTileConfigField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var ThemeTileConfigField = /** @class */ (function (_super) {
    __extends(ThemeTileConfigField, _super);
    function ThemeTileConfigField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[ThemeTileConfig.accentBodyBgColor]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.accentBodyBgColor = new ThemeColor_1.ThemeColorField('accentBodyBGColor', _this);
        /**
         * Representation of the [[ThemeTileConfig.accentBodyIconScheme]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.accentBodyIconScheme = new core_1.ComplexTypeStringPropertyField('accentBodyIconScheme', _this, 'Edm.String');
        /**
         * Representation of the [[ThemeTileConfig.accentBodyTextColor]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.accentBodyTextColor = new ThemeColor_1.ThemeColorField('accentBodyTextColor', _this);
        /**
         * Representation of the [[ThemeTileConfig.accentHeaderBgColor]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.accentHeaderBgColor = new ThemeColor_1.ThemeColorField('accentHeaderBGColor', _this);
        /**
         * Representation of the [[ThemeTileConfig.accentHeaderIconScheme]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.accentHeaderIconScheme = new core_1.ComplexTypeStringPropertyField('accentHeaderIconScheme', _this, 'Edm.String');
        /**
         * Representation of the [[ThemeTileConfig.accentHeaderLinkColor]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.accentHeaderLinkColor = new ThemeColor_1.ThemeColorField('accentHeaderLinkColor', _this);
        /**
         * Representation of the [[ThemeTileConfig.accentHeaderTextColor]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.accentHeaderTextColor = new ThemeColor_1.ThemeColorField('accentHeaderTextColor', _this);
        /**
         * Representation of the [[ThemeTileConfig.accentLinkColor]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.accentLinkColor = new ThemeColor_1.ThemeColorField('accentLinkColor', _this);
        /**
         * Representation of the [[ThemeTileConfig.alertBadgeBgColor]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.alertBadgeBgColor = new ThemeColor_1.ThemeColorField('alertBadgeBGColor', _this);
        /**
         * Representation of the [[ThemeTileConfig.alertBadgeTextColor]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.alertBadgeTextColor = new ThemeColor_1.ThemeColorField('alertBadgeTextColor', _this);
        /**
         * Representation of the [[ThemeTileConfig.alertTextColor]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.alertTextColor = new ThemeColor_1.ThemeColorField('alertTextColor', _this);
        /**
         * Representation of the [[ThemeTileConfig.bodyBgColor]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.bodyBgColor = new ThemeColor_1.ThemeColorField('bodyBGColor', _this);
        /**
         * Representation of the [[ThemeTileConfig.bodyIconScheme]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.bodyIconScheme = new core_1.ComplexTypeStringPropertyField('bodyIconScheme', _this, 'Edm.String');
        /**
         * Representation of the [[ThemeTileConfig.bodyTextColor]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.bodyTextColor = new ThemeColor_1.ThemeColorField('bodyTextColor', _this);
        /**
         * Representation of the [[ThemeTileConfig.headerBgColor]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.headerBgColor = new ThemeColor_1.ThemeColorField('headerBGColor', _this);
        /**
         * Representation of the [[ThemeTileConfig.headerIconScheme]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.headerIconScheme = new core_1.ComplexTypeStringPropertyField('headerIconScheme', _this, 'Edm.String');
        /**
         * Representation of the [[ThemeTileConfig.headerLinkColor]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.headerLinkColor = new ThemeColor_1.ThemeColorField('headerLinkColor', _this);
        /**
         * Representation of the [[ThemeTileConfig.headerTextColor]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.headerTextColor = new ThemeColor_1.ThemeColorField('headerTextColor', _this);
        /**
         * Representation of the [[ThemeTileConfig.linkColor]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.linkColor = new ThemeColor_1.ThemeColorField('linkColor', _this);
        return _this;
    }
    return ThemeTileConfigField;
}(core_1.ComplexTypeField));
exports.ThemeTileConfigField = ThemeTileConfigField;
var ThemeTileConfig;
(function (ThemeTileConfig) {
    function build(json) {
        return core_1.createComplexType(json, {
            accentBodyBGColor: function (accentBodyBgColor) { return ({ accentBodyBgColor: ThemeColor_1.ThemeColor.build(accentBodyBgColor) }); },
            accentBodyIconScheme: function (accentBodyIconScheme) { return ({ accentBodyIconScheme: core_1.edmToTs(accentBodyIconScheme, 'Edm.String') }); },
            accentBodyTextColor: function (accentBodyTextColor) { return ({ accentBodyTextColor: ThemeColor_1.ThemeColor.build(accentBodyTextColor) }); },
            accentHeaderBGColor: function (accentHeaderBgColor) { return ({ accentHeaderBgColor: ThemeColor_1.ThemeColor.build(accentHeaderBgColor) }); },
            accentHeaderIconScheme: function (accentHeaderIconScheme) { return ({ accentHeaderIconScheme: core_1.edmToTs(accentHeaderIconScheme, 'Edm.String') }); },
            accentHeaderLinkColor: function (accentHeaderLinkColor) { return ({ accentHeaderLinkColor: ThemeColor_1.ThemeColor.build(accentHeaderLinkColor) }); },
            accentHeaderTextColor: function (accentHeaderTextColor) { return ({ accentHeaderTextColor: ThemeColor_1.ThemeColor.build(accentHeaderTextColor) }); },
            accentLinkColor: function (accentLinkColor) { return ({ accentLinkColor: ThemeColor_1.ThemeColor.build(accentLinkColor) }); },
            alertBadgeBGColor: function (alertBadgeBgColor) { return ({ alertBadgeBgColor: ThemeColor_1.ThemeColor.build(alertBadgeBgColor) }); },
            alertBadgeTextColor: function (alertBadgeTextColor) { return ({ alertBadgeTextColor: ThemeColor_1.ThemeColor.build(alertBadgeTextColor) }); },
            alertTextColor: function (alertTextColor) { return ({ alertTextColor: ThemeColor_1.ThemeColor.build(alertTextColor) }); },
            bodyBGColor: function (bodyBgColor) { return ({ bodyBgColor: ThemeColor_1.ThemeColor.build(bodyBgColor) }); },
            bodyIconScheme: function (bodyIconScheme) { return ({ bodyIconScheme: core_1.edmToTs(bodyIconScheme, 'Edm.String') }); },
            bodyTextColor: function (bodyTextColor) { return ({ bodyTextColor: ThemeColor_1.ThemeColor.build(bodyTextColor) }); },
            headerBGColor: function (headerBgColor) { return ({ headerBgColor: ThemeColor_1.ThemeColor.build(headerBgColor) }); },
            headerIconScheme: function (headerIconScheme) { return ({ headerIconScheme: core_1.edmToTs(headerIconScheme, 'Edm.String') }); },
            headerLinkColor: function (headerLinkColor) { return ({ headerLinkColor: ThemeColor_1.ThemeColor.build(headerLinkColor) }); },
            headerTextColor: function (headerTextColor) { return ({ headerTextColor: ThemeColor_1.ThemeColor.build(headerTextColor) }); },
            linkColor: function (linkColor) { return ({ linkColor: ThemeColor_1.ThemeColor.build(linkColor) }); }
        });
    }
    ThemeTileConfig.build = build;
})(ThemeTileConfig = exports.ThemeTileConfig || (exports.ThemeTileConfig = {}));
//# sourceMappingURL=ThemeTileConfig.js.map