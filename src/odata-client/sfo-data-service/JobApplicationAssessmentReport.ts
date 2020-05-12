/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { JobApplicationAssessmentReportRequestBuilder } from './JobApplicationAssessmentReportRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "JobApplicationAssessmentReport" of service "SFOData".
 */
export class JobApplicationAssessmentReport extends Entity implements JobApplicationAssessmentReportType {
  /**
   * Technical entity name for JobApplicationAssessmentReport.
   */
  static _entityName = 'JobApplicationAssessmentReport';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for JobApplicationAssessmentReport.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Assessment Report Id.
   */
  id!: BigNumber;
  /**
   * Assessment Order ID.
   */
  orderId!: BigNumber;
  /**
   * Report URL.
   * @nullable
   */
  reportUrl?: string;
  /**
   * Status.
   */
  status!: BigNumber;
  /**
   * Status Date.
   * @nullable
   */
  statusDate?: Moment;
  /**
   * Status Details.
   */
  statusDetails!: string;
  /**
   * One-to-many navigation property to the [[JobApplicationAssessmentReportDetail]] entity.
   */
  assessmentReportDetail!: JobApplicationAssessmentReportDetail[];
  /**
   * One-to-one navigation property to the [[JobApplicationAssessmentOrder]] entity.
   */
  jobApplicationAssessmentOrder!: JobApplicationAssessmentOrder;

  /**
   * Returns an entity builder to construct instances `JobApplicationAssessmentReport`.
   * @returns A builder that constructs instances of entity type `JobApplicationAssessmentReport`.
   */
  static builder(): EntityBuilderType<JobApplicationAssessmentReport, JobApplicationAssessmentReportTypeForceMandatory> {
    return Entity.entityBuilder(JobApplicationAssessmentReport);
  }

  /**
   * Returns a request builder to construct requests for operations on the `JobApplicationAssessmentReport` entity type.
   * @returns A `JobApplicationAssessmentReport` request builder.
   */
  static requestBuilder(): JobApplicationAssessmentReportRequestBuilder {
    return new JobApplicationAssessmentReportRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobApplicationAssessmentReport`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `JobApplicationAssessmentReport`.
   */
  static customField(fieldName: string): CustomField<JobApplicationAssessmentReport> {
    return Entity.customFieldSelector(fieldName, JobApplicationAssessmentReport);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { JobApplicationAssessmentReportDetail, JobApplicationAssessmentReportDetailType } from './JobApplicationAssessmentReportDetail';
import { JobApplicationAssessmentOrder, JobApplicationAssessmentOrderType } from './JobApplicationAssessmentOrder';

export interface JobApplicationAssessmentReportType {
  id: BigNumber;
  orderId: BigNumber;
  reportUrl?: string;
  status: BigNumber;
  statusDate?: Moment;
  statusDetails: string;
  assessmentReportDetail: JobApplicationAssessmentReportDetailType[];
  jobApplicationAssessmentOrder: JobApplicationAssessmentOrderType;
}

export interface JobApplicationAssessmentReportTypeForceMandatory {
  id: BigNumber;
  orderId: BigNumber;
  reportUrl: string;
  status: BigNumber;
  statusDate: Moment;
  statusDetails: string;
  assessmentReportDetail: JobApplicationAssessmentReportDetailType[];
  jobApplicationAssessmentOrder: JobApplicationAssessmentOrderType;
}

export namespace JobApplicationAssessmentReport {
  /**
   * Static representation of the [[id]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ID: BigNumberField<JobApplicationAssessmentReport> = new BigNumberField('id', JobApplicationAssessmentReport, 'Edm.Int64');
  /**
   * Static representation of the [[orderId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ORDER_ID: BigNumberField<JobApplicationAssessmentReport> = new BigNumberField('orderId', JobApplicationAssessmentReport, 'Edm.Int64');
  /**
   * Static representation of the [[reportUrl]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REPORT_URL: StringField<JobApplicationAssessmentReport> = new StringField('reportURL', JobApplicationAssessmentReport, 'Edm.String');
  /**
   * Static representation of the [[status]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS: BigNumberField<JobApplicationAssessmentReport> = new BigNumberField('status', JobApplicationAssessmentReport, 'Edm.Int64');
  /**
   * Static representation of the [[statusDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS_DATE: DateField<JobApplicationAssessmentReport> = new DateField('statusDate', JobApplicationAssessmentReport, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[statusDetails]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS_DETAILS: StringField<JobApplicationAssessmentReport> = new StringField('statusDetails', JobApplicationAssessmentReport, 'Edm.String');
  /**
   * Static representation of the one-to-many navigation property [[assessmentReportDetail]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ASSESSMENT_REPORT_DETAIL: Link<JobApplicationAssessmentReport, JobApplicationAssessmentReportDetail> = new Link('assessmentReportDetail', JobApplicationAssessmentReport, JobApplicationAssessmentReportDetail);
  /**
   * Static representation of the one-to-one navigation property [[jobApplicationAssessmentOrder]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_APPLICATION_ASSESSMENT_ORDER: OneToOneLink<JobApplicationAssessmentReport, JobApplicationAssessmentOrder> = new OneToOneLink('jobApplicationAssessmentOrder', JobApplicationAssessmentReport, JobApplicationAssessmentOrder);
  /**
   * All fields of the JobApplicationAssessmentReport entity.
   */
  export const _allFields: Array<BigNumberField<JobApplicationAssessmentReport> | StringField<JobApplicationAssessmentReport> | DateField<JobApplicationAssessmentReport> | Link<JobApplicationAssessmentReport, JobApplicationAssessmentReportDetail> | OneToOneLink<JobApplicationAssessmentReport, JobApplicationAssessmentOrder>> = [
    JobApplicationAssessmentReport.ID,
    JobApplicationAssessmentReport.ORDER_ID,
    JobApplicationAssessmentReport.REPORT_URL,
    JobApplicationAssessmentReport.STATUS,
    JobApplicationAssessmentReport.STATUS_DATE,
    JobApplicationAssessmentReport.STATUS_DETAILS,
    JobApplicationAssessmentReport.ASSESSMENT_REPORT_DETAIL,
    JobApplicationAssessmentReport.JOB_APPLICATION_ASSESSMENT_ORDER
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<JobApplicationAssessmentReport> = new AllFields('*', JobApplicationAssessmentReport);
  /**
   * All key fields of the JobApplicationAssessmentReport entity.
   */
  export const _keyFields: Array<Selectable<JobApplicationAssessmentReport>> = [JobApplicationAssessmentReport.ID];
  /**
   * Mapping of all key field names to the respective static field property JobApplicationAssessmentReport.
   */
  export const _keys: { [keys: string]: Selectable<JobApplicationAssessmentReport> } = JobApplicationAssessmentReport._keyFields.reduce((acc: { [keys: string]: Selectable<JobApplicationAssessmentReport> }, field: Selectable<JobApplicationAssessmentReport>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
