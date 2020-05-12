/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EmployeeProfileBlockLinkRequestBuilder } from './EmployeeProfileBlockLinkRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "EmployeeProfileBlockLink" of service "SFOData".
 */
export class EmployeeProfileBlockLink extends Entity implements EmployeeProfileBlockLinkType {
  /**
   * Technical entity name for EmployeeProfileBlockLink.
   */
  static _entityName = 'EmployeeProfileBlockLink';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for EmployeeProfileBlockLink.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * EmployeeProfileBlockContent_code.
   * Maximum length: 128.
   */
  employeeProfileBlockContentCode!: string;
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
   * EmployeeProfileSubSectionConfig_code.
   * Maximum length: 128.
   */
  employeeProfileSubSectionConfigCode!: string;
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
   * description.
   * Maximum length: 1000.
   * @nullable
   */
  descriptionDeDe?: string;
  /**
   * description.
   * Maximum length: 1000.
   * @nullable
   */
  descriptionDefaultValue?: string;
  /**
   * description.
   * Maximum length: 1000.
   * @nullable
   */
  descriptionEnDebug?: string;
  /**
   * description.
   * Maximum length: 1000.
   * @nullable
   */
  descriptionEnGb?: string;
  /**
   * description.
   * Maximum length: 1000.
   * @nullable
   */
  descriptionEnUs?: string;
  /**
   * description.
   * Maximum length: 1000.
   * @nullable
   */
  descriptionEsEs?: string;
  /**
   * description.
   * Maximum length: 1000.
   * @nullable
   */
  descriptionEsMx?: string;
  /**
   * description.
   * Maximum length: 1000.
   * @nullable
   */
  descriptionFrCa?: string;
  /**
   * description.
   * Maximum length: 1000.
   * @nullable
   */
  descriptionFrFr?: string;
  /**
   * description.
   * Maximum length: 1000.
   * @nullable
   */
  descriptionItIt?: string;
  /**
   * description.
   * Maximum length: 1000.
   * @nullable
   */
  descriptionLocalized?: string;
  /**
   * description.
   * Maximum length: 1000.
   * @nullable
   */
  descriptionNlNl?: string;
  /**
   * description.
   * Maximum length: 1000.
   * @nullable
   */
  descriptionPtBr?: string;
  /**
   * description.
   * Maximum length: 1000.
   * @nullable
   */
  descriptionZhCn?: string;
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
   * url.
   * Maximum length: 3000.
   * @nullable
   */
  url?: string;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  createdByNav!: User;
  /**
   * One-to-many navigation property to the [[MdfLocalizedValue]] entity.
   */
  descriptionTranslationTextNav!: MdfLocalizedValue[];
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  lastModifiedByNav!: User;
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  mdfSystemRecordStatusNav!: MdfEnumValue;

  /**
   * Returns an entity builder to construct instances `EmployeeProfileBlockLink`.
   * @returns A builder that constructs instances of entity type `EmployeeProfileBlockLink`.
   */
  static builder(): EntityBuilderType<EmployeeProfileBlockLink, EmployeeProfileBlockLinkTypeForceMandatory> {
    return Entity.entityBuilder(EmployeeProfileBlockLink);
  }

