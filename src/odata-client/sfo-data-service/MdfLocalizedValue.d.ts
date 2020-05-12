import { MdfLocalizedValueRequestBuilder } from './MdfLocalizedValueRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "MDFLocalizedValue" of service "SFOData".
 */
export declare class MdfLocalizedValue extends Entity implements MdfLocalizedValueType {
    /**
     * Technical entity name for MdfLocalizedValue.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for MdfLocalizedValue.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * locale.
     */
    locale: string;
    /**
     * value.
     * @nullable
     */
    value?: string;
    /**
     * Returns an entity builder to construct instances `MdfLocalizedValue`.
     * @returns A builder that constructs instances of entity type `MdfLocalizedValue`.
     */
    static builder(): EntityBuilderType<MdfLocalizedValue, MdfLocalizedValueTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `MdfLocalizedValue` entity type.
     * @returns A `MdfLocalizedValue` request builder.
     */
    static requestBuilder(): MdfLocalizedValueRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `MdfLocalizedValue`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `MdfLocalizedValue`.
     */
    static customField(fieldName: string): CustomField<MdfLocalizedValue>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface MdfLocalizedValueType {
    locale: string;
    value?: string;
}
export interface MdfLocalizedValueTypeForceMandatory {
    locale: string;
    value: string;
}
export declare namespace MdfLocalizedValue {
    /**
     * Static representation of the [[locale]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LOCALE: StringField<MdfLocalizedValue>;
    /**
     * Static representation of the [[value]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VALUE: StringField<MdfLocalizedValue>;
    /**
     * All fields of the MdfLocalizedValue entity.
     */
    const _allFields: Array<StringField<MdfLocalizedValue>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<MdfLocalizedValue>;
    /**
     * All key fields of the MdfLocalizedValue entity.
     */
    const _keyFields: Array<Selectable<MdfLocalizedValue>>;
    /**
     * Mapping of all key field names to the respective static field property MdfLocalizedValue.
     */
    const _keys: {
        [keys: string]: Selectable<MdfLocalizedValue>;
    };
}
//# sourceMappingURL=MdfLocalizedValue.d.ts.map