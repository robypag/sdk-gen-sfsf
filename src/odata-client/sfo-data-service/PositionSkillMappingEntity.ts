/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PositionSkillMappingEntityRequestBuilder } from './PositionSkillMappingEntityRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "PositionSkillMappingEntity" of service "SFOData".
 */
export class PositionSkillMappingEntity extends Entity implements PositionSkillMappingEntityType {
  /**
   * Technical entity name for PositionSkillMappingEntity.
   */
  static _entityName = 'PositionSkillMappingEntity';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for PositionSkillMappingEntity.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Position Extension_GUID.
   * Maximum length: 128.
   */
  positionEntityExternalCode!: string;
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
   * Returns an entity builder to construct instances `PositionSkillMappingEntity`.
   * @returns A builder that constructs instances of entity type `PositionSkillMappingEntity`.
   */
  static builder(): EntityBuilderType<PositionSkillMappingEntity, PositionSkillMappingEntityTypeForceMandatory> {
    return Entity.entityBuilder(PositionSkillMappingEntity);
  }

  /**
   * Returns a request builder to construct requests for operations on the `PositionSkillMappingEntity` entity type.
   * @returns A `PositionSkillMappingEntity` request builder.
   */
  static requestBuilder(): PositionSkillMappingEntityRequestBuilder {
    return new PositionSkillMappingEntityRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `PositionSkillMappingEntity`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `PositionSkillMappingEntity`.
   */
  static customField(fieldName: string): CustomField<PositionSkillMappingEntity> {
    return Entity.customFieldSelector(fieldName, PositionSkillMappingEntity);
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

export interface PositionSkillMappingEntityType {
  positionEntityExternalCode: string;
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

export interface PositionSkillMappingEntityTypeForceMandatory {
  positionEntityExternalCode: string;
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

export namespace PositionSkillMappingEntity {
  /**
   * Static representation of the [[positionEntityExternalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const POSITION_ENTITY_EXTERNAL_CODE: StringField<PositionSkillMappingEntity> = new StringField('PositionEntity_externalCode', PositionSkillMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<PositionSkillMappingEntity> = new StringField('createdBy', PositionSkillMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<PositionSkillMappingEntity> = new DateField('createdDateTime', PositionSkillMappingEntity, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: StringField<PositionSkillMappingEntity> = new StringField('externalCode', PositionSkillMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<PositionSkillMappingEntity> = new StringField('lastModifiedBy', PositionSkillMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<PositionSkillMappingEntity> = new DateField('lastModifiedDateTime', PositionSkillMappingEntity, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<PositionSkillMappingEntity> = new StringField('mdfSystemRecordStatus', PositionSkillMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[proLevelDeDe]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRO_LEVEL_DE_DE: StringField<PositionSkillMappingEntity> = new StringField('proLevel_de_DE', PositionSkillMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[proLevelDefaultValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRO_LEVEL_DEFAULT_VALUE: StringField<PositionSkillMappingEntity> = new StringField('proLevel_defaultValue', PositionSkillMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[proLevelEnDebug]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRO_LEVEL_EN_DEBUG: StringField<PositionSkillMappingEntity> = new StringField('proLevel_en_DEBUG', PositionSkillMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[proLevelEnGb]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRO_LEVEL_EN_GB: StringField<PositionSkillMappingEntity> = new StringField('proLevel_en_GB', PositionSkillMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[proLevelEnUs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRO_LEVEL_EN_US: StringField<PositionSkillMappingEntity> = new StringField('proLevel_en_US', PositionSkillMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[proLevelEsEs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRO_LEVEL_ES_ES: StringField<PositionSkillMappingEntity> = new StringField('proLevel_es_ES', PositionSkillMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[proLevelEsMx]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRO_LEVEL_ES_MX: StringField<PositionSkillMappingEntity> = new StringField('proLevel_es_MX', PositionSkillMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[proLevelFrCa]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRO_LEVEL_FR_CA: StringField<PositionSkillMappingEntity> = new StringField('proLevel_fr_CA', PositionSkillMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[proLevelFrFr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRO_LEVEL_FR_FR: StringField<PositionSkillMappingEntity> = new StringField('proLevel_fr_FR', PositionSkillMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[proLevelItIt]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRO_LEVEL_IT_IT: StringField<PositionSkillMappingEntity> = new StringField('proLevel_it_IT', PositionSkillMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[proLevelLocalized]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRO_LEVEL_LOCALIZED: StringField<PositionSkillMappingEntity> = new StringField('proLevel_localized', PositionSkillMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[proLevelNlNl]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRO_LEVEL_NL_NL: StringField<PositionSkillMappingEntity> = new StringField('proLevel_nl_NL', PositionSkillMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[proLevelPtBr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRO_LEVEL_PT_BR: StringField<PositionSkillMappingEntity> = new StringField('proLevel_pt_BR', PositionSkillMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[proLevelZhCn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRO_LEVEL_ZH_CN: StringField<PositionSkillMappingEntity> = new StringField('proLevel_zh_CN', PositionSkillMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[skill]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SKILL: StringField<PositionSkillMappingEntity> = new StringField('skill', PositionSkillMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[status]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS: StringField<PositionSkillMappingEntity> = new StringField('status', PositionSkillMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[subModule]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUB_MODULE: StringField<PositionSkillMappingEntity> = new StringField('subModule', PositionSkillMappingEntity, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<PositionSkillMappingEntity, User> = new OneToOneLink('createdByNav', PositionSkillMappingEntity, User);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<PositionSkillMappingEntity, User> = new OneToOneLink('lastModifiedByNav', PositionSkillMappingEntity, User);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<PositionSkillMappingEntity, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', PositionSkillMappingEntity, MdfEnumValue);
  /**
   * Static representation of the one-to-many navigation property [[proLevelTranslationTextNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRO_LEVEL_TRANSLATION_TEXT_NAV: Link<PositionSkillMappingEntity, MdfLocalizedValue> = new Link('proLevelTranslationTextNav', PositionSkillMappingEntity, MdfLocalizedValue);
  /**
   * Static representation of the one-to-one navigation property [[skillNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SKILL_NAV: OneToOneLink<PositionSkillMappingEntity, SkillEntity> = new OneToOneLink('skillNav', PositionSkillMappingEntity, SkillEntity);
  /**
   * Static representation of the one-to-one navigation property [[statusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS_NAV: OneToOneLink<PositionSkillMappingEntity, MdfEnumValue> = new OneToOneLink('statusNav', PositionSkillMappingEntity, MdfEnumValue);
  /**
   * All fields of the PositionSkillMappingEntity entity.
   */
  export const _allFields: Array<StringField<PositionSkillMappingEntity> | DateField<PositionSkillMappingEntity> | OneToOneLink<PositionSkillMappingEntity, User> | OneToOneLink<PositionSkillMappingEntity, MdfEnumValue> | Link<PositionSkillMappingEntity, MdfLocalizedValue> | OneToOneLink<PositionSkillMappingEntity, SkillEntity>> = [
    PositionSkillMappingEntity.POSITION_ENTITY_EXTERNAL_CODE,
    PositionSkillMappingEntity.CREATED_BY,
    PositionSkillMappingEntity.CREATED_DATE_TIME,
    PositionSkillMappingEntity.EXTERNAL_CODE,
    PositionSkillMappingEntity.LAST_MODIFIED_BY,
    PositionSkillMappingEntity.LAST_MODIFIED_DATE_TIME,
    PositionSkillMappingEntity.MDF_SYSTEM_RECORD_STATUS,
    PositionSkillMappingEntity.PRO_LEVEL_DE_DE,
    PositionSkillMappingEntity.PRO_LEVEL_DEFAULT_VALUE,
    PositionSkillMappingEntity.PRO_LEVEL_EN_DEBUG,
    PositionSkillMappingEntity.PRO_LEVEL_EN_GB,
    PositionSkillMappingEntity.PRO_LEVEL_EN_US,
    PositionSkillMappingEntity.PRO_LEVEL_ES_ES,
    PositionSkillMappingEntity.PRO_LEVEL_ES_MX,
    PositionSkillMappingEntity.PRO_LEVEL_FR_CA,
    PositionSkillMappingEntity.PRO_LEVEL_FR_FR,
    PositionSkillMappingEntity.PRO_LEVEL_IT_IT,
    PositionSkillMappingEntity.PRO_LEVEL_LOCALIZED,
    PositionSkillMappingEntity.PRO_LEVEL_NL_NL,
    PositionSkillMappingEntity.PRO_LEVEL_PT_BR,
    PositionSkillMappingEntity.PRO_LEVEL_ZH_CN,
    PositionSkillMappingEntity.SKILL,
    PositionSkillMappingEntity.STATUS,
    PositionSkillMappingEntity.SUB_MODULE,
    PositionSkillMappingEntity.CREATED_BY_NAV,
    PositionSkillMappingEntity.LAST_MODIFIED_BY_NAV,
    PositionSkillMappingEntity.MDF_SYSTEM_RECORD_STATUS_NAV,
    PositionSkillMappingEntity.PRO_LEVEL_TRANSLATION_TEXT_NAV,
    PositionSkillMappingEntity.SKILL_NAV,
    PositionSkillMappingEntity.STATUS_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<PositionSkillMappingEntity> = new AllFields('*', PositionSkillMappingEntity);
  /**
   * All key fields of the PositionSkillMappingEntity entity.
   */
  export const _keyFields: Array<Selectable<PositionSkillMappingEntity>> = [PositionSkillMappingEntity.POSITION_ENTITY_EXTERNAL_CODE, PositionSkillMappingEntity.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property PositionSkillMappingEntity.
   */
  export const _keys: { [keys: string]: Selectable<PositionSkillMappingEntity> } = PositionSkillMappingEntity._keyFields.reduce((acc: { [keys: string]: Selectable<PositionSkillMappingEntity> }, field: Selectable<PositionSkillMappingEntity>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
