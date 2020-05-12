/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RoleCompetencyMappingEntityRequestBuilder } from './RoleCompetencyMappingEntityRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "RoleCompetencyMappingEntity" of service "SFOData".
 */
export class RoleCompetencyMappingEntity extends Entity implements RoleCompetencyMappingEntityType {
  /**
   * Technical entity name for RoleCompetencyMappingEntity.
   */
  static _entityName = 'RoleCompetencyMappingEntity';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for RoleCompetencyMappingEntity.
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
   * Returns an entity builder to construct instances `RoleCompetencyMappingEntity`.
   * @returns A builder that constructs instances of entity type `RoleCompetencyMappingEntity`.
   */
  static builder(): EntityBuilderType<RoleCompetencyMappingEntity, RoleCompetencyMappingEntityTypeForceMandatory> {
    return Entity.entityBuilder(RoleCompetencyMappingEntity);
  }

  /**
   * Returns a request builder to construct requests for operations on the `RoleCompetencyMappingEntity` entity type.
   * @returns A `RoleCompetencyMappingEntity` request builder.
   */
  static requestBuilder(): RoleCompetencyMappingEntityRequestBuilder {
    return new RoleCompetencyMappingEntityRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `RoleCompetencyMappingEntity`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `RoleCompetencyMappingEntity`.
   */
  static customField(fieldName: string): CustomField<RoleCompetencyMappingEntity> {
    return Entity.customFieldSelector(fieldName, RoleCompetencyMappingEntity);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { CompetencyEntity, CompetencyEntityType } from './CompetencyEntity';
import { User, UserType } from './User';
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';
import { MdfLocalizedValue, MdfLocalizedValueType } from './MdfLocalizedValue';

export interface RoleCompetencyMappingEntityType {
  roleEntityExternalCode: string;
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
  competencyNav: CompetencyEntityType;
  createdByNav: UserType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  ratingTranslationTextNav: MdfLocalizedValueType[];
  statusNav: MdfEnumValueType;
  weightTranslationTextNav: MdfLocalizedValueType[];
}

export interface RoleCompetencyMappingEntityTypeForceMandatory {
  roleEntityExternalCode: string;
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
  competencyNav: CompetencyEntityType;
  createdByNav: UserType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  ratingTranslationTextNav: MdfLocalizedValueType[];
  statusNav: MdfEnumValueType;
  weightTranslationTextNav: MdfLocalizedValueType[];
}

export namespace RoleCompetencyMappingEntity {
  /**
   * Static representation of the [[roleEntityExternalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ROLE_ENTITY_EXTERNAL_CODE: StringField<RoleCompetencyMappingEntity> = new StringField('RoleEntity_externalCode', RoleCompetencyMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[competency]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMPETENCY: StringField<RoleCompetencyMappingEntity> = new StringField('competency', RoleCompetencyMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<RoleCompetencyMappingEntity> = new StringField('createdBy', RoleCompetencyMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<RoleCompetencyMappingEntity> = new DateField('createdDateTime', RoleCompetencyMappingEntity, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: StringField<RoleCompetencyMappingEntity> = new StringField('externalCode', RoleCompetencyMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<RoleCompetencyMappingEntity> = new StringField('lastModifiedBy', RoleCompetencyMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<RoleCompetencyMappingEntity> = new DateField('lastModifiedDateTime', RoleCompetencyMappingEntity, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<RoleCompetencyMappingEntity> = new StringField('mdfSystemRecordStatus', RoleCompetencyMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[ratingDeDe]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RATING_DE_DE: StringField<RoleCompetencyMappingEntity> = new StringField('rating_de_DE', RoleCompetencyMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[ratingDefaultValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RATING_DEFAULT_VALUE: StringField<RoleCompetencyMappingEntity> = new StringField('rating_defaultValue', RoleCompetencyMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[ratingEnDebug]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RATING_EN_DEBUG: StringField<RoleCompetencyMappingEntity> = new StringField('rating_en_DEBUG', RoleCompetencyMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[ratingEnGb]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RATING_EN_GB: StringField<RoleCompetencyMappingEntity> = new StringField('rating_en_GB', RoleCompetencyMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[ratingEnUs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RATING_EN_US: StringField<RoleCompetencyMappingEntity> = new StringField('rating_en_US', RoleCompetencyMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[ratingEsEs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RATING_ES_ES: StringField<RoleCompetencyMappingEntity> = new StringField('rating_es_ES', RoleCompetencyMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[ratingEsMx]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RATING_ES_MX: StringField<RoleCompetencyMappingEntity> = new StringField('rating_es_MX', RoleCompetencyMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[ratingFrCa]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RATING_FR_CA: StringField<RoleCompetencyMappingEntity> = new StringField('rating_fr_CA', RoleCompetencyMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[ratingFrFr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RATING_FR_FR: StringField<RoleCompetencyMappingEntity> = new StringField('rating_fr_FR', RoleCompetencyMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[ratingItIt]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RATING_IT_IT: StringField<RoleCompetencyMappingEntity> = new StringField('rating_it_IT', RoleCompetencyMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[ratingLocalized]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RATING_LOCALIZED: StringField<RoleCompetencyMappingEntity> = new StringField('rating_localized', RoleCompetencyMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[ratingNlNl]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RATING_NL_NL: StringField<RoleCompetencyMappingEntity> = new StringField('rating_nl_NL', RoleCompetencyMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[ratingPtBr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RATING_PT_BR: StringField<RoleCompetencyMappingEntity> = new StringField('rating_pt_BR', RoleCompetencyMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[ratingZhCn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RATING_ZH_CN: StringField<RoleCompetencyMappingEntity> = new StringField('rating_zh_CN', RoleCompetencyMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[status]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS: StringField<RoleCompetencyMappingEntity> = new StringField('status', RoleCompetencyMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[subModule]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUB_MODULE: StringField<RoleCompetencyMappingEntity> = new StringField('subModule', RoleCompetencyMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[weightDeDe]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WEIGHT_DE_DE: StringField<RoleCompetencyMappingEntity> = new StringField('weight_de_DE', RoleCompetencyMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[weightDefaultValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WEIGHT_DEFAULT_VALUE: StringField<RoleCompetencyMappingEntity> = new StringField('weight_defaultValue', RoleCompetencyMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[weightEnDebug]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WEIGHT_EN_DEBUG: StringField<RoleCompetencyMappingEntity> = new StringField('weight_en_DEBUG', RoleCompetencyMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[weightEnGb]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WEIGHT_EN_GB: StringField<RoleCompetencyMappingEntity> = new StringField('weight_en_GB', RoleCompetencyMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[weightEnUs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WEIGHT_EN_US: StringField<RoleCompetencyMappingEntity> = new StringField('weight_en_US', RoleCompetencyMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[weightEsEs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WEIGHT_ES_ES: StringField<RoleCompetencyMappingEntity> = new StringField('weight_es_ES', RoleCompetencyMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[weightEsMx]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WEIGHT_ES_MX: StringField<RoleCompetencyMappingEntity> = new StringField('weight_es_MX', RoleCompetencyMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[weightFrCa]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WEIGHT_FR_CA: StringField<RoleCompetencyMappingEntity> = new StringField('weight_fr_CA', RoleCompetencyMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[weightFrFr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WEIGHT_FR_FR: StringField<RoleCompetencyMappingEntity> = new StringField('weight_fr_FR', RoleCompetencyMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[weightItIt]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WEIGHT_IT_IT: StringField<RoleCompetencyMappingEntity> = new StringField('weight_it_IT', RoleCompetencyMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[weightLocalized]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WEIGHT_LOCALIZED: StringField<RoleCompetencyMappingEntity> = new StringField('weight_localized', RoleCompetencyMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[weightNlNl]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WEIGHT_NL_NL: StringField<RoleCompetencyMappingEntity> = new StringField('weight_nl_NL', RoleCompetencyMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[weightPtBr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WEIGHT_PT_BR: StringField<RoleCompetencyMappingEntity> = new StringField('weight_pt_BR', RoleCompetencyMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[weightZhCn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WEIGHT_ZH_CN: StringField<RoleCompetencyMappingEntity> = new StringField('weight_zh_CN', RoleCompetencyMappingEntity, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[competencyNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMPETENCY_NAV: OneToOneLink<RoleCompetencyMappingEntity, CompetencyEntity> = new OneToOneLink('competencyNav', RoleCompetencyMappingEntity, CompetencyEntity);
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<RoleCompetencyMappingEntity, User> = new OneToOneLink('createdByNav', RoleCompetencyMappingEntity, User);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<RoleCompetencyMappingEntity, User> = new OneToOneLink('lastModifiedByNav', RoleCompetencyMappingEntity, User);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<RoleCompetencyMappingEntity, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', RoleCompetencyMappingEntity, MdfEnumValue);
  /**
   * Static representation of the one-to-many navigation property [[ratingTranslationTextNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RATING_TRANSLATION_TEXT_NAV: Link<RoleCompetencyMappingEntity, MdfLocalizedValue> = new Link('ratingTranslationTextNav', RoleCompetencyMappingEntity, MdfLocalizedValue);
  /**
   * Static representation of the one-to-one navigation property [[statusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS_NAV: OneToOneLink<RoleCompetencyMappingEntity, MdfEnumValue> = new OneToOneLink('statusNav', RoleCompetencyMappingEntity, MdfEnumValue);
  /**
   * Static representation of the one-to-many navigation property [[weightTranslationTextNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WEIGHT_TRANSLATION_TEXT_NAV: Link<RoleCompetencyMappingEntity, MdfLocalizedValue> = new Link('weightTranslationTextNav', RoleCompetencyMappingEntity, MdfLocalizedValue);
  /**
   * All fields of the RoleCompetencyMappingEntity entity.
   */
  export const _allFields: Array<StringField<RoleCompetencyMappingEntity> | DateField<RoleCompetencyMappingEntity> | OneToOneLink<RoleCompetencyMappingEntity, CompetencyEntity> | OneToOneLink<RoleCompetencyMappingEntity, User> | OneToOneLink<RoleCompetencyMappingEntity, MdfEnumValue> | Link<RoleCompetencyMappingEntity, MdfLocalizedValue>> = [
    RoleCompetencyMappingEntity.ROLE_ENTITY_EXTERNAL_CODE,
    RoleCompetencyMappingEntity.COMPETENCY,
    RoleCompetencyMappingEntity.CREATED_BY,
    RoleCompetencyMappingEntity.CREATED_DATE_TIME,
    RoleCompetencyMappingEntity.EXTERNAL_CODE,
    RoleCompetencyMappingEntity.LAST_MODIFIED_BY,
    RoleCompetencyMappingEntity.LAST_MODIFIED_DATE_TIME,
    RoleCompetencyMappingEntity.MDF_SYSTEM_RECORD_STATUS,
    RoleCompetencyMappingEntity.RATING_DE_DE,
    RoleCompetencyMappingEntity.RATING_DEFAULT_VALUE,
    RoleCompetencyMappingEntity.RATING_EN_DEBUG,
    RoleCompetencyMappingEntity.RATING_EN_GB,
    RoleCompetencyMappingEntity.RATING_EN_US,
    RoleCompetencyMappingEntity.RATING_ES_ES,
    RoleCompetencyMappingEntity.RATING_ES_MX,
    RoleCompetencyMappingEntity.RATING_FR_CA,
    RoleCompetencyMappingEntity.RATING_FR_FR,
    RoleCompetencyMappingEntity.RATING_IT_IT,
    RoleCompetencyMappingEntity.RATING_LOCALIZED,
    RoleCompetencyMappingEntity.RATING_NL_NL,
    RoleCompetencyMappingEntity.RATING_PT_BR,
    RoleCompetencyMappingEntity.RATING_ZH_CN,
    RoleCompetencyMappingEntity.STATUS,
    RoleCompetencyMappingEntity.SUB_MODULE,
    RoleCompetencyMappingEntity.WEIGHT_DE_DE,
    RoleCompetencyMappingEntity.WEIGHT_DEFAULT_VALUE,
    RoleCompetencyMappingEntity.WEIGHT_EN_DEBUG,
    RoleCompetencyMappingEntity.WEIGHT_EN_GB,
    RoleCompetencyMappingEntity.WEIGHT_EN_US,
    RoleCompetencyMappingEntity.WEIGHT_ES_ES,
    RoleCompetencyMappingEntity.WEIGHT_ES_MX,
    RoleCompetencyMappingEntity.WEIGHT_FR_CA,
    RoleCompetencyMappingEntity.WEIGHT_FR_FR,
    RoleCompetencyMappingEntity.WEIGHT_IT_IT,
    RoleCompetencyMappingEntity.WEIGHT_LOCALIZED,
    RoleCompetencyMappingEntity.WEIGHT_NL_NL,
    RoleCompetencyMappingEntity.WEIGHT_PT_BR,
    RoleCompetencyMappingEntity.WEIGHT_ZH_CN,
    RoleCompetencyMappingEntity.COMPETENCY_NAV,
    RoleCompetencyMappingEntity.CREATED_BY_NAV,
    RoleCompetencyMappingEntity.LAST_MODIFIED_BY_NAV,
    RoleCompetencyMappingEntity.MDF_SYSTEM_RECORD_STATUS_NAV,
    RoleCompetencyMappingEntity.RATING_TRANSLATION_TEXT_NAV,
    RoleCompetencyMappingEntity.STATUS_NAV,
    RoleCompetencyMappingEntity.WEIGHT_TRANSLATION_TEXT_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<RoleCompetencyMappingEntity> = new AllFields('*', RoleCompetencyMappingEntity);
  /**
   * All key fields of the RoleCompetencyMappingEntity entity.
   */
  export const _keyFields: Array<Selectable<RoleCompetencyMappingEntity>> = [RoleCompetencyMappingEntity.ROLE_ENTITY_EXTERNAL_CODE, RoleCompetencyMappingEntity.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property RoleCompetencyMappingEntity.
   */
  export const _keys: { [keys: string]: Selectable<RoleCompetencyMappingEntity> } = RoleCompetencyMappingEntity._keyFields.reduce((acc: { [keys: string]: Selectable<RoleCompetencyMappingEntity> }, field: Selectable<RoleCompetencyMappingEntity>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
