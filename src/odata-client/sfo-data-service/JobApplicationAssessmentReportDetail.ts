/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { JobApplicationAssessmentReportDetailRequestBuilder } from './JobApplicationAssessmentReportDetailRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "JobApplicationAssessmentReportDetail" of service "SFOData".
 */
export class JobApplicationAssessmentReportDetail extends Entity implements JobApplicationAssessmentReportDetailType {
  /**
   * Technical entity name for JobApplicationAssessmentReportDetail.
   */
  static _entityName = 'JobApplicationAssessmentReportDetail';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for JobApplicationAssessmentReportDetail.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Assessment Report Detail Id.
   */
  id!: BigNumber;
  /**
   * Score Component.
   */
  scoreComponent!: string;
  /**
   * Score Value.
   */
  scoreValue!: string;
  /**
   * One-to-one navigation property to the [[JobApplicationAssessmentReport]] entity.
   */
  assessmentReport!: JobApplicationAssessmentReport;

  /**
   * Returns an entity builder to construct instances `JobApplicationAssessmentReportDetail`.
   * @returns A builder that constructs instances of entity type `JobApplicationAssessmentReportDetail`.
   */
  static builder(): EntityBuilderType<JobApplicationAssessmentReportDetail, JobApplicationAssessmentReportDetailTypeForceMandatory> {
    return Entity.entityBuilder(JobApplicationAssessmentReportDetail);
  }

  /**
   * Returns a request builder to construct requests for operations on the `JobApplicationAssessmentReportDetail` entity type.
   * @returns A `JobApplicationAssessmentReportDetail` request builder.
   */
  static requestBuilder(): JobApplicationAssessmentReportDetailRequestBuilder {
    return new JobApplicationAssessmentReportDetailRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobApplicationAssessmentReportDetail`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `JobApplicationAssessmentReportDetail`.
   */
  static customField(fieldName: string): CustomField<JobApplicationAssessmentReportDetail> {
    return Entity.customFieldSelector(fieldName, JobApplicationAssessmentReportDetail);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { JobApplicationAssessmentReport, JobApplicationAssessmentReportType } from './JobApplicationAssessmentReport';

export interface JobApplicationAssessmentReportDetailType {
  id: BigNumber;
  scoreComponent: string;
  scoreValue: string;
  assessmentReport: JobApplicationAssessmentReportType;
}

export interface JobApplicationAssessmentReportDetailTypeForceMandatory {
  id: BigNumber;
  scoreComponent: string;
  scoreValue: string;
  assessmentReport: JobApplicationAssessmentReportType;
}

export namespace JobApplicationAssessmentReportDetail {
  /**
   * Static representation of the [[id]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ID: BigNumberField<JobApplicationAssessmentReportDetail> = new BigNumberField('id', JobApplicationAssessmentReportDetail, 'Edm.Int64');
  /**
   * Static representation of the [[scoreComponent]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SCORE_COMPONENT: StringField<JobApplicationAssessmentReportDetail> = new StringField('scoreComponent', JobApplicationAssessmentReportDetail, 'Edm.String');
  /**
   * Static representation of the [[scoreValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SCORE_VALUE: StringField<JobApplicationAssessmentReportDetail> = new StringField('scoreValue', JobApplicationAssessmentReportDetail, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[assessmentReport]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ASSESSMENT_REPORT: OneToOneLink<JobApplicationAssessmentReportDetail, JobApplicationAssessmentReport> = new OneToOneLink('assessmentReport', JobApplicationAssessmentReportDetail, JobApplicationAssessmentReport);
  /**
   * All fields of the JobApplicationAssessmentReportDetail entity.
   */
  export const _allFields: Array<BigNumberField<JobApplicationAssessmentReportDetail> | StringField<JobApplicationAssessmentReportDetail> | OneToOneLink<JobApplicationAssessmentReportDetail, JobApplicationAssessmentReport>> = [
    JobApplicationAssessmentReportDetail.ID,
    JobApplicationAssessmentReportDetail.SCORE_COMPONENT,
    JobApplicationAssessmentReportDetail.SCORE_VALUE,
    JobApplicationAssessmentReportDetail.ASSESSMENT_REPORT
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<JobApplicationAssessmentReportDetail> = new AllFields('*', JobApplicationAssessmentReportDetail);
  /**
   * All key fields of the JobApplicationAssessmentReportDetail entity.
   */
  export const _keyFields: Array<Selectable<JobApplicationAssessmentReportDetail>> = [JobApplicationAssessmentReportDetail.ID];
  /**
   * Mapping of all key field names to the respective static field property JobApplicationAssessmentReportDetail.
   */
  export const _keys: { [keys: string]: Selectable<JobApplicationAssessmentReportDetail> } = JobApplicationAssessmentReportDetail._keyFields.reduce((acc: { [keys: string]: Selectable<JobApplicationAssessmentReportDetail> }, field: Selectable<JobApplicationAssessmentReportDetail>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
