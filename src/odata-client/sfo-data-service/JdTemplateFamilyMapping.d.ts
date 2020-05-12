import { JdTemplateFamilyMappingRequestBuilder } from './JdTemplateFamilyMappingRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "JDTemplateFamilyMapping" of service "SFOData".
 */
export declare class JdTemplateFamilyMapping extends Entity implements JdTemplateFamilyMappingType {
    /**
     * Technical entity name for JdTemplateFamilyMapping.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for JdTemplateFamilyMapping.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Job Template_GUID.
     * Maximum length: 128.
     */
    jobDescTemplateExternalCode: string;
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
     * Assigned families.
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
     * One-to-one navigation property to the [[User]] entity.
     */
    lastModifiedByNav: User;
    /**
     * One-to-one navigation property to the [[MdfEnumValue]] entity.
     */
    mdfSystemRecordStatusNav: MdfEnumValue;
    /**
     * One-to-one navigation property to the [[MdfEnumValue]] entity.
     */
    statusNav: MdfEnumValue;
    /**
     * Returns an entity builder to construct instances `JdTemplateFamilyMapping`.
     * @returns A builder that constructs instances of entity type `JdTemplateFamilyMapping`.
     */
    static builder(): EntityBuilderType<JdTemplateFamilyMapping, JdTemplateFamilyMappingTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `JdTemplateFamilyMapping` entity type.
     * @returns A `JdTemplateFamilyMapping` request builder.
     */
    static requestBuilder(): JdTemplateFamilyMappingRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `JdTemplateFamilyMapping`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `JdTemplateFamilyMapping`.
     */
    static customField(fieldName: string): CustomField<JdTemplateFamilyMapping>;
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
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';
export interface JdTemplateFamilyMappingType {
    jobDescTemplateExternalCode: string;
    createdBy?: string;
    createdDateTime?: Moment;
    externalCode: string;
    family?: string;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    mdfSystemRecordStatus?: string;
    status?: string;
    subModule?: string;
    createdByNav: UserType;
    familyNav: FamilyEntityType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    statusNav: MdfEnumValueType;
}
export interface JdTemplateFamilyMappingTypeForceMandatory {
    jobDescTemplateExternalCode: string;
    createdBy: string;
    createdDateTime: Moment;
    externalCode: string;
    family: string;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    mdfSystemRecordStatus: string;
    status: string;
    subModule: string;
    createdByNav: UserType;
    familyNav: FamilyEntityType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    statusNav: MdfEnumValueType;
}
export declare namespace JdTemplateFamilyMapping {
    /**
     * Static representation of the [[jobDescTemplateExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_DESC_TEMPLATE_EXTERNAL_CODE: StringField<JdTemplateFamilyMapping>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<JdTemplateFamilyMapping>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<JdTemplateFamilyMapping>;
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CODE: StringField<JdTemplateFamilyMapping>;
    /**
     * Static representation of the [[family]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FAMILY: StringField<JdTemplateFamilyMapping>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<JdTemplateFamilyMapping>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<JdTemplateFamilyMapping>;
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS: StringField<JdTemplateFamilyMapping>;
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS: StringField<JdTemplateFamilyMapping>;
    /**
     * Static representation of the [[subModule]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUB_MODULE: StringField<JdTemplateFamilyMapping>;
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_NAV: OneToOneLink<JdTemplateFamilyMapping, User>;
    /**
     * Static representation of the one-to-one navigation property [[familyNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FAMILY_NAV: OneToOneLink<JdTemplateFamilyMapping, FamilyEntity>;
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY_NAV: OneToOneLink<JdTemplateFamilyMapping, User>;
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<JdTemplateFamilyMapping, MdfEnumValue>;
    /**
     * Static representation of the one-to-one navigation property [[statusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS_NAV: OneToOneLink<JdTemplateFamilyMapping, MdfEnumValue>;
    /**
     * All fields of the JdTemplateFamilyMapping entity.
     */
    const _allFields: Array<StringField<JdTemplateFamilyMapping> | DateField<JdTemplateFamilyMapping> | OneToOneLink<JdTemplateFamilyMapping, User> | OneToOneLink<JdTemplateFamilyMapping, FamilyEntity> | OneToOneLink<JdTemplateFamilyMapping, MdfEnumValue>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<JdTemplateFamilyMapping>;
    /**
     * All key fields of the JdTemplateFamilyMapping entity.
     */
    const _keyFields: Array<Selectable<JdTemplateFamilyMapping>>;
    /**
     * Mapping of all key field names to the respective static field property JdTemplateFamilyMapping.
     */
    const _keys: {
        [keys: string]: Selectable<JdTemplateFamilyMapping>;
    };
}
//# sourceMappingURL=JdTemplateFamilyMapping.d.ts.map