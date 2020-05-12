import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core';
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
export declare function createInviteToApplyResponse(json: any): InviteToApplyResponse;
/**
 * InviteToApplyResponseField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class InviteToApplyResponseField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[InviteToApplyResponse.candidateId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    candidateId: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[InviteToApplyResponse.message]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    message: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[InviteToApplyResponse.status]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    status: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace InviteToApplyResponse {
    function build(json: {
        [keys: string]: FieldType;
    }): InviteToApplyResponse;
}
//# sourceMappingURL=InviteToApplyResponse.d.ts.map