import { SpotAwardProgramAdvancedSettingsRequestBuilder } from './SpotAwardProgramAdvancedSettingsRequestBuilder';
import { Moment } from 'moment';
import { AllFields, BooleanField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "SpotAwardProgramAdvancedSettings" of service "SFOData".
 */
export declare class SpotAwardProgramAdvancedSettings extends Entity implements SpotAwardProgramAdvancedSettingsType {
    /**
     * Technical entity name for SpotAwardProgramAdvancedSettings.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for SpotAwardProgramAdvancedSettings.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Spot Award Program_Code.
     * Maximum length: 38.
     */
    spotAwardProgramExternalCode: string;
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
    externalCode: string;
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
    createdByNav: User;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    lastModifiedByNav: User;
    /**
     * One-to-one navigation property to the [[MdfEnumValue]] entity.
     */
    mdfSystemRecordStatusNav: MdfEnumValue;
    /**
     * One-to-many navigation property to the [[MdfLocalizedValue]] entity.
     */
    overrideGuidelineAmountMsgTranslationTextNav: MdfLocalizedValue[];
    /**
     * One-to-many navigation property to the [[FoPayComponent]] entity.
     */
    payComponentNav: FoPayComponent[];
    /**
     * Returns an entity builder to construct instances `SpotAwardProgramAdvancedSettings`.
     * @returns A builder that constructs instances of entity type `SpotAwardProgramAdvancedSettings`.
     */
    static builder(): EntityBuilderType<SpotAwardProgramAdvancedSettings, SpotAwardProgramAdvancedSettingsTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `SpotAwardProgramAdvancedSettings` entity type.
     * @returns A `SpotAwardProgramAdvancedSettings` request builder.
     */
    static requestBuilder(): SpotAwardProgramAdvancedSettingsRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `SpotAwardProgramAdvancedSettings`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `SpotAwardProgramAdvancedSettings`.
     */
    static customField(fieldName: string): CustomField<SpotAwardProgramAdvancedSettings>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
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
export declare namespace SpotAwardProgramAdvancedSettings {
    /**
     * Static representation of the [[spotAwardProgramExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SPOT_AWARD_PROGRAM_EXTERNAL_CODE: StringField<SpotAwardProgramAdvancedSettings>;
    /**
     * Static representation of the [[canOverrideGuidelineAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CAN_OVERRIDE_GUIDELINE_AMOUNT: BooleanField<SpotAwardProgramAdvancedSettings>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<SpotAwardProgramAdvancedSettings>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<SpotAwardProgramAdvancedSettings>;
    /**
     * Static representation of the [[documentTemplateGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOCUMENT_TEMPLATE_GROUP: StringField<SpotAwardProgramAdvancedSettings>;
    /**
     * Static representation of the [[enableEcIntegration]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ENABLE_EC_INTEGRATION: BooleanField<SpotAwardProgramAdvancedSettings>;
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CODE: StringField<SpotAwardProgramAdvancedSettings>;
    /**
     * Static representation of the [[isBudgetAssociated]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IS_BUDGET_ASSOCIATED: BooleanField<SpotAwardProgramAdvancedSettings>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<SpotAwardProgramAdvancedSettings>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<SpotAwardProgramAdvancedSettings>;
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS: StringField<SpotAwardProgramAdvancedSettings>;
    /**
     * Static representation of the [[overrideGuidelineAmountMsgDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OVERRIDE_GUIDELINE_AMOUNT_MSG_DE_DE: StringField<SpotAwardProgramAdvancedSettings>;
    /**
     * Static representation of the [[overrideGuidelineAmountMsgDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OVERRIDE_GUIDELINE_AMOUNT_MSG_DEFAULT_VALUE: StringField<SpotAwardProgramAdvancedSettings>;
    /**
     * Static representation of the [[overrideGuidelineAmountMsgEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OVERRIDE_GUIDELINE_AMOUNT_MSG_EN_DEBUG: StringField<SpotAwardProgramAdvancedSettings>;
    /**
     * Static representation of the [[overrideGuidelineAmountMsgEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OVERRIDE_GUIDELINE_AMOUNT_MSG_EN_GB: StringField<SpotAwardProgramAdvancedSettings>;
    /**
     * Static representation of the [[overrideGuidelineAmountMsgEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OVERRIDE_GUIDELINE_AMOUNT_MSG_EN_US: StringField<SpotAwardProgramAdvancedSettings>;
    /**
     * Static representation of the [[overrideGuidelineAmountMsgEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OVERRIDE_GUIDELINE_AMOUNT_MSG_ES_ES: StringField<SpotAwardProgramAdvancedSettings>;
    /**
     * Static representation of the [[overrideGuidelineAmountMsgEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OVERRIDE_GUIDELINE_AMOUNT_MSG_ES_MX: StringField<SpotAwardProgramAdvancedSettings>;
    /**
     * Static representation of the [[overrideGuidelineAmountMsgFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OVERRIDE_GUIDELINE_AMOUNT_MSG_FR_CA: StringField<SpotAwardProgramAdvancedSettings>;
    /**
     * Static representation of the [[overrideGuidelineAmountMsgFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OVERRIDE_GUIDELINE_AMOUNT_MSG_FR_FR: StringField<SpotAwardProgramAdvancedSettings>;
    /**
     * Static representation of the [[overrideGuidelineAmountMsgItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OVERRIDE_GUIDELINE_AMOUNT_MSG_IT_IT: StringField<SpotAwardProgramAdvancedSettings>;
    /**
     * Static representation of the [[overrideGuidelineAmountMsgLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OVERRIDE_GUIDELINE_AMOUNT_MSG_LOCALIZED: StringField<SpotAwardProgramAdvancedSettings>;
    /**
     * Static representation of the [[overrideGuidelineAmountMsgNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OVERRIDE_GUIDELINE_AMOUNT_MSG_NL_NL: StringField<SpotAwardProgramAdvancedSettings>;
    /**
     * Static representation of the [[overrideGuidelineAmountMsgPtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OVERRIDE_GUIDELINE_AMOUNT_MSG_PT_BR: StringField<SpotAwardProgramAdvancedSettings>;
    /**
     * Static representation of the [[overrideGuidelineAmountMsgZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OVERRIDE_GUIDELINE_AMOUNT_MSG_ZH_CN: StringField<SpotAwardProgramAdvancedSettings>;
    /**
     * Static representation of the [[payComponent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAY_COMPONENT: StringField<SpotAwardProgramAdvancedSettings>;
    /**
     * Static representation of the [[useEcAsDataSource]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USE_EC_AS_DATA_SOURCE: BooleanField<SpotAwardProgramAdvancedSettings>;
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_NAV: OneToOneLink<SpotAwardProgramAdvancedSettings, User>;
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY_NAV: OneToOneLink<SpotAwardProgramAdvancedSettings, User>;
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<SpotAwardProgramAdvancedSettings, MdfEnumValue>;
    /**
     * Static representation of the one-to-many navigation property [[overrideGuidelineAmountMsgTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OVERRIDE_GUIDELINE_AMOUNT_MSG_TRANSLATION_TEXT_NAV: Link<SpotAwardProgramAdvancedSettings, MdfLocalizedValue>;
    /**
     * Static representation of the one-to-many navigation property [[payComponentNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAY_COMPONENT_NAV: Link<SpotAwardProgramAdvancedSettings, FoPayComponent>;
    /**
     * All fields of the SpotAwardProgramAdvancedSettings entity.
     */
    const _allFields: Array<StringField<SpotAwardProgramAdvancedSettings> | BooleanField<SpotAwardProgramAdvancedSettings> | DateField<SpotAwardProgramAdvancedSettings> | OneToOneLink<SpotAwardProgramAdvancedSettings, User> | OneToOneLink<SpotAwardProgramAdvancedSettings, MdfEnumValue> | Link<SpotAwardProgramAdvancedSettings, MdfLocalizedValue> | Link<SpotAwardProgramAdvancedSettings, FoPayComponent>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<SpotAwardProgramAdvancedSettings>;
    /**
     * All key fields of the SpotAwardProgramAdvancedSettings entity.
     */
    const _keyFields: Array<Selectable<SpotAwardProgramAdvancedSettings>>;
    /**
     * Mapping of all key field names to the respective static field property SpotAwardProgramAdvancedSettings.
     */
    const _keys: {
        [keys: string]: Selectable<SpotAwardProgramAdvancedSettings>;
    };
}
//# sourceMappingURL=SpotAwardProgramAdvancedSettings.d.ts.map