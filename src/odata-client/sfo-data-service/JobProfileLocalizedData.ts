/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { JobProfileLocalizedDataRequestBuilder } from './JobProfileLocalizedDataRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "JobProfileLocalizedData" of service "SFOData".
 */
export class JobProfileLocalizedData extends Entity implements JobProfileLocalizedDataType {
  /**
   * Technical entity name for JobProfileLocalizedData.
   */
  static _entityName = 'JobProfileLocalizedData';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for JobProfileLocalizedData.
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
   * desc.
   * Maximum length: 4000.
   * @nullable
   */
  descDeDe?: string;
  /**
   * desc.
   * Maximum length: 4000.
   * @nullable
   */
  descDefaultValue?: string;
  /**
   * desc.
   * Maximum length: 4000.
   * @nullable
   */
  descEnDebug?: string;
  /**
   * desc.
   * Maximum length: 4000.
   * @nullable
   */
  descEnGb?: string;
  /**
   * desc.
   * Maximum length: 4000.
   * @nullable
   */
  descEnUs?: string;
  /**
   * desc.
   * Maximum length: 4000.
   * @nullable
   */
  descEsEs?: string;
  /**
   * desc.
   * Maximum length: 4000.
   * @nullable
   */
  descEsMx?: string;
  /**
   * desc.
   * Maximum length: 4000.
   * @nullable
   */
  descFrCa?: string;
  /**
   * desc.
   * Maximum length: 4000.
   * @nullable
   */
  descFrFr?: string;
  /**
   * desc.
   * Maximum length: 4000.
   * @nullable
   */
  descItIt?: string;
  /**
   * desc.
   * Maximum length: 4000.
   * @nullable
   */
  descLocalized?: string;
  /**
   * desc.
   * Maximum length: 4000.
   * @nullable
   */
  descNlNl?: string;
  /**
   * desc.
   * Maximum length: 4000.
   * @nullable
   */
  descPtBr?: string;
  /**
   * desc.
   * Maximum length: 4000.
   * @nullable
   */
  descZhCn?: string;
  /**
   * externalCode.
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
   * One-to-many navigation property to the [[MdfLocalizedValue]] entity.
   */
  descTranslationTextNav!: MdfLocalizedValue[];
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
   * Returns an entity builder to construct instances `JobProfileLocalizedData`.
   * @returns A builder that constructs instances of entity type `JobProfileLocalizedData`.
   */
  static builder(): EntityBuilderType<JobProfileLocalizedData, JobProfileLocalizedDataTypeForceMandatory> {
    return Entity.entityBuilder(JobProfileLocalizedData);
  }

