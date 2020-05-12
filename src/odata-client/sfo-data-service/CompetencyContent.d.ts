import { CompetencyContentRequestBuilder } from './CompetencyContentRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "CompetencyContent" of service "SFOData".
 */
export declare class CompetencyContent extends Entity implements CompetencyContentType {
    /**
     * Technical entity name for CompetencyContent.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for CompetencyContent.
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
     * competencyMappingId.
     * Maximum length: 255.
     * @nullable
     */
    competencyMappingId?: string;
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
     * Competency.
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
     * One-to-one navigation property to the [[CompetencyEntity]] entity.
     */
    entityNav: CompetencyEntity;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    lastModifiedByNav: User;
    /**
     * One-to-one navigation property to the [[MdfEnumValue]] entity.
     */
    mdfSystemRecordStatusNav: MdfEnumValue;
    /**
     * One-to-one navigation property to the [[RoleEntity]] entity.
     */
    roleNav: RoleEntity;
    /**
     * One-to-one navigation property to the [[MdfEnumValue]] entity.
     */
    statusNav: MdfEnumValue;
    /**
     * Returns an entity builder to construct instances `CompetencyContent`.
     * @returns A builder that constructs instances of entity type `CompetencyContent`.
     */
    static builder(): EntityBuilderType<CompetencyContent, CompetencyContentTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `CompetencyContent` entity type.
     * @returns A `CompetencyContent` request builder.
     */
    static requestBuilder(): CompetencyContentRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `CompetencyContent`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `CompetencyContent`.
     */
    static customField(fieldName: string): CustomField<CompetencyContent>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { User, UserType } from './User';
import { CompetencyEntity, CompetencyEntityType } from './CompetencyEntity';
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';
import { RoleEntity, RoleEntityType } from './RoleEntity';
export interface CompetencyContentType {
    jobProfileExternalCode: string;
    competencyMappingId?: string;
    createdBy?: string;
    createdDateTime?: Moment;
    entity?: string;
    externalCode: string;
    jobProfileId?: string;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    mdfSystemRecordStatus?: string;
    order?: BigNumber;
    role?: string;
    sectionId?: string;
    sectionType?: string;
    status?: string;
    subModule?: string;
    createdByNav: UserType;
    entityNav: CompetencyEntityType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    roleNav: RoleEntityType;
    statusNav: MdfEnumValueType;
}
export interface CompetencyContentTypeForceMandatory {
    jobProfileExternalCode: string;
    competencyMappingId: string;
    createdBy: string;
    createdDateTime: Moment;
    entity: string;
    externalCode: string;
    jobProfileId: string;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    mdfSystemRecordStatus: string;
    order: BigNumber;
    role: string;
    sectionId: string;
    sectionType: string;
    status: string;
    subModule: string;
    createdByNav: UserType;
    entityNav: CompetencyEntityType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    roleNav: RoleEntityType;
    statusNav: MdfEnumValueType;
}
export declare namespace CompetencyContent {
    /**
     * Static representation of the [[jobProfileExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_PROFILE_EXTERNAL_CODE: StringField<CompetencyContent>;
    /**
     * Static representation of the [[competencyMappingId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COMPETENCY_MAPPING_ID: StringField<CompetencyContent>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<CompetencyContent>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<CompetencyContent>;
    /**
     * Static representation of the [[entity]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ENTITY: StringField<CompetencyContent>;
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CODE: StringField<CompetencyContent>;
    /**
     * Static representation of the [[jobProfileId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_PROFILE_ID: StringField<CompetencyContent>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<CompetencyContent>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<CompetencyContent>;
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS: StringField<CompetencyContent>;
    /**
     * Static representation of the [[order]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ORDER: BigNumberField<CompetencyContent>;
    /**
     * Static representation of the [[role]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ROLE: StringField<CompetencyContent>;
    /**
     * Static representation of the [[sectionId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SECTION_ID: StringField<CompetencyContent>;
    /**
     * Static representation of the [[sectionType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SECTION_TYPE: StringField<CompetencyContent>;
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS: StringField<CompetencyContent>;
    /**
     * Static representation of the [[subModule]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUB_MODULE: StringField<CompetencyContent>;
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_NAV: OneToOneLink<CompetencyContent, User>;
    /**
     * Static representation of the one-to-one navigation property [[entityNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ENTITY_NAV: OneToOneLink<CompetencyContent, CompetencyEntity>;
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY_NAV: OneToOneLink<CompetencyContent, User>;
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<CompetencyContent, MdfEnumValue>;
    /**
     * Static representation of the one-to-one navigation property [[roleNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ROLE_NAV: OneToOneLink<CompetencyContent, RoleEntity>;
    /**
     * Static representation of the one-to-one navigation property [[statusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS_NAV: OneToOneLink<CompetencyContent, MdfEnumValue>;
    /**
     * All fields of the CompetencyContent entity.
     */
    const _allFields: Array<StringField<CompetencyContent> | DateField<CompetencyContent> | BigNumberField<CompetencyContent> | OneToOneLink<CompetencyContent, User> | OneToOneLink<CompetencyContent, CompetencyEntity> | OneToOneLink<CompetencyContent, MdfEnumValue> | OneToOneLink<CompetencyContent, RoleEntity>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<CompetencyContent>;
    /**
     * All key fields of the CompetencyContent entity.
     */
    const _keyFields: Array<Selectable<CompetencyContent>>;
    /**
     * Mapping of all key field names to the respective static field property CompetencyContent.
     */
    const _keys: {
        [keys: string]: Selectable<CompetencyContent>;
    };
}
//# sourceMappingURL=CompetencyContent.d.ts.map