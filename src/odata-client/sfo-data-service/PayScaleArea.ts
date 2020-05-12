/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PayScaleAreaRequestBuilder } from './PayScaleAreaRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "PayScaleArea" of service "SFOData".
 */
export class PayScaleArea extends Entity implements PayScaleAreaType {
  /**
   * Technical entity name for PayScaleArea.
   */
  static _entityName = 'PayScaleArea';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for PayScaleArea.
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
   * Pay Scale Area.
   * Maximum length: 128.
   * @nullable
   */
  payScaleArea?: string;
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
   * Returns an entity builder to construct instances `PayScaleArea`.
   * @returns A builder that constructs instances of entity type `PayScaleArea`.
   */
  static builder(): EntityBuilderType<PayScaleArea, PayScaleAreaTypeForceMandatory> {
    return Entity.entityBuilder(PayScaleArea);
  }

  /**
   * Returns a request builder to construct requests for operations on the `PayScaleArea` entity type.
   * @returns A `PayScaleArea` request builder.
   */
  static requestBuilder(): PayScaleAreaRequestBuilder {
    return new PayScaleAreaRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `PayScaleArea`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `PayScaleArea`.
   */
  static customField(fieldName: string): CustomField<PayScaleArea> {
    return Entity.customFieldSelector(fieldName, PayScaleArea);
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

export interface PayScaleAreaType {
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
  payScaleArea?: string;
  countryNav: CountryType[];
  createdByNav: UserType;
  externalNameTranslationTextNav: MdfLocalizedValueType[];
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  wfRequestNav: WfRequestType[];
}

export interface PayScaleAreaTypeForceMandatory {
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
  payScaleArea: string;
  countryNav: CountryType[];
  createdByNav: UserType;
  externalNameTranslationTextNav: MdfLocalizedValueType[];
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  wfRequestNav: WfRequestType[];
}

export namespace PayScaleArea {
  /**
   * Static representation of the [[code]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CODE: StringField<PayScaleArea> = new StringField('code', PayScaleArea, 'Edm.String');
  /**
   * Static representation of the [[country]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY: StringField<PayScaleArea> = new StringField('country', PayScaleArea, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<PayScaleArea> = new StringField('createdBy', PayScaleArea, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<PayScaleArea> = new DateField('createdDateTime', PayScaleArea, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[externalNameDeDe]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_DE_DE: StringField<PayScaleArea> = new StringField('externalName_de_DE', PayScaleArea, 'Edm.String');
  /**
   * Static representation of the [[externalNameDefaultValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_DEFAULT_VALUE: StringField<PayScaleArea> = new StringField('externalName_defaultValue', PayScaleArea, 'Edm.String');
  /**
   * Static representation of the [[externalNameEnDebug]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_EN_DEBUG: StringField<PayScaleArea> = new StringField('externalName_en_DEBUG', PayScaleArea, 'Edm.String');
  /**
   * Static representation of the [[externalNameEnGb]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_EN_GB: StringField<PayScaleArea> = new StringField('externalName_en_GB', PayScaleArea, 'Edm.String');
  /**
   * Static representation of the [[externalNameEnUs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_EN_US: StringField<PayScaleArea> = new StringField('externalName_en_US', PayScaleArea, 'Edm.String');
  /**
   * Static representation of the [[externalNameEsEs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_ES_ES: StringField<PayScaleArea> = new StringField('externalName_es_ES', PayScaleArea, 'Edm.String');
  /**
   * Static representation of the [[externalNameEsMx]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_ES_MX: StringField<PayScaleArea> = new StringField('externalName_es_MX', PayScaleArea, 'Edm.String');
  /**
   * Static representation of the [[externalNameFrCa]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_FR_CA: StringField<PayScaleArea> = new StringField('externalName_fr_CA', PayScaleArea, 'Edm.String');
  /**
   * Static representation of the [[externalNameFrFr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_FR_FR: StringField<PayScaleArea> = new StringField('externalName_fr_FR', PayScaleArea, 'Edm.String');
  /**
   * Static representation of the [[externalNameItIt]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_IT_IT: StringField<PayScaleArea> = new StringField('externalName_it_IT', PayScaleArea, 'Edm.String');
  /**
   * Static representation of the [[externalNameLocalized]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_LOCALIZED: StringField<PayScaleArea> = new StringField('externalName_localized', PayScaleArea, 'Edm.String');
  /**
   * Static representation of the [[externalNameNlNl]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_NL_NL: StringField<PayScaleArea> = new StringField('externalName_nl_NL', PayScaleArea, 'Edm.String');
  /**
   * Static representation of the [[externalNamePtBr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_PT_BR: StringField<PayScaleArea> = new StringField('externalName_pt_BR', PayScaleArea, 'Edm.String');
  /**
   * Static representation of the [[externalNameZhCn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_ZH_CN: StringField<PayScaleArea> = new StringField('externalName_zh_CN', PayScaleArea, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<PayScaleArea> = new StringField('lastModifiedBy', PayScaleArea, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<PayScaleArea> = new DateField('lastModifiedDateTime', PayScaleArea, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<PayScaleArea> = new StringField('mdfSystemRecordStatus', PayScaleArea, 'Edm.String');
  /**
   * Static representation of the [[payScaleArea]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAY_SCALE_AREA: StringField<PayScaleArea> = new StringField('payScaleArea', PayScaleArea, 'Edm.String');
  /**
   * Static representation of the one-to-many navigation property [[countryNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY_NAV: Link<PayScaleArea, Country> = new Link('countryNav', PayScaleArea, Country);
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<PayScaleArea, User> = new OneToOneLink('createdByNav', PayScaleArea, User);
  /**
   * Static representation of the one-to-many navigation property [[externalNameTranslationTextNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_TRANSLATION_TEXT_NAV: Link<PayScaleArea, MdfLocalizedValue> = new Link('externalNameTranslationTextNav', PayScaleArea, MdfLocalizedValue);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<PayScaleArea, User> = new OneToOneLink('lastModifiedByNav', PayScaleArea, User);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<PayScaleArea, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', PayScaleArea, MdfEnumValue);
  /**
   * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WF_REQUEST_NAV: Link<PayScaleArea, WfRequest> = new Link('wfRequestNav', PayScaleArea, WfRequest);
  /**
   * All fields of the PayScaleArea entity.
   */
  export const _allFields: Array<StringField<PayScaleArea> | DateField<PayScaleArea> | Link<PayScaleArea, Country> | OneToOneLink<PayScaleArea, User> | Link<PayScaleArea, MdfLocalizedValue> | OneToOneLink<PayScaleArea, MdfEnumValue> | Link<PayScaleArea, WfRequest>> = [
    PayScaleArea.CODE,
    PayScaleArea.COUNTRY,
    PayScaleArea.CREATED_BY,
    PayScaleArea.CREATED_DATE_TIME,
    PayScaleArea.EXTERNAL_NAME_DE_DE,
    PayScaleArea.EXTERNAL_NAME_DEFAULT_VALUE,
    PayScaleArea.EXTERNAL_NAME_EN_DEBUG,
    PayScaleArea.EXTERNAL_NAME_EN_GB,
    PayScaleArea.EXTERNAL_NAME_EN_US,
    PayScaleArea.EXTERNAL_NAME_ES_ES,
    PayScaleArea.EXTERNAL_NAME_ES_MX,
    PayScaleArea.EXTERNAL_NAME_FR_CA,
    PayScaleArea.EXTERNAL_NAME_FR_FR,
    PayScaleArea.EXTERNAL_NAME_IT_IT,
    PayScaleArea.EXTERNAL_NAME_LOCALIZED,
    PayScaleArea.EXTERNAL_NAME_NL_NL,
    PayScaleArea.EXTERNAL_NAME_PT_BR,
    PayScaleArea.EXTERNAL_NAME_ZH_CN,
    PayScaleArea.LAST_MODIFIED_BY,
    PayScaleArea.LAST_MODIFIED_DATE_TIME,
    PayScaleArea.MDF_SYSTEM_RECORD_STATUS,
    PayScaleArea.PAY_SCALE_AREA,
    PayScaleArea.COUNTRY_NAV,
    PayScaleArea.CREATED_BY_NAV,
    PayScaleArea.EXTERNAL_NAME_TRANSLATION_TEXT_NAV,
    PayScaleArea.LAST_MODIFIED_BY_NAV,
    PayScaleArea.MDF_SYSTEM_RECORD_STATUS_NAV,
    PayScaleArea.WF_REQUEST_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<PayScaleArea> = new AllFields('*', PayScaleArea);
  /**
   * All key fields of the PayScaleArea entity.
   */
  export const _keyFields: Array<Selectable<PayScaleArea>> = [PayScaleArea.CODE];
  /**
   * Mapping of all key field names to the respective static field property PayScaleArea.
   */
  export const _keys: { [keys: string]: Selectable<PayScaleArea> } = PayScaleArea._keyFields.reduce((acc: { [keys: string]: Selectable<PayScaleArea> }, field: Selectable<PayScaleArea>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
