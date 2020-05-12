/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CompetencyEntityRequestBuilder } from './CompetencyEntityRequestBuilder';
import { Moment } from 'moment';
import { AllFields, BooleanField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "CompetencyEntity" of service "SFOData".
 */
export class CompetencyEntity extends Entity implements CompetencyEntityType {
  /**
   * Technical entity name for CompetencyEntity.
   */
  static _entityName = 'CompetencyEntity';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for CompetencyEntity.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Category.
   * Maximum length: 128.
   * @nullable
   */
  categoryDeDe?: string;
  /**
   * Category.
   * Maximum length: 128.
   * @nullable
   */
  categoryDefaultValue?: string;
  /**
   * Category.
   * Maximum length: 128.
   * @nullable
   */
  categoryEnDebug?: string;
  /**
   * Category.
   * Maximum length: 128.
   * @nullable
   */
  categoryEnGb?: string;
  /**
   * Category.
   * Maximum length: 128.
   * @nullable
   */
  categoryEnUs?: string;
  /**
   * Category.
   * Maximum length: 128.
   * @nullable
   */
  categoryEsEs?: string;
  /**
   * Category.
   * Maximum length: 128.
   * @nullable
   */
  categoryEsMx?: string;
  /**
   * Category.
   * Maximum length: 128.
   * @nullable
   */
  categoryFrCa?: string;
  /**
   * Category.
   * Maximum length: 128.
   * @nullable
   */
  categoryFrFr?: string;
  /**
   * Category.
   * Maximum length: 128.
   * @nullable
   */
  categoryItIt?: string;
  /**
   * Category.
   * Maximum length: 128.
   * @nullable
   */
  categoryLocalized?: string;
  /**
   * Category.
   * Maximum length: 128.
   * @nullable
   */
  categoryNlNl?: string;
  /**
   * Category.
   * Maximum length: 128.
   * @nullable
   */
  categoryPtBr?: string;
  /**
   * Category.
   * Maximum length: 128.
   * @nullable
   */
  categoryZhCn?: string;
  /**
   * IS Collection.
   * @nullable
   */
  collection?: boolean;
  /**
   * Core.
   * @nullable
   */
  core?: boolean;
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
   * Library.
   * Maximum length: 64.
   * @nullable
   */
  libNameDeDe?: string;
  /**
   * Library.
   * Maximum length: 64.
   * @nullable
   */
  libNameDefaultValue?: string;
  /**
   * Library.
   * Maximum length: 64.
   * @nullable
   */
  libNameEnDebug?: string;
  /**
   * Library.
   * Maximum length: 64.
   * @nullable
   */
  libNameEnGb?: string;
  /**
   * Library.
   * Maximum length: 64.
   * @nullable
   */
  libNameEnUs?: string;
  /**
   * Library.
   * Maximum length: 64.
   * @nullable
   */
  libNameEsEs?: string;
  /**
   * Library.
   * Maximum length: 64.
   * @nullable
   */
  libNameEsMx?: string;
  /**
   * Library.
   * Maximum length: 64.
   * @nullable
   */
  libNameFrCa?: string;
  /**
   * Library.
   * Maximum length: 64.
   * @nullable
   */
  libNameFrFr?: string;
  /**
   * Library.
   * Maximum length: 64.
   * @nullable
   */
  libNameItIt?: string;
  /**
   * Library.
   * Maximum length: 64.
   * @nullable
   */
  libNameLocalized?: string;
  /**
   * Library.
   * Maximum length: 64.
   * @nullable
   */
  libNameNlNl?: string;
  /**
   * Library.
   * Maximum length: 64.
   * @nullable
   */
  libNamePtBr?: string;
  /**
   * Library.
   * Maximum length: 64.
   * @nullable
   */
  libNameZhCn?: string;
  /**
   * Record Status.
   * Maximum length: 255.
   * @nullable
   */
  mdfSystemRecordStatus?: string;
  /**
   * Competency Name.
   * Maximum length: 2048.
   * @nullable
   */
  nameDeDe?: string;
  /**
   * Competency Name.
   * Maximum length: 2048.
   * @nullable
   */
  nameDefaultValue?: string;
  /**
   * Competency Name.
   * Maximum length: 2048.
   * @nullable
   */
  nameEnDebug?: string;
  /**
   * Competency Name.
   * Maximum length: 2048.
   * @nullable
   */
  nameEnGb?: string;
  /**
   * Competency Name.
   * Maximum length: 2048.
   * @nullable
   */
  nameEnUs?: string;
  /**
   * Competency Name.
   * Maximum length: 2048.
   * @nullable
   */
  nameEsEs?: string;
  /**
   * Competency Name.
   * Maximum length: 2048.
   * @nullable
   */
  nameEsMx?: string;
  /**
   * Competency Name.
   * Maximum length: 2048.
   * @nullable
   */
  nameFrCa?: string;
  /**
   * Competency Name.
   * Maximum length: 2048.
   * @nullable
   */
  nameFrFr?: string;
  /**
   * Competency Name.
   * Maximum length: 2048.
   * @nullable
   */
  nameItIt?: string;
  /**
   * Competency Name.
   * Maximum length: 2048.
   * @nullable
   */
  nameLocalized?: string;
  /**
   * Competency Name.
   * Maximum length: 2048.
   * @nullable
   */
  nameNlNl?: string;
  /**
   * Competency Name.
   * Maximum length: 2048.
   * @nullable
   */
  namePtBr?: string;
  /**
   * Competency Name.
   * Maximum length: 2048.
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
   * One-to-many navigation property to the [[BehaviorMappingEntity]] entity.
   */
  behaviors!: BehaviorMappingEntity[];
  /**
   * One-to-many navigation property to the [[MdfLocalizedValue]] entity.
   */
  categoryTranslationTextNav!: MdfLocalizedValue[];
  /**
   * One-to-many navigation property to the [[CompetencyEntity]] entity.
   */
  competencies!: CompetencyEntity[];
  /**
   * One-to-many navigation property to the [[CompetencyType]] entity.
   */
  competencyTypes!: CompetencyType[];
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
   * One-to-many navigation property to the [[MdfLocalizedValue]] entity.
   */
  libNameTranslationTextNav!: MdfLocalizedValue[];
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  mdfSystemRecordStatusNav!: MdfEnumValue;
  /**
   * One-to-many navigation property to the [[MdfLocalizedValue]] entity.
   */
  nameTranslationTextNav!: MdfLocalizedValue[];
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  statusNav!: MdfEnumValue;
  /**
   * One-to-many navigation property to the [[WfRequest]] entity.
   */
  wfRequestNav!: WfRequest[];

  /**
   * Returns an entity builder to construct instances `CompetencyEntity`.
   * @returns A builder that constructs instances of entity type `CompetencyEntity`.
   */
  static builder(): EntityBuilderType<CompetencyEntity, CompetencyEntityTypeForceMandatory> {
    return Entity.entityBuilder(CompetencyEntity);
  }

  /**
   * Returns a request builder to construct requests for operations on the `CompetencyEntity` entity type.
   * @returns A `CompetencyEntity` request builder.
   */
  static requestBuilder(): CompetencyEntityRequestBuilder {
    return new CompetencyEntityRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `CompetencyEntity`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `CompetencyEntity`.
   */
  static customField(fieldName: string): CustomField<CompetencyEntity> {
    return Entity.customFieldSelector(fieldName, CompetencyEntity);
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
import { MdfLocalizedValue, MdfLocalizedValueType } from './MdfLocalizedValue';
import { CompetencyType, CompetencyTypeType } from './CompetencyType';
import { User, UserType } from './User';
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';
import { WfRequest, WfRequestType } from './WfRequest';

export interface CompetencyEntityType {
  categoryDeDe?: string;
  categoryDefaultValue?: string;
  categoryEnDebug?: string;
  categoryEnGb?: string;
  categoryEnUs?: string;
  categoryEsEs?: string;
  categoryEsMx?: string;
  categoryFrCa?: string;
  categoryFrFr?: string;
  categoryItIt?: string;
  categoryLocalized?: string;
  categoryNlNl?: string;
  categoryPtBr?: string;
  categoryZhCn?: string;
  collection?: boolean;
  core?: boolean;
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
  libNameDeDe?: string;
  libNameDefaultValue?: string;
  libNameEnDebug?: string;
  libNameEnGb?: string;
  libNameEnUs?: string;
  libNameEsEs?: string;
  libNameEsMx?: string;
  libNameFrCa?: string;
  libNameFrFr?: string;
  libNameItIt?: string;
  libNameLocalized?: string;
  libNameNlNl?: string;
  libNamePtBr?: string;
  libNameZhCn?: string;
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
  behaviors: BehaviorMappingEntityType[];
  categoryTranslationTextNav: MdfLocalizedValueType[];
  competencies: CompetencyEntityType[];
  competencyTypes: CompetencyTypeType[];
  createdByNav: UserType;
  descriptionTranslationTextNav: MdfLocalizedValueType[];
  lastModifiedByNav: UserType;
  libNameTranslationTextNav: MdfLocalizedValueType[];
  mdfSystemRecordStatusNav: MdfEnumValueType;
  nameTranslationTextNav: MdfLocalizedValueType[];
  statusNav: MdfEnumValueType;
  wfRequestNav: WfRequestType[];
}

export interface CompetencyEntityTypeForceMandatory {
  categoryDeDe: string;
  categoryDefaultValue: string;
  categoryEnDebug: string;
  categoryEnGb: string;
  categoryEnUs: string;
  categoryEsEs: string;
  categoryEsMx: string;
  categoryFrCa: string;
  categoryFrFr: string;
  categoryItIt: string;
  categoryLocalized: string;
  categoryNlNl: string;
  categoryPtBr: string;
  categoryZhCn: string;
  collection: boolean;
  core: boolean;
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
  libNameDeDe: string;
  libNameDefaultValue: string;
  libNameEnDebug: string;
  libNameEnGb: string;
  libNameEnUs: string;
  libNameEsEs: string;
  libNameEsMx: string;
  libNameFrCa: string;
  libNameFrFr: string;
  libNameItIt: string;
  libNameLocalized: string;
  libNameNlNl: string;
  libNamePtBr: string;
  libNameZhCn: string;
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
  behaviors: BehaviorMappingEntityType[];
  categoryTranslationTextNav: MdfLocalizedValueType[];
  competencies: CompetencyEntityType[];
  competencyTypes: CompetencyTypeType[];
  createdByNav: UserType;
  descriptionTranslationTextNav: MdfLocalizedValueType[];
  lastModifiedByNav: UserType;
  libNameTranslationTextNav: MdfLocalizedValueType[];
  mdfSystemRecordStatusNav: MdfEnumValueType;
  nameTranslationTextNav: MdfLocalizedValueType[];
  statusNav: MdfEnumValueType;
  wfRequestNav: WfRequestType[];
}

export namespace CompetencyEntity {
  /**
   * Static representation of the [[categoryDeDe]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CATEGORY_DE_DE: StringField<CompetencyEntity> = new StringField('category_de_DE', CompetencyEntity, 'Edm.String');
  /**
   * Static representation of the [[categoryDefaultValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CATEGORY_DEFAULT_VALUE: StringField<CompetencyEntity> = new StringField('category_defaultValue', CompetencyEntity, 'Edm.String');
  /**
   * Static representation of the [[categoryEnDebug]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CATEGORY_EN_DEBUG: StringField<CompetencyEntity> = new StringField('category_en_DEBUG', CompetencyEntity, 'Edm.String');
  /**
   * Static representation of the [[categoryEnGb]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CATEGORY_EN_GB: StringField<CompetencyEntity> = new StringField('category_en_GB', CompetencyEntity, 'Edm.String');
  /**
   * Static representation of the [[categoryEnUs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CATEGORY_EN_US: StringField<CompetencyEntity> = new StringField('category_en_US', CompetencyEntity, 'Edm.String');
  /**
   * Static representation of the [[categoryEsEs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CATEGORY_ES_ES: StringField<CompetencyEntity> = new StringField('category_es_ES', CompetencyEntity, 'Edm.String');
  /**
   * Static representation of the [[categoryEsMx]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CATEGORY_ES_MX: StringField<CompetencyEntity> = new StringField('category_es_MX', CompetencyEntity, 'Edm.String');
  /**
   * Static representation of the [[categoryFrCa]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CATEGORY_FR_CA: StringField<CompetencyEntity> = new StringField('category_fr_CA', CompetencyEntity, 'Edm.String');
  /**
   * Static representation of the [[categoryFrFr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CATEGORY_FR_FR: StringField<CompetencyEntity> = new StringField('category_fr_FR', CompetencyEntity, 'Edm.String');
  /**
   * Static representation of the [[categoryItIt]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CATEGORY_IT_IT: StringField<CompetencyEntity> = new StringField('category_it_IT', CompetencyEntity, 'Edm.String');
  /**
   * Static representation of the [[categoryLocalized]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CATEGORY_LOCALIZED: StringField<CompetencyEntity> = new StringField('category_localized', CompetencyEntity, 'Edm.String');
  /**
   * Static representation of the [[categoryNlNl]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CATEGORY_NL_NL: StringField<CompetencyEntity> = new StringField('category_nl_NL', CompetencyEntity, 'Edm.String');
  /**
   * Static representation of the [[categoryPtBr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CATEGORY_PT_BR: StringField<CompetencyEntity> = new StringField('category_pt_BR', CompetencyEntity, 'Edm.String');
  /**
   * Static representation of the [[categoryZhCn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CATEGORY_ZH_CN: StringField<CompetencyEntity> = new StringField('category_zh_CN', CompetencyEntity, 'Edm.String');
  /**
   * Static representation of the [[collection]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COLLECTION: BooleanField<CompetencyEntity> = new BooleanField('collection', CompetencyEntity, 'Edm.Boolean');
  /**
   * Static representation of the [[core]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CORE: BooleanField<CompetencyEntity> = new BooleanField('core', CompetencyEntity, 'Edm.Boolean');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<CompetencyEntity> = new StringField('createdBy', CompetencyEntity, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<CompetencyEntity> = new DateField('createdDateTime', CompetencyEntity, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[descriptionDeDe]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_DE_DE: StringField<CompetencyEntity> = new StringField('description_de_DE', CompetencyEntity, 'Edm.String');
  /**
   * Static representation of the [[descriptionDefaultValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_DEFAULT_VALUE: StringField<CompetencyEntity> = new StringField('description_defaultValue', CompetencyEntity, 'Edm.String');
  /**
   * Static representation of the [[descriptionEnDebug]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_EN_DEBUG: StringField<CompetencyEntity> = new StringField('description_en_DEBUG', CompetencyEntity, 'Edm.String');
  /**
   * Static representation of the [[descriptionEnGb]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_EN_GB: StringField<CompetencyEntity> = new StringField('description_en_GB', CompetencyEntity, 'Edm.String');
  /**
   * Static representation of the [[descriptionEnUs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_EN_US: StringField<CompetencyEntity> = new StringField('description_en_US', CompetencyEntity, 'Edm.String');
  /**
   * Static representation of the [[descriptionEsEs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_ES_ES: StringField<CompetencyEntity> = new StringField('description_es_ES', CompetencyEntity, 'Edm.String');
  /**
   * Static representation of the [[descriptionEsMx]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_ES_MX: StringField<CompetencyEntity> = new StringField('description_es_MX', CompetencyEntity, 'Edm.String');
  /**
   * Static representation of the [[descriptionFrCa]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_FR_CA: StringField<CompetencyEntity> = new StringField('description_fr_CA', CompetencyEntity, 'Edm.String');
  /**
   * Static representation of the [[descriptionFrFr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_FR_FR: StringField<CompetencyEntity> = new StringField('description_fr_FR', CompetencyEntity, 'Edm.String');
  /**
   * Static representation of the [[descriptionItIt]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_IT_IT: StringField<CompetencyEntity> = new StringField('description_it_IT', CompetencyEntity, 'Edm.String');
  /**
   * Static representation of the [[descriptionLocalized]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_LOCALIZED: StringField<CompetencyEntity> = new StringField('description_localized', CompetencyEntity, 'Edm.String');
  /**
   * Static representation of the [[descriptionNlNl]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_NL_NL: StringField<CompetencyEntity> = new StringField('description_nl_NL', CompetencyEntity, 'Edm.String');
  /**
   * Static representation of the [[descriptionPtBr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_PT_BR: StringField<CompetencyEntity> = new StringField('description_pt_BR', CompetencyEntity, 'Edm.String');
  /**
   * Static representation of the [[descriptionZhCn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_ZH_CN: StringField<CompetencyEntity> = new StringField('description_zh_CN', CompetencyEntity, 'Edm.String');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: StringField<CompetencyEntity> = new StringField('externalCode', CompetencyEntity, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<CompetencyEntity> = new StringField('lastModifiedBy', CompetencyEntity, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<CompetencyEntity> = new DateField('lastModifiedDateTime', CompetencyEntity, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[libNameDeDe]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LIB_NAME_DE_DE: StringField<CompetencyEntity> = new StringField('libName_de_DE', CompetencyEntity, 'Edm.String');
  /**
   * Static representation of the [[libNameDefaultValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LIB_NAME_DEFAULT_VALUE: StringField<CompetencyEntity> = new StringField('libName_defaultValue', CompetencyEntity, 'Edm.String');
  /**
   * Static representation of the [[libNameEnDebug]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LIB_NAME_EN_DEBUG: StringField<CompetencyEntity> = new StringField('libName_en_DEBUG', CompetencyEntity, 'Edm.String');
  /**
   * Static representation of the [[libNameEnGb]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LIB_NAME_EN_GB: StringField<CompetencyEntity> = new StringField('libName_en_GB', CompetencyEntity, 'Edm.String');
  /**
   * Static representation of the [[libNameEnUs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LIB_NAME_EN_US: StringField<CompetencyEntity> = new StringField('libName_en_US', CompetencyEntity, 'Edm.String');
  /**
   * Static representation of the [[libNameEsEs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LIB_NAME_ES_ES: StringField<CompetencyEntity> = new StringField('libName_es_ES', CompetencyEntity, 'Edm.String');
  /**
   * Static representation of the [[libNameEsMx]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LIB_NAME_ES_MX: StringField<CompetencyEntity> = new StringField('libName_es_MX', CompetencyEntity, 'Edm.String');
  /**
   * Static representation of the [[libNameFrCa]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LIB_NAME_FR_CA: StringField<CompetencyEntity> = new StringField('libName_fr_CA', CompetencyEntity, 'Edm.String');
  /**
   * Static representation of the [[libNameFrFr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LIB_NAME_FR_FR: StringField<CompetencyEntity> = new StringField('libName_fr_FR', CompetencyEntity, 'Edm.String');
  /**
   * Static representation of the [[libNameItIt]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LIB_NAME_IT_IT: StringField<CompetencyEntity> = new StringField('libName_it_IT', CompetencyEntity, 'Edm.String');
  /**
   * Static representation of the [[libNameLocalized]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LIB_NAME_LOCALIZED: StringField<CompetencyEntity> = new StringField('libName_localized', CompetencyEntity, 'Edm.String');
  /**
   * Static representation of the [[libNameNlNl]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LIB_NAME_NL_NL: StringField<CompetencyEntity> = new StringField('libName_nl_NL', CompetencyEntity, 'Edm.String');
  /**
   * Static representation of the [[libNamePtBr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LIB_NAME_PT_BR: StringField<CompetencyEntity> = new StringField('libName_pt_BR', CompetencyEntity, 'Edm.String');
  /**
   * Static representation of the [[libNameZhCn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LIB_NAME_ZH_CN: StringField<CompetencyEntity> = new StringField('libName_zh_CN', CompetencyEntity, 'Edm.String');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<CompetencyEntity> = new StringField('mdfSystemRecordStatus', CompetencyEntity, 'Edm.String');
  /**
   * Static representation of the [[nameDeDe]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_DE_DE: StringField<CompetencyEntity> = new StringField('name_de_DE', CompetencyEntity, 'Edm.String');
  /**
   * Static representation of the [[nameDefaultValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_DEFAULT_VALUE: StringField<CompetencyEntity> = new StringField('name_defaultValue', CompetencyEntity, 'Edm.String');
  /**
   * Static representation of the [[nameEnDebug]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_EN_DEBUG: StringField<CompetencyEntity> = new StringField('name_en_DEBUG', CompetencyEntity, 'Edm.String');
  /**
   * Static representation of the [[nameEnGb]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_EN_GB: StringField<CompetencyEntity> = new StringField('name_en_GB', CompetencyEntity, 'Edm.String');
  /**
   * Static representation of the [[nameEnUs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_EN_US: StringField<CompetencyEntity> = new StringField('name_en_US', CompetencyEntity, 'Edm.String');
  /**
   * Static representation of the [[nameEsEs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_ES_ES: StringField<CompetencyEntity> = new StringField('name_es_ES', CompetencyEntity, 'Edm.String');
  /**
   * Static representation of the [[nameEsMx]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_ES_MX: StringField<CompetencyEntity> = new StringField('name_es_MX', CompetencyEntity, 'Edm.String');
  /**
   * Static representation of the [[nameFrCa]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_FR_CA: StringField<CompetencyEntity> = new StringField('name_fr_CA', CompetencyEntity, 'Edm.String');
  /**
   * Static representation of the [[nameFrFr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_FR_FR: StringField<CompetencyEntity> = new StringField('name_fr_FR', CompetencyEntity, 'Edm.String');
  /**
   * Static representation of the [[nameItIt]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_IT_IT: StringField<CompetencyEntity> = new StringField('name_it_IT', CompetencyEntity, 'Edm.String');
  /**
   * Static representation of the [[nameLocalized]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_LOCALIZED: StringField<CompetencyEntity> = new StringField('name_localized', CompetencyEntity, 'Edm.String');
  /**
   * Static representation of the [[nameNlNl]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_NL_NL: StringField<CompetencyEntity> = new StringField('name_nl_NL', CompetencyEntity, 'Edm.String');
  /**
   * Static representation of the [[namePtBr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_PT_BR: StringField<CompetencyEntity> = new StringField('name_pt_BR', CompetencyEntity, 'Edm.String');
  /**
   * Static representation of the [[nameZhCn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_ZH_CN: StringField<CompetencyEntity> = new StringField('name_zh_CN', CompetencyEntity, 'Edm.String');
  /**
   * Static representation of the [[status]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS: StringField<CompetencyEntity> = new StringField('status', CompetencyEntity, 'Edm.String');
  /**
   * Static representation of the [[subModule]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUB_MODULE: StringField<CompetencyEntity> = new StringField('subModule', CompetencyEntity, 'Edm.String');
  /**
   * Static representation of the one-to-many navigation property [[behaviors]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BEHAVIORS: Link<CompetencyEntity, BehaviorMappingEntity> = new Link('behaviors', CompetencyEntity, BehaviorMappingEntity);
  /**
   * Static representation of the one-to-many navigation property [[categoryTranslationTextNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CATEGORY_TRANSLATION_TEXT_NAV: Link<CompetencyEntity, MdfLocalizedValue> = new Link('categoryTranslationTextNav', CompetencyEntity, MdfLocalizedValue);
  /**
   * Static representation of the one-to-many navigation property [[competencies]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMPETENCIES: Link<CompetencyEntity, CompetencyEntity> = new Link('competencies', CompetencyEntity, CompetencyEntity);
  /**
   * Static representation of the one-to-many navigation property [[competencyTypes]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMPETENCY_TYPES: Link<CompetencyEntity, CompetencyType> = new Link('competencyTypes', CompetencyEntity, CompetencyType);
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<CompetencyEntity, User> = new OneToOneLink('createdByNav', CompetencyEntity, User);
  /**
   * Static representation of the one-to-many navigation property [[descriptionTranslationTextNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_TRANSLATION_TEXT_NAV: Link<CompetencyEntity, MdfLocalizedValue> = new Link('descriptionTranslationTextNav', CompetencyEntity, MdfLocalizedValue);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<CompetencyEntity, User> = new OneToOneLink('lastModifiedByNav', CompetencyEntity, User);
  /**
   * Static representation of the one-to-many navigation property [[libNameTranslationTextNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LIB_NAME_TRANSLATION_TEXT_NAV: Link<CompetencyEntity, MdfLocalizedValue> = new Link('libNameTranslationTextNav', CompetencyEntity, MdfLocalizedValue);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<CompetencyEntity, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', CompetencyEntity, MdfEnumValue);
  /**
   * Static representation of the one-to-many navigation property [[nameTranslationTextNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_TRANSLATION_TEXT_NAV: Link<CompetencyEntity, MdfLocalizedValue> = new Link('nameTranslationTextNav', CompetencyEntity, MdfLocalizedValue);
  /**
   * Static representation of the one-to-one navigation property [[statusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS_NAV: OneToOneLink<CompetencyEntity, MdfEnumValue> = new OneToOneLink('statusNav', CompetencyEntity, MdfEnumValue);
  /**
   * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WF_REQUEST_NAV: Link<CompetencyEntity, WfRequest> = new Link('wfRequestNav', CompetencyEntity, WfRequest);
  /**
   * All fields of the CompetencyEntity entity.
   */
  export const _allFields: Array<StringField<CompetencyEntity> | BooleanField<CompetencyEntity> | DateField<CompetencyEntity> | Link<CompetencyEntity, BehaviorMappingEntity> | Link<CompetencyEntity, MdfLocalizedValue> | Link<CompetencyEntity, CompetencyEntity> | Link<CompetencyEntity, CompetencyType> | OneToOneLink<CompetencyEntity, User> | OneToOneLink<CompetencyEntity, MdfEnumValue> | Link<CompetencyEntity, WfRequest>> = [
    CompetencyEntity.CATEGORY_DE_DE,
    CompetencyEntity.CATEGORY_DEFAULT_VALUE,
    CompetencyEntity.CATEGORY_EN_DEBUG,
    CompetencyEntity.CATEGORY_EN_GB,
    CompetencyEntity.CATEGORY_EN_US,
    CompetencyEntity.CATEGORY_ES_ES,
    CompetencyEntity.CATEGORY_ES_MX,
    CompetencyEntity.CATEGORY_FR_CA,
    CompetencyEntity.CATEGORY_FR_FR,
    CompetencyEntity.CATEGORY_IT_IT,
    CompetencyEntity.CATEGORY_LOCALIZED,
    CompetencyEntity.CATEGORY_NL_NL,
    CompetencyEntity.CATEGORY_PT_BR,
    CompetencyEntity.CATEGORY_ZH_CN,
    CompetencyEntity.COLLECTION,
    CompetencyEntity.CORE,
    CompetencyEntity.CREATED_BY,
    CompetencyEntity.CREATED_DATE_TIME,
    CompetencyEntity.DESCRIPTION_DE_DE,
    CompetencyEntity.DESCRIPTION_DEFAULT_VALUE,
    CompetencyEntity.DESCRIPTION_EN_DEBUG,
    CompetencyEntity.DESCRIPTION_EN_GB,
    CompetencyEntity.DESCRIPTION_EN_US,
    CompetencyEntity.DESCRIPTION_ES_ES,
    CompetencyEntity.DESCRIPTION_ES_MX,
    CompetencyEntity.DESCRIPTION_FR_CA,
    CompetencyEntity.DESCRIPTION_FR_FR,
    CompetencyEntity.DESCRIPTION_IT_IT,
    CompetencyEntity.DESCRIPTION_LOCALIZED,
    CompetencyEntity.DESCRIPTION_NL_NL,
    CompetencyEntity.DESCRIPTION_PT_BR,
    CompetencyEntity.DESCRIPTION_ZH_CN,
    CompetencyEntity.EXTERNAL_CODE,
    CompetencyEntity.LAST_MODIFIED_BY,
    CompetencyEntity.LAST_MODIFIED_DATE_TIME,
    CompetencyEntity.LIB_NAME_DE_DE,
    CompetencyEntity.LIB_NAME_DEFAULT_VALUE,
    CompetencyEntity.LIB_NAME_EN_DEBUG,
    CompetencyEntity.LIB_NAME_EN_GB,
    CompetencyEntity.LIB_NAME_EN_US,
    CompetencyEntity.LIB_NAME_ES_ES,
    CompetencyEntity.LIB_NAME_ES_MX,
    CompetencyEntity.LIB_NAME_FR_CA,
    CompetencyEntity.LIB_NAME_FR_FR,
    CompetencyEntity.LIB_NAME_IT_IT,
    CompetencyEntity.LIB_NAME_LOCALIZED,
    CompetencyEntity.LIB_NAME_NL_NL,
    CompetencyEntity.LIB_NAME_PT_BR,
    CompetencyEntity.LIB_NAME_ZH_CN,
    CompetencyEntity.MDF_SYSTEM_RECORD_STATUS,
    CompetencyEntity.NAME_DE_DE,
    CompetencyEntity.NAME_DEFAULT_VALUE,
    CompetencyEntity.NAME_EN_DEBUG,
    CompetencyEntity.NAME_EN_GB,
    CompetencyEntity.NAME_EN_US,
    CompetencyEntity.NAME_ES_ES,
    CompetencyEntity.NAME_ES_MX,
    CompetencyEntity.NAME_FR_CA,
    CompetencyEntity.NAME_FR_FR,
    CompetencyEntity.NAME_IT_IT,
    CompetencyEntity.NAME_LOCALIZED,
    CompetencyEntity.NAME_NL_NL,
    CompetencyEntity.NAME_PT_BR,
    CompetencyEntity.NAME_ZH_CN,
    CompetencyEntity.STATUS,
    CompetencyEntity.SUB_MODULE,
    CompetencyEntity.BEHAVIORS,
    CompetencyEntity.CATEGORY_TRANSLATION_TEXT_NAV,
    CompetencyEntity.COMPETENCIES,
    CompetencyEntity.COMPETENCY_TYPES,
    CompetencyEntity.CREATED_BY_NAV,
    CompetencyEntity.DESCRIPTION_TRANSLATION_TEXT_NAV,
    CompetencyEntity.LAST_MODIFIED_BY_NAV,
    CompetencyEntity.LIB_NAME_TRANSLATION_TEXT_NAV,
    CompetencyEntity.MDF_SYSTEM_RECORD_STATUS_NAV,
    CompetencyEntity.NAME_TRANSLATION_TEXT_NAV,
    CompetencyEntity.STATUS_NAV,
    CompetencyEntity.WF_REQUEST_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<CompetencyEntity> = new AllFields('*', CompetencyEntity);
  /**
   * All key fields of the CompetencyEntity entity.
   */
  export const _keyFields: Array<Selectable<CompetencyEntity>> = [CompetencyEntity.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property CompetencyEntity.
   */
  export const _keys: { [keys: string]: Selectable<CompetencyEntity> } = CompetencyEntity._keyFields.reduce((acc: { [keys: string]: Selectable<CompetencyEntity> }, field: Selectable<CompetencyEntity>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
