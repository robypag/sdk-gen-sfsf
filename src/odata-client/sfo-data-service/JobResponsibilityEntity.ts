/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { JobResponsibilityEntityRequestBuilder } from './JobResponsibilityEntityRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "JobResponsibilityEntity" of service "SFOData".
 */
export class JobResponsibilityEntity extends Entity implements JobResponsibilityEntityType {
  /**
   * Technical entity name for JobResponsibilityEntity.
   */
  static _entityName = 'JobResponsibilityEntity';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for JobResponsibilityEntity.
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
   * Duty.
   * Maximum length: 4000.
   * @nullable
   */
  dutyDeDe?: string;
  /**
   * Duty.
   * Maximum length: 4000.
   * @nullable
   */
  dutyDefaultValue?: string;
  /**
   * Duty.
   * Maximum length: 4000.
   * @nullable
   */
  dutyEnDebug?: string;
  /**
   * Duty.
   * Maximum length: 4000.
   * @nullable
   */
  dutyEnGb?: string;
  /**
   * Duty.
   * Maximum length: 4000.
   * @nullable
   */
  dutyEnUs?: string;
  /**
   * Duty.
   * Maximum length: 4000.
   * @nullable
   */
  dutyEsEs?: string;
  /**
   * Duty.
   * Maximum length: 4000.
   * @nullable
   */
  dutyEsMx?: string;
  /**
   * Duty.
   * Maximum length: 4000.
   * @nullable
   */
  dutyFrCa?: string;
  /**
   * Duty.
   * Maximum length: 4000.
   * @nullable
   */
  dutyFrFr?: string;
  /**
   * Duty.
   * Maximum length: 4000.
   * @nullable
   */
  dutyItIt?: string;
  /**
   * Duty.
   * Maximum length: 4000.
   * @nullable
   */
  dutyLocalized?: string;
  /**
   * Duty.
   * Maximum length: 4000.
   * @nullable
   */
  dutyNlNl?: string;
  /**
   * Duty.
   * Maximum length: 4000.
   * @nullable
   */
  dutyPtBr?: string;
  /**
   * Duty.
   * Maximum length: 4000.
   * @nullable
   */
  dutyZhCn?: string;
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
   * Maximum length: 128.
   * @nullable
   */
  libNameDeDe?: string;
  /**
   * Library.
   * Maximum length: 128.
   * @nullable
   */
  libNameDefaultValue?: string;
  /**
   * Library.
   * Maximum length: 128.
   * @nullable
   */
  libNameEnDebug?: string;
  /**
   * Library.
   * Maximum length: 128.
   * @nullable
   */
  libNameEnGb?: string;
  /**
   * Library.
   * Maximum length: 128.
   * @nullable
   */
  libNameEnUs?: string;
  /**
   * Library.
   * Maximum length: 128.
   * @nullable
   */
  libNameEsEs?: string;
  /**
   * Library.
   * Maximum length: 128.
   * @nullable
   */
  libNameEsMx?: string;
  /**
   * Library.
   * Maximum length: 128.
   * @nullable
   */
  libNameFrCa?: string;
  /**
   * Library.
   * Maximum length: 128.
   * @nullable
   */
  libNameFrFr?: string;
  /**
   * Library.
   * Maximum length: 128.
   * @nullable
   */
  libNameItIt?: string;
  /**
   * Library.
   * Maximum length: 128.
   * @nullable
   */
  libNameLocalized?: string;
  /**
   * Library.
   * Maximum length: 128.
   * @nullable
   */
  libNameNlNl?: string;
  /**
   * Library.
   * Maximum length: 128.
   * @nullable
   */
  libNamePtBr?: string;
  /**
   * Library.
   * Maximum length: 128.
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
   * Job Responsibility Name.
   * Maximum length: 256.
   * @nullable
   */
  nameDeDe?: string;
  /**
   * Job Responsibility Name.
   * Maximum length: 256.
   * @nullable
   */
  nameDefaultValue?: string;
  /**
   * Job Responsibility Name.
   * Maximum length: 256.
   * @nullable
   */
  nameEnDebug?: string;
  /**
   * Job Responsibility Name.
   * Maximum length: 256.
   * @nullable
   */
  nameEnGb?: string;
  /**
   * Job Responsibility Name.
   * Maximum length: 256.
   * @nullable
   */
  nameEnUs?: string;
  /**
   * Job Responsibility Name.
   * Maximum length: 256.
   * @nullable
   */
  nameEsEs?: string;
  /**
   * Job Responsibility Name.
   * Maximum length: 256.
   * @nullable
   */
  nameEsMx?: string;
  /**
   * Job Responsibility Name.
   * Maximum length: 256.
   * @nullable
   */
  nameFrCa?: string;
  /**
   * Job Responsibility Name.
   * Maximum length: 256.
   * @nullable
   */
  nameFrFr?: string;
  /**
   * Job Responsibility Name.
   * Maximum length: 256.
   * @nullable
   */
  nameItIt?: string;
  /**
   * Job Responsibility Name.
   * Maximum length: 256.
   * @nullable
   */
  nameLocalized?: string;
  /**
   * Job Responsibility Name.
   * Maximum length: 256.
   * @nullable
   */
  nameNlNl?: string;
  /**
   * Job Responsibility Name.
   * Maximum length: 256.
   * @nullable
   */
  namePtBr?: string;
  /**
   * Job Responsibility Name.
   * Maximum length: 256.
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
   * One-to-many navigation property to the [[MdfLocalizedValue]] entity.
   */
  categoryTranslationTextNav!: MdfLocalizedValue[];
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  createdByNav!: User;
  /**
   * One-to-many navigation property to the [[MdfLocalizedValue]] entity.
   */
  descriptionTranslationTextNav!: MdfLocalizedValue[];
  /**
   * One-to-many navigation property to the [[MdfLocalizedValue]] entity.
   */
  dutyTranslationTextNav!: MdfLocalizedValue[];
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
   * Returns an entity builder to construct instances `JobResponsibilityEntity`.
   * @returns A builder that constructs instances of entity type `JobResponsibilityEntity`.
   */
  static builder(): EntityBuilderType<JobResponsibilityEntity, JobResponsibilityEntityTypeForceMandatory> {
    return Entity.entityBuilder(JobResponsibilityEntity);
  }

