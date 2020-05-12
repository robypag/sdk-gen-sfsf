/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RoleEntityRequestBuilder } from './RoleEntityRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "RoleEntity" of service "SFOData".
 */
export class RoleEntity extends Entity implements RoleEntityType {
  /**
   * Technical entity name for RoleEntity.
   */
  static _entityName = 'RoleEntity';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for RoleEntity.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
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
   * createdLocale.
   * Maximum length: 255.
   * @nullable
   */
  createdLocale?: string;
  /**
   * GUID.
   * Maximum length: 128.
   */
  externalCode!: string;
  /**
   * Family.
   * Maximum length: 128.
   * @nullable
   */
  family?: string;
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
   * Role Name.
   * Maximum length: 128.
   * @nullable
   */
  nameDeDe?: string;
  /**
   * Role Name.
   * Maximum length: 128.
   * @nullable
   */
  nameDefaultValue?: string;
  /**
   * Role Name.
   * Maximum length: 128.
   * @nullable
   */
  nameEnDebug?: string;
  /**
   * Role Name.
   * Maximum length: 128.
   * @nullable
   */
  nameEnGb?: string;
  /**
   * Role Name.
   * Maximum length: 128.
   * @nullable
   */
  nameEnUs?: string;
  /**
   * Role Name.
   * Maximum length: 128.
   * @nullable
   */
  nameEsEs?: string;
  /**
   * Role Name.
   * Maximum length: 128.
   * @nullable
   */
  nameEsMx?: string;
  /**
   * Role Name.
   * Maximum length: 128.
   * @nullable
   */
  nameFrCa?: string;
  /**
   * Role Name.
   * Maximum length: 128.
   * @nullable
   */
  nameFrFr?: string;
  /**
   * Role Name.
   * Maximum length: 128.
   * @nullable
   */
  nameItIt?: string;
  /**
   * Role Name.
   * Maximum length: 128.
   * @nullable
   */
  nameLocalized?: string;
  /**
   * Role Name.
   * Maximum length: 128.
   * @nullable
   */
  nameNlNl?: string;
  /**
   * Role Name.
   * Maximum length: 128.
   * @nullable
   */
  namePtBr?: string;
  /**
   * Role Name.
   * Maximum length: 128.
   * @nullable
   */
  nameZhCn?: string;
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
   * One-to-one navigation property to the [[FamilyEntity]] entity.
   */
  familyNav!: FamilyEntity;
  /**
   * One-to-many navigation property to the [[JobCodeMappingEntity]] entity.
   */
  jobCodeMappings!: JobCodeMappingEntity[];
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
  nameTranslationTextNav!: MdfLocalizedValue[];
  /**
   * One-to-many navigation property to the [[RoleCompetencyBehaviorMappingEntity]] entity.
   */
  roleCompetencyBehaviorMappings!: RoleCompetencyBehaviorMappingEntity[];
  /**
   * One-to-many navigation property to the [[RoleCompetencyMappingEntity]] entity.
   */
  roleCompetencyMappings!: RoleCompetencyMappingEntity[];
  /**
   * One-to-many navigation property to the [[RoleSkillMappingEntity]] entity.
   */
  roleSkillMappings!: RoleSkillMappingEntity[];
  /**
   * One-to-many navigation property to the [[RoleTalentPoolMappingEntity]] entity.
   */
  roleTalentPoolMappings!: RoleTalentPoolMappingEntity[];
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  statusNav!: MdfEnumValue;
  /**
   * One-to-many navigation property to the [[WfRequest]] entity.
   */
  wfRequestNav!: WfRequest[];

  /**
   * Returns an entity builder to construct instances `RoleEntity`.
   * @returns A builder that constructs instances of entity type `RoleEntity`.
   */
  static builder(): EntityBuilderType<RoleEntity, RoleEntityTypeForceMandatory> {
    return Entity.entityBuilder(RoleEntity);
  }

