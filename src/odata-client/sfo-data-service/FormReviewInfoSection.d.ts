import { FormReviewInfoSectionRequestBuilder } from './FormReviewInfoSectionRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, Entity, EntityBuilderType, NumberField, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "FormReviewInfoSection" of service "SFOData".
 */
export declare class FormReviewInfoSection extends Entity implements FormReviewInfoSectionType {
    /**
     * Technical entity name for FormReviewInfoSection.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for FormReviewInfoSection.
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
     * formDateFormat.
     */
    formDateFormat: string;
    /**
     * formOriginator.
     */
    formOriginator: string;
    /**
     * isDueDateValidationDisabled.
     */
    isDueDateValidationDisabled: boolean;
    /**
     * isReviewDatesEditable.
     */
    isReviewDatesEditable: boolean;
    /**
     * reviewDueDate.
     */
    reviewDueDate: string;
    /**
     * reviewEndDate.
     */
    reviewEndDate: string;
    /**
     * reviewStartDate.
     */
    reviewStartDate: string;
    /**
     * sectionDescription.
     * @nullable
     */
    sectionDescription?: string;
    /**
     * sectionIndex.
     */
    sectionIndex: number;
    /**
     * sectionName.
     */
    sectionName: string;
    /**
     * Returns an entity builder to construct instances `FormReviewInfoSection`.
     * @returns A builder that constructs instances of entity type `FormReviewInfoSection`.
     */
    static builder(): EntityBuilderType<FormReviewInfoSection, FormReviewInfoSectionTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `FormReviewInfoSection` entity type.
     * @returns A `FormReviewInfoSection` request builder.
     */
    static requestBuilder(): FormReviewInfoSectionRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `FormReviewInfoSection`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `FormReviewInfoSection`.
     */
    static customField(fieldName: string): CustomField<FormReviewInfoSection>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface FormReviewInfoSectionType {
    formContentId: BigNumber;
    formDataId: BigNumber;
    formDateFormat: string;
    formOriginator: string;
    isDueDateValidationDisabled: boolean;
    isReviewDatesEditable: boolean;
    reviewDueDate: string;
    reviewEndDate: string;
    reviewStartDate: string;
    sectionDescription?: string;
    sectionIndex: number;
    sectionName: string;
}
export interface FormReviewInfoSectionTypeForceMandatory {
    formContentId: BigNumber;
    formDataId: BigNumber;
    formDateFormat: string;
    formOriginator: string;
    isDueDateValidationDisabled: boolean;
    isReviewDatesEditable: boolean;
    reviewDueDate: string;
    reviewEndDate: string;
    reviewStartDate: string;
    sectionDescription: string;
    sectionIndex: number;
    sectionName: string;
}
export declare namespace FormReviewInfoSection {
    /**
     * Static representation of the [[formContentId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FORM_CONTENT_ID: BigNumberField<FormReviewInfoSection>;
    /**
     * Static representation of the [[formDataId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FORM_DATA_ID: BigNumberField<FormReviewInfoSection>;
    /**
     * Static representation of the [[formDateFormat]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FORM_DATE_FORMAT: StringField<FormReviewInfoSection>;
    /**
     * Static representation of the [[formOriginator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FORM_ORIGINATOR: StringField<FormReviewInfoSection>;
    /**
     * Static representation of the [[isDueDateValidationDisabled]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IS_DUE_DATE_VALIDATION_DISABLED: BooleanField<FormReviewInfoSection>;
    /**
     * Static representation of the [[isReviewDatesEditable]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IS_REVIEW_DATES_EDITABLE: BooleanField<FormReviewInfoSection>;
    /**
     * Static representation of the [[reviewDueDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REVIEW_DUE_DATE: StringField<FormReviewInfoSection>;
    /**
     * Static representation of the [[reviewEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REVIEW_END_DATE: StringField<FormReviewInfoSection>;
    /**
     * Static representation of the [[reviewStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REVIEW_START_DATE: StringField<FormReviewInfoSection>;
    /**
     * Static representation of the [[sectionDescription]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SECTION_DESCRIPTION: StringField<FormReviewInfoSection>;
    /**
     * Static representation of the [[sectionIndex]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SECTION_INDEX: NumberField<FormReviewInfoSection>;
    /**
     * Static representation of the [[sectionName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SECTION_NAME: StringField<FormReviewInfoSection>;
    /**
     * All fields of the FormReviewInfoSection entity.
     */
    const _allFields: Array<BigNumberField<FormReviewInfoSection> | StringField<FormReviewInfoSection> | BooleanField<FormReviewInfoSection> | NumberField<FormReviewInfoSection>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<FormReviewInfoSection>;
    /**
     * All key fields of the FormReviewInfoSection entity.
     */
    const _keyFields: Array<Selectable<FormReviewInfoSection>>;
    /**
     * Mapping of all key field names to the respective static field property FormReviewInfoSection.
     */
    const _keys: {
        [keys: string]: Selectable<FormReviewInfoSection>;
    };
}
//# sourceMappingURL=FormReviewInfoSection.d.ts.map