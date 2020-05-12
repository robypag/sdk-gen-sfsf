import { Form360SummaryViewCategoryRequestBuilder } from './Form360SummaryViewCategoryRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, Entity, EntityBuilderType, NumberField, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "Form360SummaryViewCategory" of service "SFOData".
 */
export declare class Form360SummaryViewCategory extends Entity implements Form360SummaryViewCategoryType {
    /**
     * Technical entity name for Form360SummaryViewCategory.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for Form360SummaryViewCategory.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * category.
     */
    category: string;
    /**
     * categoryOrder.
     */
    categoryOrder: number;
    /**
     * categoryWeight.
     * @nullable
     */
    categoryWeight?: string;
    /**
     * formContentId.
     */
    formContentId: BigNumber;
    /**
     * formDataId.
     */
    formDataId: BigNumber;
    /**
     * Returns an entity builder to construct instances `Form360SummaryViewCategory`.
     * @returns A builder that constructs instances of entity type `Form360SummaryViewCategory`.
     */
    static builder(): EntityBuilderType<Form360SummaryViewCategory, Form360SummaryViewCategoryTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `Form360SummaryViewCategory` entity type.
     * @returns A `Form360SummaryViewCategory` request builder.
     */
    static requestBuilder(): Form360SummaryViewCategoryRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Form360SummaryViewCategory`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Form360SummaryViewCategory`.
     */
    static customField(fieldName: string): CustomField<Form360SummaryViewCategory>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface Form360SummaryViewCategoryType {
    category: string;
    categoryOrder: number;
    categoryWeight?: string;
    formContentId: BigNumber;
    formDataId: BigNumber;
}
export interface Form360SummaryViewCategoryTypeForceMandatory {
    category: string;
    categoryOrder: number;
    categoryWeight: string;
    formContentId: BigNumber;
    formDataId: BigNumber;
}
export declare namespace Form360SummaryViewCategory {
    /**
     * Static representation of the [[category]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CATEGORY: StringField<Form360SummaryViewCategory>;
    /**
     * Static representation of the [[categoryOrder]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CATEGORY_ORDER: NumberField<Form360SummaryViewCategory>;
    /**
     * Static representation of the [[categoryWeight]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CATEGORY_WEIGHT: StringField<Form360SummaryViewCategory>;
    /**
     * Static representation of the [[formContentId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FORM_CONTENT_ID: BigNumberField<Form360SummaryViewCategory>;
    /**
     * Static representation of the [[formDataId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FORM_DATA_ID: BigNumberField<Form360SummaryViewCategory>;
    /**
     * All fields of the Form360SummaryViewCategory entity.
     */
    const _allFields: Array<StringField<Form360SummaryViewCategory> | NumberField<Form360SummaryViewCategory> | BigNumberField<Form360SummaryViewCategory>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<Form360SummaryViewCategory>;
    /**
     * All key fields of the Form360SummaryViewCategory entity.
     */
    const _keyFields: Array<Selectable<Form360SummaryViewCategory>>;
    /**
     * Mapping of all key field names to the respective static field property Form360SummaryViewCategory.
     */
    const _keys: {
        [keys: string]: Selectable<Form360SummaryViewCategory>;
    };
}
//# sourceMappingURL=Form360SummaryViewCategory.d.ts.map