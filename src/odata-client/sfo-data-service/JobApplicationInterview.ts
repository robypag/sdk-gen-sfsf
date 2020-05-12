/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { JobApplicationInterviewRequestBuilder } from './JobApplicationInterviewRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, NumberField, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "JobApplicationInterview" of service "SFOData".
 */
export class JobApplicationInterview extends Entity implements JobApplicationInterviewType {
  /**
   * Technical entity name for JobApplicationInterview.
   */
  static _entityName = 'JobApplicationInterview';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for JobApplicationInterview.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Job Application Id.
   */
  applicationId!: BigNumber;
  /**
   * Application Interview Id.
   */
  applicationInterviewId!: BigNumber;
  /**
   * Cand Slot Map Id.
   */
  candSlotMapId!: BigNumber;
  /**
   * Interview End Date.
   */
  endDate!: Moment;
  /**
   * Is Time Set.
   */
  isTimeSet!: number;
  /**
   * Notes.
   * @nullable
   */
  notes?: string;
  /**
   * Recruit Event Staff Id.
   */
  recruitEventStaffId!: BigNumber;
  /**
   * Source.
   */
  source!: string;
  /**
   * Interview Start Date.
   */
  startDate!: Moment;
  /**
   * Status.
   */
  status!: string;
  /**
   * Template Type.
   */
  templateType!: string;
  /**
   * One-to-one navigation property to the [[Attachment]] entity.
   */
  interviewNotes!: Attachment;
  /**
   * One-to-one navigation property to the [[InterviewOverallAssessment]] entity.
   */
  interviewOverallAssessment!: InterviewOverallAssessment;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  interviewer!: User;
  /**
   * One-to-one navigation property to the [[JobApplicationInterviewFieldControls]] entity.
   */
  jobAppInterviewPermissionsNav!: JobApplicationInterviewFieldControls;
  /**
   * One-to-one navigation property to the [[JobApplication]] entity.
   */
  jobApplication!: JobApplication;
  /**
   * One-to-one navigation property to the [[JobRequisition]] entity.
   */
  jobRequisition!: JobRequisition;
  /**
   * One-to-one navigation property to the [[Attachment]] entity.
   */
  resume!: Attachment;

  /**
   * Returns an entity builder to construct instances `JobApplicationInterview`.
   * @returns A builder that constructs instances of entity type `JobApplicationInterview`.
   */
  static builder(): EntityBuilderType<JobApplicationInterview, JobApplicationInterviewTypeForceMandatory> {
    return Entity.entityBuilder(JobApplicationInterview);
  }

