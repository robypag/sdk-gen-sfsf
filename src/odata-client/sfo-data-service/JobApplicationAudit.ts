/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { JobApplicationAuditRequestBuilder } from './JobApplicationAuditRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, NumberField, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "JobApplicationAudit" of service "SFOData".
 */
export class JobApplicationAudit extends Entity implements JobApplicationAuditType {
  /**
   * Technical entity name for JobApplicationAudit.
   */
  static _entityName = 'JobApplicationAudit';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for JobApplicationAudit.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * changedBy.
   * @nullable
   */
  changedBy?: string;
  /**
   * Clob Field Reference.
   * @nullable
   */
  clobFieldRef?: string;
  /**
   * Clob New Value.
   * @nullable
   */
  clobNewValueXml?: string;
  /**
   * Clob Old Value.
   * @nullable
   */
  clobOldValueXml?: string;
  /**
   * Date New Value.
   * @nullable
   */
  dateNewValue?: Moment;
  /**
   * Date Old value.
   * @nullable
   */
  dateOldValue?: Moment;
  /**
   * Field Id.
   * @nullable
   */
  fieldId?: string;
  /**
   * Field Order Pos.
   */
  fieldOrderPos!: BigNumber;
  /**
   * Field type.
   * @nullable
   */
  fieldType?: string;
  /**
   * Job Post End Date.
   * @nullable
   */
  jobPostEndDate?: Moment;
  /**
   * Job Post Start Date.
   * @nullable
   */
  jobPostStartDate?: Moment;
  /**
   * Job Posting Id.
   * @nullable
   */
  jobPostingId?: BigNumber;
  /**
   * Last Modified By.
   * @nullable
   */
  lastModifiedBy?: string;
  /**
   * Last Modified Date.
   * @nullable
   */
  lastModifiedDate?: Moment;
  /**
   * Last Modified External Id.
   * @nullable
   */
  lastModifiedExtId?: BigNumber;
  /**
   * Merge From.
   * @nullable
   */
  mergedFrom?: string;
  /**
   * New Value.
   * @nullable
   */
  newValue?: string;
  /**
   * Old Value.
   * @nullable
   */
  oldValue?: string;
  /**
   * Reference Type.
   * @nullable
   */
  refType?: string;
  /**
   * Rev Number.
   */
  revNumber!: BigNumber;
  /**
   * RevType.
   * @nullable
   */
  revType?: number;
  /**
   * Source.
   * @nullable
   */
  source?: string;
  /**
   * One-to-one navigation property to the [[JobApplication]] entity.
   */
  jobApplication!: JobApplication;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  lastModifiedByNav!: User;

  /**
   * Returns an entity builder to construct instances `JobApplicationAudit`.
   * @returns A builder that constructs instances of entity type `JobApplicationAudit`.
   */
  static builder(): EntityBuilderType<JobApplicationAudit, JobApplicationAuditTypeForceMandatory> {
    return Entity.entityBuilder(JobApplicationAudit);
  }

