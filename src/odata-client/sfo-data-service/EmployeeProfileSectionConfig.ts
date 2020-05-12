/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EmployeeProfileSectionConfigRequestBuilder } from './EmployeeProfileSectionConfigRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "EmployeeProfileSectionConfig" of service "SFOData".
 */
export class EmployeeProfileSectionConfig extends Entity implements EmployeeProfileSectionConfigType {
  /**
   * Technical entity name for EmployeeProfileSectionConfig.
   */
  static _entityName = 'EmployeeProfileSectionConfig';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for EmployeeProfileSectionConfig.
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
   * titleForContingent.
   * Maximum length: 1000.
   * @nullable
   */
  titleForContingentDeDe?: string;
  /**
   * titleForContingent.
   * Maximum length: 1000.
   * @nullable
   */
  titleForContingentDefaultValue?: string;
  /**
   * titleForContingent.
   * Maximum length: 1000.
   * @nullable
   */
  titleForContingentEnDebug?: string;
  /**
   * titleForContingent.
   * Maximum length: 1000.
   * @nullable
   */
  titleForContingentEnGb?: string;
  /**
   * titleForContingent.
   * Maximum length: 1000.
   * @nullable
   */
  titleForContingentEnUs?: string;
  /**
   * titleForContingent.
   * Maximum length: 1000.
   * @nullable
   */
  titleForContingentEsEs?: string;
  /**
   * titleForContingent.
   * Maximum length: 1000.
   * @nullable
   */
  titleForContingentEsMx?: string;
  /**
   * titleForContingent.
   * Maximum length: 1000.
   * @nullable
   */
  titleForContingentFrCa?: string;
  /**
   * titleForContingent.
   * Maximum length: 1000.
   * @nullable
   */
  titleForContingentFrFr?: string;
  /**
   * titleForContingent.
   * Maximum length: 1000.
   * @nullable
   */
  titleForContingentItIt?: string;
  /**
   * titleForContingent.
   * Maximum length: 1000.
   * @nullable
   */
  titleForContingentLocalized?: string;
  /**
   * titleForContingent.
   * Maximum length: 1000.
   * @nullable
   */
  titleForContingentNlNl?: string;
  /**
   * titleForContingent.
   * Maximum length: 1000.
   * @nullable
   */
  titleForContingentPtBr?: string;
  /**
   * titleForContingent.
   * Maximum length: 1000.
   * @nullable
   */
  titleForContingentZhCn?: string;
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
   * One-to-many navigation property to the [[EmployeeProfileSubSectionConfig]] entity.
   */
  subSections!: EmployeeProfileSubSectionConfig[];
  /**
   * One-to-many navigation property to the [[MdfLocalizedValue]] entity.
   */
  titleForContingentTranslationTextNav!: MdfLocalizedValue[];
  /**
   * One-to-many navigation property to the [[MdfLocalizedValue]] entity.
   */
  titleTranslationTextNav!: MdfLocalizedValue[];
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  typeNav!: MdfEnumValue;

  /**
   * Returns an entity builder to construct instances `EmployeeProfileSectionConfig`.
   * @returns A builder that constructs instances of entity type `EmployeeProfileSectionConfig`.
   */
  static builder(): EntityBuilderType<EmployeeProfileSectionConfig, EmployeeProfileSectionConfigTypeForceMandatory> {
    return Entity.entityBuilder(EmployeeProfileSectionConfig);
  }

