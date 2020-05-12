import { JobApplicationFieldControlsRequestBuilder } from './JobApplicationFieldControlsRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, NumberField, Selectable } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "JobApplicationFieldControls" of service "SFOData".
 */
export declare class JobApplicationFieldControls extends Entity implements JobApplicationFieldControlsType {
    /**
     * Technical entity name for JobApplicationFieldControls.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for JobApplicationFieldControls.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
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
    applicationId: number;
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
    static builder(): EntityBuilderType<JobApplicationFieldControls, JobApplicationFieldControlsTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `JobApplicationFieldControls` entity type.
     * @returns A `JobApplicationFieldControls` request builder.
     */
    static requestBuilder(): JobApplicationFieldControlsRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobApplicationFieldControls`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `JobApplicationFieldControls`.
     */
    static customField(fieldName: string): CustomField<JobApplicationFieldControls>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
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
export declare namespace JobApplicationFieldControls {
    /**
     * Static representation of the [[address]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDRESS: NumberField<JobApplicationFieldControls>;
    /**
     * Static representation of the [[agencyInfo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const AGENCY_INFO: NumberField<JobApplicationFieldControls>;
    /**
     * Static representation of the [[anonymizedDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ANONYMIZED_DATE: NumberField<JobApplicationFieldControls>;
    /**
     * Static representation of the [[anonymizedFlag]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ANONYMIZED_FLAG: NumberField<JobApplicationFieldControls>;
    /**
     * Static representation of the [[appLocale]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const APP_LOCALE: NumberField<JobApplicationFieldControls>;
    /**
     * Static representation of the [[appStatusSetItemId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const APP_STATUS_SET_ITEM_ID: NumberField<JobApplicationFieldControls>;
    /**
     * Static representation of the [[applicationDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const APPLICATION_DATE: NumberField<JobApplicationFieldControls>;
    /**
     * Static representation of the [[applicationId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const APPLICATION_ID: NumberField<JobApplicationFieldControls>;
    /**
     * Static representation of the [[applicationTemplateId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const APPLICATION_TEMPLATE_ID: NumberField<JobApplicationFieldControls>;
    /**
     * Static representation of the [[averageRating]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const AVERAGE_RATING: NumberField<JobApplicationFieldControls>;
    /**
     * Static representation of the [[bkgrndChkAttachment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BKGRND_CHK_ATTACHMENT: NumberField<JobApplicationFieldControls>;
    /**
     * Static representation of the [[bkgrndChkStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BKGRND_CHK_STATUS: NumberField<JobApplicationFieldControls>;
    /**
     * Static representation of the [[businessPhone]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PHONE: NumberField<JobApplicationFieldControls>;
    /**
     * Static representation of the [[candConversionProcessed]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CAND_CONVERSION_PROCESSED: NumberField<JobApplicationFieldControls>;
    /**
     * Static representation of the [[candTypeWhenHired]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CAND_TYPE_WHEN_HIRED: NumberField<JobApplicationFieldControls>;
    /**
     * Static representation of the [[candidate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CANDIDATE: NumberField<JobApplicationFieldControls>;
    /**
     * Static representation of the [[candidateId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CANDIDATE_ID: NumberField<JobApplicationFieldControls>;
    /**
     * Static representation of the [[cellPhone]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CELL_PHONE: NumberField<JobApplicationFieldControls>;
    /**
     * Static representation of the [[city]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CITY: NumberField<JobApplicationFieldControls>;
    /**
     * Static representation of the [[contactEmail]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CONTACT_EMAIL: NumberField<JobApplicationFieldControls>;
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COUNTRY: NumberField<JobApplicationFieldControls>;
    /**
     * Static representation of the [[countryCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COUNTRY_CODE: NumberField<JobApplicationFieldControls>;
    /**
     * Static representation of the [[countryPicklist]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COUNTRY_PICKLIST: NumberField<JobApplicationFieldControls>;
    /**
     * Static representation of the [[coverLetter]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COVER_LETTER: NumberField<JobApplicationFieldControls>;
    /**
     * Static representation of the [[currentCompany]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CURRENT_COMPANY: NumberField<JobApplicationFieldControls>;
    /**
     * Static representation of the [[currentTitle]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CURRENT_TITLE: NumberField<JobApplicationFieldControls>;
    /**
     * Static representation of the [[custOnbPrefLang]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUST_ONB_PREF_LANG: NumberField<JobApplicationFieldControls>;
    /**
     * Static representation of the [[custSalaryDesired]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUST_SALARY_DESIRED: NumberField<JobApplicationFieldControls>;
    /**
     * Static representation of the [[custTravel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUST_TRAVEL: NumberField<JobApplicationFieldControls>;
    /**
     * Static representation of the [[customAdditionalAttach]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOM_ADDITIONAL_ATTACH: NumberField<JobApplicationFieldControls>;
    /**
     * Static representation of the [[customAdjustments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOM_ADJUSTMENTS: NumberField<JobApplicationFieldControls>;
    /**
     * Static representation of the [[customAdjustmentsOther]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOM_ADJUSTMENTS_OTHER: NumberField<JobApplicationFieldControls>;
    /**
     * Static representation of the [[customAgeGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOM_AGE_GROUP: NumberField<JobApplicationFieldControls>;
    /**
     * Static representation of the [[customBasePayFreq]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOM_BASE_PAY_FREQ: NumberField<JobApplicationFieldControls>;
    /**
     * Static representation of the [[customBaseSal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOM_BASE_SAL: NumberField<JobApplicationFieldControls>;
    /**
     * Static representation of the [[customCarAllowAmt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOM_CAR_ALLOW_AMT: NumberField<JobApplicationFieldControls>;
    /**
     * Static representation of the [[customCarAllowRequired]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOM_CAR_ALLOW_REQUIRED: NumberField<JobApplicationFieldControls>;
    /**
     * Static representation of the [[customCarAllowanceMonths]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOM_CAR_ALLOWANCE_MONTHS: NumberField<JobApplicationFieldControls>;
    /**
     * Static representation of the [[customEeoPoster]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOM_EEO_POSTER: NumberField<JobApplicationFieldControls>;
    /**
     * Static representation of the [[customEarlyTalent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOM_EARLY_TALENT: NumberField<JobApplicationFieldControls>;
    /**
     * Static representation of the [[customEligibleOther]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOM_ELIGIBLE_OTHER: NumberField<JobApplicationFieldControls>;
    /**
     * Static representation of the [[customEligibleToWork]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOM_ELIGIBLE_TO_WORK: NumberField<JobApplicationFieldControls>;
    /**
     * Static representation of the [[customFinalSignOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOM_FINAL_SIGN_ON: NumberField<JobApplicationFieldControls>;
    /**
     * Static representation of the [[customInternalPolicy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOM_INTERNAL_POLICY: NumberField<JobApplicationFieldControls>;
    /**
     * Static representation of the [[customInterviewComments1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOM_INTERVIEW_COMMENTS_1: NumberField<JobApplicationFieldControls>;
    /**
     * Static representation of the [[customInterviewDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOM_INTERVIEW_DATE_TIME: NumberField<JobApplicationFieldControls>;
    /**
     * Static representation of the [[customInterviewList]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOM_INTERVIEW_LIST: NumberField<JobApplicationFieldControls>;
    /**
     * Static representation of the [[customInterviewRound]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOM_INTERVIEW_ROUND: NumberField<JobApplicationFieldControls>;
    /**
     * Static representation of the [[customInterviewType1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOM_INTERVIEW_TYPE_1: NumberField<JobApplicationFieldControls>;
    /**
     * Static representation of the [[customLti]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOM_LTI: NumberField<JobApplicationFieldControls>;
    /**
     * Static representation of the [[customLegalAuth]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOM_LEGAL_AUTH: NumberField<JobApplicationFieldControls>;
    /**
     * Static representation of the [[customNationality]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOM_NATIONALITY: NumberField<JobApplicationFieldControls>;
    /**
     * Static representation of the [[customNoticeDuringProbPeriod]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOM_NOTICE_DURING_PROB_PERIOD: NumberField<JobApplicationFieldControls>;
    /**
     * Static representation of the [[customNoticePeriod]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOM_NOTICE_PERIOD: NumberField<JobApplicationFieldControls>;
    /**
     * Static representation of the [[customOtherAllowanceDetails]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOM_OTHER_ALLOWANCE_DETAILS: NumberField<JobApplicationFieldControls>;
    /**
     * Static representation of the [[customOtherCompDetails]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOM_OTHER_COMP_DETAILS: NumberField<JobApplicationFieldControls>;
    /**
     * Static representation of the [[customProbPeriod]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOM_PROB_PERIOD: NumberField<JobApplicationFieldControls>;
    /**
     * Static representation of the [[customRelocAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOM_RELOC_AMOUNT: NumberField<JobApplicationFieldControls>;
    /**
     * Static representation of the [[customSexualOrientation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOM_SEXUAL_ORIENTATION: NumberField<JobApplicationFieldControls>;
    /**
     * Static representation of the [[customSourcePrimary]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOM_SOURCE_PRIMARY: NumberField<JobApplicationFieldControls>;
    /**
     * Static representation of the [[customSourceSecondary]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOM_SOURCE_SECONDARY: NumberField<JobApplicationFieldControls>;
    /**
     * Static representation of the [[customTargetBonusAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOM_TARGET_BONUS_AMOUNT: NumberField<JobApplicationFieldControls>;
    /**
     * Static representation of the [[customTypeHire]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOM_TYPE_HIRE: NumberField<JobApplicationFieldControls>;
    /**
     * Static representation of the [[customUkEthnicity]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOM_UK_ETHNICITY: NumberField<JobApplicationFieldControls>;
    /**
     * Static representation of the [[customVirtualHire]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOM_VIRTUAL_HIRE: NumberField<JobApplicationFieldControls>;
    /**
     * Static representation of the [[customVisa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOM_VISA: NumberField<JobApplicationFieldControls>;
    /**
     * Static representation of the [[customVisaYes]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOM_VISA_YES: NumberField<JobApplicationFieldControls>;
    /**
     * Static representation of the [[dataSource]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DATA_SOURCE: NumberField<JobApplicationFieldControls>;
    /**
     * Static representation of the [[disabilityStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DISABILITY_STATUS: NumberField<JobApplicationFieldControls>;
    /**
     * Static representation of the [[disclaimerAcknowledge]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DISCLAIMER_ACKNOWLEDGE: NumberField<JobApplicationFieldControls>;
    /**
     * Static representation of the [[duplicateProfile]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DUPLICATE_PROFILE: NumberField<JobApplicationFieldControls>;
    /**
     * Static representation of the [[education]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EDUCATION: NumberField<JobApplicationFieldControls>;
    /**
     * Static representation of the [[endDateContract]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const END_DATE_CONTRACT: NumberField<JobApplicationFieldControls>;
    /**
     * Static representation of the [[exportedOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXPORTED_ON: NumberField<JobApplicationFieldControls>;
    /**
     * Static representation of the [[firstName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FIRST_NAME: NumberField<JobApplicationFieldControls>;
    /**
     * Static representation of the [[gender]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GENDER: NumberField<JobApplicationFieldControls>;
    /**
     * Static representation of the [[hiredOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HIRED_ON: NumberField<JobApplicationFieldControls>;
    /**
     * Static representation of the [[homePhone]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HOME_PHONE: NumberField<JobApplicationFieldControls>;
    /**
     * Static representation of the [[insideWorkExperience]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INSIDE_WORK_EXPERIENCE: NumberField<JobApplicationFieldControls>;
    /**
     * Static representation of the [[instrAccommodations]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INSTR_ACCOMMODATIONS: NumberField<JobApplicationFieldControls>;
    /**
     * Static representation of the [[instrApplcation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INSTR_APPLCATION: NumberField<JobApplicationFieldControls>;
    /**
     * Static representation of the [[instrContractInfo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INSTR_CONTRACT_INFO: NumberField<JobApplicationFieldControls>;
    /**
     * Static representation of the [[instrDisability1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INSTR_DISABILITY_1: NumberField<JobApplicationFieldControls>;
    /**
     * Static representation of the [[instrDisability2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INSTR_DISABILITY_2: NumberField<JobApplicationFieldControls>;
    /**
     * Static representation of the [[instrDisclaimer]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INSTR_DISCLAIMER: NumberField<JobApplicationFieldControls>;
    /**
     * Static representation of the [[instrEeo1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INSTR_EEO_1: NumberField<JobApplicationFieldControls>;
    /**
     * Static representation of the [[instrEeo2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INSTR_EEO_2: NumberField<JobApplicationFieldControls>;
    /**
     * Static representation of the [[instrEeoFooter]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INSTR_EEO_FOOTER: NumberField<JobApplicationFieldControls>;
    /**
     * Static representation of the [[instrEligWork]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INSTR_ELIG_WORK: NumberField<JobApplicationFieldControls>;
    /**
     * Static representation of the [[instrEmpInfo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INSTR_EMP_INFO: NumberField<JobApplicationFieldControls>;
    /**
     * Static representation of the [[instrGlobalEeo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INSTR_GLOBAL_EEO: NumberField<JobApplicationFieldControls>;
    /**
     * Static representation of the [[instrInternalPolicy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INSTR_INTERNAL_POLICY: NumberField<JobApplicationFieldControls>;
    /**
     * Static representation of the [[instrInterview]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INSTR_INTERVIEW: NumberField<JobApplicationFieldControls>;
    /**
     * Static representation of the [[instrRewardInfo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INSTR_REWARD_INFO: NumberField<JobApplicationFieldControls>;
    /**
     * Static representation of the [[instrUkDisability]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INSTR_UK_DISABILITY: NumberField<JobApplicationFieldControls>;
    /**
     * Static representation of the [[instrVets1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INSTR_VETS_1: NumberField<JobApplicationFieldControls>;
    /**
     * Static representation of the [[instrVets2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INSTR_VETS_2: NumberField<JobApplicationFieldControls>;
    /**
     * Static representation of the [[jobAppGuid]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_APP_GUID: NumberField<JobApplicationFieldControls>;
    /**
     * Static representation of the [[jobAppPermissionsNav]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_APP_PERMISSIONS_NAV: NumberField<JobApplicationFieldControls>;
    /**
     * Static representation of the [[jobAppStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_APP_STATUS: NumberField<JobApplicationFieldControls>;
    /**
     * Static representation of the [[jobApplicationAssessmentOrder]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_APPLICATION_ASSESSMENT_ORDER: NumberField<JobApplicationFieldControls>;
    /**
     * Static representation of the [[jobApplicationAudit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_APPLICATION_AUDIT: NumberField<JobApplicationFieldControls>;
    /**
     * Static representation of the [[jobApplicationComments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_APPLICATION_COMMENTS: NumberField<JobApplicationFieldControls>;
    /**
     * Static representation of the [[jobApplicationInterview]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_APPLICATION_INTERVIEW: NumberField<JobApplicationFieldControls>;
    /**
     * Static representation of the [[jobApplicationOnboardingData]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_APPLICATION_ONBOARDING_DATA: NumberField<JobApplicationFieldControls>;
    /**
     * Static representation of the [[jobApplicationQuestionResponse]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_APPLICATION_QUESTION_RESPONSE: NumberField<JobApplicationFieldControls>;
    /**
     * Static representation of the [[jobApplicationStatusAuditTrail]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_APPLICATION_STATUS_AUDIT_TRAIL: NumberField<JobApplicationFieldControls>;
    /**
     * Static representation of the [[jobOffer]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_OFFER: NumberField<JobApplicationFieldControls>;
    /**
     * Static representation of the [[jobReqId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_REQ_ID: NumberField<JobApplicationFieldControls>;
    /**
     * Static representation of the [[jobRequisition]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_REQUISITION: NumberField<JobApplicationFieldControls>;
    /**
     * Static representation of the [[jobTitle]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_TITLE: NumberField<JobApplicationFieldControls>;
    /**
     * Static representation of the [[languages]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LANGUAGES: NumberField<JobApplicationFieldControls>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: NumberField<JobApplicationFieldControls>;
    /**
     * Static representation of the [[lastModifiedByProxy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY_PROXY: NumberField<JobApplicationFieldControls>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: NumberField<JobApplicationFieldControls>;
    /**
     * Static representation of the [[lastName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_NAME: NumberField<JobApplicationFieldControls>;
    /**
     * Static representation of the [[middleName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MIDDLE_NAME: NumberField<JobApplicationFieldControls>;
    /**
     * Static representation of the [[mobility]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MOBILITY: NumberField<JobApplicationFieldControls>;
    /**
     * Static representation of the [[nonApplicantStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NON_APPLICANT_STATUS: NumberField<JobApplicationFieldControls>;
    /**
     * Static representation of the [[offerLetter]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OFFER_LETTER: NumberField<JobApplicationFieldControls>;
    /**
     * Static representation of the [[outsideWorkExperience]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OUTSIDE_WORK_EXPERIENCE: NumberField<JobApplicationFieldControls>;
    /**
     * Static representation of the [[owner]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OWNER: NumberField<JobApplicationFieldControls>;
    /**
     * Static representation of the [[ownershpDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OWNERSHP_DATE: NumberField<JobApplicationFieldControls>;
    /**
     * Static representation of the [[profileUpdated]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROFILE_UPDATED: NumberField<JobApplicationFieldControls>;
    /**
     * Static representation of the [[race]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RACE: NumberField<JobApplicationFieldControls>;
    /**
     * Static representation of the [[rating]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RATING: NumberField<JobApplicationFieldControls>;
    /**
     * Static representation of the [[reference]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REFERENCE: NumberField<JobApplicationFieldControls>;
    /**
     * Static representation of the [[referenceComments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REFERENCE_COMMENTS: NumberField<JobApplicationFieldControls>;
    /**
     * Static representation of the [[referredBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REFERRED_BY: NumberField<JobApplicationFieldControls>;
    /**
     * Static representation of the [[referredByNav]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REFERRED_BY_NAV: NumberField<JobApplicationFieldControls>;
    /**
     * Static representation of the [[resume]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RESUME: NumberField<JobApplicationFieldControls>;
    /**
     * Static representation of the [[resumeUploadDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RESUME_UPLOAD_DATE: NumberField<JobApplicationFieldControls>;
    /**
     * Static representation of the [[sectDisclaimer]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SECT_DISCLAIMER: NumberField<JobApplicationFieldControls>;
    /**
     * Static representation of the [[snapShotDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SNAP_SHOT_DATE: NumberField<JobApplicationFieldControls>;
    /**
     * Static representation of the [[source]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SOURCE: NumberField<JobApplicationFieldControls>;
    /**
     * Static representation of the [[sourceLabel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SOURCE_LABEL: NumberField<JobApplicationFieldControls>;
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const START_DATE: NumberField<JobApplicationFieldControls>;
    /**
     * Static representation of the [[state]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATE: NumberField<JobApplicationFieldControls>;
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS: NumberField<JobApplicationFieldControls>;
    /**
     * Static representation of the [[statusComments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS_COMMENTS: NumberField<JobApplicationFieldControls>;
    /**
     * Static representation of the [[statusId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS_ID: NumberField<JobApplicationFieldControls>;
    /**
     * Static representation of the [[timeToHire]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TIME_TO_HIRE: NumberField<JobApplicationFieldControls>;
    /**
     * Static representation of the [[userNav]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_NAV: NumberField<JobApplicationFieldControls>;
    /**
     * Static representation of the [[usersSysId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USERS_SYS_ID: NumberField<JobApplicationFieldControls>;
    /**
     * Static representation of the [[veteranStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VETERAN_STATUS: NumberField<JobApplicationFieldControls>;
    /**
     * Static representation of the [[zip]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ZIP: NumberField<JobApplicationFieldControls>;
    /**
     * All fields of the JobApplicationFieldControls entity.
     */
    const _allFields: Array<NumberField<JobApplicationFieldControls>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<JobApplicationFieldControls>;
    /**
     * All key fields of the JobApplicationFieldControls entity.
     */
    const _keyFields: Array<Selectable<JobApplicationFieldControls>>;
    /**
     * Mapping of all key field names to the respective static field property JobApplicationFieldControls.
     */
    const _keys: {
        [keys: string]: Selectable<JobApplicationFieldControls>;
    };
}
//# sourceMappingURL=JobApplicationFieldControls.d.ts.map