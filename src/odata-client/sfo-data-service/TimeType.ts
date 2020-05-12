/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TimeTypeRequestBuilder } from './TimeTypeRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "TimeType" of service "SFOData".
 */
export class TimeType extends Entity implements TimeTypeType {
  /**
   * Technical entity name for TimeType.
   */
  static _entityName = 'TimeType';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for TimeType.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Absence Class.
   * Maximum length: 255.
   * @nullable
   */
  absenceClass?: string;
  /**
   * Absence Retention Group.
   * Maximum length: 128.
   * @nullable
   */
  absenceRetentionGroup?: string;
  /**
   * Accrual Recalculation Relevance.
   * Maximum length: 255.
   * @nullable
   */
  accrualRecalculationRelevance?: string;
  /**
   * Activate Cancellation Workflow.
   * @nullable
   */
  activateCancellationWorkflow?: boolean;
  /**
   * Admin Workflow Configuration.
   * Maximum length: 32.
   * @nullable
   */
  adminWorkflow?: string;
  /**
   * Allocation Strategy.
   * Maximum length: 255.
   * @nullable
   */
  allocationStrategy?: string;
  /**
   * Permitted Fractions For Unit Day.
   * Maximum length: 255.
   * @nullable
   */
  allowedFractionsUnitDay?: string;
  /**
   * Permitted Fractions For Unit Hour.
   * Maximum length: 255.
   * @nullable
   */
  allowedFractionsUnitHour?: string;
  /**
   * Allow Requests In Increments Of [Minutes].
   * @nullable
   */
  allowedRequestingIncrement?: BigNumber;
  /**
   * Balance Calculation Setting.
   * Maximum length: 255.
   * @nullable
   */
  balanceCalculationSetting?: string;
  /**
   * Duration Display According To.
   * Maximum length: 255.
   * @nullable
   */
  calculationMethod?: string;
  /**
   * Classification.
   * Maximum length: 255.
   * @nullable
   */
  category?: string;
  /**
   * Collision Grouping.
   * Maximum length: 128.
   * @nullable
   */
  collisionGrouping?: string;
  /**
   * Counting Method.
   * Maximum length: 128.
   * @nullable
   */
  countingMethod?: string;
  /**
   * Country/Region.
   * Maximum length: 128.
   * @nullable
   */
  country?: string;
  /**
   * Created By.
   * Maximum length: 255.
   * @nullable
   */
  createdBy?: string;
  /**
   * Created On.
   * @nullable
   */
  createdDateTime?: Moment;
  /**
   * External Code.
   * Maximum length: 128.
   */
  externalCode!: string;
  /**
   * External Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameDeDe?: string;
  /**
   * External Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameDefaultValue?: string;
  /**
   * External Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameEnDebug?: string;
  /**
   * External Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameEnGb?: string;
  /**
   * External Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameEnUs?: string;
  /**
   * External Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameEsEs?: string;
  /**
   * External Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameEsMx?: string;
  /**
   * External Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameFrCa?: string;
  /**
   * External Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameFrFr?: string;
  /**
   * External Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameItIt?: string;
  /**
   * External Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameLocalized?: string;
  /**
   * External Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameNlNl?: string;
  /**
   * External Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNamePtBr?: string;
  /**
   * External Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameZhCn?: string;
  /**
   * Flexible Requesting Allowed.
   * @nullable
   */
  flexibleRequestingAllowed?: boolean;
  /**
   * Last Modified By.
   * Maximum length: 255.
   * @nullable
   */
  lastModifiedBy?: string;
  /**
   * Last Modified On.
   * @nullable
   */
  lastModifiedDateTime?: Moment;
  /**
   * Leave of Absence Event Reason (Return To Work).
   * Maximum length: 32.
   * @nullable
   */
  loaEndEventReason?: string;
  /**
   * Leave of Absence Event Reason (Plan).
   * Maximum length: 32.
   * @nullable
   */
  loaStartEventReason?: string;
  /**
   * Maximum Duration in Months.
   * @nullable
   */
  maximumDurationInMonths?: BigNumber;
  /**
   * Record Status.
   * Maximum length: 255.
   * @nullable
   */
  mdfSystemRecordStatus?: string;
  /**
   * Posting Order.
   * Maximum length: 128.
   * @nullable
   */
  postingOrder?: string;
  /**
   * Posting Priority.
   * Maximum length: 128.
   * @nullable
   */
  postingPriority?: string;
  /**
   * Requesting on Non-Working Days Allowed.
   * @nullable
   */
  requestingOnNonWorkingDaysAllowed?: boolean;
  /**
   * Undetermined End Date Allowed.
   * @nullable
   */
  undeterminedEndDateAllowed?: boolean;
  /**
   * Unit.
   * Maximum length: 255.
   * @nullable
   */
  unit?: string;
  /**
   * Workflow Configuration.
   * Maximum length: 32.
   * @nullable
   */
  workflowConfiguration?: string;
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  absenceClassNav!: MdfEnumValue;
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  accrualRecalculationRelevanceNav!: MdfEnumValue;
  /**
   * One-to-one navigation property to the [[FoWfConfig]] entity.
   */
  adminWorkflowNav!: FoWfConfig;
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  allocationStrategyNav!: MdfEnumValue;
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  allowedFractionsUnitDayNav!: MdfEnumValue;
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  allowedFractionsUnitHourNav!: MdfEnumValue;
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  balanceCalculationSettingNav!: MdfEnumValue;
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  calculationMethodNav!: MdfEnumValue;
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  categoryNav!: MdfEnumValue;
  /**
   * One-to-one navigation property to the [[AbsenceCountingMethod]] entity.
   */
  countingMethodNav!: AbsenceCountingMethod;
  /**
   * One-to-one navigation property to the [[TimeTypeAus]] entity.
   */
  countryExtensionAus!: TimeTypeAus;
  /**
   * One-to-many navigation property to the [[Country]] entity.
   */
  countryNav!: Country[];
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  createdByNav!: User;
  /**
   * One-to-many navigation property to the [[MdfLocalizedValue]] entity.
   */
  externalNameTranslationTextNav!: MdfLocalizedValue[];
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  lastModifiedByNav!: User;
  /**
   * One-to-many navigation property to the [[FoEventReason]] entity.
   */
  loaEndEventReasonNav!: FoEventReason[];
  /**
   * One-to-many navigation property to the [[FoEventReason]] entity.
   */
  loaStartEventReasonNav!: FoEventReason[];
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  mdfSystemRecordStatusNav!: MdfEnumValue;
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  postingOrderNav!: MdfEnumValue;
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  postingPriorityNav!: MdfEnumValue;
  /**
   * One-to-many navigation property to the [[TimeAccountPostingRule]] entity.
   */
  timeAccountPostingRules!: TimeAccountPostingRule[];
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  unitNav!: MdfEnumValue;
  /**
   * One-to-many navigation property to the [[WfRequest]] entity.
   */
  wfRequestNav!: WfRequest[];
  /**
   * One-to-one navigation property to the [[FoWfConfig]] entity.
   */
  workflowConfigurationNav!: FoWfConfig;

