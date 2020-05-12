/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { JobApplicationOnboardingStatusRequestBuilder } from './JobApplicationOnboardingStatusRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "JobApplicationOnboardingStatus" of service "SFOData".
 */
export class JobApplicationOnboardingStatus extends Entity implements JobApplicationOnboardingStatusType {
  /**
   * Technical entity name for JobApplicationOnboardingStatus.
   */
  static _entityName = 'JobApplicationOnboardingStatus';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for JobApplicationOnboardingStatus.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Report url.
   */
  createdDate!: Moment;
  /**
   * Report url.
   */
  lastModifiedDate!: Moment;
  /**
   * Status message.
   */
  message!: string;
  /**
   * Name.
   */
  name!: string;
  /**
   * Onboarding request ID.
   */
  onboardingId!: BigNumber;
  /**
   * Onboarding status ID.
   */
  onboardingStatusId!: BigNumber;
  /**
   * Status.
   */
  status!: string;
  /**
   * Status type.
   */
  statusType!: string;
  /**
   * Type.
   */
  type!: string;
  /**
   * Report url.
   */
  url!: string;
  /**
   * One-to-one navigation property to the [[JobApplicationOnboardingData]] entity.
   */
  onboardingData!: JobApplicationOnboardingData;

  /**
   * Returns an entity builder to construct instances `JobApplicationOnboardingStatus`.
   * @returns A builder that constructs instances of entity type `JobApplicationOnboardingStatus`.
   */
  static builder(): EntityBuilderType<JobApplicationOnboardingStatus, JobApplicationOnboardingStatusTypeForceMandatory> {
    return Entity.entityBuilder(JobApplicationOnboardingStatus);
  }

  /**
   * Returns a request builder to construct requests for operations on the `JobApplicationOnboardingStatus` entity type.
   * @returns A `JobApplicationOnboardingStatus` request builder.
   */
  static requestBuilder(): JobApplicationOnboardingStatusRequestBuilder {
    return new JobApplicationOnboardingStatusRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobApplicationOnboardingStatus`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `JobApplicationOnboardingStatus`.
   */
  static customField(fieldName: string): CustomField<JobApplicationOnboardingStatus> {
    return Entity.customFieldSelector(fieldName, JobApplicationOnboardingStatus);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { JobApplicationOnboardingData, JobApplicationOnboardingDataType } from './JobApplicationOnboardingData';

export interface JobApplicationOnboardingStatusType {
  createdDate: Moment;
  lastModifiedDate: Moment;
  message: string;
  name: string;
  onboardingId: BigNumber;
  onboardingStatusId: BigNumber;
  status: string;
  statusType: string;
  type: string;
  url: string;
  onboardingData: JobApplicationOnboardingDataType;
}

export interface JobApplicationOnboardingStatusTypeForceMandatory {
  createdDate: Moment;
  lastModifiedDate: Moment;
  message: string;
  name: string;
  onboardingId: BigNumber;
  onboardingStatusId: BigNumber;
  status: string;
  statusType: string;
  type: string;
  url: string;
  onboardingData: JobApplicationOnboardingDataType;
}

export namespace JobApplicationOnboardingStatus {
  /**
   * Static representation of the [[createdDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE: DateField<JobApplicationOnboardingStatus> = new DateField('createdDate', JobApplicationOnboardingStatus, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[lastModifiedDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE: DateField<JobApplicationOnboardingStatus> = new DateField('lastModifiedDate', JobApplicationOnboardingStatus, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[message]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MESSAGE: StringField<JobApplicationOnboardingStatus> = new StringField('message', JobApplicationOnboardingStatus, 'Edm.String');
  /**
   * Static representation of the [[name]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME: StringField<JobApplicationOnboardingStatus> = new StringField('name', JobApplicationOnboardingStatus, 'Edm.String');
  /**
   * Static representation of the [[onboardingId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ONBOARDING_ID: BigNumberField<JobApplicationOnboardingStatus> = new BigNumberField('onboardingId', JobApplicationOnboardingStatus, 'Edm.Int64');
  /**
   * Static representation of the [[onboardingStatusId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ONBOARDING_STATUS_ID: BigNumberField<JobApplicationOnboardingStatus> = new BigNumberField('onboardingStatusId', JobApplicationOnboardingStatus, 'Edm.Int64');
  /**
   * Static representation of the [[status]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS: StringField<JobApplicationOnboardingStatus> = new StringField('status', JobApplicationOnboardingStatus, 'Edm.String');
  /**
   * Static representation of the [[statusType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS_TYPE: StringField<JobApplicationOnboardingStatus> = new StringField('statusType', JobApplicationOnboardingStatus, 'Edm.String');
  /**
   * Static representation of the [[type]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TYPE: StringField<JobApplicationOnboardingStatus> = new StringField('type', JobApplicationOnboardingStatus, 'Edm.String');
  /**
   * Static representation of the [[url]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const URL: StringField<JobApplicationOnboardingStatus> = new StringField('url', JobApplicationOnboardingStatus, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[onboardingData]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ONBOARDING_DATA: OneToOneLink<JobApplicationOnboardingStatus, JobApplicationOnboardingData> = new OneToOneLink('onboardingData', JobApplicationOnboardingStatus, JobApplicationOnboardingData);
  /**
   * All fields of the JobApplicationOnboardingStatus entity.
   */
  export const _allFields: Array<DateField<JobApplicationOnboardingStatus> | StringField<JobApplicationOnboardingStatus> | BigNumberField<JobApplicationOnboardingStatus> | OneToOneLink<JobApplicationOnboardingStatus, JobApplicationOnboardingData>> = [
    JobApplicationOnboardingStatus.CREATED_DATE,
    JobApplicationOnboardingStatus.LAST_MODIFIED_DATE,
    JobApplicationOnboardingStatus.MESSAGE,
    JobApplicationOnboardingStatus.NAME,
    JobApplicationOnboardingStatus.ONBOARDING_ID,
    JobApplicationOnboardingStatus.ONBOARDING_STATUS_ID,
    JobApplicationOnboardingStatus.STATUS,
    JobApplicationOnboardingStatus.STATUS_TYPE,
    JobApplicationOnboardingStatus.TYPE,
    JobApplicationOnboardingStatus.URL,
    JobApplicationOnboardingStatus.ONBOARDING_DATA
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<JobApplicationOnboardingStatus> = new AllFields('*', JobApplicationOnboardingStatus);
  /**
   * All key fields of the JobApplicationOnboardingStatus entity.
   */
  export const _keyFields: Array<Selectable<JobApplicationOnboardingStatus>> = [JobApplicationOnboardingStatus.ONBOARDING_STATUS_ID];
  /**
   * Mapping of all key field names to the respective static field property JobApplicationOnboardingStatus.
   */
  export const _keys: { [keys: string]: Selectable<JobApplicationOnboardingStatus> } = JobApplicationOnboardingStatus._keyFields.reduce((acc: { [keys: string]: Selectable<JobApplicationOnboardingStatus> }, field: Selectable<JobApplicationOnboardingStatus>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
