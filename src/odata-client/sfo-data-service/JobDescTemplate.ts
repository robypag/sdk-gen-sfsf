/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { JobDescTemplateRequestBuilder } from './JobDescTemplateRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "JobDescTemplate" of service "SFOData".
 */
export class JobDescTemplate extends Entity implements JobDescTemplateType {
  /**
   * Technical entity name for JobDescTemplate.
   */
  static _entityName = 'JobDescTemplate';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for JobDescTemplate.
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
   * GUID.
   * Maximum length: 128.
   */
  externalCode!: string;
  /**
   * footer.
   * Maximum length: 50.
   * @nullable
   */
  footerDeDe?: string;
  /**
   * footer.
   * Maximum length: 50.
   * @nullable
   */
  footerDefaultValue?: string;
  /**
   * footer.
   * Maximum length: 50.
   * @nullable
   */
  footerEnDebug?: string;
  /**
   * footer.
   * Maximum length: 50.
   * @nullable
   */
  footerEnGb?: string;
  /**
   * footer.
   * Maximum length: 50.
   * @nullable
   */
  footerEnUs?: string;
  /**
   * footer.
   * Maximum length: 50.
   * @nullable
   */
  footerEsEs?: string;
  /**
   * footer.
   * Maximum length: 50.
   * @nullable
   */
  footerEsMx?: string;
  /**
   * footer.
   * Maximum length: 50.
   * @nullable
   */
  footerFrCa?: string;
  /**
   * footer.
   * Maximum length: 50.
   * @nullable
   */
  footerFrFr?: string;
  /**
   * footer.
   * Maximum length: 50.
   * @nullable
   */
  footerItIt?: string;
  /**
   * footer.
   * Maximum length: 50.
   * @nullable
   */
  footerLocalized?: string;
  /**
   * footer.
   * Maximum length: 50.
   * @nullable
   */
  footerNlNl?: string;
  /**
   * footer.
   * Maximum length: 50.
   * @nullable
   */
  footerPtBr?: string;
  /**
   * footer.
   * Maximum length: 50.
   * @nullable
   */
  footerZhCn?: string;
  /**
   * header.
   * Maximum length: 50.
   * @nullable
   */
  headerDeDe?: string;
  /**
   * header.
   * Maximum length: 50.
   * @nullable
   */
  headerDefaultValue?: string;
  /**
   * header.
   * Maximum length: 50.
   * @nullable
   */
  headerEnDebug?: string;
  /**
   * header.
   * Maximum length: 50.
   * @nullable
   */
  headerEnGb?: string;
  /**
   * header.
   * Maximum length: 50.
   * @nullable
   */
  headerEnUs?: string;
  /**
   * header.
   * Maximum length: 50.
   * @nullable
   */
  headerEsEs?: string;
  /**
   * header.
   * Maximum length: 50.
   * @nullable
   */
  headerEsMx?: string;
  /**
   * header.
   * Maximum length: 50.
   * @nullable
   */
  headerFrCa?: string;
  /**
   * header.
   * Maximum length: 50.
   * @nullable
   */
  headerFrFr?: string;
  /**
   * header.
   * Maximum length: 50.
   * @nullable
   */
  headerItIt?: string;
  /**
   * header.
   * Maximum length: 50.
   * @nullable
   */
  headerLocalized?: string;
  /**
   * header.
   * Maximum length: 50.
   * @nullable
   */
  headerNlNl?: string;
  /**
   * header.
   * Maximum length: 50.
   * @nullable
   */
  headerPtBr?: string;
  /**
   * header.
   * Maximum length: 50.
   * @nullable
   */
  headerZhCn?: string;
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
   * Template Name.
   * Maximum length: 100.
   * @nullable
   */
  titleDeDe?: string;
  /**
   * Template Name.
   * Maximum length: 100.
   * @nullable
   */
  titleDefaultValue?: string;
  /**
   * Template Name.
   * Maximum length: 100.
   * @nullable
   */
  titleEnDebug?: string;
  /**
   * Template Name.
   * Maximum length: 100.
   * @nullable
   */
  titleEnGb?: string;
  /**
   * Template Name.
   * Maximum length: 100.
   * @nullable
   */
  titleEnUs?: string;
  /**
   * Template Name.
   * Maximum length: 100.
   * @nullable
   */
  titleEsEs?: string;
  /**
   * Template Name.
   * Maximum length: 100.
   * @nullable
   */
  titleEsMx?: string;
  /**
   * Template Name.
   * Maximum length: 100.
   * @nullable
   */
  titleFrCa?: string;
  /**
   * Template Name.
   * Maximum length: 100.
   * @nullable
   */
  titleFrFr?: string;
  /**
   * Template Name.
   * Maximum length: 100.
   * @nullable
   */
  titleItIt?: string;
  /**
   * Template Name.
   * Maximum length: 100.
   * @nullable
   */
  titleLocalized?: string;
  /**
   * Template Name.
   * Maximum length: 100.
   * @nullable
   */
  titleNlNl?: string;
  /**
   * Template Name.
   * Maximum length: 100.
   * @nullable
   */
  titlePtBr?: string;
  /**
   * Template Name.
   * Maximum length: 100.
   * @nullable
   */
  titleZhCn?: string;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  createdByNav!: User;
  /**
   * One-to-many navigation property to the [[MdfLocalizedValue]] entity.
   */
  footerTranslationTextNav!: MdfLocalizedValue[];
  /**
   * One-to-many navigation property to the [[MdfLocalizedValue]] entity.
   */
  headerTranslationTextNav!: MdfLocalizedValue[];
  /**
   * One-to-many navigation property to the [[JdTemplateFamilyMapping]] entity.
   */
  jdFamilyMappings!: JdTemplateFamilyMapping[];
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  lastModifiedByNav!: User;
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  mdfSystemRecordStatusNav!: MdfEnumValue;
  /**
   * One-to-many navigation property to the [[JobDescSection]] entity.
   */
  sections!: JobDescSection[];
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  statusNav!: MdfEnumValue;
  /**
   * One-to-many navigation property to the [[MdfLocalizedValue]] entity.
   */
  titleTranslationTextNav!: MdfLocalizedValue[];
  /**
   * One-to-many navigation property to the [[WfRequest]] entity.
   */
  wfRequestNav!: WfRequest[];

