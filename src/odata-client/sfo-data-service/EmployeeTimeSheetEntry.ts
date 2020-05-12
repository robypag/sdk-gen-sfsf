/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EmployeeTimeSheetEntryRequestBuilder } from './EmployeeTimeSheetEntryRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField, Time, TimeField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "EmployeeTimeSheetEntry" of service "SFOData".
 */
export class EmployeeTimeSheetEntry extends Entity implements EmployeeTimeSheetEntryType {
  /**
   * Technical entity name for EmployeeTimeSheetEntry.
   */
  static _entityName = 'EmployeeTimeSheetEntry';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for EmployeeTimeSheetEntry.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Employee Time Sheet_External Code.
   * Maximum length: 128.
   */
  employeeTimeSheetExternalCode!: string;
  /**
   * Cost Center.
   * Maximum length: 128.
   * @nullable
   */
  costCenter?: string;
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
   * Employee Time.
   * Maximum length: 128.
   * @nullable
   */
  employeeTime?: string;
  /**
   * End Time.
   * @nullable
   */
  endTime?: Time;
  /**
   * External Code.
   * Maximum length: 128.
   */
  externalCode!: string;
  /**
   * externalTimeCode.
   * Maximum length: 255.
   * @nullable
   */
  externalTimeCode?: string;
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
   * Number Of Hours.
   * @nullable
   */
  quantityInHours?: BigNumber;
  /**
   * Hours and Minutes.
   * Maximum length: 255.
   * @nullable
   */
  quantityInHoursAndMinutes?: string;
  /**
   * Start Date.
   * @nullable
   */
  startDate?: Moment;
  /**
   * Start Time.
   * @nullable
   */
  startTime?: Time;
  /**
   * Time Type.
   * Maximum length: 255.
   * @nullable
   */
  timeTypeName?: string;
  /**
   * One-to-many navigation property to the [[FoCostCenter]] entity.
   */
  costCenterNav!: FoCostCenter[];
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
   * Returns an entity builder to construct instances `EmployeeTimeSheetEntry`.
   * @returns A builder that constructs instances of entity type `EmployeeTimeSheetEntry`.
   */
  static builder(): EntityBuilderType<EmployeeTimeSheetEntry, EmployeeTimeSheetEntryTypeForceMandatory> {
    return Entity.entityBuilder(EmployeeTimeSheetEntry);
  }

