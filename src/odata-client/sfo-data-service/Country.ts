/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CountryRequestBuilder } from './CountryRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "Country" of service "SFOData".
 */
export class Country extends Entity implements CountryType {
  /**
   * Technical entity name for Country.
   */
  static _entityName = 'Country';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for Country.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Country/Region Code (3 char).
   * Maximum length: 128.
   */
  code!: string;
  /**
   * Created By.
   * Maximum length: 100.
   * @nullable
   */
  createdBy?: string;
  /**
   * Created On.
   * @nullable
   */
  createdDateTime?: Moment;
  /**
   * Currency.
   * Maximum length: 128.
   * @nullable
   */
  currency?: string;
  /**
   * Effective until.
   * @nullable
   */
  effectiveEndDate?: Moment;
  /**
   * Effective as of.
   */
  effectiveStartDate!: Moment;
  /**
   * Country/Region.
   * Maximum length: 255.
   * @nullable
   */
  externalNameDeDe?: string;
  /**
   * Country/Region.
   * Maximum length: 255.
   * @nullable
   */
  externalNameDefaultValue?: string;
  /**
   * Country/Region.
   * Maximum length: 255.
   * @nullable
   */
  externalNameEnDebug?: string;
  /**
   * Country/Region.
   * Maximum length: 255.
   * @nullable
   */
  externalNameEnGb?: string;
  /**
   * Country/Region.
   * Maximum length: 255.
   * @nullable
   */
  externalNameEnUs?: string;
  /**
   * Country/Region.
   * Maximum length: 255.
   * @nullable
   */
  externalNameEsEs?: string;
  /**
   * Country/Region.
   * Maximum length: 255.
   * @nullable
   */
  externalNameEsMx?: string;
  /**
   * Country/Region.
   * Maximum length: 255.
   * @nullable
   */
  externalNameFrCa?: string;
  /**
   * Country/Region.
   * Maximum length: 255.
   * @nullable
   */
  externalNameFrFr?: string;
  /**
   * Country/Region.
   * Maximum length: 255.
   * @nullable
   */
  externalNameItIt?: string;
  /**
   * Country/Region.
   * Maximum length: 255.
   * @nullable
   */
  externalNameLocalized?: string;
  /**
   * Country/Region.
   * Maximum length: 255.
   * @nullable
   */
  externalNameNlNl?: string;
  /**
   * Country/Region.
   * Maximum length: 255.
   * @nullable
   */
  externalNamePtBr?: string;
  /**
   * Country/Region.
   * Maximum length: 255.
   * @nullable
   */
  externalNameZhCn?: string;
  /**
   * Data Retention Enabled.
   * @nullable
   */
  isDrmEnabled?: boolean;
  /**
   * isSetByMigrate.
   * @nullable
   */
  isSetByMigrate?: boolean;
  /**
   * Last Modified By.
   * Maximum length: 100.
   * @nullable
   */
  lastModifiedBy?: string;
  /**
   * Last Modified Date.
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
   * Country/Region Code (numeric-3).
   * @nullable
   */
  numericCountryCode?: BigNumber;
  /**
   * Status.
   * Maximum length: 255.
   * @nullable
   */
  status?: string;
  /**
   * territoryId.
   * @nullable
   */
  territoryId?: BigNumber;
  /**
   * Country/Region Code (2 char).
   * Maximum length: 255.
   * @nullable
   */
  twoCharCountryCode?: string;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  createdByNav!: User;
  /**
   * One-to-one navigation property to the [[Currency]] entity.
   */
  currencyNav!: Currency;
  /**
   * One-to-many navigation property to the [[FoEventReason]] entity.
   */
  custFowEventReason!: FoEventReason[];
  /**
   * One-to-many navigation property to the [[MdfLocalizedValue]] entity.
   */
  externalNameTranslationTextNav!: MdfLocalizedValue[];
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  lastModifiedByNav!: User;
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  mdfSystemRecordStatusNav!: MdfEnumValue;
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  statusNav!: MdfEnumValue;
  /**
   * One-to-many navigation property to the [[WfRequest]] entity.
   */
  wfRequestNav!: WfRequest[];

  /**
   * Returns an entity builder to construct instances `Country`.
   * @returns A builder that constructs instances of entity type `Country`.
   */
  static builder(): EntityBuilderType<Country, CountryTypeForceMandatory> {
    return Entity.entityBuilder(Country);
  }

