import { DgFieldOperatorRequestBuilder } from './DgFieldOperatorRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "DGFieldOperator" of service "SFOData".
 */
export declare class DgFieldOperator extends Entity implements DgFieldOperatorType {
    /**
     * Technical entity name for DgFieldOperator.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for DgFieldOperator.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * label.
     * Maximum length: 200.
     */
    label: string;
    /**
     * token.
     * Maximum length: 200.
     */
    token: string;
    /**
     * Returns an entity builder to construct instances `DgFieldOperator`.
     * @returns A builder that constructs instances of entity type `DgFieldOperator`.
     */
    static builder(): EntityBuilderType<DgFieldOperator, DgFieldOperatorTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `DgFieldOperator` entity type.
     * @returns A `DgFieldOperator` request builder.
     */
    static requestBuilder(): DgFieldOperatorRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `DgFieldOperator`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `DgFieldOperator`.
     */
    static customField(fieldName: string): CustomField<DgFieldOperator>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface DgFieldOperatorType {
    label: string;
    token: string;
}
export interface DgFieldOperatorTypeForceMandatory {
    label: string;
    token: string;
}
export declare namespace DgFieldOperator {
    /**
     * Static representation of the [[label]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LABEL: StringField<DgFieldOperator>;
    /**
     * Static representation of the [[token]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TOKEN: StringField<DgFieldOperator>;
    /**
     * All fields of the DgFieldOperator entity.
     */
    const _allFields: Array<StringField<DgFieldOperator>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<DgFieldOperator>;
    /**
     * All key fields of the DgFieldOperator entity.
     */
    const _keyFields: Array<Selectable<DgFieldOperator>>;
    /**
     * Mapping of all key field names to the respective static field property DgFieldOperator.
     */
    const _keys: {
        [keys: string]: Selectable<DgFieldOperator>;
    };
}
//# sourceMappingURL=DgFieldOperator.d.ts.map