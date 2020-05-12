/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ShiftClassificationRequestBuilder } from './ShiftClassificationRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "ShiftClassification" of service "SFOData".
 */
export class ShiftClassification extends Entity implements ShiftClassificationType {
  /**
   * Technical entity name for ShiftClassification.
   */
  static _entityName = 'ShiftClassification';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for ShiftClassification.
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
   * Returns an entity builder to construct instances `ShiftClassification`.
   * @returns A builder that constructs instances of entity type `ShiftClassification`.
   */
  static builder(): EntityBuilderType<ShiftClassification, ShiftClassificationTypeForceMandatory> {
    return Entity.entityBuilder(ShiftClassification);
  }

  /**
   * Returns a request builder to construct requests for operations on the `ShiftClassification` entity type.
   * @returns A `ShiftClassification` request builder.
   */
  static requestBuilder(): ShiftClassificationRequestBuilder {
    return new ShiftClassificationRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `ShiftClassification`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `ShiftClassification`.
   */
  static customField(fieldName: string): CustomField<ShiftClassification> {
    return Entity.customFieldSelector(fieldName, ShiftClassification);
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

export interface ShiftClassificationType {
  country?: string;
  createdBy?: string;
  createdDateTime?: Moment;
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
  countryNav: CountryType[];
  createdByNav: UserType;
  externalNameTranslationTextNav: MdfLocalizedValueType[];
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  wfRequestNav: WfRequestType[];
}

export interface ShiftClassificationTypeForceMandatory {
  country: string;
  createdBy: string;
  createdDateTime: Moment;
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
  countryNav: CountryType[];
  createdByNav: UserType;
  externalNameTranslationTextNav: MdfLocalizedValueType[];
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  wfRequestNav: WfRequestType[];
}

export namespace ShiftClassification {
  /**
   * Static representation of the [[country]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY: StringField<ShiftClassification> = new StringField('country', ShiftClassification, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<ShiftClassification> = new StringField('createdBy', ShiftClassification, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<ShiftClassification> = new DateField('createdDateTime', ShiftClassification, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: StringField<ShiftClassification> = new StringField('externalCode', ShiftClassification, 'Edm.String');
  /**
   * Static representation of the [[externalNameDeDe]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_DE_DE: StringField<ShiftClassification> = new StringField('externalName_de_DE', ShiftClassification, 'Edm.String');
  /**
   * Static representation of the [[externalNameDefaultValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_DEFAULT_VALUE: StringField<ShiftClassification> = new StringField('externalName_defaultValue', ShiftClassification, 'Edm.String');
  /**
   * Static representation of the [[externalNameEnDebug]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_EN_DEBUG: StringField<ShiftClassification> = new StringField('externalName_en_DEBUG', ShiftClassification, 'Edm.String');
  /**
   * Static representation of the [[externalNameEnGb]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_EN_GB: StringField<ShiftClassification> = new StringField('externalName_en_GB', ShiftClassification, 'Edm.String');
  /**
   * Static representation of the [[externalNameEnUs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_EN_US: StringField<ShiftClassification> = new StringField('externalName_en_US', ShiftClassification, 'Edm.String');
  /**
   * Static representation of the [[externalNameEsEs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_ES_ES: StringField<ShiftClassification> = new StringField('externalName_es_ES', ShiftClassification, 'Edm.String');
  /**
   * Static representation of the [[externalNameEsMx]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_ES_MX: StringField<ShiftClassification> = new StringField('externalName_es_MX', ShiftClassification, 'Edm.String');
  /**
   * Static representation of the [[externalNameFrCa]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_FR_CA: StringField<ShiftClassification> = new StringField('externalName_fr_CA', ShiftClassification, 'Edm.String');
  /**
   * Static representation of the [[externalNameFrFr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_FR_FR: StringField<ShiftClassification> = new StringField('externalName_fr_FR', ShiftClassification, 'Edm.String');
  /**
   * Static representation of the [[externalNameItIt]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_IT_IT: StringField<ShiftClassification> = new StringField('externalName_it_IT', ShiftClassification, 'Edm.String');
  /**
   * Static representation of the [[externalNameLocalized]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_LOCALIZED: StringField<ShiftClassification> = new StringField('externalName_localized', ShiftClassification, 'Edm.String');
  /**
   * Static representation of the [[externalNameNlNl]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_NL_NL: StringField<ShiftClassification> = new StringField('externalName_nl_NL', ShiftClassification, 'Edm.String');
  /**
   * Static representation of the [[externalNamePtBr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_PT_BR: StringField<ShiftClassification> = new StringField('externalName_pt_BR', ShiftClassification, 'Edm.String');
  /**
   * Static representation of the [[externalNameZhCn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_ZH_CN: StringField<ShiftClassification> = new StringField('externalName_zh_CN', ShiftClassification, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<ShiftClassification> = new StringField('lastModifiedBy', ShiftClassification, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<ShiftClassification> = new DateField('lastModifiedDateTime', ShiftClassification, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<ShiftClassification> = new StringField('mdfSystemRecordStatus', ShiftClassification, 'Edm.String');
  /**
   * Static representation of the one-to-many navigation property [[countryNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY_NAV: Link<ShiftClassification, Country> = new Link('countryNav', ShiftClassification, Country);
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<ShiftClassification, User> = new OneToOneLink('createdByNav', ShiftClassification, User);
  /**
   * Static representation of the one-to-many navigation property [[externalNameTranslationTextNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_TRANSLATION_TEXT_NAV: Link<ShiftClassification, MdfLocalizedValue> = new Link('externalNameTranslationTextNav', ShiftClassification, MdfLocalizedValue);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<ShiftClassification, User> = new OneToOneLink('lastModifiedByNav', ShiftClassification, User);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<ShiftClassification, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', ShiftClassification, MdfEnumValue);
  /**
   * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WF_REQUEST_NAV: Link<ShiftClassification, WfRequest> = new Link('wfRequestNav', ShiftClassification, WfRequest);
  /**
   * All fields of the ShiftClassification entity.
   */
  export const _allFields: Array<StringField<ShiftClassification> | DateField<ShiftClassification> | Link<ShiftClassification, Country> | OneToOneLink<ShiftClassification, User> | Link<ShiftClassification, MdfLocalizedValue> | OneToOneLink<ShiftClassification, MdfEnumValue> | Link<ShiftClassification, WfRequest>> = [
    ShiftClassification.COUNTRY,
    ShiftClassification.CREATED_BY,
    ShiftClassification.CREATED_DATE_TIME,
    ShiftClassification.EXTERNAL_CODE,
    ShiftClassification.EXTERNAL_NAME_DE_DE,
    ShiftClassification.EXTERNAL_NAME_DEFAULT_VALUE,
    ShiftClassification.EXTERNAL_NAME_EN_DEBUG,
    ShiftClassification.EXTERNAL_NAME_EN_GB,
    ShiftClassification.EXTERNAL_NAME_EN_US,
    ShiftClassification.EXTERNAL_NAME_ES_ES,
    ShiftClassification.EXTERNAL_NAME_ES_MX,
    ShiftClassification.EXTERNAL_NAME_FR_CA,
    ShiftClassification.EXTERNAL_NAME_FR_FR,
    ShiftClassification.EXTERNAL_NAME_IT_IT,
    ShiftClassification.EXTERNAL_NAME_LOCALIZED,
    ShiftClassification.EXTERNAL_NAME_NL_NL,
    ShiftClassification.EXTERNAL_NAME_PT_BR,
    ShiftClassification.EXTERNAL_NAME_ZH_CN,
    ShiftClassification.LAST_MODIFIED_BY,
    ShiftClassification.LAST_MODIFIED_DATE_TIME,
    ShiftClassification.MDF_SYSTEM_RECORD_STATUS,
    ShiftClassification.COUNTRY_NAV,
    ShiftClassification.CREATED_BY_NAV,
    ShiftClassification.EXTERNAL_NAME_TRANSLATION_TEXT_NAV,
    ShiftClassification.LAST_MODIFIED_BY_NAV,
    ShiftClassification.MDF_SYSTEM_RECORD_STATUS_NAV,
    ShiftClassification.WF_REQUEST_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<ShiftClassification> = new AllFields('*', ShiftClassification);
  /**
   * All key fields of the ShiftClassification entity.
   */
  export const _keyFields: Array<Selectable<ShiftClassification>> = [ShiftClassification.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property ShiftClassification.
   */
  export const _keys: { [keys: string]: Selectable<ShiftClassification> } = ShiftClassification._keyFields.reduce((acc: { [keys: string]: Selectable<ShiftClassification> }, field: Selectable<ShiftClassification>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
