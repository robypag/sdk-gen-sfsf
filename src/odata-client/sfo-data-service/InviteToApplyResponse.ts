/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core';

/**
 * InviteToApplyResponse
 */
export interface InviteToApplyResponse {
  /**
   * candidateId.
   * @nullable
   */
  candidateId?: string;
  /**
   * message.
   * @nullable
   */
  message?: string;
  /**
   * status.
   * @nullable
   */
  status?: string;
}

/**
 * @deprecated since v1.6.0. Use [[InviteToApplyResponse.build]] instead.
 */
export function createInviteToApplyResponse(json: any): InviteToApplyResponse {
  return InviteToApplyResponse.build(json);
}

/**
 * InviteToApplyResponseField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class InviteToApplyResponseField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[InviteToApplyResponse.candidateId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  candidateId: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('candidateId', this, 'Edm.String');
  /**
   * Representation of the [[InviteToApplyResponse.message]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  message: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('message', this, 'Edm.String');
  /**
   * Representation of the [[InviteToApplyResponse.status]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  status: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('status', this, 'Edm.String');
}

export namespace InviteToApplyResponse {
  export function build(json: { [keys: string]: FieldType }): InviteToApplyResponse {
    return createComplexType(json, {
      candidateId: (candidateId: string) => ({ candidateId: edmToTs(candidateId, 'Edm.String') }),
      message: (message: string) => ({ message: edmToTs(message, 'Edm.String') }),
      status: (status: string) => ({ status: edmToTs(status, 'Edm.String') })
    });
  }
}
