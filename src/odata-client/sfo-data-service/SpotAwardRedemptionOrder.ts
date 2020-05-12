/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SpotAwardRedemptionOrderRequestBuilder } from './SpotAwardRedemptionOrderRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "SpotAwardRedemptionOrder" of service "SFOData".
 */
export class SpotAwardRedemptionOrder extends Entity implements SpotAwardRedemptionOrderType {
  /**
   * Technical entity name for SpotAwardRedemptionOrder.
   */
  static _entityName = 'SpotAwardRedemptionOrder';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for SpotAwardRedemptionOrder.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Spot Award Redemption_externalCode.
   */
  spotAwardRedemptionExternalCode!: BigNumber;
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
   * Order Amount.
   * @nullable
   */
  orderAmount?: BigNumber;
  /**
   * Quantity.
   * @nullable
   */
  quantity?: BigNumber;
  /**
   * mdfSystemRecordId.
   * Maximum length: 255.
   * @nullable
   */
  recordId?: string;
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
   * One-to-one navigation property to the [[SpotAwardRedemptionProduct]] entity.
   */
  product!: SpotAwardRedemptionProduct;

  /**
   * Returns an entity builder to construct instances `SpotAwardRedemptionOrder`.
   * @returns A builder that constructs instances of entity type `SpotAwardRedemptionOrder`.
   */
  static builder(): EntityBuilderType<SpotAwardRedemptionOrder, SpotAwardRedemptionOrderTypeForceMandatory> {
    return Entity.entityBuilder(SpotAwardRedemptionOrder);
  }

