import { BigNumber } from 'bignumber.js';
import { EssMssWorkflowAttributeGroupBean, EssMssWorkflowAttributeGroupBeanField } from './EssMssWorkflowAttributeGroupBean';
import { ComplexTypeBigNumberPropertyField, ComplexTypeField, Entity, FieldType } from '@sap-cloud-sdk/core';
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
export declare function createWfRequestPendingDataResponse(json: any): WfRequestPendingDataResponse;
/**
 * WfRequestPendingDataResponseField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class WfRequestPendingDataResponseField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[WfRequestPendingDataResponse.wfRequestId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    wfRequestId: ComplexTypeBigNumberPropertyField<EntityT>;
    /**
     * Representation of the [[WfRequestPendingDataResponse.workflowAttributeGroups]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    workflowAttributeGroups: EssMssWorkflowAttributeGroupBeanField<EntityT>;
}
export declare namespace WfRequestPendingDataResponse {
    function build(json: {
        [keys: string]: FieldType;
    }): WfRequestPendingDataResponse;
}
//# sourceMappingURL=WfRequestPendingDataResponse.d.ts.map