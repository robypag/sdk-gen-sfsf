/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { JobAnalyzerReportingDataRequestBuilder } from './JobAnalyzerReportingDataRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "JobAnalyzerReportingData" of service "SFOData".
 */
export class JobAnalyzerReportingData extends Entity implements JobAnalyzerReportingDataType {
  /**
   * Technical entity name for JobAnalyzerReportingData.
   */
  static _entityName = 'JobAnalyzerReportingData';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for JobAnalyzerReportingData.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
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
   * currency.
   * Maximum length: 128.
   * @nullable
   */
  currency?: string;
  /**
   * detectedSkills.
   * Maximum length: 4000.
   * @nullable
   */
  detectedSkills?: string;
  /**
   * externalCode.
   * Maximum length: 128.
   */
  externalCode!: string;
  /**
   * femaleScore.
   * @nullable
   */
  femaleScore?: BigNumber;
  /**
   * feminineBiasedTerms.
   * Maximum length: 4000.
   * @nullable
   */
  feminineBiasedTerms?: string;
  /**
   * jobReqId.
   * @nullable
   */
  jobReqId?: BigNumber;
  /**
   * languageScore.
   * @nullable
   */
  languageScore?: BigNumber;
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
   * maleScore.
   * @nullable
   */
  maleScore?: BigNumber;
  /**
   * marketSkills.
   * Maximum length: 4000.
   * @nullable
   */
  marketSkills?: string;
  /**
   * masculineBiasedTerms.
   * Maximum length: 4000.
   * @nullable
   */
  masculineBiasedTerms?: string;
  /**
   * matchedJobFamilyCode.
   * Maximum length: 256.
   * @nullable
   */
  matchedJobFamilyCode?: string;
  /**
   * matchedJobFamilyLabel.
   * Maximum length: 256.
   * @nullable
   */
  matchedJobFamilyLabel?: string;
  /**
   * matchedJobFamilyType.
   * Maximum length: 256.
   * @nullable
   */
  matchedJobFamilyType?: string;
  /**
   * matchedJobLocationCode.
   * Maximum length: 256.
   * @nullable
   */
  matchedJobLocationCode?: string;
  /**
   * matchedJobLocationType.
   * Maximum length: 256.
   * @nullable
   */
  matchedJobLocationType?: string;
  /**
   * Record Status.
   * Maximum length: 128.
   * @nullable
   */
  mdfSystemRecordStatus?: string;
  /**
   * neutralScore.
   * @nullable
   */
  neutralScore?: BigNumber;
  /**
   * predictedSalary.
   * @nullable
   */
  predictedSalary?: BigNumber;
  /**
   * salaryRangeHigh.
   * @nullable
   */
  salaryRangeHigh?: BigNumber;
  /**
   * salaryRangeLow.
   * @nullable
   */
  salaryRangeLow?: BigNumber;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  createdByNav!: User;
  /**
   * One-to-many navigation property to the [[Currency]] entity.
   */
  currencyNav!: Currency[];
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  lastModifiedByNav!: User;
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  mdfSystemRecordStatusNav!: MdfEnumValue;
  /**
   * One-to-many navigation property to the [[WfRequest]] entity.
   */
  wfRequestNav!: WfRequest[];

  /**
   * Returns an entity builder to construct instances `JobAnalyzerReportingData`.
   * @returns A builder that constructs instances of entity type `JobAnalyzerReportingData`.
   */
  static builder(): EntityBuilderType<JobAnalyzerReportingData, JobAnalyzerReportingDataTypeForceMandatory> {
    return Entity.entityBuilder(JobAnalyzerReportingData);
  }

