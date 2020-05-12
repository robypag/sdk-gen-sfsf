/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { EssMssWorkflowAttributeGroupBean, EssMssWorkflowAttributeGroupBeanField } from './EssMssWorkflowAttributeGroupBean';
import { ComplexTypeBigNumberPropertyField, ComplexTypeField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core';

/**
 * WfRequestPendingDataResponse
 */
export interface WfRequestPendingDataResponse {
  /**
   * wfRequestId.
   * @nullable
   */
  wfRequestId?: BigNumber;
  /**
   * workflowAttributeGroups.
   * @nullable
   */
  workflowAttributeGroups?: EssMssWorkflowAttributeGroupBean;
}

/**
 * @deprecated since v1.6.0. Use [[WfRequestPendingDataResponse.build]] instead.
 */
export function createWfRequestPendingDataResponse(json: any): WfRequestPendingDataResponse {
  return WfRequestPendingDataResponse.build(json);
}

/**
 * WfRequestPendingDataResponseField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class WfRequestPendingDataResponseField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[WfRequestPendingDataResponse.wfRequestId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  wfRequestId: ComplexTypeBigNumberPropertyField<EntityT> = new ComplexTypeBigNumberPropertyField('wfRequestId', this, 'Edm.Int64');
  /**
   * Representation of the [[WfRequestPendingDataResponse.workflowAttributeGroups]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  workflowAttributeGroups: EssMssWorkflowAttributeGroupBeanField<EntityT> = new EssMssWorkflowAttributeGroupBeanField('workflowAttributeGroups', this);
}

export namespace WfRequestPendingDataResponse {
  export function build(json: { [keys: string]: FieldType }): WfRequestPendingDataResponse {
    return createComplexType(json, {
      wfRequestId: (wfRequestId: BigNumber) => ({ wfRequestId: edmToTs(wfRequestId, 'Edm.Int64') }),
      workflowAttributeGroups: (workflowAttributeGroups: EssMssWorkflowAttributeGroupBean) => ({ workflowAttributeGroups: EssMssWorkflowAttributeGroupBean.build(workflowAttributeGroups) })
    });
  }
}
