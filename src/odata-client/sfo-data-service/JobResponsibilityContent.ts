/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { JobResponsibilityContentRequestBuilder } from './JobResponsibilityContentRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "JobResponsibilityContent" of service "SFOData".
 */
export class JobResponsibilityContent extends Entity implements JobResponsibilityContentType {
  /**
   * Technical entity name for JobResponsibilityContent.
   */
  static _entityName = 'JobResponsibilityContent';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for JobResponsibilityContent.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Job Profile_GUID.
   * Maximum length: 128.
   */
  jobProfileExternalCode!: string;
  /**
   * createdBy.
   * Maximum length: 255.
   * @nullable
   */
  createdBy?: string;
  /**
   * createdDate.
   * @nullable
   */
  createdDateTime?: Moment;
  /**
   * Job Responsibility.
   * Maximum length: 128.
   * @nullable
   */
  entity?: string;
  /**
   * externalCode.
   * Maximum length: 128.
   */
  externalCode!: string;
  /**
   * jobProfileId.
   * Maximum length: 255.
   * @nullable
   */
  jobProfileId?: string;
  /**
   * lastModifiedBy.
   * Maximum length: 255.
   * @nullable
   */
  lastModifiedBy?: string;
  /**
   * lastModifiedDate.
   * @nullable
   */
  lastModifiedDateTime?: Moment;
  /**
   * Record Status.
   * Maximum length: 255.
   * @nullable
   */
  mdfSystemRecordStatus?: string;
  /**
   * order.
   * @nullable
   */
  order?: BigNumber;
  /**
   * sectionId.
   * Maximum length: 255.
   * @nullable
   */
  sectionId?: string;
  /**
   * sectionType.
   * Maximum length: 255.
   * @nullable
   */
  sectionType?: string;
  /**
   * status.
   * Maximum length: 255.
   * @nullable
   */
  status?: string;
  /**
   * subModule.
   * Maximum length: 255.
   * @nullable
   */
  subModule?: string;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  createdByNav!: User;
  /**
   * One-to-one navigation property to the [[JobResponsibilityEntity]] entity.
   */
  entityNav!: JobResponsibilityEntity;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  lastModifiedByNav!: User;
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  mdfSystemRecordStatusNav!: MdfEnumValue;
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  statusNav!: MdfEnumValue;

  /**
   * Returns an entity builder to construct instances `JobResponsibilityContent`.
   * @returns A builder that constructs instances of entity type `JobResponsibilityContent`.
   */
  static builder(): EntityBuilderType<JobResponsibilityContent, JobResponsibilityContentTypeForceMandatory> {
    return Entity.entityBuilder(JobResponsibilityContent);
  }

