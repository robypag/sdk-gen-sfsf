/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SkillContentRequestBuilder } from './SkillContentRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "SkillContent" of service "SFOData".
 */
export class SkillContent extends Entity implements SkillContentType {
  /**
   * Technical entity name for SkillContent.
   */
  static _entityName = 'SkillContent';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for SkillContent.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Job Profile_GUID.
   * Maximum length: 128.
   */
  jobProfileExternalCode!: string;
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
   * Skill.
   * Maximum length: 128.
   * @nullable
   */
  entity?: string;
  /**
   * externalCode.
   * Maximum length: 128.
   */
  externalCode!: string;
  /**
   * jobProfileId.
   * Maximum length: 255.
   * @nullable
   */
  jobProfileId?: string;
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
   * role.
   * Maximum length: 128.
   * @nullable
   */
  role?: string;
  /**
   * sectionId.
   * Maximum length: 255.
   * @nullable
   */
  sectionId?: string;
  /**
   * sectionType.
   * Maximum length: 255.
   * @nullable
   */
  sectionType?: string;
  /**
   * skillMappingId.
   * Maximum length: 255.
   * @nullable
   */
  skillMappingId?: string;
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
   * One-to-one navigation property to the [[SkillEntity]] entity.
   */
  entityNav!: SkillEntity;
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
   * One-to-one navigation property to the [[RoleEntity]] entity.
   */
  roleNav!: RoleEntity;
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  statusNav!: MdfEnumValue;

  /**
   * Returns an entity builder to construct instances `SkillContent`.
   * @returns A builder that constructs instances of entity type `SkillContent`.
   */
  static builder(): EntityBuilderType<SkillContent, SkillContentTypeForceMandatory> {
    return Entity.entityBuilder(SkillContent);
  }

