/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ExtEmailInfoRequestBuilder } from './ExtEmailInfoRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "ExtEmailInfo" of service "SFOData".
 */
export class ExtEmailInfo extends Entity implements ExtEmailInfoType {
  /**
   * Technical entity name for ExtEmailInfo.
   */
  static _entityName = 'ExtEmailInfo';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for ExtEmailInfo.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Email Address.
   * Maximum length: 100.
   */
  emailAddress!: string;
  /**
   * emailInfoId.
   */
  emailInfoId!: BigNumber;
  /**
   * Email Type.
   * Maximum length: 38.
   */
  emailType!: string;
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
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  emailTypeNav!: PicklistOption;

  /**
   * Returns an entity builder to construct instances `ExtEmailInfo`.
   * @returns A builder that constructs instances of entity type `ExtEmailInfo`.
   */
  static builder(): EntityBuilderType<ExtEmailInfo, ExtEmailInfoTypeForceMandatory> {
    return Entity.entityBuilder(ExtEmailInfo);
  }

  /**
   * Returns a request builder to construct requests for operations on the `ExtEmailInfo` entity type.
   * @returns A `ExtEmailInfo` request builder.
   */
  static requestBuilder(): ExtEmailInfoRequestBuilder {
    return new ExtEmailInfoRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `ExtEmailInfo`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `ExtEmailInfo`.
   */
  static customField(fieldName: string): CustomField<ExtEmailInfo> {
    return Entity.customFieldSelector(fieldName, ExtEmailInfo);
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

export interface ExtEmailInfoType {
  emailAddress: string;
  emailInfoId: BigNumber;
  emailType: string;
  isPrimary?: string;
  lastModifiedDateTime?: Moment;
  emailTypeNav: PicklistOptionType;
}

export interface ExtEmailInfoTypeForceMandatory {
  emailAddress: string;
  emailInfoId: BigNumber;
  emailType: string;
  isPrimary: string;
  lastModifiedDateTime: Moment;
  emailTypeNav: PicklistOptionType;
}

export namespace ExtEmailInfo {
  /**
   * Static representation of the [[emailAddress]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMAIL_ADDRESS: StringField<ExtEmailInfo> = new StringField('emailAddress', ExtEmailInfo, 'Edm.String');
  /**
   * Static representation of the [[emailInfoId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMAIL_INFO_ID: BigNumberField<ExtEmailInfo> = new BigNumberField('emailInfoId', ExtEmailInfo, 'Edm.Int64');
  /**
   * Static representation of the [[emailType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMAIL_TYPE: StringField<ExtEmailInfo> = new StringField('emailType', ExtEmailInfo, 'Edm.String');
  /**
   * Static representation of the [[isPrimary]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_PRIMARY: StringField<ExtEmailInfo> = new StringField('isPrimary', ExtEmailInfo, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<ExtEmailInfo> = new DateField('lastModifiedDateTime', ExtEmailInfo, 'Edm.DateTimeOffset');
  /**
   * Static representation of the one-to-one navigation property [[emailTypeNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMAIL_TYPE_NAV: OneToOneLink<ExtEmailInfo, PicklistOption> = new OneToOneLink('emailTypeNav', ExtEmailInfo, PicklistOption);
  /**
   * All fields of the ExtEmailInfo entity.
   */
  export const _allFields: Array<StringField<ExtEmailInfo> | BigNumberField<ExtEmailInfo> | DateField<ExtEmailInfo> | OneToOneLink<ExtEmailInfo, PicklistOption>> = [
    ExtEmailInfo.EMAIL_ADDRESS,
    ExtEmailInfo.EMAIL_INFO_ID,
    ExtEmailInfo.EMAIL_TYPE,
    ExtEmailInfo.IS_PRIMARY,
    ExtEmailInfo.LAST_MODIFIED_DATE_TIME,
    ExtEmailInfo.EMAIL_TYPE_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<ExtEmailInfo> = new AllFields('*', ExtEmailInfo);
  /**
   * All key fields of the ExtEmailInfo entity.
   */
  export const _keyFields: Array<Selectable<ExtEmailInfo>> = [ExtEmailInfo.EMAIL_INFO_ID];
  /**
   * Mapping of all key field names to the respective static field property ExtEmailInfo.
   */
  export const _keys: { [keys: string]: Selectable<ExtEmailInfo> } = ExtEmailInfo._keyFields.reduce((acc: { [keys: string]: Selectable<ExtEmailInfo> }, field: Selectable<ExtEmailInfo>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
