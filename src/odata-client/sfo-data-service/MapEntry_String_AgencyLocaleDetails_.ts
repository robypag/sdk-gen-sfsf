/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core';

/**
 * MapEntry_String_AgencyLocaleDetails_
 */
export interface MapEntry_String_AgencyLocaleDetails_ {
  /**
   * key.
   * @nullable
   */
  key?: string;
}

/**
 * @deprecated since v1.6.0. Use [[MapEntry_String_AgencyLocaleDetails_.build]] instead.
 */
export function createMapEntry_String_AgencyLocaleDetails_(json: any): MapEntry_String_AgencyLocaleDetails_ {
  return MapEntry_String_AgencyLocaleDetails_.build(json);
}

/**
 * MapEntry_String_AgencyLocaleDetails_Field
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class MapEntry_String_AgencyLocaleDetails_Field<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[MapEntry_String_AgencyLocaleDetails_.key]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  key: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('key', this, 'Edm.String');
}

export namespace MapEntry_String_AgencyLocaleDetails_ {
  export function build(json: { [keys: string]: FieldType }): MapEntry_String_AgencyLocaleDetails_ {
    return createComplexType(json, {
      key: (key: string) => ({ key: edmToTs(key, 'Edm.String') })
    });
  }
}
