/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SpotAwardCategoryRequestBuilder } from './SpotAwardCategoryRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "SpotAwardCategory" of service "SFOData".
 */
export class SpotAwardCategory extends Entity implements SpotAwardCategoryType {
  /**
   * Technical entity name for SpotAwardCategory.
   */
  static _entityName = 'SpotAwardCategory';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for SpotAwardCategory.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Spot Award Program_Code.
   * Maximum length: 38.
   */
  spotAwardProgramExternalCode!: string;
  /**
   * Created By.
   * Maximum length: 255.
   * @nullable
   */
  createdBy?: string;
  /**
   * Created Date.
   * @nullable
   */
  createdDateTime?: Moment;
  /**
   * Description.
   * Maximum length: 4000.
   * @nullable
   */
  descriptionDeDe?: string;
  /**
   * Description.
   * Maximum length: 4000.
   * @nullable
   */
  descriptionDefaultValue?: string;
  /**
   * Description.
   * Maximum length: 4000.
   * @nullable
   */
  descriptionEnDebug?: string;
  /**
   * Description.
   * Maximum length: 4000.
   * @nullable
   */
  descriptionEnGb?: string;
  /**
   * Description.
   * Maximum length: 4000.
   * @nullable
   */
  descriptionEnUs?: string;
  /**
   * Description.
   * Maximum length: 4000.
   * @nullable
   */
  descriptionEsEs?: string;
  /**
   * Description.
   * Maximum length: 4000.
   * @nullable
   */
  descriptionEsMx?: string;
  /**
   * Description.
   * Maximum length: 4000.
   * @nullable
   */
  descriptionFrCa?: string;
  /**
   * Description.
   * Maximum length: 4000.
   * @nullable
   */
  descriptionFrFr?: string;
  /**
   * Description.
   * Maximum length: 4000.
   * @nullable
   */
  descriptionItIt?: string;
  /**
   * Description.
   * Maximum length: 4000.
   * @nullable
   */
  descriptionLocalized?: string;
  /**
   * Description.
   * Maximum length: 4000.
   * @nullable
   */
  descriptionNlNl?: string;
  /**
   * Description.
   * Maximum length: 4000.
   * @nullable
   */
  descriptionPtBr?: string;
  /**
   * Description.
   * Maximum length: 4000.
   * @nullable
   */
  descriptionZhCn?: string;
  /**
   * Code.
   * Maximum length: 38.
   */
  externalCode!: string;
  /**
   * Last Modified By.
   * Maximum length: 255.
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
   * mdfSystemRecordId.
   * Maximum length: 255.
   * @nullable
   */
  recordId?: string;
  /**
   * Award Category Name.
   * Maximum length: 255.
   * @nullable
   */
  titleDeDe?: string;
  /**
   * Award Category Name.
   * Maximum length: 255.
   * @nullable
   */
  titleDefaultValue?: string;
  /**
   * Award Category Name.
   * Maximum length: 255.
   * @nullable
   */
  titleEnDebug?: string;
  /**
   * Award Category Name.
   * Maximum length: 255.
   * @nullable
   */
  titleEnGb?: string;
  /**
   * Award Category Name.
   * Maximum length: 255.
   * @nullable
   */
  titleEnUs?: string;
  /**
   * Award Category Name.
   * Maximum length: 255.
   * @nullable
   */
  titleEsEs?: string;
  /**
   * Award Category Name.
   * Maximum length: 255.
   * @nullable
   */
  titleEsMx?: string;
  /**
   * Award Category Name.
   * Maximum length: 255.
   * @nullable
   */
  titleFrCa?: string;
  /**
   * Award Category Name.
   * Maximum length: 255.
   * @nullable
   */
  titleFrFr?: string;
  /**
   * Award Category Name.
   * Maximum length: 255.
   * @nullable
   */
  titleItIt?: string;
  /**
   * Award Category Name.
   * Maximum length: 255.
   * @nullable
   */
  titleLocalized?: string;
  /**
   * Award Category Name.
   * Maximum length: 255.
   * @nullable
   */
  titleNlNl?: string;
  /**
   * Award Category Name.
   * Maximum length: 255.
   * @nullable
   */
  titlePtBr?: string;
  /**
   * Award Category Name.
   * Maximum length: 255.
   * @nullable
   */
  titleZhCn?: string;
  /**
   * One-to-one navigation property to the [[Attachment]] entity.
   */
  categoryImageNav!: Attachment;
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
   * One-to-many navigation property to the [[MdfLocalizedValue]] entity.
   */
  titleTranslationTextNav!: MdfLocalizedValue[];

