/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AbsenceCountingMethodRequestBuilder } from './AbsenceCountingMethodRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "AbsenceCountingMethod" of service "SFOData".
 */
export class AbsenceCountingMethod extends Entity implements AbsenceCountingMethodType {
  /**
   * Technical entity name for AbsenceCountingMethod.
   */
  static _entityName = 'AbsenceCountingMethod';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for AbsenceCountingMethod.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Calculation based on.
   * Maximum length: 255.
   * @nullable
   */
  base?: string;
  /**
   * Consider Holidays.
   * @nullable
   */
  considerHolidays?: boolean;
  /**
   * Country/Region.
   * Maximum length: 128.
   * @nullable
   */
  country?: string;
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
   * Deduction Factor.
   * @nullable
   */
  deductionFactor?: BigNumber;
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
   * Friday.
   * @nullable
   */
  friday?: boolean;
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
   * Monday.
   * @nullable
   */
  monday?: boolean;
  /**
   * Saturday.
   * @nullable
   */
  saturday?: boolean;
  /**
   * Sunday.
   * @nullable
   */
  sunday?: boolean;
  /**
   * Thursday.
   * @nullable
   */
  thursday?: boolean;
  /**
   * Tuesday.
   * @nullable
   */
  tuesday?: boolean;
  /**
   * Wednesday.
   * @nullable
   */
  wednesday?: boolean;
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  baseNav!: MdfEnumValue;
  /**
   * One-to-many navigation property to the [[Country]] entity.
   */
  countryNav!: Country[];
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  createdByNav!: User;
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
   * One-to-many navigation property to the [[WfRequest]] entity.
   */
  wfRequestNav!: WfRequest[];

  /**
   * Returns an entity builder to construct instances `AbsenceCountingMethod`.
   * @returns A builder that constructs instances of entity type `AbsenceCountingMethod`.
   */
  static builder(): EntityBuilderType<AbsenceCountingMethod, AbsenceCountingMethodTypeForceMandatory> {
    return Entity.entityBuilder(AbsenceCountingMethod);
  }

