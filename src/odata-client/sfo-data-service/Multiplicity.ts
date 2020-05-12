/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core';

/**
 * Multiplicity
 */
export interface Multiplicity {
  /**
   * name.
   * @nullable
   */
  name?: string;
  /**
   * symbolString.
   * @nullable
   */
  symbolString?: string;
}

/**
 * @deprecated since v1.6.0. Use [[Multiplicity.build]] instead.
 */
export function createMultiplicity(json: any): Multiplicity {
  return Multiplicity.build(json);
}

/**
 * MultiplicityField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class MultiplicityField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[Multiplicity.name]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  name: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('name', this, 'Edm.String');
  /**
   * Representation of the [[Multiplicity.symbolString]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  symbolString: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('symbolString', this, 'Edm.String');
}

export namespace Multiplicity {
  export function build(json: { [keys: string]: FieldType }): Multiplicity {
    return createComplexType(json, {
      name: (name: string) => ({ name: edmToTs(name, 'Edm.String') }),
      symbolString: (symbolString: string) => ({ symbolString: edmToTs(symbolString, 'Edm.String') })
    });
  }
}
