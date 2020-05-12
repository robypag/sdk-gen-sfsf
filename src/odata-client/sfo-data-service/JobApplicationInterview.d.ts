import { JobApplicationInterviewRequestBuilder } from './JobApplicationInterviewRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, NumberField, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "JobApplicationInterview" of service "SFOData".
 */
export declare class JobApplicationInterview extends Entity implements JobApplicationInterviewType {
    /**
     * Technical entity name for JobApplicationInterview.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for JobApplicationInterview.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Job Application Id.
     */
    applicationId: BigNumber;
    /**
     * Application Interview Id.
     */
    applicationInterviewId: BigNumber;
    /**
     * Cand Slot Map Id.
     */
    candSlotMapId: BigNumber;
    /**
     * Interview End Date.
     */
    endDate: Moment;
    /**
     * Is Time Set.
     */
    isTimeSet: number;
    /**
     * Notes.
     * @nullable
     */
    notes?: string;
    /**
     * Recruit Event Staff Id.
     */
    recruitEventStaffId: BigNumber;
    /**
     * Source.
     */
    source: string;
    /**
     * Interview Start Date.
     */
    startDate: Moment;
    /**
     * Status.
     */
    status: string;
    /**
     * Template Type.
     */
    templateType: string;
    /**
     * One-to-one navigation property to the [[Attachment]] entity.
     */
    interviewNotes: Attachment;
    /**
     * One-to-one navigation property to the [[InterviewOverallAssessment]] entity.
     */
    interviewOverallAssessment: InterviewOverallAssessment;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    interviewer: User;
    /**
     * One-to-one navigation property to the [[JobApplicationInterviewFieldControls]] entity.
     */
    jobAppInterviewPermissionsNav: JobApplicationInterviewFieldControls;
    /**
     * One-to-one navigation property to the [[JobApplication]] entity.
     */
    jobApplication: JobApplication;
    /**
     * One-to-one navigation property to the [[JobRequisition]] entity.
     */
    jobRequisition: JobRequisition;
    /**
     * One-to-one navigation property to the [[Attachment]] entity.
     */
    resume: Attachment;
    /**
     * Returns an entity builder to construct instances `JobApplicationInterview`.
     * @returns A builder that constructs instances of entity type `JobApplicationInterview`.
     */
    static builder(): EntityBuilderType<JobApplicationInterview, JobApplicationInterviewTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `JobApplicationInterview` entity type.
     * @returns A `JobApplicationInterview` request builder.
     */
    static requestBuilder(): JobApplicationInterviewRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobApplicationInterview`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `JobApplicationInterview`.
     */
    static customField(fieldName: string): CustomField<JobApplicationInterview>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { Attachment, AttachmentType } from './Attachment';
import { InterviewOverallAssessment, InterviewOverallAssessmentType } from './InterviewOverallAssessment';
import { User, UserType } from './User';
import { JobApplicationInterviewFieldControls, JobApplicationInterviewFieldControlsType } from './JobApplicationInterviewFieldControls';
import { JobApplication, JobApplicationType } from './JobApplication';
import { JobRequisition, JobRequisitionType } from './JobRequisition';
export interface JobApplicationInterviewType {
    applicationId: BigNumber;
    applicationInterviewId: BigNumber;
    candSlotMapId: BigNumber;
    endDate: Moment;
    isTimeSet: number;
    notes?: string;
    recruitEventStaffId: BigNumber;
    source: string;
    startDate: Moment;
    status: string;
    templateType: string;
    interviewNotes: AttachmentType;
    interviewOverallAssessment: InterviewOverallAssessmentType;
    interviewer: UserType;
    jobAppInterviewPermissionsNav: JobApplicationInterviewFieldControlsType;
    jobApplication: JobApplicationType;
    jobRequisition: JobRequisitionType;
    resume: AttachmentType;
}
export interface JobApplicationInterviewTypeForceMandatory {
    applicationId: BigNumber;
    applicationInterviewId: BigNumber;
    candSlotMapId: BigNumber;
    endDate: Moment;
    isTimeSet: number;
    notes: string;
    recruitEventStaffId: BigNumber;
    source: string;
    startDate: Moment;
    status: string;
    templateType: string;
    interviewNotes: AttachmentType;
    interviewOverallAssessment: InterviewOverallAssessmentType;
    interviewer: UserType;
    jobAppInterviewPermissionsNav: JobApplicationInterviewFieldControlsType;
    jobApplication: JobApplicationType;
    jobRequisition: JobRequisitionType;
    resume: AttachmentType;
}
export declare namespace JobApplicationInterview {
    /**
     * Static representation of the [[applicationId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const APPLICATION_ID: BigNumberField<JobApplicationInterview>;
    /**
     * Static representation of the [[applicationInterviewId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const APPLICATION_INTERVIEW_ID: BigNumberField<JobApplicationInterview>;
    /**
     * Static representation of the [[candSlotMapId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CAND_SLOT_MAP_ID: BigNumberField<JobApplicationInterview>;
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const END_DATE: DateField<JobApplicationInterview>;
    /**
     * Static representation of the [[isTimeSet]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IS_TIME_SET: NumberField<JobApplicationInterview>;
    /**
     * Static representation of the [[notes]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NOTES: StringField<JobApplicationInterview>;
    /**
     * Static representation of the [[recruitEventStaffId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RECRUIT_EVENT_STAFF_ID: BigNumberField<JobApplicationInterview>;
    /**
     * Static representation of the [[source]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SOURCE: StringField<JobApplicationInterview>;
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const START_DATE: DateField<JobApplicationInterview>;
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS: StringField<JobApplicationInterview>;
    /**
     * Static representation of the [[templateType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TEMPLATE_TYPE: StringField<JobApplicationInterview>;
    /**
     * Static representation of the one-to-one navigation property [[interviewNotes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INTERVIEW_NOTES: OneToOneLink<JobApplicationInterview, Attachment>;
    /**
     * Static representation of the one-to-one navigation property [[interviewOverallAssessment]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INTERVIEW_OVERALL_ASSESSMENT: OneToOneLink<JobApplicationInterview, InterviewOverallAssessment>;
    /**
     * Static representation of the one-to-one navigation property [[interviewer]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INTERVIEWER: OneToOneLink<JobApplicationInterview, User>;
    /**
     * Static representation of the one-to-one navigation property [[jobAppInterviewPermissionsNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_APP_INTERVIEW_PERMISSIONS_NAV: OneToOneLink<JobApplicationInterview, JobApplicationInterviewFieldControls>;
    /**
     * Static representation of the one-to-one navigation property [[jobApplication]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_APPLICATION: OneToOneLink<JobApplicationInterview, JobApplication>;
    /**
     * Static representation of the one-to-one navigation property [[jobRequisition]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_REQUISITION: OneToOneLink<JobApplicationInterview, JobRequisition>;
    /**
     * Static representation of the one-to-one navigation property [[resume]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RESUME: OneToOneLink<JobApplicationInterview, Attachment>;
    /**
     * All fields of the JobApplicationInterview entity.
     */
    const _allFields: Array<BigNumberField<JobApplicationInterview> | DateField<JobApplicationInterview> | NumberField<JobApplicationInterview> | StringField<JobApplicationInterview> | OneToOneLink<JobApplicationInterview, Attachment> | OneToOneLink<JobApplicationInterview, InterviewOverallAssessment> | OneToOneLink<JobApplicationInterview, User> | OneToOneLink<JobApplicationInterview, JobApplicationInterviewFieldControls> | OneToOneLink<JobApplicationInterview, JobApplication> | OneToOneLink<JobApplicationInterview, JobRequisition>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<JobApplicationInterview>;
    /**
     * All key fields of the JobApplicationInterview entity.
     */
    const _keyFields: Array<Selectable<JobApplicationInterview>>;
    /**
     * Mapping of all key field names to the respective static field property JobApplicationInterview.
     */
    const _keys: {
        [keys: string]: Selectable<JobApplicationInterview>;
    };
}
//# sourceMappingURL=JobApplicationInterview.d.ts.map