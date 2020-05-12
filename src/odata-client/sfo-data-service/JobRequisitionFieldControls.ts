/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { JobRequisitionFieldControlsRequestBuilder } from './JobRequisitionFieldControlsRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, NumberField, Selectable } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "JobRequisitionFieldControls" of service "SFOData".
 */
export class JobRequisitionFieldControls extends Entity implements JobRequisitionFieldControlsType {
  /**
   * Technical entity name for JobRequisitionFieldControls.
   */
  static _entityName = 'JobRequisitionFieldControls';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for JobRequisitionFieldControls.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * age.
   * @nullable
   */
  age?: number;
  /**
   * appTemplateId.
   * @nullable
   */
  appTemplateId?: number;
  /**
   * approver.
   * @nullable
   */
  approver?: number;
  /**
   * assessRatingScaleName.
   * @nullable
   */
  assessRatingScaleName?: number;
  /**
   * assessment.
   * @nullable
   */
  assessment?: number;
  /**
   * businessUnit_obj.
   * @nullable
   */
  businessUnitObj?: number;
  /**
   * businessUnit_obj_code.
   * @nullable
   */
  businessUnitObjCode?: number;
  /**
   * candidateHired.
   * @nullable
   */
  candidateHired?: number;
  /**
   * candidateProgress.
   * @nullable
   */
  candidateProgress?: number;
  /**
   * closedDateTime.
   * @nullable
   */
  closedDateTime?: number;
  /**
   * competencies.
   * @nullable
   */
  competencies?: number;
  /**
   * coordinator.
   * @nullable
   */
  coordinator?: number;
  /**
   * coordinatorTeam.
   * @nullable
   */
  coordinatorTeam?: number;
  /**
   * coordinatorTeamGroup.
   * @nullable
   */
  coordinatorTeamGroup?: number;
  /**
   * corporatePosting.
   * @nullable
   */
  corporatePosting?: number;
  /**
   * costCenter_obj.
   * @nullable
   */
  costCenterObj?: number;
  /**
   * costCenter_obj_code.
   * @nullable
   */
  costCenterObjCode?: number;
  /**
   * country.
   * @nullable
   */
  country?: number;
  /**
   * createdDateTime.
   * @nullable
   */
  createdDateTime?: number;
  /**
   * currency.
   * @nullable
   */
  currency?: number;
  /**
   * currentOwner.
   * @nullable
   */
  currentOwner?: number;
  /**
   * custDuration.
   * @nullable
   */
  custDuration?: number;
  /**
   * custEmployeeClass.
   * @nullable
   */
  custEmployeeClass?: number;
  /**
   * custFTE.
   * @nullable
   */
  custFte?: number;
  /**
   * custGlobalJobTitle.
   * @nullable
   */
  custGlobalJobTitle?: number;
  /**
   * custHoursPerWeek.
   * @nullable
   */
  custHoursPerWeek?: number;
  /**
   * custInstrAssessments.
   * @nullable
   */
  custInstrAssessments?: number;
  /**
   * custInstrCountryFields.
   * @nullable
   */
  custInstrCountryFields?: number;
  /**
   * custInstrFADV.
   * @nullable
   */
  custInstrFadv?: number;
  /**
   * custInstrJobPosting.
   * @nullable
   */
  custInstrJobPosting?: number;
  /**
   * custInstrPosMgmt.
   * @nullable
   */
  custInstrPosMgmt?: number;
  /**
   * custInstrReqDetails.
   * @nullable
   */
  custInstrReqDetails?: number;
  /**
   * custInstrTeamDetails.
   * @nullable
   */
  custInstrTeamDetails?: number;
  /**
   * customComments.
   * @nullable
   */
  customComments?: number;
  /**
   * defaultLanguage.
   * @nullable
   */
  defaultLanguage?: number;
  /**
   * deleted.
   * @nullable
   */
  deleted?: number;
  /**
   * department_obj.
   * @nullable
   */
  departmentObj?: number;
  /**
   * department_obj_code.
   * @nullable
   */
  departmentObjCode?: number;
  /**
   * division_obj.
   * @nullable
   */
  divisionObj?: number;
  /**
   * division_obj_code.
   * @nullable
   */
  divisionObjCode?: number;
  /**
   * eeoGroup.
   * @nullable
   */
  eeoGroup?: number;
  /**
   * eeoJobCat.
   * @nullable
   */
  eeoJobCat?: number;
  /**
   * erpAmount.
   * @nullable
   */
  erpAmount?: number;
  /**
   * filter1.
   * @nullable
   */
  filter1?: number;
  /**
   * filter3.
   * @nullable
   */
  filter3?: number;
  /**
   * filter4.
   * @nullable
   */
  filter4?: number;
  /**
   * flsa.
   * @nullable
   */
  flsa?: number;
  /**
   * formDataId.
   * @nullable
   */
  formDataId?: number;
  /**
   * formDueDate.
   * @nullable
   */
  formDueDate?: number;
  /**
   * hardstopStatus.
   * @nullable
   */
  hardstopStatus?: number;
  /**
   * hiringManager.
   * @nullable
   */
  hiringManager?: number;
  /**
   * hiringManagerTeam.
   * @nullable
   */
  hiringManagerTeam?: number;
  /**
   * hiringManagerTeamGroup.
   * @nullable
   */
  hiringManagerTeamGroup?: number;
  /**
   * instrInternalComments.
   * @nullable
   */
  instrInternalComments?: number;
  /**
   * intEndDate.
   * @nullable
   */
  intEndDate?: number;
  /**
   * intStartDate.
   * @nullable
   */
  intStartDate?: number;
  /**
   * internalStatus.
   * @nullable
   */
  internalStatus?: number;
  /**
   * interviewGuide.
   * @nullable
   */
  interviewGuide?: number;
  /**
   * intrPosting.
   * @nullable
   */
  intrPosting?: number;
  /**
   * intranetPosting.
   * @nullable
   */
  intranetPosting?: number;
  /**
   * isDraft.
   * @nullable
   */
  isDraft?: number;
  /**
   * jobAnalyzerReportingData.
   * @nullable
   */
  jobAnalyzerReportingData?: number;
  /**
   * jobApplications.
   * @nullable
   */
  jobApplications?: number;
  /**
   * jobCode.
   * @nullable
   */
  jobCode?: number;
  /**
   * jobGrade.
   * @nullable
   */
  jobGrade?: number;
  /**
   * jobLevel.
   * @nullable
   */
  jobLevel?: number;
  /**
   * jobProfile.
   * @nullable
   */
  jobProfile?: number;
  /**
   * jobReqFwdCandidates.
   * @nullable
   */
  jobReqFwdCandidates?: number;
  /**
   * jobReqGUId.
   * @nullable
   */
  jobReqGuId?: number;
  /**
   * jobReqId.
   */
  jobReqId!: number;
  /**
   * jobReqLocale.
   * @nullable
   */
  jobReqLocale?: number;
  /**
   * jobReqPermissionsNav.
   * @nullable
   */
  jobReqPermissionsNav?: number;
  /**
   * jobReqPostings.
   * @nullable
   */
  jobReqPostings?: number;
  /**
   * jobReqScreeningQuestions.
   * @nullable
   */
  jobReqScreeningQuestions?: number;
  /**
   * jobRole.
   * @nullable
   */
  jobRole?: number;
  /**
   * jobStartDate.
   * @nullable
   */
  jobStartDate?: number;
  /**
   * lastModifiedBy.
   * @nullable
   */
  lastModifiedBy?: number;
  /**
   * lastModifiedByNav.
   * @nullable
   */
  lastModifiedByNav?: number;
  /**
   * lastModifiedDateTime.
   * @nullable
   */
  lastModifiedDateTime?: number;
  /**
   * lastModifiedProxyUserId.
   * @nullable
   */
  lastModifiedProxyUserId?: number;
  /**
   * lastModifiedProxyUserNav.
   * @nullable
   */
  lastModifiedProxyUserNav?: number;
  /**
   * legalEntity_obj.
   * @nullable
   */
  legalEntityObj?: number;
  /**
   * legalEntity_obj_code.
   * @nullable
   */
  legalEntityObjCode?: number;
  /**
   * location_obj.
   * @nullable
   */
  locationObj?: number;
  /**
   * location_obj_code.
   * @nullable
   */
  locationObjCode?: number;
  /**
   * location_objlist.
   * @nullable
   */
  locationObjlist?: number;
  /**
   * mfield1.
   * @nullable
   */
  mfield1?: number;
  /**
   * mfield2.
   * @nullable
   */
  mfield2?: number;
  /**
   * numberOpenings.
   * @nullable
   */
  numberOpenings?: number;
  /**
   * openingsFilled.
   * @nullable
   */
  openingsFilled?: number;
  /**
   * originator.
   * @nullable
   */
  originator?: number;
  /**
   * overallScaleName.
   * @nullable
   */
  overallScaleName?: number;
  /**
   * parentJobReqId.
   * @nullable
   */
  parentJobReqId?: number;
  /**
   * positionNumber.
   * @nullable
   */
  positionNumber?: number;
  /**
   * questions.
   * @nullable
   */
  questions?: number;
  /**
   * ratedApplicantCount.
   * @nullable
   */
  ratedApplicantCount?: number;
  /**
   * recruiter.
   * @nullable
   */
  recruiter?: number;
  /**
   * recruiterTeam.
   * @nullable
   */
  recruiterTeam?: number;
  /**
   * recruiterTeamGroup.
   * @nullable
   */
  recruiterTeamGroup?: number;
  /**
   * restorecoordinatorTeamAdminDefaults.
   * @nullable
   */
  restorecoordinatorTeamAdminDefaults?: number;
  /**
   * restorehiringManagerTeamAdminDefaults.
   * @nullable
   */
  restorehiringManagerTeamAdminDefaults?: number;
  /**
   * restorerecruiterTeamAdminDefaults.
   * @nullable
   */
  restorerecruiterTeamAdminDefaults?: number;
  /**
   * restoresecondRecruiterTeamAdminDefaults.
   * @nullable
   */
  restoresecondRecruiterTeamAdminDefaults?: number;
  /**
   * restoresourcerTeamAdminDefaults.
   * @nullable
   */
  restoresourcerTeamAdminDefaults?: number;
  /**
   * restorevTeamAdminDefaults.
   * @nullable
   */
  restorevTeamAdminDefaults?: number;
  /**
   * restorevpOfStaffingTeamAdminDefaults.
   * @nullable
   */
  restorevpOfStaffingTeamAdminDefaults?: number;
  /**
   * reverseScale.
   * @nullable
   */
  reverseScale?: number;
  /**
   * routeMap.
   * @nullable
   */
  routeMap?: number;
  /**
   * salaryMax.
   * @nullable
   */
  salaryMax?: number;
  /**
   * salaryMid.
   * @nullable
   */
  salaryMid?: number;
  /**
   * salaryMin.
   * @nullable
   */
  salaryMin?: number;
  /**
   * secondRecruiter.
   * @nullable
   */
  secondRecruiter?: number;
  /**
   * secondRecruiterTeam.
   * @nullable
   */
  secondRecruiterTeam?: number;
  /**
   * secondRecruiterTeamGroup.
   * @nullable
   */
  secondRecruiterTeamGroup?: number;
  /**
   * sourcer.
   * @nullable
   */
  sourcer?: number;
  /**
   * sourcerTeam.
   * @nullable
   */
  sourcerTeam?: number;
  /**
   * sourcerTeamGroup.
   * @nullable
   */
  sourcerTeamGroup?: number;
  /**
   * status.
   * @nullable
   */
  status?: number;
  /**
   * statusSetId.
   * @nullable
   */
  statusSetId?: number;
  /**
   * templateId.
   * @nullable
   */
  templateId?: number;
  /**
   * templateName.
   * @nullable
   */
  templateName?: number;
  /**
   * templateType.
   * @nullable
   */
  templateType?: number;
  /**
   * timeToFill.
   * @nullable
   */
  timeToFill?: number;
  /**
   * vTeam.
   * @nullable
   */
  vTeam?: number;
  /**
   * vTeamGroup.
   * @nullable
   */
  vTeamGroup?: number;
  /**
   * vpOfStaffing.
   * @nullable
   */
  vpOfStaffing?: number;
  /**
   * vpOfStaffingTeam.
   * @nullable
   */
  vpOfStaffingTeam?: number;
  /**
   * vpOfStaffingTeamGroup.
   * @nullable
   */
  vpOfStaffingTeamGroup?: number;

