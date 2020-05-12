import { LocalizedDataRequestBuilder } from './LocalizedDataRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "LocalizedData" of service "SFOData".
 */
export declare class LocalizedData extends Entity implements LocalizedDataType {
    /**
     * Technical entity name for LocalizedData.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for LocalizedData.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * LocalizedData Code.
     * Maximum length: 38.
     */
    localizedDataCode: string;
    /**
     * LocalizedData Locale.
     * Maximum length: 32.
     */
    localizedDataLocale: string;
    /**
     * LocalizedData Translation.
     * Maximum length: 4000.
     * @nullable
     */
    localizedDataTranslation?: string;
    /**
     * Returns an entity builder to construct instances `LocalizedData`.
     * @returns A builder that constructs instances of entity type `LocalizedData`.
     */
    static builder(): EntityBuilderType<LocalizedData, LocalizedDataTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `LocalizedData` entity type.
     * @returns A `LocalizedData` request builder.
     */
    static requestBuilder(): LocalizedDataRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `LocalizedData`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `LocalizedData`.
     */
    static customField(fieldName: string): CustomField<LocalizedData>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface LocalizedDataType {
    localizedDataCode: string;
    localizedDataLocale: string;
    localizedDataTranslation?: string;
}
export interface LocalizedDataTypeForceMandatory {
    localizedDataCode: string;
    localizedDataLocale: string;
    localizedDataTranslation: string;
}
export declare namespace LocalizedData {
    /**
     * Static representation of the [[localizedDataCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LOCALIZED_DATA_CODE: StringField<LocalizedData>;
    /**
     * Static representation of the [[localizedDataLocale]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LOCALIZED_DATA_LOCALE: StringField<LocalizedData>;
    /**
     * Static representation of the [[localizedDataTranslation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LOCALIZED_DATA_TRANSLATION: StringField<LocalizedData>;
    /**
     * All fields of the LocalizedData entity.
     */
    const _allFields: Array<StringField<LocalizedData>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<LocalizedData>;
    /**
     * All key fields of the LocalizedData entity.
     */
    const _keyFields: Array<Selectable<LocalizedData>>;
    /**
     * Mapping of all key field names to the respective static field property LocalizedData.
     */
    const _keys: {
        [keys: string]: Selectable<LocalizedData>;
    };
}
//# sourceMappingURL=LocalizedData.d.ts.map