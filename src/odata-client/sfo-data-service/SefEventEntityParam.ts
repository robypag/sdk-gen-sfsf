/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeBooleanPropertyField, ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core';

/**
 * SefEventEntityParam
 */
export interface SefEventEntityParam {
  /**
   * description.
   */
  description: string;
  /**
   * descriptionMessageKey.
   */
  descriptionMessageKey: string;
  /**
   * hasValueAlways.
   * @nullable
   */
  hasValueAlways?: boolean;
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
 * @deprecated since v1.6.0. Use [[SefEventEntityParam.build]] instead.
 */
export function createSefEventEntityParam(json: any): SefEventEntityParam {
  return SefEventEntityParam.build(json);
}

/**
 * SefEventEntityParamField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class SefEventEntityParamField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[SefEventEntityParam.description]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  description: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('description', this, 'Edm.String');
  /**
   * Representation of the [[SefEventEntityParam.descriptionMessageKey]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  descriptionMessageKey: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('descriptionMessageKey', this, 'Edm.String');
  /**
   * Representation of the [[SefEventEntityParam.hasValueAlways]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  hasValueAlways: ComplexTypeBooleanPropertyField<EntityT> = new ComplexTypeBooleanPropertyField('hasValueAlways', this, 'Edm.Boolean');
  /**
   * Representation of the [[SefEventEntityParam.name]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  name: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('name', this, 'Edm.String');
  /**
   * Representation of the [[SefEventEntityParam.type]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  type: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('type', this, 'Edm.String');
}

export namespace SefEventEntityParam {
  export function build(json: { [keys: string]: FieldType }): SefEventEntityParam {
    return createComplexType(json, {
      description: (description: string) => ({ description: edmToTs(description, 'Edm.String') }),
      descriptionMessageKey: (descriptionMessageKey: string) => ({ descriptionMessageKey: edmToTs(descriptionMessageKey, 'Edm.String') }),
      hasValueAlways: (hasValueAlways: boolean) => ({ hasValueAlways: edmToTs(hasValueAlways, 'Edm.Boolean') }),
      name: (name: string) => ({ name: edmToTs(name, 'Edm.String') }),
      type: (type: string) => ({ type: edmToTs(type, 'Edm.String') })
    });
  }
}
