/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { JobApplicationAssessmentOrderRequestBuilder } from './JobApplicationAssessmentOrderRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "JobApplicationAssessmentOrder" of service "SFOData".
 */
export class JobApplicationAssessmentOrder extends Entity implements JobApplicationAssessmentOrderType {
  /**
   * Technical entity name for JobApplicationAssessmentOrder.
   */
  static _entityName = 'JobApplicationAssessmentOrder';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for JobApplicationAssessmentOrder.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Job Application ID.
   */
  applicationId!: BigNumber;
  /**
   * Assessment URL.
   * @nullable
   */
  assessmentUrl?: string;
  /**
   * Created By.
   * @nullable
   */
  createdBy?: string;
  /**
   * Created Date Time.
   * @nullable
   */
  createdDateTime?: Moment;
  /**
   * Assessment Order Id.
   */
  id!: BigNumber;
  /**
   * Last Modified By.
   */
  lastModifiedBy!: string;
  /**
   * Last Modified Date.
   * @nullable
   */
  lastModifiedDateTime?: Moment;
  /**
   * packageCode.
   * @nullable
   */
  packageCode?: string;
  /**
   * vendorCode.
   * @nullable
   */
  vendorCode?: string;
  /**
   * One-to-many navigation property to the [[JobApplicationAssessmentReport]] entity.
   */
  assessmentReport!: JobApplicationAssessmentReport[];
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  createdByNav!: User;
  /**
   * One-to-one navigation property to the [[JobApplication]] entity.
   */
  jobApplication!: JobApplication;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  lastModifiedByNav!: User;

  /**
   * Returns an entity builder to construct instances `JobApplicationAssessmentOrder`.
   * @returns A builder that constructs instances of entity type `JobApplicationAssessmentOrder`.
   */
  static builder(): EntityBuilderType<JobApplicationAssessmentOrder, JobApplicationAssessmentOrderTypeForceMandatory> {
    return Entity.entityBuilder(JobApplicationAssessmentOrder);
  }

