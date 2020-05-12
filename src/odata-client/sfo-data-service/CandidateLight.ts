/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CandidateLightRequestBuilder } from './CandidateLightRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "CandidateLight" of service "SFOData".
 */
export class CandidateLight extends Entity implements CandidateLightType {
  /**
   * Technical entity name for CandidateLight.
   */
  static _entityName = 'CandidateLight';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for CandidateLight.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Address.
   * @nullable
   */
  address?: string;
  /**
   * Agreed to Privacy Statement.
   * @nullable
   */
  agreeToPrivacyStatement?: string;
  /**
   * Anonymized Flag.
   */
  anonymized!: string;
  /**
   * Anonymized Date Time.
   */
  anonymizedDateTime!: Moment;
  /**
   * Work Phone.
   * @nullable
   */
  businessPhone?: string;
  /**
   * Candidate Id.
   */
  candidateId!: BigNumber;
  /**
   * Candidate Locale.
   */
  candidateLocale!: string;
  /**
   * Primary Phone.
   * @nullable
   */
  cellPhone?: string;
  /**
   * City.
   * @nullable
   */
  city?: string;
  /**
   * Consent To Marketing.
   * @nullable
   */
  consentToMarketing?: string;
  /**
   * Email.
   * @nullable
   */
  contactEmail?: string;
  /**
   * Country.
   * @nullable
   */
  country?: string;
  /**
   * Creation Date.
   */
  creationDateTime!: Moment;
  /**
   * Current Company.
   * @nullable
   */
  currentCompany?: string;
  /**
   * Current Title.
   * @nullable
   */
  currentTitle?: string;
  /**
   * Data Privacy Id.
   */
  dataPrivacyId!: BigNumber;
  /**
   * Date of Availability.
   */
  dateofAvailability!: Moment;
  /**
   * External Candidate.
   */
  externalCandidate!: boolean;
  /**
   * First Name.
   * @nullable
   */
  firstName?: string;
  /**
   * Alternate Phone.
   * @nullable
   */
  homePhone?: string;
  /**
   * Last login date.
   */
  lastLoginDateTime!: Moment;
  /**
   * Last Modified Date.
   */
  lastModifiedDateTime!: Moment;
  /**
   * Last Name.
   * @nullable
   */
  lastName?: string;
  /**
   * Middle Name.
   * @nullable
   */
  middleName?: string;
  /**
   * Partner Member Id.
   */
  partnerMemberId!: string;
  /**
   * Partner Source.
   */
  partnerSource!: BigNumber;
  /**
   * Password.
   * @nullable
   */
  password?: string;
  /**
   * Primary Email.
   */
  primaryEmail!: string;
  /**
   * Privacy Acceptence Date.
   */
  privacyAcceptDateTime!: Moment;
  /**
   * Public Intranet.
   */
  publicIntranet!: boolean;
  /**
   * sendCandWelcomeEmail.
   * @nullable
   */
  sendCandWelcomeEmail?: string;
  /**
   * Share Profile flag.
   */
  shareProfile!: string;
  /**
   * Users sys id.
   */
  usersSysId!: string;
  /**
   * Visibility Option.
   */
  visibilityOption!: boolean;
  /**
   * Postal Code.
   * @nullable
   */
  zip?: string;
  /**
   * One-to-many navigation property to the [[Attachment]] entity.
   */
  attachment1!: Attachment[];
  /**
   * One-to-one navigation property to the [[CandidateProfileConversionInfo]] entity.
   */
  candidateProfileConversionInfo!: CandidateProfileConversionInfo;
  /**
   * One-to-one navigation property to the [[CandidateProfileExtension]] entity.
   */
  candidateProfileExtension!: CandidateProfileExtension;
  /**
   * One-to-many navigation property to the [[CandidateComments]] entity.
   */
  comments!: CandidateComments[];
  /**
   * One-to-one navigation property to the [[Attachment]] entity.
   */
  coverLetter!: Attachment;
  /**
   * One-to-many navigation property to the [[CandidateBackground_Education]] entity.
   */
  education!: CandidateBackground_Education[];
  /**
   * One-to-many navigation property to the [[CandidateBackground_InsideWorkExperience]] entity.
   */
  insideWorkExperience!: CandidateBackground_InsideWorkExperience[];
  /**
   * One-to-many navigation property to the [[JobReqFwdCandidates]] entity.
   */
  jobReqFwdCandidates!: JobReqFwdCandidates[];
  /**
   * One-to-many navigation property to the [[JobApplication]] entity.
   */
  jobsApplied!: JobApplication[];
  /**
   * One-to-many navigation property to the [[CandidateBackground_Languages]] entity.
   */
  languages!: CandidateBackground_Languages[];
  /**
   * One-to-many navigation property to the [[CandidateBackground_Mobility]] entity.
   */
  mobility!: CandidateBackground_Mobility[];
  /**
   * One-to-many navigation property to the [[CandidateBackground_OutsideWorkExperience]] entity.
   */
  outsideWorkExperience!: CandidateBackground_OutsideWorkExperience[];
  /**
   * One-to-one navigation property to the [[Attachment]] entity.
   */
  resume!: Attachment;
  /**
   * One-to-many navigation property to the [[PicklistOption]] entity.
   */
  state!: PicklistOption[];
  /**
   * One-to-many navigation property to the [[CandidateTags]] entity.
   */
  tags!: CandidateTags[];

