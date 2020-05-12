/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TimeTypeProfileRequestBuilder } from './TimeTypeProfileRequestBuilder';
import { Moment } from 'moment';
import { AllFields, BooleanField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "TimeTypeProfile" of service "SFOData".
 */
export class TimeTypeProfile extends Entity implements TimeTypeProfileType {
  /**
   * Technical entity name for TimeTypeProfile.
   */
  static _entityName = 'TimeTypeProfile';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for TimeTypeProfile.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Update TOiL Account Only When Changes Approved.
   * @nullable
   */
  bookTimeOffInLieuOnTimeSheetApproval?: boolean;
  /**
   * Update Working Time Account Only When Changes Approved.
   * @nullable
   */
  bookWorkingTimeOnTimeSheetApproval?: boolean;
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
   * Default Import Attendance Time Type.
   * Maximum length: 128.
   * @nullable
   */
  defaultImportAttendanceTimeType?: string;
  /**
   * External Code.
   * Maximum length: 128.
   */
  externalCode!: string;
  /**
   * External Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameDeDe?: string;
  /**
   * External Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameDefaultValue?: string;
  /**
   * External Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameEnDebug?: string;
  /**
   * External Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameEnGb?: string;
  /**
   * External Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameEnUs?: string;
  /**
   * External Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameEsEs?: string;
  /**
   * External Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameEsMx?: string;
  /**
   * External Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameFrCa?: string;
  /**
   * External Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameFrFr?: string;
  /**
   * External Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameItIt?: string;
  /**
   * External Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameLocalized?: string;
  /**
   * External Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameNlNl?: string;
  /**
   * External Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNamePtBr?: string;
  /**
   * External Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameZhCn?: string;
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
   * Main Attendance Time Type.
   * Maximum length: 128.
   * @nullable
   */
  mainAttendanceTimeType?: string;
  /**
   * Main Break Time Type.
   * Maximum length: 128.
   * @nullable
   */
  mainBreakTimeType?: string;
  /**
   * Main Absence Time Type.
   * Maximum length: 128.
   * @nullable
   */
  mainEssTimeType?: string;
  /**
   * Record Status.
   * Maximum length: 255.
   * @nullable
   */
  mdfSystemRecordStatus?: string;
  /**
   * Status.
   * Maximum length: 255.
   * @nullable
   */
  mdfSystemStatus?: string;
  /**
   * Time Account Type for Time Off in Lieu.
   * Maximum length: 128.
   * @nullable
   */
  timeAccountTypeForTimeOffInLieu?: string;
  /**
   * Time Account Type for Working Time Account.
   * Maximum length: 128.
   * @nullable
   */
  timeAccountTypeForWorkingTimeAccount?: string;
  /**
   * Time Recording Variant.
   * Maximum length: 255.
   * @nullable
   */
  timeRecordingVariant?: string;
  /**
   * One-to-many navigation property to the [[AvailableTimeType]] entity.
   */
  availableTimeTypes!: AvailableTimeType[];
  /**
   * One-to-many navigation property to the [[Country]] entity.
   */
  countryNav!: Country[];
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  createdByNav!: User;
  /**
   * One-to-one navigation property to the [[TimeType]] entity.
   */
  defaultImportAttendanceTimeTypeNav!: TimeType;
  /**
   * One-to-many navigation property to the [[MdfLocalizedValue]] entity.
   */
  externalNameTranslationTextNav!: MdfLocalizedValue[];
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  lastModifiedByNav!: User;
  /**
   * One-to-one navigation property to the [[TimeType]] entity.
   */
  mainAttendanceTimeTypeNav!: TimeType;
  /**
   * One-to-one navigation property to the [[TimeType]] entity.
   */
  mainBreakTimeTypeNav!: TimeType;
  /**
   * One-to-one navigation property to the [[TimeType]] entity.
   */
  mainEssTimeTypeNav!: TimeType;
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  mdfSystemRecordStatusNav!: MdfEnumValue;
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  mdfSystemStatusNav!: MdfEnumValue;
  /**
   * One-to-one navigation property to the [[TimeAccountType]] entity.
   */
  timeAccountTypeForTimeOffInLieuNav!: TimeAccountType;
  /**
   * One-to-one navigation property to the [[TimeAccountType]] entity.
   */
  timeAccountTypeForWorkingTimeAccountNav!: TimeAccountType;
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  timeRecordingVariantNav!: MdfEnumValue;
  /**
   * One-to-many navigation property to the [[WfRequest]] entity.
   */
  wfRequestNav!: WfRequest[];

  /**
   * Returns an entity builder to construct instances `TimeTypeProfile`.
   * @returns A builder that constructs instances of entity type `TimeTypeProfile`.
   */
  static builder(): EntityBuilderType<TimeTypeProfile, TimeTypeProfileTypeForceMandatory> {
    return Entity.entityBuilder(TimeTypeProfile);
  }

  /**
   * Returns a request builder to construct requests for operations on the `TimeTypeProfile` entity type.
   * @returns A `TimeTypeProfile` request builder.
   */
  static requestBuilder(): TimeTypeProfileRequestBuilder {
    return new TimeTypeProfileRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `TimeTypeProfile`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `TimeTypeProfile`.
   */
  static customField(fieldName: string): CustomField<TimeTypeProfile> {
    return Entity.customFieldSelector(fieldName, TimeTypeProfile);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { AvailableTimeType, AvailableTimeTypeType } from './AvailableTimeType';
import { Country, CountryType } from './Country';
import { User, UserType } from './User';
import { TimeType, TimeTypeType } from './TimeType';
import { MdfLocalizedValue, MdfLocalizedValueType } from './MdfLocalizedValue';
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';
import { TimeAccountType, TimeAccountTypeType } from './TimeAccountType';
import { WfRequest, WfRequestType } from './WfRequest';

export interface TimeTypeProfileType {
  bookTimeOffInLieuOnTimeSheetApproval?: boolean;
  bookWorkingTimeOnTimeSheetApproval?: boolean;
  country?: string;
  createdBy?: string;
  createdDateTime?: Moment;
  defaultImportAttendanceTimeType?: string;
  externalCode: string;
  externalNameDeDe?: string;
  externalNameDefaultValue?: string;
  externalNameEnDebug?: string;
  externalNameEnGb?: string;
  externalNameEnUs?: string;
  externalNameEsEs?: string;
  externalNameEsMx?: string;
  externalNameFrCa?: string;
  externalNameFrFr?: string;
  externalNameItIt?: string;
  externalNameLocalized?: string;
  externalNameNlNl?: string;
  externalNamePtBr?: string;
  externalNameZhCn?: string;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  mainAttendanceTimeType?: string;
  mainBreakTimeType?: string;
  mainEssTimeType?: string;
  mdfSystemRecordStatus?: string;
  mdfSystemStatus?: string;
  timeAccountTypeForTimeOffInLieu?: string;
  timeAccountTypeForWorkingTimeAccount?: string;
  timeRecordingVariant?: string;
  availableTimeTypes: AvailableTimeTypeType[];
  countryNav: CountryType[];
  createdByNav: UserType;
  defaultImportAttendanceTimeTypeNav: TimeTypeType;
  externalNameTranslationTextNav: MdfLocalizedValueType[];
  lastModifiedByNav: UserType;
  mainAttendanceTimeTypeNav: TimeTypeType;
  mainBreakTimeTypeNav: TimeTypeType;
  mainEssTimeTypeNav: TimeTypeType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  mdfSystemStatusNav: MdfEnumValueType;
  timeAccountTypeForTimeOffInLieuNav: TimeAccountTypeType;
  timeAccountTypeForWorkingTimeAccountNav: TimeAccountTypeType;
  timeRecordingVariantNav: MdfEnumValueType;
  wfRequestNav: WfRequestType[];
}

export interface TimeTypeProfileTypeForceMandatory {
  bookTimeOffInLieuOnTimeSheetApproval: boolean;
  bookWorkingTimeOnTimeSheetApproval: boolean;
  country: string;
  createdBy: string;
  createdDateTime: Moment;
  defaultImportAttendanceTimeType: string;
  externalCode: string;
  externalNameDeDe: string;
  externalNameDefaultValue: string;
  externalNameEnDebug: string;
  externalNameEnGb: string;
  externalNameEnUs: string;
  externalNameEsEs: string;
  externalNameEsMx: string;
  externalNameFrCa: string;
  externalNameFrFr: string;
  externalNameItIt: string;
  externalNameLocalized: string;
  externalNameNlNl: string;
  externalNamePtBr: string;
  externalNameZhCn: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  mainAttendanceTimeType: string;
  mainBreakTimeType: string;
  mainEssTimeType: string;
  mdfSystemRecordStatus: string;
  mdfSystemStatus: string;
  timeAccountTypeForTimeOffInLieu: string;
  timeAccountTypeForWorkingTimeAccount: string;
  timeRecordingVariant: string;
  availableTimeTypes: AvailableTimeTypeType[];
  countryNav: CountryType[];
  createdByNav: UserType;
  defaultImportAttendanceTimeTypeNav: TimeTypeType;
  externalNameTranslationTextNav: MdfLocalizedValueType[];
  lastModifiedByNav: UserType;
  mainAttendanceTimeTypeNav: TimeTypeType;
  mainBreakTimeTypeNav: TimeTypeType;
  mainEssTimeTypeNav: TimeTypeType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  mdfSystemStatusNav: MdfEnumValueType;
  timeAccountTypeForTimeOffInLieuNav: TimeAccountTypeType;
  timeAccountTypeForWorkingTimeAccountNav: TimeAccountTypeType;
  timeRecordingVariantNav: MdfEnumValueType;
  wfRequestNav: WfRequestType[];
}

export namespace TimeTypeProfile {
  /**
   * Static representation of the [[bookTimeOffInLieuOnTimeSheetApproval]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BOOK_TIME_OFF_IN_LIEU_ON_TIME_SHEET_APPROVAL: BooleanField<TimeTypeProfile> = new BooleanField('bookTimeOffInLieuOnTimeSheetApproval', TimeTypeProfile, 'Edm.Boolean');
  /**
   * Static representation of the [[bookWorkingTimeOnTimeSheetApproval]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BOOK_WORKING_TIME_ON_TIME_SHEET_APPROVAL: BooleanField<TimeTypeProfile> = new BooleanField('bookWorkingTimeOnTimeSheetApproval', TimeTypeProfile, 'Edm.Boolean');
  /**
   * Static representation of the [[country]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY: StringField<TimeTypeProfile> = new StringField('country', TimeTypeProfile, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<TimeTypeProfile> = new StringField('createdBy', TimeTypeProfile, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<TimeTypeProfile> = new DateField('createdDateTime', TimeTypeProfile, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[defaultImportAttendanceTimeType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEFAULT_IMPORT_ATTENDANCE_TIME_TYPE: StringField<TimeTypeProfile> = new StringField('defaultImportAttendanceTimeType', TimeTypeProfile, 'Edm.String');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: StringField<TimeTypeProfile> = new StringField('externalCode', TimeTypeProfile, 'Edm.String');
  /**
   * Static representation of the [[externalNameDeDe]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_DE_DE: StringField<TimeTypeProfile> = new StringField('externalName_de_DE', TimeTypeProfile, 'Edm.String');
  /**
   * Static representation of the [[externalNameDefaultValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_DEFAULT_VALUE: StringField<TimeTypeProfile> = new StringField('externalName_defaultValue', TimeTypeProfile, 'Edm.String');
  /**
   * Static representation of the [[externalNameEnDebug]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_EN_DEBUG: StringField<TimeTypeProfile> = new StringField('externalName_en_DEBUG', TimeTypeProfile, 'Edm.String');
  /**
   * Static representation of the [[externalNameEnGb]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_EN_GB: StringField<TimeTypeProfile> = new StringField('externalName_en_GB', TimeTypeProfile, 'Edm.String');
  /**
   * Static representation of the [[externalNameEnUs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_EN_US: StringField<TimeTypeProfile> = new StringField('externalName_en_US', TimeTypeProfile, 'Edm.String');
  /**
   * Static representation of the [[externalNameEsEs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_ES_ES: StringField<TimeTypeProfile> = new StringField('externalName_es_ES', TimeTypeProfile, 'Edm.String');
  /**
   * Static representation of the [[externalNameEsMx]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_ES_MX: StringField<TimeTypeProfile> = new StringField('externalName_es_MX', TimeTypeProfile, 'Edm.String');
  /**
   * Static representation of the [[externalNameFrCa]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_FR_CA: StringField<TimeTypeProfile> = new StringField('externalName_fr_CA', TimeTypeProfile, 'Edm.String');
  /**
   * Static representation of the [[externalNameFrFr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_FR_FR: StringField<TimeTypeProfile> = new StringField('externalName_fr_FR', TimeTypeProfile, 'Edm.String');
  /**
   * Static representation of the [[externalNameItIt]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_IT_IT: StringField<TimeTypeProfile> = new StringField('externalName_it_IT', TimeTypeProfile, 'Edm.String');
  /**
   * Static representation of the [[externalNameLocalized]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_LOCALIZED: StringField<TimeTypeProfile> = new StringField('externalName_localized', TimeTypeProfile, 'Edm.String');
  /**
   * Static representation of the [[externalNameNlNl]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_NL_NL: StringField<TimeTypeProfile> = new StringField('externalName_nl_NL', TimeTypeProfile, 'Edm.String');
  /**
   * Static representation of the [[externalNamePtBr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_PT_BR: StringField<TimeTypeProfile> = new StringField('externalName_pt_BR', TimeTypeProfile, 'Edm.String');
  /**
   * Static representation of the [[externalNameZhCn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_ZH_CN: StringField<TimeTypeProfile> = new StringField('externalName_zh_CN', TimeTypeProfile, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<TimeTypeProfile> = new StringField('lastModifiedBy', TimeTypeProfile, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<TimeTypeProfile> = new DateField('lastModifiedDateTime', TimeTypeProfile, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mainAttendanceTimeType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MAIN_ATTENDANCE_TIME_TYPE: StringField<TimeTypeProfile> = new StringField('mainAttendanceTimeType', TimeTypeProfile, 'Edm.String');
  /**
   * Static representation of the [[mainBreakTimeType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MAIN_BREAK_TIME_TYPE: StringField<TimeTypeProfile> = new StringField('mainBreakTimeType', TimeTypeProfile, 'Edm.String');
  /**
   * Static representation of the [[mainEssTimeType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MAIN_ESS_TIME_TYPE: StringField<TimeTypeProfile> = new StringField('mainESSTimeType', TimeTypeProfile, 'Edm.String');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<TimeTypeProfile> = new StringField('mdfSystemRecordStatus', TimeTypeProfile, 'Edm.String');
  /**
   * Static representation of the [[mdfSystemStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_STATUS: StringField<TimeTypeProfile> = new StringField('mdfSystemStatus', TimeTypeProfile, 'Edm.String');
  /**
   * Static representation of the [[timeAccountTypeForTimeOffInLieu]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TIME_ACCOUNT_TYPE_FOR_TIME_OFF_IN_LIEU: StringField<TimeTypeProfile> = new StringField('timeAccountTypeForTimeOffInLieu', TimeTypeProfile, 'Edm.String');
  /**
   * Static representation of the [[timeAccountTypeForWorkingTimeAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TIME_ACCOUNT_TYPE_FOR_WORKING_TIME_ACCOUNT: StringField<TimeTypeProfile> = new StringField('timeAccountTypeForWorkingTimeAccount', TimeTypeProfile, 'Edm.String');
  /**
   * Static representation of the [[timeRecordingVariant]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TIME_RECORDING_VARIANT: StringField<TimeTypeProfile> = new StringField('timeRecordingVariant', TimeTypeProfile, 'Edm.String');
  /**
   * Static representation of the one-to-many navigation property [[availableTimeTypes]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const AVAILABLE_TIME_TYPES: Link<TimeTypeProfile, AvailableTimeType> = new Link('availableTimeTypes', TimeTypeProfile, AvailableTimeType);
  /**
   * Static representation of the one-to-many navigation property [[countryNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY_NAV: Link<TimeTypeProfile, Country> = new Link('countryNav', TimeTypeProfile, Country);
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<TimeTypeProfile, User> = new OneToOneLink('createdByNav', TimeTypeProfile, User);
  /**
   * Static representation of the one-to-one navigation property [[defaultImportAttendanceTimeTypeNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEFAULT_IMPORT_ATTENDANCE_TIME_TYPE_NAV: OneToOneLink<TimeTypeProfile, TimeType> = new OneToOneLink('defaultImportAttendanceTimeTypeNav', TimeTypeProfile, TimeType);
  /**
   * Static representation of the one-to-many navigation property [[externalNameTranslationTextNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_TRANSLATION_TEXT_NAV: Link<TimeTypeProfile, MdfLocalizedValue> = new Link('externalNameTranslationTextNav', TimeTypeProfile, MdfLocalizedValue);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<TimeTypeProfile, User> = new OneToOneLink('lastModifiedByNav', TimeTypeProfile, User);
  /**
   * Static representation of the one-to-one navigation property [[mainAttendanceTimeTypeNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MAIN_ATTENDANCE_TIME_TYPE_NAV: OneToOneLink<TimeTypeProfile, TimeType> = new OneToOneLink('mainAttendanceTimeTypeNav', TimeTypeProfile, TimeType);
  /**
   * Static representation of the one-to-one navigation property [[mainBreakTimeTypeNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MAIN_BREAK_TIME_TYPE_NAV: OneToOneLink<TimeTypeProfile, TimeType> = new OneToOneLink('mainBreakTimeTypeNav', TimeTypeProfile, TimeType);
  /**
   * Static representation of the one-to-one navigation property [[mainEssTimeTypeNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MAIN_ESS_TIME_TYPE_NAV: OneToOneLink<TimeTypeProfile, TimeType> = new OneToOneLink('mainESSTimeTypeNav', TimeTypeProfile, TimeType);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<TimeTypeProfile, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', TimeTypeProfile, MdfEnumValue);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_STATUS_NAV: OneToOneLink<TimeTypeProfile, MdfEnumValue> = new OneToOneLink('mdfSystemStatusNav', TimeTypeProfile, MdfEnumValue);
  /**
   * Static representation of the one-to-one navigation property [[timeAccountTypeForTimeOffInLieuNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TIME_ACCOUNT_TYPE_FOR_TIME_OFF_IN_LIEU_NAV: OneToOneLink<TimeTypeProfile, TimeAccountType> = new OneToOneLink('timeAccountTypeForTimeOffInLieuNav', TimeTypeProfile, TimeAccountType);
  /**
   * Static representation of the one-to-one navigation property [[timeAccountTypeForWorkingTimeAccountNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TIME_ACCOUNT_TYPE_FOR_WORKING_TIME_ACCOUNT_NAV: OneToOneLink<TimeTypeProfile, TimeAccountType> = new OneToOneLink('timeAccountTypeForWorkingTimeAccountNav', TimeTypeProfile, TimeAccountType);
  /**
   * Static representation of the one-to-one navigation property [[timeRecordingVariantNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TIME_RECORDING_VARIANT_NAV: OneToOneLink<TimeTypeProfile, MdfEnumValue> = new OneToOneLink('timeRecordingVariantNav', TimeTypeProfile, MdfEnumValue);
  /**
   * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WF_REQUEST_NAV: Link<TimeTypeProfile, WfRequest> = new Link('wfRequestNav', TimeTypeProfile, WfRequest);
  /**
   * All fields of the TimeTypeProfile entity.
   */
  export const _allFields: Array<BooleanField<TimeTypeProfile> | StringField<TimeTypeProfile> | DateField<TimeTypeProfile> | Link<TimeTypeProfile, AvailableTimeType> | Link<TimeTypeProfile, Country> | OneToOneLink<TimeTypeProfile, User> | OneToOneLink<TimeTypeProfile, TimeType> | Link<TimeTypeProfile, MdfLocalizedValue> | OneToOneLink<TimeTypeProfile, MdfEnumValue> | OneToOneLink<TimeTypeProfile, TimeAccountType> | Link<TimeTypeProfile, WfRequest>> = [
    TimeTypeProfile.BOOK_TIME_OFF_IN_LIEU_ON_TIME_SHEET_APPROVAL,
    TimeTypeProfile.BOOK_WORKING_TIME_ON_TIME_SHEET_APPROVAL,
    TimeTypeProfile.COUNTRY,
    TimeTypeProfile.CREATED_BY,
    TimeTypeProfile.CREATED_DATE_TIME,
    TimeTypeProfile.DEFAULT_IMPORT_ATTENDANCE_TIME_TYPE,
    TimeTypeProfile.EXTERNAL_CODE,
    TimeTypeProfile.EXTERNAL_NAME_DE_DE,
    TimeTypeProfile.EXTERNAL_NAME_DEFAULT_VALUE,
    TimeTypeProfile.EXTERNAL_NAME_EN_DEBUG,
    TimeTypeProfile.EXTERNAL_NAME_EN_GB,
    TimeTypeProfile.EXTERNAL_NAME_EN_US,
    TimeTypeProfile.EXTERNAL_NAME_ES_ES,
    TimeTypeProfile.EXTERNAL_NAME_ES_MX,
    TimeTypeProfile.EXTERNAL_NAME_FR_CA,
    TimeTypeProfile.EXTERNAL_NAME_FR_FR,
    TimeTypeProfile.EXTERNAL_NAME_IT_IT,
    TimeTypeProfile.EXTERNAL_NAME_LOCALIZED,
    TimeTypeProfile.EXTERNAL_NAME_NL_NL,
    TimeTypeProfile.EXTERNAL_NAME_PT_BR,
    TimeTypeProfile.EXTERNAL_NAME_ZH_CN,
    TimeTypeProfile.LAST_MODIFIED_BY,
    TimeTypeProfile.LAST_MODIFIED_DATE_TIME,
    TimeTypeProfile.MAIN_ATTENDANCE_TIME_TYPE,
    TimeTypeProfile.MAIN_BREAK_TIME_TYPE,
    TimeTypeProfile.MAIN_ESS_TIME_TYPE,
    TimeTypeProfile.MDF_SYSTEM_RECORD_STATUS,
    TimeTypeProfile.MDF_SYSTEM_STATUS,
    TimeTypeProfile.TIME_ACCOUNT_TYPE_FOR_TIME_OFF_IN_LIEU,
    TimeTypeProfile.TIME_ACCOUNT_TYPE_FOR_WORKING_TIME_ACCOUNT,
    TimeTypeProfile.TIME_RECORDING_VARIANT,
    TimeTypeProfile.AVAILABLE_TIME_TYPES,
    TimeTypeProfile.COUNTRY_NAV,
    TimeTypeProfile.CREATED_BY_NAV,
    TimeTypeProfile.DEFAULT_IMPORT_ATTENDANCE_TIME_TYPE_NAV,
    TimeTypeProfile.EXTERNAL_NAME_TRANSLATION_TEXT_NAV,
    TimeTypeProfile.LAST_MODIFIED_BY_NAV,
    TimeTypeProfile.MAIN_ATTENDANCE_TIME_TYPE_NAV,
    TimeTypeProfile.MAIN_BREAK_TIME_TYPE_NAV,
    TimeTypeProfile.MAIN_ESS_TIME_TYPE_NAV,
    TimeTypeProfile.MDF_SYSTEM_RECORD_STATUS_NAV,
    TimeTypeProfile.MDF_SYSTEM_STATUS_NAV,
    TimeTypeProfile.TIME_ACCOUNT_TYPE_FOR_TIME_OFF_IN_LIEU_NAV,
    TimeTypeProfile.TIME_ACCOUNT_TYPE_FOR_WORKING_TIME_ACCOUNT_NAV,
    TimeTypeProfile.TIME_RECORDING_VARIANT_NAV,
    TimeTypeProfile.WF_REQUEST_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<TimeTypeProfile> = new AllFields('*', TimeTypeProfile);
  /**
   * All key fields of the TimeTypeProfile entity.
   */
  export const _keyFields: Array<Selectable<TimeTypeProfile>> = [TimeTypeProfile.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property TimeTypeProfile.
   */
  export const _keys: { [keys: string]: Selectable<TimeTypeProfile> } = TimeTypeProfile._keyFields.reduce((acc: { [keys: string]: Selectable<TimeTypeProfile> }, field: Selectable<TimeTypeProfile>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
