/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { JobClassificationBraRequestBuilder } from './JobClassificationBraRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "JobClassificationBRA" of service "SFOData".
 */
export class JobClassificationBra extends Entity implements JobClassificationBraType {
  /**
   * Technical entity name for JobClassificationBra.
   */
  static _entityName = 'JobClassificationBRA';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for JobClassificationBra.
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
   * Occupational Code.
   * Maximum length: 128.
   * @nullable
   */
  occupationalCode?: string;
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
   * One-to-many navigation property to the [[PickListValueV2]] entity.
   */
  occupationalCodeNav!: PickListValueV2[];

  /**
   * Returns an entity builder to construct instances `JobClassificationBra`.
   * @returns A builder that constructs instances of entity type `JobClassificationBra`.
   */
  static builder(): EntityBuilderType<JobClassificationBra, JobClassificationBraTypeForceMandatory> {
    return Entity.entityBuilder(JobClassificationBra);
  }

  /**
   * Returns a request builder to construct requests for operations on the `JobClassificationBra` entity type.
   * @returns A `JobClassificationBra` request builder.
   */
  static requestBuilder(): JobClassificationBraRequestBuilder {
    return new JobClassificationBraRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobClassificationBra`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `JobClassificationBra`.
   */
  static customField(fieldName: string): CustomField<JobClassificationBra> {
    return Entity.customFieldSelector(fieldName, JobClassificationBra);
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
import { PickListValueV2, PickListValueV2Type } from './PickListValueV2';

export interface JobClassificationBraType {
  jobClassificationCountryCountry: string;
  jobClassificationEffectiveStartDate: Moment;
  jobClassificationExternalCode: string;
  createdBy?: string;
  createdDateTime?: Moment;
  externalCode: BigNumber;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  mdfSystemRecordStatus?: string;
  occupationalCode?: string;
  createdByNav: UserType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  occupationalCodeNav: PickListValueV2Type[];
}

export interface JobClassificationBraTypeForceMandatory {
  jobClassificationCountryCountry: string;
  jobClassificationEffectiveStartDate: Moment;
  jobClassificationExternalCode: string;
  createdBy: string;
  createdDateTime: Moment;
  externalCode: BigNumber;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  mdfSystemRecordStatus: string;
  occupationalCode: string;
  createdByNav: UserType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  occupationalCodeNav: PickListValueV2Type[];
}

export namespace JobClassificationBra {
  /**
   * Static representation of the [[jobClassificationCountryCountry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_CLASSIFICATION_COUNTRY_COUNTRY: StringField<JobClassificationBra> = new StringField('JobClassificationCountry_country', JobClassificationBra, 'Edm.String');
  /**
   * Static representation of the [[jobClassificationEffectiveStartDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_CLASSIFICATION_EFFECTIVE_START_DATE: DateField<JobClassificationBra> = new DateField('JobClassification_effectiveStartDate', JobClassificationBra, 'Edm.DateTime');
  /**
   * Static representation of the [[jobClassificationExternalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_CLASSIFICATION_EXTERNAL_CODE: StringField<JobClassificationBra> = new StringField('JobClassification_externalCode', JobClassificationBra, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<JobClassificationBra> = new StringField('createdBy', JobClassificationBra, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<JobClassificationBra> = new DateField('createdDateTime', JobClassificationBra, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: BigNumberField<JobClassificationBra> = new BigNumberField('externalCode', JobClassificationBra, 'Edm.Int64');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<JobClassificationBra> = new StringField('lastModifiedBy', JobClassificationBra, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<JobClassificationBra> = new DateField('lastModifiedDateTime', JobClassificationBra, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<JobClassificationBra> = new StringField('mdfSystemRecordStatus', JobClassificationBra, 'Edm.String');
  /**
   * Static representation of the [[occupationalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OCCUPATIONAL_CODE: StringField<JobClassificationBra> = new StringField('occupationalCode', JobClassificationBra, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<JobClassificationBra, User> = new OneToOneLink('createdByNav', JobClassificationBra, User);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<JobClassificationBra, User> = new OneToOneLink('lastModifiedByNav', JobClassificationBra, User);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<JobClassificationBra, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', JobClassificationBra, MdfEnumValue);
  /**
   * Static representation of the one-to-many navigation property [[occupationalCodeNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OCCUPATIONAL_CODE_NAV: Link<JobClassificationBra, PickListValueV2> = new Link('occupationalCodeNav', JobClassificationBra, PickListValueV2);
  /**
   * All fields of the JobClassificationBra entity.
   */
  export const _allFields: Array<StringField<JobClassificationBra> | DateField<JobClassificationBra> | BigNumberField<JobClassificationBra> | OneToOneLink<JobClassificationBra, User> | OneToOneLink<JobClassificationBra, MdfEnumValue> | Link<JobClassificationBra, PickListValueV2>> = [
    JobClassificationBra.JOB_CLASSIFICATION_COUNTRY_COUNTRY,
    JobClassificationBra.JOB_CLASSIFICATION_EFFECTIVE_START_DATE,
    JobClassificationBra.JOB_CLASSIFICATION_EXTERNAL_CODE,
    JobClassificationBra.CREATED_BY,
    JobClassificationBra.CREATED_DATE_TIME,
    JobClassificationBra.EXTERNAL_CODE,
    JobClassificationBra.LAST_MODIFIED_BY,
    JobClassificationBra.LAST_MODIFIED_DATE_TIME,
    JobClassificationBra.MDF_SYSTEM_RECORD_STATUS,
    JobClassificationBra.OCCUPATIONAL_CODE,
    JobClassificationBra.CREATED_BY_NAV,
    JobClassificationBra.LAST_MODIFIED_BY_NAV,
    JobClassificationBra.MDF_SYSTEM_RECORD_STATUS_NAV,
    JobClassificationBra.OCCUPATIONAL_CODE_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<JobClassificationBra> = new AllFields('*', JobClassificationBra);
  /**
   * All key fields of the JobClassificationBra entity.
   */
  export const _keyFields: Array<Selectable<JobClassificationBra>> = [JobClassificationBra.JOB_CLASSIFICATION_COUNTRY_COUNTRY, JobClassificationBra.JOB_CLASSIFICATION_EFFECTIVE_START_DATE, JobClassificationBra.JOB_CLASSIFICATION_EXTERNAL_CODE, JobClassificationBra.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property JobClassificationBra.
   */
  export const _keys: { [keys: string]: Selectable<JobClassificationBra> } = JobClassificationBra._keyFields.reduce((acc: { [keys: string]: Selectable<JobClassificationBra> }, field: Selectable<JobClassificationBra>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
