/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { JobDescSectionRequestBuilder } from './JobDescSectionRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "JobDescSection" of service "SFOData".
 */
export class JobDescSection extends Entity implements JobDescSectionType {
  /**
   * Technical entity name for JobDescSection.
   */
  static _entityName = 'JobDescSection';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for JobDescSection.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Job Template_GUID.
   * Maximum length: 128.
   */
  jobDescTemplateExternalCode!: string;
  /**
   * bold.
   * @nullable
   */
  bold?: boolean;
  /**
   * boldHeader.
   * @nullable
   */
  boldHeader?: boolean;
  /**
   * bulletType.
   * Maximum length: 255.
   * @nullable
   */
  bulletType?: string;
  /**
   * contentType.
   * Maximum length: 255.
   * @nullable
   */
  contentType?: string;
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
   * externalPosting.
   * @nullable
   */
  externalPosting?: boolean;
  /**
   * fontSizeHeader.
   * @nullable
   */
  fontSizeHeader?: BigNumber;
  /**
   * internalPosting.
   * @nullable
   */
  internalPosting?: boolean;
  /**
   * italic.
   * @nullable
   */
  italic?: boolean;
  /**
   * italicHeader.
   * @nullable
   */
  italicHeader?: boolean;
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
   * multiContents.
   * @nullable
   */
  multiContents?: boolean;
  /**
   * name.
   * Maximum length: 100.
   * @nullable
   */
  nameDeDe?: string;
  /**
   * name.
   * Maximum length: 100.
   * @nullable
   */
  nameDefaultValue?: string;
  /**
   * name.
   * Maximum length: 100.
   * @nullable
   */
  nameEnDebug?: string;
  /**
   * name.
   * Maximum length: 100.
   * @nullable
   */
  nameEnGb?: string;
  /**
   * name.
   * Maximum length: 100.
   * @nullable
   */
  nameEnUs?: string;
  /**
   * name.
   * Maximum length: 100.
   * @nullable
   */
  nameEsEs?: string;
  /**
   * name.
   * Maximum length: 100.
   * @nullable
   */
  nameEsMx?: string;
  /**
   * name.
   * Maximum length: 100.
   * @nullable
   */
  nameFrCa?: string;
  /**
   * name.
   * Maximum length: 100.
   * @nullable
   */
  nameFrFr?: string;
  /**
   * name.
   * Maximum length: 100.
   * @nullable
   */
  nameItIt?: string;
  /**
   * name.
   * Maximum length: 100.
   * @nullable
   */
  nameLocalized?: string;
  /**
   * name.
   * Maximum length: 100.
   * @nullable
   */
  nameNlNl?: string;
  /**
   * name.
   * Maximum length: 100.
   * @nullable
   */
  namePtBr?: string;
  /**
   * name.
   * Maximum length: 100.
   * @nullable
   */
  nameZhCn?: string;
  /**
   * onlyAdmin.
   * @nullable
   */
  onlyAdmin?: boolean;
  /**
   * order.
   * @nullable
   */
  order?: BigNumber;
  /**
   * removable.
   * @nullable
   */
  removable?: boolean;
  /**
   * required.
   * @nullable
   */
  required?: boolean;
  /**
   * showInJobReq.
   * @nullable
   */
  showInJobReq?: boolean;
  /**
   * smallIcon.
   * Maximum length: 255.
   * @nullable
   */
  smallIcon?: string;
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
   * underline.
   * @nullable
   */
  underline?: boolean;
  /**
   * underlineHeader.
   * @nullable
   */
  underlineHeader?: boolean;
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
  nameTranslationTextNav!: MdfLocalizedValue[];
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  statusNav!: MdfEnumValue;

  /**
   * Returns an entity builder to construct instances `JobDescSection`.
   * @returns A builder that constructs instances of entity type `JobDescSection`.
   */
  static builder(): EntityBuilderType<JobDescSection, JobDescSectionTypeForceMandatory> {
    return Entity.entityBuilder(JobDescSection);
  }

