import { SpotAwardProgramRequestBuilder } from './SpotAwardProgramRequestBuilder';
import { Moment } from 'moment';
import { AllFields, BooleanField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "SpotAwardProgram" of service "SFOData".
 */
export declare class SpotAwardProgram extends Entity implements SpotAwardProgramType {
    /**
     * Technical entity name for SpotAwardProgram.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for SpotAwardProgram.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
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
    externalCode: string;
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
    advancedSettings: SpotAwardProgramAdvancedSettings;
    /**
     * One-to-many navigation property to the [[SpotAwardCategory]] entity.
     */
    categories: SpotAwardCategory[];
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    createdByNav: User;
    /**
     * One-to-many navigation property to the [[SpotAwardEligibilityRule]] entity.
     */
    eligRules: SpotAwardEligibilityRule[];
    /**
     * One-to-many navigation property to the [[SpotAwardGuidelinesRule]] entity.
     */
    guidelineRules: SpotAwardGuidelinesRule[];
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    lastModifiedByNav: User;
    /**
     * One-to-many navigation property to the [[SpotAwardLevel]] entity.
     */
    levels: SpotAwardLevel[];
    /**
     * One-to-one navigation property to the [[MdfEnumValue]] entity.
     */
    mdfSystemRecordStatusNav: MdfEnumValue;
    /**
     * One-to-many navigation property to the [[MdfLocalizedValue]] entity.
     */
    programDescriptionTranslationTextNav: MdfLocalizedValue[];
    /**
     * One-to-one navigation property to the [[Attachment]] entity.
     */
    programImageNav: Attachment;
    /**
     * One-to-one navigation property to the [[MdfEnumValue]] entity.
     */
    programTypeNav: MdfEnumValue;
    /**
     * One-to-many navigation property to the [[SpotAwardBudget]] entity.
     */
    spotAwardBudgets: SpotAwardBudget[];
    /**
     * One-to-many navigation property to the [[WfRequest]] entity.
     */
    wfRequestNav: WfRequest[];
    /**
     * Returns an entity builder to construct instances `SpotAwardProgram`.
     * @returns A builder that constructs instances of entity type `SpotAwardProgram`.
     */
    static builder(): EntityBuilderType<SpotAwardProgram, SpotAwardProgramTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `SpotAwardProgram` entity type.
     * @returns A `SpotAwardProgram` request builder.
     */
    static requestBuilder(): SpotAwardProgramRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `SpotAwardProgram`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `SpotAwardProgram`.
     */
    static customField(fieldName: string): CustomField<SpotAwardProgram>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
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
export declare namespace SpotAwardProgram {
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<SpotAwardProgram>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<SpotAwardProgram>;
    /**
     * Static representation of the [[currencyConversionTable]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CURRENCY_CONVERSION_TABLE: StringField<SpotAwardProgram>;
    /**
     * Static representation of the [[enabled]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ENABLED: BooleanField<SpotAwardProgram>;
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const END_DATE: DateField<SpotAwardProgram>;
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CODE: StringField<SpotAwardProgram>;
    /**
     * Static representation of the [[functionalCurrency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FUNCTIONAL_CURRENCY: StringField<SpotAwardProgram>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<SpotAwardProgram>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<SpotAwardProgram>;
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS: StringField<SpotAwardProgram>;
    /**
     * Static representation of the [[programDescriptionDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROGRAM_DESCRIPTION_DE_DE: StringField<SpotAwardProgram>;
    /**
     * Static representation of the [[programDescriptionDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROGRAM_DESCRIPTION_DEFAULT_VALUE: StringField<SpotAwardProgram>;
    /**
     * Static representation of the [[programDescriptionEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROGRAM_DESCRIPTION_EN_DEBUG: StringField<SpotAwardProgram>;
    /**
     * Static representation of the [[programDescriptionEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROGRAM_DESCRIPTION_EN_GB: StringField<SpotAwardProgram>;
    /**
     * Static representation of the [[programDescriptionEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROGRAM_DESCRIPTION_EN_US: StringField<SpotAwardProgram>;
    /**
     * Static representation of the [[programDescriptionEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROGRAM_DESCRIPTION_ES_ES: StringField<SpotAwardProgram>;
    /**
     * Static representation of the [[programDescriptionEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROGRAM_DESCRIPTION_ES_MX: StringField<SpotAwardProgram>;
    /**
     * Static representation of the [[programDescriptionFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROGRAM_DESCRIPTION_FR_CA: StringField<SpotAwardProgram>;
    /**
     * Static representation of the [[programDescriptionFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROGRAM_DESCRIPTION_FR_FR: StringField<SpotAwardProgram>;
    /**
     * Static representation of the [[programDescriptionItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROGRAM_DESCRIPTION_IT_IT: StringField<SpotAwardProgram>;
    /**
     * Static representation of the [[programDescriptionLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROGRAM_DESCRIPTION_LOCALIZED: StringField<SpotAwardProgram>;
    /**
     * Static representation of the [[programDescriptionNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROGRAM_DESCRIPTION_NL_NL: StringField<SpotAwardProgram>;
    /**
     * Static representation of the [[programDescriptionPtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROGRAM_DESCRIPTION_PT_BR: StringField<SpotAwardProgram>;
    /**
     * Static representation of the [[programDescriptionZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROGRAM_DESCRIPTION_ZH_CN: StringField<SpotAwardProgram>;
    /**
     * Static representation of the [[programType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROGRAM_TYPE: StringField<SpotAwardProgram>;
    /**
     * Static representation of the [[recordId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RECORD_ID: StringField<SpotAwardProgram>;
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const START_DATE: DateField<SpotAwardProgram>;
    /**
     * Static representation of the one-to-one navigation property [[advancedSettings]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADVANCED_SETTINGS: OneToOneLink<SpotAwardProgram, SpotAwardProgramAdvancedSettings>;
    /**
     * Static representation of the one-to-many navigation property [[categories]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CATEGORIES: Link<SpotAwardProgram, SpotAwardCategory>;
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_NAV: OneToOneLink<SpotAwardProgram, User>;
    /**
     * Static representation of the one-to-many navigation property [[eligRules]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ELIG_RULES: Link<SpotAwardProgram, SpotAwardEligibilityRule>;
    /**
     * Static representation of the one-to-many navigation property [[guidelineRules]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GUIDELINE_RULES: Link<SpotAwardProgram, SpotAwardGuidelinesRule>;
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY_NAV: OneToOneLink<SpotAwardProgram, User>;
    /**
     * Static representation of the one-to-many navigation property [[levels]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LEVELS: Link<SpotAwardProgram, SpotAwardLevel>;
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<SpotAwardProgram, MdfEnumValue>;
    /**
     * Static representation of the one-to-many navigation property [[programDescriptionTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROGRAM_DESCRIPTION_TRANSLATION_TEXT_NAV: Link<SpotAwardProgram, MdfLocalizedValue>;
    /**
     * Static representation of the one-to-one navigation property [[programImageNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROGRAM_IMAGE_NAV: OneToOneLink<SpotAwardProgram, Attachment>;
    /**
     * Static representation of the one-to-one navigation property [[programTypeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROGRAM_TYPE_NAV: OneToOneLink<SpotAwardProgram, MdfEnumValue>;
    /**
     * Static representation of the one-to-many navigation property [[spotAwardBudgets]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SPOT_AWARD_BUDGETS: Link<SpotAwardProgram, SpotAwardBudget>;
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WF_REQUEST_NAV: Link<SpotAwardProgram, WfRequest>;
    /**
     * All fields of the SpotAwardProgram entity.
     */
    const _allFields: Array<StringField<SpotAwardProgram> | DateField<SpotAwardProgram> | BooleanField<SpotAwardProgram> | OneToOneLink<SpotAwardProgram, SpotAwardProgramAdvancedSettings> | Link<SpotAwardProgram, SpotAwardCategory> | OneToOneLink<SpotAwardProgram, User> | Link<SpotAwardProgram, SpotAwardEligibilityRule> | Link<SpotAwardProgram, SpotAwardGuidelinesRule> | Link<SpotAwardProgram, SpotAwardLevel> | OneToOneLink<SpotAwardProgram, MdfEnumValue> | Link<SpotAwardProgram, MdfLocalizedValue> | OneToOneLink<SpotAwardProgram, Attachment> | Link<SpotAwardProgram, SpotAwardBudget> | Link<SpotAwardProgram, WfRequest>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<SpotAwardProgram>;
    /**
     * All key fields of the SpotAwardProgram entity.
     */
    const _keyFields: Array<Selectable<SpotAwardProgram>>;
    /**
     * Mapping of all key field names to the respective static field property SpotAwardProgram.
     */
    const _keys: {
        [keys: string]: Selectable<SpotAwardProgram>;
    };
}
//# sourceMappingURL=SpotAwardProgram.d.ts.map