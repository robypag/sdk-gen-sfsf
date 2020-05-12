/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PayScalePayComponentRequestBuilder } from './PayScalePayComponentRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "PayScalePayComponent" of service "SFOData".
 */
export class PayScalePayComponent extends Entity implements PayScalePayComponentType {
  /**
   * Technical entity name for PayScalePayComponent.
   */
  static _entityName = 'PayScalePayComponent';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for PayScalePayComponent.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Pay Scale Level_Code.
   * Maximum length: 128.
   */
  payScaleLevelCode!: string;
  /**
   * Pay Scale Level_Effective Start Date.
   */
  payScaleLevelEffectiveStartDate!: Moment;
  /**
   * Amount.
   * @nullable
   */
  amount?: BigNumber;
  /**
   * Pay Component.
   * Maximum length: 32.
   */
  code!: string;
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
   * Number.
   * @nullable
   */
  number?: BigNumber;
  /**
   * Percentage.
   * @nullable
   */
  percentage?: BigNumber;
  /**
   * Rate.
   * @nullable
   */
  rate?: BigNumber;
  /**
   * Unit.
   * Maximum length: 128.
   * @nullable
   */
  unit?: string;
  /**
   * One-to-many navigation property to the [[FoPayComponent]] entity.
   */
  codeNav!: FoPayComponent[];
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
   * Returns an entity builder to construct instances `PayScalePayComponent`.
   * @returns A builder that constructs instances of entity type `PayScalePayComponent`.
   */
  static builder(): EntityBuilderType<PayScalePayComponent, PayScalePayComponentTypeForceMandatory> {
    return Entity.entityBuilder(PayScalePayComponent);
  }

