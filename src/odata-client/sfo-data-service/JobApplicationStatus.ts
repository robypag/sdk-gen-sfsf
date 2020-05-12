/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { JobApplicationStatusRequestBuilder } from './JobApplicationStatusRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, Entity, EntityBuilderType, Link, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "JobApplicationStatus" of service "SFOData".
 */
export class JobApplicationStatus extends Entity implements JobApplicationStatusType {
  /**
   * Technical entity name for JobApplicationStatus.
   */
  static _entityName = 'JobApplicationStatus';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for JobApplicationStatus.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Application Status Id.
   * @nullable
   */
  appStatusId?: BigNumber;
  /**
   * Application Status Name.
   */
  appStatusName!: string;
  /**
   * Applicaiton Status Set Id.
   */
  appStatusSetId!: BigNumber;
  /**
   * One-to-many navigation property to the [[JobApplicationStatusLabel]] entity.
   */
  jobAppStatusLabel!: JobApplicationStatusLabel[];
  /**
   * One-to-many navigation property to the [[JobApplication]] entity.
   */
  jobApplications!: JobApplication[];

  /**
   * Returns an entity builder to construct instances `JobApplicationStatus`.
   * @returns A builder that constructs instances of entity type `JobApplicationStatus`.
   */
  static builder(): EntityBuilderType<JobApplicationStatus, JobApplicationStatusTypeForceMandatory> {
    return Entity.entityBuilder(JobApplicationStatus);
  }

  /**
   * Returns a request builder to construct requests for operations on the `JobApplicationStatus` entity type.
   * @returns A `JobApplicationStatus` request builder.
   */
  static requestBuilder(): JobApplicationStatusRequestBuilder {
    return new JobApplicationStatusRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobApplicationStatus`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `JobApplicationStatus`.
   */
  static customField(fieldName: string): CustomField<JobApplicationStatus> {
    return Entity.customFieldSelector(fieldName, JobApplicationStatus);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { JobApplicationStatusLabel, JobApplicationStatusLabelType } from './JobApplicationStatusLabel';
import { JobApplication, JobApplicationType } from './JobApplication';

export interface JobApplicationStatusType {
  appStatusId?: BigNumber;
  appStatusName: string;
  appStatusSetId: BigNumber;
  jobAppStatusLabel: JobApplicationStatusLabelType[];
  jobApplications: JobApplicationType[];
}

export interface JobApplicationStatusTypeForceMandatory {
  appStatusId: BigNumber;
  appStatusName: string;
  appStatusSetId: BigNumber;
  jobAppStatusLabel: JobApplicationStatusLabelType[];
  jobApplications: JobApplicationType[];
}

export namespace JobApplicationStatus {
  /**
   * Static representation of the [[appStatusId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const APP_STATUS_ID: BigNumberField<JobApplicationStatus> = new BigNumberField('appStatusId', JobApplicationStatus, 'Edm.Int64');
  /**
   * Static representation of the [[appStatusName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const APP_STATUS_NAME: StringField<JobApplicationStatus> = new StringField('appStatusName', JobApplicationStatus, 'Edm.String');
  /**
   * Static representation of the [[appStatusSetId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const APP_STATUS_SET_ID: BigNumberField<JobApplicationStatus> = new BigNumberField('appStatusSetId', JobApplicationStatus, 'Edm.Int64');
  /**
   * Static representation of the one-to-many navigation property [[jobAppStatusLabel]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_APP_STATUS_LABEL: Link<JobApplicationStatus, JobApplicationStatusLabel> = new Link('jobAppStatusLabel', JobApplicationStatus, JobApplicationStatusLabel);
  /**
   * Static representation of the one-to-many navigation property [[jobApplications]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_APPLICATIONS: Link<JobApplicationStatus, JobApplication> = new Link('jobApplications', JobApplicationStatus, JobApplication);
  /**
   * All fields of the JobApplicationStatus entity.
   */
  export const _allFields: Array<BigNumberField<JobApplicationStatus> | StringField<JobApplicationStatus> | Link<JobApplicationStatus, JobApplicationStatusLabel> | Link<JobApplicationStatus, JobApplication>> = [
    JobApplicationStatus.APP_STATUS_ID,
    JobApplicationStatus.APP_STATUS_NAME,
    JobApplicationStatus.APP_STATUS_SET_ID,
    JobApplicationStatus.JOB_APP_STATUS_LABEL,
    JobApplicationStatus.JOB_APPLICATIONS
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<JobApplicationStatus> = new AllFields('*', JobApplicationStatus);
  /**
   * All key fields of the JobApplicationStatus entity.
   */
  export const _keyFields: Array<Selectable<JobApplicationStatus>> = [JobApplicationStatus.APP_STATUS_SET_ID];
  /**
   * Mapping of all key field names to the respective static field property JobApplicationStatus.
   */
  export const _keys: { [keys: string]: Selectable<JobApplicationStatus> } = JobApplicationStatus._keyFields.reduce((acc: { [keys: string]: Selectable<JobApplicationStatus> }, field: Selectable<JobApplicationStatus>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
