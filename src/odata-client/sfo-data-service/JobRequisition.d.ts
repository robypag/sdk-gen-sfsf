import { JobRequisitionRequestBuilder } from './JobRequisitionRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, DateField, Entity, EntityBuilderType, Link, NumberField, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "JobRequisition" of service "SFOData".
 */
export declare class JobRequisition extends Entity implements JobRequisitionType {
    /**
     * Technical entity name for JobRequisition.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for JobRequisition.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Age.
     */
    age: BigNumber;
    /**
     * Application Template Id.
     */
    appTemplateId: BigNumber;
    /**
     * Assess Rating Scale Name.
     */
    assessRatingScaleName: string;
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
    candidateProgress: BigNumber;
    /**
     * Date Closed.
     */
    closedDateTime: Moment;
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
    createdDateTime: Moment;
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
    deleted: string;
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
    formDataId: BigNumber;
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
    internalStatus: string;
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
    jobReqGuId: string;
    /**
     * Job Requisition Id.
     */
    jobReqId: BigNumber;
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
    lastModifiedBy: string;
    /**
     * Last Modified Date.
     */
    lastModifiedDateTime: Moment;
    /**
     * Last Modified Proxy User Id.
     */
    lastModifiedProxyUserId: string;
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
    overallScaleName: string;
    /**
     * Parent Job Req Id.
     * @nullable
     */
    parentJobReqId?: BigNumber;
    /**
     * Position Number.
     */
    positionNumber: string;
    /**
     * Rated Applicant Count.
     */
    ratedApplicantCount: BigNumber;
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
    reverseScale: string;
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
    statusSetId: BigNumber;
    /**
     * Template Id.
     */
    templateId: BigNumber;
    /**
     * Template Name.
     */
    templateName: string;
    /**
     * Template Type.
     */
    templateType: string;
    /**
     * Time to Fill.
     */
    timeToFill: number;
    /**
     * One-to-many navigation property to the [[JobRequisitionOperator]] entity.
     */
    approver: JobRequisitionOperator[];
    /**
     * One-to-many navigation property to the [[JobRequisitionAssessment]] entity.
     */
    assessment: JobRequisitionAssessment[];
    /**
     * One-to-one navigation property to the [[FoBusinessUnit]] entity.
     */
    businessUnitObj: FoBusinessUnit;
    /**
     * One-to-many navigation property to the [[RcmCompetency]] entity.
     */
    competencies: RcmCompetency[];
    /**
     * One-to-many navigation property to the [[JobRequisitionOperator]] entity.
     */
    coordinator: JobRequisitionOperator[];
    /**
     * One-to-many navigation property to the [[JobRequisitionOperator]] entity.
     */
    coordinatorTeam: JobRequisitionOperator[];
    /**
     * One-to-many navigation property to the [[JobRequisitionGroupOperator]] entity.
     */
    coordinatorTeamGroup: JobRequisitionGroupOperator[];
    /**
     * One-to-one navigation property to the [[FoCostCenter]] entity.
     */
    costCenterObj: FoCostCenter;
    /**
     * One-to-many navigation property to the [[JobRequisitionOperator]] entity.
     */
    currentOwner: JobRequisitionOperator[];
    /**
     * One-to-many navigation property to the [[PicklistOption]] entity.
     */
    custDuration: PicklistOption[];
    /**
     * One-to-one navigation property to the [[FoDepartment]] entity.
     */
    departmentObj: FoDepartment;
    /**
     * One-to-one navigation property to the [[FoDivision]] entity.
     */
    divisionObj: FoDivision;
    /**
     * One-to-many navigation property to the [[PicklistOption]] entity.
     */
    filter1: PicklistOption[];
    /**
     * One-to-many navigation property to the [[PicklistOption]] entity.
     */
    filter3: PicklistOption[];
    /**
     * One-to-many navigation property to the [[PicklistOption]] entity.
     */
    filter4: PicklistOption[];
    /**
     * One-to-many navigation property to the [[PicklistOption]] entity.
     */
    hardstopStatus: PicklistOption[];
    /**
     * One-to-many navigation property to the [[JobRequisitionOperator]] entity.
     */
    hiringManager: JobRequisitionOperator[];
    /**
     * One-to-many navigation property to the [[JobRequisitionOperator]] entity.
     */
    hiringManagerTeam: JobRequisitionOperator[];
    /**
     * One-to-many navigation property to the [[JobRequisitionGroupOperator]] entity.
     */
    hiringManagerTeamGroup: JobRequisitionGroupOperator[];
    /**
     * One-to-many navigation property to the [[Attachment]] entity.
     */
    interviewGuide: Attachment[];
    /**
     * One-to-many navigation property to the [[JobAnalyzerReportingData]] entity.
     */
    jobAnalyzerReportingData: JobAnalyzerReportingData[];
    /**
     * One-to-many navigation property to the [[JobApplication]] entity.
     */
    jobApplications: JobApplication[];
    /**
     * One-to-one navigation property to the [[JobProfile]] entity.
     */
    jobProfile: JobProfile;
    /**
     * One-to-many navigation property to the [[JobReqFwdCandidates]] entity.
     */
    jobReqFwdCandidates: JobReqFwdCandidates[];
    /**
     * One-to-many navigation property to the [[JobRequisitionLocale]] entity.
     */
    jobReqLocale: JobRequisitionLocale[];
    /**
     * One-to-one navigation property to the [[JobRequisitionFieldControls]] entity.
     */
    jobReqPermissionsNav: JobRequisitionFieldControls;
    /**
     * One-to-many navigation property to the [[JobRequisitionPosting]] entity.
     */
    jobReqPostings: JobRequisitionPosting[];
    /**
     * One-to-many navigation property to the [[JobReqScreeningQuestion]] entity.
     */
    jobReqScreeningQuestions: JobReqScreeningQuestion[];
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    lastModifiedByNav: User;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    lastModifiedProxyUserNav: User;
    /**
     * One-to-one navigation property to the [[FoCompany]] entity.
     */
    legalEntityObj: FoCompany;
    /**
     * One-to-many navigation property to the [[FoLocation]] entity.
     */
    locationObj: FoLocation[];
    /**
     * One-to-many navigation property to the [[JobReqFoLocation]] entity.
     */
    locationObjlist: JobReqFoLocation[];
    /**
     * One-to-many navigation property to the [[PicklistOption]] entity.
     */
    mfield1: PicklistOption[];
    /**
     * One-to-many navigation property to the [[PicklistOption]] entity.
     */
    mfield2: PicklistOption[];
    /**
     * One-to-many navigation property to the [[JobRequisitionOperator]] entity.
     */
    originator: JobRequisitionOperator[];
    /**
     * One-to-many navigation property to the [[JobReqQuestion]] entity.
     */
    questions: JobReqQuestion[];
    /**
     * One-to-many navigation property to the [[JobRequisitionOperator]] entity.
     */
    recruiter: JobRequisitionOperator[];
    /**
     * One-to-many navigation property to the [[JobRequisitionOperator]] entity.
     */
    recruiterTeam: JobRequisitionOperator[];
    /**
     * One-to-many navigation property to the [[JobRequisitionGroupOperator]] entity.
     */
    recruiterTeamGroup: JobRequisitionGroupOperator[];
    /**
     * One-to-one navigation property to the [[FormRouteMap]] entity.
     */
    routeMap: FormRouteMap;
    /**
     * One-to-many navigation property to the [[JobRequisitionOperator]] entity.
     */
    secondRecruiter: JobRequisitionOperator[];
    /**
     * One-to-many navigation property to the [[JobRequisitionOperator]] entity.
     */
    secondRecruiterTeam: JobRequisitionOperator[];
    /**
     * One-to-many navigation property to the [[JobRequisitionGroupOperator]] entity.
     */
    secondRecruiterTeamGroup: JobRequisitionGroupOperator[];
    /**
     * One-to-many navigation property to the [[JobRequisitionOperator]] entity.
     */
    sourcer: JobRequisitionOperator[];
    /**
     * One-to-many navigation property to the [[JobRequisitionOperator]] entity.
     */
    sourcerTeam: JobRequisitionOperator[];
    /**
     * One-to-many navigation property to the [[JobRequisitionGroupOperator]] entity.
     */
    sourcerTeamGroup: JobRequisitionGroupOperator[];
    /**
     * One-to-many navigation property to the [[PicklistOption]] entity.
     */
    status: PicklistOption[];
    /**
     * One-to-many navigation property to the [[JobRequisitionOperator]] entity.
     */
    vTeam: JobRequisitionOperator[];
    /**
     * One-to-many navigation property to the [[JobRequisitionGroupOperator]] entity.
     */
    vTeamGroup: JobRequisitionGroupOperator[];
    /**
     * One-to-many navigation property to the [[JobRequisitionOperator]] entity.
     */
    vpOfStaffing: JobRequisitionOperator[];
    /**
     * One-to-many navigation property to the [[JobRequisitionOperator]] entity.
     */
    vpOfStaffingTeam: JobRequisitionOperator[];
    /**
     * One-to-many navigation property to the [[JobRequisitionGroupOperator]] entity.
     */
    vpOfStaffingTeamGroup: JobRequisitionGroupOperator[];
    /**
     * Returns an entity builder to construct instances `JobRequisition`.
     * @returns A builder that constructs instances of entity type `JobRequisition`.
     */
    static builder(): EntityBuilderType<JobRequisition, JobRequisitionTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `JobRequisition` entity type.
     * @returns A `JobRequisition` request builder.
     */
    static requestBuilder(): JobRequisitionRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobRequisition`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `JobRequisition`.
     */
    static customField(fieldName: string): CustomField<JobRequisition>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
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
export declare namespace JobRequisition {
    /**
     * Static representation of the [[age]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const AGE: BigNumberField<JobRequisition>;
    /**
     * Static representation of the [[appTemplateId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const APP_TEMPLATE_ID: BigNumberField<JobRequisition>;
    /**
     * Static representation of the [[assessRatingScaleName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ASSESS_RATING_SCALE_NAME: StringField<JobRequisition>;
    /**
     * Static representation of the [[businessUnitObjCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_UNIT_OBJ_CODE: StringField<JobRequisition>;
    /**
     * Static representation of the [[candidateHired]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CANDIDATE_HIRED: BigNumberField<JobRequisition>;
    /**
     * Static representation of the [[candidateProgress]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CANDIDATE_PROGRESS: BigNumberField<JobRequisition>;
    /**
     * Static representation of the [[closedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CLOSED_DATE_TIME: DateField<JobRequisition>;
    /**
     * Static representation of the [[corporatePosting]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CORPORATE_POSTING: BooleanField<JobRequisition>;
    /**
     * Static representation of the [[costCenterObjCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COST_CENTER_OBJ_CODE: StringField<JobRequisition>;
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COUNTRY: StringField<JobRequisition>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<JobRequisition>;
    /**
     * Static representation of the [[currency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CURRENCY: StringField<JobRequisition>;
    /**
     * Static representation of the [[custEmployeeClass]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUST_EMPLOYEE_CLASS: StringField<JobRequisition>;
    /**
     * Static representation of the [[custFte]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUST_FTE: StringField<JobRequisition>;
    /**
     * Static representation of the [[custGlobalJobTitle]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUST_GLOBAL_JOB_TITLE: StringField<JobRequisition>;
    /**
     * Static representation of the [[custHoursPerWeek]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUST_HOURS_PER_WEEK: StringField<JobRequisition>;
    /**
     * Static representation of the [[custInstrAssessments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUST_INSTR_ASSESSMENTS: StringField<JobRequisition>;
    /**
     * Static representation of the [[custInstrCountryFields]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUST_INSTR_COUNTRY_FIELDS: StringField<JobRequisition>;
    /**
     * Static representation of the [[custInstrFadv]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUST_INSTR_FADV: StringField<JobRequisition>;
    /**
     * Static representation of the [[custInstrJobPosting]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUST_INSTR_JOB_POSTING: StringField<JobRequisition>;
    /**
     * Static representation of the [[custInstrPosMgmt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUST_INSTR_POS_MGMT: StringField<JobRequisition>;
    /**
     * Static representation of the [[custInstrReqDetails]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUST_INSTR_REQ_DETAILS: StringField<JobRequisition>;
    /**
     * Static representation of the [[custInstrTeamDetails]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUST_INSTR_TEAM_DETAILS: StringField<JobRequisition>;
    /**
     * Static representation of the [[customComments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOM_COMMENTS: StringField<JobRequisition>;
    /**
     * Static representation of the [[defaultLanguage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEFAULT_LANGUAGE: StringField<JobRequisition>;
    /**
     * Static representation of the [[deleted]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DELETED: StringField<JobRequisition>;
    /**
     * Static representation of the [[departmentObjCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEPARTMENT_OBJ_CODE: StringField<JobRequisition>;
    /**
     * Static representation of the [[divisionObjCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DIVISION_OBJ_CODE: StringField<JobRequisition>;
    /**
     * Static representation of the [[eeoGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EEO_GROUP: StringField<JobRequisition>;
    /**
     * Static representation of the [[eeoJobCat]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EEO_JOB_CAT: StringField<JobRequisition>;
    /**
     * Static representation of the [[erpAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ERP_AMOUNT: BigNumberField<JobRequisition>;
    /**
     * Static representation of the [[flsa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FLSA: StringField<JobRequisition>;
    /**
     * Static representation of the [[formDataId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FORM_DATA_ID: BigNumberField<JobRequisition>;
    /**
     * Static representation of the [[formDueDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FORM_DUE_DATE: DateField<JobRequisition>;
    /**
     * Static representation of the [[instrInternalComments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INSTR_INTERNAL_COMMENTS: StringField<JobRequisition>;
    /**
     * Static representation of the [[intEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INT_END_DATE: DateField<JobRequisition>;
    /**
     * Static representation of the [[intStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INT_START_DATE: DateField<JobRequisition>;
    /**
     * Static representation of the [[internalStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INTERNAL_STATUS: StringField<JobRequisition>;
    /**
     * Static representation of the [[intrPosting]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INTR_POSTING: StringField<JobRequisition>;
    /**
     * Static representation of the [[intranetPosting]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INTRANET_POSTING: BooleanField<JobRequisition>;
    /**
     * Static representation of the [[isDraft]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IS_DRAFT: BooleanField<JobRequisition>;
    /**
     * Static representation of the [[jobCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_CODE: StringField<JobRequisition>;
    /**
     * Static representation of the [[jobGrade]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_GRADE: StringField<JobRequisition>;
    /**
     * Static representation of the [[jobLevel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_LEVEL: StringField<JobRequisition>;
    /**
     * Static representation of the [[jobReqGuId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_REQ_GU_ID: StringField<JobRequisition>;
    /**
     * Static representation of the [[jobReqId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_REQ_ID: BigNumberField<JobRequisition>;
    /**
     * Static representation of the [[jobRole]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_ROLE: StringField<JobRequisition>;
    /**
     * Static representation of the [[jobStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_START_DATE: DateField<JobRequisition>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<JobRequisition>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<JobRequisition>;
    /**
     * Static representation of the [[lastModifiedProxyUserId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_PROXY_USER_ID: StringField<JobRequisition>;
    /**
     * Static representation of the [[legalEntityObjCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LEGAL_ENTITY_OBJ_CODE: StringField<JobRequisition>;
    /**
     * Static representation of the [[locationObjCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LOCATION_OBJ_CODE: StringField<JobRequisition>;
    /**
     * Static representation of the [[numberOpenings]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NUMBER_OPENINGS: BigNumberField<JobRequisition>;
    /**
     * Static representation of the [[openingsFilled]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OPENINGS_FILLED: BigNumberField<JobRequisition>;
    /**
     * Static representation of the [[overallScaleName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OVERALL_SCALE_NAME: StringField<JobRequisition>;
    /**
     * Static representation of the [[parentJobReqId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PARENT_JOB_REQ_ID: BigNumberField<JobRequisition>;
    /**
     * Static representation of the [[positionNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const POSITION_NUMBER: StringField<JobRequisition>;
    /**
     * Static representation of the [[ratedApplicantCount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RATED_APPLICANT_COUNT: BigNumberField<JobRequisition>;
    /**
     * Static representation of the [[restorecoordinatorTeamAdminDefaults]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RESTORECOORDINATOR_TEAM_ADMIN_DEFAULTS: BooleanField<JobRequisition>;
    /**
     * Static representation of the [[restorehiringManagerTeamAdminDefaults]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RESTOREHIRING_MANAGER_TEAM_ADMIN_DEFAULTS: BooleanField<JobRequisition>;
    /**
     * Static representation of the [[restorerecruiterTeamAdminDefaults]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RESTORERECRUITER_TEAM_ADMIN_DEFAULTS: BooleanField<JobRequisition>;
    /**
     * Static representation of the [[restoresecondRecruiterTeamAdminDefaults]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RESTORESECOND_RECRUITER_TEAM_ADMIN_DEFAULTS: BooleanField<JobRequisition>;
    /**
     * Static representation of the [[restoresourcerTeamAdminDefaults]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RESTORESOURCER_TEAM_ADMIN_DEFAULTS: BooleanField<JobRequisition>;
    /**
     * Static representation of the [[restorevTeamAdminDefaults]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RESTOREV_TEAM_ADMIN_DEFAULTS: BooleanField<JobRequisition>;
    /**
     * Static representation of the [[restorevpOfStaffingTeamAdminDefaults]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RESTOREVP_OF_STAFFING_TEAM_ADMIN_DEFAULTS: BooleanField<JobRequisition>;
    /**
     * Static representation of the [[reverseScale]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REVERSE_SCALE: StringField<JobRequisition>;
    /**
     * Static representation of the [[salaryMax]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALARY_MAX: BigNumberField<JobRequisition>;
    /**
     * Static representation of the [[salaryMid]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALARY_MID: BigNumberField<JobRequisition>;
    /**
     * Static representation of the [[salaryMin]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALARY_MIN: BigNumberField<JobRequisition>;
    /**
     * Static representation of the [[statusSetId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS_SET_ID: BigNumberField<JobRequisition>;
    /**
     * Static representation of the [[templateId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TEMPLATE_ID: BigNumberField<JobRequisition>;
    /**
     * Static representation of the [[templateName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TEMPLATE_NAME: StringField<JobRequisition>;
    /**
     * Static representation of the [[templateType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TEMPLATE_TYPE: StringField<JobRequisition>;
    /**
     * Static representation of the [[timeToFill]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TIME_TO_FILL: NumberField<JobRequisition>;
    /**
     * Static representation of the one-to-many navigation property [[approver]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const APPROVER: Link<JobRequisition, JobRequisitionOperator>;
    /**
     * Static representation of the one-to-many navigation property [[assessment]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ASSESSMENT: Link<JobRequisition, JobRequisitionAssessment>;
    /**
     * Static representation of the one-to-one navigation property [[businessUnitObj]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_UNIT_OBJ: OneToOneLink<JobRequisition, FoBusinessUnit>;
    /**
     * Static representation of the one-to-many navigation property [[competencies]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COMPETENCIES: Link<JobRequisition, RcmCompetency>;
    /**
     * Static representation of the one-to-many navigation property [[coordinator]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COORDINATOR: Link<JobRequisition, JobRequisitionOperator>;
    /**
     * Static representation of the one-to-many navigation property [[coordinatorTeam]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COORDINATOR_TEAM: Link<JobRequisition, JobRequisitionOperator>;
    /**
     * Static representation of the one-to-many navigation property [[coordinatorTeamGroup]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COORDINATOR_TEAM_GROUP: Link<JobRequisition, JobRequisitionGroupOperator>;
    /**
     * Static representation of the one-to-one navigation property [[costCenterObj]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COST_CENTER_OBJ: OneToOneLink<JobRequisition, FoCostCenter>;
    /**
     * Static representation of the one-to-many navigation property [[currentOwner]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CURRENT_OWNER: Link<JobRequisition, JobRequisitionOperator>;
    /**
     * Static representation of the one-to-many navigation property [[custDuration]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUST_DURATION: Link<JobRequisition, PicklistOption>;
    /**
     * Static representation of the one-to-one navigation property [[departmentObj]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEPARTMENT_OBJ: OneToOneLink<JobRequisition, FoDepartment>;
    /**
     * Static representation of the one-to-one navigation property [[divisionObj]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DIVISION_OBJ: OneToOneLink<JobRequisition, FoDivision>;
    /**
     * Static representation of the one-to-many navigation property [[filter1]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FILTER_1: Link<JobRequisition, PicklistOption>;
    /**
     * Static representation of the one-to-many navigation property [[filter3]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FILTER_3: Link<JobRequisition, PicklistOption>;
    /**
     * Static representation of the one-to-many navigation property [[filter4]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FILTER_4: Link<JobRequisition, PicklistOption>;
    /**
     * Static representation of the one-to-many navigation property [[hardstopStatus]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HARDSTOP_STATUS: Link<JobRequisition, PicklistOption>;
    /**
     * Static representation of the one-to-many navigation property [[hiringManager]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HIRING_MANAGER: Link<JobRequisition, JobRequisitionOperator>;
    /**
     * Static representation of the one-to-many navigation property [[hiringManagerTeam]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HIRING_MANAGER_TEAM: Link<JobRequisition, JobRequisitionOperator>;
    /**
     * Static representation of the one-to-many navigation property [[hiringManagerTeamGroup]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HIRING_MANAGER_TEAM_GROUP: Link<JobRequisition, JobRequisitionGroupOperator>;
    /**
     * Static representation of the one-to-many navigation property [[interviewGuide]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INTERVIEW_GUIDE: Link<JobRequisition, Attachment>;
    /**
     * Static representation of the one-to-many navigation property [[jobAnalyzerReportingData]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_ANALYZER_REPORTING_DATA: Link<JobRequisition, JobAnalyzerReportingData>;
    /**
     * Static representation of the one-to-many navigation property [[jobApplications]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_APPLICATIONS: Link<JobRequisition, JobApplication>;
    /**
     * Static representation of the one-to-one navigation property [[jobProfile]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_PROFILE: OneToOneLink<JobRequisition, JobProfile>;
    /**
     * Static representation of the one-to-many navigation property [[jobReqFwdCandidates]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_REQ_FWD_CANDIDATES: Link<JobRequisition, JobReqFwdCandidates>;
    /**
     * Static representation of the one-to-many navigation property [[jobReqLocale]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_REQ_LOCALE: Link<JobRequisition, JobRequisitionLocale>;
    /**
     * Static representation of the one-to-one navigation property [[jobReqPermissionsNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_REQ_PERMISSIONS_NAV: OneToOneLink<JobRequisition, JobRequisitionFieldControls>;
    /**
     * Static representation of the one-to-many navigation property [[jobReqPostings]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_REQ_POSTINGS: Link<JobRequisition, JobRequisitionPosting>;
    /**
     * Static representation of the one-to-many navigation property [[jobReqScreeningQuestions]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_REQ_SCREENING_QUESTIONS: Link<JobRequisition, JobReqScreeningQuestion>;
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY_NAV: OneToOneLink<JobRequisition, User>;
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedProxyUserNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_PROXY_USER_NAV: OneToOneLink<JobRequisition, User>;
    /**
     * Static representation of the one-to-one navigation property [[legalEntityObj]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LEGAL_ENTITY_OBJ: OneToOneLink<JobRequisition, FoCompany>;
    /**
     * Static representation of the one-to-many navigation property [[locationObj]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LOCATION_OBJ: Link<JobRequisition, FoLocation>;
    /**
     * Static representation of the one-to-many navigation property [[locationObjlist]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LOCATION_OBJLIST: Link<JobRequisition, JobReqFoLocation>;
    /**
     * Static representation of the one-to-many navigation property [[mfield1]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MFIELD_1: Link<JobRequisition, PicklistOption>;
    /**
     * Static representation of the one-to-many navigation property [[mfield2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MFIELD_2: Link<JobRequisition, PicklistOption>;
    /**
     * Static representation of the one-to-many navigation property [[originator]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ORIGINATOR: Link<JobRequisition, JobRequisitionOperator>;
    /**
     * Static representation of the one-to-many navigation property [[questions]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const QUESTIONS: Link<JobRequisition, JobReqQuestion>;
    /**
     * Static representation of the one-to-many navigation property [[recruiter]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RECRUITER: Link<JobRequisition, JobRequisitionOperator>;
    /**
     * Static representation of the one-to-many navigation property [[recruiterTeam]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RECRUITER_TEAM: Link<JobRequisition, JobRequisitionOperator>;
    /**
     * Static representation of the one-to-many navigation property [[recruiterTeamGroup]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RECRUITER_TEAM_GROUP: Link<JobRequisition, JobRequisitionGroupOperator>;
    /**
     * Static representation of the one-to-one navigation property [[routeMap]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ROUTE_MAP: OneToOneLink<JobRequisition, FormRouteMap>;
    /**
     * Static representation of the one-to-many navigation property [[secondRecruiter]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SECOND_RECRUITER: Link<JobRequisition, JobRequisitionOperator>;
    /**
     * Static representation of the one-to-many navigation property [[secondRecruiterTeam]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SECOND_RECRUITER_TEAM: Link<JobRequisition, JobRequisitionOperator>;
    /**
     * Static representation of the one-to-many navigation property [[secondRecruiterTeamGroup]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SECOND_RECRUITER_TEAM_GROUP: Link<JobRequisition, JobRequisitionGroupOperator>;
    /**
     * Static representation of the one-to-many navigation property [[sourcer]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SOURCER: Link<JobRequisition, JobRequisitionOperator>;
    /**
     * Static representation of the one-to-many navigation property [[sourcerTeam]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SOURCER_TEAM: Link<JobRequisition, JobRequisitionOperator>;
    /**
     * Static representation of the one-to-many navigation property [[sourcerTeamGroup]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SOURCER_TEAM_GROUP: Link<JobRequisition, JobRequisitionGroupOperator>;
    /**
     * Static representation of the one-to-many navigation property [[status]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS: Link<JobRequisition, PicklistOption>;
    /**
     * Static representation of the one-to-many navigation property [[vTeam]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const V_TEAM: Link<JobRequisition, JobRequisitionOperator>;
    /**
     * Static representation of the one-to-many navigation property [[vTeamGroup]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const V_TEAM_GROUP: Link<JobRequisition, JobRequisitionGroupOperator>;
    /**
     * Static representation of the one-to-many navigation property [[vpOfStaffing]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VP_OF_STAFFING: Link<JobRequisition, JobRequisitionOperator>;
    /**
     * Static representation of the one-to-many navigation property [[vpOfStaffingTeam]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VP_OF_STAFFING_TEAM: Link<JobRequisition, JobRequisitionOperator>;
    /**
     * Static representation of the one-to-many navigation property [[vpOfStaffingTeamGroup]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VP_OF_STAFFING_TEAM_GROUP: Link<JobRequisition, JobRequisitionGroupOperator>;
    /**
     * All fields of the JobRequisition entity.
     */
    const _allFields: Array<BigNumberField<JobRequisition> | StringField<JobRequisition> | DateField<JobRequisition> | BooleanField<JobRequisition> | NumberField<JobRequisition> | Link<JobRequisition, JobRequisitionOperator> | Link<JobRequisition, JobRequisitionAssessment> | OneToOneLink<JobRequisition, FoBusinessUnit> | Link<JobRequisition, RcmCompetency> | Link<JobRequisition, JobRequisitionGroupOperator> | OneToOneLink<JobRequisition, FoCostCenter> | Link<JobRequisition, PicklistOption> | OneToOneLink<JobRequisition, FoDepartment> | OneToOneLink<JobRequisition, FoDivision> | Link<JobRequisition, Attachment> | Link<JobRequisition, JobAnalyzerReportingData> | Link<JobRequisition, JobApplication> | OneToOneLink<JobRequisition, JobProfile> | Link<JobRequisition, JobReqFwdCandidates> | Link<JobRequisition, JobRequisitionLocale> | OneToOneLink<JobRequisition, JobRequisitionFieldControls> | Link<JobRequisition, JobRequisitionPosting> | Link<JobRequisition, JobReqScreeningQuestion> | OneToOneLink<JobRequisition, User> | OneToOneLink<JobRequisition, FoCompany> | Link<JobRequisition, FoLocation> | Link<JobRequisition, JobReqFoLocation> | Link<JobRequisition, JobReqQuestion> | OneToOneLink<JobRequisition, FormRouteMap>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<JobRequisition>;
    /**
     * All key fields of the JobRequisition entity.
     */
    const _keyFields: Array<Selectable<JobRequisition>>;
    /**
     * Mapping of all key field names to the respective static field property JobRequisition.
     */
    const _keys: {
        [keys: string]: Selectable<JobRequisition>;
    };
}
//# sourceMappingURL=JobRequisition.d.ts.map