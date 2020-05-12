/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RelevantIndustryEntityRequestBuilder } from './RelevantIndustryEntityRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "RelevantIndustryEntity" of service "SFOData".
 */
export class RelevantIndustryEntity extends Entity implements RelevantIndustryEntityType {
  /**
   * Technical entity name for RelevantIndustryEntity.
   */
  static _entityName = 'RelevantIndustryEntity';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for RelevantIndustryEntity.
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
   * Industry.
   * Maximum length: 256.
   * @nullable
   */
  industryDeDe?: string;
  /**
   * Industry.
   * Maximum length: 256.
   * @nullable
   */
  industryDefaultValue?: string;
  /**
   * Industry.
   * Maximum length: 256.
   * @nullable
   */
  industryEnDebug?: string;
  /**
   * Industry.
   * Maximum length: 256.
   * @nullable
   */
  industryEnGb?: string;
  /**
   * Industry.
   * Maximum length: 256.
   * @nullable
   */
  industryEnUs?: string;
  /**
   * Industry.
   * Maximum length: 256.
   * @nullable
   */
  industryEsEs?: string;
  /**
   * Industry.
   * Maximum length: 256.
   * @nullable
   */
  industryEsMx?: string;
  /**
   * Industry.
   * Maximum length: 256.
   * @nullable
   */
  industryFrCa?: string;
  /**
   * Industry.
   * Maximum length: 256.
   * @nullable
   */
  industryFrFr?: string;
  /**
   * Industry.
   * Maximum length: 256.
   * @nullable
   */
  industryItIt?: string;
  /**
   * Industry.
   * Maximum length: 256.
   * @nullable
   */
  industryLocalized?: string;
  /**
   * Industry.
   * Maximum length: 256.
   * @nullable
   */
  industryNlNl?: string;
  /**
   * Industry.
   * Maximum length: 256.
   * @nullable
   */
  industryPtBr?: string;
  /**
   * Industry.
   * Maximum length: 256.
   * @nullable
   */
  industryZhCn?: string;
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
   * One-to-one navigation property to the [[User]] entity.
   */
  createdByNav!: User;
  /**
   * One-to-many navigation property to the [[MdfLocalizedValue]] entity.
   */
  industryTranslationTextNav!: MdfLocalizedValue[];
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
   * One-to-many navigation property to the [[WfRequest]] entity.
   */
  wfRequestNav!: WfRequest[];

  /**
   * Returns an entity builder to construct instances `RelevantIndustryEntity`.
   * @returns A builder that constructs instances of entity type `RelevantIndustryEntity`.
   */
  static builder(): EntityBuilderType<RelevantIndustryEntity, RelevantIndustryEntityTypeForceMandatory> {
    return Entity.entityBuilder(RelevantIndustryEntity);
  }

