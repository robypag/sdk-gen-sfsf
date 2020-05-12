import { FormObjCompSummarySectionRequestBuilder } from './FormObjCompSummarySectionRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, Entity, EntityBuilderType, Link, NumberField, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "FormObjCompSummarySection" of service "SFOData".
 */
export declare class FormObjCompSummarySection extends Entity implements FormObjCompSummarySectionType {
    /**
     * Technical entity name for FormObjCompSummarySection.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for FormObjCompSummarySection.
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
     * sectionCommentsLabel.
     * @nullable
     */
    sectionCommentsLabel?: string;
    /**
     * sectionDescription.
     * @nullable
     */
    sectionDescription?: string;
    /**
     * sectionIndex.
     * @nullable
     */
    sectionIndex?: number;
    /**
     * sectionName.
     * @nullable
     */
    sectionName?: string;
    /**
     * One-to-one navigation property to the [[FormUserRatingComment]] entity.
     */
    adjustedCompRating: FormUserRatingComment;
    /**
     * One-to-one navigation property to the [[FormUserRatingComment]] entity.
     */
    adjustedObjRating: FormUserRatingComment;
    /**
     * One-to-one navigation property to the [[FormUserRatingComment]] entity.
     */
    calculatedCompRating: FormUserRatingComment;
    /**
     * One-to-one navigation property to the [[FormUserRatingComment]] entity.
     */
    calculatedObjRating: FormUserRatingComment;
    /**
     * One-to-one navigation property to the [[FormUserRatingComment]] entity.
     */
    ococRating: FormUserRatingComment;
    /**
     * One-to-many navigation property to the [[FormUserRatingComment]] entity.
     */
    othersSectionComments: FormUserRatingComment[];
    /**
     * One-to-one navigation property to the [[FormUserRatingComment]] entity.
     */
    overallCompRating: FormUserRatingComment;
    /**
     * One-to-one navigation property to the [[FormUserRatingComment]] entity.
     */
    overallObjRating: FormUserRatingComment;
    /**
     * One-to-one navigation property to the [[FormUserRatingComment]] entity.
     */
    sectComment: FormUserRatingComment;
    /**
     * One-to-one navigation property to the [[FormSectionConfiguration]] entity.
     */
    sectionConfiguration: FormSectionConfiguration;
    /**
     * Returns an entity builder to construct instances `FormObjCompSummarySection`.
     * @returns A builder that constructs instances of entity type `FormObjCompSummarySection`.
     */
    static builder(): EntityBuilderType<FormObjCompSummarySection, FormObjCompSummarySectionTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `FormObjCompSummarySection` entity type.
     * @returns A `FormObjCompSummarySection` request builder.
     */
    static requestBuilder(): FormObjCompSummarySectionRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `FormObjCompSummarySection`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `FormObjCompSummarySection`.
     */
    static customField(fieldName: string): CustomField<FormObjCompSummarySection>;
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
export interface FormObjCompSummarySectionType {
    formContentId: BigNumber;
    formDataId: BigNumber;
    sectionCommentsLabel?: string;
    sectionDescription?: string;
    sectionIndex?: number;
    sectionName?: string;
    adjustedCompRating: FormUserRatingCommentType;
    adjustedObjRating: FormUserRatingCommentType;
    calculatedCompRating: FormUserRatingCommentType;
    calculatedObjRating: FormUserRatingCommentType;
    ococRating: FormUserRatingCommentType;
    othersSectionComments: FormUserRatingCommentType[];
    overallCompRating: FormUserRatingCommentType;
    overallObjRating: FormUserRatingCommentType;
    sectComment: FormUserRatingCommentType;
    sectionConfiguration: FormSectionConfigurationType;
}
export interface FormObjCompSummarySectionTypeForceMandatory {
    formContentId: BigNumber;
    formDataId: BigNumber;
    sectionCommentsLabel: string;
    sectionDescription: string;
    sectionIndex: number;
    sectionName: string;
    adjustedCompRating: FormUserRatingCommentType;
    adjustedObjRating: FormUserRatingCommentType;
    calculatedCompRating: FormUserRatingCommentType;
    calculatedObjRating: FormUserRatingCommentType;
    ococRating: FormUserRatingCommentType;
    othersSectionComments: FormUserRatingCommentType[];
    overallCompRating: FormUserRatingCommentType;
    overallObjRating: FormUserRatingCommentType;
    sectComment: FormUserRatingCommentType;
    sectionConfiguration: FormSectionConfigurationType;
}
export declare namespace FormObjCompSummarySection {
    /**
     * Static representation of the [[formContentId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FORM_CONTENT_ID: BigNumberField<FormObjCompSummarySection>;
    /**
     * Static representation of the [[formDataId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FORM_DATA_ID: BigNumberField<FormObjCompSummarySection>;
    /**
     * Static representation of the [[sectionCommentsLabel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SECTION_COMMENTS_LABEL: StringField<FormObjCompSummarySection>;
    /**
     * Static representation of the [[sectionDescription]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SECTION_DESCRIPTION: StringField<FormObjCompSummarySection>;
    /**
     * Static representation of the [[sectionIndex]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SECTION_INDEX: NumberField<FormObjCompSummarySection>;
    /**
     * Static representation of the [[sectionName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SECTION_NAME: StringField<FormObjCompSummarySection>;
    /**
     * Static representation of the one-to-one navigation property [[adjustedCompRating]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADJUSTED_COMP_RATING: OneToOneLink<FormObjCompSummarySection, FormUserRatingComment>;
    /**
     * Static representation of the one-to-one navigation property [[adjustedObjRating]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADJUSTED_OBJ_RATING: OneToOneLink<FormObjCompSummarySection, FormUserRatingComment>;
    /**
     * Static representation of the one-to-one navigation property [[calculatedCompRating]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CALCULATED_COMP_RATING: OneToOneLink<FormObjCompSummarySection, FormUserRatingComment>;
    /**
     * Static representation of the one-to-one navigation property [[calculatedObjRating]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CALCULATED_OBJ_RATING: OneToOneLink<FormObjCompSummarySection, FormUserRatingComment>;
    /**
     * Static representation of the one-to-one navigation property [[ococRating]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OCOC_RATING: OneToOneLink<FormObjCompSummarySection, FormUserRatingComment>;
    /**
     * Static representation of the one-to-many navigation property [[othersSectionComments]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OTHERS_SECTION_COMMENTS: Link<FormObjCompSummarySection, FormUserRatingComment>;
    /**
     * Static representation of the one-to-one navigation property [[overallCompRating]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OVERALL_COMP_RATING: OneToOneLink<FormObjCompSummarySection, FormUserRatingComment>;
    /**
     * Static representation of the one-to-one navigation property [[overallObjRating]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OVERALL_OBJ_RATING: OneToOneLink<FormObjCompSummarySection, FormUserRatingComment>;
    /**
     * Static representation of the one-to-one navigation property [[sectComment]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SECT_COMMENT: OneToOneLink<FormObjCompSummarySection, FormUserRatingComment>;
    /**
     * Static representation of the one-to-one navigation property [[sectionConfiguration]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SECTION_CONFIGURATION: OneToOneLink<FormObjCompSummarySection, FormSectionConfiguration>;
    /**
     * All fields of the FormObjCompSummarySection entity.
     */
    const _allFields: Array<BigNumberField<FormObjCompSummarySection> | StringField<FormObjCompSummarySection> | NumberField<FormObjCompSummarySection> | OneToOneLink<FormObjCompSummarySection, FormUserRatingComment> | Link<FormObjCompSummarySection, FormUserRatingComment> | OneToOneLink<FormObjCompSummarySection, FormSectionConfiguration>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<FormObjCompSummarySection>;
    /**
     * All key fields of the FormObjCompSummarySection entity.
     */
    const _keyFields: Array<Selectable<FormObjCompSummarySection>>;
    /**
     * Mapping of all key field names to the respective static field property FormObjCompSummarySection.
     */
    const _keys: {
        [keys: string]: Selectable<FormObjCompSummarySection>;
    };
}
//# sourceMappingURL=FormObjCompSummarySection.d.ts.map