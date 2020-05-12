import { FamilyEntityRequestBuilder } from './FamilyEntityRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "FamilyEntity" of service "SFOData".
 */
export declare class FamilyEntity extends Entity implements FamilyEntityType {
    /**
     * Technical entity name for FamilyEntity.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for FamilyEntity.
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
     * Family Name.
     * Maximum length: 128.
     * @nullable
     */
    nameDeDe?: string;
    /**
     * Family Name.
     * Maximum length: 128.
     * @nullable
     */
    nameDefaultValue?: string;
    /**
     * Family Name.
     * Maximum length: 128.
     * @nullable
     */
    nameEnDebug?: string;
    /**
     * Family Name.
     * Maximum length: 128.
     * @nullable
     */
    nameEnGb?: string;
    /**
     * Family Name.
     * Maximum length: 128.
     * @nullable
     */
    nameEnUs?: string;
    /**
     * Family Name.
     * Maximum length: 128.
     * @nullable
     */
    nameEsEs?: string;
    /**
     * Family Name.
     * Maximum length: 128.
     * @nullable
     */
    nameEsMx?: string;
    /**
     * Family Name.
     * Maximum length: 128.
     * @nullable
     */
    nameFrCa?: string;
    /**
     * Family Name.
     * Maximum length: 128.
     * @nullable
     */
    nameFrFr?: string;
    /**
     * Family Name.
     * Maximum length: 128.
     * @nullable
     */
    nameItIt?: string;
    /**
     * Family Name.
     * Maximum length: 128.
     * @nullable
     */
    nameLocalized?: string;
    /**
     * Family Name.
     * Maximum length: 128.
     * @nullable
     */
    nameNlNl?: string;
    /**
     * Family Name.
     * Maximum length: 128.
     * @nullable
     */
    namePtBr?: string;
    /**
     * Family Name.
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
     * One-to-many navigation property to the [[FamilyCompetencyMappingEntity]] entity.
     */
    competencies: FamilyCompetencyMappingEntity[];
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
    nameTranslationTextNav: MdfLocalizedValue[];
    /**
     * One-to-many navigation property to the [[FamilySkillMappingEntity]] entity.
     */
    skills: FamilySkillMappingEntity[];
    /**
     * One-to-one navigation property to the [[MdfEnumValue]] entity.
     */
    statusNav: MdfEnumValue;
    /**
     * One-to-many navigation property to the [[WfRequest]] entity.
     */
    wfRequestNav: WfRequest[];
    /**
     * Returns an entity builder to construct instances `FamilyEntity`.
     * @returns A builder that constructs instances of entity type `FamilyEntity`.
     */
    static builder(): EntityBuilderType<FamilyEntity, FamilyEntityTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `FamilyEntity` entity type.
     * @returns A `FamilyEntity` request builder.
     */
    static requestBuilder(): FamilyEntityRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `FamilyEntity`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `FamilyEntity`.
     */
    static customField(fieldName: string): CustomField<FamilyEntity>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { FamilyCompetencyMappingEntity, FamilyCompetencyMappingEntityType } from './FamilyCompetencyMappingEntity';
import { User, UserType } from './User';
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';
import { MdfLocalizedValue, MdfLocalizedValueType } from './MdfLocalizedValue';
import { FamilySkillMappingEntity, FamilySkillMappingEntityType } from './FamilySkillMappingEntity';
import { WfRequest, WfRequestType } from './WfRequest';
export interface FamilyEntityType {
    createdBy?: string;
    createdDateTime?: Moment;
    createdLocale?: string;
    externalCode: string;
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
    competencies: FamilyCompetencyMappingEntityType[];
    createdByNav: UserType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    nameTranslationTextNav: MdfLocalizedValueType[];
    skills: FamilySkillMappingEntityType[];
    statusNav: MdfEnumValueType;
    wfRequestNav: WfRequestType[];
}
export interface FamilyEntityTypeForceMandatory {
    createdBy: string;
    createdDateTime: Moment;
    createdLocale: string;
    externalCode: string;
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
    competencies: FamilyCompetencyMappingEntityType[];
    createdByNav: UserType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    nameTranslationTextNav: MdfLocalizedValueType[];
    skills: FamilySkillMappingEntityType[];
    statusNav: MdfEnumValueType;
    wfRequestNav: WfRequestType[];
}
export declare namespace FamilyEntity {
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<FamilyEntity>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<FamilyEntity>;
    /**
     * Static representation of the [[createdLocale]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_LOCALE: StringField<FamilyEntity>;
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CODE: StringField<FamilyEntity>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<FamilyEntity>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<FamilyEntity>;
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS: StringField<FamilyEntity>;
    /**
     * Static representation of the [[nameDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_DE_DE: StringField<FamilyEntity>;
    /**
     * Static representation of the [[nameDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_DEFAULT_VALUE: StringField<FamilyEntity>;
    /**
     * Static representation of the [[nameEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_EN_DEBUG: StringField<FamilyEntity>;
    /**
     * Static representation of the [[nameEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_EN_GB: StringField<FamilyEntity>;
    /**
     * Static representation of the [[nameEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_EN_US: StringField<FamilyEntity>;
    /**
     * Static representation of the [[nameEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_ES_ES: StringField<FamilyEntity>;
    /**
     * Static representation of the [[nameEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_ES_MX: StringField<FamilyEntity>;
    /**
     * Static representation of the [[nameFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_FR_CA: StringField<FamilyEntity>;
    /**
     * Static representation of the [[nameFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_FR_FR: StringField<FamilyEntity>;
    /**
     * Static representation of the [[nameItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_IT_IT: StringField<FamilyEntity>;
    /**
     * Static representation of the [[nameLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_LOCALIZED: StringField<FamilyEntity>;
    /**
     * Static representation of the [[nameNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_NL_NL: StringField<FamilyEntity>;
    /**
     * Static representation of the [[namePtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_PT_BR: StringField<FamilyEntity>;
    /**
     * Static representation of the [[nameZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_ZH_CN: StringField<FamilyEntity>;
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS: StringField<FamilyEntity>;
    /**
     * Static representation of the [[subModule]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUB_MODULE: StringField<FamilyEntity>;
    /**
     * Static representation of the one-to-many navigation property [[competencies]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COMPETENCIES: Link<FamilyEntity, FamilyCompetencyMappingEntity>;
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_NAV: OneToOneLink<FamilyEntity, User>;
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY_NAV: OneToOneLink<FamilyEntity, User>;
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<FamilyEntity, MdfEnumValue>;
    /**
     * Static representation of the one-to-many navigation property [[nameTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_TRANSLATION_TEXT_NAV: Link<FamilyEntity, MdfLocalizedValue>;
    /**
     * Static representation of the one-to-many navigation property [[skills]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SKILLS: Link<FamilyEntity, FamilySkillMappingEntity>;
    /**
     * Static representation of the one-to-one navigation property [[statusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS_NAV: OneToOneLink<FamilyEntity, MdfEnumValue>;
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WF_REQUEST_NAV: Link<FamilyEntity, WfRequest>;
    /**
     * All fields of the FamilyEntity entity.
     */
    const _allFields: Array<StringField<FamilyEntity> | DateField<FamilyEntity> | Link<FamilyEntity, FamilyCompetencyMappingEntity> | OneToOneLink<FamilyEntity, User> | OneToOneLink<FamilyEntity, MdfEnumValue> | Link<FamilyEntity, MdfLocalizedValue> | Link<FamilyEntity, FamilySkillMappingEntity> | Link<FamilyEntity, WfRequest>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<FamilyEntity>;
    /**
     * All key fields of the FamilyEntity entity.
     */
    const _keyFields: Array<Selectable<FamilyEntity>>;
    /**
     * Mapping of all key field names to the respective static field property FamilyEntity.
     */
    const _keys: {
        [keys: string]: Selectable<FamilyEntity>;
    };
}
//# sourceMappingURL=FamilyEntity.d.ts.map