  /**
   * Returns an entity builder to construct instances `JobDescTemplate`.
   * @returns A builder that constructs instances of entity type `JobDescTemplate`.
   */
  static builder(): EntityBuilderType<JobDescTemplate, JobDescTemplateTypeForceMandatory> {
    return Entity.entityBuilder(JobDescTemplate);
  }

  /**
   * Returns a request builder to construct requests for operations on the `JobDescTemplate` entity type.
   * @returns A `JobDescTemplate` request builder.
   */
  static requestBuilder(): JobDescTemplateRequestBuilder {
    return new JobDescTemplateRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobDescTemplate`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `JobDescTemplate`.
   */
  static customField(fieldName: string): CustomField<JobDescTemplate> {
    return Entity.customFieldSelector(fieldName, JobDescTemplate);
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
import { JdTemplateFamilyMapping, JdTemplateFamilyMappingType } from './JdTemplateFamilyMapping';
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';
import { JobDescSection, JobDescSectionType } from './JobDescSection';
import { WfRequest, WfRequestType } from './WfRequest';

export interface JobDescTemplateType {
  createdBy?: string;
  createdDateTime?: Moment;
  externalCode: string;
  footerDeDe?: string;
  footerDefaultValue?: string;
  footerEnDebug?: string;
  footerEnGb?: string;
  footerEnUs?: string;
  footerEsEs?: string;
  footerEsMx?: string;
  footerFrCa?: string;
  footerFrFr?: string;
  footerItIt?: string;
  footerLocalized?: string;
  footerNlNl?: string;
  footerPtBr?: string;
  footerZhCn?: string;
  headerDeDe?: string;
  headerDefaultValue?: string;
  headerEnDebug?: string;
  headerEnGb?: string;
  headerEnUs?: string;
  headerEsEs?: string;
  headerEsMx?: string;
  headerFrCa?: string;
  headerFrFr?: string;
  headerItIt?: string;
  headerLocalized?: string;
  headerNlNl?: string;
  headerPtBr?: string;
  headerZhCn?: string;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  mdfSystemRecordStatus?: string;
  status?: string;
  subModule?: string;
  titleDeDe?: string;
  titleDefaultValue?: string;
  titleEnDebug?: string;
  titleEnGb?: string;
  titleEnUs?: string;
  titleEsEs?: string;
  titleEsMx?: string;
  titleFrCa?: string;
  titleFrFr?: string;
  titleItIt?: string;
  titleLocalized?: string;
  titleNlNl?: string;
  titlePtBr?: string;
  titleZhCn?: string;
  createdByNav: UserType;
  footerTranslationTextNav: MdfLocalizedValueType[];
  headerTranslationTextNav: MdfLocalizedValueType[];
  jdFamilyMappings: JdTemplateFamilyMappingType[];
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  sections: JobDescSectionType[];
  statusNav: MdfEnumValueType;
  titleTranslationTextNav: MdfLocalizedValueType[];
  wfRequestNav: WfRequestType[];
}

export interface JobDescTemplateTypeForceMandatory {
  createdBy: string;
  createdDateTime: Moment;
  externalCode: string;
  footerDeDe: string;
  footerDefaultValue: string;
  footerEnDebug: string;
  footerEnGb: string;
  footerEnUs: string;
  footerEsEs: string;
  footerEsMx: string;
  footerFrCa: string;
  footerFrFr: string;
  footerItIt: string;
  footerLocalized: string;
  footerNlNl: string;
  footerPtBr: string;
  footerZhCn: string;
  headerDeDe: string;
  headerDefaultValue: string;
  headerEnDebug: string;
  headerEnGb: string;
  headerEnUs: string;
  headerEsEs: string;
  headerEsMx: string;
  headerFrCa: string;
  headerFrFr: string;
  headerItIt: string;
  headerLocalized: string;
  headerNlNl: string;
  headerPtBr: string;
  headerZhCn: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  mdfSystemRecordStatus: string;
  status: string;
  subModule: string;
  titleDeDe: string;
  titleDefaultValue: string;
  titleEnDebug: string;
  titleEnGb: string;
  titleEnUs: string;
  titleEsEs: string;
  titleEsMx: string;
  titleFrCa: string;
  titleFrFr: string;
  titleItIt: string;
  titleLocalized: string;
  titleNlNl: string;
  titlePtBr: string;
  titleZhCn: string;
  createdByNav: UserType;
  footerTranslationTextNav: MdfLocalizedValueType[];
  headerTranslationTextNav: MdfLocalizedValueType[];
  jdFamilyMappings: JdTemplateFamilyMappingType[];
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  sections: JobDescSectionType[];
  statusNav: MdfEnumValueType;
  titleTranslationTextNav: MdfLocalizedValueType[];
  wfRequestNav: WfRequestType[];
}

export namespace JobDescTemplate {
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<JobDescTemplate> = new StringField('createdBy', JobDescTemplate, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<JobDescTemplate> = new DateField('createdDateTime', JobDescTemplate, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: StringField<JobDescTemplate> = new StringField('externalCode', JobDescTemplate, 'Edm.String');
  /**
   * Static representation of the [[footerDeDe]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FOOTER_DE_DE: StringField<JobDescTemplate> = new StringField('footer_de_DE', JobDescTemplate, 'Edm.String');
  /**
   * Static representation of the [[footerDefaultValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FOOTER_DEFAULT_VALUE: StringField<JobDescTemplate> = new StringField('footer_defaultValue', JobDescTemplate, 'Edm.String');
  /**
   * Static representation of the [[footerEnDebug]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FOOTER_EN_DEBUG: StringField<JobDescTemplate> = new StringField('footer_en_DEBUG', JobDescTemplate, 'Edm.String');
  /**
   * Static representation of the [[footerEnGb]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FOOTER_EN_GB: StringField<JobDescTemplate> = new StringField('footer_en_GB', JobDescTemplate, 'Edm.String');
  /**
   * Static representation of the [[footerEnUs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FOOTER_EN_US: StringField<JobDescTemplate> = new StringField('footer_en_US', JobDescTemplate, 'Edm.String');
  /**
   * Static representation of the [[footerEsEs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FOOTER_ES_ES: StringField<JobDescTemplate> = new StringField('footer_es_ES', JobDescTemplate, 'Edm.String');
  /**
   * Static representation of the [[footerEsMx]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FOOTER_ES_MX: StringField<JobDescTemplate> = new StringField('footer_es_MX', JobDescTemplate, 'Edm.String');
  /**
   * Static representation of the [[footerFrCa]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FOOTER_FR_CA: StringField<JobDescTemplate> = new StringField('footer_fr_CA', JobDescTemplate, 'Edm.String');
  /**
   * Static representation of the [[footerFrFr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FOOTER_FR_FR: StringField<JobDescTemplate> = new StringField('footer_fr_FR', JobDescTemplate, 'Edm.String');
  /**
   * Static representation of the [[footerItIt]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FOOTER_IT_IT: StringField<JobDescTemplate> = new StringField('footer_it_IT', JobDescTemplate, 'Edm.String');
  /**
   * Static representation of the [[footerLocalized]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FOOTER_LOCALIZED: StringField<JobDescTemplate> = new StringField('footer_localized', JobDescTemplate, 'Edm.String');
  /**
   * Static representation of the [[footerNlNl]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FOOTER_NL_NL: StringField<JobDescTemplate> = new StringField('footer_nl_NL', JobDescTemplate, 'Edm.String');
  /**
   * Static representation of the [[footerPtBr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FOOTER_PT_BR: StringField<JobDescTemplate> = new StringField('footer_pt_BR', JobDescTemplate, 'Edm.String');
  /**
   * Static representation of the [[footerZhCn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FOOTER_ZH_CN: StringField<JobDescTemplate> = new StringField('footer_zh_CN', JobDescTemplate, 'Edm.String');
  /**
   * Static representation of the [[headerDeDe]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HEADER_DE_DE: StringField<JobDescTemplate> = new StringField('header_de_DE', JobDescTemplate, 'Edm.String');
  /**
   * Static representation of the [[headerDefaultValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HEADER_DEFAULT_VALUE: StringField<JobDescTemplate> = new StringField('header_defaultValue', JobDescTemplate, 'Edm.String');
  /**
   * Static representation of the [[headerEnDebug]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HEADER_EN_DEBUG: StringField<JobDescTemplate> = new StringField('header_en_DEBUG', JobDescTemplate, 'Edm.String');
  /**
   * Static representation of the [[headerEnGb]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HEADER_EN_GB: StringField<JobDescTemplate> = new StringField('header_en_GB', JobDescTemplate, 'Edm.String');
  /**
   * Static representation of the [[headerEnUs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HEADER_EN_US: StringField<JobDescTemplate> = new StringField('header_en_US', JobDescTemplate, 'Edm.String');
  /**
   * Static representation of the [[headerEsEs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HEADER_ES_ES: StringField<JobDescTemplate> = new StringField('header_es_ES', JobDescTemplate, 'Edm.String');
  /**
   * Static representation of the [[headerEsMx]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HEADER_ES_MX: StringField<JobDescTemplate> = new StringField('header_es_MX', JobDescTemplate, 'Edm.String');
  /**
   * Static representation of the [[headerFrCa]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HEADER_FR_CA: StringField<JobDescTemplate> = new StringField('header_fr_CA', JobDescTemplate, 'Edm.String');
  /**
   * Static representation of the [[headerFrFr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HEADER_FR_FR: StringField<JobDescTemplate> = new StringField('header_fr_FR', JobDescTemplate, 'Edm.String');
  /**
   * Static representation of the [[headerItIt]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HEADER_IT_IT: StringField<JobDescTemplate> = new StringField('header_it_IT', JobDescTemplate, 'Edm.String');
  /**
   * Static representation of the [[headerLocalized]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HEADER_LOCALIZED: StringField<JobDescTemplate> = new StringField('header_localized', JobDescTemplate, 'Edm.String');
  /**
   * Static representation of the [[headerNlNl]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HEADER_NL_NL: StringField<JobDescTemplate> = new StringField('header_nl_NL', JobDescTemplate, 'Edm.String');
  /**
   * Static representation of the [[headerPtBr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HEADER_PT_BR: StringField<JobDescTemplate> = new StringField('header_pt_BR', JobDescTemplate, 'Edm.String');
  /**
   * Static representation of the [[headerZhCn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HEADER_ZH_CN: StringField<JobDescTemplate> = new StringField('header_zh_CN', JobDescTemplate, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<JobDescTemplate> = new StringField('lastModifiedBy', JobDescTemplate, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<JobDescTemplate> = new DateField('lastModifiedDateTime', JobDescTemplate, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<JobDescTemplate> = new StringField('mdfSystemRecordStatus', JobDescTemplate, 'Edm.String');
  /**
   * Static representation of the [[status]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS: StringField<JobDescTemplate> = new StringField('status', JobDescTemplate, 'Edm.String');
  /**
   * Static representation of the [[subModule]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUB_MODULE: StringField<JobDescTemplate> = new StringField('subModule', JobDescTemplate, 'Edm.String');
  /**
   * Static representation of the [[titleDeDe]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TITLE_DE_DE: StringField<JobDescTemplate> = new StringField('title_de_DE', JobDescTemplate, 'Edm.String');
  /**
   * Static representation of the [[titleDefaultValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TITLE_DEFAULT_VALUE: StringField<JobDescTemplate> = new StringField('title_defaultValue', JobDescTemplate, 'Edm.String');
  /**
   * Static representation of the [[titleEnDebug]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TITLE_EN_DEBUG: StringField<JobDescTemplate> = new StringField('title_en_DEBUG', JobDescTemplate, 'Edm.String');
  /**
   * Static representation of the [[titleEnGb]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TITLE_EN_GB: StringField<JobDescTemplate> = new StringField('title_en_GB', JobDescTemplate, 'Edm.String');
  /**
   * Static representation of the [[titleEnUs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TITLE_EN_US: StringField<JobDescTemplate> = new StringField('title_en_US', JobDescTemplate, 'Edm.String');
  /**
   * Static representation of the [[titleEsEs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TITLE_ES_ES: StringField<JobDescTemplate> = new StringField('title_es_ES', JobDescTemplate, 'Edm.String');
  /**
   * Static representation of the [[titleEsMx]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TITLE_ES_MX: StringField<JobDescTemplate> = new StringField('title_es_MX', JobDescTemplate, 'Edm.String');
  /**
   * Static representation of the [[titleFrCa]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TITLE_FR_CA: StringField<JobDescTemplate> = new StringField('title_fr_CA', JobDescTemplate, 'Edm.String');
  /**
   * Static representation of the [[titleFrFr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TITLE_FR_FR: StringField<JobDescTemplate> = new StringField('title_fr_FR', JobDescTemplate, 'Edm.String');
  /**
   * Static representation of the [[titleItIt]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TITLE_IT_IT: StringField<JobDescTemplate> = new StringField('title_it_IT', JobDescTemplate, 'Edm.String');
  /**
   * Static representation of the [[titleLocalized]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TITLE_LOCALIZED: StringField<JobDescTemplate> = new StringField('title_localized', JobDescTemplate, 'Edm.String');
  /**
   * Static representation of the [[titleNlNl]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TITLE_NL_NL: StringField<JobDescTemplate> = new StringField('title_nl_NL', JobDescTemplate, 'Edm.String');
  /**
   * Static representation of the [[titlePtBr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TITLE_PT_BR: StringField<JobDescTemplate> = new StringField('title_pt_BR', JobDescTemplate, 'Edm.String');
  /**
   * Static representation of the [[titleZhCn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TITLE_ZH_CN: StringField<JobDescTemplate> = new StringField('title_zh_CN', JobDescTemplate, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<JobDescTemplate, User> = new OneToOneLink('createdByNav', JobDescTemplate, User);
  /**
   * Static representation of the one-to-many navigation property [[footerTranslationTextNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FOOTER_TRANSLATION_TEXT_NAV: Link<JobDescTemplate, MdfLocalizedValue> = new Link('footerTranslationTextNav', JobDescTemplate, MdfLocalizedValue);
  /**
   * Static representation of the one-to-many navigation property [[headerTranslationTextNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HEADER_TRANSLATION_TEXT_NAV: Link<JobDescTemplate, MdfLocalizedValue> = new Link('headerTranslationTextNav', JobDescTemplate, MdfLocalizedValue);
  /**
   * Static representation of the one-to-many navigation property [[jdFamilyMappings]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JD_FAMILY_MAPPINGS: Link<JobDescTemplate, JdTemplateFamilyMapping> = new Link('jdFamilyMappings', JobDescTemplate, JdTemplateFamilyMapping);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<JobDescTemplate, User> = new OneToOneLink('lastModifiedByNav', JobDescTemplate, User);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<JobDescTemplate, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', JobDescTemplate, MdfEnumValue);
  /**
   * Static representation of the one-to-many navigation property [[sections]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SECTIONS: Link<JobDescTemplate, JobDescSection> = new Link('sections', JobDescTemplate, JobDescSection);
  /**
   * Static representation of the one-to-one navigation property [[statusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS_NAV: OneToOneLink<JobDescTemplate, MdfEnumValue> = new OneToOneLink('statusNav', JobDescTemplate, MdfEnumValue);
  /**
   * Static representation of the one-to-many navigation property [[titleTranslationTextNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TITLE_TRANSLATION_TEXT_NAV: Link<JobDescTemplate, MdfLocalizedValue> = new Link('titleTranslationTextNav', JobDescTemplate, MdfLocalizedValue);
  /**
   * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WF_REQUEST_NAV: Link<JobDescTemplate, WfRequest> = new Link('wfRequestNav', JobDescTemplate, WfRequest);
  /**
   * All fields of the JobDescTemplate entity.
   */
  export const _allFields: Array<StringField<JobDescTemplate> | DateField<JobDescTemplate> | OneToOneLink<JobDescTemplate, User> | Link<JobDescTemplate, MdfLocalizedValue> | Link<JobDescTemplate, JdTemplateFamilyMapping> | OneToOneLink<JobDescTemplate, MdfEnumValue> | Link<JobDescTemplate, JobDescSection> | Link<JobDescTemplate, WfRequest>> = [
    JobDescTemplate.CREATED_BY,
    JobDescTemplate.CREATED_DATE_TIME,
    JobDescTemplate.EXTERNAL_CODE,
    JobDescTemplate.FOOTER_DE_DE,
    JobDescTemplate.FOOTER_DEFAULT_VALUE,
    JobDescTemplate.FOOTER_EN_DEBUG,
    JobDescTemplate.FOOTER_EN_GB,
    JobDescTemplate.FOOTER_EN_US,
    JobDescTemplate.FOOTER_ES_ES,
    JobDescTemplate.FOOTER_ES_MX,
    JobDescTemplate.FOOTER_FR_CA,
    JobDescTemplate.FOOTER_FR_FR,
    JobDescTemplate.FOOTER_IT_IT,
    JobDescTemplate.FOOTER_LOCALIZED,
    JobDescTemplate.FOOTER_NL_NL,
    JobDescTemplate.FOOTER_PT_BR,
    JobDescTemplate.FOOTER_ZH_CN,
    JobDescTemplate.HEADER_DE_DE,
    JobDescTemplate.HEADER_DEFAULT_VALUE,
    JobDescTemplate.HEADER_EN_DEBUG,
    JobDescTemplate.HEADER_EN_GB,
    JobDescTemplate.HEADER_EN_US,
    JobDescTemplate.HEADER_ES_ES,
    JobDescTemplate.HEADER_ES_MX,
    JobDescTemplate.HEADER_FR_CA,
    JobDescTemplate.HEADER_FR_FR,
    JobDescTemplate.HEADER_IT_IT,
    JobDescTemplate.HEADER_LOCALIZED,
    JobDescTemplate.HEADER_NL_NL,
    JobDescTemplate.HEADER_PT_BR,
    JobDescTemplate.HEADER_ZH_CN,
    JobDescTemplate.LAST_MODIFIED_BY,
    JobDescTemplate.LAST_MODIFIED_DATE_TIME,
    JobDescTemplate.MDF_SYSTEM_RECORD_STATUS,
    JobDescTemplate.STATUS,
    JobDescTemplate.SUB_MODULE,
    JobDescTemplate.TITLE_DE_DE,
    JobDescTemplate.TITLE_DEFAULT_VALUE,
    JobDescTemplate.TITLE_EN_DEBUG,
    JobDescTemplate.TITLE_EN_GB,
    JobDescTemplate.TITLE_EN_US,
    JobDescTemplate.TITLE_ES_ES,
    JobDescTemplate.TITLE_ES_MX,
    JobDescTemplate.TITLE_FR_CA,
    JobDescTemplate.TITLE_FR_FR,
    JobDescTemplate.TITLE_IT_IT,
    JobDescTemplate.TITLE_LOCALIZED,
    JobDescTemplate.TITLE_NL_NL,
    JobDescTemplate.TITLE_PT_BR,
    JobDescTemplate.TITLE_ZH_CN,
    JobDescTemplate.CREATED_BY_NAV,
    JobDescTemplate.FOOTER_TRANSLATION_TEXT_NAV,
    JobDescTemplate.HEADER_TRANSLATION_TEXT_NAV,
    JobDescTemplate.JD_FAMILY_MAPPINGS,
    JobDescTemplate.LAST_MODIFIED_BY_NAV,
    JobDescTemplate.MDF_SYSTEM_RECORD_STATUS_NAV,
    JobDescTemplate.SECTIONS,
    JobDescTemplate.STATUS_NAV,
    JobDescTemplate.TITLE_TRANSLATION_TEXT_NAV,
    JobDescTemplate.WF_REQUEST_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<JobDescTemplate> = new AllFields('*', JobDescTemplate);
  /**
   * All key fields of the JobDescTemplate entity.
   */
  export const _keyFields: Array<Selectable<JobDescTemplate>> = [JobDescTemplate.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property JobDescTemplate.
   */
  export const _keys: { [keys: string]: Selectable<JobDescTemplate> } = JobDescTemplate._keyFields.reduce((acc: { [keys: string]: Selectable<JobDescTemplate> }, field: Selectable<JobDescTemplate>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
