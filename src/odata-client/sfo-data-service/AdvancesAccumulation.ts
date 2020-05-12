/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AdvancesAccumulationRequestBuilder } from './AdvancesAccumulationRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "AdvancesAccumulation" of service "SFOData".
 */
export class AdvancesAccumulation extends Entity implements AdvancesAccumulationType {
  /**
   * Technical entity name for AdvancesAccumulation.
   */
  static _entityName = 'AdvancesAccumulation';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for AdvancesAccumulation.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Accumulated Amount.
   * @nullable
   */
  accumulatedAmount?: BigNumber;
  /**
   * Advance Type.
   * Maximum length: 32.
   * @nullable
   */
  advanceType?: string;
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
   * Accumulation ID.
   * Maximum length: 128.
   */
  externalCode!: string;
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
   * Maximum Number of Occurrences.
   * @nullable
   */
  numberOfOccurances?: BigNumber;
  /**
   * Accumulation Period End Date.
   * @nullable
   */
  periodEndDate?: Moment;
  /**
   * Accumulation Period Start Date.
   * @nullable
   */
  periodStartDate?: Moment;
  /**
   * Remaining Eligibility.
   * @nullable
   */
  remainingEligibleAmount?: BigNumber;
  /**
   * Requests Remaining.
   * @nullable
   */
  remainingNumberOfOccurances?: BigNumber;
  /**
   * User ID.
   * Maximum length: 100.
   * @nullable
   */
  userSysId?: string;
  /**
   * One-to-many navigation property to the [[FoPayComponent]] entity.
   */
  advanceTypeNav!: FoPayComponent[];
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  createdByNav!: User;
  /**
   * One-to-many navigation property to the [[Currency]] entity.
   */
  currencyGoNav!: Currency[];
  /**
   * One-to-many navigation property to the [[PickListValueV2]] entity.
   */
  currencyNav!: PickListValueV2[];
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  lastModifiedByNav!: User;
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  mdfSystemRecordStatusNav!: MdfEnumValue;
  /**
   * One-to-many navigation property to the [[NonRecurringPayment]] entity.
   */
  nonRecurringPayments!: NonRecurringPayment[];
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  userSysIdNav!: User;
  /**
   * One-to-many navigation property to the [[WfRequest]] entity.
   */
  wfRequestNav!: WfRequest[];

  /**
   * Returns an entity builder to construct instances `AdvancesAccumulation`.
   * @returns A builder that constructs instances of entity type `AdvancesAccumulation`.
   */
  static builder(): EntityBuilderType<AdvancesAccumulation, AdvancesAccumulationTypeForceMandatory> {
    return Entity.entityBuilder(AdvancesAccumulation);
  }

