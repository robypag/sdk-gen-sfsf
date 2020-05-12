import { RoleTalentPoolMappingEntityRequestBuilder } from './RoleTalentPoolMappingEntityRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "RoleTalentPoolMappingEntity" of service "SFOData".
 */
export declare class RoleTalentPoolMappingEntity extends Entity implements RoleTalentPoolMappingEntityType {
    /**
     * Technical entity name for RoleTalentPoolMappingEntity.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for RoleTalentPoolMappingEntity.
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
     * createdDate.
     * @nullable
     */
    createdDateTime?: Moment;
    /**
     * Talent Pool Description.
     * Maximum length: 4000.
     * @nullable
     */
    description?: string;
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
     * mdfTalentPool.
     * Maximum length: 128.
     * @nullable
     */
    mdfTalentPool?: string;
    /**
     * Talent Pool Name.
     * Maximum length: 128.
     * @nullable
     */
    name?: string;
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
     * Talent Pool Id.
     * @nullable
     */
    talentPoolId?: BigNumber;
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
     * One-to-many navigation property to the [[TalentPool]] entity.
     */
    mdfTalentPoolNav: TalentPool[];
    /**
     * One-to-one navigation property to the [[MdfEnumValue]] entity.
     */
    statusNav: MdfEnumValue;
    /**
     * Returns an entity builder to construct instances `RoleTalentPoolMappingEntity`.
     * @returns A builder that constructs instances of entity type `RoleTalentPoolMappingEntity`.
     */
    static builder(): EntityBuilderType<RoleTalentPoolMappingEntity, RoleTalentPoolMappingEntityTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `RoleTalentPoolMappingEntity` entity type.
     * @returns A `RoleTalentPoolMappingEntity` request builder.
     */
    static requestBuilder(): RoleTalentPoolMappingEntityRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `RoleTalentPoolMappingEntity`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `RoleTalentPoolMappingEntity`.
     */
    static customField(fieldName: string): CustomField<RoleTalentPoolMappingEntity>;
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
import { TalentPool, TalentPoolType } from './TalentPool';
export interface RoleTalentPoolMappingEntityType {
    roleEntityExternalCode: string;
    createdBy?: string;
    createdDateTime?: Moment;
    description?: string;
    externalCode: string;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    mdfSystemRecordStatus?: string;
    mdfTalentPool?: string;
    name?: string;
    status?: string;
    subModule?: string;
    talentPoolId?: BigNumber;
    createdByNav: UserType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    mdfTalentPoolNav: TalentPoolType[];
    statusNav: MdfEnumValueType;
}
export interface RoleTalentPoolMappingEntityTypeForceMandatory {
    roleEntityExternalCode: string;
    createdBy: string;
    createdDateTime: Moment;
    description: string;
    externalCode: string;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    mdfSystemRecordStatus: string;
    mdfTalentPool: string;
    name: string;
    status: string;
    subModule: string;
    talentPoolId: BigNumber;
    createdByNav: UserType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    mdfTalentPoolNav: TalentPoolType[];
    statusNav: MdfEnumValueType;
}
export declare namespace RoleTalentPoolMappingEntity {
    /**
     * Static representation of the [[roleEntityExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ROLE_ENTITY_EXTERNAL_CODE: StringField<RoleTalentPoolMappingEntity>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<RoleTalentPoolMappingEntity>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<RoleTalentPoolMappingEntity>;
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION: StringField<RoleTalentPoolMappingEntity>;
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CODE: StringField<RoleTalentPoolMappingEntity>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<RoleTalentPoolMappingEntity>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<RoleTalentPoolMappingEntity>;
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS: StringField<RoleTalentPoolMappingEntity>;
    /**
     * Static representation of the [[mdfTalentPool]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_TALENT_POOL: StringField<RoleTalentPoolMappingEntity>;
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME: StringField<RoleTalentPoolMappingEntity>;
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS: StringField<RoleTalentPoolMappingEntity>;
    /**
     * Static representation of the [[subModule]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUB_MODULE: StringField<RoleTalentPoolMappingEntity>;
    /**
     * Static representation of the [[talentPoolId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TALENT_POOL_ID: BigNumberField<RoleTalentPoolMappingEntity>;
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_NAV: OneToOneLink<RoleTalentPoolMappingEntity, User>;
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY_NAV: OneToOneLink<RoleTalentPoolMappingEntity, User>;
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<RoleTalentPoolMappingEntity, MdfEnumValue>;
    /**
     * Static representation of the one-to-many navigation property [[mdfTalentPoolNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_TALENT_POOL_NAV: Link<RoleTalentPoolMappingEntity, TalentPool>;
    /**
     * Static representation of the one-to-one navigation property [[statusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS_NAV: OneToOneLink<RoleTalentPoolMappingEntity, MdfEnumValue>;
    /**
     * All fields of the RoleTalentPoolMappingEntity entity.
     */
    const _allFields: Array<StringField<RoleTalentPoolMappingEntity> | DateField<RoleTalentPoolMappingEntity> | BigNumberField<RoleTalentPoolMappingEntity> | OneToOneLink<RoleTalentPoolMappingEntity, User> | OneToOneLink<RoleTalentPoolMappingEntity, MdfEnumValue> | Link<RoleTalentPoolMappingEntity, TalentPool>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<RoleTalentPoolMappingEntity>;
    /**
     * All key fields of the RoleTalentPoolMappingEntity entity.
     */
    const _keyFields: Array<Selectable<RoleTalentPoolMappingEntity>>;
    /**
     * Mapping of all key field names to the respective static field property RoleTalentPoolMappingEntity.
     */
    const _keys: {
        [keys: string]: Selectable<RoleTalentPoolMappingEntity>;
    };
}
//# sourceMappingURL=RoleTalentPoolMappingEntity.d.ts.map