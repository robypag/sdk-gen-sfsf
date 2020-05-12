/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SpotAwardRedemptionProductRequestBuilder } from './SpotAwardRedemptionProductRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "SpotAwardRedemptionProduct" of service "SFOData".
 */
export class SpotAwardRedemptionProduct extends Entity implements SpotAwardRedemptionProductType {
  /**
   * Technical entity name for SpotAwardRedemptionProduct.
   */
  static _entityName = 'SpotAwardRedemptionProduct';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for SpotAwardRedemptionProduct.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Spot Award Redemption Order_externalCode.
   */
  spotAwardRedemptionOrderExternalCode!: BigNumber;
  /**
   * Spot Award Redemption_externalCode.
   */
  spotAwardRedemptionExternalCode!: BigNumber;
  /**
   * Category.
   * Maximum length: 255.
   * @nullable
   */
  category?: string;
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
   * Description.
   * Maximum length: 255.
   * @nullable
   */
  description?: string;
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
   * Name.
   * Maximum length: 255.
   * @nullable
   */
  name?: string;
  /**
   * Price.
   * @nullable
   */
  price?: BigNumber;
  /**
   * Product ID.
   * Maximum length: 255.
   * @nullable
   */
  productId?: string;
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
   * Returns an entity builder to construct instances `SpotAwardRedemptionProduct`.
   * @returns A builder that constructs instances of entity type `SpotAwardRedemptionProduct`.
   */
  static builder(): EntityBuilderType<SpotAwardRedemptionProduct, SpotAwardRedemptionProductTypeForceMandatory> {
    return Entity.entityBuilder(SpotAwardRedemptionProduct);
  }

