/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EducationDegreeEntityRequestBuilder } from './EducationDegreeEntityRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "EducationDegreeEntity" of service "SFOData".
 */
export class EducationDegreeEntity extends Entity implements EducationDegreeEntityType {
  /**
   * Technical entity name for EducationDegreeEntity.
   */
  static _entityName = 'EducationDegreeEntity';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for EducationDegreeEntity.
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
   * Degree.
   * Maximum length: 256.
   * @nullable
   */
  degreeDeDe?: string;
  /**
   * Degree.
   * Maximum length: 256.
   * @nullable
   */
  degreeDefaultValue?: string;
  /**
   * Degree.
   * Maximum length: 256.
   * @nullable
   */
  degreeEnDebug?: string;
  /**
   * Degree.
   * Maximum length: 256.
   * @nullable
   */
  degreeEnGb?: string;
  /**
   * Degree.
   * Maximum length: 256.
   * @nullable
   */
  degreeEnUs?: string;
  /**
   * Degree.
   * Maximum length: 256.
   * @nullable
   */
  degreeEsEs?: string;
  /**
   * Degree.
   * Maximum length: 256.
   * @nullable
   */
  degreeEsMx?: string;
  /**
   * Degree.
   * Maximum length: 256.
   * @nullable
   */
  degreeFrCa?: string;
  /**
   * Degree.
   * Maximum length: 256.
   * @nullable
   */
  degreeFrFr?: string;
  /**
   * Degree.
   * Maximum length: 256.
   * @nullable
   */
  degreeItIt?: string;
  /**
   * Degree.
   * Maximum length: 256.
   * @nullable
   */
  degreeLocalized?: string;
  /**
   * Degree.
   * Maximum length: 256.
   * @nullable
   */
  degreeNlNl?: string;
  /**
   * Degree.
   * Maximum length: 256.
   * @nullable
   */
  degreePtBr?: string;
  /**
   * Degree.
   * Maximum length: 256.
   * @nullable
   */
  degreeZhCn?: string;
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
   * One-to-one navigation property to the [[User]] entity.
   */
  createdByNav!: User;
  /**
   * One-to-many navigation property to the [[MdfLocalizedValue]] entity.
   */
  degreeTranslationTextNav!: MdfLocalizedValue[];
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
   * Returns an entity builder to construct instances `EducationDegreeEntity`.
   * @returns A builder that constructs instances of entity type `EducationDegreeEntity`.
   */
  static builder(): EntityBuilderType<EducationDegreeEntity, EducationDegreeEntityTypeForceMandatory> {
    return Entity.entityBuilder(EducationDegreeEntity);
  }

