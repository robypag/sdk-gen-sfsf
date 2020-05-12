/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { JobClassificationCountryRequestBuilder } from './JobClassificationCountryRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "JobClassificationCountry" of service "SFOData".
 */
export class JobClassificationCountry extends Entity implements JobClassificationCountryType {
  /**
   * Technical entity name for JobClassificationCountry.
   */
  static _entityName = 'JobClassificationCountry';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for JobClassificationCountry.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
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
   * Country/Region.
   * Maximum length: 128.
   */
  country!: string;
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
   * One-to-many navigation property to the [[Country]] entity.
   */
  countryNav!: Country[];
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
   * One-to-one navigation property to the [[JobClassificationAus]] entity.
   */
  toJobClassificationAus!: JobClassificationAus;
  /**
   * One-to-one navigation property to the [[JobClassificationBra]] entity.
   */
  toJobClassificationBra!: JobClassificationBra;
  /**
   * One-to-one navigation property to the [[JobClassificationCan]] entity.
   */
  toJobClassificationCan!: JobClassificationCan;
  /**
   * One-to-one navigation property to the [[JobClassificationFra]] entity.
   */
  toJobClassificationFra!: JobClassificationFra;
  /**
   * One-to-one navigation property to the [[JobClassificationGbr]] entity.
   */
  toJobClassificationGbr!: JobClassificationGbr;
  /**
   * One-to-one navigation property to the [[JobClassificationIta]] entity.
   */
  toJobClassificationIta!: JobClassificationIta;
  /**
   * One-to-one navigation property to the [[JobClassificationUsa]] entity.
   */
  toJobClassificationUsa!: JobClassificationUsa;
  /**
   * One-to-one navigation property to the [[JobClassificationZaf]] entity.
   */
  toJobClassificationZaf!: JobClassificationZaf;

  /**
   * Returns an entity builder to construct instances `JobClassificationCountry`.
   * @returns A builder that constructs instances of entity type `JobClassificationCountry`.
   */
  static builder(): EntityBuilderType<JobClassificationCountry, JobClassificationCountryTypeForceMandatory> {
    return Entity.entityBuilder(JobClassificationCountry);
  }

