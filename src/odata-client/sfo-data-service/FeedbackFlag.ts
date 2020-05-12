/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FeedbackFlagRequestBuilder } from './FeedbackFlagRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "FeedbackFlag" of service "SFOData".
 */
export class FeedbackFlag extends Entity implements FeedbackFlagType {
  /**
   * Technical entity name for FeedbackFlag.
   */
  static _entityName = 'FeedbackFlag';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for FeedbackFlag.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Color.
   * Maximum length: 255.
   * @nullable
   */
  color?: string;
  /**
   * Created By.
   * Maximum length: 255.
   * @nullable
   */
  createdBy?: string;
  /**
   * Created Date.
   * @nullable
   */
  createdDateTime?: Moment;
  /**
   * Feedback Flag ID.
   * Maximum length: 128.
   */
  feedbackFlagId!: string;
  /**
   * Flag Name.
   * Maximum length: 4000.
   * @nullable
   */
  flagNameDeDe?: string;
  /**
   * Flag Name.
   * Maximum length: 4000.
   * @nullable
   */
  flagNameDefaultValue?: string;
  /**
   * Flag Name.
   * Maximum length: 4000.
   * @nullable
   */
  flagNameEnDebug?: string;
  /**
   * Flag Name.
   * Maximum length: 4000.
   * @nullable
   */
  flagNameEnGb?: string;
  /**
   * Flag Name.
   * Maximum length: 4000.
   * @nullable
   */
  flagNameEnUs?: string;
  /**
   * Flag Name.
   * Maximum length: 4000.
   * @nullable
   */
  flagNameEsEs?: string;
  /**
   * Flag Name.
   * Maximum length: 4000.
   * @nullable
   */
  flagNameEsMx?: string;
  /**
   * Flag Name.
   * Maximum length: 4000.
   * @nullable
   */
  flagNameFrCa?: string;
  /**
   * Flag Name.
   * Maximum length: 4000.
   * @nullable
   */
  flagNameFrFr?: string;
  /**
   * Flag Name.
   * Maximum length: 4000.
   * @nullable
   */
  flagNameItIt?: string;
  /**
   * Flag Name.
   * Maximum length: 4000.
   * @nullable
   */
  flagNameLocalized?: string;
  /**
   * Flag Name.
   * Maximum length: 4000.
   * @nullable
   */
  flagNameNlNl?: string;
  /**
   * Flag Name.
   * Maximum length: 4000.
   * @nullable
   */
  flagNamePtBr?: string;
  /**
   * Flag Name.
   * Maximum length: 4000.
   * @nullable
   */
  flagNameZhCn?: string;
  /**
   * Icon.
   * Maximum length: 255.
   * @nullable
   */
  icon?: string;
  /**
   * Last Modified By.
   * Maximum length: 255.
   * @nullable
   */
  lastModifiedBy?: string;
  /**
   * Last Modified Date.
   * @nullable
   */
  lastModifiedDateTime?: Moment;
  /**
   * Record Status.
   * Maximum length: 128.
   * @nullable
   */
  mdfSystemRecordStatus?: string;
  /**
   * mdfSystemRecordId.
   * Maximum length: 255.
   * @nullable
   */
  recordId?: string;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  createdByNav!: User;
  /**
   * One-to-many navigation property to the [[MdfLocalizedValue]] entity.
   */
  flagNameTranslationTextNav!: MdfLocalizedValue[];
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  lastModifiedByNav!: User;
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  mdfSystemRecordStatusNav!: MdfEnumValue;
  /**
   * One-to-many navigation property to the [[WfRequest]] entity.
   */
  wfRequestNav!: WfRequest[];

  /**
   * Returns an entity builder to construct instances `FeedbackFlag`.
   * @returns A builder that constructs instances of entity type `FeedbackFlag`.
   */
  static builder(): EntityBuilderType<FeedbackFlag, FeedbackFlagTypeForceMandatory> {
    return Entity.entityBuilder(FeedbackFlag);
  }

