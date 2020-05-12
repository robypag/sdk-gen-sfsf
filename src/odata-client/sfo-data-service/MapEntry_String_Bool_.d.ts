import { ComplexTypeBooleanPropertyField, ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core';
/**
 * MapEntry_String_Bool_
 */
export interface MapEntry_String_Bool_ {
    /**
     * key.
     * @nullable
     */
    key?: string;
    /**
     * value.
     * @nullable
     */
    value?: boolean;
}
/**
 * @deprecated since v1.6.0. Use [[MapEntry_String_Bool_.build]] instead.
 */
export declare function createMapEntry_String_Bool_(json: any): MapEntry_String_Bool_;
/**
 * MapEntry_String_Bool_Field
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class MapEntry_String_Bool_Field<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[MapEntry_String_Bool_.key]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    key: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[MapEntry_String_Bool_.value]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    value: ComplexTypeBooleanPropertyField<EntityT>;
}
export declare namespace MapEntry_String_Bool_ {
    function build(json: {
        [keys: string]: FieldType;
    }): MapEntry_String_Bool_;
}
//# sourceMappingURL=MapEntry_String_Bool_.d.ts.map