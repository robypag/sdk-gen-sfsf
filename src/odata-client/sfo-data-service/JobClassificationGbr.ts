/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { JobClassificationGbrRequestBuilder } from './JobClassificationGbrRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "JobClassificationGBR" of service "SFOData".
 */
export class JobClassificationGbr extends Entity implements JobClassificationGbrType {
  /**
   * Technical entity name for JobClassificationGbr.
   */
  static _entityName = 'JobClassificationGBR';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for JobClassificationGbr.
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
   * standardOccupationalClassificationCode.
   * Maximum length: 128.
   * @nullable
   */
  custStandardOccupationalClassificationCode?: string;
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
   * @nullable
   */
  occupationalCode?: BigNumber;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  createdByNav!: User;
  /**
   * One-to-many navigation property to the [[PickListValueV2]] entity.
   */
  custStandardOccupationalClassificationCodeNav!: PickListValueV2[];
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  lastModifiedByNav!: User;
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  mdfSystemRecordStatusNav!: MdfEnumValue;

  /**
   * Returns an entity builder to construct instances `JobClassificationGbr`.
   * @returns A builder that constructs instances of entity type `JobClassificationGbr`.
   */
  static builder(): EntityBuilderType<JobClassificationGbr, JobClassificationGbrTypeForceMandatory> {
    return Entity.entityBuilder(JobClassificationGbr);
  }

