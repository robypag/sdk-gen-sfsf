/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, Entity, createComplexType } from '@sap-cloud-sdk/core';

/**
 * MapEntry_IscRetryFlowMetaData_IscRetryFlowStatusMetaData_
 */
export interface MapEntry_IscRetryFlowMetaData_IscRetryFlowStatusMetaData_ {
}

/**
 * @deprecated since v1.6.0. Use [[MapEntry_IscRetryFlowMetaData_IscRetryFlowStatusMetaData_.build]] instead.
 */
export function createMapEntry_IscRetryFlowMetaData_IscRetryFlowStatusMetaData_(json: any): MapEntry_IscRetryFlowMetaData_IscRetryFlowStatusMetaData_ {
  return MapEntry_IscRetryFlowMetaData_IscRetryFlowStatusMetaData_.build(json);
}

/**
 * MapEntry_IscRetryFlowMetaData_IscRetryFlowStatusMetaData_Field
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class MapEntry_IscRetryFlowMetaData_IscRetryFlowStatusMetaData_Field<EntityT extends Entity> extends ComplexTypeField<EntityT> {
}

export namespace MapEntry_IscRetryFlowMetaData_IscRetryFlowStatusMetaData_ {
  export function build(json: { [keys: string]: FieldType }): MapEntry_IscRetryFlowMetaData_IscRetryFlowStatusMetaData_ {
    return createComplexType(json, {

    });
  }
}
