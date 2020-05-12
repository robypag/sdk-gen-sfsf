/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PaymentInformationDetailV3RequestBuilder } from './PaymentInformationDetailV3RequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "PaymentInformationDetailV3" of service "SFOData".
 */
export class PaymentInformationDetailV3 extends Entity implements PaymentInformationDetailV3Type {
  /**
   * Technical entity name for PaymentInformationDetailV3.
   */
  static _entityName = 'PaymentInformationDetailV3';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for PaymentInformationDetailV3.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Payment Information _Effective start date.
   */
  paymentInformationV3EffectiveStartDate!: Moment;
  /**
   * Payment Information _Worker.
   * Maximum length: 100.
   */
  paymentInformationV3Worker!: string;
  /**
   * Account Number.
   * Maximum length: 255.
   * @nullable
   */
  accountNumber?: string;
  /**
   * Account Owner.
   * Maximum length: 255.
   * @nullable
   */
  accountOwner?: string;
  /**
   * Amount.
   * @nullable
   */
  amount?: BigNumber;
  /**
   * Bank.
   * Maximum length: 128.
   * @nullable
   */
  bank?: string;
  /**
   * Bank Country/Region.
   * Maximum length: 128.
   * @nullable
   */
  bankCountry?: string;
  /**
   * Business Identifier Code.
   * Maximum length: 11.
   * @nullable
   */
  businessIdentifierCode?: string;
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
   * Currency.
   * Maximum length: 128.
   * @nullable
   */
  currency?: string;
  /**
   * Customized Pay Type.
   * Maximum length: 128.
   * @nullable
   */
  customPayType?: string;
  /**
   * externalCode.
   */
  externalCode!: BigNumber;
  /**
   * IBAN.
   * Maximum length: 35.
   * @nullable
   */
  iban?: string;
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
   * Pay Sequence.
   * @nullable
   */
  paySequence?: BigNumber;
  /**
   * Pay Type.
   * Maximum length: 255.
   * @nullable
   */
  payType?: string;
  /**
   * Payment Method.
   * Maximum length: 128.
   * @nullable
   */
  paymentMethod?: string;
  /**
   * Percent.
   * @nullable
   */
  percent?: BigNumber;
  /**
   * Purpose.
   * Maximum length: 40.
   * @nullable
   */
  purpose?: string;
  /**
   * Routing Number.
   * Maximum length: 255.
   * @nullable
   */
  routingNumber?: string;
  /**
   * One-to-many navigation property to the [[Country]] entity.
   */
  bankCountryNav!: Country[];
  /**
   * One-to-one navigation property to the [[Bank]] entity.
   */
  bankNav!: Bank;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  createdByNav!: User;
  /**
   * One-to-many navigation property to the [[Currency]] entity.
   */
  currencyNav!: Currency[];
  /**
   * One-to-one navigation property to the [[CustomPayType]] entity.
   */
  customPayTypeNav!: CustomPayType;
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
  payTypeNav!: MdfEnumValue;
  /**
   * One-to-one navigation property to the [[PaymentMethodV3]] entity.
   */
  paymentMethodNav!: PaymentMethodV3;
  /**
   * One-to-one navigation property to the [[PaymentInformationDetailV3Arg]] entity.
   */
  toPaymentInformationDetailV3Arg!: PaymentInformationDetailV3Arg;
  /**
   * One-to-one navigation property to the [[PaymentInformationDetailV3Blr]] entity.
   */
  toPaymentInformationDetailV3Blr!: PaymentInformationDetailV3Blr;
  /**
   * One-to-one navigation property to the [[PaymentInformationDetailV3Bra]] entity.
   */
  toPaymentInformationDetailV3Bra!: PaymentInformationDetailV3Bra;
  /**
   * One-to-one navigation property to the [[PaymentInformationDetailV3Chl]] entity.
   */
  toPaymentInformationDetailV3Chl!: PaymentInformationDetailV3Chl;
  /**
   * One-to-one navigation property to the [[PaymentInformationDetailV3Col]] entity.
   */
  toPaymentInformationDetailV3Col!: PaymentInformationDetailV3Col;
  /**
   * One-to-one navigation property to the [[PaymentInformationDetailV3Ecu]] entity.
   */
  toPaymentInformationDetailV3Ecu!: PaymentInformationDetailV3Ecu;
  /**
   * One-to-one navigation property to the [[PaymentInformationDetailV3Esp]] entity.
   */
  toPaymentInformationDetailV3Esp!: PaymentInformationDetailV3Esp;
  /**
   * One-to-one navigation property to the [[PaymentInformationDetailV3Fra]] entity.
   */
  toPaymentInformationDetailV3Fra!: PaymentInformationDetailV3Fra;
  /**
   * One-to-one navigation property to the [[PaymentInformationDetailV3Gbr]] entity.
   */
  toPaymentInformationDetailV3Gbr!: PaymentInformationDetailV3Gbr;
  /**
   * One-to-one navigation property to the [[PaymentInformationDetailV3Irq]] entity.
   */
  toPaymentInformationDetailV3Irq!: PaymentInformationDetailV3Irq;
  /**
   * One-to-one navigation property to the [[PaymentInformationDetailV3Isr]] entity.
   */
  toPaymentInformationDetailV3Isr!: PaymentInformationDetailV3Isr;
  /**
   * One-to-one navigation property to the [[PaymentInformationDetailV3Ita]] entity.
   */
  toPaymentInformationDetailV3Ita!: PaymentInformationDetailV3Ita;
  /**
   * One-to-one navigation property to the [[PaymentInformationDetailV3Jpn]] entity.
   */
  toPaymentInformationDetailV3Jpn!: PaymentInformationDetailV3Jpn;
  /**
   * One-to-one navigation property to the [[PaymentInformationDetailV3Ken]] entity.
   */
  toPaymentInformationDetailV3Ken!: PaymentInformationDetailV3Ken;
  /**
   * One-to-one navigation property to the [[PaymentInformationDetailV3Mex]] entity.
   */
  toPaymentInformationDetailV3Mex!: PaymentInformationDetailV3Mex;
  /**
   * One-to-one navigation property to the [[PaymentInformationDetailV3Mkd]] entity.
   */
  toPaymentInformationDetailV3Mkd!: PaymentInformationDetailV3Mkd;
  /**
   * One-to-one navigation property to the [[PaymentInformationDetailV3Mmr]] entity.
   */
  toPaymentInformationDetailV3Mmr!: PaymentInformationDetailV3Mmr;
  /**
   * One-to-one navigation property to the [[PaymentInformationDetailV3Moz]] entity.
   */
  toPaymentInformationDetailV3Moz!: PaymentInformationDetailV3Moz;
  /**
   * One-to-one navigation property to the [[PaymentInformationDetailV3Mwi]] entity.
   */
  toPaymentInformationDetailV3Mwi!: PaymentInformationDetailV3Mwi;
  /**
   * One-to-one navigation property to the [[PaymentInformationDetailV3Nam]] entity.
   */
  toPaymentInformationDetailV3Nam!: PaymentInformationDetailV3Nam;
  /**
   * One-to-one navigation property to the [[PaymentInformationDetailV3Nga]] entity.
   */
  toPaymentInformationDetailV3Nga!: PaymentInformationDetailV3Nga;
  /**
   * One-to-one navigation property to the [[PaymentInformationDetailV3Nzl]] entity.
   */
  toPaymentInformationDetailV3Nzl!: PaymentInformationDetailV3Nzl;
  /**
   * One-to-one navigation property to the [[PaymentInformationDetailV3Per]] entity.
   */
  toPaymentInformationDetailV3Per!: PaymentInformationDetailV3Per;
  /**
   * One-to-one navigation property to the [[PaymentInformationDetailV3Svn]] entity.
   */
  toPaymentInformationDetailV3Svn!: PaymentInformationDetailV3Svn;
  /**
   * One-to-one navigation property to the [[PaymentInformationDetailV3Usa]] entity.
   */
  toPaymentInformationDetailV3Usa!: PaymentInformationDetailV3Usa;
  /**
   * One-to-one navigation property to the [[PaymentInformationDetailV3Ven]] entity.
   */
  toPaymentInformationDetailV3Ven!: PaymentInformationDetailV3Ven;
  /**
   * One-to-one navigation property to the [[PaymentInformationDetailV3Zaf]] entity.
   */
  toPaymentInformationDetailV3Zaf!: PaymentInformationDetailV3Zaf;
  /**
   * One-to-one navigation property to the [[PaymentInformationDetailV3Zwe]] entity.
   */
  toPaymentInformationDetailV3Zwe!: PaymentInformationDetailV3Zwe;