  /**
   * Returns a request builder to construct requests for operations on the `SkillContent` entity type.
   * @returns A `SkillContent` request builder.
   */
  static requestBuilder(): SkillContentRequestBuilder {
    return new SkillContentRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `SkillContent`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `SkillContent`.
   */
  static customField(fieldName: string): CustomField<SkillContent> {
    return Entity.customFieldSelector(fieldName, SkillContent);
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
import { SkillEntity, SkillEntityType } from './SkillEntity';
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';
import { MdfLocalizedValue, MdfLocalizedValueType } from './MdfLocalizedValue';
import { RoleEntity, RoleEntityType } from './RoleEntity';

export interface SkillContentType {
  jobProfileExternalCode: string;
  createdBy?: string;
  createdDateTime?: Moment;
  entity?: string;
  externalCode: string;
  jobProfileId?: string;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  mdfSystemRecordStatus?: string;
  order?: BigNumber;
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
  role?: string;
  sectionId?: string;
  sectionType?: string;
  skillMappingId?: string;
  status?: string;
  subModule?: string;
  createdByNav: UserType;
  entityNav: SkillEntityType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  proLevelTranslationTextNav: MdfLocalizedValueType[];
  roleNav: RoleEntityType;
  statusNav: MdfEnumValueType;
}

export interface SkillContentTypeForceMandatory {
  jobProfileExternalCode: string;
  createdBy: string;
  createdDateTime: Moment;
  entity: string;
  externalCode: string;
  jobProfileId: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  mdfSystemRecordStatus: string;
  order: BigNumber;
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
  role: string;
  sectionId: string;
  sectionType: string;
  skillMappingId: string;
  status: string;
  subModule: string;
  createdByNav: UserType;
  entityNav: SkillEntityType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  proLevelTranslationTextNav: MdfLocalizedValueType[];
  roleNav: RoleEntityType;
  statusNav: MdfEnumValueType;
}

export namespace SkillContent {
  /**
   * Static representation of the [[jobProfileExternalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_PROFILE_EXTERNAL_CODE: StringField<SkillContent> = new StringField('JobProfile_externalCode', SkillContent, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<SkillContent> = new StringField('createdBy', SkillContent, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<SkillContent> = new DateField('createdDateTime', SkillContent, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[entity]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ENTITY: StringField<SkillContent> = new StringField('entity', SkillContent, 'Edm.String');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: StringField<SkillContent> = new StringField('externalCode', SkillContent, 'Edm.String');
  /**
   * Static representation of the [[jobProfileId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_PROFILE_ID: StringField<SkillContent> = new StringField('jobProfileId', SkillContent, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<SkillContent> = new StringField('lastModifiedBy', SkillContent, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<SkillContent> = new DateField('lastModifiedDateTime', SkillContent, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<SkillContent> = new StringField('mdfSystemRecordStatus', SkillContent, 'Edm.String');
  /**
   * Static representation of the [[order]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ORDER: BigNumberField<SkillContent> = new BigNumberField('order', SkillContent, 'Edm.Int64');
  /**
   * Static representation of the [[proLevelDeDe]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRO_LEVEL_DE_DE: StringField<SkillContent> = new StringField('proLevel_de_DE', SkillContent, 'Edm.String');
  /**
   * Static representation of the [[proLevelDefaultValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRO_LEVEL_DEFAULT_VALUE: StringField<SkillContent> = new StringField('proLevel_defaultValue', SkillContent, 'Edm.String');
  /**
   * Static representation of the [[proLevelEnDebug]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRO_LEVEL_EN_DEBUG: StringField<SkillContent> = new StringField('proLevel_en_DEBUG', SkillContent, 'Edm.String');
  /**
   * Static representation of the [[proLevelEnGb]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRO_LEVEL_EN_GB: StringField<SkillContent> = new StringField('proLevel_en_GB', SkillContent, 'Edm.String');
  /**
   * Static representation of the [[proLevelEnUs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRO_LEVEL_EN_US: StringField<SkillContent> = new StringField('proLevel_en_US', SkillContent, 'Edm.String');
  /**
   * Static representation of the [[proLevelEsEs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRO_LEVEL_ES_ES: StringField<SkillContent> = new StringField('proLevel_es_ES', SkillContent, 'Edm.String');
  /**
   * Static representation of the [[proLevelEsMx]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRO_LEVEL_ES_MX: StringField<SkillContent> = new StringField('proLevel_es_MX', SkillContent, 'Edm.String');
  /**
   * Static representation of the [[proLevelFrCa]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRO_LEVEL_FR_CA: StringField<SkillContent> = new StringField('proLevel_fr_CA', SkillContent, 'Edm.String');
  /**
   * Static representation of the [[proLevelFrFr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRO_LEVEL_FR_FR: StringField<SkillContent> = new StringField('proLevel_fr_FR', SkillContent, 'Edm.String');
  /**
   * Static representation of the [[proLevelItIt]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRO_LEVEL_IT_IT: StringField<SkillContent> = new StringField('proLevel_it_IT', SkillContent, 'Edm.String');
  /**
   * Static representation of the [[proLevelLocalized]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRO_LEVEL_LOCALIZED: StringField<SkillContent> = new StringField('proLevel_localized', SkillContent, 'Edm.String');
  /**
   * Static representation of the [[proLevelNlNl]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRO_LEVEL_NL_NL: StringField<SkillContent> = new StringField('proLevel_nl_NL', SkillContent, 'Edm.String');
  /**
   * Static representation of the [[proLevelPtBr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRO_LEVEL_PT_BR: StringField<SkillContent> = new StringField('proLevel_pt_BR', SkillContent, 'Edm.String');
  /**
   * Static representation of the [[proLevelZhCn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRO_LEVEL_ZH_CN: StringField<SkillContent> = new StringField('proLevel_zh_CN', SkillContent, 'Edm.String');
  /**
   * Static representation of the [[role]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ROLE: StringField<SkillContent> = new StringField('role', SkillContent, 'Edm.String');
  /**
   * Static representation of the [[sectionId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SECTION_ID: StringField<SkillContent> = new StringField('sectionId', SkillContent, 'Edm.String');
  /**
   * Static representation of the [[sectionType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SECTION_TYPE: StringField<SkillContent> = new StringField('sectionType', SkillContent, 'Edm.String');
  /**
   * Static representation of the [[skillMappingId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SKILL_MAPPING_ID: StringField<SkillContent> = new StringField('skillMappingId', SkillContent, 'Edm.String');
  /**
   * Static representation of the [[status]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS: StringField<SkillContent> = new StringField('status', SkillContent, 'Edm.String');
  /**
   * Static representation of the [[subModule]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUB_MODULE: StringField<SkillContent> = new StringField('subModule', SkillContent, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<SkillContent, User> = new OneToOneLink('createdByNav', SkillContent, User);
  /**
   * Static representation of the one-to-one navigation property [[entityNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ENTITY_NAV: OneToOneLink<SkillContent, SkillEntity> = new OneToOneLink('entityNav', SkillContent, SkillEntity);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<SkillContent, User> = new OneToOneLink('lastModifiedByNav', SkillContent, User);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<SkillContent, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', SkillContent, MdfEnumValue);
  /**
   * Static representation of the one-to-many navigation property [[proLevelTranslationTextNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRO_LEVEL_TRANSLATION_TEXT_NAV: Link<SkillContent, MdfLocalizedValue> = new Link('proLevelTranslationTextNav', SkillContent, MdfLocalizedValue);
  /**
   * Static representation of the one-to-one navigation property [[roleNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ROLE_NAV: OneToOneLink<SkillContent, RoleEntity> = new OneToOneLink('roleNav', SkillContent, RoleEntity);
  /**
   * Static representation of the one-to-one navigation property [[statusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS_NAV: OneToOneLink<SkillContent, MdfEnumValue> = new OneToOneLink('statusNav', SkillContent, MdfEnumValue);
  /**
   * All fields of the SkillContent entity.
   */
  export const _allFields: Array<StringField<SkillContent> | DateField<SkillContent> | BigNumberField<SkillContent> | OneToOneLink<SkillContent, User> | OneToOneLink<SkillContent, SkillEntity> | OneToOneLink<SkillContent, MdfEnumValue> | Link<SkillContent, MdfLocalizedValue> | OneToOneLink<SkillContent, RoleEntity>> = [
    SkillContent.JOB_PROFILE_EXTERNAL_CODE,
    SkillContent.CREATED_BY,
    SkillContent.CREATED_DATE_TIME,
    SkillContent.ENTITY,
    SkillContent.EXTERNAL_CODE,
    SkillContent.JOB_PROFILE_ID,
    SkillContent.LAST_MODIFIED_BY,
    SkillContent.LAST_MODIFIED_DATE_TIME,
    SkillContent.MDF_SYSTEM_RECORD_STATUS,
    SkillContent.ORDER,
    SkillContent.PRO_LEVEL_DE_DE,
    SkillContent.PRO_LEVEL_DEFAULT_VALUE,
    SkillContent.PRO_LEVEL_EN_DEBUG,
    SkillContent.PRO_LEVEL_EN_GB,
    SkillContent.PRO_LEVEL_EN_US,
    SkillContent.PRO_LEVEL_ES_ES,
    SkillContent.PRO_LEVEL_ES_MX,
    SkillContent.PRO_LEVEL_FR_CA,
    SkillContent.PRO_LEVEL_FR_FR,
    SkillContent.PRO_LEVEL_IT_IT,
    SkillContent.PRO_LEVEL_LOCALIZED,
    SkillContent.PRO_LEVEL_NL_NL,
    SkillContent.PRO_LEVEL_PT_BR,
    SkillContent.PRO_LEVEL_ZH_CN,
    SkillContent.ROLE,
    SkillContent.SECTION_ID,
    SkillContent.SECTION_TYPE,
    SkillContent.SKILL_MAPPING_ID,
    SkillContent.STATUS,
    SkillContent.SUB_MODULE,
    SkillContent.CREATED_BY_NAV,
    SkillContent.ENTITY_NAV,
    SkillContent.LAST_MODIFIED_BY_NAV,
    SkillContent.MDF_SYSTEM_RECORD_STATUS_NAV,
    SkillContent.PRO_LEVEL_TRANSLATION_TEXT_NAV,
    SkillContent.ROLE_NAV,
    SkillContent.STATUS_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<SkillContent> = new AllFields('*', SkillContent);
  /**
   * All key fields of the SkillContent entity.
   */
  export const _keyFields: Array<Selectable<SkillContent>> = [SkillContent.JOB_PROFILE_EXTERNAL_CODE, SkillContent.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property SkillContent.
   */
  export const _keys: { [keys: string]: Selectable<SkillContent> } = SkillContent._keyFields.reduce((acc: { [keys: string]: Selectable<SkillContent> }, field: Selectable<SkillContent>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
