/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { JobAppTemplate_Candidate_Detail_GlobalRequestBuilder } from './JobAppTemplate_Candidate_Detail_GlobalRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "JobAppTemplate_Candidate_Detail_Global" of service "SFOData".
 */
export class JobAppTemplate_Candidate_Detail_Global extends Entity implements JobAppTemplate_Candidate_Detail_GlobalType {
  /**
   * Technical entity name for JobAppTemplate_Candidate_Detail_Global.
   */
  static _entityName = 'JobAppTemplate_Candidate_Detail_Global';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for JobAppTemplate_Candidate_Detail_Global.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Address Line 1.
   */
  address!: string;
  /**
   * Application Date.
   * @nullable
   */
  applicationDate?: Moment;
  /**
   * Average Rating.
   * @nullable
   */
  averageRating?: BigNumber;
  /**
   * Background Status.
   * @nullable
   */
  bkgrndChkStatus?: string;
  /**
   * Candidate Full Name.
   * @nullable
   */
  candidateName?: string;
  /**
   * Mobile Phone.
   */
  cellPhone!: string;
  /**
   * City.
   */
  city!: string;
  /**
   * Comments.
   * @nullable
   */
  comments?: string;
  /**
   * Email.
   */
  contactEmail!: string;
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
   */
  custSalaryDesired!: string;
  /**
   * If yes please let us know what you need.
   * @nullable
   */
  customAdjustmentsOther?: string;
  /**
   * Offered Base Salary.
   */
  customBaseSal!: BigNumber;
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
   * Typed Signature.
   */
  disclaimerAcknowledge!: string;
  /**
   * End Date.
   * @nullable
   */
  endDateContract?: Moment;
  /**
   * First Name.
   */
  firstName!: string;
  /**
   * Home Phone.
   * @nullable
   */
  homePhone?: string;
  /**
   * Application ID.
   * @nullable
   */
  id?: string;
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
   * Interview Result.
   * @nullable
   */
  interviewResult?: string;
  /**
   * Req Job Title.
   * @nullable
   */
  jobTitle?: string;
  /**
   * Last Modified.
   * @nullable
   */
  lastModified?: Moment;
  /**
   * Last Name.
   */
  lastName!: string;
  /**
   * Middle Name.
   * @nullable
   */
  middleName?: string;
  /**
   * Overdue Interviews.
   * @nullable
   */
  overdueInterviews?: string;
  /**
   * Questions.
   */
  questionResponse!: string;
  /**
   * STATEMENT OF AGREEMENT.
   * @nullable
   */
  sectDisclaimer?: string;
  /**
   * Source.
   * @nullable
   */
  source?: string;
  /**
   * Start Date.
   */
  startDate!: Moment;
  /**
   * Template Id.
   */
  templateId!: BigNumber;
  /**
   * Postal Code.
   */
  zip!: string;
  /**
   * One-to-many navigation property to the [[Attachment]] entity.
   */
  bkgrndChkAttachment!: Attachment[];
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  country!: PicklistOption;
  /**
   * One-to-one navigation property to the [[Attachment]] entity.
   */
  coverLetter!: Attachment;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  custOnbPrefLang!: PicklistOption;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  custTravel!: PicklistOption;
  /**
   * One-to-many navigation property to the [[Attachment]] entity.
   */
  customAdditionalAttach!: Attachment[];
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  customAdjustments!: PicklistOption;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  customAgeGroup!: PicklistOption;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  customBasePayFreq!: PicklistOption;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  customCarAllowRequired!: PicklistOption;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  customEarlyTalent!: PicklistOption;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  customEligibleToWork!: PicklistOption;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  customInternalPolicy!: PicklistOption;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  customInterviewRound!: PicklistOption;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  customInterviewType1!: PicklistOption;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  customLegalAuth!: PicklistOption;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  customNationality!: PicklistOption;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  customNoticeDuringProbPeriod!: PicklistOption;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  customNoticePeriod!: PicklistOption;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  customProbPeriod!: PicklistOption;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  customSexualOrientation!: PicklistOption;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  customSourcePrimary!: PicklistOption;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  customSourceSecondary!: PicklistOption;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  customTypeHire!: PicklistOption;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  customUkEthnicity!: PicklistOption;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  customVirtualHire!: PicklistOption;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  customVisa!: PicklistOption;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  disabilityStatus!: PicklistOption;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  gender!: PicklistOption;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  race!: PicklistOption;
  /**
   * One-to-one navigation property to the [[Attachment]] entity.
   */
  resume!: Attachment;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  state!: PicklistOption;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  statusId!: PicklistOption;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  veteranStatus!: PicklistOption;

  /**
   * Returns an entity builder to construct instances `JobAppTemplate_Candidate_Detail_Global`.
   * @returns A builder that constructs instances of entity type `JobAppTemplate_Candidate_Detail_Global`.
   */
  static builder(): EntityBuilderType<JobAppTemplate_Candidate_Detail_Global, JobAppTemplate_Candidate_Detail_GlobalTypeForceMandatory> {
    return Entity.entityBuilder(JobAppTemplate_Candidate_Detail_Global);
  }