  /**
   * Returns an entity builder to construct instances `CandidateLight`.
   * @returns A builder that constructs instances of entity type `CandidateLight`.
   */
  static builder(): EntityBuilderType<CandidateLight, CandidateLightTypeForceMandatory> {
    return Entity.entityBuilder(CandidateLight);
  }

  /**
   * Returns a request builder to construct requests for operations on the `CandidateLight` entity type.
   * @returns A `CandidateLight` request builder.
   */
  static requestBuilder(): CandidateLightRequestBuilder {
    return new CandidateLightRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `CandidateLight`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `CandidateLight`.
   */
  static customField(fieldName: string): CustomField<CandidateLight> {
    return Entity.customFieldSelector(fieldName, CandidateLight);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { Attachment, AttachmentType } from './Attachment';
import { CandidateProfileConversionInfo, CandidateProfileConversionInfoType } from './CandidateProfileConversionInfo';
import { CandidateProfileExtension, CandidateProfileExtensionType } from './CandidateProfileExtension';
import { CandidateComments, CandidateCommentsType } from './CandidateComments';
import { CandidateBackground_Education, CandidateBackground_EducationType } from './CandidateBackground_Education';
import { CandidateBackground_InsideWorkExperience, CandidateBackground_InsideWorkExperienceType } from './CandidateBackground_InsideWorkExperience';
import { JobReqFwdCandidates, JobReqFwdCandidatesType } from './JobReqFwdCandidates';
import { JobApplication, JobApplicationType } from './JobApplication';
import { CandidateBackground_Languages, CandidateBackground_LanguagesType } from './CandidateBackground_Languages';
import { CandidateBackground_Mobility, CandidateBackground_MobilityType } from './CandidateBackground_Mobility';
import { CandidateBackground_OutsideWorkExperience, CandidateBackground_OutsideWorkExperienceType } from './CandidateBackground_OutsideWorkExperience';
import { PicklistOption, PicklistOptionType } from './PicklistOption';
import { CandidateTags, CandidateTagsType } from './CandidateTags';

export interface CandidateLightType {
  address?: string;
  agreeToPrivacyStatement?: string;
  anonymized: string;
  anonymizedDateTime: Moment;
  businessPhone?: string;
  candidateId: BigNumber;
  candidateLocale: string;
  cellPhone?: string;
  city?: string;
  consentToMarketing?: string;
  contactEmail?: string;
  country?: string;
  creationDateTime: Moment;
  currentCompany?: string;
  currentTitle?: string;
  dataPrivacyId: BigNumber;
  dateofAvailability: Moment;
  externalCandidate: boolean;
  firstName?: string;
  homePhone?: string;
  lastLoginDateTime: Moment;
  lastModifiedDateTime: Moment;
  lastName?: string;
  middleName?: string;
  partnerMemberId: string;
  partnerSource: BigNumber;
  password?: string;
  primaryEmail: string;
  privacyAcceptDateTime: Moment;
  publicIntranet: boolean;
  sendCandWelcomeEmail?: string;
  shareProfile: string;
  usersSysId: string;
  visibilityOption: boolean;
  zip?: string;
  attachment1: AttachmentType[];
  candidateProfileConversionInfo: CandidateProfileConversionInfoType;
  candidateProfileExtension: CandidateProfileExtensionType;
  comments: CandidateCommentsType[];
  coverLetter: AttachmentType;
  education: CandidateBackground_EducationType[];
  insideWorkExperience: CandidateBackground_InsideWorkExperienceType[];
  jobReqFwdCandidates: JobReqFwdCandidatesType[];
  jobsApplied: JobApplicationType[];
  languages: CandidateBackground_LanguagesType[];
  mobility: CandidateBackground_MobilityType[];
  outsideWorkExperience: CandidateBackground_OutsideWorkExperienceType[];
  resume: AttachmentType;
  state: PicklistOptionType[];
  tags: CandidateTagsType[];
}

export interface CandidateLightTypeForceMandatory {
  address: string;
  agreeToPrivacyStatement: string;
  anonymized: string;
  anonymizedDateTime: Moment;
  businessPhone: string;
  candidateId: BigNumber;
  candidateLocale: string;
  cellPhone: string;
  city: string;
  consentToMarketing: string;
  contactEmail: string;
  country: string;
  creationDateTime: Moment;
  currentCompany: string;
  currentTitle: string;
  dataPrivacyId: BigNumber;
  dateofAvailability: Moment;
  externalCandidate: boolean;
  firstName: string;
  homePhone: string;
  lastLoginDateTime: Moment;
  lastModifiedDateTime: Moment;
  lastName: string;
  middleName: string;
  partnerMemberId: string;
  partnerSource: BigNumber;
  password: string;
  primaryEmail: string;
  privacyAcceptDateTime: Moment;
  publicIntranet: boolean;
  sendCandWelcomeEmail: string;
  shareProfile: string;
  usersSysId: string;
  visibilityOption: boolean;
  zip: string;
  attachment1: AttachmentType[];
  candidateProfileConversionInfo: CandidateProfileConversionInfoType;
  candidateProfileExtension: CandidateProfileExtensionType;
  comments: CandidateCommentsType[];
  coverLetter: AttachmentType;
  education: CandidateBackground_EducationType[];
  insideWorkExperience: CandidateBackground_InsideWorkExperienceType[];
  jobReqFwdCandidates: JobReqFwdCandidatesType[];
  jobsApplied: JobApplicationType[];
  languages: CandidateBackground_LanguagesType[];
  mobility: CandidateBackground_MobilityType[];
  outsideWorkExperience: CandidateBackground_OutsideWorkExperienceType[];
  resume: AttachmentType;
  state: PicklistOptionType[];
  tags: CandidateTagsType[];
}

export namespace CandidateLight {
  /**
   * Static representation of the [[address]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS: StringField<CandidateLight> = new StringField('address', CandidateLight, 'Edm.String');
  /**
   * Static representation of the [[agreeToPrivacyStatement]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const AGREE_TO_PRIVACY_STATEMENT: StringField<CandidateLight> = new StringField('agreeToPrivacyStatement', CandidateLight, 'Edm.String');
  /**
   * Static representation of the [[anonymized]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ANONYMIZED: StringField<CandidateLight> = new StringField('anonymized', CandidateLight, 'Edm.String');
  /**
   * Static representation of the [[anonymizedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ANONYMIZED_DATE_TIME: DateField<CandidateLight> = new DateField('anonymizedDateTime', CandidateLight, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[businessPhone]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PHONE: StringField<CandidateLight> = new StringField('businessPhone', CandidateLight, 'Edm.String');
  /**
   * Static representation of the [[candidateId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CANDIDATE_ID: BigNumberField<CandidateLight> = new BigNumberField('candidateId', CandidateLight, 'Edm.Int64');
  /**
   * Static representation of the [[candidateLocale]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CANDIDATE_LOCALE: StringField<CandidateLight> = new StringField('candidateLocale', CandidateLight, 'Edm.String');
  /**
   * Static representation of the [[cellPhone]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CELL_PHONE: StringField<CandidateLight> = new StringField('cellPhone', CandidateLight, 'Edm.String');
  /**
   * Static representation of the [[city]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CITY: StringField<CandidateLight> = new StringField('city', CandidateLight, 'Edm.String');
  /**
   * Static representation of the [[consentToMarketing]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONSENT_TO_MARKETING: StringField<CandidateLight> = new StringField('consentToMarketing', CandidateLight, 'Edm.String');
  /**
   * Static representation of the [[contactEmail]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONTACT_EMAIL: StringField<CandidateLight> = new StringField('contactEmail', CandidateLight, 'Edm.String');
  /**
   * Static representation of the [[country]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY: StringField<CandidateLight> = new StringField('country', CandidateLight, 'Edm.String');
  /**
   * Static representation of the [[creationDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATION_DATE_TIME: DateField<CandidateLight> = new DateField('creationDateTime', CandidateLight, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[currentCompany]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CURRENT_COMPANY: StringField<CandidateLight> = new StringField('currentCompany', CandidateLight, 'Edm.String');
  /**
   * Static representation of the [[currentTitle]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CURRENT_TITLE: StringField<CandidateLight> = new StringField('currentTitle', CandidateLight, 'Edm.String');
  /**
   * Static representation of the [[dataPrivacyId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DATA_PRIVACY_ID: BigNumberField<CandidateLight> = new BigNumberField('dataPrivacyId', CandidateLight, 'Edm.Int64');
  /**
   * Static representation of the [[dateofAvailability]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DATEOF_AVAILABILITY: DateField<CandidateLight> = new DateField('dateofAvailability', CandidateLight, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[externalCandidate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CANDIDATE: BooleanField<CandidateLight> = new BooleanField('externalCandidate', CandidateLight, 'Edm.Boolean');
  /**
   * Static representation of the [[firstName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FIRST_NAME: StringField<CandidateLight> = new StringField('firstName', CandidateLight, 'Edm.String');
  /**
   * Static representation of the [[homePhone]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HOME_PHONE: StringField<CandidateLight> = new StringField('homePhone', CandidateLight, 'Edm.String');
  /**
   * Static representation of the [[lastLoginDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_LOGIN_DATE_TIME: DateField<CandidateLight> = new DateField('lastLoginDateTime', CandidateLight, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<CandidateLight> = new DateField('lastModifiedDateTime', CandidateLight, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[lastName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_NAME: StringField<CandidateLight> = new StringField('lastName', CandidateLight, 'Edm.String');
  /**
   * Static representation of the [[middleName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MIDDLE_NAME: StringField<CandidateLight> = new StringField('middleName', CandidateLight, 'Edm.String');
  /**
   * Static representation of the [[partnerMemberId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PARTNER_MEMBER_ID: StringField<CandidateLight> = new StringField('partnerMemberId', CandidateLight, 'Edm.String');
  /**
   * Static representation of the [[partnerSource]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PARTNER_SOURCE: BigNumberField<CandidateLight> = new BigNumberField('partnerSource', CandidateLight, 'Edm.Int64');
  /**
   * Static representation of the [[password]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PASSWORD: StringField<CandidateLight> = new StringField('password', CandidateLight, 'Edm.String');
  /**
   * Static representation of the [[primaryEmail]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRIMARY_EMAIL: StringField<CandidateLight> = new StringField('primaryEmail', CandidateLight, 'Edm.String');
  /**
   * Static representation of the [[privacyAcceptDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRIVACY_ACCEPT_DATE_TIME: DateField<CandidateLight> = new DateField('privacyAcceptDateTime', CandidateLight, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[publicIntranet]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PUBLIC_INTRANET: BooleanField<CandidateLight> = new BooleanField('publicIntranet', CandidateLight, 'Edm.Boolean');
  /**
   * Static representation of the [[sendCandWelcomeEmail]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SEND_CAND_WELCOME_EMAIL: StringField<CandidateLight> = new StringField('sendCandWelcomeEmail', CandidateLight, 'Edm.String');
  /**
   * Static representation of the [[shareProfile]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SHARE_PROFILE: StringField<CandidateLight> = new StringField('shareProfile', CandidateLight, 'Edm.String');
  /**
   * Static representation of the [[usersSysId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USERS_SYS_ID: StringField<CandidateLight> = new StringField('usersSysId', CandidateLight, 'Edm.String');
  /**
   * Static representation of the [[visibilityOption]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VISIBILITY_OPTION: BooleanField<CandidateLight> = new BooleanField('visibilityOption', CandidateLight, 'Edm.Boolean');
  /**
   * Static representation of the [[zip]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ZIP: StringField<CandidateLight> = new StringField('zip', CandidateLight, 'Edm.String');
  /**
   * Static representation of the one-to-many navigation property [[attachment1]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ATTACHMENT_1: Link<CandidateLight, Attachment> = new Link('attachment1', CandidateLight, Attachment);
  /**
   * Static representation of the one-to-one navigation property [[candidateProfileConversionInfo]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CANDIDATE_PROFILE_CONVERSION_INFO: OneToOneLink<CandidateLight, CandidateProfileConversionInfo> = new OneToOneLink('candidateProfileConversionInfo', CandidateLight, CandidateProfileConversionInfo);
  /**
   * Static representation of the one-to-one navigation property [[candidateProfileExtension]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CANDIDATE_PROFILE_EXTENSION: OneToOneLink<CandidateLight, CandidateProfileExtension> = new OneToOneLink('candidateProfileExtension', CandidateLight, CandidateProfileExtension);
  /**
   * Static representation of the one-to-many navigation property [[comments]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMMENTS: Link<CandidateLight, CandidateComments> = new Link('comments', CandidateLight, CandidateComments);
  /**
   * Static representation of the one-to-one navigation property [[coverLetter]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COVER_LETTER: OneToOneLink<CandidateLight, Attachment> = new OneToOneLink('coverLetter', CandidateLight, Attachment);
  /**
   * Static representation of the one-to-many navigation property [[education]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EDUCATION: Link<CandidateLight, CandidateBackground_Education> = new Link('education', CandidateLight, CandidateBackground_Education);
  /**
   * Static representation of the one-to-many navigation property [[insideWorkExperience]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INSIDE_WORK_EXPERIENCE: Link<CandidateLight, CandidateBackground_InsideWorkExperience> = new Link('insideWorkExperience', CandidateLight, CandidateBackground_InsideWorkExperience);
  /**
   * Static representation of the one-to-many navigation property [[jobReqFwdCandidates]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_REQ_FWD_CANDIDATES: Link<CandidateLight, JobReqFwdCandidates> = new Link('jobReqFwdCandidates', CandidateLight, JobReqFwdCandidates);
  /**
   * Static representation of the one-to-many navigation property [[jobsApplied]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOBS_APPLIED: Link<CandidateLight, JobApplication> = new Link('jobsApplied', CandidateLight, JobApplication);
  /**
   * Static representation of the one-to-many navigation property [[languages]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LANGUAGES: Link<CandidateLight, CandidateBackground_Languages> = new Link('languages', CandidateLight, CandidateBackground_Languages);
  /**
   * Static representation of the one-to-many navigation property [[mobility]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MOBILITY: Link<CandidateLight, CandidateBackground_Mobility> = new Link('mobility', CandidateLight, CandidateBackground_Mobility);
  /**
   * Static representation of the one-to-many navigation property [[outsideWorkExperience]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OUTSIDE_WORK_EXPERIENCE: Link<CandidateLight, CandidateBackground_OutsideWorkExperience> = new Link('outsideWorkExperience', CandidateLight, CandidateBackground_OutsideWorkExperience);
  /**
   * Static representation of the one-to-one navigation property [[resume]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RESUME: OneToOneLink<CandidateLight, Attachment> = new OneToOneLink('resume', CandidateLight, Attachment);
  /**
   * Static representation of the one-to-many navigation property [[state]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATE: Link<CandidateLight, PicklistOption> = new Link('state', CandidateLight, PicklistOption);
  /**
   * Static representation of the one-to-many navigation property [[tags]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TAGS: Link<CandidateLight, CandidateTags> = new Link('tags', CandidateLight, CandidateTags);
  /**
   * All fields of the CandidateLight entity.
   */
  export const _allFields: Array<StringField<CandidateLight> | DateField<CandidateLight> | BigNumberField<CandidateLight> | BooleanField<CandidateLight> | Link<CandidateLight, Attachment> | OneToOneLink<CandidateLight, CandidateProfileConversionInfo> | OneToOneLink<CandidateLight, CandidateProfileExtension> | Link<CandidateLight, CandidateComments> | OneToOneLink<CandidateLight, Attachment> | Link<CandidateLight, CandidateBackground_Education> | Link<CandidateLight, CandidateBackground_InsideWorkExperience> | Link<CandidateLight, JobReqFwdCandidates> | Link<CandidateLight, JobApplication> | Link<CandidateLight, CandidateBackground_Languages> | Link<CandidateLight, CandidateBackground_Mobility> | Link<CandidateLight, CandidateBackground_OutsideWorkExperience> | Link<CandidateLight, PicklistOption> | Link<CandidateLight, CandidateTags>> = [
    CandidateLight.ADDRESS,
    CandidateLight.AGREE_TO_PRIVACY_STATEMENT,
    CandidateLight.ANONYMIZED,
    CandidateLight.ANONYMIZED_DATE_TIME,
    CandidateLight.BUSINESS_PHONE,
    CandidateLight.CANDIDATE_ID,
    CandidateLight.CANDIDATE_LOCALE,
    CandidateLight.CELL_PHONE,
    CandidateLight.CITY,
    CandidateLight.CONSENT_TO_MARKETING,
    CandidateLight.CONTACT_EMAIL,
    CandidateLight.COUNTRY,
    CandidateLight.CREATION_DATE_TIME,
    CandidateLight.CURRENT_COMPANY,
    CandidateLight.CURRENT_TITLE,
    CandidateLight.DATA_PRIVACY_ID,
    CandidateLight.DATEOF_AVAILABILITY,
    CandidateLight.EXTERNAL_CANDIDATE,
    CandidateLight.FIRST_NAME,
    CandidateLight.HOME_PHONE,
    CandidateLight.LAST_LOGIN_DATE_TIME,
    CandidateLight.LAST_MODIFIED_DATE_TIME,
    CandidateLight.LAST_NAME,
    CandidateLight.MIDDLE_NAME,
    CandidateLight.PARTNER_MEMBER_ID,
    CandidateLight.PARTNER_SOURCE,
    CandidateLight.PASSWORD,
    CandidateLight.PRIMARY_EMAIL,
    CandidateLight.PRIVACY_ACCEPT_DATE_TIME,
    CandidateLight.PUBLIC_INTRANET,
    CandidateLight.SEND_CAND_WELCOME_EMAIL,
    CandidateLight.SHARE_PROFILE,
    CandidateLight.USERS_SYS_ID,
    CandidateLight.VISIBILITY_OPTION,
    CandidateLight.ZIP,
    CandidateLight.ATTACHMENT_1,
    CandidateLight.CANDIDATE_PROFILE_CONVERSION_INFO,
    CandidateLight.CANDIDATE_PROFILE_EXTENSION,
    CandidateLight.COMMENTS,
    CandidateLight.COVER_LETTER,
    CandidateLight.EDUCATION,
    CandidateLight.INSIDE_WORK_EXPERIENCE,
    CandidateLight.JOB_REQ_FWD_CANDIDATES,
    CandidateLight.JOBS_APPLIED,
    CandidateLight.LANGUAGES,
    CandidateLight.MOBILITY,
    CandidateLight.OUTSIDE_WORK_EXPERIENCE,
    CandidateLight.RESUME,
    CandidateLight.STATE,
    CandidateLight.TAGS
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<CandidateLight> = new AllFields('*', CandidateLight);
  /**
   * All key fields of the CandidateLight entity.
   */
  export const _keyFields: Array<Selectable<CandidateLight>> = [CandidateLight.CANDIDATE_ID];
  /**
   * Mapping of all key field names to the respective static field property CandidateLight.
   */
  export const _keys: { [keys: string]: Selectable<CandidateLight> } = CandidateLight._keyFields.reduce((acc: { [keys: string]: Selectable<CandidateLight> }, field: Selectable<CandidateLight>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