  /**
   * Returns a request builder to construct requests for operations on the `SpotAwardRedemptionProduct` entity type.
   * @returns A `SpotAwardRedemptionProduct` request builder.
   */
  static requestBuilder(): SpotAwardRedemptionProductRequestBuilder {
    return new SpotAwardRedemptionProductRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `SpotAwardRedemptionProduct`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `SpotAwardRedemptionProduct`.
   */
  static customField(fieldName: string): CustomField<SpotAwardRedemptionProduct> {
    return Entity.customFieldSelector(fieldName, SpotAwardRedemptionProduct);
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

export interface SpotAwardRedemptionProductType {
  spotAwardRedemptionOrderExternalCode: BigNumber;
  spotAwardRedemptionExternalCode: BigNumber;
  category?: string;
  createdBy?: string;
  createdDateTime?: Moment;
  description?: string;
  externalCode: BigNumber;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  mdfSystemRecordStatus?: string;
  name?: string;
  price?: BigNumber;
  productId?: string;
  recordId?: string;
  createdByNav: UserType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
}

export interface SpotAwardRedemptionProductTypeForceMandatory {
  spotAwardRedemptionOrderExternalCode: BigNumber;
  spotAwardRedemptionExternalCode: BigNumber;
  category: string;
  createdBy: string;
  createdDateTime: Moment;
  description: string;
  externalCode: BigNumber;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  mdfSystemRecordStatus: string;
  name: string;
  price: BigNumber;
  productId: string;
  recordId: string;
  createdByNav: UserType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
}

export namespace SpotAwardRedemptionProduct {
  /**
   * Static representation of the [[spotAwardRedemptionOrderExternalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SPOT_AWARD_REDEMPTION_ORDER_EXTERNAL_CODE: BigNumberField<SpotAwardRedemptionProduct> = new BigNumberField('SpotAwardRedemptionOrder_externalCode', SpotAwardRedemptionProduct, 'Edm.Int64');
  /**
   * Static representation of the [[spotAwardRedemptionExternalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SPOT_AWARD_REDEMPTION_EXTERNAL_CODE: BigNumberField<SpotAwardRedemptionProduct> = new BigNumberField('SpotAwardRedemption_externalCode', SpotAwardRedemptionProduct, 'Edm.Int64');
  /**
   * Static representation of the [[category]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CATEGORY: StringField<SpotAwardRedemptionProduct> = new StringField('category', SpotAwardRedemptionProduct, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<SpotAwardRedemptionProduct> = new StringField('createdBy', SpotAwardRedemptionProduct, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<SpotAwardRedemptionProduct> = new DateField('createdDateTime', SpotAwardRedemptionProduct, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[description]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION: StringField<SpotAwardRedemptionProduct> = new StringField('description', SpotAwardRedemptionProduct, 'Edm.String');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: BigNumberField<SpotAwardRedemptionProduct> = new BigNumberField('externalCode', SpotAwardRedemptionProduct, 'Edm.Int64');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<SpotAwardRedemptionProduct> = new StringField('lastModifiedBy', SpotAwardRedemptionProduct, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<SpotAwardRedemptionProduct> = new DateField('lastModifiedDateTime', SpotAwardRedemptionProduct, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<SpotAwardRedemptionProduct> = new StringField('mdfSystemRecordStatus', SpotAwardRedemptionProduct, 'Edm.String');
  /**
   * Static representation of the [[name]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME: StringField<SpotAwardRedemptionProduct> = new StringField('name', SpotAwardRedemptionProduct, 'Edm.String');
  /**
   * Static representation of the [[price]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRICE: BigNumberField<SpotAwardRedemptionProduct> = new BigNumberField('price', SpotAwardRedemptionProduct, 'Edm.Decimal');
  /**
   * Static representation of the [[productId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRODUCT_ID: StringField<SpotAwardRedemptionProduct> = new StringField('productId', SpotAwardRedemptionProduct, 'Edm.String');
  /**
   * Static representation of the [[recordId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RECORD_ID: StringField<SpotAwardRedemptionProduct> = new StringField('recordId', SpotAwardRedemptionProduct, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<SpotAwardRedemptionProduct, User> = new OneToOneLink('createdByNav', SpotAwardRedemptionProduct, User);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<SpotAwardRedemptionProduct, User> = new OneToOneLink('lastModifiedByNav', SpotAwardRedemptionProduct, User);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<SpotAwardRedemptionProduct, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', SpotAwardRedemptionProduct, MdfEnumValue);
  /**
   * All fields of the SpotAwardRedemptionProduct entity.
   */
  export const _allFields: Array<BigNumberField<SpotAwardRedemptionProduct> | StringField<SpotAwardRedemptionProduct> | DateField<SpotAwardRedemptionProduct> | OneToOneLink<SpotAwardRedemptionProduct, User> | OneToOneLink<SpotAwardRedemptionProduct, MdfEnumValue>> = [
    SpotAwardRedemptionProduct.SPOT_AWARD_REDEMPTION_ORDER_EXTERNAL_CODE,
    SpotAwardRedemptionProduct.SPOT_AWARD_REDEMPTION_EXTERNAL_CODE,
    SpotAwardRedemptionProduct.CATEGORY,
    SpotAwardRedemptionProduct.CREATED_BY,
    SpotAwardRedemptionProduct.CREATED_DATE_TIME,
    SpotAwardRedemptionProduct.DESCRIPTION,
    SpotAwardRedemptionProduct.EXTERNAL_CODE,
    SpotAwardRedemptionProduct.LAST_MODIFIED_BY,
    SpotAwardRedemptionProduct.LAST_MODIFIED_DATE_TIME,
    SpotAwardRedemptionProduct.MDF_SYSTEM_RECORD_STATUS,
    SpotAwardRedemptionProduct.NAME,
    SpotAwardRedemptionProduct.PRICE,
    SpotAwardRedemptionProduct.PRODUCT_ID,
    SpotAwardRedemptionProduct.RECORD_ID,
    SpotAwardRedemptionProduct.CREATED_BY_NAV,
    SpotAwardRedemptionProduct.LAST_MODIFIED_BY_NAV,
    SpotAwardRedemptionProduct.MDF_SYSTEM_RECORD_STATUS_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<SpotAwardRedemptionProduct> = new AllFields('*', SpotAwardRedemptionProduct);
  /**
   * All key fields of the SpotAwardRedemptionProduct entity.
   */
  export const _keyFields: Array<Selectable<SpotAwardRedemptionProduct>> = [SpotAwardRedemptionProduct.SPOT_AWARD_REDEMPTION_ORDER_EXTERNAL_CODE, SpotAwardRedemptionProduct.SPOT_AWARD_REDEMPTION_EXTERNAL_CODE, SpotAwardRedemptionProduct.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property SpotAwardRedemptionProduct.
   */
  export const _keys: { [keys: string]: Selectable<SpotAwardRedemptionProduct> } = SpotAwardRedemptionProduct._keyFields.reduce((acc: { [keys: string]: Selectable<SpotAwardRedemptionProduct> }, field: Selectable<SpotAwardRedemptionProduct>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
