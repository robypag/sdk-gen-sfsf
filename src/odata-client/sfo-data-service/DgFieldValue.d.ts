import { DgFieldValueRequestBuilder } from './DgFieldValueRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "DGFieldValue" of service "SFOData".
 */
export declare class DgFieldValue extends Entity implements DgFieldValueType {
    /**
     * Technical entity name for DgFieldValue.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for DgFieldValue.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * fieldValue.
     * Maximum length: 200.
     */
    fieldValue: string;
    /**
     * One-to-one navigation property to the [[PicklistOption]] entity.
     */
    fieldValuePickListOption: PicklistOption;
    /**
     * Returns an entity builder to construct instances `DgFieldValue`.
     * @returns A builder that constructs instances of entity type `DgFieldValue`.
     */
    static builder(): EntityBuilderType<DgFieldValue, DgFieldValueTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `DgFieldValue` entity type.
     * @returns A `DgFieldValue` request builder.
     */
    static requestBuilder(): DgFieldValueRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `DgFieldValue`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `DgFieldValue`.
     */
    static customField(fieldName: string): CustomField<DgFieldValue>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { PicklistOption, PicklistOptionType } from './PicklistOption';
export interface DgFieldValueType {
    fieldValue: string;
    fieldValuePickListOption: PicklistOptionType;
}
export interface DgFieldValueTypeForceMandatory {
    fieldValue: string;
    fieldValuePickListOption: PicklistOptionType;
}
export declare namespace DgFieldValue {
    /**
     * Static representation of the [[fieldValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FIELD_VALUE: StringField<DgFieldValue>;
    /**
     * Static representation of the one-to-one navigation property [[fieldValuePickListOption]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FIELD_VALUE_PICK_LIST_OPTION: OneToOneLink<DgFieldValue, PicklistOption>;
    /**
     * All fields of the DgFieldValue entity.
     */
    const _allFields: Array<StringField<DgFieldValue> | OneToOneLink<DgFieldValue, PicklistOption>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<DgFieldValue>;
    /**
     * All key fields of the DgFieldValue entity.
     */
    const _keyFields: Array<Selectable<DgFieldValue>>;
    /**
     * Mapping of all key field names to the respective static field property DgFieldValue.
     */
    const _keys: {
        [keys: string]: Selectable<DgFieldValue>;
    };
}
//# sourceMappingURL=DgFieldValue.d.ts.map