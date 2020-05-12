/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SefExtEventMetaData, SefExtEventMetaDataField } from './SefExtEventMetaData';
import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core';

/**
 * SefExtEventMetaDataList
 */
export interface SefExtEventMetaDataList {
  /**
   * data.
   * @nullable
   */
  data?: SefExtEventMetaData;
  /**
   * status.
   * @nullable
   */
  status?: string;
  /**
   * statusMsg.
   * @nullable
   */
  statusMsg?: string;
}

/**
 * @deprecated since v1.6.0. Use [[SefExtEventMetaDataList.build]] instead.
 */
export function createSefExtEventMetaDataList(json: any): SefExtEventMetaDataList {
  return SefExtEventMetaDataList.build(json);
}

/**
 * SefExtEventMetaDataListField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class SefExtEventMetaDataListField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[SefExtEventMetaDataList.data]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  data: SefExtEventMetaDataField<EntityT> = new SefExtEventMetaDataField('data', this);
  /**
   * Representation of the [[SefExtEventMetaDataList.status]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  status: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('status', this, 'Edm.String');
  /**
   * Representation of the [[SefExtEventMetaDataList.statusMsg]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  statusMsg: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('statusMsg', this, 'Edm.String');
}

export namespace SefExtEventMetaDataList {
  export function build(json: { [keys: string]: FieldType }): SefExtEventMetaDataList {
    return createComplexType(json, {
      data: (data: SefExtEventMetaData) => ({ data: SefExtEventMetaData.build(data) }),
      status: (status: string) => ({ status: edmToTs(status, 'Edm.String') }),
      statusMsg: (statusMsg: string) => ({ statusMsg: edmToTs(statusMsg, 'Edm.String') })
    });
  }
}
