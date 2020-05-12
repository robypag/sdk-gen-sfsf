import { JobApplicationInterviewFieldControlsRequestBuilder } from './JobApplicationInterviewFieldControlsRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, NumberField, Selectable } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "JobApplicationInterviewFieldControls" of service "SFOData".
 */
export declare class JobApplicationInterviewFieldControls extends Entity implements JobApplicationInterviewFieldControlsType {
    /**
     * Technical entity name for JobApplicationInterviewFieldControls.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for JobApplicationInterviewFieldControls.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * applicationId.
     * @nullable
     */
    applicationId?: number;
    /**
     * applicationInterviewId.
     */
    applicationInterviewId: number;
    /**
     * candSlotMapId.
     * @nullable
     */
    candSlotMapId?: number;
    /**
     * endDate.
     * @nullable
     */
    endDate?: number;
    /**
     * interviewNotes.
     * @nullable
     */
    interviewNotes?: number;
    /**
     * interviewOverallAssessment.
     * @nullable
     */
    interviewOverallAssessment?: number;
    /**
     * interviewer.
     * @nullable
     */
    interviewer?: number;
    /**
     * isTimeSet.
     * @nullable
     */
    isTimeSet?: number;
    /**
     * jobAppInterviewPermissionsNav.
     * @nullable
     */
    jobAppInterviewPermissionsNav?: number;
    /**
     * jobApplication.
     * @nullable
     */
    jobApplication?: number;
    /**
     * jobRequisition.
     * @nullable
     */
    jobRequisition?: number;
    /**
     * notes.
     * @nullable
     */
    notes?: number;
    /**
     * recruitEventStaffId.
     * @nullable
     */
    recruitEventStaffId?: number;
    /**
     * resume.
     * @nullable
     */
    resume?: number;
    /**
     * source.
     * @nullable
     */
    source?: number;
    /**
     * startDate.
     * @nullable
     */
    startDate?: number;
    /**
     * status.
     * @nullable
     */
    status?: number;
    /**
     * templateType.
     * @nullable
     */
    templateType?: number;
    /**
     * Returns an entity builder to construct instances `JobApplicationInterviewFieldControls`.
     * @returns A builder that constructs instances of entity type `JobApplicationInterviewFieldControls`.
     */
    static builder(): EntityBuilderType<JobApplicationInterviewFieldControls, JobApplicationInterviewFieldControlsTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `JobApplicationInterviewFieldControls` entity type.
     * @returns A `JobApplicationInterviewFieldControls` request builder.
     */
    static requestBuilder(): JobApplicationInterviewFieldControlsRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobApplicationInterviewFieldControls`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `JobApplicationInterviewFieldControls`.
     */
    static customField(fieldName: string): CustomField<JobApplicationInterviewFieldControls>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface JobApplicationInterviewFieldControlsType {
    applicationId?: number;
    applicationInterviewId: number;
    candSlotMapId?: number;
    endDate?: number;
    interviewNotes?: number;
    interviewOverallAssessment?: number;
    interviewer?: number;
    isTimeSet?: number;
    jobAppInterviewPermissionsNav?: number;
    jobApplication?: number;
    jobRequisition?: number;
    notes?: number;
    recruitEventStaffId?: number;
    resume?: number;
    source?: number;
    startDate?: number;
    status?: number;
    templateType?: number;
}
export interface JobApplicationInterviewFieldControlsTypeForceMandatory {
    applicationId: number;
    applicationInterviewId: number;
    candSlotMapId: number;
    endDate: number;
    interviewNotes: number;
    interviewOverallAssessment: number;
    interviewer: number;
    isTimeSet: number;
    jobAppInterviewPermissionsNav: number;
    jobApplication: number;
    jobRequisition: number;
    notes: number;
    recruitEventStaffId: number;
    resume: number;
    source: number;
    startDate: number;
    status: number;
    templateType: number;
}
export declare namespace JobApplicationInterviewFieldControls {
    /**
     * Static representation of the [[applicationId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const APPLICATION_ID: NumberField<JobApplicationInterviewFieldControls>;
    /**
     * Static representation of the [[applicationInterviewId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const APPLICATION_INTERVIEW_ID: NumberField<JobApplicationInterviewFieldControls>;
    /**
     * Static representation of the [[candSlotMapId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CAND_SLOT_MAP_ID: NumberField<JobApplicationInterviewFieldControls>;
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const END_DATE: NumberField<JobApplicationInterviewFieldControls>;
    /**
     * Static representation of the [[interviewNotes]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INTERVIEW_NOTES: NumberField<JobApplicationInterviewFieldControls>;
    /**
     * Static representation of the [[interviewOverallAssessment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INTERVIEW_OVERALL_ASSESSMENT: NumberField<JobApplicationInterviewFieldControls>;
    /**
     * Static representation of the [[interviewer]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INTERVIEWER: NumberField<JobApplicationInterviewFieldControls>;
    /**
     * Static representation of the [[isTimeSet]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IS_TIME_SET: NumberField<JobApplicationInterviewFieldControls>;
    /**
     * Static representation of the [[jobAppInterviewPermissionsNav]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_APP_INTERVIEW_PERMISSIONS_NAV: NumberField<JobApplicationInterviewFieldControls>;
    /**
     * Static representation of the [[jobApplication]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_APPLICATION: NumberField<JobApplicationInterviewFieldControls>;
    /**
     * Static representation of the [[jobRequisition]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_REQUISITION: NumberField<JobApplicationInterviewFieldControls>;
    /**
     * Static representation of the [[notes]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NOTES: NumberField<JobApplicationInterviewFieldControls>;
    /**
     * Static representation of the [[recruitEventStaffId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RECRUIT_EVENT_STAFF_ID: NumberField<JobApplicationInterviewFieldControls>;
    /**
     * Static representation of the [[resume]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RESUME: NumberField<JobApplicationInterviewFieldControls>;
    /**
     * Static representation of the [[source]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SOURCE: NumberField<JobApplicationInterviewFieldControls>;
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const START_DATE: NumberField<JobApplicationInterviewFieldControls>;
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS: NumberField<JobApplicationInterviewFieldControls>;
    /**
     * Static representation of the [[templateType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TEMPLATE_TYPE: NumberField<JobApplicationInterviewFieldControls>;
    /**
     * All fields of the JobApplicationInterviewFieldControls entity.
     */
    const _allFields: Array<NumberField<JobApplicationInterviewFieldControls>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<JobApplicationInterviewFieldControls>;
    /**
     * All key fields of the JobApplicationInterviewFieldControls entity.
     */
    const _keyFields: Array<Selectable<JobApplicationInterviewFieldControls>>;
    /**
     * Mapping of all key field names to the respective static field property JobApplicationInterviewFieldControls.
     */
    const _keys: {
        [keys: string]: Selectable<JobApplicationInterviewFieldControls>;
    };
}
//# sourceMappingURL=JobApplicationInterviewFieldControls.d.ts.map