  /**
   * Returns a request builder to construct requests for operations on the `JobClassificationCountry` entity type.
   * @returns A `JobClassificationCountry` request builder.
   */
  static requestBuilder(): JobClassificationCountryRequestBuilder {
    return new JobClassificationCountryRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobClassificationCountry`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `JobClassificationCountry`.
   */
  static customField(fieldName: string): CustomField<JobClassificationCountry> {
    return Entity.customFieldSelector(fieldName, JobClassificationCountry);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { Country, CountryType } from './Country';
import { User, UserType } from './User';
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';
import { JobClassificationAus, JobClassificationAusType } from './JobClassificationAus';
import { JobClassificationBra, JobClassificationBraType } from './JobClassificationBra';
import { JobClassificationCan, JobClassificationCanType } from './JobClassificationCan';
import { JobClassificationFra, JobClassificationFraType } from './JobClassificationFra';
import { JobClassificationGbr, JobClassificationGbrType } from './JobClassificationGbr';
import { JobClassificationIta, JobClassificationItaType } from './JobClassificationIta';
import { JobClassificationUsa, JobClassificationUsaType } from './JobClassificationUsa';
import { JobClassificationZaf, JobClassificationZafType } from './JobClassificationZaf';

export interface JobClassificationCountryType {
  jobClassificationEffectiveStartDate: Moment;
  jobClassificationExternalCode: string;
  country: string;
  createdBy?: string;
  createdDateTime?: Moment;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  mdfSystemRecordStatus?: string;
  countryNav: CountryType[];
  createdByNav: UserType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  toJobClassificationAus: JobClassificationAusType;
  toJobClassificationBra: JobClassificationBraType;
  toJobClassificationCan: JobClassificationCanType;
  toJobClassificationFra: JobClassificationFraType;
  toJobClassificationGbr: JobClassificationGbrType;
  toJobClassificationIta: JobClassificationItaType;
  toJobClassificationUsa: JobClassificationUsaType;
  toJobClassificationZaf: JobClassificationZafType;
}

export interface JobClassificationCountryTypeForceMandatory {
  jobClassificationEffectiveStartDate: Moment;
  jobClassificationExternalCode: string;
  country: string;
  createdBy: string;
  createdDateTime: Moment;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  mdfSystemRecordStatus: string;
  countryNav: CountryType[];
  createdByNav: UserType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  toJobClassificationAus: JobClassificationAusType;
  toJobClassificationBra: JobClassificationBraType;
  toJobClassificationCan: JobClassificationCanType;
  toJobClassificationFra: JobClassificationFraType;
  toJobClassificationGbr: JobClassificationGbrType;
  toJobClassificationIta: JobClassificationItaType;
  toJobClassificationUsa: JobClassificationUsaType;
  toJobClassificationZaf: JobClassificationZafType;
}

export namespace JobClassificationCountry {
  /**
   * Static representation of the [[jobClassificationEffectiveStartDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_CLASSIFICATION_EFFECTIVE_START_DATE: DateField<JobClassificationCountry> = new DateField('JobClassification_effectiveStartDate', JobClassificationCountry, 'Edm.DateTime');
  /**
   * Static representation of the [[jobClassificationExternalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_CLASSIFICATION_EXTERNAL_CODE: StringField<JobClassificationCountry> = new StringField('JobClassification_externalCode', JobClassificationCountry, 'Edm.String');
  /**
   * Static representation of the [[country]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY: StringField<JobClassificationCountry> = new StringField('country', JobClassificationCountry, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<JobClassificationCountry> = new StringField('createdBy', JobClassificationCountry, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<JobClassificationCountry> = new DateField('createdDateTime', JobClassificationCountry, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<JobClassificationCountry> = new StringField('lastModifiedBy', JobClassificationCountry, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<JobClassificationCountry> = new DateField('lastModifiedDateTime', JobClassificationCountry, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<JobClassificationCountry> = new StringField('mdfSystemRecordStatus', JobClassificationCountry, 'Edm.String');
  /**
   * Static representation of the one-to-many navigation property [[countryNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY_NAV: Link<JobClassificationCountry, Country> = new Link('countryNav', JobClassificationCountry, Country);
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<JobClassificationCountry, User> = new OneToOneLink('createdByNav', JobClassificationCountry, User);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<JobClassificationCountry, User> = new OneToOneLink('lastModifiedByNav', JobClassificationCountry, User);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<JobClassificationCountry, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', JobClassificationCountry, MdfEnumValue);
  /**
   * Static representation of the one-to-one navigation property [[toJobClassificationAus]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TO_JOB_CLASSIFICATION_AUS: OneToOneLink<JobClassificationCountry, JobClassificationAus> = new OneToOneLink('toJobClassificationAUS', JobClassificationCountry, JobClassificationAus);
  /**
   * Static representation of the one-to-one navigation property [[toJobClassificationBra]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TO_JOB_CLASSIFICATION_BRA: OneToOneLink<JobClassificationCountry, JobClassificationBra> = new OneToOneLink('toJobClassificationBRA', JobClassificationCountry, JobClassificationBra);
  /**
   * Static representation of the one-to-one navigation property [[toJobClassificationCan]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TO_JOB_CLASSIFICATION_CAN: OneToOneLink<JobClassificationCountry, JobClassificationCan> = new OneToOneLink('toJobClassificationCAN', JobClassificationCountry, JobClassificationCan);
  /**
   * Static representation of the one-to-one navigation property [[toJobClassificationFra]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TO_JOB_CLASSIFICATION_FRA: OneToOneLink<JobClassificationCountry, JobClassificationFra> = new OneToOneLink('toJobClassificationFRA', JobClassificationCountry, JobClassificationFra);
  /**
   * Static representation of the one-to-one navigation property [[toJobClassificationGbr]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TO_JOB_CLASSIFICATION_GBR: OneToOneLink<JobClassificationCountry, JobClassificationGbr> = new OneToOneLink('toJobClassificationGBR', JobClassificationCountry, JobClassificationGbr);
  /**
   * Static representation of the one-to-one navigation property [[toJobClassificationIta]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TO_JOB_CLASSIFICATION_ITA: OneToOneLink<JobClassificationCountry, JobClassificationIta> = new OneToOneLink('toJobClassificationITA', JobClassificationCountry, JobClassificationIta);
  /**
   * Static representation of the one-to-one navigation property [[toJobClassificationUsa]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TO_JOB_CLASSIFICATION_USA: OneToOneLink<JobClassificationCountry, JobClassificationUsa> = new OneToOneLink('toJobClassificationUSA', JobClassificationCountry, JobClassificationUsa);
  /**
   * Static representation of the one-to-one navigation property [[toJobClassificationZaf]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TO_JOB_CLASSIFICATION_ZAF: OneToOneLink<JobClassificationCountry, JobClassificationZaf> = new OneToOneLink('toJobClassificationZAF', JobClassificationCountry, JobClassificationZaf);
  /**
   * All fields of the JobClassificationCountry entity.
   */
  export const _allFields: Array<DateField<JobClassificationCountry> | StringField<JobClassificationCountry> | Link<JobClassificationCountry, Country> | OneToOneLink<JobClassificationCountry, User> | OneToOneLink<JobClassificationCountry, MdfEnumValue> | OneToOneLink<JobClassificationCountry, JobClassificationAus> | OneToOneLink<JobClassificationCountry, JobClassificationBra> | OneToOneLink<JobClassificationCountry, JobClassificationCan> | OneToOneLink<JobClassificationCountry, JobClassificationFra> | OneToOneLink<JobClassificationCountry, JobClassificationGbr> | OneToOneLink<JobClassificationCountry, JobClassificationIta> | OneToOneLink<JobClassificationCountry, JobClassificationUsa> | OneToOneLink<JobClassificationCountry, JobClassificationZaf>> = [
    JobClassificationCountry.JOB_CLASSIFICATION_EFFECTIVE_START_DATE,
    JobClassificationCountry.JOB_CLASSIFICATION_EXTERNAL_CODE,
    JobClassificationCountry.COUNTRY,
    JobClassificationCountry.CREATED_BY,
    JobClassificationCountry.CREATED_DATE_TIME,
    JobClassificationCountry.LAST_MODIFIED_BY,
    JobClassificationCountry.LAST_MODIFIED_DATE_TIME,
    JobClassificationCountry.MDF_SYSTEM_RECORD_STATUS,
    JobClassificationCountry.COUNTRY_NAV,
    JobClassificationCountry.CREATED_BY_NAV,
    JobClassificationCountry.LAST_MODIFIED_BY_NAV,
    JobClassificationCountry.MDF_SYSTEM_RECORD_STATUS_NAV,
    JobClassificationCountry.TO_JOB_CLASSIFICATION_AUS,
    JobClassificationCountry.TO_JOB_CLASSIFICATION_BRA,
    JobClassificationCountry.TO_JOB_CLASSIFICATION_CAN,
    JobClassificationCountry.TO_JOB_CLASSIFICATION_FRA,
    JobClassificationCountry.TO_JOB_CLASSIFICATION_GBR,
    JobClassificationCountry.TO_JOB_CLASSIFICATION_ITA,
    JobClassificationCountry.TO_JOB_CLASSIFICATION_USA,
    JobClassificationCountry.TO_JOB_CLASSIFICATION_ZAF
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<JobClassificationCountry> = new AllFields('*', JobClassificationCountry);
  /**
   * All key fields of the JobClassificationCountry entity.
   */
  export const _keyFields: Array<Selectable<JobClassificationCountry>> = [JobClassificationCountry.JOB_CLASSIFICATION_EFFECTIVE_START_DATE, JobClassificationCountry.JOB_CLASSIFICATION_EXTERNAL_CODE, JobClassificationCountry.COUNTRY];
  /**
   * Mapping of all key field names to the respective static field property JobClassificationCountry.
   */
  export const _keys: { [keys: string]: Selectable<JobClassificationCountry> } = JobClassificationCountry._keyFields.reduce((acc: { [keys: string]: Selectable<JobClassificationCountry> }, field: Selectable<JobClassificationCountry>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
