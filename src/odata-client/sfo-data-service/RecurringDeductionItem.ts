/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RecurringDeductionItemRequestBuilder } from './RecurringDeductionItemRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "RecurringDeductionItem" of service "SFOData".
 */
export class RecurringDeductionItem extends Entity implements RecurringDeductionItemType {
  /**
   * Technical entity name for RecurringDeductionItem.
   */
  static _entityName = 'RecurringDeductionItem';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for RecurringDeductionItem.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Recurring Deduction_Effective Start Date.
   */
  recurringDeductionEffectiveStartDate!: Moment;
  /**
   * Recurring Deduction_User.
   * Maximum length: 100.
   */
  recurringDeductionUserSysId!: string;
  /**
   * Additional Information.
   * Maximum length: 40.
   * @nullable
   */
  additionalInfo?: string;
  /**
   * Advance.
   * Maximum length: 128.
   * @nullable
   */
  advanceId?: string;
  /**
   * Amount / Percentage / Number of units.
   * @nullable
   */
  amount?: BigNumber;
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
   * Maximum length: 128.
   * @nullable
   */
  currency?: string;
  /**
   * Has Permission.
   * Maximum length: 255.
   * @nullable
   */
  editPermission?: string;
  /**
   * End Date.
   * @nullable
   */
  endDate?: Moment;
  /**
   * equivalentAmount.
   * @nullable
   */
  equivalentAmount?: BigNumber;
  /**
   * Frequency.
   * Maximum length: 32.
   * @nullable
   */
  frequency?: string;
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
   * Pay Component.
   * Maximum length: 32.
   */
  payComponentType!: string;
  /**
   * Reference Id.
   * Maximum length: 20.
   * @nullable
   */
  referenceId?: string;
  /**
   * Unit Of Measure.
   * Maximum length: 128.
   * @nullable
   */
  unitOfMeasure?: string;
  /**
   * One-to-one navigation property to the [[NonRecurringPayment]] entity.
   */
  advanceIdNav!: NonRecurringPayment;
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
  currencyNav!: Currency[];
  /**
   * One-to-one navigation property to the [[FoFrequency]] entity.
   */
  frequencyNav!: FoFrequency;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  lastModifiedByNav!: User;
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  mdfSystemRecordStatusNav!: MdfEnumValue;
  /**
   * One-to-many navigation property to the [[FoPayComponent]] entity.
   */
  payComponentTypeNav!: FoPayComponent[];

  /**
   * Returns an entity builder to construct instances `RecurringDeductionItem`.
   * @returns A builder that constructs instances of entity type `RecurringDeductionItem`.
   */
  static builder(): EntityBuilderType<RecurringDeductionItem, RecurringDeductionItemTypeForceMandatory> {
    return Entity.entityBuilder(RecurringDeductionItem);
  }

