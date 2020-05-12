/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { JobReqTemplate_Standard_Job_RequisitionRequestBuilder } from './JobReqTemplate_Standard_Job_RequisitionRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "JobReqTemplate_Standard_Job_Requisition" of service "SFOData".
 */
export class JobReqTemplate_Standard_Job_Requisition extends Entity implements JobReqTemplate_Standard_Job_RequisitionType {
  /**
   * Technical entity name for JobReqTemplate_Standard_Job_Requisition.
   */
  static _entityName = 'JobReqTemplate_Standard_Job_Requisition';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for JobReqTemplate_Standard_Job_Requisition.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Agency Posting.
   * @nullable
   */
  agencyPosting?: boolean;
  /**
   * Assessments.
   * @nullable
   */
  assessment?: string;
  /**
   * Business Unit Code.
   * @nullable
   */
  businessUnitObjCode?: string;
  /**
   * Candidate Hired.
   * @nullable
   */
  candidateHired?: BigNumber;
  /**
   * Service Center Email.
   * @nullable
   */
  coordinatorEmail?: string;
  /**
   * Service Center Fax.
   * @nullable
   */
  coordinatorFax?: string;
  /**
   * Service Center Phone.
   * @nullable
   */
  coordinatorPhone?: string;
  /**
   * External.
   * @nullable
   */
  corporatePosting?: boolean;
  /**
   * Cost Center Code.
   * @nullable
   */
  costCenterObjCode?: string;
  /**
   * Position Country.
   */
  country!: string;
  /**
   * Currency.
   */
  currency!: string;
  /**
   * Employee Class.
   * @nullable
   */
  custEmployeeClass?: string;
  /**
   * FTE.
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
   * Position Information.
   * @nullable
   */
  custInstrPosMgmt?: string;
  /**
   * Requisition Information.
   * @nullable
   */
  custInstrReqDetails?: string;
  /**
   * Hiring Team Information.
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
   * EEO Category.
   * @nullable
   */
  eeoJobCat?: string;
  /**
   * End.
   * @nullable
   */
  end?: Moment;
  /**
   * ERP Amount.
   * @nullable
   */
  erpAmount?: BigNumber;
  /**
   * Integrations External End Date.
   * @nullable
   */
  extEndDate?: Moment;
  /**
   * External Description Footer.
   * @nullable
   */
  extJobDescFooter?: string;
  /**
   * External Description Header.
   * @nullable
   */
  extJobDescHeader?: string;
  /**
   * External Description.
   */
  extListingLayout!: string;
  /**
   * Integrations External Start Date.
   * @nullable
   */
  extStartDate?: Moment;
  /**
   * External Title.
   */
  extTitle!: string;
  /**
   * External Private Posting.
   * @nullable
   */
  externalPrivatePosting?: boolean;
  /**
   * First Advantage.
   * @nullable
   */
  fadvAccountPackage?: string;
  /**
   * FLSA Status.
   * @nullable
   */
  flsa?: string;
  /**
   * Form Due Date.
   * @nullable
   */
  formDueDate?: Moment;
  /**
   * Hiring Manager Email.
   * @nullable
   */
  hiringManagerEmail?: string;
  /**
   * Hiring Manager Fax.
   * @nullable
   */
  hiringManagerFax?: string;
  /**
   * Hiring Manager Phone.
   * @nullable
   */
  hiringManagerPhone?: string;
  /**
   * Requisition ID.
   */
  id!: string;
  /**
   * Internal Information.
   * @nullable
   */
  instrInternalComments?: string;
  /**
   * Integrations Internal End Date.
   * @nullable
   */
  intEndDate?: Moment;
  /**
   * Internal Description Footer.
   * @nullable
   */
  intJobDescFooter?: string;
  /**
   * Internal Description Header.
   * @nullable
   */
  intJobDescHeader?: string;
  /**
   * Integrations Internal Start Date.
   * @nullable
   */
  intStartDate?: Moment;
  /**
   * Posting Location Information.
   * @nullable
   */
  intrPosting?: string;
  /**
   * Internal.
   * @nullable
   */
  intranetPosting?: boolean;
  /**
   * Internal Private Posting.
   * @nullable
   */
  intranetPrivatePosting?: boolean;
  /**
   * Job Code.
   */
  jobCode!: string;
  /**
   * Job Grade.
   */
  jobGrade!: string;
  /**
   * Job Level.
   * @nullable
   */
  jobLevel?: string;
  /**
   * Post Job in Languages (s).
   * @nullable
   */
  jobPostLanguage?: string;
  /**
   * Job Role.
   * @nullable
   */
  jobRole?: string;
  /**
   * Anticipated Start Date.
   */
  jobStartDate!: Moment;
  /**
   * Company Code.
   * @nullable
   */
  legalEntityObjCode?: string;
  /**
   * Internal Description.
   */
  listingLayout!: string;
  /**
   * Location Code.
   * @nullable
   */
  locationObjCode?: string;
  /**
   * Number of Openings.
   */
  numberOpenings!: BigNumber;
  /**
   * Position Number.
   */
  positionNumber!: string;
  /**
   * Questions.
   * @nullable
   */
  questions?: string;
  /**
   * Recruiter Email.
   * @nullable
   */
  recruiterEmail?: string;
  /**
   * Recruiter Fax.
   * @nullable
   */
  recruiterFax?: string;
  /**
   * Recruiter Phone.
   * @nullable
   */
  recruiterPhone?: string;
  /**
   * Salary Max.
   * @nullable
   */
  salaryMax?: BigNumber;
  /**
   * Salary Mid.
   * @nullable
   */
  salaryMid?: BigNumber;
  /**
   * Salary Min.
   * @nullable
   */
  salaryMin?: BigNumber;
  /**
   * Recruiting Team Lead Email.
   * @nullable
   */
  secondRecruiterEmail?: string;
  /**
   * Recruiting Team Lead Fax.
   * @nullable
   */
  secondRecruiterFax?: string;
  /**
   * Recruiting Team Lead Phone.
   * @nullable
   */
  secondRecruiterPhone?: string;
  /**
   * Sourcer Email.
   * @nullable
   */
  sourcerEmail?: string;
  /**
   * Sourcer Fax.
   * @nullable
   */
  sourcerFax?: string;
  /**
   * Sourcer Phone.
   * @nullable
   */
  sourcerPhone?: string;
  /**
   * Start.
   * @nullable
   */
  start?: Moment;
  /**
   * Template Id.
   */
  templateId!: BigNumber;
  /**
   * Internal Title.
   */
  title!: string;
  /**
   * Recruiting Admin Email.
   * @nullable
   */
  vpOfStaffingEmail?: string;
  /**
   * Recruiting Admin Fax.
   * @nullable
   */
  vpOfStaffingFax?: string;
  /**
   * Recruiting Admin Phone.
   * @nullable
   */
  vpOfStaffingPhone?: string;
  /**
   * One-to-one navigation property to the [[FoBusinessUnit]] entity.
   */
  businessUnitObj!: FoBusinessUnit;
  /**
   * One-to-many navigation property to the [[JobRequisitionOperator]] entity.
   */
  coordinatorName!: JobRequisitionOperator[];
  /**
   * One-to-many navigation property to the [[JobRequisitionOperator]] entity.
   */
  coordinatorTeam!: JobRequisitionOperator[];
  /**
   * One-to-one navigation property to the [[FoCostCenter]] entity.
   */
  costCenterObj!: FoCostCenter;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  custDuration!: PicklistOption;
  /**
   * One-to-one navigation property to the [[FoDepartment]] entity.
   */
  departmentObj!: FoDepartment;
  /**
   * One-to-one navigation property to the [[FoDivision]] entity.
   */
  divisionObj!: FoDivision;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  filter1!: PicklistOption;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  filter3!: PicklistOption;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  filter4!: PicklistOption;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  hardstopStatus!: PicklistOption;
  /**
   * One-to-many navigation property to the [[JobRequisitionOperator]] entity.
   */
  hiringManagerName!: JobRequisitionOperator[];
  /**
   * One-to-many navigation property to the [[JobRequisitionOperator]] entity.
   */
  hiringManagerTeam!: JobRequisitionOperator[];
  /**
   * One-to-many navigation property to the [[Attachment]] entity.
   */
  interviewGuide!: Attachment[];
  /**
   * One-to-one navigation property to the [[FoCompany]] entity.
   */
  legalEntityObj!: FoCompany;
  /**
   * One-to-many navigation property to the [[FoLocation]] entity.
   */
  locationObj!: FoLocation[];
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  mfield1!: PicklistOption;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  mfield2!: PicklistOption;
  /**
   * One-to-many navigation property to the [[JobRequisitionOperator]] entity.
   */
  recruiterName!: JobRequisitionOperator[];
  /**
   * One-to-many navigation property to the [[JobRequisitionOperator]] entity.
   */
  recruiterTeam!: JobRequisitionOperator[];
  /**
   * One-to-many navigation property to the [[JobRequisitionOperator]] entity.
   */
  secondRecruiterName!: JobRequisitionOperator[];
  /**
   * One-to-many navigation property to the [[JobRequisitionOperator]] entity.
   */
  secondRecruiterTeam!: JobRequisitionOperator[];
  /**
   * One-to-many navigation property to the [[JobRequisitionOperator]] entity.
   */
  sourcerName!: JobRequisitionOperator[];
  /**
   * One-to-many navigation property to the [[JobRequisitionOperator]] entity.
   */
  sourcerTeam!: JobRequisitionOperator[];
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  status!: PicklistOption;
  /**
   * One-to-many navigation property to the [[JobRequisitionOperator]] entity.
   */
  vTeam!: JobRequisitionOperator[];
  /**
   * One-to-many navigation property to the [[JobRequisitionOperator]] entity.
   */
  vpOfStaffingName!: JobRequisitionOperator[];
  /**
   * One-to-many navigation property to the [[JobRequisitionOperator]] entity.
   */
  vpOfStaffingTeam!: JobRequisitionOperator[];

