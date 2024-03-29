/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TimeAccountRequestBuilder } from './TimeAccountRequestBuilder';
import { Moment } from 'moment';
import { AllFields, BooleanField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "TimeAccount" of service "SFOData".
 */
export class TimeAccount extends Entity implements TimeAccountType {
  /**
   * Technical entity name for TimeAccount.
   */
  static _entityName = 'TimeAccount';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for TimeAccount.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Closed.
   * @nullable
   */
  accountClosed?: boolean;
  /**
   * Time Account Type.
   * Maximum length: 128.
   * @nullable
   */
  accountType?: string;
  /**
   * Booking Possible Until.
   * @nullable
   */
  bookingEndDate?: Moment;
  /**
   * Booking Possible From.
   * @nullable
   */
  bookingStartDate?: Moment;
  /**
   * Created By.
   * Maximum length: 255.
   * @nullable
   */
  createdBy?: string;
  /**
   * Created On.
   * @nullable
   */
  createdDateTime?: Moment;
  /**
   * Account Valid Until.
   * @nullable
   */
  endDate?: Moment;
  /**
   * External Code.
   * Maximum length: 128.
   */
  externalCode!: string;
  /**
   * Last Modified By.
   * Maximum length: 255.
   * @nullable
   */
  lastModifiedBy?: string;
  /**
   * Last Modified On.
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
   * Account Valid From.
   * @nullable
   */
  startDate?: Moment;
  /**
   * User.
   * Maximum length: 100.
   * @nullable
   */
  userId?: string;
  /**
   * One-to-one navigation property to the [[TimeAccountType]] entity.
   */
  accountTypeNav!: TimeAccountType;
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
   * One-to-many navigation property to the [[TimeAccountDetail]] entity.
   */
  timeAccountDetails!: TimeAccountDetail[];
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  userIdNav!: User;
  /**
   * One-to-many navigation property to the [[WfRequest]] entity.
   */
  wfRequestNav!: WfRequest[];

  /**
   * Returns an entity builder to construct instances `TimeAccount`.
   * @returns A builder that constructs instances of entity type `TimeAccount`.
   */
  static builder(): EntityBuilderType<TimeAccount, TimeAccountTypeForceMandatory> {
    return Entity.entityBuilder(TimeAccount);
  }

  /**
   * Returns a request builder to construct requests for operations on the `TimeAccount` entity type.
   * @returns A `TimeAccount` request builder.
   */
  static requestBuilder(): TimeAccountRequestBuilder {
    return new TimeAccountRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `TimeAccount`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `TimeAccount`.
   */
  static customField(fieldName: string): CustomField<TimeAccount> {
    return Entity.customFieldSelector(fieldName, TimeAccount);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { TimeAccountType, TimeAccountTypeType } from './TimeAccountType';
import { User, UserType } from './User';
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';
import { TimeAccountDetail, TimeAccountDetailType } from './TimeAccountDetail';
import { WfRequest, WfRequestType } from './WfRequest';

export interface TimeAccountType {
  accountClosed?: boolean;
  accountType?: string;
  bookingEndDate?: Moment;
  bookingStartDate?: Moment;
  createdBy?: string;
  createdDateTime?: Moment;
  endDate?: Moment;
  externalCode: string;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  mdfSystemRecordStatus?: string;
  startDate?: Moment;
  userId?: string;
  accountTypeNav: TimeAccountTypeType;
  createdByNav: UserType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  timeAccountDetails: TimeAccountDetailType[];
  userIdNav: UserType;
  wfRequestNav: WfRequestType[];
}

export interface TimeAccountTypeForceMandatory {
  accountClosed: boolean;
  accountType: string;
  bookingEndDate: Moment;
  bookingStartDate: Moment;
  createdBy: string;
  createdDateTime: Moment;
  endDate: Moment;
  externalCode: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  mdfSystemRecordStatus: string;
  startDate: Moment;
  userId: string;
  accountTypeNav: TimeAccountTypeType;
  createdByNav: UserType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  timeAccountDetails: TimeAccountDetailType[];
  userIdNav: UserType;
  wfRequestNav: WfRequestType[];
}

export namespace TimeAccount {
  /**
   * Static representation of the [[accountClosed]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACCOUNT_CLOSED: BooleanField<TimeAccount> = new BooleanField('accountClosed', TimeAccount, 'Edm.Boolean');
  /**
   * Static representation of the [[accountType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACCOUNT_TYPE: StringField<TimeAccount> = new StringField('accountType', TimeAccount, 'Edm.String');
  /**
   * Static representation of the [[bookingEndDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BOOKING_END_DATE: DateField<TimeAccount> = new DateField('bookingEndDate', TimeAccount, 'Edm.DateTime');
  /**
   * Static representation of the [[bookingStartDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BOOKING_START_DATE: DateField<TimeAccount> = new DateField('bookingStartDate', TimeAccount, 'Edm.DateTime');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<TimeAccount> = new StringField('createdBy', TimeAccount, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<TimeAccount> = new DateField('createdDateTime', TimeAccount, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[endDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const END_DATE: DateField<TimeAccount> = new DateField('endDate', TimeAccount, 'Edm.DateTime');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: StringField<TimeAccount> = new StringField('externalCode', TimeAccount, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<TimeAccount> = new StringField('lastModifiedBy', TimeAccount, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<TimeAccount> = new DateField('lastModifiedDateTime', TimeAccount, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<TimeAccount> = new StringField('mdfSystemRecordStatus', TimeAccount, 'Edm.String');
  /**
   * Static representation of the [[startDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const START_DATE: DateField<TimeAccount> = new DateField('startDate', TimeAccount, 'Edm.DateTime');
  /**
   * Static representation of the [[userId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_ID: StringField<TimeAccount> = new StringField('userId', TimeAccount, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[accountTypeNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACCOUNT_TYPE_NAV: OneToOneLink<TimeAccount, TimeAccountType> = new OneToOneLink('accountTypeNav', TimeAccount, TimeAccountType);
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<TimeAccount, User> = new OneToOneLink('createdByNav', TimeAccount, User);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<TimeAccount, User> = new OneToOneLink('lastModifiedByNav', TimeAccount, User);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<TimeAccount, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', TimeAccount, MdfEnumValue);
  /**
   * Static representation of the one-to-many navigation property [[timeAccountDetails]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TIME_ACCOUNT_DETAILS: Link<TimeAccount, TimeAccountDetail> = new Link('timeAccountDetails', TimeAccount, TimeAccountDetail);
  /**
   * Static representation of the one-to-one navigation property [[userIdNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_ID_NAV: OneToOneLink<TimeAccount, User> = new OneToOneLink('userIdNav', TimeAccount, User);
  /**
   * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WF_REQUEST_NAV: Link<TimeAccount, WfRequest> = new Link('wfRequestNav', TimeAccount, WfRequest);
  /**
   * All fields of the TimeAccount entity.
   */
  export const _allFields: Array<BooleanField<TimeAccount> | StringField<TimeAccount> | DateField<TimeAccount> | OneToOneLink<TimeAccount, TimeAccountType> | OneToOneLink<TimeAccount, User> | OneToOneLink<TimeAccount, MdfEnumValue> | Link<TimeAccount, TimeAccountDetail> | Link<TimeAccount, WfRequest>> = [
    TimeAccount.ACCOUNT_CLOSED,
    TimeAccount.ACCOUNT_TYPE,
    TimeAccount.BOOKING_END_DATE,
    TimeAccount.BOOKING_START_DATE,
    TimeAccount.CREATED_BY,
    TimeAccount.CREATED_DATE_TIME,
    TimeAccount.END_DATE,
    TimeAccount.EXTERNAL_CODE,
    TimeAccount.LAST_MODIFIED_BY,
    TimeAccount.LAST_MODIFIED_DATE_TIME,
    TimeAccount.MDF_SYSTEM_RECORD_STATUS,
    TimeAccount.START_DATE,
    TimeAccount.USER_ID,
    TimeAccount.ACCOUNT_TYPE_NAV,
    TimeAccount.CREATED_BY_NAV,
    TimeAccount.LAST_MODIFIED_BY_NAV,
    TimeAccount.MDF_SYSTEM_RECORD_STATUS_NAV,
    TimeAccount.TIME_ACCOUNT_DETAILS,
    TimeAccount.USER_ID_NAV,
    TimeAccount.WF_REQUEST_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<TimeAccount> = new AllFields('*', TimeAccount);
  /**
   * All key fields of the TimeAccount entity.
   */
  export const _keyFields: Array<Selectable<TimeAccount>> = [TimeAccount.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property TimeAccount.
   */
  export const _keys: { [keys: string]: Selectable<TimeAccount> } = TimeAccount._keyFields.reduce((acc: { [keys: string]: Selectable<TimeAccount> }, field: Selectable<TimeAccount>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
