/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FamilySkillMappingEntityRequestBuilder } from './FamilySkillMappingEntityRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "FamilySkillMappingEntity" of service "SFOData".
 */
export class FamilySkillMappingEntity extends Entity implements FamilySkillMappingEntityType {
  /**
   * Technical entity name for FamilySkillMappingEntity.
   */
  static _entityName = 'FamilySkillMappingEntity';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for FamilySkillMappingEntity.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Family_GUID.
   * Maximum length: 128.
   */
  familyEntityExternalCode!: string;
  /**
   * createdBy.
   * Maximum length: 255.
   * @nullable
   */
  createdBy?: string;
  /**
   * Added.
   * @nullable
   */
  createdDateTime?: Moment;
  /**
   * GUID.
   * Maximum length: 128.
   */
  externalCode!: string;
  /**
   * lastModifiedBy.
   * Maximum length: 255.
   * @nullable
   */
  lastModifiedBy?: string;
  /**
   * Last Modified.
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
   * Proficiency Level.
   * Maximum length: 255.
   * @nullable
   */
  proLevelDeDe?: string;
  /**
   * Proficiency Level.
   * Maximum length: 255.
   * @nullable
   */
  proLevelDefaultValue?: string;
  /**
   * Proficiency Level.
   * Maximum length: 255.
   * @nullable
   */
  proLevelEnDebug?: string;
  /**
   * Proficiency Level.
   * Maximum length: 255.
   * @nullable
   */
  proLevelEnGb?: string;
  /**
   * Proficiency Level.
   * Maximum length: 255.
   * @nullable
   */
  proLevelEnUs?: string;
  /**
   * Proficiency Level.
   * Maximum length: 255.
   * @nullable
   */
  proLevelEsEs?: string;
  /**
   * Proficiency Level.
   * Maximum length: 255.
   * @nullable
   */
  proLevelEsMx?: string;
  /**
   * Proficiency Level.
   * Maximum length: 255.
   * @nullable
   */
  proLevelFrCa?: string;
  /**
   * Proficiency Level.
   * Maximum length: 255.
   * @nullable
   */
  proLevelFrFr?: string;
  /**
   * Proficiency Level.
   * Maximum length: 255.
   * @nullable
   */
  proLevelItIt?: string;
  /**
   * Proficiency Level.
   * Maximum length: 255.
   * @nullable
   */
  proLevelLocalized?: string;
  /**
   * Proficiency Level.
   * Maximum length: 255.
   * @nullable
   */
  proLevelNlNl?: string;
  /**
   * Proficiency Level.
   * Maximum length: 255.
   * @nullable
   */
  proLevelPtBr?: string;
  /**
   * Proficiency Level.
   * Maximum length: 255.
   * @nullable
   */
  proLevelZhCn?: string;
  /**
   * Skill.
   * Maximum length: 128.
   * @nullable
   */
  skill?: string;
  /**
   * Status.
   * Maximum length: 255.
   * @nullable
   */
  status?: string;
  /**
   * subModule.
   * Maximum length: 255.
   * @nullable
   */
  subModule?: string;
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
  proLevelTranslationTextNav!: MdfLocalizedValue[];
  /**
   * One-to-one navigation property to the [[SkillEntity]] entity.
   */
  skillNav!: SkillEntity;
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  statusNav!: MdfEnumValue;

  /**
   * Returns an entity builder to construct instances `FamilySkillMappingEntity`.
   * @returns A builder that constructs instances of entity type `FamilySkillMappingEntity`.
   */
  static builder(): EntityBuilderType<FamilySkillMappingEntity, FamilySkillMappingEntityTypeForceMandatory> {
    return Entity.entityBuilder(FamilySkillMappingEntity);
  }

