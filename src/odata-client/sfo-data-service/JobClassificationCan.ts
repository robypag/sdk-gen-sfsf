/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { JobClassificationCanRequestBuilder } from './JobClassificationCanRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "JobClassificationCAN" of service "SFOData".
 */
export class JobClassificationCan extends Entity implements JobClassificationCanType {
  /**
   * Technical entity name for JobClassificationCan.
   */
  static _entityName = 'JobClassificationCAN';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for JobClassificationCan.
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
   * externalCode.
   */
  externalCode!: BigNumber;
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
   * Occupational Classification.
   * Maximum length: 255.
   * @nullable
   */
  occupationalClassification?: string;
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
   * Returns an entity builder to construct instances `JobClassificationCan`.
   * @returns A builder that constructs instances of entity type `JobClassificationCan`.
   */
  static builder(): EntityBuilderType<JobClassificationCan, JobClassificationCanTypeForceMandatory> {
    return Entity.entityBuilder(JobClassificationCan);
  }

  /**
   * Returns a request builder to construct requests for operations on the `JobClassificationCan` entity type.
   * @returns A `JobClassificationCan` request builder.
   */
  static requestBuilder(): JobClassificationCanRequestBuilder {
    return new JobClassificationCanRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobClassificationCan`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `JobClassificationCan`.
   */
  static customField(fieldName: string): CustomField<JobClassificationCan> {
    return Entity.customFieldSelector(fieldName, JobClassificationCan);
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

export interface JobClassificationCanType {
  jobClassificationCountryCountry: string;
  jobClassificationEffectiveStartDate: Moment;
  jobClassificationExternalCode: string;
  createdBy?: string;
  createdDateTime?: Moment;
  externalCode: BigNumber;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  mdfSystemRecordStatus?: string;
  occupationalClassification?: string;
  createdByNav: UserType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
}

export interface JobClassificationCanTypeForceMandatory {
  jobClassificationCountryCountry: string;
  jobClassificationEffectiveStartDate: Moment;
  jobClassificationExternalCode: string;
  createdBy: string;
  createdDateTime: Moment;
  externalCode: BigNumber;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  mdfSystemRecordStatus: string;
  occupationalClassification: string;
  createdByNav: UserType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
}

export namespace JobClassificationCan {
  /**
   * Static representation of the [[jobClassificationCountryCountry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_CLASSIFICATION_COUNTRY_COUNTRY: StringField<JobClassificationCan> = new StringField('JobClassificationCountry_country', JobClassificationCan, 'Edm.String');
  /**
   * Static representation of the [[jobClassificationEffectiveStartDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_CLASSIFICATION_EFFECTIVE_START_DATE: DateField<JobClassificationCan> = new DateField('JobClassification_effectiveStartDate', JobClassificationCan, 'Edm.DateTime');
  /**
   * Static representation of the [[jobClassificationExternalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_CLASSIFICATION_EXTERNAL_CODE: StringField<JobClassificationCan> = new StringField('JobClassification_externalCode', JobClassificationCan, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<JobClassificationCan> = new StringField('createdBy', JobClassificationCan, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<JobClassificationCan> = new DateField('createdDateTime', JobClassificationCan, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: BigNumberField<JobClassificationCan> = new BigNumberField('externalCode', JobClassificationCan, 'Edm.Int64');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<JobClassificationCan> = new StringField('lastModifiedBy', JobClassificationCan, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<JobClassificationCan> = new DateField('lastModifiedDateTime', JobClassificationCan, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<JobClassificationCan> = new StringField('mdfSystemRecordStatus', JobClassificationCan, 'Edm.String');
  /**
   * Static representation of the [[occupationalClassification]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OCCUPATIONAL_CLASSIFICATION: StringField<JobClassificationCan> = new StringField('occupationalClassification', JobClassificationCan, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<JobClassificationCan, User> = new OneToOneLink('createdByNav', JobClassificationCan, User);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<JobClassificationCan, User> = new OneToOneLink('lastModifiedByNav', JobClassificationCan, User);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<JobClassificationCan, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', JobClassificationCan, MdfEnumValue);
  /**
   * All fields of the JobClassificationCan entity.
   */
  export const _allFields: Array<StringField<JobClassificationCan> | DateField<JobClassificationCan> | BigNumberField<JobClassificationCan> | OneToOneLink<JobClassificationCan, User> | OneToOneLink<JobClassificationCan, MdfEnumValue>> = [
    JobClassificationCan.JOB_CLASSIFICATION_COUNTRY_COUNTRY,
    JobClassificationCan.JOB_CLASSIFICATION_EFFECTIVE_START_DATE,
    JobClassificationCan.JOB_CLASSIFICATION_EXTERNAL_CODE,
    JobClassificationCan.CREATED_BY,
    JobClassificationCan.CREATED_DATE_TIME,
    JobClassificationCan.EXTERNAL_CODE,
    JobClassificationCan.LAST_MODIFIED_BY,
    JobClassificationCan.LAST_MODIFIED_DATE_TIME,
    JobClassificationCan.MDF_SYSTEM_RECORD_STATUS,
    JobClassificationCan.OCCUPATIONAL_CLASSIFICATION,
    JobClassificationCan.CREATED_BY_NAV,
    JobClassificationCan.LAST_MODIFIED_BY_NAV,
    JobClassificationCan.MDF_SYSTEM_RECORD_STATUS_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<JobClassificationCan> = new AllFields('*', JobClassificationCan);
  /**
   * All key fields of the JobClassificationCan entity.
   */
  export const _keyFields: Array<Selectable<JobClassificationCan>> = [JobClassificationCan.JOB_CLASSIFICATION_COUNTRY_COUNTRY, JobClassificationCan.JOB_CLASSIFICATION_EFFECTIVE_START_DATE, JobClassificationCan.JOB_CLASSIFICATION_EXTERNAL_CODE, JobClassificationCan.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property JobClassificationCan.
   */
  export const _keys: { [keys: string]: Selectable<JobClassificationCan> } = JobClassificationCan._keyFields.reduce((acc: { [keys: string]: Selectable<JobClassificationCan> }, field: Selectable<JobClassificationCan>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
