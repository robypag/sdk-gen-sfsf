/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { JobRequisitionAssessmentRequestBuilder } from './JobRequisitionAssessmentRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "JobRequisitionAssessment" of service "SFOData".
 */
export class JobRequisitionAssessment extends Entity implements JobRequisitionAssessmentType {
  /**
   * Technical entity name for JobRequisitionAssessment.
   */
  static _entityName = 'JobRequisitionAssessment';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for JobRequisitionAssessment.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Status Set Item Id.
   */
  appStatusSetItemId!: BigNumber;
  /**
   * Assessment Association Id.
   */
  assessmentAssociationId!: BigNumber;
  /**
   * Assessment Package Code.
   */
  assessmentPackageCode!: string;
  /**
   * Assessment Created By.
   */
  createdBy!: string;
  /**
   * Assessment Created Date.
   */
  createdDateTime!: Moment;
  /**
   * Email Template Id.
   */
  emailTemplateId!: BigNumber;
  /**
   * Job Requisition Id.
   */
  jobReqId!: BigNumber;
  /**
   * Assessment Last Modified By.
   */
  lastModifiedBy!: string;
  /**
   * Assessment Last Modified Date.
   */
  lastModifiedDateTime!: Moment;
  /**
   * vendorCode.
   * @nullable
   */
  vendorCode?: string;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  createdByNav!: User;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  lastModifiedByNav!: User;

  /**
   * Returns an entity builder to construct instances `JobRequisitionAssessment`.
   * @returns A builder that constructs instances of entity type `JobRequisitionAssessment`.
   */
  static builder(): EntityBuilderType<JobRequisitionAssessment, JobRequisitionAssessmentTypeForceMandatory> {
    return Entity.entityBuilder(JobRequisitionAssessment);
  }

  /**
   * Returns a request builder to construct requests for operations on the `JobRequisitionAssessment` entity type.
   * @returns A `JobRequisitionAssessment` request builder.
   */
  static requestBuilder(): JobRequisitionAssessmentRequestBuilder {
    return new JobRequisitionAssessmentRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobRequisitionAssessment`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `JobRequisitionAssessment`.
   */
  static customField(fieldName: string): CustomField<JobRequisitionAssessment> {
    return Entity.customFieldSelector(fieldName, JobRequisitionAssessment);
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

export interface JobRequisitionAssessmentType {
  appStatusSetItemId: BigNumber;
  assessmentAssociationId: BigNumber;
  assessmentPackageCode: string;
  createdBy: string;
  createdDateTime: Moment;
  emailTemplateId: BigNumber;
  jobReqId: BigNumber;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  vendorCode?: string;
  createdByNav: UserType;
  lastModifiedByNav: UserType;
}

export interface JobRequisitionAssessmentTypeForceMandatory {
  appStatusSetItemId: BigNumber;
  assessmentAssociationId: BigNumber;
  assessmentPackageCode: string;
  createdBy: string;
  createdDateTime: Moment;
  emailTemplateId: BigNumber;
  jobReqId: BigNumber;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  vendorCode: string;
  createdByNav: UserType;
  lastModifiedByNav: UserType;
}

export namespace JobRequisitionAssessment {
  /**
   * Static representation of the [[appStatusSetItemId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const APP_STATUS_SET_ITEM_ID: BigNumberField<JobRequisitionAssessment> = new BigNumberField('appStatusSetItemId', JobRequisitionAssessment, 'Edm.Int64');
  /**
   * Static representation of the [[assessmentAssociationId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ASSESSMENT_ASSOCIATION_ID: BigNumberField<JobRequisitionAssessment> = new BigNumberField('assessmentAssociationId', JobRequisitionAssessment, 'Edm.Int64');
  /**
   * Static representation of the [[assessmentPackageCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ASSESSMENT_PACKAGE_CODE: StringField<JobRequisitionAssessment> = new StringField('assessmentPackageCode', JobRequisitionAssessment, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<JobRequisitionAssessment> = new StringField('createdBy', JobRequisitionAssessment, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<JobRequisitionAssessment> = new DateField('createdDateTime', JobRequisitionAssessment, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[emailTemplateId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMAIL_TEMPLATE_ID: BigNumberField<JobRequisitionAssessment> = new BigNumberField('emailTemplateId', JobRequisitionAssessment, 'Edm.Int64');
  /**
   * Static representation of the [[jobReqId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_REQ_ID: BigNumberField<JobRequisitionAssessment> = new BigNumberField('jobReqId', JobRequisitionAssessment, 'Edm.Int64');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<JobRequisitionAssessment> = new StringField('lastModifiedBy', JobRequisitionAssessment, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<JobRequisitionAssessment> = new DateField('lastModifiedDateTime', JobRequisitionAssessment, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[vendorCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VENDOR_CODE: StringField<JobRequisitionAssessment> = new StringField('vendorCode', JobRequisitionAssessment, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<JobRequisitionAssessment, User> = new OneToOneLink('createdByNav', JobRequisitionAssessment, User);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<JobRequisitionAssessment, User> = new OneToOneLink('lastModifiedByNav', JobRequisitionAssessment, User);
  /**
   * All fields of the JobRequisitionAssessment entity.
   */
  export const _allFields: Array<BigNumberField<JobRequisitionAssessment> | StringField<JobRequisitionAssessment> | DateField<JobRequisitionAssessment> | OneToOneLink<JobRequisitionAssessment, User>> = [
    JobRequisitionAssessment.APP_STATUS_SET_ITEM_ID,
    JobRequisitionAssessment.ASSESSMENT_ASSOCIATION_ID,
    JobRequisitionAssessment.ASSESSMENT_PACKAGE_CODE,
    JobRequisitionAssessment.CREATED_BY,
    JobRequisitionAssessment.CREATED_DATE_TIME,
    JobRequisitionAssessment.EMAIL_TEMPLATE_ID,
    JobRequisitionAssessment.JOB_REQ_ID,
    JobRequisitionAssessment.LAST_MODIFIED_BY,
    JobRequisitionAssessment.LAST_MODIFIED_DATE_TIME,
    JobRequisitionAssessment.VENDOR_CODE,
    JobRequisitionAssessment.CREATED_BY_NAV,
    JobRequisitionAssessment.LAST_MODIFIED_BY_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<JobRequisitionAssessment> = new AllFields('*', JobRequisitionAssessment);
  /**
   * All key fields of the JobRequisitionAssessment entity.
   */
  export const _keyFields: Array<Selectable<JobRequisitionAssessment>> = [JobRequisitionAssessment.ASSESSMENT_ASSOCIATION_ID];
  /**
   * Mapping of all key field names to the respective static field property JobRequisitionAssessment.
   */
  export const _keys: { [keys: string]: Selectable<JobRequisitionAssessment> } = JobRequisitionAssessment._keyFields.reduce((acc: { [keys: string]: Selectable<JobRequisitionAssessment> }, field: Selectable<JobRequisitionAssessment>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
