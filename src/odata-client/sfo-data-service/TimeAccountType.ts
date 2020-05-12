/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TimeAccountTypeRequestBuilder } from './TimeAccountTypeRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "TimeAccountType" of service "SFOData".
 */
export class TimeAccountType extends Entity implements TimeAccountTypeType {
  /**
   * Technical entity name for TimeAccountType.
   */
  static _entityName = 'TimeAccountType';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for TimeAccountType.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Account Booking Offset [Months].
   * @nullable
   */
  accountBookingOffsetInMonths?: BigNumber;
  /**
   * Account Creation Automation.
   * Maximum length: 255.
   * @nullable
   */
  accountCreationAutomationLevel?: string;
  /**
   * Account Valid From [Day].
   * @nullable
   */
  accountCreationDay?: BigNumber;
  /**
   * Account Valid From [Month].
   * @nullable
   */
  accountCreationMonth?: BigNumber;
  /**
   * Account Creation Offset [Months].
   * @nullable
   */
  accountCreationOffsetInMonths?: BigNumber;
  /**
   * Account Creation Start Date.
   * Maximum length: 255.
   * @nullable
   */
  accountCreationReferenceDate?: string;
  /**
   * Account Detail Retention Group.
   * Maximum length: 128.
   * @nullable
   */
  accountDetailRetentionGroup?: string;
  /**
   * Account Retention Group.
   * Maximum length: 128.
   * @nullable
   */
  accountRetentionGroup?: string;
  /**
   * Level Of Accrual Automation.
   * Maximum length: 255.
   * @nullable
   */
  accrualAutomationLevel?: string;
  /**
   * Accruals Based On.
   * Maximum length: 255.
   * @nullable
   */
  accrualCalculationMethod?: string;
  /**
   * Accrual Creation Offset [Days].
   * @nullable
   */
  accrualCreationOffset?: BigNumber;
  /**
   * Accrual Frequency Period.
   * Maximum length: 255.
   * @nullable
   */
  accrualFrequency?: string;
  /**
   * Frequency Start Date.
   * @nullable
   */
  accrualFrequencyStartDate?: Moment;
  /**
   * Start Day Of Accrual Period.
   * @nullable
   */
  accrualPeriodStartDay?: BigNumber;
  /**
   * Start Month Of Accrual Period.
   * @nullable
   */
  accrualPeriodStartMonth?: BigNumber;
  /**
   * Accrual Recalculation Posting Method.
   * Maximum length: 255.
   * @nullable
   */
  accrualRecalculationPostingMethod?: string;
  /**
   * Accrual Rule.
   * Maximum length: 128.
   * @nullable
   */
  accrualRule?: string;
  /**
   * Accrual Transfer Date Rule.
   * Maximum length: 128.
   * @nullable
   */
  accrualTransferDateRule?: string;
  /**
   * Accrual Transfer Rule.
   * Maximum length: 128.
   * @nullable
   */
  accrualTransferRule?: string;
  /**
   * Time From Hire To First Accrual.
   * @nullable
   */
  accrualWaitingPeriod?: BigNumber;
  /**
   * Time Unit From Hire To First Accrual.
   * Maximum length: 255.
   * @nullable
   */
  accrualWaitingPeriodUnit?: string;
  /**
   * Advances Allowed.
   * @nullable
   */
  advancesAllowed?: boolean;
  /**
   * Allow Payout With Simulation.
   * Maximum length: 255.
   * @nullable
   */
  allowPayoutWithSimulation?: string;
  /**
   * Do Not Consider Pending Requests When Calculating Balances.
   * @nullable
   */
  calculateSnapshotApprovedAbsenceBalance?: boolean;
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
   * Account Creation Type.
   * Maximum length: 255.
   * @nullable
   */
  creation?: string;
  /**
   * Entitlement Method.
   * Maximum length: 255.
   * @nullable
   */
  entitlementMethod?: string;
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
   * Hire Rule.
   * Maximum length: 128.
   * @nullable
   */
  hireRule?: string;
  /**
   * Initial Accrual Transfer Date Rule.
   * Maximum length: 128.
   * @nullable
   */
  initialAccrualTransferDateRule?: string;
  /**
   * Flexible Account Start Date Rule.
   * Maximum length: 128.
   * @nullable
   */
  initialFlexibleAccountStartDateRule?: string;
  /**
   * Interim Account Update Rule.
   * Maximum length: 128.
   * @nullable
   */
  interimRule?: string;
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
   * Level Of Simulation Precision.
   * Maximum length: 255.
   * @nullable
   */
  levelOfSimulationPrecision?: string;
  /**
   * maximumSimulationHorizonInMonths.
   * @nullable
   */
  maximumSimulationHorizonInMonths?: BigNumber;
  /**
   * Record Status.
   * Maximum length: 255.
   * @nullable
   */
  mdfSystemRecordStatus?: string;
  /**
   * Balance Cannot Fall Below.
   * @nullable
   */
  minimumBalanceAllowed?: BigNumber;
  /**
   * Pay Component.
   * Maximum length: 32.
   * @nullable
   */
  payComponent?: string;
  /**
   * Separate Pay Component for Accrual.
   * Maximum length: 32.
   * @nullable
   */
  payComponentAccrualSeparated?: string;
  /**
   * Pay Component Group.
   * Maximum length: 32.
   * @nullable
   */
  payComponentGroup?: string;
  /**
   * Pay Component on Termination.
   * Maximum length: 32.
   * @nullable
   */
  payComponentTermination?: string;
  /**
   * Separate Pay Component for Accrual on Termination.
   * Maximum length: 32.
   * @nullable
   */
  payComponentTerminationAccrualSeparated?: string;
  /**
   * Payout Eligibility.
   * Maximum length: 255.
   * @nullable
   */
  payoutEligibility?: string;
  /**
   * Period-End Processing Automation.
   * Maximum length: 255.
   * @nullable
   */
  pepCalendarAutomationLevel?: string;
  /**
   * Period-End Processing Rule.
   * Maximum length: 128.
   * @nullable
   */
  periodEndProcessingRule?: string;
  /**
   * Periodic Time Account Update Profile.
   * Maximum length: 128.
   * @nullable
   */
  periodicTimeAccountUpdateProfile?: string;
  /**
   * Posting Order.
   * Maximum length: 255.
   * @nullable
   */
  postingOrder?: string;
  /**
   * Second Accrual Booking Offset [Days].
   * @nullable
   */
  secondAccrualCreationOffset?: BigNumber;
  /**
   * Simulate Accruals.
   * @nullable
   */
  simulateAccruals?: boolean;
  /**
   * Simulation Rule For Recorded Times.
   * Maximum length: 128.
   * @nullable
   */
  simulationRule?: string;
  /**
   * Time Account Snapshots Allowed.
   * @nullable
   */
  snapshotsAllowed?: boolean;
  /**
   * Termination Rule.
   * Maximum length: 128.
   * @nullable
   */
  terminationRule?: string;
  /**
   * Termination Rule Data Effective Date.
   * Maximum length: 255.
   * @nullable
   */
  terminationRuleDataEffectiveDate?: string;
  /**
   * Payout Profile.
   * Maximum length: 128.
   * @nullable
   */
  timeAccountPayoutProfile?: string;
  /**
   * Unit.
   * Maximum length: 255.
   * @nullable
   */
  unit?: string;
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  accountCreationAutomationLevelNav!: MdfEnumValue;
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  accountCreationReferenceDateNav!: MdfEnumValue;
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  accrualAutomationLevelNav!: MdfEnumValue;
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  accrualCalculationMethodNav!: MdfEnumValue;
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  accrualFrequencyNav!: MdfEnumValue;
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  accrualRecalculationPostingMethodNav!: MdfEnumValue;
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  accrualWaitingPeriodUnitNav!: MdfEnumValue;
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  allowPayoutWithSimulationNav!: MdfEnumValue;
  /**
   * One-to-many navigation property to the [[Country]] entity.
   */
  countryNav!: Country[];
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  createdByNav!: User;
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  creationNav!: MdfEnumValue;
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  entitlementMethodNav!: MdfEnumValue;
  /**
   * One-to-many navigation property to the [[MdfLocalizedValue]] entity.
   */
  externalNameTranslationTextNav!: MdfLocalizedValue[];
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  lastModifiedByNav!: User;
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  levelOfSimulationPrecisionNav!: MdfEnumValue;
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  mdfSystemRecordStatusNav!: MdfEnumValue;
  /**
   * One-to-many navigation property to the [[FoPayComponent]] entity.
   */
  payComponentAccrualSeparatedNav!: FoPayComponent[];
  /**
   * One-to-many navigation property to the [[FoPayComponentGroup]] entity.
   */
  payComponentGroupNav!: FoPayComponentGroup[];
  /**
   * One-to-many navigation property to the [[FoPayComponent]] entity.
   */
  payComponentNav!: FoPayComponent[];
  /**
   * One-to-many navigation property to the [[FoPayComponent]] entity.
   */
  payComponentTerminationAccrualSeparatedNav!: FoPayComponent[];
  /**
   * One-to-many navigation property to the [[FoPayComponent]] entity.
   */
  payComponentTerminationNav!: FoPayComponent[];
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  payoutEligibilityNav!: MdfEnumValue;
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  pepCalendarAutomationLevelNav!: MdfEnumValue;
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  postingOrderNav!: MdfEnumValue;
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  terminationRuleDataEffectiveDateNav!: MdfEnumValue;
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  unitNav!: MdfEnumValue;
  /**
   * One-to-many navigation property to the [[WfRequest]] entity.
   */
  wfRequestNav!: WfRequest[];

