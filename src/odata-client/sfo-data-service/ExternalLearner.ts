/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ExternalLearnerRequestBuilder } from './ExternalLearnerRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "ExternalLearner" of service "SFOData".
 */
export class ExternalLearner extends Entity implements ExternalLearnerType {
  /**
   * Technical entity name for ExternalLearner.
   */
  static _entityName = 'ExternalLearner';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for ExternalLearner.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Default Locale.
   * Maximum length: 32.
   * @nullable
   */
  defaultLocale?: string;
  /**
   * is_deleted.
   * @nullable
   */
  isDeleted?: boolean;
  /**
   * lastModifiedDateTime.
   * @nullable
   */
  lastModifiedDateTime?: Moment;
  /**
   * loginMethod.
   * Maximum length: 8.
   * @nullable
   */
  loginMethod?: string;
  /**
   * password.
   * Maximum length: 128.
   * @nullable
   */
  password?: string;
  /**
   * personGUID.
   * Maximum length: 32.
   * @nullable
   */
  personGuid?: string;
  /**
   * personId.
   * @nullable
   */
  personId?: BigNumber;
  /**
   * personIdExternal.
   * Maximum length: 100.
   * @nullable
   */
  personIdExternal?: string;
  /**
   * productName.
   * Maximum length: 32.
   * @nullable
   */
  productName?: string;
  /**
   * sourceChannel.
   * Maximum length: 90.
   * @nullable
   */
  sourceChannel?: string;
  /**
   * status.
   * Maximum length: 2.
   * @nullable
   */
  status?: string;
  /**
   * Time Zone.
   * Maximum length: 64.
   * @nullable
   */
  timeZone?: string;
  /**
   * userId.
   * Maximum length: 100.
   */
  userId!: string;
  /**
   * Username.
   * Maximum length: 100.
   * @nullable
   */
  userName?: string;
  /**
   * One-to-many navigation property to the [[ExternalLearnerEmailInfo]] entity.
   */
  emailInfo!: ExternalLearnerEmailInfo[];
  /**
   * One-to-many navigation property to the [[ExternalLearnerAddressInfo]] entity.
   */
  homeAddress!: ExternalLearnerAddressInfo[];
  /**
   * One-to-one navigation property to the [[ExternalLearnerPersonalInfo]] entity.
   */
  personalInfo!: ExternalLearnerPersonalInfo;
  /**
   * One-to-many navigation property to the [[ExternalLearnerPhoneInfo]] entity.
   */
  phoneInfo!: ExternalLearnerPhoneInfo[];
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  sourceChannelNav!: PicklistOption;

  /**
   * Returns an entity builder to construct instances `ExternalLearner`.
   * @returns A builder that constructs instances of entity type `ExternalLearner`.
   */
  static builder(): EntityBuilderType<ExternalLearner, ExternalLearnerTypeForceMandatory> {
    return Entity.entityBuilder(ExternalLearner);
  }

