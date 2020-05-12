/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SefEventEntityKey, SefEventEntityKeyField } from './SefEventEntityKey';
import { SefEventEntityParam, SefEventEntityParamField } from './SefEventEntityParam';
import { ComplexTypeBooleanPropertyField, ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core';

/**
 * SefExtEventMetaData
 */
export interface SefExtEventMetaData {
  /**
   * description.
   * @nullable
   */
  description?: string;
  /**
   * effectiveDated.
   * @nullable
   */
  effectiveDated?: boolean;
  /**
   * entity.
   * @nullable
   */
  entity?: string;
  /**
   * entityKeys.
   * @nullable
   */
  entityKeys?: SefEventEntityKey;
  /**
   * name.
   * @nullable
   */
  name?: string;
  /**
   * params.
   * @nullable
   */
  params?: SefEventEntityParam;
  /**
   * publisher.
   * @nullable
   */
  publisher?: string;
  /**
   * topic.
   * @nullable
   */
  topic?: string;
  /**
   * type.
   * @nullable
   */
  type?: string;
}

/**
 * @deprecated since v1.6.0. Use [[SefExtEventMetaData.build]] instead.
 */
export function createSefExtEventMetaData(json: any): SefExtEventMetaData {
  return SefExtEventMetaData.build(json);
}

/**
 * SefExtEventMetaDataField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class SefExtEventMetaDataField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[SefExtEventMetaData.description]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  description: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('description', this, 'Edm.String');
  /**
   * Representation of the [[SefExtEventMetaData.effectiveDated]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  effectiveDated: ComplexTypeBooleanPropertyField<EntityT> = new ComplexTypeBooleanPropertyField('effectiveDated', this, 'Edm.Boolean');
  /**
   * Representation of the [[SefExtEventMetaData.entity]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  entity: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('entity', this, 'Edm.String');
  /**
   * Representation of the [[SefExtEventMetaData.entityKeys]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  entityKeys: SefEventEntityKeyField<EntityT> = new SefEventEntityKeyField('entityKeys', this);
  /**
   * Representation of the [[SefExtEventMetaData.name]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  name: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('name', this, 'Edm.String');
  /**
   * Representation of the [[SefExtEventMetaData.params]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  params: SefEventEntityParamField<EntityT> = new SefEventEntityParamField('params', this);
  /**
   * Representation of the [[SefExtEventMetaData.publisher]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  publisher: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('publisher', this, 'Edm.String');
  /**
   * Representation of the [[SefExtEventMetaData.topic]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  topic: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('topic', this, 'Edm.String');
  /**
   * Representation of the [[SefExtEventMetaData.type]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  type: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('type', this, 'Edm.String');
}

export namespace SefExtEventMetaData {
  export function build(json: { [keys: string]: FieldType }): SefExtEventMetaData {
    return createComplexType(json, {
      description: (description: string) => ({ description: edmToTs(description, 'Edm.String') }),
      effectiveDated: (effectiveDated: boolean) => ({ effectiveDated: edmToTs(effectiveDated, 'Edm.Boolean') }),
      entity: (entity: string) => ({ entity: edmToTs(entity, 'Edm.String') }),
      entityKeys: (entityKeys: SefEventEntityKey) => ({ entityKeys: SefEventEntityKey.build(entityKeys) }),
      name: (name: string) => ({ name: edmToTs(name, 'Edm.String') }),
      params: (params: SefEventEntityParam) => ({ params: SefEventEntityParam.build(params) }),
      publisher: (publisher: string) => ({ publisher: edmToTs(publisher, 'Edm.String') }),
      topic: (topic: string) => ({ topic: edmToTs(topic, 'Edm.String') }),
      type: (type: string) => ({ type: edmToTs(type, 'Edm.String') })
    });
  }
}
