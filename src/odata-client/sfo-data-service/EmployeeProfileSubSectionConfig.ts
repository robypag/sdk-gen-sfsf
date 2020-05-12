/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EmployeeProfileSubSectionConfigRequestBuilder } from './EmployeeProfileSubSectionConfigRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "EmployeeProfileSubSectionConfig" of service "SFOData".
 */
export class EmployeeProfileSubSectionConfig extends Entity implements EmployeeProfileSubSectionConfigType {
  /**
   * Technical entity name for EmployeeProfileSubSectionConfig.
   */
  static _entityName = 'EmployeeProfileSubSectionConfig';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for EmployeeProfileSubSectionConfig.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * EmployeeProfilePageConfig_code.
   * Maximum length: 128.
   */
  employeeProfilePageConfigCode!: string;
  /**
   * EmployeeProfileSectionConfig_code.
   * Maximum length: 128.
   */
  employeeProfileSectionConfigCode!: string;
  /**
   * code.
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
   * isEnabled.
   * @nullable
   */
  isEnabled?: boolean;
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
   * order.
   * @nullable
   */
  order?: BigNumber;
  /**
   * title.
   * Maximum length: 1000.
   * @nullable
   */
  titleDeDe?: string;
  /**
   * title.
   * Maximum length: 1000.
   * @nullable
   */
  titleDefaultValue?: string;
  /**
   * title.
   * Maximum length: 1000.
   * @nullable
   */
  titleEnDebug?: string;
  /**
   * title.
   * Maximum length: 1000.
   * @nullable
   */
  titleEnGb?: string;
  /**
   * title.
   * Maximum length: 1000.
   * @nullable
   */
  titleEnUs?: string;
  /**
   * title.
   * Maximum length: 1000.
   * @nullable
   */
  titleEsEs?: string;
  /**
   * title.
   * Maximum length: 1000.
   * @nullable
   */
  titleEsMx?: string;
  /**
   * title.
   * Maximum length: 1000.
   * @nullable
   */
  titleFrCa?: string;
  /**
   * title.
   * Maximum length: 1000.
   * @nullable
   */
  titleFrFr?: string;
  /**
   * title.
   * Maximum length: 1000.
   * @nullable
   */
  titleItIt?: string;
  /**
   * title.
   * Maximum length: 1000.
   * @nullable
   */
  titleLocalized?: string;
  /**
   * title.
   * Maximum length: 1000.
   * @nullable
   */
  titleNlNl?: string;
  /**
   * title.
   * Maximum length: 1000.
   * @nullable
   */
  titlePtBr?: string;
  /**
   * title.
   * Maximum length: 1000.
   * @nullable
   */
  titleZhCn?: string;
  /**
   * type.
   * Maximum length: 255.
   * @nullable
   */
  type?: string;
  /**
   * One-to-many navigation property to the [[EmployeeProfileBlockContent]] entity.
   */
  blocks!: EmployeeProfileBlockContent[];
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
  titleTranslationTextNav!: MdfLocalizedValue[];
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  typeNav!: MdfEnumValue;

  /**
   * Returns an entity builder to construct instances `EmployeeProfileSubSectionConfig`.
   * @returns A builder that constructs instances of entity type `EmployeeProfileSubSectionConfig`.
   */
  static builder(): EntityBuilderType<EmployeeProfileSubSectionConfig, EmployeeProfileSubSectionConfigTypeForceMandatory> {
    return Entity.entityBuilder(EmployeeProfileSubSectionConfig);
  }

