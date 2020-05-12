/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RoleCompetencyBehaviorMappingEntityRequestBuilder } from './RoleCompetencyBehaviorMappingEntityRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "RoleCompetencyBehaviorMappingEntity" of service "SFOData".
 */
export class RoleCompetencyBehaviorMappingEntity extends Entity implements RoleCompetencyBehaviorMappingEntityType {
  /**
   * Technical entity name for RoleCompetencyBehaviorMappingEntity.
   */
  static _entityName = 'RoleCompetencyBehaviorMappingEntity';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for RoleCompetencyBehaviorMappingEntity.
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
   * behaviorMappingEntity.
   * Maximum length: 128.
   * @nullable
   */
  behaviorMappingEntity?: string;
  /**
   * Competency GUID.
   * Maximum length: 128.
   * @nullable
   */
  competency?: string;
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
   * Rating.
   * Maximum length: 255.
   * @nullable
   */
  ratingDeDe?: string;
  /**
   * Rating.
   * Maximum length: 255.
   * @nullable
   */
  ratingDefaultValue?: string;
  /**
   * Rating.
   * Maximum length: 255.
   * @nullable
   */
  ratingEnDebug?: string;
  /**
   * Rating.
   * Maximum length: 255.
   * @nullable
   */
  ratingEnGb?: string;
  /**
   * Rating.
   * Maximum length: 255.
   * @nullable
   */
  ratingEnUs?: string;
  /**
   * Rating.
   * Maximum length: 255.
   * @nullable
   */
  ratingEsEs?: string;
  /**
   * Rating.
   * Maximum length: 255.
   * @nullable
   */
  ratingEsMx?: string;
  /**
   * Rating.
   * Maximum length: 255.
   * @nullable
   */
  ratingFrCa?: string;
  /**
   * Rating.
   * Maximum length: 255.
   * @nullable
   */
  ratingFrFr?: string;
  /**
   * Rating.
   * Maximum length: 255.
   * @nullable
   */
  ratingItIt?: string;
  /**
   * Rating.
   * Maximum length: 255.
   * @nullable
   */
  ratingLocalized?: string;
  /**
   * Rating.
   * Maximum length: 255.
   * @nullable
   */
  ratingNlNl?: string;
  /**
   * Rating.
   * Maximum length: 255.
   * @nullable
   */
  ratingPtBr?: string;
  /**
   * Rating.
   * Maximum length: 255.
   * @nullable
   */
  ratingZhCn?: string;
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
   * Weight.
   * Maximum length: 255.
   * @nullable
   */
  weightDeDe?: string;
  /**
   * Weight.
   * Maximum length: 255.
   * @nullable
   */
  weightDefaultValue?: string;
  /**
   * Weight.
   * Maximum length: 255.
   * @nullable
   */
  weightEnDebug?: string;
  /**
   * Weight.
   * Maximum length: 255.
   * @nullable
   */
  weightEnGb?: string;
  /**
   * Weight.
   * Maximum length: 255.
   * @nullable
   */
  weightEnUs?: string;
  /**
   * Weight.
   * Maximum length: 255.
   * @nullable
   */
  weightEsEs?: string;
  /**
   * Weight.
   * Maximum length: 255.
   * @nullable
   */
  weightEsMx?: string;
  /**
   * Weight.
   * Maximum length: 255.
   * @nullable
   */
  weightFrCa?: string;
  /**
   * Weight.
   * Maximum length: 255.
   * @nullable
   */
  weightFrFr?: string;
  /**
   * Weight.
   * Maximum length: 255.
   * @nullable
   */
  weightItIt?: string;
  /**
   * Weight.
   * Maximum length: 255.
   * @nullable
   */
  weightLocalized?: string;
  /**
   * Weight.
   * Maximum length: 255.
   * @nullable
   */
  weightNlNl?: string;
  /**
   * Weight.
   * Maximum length: 255.
   * @nullable
   */
  weightPtBr?: string;
  /**
   * Weight.
   * Maximum length: 255.
   * @nullable
   */
  weightZhCn?: string;
  /**
   * One-to-one navigation property to the [[BehaviorMappingEntity]] entity.
   */
  behaviorMappingEntityNav!: BehaviorMappingEntity;
  /**
   * One-to-one navigation property to the [[CompetencyEntity]] entity.
   */
  competencyNav!: CompetencyEntity;
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
  ratingTranslationTextNav!: MdfLocalizedValue[];
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  statusNav!: MdfEnumValue;
  /**
   * One-to-many navigation property to the [[MdfLocalizedValue]] entity.
   */
  weightTranslationTextNav!: MdfLocalizedValue[];

