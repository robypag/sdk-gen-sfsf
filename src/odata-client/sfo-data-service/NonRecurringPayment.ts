/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { NonRecurringPaymentRequestBuilder } from './NonRecurringPaymentRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "NonRecurringPayment" of service "SFOData".
 */
export class NonRecurringPayment extends Entity implements NonRecurringPaymentType {
  /**
   * Technical entity name for NonRecurringPayment.
   */
  static _entityName = 'NonRecurringPayment';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for NonRecurringPayment.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
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
   * NRP ID.
   * Maximum length: 128.
   */
  externalCode!: string;
  /**
   * Form ID.
   * @nullable
   */
  formId?: BigNumber;
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
   * nonRecurringPayPeriodEndDate.
   * @nullable
   */
  nonRecurringPayPeriodEndDate?: Moment;
  /**
   * nonRecurringPayPeriodStartDate.
   * @nullable
   */
  nonRecurringPayPeriodStartDate?: Moment;
  /**
   * Notes.
   * Maximum length: 255.
   * @nullable
   */
  notes?: string;
  /**
   * Amount.
   * @nullable
   */
  payCompValue?: BigNumber;
  /**
   * Type.
   * Maximum length: 32.
   * @nullable
   */
  payComponentCode?: string;
  /**
   * Pay Component Group ID.
   * @nullable
   */
  payComponentGroupId?: BigNumber;
  /**
   * Pay Component Type.
   * Maximum length: 255.
   * @nullable
   */
  payComponentType?: string;
  /**
   * Issue Date.
   * @nullable
   */
  payDate?: Moment;
  /**
   * recordStatus.
   * Maximum length: 255.
   * @nullable
   */
  recordStatus?: string;
  /**
   * Sent To Payroll.
   * @nullable
   */
  sentToPayroll?: Moment;
  /**
   * Tax Treatment.
   * Maximum length: 255.
   * @nullable
   */
  taxTreatment?: string;
  /**
   * Template ID.
   * @nullable
   */
  templateId?: BigNumber;
  /**
   * User ID.
   * Maximum length: 100.
   * @nullable
   */
  userSysId?: string;
  /**
   * One-to-one navigation property to the [[Advance]] entity.
   */
  advance!: Advance;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  createdByNav!: User;
  /**
   * One-to-many navigation property to the [[Currency]] entity.
   */
  currencyGoNav!: Currency[];
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  lastModifiedByNav!: User;
  /**
   * One-to-many navigation property to the [[FoPayComponent]] entity.
   */
  payComponentCodeNav!: FoPayComponent[];
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  recordStatusNav!: MdfEnumValue;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  userSysIdNav!: User;
  /**
   * One-to-many navigation property to the [[WfRequest]] entity.
   */
  wfRequestNav!: WfRequest[];

  /**
   * Returns an entity builder to construct instances `NonRecurringPayment`.
   * @returns A builder that constructs instances of entity type `NonRecurringPayment`.
   */
  static builder(): EntityBuilderType<NonRecurringPayment, NonRecurringPaymentTypeForceMandatory> {
    return Entity.entityBuilder(NonRecurringPayment);
  }

