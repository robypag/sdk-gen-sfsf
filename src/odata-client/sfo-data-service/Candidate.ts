/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CandidateRequestBuilder } from './CandidateRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "Candidate" of service "SFOData".
 */
export class Candidate extends Entity implements CandidateType {
  /**
   * Technical entity name for Candidate.
   */
  static _entityName = 'Candidate';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for Candidate.
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
   * One-to-one navigation property to the [[User]] entity.
   */
  user!: User;

  /**
   * Returns an entity builder to construct instances `Candidate`.
   * @returns A builder that constructs instances of entity type `Candidate`.
   */
  static builder(): EntityBuilderType<Candidate, CandidateTypeForceMandatory> {
    return Entity.entityBuilder(Candidate);
  }

  /**
   * Returns a request builder to construct requests for operations on the `Candidate` entity type.
   * @returns A `Candidate` request builder.
   */
  static requestBuilder(): CandidateRequestBuilder {
    return new CandidateRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `Candidate`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `Candidate`.
   */
  static customField(fieldName: string): CustomField<Candidate> {
    return Entity.customFieldSelector(fieldName, Candidate);
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
import { User, UserType } from './User';

export interface CandidateType {
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
  user: UserType;
}

export interface CandidateTypeForceMandatory {
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
  user: UserType;
}

export namespace Candidate {
  /**
   * Static representation of the [[address]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS: StringField<Candidate> = new StringField('address', Candidate, 'Edm.String');
  /**
   * Static representation of the [[agreeToPrivacyStatement]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const AGREE_TO_PRIVACY_STATEMENT: StringField<Candidate> = new StringField('agreeToPrivacyStatement', Candidate, 'Edm.String');
  /**
   * Static representation of the [[anonymized]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ANONYMIZED: StringField<Candidate> = new StringField('anonymized', Candidate, 'Edm.String');
  /**
   * Static representation of the [[anonymizedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ANONYMIZED_DATE_TIME: DateField<Candidate> = new DateField('anonymizedDateTime', Candidate, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[businessPhone]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PHONE: StringField<Candidate> = new StringField('businessPhone', Candidate, 'Edm.String');
  /**
   * Static representation of the [[candidateId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CANDIDATE_ID: BigNumberField<Candidate> = new BigNumberField('candidateId', Candidate, 'Edm.Int64');
  /**
   * Static representation of the [[candidateLocale]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CANDIDATE_LOCALE: StringField<Candidate> = new StringField('candidateLocale', Candidate, 'Edm.String');
  /**
   * Static representation of the [[cellPhone]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CELL_PHONE: StringField<Candidate> = new StringField('cellPhone', Candidate, 'Edm.String');
  /**
   * Static representation of the [[city]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CITY: StringField<Candidate> = new StringField('city', Candidate, 'Edm.String');
  /**
   * Static representation of the [[consentToMarketing]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONSENT_TO_MARKETING: StringField<Candidate> = new StringField('consentToMarketing', Candidate, 'Edm.String');
  /**
   * Static representation of the [[contactEmail]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONTACT_EMAIL: StringField<Candidate> = new StringField('contactEmail', Candidate, 'Edm.String');
  /**
   * Static representation of the [[country]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY: StringField<Candidate> = new StringField('country', Candidate, 'Edm.String');
  /**
   * Static representation of the [[creationDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATION_DATE_TIME: DateField<Candidate> = new DateField('creationDateTime', Candidate, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[currentCompany]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CURRENT_COMPANY: StringField<Candidate> = new StringField('currentCompany', Candidate, 'Edm.String');
  /**
   * Static representation of the [[currentTitle]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CURRENT_TITLE: StringField<Candidate> = new StringField('currentTitle', Candidate, 'Edm.String');
  /**
   * Static representation of the [[dataPrivacyId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DATA_PRIVACY_ID: BigNumberField<Candidate> = new BigNumberField('dataPrivacyId', Candidate, 'Edm.Int64');
  /**
   * Static representation of the [[dateofAvailability]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DATEOF_AVAILABILITY: DateField<Candidate> = new DateField('dateofAvailability', Candidate, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[externalCandidate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CANDIDATE: BooleanField<Candidate> = new BooleanField('externalCandidate', Candidate, 'Edm.Boolean');
  /**
   * Static representation of the [[firstName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FIRST_NAME: StringField<Candidate> = new StringField('firstName', Candidate, 'Edm.String');
  /**
   * Static representation of the [[homePhone]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HOME_PHONE: StringField<Candidate> = new StringField('homePhone', Candidate, 'Edm.String');
  /**
   * Static representation of the [[lastLoginDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_LOGIN_DATE_TIME: DateField<Candidate> = new DateField('lastLoginDateTime', Candidate, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<Candidate> = new DateField('lastModifiedDateTime', Candidate, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[lastName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_NAME: StringField<Candidate> = new StringField('lastName', Candidate, 'Edm.String');
  /**
   * Static representation of the [[middleName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MIDDLE_NAME: StringField<Candidate> = new StringField('middleName', Candidate, 'Edm.String');
  /**
   * Static representation of the [[partnerMemberId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PARTNER_MEMBER_ID: StringField<Candidate> = new StringField('partnerMemberId', Candidate, 'Edm.String');
  /**
   * Static representation of the [[partnerSource]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PARTNER_SOURCE: BigNumberField<Candidate> = new BigNumberField('partnerSource', Candidate, 'Edm.Int64');
  /**
   * Static representation of the [[password]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PASSWORD: StringField<Candidate> = new StringField('password', Candidate, 'Edm.String');
  /**
   * Static representation of the [[primaryEmail]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRIMARY_EMAIL: StringField<Candidate> = new StringField('primaryEmail', Candidate, 'Edm.String');
  /**
   * Static representation of the [[privacyAcceptDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRIVACY_ACCEPT_DATE_TIME: DateField<Candidate> = new DateField('privacyAcceptDateTime', Candidate, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[publicIntranet]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PUBLIC_INTRANET: BooleanField<Candidate> = new BooleanField('publicIntranet', Candidate, 'Edm.Boolean');
  /**
   * Static representation of the [[shareProfile]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SHARE_PROFILE: StringField<Candidate> = new StringField('shareProfile', Candidate, 'Edm.String');
  /**
   * Static representation of the [[usersSysId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USERS_SYS_ID: StringField<Candidate> = new StringField('usersSysId', Candidate, 'Edm.String');
  /**
   * Static representation of the [[visibilityOption]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VISIBILITY_OPTION: BooleanField<Candidate> = new BooleanField('visibilityOption', Candidate, 'Edm.Boolean');
  /**
   * Static representation of the [[zip]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ZIP: StringField<Candidate> = new StringField('zip', Candidate, 'Edm.String');
  /**
   * Static representation of the one-to-many navigation property [[attachment1]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ATTACHMENT_1: Link<Candidate, Attachment> = new Link('attachment1', Candidate, Attachment);
  /**
   * Static representation of the one-to-one navigation property [[candidateProfileConversionInfo]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CANDIDATE_PROFILE_CONVERSION_INFO: OneToOneLink<Candidate, CandidateProfileConversionInfo> = new OneToOneLink('candidateProfileConversionInfo', Candidate, CandidateProfileConversionInfo);
  /**
   * Static representation of the one-to-one navigation property [[candidateProfileExtension]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CANDIDATE_PROFILE_EXTENSION: OneToOneLink<Candidate, CandidateProfileExtension> = new OneToOneLink('candidateProfileExtension', Candidate, CandidateProfileExtension);
  /**
   * Static representation of the one-to-many navigation property [[comments]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMMENTS: Link<Candidate, CandidateComments> = new Link('comments', Candidate, CandidateComments);
  /**
   * Static representation of the one-to-one navigation property [[coverLetter]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COVER_LETTER: OneToOneLink<Candidate, Attachment> = new OneToOneLink('coverLetter', Candidate, Attachment);
  /**
   * Static representation of the one-to-many navigation property [[education]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EDUCATION: Link<Candidate, CandidateBackground_Education> = new Link('education', Candidate, CandidateBackground_Education);
  /**
   * Static representation of the one-to-many navigation property [[insideWorkExperience]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INSIDE_WORK_EXPERIENCE: Link<Candidate, CandidateBackground_InsideWorkExperience> = new Link('insideWorkExperience', Candidate, CandidateBackground_InsideWorkExperience);
  /**
   * Static representation of the one-to-many navigation property [[jobReqFwdCandidates]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_REQ_FWD_CANDIDATES: Link<Candidate, JobReqFwdCandidates> = new Link('jobReqFwdCandidates', Candidate, JobReqFwdCandidates);
  /**
   * Static representation of the one-to-many navigation property [[jobsApplied]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOBS_APPLIED: Link<Candidate, JobApplication> = new Link('jobsApplied', Candidate, JobApplication);
  /**
   * Static representation of the one-to-many navigation property [[languages]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LANGUAGES: Link<Candidate, CandidateBackground_Languages> = new Link('languages', Candidate, CandidateBackground_Languages);
  /**
   * Static representation of the one-to-many navigation property [[mobility]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MOBILITY: Link<Candidate, CandidateBackground_Mobility> = new Link('mobility', Candidate, CandidateBackground_Mobility);
  /**
   * Static representation of the one-to-many navigation property [[outsideWorkExperience]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OUTSIDE_WORK_EXPERIENCE: Link<Candidate, CandidateBackground_OutsideWorkExperience> = new Link('outsideWorkExperience', Candidate, CandidateBackground_OutsideWorkExperience);
  /**
   * Static representation of the one-to-one navigation property [[resume]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RESUME: OneToOneLink<Candidate, Attachment> = new OneToOneLink('resume', Candidate, Attachment);
  /**
   * Static representation of the one-to-many navigation property [[state]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATE: Link<Candidate, PicklistOption> = new Link('state', Candidate, PicklistOption);
  /**
   * Static representation of the one-to-many navigation property [[tags]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TAGS: Link<Candidate, CandidateTags> = new Link('tags', Candidate, CandidateTags);
  /**
   * Static representation of the one-to-one navigation property [[user]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER: OneToOneLink<Candidate, User> = new OneToOneLink('user', Candidate, User);
  /**
   * All fields of the Candidate entity.
   */
  export const _allFields: Array<StringField<Candidate> | DateField<Candidate> | BigNumberField<Candidate> | BooleanField<Candidate> | Link<Candidate, Attachment> | OneToOneLink<Candidate, CandidateProfileConversionInfo> | OneToOneLink<Candidate, CandidateProfileExtension> | Link<Candidate, CandidateComments> | OneToOneLink<Candidate, Attachment> | Link<Candidate, CandidateBackground_Education> | Link<Candidate, CandidateBackground_InsideWorkExperience> | Link<Candidate, JobReqFwdCandidates> | Link<Candidate, JobApplication> | Link<Candidate, CandidateBackground_Languages> | Link<Candidate, CandidateBackground_Mobility> | Link<Candidate, CandidateBackground_OutsideWorkExperience> | Link<Candidate, PicklistOption> | Link<Candidate, CandidateTags> | OneToOneLink<Candidate, User>> = [
    Candidate.ADDRESS,
    Candidate.AGREE_TO_PRIVACY_STATEMENT,
    Candidate.ANONYMIZED,
    Candidate.ANONYMIZED_DATE_TIME,
    Candidate.BUSINESS_PHONE,
    Candidate.CANDIDATE_ID,
    Candidate.CANDIDATE_LOCALE,
    Candidate.CELL_PHONE,
    Candidate.CITY,
    Candidate.CONSENT_TO_MARKETING,
    Candidate.CONTACT_EMAIL,
    Candidate.COUNTRY,
    Candidate.CREATION_DATE_TIME,
    Candidate.CURRENT_COMPANY,
    Candidate.CURRENT_TITLE,
    Candidate.DATA_PRIVACY_ID,
    Candidate.DATEOF_AVAILABILITY,
    Candidate.EXTERNAL_CANDIDATE,
    Candidate.FIRST_NAME,
    Candidate.HOME_PHONE,
    Candidate.LAST_LOGIN_DATE_TIME,
    Candidate.LAST_MODIFIED_DATE_TIME,
    Candidate.LAST_NAME,
    Candidate.MIDDLE_NAME,
    Candidate.PARTNER_MEMBER_ID,
    Candidate.PARTNER_SOURCE,
    Candidate.PASSWORD,
    Candidate.PRIMARY_EMAIL,
    Candidate.PRIVACY_ACCEPT_DATE_TIME,
    Candidate.PUBLIC_INTRANET,
    Candidate.SHARE_PROFILE,
    Candidate.USERS_SYS_ID,
    Candidate.VISIBILITY_OPTION,
    Candidate.ZIP,
    Candidate.ATTACHMENT_1,
    Candidate.CANDIDATE_PROFILE_CONVERSION_INFO,
    Candidate.CANDIDATE_PROFILE_EXTENSION,
    Candidate.COMMENTS,
    Candidate.COVER_LETTER,
    Candidate.EDUCATION,
    Candidate.INSIDE_WORK_EXPERIENCE,
    Candidate.JOB_REQ_FWD_CANDIDATES,
    Candidate.JOBS_APPLIED,
    Candidate.LANGUAGES,
    Candidate.MOBILITY,
    Candidate.OUTSIDE_WORK_EXPERIENCE,
    Candidate.RESUME,
    Candidate.STATE,
    Candidate.TAGS,
    Candidate.USER
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<Candidate> = new AllFields('*', Candidate);
  /**
   * All key fields of the Candidate entity.
   */
  export const _keyFields: Array<Selectable<Candidate>> = [Candidate.CANDIDATE_ID];
  /**
   * Mapping of all key field names to the respective static field property Candidate.
   */
  export const _keys: { [keys: string]: Selectable<Candidate> } = Candidate._keyFields.reduce((acc: { [keys: string]: Selectable<Candidate> }, field: Selectable<Candidate>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
