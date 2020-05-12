/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TimeAccountDetailRequestBuilder } from './TimeAccountDetailRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "TimeAccountDetail" of service "SFOData".
 */
export class TimeAccountDetail extends Entity implements TimeAccountDetailType {
  /**
   * Technical entity name for TimeAccountDetail.
   */
  static _entityName = 'TimeAccountDetail';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for TimeAccountDetail.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Time Account_External Code.
   * Maximum length: 128.
   */
  timeAccountExternalCode!: string;
  /**
   * Accrual Period ID.
   * Maximum length: 16.
   * @nullable
   */
  accrualPeriodId?: string;
  /**
   * Taken in Advance.
   * @nullable
   */
  advanced?: boolean;
  /**
   * Amount posted.
   * @nullable
   */
  bookingAmount?: BigNumber;
  /**
   * Posting Date.
   * @nullable
   */
  bookingDate?: Moment;
  /**
   * Posting Type.
   * Maximum length: 255.
   * @nullable
   */
  bookingType?: string;
  /**
   * Posting Unit.
   * Maximum length: 255.
   * @nullable
   */
  bookingUnit?: string;
  /**
   * Time Calendar Entry.
   * Maximum length: 128.
   * @nullable
   */
  calendarEntry?: string;
  /**
   * Time Account Change Calendar.
   * Maximum length: 128.
   * @nullable
   */
  changeCalendar?: string;
  /**
   * Comment.
   * Maximum length: 255.
   * @nullable
   */
  comment?: string;
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
   * Employee Time.
   * Maximum length: 128.
   * @nullable
   */
  employeeTime?: string;
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
   * Payout Accrual Separated.
   * @nullable
   */
  payoutAccrualSeparated?: boolean;
  /**
   * Periodic Update Period ID.
   * Maximum length: 16.
   * @nullable
   */
  periodicUpdatePeriodId?: string;
  /**
   * Reference Object.
   * Maximum length: 128.
   * @nullable
   */
  referenceObject?: string;
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  bookingTypeNav!: MdfEnumValue;
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  bookingUnitNav!: MdfEnumValue;
  /**
   * One-to-one navigation property to the [[EmployeeTimeCalendar]] entity.
   */
  calendarEntryNav!: EmployeeTimeCalendar;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  createdByNav!: User;
  /**
   * One-to-one navigation property to the [[EmployeeTime]] entity.
   */
  employeeTimeNav!: EmployeeTime;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  lastModifiedByNav!: User;
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  mdfSystemRecordStatusNav!: MdfEnumValue;

  /**
   * Returns an entity builder to construct instances `TimeAccountDetail`.
   * @returns A builder that constructs instances of entity type `TimeAccountDetail`.
   */
  static builder(): EntityBuilderType<TimeAccountDetail, TimeAccountDetailTypeForceMandatory> {
    return Entity.entityBuilder(TimeAccountDetail);
  }