  /**
   * Returns a request builder to construct requests for operations on the `EmployeeProfileSubSectionConfig` entity type.
   * @returns A `EmployeeProfileSubSectionConfig` request builder.
   */
  static requestBuilder(): EmployeeProfileSubSectionConfigRequestBuilder {
    return new EmployeeProfileSubSectionConfigRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `EmployeeProfileSubSectionConfig`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `EmployeeProfileSubSectionConfig`.
   */
  static customField(fieldName: string): CustomField<EmployeeProfileSubSectionConfig> {
    return Entity.customFieldSelector(fieldName, EmployeeProfileSubSectionConfig);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { EmployeeProfileBlockContent, EmployeeProfileBlockContentType } from './EmployeeProfileBlockContent';
import { User, UserType } from './User';
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';
import { MdfLocalizedValue, MdfLocalizedValueType } from './MdfLocalizedValue';

export interface EmployeeProfileSubSectionConfigType {
  employeeProfilePageConfigCode: string;
  employeeProfileSectionConfigCode: string;
  code: string;
  createdBy?: string;
  createdDateTime?: Moment;
  isEnabled?: boolean;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  mdfSystemRecordStatus?: string;
  order?: BigNumber;
  titleDeDe?: string;
  titleDefaultValue?: string;
  titleEnDebug?: string;
  titleEnGb?: string;
  titleEnUs?: string;
  titleEsEs?: string;
  titleEsMx?: string;
  titleFrCa?: string;
  titleFrFr?: string;
  titleItIt?: string;
  titleLocalized?: string;
  titleNlNl?: string;
  titlePtBr?: string;
  titleZhCn?: string;
  type?: string;
  blocks: EmployeeProfileBlockContentType[];
  createdByNav: UserType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  titleTranslationTextNav: MdfLocalizedValueType[];
  typeNav: MdfEnumValueType;
}

export interface EmployeeProfileSubSectionConfigTypeForceMandatory {
  employeeProfilePageConfigCode: string;
  employeeProfileSectionConfigCode: string;
  code: string;
  createdBy: string;
  createdDateTime: Moment;
  isEnabled: boolean;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  mdfSystemRecordStatus: string;
  order: BigNumber;
  titleDeDe: string;
  titleDefaultValue: string;
  titleEnDebug: string;
  titleEnGb: string;
  titleEnUs: string;
  titleEsEs: string;
  titleEsMx: string;
  titleFrCa: string;
  titleFrFr: string;
  titleItIt: string;
  titleLocalized: string;
  titleNlNl: string;
  titlePtBr: string;
  titleZhCn: string;
  type: string;
  blocks: EmployeeProfileBlockContentType[];
  createdByNav: UserType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  titleTranslationTextNav: MdfLocalizedValueType[];
  typeNav: MdfEnumValueType;
}

export namespace EmployeeProfileSubSectionConfig {
  /**
   * Static representation of the [[employeeProfilePageConfigCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMPLOYEE_PROFILE_PAGE_CONFIG_CODE: StringField<EmployeeProfileSubSectionConfig> = new StringField('EmployeeProfilePageConfig_code', EmployeeProfileSubSectionConfig, 'Edm.String');
  /**
   * Static representation of the [[employeeProfileSectionConfigCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMPLOYEE_PROFILE_SECTION_CONFIG_CODE: StringField<EmployeeProfileSubSectionConfig> = new StringField('EmployeeProfileSectionConfig_code', EmployeeProfileSubSectionConfig, 'Edm.String');
  /**
   * Static representation of the [[code]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CODE: StringField<EmployeeProfileSubSectionConfig> = new StringField('code', EmployeeProfileSubSectionConfig, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<EmployeeProfileSubSectionConfig> = new StringField('createdBy', EmployeeProfileSubSectionConfig, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<EmployeeProfileSubSectionConfig> = new DateField('createdDateTime', EmployeeProfileSubSectionConfig, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[isEnabled]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_ENABLED: BooleanField<EmployeeProfileSubSectionConfig> = new BooleanField('isEnabled', EmployeeProfileSubSectionConfig, 'Edm.Boolean');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<EmployeeProfileSubSectionConfig> = new StringField('lastModifiedBy', EmployeeProfileSubSectionConfig, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<EmployeeProfileSubSectionConfig> = new DateField('lastModifiedDateTime', EmployeeProfileSubSectionConfig, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<EmployeeProfileSubSectionConfig> = new StringField('mdfSystemRecordStatus', EmployeeProfileSubSectionConfig, 'Edm.String');
  /**
   * Static representation of the [[order]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ORDER: BigNumberField<EmployeeProfileSubSectionConfig> = new BigNumberField('order', EmployeeProfileSubSectionConfig, 'Edm.Int64');
  /**
   * Static representation of the [[titleDeDe]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TITLE_DE_DE: StringField<EmployeeProfileSubSectionConfig> = new StringField('title_de_DE', EmployeeProfileSubSectionConfig, 'Edm.String');
  /**
   * Static representation of the [[titleDefaultValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TITLE_DEFAULT_VALUE: StringField<EmployeeProfileSubSectionConfig> = new StringField('title_defaultValue', EmployeeProfileSubSectionConfig, 'Edm.String');
  /**
   * Static representation of the [[titleEnDebug]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TITLE_EN_DEBUG: StringField<EmployeeProfileSubSectionConfig> = new StringField('title_en_DEBUG', EmployeeProfileSubSectionConfig, 'Edm.String');
  /**
   * Static representation of the [[titleEnGb]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TITLE_EN_GB: StringField<EmployeeProfileSubSectionConfig> = new StringField('title_en_GB', EmployeeProfileSubSectionConfig, 'Edm.String');
  /**
   * Static representation of the [[titleEnUs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TITLE_EN_US: StringField<EmployeeProfileSubSectionConfig> = new StringField('title_en_US', EmployeeProfileSubSectionConfig, 'Edm.String');
  /**
   * Static representation of the [[titleEsEs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TITLE_ES_ES: StringField<EmployeeProfileSubSectionConfig> = new StringField('title_es_ES', EmployeeProfileSubSectionConfig, 'Edm.String');
  /**
   * Static representation of the [[titleEsMx]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TITLE_ES_MX: StringField<EmployeeProfileSubSectionConfig> = new StringField('title_es_MX', EmployeeProfileSubSectionConfig, 'Edm.String');
  /**
   * Static representation of the [[titleFrCa]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TITLE_FR_CA: StringField<EmployeeProfileSubSectionConfig> = new StringField('title_fr_CA', EmployeeProfileSubSectionConfig, 'Edm.String');
  /**
   * Static representation of the [[titleFrFr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TITLE_FR_FR: StringField<EmployeeProfileSubSectionConfig> = new StringField('title_fr_FR', EmployeeProfileSubSectionConfig, 'Edm.String');
  /**
   * Static representation of the [[titleItIt]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TITLE_IT_IT: StringField<EmployeeProfileSubSectionConfig> = new StringField('title_it_IT', EmployeeProfileSubSectionConfig, 'Edm.String');
  /**
   * Static representation of the [[titleLocalized]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TITLE_LOCALIZED: StringField<EmployeeProfileSubSectionConfig> = new StringField('title_localized', EmployeeProfileSubSectionConfig, 'Edm.String');
  /**
   * Static representation of the [[titleNlNl]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TITLE_NL_NL: StringField<EmployeeProfileSubSectionConfig> = new StringField('title_nl_NL', EmployeeProfileSubSectionConfig, 'Edm.String');
  /**
   * Static representation of the [[titlePtBr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TITLE_PT_BR: StringField<EmployeeProfileSubSectionConfig> = new StringField('title_pt_BR', EmployeeProfileSubSectionConfig, 'Edm.String');
  /**
   * Static representation of the [[titleZhCn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TITLE_ZH_CN: StringField<EmployeeProfileSubSectionConfig> = new StringField('title_zh_CN', EmployeeProfileSubSectionConfig, 'Edm.String');
  /**
   * Static representation of the [[type]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TYPE: StringField<EmployeeProfileSubSectionConfig> = new StringField('type', EmployeeProfileSubSectionConfig, 'Edm.String');
  /**
   * Static representation of the one-to-many navigation property [[blocks]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BLOCKS: Link<EmployeeProfileSubSectionConfig, EmployeeProfileBlockContent> = new Link('blocks', EmployeeProfileSubSectionConfig, EmployeeProfileBlockContent);
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<EmployeeProfileSubSectionConfig, User> = new OneToOneLink('createdByNav', EmployeeProfileSubSectionConfig, User);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<EmployeeProfileSubSectionConfig, User> = new OneToOneLink('lastModifiedByNav', EmployeeProfileSubSectionConfig, User);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<EmployeeProfileSubSectionConfig, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', EmployeeProfileSubSectionConfig, MdfEnumValue);
  /**
   * Static representation of the one-to-many navigation property [[titleTranslationTextNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TITLE_TRANSLATION_TEXT_NAV: Link<EmployeeProfileSubSectionConfig, MdfLocalizedValue> = new Link('titleTranslationTextNav', EmployeeProfileSubSectionConfig, MdfLocalizedValue);
  /**
   * Static representation of the one-to-one navigation property [[typeNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TYPE_NAV: OneToOneLink<EmployeeProfileSubSectionConfig, MdfEnumValue> = new OneToOneLink('typeNav', EmployeeProfileSubSectionConfig, MdfEnumValue);
  /**
   * All fields of the EmployeeProfileSubSectionConfig entity.
   */
  export const _allFields: Array<StringField<EmployeeProfileSubSectionConfig> | DateField<EmployeeProfileSubSectionConfig> | BooleanField<EmployeeProfileSubSectionConfig> | BigNumberField<EmployeeProfileSubSectionConfig> | Link<EmployeeProfileSubSectionConfig, EmployeeProfileBlockContent> | OneToOneLink<EmployeeProfileSubSectionConfig, User> | OneToOneLink<EmployeeProfileSubSectionConfig, MdfEnumValue> | Link<EmployeeProfileSubSectionConfig, MdfLocalizedValue>> = [
    EmployeeProfileSubSectionConfig.EMPLOYEE_PROFILE_PAGE_CONFIG_CODE,
    EmployeeProfileSubSectionConfig.EMPLOYEE_PROFILE_SECTION_CONFIG_CODE,
    EmployeeProfileSubSectionConfig.CODE,
    EmployeeProfileSubSectionConfig.CREATED_BY,
    EmployeeProfileSubSectionConfig.CREATED_DATE_TIME,
    EmployeeProfileSubSectionConfig.IS_ENABLED,
    EmployeeProfileSubSectionConfig.LAST_MODIFIED_BY,
    EmployeeProfileSubSectionConfig.LAST_MODIFIED_DATE_TIME,
    EmployeeProfileSubSectionConfig.MDF_SYSTEM_RECORD_STATUS,
    EmployeeProfileSubSectionConfig.ORDER,
    EmployeeProfileSubSectionConfig.TITLE_DE_DE,
    EmployeeProfileSubSectionConfig.TITLE_DEFAULT_VALUE,
    EmployeeProfileSubSectionConfig.TITLE_EN_DEBUG,
    EmployeeProfileSubSectionConfig.TITLE_EN_GB,
    EmployeeProfileSubSectionConfig.TITLE_EN_US,
    EmployeeProfileSubSectionConfig.TITLE_ES_ES,
    EmployeeProfileSubSectionConfig.TITLE_ES_MX,
    EmployeeProfileSubSectionConfig.TITLE_FR_CA,
    EmployeeProfileSubSectionConfig.TITLE_FR_FR,
    EmployeeProfileSubSectionConfig.TITLE_IT_IT,
    EmployeeProfileSubSectionConfig.TITLE_LOCALIZED,
    EmployeeProfileSubSectionConfig.TITLE_NL_NL,
    EmployeeProfileSubSectionConfig.TITLE_PT_BR,
    EmployeeProfileSubSectionConfig.TITLE_ZH_CN,
    EmployeeProfileSubSectionConfig.TYPE,
    EmployeeProfileSubSectionConfig.BLOCKS,
    EmployeeProfileSubSectionConfig.CREATED_BY_NAV,
    EmployeeProfileSubSectionConfig.LAST_MODIFIED_BY_NAV,
    EmployeeProfileSubSectionConfig.MDF_SYSTEM_RECORD_STATUS_NAV,
    EmployeeProfileSubSectionConfig.TITLE_TRANSLATION_TEXT_NAV,
    EmployeeProfileSubSectionConfig.TYPE_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<EmployeeProfileSubSectionConfig> = new AllFields('*', EmployeeProfileSubSectionConfig);
  /**
   * All key fields of the EmployeeProfileSubSectionConfig entity.
   */
  export const _keyFields: Array<Selectable<EmployeeProfileSubSectionConfig>> = [EmployeeProfileSubSectionConfig.EMPLOYEE_PROFILE_PAGE_CONFIG_CODE, EmployeeProfileSubSectionConfig.EMPLOYEE_PROFILE_SECTION_CONFIG_CODE, EmployeeProfileSubSectionConfig.CODE];
  /**
   * Mapping of all key field names to the respective static field property EmployeeProfileSubSectionConfig.
   */
  export const _keys: { [keys: string]: Selectable<EmployeeProfileSubSectionConfig> } = EmployeeProfileSubSectionConfig._keyFields.reduce((acc: { [keys: string]: Selectable<EmployeeProfileSubSectionConfig> }, field: Selectable<EmployeeProfileSubSectionConfig>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
