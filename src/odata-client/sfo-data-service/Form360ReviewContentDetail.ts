/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Form360ReviewContentDetailRequestBuilder } from './Form360ReviewContentDetailRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "Form360ReviewContentDetail" of service "SFOData".
 */
export class Form360ReviewContentDetail extends Entity implements Form360ReviewContentDetailType {
  /**
   * Technical entity name for Form360ReviewContentDetail.
   */
  static _entityName = 'Form360ReviewContentDetail';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for Form360ReviewContentDetail.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * formContentId.
   */
  formContentId!: BigNumber;
  /**
   * formDataId.
   */
  formDataId!: BigNumber;
  /**
   * formLocale.
   * @nullable
   */
  formLocale?: string;
  /**
   * formMode.
   * @nullable
   */
  formMode?: string;
  /**
   * formTitle.
   * @nullable
   */
  formTitle?: string;
  /**
   * originatorUserId.
   * @nullable
   */
  originatorUserId?: string;
  /**
   * originatorUserName.
   * @nullable
   */
  originatorUserName?: string;
  /**
   * sectionsInSummaryView.
   * @nullable
   */
  sectionsInSummaryView?: string;
  /**
   * subjectFirstName.
   * @nullable
   */
  subjectFirstName?: string;
  /**
   * subjectUserGender.
   * @nullable
   */
  subjectUserGender?: string;
  /**
   * subjectUserId.
   * @nullable
   */
  subjectUserId?: string;
  /**
   * subjectUserName.
   * @nullable
   */
  subjectUserName?: string;
  /**
   * One-to-many navigation property to the [[FormCompetencySection]] entity.
   */
  competencySections!: FormCompetencySection[];
  /**
   * One-to-many navigation property to the [[FormCustomSection]] entity.
   */
  customSections!: FormCustomSection[];
  /**
   * One-to-one navigation property to the [[Form360RaterSection]] entity.
   */
  form360RaterSection!: Form360RaterSection;
  /**
   * One-to-one navigation property to the [[FormIntroductionSection]] entity.
   */
  introductionSection!: FormIntroductionSection;
  /**
   * One-to-one navigation property to the [[FormJobDescSection]] entity.
   */
  jobDescSection!: FormJobDescSection;
  /**
   * One-to-many navigation property to the [[FormObjectiveSection]] entity.
   */
  objectiveSections!: FormObjectiveSection[];
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  originatorUser!: User;
  /**
   * One-to-one navigation property to the [[Form360ParticipantSection]] entity.
   */
  participantSection!: Form360ParticipantSection;
  /**
   * One-to-many navigation property to the [[FormRaterListSection]] entity.
   */
  raterListSection!: FormRaterListSection[];
  /**
   * One-to-one navigation property to the [[FormReviewInfoSection]] entity.
   */
  reviewInfoSection!: FormReviewInfoSection;
  /**
   * One-to-one navigation property to the [[FormReviewerInfoSection]] entity.
   */
  reviewerInfoSection!: FormReviewerInfoSection;
  /**
   * One-to-one navigation property to the [[FormSignatureSection]] entity.
   */
  signatureSection!: FormSignatureSection;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  subjectUser!: User;
  /**
   * One-to-one navigation property to the [[FormSummarySection]] entity.
   */
  summarySection!: FormSummarySection;
  /**
   * One-to-one navigation property to the [[Form360SummaryViewSection]] entity.
   */
  summaryViewSection!: Form360SummaryViewSection;
  /**
   * One-to-one navigation property to the [[FormUserInformationSection]] entity.
   */
  userInformationSection!: FormUserInformationSection;

  /**
   * Returns an entity builder to construct instances `Form360ReviewContentDetail`.
   * @returns A builder that constructs instances of entity type `Form360ReviewContentDetail`.
   */
  static builder(): EntityBuilderType<Form360ReviewContentDetail, Form360ReviewContentDetailTypeForceMandatory> {
    return Entity.entityBuilder(Form360ReviewContentDetail);
  }

