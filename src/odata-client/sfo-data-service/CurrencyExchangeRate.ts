/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CurrencyExchangeRateRequestBuilder } from './CurrencyExchangeRateRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "CurrencyExchangeRate" of service "SFOData".
 */
export class CurrencyExchangeRate extends Entity implements CurrencyExchangeRateType {
  /**
   * Technical entity name for CurrencyExchangeRate.
   */
  static _entityName = 'CurrencyExchangeRate';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for CurrencyExchangeRate.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
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
   * Type of Currency Exchange Rate.
   * Maximum length: 128.
   * @nullable
   */
  currencyExchangeRateType?: string;
  /**
   * effectiveEndDate.
   * @nullable
   */
  effectiveEndDate?: Moment;
  /**
   * Effective as of.
   */
  effectiveStartDate!: Moment;
  /**
   * Status.
   * Maximum length: 255.
   * @nullable
   */
  effectiveStatus?: string;
  /**
   * Exchange Rate.
   * @nullable
   */
  exchangeRate?: BigNumber;
  /**
   * externalCode.
   * Maximum length: 128.
   */
  externalCode!: string;
  /**
   * Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameDeDe?: string;
  /**
   * Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameDefaultValue?: string;
  /**
   * Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameEnDebug?: string;
  /**
   * Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameEnGb?: string;
  /**
   * Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameEnUs?: string;
  /**
   * Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameEsEs?: string;
  /**
   * Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameEsMx?: string;
  /**
   * Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameFrCa?: string;
  /**
   * Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameFrFr?: string;
  /**
   * Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameItIt?: string;
  /**
   * Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameLocalized?: string;
  /**
   * Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameNlNl?: string;
  /**
   * Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNamePtBr?: string;
  /**
   * Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameZhCn?: string;
  /**
   * Last Modified By.
   * Maximum length: 100.
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
   * Source Currency.
   * Maximum length: 128.
   * @nullable
   */
  sourceCurrency?: string;
  /**
   * Target Currency.
   * Maximum length: 128.
   * @nullable
   */
  targetCurrency?: string;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  createdByNav!: User;
  /**
   * One-to-one navigation property to the [[PickListValueV2]] entity.
   */
  currencyExchangeRateTypeNav!: PickListValueV2;
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  effectiveStatusNav!: MdfEnumValue;
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
   * One-to-one navigation property to the [[Currency]] entity.
   */
  sourceCurrencyNav!: Currency;
  /**
   * One-to-one navigation property to the [[Currency]] entity.
   */
  targetCurrencyNav!: Currency;
  /**
   * One-to-many navigation property to the [[WfRequest]] entity.
   */
  wfRequestNav!: WfRequest[];

  /**
   * Returns an entity builder to construct instances `CurrencyExchangeRate`.
   * @returns A builder that constructs instances of entity type `CurrencyExchangeRate`.
   */
  static builder(): EntityBuilderType<CurrencyExchangeRate, CurrencyExchangeRateTypeForceMandatory> {
    return Entity.entityBuilder(CurrencyExchangeRate);
  }

