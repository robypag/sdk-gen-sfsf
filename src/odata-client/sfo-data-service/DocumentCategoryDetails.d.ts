import { ComplexTypeBooleanPropertyField, ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core';
/**
 * DocumentCategoryDetails
 */
export interface DocumentCategoryDetails {
    /**
     * active.
     * @nullable
     */
    active?: boolean;
    /**
     * categoryCode.
     * @nullable
     */
    categoryCode?: string;
    /**
     * categoryName.
     * @nullable
     */
    categoryName?: string;
    /**
     * entityName.
     * @nullable
     */
    entityName?: string;
    /**
     * entityTypeCode.
     * @nullable
     */
    entityTypeCode?: string;
    /**
     * systemDefined.
     * @nullable
     */
    systemDefined?: boolean;
}
/**
 * @deprecated since v1.6.0. Use [[DocumentCategoryDetails.build]] instead.
 */
export declare function createDocumentCategoryDetails(json: any): DocumentCategoryDetails;
/**
 * DocumentCategoryDetailsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class DocumentCategoryDetailsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[DocumentCategoryDetails.active]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    active: ComplexTypeBooleanPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentCategoryDetails.categoryCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    categoryCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentCategoryDetails.categoryName]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    categoryName: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentCategoryDetails.entityName]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    entityName: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentCategoryDetails.entityTypeCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    entityTypeCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[DocumentCategoryDetails.systemDefined]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    systemDefined: ComplexTypeBooleanPropertyField<EntityT>;
}
export declare namespace DocumentCategoryDetails {
    function build(json: {
        [keys: string]: FieldType;
    }): DocumentCategoryDetails;
}
//# sourceMappingURL=DocumentCategoryDetails.d.ts.map