/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ThemeColor, ThemeColorField } from './ThemeColor';
import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core';

/**
 * ThemeContentConfig
 */
export interface ThemeContentConfig {
  /**
   * bgColor.
   * @nullable
   */
  bgColor?: ThemeColor;
  /**
   * bgColorVariant.
   * @nullable
   */
  bgColorVariant?: ThemeColor;
  /**
   * iconScheme.
   * @nullable
   */
  iconScheme?: string;
  /**
   * linkTextColor.
   * @nullable
   */
  linkTextColor?: ThemeColor;
  /**
   * textColor.
   * @nullable
   */
  textColor?: ThemeColor;
  /**
   * textColorVariant.
   * @nullable
   */
  textColorVariant?: ThemeColor;
}

/**
 * @deprecated since v1.6.0. Use [[ThemeContentConfig.build]] instead.
 */
export function createThemeContentConfig(json: any): ThemeContentConfig {
  return ThemeContentConfig.build(json);
}

/**
 * ThemeContentConfigField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ThemeContentConfigField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[ThemeContentConfig.bgColor]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bgColor: ThemeColorField<EntityT> = new ThemeColorField('bgColor', this);
  /**
   * Representation of the [[ThemeContentConfig.bgColorVariant]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bgColorVariant: ThemeColorField<EntityT> = new ThemeColorField('bgColorVariant', this);
  /**
   * Representation of the [[ThemeContentConfig.iconScheme]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  iconScheme: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('iconScheme', this, 'Edm.String');
  /**
   * Representation of the [[ThemeContentConfig.linkTextColor]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  linkTextColor: ThemeColorField<EntityT> = new ThemeColorField('linkTextColor', this);
  /**
   * Representation of the [[ThemeContentConfig.textColor]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  textColor: ThemeColorField<EntityT> = new ThemeColorField('textColor', this);
  /**
   * Representation of the [[ThemeContentConfig.textColorVariant]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  textColorVariant: ThemeColorField<EntityT> = new ThemeColorField('textColorVariant', this);
}

export namespace ThemeContentConfig {
  export function build(json: { [keys: string]: FieldType }): ThemeContentConfig {
    return createComplexType(json, {
      bgColor: (bgColor: ThemeColor) => ({ bgColor: ThemeColor.build(bgColor) }),
      bgColorVariant: (bgColorVariant: ThemeColor) => ({ bgColorVariant: ThemeColor.build(bgColorVariant) }),
      iconScheme: (iconScheme: string) => ({ iconScheme: edmToTs(iconScheme, 'Edm.String') }),
      linkTextColor: (linkTextColor: ThemeColor) => ({ linkTextColor: ThemeColor.build(linkTextColor) }),
      textColor: (textColor: ThemeColor) => ({ textColor: ThemeColor.build(textColor) }),
      textColorVariant: (textColorVariant: ThemeColor) => ({ textColorVariant: ThemeColor.build(textColorVariant) })
    });
  }
}
