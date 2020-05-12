/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { JobApplicationBackgroundCheckRequestRequestBuilder } from './JobApplicationBackgroundCheckRequestRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "JobApplicationBackgroundCheckRequest" of service "SFOData".
 */
export class JobApplicationBackgroundCheckRequest extends Entity implements JobApplicationBackgroundCheckRequestType {
  /**
   * Technical entity name for JobApplicationBackgroundCheckRequest.
   */
  static _entityName = 'JobApplicationBackgroundCheckRequest';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for JobApplicationBackgroundCheckRequest.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Application ID.
   */
  applicationId!: BigNumber;
  /**
   * Created By.
   */
  createdByUser!: string;
  /**
   * Created Date.
   */
  createdDateTime!: Moment;
  /**
   * Last Modified Date.
   */
  lastModifiedDateTime!: Moment;
  /**
   * Order Status.
   * @nullable
   */
  orderStatus?: string;
  /**
   * Background Check Request ID.
   */
  requestId!: BigNumber;
  /**
   * Response Code.
   * @nullable
   */
  responseCode?: string;
  /**
   * Response Detail.
   * @nullable
   */
  responseDetail?: string;
  /**
   * Vendor Code.
   */
  vendorCode!: string;
  /**
   * Vendor Order Number.
   * @nullable
   */
  vendorOrderNo?: string;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  createdByUserNav!: User;
  /**
   * One-to-one navigation property to the [[JobApplication]] entity.
   */
  jobApplication!: JobApplication;

  /**
   * Returns an entity builder to construct instances `JobApplicationBackgroundCheckRequest`.
   * @returns A builder that constructs instances of entity type `JobApplicationBackgroundCheckRequest`.
   */
  static builder(): EntityBuilderType<JobApplicationBackgroundCheckRequest, JobApplicationBackgroundCheckRequestTypeForceMandatory> {
    return Entity.entityBuilder(JobApplicationBackgroundCheckRequest);
  }

