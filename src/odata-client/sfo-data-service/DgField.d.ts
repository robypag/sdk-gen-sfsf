import { DgFieldRequestBuilder } from './DgFieldRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Link, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "DGField" of service "SFOData".
 */
export declare class DgField extends Entity implements DgFieldType {
    /**
     * Technical entity name for DgField.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for DgField.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * dataType.
     * Maximum length: 200.
     */
    dataType: string;
    /**
     * label.
     * Maximum length: 200.
     */
    label: string;
    /**
     * name.
     * Maximum length: 200.
     */
    name: string;
    /**
     * picklistId.
     * Maximum length: 200.
     */
    picklistId: string;
    /**
     * One-to-many navigation property to the [[DgFieldOperator]] entity.
     */
    allowedOperators: DgFieldOperator[];
    /**
     * Returns an entity builder to construct instances `DgField`.
     * @returns A builder that constructs instances of entity type `DgField`.
     */
    static builder(): EntityBuilderType<DgField, DgFieldTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `DgField` entity type.
     * @returns A `DgField` request builder.
     */
    static requestBuilder(): DgFieldRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `DgField`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `DgField`.
     */
    static customField(fieldName: string): CustomField<DgField>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { DgFieldOperator, DgFieldOperatorType } from './DgFieldOperator';
export interface DgFieldType {
    dataType: string;
    label: string;
    name: string;
    picklistId: string;
    allowedOperators: DgFieldOperatorType[];
}
export interface DgFieldTypeForceMandatory {
    dataType: string;
    label: string;
    name: string;
    picklistId: string;
    allowedOperators: DgFieldOperatorType[];
}
export declare namespace DgField {
    /**
     * Static representation of the [[dataType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DATA_TYPE: StringField<DgField>;
    /**
     * Static representation of the [[label]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LABEL: StringField<DgField>;
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME: StringField<DgField>;
    /**
     * Static representation of the [[picklistId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PICKLIST_ID: StringField<DgField>;
    /**
     * Static representation of the one-to-many navigation property [[allowedOperators]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ALLOWED_OPERATORS: Link<DgField, DgFieldOperator>;
    /**
     * All fields of the DgField entity.
     */
    const _allFields: Array<StringField<DgField> | Link<DgField, DgFieldOperator>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<DgField>;
    /**
     * All key fields of the DgField entity.
     */
    const _keyFields: Array<Selectable<DgField>>;
    /**
     * Mapping of all key field names to the respective static field property DgField.
     */
    const _keys: {
        [keys: string]: Selectable<DgField>;
    };
}
//# sourceMappingURL=DgField.d.ts.map