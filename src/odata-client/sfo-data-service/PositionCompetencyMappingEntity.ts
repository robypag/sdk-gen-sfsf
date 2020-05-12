/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PositionCompetencyMappingEntityRequestBuilder } from './PositionCompetencyMappingEntityRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "PositionCompetencyMappingEntity" of service "SFOData".
 */
export class PositionCompetencyMappingEntity extends Entity implements PositionCompetencyMappingEntityType {
  /**
   * Technical entity name for PositionCompetencyMappingEntity.
   */
  static _entityName = 'PositionCompetencyMappingEntity';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for PositionCompetencyMappingEntity.
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
   * Competency.
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
   * Returns an entity builder to construct instances `PositionCompetencyMappingEntity`.
   * @returns A builder that constructs instances of entity type `PositionCompetencyMappingEntity`.
   */
  static builder(): EntityBuilderType<PositionCompetencyMappingEntity, PositionCompetencyMappingEntityTypeForceMandatory> {
    return Entity.entityBuilder(PositionCompetencyMappingEntity);
  }

  /**
   * Returns a request builder to construct requests for operations on the `PositionCompetencyMappingEntity` entity type.
   * @returns A `PositionCompetencyMappingEntity` request builder.
   */
  static requestBuilder(): PositionCompetencyMappingEntityRequestBuilder {
    return new PositionCompetencyMappingEntityRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `PositionCompetencyMappingEntity`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `PositionCompetencyMappingEntity`.
   */
  static customField(fieldName: string): CustomField<PositionCompetencyMappingEntity> {
    return Entity.customFieldSelector(fieldName, PositionCompetencyMappingEntity);
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

export interface PositionCompetencyMappingEntityType {
  positionEntityExternalCode: string;
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

export interface PositionCompetencyMappingEntityTypeForceMandatory {
  positionEntityExternalCode: string;
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

export namespace PositionCompetencyMappingEntity {
  /**
   * Static representation of the [[positionEntityExternalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const POSITION_ENTITY_EXTERNAL_CODE: StringField<PositionCompetencyMappingEntity> = new StringField('PositionEntity_externalCode', PositionCompetencyMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[competency]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMPETENCY: StringField<PositionCompetencyMappingEntity> = new StringField('competency', PositionCompetencyMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<PositionCompetencyMappingEntity> = new StringField('createdBy', PositionCompetencyMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<PositionCompetencyMappingEntity> = new DateField('createdDateTime', PositionCompetencyMappingEntity, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: StringField<PositionCompetencyMappingEntity> = new StringField('externalCode', PositionCompetencyMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<PositionCompetencyMappingEntity> = new StringField('lastModifiedBy', PositionCompetencyMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<PositionCompetencyMappingEntity> = new DateField('lastModifiedDateTime', PositionCompetencyMappingEntity, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<PositionCompetencyMappingEntity> = new StringField('mdfSystemRecordStatus', PositionCompetencyMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[ratingDeDe]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RATING_DE_DE: StringField<PositionCompetencyMappingEntity> = new StringField('rating_de_DE', PositionCompetencyMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[ratingDefaultValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RATING_DEFAULT_VALUE: StringField<PositionCompetencyMappingEntity> = new StringField('rating_defaultValue', PositionCompetencyMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[ratingEnDebug]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RATING_EN_DEBUG: StringField<PositionCompetencyMappingEntity> = new StringField('rating_en_DEBUG', PositionCompetencyMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[ratingEnGb]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RATING_EN_GB: StringField<PositionCompetencyMappingEntity> = new StringField('rating_en_GB', PositionCompetencyMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[ratingEnUs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RATING_EN_US: StringField<PositionCompetencyMappingEntity> = new StringField('rating_en_US', PositionCompetencyMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[ratingEsEs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RATING_ES_ES: StringField<PositionCompetencyMappingEntity> = new StringField('rating_es_ES', PositionCompetencyMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[ratingEsMx]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RATING_ES_MX: StringField<PositionCompetencyMappingEntity> = new StringField('rating_es_MX', PositionCompetencyMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[ratingFrCa]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RATING_FR_CA: StringField<PositionCompetencyMappingEntity> = new StringField('rating_fr_CA', PositionCompetencyMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[ratingFrFr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RATING_FR_FR: StringField<PositionCompetencyMappingEntity> = new StringField('rating_fr_FR', PositionCompetencyMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[ratingItIt]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RATING_IT_IT: StringField<PositionCompetencyMappingEntity> = new StringField('rating_it_IT', PositionCompetencyMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[ratingLocalized]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RATING_LOCALIZED: StringField<PositionCompetencyMappingEntity> = new StringField('rating_localized', PositionCompetencyMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[ratingNlNl]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RATING_NL_NL: StringField<PositionCompetencyMappingEntity> = new StringField('rating_nl_NL', PositionCompetencyMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[ratingPtBr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RATING_PT_BR: StringField<PositionCompetencyMappingEntity> = new StringField('rating_pt_BR', PositionCompetencyMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[ratingZhCn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RATING_ZH_CN: StringField<PositionCompetencyMappingEntity> = new StringField('rating_zh_CN', PositionCompetencyMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[status]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS: StringField<PositionCompetencyMappingEntity> = new StringField('status', PositionCompetencyMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[subModule]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUB_MODULE: StringField<PositionCompetencyMappingEntity> = new StringField('subModule', PositionCompetencyMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[weightDeDe]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WEIGHT_DE_DE: StringField<PositionCompetencyMappingEntity> = new StringField('weight_de_DE', PositionCompetencyMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[weightDefaultValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WEIGHT_DEFAULT_VALUE: StringField<PositionCompetencyMappingEntity> = new StringField('weight_defaultValue', PositionCompetencyMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[weightEnDebug]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WEIGHT_EN_DEBUG: StringField<PositionCompetencyMappingEntity> = new StringField('weight_en_DEBUG', PositionCompetencyMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[weightEnGb]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WEIGHT_EN_GB: StringField<PositionCompetencyMappingEntity> = new StringField('weight_en_GB', PositionCompetencyMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[weightEnUs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WEIGHT_EN_US: StringField<PositionCompetencyMappingEntity> = new StringField('weight_en_US', PositionCompetencyMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[weightEsEs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WEIGHT_ES_ES: StringField<PositionCompetencyMappingEntity> = new StringField('weight_es_ES', PositionCompetencyMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[weightEsMx]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WEIGHT_ES_MX: StringField<PositionCompetencyMappingEntity> = new StringField('weight_es_MX', PositionCompetencyMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[weightFrCa]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WEIGHT_FR_CA: StringField<PositionCompetencyMappingEntity> = new StringField('weight_fr_CA', PositionCompetencyMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[weightFrFr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WEIGHT_FR_FR: StringField<PositionCompetencyMappingEntity> = new StringField('weight_fr_FR', PositionCompetencyMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[weightItIt]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WEIGHT_IT_IT: StringField<PositionCompetencyMappingEntity> = new StringField('weight_it_IT', PositionCompetencyMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[weightLocalized]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WEIGHT_LOCALIZED: StringField<PositionCompetencyMappingEntity> = new StringField('weight_localized', PositionCompetencyMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[weightNlNl]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WEIGHT_NL_NL: StringField<PositionCompetencyMappingEntity> = new StringField('weight_nl_NL', PositionCompetencyMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[weightPtBr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WEIGHT_PT_BR: StringField<PositionCompetencyMappingEntity> = new StringField('weight_pt_BR', PositionCompetencyMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[weightZhCn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WEIGHT_ZH_CN: StringField<PositionCompetencyMappingEntity> = new StringField('weight_zh_CN', PositionCompetencyMappingEntity, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[competencyNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMPETENCY_NAV: OneToOneLink<PositionCompetencyMappingEntity, CompetencyEntity> = new OneToOneLink('competencyNav', PositionCompetencyMappingEntity, CompetencyEntity);
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<PositionCompetencyMappingEntity, User> = new OneToOneLink('createdByNav', PositionCompetencyMappingEntity, User);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<PositionCompetencyMappingEntity, User> = new OneToOneLink('lastModifiedByNav', PositionCompetencyMappingEntity, User);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<PositionCompetencyMappingEntity, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', PositionCompetencyMappingEntity, MdfEnumValue);
  /**
   * Static representation of the one-to-many navigation property [[ratingTranslationTextNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RATING_TRANSLATION_TEXT_NAV: Link<PositionCompetencyMappingEntity, MdfLocalizedValue> = new Link('ratingTranslationTextNav', PositionCompetencyMappingEntity, MdfLocalizedValue);
  /**
   * Static representation of the one-to-one navigation property [[statusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS_NAV: OneToOneLink<PositionCompetencyMappingEntity, MdfEnumValue> = new OneToOneLink('statusNav', PositionCompetencyMappingEntity, MdfEnumValue);
  /**
   * Static representation of the one-to-many navigation property [[weightTranslationTextNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WEIGHT_TRANSLATION_TEXT_NAV: Link<PositionCompetencyMappingEntity, MdfLocalizedValue> = new Link('weightTranslationTextNav', PositionCompetencyMappingEntity, MdfLocalizedValue);
  /**
   * All fields of the PositionCompetencyMappingEntity entity.
   */
  export const _allFields: Array<StringField<PositionCompetencyMappingEntity> | DateField<PositionCompetencyMappingEntity> | OneToOneLink<PositionCompetencyMappingEntity, CompetencyEntity> | OneToOneLink<PositionCompetencyMappingEntity, User> | OneToOneLink<PositionCompetencyMappingEntity, MdfEnumValue> | Link<PositionCompetencyMappingEntity, MdfLocalizedValue>> = [
    PositionCompetencyMappingEntity.POSITION_ENTITY_EXTERNAL_CODE,
    PositionCompetencyMappingEntity.COMPETENCY,
    PositionCompetencyMappingEntity.CREATED_BY,
    PositionCompetencyMappingEntity.CREATED_DATE_TIME,
    PositionCompetencyMappingEntity.EXTERNAL_CODE,
    PositionCompetencyMappingEntity.LAST_MODIFIED_BY,
    PositionCompetencyMappingEntity.LAST_MODIFIED_DATE_TIME,
    PositionCompetencyMappingEntity.MDF_SYSTEM_RECORD_STATUS,
    PositionCompetencyMappingEntity.RATING_DE_DE,
    PositionCompetencyMappingEntity.RATING_DEFAULT_VALUE,
    PositionCompetencyMappingEntity.RATING_EN_DEBUG,
    PositionCompetencyMappingEntity.RATING_EN_GB,
    PositionCompetencyMappingEntity.RATING_EN_US,
    PositionCompetencyMappingEntity.RATING_ES_ES,
    PositionCompetencyMappingEntity.RATING_ES_MX,
    PositionCompetencyMappingEntity.RATING_FR_CA,
    PositionCompetencyMappingEntity.RATING_FR_FR,
    PositionCompetencyMappingEntity.RATING_IT_IT,
    PositionCompetencyMappingEntity.RATING_LOCALIZED,
    PositionCompetencyMappingEntity.RATING_NL_NL,
    PositionCompetencyMappingEntity.RATING_PT_BR,
    PositionCompetencyMappingEntity.RATING_ZH_CN,
    PositionCompetencyMappingEntity.STATUS,
    PositionCompetencyMappingEntity.SUB_MODULE,
    PositionCompetencyMappingEntity.WEIGHT_DE_DE,
    PositionCompetencyMappingEntity.WEIGHT_DEFAULT_VALUE,
    PositionCompetencyMappingEntity.WEIGHT_EN_DEBUG,
    PositionCompetencyMappingEntity.WEIGHT_EN_GB,
    PositionCompetencyMappingEntity.WEIGHT_EN_US,
    PositionCompetencyMappingEntity.WEIGHT_ES_ES,
    PositionCompetencyMappingEntity.WEIGHT_ES_MX,
    PositionCompetencyMappingEntity.WEIGHT_FR_CA,
    PositionCompetencyMappingEntity.WEIGHT_FR_FR,
    PositionCompetencyMappingEntity.WEIGHT_IT_IT,
    PositionCompetencyMappingEntity.WEIGHT_LOCALIZED,
    PositionCompetencyMappingEntity.WEIGHT_NL_NL,
    PositionCompetencyMappingEntity.WEIGHT_PT_BR,
    PositionCompetencyMappingEntity.WEIGHT_ZH_CN,
    PositionCompetencyMappingEntity.COMPETENCY_NAV,
    PositionCompetencyMappingEntity.CREATED_BY_NAV,
    PositionCompetencyMappingEntity.LAST_MODIFIED_BY_NAV,
    PositionCompetencyMappingEntity.MDF_SYSTEM_RECORD_STATUS_NAV,
    PositionCompetencyMappingEntity.RATING_TRANSLATION_TEXT_NAV,
    PositionCompetencyMappingEntity.STATUS_NAV,
    PositionCompetencyMappingEntity.WEIGHT_TRANSLATION_TEXT_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<PositionCompetencyMappingEntity> = new AllFields('*', PositionCompetencyMappingEntity);
  /**
   * All key fields of the PositionCompetencyMappingEntity entity.
   */
  export const _keyFields: Array<Selectable<PositionCompetencyMappingEntity>> = [PositionCompetencyMappingEntity.POSITION_ENTITY_EXTERNAL_CODE, PositionCompetencyMappingEntity.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property PositionCompetencyMappingEntity.
   */
  export const _keys: { [keys: string]: Selectable<PositionCompetencyMappingEntity> } = PositionCompetencyMappingEntity._keyFields.reduce((acc: { [keys: string]: Selectable<PositionCompetencyMappingEntity> }, field: Selectable<PositionCompetencyMappingEntity>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
