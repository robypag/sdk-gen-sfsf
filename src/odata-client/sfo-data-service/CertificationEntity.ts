/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CertificationEntityRequestBuilder } from './CertificationEntityRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "CertificationEntity" of service "SFOData".
 */
export class CertificationEntity extends Entity implements CertificationEntityType {
  /**
   * Technical entity name for CertificationEntity.
   */
  static _entityName = 'CertificationEntity';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for CertificationEntity.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Certification.
   * Maximum length: 256.
   * @nullable
   */
  certificationDeDe?: string;
  /**
   * Certification.
   * Maximum length: 256.
   * @nullable
   */
  certificationDefaultValue?: string;
  /**
   * Certification.
   * Maximum length: 256.
   * @nullable
   */
  certificationEnDebug?: string;
  /**
   * Certification.
   * Maximum length: 256.
   * @nullable
   */
  certificationEnGb?: string;
  /**
   * Certification.
   * Maximum length: 256.
   * @nullable
   */
  certificationEnUs?: string;
  /**
   * Certification.
   * Maximum length: 256.
   * @nullable
   */
  certificationEsEs?: string;
  /**
   * Certification.
   * Maximum length: 256.
   * @nullable
   */
  certificationEsMx?: string;
  /**
   * Certification.
   * Maximum length: 256.
   * @nullable
   */
  certificationFrCa?: string;
  /**
   * Certification.
   * Maximum length: 256.
   * @nullable
   */
  certificationFrFr?: string;
  /**
   * Certification.
   * Maximum length: 256.
   * @nullable
   */
  certificationItIt?: string;
  /**
   * Certification.
   * Maximum length: 256.
   * @nullable
   */
  certificationLocalized?: string;
  /**
   * Certification.
   * Maximum length: 256.
   * @nullable
   */
  certificationNlNl?: string;
  /**
   * Certification.
   * Maximum length: 256.
   * @nullable
   */
  certificationPtBr?: string;
  /**
   * Certification.
   * Maximum length: 256.
   * @nullable
   */
  certificationZhCn?: string;
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
  certificationTranslationTextNav!: MdfLocalizedValue[];
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
   * One-to-many navigation property to the [[WfRequest]] entity.
   */
  wfRequestNav!: WfRequest[];

  /**
   * Returns an entity builder to construct instances `CertificationEntity`.
   * @returns A builder that constructs instances of entity type `CertificationEntity`.
   */
  static builder(): EntityBuilderType<CertificationEntity, CertificationEntityTypeForceMandatory> {
    return Entity.entityBuilder(CertificationEntity);
  }

