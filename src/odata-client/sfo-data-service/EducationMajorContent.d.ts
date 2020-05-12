import { EducationMajorContentRequestBuilder } from './EducationMajorContentRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "EducationMajorContent" of service "SFOData".
 */
export declare class EducationMajorContent extends Entity implements EducationMajorContentType {
    /**
     * Technical entity name for EducationMajorContent.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for EducationMajorContent.
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
     * Major.
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
     * Mapped Degree ID.
     * Maximum length: 128.
     * @nullable
     */
    mappedDegreeId?: string;
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
     * One-to-one navigation property to the [[EducationMajorEntity]] entity.
     */
    entityNav: EducationMajorEntity;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    lastModifiedByNav: User;
    /**
     * One-to-one navigation property to the [[EducationDegreeEntity]] entity.
     */
    mappedDegreeIdNav: EducationDegreeEntity;
    /**
     * One-to-one navigation property to the [[MdfEnumValue]] entity.
     */
    mdfSystemRecordStatusNav: MdfEnumValue;
    /**
     * One-to-one navigation property to the [[MdfEnumValue]] entity.
     */
    statusNav: MdfEnumValue;
    /**
     * Returns an entity builder to construct instances `EducationMajorContent`.
     * @returns A builder that constructs instances of entity type `EducationMajorContent`.
     */
    static builder(): EntityBuilderType<EducationMajorContent, EducationMajorContentTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `EducationMajorContent` entity type.
     * @returns A `EducationMajorContent` request builder.
     */
    static requestBuilder(): EducationMajorContentRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `EducationMajorContent`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `EducationMajorContent`.
     */
    static customField(fieldName: string): CustomField<EducationMajorContent>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { User, UserType } from './User';
import { EducationMajorEntity, EducationMajorEntityType } from './EducationMajorEntity';
import { EducationDegreeEntity, EducationDegreeEntityType } from './EducationDegreeEntity';
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';
export interface EducationMajorContentType {
    jobProfileExternalCode: string;
    createdBy?: string;
    createdDateTime?: Moment;
    entity?: string;
    externalCode: string;
    jobProfileId?: string;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    mappedDegreeId?: string;
    mdfSystemRecordStatus?: string;
    order?: BigNumber;
    sectionId?: string;
    sectionType?: string;
    status?: string;
    subModule?: string;
    createdByNav: UserType;
    entityNav: EducationMajorEntityType;
    lastModifiedByNav: UserType;
    mappedDegreeIdNav: EducationDegreeEntityType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    statusNav: MdfEnumValueType;
}
export interface EducationMajorContentTypeForceMandatory {
    jobProfileExternalCode: string;
    createdBy: string;
    createdDateTime: Moment;
    entity: string;
    externalCode: string;
    jobProfileId: string;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    mappedDegreeId: string;
    mdfSystemRecordStatus: string;
    order: BigNumber;
    sectionId: string;
    sectionType: string;
    status: string;
    subModule: string;
    createdByNav: UserType;
    entityNav: EducationMajorEntityType;
    lastModifiedByNav: UserType;
    mappedDegreeIdNav: EducationDegreeEntityType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    statusNav: MdfEnumValueType;
}
export declare namespace EducationMajorContent {
    /**
     * Static representation of the [[jobProfileExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_PROFILE_EXTERNAL_CODE: StringField<EducationMajorContent>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<EducationMajorContent>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<EducationMajorContent>;
    /**
     * Static representation of the [[entity]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ENTITY: StringField<EducationMajorContent>;
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CODE: StringField<EducationMajorContent>;
    /**
     * Static representation of the [[jobProfileId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_PROFILE_ID: StringField<EducationMajorContent>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<EducationMajorContent>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<EducationMajorContent>;
    /**
     * Static representation of the [[mappedDegreeId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MAPPED_DEGREE_ID: StringField<EducationMajorContent>;
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS: StringField<EducationMajorContent>;
    /**
     * Static representation of the [[order]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ORDER: BigNumberField<EducationMajorContent>;
    /**
     * Static representation of the [[sectionId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SECTION_ID: StringField<EducationMajorContent>;
    /**
     * Static representation of the [[sectionType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SECTION_TYPE: StringField<EducationMajorContent>;
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS: StringField<EducationMajorContent>;
    /**
     * Static representation of the [[subModule]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUB_MODULE: StringField<EducationMajorContent>;
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_NAV: OneToOneLink<EducationMajorContent, User>;
    /**
     * Static representation of the one-to-one navigation property [[entityNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ENTITY_NAV: OneToOneLink<EducationMajorContent, EducationMajorEntity>;
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY_NAV: OneToOneLink<EducationMajorContent, User>;
    /**
     * Static representation of the one-to-one navigation property [[mappedDegreeIdNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MAPPED_DEGREE_ID_NAV: OneToOneLink<EducationMajorContent, EducationDegreeEntity>;
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<EducationMajorContent, MdfEnumValue>;
    /**
     * Static representation of the one-to-one navigation property [[statusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS_NAV: OneToOneLink<EducationMajorContent, MdfEnumValue>;
    /**
     * All fields of the EducationMajorContent entity.
     */
    const _allFields: Array<StringField<EducationMajorContent> | DateField<EducationMajorContent> | BigNumberField<EducationMajorContent> | OneToOneLink<EducationMajorContent, User> | OneToOneLink<EducationMajorContent, EducationMajorEntity> | OneToOneLink<EducationMajorContent, EducationDegreeEntity> | OneToOneLink<EducationMajorContent, MdfEnumValue>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<EducationMajorContent>;
    /**
     * All key fields of the EducationMajorContent entity.
     */
    const _keyFields: Array<Selectable<EducationMajorContent>>;
    /**
     * Mapping of all key field names to the respective static field property EducationMajorContent.
     */
    const _keys: {
        [keys: string]: Selectable<EducationMajorContent>;
    };
}
//# sourceMappingURL=EducationMajorContent.d.ts.map