  /**
   * Returns an entity builder to construct instances `TimeAccountType`.
   * @returns A builder that constructs instances of entity type `TimeAccountType`.
   */
  static builder(): EntityBuilderType<TimeAccountType, TimeAccountTypeTypeForceMandatory> {
    return Entity.entityBuilder(TimeAccountType);
  }

  /**
   * Returns a request builder to construct requests for operations on the `TimeAccountType` entity type.
   * @returns A `TimeAccountType` request builder.
   */
  static requestBuilder(): TimeAccountTypeRequestBuilder {
    return new TimeAccountTypeRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `TimeAccountType`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `TimeAccountType`.
   */
  static customField(fieldName: string): CustomField<TimeAccountType> {
    return Entity.customFieldSelector(fieldName, TimeAccountType);
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
import { Country, CountryType } from './Country';
import { User, UserType } from './User';
import { MdfLocalizedValue, MdfLocalizedValueType } from './MdfLocalizedValue';
import { FoPayComponent, FoPayComponentType } from './FoPayComponent';
import { FoPayComponentGroup, FoPayComponentGroupType } from './FoPayComponentGroup';
import { WfRequest, WfRequestType } from './WfRequest';

export interface TimeAccountTypeType {
  accountBookingOffsetInMonths?: BigNumber;
  accountCreationAutomationLevel?: string;
  accountCreationDay?: BigNumber;
  accountCreationMonth?: BigNumber;
  accountCreationOffsetInMonths?: BigNumber;
  accountCreationReferenceDate?: string;
  accountDetailRetentionGroup?: string;
  accountRetentionGroup?: string;
  accrualAutomationLevel?: string;
  accrualCalculationMethod?: string;
  accrualCreationOffset?: BigNumber;
  accrualFrequency?: string;
  accrualFrequencyStartDate?: Moment;
  accrualPeriodStartDay?: BigNumber;
  accrualPeriodStartMonth?: BigNumber;
  accrualRecalculationPostingMethod?: string;
  accrualRule?: string;
  accrualTransferDateRule?: string;
  accrualTransferRule?: string;
  accrualWaitingPeriod?: BigNumber;
  accrualWaitingPeriodUnit?: string;
  advancesAllowed?: boolean;
  allowPayoutWithSimulation?: string;
  calculateSnapshotApprovedAbsenceBalance?: boolean;
  country?: string;
  createdBy?: string;
  createdDateTime?: Moment;
  creation?: string;
  entitlementMethod?: string;
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
  hireRule?: string;
  initialAccrualTransferDateRule?: string;
  initialFlexibleAccountStartDateRule?: string;
  interimRule?: string;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  levelOfSimulationPrecision?: string;
  maximumSimulationHorizonInMonths?: BigNumber;
  mdfSystemRecordStatus?: string;
  minimumBalanceAllowed?: BigNumber;
  payComponent?: string;
  payComponentAccrualSeparated?: string;
  payComponentGroup?: string;
  payComponentTermination?: string;
  payComponentTerminationAccrualSeparated?: string;
  payoutEligibility?: string;
  pepCalendarAutomationLevel?: string;
  periodEndProcessingRule?: string;
  periodicTimeAccountUpdateProfile?: string;
  postingOrder?: string;
  secondAccrualCreationOffset?: BigNumber;
  simulateAccruals?: boolean;
  simulationRule?: string;
  snapshotsAllowed?: boolean;
  terminationRule?: string;
  terminationRuleDataEffectiveDate?: string;
  timeAccountPayoutProfile?: string;
  unit?: string;
  accountCreationAutomationLevelNav: MdfEnumValueType;
  accountCreationReferenceDateNav: MdfEnumValueType;
  accrualAutomationLevelNav: MdfEnumValueType;
  accrualCalculationMethodNav: MdfEnumValueType;
  accrualFrequencyNav: MdfEnumValueType;
  accrualRecalculationPostingMethodNav: MdfEnumValueType;
  accrualWaitingPeriodUnitNav: MdfEnumValueType;
  allowPayoutWithSimulationNav: MdfEnumValueType;
  countryNav: CountryType[];
  createdByNav: UserType;
  creationNav: MdfEnumValueType;
  entitlementMethodNav: MdfEnumValueType;
  externalNameTranslationTextNav: MdfLocalizedValueType[];
  lastModifiedByNav: UserType;
  levelOfSimulationPrecisionNav: MdfEnumValueType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  payComponentAccrualSeparatedNav: FoPayComponentType[];
  payComponentGroupNav: FoPayComponentGroupType[];
  payComponentNav: FoPayComponentType[];
  payComponentTerminationAccrualSeparatedNav: FoPayComponentType[];
  payComponentTerminationNav: FoPayComponentType[];
  payoutEligibilityNav: MdfEnumValueType;
  pepCalendarAutomationLevelNav: MdfEnumValueType;
  postingOrderNav: MdfEnumValueType;
  terminationRuleDataEffectiveDateNav: MdfEnumValueType;
  unitNav: MdfEnumValueType;
  wfRequestNav: WfRequestType[];
}

export interface TimeAccountTypeTypeForceMandatory {
  accountBookingOffsetInMonths: BigNumber;
  accountCreationAutomationLevel: string;
  accountCreationDay: BigNumber;
  accountCreationMonth: BigNumber;
  accountCreationOffsetInMonths: BigNumber;
  accountCreationReferenceDate: string;
  accountDetailRetentionGroup: string;
  accountRetentionGroup: string;
  accrualAutomationLevel: string;
  accrualCalculationMethod: string;
  accrualCreationOffset: BigNumber;
  accrualFrequency: string;
  accrualFrequencyStartDate: Moment;
  accrualPeriodStartDay: BigNumber;
  accrualPeriodStartMonth: BigNumber;
  accrualRecalculationPostingMethod: string;
  accrualRule: string;
  accrualTransferDateRule: string;
  accrualTransferRule: string;
  accrualWaitingPeriod: BigNumber;
  accrualWaitingPeriodUnit: string;
  advancesAllowed: boolean;
  allowPayoutWithSimulation: string;
  calculateSnapshotApprovedAbsenceBalance: boolean;
  country: string;
  createdBy: string;
  createdDateTime: Moment;
  creation: string;
  entitlementMethod: string;
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
  hireRule: string;
  initialAccrualTransferDateRule: string;
  initialFlexibleAccountStartDateRule: string;
  interimRule: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  levelOfSimulationPrecision: string;
  maximumSimulationHorizonInMonths: BigNumber;
  mdfSystemRecordStatus: string;
  minimumBalanceAllowed: BigNumber;
  payComponent: string;
  payComponentAccrualSeparated: string;
  payComponentGroup: string;
  payComponentTermination: string;
  payComponentTerminationAccrualSeparated: string;
  payoutEligibility: string;
  pepCalendarAutomationLevel: string;
  periodEndProcessingRule: string;
  periodicTimeAccountUpdateProfile: string;
  postingOrder: string;
  secondAccrualCreationOffset: BigNumber;
  simulateAccruals: boolean;
  simulationRule: string;
  snapshotsAllowed: boolean;
  terminationRule: string;
  terminationRuleDataEffectiveDate: string;
  timeAccountPayoutProfile: string;
  unit: string;
  accountCreationAutomationLevelNav: MdfEnumValueType;
  accountCreationReferenceDateNav: MdfEnumValueType;
  accrualAutomationLevelNav: MdfEnumValueType;
  accrualCalculationMethodNav: MdfEnumValueType;
  accrualFrequencyNav: MdfEnumValueType;
  accrualRecalculationPostingMethodNav: MdfEnumValueType;
  accrualWaitingPeriodUnitNav: MdfEnumValueType;
  allowPayoutWithSimulationNav: MdfEnumValueType;
  countryNav: CountryType[];
  createdByNav: UserType;
  creationNav: MdfEnumValueType;
  entitlementMethodNav: MdfEnumValueType;
  externalNameTranslationTextNav: MdfLocalizedValueType[];
  lastModifiedByNav: UserType;
  levelOfSimulationPrecisionNav: MdfEnumValueType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  payComponentAccrualSeparatedNav: FoPayComponentType[];
  payComponentGroupNav: FoPayComponentGroupType[];
  payComponentNav: FoPayComponentType[];
  payComponentTerminationAccrualSeparatedNav: FoPayComponentType[];
  payComponentTerminationNav: FoPayComponentType[];
  payoutEligibilityNav: MdfEnumValueType;
  pepCalendarAutomationLevelNav: MdfEnumValueType;
  postingOrderNav: MdfEnumValueType;
  terminationRuleDataEffectiveDateNav: MdfEnumValueType;
  unitNav: MdfEnumValueType;
  wfRequestNav: WfRequestType[];
}

export namespace TimeAccountType {
  /**
   * Static representation of the [[accountBookingOffsetInMonths]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACCOUNT_BOOKING_OFFSET_IN_MONTHS: BigNumberField<TimeAccountType> = new BigNumberField('accountBookingOffsetInMonths', TimeAccountType, 'Edm.Int64');
  /**
   * Static representation of the [[accountCreationAutomationLevel]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACCOUNT_CREATION_AUTOMATION_LEVEL: StringField<TimeAccountType> = new StringField('accountCreationAutomationLevel', TimeAccountType, 'Edm.String');
  /**
   * Static representation of the [[accountCreationDay]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACCOUNT_CREATION_DAY: BigNumberField<TimeAccountType> = new BigNumberField('accountCreationDay', TimeAccountType, 'Edm.Int64');
  /**
   * Static representation of the [[accountCreationMonth]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACCOUNT_CREATION_MONTH: BigNumberField<TimeAccountType> = new BigNumberField('accountCreationMonth', TimeAccountType, 'Edm.Int64');
  /**
   * Static representation of the [[accountCreationOffsetInMonths]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACCOUNT_CREATION_OFFSET_IN_MONTHS: BigNumberField<TimeAccountType> = new BigNumberField('accountCreationOffsetInMonths', TimeAccountType, 'Edm.Int64');
  /**
   * Static representation of the [[accountCreationReferenceDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACCOUNT_CREATION_REFERENCE_DATE: StringField<TimeAccountType> = new StringField('accountCreationReferenceDate', TimeAccountType, 'Edm.String');
  /**
   * Static representation of the [[accountDetailRetentionGroup]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACCOUNT_DETAIL_RETENTION_GROUP: StringField<TimeAccountType> = new StringField('accountDetailRetentionGroup', TimeAccountType, 'Edm.String');
  /**
   * Static representation of the [[accountRetentionGroup]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACCOUNT_RETENTION_GROUP: StringField<TimeAccountType> = new StringField('accountRetentionGroup', TimeAccountType, 'Edm.String');
  /**
   * Static representation of the [[accrualAutomationLevel]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACCRUAL_AUTOMATION_LEVEL: StringField<TimeAccountType> = new StringField('accrualAutomationLevel', TimeAccountType, 'Edm.String');
  /**
   * Static representation of the [[accrualCalculationMethod]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACCRUAL_CALCULATION_METHOD: StringField<TimeAccountType> = new StringField('accrualCalculationMethod', TimeAccountType, 'Edm.String');
  /**
   * Static representation of the [[accrualCreationOffset]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACCRUAL_CREATION_OFFSET: BigNumberField<TimeAccountType> = new BigNumberField('accrualCreationOffset', TimeAccountType, 'Edm.Int64');
  /**
   * Static representation of the [[accrualFrequency]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACCRUAL_FREQUENCY: StringField<TimeAccountType> = new StringField('accrualFrequency', TimeAccountType, 'Edm.String');
  /**
   * Static representation of the [[accrualFrequencyStartDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACCRUAL_FREQUENCY_START_DATE: DateField<TimeAccountType> = new DateField('accrualFrequencyStartDate', TimeAccountType, 'Edm.DateTime');
  /**
   * Static representation of the [[accrualPeriodStartDay]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACCRUAL_PERIOD_START_DAY: BigNumberField<TimeAccountType> = new BigNumberField('accrualPeriodStartDay', TimeAccountType, 'Edm.Int64');
  /**
   * Static representation of the [[accrualPeriodStartMonth]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACCRUAL_PERIOD_START_MONTH: BigNumberField<TimeAccountType> = new BigNumberField('accrualPeriodStartMonth', TimeAccountType, 'Edm.Int64');
  /**
   * Static representation of the [[accrualRecalculationPostingMethod]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACCRUAL_RECALCULATION_POSTING_METHOD: StringField<TimeAccountType> = new StringField('accrualRecalculationPostingMethod', TimeAccountType, 'Edm.String');
  /**
   * Static representation of the [[accrualRule]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACCRUAL_RULE: StringField<TimeAccountType> = new StringField('accrualRule', TimeAccountType, 'Edm.String');
  /**
   * Static representation of the [[accrualTransferDateRule]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACCRUAL_TRANSFER_DATE_RULE: StringField<TimeAccountType> = new StringField('accrualTransferDateRule', TimeAccountType, 'Edm.String');
  /**
   * Static representation of the [[accrualTransferRule]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACCRUAL_TRANSFER_RULE: StringField<TimeAccountType> = new StringField('accrualTransferRule', TimeAccountType, 'Edm.String');
  /**
   * Static representation of the [[accrualWaitingPeriod]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACCRUAL_WAITING_PERIOD: BigNumberField<TimeAccountType> = new BigNumberField('accrualWaitingPeriod', TimeAccountType, 'Edm.Int64');
  /**
   * Static representation of the [[accrualWaitingPeriodUnit]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACCRUAL_WAITING_PERIOD_UNIT: StringField<TimeAccountType> = new StringField('accrualWaitingPeriodUnit', TimeAccountType, 'Edm.String');
  /**
   * Static representation of the [[advancesAllowed]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADVANCES_ALLOWED: BooleanField<TimeAccountType> = new BooleanField('advancesAllowed', TimeAccountType, 'Edm.Boolean');
  /**
   * Static representation of the [[allowPayoutWithSimulation]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ALLOW_PAYOUT_WITH_SIMULATION: StringField<TimeAccountType> = new StringField('allowPayoutWithSimulation', TimeAccountType, 'Edm.String');
  /**
   * Static representation of the [[calculateSnapshotApprovedAbsenceBalance]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CALCULATE_SNAPSHOT_APPROVED_ABSENCE_BALANCE: BooleanField<TimeAccountType> = new BooleanField('calculateSnapshotApprovedAbsenceBalance', TimeAccountType, 'Edm.Boolean');
  /**
   * Static representation of the [[country]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY: StringField<TimeAccountType> = new StringField('country', TimeAccountType, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<TimeAccountType> = new StringField('createdBy', TimeAccountType, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<TimeAccountType> = new DateField('createdDateTime', TimeAccountType, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[creation]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATION: StringField<TimeAccountType> = new StringField('creation', TimeAccountType, 'Edm.String');
  /**
   * Static representation of the [[entitlementMethod]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ENTITLEMENT_METHOD: StringField<TimeAccountType> = new StringField('entitlementMethod', TimeAccountType, 'Edm.String');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: StringField<TimeAccountType> = new StringField('externalCode', TimeAccountType, 'Edm.String');
  /**
   * Static representation of the [[externalNameDeDe]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_DE_DE: StringField<TimeAccountType> = new StringField('externalName_de_DE', TimeAccountType, 'Edm.String');
  /**
   * Static representation of the [[externalNameDefaultValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_DEFAULT_VALUE: StringField<TimeAccountType> = new StringField('externalName_defaultValue', TimeAccountType, 'Edm.String');
  /**
   * Static representation of the [[externalNameEnDebug]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_EN_DEBUG: StringField<TimeAccountType> = new StringField('externalName_en_DEBUG', TimeAccountType, 'Edm.String');
  /**
   * Static representation of the [[externalNameEnGb]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_EN_GB: StringField<TimeAccountType> = new StringField('externalName_en_GB', TimeAccountType, 'Edm.String');
  /**
   * Static representation of the [[externalNameEnUs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_EN_US: StringField<TimeAccountType> = new StringField('externalName_en_US', TimeAccountType, 'Edm.String');
  /**
   * Static representation of the [[externalNameEsEs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_ES_ES: StringField<TimeAccountType> = new StringField('externalName_es_ES', TimeAccountType, 'Edm.String');
  /**
   * Static representation of the [[externalNameEsMx]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_ES_MX: StringField<TimeAccountType> = new StringField('externalName_es_MX', TimeAccountType, 'Edm.String');
  /**
   * Static representation of the [[externalNameFrCa]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_FR_CA: StringField<TimeAccountType> = new StringField('externalName_fr_CA', TimeAccountType, 'Edm.String');
  /**
   * Static representation of the [[externalNameFrFr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_FR_FR: StringField<TimeAccountType> = new StringField('externalName_fr_FR', TimeAccountType, 'Edm.String');
  /**
   * Static representation of the [[externalNameItIt]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_IT_IT: StringField<TimeAccountType> = new StringField('externalName_it_IT', TimeAccountType, 'Edm.String');
  /**
   * Static representation of the [[externalNameLocalized]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_LOCALIZED: StringField<TimeAccountType> = new StringField('externalName_localized', TimeAccountType, 'Edm.String');
  /**
   * Static representation of the [[externalNameNlNl]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_NL_NL: StringField<TimeAccountType> = new StringField('externalName_nl_NL', TimeAccountType, 'Edm.String');
  /**
   * Static representation of the [[externalNamePtBr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_PT_BR: StringField<TimeAccountType> = new StringField('externalName_pt_BR', TimeAccountType, 'Edm.String');
  /**
   * Static representation of the [[externalNameZhCn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_ZH_CN: StringField<TimeAccountType> = new StringField('externalName_zh_CN', TimeAccountType, 'Edm.String');
  /**
   * Static representation of the [[hireRule]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HIRE_RULE: StringField<TimeAccountType> = new StringField('hireRule', TimeAccountType, 'Edm.String');
  /**
   * Static representation of the [[initialAccrualTransferDateRule]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INITIAL_ACCRUAL_TRANSFER_DATE_RULE: StringField<TimeAccountType> = new StringField('initialAccrualTransferDateRule', TimeAccountType, 'Edm.String');
  /**
   * Static representation of the [[initialFlexibleAccountStartDateRule]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INITIAL_FLEXIBLE_ACCOUNT_START_DATE_RULE: StringField<TimeAccountType> = new StringField('initialFlexibleAccountStartDateRule', TimeAccountType, 'Edm.String');
  /**
   * Static representation of the [[interimRule]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INTERIM_RULE: StringField<TimeAccountType> = new StringField('interimRule', TimeAccountType, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<TimeAccountType> = new StringField('lastModifiedBy', TimeAccountType, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<TimeAccountType> = new DateField('lastModifiedDateTime', TimeAccountType, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[levelOfSimulationPrecision]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LEVEL_OF_SIMULATION_PRECISION: StringField<TimeAccountType> = new StringField('levelOfSimulationPrecision', TimeAccountType, 'Edm.String');
  /**
   * Static representation of the [[maximumSimulationHorizonInMonths]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MAXIMUM_SIMULATION_HORIZON_IN_MONTHS: BigNumberField<TimeAccountType> = new BigNumberField('maximumSimulationHorizonInMonths', TimeAccountType, 'Edm.Int64');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<TimeAccountType> = new StringField('mdfSystemRecordStatus', TimeAccountType, 'Edm.String');
  /**
   * Static representation of the [[minimumBalanceAllowed]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MINIMUM_BALANCE_ALLOWED: BigNumberField<TimeAccountType> = new BigNumberField('minimumBalanceAllowed', TimeAccountType, 'Edm.Decimal');
  /**
   * Static representation of the [[payComponent]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAY_COMPONENT: StringField<TimeAccountType> = new StringField('payComponent', TimeAccountType, 'Edm.String');
  /**
   * Static representation of the [[payComponentAccrualSeparated]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAY_COMPONENT_ACCRUAL_SEPARATED: StringField<TimeAccountType> = new StringField('payComponentAccrualSeparated', TimeAccountType, 'Edm.String');
  /**
   * Static representation of the [[payComponentGroup]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAY_COMPONENT_GROUP: StringField<TimeAccountType> = new StringField('payComponentGroup', TimeAccountType, 'Edm.String');
  /**
   * Static representation of the [[payComponentTermination]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAY_COMPONENT_TERMINATION: StringField<TimeAccountType> = new StringField('payComponentTermination', TimeAccountType, 'Edm.String');
  /**
   * Static representation of the [[payComponentTerminationAccrualSeparated]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAY_COMPONENT_TERMINATION_ACCRUAL_SEPARATED: StringField<TimeAccountType> = new StringField('payComponentTerminationAccrualSeparated', TimeAccountType, 'Edm.String');
  /**
   * Static representation of the [[payoutEligibility]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYOUT_ELIGIBILITY: StringField<TimeAccountType> = new StringField('payoutEligibility', TimeAccountType, 'Edm.String');
  /**
   * Static representation of the [[pepCalendarAutomationLevel]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PEP_CALENDAR_AUTOMATION_LEVEL: StringField<TimeAccountType> = new StringField('pepCalendarAutomationLevel', TimeAccountType, 'Edm.String');
  /**
   * Static representation of the [[periodEndProcessingRule]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PERIOD_END_PROCESSING_RULE: StringField<TimeAccountType> = new StringField('periodEndProcessingRule', TimeAccountType, 'Edm.String');
  /**
   * Static representation of the [[periodicTimeAccountUpdateProfile]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PERIODIC_TIME_ACCOUNT_UPDATE_PROFILE: StringField<TimeAccountType> = new StringField('periodicTimeAccountUpdateProfile', TimeAccountType, 'Edm.String');
  /**
   * Static representation of the [[postingOrder]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const POSTING_ORDER: StringField<TimeAccountType> = new StringField('postingOrder', TimeAccountType, 'Edm.String');
  /**
   * Static representation of the [[secondAccrualCreationOffset]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SECOND_ACCRUAL_CREATION_OFFSET: BigNumberField<TimeAccountType> = new BigNumberField('secondAccrualCreationOffset', TimeAccountType, 'Edm.Int64');
  /**
   * Static representation of the [[simulateAccruals]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SIMULATE_ACCRUALS: BooleanField<TimeAccountType> = new BooleanField('simulateAccruals', TimeAccountType, 'Edm.Boolean');
  /**
   * Static representation of the [[simulationRule]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SIMULATION_RULE: StringField<TimeAccountType> = new StringField('simulationRule', TimeAccountType, 'Edm.String');
  /**
   * Static representation of the [[snapshotsAllowed]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SNAPSHOTS_ALLOWED: BooleanField<TimeAccountType> = new BooleanField('snapshotsAllowed', TimeAccountType, 'Edm.Boolean');
  /**
   * Static representation of the [[terminationRule]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TERMINATION_RULE: StringField<TimeAccountType> = new StringField('terminationRule', TimeAccountType, 'Edm.String');
  /**
   * Static representation of the [[terminationRuleDataEffectiveDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TERMINATION_RULE_DATA_EFFECTIVE_DATE: StringField<TimeAccountType> = new StringField('terminationRuleDataEffectiveDate', TimeAccountType, 'Edm.String');
  /**
   * Static representation of the [[timeAccountPayoutProfile]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TIME_ACCOUNT_PAYOUT_PROFILE: StringField<TimeAccountType> = new StringField('timeAccountPayoutProfile', TimeAccountType, 'Edm.String');
  /**
   * Static representation of the [[unit]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const UNIT: StringField<TimeAccountType> = new StringField('unit', TimeAccountType, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[accountCreationAutomationLevelNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACCOUNT_CREATION_AUTOMATION_LEVEL_NAV: OneToOneLink<TimeAccountType, MdfEnumValue> = new OneToOneLink('accountCreationAutomationLevelNav', TimeAccountType, MdfEnumValue);
  /**
   * Static representation of the one-to-one navigation property [[accountCreationReferenceDateNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACCOUNT_CREATION_REFERENCE_DATE_NAV: OneToOneLink<TimeAccountType, MdfEnumValue> = new OneToOneLink('accountCreationReferenceDateNav', TimeAccountType, MdfEnumValue);
  /**
   * Static representation of the one-to-one navigation property [[accrualAutomationLevelNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACCRUAL_AUTOMATION_LEVEL_NAV: OneToOneLink<TimeAccountType, MdfEnumValue> = new OneToOneLink('accrualAutomationLevelNav', TimeAccountType, MdfEnumValue);
  /**
   * Static representation of the one-to-one navigation property [[accrualCalculationMethodNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACCRUAL_CALCULATION_METHOD_NAV: OneToOneLink<TimeAccountType, MdfEnumValue> = new OneToOneLink('accrualCalculationMethodNav', TimeAccountType, MdfEnumValue);
  /**
   * Static representation of the one-to-one navigation property [[accrualFrequencyNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACCRUAL_FREQUENCY_NAV: OneToOneLink<TimeAccountType, MdfEnumValue> = new OneToOneLink('accrualFrequencyNav', TimeAccountType, MdfEnumValue);
  /**
   * Static representation of the one-to-one navigation property [[accrualRecalculationPostingMethodNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACCRUAL_RECALCULATION_POSTING_METHOD_NAV: OneToOneLink<TimeAccountType, MdfEnumValue> = new OneToOneLink('accrualRecalculationPostingMethodNav', TimeAccountType, MdfEnumValue);
  /**
   * Static representation of the one-to-one navigation property [[accrualWaitingPeriodUnitNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACCRUAL_WAITING_PERIOD_UNIT_NAV: OneToOneLink<TimeAccountType, MdfEnumValue> = new OneToOneLink('accrualWaitingPeriodUnitNav', TimeAccountType, MdfEnumValue);
  /**
   * Static representation of the one-to-one navigation property [[allowPayoutWithSimulationNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ALLOW_PAYOUT_WITH_SIMULATION_NAV: OneToOneLink<TimeAccountType, MdfEnumValue> = new OneToOneLink('allowPayoutWithSimulationNav', TimeAccountType, MdfEnumValue);
  /**
   * Static representation of the one-to-many navigation property [[countryNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY_NAV: Link<TimeAccountType, Country> = new Link('countryNav', TimeAccountType, Country);
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<TimeAccountType, User> = new OneToOneLink('createdByNav', TimeAccountType, User);
  /**
   * Static representation of the one-to-one navigation property [[creationNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATION_NAV: OneToOneLink<TimeAccountType, MdfEnumValue> = new OneToOneLink('creationNav', TimeAccountType, MdfEnumValue);
  /**
   * Static representation of the one-to-one navigation property [[entitlementMethodNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ENTITLEMENT_METHOD_NAV: OneToOneLink<TimeAccountType, MdfEnumValue> = new OneToOneLink('entitlementMethodNav', TimeAccountType, MdfEnumValue);
  /**
   * Static representation of the one-to-many navigation property [[externalNameTranslationTextNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_TRANSLATION_TEXT_NAV: Link<TimeAccountType, MdfLocalizedValue> = new Link('externalNameTranslationTextNav', TimeAccountType, MdfLocalizedValue);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<TimeAccountType, User> = new OneToOneLink('lastModifiedByNav', TimeAccountType, User);
  /**
   * Static representation of the one-to-one navigation property [[levelOfSimulationPrecisionNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LEVEL_OF_SIMULATION_PRECISION_NAV: OneToOneLink<TimeAccountType, MdfEnumValue> = new OneToOneLink('levelOfSimulationPrecisionNav', TimeAccountType, MdfEnumValue);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<TimeAccountType, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', TimeAccountType, MdfEnumValue);
  /**
   * Static representation of the one-to-many navigation property [[payComponentAccrualSeparatedNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAY_COMPONENT_ACCRUAL_SEPARATED_NAV: Link<TimeAccountType, FoPayComponent> = new Link('payComponentAccrualSeparatedNav', TimeAccountType, FoPayComponent);
  /**
   * Static representation of the one-to-many navigation property [[payComponentGroupNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAY_COMPONENT_GROUP_NAV: Link<TimeAccountType, FoPayComponentGroup> = new Link('payComponentGroupNav', TimeAccountType, FoPayComponentGroup);
  /**
   * Static representation of the one-to-many navigation property [[payComponentNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAY_COMPONENT_NAV: Link<TimeAccountType, FoPayComponent> = new Link('payComponentNav', TimeAccountType, FoPayComponent);
  /**
   * Static representation of the one-to-many navigation property [[payComponentTerminationAccrualSeparatedNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAY_COMPONENT_TERMINATION_ACCRUAL_SEPARATED_NAV: Link<TimeAccountType, FoPayComponent> = new Link('payComponentTerminationAccrualSeparatedNav', TimeAccountType, FoPayComponent);
  /**
   * Static representation of the one-to-many navigation property [[payComponentTerminationNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAY_COMPONENT_TERMINATION_NAV: Link<TimeAccountType, FoPayComponent> = new Link('payComponentTerminationNav', TimeAccountType, FoPayComponent);
  /**
   * Static representation of the one-to-one navigation property [[payoutEligibilityNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYOUT_ELIGIBILITY_NAV: OneToOneLink<TimeAccountType, MdfEnumValue> = new OneToOneLink('payoutEligibilityNav', TimeAccountType, MdfEnumValue);
  /**
   * Static representation of the one-to-one navigation property [[pepCalendarAutomationLevelNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PEP_CALENDAR_AUTOMATION_LEVEL_NAV: OneToOneLink<TimeAccountType, MdfEnumValue> = new OneToOneLink('pepCalendarAutomationLevelNav', TimeAccountType, MdfEnumValue);
  /**
   * Static representation of the one-to-one navigation property [[postingOrderNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const POSTING_ORDER_NAV: OneToOneLink<TimeAccountType, MdfEnumValue> = new OneToOneLink('postingOrderNav', TimeAccountType, MdfEnumValue);
  /**
   * Static representation of the one-to-one navigation property [[terminationRuleDataEffectiveDateNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TERMINATION_RULE_DATA_EFFECTIVE_DATE_NAV: OneToOneLink<TimeAccountType, MdfEnumValue> = new OneToOneLink('terminationRuleDataEffectiveDateNav', TimeAccountType, MdfEnumValue);
  /**
   * Static representation of the one-to-one navigation property [[unitNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const UNIT_NAV: OneToOneLink<TimeAccountType, MdfEnumValue> = new OneToOneLink('unitNav', TimeAccountType, MdfEnumValue);
  /**
   * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WF_REQUEST_NAV: Link<TimeAccountType, WfRequest> = new Link('wfRequestNav', TimeAccountType, WfRequest);
  /**
   * All fields of the TimeAccountType entity.
   */
  export const _allFields: Array<BigNumberField<TimeAccountType> | StringField<TimeAccountType> | DateField<TimeAccountType> | BooleanField<TimeAccountType> | OneToOneLink<TimeAccountType, MdfEnumValue> | Link<TimeAccountType, Country> | OneToOneLink<TimeAccountType, User> | Link<TimeAccountType, MdfLocalizedValue> | Link<TimeAccountType, FoPayComponent> | Link<TimeAccountType, FoPayComponentGroup> | Link<TimeAccountType, WfRequest>> = [
    TimeAccountType.ACCOUNT_BOOKING_OFFSET_IN_MONTHS,
    TimeAccountType.ACCOUNT_CREATION_AUTOMATION_LEVEL,
    TimeAccountType.ACCOUNT_CREATION_DAY,
    TimeAccountType.ACCOUNT_CREATION_MONTH,
    TimeAccountType.ACCOUNT_CREATION_OFFSET_IN_MONTHS,
    TimeAccountType.ACCOUNT_CREATION_REFERENCE_DATE,
    TimeAccountType.ACCOUNT_DETAIL_RETENTION_GROUP,
    TimeAccountType.ACCOUNT_RETENTION_GROUP,
    TimeAccountType.ACCRUAL_AUTOMATION_LEVEL,
    TimeAccountType.ACCRUAL_CALCULATION_METHOD,
    TimeAccountType.ACCRUAL_CREATION_OFFSET,
    TimeAccountType.ACCRUAL_FREQUENCY,
    TimeAccountType.ACCRUAL_FREQUENCY_START_DATE,
    TimeAccountType.ACCRUAL_PERIOD_START_DAY,
    TimeAccountType.ACCRUAL_PERIOD_START_MONTH,
    TimeAccountType.ACCRUAL_RECALCULATION_POSTING_METHOD,
    TimeAccountType.ACCRUAL_RULE,
    TimeAccountType.ACCRUAL_TRANSFER_DATE_RULE,
    TimeAccountType.ACCRUAL_TRANSFER_RULE,
    TimeAccountType.ACCRUAL_WAITING_PERIOD,
    TimeAccountType.ACCRUAL_WAITING_PERIOD_UNIT,
    TimeAccountType.ADVANCES_ALLOWED,
    TimeAccountType.ALLOW_PAYOUT_WITH_SIMULATION,
    TimeAccountType.CALCULATE_SNAPSHOT_APPROVED_ABSENCE_BALANCE,
    TimeAccountType.COUNTRY,
    TimeAccountType.CREATED_BY,
    TimeAccountType.CREATED_DATE_TIME,
    TimeAccountType.CREATION,
    TimeAccountType.ENTITLEMENT_METHOD,
    TimeAccountType.EXTERNAL_CODE,
    TimeAccountType.EXTERNAL_NAME_DE_DE,
    TimeAccountType.EXTERNAL_NAME_DEFAULT_VALUE,
    TimeAccountType.EXTERNAL_NAME_EN_DEBUG,
    TimeAccountType.EXTERNAL_NAME_EN_GB,
    TimeAccountType.EXTERNAL_NAME_EN_US,
    TimeAccountType.EXTERNAL_NAME_ES_ES,
    TimeAccountType.EXTERNAL_NAME_ES_MX,
    TimeAccountType.EXTERNAL_NAME_FR_CA,
    TimeAccountType.EXTERNAL_NAME_FR_FR,
    TimeAccountType.EXTERNAL_NAME_IT_IT,
    TimeAccountType.EXTERNAL_NAME_LOCALIZED,
    TimeAccountType.EXTERNAL_NAME_NL_NL,
    TimeAccountType.EXTERNAL_NAME_PT_BR,
    TimeAccountType.EXTERNAL_NAME_ZH_CN,
    TimeAccountType.HIRE_RULE,
    TimeAccountType.INITIAL_ACCRUAL_TRANSFER_DATE_RULE,
    TimeAccountType.INITIAL_FLEXIBLE_ACCOUNT_START_DATE_RULE,
    TimeAccountType.INTERIM_RULE,
    TimeAccountType.LAST_MODIFIED_BY,
    TimeAccountType.LAST_MODIFIED_DATE_TIME,
    TimeAccountType.LEVEL_OF_SIMULATION_PRECISION,
    TimeAccountType.MAXIMUM_SIMULATION_HORIZON_IN_MONTHS,
    TimeAccountType.MDF_SYSTEM_RECORD_STATUS,
    TimeAccountType.MINIMUM_BALANCE_ALLOWED,
    TimeAccountType.PAY_COMPONENT,
    TimeAccountType.PAY_COMPONENT_ACCRUAL_SEPARATED,
    TimeAccountType.PAY_COMPONENT_GROUP,
    TimeAccountType.PAY_COMPONENT_TERMINATION,
    TimeAccountType.PAY_COMPONENT_TERMINATION_ACCRUAL_SEPARATED,
    TimeAccountType.PAYOUT_ELIGIBILITY,
    TimeAccountType.PEP_CALENDAR_AUTOMATION_LEVEL,
    TimeAccountType.PERIOD_END_PROCESSING_RULE,
    TimeAccountType.PERIODIC_TIME_ACCOUNT_UPDATE_PROFILE,
    TimeAccountType.POSTING_ORDER,
    TimeAccountType.SECOND_ACCRUAL_CREATION_OFFSET,
    TimeAccountType.SIMULATE_ACCRUALS,
    TimeAccountType.SIMULATION_RULE,
    TimeAccountType.SNAPSHOTS_ALLOWED,
    TimeAccountType.TERMINATION_RULE,
    TimeAccountType.TERMINATION_RULE_DATA_EFFECTIVE_DATE,
    TimeAccountType.TIME_ACCOUNT_PAYOUT_PROFILE,
    TimeAccountType.UNIT,
    TimeAccountType.ACCOUNT_CREATION_AUTOMATION_LEVEL_NAV,
    TimeAccountType.ACCOUNT_CREATION_REFERENCE_DATE_NAV,
    TimeAccountType.ACCRUAL_AUTOMATION_LEVEL_NAV,
    TimeAccountType.ACCRUAL_CALCULATION_METHOD_NAV,
    TimeAccountType.ACCRUAL_FREQUENCY_NAV,
    TimeAccountType.ACCRUAL_RECALCULATION_POSTING_METHOD_NAV,
    TimeAccountType.ACCRUAL_WAITING_PERIOD_UNIT_NAV,
    TimeAccountType.ALLOW_PAYOUT_WITH_SIMULATION_NAV,
    TimeAccountType.COUNTRY_NAV,
    TimeAccountType.CREATED_BY_NAV,
    TimeAccountType.CREATION_NAV,
    TimeAccountType.ENTITLEMENT_METHOD_NAV,
    TimeAccountType.EXTERNAL_NAME_TRANSLATION_TEXT_NAV,
    TimeAccountType.LAST_MODIFIED_BY_NAV,
    TimeAccountType.LEVEL_OF_SIMULATION_PRECISION_NAV,
    TimeAccountType.MDF_SYSTEM_RECORD_STATUS_NAV,
    TimeAccountType.PAY_COMPONENT_ACCRUAL_SEPARATED_NAV,
    TimeAccountType.PAY_COMPONENT_GROUP_NAV,
    TimeAccountType.PAY_COMPONENT_NAV,
    TimeAccountType.PAY_COMPONENT_TERMINATION_ACCRUAL_SEPARATED_NAV,
    TimeAccountType.PAY_COMPONENT_TERMINATION_NAV,
    TimeAccountType.PAYOUT_ELIGIBILITY_NAV,
    TimeAccountType.PEP_CALENDAR_AUTOMATION_LEVEL_NAV,
    TimeAccountType.POSTING_ORDER_NAV,
    TimeAccountType.TERMINATION_RULE_DATA_EFFECTIVE_DATE_NAV,
    TimeAccountType.UNIT_NAV,
    TimeAccountType.WF_REQUEST_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<TimeAccountType> = new AllFields('*', TimeAccountType);
  /**
   * All key fields of the TimeAccountType entity.
   */
  export const _keyFields: Array<Selectable<TimeAccountType>> = [TimeAccountType.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property TimeAccountType.
   */
  export const _keys: { [keys: string]: Selectable<TimeAccountType> } = TimeAccountType._keyFields.reduce((acc: { [keys: string]: Selectable<TimeAccountType> }, field: Selectable<TimeAccountType>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