  /**
   * Returns a request builder to construct requests for operations on the `CurrencyExchangeRate` entity type.
   * @returns A `CurrencyExchangeRate` request builder.
   */
  static requestBuilder(): CurrencyExchangeRateRequestBuilder {
    return new CurrencyExchangeRateRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `CurrencyExchangeRate`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `CurrencyExchangeRate`.
   */
  static customField(fieldName: string): CustomField<CurrencyExchangeRate> {
    return Entity.customFieldSelector(fieldName, CurrencyExchangeRate);
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
import { PickListValueV2, PickListValueV2Type } from './PickListValueV2';
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';
import { MdfLocalizedValue, MdfLocalizedValueType } from './MdfLocalizedValue';
import { Currency, CurrencyType } from './Currency';
import { WfRequest, WfRequestType } from './WfRequest';

export interface CurrencyExchangeRateType {
  createdBy?: string;
  createdDateTime?: Moment;
  currencyExchangeRateType?: string;
  effectiveEndDate?: Moment;
  effectiveStartDate: Moment;
  effectiveStatus?: string;
  exchangeRate?: BigNumber;
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
  mdfSystemRecordStatus?: string;
  sourceCurrency?: string;
  targetCurrency?: string;
  createdByNav: UserType;
  currencyExchangeRateTypeNav: PickListValueV2Type;
  effectiveStatusNav: MdfEnumValueType;
  externalNameTranslationTextNav: MdfLocalizedValueType[];
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  sourceCurrencyNav: CurrencyType;
  targetCurrencyNav: CurrencyType;
  wfRequestNav: WfRequestType[];
}

export interface CurrencyExchangeRateTypeForceMandatory {
  createdBy: string;
  createdDateTime: Moment;
  currencyExchangeRateType: string;
  effectiveEndDate: Moment;
  effectiveStartDate: Moment;
  effectiveStatus: string;
  exchangeRate: BigNumber;
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
  mdfSystemRecordStatus: string;
  sourceCurrency: string;
  targetCurrency: string;
  createdByNav: UserType;
  currencyExchangeRateTypeNav: PickListValueV2Type;
  effectiveStatusNav: MdfEnumValueType;
  externalNameTranslationTextNav: MdfLocalizedValueType[];
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  sourceCurrencyNav: CurrencyType;
  targetCurrencyNav: CurrencyType;
  wfRequestNav: WfRequestType[];
}

export namespace CurrencyExchangeRate {
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<CurrencyExchangeRate> = new StringField('createdBy', CurrencyExchangeRate, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<CurrencyExchangeRate> = new DateField('createdDateTime', CurrencyExchangeRate, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[currencyExchangeRateType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CURRENCY_EXCHANGE_RATE_TYPE: StringField<CurrencyExchangeRate> = new StringField('currencyExchangeRateType', CurrencyExchangeRate, 'Edm.String');
  /**
   * Static representation of the [[effectiveEndDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EFFECTIVE_END_DATE: DateField<CurrencyExchangeRate> = new DateField('effectiveEndDate', CurrencyExchangeRate, 'Edm.DateTime');
  /**
   * Static representation of the [[effectiveStartDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EFFECTIVE_START_DATE: DateField<CurrencyExchangeRate> = new DateField('effectiveStartDate', CurrencyExchangeRate, 'Edm.DateTime');
  /**
   * Static representation of the [[effectiveStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EFFECTIVE_STATUS: StringField<CurrencyExchangeRate> = new StringField('effectiveStatus', CurrencyExchangeRate, 'Edm.String');
  /**
   * Static representation of the [[exchangeRate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXCHANGE_RATE: BigNumberField<CurrencyExchangeRate> = new BigNumberField('exchangeRate', CurrencyExchangeRate, 'Edm.Decimal');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: StringField<CurrencyExchangeRate> = new StringField('externalCode', CurrencyExchangeRate, 'Edm.String');
  /**
   * Static representation of the [[externalNameDeDe]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_DE_DE: StringField<CurrencyExchangeRate> = new StringField('externalName_de_DE', CurrencyExchangeRate, 'Edm.String');
  /**
   * Static representation of the [[externalNameDefaultValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_DEFAULT_VALUE: StringField<CurrencyExchangeRate> = new StringField('externalName_defaultValue', CurrencyExchangeRate, 'Edm.String');
  /**
   * Static representation of the [[externalNameEnDebug]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_EN_DEBUG: StringField<CurrencyExchangeRate> = new StringField('externalName_en_DEBUG', CurrencyExchangeRate, 'Edm.String');
  /**
   * Static representation of the [[externalNameEnGb]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_EN_GB: StringField<CurrencyExchangeRate> = new StringField('externalName_en_GB', CurrencyExchangeRate, 'Edm.String');
  /**
   * Static representation of the [[externalNameEnUs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_EN_US: StringField<CurrencyExchangeRate> = new StringField('externalName_en_US', CurrencyExchangeRate, 'Edm.String');
  /**
   * Static representation of the [[externalNameEsEs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_ES_ES: StringField<CurrencyExchangeRate> = new StringField('externalName_es_ES', CurrencyExchangeRate, 'Edm.String');
  /**
   * Static representation of the [[externalNameEsMx]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_ES_MX: StringField<CurrencyExchangeRate> = new StringField('externalName_es_MX', CurrencyExchangeRate, 'Edm.String');
  /**
   * Static representation of the [[externalNameFrCa]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_FR_CA: StringField<CurrencyExchangeRate> = new StringField('externalName_fr_CA', CurrencyExchangeRate, 'Edm.String');
  /**
   * Static representation of the [[externalNameFrFr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_FR_FR: StringField<CurrencyExchangeRate> = new StringField('externalName_fr_FR', CurrencyExchangeRate, 'Edm.String');
  /**
   * Static representation of the [[externalNameItIt]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_IT_IT: StringField<CurrencyExchangeRate> = new StringField('externalName_it_IT', CurrencyExchangeRate, 'Edm.String');
  /**
   * Static representation of the [[externalNameLocalized]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_LOCALIZED: StringField<CurrencyExchangeRate> = new StringField('externalName_localized', CurrencyExchangeRate, 'Edm.String');
  /**
   * Static representation of the [[externalNameNlNl]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_NL_NL: StringField<CurrencyExchangeRate> = new StringField('externalName_nl_NL', CurrencyExchangeRate, 'Edm.String');
  /**
   * Static representation of the [[externalNamePtBr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_PT_BR: StringField<CurrencyExchangeRate> = new StringField('externalName_pt_BR', CurrencyExchangeRate, 'Edm.String');
  /**
   * Static representation of the [[externalNameZhCn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_ZH_CN: StringField<CurrencyExchangeRate> = new StringField('externalName_zh_CN', CurrencyExchangeRate, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<CurrencyExchangeRate> = new StringField('lastModifiedBy', CurrencyExchangeRate, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<CurrencyExchangeRate> = new DateField('lastModifiedDateTime', CurrencyExchangeRate, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<CurrencyExchangeRate> = new StringField('mdfSystemRecordStatus', CurrencyExchangeRate, 'Edm.String');
  /**
   * Static representation of the [[sourceCurrency]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SOURCE_CURRENCY: StringField<CurrencyExchangeRate> = new StringField('sourceCurrency', CurrencyExchangeRate, 'Edm.String');
  /**
   * Static representation of the [[targetCurrency]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TARGET_CURRENCY: StringField<CurrencyExchangeRate> = new StringField('targetCurrency', CurrencyExchangeRate, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<CurrencyExchangeRate, User> = new OneToOneLink('createdByNav', CurrencyExchangeRate, User);
  /**
   * Static representation of the one-to-one navigation property [[currencyExchangeRateTypeNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CURRENCY_EXCHANGE_RATE_TYPE_NAV: OneToOneLink<CurrencyExchangeRate, PickListValueV2> = new OneToOneLink('currencyExchangeRateTypeNav', CurrencyExchangeRate, PickListValueV2);
  /**
   * Static representation of the one-to-one navigation property [[effectiveStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EFFECTIVE_STATUS_NAV: OneToOneLink<CurrencyExchangeRate, MdfEnumValue> = new OneToOneLink('effectiveStatusNav', CurrencyExchangeRate, MdfEnumValue);
  /**
   * Static representation of the one-to-many navigation property [[externalNameTranslationTextNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_TRANSLATION_TEXT_NAV: Link<CurrencyExchangeRate, MdfLocalizedValue> = new Link('externalNameTranslationTextNav', CurrencyExchangeRate, MdfLocalizedValue);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<CurrencyExchangeRate, User> = new OneToOneLink('lastModifiedByNav', CurrencyExchangeRate, User);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<CurrencyExchangeRate, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', CurrencyExchangeRate, MdfEnumValue);
  /**
   * Static representation of the one-to-one navigation property [[sourceCurrencyNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SOURCE_CURRENCY_NAV: OneToOneLink<CurrencyExchangeRate, Currency> = new OneToOneLink('sourceCurrencyNav', CurrencyExchangeRate, Currency);
  /**
   * Static representation of the one-to-one navigation property [[targetCurrencyNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TARGET_CURRENCY_NAV: OneToOneLink<CurrencyExchangeRate, Currency> = new OneToOneLink('targetCurrencyNav', CurrencyExchangeRate, Currency);
  /**
   * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WF_REQUEST_NAV: Link<CurrencyExchangeRate, WfRequest> = new Link('wfRequestNav', CurrencyExchangeRate, WfRequest);
  /**
   * All fields of the CurrencyExchangeRate entity.
   */
  export const _allFields: Array<StringField<CurrencyExchangeRate> | DateField<CurrencyExchangeRate> | BigNumberField<CurrencyExchangeRate> | OneToOneLink<CurrencyExchangeRate, User> | OneToOneLink<CurrencyExchangeRate, PickListValueV2> | OneToOneLink<CurrencyExchangeRate, MdfEnumValue> | Link<CurrencyExchangeRate, MdfLocalizedValue> | OneToOneLink<CurrencyExchangeRate, Currency> | Link<CurrencyExchangeRate, WfRequest>> = [
    CurrencyExchangeRate.CREATED_BY,
    CurrencyExchangeRate.CREATED_DATE_TIME,
    CurrencyExchangeRate.CURRENCY_EXCHANGE_RATE_TYPE,
    CurrencyExchangeRate.EFFECTIVE_END_DATE,
    CurrencyExchangeRate.EFFECTIVE_START_DATE,
    CurrencyExchangeRate.EFFECTIVE_STATUS,
    CurrencyExchangeRate.EXCHANGE_RATE,
    CurrencyExchangeRate.EXTERNAL_CODE,
    CurrencyExchangeRate.EXTERNAL_NAME_DE_DE,
    CurrencyExchangeRate.EXTERNAL_NAME_DEFAULT_VALUE,
    CurrencyExchangeRate.EXTERNAL_NAME_EN_DEBUG,
    CurrencyExchangeRate.EXTERNAL_NAME_EN_GB,
    CurrencyExchangeRate.EXTERNAL_NAME_EN_US,
    CurrencyExchangeRate.EXTERNAL_NAME_ES_ES,
    CurrencyExchangeRate.EXTERNAL_NAME_ES_MX,
    CurrencyExchangeRate.EXTERNAL_NAME_FR_CA,
    CurrencyExchangeRate.EXTERNAL_NAME_FR_FR,
    CurrencyExchangeRate.EXTERNAL_NAME_IT_IT,
    CurrencyExchangeRate.EXTERNAL_NAME_LOCALIZED,
    CurrencyExchangeRate.EXTERNAL_NAME_NL_NL,
    CurrencyExchangeRate.EXTERNAL_NAME_PT_BR,
    CurrencyExchangeRate.EXTERNAL_NAME_ZH_CN,
    CurrencyExchangeRate.LAST_MODIFIED_BY,
    CurrencyExchangeRate.LAST_MODIFIED_DATE_TIME,
    CurrencyExchangeRate.MDF_SYSTEM_RECORD_STATUS,
    CurrencyExchangeRate.SOURCE_CURRENCY,
    CurrencyExchangeRate.TARGET_CURRENCY,
    CurrencyExchangeRate.CREATED_BY_NAV,
    CurrencyExchangeRate.CURRENCY_EXCHANGE_RATE_TYPE_NAV,
    CurrencyExchangeRate.EFFECTIVE_STATUS_NAV,
    CurrencyExchangeRate.EXTERNAL_NAME_TRANSLATION_TEXT_NAV,
    CurrencyExchangeRate.LAST_MODIFIED_BY_NAV,
    CurrencyExchangeRate.MDF_SYSTEM_RECORD_STATUS_NAV,
    CurrencyExchangeRate.SOURCE_CURRENCY_NAV,
    CurrencyExchangeRate.TARGET_CURRENCY_NAV,
    CurrencyExchangeRate.WF_REQUEST_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<CurrencyExchangeRate> = new AllFields('*', CurrencyExchangeRate);
  /**
   * All key fields of the CurrencyExchangeRate entity.
   */
  export const _keyFields: Array<Selectable<CurrencyExchangeRate>> = [CurrencyExchangeRate.EFFECTIVE_START_DATE, CurrencyExchangeRate.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property CurrencyExchangeRate.
   */
  export const _keys: { [keys: string]: Selectable<CurrencyExchangeRate> } = CurrencyExchangeRate._keyFields.reduce((acc: { [keys: string]: Selectable<CurrencyExchangeRate> }, field: Selectable<CurrencyExchangeRate>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
