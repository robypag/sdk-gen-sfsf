/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SpotAwardRedemptionRequestBuilder } from './SpotAwardRedemptionRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "SpotAwardRedemption" of service "SFOData".
 */
export class SpotAwardRedemption extends Entity implements SpotAwardRedemptionType {
  /**
   * Technical entity name for SpotAwardRedemption.
   */
  static _entityName = 'SpotAwardRedemption';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for SpotAwardRedemption.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Comments.
   * Maximum length: 255.
   * @nullable
   */
  comments?: string;
  /**
   * createdBy.
   * Maximum length: 255.
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
   * Maximum length: 255.
   * @nullable
   */
  currency?: string;
  /**
   * externalCode.
   */
  externalCode!: BigNumber;
  /**
   * lastModifiedBy.
   * Maximum length: 255.
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
   * mdfSystemRecordId.
   * Maximum length: 255.
   * @nullable
   */
  recordId?: string;
  /**
   * Total Order Amount.
   * @nullable
   */
  totalOrderAmount?: BigNumber;
  /**
   * User ID.
   * Maximum length: 100.
   * @nullable
   */
  userId?: string;
  /**
   * Vendor Identifier.
   * Maximum length: 128.
   * @nullable
   */
  vendorIdentifier?: string;
  /**
   * Vendor Transaction ID.
   * Maximum length: 255.
   * @nullable
   */
  vendorTransactionId?: string;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  createdByNav!: User;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  lastModifiedByNav!: User;
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  mdfSystemRecordStatusNav!: MdfEnumValue;
  /**
   * One-to-many navigation property to the [[SpotAwardRedemptionOrder]] entity.
   */
  orders!: SpotAwardRedemptionOrder[];
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  userIdNav!: User;
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  vendorIdentifierNav!: MdfEnumValue;
  /**
   * One-to-many navigation property to the [[WfRequest]] entity.
   */
  wfRequestNav!: WfRequest[];

  /**
   * Returns an entity builder to construct instances `SpotAwardRedemption`.
   * @returns A builder that constructs instances of entity type `SpotAwardRedemption`.
   */
  static builder(): EntityBuilderType<SpotAwardRedemption, SpotAwardRedemptionTypeForceMandatory> {
    return Entity.entityBuilder(SpotAwardRedemption);
  }

