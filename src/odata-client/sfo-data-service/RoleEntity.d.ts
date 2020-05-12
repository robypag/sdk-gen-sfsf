import { RoleEntityRequestBuilder } from './RoleEntityRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "RoleEntity" of service "SFOData".
 */
export declare class RoleEntity extends Entity implements RoleEntityType {
    /**
     * Technical entity name for RoleEntity.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for RoleEntity.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
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
     * createdLocale.
     * Maximum length: 255.
     * @nullable
     */
    createdLocale?: string;
    /**
     * GUID.
     * Maximum length: 128.
     */
    externalCode: string;
    /**
     * Family.
     * Maximum length: 128.
     * @nullable
     */
    family?: string;
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
     * Role Name.
     * Maximum length: 128.
     * @nullable
     */
    nameDeDe?: string;
    /**
     * Role Name.
     * Maximum length: 128.
     * @nullable
     */
    nameDefaultValue?: string;
    /**
     * Role Name.
     * Maximum length: 128.
     * @nullable
     */
    nameEnDebug?: string;
    /**
     * Role Name.
     * Maximum length: 128.
     * @nullable
     */
    nameEnGb?: string;
    /**
     * Role Name.
     * Maximum length: 128.
     * @nullable
     */
    nameEnUs?: string;
    /**
     * Role Name.
     * Maximum length: 128.
     * @nullable
     */
    nameEsEs?: string;
    /**
     * Role Name.
     * Maximum length: 128.
     * @nullable
     */
    nameEsMx?: string;
    /**
     * Role Name.
     * Maximum length: 128.
     * @nullable
     */
    nameFrCa?: string;
    /**
     * Role Name.
     * Maximum length: 128.
     * @nullable
     */
    nameFrFr?: string;
    /**
     * Role Name.
     * Maximum length: 128.
     * @nullable
     */
    nameItIt?: string;
    /**
     * Role Name.
     * Maximum length: 128.
     * @nullable
     */
    nameLocalized?: string;
    /**
     * Role Name.
     * Maximum length: 128.
     * @nullable
     */
    nameNlNl?: string;
    /**
     * Role Name.
     * Maximum length: 128.
     * @nullable
     */
    namePtBr?: string;
    /**
     * Role Name.
     * Maximum length: 128.
     * @nullable
     */
    nameZhCn?: string;
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
     * One-to-one navigation property to the [[FamilyEntity]] entity.
     */
    familyNav: FamilyEntity;
    /**
     * One-to-many navigation property to the [[JobCodeMappingEntity]] entity.
     */
    jobCodeMappings: JobCodeMappingEntity[];
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
    nameTranslationTextNav: MdfLocalizedValue[];
    /**
     * One-to-many navigation property to the [[RoleCompetencyBehaviorMappingEntity]] entity.
     */
    roleCompetencyBehaviorMappings: RoleCompetencyBehaviorMappingEntity[];
    /**
     * One-to-many navigation property to the [[RoleCompetencyMappingEntity]] entity.
     */
    roleCompetencyMappings: RoleCompetencyMappingEntity[];
    /**
     * One-to-many navigation property to the [[RoleSkillMappingEntity]] entity.
     */
    roleSkillMappings: RoleSkillMappingEntity[];
    /**
     * One-to-many navigation property to the [[RoleTalentPoolMappingEntity]] entity.
     */
    roleTalentPoolMappings: RoleTalentPoolMappingEntity[];
    /**
     * One-to-one navigation property to the [[MdfEnumValue]] entity.
     */
    statusNav: MdfEnumValue;
    /**
     * One-to-many navigation property to the [[WfRequest]] entity.
     */
    wfRequestNav: WfRequest[];
    /**
     * Returns an entity builder to construct instances `RoleEntity`.
     * @returns A builder that constructs instances of entity type `RoleEntity`.
     */
    static builder(): EntityBuilderType<RoleEntity, RoleEntityTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `RoleEntity` entity type.
     * @returns A `RoleEntity` request builder.
     */
    static requestBuilder(): RoleEntityRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `RoleEntity`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `RoleEntity`.
     */
    static customField(fieldName: string): CustomField<RoleEntity>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { User, UserType } from './User';
import { FamilyEntity, FamilyEntityType } from './FamilyEntity';
import { JobCodeMappingEntity, JobCodeMappingEntityType } from './JobCodeMappingEntity';
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';
import { MdfLocalizedValue, MdfLocalizedValueType } from './MdfLocalizedValue';
import { RoleCompetencyBehaviorMappingEntity, RoleCompetencyBehaviorMappingEntityType } from './RoleCompetencyBehaviorMappingEntity';
import { RoleCompetencyMappingEntity, RoleCompetencyMappingEntityType } from './RoleCompetencyMappingEntity';
import { RoleSkillMappingEntity, RoleSkillMappingEntityType } from './RoleSkillMappingEntity';
import { RoleTalentPoolMappingEntity, RoleTalentPoolMappingEntityType } from './RoleTalentPoolMappingEntity';
import { WfRequest, WfRequestType } from './WfRequest';
export interface RoleEntityType {
    createdBy?: string;
    createdDateTime?: Moment;
    createdLocale?: string;
    externalCode: string;
    family?: string;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    mdfSystemRecordStatus?: string;
    nameDeDe?: string;
    nameDefaultValue?: string;
    nameEnDebug?: string;
    nameEnGb?: string;
    nameEnUs?: string;
    nameEsEs?: string;
    nameEsMx?: string;
    nameFrCa?: string;
    nameFrFr?: string;
    nameItIt?: string;
    nameLocalized?: string;
    nameNlNl?: string;
    namePtBr?: string;
    nameZhCn?: string;
    status?: string;
    subModule?: string;
    createdByNav: UserType;
    familyNav: FamilyEntityType;
    jobCodeMappings: JobCodeMappingEntityType[];
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    nameTranslationTextNav: MdfLocalizedValueType[];
    roleCompetencyBehaviorMappings: RoleCompetencyBehaviorMappingEntityType[];
    roleCompetencyMappings: RoleCompetencyMappingEntityType[];
    roleSkillMappings: RoleSkillMappingEntityType[];
    roleTalentPoolMappings: RoleTalentPoolMappingEntityType[];
    statusNav: MdfEnumValueType;
    wfRequestNav: WfRequestType[];
}
export interface RoleEntityTypeForceMandatory {
    createdBy: string;
    createdDateTime: Moment;
    createdLocale: string;
    externalCode: string;
    family: string;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    mdfSystemRecordStatus: string;
    nameDeDe: string;
    nameDefaultValue: string;
    nameEnDebug: string;
    nameEnGb: string;
    nameEnUs: string;
    nameEsEs: string;
    nameEsMx: string;
    nameFrCa: string;
    nameFrFr: string;
    nameItIt: string;
    nameLocalized: string;
    nameNlNl: string;
    namePtBr: string;
    nameZhCn: string;
    status: string;
    subModule: string;
    createdByNav: UserType;
    familyNav: FamilyEntityType;
    jobCodeMappings: JobCodeMappingEntityType[];
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    nameTranslationTextNav: MdfLocalizedValueType[];
    roleCompetencyBehaviorMappings: RoleCompetencyBehaviorMappingEntityType[];
    roleCompetencyMappings: RoleCompetencyMappingEntityType[];
    roleSkillMappings: RoleSkillMappingEntityType[];
    roleTalentPoolMappings: RoleTalentPoolMappingEntityType[];
    statusNav: MdfEnumValueType;
    wfRequestNav: WfRequestType[];
}
export declare namespace RoleEntity {
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<RoleEntity>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<RoleEntity>;
    /**
     * Static representation of the [[createdLocale]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_LOCALE: StringField<RoleEntity>;
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CODE: StringField<RoleEntity>;
    /**
     * Static representation of the [[family]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FAMILY: StringField<RoleEntity>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<RoleEntity>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<RoleEntity>;
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS: StringField<RoleEntity>;
    /**
     * Static representation of the [[nameDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_DE_DE: StringField<RoleEntity>;
    /**
     * Static representation of the [[nameDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_DEFAULT_VALUE: StringField<RoleEntity>;
    /**
     * Static representation of the [[nameEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_EN_DEBUG: StringField<RoleEntity>;
    /**
     * Static representation of the [[nameEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_EN_GB: StringField<RoleEntity>;
    /**
     * Static representation of the [[nameEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_EN_US: StringField<RoleEntity>;
    /**
     * Static representation of the [[nameEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_ES_ES: StringField<RoleEntity>;
    /**
     * Static representation of the [[nameEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_ES_MX: StringField<RoleEntity>;
    /**
     * Static representation of the [[nameFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_FR_CA: StringField<RoleEntity>;
    /**
     * Static representation of the [[nameFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_FR_FR: StringField<RoleEntity>;
    /**
     * Static representation of the [[nameItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_IT_IT: StringField<RoleEntity>;
    /**
     * Static representation of the [[nameLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_LOCALIZED: StringField<RoleEntity>;
    /**
     * Static representation of the [[nameNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_NL_NL: StringField<RoleEntity>;
    /**
     * Static representation of the [[namePtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_PT_BR: StringField<RoleEntity>;
    /**
     * Static representation of the [[nameZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_ZH_CN: StringField<RoleEntity>;
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS: StringField<RoleEntity>;
    /**
     * Static representation of the [[subModule]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUB_MODULE: StringField<RoleEntity>;
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_NAV: OneToOneLink<RoleEntity, User>;
    /**
     * Static representation of the one-to-one navigation property [[familyNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FAMILY_NAV: OneToOneLink<RoleEntity, FamilyEntity>;
    /**
     * Static representation of the one-to-many navigation property [[jobCodeMappings]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_CODE_MAPPINGS: Link<RoleEntity, JobCodeMappingEntity>;
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY_NAV: OneToOneLink<RoleEntity, User>;
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<RoleEntity, MdfEnumValue>;
    /**
     * Static representation of the one-to-many navigation property [[nameTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_TRANSLATION_TEXT_NAV: Link<RoleEntity, MdfLocalizedValue>;
    /**
     * Static representation of the one-to-many navigation property [[roleCompetencyBehaviorMappings]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ROLE_COMPETENCY_BEHAVIOR_MAPPINGS: Link<RoleEntity, RoleCompetencyBehaviorMappingEntity>;
    /**
     * Static representation of the one-to-many navigation property [[roleCompetencyMappings]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ROLE_COMPETENCY_MAPPINGS: Link<RoleEntity, RoleCompetencyMappingEntity>;
    /**
     * Static representation of the one-to-many navigation property [[roleSkillMappings]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ROLE_SKILL_MAPPINGS: Link<RoleEntity, RoleSkillMappingEntity>;
    /**
     * Static representation of the one-to-many navigation property [[roleTalentPoolMappings]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ROLE_TALENT_POOL_MAPPINGS: Link<RoleEntity, RoleTalentPoolMappingEntity>;
    /**
     * Static representation of the one-to-one navigation property [[statusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS_NAV: OneToOneLink<RoleEntity, MdfEnumValue>;
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WF_REQUEST_NAV: Link<RoleEntity, WfRequest>;
    /**
     * All fields of the RoleEntity entity.
     */
    const _allFields: Array<StringField<RoleEntity> | DateField<RoleEntity> | OneToOneLink<RoleEntity, User> | OneToOneLink<RoleEntity, FamilyEntity> | Link<RoleEntity, JobCodeMappingEntity> | OneToOneLink<RoleEntity, MdfEnumValue> | Link<RoleEntity, MdfLocalizedValue> | Link<RoleEntity, RoleCompetencyBehaviorMappingEntity> | Link<RoleEntity, RoleCompetencyMappingEntity> | Link<RoleEntity, RoleSkillMappingEntity> | Link<RoleEntity, RoleTalentPoolMappingEntity> | Link<RoleEntity, WfRequest>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<RoleEntity>;
    /**
     * All key fields of the RoleEntity entity.
     */
    const _keyFields: Array<Selectable<RoleEntity>>;
    /**
     * Mapping of all key field names to the respective static field property RoleEntity.
     */
    const _keys: {
        [keys: string]: Selectable<RoleEntity>;
    };
}
//# sourceMappingURL=RoleEntity.d.ts.map