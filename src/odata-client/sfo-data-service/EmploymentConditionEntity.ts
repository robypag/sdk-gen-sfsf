/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EmploymentConditionEntityRequestBuilder } from './EmploymentConditionEntityRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "EmploymentConditionEntity" of service "SFOData".
 */
export class EmploymentConditionEntity extends Entity implements EmploymentConditionEntityType {
  /**
   * Technical entity name for EmploymentConditionEntity.
   */
  static _entityName = 'EmploymentConditionEntity';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for EmploymentConditionEntity.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Condition.
   * Maximum length: 256.
   * @nullable
   */
  conditionDeDe?: string;
  /**
   * Condition.
   * Maximum length: 256.
   * @nullable
   */
  conditionDefaultValue?: string;
  /**
   * Condition.
   * Maximum length: 256.
   * @nullable
   */
  conditionEnDebug?: string;
  /**
   * Condition.
   * Maximum length: 256.
   * @nullable
   */
  conditionEnGb?: string;
  /**
   * Condition.
   * Maximum length: 256.
   * @nullable
   */
  conditionEnUs?: string;
  /**
   * Condition.
   * Maximum length: 256.
   * @nullable
   */
  conditionEsEs?: string;
  /**
   * Condition.
   * Maximum length: 256.
   * @nullable
   */
  conditionEsMx?: string;
  /**
   * Condition.
   * Maximum length: 256.
   * @nullable
   */
  conditionFrCa?: string;
  /**
   * Condition.
   * Maximum length: 256.
   * @nullable
   */
  conditionFrFr?: string;
  /**
   * Condition.
   * Maximum length: 256.
   * @nullable
   */
  conditionItIt?: string;
  /**
   * Condition.
   * Maximum length: 256.
   * @nullable
   */
  conditionLocalized?: string;
  /**
   * Condition.
   * Maximum length: 256.
   * @nullable
   */
  conditionNlNl?: string;
  /**
   * Condition.
   * Maximum length: 256.
   * @nullable
   */
  conditionPtBr?: string;
  /**
   * Condition.
   * Maximum length: 256.
   * @nullable
   */
  conditionZhCn?: string;
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
  conditionTranslationTextNav!: MdfLocalizedValue[];
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
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  statusNav!: MdfEnumValue;
  /**
   * One-to-many navigation property to the [[WfRequest]] entity.
   */
  wfRequestNav!: WfRequest[];

  /**
   * Returns an entity builder to construct instances `EmploymentConditionEntity`.
   * @returns A builder that constructs instances of entity type `EmploymentConditionEntity`.
   */
  static builder(): EntityBuilderType<EmploymentConditionEntity, EmploymentConditionEntityTypeForceMandatory> {
    return Entity.entityBuilder(EmploymentConditionEntity);
  }

