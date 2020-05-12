/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { JobClassificationAusRequestBuilder } from './JobClassificationAusRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "JobClassificationAUS" of service "SFOData".
 */
export class JobClassificationAus extends Entity implements JobClassificationAusType {
  /**
   * Technical entity name for JobClassificationAus.
   */
  static _entityName = 'JobClassificationAUS';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for JobClassificationAus.
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
   * ASCO Code.
   * Maximum length: 32.
   * @nullable
   */
  ascoCode?: string;
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
   * Returns an entity builder to construct instances `JobClassificationAus`.
   * @returns A builder that constructs instances of entity type `JobClassificationAus`.
   */
  static builder(): EntityBuilderType<JobClassificationAus, JobClassificationAusTypeForceMandatory> {
    return Entity.entityBuilder(JobClassificationAus);
  }

  /**
   * Returns a request builder to construct requests for operations on the `JobClassificationAus` entity type.
   * @returns A `JobClassificationAus` request builder.
   */
  static requestBuilder(): JobClassificationAusRequestBuilder {
    return new JobClassificationAusRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobClassificationAus`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `JobClassificationAus`.
   */
  static customField(fieldName: string): CustomField<JobClassificationAus> {
    return Entity.customFieldSelector(fieldName, JobClassificationAus);
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

export interface JobClassificationAusType {
  jobClassificationCountryCountry: string;
  jobClassificationEffectiveStartDate: Moment;
  jobClassificationExternalCode: string;
  ascoCode?: string;
  createdBy?: string;
  createdDateTime?: Moment;
  externalCode: BigNumber;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  mdfSystemRecordStatus?: string;
  createdByNav: UserType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
}

export interface JobClassificationAusTypeForceMandatory {
  jobClassificationCountryCountry: string;
  jobClassificationEffectiveStartDate: Moment;
  jobClassificationExternalCode: string;
  ascoCode: string;
  createdBy: string;
  createdDateTime: Moment;
  externalCode: BigNumber;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  mdfSystemRecordStatus: string;
  createdByNav: UserType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
}

export namespace JobClassificationAus {
  /**
   * Static representation of the [[jobClassificationCountryCountry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_CLASSIFICATION_COUNTRY_COUNTRY: StringField<JobClassificationAus> = new StringField('JobClassificationCountry_country', JobClassificationAus, 'Edm.String');
  /**
   * Static representation of the [[jobClassificationEffectiveStartDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_CLASSIFICATION_EFFECTIVE_START_DATE: DateField<JobClassificationAus> = new DateField('JobClassification_effectiveStartDate', JobClassificationAus, 'Edm.DateTime');
  /**
   * Static representation of the [[jobClassificationExternalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_CLASSIFICATION_EXTERNAL_CODE: StringField<JobClassificationAus> = new StringField('JobClassification_externalCode', JobClassificationAus, 'Edm.String');
  /**
   * Static representation of the [[ascoCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ASCO_CODE: StringField<JobClassificationAus> = new StringField('ascoCode', JobClassificationAus, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<JobClassificationAus> = new StringField('createdBy', JobClassificationAus, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<JobClassificationAus> = new DateField('createdDateTime', JobClassificationAus, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: BigNumberField<JobClassificationAus> = new BigNumberField('externalCode', JobClassificationAus, 'Edm.Int64');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<JobClassificationAus> = new StringField('lastModifiedBy', JobClassificationAus, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<JobClassificationAus> = new DateField('lastModifiedDateTime', JobClassificationAus, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<JobClassificationAus> = new StringField('mdfSystemRecordStatus', JobClassificationAus, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<JobClassificationAus, User> = new OneToOneLink('createdByNav', JobClassificationAus, User);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<JobClassificationAus, User> = new OneToOneLink('lastModifiedByNav', JobClassificationAus, User);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<JobClassificationAus, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', JobClassificationAus, MdfEnumValue);
  /**
   * All fields of the JobClassificationAus entity.
   */
  export const _allFields: Array<StringField<JobClassificationAus> | DateField<JobClassificationAus> | BigNumberField<JobClassificationAus> | OneToOneLink<JobClassificationAus, User> | OneToOneLink<JobClassificationAus, MdfEnumValue>> = [
    JobClassificationAus.JOB_CLASSIFICATION_COUNTRY_COUNTRY,
    JobClassificationAus.JOB_CLASSIFICATION_EFFECTIVE_START_DATE,
    JobClassificationAus.JOB_CLASSIFICATION_EXTERNAL_CODE,
    JobClassificationAus.ASCO_CODE,
    JobClassificationAus.CREATED_BY,
    JobClassificationAus.CREATED_DATE_TIME,
    JobClassificationAus.EXTERNAL_CODE,
    JobClassificationAus.LAST_MODIFIED_BY,
    JobClassificationAus.LAST_MODIFIED_DATE_TIME,
    JobClassificationAus.MDF_SYSTEM_RECORD_STATUS,
    JobClassificationAus.CREATED_BY_NAV,
    JobClassificationAus.LAST_MODIFIED_BY_NAV,
    JobClassificationAus.MDF_SYSTEM_RECORD_STATUS_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<JobClassificationAus> = new AllFields('*', JobClassificationAus);
  /**
   * All key fields of the JobClassificationAus entity.
   */
  export const _keyFields: Array<Selectable<JobClassificationAus>> = [JobClassificationAus.JOB_CLASSIFICATION_COUNTRY_COUNTRY, JobClassificationAus.JOB_CLASSIFICATION_EFFECTIVE_START_DATE, JobClassificationAus.JOB_CLASSIFICATION_EXTERNAL_CODE, JobClassificationAus.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property JobClassificationAus.
   */
  export const _keys: { [keys: string]: Selectable<JobClassificationAus> } = JobClassificationAus._keyFields.reduce((acc: { [keys: string]: Selectable<JobClassificationAus> }, field: Selectable<JobClassificationAus>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