  /**
   * Returns a request builder to construct requests for operations on the `JobAppTemplate_Candidate_Detail_Global` entity type.
   * @returns A `JobAppTemplate_Candidate_Detail_Global` request builder.
   */
  static requestBuilder(): JobAppTemplate_Candidate_Detail_GlobalRequestBuilder {
    return new JobAppTemplate_Candidate_Detail_GlobalRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobAppTemplate_Candidate_Detail_Global`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `JobAppTemplate_Candidate_Detail_Global`.
   */
  static customField(fieldName: string): CustomField<JobAppTemplate_Candidate_Detail_Global> {
    return Entity.customFieldSelector(fieldName, JobAppTemplate_Candidate_Detail_Global);
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
import { PicklistOption, PicklistOptionType } from './PicklistOption';

export interface JobAppTemplate_Candidate_Detail_GlobalType {
  address: string;
  applicationDate?: Moment;
  averageRating?: BigNumber;
  bkgrndChkStatus?: string;
  candidateName?: string;
  cellPhone: string;
  city: string;
  comments?: string;
  contactEmail: string;
  currentCompany?: string;
  currentTitle?: string;
  custSalaryDesired: string;
  customAdjustmentsOther?: string;
  customBaseSal: BigNumber;
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
  disclaimerAcknowledge: string;
  endDateContract?: Moment;
  firstName: string;
  homePhone?: string;
  id?: string;
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
  interviewResult?: string;
  jobTitle?: string;
  lastModified?: Moment;
  lastName: string;
  middleName?: string;
  overdueInterviews?: string;
  questionResponse: string;
  sectDisclaimer?: string;
  source?: string;
  startDate: Moment;
  templateId: BigNumber;
  zip: string;
  bkgrndChkAttachment: AttachmentType[];
  country: PicklistOptionType;
  coverLetter: AttachmentType;
  custOnbPrefLang: PicklistOptionType;
  custTravel: PicklistOptionType;
  customAdditionalAttach: AttachmentType[];
  customAdjustments: PicklistOptionType;
  customAgeGroup: PicklistOptionType;
  customBasePayFreq: PicklistOptionType;
  customCarAllowRequired: PicklistOptionType;
  customEarlyTalent: PicklistOptionType;
  customEligibleToWork: PicklistOptionType;
  customInternalPolicy: PicklistOptionType;
  customInterviewRound: PicklistOptionType;
  customInterviewType1: PicklistOptionType;
  customLegalAuth: PicklistOptionType;
  customNationality: PicklistOptionType;
  customNoticeDuringProbPeriod: PicklistOptionType;
  customNoticePeriod: PicklistOptionType;
  customProbPeriod: PicklistOptionType;
  customSexualOrientation: PicklistOptionType;
  customSourcePrimary: PicklistOptionType;
  customSourceSecondary: PicklistOptionType;
  customTypeHire: PicklistOptionType;
  customUkEthnicity: PicklistOptionType;
  customVirtualHire: PicklistOptionType;
  customVisa: PicklistOptionType;
  disabilityStatus: PicklistOptionType;
  gender: PicklistOptionType;
  race: PicklistOptionType;
  resume: AttachmentType;
  state: PicklistOptionType;
  statusId: PicklistOptionType;
  veteranStatus: PicklistOptionType;
}

export interface JobAppTemplate_Candidate_Detail_GlobalTypeForceMandatory {
  address: string;
  applicationDate: Moment;
  averageRating: BigNumber;
  bkgrndChkStatus: string;
  candidateName: string;
  cellPhone: string;
  city: string;
  comments: string;
  contactEmail: string;
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
  disclaimerAcknowledge: string;
  endDateContract: Moment;
  firstName: string;
  homePhone: string;
  id: string;
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
  interviewResult: string;
  jobTitle: string;
  lastModified: Moment;
  lastName: string;
  middleName: string;
  overdueInterviews: string;
  questionResponse: string;
  sectDisclaimer: string;
  source: string;
  startDate: Moment;
  templateId: BigNumber;
  zip: string;
  bkgrndChkAttachment: AttachmentType[];
  country: PicklistOptionType;
  coverLetter: AttachmentType;
  custOnbPrefLang: PicklistOptionType;
  custTravel: PicklistOptionType;
  customAdditionalAttach: AttachmentType[];
  customAdjustments: PicklistOptionType;
  customAgeGroup: PicklistOptionType;
  customBasePayFreq: PicklistOptionType;
  customCarAllowRequired: PicklistOptionType;
  customEarlyTalent: PicklistOptionType;
  customEligibleToWork: PicklistOptionType;
  customInternalPolicy: PicklistOptionType;
  customInterviewRound: PicklistOptionType;
  customInterviewType1: PicklistOptionType;
  customLegalAuth: PicklistOptionType;
  customNationality: PicklistOptionType;
  customNoticeDuringProbPeriod: PicklistOptionType;
  customNoticePeriod: PicklistOptionType;
  customProbPeriod: PicklistOptionType;
  customSexualOrientation: PicklistOptionType;
  customSourcePrimary: PicklistOptionType;
  customSourceSecondary: PicklistOptionType;
  customTypeHire: PicklistOptionType;
  customUkEthnicity: PicklistOptionType;
  customVirtualHire: PicklistOptionType;
  customVisa: PicklistOptionType;
  disabilityStatus: PicklistOptionType;
  gender: PicklistOptionType;
  race: PicklistOptionType;
  resume: AttachmentType;
  state: PicklistOptionType;
  statusId: PicklistOptionType;
  veteranStatus: PicklistOptionType;
}

export namespace JobAppTemplate_Candidate_Detail_Global {
  /**
   * Static representation of the [[address]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS: StringField<JobAppTemplate_Candidate_Detail_Global> = new StringField('address', JobAppTemplate_Candidate_Detail_Global, 'Edm.String');
  /**
   * Static representation of the [[applicationDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const APPLICATION_DATE: DateField<JobAppTemplate_Candidate_Detail_Global> = new DateField('applicationDate', JobAppTemplate_Candidate_Detail_Global, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[averageRating]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const AVERAGE_RATING: BigNumberField<JobAppTemplate_Candidate_Detail_Global> = new BigNumberField('averageRating', JobAppTemplate_Candidate_Detail_Global, 'Edm.Decimal');
  /**
   * Static representation of the [[bkgrndChkStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BKGRND_CHK_STATUS: StringField<JobAppTemplate_Candidate_Detail_Global> = new StringField('bkgrndChkStatus', JobAppTemplate_Candidate_Detail_Global, 'Edm.String');
  /**
   * Static representation of the [[candidateName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CANDIDATE_NAME: StringField<JobAppTemplate_Candidate_Detail_Global> = new StringField('candidateName', JobAppTemplate_Candidate_Detail_Global, 'Edm.String');
  /**
   * Static representation of the [[cellPhone]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CELL_PHONE: StringField<JobAppTemplate_Candidate_Detail_Global> = new StringField('cellPhone', JobAppTemplate_Candidate_Detail_Global, 'Edm.String');
  /**
   * Static representation of the [[city]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CITY: StringField<JobAppTemplate_Candidate_Detail_Global> = new StringField('city', JobAppTemplate_Candidate_Detail_Global, 'Edm.String');
  /**
   * Static representation of the [[comments]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMMENTS: StringField<JobAppTemplate_Candidate_Detail_Global> = new StringField('comments', JobAppTemplate_Candidate_Detail_Global, 'Edm.String');
  /**
   * Static representation of the [[contactEmail]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONTACT_EMAIL: StringField<JobAppTemplate_Candidate_Detail_Global> = new StringField('contactEmail', JobAppTemplate_Candidate_Detail_Global, 'Edm.String');
  /**
   * Static representation of the [[currentCompany]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CURRENT_COMPANY: StringField<JobAppTemplate_Candidate_Detail_Global> = new StringField('currentCompany', JobAppTemplate_Candidate_Detail_Global, 'Edm.String');
  /**
   * Static representation of the [[currentTitle]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CURRENT_TITLE: StringField<JobAppTemplate_Candidate_Detail_Global> = new StringField('currentTitle', JobAppTemplate_Candidate_Detail_Global, 'Edm.String');
  /**
   * Static representation of the [[custSalaryDesired]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUST_SALARY_DESIRED: StringField<JobAppTemplate_Candidate_Detail_Global> = new StringField('custSalaryDesired', JobAppTemplate_Candidate_Detail_Global, 'Edm.String');
  /**
   * Static representation of the [[customAdjustmentsOther]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOM_ADJUSTMENTS_OTHER: StringField<JobAppTemplate_Candidate_Detail_Global> = new StringField('customAdjustmentsOther', JobAppTemplate_Candidate_Detail_Global, 'Edm.String');
  /**
   * Static representation of the [[customBaseSal]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOM_BASE_SAL: BigNumberField<JobAppTemplate_Candidate_Detail_Global> = new BigNumberField('customBaseSal', JobAppTemplate_Candidate_Detail_Global, 'Edm.Decimal');
  /**
   * Static representation of the [[customCarAllowAmt]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOM_CAR_ALLOW_AMT: BigNumberField<JobAppTemplate_Candidate_Detail_Global> = new BigNumberField('customCarAllowAmt', JobAppTemplate_Candidate_Detail_Global, 'Edm.Decimal');
  /**
   * Static representation of the [[customCarAllowanceMonths]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOM_CAR_ALLOWANCE_MONTHS: StringField<JobAppTemplate_Candidate_Detail_Global> = new StringField('customCarAllowanceMonths', JobAppTemplate_Candidate_Detail_Global, 'Edm.String');
  /**
   * Static representation of the [[customEeoPoster]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOM_EEO_POSTER: StringField<JobAppTemplate_Candidate_Detail_Global> = new StringField('customEEOPoster', JobAppTemplate_Candidate_Detail_Global, 'Edm.String');
  /**
   * Static representation of the [[customEligibleOther]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOM_ELIGIBLE_OTHER: StringField<JobAppTemplate_Candidate_Detail_Global> = new StringField('customEligibleOther', JobAppTemplate_Candidate_Detail_Global, 'Edm.String');
  /**
   * Static representation of the [[customFinalSignOn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOM_FINAL_SIGN_ON: BigNumberField<JobAppTemplate_Candidate_Detail_Global> = new BigNumberField('customFinalSignOn', JobAppTemplate_Candidate_Detail_Global, 'Edm.Decimal');
  /**
   * Static representation of the [[customInterviewComments1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOM_INTERVIEW_COMMENTS_1: StringField<JobAppTemplate_Candidate_Detail_Global> = new StringField('customInterviewComments1', JobAppTemplate_Candidate_Detail_Global, 'Edm.String');
  /**
   * Static representation of the [[customInterviewDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOM_INTERVIEW_DATE_TIME: StringField<JobAppTemplate_Candidate_Detail_Global> = new StringField('customInterviewDateTime', JobAppTemplate_Candidate_Detail_Global, 'Edm.String');
  /**
   * Static representation of the [[customInterviewList]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOM_INTERVIEW_LIST: StringField<JobAppTemplate_Candidate_Detail_Global> = new StringField('customInterviewList', JobAppTemplate_Candidate_Detail_Global, 'Edm.String');
  /**
   * Static representation of the [[customLti]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOM_LTI: StringField<JobAppTemplate_Candidate_Detail_Global> = new StringField('customLTI', JobAppTemplate_Candidate_Detail_Global, 'Edm.String');
  /**
   * Static representation of the [[customOtherAllowanceDetails]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOM_OTHER_ALLOWANCE_DETAILS: StringField<JobAppTemplate_Candidate_Detail_Global> = new StringField('customOtherAllowanceDetails', JobAppTemplate_Candidate_Detail_Global, 'Edm.String');
  /**
   * Static representation of the [[customOtherCompDetails]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOM_OTHER_COMP_DETAILS: StringField<JobAppTemplate_Candidate_Detail_Global> = new StringField('customOtherCompDetails', JobAppTemplate_Candidate_Detail_Global, 'Edm.String');
  /**
   * Static representation of the [[customRelocAmount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOM_RELOC_AMOUNT: BigNumberField<JobAppTemplate_Candidate_Detail_Global> = new BigNumberField('customRelocAmount', JobAppTemplate_Candidate_Detail_Global, 'Edm.Decimal');
  /**
   * Static representation of the [[customTargetBonusAmount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOM_TARGET_BONUS_AMOUNT: BigNumberField<JobAppTemplate_Candidate_Detail_Global> = new BigNumberField('customTargetBonusAmount', JobAppTemplate_Candidate_Detail_Global, 'Edm.Decimal');
  /**
   * Static representation of the [[customVisaYes]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOM_VISA_YES: StringField<JobAppTemplate_Candidate_Detail_Global> = new StringField('customVisaYes', JobAppTemplate_Candidate_Detail_Global, 'Edm.String');
  /**
   * Static representation of the [[disclaimerAcknowledge]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DISCLAIMER_ACKNOWLEDGE: StringField<JobAppTemplate_Candidate_Detail_Global> = new StringField('disclaimerAcknowledge', JobAppTemplate_Candidate_Detail_Global, 'Edm.String');
  /**
   * Static representation of the [[endDateContract]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const END_DATE_CONTRACT: DateField<JobAppTemplate_Candidate_Detail_Global> = new DateField('endDateContract', JobAppTemplate_Candidate_Detail_Global, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[firstName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FIRST_NAME: StringField<JobAppTemplate_Candidate_Detail_Global> = new StringField('firstName', JobAppTemplate_Candidate_Detail_Global, 'Edm.String');
  /**
   * Static representation of the [[homePhone]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HOME_PHONE: StringField<JobAppTemplate_Candidate_Detail_Global> = new StringField('homePhone', JobAppTemplate_Candidate_Detail_Global, 'Edm.String');
  /**
   * Static representation of the [[id]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ID: StringField<JobAppTemplate_Candidate_Detail_Global> = new StringField('id', JobAppTemplate_Candidate_Detail_Global, 'Edm.String');
  /**
   * Static representation of the [[instrAccommodations]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INSTR_ACCOMMODATIONS: StringField<JobAppTemplate_Candidate_Detail_Global> = new StringField('instrAccommodations', JobAppTemplate_Candidate_Detail_Global, 'Edm.String');
  /**
   * Static representation of the [[instrApplcation]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INSTR_APPLCATION: StringField<JobAppTemplate_Candidate_Detail_Global> = new StringField('instrApplcation', JobAppTemplate_Candidate_Detail_Global, 'Edm.String');
  /**
   * Static representation of the [[instrContractInfo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INSTR_CONTRACT_INFO: StringField<JobAppTemplate_Candidate_Detail_Global> = new StringField('instrContractInfo', JobAppTemplate_Candidate_Detail_Global, 'Edm.String');
  /**
   * Static representation of the [[instrDisability1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INSTR_DISABILITY_1: StringField<JobAppTemplate_Candidate_Detail_Global> = new StringField('instrDisability1', JobAppTemplate_Candidate_Detail_Global, 'Edm.String');
  /**
   * Static representation of the [[instrDisability2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INSTR_DISABILITY_2: StringField<JobAppTemplate_Candidate_Detail_Global> = new StringField('instrDisability2', JobAppTemplate_Candidate_Detail_Global, 'Edm.String');
  /**
   * Static representation of the [[instrDisclaimer]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INSTR_DISCLAIMER: StringField<JobAppTemplate_Candidate_Detail_Global> = new StringField('instrDisclaimer', JobAppTemplate_Candidate_Detail_Global, 'Edm.String');
  /**
   * Static representation of the [[instrEeo1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INSTR_EEO_1: StringField<JobAppTemplate_Candidate_Detail_Global> = new StringField('instrEEO1', JobAppTemplate_Candidate_Detail_Global, 'Edm.String');
  /**
   * Static representation of the [[instrEeo2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INSTR_EEO_2: StringField<JobAppTemplate_Candidate_Detail_Global> = new StringField('instrEEO2', JobAppTemplate_Candidate_Detail_Global, 'Edm.String');
  /**
   * Static representation of the [[instrEeoFooter]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INSTR_EEO_FOOTER: StringField<JobAppTemplate_Candidate_Detail_Global> = new StringField('instrEEOFooter', JobAppTemplate_Candidate_Detail_Global, 'Edm.String');
  /**
   * Static representation of the [[instrEligWork]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INSTR_ELIG_WORK: StringField<JobAppTemplate_Candidate_Detail_Global> = new StringField('instrEligWork', JobAppTemplate_Candidate_Detail_Global, 'Edm.String');
  /**
   * Static representation of the [[instrEmpInfo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INSTR_EMP_INFO: StringField<JobAppTemplate_Candidate_Detail_Global> = new StringField('instrEmpInfo', JobAppTemplate_Candidate_Detail_Global, 'Edm.String');
  /**
   * Static representation of the [[instrGlobalEeo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INSTR_GLOBAL_EEO: StringField<JobAppTemplate_Candidate_Detail_Global> = new StringField('instrGlobalEEO', JobAppTemplate_Candidate_Detail_Global, 'Edm.String');
  /**
   * Static representation of the [[instrInternalPolicy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INSTR_INTERNAL_POLICY: StringField<JobAppTemplate_Candidate_Detail_Global> = new StringField('instrInternalPolicy', JobAppTemplate_Candidate_Detail_Global, 'Edm.String');
  /**
   * Static representation of the [[instrInterview]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INSTR_INTERVIEW: StringField<JobAppTemplate_Candidate_Detail_Global> = new StringField('instrInterview', JobAppTemplate_Candidate_Detail_Global, 'Edm.String');
  /**
   * Static representation of the [[instrRewardInfo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INSTR_REWARD_INFO: StringField<JobAppTemplate_Candidate_Detail_Global> = new StringField('instrRewardInfo', JobAppTemplate_Candidate_Detail_Global, 'Edm.String');
  /**
   * Static representation of the [[instrUkDisability]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INSTR_UK_DISABILITY: StringField<JobAppTemplate_Candidate_Detail_Global> = new StringField('instrUKDisability', JobAppTemplate_Candidate_Detail_Global, 'Edm.String');
  /**
   * Static representation of the [[instrVets1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INSTR_VETS_1: StringField<JobAppTemplate_Candidate_Detail_Global> = new StringField('instrVets1', JobAppTemplate_Candidate_Detail_Global, 'Edm.String');
  /**
   * Static representation of the [[instrVets2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INSTR_VETS_2: StringField<JobAppTemplate_Candidate_Detail_Global> = new StringField('instrVets2', JobAppTemplate_Candidate_Detail_Global, 'Edm.String');
  /**
   * Static representation of the [[interviewResult]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INTERVIEW_RESULT: StringField<JobAppTemplate_Candidate_Detail_Global> = new StringField('interviewResult', JobAppTemplate_Candidate_Detail_Global, 'Edm.String');
  /**
   * Static representation of the [[jobTitle]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_TITLE: StringField<JobAppTemplate_Candidate_Detail_Global> = new StringField('jobTitle', JobAppTemplate_Candidate_Detail_Global, 'Edm.String');
  /**
   * Static representation of the [[lastModified]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED: DateField<JobAppTemplate_Candidate_Detail_Global> = new DateField('lastModified', JobAppTemplate_Candidate_Detail_Global, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[lastName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_NAME: StringField<JobAppTemplate_Candidate_Detail_Global> = new StringField('lastName', JobAppTemplate_Candidate_Detail_Global, 'Edm.String');
  /**
   * Static representation of the [[middleName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MIDDLE_NAME: StringField<JobAppTemplate_Candidate_Detail_Global> = new StringField('middleName', JobAppTemplate_Candidate_Detail_Global, 'Edm.String');
  /**
   * Static representation of the [[overdueInterviews]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OVERDUE_INTERVIEWS: StringField<JobAppTemplate_Candidate_Detail_Global> = new StringField('overdueInterviews', JobAppTemplate_Candidate_Detail_Global, 'Edm.String');
  /**
   * Static representation of the [[questionResponse]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const QUESTION_RESPONSE: StringField<JobAppTemplate_Candidate_Detail_Global> = new StringField('questionResponse', JobAppTemplate_Candidate_Detail_Global, 'Edm.String');
  /**
   * Static representation of the [[sectDisclaimer]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SECT_DISCLAIMER: StringField<JobAppTemplate_Candidate_Detail_Global> = new StringField('sectDisclaimer', JobAppTemplate_Candidate_Detail_Global, 'Edm.String');
  /**
   * Static representation of the [[source]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SOURCE: StringField<JobAppTemplate_Candidate_Detail_Global> = new StringField('source', JobAppTemplate_Candidate_Detail_Global, 'Edm.String');
  /**
   * Static representation of the [[startDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const START_DATE: DateField<JobAppTemplate_Candidate_Detail_Global> = new DateField('startDate', JobAppTemplate_Candidate_Detail_Global, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[templateId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TEMPLATE_ID: BigNumberField<JobAppTemplate_Candidate_Detail_Global> = new BigNumberField('templateId', JobAppTemplate_Candidate_Detail_Global, 'Edm.Int64');
  /**
   * Static representation of the [[zip]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ZIP: StringField<JobAppTemplate_Candidate_Detail_Global> = new StringField('zip', JobAppTemplate_Candidate_Detail_Global, 'Edm.String');
  /**
   * Static representation of the one-to-many navigation property [[bkgrndChkAttachment]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BKGRND_CHK_ATTACHMENT: Link<JobAppTemplate_Candidate_Detail_Global, Attachment> = new Link('bkgrndChkAttachment', JobAppTemplate_Candidate_Detail_Global, Attachment);
  /**
   * Static representation of the one-to-one navigation property [[country]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY: OneToOneLink<JobAppTemplate_Candidate_Detail_Global, PicklistOption> = new OneToOneLink('country', JobAppTemplate_Candidate_Detail_Global, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[coverLetter]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COVER_LETTER: OneToOneLink<JobAppTemplate_Candidate_Detail_Global, Attachment> = new OneToOneLink('coverLetter', JobAppTemplate_Candidate_Detail_Global, Attachment);
  /**
   * Static representation of the one-to-one navigation property [[custOnbPrefLang]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUST_ONB_PREF_LANG: OneToOneLink<JobAppTemplate_Candidate_Detail_Global, PicklistOption> = new OneToOneLink('custONBPrefLang', JobAppTemplate_Candidate_Detail_Global, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[custTravel]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUST_TRAVEL: OneToOneLink<JobAppTemplate_Candidate_Detail_Global, PicklistOption> = new OneToOneLink('custTravel', JobAppTemplate_Candidate_Detail_Global, PicklistOption);
  /**
   * Static representation of the one-to-many navigation property [[customAdditionalAttach]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOM_ADDITIONAL_ATTACH: Link<JobAppTemplate_Candidate_Detail_Global, Attachment> = new Link('customAdditionalAttach', JobAppTemplate_Candidate_Detail_Global, Attachment);
  /**
   * Static representation of the one-to-one navigation property [[customAdjustments]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOM_ADJUSTMENTS: OneToOneLink<JobAppTemplate_Candidate_Detail_Global, PicklistOption> = new OneToOneLink('customAdjustments', JobAppTemplate_Candidate_Detail_Global, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[customAgeGroup]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOM_AGE_GROUP: OneToOneLink<JobAppTemplate_Candidate_Detail_Global, PicklistOption> = new OneToOneLink('customAgeGroup', JobAppTemplate_Candidate_Detail_Global, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[customBasePayFreq]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOM_BASE_PAY_FREQ: OneToOneLink<JobAppTemplate_Candidate_Detail_Global, PicklistOption> = new OneToOneLink('customBasePayFreq', JobAppTemplate_Candidate_Detail_Global, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[customCarAllowRequired]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOM_CAR_ALLOW_REQUIRED: OneToOneLink<JobAppTemplate_Candidate_Detail_Global, PicklistOption> = new OneToOneLink('customCarAllowRequired', JobAppTemplate_Candidate_Detail_Global, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[customEarlyTalent]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOM_EARLY_TALENT: OneToOneLink<JobAppTemplate_Candidate_Detail_Global, PicklistOption> = new OneToOneLink('customEarlyTalent', JobAppTemplate_Candidate_Detail_Global, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[customEligibleToWork]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOM_ELIGIBLE_TO_WORK: OneToOneLink<JobAppTemplate_Candidate_Detail_Global, PicklistOption> = new OneToOneLink('customEligibleToWork', JobAppTemplate_Candidate_Detail_Global, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[customInternalPolicy]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOM_INTERNAL_POLICY: OneToOneLink<JobAppTemplate_Candidate_Detail_Global, PicklistOption> = new OneToOneLink('customInternalPolicy', JobAppTemplate_Candidate_Detail_Global, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[customInterviewRound]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOM_INTERVIEW_ROUND: OneToOneLink<JobAppTemplate_Candidate_Detail_Global, PicklistOption> = new OneToOneLink('customInterviewRound', JobAppTemplate_Candidate_Detail_Global, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[customInterviewType1]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOM_INTERVIEW_TYPE_1: OneToOneLink<JobAppTemplate_Candidate_Detail_Global, PicklistOption> = new OneToOneLink('customInterviewType1', JobAppTemplate_Candidate_Detail_Global, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[customLegalAuth]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOM_LEGAL_AUTH: OneToOneLink<JobAppTemplate_Candidate_Detail_Global, PicklistOption> = new OneToOneLink('customLegalAuth', JobAppTemplate_Candidate_Detail_Global, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[customNationality]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOM_NATIONALITY: OneToOneLink<JobAppTemplate_Candidate_Detail_Global, PicklistOption> = new OneToOneLink('customNationality', JobAppTemplate_Candidate_Detail_Global, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[customNoticeDuringProbPeriod]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOM_NOTICE_DURING_PROB_PERIOD: OneToOneLink<JobAppTemplate_Candidate_Detail_Global, PicklistOption> = new OneToOneLink('customNoticeDuringProbPeriod', JobAppTemplate_Candidate_Detail_Global, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[customNoticePeriod]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOM_NOTICE_PERIOD: OneToOneLink<JobAppTemplate_Candidate_Detail_Global, PicklistOption> = new OneToOneLink('customNoticePeriod', JobAppTemplate_Candidate_Detail_Global, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[customProbPeriod]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOM_PROB_PERIOD: OneToOneLink<JobAppTemplate_Candidate_Detail_Global, PicklistOption> = new OneToOneLink('customProbPeriod', JobAppTemplate_Candidate_Detail_Global, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[customSexualOrientation]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOM_SEXUAL_ORIENTATION: OneToOneLink<JobAppTemplate_Candidate_Detail_Global, PicklistOption> = new OneToOneLink('customSexualOrientation', JobAppTemplate_Candidate_Detail_Global, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[customSourcePrimary]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOM_SOURCE_PRIMARY: OneToOneLink<JobAppTemplate_Candidate_Detail_Global, PicklistOption> = new OneToOneLink('customSourcePrimary', JobAppTemplate_Candidate_Detail_Global, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[customSourceSecondary]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOM_SOURCE_SECONDARY: OneToOneLink<JobAppTemplate_Candidate_Detail_Global, PicklistOption> = new OneToOneLink('customSourceSecondary', JobAppTemplate_Candidate_Detail_Global, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[customTypeHire]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOM_TYPE_HIRE: OneToOneLink<JobAppTemplate_Candidate_Detail_Global, PicklistOption> = new OneToOneLink('customTypeHire', JobAppTemplate_Candidate_Detail_Global, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[customUkEthnicity]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOM_UK_ETHNICITY: OneToOneLink<JobAppTemplate_Candidate_Detail_Global, PicklistOption> = new OneToOneLink('customUKEthnicity', JobAppTemplate_Candidate_Detail_Global, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[customVirtualHire]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOM_VIRTUAL_HIRE: OneToOneLink<JobAppTemplate_Candidate_Detail_Global, PicklistOption> = new OneToOneLink('customVirtualHire', JobAppTemplate_Candidate_Detail_Global, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[customVisa]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOM_VISA: OneToOneLink<JobAppTemplate_Candidate_Detail_Global, PicklistOption> = new OneToOneLink('customVisa', JobAppTemplate_Candidate_Detail_Global, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[disabilityStatus]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DISABILITY_STATUS: OneToOneLink<JobAppTemplate_Candidate_Detail_Global, PicklistOption> = new OneToOneLink('disabilityStatus', JobAppTemplate_Candidate_Detail_Global, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[gender]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENDER: OneToOneLink<JobAppTemplate_Candidate_Detail_Global, PicklistOption> = new OneToOneLink('gender', JobAppTemplate_Candidate_Detail_Global, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[race]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RACE: OneToOneLink<JobAppTemplate_Candidate_Detail_Global, PicklistOption> = new OneToOneLink('race', JobAppTemplate_Candidate_Detail_Global, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[resume]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RESUME: OneToOneLink<JobAppTemplate_Candidate_Detail_Global, Attachment> = new OneToOneLink('resume', JobAppTemplate_Candidate_Detail_Global, Attachment);
  /**
   * Static representation of the one-to-one navigation property [[state]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATE: OneToOneLink<JobAppTemplate_Candidate_Detail_Global, PicklistOption> = new OneToOneLink('state', JobAppTemplate_Candidate_Detail_Global, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[statusId]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS_ID: OneToOneLink<JobAppTemplate_Candidate_Detail_Global, PicklistOption> = new OneToOneLink('statusId', JobAppTemplate_Candidate_Detail_Global, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[veteranStatus]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VETERAN_STATUS: OneToOneLink<JobAppTemplate_Candidate_Detail_Global, PicklistOption> = new OneToOneLink('veteranStatus', JobAppTemplate_Candidate_Detail_Global, PicklistOption);
  /**
   * All fields of the JobAppTemplate_Candidate_Detail_Global entity.
   */
  export const _allFields: Array<StringField<JobAppTemplate_Candidate_Detail_Global> | DateField<JobAppTemplate_Candidate_Detail_Global> | BigNumberField<JobAppTemplate_Candidate_Detail_Global> | Link<JobAppTemplate_Candidate_Detail_Global, Attachment> | OneToOneLink<JobAppTemplate_Candidate_Detail_Global, PicklistOption> | OneToOneLink<JobAppTemplate_Candidate_Detail_Global, Attachment>> = [
    JobAppTemplate_Candidate_Detail_Global.ADDRESS,
    JobAppTemplate_Candidate_Detail_Global.APPLICATION_DATE,
    JobAppTemplate_Candidate_Detail_Global.AVERAGE_RATING,
    JobAppTemplate_Candidate_Detail_Global.BKGRND_CHK_STATUS,
    JobAppTemplate_Candidate_Detail_Global.CANDIDATE_NAME,
    JobAppTemplate_Candidate_Detail_Global.CELL_PHONE,
    JobAppTemplate_Candidate_Detail_Global.CITY,
    JobAppTemplate_Candidate_Detail_Global.COMMENTS,
    JobAppTemplate_Candidate_Detail_Global.CONTACT_EMAIL,
    JobAppTemplate_Candidate_Detail_Global.CURRENT_COMPANY,
    JobAppTemplate_Candidate_Detail_Global.CURRENT_TITLE,
    JobAppTemplate_Candidate_Detail_Global.CUST_SALARY_DESIRED,
    JobAppTemplate_Candidate_Detail_Global.CUSTOM_ADJUSTMENTS_OTHER,
    JobAppTemplate_Candidate_Detail_Global.CUSTOM_BASE_SAL,
    JobAppTemplate_Candidate_Detail_Global.CUSTOM_CAR_ALLOW_AMT,
    JobAppTemplate_Candidate_Detail_Global.CUSTOM_CAR_ALLOWANCE_MONTHS,
    JobAppTemplate_Candidate_Detail_Global.CUSTOM_EEO_POSTER,
    JobAppTemplate_Candidate_Detail_Global.CUSTOM_ELIGIBLE_OTHER,
    JobAppTemplate_Candidate_Detail_Global.CUSTOM_FINAL_SIGN_ON,
    JobAppTemplate_Candidate_Detail_Global.CUSTOM_INTERVIEW_COMMENTS_1,
    JobAppTemplate_Candidate_Detail_Global.CUSTOM_INTERVIEW_DATE_TIME,
    JobAppTemplate_Candidate_Detail_Global.CUSTOM_INTERVIEW_LIST,
    JobAppTemplate_Candidate_Detail_Global.CUSTOM_LTI,
    JobAppTemplate_Candidate_Detail_Global.CUSTOM_OTHER_ALLOWANCE_DETAILS,
    JobAppTemplate_Candidate_Detail_Global.CUSTOM_OTHER_COMP_DETAILS,
    JobAppTemplate_Candidate_Detail_Global.CUSTOM_RELOC_AMOUNT,
    JobAppTemplate_Candidate_Detail_Global.CUSTOM_TARGET_BONUS_AMOUNT,
    JobAppTemplate_Candidate_Detail_Global.CUSTOM_VISA_YES,
    JobAppTemplate_Candidate_Detail_Global.DISCLAIMER_ACKNOWLEDGE,
    JobAppTemplate_Candidate_Detail_Global.END_DATE_CONTRACT,
    JobAppTemplate_Candidate_Detail_Global.FIRST_NAME,
    JobAppTemplate_Candidate_Detail_Global.HOME_PHONE,
    JobAppTemplate_Candidate_Detail_Global.ID,
    JobAppTemplate_Candidate_Detail_Global.INSTR_ACCOMMODATIONS,
    JobAppTemplate_Candidate_Detail_Global.INSTR_APPLCATION,
    JobAppTemplate_Candidate_Detail_Global.INSTR_CONTRACT_INFO,
    JobAppTemplate_Candidate_Detail_Global.INSTR_DISABILITY_1,
    JobAppTemplate_Candidate_Detail_Global.INSTR_DISABILITY_2,
    JobAppTemplate_Candidate_Detail_Global.INSTR_DISCLAIMER,
    JobAppTemplate_Candidate_Detail_Global.INSTR_EEO_1,
    JobAppTemplate_Candidate_Detail_Global.INSTR_EEO_2,
    JobAppTemplate_Candidate_Detail_Global.INSTR_EEO_FOOTER,
    JobAppTemplate_Candidate_Detail_Global.INSTR_ELIG_WORK,
    JobAppTemplate_Candidate_Detail_Global.INSTR_EMP_INFO,
    JobAppTemplate_Candidate_Detail_Global.INSTR_GLOBAL_EEO,
    JobAppTemplate_Candidate_Detail_Global.INSTR_INTERNAL_POLICY,
    JobAppTemplate_Candidate_Detail_Global.INSTR_INTERVIEW,
    JobAppTemplate_Candidate_Detail_Global.INSTR_REWARD_INFO,
    JobAppTemplate_Candidate_Detail_Global.INSTR_UK_DISABILITY,
    JobAppTemplate_Candidate_Detail_Global.INSTR_VETS_1,
    JobAppTemplate_Candidate_Detail_Global.INSTR_VETS_2,
    JobAppTemplate_Candidate_Detail_Global.INTERVIEW_RESULT,
    JobAppTemplate_Candidate_Detail_Global.JOB_TITLE,
    JobAppTemplate_Candidate_Detail_Global.LAST_MODIFIED,
    JobAppTemplate_Candidate_Detail_Global.LAST_NAME,
    JobAppTemplate_Candidate_Detail_Global.MIDDLE_NAME,
    JobAppTemplate_Candidate_Detail_Global.OVERDUE_INTERVIEWS,
    JobAppTemplate_Candidate_Detail_Global.QUESTION_RESPONSE,
    JobAppTemplate_Candidate_Detail_Global.SECT_DISCLAIMER,
    JobAppTemplate_Candidate_Detail_Global.SOURCE,
    JobAppTemplate_Candidate_Detail_Global.START_DATE,
    JobAppTemplate_Candidate_Detail_Global.TEMPLATE_ID,
    JobAppTemplate_Candidate_Detail_Global.ZIP,
    JobAppTemplate_Candidate_Detail_Global.BKGRND_CHK_ATTACHMENT,
    JobAppTemplate_Candidate_Detail_Global.COUNTRY,
    JobAppTemplate_Candidate_Detail_Global.COVER_LETTER,
    JobAppTemplate_Candidate_Detail_Global.CUST_ONB_PREF_LANG,
    JobAppTemplate_Candidate_Detail_Global.CUST_TRAVEL,
    JobAppTemplate_Candidate_Detail_Global.CUSTOM_ADDITIONAL_ATTACH,
    JobAppTemplate_Candidate_Detail_Global.CUSTOM_ADJUSTMENTS,
    JobAppTemplate_Candidate_Detail_Global.CUSTOM_AGE_GROUP,
    JobAppTemplate_Candidate_Detail_Global.CUSTOM_BASE_PAY_FREQ,
    JobAppTemplate_Candidate_Detail_Global.CUSTOM_CAR_ALLOW_REQUIRED,
    JobAppTemplate_Candidate_Detail_Global.CUSTOM_EARLY_TALENT,
    JobAppTemplate_Candidate_Detail_Global.CUSTOM_ELIGIBLE_TO_WORK,
    JobAppTemplate_Candidate_Detail_Global.CUSTOM_INTERNAL_POLICY,
    JobAppTemplate_Candidate_Detail_Global.CUSTOM_INTERVIEW_ROUND,
    JobAppTemplate_Candidate_Detail_Global.CUSTOM_INTERVIEW_TYPE_1,
    JobAppTemplate_Candidate_Detail_Global.CUSTOM_LEGAL_AUTH,
    JobAppTemplate_Candidate_Detail_Global.CUSTOM_NATIONALITY,
    JobAppTemplate_Candidate_Detail_Global.CUSTOM_NOTICE_DURING_PROB_PERIOD,
    JobAppTemplate_Candidate_Detail_Global.CUSTOM_NOTICE_PERIOD,
    JobAppTemplate_Candidate_Detail_Global.CUSTOM_PROB_PERIOD,
    JobAppTemplate_Candidate_Detail_Global.CUSTOM_SEXUAL_ORIENTATION,
    JobAppTemplate_Candidate_Detail_Global.CUSTOM_SOURCE_PRIMARY,
    JobAppTemplate_Candidate_Detail_Global.CUSTOM_SOURCE_SECONDARY,
    JobAppTemplate_Candidate_Detail_Global.CUSTOM_TYPE_HIRE,
    JobAppTemplate_Candidate_Detail_Global.CUSTOM_UK_ETHNICITY,
    JobAppTemplate_Candidate_Detail_Global.CUSTOM_VIRTUAL_HIRE,
    JobAppTemplate_Candidate_Detail_Global.CUSTOM_VISA,
    JobAppTemplate_Candidate_Detail_Global.DISABILITY_STATUS,
    JobAppTemplate_Candidate_Detail_Global.GENDER,
    JobAppTemplate_Candidate_Detail_Global.RACE,
    JobAppTemplate_Candidate_Detail_Global.RESUME,
    JobAppTemplate_Candidate_Detail_Global.STATE,
    JobAppTemplate_Candidate_Detail_Global.STATUS_ID,
    JobAppTemplate_Candidate_Detail_Global.VETERAN_STATUS
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<JobAppTemplate_Candidate_Detail_Global> = new AllFields('*', JobAppTemplate_Candidate_Detail_Global);
  /**
   * All key fields of the JobAppTemplate_Candidate_Detail_Global entity.
   */
  export const _keyFields: Array<Selectable<JobAppTemplate_Candidate_Detail_Global>> = [JobAppTemplate_Candidate_Detail_Global.TEMPLATE_ID];
  /**
   * Mapping of all key field names to the respective static field property JobAppTemplate_Candidate_Detail_Global.
   */
  export const _keys: { [keys: string]: Selectable<JobAppTemplate_Candidate_Detail_Global> } = JobAppTemplate_Candidate_Detail_Global._keyFields.reduce((acc: { [keys: string]: Selectable<JobAppTemplate_Candidate_Detail_Global> }, field: Selectable<JobAppTemplate_Candidate_Detail_Global>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