  /**
   * Returns a request builder to construct requests for operations on the `FamilySkillMappingEntity` entity type.
   * @returns A `FamilySkillMappingEntity` request builder.
   */
  static requestBuilder(): FamilySkillMappingEntityRequestBuilder {
    return new FamilySkillMappingEntityRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `FamilySkillMappingEntity`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `FamilySkillMappingEntity`.
   */
  static customField(fieldName: string): CustomField<FamilySkillMappingEntity> {
    return Entity.customFieldSelector(fieldName, FamilySkillMappingEntity);
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
import { MdfLocalizedValue, MdfLocalizedValueType } from './MdfLocalizedValue';
import { SkillEntity, SkillEntityType } from './SkillEntity';

export interface FamilySkillMappingEntityType {
  familyEntityExternalCode: string;
  createdBy?: string;
  createdDateTime?: Moment;
  externalCode: string;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  mdfSystemRecordStatus?: string;
  proLevelDeDe?: string;
  proLevelDefaultValue?: string;
  proLevelEnDebug?: string;
  proLevelEnGb?: string;
  proLevelEnUs?: string;
  proLevelEsEs?: string;
  proLevelEsMx?: string;
  proLevelFrCa?: string;
  proLevelFrFr?: string;
  proLevelItIt?: string;
  proLevelLocalized?: string;
  proLevelNlNl?: string;
  proLevelPtBr?: string;
  proLevelZhCn?: string;
  skill?: string;
  status?: string;
  subModule?: string;
  createdByNav: UserType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  proLevelTranslationTextNav: MdfLocalizedValueType[];
  skillNav: SkillEntityType;
  statusNav: MdfEnumValueType;
}

export interface FamilySkillMappingEntityTypeForceMandatory {
  familyEntityExternalCode: string;
  createdBy: string;
  createdDateTime: Moment;
  externalCode: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  mdfSystemRecordStatus: string;
  proLevelDeDe: string;
  proLevelDefaultValue: string;
  proLevelEnDebug: string;
  proLevelEnGb: string;
  proLevelEnUs: string;
  proLevelEsEs: string;
  proLevelEsMx: string;
  proLevelFrCa: string;
  proLevelFrFr: string;
  proLevelItIt: string;
  proLevelLocalized: string;
  proLevelNlNl: string;
  proLevelPtBr: string;
  proLevelZhCn: string;
  skill: string;
  status: string;
  subModule: string;
  createdByNav: UserType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  proLevelTranslationTextNav: MdfLocalizedValueType[];
  skillNav: SkillEntityType;
  statusNav: MdfEnumValueType;
}

export namespace FamilySkillMappingEntity {
  /**
   * Static representation of the [[familyEntityExternalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FAMILY_ENTITY_EXTERNAL_CODE: StringField<FamilySkillMappingEntity> = new StringField('FamilyEntity_externalCode', FamilySkillMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<FamilySkillMappingEntity> = new StringField('createdBy', FamilySkillMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<FamilySkillMappingEntity> = new DateField('createdDateTime', FamilySkillMappingEntity, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: StringField<FamilySkillMappingEntity> = new StringField('externalCode', FamilySkillMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<FamilySkillMappingEntity> = new StringField('lastModifiedBy', FamilySkillMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<FamilySkillMappingEntity> = new DateField('lastModifiedDateTime', FamilySkillMappingEntity, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<FamilySkillMappingEntity> = new StringField('mdfSystemRecordStatus', FamilySkillMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[proLevelDeDe]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRO_LEVEL_DE_DE: StringField<FamilySkillMappingEntity> = new StringField('proLevel_de_DE', FamilySkillMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[proLevelDefaultValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRO_LEVEL_DEFAULT_VALUE: StringField<FamilySkillMappingEntity> = new StringField('proLevel_defaultValue', FamilySkillMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[proLevelEnDebug]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRO_LEVEL_EN_DEBUG: StringField<FamilySkillMappingEntity> = new StringField('proLevel_en_DEBUG', FamilySkillMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[proLevelEnGb]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRO_LEVEL_EN_GB: StringField<FamilySkillMappingEntity> = new StringField('proLevel_en_GB', FamilySkillMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[proLevelEnUs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRO_LEVEL_EN_US: StringField<FamilySkillMappingEntity> = new StringField('proLevel_en_US', FamilySkillMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[proLevelEsEs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRO_LEVEL_ES_ES: StringField<FamilySkillMappingEntity> = new StringField('proLevel_es_ES', FamilySkillMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[proLevelEsMx]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRO_LEVEL_ES_MX: StringField<FamilySkillMappingEntity> = new StringField('proLevel_es_MX', FamilySkillMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[proLevelFrCa]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRO_LEVEL_FR_CA: StringField<FamilySkillMappingEntity> = new StringField('proLevel_fr_CA', FamilySkillMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[proLevelFrFr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRO_LEVEL_FR_FR: StringField<FamilySkillMappingEntity> = new StringField('proLevel_fr_FR', FamilySkillMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[proLevelItIt]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRO_LEVEL_IT_IT: StringField<FamilySkillMappingEntity> = new StringField('proLevel_it_IT', FamilySkillMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[proLevelLocalized]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRO_LEVEL_LOCALIZED: StringField<FamilySkillMappingEntity> = new StringField('proLevel_localized', FamilySkillMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[proLevelNlNl]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRO_LEVEL_NL_NL: StringField<FamilySkillMappingEntity> = new StringField('proLevel_nl_NL', FamilySkillMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[proLevelPtBr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRO_LEVEL_PT_BR: StringField<FamilySkillMappingEntity> = new StringField('proLevel_pt_BR', FamilySkillMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[proLevelZhCn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRO_LEVEL_ZH_CN: StringField<FamilySkillMappingEntity> = new StringField('proLevel_zh_CN', FamilySkillMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[skill]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SKILL: StringField<FamilySkillMappingEntity> = new StringField('skill', FamilySkillMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[status]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS: StringField<FamilySkillMappingEntity> = new StringField('status', FamilySkillMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[subModule]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUB_MODULE: StringField<FamilySkillMappingEntity> = new StringField('subModule', FamilySkillMappingEntity, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<FamilySkillMappingEntity, User> = new OneToOneLink('createdByNav', FamilySkillMappingEntity, User);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<FamilySkillMappingEntity, User> = new OneToOneLink('lastModifiedByNav', FamilySkillMappingEntity, User);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<FamilySkillMappingEntity, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', FamilySkillMappingEntity, MdfEnumValue);
  /**
   * Static representation of the one-to-many navigation property [[proLevelTranslationTextNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRO_LEVEL_TRANSLATION_TEXT_NAV: Link<FamilySkillMappingEntity, MdfLocalizedValue> = new Link('proLevelTranslationTextNav', FamilySkillMappingEntity, MdfLocalizedValue);
  /**
   * Static representation of the one-to-one navigation property [[skillNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SKILL_NAV: OneToOneLink<FamilySkillMappingEntity, SkillEntity> = new OneToOneLink('skillNav', FamilySkillMappingEntity, SkillEntity);
  /**
   * Static representation of the one-to-one navigation property [[statusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS_NAV: OneToOneLink<FamilySkillMappingEntity, MdfEnumValue> = new OneToOneLink('statusNav', FamilySkillMappingEntity, MdfEnumValue);
  /**
   * All fields of the FamilySkillMappingEntity entity.
   */
  export const _allFields: Array<StringField<FamilySkillMappingEntity> | DateField<FamilySkillMappingEntity> | OneToOneLink<FamilySkillMappingEntity, User> | OneToOneLink<FamilySkillMappingEntity, MdfEnumValue> | Link<FamilySkillMappingEntity, MdfLocalizedValue> | OneToOneLink<FamilySkillMappingEntity, SkillEntity>> = [
    FamilySkillMappingEntity.FAMILY_ENTITY_EXTERNAL_CODE,
    FamilySkillMappingEntity.CREATED_BY,
    FamilySkillMappingEntity.CREATED_DATE_TIME,
    FamilySkillMappingEntity.EXTERNAL_CODE,
    FamilySkillMappingEntity.LAST_MODIFIED_BY,
    FamilySkillMappingEntity.LAST_MODIFIED_DATE_TIME,
    FamilySkillMappingEntity.MDF_SYSTEM_RECORD_STATUS,
    FamilySkillMappingEntity.PRO_LEVEL_DE_DE,
    FamilySkillMappingEntity.PRO_LEVEL_DEFAULT_VALUE,
    FamilySkillMappingEntity.PRO_LEVEL_EN_DEBUG,
    FamilySkillMappingEntity.PRO_LEVEL_EN_GB,
    FamilySkillMappingEntity.PRO_LEVEL_EN_US,
    FamilySkillMappingEntity.PRO_LEVEL_ES_ES,
    FamilySkillMappingEntity.PRO_LEVEL_ES_MX,
    FamilySkillMappingEntity.PRO_LEVEL_FR_CA,
    FamilySkillMappingEntity.PRO_LEVEL_FR_FR,
    FamilySkillMappingEntity.PRO_LEVEL_IT_IT,
    FamilySkillMappingEntity.PRO_LEVEL_LOCALIZED,
    FamilySkillMappingEntity.PRO_LEVEL_NL_NL,
    FamilySkillMappingEntity.PRO_LEVEL_PT_BR,
    FamilySkillMappingEntity.PRO_LEVEL_ZH_CN,
    FamilySkillMappingEntity.SKILL,
    FamilySkillMappingEntity.STATUS,
    FamilySkillMappingEntity.SUB_MODULE,
    FamilySkillMappingEntity.CREATED_BY_NAV,
    FamilySkillMappingEntity.LAST_MODIFIED_BY_NAV,
    FamilySkillMappingEntity.MDF_SYSTEM_RECORD_STATUS_NAV,
    FamilySkillMappingEntity.PRO_LEVEL_TRANSLATION_TEXT_NAV,
    FamilySkillMappingEntity.SKILL_NAV,
    FamilySkillMappingEntity.STATUS_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<FamilySkillMappingEntity> = new AllFields('*', FamilySkillMappingEntity);
  /**
   * All key fields of the FamilySkillMappingEntity entity.
   */
  export const _keyFields: Array<Selectable<FamilySkillMappingEntity>> = [FamilySkillMappingEntity.FAMILY_ENTITY_EXTERNAL_CODE, FamilySkillMappingEntity.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property FamilySkillMappingEntity.
   */
  export const _keys: { [keys: string]: Selectable<FamilySkillMappingEntity> } = FamilySkillMappingEntity._keyFields.reduce((acc: { [keys: string]: Selectable<FamilySkillMappingEntity> }, field: Selectable<FamilySkillMappingEntity>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
