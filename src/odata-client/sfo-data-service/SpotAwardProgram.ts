/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SpotAwardProgramRequestBuilder } from './SpotAwardProgramRequestBuilder';
import { Moment } from 'moment';
import { AllFields, BooleanField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "SpotAwardProgram" of service "SFOData".
 */
export class SpotAwardProgram extends Entity implements SpotAwardProgramType {
  /**
   * Technical entity name for SpotAwardProgram.
   */
  static _entityName = 'SpotAwardProgram';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for SpotAwardProgram.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
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
   * Currency Conversion Table.
   * Maximum length: 255.
   * @nullable
   */
  currencyConversionTable?: string;
  /**
   * Active.
   * @nullable
   */
  enabled?: boolean;
  /**
   * End Date.
   * @nullable
   */
  endDate?: Moment;
  /**
   * Code.
   * Maximum length: 38.
   */
  externalCode!: string;
  /**
   * Functional Currency.
   * Maximum length: 255.
   * @nullable
   */
  functionalCurrency?: string;
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
   * programDescription.
   * Maximum length: 4000.
   * @nullable
   */
  programDescriptionDeDe?: string;
  /**
   * programDescription.
   * Maximum length: 4000.
   * @nullable
   */
  programDescriptionDefaultValue?: string;
  /**
   * programDescription.
   * Maximum length: 4000.
   * @nullable
   */
  programDescriptionEnDebug?: string;
  /**
   * programDescription.
   * Maximum length: 4000.
   * @nullable
   */
  programDescriptionEnGb?: string;
  /**
   * programDescription.
   * Maximum length: 4000.
   * @nullable
   */
  programDescriptionEnUs?: string;
  /**
   * programDescription.
   * Maximum length: 4000.
   * @nullable
   */
  programDescriptionEsEs?: string;
  /**
   * programDescription.
   * Maximum length: 4000.
   * @nullable
   */
  programDescriptionEsMx?: string;
  /**
   * programDescription.
   * Maximum length: 4000.
   * @nullable
   */
  programDescriptionFrCa?: string;
  /**
   * programDescription.
   * Maximum length: 4000.
   * @nullable
   */
  programDescriptionFrFr?: string;
  /**
   * programDescription.
   * Maximum length: 4000.
   * @nullable
   */
  programDescriptionItIt?: string;
  /**
   * programDescription.
   * Maximum length: 4000.
   * @nullable
   */
  programDescriptionLocalized?: string;
  /**
   * programDescription.
   * Maximum length: 4000.
   * @nullable
   */
  programDescriptionNlNl?: string;
  /**
   * programDescription.
   * Maximum length: 4000.
   * @nullable
   */
  programDescriptionPtBr?: string;
  /**
   * programDescription.
   * Maximum length: 4000.
   * @nullable
   */
  programDescriptionZhCn?: string;
  /**
   * Program Type.
   * Maximum length: 128.
   * @nullable
   */
  programType?: string;
  /**
   * mdfSystemRecordId.
   * Maximum length: 255.
   * @nullable
   */
  recordId?: string;
  /**
   * Start Date.
   * @nullable
   */
  startDate?: Moment;
  /**
   * One-to-one navigation property to the [[SpotAwardProgramAdvancedSettings]] entity.
   */
  advancedSettings!: SpotAwardProgramAdvancedSettings;
  /**
   * One-to-many navigation property to the [[SpotAwardCategory]] entity.
   */
  categories!: SpotAwardCategory[];
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  createdByNav!: User;
  /**
   * One-to-many navigation property to the [[SpotAwardEligibilityRule]] entity.
   */
  eligRules!: SpotAwardEligibilityRule[];
  /**
   * One-to-many navigation property to the [[SpotAwardGuidelinesRule]] entity.
   */
  guidelineRules!: SpotAwardGuidelinesRule[];
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  lastModifiedByNav!: User;
  /**
   * One-to-many navigation property to the [[SpotAwardLevel]] entity.
   */
  levels!: SpotAwardLevel[];
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  mdfSystemRecordStatusNav!: MdfEnumValue;
  /**
   * One-to-many navigation property to the [[MdfLocalizedValue]] entity.
   */
  programDescriptionTranslationTextNav!: MdfLocalizedValue[];
  /**
   * One-to-one navigation property to the [[Attachment]] entity.
   */
  programImageNav!: Attachment;
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  programTypeNav!: MdfEnumValue;
  /**
   * One-to-many navigation property to the [[SpotAwardBudget]] entity.
   */
  spotAwardBudgets!: SpotAwardBudget[];
  /**
   * One-to-many navigation property to the [[WfRequest]] entity.
   */
  wfRequestNav!: WfRequest[];

  /**
   * Returns an entity builder to construct instances `SpotAwardProgram`.
   * @returns A builder that constructs instances of entity type `SpotAwardProgram`.
   */
  static builder(): EntityBuilderType<SpotAwardProgram, SpotAwardProgramTypeForceMandatory> {
    return Entity.entityBuilder(SpotAwardProgram);
  }

  /**
   * Returns a request builder to construct requests for operations on the `SpotAwardProgram` entity type.
   * @returns A `SpotAwardProgram` request builder.
   */
  static requestBuilder(): SpotAwardProgramRequestBuilder {
    return new SpotAwardProgramRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `SpotAwardProgram`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `SpotAwardProgram`.
   */
  static customField(fieldName: string): CustomField<SpotAwardProgram> {
    return Entity.customFieldSelector(fieldName, SpotAwardProgram);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { SpotAwardProgramAdvancedSettings, SpotAwardProgramAdvancedSettingsType } from './SpotAwardProgramAdvancedSettings';
import { SpotAwardCategory, SpotAwardCategoryType } from './SpotAwardCategory';
import { User, UserType } from './User';
import { SpotAwardEligibilityRule, SpotAwardEligibilityRuleType } from './SpotAwardEligibilityRule';
import { SpotAwardGuidelinesRule, SpotAwardGuidelinesRuleType } from './SpotAwardGuidelinesRule';
import { SpotAwardLevel, SpotAwardLevelType } from './SpotAwardLevel';
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';
import { MdfLocalizedValue, MdfLocalizedValueType } from './MdfLocalizedValue';
import { Attachment, AttachmentType } from './Attachment';
import { SpotAwardBudget, SpotAwardBudgetType } from './SpotAwardBudget';
import { WfRequest, WfRequestType } from './WfRequest';

export interface SpotAwardProgramType {
  createdBy?: string;
  createdDateTime?: Moment;
  currencyConversionTable?: string;
  enabled?: boolean;
  endDate?: Moment;
  externalCode: string;
  functionalCurrency?: string;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  mdfSystemRecordStatus?: string;
  programDescriptionDeDe?: string;
  programDescriptionDefaultValue?: string;
  programDescriptionEnDebug?: string;
  programDescriptionEnGb?: string;
  programDescriptionEnUs?: string;
  programDescriptionEsEs?: string;
  programDescriptionEsMx?: string;
  programDescriptionFrCa?: string;
  programDescriptionFrFr?: string;
  programDescriptionItIt?: string;
  programDescriptionLocalized?: string;
  programDescriptionNlNl?: string;
  programDescriptionPtBr?: string;
  programDescriptionZhCn?: string;
  programType?: string;
  recordId?: string;
  startDate?: Moment;
  advancedSettings: SpotAwardProgramAdvancedSettingsType;
  categories: SpotAwardCategoryType[];
  createdByNav: UserType;
  eligRules: SpotAwardEligibilityRuleType[];
  guidelineRules: SpotAwardGuidelinesRuleType[];
  lastModifiedByNav: UserType;
  levels: SpotAwardLevelType[];
  mdfSystemRecordStatusNav: MdfEnumValueType;
  programDescriptionTranslationTextNav: MdfLocalizedValueType[];
  programImageNav: AttachmentType;
  programTypeNav: MdfEnumValueType;
  spotAwardBudgets: SpotAwardBudgetType[];
  wfRequestNav: WfRequestType[];
}

export interface SpotAwardProgramTypeForceMandatory {
  createdBy: string;
  createdDateTime: Moment;
  currencyConversionTable: string;
  enabled: boolean;
  endDate: Moment;
  externalCode: string;
  functionalCurrency: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  mdfSystemRecordStatus: string;
  programDescriptionDeDe: string;
  programDescriptionDefaultValue: string;
  programDescriptionEnDebug: string;
  programDescriptionEnGb: string;
  programDescriptionEnUs: string;
  programDescriptionEsEs: string;
  programDescriptionEsMx: string;
  programDescriptionFrCa: string;
  programDescriptionFrFr: string;
  programDescriptionItIt: string;
  programDescriptionLocalized: string;
  programDescriptionNlNl: string;
  programDescriptionPtBr: string;
  programDescriptionZhCn: string;
  programType: string;
  recordId: string;
  startDate: Moment;
  advancedSettings: SpotAwardProgramAdvancedSettingsType;
  categories: SpotAwardCategoryType[];
  createdByNav: UserType;
  eligRules: SpotAwardEligibilityRuleType[];
  guidelineRules: SpotAwardGuidelinesRuleType[];
  lastModifiedByNav: UserType;
  levels: SpotAwardLevelType[];
  mdfSystemRecordStatusNav: MdfEnumValueType;
  programDescriptionTranslationTextNav: MdfLocalizedValueType[];
  programImageNav: AttachmentType;
  programTypeNav: MdfEnumValueType;
  spotAwardBudgets: SpotAwardBudgetType[];
  wfRequestNav: WfRequestType[];
}

export namespace SpotAwardProgram {
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<SpotAwardProgram> = new StringField('createdBy', SpotAwardProgram, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<SpotAwardProgram> = new DateField('createdDateTime', SpotAwardProgram, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[currencyConversionTable]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CURRENCY_CONVERSION_TABLE: StringField<SpotAwardProgram> = new StringField('currencyConversionTable', SpotAwardProgram, 'Edm.String');
  /**
   * Static representation of the [[enabled]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ENABLED: BooleanField<SpotAwardProgram> = new BooleanField('enabled', SpotAwardProgram, 'Edm.Boolean');
  /**
   * Static representation of the [[endDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const END_DATE: DateField<SpotAwardProgram> = new DateField('endDate', SpotAwardProgram, 'Edm.DateTime');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: StringField<SpotAwardProgram> = new StringField('externalCode', SpotAwardProgram, 'Edm.String');
  /**
   * Static representation of the [[functionalCurrency]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FUNCTIONAL_CURRENCY: StringField<SpotAwardProgram> = new StringField('functionalCurrency', SpotAwardProgram, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<SpotAwardProgram> = new StringField('lastModifiedBy', SpotAwardProgram, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<SpotAwardProgram> = new DateField('lastModifiedDateTime', SpotAwardProgram, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<SpotAwardProgram> = new StringField('mdfSystemRecordStatus', SpotAwardProgram, 'Edm.String');
  /**
   * Static representation of the [[programDescriptionDeDe]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROGRAM_DESCRIPTION_DE_DE: StringField<SpotAwardProgram> = new StringField('programDescription_de_DE', SpotAwardProgram, 'Edm.String');
  /**
   * Static representation of the [[programDescriptionDefaultValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROGRAM_DESCRIPTION_DEFAULT_VALUE: StringField<SpotAwardProgram> = new StringField('programDescription_defaultValue', SpotAwardProgram, 'Edm.String');
  /**
   * Static representation of the [[programDescriptionEnDebug]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROGRAM_DESCRIPTION_EN_DEBUG: StringField<SpotAwardProgram> = new StringField('programDescription_en_DEBUG', SpotAwardProgram, 'Edm.String');
  /**
   * Static representation of the [[programDescriptionEnGb]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROGRAM_DESCRIPTION_EN_GB: StringField<SpotAwardProgram> = new StringField('programDescription_en_GB', SpotAwardProgram, 'Edm.String');
  /**
   * Static representation of the [[programDescriptionEnUs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROGRAM_DESCRIPTION_EN_US: StringField<SpotAwardProgram> = new StringField('programDescription_en_US', SpotAwardProgram, 'Edm.String');
  /**
   * Static representation of the [[programDescriptionEsEs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROGRAM_DESCRIPTION_ES_ES: StringField<SpotAwardProgram> = new StringField('programDescription_es_ES', SpotAwardProgram, 'Edm.String');
  /**
   * Static representation of the [[programDescriptionEsMx]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROGRAM_DESCRIPTION_ES_MX: StringField<SpotAwardProgram> = new StringField('programDescription_es_MX', SpotAwardProgram, 'Edm.String');
  /**
   * Static representation of the [[programDescriptionFrCa]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROGRAM_DESCRIPTION_FR_CA: StringField<SpotAwardProgram> = new StringField('programDescription_fr_CA', SpotAwardProgram, 'Edm.String');
  /**
   * Static representation of the [[programDescriptionFrFr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROGRAM_DESCRIPTION_FR_FR: StringField<SpotAwardProgram> = new StringField('programDescription_fr_FR', SpotAwardProgram, 'Edm.String');
  /**
   * Static representation of the [[programDescriptionItIt]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROGRAM_DESCRIPTION_IT_IT: StringField<SpotAwardProgram> = new StringField('programDescription_it_IT', SpotAwardProgram, 'Edm.String');
  /**
   * Static representation of the [[programDescriptionLocalized]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROGRAM_DESCRIPTION_LOCALIZED: StringField<SpotAwardProgram> = new StringField('programDescription_localized', SpotAwardProgram, 'Edm.String');
  /**
   * Static representation of the [[programDescriptionNlNl]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROGRAM_DESCRIPTION_NL_NL: StringField<SpotAwardProgram> = new StringField('programDescription_nl_NL', SpotAwardProgram, 'Edm.String');
  /**
   * Static representation of the [[programDescriptionPtBr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROGRAM_DESCRIPTION_PT_BR: StringField<SpotAwardProgram> = new StringField('programDescription_pt_BR', SpotAwardProgram, 'Edm.String');
  /**
   * Static representation of the [[programDescriptionZhCn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROGRAM_DESCRIPTION_ZH_CN: StringField<SpotAwardProgram> = new StringField('programDescription_zh_CN', SpotAwardProgram, 'Edm.String');
  /**
   * Static representation of the [[programType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROGRAM_TYPE: StringField<SpotAwardProgram> = new StringField('programType', SpotAwardProgram, 'Edm.String');
  /**
   * Static representation of the [[recordId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RECORD_ID: StringField<SpotAwardProgram> = new StringField('recordId', SpotAwardProgram, 'Edm.String');
  /**
   * Static representation of the [[startDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const START_DATE: DateField<SpotAwardProgram> = new DateField('startDate', SpotAwardProgram, 'Edm.DateTime');
  /**
   * Static representation of the one-to-one navigation property [[advancedSettings]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADVANCED_SETTINGS: OneToOneLink<SpotAwardProgram, SpotAwardProgramAdvancedSettings> = new OneToOneLink('advancedSettings', SpotAwardProgram, SpotAwardProgramAdvancedSettings);
  /**
   * Static representation of the one-to-many navigation property [[categories]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CATEGORIES: Link<SpotAwardProgram, SpotAwardCategory> = new Link('categories', SpotAwardProgram, SpotAwardCategory);
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<SpotAwardProgram, User> = new OneToOneLink('createdByNav', SpotAwardProgram, User);
  /**
   * Static representation of the one-to-many navigation property [[eligRules]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ELIG_RULES: Link<SpotAwardProgram, SpotAwardEligibilityRule> = new Link('eligRules', SpotAwardProgram, SpotAwardEligibilityRule);
  /**
   * Static representation of the one-to-many navigation property [[guidelineRules]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GUIDELINE_RULES: Link<SpotAwardProgram, SpotAwardGuidelinesRule> = new Link('guidelineRules', SpotAwardProgram, SpotAwardGuidelinesRule);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<SpotAwardProgram, User> = new OneToOneLink('lastModifiedByNav', SpotAwardProgram, User);
  /**
   * Static representation of the one-to-many navigation property [[levels]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LEVELS: Link<SpotAwardProgram, SpotAwardLevel> = new Link('levels', SpotAwardProgram, SpotAwardLevel);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<SpotAwardProgram, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', SpotAwardProgram, MdfEnumValue);
  /**
   * Static representation of the one-to-many navigation property [[programDescriptionTranslationTextNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROGRAM_DESCRIPTION_TRANSLATION_TEXT_NAV: Link<SpotAwardProgram, MdfLocalizedValue> = new Link('programDescriptionTranslationTextNav', SpotAwardProgram, MdfLocalizedValue);
  /**
   * Static representation of the one-to-one navigation property [[programImageNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROGRAM_IMAGE_NAV: OneToOneLink<SpotAwardProgram, Attachment> = new OneToOneLink('programImageNav', SpotAwardProgram, Attachment);
  /**
   * Static representation of the one-to-one navigation property [[programTypeNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROGRAM_TYPE_NAV: OneToOneLink<SpotAwardProgram, MdfEnumValue> = new OneToOneLink('programTypeNav', SpotAwardProgram, MdfEnumValue);
  /**
   * Static representation of the one-to-many navigation property [[spotAwardBudgets]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SPOT_AWARD_BUDGETS: Link<SpotAwardProgram, SpotAwardBudget> = new Link('spotAwardBudgets', SpotAwardProgram, SpotAwardBudget);
  /**
   * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WF_REQUEST_NAV: Link<SpotAwardProgram, WfRequest> = new Link('wfRequestNav', SpotAwardProgram, WfRequest);
  /**
   * All fields of the SpotAwardProgram entity.
   */
  export const _allFields: Array<StringField<SpotAwardProgram> | DateField<SpotAwardProgram> | BooleanField<SpotAwardProgram> | OneToOneLink<SpotAwardProgram, SpotAwardProgramAdvancedSettings> | Link<SpotAwardProgram, SpotAwardCategory> | OneToOneLink<SpotAwardProgram, User> | Link<SpotAwardProgram, SpotAwardEligibilityRule> | Link<SpotAwardProgram, SpotAwardGuidelinesRule> | Link<SpotAwardProgram, SpotAwardLevel> | OneToOneLink<SpotAwardProgram, MdfEnumValue> | Link<SpotAwardProgram, MdfLocalizedValue> | OneToOneLink<SpotAwardProgram, Attachment> | Link<SpotAwardProgram, SpotAwardBudget> | Link<SpotAwardProgram, WfRequest>> = [
    SpotAwardProgram.CREATED_BY,
    SpotAwardProgram.CREATED_DATE_TIME,
    SpotAwardProgram.CURRENCY_CONVERSION_TABLE,
    SpotAwardProgram.ENABLED,
    SpotAwardProgram.END_DATE,
    SpotAwardProgram.EXTERNAL_CODE,
    SpotAwardProgram.FUNCTIONAL_CURRENCY,
    SpotAwardProgram.LAST_MODIFIED_BY,
    SpotAwardProgram.LAST_MODIFIED_DATE_TIME,
    SpotAwardProgram.MDF_SYSTEM_RECORD_STATUS,
    SpotAwardProgram.PROGRAM_DESCRIPTION_DE_DE,
    SpotAwardProgram.PROGRAM_DESCRIPTION_DEFAULT_VALUE,
    SpotAwardProgram.PROGRAM_DESCRIPTION_EN_DEBUG,
    SpotAwardProgram.PROGRAM_DESCRIPTION_EN_GB,
    SpotAwardProgram.PROGRAM_DESCRIPTION_EN_US,
    SpotAwardProgram.PROGRAM_DESCRIPTION_ES_ES,
    SpotAwardProgram.PROGRAM_DESCRIPTION_ES_MX,
    SpotAwardProgram.PROGRAM_DESCRIPTION_FR_CA,
    SpotAwardProgram.PROGRAM_DESCRIPTION_FR_FR,
    SpotAwardProgram.PROGRAM_DESCRIPTION_IT_IT,
    SpotAwardProgram.PROGRAM_DESCRIPTION_LOCALIZED,
    SpotAwardProgram.PROGRAM_DESCRIPTION_NL_NL,
    SpotAwardProgram.PROGRAM_DESCRIPTION_PT_BR,
    SpotAwardProgram.PROGRAM_DESCRIPTION_ZH_CN,
    SpotAwardProgram.PROGRAM_TYPE,
    SpotAwardProgram.RECORD_ID,
    SpotAwardProgram.START_DATE,
    SpotAwardProgram.ADVANCED_SETTINGS,
    SpotAwardProgram.CATEGORIES,
    SpotAwardProgram.CREATED_BY_NAV,
    SpotAwardProgram.ELIG_RULES,
    SpotAwardProgram.GUIDELINE_RULES,
    SpotAwardProgram.LAST_MODIFIED_BY_NAV,
    SpotAwardProgram.LEVELS,
    SpotAwardProgram.MDF_SYSTEM_RECORD_STATUS_NAV,
    SpotAwardProgram.PROGRAM_DESCRIPTION_TRANSLATION_TEXT_NAV,
    SpotAwardProgram.PROGRAM_IMAGE_NAV,
    SpotAwardProgram.PROGRAM_TYPE_NAV,
    SpotAwardProgram.SPOT_AWARD_BUDGETS,
    SpotAwardProgram.WF_REQUEST_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<SpotAwardProgram> = new AllFields('*', SpotAwardProgram);
  /**
   * All key fields of the SpotAwardProgram entity.
   */
  export const _keyFields: Array<Selectable<SpotAwardProgram>> = [SpotAwardProgram.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property SpotAwardProgram.
   */
  export const _keys: { [keys: string]: Selectable<SpotAwardProgram> } = SpotAwardProgram._keyFields.reduce((acc: { [keys: string]: Selectable<SpotAwardProgram> }, field: Selectable<SpotAwardProgram>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