  /**
   * Returns an entity builder to construct instances `RoleCompetencyBehaviorMappingEntity`.
   * @returns A builder that constructs instances of entity type `RoleCompetencyBehaviorMappingEntity`.
   */
  static builder(): EntityBuilderType<RoleCompetencyBehaviorMappingEntity, RoleCompetencyBehaviorMappingEntityTypeForceMandatory> {
    return Entity.entityBuilder(RoleCompetencyBehaviorMappingEntity);
  }

  /**
   * Returns a request builder to construct requests for operations on the `RoleCompetencyBehaviorMappingEntity` entity type.
   * @returns A `RoleCompetencyBehaviorMappingEntity` request builder.
   */
  static requestBuilder(): RoleCompetencyBehaviorMappingEntityRequestBuilder {
    return new RoleCompetencyBehaviorMappingEntityRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `RoleCompetencyBehaviorMappingEntity`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `RoleCompetencyBehaviorMappingEntity`.
   */
  static customField(fieldName: string): CustomField<RoleCompetencyBehaviorMappingEntity> {
    return Entity.customFieldSelector(fieldName, RoleCompetencyBehaviorMappingEntity);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { BehaviorMappingEntity, BehaviorMappingEntityType } from './BehaviorMappingEntity';
import { CompetencyEntity, CompetencyEntityType } from './CompetencyEntity';
import { User, UserType } from './User';
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';
import { MdfLocalizedValue, MdfLocalizedValueType } from './MdfLocalizedValue';

export interface RoleCompetencyBehaviorMappingEntityType {
  roleEntityExternalCode: string;
  behaviorMappingEntity?: string;
  competency?: string;
  createdBy?: string;
  createdDateTime?: Moment;
  externalCode: string;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  mdfSystemRecordStatus?: string;
  ratingDeDe?: string;
  ratingDefaultValue?: string;
  ratingEnDebug?: string;
  ratingEnGb?: string;
  ratingEnUs?: string;
  ratingEsEs?: string;
  ratingEsMx?: string;
  ratingFrCa?: string;
  ratingFrFr?: string;
  ratingItIt?: string;
  ratingLocalized?: string;
  ratingNlNl?: string;
  ratingPtBr?: string;
  ratingZhCn?: string;
  status?: string;
  subModule?: string;
  weightDeDe?: string;
  weightDefaultValue?: string;
  weightEnDebug?: string;
  weightEnGb?: string;
  weightEnUs?: string;
  weightEsEs?: string;
  weightEsMx?: string;
  weightFrCa?: string;
  weightFrFr?: string;
  weightItIt?: string;
  weightLocalized?: string;
  weightNlNl?: string;
  weightPtBr?: string;
  weightZhCn?: string;
  behaviorMappingEntityNav: BehaviorMappingEntityType;
  competencyNav: CompetencyEntityType;
  createdByNav: UserType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  ratingTranslationTextNav: MdfLocalizedValueType[];
  statusNav: MdfEnumValueType;
  weightTranslationTextNav: MdfLocalizedValueType[];
}

export interface RoleCompetencyBehaviorMappingEntityTypeForceMandatory {
  roleEntityExternalCode: string;
  behaviorMappingEntity: string;
  competency: string;
  createdBy: string;
  createdDateTime: Moment;
  externalCode: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  mdfSystemRecordStatus: string;
  ratingDeDe: string;
  ratingDefaultValue: string;
  ratingEnDebug: string;
  ratingEnGb: string;
  ratingEnUs: string;
  ratingEsEs: string;
  ratingEsMx: string;
  ratingFrCa: string;
  ratingFrFr: string;
  ratingItIt: string;
  ratingLocalized: string;
  ratingNlNl: string;
  ratingPtBr: string;
  ratingZhCn: string;
  status: string;
  subModule: string;
  weightDeDe: string;
  weightDefaultValue: string;
  weightEnDebug: string;
  weightEnGb: string;
  weightEnUs: string;
  weightEsEs: string;
  weightEsMx: string;
  weightFrCa: string;
  weightFrFr: string;
  weightItIt: string;
  weightLocalized: string;
  weightNlNl: string;
  weightPtBr: string;
  weightZhCn: string;
  behaviorMappingEntityNav: BehaviorMappingEntityType;
  competencyNav: CompetencyEntityType;
  createdByNav: UserType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  ratingTranslationTextNav: MdfLocalizedValueType[];
  statusNav: MdfEnumValueType;
  weightTranslationTextNav: MdfLocalizedValueType[];
}

export namespace RoleCompetencyBehaviorMappingEntity {
  /**
   * Static representation of the [[roleEntityExternalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ROLE_ENTITY_EXTERNAL_CODE: StringField<RoleCompetencyBehaviorMappingEntity> = new StringField('RoleEntity_externalCode', RoleCompetencyBehaviorMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[behaviorMappingEntity]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BEHAVIOR_MAPPING_ENTITY: StringField<RoleCompetencyBehaviorMappingEntity> = new StringField('behaviorMappingEntity', RoleCompetencyBehaviorMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[competency]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMPETENCY: StringField<RoleCompetencyBehaviorMappingEntity> = new StringField('competency', RoleCompetencyBehaviorMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<RoleCompetencyBehaviorMappingEntity> = new StringField('createdBy', RoleCompetencyBehaviorMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<RoleCompetencyBehaviorMappingEntity> = new DateField('createdDateTime', RoleCompetencyBehaviorMappingEntity, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: StringField<RoleCompetencyBehaviorMappingEntity> = new StringField('externalCode', RoleCompetencyBehaviorMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<RoleCompetencyBehaviorMappingEntity> = new StringField('lastModifiedBy', RoleCompetencyBehaviorMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<RoleCompetencyBehaviorMappingEntity> = new DateField('lastModifiedDateTime', RoleCompetencyBehaviorMappingEntity, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<RoleCompetencyBehaviorMappingEntity> = new StringField('mdfSystemRecordStatus', RoleCompetencyBehaviorMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[ratingDeDe]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RATING_DE_DE: StringField<RoleCompetencyBehaviorMappingEntity> = new StringField('rating_de_DE', RoleCompetencyBehaviorMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[ratingDefaultValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RATING_DEFAULT_VALUE: StringField<RoleCompetencyBehaviorMappingEntity> = new StringField('rating_defaultValue', RoleCompetencyBehaviorMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[ratingEnDebug]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RATING_EN_DEBUG: StringField<RoleCompetencyBehaviorMappingEntity> = new StringField('rating_en_DEBUG', RoleCompetencyBehaviorMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[ratingEnGb]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RATING_EN_GB: StringField<RoleCompetencyBehaviorMappingEntity> = new StringField('rating_en_GB', RoleCompetencyBehaviorMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[ratingEnUs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RATING_EN_US: StringField<RoleCompetencyBehaviorMappingEntity> = new StringField('rating_en_US', RoleCompetencyBehaviorMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[ratingEsEs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RATING_ES_ES: StringField<RoleCompetencyBehaviorMappingEntity> = new StringField('rating_es_ES', RoleCompetencyBehaviorMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[ratingEsMx]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RATING_ES_MX: StringField<RoleCompetencyBehaviorMappingEntity> = new StringField('rating_es_MX', RoleCompetencyBehaviorMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[ratingFrCa]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RATING_FR_CA: StringField<RoleCompetencyBehaviorMappingEntity> = new StringField('rating_fr_CA', RoleCompetencyBehaviorMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[ratingFrFr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RATING_FR_FR: StringField<RoleCompetencyBehaviorMappingEntity> = new StringField('rating_fr_FR', RoleCompetencyBehaviorMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[ratingItIt]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RATING_IT_IT: StringField<RoleCompetencyBehaviorMappingEntity> = new StringField('rating_it_IT', RoleCompetencyBehaviorMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[ratingLocalized]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RATING_LOCALIZED: StringField<RoleCompetencyBehaviorMappingEntity> = new StringField('rating_localized', RoleCompetencyBehaviorMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[ratingNlNl]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RATING_NL_NL: StringField<RoleCompetencyBehaviorMappingEntity> = new StringField('rating_nl_NL', RoleCompetencyBehaviorMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[ratingPtBr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RATING_PT_BR: StringField<RoleCompetencyBehaviorMappingEntity> = new StringField('rating_pt_BR', RoleCompetencyBehaviorMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[ratingZhCn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RATING_ZH_CN: StringField<RoleCompetencyBehaviorMappingEntity> = new StringField('rating_zh_CN', RoleCompetencyBehaviorMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[status]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS: StringField<RoleCompetencyBehaviorMappingEntity> = new StringField('status', RoleCompetencyBehaviorMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[subModule]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUB_MODULE: StringField<RoleCompetencyBehaviorMappingEntity> = new StringField('subModule', RoleCompetencyBehaviorMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[weightDeDe]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WEIGHT_DE_DE: StringField<RoleCompetencyBehaviorMappingEntity> = new StringField('weight_de_DE', RoleCompetencyBehaviorMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[weightDefaultValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WEIGHT_DEFAULT_VALUE: StringField<RoleCompetencyBehaviorMappingEntity> = new StringField('weight_defaultValue', RoleCompetencyBehaviorMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[weightEnDebug]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WEIGHT_EN_DEBUG: StringField<RoleCompetencyBehaviorMappingEntity> = new StringField('weight_en_DEBUG', RoleCompetencyBehaviorMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[weightEnGb]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WEIGHT_EN_GB: StringField<RoleCompetencyBehaviorMappingEntity> = new StringField('weight_en_GB', RoleCompetencyBehaviorMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[weightEnUs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WEIGHT_EN_US: StringField<RoleCompetencyBehaviorMappingEntity> = new StringField('weight_en_US', RoleCompetencyBehaviorMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[weightEsEs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WEIGHT_ES_ES: StringField<RoleCompetencyBehaviorMappingEntity> = new StringField('weight_es_ES', RoleCompetencyBehaviorMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[weightEsMx]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WEIGHT_ES_MX: StringField<RoleCompetencyBehaviorMappingEntity> = new StringField('weight_es_MX', RoleCompetencyBehaviorMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[weightFrCa]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WEIGHT_FR_CA: StringField<RoleCompetencyBehaviorMappingEntity> = new StringField('weight_fr_CA', RoleCompetencyBehaviorMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[weightFrFr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WEIGHT_FR_FR: StringField<RoleCompetencyBehaviorMappingEntity> = new StringField('weight_fr_FR', RoleCompetencyBehaviorMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[weightItIt]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WEIGHT_IT_IT: StringField<RoleCompetencyBehaviorMappingEntity> = new StringField('weight_it_IT', RoleCompetencyBehaviorMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[weightLocalized]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WEIGHT_LOCALIZED: StringField<RoleCompetencyBehaviorMappingEntity> = new StringField('weight_localized', RoleCompetencyBehaviorMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[weightNlNl]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WEIGHT_NL_NL: StringField<RoleCompetencyBehaviorMappingEntity> = new StringField('weight_nl_NL', RoleCompetencyBehaviorMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[weightPtBr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WEIGHT_PT_BR: StringField<RoleCompetencyBehaviorMappingEntity> = new StringField('weight_pt_BR', RoleCompetencyBehaviorMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[weightZhCn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WEIGHT_ZH_CN: StringField<RoleCompetencyBehaviorMappingEntity> = new StringField('weight_zh_CN', RoleCompetencyBehaviorMappingEntity, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[behaviorMappingEntityNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BEHAVIOR_MAPPING_ENTITY_NAV: OneToOneLink<RoleCompetencyBehaviorMappingEntity, BehaviorMappingEntity> = new OneToOneLink('behaviorMappingEntityNav', RoleCompetencyBehaviorMappingEntity, BehaviorMappingEntity);
  /**
   * Static representation of the one-to-one navigation property [[competencyNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMPETENCY_NAV: OneToOneLink<RoleCompetencyBehaviorMappingEntity, CompetencyEntity> = new OneToOneLink('competencyNav', RoleCompetencyBehaviorMappingEntity, CompetencyEntity);
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<RoleCompetencyBehaviorMappingEntity, User> = new OneToOneLink('createdByNav', RoleCompetencyBehaviorMappingEntity, User);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<RoleCompetencyBehaviorMappingEntity, User> = new OneToOneLink('lastModifiedByNav', RoleCompetencyBehaviorMappingEntity, User);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<RoleCompetencyBehaviorMappingEntity, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', RoleCompetencyBehaviorMappingEntity, MdfEnumValue);
  /**
   * Static representation of the one-to-many navigation property [[ratingTranslationTextNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RATING_TRANSLATION_TEXT_NAV: Link<RoleCompetencyBehaviorMappingEntity, MdfLocalizedValue> = new Link('ratingTranslationTextNav', RoleCompetencyBehaviorMappingEntity, MdfLocalizedValue);
  /**
   * Static representation of the one-to-one navigation property [[statusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS_NAV: OneToOneLink<RoleCompetencyBehaviorMappingEntity, MdfEnumValue> = new OneToOneLink('statusNav', RoleCompetencyBehaviorMappingEntity, MdfEnumValue);
  /**
   * Static representation of the one-to-many navigation property [[weightTranslationTextNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WEIGHT_TRANSLATION_TEXT_NAV: Link<RoleCompetencyBehaviorMappingEntity, MdfLocalizedValue> = new Link('weightTranslationTextNav', RoleCompetencyBehaviorMappingEntity, MdfLocalizedValue);
  /**
   * All fields of the RoleCompetencyBehaviorMappingEntity entity.
   */
  export const _allFields: Array<StringField<RoleCompetencyBehaviorMappingEntity> | DateField<RoleCompetencyBehaviorMappingEntity> | OneToOneLink<RoleCompetencyBehaviorMappingEntity, BehaviorMappingEntity> | OneToOneLink<RoleCompetencyBehaviorMappingEntity, CompetencyEntity> | OneToOneLink<RoleCompetencyBehaviorMappingEntity, User> | OneToOneLink<RoleCompetencyBehaviorMappingEntity, MdfEnumValue> | Link<RoleCompetencyBehaviorMappingEntity, MdfLocalizedValue>> = [
    RoleCompetencyBehaviorMappingEntity.ROLE_ENTITY_EXTERNAL_CODE,
    RoleCompetencyBehaviorMappingEntity.BEHAVIOR_MAPPING_ENTITY,
    RoleCompetencyBehaviorMappingEntity.COMPETENCY,
    RoleCompetencyBehaviorMappingEntity.CREATED_BY,
    RoleCompetencyBehaviorMappingEntity.CREATED_DATE_TIME,
    RoleCompetencyBehaviorMappingEntity.EXTERNAL_CODE,
    RoleCompetencyBehaviorMappingEntity.LAST_MODIFIED_BY,
    RoleCompetencyBehaviorMappingEntity.LAST_MODIFIED_DATE_TIME,
    RoleCompetencyBehaviorMappingEntity.MDF_SYSTEM_RECORD_STATUS,
    RoleCompetencyBehaviorMappingEntity.RATING_DE_DE,
    RoleCompetencyBehaviorMappingEntity.RATING_DEFAULT_VALUE,
    RoleCompetencyBehaviorMappingEntity.RATING_EN_DEBUG,
    RoleCompetencyBehaviorMappingEntity.RATING_EN_GB,
    RoleCompetencyBehaviorMappingEntity.RATING_EN_US,
    RoleCompetencyBehaviorMappingEntity.RATING_ES_ES,
    RoleCompetencyBehaviorMappingEntity.RATING_ES_MX,
    RoleCompetencyBehaviorMappingEntity.RATING_FR_CA,
    RoleCompetencyBehaviorMappingEntity.RATING_FR_FR,
    RoleCompetencyBehaviorMappingEntity.RATING_IT_IT,
    RoleCompetencyBehaviorMappingEntity.RATING_LOCALIZED,
    RoleCompetencyBehaviorMappingEntity.RATING_NL_NL,
    RoleCompetencyBehaviorMappingEntity.RATING_PT_BR,
    RoleCompetencyBehaviorMappingEntity.RATING_ZH_CN,
    RoleCompetencyBehaviorMappingEntity.STATUS,
    RoleCompetencyBehaviorMappingEntity.SUB_MODULE,
    RoleCompetencyBehaviorMappingEntity.WEIGHT_DE_DE,
    RoleCompetencyBehaviorMappingEntity.WEIGHT_DEFAULT_VALUE,
    RoleCompetencyBehaviorMappingEntity.WEIGHT_EN_DEBUG,
    RoleCompetencyBehaviorMappingEntity.WEIGHT_EN_GB,
    RoleCompetencyBehaviorMappingEntity.WEIGHT_EN_US,
    RoleCompetencyBehaviorMappingEntity.WEIGHT_ES_ES,
    RoleCompetencyBehaviorMappingEntity.WEIGHT_ES_MX,
    RoleCompetencyBehaviorMappingEntity.WEIGHT_FR_CA,
    RoleCompetencyBehaviorMappingEntity.WEIGHT_FR_FR,
    RoleCompetencyBehaviorMappingEntity.WEIGHT_IT_IT,
    RoleCompetencyBehaviorMappingEntity.WEIGHT_LOCALIZED,
    RoleCompetencyBehaviorMappingEntity.WEIGHT_NL_NL,
    RoleCompetencyBehaviorMappingEntity.WEIGHT_PT_BR,
    RoleCompetencyBehaviorMappingEntity.WEIGHT_ZH_CN,
    RoleCompetencyBehaviorMappingEntity.BEHAVIOR_MAPPING_ENTITY_NAV,
    RoleCompetencyBehaviorMappingEntity.COMPETENCY_NAV,
    RoleCompetencyBehaviorMappingEntity.CREATED_BY_NAV,
    RoleCompetencyBehaviorMappingEntity.LAST_MODIFIED_BY_NAV,
    RoleCompetencyBehaviorMappingEntity.MDF_SYSTEM_RECORD_STATUS_NAV,
    RoleCompetencyBehaviorMappingEntity.RATING_TRANSLATION_TEXT_NAV,
    RoleCompetencyBehaviorMappingEntity.STATUS_NAV,
    RoleCompetencyBehaviorMappingEntity.WEIGHT_TRANSLATION_TEXT_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<RoleCompetencyBehaviorMappingEntity> = new AllFields('*', RoleCompetencyBehaviorMappingEntity);
  /**
   * All key fields of the RoleCompetencyBehaviorMappingEntity entity.
   */
  export const _keyFields: Array<Selectable<RoleCompetencyBehaviorMappingEntity>> = [RoleCompetencyBehaviorMappingEntity.ROLE_ENTITY_EXTERNAL_CODE, RoleCompetencyBehaviorMappingEntity.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property RoleCompetencyBehaviorMappingEntity.
   */
  export const _keys: { [keys: string]: Selectable<RoleCompetencyBehaviorMappingEntity> } = RoleCompetencyBehaviorMappingEntity._keyFields.reduce((acc: { [keys: string]: Selectable<RoleCompetencyBehaviorMappingEntity> }, field: Selectable<RoleCompetencyBehaviorMappingEntity>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