  /**
   * Returns a request builder to construct requests for operations on the `RecurringDeductionItem` entity type.
   * @returns A `RecurringDeductionItem` request builder.
   */
  static requestBuilder(): RecurringDeductionItemRequestBuilder {
    return new RecurringDeductionItemRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `RecurringDeductionItem`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `RecurringDeductionItem`.
   */
  static customField(fieldName: string): CustomField<RecurringDeductionItem> {
    return Entity.customFieldSelector(fieldName, RecurringDeductionItem);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { NonRecurringPayment, NonRecurringPaymentType } from './NonRecurringPayment';
import { Attachment, AttachmentType } from './Attachment';
import { User, UserType } from './User';
import { Currency, CurrencyType } from './Currency';
import { FoFrequency, FoFrequencyType } from './FoFrequency';
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';
import { FoPayComponent, FoPayComponentType } from './FoPayComponent';

export interface RecurringDeductionItemType {
  recurringDeductionEffectiveStartDate: Moment;
  recurringDeductionUserSysId: string;
  additionalInfo?: string;
  advanceId?: string;
  amount?: BigNumber;
  createdBy?: string;
  createdDateTime?: Moment;
  currency?: string;
  editPermission?: string;
  endDate?: Moment;
  equivalentAmount?: BigNumber;
  frequency?: string;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  mdfSystemRecordStatus?: string;
  payComponentType: string;
  referenceId?: string;
  unitOfMeasure?: string;
  advanceIdNav: NonRecurringPaymentType;
  attachmentNav: AttachmentType;
  createdByNav: UserType;
  currencyNav: CurrencyType[];
  frequencyNav: FoFrequencyType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  payComponentTypeNav: FoPayComponentType[];
}

export interface RecurringDeductionItemTypeForceMandatory {
  recurringDeductionEffectiveStartDate: Moment;
  recurringDeductionUserSysId: string;
  additionalInfo: string;
  advanceId: string;
  amount: BigNumber;
  createdBy: string;
  createdDateTime: Moment;
  currency: string;
  editPermission: string;
  endDate: Moment;
  equivalentAmount: BigNumber;
  frequency: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  mdfSystemRecordStatus: string;
  payComponentType: string;
  referenceId: string;
  unitOfMeasure: string;
  advanceIdNav: NonRecurringPaymentType;
  attachmentNav: AttachmentType;
  createdByNav: UserType;
  currencyNav: CurrencyType[];
  frequencyNav: FoFrequencyType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  payComponentTypeNav: FoPayComponentType[];
}

export namespace RecurringDeductionItem {
  /**
   * Static representation of the [[recurringDeductionEffectiveStartDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RECURRING_DEDUCTION_EFFECTIVE_START_DATE: DateField<RecurringDeductionItem> = new DateField('RecurringDeduction_effectiveStartDate', RecurringDeductionItem, 'Edm.DateTime');
  /**
   * Static representation of the [[recurringDeductionUserSysId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RECURRING_DEDUCTION_USER_SYS_ID: StringField<RecurringDeductionItem> = new StringField('RecurringDeduction_userSysId', RecurringDeductionItem, 'Edm.String');
  /**
   * Static representation of the [[additionalInfo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDITIONAL_INFO: StringField<RecurringDeductionItem> = new StringField('additionalInfo', RecurringDeductionItem, 'Edm.String');
  /**
   * Static representation of the [[advanceId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADVANCE_ID: StringField<RecurringDeductionItem> = new StringField('advanceId', RecurringDeductionItem, 'Edm.String');
  /**
   * Static representation of the [[amount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const AMOUNT: BigNumberField<RecurringDeductionItem> = new BigNumberField('amount', RecurringDeductionItem, 'Edm.Decimal');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<RecurringDeductionItem> = new StringField('createdBy', RecurringDeductionItem, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<RecurringDeductionItem> = new DateField('createdDateTime', RecurringDeductionItem, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[currency]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CURRENCY: StringField<RecurringDeductionItem> = new StringField('currency', RecurringDeductionItem, 'Edm.String');
  /**
   * Static representation of the [[editPermission]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EDIT_PERMISSION: StringField<RecurringDeductionItem> = new StringField('editPermission', RecurringDeductionItem, 'Edm.String');
  /**
   * Static representation of the [[endDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const END_DATE: DateField<RecurringDeductionItem> = new DateField('endDate', RecurringDeductionItem, 'Edm.DateTime');
  /**
   * Static representation of the [[equivalentAmount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EQUIVALENT_AMOUNT: BigNumberField<RecurringDeductionItem> = new BigNumberField('equivalentAmount', RecurringDeductionItem, 'Edm.Decimal');
  /**
   * Static representation of the [[frequency]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FREQUENCY: StringField<RecurringDeductionItem> = new StringField('frequency', RecurringDeductionItem, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<RecurringDeductionItem> = new StringField('lastModifiedBy', RecurringDeductionItem, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<RecurringDeductionItem> = new DateField('lastModifiedDateTime', RecurringDeductionItem, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<RecurringDeductionItem> = new StringField('mdfSystemRecordStatus', RecurringDeductionItem, 'Edm.String');
  /**
   * Static representation of the [[payComponentType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAY_COMPONENT_TYPE: StringField<RecurringDeductionItem> = new StringField('payComponentType', RecurringDeductionItem, 'Edm.String');
  /**
   * Static representation of the [[referenceId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REFERENCE_ID: StringField<RecurringDeductionItem> = new StringField('referenceId', RecurringDeductionItem, 'Edm.String');
  /**
   * Static representation of the [[unitOfMeasure]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const UNIT_OF_MEASURE: StringField<RecurringDeductionItem> = new StringField('unitOfMeasure', RecurringDeductionItem, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[advanceIdNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADVANCE_ID_NAV: OneToOneLink<RecurringDeductionItem, NonRecurringPayment> = new OneToOneLink('advanceIdNav', RecurringDeductionItem, NonRecurringPayment);
  /**
   * Static representation of the one-to-one navigation property [[attachmentNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ATTACHMENT_NAV: OneToOneLink<RecurringDeductionItem, Attachment> = new OneToOneLink('attachmentNav', RecurringDeductionItem, Attachment);
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<RecurringDeductionItem, User> = new OneToOneLink('createdByNav', RecurringDeductionItem, User);
  /**
   * Static representation of the one-to-many navigation property [[currencyNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CURRENCY_NAV: Link<RecurringDeductionItem, Currency> = new Link('currencyNav', RecurringDeductionItem, Currency);
  /**
   * Static representation of the one-to-one navigation property [[frequencyNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FREQUENCY_NAV: OneToOneLink<RecurringDeductionItem, FoFrequency> = new OneToOneLink('frequencyNav', RecurringDeductionItem, FoFrequency);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<RecurringDeductionItem, User> = new OneToOneLink('lastModifiedByNav', RecurringDeductionItem, User);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<RecurringDeductionItem, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', RecurringDeductionItem, MdfEnumValue);
  /**
   * Static representation of the one-to-many navigation property [[payComponentTypeNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAY_COMPONENT_TYPE_NAV: Link<RecurringDeductionItem, FoPayComponent> = new Link('payComponentTypeNav', RecurringDeductionItem, FoPayComponent);
  /**
   * All fields of the RecurringDeductionItem entity.
   */
  export const _allFields: Array<DateField<RecurringDeductionItem> | StringField<RecurringDeductionItem> | BigNumberField<RecurringDeductionItem> | OneToOneLink<RecurringDeductionItem, NonRecurringPayment> | OneToOneLink<RecurringDeductionItem, Attachment> | OneToOneLink<RecurringDeductionItem, User> | Link<RecurringDeductionItem, Currency> | OneToOneLink<RecurringDeductionItem, FoFrequency> | OneToOneLink<RecurringDeductionItem, MdfEnumValue> | Link<RecurringDeductionItem, FoPayComponent>> = [
    RecurringDeductionItem.RECURRING_DEDUCTION_EFFECTIVE_START_DATE,
    RecurringDeductionItem.RECURRING_DEDUCTION_USER_SYS_ID,
    RecurringDeductionItem.ADDITIONAL_INFO,
    RecurringDeductionItem.ADVANCE_ID,
    RecurringDeductionItem.AMOUNT,
    RecurringDeductionItem.CREATED_BY,
    RecurringDeductionItem.CREATED_DATE_TIME,
    RecurringDeductionItem.CURRENCY,
    RecurringDeductionItem.EDIT_PERMISSION,
    RecurringDeductionItem.END_DATE,
    RecurringDeductionItem.EQUIVALENT_AMOUNT,
    RecurringDeductionItem.FREQUENCY,
    RecurringDeductionItem.LAST_MODIFIED_BY,
    RecurringDeductionItem.LAST_MODIFIED_DATE_TIME,
    RecurringDeductionItem.MDF_SYSTEM_RECORD_STATUS,
    RecurringDeductionItem.PAY_COMPONENT_TYPE,
    RecurringDeductionItem.REFERENCE_ID,
    RecurringDeductionItem.UNIT_OF_MEASURE,
    RecurringDeductionItem.ADVANCE_ID_NAV,
    RecurringDeductionItem.ATTACHMENT_NAV,
    RecurringDeductionItem.CREATED_BY_NAV,
    RecurringDeductionItem.CURRENCY_NAV,
    RecurringDeductionItem.FREQUENCY_NAV,
    RecurringDeductionItem.LAST_MODIFIED_BY_NAV,
    RecurringDeductionItem.MDF_SYSTEM_RECORD_STATUS_NAV,
    RecurringDeductionItem.PAY_COMPONENT_TYPE_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<RecurringDeductionItem> = new AllFields('*', RecurringDeductionItem);
  /**
   * All key fields of the RecurringDeductionItem entity.
   */
  export const _keyFields: Array<Selectable<RecurringDeductionItem>> = [RecurringDeductionItem.RECURRING_DEDUCTION_EFFECTIVE_START_DATE, RecurringDeductionItem.RECURRING_DEDUCTION_USER_SYS_ID, RecurringDeductionItem.PAY_COMPONENT_TYPE];
  /**
   * Mapping of all key field names to the respective static field property RecurringDeductionItem.
   */
  export const _keys: { [keys: string]: Selectable<RecurringDeductionItem> } = RecurringDeductionItem._keyFields.reduce((acc: { [keys: string]: Selectable<RecurringDeductionItem> }, field: Selectable<RecurringDeductionItem>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