  /**
   * Returns a request builder to construct requests for operations on the `JobAnalyzerReportingData` entity type.
   * @returns A `JobAnalyzerReportingData` request builder.
   */
  static requestBuilder(): JobAnalyzerReportingDataRequestBuilder {
    return new JobAnalyzerReportingDataRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobAnalyzerReportingData`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `JobAnalyzerReportingData`.
   */
  static customField(fieldName: string): CustomField<JobAnalyzerReportingData> {
    return Entity.customFieldSelector(fieldName, JobAnalyzerReportingData);
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
import { Currency, CurrencyType } from './Currency';
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';
import { WfRequest, WfRequestType } from './WfRequest';

export interface JobAnalyzerReportingDataType {
  createdBy?: string;
  createdDateTime?: Moment;
  currency?: string;
  detectedSkills?: string;
  externalCode: string;
  femaleScore?: BigNumber;
  feminineBiasedTerms?: string;
  jobReqId?: BigNumber;
  languageScore?: BigNumber;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  maleScore?: BigNumber;
  marketSkills?: string;
  masculineBiasedTerms?: string;
  matchedJobFamilyCode?: string;
  matchedJobFamilyLabel?: string;
  matchedJobFamilyType?: string;
  matchedJobLocationCode?: string;
  matchedJobLocationType?: string;
  mdfSystemRecordStatus?: string;
  neutralScore?: BigNumber;
  predictedSalary?: BigNumber;
  salaryRangeHigh?: BigNumber;
  salaryRangeLow?: BigNumber;
  createdByNav: UserType;
  currencyNav: CurrencyType[];
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  wfRequestNav: WfRequestType[];
}

export interface JobAnalyzerReportingDataTypeForceMandatory {
  createdBy: string;
  createdDateTime: Moment;
  currency: string;
  detectedSkills: string;
  externalCode: string;
  femaleScore: BigNumber;
  feminineBiasedTerms: string;
  jobReqId: BigNumber;
  languageScore: BigNumber;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  maleScore: BigNumber;
  marketSkills: string;
  masculineBiasedTerms: string;
  matchedJobFamilyCode: string;
  matchedJobFamilyLabel: string;
  matchedJobFamilyType: string;
  matchedJobLocationCode: string;
  matchedJobLocationType: string;
  mdfSystemRecordStatus: string;
  neutralScore: BigNumber;
  predictedSalary: BigNumber;
  salaryRangeHigh: BigNumber;
  salaryRangeLow: BigNumber;
  createdByNav: UserType;
  currencyNav: CurrencyType[];
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  wfRequestNav: WfRequestType[];
}

export namespace JobAnalyzerReportingData {
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<JobAnalyzerReportingData> = new StringField('createdBy', JobAnalyzerReportingData, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<JobAnalyzerReportingData> = new DateField('createdDateTime', JobAnalyzerReportingData, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[currency]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CURRENCY: StringField<JobAnalyzerReportingData> = new StringField('currency', JobAnalyzerReportingData, 'Edm.String');
  /**
   * Static representation of the [[detectedSkills]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DETECTED_SKILLS: StringField<JobAnalyzerReportingData> = new StringField('detectedSkills', JobAnalyzerReportingData, 'Edm.String');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: StringField<JobAnalyzerReportingData> = new StringField('externalCode', JobAnalyzerReportingData, 'Edm.String');
  /**
   * Static representation of the [[femaleScore]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FEMALE_SCORE: BigNumberField<JobAnalyzerReportingData> = new BigNumberField('femaleScore', JobAnalyzerReportingData, 'Edm.Decimal');
  /**
   * Static representation of the [[feminineBiasedTerms]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FEMININE_BIASED_TERMS: StringField<JobAnalyzerReportingData> = new StringField('feminineBiasedTerms', JobAnalyzerReportingData, 'Edm.String');
  /**
   * Static representation of the [[jobReqId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_REQ_ID: BigNumberField<JobAnalyzerReportingData> = new BigNumberField('jobReqId', JobAnalyzerReportingData, 'Edm.Int64');
  /**
   * Static representation of the [[languageScore]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LANGUAGE_SCORE: BigNumberField<JobAnalyzerReportingData> = new BigNumberField('languageScore', JobAnalyzerReportingData, 'Edm.Decimal');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<JobAnalyzerReportingData> = new StringField('lastModifiedBy', JobAnalyzerReportingData, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<JobAnalyzerReportingData> = new DateField('lastModifiedDateTime', JobAnalyzerReportingData, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[maleScore]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MALE_SCORE: BigNumberField<JobAnalyzerReportingData> = new BigNumberField('maleScore', JobAnalyzerReportingData, 'Edm.Decimal');
  /**
   * Static representation of the [[marketSkills]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MARKET_SKILLS: StringField<JobAnalyzerReportingData> = new StringField('marketSkills', JobAnalyzerReportingData, 'Edm.String');
  /**
   * Static representation of the [[masculineBiasedTerms]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MASCULINE_BIASED_TERMS: StringField<JobAnalyzerReportingData> = new StringField('masculineBiasedTerms', JobAnalyzerReportingData, 'Edm.String');
  /**
   * Static representation of the [[matchedJobFamilyCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MATCHED_JOB_FAMILY_CODE: StringField<JobAnalyzerReportingData> = new StringField('matchedJobFamilyCode', JobAnalyzerReportingData, 'Edm.String');
  /**
   * Static representation of the [[matchedJobFamilyLabel]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MATCHED_JOB_FAMILY_LABEL: StringField<JobAnalyzerReportingData> = new StringField('matchedJobFamilyLabel', JobAnalyzerReportingData, 'Edm.String');
  /**
   * Static representation of the [[matchedJobFamilyType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MATCHED_JOB_FAMILY_TYPE: StringField<JobAnalyzerReportingData> = new StringField('matchedJobFamilyType', JobAnalyzerReportingData, 'Edm.String');
  /**
   * Static representation of the [[matchedJobLocationCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MATCHED_JOB_LOCATION_CODE: StringField<JobAnalyzerReportingData> = new StringField('matchedJobLocationCode', JobAnalyzerReportingData, 'Edm.String');
  /**
   * Static representation of the [[matchedJobLocationType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MATCHED_JOB_LOCATION_TYPE: StringField<JobAnalyzerReportingData> = new StringField('matchedJobLocationType', JobAnalyzerReportingData, 'Edm.String');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<JobAnalyzerReportingData> = new StringField('mdfSystemRecordStatus', JobAnalyzerReportingData, 'Edm.String');
  /**
   * Static representation of the [[neutralScore]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NEUTRAL_SCORE: BigNumberField<JobAnalyzerReportingData> = new BigNumberField('neutralScore', JobAnalyzerReportingData, 'Edm.Decimal');
  /**
   * Static representation of the [[predictedSalary]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PREDICTED_SALARY: BigNumberField<JobAnalyzerReportingData> = new BigNumberField('predictedSalary', JobAnalyzerReportingData, 'Edm.Decimal');
  /**
   * Static representation of the [[salaryRangeHigh]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALARY_RANGE_HIGH: BigNumberField<JobAnalyzerReportingData> = new BigNumberField('salaryRangeHigh', JobAnalyzerReportingData, 'Edm.Decimal');
  /**
   * Static representation of the [[salaryRangeLow]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALARY_RANGE_LOW: BigNumberField<JobAnalyzerReportingData> = new BigNumberField('salaryRangeLow', JobAnalyzerReportingData, 'Edm.Decimal');
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<JobAnalyzerReportingData, User> = new OneToOneLink('createdByNav', JobAnalyzerReportingData, User);
  /**
   * Static representation of the one-to-many navigation property [[currencyNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CURRENCY_NAV: Link<JobAnalyzerReportingData, Currency> = new Link('currencyNav', JobAnalyzerReportingData, Currency);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<JobAnalyzerReportingData, User> = new OneToOneLink('lastModifiedByNav', JobAnalyzerReportingData, User);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<JobAnalyzerReportingData, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', JobAnalyzerReportingData, MdfEnumValue);
  /**
   * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WF_REQUEST_NAV: Link<JobAnalyzerReportingData, WfRequest> = new Link('wfRequestNav', JobAnalyzerReportingData, WfRequest);
  /**
   * All fields of the JobAnalyzerReportingData entity.
   */
  export const _allFields: Array<StringField<JobAnalyzerReportingData> | DateField<JobAnalyzerReportingData> | BigNumberField<JobAnalyzerReportingData> | OneToOneLink<JobAnalyzerReportingData, User> | Link<JobAnalyzerReportingData, Currency> | OneToOneLink<JobAnalyzerReportingData, MdfEnumValue> | Link<JobAnalyzerReportingData, WfRequest>> = [
    JobAnalyzerReportingData.CREATED_BY,
    JobAnalyzerReportingData.CREATED_DATE_TIME,
    JobAnalyzerReportingData.CURRENCY,
    JobAnalyzerReportingData.DETECTED_SKILLS,
    JobAnalyzerReportingData.EXTERNAL_CODE,
    JobAnalyzerReportingData.FEMALE_SCORE,
    JobAnalyzerReportingData.FEMININE_BIASED_TERMS,
    JobAnalyzerReportingData.JOB_REQ_ID,
    JobAnalyzerReportingData.LANGUAGE_SCORE,
    JobAnalyzerReportingData.LAST_MODIFIED_BY,
    JobAnalyzerReportingData.LAST_MODIFIED_DATE_TIME,
    JobAnalyzerReportingData.MALE_SCORE,
    JobAnalyzerReportingData.MARKET_SKILLS,
    JobAnalyzerReportingData.MASCULINE_BIASED_TERMS,
    JobAnalyzerReportingData.MATCHED_JOB_FAMILY_CODE,
    JobAnalyzerReportingData.MATCHED_JOB_FAMILY_LABEL,
    JobAnalyzerReportingData.MATCHED_JOB_FAMILY_TYPE,
    JobAnalyzerReportingData.MATCHED_JOB_LOCATION_CODE,
    JobAnalyzerReportingData.MATCHED_JOB_LOCATION_TYPE,
    JobAnalyzerReportingData.MDF_SYSTEM_RECORD_STATUS,
    JobAnalyzerReportingData.NEUTRAL_SCORE,
    JobAnalyzerReportingData.PREDICTED_SALARY,
    JobAnalyzerReportingData.SALARY_RANGE_HIGH,
    JobAnalyzerReportingData.SALARY_RANGE_LOW,
    JobAnalyzerReportingData.CREATED_BY_NAV,
    JobAnalyzerReportingData.CURRENCY_NAV,
    JobAnalyzerReportingData.LAST_MODIFIED_BY_NAV,
    JobAnalyzerReportingData.MDF_SYSTEM_RECORD_STATUS_NAV,
    JobAnalyzerReportingData.WF_REQUEST_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<JobAnalyzerReportingData> = new AllFields('*', JobAnalyzerReportingData);
  /**
   * All key fields of the JobAnalyzerReportingData entity.
   */
  export const _keyFields: Array<Selectable<JobAnalyzerReportingData>> = [JobAnalyzerReportingData.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property JobAnalyzerReportingData.
   */
  export const _keys: { [keys: string]: Selectable<JobAnalyzerReportingData> } = JobAnalyzerReportingData._keyFields.reduce((acc: { [keys: string]: Selectable<JobAnalyzerReportingData> }, field: Selectable<JobAnalyzerReportingData>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
