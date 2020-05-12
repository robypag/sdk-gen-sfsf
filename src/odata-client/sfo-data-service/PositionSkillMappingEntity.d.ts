import { PositionSkillMappingEntityRequestBuilder } from './PositionSkillMappingEntityRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "PositionSkillMappingEntity" of service "SFOData".
 */
export declare class PositionSkillMappingEntity extends Entity implements PositionSkillMappingEntityType {
    /**
     * Technical entity name for PositionSkillMappingEntity.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for PositionSkillMappingEntity.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Position Extension_GUID.
     * Maximum length: 128.
     */
    positionEntityExternalCode: string;
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
     * Returns an entity builder to construct instances `PositionSkillMappingEntity`.
     * @returns A builder that constructs instances of entity type `PositionSkillMappingEntity`.
     */
    static builder(): EntityBuilderType<PositionSkillMappingEntity, PositionSkillMappingEntityTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `PositionSkillMappingEntity` entity type.
     * @returns A `PositionSkillMappingEntity` request builder.
     */
    static requestBuilder(): PositionSkillMappingEntityRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `PositionSkillMappingEntity`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `PositionSkillMappingEntity`.
     */
    static customField(fieldName: string): CustomField<PositionSkillMappingEntity>;
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
export interface PositionSkillMappingEntityType {
    positionEntityExternalCode: string;
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
export interface PositionSkillMappingEntityTypeForceMandatory {
    positionEntityExternalCode: string;
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
export declare namespace PositionSkillMappingEntity {
    /**
     * Static representation of the [[positionEntityExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const POSITION_ENTITY_EXTERNAL_CODE: StringField<PositionSkillMappingEntity>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<PositionSkillMappingEntity>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<PositionSkillMappingEntity>;
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CODE: StringField<PositionSkillMappingEntity>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<PositionSkillMappingEntity>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<PositionSkillMappingEntity>;
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS: StringField<PositionSkillMappingEntity>;
    /**
     * Static representation of the [[proLevelDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRO_LEVEL_DE_DE: StringField<PositionSkillMappingEntity>;
    /**
     * Static representation of the [[proLevelDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRO_LEVEL_DEFAULT_VALUE: StringField<PositionSkillMappingEntity>;
    /**
     * Static representation of the [[proLevelEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRO_LEVEL_EN_DEBUG: StringField<PositionSkillMappingEntity>;
    /**
     * Static representation of the [[proLevelEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRO_LEVEL_EN_GB: StringField<PositionSkillMappingEntity>;
    /**
     * Static representation of the [[proLevelEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRO_LEVEL_EN_US: StringField<PositionSkillMappingEntity>;
    /**
     * Static representation of the [[proLevelEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRO_LEVEL_ES_ES: StringField<PositionSkillMappingEntity>;
    /**
     * Static representation of the [[proLevelEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRO_LEVEL_ES_MX: StringField<PositionSkillMappingEntity>;
    /**
     * Static representation of the [[proLevelFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRO_LEVEL_FR_CA: StringField<PositionSkillMappingEntity>;
    /**
     * Static representation of the [[proLevelFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRO_LEVEL_FR_FR: StringField<PositionSkillMappingEntity>;
    /**
     * Static representation of the [[proLevelItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRO_LEVEL_IT_IT: StringField<PositionSkillMappingEntity>;
    /**
     * Static representation of the [[proLevelLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRO_LEVEL_LOCALIZED: StringField<PositionSkillMappingEntity>;
    /**
     * Static representation of the [[proLevelNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRO_LEVEL_NL_NL: StringField<PositionSkillMappingEntity>;
    /**
     * Static representation of the [[proLevelPtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRO_LEVEL_PT_BR: StringField<PositionSkillMappingEntity>;
    /**
     * Static representation of the [[proLevelZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRO_LEVEL_ZH_CN: StringField<PositionSkillMappingEntity>;
    /**
     * Static representation of the [[skill]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SKILL: StringField<PositionSkillMappingEntity>;
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS: StringField<PositionSkillMappingEntity>;
    /**
     * Static representation of the [[subModule]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUB_MODULE: StringField<PositionSkillMappingEntity>;
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_NAV: OneToOneLink<PositionSkillMappingEntity, User>;
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY_NAV: OneToOneLink<PositionSkillMappingEntity, User>;
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<PositionSkillMappingEntity, MdfEnumValue>;
    /**
     * Static representation of the one-to-many navigation property [[proLevelTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRO_LEVEL_TRANSLATION_TEXT_NAV: Link<PositionSkillMappingEntity, MdfLocalizedValue>;
    /**
     * Static representation of the one-to-one navigation property [[skillNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SKILL_NAV: OneToOneLink<PositionSkillMappingEntity, SkillEntity>;
    /**
     * Static representation of the one-to-one navigation property [[statusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS_NAV: OneToOneLink<PositionSkillMappingEntity, MdfEnumValue>;
    /**
     * All fields of the PositionSkillMappingEntity entity.
     */
    const _allFields: Array<StringField<PositionSkillMappingEntity> | DateField<PositionSkillMappingEntity> | OneToOneLink<PositionSkillMappingEntity, User> | OneToOneLink<PositionSkillMappingEntity, MdfEnumValue> | Link<PositionSkillMappingEntity, MdfLocalizedValue> | OneToOneLink<PositionSkillMappingEntity, SkillEntity>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<PositionSkillMappingEntity>;
    /**
     * All key fields of the PositionSkillMappingEntity entity.
     */
    const _keyFields: Array<Selectable<PositionSkillMappingEntity>>;
    /**
     * Mapping of all key field names to the respective static field property PositionSkillMappingEntity.
     */
    const _keys: {
        [keys: string]: Selectable<PositionSkillMappingEntity>;
    };
}
//# sourceMappingURL=PositionSkillMappingEntity.d.ts.map