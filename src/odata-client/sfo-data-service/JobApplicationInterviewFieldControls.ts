/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { JobApplicationInterviewFieldControlsRequestBuilder } from './JobApplicationInterviewFieldControlsRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, NumberField, Selectable } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "JobApplicationInterviewFieldControls" of service "SFOData".
 */
export class JobApplicationInterviewFieldControls extends Entity implements JobApplicationInterviewFieldControlsType {
  /**
   * Technical entity name for JobApplicationInterviewFieldControls.
   */
  static _entityName = 'JobApplicationInterviewFieldControls';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for JobApplicationInterviewFieldControls.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * applicationId.
   * @nullable
   */
  applicationId?: number;
  /**
   * applicationInterviewId.
   */
  applicationInterviewId!: number;
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
  static builder(): EntityBuilderType<JobApplicationInterviewFieldControls, JobApplicationInterviewFieldControlsTypeForceMandatory> {
    return Entity.entityBuilder(JobApplicationInterviewFieldControls);
  }

  /**
   * Returns a request builder to construct requests for operations on the `JobApplicationInterviewFieldControls` entity type.
   * @returns A `JobApplicationInterviewFieldControls` request builder.
   */
  static requestBuilder(): JobApplicationInterviewFieldControlsRequestBuilder {
    return new JobApplicationInterviewFieldControlsRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobApplicationInterviewFieldControls`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `JobApplicationInterviewFieldControls`.
   */
  static customField(fieldName: string): CustomField<JobApplicationInterviewFieldControls> {
    return Entity.customFieldSelector(fieldName, JobApplicationInterviewFieldControls);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
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

export namespace JobApplicationInterviewFieldControls {
  /**
   * Static representation of the [[applicationId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const APPLICATION_ID: NumberField<JobApplicationInterviewFieldControls> = new NumberField('applicationId', JobApplicationInterviewFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[applicationInterviewId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const APPLICATION_INTERVIEW_ID: NumberField<JobApplicationInterviewFieldControls> = new NumberField('applicationInterviewId', JobApplicationInterviewFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[candSlotMapId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CAND_SLOT_MAP_ID: NumberField<JobApplicationInterviewFieldControls> = new NumberField('candSlotMapId', JobApplicationInterviewFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[endDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const END_DATE: NumberField<JobApplicationInterviewFieldControls> = new NumberField('endDate', JobApplicationInterviewFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[interviewNotes]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INTERVIEW_NOTES: NumberField<JobApplicationInterviewFieldControls> = new NumberField('interviewNotes', JobApplicationInterviewFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[interviewOverallAssessment]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INTERVIEW_OVERALL_ASSESSMENT: NumberField<JobApplicationInterviewFieldControls> = new NumberField('interviewOverallAssessment', JobApplicationInterviewFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[interviewer]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INTERVIEWER: NumberField<JobApplicationInterviewFieldControls> = new NumberField('interviewer', JobApplicationInterviewFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[isTimeSet]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_TIME_SET: NumberField<JobApplicationInterviewFieldControls> = new NumberField('isTimeSet', JobApplicationInterviewFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[jobAppInterviewPermissionsNav]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_APP_INTERVIEW_PERMISSIONS_NAV: NumberField<JobApplicationInterviewFieldControls> = new NumberField('jobAppInterviewPermissionsNav', JobApplicationInterviewFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[jobApplication]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_APPLICATION: NumberField<JobApplicationInterviewFieldControls> = new NumberField('jobApplication', JobApplicationInterviewFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[jobRequisition]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_REQUISITION: NumberField<JobApplicationInterviewFieldControls> = new NumberField('jobRequisition', JobApplicationInterviewFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[notes]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NOTES: NumberField<JobApplicationInterviewFieldControls> = new NumberField('notes', JobApplicationInterviewFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[recruitEventStaffId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RECRUIT_EVENT_STAFF_ID: NumberField<JobApplicationInterviewFieldControls> = new NumberField('recruitEventStaffId', JobApplicationInterviewFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[resume]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RESUME: NumberField<JobApplicationInterviewFieldControls> = new NumberField('resume', JobApplicationInterviewFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[source]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SOURCE: NumberField<JobApplicationInterviewFieldControls> = new NumberField('source', JobApplicationInterviewFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[startDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const START_DATE: NumberField<JobApplicationInterviewFieldControls> = new NumberField('startDate', JobApplicationInterviewFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[status]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS: NumberField<JobApplicationInterviewFieldControls> = new NumberField('status', JobApplicationInterviewFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[templateType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TEMPLATE_TYPE: NumberField<JobApplicationInterviewFieldControls> = new NumberField('templateType', JobApplicationInterviewFieldControls, 'Edm.Byte');
  /**
   * All fields of the JobApplicationInterviewFieldControls entity.
   */
  export const _allFields: Array<NumberField<JobApplicationInterviewFieldControls>> = [
    JobApplicationInterviewFieldControls.APPLICATION_ID,
    JobApplicationInterviewFieldControls.APPLICATION_INTERVIEW_ID,
    JobApplicationInterviewFieldControls.CAND_SLOT_MAP_ID,
    JobApplicationInterviewFieldControls.END_DATE,
    JobApplicationInterviewFieldControls.INTERVIEW_NOTES,
    JobApplicationInterviewFieldControls.INTERVIEW_OVERALL_ASSESSMENT,
    JobApplicationInterviewFieldControls.INTERVIEWER,
    JobApplicationInterviewFieldControls.IS_TIME_SET,
    JobApplicationInterviewFieldControls.JOB_APP_INTERVIEW_PERMISSIONS_NAV,
    JobApplicationInterviewFieldControls.JOB_APPLICATION,
    JobApplicationInterviewFieldControls.JOB_REQUISITION,
    JobApplicationInterviewFieldControls.NOTES,
    JobApplicationInterviewFieldControls.RECRUIT_EVENT_STAFF_ID,
    JobApplicationInterviewFieldControls.RESUME,
    JobApplicationInterviewFieldControls.SOURCE,
    JobApplicationInterviewFieldControls.START_DATE,
    JobApplicationInterviewFieldControls.STATUS,
    JobApplicationInterviewFieldControls.TEMPLATE_TYPE
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<JobApplicationInterviewFieldControls> = new AllFields('*', JobApplicationInterviewFieldControls);
  /**
   * All key fields of the JobApplicationInterviewFieldControls entity.
   */
  export const _keyFields: Array<Selectable<JobApplicationInterviewFieldControls>> = [JobApplicationInterviewFieldControls.APPLICATION_INTERVIEW_ID];
  /**
   * Mapping of all key field names to the respective static field property JobApplicationInterviewFieldControls.
   */
  export const _keys: { [keys: string]: Selectable<JobApplicationInterviewFieldControls> } = JobApplicationInterviewFieldControls._keyFields.reduce((acc: { [keys: string]: Selectable<JobApplicationInterviewFieldControls> }, field: Selectable<JobApplicationInterviewFieldControls>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