  /**
   * Returns a request builder to construct requests for operations on the `NonRecurringPayment` entity type.
   * @returns A `NonRecurringPayment` request builder.
   */
  static requestBuilder(): NonRecurringPaymentRequestBuilder {
    return new NonRecurringPaymentRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `NonRecurringPayment`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `NonRecurringPayment`.
   */
  static customField(fieldName: string): CustomField<NonRecurringPayment> {
    return Entity.customFieldSelector(fieldName, NonRecurringPayment);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { Advance, AdvanceType } from './Advance';
import { User, UserType } from './User';
import { Currency, CurrencyType } from './Currency';
import { FoPayComponent, FoPayComponentType } from './FoPayComponent';
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';
import { WfRequest, WfRequestType } from './WfRequest';

export interface NonRecurringPaymentType {
  createdBy?: string;
  createdDateTime?: Moment;
  currencyCode?: string;
  currencyGo?: string;
  externalCode: string;
  formId?: BigNumber;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  nonRecurringPayPeriodEndDate?: Moment;
  nonRecurringPayPeriodStartDate?: Moment;
  notes?: string;
  payCompValue?: BigNumber;
  payComponentCode?: string;
  payComponentGroupId?: BigNumber;
  payComponentType?: string;
  payDate?: Moment;
  recordStatus?: string;
  sentToPayroll?: Moment;
  taxTreatment?: string;
  templateId?: BigNumber;
  userSysId?: string;
  advance: AdvanceType;
  createdByNav: UserType;
  currencyGoNav: CurrencyType[];
  lastModifiedByNav: UserType;
  payComponentCodeNav: FoPayComponentType[];
  recordStatusNav: MdfEnumValueType;
  userSysIdNav: UserType;
  wfRequestNav: WfRequestType[];
}

export interface NonRecurringPaymentTypeForceMandatory {
  createdBy: string;
  createdDateTime: Moment;
  currencyCode: string;
  currencyGo: string;
  externalCode: string;
  formId: BigNumber;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  nonRecurringPayPeriodEndDate: Moment;
  nonRecurringPayPeriodStartDate: Moment;
  notes: string;
  payCompValue: BigNumber;
  payComponentCode: string;
  payComponentGroupId: BigNumber;
  payComponentType: string;
  payDate: Moment;
  recordStatus: string;
  sentToPayroll: Moment;
  taxTreatment: string;
  templateId: BigNumber;
  userSysId: string;
  advance: AdvanceType;
  createdByNav: UserType;
  currencyGoNav: CurrencyType[];
  lastModifiedByNav: UserType;
  payComponentCodeNav: FoPayComponentType[];
  recordStatusNav: MdfEnumValueType;
  userSysIdNav: UserType;
  wfRequestNav: WfRequestType[];
}

export namespace NonRecurringPayment {
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<NonRecurringPayment> = new StringField('createdBy', NonRecurringPayment, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<NonRecurringPayment> = new DateField('createdDateTime', NonRecurringPayment, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[currencyCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CURRENCY_CODE: StringField<NonRecurringPayment> = new StringField('currencyCode', NonRecurringPayment, 'Edm.String');
  /**
   * Static representation of the [[currencyGo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CURRENCY_GO: StringField<NonRecurringPayment> = new StringField('currencyGO', NonRecurringPayment, 'Edm.String');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: StringField<NonRecurringPayment> = new StringField('externalCode', NonRecurringPayment, 'Edm.String');
  /**
   * Static representation of the [[formId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_ID: BigNumberField<NonRecurringPayment> = new BigNumberField('formId', NonRecurringPayment, 'Edm.Int64');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<NonRecurringPayment> = new StringField('lastModifiedBy', NonRecurringPayment, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<NonRecurringPayment> = new DateField('lastModifiedDateTime', NonRecurringPayment, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[nonRecurringPayPeriodEndDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NON_RECURRING_PAY_PERIOD_END_DATE: DateField<NonRecurringPayment> = new DateField('nonRecurringPayPeriodEndDate', NonRecurringPayment, 'Edm.DateTime');
  /**
   * Static representation of the [[nonRecurringPayPeriodStartDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NON_RECURRING_PAY_PERIOD_START_DATE: DateField<NonRecurringPayment> = new DateField('nonRecurringPayPeriodStartDate', NonRecurringPayment, 'Edm.DateTime');
  /**
   * Static representation of the [[notes]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NOTES: StringField<NonRecurringPayment> = new StringField('notes', NonRecurringPayment, 'Edm.String');
  /**
   * Static representation of the [[payCompValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAY_COMP_VALUE: BigNumberField<NonRecurringPayment> = new BigNumberField('payCompValue', NonRecurringPayment, 'Edm.Decimal');
  /**
   * Static representation of the [[payComponentCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAY_COMPONENT_CODE: StringField<NonRecurringPayment> = new StringField('payComponentCode', NonRecurringPayment, 'Edm.String');
  /**
   * Static representation of the [[payComponentGroupId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAY_COMPONENT_GROUP_ID: BigNumberField<NonRecurringPayment> = new BigNumberField('payComponentGroupId', NonRecurringPayment, 'Edm.Int64');
  /**
   * Static representation of the [[payComponentType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAY_COMPONENT_TYPE: StringField<NonRecurringPayment> = new StringField('payComponentType', NonRecurringPayment, 'Edm.String');
  /**
   * Static representation of the [[payDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAY_DATE: DateField<NonRecurringPayment> = new DateField('payDate', NonRecurringPayment, 'Edm.DateTime');
  /**
   * Static representation of the [[recordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RECORD_STATUS: StringField<NonRecurringPayment> = new StringField('recordStatus', NonRecurringPayment, 'Edm.String');
  /**
   * Static representation of the [[sentToPayroll]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SENT_TO_PAYROLL: DateField<NonRecurringPayment> = new DateField('sentToPayroll', NonRecurringPayment, 'Edm.DateTime');
  /**
   * Static representation of the [[taxTreatment]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TAX_TREATMENT: StringField<NonRecurringPayment> = new StringField('taxTreatment', NonRecurringPayment, 'Edm.String');
  /**
   * Static representation of the [[templateId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TEMPLATE_ID: BigNumberField<NonRecurringPayment> = new BigNumberField('templateId', NonRecurringPayment, 'Edm.Int64');
  /**
   * Static representation of the [[userSysId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_SYS_ID: StringField<NonRecurringPayment> = new StringField('userSysId', NonRecurringPayment, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[advance]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADVANCE: OneToOneLink<NonRecurringPayment, Advance> = new OneToOneLink('advance', NonRecurringPayment, Advance);
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<NonRecurringPayment, User> = new OneToOneLink('createdByNav', NonRecurringPayment, User);
  /**
   * Static representation of the one-to-many navigation property [[currencyGoNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CURRENCY_GO_NAV: Link<NonRecurringPayment, Currency> = new Link('currencyGONav', NonRecurringPayment, Currency);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<NonRecurringPayment, User> = new OneToOneLink('lastModifiedByNav', NonRecurringPayment, User);
  /**
   * Static representation of the one-to-many navigation property [[payComponentCodeNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAY_COMPONENT_CODE_NAV: Link<NonRecurringPayment, FoPayComponent> = new Link('payComponentCodeNav', NonRecurringPayment, FoPayComponent);
  /**
   * Static representation of the one-to-one navigation property [[recordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RECORD_STATUS_NAV: OneToOneLink<NonRecurringPayment, MdfEnumValue> = new OneToOneLink('recordStatusNav', NonRecurringPayment, MdfEnumValue);
  /**
   * Static representation of the one-to-one navigation property [[userSysIdNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_SYS_ID_NAV: OneToOneLink<NonRecurringPayment, User> = new OneToOneLink('userSysIdNav', NonRecurringPayment, User);
  /**
   * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WF_REQUEST_NAV: Link<NonRecurringPayment, WfRequest> = new Link('wfRequestNav', NonRecurringPayment, WfRequest);
  /**
   * All fields of the NonRecurringPayment entity.
   */
  export const _allFields: Array<StringField<NonRecurringPayment> | DateField<NonRecurringPayment> | BigNumberField<NonRecurringPayment> | OneToOneLink<NonRecurringPayment, Advance> | OneToOneLink<NonRecurringPayment, User> | Link<NonRecurringPayment, Currency> | Link<NonRecurringPayment, FoPayComponent> | OneToOneLink<NonRecurringPayment, MdfEnumValue> | Link<NonRecurringPayment, WfRequest>> = [
    NonRecurringPayment.CREATED_BY,
    NonRecurringPayment.CREATED_DATE_TIME,
    NonRecurringPayment.CURRENCY_CODE,
    NonRecurringPayment.CURRENCY_GO,
    NonRecurringPayment.EXTERNAL_CODE,
    NonRecurringPayment.FORM_ID,
    NonRecurringPayment.LAST_MODIFIED_BY,
    NonRecurringPayment.LAST_MODIFIED_DATE_TIME,
    NonRecurringPayment.NON_RECURRING_PAY_PERIOD_END_DATE,
    NonRecurringPayment.NON_RECURRING_PAY_PERIOD_START_DATE,
    NonRecurringPayment.NOTES,
    NonRecurringPayment.PAY_COMP_VALUE,
    NonRecurringPayment.PAY_COMPONENT_CODE,
    NonRecurringPayment.PAY_COMPONENT_GROUP_ID,
    NonRecurringPayment.PAY_COMPONENT_TYPE,
    NonRecurringPayment.PAY_DATE,
    NonRecurringPayment.RECORD_STATUS,
    NonRecurringPayment.SENT_TO_PAYROLL,
    NonRecurringPayment.TAX_TREATMENT,
    NonRecurringPayment.TEMPLATE_ID,
    NonRecurringPayment.USER_SYS_ID,
    NonRecurringPayment.ADVANCE,
    NonRecurringPayment.CREATED_BY_NAV,
    NonRecurringPayment.CURRENCY_GO_NAV,
    NonRecurringPayment.LAST_MODIFIED_BY_NAV,
    NonRecurringPayment.PAY_COMPONENT_CODE_NAV,
    NonRecurringPayment.RECORD_STATUS_NAV,
    NonRecurringPayment.USER_SYS_ID_NAV,
    NonRecurringPayment.WF_REQUEST_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<NonRecurringPayment> = new AllFields('*', NonRecurringPayment);
  /**
   * All key fields of the NonRecurringPayment entity.
   */
  export const _keyFields: Array<Selectable<NonRecurringPayment>> = [NonRecurringPayment.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property NonRecurringPayment.
   */
  export const _keys: { [keys: string]: Selectable<NonRecurringPayment> } = NonRecurringPayment._keyFields.reduce((acc: { [keys: string]: Selectable<NonRecurringPayment> }, field: Selectable<NonRecurringPayment>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
