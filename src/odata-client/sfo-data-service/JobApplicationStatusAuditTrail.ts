/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { JobApplicationStatusAuditTrailRequestBuilder } from './JobApplicationStatusAuditTrailRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, NumberField, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "JobApplicationStatusAuditTrail" of service "SFOData".
 */
export class JobApplicationStatusAuditTrail extends Entity implements JobApplicationStatusAuditTrailType {
  /**
   * Technical entity name for JobApplicationStatusAuditTrail.
   */
  static _entityName = 'JobApplicationStatusAuditTrail';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for JobApplicationStatusAuditTrail.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Created By.
   * @nullable
   */
  createdBy?: string;
  /**
   * Created Date.
   * @nullable
   */
  createdDateTime?: Moment;
  /**
   * Last Modified By.
   * @nullable
   */
  lastModifiedBy?: string;
  /**
   * Last Modified Date.
   * @nullable
   */
  lastModifiedDateTime?: Moment;
  /**
   * Last modified proxy user.
   * @nullable
   */
  lastModifiedProxyUser?: string;
  /**
   * Rev Number.
   */
  revNumber!: BigNumber;
  /**
   * Rev Type.
   */
  revType!: number;
  /**
   * Skipped Status.
   * @nullable
   */
  skippedStatus?: number;
  /**
   * Status Comments.
   * @nullable
   */
  statusComments?: string;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  createdByNav!: User;
  /**
   * One-to-one navigation property to the [[JobApplicationStatus]] entity.
   */
  jobAppStatus!: JobApplicationStatus;
  /**
   * One-to-one navigation property to the [[JobApplication]] entity.
   */
  jobApplication!: JobApplication;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  lastModifiedByNav!: User;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  lastModifiedProxyUserNav!: User;

  /**
   * Returns an entity builder to construct instances `JobApplicationStatusAuditTrail`.
   * @returns A builder that constructs instances of entity type `JobApplicationStatusAuditTrail`.
   */
  static builder(): EntityBuilderType<JobApplicationStatusAuditTrail, JobApplicationStatusAuditTrailTypeForceMandatory> {
    return Entity.entityBuilder(JobApplicationStatusAuditTrail);
  }

