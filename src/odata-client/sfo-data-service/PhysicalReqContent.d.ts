import { PhysicalReqContentRequestBuilder } from './PhysicalReqContentRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "PhysicalReqContent" of service "SFOData".
 */
export declare class PhysicalReqContent extends Entity implements PhysicalReqContentType {
    /**
     * Technical entity name for PhysicalReqContent.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for PhysicalReqContent.
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
     * Physical Requirement.
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
     * One-to-one navigation property to the [[PhysicalReqEntity]] entity.
     */
    entityNav: PhysicalReqEntity;
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
     * Returns an entity builder to construct instances `PhysicalReqContent`.
     * @returns A builder that constructs instances of entity type `PhysicalReqContent`.
     */
    static builder(): EntityBuilderType<PhysicalReqContent, PhysicalReqContentTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `PhysicalReqContent` entity type.
     * @returns A `PhysicalReqContent` request builder.
     */
    static requestBuilder(): PhysicalReqContentRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `PhysicalReqContent`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `PhysicalReqContent`.
     */
    static customField(fieldName: string): CustomField<PhysicalReqContent>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { User, UserType } from './User';
import { PhysicalReqEntity, PhysicalReqEntityType } from './PhysicalReqEntity';
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';
export interface PhysicalReqContentType {
    jobProfileExternalCode: string;
    createdBy?: string;
    createdDateTime?: Moment;
    entity?: string;
    externalCode: string;
    jobProfileId?: string;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    mdfSystemRecordStatus?: string;
    order?: BigNumber;
    sectionId?: string;
    sectionType?: string;
    status?: string;
    subModule?: string;
    createdByNav: UserType;
    entityNav: PhysicalReqEntityType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    statusNav: MdfEnumValueType;
}
export interface PhysicalReqContentTypeForceMandatory {
    jobProfileExternalCode: string;
    createdBy: string;
    createdDateTime: Moment;
    entity: string;
    externalCode: string;
    jobProfileId: string;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    mdfSystemRecordStatus: string;
    order: BigNumber;
    sectionId: string;
    sectionType: string;
    status: string;
    subModule: string;
    createdByNav: UserType;
    entityNav: PhysicalReqEntityType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    statusNav: MdfEnumValueType;
}
export declare namespace PhysicalReqContent {
    /**
     * Static representation of the [[jobProfileExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_PROFILE_EXTERNAL_CODE: StringField<PhysicalReqContent>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<PhysicalReqContent>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<PhysicalReqContent>;
    /**
     * Static representation of the [[entity]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ENTITY: StringField<PhysicalReqContent>;
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CODE: StringField<PhysicalReqContent>;
    /**
     * Static representation of the [[jobProfileId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_PROFILE_ID: StringField<PhysicalReqContent>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<PhysicalReqContent>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<PhysicalReqContent>;
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS: StringField<PhysicalReqContent>;
    /**
     * Static representation of the [[order]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ORDER: BigNumberField<PhysicalReqContent>;
    /**
     * Static representation of the [[sectionId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SECTION_ID: StringField<PhysicalReqContent>;
    /**
     * Static representation of the [[sectionType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SECTION_TYPE: StringField<PhysicalReqContent>;
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS: StringField<PhysicalReqContent>;
    /**
     * Static representation of the [[subModule]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUB_MODULE: StringField<PhysicalReqContent>;
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_NAV: OneToOneLink<PhysicalReqContent, User>;
    /**
     * Static representation of the one-to-one navigation property [[entityNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ENTITY_NAV: OneToOneLink<PhysicalReqContent, PhysicalReqEntity>;
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY_NAV: OneToOneLink<PhysicalReqContent, User>;
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<PhysicalReqContent, MdfEnumValue>;
    /**
     * Static representation of the one-to-one navigation property [[statusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS_NAV: OneToOneLink<PhysicalReqContent, MdfEnumValue>;
    /**
     * All fields of the PhysicalReqContent entity.
     */
    const _allFields: Array<StringField<PhysicalReqContent> | DateField<PhysicalReqContent> | BigNumberField<PhysicalReqContent> | OneToOneLink<PhysicalReqContent, User> | OneToOneLink<PhysicalReqContent, PhysicalReqEntity> | OneToOneLink<PhysicalReqContent, MdfEnumValue>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<PhysicalReqContent>;
    /**
     * All key fields of the PhysicalReqContent entity.
     */
    const _keyFields: Array<Selectable<PhysicalReqContent>>;
    /**
     * Mapping of all key field names to the respective static field property PhysicalReqContent.
     */
    const _keys: {
        [keys: string]: Selectable<PhysicalReqContent>;
    };
}
//# sourceMappingURL=PhysicalReqContent.d.ts.map