/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { UserAccountRequestBuilder } from './UserAccountRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, Link, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "UserAccount" of service "SFOData".
 */
export class UserAccount extends Entity implements UserAccountType {
  /**
   * Technical entity name for UserAccount.
   */
  static _entityName = 'UserAccount';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for UserAccount.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * ???USER_MANAGEMENT_COPROPERTY_LABEL_ACCOUNT_ID???.
   */
  accountId!: BigNumber;
  /**
   * Account Status.
   */
  accountStatus!: string;
  /**
   * Created Date Time.
   * @nullable
   */
  createdDateTime?: Moment;
  /**
   * Default Locale.
   * Maximum length: 32.
   * @nullable
   */
  defaultLocale?: string;
  /**
   * Last Inactivation Date Time.
   * @nullable
   */
  lastInactivationDateTime?: Moment;
  /**
   * Last Failed Login Date Time.
   * @nullable
   */
  lastLoginFailedDateTime?: Moment;
  /**
   * Last Modified Date Time.
   * @nullable
   */
  lastModifiedDateTime?: Moment;
  /**
   * Person ID External.
   */
  personIdExternal!: string;
  /**
   * ???USER_MANAGEMENT_COPROPERTY_LABEL_SAP_GLOBAL_USER_ID???.
   * @nullable
   */
  sapGlobalUserId?: string;
  /**
   * Username.
   * Maximum length: 100.
   */
  username!: string;
  /**
   * One-to-many navigation property to the [[User]] entity.
   */
  user!: User[];

  /**
   * Returns an entity builder to construct instances `UserAccount`.
   * @returns A builder that constructs instances of entity type `UserAccount`.
   */
  static builder(): EntityBuilderType<UserAccount, UserAccountTypeForceMandatory> {
    return Entity.entityBuilder(UserAccount);
  }

  /**
   * Returns a request builder to construct requests for operations on the `UserAccount` entity type.
   * @returns A `UserAccount` request builder.
   */
  static requestBuilder(): UserAccountRequestBuilder {
    return new UserAccountRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `UserAccount`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `UserAccount`.
   */
  static customField(fieldName: string): CustomField<UserAccount> {
    return Entity.customFieldSelector(fieldName, UserAccount);
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

export interface UserAccountType {
  accountId: BigNumber;
  accountStatus: string;
  createdDateTime?: Moment;
  defaultLocale?: string;
  lastInactivationDateTime?: Moment;
  lastLoginFailedDateTime?: Moment;
  lastModifiedDateTime?: Moment;
  personIdExternal: string;
  sapGlobalUserId?: string;
  username: string;
  user: UserType[];
}

export interface UserAccountTypeForceMandatory {
  accountId: BigNumber;
  accountStatus: string;
  createdDateTime: Moment;
  defaultLocale: string;
  lastInactivationDateTime: Moment;
  lastLoginFailedDateTime: Moment;
  lastModifiedDateTime: Moment;
  personIdExternal: string;
  sapGlobalUserId: string;
  username: string;
  user: UserType[];
}

export namespace UserAccount {
  /**
   * Static representation of the [[accountId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACCOUNT_ID: BigNumberField<UserAccount> = new BigNumberField('accountId', UserAccount, 'Edm.Int64');
  /**
   * Static representation of the [[accountStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACCOUNT_STATUS: StringField<UserAccount> = new StringField('accountStatus', UserAccount, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<UserAccount> = new DateField('createdDateTime', UserAccount, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[defaultLocale]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEFAULT_LOCALE: StringField<UserAccount> = new StringField('defaultLocale', UserAccount, 'Edm.String');
  /**
   * Static representation of the [[lastInactivationDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_INACTIVATION_DATE_TIME: DateField<UserAccount> = new DateField('lastInactivationDateTime', UserAccount, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[lastLoginFailedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_LOGIN_FAILED_DATE_TIME: DateField<UserAccount> = new DateField('lastLoginFailedDateTime', UserAccount, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<UserAccount> = new DateField('lastModifiedDateTime', UserAccount, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[personIdExternal]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PERSON_ID_EXTERNAL: StringField<UserAccount> = new StringField('personIdExternal', UserAccount, 'Edm.String');
  /**
   * Static representation of the [[sapGlobalUserId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SAP_GLOBAL_USER_ID: StringField<UserAccount> = new StringField('sapGlobalUserId', UserAccount, 'Edm.String');
  /**
   * Static representation of the [[username]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USERNAME: StringField<UserAccount> = new StringField('username', UserAccount, 'Edm.String');
  /**
   * Static representation of the one-to-many navigation property [[user]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER: Link<UserAccount, User> = new Link('user', UserAccount, User);
  /**
   * All fields of the UserAccount entity.
   */
  export const _allFields: Array<BigNumberField<UserAccount> | StringField<UserAccount> | DateField<UserAccount> | Link<UserAccount, User>> = [
    UserAccount.ACCOUNT_ID,
    UserAccount.ACCOUNT_STATUS,
    UserAccount.CREATED_DATE_TIME,
    UserAccount.DEFAULT_LOCALE,
    UserAccount.LAST_INACTIVATION_DATE_TIME,
    UserAccount.LAST_LOGIN_FAILED_DATE_TIME,
    UserAccount.LAST_MODIFIED_DATE_TIME,
    UserAccount.PERSON_ID_EXTERNAL,
    UserAccount.SAP_GLOBAL_USER_ID,
    UserAccount.USERNAME,
    UserAccount.USER
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<UserAccount> = new AllFields('*', UserAccount);
  /**
   * All key fields of the UserAccount entity.
   */
  export const _keyFields: Array<Selectable<UserAccount>> = [UserAccount.USERNAME];
  /**
   * Mapping of all key field names to the respective static field property UserAccount.
   */
  export const _keys: { [keys: string]: Selectable<UserAccount> } = UserAccount._keyFields.reduce((acc: { [keys: string]: Selectable<UserAccount> }, field: Selectable<UserAccount>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
