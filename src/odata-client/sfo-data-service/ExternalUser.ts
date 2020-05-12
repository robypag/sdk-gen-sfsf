/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ExternalUserRequestBuilder } from './ExternalUserRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "ExternalUser" of service "SFOData".
 */
export class ExternalUser extends Entity implements ExternalUserType {
  /**
   * Technical entity name for ExternalUser.
   */
  static _entityName = 'ExternalUser';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for ExternalUser.
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
   * One-to-many navigation property to the [[ExtAddressInfo]] entity.
   */
  extAddressInfo!: ExtAddressInfo[];
  /**
   * One-to-many navigation property to the [[ExtEmailInfo]] entity.
   */
  extEmailInfo!: ExtEmailInfo[];
  /**
   * One-to-one navigation property to the [[ExtPersonalInfo]] entity.
   */
  extPersonalInfo!: ExtPersonalInfo;
  /**
   * One-to-many navigation property to the [[ExtPhoneInfo]] entity.
   */
  extPhoneInfo!: ExtPhoneInfo[];

  /**
   * Returns an entity builder to construct instances `ExternalUser`.
   * @returns A builder that constructs instances of entity type `ExternalUser`.
   */
  static builder(): EntityBuilderType<ExternalUser, ExternalUserTypeForceMandatory> {
    return Entity.entityBuilder(ExternalUser);
  }

