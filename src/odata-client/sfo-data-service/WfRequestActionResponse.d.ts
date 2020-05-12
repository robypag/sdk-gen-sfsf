import { BigNumber } from 'bignumber.js';
import { ComplexTypeBigNumberPropertyField, ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core';
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
export declare function createWfRequestActionResponse(json: any): WfRequestActionResponse;
/**
 * WfRequestActionResponseField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class WfRequestActionResponseField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[WfRequestActionResponse.status]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    status: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[WfRequestActionResponse.wfRequestId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    wfRequestId: ComplexTypeBigNumberPropertyField<EntityT>;
}
export declare namespace WfRequestActionResponse {
    function build(json: {
        [keys: string]: FieldType;
    }): WfRequestActionResponse;
}
//# sourceMappingURL=WfRequestActionResponse.d.ts.map