  /**
   * Returns a request builder to construct requests for operations on the `Form360ReviewContentDetail` entity type.
   * @returns A `Form360ReviewContentDetail` request builder.
   */
  static requestBuilder(): Form360ReviewContentDetailRequestBuilder {
    return new Form360ReviewContentDetailRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `Form360ReviewContentDetail`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `Form360ReviewContentDetail`.
   */
  static customField(fieldName: string): CustomField<Form360ReviewContentDetail> {
    return Entity.customFieldSelector(fieldName, Form360ReviewContentDetail);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { FormCompetencySection, FormCompetencySectionType } from './FormCompetencySection';
import { FormCustomSection, FormCustomSectionType } from './FormCustomSection';
import { Form360RaterSection, Form360RaterSectionType } from './Form360RaterSection';
import { FormIntroductionSection, FormIntroductionSectionType } from './FormIntroductionSection';
import { FormJobDescSection, FormJobDescSectionType } from './FormJobDescSection';
import { FormObjectiveSection, FormObjectiveSectionType } from './FormObjectiveSection';
import { User, UserType } from './User';
import { Form360ParticipantSection, Form360ParticipantSectionType } from './Form360ParticipantSection';
import { FormRaterListSection, FormRaterListSectionType } from './FormRaterListSection';
import { FormReviewInfoSection, FormReviewInfoSectionType } from './FormReviewInfoSection';
import { FormReviewerInfoSection, FormReviewerInfoSectionType } from './FormReviewerInfoSection';
import { FormSignatureSection, FormSignatureSectionType } from './FormSignatureSection';
import { FormSummarySection, FormSummarySectionType } from './FormSummarySection';
import { Form360SummaryViewSection, Form360SummaryViewSectionType } from './Form360SummaryViewSection';
import { FormUserInformationSection, FormUserInformationSectionType } from './FormUserInformationSection';

export interface Form360ReviewContentDetailType {
  formContentId: BigNumber;
  formDataId: BigNumber;
  formLocale?: string;
  formMode?: string;
  formTitle?: string;
  originatorUserId?: string;
  originatorUserName?: string;
  sectionsInSummaryView?: string;
  subjectFirstName?: string;
  subjectUserGender?: string;
  subjectUserId?: string;
  subjectUserName?: string;
  competencySections: FormCompetencySectionType[];
  customSections: FormCustomSectionType[];
  form360RaterSection: Form360RaterSectionType;
  introductionSection: FormIntroductionSectionType;
  jobDescSection: FormJobDescSectionType;
  objectiveSections: FormObjectiveSectionType[];
  originatorUser: UserType;
  participantSection: Form360ParticipantSectionType;
  raterListSection: FormRaterListSectionType[];
  reviewInfoSection: FormReviewInfoSectionType;
  reviewerInfoSection: FormReviewerInfoSectionType;
  signatureSection: FormSignatureSectionType;
  subjectUser: UserType;
  summarySection: FormSummarySectionType;
  summaryViewSection: Form360SummaryViewSectionType;
  userInformationSection: FormUserInformationSectionType;
}

export interface Form360ReviewContentDetailTypeForceMandatory {
  formContentId: BigNumber;
  formDataId: BigNumber;
  formLocale: string;
  formMode: string;
  formTitle: string;
  originatorUserId: string;
  originatorUserName: string;
  sectionsInSummaryView: string;
  subjectFirstName: string;
  subjectUserGender: string;
  subjectUserId: string;
  subjectUserName: string;
  competencySections: FormCompetencySectionType[];
  customSections: FormCustomSectionType[];
  form360RaterSection: Form360RaterSectionType;
  introductionSection: FormIntroductionSectionType;
  jobDescSection: FormJobDescSectionType;
  objectiveSections: FormObjectiveSectionType[];
  originatorUser: UserType;
  participantSection: Form360ParticipantSectionType;
  raterListSection: FormRaterListSectionType[];
  reviewInfoSection: FormReviewInfoSectionType;
  reviewerInfoSection: FormReviewerInfoSectionType;
  signatureSection: FormSignatureSectionType;
  subjectUser: UserType;
  summarySection: FormSummarySectionType;
  summaryViewSection: Form360SummaryViewSectionType;
  userInformationSection: FormUserInformationSectionType;
}

export namespace Form360ReviewContentDetail {
  /**
   * Static representation of the [[formContentId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_CONTENT_ID: BigNumberField<Form360ReviewContentDetail> = new BigNumberField('formContentId', Form360ReviewContentDetail, 'Edm.Int64');
  /**
   * Static representation of the [[formDataId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_DATA_ID: BigNumberField<Form360ReviewContentDetail> = new BigNumberField('formDataId', Form360ReviewContentDetail, 'Edm.Int64');
  /**
   * Static representation of the [[formLocale]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_LOCALE: StringField<Form360ReviewContentDetail> = new StringField('formLocale', Form360ReviewContentDetail, 'Edm.String');
  /**
   * Static representation of the [[formMode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_MODE: StringField<Form360ReviewContentDetail> = new StringField('formMode', Form360ReviewContentDetail, 'Edm.String');
  /**
   * Static representation of the [[formTitle]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_TITLE: StringField<Form360ReviewContentDetail> = new StringField('formTitle', Form360ReviewContentDetail, 'Edm.String');
  /**
   * Static representation of the [[originatorUserId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ORIGINATOR_USER_ID: StringField<Form360ReviewContentDetail> = new StringField('originatorUserId', Form360ReviewContentDetail, 'Edm.String');
  /**
   * Static representation of the [[originatorUserName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ORIGINATOR_USER_NAME: StringField<Form360ReviewContentDetail> = new StringField('originatorUserName', Form360ReviewContentDetail, 'Edm.String');
  /**
   * Static representation of the [[sectionsInSummaryView]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SECTIONS_IN_SUMMARY_VIEW: StringField<Form360ReviewContentDetail> = new StringField('sectionsInSummaryView', Form360ReviewContentDetail, 'Edm.String');
  /**
   * Static representation of the [[subjectFirstName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUBJECT_FIRST_NAME: StringField<Form360ReviewContentDetail> = new StringField('subjectFirstName', Form360ReviewContentDetail, 'Edm.String');
  /**
   * Static representation of the [[subjectUserGender]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUBJECT_USER_GENDER: StringField<Form360ReviewContentDetail> = new StringField('subjectUserGender', Form360ReviewContentDetail, 'Edm.String');
  /**
   * Static representation of the [[subjectUserId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUBJECT_USER_ID: StringField<Form360ReviewContentDetail> = new StringField('subjectUserId', Form360ReviewContentDetail, 'Edm.String');
  /**
   * Static representation of the [[subjectUserName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUBJECT_USER_NAME: StringField<Form360ReviewContentDetail> = new StringField('subjectUserName', Form360ReviewContentDetail, 'Edm.String');
  /**
   * Static representation of the one-to-many navigation property [[competencySections]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMPETENCY_SECTIONS: Link<Form360ReviewContentDetail, FormCompetencySection> = new Link('competencySections', Form360ReviewContentDetail, FormCompetencySection);
  /**
   * Static representation of the one-to-many navigation property [[customSections]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOM_SECTIONS: Link<Form360ReviewContentDetail, FormCustomSection> = new Link('customSections', Form360ReviewContentDetail, FormCustomSection);
  /**
   * Static representation of the one-to-one navigation property [[form360RaterSection]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_360_RATER_SECTION: OneToOneLink<Form360ReviewContentDetail, Form360RaterSection> = new OneToOneLink('form360RaterSection', Form360ReviewContentDetail, Form360RaterSection);
  /**
   * Static representation of the one-to-one navigation property [[introductionSection]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INTRODUCTION_SECTION: OneToOneLink<Form360ReviewContentDetail, FormIntroductionSection> = new OneToOneLink('introductionSection', Form360ReviewContentDetail, FormIntroductionSection);
  /**
   * Static representation of the one-to-one navigation property [[jobDescSection]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_DESC_SECTION: OneToOneLink<Form360ReviewContentDetail, FormJobDescSection> = new OneToOneLink('jobDescSection', Form360ReviewContentDetail, FormJobDescSection);
  /**
   * Static representation of the one-to-many navigation property [[objectiveSections]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OBJECTIVE_SECTIONS: Link<Form360ReviewContentDetail, FormObjectiveSection> = new Link('objectiveSections', Form360ReviewContentDetail, FormObjectiveSection);
  /**
   * Static representation of the one-to-one navigation property [[originatorUser]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ORIGINATOR_USER: OneToOneLink<Form360ReviewContentDetail, User> = new OneToOneLink('originatorUser', Form360ReviewContentDetail, User);
  /**
   * Static representation of the one-to-one navigation property [[participantSection]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PARTICIPANT_SECTION: OneToOneLink<Form360ReviewContentDetail, Form360ParticipantSection> = new OneToOneLink('participantSection', Form360ReviewContentDetail, Form360ParticipantSection);
  /**
   * Static representation of the one-to-many navigation property [[raterListSection]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RATER_LIST_SECTION: Link<Form360ReviewContentDetail, FormRaterListSection> = new Link('raterListSection', Form360ReviewContentDetail, FormRaterListSection);
  /**
   * Static representation of the one-to-one navigation property [[reviewInfoSection]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REVIEW_INFO_SECTION: OneToOneLink<Form360ReviewContentDetail, FormReviewInfoSection> = new OneToOneLink('reviewInfoSection', Form360ReviewContentDetail, FormReviewInfoSection);
  /**
   * Static representation of the one-to-one navigation property [[reviewerInfoSection]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REVIEWER_INFO_SECTION: OneToOneLink<Form360ReviewContentDetail, FormReviewerInfoSection> = new OneToOneLink('reviewerInfoSection', Form360ReviewContentDetail, FormReviewerInfoSection);
  /**
   * Static representation of the one-to-one navigation property [[signatureSection]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SIGNATURE_SECTION: OneToOneLink<Form360ReviewContentDetail, FormSignatureSection> = new OneToOneLink('signatureSection', Form360ReviewContentDetail, FormSignatureSection);
  /**
   * Static representation of the one-to-one navigation property [[subjectUser]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUBJECT_USER: OneToOneLink<Form360ReviewContentDetail, User> = new OneToOneLink('subjectUser', Form360ReviewContentDetail, User);
  /**
   * Static representation of the one-to-one navigation property [[summarySection]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUMMARY_SECTION: OneToOneLink<Form360ReviewContentDetail, FormSummarySection> = new OneToOneLink('summarySection', Form360ReviewContentDetail, FormSummarySection);
  /**
   * Static representation of the one-to-one navigation property [[summaryViewSection]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUMMARY_VIEW_SECTION: OneToOneLink<Form360ReviewContentDetail, Form360SummaryViewSection> = new OneToOneLink('summaryViewSection', Form360ReviewContentDetail, Form360SummaryViewSection);
  /**
   * Static representation of the one-to-one navigation property [[userInformationSection]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_INFORMATION_SECTION: OneToOneLink<Form360ReviewContentDetail, FormUserInformationSection> = new OneToOneLink('userInformationSection', Form360ReviewContentDetail, FormUserInformationSection);
  /**
   * All fields of the Form360ReviewContentDetail entity.
   */
  export const _allFields: Array<BigNumberField<Form360ReviewContentDetail> | StringField<Form360ReviewContentDetail> | Link<Form360ReviewContentDetail, FormCompetencySection> | Link<Form360ReviewContentDetail, FormCustomSection> | OneToOneLink<Form360ReviewContentDetail, Form360RaterSection> | OneToOneLink<Form360ReviewContentDetail, FormIntroductionSection> | OneToOneLink<Form360ReviewContentDetail, FormJobDescSection> | Link<Form360ReviewContentDetail, FormObjectiveSection> | OneToOneLink<Form360ReviewContentDetail, User> | OneToOneLink<Form360ReviewContentDetail, Form360ParticipantSection> | Link<Form360ReviewContentDetail, FormRaterListSection> | OneToOneLink<Form360ReviewContentDetail, FormReviewInfoSection> | OneToOneLink<Form360ReviewContentDetail, FormReviewerInfoSection> | OneToOneLink<Form360ReviewContentDetail, FormSignatureSection> | OneToOneLink<Form360ReviewContentDetail, FormSummarySection> | OneToOneLink<Form360ReviewContentDetail, Form360SummaryViewSection> | OneToOneLink<Form360ReviewContentDetail, FormUserInformationSection>> = [
    Form360ReviewContentDetail.FORM_CONTENT_ID,
    Form360ReviewContentDetail.FORM_DATA_ID,
    Form360ReviewContentDetail.FORM_LOCALE,
    Form360ReviewContentDetail.FORM_MODE,
    Form360ReviewContentDetail.FORM_TITLE,
    Form360ReviewContentDetail.ORIGINATOR_USER_ID,
    Form360ReviewContentDetail.ORIGINATOR_USER_NAME,
    Form360ReviewContentDetail.SECTIONS_IN_SUMMARY_VIEW,
    Form360ReviewContentDetail.SUBJECT_FIRST_NAME,
    Form360ReviewContentDetail.SUBJECT_USER_GENDER,
    Form360ReviewContentDetail.SUBJECT_USER_ID,
    Form360ReviewContentDetail.SUBJECT_USER_NAME,
    Form360ReviewContentDetail.COMPETENCY_SECTIONS,
    Form360ReviewContentDetail.CUSTOM_SECTIONS,
    Form360ReviewContentDetail.FORM_360_RATER_SECTION,
    Form360ReviewContentDetail.INTRODUCTION_SECTION,
    Form360ReviewContentDetail.JOB_DESC_SECTION,
    Form360ReviewContentDetail.OBJECTIVE_SECTIONS,
    Form360ReviewContentDetail.ORIGINATOR_USER,
    Form360ReviewContentDetail.PARTICIPANT_SECTION,
    Form360ReviewContentDetail.RATER_LIST_SECTION,
    Form360ReviewContentDetail.REVIEW_INFO_SECTION,
    Form360ReviewContentDetail.REVIEWER_INFO_SECTION,
    Form360ReviewContentDetail.SIGNATURE_SECTION,
    Form360ReviewContentDetail.SUBJECT_USER,
    Form360ReviewContentDetail.SUMMARY_SECTION,
    Form360ReviewContentDetail.SUMMARY_VIEW_SECTION,
    Form360ReviewContentDetail.USER_INFORMATION_SECTION
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<Form360ReviewContentDetail> = new AllFields('*', Form360ReviewContentDetail);
  /**
   * All key fields of the Form360ReviewContentDetail entity.
   */
  export const _keyFields: Array<Selectable<Form360ReviewContentDetail>> = [Form360ReviewContentDetail.FORM_CONTENT_ID, Form360ReviewContentDetail.FORM_DATA_ID];
  /**
   * Mapping of all key field names to the respective static field property Form360ReviewContentDetail.
   */
  export const _keys: { [keys: string]: Selectable<Form360ReviewContentDetail> } = Form360ReviewContentDetail._keyFields.reduce((acc: { [keys: string]: Selectable<Form360ReviewContentDetail> }, field: Selectable<Form360ReviewContentDetail>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
