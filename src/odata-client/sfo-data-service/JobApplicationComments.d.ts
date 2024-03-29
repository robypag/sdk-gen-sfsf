import { JobApplicationCommentsRequestBuilder } from './JobApplicationCommentsRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "JobApplicationComments" of service "SFOData".
 */
export declare class JobApplicationComments extends Entity implements JobApplicationCommentsType {
    /**
     * Technical entity name for JobApplicationComments.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for JobApplicationComments.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Application Id.
     * @nullable
     */
    applicationId?: BigNumber;
    /**
     * Associated Comment Id.
     * @nullable
     */
    associatedCommentId?: BigNumber;
    /**
     * Associated Id.
     * @nullable
     */
    associatedId?: string;
    /**
     * Comment Id.
     */
    commentId: BigNumber;
    /**
     * Commentator.
     * @nullable
     */
    commentator?: string;
    /**
     * Content.
     * @nullable
     */
    content?: string;
    /**
     * Has Associated Comment.
     * @nullable
     */
    hasAssociatedComment?: string;
    /**
     * Migrated Commentator User Name.
     * @nullable
     */
    migratedCommentatorUserName?: string;
    /**
     * Reference Type.
     * @nullable
     */
    refType?: string;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    commentatorNav: User;
    /**
     * One-to-one navigation property to the [[JobApplication]] entity.
     */
    jobApplication: JobApplication;
    /**
     * Returns an entity builder to construct instances `JobApplicationComments`.
     * @returns A builder that constructs instances of entity type `JobApplicationComments`.
     */
    static builder(): EntityBuilderType<JobApplicationComments, JobApplicationCommentsTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `JobApplicationComments` entity type.
     * @returns A `JobApplicationComments` request builder.
     */
    static requestBuilder(): JobApplicationCommentsRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobApplicationComments`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `JobApplicationComments`.
     */
    static customField(fieldName: string): CustomField<JobApplicationComments>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { User, UserType } from './User';
import { JobApplication, JobApplicationType } from './JobApplication';
export interface JobApplicationCommentsType {
    applicationId?: BigNumber;
    associatedCommentId?: BigNumber;
    associatedId?: string;
    commentId: BigNumber;
    commentator?: string;
    content?: string;
    hasAssociatedComment?: string;
    migratedCommentatorUserName?: string;
    refType?: string;
    commentatorNav: UserType;
    jobApplication: JobApplicationType;
}
export interface JobApplicationCommentsTypeForceMandatory {
    applicationId: BigNumber;
    associatedCommentId: BigNumber;
    associatedId: string;
    commentId: BigNumber;
    commentator: string;
    content: string;
    hasAssociatedComment: string;
    migratedCommentatorUserName: string;
    refType: string;
    commentatorNav: UserType;
    jobApplication: JobApplicationType;
}
export declare namespace JobApplicationComments {
    /**
     * Static representation of the [[applicationId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const APPLICATION_ID: BigNumberField<JobApplicationComments>;
    /**
     * Static representation of the [[associatedCommentId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ASSOCIATED_COMMENT_ID: BigNumberField<JobApplicationComments>;
    /**
     * Static representation of the [[associatedId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ASSOCIATED_ID: StringField<JobApplicationComments>;
    /**
     * Static representation of the [[commentId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COMMENT_ID: BigNumberField<JobApplicationComments>;
    /**
     * Static representation of the [[commentator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COMMENTATOR: StringField<JobApplicationComments>;
    /**
     * Static representation of the [[content]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CONTENT: StringField<JobApplicationComments>;
    /**
     * Static representation of the [[hasAssociatedComment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HAS_ASSOCIATED_COMMENT: StringField<JobApplicationComments>;
    /**
     * Static representation of the [[migratedCommentatorUserName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MIGRATED_COMMENTATOR_USER_NAME: StringField<JobApplicationComments>;
    /**
     * Static representation of the [[refType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REF_TYPE: StringField<JobApplicationComments>;
    /**
     * Static representation of the one-to-one navigation property [[commentatorNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COMMENTATOR_NAV: OneToOneLink<JobApplicationComments, User>;
    /**
     * Static representation of the one-to-one navigation property [[jobApplication]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_APPLICATION: OneToOneLink<JobApplicationComments, JobApplication>;
    /**
     * All fields of the JobApplicationComments entity.
     */
    const _allFields: Array<BigNumberField<JobApplicationComments> | StringField<JobApplicationComments> | OneToOneLink<JobApplicationComments, User> | OneToOneLink<JobApplicationComments, JobApplication>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<JobApplicationComments>;
    /**
     * All key fields of the JobApplicationComments entity.
     */
    const _keyFields: Array<Selectable<JobApplicationComments>>;
    /**
     * Mapping of all key field names to the respective static field property JobApplicationComments.
     */
    const _keys: {
        [keys: string]: Selectable<JobApplicationComments>;
    };
}
//# sourceMappingURL=JobApplicationComments.d.ts.map