/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { JobApplicationBackgroundCheckResultRequestBuilder } from './JobApplicationBackgroundCheckResultRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "JobApplicationBackgroundCheckResult" of service "SFOData".
 */
export class JobApplicationBackgroundCheckResult extends Entity implements JobApplicationBackgroundCheckResultType {
  /**
   * Technical entity name for JobApplicationBackgroundCheckResult.
   */
  static _entityName = 'JobApplicationBackgroundCheckResult';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for JobApplicationBackgroundCheckResult.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Created Date.
   */
  createdDateTime!: Moment;
  /**
   * Final Step.
   * @nullable
   */
  finalStep?: boolean;
  /**
   * Report URL.
   * @nullable
   */
  reportUrl?: string;
  /**
   * Status ID.
   */
  statusId!: BigNumber;
  /**
   * Step Message.
   * @nullable
   */
  stepMessage?: string;
  /**
   * Background Check Step Name.
   * @nullable
   */
  stepName?: string;
  /**
   * Background Check Step Status.
   * @nullable
   */
  stepStatus?: string;
  /**
   * Vendor.
   */
  vendorCode!: string;
  /**
   * Vendor Order Number.
   */
  vendorOrderNo!: string;
  /**
   * One-to-one navigation property to the [[JobApplicationBackgroundCheckRequest]] entity.
   */
  backgroundCheckRequest!: JobApplicationBackgroundCheckRequest;

  /**
   * Returns an entity builder to construct instances `JobApplicationBackgroundCheckResult`.
   * @returns A builder that constructs instances of entity type `JobApplicationBackgroundCheckResult`.
   */
  static builder(): EntityBuilderType<JobApplicationBackgroundCheckResult, JobApplicationBackgroundCheckResultTypeForceMandatory> {
    return Entity.entityBuilder(JobApplicationBackgroundCheckResult);
  }

  /**
   * Returns a request builder to construct requests for operations on the `JobApplicationBackgroundCheckResult` entity type.
   * @returns A `JobApplicationBackgroundCheckResult` request builder.
   */
  static requestBuilder(): JobApplicationBackgroundCheckResultRequestBuilder {
    return new JobApplicationBackgroundCheckResultRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobApplicationBackgroundCheckResult`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `JobApplicationBackgroundCheckResult`.
   */
  static customField(fieldName: string): CustomField<JobApplicationBackgroundCheckResult> {
    return Entity.customFieldSelector(fieldName, JobApplicationBackgroundCheckResult);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { JobApplicationBackgroundCheckRequest, JobApplicationBackgroundCheckRequestType } from './JobApplicationBackgroundCheckRequest';

export interface JobApplicationBackgroundCheckResultType {
  createdDateTime: Moment;
  finalStep?: boolean;
  reportUrl?: string;
  statusId: BigNumber;
  stepMessage?: string;
  stepName?: string;
  stepStatus?: string;
  vendorCode: string;
  vendorOrderNo: string;
  backgroundCheckRequest: JobApplicationBackgroundCheckRequestType;
}

export interface JobApplicationBackgroundCheckResultTypeForceMandatory {
  createdDateTime: Moment;
  finalStep: boolean;
  reportUrl: string;
  statusId: BigNumber;
  stepMessage: string;
  stepName: string;
  stepStatus: string;
  vendorCode: string;
  vendorOrderNo: string;
  backgroundCheckRequest: JobApplicationBackgroundCheckRequestType;
}

export namespace JobApplicationBackgroundCheckResult {
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<JobApplicationBackgroundCheckResult> = new DateField('createdDateTime', JobApplicationBackgroundCheckResult, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[finalStep]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FINAL_STEP: BooleanField<JobApplicationBackgroundCheckResult> = new BooleanField('finalStep', JobApplicationBackgroundCheckResult, 'Edm.Boolean');
  /**
   * Static representation of the [[reportUrl]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REPORT_URL: StringField<JobApplicationBackgroundCheckResult> = new StringField('reportUrl', JobApplicationBackgroundCheckResult, 'Edm.String');
  /**
   * Static representation of the [[statusId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS_ID: BigNumberField<JobApplicationBackgroundCheckResult> = new BigNumberField('statusId', JobApplicationBackgroundCheckResult, 'Edm.Int64');
  /**
   * Static representation of the [[stepMessage]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STEP_MESSAGE: StringField<JobApplicationBackgroundCheckResult> = new StringField('stepMessage', JobApplicationBackgroundCheckResult, 'Edm.String');
  /**
   * Static representation of the [[stepName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STEP_NAME: StringField<JobApplicationBackgroundCheckResult> = new StringField('stepName', JobApplicationBackgroundCheckResult, 'Edm.String');
  /**
   * Static representation of the [[stepStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STEP_STATUS: StringField<JobApplicationBackgroundCheckResult> = new StringField('stepStatus', JobApplicationBackgroundCheckResult, 'Edm.String');
  /**
   * Static representation of the [[vendorCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VENDOR_CODE: StringField<JobApplicationBackgroundCheckResult> = new StringField('vendorCode', JobApplicationBackgroundCheckResult, 'Edm.String');
  /**
   * Static representation of the [[vendorOrderNo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VENDOR_ORDER_NO: StringField<JobApplicationBackgroundCheckResult> = new StringField('vendorOrderNo', JobApplicationBackgroundCheckResult, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[backgroundCheckRequest]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BACKGROUND_CHECK_REQUEST: OneToOneLink<JobApplicationBackgroundCheckResult, JobApplicationBackgroundCheckRequest> = new OneToOneLink('backgroundCheckRequest', JobApplicationBackgroundCheckResult, JobApplicationBackgroundCheckRequest);
  /**
   * All fields of the JobApplicationBackgroundCheckResult entity.
   */
  export const _allFields: Array<DateField<JobApplicationBackgroundCheckResult> | BooleanField<JobApplicationBackgroundCheckResult> | StringField<JobApplicationBackgroundCheckResult> | BigNumberField<JobApplicationBackgroundCheckResult> | OneToOneLink<JobApplicationBackgroundCheckResult, JobApplicationBackgroundCheckRequest>> = [
    JobApplicationBackgroundCheckResult.CREATED_DATE_TIME,
    JobApplicationBackgroundCheckResult.FINAL_STEP,
    JobApplicationBackgroundCheckResult.REPORT_URL,
    JobApplicationBackgroundCheckResult.STATUS_ID,
    JobApplicationBackgroundCheckResult.STEP_MESSAGE,
    JobApplicationBackgroundCheckResult.STEP_NAME,
    JobApplicationBackgroundCheckResult.STEP_STATUS,
    JobApplicationBackgroundCheckResult.VENDOR_CODE,
    JobApplicationBackgroundCheckResult.VENDOR_ORDER_NO,
    JobApplicationBackgroundCheckResult.BACKGROUND_CHECK_REQUEST
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<JobApplicationBackgroundCheckResult> = new AllFields('*', JobApplicationBackgroundCheckResult);
  /**
   * All key fields of the JobApplicationBackgroundCheckResult entity.
   */
  export const _keyFields: Array<Selectable<JobApplicationBackgroundCheckResult>> = [JobApplicationBackgroundCheckResult.STATUS_ID];
  /**
   * Mapping of all key field names to the respective static field property JobApplicationBackgroundCheckResult.
   */
  export const _keys: { [keys: string]: Selectable<JobApplicationBackgroundCheckResult> } = JobApplicationBackgroundCheckResult._keyFields.reduce((acc: { [keys: string]: Selectable<JobApplicationBackgroundCheckResult> }, field: Selectable<JobApplicationBackgroundCheckResult>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
