/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BehaviorMappingEntityRequestBuilder } from './BehaviorMappingEntityRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "BehaviorMappingEntity" of service "SFOData".
 */
export class BehaviorMappingEntity extends Entity implements BehaviorMappingEntityType {
  /**
   * Technical entity name for BehaviorMappingEntity.
   */
  static _entityName = 'BehaviorMappingEntity';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for BehaviorMappingEntity.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Competency_GUID.
   * Maximum length: 128.
   */
  competencyEntityExternalCode!: string;
  /**
   * Behavior Name.
   * Maximum length: 2048.
   * @nullable
   */
  behaviorNameDeDe?: string;
  /**
   * Behavior Name.
   * Maximum length: 2048.
   * @nullable
   */
  behaviorNameDefaultValue?: string;
  /**
   * Behavior Name.
   * Maximum length: 2048.
   * @nullable
   */
  behaviorNameEnDebug?: string;
  /**
   * Behavior Name.
   * Maximum length: 2048.
   * @nullable
   */
  behaviorNameEnGb?: string;
  /**
   * Behavior Name.
   * Maximum length: 2048.
   * @nullable
   */
  behaviorNameEnUs?: string;
  /**
   * Behavior Name.
   * Maximum length: 2048.
   * @nullable
   */
  behaviorNameEsEs?: string;
  /**
   * Behavior Name.
   * Maximum length: 2048.
   * @nullable
   */
  behaviorNameEsMx?: string;
  /**
   * Behavior Name.
   * Maximum length: 2048.
   * @nullable
   */
  behaviorNameFrCa?: string;
  /**
   * Behavior Name.
   * Maximum length: 2048.
   * @nullable
   */
  behaviorNameFrFr?: string;
  /**
   * Behavior Name.
   * Maximum length: 2048.
   * @nullable
   */
  behaviorNameItIt?: string;
  /**
   * Behavior Name.
   * Maximum length: 2048.
   * @nullable
   */
  behaviorNameLocalized?: string;
  /**
   * Behavior Name.
   * Maximum length: 2048.
   * @nullable
   */
  behaviorNameNlNl?: string;
  /**
   * Behavior Name.
   * Maximum length: 2048.
   * @nullable
   */
  behaviorNamePtBr?: string;
  /**
   * Behavior Name.
   * Maximum length: 2048.
   * @nullable
   */
  behaviorNameZhCn?: string;
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
   * One-to-many navigation property to the [[MdfLocalizedValue]] entity.
   */
  behaviorNameTranslationTextNav!: MdfLocalizedValue[];
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
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  mdfSystemRecordStatusNav!: MdfEnumValue;
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  statusNav!: MdfEnumValue;

  /**
   * Returns an entity builder to construct instances `BehaviorMappingEntity`.
   * @returns A builder that constructs instances of entity type `BehaviorMappingEntity`.
   */
  static builder(): EntityBuilderType<BehaviorMappingEntity, BehaviorMappingEntityTypeForceMandatory> {
    return Entity.entityBuilder(BehaviorMappingEntity);
  }

