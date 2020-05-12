/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { JobClassificationItaRequestBuilder } from './JobClassificationItaRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "JobClassificationITA" of service "SFOData".
 */
export class JobClassificationIta extends Entity implements JobClassificationItaType {
  /**
   * Technical entity name for JobClassificationIta.
   */
  static _entityName = 'JobClassificationITA';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for JobClassificationIta.
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
   * INAIL Code.
   * @nullable
   */
  inailCode?: BigNumber;
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
   * Returns an entity builder to construct instances `JobClassificationIta`.
   * @returns A builder that constructs instances of entity type `JobClassificationIta`.
   */
  static builder(): EntityBuilderType<JobClassificationIta, JobClassificationItaTypeForceMandatory> {
    return Entity.entityBuilder(JobClassificationIta);
  }

  /**
   * Returns a request builder to construct requests for operations on the `JobClassificationIta` entity type.
   * @returns A `JobClassificationIta` request builder.
   */
  static requestBuilder(): JobClassificationItaRequestBuilder {
    return new JobClassificationItaRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobClassificationIta`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `JobClassificationIta`.
   */
  static customField(fieldName: string): CustomField<JobClassificationIta> {
    return Entity.customFieldSelector(fieldName, JobClassificationIta);
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

export interface JobClassificationItaType {
  jobClassificationCountryCountry: string;
  jobClassificationEffectiveStartDate: Moment;
  jobClassificationExternalCode: string;
  createdBy?: string;
  createdDateTime?: Moment;
  externalCode: BigNumber;
  inailCode?: BigNumber;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  mdfSystemRecordStatus?: string;
  createdByNav: UserType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
}

export interface JobClassificationItaTypeForceMandatory {
  jobClassificationCountryCountry: string;
  jobClassificationEffectiveStartDate: Moment;
  jobClassificationExternalCode: string;
  createdBy: string;
  createdDateTime: Moment;
  externalCode: BigNumber;
  inailCode: BigNumber;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  mdfSystemRecordStatus: string;
  createdByNav: UserType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
}

export namespace JobClassificationIta {
  /**
   * Static representation of the [[jobClassificationCountryCountry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_CLASSIFICATION_COUNTRY_COUNTRY: StringField<JobClassificationIta> = new StringField('JobClassificationCountry_country', JobClassificationIta, 'Edm.String');
  /**
   * Static representation of the [[jobClassificationEffectiveStartDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_CLASSIFICATION_EFFECTIVE_START_DATE: DateField<JobClassificationIta> = new DateField('JobClassification_effectiveStartDate', JobClassificationIta, 'Edm.DateTime');
  /**
   * Static representation of the [[jobClassificationExternalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_CLASSIFICATION_EXTERNAL_CODE: StringField<JobClassificationIta> = new StringField('JobClassification_externalCode', JobClassificationIta, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<JobClassificationIta> = new StringField('createdBy', JobClassificationIta, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<JobClassificationIta> = new DateField('createdDateTime', JobClassificationIta, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: BigNumberField<JobClassificationIta> = new BigNumberField('externalCode', JobClassificationIta, 'Edm.Int64');
  /**
   * Static representation of the [[inailCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INAIL_CODE: BigNumberField<JobClassificationIta> = new BigNumberField('inailCode', JobClassificationIta, 'Edm.Int64');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<JobClassificationIta> = new StringField('lastModifiedBy', JobClassificationIta, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<JobClassificationIta> = new DateField('lastModifiedDateTime', JobClassificationIta, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<JobClassificationIta> = new StringField('mdfSystemRecordStatus', JobClassificationIta, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<JobClassificationIta, User> = new OneToOneLink('createdByNav', JobClassificationIta, User);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<JobClassificationIta, User> = new OneToOneLink('lastModifiedByNav', JobClassificationIta, User);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<JobClassificationIta, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', JobClassificationIta, MdfEnumValue);
  /**
   * All fields of the JobClassificationIta entity.
   */
  export const _allFields: Array<StringField<JobClassificationIta> | DateField<JobClassificationIta> | BigNumberField<JobClassificationIta> | OneToOneLink<JobClassificationIta, User> | OneToOneLink<JobClassificationIta, MdfEnumValue>> = [
    JobClassificationIta.JOB_CLASSIFICATION_COUNTRY_COUNTRY,
    JobClassificationIta.JOB_CLASSIFICATION_EFFECTIVE_START_DATE,
    JobClassificationIta.JOB_CLASSIFICATION_EXTERNAL_CODE,
    JobClassificationIta.CREATED_BY,
    JobClassificationIta.CREATED_DATE_TIME,
    JobClassificationIta.EXTERNAL_CODE,
    JobClassificationIta.INAIL_CODE,
    JobClassificationIta.LAST_MODIFIED_BY,
    JobClassificationIta.LAST_MODIFIED_DATE_TIME,
    JobClassificationIta.MDF_SYSTEM_RECORD_STATUS,
    JobClassificationIta.CREATED_BY_NAV,
    JobClassificationIta.LAST_MODIFIED_BY_NAV,
    JobClassificationIta.MDF_SYSTEM_RECORD_STATUS_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<JobClassificationIta> = new AllFields('*', JobClassificationIta);
  /**
   * All key fields of the JobClassificationIta entity.
   */
  export const _keyFields: Array<Selectable<JobClassificationIta>> = [JobClassificationIta.JOB_CLASSIFICATION_COUNTRY_COUNTRY, JobClassificationIta.JOB_CLASSIFICATION_EFFECTIVE_START_DATE, JobClassificationIta.JOB_CLASSIFICATION_EXTERNAL_CODE, JobClassificationIta.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property JobClassificationIta.
   */
  export const _keys: { [keys: string]: Selectable<JobClassificationIta> } = JobClassificationIta._keyFields.reduce((acc: { [keys: string]: Selectable<JobClassificationIta> }, field: Selectable<JobClassificationIta>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
