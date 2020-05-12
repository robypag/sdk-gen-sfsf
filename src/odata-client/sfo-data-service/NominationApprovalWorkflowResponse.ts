/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { ComplexTypeBigNumberPropertyField, ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core';

/**
 * NominationApprovalWorkflowResponse
 */
export interface NominationApprovalWorkflowResponse {
  /**
   * message.
   * @nullable
   */
  message?: string;
  /**
   * nomineeId.
   * @nullable
   */
  nomineeId?: BigNumber;
  /**
   * status.
   * @nullable
   */
  status?: string;
}

/**
 * @deprecated since v1.6.0. Use [[NominationApprovalWorkflowResponse.build]] instead.
 */
export function createNominationApprovalWorkflowResponse(json: any): NominationApprovalWorkflowResponse {
  return NominationApprovalWorkflowResponse.build(json);
}

/**
 * NominationApprovalWorkflowResponseField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class NominationApprovalWorkflowResponseField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[NominationApprovalWorkflowResponse.message]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  message: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('message', this, 'Edm.String');
  /**
   * Representation of the [[NominationApprovalWorkflowResponse.nomineeId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  nomineeId: ComplexTypeBigNumberPropertyField<EntityT> = new ComplexTypeBigNumberPropertyField('nomineeId', this, 'Edm.Int64');
  /**
   * Representation of the [[NominationApprovalWorkflowResponse.status]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  status: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('status', this, 'Edm.String');
}

export namespace NominationApprovalWorkflowResponse {
  export function build(json: { [keys: string]: FieldType }): NominationApprovalWorkflowResponse {
    return createComplexType(json, {
      message: (message: string) => ({ message: edmToTs(message, 'Edm.String') }),
      nomineeId: (nomineeId: BigNumber) => ({ nomineeId: edmToTs(nomineeId, 'Edm.Int64') }),
      status: (status: string) => ({ status: edmToTs(status, 'Edm.String') })
    });
  }
}
