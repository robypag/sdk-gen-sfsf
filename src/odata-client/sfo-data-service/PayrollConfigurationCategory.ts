/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PayrollConfigurationCategoryRequestBuilder } from './PayrollConfigurationCategoryRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "PayrollConfigurationCategory" of service "SFOData".
 */
export class PayrollConfigurationCategory extends Entity implements PayrollConfigurationCategoryType {
  /**
   * Technical entity name for PayrollConfigurationCategory.
   */
  static _entityName = 'PayrollConfigurationCategory';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for PayrollConfigurationCategory.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Payroll System Configuration_External Configuration Code.
   * Maximum length: 128.
   */
  payrollSystemConfigurationExternalCode!: string;
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
   * Portlet Label.
   * Maximum length: 255.
   * @nullable
   */
  externalCategoryNameDeDe?: string;
  /**
   * Portlet Label.
   * Maximum length: 255.
   * @nullable
   */
  externalCategoryNameDefaultValue?: string;
  /**
   * Portlet Label.
   * Maximum length: 255.
   * @nullable
   */
  externalCategoryNameEnDebug?: string;
  /**
   * Portlet Label.
   * Maximum length: 255.
   * @nullable
   */
  externalCategoryNameEnGb?: string;
  /**
   * Portlet Label.
   * Maximum length: 255.
   * @nullable
   */
  externalCategoryNameEnUs?: string;
  /**
   * Portlet Label.
   * Maximum length: 255.
   * @nullable
   */
  externalCategoryNameEsEs?: string;
  /**
   * Portlet Label.
   * Maximum length: 255.
   * @nullable
   */
  externalCategoryNameEsMx?: string;
  /**
   * Portlet Label.
   * Maximum length: 255.
   * @nullable
   */
  externalCategoryNameFrCa?: string;
  /**
   * Portlet Label.
   * Maximum length: 255.
   * @nullable
   */
  externalCategoryNameFrFr?: string;
  /**
   * Portlet Label.
   * Maximum length: 255.
   * @nullable
   */
  externalCategoryNameItIt?: string;
  /**
   * Portlet Label.
   * Maximum length: 255.
   * @nullable
   */
  externalCategoryNameLocalized?: string;
  /**
   * Portlet Label.
   * Maximum length: 255.
   * @nullable
   */
  externalCategoryNameNlNl?: string;
  /**
   * Portlet Label.
   * Maximum length: 255.
   * @nullable
   */
  externalCategoryNamePtBr?: string;
  /**
   * Portlet Label.
   * Maximum length: 255.
   * @nullable
   */
  externalCategoryNameZhCn?: string;
  /**
   * External Portlet Code.
   * Maximum length: 128.
   */
  externalCode!: string;
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
   * One-to-one navigation property to the [[User]] entity.
   */
  createdByNav!: User;
  /**
   * One-to-many navigation property to the [[MdfLocalizedValue]] entity.
   */
  externalCategoryNameTranslationTextNav!: MdfLocalizedValue[];
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  lastModifiedByNav!: User;
  /**
   * One-to-many navigation property to the [[PayrollConfigurationCategoryLink]] entity.
   */
  links!: PayrollConfigurationCategoryLink[];
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  mdfSystemRecordStatusNav!: MdfEnumValue;

  /**
   * Returns an entity builder to construct instances `PayrollConfigurationCategory`.
   * @returns A builder that constructs instances of entity type `PayrollConfigurationCategory`.
   */
  static builder(): EntityBuilderType<PayrollConfigurationCategory, PayrollConfigurationCategoryTypeForceMandatory> {
    return Entity.entityBuilder(PayrollConfigurationCategory);
  }

