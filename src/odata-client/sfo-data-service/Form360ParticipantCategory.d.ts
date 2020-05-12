import { Form360ParticipantCategoryRequestBuilder } from './Form360ParticipantCategoryRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, Entity, EntityBuilderType, NumberField, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "Form360ParticipantCategory" of service "SFOData".
 */
export declare class Form360ParticipantCategory extends Entity implements Form360ParticipantCategoryType {
    /**
     * Technical entity name for Form360ParticipantCategory.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for Form360ParticipantCategory.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * categoryLabel.
     * @nullable
     */
    categoryLabel?: string;
    /**
     * categoryOrder.
     * @nullable
     */
    categoryOrder?: number;
    /**
     * categoryValue.
     */
    categoryValue: string;
    /**
     * formContentId.
     */
    formContentId: BigNumber;
    /**
     * formDataId.
     */
    formDataId: BigNumber;
    /**
     * Returns an entity builder to construct instances `Form360ParticipantCategory`.
     * @returns A builder that constructs instances of entity type `Form360ParticipantCategory`.
     */
    static builder(): EntityBuilderType<Form360ParticipantCategory, Form360ParticipantCategoryTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `Form360ParticipantCategory` entity type.
     * @returns A `Form360ParticipantCategory` request builder.
     */
    static requestBuilder(): Form360ParticipantCategoryRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Form360ParticipantCategory`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Form360ParticipantCategory`.
     */
    static customField(fieldName: string): CustomField<Form360ParticipantCategory>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface Form360ParticipantCategoryType {
    categoryLabel?: string;
    categoryOrder?: number;
    categoryValue: string;
    formContentId: BigNumber;
    formDataId: BigNumber;
}
export interface Form360ParticipantCategoryTypeForceMandatory {
    categoryLabel: string;
    categoryOrder: number;
    categoryValue: string;
    formContentId: BigNumber;
    formDataId: BigNumber;
}
export declare namespace Form360ParticipantCategory {
    /**
     * Static representation of the [[categoryLabel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CATEGORY_LABEL: StringField<Form360ParticipantCategory>;
    /**
     * Static representation of the [[categoryOrder]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CATEGORY_ORDER: NumberField<Form360ParticipantCategory>;
    /**
     * Static representation of the [[categoryValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CATEGORY_VALUE: StringField<Form360ParticipantCategory>;
    /**
     * Static representation of the [[formContentId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FORM_CONTENT_ID: BigNumberField<Form360ParticipantCategory>;
    /**
     * Static representation of the [[formDataId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FORM_DATA_ID: BigNumberField<Form360ParticipantCategory>;
    /**
     * All fields of the Form360ParticipantCategory entity.
     */
    const _allFields: Array<StringField<Form360ParticipantCategory> | NumberField<Form360ParticipantCategory> | BigNumberField<Form360ParticipantCategory>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<Form360ParticipantCategory>;
    /**
     * All key fields of the Form360ParticipantCategory entity.
     */
    const _keyFields: Array<Selectable<Form360ParticipantCategory>>;
    /**
     * Mapping of all key field names to the respective static field property Form360ParticipantCategory.
     */
    const _keys: {
        [keys: string]: Selectable<Form360ParticipantCategory>;
    };
}
//# sourceMappingURL=Form360ParticipantCategory.d.ts.map