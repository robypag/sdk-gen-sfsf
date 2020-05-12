/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { JobClassificationZafRequestBuilder } from './JobClassificationZafRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "JobClassificationZAF" of service "SFOData".
 */
export class JobClassificationZaf extends Entity implements JobClassificationZafType {
  /**
   * Technical entity name for JobClassificationZaf.
   */
  static _entityName = 'JobClassificationZAF';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for JobClassificationZaf.
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
   * Occupational Level.
   * Maximum length: 128.
   * @nullable
   */
  occupationalLevel?: string;
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
  occupationalLevelNav!: PickListValueV2[];

  /**
   * Returns an entity builder to construct instances `JobClassificationZaf`.
   * @returns A builder that constructs instances of entity type `JobClassificationZaf`.
   */
  static builder(): EntityBuilderType<JobClassificationZaf, JobClassificationZafTypeForceMandatory> {
    return Entity.entityBuilder(JobClassificationZaf);
  }

  /**
   * Returns a request builder to construct requests for operations on the `JobClassificationZaf` entity type.
   * @returns A `JobClassificationZaf` request builder.
   */
  static requestBuilder(): JobClassificationZafRequestBuilder {
    return new JobClassificationZafRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobClassificationZaf`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `JobClassificationZaf`.
   */
  static customField(fieldName: string): CustomField<JobClassificationZaf> {
    return Entity.customFieldSelector(fieldName, JobClassificationZaf);
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

export interface JobClassificationZafType {
  jobClassificationCountryCountry: string;
  jobClassificationEffectiveStartDate: Moment;
  jobClassificationExternalCode: string;
  createdBy?: string;
  createdDateTime?: Moment;
  externalCode: BigNumber;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  mdfSystemRecordStatus?: string;
  occupationalLevel?: string;
  createdByNav: UserType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  occupationalLevelNav: PickListValueV2Type[];
}

export interface JobClassificationZafTypeForceMandatory {
  jobClassificationCountryCountry: string;
  jobClassificationEffectiveStartDate: Moment;
  jobClassificationExternalCode: string;
  createdBy: string;
  createdDateTime: Moment;
  externalCode: BigNumber;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  mdfSystemRecordStatus: string;
  occupationalLevel: string;
  createdByNav: UserType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  occupationalLevelNav: PickListValueV2Type[];
}

export namespace JobClassificationZaf {
  /**
   * Static representation of the [[jobClassificationCountryCountry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_CLASSIFICATION_COUNTRY_COUNTRY: StringField<JobClassificationZaf> = new StringField('JobClassificationCountry_country', JobClassificationZaf, 'Edm.String');
  /**
   * Static representation of the [[jobClassificationEffectiveStartDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_CLASSIFICATION_EFFECTIVE_START_DATE: DateField<JobClassificationZaf> = new DateField('JobClassification_effectiveStartDate', JobClassificationZaf, 'Edm.DateTime');
  /**
   * Static representation of the [[jobClassificationExternalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_CLASSIFICATION_EXTERNAL_CODE: StringField<JobClassificationZaf> = new StringField('JobClassification_externalCode', JobClassificationZaf, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<JobClassificationZaf> = new StringField('createdBy', JobClassificationZaf, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<JobClassificationZaf> = new DateField('createdDateTime', JobClassificationZaf, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: BigNumberField<JobClassificationZaf> = new BigNumberField('externalCode', JobClassificationZaf, 'Edm.Int64');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<JobClassificationZaf> = new StringField('lastModifiedBy', JobClassificationZaf, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<JobClassificationZaf> = new DateField('lastModifiedDateTime', JobClassificationZaf, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<JobClassificationZaf> = new StringField('mdfSystemRecordStatus', JobClassificationZaf, 'Edm.String');
  /**
   * Static representation of the [[occupationalLevel]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OCCUPATIONAL_LEVEL: StringField<JobClassificationZaf> = new StringField('occupationalLevel', JobClassificationZaf, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<JobClassificationZaf, User> = new OneToOneLink('createdByNav', JobClassificationZaf, User);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<JobClassificationZaf, User> = new OneToOneLink('lastModifiedByNav', JobClassificationZaf, User);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<JobClassificationZaf, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', JobClassificationZaf, MdfEnumValue);
  /**
   * Static representation of the one-to-many navigation property [[occupationalLevelNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OCCUPATIONAL_LEVEL_NAV: Link<JobClassificationZaf, PickListValueV2> = new Link('occupationalLevelNav', JobClassificationZaf, PickListValueV2);
  /**
   * All fields of the JobClassificationZaf entity.
   */
  export const _allFields: Array<StringField<JobClassificationZaf> | DateField<JobClassificationZaf> | BigNumberField<JobClassificationZaf> | OneToOneLink<JobClassificationZaf, User> | OneToOneLink<JobClassificationZaf, MdfEnumValue> | Link<JobClassificationZaf, PickListValueV2>> = [
    JobClassificationZaf.JOB_CLASSIFICATION_COUNTRY_COUNTRY,
    JobClassificationZaf.JOB_CLASSIFICATION_EFFECTIVE_START_DATE,
    JobClassificationZaf.JOB_CLASSIFICATION_EXTERNAL_CODE,
    JobClassificationZaf.CREATED_BY,
    JobClassificationZaf.CREATED_DATE_TIME,
    JobClassificationZaf.EXTERNAL_CODE,
    JobClassificationZaf.LAST_MODIFIED_BY,
    JobClassificationZaf.LAST_MODIFIED_DATE_TIME,
    JobClassificationZaf.MDF_SYSTEM_RECORD_STATUS,
    JobClassificationZaf.OCCUPATIONAL_LEVEL,
    JobClassificationZaf.CREATED_BY_NAV,
    JobClassificationZaf.LAST_MODIFIED_BY_NAV,
    JobClassificationZaf.MDF_SYSTEM_RECORD_STATUS_NAV,
    JobClassificationZaf.OCCUPATIONAL_LEVEL_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<JobClassificationZaf> = new AllFields('*', JobClassificationZaf);
  /**
   * All key fields of the JobClassificationZaf entity.
   */
  export const _keyFields: Array<Selectable<JobClassificationZaf>> = [JobClassificationZaf.JOB_CLASSIFICATION_COUNTRY_COUNTRY, JobClassificationZaf.JOB_CLASSIFICATION_EFFECTIVE_START_DATE, JobClassificationZaf.JOB_CLASSIFICATION_EXTERNAL_CODE, JobClassificationZaf.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property JobClassificationZaf.
   */
  export const _keys: { [keys: string]: Selectable<JobClassificationZaf> } = JobClassificationZaf._keyFields.reduce((acc: { [keys: string]: Selectable<JobClassificationZaf> }, field: Selectable<JobClassificationZaf>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
