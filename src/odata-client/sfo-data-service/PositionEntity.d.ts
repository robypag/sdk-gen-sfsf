import { PositionEntityRequestBuilder } from './PositionEntityRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "PositionEntity" of service "SFOData".
 */
export declare class PositionEntity extends Entity implements PositionEntityType {
    /**
     * Technical entity name for PositionEntity.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for PositionEntity.
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
     * createdDate.
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
     * Position.
     * Maximum length: 128.
     * @nullable
     */
    position?: string;
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
     * One-to-many navigation property to the [[PositionCompetencyMappingEntity]] entity.
     */
    positionCompetencyMappings: PositionCompetencyMappingEntity[];
    /**
     * One-to-many navigation property to the [[Position]] entity.
     */
    positionNav: Position[];
    /**
     * One-to-many navigation property to the [[PositionSkillMappingEntity]] entity.
     */
    positionSkillMappings: PositionSkillMappingEntity[];
    /**
     * One-to-one navigation property to the [[MdfEnumValue]] entity.
     */
    statusNav: MdfEnumValue;
    /**
     * One-to-many navigation property to the [[WfRequest]] entity.
     */
    wfRequestNav: WfRequest[];
    /**
     * Returns an entity builder to construct instances `PositionEntity`.
     * @returns A builder that constructs instances of entity type `PositionEntity`.
     */
    static builder(): EntityBuilderType<PositionEntity, PositionEntityTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `PositionEntity` entity type.
     * @returns A `PositionEntity` request builder.
     */
    static requestBuilder(): PositionEntityRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `PositionEntity`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `PositionEntity`.
     */
    static customField(fieldName: string): CustomField<PositionEntity>;
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
import { PositionCompetencyMappingEntity, PositionCompetencyMappingEntityType } from './PositionCompetencyMappingEntity';
import { Position, PositionType } from './Position';
import { PositionSkillMappingEntity, PositionSkillMappingEntityType } from './PositionSkillMappingEntity';
import { WfRequest, WfRequestType } from './WfRequest';
export interface PositionEntityType {
    createdBy?: string;
    createdDateTime?: Moment;
    externalCode: string;
    jobCode?: string;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    mdfSystemRecordStatus?: string;
    position?: string;
    status?: string;
    subModule?: string;
    createdByNav: UserType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    positionCompetencyMappings: PositionCompetencyMappingEntityType[];
    positionNav: PositionType[];
    positionSkillMappings: PositionSkillMappingEntityType[];
    statusNav: MdfEnumValueType;
    wfRequestNav: WfRequestType[];
}
export interface PositionEntityTypeForceMandatory {
    createdBy: string;
    createdDateTime: Moment;
    externalCode: string;
    jobCode: string;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    mdfSystemRecordStatus: string;
    position: string;
    status: string;
    subModule: string;
    createdByNav: UserType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    positionCompetencyMappings: PositionCompetencyMappingEntityType[];
    positionNav: PositionType[];
    positionSkillMappings: PositionSkillMappingEntityType[];
    statusNav: MdfEnumValueType;
    wfRequestNav: WfRequestType[];
}
export declare namespace PositionEntity {
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<PositionEntity>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<PositionEntity>;
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CODE: StringField<PositionEntity>;
    /**
     * Static representation of the [[jobCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_CODE: StringField<PositionEntity>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<PositionEntity>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<PositionEntity>;
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS: StringField<PositionEntity>;
    /**
     * Static representation of the [[position]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const POSITION: StringField<PositionEntity>;
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS: StringField<PositionEntity>;
    /**
     * Static representation of the [[subModule]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUB_MODULE: StringField<PositionEntity>;
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_NAV: OneToOneLink<PositionEntity, User>;
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY_NAV: OneToOneLink<PositionEntity, User>;
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<PositionEntity, MdfEnumValue>;
    /**
     * Static representation of the one-to-many navigation property [[positionCompetencyMappings]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const POSITION_COMPETENCY_MAPPINGS: Link<PositionEntity, PositionCompetencyMappingEntity>;
    /**
     * Static representation of the one-to-many navigation property [[positionNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const POSITION_NAV: Link<PositionEntity, Position>;
    /**
     * Static representation of the one-to-many navigation property [[positionSkillMappings]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const POSITION_SKILL_MAPPINGS: Link<PositionEntity, PositionSkillMappingEntity>;
    /**
     * Static representation of the one-to-one navigation property [[statusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS_NAV: OneToOneLink<PositionEntity, MdfEnumValue>;
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WF_REQUEST_NAV: Link<PositionEntity, WfRequest>;
    /**
     * All fields of the PositionEntity entity.
     */
    const _allFields: Array<StringField<PositionEntity> | DateField<PositionEntity> | OneToOneLink<PositionEntity, User> | OneToOneLink<PositionEntity, MdfEnumValue> | Link<PositionEntity, PositionCompetencyMappingEntity> | Link<PositionEntity, Position> | Link<PositionEntity, PositionSkillMappingEntity> | Link<PositionEntity, WfRequest>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<PositionEntity>;
    /**
     * All key fields of the PositionEntity entity.
     */
    const _keyFields: Array<Selectable<PositionEntity>>;
    /**
     * Mapping of all key field names to the respective static field property PositionEntity.
     */
    const _keys: {
        [keys: string]: Selectable<PositionEntity>;
    };
}
//# sourceMappingURL=PositionEntity.d.ts.map