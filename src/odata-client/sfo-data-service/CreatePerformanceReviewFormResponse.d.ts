import { BigNumber } from 'bignumber.js';
import { ComplexTypeBigNumberPropertyField, ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core';
/**
 * CreatePerformanceReviewFormResponse
 */
export interface CreatePerformanceReviewFormResponse {
    /**
     * formDataId.
     * @nullable
     */
    formDataId?: BigNumber;
    /**
     * status.
     * @nullable
     */
    status?: string;
    /**
     * statusCode.
     * @nullable
     */
    statusCode?: BigNumber;
}
/**
 * @deprecated since v1.6.0. Use [[CreatePerformanceReviewFormResponse.build]] instead.
 */
export declare function createCreatePerformanceReviewFormResponse(json: any): CreatePerformanceReviewFormResponse;
/**
 * CreatePerformanceReviewFormResponseField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class CreatePerformanceReviewFormResponseField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[CreatePerformanceReviewFormResponse.formDataId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    formDataId: ComplexTypeBigNumberPropertyField<EntityT>;
    /**
     * Representation of the [[CreatePerformanceReviewFormResponse.status]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    status: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[CreatePerformanceReviewFormResponse.statusCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    statusCode: ComplexTypeBigNumberPropertyField<EntityT>;
}
export declare namespace CreatePerformanceReviewFormResponse {
    function build(json: {
        [keys: string]: FieldType;
    }): CreatePerformanceReviewFormResponse;
}
//# sourceMappingURL=CreatePerformanceReviewFormResponse.d.ts.map