  /**
   * Returns a request builder to construct requests for operations on the `Country` entity type.
   * @returns A `Country` request builder.
   */
  static requestBuilder(): CountryRequestBuilder {
    return new CountryRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `Country`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `Country`.
   */
  static customField(fieldName: string): CustomField<Country> {
    return Entity.customFieldSelector(fieldName, Country);
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
import { Currency, CurrencyType } from './Currency';
import { FoEventReason, FoEventReasonType } from './FoEventReason';
import { MdfLocalizedValue, MdfLocalizedValueType } from './MdfLocalizedValue';
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';
import { WfRequest, WfRequestType } from './WfRequest';

export interface CountryType {
  code: string;
  createdBy?: string;
  createdDateTime?: Moment;
  currency?: string;
  effectiveEndDate?: Moment;
  effectiveStartDate: Moment;
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
  isDrmEnabled?: boolean;
  isSetByMigrate?: boolean;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  mdfSystemRecordStatus?: string;
  numericCountryCode?: BigNumber;
  status?: string;
  territoryId?: BigNumber;
  twoCharCountryCode?: string;
  createdByNav: UserType;
  currencyNav: CurrencyType;
  custFowEventReason: FoEventReasonType[];
  externalNameTranslationTextNav: MdfLocalizedValueType[];
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  statusNav: MdfEnumValueType;
  wfRequestNav: WfRequestType[];
}

export interface CountryTypeForceMandatory {
  code: string;
  createdBy: string;
  createdDateTime: Moment;
  currency: string;
  effectiveEndDate: Moment;
  effectiveStartDate: Moment;
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
  isDrmEnabled: boolean;
  isSetByMigrate: boolean;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  mdfSystemRecordStatus: string;
  numericCountryCode: BigNumber;
  status: string;
  territoryId: BigNumber;
  twoCharCountryCode: string;
  createdByNav: UserType;
  currencyNav: CurrencyType;
  custFowEventReason: FoEventReasonType[];
  externalNameTranslationTextNav: MdfLocalizedValueType[];
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  statusNav: MdfEnumValueType;
  wfRequestNav: WfRequestType[];
}

export namespace Country {
  /**
   * Static representation of the [[code]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CODE: StringField<Country> = new StringField('code', Country, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<Country> = new StringField('createdBy', Country, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<Country> = new DateField('createdDateTime', Country, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[currency]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CURRENCY: StringField<Country> = new StringField('currency', Country, 'Edm.String');
  /**
   * Static representation of the [[effectiveEndDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EFFECTIVE_END_DATE: DateField<Country> = new DateField('effectiveEndDate', Country, 'Edm.DateTime');
  /**
   * Static representation of the [[effectiveStartDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EFFECTIVE_START_DATE: DateField<Country> = new DateField('effectiveStartDate', Country, 'Edm.DateTime');
  /**
   * Static representation of the [[externalNameDeDe]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_DE_DE: StringField<Country> = new StringField('externalName_de_DE', Country, 'Edm.String');
  /**
   * Static representation of the [[externalNameDefaultValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_DEFAULT_VALUE: StringField<Country> = new StringField('externalName_defaultValue', Country, 'Edm.String');
  /**
   * Static representation of the [[externalNameEnDebug]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_EN_DEBUG: StringField<Country> = new StringField('externalName_en_DEBUG', Country, 'Edm.String');
  /**
   * Static representation of the [[externalNameEnGb]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_EN_GB: StringField<Country> = new StringField('externalName_en_GB', Country, 'Edm.String');
  /**
   * Static representation of the [[externalNameEnUs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_EN_US: StringField<Country> = new StringField('externalName_en_US', Country, 'Edm.String');
  /**
   * Static representation of the [[externalNameEsEs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_ES_ES: StringField<Country> = new StringField('externalName_es_ES', Country, 'Edm.String');
  /**
   * Static representation of the [[externalNameEsMx]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_ES_MX: StringField<Country> = new StringField('externalName_es_MX', Country, 'Edm.String');
  /**
   * Static representation of the [[externalNameFrCa]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_FR_CA: StringField<Country> = new StringField('externalName_fr_CA', Country, 'Edm.String');
  /**
   * Static representation of the [[externalNameFrFr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_FR_FR: StringField<Country> = new StringField('externalName_fr_FR', Country, 'Edm.String');
  /**
   * Static representation of the [[externalNameItIt]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_IT_IT: StringField<Country> = new StringField('externalName_it_IT', Country, 'Edm.String');
  /**
   * Static representation of the [[externalNameLocalized]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_LOCALIZED: StringField<Country> = new StringField('externalName_localized', Country, 'Edm.String');
  /**
   * Static representation of the [[externalNameNlNl]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_NL_NL: StringField<Country> = new StringField('externalName_nl_NL', Country, 'Edm.String');
  /**
   * Static representation of the [[externalNamePtBr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_PT_BR: StringField<Country> = new StringField('externalName_pt_BR', Country, 'Edm.String');
  /**
   * Static representation of the [[externalNameZhCn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_ZH_CN: StringField<Country> = new StringField('externalName_zh_CN', Country, 'Edm.String');
  /**
   * Static representation of the [[isDrmEnabled]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_DRM_ENABLED: BooleanField<Country> = new BooleanField('isDRMEnabled', Country, 'Edm.Boolean');
  /**
   * Static representation of the [[isSetByMigrate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_SET_BY_MIGRATE: BooleanField<Country> = new BooleanField('isSetByMigrate', Country, 'Edm.Boolean');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<Country> = new StringField('lastModifiedBy', Country, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<Country> = new DateField('lastModifiedDateTime', Country, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<Country> = new StringField('mdfSystemRecordStatus', Country, 'Edm.String');
  /**
   * Static representation of the [[numericCountryCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NUMERIC_COUNTRY_CODE: BigNumberField<Country> = new BigNumberField('numericCountryCode', Country, 'Edm.Int64');
  /**
   * Static representation of the [[status]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS: StringField<Country> = new StringField('status', Country, 'Edm.String');
  /**
   * Static representation of the [[territoryId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TERRITORY_ID: BigNumberField<Country> = new BigNumberField('territoryId', Country, 'Edm.Int64');
  /**
   * Static representation of the [[twoCharCountryCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TWO_CHAR_COUNTRY_CODE: StringField<Country> = new StringField('twoCharCountryCode', Country, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<Country, User> = new OneToOneLink('createdByNav', Country, User);
  /**
   * Static representation of the one-to-one navigation property [[currencyNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CURRENCY_NAV: OneToOneLink<Country, Currency> = new OneToOneLink('currencyNav', Country, Currency);
  /**
   * Static representation of the one-to-many navigation property [[custFowEventReason]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUST_FOW_EVENT_REASON: Link<Country, FoEventReason> = new Link('cust_FOWEventReason', Country, FoEventReason);
  /**
   * Static representation of the one-to-many navigation property [[externalNameTranslationTextNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_TRANSLATION_TEXT_NAV: Link<Country, MdfLocalizedValue> = new Link('externalNameTranslationTextNav', Country, MdfLocalizedValue);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<Country, User> = new OneToOneLink('lastModifiedByNav', Country, User);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<Country, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', Country, MdfEnumValue);
  /**
   * Static representation of the one-to-one navigation property [[statusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS_NAV: OneToOneLink<Country, MdfEnumValue> = new OneToOneLink('statusNav', Country, MdfEnumValue);
  /**
   * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WF_REQUEST_NAV: Link<Country, WfRequest> = new Link('wfRequestNav', Country, WfRequest);
  /**
   * All fields of the Country entity.
   */
  export const _allFields: Array<StringField<Country> | DateField<Country> | BooleanField<Country> | BigNumberField<Country> | OneToOneLink<Country, User> | OneToOneLink<Country, Currency> | Link<Country, FoEventReason> | Link<Country, MdfLocalizedValue> | OneToOneLink<Country, MdfEnumValue> | Link<Country, WfRequest>> = [
    Country.CODE,
    Country.CREATED_BY,
    Country.CREATED_DATE_TIME,
    Country.CURRENCY,
    Country.EFFECTIVE_END_DATE,
    Country.EFFECTIVE_START_DATE,
    Country.EXTERNAL_NAME_DE_DE,
    Country.EXTERNAL_NAME_DEFAULT_VALUE,
    Country.EXTERNAL_NAME_EN_DEBUG,
    Country.EXTERNAL_NAME_EN_GB,
    Country.EXTERNAL_NAME_EN_US,
    Country.EXTERNAL_NAME_ES_ES,
    Country.EXTERNAL_NAME_ES_MX,
    Country.EXTERNAL_NAME_FR_CA,
    Country.EXTERNAL_NAME_FR_FR,
    Country.EXTERNAL_NAME_IT_IT,
    Country.EXTERNAL_NAME_LOCALIZED,
    Country.EXTERNAL_NAME_NL_NL,
    Country.EXTERNAL_NAME_PT_BR,
    Country.EXTERNAL_NAME_ZH_CN,
    Country.IS_DRM_ENABLED,
    Country.IS_SET_BY_MIGRATE,
    Country.LAST_MODIFIED_BY,
    Country.LAST_MODIFIED_DATE_TIME,
    Country.MDF_SYSTEM_RECORD_STATUS,
    Country.NUMERIC_COUNTRY_CODE,
    Country.STATUS,
    Country.TERRITORY_ID,
    Country.TWO_CHAR_COUNTRY_CODE,
    Country.CREATED_BY_NAV,
    Country.CURRENCY_NAV,
    Country.CUST_FOW_EVENT_REASON,
    Country.EXTERNAL_NAME_TRANSLATION_TEXT_NAV,
    Country.LAST_MODIFIED_BY_NAV,
    Country.MDF_SYSTEM_RECORD_STATUS_NAV,
    Country.STATUS_NAV,
    Country.WF_REQUEST_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<Country> = new AllFields('*', Country);
  /**
   * All key fields of the Country entity.
   */
  export const _keyFields: Array<Selectable<Country>> = [Country.CODE, Country.EFFECTIVE_START_DATE];
  /**
   * Mapping of all key field names to the respective static field property Country.
   */
  export const _keys: { [keys: string]: Selectable<Country> } = Country._keyFields.reduce((acc: { [keys: string]: Selectable<Country> }, field: Selectable<Country>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
