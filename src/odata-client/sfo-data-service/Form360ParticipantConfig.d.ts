import { Form360ParticipantConfigRequestBuilder } from './Form360ParticipantConfigRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, Entity, EntityBuilderType, Link, Selectable } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "Form360ParticipantConfig" of service "SFOData".
 */
export declare class Form360ParticipantConfig extends Entity implements Form360ParticipantConfigType {
    /**
     * Technical entity name for Form360ParticipantConfig.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for Form360ParticipantConfig.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * formContentId.
     */
    formContentId: BigNumber;
    /**
     * formDataId.
     */
    formDataId: BigNumber;
    /**
     * One-to-many navigation property to the [[Form360ParticipantCategory]] entity.
     */
    participantCategories: Form360ParticipantCategory[];
    /**
     * One-to-many navigation property to the [[Form360ParticipantColumn]] entity.
     */
    participantColumns: Form360ParticipantColumn[];
    /**
     * Returns an entity builder to construct instances `Form360ParticipantConfig`.
     * @returns A builder that constructs instances of entity type `Form360ParticipantConfig`.
     */
    static builder(): EntityBuilderType<Form360ParticipantConfig, Form360ParticipantConfigTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `Form360ParticipantConfig` entity type.
     * @returns A `Form360ParticipantConfig` request builder.
     */
    static requestBuilder(): Form360ParticipantConfigRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Form360ParticipantConfig`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Form360ParticipantConfig`.
     */
    static customField(fieldName: string): CustomField<Form360ParticipantConfig>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { Form360ParticipantCategory, Form360ParticipantCategoryType } from './Form360ParticipantCategory';
import { Form360ParticipantColumn, Form360ParticipantColumnType } from './Form360ParticipantColumn';
export interface Form360ParticipantConfigType {
    formContentId: BigNumber;
    formDataId: BigNumber;
    participantCategories: Form360ParticipantCategoryType[];
    participantColumns: Form360ParticipantColumnType[];
}
export interface Form360ParticipantConfigTypeForceMandatory {
    formContentId: BigNumber;
    formDataId: BigNumber;
    participantCategories: Form360ParticipantCategoryType[];
    participantColumns: Form360ParticipantColumnType[];
}
export declare namespace Form360ParticipantConfig {
    /**
     * Static representation of the [[formContentId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FORM_CONTENT_ID: BigNumberField<Form360ParticipantConfig>;
    /**
     * Static representation of the [[formDataId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FORM_DATA_ID: BigNumberField<Form360ParticipantConfig>;
    /**
     * Static representation of the one-to-many navigation property [[participantCategories]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PARTICIPANT_CATEGORIES: Link<Form360ParticipantConfig, Form360ParticipantCategory>;
    /**
     * Static representation of the one-to-many navigation property [[participantColumns]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PARTICIPANT_COLUMNS: Link<Form360ParticipantConfig, Form360ParticipantColumn>;
    /**
     * All fields of the Form360ParticipantConfig entity.
     */
    const _allFields: Array<BigNumberField<Form360ParticipantConfig> | Link<Form360ParticipantConfig, Form360ParticipantCategory> | Link<Form360ParticipantConfig, Form360ParticipantColumn>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<Form360ParticipantConfig>;
    /**
     * All key fields of the Form360ParticipantConfig entity.
     */
    const _keyFields: Array<Selectable<Form360ParticipantConfig>>;
    /**
     * Mapping of all key field names to the respective static field property Form360ParticipantConfig.
     */
    const _keys: {
        [keys: string]: Selectable<Form360ParticipantConfig>;
    };
}
//# sourceMappingURL=Form360ParticipantConfig.d.ts.map