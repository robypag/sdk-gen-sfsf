/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SpotAwardProgramAdvancedSettingsRequestBuilder } from './SpotAwardProgramAdvancedSettingsRequestBuilder';
import { Moment } from 'moment';
import { AllFields, BooleanField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "SpotAwardProgramAdvancedSettings" of service "SFOData".
 */
export class SpotAwardProgramAdvancedSettings extends Entity implements SpotAwardProgramAdvancedSettingsType {
  /**
   * Technical entity name for SpotAwardProgramAdvancedSettings.
   */
  static _entityName = 'SpotAwardProgramAdvancedSettings';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for SpotAwardProgramAdvancedSettings.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Spot Award Program_Code.
   * Maximum length: 38.
   */
  spotAwardProgramExternalCode!: string;
  /**
   * Can Nominators override the recommended award amount?.
   * @nullable
   */
  canOverrideGuidelineAmount?: boolean;
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
   * documentTemplateGroup.
   * Maximum length: 255.
   * @nullable
   */
  documentTemplateGroup?: string;
  /**
   * Enable integration with Employee Central (EC).
   * @nullable
   */
  enableEcIntegration?: boolean;
  /**
   * Code.
   * Maximum length: 38.
   */
  externalCode!: string;
  /**
   * isBudgetAssociated.
   * @nullable
   */
  isBudgetAssociated?: boolean;
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
   * Maximum length: 255.
   * @nullable
   */
  mdfSystemRecordStatus?: string;
  /**
   * Enter a message for Nominators during override.
   * Maximum length: 255.
   * @nullable
   */
  overrideGuidelineAmountMsgDeDe?: string;
  /**
   * Enter a message for Nominators during override.
   * Maximum length: 255.
   * @nullable
   */
  overrideGuidelineAmountMsgDefaultValue?: string;
  /**
   * Enter a message for Nominators during override.
   * Maximum length: 255.
   * @nullable
   */
  overrideGuidelineAmountMsgEnDebug?: string;
  /**
   * Enter a message for Nominators during override.
   * Maximum length: 255.
   * @nullable
   */
  overrideGuidelineAmountMsgEnGb?: string;
  /**
   * Enter a message for Nominators during override.
   * Maximum length: 255.
   * @nullable
   */
  overrideGuidelineAmountMsgEnUs?: string;
  /**
   * Enter a message for Nominators during override.
   * Maximum length: 255.
   * @nullable
   */
  overrideGuidelineAmountMsgEsEs?: string;
  /**
   * Enter a message for Nominators during override.
   * Maximum length: 255.
   * @nullable
   */
  overrideGuidelineAmountMsgEsMx?: string;
  /**
   * Enter a message for Nominators during override.
   * Maximum length: 255.
   * @nullable
   */
  overrideGuidelineAmountMsgFrCa?: string;
  /**
   * Enter a message for Nominators during override.
   * Maximum length: 255.
   * @nullable
   */
  overrideGuidelineAmountMsgFrFr?: string;
  /**
   * Enter a message for Nominators during override.
   * Maximum length: 255.
   * @nullable
   */
  overrideGuidelineAmountMsgItIt?: string;
  /**
   * Enter a message for Nominators during override.
   * Maximum length: 255.
   * @nullable
   */
  overrideGuidelineAmountMsgLocalized?: string;
  /**
   * Enter a message for Nominators during override.
   * Maximum length: 255.
   * @nullable
   */
  overrideGuidelineAmountMsgNlNl?: string;
  /**
   * Enter a message for Nominators during override.
   * Maximum length: 255.
   * @nullable
   */
  overrideGuidelineAmountMsgPtBr?: string;
  /**
   * Enter a message for Nominators during override.
   * Maximum length: 255.
   * @nullable
   */
  overrideGuidelineAmountMsgZhCn?: string;
  /**
   * Pay Component.
   * Maximum length: 32.
   * @nullable
   */
  payComponent?: string;
  /**
   * Use Employee Central as employee data source.
   * @nullable
   */
  useEcAsDataSource?: boolean;
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
  overrideGuidelineAmountMsgTranslationTextNav!: MdfLocalizedValue[];
  /**
   * One-to-many navigation property to the [[FoPayComponent]] entity.
   */
  payComponentNav!: FoPayComponent[];

  /**
   * Returns an entity builder to construct instances `SpotAwardProgramAdvancedSettings`.
   * @returns A builder that constructs instances of entity type `SpotAwardProgramAdvancedSettings`.
   */
  static builder(): EntityBuilderType<SpotAwardProgramAdvancedSettings, SpotAwardProgramAdvancedSettingsTypeForceMandatory> {
    return Entity.entityBuilder(SpotAwardProgramAdvancedSettings);
  }

  /**
   * Returns a request builder to construct requests for operations on the `SpotAwardProgramAdvancedSettings` entity type.
   * @returns A `SpotAwardProgramAdvancedSettings` request builder.
   */
  static requestBuilder(): SpotAwardProgramAdvancedSettingsRequestBuilder {
    return new SpotAwardProgramAdvancedSettingsRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `SpotAwardProgramAdvancedSettings`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `SpotAwardProgramAdvancedSettings`.
   */
  static customField(fieldName: string): CustomField<SpotAwardProgramAdvancedSettings> {
    return Entity.customFieldSelector(fieldName, SpotAwardProgramAdvancedSettings);
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
import { FoPayComponent, FoPayComponentType } from './FoPayComponent';

export interface SpotAwardProgramAdvancedSettingsType {
  spotAwardProgramExternalCode: string;
  canOverrideGuidelineAmount?: boolean;
  createdBy?: string;
  createdDateTime?: Moment;
  documentTemplateGroup?: string;
  enableEcIntegration?: boolean;
  externalCode: string;
  isBudgetAssociated?: boolean;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  mdfSystemRecordStatus?: string;
  overrideGuidelineAmountMsgDeDe?: string;
  overrideGuidelineAmountMsgDefaultValue?: string;
  overrideGuidelineAmountMsgEnDebug?: string;
  overrideGuidelineAmountMsgEnGb?: string;
  overrideGuidelineAmountMsgEnUs?: string;
  overrideGuidelineAmountMsgEsEs?: string;
  overrideGuidelineAmountMsgEsMx?: string;
  overrideGuidelineAmountMsgFrCa?: string;
  overrideGuidelineAmountMsgFrFr?: string;
  overrideGuidelineAmountMsgItIt?: string;
  overrideGuidelineAmountMsgLocalized?: string;
  overrideGuidelineAmountMsgNlNl?: string;
  overrideGuidelineAmountMsgPtBr?: string;
  overrideGuidelineAmountMsgZhCn?: string;
  payComponent?: string;
  useEcAsDataSource?: boolean;
  createdByNav: UserType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  overrideGuidelineAmountMsgTranslationTextNav: MdfLocalizedValueType[];
  payComponentNav: FoPayComponentType[];
}

export interface SpotAwardProgramAdvancedSettingsTypeForceMandatory {
  spotAwardProgramExternalCode: string;
  canOverrideGuidelineAmount: boolean;
  createdBy: string;
  createdDateTime: Moment;
  documentTemplateGroup: string;
  enableEcIntegration: boolean;
  externalCode: string;
  isBudgetAssociated: boolean;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  mdfSystemRecordStatus: string;
  overrideGuidelineAmountMsgDeDe: string;
  overrideGuidelineAmountMsgDefaultValue: string;
  overrideGuidelineAmountMsgEnDebug: string;
  overrideGuidelineAmountMsgEnGb: string;
  overrideGuidelineAmountMsgEnUs: string;
  overrideGuidelineAmountMsgEsEs: string;
  overrideGuidelineAmountMsgEsMx: string;
  overrideGuidelineAmountMsgFrCa: string;
  overrideGuidelineAmountMsgFrFr: string;
  overrideGuidelineAmountMsgItIt: string;
  overrideGuidelineAmountMsgLocalized: string;
  overrideGuidelineAmountMsgNlNl: string;
  overrideGuidelineAmountMsgPtBr: string;
  overrideGuidelineAmountMsgZhCn: string;
  payComponent: string;
  useEcAsDataSource: boolean;
  createdByNav: UserType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  overrideGuidelineAmountMsgTranslationTextNav: MdfLocalizedValueType[];
  payComponentNav: FoPayComponentType[];
}

export namespace SpotAwardProgramAdvancedSettings {
  /**
   * Static representation of the [[spotAwardProgramExternalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SPOT_AWARD_PROGRAM_EXTERNAL_CODE: StringField<SpotAwardProgramAdvancedSettings> = new StringField('SpotAwardProgram_externalCode', SpotAwardProgramAdvancedSettings, 'Edm.String');
  /**
   * Static representation of the [[canOverrideGuidelineAmount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CAN_OVERRIDE_GUIDELINE_AMOUNT: BooleanField<SpotAwardProgramAdvancedSettings> = new BooleanField('canOverrideGuidelineAmount', SpotAwardProgramAdvancedSettings, 'Edm.Boolean');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<SpotAwardProgramAdvancedSettings> = new StringField('createdBy', SpotAwardProgramAdvancedSettings, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<SpotAwardProgramAdvancedSettings> = new DateField('createdDateTime', SpotAwardProgramAdvancedSettings, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[documentTemplateGroup]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOCUMENT_TEMPLATE_GROUP: StringField<SpotAwardProgramAdvancedSettings> = new StringField('documentTemplateGroup', SpotAwardProgramAdvancedSettings, 'Edm.String');
  /**
   * Static representation of the [[enableEcIntegration]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ENABLE_EC_INTEGRATION: BooleanField<SpotAwardProgramAdvancedSettings> = new BooleanField('enableECIntegration', SpotAwardProgramAdvancedSettings, 'Edm.Boolean');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: StringField<SpotAwardProgramAdvancedSettings> = new StringField('externalCode', SpotAwardProgramAdvancedSettings, 'Edm.String');
  /**
   * Static representation of the [[isBudgetAssociated]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_BUDGET_ASSOCIATED: BooleanField<SpotAwardProgramAdvancedSettings> = new BooleanField('isBudgetAssociated', SpotAwardProgramAdvancedSettings, 'Edm.Boolean');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<SpotAwardProgramAdvancedSettings> = new StringField('lastModifiedBy', SpotAwardProgramAdvancedSettings, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<SpotAwardProgramAdvancedSettings> = new DateField('lastModifiedDateTime', SpotAwardProgramAdvancedSettings, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<SpotAwardProgramAdvancedSettings> = new StringField('mdfSystemRecordStatus', SpotAwardProgramAdvancedSettings, 'Edm.String');
  /**
   * Static representation of the [[overrideGuidelineAmountMsgDeDe]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OVERRIDE_GUIDELINE_AMOUNT_MSG_DE_DE: StringField<SpotAwardProgramAdvancedSettings> = new StringField('overrideGuidelineAmountMsg_de_DE', SpotAwardProgramAdvancedSettings, 'Edm.String');
  /**
   * Static representation of the [[overrideGuidelineAmountMsgDefaultValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OVERRIDE_GUIDELINE_AMOUNT_MSG_DEFAULT_VALUE: StringField<SpotAwardProgramAdvancedSettings> = new StringField('overrideGuidelineAmountMsg_defaultValue', SpotAwardProgramAdvancedSettings, 'Edm.String');
  /**
   * Static representation of the [[overrideGuidelineAmountMsgEnDebug]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OVERRIDE_GUIDELINE_AMOUNT_MSG_EN_DEBUG: StringField<SpotAwardProgramAdvancedSettings> = new StringField('overrideGuidelineAmountMsg_en_DEBUG', SpotAwardProgramAdvancedSettings, 'Edm.String');
  /**
   * Static representation of the [[overrideGuidelineAmountMsgEnGb]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OVERRIDE_GUIDELINE_AMOUNT_MSG_EN_GB: StringField<SpotAwardProgramAdvancedSettings> = new StringField('overrideGuidelineAmountMsg_en_GB', SpotAwardProgramAdvancedSettings, 'Edm.String');
  /**
   * Static representation of the [[overrideGuidelineAmountMsgEnUs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OVERRIDE_GUIDELINE_AMOUNT_MSG_EN_US: StringField<SpotAwardProgramAdvancedSettings> = new StringField('overrideGuidelineAmountMsg_en_US', SpotAwardProgramAdvancedSettings, 'Edm.String');
  /**
   * Static representation of the [[overrideGuidelineAmountMsgEsEs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OVERRIDE_GUIDELINE_AMOUNT_MSG_ES_ES: StringField<SpotAwardProgramAdvancedSettings> = new StringField('overrideGuidelineAmountMsg_es_ES', SpotAwardProgramAdvancedSettings, 'Edm.String');
  /**
   * Static representation of the [[overrideGuidelineAmountMsgEsMx]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OVERRIDE_GUIDELINE_AMOUNT_MSG_ES_MX: StringField<SpotAwardProgramAdvancedSettings> = new StringField('overrideGuidelineAmountMsg_es_MX', SpotAwardProgramAdvancedSettings, 'Edm.String');
  /**
   * Static representation of the [[overrideGuidelineAmountMsgFrCa]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OVERRIDE_GUIDELINE_AMOUNT_MSG_FR_CA: StringField<SpotAwardProgramAdvancedSettings> = new StringField('overrideGuidelineAmountMsg_fr_CA', SpotAwardProgramAdvancedSettings, 'Edm.String');
  /**
   * Static representation of the [[overrideGuidelineAmountMsgFrFr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OVERRIDE_GUIDELINE_AMOUNT_MSG_FR_FR: StringField<SpotAwardProgramAdvancedSettings> = new StringField('overrideGuidelineAmountMsg_fr_FR', SpotAwardProgramAdvancedSettings, 'Edm.String');
  /**
   * Static representation of the [[overrideGuidelineAmountMsgItIt]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OVERRIDE_GUIDELINE_AMOUNT_MSG_IT_IT: StringField<SpotAwardProgramAdvancedSettings> = new StringField('overrideGuidelineAmountMsg_it_IT', SpotAwardProgramAdvancedSettings, 'Edm.String');
  /**
   * Static representation of the [[overrideGuidelineAmountMsgLocalized]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OVERRIDE_GUIDELINE_AMOUNT_MSG_LOCALIZED: StringField<SpotAwardProgramAdvancedSettings> = new StringField('overrideGuidelineAmountMsg_localized', SpotAwardProgramAdvancedSettings, 'Edm.String');
  /**
   * Static representation of the [[overrideGuidelineAmountMsgNlNl]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OVERRIDE_GUIDELINE_AMOUNT_MSG_NL_NL: StringField<SpotAwardProgramAdvancedSettings> = new StringField('overrideGuidelineAmountMsg_nl_NL', SpotAwardProgramAdvancedSettings, 'Edm.String');
  /**
   * Static representation of the [[overrideGuidelineAmountMsgPtBr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OVERRIDE_GUIDELINE_AMOUNT_MSG_PT_BR: StringField<SpotAwardProgramAdvancedSettings> = new StringField('overrideGuidelineAmountMsg_pt_BR', SpotAwardProgramAdvancedSettings, 'Edm.String');
  /**
   * Static representation of the [[overrideGuidelineAmountMsgZhCn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OVERRIDE_GUIDELINE_AMOUNT_MSG_ZH_CN: StringField<SpotAwardProgramAdvancedSettings> = new StringField('overrideGuidelineAmountMsg_zh_CN', SpotAwardProgramAdvancedSettings, 'Edm.String');
  /**
   * Static representation of the [[payComponent]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAY_COMPONENT: StringField<SpotAwardProgramAdvancedSettings> = new StringField('payComponent', SpotAwardProgramAdvancedSettings, 'Edm.String');
  /**
   * Static representation of the [[useEcAsDataSource]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USE_EC_AS_DATA_SOURCE: BooleanField<SpotAwardProgramAdvancedSettings> = new BooleanField('useECAsDataSource', SpotAwardProgramAdvancedSettings, 'Edm.Boolean');
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<SpotAwardProgramAdvancedSettings, User> = new OneToOneLink('createdByNav', SpotAwardProgramAdvancedSettings, User);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<SpotAwardProgramAdvancedSettings, User> = new OneToOneLink('lastModifiedByNav', SpotAwardProgramAdvancedSettings, User);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<SpotAwardProgramAdvancedSettings, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', SpotAwardProgramAdvancedSettings, MdfEnumValue);
  /**
   * Static representation of the one-to-many navigation property [[overrideGuidelineAmountMsgTranslationTextNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OVERRIDE_GUIDELINE_AMOUNT_MSG_TRANSLATION_TEXT_NAV: Link<SpotAwardProgramAdvancedSettings, MdfLocalizedValue> = new Link('overrideGuidelineAmountMsgTranslationTextNav', SpotAwardProgramAdvancedSettings, MdfLocalizedValue);
  /**
   * Static representation of the one-to-many navigation property [[payComponentNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAY_COMPONENT_NAV: Link<SpotAwardProgramAdvancedSettings, FoPayComponent> = new Link('payComponentNav', SpotAwardProgramAdvancedSettings, FoPayComponent);
  /**
   * All fields of the SpotAwardProgramAdvancedSettings entity.
   */
  export const _allFields: Array<StringField<SpotAwardProgramAdvancedSettings> | BooleanField<SpotAwardProgramAdvancedSettings> | DateField<SpotAwardProgramAdvancedSettings> | OneToOneLink<SpotAwardProgramAdvancedSettings, User> | OneToOneLink<SpotAwardProgramAdvancedSettings, MdfEnumValue> | Link<SpotAwardProgramAdvancedSettings, MdfLocalizedValue> | Link<SpotAwardProgramAdvancedSettings, FoPayComponent>> = [
    SpotAwardProgramAdvancedSettings.SPOT_AWARD_PROGRAM_EXTERNAL_CODE,
    SpotAwardProgramAdvancedSettings.CAN_OVERRIDE_GUIDELINE_AMOUNT,
    SpotAwardProgramAdvancedSettings.CREATED_BY,
    SpotAwardProgramAdvancedSettings.CREATED_DATE_TIME,
    SpotAwardProgramAdvancedSettings.DOCUMENT_TEMPLATE_GROUP,
    SpotAwardProgramAdvancedSettings.ENABLE_EC_INTEGRATION,
    SpotAwardProgramAdvancedSettings.EXTERNAL_CODE,
    SpotAwardProgramAdvancedSettings.IS_BUDGET_ASSOCIATED,
    SpotAwardProgramAdvancedSettings.LAST_MODIFIED_BY,
    SpotAwardProgramAdvancedSettings.LAST_MODIFIED_DATE_TIME,
    SpotAwardProgramAdvancedSettings.MDF_SYSTEM_RECORD_STATUS,
    SpotAwardProgramAdvancedSettings.OVERRIDE_GUIDELINE_AMOUNT_MSG_DE_DE,
    SpotAwardProgramAdvancedSettings.OVERRIDE_GUIDELINE_AMOUNT_MSG_DEFAULT_VALUE,
    SpotAwardProgramAdvancedSettings.OVERRIDE_GUIDELINE_AMOUNT_MSG_EN_DEBUG,
    SpotAwardProgramAdvancedSettings.OVERRIDE_GUIDELINE_AMOUNT_MSG_EN_GB,
    SpotAwardProgramAdvancedSettings.OVERRIDE_GUIDELINE_AMOUNT_MSG_EN_US,
    SpotAwardProgramAdvancedSettings.OVERRIDE_GUIDELINE_AMOUNT_MSG_ES_ES,
    SpotAwardProgramAdvancedSettings.OVERRIDE_GUIDELINE_AMOUNT_MSG_ES_MX,
    SpotAwardProgramAdvancedSettings.OVERRIDE_GUIDELINE_AMOUNT_MSG_FR_CA,
    SpotAwardProgramAdvancedSettings.OVERRIDE_GUIDELINE_AMOUNT_MSG_FR_FR,
    SpotAwardProgramAdvancedSettings.OVERRIDE_GUIDELINE_AMOUNT_MSG_IT_IT,
    SpotAwardProgramAdvancedSettings.OVERRIDE_GUIDELINE_AMOUNT_MSG_LOCALIZED,
    SpotAwardProgramAdvancedSettings.OVERRIDE_GUIDELINE_AMOUNT_MSG_NL_NL,
    SpotAwardProgramAdvancedSettings.OVERRIDE_GUIDELINE_AMOUNT_MSG_PT_BR,
    SpotAwardProgramAdvancedSettings.OVERRIDE_GUIDELINE_AMOUNT_MSG_ZH_CN,
    SpotAwardProgramAdvancedSettings.PAY_COMPONENT,
    SpotAwardProgramAdvancedSettings.USE_EC_AS_DATA_SOURCE,
    SpotAwardProgramAdvancedSettings.CREATED_BY_NAV,
    SpotAwardProgramAdvancedSettings.LAST_MODIFIED_BY_NAV,
    SpotAwardProgramAdvancedSettings.MDF_SYSTEM_RECORD_STATUS_NAV,
    SpotAwardProgramAdvancedSettings.OVERRIDE_GUIDELINE_AMOUNT_MSG_TRANSLATION_TEXT_NAV,
    SpotAwardProgramAdvancedSettings.PAY_COMPONENT_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<SpotAwardProgramAdvancedSettings> = new AllFields('*', SpotAwardProgramAdvancedSettings);
  /**
   * All key fields of the SpotAwardProgramAdvancedSettings entity.
   */
  export const _keyFields: Array<Selectable<SpotAwardProgramAdvancedSettings>> = [SpotAwardProgramAdvancedSettings.SPOT_AWARD_PROGRAM_EXTERNAL_CODE, SpotAwardProgramAdvancedSettings.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property SpotAwardProgramAdvancedSettings.
   */
  export const _keys: { [keys: string]: Selectable<SpotAwardProgramAdvancedSettings> } = SpotAwardProgramAdvancedSettings._keyFields.reduce((acc: { [keys: string]: Selectable<SpotAwardProgramAdvancedSettings> }, field: Selectable<SpotAwardProgramAdvancedSettings>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