  /**
   * Returns a request builder to construct requests for operations on the `AdvancesAccumulation` entity type.
   * @returns A `AdvancesAccumulation` request builder.
   */
  static requestBuilder(): AdvancesAccumulationRequestBuilder {
    return new AdvancesAccumulationRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `AdvancesAccumulation`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `AdvancesAccumulation`.
   */
  static customField(fieldName: string): CustomField<AdvancesAccumulation> {
    return Entity.customFieldSelector(fieldName, AdvancesAccumulation);
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
import { PickListValueV2, PickListValueV2Type } from './PickListValueV2';
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';
import { NonRecurringPayment, NonRecurringPaymentType } from './NonRecurringPayment';
import { WfRequest, WfRequestType } from './WfRequest';

export interface AdvancesAccumulationType {
  accumulatedAmount?: BigNumber;
  advanceType?: string;
  createdBy?: string;
  createdDateTime?: Moment;
  currency?: string;
  currencyGo?: string;
  externalCode: string;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  mdfSystemRecordStatus?: string;
  numberOfOccurances?: BigNumber;
  periodEndDate?: Moment;
  periodStartDate?: Moment;
  remainingEligibleAmount?: BigNumber;
  remainingNumberOfOccurances?: BigNumber;
  userSysId?: string;
  advanceTypeNav: FoPayComponentType[];
  createdByNav: UserType;
  currencyGoNav: CurrencyType[];
  currencyNav: PickListValueV2Type[];
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  nonRecurringPayments: NonRecurringPaymentType[];
  userSysIdNav: UserType;
  wfRequestNav: WfRequestType[];
}

export interface AdvancesAccumulationTypeForceMandatory {
  accumulatedAmount: BigNumber;
  advanceType: string;
  createdBy: string;
  createdDateTime: Moment;
  currency: string;
  currencyGo: string;
  externalCode: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  mdfSystemRecordStatus: string;
  numberOfOccurances: BigNumber;
  periodEndDate: Moment;
  periodStartDate: Moment;
  remainingEligibleAmount: BigNumber;
  remainingNumberOfOccurances: BigNumber;
  userSysId: string;
  advanceTypeNav: FoPayComponentType[];
  createdByNav: UserType;
  currencyGoNav: CurrencyType[];
  currencyNav: PickListValueV2Type[];
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  nonRecurringPayments: NonRecurringPaymentType[];
  userSysIdNav: UserType;
  wfRequestNav: WfRequestType[];
}

export namespace AdvancesAccumulation {
  /**
   * Static representation of the [[accumulatedAmount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACCUMULATED_AMOUNT: BigNumberField<AdvancesAccumulation> = new BigNumberField('accumulatedAmount', AdvancesAccumulation, 'Edm.Decimal');
  /**
   * Static representation of the [[advanceType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADVANCE_TYPE: StringField<AdvancesAccumulation> = new StringField('advanceType', AdvancesAccumulation, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<AdvancesAccumulation> = new StringField('createdBy', AdvancesAccumulation, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<AdvancesAccumulation> = new DateField('createdDateTime', AdvancesAccumulation, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[currency]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CURRENCY: StringField<AdvancesAccumulation> = new StringField('currency', AdvancesAccumulation, 'Edm.String');
  /**
   * Static representation of the [[currencyGo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CURRENCY_GO: StringField<AdvancesAccumulation> = new StringField('currencyGO', AdvancesAccumulation, 'Edm.String');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: StringField<AdvancesAccumulation> = new StringField('externalCode', AdvancesAccumulation, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<AdvancesAccumulation> = new StringField('lastModifiedBy', AdvancesAccumulation, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<AdvancesAccumulation> = new DateField('lastModifiedDateTime', AdvancesAccumulation, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<AdvancesAccumulation> = new StringField('mdfSystemRecordStatus', AdvancesAccumulation, 'Edm.String');
  /**
   * Static representation of the [[numberOfOccurances]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NUMBER_OF_OCCURANCES: BigNumberField<AdvancesAccumulation> = new BigNumberField('numberOfOccurances', AdvancesAccumulation, 'Edm.Int64');
  /**
   * Static representation of the [[periodEndDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PERIOD_END_DATE: DateField<AdvancesAccumulation> = new DateField('periodEndDate', AdvancesAccumulation, 'Edm.DateTime');
  /**
   * Static representation of the [[periodStartDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PERIOD_START_DATE: DateField<AdvancesAccumulation> = new DateField('periodStartDate', AdvancesAccumulation, 'Edm.DateTime');
  /**
   * Static representation of the [[remainingEligibleAmount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REMAINING_ELIGIBLE_AMOUNT: BigNumberField<AdvancesAccumulation> = new BigNumberField('remainingEligibleAmount', AdvancesAccumulation, 'Edm.Decimal');
  /**
   * Static representation of the [[remainingNumberOfOccurances]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REMAINING_NUMBER_OF_OCCURANCES: BigNumberField<AdvancesAccumulation> = new BigNumberField('remainingNumberOfOccurances', AdvancesAccumulation, 'Edm.Int64');
  /**
   * Static representation of the [[userSysId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_SYS_ID: StringField<AdvancesAccumulation> = new StringField('userSysId', AdvancesAccumulation, 'Edm.String');
  /**
   * Static representation of the one-to-many navigation property [[advanceTypeNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADVANCE_TYPE_NAV: Link<AdvancesAccumulation, FoPayComponent> = new Link('advanceTypeNav', AdvancesAccumulation, FoPayComponent);
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<AdvancesAccumulation, User> = new OneToOneLink('createdByNav', AdvancesAccumulation, User);
  /**
   * Static representation of the one-to-many navigation property [[currencyGoNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CURRENCY_GO_NAV: Link<AdvancesAccumulation, Currency> = new Link('currencyGONav', AdvancesAccumulation, Currency);
  /**
   * Static representation of the one-to-many navigation property [[currencyNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CURRENCY_NAV: Link<AdvancesAccumulation, PickListValueV2> = new Link('currencyNav', AdvancesAccumulation, PickListValueV2);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<AdvancesAccumulation, User> = new OneToOneLink('lastModifiedByNav', AdvancesAccumulation, User);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<AdvancesAccumulation, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', AdvancesAccumulation, MdfEnumValue);
  /**
   * Static representation of the one-to-many navigation property [[nonRecurringPayments]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NON_RECURRING_PAYMENTS: Link<AdvancesAccumulation, NonRecurringPayment> = new Link('nonRecurringPayments', AdvancesAccumulation, NonRecurringPayment);
  /**
   * Static representation of the one-to-one navigation property [[userSysIdNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_SYS_ID_NAV: OneToOneLink<AdvancesAccumulation, User> = new OneToOneLink('userSysIdNav', AdvancesAccumulation, User);
  /**
   * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WF_REQUEST_NAV: Link<AdvancesAccumulation, WfRequest> = new Link('wfRequestNav', AdvancesAccumulation, WfRequest);
  /**
   * All fields of the AdvancesAccumulation entity.
   */
  export const _allFields: Array<BigNumberField<AdvancesAccumulation> | StringField<AdvancesAccumulation> | DateField<AdvancesAccumulation> | Link<AdvancesAccumulation, FoPayComponent> | OneToOneLink<AdvancesAccumulation, User> | Link<AdvancesAccumulation, Currency> | Link<AdvancesAccumulation, PickListValueV2> | OneToOneLink<AdvancesAccumulation, MdfEnumValue> | Link<AdvancesAccumulation, NonRecurringPayment> | Link<AdvancesAccumulation, WfRequest>> = [
    AdvancesAccumulation.ACCUMULATED_AMOUNT,
    AdvancesAccumulation.ADVANCE_TYPE,
    AdvancesAccumulation.CREATED_BY,
    AdvancesAccumulation.CREATED_DATE_TIME,
    AdvancesAccumulation.CURRENCY,
    AdvancesAccumulation.CURRENCY_GO,
    AdvancesAccumulation.EXTERNAL_CODE,
    AdvancesAccumulation.LAST_MODIFIED_BY,
    AdvancesAccumulation.LAST_MODIFIED_DATE_TIME,
    AdvancesAccumulation.MDF_SYSTEM_RECORD_STATUS,
    AdvancesAccumulation.NUMBER_OF_OCCURANCES,
    AdvancesAccumulation.PERIOD_END_DATE,
    AdvancesAccumulation.PERIOD_START_DATE,
    AdvancesAccumulation.REMAINING_ELIGIBLE_AMOUNT,
    AdvancesAccumulation.REMAINING_NUMBER_OF_OCCURANCES,
    AdvancesAccumulation.USER_SYS_ID,
    AdvancesAccumulation.ADVANCE_TYPE_NAV,
    AdvancesAccumulation.CREATED_BY_NAV,
    AdvancesAccumulation.CURRENCY_GO_NAV,
    AdvancesAccumulation.CURRENCY_NAV,
    AdvancesAccumulation.LAST_MODIFIED_BY_NAV,
    AdvancesAccumulation.MDF_SYSTEM_RECORD_STATUS_NAV,
    AdvancesAccumulation.NON_RECURRING_PAYMENTS,
    AdvancesAccumulation.USER_SYS_ID_NAV,
    AdvancesAccumulation.WF_REQUEST_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<AdvancesAccumulation> = new AllFields('*', AdvancesAccumulation);
  /**
   * All key fields of the AdvancesAccumulation entity.
   */
  export const _keyFields: Array<Selectable<AdvancesAccumulation>> = [AdvancesAccumulation.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property AdvancesAccumulation.
   */
  export const _keys: { [keys: string]: Selectable<AdvancesAccumulation> } = AdvancesAccumulation._keyFields.reduce((acc: { [keys: string]: Selectable<AdvancesAccumulation> }, field: Selectable<AdvancesAccumulation>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