  /**
   * Returns a request builder to construct requests for operations on the `JobResponsibilityContent` entity type.
   * @returns A `JobResponsibilityContent` request builder.
   */
  static requestBuilder(): JobResponsibilityContentRequestBuilder {
    return new JobResponsibilityContentRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobResponsibilityContent`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `JobResponsibilityContent`.
   */
  static customField(fieldName: string): CustomField<JobResponsibilityContent> {
    return Entity.customFieldSelector(fieldName, JobResponsibilityContent);
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
import { JobResponsibilityEntity, JobResponsibilityEntityType } from './JobResponsibilityEntity';
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';

export interface JobResponsibilityContentType {
  jobProfileExternalCode: string;
  createdBy?: string;
  createdDateTime?: Moment;
  entity?: string;
  externalCode: string;
  jobProfileId?: string;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  mdfSystemRecordStatus?: string;
  order?: BigNumber;
  sectionId?: string;
  sectionType?: string;
  status?: string;
  subModule?: string;
  createdByNav: UserType;
  entityNav: JobResponsibilityEntityType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  statusNav: MdfEnumValueType;
}

export interface JobResponsibilityContentTypeForceMandatory {
  jobProfileExternalCode: string;
  createdBy: string;
  createdDateTime: Moment;
  entity: string;
  externalCode: string;
  jobProfileId: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  mdfSystemRecordStatus: string;
  order: BigNumber;
  sectionId: string;
  sectionType: string;
  status: string;
  subModule: string;
  createdByNav: UserType;
  entityNav: JobResponsibilityEntityType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  statusNav: MdfEnumValueType;
}

export namespace JobResponsibilityContent {
  /**
   * Static representation of the [[jobProfileExternalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_PROFILE_EXTERNAL_CODE: StringField<JobResponsibilityContent> = new StringField('JobProfile_externalCode', JobResponsibilityContent, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<JobResponsibilityContent> = new StringField('createdBy', JobResponsibilityContent, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<JobResponsibilityContent> = new DateField('createdDateTime', JobResponsibilityContent, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[entity]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ENTITY: StringField<JobResponsibilityContent> = new StringField('entity', JobResponsibilityContent, 'Edm.String');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: StringField<JobResponsibilityContent> = new StringField('externalCode', JobResponsibilityContent, 'Edm.String');
  /**
   * Static representation of the [[jobProfileId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_PROFILE_ID: StringField<JobResponsibilityContent> = new StringField('jobProfileId', JobResponsibilityContent, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<JobResponsibilityContent> = new StringField('lastModifiedBy', JobResponsibilityContent, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<JobResponsibilityContent> = new DateField('lastModifiedDateTime', JobResponsibilityContent, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<JobResponsibilityContent> = new StringField('mdfSystemRecordStatus', JobResponsibilityContent, 'Edm.String');
  /**
   * Static representation of the [[order]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ORDER: BigNumberField<JobResponsibilityContent> = new BigNumberField('order', JobResponsibilityContent, 'Edm.Int64');
  /**
   * Static representation of the [[sectionId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SECTION_ID: StringField<JobResponsibilityContent> = new StringField('sectionId', JobResponsibilityContent, 'Edm.String');
  /**
   * Static representation of the [[sectionType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SECTION_TYPE: StringField<JobResponsibilityContent> = new StringField('sectionType', JobResponsibilityContent, 'Edm.String');
  /**
   * Static representation of the [[status]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS: StringField<JobResponsibilityContent> = new StringField('status', JobResponsibilityContent, 'Edm.String');
  /**
   * Static representation of the [[subModule]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUB_MODULE: StringField<JobResponsibilityContent> = new StringField('subModule', JobResponsibilityContent, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<JobResponsibilityContent, User> = new OneToOneLink('createdByNav', JobResponsibilityContent, User);
  /**
   * Static representation of the one-to-one navigation property [[entityNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ENTITY_NAV: OneToOneLink<JobResponsibilityContent, JobResponsibilityEntity> = new OneToOneLink('entityNav', JobResponsibilityContent, JobResponsibilityEntity);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<JobResponsibilityContent, User> = new OneToOneLink('lastModifiedByNav', JobResponsibilityContent, User);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<JobResponsibilityContent, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', JobResponsibilityContent, MdfEnumValue);
  /**
   * Static representation of the one-to-one navigation property [[statusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS_NAV: OneToOneLink<JobResponsibilityContent, MdfEnumValue> = new OneToOneLink('statusNav', JobResponsibilityContent, MdfEnumValue);
  /**
   * All fields of the JobResponsibilityContent entity.
   */
  export const _allFields: Array<StringField<JobResponsibilityContent> | DateField<JobResponsibilityContent> | BigNumberField<JobResponsibilityContent> | OneToOneLink<JobResponsibilityContent, User> | OneToOneLink<JobResponsibilityContent, JobResponsibilityEntity> | OneToOneLink<JobResponsibilityContent, MdfEnumValue>> = [
    JobResponsibilityContent.JOB_PROFILE_EXTERNAL_CODE,
    JobResponsibilityContent.CREATED_BY,
    JobResponsibilityContent.CREATED_DATE_TIME,
    JobResponsibilityContent.ENTITY,
    JobResponsibilityContent.EXTERNAL_CODE,
    JobResponsibilityContent.JOB_PROFILE_ID,
    JobResponsibilityContent.LAST_MODIFIED_BY,
    JobResponsibilityContent.LAST_MODIFIED_DATE_TIME,
    JobResponsibilityContent.MDF_SYSTEM_RECORD_STATUS,
    JobResponsibilityContent.ORDER,
    JobResponsibilityContent.SECTION_ID,
    JobResponsibilityContent.SECTION_TYPE,
    JobResponsibilityContent.STATUS,
    JobResponsibilityContent.SUB_MODULE,
    JobResponsibilityContent.CREATED_BY_NAV,
    JobResponsibilityContent.ENTITY_NAV,
    JobResponsibilityContent.LAST_MODIFIED_BY_NAV,
    JobResponsibilityContent.MDF_SYSTEM_RECORD_STATUS_NAV,
    JobResponsibilityContent.STATUS_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<JobResponsibilityContent> = new AllFields('*', JobResponsibilityContent);
  /**
   * All key fields of the JobResponsibilityContent entity.
   */
  export const _keyFields: Array<Selectable<JobResponsibilityContent>> = [JobResponsibilityContent.JOB_PROFILE_EXTERNAL_CODE, JobResponsibilityContent.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property JobResponsibilityContent.
   */
  export const _keys: { [keys: string]: Selectable<JobResponsibilityContent> } = JobResponsibilityContent._keyFields.reduce((acc: { [keys: string]: Selectable<JobResponsibilityContent> }, field: Selectable<JobResponsibilityContent>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
