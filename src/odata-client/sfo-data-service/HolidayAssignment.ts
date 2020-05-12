/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { HolidayAssignmentRequestBuilder } from './HolidayAssignmentRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "HolidayAssignment" of service "SFOData".
 */
export class HolidayAssignment extends Entity implements HolidayAssignmentType {
  /**
   * Technical entity name for HolidayAssignment.
   */
  static _entityName = 'HolidayAssignment';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for HolidayAssignment.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Holiday Calendar_External Code.
   * Maximum length: 128.
   */
  holidayCalendarExternalCode!: string;
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
   * Date of Holiday.
   */
  date!: Moment;
  /**
   * Holiday.
   * Maximum length: 128.
   * @nullable
   */
  holiday?: string;
  /**
   * Holiday Class.
   * Maximum length: 255.
   * @nullable
   */
  holidayClass?: string;
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
   * One-to-one navigation property to the [[User]] entity.
   */
  createdByNav!: User;
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  holidayClassNav!: MdfEnumValue;
  /**
   * One-to-one navigation property to the [[Holiday]] entity.
   */
  holidayNav!: Holiday;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  lastModifiedByNav!: User;
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  mdfSystemRecordStatusNav!: MdfEnumValue;

  /**
   * Returns an entity builder to construct instances `HolidayAssignment`.
   * @returns A builder that constructs instances of entity type `HolidayAssignment`.
   */
  static builder(): EntityBuilderType<HolidayAssignment, HolidayAssignmentTypeForceMandatory> {
    return Entity.entityBuilder(HolidayAssignment);
  }

  /**
   * Returns a request builder to construct requests for operations on the `HolidayAssignment` entity type.
   * @returns A `HolidayAssignment` request builder.
   */
  static requestBuilder(): HolidayAssignmentRequestBuilder {
    return new HolidayAssignmentRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `HolidayAssignment`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `HolidayAssignment`.
   */
  static customField(fieldName: string): CustomField<HolidayAssignment> {
    return Entity.customFieldSelector(fieldName, HolidayAssignment);
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
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';
import { Holiday, HolidayType } from './Holiday';

export interface HolidayAssignmentType {
  holidayCalendarExternalCode: string;
  createdBy?: string;
  createdDateTime?: Moment;
  date: Moment;
  holiday?: string;
  holidayClass?: string;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  mdfSystemRecordStatus?: string;
  createdByNav: UserType;
  holidayClassNav: MdfEnumValueType;
  holidayNav: HolidayType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
}

export interface HolidayAssignmentTypeForceMandatory {
  holidayCalendarExternalCode: string;
  createdBy: string;
  createdDateTime: Moment;
  date: Moment;
  holiday: string;
  holidayClass: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  mdfSystemRecordStatus: string;
  createdByNav: UserType;
  holidayClassNav: MdfEnumValueType;
  holidayNav: HolidayType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
}

export namespace HolidayAssignment {
  /**
   * Static representation of the [[holidayCalendarExternalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HOLIDAY_CALENDAR_EXTERNAL_CODE: StringField<HolidayAssignment> = new StringField('HolidayCalendar_externalCode', HolidayAssignment, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<HolidayAssignment> = new StringField('createdBy', HolidayAssignment, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<HolidayAssignment> = new DateField('createdDateTime', HolidayAssignment, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[date]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DATE: DateField<HolidayAssignment> = new DateField('date', HolidayAssignment, 'Edm.DateTime');
  /**
   * Static representation of the [[holiday]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HOLIDAY: StringField<HolidayAssignment> = new StringField('holiday', HolidayAssignment, 'Edm.String');
  /**
   * Static representation of the [[holidayClass]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HOLIDAY_CLASS: StringField<HolidayAssignment> = new StringField('holidayClass', HolidayAssignment, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<HolidayAssignment> = new StringField('lastModifiedBy', HolidayAssignment, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<HolidayAssignment> = new DateField('lastModifiedDateTime', HolidayAssignment, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<HolidayAssignment> = new StringField('mdfSystemRecordStatus', HolidayAssignment, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<HolidayAssignment, User> = new OneToOneLink('createdByNav', HolidayAssignment, User);
  /**
   * Static representation of the one-to-one navigation property [[holidayClassNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HOLIDAY_CLASS_NAV: OneToOneLink<HolidayAssignment, MdfEnumValue> = new OneToOneLink('holidayClassNav', HolidayAssignment, MdfEnumValue);
  /**
   * Static representation of the one-to-one navigation property [[holidayNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HOLIDAY_NAV: OneToOneLink<HolidayAssignment, Holiday> = new OneToOneLink('holidayNav', HolidayAssignment, Holiday);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<HolidayAssignment, User> = new OneToOneLink('lastModifiedByNav', HolidayAssignment, User);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<HolidayAssignment, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', HolidayAssignment, MdfEnumValue);
  /**
   * All fields of the HolidayAssignment entity.
   */
  export const _allFields: Array<StringField<HolidayAssignment> | DateField<HolidayAssignment> | OneToOneLink<HolidayAssignment, User> | OneToOneLink<HolidayAssignment, MdfEnumValue> | OneToOneLink<HolidayAssignment, Holiday>> = [
    HolidayAssignment.HOLIDAY_CALENDAR_EXTERNAL_CODE,
    HolidayAssignment.CREATED_BY,
    HolidayAssignment.CREATED_DATE_TIME,
    HolidayAssignment.DATE,
    HolidayAssignment.HOLIDAY,
    HolidayAssignment.HOLIDAY_CLASS,
    HolidayAssignment.LAST_MODIFIED_BY,
    HolidayAssignment.LAST_MODIFIED_DATE_TIME,
    HolidayAssignment.MDF_SYSTEM_RECORD_STATUS,
    HolidayAssignment.CREATED_BY_NAV,
    HolidayAssignment.HOLIDAY_CLASS_NAV,
    HolidayAssignment.HOLIDAY_NAV,
    HolidayAssignment.LAST_MODIFIED_BY_NAV,
    HolidayAssignment.MDF_SYSTEM_RECORD_STATUS_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<HolidayAssignment> = new AllFields('*', HolidayAssignment);
  /**
   * All key fields of the HolidayAssignment entity.
   */
  export const _keyFields: Array<Selectable<HolidayAssignment>> = [HolidayAssignment.HOLIDAY_CALENDAR_EXTERNAL_CODE, HolidayAssignment.DATE];
  /**
   * Mapping of all key field names to the respective static field property HolidayAssignment.
   */
  export const _keys: { [keys: string]: Selectable<HolidayAssignment> } = HolidayAssignment._keyFields.reduce((acc: { [keys: string]: Selectable<HolidayAssignment> }, field: Selectable<HolidayAssignment>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
