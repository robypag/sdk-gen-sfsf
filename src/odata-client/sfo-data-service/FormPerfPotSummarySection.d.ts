import { FormPerfPotSummarySectionRequestBuilder } from './FormPerfPotSummarySectionRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, Entity, EntityBuilderType, Link, NumberField, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "FormPerfPotSummarySection" of service "SFOData".
 */
export declare class FormPerfPotSummarySection extends Entity implements FormPerfPotSummarySectionType {
    /**
     * Technical entity name for FormPerfPotSummarySection.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for FormPerfPotSummarySection.
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
     * One-to-many navigation property to the [[FormUserRatingComment]] entity.
     */
    othersSectionComments: FormUserRatingComment[];
    /**
     * One-to-one navigation property to the [[FormUserRatingComment]] entity.
     */
    performanceRating: FormUserRatingComment;
    /**
     * One-to-one navigation property to the [[FormUserRatingComment]] entity.
     */
    potentialRating: FormUserRatingComment;
    /**
     * One-to-one navigation property to the [[FormUserRatingComment]] entity.
     */
    sectionComment: FormUserRatingComment;
    /**
     * One-to-one navigation property to the [[FormSectionConfiguration]] entity.
     */
    sectionConfiguration: FormSectionConfiguration;
    /**
     * Returns an entity builder to construct instances `FormPerfPotSummarySection`.
     * @returns A builder that constructs instances of entity type `FormPerfPotSummarySection`.
     */
    static builder(): EntityBuilderType<FormPerfPotSummarySection, FormPerfPotSummarySectionTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `FormPerfPotSummarySection` entity type.
     * @returns A `FormPerfPotSummarySection` request builder.
     */
    static requestBuilder(): FormPerfPotSummarySectionRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `FormPerfPotSummarySection`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `FormPerfPotSummarySection`.
     */
    static customField(fieldName: string): CustomField<FormPerfPotSummarySection>;
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
export interface FormPerfPotSummarySectionType {
    formContentId: BigNumber;
    formDataId: BigNumber;
    sectionDescription?: string;
    sectionIndex: number;
    sectionName?: string;
    othersSectionComments: FormUserRatingCommentType[];
    performanceRating: FormUserRatingCommentType;
    potentialRating: FormUserRatingCommentType;
    sectionComment: FormUserRatingCommentType;
    sectionConfiguration: FormSectionConfigurationType;
}
export interface FormPerfPotSummarySectionTypeForceMandatory {
    formContentId: BigNumber;
    formDataId: BigNumber;
    sectionDescription: string;
    sectionIndex: number;
    sectionName: string;
    othersSectionComments: FormUserRatingCommentType[];
    performanceRating: FormUserRatingCommentType;
    potentialRating: FormUserRatingCommentType;
    sectionComment: FormUserRatingCommentType;
    sectionConfiguration: FormSectionConfigurationType;
}
export declare namespace FormPerfPotSummarySection {
    /**
     * Static representation of the [[formContentId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FORM_CONTENT_ID: BigNumberField<FormPerfPotSummarySection>;
    /**
     * Static representation of the [[formDataId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FORM_DATA_ID: BigNumberField<FormPerfPotSummarySection>;
    /**
     * Static representation of the [[sectionDescription]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SECTION_DESCRIPTION: StringField<FormPerfPotSummarySection>;
    /**
     * Static representation of the [[sectionIndex]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SECTION_INDEX: NumberField<FormPerfPotSummarySection>;
    /**
     * Static representation of the [[sectionName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SECTION_NAME: StringField<FormPerfPotSummarySection>;
    /**
     * Static representation of the one-to-many navigation property [[othersSectionComments]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OTHERS_SECTION_COMMENTS: Link<FormPerfPotSummarySection, FormUserRatingComment>;
    /**
     * Static representation of the one-to-one navigation property [[performanceRating]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PERFORMANCE_RATING: OneToOneLink<FormPerfPotSummarySection, FormUserRatingComment>;
    /**
     * Static representation of the one-to-one navigation property [[potentialRating]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const POTENTIAL_RATING: OneToOneLink<FormPerfPotSummarySection, FormUserRatingComment>;
    /**
     * Static representation of the one-to-one navigation property [[sectionComment]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SECTION_COMMENT: OneToOneLink<FormPerfPotSummarySection, FormUserRatingComment>;
    /**
     * Static representation of the one-to-one navigation property [[sectionConfiguration]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SECTION_CONFIGURATION: OneToOneLink<FormPerfPotSummarySection, FormSectionConfiguration>;
    /**
     * All fields of the FormPerfPotSummarySection entity.
     */
    const _allFields: Array<BigNumberField<FormPerfPotSummarySection> | StringField<FormPerfPotSummarySection> | NumberField<FormPerfPotSummarySection> | Link<FormPerfPotSummarySection, FormUserRatingComment> | OneToOneLink<FormPerfPotSummarySection, FormUserRatingComment> | OneToOneLink<FormPerfPotSummarySection, FormSectionConfiguration>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<FormPerfPotSummarySection>;
    /**
     * All key fields of the FormPerfPotSummarySection entity.
     */
    const _keyFields: Array<Selectable<FormPerfPotSummarySection>>;
    /**
     * Mapping of all key field names to the respective static field property FormPerfPotSummarySection.
     */
    const _keys: {
        [keys: string]: Selectable<FormPerfPotSummarySection>;
    };
}
//# sourceMappingURL=FormPerfPotSummarySection.d.ts.map