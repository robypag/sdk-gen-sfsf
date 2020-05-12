/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ThemeColor, ThemeColorField } from './ThemeColor';
import { ComplexTypeField, Entity, createComplexType } from '@sap-cloud-sdk/core';

/**
 * ThemeLandingPageTileConfig
 */
export interface ThemeLandingPageTileConfig {
  /**
   * alertTextColor.
   * @nullable
   */
  alertTextColor?: ThemeColor;
  /**
   * bgColor.
   * @nullable
   */
  bgColor?: ThemeColor;
  /**
   * bodyTextColor.
   * @nullable
   */
  bodyTextColor?: ThemeColor;
  /**
   * borderColor.
   * @nullable
   */
  borderColor?: ThemeColor;
  /**
   * headerTextColor.
   * @nullable
   */
  headerTextColor?: ThemeColor;
  /**
   * iconColor.
   * @nullable
   */
  iconColor?: ThemeColor;
  /**
   * neutralTextColor.
   * @nullable
   */
  neutralTextColor?: ThemeColor;
}

/**
 * @deprecated since v1.6.0. Use [[ThemeLandingPageTileConfig.build]] instead.
 */
export function createThemeLandingPageTileConfig(json: any): ThemeLandingPageTileConfig {
  return ThemeLandingPageTileConfig.build(json);
}

/**
 * ThemeLandingPageTileConfigField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ThemeLandingPageTileConfigField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[ThemeLandingPageTileConfig.alertTextColor]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  alertTextColor: ThemeColorField<EntityT> = new ThemeColorField('alertTextColor', this);
  /**
   * Representation of the [[ThemeLandingPageTileConfig.bgColor]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bgColor: ThemeColorField<EntityT> = new ThemeColorField('bgColor', this);
  /**
   * Representation of the [[ThemeLandingPageTileConfig.bodyTextColor]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bodyTextColor: ThemeColorField<EntityT> = new ThemeColorField('bodyTextColor', this);
  /**
   * Representation of the [[ThemeLandingPageTileConfig.borderColor]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  borderColor: ThemeColorField<EntityT> = new ThemeColorField('borderColor', this);
  /**
   * Representation of the [[ThemeLandingPageTileConfig.headerTextColor]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  headerTextColor: ThemeColorField<EntityT> = new ThemeColorField('headerTextColor', this);
  /**
   * Representation of the [[ThemeLandingPageTileConfig.iconColor]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  iconColor: ThemeColorField<EntityT> = new ThemeColorField('iconColor', this);
  /**
   * Representation of the [[ThemeLandingPageTileConfig.neutralTextColor]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  neutralTextColor: ThemeColorField<EntityT> = new ThemeColorField('neutralTextColor', this);
}

export namespace ThemeLandingPageTileConfig {
  export function build(json: { [keys: string]: FieldType }): ThemeLandingPageTileConfig {
    return createComplexType(json, {
      alertTextColor: (alertTextColor: ThemeColor) => ({ alertTextColor: ThemeColor.build(alertTextColor) }),
      bgColor: (bgColor: ThemeColor) => ({ bgColor: ThemeColor.build(bgColor) }),
      bodyTextColor: (bodyTextColor: ThemeColor) => ({ bodyTextColor: ThemeColor.build(bodyTextColor) }),
      borderColor: (borderColor: ThemeColor) => ({ borderColor: ThemeColor.build(borderColor) }),
      headerTextColor: (headerTextColor: ThemeColor) => ({ headerTextColor: ThemeColor.build(headerTextColor) }),
      iconColor: (iconColor: ThemeColor) => ({ iconColor: ThemeColor.build(iconColor) }),
      neutralTextColor: (neutralTextColor: ThemeColor) => ({ neutralTextColor: ThemeColor.build(neutralTextColor) })
    });
  }
}
