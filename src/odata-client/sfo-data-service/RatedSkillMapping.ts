/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RatedSkillMappingRequestBuilder } from './RatedSkillMappingRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "RatedSkillMapping" of service "SFOData".
 */
export class RatedSkillMapping extends Entity implements RatedSkillMappingType {
  /**
   * Technical entity name for RatedSkillMapping.
   */
  static _entityName = 'RatedSkillMapping';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for RatedSkillMapping.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Skill Profile_User Id.
   * Maximum length: 100.
   */
  skillProfileExternalCode!: string;
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
   * Expected Proficiency Level.
   * Maximum length: 255.
   * @nullable
   */
  expectedLevelDeDe?: string;
  /**
   * Expected Proficiency Level.
   * Maximum length: 255.
   * @nullable
   */
  expectedLevelDefaultValue?: string;
  /**
   * Expected Proficiency Level.
   * Maximum length: 255.
   * @nullable
   */
  expectedLevelEnDebug?: string;
  /**
   * Expected Proficiency Level.
   * Maximum length: 255.
   * @nullable
   */
  expectedLevelEnGb?: string;
  /**
   * Expected Proficiency Level.
   * Maximum length: 255.
   * @nullable
   */
  expectedLevelEnUs?: string;
  /**
   * Expected Proficiency Level.
   * Maximum length: 255.
   * @nullable
   */
  expectedLevelEsEs?: string;
  /**
   * Expected Proficiency Level.
   * Maximum length: 255.
   * @nullable
   */
  expectedLevelEsMx?: string;
  /**
   * Expected Proficiency Level.
   * Maximum length: 255.
   * @nullable
   */
  expectedLevelFrCa?: string;
  /**
   * Expected Proficiency Level.
   * Maximum length: 255.
   * @nullable
   */
  expectedLevelFrFr?: string;
  /**
   * Expected Proficiency Level.
   * Maximum length: 255.
   * @nullable
   */
  expectedLevelItIt?: string;
  /**
   * Expected Proficiency Level.
   * Maximum length: 255.
   * @nullable
   */
  expectedLevelLocalized?: string;
  /**
   * Expected Proficiency Level.
   * Maximum length: 255.
   * @nullable
   */
  expectedLevelNlNl?: string;
  /**
   * Expected Proficiency Level.
   * Maximum length: 255.
   * @nullable
   */
  expectedLevelPtBr?: string;
  /**
   * Expected Proficiency Level.
   * Maximum length: 255.
   * @nullable
   */
  expectedLevelZhCn?: string;
  /**
   * externalCode.
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
   * lastModifiedDate.
   * @nullable
   */
  lastModifiedDateTime?: Moment;
  /**
   * managerRatedLevel.
   * Maximum length: 255.
   * @nullable
   */
  managerRatedLevelDeDe?: string;
  /**
   * managerRatedLevel.
   * Maximum length: 255.
   * @nullable
   */
  managerRatedLevelDefaultValue?: string;
  /**
   * managerRatedLevel.
   * Maximum length: 255.
   * @nullable
   */
  managerRatedLevelEnDebug?: string;
  /**
   * managerRatedLevel.
   * Maximum length: 255.
   * @nullable
   */
  managerRatedLevelEnGb?: string;
  /**
   * managerRatedLevel.
   * Maximum length: 255.
   * @nullable
   */
  managerRatedLevelEnUs?: string;
  /**
   * managerRatedLevel.
   * Maximum length: 255.
   * @nullable
   */
  managerRatedLevelEsEs?: string;
  /**
   * managerRatedLevel.
   * Maximum length: 255.
   * @nullable
   */
  managerRatedLevelEsMx?: string;
  /**
   * managerRatedLevel.
   * Maximum length: 255.
   * @nullable
   */
  managerRatedLevelFrCa?: string;
  /**
   * managerRatedLevel.
   * Maximum length: 255.
   * @nullable
   */
  managerRatedLevelFrFr?: string;
  /**
   * managerRatedLevel.
   * Maximum length: 255.
   * @nullable
   */
  managerRatedLevelItIt?: string;
  /**
   * managerRatedLevel.
   * Maximum length: 255.
   * @nullable
   */
  managerRatedLevelLocalized?: string;
  /**
   * managerRatedLevel.
   * Maximum length: 255.
   * @nullable
   */
  managerRatedLevelNlNl?: string;
  /**
   * managerRatedLevel.
   * Maximum length: 255.
   * @nullable
   */
  managerRatedLevelPtBr?: string;
  /**
   * managerRatedLevel.
   * Maximum length: 255.
   * @nullable
   */
  managerRatedLevelZhCn?: string;
  /**
   * Record Status.
   * Maximum length: 255.
   * @nullable
   */
  mdfSystemRecordStatus?: string;
  /**
   * selfRatedLevel.
   * Maximum length: 255.
   * @nullable
   */
  selfRatedLevelDeDe?: string;
  /**
   * selfRatedLevel.
   * Maximum length: 255.
   * @nullable
   */
  selfRatedLevelDefaultValue?: string;
  /**
   * selfRatedLevel.
   * Maximum length: 255.
   * @nullable
   */
  selfRatedLevelEnDebug?: string;
  /**
   * selfRatedLevel.
   * Maximum length: 255.
   * @nullable
   */
  selfRatedLevelEnGb?: string;
  /**
   * selfRatedLevel.
   * Maximum length: 255.
   * @nullable
   */
  selfRatedLevelEnUs?: string;
  /**
   * selfRatedLevel.
   * Maximum length: 255.
   * @nullable
   */
  selfRatedLevelEsEs?: string;
  /**
   * selfRatedLevel.
   * Maximum length: 255.
   * @nullable
   */
  selfRatedLevelEsMx?: string;
  /**
   * selfRatedLevel.
   * Maximum length: 255.
   * @nullable
   */
  selfRatedLevelFrCa?: string;
  /**
   * selfRatedLevel.
   * Maximum length: 255.
   * @nullable
   */
  selfRatedLevelFrFr?: string;
  /**
   * selfRatedLevel.
   * Maximum length: 255.
   * @nullable
   */
  selfRatedLevelItIt?: string;
  /**
   * selfRatedLevel.
   * Maximum length: 255.
   * @nullable
   */
  selfRatedLevelLocalized?: string;
  /**
   * selfRatedLevel.
   * Maximum length: 255.
   * @nullable
   */
  selfRatedLevelNlNl?: string;
  /**
   * selfRatedLevel.
   * Maximum length: 255.
   * @nullable
   */
  selfRatedLevelPtBr?: string;
  /**
   * selfRatedLevel.
   * Maximum length: 255.
   * @nullable
   */
  selfRatedLevelZhCn?: string;
  /**
   * Skill.
   * Maximum length: 128.
   * @nullable
   */
  skill?: string;
  /**
   * status.
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
   * One-to-many navigation property to the [[MdfLocalizedValue]] entity.
   */
  expectedLevelTranslationTextNav!: MdfLocalizedValue[];
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  lastModifiedByNav!: User;
  /**
   * One-to-many navigation property to the [[MdfLocalizedValue]] entity.
   */
  managerRatedLevelTranslationTextNav!: MdfLocalizedValue[];
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  mdfSystemRecordStatusNav!: MdfEnumValue;
  /**
   * One-to-many navigation property to the [[MdfLocalizedValue]] entity.
   */
  selfRatedLevelTranslationTextNav!: MdfLocalizedValue[];
  /**
   * One-to-one navigation property to the [[SkillEntity]] entity.
   */
  skillNav!: SkillEntity;
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  statusNav!: MdfEnumValue;