  /**
   * Returns an entity builder to construct instances `PaymentInformationDetailV3`.
   * @returns A builder that constructs instances of entity type `PaymentInformationDetailV3`.
   */
  static builder(): EntityBuilderType<PaymentInformationDetailV3, PaymentInformationDetailV3TypeForceMandatory> {
    return Entity.entityBuilder(PaymentInformationDetailV3);
  }

  /**
   * Returns a request builder to construct requests for operations on the `PaymentInformationDetailV3` entity type.
   * @returns A `PaymentInformationDetailV3` request builder.
   */
  static requestBuilder(): PaymentInformationDetailV3RequestBuilder {
    return new PaymentInformationDetailV3RequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `PaymentInformationDetailV3`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `PaymentInformationDetailV3`.
   */
  static customField(fieldName: string): CustomField<PaymentInformationDetailV3> {
    return Entity.customFieldSelector(fieldName, PaymentInformationDetailV3);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { Country, CountryType } from './Country';
import { Bank, BankType } from './Bank';
import { User, UserType } from './User';
import { Currency, CurrencyType } from './Currency';
import { CustomPayType, CustomPayTypeType } from './CustomPayType';
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';
import { PaymentMethodV3, PaymentMethodV3Type } from './PaymentMethodV3';
import { PaymentInformationDetailV3Arg, PaymentInformationDetailV3ArgType } from './PaymentInformationDetailV3Arg';
import { PaymentInformationDetailV3Blr, PaymentInformationDetailV3BlrType } from './PaymentInformationDetailV3Blr';
import { PaymentInformationDetailV3Bra, PaymentInformationDetailV3BraType } from './PaymentInformationDetailV3Bra';
import { PaymentInformationDetailV3Chl, PaymentInformationDetailV3ChlType } from './PaymentInformationDetailV3Chl';
import { PaymentInformationDetailV3Col, PaymentInformationDetailV3ColType } from './PaymentInformationDetailV3Col';
import { PaymentInformationDetailV3Ecu, PaymentInformationDetailV3EcuType } from './PaymentInformationDetailV3Ecu';
import { PaymentInformationDetailV3Esp, PaymentInformationDetailV3EspType } from './PaymentInformationDetailV3Esp';
import { PaymentInformationDetailV3Fra, PaymentInformationDetailV3FraType } from './PaymentInformationDetailV3Fra';
import { PaymentInformationDetailV3Gbr, PaymentInformationDetailV3GbrType } from './PaymentInformationDetailV3Gbr';
import { PaymentInformationDetailV3Irq, PaymentInformationDetailV3IrqType } from './PaymentInformationDetailV3Irq';
import { PaymentInformationDetailV3Isr, PaymentInformationDetailV3IsrType } from './PaymentInformationDetailV3Isr';
import { PaymentInformationDetailV3Ita, PaymentInformationDetailV3ItaType } from './PaymentInformationDetailV3Ita';
import { PaymentInformationDetailV3Jpn, PaymentInformationDetailV3JpnType } from './PaymentInformationDetailV3Jpn';
import { PaymentInformationDetailV3Ken, PaymentInformationDetailV3KenType } from './PaymentInformationDetailV3Ken';
import { PaymentInformationDetailV3Mex, PaymentInformationDetailV3MexType } from './PaymentInformationDetailV3Mex';
import { PaymentInformationDetailV3Mkd, PaymentInformationDetailV3MkdType } from './PaymentInformationDetailV3Mkd';
import { PaymentInformationDetailV3Mmr, PaymentInformationDetailV3MmrType } from './PaymentInformationDetailV3Mmr';
import { PaymentInformationDetailV3Moz, PaymentInformationDetailV3MozType } from './PaymentInformationDetailV3Moz';
import { PaymentInformationDetailV3Mwi, PaymentInformationDetailV3MwiType } from './PaymentInformationDetailV3Mwi';
import { PaymentInformationDetailV3Nam, PaymentInformationDetailV3NamType } from './PaymentInformationDetailV3Nam';
import { PaymentInformationDetailV3Nga, PaymentInformationDetailV3NgaType } from './PaymentInformationDetailV3Nga';
import { PaymentInformationDetailV3Nzl, PaymentInformationDetailV3NzlType } from './PaymentInformationDetailV3Nzl';
import { PaymentInformationDetailV3Per, PaymentInformationDetailV3PerType } from './PaymentInformationDetailV3Per';
import { PaymentInformationDetailV3Svn, PaymentInformationDetailV3SvnType } from './PaymentInformationDetailV3Svn';
import { PaymentInformationDetailV3Usa, PaymentInformationDetailV3UsaType } from './PaymentInformationDetailV3Usa';
import { PaymentInformationDetailV3Ven, PaymentInformationDetailV3VenType } from './PaymentInformationDetailV3Ven';
import { PaymentInformationDetailV3Zaf, PaymentInformationDetailV3ZafType } from './PaymentInformationDetailV3Zaf';
import { PaymentInformationDetailV3Zwe, PaymentInformationDetailV3ZweType } from './PaymentInformationDetailV3Zwe';

export interface PaymentInformationDetailV3Type {
  paymentInformationV3EffectiveStartDate: Moment;
  paymentInformationV3Worker: string;
  accountNumber?: string;
  accountOwner?: string;
  amount?: BigNumber;
  bank?: string;
  bankCountry?: string;
  businessIdentifierCode?: string;
  createdBy?: string;
  createdDateTime?: Moment;
  currency?: string;
  customPayType?: string;
  externalCode: BigNumber;
  iban?: string;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  mdfSystemRecordStatus?: string;
  paySequence?: BigNumber;
  payType?: string;
  paymentMethod?: string;
  percent?: BigNumber;
  purpose?: string;
  routingNumber?: string;
  bankCountryNav: CountryType[];
  bankNav: BankType;
  createdByNav: UserType;
  currencyNav: CurrencyType[];
  customPayTypeNav: CustomPayTypeType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  payTypeNav: MdfEnumValueType;
  paymentMethodNav: PaymentMethodV3Type;
  toPaymentInformationDetailV3Arg: PaymentInformationDetailV3ArgType;
  toPaymentInformationDetailV3Blr: PaymentInformationDetailV3BlrType;
  toPaymentInformationDetailV3Bra: PaymentInformationDetailV3BraType;
  toPaymentInformationDetailV3Chl: PaymentInformationDetailV3ChlType;
  toPaymentInformationDetailV3Col: PaymentInformationDetailV3ColType;
  toPaymentInformationDetailV3Ecu: PaymentInformationDetailV3EcuType;
  toPaymentInformationDetailV3Esp: PaymentInformationDetailV3EspType;
  toPaymentInformationDetailV3Fra: PaymentInformationDetailV3FraType;
  toPaymentInformationDetailV3Gbr: PaymentInformationDetailV3GbrType;
  toPaymentInformationDetailV3Irq: PaymentInformationDetailV3IrqType;
  toPaymentInformationDetailV3Isr: PaymentInformationDetailV3IsrType;
  toPaymentInformationDetailV3Ita: PaymentInformationDetailV3ItaType;
  toPaymentInformationDetailV3Jpn: PaymentInformationDetailV3JpnType;
  toPaymentInformationDetailV3Ken: PaymentInformationDetailV3KenType;
  toPaymentInformationDetailV3Mex: PaymentInformationDetailV3MexType;
  toPaymentInformationDetailV3Mkd: PaymentInformationDetailV3MkdType;
  toPaymentInformationDetailV3Mmr: PaymentInformationDetailV3MmrType;
  toPaymentInformationDetailV3Moz: PaymentInformationDetailV3MozType;
  toPaymentInformationDetailV3Mwi: PaymentInformationDetailV3MwiType;
  toPaymentInformationDetailV3Nam: PaymentInformationDetailV3NamType;
  toPaymentInformationDetailV3Nga: PaymentInformationDetailV3NgaType;
  toPaymentInformationDetailV3Nzl: PaymentInformationDetailV3NzlType;
  toPaymentInformationDetailV3Per: PaymentInformationDetailV3PerType;
  toPaymentInformationDetailV3Svn: PaymentInformationDetailV3SvnType;
  toPaymentInformationDetailV3Usa: PaymentInformationDetailV3UsaType;
  toPaymentInformationDetailV3Ven: PaymentInformationDetailV3VenType;
  toPaymentInformationDetailV3Zaf: PaymentInformationDetailV3ZafType;
  toPaymentInformationDetailV3Zwe: PaymentInformationDetailV3ZweType;
}

export interface PaymentInformationDetailV3TypeForceMandatory {
  paymentInformationV3EffectiveStartDate: Moment;
  paymentInformationV3Worker: string;
  accountNumber: string;
  accountOwner: string;
  amount: BigNumber;
  bank: string;
  bankCountry: string;
  businessIdentifierCode: string;
  createdBy: string;
  createdDateTime: Moment;
  currency: string;
  customPayType: string;
  externalCode: BigNumber;
  iban: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  mdfSystemRecordStatus: string;
  paySequence: BigNumber;
  payType: string;
  paymentMethod: string;
  percent: BigNumber;
  purpose: string;
  routingNumber: string;
  bankCountryNav: CountryType[];
  bankNav: BankType;
  createdByNav: UserType;
  currencyNav: CurrencyType[];
  customPayTypeNav: CustomPayTypeType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  payTypeNav: MdfEnumValueType;
  paymentMethodNav: PaymentMethodV3Type;
  toPaymentInformationDetailV3Arg: PaymentInformationDetailV3ArgType;
  toPaymentInformationDetailV3Blr: PaymentInformationDetailV3BlrType;
  toPaymentInformationDetailV3Bra: PaymentInformationDetailV3BraType;
  toPaymentInformationDetailV3Chl: PaymentInformationDetailV3ChlType;
  toPaymentInformationDetailV3Col: PaymentInformationDetailV3ColType;
  toPaymentInformationDetailV3Ecu: PaymentInformationDetailV3EcuType;
  toPaymentInformationDetailV3Esp: PaymentInformationDetailV3EspType;
  toPaymentInformationDetailV3Fra: PaymentInformationDetailV3FraType;
  toPaymentInformationDetailV3Gbr: PaymentInformationDetailV3GbrType;
  toPaymentInformationDetailV3Irq: PaymentInformationDetailV3IrqType;
  toPaymentInformationDetailV3Isr: PaymentInformationDetailV3IsrType;
  toPaymentInformationDetailV3Ita: PaymentInformationDetailV3ItaType;
  toPaymentInformationDetailV3Jpn: PaymentInformationDetailV3JpnType;
  toPaymentInformationDetailV3Ken: PaymentInformationDetailV3KenType;
  toPaymentInformationDetailV3Mex: PaymentInformationDetailV3MexType;
  toPaymentInformationDetailV3Mkd: PaymentInformationDetailV3MkdType;
  toPaymentInformationDetailV3Mmr: PaymentInformationDetailV3MmrType;
  toPaymentInformationDetailV3Moz: PaymentInformationDetailV3MozType;
  toPaymentInformationDetailV3Mwi: PaymentInformationDetailV3MwiType;
  toPaymentInformationDetailV3Nam: PaymentInformationDetailV3NamType;
  toPaymentInformationDetailV3Nga: PaymentInformationDetailV3NgaType;
  toPaymentInformationDetailV3Nzl: PaymentInformationDetailV3NzlType;
  toPaymentInformationDetailV3Per: PaymentInformationDetailV3PerType;
  toPaymentInformationDetailV3Svn: PaymentInformationDetailV3SvnType;
  toPaymentInformationDetailV3Usa: PaymentInformationDetailV3UsaType;
  toPaymentInformationDetailV3Ven: PaymentInformationDetailV3VenType;
  toPaymentInformationDetailV3Zaf: PaymentInformationDetailV3ZafType;
  toPaymentInformationDetailV3Zwe: PaymentInformationDetailV3ZweType;
}

export namespace PaymentInformationDetailV3 {
  /**
   * Static representation of the [[paymentInformationV3EffectiveStartDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_INFORMATION_V_3_EFFECTIVE_START_DATE: DateField<PaymentInformationDetailV3> = new DateField('PaymentInformationV3_effectiveStartDate', PaymentInformationDetailV3, 'Edm.DateTime');
  /**
   * Static representation of the [[paymentInformationV3Worker]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_INFORMATION_V_3_WORKER: StringField<PaymentInformationDetailV3> = new StringField('PaymentInformationV3_worker', PaymentInformationDetailV3, 'Edm.String');
  /**
   * Static representation of the [[accountNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACCOUNT_NUMBER: StringField<PaymentInformationDetailV3> = new StringField('accountNumber', PaymentInformationDetailV3, 'Edm.String');
  /**
   * Static representation of the [[accountOwner]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACCOUNT_OWNER: StringField<PaymentInformationDetailV3> = new StringField('accountOwner', PaymentInformationDetailV3, 'Edm.String');
  /**
   * Static representation of the [[amount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const AMOUNT: BigNumberField<PaymentInformationDetailV3> = new BigNumberField('amount', PaymentInformationDetailV3, 'Edm.Decimal');
  /**
   * Static representation of the [[bank]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BANK: StringField<PaymentInformationDetailV3> = new StringField('bank', PaymentInformationDetailV3, 'Edm.String');
  /**
   * Static representation of the [[bankCountry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BANK_COUNTRY: StringField<PaymentInformationDetailV3> = new StringField('bankCountry', PaymentInformationDetailV3, 'Edm.String');
  /**
   * Static representation of the [[businessIdentifierCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_IDENTIFIER_CODE: StringField<PaymentInformationDetailV3> = new StringField('businessIdentifierCode', PaymentInformationDetailV3, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<PaymentInformationDetailV3> = new StringField('createdBy', PaymentInformationDetailV3, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<PaymentInformationDetailV3> = new DateField('createdDateTime', PaymentInformationDetailV3, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[currency]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CURRENCY: StringField<PaymentInformationDetailV3> = new StringField('currency', PaymentInformationDetailV3, 'Edm.String');
  /**
   * Static representation of the [[customPayType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOM_PAY_TYPE: StringField<PaymentInformationDetailV3> = new StringField('customPayType', PaymentInformationDetailV3, 'Edm.String');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: BigNumberField<PaymentInformationDetailV3> = new BigNumberField('externalCode', PaymentInformationDetailV3, 'Edm.Int64');
  /**
   * Static representation of the [[iban]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IBAN: StringField<PaymentInformationDetailV3> = new StringField('iban', PaymentInformationDetailV3, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<PaymentInformationDetailV3> = new StringField('lastModifiedBy', PaymentInformationDetailV3, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<PaymentInformationDetailV3> = new DateField('lastModifiedDateTime', PaymentInformationDetailV3, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<PaymentInformationDetailV3> = new StringField('mdfSystemRecordStatus', PaymentInformationDetailV3, 'Edm.String');
  /**
   * Static representation of the [[paySequence]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAY_SEQUENCE: BigNumberField<PaymentInformationDetailV3> = new BigNumberField('paySequence', PaymentInformationDetailV3, 'Edm.Int64');
  /**
   * Static representation of the [[payType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAY_TYPE: StringField<PaymentInformationDetailV3> = new StringField('payType', PaymentInformationDetailV3, 'Edm.String');
  /**
   * Static representation of the [[paymentMethod]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_METHOD: StringField<PaymentInformationDetailV3> = new StringField('paymentMethod', PaymentInformationDetailV3, 'Edm.String');
  /**
   * Static representation of the [[percent]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PERCENT: BigNumberField<PaymentInformationDetailV3> = new BigNumberField('percent', PaymentInformationDetailV3, 'Edm.Decimal');
  /**
   * Static representation of the [[purpose]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURPOSE: StringField<PaymentInformationDetailV3> = new StringField('purpose', PaymentInformationDetailV3, 'Edm.String');
  /**
   * Static representation of the [[routingNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ROUTING_NUMBER: StringField<PaymentInformationDetailV3> = new StringField('routingNumber', PaymentInformationDetailV3, 'Edm.String');
  /**
   * Static representation of the one-to-many navigation property [[bankCountryNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BANK_COUNTRY_NAV: Link<PaymentInformationDetailV3, Country> = new Link('bankCountryNav', PaymentInformationDetailV3, Country);
  /**
   * Static representation of the one-to-one navigation property [[bankNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BANK_NAV: OneToOneLink<PaymentInformationDetailV3, Bank> = new OneToOneLink('bankNav', PaymentInformationDetailV3, Bank);
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<PaymentInformationDetailV3, User> = new OneToOneLink('createdByNav', PaymentInformationDetailV3, User);
  /**
   * Static representation of the one-to-many navigation property [[currencyNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CURRENCY_NAV: Link<PaymentInformationDetailV3, Currency> = new Link('currencyNav', PaymentInformationDetailV3, Currency);
  /**
   * Static representation of the one-to-one navigation property [[customPayTypeNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOM_PAY_TYPE_NAV: OneToOneLink<PaymentInformationDetailV3, CustomPayType> = new OneToOneLink('customPayTypeNav', PaymentInformationDetailV3, CustomPayType);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<PaymentInformationDetailV3, User> = new OneToOneLink('lastModifiedByNav', PaymentInformationDetailV3, User);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<PaymentInformationDetailV3, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', PaymentInformationDetailV3, MdfEnumValue);
  /**
   * Static representation of the one-to-one navigation property [[payTypeNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAY_TYPE_NAV: OneToOneLink<PaymentInformationDetailV3, MdfEnumValue> = new OneToOneLink('payTypeNav', PaymentInformationDetailV3, MdfEnumValue);
  /**
   * Static representation of the one-to-one navigation property [[paymentMethodNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_METHOD_NAV: OneToOneLink<PaymentInformationDetailV3, PaymentMethodV3> = new OneToOneLink('paymentMethodNav', PaymentInformationDetailV3, PaymentMethodV3);
  /**
   * Static representation of the one-to-one navigation property [[toPaymentInformationDetailV3Arg]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TO_PAYMENT_INFORMATION_DETAIL_V_3_ARG: OneToOneLink<PaymentInformationDetailV3, PaymentInformationDetailV3Arg> = new OneToOneLink('toPaymentInformationDetailV3ARG', PaymentInformationDetailV3, PaymentInformationDetailV3Arg);
  /**
   * Static representation of the one-to-one navigation property [[toPaymentInformationDetailV3Blr]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TO_PAYMENT_INFORMATION_DETAIL_V_3_BLR: OneToOneLink<PaymentInformationDetailV3, PaymentInformationDetailV3Blr> = new OneToOneLink('toPaymentInformationDetailV3BLR', PaymentInformationDetailV3, PaymentInformationDetailV3Blr);
  /**
   * Static representation of the one-to-one navigation property [[toPaymentInformationDetailV3Bra]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TO_PAYMENT_INFORMATION_DETAIL_V_3_BRA: OneToOneLink<PaymentInformationDetailV3, PaymentInformationDetailV3Bra> = new OneToOneLink('toPaymentInformationDetailV3BRA', PaymentInformationDetailV3, PaymentInformationDetailV3Bra);
  /**
   * Static representation of the one-to-one navigation property [[toPaymentInformationDetailV3Chl]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TO_PAYMENT_INFORMATION_DETAIL_V_3_CHL: OneToOneLink<PaymentInformationDetailV3, PaymentInformationDetailV3Chl> = new OneToOneLink('toPaymentInformationDetailV3CHL', PaymentInformationDetailV3, PaymentInformationDetailV3Chl);
  /**
   * Static representation of the one-to-one navigation property [[toPaymentInformationDetailV3Col]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TO_PAYMENT_INFORMATION_DETAIL_V_3_COL: OneToOneLink<PaymentInformationDetailV3, PaymentInformationDetailV3Col> = new OneToOneLink('toPaymentInformationDetailV3COL', PaymentInformationDetailV3, PaymentInformationDetailV3Col);
  /**
   * Static representation of the one-to-one navigation property [[toPaymentInformationDetailV3Ecu]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TO_PAYMENT_INFORMATION_DETAIL_V_3_ECU: OneToOneLink<PaymentInformationDetailV3, PaymentInformationDetailV3Ecu> = new OneToOneLink('toPaymentInformationDetailV3ECU', PaymentInformationDetailV3, PaymentInformationDetailV3Ecu);
  /**
   * Static representation of the one-to-one navigation property [[toPaymentInformationDetailV3Esp]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TO_PAYMENT_INFORMATION_DETAIL_V_3_ESP: OneToOneLink<PaymentInformationDetailV3, PaymentInformationDetailV3Esp> = new OneToOneLink('toPaymentInformationDetailV3ESP', PaymentInformationDetailV3, PaymentInformationDetailV3Esp);
  /**
   * Static representation of the one-to-one navigation property [[toPaymentInformationDetailV3Fra]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TO_PAYMENT_INFORMATION_DETAIL_V_3_FRA: OneToOneLink<PaymentInformationDetailV3, PaymentInformationDetailV3Fra> = new OneToOneLink('toPaymentInformationDetailV3FRA', PaymentInformationDetailV3, PaymentInformationDetailV3Fra);
  /**
   * Static representation of the one-to-one navigation property [[toPaymentInformationDetailV3Gbr]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TO_PAYMENT_INFORMATION_DETAIL_V_3_GBR: OneToOneLink<PaymentInformationDetailV3, PaymentInformationDetailV3Gbr> = new OneToOneLink('toPaymentInformationDetailV3GBR', PaymentInformationDetailV3, PaymentInformationDetailV3Gbr);
  /**
   * Static representation of the one-to-one navigation property [[toPaymentInformationDetailV3Irq]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TO_PAYMENT_INFORMATION_DETAIL_V_3_IRQ: OneToOneLink<PaymentInformationDetailV3, PaymentInformationDetailV3Irq> = new OneToOneLink('toPaymentInformationDetailV3IRQ', PaymentInformationDetailV3, PaymentInformationDetailV3Irq);
  /**
   * Static representation of the one-to-one navigation property [[toPaymentInformationDetailV3Isr]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TO_PAYMENT_INFORMATION_DETAIL_V_3_ISR: OneToOneLink<PaymentInformationDetailV3, PaymentInformationDetailV3Isr> = new OneToOneLink('toPaymentInformationDetailV3ISR', PaymentInformationDetailV3, PaymentInformationDetailV3Isr);
  /**
   * Static representation of the one-to-one navigation property [[toPaymentInformationDetailV3Ita]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TO_PAYMENT_INFORMATION_DETAIL_V_3_ITA: OneToOneLink<PaymentInformationDetailV3, PaymentInformationDetailV3Ita> = new OneToOneLink('toPaymentInformationDetailV3ITA', PaymentInformationDetailV3, PaymentInformationDetailV3Ita);
  /**
   * Static representation of the one-to-one navigation property [[toPaymentInformationDetailV3Jpn]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TO_PAYMENT_INFORMATION_DETAIL_V_3_JPN: OneToOneLink<PaymentInformationDetailV3, PaymentInformationDetailV3Jpn> = new OneToOneLink('toPaymentInformationDetailV3JPN', PaymentInformationDetailV3, PaymentInformationDetailV3Jpn);
  /**
   * Static representation of the one-to-one navigation property [[toPaymentInformationDetailV3Ken]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TO_PAYMENT_INFORMATION_DETAIL_V_3_KEN: OneToOneLink<PaymentInformationDetailV3, PaymentInformationDetailV3Ken> = new OneToOneLink('toPaymentInformationDetailV3KEN', PaymentInformationDetailV3, PaymentInformationDetailV3Ken);
  /**
   * Static representation of the one-to-one navigation property [[toPaymentInformationDetailV3Mex]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TO_PAYMENT_INFORMATION_DETAIL_V_3_MEX: OneToOneLink<PaymentInformationDetailV3, PaymentInformationDetailV3Mex> = new OneToOneLink('toPaymentInformationDetailV3MEX', PaymentInformationDetailV3, PaymentInformationDetailV3Mex);
  /**
   * Static representation of the one-to-one navigation property [[toPaymentInformationDetailV3Mkd]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TO_PAYMENT_INFORMATION_DETAIL_V_3_MKD: OneToOneLink<PaymentInformationDetailV3, PaymentInformationDetailV3Mkd> = new OneToOneLink('toPaymentInformationDetailV3MKD', PaymentInformationDetailV3, PaymentInformationDetailV3Mkd);
  /**
   * Static representation of the one-to-one navigation property [[toPaymentInformationDetailV3Mmr]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TO_PAYMENT_INFORMATION_DETAIL_V_3_MMR: OneToOneLink<PaymentInformationDetailV3, PaymentInformationDetailV3Mmr> = new OneToOneLink('toPaymentInformationDetailV3MMR', PaymentInformationDetailV3, PaymentInformationDetailV3Mmr);
  /**
   * Static representation of the one-to-one navigation property [[toPaymentInformationDetailV3Moz]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TO_PAYMENT_INFORMATION_DETAIL_V_3_MOZ: OneToOneLink<PaymentInformationDetailV3, PaymentInformationDetailV3Moz> = new OneToOneLink('toPaymentInformationDetailV3MOZ', PaymentInformationDetailV3, PaymentInformationDetailV3Moz);
  /**
   * Static representation of the one-to-one navigation property [[toPaymentInformationDetailV3Mwi]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TO_PAYMENT_INFORMATION_DETAIL_V_3_MWI: OneToOneLink<PaymentInformationDetailV3, PaymentInformationDetailV3Mwi> = new OneToOneLink('toPaymentInformationDetailV3MWI', PaymentInformationDetailV3, PaymentInformationDetailV3Mwi);
  /**
   * Static representation of the one-to-one navigation property [[toPaymentInformationDetailV3Nam]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TO_PAYMENT_INFORMATION_DETAIL_V_3_NAM: OneToOneLink<PaymentInformationDetailV3, PaymentInformationDetailV3Nam> = new OneToOneLink('toPaymentInformationDetailV3NAM', PaymentInformationDetailV3, PaymentInformationDetailV3Nam);
  /**
   * Static representation of the one-to-one navigation property [[toPaymentInformationDetailV3Nga]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TO_PAYMENT_INFORMATION_DETAIL_V_3_NGA: OneToOneLink<PaymentInformationDetailV3, PaymentInformationDetailV3Nga> = new OneToOneLink('toPaymentInformationDetailV3NGA', PaymentInformationDetailV3, PaymentInformationDetailV3Nga);
  /**
   * Static representation of the one-to-one navigation property [[toPaymentInformationDetailV3Nzl]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TO_PAYMENT_INFORMATION_DETAIL_V_3_NZL: OneToOneLink<PaymentInformationDetailV3, PaymentInformationDetailV3Nzl> = new OneToOneLink('toPaymentInformationDetailV3NZL', PaymentInformationDetailV3, PaymentInformationDetailV3Nzl);
  /**
   * Static representation of the one-to-one navigation property [[toPaymentInformationDetailV3Per]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TO_PAYMENT_INFORMATION_DETAIL_V_3_PER: OneToOneLink<PaymentInformationDetailV3, PaymentInformationDetailV3Per> = new OneToOneLink('toPaymentInformationDetailV3PER', PaymentInformationDetailV3, PaymentInformationDetailV3Per);
  /**
   * Static representation of the one-to-one navigation property [[toPaymentInformationDetailV3Svn]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TO_PAYMENT_INFORMATION_DETAIL_V_3_SVN: OneToOneLink<PaymentInformationDetailV3, PaymentInformationDetailV3Svn> = new OneToOneLink('toPaymentInformationDetailV3SVN', PaymentInformationDetailV3, PaymentInformationDetailV3Svn);
  /**
   * Static representation of the one-to-one navigation property [[toPaymentInformationDetailV3Usa]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TO_PAYMENT_INFORMATION_DETAIL_V_3_USA: OneToOneLink<PaymentInformationDetailV3, PaymentInformationDetailV3Usa> = new OneToOneLink('toPaymentInformationDetailV3USA', PaymentInformationDetailV3, PaymentInformationDetailV3Usa);
  /**
   * Static representation of the one-to-one navigation property [[toPaymentInformationDetailV3Ven]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TO_PAYMENT_INFORMATION_DETAIL_V_3_VEN: OneToOneLink<PaymentInformationDetailV3, PaymentInformationDetailV3Ven> = new OneToOneLink('toPaymentInformationDetailV3VEN', PaymentInformationDetailV3, PaymentInformationDetailV3Ven);
  /**
   * Static representation of the one-to-one navigation property [[toPaymentInformationDetailV3Zaf]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TO_PAYMENT_INFORMATION_DETAIL_V_3_ZAF: OneToOneLink<PaymentInformationDetailV3, PaymentInformationDetailV3Zaf> = new OneToOneLink('toPaymentInformationDetailV3ZAF', PaymentInformationDetailV3, PaymentInformationDetailV3Zaf);
  /**
   * Static representation of the one-to-one navigation property [[toPaymentInformationDetailV3Zwe]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TO_PAYMENT_INFORMATION_DETAIL_V_3_ZWE: OneToOneLink<PaymentInformationDetailV3, PaymentInformationDetailV3Zwe> = new OneToOneLink('toPaymentInformationDetailV3ZWE', PaymentInformationDetailV3, PaymentInformationDetailV3Zwe);
  /**
   * All fields of the PaymentInformationDetailV3 entity.
   */
  export const _allFields: Array<DateField<PaymentInformationDetailV3> | StringField<PaymentInformationDetailV3> | BigNumberField<PaymentInformationDetailV3> | Link<PaymentInformationDetailV3, Country> | OneToOneLink<PaymentInformationDetailV3, Bank> | OneToOneLink<PaymentInformationDetailV3, User> | Link<PaymentInformationDetailV3, Currency> | OneToOneLink<PaymentInformationDetailV3, CustomPayType> | OneToOneLink<PaymentInformationDetailV3, MdfEnumValue> | OneToOneLink<PaymentInformationDetailV3, PaymentMethodV3> | OneToOneLink<PaymentInformationDetailV3, PaymentInformationDetailV3Arg> | OneToOneLink<PaymentInformationDetailV3, PaymentInformationDetailV3Blr> | OneToOneLink<PaymentInformationDetailV3, PaymentInformationDetailV3Bra> | OneToOneLink<PaymentInformationDetailV3, PaymentInformationDetailV3Chl> | OneToOneLink<PaymentInformationDetailV3, PaymentInformationDetailV3Col> | OneToOneLink<PaymentInformationDetailV3, PaymentInformationDetailV3Ecu> | OneToOneLink<PaymentInformationDetailV3, PaymentInformationDetailV3Esp> | OneToOneLink<PaymentInformationDetailV3, PaymentInformationDetailV3Fra> | OneToOneLink<PaymentInformationDetailV3, PaymentInformationDetailV3Gbr> | OneToOneLink<PaymentInformationDetailV3, PaymentInformationDetailV3Irq> | OneToOneLink<PaymentInformationDetailV3, PaymentInformationDetailV3Isr> | OneToOneLink<PaymentInformationDetailV3, PaymentInformationDetailV3Ita> | OneToOneLink<PaymentInformationDetailV3, PaymentInformationDetailV3Jpn> | OneToOneLink<PaymentInformationDetailV3, PaymentInformationDetailV3Ken> | OneToOneLink<PaymentInformationDetailV3, PaymentInformationDetailV3Mex> | OneToOneLink<PaymentInformationDetailV3, PaymentInformationDetailV3Mkd> | OneToOneLink<PaymentInformationDetailV3, PaymentInformationDetailV3Mmr> | OneToOneLink<PaymentInformationDetailV3, PaymentInformationDetailV3Moz> | OneToOneLink<PaymentInformationDetailV3, PaymentInformationDetailV3Mwi> | OneToOneLink<PaymentInformationDetailV3, PaymentInformationDetailV3Nam> | OneToOneLink<PaymentInformationDetailV3, PaymentInformationDetailV3Nga> | OneToOneLink<PaymentInformationDetailV3, PaymentInformationDetailV3Nzl> | OneToOneLink<PaymentInformationDetailV3, PaymentInformationDetailV3Per> | OneToOneLink<PaymentInformationDetailV3, PaymentInformationDetailV3Svn> | OneToOneLink<PaymentInformationDetailV3, PaymentInformationDetailV3Usa> | OneToOneLink<PaymentInformationDetailV3, PaymentInformationDetailV3Ven> | OneToOneLink<PaymentInformationDetailV3, PaymentInformationDetailV3Zaf> | OneToOneLink<PaymentInformationDetailV3, PaymentInformationDetailV3Zwe>> = [
    PaymentInformationDetailV3.PAYMENT_INFORMATION_V_3_EFFECTIVE_START_DATE,
    PaymentInformationDetailV3.PAYMENT_INFORMATION_V_3_WORKER,
    PaymentInformationDetailV3.ACCOUNT_NUMBER,
    PaymentInformationDetailV3.ACCOUNT_OWNER,
    PaymentInformationDetailV3.AMOUNT,
    PaymentInformationDetailV3.BANK,
    PaymentInformationDetailV3.BANK_COUNTRY,
    PaymentInformationDetailV3.BUSINESS_IDENTIFIER_CODE,
    PaymentInformationDetailV3.CREATED_BY,
    PaymentInformationDetailV3.CREATED_DATE_TIME,
    PaymentInformationDetailV3.CURRENCY,
    PaymentInformationDetailV3.CUSTOM_PAY_TYPE,
    PaymentInformationDetailV3.EXTERNAL_CODE,
    PaymentInformationDetailV3.IBAN,
    PaymentInformationDetailV3.LAST_MODIFIED_BY,
    PaymentInformationDetailV3.LAST_MODIFIED_DATE_TIME,
    PaymentInformationDetailV3.MDF_SYSTEM_RECORD_STATUS,
    PaymentInformationDetailV3.PAY_SEQUENCE,
    PaymentInformationDetailV3.PAY_TYPE,
    PaymentInformationDetailV3.PAYMENT_METHOD,
    PaymentInformationDetailV3.PERCENT,
    PaymentInformationDetailV3.PURPOSE,
    PaymentInformationDetailV3.ROUTING_NUMBER,
    PaymentInformationDetailV3.BANK_COUNTRY_NAV,
    PaymentInformationDetailV3.BANK_NAV,
    PaymentInformationDetailV3.CREATED_BY_NAV,
    PaymentInformationDetailV3.CURRENCY_NAV,
    PaymentInformationDetailV3.CUSTOM_PAY_TYPE_NAV,
    PaymentInformationDetailV3.LAST_MODIFIED_BY_NAV,
    PaymentInformationDetailV3.MDF_SYSTEM_RECORD_STATUS_NAV,
    PaymentInformationDetailV3.PAY_TYPE_NAV,
    PaymentInformationDetailV3.PAYMENT_METHOD_NAV,
    PaymentInformationDetailV3.TO_PAYMENT_INFORMATION_DETAIL_V_3_ARG,
    PaymentInformationDetailV3.TO_PAYMENT_INFORMATION_DETAIL_V_3_BLR,
    PaymentInformationDetailV3.TO_PAYMENT_INFORMATION_DETAIL_V_3_BRA,
    PaymentInformationDetailV3.TO_PAYMENT_INFORMATION_DETAIL_V_3_CHL,
    PaymentInformationDetailV3.TO_PAYMENT_INFORMATION_DETAIL_V_3_COL,
    PaymentInformationDetailV3.TO_PAYMENT_INFORMATION_DETAIL_V_3_ECU,
    PaymentInformationDetailV3.TO_PAYMENT_INFORMATION_DETAIL_V_3_ESP,
    PaymentInformationDetailV3.TO_PAYMENT_INFORMATION_DETAIL_V_3_FRA,
    PaymentInformationDetailV3.TO_PAYMENT_INFORMATION_DETAIL_V_3_GBR,
    PaymentInformationDetailV3.TO_PAYMENT_INFORMATION_DETAIL_V_3_IRQ,
    PaymentInformationDetailV3.TO_PAYMENT_INFORMATION_DETAIL_V_3_ISR,
    PaymentInformationDetailV3.TO_PAYMENT_INFORMATION_DETAIL_V_3_ITA,
    PaymentInformationDetailV3.TO_PAYMENT_INFORMATION_DETAIL_V_3_JPN,
    PaymentInformationDetailV3.TO_PAYMENT_INFORMATION_DETAIL_V_3_KEN,
    PaymentInformationDetailV3.TO_PAYMENT_INFORMATION_DETAIL_V_3_MEX,
    PaymentInformationDetailV3.TO_PAYMENT_INFORMATION_DETAIL_V_3_MKD,
    PaymentInformationDetailV3.TO_PAYMENT_INFORMATION_DETAIL_V_3_MMR,
    PaymentInformationDetailV3.TO_PAYMENT_INFORMATION_DETAIL_V_3_MOZ,
    PaymentInformationDetailV3.TO_PAYMENT_INFORMATION_DETAIL_V_3_MWI,
    PaymentInformationDetailV3.TO_PAYMENT_INFORMATION_DETAIL_V_3_NAM,
    PaymentInformationDetailV3.TO_PAYMENT_INFORMATION_DETAIL_V_3_NGA,
    PaymentInformationDetailV3.TO_PAYMENT_INFORMATION_DETAIL_V_3_NZL,
    PaymentInformationDetailV3.TO_PAYMENT_INFORMATION_DETAIL_V_3_PER,
    PaymentInformationDetailV3.TO_PAYMENT_INFORMATION_DETAIL_V_3_SVN,
    PaymentInformationDetailV3.TO_PAYMENT_INFORMATION_DETAIL_V_3_USA,
    PaymentInformationDetailV3.TO_PAYMENT_INFORMATION_DETAIL_V_3_VEN,
    PaymentInformationDetailV3.TO_PAYMENT_INFORMATION_DETAIL_V_3_ZAF,
    PaymentInformationDetailV3.TO_PAYMENT_INFORMATION_DETAIL_V_3_ZWE
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<PaymentInformationDetailV3> = new AllFields('*', PaymentInformationDetailV3);
  /**
   * All key fields of the PaymentInformationDetailV3 entity.
   */
  export const _keyFields: Array<Selectable<PaymentInformationDetailV3>> = [PaymentInformationDetailV3.PAYMENT_INFORMATION_V_3_EFFECTIVE_START_DATE, PaymentInformationDetailV3.PAYMENT_INFORMATION_V_3_WORKER, PaymentInformationDetailV3.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property PaymentInformationDetailV3.
   */
  export const _keys: { [keys: string]: Selectable<PaymentInformationDetailV3> } = PaymentInformationDetailV3._keyFields.reduce((acc: { [keys: string]: Selectable<PaymentInformationDetailV3> }, field: Selectable<PaymentInformationDetailV3>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
