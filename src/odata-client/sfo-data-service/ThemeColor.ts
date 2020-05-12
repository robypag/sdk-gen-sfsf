/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core';

/**
 * ThemeColor
 */
export interface ThemeColor {
  /**
   * value.
   * @nullable
   */
  value?: string;
}

/**
 * @deprecated since v1.6.0. Use [[ThemeColor.build]] instead.
 */
export function createThemeColor(json: any): ThemeColor {
  return ThemeColor.build(json);
}

/**
 * ThemeColorField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ThemeColorField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[ThemeColor.value]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  value: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('value', this, 'Edm.String');
}

export namespace ThemeColor {
  export function build(json: { [keys: string]: FieldType }): ThemeColor {
    return createComplexType(json, {
      value: (value: string) => ({ value: edmToTs(value, 'Edm.String') })
    });
  }
}
