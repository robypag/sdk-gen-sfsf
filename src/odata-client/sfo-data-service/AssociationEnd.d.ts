import { Multiplicity, MultiplicityField } from './Multiplicity';
import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core';
/**
 * AssociationEnd
 */
export interface AssociationEnd {
    /**
     * multiplicity.
     * @nullable
     */
    multiplicity?: Multiplicity;
    /**
     * path.
     */
    path: string;
    /**
     * role.
     * @nullable
     */
    role?: string;
}
/**
 * @deprecated since v1.6.0. Use [[AssociationEnd.build]] instead.
 */
export declare function createAssociationEnd(json: any): AssociationEnd;
/**
 * AssociationEndField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class AssociationEndField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[AssociationEnd.multiplicity]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    multiplicity: MultiplicityField<EntityT>;
    /**
     * Representation of the [[AssociationEnd.path]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    path: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[AssociationEnd.role]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    role: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace AssociationEnd {
    function build(json: {
        [keys: string]: FieldType;
    }): AssociationEnd;
}
//# sourceMappingURL=AssociationEnd.d.ts.map