  /**
   * Returns a request builder to construct requests for operations on the `TimeAccountDetail` entity type.
   * @returns A `TimeAccountDetail` request builder.
   */
  static requestBuilder(): TimeAccountDetailRequestBuilder {
    return new TimeAccountDetailRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `TimeAccountDetail`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `TimeAccountDetail`.
   */
  static customField(fieldName: string): CustomField<TimeAccountDetail> {
    return Entity.customFieldSelector(fieldName, TimeAccountDetail);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';
import { EmployeeTimeCalendar, EmployeeTimeCalendarType } from './EmployeeTimeCalendar';
import { User, UserType } from './User';
import { EmployeeTime, EmployeeTimeType } from './EmployeeTime';

export interface TimeAccountDetailType {
  timeAccountExternalCode: string;
  accrualPeriodId?: string;
  advanced?: boolean;
  bookingAmount?: BigNumber;
  bookingDate?: Moment;
  bookingType?: string;
  bookingUnit?: string;
  calendarEntry?: string;
  changeCalendar?: string;
  comment?: string;
  createdBy?: string;
  createdDateTime?: Moment;
  employeeTime?: string;
  externalCode: string;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  mdfSystemRecordStatus?: string;
  payoutAccrualSeparated?: boolean;
  periodicUpdatePeriodId?: string;
  referenceObject?: string;
  bookingTypeNav: MdfEnumValueType;
  bookingUnitNav: MdfEnumValueType;
  calendarEntryNav: EmployeeTimeCalendarType;
  createdByNav: UserType;
  employeeTimeNav: EmployeeTimeType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
}

export interface TimeAccountDetailTypeForceMandatory {
  timeAccountExternalCode: string;
  accrualPeriodId: string;
  advanced: boolean;
  bookingAmount: BigNumber;
  bookingDate: Moment;
  bookingType: string;
  bookingUnit: string;
  calendarEntry: string;
  changeCalendar: string;
  comment: string;
  createdBy: string;
  createdDateTime: Moment;
  employeeTime: string;
  externalCode: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  mdfSystemRecordStatus: string;
  payoutAccrualSeparated: boolean;
  periodicUpdatePeriodId: string;
  referenceObject: string;
  bookingTypeNav: MdfEnumValueType;
  bookingUnitNav: MdfEnumValueType;
  calendarEntryNav: EmployeeTimeCalendarType;
  createdByNav: UserType;
  employeeTimeNav: EmployeeTimeType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
}

export namespace TimeAccountDetail {
  /**
   * Static representation of the [[timeAccountExternalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TIME_ACCOUNT_EXTERNAL_CODE: StringField<TimeAccountDetail> = new StringField('TimeAccount_externalCode', TimeAccountDetail, 'Edm.String');
  /**
   * Static representation of the [[accrualPeriodId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACCRUAL_PERIOD_ID: StringField<TimeAccountDetail> = new StringField('accrualPeriodId', TimeAccountDetail, 'Edm.String');
  /**
   * Static representation of the [[advanced]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADVANCED: BooleanField<TimeAccountDetail> = new BooleanField('advanced', TimeAccountDetail, 'Edm.Boolean');
  /**
   * Static representation of the [[bookingAmount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BOOKING_AMOUNT: BigNumberField<TimeAccountDetail> = new BigNumberField('bookingAmount', TimeAccountDetail, 'Edm.Decimal');
  /**
   * Static representation of the [[bookingDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BOOKING_DATE: DateField<TimeAccountDetail> = new DateField('bookingDate', TimeAccountDetail, 'Edm.DateTime');
  /**
   * Static representation of the [[bookingType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BOOKING_TYPE: StringField<TimeAccountDetail> = new StringField('bookingType', TimeAccountDetail, 'Edm.String');
  /**
   * Static representation of the [[bookingUnit]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BOOKING_UNIT: StringField<TimeAccountDetail> = new StringField('bookingUnit', TimeAccountDetail, 'Edm.String');
  /**
   * Static representation of the [[calendarEntry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CALENDAR_ENTRY: StringField<TimeAccountDetail> = new StringField('calendarEntry', TimeAccountDetail, 'Edm.String');
  /**
   * Static representation of the [[changeCalendar]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CHANGE_CALENDAR: StringField<TimeAccountDetail> = new StringField('changeCalendar', TimeAccountDetail, 'Edm.String');
  /**
   * Static representation of the [[comment]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMMENT: StringField<TimeAccountDetail> = new StringField('comment', TimeAccountDetail, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<TimeAccountDetail> = new StringField('createdBy', TimeAccountDetail, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<TimeAccountDetail> = new DateField('createdDateTime', TimeAccountDetail, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[employeeTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMPLOYEE_TIME: StringField<TimeAccountDetail> = new StringField('employeeTime', TimeAccountDetail, 'Edm.String');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: StringField<TimeAccountDetail> = new StringField('externalCode', TimeAccountDetail, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<TimeAccountDetail> = new StringField('lastModifiedBy', TimeAccountDetail, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<TimeAccountDetail> = new DateField('lastModifiedDateTime', TimeAccountDetail, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<TimeAccountDetail> = new StringField('mdfSystemRecordStatus', TimeAccountDetail, 'Edm.String');
  /**
   * Static representation of the [[payoutAccrualSeparated]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYOUT_ACCRUAL_SEPARATED: BooleanField<TimeAccountDetail> = new BooleanField('payoutAccrualSeparated', TimeAccountDetail, 'Edm.Boolean');
  /**
   * Static representation of the [[periodicUpdatePeriodId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PERIODIC_UPDATE_PERIOD_ID: StringField<TimeAccountDetail> = new StringField('periodicUpdatePeriodId', TimeAccountDetail, 'Edm.String');
  /**
   * Static representation of the [[referenceObject]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REFERENCE_OBJECT: StringField<TimeAccountDetail> = new StringField('referenceObject', TimeAccountDetail, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[bookingTypeNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BOOKING_TYPE_NAV: OneToOneLink<TimeAccountDetail, MdfEnumValue> = new OneToOneLink('bookingTypeNav', TimeAccountDetail, MdfEnumValue);
  /**
   * Static representation of the one-to-one navigation property [[bookingUnitNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BOOKING_UNIT_NAV: OneToOneLink<TimeAccountDetail, MdfEnumValue> = new OneToOneLink('bookingUnitNav', TimeAccountDetail, MdfEnumValue);
  /**
   * Static representation of the one-to-one navigation property [[calendarEntryNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CALENDAR_ENTRY_NAV: OneToOneLink<TimeAccountDetail, EmployeeTimeCalendar> = new OneToOneLink('calendarEntryNav', TimeAccountDetail, EmployeeTimeCalendar);
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<TimeAccountDetail, User> = new OneToOneLink('createdByNav', TimeAccountDetail, User);
  /**
   * Static representation of the one-to-one navigation property [[employeeTimeNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMPLOYEE_TIME_NAV: OneToOneLink<TimeAccountDetail, EmployeeTime> = new OneToOneLink('employeeTimeNav', TimeAccountDetail, EmployeeTime);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<TimeAccountDetail, User> = new OneToOneLink('lastModifiedByNav', TimeAccountDetail, User);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<TimeAccountDetail, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', TimeAccountDetail, MdfEnumValue);
  /**
   * All fields of the TimeAccountDetail entity.
   */
  export const _allFields: Array<StringField<TimeAccountDetail> | BooleanField<TimeAccountDetail> | BigNumberField<TimeAccountDetail> | DateField<TimeAccountDetail> | OneToOneLink<TimeAccountDetail, MdfEnumValue> | OneToOneLink<TimeAccountDetail, EmployeeTimeCalendar> | OneToOneLink<TimeAccountDetail, User> | OneToOneLink<TimeAccountDetail, EmployeeTime>> = [
    TimeAccountDetail.TIME_ACCOUNT_EXTERNAL_CODE,
    TimeAccountDetail.ACCRUAL_PERIOD_ID,
    TimeAccountDetail.ADVANCED,
    TimeAccountDetail.BOOKING_AMOUNT,
    TimeAccountDetail.BOOKING_DATE,
    TimeAccountDetail.BOOKING_TYPE,
    TimeAccountDetail.BOOKING_UNIT,
    TimeAccountDetail.CALENDAR_ENTRY,
    TimeAccountDetail.CHANGE_CALENDAR,
    TimeAccountDetail.COMMENT,
    TimeAccountDetail.CREATED_BY,
    TimeAccountDetail.CREATED_DATE_TIME,
    TimeAccountDetail.EMPLOYEE_TIME,
    TimeAccountDetail.EXTERNAL_CODE,
    TimeAccountDetail.LAST_MODIFIED_BY,
    TimeAccountDetail.LAST_MODIFIED_DATE_TIME,
    TimeAccountDetail.MDF_SYSTEM_RECORD_STATUS,
    TimeAccountDetail.PAYOUT_ACCRUAL_SEPARATED,
    TimeAccountDetail.PERIODIC_UPDATE_PERIOD_ID,
    TimeAccountDetail.REFERENCE_OBJECT,
    TimeAccountDetail.BOOKING_TYPE_NAV,
    TimeAccountDetail.BOOKING_UNIT_NAV,
    TimeAccountDetail.CALENDAR_ENTRY_NAV,
    TimeAccountDetail.CREATED_BY_NAV,
    TimeAccountDetail.EMPLOYEE_TIME_NAV,
    TimeAccountDetail.LAST_MODIFIED_BY_NAV,
    TimeAccountDetail.MDF_SYSTEM_RECORD_STATUS_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<TimeAccountDetail> = new AllFields('*', TimeAccountDetail);
  /**
   * All key fields of the TimeAccountDetail entity.
   */
  export const _keyFields: Array<Selectable<TimeAccountDetail>> = [TimeAccountDetail.TIME_ACCOUNT_EXTERNAL_CODE, TimeAccountDetail.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property TimeAccountDetail.
   */
  export const _keys: { [keys: string]: Selectable<TimeAccountDetail> } = TimeAccountDetail._keyFields.reduce((acc: { [keys: string]: Selectable<TimeAccountDetail> }, field: Selectable<TimeAccountDetail>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
