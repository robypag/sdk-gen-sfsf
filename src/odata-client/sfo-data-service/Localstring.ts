/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { MapEntry_String_String_, MapEntry_String_String_Field } from './MapEntry_String_String_';
import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core';

/**
 * Localstring
 */
export interface Localstring {
  /**
   * labels.
   * @nullable
   */
  labels?: MapEntry_String_String_;
  /**
   * mimeType.
   * @nullable
   */
  mimeType?: string;
}

/**
 * @deprecated since v1.6.0. Use [[Localstring.build]] instead.
 */
export function createLocalstring(json: any): Localstring {
  return Localstring.build(json);
}

/**
 * LocalstringField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class LocalstringField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[Localstring.labels]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  labels: MapEntry_String_String_Field<EntityT> = new MapEntry_String_String_Field('labels', this);
  /**
   * Representation of the [[Localstring.mimeType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  mimeType: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('mimeType', this, 'Edm.String');
}

export namespace Localstring {
  export function build(json: { [keys: string]: FieldType }): Localstring {
    return createComplexType(json, {
      labels: (labels: MapEntry_String_String_) => ({ labels: MapEntry_String_String_.build(labels) }),
      mimeType: (mimeType: string) => ({ mimeType: edmToTs(mimeType, 'Edm.String') })
    });
  }
}
