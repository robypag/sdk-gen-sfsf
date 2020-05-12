/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PayScaleTypeRequestBuilder } from './PayScaleTypeRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "PayScaleType" of service "SFOData".
 */
export class PayScaleType extends Entity implements PayScaleTypeType {
  /**
   * Technical entity name for PayScaleType.
   */
  static _entityName = 'PayScaleType';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for PayScaleType.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Code.
   * Maximum length: 128.
   */
  code!: string;
  /**
   * Country/Region.
   * Maximum length: 128.
   * @nullable
   */
  country?: string;
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
   * External Name.
   * Maximum length: 128.
   * @nullable
   */
  externalNameDeDe?: string;
  /**
   * External Name.
   * Maximum length: 128.
   * @nullable
   */
  externalNameDefaultValue?: string;
  /**
   * External Name.
   * Maximum length: 128.
   * @nullable
   */
  externalNameEnDebug?: string;
  /**
   * External Name.
   * Maximum length: 128.
   * @nullable
   */
  externalNameEnGb?: string;
  /**
   * External Name.
   * Maximum length: 128.
   * @nullable
   */
  externalNameEnUs?: string;
  /**
   * External Name.
   * Maximum length: 128.
   * @nullable
   */
  externalNameEsEs?: string;
  /**
   * External Name.
   * Maximum length: 128.
   * @nullable
   */
  externalNameEsMx?: string;
  /**
   * External Name.
   * Maximum length: 128.
   * @nullable
   */
  externalNameFrCa?: string;
  /**
   * External Name.
   * Maximum length: 128.
   * @nullable
   */
  externalNameFrFr?: string;
  /**
   * External Name.
   * Maximum length: 128.
   * @nullable
   */
  externalNameItIt?: string;
  /**
   * External Name.
   * Maximum length: 128.
   * @nullable
   */
  externalNameLocalized?: string;
  /**
   * External Name.
   * Maximum length: 128.
   * @nullable
   */
  externalNameNlNl?: string;
  /**
   * External Name.
   * Maximum length: 128.
   * @nullable
   */
  externalNamePtBr?: string;
  /**
   * External Name.
   * Maximum length: 128.
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
   * Pay Scale Type.
   * Maximum length: 128.
   * @nullable
   */
  payScaleType?: string;
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
   * Returns an entity builder to construct instances `PayScaleType`.
   * @returns A builder that constructs instances of entity type `PayScaleType`.
   */
  static builder(): EntityBuilderType<PayScaleType, PayScaleTypeTypeForceMandatory> {
    return Entity.entityBuilder(PayScaleType);
  }

