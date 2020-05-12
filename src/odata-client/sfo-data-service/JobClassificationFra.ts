/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { JobClassificationFraRequestBuilder } from './JobClassificationFraRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "JobClassificationFRA" of service "SFOData".
 */
export class JobClassificationFra extends Entity implements JobClassificationFraType {
  /**
   * Technical entity name for JobClassificationFra.
   */
  static _entityName = 'JobClassificationFRA';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for JobClassificationFra.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Job Classification Country/Region_Country/Region.
   * Maximum length: 128.
   */
  jobClassificationCountryCountry!: string;
  /**
   * Job Classification _Effective as of.
   */
  jobClassificationEffectiveStartDate!: Moment;
  /**
   * Job Classification _Job Code.
   * Maximum length: 32.
   */
  jobClassificationExternalCode!: string;
  /**
   * createdBy.
   * Maximum length: 100.
   * @nullable
   */
  createdBy?: string;
  /**
   * createdDate.
   * @nullable
   */
  createdDateTime?: Moment;
  /**
   * PCScode.
   * Maximum length: 255.
   * @nullable
   */
  custPcScode?: string;
  /**
   * Employment Category.
   * @nullable
   */
  employeeCategory?: BigNumber;
  /**
   * externalCode.
   */
  externalCode!: BigNumber;
  /**
   * Insee Code.
   * Maximum length: 32.
   * @nullable
   */
  inseeCode?: string;
  /**
   * lastModifiedBy.
   * Maximum length: 100.
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
   * Returns an entity builder to construct instances `JobClassificationFra`.
   * @returns A builder that constructs instances of entity type `JobClassificationFra`.
   */
  static builder(): EntityBuilderType<JobClassificationFra, JobClassificationFraTypeForceMandatory> {
    return Entity.entityBuilder(JobClassificationFra);
  }

  /**
   * Returns a request builder to construct requests for operations on the `JobClassificationFra` entity type.
   * @returns A `JobClassificationFra` request builder.
   */
  static requestBuilder(): JobClassificationFraRequestBuilder {
    return new JobClassificationFraRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobClassificationFra`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `JobClassificationFra`.
   */
  static customField(fieldName: string): CustomField<JobClassificationFra> {
    return Entity.customFieldSelector(fieldName, JobClassificationFra);
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

export interface JobClassificationFraType {
  jobClassificationCountryCountry: string;
  jobClassificationEffectiveStartDate: Moment;
  jobClassificationExternalCode: string;
  createdBy?: string;
  createdDateTime?: Moment;
  custPcScode?: string;
  employeeCategory?: BigNumber;
  externalCode: BigNumber;
  inseeCode?: string;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  mdfSystemRecordStatus?: string;
  createdByNav: UserType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
}

export interface JobClassificationFraTypeForceMandatory {
  jobClassificationCountryCountry: string;
  jobClassificationEffectiveStartDate: Moment;
  jobClassificationExternalCode: string;
  createdBy: string;
  createdDateTime: Moment;
  custPcScode: string;
  employeeCategory: BigNumber;
  externalCode: BigNumber;
  inseeCode: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  mdfSystemRecordStatus: string;
  createdByNav: UserType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
}

export namespace JobClassificationFra {
  /**
   * Static representation of the [[jobClassificationCountryCountry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_CLASSIFICATION_COUNTRY_COUNTRY: StringField<JobClassificationFra> = new StringField('JobClassificationCountry_country', JobClassificationFra, 'Edm.String');
  /**
   * Static representation of the [[jobClassificationEffectiveStartDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_CLASSIFICATION_EFFECTIVE_START_DATE: DateField<JobClassificationFra> = new DateField('JobClassification_effectiveStartDate', JobClassificationFra, 'Edm.DateTime');
  /**
   * Static representation of the [[jobClassificationExternalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_CLASSIFICATION_EXTERNAL_CODE: StringField<JobClassificationFra> = new StringField('JobClassification_externalCode', JobClassificationFra, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<JobClassificationFra> = new StringField('createdBy', JobClassificationFra, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<JobClassificationFra> = new DateField('createdDateTime', JobClassificationFra, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[custPcScode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUST_PC_SCODE: StringField<JobClassificationFra> = new StringField('cust_PCScode', JobClassificationFra, 'Edm.String');
  /**
   * Static representation of the [[employeeCategory]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMPLOYEE_CATEGORY: BigNumberField<JobClassificationFra> = new BigNumberField('employeeCategory', JobClassificationFra, 'Edm.Int64');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: BigNumberField<JobClassificationFra> = new BigNumberField('externalCode', JobClassificationFra, 'Edm.Int64');
  /**
   * Static representation of the [[inseeCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INSEE_CODE: StringField<JobClassificationFra> = new StringField('inseeCode', JobClassificationFra, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<JobClassificationFra> = new StringField('lastModifiedBy', JobClassificationFra, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<JobClassificationFra> = new DateField('lastModifiedDateTime', JobClassificationFra, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<JobClassificationFra> = new StringField('mdfSystemRecordStatus', JobClassificationFra, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<JobClassificationFra, User> = new OneToOneLink('createdByNav', JobClassificationFra, User);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<JobClassificationFra, User> = new OneToOneLink('lastModifiedByNav', JobClassificationFra, User);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<JobClassificationFra, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', JobClassificationFra, MdfEnumValue);
  /**
   * All fields of the JobClassificationFra entity.
   */
  export const _allFields: Array<StringField<JobClassificationFra> | DateField<JobClassificationFra> | BigNumberField<JobClassificationFra> | OneToOneLink<JobClassificationFra, User> | OneToOneLink<JobClassificationFra, MdfEnumValue>> = [
    JobClassificationFra.JOB_CLASSIFICATION_COUNTRY_COUNTRY,
    JobClassificationFra.JOB_CLASSIFICATION_EFFECTIVE_START_DATE,
    JobClassificationFra.JOB_CLASSIFICATION_EXTERNAL_CODE,
    JobClassificationFra.CREATED_BY,
    JobClassificationFra.CREATED_DATE_TIME,
    JobClassificationFra.CUST_PC_SCODE,
    JobClassificationFra.EMPLOYEE_CATEGORY,
    JobClassificationFra.EXTERNAL_CODE,
    JobClassificationFra.INSEE_CODE,
    JobClassificationFra.LAST_MODIFIED_BY,
    JobClassificationFra.LAST_MODIFIED_DATE_TIME,
    JobClassificationFra.MDF_SYSTEM_RECORD_STATUS,
    JobClassificationFra.CREATED_BY_NAV,
    JobClassificationFra.LAST_MODIFIED_BY_NAV,
    JobClassificationFra.MDF_SYSTEM_RECORD_STATUS_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<JobClassificationFra> = new AllFields('*', JobClassificationFra);
  /**
   * All key fields of the JobClassificationFra entity.
   */
  export const _keyFields: Array<Selectable<JobClassificationFra>> = [JobClassificationFra.JOB_CLASSIFICATION_COUNTRY_COUNTRY, JobClassificationFra.JOB_CLASSIFICATION_EFFECTIVE_START_DATE, JobClassificationFra.JOB_CLASSIFICATION_EXTERNAL_CODE, JobClassificationFra.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property JobClassificationFra.
   */
  export const _keys: { [keys: string]: Selectable<JobClassificationFra> } = JobClassificationFra._keyFields.reduce((acc: { [keys: string]: Selectable<JobClassificationFra> }, field: Selectable<JobClassificationFra>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
