import { JobRequisitionFieldControlsRequestBuilder } from './JobRequisitionFieldControlsRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, NumberField, Selectable } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "JobRequisitionFieldControls" of service "SFOData".
 */
export declare class JobRequisitionFieldControls extends Entity implements JobRequisitionFieldControlsType {
    /**
     * Technical entity name for JobRequisitionFieldControls.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for JobRequisitionFieldControls.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
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
    jobReqId: number;
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
    static builder(): EntityBuilderType<JobRequisitionFieldControls, JobRequisitionFieldControlsTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `JobRequisitionFieldControls` entity type.
     * @returns A `JobRequisitionFieldControls` request builder.
     */
    static requestBuilder(): JobRequisitionFieldControlsRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobRequisitionFieldControls`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `JobRequisitionFieldControls`.
     */
    static customField(fieldName: string): CustomField<JobRequisitionFieldControls>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
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
export declare namespace JobRequisitionFieldControls {
    /**
     * Static representation of the [[age]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const AGE: NumberField<JobRequisitionFieldControls>;
    /**
     * Static representation of the [[appTemplateId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const APP_TEMPLATE_ID: NumberField<JobRequisitionFieldControls>;
    /**
     * Static representation of the [[approver]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const APPROVER: NumberField<JobRequisitionFieldControls>;
    /**
     * Static representation of the [[assessRatingScaleName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ASSESS_RATING_SCALE_NAME: NumberField<JobRequisitionFieldControls>;
    /**
     * Static representation of the [[assessment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ASSESSMENT: NumberField<JobRequisitionFieldControls>;
    /**
     * Static representation of the [[businessUnitObj]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_UNIT_OBJ: NumberField<JobRequisitionFieldControls>;
    /**
     * Static representation of the [[businessUnitObjCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_UNIT_OBJ_CODE: NumberField<JobRequisitionFieldControls>;
    /**
     * Static representation of the [[candidateHired]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CANDIDATE_HIRED: NumberField<JobRequisitionFieldControls>;
    /**
     * Static representation of the [[candidateProgress]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CANDIDATE_PROGRESS: NumberField<JobRequisitionFieldControls>;
    /**
     * Static representation of the [[closedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CLOSED_DATE_TIME: NumberField<JobRequisitionFieldControls>;
    /**
     * Static representation of the [[competencies]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COMPETENCIES: NumberField<JobRequisitionFieldControls>;
    /**
     * Static representation of the [[coordinator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COORDINATOR: NumberField<JobRequisitionFieldControls>;
    /**
     * Static representation of the [[coordinatorTeam]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COORDINATOR_TEAM: NumberField<JobRequisitionFieldControls>;
    /**
     * Static representation of the [[coordinatorTeamGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COORDINATOR_TEAM_GROUP: NumberField<JobRequisitionFieldControls>;
    /**
     * Static representation of the [[corporatePosting]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CORPORATE_POSTING: NumberField<JobRequisitionFieldControls>;
    /**
     * Static representation of the [[costCenterObj]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COST_CENTER_OBJ: NumberField<JobRequisitionFieldControls>;
    /**
     * Static representation of the [[costCenterObjCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COST_CENTER_OBJ_CODE: NumberField<JobRequisitionFieldControls>;
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COUNTRY: NumberField<JobRequisitionFieldControls>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: NumberField<JobRequisitionFieldControls>;
    /**
     * Static representation of the [[currency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CURRENCY: NumberField<JobRequisitionFieldControls>;
    /**
     * Static representation of the [[currentOwner]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CURRENT_OWNER: NumberField<JobRequisitionFieldControls>;
    /**
     * Static representation of the [[custDuration]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUST_DURATION: NumberField<JobRequisitionFieldControls>;
    /**
     * Static representation of the [[custEmployeeClass]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUST_EMPLOYEE_CLASS: NumberField<JobRequisitionFieldControls>;
    /**
     * Static representation of the [[custFte]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUST_FTE: NumberField<JobRequisitionFieldControls>;
    /**
     * Static representation of the [[custGlobalJobTitle]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUST_GLOBAL_JOB_TITLE: NumberField<JobRequisitionFieldControls>;
    /**
     * Static representation of the [[custHoursPerWeek]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUST_HOURS_PER_WEEK: NumberField<JobRequisitionFieldControls>;
    /**
     * Static representation of the [[custInstrAssessments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUST_INSTR_ASSESSMENTS: NumberField<JobRequisitionFieldControls>;
    /**
     * Static representation of the [[custInstrCountryFields]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUST_INSTR_COUNTRY_FIELDS: NumberField<JobRequisitionFieldControls>;
    /**
     * Static representation of the [[custInstrFadv]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUST_INSTR_FADV: NumberField<JobRequisitionFieldControls>;
    /**
     * Static representation of the [[custInstrJobPosting]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUST_INSTR_JOB_POSTING: NumberField<JobRequisitionFieldControls>;
    /**
     * Static representation of the [[custInstrPosMgmt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUST_INSTR_POS_MGMT: NumberField<JobRequisitionFieldControls>;
    /**
     * Static representation of the [[custInstrReqDetails]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUST_INSTR_REQ_DETAILS: NumberField<JobRequisitionFieldControls>;
    /**
     * Static representation of the [[custInstrTeamDetails]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUST_INSTR_TEAM_DETAILS: NumberField<JobRequisitionFieldControls>;
    /**
     * Static representation of the [[customComments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOM_COMMENTS: NumberField<JobRequisitionFieldControls>;
    /**
     * Static representation of the [[defaultLanguage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEFAULT_LANGUAGE: NumberField<JobRequisitionFieldControls>;
    /**
     * Static representation of the [[deleted]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DELETED: NumberField<JobRequisitionFieldControls>;
    /**
     * Static representation of the [[departmentObj]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEPARTMENT_OBJ: NumberField<JobRequisitionFieldControls>;
    /**
     * Static representation of the [[departmentObjCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEPARTMENT_OBJ_CODE: NumberField<JobRequisitionFieldControls>;
    /**
     * Static representation of the [[divisionObj]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DIVISION_OBJ: NumberField<JobRequisitionFieldControls>;
    /**
     * Static representation of the [[divisionObjCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DIVISION_OBJ_CODE: NumberField<JobRequisitionFieldControls>;
    /**
     * Static representation of the [[eeoGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EEO_GROUP: NumberField<JobRequisitionFieldControls>;
    /**
     * Static representation of the [[eeoJobCat]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EEO_JOB_CAT: NumberField<JobRequisitionFieldControls>;
    /**
     * Static representation of the [[erpAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ERP_AMOUNT: NumberField<JobRequisitionFieldControls>;
    /**
     * Static representation of the [[filter1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FILTER_1: NumberField<JobRequisitionFieldControls>;
    /**
     * Static representation of the [[filter3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FILTER_3: NumberField<JobRequisitionFieldControls>;
    /**
     * Static representation of the [[filter4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FILTER_4: NumberField<JobRequisitionFieldControls>;
    /**
     * Static representation of the [[flsa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FLSA: NumberField<JobRequisitionFieldControls>;
    /**
     * Static representation of the [[formDataId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FORM_DATA_ID: NumberField<JobRequisitionFieldControls>;
    /**
     * Static representation of the [[formDueDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FORM_DUE_DATE: NumberField<JobRequisitionFieldControls>;
    /**
     * Static representation of the [[hardstopStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HARDSTOP_STATUS: NumberField<JobRequisitionFieldControls>;
    /**
     * Static representation of the [[hiringManager]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HIRING_MANAGER: NumberField<JobRequisitionFieldControls>;
    /**
     * Static representation of the [[hiringManagerTeam]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HIRING_MANAGER_TEAM: NumberField<JobRequisitionFieldControls>;
    /**
     * Static representation of the [[hiringManagerTeamGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HIRING_MANAGER_TEAM_GROUP: NumberField<JobRequisitionFieldControls>;
    /**
     * Static representation of the [[instrInternalComments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INSTR_INTERNAL_COMMENTS: NumberField<JobRequisitionFieldControls>;
    /**
     * Static representation of the [[intEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INT_END_DATE: NumberField<JobRequisitionFieldControls>;
    /**
     * Static representation of the [[intStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INT_START_DATE: NumberField<JobRequisitionFieldControls>;
    /**
     * Static representation of the [[internalStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INTERNAL_STATUS: NumberField<JobRequisitionFieldControls>;
    /**
     * Static representation of the [[interviewGuide]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INTERVIEW_GUIDE: NumberField<JobRequisitionFieldControls>;
    /**
     * Static representation of the [[intrPosting]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INTR_POSTING: NumberField<JobRequisitionFieldControls>;
    /**
     * Static representation of the [[intranetPosting]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INTRANET_POSTING: NumberField<JobRequisitionFieldControls>;
    /**
     * Static representation of the [[isDraft]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IS_DRAFT: NumberField<JobRequisitionFieldControls>;
    /**
     * Static representation of the [[jobAnalyzerReportingData]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_ANALYZER_REPORTING_DATA: NumberField<JobRequisitionFieldControls>;
    /**
     * Static representation of the [[jobApplications]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_APPLICATIONS: NumberField<JobRequisitionFieldControls>;
    /**
     * Static representation of the [[jobCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_CODE: NumberField<JobRequisitionFieldControls>;
    /**
     * Static representation of the [[jobGrade]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_GRADE: NumberField<JobRequisitionFieldControls>;
    /**
     * Static representation of the [[jobLevel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_LEVEL: NumberField<JobRequisitionFieldControls>;
    /**
     * Static representation of the [[jobProfile]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_PROFILE: NumberField<JobRequisitionFieldControls>;
    /**
     * Static representation of the [[jobReqFwdCandidates]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_REQ_FWD_CANDIDATES: NumberField<JobRequisitionFieldControls>;
    /**
     * Static representation of the [[jobReqGuId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_REQ_GU_ID: NumberField<JobRequisitionFieldControls>;
    /**
     * Static representation of the [[jobReqId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_REQ_ID: NumberField<JobRequisitionFieldControls>;
    /**
     * Static representation of the [[jobReqLocale]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_REQ_LOCALE: NumberField<JobRequisitionFieldControls>;
    /**
     * Static representation of the [[jobReqPermissionsNav]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_REQ_PERMISSIONS_NAV: NumberField<JobRequisitionFieldControls>;
    /**
     * Static representation of the [[jobReqPostings]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_REQ_POSTINGS: NumberField<JobRequisitionFieldControls>;
    /**
     * Static representation of the [[jobReqScreeningQuestions]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_REQ_SCREENING_QUESTIONS: NumberField<JobRequisitionFieldControls>;
    /**
     * Static representation of the [[jobRole]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_ROLE: NumberField<JobRequisitionFieldControls>;
    /**
     * Static representation of the [[jobStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_START_DATE: NumberField<JobRequisitionFieldControls>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: NumberField<JobRequisitionFieldControls>;
    /**
     * Static representation of the [[lastModifiedByNav]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY_NAV: NumberField<JobRequisitionFieldControls>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: NumberField<JobRequisitionFieldControls>;
    /**
     * Static representation of the [[lastModifiedProxyUserId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_PROXY_USER_ID: NumberField<JobRequisitionFieldControls>;
    /**
     * Static representation of the [[lastModifiedProxyUserNav]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_PROXY_USER_NAV: NumberField<JobRequisitionFieldControls>;
    /**
     * Static representation of the [[legalEntityObj]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LEGAL_ENTITY_OBJ: NumberField<JobRequisitionFieldControls>;
    /**
     * Static representation of the [[legalEntityObjCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LEGAL_ENTITY_OBJ_CODE: NumberField<JobRequisitionFieldControls>;
    /**
     * Static representation of the [[locationObj]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LOCATION_OBJ: NumberField<JobRequisitionFieldControls>;
    /**
     * Static representation of the [[locationObjCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LOCATION_OBJ_CODE: NumberField<JobRequisitionFieldControls>;
    /**
     * Static representation of the [[locationObjlist]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LOCATION_OBJLIST: NumberField<JobRequisitionFieldControls>;
    /**
     * Static representation of the [[mfield1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MFIELD_1: NumberField<JobRequisitionFieldControls>;
    /**
     * Static representation of the [[mfield2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MFIELD_2: NumberField<JobRequisitionFieldControls>;
    /**
     * Static representation of the [[numberOpenings]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NUMBER_OPENINGS: NumberField<JobRequisitionFieldControls>;
    /**
     * Static representation of the [[openingsFilled]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OPENINGS_FILLED: NumberField<JobRequisitionFieldControls>;
    /**
     * Static representation of the [[originator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ORIGINATOR: NumberField<JobRequisitionFieldControls>;
    /**
     * Static representation of the [[overallScaleName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OVERALL_SCALE_NAME: NumberField<JobRequisitionFieldControls>;
    /**
     * Static representation of the [[parentJobReqId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PARENT_JOB_REQ_ID: NumberField<JobRequisitionFieldControls>;
    /**
     * Static representation of the [[positionNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const POSITION_NUMBER: NumberField<JobRequisitionFieldControls>;
    /**
     * Static representation of the [[questions]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const QUESTIONS: NumberField<JobRequisitionFieldControls>;
    /**
     * Static representation of the [[ratedApplicantCount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RATED_APPLICANT_COUNT: NumberField<JobRequisitionFieldControls>;
    /**
     * Static representation of the [[recruiter]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RECRUITER: NumberField<JobRequisitionFieldControls>;
    /**
     * Static representation of the [[recruiterTeam]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RECRUITER_TEAM: NumberField<JobRequisitionFieldControls>;
    /**
     * Static representation of the [[recruiterTeamGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RECRUITER_TEAM_GROUP: NumberField<JobRequisitionFieldControls>;
    /**
     * Static representation of the [[restorecoordinatorTeamAdminDefaults]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RESTORECOORDINATOR_TEAM_ADMIN_DEFAULTS: NumberField<JobRequisitionFieldControls>;
    /**
     * Static representation of the [[restorehiringManagerTeamAdminDefaults]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RESTOREHIRING_MANAGER_TEAM_ADMIN_DEFAULTS: NumberField<JobRequisitionFieldControls>;
    /**
     * Static representation of the [[restorerecruiterTeamAdminDefaults]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RESTORERECRUITER_TEAM_ADMIN_DEFAULTS: NumberField<JobRequisitionFieldControls>;
    /**
     * Static representation of the [[restoresecondRecruiterTeamAdminDefaults]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RESTORESECOND_RECRUITER_TEAM_ADMIN_DEFAULTS: NumberField<JobRequisitionFieldControls>;
    /**
     * Static representation of the [[restoresourcerTeamAdminDefaults]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RESTORESOURCER_TEAM_ADMIN_DEFAULTS: NumberField<JobRequisitionFieldControls>;
    /**
     * Static representation of the [[restorevTeamAdminDefaults]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RESTOREV_TEAM_ADMIN_DEFAULTS: NumberField<JobRequisitionFieldControls>;
    /**
     * Static representation of the [[restorevpOfStaffingTeamAdminDefaults]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RESTOREVP_OF_STAFFING_TEAM_ADMIN_DEFAULTS: NumberField<JobRequisitionFieldControls>;
    /**
     * Static representation of the [[reverseScale]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REVERSE_SCALE: NumberField<JobRequisitionFieldControls>;
    /**
     * Static representation of the [[routeMap]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ROUTE_MAP: NumberField<JobRequisitionFieldControls>;
    /**
     * Static representation of the [[salaryMax]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALARY_MAX: NumberField<JobRequisitionFieldControls>;
    /**
     * Static representation of the [[salaryMid]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALARY_MID: NumberField<JobRequisitionFieldControls>;
    /**
     * Static representation of the [[salaryMin]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALARY_MIN: NumberField<JobRequisitionFieldControls>;
    /**
     * Static representation of the [[secondRecruiter]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SECOND_RECRUITER: NumberField<JobRequisitionFieldControls>;
    /**
     * Static representation of the [[secondRecruiterTeam]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SECOND_RECRUITER_TEAM: NumberField<JobRequisitionFieldControls>;
    /**
     * Static representation of the [[secondRecruiterTeamGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SECOND_RECRUITER_TEAM_GROUP: NumberField<JobRequisitionFieldControls>;
    /**
     * Static representation of the [[sourcer]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SOURCER: NumberField<JobRequisitionFieldControls>;
    /**
     * Static representation of the [[sourcerTeam]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SOURCER_TEAM: NumberField<JobRequisitionFieldControls>;
    /**
     * Static representation of the [[sourcerTeamGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SOURCER_TEAM_GROUP: NumberField<JobRequisitionFieldControls>;
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS: NumberField<JobRequisitionFieldControls>;
    /**
     * Static representation of the [[statusSetId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS_SET_ID: NumberField<JobRequisitionFieldControls>;
    /**
     * Static representation of the [[templateId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TEMPLATE_ID: NumberField<JobRequisitionFieldControls>;
    /**
     * Static representation of the [[templateName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TEMPLATE_NAME: NumberField<JobRequisitionFieldControls>;
    /**
     * Static representation of the [[templateType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TEMPLATE_TYPE: NumberField<JobRequisitionFieldControls>;
    /**
     * Static representation of the [[timeToFill]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TIME_TO_FILL: NumberField<JobRequisitionFieldControls>;
    /**
     * Static representation of the [[vTeam]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const V_TEAM: NumberField<JobRequisitionFieldControls>;
    /**
     * Static representation of the [[vTeamGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const V_TEAM_GROUP: NumberField<JobRequisitionFieldControls>;
    /**
     * Static representation of the [[vpOfStaffing]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VP_OF_STAFFING: NumberField<JobRequisitionFieldControls>;
    /**
     * Static representation of the [[vpOfStaffingTeam]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VP_OF_STAFFING_TEAM: NumberField<JobRequisitionFieldControls>;
    /**
     * Static representation of the [[vpOfStaffingTeamGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VP_OF_STAFFING_TEAM_GROUP: NumberField<JobRequisitionFieldControls>;
    /**
     * All fields of the JobRequisitionFieldControls entity.
     */
    const _allFields: Array<NumberField<JobRequisitionFieldControls>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<JobRequisitionFieldControls>;
    /**
     * All key fields of the JobRequisitionFieldControls entity.
     */
    const _keyFields: Array<Selectable<JobRequisitionFieldControls>>;
    /**
     * Mapping of all key field names to the respective static field property JobRequisitionFieldControls.
     */
    const _keys: {
        [keys: string]: Selectable<JobRequisitionFieldControls>;
    };
}
//# sourceMappingURL=JobRequisitionFieldControls.d.ts.map