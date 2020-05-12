/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ThemeColor, ThemeColorField } from './ThemeColor';
import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core';

/**
 * ThemeTileConfig
 */
export interface ThemeTileConfig {
  /**
   * accentBodyBGColor.
   * @nullable
   */
  accentBodyBgColor?: ThemeColor;
  /**
   * accentBodyIconScheme.
   * @nullable
   */
  accentBodyIconScheme?: string;
  /**
   * accentBodyTextColor.
   * @nullable
   */
  accentBodyTextColor?: ThemeColor;
  /**
   * accentHeaderBGColor.
   * @nullable
   */
  accentHeaderBgColor?: ThemeColor;
  /**
   * accentHeaderIconScheme.
   * @nullable
   */
  accentHeaderIconScheme?: string;
  /**
   * accentHeaderLinkColor.
   * @nullable
   */
  accentHeaderLinkColor?: ThemeColor;
  /**
   * accentHeaderTextColor.
   * @nullable
   */
  accentHeaderTextColor?: ThemeColor;
  /**
   * accentLinkColor.
   * @nullable
   */
  accentLinkColor?: ThemeColor;
  /**
   * alertBadgeBGColor.
   * @nullable
   */
  alertBadgeBgColor?: ThemeColor;
  /**
   * alertBadgeTextColor.
   * @nullable
   */
  alertBadgeTextColor?: ThemeColor;
  /**
   * alertTextColor.
   * @nullable
   */
  alertTextColor?: ThemeColor;
  /**
   * bodyBGColor.
   * @nullable
   */
  bodyBgColor?: ThemeColor;
  /**
   * bodyIconScheme.
   * @nullable
   */
  bodyIconScheme?: string;
  /**
   * bodyTextColor.
   * @nullable
   */
  bodyTextColor?: ThemeColor;
  /**
   * headerBGColor.
   * @nullable
   */
  headerBgColor?: ThemeColor;
  /**
   * headerIconScheme.
   * @nullable
   */
  headerIconScheme?: string;
  /**
   * headerLinkColor.
   * @nullable
   */
  headerLinkColor?: ThemeColor;
  /**
   * headerTextColor.
   * @nullable
   */
  headerTextColor?: ThemeColor;
  /**
   * linkColor.
   * @nullable
   */
  linkColor?: ThemeColor;
}

/**
 * @deprecated since v1.6.0. Use [[ThemeTileConfig.build]] instead.
 */
export function createThemeTileConfig(json: any): ThemeTileConfig {
  return ThemeTileConfig.build(json);
}