  /**
   * Returns an entity builder to construct instances `SpotAwardCategory`.
   * @returns A builder that constructs instances of entity type `SpotAwardCategory`.
   */
  static builder(): EntityBuilderType<SpotAwardCategory, SpotAwardCategoryTypeForceMandatory> {
    return Entity.entityBuilder(SpotAwardCategory);
  }

  /**
   * Returns a request builder to construct requests for operations on the `SpotAwardCategory` entity type.
   * @returns A `SpotAwardCategory` request builder.
   */
  static requestBuilder(): SpotAwardCategoryRequestBuilder {
    return new SpotAwardCategoryRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `SpotAwardCategory`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `SpotAwardCategory`.
   */
  static customField(fieldName: string): CustomField<SpotAwardCategory> {
    return Entity.customFieldSelector(fieldName, SpotAwardCategory);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { Attachment, AttachmentType } from './Attachment';
import { User, UserType } from './User';
import { MdfLocalizedValue, MdfLocalizedValueType } from './MdfLocalizedValue';
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';

export interface SpotAwardCategoryType {
  spotAwardProgramExternalCode: string;
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
  externalCode: string;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  mdfSystemRecordStatus?: string;
  recordId?: string;
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
  categoryImageNav: AttachmentType;
  createdByNav: UserType;
  descriptionTranslationTextNav: MdfLocalizedValueType[];
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  titleTranslationTextNav: MdfLocalizedValueType[];
}

export interface SpotAwardCategoryTypeForceMandatory {
  spotAwardProgramExternalCode: string;
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
  externalCode: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  mdfSystemRecordStatus: string;
  recordId: string;
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
  categoryImageNav: AttachmentType;
  createdByNav: UserType;
  descriptionTranslationTextNav: MdfLocalizedValueType[];
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  titleTranslationTextNav: MdfLocalizedValueType[];
}

export namespace SpotAwardCategory {
  /**
   * Static representation of the [[spotAwardProgramExternalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SPOT_AWARD_PROGRAM_EXTERNAL_CODE: StringField<SpotAwardCategory> = new StringField('SpotAwardProgram_externalCode', SpotAwardCategory, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<SpotAwardCategory> = new StringField('createdBy', SpotAwardCategory, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<SpotAwardCategory> = new DateField('createdDateTime', SpotAwardCategory, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[descriptionDeDe]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_DE_DE: StringField<SpotAwardCategory> = new StringField('description_de_DE', SpotAwardCategory, 'Edm.String');
  /**
   * Static representation of the [[descriptionDefaultValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_DEFAULT_VALUE: StringField<SpotAwardCategory> = new StringField('description_defaultValue', SpotAwardCategory, 'Edm.String');
  /**
   * Static representation of the [[descriptionEnDebug]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_EN_DEBUG: StringField<SpotAwardCategory> = new StringField('description_en_DEBUG', SpotAwardCategory, 'Edm.String');
  /**
   * Static representation of the [[descriptionEnGb]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_EN_GB: StringField<SpotAwardCategory> = new StringField('description_en_GB', SpotAwardCategory, 'Edm.String');
  /**
   * Static representation of the [[descriptionEnUs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_EN_US: StringField<SpotAwardCategory> = new StringField('description_en_US', SpotAwardCategory, 'Edm.String');
  /**
   * Static representation of the [[descriptionEsEs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_ES_ES: StringField<SpotAwardCategory> = new StringField('description_es_ES', SpotAwardCategory, 'Edm.String');
  /**
   * Static representation of the [[descriptionEsMx]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_ES_MX: StringField<SpotAwardCategory> = new StringField('description_es_MX', SpotAwardCategory, 'Edm.String');
  /**
   * Static representation of the [[descriptionFrCa]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_FR_CA: StringField<SpotAwardCategory> = new StringField('description_fr_CA', SpotAwardCategory, 'Edm.String');
  /**
   * Static representation of the [[descriptionFrFr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_FR_FR: StringField<SpotAwardCategory> = new StringField('description_fr_FR', SpotAwardCategory, 'Edm.String');
  /**
   * Static representation of the [[descriptionItIt]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_IT_IT: StringField<SpotAwardCategory> = new StringField('description_it_IT', SpotAwardCategory, 'Edm.String');
  /**
   * Static representation of the [[descriptionLocalized]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_LOCALIZED: StringField<SpotAwardCategory> = new StringField('description_localized', SpotAwardCategory, 'Edm.String');
  /**
   * Static representation of the [[descriptionNlNl]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_NL_NL: StringField<SpotAwardCategory> = new StringField('description_nl_NL', SpotAwardCategory, 'Edm.String');
  /**
   * Static representation of the [[descriptionPtBr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_PT_BR: StringField<SpotAwardCategory> = new StringField('description_pt_BR', SpotAwardCategory, 'Edm.String');
  /**
   * Static representation of the [[descriptionZhCn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_ZH_CN: StringField<SpotAwardCategory> = new StringField('description_zh_CN', SpotAwardCategory, 'Edm.String');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: StringField<SpotAwardCategory> = new StringField('externalCode', SpotAwardCategory, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<SpotAwardCategory> = new StringField('lastModifiedBy', SpotAwardCategory, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<SpotAwardCategory> = new DateField('lastModifiedDateTime', SpotAwardCategory, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<SpotAwardCategory> = new StringField('mdfSystemRecordStatus', SpotAwardCategory, 'Edm.String');
  /**
   * Static representation of the [[recordId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RECORD_ID: StringField<SpotAwardCategory> = new StringField('recordId', SpotAwardCategory, 'Edm.String');
  /**
   * Static representation of the [[titleDeDe]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TITLE_DE_DE: StringField<SpotAwardCategory> = new StringField('title_de_DE', SpotAwardCategory, 'Edm.String');
  /**
   * Static representation of the [[titleDefaultValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TITLE_DEFAULT_VALUE: StringField<SpotAwardCategory> = new StringField('title_defaultValue', SpotAwardCategory, 'Edm.String');
  /**
   * Static representation of the [[titleEnDebug]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TITLE_EN_DEBUG: StringField<SpotAwardCategory> = new StringField('title_en_DEBUG', SpotAwardCategory, 'Edm.String');
  /**
   * Static representation of the [[titleEnGb]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TITLE_EN_GB: StringField<SpotAwardCategory> = new StringField('title_en_GB', SpotAwardCategory, 'Edm.String');
  /**
   * Static representation of the [[titleEnUs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TITLE_EN_US: StringField<SpotAwardCategory> = new StringField('title_en_US', SpotAwardCategory, 'Edm.String');
  /**
   * Static representation of the [[titleEsEs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TITLE_ES_ES: StringField<SpotAwardCategory> = new StringField('title_es_ES', SpotAwardCategory, 'Edm.String');
  /**
   * Static representation of the [[titleEsMx]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TITLE_ES_MX: StringField<SpotAwardCategory> = new StringField('title_es_MX', SpotAwardCategory, 'Edm.String');
  /**
   * Static representation of the [[titleFrCa]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TITLE_FR_CA: StringField<SpotAwardCategory> = new StringField('title_fr_CA', SpotAwardCategory, 'Edm.String');
  /**
   * Static representation of the [[titleFrFr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TITLE_FR_FR: StringField<SpotAwardCategory> = new StringField('title_fr_FR', SpotAwardCategory, 'Edm.String');
  /**
   * Static representation of the [[titleItIt]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TITLE_IT_IT: StringField<SpotAwardCategory> = new StringField('title_it_IT', SpotAwardCategory, 'Edm.String');
  /**
   * Static representation of the [[titleLocalized]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TITLE_LOCALIZED: StringField<SpotAwardCategory> = new StringField('title_localized', SpotAwardCategory, 'Edm.String');
  /**
   * Static representation of the [[titleNlNl]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TITLE_NL_NL: StringField<SpotAwardCategory> = new StringField('title_nl_NL', SpotAwardCategory, 'Edm.String');
  /**
   * Static representation of the [[titlePtBr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TITLE_PT_BR: StringField<SpotAwardCategory> = new StringField('title_pt_BR', SpotAwardCategory, 'Edm.String');
  /**
   * Static representation of the [[titleZhCn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TITLE_ZH_CN: StringField<SpotAwardCategory> = new StringField('title_zh_CN', SpotAwardCategory, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[categoryImageNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CATEGORY_IMAGE_NAV: OneToOneLink<SpotAwardCategory, Attachment> = new OneToOneLink('categoryImageNav', SpotAwardCategory, Attachment);
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<SpotAwardCategory, User> = new OneToOneLink('createdByNav', SpotAwardCategory, User);
  /**
   * Static representation of the one-to-many navigation property [[descriptionTranslationTextNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_TRANSLATION_TEXT_NAV: Link<SpotAwardCategory, MdfLocalizedValue> = new Link('descriptionTranslationTextNav', SpotAwardCategory, MdfLocalizedValue);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<SpotAwardCategory, User> = new OneToOneLink('lastModifiedByNav', SpotAwardCategory, User);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<SpotAwardCategory, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', SpotAwardCategory, MdfEnumValue);
  /**
   * Static representation of the one-to-many navigation property [[titleTranslationTextNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TITLE_TRANSLATION_TEXT_NAV: Link<SpotAwardCategory, MdfLocalizedValue> = new Link('titleTranslationTextNav', SpotAwardCategory, MdfLocalizedValue);
  /**
   * All fields of the SpotAwardCategory entity.
   */
  export const _allFields: Array<StringField<SpotAwardCategory> | DateField<SpotAwardCategory> | OneToOneLink<SpotAwardCategory, Attachment> | OneToOneLink<SpotAwardCategory, User> | Link<SpotAwardCategory, MdfLocalizedValue> | OneToOneLink<SpotAwardCategory, MdfEnumValue>> = [
    SpotAwardCategory.SPOT_AWARD_PROGRAM_EXTERNAL_CODE,
    SpotAwardCategory.CREATED_BY,
    SpotAwardCategory.CREATED_DATE_TIME,
    SpotAwardCategory.DESCRIPTION_DE_DE,
    SpotAwardCategory.DESCRIPTION_DEFAULT_VALUE,
    SpotAwardCategory.DESCRIPTION_EN_DEBUG,
    SpotAwardCategory.DESCRIPTION_EN_GB,
    SpotAwardCategory.DESCRIPTION_EN_US,
    SpotAwardCategory.DESCRIPTION_ES_ES,
    SpotAwardCategory.DESCRIPTION_ES_MX,
    SpotAwardCategory.DESCRIPTION_FR_CA,
    SpotAwardCategory.DESCRIPTION_FR_FR,
    SpotAwardCategory.DESCRIPTION_IT_IT,
    SpotAwardCategory.DESCRIPTION_LOCALIZED,
    SpotAwardCategory.DESCRIPTION_NL_NL,
    SpotAwardCategory.DESCRIPTION_PT_BR,
    SpotAwardCategory.DESCRIPTION_ZH_CN,
    SpotAwardCategory.EXTERNAL_CODE,
    SpotAwardCategory.LAST_MODIFIED_BY,
    SpotAwardCategory.LAST_MODIFIED_DATE_TIME,
    SpotAwardCategory.MDF_SYSTEM_RECORD_STATUS,
    SpotAwardCategory.RECORD_ID,
    SpotAwardCategory.TITLE_DE_DE,
    SpotAwardCategory.TITLE_DEFAULT_VALUE,
    SpotAwardCategory.TITLE_EN_DEBUG,
    SpotAwardCategory.TITLE_EN_GB,
    SpotAwardCategory.TITLE_EN_US,
    SpotAwardCategory.TITLE_ES_ES,
    SpotAwardCategory.TITLE_ES_MX,
    SpotAwardCategory.TITLE_FR_CA,
    SpotAwardCategory.TITLE_FR_FR,
    SpotAwardCategory.TITLE_IT_IT,
    SpotAwardCategory.TITLE_LOCALIZED,
    SpotAwardCategory.TITLE_NL_NL,
    SpotAwardCategory.TITLE_PT_BR,
    SpotAwardCategory.TITLE_ZH_CN,
    SpotAwardCategory.CATEGORY_IMAGE_NAV,
    SpotAwardCategory.CREATED_BY_NAV,
    SpotAwardCategory.DESCRIPTION_TRANSLATION_TEXT_NAV,
    SpotAwardCategory.LAST_MODIFIED_BY_NAV,
    SpotAwardCategory.MDF_SYSTEM_RECORD_STATUS_NAV,
    SpotAwardCategory.TITLE_TRANSLATION_TEXT_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<SpotAwardCategory> = new AllFields('*', SpotAwardCategory);
  /**
   * All key fields of the SpotAwardCategory entity.
   */
  export const _keyFields: Array<Selectable<SpotAwardCategory>> = [SpotAwardCategory.SPOT_AWARD_PROGRAM_EXTERNAL_CODE, SpotAwardCategory.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property SpotAwardCategory.
   */
  export const _keys: { [keys: string]: Selectable<SpotAwardCategory> } = SpotAwardCategory._keyFields.reduce((acc: { [keys: string]: Selectable<SpotAwardCategory> }, field: Selectable<SpotAwardCategory>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
