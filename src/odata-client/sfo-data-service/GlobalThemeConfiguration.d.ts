import { ThemeColor, ThemeColorField } from './ThemeColor';
import { ThemeBackgroundConfig, ThemeBackgroundConfigField } from './ThemeBackgroundConfig';
import { ThemeContentConfig, ThemeContentConfigField } from './ThemeContentConfig';
import { ThemeDiagramConfig, ThemeDiagramConfigField } from './ThemeDiagramConfig';
import { ThemeExternalConfig, ThemeExternalConfigField } from './ThemeExternalConfig';
import { ThemeFooterConfig, ThemeFooterConfigField } from './ThemeFooterConfig';
import { ThemeHeaderBackgroundConfig, ThemeHeaderBackgroundConfigField } from './ThemeHeaderBackgroundConfig';
import { ThemeHighlightConfig, ThemeHighlightConfigField } from './ThemeHighlightConfig';
import { ThemeLandingPageConfig, ThemeLandingPageConfigField } from './ThemeLandingPageConfig';
import { ThemeLandingPageTileConfig, ThemeLandingPageTileConfigField } from './ThemeLandingPageTileConfig';
import { ThemeLoginConfig, ThemeLoginConfigField } from './ThemeLoginConfig';
import { ThemeLogoConfig, ThemeLogoConfigField } from './ThemeLogoConfig';
import { ThemeMenuConfig, ThemeMenuConfigField } from './ThemeMenuConfig';
import { ThemeModulePickerConfig, ThemeModulePickerConfigField } from './ThemeModulePickerConfig';
import { ThemeNavigationConfig, ThemeNavigationConfigField } from './ThemeNavigationConfig';
import { ThemePlacematConfig, ThemePlacematConfigField } from './ThemePlacematConfig';
import { ThemePortletConfig, ThemePortletConfigField } from './ThemePortletConfig';
import { ThemeButtonConfig, ThemeButtonConfigField } from './ThemeButtonConfig';
import { ThemeTableConfig, ThemeTableConfigField } from './ThemeTableConfig';
import { ThemeTileConfig, ThemeTileConfigField } from './ThemeTileConfig';
import { ComplexTypeBooleanPropertyField, ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core';
/**
 * GlobalThemeConfiguration
 */
export interface GlobalThemeConfiguration {
    /**
     * accentColorBase.
     * @nullable
     */
    accentColorBase?: ThemeColor;
    /**
     * background.
     * @nullable
     */
    background?: ThemeBackgroundConfig;
    /**
     * containerShadowColor.
     * @nullable
     */
    containerShadowColor?: ThemeColor;
    /**
     * content.
     * @nullable
     */
    content?: ThemeContentConfig;
    /**
     * diagram.
     * @nullable
     */
    diagram?: ThemeDiagramConfig;
    /**
     * external.
     * @nullable
     */
    external?: ThemeExternalConfig;
    /**
     * footer.
     * @nullable
     */
    footer?: ThemeFooterConfig;
    /**
     * headerBackground.
     * @nullable
     */
    headerBackground?: ThemeHeaderBackgroundConfig;
    /**
     * highlight.
     * @nullable
     */
    highlight?: ThemeHighlightConfig;
    /**
     * landingPage.
     * @nullable
     */
    landingPage?: ThemeLandingPageConfig;
    /**
     * landingPageTile.
     * @nullable
     */
    landingPageTile?: ThemeLandingPageTileConfig;
    /**
     * login.
     * @nullable
     */
    login?: ThemeLoginConfig;
    /**
     * logo.
     * @nullable
     */
    logo?: ThemeLogoConfig;
    /**
     * menu.
     * @nullable
     */
    menu?: ThemeMenuConfig;
    /**
     * modulePicker.
     * @nullable
     */
    modulePicker?: ThemeModulePickerConfig;
    /**
     * navigation.
     * @nullable
     */
    navigation?: ThemeNavigationConfig;
    /**
     * pageTitleColor.
     * @nullable
     */
    pageTitleColor?: ThemeColor;
    /**
     * placemat.
     * @nullable
     */
    placemat?: ThemePlacematConfig;
    /**
     * portlet.
     * @nullable
     */
    portlet?: ThemePortletConfig;
    /**
     * portletCloseIconScheme.
     * @nullable
     */
    portletCloseIconScheme?: string;
    /**
     * primaryButton.
     * @nullable
     */
    primaryButton?: ThemeButtonConfig;
    /**
     * searchBackgroundScheme.
     * @nullable
     */
    searchBackgroundScheme?: string;
    /**
     * secondaryButton.
     * @nullable
     */
    secondaryButton?: ThemeButtonConfig;
    /**
     * table.
     * @nullable
     */
    table?: ThemeTableConfig;
    /**
     * tile.
     * @nullable
     */
    tile?: ThemeTileConfig;
    /**
     * useContainerShadowColor.
     * @nullable
     */
    useContainerShadowColor?: boolean;
    /**
     * useDownloadableFonts.
     * @nullable
     */
    useDownloadableFonts?: boolean;
    /**
     * useModernStylesInLegacy.
     * @nullable
     */
    useModernStylesInLegacy?: boolean;
    /**
     * useTextShadow.
     * @nullable
     */
    useTextShadow?: boolean;
}
/**
 * @deprecated since v1.6.0. Use [[GlobalThemeConfiguration.build]] instead.
 */
export declare function createGlobalThemeConfiguration(json: any): GlobalThemeConfiguration;
/**
 * GlobalThemeConfigurationField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class GlobalThemeConfigurationField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[GlobalThemeConfiguration.accentColorBase]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    accentColorBase: ThemeColorField<EntityT>;
    /**
     * Representation of the [[GlobalThemeConfiguration.background]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    background: ThemeBackgroundConfigField<EntityT>;
    /**
     * Representation of the [[GlobalThemeConfiguration.containerShadowColor]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    containerShadowColor: ThemeColorField<EntityT>;
    /**
     * Representation of the [[GlobalThemeConfiguration.content]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    content: ThemeContentConfigField<EntityT>;
    /**
     * Representation of the [[GlobalThemeConfiguration.diagram]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    diagram: ThemeDiagramConfigField<EntityT>;
    /**
     * Representation of the [[GlobalThemeConfiguration.external]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    external: ThemeExternalConfigField<EntityT>;
    /**
     * Representation of the [[GlobalThemeConfiguration.footer]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    footer: ThemeFooterConfigField<EntityT>;
    /**
     * Representation of the [[GlobalThemeConfiguration.headerBackground]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    headerBackground: ThemeHeaderBackgroundConfigField<EntityT>;
    /**
     * Representation of the [[GlobalThemeConfiguration.highlight]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    highlight: ThemeHighlightConfigField<EntityT>;
    /**
     * Representation of the [[GlobalThemeConfiguration.landingPage]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    landingPage: ThemeLandingPageConfigField<EntityT>;
    /**
     * Representation of the [[GlobalThemeConfiguration.landingPageTile]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    landingPageTile: ThemeLandingPageTileConfigField<EntityT>;
    /**
     * Representation of the [[GlobalThemeConfiguration.login]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    login: ThemeLoginConfigField<EntityT>;
    /**
     * Representation of the [[GlobalThemeConfiguration.logo]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    logo: ThemeLogoConfigField<EntityT>;
    /**
     * Representation of the [[GlobalThemeConfiguration.menu]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    menu: ThemeMenuConfigField<EntityT>;
    /**
     * Representation of the [[GlobalThemeConfiguration.modulePicker]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    modulePicker: ThemeModulePickerConfigField<EntityT>;
    /**
     * Representation of the [[GlobalThemeConfiguration.navigation]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    navigation: ThemeNavigationConfigField<EntityT>;
    /**
     * Representation of the [[GlobalThemeConfiguration.pageTitleColor]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    pageTitleColor: ThemeColorField<EntityT>;
    /**
     * Representation of the [[GlobalThemeConfiguration.placemat]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    placemat: ThemePlacematConfigField<EntityT>;
    /**
     * Representation of the [[GlobalThemeConfiguration.portlet]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    portlet: ThemePortletConfigField<EntityT>;
    /**
     * Representation of the [[GlobalThemeConfiguration.portletCloseIconScheme]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    portletCloseIconScheme: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[GlobalThemeConfiguration.primaryButton]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    primaryButton: ThemeButtonConfigField<EntityT>;
    /**
     * Representation of the [[GlobalThemeConfiguration.searchBackgroundScheme]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    searchBackgroundScheme: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[GlobalThemeConfiguration.secondaryButton]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    secondaryButton: ThemeButtonConfigField<EntityT>;
    /**
     * Representation of the [[GlobalThemeConfiguration.table]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    table: ThemeTableConfigField<EntityT>;
    /**
     * Representation of the [[GlobalThemeConfiguration.tile]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    tile: ThemeTileConfigField<EntityT>;
    /**
     * Representation of the [[GlobalThemeConfiguration.useContainerShadowColor]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    useContainerShadowColor: ComplexTypeBooleanPropertyField<EntityT>;
    /**
     * Representation of the [[GlobalThemeConfiguration.useDownloadableFonts]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    useDownloadableFonts: ComplexTypeBooleanPropertyField<EntityT>;
    /**
     * Representation of the [[GlobalThemeConfiguration.useModernStylesInLegacy]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    useModernStylesInLegacy: ComplexTypeBooleanPropertyField<EntityT>;
    /**
     * Representation of the [[GlobalThemeConfiguration.useTextShadow]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    useTextShadow: ComplexTypeBooleanPropertyField<EntityT>;
}
export declare namespace GlobalThemeConfiguration {
    function build(json: {
        [keys: string]: FieldType;
    }): GlobalThemeConfiguration;
}
//# sourceMappingURL=GlobalThemeConfiguration.d.ts.map