import { SelfReportSkillMappingRequestBuilder } from './SelfReportSkillMappingRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "SelfReportSkillMapping" of service "SFOData".
 */
export declare class SelfReportSkillMapping extends Entity implements SelfReportSkillMappingType {
    /**
     * Technical entity name for SelfReportSkillMapping.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for SelfReportSkillMapping.
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
     * Record Status.
     * Maximum length: 255.
     * @nullable
     */
    mdfSystemRecordStatus?: string;
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
     * One-to-one navigation property to the [[User]] entity.
     */
    lastModifiedByNav: User;
    /**
     * One-to-one navigation property to the [[MdfEnumValue]] entity.
     */
    mdfSystemRecordStatusNav: MdfEnumValue;
    /**
     * One-to-one navigation property to the [[SkillEntity]] entity.
     */
    skillNav: SkillEntity;
    /**
     * One-to-one navigation property to the [[MdfEnumValue]] entity.
     */
    statusNav: MdfEnumValue;
    /**
     * Returns an entity builder to construct instances `SelfReportSkillMapping`.
     * @returns A builder that constructs instances of entity type `SelfReportSkillMapping`.
     */
    static builder(): EntityBuilderType<SelfReportSkillMapping, SelfReportSkillMappingTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `SelfReportSkillMapping` entity type.
     * @returns A `SelfReportSkillMapping` request builder.
     */
    static requestBuilder(): SelfReportSkillMappingRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `SelfReportSkillMapping`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `SelfReportSkillMapping`.
     */
    static customField(fieldName: string): CustomField<SelfReportSkillMapping>;
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
import { SkillEntity, SkillEntityType } from './SkillEntity';
export interface SelfReportSkillMappingType {
    skillProfileExternalCode: string;
    createdBy?: string;
    createdDateTime?: Moment;
    externalCode: string;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    mdfSystemRecordStatus?: string;
    skill?: string;
    status?: string;
    subModule?: string;
    createdByNav: UserType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    skillNav: SkillEntityType;
    statusNav: MdfEnumValueType;
}
export interface SelfReportSkillMappingTypeForceMandatory {
    skillProfileExternalCode: string;
    createdBy: string;
    createdDateTime: Moment;
    externalCode: string;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    mdfSystemRecordStatus: string;
    skill: string;
    status: string;
    subModule: string;
    createdByNav: UserType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    skillNav: SkillEntityType;
    statusNav: MdfEnumValueType;
}
export declare namespace SelfReportSkillMapping {
    /**
     * Static representation of the [[skillProfileExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SKILL_PROFILE_EXTERNAL_CODE: StringField<SelfReportSkillMapping>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<SelfReportSkillMapping>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<SelfReportSkillMapping>;
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CODE: StringField<SelfReportSkillMapping>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<SelfReportSkillMapping>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<SelfReportSkillMapping>;
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS: StringField<SelfReportSkillMapping>;
    /**
     * Static representation of the [[skill]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SKILL: StringField<SelfReportSkillMapping>;
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS: StringField<SelfReportSkillMapping>;
    /**
     * Static representation of the [[subModule]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUB_MODULE: StringField<SelfReportSkillMapping>;
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_NAV: OneToOneLink<SelfReportSkillMapping, User>;
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY_NAV: OneToOneLink<SelfReportSkillMapping, User>;
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<SelfReportSkillMapping, MdfEnumValue>;
    /**
     * Static representation of the one-to-one navigation property [[skillNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SKILL_NAV: OneToOneLink<SelfReportSkillMapping, SkillEntity>;
    /**
     * Static representation of the one-to-one navigation property [[statusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS_NAV: OneToOneLink<SelfReportSkillMapping, MdfEnumValue>;
    /**
     * All fields of the SelfReportSkillMapping entity.
     */
    const _allFields: Array<StringField<SelfReportSkillMapping> | DateField<SelfReportSkillMapping> | OneToOneLink<SelfReportSkillMapping, User> | OneToOneLink<SelfReportSkillMapping, MdfEnumValue> | OneToOneLink<SelfReportSkillMapping, SkillEntity>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<SelfReportSkillMapping>;
    /**
     * All key fields of the SelfReportSkillMapping entity.
     */
    const _keyFields: Array<Selectable<SelfReportSkillMapping>>;
    /**
     * Mapping of all key field names to the respective static field property SelfReportSkillMapping.
     */
    const _keys: {
        [keys: string]: Selectable<SelfReportSkillMapping>;
    };
}
//# sourceMappingURL=SelfReportSkillMapping.d.ts.map