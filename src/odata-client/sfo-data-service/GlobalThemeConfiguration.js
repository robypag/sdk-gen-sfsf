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
var ThemeBackgroundConfig_1 = require("./ThemeBackgroundConfig");
var ThemeContentConfig_1 = require("./ThemeContentConfig");
var ThemeDiagramConfig_1 = require("./ThemeDiagramConfig");
var ThemeExternalConfig_1 = require("./ThemeExternalConfig");
var ThemeFooterConfig_1 = require("./ThemeFooterConfig");
var ThemeHeaderBackgroundConfig_1 = require("./ThemeHeaderBackgroundConfig");
var ThemeHighlightConfig_1 = require("./ThemeHighlightConfig");
var ThemeLandingPageConfig_1 = require("./ThemeLandingPageConfig");
var ThemeLandingPageTileConfig_1 = require("./ThemeLandingPageTileConfig");
var ThemeLoginConfig_1 = require("./ThemeLoginConfig");
var ThemeLogoConfig_1 = require("./ThemeLogoConfig");
var ThemeMenuConfig_1 = require("./ThemeMenuConfig");
var ThemeModulePickerConfig_1 = require("./ThemeModulePickerConfig");
var ThemeNavigationConfig_1 = require("./ThemeNavigationConfig");
var ThemePlacematConfig_1 = require("./ThemePlacematConfig");
var ThemePortletConfig_1 = require("./ThemePortletConfig");
var ThemeButtonConfig_1 = require("./ThemeButtonConfig");
var ThemeTableConfig_1 = require("./ThemeTableConfig");
var ThemeTileConfig_1 = require("./ThemeTileConfig");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated since v1.6.0. Use [[GlobalThemeConfiguration.build]] instead.
 */