  /**
   * Returns a request builder to construct requests for operations on the `EmployeeProfileSectionConfig` entity type.
   * @returns A `EmployeeProfileSectionConfig` request builder.
   */
  static requestBuilder(): EmployeeProfileSectionConfigRequestBuilder {
    return new EmployeeProfileSectionConfigRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `EmployeeProfileSectionConfig`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `EmployeeProfileSectionConfig`.
   */
  static customField(fieldName: string): CustomField<EmployeeProfileSectionConfig> {
    return Entity.customFieldSelector(fieldName, EmployeeProfileSectionConfig);
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
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';
import { EmployeeProfileSubSectionConfig, EmployeeProfileSubSectionConfigType } from './EmployeeProfileSubSectionConfig';
import { MdfLocalizedValue, MdfLocalizedValueType } from './MdfLocalizedValue';

export interface EmployeeProfileSectionConfigType {
  employeeProfilePageConfigCode: string;
  code: string;
  createdBy?: string;
  createdDateTime?: Moment;
  isEnabled?: boolean;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  mdfSystemRecordStatus?: string;
  order?: BigNumber;
  titleForContingentDeDe?: string;
  titleForContingentDefaultValue?: string;
  titleForContingentEnDebug?: string;
  titleForContingentEnGb?: string;
  titleForContingentEnUs?: string;
  titleForContingentEsEs?: string;
  titleForContingentEsMx?: string;
  titleForContingentFrCa?: string;
  titleForContingentFrFr?: string;
  titleForContingentItIt?: string;
  titleForContingentLocalized?: string;
  titleForContingentNlNl?: string;
  titleForContingentPtBr?: string;
  titleForContingentZhCn?: string;
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
  createdByNav: UserType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  subSections: EmployeeProfileSubSectionConfigType[];
  titleForContingentTranslationTextNav: MdfLocalizedValueType[];
  titleTranslationTextNav: MdfLocalizedValueType[];
  typeNav: MdfEnumValueType;
}

export interface EmployeeProfileSectionConfigTypeForceMandatory {
  employeeProfilePageConfigCode: string;
  code: string;
  createdBy: string;
  createdDateTime: Moment;
  isEnabled: boolean;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  mdfSystemRecordStatus: string;
  order: BigNumber;
  titleForContingentDeDe: string;
  titleForContingentDefaultValue: string;
  titleForContingentEnDebug: string;
  titleForContingentEnGb: string;
  titleForContingentEnUs: string;
  titleForContingentEsEs: string;
  titleForContingentEsMx: string;
  titleForContingentFrCa: string;
  titleForContingentFrFr: string;
  titleForContingentItIt: string;
  titleForContingentLocalized: string;
  titleForContingentNlNl: string;
  titleForContingentPtBr: string;
  titleForContingentZhCn: string;
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
  createdByNav: UserType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  subSections: EmployeeProfileSubSectionConfigType[];
  titleForContingentTranslationTextNav: MdfLocalizedValueType[];
  titleTranslationTextNav: MdfLocalizedValueType[];
  typeNav: MdfEnumValueType;
}

export namespace EmployeeProfileSectionConfig {
  /**
   * Static representation of the [[employeeProfilePageConfigCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMPLOYEE_PROFILE_PAGE_CONFIG_CODE: StringField<EmployeeProfileSectionConfig> = new StringField('EmployeeProfilePageConfig_code', EmployeeProfileSectionConfig, 'Edm.String');
  /**
   * Static representation of the [[code]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CODE: StringField<EmployeeProfileSectionConfig> = new StringField('code', EmployeeProfileSectionConfig, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<EmployeeProfileSectionConfig> = new StringField('createdBy', EmployeeProfileSectionConfig, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<EmployeeProfileSectionConfig> = new DateField('createdDateTime', EmployeeProfileSectionConfig, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[isEnabled]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_ENABLED: BooleanField<EmployeeProfileSectionConfig> = new BooleanField('isEnabled', EmployeeProfileSectionConfig, 'Edm.Boolean');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<EmployeeProfileSectionConfig> = new StringField('lastModifiedBy', EmployeeProfileSectionConfig, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<EmployeeProfileSectionConfig> = new DateField('lastModifiedDateTime', EmployeeProfileSectionConfig, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<EmployeeProfileSectionConfig> = new StringField('mdfSystemRecordStatus', EmployeeProfileSectionConfig, 'Edm.String');
  /**
   * Static representation of the [[order]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ORDER: BigNumberField<EmployeeProfileSectionConfig> = new BigNumberField('order', EmployeeProfileSectionConfig, 'Edm.Int64');
  /**
   * Static representation of the [[titleForContingentDeDe]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TITLE_FOR_CONTINGENT_DE_DE: StringField<EmployeeProfileSectionConfig> = new StringField('titleForContingent_de_DE', EmployeeProfileSectionConfig, 'Edm.String');
  /**
   * Static representation of the [[titleForContingentDefaultValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TITLE_FOR_CONTINGENT_DEFAULT_VALUE: StringField<EmployeeProfileSectionConfig> = new StringField('titleForContingent_defaultValue', EmployeeProfileSectionConfig, 'Edm.String');
  /**
   * Static representation of the [[titleForContingentEnDebug]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TITLE_FOR_CONTINGENT_EN_DEBUG: StringField<EmployeeProfileSectionConfig> = new StringField('titleForContingent_en_DEBUG', EmployeeProfileSectionConfig, 'Edm.String');
  /**
   * Static representation of the [[titleForContingentEnGb]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TITLE_FOR_CONTINGENT_EN_GB: StringField<EmployeeProfileSectionConfig> = new StringField('titleForContingent_en_GB', EmployeeProfileSectionConfig, 'Edm.String');
  /**
   * Static representation of the [[titleForContingentEnUs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TITLE_FOR_CONTINGENT_EN_US: StringField<EmployeeProfileSectionConfig> = new StringField('titleForContingent_en_US', EmployeeProfileSectionConfig, 'Edm.String');
  /**
   * Static representation of the [[titleForContingentEsEs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TITLE_FOR_CONTINGENT_ES_ES: StringField<EmployeeProfileSectionConfig> = new StringField('titleForContingent_es_ES', EmployeeProfileSectionConfig, 'Edm.String');
  /**
   * Static representation of the [[titleForContingentEsMx]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TITLE_FOR_CONTINGENT_ES_MX: StringField<EmployeeProfileSectionConfig> = new StringField('titleForContingent_es_MX', EmployeeProfileSectionConfig, 'Edm.String');
  /**
   * Static representation of the [[titleForContingentFrCa]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TITLE_FOR_CONTINGENT_FR_CA: StringField<EmployeeProfileSectionConfig> = new StringField('titleForContingent_fr_CA', EmployeeProfileSectionConfig, 'Edm.String');
  /**
   * Static representation of the [[titleForContingentFrFr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TITLE_FOR_CONTINGENT_FR_FR: StringField<EmployeeProfileSectionConfig> = new StringField('titleForContingent_fr_FR', EmployeeProfileSectionConfig, 'Edm.String');
  /**
   * Static representation of the [[titleForContingentItIt]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TITLE_FOR_CONTINGENT_IT_IT: StringField<EmployeeProfileSectionConfig> = new StringField('titleForContingent_it_IT', EmployeeProfileSectionConfig, 'Edm.String');
  /**
   * Static representation of the [[titleForContingentLocalized]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TITLE_FOR_CONTINGENT_LOCALIZED: StringField<EmployeeProfileSectionConfig> = new StringField('titleForContingent_localized', EmployeeProfileSectionConfig, 'Edm.String');
  /**
   * Static representation of the [[titleForContingentNlNl]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TITLE_FOR_CONTINGENT_NL_NL: StringField<EmployeeProfileSectionConfig> = new StringField('titleForContingent_nl_NL', EmployeeProfileSectionConfig, 'Edm.String');
  /**
   * Static representation of the [[titleForContingentPtBr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TITLE_FOR_CONTINGENT_PT_BR: StringField<EmployeeProfileSectionConfig> = new StringField('titleForContingent_pt_BR', EmployeeProfileSectionConfig, 'Edm.String');
  /**
   * Static representation of the [[titleForContingentZhCn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TITLE_FOR_CONTINGENT_ZH_CN: StringField<EmployeeProfileSectionConfig> = new StringField('titleForContingent_zh_CN', EmployeeProfileSectionConfig, 'Edm.String');
  /**
   * Static representation of the [[titleDeDe]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TITLE_DE_DE: StringField<EmployeeProfileSectionConfig> = new StringField('title_de_DE', EmployeeProfileSectionConfig, 'Edm.String');
  /**
   * Static representation of the [[titleDefaultValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TITLE_DEFAULT_VALUE: StringField<EmployeeProfileSectionConfig> = new StringField('title_defaultValue', EmployeeProfileSectionConfig, 'Edm.String');
  /**
   * Static representation of the [[titleEnDebug]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TITLE_EN_DEBUG: StringField<EmployeeProfileSectionConfig> = new StringField('title_en_DEBUG', EmployeeProfileSectionConfig, 'Edm.String');
  /**
   * Static representation of the [[titleEnGb]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TITLE_EN_GB: StringField<EmployeeProfileSectionConfig> = new StringField('title_en_GB', EmployeeProfileSectionConfig, 'Edm.String');
  /**
   * Static representation of the [[titleEnUs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TITLE_EN_US: StringField<EmployeeProfileSectionConfig> = new StringField('title_en_US', EmployeeProfileSectionConfig, 'Edm.String');
  /**
   * Static representation of the [[titleEsEs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TITLE_ES_ES: StringField<EmployeeProfileSectionConfig> = new StringField('title_es_ES', EmployeeProfileSectionConfig, 'Edm.String');
  /**
   * Static representation of the [[titleEsMx]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TITLE_ES_MX: StringField<EmployeeProfileSectionConfig> = new StringField('title_es_MX', EmployeeProfileSectionConfig, 'Edm.String');
  /**
   * Static representation of the [[titleFrCa]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TITLE_FR_CA: StringField<EmployeeProfileSectionConfig> = new StringField('title_fr_CA', EmployeeProfileSectionConfig, 'Edm.String');
  /**
   * Static representation of the [[titleFrFr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TITLE_FR_FR: StringField<EmployeeProfileSectionConfig> = new StringField('title_fr_FR', EmployeeProfileSectionConfig, 'Edm.String');
  /**
   * Static representation of the [[titleItIt]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TITLE_IT_IT: StringField<EmployeeProfileSectionConfig> = new StringField('title_it_IT', EmployeeProfileSectionConfig, 'Edm.String');
  /**
   * Static representation of the [[titleLocalized]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TITLE_LOCALIZED: StringField<EmployeeProfileSectionConfig> = new StringField('title_localized', EmployeeProfileSectionConfig, 'Edm.String');
  /**
   * Static representation of the [[titleNlNl]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TITLE_NL_NL: StringField<EmployeeProfileSectionConfig> = new StringField('title_nl_NL', EmployeeProfileSectionConfig, 'Edm.String');
  /**
   * Static representation of the [[titlePtBr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TITLE_PT_BR: StringField<EmployeeProfileSectionConfig> = new StringField('title_pt_BR', EmployeeProfileSectionConfig, 'Edm.String');
  /**
   * Static representation of the [[titleZhCn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TITLE_ZH_CN: StringField<EmployeeProfileSectionConfig> = new StringField('title_zh_CN', EmployeeProfileSectionConfig, 'Edm.String');
  /**
   * Static representation of the [[type]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TYPE: StringField<EmployeeProfileSectionConfig> = new StringField('type', EmployeeProfileSectionConfig, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<EmployeeProfileSectionConfig, User> = new OneToOneLink('createdByNav', EmployeeProfileSectionConfig, User);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<EmployeeProfileSectionConfig, User> = new OneToOneLink('lastModifiedByNav', EmployeeProfileSectionConfig, User);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<EmployeeProfileSectionConfig, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', EmployeeProfileSectionConfig, MdfEnumValue);
  /**
   * Static representation of the one-to-many navigation property [[subSections]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUB_SECTIONS: Link<EmployeeProfileSectionConfig, EmployeeProfileSubSectionConfig> = new Link('subSections', EmployeeProfileSectionConfig, EmployeeProfileSubSectionConfig);
  /**
   * Static representation of the one-to-many navigation property [[titleForContingentTranslationTextNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TITLE_FOR_CONTINGENT_TRANSLATION_TEXT_NAV: Link<EmployeeProfileSectionConfig, MdfLocalizedValue> = new Link('titleForContingentTranslationTextNav', EmployeeProfileSectionConfig, MdfLocalizedValue);
  /**
   * Static representation of the one-to-many navigation property [[titleTranslationTextNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TITLE_TRANSLATION_TEXT_NAV: Link<EmployeeProfileSectionConfig, MdfLocalizedValue> = new Link('titleTranslationTextNav', EmployeeProfileSectionConfig, MdfLocalizedValue);
  /**
   * Static representation of the one-to-one navigation property [[typeNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TYPE_NAV: OneToOneLink<EmployeeProfileSectionConfig, MdfEnumValue> = new OneToOneLink('typeNav', EmployeeProfileSectionConfig, MdfEnumValue);
  /**
   * All fields of the EmployeeProfileSectionConfig entity.
   */
  export const _allFields: Array<StringField<EmployeeProfileSectionConfig> | DateField<EmployeeProfileSectionConfig> | BooleanField<EmployeeProfileSectionConfig> | BigNumberField<EmployeeProfileSectionConfig> | OneToOneLink<EmployeeProfileSectionConfig, User> | OneToOneLink<EmployeeProfileSectionConfig, MdfEnumValue> | Link<EmployeeProfileSectionConfig, EmployeeProfileSubSectionConfig> | Link<EmployeeProfileSectionConfig, MdfLocalizedValue>> = [
    EmployeeProfileSectionConfig.EMPLOYEE_PROFILE_PAGE_CONFIG_CODE,
    EmployeeProfileSectionConfig.CODE,
    EmployeeProfileSectionConfig.CREATED_BY,
    EmployeeProfileSectionConfig.CREATED_DATE_TIME,
    EmployeeProfileSectionConfig.IS_ENABLED,
    EmployeeProfileSectionConfig.LAST_MODIFIED_BY,
    EmployeeProfileSectionConfig.LAST_MODIFIED_DATE_TIME,
    EmployeeProfileSectionConfig.MDF_SYSTEM_RECORD_STATUS,
    EmployeeProfileSectionConfig.ORDER,
    EmployeeProfileSectionConfig.TITLE_FOR_CONTINGENT_DE_DE,
    EmployeeProfileSectionConfig.TITLE_FOR_CONTINGENT_DEFAULT_VALUE,
    EmployeeProfileSectionConfig.TITLE_FOR_CONTINGENT_EN_DEBUG,
    EmployeeProfileSectionConfig.TITLE_FOR_CONTINGENT_EN_GB,
    EmployeeProfileSectionConfig.TITLE_FOR_CONTINGENT_EN_US,
    EmployeeProfileSectionConfig.TITLE_FOR_CONTINGENT_ES_ES,
    EmployeeProfileSectionConfig.TITLE_FOR_CONTINGENT_ES_MX,
    EmployeeProfileSectionConfig.TITLE_FOR_CONTINGENT_FR_CA,
    EmployeeProfileSectionConfig.TITLE_FOR_CONTINGENT_FR_FR,
    EmployeeProfileSectionConfig.TITLE_FOR_CONTINGENT_IT_IT,
    EmployeeProfileSectionConfig.TITLE_FOR_CONTINGENT_LOCALIZED,
    EmployeeProfileSectionConfig.TITLE_FOR_CONTINGENT_NL_NL,
    EmployeeProfileSectionConfig.TITLE_FOR_CONTINGENT_PT_BR,
    EmployeeProfileSectionConfig.TITLE_FOR_CONTINGENT_ZH_CN,
    EmployeeProfileSectionConfig.TITLE_DE_DE,
    EmployeeProfileSectionConfig.TITLE_DEFAULT_VALUE,
    EmployeeProfileSectionConfig.TITLE_EN_DEBUG,
    EmployeeProfileSectionConfig.TITLE_EN_GB,
    EmployeeProfileSectionConfig.TITLE_EN_US,
    EmployeeProfileSectionConfig.TITLE_ES_ES,
    EmployeeProfileSectionConfig.TITLE_ES_MX,
    EmployeeProfileSectionConfig.TITLE_FR_CA,
    EmployeeProfileSectionConfig.TITLE_FR_FR,
    EmployeeProfileSectionConfig.TITLE_IT_IT,
    EmployeeProfileSectionConfig.TITLE_LOCALIZED,
    EmployeeProfileSectionConfig.TITLE_NL_NL,
    EmployeeProfileSectionConfig.TITLE_PT_BR,
    EmployeeProfileSectionConfig.TITLE_ZH_CN,
    EmployeeProfileSectionConfig.TYPE,
    EmployeeProfileSectionConfig.CREATED_BY_NAV,
    EmployeeProfileSectionConfig.LAST_MODIFIED_BY_NAV,
    EmployeeProfileSectionConfig.MDF_SYSTEM_RECORD_STATUS_NAV,
    EmployeeProfileSectionConfig.SUB_SECTIONS,
    EmployeeProfileSectionConfig.TITLE_FOR_CONTINGENT_TRANSLATION_TEXT_NAV,
    EmployeeProfileSectionConfig.TITLE_TRANSLATION_TEXT_NAV,
    EmployeeProfileSectionConfig.TYPE_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<EmployeeProfileSectionConfig> = new AllFields('*', EmployeeProfileSectionConfig);
  /**
   * All key fields of the EmployeeProfileSectionConfig entity.
   */
  export const _keyFields: Array<Selectable<EmployeeProfileSectionConfig>> = [EmployeeProfileSectionConfig.EMPLOYEE_PROFILE_PAGE_CONFIG_CODE, EmployeeProfileSectionConfig.CODE];
  /**
   * Mapping of all key field names to the respective static field property EmployeeProfileSectionConfig.
   */
  export const _keys: { [keys: string]: Selectable<EmployeeProfileSectionConfig> } = EmployeeProfileSectionConfig._keyFields.reduce((acc: { [keys: string]: Selectable<EmployeeProfileSectionConfig> }, field: Selectable<EmployeeProfileSectionConfig>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