  /**
   * Returns a request builder to construct requests for operations on the `PayScaleType` entity type.
   * @returns A `PayScaleType` request builder.
   */
  static requestBuilder(): PayScaleTypeRequestBuilder {
    return new PayScaleTypeRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `PayScaleType`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `PayScaleType`.
   */
  static customField(fieldName: string): CustomField<PayScaleType> {
    return Entity.customFieldSelector(fieldName, PayScaleType);
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
import { MdfLocalizedValue, MdfLocalizedValueType } from './MdfLocalizedValue';
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';
import { WfRequest, WfRequestType } from './WfRequest';

export interface PayScaleTypeType {
  code: string;
  country?: string;
  createdBy?: string;
  createdDateTime?: Moment;
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
  payScaleType?: string;
  countryNav: CountryType[];
  createdByNav: UserType;
  externalNameTranslationTextNav: MdfLocalizedValueType[];
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  wfRequestNav: WfRequestType[];
}

export interface PayScaleTypeTypeForceMandatory {
  code: string;
  country: string;
  createdBy: string;
  createdDateTime: Moment;
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
  payScaleType: string;
  countryNav: CountryType[];
  createdByNav: UserType;
  externalNameTranslationTextNav: MdfLocalizedValueType[];
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  wfRequestNav: WfRequestType[];
}

export namespace PayScaleType {
  /**
   * Static representation of the [[code]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CODE: StringField<PayScaleType> = new StringField('code', PayScaleType, 'Edm.String');
  /**
   * Static representation of the [[country]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY: StringField<PayScaleType> = new StringField('country', PayScaleType, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<PayScaleType> = new StringField('createdBy', PayScaleType, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<PayScaleType> = new DateField('createdDateTime', PayScaleType, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[externalNameDeDe]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_DE_DE: StringField<PayScaleType> = new StringField('externalName_de_DE', PayScaleType, 'Edm.String');
  /**
   * Static representation of the [[externalNameDefaultValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_DEFAULT_VALUE: StringField<PayScaleType> = new StringField('externalName_defaultValue', PayScaleType, 'Edm.String');
  /**
   * Static representation of the [[externalNameEnDebug]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_EN_DEBUG: StringField<PayScaleType> = new StringField('externalName_en_DEBUG', PayScaleType, 'Edm.String');
  /**
   * Static representation of the [[externalNameEnGb]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_EN_GB: StringField<PayScaleType> = new StringField('externalName_en_GB', PayScaleType, 'Edm.String');
  /**
   * Static representation of the [[externalNameEnUs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_EN_US: StringField<PayScaleType> = new StringField('externalName_en_US', PayScaleType, 'Edm.String');
  /**
   * Static representation of the [[externalNameEsEs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_ES_ES: StringField<PayScaleType> = new StringField('externalName_es_ES', PayScaleType, 'Edm.String');
  /**
   * Static representation of the [[externalNameEsMx]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_ES_MX: StringField<PayScaleType> = new StringField('externalName_es_MX', PayScaleType, 'Edm.String');
  /**
   * Static representation of the [[externalNameFrCa]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_FR_CA: StringField<PayScaleType> = new StringField('externalName_fr_CA', PayScaleType, 'Edm.String');
  /**
   * Static representation of the [[externalNameFrFr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_FR_FR: StringField<PayScaleType> = new StringField('externalName_fr_FR', PayScaleType, 'Edm.String');
  /**
   * Static representation of the [[externalNameItIt]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_IT_IT: StringField<PayScaleType> = new StringField('externalName_it_IT', PayScaleType, 'Edm.String');
  /**
   * Static representation of the [[externalNameLocalized]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_LOCALIZED: StringField<PayScaleType> = new StringField('externalName_localized', PayScaleType, 'Edm.String');
  /**
   * Static representation of the [[externalNameNlNl]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_NL_NL: StringField<PayScaleType> = new StringField('externalName_nl_NL', PayScaleType, 'Edm.String');
  /**
   * Static representation of the [[externalNamePtBr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_PT_BR: StringField<PayScaleType> = new StringField('externalName_pt_BR', PayScaleType, 'Edm.String');
  /**
   * Static representation of the [[externalNameZhCn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_ZH_CN: StringField<PayScaleType> = new StringField('externalName_zh_CN', PayScaleType, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<PayScaleType> = new StringField('lastModifiedBy', PayScaleType, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<PayScaleType> = new DateField('lastModifiedDateTime', PayScaleType, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<PayScaleType> = new StringField('mdfSystemRecordStatus', PayScaleType, 'Edm.String');
  /**
   * Static representation of the [[payScaleType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAY_SCALE_TYPE: StringField<PayScaleType> = new StringField('payScaleType', PayScaleType, 'Edm.String');
  /**
   * Static representation of the one-to-many navigation property [[countryNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY_NAV: Link<PayScaleType, Country> = new Link('countryNav', PayScaleType, Country);
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<PayScaleType, User> = new OneToOneLink('createdByNav', PayScaleType, User);
  /**
   * Static representation of the one-to-many navigation property [[externalNameTranslationTextNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_TRANSLATION_TEXT_NAV: Link<PayScaleType, MdfLocalizedValue> = new Link('externalNameTranslationTextNav', PayScaleType, MdfLocalizedValue);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<PayScaleType, User> = new OneToOneLink('lastModifiedByNav', PayScaleType, User);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<PayScaleType, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', PayScaleType, MdfEnumValue);
  /**
   * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WF_REQUEST_NAV: Link<PayScaleType, WfRequest> = new Link('wfRequestNav', PayScaleType, WfRequest);
  /**
   * All fields of the PayScaleType entity.
   */
  export const _allFields: Array<StringField<PayScaleType> | DateField<PayScaleType> | Link<PayScaleType, Country> | OneToOneLink<PayScaleType, User> | Link<PayScaleType, MdfLocalizedValue> | OneToOneLink<PayScaleType, MdfEnumValue> | Link<PayScaleType, WfRequest>> = [
    PayScaleType.CODE,
    PayScaleType.COUNTRY,
    PayScaleType.CREATED_BY,
    PayScaleType.CREATED_DATE_TIME,
    PayScaleType.EXTERNAL_NAME_DE_DE,
    PayScaleType.EXTERNAL_NAME_DEFAULT_VALUE,
    PayScaleType.EXTERNAL_NAME_EN_DEBUG,
    PayScaleType.EXTERNAL_NAME_EN_GB,
    PayScaleType.EXTERNAL_NAME_EN_US,
    PayScaleType.EXTERNAL_NAME_ES_ES,
    PayScaleType.EXTERNAL_NAME_ES_MX,
    PayScaleType.EXTERNAL_NAME_FR_CA,
    PayScaleType.EXTERNAL_NAME_FR_FR,
    PayScaleType.EXTERNAL_NAME_IT_IT,
    PayScaleType.EXTERNAL_NAME_LOCALIZED,
    PayScaleType.EXTERNAL_NAME_NL_NL,
    PayScaleType.EXTERNAL_NAME_PT_BR,
    PayScaleType.EXTERNAL_NAME_ZH_CN,
    PayScaleType.LAST_MODIFIED_BY,
    PayScaleType.LAST_MODIFIED_DATE_TIME,
    PayScaleType.MDF_SYSTEM_RECORD_STATUS,
    PayScaleType.PAY_SCALE_TYPE,
    PayScaleType.COUNTRY_NAV,
    PayScaleType.CREATED_BY_NAV,
    PayScaleType.EXTERNAL_NAME_TRANSLATION_TEXT_NAV,
    PayScaleType.LAST_MODIFIED_BY_NAV,
    PayScaleType.MDF_SYSTEM_RECORD_STATUS_NAV,
    PayScaleType.WF_REQUEST_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<PayScaleType> = new AllFields('*', PayScaleType);
  /**
   * All key fields of the PayScaleType entity.
   */
  export const _keyFields: Array<Selectable<PayScaleType>> = [PayScaleType.CODE];
  /**
   * Mapping of all key field names to the respective static field property PayScaleType.
   */
  export const _keys: { [keys: string]: Selectable<PayScaleType> } = PayScaleType._keyFields.reduce((acc: { [keys: string]: Selectable<PayScaleType> }, field: Selectable<PayScaleType>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
