/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { InterviewQuestionEntityRequestBuilder } from './InterviewQuestionEntityRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "InterviewQuestionEntity" of service "SFOData".
 */
export class InterviewQuestionEntity extends Entity implements InterviewQuestionEntityType {
  /**
   * Technical entity name for InterviewQuestionEntity.
   */
  static _entityName = 'InterviewQuestionEntity';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for InterviewQuestionEntity.
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
   * Question.
   * Maximum length: 256.
   * @nullable
   */
  questionDeDe?: string;
  /**
   * Question.
   * Maximum length: 256.
   * @nullable
   */
  questionDefaultValue?: string;
  /**
   * Question.
   * Maximum length: 256.
   * @nullable
   */
  questionEnDebug?: string;
  /**
   * Question.
   * Maximum length: 256.
   * @nullable
   */
  questionEnGb?: string;
  /**
   * Question.
   * Maximum length: 256.
   * @nullable
   */
  questionEnUs?: string;
  /**
   * Question.
   * Maximum length: 256.
   * @nullable
   */
  questionEsEs?: string;
  /**
   * Question.
   * Maximum length: 256.
   * @nullable
   */
  questionEsMx?: string;
  /**
   * Question.
   * Maximum length: 256.
   * @nullable
   */
  questionFrCa?: string;
  /**
   * Question.
   * Maximum length: 256.
   * @nullable
   */
  questionFrFr?: string;
  /**
   * Question.
   * Maximum length: 256.
   * @nullable
   */
  questionItIt?: string;
  /**
   * Question.
   * Maximum length: 256.
   * @nullable
   */
  questionLocalized?: string;
  /**
   * Question.
   * Maximum length: 256.
   * @nullable
   */
  questionNlNl?: string;
  /**
   * Question.
   * Maximum length: 256.
   * @nullable
   */
  questionPtBr?: string;
  /**
   * Question.
   * Maximum length: 256.
   * @nullable
   */
  questionZhCn?: string;
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
   * Type.
   * Maximum length: 128.
   * @nullable
   */
  typeDeDe?: string;
  /**
   * Type.
   * Maximum length: 128.
   * @nullable
   */
  typeDefaultValue?: string;
  /**
   * Type.
   * Maximum length: 128.
   * @nullable
   */
  typeEnDebug?: string;
  /**
   * Type.
   * Maximum length: 128.
   * @nullable
   */
  typeEnGb?: string;
  /**
   * Type.
   * Maximum length: 128.
   * @nullable
   */
  typeEnUs?: string;
  /**
   * Type.
   * Maximum length: 128.
   * @nullable
   */
  typeEsEs?: string;
  /**
   * Type.
   * Maximum length: 128.
   * @nullable
   */
  typeEsMx?: string;
  /**
   * Type.
   * Maximum length: 128.
   * @nullable
   */
  typeFrCa?: string;
  /**
   * Type.
   * Maximum length: 128.
   * @nullable
   */
  typeFrFr?: string;
  /**
   * Type.
   * Maximum length: 128.
   * @nullable
   */
  typeItIt?: string;
  /**
   * Type.
   * Maximum length: 128.
   * @nullable
   */
  typeLocalized?: string;
  /**
   * Type.
   * Maximum length: 128.
   * @nullable
   */
  typeNlNl?: string;
  /**
   * Type.
   * Maximum length: 128.
   * @nullable
   */
  typePtBr?: string;
  /**
   * Type.
   * Maximum length: 128.
   * @nullable
   */
  typeZhCn?: string;
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
  questionTranslationTextNav!: MdfLocalizedValue[];
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  statusNav!: MdfEnumValue;
  /**
   * One-to-many navigation property to the [[MdfLocalizedValue]] entity.
   */
  typeTranslationTextNav!: MdfLocalizedValue[];
  /**
   * One-to-many navigation property to the [[WfRequest]] entity.
   */
  wfRequestNav!: WfRequest[];

