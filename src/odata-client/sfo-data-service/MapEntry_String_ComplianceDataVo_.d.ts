import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core';
/**
 * MapEntry_String_ComplianceDataVo_
 */
export interface MapEntry_String_ComplianceDataVo_ {
    /**
     * key.
     * @nullable
     */
    key?: string;
}
/**
 * @deprecated since v1.6.0. Use [[MapEntry_String_ComplianceDataVo_.build]] instead.
 */
export declare function createMapEntry_String_ComplianceDataVo_(json: any): MapEntry_String_ComplianceDataVo_;
/**
 * MapEntry_String_ComplianceDataVo_Field
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class MapEntry_String_ComplianceDataVo_Field<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[MapEntry_String_ComplianceDataVo_.key]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    key: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace MapEntry_String_ComplianceDataVo_ {
    function build(json: {
        [keys: string]: FieldType;
    }): MapEntry_String_ComplianceDataVo_;
}
//# sourceMappingURL=MapEntry_String_ComplianceDataVo_.d.ts.map