  /**
   * Returns a request builder to construct requests for operations on the `AbsenceCountingMethod` entity type.
   * @returns A `AbsenceCountingMethod` request builder.
   */
  static requestBuilder(): AbsenceCountingMethodRequestBuilder {
    return new AbsenceCountingMethodRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `AbsenceCountingMethod`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `AbsenceCountingMethod`.
   */
  static customField(fieldName: string): CustomField<AbsenceCountingMethod> {
    return Entity.customFieldSelector(fieldName, AbsenceCountingMethod);
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
import { Country, CountryType } from './Country';
import { User, UserType } from './User';
import { MdfLocalizedValue, MdfLocalizedValueType } from './MdfLocalizedValue';
import { WfRequest, WfRequestType } from './WfRequest';

export interface AbsenceCountingMethodType {
  base?: string;
  considerHolidays?: boolean;
  country?: string;
  createdBy?: string;
  createdDateTime?: Moment;
  deductionFactor?: BigNumber;
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
  friday?: boolean;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  mdfSystemRecordStatus?: string;
  monday?: boolean;
  saturday?: boolean;
  sunday?: boolean;
  thursday?: boolean;
  tuesday?: boolean;
  wednesday?: boolean;
  baseNav: MdfEnumValueType;
  countryNav: CountryType[];
  createdByNav: UserType;
  externalNameTranslationTextNav: MdfLocalizedValueType[];
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  wfRequestNav: WfRequestType[];
}

export interface AbsenceCountingMethodTypeForceMandatory {
  base: string;
  considerHolidays: boolean;
  country: string;
  createdBy: string;
  createdDateTime: Moment;
  deductionFactor: BigNumber;
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
  friday: boolean;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  mdfSystemRecordStatus: string;
  monday: boolean;
  saturday: boolean;
  sunday: boolean;
  thursday: boolean;
  tuesday: boolean;
  wednesday: boolean;
  baseNav: MdfEnumValueType;
  countryNav: CountryType[];
  createdByNav: UserType;
  externalNameTranslationTextNav: MdfLocalizedValueType[];
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  wfRequestNav: WfRequestType[];
}

export namespace AbsenceCountingMethod {
  /**
   * Static representation of the [[base]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BASE: StringField<AbsenceCountingMethod> = new StringField('base', AbsenceCountingMethod, 'Edm.String');
  /**
   * Static representation of the [[considerHolidays]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONSIDER_HOLIDAYS: BooleanField<AbsenceCountingMethod> = new BooleanField('considerHolidays', AbsenceCountingMethod, 'Edm.Boolean');
  /**
   * Static representation of the [[country]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY: StringField<AbsenceCountingMethod> = new StringField('country', AbsenceCountingMethod, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<AbsenceCountingMethod> = new StringField('createdBy', AbsenceCountingMethod, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<AbsenceCountingMethod> = new DateField('createdDateTime', AbsenceCountingMethod, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[deductionFactor]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEDUCTION_FACTOR: BigNumberField<AbsenceCountingMethod> = new BigNumberField('deductionFactor', AbsenceCountingMethod, 'Edm.Decimal');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: StringField<AbsenceCountingMethod> = new StringField('externalCode', AbsenceCountingMethod, 'Edm.String');
  /**
   * Static representation of the [[externalNameDeDe]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_DE_DE: StringField<AbsenceCountingMethod> = new StringField('externalName_de_DE', AbsenceCountingMethod, 'Edm.String');
  /**
   * Static representation of the [[externalNameDefaultValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_DEFAULT_VALUE: StringField<AbsenceCountingMethod> = new StringField('externalName_defaultValue', AbsenceCountingMethod, 'Edm.String');
  /**
   * Static representation of the [[externalNameEnDebug]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_EN_DEBUG: StringField<AbsenceCountingMethod> = new StringField('externalName_en_DEBUG', AbsenceCountingMethod, 'Edm.String');
  /**
   * Static representation of the [[externalNameEnGb]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_EN_GB: StringField<AbsenceCountingMethod> = new StringField('externalName_en_GB', AbsenceCountingMethod, 'Edm.String');
  /**
   * Static representation of the [[externalNameEnUs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_EN_US: StringField<AbsenceCountingMethod> = new StringField('externalName_en_US', AbsenceCountingMethod, 'Edm.String');
  /**
   * Static representation of the [[externalNameEsEs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_ES_ES: StringField<AbsenceCountingMethod> = new StringField('externalName_es_ES', AbsenceCountingMethod, 'Edm.String');
  /**
   * Static representation of the [[externalNameEsMx]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_ES_MX: StringField<AbsenceCountingMethod> = new StringField('externalName_es_MX', AbsenceCountingMethod, 'Edm.String');
  /**
   * Static representation of the [[externalNameFrCa]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_FR_CA: StringField<AbsenceCountingMethod> = new StringField('externalName_fr_CA', AbsenceCountingMethod, 'Edm.String');
  /**
   * Static representation of the [[externalNameFrFr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_FR_FR: StringField<AbsenceCountingMethod> = new StringField('externalName_fr_FR', AbsenceCountingMethod, 'Edm.String');
  /**
   * Static representation of the [[externalNameItIt]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_IT_IT: StringField<AbsenceCountingMethod> = new StringField('externalName_it_IT', AbsenceCountingMethod, 'Edm.String');
  /**
   * Static representation of the [[externalNameLocalized]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_LOCALIZED: StringField<AbsenceCountingMethod> = new StringField('externalName_localized', AbsenceCountingMethod, 'Edm.String');
  /**
   * Static representation of the [[externalNameNlNl]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_NL_NL: StringField<AbsenceCountingMethod> = new StringField('externalName_nl_NL', AbsenceCountingMethod, 'Edm.String');
  /**
   * Static representation of the [[externalNamePtBr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_PT_BR: StringField<AbsenceCountingMethod> = new StringField('externalName_pt_BR', AbsenceCountingMethod, 'Edm.String');
  /**
   * Static representation of the [[externalNameZhCn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_ZH_CN: StringField<AbsenceCountingMethod> = new StringField('externalName_zh_CN', AbsenceCountingMethod, 'Edm.String');
  /**
   * Static representation of the [[friday]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FRIDAY: BooleanField<AbsenceCountingMethod> = new BooleanField('friday', AbsenceCountingMethod, 'Edm.Boolean');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<AbsenceCountingMethod> = new StringField('lastModifiedBy', AbsenceCountingMethod, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<AbsenceCountingMethod> = new DateField('lastModifiedDateTime', AbsenceCountingMethod, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<AbsenceCountingMethod> = new StringField('mdfSystemRecordStatus', AbsenceCountingMethod, 'Edm.String');
  /**
   * Static representation of the [[monday]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MONDAY: BooleanField<AbsenceCountingMethod> = new BooleanField('monday', AbsenceCountingMethod, 'Edm.Boolean');
  /**
   * Static representation of the [[saturday]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SATURDAY: BooleanField<AbsenceCountingMethod> = new BooleanField('saturday', AbsenceCountingMethod, 'Edm.Boolean');
  /**
   * Static representation of the [[sunday]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUNDAY: BooleanField<AbsenceCountingMethod> = new BooleanField('sunday', AbsenceCountingMethod, 'Edm.Boolean');
  /**
   * Static representation of the [[thursday]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const THURSDAY: BooleanField<AbsenceCountingMethod> = new BooleanField('thursday', AbsenceCountingMethod, 'Edm.Boolean');
  /**
   * Static representation of the [[tuesday]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TUESDAY: BooleanField<AbsenceCountingMethod> = new BooleanField('tuesday', AbsenceCountingMethod, 'Edm.Boolean');
  /**
   * Static representation of the [[wednesday]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WEDNESDAY: BooleanField<AbsenceCountingMethod> = new BooleanField('wednesday', AbsenceCountingMethod, 'Edm.Boolean');
  /**
   * Static representation of the one-to-one navigation property [[baseNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BASE_NAV: OneToOneLink<AbsenceCountingMethod, MdfEnumValue> = new OneToOneLink('baseNav', AbsenceCountingMethod, MdfEnumValue);
  /**
   * Static representation of the one-to-many navigation property [[countryNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY_NAV: Link<AbsenceCountingMethod, Country> = new Link('countryNav', AbsenceCountingMethod, Country);
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<AbsenceCountingMethod, User> = new OneToOneLink('createdByNav', AbsenceCountingMethod, User);
  /**
   * Static representation of the one-to-many navigation property [[externalNameTranslationTextNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_TRANSLATION_TEXT_NAV: Link<AbsenceCountingMethod, MdfLocalizedValue> = new Link('externalNameTranslationTextNav', AbsenceCountingMethod, MdfLocalizedValue);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<AbsenceCountingMethod, User> = new OneToOneLink('lastModifiedByNav', AbsenceCountingMethod, User);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<AbsenceCountingMethod, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', AbsenceCountingMethod, MdfEnumValue);
  /**
   * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WF_REQUEST_NAV: Link<AbsenceCountingMethod, WfRequest> = new Link('wfRequestNav', AbsenceCountingMethod, WfRequest);
  /**
   * All fields of the AbsenceCountingMethod entity.
   */
  export const _allFields: Array<StringField<AbsenceCountingMethod> | BooleanField<AbsenceCountingMethod> | DateField<AbsenceCountingMethod> | BigNumberField<AbsenceCountingMethod> | OneToOneLink<AbsenceCountingMethod, MdfEnumValue> | Link<AbsenceCountingMethod, Country> | OneToOneLink<AbsenceCountingMethod, User> | Link<AbsenceCountingMethod, MdfLocalizedValue> | Link<AbsenceCountingMethod, WfRequest>> = [
    AbsenceCountingMethod.BASE,
    AbsenceCountingMethod.CONSIDER_HOLIDAYS,
    AbsenceCountingMethod.COUNTRY,
    AbsenceCountingMethod.CREATED_BY,
    AbsenceCountingMethod.CREATED_DATE_TIME,
    AbsenceCountingMethod.DEDUCTION_FACTOR,
    AbsenceCountingMethod.EXTERNAL_CODE,
    AbsenceCountingMethod.EXTERNAL_NAME_DE_DE,
    AbsenceCountingMethod.EXTERNAL_NAME_DEFAULT_VALUE,
    AbsenceCountingMethod.EXTERNAL_NAME_EN_DEBUG,
    AbsenceCountingMethod.EXTERNAL_NAME_EN_GB,
    AbsenceCountingMethod.EXTERNAL_NAME_EN_US,
    AbsenceCountingMethod.EXTERNAL_NAME_ES_ES,
    AbsenceCountingMethod.EXTERNAL_NAME_ES_MX,
    AbsenceCountingMethod.EXTERNAL_NAME_FR_CA,
    AbsenceCountingMethod.EXTERNAL_NAME_FR_FR,
    AbsenceCountingMethod.EXTERNAL_NAME_IT_IT,
    AbsenceCountingMethod.EXTERNAL_NAME_LOCALIZED,
    AbsenceCountingMethod.EXTERNAL_NAME_NL_NL,
    AbsenceCountingMethod.EXTERNAL_NAME_PT_BR,
    AbsenceCountingMethod.EXTERNAL_NAME_ZH_CN,
    AbsenceCountingMethod.FRIDAY,
    AbsenceCountingMethod.LAST_MODIFIED_BY,
    AbsenceCountingMethod.LAST_MODIFIED_DATE_TIME,
    AbsenceCountingMethod.MDF_SYSTEM_RECORD_STATUS,
    AbsenceCountingMethod.MONDAY,
    AbsenceCountingMethod.SATURDAY,
    AbsenceCountingMethod.SUNDAY,
    AbsenceCountingMethod.THURSDAY,
    AbsenceCountingMethod.TUESDAY,
    AbsenceCountingMethod.WEDNESDAY,
    AbsenceCountingMethod.BASE_NAV,
    AbsenceCountingMethod.COUNTRY_NAV,
    AbsenceCountingMethod.CREATED_BY_NAV,
    AbsenceCountingMethod.EXTERNAL_NAME_TRANSLATION_TEXT_NAV,
    AbsenceCountingMethod.LAST_MODIFIED_BY_NAV,
    AbsenceCountingMethod.MDF_SYSTEM_RECORD_STATUS_NAV,
    AbsenceCountingMethod.WF_REQUEST_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<AbsenceCountingMethod> = new AllFields('*', AbsenceCountingMethod);
  /**
   * All key fields of the AbsenceCountingMethod entity.
   */
  export const _keyFields: Array<Selectable<AbsenceCountingMethod>> = [AbsenceCountingMethod.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property AbsenceCountingMethod.
   */
  export const _keys: { [keys: string]: Selectable<AbsenceCountingMethod> } = AbsenceCountingMethod._keyFields.reduce((acc: { [keys: string]: Selectable<AbsenceCountingMethod> }, field: Selectable<AbsenceCountingMethod>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