  /**
   * Returns an entity builder to construct instances `InterviewQuestionEntity`.
   * @returns A builder that constructs instances of entity type `InterviewQuestionEntity`.
   */
  static builder(): EntityBuilderType<InterviewQuestionEntity, InterviewQuestionEntityTypeForceMandatory> {
    return Entity.entityBuilder(InterviewQuestionEntity);
  }

  /**
   * Returns a request builder to construct requests for operations on the `InterviewQuestionEntity` entity type.
   * @returns A `InterviewQuestionEntity` request builder.
   */
  static requestBuilder(): InterviewQuestionEntityRequestBuilder {
    return new InterviewQuestionEntityRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `InterviewQuestionEntity`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `InterviewQuestionEntity`.
   */
  static customField(fieldName: string): CustomField<InterviewQuestionEntity> {
    return Entity.customFieldSelector(fieldName, InterviewQuestionEntity);
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
import { WfRequest, WfRequestType } from './WfRequest';

export interface InterviewQuestionEntityType {
  createdBy?: string;
  createdDateTime?: Moment;
  externalCode: string;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  mdfSystemRecordStatus?: string;
  questionDeDe?: string;
  questionDefaultValue?: string;
  questionEnDebug?: string;
  questionEnGb?: string;
  questionEnUs?: string;
  questionEsEs?: string;
  questionEsMx?: string;
  questionFrCa?: string;
  questionFrFr?: string;
  questionItIt?: string;
  questionLocalized?: string;
  questionNlNl?: string;
  questionPtBr?: string;
  questionZhCn?: string;
  status?: string;
  subModule?: string;
  typeDeDe?: string;
  typeDefaultValue?: string;
  typeEnDebug?: string;
  typeEnGb?: string;
  typeEnUs?: string;
  typeEsEs?: string;
  typeEsMx?: string;
  typeFrCa?: string;
  typeFrFr?: string;
  typeItIt?: string;
  typeLocalized?: string;
  typeNlNl?: string;
  typePtBr?: string;
  typeZhCn?: string;
  createdByNav: UserType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  questionTranslationTextNav: MdfLocalizedValueType[];
  statusNav: MdfEnumValueType;
  typeTranslationTextNav: MdfLocalizedValueType[];
  wfRequestNav: WfRequestType[];
}

export interface InterviewQuestionEntityTypeForceMandatory {
  createdBy: string;
  createdDateTime: Moment;
  externalCode: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  mdfSystemRecordStatus: string;
  questionDeDe: string;
  questionDefaultValue: string;
  questionEnDebug: string;
  questionEnGb: string;
  questionEnUs: string;
  questionEsEs: string;
  questionEsMx: string;
  questionFrCa: string;
  questionFrFr: string;
  questionItIt: string;
  questionLocalized: string;
  questionNlNl: string;
  questionPtBr: string;
  questionZhCn: string;
  status: string;
  subModule: string;
  typeDeDe: string;
  typeDefaultValue: string;
  typeEnDebug: string;
  typeEnGb: string;
  typeEnUs: string;
  typeEsEs: string;
  typeEsMx: string;
  typeFrCa: string;
  typeFrFr: string;
  typeItIt: string;
  typeLocalized: string;
  typeNlNl: string;
  typePtBr: string;
  typeZhCn: string;
  createdByNav: UserType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  questionTranslationTextNav: MdfLocalizedValueType[];
  statusNav: MdfEnumValueType;
  typeTranslationTextNav: MdfLocalizedValueType[];
  wfRequestNav: WfRequestType[];
}

export namespace InterviewQuestionEntity {
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<InterviewQuestionEntity> = new StringField('createdBy', InterviewQuestionEntity, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<InterviewQuestionEntity> = new DateField('createdDateTime', InterviewQuestionEntity, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: StringField<InterviewQuestionEntity> = new StringField('externalCode', InterviewQuestionEntity, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<InterviewQuestionEntity> = new StringField('lastModifiedBy', InterviewQuestionEntity, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<InterviewQuestionEntity> = new DateField('lastModifiedDateTime', InterviewQuestionEntity, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<InterviewQuestionEntity> = new StringField('mdfSystemRecordStatus', InterviewQuestionEntity, 'Edm.String');
  /**
   * Static representation of the [[questionDeDe]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const QUESTION_DE_DE: StringField<InterviewQuestionEntity> = new StringField('question_de_DE', InterviewQuestionEntity, 'Edm.String');
  /**
   * Static representation of the [[questionDefaultValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const QUESTION_DEFAULT_VALUE: StringField<InterviewQuestionEntity> = new StringField('question_defaultValue', InterviewQuestionEntity, 'Edm.String');
  /**
   * Static representation of the [[questionEnDebug]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const QUESTION_EN_DEBUG: StringField<InterviewQuestionEntity> = new StringField('question_en_DEBUG', InterviewQuestionEntity, 'Edm.String');
  /**
   * Static representation of the [[questionEnGb]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const QUESTION_EN_GB: StringField<InterviewQuestionEntity> = new StringField('question_en_GB', InterviewQuestionEntity, 'Edm.String');
  /**
   * Static representation of the [[questionEnUs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const QUESTION_EN_US: StringField<InterviewQuestionEntity> = new StringField('question_en_US', InterviewQuestionEntity, 'Edm.String');
  /**
   * Static representation of the [[questionEsEs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const QUESTION_ES_ES: StringField<InterviewQuestionEntity> = new StringField('question_es_ES', InterviewQuestionEntity, 'Edm.String');
  /**
   * Static representation of the [[questionEsMx]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const QUESTION_ES_MX: StringField<InterviewQuestionEntity> = new StringField('question_es_MX', InterviewQuestionEntity, 'Edm.String');
  /**
   * Static representation of the [[questionFrCa]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const QUESTION_FR_CA: StringField<InterviewQuestionEntity> = new StringField('question_fr_CA', InterviewQuestionEntity, 'Edm.String');
  /**
   * Static representation of the [[questionFrFr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const QUESTION_FR_FR: StringField<InterviewQuestionEntity> = new StringField('question_fr_FR', InterviewQuestionEntity, 'Edm.String');
  /**
   * Static representation of the [[questionItIt]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const QUESTION_IT_IT: StringField<InterviewQuestionEntity> = new StringField('question_it_IT', InterviewQuestionEntity, 'Edm.String');
  /**
   * Static representation of the [[questionLocalized]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const QUESTION_LOCALIZED: StringField<InterviewQuestionEntity> = new StringField('question_localized', InterviewQuestionEntity, 'Edm.String');
  /**
   * Static representation of the [[questionNlNl]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const QUESTION_NL_NL: StringField<InterviewQuestionEntity> = new StringField('question_nl_NL', InterviewQuestionEntity, 'Edm.String');
  /**
   * Static representation of the [[questionPtBr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const QUESTION_PT_BR: StringField<InterviewQuestionEntity> = new StringField('question_pt_BR', InterviewQuestionEntity, 'Edm.String');
  /**
   * Static representation of the [[questionZhCn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const QUESTION_ZH_CN: StringField<InterviewQuestionEntity> = new StringField('question_zh_CN', InterviewQuestionEntity, 'Edm.String');
  /**
   * Static representation of the [[status]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS: StringField<InterviewQuestionEntity> = new StringField('status', InterviewQuestionEntity, 'Edm.String');
  /**
   * Static representation of the [[subModule]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUB_MODULE: StringField<InterviewQuestionEntity> = new StringField('subModule', InterviewQuestionEntity, 'Edm.String');
  /**
   * Static representation of the [[typeDeDe]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TYPE_DE_DE: StringField<InterviewQuestionEntity> = new StringField('type_de_DE', InterviewQuestionEntity, 'Edm.String');
  /**
   * Static representation of the [[typeDefaultValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TYPE_DEFAULT_VALUE: StringField<InterviewQuestionEntity> = new StringField('type_defaultValue', InterviewQuestionEntity, 'Edm.String');
  /**
   * Static representation of the [[typeEnDebug]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TYPE_EN_DEBUG: StringField<InterviewQuestionEntity> = new StringField('type_en_DEBUG', InterviewQuestionEntity, 'Edm.String');
  /**
   * Static representation of the [[typeEnGb]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TYPE_EN_GB: StringField<InterviewQuestionEntity> = new StringField('type_en_GB', InterviewQuestionEntity, 'Edm.String');
  /**
   * Static representation of the [[typeEnUs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TYPE_EN_US: StringField<InterviewQuestionEntity> = new StringField('type_en_US', InterviewQuestionEntity, 'Edm.String');
  /**
   * Static representation of the [[typeEsEs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TYPE_ES_ES: StringField<InterviewQuestionEntity> = new StringField('type_es_ES', InterviewQuestionEntity, 'Edm.String');
  /**
   * Static representation of the [[typeEsMx]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TYPE_ES_MX: StringField<InterviewQuestionEntity> = new StringField('type_es_MX', InterviewQuestionEntity, 'Edm.String');
  /**
   * Static representation of the [[typeFrCa]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TYPE_FR_CA: StringField<InterviewQuestionEntity> = new StringField('type_fr_CA', InterviewQuestionEntity, 'Edm.String');
  /**
   * Static representation of the [[typeFrFr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TYPE_FR_FR: StringField<InterviewQuestionEntity> = new StringField('type_fr_FR', InterviewQuestionEntity, 'Edm.String');
  /**
   * Static representation of the [[typeItIt]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TYPE_IT_IT: StringField<InterviewQuestionEntity> = new StringField('type_it_IT', InterviewQuestionEntity, 'Edm.String');
  /**
   * Static representation of the [[typeLocalized]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TYPE_LOCALIZED: StringField<InterviewQuestionEntity> = new StringField('type_localized', InterviewQuestionEntity, 'Edm.String');
  /**
   * Static representation of the [[typeNlNl]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TYPE_NL_NL: StringField<InterviewQuestionEntity> = new StringField('type_nl_NL', InterviewQuestionEntity, 'Edm.String');
  /**
   * Static representation of the [[typePtBr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TYPE_PT_BR: StringField<InterviewQuestionEntity> = new StringField('type_pt_BR', InterviewQuestionEntity, 'Edm.String');
  /**
   * Static representation of the [[typeZhCn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TYPE_ZH_CN: StringField<InterviewQuestionEntity> = new StringField('type_zh_CN', InterviewQuestionEntity, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<InterviewQuestionEntity, User> = new OneToOneLink('createdByNav', InterviewQuestionEntity, User);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<InterviewQuestionEntity, User> = new OneToOneLink('lastModifiedByNav', InterviewQuestionEntity, User);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<InterviewQuestionEntity, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', InterviewQuestionEntity, MdfEnumValue);
  /**
   * Static representation of the one-to-many navigation property [[questionTranslationTextNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const QUESTION_TRANSLATION_TEXT_NAV: Link<InterviewQuestionEntity, MdfLocalizedValue> = new Link('questionTranslationTextNav', InterviewQuestionEntity, MdfLocalizedValue);
  /**
   * Static representation of the one-to-one navigation property [[statusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS_NAV: OneToOneLink<InterviewQuestionEntity, MdfEnumValue> = new OneToOneLink('statusNav', InterviewQuestionEntity, MdfEnumValue);
  /**
   * Static representation of the one-to-many navigation property [[typeTranslationTextNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TYPE_TRANSLATION_TEXT_NAV: Link<InterviewQuestionEntity, MdfLocalizedValue> = new Link('typeTranslationTextNav', InterviewQuestionEntity, MdfLocalizedValue);
  /**
   * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WF_REQUEST_NAV: Link<InterviewQuestionEntity, WfRequest> = new Link('wfRequestNav', InterviewQuestionEntity, WfRequest);
  /**
   * All fields of the InterviewQuestionEntity entity.
   */
  export const _allFields: Array<StringField<InterviewQuestionEntity> | DateField<InterviewQuestionEntity> | OneToOneLink<InterviewQuestionEntity, User> | OneToOneLink<InterviewQuestionEntity, MdfEnumValue> | Link<InterviewQuestionEntity, MdfLocalizedValue> | Link<InterviewQuestionEntity, WfRequest>> = [
    InterviewQuestionEntity.CREATED_BY,
    InterviewQuestionEntity.CREATED_DATE_TIME,
    InterviewQuestionEntity.EXTERNAL_CODE,
    InterviewQuestionEntity.LAST_MODIFIED_BY,
    InterviewQuestionEntity.LAST_MODIFIED_DATE_TIME,
    InterviewQuestionEntity.MDF_SYSTEM_RECORD_STATUS,
    InterviewQuestionEntity.QUESTION_DE_DE,
    InterviewQuestionEntity.QUESTION_DEFAULT_VALUE,
    InterviewQuestionEntity.QUESTION_EN_DEBUG,
    InterviewQuestionEntity.QUESTION_EN_GB,
    InterviewQuestionEntity.QUESTION_EN_US,
    InterviewQuestionEntity.QUESTION_ES_ES,
    InterviewQuestionEntity.QUESTION_ES_MX,
    InterviewQuestionEntity.QUESTION_FR_CA,
    InterviewQuestionEntity.QUESTION_FR_FR,
    InterviewQuestionEntity.QUESTION_IT_IT,
    InterviewQuestionEntity.QUESTION_LOCALIZED,
    InterviewQuestionEntity.QUESTION_NL_NL,
    InterviewQuestionEntity.QUESTION_PT_BR,
    InterviewQuestionEntity.QUESTION_ZH_CN,
    InterviewQuestionEntity.STATUS,
    InterviewQuestionEntity.SUB_MODULE,
    InterviewQuestionEntity.TYPE_DE_DE,
    InterviewQuestionEntity.TYPE_DEFAULT_VALUE,
    InterviewQuestionEntity.TYPE_EN_DEBUG,
    InterviewQuestionEntity.TYPE_EN_GB,
    InterviewQuestionEntity.TYPE_EN_US,
    InterviewQuestionEntity.TYPE_ES_ES,
    InterviewQuestionEntity.TYPE_ES_MX,
    InterviewQuestionEntity.TYPE_FR_CA,
    InterviewQuestionEntity.TYPE_FR_FR,
    InterviewQuestionEntity.TYPE_IT_IT,
    InterviewQuestionEntity.TYPE_LOCALIZED,
    InterviewQuestionEntity.TYPE_NL_NL,
    InterviewQuestionEntity.TYPE_PT_BR,
    InterviewQuestionEntity.TYPE_ZH_CN,
    InterviewQuestionEntity.CREATED_BY_NAV,
    InterviewQuestionEntity.LAST_MODIFIED_BY_NAV,
    InterviewQuestionEntity.MDF_SYSTEM_RECORD_STATUS_NAV,
    InterviewQuestionEntity.QUESTION_TRANSLATION_TEXT_NAV,
    InterviewQuestionEntity.STATUS_NAV,
    InterviewQuestionEntity.TYPE_TRANSLATION_TEXT_NAV,
    InterviewQuestionEntity.WF_REQUEST_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<InterviewQuestionEntity> = new AllFields('*', InterviewQuestionEntity);
  /**
   * All key fields of the InterviewQuestionEntity entity.
   */
  export const _keyFields: Array<Selectable<InterviewQuestionEntity>> = [InterviewQuestionEntity.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property InterviewQuestionEntity.
   */
  export const _keys: { [keys: string]: Selectable<InterviewQuestionEntity> } = InterviewQuestionEntity._keyFields.reduce((acc: { [keys: string]: Selectable<InterviewQuestionEntity> }, field: Selectable<InterviewQuestionEntity>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
