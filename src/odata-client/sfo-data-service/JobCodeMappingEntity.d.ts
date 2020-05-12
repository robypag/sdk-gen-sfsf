import { JobCodeMappingEntityRequestBuilder } from './JobCodeMappingEntityRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "JobCodeMappingEntity" of service "SFOData".
 */
export declare class JobCodeMappingEntity extends Entity implements JobCodeMappingEntityType {
    /**
     * Technical entity name for JobCodeMappingEntity.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for JobCodeMappingEntity.
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
     * Job Code.
     * Maximum length: 255.
     * @nullable
     */
    jobCode?: string;
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
     * Type.
     * Maximum length: 255.
     * @nullable
     */
    type?: string;
    /**
     * Usage.
     * @nullable
     */
    usage?: BigNumber;
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
     * One-to-one navigation property to the [[MdfEnumValue]] entity.
     */
    statusNav: MdfEnumValue;
    /**
     * Returns an entity builder to construct instances `JobCodeMappingEntity`.
     * @returns A builder that constructs instances of entity type `JobCodeMappingEntity`.
     */
    static builder(): EntityBuilderType<JobCodeMappingEntity, JobCodeMappingEntityTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `JobCodeMappingEntity` entity type.
     * @returns A `JobCodeMappingEntity` request builder.
     */
    static requestBuilder(): JobCodeMappingEntityRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobCodeMappingEntity`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `JobCodeMappingEntity`.
     */
    static customField(fieldName: string): CustomField<JobCodeMappingEntity>;
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
export interface JobCodeMappingEntityType {
    roleEntityExternalCode: string;
    createdBy?: string;
    createdDateTime?: Moment;
    externalCode: string;
    jobCode?: string;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    mdfSystemRecordStatus?: string;
    status?: string;
    subModule?: string;
    type?: string;
    usage?: BigNumber;
    createdByNav: UserType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    statusNav: MdfEnumValueType;
}
export interface JobCodeMappingEntityTypeForceMandatory {
    roleEntityExternalCode: string;
    createdBy: string;
    createdDateTime: Moment;
    externalCode: string;
    jobCode: string;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    mdfSystemRecordStatus: string;
    status: string;
    subModule: string;
    type: string;
    usage: BigNumber;
    createdByNav: UserType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    statusNav: MdfEnumValueType;
}
export declare namespace JobCodeMappingEntity {
    /**
     * Static representation of the [[roleEntityExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ROLE_ENTITY_EXTERNAL_CODE: StringField<JobCodeMappingEntity>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<JobCodeMappingEntity>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<JobCodeMappingEntity>;
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CODE: StringField<JobCodeMappingEntity>;
    /**
     * Static representation of the [[jobCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_CODE: StringField<JobCodeMappingEntity>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<JobCodeMappingEntity>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<JobCodeMappingEntity>;
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS: StringField<JobCodeMappingEntity>;
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS: StringField<JobCodeMappingEntity>;
    /**
     * Static representation of the [[subModule]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUB_MODULE: StringField<JobCodeMappingEntity>;
    /**
     * Static representation of the [[type]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TYPE: StringField<JobCodeMappingEntity>;
    /**
     * Static representation of the [[usage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USAGE: BigNumberField<JobCodeMappingEntity>;
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_NAV: OneToOneLink<JobCodeMappingEntity, User>;
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY_NAV: OneToOneLink<JobCodeMappingEntity, User>;
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<JobCodeMappingEntity, MdfEnumValue>;
    /**
     * Static representation of the one-to-one navigation property [[statusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS_NAV: OneToOneLink<JobCodeMappingEntity, MdfEnumValue>;
    /**
     * All fields of the JobCodeMappingEntity entity.
     */
    const _allFields: Array<StringField<JobCodeMappingEntity> | DateField<JobCodeMappingEntity> | BigNumberField<JobCodeMappingEntity> | OneToOneLink<JobCodeMappingEntity, User> | OneToOneLink<JobCodeMappingEntity, MdfEnumValue>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<JobCodeMappingEntity>;
    /**
     * All key fields of the JobCodeMappingEntity entity.
     */
    const _keyFields: Array<Selectable<JobCodeMappingEntity>>;
    /**
     * Mapping of all key field names to the respective static field property JobCodeMappingEntity.
     */
    const _keys: {
        [keys: string]: Selectable<JobCodeMappingEntity>;
    };
}
//# sourceMappingURL=JobCodeMappingEntity.d.ts.map