  /**
   * Returns a request builder to construct requests for operations on the `PayrollConfigurationCategory` entity type.
   * @returns A `PayrollConfigurationCategory` request builder.
   */
  static requestBuilder(): PayrollConfigurationCategoryRequestBuilder {
    return new PayrollConfigurationCategoryRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `PayrollConfigurationCategory`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `PayrollConfigurationCategory`.
   */
  static customField(fieldName: string): CustomField<PayrollConfigurationCategory> {
    return Entity.customFieldSelector(fieldName, PayrollConfigurationCategory);
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
import { PayrollConfigurationCategoryLink, PayrollConfigurationCategoryLinkType } from './PayrollConfigurationCategoryLink';
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';

export interface PayrollConfigurationCategoryType {
  payrollSystemConfigurationExternalCode: string;
  createdBy?: string;
  createdDateTime?: Moment;
  externalCategoryNameDeDe?: string;
  externalCategoryNameDefaultValue?: string;
  externalCategoryNameEnDebug?: string;
  externalCategoryNameEnGb?: string;
  externalCategoryNameEnUs?: string;
  externalCategoryNameEsEs?: string;
  externalCategoryNameEsMx?: string;
  externalCategoryNameFrCa?: string;
  externalCategoryNameFrFr?: string;
  externalCategoryNameItIt?: string;
  externalCategoryNameLocalized?: string;
  externalCategoryNameNlNl?: string;
  externalCategoryNamePtBr?: string;
  externalCategoryNameZhCn?: string;
  externalCode: string;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  mdfSystemRecordStatus?: string;
  createdByNav: UserType;
  externalCategoryNameTranslationTextNav: MdfLocalizedValueType[];
  lastModifiedByNav: UserType;
  links: PayrollConfigurationCategoryLinkType[];
  mdfSystemRecordStatusNav: MdfEnumValueType;
}

export interface PayrollConfigurationCategoryTypeForceMandatory {
  payrollSystemConfigurationExternalCode: string;
  createdBy: string;
  createdDateTime: Moment;
  externalCategoryNameDeDe: string;
  externalCategoryNameDefaultValue: string;
  externalCategoryNameEnDebug: string;
  externalCategoryNameEnGb: string;
  externalCategoryNameEnUs: string;
  externalCategoryNameEsEs: string;
  externalCategoryNameEsMx: string;
  externalCategoryNameFrCa: string;
  externalCategoryNameFrFr: string;
  externalCategoryNameItIt: string;
  externalCategoryNameLocalized: string;
  externalCategoryNameNlNl: string;
  externalCategoryNamePtBr: string;
  externalCategoryNameZhCn: string;
  externalCode: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  mdfSystemRecordStatus: string;
  createdByNav: UserType;
  externalCategoryNameTranslationTextNav: MdfLocalizedValueType[];
  lastModifiedByNav: UserType;
  links: PayrollConfigurationCategoryLinkType[];
  mdfSystemRecordStatusNav: MdfEnumValueType;
}

export namespace PayrollConfigurationCategory {
  /**
   * Static representation of the [[payrollSystemConfigurationExternalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYROLL_SYSTEM_CONFIGURATION_EXTERNAL_CODE: StringField<PayrollConfigurationCategory> = new StringField('PayrollSystemConfiguration_externalCode', PayrollConfigurationCategory, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<PayrollConfigurationCategory> = new StringField('createdBy', PayrollConfigurationCategory, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<PayrollConfigurationCategory> = new DateField('createdDateTime', PayrollConfigurationCategory, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[externalCategoryNameDeDe]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CATEGORY_NAME_DE_DE: StringField<PayrollConfigurationCategory> = new StringField('externalCategoryName_de_DE', PayrollConfigurationCategory, 'Edm.String');
  /**
   * Static representation of the [[externalCategoryNameDefaultValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CATEGORY_NAME_DEFAULT_VALUE: StringField<PayrollConfigurationCategory> = new StringField('externalCategoryName_defaultValue', PayrollConfigurationCategory, 'Edm.String');
  /**
   * Static representation of the [[externalCategoryNameEnDebug]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CATEGORY_NAME_EN_DEBUG: StringField<PayrollConfigurationCategory> = new StringField('externalCategoryName_en_DEBUG', PayrollConfigurationCategory, 'Edm.String');
  /**
   * Static representation of the [[externalCategoryNameEnGb]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CATEGORY_NAME_EN_GB: StringField<PayrollConfigurationCategory> = new StringField('externalCategoryName_en_GB', PayrollConfigurationCategory, 'Edm.String');
  /**
   * Static representation of the [[externalCategoryNameEnUs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CATEGORY_NAME_EN_US: StringField<PayrollConfigurationCategory> = new StringField('externalCategoryName_en_US', PayrollConfigurationCategory, 'Edm.String');
  /**
   * Static representation of the [[externalCategoryNameEsEs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CATEGORY_NAME_ES_ES: StringField<PayrollConfigurationCategory> = new StringField('externalCategoryName_es_ES', PayrollConfigurationCategory, 'Edm.String');
  /**
   * Static representation of the [[externalCategoryNameEsMx]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CATEGORY_NAME_ES_MX: StringField<PayrollConfigurationCategory> = new StringField('externalCategoryName_es_MX', PayrollConfigurationCategory, 'Edm.String');
  /**
   * Static representation of the [[externalCategoryNameFrCa]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CATEGORY_NAME_FR_CA: StringField<PayrollConfigurationCategory> = new StringField('externalCategoryName_fr_CA', PayrollConfigurationCategory, 'Edm.String');
  /**
   * Static representation of the [[externalCategoryNameFrFr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CATEGORY_NAME_FR_FR: StringField<PayrollConfigurationCategory> = new StringField('externalCategoryName_fr_FR', PayrollConfigurationCategory, 'Edm.String');
  /**
   * Static representation of the [[externalCategoryNameItIt]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CATEGORY_NAME_IT_IT: StringField<PayrollConfigurationCategory> = new StringField('externalCategoryName_it_IT', PayrollConfigurationCategory, 'Edm.String');
  /**
   * Static representation of the [[externalCategoryNameLocalized]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CATEGORY_NAME_LOCALIZED: StringField<PayrollConfigurationCategory> = new StringField('externalCategoryName_localized', PayrollConfigurationCategory, 'Edm.String');
  /**
   * Static representation of the [[externalCategoryNameNlNl]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CATEGORY_NAME_NL_NL: StringField<PayrollConfigurationCategory> = new StringField('externalCategoryName_nl_NL', PayrollConfigurationCategory, 'Edm.String');
  /**
   * Static representation of the [[externalCategoryNamePtBr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CATEGORY_NAME_PT_BR: StringField<PayrollConfigurationCategory> = new StringField('externalCategoryName_pt_BR', PayrollConfigurationCategory, 'Edm.String');
  /**
   * Static representation of the [[externalCategoryNameZhCn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CATEGORY_NAME_ZH_CN: StringField<PayrollConfigurationCategory> = new StringField('externalCategoryName_zh_CN', PayrollConfigurationCategory, 'Edm.String');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: StringField<PayrollConfigurationCategory> = new StringField('externalCode', PayrollConfigurationCategory, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<PayrollConfigurationCategory> = new StringField('lastModifiedBy', PayrollConfigurationCategory, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<PayrollConfigurationCategory> = new DateField('lastModifiedDateTime', PayrollConfigurationCategory, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<PayrollConfigurationCategory> = new StringField('mdfSystemRecordStatus', PayrollConfigurationCategory, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<PayrollConfigurationCategory, User> = new OneToOneLink('createdByNav', PayrollConfigurationCategory, User);
  /**
   * Static representation of the one-to-many navigation property [[externalCategoryNameTranslationTextNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CATEGORY_NAME_TRANSLATION_TEXT_NAV: Link<PayrollConfigurationCategory, MdfLocalizedValue> = new Link('externalCategoryNameTranslationTextNav', PayrollConfigurationCategory, MdfLocalizedValue);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<PayrollConfigurationCategory, User> = new OneToOneLink('lastModifiedByNav', PayrollConfigurationCategory, User);
  /**
   * Static representation of the one-to-many navigation property [[links]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LINKS: Link<PayrollConfigurationCategory, PayrollConfigurationCategoryLink> = new Link('links', PayrollConfigurationCategory, PayrollConfigurationCategoryLink);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<PayrollConfigurationCategory, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', PayrollConfigurationCategory, MdfEnumValue);
  /**
   * All fields of the PayrollConfigurationCategory entity.
   */
  export const _allFields: Array<StringField<PayrollConfigurationCategory> | DateField<PayrollConfigurationCategory> | OneToOneLink<PayrollConfigurationCategory, User> | Link<PayrollConfigurationCategory, MdfLocalizedValue> | Link<PayrollConfigurationCategory, PayrollConfigurationCategoryLink> | OneToOneLink<PayrollConfigurationCategory, MdfEnumValue>> = [
    PayrollConfigurationCategory.PAYROLL_SYSTEM_CONFIGURATION_EXTERNAL_CODE,
    PayrollConfigurationCategory.CREATED_BY,
    PayrollConfigurationCategory.CREATED_DATE_TIME,
    PayrollConfigurationCategory.EXTERNAL_CATEGORY_NAME_DE_DE,
    PayrollConfigurationCategory.EXTERNAL_CATEGORY_NAME_DEFAULT_VALUE,
    PayrollConfigurationCategory.EXTERNAL_CATEGORY_NAME_EN_DEBUG,
    PayrollConfigurationCategory.EXTERNAL_CATEGORY_NAME_EN_GB,
    PayrollConfigurationCategory.EXTERNAL_CATEGORY_NAME_EN_US,
    PayrollConfigurationCategory.EXTERNAL_CATEGORY_NAME_ES_ES,
    PayrollConfigurationCategory.EXTERNAL_CATEGORY_NAME_ES_MX,
    PayrollConfigurationCategory.EXTERNAL_CATEGORY_NAME_FR_CA,
    PayrollConfigurationCategory.EXTERNAL_CATEGORY_NAME_FR_FR,
    PayrollConfigurationCategory.EXTERNAL_CATEGORY_NAME_IT_IT,
    PayrollConfigurationCategory.EXTERNAL_CATEGORY_NAME_LOCALIZED,
    PayrollConfigurationCategory.EXTERNAL_CATEGORY_NAME_NL_NL,
    PayrollConfigurationCategory.EXTERNAL_CATEGORY_NAME_PT_BR,
    PayrollConfigurationCategory.EXTERNAL_CATEGORY_NAME_ZH_CN,
    PayrollConfigurationCategory.EXTERNAL_CODE,
    PayrollConfigurationCategory.LAST_MODIFIED_BY,
    PayrollConfigurationCategory.LAST_MODIFIED_DATE_TIME,
    PayrollConfigurationCategory.MDF_SYSTEM_RECORD_STATUS,
    PayrollConfigurationCategory.CREATED_BY_NAV,
    PayrollConfigurationCategory.EXTERNAL_CATEGORY_NAME_TRANSLATION_TEXT_NAV,
    PayrollConfigurationCategory.LAST_MODIFIED_BY_NAV,
    PayrollConfigurationCategory.LINKS,
    PayrollConfigurationCategory.MDF_SYSTEM_RECORD_STATUS_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<PayrollConfigurationCategory> = new AllFields('*', PayrollConfigurationCategory);
  /**
   * All key fields of the PayrollConfigurationCategory entity.
   */
  export const _keyFields: Array<Selectable<PayrollConfigurationCategory>> = [PayrollConfigurationCategory.PAYROLL_SYSTEM_CONFIGURATION_EXTERNAL_CODE, PayrollConfigurationCategory.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property PayrollConfigurationCategory.
   */
  export const _keys: { [keys: string]: Selectable<PayrollConfigurationCategory> } = PayrollConfigurationCategory._keyFields.reduce((acc: { [keys: string]: Selectable<PayrollConfigurationCategory> }, field: Selectable<PayrollConfigurationCategory>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