  /**
   * Returns a request builder to construct requests for operations on the `SpotAwardRedemptionOrder` entity type.
   * @returns A `SpotAwardRedemptionOrder` request builder.
   */
  static requestBuilder(): SpotAwardRedemptionOrderRequestBuilder {
    return new SpotAwardRedemptionOrderRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `SpotAwardRedemptionOrder`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `SpotAwardRedemptionOrder`.
   */
  static customField(fieldName: string): CustomField<SpotAwardRedemptionOrder> {
    return Entity.customFieldSelector(fieldName, SpotAwardRedemptionOrder);
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
import { SpotAwardRedemptionProduct, SpotAwardRedemptionProductType } from './SpotAwardRedemptionProduct';

export interface SpotAwardRedemptionOrderType {
  spotAwardRedemptionExternalCode: BigNumber;
  createdBy?: string;
  createdDateTime?: Moment;
  externalCode: BigNumber;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  mdfSystemRecordStatus?: string;
  orderAmount?: BigNumber;
  quantity?: BigNumber;
  recordId?: string;
  createdByNav: UserType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  product: SpotAwardRedemptionProductType;
}

export interface SpotAwardRedemptionOrderTypeForceMandatory {
  spotAwardRedemptionExternalCode: BigNumber;
  createdBy: string;
  createdDateTime: Moment;
  externalCode: BigNumber;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  mdfSystemRecordStatus: string;
  orderAmount: BigNumber;
  quantity: BigNumber;
  recordId: string;
  createdByNav: UserType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  product: SpotAwardRedemptionProductType;
}

export namespace SpotAwardRedemptionOrder {
  /**
   * Static representation of the [[spotAwardRedemptionExternalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SPOT_AWARD_REDEMPTION_EXTERNAL_CODE: BigNumberField<SpotAwardRedemptionOrder> = new BigNumberField('SpotAwardRedemption_externalCode', SpotAwardRedemptionOrder, 'Edm.Int64');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<SpotAwardRedemptionOrder> = new StringField('createdBy', SpotAwardRedemptionOrder, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<SpotAwardRedemptionOrder> = new DateField('createdDateTime', SpotAwardRedemptionOrder, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: BigNumberField<SpotAwardRedemptionOrder> = new BigNumberField('externalCode', SpotAwardRedemptionOrder, 'Edm.Int64');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<SpotAwardRedemptionOrder> = new StringField('lastModifiedBy', SpotAwardRedemptionOrder, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<SpotAwardRedemptionOrder> = new DateField('lastModifiedDateTime', SpotAwardRedemptionOrder, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<SpotAwardRedemptionOrder> = new StringField('mdfSystemRecordStatus', SpotAwardRedemptionOrder, 'Edm.String');
  /**
   * Static representation of the [[orderAmount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ORDER_AMOUNT: BigNumberField<SpotAwardRedemptionOrder> = new BigNumberField('orderAmount', SpotAwardRedemptionOrder, 'Edm.Decimal');
  /**
   * Static representation of the [[quantity]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const QUANTITY: BigNumberField<SpotAwardRedemptionOrder> = new BigNumberField('quantity', SpotAwardRedemptionOrder, 'Edm.Int64');
  /**
   * Static representation of the [[recordId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RECORD_ID: StringField<SpotAwardRedemptionOrder> = new StringField('recordId', SpotAwardRedemptionOrder, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<SpotAwardRedemptionOrder, User> = new OneToOneLink('createdByNav', SpotAwardRedemptionOrder, User);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<SpotAwardRedemptionOrder, User> = new OneToOneLink('lastModifiedByNav', SpotAwardRedemptionOrder, User);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<SpotAwardRedemptionOrder, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', SpotAwardRedemptionOrder, MdfEnumValue);
  /**
   * Static representation of the one-to-one navigation property [[product]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRODUCT: OneToOneLink<SpotAwardRedemptionOrder, SpotAwardRedemptionProduct> = new OneToOneLink('product', SpotAwardRedemptionOrder, SpotAwardRedemptionProduct);
  /**
   * All fields of the SpotAwardRedemptionOrder entity.
   */
  export const _allFields: Array<BigNumberField<SpotAwardRedemptionOrder> | StringField<SpotAwardRedemptionOrder> | DateField<SpotAwardRedemptionOrder> | OneToOneLink<SpotAwardRedemptionOrder, User> | OneToOneLink<SpotAwardRedemptionOrder, MdfEnumValue> | OneToOneLink<SpotAwardRedemptionOrder, SpotAwardRedemptionProduct>> = [
    SpotAwardRedemptionOrder.SPOT_AWARD_REDEMPTION_EXTERNAL_CODE,
    SpotAwardRedemptionOrder.CREATED_BY,
    SpotAwardRedemptionOrder.CREATED_DATE_TIME,
    SpotAwardRedemptionOrder.EXTERNAL_CODE,
    SpotAwardRedemptionOrder.LAST_MODIFIED_BY,
    SpotAwardRedemptionOrder.LAST_MODIFIED_DATE_TIME,
    SpotAwardRedemptionOrder.MDF_SYSTEM_RECORD_STATUS,
    SpotAwardRedemptionOrder.ORDER_AMOUNT,
    SpotAwardRedemptionOrder.QUANTITY,
    SpotAwardRedemptionOrder.RECORD_ID,
    SpotAwardRedemptionOrder.CREATED_BY_NAV,
    SpotAwardRedemptionOrder.LAST_MODIFIED_BY_NAV,
    SpotAwardRedemptionOrder.MDF_SYSTEM_RECORD_STATUS_NAV,
    SpotAwardRedemptionOrder.PRODUCT
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<SpotAwardRedemptionOrder> = new AllFields('*', SpotAwardRedemptionOrder);
  /**
   * All key fields of the SpotAwardRedemptionOrder entity.
   */
  export const _keyFields: Array<Selectable<SpotAwardRedemptionOrder>> = [SpotAwardRedemptionOrder.SPOT_AWARD_REDEMPTION_EXTERNAL_CODE, SpotAwardRedemptionOrder.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property SpotAwardRedemptionOrder.
   */
  export const _keys: { [keys: string]: Selectable<SpotAwardRedemptionOrder> } = SpotAwardRedemptionOrder._keyFields.reduce((acc: { [keys: string]: Selectable<SpotAwardRedemptionOrder> }, field: Selectable<SpotAwardRedemptionOrder>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
