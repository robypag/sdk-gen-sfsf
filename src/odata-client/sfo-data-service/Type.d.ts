import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core';
/**
 * Type
 */
export interface Type {
    /**
     * name.
     * @nullable
     */
    name?: string;
    /**
     * path.
     */
    path: string;
}
/**
 * @deprecated since v1.6.0. Use [[Type.build]] instead.
 */
export declare function createType(json: any): Type;
/**
 * TypeField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class TypeField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[Type.name]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    name: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[Type.path]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    path: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace Type {
    function build(json: {
        [keys: string]: FieldType;
    }): Type;
}
//# sourceMappingURL=Type.d.ts.map