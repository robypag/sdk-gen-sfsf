/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AdvancesInstallmentsRequestBuilder } from './AdvancesInstallmentsRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "AdvancesInstallments" of service "SFOData".
 */
export class AdvancesInstallments extends Entity implements AdvancesInstallmentsType {
  /**
   * Technical entity name for AdvancesInstallments.
   */
  static _entityName = 'AdvancesInstallments';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for AdvancesInstallments.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Advance_Advance ID.
   * Maximum length: 128.
   */
  advanceExternalCode!: string;
  /**
   * Non Recurring Payment_NRP ID.
   * Maximum length: 128.
   */
  nonRecurringPaymentExternalCode!: string;
  /**
   * Amortization.
   * @nullable
   */
  amortization?: BigNumber;
  /**
   * Amortization Total.
   * @nullable
   */
  amortizationTotal?: BigNumber;
  /**
   * Balance Remaining.
   * @nullable
   */
  balanceRemaining?: BigNumber;
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
   * Currency.
   * Maximum length: 255.
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
   * Recovery ID.
   * Maximum length: 128.
   */
  externalCode!: string;
  /**
   * Installment Amount.
   * @nullable
   */
  installmentAmount?: BigNumber;
  /**
   * Installment Status.
   * Maximum length: 255.
   * @nullable
   */
  installmentStatus?: string;
  /**
   * Interest Amount.
   * @nullable
   */
  interestAmount?: BigNumber;
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
   * Record Status.
   * Maximum length: 255.
   * @nullable
   */
  mdfSystemRecordStatus?: string;
  /**
   * Payment Date.
   * @nullable
   */
  paymentDate?: Moment;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  createdByNav!: User;
  /**
   * One-to-many navigation property to the [[Currency]] entity.
   */
  currencyGoNav!: Currency[];
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  installmentStatusNav!: MdfEnumValue;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  lastModifiedByNav!: User;
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  mdfSystemRecordStatusNav!: MdfEnumValue;

  /**
   * Returns an entity builder to construct instances `AdvancesInstallments`.
   * @returns A builder that constructs instances of entity type `AdvancesInstallments`.
   */
  static builder(): EntityBuilderType<AdvancesInstallments, AdvancesInstallmentsTypeForceMandatory> {
    return Entity.entityBuilder(AdvancesInstallments);
  }

