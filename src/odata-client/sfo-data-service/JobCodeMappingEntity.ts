/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { JobCodeMappingEntityRequestBuilder } from './JobCodeMappingEntityRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "JobCodeMappingEntity" of service "SFOData".
 */
export class JobCodeMappingEntity extends Entity implements JobCodeMappingEntityType {
  /**
   * Technical entity name for JobCodeMappingEntity.
   */
  static _entityName = 'JobCodeMappingEntity';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for JobCodeMappingEntity.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Role_GUID.
   * Maximum length: 128.
   */
  roleEntityExternalCode!: string;
  /**
   * createdBy.
   * Maximum length: 255.
   * @nullable
   */
  createdBy?: string;
  /**
   * Added.
   * @nullable
   */
  createdDateTime?: Moment;
  /**
   * GUID.
   * Maximum length: 128.
   */
  externalCode!: string;
  /**
   * Job Code.
   * Maximum length: 255.
   * @nullable
   */
  jobCode?: string;
  /**
   * lastModifiedBy.
   * Maximum length: 255.
   * @nullable
   */
  lastModifiedBy?: string;
  /**
   * Last Modified.
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
   * Status.
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
   * Type.
   * Maximum length: 255.
   * @nullable
   */
  type?: string;
  /**
   * Usage.
   * @nullable
   */
  usage?: BigNumber;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  createdByNav!: User;
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
   * Returns an entity builder to construct instances `JobCodeMappingEntity`.
   * @returns A builder that constructs instances of entity type `JobCodeMappingEntity`.
   */
  static builder(): EntityBuilderType<JobCodeMappingEntity, JobCodeMappingEntityTypeForceMandatory> {
    return Entity.entityBuilder(JobCodeMappingEntity);
  }

  /**
   * Returns a request builder to construct requests for operations on the `JobCodeMappingEntity` entity type.
   * @returns A `JobCodeMappingEntity` request builder.
   */
  static requestBuilder(): JobCodeMappingEntityRequestBuilder {
    return new JobCodeMappingEntityRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobCodeMappingEntity`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `JobCodeMappingEntity`.
   */
  static customField(fieldName: string): CustomField<JobCodeMappingEntity> {
    return Entity.customFieldSelector(fieldName, JobCodeMappingEntity);
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
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';

export interface JobCodeMappingEntityType {
  roleEntityExternalCode: string;
  createdBy?: string;
  createdDateTime?: Moment;
  externalCode: string;
  jobCode?: string;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  mdfSystemRecordStatus?: string;
  status?: string;
  subModule?: string;
  type?: string;
  usage?: BigNumber;
  createdByNav: UserType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  statusNav: MdfEnumValueType;
}

export interface JobCodeMappingEntityTypeForceMandatory {
  roleEntityExternalCode: string;
  createdBy: string;
  createdDateTime: Moment;
  externalCode: string;
  jobCode: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  mdfSystemRecordStatus: string;
  status: string;
  subModule: string;
  type: string;
  usage: BigNumber;
  createdByNav: UserType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  statusNav: MdfEnumValueType;
}

export namespace JobCodeMappingEntity {
  /**
   * Static representation of the [[roleEntityExternalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ROLE_ENTITY_EXTERNAL_CODE: StringField<JobCodeMappingEntity> = new StringField('RoleEntity_externalCode', JobCodeMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<JobCodeMappingEntity> = new StringField('createdBy', JobCodeMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<JobCodeMappingEntity> = new DateField('createdDateTime', JobCodeMappingEntity, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: StringField<JobCodeMappingEntity> = new StringField('externalCode', JobCodeMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[jobCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_CODE: StringField<JobCodeMappingEntity> = new StringField('jobCode', JobCodeMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<JobCodeMappingEntity> = new StringField('lastModifiedBy', JobCodeMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<JobCodeMappingEntity> = new DateField('lastModifiedDateTime', JobCodeMappingEntity, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<JobCodeMappingEntity> = new StringField('mdfSystemRecordStatus', JobCodeMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[status]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS: StringField<JobCodeMappingEntity> = new StringField('status', JobCodeMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[subModule]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUB_MODULE: StringField<JobCodeMappingEntity> = new StringField('subModule', JobCodeMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[type]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TYPE: StringField<JobCodeMappingEntity> = new StringField('type', JobCodeMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[usage]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USAGE: BigNumberField<JobCodeMappingEntity> = new BigNumberField('usage', JobCodeMappingEntity, 'Edm.Int64');
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<JobCodeMappingEntity, User> = new OneToOneLink('createdByNav', JobCodeMappingEntity, User);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<JobCodeMappingEntity, User> = new OneToOneLink('lastModifiedByNav', JobCodeMappingEntity, User);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<JobCodeMappingEntity, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', JobCodeMappingEntity, MdfEnumValue);
  /**
   * Static representation of the one-to-one navigation property [[statusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS_NAV: OneToOneLink<JobCodeMappingEntity, MdfEnumValue> = new OneToOneLink('statusNav', JobCodeMappingEntity, MdfEnumValue);
  /**
   * All fields of the JobCodeMappingEntity entity.
   */
  export const _allFields: Array<StringField<JobCodeMappingEntity> | DateField<JobCodeMappingEntity> | BigNumberField<JobCodeMappingEntity> | OneToOneLink<JobCodeMappingEntity, User> | OneToOneLink<JobCodeMappingEntity, MdfEnumValue>> = [
    JobCodeMappingEntity.ROLE_ENTITY_EXTERNAL_CODE,
    JobCodeMappingEntity.CREATED_BY,
    JobCodeMappingEntity.CREATED_DATE_TIME,
    JobCodeMappingEntity.EXTERNAL_CODE,
    JobCodeMappingEntity.JOB_CODE,
    JobCodeMappingEntity.LAST_MODIFIED_BY,
    JobCodeMappingEntity.LAST_MODIFIED_DATE_TIME,
    JobCodeMappingEntity.MDF_SYSTEM_RECORD_STATUS,
    JobCodeMappingEntity.STATUS,
    JobCodeMappingEntity.SUB_MODULE,
    JobCodeMappingEntity.TYPE,
    JobCodeMappingEntity.USAGE,
    JobCodeMappingEntity.CREATED_BY_NAV,
    JobCodeMappingEntity.LAST_MODIFIED_BY_NAV,
    JobCodeMappingEntity.MDF_SYSTEM_RECORD_STATUS_NAV,
    JobCodeMappingEntity.STATUS_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<JobCodeMappingEntity> = new AllFields('*', JobCodeMappingEntity);
  /**
   * All key fields of the JobCodeMappingEntity entity.
   */
  export const _keyFields: Array<Selectable<JobCodeMappingEntity>> = [JobCodeMappingEntity.ROLE_ENTITY_EXTERNAL_CODE, JobCodeMappingEntity.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property JobCodeMappingEntity.
   */
  export const _keys: { [keys: string]: Selectable<JobCodeMappingEntity> } = JobCodeMappingEntity._keyFields.reduce((acc: { [keys: string]: Selectable<JobCodeMappingEntity> }, field: Selectable<JobCodeMappingEntity>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
