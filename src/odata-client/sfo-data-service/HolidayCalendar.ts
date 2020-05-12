/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { HolidayCalendarRequestBuilder } from './HolidayCalendarRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "HolidayCalendar" of service "SFOData".
 */
export class HolidayCalendar extends Entity implements HolidayCalendarType {
  /**
   * Technical entity name for HolidayCalendar.
   */
  static _entityName = 'HolidayCalendar';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for HolidayCalendar.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Country/Region.
   * Maximum length: 128.
   * @nullable
   */
  country?: string;
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
   * Name.
   * Maximum length: 255.
   * @nullable
   */
  nameDeDe?: string;
  /**
   * Name.
   * Maximum length: 255.
   * @nullable
   */
  nameDefaultValue?: string;
  /**
   * Name.
   * Maximum length: 255.
   * @nullable
   */
  nameEnDebug?: string;
  /**
   * Name.
   * Maximum length: 255.
   * @nullable
   */
  nameEnGb?: string;
  /**
   * Name.
   * Maximum length: 255.
   * @nullable
   */
  nameEnUs?: string;
  /**
   * Name.
   * Maximum length: 255.
   * @nullable
   */
  nameEsEs?: string;
  /**
   * Name.
   * Maximum length: 255.
   * @nullable
   */
  nameEsMx?: string;
  /**
   * Name.
   * Maximum length: 255.
   * @nullable
   */
  nameFrCa?: string;
  /**
   * Name.
   * Maximum length: 255.
   * @nullable
   */
  nameFrFr?: string;
  /**
   * Name.
   * Maximum length: 255.
   * @nullable
   */
  nameItIt?: string;
  /**
   * Name.
   * Maximum length: 255.
   * @nullable
   */
  nameLocalized?: string;
  /**
   * Name.
   * Maximum length: 255.
   * @nullable
   */
  nameNlNl?: string;
  /**
   * Name.
   * Maximum length: 255.
   * @nullable
   */
  namePtBr?: string;
  /**
   * Name.
   * Maximum length: 255.
   * @nullable
   */
  nameZhCn?: string;
  /**
   * oldName.
   * Maximum length: 255.
   * @nullable
   */
  oldName?: string;
  /**
   * One-to-many navigation property to the [[Country]] entity.
   */
  countryNav!: Country[];
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  createdByNav!: User;
  /**
   * One-to-many navigation property to the [[HolidayAssignment]] entity.
   */
  holidayAssignments!: HolidayAssignment[];
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  lastModifiedByNav!: User;
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  mdfSystemRecordStatusNav!: MdfEnumValue;
  /**
   * One-to-many navigation property to the [[MdfLocalizedValue]] entity.
   */
  nameTranslationTextNav!: MdfLocalizedValue[];
  /**
   * One-to-many navigation property to the [[WfRequest]] entity.
   */
  wfRequestNav!: WfRequest[];

  /**
   * Returns an entity builder to construct instances `HolidayCalendar`.
   * @returns A builder that constructs instances of entity type `HolidayCalendar`.
   */
  static builder(): EntityBuilderType<HolidayCalendar, HolidayCalendarTypeForceMandatory> {
    return Entity.entityBuilder(HolidayCalendar);
  }