  /**
   * Returns a request builder to construct requests for operations on the `ExternalLearner` entity type.
   * @returns A `ExternalLearner` request builder.
   */
  static requestBuilder(): ExternalLearnerRequestBuilder {
    return new ExternalLearnerRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `ExternalLearner`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `ExternalLearner`.
   */
  static customField(fieldName: string): CustomField<ExternalLearner> {
    return Entity.customFieldSelector(fieldName, ExternalLearner);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { ExternalLearnerEmailInfo, ExternalLearnerEmailInfoType } from './ExternalLearnerEmailInfo';
import { ExternalLearnerAddressInfo, ExternalLearnerAddressInfoType } from './ExternalLearnerAddressInfo';
import { ExternalLearnerPersonalInfo, ExternalLearnerPersonalInfoType } from './ExternalLearnerPersonalInfo';
import { ExternalLearnerPhoneInfo, ExternalLearnerPhoneInfoType } from './ExternalLearnerPhoneInfo';
import { PicklistOption, PicklistOptionType } from './PicklistOption';

export interface ExternalLearnerType {
  defaultLocale?: string;
  isDeleted?: boolean;
  lastModifiedDateTime?: Moment;
  loginMethod?: string;
  password?: string;
  personGuid?: string;
  personId?: BigNumber;
  personIdExternal?: string;
  productName?: string;
  sourceChannel?: string;
  status?: string;
  timeZone?: string;
  userId: string;
  userName?: string;
  emailInfo: ExternalLearnerEmailInfoType[];
  homeAddress: ExternalLearnerAddressInfoType[];
  personalInfo: ExternalLearnerPersonalInfoType;
  phoneInfo: ExternalLearnerPhoneInfoType[];
  sourceChannelNav: PicklistOptionType;
}

export interface ExternalLearnerTypeForceMandatory {
  defaultLocale: string;
  isDeleted: boolean;
  lastModifiedDateTime: Moment;
  loginMethod: string;
  password: string;
  personGuid: string;
  personId: BigNumber;
  personIdExternal: string;
  productName: string;
  sourceChannel: string;
  status: string;
  timeZone: string;
  userId: string;
  userName: string;
  emailInfo: ExternalLearnerEmailInfoType[];
  homeAddress: ExternalLearnerAddressInfoType[];
  personalInfo: ExternalLearnerPersonalInfoType;
  phoneInfo: ExternalLearnerPhoneInfoType[];
  sourceChannelNav: PicklistOptionType;
}

export namespace ExternalLearner {
  /**
   * Static representation of the [[defaultLocale]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEFAULT_LOCALE: StringField<ExternalLearner> = new StringField('defaultLocale', ExternalLearner, 'Edm.String');
  /**
   * Static representation of the [[isDeleted]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_DELETED: BooleanField<ExternalLearner> = new BooleanField('is_deleted', ExternalLearner, 'Edm.Boolean');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<ExternalLearner> = new DateField('lastModifiedDateTime', ExternalLearner, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[loginMethod]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LOGIN_METHOD: StringField<ExternalLearner> = new StringField('loginMethod', ExternalLearner, 'Edm.String');
  /**
   * Static representation of the [[password]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PASSWORD: StringField<ExternalLearner> = new StringField('password', ExternalLearner, 'Edm.String');
  /**
   * Static representation of the [[personGuid]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PERSON_GUID: StringField<ExternalLearner> = new StringField('personGUID', ExternalLearner, 'Edm.String');
  /**
   * Static representation of the [[personId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PERSON_ID: BigNumberField<ExternalLearner> = new BigNumberField('personId', ExternalLearner, 'Edm.Decimal');
  /**
   * Static representation of the [[personIdExternal]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PERSON_ID_EXTERNAL: StringField<ExternalLearner> = new StringField('personIdExternal', ExternalLearner, 'Edm.String');
  /**
   * Static representation of the [[productName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRODUCT_NAME: StringField<ExternalLearner> = new StringField('productName', ExternalLearner, 'Edm.String');
  /**
   * Static representation of the [[sourceChannel]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SOURCE_CHANNEL: StringField<ExternalLearner> = new StringField('sourceChannel', ExternalLearner, 'Edm.String');
  /**
   * Static representation of the [[status]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS: StringField<ExternalLearner> = new StringField('status', ExternalLearner, 'Edm.String');
  /**
   * Static representation of the [[timeZone]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TIME_ZONE: StringField<ExternalLearner> = new StringField('timeZone', ExternalLearner, 'Edm.String');
  /**
   * Static representation of the [[userId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_ID: StringField<ExternalLearner> = new StringField('userId', ExternalLearner, 'Edm.String');
  /**
   * Static representation of the [[userName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_NAME: StringField<ExternalLearner> = new StringField('userName', ExternalLearner, 'Edm.String');
  /**
   * Static representation of the one-to-many navigation property [[emailInfo]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMAIL_INFO: Link<ExternalLearner, ExternalLearnerEmailInfo> = new Link('emailInfo', ExternalLearner, ExternalLearnerEmailInfo);
  /**
   * Static representation of the one-to-many navigation property [[homeAddress]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HOME_ADDRESS: Link<ExternalLearner, ExternalLearnerAddressInfo> = new Link('homeAddress', ExternalLearner, ExternalLearnerAddressInfo);
  /**
   * Static representation of the one-to-one navigation property [[personalInfo]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PERSONAL_INFO: OneToOneLink<ExternalLearner, ExternalLearnerPersonalInfo> = new OneToOneLink('personalInfo', ExternalLearner, ExternalLearnerPersonalInfo);
  /**
   * Static representation of the one-to-many navigation property [[phoneInfo]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PHONE_INFO: Link<ExternalLearner, ExternalLearnerPhoneInfo> = new Link('phoneInfo', ExternalLearner, ExternalLearnerPhoneInfo);
  /**
   * Static representation of the one-to-one navigation property [[sourceChannelNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SOURCE_CHANNEL_NAV: OneToOneLink<ExternalLearner, PicklistOption> = new OneToOneLink('sourceChannelNav', ExternalLearner, PicklistOption);
  /**
   * All fields of the ExternalLearner entity.
   */
  export const _allFields: Array<StringField<ExternalLearner> | BooleanField<ExternalLearner> | DateField<ExternalLearner> | BigNumberField<ExternalLearner> | Link<ExternalLearner, ExternalLearnerEmailInfo> | Link<ExternalLearner, ExternalLearnerAddressInfo> | OneToOneLink<ExternalLearner, ExternalLearnerPersonalInfo> | Link<ExternalLearner, ExternalLearnerPhoneInfo> | OneToOneLink<ExternalLearner, PicklistOption>> = [
    ExternalLearner.DEFAULT_LOCALE,
    ExternalLearner.IS_DELETED,
    ExternalLearner.LAST_MODIFIED_DATE_TIME,
    ExternalLearner.LOGIN_METHOD,
    ExternalLearner.PASSWORD,
    ExternalLearner.PERSON_GUID,
    ExternalLearner.PERSON_ID,
    ExternalLearner.PERSON_ID_EXTERNAL,
    ExternalLearner.PRODUCT_NAME,
    ExternalLearner.SOURCE_CHANNEL,
    ExternalLearner.STATUS,
    ExternalLearner.TIME_ZONE,
    ExternalLearner.USER_ID,
    ExternalLearner.USER_NAME,
    ExternalLearner.EMAIL_INFO,
    ExternalLearner.HOME_ADDRESS,
    ExternalLearner.PERSONAL_INFO,
    ExternalLearner.PHONE_INFO,
    ExternalLearner.SOURCE_CHANNEL_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<ExternalLearner> = new AllFields('*', ExternalLearner);
  /**
   * All key fields of the ExternalLearner entity.
   */
  export const _keyFields: Array<Selectable<ExternalLearner>> = [ExternalLearner.USER_ID];
  /**
   * Mapping of all key field names to the respective static field property ExternalLearner.
   */
  export const _keys: { [keys: string]: Selectable<ExternalLearner> } = ExternalLearner._keyFields.reduce((acc: { [keys: string]: Selectable<ExternalLearner> }, field: Selectable<ExternalLearner>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
