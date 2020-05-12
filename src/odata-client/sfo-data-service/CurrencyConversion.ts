/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CurrencyConversionRequestBuilder } from './CurrencyConversionRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "CurrencyConversion" of service "SFOData".
 */
export class CurrencyConversion extends Entity implements CurrencyConversionType {
  /**
   * Technical entity name for CurrencyConversion.
   */
  static _entityName = 'CurrencyConversion';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for CurrencyConversion.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * baseCurrency.
   * Maximum length: 128.
   * @nullable
   */
  baseCurrency?: string;
  /**
   * code.
   * Maximum length: 128.
   */
  code!: string;
  /**
   * conversionRate.
   * @nullable
   */
  conversionRate?: BigNumber;
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
   * effectiveEndDate.
   * @nullable
   */
  effectiveEndDate?: Moment;
  /**
   * effectiveStartDate.
   */
  effectiveStartDate!: Moment;
  /**
   * effectiveStatus.
   * Maximum length: 255.
   * @nullable
   */
  effectiveStatus?: string;
  /**
   * exchangeRateType.
   * Maximum length: 128.
   * @nullable
   */
  exchangeRateType?: string;
  /**
   * externalName.
   * Maximum length: 255.
   * @nullable
   */
  externalNameDeDe?: string;
  /**
   * externalName.
   * Maximum length: 255.
   * @nullable
   */
  externalNameDefaultValue?: string;
  /**
   * externalName.
   * Maximum length: 255.
   * @nullable
   */
  externalNameEnDebug?: string;
  /**
   * externalName.
   * Maximum length: 255.
   * @nullable
   */
  externalNameEnGb?: string;
  /**
   * externalName.
   * Maximum length: 255.
   * @nullable
   */
  externalNameEnUs?: string;
  /**
   * externalName.
   * Maximum length: 255.
   * @nullable
   */
  externalNameEsEs?: string;
  /**
   * externalName.
   * Maximum length: 255.
   * @nullable
   */
  externalNameEsMx?: string;
  /**
   * externalName.
   * Maximum length: 255.
   * @nullable
   */
  externalNameFrCa?: string;
  /**
   * externalName.
   * Maximum length: 255.
   * @nullable
   */
  externalNameFrFr?: string;
  /**
   * externalName.
   * Maximum length: 255.
   * @nullable
   */
  externalNameItIt?: string;
  /**
   * externalName.
   * Maximum length: 255.
   * @nullable
   */
  externalNameLocalized?: string;
  /**
   * externalName.
   * Maximum length: 255.
   * @nullable
   */
  externalNameNlNl?: string;
  /**
   * externalName.
   * Maximum length: 255.
   * @nullable
   */
  externalNamePtBr?: string;
  /**
   * externalName.
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
   * toCurrency.
   * Maximum length: 128.
   * @nullable
   */
  toCurrency?: string;
  /**
   * One-to-one navigation property to the [[Currency]] entity.
   */
  baseCurrencyNav!: Currency;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  createdByNav!: User;
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  effectiveStatusNav!: MdfEnumValue;
  /**
   * One-to-one navigation property to the [[PickListValueV2]] entity.
   */
  exchangeRateTypeNav!: PickListValueV2;
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
  toCurrencyNav!: Currency;
  /**
   * One-to-many navigation property to the [[WfRequest]] entity.
   */
  wfRequestNav!: WfRequest[];

  /**
   * Returns an entity builder to construct instances `CurrencyConversion`.
   * @returns A builder that constructs instances of entity type `CurrencyConversion`.
   */
  static builder(): EntityBuilderType<CurrencyConversion, CurrencyConversionTypeForceMandatory> {
    return Entity.entityBuilder(CurrencyConversion);
  }