  /**
   * Returns a request builder to construct requests for operations on the `HolidayCalendar` entity type.
   * @returns A `HolidayCalendar` request builder.
   */
  static requestBuilder(): HolidayCalendarRequestBuilder {
    return new HolidayCalendarRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `HolidayCalendar`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `HolidayCalendar`.
   */
  static customField(fieldName: string): CustomField<HolidayCalendar> {
    return Entity.customFieldSelector(fieldName, HolidayCalendar);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { Country, CountryType } from './Country';
import { User, UserType } from './User';
import { HolidayAssignment, HolidayAssignmentType } from './HolidayAssignment';
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';
import { MdfLocalizedValue, MdfLocalizedValueType } from './MdfLocalizedValue';
import { WfRequest, WfRequestType } from './WfRequest';

export interface HolidayCalendarType {
  country?: string;
  createdBy?: string;
  createdDateTime?: Moment;
  externalCode: string;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  mdfSystemRecordStatus?: string;
  nameDeDe?: string;
  nameDefaultValue?: string;
  nameEnDebug?: string;
  nameEnGb?: string;
  nameEnUs?: string;
  nameEsEs?: string;
  nameEsMx?: string;
  nameFrCa?: string;
  nameFrFr?: string;
  nameItIt?: string;
  nameLocalized?: string;
  nameNlNl?: string;
  namePtBr?: string;
  nameZhCn?: string;
  oldName?: string;
  countryNav: CountryType[];
  createdByNav: UserType;
  holidayAssignments: HolidayAssignmentType[];
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  nameTranslationTextNav: MdfLocalizedValueType[];
  wfRequestNav: WfRequestType[];
}

export interface HolidayCalendarTypeForceMandatory {
  country: string;
  createdBy: string;
  createdDateTime: Moment;
  externalCode: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  mdfSystemRecordStatus: string;
  nameDeDe: string;
  nameDefaultValue: string;
  nameEnDebug: string;
  nameEnGb: string;
  nameEnUs: string;
  nameEsEs: string;
  nameEsMx: string;
  nameFrCa: string;
  nameFrFr: string;
  nameItIt: string;
  nameLocalized: string;
  nameNlNl: string;
  namePtBr: string;
  nameZhCn: string;
  oldName: string;
  countryNav: CountryType[];
  createdByNav: UserType;
  holidayAssignments: HolidayAssignmentType[];
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  nameTranslationTextNav: MdfLocalizedValueType[];
  wfRequestNav: WfRequestType[];
}

export namespace HolidayCalendar {
  /**
   * Static representation of the [[country]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY: StringField<HolidayCalendar> = new StringField('country', HolidayCalendar, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<HolidayCalendar> = new StringField('createdBy', HolidayCalendar, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<HolidayCalendar> = new DateField('createdDateTime', HolidayCalendar, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: StringField<HolidayCalendar> = new StringField('externalCode', HolidayCalendar, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<HolidayCalendar> = new StringField('lastModifiedBy', HolidayCalendar, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<HolidayCalendar> = new DateField('lastModifiedDateTime', HolidayCalendar, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<HolidayCalendar> = new StringField('mdfSystemRecordStatus', HolidayCalendar, 'Edm.String');
  /**
   * Static representation of the [[nameDeDe]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_DE_DE: StringField<HolidayCalendar> = new StringField('name_de_DE', HolidayCalendar, 'Edm.String');
  /**
   * Static representation of the [[nameDefaultValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_DEFAULT_VALUE: StringField<HolidayCalendar> = new StringField('name_defaultValue', HolidayCalendar, 'Edm.String');
  /**
   * Static representation of the [[nameEnDebug]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_EN_DEBUG: StringField<HolidayCalendar> = new StringField('name_en_DEBUG', HolidayCalendar, 'Edm.String');
  /**
   * Static representation of the [[nameEnGb]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_EN_GB: StringField<HolidayCalendar> = new StringField('name_en_GB', HolidayCalendar, 'Edm.String');
  /**
   * Static representation of the [[nameEnUs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_EN_US: StringField<HolidayCalendar> = new StringField('name_en_US', HolidayCalendar, 'Edm.String');
  /**
   * Static representation of the [[nameEsEs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_ES_ES: StringField<HolidayCalendar> = new StringField('name_es_ES', HolidayCalendar, 'Edm.String');
  /**
   * Static representation of the [[nameEsMx]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_ES_MX: StringField<HolidayCalendar> = new StringField('name_es_MX', HolidayCalendar, 'Edm.String');
  /**
   * Static representation of the [[nameFrCa]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_FR_CA: StringField<HolidayCalendar> = new StringField('name_fr_CA', HolidayCalendar, 'Edm.String');
  /**
   * Static representation of the [[nameFrFr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_FR_FR: StringField<HolidayCalendar> = new StringField('name_fr_FR', HolidayCalendar, 'Edm.String');
  /**
   * Static representation of the [[nameItIt]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_IT_IT: StringField<HolidayCalendar> = new StringField('name_it_IT', HolidayCalendar, 'Edm.String');
  /**
   * Static representation of the [[nameLocalized]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_LOCALIZED: StringField<HolidayCalendar> = new StringField('name_localized', HolidayCalendar, 'Edm.String');
  /**
   * Static representation of the [[nameNlNl]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_NL_NL: StringField<HolidayCalendar> = new StringField('name_nl_NL', HolidayCalendar, 'Edm.String');
  /**
   * Static representation of the [[namePtBr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_PT_BR: StringField<HolidayCalendar> = new StringField('name_pt_BR', HolidayCalendar, 'Edm.String');
  /**
   * Static representation of the [[nameZhCn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_ZH_CN: StringField<HolidayCalendar> = new StringField('name_zh_CN', HolidayCalendar, 'Edm.String');
  /**
   * Static representation of the [[oldName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OLD_NAME: StringField<HolidayCalendar> = new StringField('oldName', HolidayCalendar, 'Edm.String');
  /**
   * Static representation of the one-to-many navigation property [[countryNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY_NAV: Link<HolidayCalendar, Country> = new Link('countryNav', HolidayCalendar, Country);
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<HolidayCalendar, User> = new OneToOneLink('createdByNav', HolidayCalendar, User);
  /**
   * Static representation of the one-to-many navigation property [[holidayAssignments]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HOLIDAY_ASSIGNMENTS: Link<HolidayCalendar, HolidayAssignment> = new Link('holidayAssignments', HolidayCalendar, HolidayAssignment);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<HolidayCalendar, User> = new OneToOneLink('lastModifiedByNav', HolidayCalendar, User);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<HolidayCalendar, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', HolidayCalendar, MdfEnumValue);
  /**
   * Static representation of the one-to-many navigation property [[nameTranslationTextNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_TRANSLATION_TEXT_NAV: Link<HolidayCalendar, MdfLocalizedValue> = new Link('nameTranslationTextNav', HolidayCalendar, MdfLocalizedValue);
  /**
   * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WF_REQUEST_NAV: Link<HolidayCalendar, WfRequest> = new Link('wfRequestNav', HolidayCalendar, WfRequest);
  /**
   * All fields of the HolidayCalendar entity.
   */
  export const _allFields: Array<StringField<HolidayCalendar> | DateField<HolidayCalendar> | Link<HolidayCalendar, Country> | OneToOneLink<HolidayCalendar, User> | Link<HolidayCalendar, HolidayAssignment> | OneToOneLink<HolidayCalendar, MdfEnumValue> | Link<HolidayCalendar, MdfLocalizedValue> | Link<HolidayCalendar, WfRequest>> = [
    HolidayCalendar.COUNTRY,
    HolidayCalendar.CREATED_BY,
    HolidayCalendar.CREATED_DATE_TIME,
    HolidayCalendar.EXTERNAL_CODE,
    HolidayCalendar.LAST_MODIFIED_BY,
    HolidayCalendar.LAST_MODIFIED_DATE_TIME,
    HolidayCalendar.MDF_SYSTEM_RECORD_STATUS,
    HolidayCalendar.NAME_DE_DE,
    HolidayCalendar.NAME_DEFAULT_VALUE,
    HolidayCalendar.NAME_EN_DEBUG,
    HolidayCalendar.NAME_EN_GB,
    HolidayCalendar.NAME_EN_US,
    HolidayCalendar.NAME_ES_ES,
    HolidayCalendar.NAME_ES_MX,
    HolidayCalendar.NAME_FR_CA,
    HolidayCalendar.NAME_FR_FR,
    HolidayCalendar.NAME_IT_IT,
    HolidayCalendar.NAME_LOCALIZED,
    HolidayCalendar.NAME_NL_NL,
    HolidayCalendar.NAME_PT_BR,
    HolidayCalendar.NAME_ZH_CN,
    HolidayCalendar.OLD_NAME,
    HolidayCalendar.COUNTRY_NAV,
    HolidayCalendar.CREATED_BY_NAV,
    HolidayCalendar.HOLIDAY_ASSIGNMENTS,
    HolidayCalendar.LAST_MODIFIED_BY_NAV,
    HolidayCalendar.MDF_SYSTEM_RECORD_STATUS_NAV,
    HolidayCalendar.NAME_TRANSLATION_TEXT_NAV,
    HolidayCalendar.WF_REQUEST_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<HolidayCalendar> = new AllFields('*', HolidayCalendar);
  /**
   * All key fields of the HolidayCalendar entity.
   */
  export const _keyFields: Array<Selectable<HolidayCalendar>> = [HolidayCalendar.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property HolidayCalendar.
   */
  export const _keys: { [keys: string]: Selectable<HolidayCalendar> } = HolidayCalendar._keyFields.reduce((acc: { [keys: string]: Selectable<HolidayCalendar> }, field: Selectable<HolidayCalendar>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
