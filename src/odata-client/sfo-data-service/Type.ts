/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core';

/**
 * Type
 */
export interface Type {
  /**
   * name.
   * @nullable
   */
  name?: string;
  /**
   * path.
   */
  path: string;
}

/**
 * @deprecated since v1.6.0. Use [[Type.build]] instead.
 */
export function createType(json: any): Type {
  return Type.build(json);
}

/**
 * TypeField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class TypeField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[Type.name]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  name: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('name', this, 'Edm.String');
  /**
   * Representation of the [[Type.path]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  path: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('path', this, 'Edm.String');
}

export namespace Type {
  export function build(json: { [keys: string]: FieldType }): Type {
    return createComplexType(json, {
      name: (name: string) => ({ name: edmToTs(name, 'Edm.String') }),
      path: (path: string) => ({ path: edmToTs(path, 'Edm.String') })
    });
  }
}
