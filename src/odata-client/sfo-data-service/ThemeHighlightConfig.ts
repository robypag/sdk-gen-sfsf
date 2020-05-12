/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ThemeColor, ThemeColorField } from './ThemeColor';
import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core';

/**
 * ThemeHighlightConfig
 */
export interface ThemeHighlightConfig {
  /**
   * bgColor.
   * @nullable
   */
  bgColor?: ThemeColor;
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
}

/**
 * @deprecated since v1.6.0. Use [[ThemeHighlightConfig.build]] instead.
 */
export function createThemeHighlightConfig(json: any): ThemeHighlightConfig {
  return ThemeHighlightConfig.build(json);
}

/**
 * ThemeHighlightConfigField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ThemeHighlightConfigField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[ThemeHighlightConfig.bgColor]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bgColor: ThemeColorField<EntityT> = new ThemeColorField('bgColor', this);
  /**
   * Representation of the [[ThemeHighlightConfig.iconScheme]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  iconScheme: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('iconScheme', this, 'Edm.String');
  /**
   * Representation of the [[ThemeHighlightConfig.linkTextColor]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  linkTextColor: ThemeColorField<EntityT> = new ThemeColorField('linkTextColor', this);
  /**
   * Representation of the [[ThemeHighlightConfig.textColor]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  textColor: ThemeColorField<EntityT> = new ThemeColorField('textColor', this);
}

export namespace ThemeHighlightConfig {
  export function build(json: { [keys: string]: FieldType }): ThemeHighlightConfig {
    return createComplexType(json, {
      bgColor: (bgColor: ThemeColor) => ({ bgColor: ThemeColor.build(bgColor) }),
      iconScheme: (iconScheme: string) => ({ iconScheme: edmToTs(iconScheme, 'Edm.String') }),
      linkTextColor: (linkTextColor: ThemeColor) => ({ linkTextColor: ThemeColor.build(linkTextColor) }),
      textColor: (textColor: ThemeColor) => ({ textColor: ThemeColor.build(textColor) })
    });
  }
}
