/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ExtAddressInfoRequestBuilder } from './ExtAddressInfoRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "ExtAddressInfo" of service "SFOData".
 */
export class ExtAddressInfo extends Entity implements ExtAddressInfoType {
  /**
   * Technical entity name for ExtAddressInfo.
   */
  static _entityName = 'ExtAddressInfo';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for ExtAddressInfo.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * address1.
   * Maximum length: 1536.
   * @nullable
   */
  address1?: string;
  /**
   * address2.
   * Maximum length: 1536.
   * @nullable
   */
  address2?: string;
  /**
   * addressId.
   */
  addressId!: BigNumber;
  /**
   * addressType.
   * Maximum length: 30.
   * @nullable
   */
  addressType?: string;
  /**
   * city.
   * Maximum length: 1536.
   * @nullable
   */
  city?: string;
  /**
   * country.
   * Maximum length: 256.
   * @nullable
   */
  country?: string;
  /**
   * lastModifiedDateTime.
   * @nullable
   */
  lastModifiedDateTime?: Moment;
  /**
   * province.
   * Maximum length: 1536.
   * @nullable
   */
  province?: string;
  /**
   * state.
   * Maximum length: 1536.
   * @nullable
   */
  state?: string;
  /**
   * zipCode.
   * Maximum length: 1536.
   * @nullable
   */
  zipCode?: string;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  addressTypeNav!: PicklistOption;

  /**
   * Returns an entity builder to construct instances `ExtAddressInfo`.
   * @returns A builder that constructs instances of entity type `ExtAddressInfo`.
   */
  static builder(): EntityBuilderType<ExtAddressInfo, ExtAddressInfoTypeForceMandatory> {
    return Entity.entityBuilder(ExtAddressInfo);
  }

  /**
   * Returns a request builder to construct requests for operations on the `ExtAddressInfo` entity type.
   * @returns A `ExtAddressInfo` request builder.
   */
  static requestBuilder(): ExtAddressInfoRequestBuilder {
    return new ExtAddressInfoRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `ExtAddressInfo`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `ExtAddressInfo`.
   */
  static customField(fieldName: string): CustomField<ExtAddressInfo> {
    return Entity.customFieldSelector(fieldName, ExtAddressInfo);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { PicklistOption, PicklistOptionType } from './PicklistOption';

export interface ExtAddressInfoType {
  address1?: string;
  address2?: string;
  addressId: BigNumber;
  addressType?: string;
  city?: string;
  country?: string;
  lastModifiedDateTime?: Moment;
  province?: string;
  state?: string;
  zipCode?: string;
  addressTypeNav: PicklistOptionType;
}

export interface ExtAddressInfoTypeForceMandatory {
  address1: string;
  address2: string;
  addressId: BigNumber;
  addressType: string;
  city: string;
  country: string;
  lastModifiedDateTime: Moment;
  province: string;
  state: string;
  zipCode: string;
  addressTypeNav: PicklistOptionType;
}

export namespace ExtAddressInfo {
  /**
   * Static representation of the [[address1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_1: StringField<ExtAddressInfo> = new StringField('address1', ExtAddressInfo, 'Edm.String');
  /**
   * Static representation of the [[address2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_2: StringField<ExtAddressInfo> = new StringField('address2', ExtAddressInfo, 'Edm.String');
  /**
   * Static representation of the [[addressId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_ID: BigNumberField<ExtAddressInfo> = new BigNumberField('addressId', ExtAddressInfo, 'Edm.Int64');
  /**
   * Static representation of the [[addressType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_TYPE: StringField<ExtAddressInfo> = new StringField('addressType', ExtAddressInfo, 'Edm.String');
  /**
   * Static representation of the [[city]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CITY: StringField<ExtAddressInfo> = new StringField('city', ExtAddressInfo, 'Edm.String');
  /**
   * Static representation of the [[country]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY: StringField<ExtAddressInfo> = new StringField('country', ExtAddressInfo, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<ExtAddressInfo> = new DateField('lastModifiedDateTime', ExtAddressInfo, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[province]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROVINCE: StringField<ExtAddressInfo> = new StringField('province', ExtAddressInfo, 'Edm.String');
  /**
   * Static representation of the [[state]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATE: StringField<ExtAddressInfo> = new StringField('state', ExtAddressInfo, 'Edm.String');
  /**
   * Static representation of the [[zipCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ZIP_CODE: StringField<ExtAddressInfo> = new StringField('zipCode', ExtAddressInfo, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[addressTypeNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_TYPE_NAV: OneToOneLink<ExtAddressInfo, PicklistOption> = new OneToOneLink('addressTypeNav', ExtAddressInfo, PicklistOption);
  /**
   * All fields of the ExtAddressInfo entity.
   */
  export const _allFields: Array<StringField<ExtAddressInfo> | BigNumberField<ExtAddressInfo> | DateField<ExtAddressInfo> | OneToOneLink<ExtAddressInfo, PicklistOption>> = [
    ExtAddressInfo.ADDRESS_1,
    ExtAddressInfo.ADDRESS_2,
    ExtAddressInfo.ADDRESS_ID,
    ExtAddressInfo.ADDRESS_TYPE,
    ExtAddressInfo.CITY,
    ExtAddressInfo.COUNTRY,
    ExtAddressInfo.LAST_MODIFIED_DATE_TIME,
    ExtAddressInfo.PROVINCE,
    ExtAddressInfo.STATE,
    ExtAddressInfo.ZIP_CODE,
    ExtAddressInfo.ADDRESS_TYPE_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<ExtAddressInfo> = new AllFields('*', ExtAddressInfo);
  /**
   * All key fields of the ExtAddressInfo entity.
   */
  export const _keyFields: Array<Selectable<ExtAddressInfo>> = [ExtAddressInfo.ADDRESS_ID];
  /**
   * Mapping of all key field names to the respective static field property ExtAddressInfo.
   */
  export const _keys: { [keys: string]: Selectable<ExtAddressInfo> } = ExtAddressInfo._keyFields.reduce((acc: { [keys: string]: Selectable<ExtAddressInfo> }, field: Selectable<ExtAddressInfo>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