  /**
   * Returns an entity builder to construct instances `RatedSkillMapping`.
   * @returns A builder that constructs instances of entity type `RatedSkillMapping`.
   */
  static builder(): EntityBuilderType<RatedSkillMapping, RatedSkillMappingTypeForceMandatory> {
    return Entity.entityBuilder(RatedSkillMapping);
  }

  /**
   * Returns a request builder to construct requests for operations on the `RatedSkillMapping` entity type.
   * @returns A `RatedSkillMapping` request builder.
   */
  static requestBuilder(): RatedSkillMappingRequestBuilder {
    return new RatedSkillMappingRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `RatedSkillMapping`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `RatedSkillMapping`.
   */
  static customField(fieldName: string): CustomField<RatedSkillMapping> {
    return Entity.customFieldSelector(fieldName, RatedSkillMapping);
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
import { SkillEntity, SkillEntityType } from './SkillEntity';

export interface RatedSkillMappingType {
  skillProfileExternalCode: string;
  createdBy?: string;
  createdDateTime?: Moment;
  expectedLevelDeDe?: string;
  expectedLevelDefaultValue?: string;
  expectedLevelEnDebug?: string;
  expectedLevelEnGb?: string;
  expectedLevelEnUs?: string;
  expectedLevelEsEs?: string;
  expectedLevelEsMx?: string;
  expectedLevelFrCa?: string;
  expectedLevelFrFr?: string;
  expectedLevelItIt?: string;
  expectedLevelLocalized?: string;
  expectedLevelNlNl?: string;
  expectedLevelPtBr?: string;
  expectedLevelZhCn?: string;
  externalCode: string;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  managerRatedLevelDeDe?: string;
  managerRatedLevelDefaultValue?: string;
  managerRatedLevelEnDebug?: string;
  managerRatedLevelEnGb?: string;
  managerRatedLevelEnUs?: string;
  managerRatedLevelEsEs?: string;
  managerRatedLevelEsMx?: string;
  managerRatedLevelFrCa?: string;
  managerRatedLevelFrFr?: string;
  managerRatedLevelItIt?: string;
  managerRatedLevelLocalized?: string;
  managerRatedLevelNlNl?: string;
  managerRatedLevelPtBr?: string;
  managerRatedLevelZhCn?: string;
  mdfSystemRecordStatus?: string;
  selfRatedLevelDeDe?: string;
  selfRatedLevelDefaultValue?: string;
  selfRatedLevelEnDebug?: string;
  selfRatedLevelEnGb?: string;
  selfRatedLevelEnUs?: string;
  selfRatedLevelEsEs?: string;
  selfRatedLevelEsMx?: string;
  selfRatedLevelFrCa?: string;
  selfRatedLevelFrFr?: string;
  selfRatedLevelItIt?: string;
  selfRatedLevelLocalized?: string;
  selfRatedLevelNlNl?: string;
  selfRatedLevelPtBr?: string;
  selfRatedLevelZhCn?: string;
  skill?: string;
  status?: string;
  subModule?: string;
  createdByNav: UserType;
  expectedLevelTranslationTextNav: MdfLocalizedValueType[];
  lastModifiedByNav: UserType;
  managerRatedLevelTranslationTextNav: MdfLocalizedValueType[];
  mdfSystemRecordStatusNav: MdfEnumValueType;
  selfRatedLevelTranslationTextNav: MdfLocalizedValueType[];
  skillNav: SkillEntityType;
  statusNav: MdfEnumValueType;
}

export interface RatedSkillMappingTypeForceMandatory {
  skillProfileExternalCode: string;
  createdBy: string;
  createdDateTime: Moment;
  expectedLevelDeDe: string;
  expectedLevelDefaultValue: string;
  expectedLevelEnDebug: string;
  expectedLevelEnGb: string;
  expectedLevelEnUs: string;
  expectedLevelEsEs: string;
  expectedLevelEsMx: string;
  expectedLevelFrCa: string;
  expectedLevelFrFr: string;
  expectedLevelItIt: string;
  expectedLevelLocalized: string;
  expectedLevelNlNl: string;
  expectedLevelPtBr: string;
  expectedLevelZhCn: string;
  externalCode: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  managerRatedLevelDeDe: string;
  managerRatedLevelDefaultValue: string;
  managerRatedLevelEnDebug: string;
  managerRatedLevelEnGb: string;
  managerRatedLevelEnUs: string;
  managerRatedLevelEsEs: string;
  managerRatedLevelEsMx: string;
  managerRatedLevelFrCa: string;
  managerRatedLevelFrFr: string;
  managerRatedLevelItIt: string;
  managerRatedLevelLocalized: string;
  managerRatedLevelNlNl: string;
  managerRatedLevelPtBr: string;
  managerRatedLevelZhCn: string;
  mdfSystemRecordStatus: string;
  selfRatedLevelDeDe: string;
  selfRatedLevelDefaultValue: string;
  selfRatedLevelEnDebug: string;
  selfRatedLevelEnGb: string;
  selfRatedLevelEnUs: string;
  selfRatedLevelEsEs: string;
  selfRatedLevelEsMx: string;
  selfRatedLevelFrCa: string;
  selfRatedLevelFrFr: string;
  selfRatedLevelItIt: string;
  selfRatedLevelLocalized: string;
  selfRatedLevelNlNl: string;
  selfRatedLevelPtBr: string;
  selfRatedLevelZhCn: string;
  skill: string;
  status: string;
  subModule: string;
  createdByNav: UserType;
  expectedLevelTranslationTextNav: MdfLocalizedValueType[];
  lastModifiedByNav: UserType;
  managerRatedLevelTranslationTextNav: MdfLocalizedValueType[];
  mdfSystemRecordStatusNav: MdfEnumValueType;
  selfRatedLevelTranslationTextNav: MdfLocalizedValueType[];
  skillNav: SkillEntityType;
  statusNav: MdfEnumValueType;
}

export namespace RatedSkillMapping {
  /**
   * Static representation of the [[skillProfileExternalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SKILL_PROFILE_EXTERNAL_CODE: StringField<RatedSkillMapping> = new StringField('SkillProfile_externalCode', RatedSkillMapping, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<RatedSkillMapping> = new StringField('createdBy', RatedSkillMapping, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<RatedSkillMapping> = new DateField('createdDateTime', RatedSkillMapping, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[expectedLevelDeDe]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXPECTED_LEVEL_DE_DE: StringField<RatedSkillMapping> = new StringField('expectedLevel_de_DE', RatedSkillMapping, 'Edm.String');
  /**
   * Static representation of the [[expectedLevelDefaultValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXPECTED_LEVEL_DEFAULT_VALUE: StringField<RatedSkillMapping> = new StringField('expectedLevel_defaultValue', RatedSkillMapping, 'Edm.String');
  /**
   * Static representation of the [[expectedLevelEnDebug]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXPECTED_LEVEL_EN_DEBUG: StringField<RatedSkillMapping> = new StringField('expectedLevel_en_DEBUG', RatedSkillMapping, 'Edm.String');
  /**
   * Static representation of the [[expectedLevelEnGb]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXPECTED_LEVEL_EN_GB: StringField<RatedSkillMapping> = new StringField('expectedLevel_en_GB', RatedSkillMapping, 'Edm.String');
  /**
   * Static representation of the [[expectedLevelEnUs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXPECTED_LEVEL_EN_US: StringField<RatedSkillMapping> = new StringField('expectedLevel_en_US', RatedSkillMapping, 'Edm.String');
  /**
   * Static representation of the [[expectedLevelEsEs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXPECTED_LEVEL_ES_ES: StringField<RatedSkillMapping> = new StringField('expectedLevel_es_ES', RatedSkillMapping, 'Edm.String');
  /**
   * Static representation of the [[expectedLevelEsMx]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXPECTED_LEVEL_ES_MX: StringField<RatedSkillMapping> = new StringField('expectedLevel_es_MX', RatedSkillMapping, 'Edm.String');
  /**
   * Static representation of the [[expectedLevelFrCa]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXPECTED_LEVEL_FR_CA: StringField<RatedSkillMapping> = new StringField('expectedLevel_fr_CA', RatedSkillMapping, 'Edm.String');
  /**
   * Static representation of the [[expectedLevelFrFr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXPECTED_LEVEL_FR_FR: StringField<RatedSkillMapping> = new StringField('expectedLevel_fr_FR', RatedSkillMapping, 'Edm.String');
  /**
   * Static representation of the [[expectedLevelItIt]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXPECTED_LEVEL_IT_IT: StringField<RatedSkillMapping> = new StringField('expectedLevel_it_IT', RatedSkillMapping, 'Edm.String');
  /**
   * Static representation of the [[expectedLevelLocalized]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXPECTED_LEVEL_LOCALIZED: StringField<RatedSkillMapping> = new StringField('expectedLevel_localized', RatedSkillMapping, 'Edm.String');
  /**
   * Static representation of the [[expectedLevelNlNl]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXPECTED_LEVEL_NL_NL: StringField<RatedSkillMapping> = new StringField('expectedLevel_nl_NL', RatedSkillMapping, 'Edm.String');
  /**
   * Static representation of the [[expectedLevelPtBr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXPECTED_LEVEL_PT_BR: StringField<RatedSkillMapping> = new StringField('expectedLevel_pt_BR', RatedSkillMapping, 'Edm.String');
  /**
   * Static representation of the [[expectedLevelZhCn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXPECTED_LEVEL_ZH_CN: StringField<RatedSkillMapping> = new StringField('expectedLevel_zh_CN', RatedSkillMapping, 'Edm.String');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: StringField<RatedSkillMapping> = new StringField('externalCode', RatedSkillMapping, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<RatedSkillMapping> = new StringField('lastModifiedBy', RatedSkillMapping, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<RatedSkillMapping> = new DateField('lastModifiedDateTime', RatedSkillMapping, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[managerRatedLevelDeDe]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MANAGER_RATED_LEVEL_DE_DE: StringField<RatedSkillMapping> = new StringField('managerRatedLevel_de_DE', RatedSkillMapping, 'Edm.String');
  /**
   * Static representation of the [[managerRatedLevelDefaultValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MANAGER_RATED_LEVEL_DEFAULT_VALUE: StringField<RatedSkillMapping> = new StringField('managerRatedLevel_defaultValue', RatedSkillMapping, 'Edm.String');
  /**
   * Static representation of the [[managerRatedLevelEnDebug]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MANAGER_RATED_LEVEL_EN_DEBUG: StringField<RatedSkillMapping> = new StringField('managerRatedLevel_en_DEBUG', RatedSkillMapping, 'Edm.String');
  /**
   * Static representation of the [[managerRatedLevelEnGb]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MANAGER_RATED_LEVEL_EN_GB: StringField<RatedSkillMapping> = new StringField('managerRatedLevel_en_GB', RatedSkillMapping, 'Edm.String');
  /**
   * Static representation of the [[managerRatedLevelEnUs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MANAGER_RATED_LEVEL_EN_US: StringField<RatedSkillMapping> = new StringField('managerRatedLevel_en_US', RatedSkillMapping, 'Edm.String');
  /**
   * Static representation of the [[managerRatedLevelEsEs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MANAGER_RATED_LEVEL_ES_ES: StringField<RatedSkillMapping> = new StringField('managerRatedLevel_es_ES', RatedSkillMapping, 'Edm.String');
  /**
   * Static representation of the [[managerRatedLevelEsMx]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MANAGER_RATED_LEVEL_ES_MX: StringField<RatedSkillMapping> = new StringField('managerRatedLevel_es_MX', RatedSkillMapping, 'Edm.String');
  /**
   * Static representation of the [[managerRatedLevelFrCa]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MANAGER_RATED_LEVEL_FR_CA: StringField<RatedSkillMapping> = new StringField('managerRatedLevel_fr_CA', RatedSkillMapping, 'Edm.String');
  /**
   * Static representation of the [[managerRatedLevelFrFr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MANAGER_RATED_LEVEL_FR_FR: StringField<RatedSkillMapping> = new StringField('managerRatedLevel_fr_FR', RatedSkillMapping, 'Edm.String');
  /**
   * Static representation of the [[managerRatedLevelItIt]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MANAGER_RATED_LEVEL_IT_IT: StringField<RatedSkillMapping> = new StringField('managerRatedLevel_it_IT', RatedSkillMapping, 'Edm.String');
  /**
   * Static representation of the [[managerRatedLevelLocalized]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MANAGER_RATED_LEVEL_LOCALIZED: StringField<RatedSkillMapping> = new StringField('managerRatedLevel_localized', RatedSkillMapping, 'Edm.String');
  /**
   * Static representation of the [[managerRatedLevelNlNl]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MANAGER_RATED_LEVEL_NL_NL: StringField<RatedSkillMapping> = new StringField('managerRatedLevel_nl_NL', RatedSkillMapping, 'Edm.String');
  /**
   * Static representation of the [[managerRatedLevelPtBr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MANAGER_RATED_LEVEL_PT_BR: StringField<RatedSkillMapping> = new StringField('managerRatedLevel_pt_BR', RatedSkillMapping, 'Edm.String');
  /**
   * Static representation of the [[managerRatedLevelZhCn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MANAGER_RATED_LEVEL_ZH_CN: StringField<RatedSkillMapping> = new StringField('managerRatedLevel_zh_CN', RatedSkillMapping, 'Edm.String');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<RatedSkillMapping> = new StringField('mdfSystemRecordStatus', RatedSkillMapping, 'Edm.String');
  /**
   * Static representation of the [[selfRatedLevelDeDe]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SELF_RATED_LEVEL_DE_DE: StringField<RatedSkillMapping> = new StringField('selfRatedLevel_de_DE', RatedSkillMapping, 'Edm.String');
  /**
   * Static representation of the [[selfRatedLevelDefaultValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SELF_RATED_LEVEL_DEFAULT_VALUE: StringField<RatedSkillMapping> = new StringField('selfRatedLevel_defaultValue', RatedSkillMapping, 'Edm.String');
  /**
   * Static representation of the [[selfRatedLevelEnDebug]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SELF_RATED_LEVEL_EN_DEBUG: StringField<RatedSkillMapping> = new StringField('selfRatedLevel_en_DEBUG', RatedSkillMapping, 'Edm.String');
  /**
   * Static representation of the [[selfRatedLevelEnGb]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SELF_RATED_LEVEL_EN_GB: StringField<RatedSkillMapping> = new StringField('selfRatedLevel_en_GB', RatedSkillMapping, 'Edm.String');
  /**
   * Static representation of the [[selfRatedLevelEnUs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SELF_RATED_LEVEL_EN_US: StringField<RatedSkillMapping> = new StringField('selfRatedLevel_en_US', RatedSkillMapping, 'Edm.String');
  /**
   * Static representation of the [[selfRatedLevelEsEs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SELF_RATED_LEVEL_ES_ES: StringField<RatedSkillMapping> = new StringField('selfRatedLevel_es_ES', RatedSkillMapping, 'Edm.String');
  /**
   * Static representation of the [[selfRatedLevelEsMx]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SELF_RATED_LEVEL_ES_MX: StringField<RatedSkillMapping> = new StringField('selfRatedLevel_es_MX', RatedSkillMapping, 'Edm.String');
  /**
   * Static representation of the [[selfRatedLevelFrCa]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SELF_RATED_LEVEL_FR_CA: StringField<RatedSkillMapping> = new StringField('selfRatedLevel_fr_CA', RatedSkillMapping, 'Edm.String');
  /**
   * Static representation of the [[selfRatedLevelFrFr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SELF_RATED_LEVEL_FR_FR: StringField<RatedSkillMapping> = new StringField('selfRatedLevel_fr_FR', RatedSkillMapping, 'Edm.String');
  /**
   * Static representation of the [[selfRatedLevelItIt]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SELF_RATED_LEVEL_IT_IT: StringField<RatedSkillMapping> = new StringField('selfRatedLevel_it_IT', RatedSkillMapping, 'Edm.String');
  /**
   * Static representation of the [[selfRatedLevelLocalized]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SELF_RATED_LEVEL_LOCALIZED: StringField<RatedSkillMapping> = new StringField('selfRatedLevel_localized', RatedSkillMapping, 'Edm.String');
  /**
   * Static representation of the [[selfRatedLevelNlNl]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SELF_RATED_LEVEL_NL_NL: StringField<RatedSkillMapping> = new StringField('selfRatedLevel_nl_NL', RatedSkillMapping, 'Edm.String');
  /**
   * Static representation of the [[selfRatedLevelPtBr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SELF_RATED_LEVEL_PT_BR: StringField<RatedSkillMapping> = new StringField('selfRatedLevel_pt_BR', RatedSkillMapping, 'Edm.String');
  /**
   * Static representation of the [[selfRatedLevelZhCn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SELF_RATED_LEVEL_ZH_CN: StringField<RatedSkillMapping> = new StringField('selfRatedLevel_zh_CN', RatedSkillMapping, 'Edm.String');
  /**
   * Static representation of the [[skill]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SKILL: StringField<RatedSkillMapping> = new StringField('skill', RatedSkillMapping, 'Edm.String');
  /**
   * Static representation of the [[status]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS: StringField<RatedSkillMapping> = new StringField('status', RatedSkillMapping, 'Edm.String');
  /**
   * Static representation of the [[subModule]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUB_MODULE: StringField<RatedSkillMapping> = new StringField('subModule', RatedSkillMapping, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<RatedSkillMapping, User> = new OneToOneLink('createdByNav', RatedSkillMapping, User);
  /**
   * Static representation of the one-to-many navigation property [[expectedLevelTranslationTextNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXPECTED_LEVEL_TRANSLATION_TEXT_NAV: Link<RatedSkillMapping, MdfLocalizedValue> = new Link('expectedLevelTranslationTextNav', RatedSkillMapping, MdfLocalizedValue);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<RatedSkillMapping, User> = new OneToOneLink('lastModifiedByNav', RatedSkillMapping, User);
  /**
   * Static representation of the one-to-many navigation property [[managerRatedLevelTranslationTextNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MANAGER_RATED_LEVEL_TRANSLATION_TEXT_NAV: Link<RatedSkillMapping, MdfLocalizedValue> = new Link('managerRatedLevelTranslationTextNav', RatedSkillMapping, MdfLocalizedValue);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<RatedSkillMapping, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', RatedSkillMapping, MdfEnumValue);
  /**
   * Static representation of the one-to-many navigation property [[selfRatedLevelTranslationTextNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SELF_RATED_LEVEL_TRANSLATION_TEXT_NAV: Link<RatedSkillMapping, MdfLocalizedValue> = new Link('selfRatedLevelTranslationTextNav', RatedSkillMapping, MdfLocalizedValue);
  /**
   * Static representation of the one-to-one navigation property [[skillNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SKILL_NAV: OneToOneLink<RatedSkillMapping, SkillEntity> = new OneToOneLink('skillNav', RatedSkillMapping, SkillEntity);
  /**
   * Static representation of the one-to-one navigation property [[statusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS_NAV: OneToOneLink<RatedSkillMapping, MdfEnumValue> = new OneToOneLink('statusNav', RatedSkillMapping, MdfEnumValue);
  /**
   * All fields of the RatedSkillMapping entity.
   */
  export const _allFields: Array<StringField<RatedSkillMapping> | DateField<RatedSkillMapping> | OneToOneLink<RatedSkillMapping, User> | Link<RatedSkillMapping, MdfLocalizedValue> | OneToOneLink<RatedSkillMapping, MdfEnumValue> | OneToOneLink<RatedSkillMapping, SkillEntity>> = [
    RatedSkillMapping.SKILL_PROFILE_EXTERNAL_CODE,
    RatedSkillMapping.CREATED_BY,
    RatedSkillMapping.CREATED_DATE_TIME,
    RatedSkillMapping.EXPECTED_LEVEL_DE_DE,
    RatedSkillMapping.EXPECTED_LEVEL_DEFAULT_VALUE,
    RatedSkillMapping.EXPECTED_LEVEL_EN_DEBUG,
    RatedSkillMapping.EXPECTED_LEVEL_EN_GB,
    RatedSkillMapping.EXPECTED_LEVEL_EN_US,
    RatedSkillMapping.EXPECTED_LEVEL_ES_ES,
    RatedSkillMapping.EXPECTED_LEVEL_ES_MX,
    RatedSkillMapping.EXPECTED_LEVEL_FR_CA,
    RatedSkillMapping.EXPECTED_LEVEL_FR_FR,
    RatedSkillMapping.EXPECTED_LEVEL_IT_IT,
    RatedSkillMapping.EXPECTED_LEVEL_LOCALIZED,
    RatedSkillMapping.EXPECTED_LEVEL_NL_NL,
    RatedSkillMapping.EXPECTED_LEVEL_PT_BR,
    RatedSkillMapping.EXPECTED_LEVEL_ZH_CN,
    RatedSkillMapping.EXTERNAL_CODE,
    RatedSkillMapping.LAST_MODIFIED_BY,
    RatedSkillMapping.LAST_MODIFIED_DATE_TIME,
    RatedSkillMapping.MANAGER_RATED_LEVEL_DE_DE,
    RatedSkillMapping.MANAGER_RATED_LEVEL_DEFAULT_VALUE,
    RatedSkillMapping.MANAGER_RATED_LEVEL_EN_DEBUG,
    RatedSkillMapping.MANAGER_RATED_LEVEL_EN_GB,
    RatedSkillMapping.MANAGER_RATED_LEVEL_EN_US,
    RatedSkillMapping.MANAGER_RATED_LEVEL_ES_ES,
    RatedSkillMapping.MANAGER_RATED_LEVEL_ES_MX,
    RatedSkillMapping.MANAGER_RATED_LEVEL_FR_CA,
    RatedSkillMapping.MANAGER_RATED_LEVEL_FR_FR,
    RatedSkillMapping.MANAGER_RATED_LEVEL_IT_IT,
    RatedSkillMapping.MANAGER_RATED_LEVEL_LOCALIZED,
    RatedSkillMapping.MANAGER_RATED_LEVEL_NL_NL,
    RatedSkillMapping.MANAGER_RATED_LEVEL_PT_BR,
    RatedSkillMapping.MANAGER_RATED_LEVEL_ZH_CN,
    RatedSkillMapping.MDF_SYSTEM_RECORD_STATUS,
    RatedSkillMapping.SELF_RATED_LEVEL_DE_DE,
    RatedSkillMapping.SELF_RATED_LEVEL_DEFAULT_VALUE,
    RatedSkillMapping.SELF_RATED_LEVEL_EN_DEBUG,
    RatedSkillMapping.SELF_RATED_LEVEL_EN_GB,
    RatedSkillMapping.SELF_RATED_LEVEL_EN_US,
    RatedSkillMapping.SELF_RATED_LEVEL_ES_ES,
    RatedSkillMapping.SELF_RATED_LEVEL_ES_MX,
    RatedSkillMapping.SELF_RATED_LEVEL_FR_CA,
    RatedSkillMapping.SELF_RATED_LEVEL_FR_FR,
    RatedSkillMapping.SELF_RATED_LEVEL_IT_IT,
    RatedSkillMapping.SELF_RATED_LEVEL_LOCALIZED,
    RatedSkillMapping.SELF_RATED_LEVEL_NL_NL,
    RatedSkillMapping.SELF_RATED_LEVEL_PT_BR,
    RatedSkillMapping.SELF_RATED_LEVEL_ZH_CN,
    RatedSkillMapping.SKILL,
    RatedSkillMapping.STATUS,
    RatedSkillMapping.SUB_MODULE,
    RatedSkillMapping.CREATED_BY_NAV,
    RatedSkillMapping.EXPECTED_LEVEL_TRANSLATION_TEXT_NAV,
    RatedSkillMapping.LAST_MODIFIED_BY_NAV,
    RatedSkillMapping.MANAGER_RATED_LEVEL_TRANSLATION_TEXT_NAV,
    RatedSkillMapping.MDF_SYSTEM_RECORD_STATUS_NAV,
    RatedSkillMapping.SELF_RATED_LEVEL_TRANSLATION_TEXT_NAV,
    RatedSkillMapping.SKILL_NAV,
    RatedSkillMapping.STATUS_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<RatedSkillMapping> = new AllFields('*', RatedSkillMapping);
  /**
   * All key fields of the RatedSkillMapping entity.
   */
  export const _keyFields: Array<Selectable<RatedSkillMapping>> = [RatedSkillMapping.SKILL_PROFILE_EXTERNAL_CODE, RatedSkillMapping.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property RatedSkillMapping.
   */
  export const _keys: { [keys: string]: Selectable<RatedSkillMapping> } = RatedSkillMapping._keyFields.reduce((acc: { [keys: string]: Selectable<RatedSkillMapping> }, field: Selectable<RatedSkillMapping>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
