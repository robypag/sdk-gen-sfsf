/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AdvancesEligibilityRequestBuilder } from './AdvancesEligibilityRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "AdvancesEligibility" of service "SFOData".
 */
export class AdvancesEligibility extends Entity implements AdvancesEligibilityType {
  /**
   * Technical entity name for AdvancesEligibility.
   */
  static _entityName = 'AdvancesEligibility';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for AdvancesEligibility.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Advance Type.
   * Maximum length: 32.
   * @nullable
   */
  advanceType?: string;
  /**
   * Base Pay Component.
   * Maximum length: 32.
   * @nullable
   */
  basePayComponent?: string;
  /**
   * Base Pay Component Group.
   * Maximum length: 32.
   * @nullable
   */
  basePayComponentGroup?: string;
  /**
   * Calculate Percentage on Value of.
   * Maximum length: 128.
   * @nullable
   */
  calculationPercentageOn?: string;
  /**
   * Legal Entity.
   * Maximum length: 128.
   * @nullable
   */
  company?: string;
  /**
   * Created By.
   * Maximum length: 100.
   * @nullable
   */
  createdBy?: string;
  /**
   * Created On.
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
   * Currency.
   * Maximum length: 128.
   * @nullable
   */
  currencyGo?: string;
  /**
   * Day Of Week.
   * Maximum length: 255.
   * @nullable
   */
  dayOfDeduction?: string;
  /**
   * Recovery Format.
   * Maximum length: 255.
   * @nullable
   */
  deductionDateFormat?: string;
  /**
   * Recovery Pay Component(One Time).
   * Maximum length: 255.
   * @nullable
   */
  deductionPayCompOtd?: string;
  /**
   * Recovery Pay Component(Recurring).
   * Maximum length: 255.
   * @nullable
   */
  deductionPayCompRd?: string;
  /**
   * Default Workflow.
   * Maximum length: 32.
   * @nullable
   */
  defaultWorkflow?: string;
  /**
   * Department.
   * Maximum length: 128.
   * @nullable
   */
  department?: string;
  /**
   * effectiveEndDate.
   * @nullable
   */
  effectiveEndDate?: Moment;
  /**
   * Effective Start Date.
   */
  effectiveStartDate!: Moment;
  /**
   * Status.
   * Maximum length: 255.
   * @nullable
   */
  effectiveStatus?: string;
  /**
   * Maximum Eligibility Amount/Percentage.
   * @nullable
   */
  eligibilityAmount?: BigNumber;
  /**
   * Eligibility Rule.
   * Maximum length: 128.
   * @nullable
   */
  eligibilityRule?: string;
  /**
   * Enable Auto Recovery.
   * Maximum length: 255.
   * @nullable
   */
  enableAutoRecovery?: string;
  /**
   * Exception For Number of Installments.
   * @nullable
   */
  exceptionForNumberOfInstallments?: boolean;
  /**
   * Exception For Requested Amount.
   * @nullable
   */
  exceptionForRequestedAmount?: boolean;
  /**
   * Exception Workflow.
   * Maximum length: 32.
   * @nullable
   */
  exceptionWorkflow?: string;
  /**
   * Eligibility ID.
   * Maximum length: 128.
   */
  externalCode!: string;
  /**
   * externalName.
   * Maximum length: 128.
   * @nullable
   */
  externalName?: string;
  /**
   * First Occurrence Date.
   * @nullable
   */
  firstOccurenceStartDate?: Moment;
  /**
   * Installment Amount.
   * @nullable
   */
  installmentAmount?: BigNumber;
  /**
   * Installment Frequency.
   * Maximum length: 32.
   * @nullable
   */
  installmentFrequency?: string;
  /**
   * Interest Rate %.
   * @nullable
   */
  interestRate?: BigNumber;
  /**
   * Interest Type.
   * Maximum length: 255.
   * @nullable
   */
  interestType?: string;
  /**
   * Allow Unlimited Eligibility Amount.
   * @nullable
   */
  isUnlimitedAmount?: boolean;
  /**
   * Last Modified By.
   * Maximum length: 100.
   * @nullable
   */
  lastModifiedBy?: string;
  /**
   * Last Modified Date.
   * @nullable
   */
  lastModifiedDateTime?: Moment;
  /**
   * Total Eligibility Amount.
   * @nullable
   */
  maximumEligibilityAmount?: BigNumber;
  /**
   * Record Status.
   * Maximum length: 255.
   * @nullable
   */
  mdfSystemRecordStatus?: string;
  /**
   * Monthly Recovery Date.
   * Maximum length: 255.
   * @nullable
   */
  monthDate?: string;
  /**
   * Number of Installments.
   * @nullable
   */
  numberOfInstallments?: BigNumber;
  /**
   * Employee can Edit Number of Installments.
   * Maximum length: 255.
   * @nullable
   */
  numberOfInstallmentsEditableByEmployee?: string;
  /**
   * Maximum Eligible Occurrences.
   * @nullable
   */
  numberOfOccurences?: BigNumber;
  /**
   * Week Number.
   * Maximum length: 255.
   * @nullable
   */
  occuranceOfDay?: string;
  /**
   * Pay Component Type.
   * Maximum length: 255.
   * @nullable
   */
  payComponentType?: string;
  /**
   * Pay Grade.
   * Maximum length: 32.
   * @nullable
   */
  paygrade?: string;
  /**
   * Eligibility Valid Till.
   * @nullable
   */
  periodEndDate?: Moment;
  /**
   * periodStartDate.
   * @nullable
   */
  periodStartDate?: Moment;
  /**
   * Recovery Mode.
   * Maximum length: 255.
   * @nullable
   */
  recoveryMode?: string;
  /**
   * Employee can Edit Recovery Mode.
   * Maximum length: 255.
   * @nullable
   */
  recoveryModeEditableByEmployee?: string;
  /**
   * Eligibility Valid For (Unit).
   * Maximum length: 255.
   * @nullable
   */
  unitOfPeriod?: string;
  /**
   * Eligibility Valid For (Number).
   * @nullable
   */
  validityPeriod?: BigNumber;
  /**
   * One-to-one navigation property to the [[FoPayComponent]] entity.
   */
  advanceTypeNav!: FoPayComponent;
  /**
   * One-to-one navigation property to the [[FoPayComponentGroup]] entity.
   */
  basePayComponentGroupNav!: FoPayComponentGroup;
  /**
   * One-to-one navigation property to the [[FoPayComponent]] entity.
   */
  basePayComponentNav!: FoPayComponent;
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  calculationPercentageOnNav!: MdfEnumValue;
  /**
   * One-to-one navigation property to the [[FoCompany]] entity.
   */
  companyNav!: FoCompany;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  createdByNav!: User;
  /**
   * One-to-one navigation property to the [[Currency]] entity.
   */
  currencyGoNav!: Currency;
  /**
   * One-to-one navigation property to the [[PickListValueV2]] entity.
   */
  currencyNav!: PickListValueV2;
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  dayOfDeductionNav!: MdfEnumValue;
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  deductionDateFormatNav!: MdfEnumValue;
  /**
   * One-to-one navigation property to the [[FoWfConfig]] entity.
   */
  defaultWorkflowNav!: FoWfConfig;
  /**
   * One-to-one navigation property to the [[FoDepartment]] entity.
   */
  departmentNav!: FoDepartment;
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  effectiveStatusNav!: MdfEnumValue;
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  enableAutoRecoveryNav!: MdfEnumValue;
  /**
   * One-to-one navigation property to the [[FoWfConfig]] entity.
   */
  exceptionWorkflowNav!: FoWfConfig;
  /**
   * One-to-one navigation property to the [[FoFrequency]] entity.
   */
  installmentFrequencyNav!: FoFrequency;
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  interestTypeNav!: MdfEnumValue;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  lastModifiedByNav!: User;
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  mdfSystemRecordStatusNav!: MdfEnumValue;
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  monthDateNav!: MdfEnumValue;
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  numberOfInstallmentsEditableByEmployeeNav!: MdfEnumValue;
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  occuranceOfDayNav!: MdfEnumValue;
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  payComponentTypeNav!: MdfEnumValue;
  /**
   * One-to-one navigation property to the [[FoPayGrade]] entity.
   */
  paygradeNav!: FoPayGrade;
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  recoveryModeEditableByEmployeeNav!: MdfEnumValue;
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  recoveryModeNav!: MdfEnumValue;
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  unitOfPeriodNav!: MdfEnumValue;
  /**
   * One-to-many navigation property to the [[WfRequest]] entity.
   */
  wfRequestNav!: WfRequest[];