  /**
   * Returns a request builder to construct requests for operations on the `JobApplicationInterview` entity type.
   * @returns A `JobApplicationInterview` request builder.
   */
  static requestBuilder(): JobApplicationInterviewRequestBuilder {
    return new JobApplicationInterviewRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobApplicationInterview`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `JobApplicationInterview`.
   */
  static customField(fieldName: string): CustomField<JobApplicationInterview> {
    return Entity.customFieldSelector(fieldName, JobApplicationInterview);
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

export namespace JobApplicationInterview {
  /**
   * Static representation of the [[applicationId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const APPLICATION_ID: BigNumberField<JobApplicationInterview> = new BigNumberField('applicationId', JobApplicationInterview, 'Edm.Int64');
  /**
   * Static representation of the [[applicationInterviewId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const APPLICATION_INTERVIEW_ID: BigNumberField<JobApplicationInterview> = new BigNumberField('applicationInterviewId', JobApplicationInterview, 'Edm.Int64');
  /**
   * Static representation of the [[candSlotMapId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CAND_SLOT_MAP_ID: BigNumberField<JobApplicationInterview> = new BigNumberField('candSlotMapId', JobApplicationInterview, 'Edm.Int64');
  /**
   * Static representation of the [[endDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const END_DATE: DateField<JobApplicationInterview> = new DateField('endDate', JobApplicationInterview, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[isTimeSet]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_TIME_SET: NumberField<JobApplicationInterview> = new NumberField('isTimeSet', JobApplicationInterview, 'Edm.Int32');
  /**
   * Static representation of the [[notes]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NOTES: StringField<JobApplicationInterview> = new StringField('notes', JobApplicationInterview, 'Edm.String');
  /**
   * Static representation of the [[recruitEventStaffId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RECRUIT_EVENT_STAFF_ID: BigNumberField<JobApplicationInterview> = new BigNumberField('recruitEventStaffId', JobApplicationInterview, 'Edm.Int64');
  /**
   * Static representation of the [[source]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SOURCE: StringField<JobApplicationInterview> = new StringField('source', JobApplicationInterview, 'Edm.String');
  /**
   * Static representation of the [[startDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const START_DATE: DateField<JobApplicationInterview> = new DateField('startDate', JobApplicationInterview, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[status]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS: StringField<JobApplicationInterview> = new StringField('status', JobApplicationInterview, 'Edm.String');
  /**
   * Static representation of the [[templateType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TEMPLATE_TYPE: StringField<JobApplicationInterview> = new StringField('templateType', JobApplicationInterview, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[interviewNotes]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INTERVIEW_NOTES: OneToOneLink<JobApplicationInterview, Attachment> = new OneToOneLink('interviewNotes', JobApplicationInterview, Attachment);
  /**
   * Static representation of the one-to-one navigation property [[interviewOverallAssessment]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INTERVIEW_OVERALL_ASSESSMENT: OneToOneLink<JobApplicationInterview, InterviewOverallAssessment> = new OneToOneLink('interviewOverallAssessment', JobApplicationInterview, InterviewOverallAssessment);
  /**
   * Static representation of the one-to-one navigation property [[interviewer]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INTERVIEWER: OneToOneLink<JobApplicationInterview, User> = new OneToOneLink('interviewer', JobApplicationInterview, User);
  /**
   * Static representation of the one-to-one navigation property [[jobAppInterviewPermissionsNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_APP_INTERVIEW_PERMISSIONS_NAV: OneToOneLink<JobApplicationInterview, JobApplicationInterviewFieldControls> = new OneToOneLink('jobAppInterviewPermissionsNav', JobApplicationInterview, JobApplicationInterviewFieldControls);
  /**
   * Static representation of the one-to-one navigation property [[jobApplication]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_APPLICATION: OneToOneLink<JobApplicationInterview, JobApplication> = new OneToOneLink('jobApplication', JobApplicationInterview, JobApplication);
  /**
   * Static representation of the one-to-one navigation property [[jobRequisition]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_REQUISITION: OneToOneLink<JobApplicationInterview, JobRequisition> = new OneToOneLink('jobRequisition', JobApplicationInterview, JobRequisition);
  /**
   * Static representation of the one-to-one navigation property [[resume]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RESUME: OneToOneLink<JobApplicationInterview, Attachment> = new OneToOneLink('resume', JobApplicationInterview, Attachment);
  /**
   * All fields of the JobApplicationInterview entity.
   */
  export const _allFields: Array<BigNumberField<JobApplicationInterview> | DateField<JobApplicationInterview> | NumberField<JobApplicationInterview> | StringField<JobApplicationInterview> | OneToOneLink<JobApplicationInterview, Attachment> | OneToOneLink<JobApplicationInterview, InterviewOverallAssessment> | OneToOneLink<JobApplicationInterview, User> | OneToOneLink<JobApplicationInterview, JobApplicationInterviewFieldControls> | OneToOneLink<JobApplicationInterview, JobApplication> | OneToOneLink<JobApplicationInterview, JobRequisition>> = [
    JobApplicationInterview.APPLICATION_ID,
    JobApplicationInterview.APPLICATION_INTERVIEW_ID,
    JobApplicationInterview.CAND_SLOT_MAP_ID,
    JobApplicationInterview.END_DATE,
    JobApplicationInterview.IS_TIME_SET,
    JobApplicationInterview.NOTES,
    JobApplicationInterview.RECRUIT_EVENT_STAFF_ID,
    JobApplicationInterview.SOURCE,
    JobApplicationInterview.START_DATE,
    JobApplicationInterview.STATUS,
    JobApplicationInterview.TEMPLATE_TYPE,
    JobApplicationInterview.INTERVIEW_NOTES,
    JobApplicationInterview.INTERVIEW_OVERALL_ASSESSMENT,
    JobApplicationInterview.INTERVIEWER,
    JobApplicationInterview.JOB_APP_INTERVIEW_PERMISSIONS_NAV,
    JobApplicationInterview.JOB_APPLICATION,
    JobApplicationInterview.JOB_REQUISITION,
    JobApplicationInterview.RESUME
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<JobApplicationInterview> = new AllFields('*', JobApplicationInterview);
  /**
   * All key fields of the JobApplicationInterview entity.
   */
  export const _keyFields: Array<Selectable<JobApplicationInterview>> = [JobApplicationInterview.APPLICATION_INTERVIEW_ID];
  /**
   * Mapping of all key field names to the respective static field property JobApplicationInterview.
   */
  export const _keys: { [keys: string]: Selectable<JobApplicationInterview> } = JobApplicationInterview._keyFields.reduce((acc: { [keys: string]: Selectable<JobApplicationInterview> }, field: Selectable<JobApplicationInterview>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