  /**
   * Returns a request builder to construct requests for operations on the `RelevantIndustryEntity` entity type.
   * @returns A `RelevantIndustryEntity` request builder.
   */
  static requestBuilder(): RelevantIndustryEntityRequestBuilder {
    return new RelevantIndustryEntityRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `RelevantIndustryEntity`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `RelevantIndustryEntity`.
   */
  static customField(fieldName: string): CustomField<RelevantIndustryEntity> {
    return Entity.customFieldSelector(fieldName, RelevantIndustryEntity);
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
import { WfRequest, WfRequestType } from './WfRequest';

export interface RelevantIndustryEntityType {
  createdBy?: string;
  createdDateTime?: Moment;
  externalCode: string;
  industryDeDe?: string;
  industryDefaultValue?: string;
  industryEnDebug?: string;
  industryEnGb?: string;
  industryEnUs?: string;
  industryEsEs?: string;
  industryEsMx?: string;
  industryFrCa?: string;
  industryFrFr?: string;
  industryItIt?: string;
  industryLocalized?: string;
  industryNlNl?: string;
  industryPtBr?: string;
  industryZhCn?: string;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  mdfSystemRecordStatus?: string;
  status?: string;
  subModule?: string;
  createdByNav: UserType;
  industryTranslationTextNav: MdfLocalizedValueType[];
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  statusNav: MdfEnumValueType;
  wfRequestNav: WfRequestType[];
}

export interface RelevantIndustryEntityTypeForceMandatory {
  createdBy: string;
  createdDateTime: Moment;
  externalCode: string;
  industryDeDe: string;
  industryDefaultValue: string;
  industryEnDebug: string;
  industryEnGb: string;
  industryEnUs: string;
  industryEsEs: string;
  industryEsMx: string;
  industryFrCa: string;
  industryFrFr: string;
  industryItIt: string;
  industryLocalized: string;
  industryNlNl: string;
  industryPtBr: string;
  industryZhCn: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  mdfSystemRecordStatus: string;
  status: string;
  subModule: string;
  createdByNav: UserType;
  industryTranslationTextNav: MdfLocalizedValueType[];
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  statusNav: MdfEnumValueType;
  wfRequestNav: WfRequestType[];
}

export namespace RelevantIndustryEntity {
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<RelevantIndustryEntity> = new StringField('createdBy', RelevantIndustryEntity, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<RelevantIndustryEntity> = new DateField('createdDateTime', RelevantIndustryEntity, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: StringField<RelevantIndustryEntity> = new StringField('externalCode', RelevantIndustryEntity, 'Edm.String');
  /**
   * Static representation of the [[industryDeDe]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INDUSTRY_DE_DE: StringField<RelevantIndustryEntity> = new StringField('industry_de_DE', RelevantIndustryEntity, 'Edm.String');
  /**
   * Static representation of the [[industryDefaultValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INDUSTRY_DEFAULT_VALUE: StringField<RelevantIndustryEntity> = new StringField('industry_defaultValue', RelevantIndustryEntity, 'Edm.String');
  /**
   * Static representation of the [[industryEnDebug]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INDUSTRY_EN_DEBUG: StringField<RelevantIndustryEntity> = new StringField('industry_en_DEBUG', RelevantIndustryEntity, 'Edm.String');
  /**
   * Static representation of the [[industryEnGb]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INDUSTRY_EN_GB: StringField<RelevantIndustryEntity> = new StringField('industry_en_GB', RelevantIndustryEntity, 'Edm.String');
  /**
   * Static representation of the [[industryEnUs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INDUSTRY_EN_US: StringField<RelevantIndustryEntity> = new StringField('industry_en_US', RelevantIndustryEntity, 'Edm.String');
  /**
   * Static representation of the [[industryEsEs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INDUSTRY_ES_ES: StringField<RelevantIndustryEntity> = new StringField('industry_es_ES', RelevantIndustryEntity, 'Edm.String');
  /**
   * Static representation of the [[industryEsMx]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INDUSTRY_ES_MX: StringField<RelevantIndustryEntity> = new StringField('industry_es_MX', RelevantIndustryEntity, 'Edm.String');
  /**
   * Static representation of the [[industryFrCa]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INDUSTRY_FR_CA: StringField<RelevantIndustryEntity> = new StringField('industry_fr_CA', RelevantIndustryEntity, 'Edm.String');
  /**
   * Static representation of the [[industryFrFr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INDUSTRY_FR_FR: StringField<RelevantIndustryEntity> = new StringField('industry_fr_FR', RelevantIndustryEntity, 'Edm.String');
  /**
   * Static representation of the [[industryItIt]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INDUSTRY_IT_IT: StringField<RelevantIndustryEntity> = new StringField('industry_it_IT', RelevantIndustryEntity, 'Edm.String');
  /**
   * Static representation of the [[industryLocalized]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INDUSTRY_LOCALIZED: StringField<RelevantIndustryEntity> = new StringField('industry_localized', RelevantIndustryEntity, 'Edm.String');
  /**
   * Static representation of the [[industryNlNl]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INDUSTRY_NL_NL: StringField<RelevantIndustryEntity> = new StringField('industry_nl_NL', RelevantIndustryEntity, 'Edm.String');
  /**
   * Static representation of the [[industryPtBr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INDUSTRY_PT_BR: StringField<RelevantIndustryEntity> = new StringField('industry_pt_BR', RelevantIndustryEntity, 'Edm.String');
  /**
   * Static representation of the [[industryZhCn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INDUSTRY_ZH_CN: StringField<RelevantIndustryEntity> = new StringField('industry_zh_CN', RelevantIndustryEntity, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<RelevantIndustryEntity> = new StringField('lastModifiedBy', RelevantIndustryEntity, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<RelevantIndustryEntity> = new DateField('lastModifiedDateTime', RelevantIndustryEntity, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<RelevantIndustryEntity> = new StringField('mdfSystemRecordStatus', RelevantIndustryEntity, 'Edm.String');
  /**
   * Static representation of the [[status]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS: StringField<RelevantIndustryEntity> = new StringField('status', RelevantIndustryEntity, 'Edm.String');
  /**
   * Static representation of the [[subModule]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUB_MODULE: StringField<RelevantIndustryEntity> = new StringField('subModule', RelevantIndustryEntity, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<RelevantIndustryEntity, User> = new OneToOneLink('createdByNav', RelevantIndustryEntity, User);
  /**
   * Static representation of the one-to-many navigation property [[industryTranslationTextNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INDUSTRY_TRANSLATION_TEXT_NAV: Link<RelevantIndustryEntity, MdfLocalizedValue> = new Link('industryTranslationTextNav', RelevantIndustryEntity, MdfLocalizedValue);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<RelevantIndustryEntity, User> = new OneToOneLink('lastModifiedByNav', RelevantIndustryEntity, User);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<RelevantIndustryEntity, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', RelevantIndustryEntity, MdfEnumValue);
  /**
   * Static representation of the one-to-one navigation property [[statusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS_NAV: OneToOneLink<RelevantIndustryEntity, MdfEnumValue> = new OneToOneLink('statusNav', RelevantIndustryEntity, MdfEnumValue);
  /**
   * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WF_REQUEST_NAV: Link<RelevantIndustryEntity, WfRequest> = new Link('wfRequestNav', RelevantIndustryEntity, WfRequest);
  /**
   * All fields of the RelevantIndustryEntity entity.
   */
  export const _allFields: Array<StringField<RelevantIndustryEntity> | DateField<RelevantIndustryEntity> | OneToOneLink<RelevantIndustryEntity, User> | Link<RelevantIndustryEntity, MdfLocalizedValue> | OneToOneLink<RelevantIndustryEntity, MdfEnumValue> | Link<RelevantIndustryEntity, WfRequest>> = [
    RelevantIndustryEntity.CREATED_BY,
    RelevantIndustryEntity.CREATED_DATE_TIME,
    RelevantIndustryEntity.EXTERNAL_CODE,
    RelevantIndustryEntity.INDUSTRY_DE_DE,
    RelevantIndustryEntity.INDUSTRY_DEFAULT_VALUE,
    RelevantIndustryEntity.INDUSTRY_EN_DEBUG,
    RelevantIndustryEntity.INDUSTRY_EN_GB,
    RelevantIndustryEntity.INDUSTRY_EN_US,
    RelevantIndustryEntity.INDUSTRY_ES_ES,
    RelevantIndustryEntity.INDUSTRY_ES_MX,
    RelevantIndustryEntity.INDUSTRY_FR_CA,
    RelevantIndustryEntity.INDUSTRY_FR_FR,
    RelevantIndustryEntity.INDUSTRY_IT_IT,
    RelevantIndustryEntity.INDUSTRY_LOCALIZED,
    RelevantIndustryEntity.INDUSTRY_NL_NL,
    RelevantIndustryEntity.INDUSTRY_PT_BR,
    RelevantIndustryEntity.INDUSTRY_ZH_CN,
    RelevantIndustryEntity.LAST_MODIFIED_BY,
    RelevantIndustryEntity.LAST_MODIFIED_DATE_TIME,
    RelevantIndustryEntity.MDF_SYSTEM_RECORD_STATUS,
    RelevantIndustryEntity.STATUS,
    RelevantIndustryEntity.SUB_MODULE,
    RelevantIndustryEntity.CREATED_BY_NAV,
    RelevantIndustryEntity.INDUSTRY_TRANSLATION_TEXT_NAV,
    RelevantIndustryEntity.LAST_MODIFIED_BY_NAV,
    RelevantIndustryEntity.MDF_SYSTEM_RECORD_STATUS_NAV,
    RelevantIndustryEntity.STATUS_NAV,
    RelevantIndustryEntity.WF_REQUEST_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<RelevantIndustryEntity> = new AllFields('*', RelevantIndustryEntity);
  /**
   * All key fields of the RelevantIndustryEntity entity.
   */
  export const _keyFields: Array<Selectable<RelevantIndustryEntity>> = [RelevantIndustryEntity.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property RelevantIndustryEntity.
   */
  export const _keys: { [keys: string]: Selectable<RelevantIndustryEntity> } = RelevantIndustryEntity._keyFields.reduce((acc: { [keys: string]: Selectable<RelevantIndustryEntity> }, field: Selectable<RelevantIndustryEntity>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