  /**
   * Returns a request builder to construct requests for operations on the `JobClassificationGbr` entity type.
   * @returns A `JobClassificationGbr` request builder.
   */
  static requestBuilder(): JobClassificationGbrRequestBuilder {
    return new JobClassificationGbrRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobClassificationGbr`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `JobClassificationGbr`.
   */
  static customField(fieldName: string): CustomField<JobClassificationGbr> {
    return Entity.customFieldSelector(fieldName, JobClassificationGbr);
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
import { PickListValueV2, PickListValueV2Type } from './PickListValueV2';
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';

export interface JobClassificationGbrType {
  jobClassificationCountryCountry: string;
  jobClassificationEffectiveStartDate: Moment;
  jobClassificationExternalCode: string;
  createdBy?: string;
  createdDateTime?: Moment;
  custStandardOccupationalClassificationCode?: string;
  externalCode: BigNumber;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  mdfSystemRecordStatus?: string;
  occupationalCode?: BigNumber;
  createdByNav: UserType;
  custStandardOccupationalClassificationCodeNav: PickListValueV2Type[];
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
}

export interface JobClassificationGbrTypeForceMandatory {
  jobClassificationCountryCountry: string;
  jobClassificationEffectiveStartDate: Moment;
  jobClassificationExternalCode: string;
  createdBy: string;
  createdDateTime: Moment;
  custStandardOccupationalClassificationCode: string;
  externalCode: BigNumber;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  mdfSystemRecordStatus: string;
  occupationalCode: BigNumber;
  createdByNav: UserType;
  custStandardOccupationalClassificationCodeNav: PickListValueV2Type[];
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
}

export namespace JobClassificationGbr {
  /**
   * Static representation of the [[jobClassificationCountryCountry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_CLASSIFICATION_COUNTRY_COUNTRY: StringField<JobClassificationGbr> = new StringField('JobClassificationCountry_country', JobClassificationGbr, 'Edm.String');
  /**
   * Static representation of the [[jobClassificationEffectiveStartDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_CLASSIFICATION_EFFECTIVE_START_DATE: DateField<JobClassificationGbr> = new DateField('JobClassification_effectiveStartDate', JobClassificationGbr, 'Edm.DateTime');
  /**
   * Static representation of the [[jobClassificationExternalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_CLASSIFICATION_EXTERNAL_CODE: StringField<JobClassificationGbr> = new StringField('JobClassification_externalCode', JobClassificationGbr, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<JobClassificationGbr> = new StringField('createdBy', JobClassificationGbr, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<JobClassificationGbr> = new DateField('createdDateTime', JobClassificationGbr, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[custStandardOccupationalClassificationCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUST_STANDARD_OCCUPATIONAL_CLASSIFICATION_CODE: StringField<JobClassificationGbr> = new StringField('cust_standardOccupationalClassificationCode', JobClassificationGbr, 'Edm.String');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: BigNumberField<JobClassificationGbr> = new BigNumberField('externalCode', JobClassificationGbr, 'Edm.Int64');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<JobClassificationGbr> = new StringField('lastModifiedBy', JobClassificationGbr, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<JobClassificationGbr> = new DateField('lastModifiedDateTime', JobClassificationGbr, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<JobClassificationGbr> = new StringField('mdfSystemRecordStatus', JobClassificationGbr, 'Edm.String');
  /**
   * Static representation of the [[occupationalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OCCUPATIONAL_CODE: BigNumberField<JobClassificationGbr> = new BigNumberField('occupationalCode', JobClassificationGbr, 'Edm.Int64');
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<JobClassificationGbr, User> = new OneToOneLink('createdByNav', JobClassificationGbr, User);
  /**
   * Static representation of the one-to-many navigation property [[custStandardOccupationalClassificationCodeNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUST_STANDARD_OCCUPATIONAL_CLASSIFICATION_CODE_NAV: Link<JobClassificationGbr, PickListValueV2> = new Link('cust_standardOccupationalClassificationCodeNav', JobClassificationGbr, PickListValueV2);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<JobClassificationGbr, User> = new OneToOneLink('lastModifiedByNav', JobClassificationGbr, User);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<JobClassificationGbr, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', JobClassificationGbr, MdfEnumValue);
  /**
   * All fields of the JobClassificationGbr entity.
   */
  export const _allFields: Array<StringField<JobClassificationGbr> | DateField<JobClassificationGbr> | BigNumberField<JobClassificationGbr> | OneToOneLink<JobClassificationGbr, User> | Link<JobClassificationGbr, PickListValueV2> | OneToOneLink<JobClassificationGbr, MdfEnumValue>> = [
    JobClassificationGbr.JOB_CLASSIFICATION_COUNTRY_COUNTRY,
    JobClassificationGbr.JOB_CLASSIFICATION_EFFECTIVE_START_DATE,
    JobClassificationGbr.JOB_CLASSIFICATION_EXTERNAL_CODE,
    JobClassificationGbr.CREATED_BY,
    JobClassificationGbr.CREATED_DATE_TIME,
    JobClassificationGbr.CUST_STANDARD_OCCUPATIONAL_CLASSIFICATION_CODE,
    JobClassificationGbr.EXTERNAL_CODE,
    JobClassificationGbr.LAST_MODIFIED_BY,
    JobClassificationGbr.LAST_MODIFIED_DATE_TIME,
    JobClassificationGbr.MDF_SYSTEM_RECORD_STATUS,
    JobClassificationGbr.OCCUPATIONAL_CODE,
    JobClassificationGbr.CREATED_BY_NAV,
    JobClassificationGbr.CUST_STANDARD_OCCUPATIONAL_CLASSIFICATION_CODE_NAV,
    JobClassificationGbr.LAST_MODIFIED_BY_NAV,
    JobClassificationGbr.MDF_SYSTEM_RECORD_STATUS_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<JobClassificationGbr> = new AllFields('*', JobClassificationGbr);
  /**
   * All key fields of the JobClassificationGbr entity.
   */
  export const _keyFields: Array<Selectable<JobClassificationGbr>> = [JobClassificationGbr.JOB_CLASSIFICATION_COUNTRY_COUNTRY, JobClassificationGbr.JOB_CLASSIFICATION_EFFECTIVE_START_DATE, JobClassificationGbr.JOB_CLASSIFICATION_EXTERNAL_CODE, JobClassificationGbr.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property JobClassificationGbr.
   */
  export const _keys: { [keys: string]: Selectable<JobClassificationGbr> } = JobClassificationGbr._keyFields.reduce((acc: { [keys: string]: Selectable<JobClassificationGbr> }, field: Selectable<JobClassificationGbr>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