  /**
   * Returns a request builder to construct requests for operations on the `ExternalUser` entity type.
   * @returns A `ExternalUser` request builder.
   */
  static requestBuilder(): ExternalUserRequestBuilder {
    return new ExternalUserRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `ExternalUser`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `ExternalUser`.
   */
  static customField(fieldName: string): CustomField<ExternalUser> {
    return Entity.customFieldSelector(fieldName, ExternalUser);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { ExtAddressInfo, ExtAddressInfoType } from './ExtAddressInfo';
import { ExtEmailInfo, ExtEmailInfoType } from './ExtEmailInfo';
import { ExtPersonalInfo, ExtPersonalInfoType } from './ExtPersonalInfo';
import { ExtPhoneInfo, ExtPhoneInfoType } from './ExtPhoneInfo';

export interface ExternalUserType {
  defaultLocale?: string;
  isDeleted?: boolean;
  lastModifiedDateTime?: Moment;
  loginMethod?: string;
  password?: string;
  personGuid?: string;
  personId?: BigNumber;
  personIdExternal?: string;
  productName?: string;
  status?: string;
  timeZone?: string;
  userId: string;
  userName?: string;
  extAddressInfo: ExtAddressInfoType[];
  extEmailInfo: ExtEmailInfoType[];
  extPersonalInfo: ExtPersonalInfoType;
  extPhoneInfo: ExtPhoneInfoType[];
}

export interface ExternalUserTypeForceMandatory {
  defaultLocale: string;
  isDeleted: boolean;
  lastModifiedDateTime: Moment;
  loginMethod: string;
  password: string;
  personGuid: string;
  personId: BigNumber;
  personIdExternal: string;
  productName: string;
  status: string;
  timeZone: string;
  userId: string;
  userName: string;
  extAddressInfo: ExtAddressInfoType[];
  extEmailInfo: ExtEmailInfoType[];
  extPersonalInfo: ExtPersonalInfoType;
  extPhoneInfo: ExtPhoneInfoType[];
}

export namespace ExternalUser {
  /**
   * Static representation of the [[defaultLocale]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEFAULT_LOCALE: StringField<ExternalUser> = new StringField('defaultLocale', ExternalUser, 'Edm.String');
  /**
   * Static representation of the [[isDeleted]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_DELETED: BooleanField<ExternalUser> = new BooleanField('is_deleted', ExternalUser, 'Edm.Boolean');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<ExternalUser> = new DateField('lastModifiedDateTime', ExternalUser, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[loginMethod]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LOGIN_METHOD: StringField<ExternalUser> = new StringField('loginMethod', ExternalUser, 'Edm.String');
  /**
   * Static representation of the [[password]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PASSWORD: StringField<ExternalUser> = new StringField('password', ExternalUser, 'Edm.String');
  /**
   * Static representation of the [[personGuid]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PERSON_GUID: StringField<ExternalUser> = new StringField('personGUID', ExternalUser, 'Edm.String');
  /**
   * Static representation of the [[personId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PERSON_ID: BigNumberField<ExternalUser> = new BigNumberField('personId', ExternalUser, 'Edm.Decimal');
  /**
   * Static representation of the [[personIdExternal]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PERSON_ID_EXTERNAL: StringField<ExternalUser> = new StringField('personIdExternal', ExternalUser, 'Edm.String');
  /**
   * Static representation of the [[productName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRODUCT_NAME: StringField<ExternalUser> = new StringField('productName', ExternalUser, 'Edm.String');
  /**
   * Static representation of the [[status]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS: StringField<ExternalUser> = new StringField('status', ExternalUser, 'Edm.String');
  /**
   * Static representation of the [[timeZone]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TIME_ZONE: StringField<ExternalUser> = new StringField('timeZone', ExternalUser, 'Edm.String');
  /**
   * Static representation of the [[userId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_ID: StringField<ExternalUser> = new StringField('userId', ExternalUser, 'Edm.String');
  /**
   * Static representation of the [[userName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_NAME: StringField<ExternalUser> = new StringField('userName', ExternalUser, 'Edm.String');
  /**
   * Static representation of the one-to-many navigation property [[extAddressInfo]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXT_ADDRESS_INFO: Link<ExternalUser, ExtAddressInfo> = new Link('extAddressInfo', ExternalUser, ExtAddressInfo);
  /**
   * Static representation of the one-to-many navigation property [[extEmailInfo]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXT_EMAIL_INFO: Link<ExternalUser, ExtEmailInfo> = new Link('extEmailInfo', ExternalUser, ExtEmailInfo);
  /**
   * Static representation of the one-to-one navigation property [[extPersonalInfo]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXT_PERSONAL_INFO: OneToOneLink<ExternalUser, ExtPersonalInfo> = new OneToOneLink('extPersonalInfo', ExternalUser, ExtPersonalInfo);
  /**
   * Static representation of the one-to-many navigation property [[extPhoneInfo]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXT_PHONE_INFO: Link<ExternalUser, ExtPhoneInfo> = new Link('extPhoneInfo', ExternalUser, ExtPhoneInfo);
  /**
   * All fields of the ExternalUser entity.
   */
  export const _allFields: Array<StringField<ExternalUser> | BooleanField<ExternalUser> | DateField<ExternalUser> | BigNumberField<ExternalUser> | Link<ExternalUser, ExtAddressInfo> | Link<ExternalUser, ExtEmailInfo> | OneToOneLink<ExternalUser, ExtPersonalInfo> | Link<ExternalUser, ExtPhoneInfo>> = [
    ExternalUser.DEFAULT_LOCALE,
    ExternalUser.IS_DELETED,
    ExternalUser.LAST_MODIFIED_DATE_TIME,
    ExternalUser.LOGIN_METHOD,
    ExternalUser.PASSWORD,
    ExternalUser.PERSON_GUID,
    ExternalUser.PERSON_ID,
    ExternalUser.PERSON_ID_EXTERNAL,
    ExternalUser.PRODUCT_NAME,
    ExternalUser.STATUS,
    ExternalUser.TIME_ZONE,
    ExternalUser.USER_ID,
    ExternalUser.USER_NAME,
    ExternalUser.EXT_ADDRESS_INFO,
    ExternalUser.EXT_EMAIL_INFO,
    ExternalUser.EXT_PERSONAL_INFO,
    ExternalUser.EXT_PHONE_INFO
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<ExternalUser> = new AllFields('*', ExternalUser);
  /**
   * All key fields of the ExternalUser entity.
   */
  export const _keyFields: Array<Selectable<ExternalUser>> = [ExternalUser.USER_ID];
  /**
   * Mapping of all key field names to the respective static field property ExternalUser.
   */
  export const _keys: { [keys: string]: Selectable<ExternalUser> } = ExternalUser._keyFields.reduce((acc: { [keys: string]: Selectable<ExternalUser> }, field: Selectable<ExternalUser>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