  /**
   * Returns a request builder to construct requests for operations on the `EducationDegreeEntity` entity type.
   * @returns A `EducationDegreeEntity` request builder.
   */
  static requestBuilder(): EducationDegreeEntityRequestBuilder {
    return new EducationDegreeEntityRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `EducationDegreeEntity`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `EducationDegreeEntity`.
   */
  static customField(fieldName: string): CustomField<EducationDegreeEntity> {
    return Entity.customFieldSelector(fieldName, EducationDegreeEntity);
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

export interface EducationDegreeEntityType {
  createdBy?: string;
  createdDateTime?: Moment;
  degreeDeDe?: string;
  degreeDefaultValue?: string;
  degreeEnDebug?: string;
  degreeEnGb?: string;
  degreeEnUs?: string;
  degreeEsEs?: string;
  degreeEsMx?: string;
  degreeFrCa?: string;
  degreeFrFr?: string;
  degreeItIt?: string;
  degreeLocalized?: string;
  degreeNlNl?: string;
  degreePtBr?: string;
  degreeZhCn?: string;
  externalCode: string;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  mdfSystemRecordStatus?: string;
  status?: string;
  subModule?: string;
  createdByNav: UserType;
  degreeTranslationTextNav: MdfLocalizedValueType[];
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  statusNav: MdfEnumValueType;
  wfRequestNav: WfRequestType[];
}

export interface EducationDegreeEntityTypeForceMandatory {
  createdBy: string;
  createdDateTime: Moment;
  degreeDeDe: string;
  degreeDefaultValue: string;
  degreeEnDebug: string;
  degreeEnGb: string;
  degreeEnUs: string;
  degreeEsEs: string;
  degreeEsMx: string;
  degreeFrCa: string;
  degreeFrFr: string;
  degreeItIt: string;
  degreeLocalized: string;
  degreeNlNl: string;
  degreePtBr: string;
  degreeZhCn: string;
  externalCode: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  mdfSystemRecordStatus: string;
  status: string;
  subModule: string;
  createdByNav: UserType;
  degreeTranslationTextNav: MdfLocalizedValueType[];
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  statusNav: MdfEnumValueType;
  wfRequestNav: WfRequestType[];
}

export namespace EducationDegreeEntity {
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<EducationDegreeEntity> = new StringField('createdBy', EducationDegreeEntity, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<EducationDegreeEntity> = new DateField('createdDateTime', EducationDegreeEntity, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[degreeDeDe]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEGREE_DE_DE: StringField<EducationDegreeEntity> = new StringField('degree_de_DE', EducationDegreeEntity, 'Edm.String');
  /**
   * Static representation of the [[degreeDefaultValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEGREE_DEFAULT_VALUE: StringField<EducationDegreeEntity> = new StringField('degree_defaultValue', EducationDegreeEntity, 'Edm.String');
  /**
   * Static representation of the [[degreeEnDebug]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEGREE_EN_DEBUG: StringField<EducationDegreeEntity> = new StringField('degree_en_DEBUG', EducationDegreeEntity, 'Edm.String');
  /**
   * Static representation of the [[degreeEnGb]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEGREE_EN_GB: StringField<EducationDegreeEntity> = new StringField('degree_en_GB', EducationDegreeEntity, 'Edm.String');
  /**
   * Static representation of the [[degreeEnUs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEGREE_EN_US: StringField<EducationDegreeEntity> = new StringField('degree_en_US', EducationDegreeEntity, 'Edm.String');
  /**
   * Static representation of the [[degreeEsEs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEGREE_ES_ES: StringField<EducationDegreeEntity> = new StringField('degree_es_ES', EducationDegreeEntity, 'Edm.String');
  /**
   * Static representation of the [[degreeEsMx]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEGREE_ES_MX: StringField<EducationDegreeEntity> = new StringField('degree_es_MX', EducationDegreeEntity, 'Edm.String');
  /**
   * Static representation of the [[degreeFrCa]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEGREE_FR_CA: StringField<EducationDegreeEntity> = new StringField('degree_fr_CA', EducationDegreeEntity, 'Edm.String');
  /**
   * Static representation of the [[degreeFrFr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEGREE_FR_FR: StringField<EducationDegreeEntity> = new StringField('degree_fr_FR', EducationDegreeEntity, 'Edm.String');
  /**
   * Static representation of the [[degreeItIt]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEGREE_IT_IT: StringField<EducationDegreeEntity> = new StringField('degree_it_IT', EducationDegreeEntity, 'Edm.String');
  /**
   * Static representation of the [[degreeLocalized]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEGREE_LOCALIZED: StringField<EducationDegreeEntity> = new StringField('degree_localized', EducationDegreeEntity, 'Edm.String');
  /**
   * Static representation of the [[degreeNlNl]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEGREE_NL_NL: StringField<EducationDegreeEntity> = new StringField('degree_nl_NL', EducationDegreeEntity, 'Edm.String');
  /**
   * Static representation of the [[degreePtBr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEGREE_PT_BR: StringField<EducationDegreeEntity> = new StringField('degree_pt_BR', EducationDegreeEntity, 'Edm.String');
  /**
   * Static representation of the [[degreeZhCn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEGREE_ZH_CN: StringField<EducationDegreeEntity> = new StringField('degree_zh_CN', EducationDegreeEntity, 'Edm.String');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: StringField<EducationDegreeEntity> = new StringField('externalCode', EducationDegreeEntity, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<EducationDegreeEntity> = new StringField('lastModifiedBy', EducationDegreeEntity, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<EducationDegreeEntity> = new DateField('lastModifiedDateTime', EducationDegreeEntity, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<EducationDegreeEntity> = new StringField('mdfSystemRecordStatus', EducationDegreeEntity, 'Edm.String');
  /**
   * Static representation of the [[status]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS: StringField<EducationDegreeEntity> = new StringField('status', EducationDegreeEntity, 'Edm.String');
  /**
   * Static representation of the [[subModule]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUB_MODULE: StringField<EducationDegreeEntity> = new StringField('subModule', EducationDegreeEntity, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<EducationDegreeEntity, User> = new OneToOneLink('createdByNav', EducationDegreeEntity, User);
  /**
   * Static representation of the one-to-many navigation property [[degreeTranslationTextNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEGREE_TRANSLATION_TEXT_NAV: Link<EducationDegreeEntity, MdfLocalizedValue> = new Link('degreeTranslationTextNav', EducationDegreeEntity, MdfLocalizedValue);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<EducationDegreeEntity, User> = new OneToOneLink('lastModifiedByNav', EducationDegreeEntity, User);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<EducationDegreeEntity, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', EducationDegreeEntity, MdfEnumValue);
  /**
   * Static representation of the one-to-one navigation property [[statusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS_NAV: OneToOneLink<EducationDegreeEntity, MdfEnumValue> = new OneToOneLink('statusNav', EducationDegreeEntity, MdfEnumValue);
  /**
   * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WF_REQUEST_NAV: Link<EducationDegreeEntity, WfRequest> = new Link('wfRequestNav', EducationDegreeEntity, WfRequest);
  /**
   * All fields of the EducationDegreeEntity entity.
   */
  export const _allFields: Array<StringField<EducationDegreeEntity> | DateField<EducationDegreeEntity> | OneToOneLink<EducationDegreeEntity, User> | Link<EducationDegreeEntity, MdfLocalizedValue> | OneToOneLink<EducationDegreeEntity, MdfEnumValue> | Link<EducationDegreeEntity, WfRequest>> = [
    EducationDegreeEntity.CREATED_BY,
    EducationDegreeEntity.CREATED_DATE_TIME,
    EducationDegreeEntity.DEGREE_DE_DE,
    EducationDegreeEntity.DEGREE_DEFAULT_VALUE,
    EducationDegreeEntity.DEGREE_EN_DEBUG,
    EducationDegreeEntity.DEGREE_EN_GB,
    EducationDegreeEntity.DEGREE_EN_US,
    EducationDegreeEntity.DEGREE_ES_ES,
    EducationDegreeEntity.DEGREE_ES_MX,
    EducationDegreeEntity.DEGREE_FR_CA,
    EducationDegreeEntity.DEGREE_FR_FR,
    EducationDegreeEntity.DEGREE_IT_IT,
    EducationDegreeEntity.DEGREE_LOCALIZED,
    EducationDegreeEntity.DEGREE_NL_NL,
    EducationDegreeEntity.DEGREE_PT_BR,
    EducationDegreeEntity.DEGREE_ZH_CN,
    EducationDegreeEntity.EXTERNAL_CODE,
    EducationDegreeEntity.LAST_MODIFIED_BY,
    EducationDegreeEntity.LAST_MODIFIED_DATE_TIME,
    EducationDegreeEntity.MDF_SYSTEM_RECORD_STATUS,
    EducationDegreeEntity.STATUS,
    EducationDegreeEntity.SUB_MODULE,
    EducationDegreeEntity.CREATED_BY_NAV,
    EducationDegreeEntity.DEGREE_TRANSLATION_TEXT_NAV,
    EducationDegreeEntity.LAST_MODIFIED_BY_NAV,
    EducationDegreeEntity.MDF_SYSTEM_RECORD_STATUS_NAV,
    EducationDegreeEntity.STATUS_NAV,
    EducationDegreeEntity.WF_REQUEST_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<EducationDegreeEntity> = new AllFields('*', EducationDegreeEntity);
  /**
   * All key fields of the EducationDegreeEntity entity.
   */
  export const _keyFields: Array<Selectable<EducationDegreeEntity>> = [EducationDegreeEntity.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property EducationDegreeEntity.
   */
  export const _keys: { [keys: string]: Selectable<EducationDegreeEntity> } = EducationDegreeEntity._keyFields.reduce((acc: { [keys: string]: Selectable<EducationDegreeEntity> }, field: Selectable<EducationDegreeEntity>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
