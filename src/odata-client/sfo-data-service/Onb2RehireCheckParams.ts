/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { MapEntry_String_String_, MapEntry_String_String_Field } from './MapEntry_String_String_';
import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core';

/**
 * Onb2RehireCheckParams
 */
export interface Onb2RehireCheckParams {
  /**
   * dateOfBirth.
   * @nullable
   */
  dateOfBirth?: string;
  /**
   * firstName.
   * @nullable
   */
  firstName?: string;
  /**
   * lastName.
   * @nullable
   */
  lastName?: string;
  /**
   * nationalIdDetails.
   * @nullable
   */
  nationalIdDetails?: MapEntry_String_String_;
}

/**
 * @deprecated since v1.6.0. Use [[Onb2RehireCheckParams.build]] instead.
 */
export function createOnb2RehireCheckParams(json: any): Onb2RehireCheckParams {
  return Onb2RehireCheckParams.build(json);
}

/**
 * Onb2RehireCheckParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class Onb2RehireCheckParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[Onb2RehireCheckParams.dateOfBirth]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  dateOfBirth: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('dateOfBirth', this, 'Edm.String');
  /**
   * Representation of the [[Onb2RehireCheckParams.firstName]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  firstName: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('firstName', this, 'Edm.String');
  /**
   * Representation of the [[Onb2RehireCheckParams.lastName]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lastName: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('lastName', this, 'Edm.String');
  /**
   * Representation of the [[Onb2RehireCheckParams.nationalIdDetails]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  nationalIdDetails: MapEntry_String_String_Field<EntityT> = new MapEntry_String_String_Field('nationalIdDetails', this);
}

export namespace Onb2RehireCheckParams {
  export function build(json: { [keys: string]: FieldType }): Onb2RehireCheckParams {
    return createComplexType(json, {
      dateOfBirth: (dateOfBirth: string) => ({ dateOfBirth: edmToTs(dateOfBirth, 'Edm.String') }),
      firstName: (firstName: string) => ({ firstName: edmToTs(firstName, 'Edm.String') }),
      lastName: (lastName: string) => ({ lastName: edmToTs(lastName, 'Edm.String') }),
      nationalIdDetails: (nationalIdDetails: MapEntry_String_String_) => ({ nationalIdDetails: MapEntry_String_String_.build(nationalIdDetails) })
    });
  }
}
