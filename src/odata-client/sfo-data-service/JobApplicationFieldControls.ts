/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { JobApplicationFieldControlsRequestBuilder } from './JobApplicationFieldControlsRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, NumberField, Selectable } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "JobApplicationFieldControls" of service "SFOData".
 */
export class JobApplicationFieldControls extends Entity implements JobApplicationFieldControlsType {
  /**
   * Technical entity name for JobApplicationFieldControls.
   */
  static _entityName = 'JobApplicationFieldControls';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for JobApplicationFieldControls.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * address.
   * @nullable
   */
  address?: number;
  /**
   * agencyInfo.
   * @nullable
   */
  agencyInfo?: number;
  /**
   * anonymizedDate.
   * @nullable
   */
  anonymizedDate?: number;
  /**
   * anonymizedFlag.
   * @nullable
   */
  anonymizedFlag?: number;
  /**
   * appLocale.
   * @nullable
   */
  appLocale?: number;
  /**
   * appStatusSetItemId.
   * @nullable
   */
  appStatusSetItemId?: number;
  /**
   * applicationDate.
   * @nullable
   */
  applicationDate?: number;
  /**
   * applicationId.
   */
  applicationId!: number;
  /**
   * applicationTemplateId.
   * @nullable
   */
  applicationTemplateId?: number;
  /**
   * averageRating.
   * @nullable
   */
  averageRating?: number;
  /**
   * bkgrndChkAttachment.
   * @nullable
   */
  bkgrndChkAttachment?: number;
  /**
   * bkgrndChkStatus.
   * @nullable
   */
  bkgrndChkStatus?: number;
  /**
   * businessPhone.
   * @nullable
   */
  businessPhone?: number;
  /**
   * candConversionProcessed.
   * @nullable
   */
  candConversionProcessed?: number;
  /**
   * candTypeWhenHired.
   * @nullable
   */
  candTypeWhenHired?: number;
  /**
   * candidate.
   * @nullable
   */
  candidate?: number;
  /**
   * candidateId.
   * @nullable
   */
  candidateId?: number;
  /**
   * cellPhone.
   * @nullable
   */
  cellPhone?: number;
  /**
   * city.
   * @nullable
   */
  city?: number;
  /**
   * contactEmail.
   * @nullable
   */
  contactEmail?: number;
  /**
   * country.
   * @nullable
   */
  country?: number;
  /**
   * countryCode.
   * @nullable
   */
  countryCode?: number;
  /**
   * countryPicklist.
   * @nullable
   */
  countryPicklist?: number;
  /**
   * coverLetter.
   * @nullable
   */
  coverLetter?: number;
  /**
   * currentCompany.
   * @nullable
   */
  currentCompany?: number;
  /**
   * currentTitle.
   * @nullable
   */
  currentTitle?: number;
  /**
   * custONBPrefLang.
   * @nullable
   */
  custOnbPrefLang?: number;
  /**
   * custSalaryDesired.
   * @nullable
   */
  custSalaryDesired?: number;
  /**
   * custTravel.
   * @nullable
   */
  custTravel?: number;
  /**
   * customAdditionalAttach.
   * @nullable
   */
  customAdditionalAttach?: number;
  /**
   * customAdjustments.
   * @nullable
   */
  customAdjustments?: number;
  /**
   * customAdjustmentsOther.
   * @nullable
   */
  customAdjustmentsOther?: number;
  /**
   * customAgeGroup.
   * @nullable
   */
  customAgeGroup?: number;
  /**
   * customBasePayFreq.
   * @nullable
   */
  customBasePayFreq?: number;
  /**
   * customBaseSal.
   * @nullable
   */
  customBaseSal?: number;
  /**
   * customCarAllowAmt.
   * @nullable
   */
  customCarAllowAmt?: number;
  /**
   * customCarAllowRequired.
   * @nullable
   */
  customCarAllowRequired?: number;
  /**
   * customCarAllowanceMonths.
   * @nullable
   */
  customCarAllowanceMonths?: number;
  /**
   * customEEOPoster.
   * @nullable
   */
  customEeoPoster?: number;
  /**
   * customEarlyTalent.
   * @nullable
   */
  customEarlyTalent?: number;
  /**
   * customEligibleOther.
   * @nullable
   */
  customEligibleOther?: number;
  /**
   * customEligibleToWork.
   * @nullable
   */
  customEligibleToWork?: number;
  /**
   * customFinalSignOn.
   * @nullable
   */
  customFinalSignOn?: number;
  /**
   * customInternalPolicy.
   * @nullable
   */
  customInternalPolicy?: number;
  /**
   * customInterviewComments1.
   * @nullable
   */
  customInterviewComments1?: number;
  /**
   * customInterviewDateTime.
   * @nullable
   */
  customInterviewDateTime?: number;
  /**
   * customInterviewList.
   * @nullable
   */
  customInterviewList?: number;
  /**
   * customInterviewRound.
   * @nullable
   */
  customInterviewRound?: number;
  /**
   * customInterviewType1.
   * @nullable
   */
  customInterviewType1?: number;
  /**
   * customLTI.
   * @nullable
   */
  customLti?: number;
  /**
   * customLegalAuth.
   * @nullable
   */
  customLegalAuth?: number;
  /**
   * customNationality.
   * @nullable
   */
  customNationality?: number;
  /**
   * customNoticeDuringProbPeriod.
   * @nullable
   */
  customNoticeDuringProbPeriod?: number;
  /**
   * customNoticePeriod.
   * @nullable
   */
  customNoticePeriod?: number;
  /**
   * customOtherAllowanceDetails.
   * @nullable
   */
  customOtherAllowanceDetails?: number;
  /**
   * customOtherCompDetails.
   * @nullable
   */
  customOtherCompDetails?: number;
  /**
   * customProbPeriod.
   * @nullable
   */
  customProbPeriod?: number;
  /**
   * customRelocAmount.
   * @nullable
   */
  customRelocAmount?: number;
  /**
   * customSexualOrientation.
   * @nullable
   */
  customSexualOrientation?: number;
  /**
   * customSourcePrimary.
   * @nullable
   */
  customSourcePrimary?: number;
  /**
   * customSourceSecondary.
   * @nullable
   */
  customSourceSecondary?: number;
  /**
   * customTargetBonusAmount.
   * @nullable
   */
  customTargetBonusAmount?: number;
  /**
   * customTypeHire.
   * @nullable
   */
  customTypeHire?: number;
  /**
   * customUKEthnicity.
   * @nullable
   */
  customUkEthnicity?: number;
  /**
   * customVirtualHire.
   * @nullable
   */
  customVirtualHire?: number;
  /**
   * customVisa.
   * @nullable
   */
  customVisa?: number;
  /**
   * customVisaYes.
   * @nullable
   */
  customVisaYes?: number;
  /**
   * dataSource.
   * @nullable
   */
  dataSource?: number;
  /**
   * disabilityStatus.
   * @nullable
   */
  disabilityStatus?: number;
  /**
   * disclaimerAcknowledge.
   * @nullable
   */
  disclaimerAcknowledge?: number;
  /**
   * duplicateProfile.
   * @nullable
   */
  duplicateProfile?: number;
  /**
   * education.
   * @nullable
   */
  education?: number;
  /**
   * endDateContract.
   * @nullable
   */
  endDateContract?: number;
  /**
   * exportedOn.
   * @nullable
   */
  exportedOn?: number;
  /**
   * firstName.
   * @nullable
   */
  firstName?: number;
  /**
   * gender.
   * @nullable
   */
  gender?: number;
  /**
   * hiredOn.
   * @nullable
   */
  hiredOn?: number;
  /**
   * homePhone.
   * @nullable
   */
  homePhone?: number;
  /**
   * insideWorkExperience.
   * @nullable
   */
  insideWorkExperience?: number;
  /**
   * instrAccommodations.
   * @nullable
   */
  instrAccommodations?: number;
  /**
   * instrApplcation.
   * @nullable
   */
  instrApplcation?: number;
  /**
   * instrContractInfo.
   * @nullable
   */
  instrContractInfo?: number;
  /**
   * instrDisability1.
   * @nullable
   */
  instrDisability1?: number;
  /**
   * instrDisability2.
   * @nullable
   */
  instrDisability2?: number;
  /**
   * instrDisclaimer.
   * @nullable
   */
  instrDisclaimer?: number;
  /**
   * instrEEO1.
   * @nullable
   */
  instrEeo1?: number;
  /**
   * instrEEO2.
   * @nullable
   */
  instrEeo2?: number;
  /**
   * instrEEOFooter.
   * @nullable
   */
  instrEeoFooter?: number;
  /**
   * instrEligWork.
   * @nullable
   */
  instrEligWork?: number;
  /**
   * instrEmpInfo.
   * @nullable
   */
  instrEmpInfo?: number;
  /**
   * instrGlobalEEO.
   * @nullable
   */
  instrGlobalEeo?: number;
  /**
   * instrInternalPolicy.
   * @nullable
   */
  instrInternalPolicy?: number;
  /**
   * instrInterview.
   * @nullable
   */
  instrInterview?: number;
  /**
   * instrRewardInfo.
   * @nullable
   */
  instrRewardInfo?: number;
  /**
   * instrUKDisability.
   * @nullable
   */
  instrUkDisability?: number;
  /**
   * instrVets1.
   * @nullable
   */
  instrVets1?: number;
  /**
   * instrVets2.
   * @nullable
   */
  instrVets2?: number;
  /**
   * jobAppGuid.
   * @nullable
   */
  jobAppGuid?: number;
  /**
   * jobAppPermissionsNav.
   * @nullable
   */
  jobAppPermissionsNav?: number;
  /**
   * jobAppStatus.
   * @nullable
   */
  jobAppStatus?: number;
  /**
   * jobApplicationAssessmentOrder.
   * @nullable
   */
  jobApplicationAssessmentOrder?: number;
  /**
   * jobApplicationAudit.
   * @nullable
   */
  jobApplicationAudit?: number;
  /**
   * jobApplicationComments.
   * @nullable
   */
  jobApplicationComments?: number;
  /**
   * jobApplicationInterview.
   * @nullable
   */
  jobApplicationInterview?: number;
  /**
   * jobApplicationOnboardingData.
   * @nullable
   */
  jobApplicationOnboardingData?: number;
  /**
   * jobApplicationQuestionResponse.
   * @nullable
   */
  jobApplicationQuestionResponse?: number;
  /**
   * jobApplicationStatusAuditTrail.
   * @nullable
   */
  jobApplicationStatusAuditTrail?: number;
  /**
   * jobOffer.
   * @nullable
   */
  jobOffer?: number;
  /**
   * jobReqId.
   * @nullable
   */
  jobReqId?: number;
  /**
   * jobRequisition.
   * @nullable
   */
  jobRequisition?: number;
  /**
   * jobTitle.
   * @nullable
   */
  jobTitle?: number;
  /**
   * languages.
   * @nullable
   */
  languages?: number;
  /**
   * lastModifiedBy.
   * @nullable
   */
  lastModifiedBy?: number;
  /**
   * lastModifiedByProxy.
   * @nullable
   */
  lastModifiedByProxy?: number;
  /**
   * lastModifiedDateTime.
   * @nullable
   */
  lastModifiedDateTime?: number;
  /**
   * lastName.
   * @nullable
   */
  lastName?: number;
  /**
   * middleName.
   * @nullable
   */
  middleName?: number;
  /**
   * mobility.
   * @nullable
   */
  mobility?: number;
  /**
   * nonApplicantStatus.
   * @nullable
   */
  nonApplicantStatus?: number;
  /**
   * offerLetter.
   * @nullable
   */
  offerLetter?: number;
  /**
   * outsideWorkExperience.
   * @nullable
   */
  outsideWorkExperience?: number;
  /**
   * owner.
   * @nullable
   */
  owner?: number;
  /**
   * ownershpDate.
   * @nullable
   */
  ownershpDate?: number;
  /**
   * profileUpdated.
   * @nullable
   */
  profileUpdated?: number;
  /**
   * race.
   * @nullable
   */
  race?: number;
  /**
   * rating.
   * @nullable
   */
  rating?: number;
  /**
   * reference.
   * @nullable
   */
  reference?: number;
  /**
   * referenceComments.
   * @nullable
   */
  referenceComments?: number;
  /**
   * referredBy.
   * @nullable
   */
  referredBy?: number;
  /**
   * referredByNav.
   * @nullable
   */
  referredByNav?: number;
  /**
   * resume.
   * @nullable
   */
  resume?: number;
  /**
   * resumeUploadDate.
   * @nullable
   */
  resumeUploadDate?: number;
  /**
   * sectDisclaimer.
   * @nullable
   */
  sectDisclaimer?: number;
  /**
   * snapShotDate.
   * @nullable
   */
  snapShotDate?: number;
  /**
   * source.
   * @nullable
   */
  source?: number;
  /**
   * sourceLabel.
   * @nullable
   */
  sourceLabel?: number;
  /**
   * startDate.
   * @nullable
   */
  startDate?: number;
  /**
   * state.
   * @nullable
   */
  state?: number;
  /**
   * status.
   * @nullable
   */
  status?: number;
  /**
   * statusComments.
   * @nullable
   */
  statusComments?: number;
  /**
   * statusId.
   * @nullable
   */
  statusId?: number;
  /**
   * timeToHire.
   * @nullable
   */
  timeToHire?: number;
  /**
   * userNav.
   * @nullable
   */
  userNav?: number;
  /**
   * usersSysId.
   * @nullable
   */
  usersSysId?: number;
  /**
   * veteranStatus.
   * @nullable
   */
  veteranStatus?: number;
  /**
   * zip.
   * @nullable
   */
  zip?: number;

