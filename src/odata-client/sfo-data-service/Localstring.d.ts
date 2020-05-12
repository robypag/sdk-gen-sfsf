import { MapEntry_String_String_, MapEntry_String_String_Field } from './MapEntry_String_String_';
import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core';
/**
 * Localstring
 */
export interface Localstring {
    /**
     * labels.
     * @nullable
     */
    labels?: MapEntry_String_String_;
    /**
     * mimeType.
     * @nullable
     */
    mimeType?: string;
}
/**
 * @deprecated since v1.6.0. Use [[Localstring.build]] instead.
 */
export declare function createLocalstring(json: any): Localstring;
/**
 * LocalstringField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class LocalstringField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[Localstring.labels]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    labels: MapEntry_String_String_Field<EntityT>;
    /**
     * Representation of the [[Localstring.mimeType]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    mimeType: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace Localstring {
    function build(json: {
        [keys: string]: FieldType;
    }): Localstring;
}
//# sourceMappingURL=Localstring.d.ts.map