  /**
   * Returns a request builder to construct requests for operations on the `JobApplicationAssessmentOrder` entity type.
   * @returns A `JobApplicationAssessmentOrder` request builder.
   */
  static requestBuilder(): JobApplicationAssessmentOrderRequestBuilder {
    return new JobApplicationAssessmentOrderRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobApplicationAssessmentOrder`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `JobApplicationAssessmentOrder`.
   */
  static customField(fieldName: string): CustomField<JobApplicationAssessmentOrder> {
    return Entity.customFieldSelector(fieldName, JobApplicationAssessmentOrder);
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
import { User, UserType } from './User';
import { JobApplication, JobApplicationType } from './JobApplication';

export interface JobApplicationAssessmentOrderType {
  applicationId: BigNumber;
  assessmentUrl?: string;
  createdBy?: string;
  createdDateTime?: Moment;
  id: BigNumber;
  lastModifiedBy: string;
  lastModifiedDateTime?: Moment;
  packageCode?: string;
  vendorCode?: string;
  assessmentReport: JobApplicationAssessmentReportType[];
  createdByNav: UserType;
  jobApplication: JobApplicationType;
  lastModifiedByNav: UserType;
}

export interface JobApplicationAssessmentOrderTypeForceMandatory {
  applicationId: BigNumber;
  assessmentUrl: string;
  createdBy: string;
  createdDateTime: Moment;
  id: BigNumber;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  packageCode: string;
  vendorCode: string;
  assessmentReport: JobApplicationAssessmentReportType[];
  createdByNav: UserType;
  jobApplication: JobApplicationType;
  lastModifiedByNav: UserType;
}

export namespace JobApplicationAssessmentOrder {
  /**
   * Static representation of the [[applicationId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const APPLICATION_ID: BigNumberField<JobApplicationAssessmentOrder> = new BigNumberField('applicationId', JobApplicationAssessmentOrder, 'Edm.Int64');
  /**
   * Static representation of the [[assessmentUrl]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ASSESSMENT_URL: StringField<JobApplicationAssessmentOrder> = new StringField('assessmentUrl', JobApplicationAssessmentOrder, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<JobApplicationAssessmentOrder> = new StringField('createdBy', JobApplicationAssessmentOrder, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<JobApplicationAssessmentOrder> = new DateField('createdDateTime', JobApplicationAssessmentOrder, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[id]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ID: BigNumberField<JobApplicationAssessmentOrder> = new BigNumberField('id', JobApplicationAssessmentOrder, 'Edm.Int64');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<JobApplicationAssessmentOrder> = new StringField('lastModifiedBy', JobApplicationAssessmentOrder, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<JobApplicationAssessmentOrder> = new DateField('lastModifiedDateTime', JobApplicationAssessmentOrder, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[packageCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PACKAGE_CODE: StringField<JobApplicationAssessmentOrder> = new StringField('packageCode', JobApplicationAssessmentOrder, 'Edm.String');
  /**
   * Static representation of the [[vendorCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VENDOR_CODE: StringField<JobApplicationAssessmentOrder> = new StringField('vendorCode', JobApplicationAssessmentOrder, 'Edm.String');
  /**
   * Static representation of the one-to-many navigation property [[assessmentReport]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ASSESSMENT_REPORT: Link<JobApplicationAssessmentOrder, JobApplicationAssessmentReport> = new Link('assessmentReport', JobApplicationAssessmentOrder, JobApplicationAssessmentReport);
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<JobApplicationAssessmentOrder, User> = new OneToOneLink('createdByNav', JobApplicationAssessmentOrder, User);
  /**
   * Static representation of the one-to-one navigation property [[jobApplication]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_APPLICATION: OneToOneLink<JobApplicationAssessmentOrder, JobApplication> = new OneToOneLink('jobApplication', JobApplicationAssessmentOrder, JobApplication);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<JobApplicationAssessmentOrder, User> = new OneToOneLink('lastModifiedByNav', JobApplicationAssessmentOrder, User);
  /**
   * All fields of the JobApplicationAssessmentOrder entity.
   */
  export const _allFields: Array<BigNumberField<JobApplicationAssessmentOrder> | StringField<JobApplicationAssessmentOrder> | DateField<JobApplicationAssessmentOrder> | Link<JobApplicationAssessmentOrder, JobApplicationAssessmentReport> | OneToOneLink<JobApplicationAssessmentOrder, User> | OneToOneLink<JobApplicationAssessmentOrder, JobApplication>> = [
    JobApplicationAssessmentOrder.APPLICATION_ID,
    JobApplicationAssessmentOrder.ASSESSMENT_URL,
    JobApplicationAssessmentOrder.CREATED_BY,
    JobApplicationAssessmentOrder.CREATED_DATE_TIME,
    JobApplicationAssessmentOrder.ID,
    JobApplicationAssessmentOrder.LAST_MODIFIED_BY,
    JobApplicationAssessmentOrder.LAST_MODIFIED_DATE_TIME,
    JobApplicationAssessmentOrder.PACKAGE_CODE,
    JobApplicationAssessmentOrder.VENDOR_CODE,
    JobApplicationAssessmentOrder.ASSESSMENT_REPORT,
    JobApplicationAssessmentOrder.CREATED_BY_NAV,
    JobApplicationAssessmentOrder.JOB_APPLICATION,
    JobApplicationAssessmentOrder.LAST_MODIFIED_BY_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<JobApplicationAssessmentOrder> = new AllFields('*', JobApplicationAssessmentOrder);
  /**
   * All key fields of the JobApplicationAssessmentOrder entity.
   */
  export const _keyFields: Array<Selectable<JobApplicationAssessmentOrder>> = [JobApplicationAssessmentOrder.ID];
  /**
   * Mapping of all key field names to the respective static field property JobApplicationAssessmentOrder.
   */
  export const _keys: { [keys: string]: Selectable<JobApplicationAssessmentOrder> } = JobApplicationAssessmentOrder._keyFields.reduce((acc: { [keys: string]: Selectable<JobApplicationAssessmentOrder> }, field: Selectable<JobApplicationAssessmentOrder>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
