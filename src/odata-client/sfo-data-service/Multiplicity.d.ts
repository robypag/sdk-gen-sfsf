import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core';
/**
 * Multiplicity
 */
export interface Multiplicity {
    /**
     * name.
     * @nullable
     */
    name?: string;
    /**
     * symbolString.
     * @nullable
     */
    symbolString?: string;
}
/**
 * @deprecated since v1.6.0. Use [[Multiplicity.build]] instead.
 */
export declare function createMultiplicity(json: any): Multiplicity;
/**
 * MultiplicityField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class MultiplicityField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[Multiplicity.name]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    name: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[Multiplicity.symbolString]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    symbolString: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace Multiplicity {
    function build(json: {
        [keys: string]: FieldType;
    }): Multiplicity;
}
//# sourceMappingURL=Multiplicity.d.ts.map