import { RatedSkillMappingRequestBuilder } from './RatedSkillMappingRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "RatedSkillMapping" of service "SFOData".
 */
export declare class RatedSkillMapping extends Entity implements RatedSkillMappingType {
    /**
     * Technical entity name for RatedSkillMapping.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for RatedSkillMapping.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Skill Profile_User Id.
     * Maximum length: 100.
     */
    skillProfileExternalCode: string;
    /**
     * createdBy.
     * Maximum length: 255.
     * @nullable
     */
    createdBy?: string;
    /**
     * createdDate.
     * @nullable
     */
    createdDateTime?: Moment;
    /**
     * Expected Proficiency Level.
     * Maximum length: 255.
     * @nullable
     */
    expectedLevelDeDe?: string;
    /**
     * Expected Proficiency Level.
     * Maximum length: 255.
     * @nullable
     */
    expectedLevelDefaultValue?: string;
    /**
     * Expected Proficiency Level.
     * Maximum length: 255.
     * @nullable
     */
    expectedLevelEnDebug?: string;
    /**
     * Expected Proficiency Level.
     * Maximum length: 255.
     * @nullable
     */
    expectedLevelEnGb?: string;
    /**
     * Expected Proficiency Level.
     * Maximum length: 255.
     * @nullable
     */
    expectedLevelEnUs?: string;
    /**
     * Expected Proficiency Level.
     * Maximum length: 255.
     * @nullable
     */
    expectedLevelEsEs?: string;
    /**
     * Expected Proficiency Level.
     * Maximum length: 255.
     * @nullable
     */
    expectedLevelEsMx?: string;
    /**
     * Expected Proficiency Level.
     * Maximum length: 255.
     * @nullable
     */
    expectedLevelFrCa?: string;
    /**
     * Expected Proficiency Level.
     * Maximum length: 255.
     * @nullable
     */
    expectedLevelFrFr?: string;
    /**
     * Expected Proficiency Level.
     * Maximum length: 255.
     * @nullable
     */
    expectedLevelItIt?: string;
    /**
     * Expected Proficiency Level.
     * Maximum length: 255.
     * @nullable
     */
    expectedLevelLocalized?: string;
    /**
     * Expected Proficiency Level.
     * Maximum length: 255.
     * @nullable
     */
    expectedLevelNlNl?: string;
    /**
     * Expected Proficiency Level.
     * Maximum length: 255.
     * @nullable
     */
    expectedLevelPtBr?: string;
    /**
     * Expected Proficiency Level.
     * Maximum length: 255.
     * @nullable
     */
    expectedLevelZhCn?: string;
    /**
     * externalCode.
     * Maximum length: 128.
     */
    externalCode: string;
    /**
     * lastModifiedBy.
     * Maximum length: 255.
     * @nullable
     */
    lastModifiedBy?: string;
    /**
     * lastModifiedDate.
     * @nullable
     */
    lastModifiedDateTime?: Moment;
    /**
     * managerRatedLevel.
     * Maximum length: 255.
     * @nullable
     */
    managerRatedLevelDeDe?: string;
    /**
     * managerRatedLevel.
     * Maximum length: 255.
     * @nullable
     */
    managerRatedLevelDefaultValue?: string;
    /**
     * managerRatedLevel.
     * Maximum length: 255.
     * @nullable
     */
    managerRatedLevelEnDebug?: string;
    /**
     * managerRatedLevel.
     * Maximum length: 255.
     * @nullable
     */
    managerRatedLevelEnGb?: string;
    /**
     * managerRatedLevel.
     * Maximum length: 255.
     * @nullable
     */
    managerRatedLevelEnUs?: string;
    /**
     * managerRatedLevel.
     * Maximum length: 255.
     * @nullable
     */
    managerRatedLevelEsEs?: string;
    /**
     * managerRatedLevel.
     * Maximum length: 255.
     * @nullable
     */
    managerRatedLevelEsMx?: string;
    /**
     * managerRatedLevel.
     * Maximum length: 255.
     * @nullable
     */
    managerRatedLevelFrCa?: string;
    /**
     * managerRatedLevel.
     * Maximum length: 255.
     * @nullable
     */
    managerRatedLevelFrFr?: string;
    /**
     * managerRatedLevel.
     * Maximum length: 255.
     * @nullable
     */
    managerRatedLevelItIt?: string;
    /**
     * managerRatedLevel.
     * Maximum length: 255.
     * @nullable
     */
    managerRatedLevelLocalized?: string;
    /**
     * managerRatedLevel.
     * Maximum length: 255.
     * @nullable
     */
    managerRatedLevelNlNl?: string;
    /**
     * managerRatedLevel.
     * Maximum length: 255.
     * @nullable
     */
    managerRatedLevelPtBr?: string;
    /**
     * managerRatedLevel.
     * Maximum length: 255.
     * @nullable
     */
    managerRatedLevelZhCn?: string;
    /**
     * Record Status.
     * Maximum length: 255.
     * @nullable
     */
    mdfSystemRecordStatus?: string;
    /**
     * selfRatedLevel.
     * Maximum length: 255.
     * @nullable
     */
    selfRatedLevelDeDe?: string;
    /**
     * selfRatedLevel.
     * Maximum length: 255.
     * @nullable
     */
    selfRatedLevelDefaultValue?: string;
    /**
     * selfRatedLevel.
     * Maximum length: 255.
     * @nullable
     */
    selfRatedLevelEnDebug?: string;
    /**
     * selfRatedLevel.
     * Maximum length: 255.
     * @nullable
     */
    selfRatedLevelEnGb?: string;
    /**
     * selfRatedLevel.
     * Maximum length: 255.
     * @nullable
     */
    selfRatedLevelEnUs?: string;
    /**
     * selfRatedLevel.
     * Maximum length: 255.
     * @nullable
     */
    selfRatedLevelEsEs?: string;
    /**
     * selfRatedLevel.
     * Maximum length: 255.
     * @nullable
     */
    selfRatedLevelEsMx?: string;
    /**
     * selfRatedLevel.
     * Maximum length: 255.
     * @nullable
     */
    selfRatedLevelFrCa?: string;
    /**
     * selfRatedLevel.
     * Maximum length: 255.
     * @nullable
     */
    selfRatedLevelFrFr?: string;
    /**
     * selfRatedLevel.
     * Maximum length: 255.
     * @nullable
     */
    selfRatedLevelItIt?: string;
    /**
     * selfRatedLevel.
     * Maximum length: 255.
     * @nullable
     */
    selfRatedLevelLocalized?: string;
    /**
     * selfRatedLevel.
     * Maximum length: 255.
     * @nullable
     */
    selfRatedLevelNlNl?: string;
    /**
     * selfRatedLevel.
     * Maximum length: 255.
     * @nullable
     */
    selfRatedLevelPtBr?: string;
    /**
     * selfRatedLevel.
     * Maximum length: 255.
     * @nullable
     */
    selfRatedLevelZhCn?: string;
    /**
     * Skill.
     * Maximum length: 128.
     * @nullable
     */
    skill?: string;
    /**
     * status.
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
    createdByNav: User;
    /**
     * One-to-many navigation property to the [[MdfLocalizedValue]] entity.
     */
    expectedLevelTranslationTextNav: MdfLocalizedValue[];
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    lastModifiedByNav: User;
    /**
     * One-to-many navigation property to the [[MdfLocalizedValue]] entity.
     */
    managerRatedLevelTranslationTextNav: MdfLocalizedValue[];
    /**
     * One-to-one navigation property to the [[MdfEnumValue]] entity.
     */
    mdfSystemRecordStatusNav: MdfEnumValue;
    /**
     * One-to-many navigation property to the [[MdfLocalizedValue]] entity.
     */
    selfRatedLevelTranslationTextNav: MdfLocalizedValue[];
    /**
     * One-to-one navigation property to the [[SkillEntity]] entity.
     */
    skillNav: SkillEntity;
    /**
     * One-to-one navigation property to the [[MdfEnumValue]] entity.
     */
    statusNav: MdfEnumValue;
    /**
     * Returns an entity builder to construct instances `RatedSkillMapping`.
     * @returns A builder that constructs instances of entity type `RatedSkillMapping`.
     */
    static builder(): EntityBuilderType<RatedSkillMapping, RatedSkillMappingTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `RatedSkillMapping` entity type.
     * @returns A `RatedSkillMapping` request builder.
     */
    static requestBuilder(): RatedSkillMappingRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `RatedSkillMapping`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `RatedSkillMapping`.
     */
    static customField(fieldName: string): CustomField<RatedSkillMapping>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { User, UserType } from './User';
import { MdfLocalizedValue, MdfLocalizedValueType } from './MdfLocalizedValue';
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';
import { SkillEntity, SkillEntityType } from './SkillEntity';
export interface RatedSkillMappingType {
    skillProfileExternalCode: string;
    createdBy?: string;
    createdDateTime?: Moment;
    expectedLevelDeDe?: string;
    expectedLevelDefaultValue?: string;
    expectedLevelEnDebug?: string;
    expectedLevelEnGb?: string;
    expectedLevelEnUs?: string;
    expectedLevelEsEs?: string;
    expectedLevelEsMx?: string;
    expectedLevelFrCa?: string;
    expectedLevelFrFr?: string;
    expectedLevelItIt?: string;
    expectedLevelLocalized?: string;
    expectedLevelNlNl?: string;
    expectedLevelPtBr?: string;
    expectedLevelZhCn?: string;
    externalCode: string;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    managerRatedLevelDeDe?: string;
    managerRatedLevelDefaultValue?: string;
    managerRatedLevelEnDebug?: string;
    managerRatedLevelEnGb?: string;
    managerRatedLevelEnUs?: string;
    managerRatedLevelEsEs?: string;
    managerRatedLevelEsMx?: string;
    managerRatedLevelFrCa?: string;
    managerRatedLevelFrFr?: string;
    managerRatedLevelItIt?: string;
    managerRatedLevelLocalized?: string;
    managerRatedLevelNlNl?: string;
    managerRatedLevelPtBr?: string;
    managerRatedLevelZhCn?: string;
    mdfSystemRecordStatus?: string;
    selfRatedLevelDeDe?: string;
    selfRatedLevelDefaultValue?: string;
    selfRatedLevelEnDebug?: string;
    selfRatedLevelEnGb?: string;
    selfRatedLevelEnUs?: string;
    selfRatedLevelEsEs?: string;
    selfRatedLevelEsMx?: string;
    selfRatedLevelFrCa?: string;
    selfRatedLevelFrFr?: string;
    selfRatedLevelItIt?: string;
    selfRatedLevelLocalized?: string;
    selfRatedLevelNlNl?: string;
    selfRatedLevelPtBr?: string;
    selfRatedLevelZhCn?: string;
    skill?: string;
    status?: string;
    subModule?: string;
    createdByNav: UserType;
    expectedLevelTranslationTextNav: MdfLocalizedValueType[];
    lastModifiedByNav: UserType;
    managerRatedLevelTranslationTextNav: MdfLocalizedValueType[];
    mdfSystemRecordStatusNav: MdfEnumValueType;
    selfRatedLevelTranslationTextNav: MdfLocalizedValueType[];
    skillNav: SkillEntityType;
    statusNav: MdfEnumValueType;
}
export interface RatedSkillMappingTypeForceMandatory {
    skillProfileExternalCode: string;
    createdBy: string;
    createdDateTime: Moment;
    expectedLevelDeDe: string;
    expectedLevelDefaultValue: string;
    expectedLevelEnDebug: string;
    expectedLevelEnGb: string;
    expectedLevelEnUs: string;
    expectedLevelEsEs: string;
    expectedLevelEsMx: string;
    expectedLevelFrCa: string;
    expectedLevelFrFr: string;
    expectedLevelItIt: string;
    expectedLevelLocalized: string;
    expectedLevelNlNl: string;
    expectedLevelPtBr: string;
    expectedLevelZhCn: string;
    externalCode: string;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    managerRatedLevelDeDe: string;
    managerRatedLevelDefaultValue: string;
    managerRatedLevelEnDebug: string;
    managerRatedLevelEnGb: string;
    managerRatedLevelEnUs: string;
    managerRatedLevelEsEs: string;
    managerRatedLevelEsMx: string;
    managerRatedLevelFrCa: string;
    managerRatedLevelFrFr: string;
    managerRatedLevelItIt: string;
    managerRatedLevelLocalized: string;
    managerRatedLevelNlNl: string;
    managerRatedLevelPtBr: string;
    managerRatedLevelZhCn: string;
    mdfSystemRecordStatus: string;
    selfRatedLevelDeDe: string;
    selfRatedLevelDefaultValue: string;
    selfRatedLevelEnDebug: string;
    selfRatedLevelEnGb: string;
    selfRatedLevelEnUs: string;
    selfRatedLevelEsEs: string;
    selfRatedLevelEsMx: string;
    selfRatedLevelFrCa: string;
    selfRatedLevelFrFr: string;
    selfRatedLevelItIt: string;
    selfRatedLevelLocalized: string;
    selfRatedLevelNlNl: string;
    selfRatedLevelPtBr: string;
    selfRatedLevelZhCn: string;
    skill: string;
    status: string;
    subModule: string;
    createdByNav: UserType;
    expectedLevelTranslationTextNav: MdfLocalizedValueType[];
    lastModifiedByNav: UserType;
    managerRatedLevelTranslationTextNav: MdfLocalizedValueType[];
    mdfSystemRecordStatusNav: MdfEnumValueType;
    selfRatedLevelTranslationTextNav: MdfLocalizedValueType[];
    skillNav: SkillEntityType;
    statusNav: MdfEnumValueType;
}
export declare namespace RatedSkillMapping {
    /**
     * Static representation of the [[skillProfileExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SKILL_PROFILE_EXTERNAL_CODE: StringField<RatedSkillMapping>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<RatedSkillMapping>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<RatedSkillMapping>;
    /**
     * Static representation of the [[expectedLevelDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXPECTED_LEVEL_DE_DE: StringField<RatedSkillMapping>;
    /**
     * Static representation of the [[expectedLevelDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXPECTED_LEVEL_DEFAULT_VALUE: StringField<RatedSkillMapping>;
    /**
     * Static representation of the [[expectedLevelEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXPECTED_LEVEL_EN_DEBUG: StringField<RatedSkillMapping>;
    /**
     * Static representation of the [[expectedLevelEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXPECTED_LEVEL_EN_GB: StringField<RatedSkillMapping>;
    /**
     * Static representation of the [[expectedLevelEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXPECTED_LEVEL_EN_US: StringField<RatedSkillMapping>;
    /**
     * Static representation of the [[expectedLevelEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXPECTED_LEVEL_ES_ES: StringField<RatedSkillMapping>;
    /**
     * Static representation of the [[expectedLevelEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXPECTED_LEVEL_ES_MX: StringField<RatedSkillMapping>;
    /**
     * Static representation of the [[expectedLevelFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXPECTED_LEVEL_FR_CA: StringField<RatedSkillMapping>;
    /**
     * Static representation of the [[expectedLevelFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXPECTED_LEVEL_FR_FR: StringField<RatedSkillMapping>;
    /**
     * Static representation of the [[expectedLevelItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXPECTED_LEVEL_IT_IT: StringField<RatedSkillMapping>;
    /**
     * Static representation of the [[expectedLevelLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXPECTED_LEVEL_LOCALIZED: StringField<RatedSkillMapping>;
    /**
     * Static representation of the [[expectedLevelNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXPECTED_LEVEL_NL_NL: StringField<RatedSkillMapping>;
    /**
     * Static representation of the [[expectedLevelPtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXPECTED_LEVEL_PT_BR: StringField<RatedSkillMapping>;
    /**
     * Static representation of the [[expectedLevelZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXPECTED_LEVEL_ZH_CN: StringField<RatedSkillMapping>;
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CODE: StringField<RatedSkillMapping>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<RatedSkillMapping>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<RatedSkillMapping>;
    /**
     * Static representation of the [[managerRatedLevelDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MANAGER_RATED_LEVEL_DE_DE: StringField<RatedSkillMapping>;
    /**
     * Static representation of the [[managerRatedLevelDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MANAGER_RATED_LEVEL_DEFAULT_VALUE: StringField<RatedSkillMapping>;
    /**
     * Static representation of the [[managerRatedLevelEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MANAGER_RATED_LEVEL_EN_DEBUG: StringField<RatedSkillMapping>;
    /**
     * Static representation of the [[managerRatedLevelEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MANAGER_RATED_LEVEL_EN_GB: StringField<RatedSkillMapping>;
    /**
     * Static representation of the [[managerRatedLevelEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MANAGER_RATED_LEVEL_EN_US: StringField<RatedSkillMapping>;
    /**
     * Static representation of the [[managerRatedLevelEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MANAGER_RATED_LEVEL_ES_ES: StringField<RatedSkillMapping>;
    /**
     * Static representation of the [[managerRatedLevelEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MANAGER_RATED_LEVEL_ES_MX: StringField<RatedSkillMapping>;
    /**
     * Static representation of the [[managerRatedLevelFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MANAGER_RATED_LEVEL_FR_CA: StringField<RatedSkillMapping>;
    /**
     * Static representation of the [[managerRatedLevelFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MANAGER_RATED_LEVEL_FR_FR: StringField<RatedSkillMapping>;
    /**
     * Static representation of the [[managerRatedLevelItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MANAGER_RATED_LEVEL_IT_IT: StringField<RatedSkillMapping>;
    /**
     * Static representation of the [[managerRatedLevelLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MANAGER_RATED_LEVEL_LOCALIZED: StringField<RatedSkillMapping>;
    /**
     * Static representation of the [[managerRatedLevelNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MANAGER_RATED_LEVEL_NL_NL: StringField<RatedSkillMapping>;
    /**
     * Static representation of the [[managerRatedLevelPtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MANAGER_RATED_LEVEL_PT_BR: StringField<RatedSkillMapping>;
    /**
     * Static representation of the [[managerRatedLevelZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MANAGER_RATED_LEVEL_ZH_CN: StringField<RatedSkillMapping>;
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS: StringField<RatedSkillMapping>;
    /**
     * Static representation of the [[selfRatedLevelDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SELF_RATED_LEVEL_DE_DE: StringField<RatedSkillMapping>;
    /**
     * Static representation of the [[selfRatedLevelDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SELF_RATED_LEVEL_DEFAULT_VALUE: StringField<RatedSkillMapping>;
    /**
     * Static representation of the [[selfRatedLevelEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SELF_RATED_LEVEL_EN_DEBUG: StringField<RatedSkillMapping>;
    /**
     * Static representation of the [[selfRatedLevelEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SELF_RATED_LEVEL_EN_GB: StringField<RatedSkillMapping>;
    /**
     * Static representation of the [[selfRatedLevelEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SELF_RATED_LEVEL_EN_US: StringField<RatedSkillMapping>;
    /**
     * Static representation of the [[selfRatedLevelEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SELF_RATED_LEVEL_ES_ES: StringField<RatedSkillMapping>;
    /**
     * Static representation of the [[selfRatedLevelEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SELF_RATED_LEVEL_ES_MX: StringField<RatedSkillMapping>;
    /**
     * Static representation of the [[selfRatedLevelFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SELF_RATED_LEVEL_FR_CA: StringField<RatedSkillMapping>;
    /**
     * Static representation of the [[selfRatedLevelFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SELF_RATED_LEVEL_FR_FR: StringField<RatedSkillMapping>;
    /**
     * Static representation of the [[selfRatedLevelItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SELF_RATED_LEVEL_IT_IT: StringField<RatedSkillMapping>;
    /**
     * Static representation of the [[selfRatedLevelLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SELF_RATED_LEVEL_LOCALIZED: StringField<RatedSkillMapping>;
    /**
     * Static representation of the [[selfRatedLevelNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SELF_RATED_LEVEL_NL_NL: StringField<RatedSkillMapping>;
    /**
     * Static representation of the [[selfRatedLevelPtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SELF_RATED_LEVEL_PT_BR: StringField<RatedSkillMapping>;
    /**
     * Static representation of the [[selfRatedLevelZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SELF_RATED_LEVEL_ZH_CN: StringField<RatedSkillMapping>;
    /**
     * Static representation of the [[skill]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SKILL: StringField<RatedSkillMapping>;
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS: StringField<RatedSkillMapping>;
    /**
     * Static representation of the [[subModule]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUB_MODULE: StringField<RatedSkillMapping>;
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_NAV: OneToOneLink<RatedSkillMapping, User>;
    /**
     * Static representation of the one-to-many navigation property [[expectedLevelTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXPECTED_LEVEL_TRANSLATION_TEXT_NAV: Link<RatedSkillMapping, MdfLocalizedValue>;
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY_NAV: OneToOneLink<RatedSkillMapping, User>;
    /**
     * Static representation of the one-to-many navigation property [[managerRatedLevelTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MANAGER_RATED_LEVEL_TRANSLATION_TEXT_NAV: Link<RatedSkillMapping, MdfLocalizedValue>;
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<RatedSkillMapping, MdfEnumValue>;
    /**
     * Static representation of the one-to-many navigation property [[selfRatedLevelTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SELF_RATED_LEVEL_TRANSLATION_TEXT_NAV: Link<RatedSkillMapping, MdfLocalizedValue>;
    /**
     * Static representation of the one-to-one navigation property [[skillNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SKILL_NAV: OneToOneLink<RatedSkillMapping, SkillEntity>;
    /**
     * Static representation of the one-to-one navigation property [[statusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS_NAV: OneToOneLink<RatedSkillMapping, MdfEnumValue>;
    /**
     * All fields of the RatedSkillMapping entity.
     */
    const _allFields: Array<StringField<RatedSkillMapping> | DateField<RatedSkillMapping> | OneToOneLink<RatedSkillMapping, User> | Link<RatedSkillMapping, MdfLocalizedValue> | OneToOneLink<RatedSkillMapping, MdfEnumValue> | OneToOneLink<RatedSkillMapping, SkillEntity>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<RatedSkillMapping>;
    /**
     * All key fields of the RatedSkillMapping entity.
     */
    const _keyFields: Array<Selectable<RatedSkillMapping>>;
    /**
     * Mapping of all key field names to the respective static field property RatedSkillMapping.
     */
    const _keys: {
        [keys: string]: Selectable<RatedSkillMapping>;
    };
}
//# sourceMappingURL=RatedSkillMapping.d.ts.map