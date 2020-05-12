/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ThemeColor, ThemeColorField } from './ThemeColor';
import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core';

/**
 * ThemeFooterConfig
 */
export interface ThemeFooterConfig {
  /**
   * logoScheme.
   * @nullable
   */
  logoScheme?: string;
  /**
   * textColor.
   * @nullable
   */
  textColor?: ThemeColor;
}

/**
 * @deprecated since v1.6.0. Use [[ThemeFooterConfig.build]] instead.
 */
export function createThemeFooterConfig(json: any): ThemeFooterConfig {
  return ThemeFooterConfig.build(json);
}

/**
 * ThemeFooterConfigField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ThemeFooterConfigField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[ThemeFooterConfig.logoScheme]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  logoScheme: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('logoScheme', this, 'Edm.String');
  /**
   * Representation of the [[ThemeFooterConfig.textColor]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  textColor: ThemeColorField<EntityT> = new ThemeColorField('textColor', this);
}

export namespace ThemeFooterConfig {
  export function build(json: { [keys: string]: FieldType }): ThemeFooterConfig {
    return createComplexType(json, {
      logoScheme: (logoScheme: string) => ({ logoScheme: edmToTs(logoScheme, 'Edm.String') }),
      textColor: (textColor: ThemeColor) => ({ textColor: ThemeColor.build(textColor) })
    });
  }
}