  /**
   * Returns a request builder to construct requests for operations on the `EmployeeProfileBlockLink` entity type.
   * @returns A `EmployeeProfileBlockLink` request builder.
   */
  static requestBuilder(): EmployeeProfileBlockLinkRequestBuilder {
    return new EmployeeProfileBlockLinkRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `EmployeeProfileBlockLink`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `EmployeeProfileBlockLink`.
   */
  static customField(fieldName: string): CustomField<EmployeeProfileBlockLink> {
    return Entity.customFieldSelector(fieldName, EmployeeProfileBlockLink);
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

export interface EmployeeProfileBlockLinkType {
  employeeProfileBlockContentCode: string;
  employeeProfilePageConfigCode: string;
  employeeProfileSectionConfigCode: string;
  employeeProfileSubSectionConfigCode: string;
  code: string;
  createdBy?: string;
  createdDateTime?: Moment;
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
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  mdfSystemRecordStatus?: string;
  order?: BigNumber;
  url?: string;
  createdByNav: UserType;
  descriptionTranslationTextNav: MdfLocalizedValueType[];
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
}

export interface EmployeeProfileBlockLinkTypeForceMandatory {
  employeeProfileBlockContentCode: string;
  employeeProfilePageConfigCode: string;
  employeeProfileSectionConfigCode: string;
  employeeProfileSubSectionConfigCode: string;
  code: string;
  createdBy: string;
  createdDateTime: Moment;
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
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  mdfSystemRecordStatus: string;
  order: BigNumber;
  url: string;
  createdByNav: UserType;
  descriptionTranslationTextNav: MdfLocalizedValueType[];
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
}

export namespace EmployeeProfileBlockLink {
  /**
   * Static representation of the [[employeeProfileBlockContentCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMPLOYEE_PROFILE_BLOCK_CONTENT_CODE: StringField<EmployeeProfileBlockLink> = new StringField('EmployeeProfileBlockContent_code', EmployeeProfileBlockLink, 'Edm.String');
  /**
   * Static representation of the [[employeeProfilePageConfigCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMPLOYEE_PROFILE_PAGE_CONFIG_CODE: StringField<EmployeeProfileBlockLink> = new StringField('EmployeeProfilePageConfig_code', EmployeeProfileBlockLink, 'Edm.String');
  /**
   * Static representation of the [[employeeProfileSectionConfigCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMPLOYEE_PROFILE_SECTION_CONFIG_CODE: StringField<EmployeeProfileBlockLink> = new StringField('EmployeeProfileSectionConfig_code', EmployeeProfileBlockLink, 'Edm.String');
  /**
   * Static representation of the [[employeeProfileSubSectionConfigCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMPLOYEE_PROFILE_SUB_SECTION_CONFIG_CODE: StringField<EmployeeProfileBlockLink> = new StringField('EmployeeProfileSubSectionConfig_code', EmployeeProfileBlockLink, 'Edm.String');
  /**
   * Static representation of the [[code]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CODE: StringField<EmployeeProfileBlockLink> = new StringField('code', EmployeeProfileBlockLink, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<EmployeeProfileBlockLink> = new StringField('createdBy', EmployeeProfileBlockLink, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<EmployeeProfileBlockLink> = new DateField('createdDateTime', EmployeeProfileBlockLink, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[descriptionDeDe]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_DE_DE: StringField<EmployeeProfileBlockLink> = new StringField('description_de_DE', EmployeeProfileBlockLink, 'Edm.String');
  /**
   * Static representation of the [[descriptionDefaultValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_DEFAULT_VALUE: StringField<EmployeeProfileBlockLink> = new StringField('description_defaultValue', EmployeeProfileBlockLink, 'Edm.String');
  /**
   * Static representation of the [[descriptionEnDebug]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_EN_DEBUG: StringField<EmployeeProfileBlockLink> = new StringField('description_en_DEBUG', EmployeeProfileBlockLink, 'Edm.String');
  /**
   * Static representation of the [[descriptionEnGb]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_EN_GB: StringField<EmployeeProfileBlockLink> = new StringField('description_en_GB', EmployeeProfileBlockLink, 'Edm.String');
  /**
   * Static representation of the [[descriptionEnUs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_EN_US: StringField<EmployeeProfileBlockLink> = new StringField('description_en_US', EmployeeProfileBlockLink, 'Edm.String');
  /**
   * Static representation of the [[descriptionEsEs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_ES_ES: StringField<EmployeeProfileBlockLink> = new StringField('description_es_ES', EmployeeProfileBlockLink, 'Edm.String');
  /**
   * Static representation of the [[descriptionEsMx]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_ES_MX: StringField<EmployeeProfileBlockLink> = new StringField('description_es_MX', EmployeeProfileBlockLink, 'Edm.String');
  /**
   * Static representation of the [[descriptionFrCa]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_FR_CA: StringField<EmployeeProfileBlockLink> = new StringField('description_fr_CA', EmployeeProfileBlockLink, 'Edm.String');
  /**
   * Static representation of the [[descriptionFrFr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_FR_FR: StringField<EmployeeProfileBlockLink> = new StringField('description_fr_FR', EmployeeProfileBlockLink, 'Edm.String');
  /**
   * Static representation of the [[descriptionItIt]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_IT_IT: StringField<EmployeeProfileBlockLink> = new StringField('description_it_IT', EmployeeProfileBlockLink, 'Edm.String');
  /**
   * Static representation of the [[descriptionLocalized]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_LOCALIZED: StringField<EmployeeProfileBlockLink> = new StringField('description_localized', EmployeeProfileBlockLink, 'Edm.String');
  /**
   * Static representation of the [[descriptionNlNl]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_NL_NL: StringField<EmployeeProfileBlockLink> = new StringField('description_nl_NL', EmployeeProfileBlockLink, 'Edm.String');
  /**
   * Static representation of the [[descriptionPtBr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_PT_BR: StringField<EmployeeProfileBlockLink> = new StringField('description_pt_BR', EmployeeProfileBlockLink, 'Edm.String');
  /**
   * Static representation of the [[descriptionZhCn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_ZH_CN: StringField<EmployeeProfileBlockLink> = new StringField('description_zh_CN', EmployeeProfileBlockLink, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<EmployeeProfileBlockLink> = new StringField('lastModifiedBy', EmployeeProfileBlockLink, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<EmployeeProfileBlockLink> = new DateField('lastModifiedDateTime', EmployeeProfileBlockLink, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<EmployeeProfileBlockLink> = new StringField('mdfSystemRecordStatus', EmployeeProfileBlockLink, 'Edm.String');
  /**
   * Static representation of the [[order]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ORDER: BigNumberField<EmployeeProfileBlockLink> = new BigNumberField('order', EmployeeProfileBlockLink, 'Edm.Int64');
  /**
   * Static representation of the [[url]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const URL: StringField<EmployeeProfileBlockLink> = new StringField('url', EmployeeProfileBlockLink, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<EmployeeProfileBlockLink, User> = new OneToOneLink('createdByNav', EmployeeProfileBlockLink, User);
  /**
   * Static representation of the one-to-many navigation property [[descriptionTranslationTextNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_TRANSLATION_TEXT_NAV: Link<EmployeeProfileBlockLink, MdfLocalizedValue> = new Link('descriptionTranslationTextNav', EmployeeProfileBlockLink, MdfLocalizedValue);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<EmployeeProfileBlockLink, User> = new OneToOneLink('lastModifiedByNav', EmployeeProfileBlockLink, User);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<EmployeeProfileBlockLink, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', EmployeeProfileBlockLink, MdfEnumValue);
  /**
   * All fields of the EmployeeProfileBlockLink entity.
   */
  export const _allFields: Array<StringField<EmployeeProfileBlockLink> | DateField<EmployeeProfileBlockLink> | BigNumberField<EmployeeProfileBlockLink> | OneToOneLink<EmployeeProfileBlockLink, User> | Link<EmployeeProfileBlockLink, MdfLocalizedValue> | OneToOneLink<EmployeeProfileBlockLink, MdfEnumValue>> = [
    EmployeeProfileBlockLink.EMPLOYEE_PROFILE_BLOCK_CONTENT_CODE,
    EmployeeProfileBlockLink.EMPLOYEE_PROFILE_PAGE_CONFIG_CODE,
    EmployeeProfileBlockLink.EMPLOYEE_PROFILE_SECTION_CONFIG_CODE,
    EmployeeProfileBlockLink.EMPLOYEE_PROFILE_SUB_SECTION_CONFIG_CODE,
    EmployeeProfileBlockLink.CODE,
    EmployeeProfileBlockLink.CREATED_BY,
    EmployeeProfileBlockLink.CREATED_DATE_TIME,
    EmployeeProfileBlockLink.DESCRIPTION_DE_DE,
    EmployeeProfileBlockLink.DESCRIPTION_DEFAULT_VALUE,
    EmployeeProfileBlockLink.DESCRIPTION_EN_DEBUG,
    EmployeeProfileBlockLink.DESCRIPTION_EN_GB,
    EmployeeProfileBlockLink.DESCRIPTION_EN_US,
    EmployeeProfileBlockLink.DESCRIPTION_ES_ES,
    EmployeeProfileBlockLink.DESCRIPTION_ES_MX,
    EmployeeProfileBlockLink.DESCRIPTION_FR_CA,
    EmployeeProfileBlockLink.DESCRIPTION_FR_FR,
    EmployeeProfileBlockLink.DESCRIPTION_IT_IT,
    EmployeeProfileBlockLink.DESCRIPTION_LOCALIZED,
    EmployeeProfileBlockLink.DESCRIPTION_NL_NL,
    EmployeeProfileBlockLink.DESCRIPTION_PT_BR,
    EmployeeProfileBlockLink.DESCRIPTION_ZH_CN,
    EmployeeProfileBlockLink.LAST_MODIFIED_BY,
    EmployeeProfileBlockLink.LAST_MODIFIED_DATE_TIME,
    EmployeeProfileBlockLink.MDF_SYSTEM_RECORD_STATUS,
    EmployeeProfileBlockLink.ORDER,
    EmployeeProfileBlockLink.URL,
    EmployeeProfileBlockLink.CREATED_BY_NAV,
    EmployeeProfileBlockLink.DESCRIPTION_TRANSLATION_TEXT_NAV,
    EmployeeProfileBlockLink.LAST_MODIFIED_BY_NAV,
    EmployeeProfileBlockLink.MDF_SYSTEM_RECORD_STATUS_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<EmployeeProfileBlockLink> = new AllFields('*', EmployeeProfileBlockLink);
  /**
   * All key fields of the EmployeeProfileBlockLink entity.
   */
  export const _keyFields: Array<Selectable<EmployeeProfileBlockLink>> = [EmployeeProfileBlockLink.EMPLOYEE_PROFILE_BLOCK_CONTENT_CODE, EmployeeProfileBlockLink.EMPLOYEE_PROFILE_PAGE_CONFIG_CODE, EmployeeProfileBlockLink.EMPLOYEE_PROFILE_SECTION_CONFIG_CODE, EmployeeProfileBlockLink.EMPLOYEE_PROFILE_SUB_SECTION_CONFIG_CODE, EmployeeProfileBlockLink.CODE];
  /**
   * Mapping of all key field names to the respective static field property EmployeeProfileBlockLink.
   */
  export const _keys: { [keys: string]: Selectable<EmployeeProfileBlockLink> } = EmployeeProfileBlockLink._keyFields.reduce((acc: { [keys: string]: Selectable<EmployeeProfileBlockLink> }, field: Selectable<EmployeeProfileBlockLink>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