  /**
   * Returns a request builder to construct requests for operations on the `EmployeeTimeSheetEntry` entity type.
   * @returns A `EmployeeTimeSheetEntry` request builder.
   */
  static requestBuilder(): EmployeeTimeSheetEntryRequestBuilder {
    return new EmployeeTimeSheetEntryRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `EmployeeTimeSheetEntry`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `EmployeeTimeSheetEntry`.
   */
  static customField(fieldName: string): CustomField<EmployeeTimeSheetEntry> {
    return Entity.customFieldSelector(fieldName, EmployeeTimeSheetEntry);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { FoCostCenter, FoCostCenterType } from './FoCostCenter';
import { User, UserType } from './User';
import { EmployeeTime, EmployeeTimeType } from './EmployeeTime';
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';

export interface EmployeeTimeSheetEntryType {
  employeeTimeSheetExternalCode: string;
  costCenter?: string;
  createdBy?: string;
  createdDateTime?: Moment;
  employeeTime?: string;
  endTime?: Time;
  externalCode: string;
  externalTimeCode?: string;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  mdfSystemRecordStatus?: string;
  quantityInHours?: BigNumber;
  quantityInHoursAndMinutes?: string;
  startDate?: Moment;
  startTime?: Time;
  timeTypeName?: string;
  costCenterNav: FoCostCenterType[];
  createdByNav: UserType;
  employeeTimeNav: EmployeeTimeType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
}

export interface EmployeeTimeSheetEntryTypeForceMandatory {
  employeeTimeSheetExternalCode: string;
  costCenter: string;
  createdBy: string;
  createdDateTime: Moment;
  employeeTime: string;
  endTime: Time;
  externalCode: string;
  externalTimeCode: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  mdfSystemRecordStatus: string;
  quantityInHours: BigNumber;
  quantityInHoursAndMinutes: string;
  startDate: Moment;
  startTime: Time;
  timeTypeName: string;
  costCenterNav: FoCostCenterType[];
  createdByNav: UserType;
  employeeTimeNav: EmployeeTimeType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
}

export namespace EmployeeTimeSheetEntry {
  /**
   * Static representation of the [[employeeTimeSheetExternalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMPLOYEE_TIME_SHEET_EXTERNAL_CODE: StringField<EmployeeTimeSheetEntry> = new StringField('EmployeeTimeSheet_externalCode', EmployeeTimeSheetEntry, 'Edm.String');
  /**
   * Static representation of the [[costCenter]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COST_CENTER: StringField<EmployeeTimeSheetEntry> = new StringField('costCenter', EmployeeTimeSheetEntry, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<EmployeeTimeSheetEntry> = new StringField('createdBy', EmployeeTimeSheetEntry, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<EmployeeTimeSheetEntry> = new DateField('createdDateTime', EmployeeTimeSheetEntry, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[employeeTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMPLOYEE_TIME: StringField<EmployeeTimeSheetEntry> = new StringField('employeeTime', EmployeeTimeSheetEntry, 'Edm.String');
  /**
   * Static representation of the [[endTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const END_TIME: TimeField<EmployeeTimeSheetEntry> = new TimeField('endTime', EmployeeTimeSheetEntry, 'Edm.Time');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: StringField<EmployeeTimeSheetEntry> = new StringField('externalCode', EmployeeTimeSheetEntry, 'Edm.String');
  /**
   * Static representation of the [[externalTimeCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_TIME_CODE: StringField<EmployeeTimeSheetEntry> = new StringField('externalTimeCode', EmployeeTimeSheetEntry, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<EmployeeTimeSheetEntry> = new StringField('lastModifiedBy', EmployeeTimeSheetEntry, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<EmployeeTimeSheetEntry> = new DateField('lastModifiedDateTime', EmployeeTimeSheetEntry, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<EmployeeTimeSheetEntry> = new StringField('mdfSystemRecordStatus', EmployeeTimeSheetEntry, 'Edm.String');
  /**
   * Static representation of the [[quantityInHours]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const QUANTITY_IN_HOURS: BigNumberField<EmployeeTimeSheetEntry> = new BigNumberField('quantityInHours', EmployeeTimeSheetEntry, 'Edm.Decimal');
  /**
   * Static representation of the [[quantityInHoursAndMinutes]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const QUANTITY_IN_HOURS_AND_MINUTES: StringField<EmployeeTimeSheetEntry> = new StringField('quantityInHoursAndMinutes', EmployeeTimeSheetEntry, 'Edm.String');
  /**
   * Static representation of the [[startDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const START_DATE: DateField<EmployeeTimeSheetEntry> = new DateField('startDate', EmployeeTimeSheetEntry, 'Edm.DateTime');
  /**
   * Static representation of the [[startTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const START_TIME: TimeField<EmployeeTimeSheetEntry> = new TimeField('startTime', EmployeeTimeSheetEntry, 'Edm.Time');
  /**
   * Static representation of the [[timeTypeName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TIME_TYPE_NAME: StringField<EmployeeTimeSheetEntry> = new StringField('timeTypeName', EmployeeTimeSheetEntry, 'Edm.String');
  /**
   * Static representation of the one-to-many navigation property [[costCenterNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COST_CENTER_NAV: Link<EmployeeTimeSheetEntry, FoCostCenter> = new Link('costCenterNav', EmployeeTimeSheetEntry, FoCostCenter);
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<EmployeeTimeSheetEntry, User> = new OneToOneLink('createdByNav', EmployeeTimeSheetEntry, User);
  /**
   * Static representation of the one-to-one navigation property [[employeeTimeNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMPLOYEE_TIME_NAV: OneToOneLink<EmployeeTimeSheetEntry, EmployeeTime> = new OneToOneLink('employeeTimeNav', EmployeeTimeSheetEntry, EmployeeTime);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<EmployeeTimeSheetEntry, User> = new OneToOneLink('lastModifiedByNav', EmployeeTimeSheetEntry, User);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<EmployeeTimeSheetEntry, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', EmployeeTimeSheetEntry, MdfEnumValue);
  /**
   * All fields of the EmployeeTimeSheetEntry entity.
   */
  export const _allFields: Array<StringField<EmployeeTimeSheetEntry> | DateField<EmployeeTimeSheetEntry> | TimeField<EmployeeTimeSheetEntry> | BigNumberField<EmployeeTimeSheetEntry> | Link<EmployeeTimeSheetEntry, FoCostCenter> | OneToOneLink<EmployeeTimeSheetEntry, User> | OneToOneLink<EmployeeTimeSheetEntry, EmployeeTime> | OneToOneLink<EmployeeTimeSheetEntry, MdfEnumValue>> = [
    EmployeeTimeSheetEntry.EMPLOYEE_TIME_SHEET_EXTERNAL_CODE,
    EmployeeTimeSheetEntry.COST_CENTER,
    EmployeeTimeSheetEntry.CREATED_BY,
    EmployeeTimeSheetEntry.CREATED_DATE_TIME,
    EmployeeTimeSheetEntry.EMPLOYEE_TIME,
    EmployeeTimeSheetEntry.END_TIME,
    EmployeeTimeSheetEntry.EXTERNAL_CODE,
    EmployeeTimeSheetEntry.EXTERNAL_TIME_CODE,
    EmployeeTimeSheetEntry.LAST_MODIFIED_BY,
    EmployeeTimeSheetEntry.LAST_MODIFIED_DATE_TIME,
    EmployeeTimeSheetEntry.MDF_SYSTEM_RECORD_STATUS,
    EmployeeTimeSheetEntry.QUANTITY_IN_HOURS,
    EmployeeTimeSheetEntry.QUANTITY_IN_HOURS_AND_MINUTES,
    EmployeeTimeSheetEntry.START_DATE,
    EmployeeTimeSheetEntry.START_TIME,
    EmployeeTimeSheetEntry.TIME_TYPE_NAME,
    EmployeeTimeSheetEntry.COST_CENTER_NAV,
    EmployeeTimeSheetEntry.CREATED_BY_NAV,
    EmployeeTimeSheetEntry.EMPLOYEE_TIME_NAV,
    EmployeeTimeSheetEntry.LAST_MODIFIED_BY_NAV,
    EmployeeTimeSheetEntry.MDF_SYSTEM_RECORD_STATUS_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<EmployeeTimeSheetEntry> = new AllFields('*', EmployeeTimeSheetEntry);
  /**
   * All key fields of the EmployeeTimeSheetEntry entity.
   */
  export const _keyFields: Array<Selectable<EmployeeTimeSheetEntry>> = [EmployeeTimeSheetEntry.EMPLOYEE_TIME_SHEET_EXTERNAL_CODE, EmployeeTimeSheetEntry.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property EmployeeTimeSheetEntry.
   */
  export const _keys: { [keys: string]: Selectable<EmployeeTimeSheetEntry> } = EmployeeTimeSheetEntry._keyFields.reduce((acc: { [keys: string]: Selectable<EmployeeTimeSheetEntry> }, field: Selectable<EmployeeTimeSheetEntry>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
