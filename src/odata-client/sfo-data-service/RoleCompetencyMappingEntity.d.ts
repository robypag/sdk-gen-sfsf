import { RoleCompetencyMappingEntityRequestBuilder } from './RoleCompetencyMappingEntityRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "RoleCompetencyMappingEntity" of service "SFOData".
 */
export declare class RoleCompetencyMappingEntity extends Entity implements RoleCompetencyMappingEntityType {
    /**
     * Technical entity name for RoleCompetencyMappingEntity.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for RoleCompetencyMappingEntity.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Role_GUID.
     * Maximum length: 128.
     */
    roleEntityExternalCode: string;
    /**
     * Competency GUID.
     * Maximum length: 128.
     * @nullable
     */
    competency?: string;
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
     * Rating.
     * Maximum length: 255.
     * @nullable
     */
    ratingDeDe?: string;
    /**
     * Rating.
     * Maximum length: 255.
     * @nullable
     */
    ratingDefaultValue?: string;
    /**
     * Rating.
     * Maximum length: 255.
     * @nullable
     */
    ratingEnDebug?: string;
    /**
     * Rating.
     * Maximum length: 255.
     * @nullable
     */
    ratingEnGb?: string;
    /**
     * Rating.
     * Maximum length: 255.
     * @nullable
     */
    ratingEnUs?: string;
    /**
     * Rating.
     * Maximum length: 255.
     * @nullable
     */
    ratingEsEs?: string;
    /**
     * Rating.
     * Maximum length: 255.
     * @nullable
     */
    ratingEsMx?: string;
    /**
     * Rating.
     * Maximum length: 255.
     * @nullable
     */
    ratingFrCa?: string;
    /**
     * Rating.
     * Maximum length: 255.
     * @nullable
     */
    ratingFrFr?: string;
    /**
     * Rating.
     * Maximum length: 255.
     * @nullable
     */
    ratingItIt?: string;
    /**
     * Rating.
     * Maximum length: 255.
     * @nullable
     */
    ratingLocalized?: string;
    /**
     * Rating.
     * Maximum length: 255.
     * @nullable
     */
    ratingNlNl?: string;
    /**
     * Rating.
     * Maximum length: 255.
     * @nullable
     */
    ratingPtBr?: string;
    /**
     * Rating.
     * Maximum length: 255.
     * @nullable
     */
    ratingZhCn?: string;
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
     * Weight.
     * Maximum length: 255.
     * @nullable
     */
    weightDeDe?: string;
    /**
     * Weight.
     * Maximum length: 255.
     * @nullable
     */
    weightDefaultValue?: string;
    /**
     * Weight.
     * Maximum length: 255.
     * @nullable
     */
    weightEnDebug?: string;
    /**
     * Weight.
     * Maximum length: 255.
     * @nullable
     */
    weightEnGb?: string;
    /**
     * Weight.
     * Maximum length: 255.
     * @nullable
     */
    weightEnUs?: string;
    /**
     * Weight.
     * Maximum length: 255.
     * @nullable
     */
    weightEsEs?: string;
    /**
     * Weight.
     * Maximum length: 255.
     * @nullable
     */
    weightEsMx?: string;
    /**
     * Weight.
     * Maximum length: 255.
     * @nullable
     */
    weightFrCa?: string;
    /**
     * Weight.
     * Maximum length: 255.
     * @nullable
     */
    weightFrFr?: string;
    /**
     * Weight.
     * Maximum length: 255.
     * @nullable
     */
    weightItIt?: string;
    /**
     * Weight.
     * Maximum length: 255.
     * @nullable
     */
    weightLocalized?: string;
    /**
     * Weight.
     * Maximum length: 255.
     * @nullable
     */
    weightNlNl?: string;
    /**
     * Weight.
     * Maximum length: 255.
     * @nullable
     */
    weightPtBr?: string;
    /**
     * Weight.
     * Maximum length: 255.
     * @nullable
     */
    weightZhCn?: string;
    /**
     * One-to-one navigation property to the [[CompetencyEntity]] entity.
     */
    competencyNav: CompetencyEntity;
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
    ratingTranslationTextNav: MdfLocalizedValue[];
    /**
     * One-to-one navigation property to the [[MdfEnumValue]] entity.
     */
    statusNav: MdfEnumValue;
    /**
     * One-to-many navigation property to the [[MdfLocalizedValue]] entity.
     */
    weightTranslationTextNav: MdfLocalizedValue[];
    /**
     * Returns an entity builder to construct instances `RoleCompetencyMappingEntity`.
     * @returns A builder that constructs instances of entity type `RoleCompetencyMappingEntity`.
     */
    static builder(): EntityBuilderType<RoleCompetencyMappingEntity, RoleCompetencyMappingEntityTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `RoleCompetencyMappingEntity` entity type.
     * @returns A `RoleCompetencyMappingEntity` request builder.
     */
    static requestBuilder(): RoleCompetencyMappingEntityRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `RoleCompetencyMappingEntity`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `RoleCompetencyMappingEntity`.
     */
    static customField(fieldName: string): CustomField<RoleCompetencyMappingEntity>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { CompetencyEntity, CompetencyEntityType } from './CompetencyEntity';
import { User, UserType } from './User';
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';
import { MdfLocalizedValue, MdfLocalizedValueType } from './MdfLocalizedValue';
export interface RoleCompetencyMappingEntityType {
    roleEntityExternalCode: string;
    competency?: string;
    createdBy?: string;
    createdDateTime?: Moment;
    externalCode: string;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    mdfSystemRecordStatus?: string;
    ratingDeDe?: string;
    ratingDefaultValue?: string;
    ratingEnDebug?: string;
    ratingEnGb?: string;
    ratingEnUs?: string;
    ratingEsEs?: string;
    ratingEsMx?: string;
    ratingFrCa?: string;
    ratingFrFr?: string;
    ratingItIt?: string;
    ratingLocalized?: string;
    ratingNlNl?: string;
    ratingPtBr?: string;
    ratingZhCn?: string;
    status?: string;
    subModule?: string;
    weightDeDe?: string;
    weightDefaultValue?: string;
    weightEnDebug?: string;
    weightEnGb?: string;
    weightEnUs?: string;
    weightEsEs?: string;
    weightEsMx?: string;
    weightFrCa?: string;
    weightFrFr?: string;
    weightItIt?: string;
    weightLocalized?: string;
    weightNlNl?: string;
    weightPtBr?: string;
    weightZhCn?: string;
    competencyNav: CompetencyEntityType;
    createdByNav: UserType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    ratingTranslationTextNav: MdfLocalizedValueType[];
    statusNav: MdfEnumValueType;
    weightTranslationTextNav: MdfLocalizedValueType[];
}
export interface RoleCompetencyMappingEntityTypeForceMandatory {
    roleEntityExternalCode: string;
    competency: string;
    createdBy: string;
    createdDateTime: Moment;
    externalCode: string;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    mdfSystemRecordStatus: string;
    ratingDeDe: string;
    ratingDefaultValue: string;
    ratingEnDebug: string;
    ratingEnGb: string;
    ratingEnUs: string;
    ratingEsEs: string;
    ratingEsMx: string;
    ratingFrCa: string;
    ratingFrFr: string;
    ratingItIt: string;
    ratingLocalized: string;
    ratingNlNl: string;
    ratingPtBr: string;
    ratingZhCn: string;
    status: string;
    subModule: string;
    weightDeDe: string;
    weightDefaultValue: string;
    weightEnDebug: string;
    weightEnGb: string;
    weightEnUs: string;
    weightEsEs: string;
    weightEsMx: string;
    weightFrCa: string;
    weightFrFr: string;
    weightItIt: string;
    weightLocalized: string;
    weightNlNl: string;
    weightPtBr: string;
    weightZhCn: string;
    competencyNav: CompetencyEntityType;
    createdByNav: UserType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    ratingTranslationTextNav: MdfLocalizedValueType[];
    statusNav: MdfEnumValueType;
    weightTranslationTextNav: MdfLocalizedValueType[];
}
export declare namespace RoleCompetencyMappingEntity {
    /**
     * Static representation of the [[roleEntityExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ROLE_ENTITY_EXTERNAL_CODE: StringField<RoleCompetencyMappingEntity>;
    /**
     * Static representation of the [[competency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COMPETENCY: StringField<RoleCompetencyMappingEntity>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<RoleCompetencyMappingEntity>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<RoleCompetencyMappingEntity>;
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CODE: StringField<RoleCompetencyMappingEntity>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<RoleCompetencyMappingEntity>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<RoleCompetencyMappingEntity>;
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS: StringField<RoleCompetencyMappingEntity>;
    /**
     * Static representation of the [[ratingDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RATING_DE_DE: StringField<RoleCompetencyMappingEntity>;
    /**
     * Static representation of the [[ratingDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RATING_DEFAULT_VALUE: StringField<RoleCompetencyMappingEntity>;
    /**
     * Static representation of the [[ratingEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RATING_EN_DEBUG: StringField<RoleCompetencyMappingEntity>;
    /**
     * Static representation of the [[ratingEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RATING_EN_GB: StringField<RoleCompetencyMappingEntity>;
    /**
     * Static representation of the [[ratingEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RATING_EN_US: StringField<RoleCompetencyMappingEntity>;
    /**
     * Static representation of the [[ratingEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RATING_ES_ES: StringField<RoleCompetencyMappingEntity>;
    /**
     * Static representation of the [[ratingEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RATING_ES_MX: StringField<RoleCompetencyMappingEntity>;
    /**
     * Static representation of the [[ratingFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RATING_FR_CA: StringField<RoleCompetencyMappingEntity>;
    /**
     * Static representation of the [[ratingFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RATING_FR_FR: StringField<RoleCompetencyMappingEntity>;
    /**
     * Static representation of the [[ratingItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RATING_IT_IT: StringField<RoleCompetencyMappingEntity>;
    /**
     * Static representation of the [[ratingLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RATING_LOCALIZED: StringField<RoleCompetencyMappingEntity>;
    /**
     * Static representation of the [[ratingNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RATING_NL_NL: StringField<RoleCompetencyMappingEntity>;
    /**
     * Static representation of the [[ratingPtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RATING_PT_BR: StringField<RoleCompetencyMappingEntity>;
    /**
     * Static representation of the [[ratingZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RATING_ZH_CN: StringField<RoleCompetencyMappingEntity>;
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS: StringField<RoleCompetencyMappingEntity>;
    /**
     * Static representation of the [[subModule]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUB_MODULE: StringField<RoleCompetencyMappingEntity>;
    /**
     * Static representation of the [[weightDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WEIGHT_DE_DE: StringField<RoleCompetencyMappingEntity>;
    /**
     * Static representation of the [[weightDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WEIGHT_DEFAULT_VALUE: StringField<RoleCompetencyMappingEntity>;
    /**
     * Static representation of the [[weightEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WEIGHT_EN_DEBUG: StringField<RoleCompetencyMappingEntity>;
    /**
     * Static representation of the [[weightEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WEIGHT_EN_GB: StringField<RoleCompetencyMappingEntity>;
    /**
     * Static representation of the [[weightEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WEIGHT_EN_US: StringField<RoleCompetencyMappingEntity>;
    /**
     * Static representation of the [[weightEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WEIGHT_ES_ES: StringField<RoleCompetencyMappingEntity>;
    /**
     * Static representation of the [[weightEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WEIGHT_ES_MX: StringField<RoleCompetencyMappingEntity>;
    /**
     * Static representation of the [[weightFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WEIGHT_FR_CA: StringField<RoleCompetencyMappingEntity>;
    /**
     * Static representation of the [[weightFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WEIGHT_FR_FR: StringField<RoleCompetencyMappingEntity>;
    /**
     * Static representation of the [[weightItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WEIGHT_IT_IT: StringField<RoleCompetencyMappingEntity>;
    /**
     * Static representation of the [[weightLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WEIGHT_LOCALIZED: StringField<RoleCompetencyMappingEntity>;
    /**
     * Static representation of the [[weightNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WEIGHT_NL_NL: StringField<RoleCompetencyMappingEntity>;
    /**
     * Static representation of the [[weightPtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WEIGHT_PT_BR: StringField<RoleCompetencyMappingEntity>;
    /**
     * Static representation of the [[weightZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WEIGHT_ZH_CN: StringField<RoleCompetencyMappingEntity>;
    /**
     * Static representation of the one-to-one navigation property [[competencyNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COMPETENCY_NAV: OneToOneLink<RoleCompetencyMappingEntity, CompetencyEntity>;
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_NAV: OneToOneLink<RoleCompetencyMappingEntity, User>;
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY_NAV: OneToOneLink<RoleCompetencyMappingEntity, User>;
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<RoleCompetencyMappingEntity, MdfEnumValue>;
    /**
     * Static representation of the one-to-many navigation property [[ratingTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RATING_TRANSLATION_TEXT_NAV: Link<RoleCompetencyMappingEntity, MdfLocalizedValue>;
    /**
     * Static representation of the one-to-one navigation property [[statusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS_NAV: OneToOneLink<RoleCompetencyMappingEntity, MdfEnumValue>;
    /**
     * Static representation of the one-to-many navigation property [[weightTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WEIGHT_TRANSLATION_TEXT_NAV: Link<RoleCompetencyMappingEntity, MdfLocalizedValue>;
    /**
     * All fields of the RoleCompetencyMappingEntity entity.
     */
    const _allFields: Array<StringField<RoleCompetencyMappingEntity> | DateField<RoleCompetencyMappingEntity> | OneToOneLink<RoleCompetencyMappingEntity, CompetencyEntity> | OneToOneLink<RoleCompetencyMappingEntity, User> | OneToOneLink<RoleCompetencyMappingEntity, MdfEnumValue> | Link<RoleCompetencyMappingEntity, MdfLocalizedValue>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<RoleCompetencyMappingEntity>;
    /**
     * All key fields of the RoleCompetencyMappingEntity entity.
     */
    const _keyFields: Array<Selectable<RoleCompetencyMappingEntity>>;
    /**
     * Mapping of all key field names to the respective static field property RoleCompetencyMappingEntity.
     */
    const _keys: {
        [keys: string]: Selectable<RoleCompetencyMappingEntity>;
    };
}
//# sourceMappingURL=RoleCompetencyMappingEntity.d.ts.map