  /**
   * Returns a request builder to construct requests for operations on the `CertificationEntity` entity type.
   * @returns A `CertificationEntity` request builder.
   */
  static requestBuilder(): CertificationEntityRequestBuilder {
    return new CertificationEntityRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `CertificationEntity`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `CertificationEntity`.
   */
  static customField(fieldName: string): CustomField<CertificationEntity> {
    return Entity.customFieldSelector(fieldName, CertificationEntity);
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

export interface CertificationEntityType {
  certificationDeDe?: string;
  certificationDefaultValue?: string;
  certificationEnDebug?: string;
  certificationEnGb?: string;
  certificationEnUs?: string;
  certificationEsEs?: string;
  certificationEsMx?: string;
  certificationFrCa?: string;
  certificationFrFr?: string;
  certificationItIt?: string;
  certificationLocalized?: string;
  certificationNlNl?: string;
  certificationPtBr?: string;
  certificationZhCn?: string;
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
  certificationTranslationTextNav: MdfLocalizedValueType[];
  createdByNav: UserType;
  descriptionTranslationTextNav: MdfLocalizedValueType[];
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  statusNav: MdfEnumValueType;
  wfRequestNav: WfRequestType[];
}

export interface CertificationEntityTypeForceMandatory {
  certificationDeDe: string;
  certificationDefaultValue: string;
  certificationEnDebug: string;
  certificationEnGb: string;
  certificationEnUs: string;
  certificationEsEs: string;
  certificationEsMx: string;
  certificationFrCa: string;
  certificationFrFr: string;
  certificationItIt: string;
  certificationLocalized: string;
  certificationNlNl: string;
  certificationPtBr: string;
  certificationZhCn: string;
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
  certificationTranslationTextNav: MdfLocalizedValueType[];
  createdByNav: UserType;
  descriptionTranslationTextNav: MdfLocalizedValueType[];
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  statusNav: MdfEnumValueType;
  wfRequestNav: WfRequestType[];
}

export namespace CertificationEntity {
  /**
   * Static representation of the [[certificationDeDe]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CERTIFICATION_DE_DE: StringField<CertificationEntity> = new StringField('certification_de_DE', CertificationEntity, 'Edm.String');
  /**
   * Static representation of the [[certificationDefaultValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CERTIFICATION_DEFAULT_VALUE: StringField<CertificationEntity> = new StringField('certification_defaultValue', CertificationEntity, 'Edm.String');
  /**
   * Static representation of the [[certificationEnDebug]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CERTIFICATION_EN_DEBUG: StringField<CertificationEntity> = new StringField('certification_en_DEBUG', CertificationEntity, 'Edm.String');
  /**
   * Static representation of the [[certificationEnGb]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CERTIFICATION_EN_GB: StringField<CertificationEntity> = new StringField('certification_en_GB', CertificationEntity, 'Edm.String');
  /**
   * Static representation of the [[certificationEnUs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CERTIFICATION_EN_US: StringField<CertificationEntity> = new StringField('certification_en_US', CertificationEntity, 'Edm.String');
  /**
   * Static representation of the [[certificationEsEs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CERTIFICATION_ES_ES: StringField<CertificationEntity> = new StringField('certification_es_ES', CertificationEntity, 'Edm.String');
  /**
   * Static representation of the [[certificationEsMx]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CERTIFICATION_ES_MX: StringField<CertificationEntity> = new StringField('certification_es_MX', CertificationEntity, 'Edm.String');
  /**
   * Static representation of the [[certificationFrCa]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CERTIFICATION_FR_CA: StringField<CertificationEntity> = new StringField('certification_fr_CA', CertificationEntity, 'Edm.String');
  /**
   * Static representation of the [[certificationFrFr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CERTIFICATION_FR_FR: StringField<CertificationEntity> = new StringField('certification_fr_FR', CertificationEntity, 'Edm.String');
  /**
   * Static representation of the [[certificationItIt]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CERTIFICATION_IT_IT: StringField<CertificationEntity> = new StringField('certification_it_IT', CertificationEntity, 'Edm.String');
  /**
   * Static representation of the [[certificationLocalized]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CERTIFICATION_LOCALIZED: StringField<CertificationEntity> = new StringField('certification_localized', CertificationEntity, 'Edm.String');
  /**
   * Static representation of the [[certificationNlNl]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CERTIFICATION_NL_NL: StringField<CertificationEntity> = new StringField('certification_nl_NL', CertificationEntity, 'Edm.String');
  /**
   * Static representation of the [[certificationPtBr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CERTIFICATION_PT_BR: StringField<CertificationEntity> = new StringField('certification_pt_BR', CertificationEntity, 'Edm.String');
  /**
   * Static representation of the [[certificationZhCn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CERTIFICATION_ZH_CN: StringField<CertificationEntity> = new StringField('certification_zh_CN', CertificationEntity, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<CertificationEntity> = new StringField('createdBy', CertificationEntity, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<CertificationEntity> = new DateField('createdDateTime', CertificationEntity, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[descriptionDeDe]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_DE_DE: StringField<CertificationEntity> = new StringField('description_de_DE', CertificationEntity, 'Edm.String');
  /**
   * Static representation of the [[descriptionDefaultValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_DEFAULT_VALUE: StringField<CertificationEntity> = new StringField('description_defaultValue', CertificationEntity, 'Edm.String');
  /**
   * Static representation of the [[descriptionEnDebug]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_EN_DEBUG: StringField<CertificationEntity> = new StringField('description_en_DEBUG', CertificationEntity, 'Edm.String');
  /**
   * Static representation of the [[descriptionEnGb]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_EN_GB: StringField<CertificationEntity> = new StringField('description_en_GB', CertificationEntity, 'Edm.String');
  /**
   * Static representation of the [[descriptionEnUs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_EN_US: StringField<CertificationEntity> = new StringField('description_en_US', CertificationEntity, 'Edm.String');
  /**
   * Static representation of the [[descriptionEsEs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_ES_ES: StringField<CertificationEntity> = new StringField('description_es_ES', CertificationEntity, 'Edm.String');
  /**
   * Static representation of the [[descriptionEsMx]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_ES_MX: StringField<CertificationEntity> = new StringField('description_es_MX', CertificationEntity, 'Edm.String');
  /**
   * Static representation of the [[descriptionFrCa]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_FR_CA: StringField<CertificationEntity> = new StringField('description_fr_CA', CertificationEntity, 'Edm.String');
  /**
   * Static representation of the [[descriptionFrFr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_FR_FR: StringField<CertificationEntity> = new StringField('description_fr_FR', CertificationEntity, 'Edm.String');
  /**
   * Static representation of the [[descriptionItIt]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_IT_IT: StringField<CertificationEntity> = new StringField('description_it_IT', CertificationEntity, 'Edm.String');
  /**
   * Static representation of the [[descriptionLocalized]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_LOCALIZED: StringField<CertificationEntity> = new StringField('description_localized', CertificationEntity, 'Edm.String');
  /**
   * Static representation of the [[descriptionNlNl]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_NL_NL: StringField<CertificationEntity> = new StringField('description_nl_NL', CertificationEntity, 'Edm.String');
  /**
   * Static representation of the [[descriptionPtBr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_PT_BR: StringField<CertificationEntity> = new StringField('description_pt_BR', CertificationEntity, 'Edm.String');
  /**
   * Static representation of the [[descriptionZhCn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_ZH_CN: StringField<CertificationEntity> = new StringField('description_zh_CN', CertificationEntity, 'Edm.String');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: StringField<CertificationEntity> = new StringField('externalCode', CertificationEntity, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<CertificationEntity> = new StringField('lastModifiedBy', CertificationEntity, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<CertificationEntity> = new DateField('lastModifiedDateTime', CertificationEntity, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<CertificationEntity> = new StringField('mdfSystemRecordStatus', CertificationEntity, 'Edm.String');
  /**
   * Static representation of the [[status]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS: StringField<CertificationEntity> = new StringField('status', CertificationEntity, 'Edm.String');
  /**
   * Static representation of the [[subModule]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUB_MODULE: StringField<CertificationEntity> = new StringField('subModule', CertificationEntity, 'Edm.String');
  /**
   * Static representation of the one-to-many navigation property [[certificationTranslationTextNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CERTIFICATION_TRANSLATION_TEXT_NAV: Link<CertificationEntity, MdfLocalizedValue> = new Link('certificationTranslationTextNav', CertificationEntity, MdfLocalizedValue);
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<CertificationEntity, User> = new OneToOneLink('createdByNav', CertificationEntity, User);
  /**
   * Static representation of the one-to-many navigation property [[descriptionTranslationTextNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_TRANSLATION_TEXT_NAV: Link<CertificationEntity, MdfLocalizedValue> = new Link('descriptionTranslationTextNav', CertificationEntity, MdfLocalizedValue);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<CertificationEntity, User> = new OneToOneLink('lastModifiedByNav', CertificationEntity, User);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<CertificationEntity, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', CertificationEntity, MdfEnumValue);
  /**
   * Static representation of the one-to-one navigation property [[statusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS_NAV: OneToOneLink<CertificationEntity, MdfEnumValue> = new OneToOneLink('statusNav', CertificationEntity, MdfEnumValue);
  /**
   * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WF_REQUEST_NAV: Link<CertificationEntity, WfRequest> = new Link('wfRequestNav', CertificationEntity, WfRequest);
  /**
   * All fields of the CertificationEntity entity.
   */
  export const _allFields: Array<StringField<CertificationEntity> | DateField<CertificationEntity> | Link<CertificationEntity, MdfLocalizedValue> | OneToOneLink<CertificationEntity, User> | OneToOneLink<CertificationEntity, MdfEnumValue> | Link<CertificationEntity, WfRequest>> = [
    CertificationEntity.CERTIFICATION_DE_DE,
    CertificationEntity.CERTIFICATION_DEFAULT_VALUE,
    CertificationEntity.CERTIFICATION_EN_DEBUG,
    CertificationEntity.CERTIFICATION_EN_GB,
    CertificationEntity.CERTIFICATION_EN_US,
    CertificationEntity.CERTIFICATION_ES_ES,
    CertificationEntity.CERTIFICATION_ES_MX,
    CertificationEntity.CERTIFICATION_FR_CA,
    CertificationEntity.CERTIFICATION_FR_FR,
    CertificationEntity.CERTIFICATION_IT_IT,
    CertificationEntity.CERTIFICATION_LOCALIZED,
    CertificationEntity.CERTIFICATION_NL_NL,
    CertificationEntity.CERTIFICATION_PT_BR,
    CertificationEntity.CERTIFICATION_ZH_CN,
    CertificationEntity.CREATED_BY,
    CertificationEntity.CREATED_DATE_TIME,
    CertificationEntity.DESCRIPTION_DE_DE,
    CertificationEntity.DESCRIPTION_DEFAULT_VALUE,
    CertificationEntity.DESCRIPTION_EN_DEBUG,
    CertificationEntity.DESCRIPTION_EN_GB,
    CertificationEntity.DESCRIPTION_EN_US,
    CertificationEntity.DESCRIPTION_ES_ES,
    CertificationEntity.DESCRIPTION_ES_MX,
    CertificationEntity.DESCRIPTION_FR_CA,
    CertificationEntity.DESCRIPTION_FR_FR,
    CertificationEntity.DESCRIPTION_IT_IT,
    CertificationEntity.DESCRIPTION_LOCALIZED,
    CertificationEntity.DESCRIPTION_NL_NL,
    CertificationEntity.DESCRIPTION_PT_BR,
    CertificationEntity.DESCRIPTION_ZH_CN,
    CertificationEntity.EXTERNAL_CODE,
    CertificationEntity.LAST_MODIFIED_BY,
    CertificationEntity.LAST_MODIFIED_DATE_TIME,
    CertificationEntity.MDF_SYSTEM_RECORD_STATUS,
    CertificationEntity.STATUS,
    CertificationEntity.SUB_MODULE,
    CertificationEntity.CERTIFICATION_TRANSLATION_TEXT_NAV,
    CertificationEntity.CREATED_BY_NAV,
    CertificationEntity.DESCRIPTION_TRANSLATION_TEXT_NAV,
    CertificationEntity.LAST_MODIFIED_BY_NAV,
    CertificationEntity.MDF_SYSTEM_RECORD_STATUS_NAV,
    CertificationEntity.STATUS_NAV,
    CertificationEntity.WF_REQUEST_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<CertificationEntity> = new AllFields('*', CertificationEntity);
  /**
   * All key fields of the CertificationEntity entity.
   */
  export const _keyFields: Array<Selectable<CertificationEntity>> = [CertificationEntity.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property CertificationEntity.
   */
  export const _keys: { [keys: string]: Selectable<CertificationEntity> } = CertificationEntity._keyFields.reduce((acc: { [keys: string]: Selectable<CertificationEntity> }, field: Selectable<CertificationEntity>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