  /**
   * Returns a request builder to construct requests for operations on the `BehaviorMappingEntity` entity type.
   * @returns A `BehaviorMappingEntity` request builder.
   */
  static requestBuilder(): BehaviorMappingEntityRequestBuilder {
    return new BehaviorMappingEntityRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `BehaviorMappingEntity`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `BehaviorMappingEntity`.
   */
  static customField(fieldName: string): CustomField<BehaviorMappingEntity> {
    return Entity.customFieldSelector(fieldName, BehaviorMappingEntity);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { MdfLocalizedValue, MdfLocalizedValueType } from './MdfLocalizedValue';
import { User, UserType } from './User';
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';

export interface BehaviorMappingEntityType {
  competencyEntityExternalCode: string;
  behaviorNameDeDe?: string;
  behaviorNameDefaultValue?: string;
  behaviorNameEnDebug?: string;
  behaviorNameEnGb?: string;
  behaviorNameEnUs?: string;
  behaviorNameEsEs?: string;
  behaviorNameEsMx?: string;
  behaviorNameFrCa?: string;
  behaviorNameFrFr?: string;
  behaviorNameItIt?: string;
  behaviorNameLocalized?: string;
  behaviorNameNlNl?: string;
  behaviorNamePtBr?: string;
  behaviorNameZhCn?: string;
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
  status?: string;
  subModule?: string;
  behaviorNameTranslationTextNav: MdfLocalizedValueType[];
  createdByNav: UserType;
  descriptionTranslationTextNav: MdfLocalizedValueType[];
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  statusNav: MdfEnumValueType;
}

export interface BehaviorMappingEntityTypeForceMandatory {
  competencyEntityExternalCode: string;
  behaviorNameDeDe: string;
  behaviorNameDefaultValue: string;
  behaviorNameEnDebug: string;
  behaviorNameEnGb: string;
  behaviorNameEnUs: string;
  behaviorNameEsEs: string;
  behaviorNameEsMx: string;
  behaviorNameFrCa: string;
  behaviorNameFrFr: string;
  behaviorNameItIt: string;
  behaviorNameLocalized: string;
  behaviorNameNlNl: string;
  behaviorNamePtBr: string;
  behaviorNameZhCn: string;
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
  status: string;
  subModule: string;
  behaviorNameTranslationTextNav: MdfLocalizedValueType[];
  createdByNav: UserType;
  descriptionTranslationTextNav: MdfLocalizedValueType[];
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  statusNav: MdfEnumValueType;
}

export namespace BehaviorMappingEntity {
  /**
   * Static representation of the [[competencyEntityExternalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMPETENCY_ENTITY_EXTERNAL_CODE: StringField<BehaviorMappingEntity> = new StringField('CompetencyEntity_externalCode', BehaviorMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[behaviorNameDeDe]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BEHAVIOR_NAME_DE_DE: StringField<BehaviorMappingEntity> = new StringField('behaviorName_de_DE', BehaviorMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[behaviorNameDefaultValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BEHAVIOR_NAME_DEFAULT_VALUE: StringField<BehaviorMappingEntity> = new StringField('behaviorName_defaultValue', BehaviorMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[behaviorNameEnDebug]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BEHAVIOR_NAME_EN_DEBUG: StringField<BehaviorMappingEntity> = new StringField('behaviorName_en_DEBUG', BehaviorMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[behaviorNameEnGb]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BEHAVIOR_NAME_EN_GB: StringField<BehaviorMappingEntity> = new StringField('behaviorName_en_GB', BehaviorMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[behaviorNameEnUs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BEHAVIOR_NAME_EN_US: StringField<BehaviorMappingEntity> = new StringField('behaviorName_en_US', BehaviorMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[behaviorNameEsEs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BEHAVIOR_NAME_ES_ES: StringField<BehaviorMappingEntity> = new StringField('behaviorName_es_ES', BehaviorMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[behaviorNameEsMx]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BEHAVIOR_NAME_ES_MX: StringField<BehaviorMappingEntity> = new StringField('behaviorName_es_MX', BehaviorMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[behaviorNameFrCa]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BEHAVIOR_NAME_FR_CA: StringField<BehaviorMappingEntity> = new StringField('behaviorName_fr_CA', BehaviorMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[behaviorNameFrFr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BEHAVIOR_NAME_FR_FR: StringField<BehaviorMappingEntity> = new StringField('behaviorName_fr_FR', BehaviorMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[behaviorNameItIt]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BEHAVIOR_NAME_IT_IT: StringField<BehaviorMappingEntity> = new StringField('behaviorName_it_IT', BehaviorMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[behaviorNameLocalized]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BEHAVIOR_NAME_LOCALIZED: StringField<BehaviorMappingEntity> = new StringField('behaviorName_localized', BehaviorMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[behaviorNameNlNl]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BEHAVIOR_NAME_NL_NL: StringField<BehaviorMappingEntity> = new StringField('behaviorName_nl_NL', BehaviorMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[behaviorNamePtBr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BEHAVIOR_NAME_PT_BR: StringField<BehaviorMappingEntity> = new StringField('behaviorName_pt_BR', BehaviorMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[behaviorNameZhCn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BEHAVIOR_NAME_ZH_CN: StringField<BehaviorMappingEntity> = new StringField('behaviorName_zh_CN', BehaviorMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<BehaviorMappingEntity> = new StringField('createdBy', BehaviorMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<BehaviorMappingEntity> = new DateField('createdDateTime', BehaviorMappingEntity, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[descriptionDeDe]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_DE_DE: StringField<BehaviorMappingEntity> = new StringField('description_de_DE', BehaviorMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[descriptionDefaultValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_DEFAULT_VALUE: StringField<BehaviorMappingEntity> = new StringField('description_defaultValue', BehaviorMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[descriptionEnDebug]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_EN_DEBUG: StringField<BehaviorMappingEntity> = new StringField('description_en_DEBUG', BehaviorMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[descriptionEnGb]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_EN_GB: StringField<BehaviorMappingEntity> = new StringField('description_en_GB', BehaviorMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[descriptionEnUs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_EN_US: StringField<BehaviorMappingEntity> = new StringField('description_en_US', BehaviorMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[descriptionEsEs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_ES_ES: StringField<BehaviorMappingEntity> = new StringField('description_es_ES', BehaviorMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[descriptionEsMx]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_ES_MX: StringField<BehaviorMappingEntity> = new StringField('description_es_MX', BehaviorMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[descriptionFrCa]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_FR_CA: StringField<BehaviorMappingEntity> = new StringField('description_fr_CA', BehaviorMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[descriptionFrFr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_FR_FR: StringField<BehaviorMappingEntity> = new StringField('description_fr_FR', BehaviorMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[descriptionItIt]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_IT_IT: StringField<BehaviorMappingEntity> = new StringField('description_it_IT', BehaviorMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[descriptionLocalized]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_LOCALIZED: StringField<BehaviorMappingEntity> = new StringField('description_localized', BehaviorMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[descriptionNlNl]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_NL_NL: StringField<BehaviorMappingEntity> = new StringField('description_nl_NL', BehaviorMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[descriptionPtBr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_PT_BR: StringField<BehaviorMappingEntity> = new StringField('description_pt_BR', BehaviorMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[descriptionZhCn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_ZH_CN: StringField<BehaviorMappingEntity> = new StringField('description_zh_CN', BehaviorMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: StringField<BehaviorMappingEntity> = new StringField('externalCode', BehaviorMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<BehaviorMappingEntity> = new StringField('lastModifiedBy', BehaviorMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<BehaviorMappingEntity> = new DateField('lastModifiedDateTime', BehaviorMappingEntity, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<BehaviorMappingEntity> = new StringField('mdfSystemRecordStatus', BehaviorMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[status]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS: StringField<BehaviorMappingEntity> = new StringField('status', BehaviorMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[subModule]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUB_MODULE: StringField<BehaviorMappingEntity> = new StringField('subModule', BehaviorMappingEntity, 'Edm.String');
  /**
   * Static representation of the one-to-many navigation property [[behaviorNameTranslationTextNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BEHAVIOR_NAME_TRANSLATION_TEXT_NAV: Link<BehaviorMappingEntity, MdfLocalizedValue> = new Link('behaviorNameTranslationTextNav', BehaviorMappingEntity, MdfLocalizedValue);
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<BehaviorMappingEntity, User> = new OneToOneLink('createdByNav', BehaviorMappingEntity, User);
  /**
   * Static representation of the one-to-many navigation property [[descriptionTranslationTextNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_TRANSLATION_TEXT_NAV: Link<BehaviorMappingEntity, MdfLocalizedValue> = new Link('descriptionTranslationTextNav', BehaviorMappingEntity, MdfLocalizedValue);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<BehaviorMappingEntity, User> = new OneToOneLink('lastModifiedByNav', BehaviorMappingEntity, User);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<BehaviorMappingEntity, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', BehaviorMappingEntity, MdfEnumValue);
  /**
   * Static representation of the one-to-one navigation property [[statusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS_NAV: OneToOneLink<BehaviorMappingEntity, MdfEnumValue> = new OneToOneLink('statusNav', BehaviorMappingEntity, MdfEnumValue);
  /**
   * All fields of the BehaviorMappingEntity entity.
   */
  export const _allFields: Array<StringField<BehaviorMappingEntity> | DateField<BehaviorMappingEntity> | Link<BehaviorMappingEntity, MdfLocalizedValue> | OneToOneLink<BehaviorMappingEntity, User> | OneToOneLink<BehaviorMappingEntity, MdfEnumValue>> = [
    BehaviorMappingEntity.COMPETENCY_ENTITY_EXTERNAL_CODE,
    BehaviorMappingEntity.BEHAVIOR_NAME_DE_DE,
    BehaviorMappingEntity.BEHAVIOR_NAME_DEFAULT_VALUE,
    BehaviorMappingEntity.BEHAVIOR_NAME_EN_DEBUG,
    BehaviorMappingEntity.BEHAVIOR_NAME_EN_GB,
    BehaviorMappingEntity.BEHAVIOR_NAME_EN_US,
    BehaviorMappingEntity.BEHAVIOR_NAME_ES_ES,
    BehaviorMappingEntity.BEHAVIOR_NAME_ES_MX,
    BehaviorMappingEntity.BEHAVIOR_NAME_FR_CA,
    BehaviorMappingEntity.BEHAVIOR_NAME_FR_FR,
    BehaviorMappingEntity.BEHAVIOR_NAME_IT_IT,
    BehaviorMappingEntity.BEHAVIOR_NAME_LOCALIZED,
    BehaviorMappingEntity.BEHAVIOR_NAME_NL_NL,
    BehaviorMappingEntity.BEHAVIOR_NAME_PT_BR,
    BehaviorMappingEntity.BEHAVIOR_NAME_ZH_CN,
    BehaviorMappingEntity.CREATED_BY,
    BehaviorMappingEntity.CREATED_DATE_TIME,
    BehaviorMappingEntity.DESCRIPTION_DE_DE,
    BehaviorMappingEntity.DESCRIPTION_DEFAULT_VALUE,
    BehaviorMappingEntity.DESCRIPTION_EN_DEBUG,
    BehaviorMappingEntity.DESCRIPTION_EN_GB,
    BehaviorMappingEntity.DESCRIPTION_EN_US,
    BehaviorMappingEntity.DESCRIPTION_ES_ES,
    BehaviorMappingEntity.DESCRIPTION_ES_MX,
    BehaviorMappingEntity.DESCRIPTION_FR_CA,
    BehaviorMappingEntity.DESCRIPTION_FR_FR,
    BehaviorMappingEntity.DESCRIPTION_IT_IT,
    BehaviorMappingEntity.DESCRIPTION_LOCALIZED,
    BehaviorMappingEntity.DESCRIPTION_NL_NL,
    BehaviorMappingEntity.DESCRIPTION_PT_BR,
    BehaviorMappingEntity.DESCRIPTION_ZH_CN,
    BehaviorMappingEntity.EXTERNAL_CODE,
    BehaviorMappingEntity.LAST_MODIFIED_BY,
    BehaviorMappingEntity.LAST_MODIFIED_DATE_TIME,
    BehaviorMappingEntity.MDF_SYSTEM_RECORD_STATUS,
    BehaviorMappingEntity.STATUS,
    BehaviorMappingEntity.SUB_MODULE,
    BehaviorMappingEntity.BEHAVIOR_NAME_TRANSLATION_TEXT_NAV,
    BehaviorMappingEntity.CREATED_BY_NAV,
    BehaviorMappingEntity.DESCRIPTION_TRANSLATION_TEXT_NAV,
    BehaviorMappingEntity.LAST_MODIFIED_BY_NAV,
    BehaviorMappingEntity.MDF_SYSTEM_RECORD_STATUS_NAV,
    BehaviorMappingEntity.STATUS_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<BehaviorMappingEntity> = new AllFields('*', BehaviorMappingEntity);
  /**
   * All key fields of the BehaviorMappingEntity entity.
   */
  export const _keyFields: Array<Selectable<BehaviorMappingEntity>> = [BehaviorMappingEntity.COMPETENCY_ENTITY_EXTERNAL_CODE, BehaviorMappingEntity.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property BehaviorMappingEntity.
   */
  export const _keys: { [keys: string]: Selectable<BehaviorMappingEntity> } = BehaviorMappingEntity._keyFields.reduce((acc: { [keys: string]: Selectable<BehaviorMappingEntity> }, field: Selectable<BehaviorMappingEntity>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
