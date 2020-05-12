import { ComplexTypeBooleanPropertyField, ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core';
/**
 * SefEventEntityParam
 */
export interface SefEventEntityParam {
    /**
     * description.
     */
    description: string;
    /**
     * descriptionMessageKey.
     */
    descriptionMessageKey: string;
    /**
     * hasValueAlways.
     * @nullable
     */
    hasValueAlways?: boolean;
    /**
     * name.
     */
    name: string;
    /**
     * type.
     */
    type: string;
}
/**
 * @deprecated since v1.6.0. Use [[SefEventEntityParam.build]] instead.
 */
export declare function createSefEventEntityParam(json: any): SefEventEntityParam;
/**
 * SefEventEntityParamField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class SefEventEntityParamField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[SefEventEntityParam.description]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    description: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[SefEventEntityParam.descriptionMessageKey]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    descriptionMessageKey: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[SefEventEntityParam.hasValueAlways]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    hasValueAlways: ComplexTypeBooleanPropertyField<EntityT>;
    /**
     * Representation of the [[SefEventEntityParam.name]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    name: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[SefEventEntityParam.type]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    type: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace SefEventEntityParam {
    function build(json: {
        [keys: string]: FieldType;
    }): SefEventEntityParam;
}
//# sourceMappingURL=SefEventEntityParam.d.ts.map