  /**
   * Returns a request builder to construct requests for operations on the `RoleEntity` entity type.
   * @returns A `RoleEntity` request builder.
   */
  static requestBuilder(): RoleEntityRequestBuilder {
    return new RoleEntityRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `RoleEntity`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `RoleEntity`.
   */
  static customField(fieldName: string): CustomField<RoleEntity> {
    return Entity.customFieldSelector(fieldName, RoleEntity);
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
import { FamilyEntity, FamilyEntityType } from './FamilyEntity';
import { JobCodeMappingEntity, JobCodeMappingEntityType } from './JobCodeMappingEntity';
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';
import { MdfLocalizedValue, MdfLocalizedValueType } from './MdfLocalizedValue';
import { RoleCompetencyBehaviorMappingEntity, RoleCompetencyBehaviorMappingEntityType } from './RoleCompetencyBehaviorMappingEntity';
import { RoleCompetencyMappingEntity, RoleCompetencyMappingEntityType } from './RoleCompetencyMappingEntity';
import { RoleSkillMappingEntity, RoleSkillMappingEntityType } from './RoleSkillMappingEntity';
import { RoleTalentPoolMappingEntity, RoleTalentPoolMappingEntityType } from './RoleTalentPoolMappingEntity';
import { WfRequest, WfRequestType } from './WfRequest';

export interface RoleEntityType {
  createdBy?: string;
  createdDateTime?: Moment;
  createdLocale?: string;
  externalCode: string;
  family?: string;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  mdfSystemRecordStatus?: string;
  nameDeDe?: string;
  nameDefaultValue?: string;
  nameEnDebug?: string;
  nameEnGb?: string;
  nameEnUs?: string;
  nameEsEs?: string;
  nameEsMx?: string;
  nameFrCa?: string;
  nameFrFr?: string;
  nameItIt?: string;
  nameLocalized?: string;
  nameNlNl?: string;
  namePtBr?: string;
  nameZhCn?: string;
  status?: string;
  subModule?: string;
  createdByNav: UserType;
  familyNav: FamilyEntityType;
  jobCodeMappings: JobCodeMappingEntityType[];
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  nameTranslationTextNav: MdfLocalizedValueType[];
  roleCompetencyBehaviorMappings: RoleCompetencyBehaviorMappingEntityType[];
  roleCompetencyMappings: RoleCompetencyMappingEntityType[];
  roleSkillMappings: RoleSkillMappingEntityType[];
  roleTalentPoolMappings: RoleTalentPoolMappingEntityType[];
  statusNav: MdfEnumValueType;
  wfRequestNav: WfRequestType[];
}

export interface RoleEntityTypeForceMandatory {
  createdBy: string;
  createdDateTime: Moment;
  createdLocale: string;
  externalCode: string;
  family: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  mdfSystemRecordStatus: string;
  nameDeDe: string;
  nameDefaultValue: string;
  nameEnDebug: string;
  nameEnGb: string;
  nameEnUs: string;
  nameEsEs: string;
  nameEsMx: string;
  nameFrCa: string;
  nameFrFr: string;
  nameItIt: string;
  nameLocalized: string;
  nameNlNl: string;
  namePtBr: string;
  nameZhCn: string;
  status: string;
  subModule: string;
  createdByNav: UserType;
  familyNav: FamilyEntityType;
  jobCodeMappings: JobCodeMappingEntityType[];
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  nameTranslationTextNav: MdfLocalizedValueType[];
  roleCompetencyBehaviorMappings: RoleCompetencyBehaviorMappingEntityType[];
  roleCompetencyMappings: RoleCompetencyMappingEntityType[];
  roleSkillMappings: RoleSkillMappingEntityType[];
  roleTalentPoolMappings: RoleTalentPoolMappingEntityType[];
  statusNav: MdfEnumValueType;
  wfRequestNav: WfRequestType[];
}

export namespace RoleEntity {
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<RoleEntity> = new StringField('createdBy', RoleEntity, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<RoleEntity> = new DateField('createdDateTime', RoleEntity, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[createdLocale]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_LOCALE: StringField<RoleEntity> = new StringField('createdLocale', RoleEntity, 'Edm.String');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: StringField<RoleEntity> = new StringField('externalCode', RoleEntity, 'Edm.String');
  /**
   * Static representation of the [[family]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FAMILY: StringField<RoleEntity> = new StringField('family', RoleEntity, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<RoleEntity> = new StringField('lastModifiedBy', RoleEntity, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<RoleEntity> = new DateField('lastModifiedDateTime', RoleEntity, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<RoleEntity> = new StringField('mdfSystemRecordStatus', RoleEntity, 'Edm.String');
  /**
   * Static representation of the [[nameDeDe]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_DE_DE: StringField<RoleEntity> = new StringField('name_de_DE', RoleEntity, 'Edm.String');
  /**
   * Static representation of the [[nameDefaultValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_DEFAULT_VALUE: StringField<RoleEntity> = new StringField('name_defaultValue', RoleEntity, 'Edm.String');
  /**
   * Static representation of the [[nameEnDebug]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_EN_DEBUG: StringField<RoleEntity> = new StringField('name_en_DEBUG', RoleEntity, 'Edm.String');
  /**
   * Static representation of the [[nameEnGb]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_EN_GB: StringField<RoleEntity> = new StringField('name_en_GB', RoleEntity, 'Edm.String');
  /**
   * Static representation of the [[nameEnUs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_EN_US: StringField<RoleEntity> = new StringField('name_en_US', RoleEntity, 'Edm.String');
  /**
   * Static representation of the [[nameEsEs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_ES_ES: StringField<RoleEntity> = new StringField('name_es_ES', RoleEntity, 'Edm.String');
  /**
   * Static representation of the [[nameEsMx]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_ES_MX: StringField<RoleEntity> = new StringField('name_es_MX', RoleEntity, 'Edm.String');
  /**
   * Static representation of the [[nameFrCa]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_FR_CA: StringField<RoleEntity> = new StringField('name_fr_CA', RoleEntity, 'Edm.String');
  /**
   * Static representation of the [[nameFrFr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_FR_FR: StringField<RoleEntity> = new StringField('name_fr_FR', RoleEntity, 'Edm.String');
  /**
   * Static representation of the [[nameItIt]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_IT_IT: StringField<RoleEntity> = new StringField('name_it_IT', RoleEntity, 'Edm.String');
  /**
   * Static representation of the [[nameLocalized]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_LOCALIZED: StringField<RoleEntity> = new StringField('name_localized', RoleEntity, 'Edm.String');
  /**
   * Static representation of the [[nameNlNl]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_NL_NL: StringField<RoleEntity> = new StringField('name_nl_NL', RoleEntity, 'Edm.String');
  /**
   * Static representation of the [[namePtBr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_PT_BR: StringField<RoleEntity> = new StringField('name_pt_BR', RoleEntity, 'Edm.String');
  /**
   * Static representation of the [[nameZhCn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_ZH_CN: StringField<RoleEntity> = new StringField('name_zh_CN', RoleEntity, 'Edm.String');
  /**
   * Static representation of the [[status]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS: StringField<RoleEntity> = new StringField('status', RoleEntity, 'Edm.String');
  /**
   * Static representation of the [[subModule]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUB_MODULE: StringField<RoleEntity> = new StringField('subModule', RoleEntity, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<RoleEntity, User> = new OneToOneLink('createdByNav', RoleEntity, User);
  /**
   * Static representation of the one-to-one navigation property [[familyNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FAMILY_NAV: OneToOneLink<RoleEntity, FamilyEntity> = new OneToOneLink('familyNav', RoleEntity, FamilyEntity);
  /**
   * Static representation of the one-to-many navigation property [[jobCodeMappings]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_CODE_MAPPINGS: Link<RoleEntity, JobCodeMappingEntity> = new Link('jobCodeMappings', RoleEntity, JobCodeMappingEntity);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<RoleEntity, User> = new OneToOneLink('lastModifiedByNav', RoleEntity, User);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<RoleEntity, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', RoleEntity, MdfEnumValue);
  /**
   * Static representation of the one-to-many navigation property [[nameTranslationTextNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_TRANSLATION_TEXT_NAV: Link<RoleEntity, MdfLocalizedValue> = new Link('nameTranslationTextNav', RoleEntity, MdfLocalizedValue);
  /**
   * Static representation of the one-to-many navigation property [[roleCompetencyBehaviorMappings]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ROLE_COMPETENCY_BEHAVIOR_MAPPINGS: Link<RoleEntity, RoleCompetencyBehaviorMappingEntity> = new Link('roleCompetencyBehaviorMappings', RoleEntity, RoleCompetencyBehaviorMappingEntity);
  /**
   * Static representation of the one-to-many navigation property [[roleCompetencyMappings]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ROLE_COMPETENCY_MAPPINGS: Link<RoleEntity, RoleCompetencyMappingEntity> = new Link('roleCompetencyMappings', RoleEntity, RoleCompetencyMappingEntity);
  /**
   * Static representation of the one-to-many navigation property [[roleSkillMappings]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ROLE_SKILL_MAPPINGS: Link<RoleEntity, RoleSkillMappingEntity> = new Link('roleSkillMappings', RoleEntity, RoleSkillMappingEntity);
  /**
   * Static representation of the one-to-many navigation property [[roleTalentPoolMappings]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ROLE_TALENT_POOL_MAPPINGS: Link<RoleEntity, RoleTalentPoolMappingEntity> = new Link('roleTalentPoolMappings', RoleEntity, RoleTalentPoolMappingEntity);
  /**
   * Static representation of the one-to-one navigation property [[statusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS_NAV: OneToOneLink<RoleEntity, MdfEnumValue> = new OneToOneLink('statusNav', RoleEntity, MdfEnumValue);
  /**
   * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WF_REQUEST_NAV: Link<RoleEntity, WfRequest> = new Link('wfRequestNav', RoleEntity, WfRequest);
  /**
   * All fields of the RoleEntity entity.
   */
  export const _allFields: Array<StringField<RoleEntity> | DateField<RoleEntity> | OneToOneLink<RoleEntity, User> | OneToOneLink<RoleEntity, FamilyEntity> | Link<RoleEntity, JobCodeMappingEntity> | OneToOneLink<RoleEntity, MdfEnumValue> | Link<RoleEntity, MdfLocalizedValue> | Link<RoleEntity, RoleCompetencyBehaviorMappingEntity> | Link<RoleEntity, RoleCompetencyMappingEntity> | Link<RoleEntity, RoleSkillMappingEntity> | Link<RoleEntity, RoleTalentPoolMappingEntity> | Link<RoleEntity, WfRequest>> = [
    RoleEntity.CREATED_BY,
    RoleEntity.CREATED_DATE_TIME,
    RoleEntity.CREATED_LOCALE,
    RoleEntity.EXTERNAL_CODE,
    RoleEntity.FAMILY,
    RoleEntity.LAST_MODIFIED_BY,
    RoleEntity.LAST_MODIFIED_DATE_TIME,
    RoleEntity.MDF_SYSTEM_RECORD_STATUS,
    RoleEntity.NAME_DE_DE,
    RoleEntity.NAME_DEFAULT_VALUE,
    RoleEntity.NAME_EN_DEBUG,
    RoleEntity.NAME_EN_GB,
    RoleEntity.NAME_EN_US,
    RoleEntity.NAME_ES_ES,
    RoleEntity.NAME_ES_MX,
    RoleEntity.NAME_FR_CA,
    RoleEntity.NAME_FR_FR,
    RoleEntity.NAME_IT_IT,
    RoleEntity.NAME_LOCALIZED,
    RoleEntity.NAME_NL_NL,
    RoleEntity.NAME_PT_BR,
    RoleEntity.NAME_ZH_CN,
    RoleEntity.STATUS,
    RoleEntity.SUB_MODULE,
    RoleEntity.CREATED_BY_NAV,
    RoleEntity.FAMILY_NAV,
    RoleEntity.JOB_CODE_MAPPINGS,
    RoleEntity.LAST_MODIFIED_BY_NAV,
    RoleEntity.MDF_SYSTEM_RECORD_STATUS_NAV,
    RoleEntity.NAME_TRANSLATION_TEXT_NAV,
    RoleEntity.ROLE_COMPETENCY_BEHAVIOR_MAPPINGS,
    RoleEntity.ROLE_COMPETENCY_MAPPINGS,
    RoleEntity.ROLE_SKILL_MAPPINGS,
    RoleEntity.ROLE_TALENT_POOL_MAPPINGS,
    RoleEntity.STATUS_NAV,
    RoleEntity.WF_REQUEST_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<RoleEntity> = new AllFields('*', RoleEntity);
  /**
   * All key fields of the RoleEntity entity.
   */
  export const _keyFields: Array<Selectable<RoleEntity>> = [RoleEntity.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property RoleEntity.
   */
  export const _keys: { [keys: string]: Selectable<RoleEntity> } = RoleEntity._keyFields.reduce((acc: { [keys: string]: Selectable<RoleEntity> }, field: Selectable<RoleEntity>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
