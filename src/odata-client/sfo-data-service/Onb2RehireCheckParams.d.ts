import { MapEntry_String_String_, MapEntry_String_String_Field } from './MapEntry_String_String_';
import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core';
/**
 * Onb2RehireCheckParams
 */
export interface Onb2RehireCheckParams {
    /**
     * dateOfBirth.
     * @nullable
     */
    dateOfBirth?: string;
    /**
     * firstName.
     * @nullable
     */
    firstName?: string;
    /**
     * lastName.
     * @nullable
     */
    lastName?: string;
    /**
     * nationalIdDetails.
     * @nullable
     */
    nationalIdDetails?: MapEntry_String_String_;
}
/**
 * @deprecated since v1.6.0. Use [[Onb2RehireCheckParams.build]] instead.
 */
export declare function createOnb2RehireCheckParams(json: any): Onb2RehireCheckParams;
/**
 * Onb2RehireCheckParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class Onb2RehireCheckParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[Onb2RehireCheckParams.dateOfBirth]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    dateOfBirth: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[Onb2RehireCheckParams.firstName]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    firstName: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[Onb2RehireCheckParams.lastName]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    lastName: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[Onb2RehireCheckParams.nationalIdDetails]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    nationalIdDetails: MapEntry_String_String_Field<EntityT>;
}
export declare namespace Onb2RehireCheckParams {
    function build(json: {
        [keys: string]: FieldType;
    }): Onb2RehireCheckParams;
}
//# sourceMappingURL=Onb2RehireCheckParams.d.ts.map