  /**
   * Returns a request builder to construct requests for operations on the `JobApplicationStatusAuditTrail` entity type.
   * @returns A `JobApplicationStatusAuditTrail` request builder.
   */
  static requestBuilder(): JobApplicationStatusAuditTrailRequestBuilder {
    return new JobApplicationStatusAuditTrailRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobApplicationStatusAuditTrail`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `JobApplicationStatusAuditTrail`.
   */
  static customField(fieldName: string): CustomField<JobApplicationStatusAuditTrail> {
    return Entity.customFieldSelector(fieldName, JobApplicationStatusAuditTrail);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { User, UserType } from './User';
import { JobApplicationStatus, JobApplicationStatusType } from './JobApplicationStatus';
import { JobApplication, JobApplicationType } from './JobApplication';

export interface JobApplicationStatusAuditTrailType {
  createdBy?: string;
  createdDateTime?: Moment;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  lastModifiedProxyUser?: string;
  revNumber: BigNumber;
  revType: number;
  skippedStatus?: number;
  statusComments?: string;
  createdByNav: UserType;
  jobAppStatus: JobApplicationStatusType;
  jobApplication: JobApplicationType;
  lastModifiedByNav: UserType;
  lastModifiedProxyUserNav: UserType;
}

export interface JobApplicationStatusAuditTrailTypeForceMandatory {
  createdBy: string;
  createdDateTime: Moment;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  lastModifiedProxyUser: string;
  revNumber: BigNumber;
  revType: number;
  skippedStatus: number;
  statusComments: string;
  createdByNav: UserType;
  jobAppStatus: JobApplicationStatusType;
  jobApplication: JobApplicationType;
  lastModifiedByNav: UserType;
  lastModifiedProxyUserNav: UserType;
}

export namespace JobApplicationStatusAuditTrail {
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<JobApplicationStatusAuditTrail> = new StringField('createdBy', JobApplicationStatusAuditTrail, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<JobApplicationStatusAuditTrail> = new DateField('createdDateTime', JobApplicationStatusAuditTrail, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<JobApplicationStatusAuditTrail> = new StringField('lastModifiedBy', JobApplicationStatusAuditTrail, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<JobApplicationStatusAuditTrail> = new DateField('lastModifiedDateTime', JobApplicationStatusAuditTrail, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[lastModifiedProxyUser]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_PROXY_USER: StringField<JobApplicationStatusAuditTrail> = new StringField('lastModifiedProxyUser', JobApplicationStatusAuditTrail, 'Edm.String');
  /**
   * Static representation of the [[revNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REV_NUMBER: BigNumberField<JobApplicationStatusAuditTrail> = new BigNumberField('revNumber', JobApplicationStatusAuditTrail, 'Edm.Int64');
  /**
   * Static representation of the [[revType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REV_TYPE: NumberField<JobApplicationStatusAuditTrail> = new NumberField('revType', JobApplicationStatusAuditTrail, 'Edm.Int32');
  /**
   * Static representation of the [[skippedStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SKIPPED_STATUS: NumberField<JobApplicationStatusAuditTrail> = new NumberField('skippedStatus', JobApplicationStatusAuditTrail, 'Edm.Int32');
  /**
   * Static representation of the [[statusComments]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS_COMMENTS: StringField<JobApplicationStatusAuditTrail> = new StringField('statusComments', JobApplicationStatusAuditTrail, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<JobApplicationStatusAuditTrail, User> = new OneToOneLink('createdByNav', JobApplicationStatusAuditTrail, User);
  /**
   * Static representation of the one-to-one navigation property [[jobAppStatus]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_APP_STATUS: OneToOneLink<JobApplicationStatusAuditTrail, JobApplicationStatus> = new OneToOneLink('jobAppStatus', JobApplicationStatusAuditTrail, JobApplicationStatus);
  /**
   * Static representation of the one-to-one navigation property [[jobApplication]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_APPLICATION: OneToOneLink<JobApplicationStatusAuditTrail, JobApplication> = new OneToOneLink('jobApplication', JobApplicationStatusAuditTrail, JobApplication);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<JobApplicationStatusAuditTrail, User> = new OneToOneLink('lastModifiedByNav', JobApplicationStatusAuditTrail, User);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedProxyUserNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_PROXY_USER_NAV: OneToOneLink<JobApplicationStatusAuditTrail, User> = new OneToOneLink('lastModifiedProxyUserNav', JobApplicationStatusAuditTrail, User);
  /**
   * All fields of the JobApplicationStatusAuditTrail entity.
   */
  export const _allFields: Array<StringField<JobApplicationStatusAuditTrail> | DateField<JobApplicationStatusAuditTrail> | BigNumberField<JobApplicationStatusAuditTrail> | NumberField<JobApplicationStatusAuditTrail> | OneToOneLink<JobApplicationStatusAuditTrail, User> | OneToOneLink<JobApplicationStatusAuditTrail, JobApplicationStatus> | OneToOneLink<JobApplicationStatusAuditTrail, JobApplication>> = [
    JobApplicationStatusAuditTrail.CREATED_BY,
    JobApplicationStatusAuditTrail.CREATED_DATE_TIME,
    JobApplicationStatusAuditTrail.LAST_MODIFIED_BY,
    JobApplicationStatusAuditTrail.LAST_MODIFIED_DATE_TIME,
    JobApplicationStatusAuditTrail.LAST_MODIFIED_PROXY_USER,
    JobApplicationStatusAuditTrail.REV_NUMBER,
    JobApplicationStatusAuditTrail.REV_TYPE,
    JobApplicationStatusAuditTrail.SKIPPED_STATUS,
    JobApplicationStatusAuditTrail.STATUS_COMMENTS,
    JobApplicationStatusAuditTrail.CREATED_BY_NAV,
    JobApplicationStatusAuditTrail.JOB_APP_STATUS,
    JobApplicationStatusAuditTrail.JOB_APPLICATION,
    JobApplicationStatusAuditTrail.LAST_MODIFIED_BY_NAV,
    JobApplicationStatusAuditTrail.LAST_MODIFIED_PROXY_USER_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<JobApplicationStatusAuditTrail> = new AllFields('*', JobApplicationStatusAuditTrail);
  /**
   * All key fields of the JobApplicationStatusAuditTrail entity.
   */
  export const _keyFields: Array<Selectable<JobApplicationStatusAuditTrail>> = [JobApplicationStatusAuditTrail.REV_NUMBER];
  /**
   * Mapping of all key field names to the respective static field property JobApplicationStatusAuditTrail.
   */
  export const _keys: { [keys: string]: Selectable<JobApplicationStatusAuditTrail> } = JobApplicationStatusAuditTrail._keyFields.reduce((acc: { [keys: string]: Selectable<JobApplicationStatusAuditTrail> }, field: Selectable<JobApplicationStatusAuditTrail>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