  /**
   * Returns an entity builder to construct instances `JobReqTemplate_Standard_Job_Requisition`.
   * @returns A builder that constructs instances of entity type `JobReqTemplate_Standard_Job_Requisition`.
   */
  static builder(): EntityBuilderType<JobReqTemplate_Standard_Job_Requisition, JobReqTemplate_Standard_Job_RequisitionTypeForceMandatory> {
    return Entity.entityBuilder(JobReqTemplate_Standard_Job_Requisition);
  }

  /**
   * Returns a request builder to construct requests for operations on the `JobReqTemplate_Standard_Job_Requisition` entity type.
   * @returns A `JobReqTemplate_Standard_Job_Requisition` request builder.
   */
  static requestBuilder(): JobReqTemplate_Standard_Job_RequisitionRequestBuilder {
    return new JobReqTemplate_Standard_Job_RequisitionRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobReqTemplate_Standard_Job_Requisition`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `JobReqTemplate_Standard_Job_Requisition`.
   */
  static customField(fieldName: string): CustomField<JobReqTemplate_Standard_Job_Requisition> {
    return Entity.customFieldSelector(fieldName, JobReqTemplate_Standard_Job_Requisition);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { FoBusinessUnit, FoBusinessUnitType } from './FoBusinessUnit';
import { JobRequisitionOperator, JobRequisitionOperatorType } from './JobRequisitionOperator';
import { FoCostCenter, FoCostCenterType } from './FoCostCenter';
import { PicklistOption, PicklistOptionType } from './PicklistOption';
import { FoDepartment, FoDepartmentType } from './FoDepartment';
import { FoDivision, FoDivisionType } from './FoDivision';
import { Attachment, AttachmentType } from './Attachment';
import { FoCompany, FoCompanyType } from './FoCompany';
import { FoLocation, FoLocationType } from './FoLocation';

export interface JobReqTemplate_Standard_Job_RequisitionType {
  agencyPosting?: boolean;
  assessment?: string;
  businessUnitObjCode?: string;
  candidateHired?: BigNumber;
  coordinatorEmail?: string;
  coordinatorFax?: string;
  coordinatorPhone?: string;
  corporatePosting?: boolean;
  costCenterObjCode?: string;
  country: string;
  currency: string;
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
  departmentObjCode?: string;
  divisionObjCode?: string;
  eeoGroup?: string;
  eeoJobCat?: string;
  end?: Moment;
  erpAmount?: BigNumber;
  extEndDate?: Moment;
  extJobDescFooter?: string;
  extJobDescHeader?: string;
  extListingLayout: string;
  extStartDate?: Moment;
  extTitle: string;
  externalPrivatePosting?: boolean;
  fadvAccountPackage?: string;
  flsa?: string;
  formDueDate?: Moment;
  hiringManagerEmail?: string;
  hiringManagerFax?: string;
  hiringManagerPhone?: string;
  id: string;
  instrInternalComments?: string;
  intEndDate?: Moment;
  intJobDescFooter?: string;
  intJobDescHeader?: string;
  intStartDate?: Moment;
  intrPosting?: string;
  intranetPosting?: boolean;
  intranetPrivatePosting?: boolean;
  jobCode: string;
  jobGrade: string;
  jobLevel?: string;
  jobPostLanguage?: string;
  jobRole?: string;
  jobStartDate: Moment;
  legalEntityObjCode?: string;
  listingLayout: string;
  locationObjCode?: string;
  numberOpenings: BigNumber;
  positionNumber: string;
  questions?: string;
  recruiterEmail?: string;
  recruiterFax?: string;
  recruiterPhone?: string;
  salaryMax?: BigNumber;
  salaryMid?: BigNumber;
  salaryMin?: BigNumber;
  secondRecruiterEmail?: string;
  secondRecruiterFax?: string;
  secondRecruiterPhone?: string;
  sourcerEmail?: string;
  sourcerFax?: string;
  sourcerPhone?: string;
  start?: Moment;
  templateId: BigNumber;
  title: string;
  vpOfStaffingEmail?: string;
  vpOfStaffingFax?: string;
  vpOfStaffingPhone?: string;
  businessUnitObj: FoBusinessUnitType;
  coordinatorName: JobRequisitionOperatorType[];
  coordinatorTeam: JobRequisitionOperatorType[];
  costCenterObj: FoCostCenterType;
  custDuration: PicklistOptionType;
  departmentObj: FoDepartmentType;
  divisionObj: FoDivisionType;
  filter1: PicklistOptionType;
  filter3: PicklistOptionType;
  filter4: PicklistOptionType;
  hardstopStatus: PicklistOptionType;
  hiringManagerName: JobRequisitionOperatorType[];
  hiringManagerTeam: JobRequisitionOperatorType[];
  interviewGuide: AttachmentType[];
  legalEntityObj: FoCompanyType;
  locationObj: FoLocationType[];
  mfield1: PicklistOptionType;
  mfield2: PicklistOptionType;
  recruiterName: JobRequisitionOperatorType[];
  recruiterTeam: JobRequisitionOperatorType[];
  secondRecruiterName: JobRequisitionOperatorType[];
  secondRecruiterTeam: JobRequisitionOperatorType[];
  sourcerName: JobRequisitionOperatorType[];
  sourcerTeam: JobRequisitionOperatorType[];
  status: PicklistOptionType;
  vTeam: JobRequisitionOperatorType[];
  vpOfStaffingName: JobRequisitionOperatorType[];
  vpOfStaffingTeam: JobRequisitionOperatorType[];
}

export interface JobReqTemplate_Standard_Job_RequisitionTypeForceMandatory {
  agencyPosting: boolean;
  assessment: string;
  businessUnitObjCode: string;
  candidateHired: BigNumber;
  coordinatorEmail: string;
  coordinatorFax: string;
  coordinatorPhone: string;
  corporatePosting: boolean;
  costCenterObjCode: string;
  country: string;
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
  departmentObjCode: string;
  divisionObjCode: string;
  eeoGroup: string;
  eeoJobCat: string;
  end: Moment;
  erpAmount: BigNumber;
  extEndDate: Moment;
  extJobDescFooter: string;
  extJobDescHeader: string;
  extListingLayout: string;
  extStartDate: Moment;
  extTitle: string;
  externalPrivatePosting: boolean;
  fadvAccountPackage: string;
  flsa: string;
  formDueDate: Moment;
  hiringManagerEmail: string;
  hiringManagerFax: string;
  hiringManagerPhone: string;
  id: string;
  instrInternalComments: string;
  intEndDate: Moment;
  intJobDescFooter: string;
  intJobDescHeader: string;
  intStartDate: Moment;
  intrPosting: string;
  intranetPosting: boolean;
  intranetPrivatePosting: boolean;
  jobCode: string;
  jobGrade: string;
  jobLevel: string;
  jobPostLanguage: string;
  jobRole: string;
  jobStartDate: Moment;
  legalEntityObjCode: string;
  listingLayout: string;
  locationObjCode: string;
  numberOpenings: BigNumber;
  positionNumber: string;
  questions: string;
  recruiterEmail: string;
  recruiterFax: string;
  recruiterPhone: string;
  salaryMax: BigNumber;
  salaryMid: BigNumber;
  salaryMin: BigNumber;
  secondRecruiterEmail: string;
  secondRecruiterFax: string;
  secondRecruiterPhone: string;
  sourcerEmail: string;
  sourcerFax: string;
  sourcerPhone: string;
  start: Moment;
  templateId: BigNumber;
  title: string;
  vpOfStaffingEmail: string;
  vpOfStaffingFax: string;
  vpOfStaffingPhone: string;
  businessUnitObj: FoBusinessUnitType;
  coordinatorName: JobRequisitionOperatorType[];
  coordinatorTeam: JobRequisitionOperatorType[];
  costCenterObj: FoCostCenterType;
  custDuration: PicklistOptionType;
  departmentObj: FoDepartmentType;
  divisionObj: FoDivisionType;
  filter1: PicklistOptionType;
  filter3: PicklistOptionType;
  filter4: PicklistOptionType;
  hardstopStatus: PicklistOptionType;
  hiringManagerName: JobRequisitionOperatorType[];
  hiringManagerTeam: JobRequisitionOperatorType[];
  interviewGuide: AttachmentType[];
  legalEntityObj: FoCompanyType;
  locationObj: FoLocationType[];
  mfield1: PicklistOptionType;
  mfield2: PicklistOptionType;
  recruiterName: JobRequisitionOperatorType[];
  recruiterTeam: JobRequisitionOperatorType[];
  secondRecruiterName: JobRequisitionOperatorType[];
  secondRecruiterTeam: JobRequisitionOperatorType[];
  sourcerName: JobRequisitionOperatorType[];
  sourcerTeam: JobRequisitionOperatorType[];
  status: PicklistOptionType;
  vTeam: JobRequisitionOperatorType[];
  vpOfStaffingName: JobRequisitionOperatorType[];
  vpOfStaffingTeam: JobRequisitionOperatorType[];
}

export namespace JobReqTemplate_Standard_Job_Requisition {
  /**
   * Static representation of the [[agencyPosting]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const AGENCY_POSTING: BooleanField<JobReqTemplate_Standard_Job_Requisition> = new BooleanField('agencyPosting', JobReqTemplate_Standard_Job_Requisition, 'Edm.Boolean');
  /**
   * Static representation of the [[assessment]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ASSESSMENT: StringField<JobReqTemplate_Standard_Job_Requisition> = new StringField('assessment', JobReqTemplate_Standard_Job_Requisition, 'Edm.String');
  /**
   * Static representation of the [[businessUnitObjCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_UNIT_OBJ_CODE: StringField<JobReqTemplate_Standard_Job_Requisition> = new StringField('businessUnit_obj_code', JobReqTemplate_Standard_Job_Requisition, 'Edm.String');
  /**
   * Static representation of the [[candidateHired]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CANDIDATE_HIRED: BigNumberField<JobReqTemplate_Standard_Job_Requisition> = new BigNumberField('candidateHired', JobReqTemplate_Standard_Job_Requisition, 'Edm.Decimal');
  /**
   * Static representation of the [[coordinatorEmail]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COORDINATOR_EMAIL: StringField<JobReqTemplate_Standard_Job_Requisition> = new StringField('coordinatorEmail', JobReqTemplate_Standard_Job_Requisition, 'Edm.String');
  /**
   * Static representation of the [[coordinatorFax]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COORDINATOR_FAX: StringField<JobReqTemplate_Standard_Job_Requisition> = new StringField('coordinatorFax', JobReqTemplate_Standard_Job_Requisition, 'Edm.String');
  /**
   * Static representation of the [[coordinatorPhone]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COORDINATOR_PHONE: StringField<JobReqTemplate_Standard_Job_Requisition> = new StringField('coordinatorPhone', JobReqTemplate_Standard_Job_Requisition, 'Edm.String');
  /**
   * Static representation of the [[corporatePosting]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CORPORATE_POSTING: BooleanField<JobReqTemplate_Standard_Job_Requisition> = new BooleanField('corporatePosting', JobReqTemplate_Standard_Job_Requisition, 'Edm.Boolean');
  /**
   * Static representation of the [[costCenterObjCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COST_CENTER_OBJ_CODE: StringField<JobReqTemplate_Standard_Job_Requisition> = new StringField('costCenter_obj_code', JobReqTemplate_Standard_Job_Requisition, 'Edm.String');
  /**
   * Static representation of the [[country]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY: StringField<JobReqTemplate_Standard_Job_Requisition> = new StringField('country', JobReqTemplate_Standard_Job_Requisition, 'Edm.String');
  /**
   * Static representation of the [[currency]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CURRENCY: StringField<JobReqTemplate_Standard_Job_Requisition> = new StringField('currency', JobReqTemplate_Standard_Job_Requisition, 'Edm.String');
  /**
   * Static representation of the [[custEmployeeClass]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUST_EMPLOYEE_CLASS: StringField<JobReqTemplate_Standard_Job_Requisition> = new StringField('custEmployeeClass', JobReqTemplate_Standard_Job_Requisition, 'Edm.String');
  /**
   * Static representation of the [[custFte]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUST_FTE: StringField<JobReqTemplate_Standard_Job_Requisition> = new StringField('custFTE', JobReqTemplate_Standard_Job_Requisition, 'Edm.String');
  /**
   * Static representation of the [[custGlobalJobTitle]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUST_GLOBAL_JOB_TITLE: StringField<JobReqTemplate_Standard_Job_Requisition> = new StringField('custGlobalJobTitle', JobReqTemplate_Standard_Job_Requisition, 'Edm.String');
  /**
   * Static representation of the [[custHoursPerWeek]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUST_HOURS_PER_WEEK: StringField<JobReqTemplate_Standard_Job_Requisition> = new StringField('custHoursPerWeek', JobReqTemplate_Standard_Job_Requisition, 'Edm.String');
  /**
   * Static representation of the [[custInstrAssessments]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUST_INSTR_ASSESSMENTS: StringField<JobReqTemplate_Standard_Job_Requisition> = new StringField('custInstrAssessments', JobReqTemplate_Standard_Job_Requisition, 'Edm.String');
  /**
   * Static representation of the [[custInstrCountryFields]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUST_INSTR_COUNTRY_FIELDS: StringField<JobReqTemplate_Standard_Job_Requisition> = new StringField('custInstrCountryFields', JobReqTemplate_Standard_Job_Requisition, 'Edm.String');
  /**
   * Static representation of the [[custInstrFadv]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUST_INSTR_FADV: StringField<JobReqTemplate_Standard_Job_Requisition> = new StringField('custInstrFADV', JobReqTemplate_Standard_Job_Requisition, 'Edm.String');
  /**
   * Static representation of the [[custInstrJobPosting]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUST_INSTR_JOB_POSTING: StringField<JobReqTemplate_Standard_Job_Requisition> = new StringField('custInstrJobPosting', JobReqTemplate_Standard_Job_Requisition, 'Edm.String');
  /**
   * Static representation of the [[custInstrPosMgmt]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUST_INSTR_POS_MGMT: StringField<JobReqTemplate_Standard_Job_Requisition> = new StringField('custInstrPosMgmt', JobReqTemplate_Standard_Job_Requisition, 'Edm.String');
  /**
   * Static representation of the [[custInstrReqDetails]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUST_INSTR_REQ_DETAILS: StringField<JobReqTemplate_Standard_Job_Requisition> = new StringField('custInstrReqDetails', JobReqTemplate_Standard_Job_Requisition, 'Edm.String');
  /**
   * Static representation of the [[custInstrTeamDetails]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUST_INSTR_TEAM_DETAILS: StringField<JobReqTemplate_Standard_Job_Requisition> = new StringField('custInstrTeamDetails', JobReqTemplate_Standard_Job_Requisition, 'Edm.String');
  /**
   * Static representation of the [[customComments]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOM_COMMENTS: StringField<JobReqTemplate_Standard_Job_Requisition> = new StringField('customComments', JobReqTemplate_Standard_Job_Requisition, 'Edm.String');
  /**
   * Static representation of the [[defaultLanguage]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEFAULT_LANGUAGE: StringField<JobReqTemplate_Standard_Job_Requisition> = new StringField('defaultLanguage', JobReqTemplate_Standard_Job_Requisition, 'Edm.String');
  /**
   * Static representation of the [[departmentObjCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEPARTMENT_OBJ_CODE: StringField<JobReqTemplate_Standard_Job_Requisition> = new StringField('department_obj_code', JobReqTemplate_Standard_Job_Requisition, 'Edm.String');
  /**
   * Static representation of the [[divisionObjCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DIVISION_OBJ_CODE: StringField<JobReqTemplate_Standard_Job_Requisition> = new StringField('division_obj_code', JobReqTemplate_Standard_Job_Requisition, 'Edm.String');
  /**
   * Static representation of the [[eeoGroup]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EEO_GROUP: StringField<JobReqTemplate_Standard_Job_Requisition> = new StringField('eeoGroup', JobReqTemplate_Standard_Job_Requisition, 'Edm.String');
  /**
   * Static representation of the [[eeoJobCat]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EEO_JOB_CAT: StringField<JobReqTemplate_Standard_Job_Requisition> = new StringField('eeoJobCat', JobReqTemplate_Standard_Job_Requisition, 'Edm.String');
  /**
   * Static representation of the [[end]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const END: DateField<JobReqTemplate_Standard_Job_Requisition> = new DateField('end', JobReqTemplate_Standard_Job_Requisition, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[erpAmount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ERP_AMOUNT: BigNumberField<JobReqTemplate_Standard_Job_Requisition> = new BigNumberField('erpAmount', JobReqTemplate_Standard_Job_Requisition, 'Edm.Decimal');
  /**
   * Static representation of the [[extEndDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXT_END_DATE: DateField<JobReqTemplate_Standard_Job_Requisition> = new DateField('extEndDate', JobReqTemplate_Standard_Job_Requisition, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[extJobDescFooter]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXT_JOB_DESC_FOOTER: StringField<JobReqTemplate_Standard_Job_Requisition> = new StringField('extJobDescFooter', JobReqTemplate_Standard_Job_Requisition, 'Edm.String');
  /**
   * Static representation of the [[extJobDescHeader]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXT_JOB_DESC_HEADER: StringField<JobReqTemplate_Standard_Job_Requisition> = new StringField('extJobDescHeader', JobReqTemplate_Standard_Job_Requisition, 'Edm.String');
  /**
   * Static representation of the [[extListingLayout]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXT_LISTING_LAYOUT: StringField<JobReqTemplate_Standard_Job_Requisition> = new StringField('extListingLayout', JobReqTemplate_Standard_Job_Requisition, 'Edm.String');
  /**
   * Static representation of the [[extStartDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXT_START_DATE: DateField<JobReqTemplate_Standard_Job_Requisition> = new DateField('extStartDate', JobReqTemplate_Standard_Job_Requisition, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[extTitle]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXT_TITLE: StringField<JobReqTemplate_Standard_Job_Requisition> = new StringField('extTitle', JobReqTemplate_Standard_Job_Requisition, 'Edm.String');
  /**
   * Static representation of the [[externalPrivatePosting]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_PRIVATE_POSTING: BooleanField<JobReqTemplate_Standard_Job_Requisition> = new BooleanField('externalPrivatePosting', JobReqTemplate_Standard_Job_Requisition, 'Edm.Boolean');
  /**
   * Static representation of the [[fadvAccountPackage]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FADV_ACCOUNT_PACKAGE: StringField<JobReqTemplate_Standard_Job_Requisition> = new StringField('fadvAccountPackage', JobReqTemplate_Standard_Job_Requisition, 'Edm.String');
  /**
   * Static representation of the [[flsa]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FLSA: StringField<JobReqTemplate_Standard_Job_Requisition> = new StringField('flsa', JobReqTemplate_Standard_Job_Requisition, 'Edm.String');
  /**
   * Static representation of the [[formDueDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_DUE_DATE: DateField<JobReqTemplate_Standard_Job_Requisition> = new DateField('formDueDate', JobReqTemplate_Standard_Job_Requisition, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[hiringManagerEmail]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HIRING_MANAGER_EMAIL: StringField<JobReqTemplate_Standard_Job_Requisition> = new StringField('hiringManagerEmail', JobReqTemplate_Standard_Job_Requisition, 'Edm.String');
  /**
   * Static representation of the [[hiringManagerFax]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HIRING_MANAGER_FAX: StringField<JobReqTemplate_Standard_Job_Requisition> = new StringField('hiringManagerFax', JobReqTemplate_Standard_Job_Requisition, 'Edm.String');
  /**
   * Static representation of the [[hiringManagerPhone]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HIRING_MANAGER_PHONE: StringField<JobReqTemplate_Standard_Job_Requisition> = new StringField('hiringManagerPhone', JobReqTemplate_Standard_Job_Requisition, 'Edm.String');
  /**
   * Static representation of the [[id]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ID: StringField<JobReqTemplate_Standard_Job_Requisition> = new StringField('id', JobReqTemplate_Standard_Job_Requisition, 'Edm.String');
  /**
   * Static representation of the [[instrInternalComments]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INSTR_INTERNAL_COMMENTS: StringField<JobReqTemplate_Standard_Job_Requisition> = new StringField('instrInternalComments', JobReqTemplate_Standard_Job_Requisition, 'Edm.String');
  /**
   * Static representation of the [[intEndDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INT_END_DATE: DateField<JobReqTemplate_Standard_Job_Requisition> = new DateField('intEndDate', JobReqTemplate_Standard_Job_Requisition, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[intJobDescFooter]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INT_JOB_DESC_FOOTER: StringField<JobReqTemplate_Standard_Job_Requisition> = new StringField('intJobDescFooter', JobReqTemplate_Standard_Job_Requisition, 'Edm.String');
  /**
   * Static representation of the [[intJobDescHeader]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INT_JOB_DESC_HEADER: StringField<JobReqTemplate_Standard_Job_Requisition> = new StringField('intJobDescHeader', JobReqTemplate_Standard_Job_Requisition, 'Edm.String');
  /**
   * Static representation of the [[intStartDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INT_START_DATE: DateField<JobReqTemplate_Standard_Job_Requisition> = new DateField('intStartDate', JobReqTemplate_Standard_Job_Requisition, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[intrPosting]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INTR_POSTING: StringField<JobReqTemplate_Standard_Job_Requisition> = new StringField('intrPosting', JobReqTemplate_Standard_Job_Requisition, 'Edm.String');
  /**
   * Static representation of the [[intranetPosting]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INTRANET_POSTING: BooleanField<JobReqTemplate_Standard_Job_Requisition> = new BooleanField('intranetPosting', JobReqTemplate_Standard_Job_Requisition, 'Edm.Boolean');
  /**
   * Static representation of the [[intranetPrivatePosting]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INTRANET_PRIVATE_POSTING: BooleanField<JobReqTemplate_Standard_Job_Requisition> = new BooleanField('intranetPrivatePosting', JobReqTemplate_Standard_Job_Requisition, 'Edm.Boolean');
  /**
   * Static representation of the [[jobCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_CODE: StringField<JobReqTemplate_Standard_Job_Requisition> = new StringField('jobCode', JobReqTemplate_Standard_Job_Requisition, 'Edm.String');
  /**
   * Static representation of the [[jobGrade]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_GRADE: StringField<JobReqTemplate_Standard_Job_Requisition> = new StringField('jobGrade', JobReqTemplate_Standard_Job_Requisition, 'Edm.String');
  /**
   * Static representation of the [[jobLevel]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_LEVEL: StringField<JobReqTemplate_Standard_Job_Requisition> = new StringField('jobLevel', JobReqTemplate_Standard_Job_Requisition, 'Edm.String');
  /**
   * Static representation of the [[jobPostLanguage]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_POST_LANGUAGE: StringField<JobReqTemplate_Standard_Job_Requisition> = new StringField('jobPostLanguage', JobReqTemplate_Standard_Job_Requisition, 'Edm.String');
  /**
   * Static representation of the [[jobRole]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_ROLE: StringField<JobReqTemplate_Standard_Job_Requisition> = new StringField('jobRole', JobReqTemplate_Standard_Job_Requisition, 'Edm.String');
  /**
   * Static representation of the [[jobStartDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_START_DATE: DateField<JobReqTemplate_Standard_Job_Requisition> = new DateField('jobStartDate', JobReqTemplate_Standard_Job_Requisition, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[legalEntityObjCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LEGAL_ENTITY_OBJ_CODE: StringField<JobReqTemplate_Standard_Job_Requisition> = new StringField('legalEntity_obj_code', JobReqTemplate_Standard_Job_Requisition, 'Edm.String');
  /**
   * Static representation of the [[listingLayout]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LISTING_LAYOUT: StringField<JobReqTemplate_Standard_Job_Requisition> = new StringField('listingLayout', JobReqTemplate_Standard_Job_Requisition, 'Edm.String');
  /**
   * Static representation of the [[locationObjCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LOCATION_OBJ_CODE: StringField<JobReqTemplate_Standard_Job_Requisition> = new StringField('location_obj_code', JobReqTemplate_Standard_Job_Requisition, 'Edm.String');
  /**
   * Static representation of the [[numberOpenings]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NUMBER_OPENINGS: BigNumberField<JobReqTemplate_Standard_Job_Requisition> = new BigNumberField('numberOpenings', JobReqTemplate_Standard_Job_Requisition, 'Edm.Decimal');
  /**
   * Static representation of the [[positionNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const POSITION_NUMBER: StringField<JobReqTemplate_Standard_Job_Requisition> = new StringField('positionNumber', JobReqTemplate_Standard_Job_Requisition, 'Edm.String');
  /**
   * Static representation of the [[questions]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const QUESTIONS: StringField<JobReqTemplate_Standard_Job_Requisition> = new StringField('questions', JobReqTemplate_Standard_Job_Requisition, 'Edm.String');
  /**
   * Static representation of the [[recruiterEmail]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RECRUITER_EMAIL: StringField<JobReqTemplate_Standard_Job_Requisition> = new StringField('recruiterEmail', JobReqTemplate_Standard_Job_Requisition, 'Edm.String');
  /**
   * Static representation of the [[recruiterFax]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RECRUITER_FAX: StringField<JobReqTemplate_Standard_Job_Requisition> = new StringField('recruiterFax', JobReqTemplate_Standard_Job_Requisition, 'Edm.String');
  /**
   * Static representation of the [[recruiterPhone]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RECRUITER_PHONE: StringField<JobReqTemplate_Standard_Job_Requisition> = new StringField('recruiterPhone', JobReqTemplate_Standard_Job_Requisition, 'Edm.String');
  /**
   * Static representation of the [[salaryMax]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALARY_MAX: BigNumberField<JobReqTemplate_Standard_Job_Requisition> = new BigNumberField('salaryMax', JobReqTemplate_Standard_Job_Requisition, 'Edm.Decimal');
  /**
   * Static representation of the [[salaryMid]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALARY_MID: BigNumberField<JobReqTemplate_Standard_Job_Requisition> = new BigNumberField('salaryMid', JobReqTemplate_Standard_Job_Requisition, 'Edm.Decimal');
  /**
   * Static representation of the [[salaryMin]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALARY_MIN: BigNumberField<JobReqTemplate_Standard_Job_Requisition> = new BigNumberField('salaryMin', JobReqTemplate_Standard_Job_Requisition, 'Edm.Decimal');
  /**
   * Static representation of the [[secondRecruiterEmail]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SECOND_RECRUITER_EMAIL: StringField<JobReqTemplate_Standard_Job_Requisition> = new StringField('secondRecruiterEmail', JobReqTemplate_Standard_Job_Requisition, 'Edm.String');
  /**
   * Static representation of the [[secondRecruiterFax]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SECOND_RECRUITER_FAX: StringField<JobReqTemplate_Standard_Job_Requisition> = new StringField('secondRecruiterFax', JobReqTemplate_Standard_Job_Requisition, 'Edm.String');
  /**
   * Static representation of the [[secondRecruiterPhone]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SECOND_RECRUITER_PHONE: StringField<JobReqTemplate_Standard_Job_Requisition> = new StringField('secondRecruiterPhone', JobReqTemplate_Standard_Job_Requisition, 'Edm.String');
  /**
   * Static representation of the [[sourcerEmail]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SOURCER_EMAIL: StringField<JobReqTemplate_Standard_Job_Requisition> = new StringField('sourcerEmail', JobReqTemplate_Standard_Job_Requisition, 'Edm.String');
  /**
   * Static representation of the [[sourcerFax]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SOURCER_FAX: StringField<JobReqTemplate_Standard_Job_Requisition> = new StringField('sourcerFax', JobReqTemplate_Standard_Job_Requisition, 'Edm.String');
  /**
   * Static representation of the [[sourcerPhone]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SOURCER_PHONE: StringField<JobReqTemplate_Standard_Job_Requisition> = new StringField('sourcerPhone', JobReqTemplate_Standard_Job_Requisition, 'Edm.String');
  /**
   * Static representation of the [[start]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const START: DateField<JobReqTemplate_Standard_Job_Requisition> = new DateField('start', JobReqTemplate_Standard_Job_Requisition, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[templateId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TEMPLATE_ID: BigNumberField<JobReqTemplate_Standard_Job_Requisition> = new BigNumberField('templateId', JobReqTemplate_Standard_Job_Requisition, 'Edm.Int64');
  /**
   * Static representation of the [[title]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TITLE: StringField<JobReqTemplate_Standard_Job_Requisition> = new StringField('title', JobReqTemplate_Standard_Job_Requisition, 'Edm.String');
  /**
   * Static representation of the [[vpOfStaffingEmail]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VP_OF_STAFFING_EMAIL: StringField<JobReqTemplate_Standard_Job_Requisition> = new StringField('vpOfStaffingEmail', JobReqTemplate_Standard_Job_Requisition, 'Edm.String');
  /**
   * Static representation of the [[vpOfStaffingFax]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VP_OF_STAFFING_FAX: StringField<JobReqTemplate_Standard_Job_Requisition> = new StringField('vpOfStaffingFax', JobReqTemplate_Standard_Job_Requisition, 'Edm.String');
  /**
   * Static representation of the [[vpOfStaffingPhone]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VP_OF_STAFFING_PHONE: StringField<JobReqTemplate_Standard_Job_Requisition> = new StringField('vpOfStaffingPhone', JobReqTemplate_Standard_Job_Requisition, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[businessUnitObj]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_UNIT_OBJ: OneToOneLink<JobReqTemplate_Standard_Job_Requisition, FoBusinessUnit> = new OneToOneLink('businessUnit_obj', JobReqTemplate_Standard_Job_Requisition, FoBusinessUnit);
  /**
   * Static representation of the one-to-many navigation property [[coordinatorName]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COORDINATOR_NAME: Link<JobReqTemplate_Standard_Job_Requisition, JobRequisitionOperator> = new Link('coordinatorName', JobReqTemplate_Standard_Job_Requisition, JobRequisitionOperator);
  /**
   * Static representation of the one-to-many navigation property [[coordinatorTeam]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COORDINATOR_TEAM: Link<JobReqTemplate_Standard_Job_Requisition, JobRequisitionOperator> = new Link('coordinatorTeam', JobReqTemplate_Standard_Job_Requisition, JobRequisitionOperator);
  /**
   * Static representation of the one-to-one navigation property [[costCenterObj]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COST_CENTER_OBJ: OneToOneLink<JobReqTemplate_Standard_Job_Requisition, FoCostCenter> = new OneToOneLink('costCenter_obj', JobReqTemplate_Standard_Job_Requisition, FoCostCenter);
  /**
   * Static representation of the one-to-one navigation property [[custDuration]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUST_DURATION: OneToOneLink<JobReqTemplate_Standard_Job_Requisition, PicklistOption> = new OneToOneLink('custDuration', JobReqTemplate_Standard_Job_Requisition, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[departmentObj]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEPARTMENT_OBJ: OneToOneLink<JobReqTemplate_Standard_Job_Requisition, FoDepartment> = new OneToOneLink('department_obj', JobReqTemplate_Standard_Job_Requisition, FoDepartment);
  /**
   * Static representation of the one-to-one navigation property [[divisionObj]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DIVISION_OBJ: OneToOneLink<JobReqTemplate_Standard_Job_Requisition, FoDivision> = new OneToOneLink('division_obj', JobReqTemplate_Standard_Job_Requisition, FoDivision);
  /**
   * Static representation of the one-to-one navigation property [[filter1]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FILTER_1: OneToOneLink<JobReqTemplate_Standard_Job_Requisition, PicklistOption> = new OneToOneLink('filter1', JobReqTemplate_Standard_Job_Requisition, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[filter3]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FILTER_3: OneToOneLink<JobReqTemplate_Standard_Job_Requisition, PicklistOption> = new OneToOneLink('filter3', JobReqTemplate_Standard_Job_Requisition, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[filter4]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FILTER_4: OneToOneLink<JobReqTemplate_Standard_Job_Requisition, PicklistOption> = new OneToOneLink('filter4', JobReqTemplate_Standard_Job_Requisition, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[hardstopStatus]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HARDSTOP_STATUS: OneToOneLink<JobReqTemplate_Standard_Job_Requisition, PicklistOption> = new OneToOneLink('hardstopStatus', JobReqTemplate_Standard_Job_Requisition, PicklistOption);
  /**
   * Static representation of the one-to-many navigation property [[hiringManagerName]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HIRING_MANAGER_NAME: Link<JobReqTemplate_Standard_Job_Requisition, JobRequisitionOperator> = new Link('hiringManagerName', JobReqTemplate_Standard_Job_Requisition, JobRequisitionOperator);
  /**
   * Static representation of the one-to-many navigation property [[hiringManagerTeam]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HIRING_MANAGER_TEAM: Link<JobReqTemplate_Standard_Job_Requisition, JobRequisitionOperator> = new Link('hiringManagerTeam', JobReqTemplate_Standard_Job_Requisition, JobRequisitionOperator);
  /**
   * Static representation of the one-to-many navigation property [[interviewGuide]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INTERVIEW_GUIDE: Link<JobReqTemplate_Standard_Job_Requisition, Attachment> = new Link('interviewGuide', JobReqTemplate_Standard_Job_Requisition, Attachment);
  /**
   * Static representation of the one-to-one navigation property [[legalEntityObj]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LEGAL_ENTITY_OBJ: OneToOneLink<JobReqTemplate_Standard_Job_Requisition, FoCompany> = new OneToOneLink('legalEntity_obj', JobReqTemplate_Standard_Job_Requisition, FoCompany);
  /**
   * Static representation of the one-to-many navigation property [[locationObj]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LOCATION_OBJ: Link<JobReqTemplate_Standard_Job_Requisition, FoLocation> = new Link('location_obj', JobReqTemplate_Standard_Job_Requisition, FoLocation);
  /**
   * Static representation of the one-to-one navigation property [[mfield1]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MFIELD_1: OneToOneLink<JobReqTemplate_Standard_Job_Requisition, PicklistOption> = new OneToOneLink('mfield1', JobReqTemplate_Standard_Job_Requisition, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[mfield2]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MFIELD_2: OneToOneLink<JobReqTemplate_Standard_Job_Requisition, PicklistOption> = new OneToOneLink('mfield2', JobReqTemplate_Standard_Job_Requisition, PicklistOption);
  /**
   * Static representation of the one-to-many navigation property [[recruiterName]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RECRUITER_NAME: Link<JobReqTemplate_Standard_Job_Requisition, JobRequisitionOperator> = new Link('recruiterName', JobReqTemplate_Standard_Job_Requisition, JobRequisitionOperator);
  /**
   * Static representation of the one-to-many navigation property [[recruiterTeam]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RECRUITER_TEAM: Link<JobReqTemplate_Standard_Job_Requisition, JobRequisitionOperator> = new Link('recruiterTeam', JobReqTemplate_Standard_Job_Requisition, JobRequisitionOperator);
  /**
   * Static representation of the one-to-many navigation property [[secondRecruiterName]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SECOND_RECRUITER_NAME: Link<JobReqTemplate_Standard_Job_Requisition, JobRequisitionOperator> = new Link('secondRecruiterName', JobReqTemplate_Standard_Job_Requisition, JobRequisitionOperator);
  /**
   * Static representation of the one-to-many navigation property [[secondRecruiterTeam]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SECOND_RECRUITER_TEAM: Link<JobReqTemplate_Standard_Job_Requisition, JobRequisitionOperator> = new Link('secondRecruiterTeam', JobReqTemplate_Standard_Job_Requisition, JobRequisitionOperator);
  /**
   * Static representation of the one-to-many navigation property [[sourcerName]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SOURCER_NAME: Link<JobReqTemplate_Standard_Job_Requisition, JobRequisitionOperator> = new Link('sourcerName', JobReqTemplate_Standard_Job_Requisition, JobRequisitionOperator);
  /**
   * Static representation of the one-to-many navigation property [[sourcerTeam]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SOURCER_TEAM: Link<JobReqTemplate_Standard_Job_Requisition, JobRequisitionOperator> = new Link('sourcerTeam', JobReqTemplate_Standard_Job_Requisition, JobRequisitionOperator);
  /**
   * Static representation of the one-to-one navigation property [[status]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS: OneToOneLink<JobReqTemplate_Standard_Job_Requisition, PicklistOption> = new OneToOneLink('status', JobReqTemplate_Standard_Job_Requisition, PicklistOption);
  /**
   * Static representation of the one-to-many navigation property [[vTeam]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const V_TEAM: Link<JobReqTemplate_Standard_Job_Requisition, JobRequisitionOperator> = new Link('vTeam', JobReqTemplate_Standard_Job_Requisition, JobRequisitionOperator);
  /**
   * Static representation of the one-to-many navigation property [[vpOfStaffingName]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VP_OF_STAFFING_NAME: Link<JobReqTemplate_Standard_Job_Requisition, JobRequisitionOperator> = new Link('vpOfStaffingName', JobReqTemplate_Standard_Job_Requisition, JobRequisitionOperator);
  /**
   * Static representation of the one-to-many navigation property [[vpOfStaffingTeam]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VP_OF_STAFFING_TEAM: Link<JobReqTemplate_Standard_Job_Requisition, JobRequisitionOperator> = new Link('vpOfStaffingTeam', JobReqTemplate_Standard_Job_Requisition, JobRequisitionOperator);
  /**
   * All fields of the JobReqTemplate_Standard_Job_Requisition entity.
   */
  export const _allFields: Array<BooleanField<JobReqTemplate_Standard_Job_Requisition> | StringField<JobReqTemplate_Standard_Job_Requisition> | BigNumberField<JobReqTemplate_Standard_Job_Requisition> | DateField<JobReqTemplate_Standard_Job_Requisition> | OneToOneLink<JobReqTemplate_Standard_Job_Requisition, FoBusinessUnit> | Link<JobReqTemplate_Standard_Job_Requisition, JobRequisitionOperator> | OneToOneLink<JobReqTemplate_Standard_Job_Requisition, FoCostCenter> | OneToOneLink<JobReqTemplate_Standard_Job_Requisition, PicklistOption> | OneToOneLink<JobReqTemplate_Standard_Job_Requisition, FoDepartment> | OneToOneLink<JobReqTemplate_Standard_Job_Requisition, FoDivision> | Link<JobReqTemplate_Standard_Job_Requisition, Attachment> | OneToOneLink<JobReqTemplate_Standard_Job_Requisition, FoCompany> | Link<JobReqTemplate_Standard_Job_Requisition, FoLocation>> = [
    JobReqTemplate_Standard_Job_Requisition.AGENCY_POSTING,
    JobReqTemplate_Standard_Job_Requisition.ASSESSMENT,
    JobReqTemplate_Standard_Job_Requisition.BUSINESS_UNIT_OBJ_CODE,
    JobReqTemplate_Standard_Job_Requisition.CANDIDATE_HIRED,
    JobReqTemplate_Standard_Job_Requisition.COORDINATOR_EMAIL,
    JobReqTemplate_Standard_Job_Requisition.COORDINATOR_FAX,
    JobReqTemplate_Standard_Job_Requisition.COORDINATOR_PHONE,
    JobReqTemplate_Standard_Job_Requisition.CORPORATE_POSTING,
    JobReqTemplate_Standard_Job_Requisition.COST_CENTER_OBJ_CODE,
    JobReqTemplate_Standard_Job_Requisition.COUNTRY,
    JobReqTemplate_Standard_Job_Requisition.CURRENCY,
    JobReqTemplate_Standard_Job_Requisition.CUST_EMPLOYEE_CLASS,
    JobReqTemplate_Standard_Job_Requisition.CUST_FTE,
    JobReqTemplate_Standard_Job_Requisition.CUST_GLOBAL_JOB_TITLE,
    JobReqTemplate_Standard_Job_Requisition.CUST_HOURS_PER_WEEK,
    JobReqTemplate_Standard_Job_Requisition.CUST_INSTR_ASSESSMENTS,
    JobReqTemplate_Standard_Job_Requisition.CUST_INSTR_COUNTRY_FIELDS,
    JobReqTemplate_Standard_Job_Requisition.CUST_INSTR_FADV,
    JobReqTemplate_Standard_Job_Requisition.CUST_INSTR_JOB_POSTING,
    JobReqTemplate_Standard_Job_Requisition.CUST_INSTR_POS_MGMT,
    JobReqTemplate_Standard_Job_Requisition.CUST_INSTR_REQ_DETAILS,
    JobReqTemplate_Standard_Job_Requisition.CUST_INSTR_TEAM_DETAILS,
    JobReqTemplate_Standard_Job_Requisition.CUSTOM_COMMENTS,
    JobReqTemplate_Standard_Job_Requisition.DEFAULT_LANGUAGE,
    JobReqTemplate_Standard_Job_Requisition.DEPARTMENT_OBJ_CODE,
    JobReqTemplate_Standard_Job_Requisition.DIVISION_OBJ_CODE,
    JobReqTemplate_Standard_Job_Requisition.EEO_GROUP,
    JobReqTemplate_Standard_Job_Requisition.EEO_JOB_CAT,
    JobReqTemplate_Standard_Job_Requisition.END,
    JobReqTemplate_Standard_Job_Requisition.ERP_AMOUNT,
    JobReqTemplate_Standard_Job_Requisition.EXT_END_DATE,
    JobReqTemplate_Standard_Job_Requisition.EXT_JOB_DESC_FOOTER,
    JobReqTemplate_Standard_Job_Requisition.EXT_JOB_DESC_HEADER,
    JobReqTemplate_Standard_Job_Requisition.EXT_LISTING_LAYOUT,
    JobReqTemplate_Standard_Job_Requisition.EXT_START_DATE,
    JobReqTemplate_Standard_Job_Requisition.EXT_TITLE,
    JobReqTemplate_Standard_Job_Requisition.EXTERNAL_PRIVATE_POSTING,
    JobReqTemplate_Standard_Job_Requisition.FADV_ACCOUNT_PACKAGE,
    JobReqTemplate_Standard_Job_Requisition.FLSA,
    JobReqTemplate_Standard_Job_Requisition.FORM_DUE_DATE,
    JobReqTemplate_Standard_Job_Requisition.HIRING_MANAGER_EMAIL,
    JobReqTemplate_Standard_Job_Requisition.HIRING_MANAGER_FAX,
    JobReqTemplate_Standard_Job_Requisition.HIRING_MANAGER_PHONE,
    JobReqTemplate_Standard_Job_Requisition.ID,
    JobReqTemplate_Standard_Job_Requisition.INSTR_INTERNAL_COMMENTS,
    JobReqTemplate_Standard_Job_Requisition.INT_END_DATE,
    JobReqTemplate_Standard_Job_Requisition.INT_JOB_DESC_FOOTER,
    JobReqTemplate_Standard_Job_Requisition.INT_JOB_DESC_HEADER,
    JobReqTemplate_Standard_Job_Requisition.INT_START_DATE,
    JobReqTemplate_Standard_Job_Requisition.INTR_POSTING,
    JobReqTemplate_Standard_Job_Requisition.INTRANET_POSTING,
    JobReqTemplate_Standard_Job_Requisition.INTRANET_PRIVATE_POSTING,
    JobReqTemplate_Standard_Job_Requisition.JOB_CODE,
    JobReqTemplate_Standard_Job_Requisition.JOB_GRADE,
    JobReqTemplate_Standard_Job_Requisition.JOB_LEVEL,
    JobReqTemplate_Standard_Job_Requisition.JOB_POST_LANGUAGE,
    JobReqTemplate_Standard_Job_Requisition.JOB_ROLE,
    JobReqTemplate_Standard_Job_Requisition.JOB_START_DATE,
    JobReqTemplate_Standard_Job_Requisition.LEGAL_ENTITY_OBJ_CODE,
    JobReqTemplate_Standard_Job_Requisition.LISTING_LAYOUT,
    JobReqTemplate_Standard_Job_Requisition.LOCATION_OBJ_CODE,
    JobReqTemplate_Standard_Job_Requisition.NUMBER_OPENINGS,
    JobReqTemplate_Standard_Job_Requisition.POSITION_NUMBER,
    JobReqTemplate_Standard_Job_Requisition.QUESTIONS,
    JobReqTemplate_Standard_Job_Requisition.RECRUITER_EMAIL,
    JobReqTemplate_Standard_Job_Requisition.RECRUITER_FAX,
    JobReqTemplate_Standard_Job_Requisition.RECRUITER_PHONE,
    JobReqTemplate_Standard_Job_Requisition.SALARY_MAX,
    JobReqTemplate_Standard_Job_Requisition.SALARY_MID,
    JobReqTemplate_Standard_Job_Requisition.SALARY_MIN,
    JobReqTemplate_Standard_Job_Requisition.SECOND_RECRUITER_EMAIL,
    JobReqTemplate_Standard_Job_Requisition.SECOND_RECRUITER_FAX,
    JobReqTemplate_Standard_Job_Requisition.SECOND_RECRUITER_PHONE,
    JobReqTemplate_Standard_Job_Requisition.SOURCER_EMAIL,
    JobReqTemplate_Standard_Job_Requisition.SOURCER_FAX,
    JobReqTemplate_Standard_Job_Requisition.SOURCER_PHONE,
    JobReqTemplate_Standard_Job_Requisition.START,
    JobReqTemplate_Standard_Job_Requisition.TEMPLATE_ID,
    JobReqTemplate_Standard_Job_Requisition.TITLE,
    JobReqTemplate_Standard_Job_Requisition.VP_OF_STAFFING_EMAIL,
    JobReqTemplate_Standard_Job_Requisition.VP_OF_STAFFING_FAX,
    JobReqTemplate_Standard_Job_Requisition.VP_OF_STAFFING_PHONE,
    JobReqTemplate_Standard_Job_Requisition.BUSINESS_UNIT_OBJ,
    JobReqTemplate_Standard_Job_Requisition.COORDINATOR_NAME,
    JobReqTemplate_Standard_Job_Requisition.COORDINATOR_TEAM,
    JobReqTemplate_Standard_Job_Requisition.COST_CENTER_OBJ,
    JobReqTemplate_Standard_Job_Requisition.CUST_DURATION,
    JobReqTemplate_Standard_Job_Requisition.DEPARTMENT_OBJ,
    JobReqTemplate_Standard_Job_Requisition.DIVISION_OBJ,
    JobReqTemplate_Standard_Job_Requisition.FILTER_1,
    JobReqTemplate_Standard_Job_Requisition.FILTER_3,
    JobReqTemplate_Standard_Job_Requisition.FILTER_4,
    JobReqTemplate_Standard_Job_Requisition.HARDSTOP_STATUS,
    JobReqTemplate_Standard_Job_Requisition.HIRING_MANAGER_NAME,
    JobReqTemplate_Standard_Job_Requisition.HIRING_MANAGER_TEAM,
    JobReqTemplate_Standard_Job_Requisition.INTERVIEW_GUIDE,
    JobReqTemplate_Standard_Job_Requisition.LEGAL_ENTITY_OBJ,
    JobReqTemplate_Standard_Job_Requisition.LOCATION_OBJ,
    JobReqTemplate_Standard_Job_Requisition.MFIELD_1,
    JobReqTemplate_Standard_Job_Requisition.MFIELD_2,
    JobReqTemplate_Standard_Job_Requisition.RECRUITER_NAME,
    JobReqTemplate_Standard_Job_Requisition.RECRUITER_TEAM,
    JobReqTemplate_Standard_Job_Requisition.SECOND_RECRUITER_NAME,
    JobReqTemplate_Standard_Job_Requisition.SECOND_RECRUITER_TEAM,
    JobReqTemplate_Standard_Job_Requisition.SOURCER_NAME,
    JobReqTemplate_Standard_Job_Requisition.SOURCER_TEAM,
    JobReqTemplate_Standard_Job_Requisition.STATUS,
    JobReqTemplate_Standard_Job_Requisition.V_TEAM,
    JobReqTemplate_Standard_Job_Requisition.VP_OF_STAFFING_NAME,
    JobReqTemplate_Standard_Job_Requisition.VP_OF_STAFFING_TEAM
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<JobReqTemplate_Standard_Job_Requisition> = new AllFields('*', JobReqTemplate_Standard_Job_Requisition);
  /**
   * All key fields of the JobReqTemplate_Standard_Job_Requisition entity.
   */
  export const _keyFields: Array<Selectable<JobReqTemplate_Standard_Job_Requisition>> = [JobReqTemplate_Standard_Job_Requisition.TEMPLATE_ID];
  /**
   * Mapping of all key field names to the respective static field property JobReqTemplate_Standard_Job_Requisition.
   */
  export const _keys: { [keys: string]: Selectable<JobReqTemplate_Standard_Job_Requisition> } = JobReqTemplate_Standard_Job_Requisition._keyFields.reduce((acc: { [keys: string]: Selectable<JobReqTemplate_Standard_Job_Requisition> }, field: Selectable<JobReqTemplate_Standard_Job_Requisition>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
