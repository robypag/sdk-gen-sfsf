/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SpotAwardLevelRequestBuilder } from './SpotAwardLevelRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "SpotAwardLevel" of service "SFOData".
 */
export class SpotAwardLevel extends Entity implements SpotAwardLevelType {
  /**
   * Technical entity name for SpotAwardLevel.
   */
  static _entityName = 'SpotAwardLevel';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for SpotAwardLevel.
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
   * Award Level Name.
   * Maximum length: 255.
   * @nullable
   */
  titleDeDe?: string;
  /**
   * Award Level Name.
   * Maximum length: 255.
   * @nullable
   */
  titleDefaultValue?: string;
  /**
   * Award Level Name.
   * Maximum length: 255.
   * @nullable
   */
  titleEnDebug?: string;
  /**
   * Award Level Name.
   * Maximum length: 255.
   * @nullable
   */
  titleEnGb?: string;
  /**
   * Award Level Name.
   * Maximum length: 255.
   * @nullable
   */
  titleEnUs?: string;
  /**
   * Award Level Name.
   * Maximum length: 255.
   * @nullable
   */
  titleEsEs?: string;
  /**
   * Award Level Name.
   * Maximum length: 255.
   * @nullable
   */
  titleEsMx?: string;
  /**
   * Award Level Name.
   * Maximum length: 255.
   * @nullable
   */
  titleFrCa?: string;
  /**
   * Award Level Name.
   * Maximum length: 255.
   * @nullable
   */
  titleFrFr?: string;
  /**
   * Award Level Name.
   * Maximum length: 255.
   * @nullable
   */
  titleItIt?: string;
  /**
   * Award Level Name.
   * Maximum length: 255.
   * @nullable
   */
  titleLocalized?: string;
  /**
   * Award Level Name.
   * Maximum length: 255.
   * @nullable
   */
  titleNlNl?: string;
  /**
   * Award Level Name.
   * Maximum length: 255.
   * @nullable
   */
  titlePtBr?: string;
  /**
   * Award Level Name.
   * Maximum length: 255.
   * @nullable
   */
  titleZhCn?: string;
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
   * One-to-one navigation property to the [[Attachment]] entity.
   */
  levelImageNav!: Attachment;
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  mdfSystemRecordStatusNav!: MdfEnumValue;
  /**
   * One-to-many navigation property to the [[MdfLocalizedValue]] entity.
   */
  titleTranslationTextNav!: MdfLocalizedValue[];

  /**
   * Returns an entity builder to construct instances `SpotAwardLevel`.
   * @returns A builder that constructs instances of entity type `SpotAwardLevel`.
   */
  static builder(): EntityBuilderType<SpotAwardLevel, SpotAwardLevelTypeForceMandatory> {
    return Entity.entityBuilder(SpotAwardLevel);
  }

