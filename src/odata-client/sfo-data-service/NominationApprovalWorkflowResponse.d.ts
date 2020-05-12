import { BigNumber } from 'bignumber.js';
import { ComplexTypeBigNumberPropertyField, ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core';
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
export declare function createNominationApprovalWorkflowResponse(json: any): NominationApprovalWorkflowResponse;
/**
 * NominationApprovalWorkflowResponseField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class NominationApprovalWorkflowResponseField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[NominationApprovalWorkflowResponse.message]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    message: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[NominationApprovalWorkflowResponse.nomineeId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    nomineeId: ComplexTypeBigNumberPropertyField<EntityT>;
    /**
     * Representation of the [[NominationApprovalWorkflowResponse.status]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    status: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace NominationApprovalWorkflowResponse {
    function build(json: {
        [keys: string]: FieldType;
    }): NominationApprovalWorkflowResponse;
}
//# sourceMappingURL=NominationApprovalWorkflowResponse.d.ts.map