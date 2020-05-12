import { SkillContentRequestBuilder } from './SkillContentRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "SkillContent" of service "SFOData".
 */
export declare class SkillContent extends Entity implements SkillContentType {
    /**
     * Technical entity name for SkillContent.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for SkillContent.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Job Profile_GUID.
     * Maximum length: 128.
     */
    jobProfileExternalCode: string;
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
     * Skill.
     * Maximum length: 128.
     * @nullable
     */
    entity?: string;
    /**
     * externalCode.
     * Maximum length: 128.
     */
    externalCode: string;
    /**
     * jobProfileId.
     * Maximum length: 255.
     * @nullable
     */
    jobProfileId?: string;
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
     * Record Status.
     * Maximum length: 255.
     * @nullable
     */
    mdfSystemRecordStatus?: string;
    /**
     * order.
     * @nullable
     */
    order?: BigNumber;
    /**
     * Proficiency Level.
     * Maximum length: 255.
     * @nullable
     */
    proLevelDeDe?: string;
    /**
     * Proficiency Level.
     * Maximum length: 255.
     * @nullable
     */
    proLevelDefaultValue?: string;
    /**
     * Proficiency Level.
     * Maximum length: 255.
     * @nullable
     */
    proLevelEnDebug?: string;
    /**
     * Proficiency Level.
     * Maximum length: 255.
     * @nullable
     */
    proLevelEnGb?: string;
    /**
     * Proficiency Level.
     * Maximum length: 255.
     * @nullable
     */
    proLevelEnUs?: string;
    /**
     * Proficiency Level.
     * Maximum length: 255.
     * @nullable
     */
    proLevelEsEs?: string;
    /**
     * Proficiency Level.
     * Maximum length: 255.
     * @nullable
     */
    proLevelEsMx?: string;
    /**
     * Proficiency Level.
     * Maximum length: 255.
     * @nullable
     */
    proLevelFrCa?: string;
    /**
     * Proficiency Level.
     * Maximum length: 255.
     * @nullable
     */
    proLevelFrFr?: string;
    /**
     * Proficiency Level.
     * Maximum length: 255.
     * @nullable
     */
    proLevelItIt?: string;
    /**
     * Proficiency Level.
     * Maximum length: 255.
     * @nullable
     */
    proLevelLocalized?: string;
    /**
     * Proficiency Level.
     * Maximum length: 255.
     * @nullable
     */
    proLevelNlNl?: string;
    /**
     * Proficiency Level.
     * Maximum length: 255.
     * @nullable
     */
    proLevelPtBr?: string;
    /**
     * Proficiency Level.
     * Maximum length: 255.
     * @nullable
     */
    proLevelZhCn?: string;
    /**
     * role.
     * Maximum length: 128.
     * @nullable
     */
    role?: string;
    /**
     * sectionId.
     * Maximum length: 255.
     * @nullable
     */
    sectionId?: string;
    /**
     * sectionType.
     * Maximum length: 255.
     * @nullable
     */
    sectionType?: string;
    /**
     * skillMappingId.
     * Maximum length: 255.
     * @nullable
     */
    skillMappingId?: string;
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
     * One-to-one navigation property to the [[SkillEntity]] entity.
     */
    entityNav: SkillEntity;
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
    proLevelTranslationTextNav: MdfLocalizedValue[];
    /**
     * One-to-one navigation property to the [[RoleEntity]] entity.
     */
    roleNav: RoleEntity;
    /**
     * One-to-one navigation property to the [[MdfEnumValue]] entity.
     */
    statusNav: MdfEnumValue;
    /**
     * Returns an entity builder to construct instances `SkillContent`.
     * @returns A builder that constructs instances of entity type `SkillContent`.
     */
    static builder(): EntityBuilderType<SkillContent, SkillContentTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `SkillContent` entity type.
     * @returns A `SkillContent` request builder.
     */
    static requestBuilder(): SkillContentRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `SkillContent`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `SkillContent`.
     */
    static customField(fieldName: string): CustomField<SkillContent>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { User, UserType } from './User';
import { SkillEntity, SkillEntityType } from './SkillEntity';
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';
import { MdfLocalizedValue, MdfLocalizedValueType } from './MdfLocalizedValue';
import { RoleEntity, RoleEntityType } from './RoleEntity';
export interface SkillContentType {
    jobProfileExternalCode: string;
    createdBy?: string;
    createdDateTime?: Moment;
    entity?: string;
    externalCode: string;
    jobProfileId?: string;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    mdfSystemRecordStatus?: string;
    order?: BigNumber;
    proLevelDeDe?: string;
    proLevelDefaultValue?: string;
    proLevelEnDebug?: string;
    proLevelEnGb?: string;
    proLevelEnUs?: string;
    proLevelEsEs?: string;
    proLevelEsMx?: string;
    proLevelFrCa?: string;
    proLevelFrFr?: string;
    proLevelItIt?: string;
    proLevelLocalized?: string;
    proLevelNlNl?: string;
    proLevelPtBr?: string;
    proLevelZhCn?: string;
    role?: string;
    sectionId?: string;
    sectionType?: string;
    skillMappingId?: string;
    status?: string;
    subModule?: string;
    createdByNav: UserType;
    entityNav: SkillEntityType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    proLevelTranslationTextNav: MdfLocalizedValueType[];
    roleNav: RoleEntityType;
    statusNav: MdfEnumValueType;
}
export interface SkillContentTypeForceMandatory {
    jobProfileExternalCode: string;
    createdBy: string;
    createdDateTime: Moment;
    entity: string;
    externalCode: string;
    jobProfileId: string;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    mdfSystemRecordStatus: string;
    order: BigNumber;
    proLevelDeDe: string;
    proLevelDefaultValue: string;
    proLevelEnDebug: string;
    proLevelEnGb: string;
    proLevelEnUs: string;
    proLevelEsEs: string;
    proLevelEsMx: string;
    proLevelFrCa: string;
    proLevelFrFr: string;
    proLevelItIt: string;
    proLevelLocalized: string;
    proLevelNlNl: string;
    proLevelPtBr: string;
    proLevelZhCn: string;
    role: string;
    sectionId: string;
    sectionType: string;
    skillMappingId: string;
    status: string;
    subModule: string;
    createdByNav: UserType;
    entityNav: SkillEntityType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    proLevelTranslationTextNav: MdfLocalizedValueType[];
    roleNav: RoleEntityType;
    statusNav: MdfEnumValueType;
}
export declare namespace SkillContent {
    /**
     * Static representation of the [[jobProfileExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_PROFILE_EXTERNAL_CODE: StringField<SkillContent>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<SkillContent>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<SkillContent>;
    /**
     * Static representation of the [[entity]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ENTITY: StringField<SkillContent>;
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CODE: StringField<SkillContent>;
    /**
     * Static representation of the [[jobProfileId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_PROFILE_ID: StringField<SkillContent>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<SkillContent>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<SkillContent>;
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS: StringField<SkillContent>;
    /**
     * Static representation of the [[order]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ORDER: BigNumberField<SkillContent>;
    /**
     * Static representation of the [[proLevelDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRO_LEVEL_DE_DE: StringField<SkillContent>;
    /**
     * Static representation of the [[proLevelDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRO_LEVEL_DEFAULT_VALUE: StringField<SkillContent>;
    /**
     * Static representation of the [[proLevelEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRO_LEVEL_EN_DEBUG: StringField<SkillContent>;
    /**
     * Static representation of the [[proLevelEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRO_LEVEL_EN_GB: StringField<SkillContent>;
    /**
     * Static representation of the [[proLevelEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRO_LEVEL_EN_US: StringField<SkillContent>;
    /**
     * Static representation of the [[proLevelEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRO_LEVEL_ES_ES: StringField<SkillContent>;
    /**
     * Static representation of the [[proLevelEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRO_LEVEL_ES_MX: StringField<SkillContent>;
    /**
     * Static representation of the [[proLevelFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRO_LEVEL_FR_CA: StringField<SkillContent>;
    /**
     * Static representation of the [[proLevelFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRO_LEVEL_FR_FR: StringField<SkillContent>;
    /**
     * Static representation of the [[proLevelItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRO_LEVEL_IT_IT: StringField<SkillContent>;
    /**
     * Static representation of the [[proLevelLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRO_LEVEL_LOCALIZED: StringField<SkillContent>;
    /**
     * Static representation of the [[proLevelNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRO_LEVEL_NL_NL: StringField<SkillContent>;
    /**
     * Static representation of the [[proLevelPtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRO_LEVEL_PT_BR: StringField<SkillContent>;
    /**
     * Static representation of the [[proLevelZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRO_LEVEL_ZH_CN: StringField<SkillContent>;
    /**
     * Static representation of the [[role]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ROLE: StringField<SkillContent>;
    /**
     * Static representation of the [[sectionId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SECTION_ID: StringField<SkillContent>;
    /**
     * Static representation of the [[sectionType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SECTION_TYPE: StringField<SkillContent>;
    /**
     * Static representation of the [[skillMappingId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SKILL_MAPPING_ID: StringField<SkillContent>;
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS: StringField<SkillContent>;
    /**
     * Static representation of the [[subModule]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUB_MODULE: StringField<SkillContent>;
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_NAV: OneToOneLink<SkillContent, User>;
    /**
     * Static representation of the one-to-one navigation property [[entityNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ENTITY_NAV: OneToOneLink<SkillContent, SkillEntity>;
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY_NAV: OneToOneLink<SkillContent, User>;
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<SkillContent, MdfEnumValue>;
    /**
     * Static representation of the one-to-many navigation property [[proLevelTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRO_LEVEL_TRANSLATION_TEXT_NAV: Link<SkillContent, MdfLocalizedValue>;
    /**
     * Static representation of the one-to-one navigation property [[roleNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ROLE_NAV: OneToOneLink<SkillContent, RoleEntity>;
    /**
     * Static representation of the one-to-one navigation property [[statusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS_NAV: OneToOneLink<SkillContent, MdfEnumValue>;
    /**
     * All fields of the SkillContent entity.
     */
    const _allFields: Array<StringField<SkillContent> | DateField<SkillContent> | BigNumberField<SkillContent> | OneToOneLink<SkillContent, User> | OneToOneLink<SkillContent, SkillEntity> | OneToOneLink<SkillContent, MdfEnumValue> | Link<SkillContent, MdfLocalizedValue> | OneToOneLink<SkillContent, RoleEntity>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<SkillContent>;
    /**
     * All key fields of the SkillContent entity.
     */
    const _keyFields: Array<Selectable<SkillContent>>;
    /**
     * Mapping of all key field names to the respective static field property SkillContent.
     */
    const _keys: {
        [keys: string]: Selectable<SkillContent>;
    };
}
//# sourceMappingURL=SkillContent.d.ts.map