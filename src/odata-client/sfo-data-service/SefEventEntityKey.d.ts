import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core';
/**
 * SefEventEntityKey
 */
export interface SefEventEntityKey {
    /**
     * description.
     */
    description: string;
    /**
     * descriptionMessageKey.
     */
    descriptionMessageKey: string;
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
 * @deprecated since v1.6.0. Use [[SefEventEntityKey.build]] instead.
 */
export declare function createSefEventEntityKey(json: any): SefEventEntityKey;
/**
 * SefEventEntityKeyField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class SefEventEntityKeyField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[SefEventEntityKey.description]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    description: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[SefEventEntityKey.descriptionMessageKey]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    descriptionMessageKey: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[SefEventEntityKey.name]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    name: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[SefEventEntityKey.type]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    type: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace SefEventEntityKey {
    function build(json: {
        [keys: string]: FieldType;
    }): SefEventEntityKey;
}
//# sourceMappingURL=SefEventEntityKey.d.ts.map