  /**
   * Returns a request builder to construct requests for operations on the `JobDescSection` entity type.
   * @returns A `JobDescSection` request builder.
   */
  static requestBuilder(): JobDescSectionRequestBuilder {
    return new JobDescSectionRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobDescSection`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `JobDescSection`.
   */
  static customField(fieldName: string): CustomField<JobDescSection> {
    return Entity.customFieldSelector(fieldName, JobDescSection);
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
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';
import { MdfLocalizedValue, MdfLocalizedValueType } from './MdfLocalizedValue';

export interface JobDescSectionType {
  jobDescTemplateExternalCode: string;
  bold?: boolean;
  boldHeader?: boolean;
  bulletType?: string;
  contentType?: string;
  createdBy?: string;
  createdDateTime?: Moment;
  externalCode: string;
  externalPosting?: boolean;
  fontSizeHeader?: BigNumber;
  internalPosting?: boolean;
  italic?: boolean;
  italicHeader?: boolean;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  mdfSystemRecordStatus?: string;
  multiContents?: boolean;
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
  onlyAdmin?: boolean;
  order?: BigNumber;
  removable?: boolean;
  required?: boolean;
  showInJobReq?: boolean;
  smallIcon?: string;
  status?: string;
  subModule?: string;
  underline?: boolean;
  underlineHeader?: boolean;
  createdByNav: UserType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  nameTranslationTextNav: MdfLocalizedValueType[];
  statusNav: MdfEnumValueType;
}

export interface JobDescSectionTypeForceMandatory {
  jobDescTemplateExternalCode: string;
  bold: boolean;
  boldHeader: boolean;
  bulletType: string;
  contentType: string;
  createdBy: string;
  createdDateTime: Moment;
  externalCode: string;
  externalPosting: boolean;
  fontSizeHeader: BigNumber;
  internalPosting: boolean;
  italic: boolean;
  italicHeader: boolean;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  mdfSystemRecordStatus: string;
  multiContents: boolean;
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
  onlyAdmin: boolean;
  order: BigNumber;
  removable: boolean;
  required: boolean;
  showInJobReq: boolean;
  smallIcon: string;
  status: string;
  subModule: string;
  underline: boolean;
  underlineHeader: boolean;
  createdByNav: UserType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  nameTranslationTextNav: MdfLocalizedValueType[];
  statusNav: MdfEnumValueType;
}

export namespace JobDescSection {
  /**
   * Static representation of the [[jobDescTemplateExternalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_DESC_TEMPLATE_EXTERNAL_CODE: StringField<JobDescSection> = new StringField('JobDescTemplate_externalCode', JobDescSection, 'Edm.String');
  /**
   * Static representation of the [[bold]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BOLD: BooleanField<JobDescSection> = new BooleanField('bold', JobDescSection, 'Edm.Boolean');
  /**
   * Static representation of the [[boldHeader]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BOLD_HEADER: BooleanField<JobDescSection> = new BooleanField('boldHeader', JobDescSection, 'Edm.Boolean');
  /**
   * Static representation of the [[bulletType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BULLET_TYPE: StringField<JobDescSection> = new StringField('bulletType', JobDescSection, 'Edm.String');
  /**
   * Static representation of the [[contentType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONTENT_TYPE: StringField<JobDescSection> = new StringField('contentType', JobDescSection, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<JobDescSection> = new StringField('createdBy', JobDescSection, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<JobDescSection> = new DateField('createdDateTime', JobDescSection, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: StringField<JobDescSection> = new StringField('externalCode', JobDescSection, 'Edm.String');
  /**
   * Static representation of the [[externalPosting]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_POSTING: BooleanField<JobDescSection> = new BooleanField('externalPosting', JobDescSection, 'Edm.Boolean');
  /**
   * Static representation of the [[fontSizeHeader]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FONT_SIZE_HEADER: BigNumberField<JobDescSection> = new BigNumberField('fontSizeHeader', JobDescSection, 'Edm.Int64');
  /**
   * Static representation of the [[internalPosting]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INTERNAL_POSTING: BooleanField<JobDescSection> = new BooleanField('internalPosting', JobDescSection, 'Edm.Boolean');
  /**
   * Static representation of the [[italic]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ITALIC: BooleanField<JobDescSection> = new BooleanField('italic', JobDescSection, 'Edm.Boolean');
  /**
   * Static representation of the [[italicHeader]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ITALIC_HEADER: BooleanField<JobDescSection> = new BooleanField('italicHeader', JobDescSection, 'Edm.Boolean');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<JobDescSection> = new StringField('lastModifiedBy', JobDescSection, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<JobDescSection> = new DateField('lastModifiedDateTime', JobDescSection, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<JobDescSection> = new StringField('mdfSystemRecordStatus', JobDescSection, 'Edm.String');
  /**
   * Static representation of the [[multiContents]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MULTI_CONTENTS: BooleanField<JobDescSection> = new BooleanField('multiContents', JobDescSection, 'Edm.Boolean');
  /**
   * Static representation of the [[nameDeDe]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_DE_DE: StringField<JobDescSection> = new StringField('name_de_DE', JobDescSection, 'Edm.String');
  /**
   * Static representation of the [[nameDefaultValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_DEFAULT_VALUE: StringField<JobDescSection> = new StringField('name_defaultValue', JobDescSection, 'Edm.String');
  /**
   * Static representation of the [[nameEnDebug]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_EN_DEBUG: StringField<JobDescSection> = new StringField('name_en_DEBUG', JobDescSection, 'Edm.String');
  /**
   * Static representation of the [[nameEnGb]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_EN_GB: StringField<JobDescSection> = new StringField('name_en_GB', JobDescSection, 'Edm.String');
  /**
   * Static representation of the [[nameEnUs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_EN_US: StringField<JobDescSection> = new StringField('name_en_US', JobDescSection, 'Edm.String');
  /**
   * Static representation of the [[nameEsEs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_ES_ES: StringField<JobDescSection> = new StringField('name_es_ES', JobDescSection, 'Edm.String');
  /**
   * Static representation of the [[nameEsMx]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_ES_MX: StringField<JobDescSection> = new StringField('name_es_MX', JobDescSection, 'Edm.String');
  /**
   * Static representation of the [[nameFrCa]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_FR_CA: StringField<JobDescSection> = new StringField('name_fr_CA', JobDescSection, 'Edm.String');
  /**
   * Static representation of the [[nameFrFr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_FR_FR: StringField<JobDescSection> = new StringField('name_fr_FR', JobDescSection, 'Edm.String');
  /**
   * Static representation of the [[nameItIt]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_IT_IT: StringField<JobDescSection> = new StringField('name_it_IT', JobDescSection, 'Edm.String');
  /**
   * Static representation of the [[nameLocalized]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_LOCALIZED: StringField<JobDescSection> = new StringField('name_localized', JobDescSection, 'Edm.String');
  /**
   * Static representation of the [[nameNlNl]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_NL_NL: StringField<JobDescSection> = new StringField('name_nl_NL', JobDescSection, 'Edm.String');
  /**
   * Static representation of the [[namePtBr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_PT_BR: StringField<JobDescSection> = new StringField('name_pt_BR', JobDescSection, 'Edm.String');
  /**
   * Static representation of the [[nameZhCn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_ZH_CN: StringField<JobDescSection> = new StringField('name_zh_CN', JobDescSection, 'Edm.String');
  /**
   * Static representation of the [[onlyAdmin]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ONLY_ADMIN: BooleanField<JobDescSection> = new BooleanField('onlyAdmin', JobDescSection, 'Edm.Boolean');
  /**
   * Static representation of the [[order]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ORDER: BigNumberField<JobDescSection> = new BigNumberField('order', JobDescSection, 'Edm.Int64');
  /**
   * Static representation of the [[removable]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REMOVABLE: BooleanField<JobDescSection> = new BooleanField('removable', JobDescSection, 'Edm.Boolean');
  /**
   * Static representation of the [[required]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REQUIRED: BooleanField<JobDescSection> = new BooleanField('required', JobDescSection, 'Edm.Boolean');
  /**
   * Static representation of the [[showInJobReq]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SHOW_IN_JOB_REQ: BooleanField<JobDescSection> = new BooleanField('showInJobReq', JobDescSection, 'Edm.Boolean');
  /**
   * Static representation of the [[smallIcon]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SMALL_ICON: StringField<JobDescSection> = new StringField('smallIcon', JobDescSection, 'Edm.String');
  /**
   * Static representation of the [[status]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS: StringField<JobDescSection> = new StringField('status', JobDescSection, 'Edm.String');
  /**
   * Static representation of the [[subModule]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUB_MODULE: StringField<JobDescSection> = new StringField('subModule', JobDescSection, 'Edm.String');
  /**
   * Static representation of the [[underline]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const UNDERLINE: BooleanField<JobDescSection> = new BooleanField('underline', JobDescSection, 'Edm.Boolean');
  /**
   * Static representation of the [[underlineHeader]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const UNDERLINE_HEADER: BooleanField<JobDescSection> = new BooleanField('underlineHeader', JobDescSection, 'Edm.Boolean');
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<JobDescSection, User> = new OneToOneLink('createdByNav', JobDescSection, User);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<JobDescSection, User> = new OneToOneLink('lastModifiedByNav', JobDescSection, User);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<JobDescSection, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', JobDescSection, MdfEnumValue);
  /**
   * Static representation of the one-to-many navigation property [[nameTranslationTextNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_TRANSLATION_TEXT_NAV: Link<JobDescSection, MdfLocalizedValue> = new Link('nameTranslationTextNav', JobDescSection, MdfLocalizedValue);
  /**
   * Static representation of the one-to-one navigation property [[statusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS_NAV: OneToOneLink<JobDescSection, MdfEnumValue> = new OneToOneLink('statusNav', JobDescSection, MdfEnumValue);
  /**
   * All fields of the JobDescSection entity.
   */
  export const _allFields: Array<StringField<JobDescSection> | BooleanField<JobDescSection> | DateField<JobDescSection> | BigNumberField<JobDescSection> | OneToOneLink<JobDescSection, User> | OneToOneLink<JobDescSection, MdfEnumValue> | Link<JobDescSection, MdfLocalizedValue>> = [
    JobDescSection.JOB_DESC_TEMPLATE_EXTERNAL_CODE,
    JobDescSection.BOLD,
    JobDescSection.BOLD_HEADER,
    JobDescSection.BULLET_TYPE,
    JobDescSection.CONTENT_TYPE,
    JobDescSection.CREATED_BY,
    JobDescSection.CREATED_DATE_TIME,
    JobDescSection.EXTERNAL_CODE,
    JobDescSection.EXTERNAL_POSTING,
    JobDescSection.FONT_SIZE_HEADER,
    JobDescSection.INTERNAL_POSTING,
    JobDescSection.ITALIC,
    JobDescSection.ITALIC_HEADER,
    JobDescSection.LAST_MODIFIED_BY,
    JobDescSection.LAST_MODIFIED_DATE_TIME,
    JobDescSection.MDF_SYSTEM_RECORD_STATUS,
    JobDescSection.MULTI_CONTENTS,
    JobDescSection.NAME_DE_DE,
    JobDescSection.NAME_DEFAULT_VALUE,
    JobDescSection.NAME_EN_DEBUG,
    JobDescSection.NAME_EN_GB,
    JobDescSection.NAME_EN_US,
    JobDescSection.NAME_ES_ES,
    JobDescSection.NAME_ES_MX,
    JobDescSection.NAME_FR_CA,
    JobDescSection.NAME_FR_FR,
    JobDescSection.NAME_IT_IT,
    JobDescSection.NAME_LOCALIZED,
    JobDescSection.NAME_NL_NL,
    JobDescSection.NAME_PT_BR,
    JobDescSection.NAME_ZH_CN,
    JobDescSection.ONLY_ADMIN,
    JobDescSection.ORDER,
    JobDescSection.REMOVABLE,
    JobDescSection.REQUIRED,
    JobDescSection.SHOW_IN_JOB_REQ,
    JobDescSection.SMALL_ICON,
    JobDescSection.STATUS,
    JobDescSection.SUB_MODULE,
    JobDescSection.UNDERLINE,
    JobDescSection.UNDERLINE_HEADER,
    JobDescSection.CREATED_BY_NAV,
    JobDescSection.LAST_MODIFIED_BY_NAV,
    JobDescSection.MDF_SYSTEM_RECORD_STATUS_NAV,
    JobDescSection.NAME_TRANSLATION_TEXT_NAV,
    JobDescSection.STATUS_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<JobDescSection> = new AllFields('*', JobDescSection);
  /**
   * All key fields of the JobDescSection entity.
   */
  export const _keyFields: Array<Selectable<JobDescSection>> = [JobDescSection.JOB_DESC_TEMPLATE_EXTERNAL_CODE, JobDescSection.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property JobDescSection.
   */
  export const _keys: { [keys: string]: Selectable<JobDescSection> } = JobDescSection._keyFields.reduce((acc: { [keys: string]: Selectable<JobDescSection> }, field: Selectable<JobDescSection>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