  /**
   * Returns a request builder to construct requests for operations on the `CurrencyConversion` entity type.
   * @returns A `CurrencyConversion` request builder.
   */
  static requestBuilder(): CurrencyConversionRequestBuilder {
    return new CurrencyConversionRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `CurrencyConversion`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `CurrencyConversion`.
   */
  static customField(fieldName: string): CustomField<CurrencyConversion> {
    return Entity.customFieldSelector(fieldName, CurrencyConversion);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { Currency, CurrencyType } from './Currency';
import { User, UserType } from './User';
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';
import { PickListValueV2, PickListValueV2Type } from './PickListValueV2';
import { MdfLocalizedValue, MdfLocalizedValueType } from './MdfLocalizedValue';
import { WfRequest, WfRequestType } from './WfRequest';

export interface CurrencyConversionType {
  baseCurrency?: string;
  code: string;
  conversionRate?: BigNumber;
  createdBy?: string;
  createdDateTime?: Moment;
  effectiveEndDate?: Moment;
  effectiveStartDate: Moment;
  effectiveStatus?: string;
  exchangeRateType?: string;
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
  toCurrency?: string;
  baseCurrencyNav: CurrencyType;
  createdByNav: UserType;
  effectiveStatusNav: MdfEnumValueType;
  exchangeRateTypeNav: PickListValueV2Type;
  externalNameTranslationTextNav: MdfLocalizedValueType[];
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  toCurrencyNav: CurrencyType;
  wfRequestNav: WfRequestType[];
}

export interface CurrencyConversionTypeForceMandatory {
  baseCurrency: string;
  code: string;
  conversionRate: BigNumber;
  createdBy: string;
  createdDateTime: Moment;
  effectiveEndDate: Moment;
  effectiveStartDate: Moment;
  effectiveStatus: string;
  exchangeRateType: string;
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
  toCurrency: string;
  baseCurrencyNav: CurrencyType;
  createdByNav: UserType;
  effectiveStatusNav: MdfEnumValueType;
  exchangeRateTypeNav: PickListValueV2Type;
  externalNameTranslationTextNav: MdfLocalizedValueType[];
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  toCurrencyNav: CurrencyType;
  wfRequestNav: WfRequestType[];
}

export namespace CurrencyConversion {
  /**
   * Static representation of the [[baseCurrency]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BASE_CURRENCY: StringField<CurrencyConversion> = new StringField('baseCurrency', CurrencyConversion, 'Edm.String');
  /**
   * Static representation of the [[code]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CODE: StringField<CurrencyConversion> = new StringField('code', CurrencyConversion, 'Edm.String');
  /**
   * Static representation of the [[conversionRate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONVERSION_RATE: BigNumberField<CurrencyConversion> = new BigNumberField('conversionRate', CurrencyConversion, 'Edm.Decimal');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<CurrencyConversion> = new StringField('createdBy', CurrencyConversion, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<CurrencyConversion> = new DateField('createdDateTime', CurrencyConversion, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[effectiveEndDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EFFECTIVE_END_DATE: DateField<CurrencyConversion> = new DateField('effectiveEndDate', CurrencyConversion, 'Edm.DateTime');
  /**
   * Static representation of the [[effectiveStartDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EFFECTIVE_START_DATE: DateField<CurrencyConversion> = new DateField('effectiveStartDate', CurrencyConversion, 'Edm.DateTime');
  /**
   * Static representation of the [[effectiveStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EFFECTIVE_STATUS: StringField<CurrencyConversion> = new StringField('effectiveStatus', CurrencyConversion, 'Edm.String');
  /**
   * Static representation of the [[exchangeRateType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXCHANGE_RATE_TYPE: StringField<CurrencyConversion> = new StringField('exchangeRateType', CurrencyConversion, 'Edm.String');
  /**
   * Static representation of the [[externalNameDeDe]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_DE_DE: StringField<CurrencyConversion> = new StringField('externalName_de_DE', CurrencyConversion, 'Edm.String');
  /**
   * Static representation of the [[externalNameDefaultValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_DEFAULT_VALUE: StringField<CurrencyConversion> = new StringField('externalName_defaultValue', CurrencyConversion, 'Edm.String');
  /**
   * Static representation of the [[externalNameEnDebug]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_EN_DEBUG: StringField<CurrencyConversion> = new StringField('externalName_en_DEBUG', CurrencyConversion, 'Edm.String');
  /**
   * Static representation of the [[externalNameEnGb]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_EN_GB: StringField<CurrencyConversion> = new StringField('externalName_en_GB', CurrencyConversion, 'Edm.String');
  /**
   * Static representation of the [[externalNameEnUs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_EN_US: StringField<CurrencyConversion> = new StringField('externalName_en_US', CurrencyConversion, 'Edm.String');
  /**
   * Static representation of the [[externalNameEsEs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_ES_ES: StringField<CurrencyConversion> = new StringField('externalName_es_ES', CurrencyConversion, 'Edm.String');
  /**
   * Static representation of the [[externalNameEsMx]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_ES_MX: StringField<CurrencyConversion> = new StringField('externalName_es_MX', CurrencyConversion, 'Edm.String');
  /**
   * Static representation of the [[externalNameFrCa]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_FR_CA: StringField<CurrencyConversion> = new StringField('externalName_fr_CA', CurrencyConversion, 'Edm.String');
  /**
   * Static representation of the [[externalNameFrFr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_FR_FR: StringField<CurrencyConversion> = new StringField('externalName_fr_FR', CurrencyConversion, 'Edm.String');
  /**
   * Static representation of the [[externalNameItIt]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_IT_IT: StringField<CurrencyConversion> = new StringField('externalName_it_IT', CurrencyConversion, 'Edm.String');
  /**
   * Static representation of the [[externalNameLocalized]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_LOCALIZED: StringField<CurrencyConversion> = new StringField('externalName_localized', CurrencyConversion, 'Edm.String');
  /**
   * Static representation of the [[externalNameNlNl]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_NL_NL: StringField<CurrencyConversion> = new StringField('externalName_nl_NL', CurrencyConversion, 'Edm.String');
  /**
   * Static representation of the [[externalNamePtBr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_PT_BR: StringField<CurrencyConversion> = new StringField('externalName_pt_BR', CurrencyConversion, 'Edm.String');
  /**
   * Static representation of the [[externalNameZhCn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_ZH_CN: StringField<CurrencyConversion> = new StringField('externalName_zh_CN', CurrencyConversion, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<CurrencyConversion> = new StringField('lastModifiedBy', CurrencyConversion, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<CurrencyConversion> = new DateField('lastModifiedDateTime', CurrencyConversion, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<CurrencyConversion> = new StringField('mdfSystemRecordStatus', CurrencyConversion, 'Edm.String');
  /**
   * Static representation of the [[toCurrency]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TO_CURRENCY: StringField<CurrencyConversion> = new StringField('toCurrency', CurrencyConversion, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[baseCurrencyNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BASE_CURRENCY_NAV: OneToOneLink<CurrencyConversion, Currency> = new OneToOneLink('baseCurrencyNav', CurrencyConversion, Currency);
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<CurrencyConversion, User> = new OneToOneLink('createdByNav', CurrencyConversion, User);
  /**
   * Static representation of the one-to-one navigation property [[effectiveStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EFFECTIVE_STATUS_NAV: OneToOneLink<CurrencyConversion, MdfEnumValue> = new OneToOneLink('effectiveStatusNav', CurrencyConversion, MdfEnumValue);
  /**
   * Static representation of the one-to-one navigation property [[exchangeRateTypeNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXCHANGE_RATE_TYPE_NAV: OneToOneLink<CurrencyConversion, PickListValueV2> = new OneToOneLink('exchangeRateTypeNav', CurrencyConversion, PickListValueV2);
  /**
   * Static representation of the one-to-many navigation property [[externalNameTranslationTextNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_TRANSLATION_TEXT_NAV: Link<CurrencyConversion, MdfLocalizedValue> = new Link('externalNameTranslationTextNav', CurrencyConversion, MdfLocalizedValue);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<CurrencyConversion, User> = new OneToOneLink('lastModifiedByNav', CurrencyConversion, User);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<CurrencyConversion, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', CurrencyConversion, MdfEnumValue);
  /**
   * Static representation of the one-to-one navigation property [[toCurrencyNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TO_CURRENCY_NAV: OneToOneLink<CurrencyConversion, Currency> = new OneToOneLink('toCurrencyNav', CurrencyConversion, Currency);
  /**
   * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WF_REQUEST_NAV: Link<CurrencyConversion, WfRequest> = new Link('wfRequestNav', CurrencyConversion, WfRequest);
  /**
   * All fields of the CurrencyConversion entity.
   */
  export const _allFields: Array<StringField<CurrencyConversion> | BigNumberField<CurrencyConversion> | DateField<CurrencyConversion> | OneToOneLink<CurrencyConversion, Currency> | OneToOneLink<CurrencyConversion, User> | OneToOneLink<CurrencyConversion, MdfEnumValue> | OneToOneLink<CurrencyConversion, PickListValueV2> | Link<CurrencyConversion, MdfLocalizedValue> | Link<CurrencyConversion, WfRequest>> = [
    CurrencyConversion.BASE_CURRENCY,
    CurrencyConversion.CODE,
    CurrencyConversion.CONVERSION_RATE,
    CurrencyConversion.CREATED_BY,
    CurrencyConversion.CREATED_DATE_TIME,
    CurrencyConversion.EFFECTIVE_END_DATE,
    CurrencyConversion.EFFECTIVE_START_DATE,
    CurrencyConversion.EFFECTIVE_STATUS,
    CurrencyConversion.EXCHANGE_RATE_TYPE,
    CurrencyConversion.EXTERNAL_NAME_DE_DE,
    CurrencyConversion.EXTERNAL_NAME_DEFAULT_VALUE,
    CurrencyConversion.EXTERNAL_NAME_EN_DEBUG,
    CurrencyConversion.EXTERNAL_NAME_EN_GB,
    CurrencyConversion.EXTERNAL_NAME_EN_US,
    CurrencyConversion.EXTERNAL_NAME_ES_ES,
    CurrencyConversion.EXTERNAL_NAME_ES_MX,
    CurrencyConversion.EXTERNAL_NAME_FR_CA,
    CurrencyConversion.EXTERNAL_NAME_FR_FR,
    CurrencyConversion.EXTERNAL_NAME_IT_IT,
    CurrencyConversion.EXTERNAL_NAME_LOCALIZED,
    CurrencyConversion.EXTERNAL_NAME_NL_NL,
    CurrencyConversion.EXTERNAL_NAME_PT_BR,
    CurrencyConversion.EXTERNAL_NAME_ZH_CN,
    CurrencyConversion.LAST_MODIFIED_BY,
    CurrencyConversion.LAST_MODIFIED_DATE_TIME,
    CurrencyConversion.MDF_SYSTEM_RECORD_STATUS,
    CurrencyConversion.TO_CURRENCY,
    CurrencyConversion.BASE_CURRENCY_NAV,
    CurrencyConversion.CREATED_BY_NAV,
    CurrencyConversion.EFFECTIVE_STATUS_NAV,
    CurrencyConversion.EXCHANGE_RATE_TYPE_NAV,
    CurrencyConversion.EXTERNAL_NAME_TRANSLATION_TEXT_NAV,
    CurrencyConversion.LAST_MODIFIED_BY_NAV,
    CurrencyConversion.MDF_SYSTEM_RECORD_STATUS_NAV,
    CurrencyConversion.TO_CURRENCY_NAV,
    CurrencyConversion.WF_REQUEST_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<CurrencyConversion> = new AllFields('*', CurrencyConversion);
  /**
   * All key fields of the CurrencyConversion entity.
   */
  export const _keyFields: Array<Selectable<CurrencyConversion>> = [CurrencyConversion.CODE, CurrencyConversion.EFFECTIVE_START_DATE];
  /**
   * Mapping of all key field names to the respective static field property CurrencyConversion.
   */
  export const _keys: { [keys: string]: Selectable<CurrencyConversion> } = CurrencyConversion._keyFields.reduce((acc: { [keys: string]: Selectable<CurrencyConversion> }, field: Selectable<CurrencyConversion>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
