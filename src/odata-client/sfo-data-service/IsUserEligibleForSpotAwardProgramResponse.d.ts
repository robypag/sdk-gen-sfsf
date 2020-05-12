import { ComplexTypeBooleanPropertyField, ComplexTypeField, Entity, FieldType } from '@sap-cloud-sdk/core';
/**
 * IsUserEligibleForSpotAwardProgramResponse
 */
export interface IsUserEligibleForSpotAwardProgramResponse {
    /**
     * isUserEligible.
     * @nullable
     */
    isUserEligible?: boolean;
}
/**
 * @deprecated since v1.6.0. Use [[IsUserEligibleForSpotAwardProgramResponse.build]] instead.
 */
export declare function createIsUserEligibleForSpotAwardProgramResponse(json: any): IsUserEligibleForSpotAwardProgramResponse;
/**
 * IsUserEligibleForSpotAwardProgramResponseField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class IsUserEligibleForSpotAwardProgramResponseField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[IsUserEligibleForSpotAwardProgramResponse.isUserEligible]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    isUserEligible: ComplexTypeBooleanPropertyField<EntityT>;
}
export declare namespace IsUserEligibleForSpotAwardProgramResponse {
    function build(json: {
        [keys: string]: FieldType;
    }): IsUserEligibleForSpotAwardProgramResponse;
}
//# sourceMappingURL=IsUserEligibleForSpotAwardProgramResponse.d.ts.map