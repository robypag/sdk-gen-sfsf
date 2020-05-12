/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TimeManagementAlertMessageRequestBuilder } from './TimeManagementAlertMessageRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "TimeManagementAlertMessage" of service "SFOData".
 */
export class TimeManagementAlertMessage extends Entity implements TimeManagementAlertMessageType {
  /**
   * Technical entity name for TimeManagementAlertMessage.
   */
  static _entityName = 'TimeManagementAlertMessage';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for TimeManagementAlertMessage.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Time Management Alert_External Code.
   * Maximum length: 128.
   */
  timeManagementAlertExternalCode!: string;
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
   * Date.
   * @nullable
   */
  date?: Moment;
  /**
   * Default Message Text.
   * Maximum length: 255.
   * @nullable
   */
  defaultMessageText?: string;
  /**
   * Employee Time.
   * Maximum length: 128.
   * @nullable
   */
  employeeTime?: string;
  /**
   * Employee Time Sheet.
   * Maximum length: 128.
   * @nullable
   */
  employeeTimeSheet?: string;
  /**
   * External Code.
   * Maximum length: 128.
   */
  externalCode!: string;
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
   * Message Key.
   * Maximum length: 255.
   * @nullable
   */
  messageKey?: string;
  /**
   * Message Parameter 1.
   * Maximum length: 255.
   * @nullable
   */
  messageParameter1?: string;
  /**
   * Message Parameter 2.
   * Maximum length: 255.
   * @nullable
   */
  messageParameter2?: string;
  /**
   * Message Parameter 3.
   * Maximum length: 255.
   * @nullable
   */
  messageParameter3?: string;
  /**
   * Message Parameter 4.
   * Maximum length: 255.
   * @nullable
   */
  messageParameter4?: string;
  /**
   * Time Account.
   * Maximum length: 128.
   * @nullable
   */
  timeAccount?: string;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  createdByNav!: User;
  /**
   * One-to-one navigation property to the [[EmployeeTime]] entity.
   */
  employeeTimeNav!: EmployeeTime;
  /**
   * One-to-one navigation property to the [[EmployeeTimeSheet]] entity.
   */
  employeeTimeSheetNav!: EmployeeTimeSheet;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  lastModifiedByNav!: User;
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  mdfSystemRecordStatusNav!: MdfEnumValue;
  /**
   * One-to-one navigation property to the [[TimeAccount]] entity.
   */
  timeAccountNav!: TimeAccount;

  /**
   * Returns an entity builder to construct instances `TimeManagementAlertMessage`.
   * @returns A builder that constructs instances of entity type `TimeManagementAlertMessage`.
   */
  static builder(): EntityBuilderType<TimeManagementAlertMessage, TimeManagementAlertMessageTypeForceMandatory> {
    return Entity.entityBuilder(TimeManagementAlertMessage);
  }

