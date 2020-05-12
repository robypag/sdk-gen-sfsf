/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
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
import { ComplexTypeBooleanPropertyField, ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core';

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
export function createGlobalThemeConfiguration(json: any): GlobalThemeConfiguration {
  return GlobalThemeConfiguration.build(json);
}

/**
 * GlobalThemeConfigurationField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class GlobalThemeConfigurationField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[GlobalThemeConfiguration.accentColorBase]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  accentColorBase: ThemeColorField<EntityT> = new ThemeColorField('accentColorBase', this);
  /**
   * Representation of the [[GlobalThemeConfiguration.background]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  background: ThemeBackgroundConfigField<EntityT> = new ThemeBackgroundConfigField('background', this);
  /**
   * Representation of the [[GlobalThemeConfiguration.containerShadowColor]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  containerShadowColor: ThemeColorField<EntityT> = new ThemeColorField('containerShadowColor', this);
  /**
   * Representation of the [[GlobalThemeConfiguration.content]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  content: ThemeContentConfigField<EntityT> = new ThemeContentConfigField('content', this);
  /**
   * Representation of the [[GlobalThemeConfiguration.diagram]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  diagram: ThemeDiagramConfigField<EntityT> = new ThemeDiagramConfigField('diagram', this);
  /**
   * Representation of the [[GlobalThemeConfiguration.external]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  external: ThemeExternalConfigField<EntityT> = new ThemeExternalConfigField('external', this);
  /**
   * Representation of the [[GlobalThemeConfiguration.footer]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  footer: ThemeFooterConfigField<EntityT> = new ThemeFooterConfigField('footer', this);
  /**
   * Representation of the [[GlobalThemeConfiguration.headerBackground]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  headerBackground: ThemeHeaderBackgroundConfigField<EntityT> = new ThemeHeaderBackgroundConfigField('headerBackground', this);
  /**
   * Representation of the [[GlobalThemeConfiguration.highlight]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  highlight: ThemeHighlightConfigField<EntityT> = new ThemeHighlightConfigField('highlight', this);
  /**
   * Representation of the [[GlobalThemeConfiguration.landingPage]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  landingPage: ThemeLandingPageConfigField<EntityT> = new ThemeLandingPageConfigField('landingPage', this);
  /**
   * Representation of the [[GlobalThemeConfiguration.landingPageTile]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  landingPageTile: ThemeLandingPageTileConfigField<EntityT> = new ThemeLandingPageTileConfigField('landingPageTile', this);
  /**
   * Representation of the [[GlobalThemeConfiguration.login]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  login: ThemeLoginConfigField<EntityT> = new ThemeLoginConfigField('login', this);
  /**
   * Representation of the [[GlobalThemeConfiguration.logo]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  logo: ThemeLogoConfigField<EntityT> = new ThemeLogoConfigField('logo', this);
  /**
   * Representation of the [[GlobalThemeConfiguration.menu]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  menu: ThemeMenuConfigField<EntityT> = new ThemeMenuConfigField('menu', this);
  /**
   * Representation of the [[GlobalThemeConfiguration.modulePicker]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  modulePicker: ThemeModulePickerConfigField<EntityT> = new ThemeModulePickerConfigField('modulePicker', this);
  /**
   * Representation of the [[GlobalThemeConfiguration.navigation]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  navigation: ThemeNavigationConfigField<EntityT> = new ThemeNavigationConfigField('navigation', this);
  /**
   * Representation of the [[GlobalThemeConfiguration.pageTitleColor]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  pageTitleColor: ThemeColorField<EntityT> = new ThemeColorField('pageTitleColor', this);
  /**
   * Representation of the [[GlobalThemeConfiguration.placemat]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  placemat: ThemePlacematConfigField<EntityT> = new ThemePlacematConfigField('placemat', this);
  /**
   * Representation of the [[GlobalThemeConfiguration.portlet]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  portlet: ThemePortletConfigField<EntityT> = new ThemePortletConfigField('portlet', this);
  /**
   * Representation of the [[GlobalThemeConfiguration.portletCloseIconScheme]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  portletCloseIconScheme: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('portletCloseIconScheme', this, 'Edm.String');
  /**
   * Representation of the [[GlobalThemeConfiguration.primaryButton]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  primaryButton: ThemeButtonConfigField<EntityT> = new ThemeButtonConfigField('primaryButton', this);
  /**
   * Representation of the [[GlobalThemeConfiguration.searchBackgroundScheme]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  searchBackgroundScheme: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('searchBackgroundScheme', this, 'Edm.String');
  /**
   * Representation of the [[GlobalThemeConfiguration.secondaryButton]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  secondaryButton: ThemeButtonConfigField<EntityT> = new ThemeButtonConfigField('secondaryButton', this);
  /**
   * Representation of the [[GlobalThemeConfiguration.table]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  table: ThemeTableConfigField<EntityT> = new ThemeTableConfigField('table', this);
  /**
   * Representation of the [[GlobalThemeConfiguration.tile]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  tile: ThemeTileConfigField<EntityT> = new ThemeTileConfigField('tile', this);
  /**
   * Representation of the [[GlobalThemeConfiguration.useContainerShadowColor]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  useContainerShadowColor: ComplexTypeBooleanPropertyField<EntityT> = new ComplexTypeBooleanPropertyField('useContainerShadowColor', this, 'Edm.Boolean');
  /**
   * Representation of the [[GlobalThemeConfiguration.useDownloadableFonts]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  useDownloadableFonts: ComplexTypeBooleanPropertyField<EntityT> = new ComplexTypeBooleanPropertyField('useDownloadableFonts', this, 'Edm.Boolean');
  /**
   * Representation of the [[GlobalThemeConfiguration.useModernStylesInLegacy]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  useModernStylesInLegacy: ComplexTypeBooleanPropertyField<EntityT> = new ComplexTypeBooleanPropertyField('useModernStylesInLegacy', this, 'Edm.Boolean');
  /**
   * Representation of the [[GlobalThemeConfiguration.useTextShadow]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  useTextShadow: ComplexTypeBooleanPropertyField<EntityT> = new ComplexTypeBooleanPropertyField('useTextShadow', this, 'Edm.Boolean');
}

export namespace GlobalThemeConfiguration {
  export function build(json: { [keys: string]: FieldType }): GlobalThemeConfiguration {
    return createComplexType(json, {
      accentColorBase: (accentColorBase: ThemeColor) => ({ accentColorBase: ThemeColor.build(accentColorBase) }),
      background: (background: ThemeBackgroundConfig) => ({ background: ThemeBackgroundConfig.build(background) }),
      containerShadowColor: (containerShadowColor: ThemeColor) => ({ containerShadowColor: ThemeColor.build(containerShadowColor) }),
      content: (content: ThemeContentConfig) => ({ content: ThemeContentConfig.build(content) }),
      diagram: (diagram: ThemeDiagramConfig) => ({ diagram: ThemeDiagramConfig.build(diagram) }),
      external: (external: ThemeExternalConfig) => ({ external: ThemeExternalConfig.build(external) }),
      footer: (footer: ThemeFooterConfig) => ({ footer: ThemeFooterConfig.build(footer) }),
      headerBackground: (headerBackground: ThemeHeaderBackgroundConfig) => ({ headerBackground: ThemeHeaderBackgroundConfig.build(headerBackground) }),
      highlight: (highlight: ThemeHighlightConfig) => ({ highlight: ThemeHighlightConfig.build(highlight) }),
      landingPage: (landingPage: ThemeLandingPageConfig) => ({ landingPage: ThemeLandingPageConfig.build(landingPage) }),
      landingPageTile: (landingPageTile: ThemeLandingPageTileConfig) => ({ landingPageTile: ThemeLandingPageTileConfig.build(landingPageTile) }),
      login: (login: ThemeLoginConfig) => ({ login: ThemeLoginConfig.build(login) }),
      logo: (logo: ThemeLogoConfig) => ({ logo: ThemeLogoConfig.build(logo) }),
      menu: (menu: ThemeMenuConfig) => ({ menu: ThemeMenuConfig.build(menu) }),
      modulePicker: (modulePicker: ThemeModulePickerConfig) => ({ modulePicker: ThemeModulePickerConfig.build(modulePicker) }),
      navigation: (navigation: ThemeNavigationConfig) => ({ navigation: ThemeNavigationConfig.build(navigation) }),
      pageTitleColor: (pageTitleColor: ThemeColor) => ({ pageTitleColor: ThemeColor.build(pageTitleColor) }),
      placemat: (placemat: ThemePlacematConfig) => ({ placemat: ThemePlacematConfig.build(placemat) }),
      portlet: (portlet: ThemePortletConfig) => ({ portlet: ThemePortletConfig.build(portlet) }),
      portletCloseIconScheme: (portletCloseIconScheme: string) => ({ portletCloseIconScheme: edmToTs(portletCloseIconScheme, 'Edm.String') }),
      primaryButton: (primaryButton: ThemeButtonConfig) => ({ primaryButton: ThemeButtonConfig.build(primaryButton) }),
      searchBackgroundScheme: (searchBackgroundScheme: string) => ({ searchBackgroundScheme: edmToTs(searchBackgroundScheme, 'Edm.String') }),
      secondaryButton: (secondaryButton: ThemeButtonConfig) => ({ secondaryButton: ThemeButtonConfig.build(secondaryButton) }),
      table: (table: ThemeTableConfig) => ({ table: ThemeTableConfig.build(table) }),
      tile: (tile: ThemeTileConfig) => ({ tile: ThemeTileConfig.build(tile) }),
      useContainerShadowColor: (useContainerShadowColor: boolean) => ({ useContainerShadowColor: edmToTs(useContainerShadowColor, 'Edm.Boolean') }),
      useDownloadableFonts: (useDownloadableFonts: boolean) => ({ useDownloadableFonts: edmToTs(useDownloadableFonts, 'Edm.Boolean') }),
      useModernStylesInLegacy: (useModernStylesInLegacy: boolean) => ({ useModernStylesInLegacy: edmToTs(useModernStylesInLegacy, 'Edm.Boolean') }),
      useTextShadow: (useTextShadow: boolean) => ({ useTextShadow: edmToTs(useTextShadow, 'Edm.Boolean') })
    });
  }
}
