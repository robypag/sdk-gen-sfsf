import { FormSummarySectionRequestBuilder } from './FormSummarySectionRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, Entity, EntityBuilderType, Link, NumberField, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "FormSummarySection" of service "SFOData".
 */
export declare class FormSummarySection extends Entity implements FormSummarySectionType {
    /**
     * Technical entity name for FormSummarySection.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for FormSummarySection.
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
     * @nullable
     */
    sectionName?: string;
    /**
     * One-to-one navigation property to the [[FormUserRatingComment]] entity.
     */
    calculatedFormRating: FormUserRatingComment;
    /**
     * One-to-many navigation property to the [[FormUserRatingComment]] entity.
     */
    othersRatingComment: FormUserRatingComment[];
    /**
     * One-to-one navigation property to the [[FormUserRatingComment]] entity.
     */
    overallAdjustedRating: FormUserRatingComment;
    /**
     * One-to-one navigation property to the [[FormUserRatingComment]] entity.
     */
    overallFormRating: FormUserRatingComment;
    /**
     * One-to-one navigation property to the [[FormSectionConfiguration]] entity.
     */
    sectionConfiguration: FormSectionConfiguration;
    /**
     * One-to-one navigation property to the [[FormUserRatingComment]] entity.
     */
    selfRatingComment: FormUserRatingComment;
    /**
     * Returns an entity builder to construct instances `FormSummarySection`.
     * @returns A builder that constructs instances of entity type `FormSummarySection`.
     */
    static builder(): EntityBuilderType<FormSummarySection, FormSummarySectionTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `FormSummarySection` entity type.
     * @returns A `FormSummarySection` request builder.
     */
    static requestBuilder(): FormSummarySectionRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `FormSummarySection`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `FormSummarySection`.
     */
    static customField(fieldName: string): CustomField<FormSummarySection>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { FormUserRatingComment, FormUserRatingCommentType } from './FormUserRatingComment';
import { FormSectionConfiguration, FormSectionConfigurationType } from './FormSectionConfiguration';
export interface FormSummarySectionType {
    formContentId: BigNumber;
    formDataId: BigNumber;
    sectionDescription?: string;
    sectionIndex: number;
    sectionName?: string;
    calculatedFormRating: FormUserRatingCommentType;
    othersRatingComment: FormUserRatingCommentType[];
    overallAdjustedRating: FormUserRatingCommentType;
    overallFormRating: FormUserRatingCommentType;
    sectionConfiguration: FormSectionConfigurationType;
    selfRatingComment: FormUserRatingCommentType;
}
export interface FormSummarySectionTypeForceMandatory {
    formContentId: BigNumber;
    formDataId: BigNumber;
    sectionDescription: string;
    sectionIndex: number;
    sectionName: string;
    calculatedFormRating: FormUserRatingCommentType;
    othersRatingComment: FormUserRatingCommentType[];
    overallAdjustedRating: FormUserRatingCommentType;
    overallFormRating: FormUserRatingCommentType;
    sectionConfiguration: FormSectionConfigurationType;
    selfRatingComment: FormUserRatingCommentType;
}
export declare namespace FormSummarySection {
    /**
     * Static representation of the [[formContentId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FORM_CONTENT_ID: BigNumberField<FormSummarySection>;
    /**
     * Static representation of the [[formDataId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FORM_DATA_ID: BigNumberField<FormSummarySection>;
    /**
     * Static representation of the [[sectionDescription]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SECTION_DESCRIPTION: StringField<FormSummarySection>;
    /**
     * Static representation of the [[sectionIndex]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SECTION_INDEX: NumberField<FormSummarySection>;
    /**
     * Static representation of the [[sectionName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SECTION_NAME: StringField<FormSummarySection>;
    /**
     * Static representation of the one-to-one navigation property [[calculatedFormRating]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CALCULATED_FORM_RATING: OneToOneLink<FormSummarySection, FormUserRatingComment>;
    /**
     * Static representation of the one-to-many navigation property [[othersRatingComment]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OTHERS_RATING_COMMENT: Link<FormSummarySection, FormUserRatingComment>;
    /**
     * Static representation of the one-to-one navigation property [[overallAdjustedRating]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OVERALL_ADJUSTED_RATING: OneToOneLink<FormSummarySection, FormUserRatingComment>;
    /**
     * Static representation of the one-to-one navigation property [[overallFormRating]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OVERALL_FORM_RATING: OneToOneLink<FormSummarySection, FormUserRatingComment>;
    /**
     * Static representation of the one-to-one navigation property [[sectionConfiguration]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SECTION_CONFIGURATION: OneToOneLink<FormSummarySection, FormSectionConfiguration>;
    /**
     * Static representation of the one-to-one navigation property [[selfRatingComment]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SELF_RATING_COMMENT: OneToOneLink<FormSummarySection, FormUserRatingComment>;
    /**
     * All fields of the FormSummarySection entity.
     */
    const _allFields: Array<BigNumberField<FormSummarySection> | StringField<FormSummarySection> | NumberField<FormSummarySection> | OneToOneLink<FormSummarySection, FormUserRatingComment> | Link<FormSummarySection, FormUserRatingComment> | OneToOneLink<FormSummarySection, FormSectionConfiguration>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<FormSummarySection>;
    /**
     * All key fields of the FormSummarySection entity.
     */
    const _keyFields: Array<Selectable<FormSummarySection>>;
    /**
     * Mapping of all key field names to the respective static field property FormSummarySection.
     */
    const _keys: {
        [keys: string]: Selectable<FormSummarySection>;
    };
}
//# sourceMappingURL=FormSummarySection.d.ts.map