  /**
   * Returns a request builder to construct requests for operations on the `JobApplicationAudit` entity type.
   * @returns A `JobApplicationAudit` request builder.
   */
  static requestBuilder(): JobApplicationAuditRequestBuilder {
    return new JobApplicationAuditRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobApplicationAudit`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `JobApplicationAudit`.
   */
  static customField(fieldName: string): CustomField<JobApplicationAudit> {
    return Entity.customFieldSelector(fieldName, JobApplicationAudit);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { JobApplication, JobApplicationType } from './JobApplication';
import { User, UserType } from './User';

export interface JobApplicationAuditType {
  changedBy?: string;
  clobFieldRef?: string;
  clobNewValueXml?: string;
  clobOldValueXml?: string;
  dateNewValue?: Moment;
  dateOldValue?: Moment;
  fieldId?: string;
  fieldOrderPos: BigNumber;
  fieldType?: string;
  jobPostEndDate?: Moment;
  jobPostStartDate?: Moment;
  jobPostingId?: BigNumber;
  lastModifiedBy?: string;
  lastModifiedDate?: Moment;
  lastModifiedExtId?: BigNumber;
  mergedFrom?: string;
  newValue?: string;
  oldValue?: string;
  refType?: string;
  revNumber: BigNumber;
  revType?: number;
  source?: string;
  jobApplication: JobApplicationType;
  lastModifiedByNav: UserType;
}

export interface JobApplicationAuditTypeForceMandatory {
  changedBy: string;
  clobFieldRef: string;
  clobNewValueXml: string;
  clobOldValueXml: string;
  dateNewValue: Moment;
  dateOldValue: Moment;
  fieldId: string;
  fieldOrderPos: BigNumber;
  fieldType: string;
  jobPostEndDate: Moment;
  jobPostStartDate: Moment;
  jobPostingId: BigNumber;
  lastModifiedBy: string;
  lastModifiedDate: Moment;
  lastModifiedExtId: BigNumber;
  mergedFrom: string;
  newValue: string;
  oldValue: string;
  refType: string;
  revNumber: BigNumber;
  revType: number;
  source: string;
  jobApplication: JobApplicationType;
  lastModifiedByNav: UserType;
}

export namespace JobApplicationAudit {
  /**
   * Static representation of the [[changedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CHANGED_BY: StringField<JobApplicationAudit> = new StringField('changedBy', JobApplicationAudit, 'Edm.String');
  /**
   * Static representation of the [[clobFieldRef]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CLOB_FIELD_REF: StringField<JobApplicationAudit> = new StringField('clobFieldRef', JobApplicationAudit, 'Edm.String');
  /**
   * Static representation of the [[clobNewValueXml]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CLOB_NEW_VALUE_XML: StringField<JobApplicationAudit> = new StringField('clobNewValueXML', JobApplicationAudit, 'Edm.String');
  /**
   * Static representation of the [[clobOldValueXml]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CLOB_OLD_VALUE_XML: StringField<JobApplicationAudit> = new StringField('clobOldValueXML', JobApplicationAudit, 'Edm.String');
  /**
   * Static representation of the [[dateNewValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DATE_NEW_VALUE: DateField<JobApplicationAudit> = new DateField('dateNewValue', JobApplicationAudit, 'Edm.DateTime');
  /**
   * Static representation of the [[dateOldValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DATE_OLD_VALUE: DateField<JobApplicationAudit> = new DateField('dateOldValue', JobApplicationAudit, 'Edm.DateTime');
  /**
   * Static representation of the [[fieldId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FIELD_ID: StringField<JobApplicationAudit> = new StringField('fieldId', JobApplicationAudit, 'Edm.String');
  /**
   * Static representation of the [[fieldOrderPos]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FIELD_ORDER_POS: BigNumberField<JobApplicationAudit> = new BigNumberField('fieldOrderPos', JobApplicationAudit, 'Edm.Int64');
  /**
   * Static representation of the [[fieldType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FIELD_TYPE: StringField<JobApplicationAudit> = new StringField('fieldType', JobApplicationAudit, 'Edm.String');
  /**
   * Static representation of the [[jobPostEndDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_POST_END_DATE: DateField<JobApplicationAudit> = new DateField('jobPostEndDate', JobApplicationAudit, 'Edm.DateTime');
  /**
   * Static representation of the [[jobPostStartDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_POST_START_DATE: DateField<JobApplicationAudit> = new DateField('jobPostStartDate', JobApplicationAudit, 'Edm.DateTime');
  /**
   * Static representation of the [[jobPostingId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_POSTING_ID: BigNumberField<JobApplicationAudit> = new BigNumberField('jobPostingId', JobApplicationAudit, 'Edm.Int64');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<JobApplicationAudit> = new StringField('lastModifiedBy', JobApplicationAudit, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE: DateField<JobApplicationAudit> = new DateField('lastModifiedDate', JobApplicationAudit, 'Edm.DateTime');
  /**
   * Static representation of the [[lastModifiedExtId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_EXT_ID: BigNumberField<JobApplicationAudit> = new BigNumberField('lastModifiedExtId', JobApplicationAudit, 'Edm.Int64');
  /**
   * Static representation of the [[mergedFrom]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MERGED_FROM: StringField<JobApplicationAudit> = new StringField('mergedFrom', JobApplicationAudit, 'Edm.String');
  /**
   * Static representation of the [[newValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NEW_VALUE: StringField<JobApplicationAudit> = new StringField('newValue', JobApplicationAudit, 'Edm.String');
  /**
   * Static representation of the [[oldValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OLD_VALUE: StringField<JobApplicationAudit> = new StringField('oldValue', JobApplicationAudit, 'Edm.String');
  /**
   * Static representation of the [[refType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REF_TYPE: StringField<JobApplicationAudit> = new StringField('refType', JobApplicationAudit, 'Edm.String');
  /**
   * Static representation of the [[revNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REV_NUMBER: BigNumberField<JobApplicationAudit> = new BigNumberField('revNumber', JobApplicationAudit, 'Edm.Int64');
  /**
   * Static representation of the [[revType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REV_TYPE: NumberField<JobApplicationAudit> = new NumberField('revType', JobApplicationAudit, 'Edm.Int32');
  /**
   * Static representation of the [[source]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SOURCE: StringField<JobApplicationAudit> = new StringField('source', JobApplicationAudit, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[jobApplication]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_APPLICATION: OneToOneLink<JobApplicationAudit, JobApplication> = new OneToOneLink('jobApplication', JobApplicationAudit, JobApplication);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<JobApplicationAudit, User> = new OneToOneLink('lastModifiedByNav', JobApplicationAudit, User);
  /**
   * All fields of the JobApplicationAudit entity.
   */
  export const _allFields: Array<StringField<JobApplicationAudit> | DateField<JobApplicationAudit> | BigNumberField<JobApplicationAudit> | NumberField<JobApplicationAudit> | OneToOneLink<JobApplicationAudit, JobApplication> | OneToOneLink<JobApplicationAudit, User>> = [
    JobApplicationAudit.CHANGED_BY,
    JobApplicationAudit.CLOB_FIELD_REF,
    JobApplicationAudit.CLOB_NEW_VALUE_XML,
    JobApplicationAudit.CLOB_OLD_VALUE_XML,
    JobApplicationAudit.DATE_NEW_VALUE,
    JobApplicationAudit.DATE_OLD_VALUE,
    JobApplicationAudit.FIELD_ID,
    JobApplicationAudit.FIELD_ORDER_POS,
    JobApplicationAudit.FIELD_TYPE,
    JobApplicationAudit.JOB_POST_END_DATE,
    JobApplicationAudit.JOB_POST_START_DATE,
    JobApplicationAudit.JOB_POSTING_ID,
    JobApplicationAudit.LAST_MODIFIED_BY,
    JobApplicationAudit.LAST_MODIFIED_DATE,
    JobApplicationAudit.LAST_MODIFIED_EXT_ID,
    JobApplicationAudit.MERGED_FROM,
    JobApplicationAudit.NEW_VALUE,
    JobApplicationAudit.OLD_VALUE,
    JobApplicationAudit.REF_TYPE,
    JobApplicationAudit.REV_NUMBER,
    JobApplicationAudit.REV_TYPE,
    JobApplicationAudit.SOURCE,
    JobApplicationAudit.JOB_APPLICATION,
    JobApplicationAudit.LAST_MODIFIED_BY_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<JobApplicationAudit> = new AllFields('*', JobApplicationAudit);
  /**
   * All key fields of the JobApplicationAudit entity.
   */
  export const _keyFields: Array<Selectable<JobApplicationAudit>> = [JobApplicationAudit.FIELD_ORDER_POS, JobApplicationAudit.REV_NUMBER];
  /**
   * Mapping of all key field names to the respective static field property JobApplicationAudit.
   */
  export const _keys: { [keys: string]: Selectable<JobApplicationAudit> } = JobApplicationAudit._keyFields.reduce((acc: { [keys: string]: Selectable<JobApplicationAudit> }, field: Selectable<JobApplicationAudit>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