  /**
   * Returns a request builder to construct requests for operations on the `FeedbackFlag` entity type.
   * @returns A `FeedbackFlag` request builder.
   */
  static requestBuilder(): FeedbackFlagRequestBuilder {
    return new FeedbackFlagRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `FeedbackFlag`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `FeedbackFlag`.
   */
  static customField(fieldName: string): CustomField<FeedbackFlag> {
    return Entity.customFieldSelector(fieldName, FeedbackFlag);
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

export interface FeedbackFlagType {
  color?: string;
  createdBy?: string;
  createdDateTime?: Moment;
  feedbackFlagId: string;
  flagNameDeDe?: string;
  flagNameDefaultValue?: string;
  flagNameEnDebug?: string;
  flagNameEnGb?: string;
  flagNameEnUs?: string;
  flagNameEsEs?: string;
  flagNameEsMx?: string;
  flagNameFrCa?: string;
  flagNameFrFr?: string;
  flagNameItIt?: string;
  flagNameLocalized?: string;
  flagNameNlNl?: string;
  flagNamePtBr?: string;
  flagNameZhCn?: string;
  icon?: string;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  mdfSystemRecordStatus?: string;
  recordId?: string;
  createdByNav: UserType;
  flagNameTranslationTextNav: MdfLocalizedValueType[];
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  wfRequestNav: WfRequestType[];
}

export interface FeedbackFlagTypeForceMandatory {
  color: string;
  createdBy: string;
  createdDateTime: Moment;
  feedbackFlagId: string;
  flagNameDeDe: string;
  flagNameDefaultValue: string;
  flagNameEnDebug: string;
  flagNameEnGb: string;
  flagNameEnUs: string;
  flagNameEsEs: string;
  flagNameEsMx: string;
  flagNameFrCa: string;
  flagNameFrFr: string;
  flagNameItIt: string;
  flagNameLocalized: string;
  flagNameNlNl: string;
  flagNamePtBr: string;
  flagNameZhCn: string;
  icon: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  mdfSystemRecordStatus: string;
  recordId: string;
  createdByNav: UserType;
  flagNameTranslationTextNav: MdfLocalizedValueType[];
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  wfRequestNav: WfRequestType[];
}

export namespace FeedbackFlag {
  /**
   * Static representation of the [[color]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COLOR: StringField<FeedbackFlag> = new StringField('color', FeedbackFlag, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<FeedbackFlag> = new StringField('createdBy', FeedbackFlag, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<FeedbackFlag> = new DateField('createdDateTime', FeedbackFlag, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[feedbackFlagId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FEEDBACK_FLAG_ID: StringField<FeedbackFlag> = new StringField('feedbackFlagId', FeedbackFlag, 'Edm.String');
  /**
   * Static representation of the [[flagNameDeDe]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FLAG_NAME_DE_DE: StringField<FeedbackFlag> = new StringField('flagName_de_DE', FeedbackFlag, 'Edm.String');
  /**
   * Static representation of the [[flagNameDefaultValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FLAG_NAME_DEFAULT_VALUE: StringField<FeedbackFlag> = new StringField('flagName_defaultValue', FeedbackFlag, 'Edm.String');
  /**
   * Static representation of the [[flagNameEnDebug]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FLAG_NAME_EN_DEBUG: StringField<FeedbackFlag> = new StringField('flagName_en_DEBUG', FeedbackFlag, 'Edm.String');
  /**
   * Static representation of the [[flagNameEnGb]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FLAG_NAME_EN_GB: StringField<FeedbackFlag> = new StringField('flagName_en_GB', FeedbackFlag, 'Edm.String');
  /**
   * Static representation of the [[flagNameEnUs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FLAG_NAME_EN_US: StringField<FeedbackFlag> = new StringField('flagName_en_US', FeedbackFlag, 'Edm.String');
  /**
   * Static representation of the [[flagNameEsEs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FLAG_NAME_ES_ES: StringField<FeedbackFlag> = new StringField('flagName_es_ES', FeedbackFlag, 'Edm.String');
  /**
   * Static representation of the [[flagNameEsMx]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FLAG_NAME_ES_MX: StringField<FeedbackFlag> = new StringField('flagName_es_MX', FeedbackFlag, 'Edm.String');
  /**
   * Static representation of the [[flagNameFrCa]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FLAG_NAME_FR_CA: StringField<FeedbackFlag> = new StringField('flagName_fr_CA', FeedbackFlag, 'Edm.String');
  /**
   * Static representation of the [[flagNameFrFr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FLAG_NAME_FR_FR: StringField<FeedbackFlag> = new StringField('flagName_fr_FR', FeedbackFlag, 'Edm.String');
  /**
   * Static representation of the [[flagNameItIt]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FLAG_NAME_IT_IT: StringField<FeedbackFlag> = new StringField('flagName_it_IT', FeedbackFlag, 'Edm.String');
  /**
   * Static representation of the [[flagNameLocalized]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FLAG_NAME_LOCALIZED: StringField<FeedbackFlag> = new StringField('flagName_localized', FeedbackFlag, 'Edm.String');
  /**
   * Static representation of the [[flagNameNlNl]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FLAG_NAME_NL_NL: StringField<FeedbackFlag> = new StringField('flagName_nl_NL', FeedbackFlag, 'Edm.String');
  /**
   * Static representation of the [[flagNamePtBr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FLAG_NAME_PT_BR: StringField<FeedbackFlag> = new StringField('flagName_pt_BR', FeedbackFlag, 'Edm.String');
  /**
   * Static representation of the [[flagNameZhCn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FLAG_NAME_ZH_CN: StringField<FeedbackFlag> = new StringField('flagName_zh_CN', FeedbackFlag, 'Edm.String');
  /**
   * Static representation of the [[icon]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ICON: StringField<FeedbackFlag> = new StringField('icon', FeedbackFlag, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<FeedbackFlag> = new StringField('lastModifiedBy', FeedbackFlag, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<FeedbackFlag> = new DateField('lastModifiedDateTime', FeedbackFlag, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<FeedbackFlag> = new StringField('mdfSystemRecordStatus', FeedbackFlag, 'Edm.String');
  /**
   * Static representation of the [[recordId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RECORD_ID: StringField<FeedbackFlag> = new StringField('recordId', FeedbackFlag, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<FeedbackFlag, User> = new OneToOneLink('createdByNav', FeedbackFlag, User);
  /**
   * Static representation of the one-to-many navigation property [[flagNameTranslationTextNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FLAG_NAME_TRANSLATION_TEXT_NAV: Link<FeedbackFlag, MdfLocalizedValue> = new Link('flagNameTranslationTextNav', FeedbackFlag, MdfLocalizedValue);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<FeedbackFlag, User> = new OneToOneLink('lastModifiedByNav', FeedbackFlag, User);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<FeedbackFlag, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', FeedbackFlag, MdfEnumValue);
  /**
   * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WF_REQUEST_NAV: Link<FeedbackFlag, WfRequest> = new Link('wfRequestNav', FeedbackFlag, WfRequest);
  /**
   * All fields of the FeedbackFlag entity.
   */
  export const _allFields: Array<StringField<FeedbackFlag> | DateField<FeedbackFlag> | OneToOneLink<FeedbackFlag, User> | Link<FeedbackFlag, MdfLocalizedValue> | OneToOneLink<FeedbackFlag, MdfEnumValue> | Link<FeedbackFlag, WfRequest>> = [
    FeedbackFlag.COLOR,
    FeedbackFlag.CREATED_BY,
    FeedbackFlag.CREATED_DATE_TIME,
    FeedbackFlag.FEEDBACK_FLAG_ID,
    FeedbackFlag.FLAG_NAME_DE_DE,
    FeedbackFlag.FLAG_NAME_DEFAULT_VALUE,
    FeedbackFlag.FLAG_NAME_EN_DEBUG,
    FeedbackFlag.FLAG_NAME_EN_GB,
    FeedbackFlag.FLAG_NAME_EN_US,
    FeedbackFlag.FLAG_NAME_ES_ES,
    FeedbackFlag.FLAG_NAME_ES_MX,
    FeedbackFlag.FLAG_NAME_FR_CA,
    FeedbackFlag.FLAG_NAME_FR_FR,
    FeedbackFlag.FLAG_NAME_IT_IT,
    FeedbackFlag.FLAG_NAME_LOCALIZED,
    FeedbackFlag.FLAG_NAME_NL_NL,
    FeedbackFlag.FLAG_NAME_PT_BR,
    FeedbackFlag.FLAG_NAME_ZH_CN,
    FeedbackFlag.ICON,
    FeedbackFlag.LAST_MODIFIED_BY,
    FeedbackFlag.LAST_MODIFIED_DATE_TIME,
    FeedbackFlag.MDF_SYSTEM_RECORD_STATUS,
    FeedbackFlag.RECORD_ID,
    FeedbackFlag.CREATED_BY_NAV,
    FeedbackFlag.FLAG_NAME_TRANSLATION_TEXT_NAV,
    FeedbackFlag.LAST_MODIFIED_BY_NAV,
    FeedbackFlag.MDF_SYSTEM_RECORD_STATUS_NAV,
    FeedbackFlag.WF_REQUEST_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<FeedbackFlag> = new AllFields('*', FeedbackFlag);
  /**
   * All key fields of the FeedbackFlag entity.
   */
  export const _keyFields: Array<Selectable<FeedbackFlag>> = [FeedbackFlag.FEEDBACK_FLAG_ID];
  /**
   * Mapping of all key field names to the respective static field property FeedbackFlag.
   */
  export const _keys: { [keys: string]: Selectable<FeedbackFlag> } = FeedbackFlag._keyFields.reduce((acc: { [keys: string]: Selectable<FeedbackFlag> }, field: Selectable<FeedbackFlag>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