  /**
   * Returns a request builder to construct requests for operations on the `JobProfileLocalizedData` entity type.
   * @returns A `JobProfileLocalizedData` request builder.
   */
  static requestBuilder(): JobProfileLocalizedDataRequestBuilder {
    return new JobProfileLocalizedDataRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobProfileLocalizedData`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `JobProfileLocalizedData`.
   */
  static customField(fieldName: string): CustomField<JobProfileLocalizedData> {
    return Entity.customFieldSelector(fieldName, JobProfileLocalizedData);
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
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';

export interface JobProfileLocalizedDataType {
  jobProfileExternalCode: string;
  createdBy?: string;
  createdDateTime?: Moment;
  descDeDe?: string;
  descDefaultValue?: string;
  descEnDebug?: string;
  descEnGb?: string;
  descEnUs?: string;
  descEsEs?: string;
  descEsMx?: string;
  descFrCa?: string;
  descFrFr?: string;
  descItIt?: string;
  descLocalized?: string;
  descNlNl?: string;
  descPtBr?: string;
  descZhCn?: string;
  externalCode: string;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  mdfSystemRecordStatus?: string;
  sectionId?: string;
  sectionType?: string;
  status?: string;
  subModule?: string;
  createdByNav: UserType;
  descTranslationTextNav: MdfLocalizedValueType[];
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  statusNav: MdfEnumValueType;
}

export interface JobProfileLocalizedDataTypeForceMandatory {
  jobProfileExternalCode: string;
  createdBy: string;
  createdDateTime: Moment;
  descDeDe: string;
  descDefaultValue: string;
  descEnDebug: string;
  descEnGb: string;
  descEnUs: string;
  descEsEs: string;
  descEsMx: string;
  descFrCa: string;
  descFrFr: string;
  descItIt: string;
  descLocalized: string;
  descNlNl: string;
  descPtBr: string;
  descZhCn: string;
  externalCode: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  mdfSystemRecordStatus: string;
  sectionId: string;
  sectionType: string;
  status: string;
  subModule: string;
  createdByNav: UserType;
  descTranslationTextNav: MdfLocalizedValueType[];
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  statusNav: MdfEnumValueType;
}

export namespace JobProfileLocalizedData {
  /**
   * Static representation of the [[jobProfileExternalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_PROFILE_EXTERNAL_CODE: StringField<JobProfileLocalizedData> = new StringField('JobProfile_externalCode', JobProfileLocalizedData, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<JobProfileLocalizedData> = new StringField('createdBy', JobProfileLocalizedData, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<JobProfileLocalizedData> = new DateField('createdDateTime', JobProfileLocalizedData, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[descDeDe]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESC_DE_DE: StringField<JobProfileLocalizedData> = new StringField('desc_de_DE', JobProfileLocalizedData, 'Edm.String');
  /**
   * Static representation of the [[descDefaultValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESC_DEFAULT_VALUE: StringField<JobProfileLocalizedData> = new StringField('desc_defaultValue', JobProfileLocalizedData, 'Edm.String');
  /**
   * Static representation of the [[descEnDebug]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESC_EN_DEBUG: StringField<JobProfileLocalizedData> = new StringField('desc_en_DEBUG', JobProfileLocalizedData, 'Edm.String');
  /**
   * Static representation of the [[descEnGb]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESC_EN_GB: StringField<JobProfileLocalizedData> = new StringField('desc_en_GB', JobProfileLocalizedData, 'Edm.String');
  /**
   * Static representation of the [[descEnUs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESC_EN_US: StringField<JobProfileLocalizedData> = new StringField('desc_en_US', JobProfileLocalizedData, 'Edm.String');
  /**
   * Static representation of the [[descEsEs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESC_ES_ES: StringField<JobProfileLocalizedData> = new StringField('desc_es_ES', JobProfileLocalizedData, 'Edm.String');
  /**
   * Static representation of the [[descEsMx]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESC_ES_MX: StringField<JobProfileLocalizedData> = new StringField('desc_es_MX', JobProfileLocalizedData, 'Edm.String');
  /**
   * Static representation of the [[descFrCa]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESC_FR_CA: StringField<JobProfileLocalizedData> = new StringField('desc_fr_CA', JobProfileLocalizedData, 'Edm.String');
  /**
   * Static representation of the [[descFrFr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESC_FR_FR: StringField<JobProfileLocalizedData> = new StringField('desc_fr_FR', JobProfileLocalizedData, 'Edm.String');
  /**
   * Static representation of the [[descItIt]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESC_IT_IT: StringField<JobProfileLocalizedData> = new StringField('desc_it_IT', JobProfileLocalizedData, 'Edm.String');
  /**
   * Static representation of the [[descLocalized]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESC_LOCALIZED: StringField<JobProfileLocalizedData> = new StringField('desc_localized', JobProfileLocalizedData, 'Edm.String');
  /**
   * Static representation of the [[descNlNl]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESC_NL_NL: StringField<JobProfileLocalizedData> = new StringField('desc_nl_NL', JobProfileLocalizedData, 'Edm.String');
  /**
   * Static representation of the [[descPtBr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESC_PT_BR: StringField<JobProfileLocalizedData> = new StringField('desc_pt_BR', JobProfileLocalizedData, 'Edm.String');
  /**
   * Static representation of the [[descZhCn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESC_ZH_CN: StringField<JobProfileLocalizedData> = new StringField('desc_zh_CN', JobProfileLocalizedData, 'Edm.String');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: StringField<JobProfileLocalizedData> = new StringField('externalCode', JobProfileLocalizedData, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<JobProfileLocalizedData> = new StringField('lastModifiedBy', JobProfileLocalizedData, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<JobProfileLocalizedData> = new DateField('lastModifiedDateTime', JobProfileLocalizedData, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<JobProfileLocalizedData> = new StringField('mdfSystemRecordStatus', JobProfileLocalizedData, 'Edm.String');
  /**
   * Static representation of the [[sectionId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SECTION_ID: StringField<JobProfileLocalizedData> = new StringField('sectionId', JobProfileLocalizedData, 'Edm.String');
  /**
   * Static representation of the [[sectionType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SECTION_TYPE: StringField<JobProfileLocalizedData> = new StringField('sectionType', JobProfileLocalizedData, 'Edm.String');
  /**
   * Static representation of the [[status]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS: StringField<JobProfileLocalizedData> = new StringField('status', JobProfileLocalizedData, 'Edm.String');
  /**
   * Static representation of the [[subModule]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUB_MODULE: StringField<JobProfileLocalizedData> = new StringField('subModule', JobProfileLocalizedData, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<JobProfileLocalizedData, User> = new OneToOneLink('createdByNav', JobProfileLocalizedData, User);
  /**
   * Static representation of the one-to-many navigation property [[descTranslationTextNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESC_TRANSLATION_TEXT_NAV: Link<JobProfileLocalizedData, MdfLocalizedValue> = new Link('descTranslationTextNav', JobProfileLocalizedData, MdfLocalizedValue);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<JobProfileLocalizedData, User> = new OneToOneLink('lastModifiedByNav', JobProfileLocalizedData, User);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<JobProfileLocalizedData, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', JobProfileLocalizedData, MdfEnumValue);
  /**
   * Static representation of the one-to-one navigation property [[statusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS_NAV: OneToOneLink<JobProfileLocalizedData, MdfEnumValue> = new OneToOneLink('statusNav', JobProfileLocalizedData, MdfEnumValue);
  /**
   * All fields of the JobProfileLocalizedData entity.
   */
  export const _allFields: Array<StringField<JobProfileLocalizedData> | DateField<JobProfileLocalizedData> | OneToOneLink<JobProfileLocalizedData, User> | Link<JobProfileLocalizedData, MdfLocalizedValue> | OneToOneLink<JobProfileLocalizedData, MdfEnumValue>> = [
    JobProfileLocalizedData.JOB_PROFILE_EXTERNAL_CODE,
    JobProfileLocalizedData.CREATED_BY,
    JobProfileLocalizedData.CREATED_DATE_TIME,
    JobProfileLocalizedData.DESC_DE_DE,
    JobProfileLocalizedData.DESC_DEFAULT_VALUE,
    JobProfileLocalizedData.DESC_EN_DEBUG,
    JobProfileLocalizedData.DESC_EN_GB,
    JobProfileLocalizedData.DESC_EN_US,
    JobProfileLocalizedData.DESC_ES_ES,
    JobProfileLocalizedData.DESC_ES_MX,
    JobProfileLocalizedData.DESC_FR_CA,
    JobProfileLocalizedData.DESC_FR_FR,
    JobProfileLocalizedData.DESC_IT_IT,
    JobProfileLocalizedData.DESC_LOCALIZED,
    JobProfileLocalizedData.DESC_NL_NL,
    JobProfileLocalizedData.DESC_PT_BR,
    JobProfileLocalizedData.DESC_ZH_CN,
    JobProfileLocalizedData.EXTERNAL_CODE,
    JobProfileLocalizedData.LAST_MODIFIED_BY,
    JobProfileLocalizedData.LAST_MODIFIED_DATE_TIME,
    JobProfileLocalizedData.MDF_SYSTEM_RECORD_STATUS,
    JobProfileLocalizedData.SECTION_ID,
    JobProfileLocalizedData.SECTION_TYPE,
    JobProfileLocalizedData.STATUS,
    JobProfileLocalizedData.SUB_MODULE,
    JobProfileLocalizedData.CREATED_BY_NAV,
    JobProfileLocalizedData.DESC_TRANSLATION_TEXT_NAV,
    JobProfileLocalizedData.LAST_MODIFIED_BY_NAV,
    JobProfileLocalizedData.MDF_SYSTEM_RECORD_STATUS_NAV,
    JobProfileLocalizedData.STATUS_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<JobProfileLocalizedData> = new AllFields('*', JobProfileLocalizedData);
  /**
   * All key fields of the JobProfileLocalizedData entity.
   */
  export const _keyFields: Array<Selectable<JobProfileLocalizedData>> = [JobProfileLocalizedData.JOB_PROFILE_EXTERNAL_CODE, JobProfileLocalizedData.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property JobProfileLocalizedData.
   */
  export const _keys: { [keys: string]: Selectable<JobProfileLocalizedData> } = JobProfileLocalizedData._keyFields.reduce((acc: { [keys: string]: Selectable<JobProfileLocalizedData> }, field: Selectable<JobProfileLocalizedData>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
