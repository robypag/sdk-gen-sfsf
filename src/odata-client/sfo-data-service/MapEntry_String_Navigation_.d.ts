import { Navigation, NavigationField } from './Navigation';
import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core';
/**
 * MapEntry_String_Navigation_
 */
export interface MapEntry_String_Navigation_ {
    /**
     * key.
     * @nullable
     */
    key?: string;
    /**
     * value.
     * @nullable
     */
    value?: Navigation;
}
/**
 * @deprecated since v1.6.0. Use [[MapEntry_String_Navigation_.build]] instead.
 */
export declare function createMapEntry_String_Navigation_(json: any): MapEntry_String_Navigation_;
/**
 * MapEntry_String_Navigation_Field
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class MapEntry_String_Navigation_Field<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[MapEntry_String_Navigation_.key]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    key: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[MapEntry_String_Navigation_.value]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    value: NavigationField<EntityT>;
}
export declare namespace MapEntry_String_Navigation_ {
    function build(json: {
        [keys: string]: FieldType;
    }): MapEntry_String_Navigation_;
}
//# sourceMappingURL=MapEntry_String_Navigation_.d.ts.map