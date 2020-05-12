import { FamilySkillMappingEntityRequestBuilder } from './FamilySkillMappingEntityRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "FamilySkillMappingEntity" of service "SFOData".
 */
export declare class FamilySkillMappingEntity extends Entity implements FamilySkillMappingEntityType {
    /**
     * Technical entity name for FamilySkillMappingEntity.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for FamilySkillMappingEntity.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Family_GUID.
     * Maximum length: 128.
     */
    familyEntityExternalCode: string;
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
    externalCode: string;
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
     * Skill.
     * Maximum length: 128.
     * @nullable
     */
    skill?: string;
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
    proLevelTranslationTextNav: MdfLocalizedValue[];
    /**
     * One-to-one navigation property to the [[SkillEntity]] entity.
     */
    skillNav: SkillEntity;
    /**
     * One-to-one navigation property to the [[MdfEnumValue]] entity.
     */
    statusNav: MdfEnumValue;
    /**
     * Returns an entity builder to construct instances `FamilySkillMappingEntity`.
     * @returns A builder that constructs instances of entity type `FamilySkillMappingEntity`.
     */
    static builder(): EntityBuilderType<FamilySkillMappingEntity, FamilySkillMappingEntityTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `FamilySkillMappingEntity` entity type.
     * @returns A `FamilySkillMappingEntity` request builder.
     */
    static requestBuilder(): FamilySkillMappingEntityRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `FamilySkillMappingEntity`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `FamilySkillMappingEntity`.
     */
    static customField(fieldName: string): CustomField<FamilySkillMappingEntity>;
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
import { SkillEntity, SkillEntityType } from './SkillEntity';
export interface FamilySkillMappingEntityType {
    familyEntityExternalCode: string;
    createdBy?: string;
    createdDateTime?: Moment;
    externalCode: string;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    mdfSystemRecordStatus?: string;
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
    skill?: string;
    status?: string;
    subModule?: string;
    createdByNav: UserType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    proLevelTranslationTextNav: MdfLocalizedValueType[];
    skillNav: SkillEntityType;
    statusNav: MdfEnumValueType;
}
export interface FamilySkillMappingEntityTypeForceMandatory {
    familyEntityExternalCode: string;
    createdBy: string;
    createdDateTime: Moment;
    externalCode: string;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    mdfSystemRecordStatus: string;
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
    skill: string;
    status: string;
    subModule: string;
    createdByNav: UserType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    proLevelTranslationTextNav: MdfLocalizedValueType[];
    skillNav: SkillEntityType;
    statusNav: MdfEnumValueType;
}
export declare namespace FamilySkillMappingEntity {
    /**
     * Static representation of the [[familyEntityExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FAMILY_ENTITY_EXTERNAL_CODE: StringField<FamilySkillMappingEntity>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<FamilySkillMappingEntity>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<FamilySkillMappingEntity>;
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CODE: StringField<FamilySkillMappingEntity>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<FamilySkillMappingEntity>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<FamilySkillMappingEntity>;
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS: StringField<FamilySkillMappingEntity>;
    /**
     * Static representation of the [[proLevelDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRO_LEVEL_DE_DE: StringField<FamilySkillMappingEntity>;
    /**
     * Static representation of the [[proLevelDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRO_LEVEL_DEFAULT_VALUE: StringField<FamilySkillMappingEntity>;
    /**
     * Static representation of the [[proLevelEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRO_LEVEL_EN_DEBUG: StringField<FamilySkillMappingEntity>;
    /**
     * Static representation of the [[proLevelEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRO_LEVEL_EN_GB: StringField<FamilySkillMappingEntity>;
    /**
     * Static representation of the [[proLevelEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRO_LEVEL_EN_US: StringField<FamilySkillMappingEntity>;
    /**
     * Static representation of the [[proLevelEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRO_LEVEL_ES_ES: StringField<FamilySkillMappingEntity>;
    /**
     * Static representation of the [[proLevelEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRO_LEVEL_ES_MX: StringField<FamilySkillMappingEntity>;
    /**
     * Static representation of the [[proLevelFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRO_LEVEL_FR_CA: StringField<FamilySkillMappingEntity>;
    /**
     * Static representation of the [[proLevelFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRO_LEVEL_FR_FR: StringField<FamilySkillMappingEntity>;
    /**
     * Static representation of the [[proLevelItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRO_LEVEL_IT_IT: StringField<FamilySkillMappingEntity>;
    /**
     * Static representation of the [[proLevelLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRO_LEVEL_LOCALIZED: StringField<FamilySkillMappingEntity>;
    /**
     * Static representation of the [[proLevelNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRO_LEVEL_NL_NL: StringField<FamilySkillMappingEntity>;
    /**
     * Static representation of the [[proLevelPtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRO_LEVEL_PT_BR: StringField<FamilySkillMappingEntity>;
    /**
     * Static representation of the [[proLevelZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRO_LEVEL_ZH_CN: StringField<FamilySkillMappingEntity>;
    /**
     * Static representation of the [[skill]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SKILL: StringField<FamilySkillMappingEntity>;
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS: StringField<FamilySkillMappingEntity>;
    /**
     * Static representation of the [[subModule]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUB_MODULE: StringField<FamilySkillMappingEntity>;
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_NAV: OneToOneLink<FamilySkillMappingEntity, User>;
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY_NAV: OneToOneLink<FamilySkillMappingEntity, User>;
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<FamilySkillMappingEntity, MdfEnumValue>;
    /**
     * Static representation of the one-to-many navigation property [[proLevelTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRO_LEVEL_TRANSLATION_TEXT_NAV: Link<FamilySkillMappingEntity, MdfLocalizedValue>;
    /**
     * Static representation of the one-to-one navigation property [[skillNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SKILL_NAV: OneToOneLink<FamilySkillMappingEntity, SkillEntity>;
    /**
     * Static representation of the one-to-one navigation property [[statusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS_NAV: OneToOneLink<FamilySkillMappingEntity, MdfEnumValue>;
    /**
     * All fields of the FamilySkillMappingEntity entity.
     */
    const _allFields: Array<StringField<FamilySkillMappingEntity> | DateField<FamilySkillMappingEntity> | OneToOneLink<FamilySkillMappingEntity, User> | OneToOneLink<FamilySkillMappingEntity, MdfEnumValue> | Link<FamilySkillMappingEntity, MdfLocalizedValue> | OneToOneLink<FamilySkillMappingEntity, SkillEntity>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<FamilySkillMappingEntity>;
    /**
     * All key fields of the FamilySkillMappingEntity entity.
     */
    const _keyFields: Array<Selectable<FamilySkillMappingEntity>>;
    /**
     * Mapping of all key field names to the respective static field property FamilySkillMappingEntity.
     */
    const _keys: {
        [keys: string]: Selectable<FamilySkillMappingEntity>;
    };
}
//# sourceMappingURL=FamilySkillMappingEntity.d.ts.map