  /**
   * Returns a request builder to construct requests for operations on the `EmploymentConditionEntity` entity type.
   * @returns A `EmploymentConditionEntity` request builder.
   */
  static requestBuilder(): EmploymentConditionEntityRequestBuilder {
    return new EmploymentConditionEntityRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `EmploymentConditionEntity`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `EmploymentConditionEntity`.
   */
  static customField(fieldName: string): CustomField<EmploymentConditionEntity> {
    return Entity.customFieldSelector(fieldName, EmploymentConditionEntity);
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

export interface EmploymentConditionEntityType {
  conditionDeDe?: string;
  conditionDefaultValue?: string;
  conditionEnDebug?: string;
  conditionEnGb?: string;
  conditionEnUs?: string;
  conditionEsEs?: string;
  conditionEsMx?: string;
  conditionFrCa?: string;
  conditionFrFr?: string;
  conditionItIt?: string;
  conditionLocalized?: string;
  conditionNlNl?: string;
  conditionPtBr?: string;
  conditionZhCn?: string;
  createdBy?: string;
  createdDateTime?: Moment;
  externalCode: string;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  mdfSystemRecordStatus?: string;
  status?: string;
  subModule?: string;
  conditionTranslationTextNav: MdfLocalizedValueType[];
  createdByNav: UserType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  statusNav: MdfEnumValueType;
  wfRequestNav: WfRequestType[];
}

export interface EmploymentConditionEntityTypeForceMandatory {
  conditionDeDe: string;
  conditionDefaultValue: string;
  conditionEnDebug: string;
  conditionEnGb: string;
  conditionEnUs: string;
  conditionEsEs: string;
  conditionEsMx: string;
  conditionFrCa: string;
  conditionFrFr: string;
  conditionItIt: string;
  conditionLocalized: string;
  conditionNlNl: string;
  conditionPtBr: string;
  conditionZhCn: string;
  createdBy: string;
  createdDateTime: Moment;
  externalCode: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  mdfSystemRecordStatus: string;
  status: string;
  subModule: string;
  conditionTranslationTextNav: MdfLocalizedValueType[];
  createdByNav: UserType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  statusNav: MdfEnumValueType;
  wfRequestNav: WfRequestType[];
}

export namespace EmploymentConditionEntity {
  /**
   * Static representation of the [[conditionDeDe]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONDITION_DE_DE: StringField<EmploymentConditionEntity> = new StringField('condition_de_DE', EmploymentConditionEntity, 'Edm.String');
  /**
   * Static representation of the [[conditionDefaultValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONDITION_DEFAULT_VALUE: StringField<EmploymentConditionEntity> = new StringField('condition_defaultValue', EmploymentConditionEntity, 'Edm.String');
  /**
   * Static representation of the [[conditionEnDebug]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONDITION_EN_DEBUG: StringField<EmploymentConditionEntity> = new StringField('condition_en_DEBUG', EmploymentConditionEntity, 'Edm.String');
  /**
   * Static representation of the [[conditionEnGb]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONDITION_EN_GB: StringField<EmploymentConditionEntity> = new StringField('condition_en_GB', EmploymentConditionEntity, 'Edm.String');
  /**
   * Static representation of the [[conditionEnUs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONDITION_EN_US: StringField<EmploymentConditionEntity> = new StringField('condition_en_US', EmploymentConditionEntity, 'Edm.String');
  /**
   * Static representation of the [[conditionEsEs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONDITION_ES_ES: StringField<EmploymentConditionEntity> = new StringField('condition_es_ES', EmploymentConditionEntity, 'Edm.String');
  /**
   * Static representation of the [[conditionEsMx]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONDITION_ES_MX: StringField<EmploymentConditionEntity> = new StringField('condition_es_MX', EmploymentConditionEntity, 'Edm.String');
  /**
   * Static representation of the [[conditionFrCa]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONDITION_FR_CA: StringField<EmploymentConditionEntity> = new StringField('condition_fr_CA', EmploymentConditionEntity, 'Edm.String');
  /**
   * Static representation of the [[conditionFrFr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONDITION_FR_FR: StringField<EmploymentConditionEntity> = new StringField('condition_fr_FR', EmploymentConditionEntity, 'Edm.String');
  /**
   * Static representation of the [[conditionItIt]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONDITION_IT_IT: StringField<EmploymentConditionEntity> = new StringField('condition_it_IT', EmploymentConditionEntity, 'Edm.String');
  /**
   * Static representation of the [[conditionLocalized]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONDITION_LOCALIZED: StringField<EmploymentConditionEntity> = new StringField('condition_localized', EmploymentConditionEntity, 'Edm.String');
  /**
   * Static representation of the [[conditionNlNl]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONDITION_NL_NL: StringField<EmploymentConditionEntity> = new StringField('condition_nl_NL', EmploymentConditionEntity, 'Edm.String');
  /**
   * Static representation of the [[conditionPtBr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONDITION_PT_BR: StringField<EmploymentConditionEntity> = new StringField('condition_pt_BR', EmploymentConditionEntity, 'Edm.String');
  /**
   * Static representation of the [[conditionZhCn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONDITION_ZH_CN: StringField<EmploymentConditionEntity> = new StringField('condition_zh_CN', EmploymentConditionEntity, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<EmploymentConditionEntity> = new StringField('createdBy', EmploymentConditionEntity, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<EmploymentConditionEntity> = new DateField('createdDateTime', EmploymentConditionEntity, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: StringField<EmploymentConditionEntity> = new StringField('externalCode', EmploymentConditionEntity, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<EmploymentConditionEntity> = new StringField('lastModifiedBy', EmploymentConditionEntity, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<EmploymentConditionEntity> = new DateField('lastModifiedDateTime', EmploymentConditionEntity, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<EmploymentConditionEntity> = new StringField('mdfSystemRecordStatus', EmploymentConditionEntity, 'Edm.String');
  /**
   * Static representation of the [[status]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS: StringField<EmploymentConditionEntity> = new StringField('status', EmploymentConditionEntity, 'Edm.String');
  /**
   * Static representation of the [[subModule]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUB_MODULE: StringField<EmploymentConditionEntity> = new StringField('subModule', EmploymentConditionEntity, 'Edm.String');
  /**
   * Static representation of the one-to-many navigation property [[conditionTranslationTextNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONDITION_TRANSLATION_TEXT_NAV: Link<EmploymentConditionEntity, MdfLocalizedValue> = new Link('conditionTranslationTextNav', EmploymentConditionEntity, MdfLocalizedValue);
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<EmploymentConditionEntity, User> = new OneToOneLink('createdByNav', EmploymentConditionEntity, User);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<EmploymentConditionEntity, User> = new OneToOneLink('lastModifiedByNav', EmploymentConditionEntity, User);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<EmploymentConditionEntity, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', EmploymentConditionEntity, MdfEnumValue);
  /**
   * Static representation of the one-to-one navigation property [[statusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS_NAV: OneToOneLink<EmploymentConditionEntity, MdfEnumValue> = new OneToOneLink('statusNav', EmploymentConditionEntity, MdfEnumValue);
  /**
   * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WF_REQUEST_NAV: Link<EmploymentConditionEntity, WfRequest> = new Link('wfRequestNav', EmploymentConditionEntity, WfRequest);
  /**
   * All fields of the EmploymentConditionEntity entity.
   */
  export const _allFields: Array<StringField<EmploymentConditionEntity> | DateField<EmploymentConditionEntity> | Link<EmploymentConditionEntity, MdfLocalizedValue> | OneToOneLink<EmploymentConditionEntity, User> | OneToOneLink<EmploymentConditionEntity, MdfEnumValue> | Link<EmploymentConditionEntity, WfRequest>> = [
    EmploymentConditionEntity.CONDITION_DE_DE,
    EmploymentConditionEntity.CONDITION_DEFAULT_VALUE,
    EmploymentConditionEntity.CONDITION_EN_DEBUG,
    EmploymentConditionEntity.CONDITION_EN_GB,
    EmploymentConditionEntity.CONDITION_EN_US,
    EmploymentConditionEntity.CONDITION_ES_ES,
    EmploymentConditionEntity.CONDITION_ES_MX,
    EmploymentConditionEntity.CONDITION_FR_CA,
    EmploymentConditionEntity.CONDITION_FR_FR,
    EmploymentConditionEntity.CONDITION_IT_IT,
    EmploymentConditionEntity.CONDITION_LOCALIZED,
    EmploymentConditionEntity.CONDITION_NL_NL,
    EmploymentConditionEntity.CONDITION_PT_BR,
    EmploymentConditionEntity.CONDITION_ZH_CN,
    EmploymentConditionEntity.CREATED_BY,
    EmploymentConditionEntity.CREATED_DATE_TIME,
    EmploymentConditionEntity.EXTERNAL_CODE,
    EmploymentConditionEntity.LAST_MODIFIED_BY,
    EmploymentConditionEntity.LAST_MODIFIED_DATE_TIME,
    EmploymentConditionEntity.MDF_SYSTEM_RECORD_STATUS,
    EmploymentConditionEntity.STATUS,
    EmploymentConditionEntity.SUB_MODULE,
    EmploymentConditionEntity.CONDITION_TRANSLATION_TEXT_NAV,
    EmploymentConditionEntity.CREATED_BY_NAV,
    EmploymentConditionEntity.LAST_MODIFIED_BY_NAV,
    EmploymentConditionEntity.MDF_SYSTEM_RECORD_STATUS_NAV,
    EmploymentConditionEntity.STATUS_NAV,
    EmploymentConditionEntity.WF_REQUEST_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<EmploymentConditionEntity> = new AllFields('*', EmploymentConditionEntity);
  /**
   * All key fields of the EmploymentConditionEntity entity.
   */
  export const _keyFields: Array<Selectable<EmploymentConditionEntity>> = [EmploymentConditionEntity.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property EmploymentConditionEntity.
   */
  export const _keys: { [keys: string]: Selectable<EmploymentConditionEntity> } = EmploymentConditionEntity._keyFields.reduce((acc: { [keys: string]: Selectable<EmploymentConditionEntity> }, field: Selectable<EmploymentConditionEntity>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
