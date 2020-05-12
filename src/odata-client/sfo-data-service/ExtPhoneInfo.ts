/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ExtPhoneInfoRequestBuilder } from './ExtPhoneInfoRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "ExtPhoneInfo" of service "SFOData".
 */
export class ExtPhoneInfo extends Entity implements ExtPhoneInfoType {
  /**
   * Technical entity name for ExtPhoneInfo.
   */
  static _entityName = 'ExtPhoneInfo';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for ExtPhoneInfo.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Area Code.
   * Maximum length: 32.
   * @nullable
   */
  areaCode?: string;
  /**
   * Country Code.
   * Maximum length: 32.
   * @nullable
   */
  countryCode?: string;
  /**
   * Extension.
   * Maximum length: 32.
   * @nullable
   */
  extension?: string;
  /**
   * Is Primary.
   * Maximum length: 4.
   * @nullable
   */
  isPrimary?: string;
  /**
   * lastModifiedDateTime.
   * @nullable
   */
  lastModifiedDateTime?: Moment;
  /**
   * phoneInfoId.
   */
  phoneInfoId!: BigNumber;
  /**
   * Phone Number.
   * Maximum length: 600.
   * @nullable
   */
  phoneNumber?: string;
  /**
   * Phone Type.
   * Maximum length: 100.
   * @nullable
   */
  phoneType?: string;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  phoneTypeNav!: PicklistOption;

  /**
   * Returns an entity builder to construct instances `ExtPhoneInfo`.
   * @returns A builder that constructs instances of entity type `ExtPhoneInfo`.
   */
  static builder(): EntityBuilderType<ExtPhoneInfo, ExtPhoneInfoTypeForceMandatory> {
    return Entity.entityBuilder(ExtPhoneInfo);
  }

  /**
   * Returns a request builder to construct requests for operations on the `ExtPhoneInfo` entity type.
   * @returns A `ExtPhoneInfo` request builder.
   */
  static requestBuilder(): ExtPhoneInfoRequestBuilder {
    return new ExtPhoneInfoRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `ExtPhoneInfo`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `ExtPhoneInfo`.
   */
  static customField(fieldName: string): CustomField<ExtPhoneInfo> {
    return Entity.customFieldSelector(fieldName, ExtPhoneInfo);
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

export interface ExtPhoneInfoType {
  areaCode?: string;
  countryCode?: string;
  extension?: string;
  isPrimary?: string;
  lastModifiedDateTime?: Moment;
  phoneInfoId: BigNumber;
  phoneNumber?: string;
  phoneType?: string;
  phoneTypeNav: PicklistOptionType;
}

export interface ExtPhoneInfoTypeForceMandatory {
  areaCode: string;
  countryCode: string;
  extension: string;
  isPrimary: string;
  lastModifiedDateTime: Moment;
  phoneInfoId: BigNumber;
  phoneNumber: string;
  phoneType: string;
  phoneTypeNav: PicklistOptionType;
}

export namespace ExtPhoneInfo {
  /**
   * Static representation of the [[areaCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const AREA_CODE: StringField<ExtPhoneInfo> = new StringField('areaCode', ExtPhoneInfo, 'Edm.String');
  /**
   * Static representation of the [[countryCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY_CODE: StringField<ExtPhoneInfo> = new StringField('countryCode', ExtPhoneInfo, 'Edm.String');
  /**
   * Static representation of the [[extension]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTENSION: StringField<ExtPhoneInfo> = new StringField('extension', ExtPhoneInfo, 'Edm.String');
  /**
   * Static representation of the [[isPrimary]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_PRIMARY: StringField<ExtPhoneInfo> = new StringField('isPrimary', ExtPhoneInfo, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<ExtPhoneInfo> = new DateField('lastModifiedDateTime', ExtPhoneInfo, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[phoneInfoId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PHONE_INFO_ID: BigNumberField<ExtPhoneInfo> = new BigNumberField('phoneInfoId', ExtPhoneInfo, 'Edm.Int64');
  /**
   * Static representation of the [[phoneNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PHONE_NUMBER: StringField<ExtPhoneInfo> = new StringField('phoneNumber', ExtPhoneInfo, 'Edm.String');
  /**
   * Static representation of the [[phoneType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PHONE_TYPE: StringField<ExtPhoneInfo> = new StringField('phoneType', ExtPhoneInfo, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[phoneTypeNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PHONE_TYPE_NAV: OneToOneLink<ExtPhoneInfo, PicklistOption> = new OneToOneLink('phoneTypeNav', ExtPhoneInfo, PicklistOption);
  /**
   * All fields of the ExtPhoneInfo entity.
   */
  export const _allFields: Array<StringField<ExtPhoneInfo> | DateField<ExtPhoneInfo> | BigNumberField<ExtPhoneInfo> | OneToOneLink<ExtPhoneInfo, PicklistOption>> = [
    ExtPhoneInfo.AREA_CODE,
    ExtPhoneInfo.COUNTRY_CODE,
    ExtPhoneInfo.EXTENSION,
    ExtPhoneInfo.IS_PRIMARY,
    ExtPhoneInfo.LAST_MODIFIED_DATE_TIME,
    ExtPhoneInfo.PHONE_INFO_ID,
    ExtPhoneInfo.PHONE_NUMBER,
    ExtPhoneInfo.PHONE_TYPE,
    ExtPhoneInfo.PHONE_TYPE_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<ExtPhoneInfo> = new AllFields('*', ExtPhoneInfo);
  /**
   * All key fields of the ExtPhoneInfo entity.
   */
  export const _keyFields: Array<Selectable<ExtPhoneInfo>> = [ExtPhoneInfo.PHONE_INFO_ID];
  /**
   * Mapping of all key field names to the respective static field property ExtPhoneInfo.
   */
  export const _keys: { [keys: string]: Selectable<ExtPhoneInfo> } = ExtPhoneInfo._keyFields.reduce((acc: { [keys: string]: Selectable<ExtPhoneInfo> }, field: Selectable<ExtPhoneInfo>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
