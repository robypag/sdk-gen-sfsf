import { FormPmReviewContentDetailRequestBuilder } from './FormPmReviewContentDetailRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "FormPMReviewContentDetail" of service "SFOData".
 */
export declare class FormPmReviewContentDetail extends Entity implements FormPmReviewContentDetailType {
    /**
     * Technical entity name for FormPmReviewContentDetail.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for FormPmReviewContentDetail.
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
     * One-to-many navigation property to the [[FormCompetencySection]] entity.
     */
    competencySections: FormCompetencySection[];
    /**
     * One-to-many navigation property to the [[FormCustomSection]] entity.
     */
    customSections: FormCustomSection[];
    /**
     * One-to-one navigation property to the [[FormIntroductionSection]] entity.
     */
    introductionSection: FormIntroductionSection;
    /**
     * One-to-one navigation property to the [[FormObjCompSummarySection]] entity.
     */
    objCompSummarySection: FormObjCompSummarySection;
    /**
     * One-to-many navigation property to the [[FormObjectiveSection]] entity.
     */
    objectiveSections: FormObjectiveSection[];
    /**
     * One-to-one navigation property to the [[FormPerfPotSummarySection]] entity.
     */
    perfPotSummarySection: FormPerfPotSummarySection;
    /**
     * One-to-one navigation property to the [[FormSignatureSection]] entity.
     */
    signatureSection: FormSignatureSection;
    /**
     * One-to-one navigation property to the [[FormSummarySection]] entity.
     */
    summarySection: FormSummarySection;
    /**
     * One-to-one navigation property to the [[FormUserInformationSection]] entity.
     */
    userInformationSection: FormUserInformationSection;
    /**
     * Returns an entity builder to construct instances `FormPmReviewContentDetail`.
     * @returns A builder that constructs instances of entity type `FormPmReviewContentDetail`.
     */
    static builder(): EntityBuilderType<FormPmReviewContentDetail, FormPmReviewContentDetailTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `FormPmReviewContentDetail` entity type.
     * @returns A `FormPmReviewContentDetail` request builder.
     */
    static requestBuilder(): FormPmReviewContentDetailRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `FormPmReviewContentDetail`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `FormPmReviewContentDetail`.
     */
    static customField(fieldName: string): CustomField<FormPmReviewContentDetail>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { FormCompetencySection, FormCompetencySectionType } from './FormCompetencySection';
import { FormCustomSection, FormCustomSectionType } from './FormCustomSection';
import { FormIntroductionSection, FormIntroductionSectionType } from './FormIntroductionSection';
import { FormObjCompSummarySection, FormObjCompSummarySectionType } from './FormObjCompSummarySection';
import { FormObjectiveSection, FormObjectiveSectionType } from './FormObjectiveSection';
import { FormPerfPotSummarySection, FormPerfPotSummarySectionType } from './FormPerfPotSummarySection';
import { FormSignatureSection, FormSignatureSectionType } from './FormSignatureSection';
import { FormSummarySection, FormSummarySectionType } from './FormSummarySection';
import { FormUserInformationSection, FormUserInformationSectionType } from './FormUserInformationSection';
export interface FormPmReviewContentDetailType {
    formContentId: BigNumber;
    formDataId: BigNumber;
    competencySections: FormCompetencySectionType[];
    customSections: FormCustomSectionType[];
    introductionSection: FormIntroductionSectionType;
    objCompSummarySection: FormObjCompSummarySectionType;
    objectiveSections: FormObjectiveSectionType[];
    perfPotSummarySection: FormPerfPotSummarySectionType;
    signatureSection: FormSignatureSectionType;
    summarySection: FormSummarySectionType;
    userInformationSection: FormUserInformationSectionType;
}
export interface FormPmReviewContentDetailTypeForceMandatory {
    formContentId: BigNumber;
    formDataId: BigNumber;
    competencySections: FormCompetencySectionType[];
    customSections: FormCustomSectionType[];
    introductionSection: FormIntroductionSectionType;
    objCompSummarySection: FormObjCompSummarySectionType;
    objectiveSections: FormObjectiveSectionType[];
    perfPotSummarySection: FormPerfPotSummarySectionType;
    signatureSection: FormSignatureSectionType;
    summarySection: FormSummarySectionType;
    userInformationSection: FormUserInformationSectionType;
}
export declare namespace FormPmReviewContentDetail {
    /**
     * Static representation of the [[formContentId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FORM_CONTENT_ID: BigNumberField<FormPmReviewContentDetail>;
    /**
     * Static representation of the [[formDataId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FORM_DATA_ID: BigNumberField<FormPmReviewContentDetail>;
    /**
     * Static representation of the one-to-many navigation property [[competencySections]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COMPETENCY_SECTIONS: Link<FormPmReviewContentDetail, FormCompetencySection>;
    /**
     * Static representation of the one-to-many navigation property [[customSections]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOM_SECTIONS: Link<FormPmReviewContentDetail, FormCustomSection>;
    /**
     * Static representation of the one-to-one navigation property [[introductionSection]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INTRODUCTION_SECTION: OneToOneLink<FormPmReviewContentDetail, FormIntroductionSection>;
    /**
     * Static representation of the one-to-one navigation property [[objCompSummarySection]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OBJ_COMP_SUMMARY_SECTION: OneToOneLink<FormPmReviewContentDetail, FormObjCompSummarySection>;
    /**
     * Static representation of the one-to-many navigation property [[objectiveSections]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OBJECTIVE_SECTIONS: Link<FormPmReviewContentDetail, FormObjectiveSection>;
    /**
     * Static representation of the one-to-one navigation property [[perfPotSummarySection]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PERF_POT_SUMMARY_SECTION: OneToOneLink<FormPmReviewContentDetail, FormPerfPotSummarySection>;
    /**
     * Static representation of the one-to-one navigation property [[signatureSection]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SIGNATURE_SECTION: OneToOneLink<FormPmReviewContentDetail, FormSignatureSection>;
    /**
     * Static representation of the one-to-one navigation property [[summarySection]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUMMARY_SECTION: OneToOneLink<FormPmReviewContentDetail, FormSummarySection>;
    /**
     * Static representation of the one-to-one navigation property [[userInformationSection]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_INFORMATION_SECTION: OneToOneLink<FormPmReviewContentDetail, FormUserInformationSection>;
    /**
     * All fields of the FormPmReviewContentDetail entity.
     */
    const _allFields: Array<BigNumberField<FormPmReviewContentDetail> | Link<FormPmReviewContentDetail, FormCompetencySection> | Link<FormPmReviewContentDetail, FormCustomSection> | OneToOneLink<FormPmReviewContentDetail, FormIntroductionSection> | OneToOneLink<FormPmReviewContentDetail, FormObjCompSummarySection> | Link<FormPmReviewContentDetail, FormObjectiveSection> | OneToOneLink<FormPmReviewContentDetail, FormPerfPotSummarySection> | OneToOneLink<FormPmReviewContentDetail, FormSignatureSection> | OneToOneLink<FormPmReviewContentDetail, FormSummarySection> | OneToOneLink<FormPmReviewContentDetail, FormUserInformationSection>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<FormPmReviewContentDetail>;
    /**
     * All key fields of the FormPmReviewContentDetail entity.
     */
    const _keyFields: Array<Selectable<FormPmReviewContentDetail>>;
    /**
     * Mapping of all key field names to the respective static field property FormPmReviewContentDetail.
     */
    const _keys: {
        [keys: string]: Selectable<FormPmReviewContentDetail>;
    };
}
//# sourceMappingURL=FormPmReviewContentDetail.d.ts.map