  /**
   * Returns a request builder to construct requests for operations on the `PayScalePayComponent` entity type.
   * @returns A `PayScalePayComponent` request builder.
   */
  static requestBuilder(): PayScalePayComponentRequestBuilder {
    return new PayScalePayComponentRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `PayScalePayComponent`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `PayScalePayComponent`.
   */
  static customField(fieldName: string): CustomField<PayScalePayComponent> {
    return Entity.customFieldSelector(fieldName, PayScalePayComponent);
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
import { User, UserType } from './User';
import { Currency, CurrencyType } from './Currency';
import { FoFrequency, FoFrequencyType } from './FoFrequency';
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';

export interface PayScalePayComponentType {
  payScaleLevelCode: string;
  payScaleLevelEffectiveStartDate: Moment;
  amount?: BigNumber;
  code: string;
  createdBy?: string;
  createdDateTime?: Moment;
  currency?: string;
  frequency?: string;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  mdfSystemRecordStatus?: string;
  number?: BigNumber;
  percentage?: BigNumber;
  rate?: BigNumber;
  unit?: string;
  codeNav: FoPayComponentType[];
  createdByNav: UserType;
  currencyNav: CurrencyType[];
  frequencyNav: FoFrequencyType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
}

export interface PayScalePayComponentTypeForceMandatory {
  payScaleLevelCode: string;
  payScaleLevelEffectiveStartDate: Moment;
  amount: BigNumber;
  code: string;
  createdBy: string;
  createdDateTime: Moment;
  currency: string;
  frequency: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  mdfSystemRecordStatus: string;
  number: BigNumber;
  percentage: BigNumber;
  rate: BigNumber;
  unit: string;
  codeNav: FoPayComponentType[];
  createdByNav: UserType;
  currencyNav: CurrencyType[];
  frequencyNav: FoFrequencyType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
}

export namespace PayScalePayComponent {
  /**
   * Static representation of the [[payScaleLevelCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAY_SCALE_LEVEL_CODE: StringField<PayScalePayComponent> = new StringField('PayScaleLevel_code', PayScalePayComponent, 'Edm.String');
  /**
   * Static representation of the [[payScaleLevelEffectiveStartDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAY_SCALE_LEVEL_EFFECTIVE_START_DATE: DateField<PayScalePayComponent> = new DateField('PayScaleLevel_effectiveStartDate', PayScalePayComponent, 'Edm.DateTime');
  /**
   * Static representation of the [[amount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const AMOUNT: BigNumberField<PayScalePayComponent> = new BigNumberField('amount', PayScalePayComponent, 'Edm.Decimal');
  /**
   * Static representation of the [[code]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CODE: StringField<PayScalePayComponent> = new StringField('code', PayScalePayComponent, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<PayScalePayComponent> = new StringField('createdBy', PayScalePayComponent, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<PayScalePayComponent> = new DateField('createdDateTime', PayScalePayComponent, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[currency]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CURRENCY: StringField<PayScalePayComponent> = new StringField('currency', PayScalePayComponent, 'Edm.String');
  /**
   * Static representation of the [[frequency]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FREQUENCY: StringField<PayScalePayComponent> = new StringField('frequency', PayScalePayComponent, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<PayScalePayComponent> = new StringField('lastModifiedBy', PayScalePayComponent, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<PayScalePayComponent> = new DateField('lastModifiedDateTime', PayScalePayComponent, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<PayScalePayComponent> = new StringField('mdfSystemRecordStatus', PayScalePayComponent, 'Edm.String');
  /**
   * Static representation of the [[number]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NUMBER: BigNumberField<PayScalePayComponent> = new BigNumberField('number', PayScalePayComponent, 'Edm.Decimal');
  /**
   * Static representation of the [[percentage]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PERCENTAGE: BigNumberField<PayScalePayComponent> = new BigNumberField('percentage', PayScalePayComponent, 'Edm.Decimal');
  /**
   * Static representation of the [[rate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RATE: BigNumberField<PayScalePayComponent> = new BigNumberField('rate', PayScalePayComponent, 'Edm.Decimal');
  /**
   * Static representation of the [[unit]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const UNIT: StringField<PayScalePayComponent> = new StringField('unit', PayScalePayComponent, 'Edm.String');
  /**
   * Static representation of the one-to-many navigation property [[codeNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CODE_NAV: Link<PayScalePayComponent, FoPayComponent> = new Link('codeNav', PayScalePayComponent, FoPayComponent);
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<PayScalePayComponent, User> = new OneToOneLink('createdByNav', PayScalePayComponent, User);
  /**
   * Static representation of the one-to-many navigation property [[currencyNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CURRENCY_NAV: Link<PayScalePayComponent, Currency> = new Link('currencyNav', PayScalePayComponent, Currency);
  /**
   * Static representation of the one-to-one navigation property [[frequencyNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FREQUENCY_NAV: OneToOneLink<PayScalePayComponent, FoFrequency> = new OneToOneLink('frequencyNav', PayScalePayComponent, FoFrequency);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<PayScalePayComponent, User> = new OneToOneLink('lastModifiedByNav', PayScalePayComponent, User);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<PayScalePayComponent, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', PayScalePayComponent, MdfEnumValue);
  /**
   * All fields of the PayScalePayComponent entity.
   */
  export const _allFields: Array<StringField<PayScalePayComponent> | DateField<PayScalePayComponent> | BigNumberField<PayScalePayComponent> | Link<PayScalePayComponent, FoPayComponent> | OneToOneLink<PayScalePayComponent, User> | Link<PayScalePayComponent, Currency> | OneToOneLink<PayScalePayComponent, FoFrequency> | OneToOneLink<PayScalePayComponent, MdfEnumValue>> = [
    PayScalePayComponent.PAY_SCALE_LEVEL_CODE,
    PayScalePayComponent.PAY_SCALE_LEVEL_EFFECTIVE_START_DATE,
    PayScalePayComponent.AMOUNT,
    PayScalePayComponent.CODE,
    PayScalePayComponent.CREATED_BY,
    PayScalePayComponent.CREATED_DATE_TIME,
    PayScalePayComponent.CURRENCY,
    PayScalePayComponent.FREQUENCY,
    PayScalePayComponent.LAST_MODIFIED_BY,
    PayScalePayComponent.LAST_MODIFIED_DATE_TIME,
    PayScalePayComponent.MDF_SYSTEM_RECORD_STATUS,
    PayScalePayComponent.NUMBER,
    PayScalePayComponent.PERCENTAGE,
    PayScalePayComponent.RATE,
    PayScalePayComponent.UNIT,
    PayScalePayComponent.CODE_NAV,
    PayScalePayComponent.CREATED_BY_NAV,
    PayScalePayComponent.CURRENCY_NAV,
    PayScalePayComponent.FREQUENCY_NAV,
    PayScalePayComponent.LAST_MODIFIED_BY_NAV,
    PayScalePayComponent.MDF_SYSTEM_RECORD_STATUS_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<PayScalePayComponent> = new AllFields('*', PayScalePayComponent);
  /**
   * All key fields of the PayScalePayComponent entity.
   */
  export const _keyFields: Array<Selectable<PayScalePayComponent>> = [PayScalePayComponent.PAY_SCALE_LEVEL_CODE, PayScalePayComponent.PAY_SCALE_LEVEL_EFFECTIVE_START_DATE, PayScalePayComponent.CODE];
  /**
   * Mapping of all key field names to the respective static field property PayScalePayComponent.
   */
  export const _keys: { [keys: string]: Selectable<PayScalePayComponent> } = PayScalePayComponent._keyFields.reduce((acc: { [keys: string]: Selectable<PayScalePayComponent> }, field: Selectable<PayScalePayComponent>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
