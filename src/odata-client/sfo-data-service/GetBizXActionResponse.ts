/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core';

/**
 * GetBizXActionResponse
 */
export interface GetBizXActionResponse {
  /**
   * actionId.
   * @nullable
   */
  actionId?: string;
  /**
   * actionLabel.
   * @nullable
   */
  actionLabel?: string;
  /**
   * deepLinkUrl.
   * @nullable
   */
  deepLinkUrl?: string;
  /**
   * userId.
   * @nullable
   */
  userId?: string;
}

/**
 * @deprecated since v1.6.0. Use [[GetBizXActionResponse.build]] instead.
 */
export function createGetBizXActionResponse(json: any): GetBizXActionResponse {
  return GetBizXActionResponse.build(json);
}

/**
 * GetBizXActionResponseField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class GetBizXActionResponseField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[GetBizXActionResponse.actionId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  actionId: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('actionId', this, 'Edm.String');
  /**
   * Representation of the [[GetBizXActionResponse.actionLabel]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  actionLabel: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('actionLabel', this, 'Edm.String');
  /**
   * Representation of the [[GetBizXActionResponse.deepLinkUrl]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  deepLinkUrl: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('deepLinkUrl', this, 'Edm.String');
  /**
   * Representation of the [[GetBizXActionResponse.userId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  userId: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('userId', this, 'Edm.String');
}

export namespace GetBizXActionResponse {
  export function build(json: { [keys: string]: FieldType }): GetBizXActionResponse {
    return createComplexType(json, {
      actionId: (actionId: string) => ({ actionId: edmToTs(actionId, 'Edm.String') }),
      actionLabel: (actionLabel: string) => ({ actionLabel: edmToTs(actionLabel, 'Edm.String') }),
      deepLinkUrl: (deepLinkUrl: string) => ({ deepLinkUrl: edmToTs(deepLinkUrl, 'Edm.String') }),
      userId: (userId: string) => ({ userId: edmToTs(userId, 'Edm.String') })
    });
  }
}
