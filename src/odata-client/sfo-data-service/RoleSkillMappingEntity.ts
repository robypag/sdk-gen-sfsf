/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RoleSkillMappingEntityRequestBuilder } from './RoleSkillMappingEntityRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "RoleSkillMappingEntity" of service "SFOData".
 */
export class RoleSkillMappingEntity extends Entity implements RoleSkillMappingEntityType {
  /**
   * Technical entity name for RoleSkillMappingEntity.
   */
  static _entityName = 'RoleSkillMappingEntity';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for RoleSkillMappingEntity.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Role_GUID.
   * Maximum length: 128.
   */
  roleEntityExternalCode!: string;
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
   * Skill GUID.
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
   * Returns an entity builder to construct instances `RoleSkillMappingEntity`.
   * @returns A builder that constructs instances of entity type `RoleSkillMappingEntity`.
   */
  static builder(): EntityBuilderType<RoleSkillMappingEntity, RoleSkillMappingEntityTypeForceMandatory> {
    return Entity.entityBuilder(RoleSkillMappingEntity);
  }

  /**
   * Returns a request builder to construct requests for operations on the `RoleSkillMappingEntity` entity type.
   * @returns A `RoleSkillMappingEntity` request builder.
   */
  static requestBuilder(): RoleSkillMappingEntityRequestBuilder {
    return new RoleSkillMappingEntityRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `RoleSkillMappingEntity`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `RoleSkillMappingEntity`.
   */
  static customField(fieldName: string): CustomField<RoleSkillMappingEntity> {
    return Entity.customFieldSelector(fieldName, RoleSkillMappingEntity);
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

export interface RoleSkillMappingEntityType {
  roleEntityExternalCode: string;
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

export interface RoleSkillMappingEntityTypeForceMandatory {
  roleEntityExternalCode: string;
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

export namespace RoleSkillMappingEntity {
  /**
   * Static representation of the [[roleEntityExternalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ROLE_ENTITY_EXTERNAL_CODE: StringField<RoleSkillMappingEntity> = new StringField('RoleEntity_externalCode', RoleSkillMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<RoleSkillMappingEntity> = new StringField('createdBy', RoleSkillMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<RoleSkillMappingEntity> = new DateField('createdDateTime', RoleSkillMappingEntity, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: StringField<RoleSkillMappingEntity> = new StringField('externalCode', RoleSkillMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<RoleSkillMappingEntity> = new StringField('lastModifiedBy', RoleSkillMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<RoleSkillMappingEntity> = new DateField('lastModifiedDateTime', RoleSkillMappingEntity, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<RoleSkillMappingEntity> = new StringField('mdfSystemRecordStatus', RoleSkillMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[proLevelDeDe]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRO_LEVEL_DE_DE: StringField<RoleSkillMappingEntity> = new StringField('proLevel_de_DE', RoleSkillMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[proLevelDefaultValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRO_LEVEL_DEFAULT_VALUE: StringField<RoleSkillMappingEntity> = new StringField('proLevel_defaultValue', RoleSkillMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[proLevelEnDebug]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRO_LEVEL_EN_DEBUG: StringField<RoleSkillMappingEntity> = new StringField('proLevel_en_DEBUG', RoleSkillMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[proLevelEnGb]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRO_LEVEL_EN_GB: StringField<RoleSkillMappingEntity> = new StringField('proLevel_en_GB', RoleSkillMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[proLevelEnUs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRO_LEVEL_EN_US: StringField<RoleSkillMappingEntity> = new StringField('proLevel_en_US', RoleSkillMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[proLevelEsEs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRO_LEVEL_ES_ES: StringField<RoleSkillMappingEntity> = new StringField('proLevel_es_ES', RoleSkillMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[proLevelEsMx]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRO_LEVEL_ES_MX: StringField<RoleSkillMappingEntity> = new StringField('proLevel_es_MX', RoleSkillMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[proLevelFrCa]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRO_LEVEL_FR_CA: StringField<RoleSkillMappingEntity> = new StringField('proLevel_fr_CA', RoleSkillMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[proLevelFrFr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRO_LEVEL_FR_FR: StringField<RoleSkillMappingEntity> = new StringField('proLevel_fr_FR', RoleSkillMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[proLevelItIt]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRO_LEVEL_IT_IT: StringField<RoleSkillMappingEntity> = new StringField('proLevel_it_IT', RoleSkillMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[proLevelLocalized]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRO_LEVEL_LOCALIZED: StringField<RoleSkillMappingEntity> = new StringField('proLevel_localized', RoleSkillMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[proLevelNlNl]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRO_LEVEL_NL_NL: StringField<RoleSkillMappingEntity> = new StringField('proLevel_nl_NL', RoleSkillMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[proLevelPtBr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRO_LEVEL_PT_BR: StringField<RoleSkillMappingEntity> = new StringField('proLevel_pt_BR', RoleSkillMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[proLevelZhCn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRO_LEVEL_ZH_CN: StringField<RoleSkillMappingEntity> = new StringField('proLevel_zh_CN', RoleSkillMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[skill]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SKILL: StringField<RoleSkillMappingEntity> = new StringField('skill', RoleSkillMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[status]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS: StringField<RoleSkillMappingEntity> = new StringField('status', RoleSkillMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[subModule]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUB_MODULE: StringField<RoleSkillMappingEntity> = new StringField('subModule', RoleSkillMappingEntity, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<RoleSkillMappingEntity, User> = new OneToOneLink('createdByNav', RoleSkillMappingEntity, User);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<RoleSkillMappingEntity, User> = new OneToOneLink('lastModifiedByNav', RoleSkillMappingEntity, User);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<RoleSkillMappingEntity, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', RoleSkillMappingEntity, MdfEnumValue);
  /**
   * Static representation of the one-to-many navigation property [[proLevelTranslationTextNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRO_LEVEL_TRANSLATION_TEXT_NAV: Link<RoleSkillMappingEntity, MdfLocalizedValue> = new Link('proLevelTranslationTextNav', RoleSkillMappingEntity, MdfLocalizedValue);
  /**
   * Static representation of the one-to-one navigation property [[skillNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SKILL_NAV: OneToOneLink<RoleSkillMappingEntity, SkillEntity> = new OneToOneLink('skillNav', RoleSkillMappingEntity, SkillEntity);
  /**
   * Static representation of the one-to-one navigation property [[statusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS_NAV: OneToOneLink<RoleSkillMappingEntity, MdfEnumValue> = new OneToOneLink('statusNav', RoleSkillMappingEntity, MdfEnumValue);
  /**
   * All fields of the RoleSkillMappingEntity entity.
   */
  export const _allFields: Array<StringField<RoleSkillMappingEntity> | DateField<RoleSkillMappingEntity> | OneToOneLink<RoleSkillMappingEntity, User> | OneToOneLink<RoleSkillMappingEntity, MdfEnumValue> | Link<RoleSkillMappingEntity, MdfLocalizedValue> | OneToOneLink<RoleSkillMappingEntity, SkillEntity>> = [
    RoleSkillMappingEntity.ROLE_ENTITY_EXTERNAL_CODE,
    RoleSkillMappingEntity.CREATED_BY,
    RoleSkillMappingEntity.CREATED_DATE_TIME,
    RoleSkillMappingEntity.EXTERNAL_CODE,
    RoleSkillMappingEntity.LAST_MODIFIED_BY,
    RoleSkillMappingEntity.LAST_MODIFIED_DATE_TIME,
    RoleSkillMappingEntity.MDF_SYSTEM_RECORD_STATUS,
    RoleSkillMappingEntity.PRO_LEVEL_DE_DE,
    RoleSkillMappingEntity.PRO_LEVEL_DEFAULT_VALUE,
    RoleSkillMappingEntity.PRO_LEVEL_EN_DEBUG,
    RoleSkillMappingEntity.PRO_LEVEL_EN_GB,
    RoleSkillMappingEntity.PRO_LEVEL_EN_US,
    RoleSkillMappingEntity.PRO_LEVEL_ES_ES,
    RoleSkillMappingEntity.PRO_LEVEL_ES_MX,
    RoleSkillMappingEntity.PRO_LEVEL_FR_CA,
    RoleSkillMappingEntity.PRO_LEVEL_FR_FR,
    RoleSkillMappingEntity.PRO_LEVEL_IT_IT,
    RoleSkillMappingEntity.PRO_LEVEL_LOCALIZED,
    RoleSkillMappingEntity.PRO_LEVEL_NL_NL,
    RoleSkillMappingEntity.PRO_LEVEL_PT_BR,
    RoleSkillMappingEntity.PRO_LEVEL_ZH_CN,
    RoleSkillMappingEntity.SKILL,
    RoleSkillMappingEntity.STATUS,
    RoleSkillMappingEntity.SUB_MODULE,
    RoleSkillMappingEntity.CREATED_BY_NAV,
    RoleSkillMappingEntity.LAST_MODIFIED_BY_NAV,
    RoleSkillMappingEntity.MDF_SYSTEM_RECORD_STATUS_NAV,
    RoleSkillMappingEntity.PRO_LEVEL_TRANSLATION_TEXT_NAV,
    RoleSkillMappingEntity.SKILL_NAV,
    RoleSkillMappingEntity.STATUS_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<RoleSkillMappingEntity> = new AllFields('*', RoleSkillMappingEntity);
  /**
   * All key fields of the RoleSkillMappingEntity entity.
   */
  export const _keyFields: Array<Selectable<RoleSkillMappingEntity>> = [RoleSkillMappingEntity.ROLE_ENTITY_EXTERNAL_CODE, RoleSkillMappingEntity.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property RoleSkillMappingEntity.
   */
  export const _keys: { [keys: string]: Selectable<RoleSkillMappingEntity> } = RoleSkillMappingEntity._keyFields.reduce((acc: { [keys: string]: Selectable<RoleSkillMappingEntity> }, field: Selectable<RoleSkillMappingEntity>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
