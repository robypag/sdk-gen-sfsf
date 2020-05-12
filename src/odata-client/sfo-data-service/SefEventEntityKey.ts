/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core';

/**
 * SefEventEntityKey
 */
export interface SefEventEntityKey {
  /**
   * description.
   */
  description: string;
  /**
   * descriptionMessageKey.
   */
  descriptionMessageKey: string;
  /**
   * name.
   */
  name: string;
  /**
   * type.
   */
  type: string;
}

/**
 * @deprecated since v1.6.0. Use [[SefEventEntityKey.build]] instead.
 */
export function createSefEventEntityKey(json: any): SefEventEntityKey {
  return SefEventEntityKey.build(json);
}

/**
 * SefEventEntityKeyField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class SefEventEntityKeyField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[SefEventEntityKey.description]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  description: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('description', this, 'Edm.String');
  /**
   * Representation of the [[SefEventEntityKey.descriptionMessageKey]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  descriptionMessageKey: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('descriptionMessageKey', this, 'Edm.String');
  /**
   * Representation of the [[SefEventEntityKey.name]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  name: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('name', this, 'Edm.String');
  /**
   * Representation of the [[SefEventEntityKey.type]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  type: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('type', this, 'Edm.String');
}

export namespace SefEventEntityKey {
  export function build(json: { [keys: string]: FieldType }): SefEventEntityKey {
    return createComplexType(json, {
      description: (description: string) => ({ description: edmToTs(description, 'Edm.String') }),
      descriptionMessageKey: (descriptionMessageKey: string) => ({ descriptionMessageKey: edmToTs(descriptionMessageKey, 'Edm.String') }),
      name: (name: string) => ({ name: edmToTs(name, 'Edm.String') }),
      type: (type: string) => ({ type: edmToTs(type, 'Edm.String') })
    });
  }
}
