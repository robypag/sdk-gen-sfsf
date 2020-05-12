/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { HolidayRequestBuilder } from './HolidayRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "Holiday" of service "SFOData".
 */
export class Holiday extends Entity implements HolidayType {
  /**
   * Technical entity name for Holiday.
   */
  static _entityName = 'Holiday';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for Holiday.
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
   * Holiday Code.
   * Maximum length: 128.
   */
  holidayCode!: string;
  /**
   * lastModifiedBy.
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
   * Returns an entity builder to construct instances `Holiday`.
   * @returns A builder that constructs instances of entity type `Holiday`.
   */
  static builder(): EntityBuilderType<Holiday, HolidayTypeForceMandatory> {
    return Entity.entityBuilder(Holiday);
  }

  /**
   * Returns a request builder to construct requests for operations on the `Holiday` entity type.
   * @returns A `Holiday` request builder.
   */
  static requestBuilder(): HolidayRequestBuilder {
    return new HolidayRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `Holiday`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `Holiday`.
   */
  static customField(fieldName: string): CustomField<Holiday> {
    return Entity.customFieldSelector(fieldName, Holiday);
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
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';
import { MdfLocalizedValue, MdfLocalizedValueType } from './MdfLocalizedValue';
import { WfRequest, WfRequestType } from './WfRequest';

export interface HolidayType {
  country?: string;
  createdBy?: string;
  createdDateTime?: Moment;
  holidayCode: string;
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
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  nameTranslationTextNav: MdfLocalizedValueType[];
  wfRequestNav: WfRequestType[];
}

export interface HolidayTypeForceMandatory {
  country: string;
  createdBy: string;
  createdDateTime: Moment;
  holidayCode: string;
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
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  nameTranslationTextNav: MdfLocalizedValueType[];
  wfRequestNav: WfRequestType[];
}

export namespace Holiday {
  /**
   * Static representation of the [[country]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY: StringField<Holiday> = new StringField('country', Holiday, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<Holiday> = new StringField('createdBy', Holiday, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<Holiday> = new DateField('createdDateTime', Holiday, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[holidayCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HOLIDAY_CODE: StringField<Holiday> = new StringField('holidayCode', Holiday, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<Holiday> = new StringField('lastModifiedBy', Holiday, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<Holiday> = new DateField('lastModifiedDateTime', Holiday, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<Holiday> = new StringField('mdfSystemRecordStatus', Holiday, 'Edm.String');
  /**
   * Static representation of the [[nameDeDe]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_DE_DE: StringField<Holiday> = new StringField('name_de_DE', Holiday, 'Edm.String');
  /**
   * Static representation of the [[nameDefaultValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_DEFAULT_VALUE: StringField<Holiday> = new StringField('name_defaultValue', Holiday, 'Edm.String');
  /**
   * Static representation of the [[nameEnDebug]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_EN_DEBUG: StringField<Holiday> = new StringField('name_en_DEBUG', Holiday, 'Edm.String');
  /**
   * Static representation of the [[nameEnGb]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_EN_GB: StringField<Holiday> = new StringField('name_en_GB', Holiday, 'Edm.String');
  /**
   * Static representation of the [[nameEnUs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_EN_US: StringField<Holiday> = new StringField('name_en_US', Holiday, 'Edm.String');
  /**
   * Static representation of the [[nameEsEs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_ES_ES: StringField<Holiday> = new StringField('name_es_ES', Holiday, 'Edm.String');
  /**
   * Static representation of the [[nameEsMx]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_ES_MX: StringField<Holiday> = new StringField('name_es_MX', Holiday, 'Edm.String');
  /**
   * Static representation of the [[nameFrCa]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_FR_CA: StringField<Holiday> = new StringField('name_fr_CA', Holiday, 'Edm.String');
  /**
   * Static representation of the [[nameFrFr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_FR_FR: StringField<Holiday> = new StringField('name_fr_FR', Holiday, 'Edm.String');
  /**
   * Static representation of the [[nameItIt]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_IT_IT: StringField<Holiday> = new StringField('name_it_IT', Holiday, 'Edm.String');
  /**
   * Static representation of the [[nameLocalized]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_LOCALIZED: StringField<Holiday> = new StringField('name_localized', Holiday, 'Edm.String');
  /**
   * Static representation of the [[nameNlNl]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_NL_NL: StringField<Holiday> = new StringField('name_nl_NL', Holiday, 'Edm.String');
  /**
   * Static representation of the [[namePtBr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_PT_BR: StringField<Holiday> = new StringField('name_pt_BR', Holiday, 'Edm.String');
  /**
   * Static representation of the [[nameZhCn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_ZH_CN: StringField<Holiday> = new StringField('name_zh_CN', Holiday, 'Edm.String');
  /**
   * Static representation of the [[oldName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OLD_NAME: StringField<Holiday> = new StringField('oldName', Holiday, 'Edm.String');
  /**
   * Static representation of the one-to-many navigation property [[countryNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY_NAV: Link<Holiday, Country> = new Link('countryNav', Holiday, Country);
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<Holiday, User> = new OneToOneLink('createdByNav', Holiday, User);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<Holiday, User> = new OneToOneLink('lastModifiedByNav', Holiday, User);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<Holiday, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', Holiday, MdfEnumValue);
  /**
   * Static representation of the one-to-many navigation property [[nameTranslationTextNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_TRANSLATION_TEXT_NAV: Link<Holiday, MdfLocalizedValue> = new Link('nameTranslationTextNav', Holiday, MdfLocalizedValue);
  /**
   * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WF_REQUEST_NAV: Link<Holiday, WfRequest> = new Link('wfRequestNav', Holiday, WfRequest);
  /**
   * All fields of the Holiday entity.
   */
  export const _allFields: Array<StringField<Holiday> | DateField<Holiday> | Link<Holiday, Country> | OneToOneLink<Holiday, User> | OneToOneLink<Holiday, MdfEnumValue> | Link<Holiday, MdfLocalizedValue> | Link<Holiday, WfRequest>> = [
    Holiday.COUNTRY,
    Holiday.CREATED_BY,
    Holiday.CREATED_DATE_TIME,
    Holiday.HOLIDAY_CODE,
    Holiday.LAST_MODIFIED_BY,
    Holiday.LAST_MODIFIED_DATE_TIME,
    Holiday.MDF_SYSTEM_RECORD_STATUS,
    Holiday.NAME_DE_DE,
    Holiday.NAME_DEFAULT_VALUE,
    Holiday.NAME_EN_DEBUG,
    Holiday.NAME_EN_GB,
    Holiday.NAME_EN_US,
    Holiday.NAME_ES_ES,
    Holiday.NAME_ES_MX,
    Holiday.NAME_FR_CA,
    Holiday.NAME_FR_FR,
    Holiday.NAME_IT_IT,
    Holiday.NAME_LOCALIZED,
    Holiday.NAME_NL_NL,
    Holiday.NAME_PT_BR,
    Holiday.NAME_ZH_CN,
    Holiday.OLD_NAME,
    Holiday.COUNTRY_NAV,
    Holiday.CREATED_BY_NAV,
    Holiday.LAST_MODIFIED_BY_NAV,
    Holiday.MDF_SYSTEM_RECORD_STATUS_NAV,
    Holiday.NAME_TRANSLATION_TEXT_NAV,
    Holiday.WF_REQUEST_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<Holiday> = new AllFields('*', Holiday);
  /**
   * All key fields of the Holiday entity.
   */
  export const _keyFields: Array<Selectable<Holiday>> = [Holiday.HOLIDAY_CODE];
  /**
   * Mapping of all key field names to the respective static field property Holiday.
   */
  export const _keys: { [keys: string]: Selectable<Holiday> } = Holiday._keyFields.reduce((acc: { [keys: string]: Selectable<Holiday> }, field: Selectable<Holiday>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