  /**
   * Returns a request builder to construct requests for operations on the `JobResponsibilityEntity` entity type.
   * @returns A `JobResponsibilityEntity` request builder.
   */
  static requestBuilder(): JobResponsibilityEntityRequestBuilder {
    return new JobResponsibilityEntityRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobResponsibilityEntity`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `JobResponsibilityEntity`.
   */
  static customField(fieldName: string): CustomField<JobResponsibilityEntity> {
    return Entity.customFieldSelector(fieldName, JobResponsibilityEntity);
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
import { WfRequest, WfRequestType } from './WfRequest';

export interface JobResponsibilityEntityType {
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
  dutyDeDe?: string;
  dutyDefaultValue?: string;
  dutyEnDebug?: string;
  dutyEnGb?: string;
  dutyEnUs?: string;
  dutyEsEs?: string;
  dutyEsMx?: string;
  dutyFrCa?: string;
  dutyFrFr?: string;
  dutyItIt?: string;
  dutyLocalized?: string;
  dutyNlNl?: string;
  dutyPtBr?: string;
  dutyZhCn?: string;
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
  categoryTranslationTextNav: MdfLocalizedValueType[];
  createdByNav: UserType;
  descriptionTranslationTextNav: MdfLocalizedValueType[];
  dutyTranslationTextNav: MdfLocalizedValueType[];
  lastModifiedByNav: UserType;
  libNameTranslationTextNav: MdfLocalizedValueType[];
  mdfSystemRecordStatusNav: MdfEnumValueType;
  nameTranslationTextNav: MdfLocalizedValueType[];
  statusNav: MdfEnumValueType;
  wfRequestNav: WfRequestType[];
}

export interface JobResponsibilityEntityTypeForceMandatory {
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
  dutyDeDe: string;
  dutyDefaultValue: string;
  dutyEnDebug: string;
  dutyEnGb: string;
  dutyEnUs: string;
  dutyEsEs: string;
  dutyEsMx: string;
  dutyFrCa: string;
  dutyFrFr: string;
  dutyItIt: string;
  dutyLocalized: string;
  dutyNlNl: string;
  dutyPtBr: string;
  dutyZhCn: string;
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
  categoryTranslationTextNav: MdfLocalizedValueType[];
  createdByNav: UserType;
  descriptionTranslationTextNav: MdfLocalizedValueType[];
  dutyTranslationTextNav: MdfLocalizedValueType[];
  lastModifiedByNav: UserType;
  libNameTranslationTextNav: MdfLocalizedValueType[];
  mdfSystemRecordStatusNav: MdfEnumValueType;
  nameTranslationTextNav: MdfLocalizedValueType[];
  statusNav: MdfEnumValueType;
  wfRequestNav: WfRequestType[];
}

export namespace JobResponsibilityEntity {
  /**
   * Static representation of the [[categoryDeDe]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CATEGORY_DE_DE: StringField<JobResponsibilityEntity> = new StringField('category_de_DE', JobResponsibilityEntity, 'Edm.String');
  /**
   * Static representation of the [[categoryDefaultValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CATEGORY_DEFAULT_VALUE: StringField<JobResponsibilityEntity> = new StringField('category_defaultValue', JobResponsibilityEntity, 'Edm.String');
  /**
   * Static representation of the [[categoryEnDebug]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CATEGORY_EN_DEBUG: StringField<JobResponsibilityEntity> = new StringField('category_en_DEBUG', JobResponsibilityEntity, 'Edm.String');
  /**
   * Static representation of the [[categoryEnGb]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CATEGORY_EN_GB: StringField<JobResponsibilityEntity> = new StringField('category_en_GB', JobResponsibilityEntity, 'Edm.String');
  /**
   * Static representation of the [[categoryEnUs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CATEGORY_EN_US: StringField<JobResponsibilityEntity> = new StringField('category_en_US', JobResponsibilityEntity, 'Edm.String');
  /**
   * Static representation of the [[categoryEsEs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CATEGORY_ES_ES: StringField<JobResponsibilityEntity> = new StringField('category_es_ES', JobResponsibilityEntity, 'Edm.String');
  /**
   * Static representation of the [[categoryEsMx]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CATEGORY_ES_MX: StringField<JobResponsibilityEntity> = new StringField('category_es_MX', JobResponsibilityEntity, 'Edm.String');
  /**
   * Static representation of the [[categoryFrCa]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CATEGORY_FR_CA: StringField<JobResponsibilityEntity> = new StringField('category_fr_CA', JobResponsibilityEntity, 'Edm.String');
  /**
   * Static representation of the [[categoryFrFr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CATEGORY_FR_FR: StringField<JobResponsibilityEntity> = new StringField('category_fr_FR', JobResponsibilityEntity, 'Edm.String');
  /**
   * Static representation of the [[categoryItIt]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CATEGORY_IT_IT: StringField<JobResponsibilityEntity> = new StringField('category_it_IT', JobResponsibilityEntity, 'Edm.String');
  /**
   * Static representation of the [[categoryLocalized]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CATEGORY_LOCALIZED: StringField<JobResponsibilityEntity> = new StringField('category_localized', JobResponsibilityEntity, 'Edm.String');
  /**
   * Static representation of the [[categoryNlNl]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CATEGORY_NL_NL: StringField<JobResponsibilityEntity> = new StringField('category_nl_NL', JobResponsibilityEntity, 'Edm.String');
  /**
   * Static representation of the [[categoryPtBr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CATEGORY_PT_BR: StringField<JobResponsibilityEntity> = new StringField('category_pt_BR', JobResponsibilityEntity, 'Edm.String');
  /**
   * Static representation of the [[categoryZhCn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CATEGORY_ZH_CN: StringField<JobResponsibilityEntity> = new StringField('category_zh_CN', JobResponsibilityEntity, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<JobResponsibilityEntity> = new StringField('createdBy', JobResponsibilityEntity, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<JobResponsibilityEntity> = new DateField('createdDateTime', JobResponsibilityEntity, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[descriptionDeDe]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_DE_DE: StringField<JobResponsibilityEntity> = new StringField('description_de_DE', JobResponsibilityEntity, 'Edm.String');
  /**
   * Static representation of the [[descriptionDefaultValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_DEFAULT_VALUE: StringField<JobResponsibilityEntity> = new StringField('description_defaultValue', JobResponsibilityEntity, 'Edm.String');
  /**
   * Static representation of the [[descriptionEnDebug]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_EN_DEBUG: StringField<JobResponsibilityEntity> = new StringField('description_en_DEBUG', JobResponsibilityEntity, 'Edm.String');
  /**
   * Static representation of the [[descriptionEnGb]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_EN_GB: StringField<JobResponsibilityEntity> = new StringField('description_en_GB', JobResponsibilityEntity, 'Edm.String');
  /**
   * Static representation of the [[descriptionEnUs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_EN_US: StringField<JobResponsibilityEntity> = new StringField('description_en_US', JobResponsibilityEntity, 'Edm.String');
  /**
   * Static representation of the [[descriptionEsEs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_ES_ES: StringField<JobResponsibilityEntity> = new StringField('description_es_ES', JobResponsibilityEntity, 'Edm.String');
  /**
   * Static representation of the [[descriptionEsMx]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_ES_MX: StringField<JobResponsibilityEntity> = new StringField('description_es_MX', JobResponsibilityEntity, 'Edm.String');
  /**
   * Static representation of the [[descriptionFrCa]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_FR_CA: StringField<JobResponsibilityEntity> = new StringField('description_fr_CA', JobResponsibilityEntity, 'Edm.String');
  /**
   * Static representation of the [[descriptionFrFr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_FR_FR: StringField<JobResponsibilityEntity> = new StringField('description_fr_FR', JobResponsibilityEntity, 'Edm.String');
  /**
   * Static representation of the [[descriptionItIt]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_IT_IT: StringField<JobResponsibilityEntity> = new StringField('description_it_IT', JobResponsibilityEntity, 'Edm.String');
  /**
   * Static representation of the [[descriptionLocalized]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_LOCALIZED: StringField<JobResponsibilityEntity> = new StringField('description_localized', JobResponsibilityEntity, 'Edm.String');
  /**
   * Static representation of the [[descriptionNlNl]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_NL_NL: StringField<JobResponsibilityEntity> = new StringField('description_nl_NL', JobResponsibilityEntity, 'Edm.String');
  /**
   * Static representation of the [[descriptionPtBr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_PT_BR: StringField<JobResponsibilityEntity> = new StringField('description_pt_BR', JobResponsibilityEntity, 'Edm.String');
  /**
   * Static representation of the [[descriptionZhCn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_ZH_CN: StringField<JobResponsibilityEntity> = new StringField('description_zh_CN', JobResponsibilityEntity, 'Edm.String');
  /**
   * Static representation of the [[dutyDeDe]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DUTY_DE_DE: StringField<JobResponsibilityEntity> = new StringField('duty_de_DE', JobResponsibilityEntity, 'Edm.String');
  /**
   * Static representation of the [[dutyDefaultValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DUTY_DEFAULT_VALUE: StringField<JobResponsibilityEntity> = new StringField('duty_defaultValue', JobResponsibilityEntity, 'Edm.String');
  /**
   * Static representation of the [[dutyEnDebug]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DUTY_EN_DEBUG: StringField<JobResponsibilityEntity> = new StringField('duty_en_DEBUG', JobResponsibilityEntity, 'Edm.String');
  /**
   * Static representation of the [[dutyEnGb]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DUTY_EN_GB: StringField<JobResponsibilityEntity> = new StringField('duty_en_GB', JobResponsibilityEntity, 'Edm.String');
  /**
   * Static representation of the [[dutyEnUs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DUTY_EN_US: StringField<JobResponsibilityEntity> = new StringField('duty_en_US', JobResponsibilityEntity, 'Edm.String');
  /**
   * Static representation of the [[dutyEsEs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DUTY_ES_ES: StringField<JobResponsibilityEntity> = new StringField('duty_es_ES', JobResponsibilityEntity, 'Edm.String');
  /**
   * Static representation of the [[dutyEsMx]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DUTY_ES_MX: StringField<JobResponsibilityEntity> = new StringField('duty_es_MX', JobResponsibilityEntity, 'Edm.String');
  /**
   * Static representation of the [[dutyFrCa]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DUTY_FR_CA: StringField<JobResponsibilityEntity> = new StringField('duty_fr_CA', JobResponsibilityEntity, 'Edm.String');
  /**
   * Static representation of the [[dutyFrFr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DUTY_FR_FR: StringField<JobResponsibilityEntity> = new StringField('duty_fr_FR', JobResponsibilityEntity, 'Edm.String');
  /**
   * Static representation of the [[dutyItIt]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DUTY_IT_IT: StringField<JobResponsibilityEntity> = new StringField('duty_it_IT', JobResponsibilityEntity, 'Edm.String');
  /**
   * Static representation of the [[dutyLocalized]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DUTY_LOCALIZED: StringField<JobResponsibilityEntity> = new StringField('duty_localized', JobResponsibilityEntity, 'Edm.String');
  /**
   * Static representation of the [[dutyNlNl]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DUTY_NL_NL: StringField<JobResponsibilityEntity> = new StringField('duty_nl_NL', JobResponsibilityEntity, 'Edm.String');
  /**
   * Static representation of the [[dutyPtBr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DUTY_PT_BR: StringField<JobResponsibilityEntity> = new StringField('duty_pt_BR', JobResponsibilityEntity, 'Edm.String');
  /**
   * Static representation of the [[dutyZhCn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DUTY_ZH_CN: StringField<JobResponsibilityEntity> = new StringField('duty_zh_CN', JobResponsibilityEntity, 'Edm.String');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: StringField<JobResponsibilityEntity> = new StringField('externalCode', JobResponsibilityEntity, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<JobResponsibilityEntity> = new StringField('lastModifiedBy', JobResponsibilityEntity, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<JobResponsibilityEntity> = new DateField('lastModifiedDateTime', JobResponsibilityEntity, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[libNameDeDe]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LIB_NAME_DE_DE: StringField<JobResponsibilityEntity> = new StringField('libName_de_DE', JobResponsibilityEntity, 'Edm.String');
  /**
   * Static representation of the [[libNameDefaultValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LIB_NAME_DEFAULT_VALUE: StringField<JobResponsibilityEntity> = new StringField('libName_defaultValue', JobResponsibilityEntity, 'Edm.String');
  /**
   * Static representation of the [[libNameEnDebug]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LIB_NAME_EN_DEBUG: StringField<JobResponsibilityEntity> = new StringField('libName_en_DEBUG', JobResponsibilityEntity, 'Edm.String');
  /**
   * Static representation of the [[libNameEnGb]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LIB_NAME_EN_GB: StringField<JobResponsibilityEntity> = new StringField('libName_en_GB', JobResponsibilityEntity, 'Edm.String');
  /**
   * Static representation of the [[libNameEnUs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LIB_NAME_EN_US: StringField<JobResponsibilityEntity> = new StringField('libName_en_US', JobResponsibilityEntity, 'Edm.String');
  /**
   * Static representation of the [[libNameEsEs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LIB_NAME_ES_ES: StringField<JobResponsibilityEntity> = new StringField('libName_es_ES', JobResponsibilityEntity, 'Edm.String');
  /**
   * Static representation of the [[libNameEsMx]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LIB_NAME_ES_MX: StringField<JobResponsibilityEntity> = new StringField('libName_es_MX', JobResponsibilityEntity, 'Edm.String');
  /**
   * Static representation of the [[libNameFrCa]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LIB_NAME_FR_CA: StringField<JobResponsibilityEntity> = new StringField('libName_fr_CA', JobResponsibilityEntity, 'Edm.String');
  /**
   * Static representation of the [[libNameFrFr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LIB_NAME_FR_FR: StringField<JobResponsibilityEntity> = new StringField('libName_fr_FR', JobResponsibilityEntity, 'Edm.String');
  /**
   * Static representation of the [[libNameItIt]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LIB_NAME_IT_IT: StringField<JobResponsibilityEntity> = new StringField('libName_it_IT', JobResponsibilityEntity, 'Edm.String');
  /**
   * Static representation of the [[libNameLocalized]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LIB_NAME_LOCALIZED: StringField<JobResponsibilityEntity> = new StringField('libName_localized', JobResponsibilityEntity, 'Edm.String');
  /**
   * Static representation of the [[libNameNlNl]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LIB_NAME_NL_NL: StringField<JobResponsibilityEntity> = new StringField('libName_nl_NL', JobResponsibilityEntity, 'Edm.String');
  /**
   * Static representation of the [[libNamePtBr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LIB_NAME_PT_BR: StringField<JobResponsibilityEntity> = new StringField('libName_pt_BR', JobResponsibilityEntity, 'Edm.String');
  /**
   * Static representation of the [[libNameZhCn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LIB_NAME_ZH_CN: StringField<JobResponsibilityEntity> = new StringField('libName_zh_CN', JobResponsibilityEntity, 'Edm.String');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<JobResponsibilityEntity> = new StringField('mdfSystemRecordStatus', JobResponsibilityEntity, 'Edm.String');
  /**
   * Static representation of the [[nameDeDe]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_DE_DE: StringField<JobResponsibilityEntity> = new StringField('name_de_DE', JobResponsibilityEntity, 'Edm.String');
  /**
   * Static representation of the [[nameDefaultValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_DEFAULT_VALUE: StringField<JobResponsibilityEntity> = new StringField('name_defaultValue', JobResponsibilityEntity, 'Edm.String');
  /**
   * Static representation of the [[nameEnDebug]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_EN_DEBUG: StringField<JobResponsibilityEntity> = new StringField('name_en_DEBUG', JobResponsibilityEntity, 'Edm.String');
  /**
   * Static representation of the [[nameEnGb]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_EN_GB: StringField<JobResponsibilityEntity> = new StringField('name_en_GB', JobResponsibilityEntity, 'Edm.String');
  /**
   * Static representation of the [[nameEnUs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_EN_US: StringField<JobResponsibilityEntity> = new StringField('name_en_US', JobResponsibilityEntity, 'Edm.String');
  /**
   * Static representation of the [[nameEsEs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_ES_ES: StringField<JobResponsibilityEntity> = new StringField('name_es_ES', JobResponsibilityEntity, 'Edm.String');
  /**
   * Static representation of the [[nameEsMx]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_ES_MX: StringField<JobResponsibilityEntity> = new StringField('name_es_MX', JobResponsibilityEntity, 'Edm.String');
  /**
   * Static representation of the [[nameFrCa]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_FR_CA: StringField<JobResponsibilityEntity> = new StringField('name_fr_CA', JobResponsibilityEntity, 'Edm.String');
  /**
   * Static representation of the [[nameFrFr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_FR_FR: StringField<JobResponsibilityEntity> = new StringField('name_fr_FR', JobResponsibilityEntity, 'Edm.String');
  /**
   * Static representation of the [[nameItIt]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_IT_IT: StringField<JobResponsibilityEntity> = new StringField('name_it_IT', JobResponsibilityEntity, 'Edm.String');
  /**
   * Static representation of the [[nameLocalized]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_LOCALIZED: StringField<JobResponsibilityEntity> = new StringField('name_localized', JobResponsibilityEntity, 'Edm.String');
  /**
   * Static representation of the [[nameNlNl]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_NL_NL: StringField<JobResponsibilityEntity> = new StringField('name_nl_NL', JobResponsibilityEntity, 'Edm.String');
  /**
   * Static representation of the [[namePtBr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_PT_BR: StringField<JobResponsibilityEntity> = new StringField('name_pt_BR', JobResponsibilityEntity, 'Edm.String');
  /**
   * Static representation of the [[nameZhCn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_ZH_CN: StringField<JobResponsibilityEntity> = new StringField('name_zh_CN', JobResponsibilityEntity, 'Edm.String');
  /**
   * Static representation of the [[status]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS: StringField<JobResponsibilityEntity> = new StringField('status', JobResponsibilityEntity, 'Edm.String');
  /**
   * Static representation of the [[subModule]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUB_MODULE: StringField<JobResponsibilityEntity> = new StringField('subModule', JobResponsibilityEntity, 'Edm.String');
  /**
   * Static representation of the one-to-many navigation property [[categoryTranslationTextNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CATEGORY_TRANSLATION_TEXT_NAV: Link<JobResponsibilityEntity, MdfLocalizedValue> = new Link('categoryTranslationTextNav', JobResponsibilityEntity, MdfLocalizedValue);
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<JobResponsibilityEntity, User> = new OneToOneLink('createdByNav', JobResponsibilityEntity, User);
  /**
   * Static representation of the one-to-many navigation property [[descriptionTranslationTextNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_TRANSLATION_TEXT_NAV: Link<JobResponsibilityEntity, MdfLocalizedValue> = new Link('descriptionTranslationTextNav', JobResponsibilityEntity, MdfLocalizedValue);
  /**
   * Static representation of the one-to-many navigation property [[dutyTranslationTextNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DUTY_TRANSLATION_TEXT_NAV: Link<JobResponsibilityEntity, MdfLocalizedValue> = new Link('dutyTranslationTextNav', JobResponsibilityEntity, MdfLocalizedValue);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<JobResponsibilityEntity, User> = new OneToOneLink('lastModifiedByNav', JobResponsibilityEntity, User);
  /**
   * Static representation of the one-to-many navigation property [[libNameTranslationTextNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LIB_NAME_TRANSLATION_TEXT_NAV: Link<JobResponsibilityEntity, MdfLocalizedValue> = new Link('libNameTranslationTextNav', JobResponsibilityEntity, MdfLocalizedValue);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<JobResponsibilityEntity, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', JobResponsibilityEntity, MdfEnumValue);
  /**
   * Static representation of the one-to-many navigation property [[nameTranslationTextNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_TRANSLATION_TEXT_NAV: Link<JobResponsibilityEntity, MdfLocalizedValue> = new Link('nameTranslationTextNav', JobResponsibilityEntity, MdfLocalizedValue);
  /**
   * Static representation of the one-to-one navigation property [[statusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS_NAV: OneToOneLink<JobResponsibilityEntity, MdfEnumValue> = new OneToOneLink('statusNav', JobResponsibilityEntity, MdfEnumValue);
  /**
   * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WF_REQUEST_NAV: Link<JobResponsibilityEntity, WfRequest> = new Link('wfRequestNav', JobResponsibilityEntity, WfRequest);
  /**
   * All fields of the JobResponsibilityEntity entity.
   */
  export const _allFields: Array<StringField<JobResponsibilityEntity> | DateField<JobResponsibilityEntity> | Link<JobResponsibilityEntity, MdfLocalizedValue> | OneToOneLink<JobResponsibilityEntity, User> | OneToOneLink<JobResponsibilityEntity, MdfEnumValue> | Link<JobResponsibilityEntity, WfRequest>> = [
    JobResponsibilityEntity.CATEGORY_DE_DE,
    JobResponsibilityEntity.CATEGORY_DEFAULT_VALUE,
    JobResponsibilityEntity.CATEGORY_EN_DEBUG,
    JobResponsibilityEntity.CATEGORY_EN_GB,
    JobResponsibilityEntity.CATEGORY_EN_US,
    JobResponsibilityEntity.CATEGORY_ES_ES,
    JobResponsibilityEntity.CATEGORY_ES_MX,
    JobResponsibilityEntity.CATEGORY_FR_CA,
    JobResponsibilityEntity.CATEGORY_FR_FR,
    JobResponsibilityEntity.CATEGORY_IT_IT,
    JobResponsibilityEntity.CATEGORY_LOCALIZED,
    JobResponsibilityEntity.CATEGORY_NL_NL,
    JobResponsibilityEntity.CATEGORY_PT_BR,
    JobResponsibilityEntity.CATEGORY_ZH_CN,
    JobResponsibilityEntity.CREATED_BY,
    JobResponsibilityEntity.CREATED_DATE_TIME,
    JobResponsibilityEntity.DESCRIPTION_DE_DE,
    JobResponsibilityEntity.DESCRIPTION_DEFAULT_VALUE,
    JobResponsibilityEntity.DESCRIPTION_EN_DEBUG,
    JobResponsibilityEntity.DESCRIPTION_EN_GB,
    JobResponsibilityEntity.DESCRIPTION_EN_US,
    JobResponsibilityEntity.DESCRIPTION_ES_ES,
    JobResponsibilityEntity.DESCRIPTION_ES_MX,
    JobResponsibilityEntity.DESCRIPTION_FR_CA,
    JobResponsibilityEntity.DESCRIPTION_FR_FR,
    JobResponsibilityEntity.DESCRIPTION_IT_IT,
    JobResponsibilityEntity.DESCRIPTION_LOCALIZED,
    JobResponsibilityEntity.DESCRIPTION_NL_NL,
    JobResponsibilityEntity.DESCRIPTION_PT_BR,
    JobResponsibilityEntity.DESCRIPTION_ZH_CN,
    JobResponsibilityEntity.DUTY_DE_DE,
    JobResponsibilityEntity.DUTY_DEFAULT_VALUE,
    JobResponsibilityEntity.DUTY_EN_DEBUG,
    JobResponsibilityEntity.DUTY_EN_GB,
    JobResponsibilityEntity.DUTY_EN_US,
    JobResponsibilityEntity.DUTY_ES_ES,
    JobResponsibilityEntity.DUTY_ES_MX,
    JobResponsibilityEntity.DUTY_FR_CA,
    JobResponsibilityEntity.DUTY_FR_FR,
    JobResponsibilityEntity.DUTY_IT_IT,
    JobResponsibilityEntity.DUTY_LOCALIZED,
    JobResponsibilityEntity.DUTY_NL_NL,
    JobResponsibilityEntity.DUTY_PT_BR,
    JobResponsibilityEntity.DUTY_ZH_CN,
    JobResponsibilityEntity.EXTERNAL_CODE,
    JobResponsibilityEntity.LAST_MODIFIED_BY,
    JobResponsibilityEntity.LAST_MODIFIED_DATE_TIME,
    JobResponsibilityEntity.LIB_NAME_DE_DE,
    JobResponsibilityEntity.LIB_NAME_DEFAULT_VALUE,
    JobResponsibilityEntity.LIB_NAME_EN_DEBUG,
    JobResponsibilityEntity.LIB_NAME_EN_GB,
    JobResponsibilityEntity.LIB_NAME_EN_US,
    JobResponsibilityEntity.LIB_NAME_ES_ES,
    JobResponsibilityEntity.LIB_NAME_ES_MX,
    JobResponsibilityEntity.LIB_NAME_FR_CA,
    JobResponsibilityEntity.LIB_NAME_FR_FR,
    JobResponsibilityEntity.LIB_NAME_IT_IT,
    JobResponsibilityEntity.LIB_NAME_LOCALIZED,
    JobResponsibilityEntity.LIB_NAME_NL_NL,
    JobResponsibilityEntity.LIB_NAME_PT_BR,
    JobResponsibilityEntity.LIB_NAME_ZH_CN,
    JobResponsibilityEntity.MDF_SYSTEM_RECORD_STATUS,
    JobResponsibilityEntity.NAME_DE_DE,
    JobResponsibilityEntity.NAME_DEFAULT_VALUE,
    JobResponsibilityEntity.NAME_EN_DEBUG,
    JobResponsibilityEntity.NAME_EN_GB,
    JobResponsibilityEntity.NAME_EN_US,
    JobResponsibilityEntity.NAME_ES_ES,
    JobResponsibilityEntity.NAME_ES_MX,
    JobResponsibilityEntity.NAME_FR_CA,
    JobResponsibilityEntity.NAME_FR_FR,
    JobResponsibilityEntity.NAME_IT_IT,
    JobResponsibilityEntity.NAME_LOCALIZED,
    JobResponsibilityEntity.NAME_NL_NL,
    JobResponsibilityEntity.NAME_PT_BR,
    JobResponsibilityEntity.NAME_ZH_CN,
    JobResponsibilityEntity.STATUS,
    JobResponsibilityEntity.SUB_MODULE,
    JobResponsibilityEntity.CATEGORY_TRANSLATION_TEXT_NAV,
    JobResponsibilityEntity.CREATED_BY_NAV,
    JobResponsibilityEntity.DESCRIPTION_TRANSLATION_TEXT_NAV,
    JobResponsibilityEntity.DUTY_TRANSLATION_TEXT_NAV,
    JobResponsibilityEntity.LAST_MODIFIED_BY_NAV,
    JobResponsibilityEntity.LIB_NAME_TRANSLATION_TEXT_NAV,
    JobResponsibilityEntity.MDF_SYSTEM_RECORD_STATUS_NAV,
    JobResponsibilityEntity.NAME_TRANSLATION_TEXT_NAV,
    JobResponsibilityEntity.STATUS_NAV,
    JobResponsibilityEntity.WF_REQUEST_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<JobResponsibilityEntity> = new AllFields('*', JobResponsibilityEntity);
  /**
   * All key fields of the JobResponsibilityEntity entity.
   */
  export const _keyFields: Array<Selectable<JobResponsibilityEntity>> = [JobResponsibilityEntity.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property JobResponsibilityEntity.
   */
  export const _keys: { [keys: string]: Selectable<JobResponsibilityEntity> } = JobResponsibilityEntity._keyFields.reduce((acc: { [keys: string]: Selectable<JobResponsibilityEntity> }, field: Selectable<JobResponsibilityEntity>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
