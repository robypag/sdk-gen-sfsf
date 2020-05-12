/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { JobRequisitionRequestBuilder } from './JobRequisitionRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, DateField, Entity, EntityBuilderType, Link, NumberField, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "JobRequisition" of service "SFOData".
 */
export class JobRequisition extends Entity implements JobRequisitionType {
  /**
   * Technical entity name for JobRequisition.
   */
  static _entityName = 'JobRequisition';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for JobRequisition.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Age.
   */
  age!: BigNumber;
  /**
   * Application Template Id.
   */
  appTemplateId!: BigNumber;
  /**
   * Assess Rating Scale Name.
   */
  assessRatingScaleName!: string;
  /**
   * Business Unit.
   * @nullable
   */
  businessUnitObjCode?: string;
  /**
   * Candidate Hired.
   * @nullable
   */
  candidateHired?: BigNumber;
  /**
   * Candidate Progress Status.
   */
  candidateProgress!: BigNumber;
  /**
   * Date Closed.
   */
  closedDateTime!: Moment;
  /**
   * Corporate Posting.
   * @nullable
   */
  corporatePosting?: boolean;
  /**
   * Cost Center Code.
   * @nullable
   */
  costCenterObjCode?: string;
  /**
   * Country.
   * @nullable
   */
  country?: string;
  /**
   * Date Created.
   */
  createdDateTime!: Moment;
  /**
   * Currency.
   * @nullable
   */
  currency?: string;
  /**
   * Employee Class.
   * @nullable
   */
  custEmployeeClass?: string;
  /**
   * Target FTE.
   * @nullable
   */
  custFte?: string;
  /**
   * Global Job Title.
   * @nullable
   */
  custGlobalJobTitle?: string;
  /**
   * Hours Per Week.
   * @nullable
   */
  custHoursPerWeek?: string;
  /**
   * Assessment Information.
   * @nullable
   */
  custInstrAssessments?: string;
  /**
   * Country Specific Fields.
   * @nullable
   */
  custInstrCountryFields?: string;
  /**
   * Background Check.
   * @nullable
   */
  custInstrFadv?: string;
  /**
   * Posting Information.
   * @nullable
   */
  custInstrJobPosting?: string;
  /**
   * Position Information,Position Information.
   * @nullable
   */
  custInstrPosMgmt?: string;
  /**
   * Requisition Information.
   * @nullable
   */
  custInstrReqDetails?: string;
  /**
   * Hiring Team Details,Hiring Team Information.
   * @nullable
   */
  custInstrTeamDetails?: string;
  /**
   * Comments.
   * @nullable
   */
  customComments?: string;
  /**
   * Default Language.
   * @nullable
   */
  defaultLanguage?: string;
  /**
   * Is Deleted.
   */
  deleted!: string;
  /**
   * Department Code.
   * @nullable
   */
  departmentObjCode?: string;
  /**
   * Division Code.
   * @nullable
   */
  divisionObjCode?: string;
  /**
   * EEO Group.
   * @nullable
   */
  eeoGroup?: string;
  /**
   * EEO Job Category.
   * @nullable
   */
  eeoJobCat?: string;
  /**
   * ERP Amount.
   * @nullable
   */
  erpAmount?: BigNumber;
  /**
   * FLSA Status.
   * @nullable
   */
  flsa?: string;
  /**
   * Form Data Id.
   */
  formDataId!: BigNumber;
  /**
   * Form Due Date.
   * @nullable
   */
  formDueDate?: Moment;
  /**
   * Internal Information.
   * @nullable
   */
  instrInternalComments?: string;
  /**
   * Job Requisition End Date Time.
   * @nullable
   */
  intEndDate?: Moment;
  /**
   * Job Requisition Start Date Time.
   * @nullable
   */
  intStartDate?: Moment;
  /**
   * Internal Status.
   */
  internalStatus!: string;
  /**
   * The information below is required if posting to Job Boards,Posting Location Information.
   * @nullable
   */
  intrPosting?: string;
  /**
   * Intranet Posting.
   * @nullable
   */
  intranetPosting?: boolean;
  /**
   * isDraft.
   * @nullable
   */
  isDraft?: boolean;
  /**
   * Job Code.
   * @nullable
   */
  jobCode?: string;
  /**
   * Job Grade.
   * @nullable
   */
  jobGrade?: string;
  /**
   * Job Level.
   * @nullable
   */
  jobLevel?: string;
  /**
   * Job Requisition GU Id.
   */
  jobReqGuId!: string;
  /**
   * Job Requisition Id.
   */
  jobReqId!: BigNumber;
  /**
   * Job Role.
   * @nullable
   */
  jobRole?: string;
  /**
   * Job Start Date Time.
   * @nullable
   */
  jobStartDate?: Moment;
  /**
   * Last Modified By.
   */
  lastModifiedBy!: string;
  /**
   * Last Modified Date.
   */
  lastModifiedDateTime!: Moment;
  /**
   * Last Modified Proxy User Id.
   */
  lastModifiedProxyUserId!: string;
  /**
   * Company Code.
   * @nullable
   */
  legalEntityObjCode?: string;
  /**
   * Location Code.
   * @nullable
   */
  locationObjCode?: string;
  /**
   * Number of Opening.
   * @nullable
   */
  numberOpenings?: BigNumber;
  /**
   * Openings Filled.
   * @nullable
   */
  openingsFilled?: BigNumber;
  /**
   * Overall Scale Name.
   */
  overallScaleName!: string;
  /**
   * Parent Job Req Id.
   * @nullable
   */
  parentJobReqId?: BigNumber;
  /**
   * Position Number.
   */
  positionNumber!: string;
  /**
   * Rated Applicant Count.
   */
  ratedApplicantCount!: BigNumber;
  /**
   * RestorecoordinatorTeamAdminDefaults.
   * @nullable
   */
  restorecoordinatorTeamAdminDefaults?: boolean;
  /**
   * RestorehiringManagerTeamAdminDefaults.
   * @nullable
   */
  restorehiringManagerTeamAdminDefaults?: boolean;
  /**
   * RestorerecruiterTeamAdminDefaults.
   * @nullable
   */
  restorerecruiterTeamAdminDefaults?: boolean;
  /**
   * RestoresecondRecruiterTeamAdminDefaults.
   * @nullable
   */
  restoresecondRecruiterTeamAdminDefaults?: boolean;
  /**
   * RestoresourcerTeamAdminDefaults.
   * @nullable
   */
  restoresourcerTeamAdminDefaults?: boolean;
  /**
   * RestorevTeamAdminDefaults.
   * @nullable
   */
  restorevTeamAdminDefaults?: boolean;
  /**
   * RestorevpOfStaffingTeamAdminDefaults.
   * @nullable
   */
  restorevpOfStaffingTeamAdminDefaults?: boolean;
  /**
   * Reverse Scale.
   */
  reverseScale!: string;
  /**
   * Maximum Salary.
   * @nullable
   */
  salaryMax?: BigNumber;
  /**
   * Middle Salary.
   * @nullable
   */
  salaryMid?: BigNumber;
  /**
   * Minimum Salary.
   * @nullable
   */
  salaryMin?: BigNumber;
  /**
   * Application Status Set Id.
   */
  statusSetId!: BigNumber;
  /**
   * Template Id.
   */
  templateId!: BigNumber;
  /**
   * Template Name.
   */
  templateName!: string;
  /**
   * Template Type.
   */
  templateType!: string;
  /**
   * Time to Fill.
   */
  timeToFill!: number;
  /**
   * One-to-many navigation property to the [[JobRequisitionOperator]] entity.
   */
  approver!: JobRequisitionOperator[];
  /**
   * One-to-many navigation property to the [[JobRequisitionAssessment]] entity.
   */
  assessment!: JobRequisitionAssessment[];
  /**
   * One-to-one navigation property to the [[FoBusinessUnit]] entity.
   */
  businessUnitObj!: FoBusinessUnit;
  /**
   * One-to-many navigation property to the [[RcmCompetency]] entity.
   */
  competencies!: RcmCompetency[];
  /**
   * One-to-many navigation property to the [[JobRequisitionOperator]] entity.
   */
  coordinator!: JobRequisitionOperator[];
  /**
   * One-to-many navigation property to the [[JobRequisitionOperator]] entity.
   */
  coordinatorTeam!: JobRequisitionOperator[];
  /**
   * One-to-many navigation property to the [[JobRequisitionGroupOperator]] entity.
   */
  coordinatorTeamGroup!: JobRequisitionGroupOperator[];
  /**
   * One-to-one navigation property to the [[FoCostCenter]] entity.
   */
  costCenterObj!: FoCostCenter;
  /**
   * One-to-many navigation property to the [[JobRequisitionOperator]] entity.
   */
  currentOwner!: JobRequisitionOperator[];
  /**
   * One-to-many navigation property to the [[PicklistOption]] entity.
   */
  custDuration!: PicklistOption[];
  /**
   * One-to-one navigation property to the [[FoDepartment]] entity.
   */
  departmentObj!: FoDepartment;
  /**
   * One-to-one navigation property to the [[FoDivision]] entity.
   */
  divisionObj!: FoDivision;
  /**
   * One-to-many navigation property to the [[PicklistOption]] entity.
   */
  filter1!: PicklistOption[];
  /**
   * One-to-many navigation property to the [[PicklistOption]] entity.
   */
  filter3!: PicklistOption[];
  /**
   * One-to-many navigation property to the [[PicklistOption]] entity.
   */
  filter4!: PicklistOption[];
  /**
   * One-to-many navigation property to the [[PicklistOption]] entity.
   */
  hardstopStatus!: PicklistOption[];
  /**
   * One-to-many navigation property to the [[JobRequisitionOperator]] entity.
   */
  hiringManager!: JobRequisitionOperator[];
  /**
   * One-to-many navigation property to the [[JobRequisitionOperator]] entity.
   */
  hiringManagerTeam!: JobRequisitionOperator[];
  /**
   * One-to-many navigation property to the [[JobRequisitionGroupOperator]] entity.
   */
  hiringManagerTeamGroup!: JobRequisitionGroupOperator[];
  /**
   * One-to-many navigation property to the [[Attachment]] entity.
   */
  interviewGuide!: Attachment[];
  /**
   * One-to-many navigation property to the [[JobAnalyzerReportingData]] entity.
   */
  jobAnalyzerReportingData!: JobAnalyzerReportingData[];
  /**
   * One-to-many navigation property to the [[JobApplication]] entity.
   */
  jobApplications!: JobApplication[];
  /**
   * One-to-one navigation property to the [[JobProfile]] entity.
   */
  jobProfile!: JobProfile;
  /**
   * One-to-many navigation property to the [[JobReqFwdCandidates]] entity.
   */
  jobReqFwdCandidates!: JobReqFwdCandidates[];
  /**
   * One-to-many navigation property to the [[JobRequisitionLocale]] entity.
   */
  jobReqLocale!: JobRequisitionLocale[];
  /**
   * One-to-one navigation property to the [[JobRequisitionFieldControls]] entity.
   */
  jobReqPermissionsNav!: JobRequisitionFieldControls;
  /**
   * One-to-many navigation property to the [[JobRequisitionPosting]] entity.
   */
  jobReqPostings!: JobRequisitionPosting[];
  /**
   * One-to-many navigation property to the [[JobReqScreeningQuestion]] entity.
   */
  jobReqScreeningQuestions!: JobReqScreeningQuestion[];
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  lastModifiedByNav!: User;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  lastModifiedProxyUserNav!: User;
  /**
   * One-to-one navigation property to the [[FoCompany]] entity.
   */
  legalEntityObj!: FoCompany;
  /**
   * One-to-many navigation property to the [[FoLocation]] entity.
   */
  locationObj!: FoLocation[];
  /**
   * One-to-many navigation property to the [[JobReqFoLocation]] entity.
   */
  locationObjlist!: JobReqFoLocation[];
  /**
   * One-to-many navigation property to the [[PicklistOption]] entity.
   */
  mfield1!: PicklistOption[];
  /**
   * One-to-many navigation property to the [[PicklistOption]] entity.
   */
  mfield2!: PicklistOption[];
  /**
   * One-to-many navigation property to the [[JobRequisitionOperator]] entity.
   */
  originator!: JobRequisitionOperator[];
  /**
   * One-to-many navigation property to the [[JobReqQuestion]] entity.
   */
  questions!: JobReqQuestion[];
  /**
   * One-to-many navigation property to the [[JobRequisitionOperator]] entity.
   */
  recruiter!: JobRequisitionOperator[];
  /**
   * One-to-many navigation property to the [[JobRequisitionOperator]] entity.
   */
  recruiterTeam!: JobRequisitionOperator[];
  /**
   * One-to-many navigation property to the [[JobRequisitionGroupOperator]] entity.
   */
  recruiterTeamGroup!: JobRequisitionGroupOperator[];
  /**
   * One-to-one navigation property to the [[FormRouteMap]] entity.
   */
  routeMap!: FormRouteMap;
  /**
   * One-to-many navigation property to the [[JobRequisitionOperator]] entity.
   */
  secondRecruiter!: JobRequisitionOperator[];
  /**
   * One-to-many navigation property to the [[JobRequisitionOperator]] entity.
   */
  secondRecruiterTeam!: JobRequisitionOperator[];
  /**
   * One-to-many navigation property to the [[JobRequisitionGroupOperator]] entity.
   */
  secondRecruiterTeamGroup!: JobRequisitionGroupOperator[];
  /**
   * One-to-many navigation property to the [[JobRequisitionOperator]] entity.
   */
  sourcer!: JobRequisitionOperator[];
  /**
   * One-to-many navigation property to the [[JobRequisitionOperator]] entity.
   */
  sourcerTeam!: JobRequisitionOperator[];
  /**
   * One-to-many navigation property to the [[JobRequisitionGroupOperator]] entity.
   */
  sourcerTeamGroup!: JobRequisitionGroupOperator[];
  /**
   * One-to-many navigation property to the [[PicklistOption]] entity.
   */
  status!: PicklistOption[];
  /**
   * One-to-many navigation property to the [[JobRequisitionOperator]] entity.
   */
  vTeam!: JobRequisitionOperator[];
  /**
   * One-to-many navigation property to the [[JobRequisitionGroupOperator]] entity.
   */
  vTeamGroup!: JobRequisitionGroupOperator[];
  /**
   * One-to-many navigation property to the [[JobRequisitionOperator]] entity.
   */
  vpOfStaffing!: JobRequisitionOperator[];
  /**
   * One-to-many navigation property to the [[JobRequisitionOperator]] entity.
   */
  vpOfStaffingTeam!: JobRequisitionOperator[];
  /**
   * One-to-many navigation property to the [[JobRequisitionGroupOperator]] entity.
   */
  vpOfStaffingTeamGroup!: JobRequisitionGroupOperator[];