  /**
   * Returns a request builder to construct requests for operations on the `TimeManagementAlertMessage` entity type.
   * @returns A `TimeManagementAlertMessage` request builder.
   */
  static requestBuilder(): TimeManagementAlertMessageRequestBuilder {
    return new TimeManagementAlertMessageRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `TimeManagementAlertMessage`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `TimeManagementAlertMessage`.
   */
  static customField(fieldName: string): CustomField<TimeManagementAlertMessage> {
    return Entity.customFieldSelector(fieldName, TimeManagementAlertMessage);
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
import { EmployeeTime, EmployeeTimeType } from './EmployeeTime';
import { EmployeeTimeSheet, EmployeeTimeSheetType } from './EmployeeTimeSheet';
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';
import { TimeAccount, TimeAccountType } from './TimeAccount';

export interface TimeManagementAlertMessageType {
  timeManagementAlertExternalCode: string;
  createdBy?: string;
  createdDateTime?: Moment;
  date?: Moment;
  defaultMessageText?: string;
  employeeTime?: string;
  employeeTimeSheet?: string;
  externalCode: string;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  mdfSystemRecordStatus?: string;
  messageKey?: string;
  messageParameter1?: string;
  messageParameter2?: string;
  messageParameter3?: string;
  messageParameter4?: string;
  timeAccount?: string;
  createdByNav: UserType;
  employeeTimeNav: EmployeeTimeType;
  employeeTimeSheetNav: EmployeeTimeSheetType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  timeAccountNav: TimeAccountType;
}

export interface TimeManagementAlertMessageTypeForceMandatory {
  timeManagementAlertExternalCode: string;
  createdBy: string;
  createdDateTime: Moment;
  date: Moment;
  defaultMessageText: string;
  employeeTime: string;
  employeeTimeSheet: string;
  externalCode: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  mdfSystemRecordStatus: string;
  messageKey: string;
  messageParameter1: string;
  messageParameter2: string;
  messageParameter3: string;
  messageParameter4: string;
  timeAccount: string;
  createdByNav: UserType;
  employeeTimeNav: EmployeeTimeType;
  employeeTimeSheetNav: EmployeeTimeSheetType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  timeAccountNav: TimeAccountType;
}

export namespace TimeManagementAlertMessage {
  /**
   * Static representation of the [[timeManagementAlertExternalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TIME_MANAGEMENT_ALERT_EXTERNAL_CODE: StringField<TimeManagementAlertMessage> = new StringField('TimeManagementAlert_externalCode', TimeManagementAlertMessage, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<TimeManagementAlertMessage> = new StringField('createdBy', TimeManagementAlertMessage, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<TimeManagementAlertMessage> = new DateField('createdDateTime', TimeManagementAlertMessage, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[date]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DATE: DateField<TimeManagementAlertMessage> = new DateField('date', TimeManagementAlertMessage, 'Edm.DateTime');
  /**
   * Static representation of the [[defaultMessageText]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEFAULT_MESSAGE_TEXT: StringField<TimeManagementAlertMessage> = new StringField('defaultMessageText', TimeManagementAlertMessage, 'Edm.String');
  /**
   * Static representation of the [[employeeTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMPLOYEE_TIME: StringField<TimeManagementAlertMessage> = new StringField('employeeTime', TimeManagementAlertMessage, 'Edm.String');
  /**
   * Static representation of the [[employeeTimeSheet]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMPLOYEE_TIME_SHEET: StringField<TimeManagementAlertMessage> = new StringField('employeeTimeSheet', TimeManagementAlertMessage, 'Edm.String');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: StringField<TimeManagementAlertMessage> = new StringField('externalCode', TimeManagementAlertMessage, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<TimeManagementAlertMessage> = new StringField('lastModifiedBy', TimeManagementAlertMessage, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<TimeManagementAlertMessage> = new DateField('lastModifiedDateTime', TimeManagementAlertMessage, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<TimeManagementAlertMessage> = new StringField('mdfSystemRecordStatus', TimeManagementAlertMessage, 'Edm.String');
  /**
   * Static representation of the [[messageKey]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MESSAGE_KEY: StringField<TimeManagementAlertMessage> = new StringField('messageKey', TimeManagementAlertMessage, 'Edm.String');
  /**
   * Static representation of the [[messageParameter1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MESSAGE_PARAMETER_1: StringField<TimeManagementAlertMessage> = new StringField('messageParameter1', TimeManagementAlertMessage, 'Edm.String');
  /**
   * Static representation of the [[messageParameter2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MESSAGE_PARAMETER_2: StringField<TimeManagementAlertMessage> = new StringField('messageParameter2', TimeManagementAlertMessage, 'Edm.String');
  /**
   * Static representation of the [[messageParameter3]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MESSAGE_PARAMETER_3: StringField<TimeManagementAlertMessage> = new StringField('messageParameter3', TimeManagementAlertMessage, 'Edm.String');
  /**
   * Static representation of the [[messageParameter4]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MESSAGE_PARAMETER_4: StringField<TimeManagementAlertMessage> = new StringField('messageParameter4', TimeManagementAlertMessage, 'Edm.String');
  /**
   * Static representation of the [[timeAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TIME_ACCOUNT: StringField<TimeManagementAlertMessage> = new StringField('timeAccount', TimeManagementAlertMessage, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<TimeManagementAlertMessage, User> = new OneToOneLink('createdByNav', TimeManagementAlertMessage, User);
  /**
   * Static representation of the one-to-one navigation property [[employeeTimeNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMPLOYEE_TIME_NAV: OneToOneLink<TimeManagementAlertMessage, EmployeeTime> = new OneToOneLink('employeeTimeNav', TimeManagementAlertMessage, EmployeeTime);
  /**
   * Static representation of the one-to-one navigation property [[employeeTimeSheetNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMPLOYEE_TIME_SHEET_NAV: OneToOneLink<TimeManagementAlertMessage, EmployeeTimeSheet> = new OneToOneLink('employeeTimeSheetNav', TimeManagementAlertMessage, EmployeeTimeSheet);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<TimeManagementAlertMessage, User> = new OneToOneLink('lastModifiedByNav', TimeManagementAlertMessage, User);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<TimeManagementAlertMessage, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', TimeManagementAlertMessage, MdfEnumValue);
  /**
   * Static representation of the one-to-one navigation property [[timeAccountNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TIME_ACCOUNT_NAV: OneToOneLink<TimeManagementAlertMessage, TimeAccount> = new OneToOneLink('timeAccountNav', TimeManagementAlertMessage, TimeAccount);
  /**
   * All fields of the TimeManagementAlertMessage entity.
   */
  export const _allFields: Array<StringField<TimeManagementAlertMessage> | DateField<TimeManagementAlertMessage> | OneToOneLink<TimeManagementAlertMessage, User> | OneToOneLink<TimeManagementAlertMessage, EmployeeTime> | OneToOneLink<TimeManagementAlertMessage, EmployeeTimeSheet> | OneToOneLink<TimeManagementAlertMessage, MdfEnumValue> | OneToOneLink<TimeManagementAlertMessage, TimeAccount>> = [
    TimeManagementAlertMessage.TIME_MANAGEMENT_ALERT_EXTERNAL_CODE,
    TimeManagementAlertMessage.CREATED_BY,
    TimeManagementAlertMessage.CREATED_DATE_TIME,
    TimeManagementAlertMessage.DATE,
    TimeManagementAlertMessage.DEFAULT_MESSAGE_TEXT,
    TimeManagementAlertMessage.EMPLOYEE_TIME,
    TimeManagementAlertMessage.EMPLOYEE_TIME_SHEET,
    TimeManagementAlertMessage.EXTERNAL_CODE,
    TimeManagementAlertMessage.LAST_MODIFIED_BY,
    TimeManagementAlertMessage.LAST_MODIFIED_DATE_TIME,
    TimeManagementAlertMessage.MDF_SYSTEM_RECORD_STATUS,
    TimeManagementAlertMessage.MESSAGE_KEY,
    TimeManagementAlertMessage.MESSAGE_PARAMETER_1,
    TimeManagementAlertMessage.MESSAGE_PARAMETER_2,
    TimeManagementAlertMessage.MESSAGE_PARAMETER_3,
    TimeManagementAlertMessage.MESSAGE_PARAMETER_4,
    TimeManagementAlertMessage.TIME_ACCOUNT,
    TimeManagementAlertMessage.CREATED_BY_NAV,
    TimeManagementAlertMessage.EMPLOYEE_TIME_NAV,
    TimeManagementAlertMessage.EMPLOYEE_TIME_SHEET_NAV,
    TimeManagementAlertMessage.LAST_MODIFIED_BY_NAV,
    TimeManagementAlertMessage.MDF_SYSTEM_RECORD_STATUS_NAV,
    TimeManagementAlertMessage.TIME_ACCOUNT_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<TimeManagementAlertMessage> = new AllFields('*', TimeManagementAlertMessage);
  /**
   * All key fields of the TimeManagementAlertMessage entity.
   */
  export const _keyFields: Array<Selectable<TimeManagementAlertMessage>> = [TimeManagementAlertMessage.TIME_MANAGEMENT_ALERT_EXTERNAL_CODE, TimeManagementAlertMessage.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property TimeManagementAlertMessage.
   */
  export const _keys: { [keys: string]: Selectable<TimeManagementAlertMessage> } = TimeManagementAlertMessage._keyFields.reduce((acc: { [keys: string]: Selectable<TimeManagementAlertMessage> }, field: Selectable<TimeManagementAlertMessage>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
