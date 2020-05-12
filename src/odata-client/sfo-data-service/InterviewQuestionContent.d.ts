import { InterviewQuestionContentRequestBuilder } from './InterviewQuestionContentRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "InterviewQuestionContent" of service "SFOData".
 */
export declare class InterviewQuestionContent extends Entity implements InterviewQuestionContentType {
    /**
     * Technical entity name for InterviewQuestionContent.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for InterviewQuestionContent.
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
     * Interview Question.
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
     * One-to-one navigation property to the [[InterviewQuestionEntity]] entity.
     */
    entityNav: InterviewQuestionEntity;
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
     * Returns an entity builder to construct instances `InterviewQuestionContent`.
     * @returns A builder that constructs instances of entity type `InterviewQuestionContent`.
     */
    static builder(): EntityBuilderType<InterviewQuestionContent, InterviewQuestionContentTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `InterviewQuestionContent` entity type.
     * @returns A `InterviewQuestionContent` request builder.
     */
    static requestBuilder(): InterviewQuestionContentRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `InterviewQuestionContent`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `InterviewQuestionContent`.
     */
    static customField(fieldName: string): CustomField<InterviewQuestionContent>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { User, UserType } from './User';
import { InterviewQuestionEntity, InterviewQuestionEntityType } from './InterviewQuestionEntity';
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';
export interface InterviewQuestionContentType {
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
    entityNav: InterviewQuestionEntityType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    statusNav: MdfEnumValueType;
}
export interface InterviewQuestionContentTypeForceMandatory {
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
    entityNav: InterviewQuestionEntityType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    statusNav: MdfEnumValueType;
}
export declare namespace InterviewQuestionContent {
    /**
     * Static representation of the [[jobProfileExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_PROFILE_EXTERNAL_CODE: StringField<InterviewQuestionContent>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<InterviewQuestionContent>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<InterviewQuestionContent>;
    /**
     * Static representation of the [[entity]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ENTITY: StringField<InterviewQuestionContent>;
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CODE: StringField<InterviewQuestionContent>;
    /**
     * Static representation of the [[jobProfileId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_PROFILE_ID: StringField<InterviewQuestionContent>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<InterviewQuestionContent>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<InterviewQuestionContent>;
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS: StringField<InterviewQuestionContent>;
    /**
     * Static representation of the [[order]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ORDER: BigNumberField<InterviewQuestionContent>;
    /**
     * Static representation of the [[sectionId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SECTION_ID: StringField<InterviewQuestionContent>;
    /**
     * Static representation of the [[sectionType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SECTION_TYPE: StringField<InterviewQuestionContent>;
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS: StringField<InterviewQuestionContent>;
    /**
     * Static representation of the [[subModule]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUB_MODULE: StringField<InterviewQuestionContent>;
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_NAV: OneToOneLink<InterviewQuestionContent, User>;
    /**
     * Static representation of the one-to-one navigation property [[entityNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ENTITY_NAV: OneToOneLink<InterviewQuestionContent, InterviewQuestionEntity>;
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY_NAV: OneToOneLink<InterviewQuestionContent, User>;
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<InterviewQuestionContent, MdfEnumValue>;
    /**
     * Static representation of the one-to-one navigation property [[statusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS_NAV: OneToOneLink<InterviewQuestionContent, MdfEnumValue>;
    /**
     * All fields of the InterviewQuestionContent entity.
     */
    const _allFields: Array<StringField<InterviewQuestionContent> | DateField<InterviewQuestionContent> | BigNumberField<InterviewQuestionContent> | OneToOneLink<InterviewQuestionContent, User> | OneToOneLink<InterviewQuestionContent, InterviewQuestionEntity> | OneToOneLink<InterviewQuestionContent, MdfEnumValue>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<InterviewQuestionContent>;
    /**
     * All key fields of the InterviewQuestionContent entity.
     */
    const _keyFields: Array<Selectable<InterviewQuestionContent>>;
    /**
     * Mapping of all key field names to the respective static field property InterviewQuestionContent.
     */
    const _keys: {
        [keys: string]: Selectable<InterviewQuestionContent>;
    };
}
//# sourceMappingURL=InterviewQuestionContent.d.ts.map