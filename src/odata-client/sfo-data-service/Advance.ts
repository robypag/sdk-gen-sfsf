/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AdvanceRequestBuilder } from './AdvanceRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "Advance" of service "SFOData".
 */
export class Advance extends Entity implements AdvanceType {
  /**
   * Technical entity name for Advance.
   */
  static _entityName = 'Advance';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for Advance.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Non Recurring Payment_NRP ID.
   * Maximum length: 128.
   */
  nonRecurringPaymentExternalCode!: string;
  /**
   * Advance Eligibility.
   * Maximum length: 128.
   * @nullable
   */
  advanceEligibilityCode?: string;
  /**
   * Advance Type.
   * Maximum length: 32.
   * @nullable
   */
  advanceType?: string;
  /**
   * Approval Status.
   * Maximum length: 255.
   * @nullable
   */
  approvalStatus?: string;
  /**
   * Approver.
   * Maximum length: 100.
   * @nullable
   */
  approver?: string;
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
   * currencyCode.
   * Maximum length: 255.
   * @nullable
   */
  currencyCode?: string;
  /**
   * Currency.
   * Maximum length: 128.
   * @nullable
   */
  currencyGo?: string;
  /**
   * Eligible Amount.
   * @nullable
   */
  eligibileAmount?: BigNumber;
  /**
   * Remaining Eligibility.
   * @nullable
   */
  eligibilityAmount?: BigNumber;
  /**
   * Advance Type.
   * Maximum length: 255.
   * @nullable
   */
  eligibleAdvanceType?: string;
  /**
   * Advance ID.
   * Maximum length: 128.
   */
  externalCode!: string;
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
   * Description.
   * Maximum length: 255.
   * @nullable
   */
  notesForApprover?: string;
  /**
   * Number of Installments.
   * @nullable
   */
  numberOfInstallments?: BigNumber;
  /**
   * Payment Mode.
   * Maximum length: 128.
   * @nullable
   */
  paymentMode?: string;
  /**
   * Pending Amount.
   * @nullable
   */
  pendingAmount?: BigNumber;
  /**
   * Eligibility Valid Until.
   * @nullable
   */
  periodEndDate?: Moment;
  /**
   * Eligibility Valid From.
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
   * Recovery Status.
   * Maximum length: 255.
   * @nullable
   */
  recoveryStatus?: string;
  /**
   * Remaining Requests.
   * @nullable
   */
  remainingRequests?: BigNumber;
  /**
   * Request Date.
   * @nullable
   */
  requestDate?: Moment;
  /**
   * Requested Amount.
   * @nullable
   */
  requestedAmount?: BigNumber;
  /**
   * Total Repayment Amount.
   * @nullable
   */
  totalRepaymentAmount?: BigNumber;
  /**
   * One-to-many navigation property to the [[AdvancesEligibility]] entity.
   */
  advanceEligibilityCodeNav!: AdvancesEligibility[];
  /**
   * One-to-many navigation property to the [[FoPayComponent]] entity.
   */
  advanceTypeNav!: FoPayComponent[];
  /**
   * One-to-many navigation property to the [[AdvancesInstallments]] entity.
   */
  advancesInstallments!: AdvancesInstallments[];
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  approvalStatusNav!: MdfEnumValue;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  approverNav!: User;
  /**
   * One-to-one navigation property to the [[Attachment]] entity.
   */
  attachmentNav!: Attachment;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  createdByNav!: User;
  /**
   * One-to-many navigation property to the [[Currency]] entity.
   */
  currencyGoNav!: Currency[];
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
   * One-to-many navigation property to the [[PickListValueV2]] entity.
   */
  paymentModeNav!: PickListValueV2[];
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  recoveryModeNav!: MdfEnumValue;
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  recoveryStatusNav!: MdfEnumValue;

  /**
   * Returns an entity builder to construct instances `Advance`.
   * @returns A builder that constructs instances of entity type `Advance`.
   */
  static builder(): EntityBuilderType<Advance, AdvanceTypeForceMandatory> {
    return Entity.entityBuilder(Advance);
  }