  /**
   * Returns an entity builder to construct instances `JobRequisitionFieldControls`.
   * @returns A builder that constructs instances of entity type `JobRequisitionFieldControls`.
   */
  static builder(): EntityBuilderType<JobRequisitionFieldControls, JobRequisitionFieldControlsTypeForceMandatory> {
    return Entity.entityBuilder(JobRequisitionFieldControls);
  }

  /**
   * Returns a request builder to construct requests for operations on the `JobRequisitionFieldControls` entity type.
   * @returns A `JobRequisitionFieldControls` request builder.
   */
  static requestBuilder(): JobRequisitionFieldControlsRequestBuilder {
    return new JobRequisitionFieldControlsRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobRequisitionFieldControls`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `JobRequisitionFieldControls`.
   */
  static customField(fieldName: string): CustomField<JobRequisitionFieldControls> {
    return Entity.customFieldSelector(fieldName, JobRequisitionFieldControls);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface JobRequisitionFieldControlsType {
  age?: number;
  appTemplateId?: number;
  approver?: number;
  assessRatingScaleName?: number;
  assessment?: number;
  businessUnitObj?: number;
  businessUnitObjCode?: number;
  candidateHired?: number;
  candidateProgress?: number;
  closedDateTime?: number;
  competencies?: number;
  coordinator?: number;
  coordinatorTeam?: number;
  coordinatorTeamGroup?: number;
  corporatePosting?: number;
  costCenterObj?: number;
  costCenterObjCode?: number;
  country?: number;
  createdDateTime?: number;
  currency?: number;
  currentOwner?: number;
  custDuration?: number;
  custEmployeeClass?: number;
  custFte?: number;
  custGlobalJobTitle?: number;
  custHoursPerWeek?: number;
  custInstrAssessments?: number;
  custInstrCountryFields?: number;
  custInstrFadv?: number;
  custInstrJobPosting?: number;
  custInstrPosMgmt?: number;
  custInstrReqDetails?: number;
  custInstrTeamDetails?: number;
  customComments?: number;
  defaultLanguage?: number;
  deleted?: number;
  departmentObj?: number;
  departmentObjCode?: number;
  divisionObj?: number;
  divisionObjCode?: number;
  eeoGroup?: number;
  eeoJobCat?: number;
  erpAmount?: number;
  filter1?: number;
  filter3?: number;
  filter4?: number;
  flsa?: number;
  formDataId?: number;
  formDueDate?: number;
  hardstopStatus?: number;
  hiringManager?: number;
  hiringManagerTeam?: number;
  hiringManagerTeamGroup?: number;
  instrInternalComments?: number;
  intEndDate?: number;
  intStartDate?: number;
  internalStatus?: number;
  interviewGuide?: number;
  intrPosting?: number;
  intranetPosting?: number;
  isDraft?: number;
  jobAnalyzerReportingData?: number;
  jobApplications?: number;
  jobCode?: number;
  jobGrade?: number;
  jobLevel?: number;
  jobProfile?: number;
  jobReqFwdCandidates?: number;
  jobReqGuId?: number;
  jobReqId: number;
  jobReqLocale?: number;
  jobReqPermissionsNav?: number;
  jobReqPostings?: number;
  jobReqScreeningQuestions?: number;
  jobRole?: number;
  jobStartDate?: number;
  lastModifiedBy?: number;
  lastModifiedByNav?: number;
  lastModifiedDateTime?: number;
  lastModifiedProxyUserId?: number;
  lastModifiedProxyUserNav?: number;
  legalEntityObj?: number;
  legalEntityObjCode?: number;
  locationObj?: number;
  locationObjCode?: number;
  locationObjlist?: number;
  mfield1?: number;
  mfield2?: number;
  numberOpenings?: number;
  openingsFilled?: number;
  originator?: number;
  overallScaleName?: number;
  parentJobReqId?: number;
  positionNumber?: number;
  questions?: number;
  ratedApplicantCount?: number;
  recruiter?: number;
  recruiterTeam?: number;
  recruiterTeamGroup?: number;
  restorecoordinatorTeamAdminDefaults?: number;
  restorehiringManagerTeamAdminDefaults?: number;
  restorerecruiterTeamAdminDefaults?: number;
  restoresecondRecruiterTeamAdminDefaults?: number;
  restoresourcerTeamAdminDefaults?: number;
  restorevTeamAdminDefaults?: number;
  restorevpOfStaffingTeamAdminDefaults?: number;
  reverseScale?: number;
  routeMap?: number;
  salaryMax?: number;
  salaryMid?: number;
  salaryMin?: number;
  secondRecruiter?: number;
  secondRecruiterTeam?: number;
  secondRecruiterTeamGroup?: number;
  sourcer?: number;
  sourcerTeam?: number;
  sourcerTeamGroup?: number;
  status?: number;
  statusSetId?: number;
  templateId?: number;
  templateName?: number;
  templateType?: number;
  timeToFill?: number;
  vTeam?: number;
  vTeamGroup?: number;
  vpOfStaffing?: number;
  vpOfStaffingTeam?: number;
  vpOfStaffingTeamGroup?: number;
}

export interface JobRequisitionFieldControlsTypeForceMandatory {
  age: number;
  appTemplateId: number;
  approver: number;
  assessRatingScaleName: number;
  assessment: number;
  businessUnitObj: number;
  businessUnitObjCode: number;
  candidateHired: number;
  candidateProgress: number;
  closedDateTime: number;
  competencies: number;
  coordinator: number;
  coordinatorTeam: number;
  coordinatorTeamGroup: number;
  corporatePosting: number;
  costCenterObj: number;
  costCenterObjCode: number;
  country: number;
  createdDateTime: number;
  currency: number;
  currentOwner: number;
  custDuration: number;
  custEmployeeClass: number;
  custFte: number;
  custGlobalJobTitle: number;
  custHoursPerWeek: number;
  custInstrAssessments: number;
  custInstrCountryFields: number;
  custInstrFadv: number;
  custInstrJobPosting: number;
  custInstrPosMgmt: number;
  custInstrReqDetails: number;
  custInstrTeamDetails: number;
  customComments: number;
  defaultLanguage: number;
  deleted: number;
  departmentObj: number;
  departmentObjCode: number;
  divisionObj: number;
  divisionObjCode: number;
  eeoGroup: number;
  eeoJobCat: number;
  erpAmount: number;
  filter1: number;
  filter3: number;
  filter4: number;
  flsa: number;
  formDataId: number;
  formDueDate: number;
  hardstopStatus: number;
  hiringManager: number;
  hiringManagerTeam: number;
  hiringManagerTeamGroup: number;
  instrInternalComments: number;
  intEndDate: number;
  intStartDate: number;
  internalStatus: number;
  interviewGuide: number;
  intrPosting: number;
  intranetPosting: number;
  isDraft: number;
  jobAnalyzerReportingData: number;
  jobApplications: number;
  jobCode: number;
  jobGrade: number;
  jobLevel: number;
  jobProfile: number;
  jobReqFwdCandidates: number;
  jobReqGuId: number;
  jobReqId: number;
  jobReqLocale: number;
  jobReqPermissionsNav: number;
  jobReqPostings: number;
  jobReqScreeningQuestions: number;
  jobRole: number;
  jobStartDate: number;
  lastModifiedBy: number;
  lastModifiedByNav: number;
  lastModifiedDateTime: number;
  lastModifiedProxyUserId: number;
  lastModifiedProxyUserNav: number;
  legalEntityObj: number;
  legalEntityObjCode: number;
  locationObj: number;
  locationObjCode: number;
  locationObjlist: number;
  mfield1: number;
  mfield2: number;
  numberOpenings: number;
  openingsFilled: number;
  originator: number;
  overallScaleName: number;
  parentJobReqId: number;
  positionNumber: number;
  questions: number;
  ratedApplicantCount: number;
  recruiter: number;
  recruiterTeam: number;
  recruiterTeamGroup: number;
  restorecoordinatorTeamAdminDefaults: number;
  restorehiringManagerTeamAdminDefaults: number;
  restorerecruiterTeamAdminDefaults: number;
  restoresecondRecruiterTeamAdminDefaults: number;
  restoresourcerTeamAdminDefaults: number;
  restorevTeamAdminDefaults: number;
  restorevpOfStaffingTeamAdminDefaults: number;
  reverseScale: number;
  routeMap: number;
  salaryMax: number;
  salaryMid: number;
  salaryMin: number;
  secondRecruiter: number;
  secondRecruiterTeam: number;
  secondRecruiterTeamGroup: number;
  sourcer: number;
  sourcerTeam: number;
  sourcerTeamGroup: number;
  status: number;
  statusSetId: number;
  templateId: number;
  templateName: number;
  templateType: number;
  timeToFill: number;
  vTeam: number;
  vTeamGroup: number;
  vpOfStaffing: number;
  vpOfStaffingTeam: number;
  vpOfStaffingTeamGroup: number;
}

export namespace JobRequisitionFieldControls {
  /**
   * Static representation of the [[age]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const AGE: NumberField<JobRequisitionFieldControls> = new NumberField('age', JobRequisitionFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[appTemplateId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const APP_TEMPLATE_ID: NumberField<JobRequisitionFieldControls> = new NumberField('appTemplateId', JobRequisitionFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[approver]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const APPROVER: NumberField<JobRequisitionFieldControls> = new NumberField('approver', JobRequisitionFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[assessRatingScaleName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ASSESS_RATING_SCALE_NAME: NumberField<JobRequisitionFieldControls> = new NumberField('assessRatingScaleName', JobRequisitionFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[assessment]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ASSESSMENT: NumberField<JobRequisitionFieldControls> = new NumberField('assessment', JobRequisitionFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[businessUnitObj]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_UNIT_OBJ: NumberField<JobRequisitionFieldControls> = new NumberField('businessUnit_obj', JobRequisitionFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[businessUnitObjCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_UNIT_OBJ_CODE: NumberField<JobRequisitionFieldControls> = new NumberField('businessUnit_obj_code', JobRequisitionFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[candidateHired]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CANDIDATE_HIRED: NumberField<JobRequisitionFieldControls> = new NumberField('candidateHired', JobRequisitionFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[candidateProgress]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CANDIDATE_PROGRESS: NumberField<JobRequisitionFieldControls> = new NumberField('candidateProgress', JobRequisitionFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[closedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CLOSED_DATE_TIME: NumberField<JobRequisitionFieldControls> = new NumberField('closedDateTime', JobRequisitionFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[competencies]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMPETENCIES: NumberField<JobRequisitionFieldControls> = new NumberField('competencies', JobRequisitionFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[coordinator]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COORDINATOR: NumberField<JobRequisitionFieldControls> = new NumberField('coordinator', JobRequisitionFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[coordinatorTeam]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COORDINATOR_TEAM: NumberField<JobRequisitionFieldControls> = new NumberField('coordinatorTeam', JobRequisitionFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[coordinatorTeamGroup]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COORDINATOR_TEAM_GROUP: NumberField<JobRequisitionFieldControls> = new NumberField('coordinatorTeamGroup', JobRequisitionFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[corporatePosting]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CORPORATE_POSTING: NumberField<JobRequisitionFieldControls> = new NumberField('corporatePosting', JobRequisitionFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[costCenterObj]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COST_CENTER_OBJ: NumberField<JobRequisitionFieldControls> = new NumberField('costCenter_obj', JobRequisitionFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[costCenterObjCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COST_CENTER_OBJ_CODE: NumberField<JobRequisitionFieldControls> = new NumberField('costCenter_obj_code', JobRequisitionFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[country]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY: NumberField<JobRequisitionFieldControls> = new NumberField('country', JobRequisitionFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: NumberField<JobRequisitionFieldControls> = new NumberField('createdDateTime', JobRequisitionFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[currency]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CURRENCY: NumberField<JobRequisitionFieldControls> = new NumberField('currency', JobRequisitionFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[currentOwner]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CURRENT_OWNER: NumberField<JobRequisitionFieldControls> = new NumberField('currentOwner', JobRequisitionFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[custDuration]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUST_DURATION: NumberField<JobRequisitionFieldControls> = new NumberField('custDuration', JobRequisitionFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[custEmployeeClass]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUST_EMPLOYEE_CLASS: NumberField<JobRequisitionFieldControls> = new NumberField('custEmployeeClass', JobRequisitionFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[custFte]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUST_FTE: NumberField<JobRequisitionFieldControls> = new NumberField('custFTE', JobRequisitionFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[custGlobalJobTitle]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUST_GLOBAL_JOB_TITLE: NumberField<JobRequisitionFieldControls> = new NumberField('custGlobalJobTitle', JobRequisitionFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[custHoursPerWeek]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUST_HOURS_PER_WEEK: NumberField<JobRequisitionFieldControls> = new NumberField('custHoursPerWeek', JobRequisitionFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[custInstrAssessments]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUST_INSTR_ASSESSMENTS: NumberField<JobRequisitionFieldControls> = new NumberField('custInstrAssessments', JobRequisitionFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[custInstrCountryFields]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUST_INSTR_COUNTRY_FIELDS: NumberField<JobRequisitionFieldControls> = new NumberField('custInstrCountryFields', JobRequisitionFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[custInstrFadv]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUST_INSTR_FADV: NumberField<JobRequisitionFieldControls> = new NumberField('custInstrFADV', JobRequisitionFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[custInstrJobPosting]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUST_INSTR_JOB_POSTING: NumberField<JobRequisitionFieldControls> = new NumberField('custInstrJobPosting', JobRequisitionFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[custInstrPosMgmt]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUST_INSTR_POS_MGMT: NumberField<JobRequisitionFieldControls> = new NumberField('custInstrPosMgmt', JobRequisitionFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[custInstrReqDetails]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUST_INSTR_REQ_DETAILS: NumberField<JobRequisitionFieldControls> = new NumberField('custInstrReqDetails', JobRequisitionFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[custInstrTeamDetails]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUST_INSTR_TEAM_DETAILS: NumberField<JobRequisitionFieldControls> = new NumberField('custInstrTeamDetails', JobRequisitionFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[customComments]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOM_COMMENTS: NumberField<JobRequisitionFieldControls> = new NumberField('customComments', JobRequisitionFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[defaultLanguage]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEFAULT_LANGUAGE: NumberField<JobRequisitionFieldControls> = new NumberField('defaultLanguage', JobRequisitionFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[deleted]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DELETED: NumberField<JobRequisitionFieldControls> = new NumberField('deleted', JobRequisitionFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[departmentObj]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEPARTMENT_OBJ: NumberField<JobRequisitionFieldControls> = new NumberField('department_obj', JobRequisitionFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[departmentObjCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEPARTMENT_OBJ_CODE: NumberField<JobRequisitionFieldControls> = new NumberField('department_obj_code', JobRequisitionFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[divisionObj]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DIVISION_OBJ: NumberField<JobRequisitionFieldControls> = new NumberField('division_obj', JobRequisitionFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[divisionObjCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DIVISION_OBJ_CODE: NumberField<JobRequisitionFieldControls> = new NumberField('division_obj_code', JobRequisitionFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[eeoGroup]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EEO_GROUP: NumberField<JobRequisitionFieldControls> = new NumberField('eeoGroup', JobRequisitionFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[eeoJobCat]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EEO_JOB_CAT: NumberField<JobRequisitionFieldControls> = new NumberField('eeoJobCat', JobRequisitionFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[erpAmount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ERP_AMOUNT: NumberField<JobRequisitionFieldControls> = new NumberField('erpAmount', JobRequisitionFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[filter1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FILTER_1: NumberField<JobRequisitionFieldControls> = new NumberField('filter1', JobRequisitionFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[filter3]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FILTER_3: NumberField<JobRequisitionFieldControls> = new NumberField('filter3', JobRequisitionFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[filter4]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FILTER_4: NumberField<JobRequisitionFieldControls> = new NumberField('filter4', JobRequisitionFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[flsa]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FLSA: NumberField<JobRequisitionFieldControls> = new NumberField('flsa', JobRequisitionFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[formDataId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_DATA_ID: NumberField<JobRequisitionFieldControls> = new NumberField('formDataId', JobRequisitionFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[formDueDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_DUE_DATE: NumberField<JobRequisitionFieldControls> = new NumberField('formDueDate', JobRequisitionFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[hardstopStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HARDSTOP_STATUS: NumberField<JobRequisitionFieldControls> = new NumberField('hardstopStatus', JobRequisitionFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[hiringManager]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HIRING_MANAGER: NumberField<JobRequisitionFieldControls> = new NumberField('hiringManager', JobRequisitionFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[hiringManagerTeam]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HIRING_MANAGER_TEAM: NumberField<JobRequisitionFieldControls> = new NumberField('hiringManagerTeam', JobRequisitionFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[hiringManagerTeamGroup]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HIRING_MANAGER_TEAM_GROUP: NumberField<JobRequisitionFieldControls> = new NumberField('hiringManagerTeamGroup', JobRequisitionFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[instrInternalComments]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INSTR_INTERNAL_COMMENTS: NumberField<JobRequisitionFieldControls> = new NumberField('instrInternalComments', JobRequisitionFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[intEndDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INT_END_DATE: NumberField<JobRequisitionFieldControls> = new NumberField('intEndDate', JobRequisitionFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[intStartDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INT_START_DATE: NumberField<JobRequisitionFieldControls> = new NumberField('intStartDate', JobRequisitionFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[internalStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INTERNAL_STATUS: NumberField<JobRequisitionFieldControls> = new NumberField('internalStatus', JobRequisitionFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[interviewGuide]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INTERVIEW_GUIDE: NumberField<JobRequisitionFieldControls> = new NumberField('interviewGuide', JobRequisitionFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[intrPosting]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INTR_POSTING: NumberField<JobRequisitionFieldControls> = new NumberField('intrPosting', JobRequisitionFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[intranetPosting]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INTRANET_POSTING: NumberField<JobRequisitionFieldControls> = new NumberField('intranetPosting', JobRequisitionFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[isDraft]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_DRAFT: NumberField<JobRequisitionFieldControls> = new NumberField('isDraft', JobRequisitionFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[jobAnalyzerReportingData]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_ANALYZER_REPORTING_DATA: NumberField<JobRequisitionFieldControls> = new NumberField('jobAnalyzerReportingData', JobRequisitionFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[jobApplications]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_APPLICATIONS: NumberField<JobRequisitionFieldControls> = new NumberField('jobApplications', JobRequisitionFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[jobCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_CODE: NumberField<JobRequisitionFieldControls> = new NumberField('jobCode', JobRequisitionFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[jobGrade]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_GRADE: NumberField<JobRequisitionFieldControls> = new NumberField('jobGrade', JobRequisitionFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[jobLevel]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_LEVEL: NumberField<JobRequisitionFieldControls> = new NumberField('jobLevel', JobRequisitionFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[jobProfile]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_PROFILE: NumberField<JobRequisitionFieldControls> = new NumberField('jobProfile', JobRequisitionFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[jobReqFwdCandidates]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_REQ_FWD_CANDIDATES: NumberField<JobRequisitionFieldControls> = new NumberField('jobReqFwdCandidates', JobRequisitionFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[jobReqGuId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_REQ_GU_ID: NumberField<JobRequisitionFieldControls> = new NumberField('jobReqGUId', JobRequisitionFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[jobReqId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_REQ_ID: NumberField<JobRequisitionFieldControls> = new NumberField('jobReqId', JobRequisitionFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[jobReqLocale]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_REQ_LOCALE: NumberField<JobRequisitionFieldControls> = new NumberField('jobReqLocale', JobRequisitionFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[jobReqPermissionsNav]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_REQ_PERMISSIONS_NAV: NumberField<JobRequisitionFieldControls> = new NumberField('jobReqPermissionsNav', JobRequisitionFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[jobReqPostings]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_REQ_POSTINGS: NumberField<JobRequisitionFieldControls> = new NumberField('jobReqPostings', JobRequisitionFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[jobReqScreeningQuestions]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_REQ_SCREENING_QUESTIONS: NumberField<JobRequisitionFieldControls> = new NumberField('jobReqScreeningQuestions', JobRequisitionFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[jobRole]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_ROLE: NumberField<JobRequisitionFieldControls> = new NumberField('jobRole', JobRequisitionFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[jobStartDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_START_DATE: NumberField<JobRequisitionFieldControls> = new NumberField('jobStartDate', JobRequisitionFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: NumberField<JobRequisitionFieldControls> = new NumberField('lastModifiedBy', JobRequisitionFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[lastModifiedByNav]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: NumberField<JobRequisitionFieldControls> = new NumberField('lastModifiedByNav', JobRequisitionFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: NumberField<JobRequisitionFieldControls> = new NumberField('lastModifiedDateTime', JobRequisitionFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[lastModifiedProxyUserId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_PROXY_USER_ID: NumberField<JobRequisitionFieldControls> = new NumberField('lastModifiedProxyUserId', JobRequisitionFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[lastModifiedProxyUserNav]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_PROXY_USER_NAV: NumberField<JobRequisitionFieldControls> = new NumberField('lastModifiedProxyUserNav', JobRequisitionFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[legalEntityObj]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LEGAL_ENTITY_OBJ: NumberField<JobRequisitionFieldControls> = new NumberField('legalEntity_obj', JobRequisitionFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[legalEntityObjCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LEGAL_ENTITY_OBJ_CODE: NumberField<JobRequisitionFieldControls> = new NumberField('legalEntity_obj_code', JobRequisitionFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[locationObj]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LOCATION_OBJ: NumberField<JobRequisitionFieldControls> = new NumberField('location_obj', JobRequisitionFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[locationObjCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LOCATION_OBJ_CODE: NumberField<JobRequisitionFieldControls> = new NumberField('location_obj_code', JobRequisitionFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[locationObjlist]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LOCATION_OBJLIST: NumberField<JobRequisitionFieldControls> = new NumberField('location_objlist', JobRequisitionFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[mfield1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MFIELD_1: NumberField<JobRequisitionFieldControls> = new NumberField('mfield1', JobRequisitionFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[mfield2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MFIELD_2: NumberField<JobRequisitionFieldControls> = new NumberField('mfield2', JobRequisitionFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[numberOpenings]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NUMBER_OPENINGS: NumberField<JobRequisitionFieldControls> = new NumberField('numberOpenings', JobRequisitionFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[openingsFilled]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OPENINGS_FILLED: NumberField<JobRequisitionFieldControls> = new NumberField('openingsFilled', JobRequisitionFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[originator]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ORIGINATOR: NumberField<JobRequisitionFieldControls> = new NumberField('originator', JobRequisitionFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[overallScaleName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OVERALL_SCALE_NAME: NumberField<JobRequisitionFieldControls> = new NumberField('overallScaleName', JobRequisitionFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[parentJobReqId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PARENT_JOB_REQ_ID: NumberField<JobRequisitionFieldControls> = new NumberField('parentJobReqId', JobRequisitionFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[positionNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const POSITION_NUMBER: NumberField<JobRequisitionFieldControls> = new NumberField('positionNumber', JobRequisitionFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[questions]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const QUESTIONS: NumberField<JobRequisitionFieldControls> = new NumberField('questions', JobRequisitionFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[ratedApplicantCount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RATED_APPLICANT_COUNT: NumberField<JobRequisitionFieldControls> = new NumberField('ratedApplicantCount', JobRequisitionFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[recruiter]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RECRUITER: NumberField<JobRequisitionFieldControls> = new NumberField('recruiter', JobRequisitionFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[recruiterTeam]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RECRUITER_TEAM: NumberField<JobRequisitionFieldControls> = new NumberField('recruiterTeam', JobRequisitionFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[recruiterTeamGroup]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RECRUITER_TEAM_GROUP: NumberField<JobRequisitionFieldControls> = new NumberField('recruiterTeamGroup', JobRequisitionFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[restorecoordinatorTeamAdminDefaults]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RESTORECOORDINATOR_TEAM_ADMIN_DEFAULTS: NumberField<JobRequisitionFieldControls> = new NumberField('restorecoordinatorTeamAdminDefaults', JobRequisitionFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[restorehiringManagerTeamAdminDefaults]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RESTOREHIRING_MANAGER_TEAM_ADMIN_DEFAULTS: NumberField<JobRequisitionFieldControls> = new NumberField('restorehiringManagerTeamAdminDefaults', JobRequisitionFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[restorerecruiterTeamAdminDefaults]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RESTORERECRUITER_TEAM_ADMIN_DEFAULTS: NumberField<JobRequisitionFieldControls> = new NumberField('restorerecruiterTeamAdminDefaults', JobRequisitionFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[restoresecondRecruiterTeamAdminDefaults]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RESTORESECOND_RECRUITER_TEAM_ADMIN_DEFAULTS: NumberField<JobRequisitionFieldControls> = new NumberField('restoresecondRecruiterTeamAdminDefaults', JobRequisitionFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[restoresourcerTeamAdminDefaults]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RESTORESOURCER_TEAM_ADMIN_DEFAULTS: NumberField<JobRequisitionFieldControls> = new NumberField('restoresourcerTeamAdminDefaults', JobRequisitionFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[restorevTeamAdminDefaults]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RESTOREV_TEAM_ADMIN_DEFAULTS: NumberField<JobRequisitionFieldControls> = new NumberField('restorevTeamAdminDefaults', JobRequisitionFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[restorevpOfStaffingTeamAdminDefaults]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RESTOREVP_OF_STAFFING_TEAM_ADMIN_DEFAULTS: NumberField<JobRequisitionFieldControls> = new NumberField('restorevpOfStaffingTeamAdminDefaults', JobRequisitionFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[reverseScale]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REVERSE_SCALE: NumberField<JobRequisitionFieldControls> = new NumberField('reverseScale', JobRequisitionFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[routeMap]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ROUTE_MAP: NumberField<JobRequisitionFieldControls> = new NumberField('routeMap', JobRequisitionFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[salaryMax]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALARY_MAX: NumberField<JobRequisitionFieldControls> = new NumberField('salaryMax', JobRequisitionFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[salaryMid]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALARY_MID: NumberField<JobRequisitionFieldControls> = new NumberField('salaryMid', JobRequisitionFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[salaryMin]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALARY_MIN: NumberField<JobRequisitionFieldControls> = new NumberField('salaryMin', JobRequisitionFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[secondRecruiter]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SECOND_RECRUITER: NumberField<JobRequisitionFieldControls> = new NumberField('secondRecruiter', JobRequisitionFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[secondRecruiterTeam]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SECOND_RECRUITER_TEAM: NumberField<JobRequisitionFieldControls> = new NumberField('secondRecruiterTeam', JobRequisitionFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[secondRecruiterTeamGroup]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SECOND_RECRUITER_TEAM_GROUP: NumberField<JobRequisitionFieldControls> = new NumberField('secondRecruiterTeamGroup', JobRequisitionFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[sourcer]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SOURCER: NumberField<JobRequisitionFieldControls> = new NumberField('sourcer', JobRequisitionFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[sourcerTeam]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SOURCER_TEAM: NumberField<JobRequisitionFieldControls> = new NumberField('sourcerTeam', JobRequisitionFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[sourcerTeamGroup]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SOURCER_TEAM_GROUP: NumberField<JobRequisitionFieldControls> = new NumberField('sourcerTeamGroup', JobRequisitionFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[status]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS: NumberField<JobRequisitionFieldControls> = new NumberField('status', JobRequisitionFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[statusSetId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS_SET_ID: NumberField<JobRequisitionFieldControls> = new NumberField('statusSetId', JobRequisitionFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[templateId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TEMPLATE_ID: NumberField<JobRequisitionFieldControls> = new NumberField('templateId', JobRequisitionFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[templateName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TEMPLATE_NAME: NumberField<JobRequisitionFieldControls> = new NumberField('templateName', JobRequisitionFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[templateType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TEMPLATE_TYPE: NumberField<JobRequisitionFieldControls> = new NumberField('templateType', JobRequisitionFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[timeToFill]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TIME_TO_FILL: NumberField<JobRequisitionFieldControls> = new NumberField('timeToFill', JobRequisitionFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[vTeam]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const V_TEAM: NumberField<JobRequisitionFieldControls> = new NumberField('vTeam', JobRequisitionFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[vTeamGroup]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const V_TEAM_GROUP: NumberField<JobRequisitionFieldControls> = new NumberField('vTeamGroup', JobRequisitionFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[vpOfStaffing]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VP_OF_STAFFING: NumberField<JobRequisitionFieldControls> = new NumberField('vpOfStaffing', JobRequisitionFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[vpOfStaffingTeam]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VP_OF_STAFFING_TEAM: NumberField<JobRequisitionFieldControls> = new NumberField('vpOfStaffingTeam', JobRequisitionFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[vpOfStaffingTeamGroup]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VP_OF_STAFFING_TEAM_GROUP: NumberField<JobRequisitionFieldControls> = new NumberField('vpOfStaffingTeamGroup', JobRequisitionFieldControls, 'Edm.Byte');
  /**
   * All fields of the JobRequisitionFieldControls entity.
   */
  export const _allFields: Array<NumberField<JobRequisitionFieldControls>> = [
    JobRequisitionFieldControls.AGE,
    JobRequisitionFieldControls.APP_TEMPLATE_ID,
    JobRequisitionFieldControls.APPROVER,
    JobRequisitionFieldControls.ASSESS_RATING_SCALE_NAME,
    JobRequisitionFieldControls.ASSESSMENT,
    JobRequisitionFieldControls.BUSINESS_UNIT_OBJ,
    JobRequisitionFieldControls.BUSINESS_UNIT_OBJ_CODE,
    JobRequisitionFieldControls.CANDIDATE_HIRED,
    JobRequisitionFieldControls.CANDIDATE_PROGRESS,
    JobRequisitionFieldControls.CLOSED_DATE_TIME,
    JobRequisitionFieldControls.COMPETENCIES,
    JobRequisitionFieldControls.COORDINATOR,
    JobRequisitionFieldControls.COORDINATOR_TEAM,
    JobRequisitionFieldControls.COORDINATOR_TEAM_GROUP,
    JobRequisitionFieldControls.CORPORATE_POSTING,
    JobRequisitionFieldControls.COST_CENTER_OBJ,
    JobRequisitionFieldControls.COST_CENTER_OBJ_CODE,
    JobRequisitionFieldControls.COUNTRY,
    JobRequisitionFieldControls.CREATED_DATE_TIME,
    JobRequisitionFieldControls.CURRENCY,
    JobRequisitionFieldControls.CURRENT_OWNER,
    JobRequisitionFieldControls.CUST_DURATION,
    JobRequisitionFieldControls.CUST_EMPLOYEE_CLASS,
    JobRequisitionFieldControls.CUST_FTE,
    JobRequisitionFieldControls.CUST_GLOBAL_JOB_TITLE,
    JobRequisitionFieldControls.CUST_HOURS_PER_WEEK,
    JobRequisitionFieldControls.CUST_INSTR_ASSESSMENTS,
    JobRequisitionFieldControls.CUST_INSTR_COUNTRY_FIELDS,
    JobRequisitionFieldControls.CUST_INSTR_FADV,
    JobRequisitionFieldControls.CUST_INSTR_JOB_POSTING,
    JobRequisitionFieldControls.CUST_INSTR_POS_MGMT,
    JobRequisitionFieldControls.CUST_INSTR_REQ_DETAILS,
    JobRequisitionFieldControls.CUST_INSTR_TEAM_DETAILS,
    JobRequisitionFieldControls.CUSTOM_COMMENTS,
    JobRequisitionFieldControls.DEFAULT_LANGUAGE,
    JobRequisitionFieldControls.DELETED,
    JobRequisitionFieldControls.DEPARTMENT_OBJ,
    JobRequisitionFieldControls.DEPARTMENT_OBJ_CODE,
    JobRequisitionFieldControls.DIVISION_OBJ,
    JobRequisitionFieldControls.DIVISION_OBJ_CODE,
    JobRequisitionFieldControls.EEO_GROUP,
    JobRequisitionFieldControls.EEO_JOB_CAT,
    JobRequisitionFieldControls.ERP_AMOUNT,
    JobRequisitionFieldControls.FILTER_1,
    JobRequisitionFieldControls.FILTER_3,
    JobRequisitionFieldControls.FILTER_4,
    JobRequisitionFieldControls.FLSA,
    JobRequisitionFieldControls.FORM_DATA_ID,
    JobRequisitionFieldControls.FORM_DUE_DATE,
    JobRequisitionFieldControls.HARDSTOP_STATUS,
    JobRequisitionFieldControls.HIRING_MANAGER,
    JobRequisitionFieldControls.HIRING_MANAGER_TEAM,
    JobRequisitionFieldControls.HIRING_MANAGER_TEAM_GROUP,
    JobRequisitionFieldControls.INSTR_INTERNAL_COMMENTS,
    JobRequisitionFieldControls.INT_END_DATE,
    JobRequisitionFieldControls.INT_START_DATE,
    JobRequisitionFieldControls.INTERNAL_STATUS,
    JobRequisitionFieldControls.INTERVIEW_GUIDE,
    JobRequisitionFieldControls.INTR_POSTING,
    JobRequisitionFieldControls.INTRANET_POSTING,
    JobRequisitionFieldControls.IS_DRAFT,
    JobRequisitionFieldControls.JOB_ANALYZER_REPORTING_DATA,
    JobRequisitionFieldControls.JOB_APPLICATIONS,
    JobRequisitionFieldControls.JOB_CODE,
    JobRequisitionFieldControls.JOB_GRADE,
    JobRequisitionFieldControls.JOB_LEVEL,
    JobRequisitionFieldControls.JOB_PROFILE,
    JobRequisitionFieldControls.JOB_REQ_FWD_CANDIDATES,
    JobRequisitionFieldControls.JOB_REQ_GU_ID,
    JobRequisitionFieldControls.JOB_REQ_ID,
    JobRequisitionFieldControls.JOB_REQ_LOCALE,
    JobRequisitionFieldControls.JOB_REQ_PERMISSIONS_NAV,
    JobRequisitionFieldControls.JOB_REQ_POSTINGS,
    JobRequisitionFieldControls.JOB_REQ_SCREENING_QUESTIONS,
    JobRequisitionFieldControls.JOB_ROLE,
    JobRequisitionFieldControls.JOB_START_DATE,
    JobRequisitionFieldControls.LAST_MODIFIED_BY,
    JobRequisitionFieldControls.LAST_MODIFIED_BY_NAV,
    JobRequisitionFieldControls.LAST_MODIFIED_DATE_TIME,
    JobRequisitionFieldControls.LAST_MODIFIED_PROXY_USER_ID,
    JobRequisitionFieldControls.LAST_MODIFIED_PROXY_USER_NAV,
    JobRequisitionFieldControls.LEGAL_ENTITY_OBJ,
    JobRequisitionFieldControls.LEGAL_ENTITY_OBJ_CODE,
    JobRequisitionFieldControls.LOCATION_OBJ,
    JobRequisitionFieldControls.LOCATION_OBJ_CODE,
    JobRequisitionFieldControls.LOCATION_OBJLIST,
    JobRequisitionFieldControls.MFIELD_1,
    JobRequisitionFieldControls.MFIELD_2,
    JobRequisitionFieldControls.NUMBER_OPENINGS,
    JobRequisitionFieldControls.OPENINGS_FILLED,
    JobRequisitionFieldControls.ORIGINATOR,
    JobRequisitionFieldControls.OVERALL_SCALE_NAME,
    JobRequisitionFieldControls.PARENT_JOB_REQ_ID,
    JobRequisitionFieldControls.POSITION_NUMBER,
    JobRequisitionFieldControls.QUESTIONS,
    JobRequisitionFieldControls.RATED_APPLICANT_COUNT,
    JobRequisitionFieldControls.RECRUITER,
    JobRequisitionFieldControls.RECRUITER_TEAM,
    JobRequisitionFieldControls.RECRUITER_TEAM_GROUP,
    JobRequisitionFieldControls.RESTORECOORDINATOR_TEAM_ADMIN_DEFAULTS,
    JobRequisitionFieldControls.RESTOREHIRING_MANAGER_TEAM_ADMIN_DEFAULTS,
    JobRequisitionFieldControls.RESTORERECRUITER_TEAM_ADMIN_DEFAULTS,
    JobRequisitionFieldControls.RESTORESECOND_RECRUITER_TEAM_ADMIN_DEFAULTS,
    JobRequisitionFieldControls.RESTORESOURCER_TEAM_ADMIN_DEFAULTS,
    JobRequisitionFieldControls.RESTOREV_TEAM_ADMIN_DEFAULTS,
    JobRequisitionFieldControls.RESTOREVP_OF_STAFFING_TEAM_ADMIN_DEFAULTS,
    JobRequisitionFieldControls.REVERSE_SCALE,
    JobRequisitionFieldControls.ROUTE_MAP,
    JobRequisitionFieldControls.SALARY_MAX,
    JobRequisitionFieldControls.SALARY_MID,
    JobRequisitionFieldControls.SALARY_MIN,
    JobRequisitionFieldControls.SECOND_RECRUITER,
    JobRequisitionFieldControls.SECOND_RECRUITER_TEAM,
    JobRequisitionFieldControls.SECOND_RECRUITER_TEAM_GROUP,
    JobRequisitionFieldControls.SOURCER,
    JobRequisitionFieldControls.SOURCER_TEAM,
    JobRequisitionFieldControls.SOURCER_TEAM_GROUP,
    JobRequisitionFieldControls.STATUS,
    JobRequisitionFieldControls.STATUS_SET_ID,
    JobRequisitionFieldControls.TEMPLATE_ID,
    JobRequisitionFieldControls.TEMPLATE_NAME,
    JobRequisitionFieldControls.TEMPLATE_TYPE,
    JobRequisitionFieldControls.TIME_TO_FILL,
    JobRequisitionFieldControls.V_TEAM,
    JobRequisitionFieldControls.V_TEAM_GROUP,
    JobRequisitionFieldControls.VP_OF_STAFFING,
    JobRequisitionFieldControls.VP_OF_STAFFING_TEAM,
    JobRequisitionFieldControls.VP_OF_STAFFING_TEAM_GROUP
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<JobRequisitionFieldControls> = new AllFields('*', JobRequisitionFieldControls);
  /**
   * All key fields of the JobRequisitionFieldControls entity.
   */
  export const _keyFields: Array<Selectable<JobRequisitionFieldControls>> = [JobRequisitionFieldControls.JOB_REQ_ID];
  /**
   * Mapping of all key field names to the respective static field property JobRequisitionFieldControls.
   */
  export const _keys: { [keys: string]: Selectable<JobRequisitionFieldControls> } = JobRequisitionFieldControls._keyFields.reduce((acc: { [keys: string]: Selectable<JobRequisitionFieldControls> }, field: Selectable<JobRequisitionFieldControls>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