  /**
   * Returns an entity builder to construct instances `JobApplicationFieldControls`.
   * @returns A builder that constructs instances of entity type `JobApplicationFieldControls`.
   */
  static builder(): EntityBuilderType<JobApplicationFieldControls, JobApplicationFieldControlsTypeForceMandatory> {
    return Entity.entityBuilder(JobApplicationFieldControls);
  }

  /**
   * Returns a request builder to construct requests for operations on the `JobApplicationFieldControls` entity type.
   * @returns A `JobApplicationFieldControls` request builder.
   */
  static requestBuilder(): JobApplicationFieldControlsRequestBuilder {
    return new JobApplicationFieldControlsRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobApplicationFieldControls`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `JobApplicationFieldControls`.
   */
  static customField(fieldName: string): CustomField<JobApplicationFieldControls> {
    return Entity.customFieldSelector(fieldName, JobApplicationFieldControls);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface JobApplicationFieldControlsType {
  address?: number;
  agencyInfo?: number;
  anonymizedDate?: number;
  anonymizedFlag?: number;
  appLocale?: number;
  appStatusSetItemId?: number;
  applicationDate?: number;
  applicationId: number;
  applicationTemplateId?: number;
  averageRating?: number;
  bkgrndChkAttachment?: number;
  bkgrndChkStatus?: number;
  businessPhone?: number;
  candConversionProcessed?: number;
  candTypeWhenHired?: number;
  candidate?: number;
  candidateId?: number;
  cellPhone?: number;
  city?: number;
  contactEmail?: number;
  country?: number;
  countryCode?: number;
  countryPicklist?: number;
  coverLetter?: number;
  currentCompany?: number;
  currentTitle?: number;
  custOnbPrefLang?: number;
  custSalaryDesired?: number;
  custTravel?: number;
  customAdditionalAttach?: number;
  customAdjustments?: number;
  customAdjustmentsOther?: number;
  customAgeGroup?: number;
  customBasePayFreq?: number;
  customBaseSal?: number;
  customCarAllowAmt?: number;
  customCarAllowRequired?: number;
  customCarAllowanceMonths?: number;
  customEeoPoster?: number;
  customEarlyTalent?: number;
  customEligibleOther?: number;
  customEligibleToWork?: number;
  customFinalSignOn?: number;
  customInternalPolicy?: number;
  customInterviewComments1?: number;
  customInterviewDateTime?: number;
  customInterviewList?: number;
  customInterviewRound?: number;
  customInterviewType1?: number;
  customLti?: number;
  customLegalAuth?: number;
  customNationality?: number;
  customNoticeDuringProbPeriod?: number;
  customNoticePeriod?: number;
  customOtherAllowanceDetails?: number;
  customOtherCompDetails?: number;
  customProbPeriod?: number;
  customRelocAmount?: number;
  customSexualOrientation?: number;
  customSourcePrimary?: number;
  customSourceSecondary?: number;
  customTargetBonusAmount?: number;
  customTypeHire?: number;
  customUkEthnicity?: number;
  customVirtualHire?: number;
  customVisa?: number;
  customVisaYes?: number;
  dataSource?: number;
  disabilityStatus?: number;
  disclaimerAcknowledge?: number;
  duplicateProfile?: number;
  education?: number;
  endDateContract?: number;
  exportedOn?: number;
  firstName?: number;
  gender?: number;
  hiredOn?: number;
  homePhone?: number;
  insideWorkExperience?: number;
  instrAccommodations?: number;
  instrApplcation?: number;
  instrContractInfo?: number;
  instrDisability1?: number;
  instrDisability2?: number;
  instrDisclaimer?: number;
  instrEeo1?: number;
  instrEeo2?: number;
  instrEeoFooter?: number;
  instrEligWork?: number;
  instrEmpInfo?: number;
  instrGlobalEeo?: number;
  instrInternalPolicy?: number;
  instrInterview?: number;
  instrRewardInfo?: number;
  instrUkDisability?: number;
  instrVets1?: number;
  instrVets2?: number;
  jobAppGuid?: number;
  jobAppPermissionsNav?: number;
  jobAppStatus?: number;
  jobApplicationAssessmentOrder?: number;
  jobApplicationAudit?: number;
  jobApplicationComments?: number;
  jobApplicationInterview?: number;
  jobApplicationOnboardingData?: number;
  jobApplicationQuestionResponse?: number;
  jobApplicationStatusAuditTrail?: number;
  jobOffer?: number;
  jobReqId?: number;
  jobRequisition?: number;
  jobTitle?: number;
  languages?: number;
  lastModifiedBy?: number;
  lastModifiedByProxy?: number;
  lastModifiedDateTime?: number;
  lastName?: number;
  middleName?: number;
  mobility?: number;
  nonApplicantStatus?: number;
  offerLetter?: number;
  outsideWorkExperience?: number;
  owner?: number;
  ownershpDate?: number;
  profileUpdated?: number;
  race?: number;
  rating?: number;
  reference?: number;
  referenceComments?: number;
  referredBy?: number;
  referredByNav?: number;
  resume?: number;
  resumeUploadDate?: number;
  sectDisclaimer?: number;
  snapShotDate?: number;
  source?: number;
  sourceLabel?: number;
  startDate?: number;
  state?: number;
  status?: number;
  statusComments?: number;
  statusId?: number;
  timeToHire?: number;
  userNav?: number;
  usersSysId?: number;
  veteranStatus?: number;
  zip?: number;
}

export interface JobApplicationFieldControlsTypeForceMandatory {
  address: number;
  agencyInfo: number;
  anonymizedDate: number;
  anonymizedFlag: number;
  appLocale: number;
  appStatusSetItemId: number;
  applicationDate: number;
  applicationId: number;
  applicationTemplateId: number;
  averageRating: number;
  bkgrndChkAttachment: number;
  bkgrndChkStatus: number;
  businessPhone: number;
  candConversionProcessed: number;
  candTypeWhenHired: number;
  candidate: number;
  candidateId: number;
  cellPhone: number;
  city: number;
  contactEmail: number;
  country: number;
  countryCode: number;
  countryPicklist: number;
  coverLetter: number;
  currentCompany: number;
  currentTitle: number;
  custOnbPrefLang: number;
  custSalaryDesired: number;
  custTravel: number;
  customAdditionalAttach: number;
  customAdjustments: number;
  customAdjustmentsOther: number;
  customAgeGroup: number;
  customBasePayFreq: number;
  customBaseSal: number;
  customCarAllowAmt: number;
  customCarAllowRequired: number;
  customCarAllowanceMonths: number;
  customEeoPoster: number;
  customEarlyTalent: number;
  customEligibleOther: number;
  customEligibleToWork: number;
  customFinalSignOn: number;
  customInternalPolicy: number;
  customInterviewComments1: number;
  customInterviewDateTime: number;
  customInterviewList: number;
  customInterviewRound: number;
  customInterviewType1: number;
  customLti: number;
  customLegalAuth: number;
  customNationality: number;
  customNoticeDuringProbPeriod: number;
  customNoticePeriod: number;
  customOtherAllowanceDetails: number;
  customOtherCompDetails: number;
  customProbPeriod: number;
  customRelocAmount: number;
  customSexualOrientation: number;
  customSourcePrimary: number;
  customSourceSecondary: number;
  customTargetBonusAmount: number;
  customTypeHire: number;
  customUkEthnicity: number;
  customVirtualHire: number;
  customVisa: number;
  customVisaYes: number;
  dataSource: number;
  disabilityStatus: number;
  disclaimerAcknowledge: number;
  duplicateProfile: number;
  education: number;
  endDateContract: number;
  exportedOn: number;
  firstName: number;
  gender: number;
  hiredOn: number;
  homePhone: number;
  insideWorkExperience: number;
  instrAccommodations: number;
  instrApplcation: number;
  instrContractInfo: number;
  instrDisability1: number;
  instrDisability2: number;
  instrDisclaimer: number;
  instrEeo1: number;
  instrEeo2: number;
  instrEeoFooter: number;
  instrEligWork: number;
  instrEmpInfo: number;
  instrGlobalEeo: number;
  instrInternalPolicy: number;
  instrInterview: number;
  instrRewardInfo: number;
  instrUkDisability: number;
  instrVets1: number;
  instrVets2: number;
  jobAppGuid: number;
  jobAppPermissionsNav: number;
  jobAppStatus: number;
  jobApplicationAssessmentOrder: number;
  jobApplicationAudit: number;
  jobApplicationComments: number;
  jobApplicationInterview: number;
  jobApplicationOnboardingData: number;
  jobApplicationQuestionResponse: number;
  jobApplicationStatusAuditTrail: number;
  jobOffer: number;
  jobReqId: number;
  jobRequisition: number;
  jobTitle: number;
  languages: number;
  lastModifiedBy: number;
  lastModifiedByProxy: number;
  lastModifiedDateTime: number;
  lastName: number;
  middleName: number;
  mobility: number;
  nonApplicantStatus: number;
  offerLetter: number;
  outsideWorkExperience: number;
  owner: number;
  ownershpDate: number;
  profileUpdated: number;
  race: number;
  rating: number;
  reference: number;
  referenceComments: number;
  referredBy: number;
  referredByNav: number;
  resume: number;
  resumeUploadDate: number;
  sectDisclaimer: number;
  snapShotDate: number;
  source: number;
  sourceLabel: number;
  startDate: number;
  state: number;
  status: number;
  statusComments: number;
  statusId: number;
  timeToHire: number;
  userNav: number;
  usersSysId: number;
  veteranStatus: number;
  zip: number;
}

export namespace JobApplicationFieldControls {
  /**
   * Static representation of the [[address]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS: NumberField<JobApplicationFieldControls> = new NumberField('address', JobApplicationFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[agencyInfo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const AGENCY_INFO: NumberField<JobApplicationFieldControls> = new NumberField('agencyInfo', JobApplicationFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[anonymizedDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ANONYMIZED_DATE: NumberField<JobApplicationFieldControls> = new NumberField('anonymizedDate', JobApplicationFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[anonymizedFlag]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ANONYMIZED_FLAG: NumberField<JobApplicationFieldControls> = new NumberField('anonymizedFlag', JobApplicationFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[appLocale]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const APP_LOCALE: NumberField<JobApplicationFieldControls> = new NumberField('appLocale', JobApplicationFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[appStatusSetItemId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const APP_STATUS_SET_ITEM_ID: NumberField<JobApplicationFieldControls> = new NumberField('appStatusSetItemId', JobApplicationFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[applicationDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const APPLICATION_DATE: NumberField<JobApplicationFieldControls> = new NumberField('applicationDate', JobApplicationFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[applicationId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const APPLICATION_ID: NumberField<JobApplicationFieldControls> = new NumberField('applicationId', JobApplicationFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[applicationTemplateId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const APPLICATION_TEMPLATE_ID: NumberField<JobApplicationFieldControls> = new NumberField('applicationTemplateId', JobApplicationFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[averageRating]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const AVERAGE_RATING: NumberField<JobApplicationFieldControls> = new NumberField('averageRating', JobApplicationFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[bkgrndChkAttachment]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BKGRND_CHK_ATTACHMENT: NumberField<JobApplicationFieldControls> = new NumberField('bkgrndChkAttachment', JobApplicationFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[bkgrndChkStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BKGRND_CHK_STATUS: NumberField<JobApplicationFieldControls> = new NumberField('bkgrndChkStatus', JobApplicationFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[businessPhone]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PHONE: NumberField<JobApplicationFieldControls> = new NumberField('businessPhone', JobApplicationFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[candConversionProcessed]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CAND_CONVERSION_PROCESSED: NumberField<JobApplicationFieldControls> = new NumberField('candConversionProcessed', JobApplicationFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[candTypeWhenHired]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CAND_TYPE_WHEN_HIRED: NumberField<JobApplicationFieldControls> = new NumberField('candTypeWhenHired', JobApplicationFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[candidate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CANDIDATE: NumberField<JobApplicationFieldControls> = new NumberField('candidate', JobApplicationFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[candidateId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CANDIDATE_ID: NumberField<JobApplicationFieldControls> = new NumberField('candidateId', JobApplicationFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[cellPhone]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CELL_PHONE: NumberField<JobApplicationFieldControls> = new NumberField('cellPhone', JobApplicationFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[city]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CITY: NumberField<JobApplicationFieldControls> = new NumberField('city', JobApplicationFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[contactEmail]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONTACT_EMAIL: NumberField<JobApplicationFieldControls> = new NumberField('contactEmail', JobApplicationFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[country]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY: NumberField<JobApplicationFieldControls> = new NumberField('country', JobApplicationFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[countryCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY_CODE: NumberField<JobApplicationFieldControls> = new NumberField('countryCode', JobApplicationFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[countryPicklist]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY_PICKLIST: NumberField<JobApplicationFieldControls> = new NumberField('countryPicklist', JobApplicationFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[coverLetter]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COVER_LETTER: NumberField<JobApplicationFieldControls> = new NumberField('coverLetter', JobApplicationFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[currentCompany]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CURRENT_COMPANY: NumberField<JobApplicationFieldControls> = new NumberField('currentCompany', JobApplicationFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[currentTitle]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CURRENT_TITLE: NumberField<JobApplicationFieldControls> = new NumberField('currentTitle', JobApplicationFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[custOnbPrefLang]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUST_ONB_PREF_LANG: NumberField<JobApplicationFieldControls> = new NumberField('custONBPrefLang', JobApplicationFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[custSalaryDesired]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUST_SALARY_DESIRED: NumberField<JobApplicationFieldControls> = new NumberField('custSalaryDesired', JobApplicationFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[custTravel]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUST_TRAVEL: NumberField<JobApplicationFieldControls> = new NumberField('custTravel', JobApplicationFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[customAdditionalAttach]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOM_ADDITIONAL_ATTACH: NumberField<JobApplicationFieldControls> = new NumberField('customAdditionalAttach', JobApplicationFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[customAdjustments]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOM_ADJUSTMENTS: NumberField<JobApplicationFieldControls> = new NumberField('customAdjustments', JobApplicationFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[customAdjustmentsOther]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOM_ADJUSTMENTS_OTHER: NumberField<JobApplicationFieldControls> = new NumberField('customAdjustmentsOther', JobApplicationFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[customAgeGroup]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOM_AGE_GROUP: NumberField<JobApplicationFieldControls> = new NumberField('customAgeGroup', JobApplicationFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[customBasePayFreq]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOM_BASE_PAY_FREQ: NumberField<JobApplicationFieldControls> = new NumberField('customBasePayFreq', JobApplicationFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[customBaseSal]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOM_BASE_SAL: NumberField<JobApplicationFieldControls> = new NumberField('customBaseSal', JobApplicationFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[customCarAllowAmt]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOM_CAR_ALLOW_AMT: NumberField<JobApplicationFieldControls> = new NumberField('customCarAllowAmt', JobApplicationFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[customCarAllowRequired]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOM_CAR_ALLOW_REQUIRED: NumberField<JobApplicationFieldControls> = new NumberField('customCarAllowRequired', JobApplicationFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[customCarAllowanceMonths]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOM_CAR_ALLOWANCE_MONTHS: NumberField<JobApplicationFieldControls> = new NumberField('customCarAllowanceMonths', JobApplicationFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[customEeoPoster]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOM_EEO_POSTER: NumberField<JobApplicationFieldControls> = new NumberField('customEEOPoster', JobApplicationFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[customEarlyTalent]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOM_EARLY_TALENT: NumberField<JobApplicationFieldControls> = new NumberField('customEarlyTalent', JobApplicationFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[customEligibleOther]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOM_ELIGIBLE_OTHER: NumberField<JobApplicationFieldControls> = new NumberField('customEligibleOther', JobApplicationFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[customEligibleToWork]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOM_ELIGIBLE_TO_WORK: NumberField<JobApplicationFieldControls> = new NumberField('customEligibleToWork', JobApplicationFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[customFinalSignOn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOM_FINAL_SIGN_ON: NumberField<JobApplicationFieldControls> = new NumberField('customFinalSignOn', JobApplicationFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[customInternalPolicy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOM_INTERNAL_POLICY: NumberField<JobApplicationFieldControls> = new NumberField('customInternalPolicy', JobApplicationFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[customInterviewComments1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOM_INTERVIEW_COMMENTS_1: NumberField<JobApplicationFieldControls> = new NumberField('customInterviewComments1', JobApplicationFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[customInterviewDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOM_INTERVIEW_DATE_TIME: NumberField<JobApplicationFieldControls> = new NumberField('customInterviewDateTime', JobApplicationFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[customInterviewList]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOM_INTERVIEW_LIST: NumberField<JobApplicationFieldControls> = new NumberField('customInterviewList', JobApplicationFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[customInterviewRound]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOM_INTERVIEW_ROUND: NumberField<JobApplicationFieldControls> = new NumberField('customInterviewRound', JobApplicationFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[customInterviewType1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOM_INTERVIEW_TYPE_1: NumberField<JobApplicationFieldControls> = new NumberField('customInterviewType1', JobApplicationFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[customLti]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOM_LTI: NumberField<JobApplicationFieldControls> = new NumberField('customLTI', JobApplicationFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[customLegalAuth]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOM_LEGAL_AUTH: NumberField<JobApplicationFieldControls> = new NumberField('customLegalAuth', JobApplicationFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[customNationality]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOM_NATIONALITY: NumberField<JobApplicationFieldControls> = new NumberField('customNationality', JobApplicationFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[customNoticeDuringProbPeriod]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOM_NOTICE_DURING_PROB_PERIOD: NumberField<JobApplicationFieldControls> = new NumberField('customNoticeDuringProbPeriod', JobApplicationFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[customNoticePeriod]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOM_NOTICE_PERIOD: NumberField<JobApplicationFieldControls> = new NumberField('customNoticePeriod', JobApplicationFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[customOtherAllowanceDetails]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOM_OTHER_ALLOWANCE_DETAILS: NumberField<JobApplicationFieldControls> = new NumberField('customOtherAllowanceDetails', JobApplicationFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[customOtherCompDetails]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOM_OTHER_COMP_DETAILS: NumberField<JobApplicationFieldControls> = new NumberField('customOtherCompDetails', JobApplicationFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[customProbPeriod]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOM_PROB_PERIOD: NumberField<JobApplicationFieldControls> = new NumberField('customProbPeriod', JobApplicationFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[customRelocAmount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOM_RELOC_AMOUNT: NumberField<JobApplicationFieldControls> = new NumberField('customRelocAmount', JobApplicationFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[customSexualOrientation]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOM_SEXUAL_ORIENTATION: NumberField<JobApplicationFieldControls> = new NumberField('customSexualOrientation', JobApplicationFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[customSourcePrimary]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOM_SOURCE_PRIMARY: NumberField<JobApplicationFieldControls> = new NumberField('customSourcePrimary', JobApplicationFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[customSourceSecondary]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOM_SOURCE_SECONDARY: NumberField<JobApplicationFieldControls> = new NumberField('customSourceSecondary', JobApplicationFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[customTargetBonusAmount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOM_TARGET_BONUS_AMOUNT: NumberField<JobApplicationFieldControls> = new NumberField('customTargetBonusAmount', JobApplicationFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[customTypeHire]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOM_TYPE_HIRE: NumberField<JobApplicationFieldControls> = new NumberField('customTypeHire', JobApplicationFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[customUkEthnicity]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOM_UK_ETHNICITY: NumberField<JobApplicationFieldControls> = new NumberField('customUKEthnicity', JobApplicationFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[customVirtualHire]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOM_VIRTUAL_HIRE: NumberField<JobApplicationFieldControls> = new NumberField('customVirtualHire', JobApplicationFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[customVisa]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOM_VISA: NumberField<JobApplicationFieldControls> = new NumberField('customVisa', JobApplicationFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[customVisaYes]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOM_VISA_YES: NumberField<JobApplicationFieldControls> = new NumberField('customVisaYes', JobApplicationFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[dataSource]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DATA_SOURCE: NumberField<JobApplicationFieldControls> = new NumberField('dataSource', JobApplicationFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[disabilityStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DISABILITY_STATUS: NumberField<JobApplicationFieldControls> = new NumberField('disabilityStatus', JobApplicationFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[disclaimerAcknowledge]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DISCLAIMER_ACKNOWLEDGE: NumberField<JobApplicationFieldControls> = new NumberField('disclaimerAcknowledge', JobApplicationFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[duplicateProfile]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DUPLICATE_PROFILE: NumberField<JobApplicationFieldControls> = new NumberField('duplicateProfile', JobApplicationFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[education]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EDUCATION: NumberField<JobApplicationFieldControls> = new NumberField('education', JobApplicationFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[endDateContract]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const END_DATE_CONTRACT: NumberField<JobApplicationFieldControls> = new NumberField('endDateContract', JobApplicationFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[exportedOn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXPORTED_ON: NumberField<JobApplicationFieldControls> = new NumberField('exportedOn', JobApplicationFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[firstName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FIRST_NAME: NumberField<JobApplicationFieldControls> = new NumberField('firstName', JobApplicationFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[gender]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENDER: NumberField<JobApplicationFieldControls> = new NumberField('gender', JobApplicationFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[hiredOn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HIRED_ON: NumberField<JobApplicationFieldControls> = new NumberField('hiredOn', JobApplicationFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[homePhone]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HOME_PHONE: NumberField<JobApplicationFieldControls> = new NumberField('homePhone', JobApplicationFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[insideWorkExperience]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INSIDE_WORK_EXPERIENCE: NumberField<JobApplicationFieldControls> = new NumberField('insideWorkExperience', JobApplicationFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[instrAccommodations]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INSTR_ACCOMMODATIONS: NumberField<JobApplicationFieldControls> = new NumberField('instrAccommodations', JobApplicationFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[instrApplcation]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INSTR_APPLCATION: NumberField<JobApplicationFieldControls> = new NumberField('instrApplcation', JobApplicationFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[instrContractInfo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INSTR_CONTRACT_INFO: NumberField<JobApplicationFieldControls> = new NumberField('instrContractInfo', JobApplicationFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[instrDisability1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INSTR_DISABILITY_1: NumberField<JobApplicationFieldControls> = new NumberField('instrDisability1', JobApplicationFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[instrDisability2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INSTR_DISABILITY_2: NumberField<JobApplicationFieldControls> = new NumberField('instrDisability2', JobApplicationFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[instrDisclaimer]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INSTR_DISCLAIMER: NumberField<JobApplicationFieldControls> = new NumberField('instrDisclaimer', JobApplicationFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[instrEeo1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INSTR_EEO_1: NumberField<JobApplicationFieldControls> = new NumberField('instrEEO1', JobApplicationFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[instrEeo2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INSTR_EEO_2: NumberField<JobApplicationFieldControls> = new NumberField('instrEEO2', JobApplicationFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[instrEeoFooter]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INSTR_EEO_FOOTER: NumberField<JobApplicationFieldControls> = new NumberField('instrEEOFooter', JobApplicationFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[instrEligWork]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INSTR_ELIG_WORK: NumberField<JobApplicationFieldControls> = new NumberField('instrEligWork', JobApplicationFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[instrEmpInfo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INSTR_EMP_INFO: NumberField<JobApplicationFieldControls> = new NumberField('instrEmpInfo', JobApplicationFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[instrGlobalEeo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INSTR_GLOBAL_EEO: NumberField<JobApplicationFieldControls> = new NumberField('instrGlobalEEO', JobApplicationFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[instrInternalPolicy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INSTR_INTERNAL_POLICY: NumberField<JobApplicationFieldControls> = new NumberField('instrInternalPolicy', JobApplicationFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[instrInterview]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INSTR_INTERVIEW: NumberField<JobApplicationFieldControls> = new NumberField('instrInterview', JobApplicationFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[instrRewardInfo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INSTR_REWARD_INFO: NumberField<JobApplicationFieldControls> = new NumberField('instrRewardInfo', JobApplicationFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[instrUkDisability]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INSTR_UK_DISABILITY: NumberField<JobApplicationFieldControls> = new NumberField('instrUKDisability', JobApplicationFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[instrVets1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INSTR_VETS_1: NumberField<JobApplicationFieldControls> = new NumberField('instrVets1', JobApplicationFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[instrVets2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INSTR_VETS_2: NumberField<JobApplicationFieldControls> = new NumberField('instrVets2', JobApplicationFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[jobAppGuid]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_APP_GUID: NumberField<JobApplicationFieldControls> = new NumberField('jobAppGuid', JobApplicationFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[jobAppPermissionsNav]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_APP_PERMISSIONS_NAV: NumberField<JobApplicationFieldControls> = new NumberField('jobAppPermissionsNav', JobApplicationFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[jobAppStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_APP_STATUS: NumberField<JobApplicationFieldControls> = new NumberField('jobAppStatus', JobApplicationFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[jobApplicationAssessmentOrder]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_APPLICATION_ASSESSMENT_ORDER: NumberField<JobApplicationFieldControls> = new NumberField('jobApplicationAssessmentOrder', JobApplicationFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[jobApplicationAudit]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_APPLICATION_AUDIT: NumberField<JobApplicationFieldControls> = new NumberField('jobApplicationAudit', JobApplicationFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[jobApplicationComments]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_APPLICATION_COMMENTS: NumberField<JobApplicationFieldControls> = new NumberField('jobApplicationComments', JobApplicationFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[jobApplicationInterview]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_APPLICATION_INTERVIEW: NumberField<JobApplicationFieldControls> = new NumberField('jobApplicationInterview', JobApplicationFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[jobApplicationOnboardingData]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_APPLICATION_ONBOARDING_DATA: NumberField<JobApplicationFieldControls> = new NumberField('jobApplicationOnboardingData', JobApplicationFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[jobApplicationQuestionResponse]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_APPLICATION_QUESTION_RESPONSE: NumberField<JobApplicationFieldControls> = new NumberField('jobApplicationQuestionResponse', JobApplicationFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[jobApplicationStatusAuditTrail]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_APPLICATION_STATUS_AUDIT_TRAIL: NumberField<JobApplicationFieldControls> = new NumberField('jobApplicationStatusAuditTrail', JobApplicationFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[jobOffer]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_OFFER: NumberField<JobApplicationFieldControls> = new NumberField('jobOffer', JobApplicationFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[jobReqId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_REQ_ID: NumberField<JobApplicationFieldControls> = new NumberField('jobReqId', JobApplicationFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[jobRequisition]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_REQUISITION: NumberField<JobApplicationFieldControls> = new NumberField('jobRequisition', JobApplicationFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[jobTitle]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_TITLE: NumberField<JobApplicationFieldControls> = new NumberField('jobTitle', JobApplicationFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[languages]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LANGUAGES: NumberField<JobApplicationFieldControls> = new NumberField('languages', JobApplicationFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: NumberField<JobApplicationFieldControls> = new NumberField('lastModifiedBy', JobApplicationFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[lastModifiedByProxy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_PROXY: NumberField<JobApplicationFieldControls> = new NumberField('lastModifiedByProxy', JobApplicationFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: NumberField<JobApplicationFieldControls> = new NumberField('lastModifiedDateTime', JobApplicationFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[lastName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_NAME: NumberField<JobApplicationFieldControls> = new NumberField('lastName', JobApplicationFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[middleName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MIDDLE_NAME: NumberField<JobApplicationFieldControls> = new NumberField('middleName', JobApplicationFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[mobility]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MOBILITY: NumberField<JobApplicationFieldControls> = new NumberField('mobility', JobApplicationFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[nonApplicantStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NON_APPLICANT_STATUS: NumberField<JobApplicationFieldControls> = new NumberField('nonApplicantStatus', JobApplicationFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[offerLetter]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OFFER_LETTER: NumberField<JobApplicationFieldControls> = new NumberField('offerLetter', JobApplicationFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[outsideWorkExperience]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OUTSIDE_WORK_EXPERIENCE: NumberField<JobApplicationFieldControls> = new NumberField('outsideWorkExperience', JobApplicationFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[owner]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OWNER: NumberField<JobApplicationFieldControls> = new NumberField('owner', JobApplicationFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[ownershpDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OWNERSHP_DATE: NumberField<JobApplicationFieldControls> = new NumberField('ownershpDate', JobApplicationFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[profileUpdated]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROFILE_UPDATED: NumberField<JobApplicationFieldControls> = new NumberField('profileUpdated', JobApplicationFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[race]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RACE: NumberField<JobApplicationFieldControls> = new NumberField('race', JobApplicationFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[rating]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RATING: NumberField<JobApplicationFieldControls> = new NumberField('rating', JobApplicationFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[reference]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REFERENCE: NumberField<JobApplicationFieldControls> = new NumberField('reference', JobApplicationFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[referenceComments]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REFERENCE_COMMENTS: NumberField<JobApplicationFieldControls> = new NumberField('referenceComments', JobApplicationFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[referredBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REFERRED_BY: NumberField<JobApplicationFieldControls> = new NumberField('referredBy', JobApplicationFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[referredByNav]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REFERRED_BY_NAV: NumberField<JobApplicationFieldControls> = new NumberField('referredByNav', JobApplicationFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[resume]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RESUME: NumberField<JobApplicationFieldControls> = new NumberField('resume', JobApplicationFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[resumeUploadDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RESUME_UPLOAD_DATE: NumberField<JobApplicationFieldControls> = new NumberField('resumeUploadDate', JobApplicationFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[sectDisclaimer]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SECT_DISCLAIMER: NumberField<JobApplicationFieldControls> = new NumberField('sectDisclaimer', JobApplicationFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[snapShotDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SNAP_SHOT_DATE: NumberField<JobApplicationFieldControls> = new NumberField('snapShotDate', JobApplicationFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[source]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SOURCE: NumberField<JobApplicationFieldControls> = new NumberField('source', JobApplicationFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[sourceLabel]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SOURCE_LABEL: NumberField<JobApplicationFieldControls> = new NumberField('sourceLabel', JobApplicationFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[startDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const START_DATE: NumberField<JobApplicationFieldControls> = new NumberField('startDate', JobApplicationFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[state]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATE: NumberField<JobApplicationFieldControls> = new NumberField('state', JobApplicationFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[status]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS: NumberField<JobApplicationFieldControls> = new NumberField('status', JobApplicationFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[statusComments]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS_COMMENTS: NumberField<JobApplicationFieldControls> = new NumberField('statusComments', JobApplicationFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[statusId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS_ID: NumberField<JobApplicationFieldControls> = new NumberField('statusId', JobApplicationFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[timeToHire]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TIME_TO_HIRE: NumberField<JobApplicationFieldControls> = new NumberField('timeToHire', JobApplicationFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[userNav]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_NAV: NumberField<JobApplicationFieldControls> = new NumberField('userNav', JobApplicationFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[usersSysId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USERS_SYS_ID: NumberField<JobApplicationFieldControls> = new NumberField('usersSysId', JobApplicationFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[veteranStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VETERAN_STATUS: NumberField<JobApplicationFieldControls> = new NumberField('veteranStatus', JobApplicationFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[zip]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ZIP: NumberField<JobApplicationFieldControls> = new NumberField('zip', JobApplicationFieldControls, 'Edm.Byte');
  /**
   * All fields of the JobApplicationFieldControls entity.
   */
  export const _allFields: Array<NumberField<JobApplicationFieldControls>> = [
    JobApplicationFieldControls.ADDRESS,
    JobApplicationFieldControls.AGENCY_INFO,
    JobApplicationFieldControls.ANONYMIZED_DATE,
    JobApplicationFieldControls.ANONYMIZED_FLAG,
    JobApplicationFieldControls.APP_LOCALE,
    JobApplicationFieldControls.APP_STATUS_SET_ITEM_ID,
    JobApplicationFieldControls.APPLICATION_DATE,
    JobApplicationFieldControls.APPLICATION_ID,
    JobApplicationFieldControls.APPLICATION_TEMPLATE_ID,
    JobApplicationFieldControls.AVERAGE_RATING,
    JobApplicationFieldControls.BKGRND_CHK_ATTACHMENT,
    JobApplicationFieldControls.BKGRND_CHK_STATUS,
    JobApplicationFieldControls.BUSINESS_PHONE,
    JobApplicationFieldControls.CAND_CONVERSION_PROCESSED,
    JobApplicationFieldControls.CAND_TYPE_WHEN_HIRED,
    JobApplicationFieldControls.CANDIDATE,
    JobApplicationFieldControls.CANDIDATE_ID,
    JobApplicationFieldControls.CELL_PHONE,
    JobApplicationFieldControls.CITY,
    JobApplicationFieldControls.CONTACT_EMAIL,
    JobApplicationFieldControls.COUNTRY,
    JobApplicationFieldControls.COUNTRY_CODE,
    JobApplicationFieldControls.COUNTRY_PICKLIST,
    JobApplicationFieldControls.COVER_LETTER,
    JobApplicationFieldControls.CURRENT_COMPANY,
    JobApplicationFieldControls.CURRENT_TITLE,
    JobApplicationFieldControls.CUST_ONB_PREF_LANG,
    JobApplicationFieldControls.CUST_SALARY_DESIRED,
    JobApplicationFieldControls.CUST_TRAVEL,
    JobApplicationFieldControls.CUSTOM_ADDITIONAL_ATTACH,
    JobApplicationFieldControls.CUSTOM_ADJUSTMENTS,
    JobApplicationFieldControls.CUSTOM_ADJUSTMENTS_OTHER,
    JobApplicationFieldControls.CUSTOM_AGE_GROUP,
    JobApplicationFieldControls.CUSTOM_BASE_PAY_FREQ,
    JobApplicationFieldControls.CUSTOM_BASE_SAL,
    JobApplicationFieldControls.CUSTOM_CAR_ALLOW_AMT,
    JobApplicationFieldControls.CUSTOM_CAR_ALLOW_REQUIRED,
    JobApplicationFieldControls.CUSTOM_CAR_ALLOWANCE_MONTHS,
    JobApplicationFieldControls.CUSTOM_EEO_POSTER,
    JobApplicationFieldControls.CUSTOM_EARLY_TALENT,
    JobApplicationFieldControls.CUSTOM_ELIGIBLE_OTHER,
    JobApplicationFieldControls.CUSTOM_ELIGIBLE_TO_WORK,
    JobApplicationFieldControls.CUSTOM_FINAL_SIGN_ON,
    JobApplicationFieldControls.CUSTOM_INTERNAL_POLICY,
    JobApplicationFieldControls.CUSTOM_INTERVIEW_COMMENTS_1,
    JobApplicationFieldControls.CUSTOM_INTERVIEW_DATE_TIME,
    JobApplicationFieldControls.CUSTOM_INTERVIEW_LIST,
    JobApplicationFieldControls.CUSTOM_INTERVIEW_ROUND,
    JobApplicationFieldControls.CUSTOM_INTERVIEW_TYPE_1,
    JobApplicationFieldControls.CUSTOM_LTI,
    JobApplicationFieldControls.CUSTOM_LEGAL_AUTH,
    JobApplicationFieldControls.CUSTOM_NATIONALITY,
    JobApplicationFieldControls.CUSTOM_NOTICE_DURING_PROB_PERIOD,
    JobApplicationFieldControls.CUSTOM_NOTICE_PERIOD,
    JobApplicationFieldControls.CUSTOM_OTHER_ALLOWANCE_DETAILS,
    JobApplicationFieldControls.CUSTOM_OTHER_COMP_DETAILS,
    JobApplicationFieldControls.CUSTOM_PROB_PERIOD,
    JobApplicationFieldControls.CUSTOM_RELOC_AMOUNT,
    JobApplicationFieldControls.CUSTOM_SEXUAL_ORIENTATION,
    JobApplicationFieldControls.CUSTOM_SOURCE_PRIMARY,
    JobApplicationFieldControls.CUSTOM_SOURCE_SECONDARY,
    JobApplicationFieldControls.CUSTOM_TARGET_BONUS_AMOUNT,
    JobApplicationFieldControls.CUSTOM_TYPE_HIRE,
    JobApplicationFieldControls.CUSTOM_UK_ETHNICITY,
    JobApplicationFieldControls.CUSTOM_VIRTUAL_HIRE,
    JobApplicationFieldControls.CUSTOM_VISA,
    JobApplicationFieldControls.CUSTOM_VISA_YES,
    JobApplicationFieldControls.DATA_SOURCE,
    JobApplicationFieldControls.DISABILITY_STATUS,
    JobApplicationFieldControls.DISCLAIMER_ACKNOWLEDGE,
    JobApplicationFieldControls.DUPLICATE_PROFILE,
    JobApplicationFieldControls.EDUCATION,
    JobApplicationFieldControls.END_DATE_CONTRACT,
    JobApplicationFieldControls.EXPORTED_ON,
    JobApplicationFieldControls.FIRST_NAME,
    JobApplicationFieldControls.GENDER,
    JobApplicationFieldControls.HIRED_ON,
    JobApplicationFieldControls.HOME_PHONE,
    JobApplicationFieldControls.INSIDE_WORK_EXPERIENCE,
    JobApplicationFieldControls.INSTR_ACCOMMODATIONS,
    JobApplicationFieldControls.INSTR_APPLCATION,
    JobApplicationFieldControls.INSTR_CONTRACT_INFO,
    JobApplicationFieldControls.INSTR_DISABILITY_1,
    JobApplicationFieldControls.INSTR_DISABILITY_2,
    JobApplicationFieldControls.INSTR_DISCLAIMER,
    JobApplicationFieldControls.INSTR_EEO_1,
    JobApplicationFieldControls.INSTR_EEO_2,
    JobApplicationFieldControls.INSTR_EEO_FOOTER,
    JobApplicationFieldControls.INSTR_ELIG_WORK,
    JobApplicationFieldControls.INSTR_EMP_INFO,
    JobApplicationFieldControls.INSTR_GLOBAL_EEO,
    JobApplicationFieldControls.INSTR_INTERNAL_POLICY,
    JobApplicationFieldControls.INSTR_INTERVIEW,
    JobApplicationFieldControls.INSTR_REWARD_INFO,
    JobApplicationFieldControls.INSTR_UK_DISABILITY,
    JobApplicationFieldControls.INSTR_VETS_1,
    JobApplicationFieldControls.INSTR_VETS_2,
    JobApplicationFieldControls.JOB_APP_GUID,
    JobApplicationFieldControls.JOB_APP_PERMISSIONS_NAV,
    JobApplicationFieldControls.JOB_APP_STATUS,
    JobApplicationFieldControls.JOB_APPLICATION_ASSESSMENT_ORDER,
    JobApplicationFieldControls.JOB_APPLICATION_AUDIT,
    JobApplicationFieldControls.JOB_APPLICATION_COMMENTS,
    JobApplicationFieldControls.JOB_APPLICATION_INTERVIEW,
    JobApplicationFieldControls.JOB_APPLICATION_ONBOARDING_DATA,
    JobApplicationFieldControls.JOB_APPLICATION_QUESTION_RESPONSE,
    JobApplicationFieldControls.JOB_APPLICATION_STATUS_AUDIT_TRAIL,
    JobApplicationFieldControls.JOB_OFFER,
    JobApplicationFieldControls.JOB_REQ_ID,
    JobApplicationFieldControls.JOB_REQUISITION,
    JobApplicationFieldControls.JOB_TITLE,
    JobApplicationFieldControls.LANGUAGES,
    JobApplicationFieldControls.LAST_MODIFIED_BY,
    JobApplicationFieldControls.LAST_MODIFIED_BY_PROXY,
    JobApplicationFieldControls.LAST_MODIFIED_DATE_TIME,
    JobApplicationFieldControls.LAST_NAME,
    JobApplicationFieldControls.MIDDLE_NAME,
    JobApplicationFieldControls.MOBILITY,
    JobApplicationFieldControls.NON_APPLICANT_STATUS,
    JobApplicationFieldControls.OFFER_LETTER,
    JobApplicationFieldControls.OUTSIDE_WORK_EXPERIENCE,
    JobApplicationFieldControls.OWNER,
    JobApplicationFieldControls.OWNERSHP_DATE,
    JobApplicationFieldControls.PROFILE_UPDATED,
    JobApplicationFieldControls.RACE,
    JobApplicationFieldControls.RATING,
    JobApplicationFieldControls.REFERENCE,
    JobApplicationFieldControls.REFERENCE_COMMENTS,
    JobApplicationFieldControls.REFERRED_BY,
    JobApplicationFieldControls.REFERRED_BY_NAV,
    JobApplicationFieldControls.RESUME,
    JobApplicationFieldControls.RESUME_UPLOAD_DATE,
    JobApplicationFieldControls.SECT_DISCLAIMER,
    JobApplicationFieldControls.SNAP_SHOT_DATE,
    JobApplicationFieldControls.SOURCE,
    JobApplicationFieldControls.SOURCE_LABEL,
    JobApplicationFieldControls.START_DATE,
    JobApplicationFieldControls.STATE,
    JobApplicationFieldControls.STATUS,
    JobApplicationFieldControls.STATUS_COMMENTS,
    JobApplicationFieldControls.STATUS_ID,
    JobApplicationFieldControls.TIME_TO_HIRE,
    JobApplicationFieldControls.USER_NAV,
    JobApplicationFieldControls.USERS_SYS_ID,
    JobApplicationFieldControls.VETERAN_STATUS,
    JobApplicationFieldControls.ZIP
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<JobApplicationFieldControls> = new AllFields('*', JobApplicationFieldControls);
  /**
   * All key fields of the JobApplicationFieldControls entity.
   */
  export const _keyFields: Array<Selectable<JobApplicationFieldControls>> = [JobApplicationFieldControls.APPLICATION_ID];
  /**
   * Mapping of all key field names to the respective static field property JobApplicationFieldControls.
   */
  export const _keys: { [keys: string]: Selectable<JobApplicationFieldControls> } = JobApplicationFieldControls._keyFields.reduce((acc: { [keys: string]: Selectable<JobApplicationFieldControls> }, field: Selectable<JobApplicationFieldControls>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
