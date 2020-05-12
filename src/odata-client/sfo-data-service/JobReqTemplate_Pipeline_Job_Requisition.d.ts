import { JobReqTemplate_Pipeline_Job_RequisitionRequestBuilder } from './JobReqTemplate_Pipeline_Job_RequisitionRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "JobReqTemplate_Pipeline_Job_Requisition" of service "SFOData".
 */
export declare class JobReqTemplate_Pipeline_Job_Requisition extends Entity implements JobReqTemplate_Pipeline_Job_RequisitionType {
    /**
     * Technical entity name for JobReqTemplate_Pipeline_Job_Requisition.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for JobReqTemplate_Pipeline_Job_Requisition.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Assessments.
     * @nullable
     */
    assessment?: string;
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
     * Position Country.
     */
    country: string;
    /**
     * Assessment Information.
     * @nullable
     */
    custInstrAssessments?: string;
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
     * End.
     * @nullable
     */
    end?: Moment;
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
    extListingLayout: string;
    /**
     * Integrations External Start Date.
     * @nullable
     */
    extStartDate?: Moment;
    /**
     * External Title.
     */
    extTitle: string;
    /**
     * External Private Posting.
     * @nullable
     */
    externalPrivatePosting?: boolean;
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
    id: string;
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
    jobCode: string;
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
    jobStartDate: Moment;
    /**
     * Internal Description.
     */
    listingLayout: string;
    /**
     * Number of Openings.
     */
    numberOpenings: BigNumber;
    /**
     * Position Number.
     */
    positionNumber: string;
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
    templateId: BigNumber;
    /**
     * Internal Title.
     */
    title: string;
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
    businessUnitObj: FoBusinessUnit;
    /**
     * One-to-many navigation property to the [[JobRequisitionOperator]] entity.
     */
    coordinatorName: JobRequisitionOperator[];
    /**
     * One-to-many navigation property to the [[JobRequisitionOperator]] entity.
     */
    coordinatorTeam: JobRequisitionOperator[];
    /**
     * One-to-one navigation property to the [[FoCostCenter]] entity.
     */
    costCenterObj: FoCostCenter;
    /**
     * One-to-one navigation property to the [[FoDepartment]] entity.
     */
    departmentObj: FoDepartment;
    /**
     * One-to-one navigation property to the [[FoDivision]] entity.
     */
    divisionObj: FoDivision;
    /**
     * One-to-one navigation property to the [[PicklistOption]] entity.
     */
    filter1: PicklistOption;
    /**
     * One-to-one navigation property to the [[PicklistOption]] entity.
     */
    filter3: PicklistOption;
    /**
     * One-to-one navigation property to the [[PicklistOption]] entity.
     */
    filter4: PicklistOption;
    /**
     * One-to-one navigation property to the [[PicklistOption]] entity.
     */
    hardstopStatus: PicklistOption;
    /**
     * One-to-many navigation property to the [[JobRequisitionOperator]] entity.
     */
    hiringManagerName: JobRequisitionOperator[];
    /**
     * One-to-many navigation property to the [[JobRequisitionOperator]] entity.
     */
    hiringManagerTeam: JobRequisitionOperator[];
    /**
     * One-to-many navigation property to the [[Attachment]] entity.
     */
    interviewGuide: Attachment[];
    /**
     * One-to-one navigation property to the [[FoCompany]] entity.
     */
    legalEntityObj: FoCompany;
    /**
     * One-to-many navigation property to the [[FoLocation]] entity.
     */
    locationObj: FoLocation[];
    /**
     * One-to-one navigation property to the [[PicklistOption]] entity.
     */
    mfield1: PicklistOption;
    /**
     * One-to-one navigation property to the [[PicklistOption]] entity.
     */
    mfield2: PicklistOption;
    /**
     * One-to-many navigation property to the [[JobRequisitionOperator]] entity.
     */
    recruiterName: JobRequisitionOperator[];
    /**
     * One-to-many navigation property to the [[JobRequisitionOperator]] entity.
     */
    recruiterTeam: JobRequisitionOperator[];
    /**
     * One-to-many navigation property to the [[JobRequisitionOperator]] entity.
     */
    secondRecruiterName: JobRequisitionOperator[];
    /**
     * One-to-many navigation property to the [[JobRequisitionOperator]] entity.
     */
    secondRecruiterTeam: JobRequisitionOperator[];
    /**
     * One-to-many navigation property to the [[JobRequisitionOperator]] entity.
     */
    sourcerName: JobRequisitionOperator[];
    /**
     * One-to-many navigation property to the [[JobRequisitionOperator]] entity.
     */
    sourcerTeam: JobRequisitionOperator[];
    /**
     * One-to-one navigation property to the [[PicklistOption]] entity.
     */
    status: PicklistOption;
    /**
     * One-to-many navigation property to the [[JobRequisitionOperator]] entity.
     */
    vTeam: JobRequisitionOperator[];
    /**
     * One-to-many navigation property to the [[JobRequisitionOperator]] entity.
     */
    vpOfStaffingName: JobRequisitionOperator[];
    /**
     * One-to-many navigation property to the [[JobRequisitionOperator]] entity.
     */
    vpOfStaffingTeam: JobRequisitionOperator[];
    /**
     * Returns an entity builder to construct instances `JobReqTemplate_Pipeline_Job_Requisition`.
     * @returns A builder that constructs instances of entity type `JobReqTemplate_Pipeline_Job_Requisition`.
     */
    static builder(): EntityBuilderType<JobReqTemplate_Pipeline_Job_Requisition, JobReqTemplate_Pipeline_Job_RequisitionTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `JobReqTemplate_Pipeline_Job_Requisition` entity type.
     * @returns A `JobReqTemplate_Pipeline_Job_Requisition` request builder.
     */
    static requestBuilder(): JobReqTemplate_Pipeline_Job_RequisitionRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobReqTemplate_Pipeline_Job_Requisition`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `JobReqTemplate_Pipeline_Job_Requisition`.
     */
    static customField(fieldName: string): CustomField<JobReqTemplate_Pipeline_Job_Requisition>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { FoBusinessUnit, FoBusinessUnitType } from './FoBusinessUnit';
import { JobRequisitionOperator, JobRequisitionOperatorType } from './JobRequisitionOperator';
import { FoCostCenter, FoCostCenterType } from './FoCostCenter';
import { FoDepartment, FoDepartmentType } from './FoDepartment';
import { FoDivision, FoDivisionType } from './FoDivision';
import { PicklistOption, PicklistOptionType } from './PicklistOption';
import { Attachment, AttachmentType } from './Attachment';
import { FoCompany, FoCompanyType } from './FoCompany';
import { FoLocation, FoLocationType } from './FoLocation';
export interface JobReqTemplate_Pipeline_Job_RequisitionType {
    assessment?: string;
    candidateHired?: BigNumber;
    coordinatorEmail?: string;
    coordinatorFax?: string;
    coordinatorPhone?: string;
    corporatePosting?: boolean;
    country: string;
    custInstrAssessments?: string;
    custInstrJobPosting?: string;
    custInstrPosMgmt?: string;
    custInstrReqDetails?: string;
    custInstrTeamDetails?: string;
    customComments?: string;
    defaultLanguage?: string;
    end?: Moment;
    extEndDate?: Moment;
    extJobDescFooter?: string;
    extJobDescHeader?: string;
    extListingLayout: string;
    extStartDate?: Moment;
    extTitle: string;
    externalPrivatePosting?: boolean;
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
    jobPostLanguage?: string;
    jobRole?: string;
    jobStartDate: Moment;
    listingLayout: string;
    numberOpenings: BigNumber;
    positionNumber: string;
    questions?: string;
    recruiterEmail?: string;
    recruiterFax?: string;
    recruiterPhone?: string;
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
export interface JobReqTemplate_Pipeline_Job_RequisitionTypeForceMandatory {
    assessment: string;
    candidateHired: BigNumber;
    coordinatorEmail: string;
    coordinatorFax: string;
    coordinatorPhone: string;
    corporatePosting: boolean;
    country: string;
    custInstrAssessments: string;
    custInstrJobPosting: string;
    custInstrPosMgmt: string;
    custInstrReqDetails: string;
    custInstrTeamDetails: string;
    customComments: string;
    defaultLanguage: string;
    end: Moment;
    extEndDate: Moment;
    extJobDescFooter: string;
    extJobDescHeader: string;
    extListingLayout: string;
    extStartDate: Moment;
    extTitle: string;
    externalPrivatePosting: boolean;
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
    jobPostLanguage: string;
    jobRole: string;
    jobStartDate: Moment;
    listingLayout: string;
    numberOpenings: BigNumber;
    positionNumber: string;
    questions: string;
    recruiterEmail: string;
    recruiterFax: string;
    recruiterPhone: string;
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
export declare namespace JobReqTemplate_Pipeline_Job_Requisition {
    /**
     * Static representation of the [[assessment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ASSESSMENT: StringField<JobReqTemplate_Pipeline_Job_Requisition>;
    /**
     * Static representation of the [[candidateHired]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CANDIDATE_HIRED: BigNumberField<JobReqTemplate_Pipeline_Job_Requisition>;
    /**
     * Static representation of the [[coordinatorEmail]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COORDINATOR_EMAIL: StringField<JobReqTemplate_Pipeline_Job_Requisition>;
    /**
     * Static representation of the [[coordinatorFax]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COORDINATOR_FAX: StringField<JobReqTemplate_Pipeline_Job_Requisition>;
    /**
     * Static representation of the [[coordinatorPhone]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COORDINATOR_PHONE: StringField<JobReqTemplate_Pipeline_Job_Requisition>;
    /**
     * Static representation of the [[corporatePosting]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CORPORATE_POSTING: BooleanField<JobReqTemplate_Pipeline_Job_Requisition>;
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COUNTRY: StringField<JobReqTemplate_Pipeline_Job_Requisition>;
    /**
     * Static representation of the [[custInstrAssessments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUST_INSTR_ASSESSMENTS: StringField<JobReqTemplate_Pipeline_Job_Requisition>;
    /**
     * Static representation of the [[custInstrJobPosting]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUST_INSTR_JOB_POSTING: StringField<JobReqTemplate_Pipeline_Job_Requisition>;
    /**
     * Static representation of the [[custInstrPosMgmt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUST_INSTR_POS_MGMT: StringField<JobReqTemplate_Pipeline_Job_Requisition>;
    /**
     * Static representation of the [[custInstrReqDetails]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUST_INSTR_REQ_DETAILS: StringField<JobReqTemplate_Pipeline_Job_Requisition>;
    /**
     * Static representation of the [[custInstrTeamDetails]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUST_INSTR_TEAM_DETAILS: StringField<JobReqTemplate_Pipeline_Job_Requisition>;
    /**
     * Static representation of the [[customComments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOM_COMMENTS: StringField<JobReqTemplate_Pipeline_Job_Requisition>;
    /**
     * Static representation of the [[defaultLanguage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEFAULT_LANGUAGE: StringField<JobReqTemplate_Pipeline_Job_Requisition>;
    /**
     * Static representation of the [[end]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const END: DateField<JobReqTemplate_Pipeline_Job_Requisition>;
    /**
     * Static representation of the [[extEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXT_END_DATE: DateField<JobReqTemplate_Pipeline_Job_Requisition>;
    /**
     * Static representation of the [[extJobDescFooter]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXT_JOB_DESC_FOOTER: StringField<JobReqTemplate_Pipeline_Job_Requisition>;
    /**
     * Static representation of the [[extJobDescHeader]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXT_JOB_DESC_HEADER: StringField<JobReqTemplate_Pipeline_Job_Requisition>;
    /**
     * Static representation of the [[extListingLayout]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXT_LISTING_LAYOUT: StringField<JobReqTemplate_Pipeline_Job_Requisition>;
    /**
     * Static representation of the [[extStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXT_START_DATE: DateField<JobReqTemplate_Pipeline_Job_Requisition>;
    /**
     * Static representation of the [[extTitle]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXT_TITLE: StringField<JobReqTemplate_Pipeline_Job_Requisition>;
    /**
     * Static representation of the [[externalPrivatePosting]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_PRIVATE_POSTING: BooleanField<JobReqTemplate_Pipeline_Job_Requisition>;
    /**
     * Static representation of the [[formDueDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FORM_DUE_DATE: DateField<JobReqTemplate_Pipeline_Job_Requisition>;
    /**
     * Static representation of the [[hiringManagerEmail]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HIRING_MANAGER_EMAIL: StringField<JobReqTemplate_Pipeline_Job_Requisition>;
    /**
     * Static representation of the [[hiringManagerFax]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HIRING_MANAGER_FAX: StringField<JobReqTemplate_Pipeline_Job_Requisition>;
    /**
     * Static representation of the [[hiringManagerPhone]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HIRING_MANAGER_PHONE: StringField<JobReqTemplate_Pipeline_Job_Requisition>;
    /**
     * Static representation of the [[id]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ID: StringField<JobReqTemplate_Pipeline_Job_Requisition>;
    /**
     * Static representation of the [[instrInternalComments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INSTR_INTERNAL_COMMENTS: StringField<JobReqTemplate_Pipeline_Job_Requisition>;
    /**
     * Static representation of the [[intEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INT_END_DATE: DateField<JobReqTemplate_Pipeline_Job_Requisition>;
    /**
     * Static representation of the [[intJobDescFooter]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INT_JOB_DESC_FOOTER: StringField<JobReqTemplate_Pipeline_Job_Requisition>;
    /**
     * Static representation of the [[intJobDescHeader]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INT_JOB_DESC_HEADER: StringField<JobReqTemplate_Pipeline_Job_Requisition>;
    /**
     * Static representation of the [[intStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INT_START_DATE: DateField<JobReqTemplate_Pipeline_Job_Requisition>;
    /**
     * Static representation of the [[intrPosting]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INTR_POSTING: StringField<JobReqTemplate_Pipeline_Job_Requisition>;
    /**
     * Static representation of the [[intranetPosting]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INTRANET_POSTING: BooleanField<JobReqTemplate_Pipeline_Job_Requisition>;
    /**
     * Static representation of the [[intranetPrivatePosting]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INTRANET_PRIVATE_POSTING: BooleanField<JobReqTemplate_Pipeline_Job_Requisition>;
    /**
     * Static representation of the [[jobCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_CODE: StringField<JobReqTemplate_Pipeline_Job_Requisition>;
    /**
     * Static representation of the [[jobPostLanguage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_POST_LANGUAGE: StringField<JobReqTemplate_Pipeline_Job_Requisition>;
    /**
     * Static representation of the [[jobRole]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_ROLE: StringField<JobReqTemplate_Pipeline_Job_Requisition>;
    /**
     * Static representation of the [[jobStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_START_DATE: DateField<JobReqTemplate_Pipeline_Job_Requisition>;
    /**
     * Static representation of the [[listingLayout]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LISTING_LAYOUT: StringField<JobReqTemplate_Pipeline_Job_Requisition>;
    /**
     * Static representation of the [[numberOpenings]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NUMBER_OPENINGS: BigNumberField<JobReqTemplate_Pipeline_Job_Requisition>;
    /**
     * Static representation of the [[positionNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const POSITION_NUMBER: StringField<JobReqTemplate_Pipeline_Job_Requisition>;
    /**
     * Static representation of the [[questions]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const QUESTIONS: StringField<JobReqTemplate_Pipeline_Job_Requisition>;
    /**
     * Static representation of the [[recruiterEmail]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RECRUITER_EMAIL: StringField<JobReqTemplate_Pipeline_Job_Requisition>;
    /**
     * Static representation of the [[recruiterFax]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RECRUITER_FAX: StringField<JobReqTemplate_Pipeline_Job_Requisition>;
    /**
     * Static representation of the [[recruiterPhone]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RECRUITER_PHONE: StringField<JobReqTemplate_Pipeline_Job_Requisition>;
    /**
     * Static representation of the [[secondRecruiterEmail]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SECOND_RECRUITER_EMAIL: StringField<JobReqTemplate_Pipeline_Job_Requisition>;
    /**
     * Static representation of the [[secondRecruiterFax]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SECOND_RECRUITER_FAX: StringField<JobReqTemplate_Pipeline_Job_Requisition>;
    /**
     * Static representation of the [[secondRecruiterPhone]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SECOND_RECRUITER_PHONE: StringField<JobReqTemplate_Pipeline_Job_Requisition>;
    /**
     * Static representation of the [[sourcerEmail]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SOURCER_EMAIL: StringField<JobReqTemplate_Pipeline_Job_Requisition>;
    /**
     * Static representation of the [[sourcerFax]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SOURCER_FAX: StringField<JobReqTemplate_Pipeline_Job_Requisition>;
    /**
     * Static representation of the [[sourcerPhone]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SOURCER_PHONE: StringField<JobReqTemplate_Pipeline_Job_Requisition>;
    /**
     * Static representation of the [[start]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const START: DateField<JobReqTemplate_Pipeline_Job_Requisition>;
    /**
     * Static representation of the [[templateId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TEMPLATE_ID: BigNumberField<JobReqTemplate_Pipeline_Job_Requisition>;
    /**
     * Static representation of the [[title]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TITLE: StringField<JobReqTemplate_Pipeline_Job_Requisition>;
    /**
     * Static representation of the [[vpOfStaffingEmail]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VP_OF_STAFFING_EMAIL: StringField<JobReqTemplate_Pipeline_Job_Requisition>;
    /**
     * Static representation of the [[vpOfStaffingFax]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VP_OF_STAFFING_FAX: StringField<JobReqTemplate_Pipeline_Job_Requisition>;
    /**
     * Static representation of the [[vpOfStaffingPhone]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VP_OF_STAFFING_PHONE: StringField<JobReqTemplate_Pipeline_Job_Requisition>;
    /**
     * Static representation of the one-to-one navigation property [[businessUnitObj]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_UNIT_OBJ: OneToOneLink<JobReqTemplate_Pipeline_Job_Requisition, FoBusinessUnit>;
    /**
     * Static representation of the one-to-many navigation property [[coordinatorName]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COORDINATOR_NAME: Link<JobReqTemplate_Pipeline_Job_Requisition, JobRequisitionOperator>;
    /**
     * Static representation of the one-to-many navigation property [[coordinatorTeam]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COORDINATOR_TEAM: Link<JobReqTemplate_Pipeline_Job_Requisition, JobRequisitionOperator>;
    /**
     * Static representation of the one-to-one navigation property [[costCenterObj]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COST_CENTER_OBJ: OneToOneLink<JobReqTemplate_Pipeline_Job_Requisition, FoCostCenter>;
    /**
     * Static representation of the one-to-one navigation property [[departmentObj]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEPARTMENT_OBJ: OneToOneLink<JobReqTemplate_Pipeline_Job_Requisition, FoDepartment>;
    /**
     * Static representation of the one-to-one navigation property [[divisionObj]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DIVISION_OBJ: OneToOneLink<JobReqTemplate_Pipeline_Job_Requisition, FoDivision>;
    /**
     * Static representation of the one-to-one navigation property [[filter1]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FILTER_1: OneToOneLink<JobReqTemplate_Pipeline_Job_Requisition, PicklistOption>;
    /**
     * Static representation of the one-to-one navigation property [[filter3]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FILTER_3: OneToOneLink<JobReqTemplate_Pipeline_Job_Requisition, PicklistOption>;
    /**
     * Static representation of the one-to-one navigation property [[filter4]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FILTER_4: OneToOneLink<JobReqTemplate_Pipeline_Job_Requisition, PicklistOption>;
    /**
     * Static representation of the one-to-one navigation property [[hardstopStatus]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HARDSTOP_STATUS: OneToOneLink<JobReqTemplate_Pipeline_Job_Requisition, PicklistOption>;
    /**
     * Static representation of the one-to-many navigation property [[hiringManagerName]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HIRING_MANAGER_NAME: Link<JobReqTemplate_Pipeline_Job_Requisition, JobRequisitionOperator>;
    /**
     * Static representation of the one-to-many navigation property [[hiringManagerTeam]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HIRING_MANAGER_TEAM: Link<JobReqTemplate_Pipeline_Job_Requisition, JobRequisitionOperator>;
    /**
     * Static representation of the one-to-many navigation property [[interviewGuide]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INTERVIEW_GUIDE: Link<JobReqTemplate_Pipeline_Job_Requisition, Attachment>;
    /**
     * Static representation of the one-to-one navigation property [[legalEntityObj]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LEGAL_ENTITY_OBJ: OneToOneLink<JobReqTemplate_Pipeline_Job_Requisition, FoCompany>;
    /**
     * Static representation of the one-to-many navigation property [[locationObj]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LOCATION_OBJ: Link<JobReqTemplate_Pipeline_Job_Requisition, FoLocation>;
    /**
     * Static representation of the one-to-one navigation property [[mfield1]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MFIELD_1: OneToOneLink<JobReqTemplate_Pipeline_Job_Requisition, PicklistOption>;
    /**
     * Static representation of the one-to-one navigation property [[mfield2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MFIELD_2: OneToOneLink<JobReqTemplate_Pipeline_Job_Requisition, PicklistOption>;
    /**
     * Static representation of the one-to-many navigation property [[recruiterName]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RECRUITER_NAME: Link<JobReqTemplate_Pipeline_Job_Requisition, JobRequisitionOperator>;
    /**
     * Static representation of the one-to-many navigation property [[recruiterTeam]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RECRUITER_TEAM: Link<JobReqTemplate_Pipeline_Job_Requisition, JobRequisitionOperator>;
    /**
     * Static representation of the one-to-many navigation property [[secondRecruiterName]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SECOND_RECRUITER_NAME: Link<JobReqTemplate_Pipeline_Job_Requisition, JobRequisitionOperator>;
    /**
     * Static representation of the one-to-many navigation property [[secondRecruiterTeam]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SECOND_RECRUITER_TEAM: Link<JobReqTemplate_Pipeline_Job_Requisition, JobRequisitionOperator>;
    /**
     * Static representation of the one-to-many navigation property [[sourcerName]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SOURCER_NAME: Link<JobReqTemplate_Pipeline_Job_Requisition, JobRequisitionOperator>;
    /**
     * Static representation of the one-to-many navigation property [[sourcerTeam]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SOURCER_TEAM: Link<JobReqTemplate_Pipeline_Job_Requisition, JobRequisitionOperator>;
    /**
     * Static representation of the one-to-one navigation property [[status]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS: OneToOneLink<JobReqTemplate_Pipeline_Job_Requisition, PicklistOption>;
    /**
     * Static representation of the one-to-many navigation property [[vTeam]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const V_TEAM: Link<JobReqTemplate_Pipeline_Job_Requisition, JobRequisitionOperator>;
    /**
     * Static representation of the one-to-many navigation property [[vpOfStaffingName]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VP_OF_STAFFING_NAME: Link<JobReqTemplate_Pipeline_Job_Requisition, JobRequisitionOperator>;
    /**
     * Static representation of the one-to-many navigation property [[vpOfStaffingTeam]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VP_OF_STAFFING_TEAM: Link<JobReqTemplate_Pipeline_Job_Requisition, JobRequisitionOperator>;
    /**
     * All fields of the JobReqTemplate_Pipeline_Job_Requisition entity.
     */
    const _allFields: Array<StringField<JobReqTemplate_Pipeline_Job_Requisition> | BigNumberField<JobReqTemplate_Pipeline_Job_Requisition> | BooleanField<JobReqTemplate_Pipeline_Job_Requisition> | DateField<JobReqTemplate_Pipeline_Job_Requisition> | OneToOneLink<JobReqTemplate_Pipeline_Job_Requisition, FoBusinessUnit> | Link<JobReqTemplate_Pipeline_Job_Requisition, JobRequisitionOperator> | OneToOneLink<JobReqTemplate_Pipeline_Job_Requisition, FoCostCenter> | OneToOneLink<JobReqTemplate_Pipeline_Job_Requisition, FoDepartment> | OneToOneLink<JobReqTemplate_Pipeline_Job_Requisition, FoDivision> | OneToOneLink<JobReqTemplate_Pipeline_Job_Requisition, PicklistOption> | Link<JobReqTemplate_Pipeline_Job_Requisition, Attachment> | OneToOneLink<JobReqTemplate_Pipeline_Job_Requisition, FoCompany> | Link<JobReqTemplate_Pipeline_Job_Requisition, FoLocation>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<JobReqTemplate_Pipeline_Job_Requisition>;
    /**
     * All key fields of the JobReqTemplate_Pipeline_Job_Requisition entity.
     */
    const _keyFields: Array<Selectable<JobReqTemplate_Pipeline_Job_Requisition>>;
    /**
     * Mapping of all key field names to the respective static field property JobReqTemplate_Pipeline_Job_Requisition.
     */
    const _keys: {
        [keys: string]: Selectable<JobReqTemplate_Pipeline_Job_Requisition>;
    };
}
//# sourceMappingURL=JobReqTemplate_Pipeline_Job_Requisition.d.ts.map