function createGlobalThemeConfiguration(json) {
    return GlobalThemeConfiguration.build(json);
}
exports.createGlobalThemeConfiguration = createGlobalThemeConfiguration;
/**
 * GlobalThemeConfigurationField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var GlobalThemeConfigurationField = /** @class */ (function (_super) {
    __extends(GlobalThemeConfigurationField, _super);
    function GlobalThemeConfigurationField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[GlobalThemeConfiguration.accentColorBase]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.accentColorBase = new ThemeColor_1.ThemeColorField('accentColorBase', _this);
        /**
         * Representation of the [[GlobalThemeConfiguration.background]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.background = new ThemeBackgroundConfig_1.ThemeBackgroundConfigField('background', _this);
        /**
         * Representation of the [[GlobalThemeConfiguration.containerShadowColor]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.containerShadowColor = new ThemeColor_1.ThemeColorField('containerShadowColor', _this);
        /**
         * Representation of the [[GlobalThemeConfiguration.content]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.content = new ThemeContentConfig_1.ThemeContentConfigField('content', _this);
        /**
         * Representation of the [[GlobalThemeConfiguration.diagram]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.diagram = new ThemeDiagramConfig_1.ThemeDiagramConfigField('diagram', _this);
        /**
         * Representation of the [[GlobalThemeConfiguration.external]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.external = new ThemeExternalConfig_1.ThemeExternalConfigField('external', _this);
        /**
         * Representation of the [[GlobalThemeConfiguration.footer]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.footer = new ThemeFooterConfig_1.ThemeFooterConfigField('footer', _this);
        /**
         * Representation of the [[GlobalThemeConfiguration.headerBackground]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.headerBackground = new ThemeHeaderBackgroundConfig_1.ThemeHeaderBackgroundConfigField('headerBackground', _this);
        /**
         * Representation of the [[GlobalThemeConfiguration.highlight]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.highlight = new ThemeHighlightConfig_1.ThemeHighlightConfigField('highlight', _this);
        /**
         * Representation of the [[GlobalThemeConfiguration.landingPage]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.landingPage = new ThemeLandingPageConfig_1.ThemeLandingPageConfigField('landingPage', _this);
        /**
         * Representation of the [[GlobalThemeConfiguration.landingPageTile]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.landingPageTile = new ThemeLandingPageTileConfig_1.ThemeLandingPageTileConfigField('landingPageTile', _this);
        /**
         * Representation of the [[GlobalThemeConfiguration.login]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.login = new ThemeLoginConfig_1.ThemeLoginConfigField('login', _this);
        /**
         * Representation of the [[GlobalThemeConfiguration.logo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.logo = new ThemeLogoConfig_1.ThemeLogoConfigField('logo', _this);
        /**
         * Representation of the [[GlobalThemeConfiguration.menu]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.menu = new ThemeMenuConfig_1.ThemeMenuConfigField('menu', _this);
        /**
         * Representation of the [[GlobalThemeConfiguration.modulePicker]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.modulePicker = new ThemeModulePickerConfig_1.ThemeModulePickerConfigField('modulePicker', _this);
        /**
         * Representation of the [[GlobalThemeConfiguration.navigation]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.navigation = new ThemeNavigationConfig_1.ThemeNavigationConfigField('navigation', _this);
        /**
         * Representation of the [[GlobalThemeConfiguration.pageTitleColor]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.pageTitleColor = new ThemeColor_1.ThemeColorField('pageTitleColor', _this);
        /**
         * Representation of the [[GlobalThemeConfiguration.placemat]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.placemat = new ThemePlacematConfig_1.ThemePlacematConfigField('placemat', _this);
        /**
         * Representation of the [[GlobalThemeConfiguration.portlet]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.portlet = new ThemePortletConfig_1.ThemePortletConfigField('portlet', _this);
        /**
         * Representation of the [[GlobalThemeConfiguration.portletCloseIconScheme]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.portletCloseIconScheme = new core_1.ComplexTypeStringPropertyField('portletCloseIconScheme', _this, 'Edm.String');
        /**
         * Representation of the [[GlobalThemeConfiguration.primaryButton]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.primaryButton = new ThemeButtonConfig_1.ThemeButtonConfigField('primaryButton', _this);
        /**
         * Representation of the [[GlobalThemeConfiguration.searchBackgroundScheme]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.searchBackgroundScheme = new core_1.ComplexTypeStringPropertyField('searchBackgroundScheme', _this, 'Edm.String');
        /**
         * Representation of the [[GlobalThemeConfiguration.secondaryButton]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.secondaryButton = new ThemeButtonConfig_1.ThemeButtonConfigField('secondaryButton', _this);
        /**
         * Representation of the [[GlobalThemeConfiguration.table]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.table = new ThemeTableConfig_1.ThemeTableConfigField('table', _this);
        /**
         * Representation of the [[GlobalThemeConfiguration.tile]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.tile = new ThemeTileConfig_1.ThemeTileConfigField('tile', _this);
        /**
         * Representation of the [[GlobalThemeConfiguration.useContainerShadowColor]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.useContainerShadowColor = new core_1.ComplexTypeBooleanPropertyField('useContainerShadowColor', _this, 'Edm.Boolean');
        /**
         * Representation of the [[GlobalThemeConfiguration.useDownloadableFonts]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.useDownloadableFonts = new core_1.ComplexTypeBooleanPropertyField('useDownloadableFonts', _this, 'Edm.Boolean');
        /**
         * Representation of the [[GlobalThemeConfiguration.useModernStylesInLegacy]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.useModernStylesInLegacy = new core_1.ComplexTypeBooleanPropertyField('useModernStylesInLegacy', _this, 'Edm.Boolean');
        /**
         * Representation of the [[GlobalThemeConfiguration.useTextShadow]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.useTextShadow = new core_1.ComplexTypeBooleanPropertyField('useTextShadow', _this, 'Edm.Boolean');
        return _this;
    }
    return GlobalThemeConfigurationField;
}(core_1.ComplexTypeField));
exports.GlobalThemeConfigurationField = GlobalThemeConfigurationField;
var GlobalThemeConfiguration;
(function (GlobalThemeConfiguration) {
    function build(json) {
        return core_1.createComplexType(json, {
            accentColorBase: function (accentColorBase) { return ({ accentColorBase: ThemeColor_1.ThemeColor.build(accentColorBase) }); },
            background: function (background) { return ({ background: ThemeBackgroundConfig_1.ThemeBackgroundConfig.build(background) }); },
            containerShadowColor: function (containerShadowColor) { return ({ containerShadowColor: ThemeColor_1.ThemeColor.build(containerShadowColor) }); },
            content: function (content) { return ({ content: ThemeContentConfig_1.ThemeContentConfig.build(content) }); },
            diagram: function (diagram) { return ({ diagram: ThemeDiagramConfig_1.ThemeDiagramConfig.build(diagram) }); },
            external: function (external) { return ({ external: ThemeExternalConfig_1.ThemeExternalConfig.build(external) }); },
            footer: function (footer) { return ({ footer: ThemeFooterConfig_1.ThemeFooterConfig.build(footer) }); },
            headerBackground: function (headerBackground) { return ({ headerBackground: ThemeHeaderBackgroundConfig_1.ThemeHeaderBackgroundConfig.build(headerBackground) }); },
            highlight: function (highlight) { return ({ highlight: ThemeHighlightConfig_1.ThemeHighlightConfig.build(highlight) }); },
            landingPage: function (landingPage) { return ({ landingPage: ThemeLandingPageConfig_1.ThemeLandingPageConfig.build(landingPage) }); },
            landingPageTile: function (landingPageTile) { return ({ landingPageTile: ThemeLandingPageTileConfig_1.ThemeLandingPageTileConfig.build(landingPageTile) }); },
            login: function (login) { return ({ login: ThemeLoginConfig_1.ThemeLoginConfig.build(login) }); },
            logo: function (logo) { return ({ logo: ThemeLogoConfig_1.ThemeLogoConfig.build(logo) }); },
            menu: function (menu) { return ({ menu: ThemeMenuConfig_1.ThemeMenuConfig.build(menu) }); },
            modulePicker: function (modulePicker) { return ({ modulePicker: ThemeModulePickerConfig_1.ThemeModulePickerConfig.build(modulePicker) }); },
            navigation: function (navigation) { return ({ navigation: ThemeNavigationConfig_1.ThemeNavigationConfig.build(navigation) }); },
            pageTitleColor: function (pageTitleColor) { return ({ pageTitleColor: ThemeColor_1.ThemeColor.build(pageTitleColor) }); },
            placemat: function (placemat) { return ({ placemat: ThemePlacematConfig_1.ThemePlacematConfig.build(placemat) }); },
            portlet: function (portlet) { return ({ portlet: ThemePortletConfig_1.ThemePortletConfig.build(portlet) }); },
            portletCloseIconScheme: function (portletCloseIconScheme) { return ({ portletCloseIconScheme: core_1.edmToTs(portletCloseIconScheme, 'Edm.String') }); },
            primaryButton: function (primaryButton) { return ({ primaryButton: ThemeButtonConfig_1.ThemeButtonConfig.build(primaryButton) }); },
            searchBackgroundScheme: function (searchBackgroundScheme) { return ({ searchBackgroundScheme: core_1.edmToTs(searchBackgroundScheme, 'Edm.String') }); },
            secondaryButton: function (secondaryButton) { return ({ secondaryButton: ThemeButtonConfig_1.ThemeButtonConfig.build(secondaryButton) }); },
            table: function (table) { return ({ table: ThemeTableConfig_1.ThemeTableConfig.build(table) }); },
            tile: function (tile) { return ({ tile: ThemeTileConfig_1.ThemeTileConfig.build(tile) }); },
            useContainerShadowColor: function (useContainerShadowColor) { return ({ useContainerShadowColor: core_1.edmToTs(useContainerShadowColor, 'Edm.Boolean') }); },
            useDownloadableFonts: function (useDownloadableFonts) { return ({ useDownloadableFonts: core_1.edmToTs(useDownloadableFonts, 'Edm.Boolean') }); },
            useModernStylesInLegacy: function (useModernStylesInLegacy) { return ({ useModernStylesInLegacy: core_1.edmToTs(useModernStylesInLegacy, 'Edm.Boolean') }); },
            useTextShadow: function (useTextShadow) { return ({ useTextShadow: core_1.edmToTs(useTextShadow, 'Edm.Boolean') }); }
        });
    }
    GlobalThemeConfiguration.build = build;
})(GlobalThemeConfiguration = exports.GlobalThemeConfiguration || (exports.GlobalThemeConfiguration = {}));
//# sourceMappingURL=GlobalThemeConfiguration.js.map