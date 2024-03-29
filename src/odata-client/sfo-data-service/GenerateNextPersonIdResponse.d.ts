import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core';
/**
 * GenerateNextPersonIdResponse
 */
export interface GenerateNextPersonIdResponse {
    /**
     * personID.
     * @nullable
     */
    personId?: string;
}
/**
 * @deprecated since v1.6.0. Use [[GenerateNextPersonIdResponse.build]] instead.
 */
export declare function createGenerateNextPersonIdResponse(json: any): GenerateNextPersonIdResponse;
/**
 * GenerateNextPersonIdResponseField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class GenerateNextPersonIdResponseField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[GenerateNextPersonIdResponse.personId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    personId: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace GenerateNextPersonIdResponse {
    function build(json: {
        [keys: string]: FieldType;
    }): GenerateNextPersonIdResponse;
}
//# sourceMappingURL=GenerateNextPersonIdResponse.d.ts.map