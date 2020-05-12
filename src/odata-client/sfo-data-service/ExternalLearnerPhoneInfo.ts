/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ExternalLearnerPhoneInfoRequestBuilder } from './ExternalLearnerPhoneInfoRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "ExternalLearnerPhoneInfo" of service "SFOData".
 */
export class ExternalLearnerPhoneInfo extends Entity implements ExternalLearnerPhoneInfoType {
  /**
   * Technical entity name for ExternalLearnerPhoneInfo.
   */
  static _entityName = 'ExternalLearnerPhoneInfo';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for ExternalLearnerPhoneInfo.
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
   * @nullable
   */
  isPrimary?: boolean;
  /**
   * is_deleted.
   * @nullable
   */
  isDeleted?: boolean;
  /**
   * itemId.
   */
  itemId!: BigNumber;
  /**
   * lastModifiedDateTime.
   * @nullable
   */
  lastModifiedDateTime?: Moment;
  /**
   * Phone Number.
   * Maximum length: 100.
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
   * Returns an entity builder to construct instances `ExternalLearnerPhoneInfo`.
   * @returns A builder that constructs instances of entity type `ExternalLearnerPhoneInfo`.
   */
  static builder(): EntityBuilderType<ExternalLearnerPhoneInfo, ExternalLearnerPhoneInfoTypeForceMandatory> {
    return Entity.entityBuilder(ExternalLearnerPhoneInfo);
  }

  /**
   * Returns a request builder to construct requests for operations on the `ExternalLearnerPhoneInfo` entity type.
   * @returns A `ExternalLearnerPhoneInfo` request builder.
   */
  static requestBuilder(): ExternalLearnerPhoneInfoRequestBuilder {
    return new ExternalLearnerPhoneInfoRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `ExternalLearnerPhoneInfo`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `ExternalLearnerPhoneInfo`.
   */
  static customField(fieldName: string): CustomField<ExternalLearnerPhoneInfo> {
    return Entity.customFieldSelector(fieldName, ExternalLearnerPhoneInfo);
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

export interface ExternalLearnerPhoneInfoType {
  areaCode?: string;
  countryCode?: string;
  extension?: string;
  isPrimary?: boolean;
  isDeleted?: boolean;
  itemId: BigNumber;
  lastModifiedDateTime?: Moment;
  phoneNumber?: string;
  phoneType?: string;
  phoneTypeNav: PicklistOptionType;
}

export interface ExternalLearnerPhoneInfoTypeForceMandatory {
  areaCode: string;
  countryCode: string;
  extension: string;
  isPrimary: boolean;
  isDeleted: boolean;
  itemId: BigNumber;
  lastModifiedDateTime: Moment;
  phoneNumber: string;
  phoneType: string;
  phoneTypeNav: PicklistOptionType;
}

export namespace ExternalLearnerPhoneInfo {
  /**
   * Static representation of the [[areaCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const AREA_CODE: StringField<ExternalLearnerPhoneInfo> = new StringField('areaCode', ExternalLearnerPhoneInfo, 'Edm.String');
  /**
   * Static representation of the [[countryCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY_CODE: StringField<ExternalLearnerPhoneInfo> = new StringField('countryCode', ExternalLearnerPhoneInfo, 'Edm.String');
  /**
   * Static representation of the [[extension]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTENSION: StringField<ExternalLearnerPhoneInfo> = new StringField('extension', ExternalLearnerPhoneInfo, 'Edm.String');
  /**
   * Static representation of the [[isPrimary]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_PRIMARY: BooleanField<ExternalLearnerPhoneInfo> = new BooleanField('isPrimary', ExternalLearnerPhoneInfo, 'Edm.Boolean');
  /**
   * Static representation of the [[isDeleted]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_DELETED: BooleanField<ExternalLearnerPhoneInfo> = new BooleanField('is_deleted', ExternalLearnerPhoneInfo, 'Edm.Boolean');
  /**
   * Static representation of the [[itemId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ITEM_ID: BigNumberField<ExternalLearnerPhoneInfo> = new BigNumberField('itemId', ExternalLearnerPhoneInfo, 'Edm.Decimal');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<ExternalLearnerPhoneInfo> = new DateField('lastModifiedDateTime', ExternalLearnerPhoneInfo, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[phoneNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PHONE_NUMBER: StringField<ExternalLearnerPhoneInfo> = new StringField('phoneNumber', ExternalLearnerPhoneInfo, 'Edm.String');
  /**
   * Static representation of the [[phoneType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PHONE_TYPE: StringField<ExternalLearnerPhoneInfo> = new StringField('phoneType', ExternalLearnerPhoneInfo, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[phoneTypeNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PHONE_TYPE_NAV: OneToOneLink<ExternalLearnerPhoneInfo, PicklistOption> = new OneToOneLink('phoneTypeNav', ExternalLearnerPhoneInfo, PicklistOption);
  /**
   * All fields of the ExternalLearnerPhoneInfo entity.
   */
  export const _allFields: Array<StringField<ExternalLearnerPhoneInfo> | BooleanField<ExternalLearnerPhoneInfo> | BigNumberField<ExternalLearnerPhoneInfo> | DateField<ExternalLearnerPhoneInfo> | OneToOneLink<ExternalLearnerPhoneInfo, PicklistOption>> = [
    ExternalLearnerPhoneInfo.AREA_CODE,
    ExternalLearnerPhoneInfo.COUNTRY_CODE,
    ExternalLearnerPhoneInfo.EXTENSION,
    ExternalLearnerPhoneInfo.IS_PRIMARY,
    ExternalLearnerPhoneInfo.IS_DELETED,
    ExternalLearnerPhoneInfo.ITEM_ID,
    ExternalLearnerPhoneInfo.LAST_MODIFIED_DATE_TIME,
    ExternalLearnerPhoneInfo.PHONE_NUMBER,
    ExternalLearnerPhoneInfo.PHONE_TYPE,
    ExternalLearnerPhoneInfo.PHONE_TYPE_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<ExternalLearnerPhoneInfo> = new AllFields('*', ExternalLearnerPhoneInfo);
  /**
   * All key fields of the ExternalLearnerPhoneInfo entity.
   */
  export const _keyFields: Array<Selectable<ExternalLearnerPhoneInfo>> = [ExternalLearnerPhoneInfo.ITEM_ID];
  /**
   * Mapping of all key field names to the respective static field property ExternalLearnerPhoneInfo.
   */
  export const _keys: { [keys: string]: Selectable<ExternalLearnerPhoneInfo> } = ExternalLearnerPhoneInfo._keyFields.reduce((acc: { [keys: string]: Selectable<ExternalLearnerPhoneInfo> }, field: Selectable<ExternalLearnerPhoneInfo>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