  /**
   * Returns a request builder to construct requests for operations on the `Advance` entity type.
   * @returns A `Advance` request builder.
   */
  static requestBuilder(): AdvanceRequestBuilder {
    return new AdvanceRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `Advance`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `Advance`.
   */
  static customField(fieldName: string): CustomField<Advance> {
    return Entity.customFieldSelector(fieldName, Advance);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { AdvancesEligibility, AdvancesEligibilityType } from './AdvancesEligibility';
import { FoPayComponent, FoPayComponentType } from './FoPayComponent';
import { AdvancesInstallments, AdvancesInstallmentsType } from './AdvancesInstallments';
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';
import { User, UserType } from './User';
import { Attachment, AttachmentType } from './Attachment';
import { Currency, CurrencyType } from './Currency';
import { FoFrequency, FoFrequencyType } from './FoFrequency';
import { PickListValueV2, PickListValueV2Type } from './PickListValueV2';

export interface AdvanceType {
  nonRecurringPaymentExternalCode: string;
  advanceEligibilityCode?: string;
  advanceType?: string;
  approvalStatus?: string;
  approver?: string;
  createdBy?: string;
  createdDateTime?: Moment;
  currencyCode?: string;
  currencyGo?: string;
  eligibileAmount?: BigNumber;
  eligibilityAmount?: BigNumber;
  eligibleAdvanceType?: string;
  externalCode: string;
  installmentAmount?: BigNumber;
  installmentFrequency?: string;
  interestRate?: BigNumber;
  interestType?: string;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  mdfSystemRecordStatus?: string;
  notesForApprover?: string;
  numberOfInstallments?: BigNumber;
  paymentMode?: string;
  pendingAmount?: BigNumber;
  periodEndDate?: Moment;
  periodStartDate?: Moment;
  recoveryMode?: string;
  recoveryStatus?: string;
  remainingRequests?: BigNumber;
  requestDate?: Moment;
  requestedAmount?: BigNumber;
  totalRepaymentAmount?: BigNumber;
  advanceEligibilityCodeNav: AdvancesEligibilityType[];
  advanceTypeNav: FoPayComponentType[];
  advancesInstallments: AdvancesInstallmentsType[];
  approvalStatusNav: MdfEnumValueType;
  approverNav: UserType;
  attachmentNav: AttachmentType;
  createdByNav: UserType;
  currencyGoNav: CurrencyType[];
  installmentFrequencyNav: FoFrequencyType;
  interestTypeNav: MdfEnumValueType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  paymentModeNav: PickListValueV2Type[];
  recoveryModeNav: MdfEnumValueType;
  recoveryStatusNav: MdfEnumValueType;
}

export interface AdvanceTypeForceMandatory {
  nonRecurringPaymentExternalCode: string;
  advanceEligibilityCode: string;
  advanceType: string;
  approvalStatus: string;
  approver: string;
  createdBy: string;
  createdDateTime: Moment;
  currencyCode: string;
  currencyGo: string;
  eligibileAmount: BigNumber;
  eligibilityAmount: BigNumber;
  eligibleAdvanceType: string;
  externalCode: string;
  installmentAmount: BigNumber;
  installmentFrequency: string;
  interestRate: BigNumber;
  interestType: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  mdfSystemRecordStatus: string;
  notesForApprover: string;
  numberOfInstallments: BigNumber;
  paymentMode: string;
  pendingAmount: BigNumber;
  periodEndDate: Moment;
  periodStartDate: Moment;
  recoveryMode: string;
  recoveryStatus: string;
  remainingRequests: BigNumber;
  requestDate: Moment;
  requestedAmount: BigNumber;
  totalRepaymentAmount: BigNumber;
  advanceEligibilityCodeNav: AdvancesEligibilityType[];
  advanceTypeNav: FoPayComponentType[];
  advancesInstallments: AdvancesInstallmentsType[];
  approvalStatusNav: MdfEnumValueType;
  approverNav: UserType;
  attachmentNav: AttachmentType;
  createdByNav: UserType;
  currencyGoNav: CurrencyType[];
  installmentFrequencyNav: FoFrequencyType;
  interestTypeNav: MdfEnumValueType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  paymentModeNav: PickListValueV2Type[];
  recoveryModeNav: MdfEnumValueType;
  recoveryStatusNav: MdfEnumValueType;
}

export namespace Advance {
  /**
   * Static representation of the [[nonRecurringPaymentExternalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NON_RECURRING_PAYMENT_EXTERNAL_CODE: StringField<Advance> = new StringField('NonRecurringPayment_externalCode', Advance, 'Edm.String');
  /**
   * Static representation of the [[advanceEligibilityCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADVANCE_ELIGIBILITY_CODE: StringField<Advance> = new StringField('advanceEligibilityCode', Advance, 'Edm.String');
  /**
   * Static representation of the [[advanceType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADVANCE_TYPE: StringField<Advance> = new StringField('advanceType', Advance, 'Edm.String');
  /**
   * Static representation of the [[approvalStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const APPROVAL_STATUS: StringField<Advance> = new StringField('approvalStatus', Advance, 'Edm.String');
  /**
   * Static representation of the [[approver]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const APPROVER: StringField<Advance> = new StringField('approver', Advance, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<Advance> = new StringField('createdBy', Advance, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<Advance> = new DateField('createdDateTime', Advance, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[currencyCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CURRENCY_CODE: StringField<Advance> = new StringField('currencyCode', Advance, 'Edm.String');
  /**
   * Static representation of the [[currencyGo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CURRENCY_GO: StringField<Advance> = new StringField('currencyGO', Advance, 'Edm.String');
  /**
   * Static representation of the [[eligibileAmount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ELIGIBILE_AMOUNT: BigNumberField<Advance> = new BigNumberField('eligibileAmount', Advance, 'Edm.Decimal');
  /**
   * Static representation of the [[eligibilityAmount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ELIGIBILITY_AMOUNT: BigNumberField<Advance> = new BigNumberField('eligibilityAmount', Advance, 'Edm.Decimal');
  /**
   * Static representation of the [[eligibleAdvanceType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ELIGIBLE_ADVANCE_TYPE: StringField<Advance> = new StringField('eligibleAdvanceType', Advance, 'Edm.String');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: StringField<Advance> = new StringField('externalCode', Advance, 'Edm.String');
  /**
   * Static representation of the [[installmentAmount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INSTALLMENT_AMOUNT: BigNumberField<Advance> = new BigNumberField('installmentAmount', Advance, 'Edm.Decimal');
  /**
   * Static representation of the [[installmentFrequency]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INSTALLMENT_FREQUENCY: StringField<Advance> = new StringField('installmentFrequency', Advance, 'Edm.String');
  /**
   * Static representation of the [[interestRate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INTEREST_RATE: BigNumberField<Advance> = new BigNumberField('interestRate', Advance, 'Edm.Decimal');
  /**
   * Static representation of the [[interestType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INTEREST_TYPE: StringField<Advance> = new StringField('interestType', Advance, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<Advance> = new StringField('lastModifiedBy', Advance, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<Advance> = new DateField('lastModifiedDateTime', Advance, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<Advance> = new StringField('mdfSystemRecordStatus', Advance, 'Edm.String');
  /**
   * Static representation of the [[notesForApprover]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NOTES_FOR_APPROVER: StringField<Advance> = new StringField('notesForApprover', Advance, 'Edm.String');
  /**
   * Static representation of the [[numberOfInstallments]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NUMBER_OF_INSTALLMENTS: BigNumberField<Advance> = new BigNumberField('numberOfInstallments', Advance, 'Edm.Int64');
  /**
   * Static representation of the [[paymentMode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_MODE: StringField<Advance> = new StringField('paymentMode', Advance, 'Edm.String');
  /**
   * Static representation of the [[pendingAmount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PENDING_AMOUNT: BigNumberField<Advance> = new BigNumberField('pendingAmount', Advance, 'Edm.Decimal');
  /**
   * Static representation of the [[periodEndDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PERIOD_END_DATE: DateField<Advance> = new DateField('periodEndDate', Advance, 'Edm.DateTime');
  /**
   * Static representation of the [[periodStartDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PERIOD_START_DATE: DateField<Advance> = new DateField('periodStartDate', Advance, 'Edm.DateTime');
  /**
   * Static representation of the [[recoveryMode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RECOVERY_MODE: StringField<Advance> = new StringField('recoveryMode', Advance, 'Edm.String');
  /**
   * Static representation of the [[recoveryStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RECOVERY_STATUS: StringField<Advance> = new StringField('recoveryStatus', Advance, 'Edm.String');
  /**
   * Static representation of the [[remainingRequests]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REMAINING_REQUESTS: BigNumberField<Advance> = new BigNumberField('remainingRequests', Advance, 'Edm.Int64');
  /**
   * Static representation of the [[requestDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REQUEST_DATE: DateField<Advance> = new DateField('requestDate', Advance, 'Edm.DateTime');
  /**
   * Static representation of the [[requestedAmount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REQUESTED_AMOUNT: BigNumberField<Advance> = new BigNumberField('requestedAmount', Advance, 'Edm.Decimal');
  /**
   * Static representation of the [[totalRepaymentAmount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TOTAL_REPAYMENT_AMOUNT: BigNumberField<Advance> = new BigNumberField('totalRepaymentAmount', Advance, 'Edm.Decimal');
  /**
   * Static representation of the one-to-many navigation property [[advanceEligibilityCodeNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADVANCE_ELIGIBILITY_CODE_NAV: Link<Advance, AdvancesEligibility> = new Link('advanceEligibilityCodeNav', Advance, AdvancesEligibility);
  /**
   * Static representation of the one-to-many navigation property [[advanceTypeNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADVANCE_TYPE_NAV: Link<Advance, FoPayComponent> = new Link('advanceTypeNav', Advance, FoPayComponent);
  /**
   * Static representation of the one-to-many navigation property [[advancesInstallments]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADVANCES_INSTALLMENTS: Link<Advance, AdvancesInstallments> = new Link('advancesInstallments', Advance, AdvancesInstallments);
  /**
   * Static representation of the one-to-one navigation property [[approvalStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const APPROVAL_STATUS_NAV: OneToOneLink<Advance, MdfEnumValue> = new OneToOneLink('approvalStatusNav', Advance, MdfEnumValue);
  /**
   * Static representation of the one-to-one navigation property [[approverNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const APPROVER_NAV: OneToOneLink<Advance, User> = new OneToOneLink('approverNav', Advance, User);
  /**
   * Static representation of the one-to-one navigation property [[attachmentNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ATTACHMENT_NAV: OneToOneLink<Advance, Attachment> = new OneToOneLink('attachmentNav', Advance, Attachment);
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<Advance, User> = new OneToOneLink('createdByNav', Advance, User);
  /**
   * Static representation of the one-to-many navigation property [[currencyGoNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CURRENCY_GO_NAV: Link<Advance, Currency> = new Link('currencyGONav', Advance, Currency);
  /**
   * Static representation of the one-to-one navigation property [[installmentFrequencyNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INSTALLMENT_FREQUENCY_NAV: OneToOneLink<Advance, FoFrequency> = new OneToOneLink('installmentFrequencyNav', Advance, FoFrequency);
  /**
   * Static representation of the one-to-one navigation property [[interestTypeNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INTEREST_TYPE_NAV: OneToOneLink<Advance, MdfEnumValue> = new OneToOneLink('interestTypeNav', Advance, MdfEnumValue);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<Advance, User> = new OneToOneLink('lastModifiedByNav', Advance, User);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<Advance, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', Advance, MdfEnumValue);
  /**
   * Static representation of the one-to-many navigation property [[paymentModeNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_MODE_NAV: Link<Advance, PickListValueV2> = new Link('paymentModeNav', Advance, PickListValueV2);
  /**
   * Static representation of the one-to-one navigation property [[recoveryModeNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RECOVERY_MODE_NAV: OneToOneLink<Advance, MdfEnumValue> = new OneToOneLink('recoveryModeNav', Advance, MdfEnumValue);
  /**
   * Static representation of the one-to-one navigation property [[recoveryStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RECOVERY_STATUS_NAV: OneToOneLink<Advance, MdfEnumValue> = new OneToOneLink('recoveryStatusNav', Advance, MdfEnumValue);
  /**
   * All fields of the Advance entity.
   */
  export const _allFields: Array<StringField<Advance> | DateField<Advance> | BigNumberField<Advance> | Link<Advance, AdvancesEligibility> | Link<Advance, FoPayComponent> | Link<Advance, AdvancesInstallments> | OneToOneLink<Advance, MdfEnumValue> | OneToOneLink<Advance, User> | OneToOneLink<Advance, Attachment> | Link<Advance, Currency> | OneToOneLink<Advance, FoFrequency> | Link<Advance, PickListValueV2>> = [
    Advance.NON_RECURRING_PAYMENT_EXTERNAL_CODE,
    Advance.ADVANCE_ELIGIBILITY_CODE,
    Advance.ADVANCE_TYPE,
    Advance.APPROVAL_STATUS,
    Advance.APPROVER,
    Advance.CREATED_BY,
    Advance.CREATED_DATE_TIME,
    Advance.CURRENCY_CODE,
    Advance.CURRENCY_GO,
    Advance.ELIGIBILE_AMOUNT,
    Advance.ELIGIBILITY_AMOUNT,
    Advance.ELIGIBLE_ADVANCE_TYPE,
    Advance.EXTERNAL_CODE,
    Advance.INSTALLMENT_AMOUNT,
    Advance.INSTALLMENT_FREQUENCY,
    Advance.INTEREST_RATE,
    Advance.INTEREST_TYPE,
    Advance.LAST_MODIFIED_BY,
    Advance.LAST_MODIFIED_DATE_TIME,
    Advance.MDF_SYSTEM_RECORD_STATUS,
    Advance.NOTES_FOR_APPROVER,
    Advance.NUMBER_OF_INSTALLMENTS,
    Advance.PAYMENT_MODE,
    Advance.PENDING_AMOUNT,
    Advance.PERIOD_END_DATE,
    Advance.PERIOD_START_DATE,
    Advance.RECOVERY_MODE,
    Advance.RECOVERY_STATUS,
    Advance.REMAINING_REQUESTS,
    Advance.REQUEST_DATE,
    Advance.REQUESTED_AMOUNT,
    Advance.TOTAL_REPAYMENT_AMOUNT,
    Advance.ADVANCE_ELIGIBILITY_CODE_NAV,
    Advance.ADVANCE_TYPE_NAV,
    Advance.ADVANCES_INSTALLMENTS,
    Advance.APPROVAL_STATUS_NAV,
    Advance.APPROVER_NAV,
    Advance.ATTACHMENT_NAV,
    Advance.CREATED_BY_NAV,
    Advance.CURRENCY_GO_NAV,
    Advance.INSTALLMENT_FREQUENCY_NAV,
    Advance.INTEREST_TYPE_NAV,
    Advance.LAST_MODIFIED_BY_NAV,
    Advance.MDF_SYSTEM_RECORD_STATUS_NAV,
    Advance.PAYMENT_MODE_NAV,
    Advance.RECOVERY_MODE_NAV,
    Advance.RECOVERY_STATUS_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<Advance> = new AllFields('*', Advance);
  /**
   * All key fields of the Advance entity.
   */
  export const _keyFields: Array<Selectable<Advance>> = [Advance.NON_RECURRING_PAYMENT_EXTERNAL_CODE, Advance.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property Advance.
   */
  export const _keys: { [keys: string]: Selectable<Advance> } = Advance._keyFields.reduce((acc: { [keys: string]: Selectable<Advance> }, field: Selectable<Advance>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
