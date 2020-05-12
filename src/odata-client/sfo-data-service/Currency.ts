/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CurrencyRequestBuilder } from './CurrencyRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "Currency" of service "SFOData".
 */
export class Currency extends Entity implements CurrencyType {
  /**
   * Technical entity name for Currency.
   */
  static _entityName = 'Currency';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for Currency.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Currency Code.
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
   * Default Decimals.
   * @nullable
   */
  defaultDecimals?: BigNumber;
  /**
   * Description.
   * Maximum length: 255.
   * @nullable
   */
  descriptionDeDe?: string;
  /**
   * Description.
   * Maximum length: 255.
   * @nullable
   */
  descriptionDefaultValue?: string;
  /**
   * Description.
   * Maximum length: 255.
   * @nullable
   */
  descriptionEnDebug?: string;
  /**
   * Description.
   * Maximum length: 255.
   * @nullable
   */
  descriptionEnGb?: string;
  /**
   * Description.
   * Maximum length: 255.
   * @nullable
   */
  descriptionEnUs?: string;
  /**
   * Description.
   * Maximum length: 255.
   * @nullable
   */
  descriptionEsEs?: string;
  /**
   * Description.
   * Maximum length: 255.
   * @nullable
   */
  descriptionEsMx?: string;
  /**
   * Description.
   * Maximum length: 255.
   * @nullable
   */
  descriptionFrCa?: string;
  /**
   * Description.
   * Maximum length: 255.
   * @nullable
   */
  descriptionFrFr?: string;
  /**
   * Description.
   * Maximum length: 255.
   * @nullable
   */
  descriptionItIt?: string;
  /**
   * Description.
   * Maximum length: 255.
   * @nullable
   */
  descriptionLocalized?: string;
  /**
   * Description.
   * Maximum length: 255.
   * @nullable
   */
  descriptionNlNl?: string;
  /**
   * Description.
   * Maximum length: 255.
   * @nullable
   */
  descriptionPtBr?: string;
  /**
   * Description.
   * Maximum length: 255.
   * @nullable
   */
  descriptionZhCn?: string;
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
   * Currency.
   * Maximum length: 255.
   * @nullable
   */
  externalNameDeDe?: string;
  /**
   * Currency.
   * Maximum length: 255.
   * @nullable
   */
  externalNameDefaultValue?: string;
  /**
   * Currency.
   * Maximum length: 255.
   * @nullable
   */
  externalNameEnDebug?: string;
  /**
   * Currency.
   * Maximum length: 255.
   * @nullable
   */
  externalNameEnGb?: string;
  /**
   * Currency.
   * Maximum length: 255.
   * @nullable
   */
  externalNameEnUs?: string;
  /**
   * Currency.
   * Maximum length: 255.
   * @nullable
   */
  externalNameEsEs?: string;
  /**
   * Currency.
   * Maximum length: 255.
   * @nullable
   */
  externalNameEsMx?: string;
  /**
   * Currency.
   * Maximum length: 255.
   * @nullable
   */
  externalNameFrCa?: string;
  /**
   * Currency.
   * Maximum length: 255.
   * @nullable
   */
  externalNameFrFr?: string;
  /**
   * Currency.
   * Maximum length: 255.
   * @nullable
   */
  externalNameItIt?: string;
  /**
   * Currency.
   * Maximum length: 255.
   * @nullable
   */
  externalNameLocalized?: string;
  /**
   * Currency.
   * Maximum length: 255.
   * @nullable
   */
  externalNameNlNl?: string;
  /**
   * Currency.
   * Maximum length: 255.
   * @nullable
   */
  externalNamePtBr?: string;
  /**
   * Currency.
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
   * Status.
   * Maximum length: 255.
   * @nullable
   */
  status?: string;
  /**
   * Symbol.
   * Maximum length: 255.
   * @nullable
   */
  symbol?: string;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  createdByNav!: User;
  /**
   * One-to-many navigation property to the [[MdfLocalizedValue]] entity.
   */
  descriptionTranslationTextNav!: MdfLocalizedValue[];
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
   * Returns an entity builder to construct instances `Currency`.
   * @returns A builder that constructs instances of entity type `Currency`.
   */
  static builder(): EntityBuilderType<Currency, CurrencyTypeForceMandatory> {
    return Entity.entityBuilder(Currency);
  }