  /**
   * Returns an entity builder to construct instances `AdvancesEligibility`.
   * @returns A builder that constructs instances of entity type `AdvancesEligibility`.
   */
  static builder(): EntityBuilderType<AdvancesEligibility, AdvancesEligibilityTypeForceMandatory> {
    return Entity.entityBuilder(AdvancesEligibility);
  }

  /**
   * Returns a request builder to construct requests for operations on the `AdvancesEligibility` entity type.
   * @returns A `AdvancesEligibility` request builder.
   */
  static requestBuilder(): AdvancesEligibilityRequestBuilder {
    return new AdvancesEligibilityRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `AdvancesEligibility`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `AdvancesEligibility`.
   */
  static customField(fieldName: string): CustomField<AdvancesEligibility> {
    return Entity.customFieldSelector(fieldName, AdvancesEligibility);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { FoPayComponent, FoPayComponentType } from './FoPayComponent';
import { FoPayComponentGroup, FoPayComponentGroupType } from './FoPayComponentGroup';
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';
import { FoCompany, FoCompanyType } from './FoCompany';
import { User, UserType } from './User';
import { Currency, CurrencyType } from './Currency';
import { PickListValueV2, PickListValueV2Type } from './PickListValueV2';
import { FoWfConfig, FoWfConfigType } from './FoWfConfig';
import { FoDepartment, FoDepartmentType } from './FoDepartment';
import { FoFrequency, FoFrequencyType } from './FoFrequency';
import { FoPayGrade, FoPayGradeType } from './FoPayGrade';
import { WfRequest, WfRequestType } from './WfRequest';

export interface AdvancesEligibilityType {
  advanceType?: string;
  basePayComponent?: string;
  basePayComponentGroup?: string;
  calculationPercentageOn?: string;
  company?: string;
  createdBy?: string;
  createdDateTime?: Moment;
  currency?: string;
  currencyGo?: string;
  dayOfDeduction?: string;
  deductionDateFormat?: string;
  deductionPayCompOtd?: string;
  deductionPayCompRd?: string;
  defaultWorkflow?: string;
  department?: string;
  effectiveEndDate?: Moment;
  effectiveStartDate: Moment;
  effectiveStatus?: string;
  eligibilityAmount?: BigNumber;
  eligibilityRule?: string;
  enableAutoRecovery?: string;
  exceptionForNumberOfInstallments?: boolean;
  exceptionForRequestedAmount?: boolean;
  exceptionWorkflow?: string;
  externalCode: string;
  externalName?: string;
  firstOccurenceStartDate?: Moment;
  installmentAmount?: BigNumber;
  installmentFrequency?: string;
  interestRate?: BigNumber;
  interestType?: string;
  isUnlimitedAmount?: boolean;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  maximumEligibilityAmount?: BigNumber;
  mdfSystemRecordStatus?: string;
  monthDate?: string;
  numberOfInstallments?: BigNumber;
  numberOfInstallmentsEditableByEmployee?: string;
  numberOfOccurences?: BigNumber;
  occuranceOfDay?: string;
  payComponentType?: string;
  paygrade?: string;
  periodEndDate?: Moment;
  periodStartDate?: Moment;
  recoveryMode?: string;
  recoveryModeEditableByEmployee?: string;
  unitOfPeriod?: string;
  validityPeriod?: BigNumber;
  advanceTypeNav: FoPayComponentType;
  basePayComponentGroupNav: FoPayComponentGroupType;
  basePayComponentNav: FoPayComponentType;
  calculationPercentageOnNav: MdfEnumValueType;
  companyNav: FoCompanyType;
  createdByNav: UserType;
  currencyGoNav: CurrencyType;
  currencyNav: PickListValueV2Type;
  dayOfDeductionNav: MdfEnumValueType;
  deductionDateFormatNav: MdfEnumValueType;
  defaultWorkflowNav: FoWfConfigType;
  departmentNav: FoDepartmentType;
  effectiveStatusNav: MdfEnumValueType;
  enableAutoRecoveryNav: MdfEnumValueType;
  exceptionWorkflowNav: FoWfConfigType;
  installmentFrequencyNav: FoFrequencyType;
  interestTypeNav: MdfEnumValueType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  monthDateNav: MdfEnumValueType;
  numberOfInstallmentsEditableByEmployeeNav: MdfEnumValueType;
  occuranceOfDayNav: MdfEnumValueType;
  payComponentTypeNav: MdfEnumValueType;
  paygradeNav: FoPayGradeType;
  recoveryModeEditableByEmployeeNav: MdfEnumValueType;
  recoveryModeNav: MdfEnumValueType;
  unitOfPeriodNav: MdfEnumValueType;
  wfRequestNav: WfRequestType[];
}

export interface AdvancesEligibilityTypeForceMandatory {
  advanceType: string;
  basePayComponent: string;
  basePayComponentGroup: string;
  calculationPercentageOn: string;
  company: string;
  createdBy: string;
  createdDateTime: Moment;
  currency: string;
  currencyGo: string;
  dayOfDeduction: string;
  deductionDateFormat: string;
  deductionPayCompOtd: string;
  deductionPayCompRd: string;
  defaultWorkflow: string;
  department: string;
  effectiveEndDate: Moment;
  effectiveStartDate: Moment;
  effectiveStatus: string;
  eligibilityAmount: BigNumber;
  eligibilityRule: string;
  enableAutoRecovery: string;
  exceptionForNumberOfInstallments: boolean;
  exceptionForRequestedAmount: boolean;
  exceptionWorkflow: string;
  externalCode: string;
  externalName: string;
  firstOccurenceStartDate: Moment;
  installmentAmount: BigNumber;
  installmentFrequency: string;
  interestRate: BigNumber;
  interestType: string;
  isUnlimitedAmount: boolean;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  maximumEligibilityAmount: BigNumber;
  mdfSystemRecordStatus: string;
  monthDate: string;
  numberOfInstallments: BigNumber;
  numberOfInstallmentsEditableByEmployee: string;
  numberOfOccurences: BigNumber;
  occuranceOfDay: string;
  payComponentType: string;
  paygrade: string;
  periodEndDate: Moment;
  periodStartDate: Moment;
  recoveryMode: string;
  recoveryModeEditableByEmployee: string;
  unitOfPeriod: string;
  validityPeriod: BigNumber;
  advanceTypeNav: FoPayComponentType;
  basePayComponentGroupNav: FoPayComponentGroupType;
  basePayComponentNav: FoPayComponentType;
  calculationPercentageOnNav: MdfEnumValueType;
  companyNav: FoCompanyType;
  createdByNav: UserType;
  currencyGoNav: CurrencyType;
  currencyNav: PickListValueV2Type;
  dayOfDeductionNav: MdfEnumValueType;
  deductionDateFormatNav: MdfEnumValueType;
  defaultWorkflowNav: FoWfConfigType;
  departmentNav: FoDepartmentType;
  effectiveStatusNav: MdfEnumValueType;
  enableAutoRecoveryNav: MdfEnumValueType;
  exceptionWorkflowNav: FoWfConfigType;
  installmentFrequencyNav: FoFrequencyType;
  interestTypeNav: MdfEnumValueType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  monthDateNav: MdfEnumValueType;
  numberOfInstallmentsEditableByEmployeeNav: MdfEnumValueType;
  occuranceOfDayNav: MdfEnumValueType;
  payComponentTypeNav: MdfEnumValueType;
  paygradeNav: FoPayGradeType;
  recoveryModeEditableByEmployeeNav: MdfEnumValueType;
  recoveryModeNav: MdfEnumValueType;
  unitOfPeriodNav: MdfEnumValueType;
  wfRequestNav: WfRequestType[];
}

export namespace AdvancesEligibility {
  /**
   * Static representation of the [[advanceType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADVANCE_TYPE: StringField<AdvancesEligibility> = new StringField('advanceType', AdvancesEligibility, 'Edm.String');
  /**
   * Static representation of the [[basePayComponent]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BASE_PAY_COMPONENT: StringField<AdvancesEligibility> = new StringField('basePayComponent', AdvancesEligibility, 'Edm.String');
  /**
   * Static representation of the [[basePayComponentGroup]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BASE_PAY_COMPONENT_GROUP: StringField<AdvancesEligibility> = new StringField('basePayComponentGroup', AdvancesEligibility, 'Edm.String');
  /**
   * Static representation of the [[calculationPercentageOn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CALCULATION_PERCENTAGE_ON: StringField<AdvancesEligibility> = new StringField('calculationPercentageOn', AdvancesEligibility, 'Edm.String');
  /**
   * Static representation of the [[company]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMPANY: StringField<AdvancesEligibility> = new StringField('company', AdvancesEligibility, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<AdvancesEligibility> = new StringField('createdBy', AdvancesEligibility, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<AdvancesEligibility> = new DateField('createdDateTime', AdvancesEligibility, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[currency]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CURRENCY: StringField<AdvancesEligibility> = new StringField('currency', AdvancesEligibility, 'Edm.String');
  /**
   * Static representation of the [[currencyGo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CURRENCY_GO: StringField<AdvancesEligibility> = new StringField('currencyGO', AdvancesEligibility, 'Edm.String');
  /**
   * Static representation of the [[dayOfDeduction]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DAY_OF_DEDUCTION: StringField<AdvancesEligibility> = new StringField('dayOfDeduction', AdvancesEligibility, 'Edm.String');
  /**
   * Static representation of the [[deductionDateFormat]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEDUCTION_DATE_FORMAT: StringField<AdvancesEligibility> = new StringField('deductionDateFormat', AdvancesEligibility, 'Edm.String');
  /**
   * Static representation of the [[deductionPayCompOtd]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEDUCTION_PAY_COMP_OTD: StringField<AdvancesEligibility> = new StringField('deductionPayCompOTD', AdvancesEligibility, 'Edm.String');
  /**
   * Static representation of the [[deductionPayCompRd]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEDUCTION_PAY_COMP_RD: StringField<AdvancesEligibility> = new StringField('deductionPayCompRD', AdvancesEligibility, 'Edm.String');
  /**
   * Static representation of the [[defaultWorkflow]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEFAULT_WORKFLOW: StringField<AdvancesEligibility> = new StringField('defaultWorkflow', AdvancesEligibility, 'Edm.String');
  /**
   * Static representation of the [[department]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEPARTMENT: StringField<AdvancesEligibility> = new StringField('department', AdvancesEligibility, 'Edm.String');
  /**
   * Static representation of the [[effectiveEndDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EFFECTIVE_END_DATE: DateField<AdvancesEligibility> = new DateField('effectiveEndDate', AdvancesEligibility, 'Edm.DateTime');
  /**
   * Static representation of the [[effectiveStartDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EFFECTIVE_START_DATE: DateField<AdvancesEligibility> = new DateField('effectiveStartDate', AdvancesEligibility, 'Edm.DateTime');
  /**
   * Static representation of the [[effectiveStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EFFECTIVE_STATUS: StringField<AdvancesEligibility> = new StringField('effectiveStatus', AdvancesEligibility, 'Edm.String');
  /**
   * Static representation of the [[eligibilityAmount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ELIGIBILITY_AMOUNT: BigNumberField<AdvancesEligibility> = new BigNumberField('eligibilityAmount', AdvancesEligibility, 'Edm.Decimal');
  /**
   * Static representation of the [[eligibilityRule]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ELIGIBILITY_RULE: StringField<AdvancesEligibility> = new StringField('eligibilityRule', AdvancesEligibility, 'Edm.String');
  /**
   * Static representation of the [[enableAutoRecovery]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ENABLE_AUTO_RECOVERY: StringField<AdvancesEligibility> = new StringField('enableAutoRecovery', AdvancesEligibility, 'Edm.String');
  /**
   * Static representation of the [[exceptionForNumberOfInstallments]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXCEPTION_FOR_NUMBER_OF_INSTALLMENTS: BooleanField<AdvancesEligibility> = new BooleanField('exceptionForNumberOfInstallments', AdvancesEligibility, 'Edm.Boolean');
  /**
   * Static representation of the [[exceptionForRequestedAmount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXCEPTION_FOR_REQUESTED_AMOUNT: BooleanField<AdvancesEligibility> = new BooleanField('exceptionForRequestedAmount', AdvancesEligibility, 'Edm.Boolean');
  /**
   * Static representation of the [[exceptionWorkflow]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXCEPTION_WORKFLOW: StringField<AdvancesEligibility> = new StringField('exceptionWorkflow', AdvancesEligibility, 'Edm.String');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: StringField<AdvancesEligibility> = new StringField('externalCode', AdvancesEligibility, 'Edm.String');
  /**
   * Static representation of the [[externalName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME: StringField<AdvancesEligibility> = new StringField('externalName', AdvancesEligibility, 'Edm.String');
  /**
   * Static representation of the [[firstOccurenceStartDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FIRST_OCCURENCE_START_DATE: DateField<AdvancesEligibility> = new DateField('firstOccurenceStartDate', AdvancesEligibility, 'Edm.DateTime');
  /**
   * Static representation of the [[installmentAmount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INSTALLMENT_AMOUNT: BigNumberField<AdvancesEligibility> = new BigNumberField('installmentAmount', AdvancesEligibility, 'Edm.Decimal');
  /**
   * Static representation of the [[installmentFrequency]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INSTALLMENT_FREQUENCY: StringField<AdvancesEligibility> = new StringField('installmentFrequency', AdvancesEligibility, 'Edm.String');
  /**
   * Static representation of the [[interestRate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INTEREST_RATE: BigNumberField<AdvancesEligibility> = new BigNumberField('interestRate', AdvancesEligibility, 'Edm.Decimal');
  /**
   * Static representation of the [[interestType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INTEREST_TYPE: StringField<AdvancesEligibility> = new StringField('interestType', AdvancesEligibility, 'Edm.String');
  /**
   * Static representation of the [[isUnlimitedAmount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_UNLIMITED_AMOUNT: BooleanField<AdvancesEligibility> = new BooleanField('isUnlimitedAmount', AdvancesEligibility, 'Edm.Boolean');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<AdvancesEligibility> = new StringField('lastModifiedBy', AdvancesEligibility, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<AdvancesEligibility> = new DateField('lastModifiedDateTime', AdvancesEligibility, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[maximumEligibilityAmount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MAXIMUM_ELIGIBILITY_AMOUNT: BigNumberField<AdvancesEligibility> = new BigNumberField('maximumEligibilityAmount', AdvancesEligibility, 'Edm.Decimal');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<AdvancesEligibility> = new StringField('mdfSystemRecordStatus', AdvancesEligibility, 'Edm.String');
  /**
   * Static representation of the [[monthDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MONTH_DATE: StringField<AdvancesEligibility> = new StringField('monthDate', AdvancesEligibility, 'Edm.String');
  /**
   * Static representation of the [[numberOfInstallments]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NUMBER_OF_INSTALLMENTS: BigNumberField<AdvancesEligibility> = new BigNumberField('numberOfInstallments', AdvancesEligibility, 'Edm.Int64');
  /**
   * Static representation of the [[numberOfInstallmentsEditableByEmployee]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NUMBER_OF_INSTALLMENTS_EDITABLE_BY_EMPLOYEE: StringField<AdvancesEligibility> = new StringField('numberOfInstallmentsEditableByEmployee', AdvancesEligibility, 'Edm.String');
  /**
   * Static representation of the [[numberOfOccurences]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NUMBER_OF_OCCURENCES: BigNumberField<AdvancesEligibility> = new BigNumberField('numberOfOccurences', AdvancesEligibility, 'Edm.Int64');
  /**
   * Static representation of the [[occuranceOfDay]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OCCURANCE_OF_DAY: StringField<AdvancesEligibility> = new StringField('occuranceOfDay', AdvancesEligibility, 'Edm.String');
  /**
   * Static representation of the [[payComponentType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAY_COMPONENT_TYPE: StringField<AdvancesEligibility> = new StringField('payComponentType', AdvancesEligibility, 'Edm.String');
  /**
   * Static representation of the [[paygrade]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYGRADE: StringField<AdvancesEligibility> = new StringField('paygrade', AdvancesEligibility, 'Edm.String');
  /**
   * Static representation of the [[periodEndDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PERIOD_END_DATE: DateField<AdvancesEligibility> = new DateField('periodEndDate', AdvancesEligibility, 'Edm.DateTime');
  /**
   * Static representation of the [[periodStartDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PERIOD_START_DATE: DateField<AdvancesEligibility> = new DateField('periodStartDate', AdvancesEligibility, 'Edm.DateTime');
  /**
   * Static representation of the [[recoveryMode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RECOVERY_MODE: StringField<AdvancesEligibility> = new StringField('recoveryMode', AdvancesEligibility, 'Edm.String');
  /**
   * Static representation of the [[recoveryModeEditableByEmployee]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RECOVERY_MODE_EDITABLE_BY_EMPLOYEE: StringField<AdvancesEligibility> = new StringField('recoveryModeEditableByEmployee', AdvancesEligibility, 'Edm.String');
  /**
   * Static representation of the [[unitOfPeriod]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const UNIT_OF_PERIOD: StringField<AdvancesEligibility> = new StringField('unitOfPeriod', AdvancesEligibility, 'Edm.String');
  /**
   * Static representation of the [[validityPeriod]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VALIDITY_PERIOD: BigNumberField<AdvancesEligibility> = new BigNumberField('validityPeriod', AdvancesEligibility, 'Edm.Int64');
  /**
   * Static representation of the one-to-one navigation property [[advanceTypeNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADVANCE_TYPE_NAV: OneToOneLink<AdvancesEligibility, FoPayComponent> = new OneToOneLink('advanceTypeNav', AdvancesEligibility, FoPayComponent);
  /**
   * Static representation of the one-to-one navigation property [[basePayComponentGroupNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BASE_PAY_COMPONENT_GROUP_NAV: OneToOneLink<AdvancesEligibility, FoPayComponentGroup> = new OneToOneLink('basePayComponentGroupNav', AdvancesEligibility, FoPayComponentGroup);
  /**
   * Static representation of the one-to-one navigation property [[basePayComponentNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BASE_PAY_COMPONENT_NAV: OneToOneLink<AdvancesEligibility, FoPayComponent> = new OneToOneLink('basePayComponentNav', AdvancesEligibility, FoPayComponent);
  /**
   * Static representation of the one-to-one navigation property [[calculationPercentageOnNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CALCULATION_PERCENTAGE_ON_NAV: OneToOneLink<AdvancesEligibility, MdfEnumValue> = new OneToOneLink('calculationPercentageOnNav', AdvancesEligibility, MdfEnumValue);
  /**
   * Static representation of the one-to-one navigation property [[companyNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMPANY_NAV: OneToOneLink<AdvancesEligibility, FoCompany> = new OneToOneLink('companyNav', AdvancesEligibility, FoCompany);
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<AdvancesEligibility, User> = new OneToOneLink('createdByNav', AdvancesEligibility, User);
  /**
   * Static representation of the one-to-one navigation property [[currencyGoNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CURRENCY_GO_NAV: OneToOneLink<AdvancesEligibility, Currency> = new OneToOneLink('currencyGONav', AdvancesEligibility, Currency);
  /**
   * Static representation of the one-to-one navigation property [[currencyNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CURRENCY_NAV: OneToOneLink<AdvancesEligibility, PickListValueV2> = new OneToOneLink('currencyNav', AdvancesEligibility, PickListValueV2);
  /**
   * Static representation of the one-to-one navigation property [[dayOfDeductionNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DAY_OF_DEDUCTION_NAV: OneToOneLink<AdvancesEligibility, MdfEnumValue> = new OneToOneLink('dayOfDeductionNav', AdvancesEligibility, MdfEnumValue);
  /**
   * Static representation of the one-to-one navigation property [[deductionDateFormatNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEDUCTION_DATE_FORMAT_NAV: OneToOneLink<AdvancesEligibility, MdfEnumValue> = new OneToOneLink('deductionDateFormatNav', AdvancesEligibility, MdfEnumValue);
  /**
   * Static representation of the one-to-one navigation property [[defaultWorkflowNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEFAULT_WORKFLOW_NAV: OneToOneLink<AdvancesEligibility, FoWfConfig> = new OneToOneLink('defaultWorkflowNav', AdvancesEligibility, FoWfConfig);
  /**
   * Static representation of the one-to-one navigation property [[departmentNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEPARTMENT_NAV: OneToOneLink<AdvancesEligibility, FoDepartment> = new OneToOneLink('departmentNav', AdvancesEligibility, FoDepartment);
  /**
   * Static representation of the one-to-one navigation property [[effectiveStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EFFECTIVE_STATUS_NAV: OneToOneLink<AdvancesEligibility, MdfEnumValue> = new OneToOneLink('effectiveStatusNav', AdvancesEligibility, MdfEnumValue);
  /**
   * Static representation of the one-to-one navigation property [[enableAutoRecoveryNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ENABLE_AUTO_RECOVERY_NAV: OneToOneLink<AdvancesEligibility, MdfEnumValue> = new OneToOneLink('enableAutoRecoveryNav', AdvancesEligibility, MdfEnumValue);
  /**
   * Static representation of the one-to-one navigation property [[exceptionWorkflowNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXCEPTION_WORKFLOW_NAV: OneToOneLink<AdvancesEligibility, FoWfConfig> = new OneToOneLink('exceptionWorkflowNav', AdvancesEligibility, FoWfConfig);
  /**
   * Static representation of the one-to-one navigation property [[installmentFrequencyNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INSTALLMENT_FREQUENCY_NAV: OneToOneLink<AdvancesEligibility, FoFrequency> = new OneToOneLink('installmentFrequencyNav', AdvancesEligibility, FoFrequency);
  /**
   * Static representation of the one-to-one navigation property [[interestTypeNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INTEREST_TYPE_NAV: OneToOneLink<AdvancesEligibility, MdfEnumValue> = new OneToOneLink('interestTypeNav', AdvancesEligibility, MdfEnumValue);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<AdvancesEligibility, User> = new OneToOneLink('lastModifiedByNav', AdvancesEligibility, User);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<AdvancesEligibility, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', AdvancesEligibility, MdfEnumValue);
  /**
   * Static representation of the one-to-one navigation property [[monthDateNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MONTH_DATE_NAV: OneToOneLink<AdvancesEligibility, MdfEnumValue> = new OneToOneLink('monthDateNav', AdvancesEligibility, MdfEnumValue);
  /**
   * Static representation of the one-to-one navigation property [[numberOfInstallmentsEditableByEmployeeNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NUMBER_OF_INSTALLMENTS_EDITABLE_BY_EMPLOYEE_NAV: OneToOneLink<AdvancesEligibility, MdfEnumValue> = new OneToOneLink('numberOfInstallmentsEditableByEmployeeNav', AdvancesEligibility, MdfEnumValue);
  /**
   * Static representation of the one-to-one navigation property [[occuranceOfDayNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OCCURANCE_OF_DAY_NAV: OneToOneLink<AdvancesEligibility, MdfEnumValue> = new OneToOneLink('occuranceOfDayNav', AdvancesEligibility, MdfEnumValue);
  /**
   * Static representation of the one-to-one navigation property [[payComponentTypeNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAY_COMPONENT_TYPE_NAV: OneToOneLink<AdvancesEligibility, MdfEnumValue> = new OneToOneLink('payComponentTypeNav', AdvancesEligibility, MdfEnumValue);
  /**
   * Static representation of the one-to-one navigation property [[paygradeNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYGRADE_NAV: OneToOneLink<AdvancesEligibility, FoPayGrade> = new OneToOneLink('paygradeNav', AdvancesEligibility, FoPayGrade);
  /**
   * Static representation of the one-to-one navigation property [[recoveryModeEditableByEmployeeNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RECOVERY_MODE_EDITABLE_BY_EMPLOYEE_NAV: OneToOneLink<AdvancesEligibility, MdfEnumValue> = new OneToOneLink('recoveryModeEditableByEmployeeNav', AdvancesEligibility, MdfEnumValue);
  /**
   * Static representation of the one-to-one navigation property [[recoveryModeNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RECOVERY_MODE_NAV: OneToOneLink<AdvancesEligibility, MdfEnumValue> = new OneToOneLink('recoveryModeNav', AdvancesEligibility, MdfEnumValue);
  /**
   * Static representation of the one-to-one navigation property [[unitOfPeriodNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const UNIT_OF_PERIOD_NAV: OneToOneLink<AdvancesEligibility, MdfEnumValue> = new OneToOneLink('unitOfPeriodNav', AdvancesEligibility, MdfEnumValue);
  /**
   * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WF_REQUEST_NAV: Link<AdvancesEligibility, WfRequest> = new Link('wfRequestNav', AdvancesEligibility, WfRequest);
  /**
   * All fields of the AdvancesEligibility entity.
   */
  export const _allFields: Array<StringField<AdvancesEligibility> | DateField<AdvancesEligibility> | BigNumberField<AdvancesEligibility> | BooleanField<AdvancesEligibility> | OneToOneLink<AdvancesEligibility, FoPayComponent> | OneToOneLink<AdvancesEligibility, FoPayComponentGroup> | OneToOneLink<AdvancesEligibility, MdfEnumValue> | OneToOneLink<AdvancesEligibility, FoCompany> | OneToOneLink<AdvancesEligibility, User> | OneToOneLink<AdvancesEligibility, Currency> | OneToOneLink<AdvancesEligibility, PickListValueV2> | OneToOneLink<AdvancesEligibility, FoWfConfig> | OneToOneLink<AdvancesEligibility, FoDepartment> | OneToOneLink<AdvancesEligibility, FoFrequency> | OneToOneLink<AdvancesEligibility, FoPayGrade> | Link<AdvancesEligibility, WfRequest>> = [
    AdvancesEligibility.ADVANCE_TYPE,
    AdvancesEligibility.BASE_PAY_COMPONENT,
    AdvancesEligibility.BASE_PAY_COMPONENT_GROUP,
    AdvancesEligibility.CALCULATION_PERCENTAGE_ON,
    AdvancesEligibility.COMPANY,
    AdvancesEligibility.CREATED_BY,
    AdvancesEligibility.CREATED_DATE_TIME,
    AdvancesEligibility.CURRENCY,
    AdvancesEligibility.CURRENCY_GO,
    AdvancesEligibility.DAY_OF_DEDUCTION,
    AdvancesEligibility.DEDUCTION_DATE_FORMAT,
    AdvancesEligibility.DEDUCTION_PAY_COMP_OTD,
    AdvancesEligibility.DEDUCTION_PAY_COMP_RD,
    AdvancesEligibility.DEFAULT_WORKFLOW,
    AdvancesEligibility.DEPARTMENT,
    AdvancesEligibility.EFFECTIVE_END_DATE,
    AdvancesEligibility.EFFECTIVE_START_DATE,
    AdvancesEligibility.EFFECTIVE_STATUS,
    AdvancesEligibility.ELIGIBILITY_AMOUNT,
    AdvancesEligibility.ELIGIBILITY_RULE,
    AdvancesEligibility.ENABLE_AUTO_RECOVERY,
    AdvancesEligibility.EXCEPTION_FOR_NUMBER_OF_INSTALLMENTS,
    AdvancesEligibility.EXCEPTION_FOR_REQUESTED_AMOUNT,
    AdvancesEligibility.EXCEPTION_WORKFLOW,
    AdvancesEligibility.EXTERNAL_CODE,
    AdvancesEligibility.EXTERNAL_NAME,
    AdvancesEligibility.FIRST_OCCURENCE_START_DATE,
    AdvancesEligibility.INSTALLMENT_AMOUNT,
    AdvancesEligibility.INSTALLMENT_FREQUENCY,
    AdvancesEligibility.INTEREST_RATE,
    AdvancesEligibility.INTEREST_TYPE,
    AdvancesEligibility.IS_UNLIMITED_AMOUNT,
    AdvancesEligibility.LAST_MODIFIED_BY,
    AdvancesEligibility.LAST_MODIFIED_DATE_TIME,
    AdvancesEligibility.MAXIMUM_ELIGIBILITY_AMOUNT,
    AdvancesEligibility.MDF_SYSTEM_RECORD_STATUS,
    AdvancesEligibility.MONTH_DATE,
    AdvancesEligibility.NUMBER_OF_INSTALLMENTS,
    AdvancesEligibility.NUMBER_OF_INSTALLMENTS_EDITABLE_BY_EMPLOYEE,
    AdvancesEligibility.NUMBER_OF_OCCURENCES,
    AdvancesEligibility.OCCURANCE_OF_DAY,
    AdvancesEligibility.PAY_COMPONENT_TYPE,
    AdvancesEligibility.PAYGRADE,
    AdvancesEligibility.PERIOD_END_DATE,
    AdvancesEligibility.PERIOD_START_DATE,
    AdvancesEligibility.RECOVERY_MODE,
    AdvancesEligibility.RECOVERY_MODE_EDITABLE_BY_EMPLOYEE,
    AdvancesEligibility.UNIT_OF_PERIOD,
    AdvancesEligibility.VALIDITY_PERIOD,
    AdvancesEligibility.ADVANCE_TYPE_NAV,
    AdvancesEligibility.BASE_PAY_COMPONENT_GROUP_NAV,
    AdvancesEligibility.BASE_PAY_COMPONENT_NAV,
    AdvancesEligibility.CALCULATION_PERCENTAGE_ON_NAV,
    AdvancesEligibility.COMPANY_NAV,
    AdvancesEligibility.CREATED_BY_NAV,
    AdvancesEligibility.CURRENCY_GO_NAV,
    AdvancesEligibility.CURRENCY_NAV,
    AdvancesEligibility.DAY_OF_DEDUCTION_NAV,
    AdvancesEligibility.DEDUCTION_DATE_FORMAT_NAV,
    AdvancesEligibility.DEFAULT_WORKFLOW_NAV,
    AdvancesEligibility.DEPARTMENT_NAV,
    AdvancesEligibility.EFFECTIVE_STATUS_NAV,
    AdvancesEligibility.ENABLE_AUTO_RECOVERY_NAV,
    AdvancesEligibility.EXCEPTION_WORKFLOW_NAV,
    AdvancesEligibility.INSTALLMENT_FREQUENCY_NAV,
    AdvancesEligibility.INTEREST_TYPE_NAV,
    AdvancesEligibility.LAST_MODIFIED_BY_NAV,
    AdvancesEligibility.MDF_SYSTEM_RECORD_STATUS_NAV,
    AdvancesEligibility.MONTH_DATE_NAV,
    AdvancesEligibility.NUMBER_OF_INSTALLMENTS_EDITABLE_BY_EMPLOYEE_NAV,
    AdvancesEligibility.OCCURANCE_OF_DAY_NAV,
    AdvancesEligibility.PAY_COMPONENT_TYPE_NAV,
    AdvancesEligibility.PAYGRADE_NAV,
    AdvancesEligibility.RECOVERY_MODE_EDITABLE_BY_EMPLOYEE_NAV,
    AdvancesEligibility.RECOVERY_MODE_NAV,
    AdvancesEligibility.UNIT_OF_PERIOD_NAV,
    AdvancesEligibility.WF_REQUEST_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<AdvancesEligibility> = new AllFields('*', AdvancesEligibility);
  /**
   * All key fields of the AdvancesEligibility entity.
   */
  export const _keyFields: Array<Selectable<AdvancesEligibility>> = [AdvancesEligibility.EFFECTIVE_START_DATE, AdvancesEligibility.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property AdvancesEligibility.
   */
  export const _keys: { [keys: string]: Selectable<AdvancesEligibility> } = AdvancesEligibility._keyFields.reduce((acc: { [keys: string]: Selectable<AdvancesEligibility> }, field: Selectable<AdvancesEligibility>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