/**
 * ThemeTileConfigField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ThemeTileConfigField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[ThemeTileConfig.accentBodyBgColor]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  accentBodyBgColor: ThemeColorField<EntityT> = new ThemeColorField('accentBodyBGColor', this);
  /**
   * Representation of the [[ThemeTileConfig.accentBodyIconScheme]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  accentBodyIconScheme: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('accentBodyIconScheme', this, 'Edm.String');
  /**
   * Representation of the [[ThemeTileConfig.accentBodyTextColor]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  accentBodyTextColor: ThemeColorField<EntityT> = new ThemeColorField('accentBodyTextColor', this);
  /**
   * Representation of the [[ThemeTileConfig.accentHeaderBgColor]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  accentHeaderBgColor: ThemeColorField<EntityT> = new ThemeColorField('accentHeaderBGColor', this);
  /**
   * Representation of the [[ThemeTileConfig.accentHeaderIconScheme]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  accentHeaderIconScheme: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('accentHeaderIconScheme', this, 'Edm.String');
  /**
   * Representation of the [[ThemeTileConfig.accentHeaderLinkColor]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  accentHeaderLinkColor: ThemeColorField<EntityT> = new ThemeColorField('accentHeaderLinkColor', this);
  /**
   * Representation of the [[ThemeTileConfig.accentHeaderTextColor]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  accentHeaderTextColor: ThemeColorField<EntityT> = new ThemeColorField('accentHeaderTextColor', this);
  /**
   * Representation of the [[ThemeTileConfig.accentLinkColor]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  accentLinkColor: ThemeColorField<EntityT> = new ThemeColorField('accentLinkColor', this);
  /**
   * Representation of the [[ThemeTileConfig.alertBadgeBgColor]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  alertBadgeBgColor: ThemeColorField<EntityT> = new ThemeColorField('alertBadgeBGColor', this);
  /**
   * Representation of the [[ThemeTileConfig.alertBadgeTextColor]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  alertBadgeTextColor: ThemeColorField<EntityT> = new ThemeColorField('alertBadgeTextColor', this);
  /**
   * Representation of the [[ThemeTileConfig.alertTextColor]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  alertTextColor: ThemeColorField<EntityT> = new ThemeColorField('alertTextColor', this);
  /**
   * Representation of the [[ThemeTileConfig.bodyBgColor]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bodyBgColor: ThemeColorField<EntityT> = new ThemeColorField('bodyBGColor', this);
  /**
   * Representation of the [[ThemeTileConfig.bodyIconScheme]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bodyIconScheme: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('bodyIconScheme', this, 'Edm.String');
  /**
   * Representation of the [[ThemeTileConfig.bodyTextColor]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bodyTextColor: ThemeColorField<EntityT> = new ThemeColorField('bodyTextColor', this);
  /**
   * Representation of the [[ThemeTileConfig.headerBgColor]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  headerBgColor: ThemeColorField<EntityT> = new ThemeColorField('headerBGColor', this);
  /**
   * Representation of the [[ThemeTileConfig.headerIconScheme]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  headerIconScheme: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('headerIconScheme', this, 'Edm.String');
  /**
   * Representation of the [[ThemeTileConfig.headerLinkColor]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  headerLinkColor: ThemeColorField<EntityT> = new ThemeColorField('headerLinkColor', this);
  /**
   * Representation of the [[ThemeTileConfig.headerTextColor]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  headerTextColor: ThemeColorField<EntityT> = new ThemeColorField('headerTextColor', this);
  /**
   * Representation of the [[ThemeTileConfig.linkColor]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  linkColor: ThemeColorField<EntityT> = new ThemeColorField('linkColor', this);
}

export namespace ThemeTileConfig {
  export function build(json: { [keys: string]: FieldType }): ThemeTileConfig {
    return createComplexType(json, {
      accentBodyBGColor: (accentBodyBgColor: ThemeColor) => ({ accentBodyBgColor: ThemeColor.build(accentBodyBgColor) }),
      accentBodyIconScheme: (accentBodyIconScheme: string) => ({ accentBodyIconScheme: edmToTs(accentBodyIconScheme, 'Edm.String') }),
      accentBodyTextColor: (accentBodyTextColor: ThemeColor) => ({ accentBodyTextColor: ThemeColor.build(accentBodyTextColor) }),
      accentHeaderBGColor: (accentHeaderBgColor: ThemeColor) => ({ accentHeaderBgColor: ThemeColor.build(accentHeaderBgColor) }),
      accentHeaderIconScheme: (accentHeaderIconScheme: string) => ({ accentHeaderIconScheme: edmToTs(accentHeaderIconScheme, 'Edm.String') }),
      accentHeaderLinkColor: (accentHeaderLinkColor: ThemeColor) => ({ accentHeaderLinkColor: ThemeColor.build(accentHeaderLinkColor) }),
      accentHeaderTextColor: (accentHeaderTextColor: ThemeColor) => ({ accentHeaderTextColor: ThemeColor.build(accentHeaderTextColor) }),
      accentLinkColor: (accentLinkColor: ThemeColor) => ({ accentLinkColor: ThemeColor.build(accentLinkColor) }),
      alertBadgeBGColor: (alertBadgeBgColor: ThemeColor) => ({ alertBadgeBgColor: ThemeColor.build(alertBadgeBgColor) }),
      alertBadgeTextColor: (alertBadgeTextColor: ThemeColor) => ({ alertBadgeTextColor: ThemeColor.build(alertBadgeTextColor) }),
      alertTextColor: (alertTextColor: ThemeColor) => ({ alertTextColor: ThemeColor.build(alertTextColor) }),
      bodyBGColor: (bodyBgColor: ThemeColor) => ({ bodyBgColor: ThemeColor.build(bodyBgColor) }),
      bodyIconScheme: (bodyIconScheme: string) => ({ bodyIconScheme: edmToTs(bodyIconScheme, 'Edm.String') }),
      bodyTextColor: (bodyTextColor: ThemeColor) => ({ bodyTextColor: ThemeColor.build(bodyTextColor) }),
      headerBGColor: (headerBgColor: ThemeColor) => ({ headerBgColor: ThemeColor.build(headerBgColor) }),
      headerIconScheme: (headerIconScheme: string) => ({ headerIconScheme: edmToTs(headerIconScheme, 'Edm.String') }),
      headerLinkColor: (headerLinkColor: ThemeColor) => ({ headerLinkColor: ThemeColor.build(headerLinkColor) }),
      headerTextColor: (headerTextColor: ThemeColor) => ({ headerTextColor: ThemeColor.build(headerTextColor) }),
      linkColor: (linkColor: ThemeColor) => ({ linkColor: ThemeColor.build(linkColor) })
    });
  }
}