  /**
   * Returns an entity builder to construct instances `JobRequisition`.
   * @returns A builder that constructs instances of entity type `JobRequisition`.
   */
  static builder(): EntityBuilderType<JobRequisition, JobRequisitionTypeForceMandatory> {
    return Entity.entityBuilder(JobRequisition);
  }

  /**
   * Returns a request builder to construct requests for operations on the `JobRequisition` entity type.
   * @returns A `JobRequisition` request builder.
   */
  static requestBuilder(): JobRequisitionRequestBuilder {
    return new JobRequisitionRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobRequisition`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `JobRequisition`.
   */
  static customField(fieldName: string): CustomField<JobRequisition> {
    return Entity.customFieldSelector(fieldName, JobRequisition);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { JobRequisitionOperator, JobRequisitionOperatorType } from './JobRequisitionOperator';
import { JobRequisitionAssessment, JobRequisitionAssessmentType } from './JobRequisitionAssessment';
import { FoBusinessUnit, FoBusinessUnitType } from './FoBusinessUnit';
import { RcmCompetency, RcmCompetencyType } from './RcmCompetency';
import { JobRequisitionGroupOperator, JobRequisitionGroupOperatorType } from './JobRequisitionGroupOperator';
import { FoCostCenter, FoCostCenterType } from './FoCostCenter';
import { PicklistOption, PicklistOptionType } from './PicklistOption';
import { FoDepartment, FoDepartmentType } from './FoDepartment';
import { FoDivision, FoDivisionType } from './FoDivision';
import { Attachment, AttachmentType } from './Attachment';
import { JobAnalyzerReportingData, JobAnalyzerReportingDataType } from './JobAnalyzerReportingData';
import { JobApplication, JobApplicationType } from './JobApplication';
import { JobProfile, JobProfileType } from './JobProfile';
import { JobReqFwdCandidates, JobReqFwdCandidatesType } from './JobReqFwdCandidates';
import { JobRequisitionLocale, JobRequisitionLocaleType } from './JobRequisitionLocale';
import { JobRequisitionFieldControls, JobRequisitionFieldControlsType } from './JobRequisitionFieldControls';
import { JobRequisitionPosting, JobRequisitionPostingType } from './JobRequisitionPosting';
import { JobReqScreeningQuestion, JobReqScreeningQuestionType } from './JobReqScreeningQuestion';
import { User, UserType } from './User';
import { FoCompany, FoCompanyType } from './FoCompany';
import { FoLocation, FoLocationType } from './FoLocation';
import { JobReqFoLocation, JobReqFoLocationType } from './JobReqFoLocation';
import { JobReqQuestion, JobReqQuestionType } from './JobReqQuestion';
import { FormRouteMap, FormRouteMapType } from './FormRouteMap';

export interface JobRequisitionType {
  age: BigNumber;
  appTemplateId: BigNumber;
  assessRatingScaleName: string;
  businessUnitObjCode?: string;
  candidateHired?: BigNumber;
  candidateProgress: BigNumber;
  closedDateTime: Moment;
  corporatePosting?: boolean;
  costCenterObjCode?: string;
  country?: string;
  createdDateTime: Moment;
  currency?: string;
  custEmployeeClass?: string;
  custFte?: string;
  custGlobalJobTitle?: string;
  custHoursPerWeek?: string;
  custInstrAssessments?: string;
  custInstrCountryFields?: string;
  custInstrFadv?: string;
  custInstrJobPosting?: string;
  custInstrPosMgmt?: string;
  custInstrReqDetails?: string;
  custInstrTeamDetails?: string;
  customComments?: string;
  defaultLanguage?: string;
  deleted: string;
  departmentObjCode?: string;
  divisionObjCode?: string;
  eeoGroup?: string;
  eeoJobCat?: string;
  erpAmount?: BigNumber;
  flsa?: string;
  formDataId: BigNumber;
  formDueDate?: Moment;
  instrInternalComments?: string;
  intEndDate?: Moment;
  intStartDate?: Moment;
  internalStatus: string;
  intrPosting?: string;
  intranetPosting?: boolean;
  isDraft?: boolean;
  jobCode?: string;
  jobGrade?: string;
  jobLevel?: string;
  jobReqGuId: string;
  jobReqId: BigNumber;
  jobRole?: string;
  jobStartDate?: Moment;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  lastModifiedProxyUserId: string;
  legalEntityObjCode?: string;
  locationObjCode?: string;
  numberOpenings?: BigNumber;
  openingsFilled?: BigNumber;
  overallScaleName: string;
  parentJobReqId?: BigNumber;
  positionNumber: string;
  ratedApplicantCount: BigNumber;
  restorecoordinatorTeamAdminDefaults?: boolean;
  restorehiringManagerTeamAdminDefaults?: boolean;
  restorerecruiterTeamAdminDefaults?: boolean;
  restoresecondRecruiterTeamAdminDefaults?: boolean;
  restoresourcerTeamAdminDefaults?: boolean;
  restorevTeamAdminDefaults?: boolean;
  restorevpOfStaffingTeamAdminDefaults?: boolean;
  reverseScale: string;
  salaryMax?: BigNumber;
  salaryMid?: BigNumber;
  salaryMin?: BigNumber;
  statusSetId: BigNumber;
  templateId: BigNumber;
  templateName: string;
  templateType: string;
  timeToFill: number;
  approver: JobRequisitionOperatorType[];
  assessment: JobRequisitionAssessmentType[];
  businessUnitObj: FoBusinessUnitType;
  competencies: RcmCompetencyType[];
  coordinator: JobRequisitionOperatorType[];
  coordinatorTeam: JobRequisitionOperatorType[];
  coordinatorTeamGroup: JobRequisitionGroupOperatorType[];
  costCenterObj: FoCostCenterType;
  currentOwner: JobRequisitionOperatorType[];
  custDuration: PicklistOptionType[];
  departmentObj: FoDepartmentType;
  divisionObj: FoDivisionType;
  filter1: PicklistOptionType[];
  filter3: PicklistOptionType[];
  filter4: PicklistOptionType[];
  hardstopStatus: PicklistOptionType[];
  hiringManager: JobRequisitionOperatorType[];
  hiringManagerTeam: JobRequisitionOperatorType[];
  hiringManagerTeamGroup: JobRequisitionGroupOperatorType[];
  interviewGuide: AttachmentType[];
  jobAnalyzerReportingData: JobAnalyzerReportingDataType[];
  jobApplications: JobApplicationType[];
  jobProfile: JobProfileType;
  jobReqFwdCandidates: JobReqFwdCandidatesType[];
  jobReqLocale: JobRequisitionLocaleType[];
  jobReqPermissionsNav: JobRequisitionFieldControlsType;
  jobReqPostings: JobRequisitionPostingType[];
  jobReqScreeningQuestions: JobReqScreeningQuestionType[];
  lastModifiedByNav: UserType;
  lastModifiedProxyUserNav: UserType;
  legalEntityObj: FoCompanyType;
  locationObj: FoLocationType[];
  locationObjlist: JobReqFoLocationType[];
  mfield1: PicklistOptionType[];
  mfield2: PicklistOptionType[];
  originator: JobRequisitionOperatorType[];
  questions: JobReqQuestionType[];
  recruiter: JobRequisitionOperatorType[];
  recruiterTeam: JobRequisitionOperatorType[];
  recruiterTeamGroup: JobRequisitionGroupOperatorType[];
  routeMap: FormRouteMapType;
  secondRecruiter: JobRequisitionOperatorType[];
  secondRecruiterTeam: JobRequisitionOperatorType[];
  secondRecruiterTeamGroup: JobRequisitionGroupOperatorType[];
  sourcer: JobRequisitionOperatorType[];
  sourcerTeam: JobRequisitionOperatorType[];
  sourcerTeamGroup: JobRequisitionGroupOperatorType[];
  status: PicklistOptionType[];
  vTeam: JobRequisitionOperatorType[];
  vTeamGroup: JobRequisitionGroupOperatorType[];
  vpOfStaffing: JobRequisitionOperatorType[];
  vpOfStaffingTeam: JobRequisitionOperatorType[];
  vpOfStaffingTeamGroup: JobRequisitionGroupOperatorType[];
}

export interface JobRequisitionTypeForceMandatory {
  age: BigNumber;
  appTemplateId: BigNumber;
  assessRatingScaleName: string;
  businessUnitObjCode: string;
  candidateHired: BigNumber;
  candidateProgress: BigNumber;
  closedDateTime: Moment;
  corporatePosting: boolean;
  costCenterObjCode: string;
  country: string;
  createdDateTime: Moment;
  currency: string;
  custEmployeeClass: string;
  custFte: string;
  custGlobalJobTitle: string;
  custHoursPerWeek: string;
  custInstrAssessments: string;
  custInstrCountryFields: string;
  custInstrFadv: string;
  custInstrJobPosting: string;
  custInstrPosMgmt: string;
  custInstrReqDetails: string;
  custInstrTeamDetails: string;
  customComments: string;
  defaultLanguage: string;
  deleted: string;
  departmentObjCode: string;
  divisionObjCode: string;
  eeoGroup: string;
  eeoJobCat: string;
  erpAmount: BigNumber;
  flsa: string;
  formDataId: BigNumber;
  formDueDate: Moment;
  instrInternalComments: string;
  intEndDate: Moment;
  intStartDate: Moment;
  internalStatus: string;
  intrPosting: string;
  intranetPosting: boolean;
  isDraft: boolean;
  jobCode: string;
  jobGrade: string;
  jobLevel: string;
  jobReqGuId: string;
  jobReqId: BigNumber;
  jobRole: string;
  jobStartDate: Moment;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  lastModifiedProxyUserId: string;
  legalEntityObjCode: string;
  locationObjCode: string;
  numberOpenings: BigNumber;
  openingsFilled: BigNumber;
  overallScaleName: string;
  parentJobReqId: BigNumber;
  positionNumber: string;
  ratedApplicantCount: BigNumber;
  restorecoordinatorTeamAdminDefaults: boolean;
  restorehiringManagerTeamAdminDefaults: boolean;
  restorerecruiterTeamAdminDefaults: boolean;
  restoresecondRecruiterTeamAdminDefaults: boolean;
  restoresourcerTeamAdminDefaults: boolean;
  restorevTeamAdminDefaults: boolean;
  restorevpOfStaffingTeamAdminDefaults: boolean;
  reverseScale: string;
  salaryMax: BigNumber;
  salaryMid: BigNumber;
  salaryMin: BigNumber;
  statusSetId: BigNumber;
  templateId: BigNumber;
  templateName: string;
  templateType: string;
  timeToFill: number;
  approver: JobRequisitionOperatorType[];
  assessment: JobRequisitionAssessmentType[];
  businessUnitObj: FoBusinessUnitType;
  competencies: RcmCompetencyType[];
  coordinator: JobRequisitionOperatorType[];
  coordinatorTeam: JobRequisitionOperatorType[];
  coordinatorTeamGroup: JobRequisitionGroupOperatorType[];
  costCenterObj: FoCostCenterType;
  currentOwner: JobRequisitionOperatorType[];
  custDuration: PicklistOptionType[];
  departmentObj: FoDepartmentType;
  divisionObj: FoDivisionType;
  filter1: PicklistOptionType[];
  filter3: PicklistOptionType[];
  filter4: PicklistOptionType[];
  hardstopStatus: PicklistOptionType[];
  hiringManager: JobRequisitionOperatorType[];
  hiringManagerTeam: JobRequisitionOperatorType[];
  hiringManagerTeamGroup: JobRequisitionGroupOperatorType[];
  interviewGuide: AttachmentType[];
  jobAnalyzerReportingData: JobAnalyzerReportingDataType[];
  jobApplications: JobApplicationType[];
  jobProfile: JobProfileType;
  jobReqFwdCandidates: JobReqFwdCandidatesType[];
  jobReqLocale: JobRequisitionLocaleType[];
  jobReqPermissionsNav: JobRequisitionFieldControlsType;
  jobReqPostings: JobRequisitionPostingType[];
  jobReqScreeningQuestions: JobReqScreeningQuestionType[];
  lastModifiedByNav: UserType;
  lastModifiedProxyUserNav: UserType;
  legalEntityObj: FoCompanyType;
  locationObj: FoLocationType[];
  locationObjlist: JobReqFoLocationType[];
  mfield1: PicklistOptionType[];
  mfield2: PicklistOptionType[];
  originator: JobRequisitionOperatorType[];
  questions: JobReqQuestionType[];
  recruiter: JobRequisitionOperatorType[];
  recruiterTeam: JobRequisitionOperatorType[];
  recruiterTeamGroup: JobRequisitionGroupOperatorType[];
  routeMap: FormRouteMapType;
  secondRecruiter: JobRequisitionOperatorType[];
  secondRecruiterTeam: JobRequisitionOperatorType[];
  secondRecruiterTeamGroup: JobRequisitionGroupOperatorType[];
  sourcer: JobRequisitionOperatorType[];
  sourcerTeam: JobRequisitionOperatorType[];
  sourcerTeamGroup: JobRequisitionGroupOperatorType[];
  status: PicklistOptionType[];
  vTeam: JobRequisitionOperatorType[];
  vTeamGroup: JobRequisitionGroupOperatorType[];
  vpOfStaffing: JobRequisitionOperatorType[];
  vpOfStaffingTeam: JobRequisitionOperatorType[];
  vpOfStaffingTeamGroup: JobRequisitionGroupOperatorType[];
}

export namespace JobRequisition {
  /**
   * Static representation of the [[age]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const AGE: BigNumberField<JobRequisition> = new BigNumberField('age', JobRequisition, 'Edm.Int64');
  /**
   * Static representation of the [[appTemplateId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const APP_TEMPLATE_ID: BigNumberField<JobRequisition> = new BigNumberField('appTemplateId', JobRequisition, 'Edm.Int64');
  /**
   * Static representation of the [[assessRatingScaleName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ASSESS_RATING_SCALE_NAME: StringField<JobRequisition> = new StringField('assessRatingScaleName', JobRequisition, 'Edm.String');
  /**
   * Static representation of the [[businessUnitObjCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_UNIT_OBJ_CODE: StringField<JobRequisition> = new StringField('businessUnit_obj_code', JobRequisition, 'Edm.String');
  /**
   * Static representation of the [[candidateHired]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CANDIDATE_HIRED: BigNumberField<JobRequisition> = new BigNumberField('candidateHired', JobRequisition, 'Edm.Decimal');
  /**
   * Static representation of the [[candidateProgress]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CANDIDATE_PROGRESS: BigNumberField<JobRequisition> = new BigNumberField('candidateProgress', JobRequisition, 'Edm.Int64');
  /**
   * Static representation of the [[closedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CLOSED_DATE_TIME: DateField<JobRequisition> = new DateField('closedDateTime', JobRequisition, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[corporatePosting]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CORPORATE_POSTING: BooleanField<JobRequisition> = new BooleanField('corporatePosting', JobRequisition, 'Edm.Boolean');
  /**
   * Static representation of the [[costCenterObjCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COST_CENTER_OBJ_CODE: StringField<JobRequisition> = new StringField('costCenter_obj_code', JobRequisition, 'Edm.String');
  /**
   * Static representation of the [[country]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY: StringField<JobRequisition> = new StringField('country', JobRequisition, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<JobRequisition> = new DateField('createdDateTime', JobRequisition, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[currency]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CURRENCY: StringField<JobRequisition> = new StringField('currency', JobRequisition, 'Edm.String');
  /**
   * Static representation of the [[custEmployeeClass]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUST_EMPLOYEE_CLASS: StringField<JobRequisition> = new StringField('custEmployeeClass', JobRequisition, 'Edm.String');
  /**
   * Static representation of the [[custFte]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUST_FTE: StringField<JobRequisition> = new StringField('custFTE', JobRequisition, 'Edm.String');
  /**
   * Static representation of the [[custGlobalJobTitle]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUST_GLOBAL_JOB_TITLE: StringField<JobRequisition> = new StringField('custGlobalJobTitle', JobRequisition, 'Edm.String');
  /**
   * Static representation of the [[custHoursPerWeek]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUST_HOURS_PER_WEEK: StringField<JobRequisition> = new StringField('custHoursPerWeek', JobRequisition, 'Edm.String');
  /**
   * Static representation of the [[custInstrAssessments]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUST_INSTR_ASSESSMENTS: StringField<JobRequisition> = new StringField('custInstrAssessments', JobRequisition, 'Edm.String');
  /**
   * Static representation of the [[custInstrCountryFields]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUST_INSTR_COUNTRY_FIELDS: StringField<JobRequisition> = new StringField('custInstrCountryFields', JobRequisition, 'Edm.String');
  /**
   * Static representation of the [[custInstrFadv]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUST_INSTR_FADV: StringField<JobRequisition> = new StringField('custInstrFADV', JobRequisition, 'Edm.String');
  /**
   * Static representation of the [[custInstrJobPosting]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUST_INSTR_JOB_POSTING: StringField<JobRequisition> = new StringField('custInstrJobPosting', JobRequisition, 'Edm.String');
  /**
   * Static representation of the [[custInstrPosMgmt]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUST_INSTR_POS_MGMT: StringField<JobRequisition> = new StringField('custInstrPosMgmt', JobRequisition, 'Edm.String');
  /**
   * Static representation of the [[custInstrReqDetails]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUST_INSTR_REQ_DETAILS: StringField<JobRequisition> = new StringField('custInstrReqDetails', JobRequisition, 'Edm.String');
  /**
   * Static representation of the [[custInstrTeamDetails]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUST_INSTR_TEAM_DETAILS: StringField<JobRequisition> = new StringField('custInstrTeamDetails', JobRequisition, 'Edm.String');
  /**
   * Static representation of the [[customComments]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOM_COMMENTS: StringField<JobRequisition> = new StringField('customComments', JobRequisition, 'Edm.String');
  /**
   * Static representation of the [[defaultLanguage]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEFAULT_LANGUAGE: StringField<JobRequisition> = new StringField('defaultLanguage', JobRequisition, 'Edm.String');
  /**
   * Static representation of the [[deleted]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DELETED: StringField<JobRequisition> = new StringField('deleted', JobRequisition, 'Edm.String');
  /**
   * Static representation of the [[departmentObjCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEPARTMENT_OBJ_CODE: StringField<JobRequisition> = new StringField('department_obj_code', JobRequisition, 'Edm.String');
  /**
   * Static representation of the [[divisionObjCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DIVISION_OBJ_CODE: StringField<JobRequisition> = new StringField('division_obj_code', JobRequisition, 'Edm.String');
  /**
   * Static representation of the [[eeoGroup]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EEO_GROUP: StringField<JobRequisition> = new StringField('eeoGroup', JobRequisition, 'Edm.String');
  /**
   * Static representation of the [[eeoJobCat]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EEO_JOB_CAT: StringField<JobRequisition> = new StringField('eeoJobCat', JobRequisition, 'Edm.String');
  /**
   * Static representation of the [[erpAmount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ERP_AMOUNT: BigNumberField<JobRequisition> = new BigNumberField('erpAmount', JobRequisition, 'Edm.Decimal');
  /**
   * Static representation of the [[flsa]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FLSA: StringField<JobRequisition> = new StringField('flsa', JobRequisition, 'Edm.String');
  /**
   * Static representation of the [[formDataId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_DATA_ID: BigNumberField<JobRequisition> = new BigNumberField('formDataId', JobRequisition, 'Edm.Int64');
  /**
   * Static representation of the [[formDueDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_DUE_DATE: DateField<JobRequisition> = new DateField('formDueDate', JobRequisition, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[instrInternalComments]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INSTR_INTERNAL_COMMENTS: StringField<JobRequisition> = new StringField('instrInternalComments', JobRequisition, 'Edm.String');
  /**
   * Static representation of the [[intEndDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INT_END_DATE: DateField<JobRequisition> = new DateField('intEndDate', JobRequisition, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[intStartDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INT_START_DATE: DateField<JobRequisition> = new DateField('intStartDate', JobRequisition, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[internalStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INTERNAL_STATUS: StringField<JobRequisition> = new StringField('internalStatus', JobRequisition, 'Edm.String');
  /**
   * Static representation of the [[intrPosting]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INTR_POSTING: StringField<JobRequisition> = new StringField('intrPosting', JobRequisition, 'Edm.String');
  /**
   * Static representation of the [[intranetPosting]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INTRANET_POSTING: BooleanField<JobRequisition> = new BooleanField('intranetPosting', JobRequisition, 'Edm.Boolean');
  /**
   * Static representation of the [[isDraft]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_DRAFT: BooleanField<JobRequisition> = new BooleanField('isDraft', JobRequisition, 'Edm.Boolean');
  /**
   * Static representation of the [[jobCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_CODE: StringField<JobRequisition> = new StringField('jobCode', JobRequisition, 'Edm.String');
  /**
   * Static representation of the [[jobGrade]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_GRADE: StringField<JobRequisition> = new StringField('jobGrade', JobRequisition, 'Edm.String');
  /**
   * Static representation of the [[jobLevel]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_LEVEL: StringField<JobRequisition> = new StringField('jobLevel', JobRequisition, 'Edm.String');
  /**
   * Static representation of the [[jobReqGuId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_REQ_GU_ID: StringField<JobRequisition> = new StringField('jobReqGUId', JobRequisition, 'Edm.String');
  /**
   * Static representation of the [[jobReqId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_REQ_ID: BigNumberField<JobRequisition> = new BigNumberField('jobReqId', JobRequisition, 'Edm.Int64');
  /**
   * Static representation of the [[jobRole]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_ROLE: StringField<JobRequisition> = new StringField('jobRole', JobRequisition, 'Edm.String');
  /**
   * Static representation of the [[jobStartDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_START_DATE: DateField<JobRequisition> = new DateField('jobStartDate', JobRequisition, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<JobRequisition> = new StringField('lastModifiedBy', JobRequisition, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<JobRequisition> = new DateField('lastModifiedDateTime', JobRequisition, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[lastModifiedProxyUserId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_PROXY_USER_ID: StringField<JobRequisition> = new StringField('lastModifiedProxyUserId', JobRequisition, 'Edm.String');
  /**
   * Static representation of the [[legalEntityObjCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LEGAL_ENTITY_OBJ_CODE: StringField<JobRequisition> = new StringField('legalEntity_obj_code', JobRequisition, 'Edm.String');
  /**
   * Static representation of the [[locationObjCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LOCATION_OBJ_CODE: StringField<JobRequisition> = new StringField('location_obj_code', JobRequisition, 'Edm.String');
  /**
   * Static representation of the [[numberOpenings]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NUMBER_OPENINGS: BigNumberField<JobRequisition> = new BigNumberField('numberOpenings', JobRequisition, 'Edm.Decimal');
  /**
   * Static representation of the [[openingsFilled]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OPENINGS_FILLED: BigNumberField<JobRequisition> = new BigNumberField('openingsFilled', JobRequisition, 'Edm.Int64');
  /**
   * Static representation of the [[overallScaleName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OVERALL_SCALE_NAME: StringField<JobRequisition> = new StringField('overallScaleName', JobRequisition, 'Edm.String');
  /**
   * Static representation of the [[parentJobReqId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PARENT_JOB_REQ_ID: BigNumberField<JobRequisition> = new BigNumberField('parentJobReqId', JobRequisition, 'Edm.Int64');
  /**
   * Static representation of the [[positionNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const POSITION_NUMBER: StringField<JobRequisition> = new StringField('positionNumber', JobRequisition, 'Edm.String');
  /**
   * Static representation of the [[ratedApplicantCount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RATED_APPLICANT_COUNT: BigNumberField<JobRequisition> = new BigNumberField('ratedApplicantCount', JobRequisition, 'Edm.Int64');
  /**
   * Static representation of the [[restorecoordinatorTeamAdminDefaults]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RESTORECOORDINATOR_TEAM_ADMIN_DEFAULTS: BooleanField<JobRequisition> = new BooleanField('restorecoordinatorTeamAdminDefaults', JobRequisition, 'Edm.Boolean');
  /**
   * Static representation of the [[restorehiringManagerTeamAdminDefaults]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RESTOREHIRING_MANAGER_TEAM_ADMIN_DEFAULTS: BooleanField<JobRequisition> = new BooleanField('restorehiringManagerTeamAdminDefaults', JobRequisition, 'Edm.Boolean');
  /**
   * Static representation of the [[restorerecruiterTeamAdminDefaults]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RESTORERECRUITER_TEAM_ADMIN_DEFAULTS: BooleanField<JobRequisition> = new BooleanField('restorerecruiterTeamAdminDefaults', JobRequisition, 'Edm.Boolean');
  /**
   * Static representation of the [[restoresecondRecruiterTeamAdminDefaults]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RESTORESECOND_RECRUITER_TEAM_ADMIN_DEFAULTS: BooleanField<JobRequisition> = new BooleanField('restoresecondRecruiterTeamAdminDefaults', JobRequisition, 'Edm.Boolean');
  /**
   * Static representation of the [[restoresourcerTeamAdminDefaults]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RESTORESOURCER_TEAM_ADMIN_DEFAULTS: BooleanField<JobRequisition> = new BooleanField('restoresourcerTeamAdminDefaults', JobRequisition, 'Edm.Boolean');
  /**
   * Static representation of the [[restorevTeamAdminDefaults]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RESTOREV_TEAM_ADMIN_DEFAULTS: BooleanField<JobRequisition> = new BooleanField('restorevTeamAdminDefaults', JobRequisition, 'Edm.Boolean');
  /**
   * Static representation of the [[restorevpOfStaffingTeamAdminDefaults]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RESTOREVP_OF_STAFFING_TEAM_ADMIN_DEFAULTS: BooleanField<JobRequisition> = new BooleanField('restorevpOfStaffingTeamAdminDefaults', JobRequisition, 'Edm.Boolean');
  /**
   * Static representation of the [[reverseScale]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REVERSE_SCALE: StringField<JobRequisition> = new StringField('reverseScale', JobRequisition, 'Edm.String');
  /**
   * Static representation of the [[salaryMax]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALARY_MAX: BigNumberField<JobRequisition> = new BigNumberField('salaryMax', JobRequisition, 'Edm.Decimal');
  /**
   * Static representation of the [[salaryMid]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALARY_MID: BigNumberField<JobRequisition> = new BigNumberField('salaryMid', JobRequisition, 'Edm.Decimal');
  /**
   * Static representation of the [[salaryMin]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALARY_MIN: BigNumberField<JobRequisition> = new BigNumberField('salaryMin', JobRequisition, 'Edm.Decimal');
  /**
   * Static representation of the [[statusSetId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS_SET_ID: BigNumberField<JobRequisition> = new BigNumberField('statusSetId', JobRequisition, 'Edm.Int64');
  /**
   * Static representation of the [[templateId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TEMPLATE_ID: BigNumberField<JobRequisition> = new BigNumberField('templateId', JobRequisition, 'Edm.Int64');
  /**
   * Static representation of the [[templateName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TEMPLATE_NAME: StringField<JobRequisition> = new StringField('templateName', JobRequisition, 'Edm.String');
  /**
   * Static representation of the [[templateType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TEMPLATE_TYPE: StringField<JobRequisition> = new StringField('templateType', JobRequisition, 'Edm.String');
  /**
   * Static representation of the [[timeToFill]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TIME_TO_FILL: NumberField<JobRequisition> = new NumberField('timeToFill', JobRequisition, 'Edm.Double');
  /**
   * Static representation of the one-to-many navigation property [[approver]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const APPROVER: Link<JobRequisition, JobRequisitionOperator> = new Link('approver', JobRequisition, JobRequisitionOperator);
  /**
   * Static representation of the one-to-many navigation property [[assessment]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ASSESSMENT: Link<JobRequisition, JobRequisitionAssessment> = new Link('assessment', JobRequisition, JobRequisitionAssessment);
  /**
   * Static representation of the one-to-one navigation property [[businessUnitObj]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_UNIT_OBJ: OneToOneLink<JobRequisition, FoBusinessUnit> = new OneToOneLink('businessUnit_obj', JobRequisition, FoBusinessUnit);
  /**
   * Static representation of the one-to-many navigation property [[competencies]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMPETENCIES: Link<JobRequisition, RcmCompetency> = new Link('competencies', JobRequisition, RcmCompetency);
  /**
   * Static representation of the one-to-many navigation property [[coordinator]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COORDINATOR: Link<JobRequisition, JobRequisitionOperator> = new Link('coordinator', JobRequisition, JobRequisitionOperator);
  /**
   * Static representation of the one-to-many navigation property [[coordinatorTeam]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COORDINATOR_TEAM: Link<JobRequisition, JobRequisitionOperator> = new Link('coordinatorTeam', JobRequisition, JobRequisitionOperator);
  /**
   * Static representation of the one-to-many navigation property [[coordinatorTeamGroup]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COORDINATOR_TEAM_GROUP: Link<JobRequisition, JobRequisitionGroupOperator> = new Link('coordinatorTeamGroup', JobRequisition, JobRequisitionGroupOperator);
  /**
   * Static representation of the one-to-one navigation property [[costCenterObj]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COST_CENTER_OBJ: OneToOneLink<JobRequisition, FoCostCenter> = new OneToOneLink('costCenter_obj', JobRequisition, FoCostCenter);
  /**
   * Static representation of the one-to-many navigation property [[currentOwner]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CURRENT_OWNER: Link<JobRequisition, JobRequisitionOperator> = new Link('currentOwner', JobRequisition, JobRequisitionOperator);
  /**
   * Static representation of the one-to-many navigation property [[custDuration]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUST_DURATION: Link<JobRequisition, PicklistOption> = new Link('custDuration', JobRequisition, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[departmentObj]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEPARTMENT_OBJ: OneToOneLink<JobRequisition, FoDepartment> = new OneToOneLink('department_obj', JobRequisition, FoDepartment);
  /**
   * Static representation of the one-to-one navigation property [[divisionObj]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DIVISION_OBJ: OneToOneLink<JobRequisition, FoDivision> = new OneToOneLink('division_obj', JobRequisition, FoDivision);
  /**
   * Static representation of the one-to-many navigation property [[filter1]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FILTER_1: Link<JobRequisition, PicklistOption> = new Link('filter1', JobRequisition, PicklistOption);
  /**
   * Static representation of the one-to-many navigation property [[filter3]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FILTER_3: Link<JobRequisition, PicklistOption> = new Link('filter3', JobRequisition, PicklistOption);
  /**
   * Static representation of the one-to-many navigation property [[filter4]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FILTER_4: Link<JobRequisition, PicklistOption> = new Link('filter4', JobRequisition, PicklistOption);
  /**
   * Static representation of the one-to-many navigation property [[hardstopStatus]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HARDSTOP_STATUS: Link<JobRequisition, PicklistOption> = new Link('hardstopStatus', JobRequisition, PicklistOption);
  /**
   * Static representation of the one-to-many navigation property [[hiringManager]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HIRING_MANAGER: Link<JobRequisition, JobRequisitionOperator> = new Link('hiringManager', JobRequisition, JobRequisitionOperator);
  /**
   * Static representation of the one-to-many navigation property [[hiringManagerTeam]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HIRING_MANAGER_TEAM: Link<JobRequisition, JobRequisitionOperator> = new Link('hiringManagerTeam', JobRequisition, JobRequisitionOperator);
  /**
   * Static representation of the one-to-many navigation property [[hiringManagerTeamGroup]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HIRING_MANAGER_TEAM_GROUP: Link<JobRequisition, JobRequisitionGroupOperator> = new Link('hiringManagerTeamGroup', JobRequisition, JobRequisitionGroupOperator);
  /**
   * Static representation of the one-to-many navigation property [[interviewGuide]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INTERVIEW_GUIDE: Link<JobRequisition, Attachment> = new Link('interviewGuide', JobRequisition, Attachment);
  /**
   * Static representation of the one-to-many navigation property [[jobAnalyzerReportingData]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_ANALYZER_REPORTING_DATA: Link<JobRequisition, JobAnalyzerReportingData> = new Link('jobAnalyzerReportingData', JobRequisition, JobAnalyzerReportingData);
  /**
   * Static representation of the one-to-many navigation property [[jobApplications]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_APPLICATIONS: Link<JobRequisition, JobApplication> = new Link('jobApplications', JobRequisition, JobApplication);
  /**
   * Static representation of the one-to-one navigation property [[jobProfile]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_PROFILE: OneToOneLink<JobRequisition, JobProfile> = new OneToOneLink('jobProfile', JobRequisition, JobProfile);
  /**
   * Static representation of the one-to-many navigation property [[jobReqFwdCandidates]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_REQ_FWD_CANDIDATES: Link<JobRequisition, JobReqFwdCandidates> = new Link('jobReqFwdCandidates', JobRequisition, JobReqFwdCandidates);
  /**
   * Static representation of the one-to-many navigation property [[jobReqLocale]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_REQ_LOCALE: Link<JobRequisition, JobRequisitionLocale> = new Link('jobReqLocale', JobRequisition, JobRequisitionLocale);
  /**
   * Static representation of the one-to-one navigation property [[jobReqPermissionsNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_REQ_PERMISSIONS_NAV: OneToOneLink<JobRequisition, JobRequisitionFieldControls> = new OneToOneLink('jobReqPermissionsNav', JobRequisition, JobRequisitionFieldControls);
  /**
   * Static representation of the one-to-many navigation property [[jobReqPostings]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_REQ_POSTINGS: Link<JobRequisition, JobRequisitionPosting> = new Link('jobReqPostings', JobRequisition, JobRequisitionPosting);
  /**
   * Static representation of the one-to-many navigation property [[jobReqScreeningQuestions]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_REQ_SCREENING_QUESTIONS: Link<JobRequisition, JobReqScreeningQuestion> = new Link('jobReqScreeningQuestions', JobRequisition, JobReqScreeningQuestion);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<JobRequisition, User> = new OneToOneLink('lastModifiedByNav', JobRequisition, User);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedProxyUserNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_PROXY_USER_NAV: OneToOneLink<JobRequisition, User> = new OneToOneLink('lastModifiedProxyUserNav', JobRequisition, User);
  /**
   * Static representation of the one-to-one navigation property [[legalEntityObj]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LEGAL_ENTITY_OBJ: OneToOneLink<JobRequisition, FoCompany> = new OneToOneLink('legalEntity_obj', JobRequisition, FoCompany);
  /**
   * Static representation of the one-to-many navigation property [[locationObj]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LOCATION_OBJ: Link<JobRequisition, FoLocation> = new Link('location_obj', JobRequisition, FoLocation);
  /**
   * Static representation of the one-to-many navigation property [[locationObjlist]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LOCATION_OBJLIST: Link<JobRequisition, JobReqFoLocation> = new Link('location_objlist', JobRequisition, JobReqFoLocation);
  /**
   * Static representation of the one-to-many navigation property [[mfield1]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MFIELD_1: Link<JobRequisition, PicklistOption> = new Link('mfield1', JobRequisition, PicklistOption);
  /**
   * Static representation of the one-to-many navigation property [[mfield2]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MFIELD_2: Link<JobRequisition, PicklistOption> = new Link('mfield2', JobRequisition, PicklistOption);
  /**
   * Static representation of the one-to-many navigation property [[originator]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ORIGINATOR: Link<JobRequisition, JobRequisitionOperator> = new Link('originator', JobRequisition, JobRequisitionOperator);
  /**
   * Static representation of the one-to-many navigation property [[questions]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const QUESTIONS: Link<JobRequisition, JobReqQuestion> = new Link('questions', JobRequisition, JobReqQuestion);
  /**
   * Static representation of the one-to-many navigation property [[recruiter]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RECRUITER: Link<JobRequisition, JobRequisitionOperator> = new Link('recruiter', JobRequisition, JobRequisitionOperator);
  /**
   * Static representation of the one-to-many navigation property [[recruiterTeam]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RECRUITER_TEAM: Link<JobRequisition, JobRequisitionOperator> = new Link('recruiterTeam', JobRequisition, JobRequisitionOperator);
  /**
   * Static representation of the one-to-many navigation property [[recruiterTeamGroup]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RECRUITER_TEAM_GROUP: Link<JobRequisition, JobRequisitionGroupOperator> = new Link('recruiterTeamGroup', JobRequisition, JobRequisitionGroupOperator);
  /**
   * Static representation of the one-to-one navigation property [[routeMap]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ROUTE_MAP: OneToOneLink<JobRequisition, FormRouteMap> = new OneToOneLink('routeMap', JobRequisition, FormRouteMap);
  /**
   * Static representation of the one-to-many navigation property [[secondRecruiter]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SECOND_RECRUITER: Link<JobRequisition, JobRequisitionOperator> = new Link('secondRecruiter', JobRequisition, JobRequisitionOperator);
  /**
   * Static representation of the one-to-many navigation property [[secondRecruiterTeam]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SECOND_RECRUITER_TEAM: Link<JobRequisition, JobRequisitionOperator> = new Link('secondRecruiterTeam', JobRequisition, JobRequisitionOperator);
  /**
   * Static representation of the one-to-many navigation property [[secondRecruiterTeamGroup]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SECOND_RECRUITER_TEAM_GROUP: Link<JobRequisition, JobRequisitionGroupOperator> = new Link('secondRecruiterTeamGroup', JobRequisition, JobRequisitionGroupOperator);
  /**
   * Static representation of the one-to-many navigation property [[sourcer]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SOURCER: Link<JobRequisition, JobRequisitionOperator> = new Link('sourcer', JobRequisition, JobRequisitionOperator);
  /**
   * Static representation of the one-to-many navigation property [[sourcerTeam]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SOURCER_TEAM: Link<JobRequisition, JobRequisitionOperator> = new Link('sourcerTeam', JobRequisition, JobRequisitionOperator);
  /**
   * Static representation of the one-to-many navigation property [[sourcerTeamGroup]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SOURCER_TEAM_GROUP: Link<JobRequisition, JobRequisitionGroupOperator> = new Link('sourcerTeamGroup', JobRequisition, JobRequisitionGroupOperator);
  /**
   * Static representation of the one-to-many navigation property [[status]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS: Link<JobRequisition, PicklistOption> = new Link('status', JobRequisition, PicklistOption);
  /**
   * Static representation of the one-to-many navigation property [[vTeam]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const V_TEAM: Link<JobRequisition, JobRequisitionOperator> = new Link('vTeam', JobRequisition, JobRequisitionOperator);
  /**
   * Static representation of the one-to-many navigation property [[vTeamGroup]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const V_TEAM_GROUP: Link<JobRequisition, JobRequisitionGroupOperator> = new Link('vTeamGroup', JobRequisition, JobRequisitionGroupOperator);
  /**
   * Static representation of the one-to-many navigation property [[vpOfStaffing]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VP_OF_STAFFING: Link<JobRequisition, JobRequisitionOperator> = new Link('vpOfStaffing', JobRequisition, JobRequisitionOperator);
  /**
   * Static representation of the one-to-many navigation property [[vpOfStaffingTeam]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VP_OF_STAFFING_TEAM: Link<JobRequisition, JobRequisitionOperator> = new Link('vpOfStaffingTeam', JobRequisition, JobRequisitionOperator);
  /**
   * Static representation of the one-to-many navigation property [[vpOfStaffingTeamGroup]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VP_OF_STAFFING_TEAM_GROUP: Link<JobRequisition, JobRequisitionGroupOperator> = new Link('vpOfStaffingTeamGroup', JobRequisition, JobRequisitionGroupOperator);
  /**
   * All fields of the JobRequisition entity.
   */
  export const _allFields: Array<BigNumberField<JobRequisition> | StringField<JobRequisition> | DateField<JobRequisition> | BooleanField<JobRequisition> | NumberField<JobRequisition> | Link<JobRequisition, JobRequisitionOperator> | Link<JobRequisition, JobRequisitionAssessment> | OneToOneLink<JobRequisition, FoBusinessUnit> | Link<JobRequisition, RcmCompetency> | Link<JobRequisition, JobRequisitionGroupOperator> | OneToOneLink<JobRequisition, FoCostCenter> | Link<JobRequisition, PicklistOption> | OneToOneLink<JobRequisition, FoDepartment> | OneToOneLink<JobRequisition, FoDivision> | Link<JobRequisition, Attachment> | Link<JobRequisition, JobAnalyzerReportingData> | Link<JobRequisition, JobApplication> | OneToOneLink<JobRequisition, JobProfile> | Link<JobRequisition, JobReqFwdCandidates> | Link<JobRequisition, JobRequisitionLocale> | OneToOneLink<JobRequisition, JobRequisitionFieldControls> | Link<JobRequisition, JobRequisitionPosting> | Link<JobRequisition, JobReqScreeningQuestion> | OneToOneLink<JobRequisition, User> | OneToOneLink<JobRequisition, FoCompany> | Link<JobRequisition, FoLocation> | Link<JobRequisition, JobReqFoLocation> | Link<JobRequisition, JobReqQuestion> | OneToOneLink<JobRequisition, FormRouteMap>> = [
    JobRequisition.AGE,
    JobRequisition.APP_TEMPLATE_ID,
    JobRequisition.ASSESS_RATING_SCALE_NAME,
    JobRequisition.BUSINESS_UNIT_OBJ_CODE,
    JobRequisition.CANDIDATE_HIRED,
    JobRequisition.CANDIDATE_PROGRESS,
    JobRequisition.CLOSED_DATE_TIME,
    JobRequisition.CORPORATE_POSTING,
    JobRequisition.COST_CENTER_OBJ_CODE,
    JobRequisition.COUNTRY,
    JobRequisition.CREATED_DATE_TIME,
    JobRequisition.CURRENCY,
    JobRequisition.CUST_EMPLOYEE_CLASS,
    JobRequisition.CUST_FTE,
    JobRequisition.CUST_GLOBAL_JOB_TITLE,
    JobRequisition.CUST_HOURS_PER_WEEK,
    JobRequisition.CUST_INSTR_ASSESSMENTS,
    JobRequisition.CUST_INSTR_COUNTRY_FIELDS,
    JobRequisition.CUST_INSTR_FADV,
    JobRequisition.CUST_INSTR_JOB_POSTING,
    JobRequisition.CUST_INSTR_POS_MGMT,
    JobRequisition.CUST_INSTR_REQ_DETAILS,
    JobRequisition.CUST_INSTR_TEAM_DETAILS,
    JobRequisition.CUSTOM_COMMENTS,
    JobRequisition.DEFAULT_LANGUAGE,
    JobRequisition.DELETED,
    JobRequisition.DEPARTMENT_OBJ_CODE,
    JobRequisition.DIVISION_OBJ_CODE,
    JobRequisition.EEO_GROUP,
    JobRequisition.EEO_JOB_CAT,
    JobRequisition.ERP_AMOUNT,
    JobRequisition.FLSA,
    JobRequisition.FORM_DATA_ID,
    JobRequisition.FORM_DUE_DATE,
    JobRequisition.INSTR_INTERNAL_COMMENTS,
    JobRequisition.INT_END_DATE,
    JobRequisition.INT_START_DATE,
    JobRequisition.INTERNAL_STATUS,
    JobRequisition.INTR_POSTING,
    JobRequisition.INTRANET_POSTING,
    JobRequisition.IS_DRAFT,
    JobRequisition.JOB_CODE,
    JobRequisition.JOB_GRADE,
    JobRequisition.JOB_LEVEL,
    JobRequisition.JOB_REQ_GU_ID,
    JobRequisition.JOB_REQ_ID,
    JobRequisition.JOB_ROLE,
    JobRequisition.JOB_START_DATE,
    JobRequisition.LAST_MODIFIED_BY,
    JobRequisition.LAST_MODIFIED_DATE_TIME,
    JobRequisition.LAST_MODIFIED_PROXY_USER_ID,
    JobRequisition.LEGAL_ENTITY_OBJ_CODE,
    JobRequisition.LOCATION_OBJ_CODE,
    JobRequisition.NUMBER_OPENINGS,
    JobRequisition.OPENINGS_FILLED,
    JobRequisition.OVERALL_SCALE_NAME,
    JobRequisition.PARENT_JOB_REQ_ID,
    JobRequisition.POSITION_NUMBER,
    JobRequisition.RATED_APPLICANT_COUNT,
    JobRequisition.RESTORECOORDINATOR_TEAM_ADMIN_DEFAULTS,
    JobRequisition.RESTOREHIRING_MANAGER_TEAM_ADMIN_DEFAULTS,
    JobRequisition.RESTORERECRUITER_TEAM_ADMIN_DEFAULTS,
    JobRequisition.RESTORESECOND_RECRUITER_TEAM_ADMIN_DEFAULTS,
    JobRequisition.RESTORESOURCER_TEAM_ADMIN_DEFAULTS,
    JobRequisition.RESTOREV_TEAM_ADMIN_DEFAULTS,
    JobRequisition.RESTOREVP_OF_STAFFING_TEAM_ADMIN_DEFAULTS,
    JobRequisition.REVERSE_SCALE,
    JobRequisition.SALARY_MAX,
    JobRequisition.SALARY_MID,
    JobRequisition.SALARY_MIN,
    JobRequisition.STATUS_SET_ID,
    JobRequisition.TEMPLATE_ID,
    JobRequisition.TEMPLATE_NAME,
    JobRequisition.TEMPLATE_TYPE,
    JobRequisition.TIME_TO_FILL,
    JobRequisition.APPROVER,
    JobRequisition.ASSESSMENT,
    JobRequisition.BUSINESS_UNIT_OBJ,
    JobRequisition.COMPETENCIES,
    JobRequisition.COORDINATOR,
    JobRequisition.COORDINATOR_TEAM,
    JobRequisition.COORDINATOR_TEAM_GROUP,
    JobRequisition.COST_CENTER_OBJ,
    JobRequisition.CURRENT_OWNER,
    JobRequisition.CUST_DURATION,
    JobRequisition.DEPARTMENT_OBJ,
    JobRequisition.DIVISION_OBJ,
    JobRequisition.FILTER_1,
    JobRequisition.FILTER_3,
    JobRequisition.FILTER_4,
    JobRequisition.HARDSTOP_STATUS,
    JobRequisition.HIRING_MANAGER,
    JobRequisition.HIRING_MANAGER_TEAM,
    JobRequisition.HIRING_MANAGER_TEAM_GROUP,
    JobRequisition.INTERVIEW_GUIDE,
    JobRequisition.JOB_ANALYZER_REPORTING_DATA,
    JobRequisition.JOB_APPLICATIONS,
    JobRequisition.JOB_PROFILE,
    JobRequisition.JOB_REQ_FWD_CANDIDATES,
    JobRequisition.JOB_REQ_LOCALE,
    JobRequisition.JOB_REQ_PERMISSIONS_NAV,
    JobRequisition.JOB_REQ_POSTINGS,
    JobRequisition.JOB_REQ_SCREENING_QUESTIONS,
    JobRequisition.LAST_MODIFIED_BY_NAV,
    JobRequisition.LAST_MODIFIED_PROXY_USER_NAV,
    JobRequisition.LEGAL_ENTITY_OBJ,
    JobRequisition.LOCATION_OBJ,
    JobRequisition.LOCATION_OBJLIST,
    JobRequisition.MFIELD_1,
    JobRequisition.MFIELD_2,
    JobRequisition.ORIGINATOR,
    JobRequisition.QUESTIONS,
    JobRequisition.RECRUITER,
    JobRequisition.RECRUITER_TEAM,
    JobRequisition.RECRUITER_TEAM_GROUP,
    JobRequisition.ROUTE_MAP,
    JobRequisition.SECOND_RECRUITER,
    JobRequisition.SECOND_RECRUITER_TEAM,
    JobRequisition.SECOND_RECRUITER_TEAM_GROUP,
    JobRequisition.SOURCER,
    JobRequisition.SOURCER_TEAM,
    JobRequisition.SOURCER_TEAM_GROUP,
    JobRequisition.STATUS,
    JobRequisition.V_TEAM,
    JobRequisition.V_TEAM_GROUP,
    JobRequisition.VP_OF_STAFFING,
    JobRequisition.VP_OF_STAFFING_TEAM,
    JobRequisition.VP_OF_STAFFING_TEAM_GROUP
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<JobRequisition> = new AllFields('*', JobRequisition);
  /**
   * All key fields of the JobRequisition entity.
   */
  export const _keyFields: Array<Selectable<JobRequisition>> = [JobRequisition.JOB_REQ_ID];
  /**
   * Mapping of all key field names to the respective static field property JobRequisition.
   */
  export const _keys: { [keys: string]: Selectable<JobRequisition> } = JobRequisition._keyFields.reduce((acc: { [keys: string]: Selectable<JobRequisition> }, field: Selectable<JobRequisition>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
