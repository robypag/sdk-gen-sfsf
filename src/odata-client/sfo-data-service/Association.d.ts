import { AssociationEnd, AssociationEndField } from './AssociationEnd';
import { ComplexTypeBooleanPropertyField, ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core';
/**
 * Association
 */
export interface Association {
    /**
     * deletable.
     * @nullable
     */
    deletable?: boolean;
    /**
     * end1.
     * @nullable
     */
    end1?: AssociationEnd;
    /**
     * end2.
     * @nullable
     */
    end2?: AssociationEnd;
    /**
     * insertable.
     * @nullable
     */
    insertable?: boolean;
    /**
     * name.
     * @nullable
     */
    name?: string;
    /**
     * path.
     */
    path: string;
    /**
     * updatable.
     * @nullable
     */
    updatable?: boolean;
    /**
     * upsertable.
     * @nullable
     */
    upsertable?: boolean;
}
/**
 * @deprecated since v1.6.0. Use [[Association.build]] instead.
 */
export declare function createAssociation(json: any): Association;
/**
 * AssociationField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class AssociationField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[Association.deletable]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    deletable: ComplexTypeBooleanPropertyField<EntityT>;
    /**
     * Representation of the [[Association.end1]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    end1: AssociationEndField<EntityT>;
    /**
     * Representation of the [[Association.end2]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    end2: AssociationEndField<EntityT>;
    /**
     * Representation of the [[Association.insertable]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    insertable: ComplexTypeBooleanPropertyField<EntityT>;
    /**
     * Representation of the [[Association.name]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    name: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[Association.path]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    path: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[Association.updatable]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    updatable: ComplexTypeBooleanPropertyField<EntityT>;
    /**
     * Representation of the [[Association.upsertable]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    upsertable: ComplexTypeBooleanPropertyField<EntityT>;
}
export declare namespace Association {
    function build(json: {
        [keys: string]: FieldType;
    }): Association;
}
//# sourceMappingURL=Association.d.ts.map