  /**
   * Returns a request builder to construct requests for operations on the `JobApplicationBackgroundCheckRequest` entity type.
   * @returns A `JobApplicationBackgroundCheckRequest` request builder.
   */
  static requestBuilder(): JobApplicationBackgroundCheckRequestRequestBuilder {
    return new JobApplicationBackgroundCheckRequestRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobApplicationBackgroundCheckRequest`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `JobApplicationBackgroundCheckRequest`.
   */
  static customField(fieldName: string): CustomField<JobApplicationBackgroundCheckRequest> {
    return Entity.customFieldSelector(fieldName, JobApplicationBackgroundCheckRequest);
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
import { JobApplication, JobApplicationType } from './JobApplication';

export interface JobApplicationBackgroundCheckRequestType {
  applicationId: BigNumber;
  createdByUser: string;
  createdDateTime: Moment;
  lastModifiedDateTime: Moment;
  orderStatus?: string;
  requestId: BigNumber;
  responseCode?: string;
  responseDetail?: string;
  vendorCode: string;
  vendorOrderNo?: string;
  createdByUserNav: UserType;
  jobApplication: JobApplicationType;
}

export interface JobApplicationBackgroundCheckRequestTypeForceMandatory {
  applicationId: BigNumber;
  createdByUser: string;
  createdDateTime: Moment;
  lastModifiedDateTime: Moment;
  orderStatus: string;
  requestId: BigNumber;
  responseCode: string;
  responseDetail: string;
  vendorCode: string;
  vendorOrderNo: string;
  createdByUserNav: UserType;
  jobApplication: JobApplicationType;
}

export namespace JobApplicationBackgroundCheckRequest {
  /**
   * Static representation of the [[applicationId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const APPLICATION_ID: BigNumberField<JobApplicationBackgroundCheckRequest> = new BigNumberField('applicationId', JobApplicationBackgroundCheckRequest, 'Edm.Int64');
  /**
   * Static representation of the [[createdByUser]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_USER: StringField<JobApplicationBackgroundCheckRequest> = new StringField('createdByUser', JobApplicationBackgroundCheckRequest, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<JobApplicationBackgroundCheckRequest> = new DateField('createdDateTime', JobApplicationBackgroundCheckRequest, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<JobApplicationBackgroundCheckRequest> = new DateField('lastModifiedDateTime', JobApplicationBackgroundCheckRequest, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[orderStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ORDER_STATUS: StringField<JobApplicationBackgroundCheckRequest> = new StringField('orderStatus', JobApplicationBackgroundCheckRequest, 'Edm.String');
  /**
   * Static representation of the [[requestId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REQUEST_ID: BigNumberField<JobApplicationBackgroundCheckRequest> = new BigNumberField('requestId', JobApplicationBackgroundCheckRequest, 'Edm.Int64');
  /**
   * Static representation of the [[responseCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RESPONSE_CODE: StringField<JobApplicationBackgroundCheckRequest> = new StringField('responseCode', JobApplicationBackgroundCheckRequest, 'Edm.String');
  /**
   * Static representation of the [[responseDetail]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RESPONSE_DETAIL: StringField<JobApplicationBackgroundCheckRequest> = new StringField('responseDetail', JobApplicationBackgroundCheckRequest, 'Edm.String');
  /**
   * Static representation of the [[vendorCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VENDOR_CODE: StringField<JobApplicationBackgroundCheckRequest> = new StringField('vendorCode', JobApplicationBackgroundCheckRequest, 'Edm.String');
  /**
   * Static representation of the [[vendorOrderNo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VENDOR_ORDER_NO: StringField<JobApplicationBackgroundCheckRequest> = new StringField('vendorOrderNo', JobApplicationBackgroundCheckRequest, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[createdByUserNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_USER_NAV: OneToOneLink<JobApplicationBackgroundCheckRequest, User> = new OneToOneLink('createdByUserNav', JobApplicationBackgroundCheckRequest, User);
  /**
   * Static representation of the one-to-one navigation property [[jobApplication]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_APPLICATION: OneToOneLink<JobApplicationBackgroundCheckRequest, JobApplication> = new OneToOneLink('jobApplication', JobApplicationBackgroundCheckRequest, JobApplication);
  /**
   * All fields of the JobApplicationBackgroundCheckRequest entity.
   */
  export const _allFields: Array<BigNumberField<JobApplicationBackgroundCheckRequest> | StringField<JobApplicationBackgroundCheckRequest> | DateField<JobApplicationBackgroundCheckRequest> | OneToOneLink<JobApplicationBackgroundCheckRequest, User> | OneToOneLink<JobApplicationBackgroundCheckRequest, JobApplication>> = [
    JobApplicationBackgroundCheckRequest.APPLICATION_ID,
    JobApplicationBackgroundCheckRequest.CREATED_BY_USER,
    JobApplicationBackgroundCheckRequest.CREATED_DATE_TIME,
    JobApplicationBackgroundCheckRequest.LAST_MODIFIED_DATE_TIME,
    JobApplicationBackgroundCheckRequest.ORDER_STATUS,
    JobApplicationBackgroundCheckRequest.REQUEST_ID,
    JobApplicationBackgroundCheckRequest.RESPONSE_CODE,
    JobApplicationBackgroundCheckRequest.RESPONSE_DETAIL,
    JobApplicationBackgroundCheckRequest.VENDOR_CODE,
    JobApplicationBackgroundCheckRequest.VENDOR_ORDER_NO,
    JobApplicationBackgroundCheckRequest.CREATED_BY_USER_NAV,
    JobApplicationBackgroundCheckRequest.JOB_APPLICATION
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<JobApplicationBackgroundCheckRequest> = new AllFields('*', JobApplicationBackgroundCheckRequest);
  /**
   * All key fields of the JobApplicationBackgroundCheckRequest entity.
   */
  export const _keyFields: Array<Selectable<JobApplicationBackgroundCheckRequest>> = [JobApplicationBackgroundCheckRequest.REQUEST_ID];
  /**
   * Mapping of all key field names to the respective static field property JobApplicationBackgroundCheckRequest.
   */
  export const _keys: { [keys: string]: Selectable<JobApplicationBackgroundCheckRequest> } = JobApplicationBackgroundCheckRequest._keyFields.reduce((acc: { [keys: string]: Selectable<JobApplicationBackgroundCheckRequest> }, field: Selectable<JobApplicationBackgroundCheckRequest>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