  /**
   * Returns a request builder to construct requests for operations on the `AdvancesInstallments` entity type.
   * @returns A `AdvancesInstallments` request builder.
   */
  static requestBuilder(): AdvancesInstallmentsRequestBuilder {
    return new AdvancesInstallmentsRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `AdvancesInstallments`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `AdvancesInstallments`.
   */
  static customField(fieldName: string): CustomField<AdvancesInstallments> {
    return Entity.customFieldSelector(fieldName, AdvancesInstallments);
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

export interface AdvancesInstallmentsType {
  advanceExternalCode: string;
  nonRecurringPaymentExternalCode: string;
  amortization?: BigNumber;
  amortizationTotal?: BigNumber;
  balanceRemaining?: BigNumber;
  createdBy?: string;
  createdDateTime?: Moment;
  currency?: string;
  currencyGo?: string;
  externalCode: string;
  installmentAmount?: BigNumber;
  installmentStatus?: string;
  interestAmount?: BigNumber;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  mdfSystemRecordStatus?: string;
  paymentDate?: Moment;
  createdByNav: UserType;
  currencyGoNav: CurrencyType[];
  installmentStatusNav: MdfEnumValueType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
}

export interface AdvancesInstallmentsTypeForceMandatory {
  advanceExternalCode: string;
  nonRecurringPaymentExternalCode: string;
  amortization: BigNumber;
  amortizationTotal: BigNumber;
  balanceRemaining: BigNumber;
  createdBy: string;
  createdDateTime: Moment;
  currency: string;
  currencyGo: string;
  externalCode: string;
  installmentAmount: BigNumber;
  installmentStatus: string;
  interestAmount: BigNumber;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  mdfSystemRecordStatus: string;
  paymentDate: Moment;
  createdByNav: UserType;
  currencyGoNav: CurrencyType[];
  installmentStatusNav: MdfEnumValueType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
}

export namespace AdvancesInstallments {
  /**
   * Static representation of the [[advanceExternalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADVANCE_EXTERNAL_CODE: StringField<AdvancesInstallments> = new StringField('Advance_externalCode', AdvancesInstallments, 'Edm.String');
  /**
   * Static representation of the [[nonRecurringPaymentExternalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NON_RECURRING_PAYMENT_EXTERNAL_CODE: StringField<AdvancesInstallments> = new StringField('NonRecurringPayment_externalCode', AdvancesInstallments, 'Edm.String');
  /**
   * Static representation of the [[amortization]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const AMORTIZATION: BigNumberField<AdvancesInstallments> = new BigNumberField('amortization', AdvancesInstallments, 'Edm.Decimal');
  /**
   * Static representation of the [[amortizationTotal]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const AMORTIZATION_TOTAL: BigNumberField<AdvancesInstallments> = new BigNumberField('amortizationTotal', AdvancesInstallments, 'Edm.Decimal');
  /**
   * Static representation of the [[balanceRemaining]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BALANCE_REMAINING: BigNumberField<AdvancesInstallments> = new BigNumberField('balanceRemaining', AdvancesInstallments, 'Edm.Decimal');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<AdvancesInstallments> = new StringField('createdBy', AdvancesInstallments, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<AdvancesInstallments> = new DateField('createdDateTime', AdvancesInstallments, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[currency]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CURRENCY: StringField<AdvancesInstallments> = new StringField('currency', AdvancesInstallments, 'Edm.String');
  /**
   * Static representation of the [[currencyGo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CURRENCY_GO: StringField<AdvancesInstallments> = new StringField('currencyGO', AdvancesInstallments, 'Edm.String');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: StringField<AdvancesInstallments> = new StringField('externalCode', AdvancesInstallments, 'Edm.String');
  /**
   * Static representation of the [[installmentAmount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INSTALLMENT_AMOUNT: BigNumberField<AdvancesInstallments> = new BigNumberField('installmentAmount', AdvancesInstallments, 'Edm.Decimal');
  /**
   * Static representation of the [[installmentStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INSTALLMENT_STATUS: StringField<AdvancesInstallments> = new StringField('installmentStatus', AdvancesInstallments, 'Edm.String');
  /**
   * Static representation of the [[interestAmount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INTEREST_AMOUNT: BigNumberField<AdvancesInstallments> = new BigNumberField('interestAmount', AdvancesInstallments, 'Edm.Decimal');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<AdvancesInstallments> = new StringField('lastModifiedBy', AdvancesInstallments, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<AdvancesInstallments> = new DateField('lastModifiedDateTime', AdvancesInstallments, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<AdvancesInstallments> = new StringField('mdfSystemRecordStatus', AdvancesInstallments, 'Edm.String');
  /**
   * Static representation of the [[paymentDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_DATE: DateField<AdvancesInstallments> = new DateField('paymentDate', AdvancesInstallments, 'Edm.DateTime');
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<AdvancesInstallments, User> = new OneToOneLink('createdByNav', AdvancesInstallments, User);
  /**
   * Static representation of the one-to-many navigation property [[currencyGoNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CURRENCY_GO_NAV: Link<AdvancesInstallments, Currency> = new Link('currencyGONav', AdvancesInstallments, Currency);
  /**
   * Static representation of the one-to-one navigation property [[installmentStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INSTALLMENT_STATUS_NAV: OneToOneLink<AdvancesInstallments, MdfEnumValue> = new OneToOneLink('installmentStatusNav', AdvancesInstallments, MdfEnumValue);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<AdvancesInstallments, User> = new OneToOneLink('lastModifiedByNav', AdvancesInstallments, User);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<AdvancesInstallments, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', AdvancesInstallments, MdfEnumValue);
  /**
   * All fields of the AdvancesInstallments entity.
   */
  export const _allFields: Array<StringField<AdvancesInstallments> | BigNumberField<AdvancesInstallments> | DateField<AdvancesInstallments> | OneToOneLink<AdvancesInstallments, User> | Link<AdvancesInstallments, Currency> | OneToOneLink<AdvancesInstallments, MdfEnumValue>> = [
    AdvancesInstallments.ADVANCE_EXTERNAL_CODE,
    AdvancesInstallments.NON_RECURRING_PAYMENT_EXTERNAL_CODE,
    AdvancesInstallments.AMORTIZATION,
    AdvancesInstallments.AMORTIZATION_TOTAL,
    AdvancesInstallments.BALANCE_REMAINING,
    AdvancesInstallments.CREATED_BY,
    AdvancesInstallments.CREATED_DATE_TIME,
    AdvancesInstallments.CURRENCY,
    AdvancesInstallments.CURRENCY_GO,
    AdvancesInstallments.EXTERNAL_CODE,
    AdvancesInstallments.INSTALLMENT_AMOUNT,
    AdvancesInstallments.INSTALLMENT_STATUS,
    AdvancesInstallments.INTEREST_AMOUNT,
    AdvancesInstallments.LAST_MODIFIED_BY,
    AdvancesInstallments.LAST_MODIFIED_DATE_TIME,
    AdvancesInstallments.MDF_SYSTEM_RECORD_STATUS,
    AdvancesInstallments.PAYMENT_DATE,
    AdvancesInstallments.CREATED_BY_NAV,
    AdvancesInstallments.CURRENCY_GO_NAV,
    AdvancesInstallments.INSTALLMENT_STATUS_NAV,
    AdvancesInstallments.LAST_MODIFIED_BY_NAV,
    AdvancesInstallments.MDF_SYSTEM_RECORD_STATUS_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<AdvancesInstallments> = new AllFields('*', AdvancesInstallments);
  /**
   * All key fields of the AdvancesInstallments entity.
   */
  export const _keyFields: Array<Selectable<AdvancesInstallments>> = [AdvancesInstallments.ADVANCE_EXTERNAL_CODE, AdvancesInstallments.NON_RECURRING_PAYMENT_EXTERNAL_CODE, AdvancesInstallments.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property AdvancesInstallments.
   */
  export const _keys: { [keys: string]: Selectable<AdvancesInstallments> } = AdvancesInstallments._keyFields.reduce((acc: { [keys: string]: Selectable<AdvancesInstallments> }, field: Selectable<AdvancesInstallments>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
