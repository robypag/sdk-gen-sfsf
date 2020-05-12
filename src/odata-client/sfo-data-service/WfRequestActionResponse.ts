/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { ComplexTypeBigNumberPropertyField, ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core';

/**
 * WfRequestActionResponse
 */
export interface WfRequestActionResponse {
  /**
   * status.
   * @nullable
   */
  status?: string;
  /**
   * wfRequestId.
   * @nullable
   */
  wfRequestId?: BigNumber;
}

/**
 * @deprecated since v1.6.0. Use [[WfRequestActionResponse.build]] instead.
 */
export function createWfRequestActionResponse(json: any): WfRequestActionResponse {
  return WfRequestActionResponse.build(json);
}

/**
 * WfRequestActionResponseField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class WfRequestActionResponseField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[WfRequestActionResponse.status]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  status: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('status', this, 'Edm.String');
  /**
   * Representation of the [[WfRequestActionResponse.wfRequestId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  wfRequestId: ComplexTypeBigNumberPropertyField<EntityT> = new ComplexTypeBigNumberPropertyField('wfRequestId', this, 'Edm.Int64');
}

export namespace WfRequestActionResponse {
  export function build(json: { [keys: string]: FieldType }): WfRequestActionResponse {
    return createComplexType(json, {
      status: (status: string) => ({ status: edmToTs(status, 'Edm.String') }),
      wfRequestId: (wfRequestId: BigNumber) => ({ wfRequestId: edmToTs(wfRequestId, 'Edm.Int64') })
    });
  }
}
