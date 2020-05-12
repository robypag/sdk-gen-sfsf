/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core';

/**
 * ThemeUrl
 */
export interface ThemeUrl {
  /**
   * value.
   * @nullable
   */
  value?: string;
}

/**
 * @deprecated since v1.6.0. Use [[ThemeUrl.build]] instead.
 */
export function createThemeUrl(json: any): ThemeUrl {
  return ThemeUrl.build(json);
}

/**
 * ThemeUrlField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ThemeUrlField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[ThemeUrl.value]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  value: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('value', this, 'Edm.String');
}

export namespace ThemeUrl {
  export function build(json: { [keys: string]: FieldType }): ThemeUrl {
    return createComplexType(json, {
      value: (value: string) => ({ value: edmToTs(value, 'Edm.String') })
    });
  }
}