  /**
   * Returns a request builder to construct requests for operations on the `SpotAwardRedemption` entity type.
   * @returns A `SpotAwardRedemption` request builder.
   */
  static requestBuilder(): SpotAwardRedemptionRequestBuilder {
    return new SpotAwardRedemptionRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `SpotAwardRedemption`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `SpotAwardRedemption`.
   */
  static customField(fieldName: string): CustomField<SpotAwardRedemption> {
    return Entity.customFieldSelector(fieldName, SpotAwardRedemption);
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
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';
import { SpotAwardRedemptionOrder, SpotAwardRedemptionOrderType } from './SpotAwardRedemptionOrder';
import { WfRequest, WfRequestType } from './WfRequest';

export interface SpotAwardRedemptionType {
  comments?: string;
  createdBy?: string;
  createdDateTime?: Moment;
  currency?: string;
  externalCode: BigNumber;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  mdfSystemRecordStatus?: string;
  recordId?: string;
  totalOrderAmount?: BigNumber;
  userId?: string;
  vendorIdentifier?: string;
  vendorTransactionId?: string;
  createdByNav: UserType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  orders: SpotAwardRedemptionOrderType[];
  userIdNav: UserType;
  vendorIdentifierNav: MdfEnumValueType;
  wfRequestNav: WfRequestType[];
}

export interface SpotAwardRedemptionTypeForceMandatory {
  comments: string;
  createdBy: string;
  createdDateTime: Moment;
  currency: string;
  externalCode: BigNumber;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  mdfSystemRecordStatus: string;
  recordId: string;
  totalOrderAmount: BigNumber;
  userId: string;
  vendorIdentifier: string;
  vendorTransactionId: string;
  createdByNav: UserType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  orders: SpotAwardRedemptionOrderType[];
  userIdNav: UserType;
  vendorIdentifierNav: MdfEnumValueType;
  wfRequestNav: WfRequestType[];
}

export namespace SpotAwardRedemption {
  /**
   * Static representation of the [[comments]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMMENTS: StringField<SpotAwardRedemption> = new StringField('comments', SpotAwardRedemption, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<SpotAwardRedemption> = new StringField('createdBy', SpotAwardRedemption, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<SpotAwardRedemption> = new DateField('createdDateTime', SpotAwardRedemption, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[currency]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CURRENCY: StringField<SpotAwardRedemption> = new StringField('currency', SpotAwardRedemption, 'Edm.String');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: BigNumberField<SpotAwardRedemption> = new BigNumberField('externalCode', SpotAwardRedemption, 'Edm.Int64');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<SpotAwardRedemption> = new StringField('lastModifiedBy', SpotAwardRedemption, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<SpotAwardRedemption> = new DateField('lastModifiedDateTime', SpotAwardRedemption, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<SpotAwardRedemption> = new StringField('mdfSystemRecordStatus', SpotAwardRedemption, 'Edm.String');
  /**
   * Static representation of the [[recordId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RECORD_ID: StringField<SpotAwardRedemption> = new StringField('recordId', SpotAwardRedemption, 'Edm.String');
  /**
   * Static representation of the [[totalOrderAmount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TOTAL_ORDER_AMOUNT: BigNumberField<SpotAwardRedemption> = new BigNumberField('totalOrderAmount', SpotAwardRedemption, 'Edm.Decimal');
  /**
   * Static representation of the [[userId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_ID: StringField<SpotAwardRedemption> = new StringField('userId', SpotAwardRedemption, 'Edm.String');
  /**
   * Static representation of the [[vendorIdentifier]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VENDOR_IDENTIFIER: StringField<SpotAwardRedemption> = new StringField('vendorIdentifier', SpotAwardRedemption, 'Edm.String');
  /**
   * Static representation of the [[vendorTransactionId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VENDOR_TRANSACTION_ID: StringField<SpotAwardRedemption> = new StringField('vendorTransactionId', SpotAwardRedemption, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<SpotAwardRedemption, User> = new OneToOneLink('createdByNav', SpotAwardRedemption, User);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<SpotAwardRedemption, User> = new OneToOneLink('lastModifiedByNav', SpotAwardRedemption, User);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<SpotAwardRedemption, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', SpotAwardRedemption, MdfEnumValue);
  /**
   * Static representation of the one-to-many navigation property [[orders]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ORDERS: Link<SpotAwardRedemption, SpotAwardRedemptionOrder> = new Link('orders', SpotAwardRedemption, SpotAwardRedemptionOrder);
  /**
   * Static representation of the one-to-one navigation property [[userIdNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_ID_NAV: OneToOneLink<SpotAwardRedemption, User> = new OneToOneLink('userIdNav', SpotAwardRedemption, User);
  /**
   * Static representation of the one-to-one navigation property [[vendorIdentifierNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VENDOR_IDENTIFIER_NAV: OneToOneLink<SpotAwardRedemption, MdfEnumValue> = new OneToOneLink('vendorIdentifierNav', SpotAwardRedemption, MdfEnumValue);
  /**
   * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WF_REQUEST_NAV: Link<SpotAwardRedemption, WfRequest> = new Link('wfRequestNav', SpotAwardRedemption, WfRequest);
  /**
   * All fields of the SpotAwardRedemption entity.
   */
  export const _allFields: Array<StringField<SpotAwardRedemption> | DateField<SpotAwardRedemption> | BigNumberField<SpotAwardRedemption> | OneToOneLink<SpotAwardRedemption, User> | OneToOneLink<SpotAwardRedemption, MdfEnumValue> | Link<SpotAwardRedemption, SpotAwardRedemptionOrder> | Link<SpotAwardRedemption, WfRequest>> = [
    SpotAwardRedemption.COMMENTS,
    SpotAwardRedemption.CREATED_BY,
    SpotAwardRedemption.CREATED_DATE_TIME,
    SpotAwardRedemption.CURRENCY,
    SpotAwardRedemption.EXTERNAL_CODE,
    SpotAwardRedemption.LAST_MODIFIED_BY,
    SpotAwardRedemption.LAST_MODIFIED_DATE_TIME,
    SpotAwardRedemption.MDF_SYSTEM_RECORD_STATUS,
    SpotAwardRedemption.RECORD_ID,
    SpotAwardRedemption.TOTAL_ORDER_AMOUNT,
    SpotAwardRedemption.USER_ID,
    SpotAwardRedemption.VENDOR_IDENTIFIER,
    SpotAwardRedemption.VENDOR_TRANSACTION_ID,
    SpotAwardRedemption.CREATED_BY_NAV,
    SpotAwardRedemption.LAST_MODIFIED_BY_NAV,
    SpotAwardRedemption.MDF_SYSTEM_RECORD_STATUS_NAV,
    SpotAwardRedemption.ORDERS,
    SpotAwardRedemption.USER_ID_NAV,
    SpotAwardRedemption.VENDOR_IDENTIFIER_NAV,
    SpotAwardRedemption.WF_REQUEST_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<SpotAwardRedemption> = new AllFields('*', SpotAwardRedemption);
  /**
   * All key fields of the SpotAwardRedemption entity.
   */
  export const _keyFields: Array<Selectable<SpotAwardRedemption>> = [SpotAwardRedemption.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property SpotAwardRedemption.
   */
  export const _keys: { [keys: string]: Selectable<SpotAwardRedemption> } = SpotAwardRedemption._keyFields.reduce((acc: { [keys: string]: Selectable<SpotAwardRedemption> }, field: Selectable<SpotAwardRedemption>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