  /**
   * Returns a request builder to construct requests for operations on the `SpotAwardLevel` entity type.
   * @returns A `SpotAwardLevel` request builder.
   */
  static requestBuilder(): SpotAwardLevelRequestBuilder {
    return new SpotAwardLevelRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `SpotAwardLevel`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `SpotAwardLevel`.
   */
  static customField(fieldName: string): CustomField<SpotAwardLevel> {
    return Entity.customFieldSelector(fieldName, SpotAwardLevel);
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
import { Attachment, AttachmentType } from './Attachment';
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';

export interface SpotAwardLevelType {
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
  createdByNav: UserType;
  descriptionTranslationTextNav: MdfLocalizedValueType[];
  lastModifiedByNav: UserType;
  levelImageNav: AttachmentType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  titleTranslationTextNav: MdfLocalizedValueType[];
}

export interface SpotAwardLevelTypeForceMandatory {
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
  createdByNav: UserType;
  descriptionTranslationTextNav: MdfLocalizedValueType[];
  lastModifiedByNav: UserType;
  levelImageNav: AttachmentType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  titleTranslationTextNav: MdfLocalizedValueType[];
}

export namespace SpotAwardLevel {
  /**
   * Static representation of the [[spotAwardProgramExternalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SPOT_AWARD_PROGRAM_EXTERNAL_CODE: StringField<SpotAwardLevel> = new StringField('SpotAwardProgram_externalCode', SpotAwardLevel, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<SpotAwardLevel> = new StringField('createdBy', SpotAwardLevel, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<SpotAwardLevel> = new DateField('createdDateTime', SpotAwardLevel, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[descriptionDeDe]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_DE_DE: StringField<SpotAwardLevel> = new StringField('description_de_DE', SpotAwardLevel, 'Edm.String');
  /**
   * Static representation of the [[descriptionDefaultValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_DEFAULT_VALUE: StringField<SpotAwardLevel> = new StringField('description_defaultValue', SpotAwardLevel, 'Edm.String');
  /**
   * Static representation of the [[descriptionEnDebug]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_EN_DEBUG: StringField<SpotAwardLevel> = new StringField('description_en_DEBUG', SpotAwardLevel, 'Edm.String');
  /**
   * Static representation of the [[descriptionEnGb]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_EN_GB: StringField<SpotAwardLevel> = new StringField('description_en_GB', SpotAwardLevel, 'Edm.String');
  /**
   * Static representation of the [[descriptionEnUs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_EN_US: StringField<SpotAwardLevel> = new StringField('description_en_US', SpotAwardLevel, 'Edm.String');
  /**
   * Static representation of the [[descriptionEsEs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_ES_ES: StringField<SpotAwardLevel> = new StringField('description_es_ES', SpotAwardLevel, 'Edm.String');
  /**
   * Static representation of the [[descriptionEsMx]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_ES_MX: StringField<SpotAwardLevel> = new StringField('description_es_MX', SpotAwardLevel, 'Edm.String');
  /**
   * Static representation of the [[descriptionFrCa]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_FR_CA: StringField<SpotAwardLevel> = new StringField('description_fr_CA', SpotAwardLevel, 'Edm.String');
  /**
   * Static representation of the [[descriptionFrFr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_FR_FR: StringField<SpotAwardLevel> = new StringField('description_fr_FR', SpotAwardLevel, 'Edm.String');
  /**
   * Static representation of the [[descriptionItIt]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_IT_IT: StringField<SpotAwardLevel> = new StringField('description_it_IT', SpotAwardLevel, 'Edm.String');
  /**
   * Static representation of the [[descriptionLocalized]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_LOCALIZED: StringField<SpotAwardLevel> = new StringField('description_localized', SpotAwardLevel, 'Edm.String');
  /**
   * Static representation of the [[descriptionNlNl]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_NL_NL: StringField<SpotAwardLevel> = new StringField('description_nl_NL', SpotAwardLevel, 'Edm.String');
  /**
   * Static representation of the [[descriptionPtBr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_PT_BR: StringField<SpotAwardLevel> = new StringField('description_pt_BR', SpotAwardLevel, 'Edm.String');
  /**
   * Static representation of the [[descriptionZhCn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_ZH_CN: StringField<SpotAwardLevel> = new StringField('description_zh_CN', SpotAwardLevel, 'Edm.String');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: StringField<SpotAwardLevel> = new StringField('externalCode', SpotAwardLevel, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<SpotAwardLevel> = new StringField('lastModifiedBy', SpotAwardLevel, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<SpotAwardLevel> = new DateField('lastModifiedDateTime', SpotAwardLevel, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<SpotAwardLevel> = new StringField('mdfSystemRecordStatus', SpotAwardLevel, 'Edm.String');
  /**
   * Static representation of the [[recordId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RECORD_ID: StringField<SpotAwardLevel> = new StringField('recordId', SpotAwardLevel, 'Edm.String');
  /**
   * Static representation of the [[titleDeDe]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TITLE_DE_DE: StringField<SpotAwardLevel> = new StringField('title_de_DE', SpotAwardLevel, 'Edm.String');
  /**
   * Static representation of the [[titleDefaultValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TITLE_DEFAULT_VALUE: StringField<SpotAwardLevel> = new StringField('title_defaultValue', SpotAwardLevel, 'Edm.String');
  /**
   * Static representation of the [[titleEnDebug]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TITLE_EN_DEBUG: StringField<SpotAwardLevel> = new StringField('title_en_DEBUG', SpotAwardLevel, 'Edm.String');
  /**
   * Static representation of the [[titleEnGb]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TITLE_EN_GB: StringField<SpotAwardLevel> = new StringField('title_en_GB', SpotAwardLevel, 'Edm.String');
  /**
   * Static representation of the [[titleEnUs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TITLE_EN_US: StringField<SpotAwardLevel> = new StringField('title_en_US', SpotAwardLevel, 'Edm.String');
  /**
   * Static representation of the [[titleEsEs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TITLE_ES_ES: StringField<SpotAwardLevel> = new StringField('title_es_ES', SpotAwardLevel, 'Edm.String');
  /**
   * Static representation of the [[titleEsMx]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TITLE_ES_MX: StringField<SpotAwardLevel> = new StringField('title_es_MX', SpotAwardLevel, 'Edm.String');
  /**
   * Static representation of the [[titleFrCa]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TITLE_FR_CA: StringField<SpotAwardLevel> = new StringField('title_fr_CA', SpotAwardLevel, 'Edm.String');
  /**
   * Static representation of the [[titleFrFr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TITLE_FR_FR: StringField<SpotAwardLevel> = new StringField('title_fr_FR', SpotAwardLevel, 'Edm.String');
  /**
   * Static representation of the [[titleItIt]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TITLE_IT_IT: StringField<SpotAwardLevel> = new StringField('title_it_IT', SpotAwardLevel, 'Edm.String');
  /**
   * Static representation of the [[titleLocalized]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TITLE_LOCALIZED: StringField<SpotAwardLevel> = new StringField('title_localized', SpotAwardLevel, 'Edm.String');
  /**
   * Static representation of the [[titleNlNl]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TITLE_NL_NL: StringField<SpotAwardLevel> = new StringField('title_nl_NL', SpotAwardLevel, 'Edm.String');
  /**
   * Static representation of the [[titlePtBr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TITLE_PT_BR: StringField<SpotAwardLevel> = new StringField('title_pt_BR', SpotAwardLevel, 'Edm.String');
  /**
   * Static representation of the [[titleZhCn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TITLE_ZH_CN: StringField<SpotAwardLevel> = new StringField('title_zh_CN', SpotAwardLevel, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<SpotAwardLevel, User> = new OneToOneLink('createdByNav', SpotAwardLevel, User);
  /**
   * Static representation of the one-to-many navigation property [[descriptionTranslationTextNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_TRANSLATION_TEXT_NAV: Link<SpotAwardLevel, MdfLocalizedValue> = new Link('descriptionTranslationTextNav', SpotAwardLevel, MdfLocalizedValue);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<SpotAwardLevel, User> = new OneToOneLink('lastModifiedByNav', SpotAwardLevel, User);
  /**
   * Static representation of the one-to-one navigation property [[levelImageNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LEVEL_IMAGE_NAV: OneToOneLink<SpotAwardLevel, Attachment> = new OneToOneLink('levelImageNav', SpotAwardLevel, Attachment);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<SpotAwardLevel, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', SpotAwardLevel, MdfEnumValue);
  /**
   * Static representation of the one-to-many navigation property [[titleTranslationTextNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TITLE_TRANSLATION_TEXT_NAV: Link<SpotAwardLevel, MdfLocalizedValue> = new Link('titleTranslationTextNav', SpotAwardLevel, MdfLocalizedValue);
  /**
   * All fields of the SpotAwardLevel entity.
   */
  export const _allFields: Array<StringField<SpotAwardLevel> | DateField<SpotAwardLevel> | OneToOneLink<SpotAwardLevel, User> | Link<SpotAwardLevel, MdfLocalizedValue> | OneToOneLink<SpotAwardLevel, Attachment> | OneToOneLink<SpotAwardLevel, MdfEnumValue>> = [
    SpotAwardLevel.SPOT_AWARD_PROGRAM_EXTERNAL_CODE,
    SpotAwardLevel.CREATED_BY,
    SpotAwardLevel.CREATED_DATE_TIME,
    SpotAwardLevel.DESCRIPTION_DE_DE,
    SpotAwardLevel.DESCRIPTION_DEFAULT_VALUE,
    SpotAwardLevel.DESCRIPTION_EN_DEBUG,
    SpotAwardLevel.DESCRIPTION_EN_GB,
    SpotAwardLevel.DESCRIPTION_EN_US,
    SpotAwardLevel.DESCRIPTION_ES_ES,
    SpotAwardLevel.DESCRIPTION_ES_MX,
    SpotAwardLevel.DESCRIPTION_FR_CA,
    SpotAwardLevel.DESCRIPTION_FR_FR,
    SpotAwardLevel.DESCRIPTION_IT_IT,
    SpotAwardLevel.DESCRIPTION_LOCALIZED,
    SpotAwardLevel.DESCRIPTION_NL_NL,
    SpotAwardLevel.DESCRIPTION_PT_BR,
    SpotAwardLevel.DESCRIPTION_ZH_CN,
    SpotAwardLevel.EXTERNAL_CODE,
    SpotAwardLevel.LAST_MODIFIED_BY,
    SpotAwardLevel.LAST_MODIFIED_DATE_TIME,
    SpotAwardLevel.MDF_SYSTEM_RECORD_STATUS,
    SpotAwardLevel.RECORD_ID,
    SpotAwardLevel.TITLE_DE_DE,
    SpotAwardLevel.TITLE_DEFAULT_VALUE,
    SpotAwardLevel.TITLE_EN_DEBUG,
    SpotAwardLevel.TITLE_EN_GB,
    SpotAwardLevel.TITLE_EN_US,
    SpotAwardLevel.TITLE_ES_ES,
    SpotAwardLevel.TITLE_ES_MX,
    SpotAwardLevel.TITLE_FR_CA,
    SpotAwardLevel.TITLE_FR_FR,
    SpotAwardLevel.TITLE_IT_IT,
    SpotAwardLevel.TITLE_LOCALIZED,
    SpotAwardLevel.TITLE_NL_NL,
    SpotAwardLevel.TITLE_PT_BR,
    SpotAwardLevel.TITLE_ZH_CN,
    SpotAwardLevel.CREATED_BY_NAV,
    SpotAwardLevel.DESCRIPTION_TRANSLATION_TEXT_NAV,
    SpotAwardLevel.LAST_MODIFIED_BY_NAV,
    SpotAwardLevel.LEVEL_IMAGE_NAV,
    SpotAwardLevel.MDF_SYSTEM_RECORD_STATUS_NAV,
    SpotAwardLevel.TITLE_TRANSLATION_TEXT_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<SpotAwardLevel> = new AllFields('*', SpotAwardLevel);
  /**
   * All key fields of the SpotAwardLevel entity.
   */
  export const _keyFields: Array<Selectable<SpotAwardLevel>> = [SpotAwardLevel.SPOT_AWARD_PROGRAM_EXTERNAL_CODE, SpotAwardLevel.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property SpotAwardLevel.
   */
  export const _keys: { [keys: string]: Selectable<SpotAwardLevel> } = SpotAwardLevel._keyFields.reduce((acc: { [keys: string]: Selectable<SpotAwardLevel> }, field: Selectable<SpotAwardLevel>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