  /**
   * Returns an entity builder to construct instances `TimeType`.
   * @returns A builder that constructs instances of entity type `TimeType`.
   */
  static builder(): EntityBuilderType<TimeType, TimeTypeTypeForceMandatory> {
    return Entity.entityBuilder(TimeType);
  }

  /**
   * Returns a request builder to construct requests for operations on the `TimeType` entity type.
   * @returns A `TimeType` request builder.
   */
  static requestBuilder(): TimeTypeRequestBuilder {
    return new TimeTypeRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `TimeType`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `TimeType`.
   */
  static customField(fieldName: string): CustomField<TimeType> {
    return Entity.customFieldSelector(fieldName, TimeType);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';
import { FoWfConfig, FoWfConfigType } from './FoWfConfig';
import { AbsenceCountingMethod, AbsenceCountingMethodType } from './AbsenceCountingMethod';
import { TimeTypeAus, TimeTypeAusType } from './TimeTypeAus';
import { Country, CountryType } from './Country';
import { User, UserType } from './User';
import { MdfLocalizedValue, MdfLocalizedValueType } from './MdfLocalizedValue';
import { FoEventReason, FoEventReasonType } from './FoEventReason';
import { TimeAccountPostingRule, TimeAccountPostingRuleType } from './TimeAccountPostingRule';
import { WfRequest, WfRequestType } from './WfRequest';

export interface TimeTypeType {
  absenceClass?: string;
  absenceRetentionGroup?: string;
  accrualRecalculationRelevance?: string;
  activateCancellationWorkflow?: boolean;
  adminWorkflow?: string;
  allocationStrategy?: string;
  allowedFractionsUnitDay?: string;
  allowedFractionsUnitHour?: string;
  allowedRequestingIncrement?: BigNumber;
  balanceCalculationSetting?: string;
  calculationMethod?: string;
  category?: string;
  collisionGrouping?: string;
  countingMethod?: string;
  country?: string;
  createdBy?: string;
  createdDateTime?: Moment;
  externalCode: string;
  externalNameDeDe?: string;
  externalNameDefaultValue?: string;
  externalNameEnDebug?: string;
  externalNameEnGb?: string;
  externalNameEnUs?: string;
  externalNameEsEs?: string;
  externalNameEsMx?: string;
  externalNameFrCa?: string;
  externalNameFrFr?: string;
  externalNameItIt?: string;
  externalNameLocalized?: string;
  externalNameNlNl?: string;
  externalNamePtBr?: string;
  externalNameZhCn?: string;
  flexibleRequestingAllowed?: boolean;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  loaEndEventReason?: string;
  loaStartEventReason?: string;
  maximumDurationInMonths?: BigNumber;
  mdfSystemRecordStatus?: string;
  postingOrder?: string;
  postingPriority?: string;
  requestingOnNonWorkingDaysAllowed?: boolean;
  undeterminedEndDateAllowed?: boolean;
  unit?: string;
  workflowConfiguration?: string;
  absenceClassNav: MdfEnumValueType;
  accrualRecalculationRelevanceNav: MdfEnumValueType;
  adminWorkflowNav: FoWfConfigType;
  allocationStrategyNav: MdfEnumValueType;
  allowedFractionsUnitDayNav: MdfEnumValueType;
  allowedFractionsUnitHourNav: MdfEnumValueType;
  balanceCalculationSettingNav: MdfEnumValueType;
  calculationMethodNav: MdfEnumValueType;
  categoryNav: MdfEnumValueType;
  countingMethodNav: AbsenceCountingMethodType;
  countryExtensionAus: TimeTypeAusType;
  countryNav: CountryType[];
  createdByNav: UserType;
  externalNameTranslationTextNav: MdfLocalizedValueType[];
  lastModifiedByNav: UserType;
  loaEndEventReasonNav: FoEventReasonType[];
  loaStartEventReasonNav: FoEventReasonType[];
  mdfSystemRecordStatusNav: MdfEnumValueType;
  postingOrderNav: MdfEnumValueType;
  postingPriorityNav: MdfEnumValueType;
  timeAccountPostingRules: TimeAccountPostingRuleType[];
  unitNav: MdfEnumValueType;
  wfRequestNav: WfRequestType[];
  workflowConfigurationNav: FoWfConfigType;
}

export interface TimeTypeTypeForceMandatory {
  absenceClass: string;
  absenceRetentionGroup: string;
  accrualRecalculationRelevance: string;
  activateCancellationWorkflow: boolean;
  adminWorkflow: string;
  allocationStrategy: string;
  allowedFractionsUnitDay: string;
  allowedFractionsUnitHour: string;
  allowedRequestingIncrement: BigNumber;
  balanceCalculationSetting: string;
  calculationMethod: string;
  category: string;
  collisionGrouping: string;
  countingMethod: string;
  country: string;
  createdBy: string;
  createdDateTime: Moment;
  externalCode: string;
  externalNameDeDe: string;
  externalNameDefaultValue: string;
  externalNameEnDebug: string;
  externalNameEnGb: string;
  externalNameEnUs: string;
  externalNameEsEs: string;
  externalNameEsMx: string;
  externalNameFrCa: string;
  externalNameFrFr: string;
  externalNameItIt: string;
  externalNameLocalized: string;
  externalNameNlNl: string;
  externalNamePtBr: string;
  externalNameZhCn: string;
  flexibleRequestingAllowed: boolean;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  loaEndEventReason: string;
  loaStartEventReason: string;
  maximumDurationInMonths: BigNumber;
  mdfSystemRecordStatus: string;
  postingOrder: string;
  postingPriority: string;
  requestingOnNonWorkingDaysAllowed: boolean;
  undeterminedEndDateAllowed: boolean;
  unit: string;
  workflowConfiguration: string;
  absenceClassNav: MdfEnumValueType;
  accrualRecalculationRelevanceNav: MdfEnumValueType;
  adminWorkflowNav: FoWfConfigType;
  allocationStrategyNav: MdfEnumValueType;
  allowedFractionsUnitDayNav: MdfEnumValueType;
  allowedFractionsUnitHourNav: MdfEnumValueType;
  balanceCalculationSettingNav: MdfEnumValueType;
  calculationMethodNav: MdfEnumValueType;
  categoryNav: MdfEnumValueType;
  countingMethodNav: AbsenceCountingMethodType;
  countryExtensionAus: TimeTypeAusType;
  countryNav: CountryType[];
  createdByNav: UserType;
  externalNameTranslationTextNav: MdfLocalizedValueType[];
  lastModifiedByNav: UserType;
  loaEndEventReasonNav: FoEventReasonType[];
  loaStartEventReasonNav: FoEventReasonType[];
  mdfSystemRecordStatusNav: MdfEnumValueType;
  postingOrderNav: MdfEnumValueType;
  postingPriorityNav: MdfEnumValueType;
  timeAccountPostingRules: TimeAccountPostingRuleType[];
  unitNav: MdfEnumValueType;
  wfRequestNav: WfRequestType[];
  workflowConfigurationNav: FoWfConfigType;
}

export namespace TimeType {
  /**
   * Static representation of the [[absenceClass]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ABSENCE_CLASS: StringField<TimeType> = new StringField('absenceClass', TimeType, 'Edm.String');
  /**
   * Static representation of the [[absenceRetentionGroup]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ABSENCE_RETENTION_GROUP: StringField<TimeType> = new StringField('absenceRetentionGroup', TimeType, 'Edm.String');
  /**
   * Static representation of the [[accrualRecalculationRelevance]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACCRUAL_RECALCULATION_RELEVANCE: StringField<TimeType> = new StringField('accrualRecalculationRelevance', TimeType, 'Edm.String');
  /**
   * Static representation of the [[activateCancellationWorkflow]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACTIVATE_CANCELLATION_WORKFLOW: BooleanField<TimeType> = new BooleanField('activateCancellationWorkflow', TimeType, 'Edm.Boolean');
  /**
   * Static representation of the [[adminWorkflow]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADMIN_WORKFLOW: StringField<TimeType> = new StringField('adminWorkflow', TimeType, 'Edm.String');
  /**
   * Static representation of the [[allocationStrategy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ALLOCATION_STRATEGY: StringField<TimeType> = new StringField('allocationStrategy', TimeType, 'Edm.String');
  /**
   * Static representation of the [[allowedFractionsUnitDay]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ALLOWED_FRACTIONS_UNIT_DAY: StringField<TimeType> = new StringField('allowedFractionsUnitDay', TimeType, 'Edm.String');
  /**
   * Static representation of the [[allowedFractionsUnitHour]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ALLOWED_FRACTIONS_UNIT_HOUR: StringField<TimeType> = new StringField('allowedFractionsUnitHour', TimeType, 'Edm.String');
  /**
   * Static representation of the [[allowedRequestingIncrement]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ALLOWED_REQUESTING_INCREMENT: BigNumberField<TimeType> = new BigNumberField('allowedRequestingIncrement', TimeType, 'Edm.Int64');
  /**
   * Static representation of the [[balanceCalculationSetting]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BALANCE_CALCULATION_SETTING: StringField<TimeType> = new StringField('balanceCalculationSetting', TimeType, 'Edm.String');
  /**
   * Static representation of the [[calculationMethod]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CALCULATION_METHOD: StringField<TimeType> = new StringField('calculationMethod', TimeType, 'Edm.String');
  /**
   * Static representation of the [[category]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CATEGORY: StringField<TimeType> = new StringField('category', TimeType, 'Edm.String');
  /**
   * Static representation of the [[collisionGrouping]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COLLISION_GROUPING: StringField<TimeType> = new StringField('collisionGrouping', TimeType, 'Edm.String');
  /**
   * Static representation of the [[countingMethod]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTING_METHOD: StringField<TimeType> = new StringField('countingMethod', TimeType, 'Edm.String');
  /**
   * Static representation of the [[country]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY: StringField<TimeType> = new StringField('country', TimeType, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<TimeType> = new StringField('createdBy', TimeType, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<TimeType> = new DateField('createdDateTime', TimeType, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: StringField<TimeType> = new StringField('externalCode', TimeType, 'Edm.String');
  /**
   * Static representation of the [[externalNameDeDe]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_DE_DE: StringField<TimeType> = new StringField('externalName_de_DE', TimeType, 'Edm.String');
  /**
   * Static representation of the [[externalNameDefaultValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_DEFAULT_VALUE: StringField<TimeType> = new StringField('externalName_defaultValue', TimeType, 'Edm.String');
  /**
   * Static representation of the [[externalNameEnDebug]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_EN_DEBUG: StringField<TimeType> = new StringField('externalName_en_DEBUG', TimeType, 'Edm.String');
  /**
   * Static representation of the [[externalNameEnGb]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_EN_GB: StringField<TimeType> = new StringField('externalName_en_GB', TimeType, 'Edm.String');
  /**
   * Static representation of the [[externalNameEnUs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_EN_US: StringField<TimeType> = new StringField('externalName_en_US', TimeType, 'Edm.String');
  /**
   * Static representation of the [[externalNameEsEs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_ES_ES: StringField<TimeType> = new StringField('externalName_es_ES', TimeType, 'Edm.String');
  /**
   * Static representation of the [[externalNameEsMx]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_ES_MX: StringField<TimeType> = new StringField('externalName_es_MX', TimeType, 'Edm.String');
  /**
   * Static representation of the [[externalNameFrCa]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_FR_CA: StringField<TimeType> = new StringField('externalName_fr_CA', TimeType, 'Edm.String');
  /**
   * Static representation of the [[externalNameFrFr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_FR_FR: StringField<TimeType> = new StringField('externalName_fr_FR', TimeType, 'Edm.String');
  /**
   * Static representation of the [[externalNameItIt]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_IT_IT: StringField<TimeType> = new StringField('externalName_it_IT', TimeType, 'Edm.String');
  /**
   * Static representation of the [[externalNameLocalized]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_LOCALIZED: StringField<TimeType> = new StringField('externalName_localized', TimeType, 'Edm.String');
  /**
   * Static representation of the [[externalNameNlNl]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_NL_NL: StringField<TimeType> = new StringField('externalName_nl_NL', TimeType, 'Edm.String');
  /**
   * Static representation of the [[externalNamePtBr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_PT_BR: StringField<TimeType> = new StringField('externalName_pt_BR', TimeType, 'Edm.String');
  /**
   * Static representation of the [[externalNameZhCn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_ZH_CN: StringField<TimeType> = new StringField('externalName_zh_CN', TimeType, 'Edm.String');
  /**
   * Static representation of the [[flexibleRequestingAllowed]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FLEXIBLE_REQUESTING_ALLOWED: BooleanField<TimeType> = new BooleanField('flexibleRequestingAllowed', TimeType, 'Edm.Boolean');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<TimeType> = new StringField('lastModifiedBy', TimeType, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<TimeType> = new DateField('lastModifiedDateTime', TimeType, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[loaEndEventReason]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LOA_END_EVENT_REASON: StringField<TimeType> = new StringField('loaEndEventReason', TimeType, 'Edm.String');
  /**
   * Static representation of the [[loaStartEventReason]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LOA_START_EVENT_REASON: StringField<TimeType> = new StringField('loaStartEventReason', TimeType, 'Edm.String');
  /**
   * Static representation of the [[maximumDurationInMonths]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MAXIMUM_DURATION_IN_MONTHS: BigNumberField<TimeType> = new BigNumberField('maximumDurationInMonths', TimeType, 'Edm.Int64');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<TimeType> = new StringField('mdfSystemRecordStatus', TimeType, 'Edm.String');
  /**
   * Static representation of the [[postingOrder]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const POSTING_ORDER: StringField<TimeType> = new StringField('postingOrder', TimeType, 'Edm.String');
  /**
   * Static representation of the [[postingPriority]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const POSTING_PRIORITY: StringField<TimeType> = new StringField('postingPriority', TimeType, 'Edm.String');
  /**
   * Static representation of the [[requestingOnNonWorkingDaysAllowed]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REQUESTING_ON_NON_WORKING_DAYS_ALLOWED: BooleanField<TimeType> = new BooleanField('requestingOnNonWorkingDaysAllowed', TimeType, 'Edm.Boolean');
  /**
   * Static representation of the [[undeterminedEndDateAllowed]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const UNDETERMINED_END_DATE_ALLOWED: BooleanField<TimeType> = new BooleanField('undeterminedEndDateAllowed', TimeType, 'Edm.Boolean');
  /**
   * Static representation of the [[unit]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const UNIT: StringField<TimeType> = new StringField('unit', TimeType, 'Edm.String');
  /**
   * Static representation of the [[workflowConfiguration]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WORKFLOW_CONFIGURATION: StringField<TimeType> = new StringField('workflowConfiguration', TimeType, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[absenceClassNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ABSENCE_CLASS_NAV: OneToOneLink<TimeType, MdfEnumValue> = new OneToOneLink('absenceClassNav', TimeType, MdfEnumValue);
  /**
   * Static representation of the one-to-one navigation property [[accrualRecalculationRelevanceNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACCRUAL_RECALCULATION_RELEVANCE_NAV: OneToOneLink<TimeType, MdfEnumValue> = new OneToOneLink('accrualRecalculationRelevanceNav', TimeType, MdfEnumValue);
  /**
   * Static representation of the one-to-one navigation property [[adminWorkflowNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADMIN_WORKFLOW_NAV: OneToOneLink<TimeType, FoWfConfig> = new OneToOneLink('adminWorkflowNav', TimeType, FoWfConfig);
  /**
   * Static representation of the one-to-one navigation property [[allocationStrategyNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ALLOCATION_STRATEGY_NAV: OneToOneLink<TimeType, MdfEnumValue> = new OneToOneLink('allocationStrategyNav', TimeType, MdfEnumValue);
  /**
   * Static representation of the one-to-one navigation property [[allowedFractionsUnitDayNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ALLOWED_FRACTIONS_UNIT_DAY_NAV: OneToOneLink<TimeType, MdfEnumValue> = new OneToOneLink('allowedFractionsUnitDayNav', TimeType, MdfEnumValue);
  /**
   * Static representation of the one-to-one navigation property [[allowedFractionsUnitHourNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ALLOWED_FRACTIONS_UNIT_HOUR_NAV: OneToOneLink<TimeType, MdfEnumValue> = new OneToOneLink('allowedFractionsUnitHourNav', TimeType, MdfEnumValue);
  /**
   * Static representation of the one-to-one navigation property [[balanceCalculationSettingNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BALANCE_CALCULATION_SETTING_NAV: OneToOneLink<TimeType, MdfEnumValue> = new OneToOneLink('balanceCalculationSettingNav', TimeType, MdfEnumValue);
  /**
   * Static representation of the one-to-one navigation property [[calculationMethodNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CALCULATION_METHOD_NAV: OneToOneLink<TimeType, MdfEnumValue> = new OneToOneLink('calculationMethodNav', TimeType, MdfEnumValue);
  /**
   * Static representation of the one-to-one navigation property [[categoryNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CATEGORY_NAV: OneToOneLink<TimeType, MdfEnumValue> = new OneToOneLink('categoryNav', TimeType, MdfEnumValue);
  /**
   * Static representation of the one-to-one navigation property [[countingMethodNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTING_METHOD_NAV: OneToOneLink<TimeType, AbsenceCountingMethod> = new OneToOneLink('countingMethodNav', TimeType, AbsenceCountingMethod);
  /**
   * Static representation of the one-to-one navigation property [[countryExtensionAus]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY_EXTENSION_AUS: OneToOneLink<TimeType, TimeTypeAus> = new OneToOneLink('countryExtensionAUS', TimeType, TimeTypeAus);
  /**
   * Static representation of the one-to-many navigation property [[countryNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY_NAV: Link<TimeType, Country> = new Link('countryNav', TimeType, Country);
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<TimeType, User> = new OneToOneLink('createdByNav', TimeType, User);
  /**
   * Static representation of the one-to-many navigation property [[externalNameTranslationTextNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_TRANSLATION_TEXT_NAV: Link<TimeType, MdfLocalizedValue> = new Link('externalNameTranslationTextNav', TimeType, MdfLocalizedValue);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<TimeType, User> = new OneToOneLink('lastModifiedByNav', TimeType, User);
  /**
   * Static representation of the one-to-many navigation property [[loaEndEventReasonNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LOA_END_EVENT_REASON_NAV: Link<TimeType, FoEventReason> = new Link('loaEndEventReasonNav', TimeType, FoEventReason);
  /**
   * Static representation of the one-to-many navigation property [[loaStartEventReasonNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LOA_START_EVENT_REASON_NAV: Link<TimeType, FoEventReason> = new Link('loaStartEventReasonNav', TimeType, FoEventReason);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<TimeType, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', TimeType, MdfEnumValue);
  /**
   * Static representation of the one-to-one navigation property [[postingOrderNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const POSTING_ORDER_NAV: OneToOneLink<TimeType, MdfEnumValue> = new OneToOneLink('postingOrderNav', TimeType, MdfEnumValue);
  /**
   * Static representation of the one-to-one navigation property [[postingPriorityNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const POSTING_PRIORITY_NAV: OneToOneLink<TimeType, MdfEnumValue> = new OneToOneLink('postingPriorityNav', TimeType, MdfEnumValue);
  /**
   * Static representation of the one-to-many navigation property [[timeAccountPostingRules]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TIME_ACCOUNT_POSTING_RULES: Link<TimeType, TimeAccountPostingRule> = new Link('timeAccountPostingRules', TimeType, TimeAccountPostingRule);
  /**
   * Static representation of the one-to-one navigation property [[unitNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const UNIT_NAV: OneToOneLink<TimeType, MdfEnumValue> = new OneToOneLink('unitNav', TimeType, MdfEnumValue);
  /**
   * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WF_REQUEST_NAV: Link<TimeType, WfRequest> = new Link('wfRequestNav', TimeType, WfRequest);
  /**
   * Static representation of the one-to-one navigation property [[workflowConfigurationNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WORKFLOW_CONFIGURATION_NAV: OneToOneLink<TimeType, FoWfConfig> = new OneToOneLink('workflowConfigurationNav', TimeType, FoWfConfig);
  /**
   * All fields of the TimeType entity.
   */
  export const _allFields: Array<StringField<TimeType> | BooleanField<TimeType> | BigNumberField<TimeType> | DateField<TimeType> | OneToOneLink<TimeType, MdfEnumValue> | OneToOneLink<TimeType, FoWfConfig> | OneToOneLink<TimeType, AbsenceCountingMethod> | OneToOneLink<TimeType, TimeTypeAus> | Link<TimeType, Country> | OneToOneLink<TimeType, User> | Link<TimeType, MdfLocalizedValue> | Link<TimeType, FoEventReason> | Link<TimeType, TimeAccountPostingRule> | Link<TimeType, WfRequest>> = [
    TimeType.ABSENCE_CLASS,
    TimeType.ABSENCE_RETENTION_GROUP,
    TimeType.ACCRUAL_RECALCULATION_RELEVANCE,
    TimeType.ACTIVATE_CANCELLATION_WORKFLOW,
    TimeType.ADMIN_WORKFLOW,
    TimeType.ALLOCATION_STRATEGY,
    TimeType.ALLOWED_FRACTIONS_UNIT_DAY,
    TimeType.ALLOWED_FRACTIONS_UNIT_HOUR,
    TimeType.ALLOWED_REQUESTING_INCREMENT,
    TimeType.BALANCE_CALCULATION_SETTING,
    TimeType.CALCULATION_METHOD,
    TimeType.CATEGORY,
    TimeType.COLLISION_GROUPING,
    TimeType.COUNTING_METHOD,
    TimeType.COUNTRY,
    TimeType.CREATED_BY,
    TimeType.CREATED_DATE_TIME,
    TimeType.EXTERNAL_CODE,
    TimeType.EXTERNAL_NAME_DE_DE,
    TimeType.EXTERNAL_NAME_DEFAULT_VALUE,
    TimeType.EXTERNAL_NAME_EN_DEBUG,
    TimeType.EXTERNAL_NAME_EN_GB,
    TimeType.EXTERNAL_NAME_EN_US,
    TimeType.EXTERNAL_NAME_ES_ES,
    TimeType.EXTERNAL_NAME_ES_MX,
    TimeType.EXTERNAL_NAME_FR_CA,
    TimeType.EXTERNAL_NAME_FR_FR,
    TimeType.EXTERNAL_NAME_IT_IT,
    TimeType.EXTERNAL_NAME_LOCALIZED,
    TimeType.EXTERNAL_NAME_NL_NL,
    TimeType.EXTERNAL_NAME_PT_BR,
    TimeType.EXTERNAL_NAME_ZH_CN,
    TimeType.FLEXIBLE_REQUESTING_ALLOWED,
    TimeType.LAST_MODIFIED_BY,
    TimeType.LAST_MODIFIED_DATE_TIME,
    TimeType.LOA_END_EVENT_REASON,
    TimeType.LOA_START_EVENT_REASON,
    TimeType.MAXIMUM_DURATION_IN_MONTHS,
    TimeType.MDF_SYSTEM_RECORD_STATUS,
    TimeType.POSTING_ORDER,
    TimeType.POSTING_PRIORITY,
    TimeType.REQUESTING_ON_NON_WORKING_DAYS_ALLOWED,
    TimeType.UNDETERMINED_END_DATE_ALLOWED,
    TimeType.UNIT,
    TimeType.WORKFLOW_CONFIGURATION,
    TimeType.ABSENCE_CLASS_NAV,
    TimeType.ACCRUAL_RECALCULATION_RELEVANCE_NAV,
    TimeType.ADMIN_WORKFLOW_NAV,
    TimeType.ALLOCATION_STRATEGY_NAV,
    TimeType.ALLOWED_FRACTIONS_UNIT_DAY_NAV,
    TimeType.ALLOWED_FRACTIONS_UNIT_HOUR_NAV,
    TimeType.BALANCE_CALCULATION_SETTING_NAV,
    TimeType.CALCULATION_METHOD_NAV,
    TimeType.CATEGORY_NAV,
    TimeType.COUNTING_METHOD_NAV,
    TimeType.COUNTRY_EXTENSION_AUS,
    TimeType.COUNTRY_NAV,
    TimeType.CREATED_BY_NAV,
    TimeType.EXTERNAL_NAME_TRANSLATION_TEXT_NAV,
    TimeType.LAST_MODIFIED_BY_NAV,
    TimeType.LOA_END_EVENT_REASON_NAV,
    TimeType.LOA_START_EVENT_REASON_NAV,
    TimeType.MDF_SYSTEM_RECORD_STATUS_NAV,
    TimeType.POSTING_ORDER_NAV,
    TimeType.POSTING_PRIORITY_NAV,
    TimeType.TIME_ACCOUNT_POSTING_RULES,
    TimeType.UNIT_NAV,
    TimeType.WF_REQUEST_NAV,
    TimeType.WORKFLOW_CONFIGURATION_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<TimeType> = new AllFields('*', TimeType);
  /**
   * All key fields of the TimeType entity.
   */
  export const _keyFields: Array<Selectable<TimeType>> = [TimeType.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property TimeType.
   */
  export const _keys: { [keys: string]: Selectable<TimeType> } = TimeType._keyFields.reduce((acc: { [keys: string]: Selectable<TimeType> }, field: Selectable<TimeType>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
