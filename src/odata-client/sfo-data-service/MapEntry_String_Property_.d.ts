import { Property, PropertyField } from './Property';
import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core';
/**
 * MapEntry_String_Property_
 */
export interface MapEntry_String_Property_ {
    /**
     * key.
     * @nullable
     */
    key?: string;
    /**
     * value.
     * @nullable
     */
    value?: Property;
}
/**
 * @deprecated since v1.6.0. Use [[MapEntry_String_Property_.build]] instead.
 */
export declare function createMapEntry_String_Property_(json: any): MapEntry_String_Property_;
/**
 * MapEntry_String_Property_Field
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class MapEntry_String_Property_Field<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[MapEntry_String_Property_.key]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    key: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[MapEntry_String_Property_.value]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    value: PropertyField<EntityT>;
}
export declare namespace MapEntry_String_Property_ {
    function build(json: {
        [keys: string]: FieldType;
    }): MapEntry_String_Property_;
}
//# sourceMappingURL=MapEntry_String_Property_.d.ts.map