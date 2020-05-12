import { JobApplicationRequestBuilder } from './JobApplicationRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, Link, NumberField, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "JobApplication" of service "SFOData".
 */
export declare class JobApplication extends Entity implements JobApplicationType {
    /**
     * Technical entity name for JobApplication.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for JobApplication.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Address.
     * @nullable
     */
    address?: string;
    /**
     * Agency Info.
     * @nullable
     */
    agencyInfo?: string;
    /**
     * Anonymized Date.
     * @nullable
     */
    anonymizedDate?: Moment;
    /**
     * Anonymized Flag.
     * @nullable
     */
    anonymizedFlag?: string;
    /**
     * Application Locale.
     * @nullable
     */
    appLocale?: string;
    /**
     * Job Application Status Item Id.
     * @nullable
     */
    appStatusSetItemId?: BigNumber;
    /**
     * Current Title.
     * @nullable
     */
    applicationDate?: Moment;
    /**
     * Application Id.
     */
    applicationId: BigNumber;
    /**
     * Application Template Id.
     */
    applicationTemplateId: BigNumber;
    /**
     * Rating.
     * @nullable
     */
    averageRating?: BigNumber;
    /**
     * Background Check Status.
     * @nullable
     */
    bkgrndChkStatus?: string;
    /**
     * Work Phone.
     * @nullable
     */
    businessPhone?: string;
    /**
     * Candidate Conversion Processed.
     * @nullable
     */
    candConversionProcessed?: string;
    /**
     * Candidate Type When Hired.
     * @nullable
     */
    candTypeWhenHired?: string;
    /**
     * Candidate Id.
     */
    candidateId: BigNumber;
    /**
     * Cell Phone.
     * @nullable
     */
    cellPhone?: string;
    /**
     * City.
     * @nullable
     */
    city?: string;
    /**
     * Email Address.
     * @nullable
     */
    contactEmail?: string;
    /**
     * Country.
     * @nullable
     */
    country?: string;
    /**
     * Country Code.
     * @nullable
     */
    countryCode?: string;
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
     * What are your salary requirements?.
     * @nullable
     */
    custSalaryDesired?: string;
    /**
     * If yes please let us know what you need.
     * @nullable
     */
    customAdjustmentsOther?: string;
    /**
     * Offered Base Salary.
     * @nullable
     */
    customBaseSal?: BigNumber;
    /**
     * Transportation Amount.
     * @nullable
     */
    customCarAllowAmt?: BigNumber;
    /**
     * # Months for Car Allowance.
     * @nullable
     */
    customCarAllowanceMonths?: string;
    /**
     * EEO is the Law Poster.
     * @nullable
     */
    customEeoPoster?: string;
    /**
     * If selected 'Other', or restrictions exist in current work visa, please specify here.
     * @nullable
     */
    customEligibleOther?: string;
    /**
     * Sign On Bonus Amount.
     * @nullable
     */
    customFinalSignOn?: BigNumber;
    /**
     * Interview Comments.
     * @nullable
     */
    customInterviewComments1?: string;
    /**
     * Preferred Interview Dates and Times.
     * @nullable
     */
    customInterviewDateTime?: string;
    /**
     * List of Interviewers.
     * @nullable
     */
    customInterviewList?: string;
    /**
     * RSU / LTI.
     * @nullable
     */
    customLti?: string;
    /**
     * Other Allowance Details.
     * @nullable
     */
    customOtherAllowanceDetails?: string;
    /**
     * Other Compensation Details.
     * @nullable
     */
    customOtherCompDetails?: string;
    /**
     * Relocation Amount.
     * @nullable
     */
    customRelocAmount?: BigNumber;
    /**
     * Target Bonus Amount.
     * @nullable
     */
    customTargetBonusAmount?: BigNumber;
    /**
     * If yes, please indicate Visa status.
     * @nullable
     */
    customVisaYes?: string;
    /**
     * Data Source.
     * @nullable
     */
    dataSource?: string;
    /**
     * Typed Signature.
     * @nullable
     */
    disclaimerAcknowledge?: string;
    /**
     * Duplicate Profile.
     * @nullable
     */
    duplicateProfile?: string;
    /**
     * End Date.
     * @nullable
     */
    endDateContract?: Moment;
    /**
     * Exported On.
     * @nullable
     */
    exportedOn?: Moment;
    /**
     * First Name.
     * @nullable
     */
    firstName?: string;
    /**
     * Gender.
     * @nullable
     */
    gender?: string;
    /**
     * Hired On.
     * @nullable
     */
    hiredOn?: Moment;
    /**
     * Home Phone.
     * @nullable
     */
    homePhone?: string;
    /**
     * Reasonable Accommodation Notice Federal law requires employers to provide reasonable accommodation to qualified individuals with disabilities. Please tell us if you require a reasonable accommodation to apply for a job or to perform your job. Examples of reasonable accommodation include making a change to the application process or work procedures, providing documents in an alternate format, using a sign language interpreter, or using specialized equipment.   1Section 503 of the Rehabilitation Act of 1973, as amended. For more information about this form or the equal employment obligations of Federal contractors, visit the U.S. Department of Labor’s Office of Federal Contract Compliance Programs (OFCCP) website at  www.dol.gov/ofccp .  PUBLIC BURDEN STATEMENT: According to the Paperwork Reduction Act of 1995 no persons are require to respond to a collection of information unless such collection displays a valid OMB control number. This survey should take 5 minutes to complete.
     * @nullable
     */
    instrAccommodations?: string;
    /**
     * Application Information.
     * @nullable
     */
    instrApplcation?: string;
    /**
     * Offer Information.
     * @nullable
     */
    instrContractInfo?: string;
    /**
     * U.S. – Voluntary Self-Identification of Disability (Form CC-305 / OMB Control Number 1250-0005 / Expires: 1/31/2020).
     * @nullable
     */
    instrDisability1?: string;
    /**
     * Why are you being asked to complete this form? Because we do business with the government, we must reach out to, hire, and provide equal opportunity to qualified people with disabilities1. To help us measure how well we are doing, we are asking you to tell us if you have a disability or if you ever had a disability. Completing this form is voluntary, but we hope that you will choose to fill it out. If you are applying for a job, any answer you give will be kept private and will not be used against you in any way.  If you already work for us, your answer will not be used against you in any way. Because a person may become disabled at any time, we are required to ask all of our employees to update their information every five years. You may voluntarily self-identify as having a disability on this form without fear of any punishment because you did not identify as having a disability earlier.  How do I know if I have a disability?  You are considered to have a disability if you have a physical or mental impairment or medical condition that substantially limits a major life activity, or if you have a history or record of such an impairment or medical condition. Disabilities include, but are not limited to:          Blindness     Deafness     Cancer      Diabetes     Epilepsy     Autism     Cerebral palsy     HIV/AIDS     Schizophrenia     Muscular dystrophy     Bipolar disorder     Major depression     Multiple sclerosis (MS)     Missing limbs or partially missing limbs     Post-traumatic stress disorder (PTSD)     Obsessive compulsive disorder     Impairments requiring the use of a wheelchair     Intellectual disability (previously called mental retardation).
     * @nullable
     */
    instrDisability2?: string;
    /**
     * ACKNOWLEDGEMENT          I am submitting this application for employment with an HR Model Company company and understand that all HR Model Company companies, including affiliates and subsidiaries are collectively referred to as “HR Model Company” in this application and acknowledgement.  I certify that I have read and understand the applicant instructions on page one of this application and that the answers given by me to the forgoing questions and statements made by me are complete and accurate to the best of my knowledge and belief. I understand that any false information, omission, or misrepresentations of facts called for in this application, whether on this document or not, may result in rejection of my application or discharge at any time during my employment. I authorize the company and/or its agents, including consumer reporting bureaus, to verify any of this information. I understand that HR Model Company may share the information contained in this application for employment with other HR Model Company employees and contractors for employment and administrative purposes, and I hereby consent to such sharing. During the application process and the period of my employment, I authorize HR Model Company to conduct investigations regarding my personal and employment history, including contacting anyone it deems appropriate to discuss my background, past performance, and suitability for employment.  Further, I hereby authorize my former employers, schools, and any other individual or organization to provide such information. I hereby release and discharge each of the above, including HR Model Company, from any liability associated with such inquiries.   I understand that if employed, I will be required to provide proof that I have a legal right to work in the United States. I understand that, if I am employed by HR Model Company, HR Model Company retains the unrestricted right to search and inspect any of its property.   I will return all of HR Model Company’s property immediately upon any termination of my employment. I also understand that the use of illegal drugs is prohibited during employment. I am willing to submit to drug testing to detect the use of illegal drugs prior to and during employment.  I understand that employment with HR Model Company is on an “at-will” basis, which means that either party may terminate the employment relationship at any time for any reason not prohibited by law and that nothing by way of the background investigation process shall be construed as a guarantee of my continued employment with HR Model Company for any period of time nor shall this Agreement be construed to establish or afford any right to claim specific compensation or other employee benefits.  I previously consented to electronically sign my employment application through this online process. I understand that once I electronically sign below and Submit as Final, HR Model Company will be able to view the information I have provided on this employment application. I understand I will not be able to edit this information unless the application is returned to an editing stage and that once I Submit as Final I may decide to withdraw my electronic signature at a later date but that I will still have access to a copy of the withdrawn application.   To electronically sign the employment application, please type your name below. You will then be asked for your login password for authentication purposes. The application is not submitted or signed until you click Submit as Final. The electronic signature will be in accordance with Electronic Signatures in Global and National Commerce Act (E-Sign Act) and will have be same force and effect as a wet signature.
     * @nullable
     */
    instrDisclaimer?: string;
    /**
     * U.S. - Invitation to Self Identify.
     * @nullable
     */
    instrEeo1?: string;
    /**
     * If you are applying for a job outside of U.S. please select Decline to Self-Identify. You are invited to provide certain information in order to assist HR Model Company and Ariba, an HR Model Company company, with meeting federal and state record-keeping requirements. Providing this information is voluntary. Any information provided will be kept confidential and will not adversely affect your employment or consideration for employment. HR Model Company and Ariba, an HR Model Company company, are required by federal regulations to identify and maintain information regarding each employee's and, where possible, each applicant's race and gender on the basis of visual observation if the information is not voluntarily provided by applicants and employees. HR Model Company and Ariba, an HR Model Company company, are an Equal Opportunity Employer and does not discriminate in hiring or employment against any individual on the basis of race, religion, color, creed, gender, gender identity or expression, national origin, ancestry, age, marital status, citizenship, physical or mental disability, veteran status, sexual orientation, or status within any other group that is protected by anti-discrimination laws.
     * @nullable
     */
    instrEeo2?: string;
    /**
     * EOE AA M/F/Vet/Disability Qualified applicants will receive consideration for employment without regard to their race, color, religion, national origin, sex, sexual orientation, gender identity, protected veteran status or disability.
     * @nullable
     */
    instrEeoFooter?: string;
    /**
     * Are there any restrictions on your right to legally work in the UK? (please note, you will be asked to show your passport and/or your work visa if you come for an interview).
     * @nullable
     */
    instrEligWork?: string;
    /**
     * Employment Information.
     * @nullable
     */
    instrEmpInfo?: string;
    /**
     * As an inclusive and accessible employer we want to find out some information about you, so that if you require any reasonable adjustments, we can provide this for you.        The answers to the following questions are confidential, and will not be available to hiring managers and will not be considered in making any employment decision. However, if you choose not to complete this information, it will not affect your being considered for employment.
     * @nullable
     */
    instrGlobalEeo?: string;
    /**
     * Click to view Internal Transfer Guidelines.
     * @nullable
     */
    instrInternalPolicy?: string;
    /**
     * Interview Information.
     * @nullable
     */
    instrInterview?: string;
    /**
     * Compensation Information.
     * @nullable
     */
    instrRewardInfo?: string;
    /**
     * Within the definition of the Equality Act 2010 do you consider yourself to have a disability?.
     * @nullable
     */
    instrUkDisability?: string;
    /**
     * U.S. – Protected Veteran Voluntary Self-Identification.
     * @nullable
     */
    instrVets1?: string;
    /**
     * We are a Government contractor subject to the Vietnam Era Veterans’ Readjustment Assistance Act of 1974, as amended by the Jobs for Veterans Act of 2002, 38 U.S.C. §4212 (VEVRAA), which requires Government contractors to take affirmative action to employ and advance in employment: (1) disabled veterans; (2) recently separated veterans; (3) active duty wartime or campaign badge veterans; and (4) Armed Forces service medal veterans. For definitions click the help icon below.       If you believe you belong to any of the categories of protected veterans listed, please indicate by checking the appropriate box below.   As a Government contractor subject to VEVRAA, we request this information in order to measure the effectiveness of the outreach and positive recruitment efforts we undertake pursuant to VEVRAA.
     * @nullable
     */
    instrVets2?: string;
    /**
     * Application GU Id.
     * @nullable
     */
    jobAppGuid?: string;
    /**
     * Job Requisition Id.
     */
    jobReqId: BigNumber;
    /**
     * Current Title.
     * @nullable
     */
    jobTitle?: string;
    /**
     * Last Modified By.
     * @nullable
     */
    lastModifiedBy?: string;
    /**
     * Last Modified By Proxy.
     * @nullable
     */
    lastModifiedByProxy?: string;
    /**
     * Last Modified Date Time.
     * @nullable
     */
    lastModifiedDateTime?: Moment;
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
     * Non Applicant Status.
     * @nullable
     */
    nonApplicantStatus?: string;
    /**
     * Owner.
     * @nullable
     */
    owner?: string;
    /**
     * Ownership Date.
     * @nullable
     */
    ownershpDate?: Moment;
    /**
     * Profile Updated.
     * @nullable
     */
    profileUpdated?: string;
    /**
     * Rating.
     * @nullable
     */
    rating?: string;
    /**
     * Reference.
     * @nullable
     */
    reference?: string;
    /**
     * Reference Comments.
     * @nullable
     */
    referenceComments?: string;
    /**
     * Referred By.
     * @nullable
     */
    referredBy?: string;
    /**
     * Resume Upload Date.
     * @nullable
     */
    resumeUploadDate?: Moment;
    /**
     * STATEMENT OF AGREEMENT.
     * @nullable
     */
    sectDisclaimer?: string;
    /**
     * Snapshot Date.
     * @nullable
     */
    snapShotDate?: Moment;
    /**
     * Source.
     * @nullable
     */
    source?: string;
    /**
     * Source Label.
     * @nullable
     */
    sourceLabel?: string;
    /**
     * Start Date.
     * @nullable
     */
    startDate?: Moment;
    /**
     * System Status.
     * @nullable
     */
    status?: string;
    /**
     * Status Comments.
     * @nullable
     */
    statusComments?: string;
    /**
     * Time to Hire.
     * @nullable
     */
    timeToHire?: number;
    /**
     * User id.
     * @nullable
     */
    usersSysId?: string;
    /**
     * Zip.
     * @nullable
     */
    zip?: string;
    /**
     * One-to-many navigation property to the [[Attachment]] entity.
     */
    bkgrndChkAttachment: Attachment[];
    /**
     * One-to-one navigation property to the [[Candidate]] entity.
     */
    candidate: Candidate;
    /**
     * One-to-many navigation property to the [[PicklistOption]] entity.
     */
    countryPicklist: PicklistOption[];
    /**
     * One-to-one navigation property to the [[Attachment]] entity.
     */
    coverLetter: Attachment;
    /**
     * One-to-many navigation property to the [[PicklistOption]] entity.
     */
    custOnbPrefLang: PicklistOption[];
    /**
     * One-to-many navigation property to the [[PicklistOption]] entity.
     */
    custTravel: PicklistOption[];
    /**
     * One-to-many navigation property to the [[Attachment]] entity.
     */
    customAdditionalAttach: Attachment[];
    /**
     * One-to-many navigation property to the [[PicklistOption]] entity.
     */
    customAdjustments: PicklistOption[];
    /**
     * One-to-many navigation property to the [[PicklistOption]] entity.
     */
    customAgeGroup: PicklistOption[];
    /**
     * One-to-many navigation property to the [[PicklistOption]] entity.
     */
    customBasePayFreq: PicklistOption[];
    /**
     * One-to-many navigation property to the [[PicklistOption]] entity.
     */
    customCarAllowRequired: PicklistOption[];
    /**
     * One-to-many navigation property to the [[PicklistOption]] entity.
     */
    customEarlyTalent: PicklistOption[];
    /**
     * One-to-many navigation property to the [[PicklistOption]] entity.
     */
    customEligibleToWork: PicklistOption[];
    /**
     * One-to-many navigation property to the [[PicklistOption]] entity.
     */
    customInternalPolicy: PicklistOption[];
    /**
     * One-to-many navigation property to the [[PicklistOption]] entity.
     */
    customInterviewRound: PicklistOption[];
    /**
     * One-to-many navigation property to the [[PicklistOption]] entity.
     */
    customInterviewType1: PicklistOption[];
    /**
     * One-to-many navigation property to the [[PicklistOption]] entity.
     */
    customLegalAuth: PicklistOption[];
    /**
     * One-to-many navigation property to the [[PicklistOption]] entity.
     */
    customNationality: PicklistOption[];
    /**
     * One-to-many navigation property to the [[PicklistOption]] entity.
     */
    customNoticeDuringProbPeriod: PicklistOption[];
    /**
     * One-to-many navigation property to the [[PicklistOption]] entity.
     */
    customNoticePeriod: PicklistOption[];
    /**
     * One-to-many navigation property to the [[PicklistOption]] entity.
     */
    customProbPeriod: PicklistOption[];
    /**
     * One-to-many navigation property to the [[PicklistOption]] entity.
     */
    customSexualOrientation: PicklistOption[];
    /**
     * One-to-many navigation property to the [[PicklistOption]] entity.
     */
    customSourcePrimary: PicklistOption[];
    /**
     * One-to-many navigation property to the [[PicklistOption]] entity.
     */
    customSourceSecondary: PicklistOption[];
    /**
     * One-to-many navigation property to the [[PicklistOption]] entity.
     */
    customTypeHire: PicklistOption[];
    /**
     * One-to-many navigation property to the [[PicklistOption]] entity.
     */
    customUkEthnicity: PicklistOption[];
    /**
     * One-to-many navigation property to the [[PicklistOption]] entity.
     */
    customVirtualHire: PicklistOption[];
    /**
     * One-to-many navigation property to the [[PicklistOption]] entity.
     */
    customVisa: PicklistOption[];
    /**
     * One-to-many navigation property to the [[PicklistOption]] entity.
     */
    disabilityStatus: PicklistOption[];
    /**
     * One-to-many navigation property to the [[JobApplicationSnapshot_Education]] entity.
     */
    education: JobApplicationSnapshot_Education[];
    /**
     * One-to-many navigation property to the [[JobApplicationSnapshot_InsideWorkExperience]] entity.
     */
    insideWorkExperience: JobApplicationSnapshot_InsideWorkExperience[];
    /**
     * One-to-one navigation property to the [[JobApplicationFieldControls]] entity.
     */
    jobAppPermissionsNav: JobApplicationFieldControls;
    /**
     * One-to-one navigation property to the [[JobApplicationStatus]] entity.
     */
    jobAppStatus: JobApplicationStatus;
    /**
     * One-to-many navigation property to the [[JobApplicationAssessmentOrder]] entity.
     */
    jobApplicationAssessmentOrder: JobApplicationAssessmentOrder[];
    /**
     * One-to-many navigation property to the [[JobApplicationAudit]] entity.
     */
    jobApplicationAudit: JobApplicationAudit[];
    /**
     * One-to-many navigation property to the [[JobApplicationComments]] entity.
     */
    jobApplicationComments: JobApplicationComments[];
    /**
     * One-to-many navigation property to the [[JobApplicationInterview]] entity.
     */
    jobApplicationInterview: JobApplicationInterview[];
    /**
     * One-to-many navigation property to the [[JobApplicationOnboardingData]] entity.
     */
    jobApplicationOnboardingData: JobApplicationOnboardingData[];
    /**
     * One-to-many navigation property to the [[JobApplicationQuestionResponse]] entity.
     */
    jobApplicationQuestionResponse: JobApplicationQuestionResponse[];
    /**
     * One-to-many navigation property to the [[JobApplicationStatusAuditTrail]] entity.
     */
    jobApplicationStatusAuditTrail: JobApplicationStatusAuditTrail[];
    /**
     * One-to-many navigation property to the [[JobOffer]] entity.
     */
    jobOffer: JobOffer[];
    /**
     * One-to-one navigation property to the [[JobRequisition]] entity.
     */
    jobRequisition: JobRequisition;
    /**
     * One-to-many navigation property to the [[JobApplicationSnapshot_Languages]] entity.
     */
    languages: JobApplicationSnapshot_Languages[];
    /**
     * One-to-many navigation property to the [[JobApplicationSnapshot_Mobility]] entity.
     */
    mobility: JobApplicationSnapshot_Mobility[];
    /**
     * One-to-many navigation property to the [[OfferLetter]] entity.
     */
    offerLetter: OfferLetter[];
    /**
     * One-to-many navigation property to the [[JobApplicationSnapshot_OutsideWorkExperience]] entity.
     */
    outsideWorkExperience: JobApplicationSnapshot_OutsideWorkExperience[];
    /**
     * One-to-many navigation property to the [[PicklistOption]] entity.
     */
    race: PicklistOption[];
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    referredByNav: User;
    /**
     * One-to-one navigation property to the [[Attachment]] entity.
     */
    resume: Attachment;
    /**
     * One-to-many navigation property to the [[PicklistOption]] entity.
     */
    state: PicklistOption[];
    /**
     * One-to-many navigation property to the [[PicklistOption]] entity.
     */
    statusId: PicklistOption[];
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    userNav: User;
    /**
     * One-to-many navigation property to the [[PicklistOption]] entity.
     */
    veteranStatus: PicklistOption[];
    /**
     * Returns an entity builder to construct instances `JobApplication`.
     * @returns A builder that constructs instances of entity type `JobApplication`.
     */
    static builder(): EntityBuilderType<JobApplication, JobApplicationTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `JobApplication` entity type.
     * @returns A `JobApplication` request builder.
     */
    static requestBuilder(): JobApplicationRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobApplication`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `JobApplication`.
     */
    static customField(fieldName: string): CustomField<JobApplication>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { Attachment, AttachmentType } from './Attachment';
import { Candidate, CandidateType } from './Candidate';
import { PicklistOption, PicklistOptionType } from './PicklistOption';
import { JobApplicationSnapshot_Education, JobApplicationSnapshot_EducationType } from './JobApplicationSnapshot_Education';
import { JobApplicationSnapshot_InsideWorkExperience, JobApplicationSnapshot_InsideWorkExperienceType } from './JobApplicationSnapshot_InsideWorkExperience';
import { JobApplicationFieldControls, JobApplicationFieldControlsType } from './JobApplicationFieldControls';
import { JobApplicationStatus, JobApplicationStatusType } from './JobApplicationStatus';
import { JobApplicationAssessmentOrder, JobApplicationAssessmentOrderType } from './JobApplicationAssessmentOrder';
import { JobApplicationAudit, JobApplicationAuditType } from './JobApplicationAudit';
import { JobApplicationComments, JobApplicationCommentsType } from './JobApplicationComments';
import { JobApplicationInterview, JobApplicationInterviewType } from './JobApplicationInterview';
import { JobApplicationOnboardingData, JobApplicationOnboardingDataType } from './JobApplicationOnboardingData';
import { JobApplicationQuestionResponse, JobApplicationQuestionResponseType } from './JobApplicationQuestionResponse';
import { JobApplicationStatusAuditTrail, JobApplicationStatusAuditTrailType } from './JobApplicationStatusAuditTrail';
import { JobOffer, JobOfferType } from './JobOffer';
import { JobRequisition, JobRequisitionType } from './JobRequisition';
import { JobApplicationSnapshot_Languages, JobApplicationSnapshot_LanguagesType } from './JobApplicationSnapshot_Languages';
import { JobApplicationSnapshot_Mobility, JobApplicationSnapshot_MobilityType } from './JobApplicationSnapshot_Mobility';
import { OfferLetter, OfferLetterType } from './OfferLetter';
import { JobApplicationSnapshot_OutsideWorkExperience, JobApplicationSnapshot_OutsideWorkExperienceType } from './JobApplicationSnapshot_OutsideWorkExperience';
import { User, UserType } from './User';
export interface JobApplicationType {
    address?: string;
    agencyInfo?: string;
    anonymizedDate?: Moment;
    anonymizedFlag?: string;
    appLocale?: string;
    appStatusSetItemId?: BigNumber;
    applicationDate?: Moment;
    applicationId: BigNumber;
    applicationTemplateId: BigNumber;
    averageRating?: BigNumber;
    bkgrndChkStatus?: string;
    businessPhone?: string;
    candConversionProcessed?: string;
    candTypeWhenHired?: string;
    candidateId: BigNumber;
    cellPhone?: string;
    city?: string;
    contactEmail?: string;
    country?: string;
    countryCode?: string;
    currentCompany?: string;
    currentTitle?: string;
    custSalaryDesired?: string;
    customAdjustmentsOther?: string;
    customBaseSal?: BigNumber;
    customCarAllowAmt?: BigNumber;
    customCarAllowanceMonths?: string;
    customEeoPoster?: string;
    customEligibleOther?: string;
    customFinalSignOn?: BigNumber;
    customInterviewComments1?: string;
    customInterviewDateTime?: string;
    customInterviewList?: string;
    customLti?: string;
    customOtherAllowanceDetails?: string;
    customOtherCompDetails?: string;
    customRelocAmount?: BigNumber;
    customTargetBonusAmount?: BigNumber;
    customVisaYes?: string;
    dataSource?: string;
    disclaimerAcknowledge?: string;
    duplicateProfile?: string;
    endDateContract?: Moment;
    exportedOn?: Moment;
    firstName?: string;
    gender?: string;
    hiredOn?: Moment;
    homePhone?: string;
    instrAccommodations?: string;
    instrApplcation?: string;
    instrContractInfo?: string;
    instrDisability1?: string;
    instrDisability2?: string;
    instrDisclaimer?: string;
    instrEeo1?: string;
    instrEeo2?: string;
    instrEeoFooter?: string;
    instrEligWork?: string;
    instrEmpInfo?: string;
    instrGlobalEeo?: string;
    instrInternalPolicy?: string;
    instrInterview?: string;
    instrRewardInfo?: string;
    instrUkDisability?: string;
    instrVets1?: string;
    instrVets2?: string;
    jobAppGuid?: string;
    jobReqId: BigNumber;
    jobTitle?: string;
    lastModifiedBy?: string;
    lastModifiedByProxy?: string;
    lastModifiedDateTime?: Moment;
    lastName?: string;
    middleName?: string;
    nonApplicantStatus?: string;
    owner?: string;
    ownershpDate?: Moment;
    profileUpdated?: string;
    rating?: string;
    reference?: string;
    referenceComments?: string;
    referredBy?: string;
    resumeUploadDate?: Moment;
    sectDisclaimer?: string;
    snapShotDate?: Moment;
    source?: string;
    sourceLabel?: string;
    startDate?: Moment;
    status?: string;
    statusComments?: string;
    timeToHire?: number;
    usersSysId?: string;
    zip?: string;
    bkgrndChkAttachment: AttachmentType[];
    candidate: CandidateType;
    countryPicklist: PicklistOptionType[];
    coverLetter: AttachmentType;
    custOnbPrefLang: PicklistOptionType[];
    custTravel: PicklistOptionType[];
    customAdditionalAttach: AttachmentType[];
    customAdjustments: PicklistOptionType[];
    customAgeGroup: PicklistOptionType[];
    customBasePayFreq: PicklistOptionType[];
    customCarAllowRequired: PicklistOptionType[];
    customEarlyTalent: PicklistOptionType[];
    customEligibleToWork: PicklistOptionType[];
    customInternalPolicy: PicklistOptionType[];
    customInterviewRound: PicklistOptionType[];
    customInterviewType1: PicklistOptionType[];
    customLegalAuth: PicklistOptionType[];
    customNationality: PicklistOptionType[];
    customNoticeDuringProbPeriod: PicklistOptionType[];
    customNoticePeriod: PicklistOptionType[];
    customProbPeriod: PicklistOptionType[];
    customSexualOrientation: PicklistOptionType[];
    customSourcePrimary: PicklistOptionType[];
    customSourceSecondary: PicklistOptionType[];
    customTypeHire: PicklistOptionType[];
    customUkEthnicity: PicklistOptionType[];
    customVirtualHire: PicklistOptionType[];
    customVisa: PicklistOptionType[];
    disabilityStatus: PicklistOptionType[];
    education: JobApplicationSnapshot_EducationType[];
    insideWorkExperience: JobApplicationSnapshot_InsideWorkExperienceType[];
    jobAppPermissionsNav: JobApplicationFieldControlsType;
    jobAppStatus: JobApplicationStatusType;
    jobApplicationAssessmentOrder: JobApplicationAssessmentOrderType[];
    jobApplicationAudit: JobApplicationAuditType[];
    jobApplicationComments: JobApplicationCommentsType[];
    jobApplicationInterview: JobApplicationInterviewType[];
    jobApplicationOnboardingData: JobApplicationOnboardingDataType[];
    jobApplicationQuestionResponse: JobApplicationQuestionResponseType[];
    jobApplicationStatusAuditTrail: JobApplicationStatusAuditTrailType[];
    jobOffer: JobOfferType[];
    jobRequisition: JobRequisitionType;
    languages: JobApplicationSnapshot_LanguagesType[];
    mobility: JobApplicationSnapshot_MobilityType[];
    offerLetter: OfferLetterType[];
    outsideWorkExperience: JobApplicationSnapshot_OutsideWorkExperienceType[];
    race: PicklistOptionType[];
    referredByNav: UserType;
    resume: AttachmentType;
    state: PicklistOptionType[];
    statusId: PicklistOptionType[];
    userNav: UserType;
    veteranStatus: PicklistOptionType[];
}
export interface JobApplicationTypeForceMandatory {
    address: string;
    agencyInfo: string;
    anonymizedDate: Moment;
    anonymizedFlag: string;
    appLocale: string;
    appStatusSetItemId: BigNumber;
    applicationDate: Moment;
    applicationId: BigNumber;
    applicationTemplateId: BigNumber;
    averageRating: BigNumber;
    bkgrndChkStatus: string;
    businessPhone: string;
    candConversionProcessed: string;
    candTypeWhenHired: string;
    candidateId: BigNumber;
    cellPhone: string;
    city: string;
    contactEmail: string;
    country: string;
    countryCode: string;
    currentCompany: string;
    currentTitle: string;
    custSalaryDesired: string;
    customAdjustmentsOther: string;
    customBaseSal: BigNumber;
    customCarAllowAmt: BigNumber;
    customCarAllowanceMonths: string;
    customEeoPoster: string;
    customEligibleOther: string;
    customFinalSignOn: BigNumber;
    customInterviewComments1: string;
    customInterviewDateTime: string;
    customInterviewList: string;
    customLti: string;
    customOtherAllowanceDetails: string;
    customOtherCompDetails: string;
    customRelocAmount: BigNumber;
    customTargetBonusAmount: BigNumber;
    customVisaYes: string;
    dataSource: string;
    disclaimerAcknowledge: string;
    duplicateProfile: string;
    endDateContract: Moment;
    exportedOn: Moment;
    firstName: string;
    gender: string;
    hiredOn: Moment;
    homePhone: string;
    instrAccommodations: string;
    instrApplcation: string;
    instrContractInfo: string;
    instrDisability1: string;
    instrDisability2: string;
    instrDisclaimer: string;
    instrEeo1: string;
    instrEeo2: string;
    instrEeoFooter: string;
    instrEligWork: string;
    instrEmpInfo: string;
    instrGlobalEeo: string;
    instrInternalPolicy: string;
    instrInterview: string;
    instrRewardInfo: string;
    instrUkDisability: string;
    instrVets1: string;
    instrVets2: string;
    jobAppGuid: string;
    jobReqId: BigNumber;
    jobTitle: string;
    lastModifiedBy: string;
    lastModifiedByProxy: string;
    lastModifiedDateTime: Moment;
    lastName: string;
    middleName: string;
    nonApplicantStatus: string;
    owner: string;
    ownershpDate: Moment;
    profileUpdated: string;
    rating: string;
    reference: string;
    referenceComments: string;
    referredBy: string;
    resumeUploadDate: Moment;
    sectDisclaimer: string;
    snapShotDate: Moment;
    source: string;
    sourceLabel: string;
    startDate: Moment;
    status: string;
    statusComments: string;
    timeToHire: number;
    usersSysId: string;
    zip: string;
    bkgrndChkAttachment: AttachmentType[];
    candidate: CandidateType;
    countryPicklist: PicklistOptionType[];
    coverLetter: AttachmentType;
    custOnbPrefLang: PicklistOptionType[];
    custTravel: PicklistOptionType[];
    customAdditionalAttach: AttachmentType[];
    customAdjustments: PicklistOptionType[];
    customAgeGroup: PicklistOptionType[];
    customBasePayFreq: PicklistOptionType[];
    customCarAllowRequired: PicklistOptionType[];
    customEarlyTalent: PicklistOptionType[];
    customEligibleToWork: PicklistOptionType[];
    customInternalPolicy: PicklistOptionType[];
    customInterviewRound: PicklistOptionType[];
    customInterviewType1: PicklistOptionType[];
    customLegalAuth: PicklistOptionType[];
    customNationality: PicklistOptionType[];
    customNoticeDuringProbPeriod: PicklistOptionType[];
    customNoticePeriod: PicklistOptionType[];
    customProbPeriod: PicklistOptionType[];
    customSexualOrientation: PicklistOptionType[];
    customSourcePrimary: PicklistOptionType[];
    customSourceSecondary: PicklistOptionType[];
    customTypeHire: PicklistOptionType[];
    customUkEthnicity: PicklistOptionType[];
    customVirtualHire: PicklistOptionType[];
    customVisa: PicklistOptionType[];
    disabilityStatus: PicklistOptionType[];
    education: JobApplicationSnapshot_EducationType[];
    insideWorkExperience: JobApplicationSnapshot_InsideWorkExperienceType[];
    jobAppPermissionsNav: JobApplicationFieldControlsType;
    jobAppStatus: JobApplicationStatusType;
    jobApplicationAssessmentOrder: JobApplicationAssessmentOrderType[];
    jobApplicationAudit: JobApplicationAuditType[];
    jobApplicationComments: JobApplicationCommentsType[];
    jobApplicationInterview: JobApplicationInterviewType[];
    jobApplicationOnboardingData: JobApplicationOnboardingDataType[];
    jobApplicationQuestionResponse: JobApplicationQuestionResponseType[];
    jobApplicationStatusAuditTrail: JobApplicationStatusAuditTrailType[];
    jobOffer: JobOfferType[];
    jobRequisition: JobRequisitionType;
    languages: JobApplicationSnapshot_LanguagesType[];
    mobility: JobApplicationSnapshot_MobilityType[];
    offerLetter: OfferLetterType[];
    outsideWorkExperience: JobApplicationSnapshot_OutsideWorkExperienceType[];
    race: PicklistOptionType[];
    referredByNav: UserType;
    resume: AttachmentType;
    state: PicklistOptionType[];
    statusId: PicklistOptionType[];
    userNav: UserType;
    veteranStatus: PicklistOptionType[];
}
export declare namespace JobApplication {
    /**
     * Static representation of the [[address]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDRESS: StringField<JobApplication>;
    /**
     * Static representation of the [[agencyInfo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const AGENCY_INFO: StringField<JobApplication>;
    /**
     * Static representation of the [[anonymizedDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ANONYMIZED_DATE: DateField<JobApplication>;
    /**
     * Static representation of the [[anonymizedFlag]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ANONYMIZED_FLAG: StringField<JobApplication>;
    /**
     * Static representation of the [[appLocale]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const APP_LOCALE: StringField<JobApplication>;
    /**
     * Static representation of the [[appStatusSetItemId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const APP_STATUS_SET_ITEM_ID: BigNumberField<JobApplication>;
    /**
     * Static representation of the [[applicationDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const APPLICATION_DATE: DateField<JobApplication>;
    /**
     * Static representation of the [[applicationId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const APPLICATION_ID: BigNumberField<JobApplication>;
    /**
     * Static representation of the [[applicationTemplateId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const APPLICATION_TEMPLATE_ID: BigNumberField<JobApplication>;
    /**
     * Static representation of the [[averageRating]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const AVERAGE_RATING: BigNumberField<JobApplication>;
    /**
     * Static representation of the [[bkgrndChkStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BKGRND_CHK_STATUS: StringField<JobApplication>;
    /**
     * Static representation of the [[businessPhone]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PHONE: StringField<JobApplication>;
    /**
     * Static representation of the [[candConversionProcessed]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CAND_CONVERSION_PROCESSED: StringField<JobApplication>;
    /**
     * Static representation of the [[candTypeWhenHired]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CAND_TYPE_WHEN_HIRED: StringField<JobApplication>;
    /**
     * Static representation of the [[candidateId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CANDIDATE_ID: BigNumberField<JobApplication>;
    /**
     * Static representation of the [[cellPhone]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CELL_PHONE: StringField<JobApplication>;
    /**
     * Static representation of the [[city]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CITY: StringField<JobApplication>;
    /**
     * Static representation of the [[contactEmail]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CONTACT_EMAIL: StringField<JobApplication>;
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COUNTRY: StringField<JobApplication>;
    /**
     * Static representation of the [[countryCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COUNTRY_CODE: StringField<JobApplication>;
    /**
     * Static representation of the [[currentCompany]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CURRENT_COMPANY: StringField<JobApplication>;
    /**
     * Static representation of the [[currentTitle]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CURRENT_TITLE: StringField<JobApplication>;
    /**
     * Static representation of the [[custSalaryDesired]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUST_SALARY_DESIRED: StringField<JobApplication>;
    /**
     * Static representation of the [[customAdjustmentsOther]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOM_ADJUSTMENTS_OTHER: StringField<JobApplication>;
    /**
     * Static representation of the [[customBaseSal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOM_BASE_SAL: BigNumberField<JobApplication>;
    /**
     * Static representation of the [[customCarAllowAmt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOM_CAR_ALLOW_AMT: BigNumberField<JobApplication>;
    /**
     * Static representation of the [[customCarAllowanceMonths]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOM_CAR_ALLOWANCE_MONTHS: StringField<JobApplication>;
    /**
     * Static representation of the [[customEeoPoster]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOM_EEO_POSTER: StringField<JobApplication>;
    /**
     * Static representation of the [[customEligibleOther]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOM_ELIGIBLE_OTHER: StringField<JobApplication>;
    /**
     * Static representation of the [[customFinalSignOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOM_FINAL_SIGN_ON: BigNumberField<JobApplication>;
    /**
     * Static representation of the [[customInterviewComments1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOM_INTERVIEW_COMMENTS_1: StringField<JobApplication>;
    /**
     * Static representation of the [[customInterviewDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOM_INTERVIEW_DATE_TIME: StringField<JobApplication>;
    /**
     * Static representation of the [[customInterviewList]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOM_INTERVIEW_LIST: StringField<JobApplication>;
    /**
     * Static representation of the [[customLti]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOM_LTI: StringField<JobApplication>;
    /**
     * Static representation of the [[customOtherAllowanceDetails]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOM_OTHER_ALLOWANCE_DETAILS: StringField<JobApplication>;
    /**
     * Static representation of the [[customOtherCompDetails]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOM_OTHER_COMP_DETAILS: StringField<JobApplication>;
    /**
     * Static representation of the [[customRelocAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOM_RELOC_AMOUNT: BigNumberField<JobApplication>;
    /**
     * Static representation of the [[customTargetBonusAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOM_TARGET_BONUS_AMOUNT: BigNumberField<JobApplication>;
    /**
     * Static representation of the [[customVisaYes]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOM_VISA_YES: StringField<JobApplication>;
    /**
     * Static representation of the [[dataSource]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DATA_SOURCE: StringField<JobApplication>;
    /**
     * Static representation of the [[disclaimerAcknowledge]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DISCLAIMER_ACKNOWLEDGE: StringField<JobApplication>;
    /**
     * Static representation of the [[duplicateProfile]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DUPLICATE_PROFILE: StringField<JobApplication>;
    /**
     * Static representation of the [[endDateContract]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const END_DATE_CONTRACT: DateField<JobApplication>;
    /**
     * Static representation of the [[exportedOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXPORTED_ON: DateField<JobApplication>;
    /**
     * Static representation of the [[firstName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FIRST_NAME: StringField<JobApplication>;
    /**
     * Static representation of the [[gender]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GENDER: StringField<JobApplication>;
    /**
     * Static representation of the [[hiredOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HIRED_ON: DateField<JobApplication>;
    /**
     * Static representation of the [[homePhone]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HOME_PHONE: StringField<JobApplication>;
    /**
     * Static representation of the [[instrAccommodations]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INSTR_ACCOMMODATIONS: StringField<JobApplication>;
    /**
     * Static representation of the [[instrApplcation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INSTR_APPLCATION: StringField<JobApplication>;
    /**
     * Static representation of the [[instrContractInfo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INSTR_CONTRACT_INFO: StringField<JobApplication>;
    /**
     * Static representation of the [[instrDisability1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INSTR_DISABILITY_1: StringField<JobApplication>;
    /**
     * Static representation of the [[instrDisability2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INSTR_DISABILITY_2: StringField<JobApplication>;
    /**
     * Static representation of the [[instrDisclaimer]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INSTR_DISCLAIMER: StringField<JobApplication>;
    /**
     * Static representation of the [[instrEeo1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INSTR_EEO_1: StringField<JobApplication>;
    /**
     * Static representation of the [[instrEeo2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INSTR_EEO_2: StringField<JobApplication>;
    /**
     * Static representation of the [[instrEeoFooter]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INSTR_EEO_FOOTER: StringField<JobApplication>;
    /**
     * Static representation of the [[instrEligWork]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INSTR_ELIG_WORK: StringField<JobApplication>;
    /**
     * Static representation of the [[instrEmpInfo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INSTR_EMP_INFO: StringField<JobApplication>;
    /**
     * Static representation of the [[instrGlobalEeo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INSTR_GLOBAL_EEO: StringField<JobApplication>;
    /**
     * Static representation of the [[instrInternalPolicy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INSTR_INTERNAL_POLICY: StringField<JobApplication>;
    /**
     * Static representation of the [[instrInterview]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INSTR_INTERVIEW: StringField<JobApplication>;
    /**
     * Static representation of the [[instrRewardInfo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INSTR_REWARD_INFO: StringField<JobApplication>;
    /**
     * Static representation of the [[instrUkDisability]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INSTR_UK_DISABILITY: StringField<JobApplication>;
    /**
     * Static representation of the [[instrVets1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INSTR_VETS_1: StringField<JobApplication>;
    /**
     * Static representation of the [[instrVets2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INSTR_VETS_2: StringField<JobApplication>;
    /**
     * Static representation of the [[jobAppGuid]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_APP_GUID: StringField<JobApplication>;
    /**
     * Static representation of the [[jobReqId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_REQ_ID: BigNumberField<JobApplication>;
    /**
     * Static representation of the [[jobTitle]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_TITLE: StringField<JobApplication>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<JobApplication>;
    /**
     * Static representation of the [[lastModifiedByProxy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY_PROXY: StringField<JobApplication>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<JobApplication>;
    /**
     * Static representation of the [[lastName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_NAME: StringField<JobApplication>;
    /**
     * Static representation of the [[middleName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MIDDLE_NAME: StringField<JobApplication>;
    /**
     * Static representation of the [[nonApplicantStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NON_APPLICANT_STATUS: StringField<JobApplication>;
    /**
     * Static representation of the [[owner]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OWNER: StringField<JobApplication>;
    /**
     * Static representation of the [[ownershpDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OWNERSHP_DATE: DateField<JobApplication>;
    /**
     * Static representation of the [[profileUpdated]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROFILE_UPDATED: StringField<JobApplication>;
    /**
     * Static representation of the [[rating]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RATING: StringField<JobApplication>;
    /**
     * Static representation of the [[reference]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REFERENCE: StringField<JobApplication>;
    /**
     * Static representation of the [[referenceComments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REFERENCE_COMMENTS: StringField<JobApplication>;
    /**
     * Static representation of the [[referredBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REFERRED_BY: StringField<JobApplication>;
    /**
     * Static representation of the [[resumeUploadDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RESUME_UPLOAD_DATE: DateField<JobApplication>;
    /**
     * Static representation of the [[sectDisclaimer]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SECT_DISCLAIMER: StringField<JobApplication>;
    /**
     * Static representation of the [[snapShotDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SNAP_SHOT_DATE: DateField<JobApplication>;
    /**
     * Static representation of the [[source]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SOURCE: StringField<JobApplication>;
    /**
     * Static representation of the [[sourceLabel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SOURCE_LABEL: StringField<JobApplication>;
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const START_DATE: DateField<JobApplication>;
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS: StringField<JobApplication>;
    /**
     * Static representation of the [[statusComments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS_COMMENTS: StringField<JobApplication>;
    /**
     * Static representation of the [[timeToHire]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TIME_TO_HIRE: NumberField<JobApplication>;
    /**
     * Static representation of the [[usersSysId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USERS_SYS_ID: StringField<JobApplication>;
    /**
     * Static representation of the [[zip]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ZIP: StringField<JobApplication>;
    /**
     * Static representation of the one-to-many navigation property [[bkgrndChkAttachment]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BKGRND_CHK_ATTACHMENT: Link<JobApplication, Attachment>;
    /**
     * Static representation of the one-to-one navigation property [[candidate]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CANDIDATE: OneToOneLink<JobApplication, Candidate>;
    /**
     * Static representation of the one-to-many navigation property [[countryPicklist]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COUNTRY_PICKLIST: Link<JobApplication, PicklistOption>;
    /**
     * Static representation of the one-to-one navigation property [[coverLetter]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COVER_LETTER: OneToOneLink<JobApplication, Attachment>;
    /**
     * Static representation of the one-to-many navigation property [[custOnbPrefLang]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUST_ONB_PREF_LANG: Link<JobApplication, PicklistOption>;
    /**
     * Static representation of the one-to-many navigation property [[custTravel]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUST_TRAVEL: Link<JobApplication, PicklistOption>;
    /**
     * Static representation of the one-to-many navigation property [[customAdditionalAttach]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOM_ADDITIONAL_ATTACH: Link<JobApplication, Attachment>;
    /**
     * Static representation of the one-to-many navigation property [[customAdjustments]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOM_ADJUSTMENTS: Link<JobApplication, PicklistOption>;
    /**
     * Static representation of the one-to-many navigation property [[customAgeGroup]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOM_AGE_GROUP: Link<JobApplication, PicklistOption>;
    /**
     * Static representation of the one-to-many navigation property [[customBasePayFreq]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOM_BASE_PAY_FREQ: Link<JobApplication, PicklistOption>;
    /**
     * Static representation of the one-to-many navigation property [[customCarAllowRequired]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOM_CAR_ALLOW_REQUIRED: Link<JobApplication, PicklistOption>;
    /**
     * Static representation of the one-to-many navigation property [[customEarlyTalent]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOM_EARLY_TALENT: Link<JobApplication, PicklistOption>;
    /**
     * Static representation of the one-to-many navigation property [[customEligibleToWork]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOM_ELIGIBLE_TO_WORK: Link<JobApplication, PicklistOption>;
    /**
     * Static representation of the one-to-many navigation property [[customInternalPolicy]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOM_INTERNAL_POLICY: Link<JobApplication, PicklistOption>;
    /**
     * Static representation of the one-to-many navigation property [[customInterviewRound]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOM_INTERVIEW_ROUND: Link<JobApplication, PicklistOption>;
    /**
     * Static representation of the one-to-many navigation property [[customInterviewType1]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOM_INTERVIEW_TYPE_1: Link<JobApplication, PicklistOption>;
    /**
     * Static representation of the one-to-many navigation property [[customLegalAuth]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOM_LEGAL_AUTH: Link<JobApplication, PicklistOption>;
    /**
     * Static representation of the one-to-many navigation property [[customNationality]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOM_NATIONALITY: Link<JobApplication, PicklistOption>;
    /**
     * Static representation of the one-to-many navigation property [[customNoticeDuringProbPeriod]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOM_NOTICE_DURING_PROB_PERIOD: Link<JobApplication, PicklistOption>;
    /**
     * Static representation of the one-to-many navigation property [[customNoticePeriod]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOM_NOTICE_PERIOD: Link<JobApplication, PicklistOption>;
    /**
     * Static representation of the one-to-many navigation property [[customProbPeriod]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOM_PROB_PERIOD: Link<JobApplication, PicklistOption>;
    /**
     * Static representation of the one-to-many navigation property [[customSexualOrientation]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOM_SEXUAL_ORIENTATION: Link<JobApplication, PicklistOption>;
    /**
     * Static representation of the one-to-many navigation property [[customSourcePrimary]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOM_SOURCE_PRIMARY: Link<JobApplication, PicklistOption>;
    /**
     * Static representation of the one-to-many navigation property [[customSourceSecondary]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOM_SOURCE_SECONDARY: Link<JobApplication, PicklistOption>;
    /**
     * Static representation of the one-to-many navigation property [[customTypeHire]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOM_TYPE_HIRE: Link<JobApplication, PicklistOption>;
    /**
     * Static representation of the one-to-many navigation property [[customUkEthnicity]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOM_UK_ETHNICITY: Link<JobApplication, PicklistOption>;
    /**
     * Static representation of the one-to-many navigation property [[customVirtualHire]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOM_VIRTUAL_HIRE: Link<JobApplication, PicklistOption>;
    /**
     * Static representation of the one-to-many navigation property [[customVisa]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOM_VISA: Link<JobApplication, PicklistOption>;
    /**
     * Static representation of the one-to-many navigation property [[disabilityStatus]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DISABILITY_STATUS: Link<JobApplication, PicklistOption>;
    /**
     * Static representation of the one-to-many navigation property [[education]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EDUCATION: Link<JobApplication, JobApplicationSnapshot_Education>;
    /**
     * Static representation of the one-to-many navigation property [[insideWorkExperience]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INSIDE_WORK_EXPERIENCE: Link<JobApplication, JobApplicationSnapshot_InsideWorkExperience>;
    /**
     * Static representation of the one-to-one navigation property [[jobAppPermissionsNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_APP_PERMISSIONS_NAV: OneToOneLink<JobApplication, JobApplicationFieldControls>;
    /**
     * Static representation of the one-to-one navigation property [[jobAppStatus]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_APP_STATUS: OneToOneLink<JobApplication, JobApplicationStatus>;
    /**
     * Static representation of the one-to-many navigation property [[jobApplicationAssessmentOrder]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_APPLICATION_ASSESSMENT_ORDER: Link<JobApplication, JobApplicationAssessmentOrder>;
    /**
     * Static representation of the one-to-many navigation property [[jobApplicationAudit]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_APPLICATION_AUDIT: Link<JobApplication, JobApplicationAudit>;
    /**
     * Static representation of the one-to-many navigation property [[jobApplicationComments]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_APPLICATION_COMMENTS: Link<JobApplication, JobApplicationComments>;
    /**
     * Static representation of the one-to-many navigation property [[jobApplicationInterview]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_APPLICATION_INTERVIEW: Link<JobApplication, JobApplicationInterview>;
    /**
     * Static representation of the one-to-many navigation property [[jobApplicationOnboardingData]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_APPLICATION_ONBOARDING_DATA: Link<JobApplication, JobApplicationOnboardingData>;
    /**
     * Static representation of the one-to-many navigation property [[jobApplicationQuestionResponse]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_APPLICATION_QUESTION_RESPONSE: Link<JobApplication, JobApplicationQuestionResponse>;
    /**
     * Static representation of the one-to-many navigation property [[jobApplicationStatusAuditTrail]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_APPLICATION_STATUS_AUDIT_TRAIL: Link<JobApplication, JobApplicationStatusAuditTrail>;
    /**
     * Static representation of the one-to-many navigation property [[jobOffer]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_OFFER: Link<JobApplication, JobOffer>;
    /**
     * Static representation of the one-to-one navigation property [[jobRequisition]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_REQUISITION: OneToOneLink<JobApplication, JobRequisition>;
    /**
     * Static representation of the one-to-many navigation property [[languages]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LANGUAGES: Link<JobApplication, JobApplicationSnapshot_Languages>;
    /**
     * Static representation of the one-to-many navigation property [[mobility]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MOBILITY: Link<JobApplication, JobApplicationSnapshot_Mobility>;
    /**
     * Static representation of the one-to-many navigation property [[offerLetter]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OFFER_LETTER: Link<JobApplication, OfferLetter>;
    /**
     * Static representation of the one-to-many navigation property [[outsideWorkExperience]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OUTSIDE_WORK_EXPERIENCE: Link<JobApplication, JobApplicationSnapshot_OutsideWorkExperience>;
    /**
     * Static representation of the one-to-many navigation property [[race]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RACE: Link<JobApplication, PicklistOption>;
    /**
     * Static representation of the one-to-one navigation property [[referredByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REFERRED_BY_NAV: OneToOneLink<JobApplication, User>;
    /**
     * Static representation of the one-to-one navigation property [[resume]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RESUME: OneToOneLink<JobApplication, Attachment>;
    /**
     * Static representation of the one-to-many navigation property [[state]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATE: Link<JobApplication, PicklistOption>;
    /**
     * Static representation of the one-to-many navigation property [[statusId]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS_ID: Link<JobApplication, PicklistOption>;
    /**
     * Static representation of the one-to-one navigation property [[userNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_NAV: OneToOneLink<JobApplication, User>;
    /**
     * Static representation of the one-to-many navigation property [[veteranStatus]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VETERAN_STATUS: Link<JobApplication, PicklistOption>;
    /**
     * All fields of the JobApplication entity.
     */
    const _allFields: Array<StringField<JobApplication> | DateField<JobApplication> | BigNumberField<JobApplication> | NumberField<JobApplication> | Link<JobApplication, Attachment> | OneToOneLink<JobApplication, Candidate> | Link<JobApplication, PicklistOption> | OneToOneLink<JobApplication, Attachment> | Link<JobApplication, JobApplicationSnapshot_Education> | Link<JobApplication, JobApplicationSnapshot_InsideWorkExperience> | OneToOneLink<JobApplication, JobApplicationFieldControls> | OneToOneLink<JobApplication, JobApplicationStatus> | Link<JobApplication, JobApplicationAssessmentOrder> | Link<JobApplication, JobApplicationAudit> | Link<JobApplication, JobApplicationComments> | Link<JobApplication, JobApplicationInterview> | Link<JobApplication, JobApplicationOnboardingData> | Link<JobApplication, JobApplicationQuestionResponse> | Link<JobApplication, JobApplicationStatusAuditTrail> | Link<JobApplication, JobOffer> | OneToOneLink<JobApplication, JobRequisition> | Link<JobApplication, JobApplicationSnapshot_Languages> | Link<JobApplication, JobApplicationSnapshot_Mobility> | Link<JobApplication, OfferLetter> | Link<JobApplication, JobApplicationSnapshot_OutsideWorkExperience> | OneToOneLink<JobApplication, User>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<JobApplication>;
    /**
     * All key fields of the JobApplication entity.
     */
    const _keyFields: Array<Selectable<JobApplication>>;
    /**
     * Mapping of all key field names to the respective static field property JobApplication.
     */
    const _keys: {
        [keys: string]: Selectable<JobApplication>;
    };
}
//# sourceMappingURL=JobApplication.d.ts.map