  /**
   * Returns a request builder to construct requests for operations on the `Currency` entity type.
   * @returns A `Currency` request builder.
   */
  static requestBuilder(): CurrencyRequestBuilder {
    return new CurrencyRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `Currency`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `Currency`.
   */
  static customField(fieldName: string): CustomField<Currency> {
    return Entity.customFieldSelector(fieldName, Currency);
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
import { MdfLocalizedValue, MdfLocalizedValueType } from './MdfLocalizedValue';
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';
import { WfRequest, WfRequestType } from './WfRequest';

export interface CurrencyType {
  code: string;
  createdBy?: string;
  createdDateTime?: Moment;
  defaultDecimals?: BigNumber;
  descriptionDeDe?: string;
  descriptionDefaultValue?: string;
  descriptionEnDebug?: string;
  descriptionEnGb?: string;
  descriptionEnUs?: string;
  descriptionEsEs?: string;
  descriptionEsMx?: string;
  descriptionFrCa?: string;
  descriptionFrFr?: string;
  descriptionItIt?: string;
  descriptionLocalized?: string;
  descriptionNlNl?: string;
  descriptionPtBr?: string;
  descriptionZhCn?: string;
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
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  mdfSystemRecordStatus?: string;
  status?: string;
  symbol?: string;
  createdByNav: UserType;
  descriptionTranslationTextNav: MdfLocalizedValueType[];
  externalNameTranslationTextNav: MdfLocalizedValueType[];
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  statusNav: MdfEnumValueType;
  wfRequestNav: WfRequestType[];
}

export interface CurrencyTypeForceMandatory {
  code: string;
  createdBy: string;
  createdDateTime: Moment;
  defaultDecimals: BigNumber;
  descriptionDeDe: string;
  descriptionDefaultValue: string;
  descriptionEnDebug: string;
  descriptionEnGb: string;
  descriptionEnUs: string;
  descriptionEsEs: string;
  descriptionEsMx: string;
  descriptionFrCa: string;
  descriptionFrFr: string;
  descriptionItIt: string;
  descriptionLocalized: string;
  descriptionNlNl: string;
  descriptionPtBr: string;
  descriptionZhCn: string;
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
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  mdfSystemRecordStatus: string;
  status: string;
  symbol: string;
  createdByNav: UserType;
  descriptionTranslationTextNav: MdfLocalizedValueType[];
  externalNameTranslationTextNav: MdfLocalizedValueType[];
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  statusNav: MdfEnumValueType;
  wfRequestNav: WfRequestType[];
}

export namespace Currency {
  /**
   * Static representation of the [[code]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CODE: StringField<Currency> = new StringField('code', Currency, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<Currency> = new StringField('createdBy', Currency, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<Currency> = new DateField('createdDateTime', Currency, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[defaultDecimals]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEFAULT_DECIMALS: BigNumberField<Currency> = new BigNumberField('defaultDecimals', Currency, 'Edm.Int64');
  /**
   * Static representation of the [[descriptionDeDe]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_DE_DE: StringField<Currency> = new StringField('description_de_DE', Currency, 'Edm.String');
  /**
   * Static representation of the [[descriptionDefaultValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_DEFAULT_VALUE: StringField<Currency> = new StringField('description_defaultValue', Currency, 'Edm.String');
  /**
   * Static representation of the [[descriptionEnDebug]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_EN_DEBUG: StringField<Currency> = new StringField('description_en_DEBUG', Currency, 'Edm.String');
  /**
   * Static representation of the [[descriptionEnGb]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_EN_GB: StringField<Currency> = new StringField('description_en_GB', Currency, 'Edm.String');
  /**
   * Static representation of the [[descriptionEnUs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_EN_US: StringField<Currency> = new StringField('description_en_US', Currency, 'Edm.String');
  /**
   * Static representation of the [[descriptionEsEs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_ES_ES: StringField<Currency> = new StringField('description_es_ES', Currency, 'Edm.String');
  /**
   * Static representation of the [[descriptionEsMx]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_ES_MX: StringField<Currency> = new StringField('description_es_MX', Currency, 'Edm.String');
  /**
   * Static representation of the [[descriptionFrCa]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_FR_CA: StringField<Currency> = new StringField('description_fr_CA', Currency, 'Edm.String');
  /**
   * Static representation of the [[descriptionFrFr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_FR_FR: StringField<Currency> = new StringField('description_fr_FR', Currency, 'Edm.String');
  /**
   * Static representation of the [[descriptionItIt]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_IT_IT: StringField<Currency> = new StringField('description_it_IT', Currency, 'Edm.String');
  /**
   * Static representation of the [[descriptionLocalized]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_LOCALIZED: StringField<Currency> = new StringField('description_localized', Currency, 'Edm.String');
  /**
   * Static representation of the [[descriptionNlNl]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_NL_NL: StringField<Currency> = new StringField('description_nl_NL', Currency, 'Edm.String');
  /**
   * Static representation of the [[descriptionPtBr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_PT_BR: StringField<Currency> = new StringField('description_pt_BR', Currency, 'Edm.String');
  /**
   * Static representation of the [[descriptionZhCn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_ZH_CN: StringField<Currency> = new StringField('description_zh_CN', Currency, 'Edm.String');
  /**
   * Static representation of the [[effectiveEndDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EFFECTIVE_END_DATE: DateField<Currency> = new DateField('effectiveEndDate', Currency, 'Edm.DateTime');
  /**
   * Static representation of the [[effectiveStartDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EFFECTIVE_START_DATE: DateField<Currency> = new DateField('effectiveStartDate', Currency, 'Edm.DateTime');
  /**
   * Static representation of the [[externalNameDeDe]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_DE_DE: StringField<Currency> = new StringField('externalName_de_DE', Currency, 'Edm.String');
  /**
   * Static representation of the [[externalNameDefaultValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_DEFAULT_VALUE: StringField<Currency> = new StringField('externalName_defaultValue', Currency, 'Edm.String');
  /**
   * Static representation of the [[externalNameEnDebug]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_EN_DEBUG: StringField<Currency> = new StringField('externalName_en_DEBUG', Currency, 'Edm.String');
  /**
   * Static representation of the [[externalNameEnGb]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_EN_GB: StringField<Currency> = new StringField('externalName_en_GB', Currency, 'Edm.String');
  /**
   * Static representation of the [[externalNameEnUs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_EN_US: StringField<Currency> = new StringField('externalName_en_US', Currency, 'Edm.String');
  /**
   * Static representation of the [[externalNameEsEs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_ES_ES: StringField<Currency> = new StringField('externalName_es_ES', Currency, 'Edm.String');
  /**
   * Static representation of the [[externalNameEsMx]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_ES_MX: StringField<Currency> = new StringField('externalName_es_MX', Currency, 'Edm.String');
  /**
   * Static representation of the [[externalNameFrCa]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_FR_CA: StringField<Currency> = new StringField('externalName_fr_CA', Currency, 'Edm.String');
  /**
   * Static representation of the [[externalNameFrFr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_FR_FR: StringField<Currency> = new StringField('externalName_fr_FR', Currency, 'Edm.String');
  /**
   * Static representation of the [[externalNameItIt]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_IT_IT: StringField<Currency> = new StringField('externalName_it_IT', Currency, 'Edm.String');
  /**
   * Static representation of the [[externalNameLocalized]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_LOCALIZED: StringField<Currency> = new StringField('externalName_localized', Currency, 'Edm.String');
  /**
   * Static representation of the [[externalNameNlNl]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_NL_NL: StringField<Currency> = new StringField('externalName_nl_NL', Currency, 'Edm.String');
  /**
   * Static representation of the [[externalNamePtBr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_PT_BR: StringField<Currency> = new StringField('externalName_pt_BR', Currency, 'Edm.String');
  /**
   * Static representation of the [[externalNameZhCn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_ZH_CN: StringField<Currency> = new StringField('externalName_zh_CN', Currency, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<Currency> = new StringField('lastModifiedBy', Currency, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<Currency> = new DateField('lastModifiedDateTime', Currency, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<Currency> = new StringField('mdfSystemRecordStatus', Currency, 'Edm.String');
  /**
   * Static representation of the [[status]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS: StringField<Currency> = new StringField('status', Currency, 'Edm.String');
  /**
   * Static representation of the [[symbol]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SYMBOL: StringField<Currency> = new StringField('symbol', Currency, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<Currency, User> = new OneToOneLink('createdByNav', Currency, User);
  /**
   * Static representation of the one-to-many navigation property [[descriptionTranslationTextNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_TRANSLATION_TEXT_NAV: Link<Currency, MdfLocalizedValue> = new Link('descriptionTranslationTextNav', Currency, MdfLocalizedValue);
  /**
   * Static representation of the one-to-many navigation property [[externalNameTranslationTextNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_TRANSLATION_TEXT_NAV: Link<Currency, MdfLocalizedValue> = new Link('externalNameTranslationTextNav', Currency, MdfLocalizedValue);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<Currency, User> = new OneToOneLink('lastModifiedByNav', Currency, User);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<Currency, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', Currency, MdfEnumValue);
  /**
   * Static representation of the one-to-one navigation property [[statusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS_NAV: OneToOneLink<Currency, MdfEnumValue> = new OneToOneLink('statusNav', Currency, MdfEnumValue);
  /**
   * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WF_REQUEST_NAV: Link<Currency, WfRequest> = new Link('wfRequestNav', Currency, WfRequest);
  /**
   * All fields of the Currency entity.
   */
  export const _allFields: Array<StringField<Currency> | DateField<Currency> | BigNumberField<Currency> | OneToOneLink<Currency, User> | Link<Currency, MdfLocalizedValue> | OneToOneLink<Currency, MdfEnumValue> | Link<Currency, WfRequest>> = [
    Currency.CODE,
    Currency.CREATED_BY,
    Currency.CREATED_DATE_TIME,
    Currency.DEFAULT_DECIMALS,
    Currency.DESCRIPTION_DE_DE,
    Currency.DESCRIPTION_DEFAULT_VALUE,
    Currency.DESCRIPTION_EN_DEBUG,
    Currency.DESCRIPTION_EN_GB,
    Currency.DESCRIPTION_EN_US,
    Currency.DESCRIPTION_ES_ES,
    Currency.DESCRIPTION_ES_MX,
    Currency.DESCRIPTION_FR_CA,
    Currency.DESCRIPTION_FR_FR,
    Currency.DESCRIPTION_IT_IT,
    Currency.DESCRIPTION_LOCALIZED,
    Currency.DESCRIPTION_NL_NL,
    Currency.DESCRIPTION_PT_BR,
    Currency.DESCRIPTION_ZH_CN,
    Currency.EFFECTIVE_END_DATE,
    Currency.EFFECTIVE_START_DATE,
    Currency.EXTERNAL_NAME_DE_DE,
    Currency.EXTERNAL_NAME_DEFAULT_VALUE,
    Currency.EXTERNAL_NAME_EN_DEBUG,
    Currency.EXTERNAL_NAME_EN_GB,
    Currency.EXTERNAL_NAME_EN_US,
    Currency.EXTERNAL_NAME_ES_ES,
    Currency.EXTERNAL_NAME_ES_MX,
    Currency.EXTERNAL_NAME_FR_CA,
    Currency.EXTERNAL_NAME_FR_FR,
    Currency.EXTERNAL_NAME_IT_IT,
    Currency.EXTERNAL_NAME_LOCALIZED,
    Currency.EXTERNAL_NAME_NL_NL,
    Currency.EXTERNAL_NAME_PT_BR,
    Currency.EXTERNAL_NAME_ZH_CN,
    Currency.LAST_MODIFIED_BY,
    Currency.LAST_MODIFIED_DATE_TIME,
    Currency.MDF_SYSTEM_RECORD_STATUS,
    Currency.STATUS,
    Currency.SYMBOL,
    Currency.CREATED_BY_NAV,
    Currency.DESCRIPTION_TRANSLATION_TEXT_NAV,
    Currency.EXTERNAL_NAME_TRANSLATION_TEXT_NAV,
    Currency.LAST_MODIFIED_BY_NAV,
    Currency.MDF_SYSTEM_RECORD_STATUS_NAV,
    Currency.STATUS_NAV,
    Currency.WF_REQUEST_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<Currency> = new AllFields('*', Currency);
  /**
   * All key fields of the Currency entity.
   */
  export const _keyFields: Array<Selectable<Currency>> = [Currency.CODE, Currency.EFFECTIVE_START_DATE];
  /**
   * Mapping of all key field names to the respective static field property Currency.
   */
  export const _keys: { [keys: string]: Selectable<Currency> } = Currency._keyFields.reduce((acc: { [keys: string]: Selectable<Currency> }, field: Selectable<Currency>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
