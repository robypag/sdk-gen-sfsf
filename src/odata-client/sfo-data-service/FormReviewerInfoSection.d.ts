import { FormReviewerInfoSectionRequestBuilder } from './FormReviewerInfoSectionRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, Entity, EntityBuilderType, Link, NumberField, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "FormReviewerInfoSection" of service "SFOData".
 */
export declare class FormReviewerInfoSection extends Entity implements FormReviewerInfoSectionType {
    /**
     * Technical entity name for FormReviewerInfoSection.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for FormReviewerInfoSection.
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
     * One-to-many navigation property to the [[FormCustomElement]] entity.
     */
    reviewerInfoElements: FormCustomElement[];
    /**
     * Returns an entity builder to construct instances `FormReviewerInfoSection`.
     * @returns A builder that constructs instances of entity type `FormReviewerInfoSection`.
     */
    static builder(): EntityBuilderType<FormReviewerInfoSection, FormReviewerInfoSectionTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `FormReviewerInfoSection` entity type.
     * @returns A `FormReviewerInfoSection` request builder.
     */
    static requestBuilder(): FormReviewerInfoSectionRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `FormReviewerInfoSection`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `FormReviewerInfoSection`.
     */
    static customField(fieldName: string): CustomField<FormReviewerInfoSection>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { FormCustomElement, FormCustomElementType } from './FormCustomElement';
export interface FormReviewerInfoSectionType {
    formContentId: BigNumber;
    formDataId: BigNumber;
    sectionDescription?: string;
    sectionIndex: number;
    sectionName: string;
    reviewerInfoElements: FormCustomElementType[];
}
export interface FormReviewerInfoSectionTypeForceMandatory {
    formContentId: BigNumber;
    formDataId: BigNumber;
    sectionDescription: string;
    sectionIndex: number;
    sectionName: string;
    reviewerInfoElements: FormCustomElementType[];
}
export declare namespace FormReviewerInfoSection {
    /**
     * Static representation of the [[formContentId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FORM_CONTENT_ID: BigNumberField<FormReviewerInfoSection>;
    /**
     * Static representation of the [[formDataId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FORM_DATA_ID: BigNumberField<FormReviewerInfoSection>;
    /**
     * Static representation of the [[sectionDescription]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SECTION_DESCRIPTION: StringField<FormReviewerInfoSection>;
    /**
     * Static representation of the [[sectionIndex]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SECTION_INDEX: NumberField<FormReviewerInfoSection>;
    /**
     * Static representation of the [[sectionName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SECTION_NAME: StringField<FormReviewerInfoSection>;
    /**
     * Static representation of the one-to-many navigation property [[reviewerInfoElements]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REVIEWER_INFO_ELEMENTS: Link<FormReviewerInfoSection, FormCustomElement>;
    /**
     * All fields of the FormReviewerInfoSection entity.
     */
    const _allFields: Array<BigNumberField<FormReviewerInfoSection> | StringField<FormReviewerInfoSection> | NumberField<FormReviewerInfoSection> | Link<FormReviewerInfoSection, FormCustomElement>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<FormReviewerInfoSection>;
    /**
     * All key fields of the FormReviewerInfoSection entity.
     */
    const _keyFields: Array<Selectable<FormReviewerInfoSection>>;
    /**
     * Mapping of all key field names to the respective static field property FormReviewerInfoSection.
     */
    const _keys: {
        [keys: string]: Selectable<FormReviewerInfoSection>;
    };
}
//# sourceMappingURL=FormReviewerInfoSection.d.ts.map