import { JobRequisitionPostingRequestBuilder } from './JobRequisitionPostingRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "JobRequisitionPosting" of service "SFOData".
 */
export declare class JobRequisitionPosting extends Entity implements JobRequisitionPostingType {
    /**
     * Technical entity name for JobRequisitionPosting.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for JobRequisitionPosting.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Agency Comments.
     */
    agencyComments: string;
    /**
     * Job Board Id.
     */
    boardId: string;
    /**
     * Job Board Name.
     */
    boardName: string;
    /**
     * Job Channel Id.
     */
    channelId: string;
    /**
     * Ext Partner Account Id.
     */
    extPartnerAccountId: BigNumber;
    /**
     * is posting updatable.
     * @nullable
     */
    isPostingUpdatable?: boolean;
    /**
     * Job Posting Id.
     */
    jobPostingId: BigNumber;
    /**
     * Job Requisition Id.
     */
    jobReqId: BigNumber;
    /**
     * Posting Last Modified By.
     */
    lastModifiedBy: string;
    /**
     * Posting Last Modified Date.
     */
    lastModifiedDateTime: Moment;
    /**
     * Posting End Date.
     */
    postEndDate: Moment;
    /**
     * Posting End Date With Offset.
     */
    postEndDateOffset: Moment;
    /**
     * Posting Start Date.
     */
    postStartDate: Moment;
    /**
     * Posting Start Date With Offset.
     */
    postStartDateOffset: Moment;
    /**
     * Job Posted By.
     */
    postedBy: string;
    /**
     * Job Posting Status.
     */
    postingStatus: string;
    /**
     * One-to-one navigation property to the [[JobRequisitionPostingFieldControls]] entity.
     */
    jobReqPostingPermissionsNav: JobRequisitionPostingFieldControls;
    /**
     * One-to-one navigation property to the [[JobRequisition]] entity.
     */
    jobRequisition: JobRequisition;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    lastModifiedByNav: User;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    postedByNav: User;
    /**
     * Returns an entity builder to construct instances `JobRequisitionPosting`.
     * @returns A builder that constructs instances of entity type `JobRequisitionPosting`.
     */
    static builder(): EntityBuilderType<JobRequisitionPosting, JobRequisitionPostingTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `JobRequisitionPosting` entity type.
     * @returns A `JobRequisitionPosting` request builder.
     */
    static requestBuilder(): JobRequisitionPostingRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobRequisitionPosting`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `JobRequisitionPosting`.
     */
    static customField(fieldName: string): CustomField<JobRequisitionPosting>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { JobRequisitionPostingFieldControls, JobRequisitionPostingFieldControlsType } from './JobRequisitionPostingFieldControls';
import { JobRequisition, JobRequisitionType } from './JobRequisition';
import { User, UserType } from './User';
export interface JobRequisitionPostingType {
    agencyComments: string;
    boardId: string;
    boardName: string;
    channelId: string;
    extPartnerAccountId: BigNumber;
    isPostingUpdatable?: boolean;
    jobPostingId: BigNumber;
    jobReqId: BigNumber;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    postEndDate: Moment;
    postEndDateOffset: Moment;
    postStartDate: Moment;
    postStartDateOffset: Moment;
    postedBy: string;
    postingStatus: string;
    jobReqPostingPermissionsNav: JobRequisitionPostingFieldControlsType;
    jobRequisition: JobRequisitionType;
    lastModifiedByNav: UserType;
    postedByNav: UserType;
}
export interface JobRequisitionPostingTypeForceMandatory {
    agencyComments: string;
    boardId: string;
    boardName: string;
    channelId: string;
    extPartnerAccountId: BigNumber;
    isPostingUpdatable: boolean;
    jobPostingId: BigNumber;
    jobReqId: BigNumber;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    postEndDate: Moment;
    postEndDateOffset: Moment;
    postStartDate: Moment;
    postStartDateOffset: Moment;
    postedBy: string;
    postingStatus: string;
    jobReqPostingPermissionsNav: JobRequisitionPostingFieldControlsType;
    jobRequisition: JobRequisitionType;
    lastModifiedByNav: UserType;
    postedByNav: UserType;
}
export declare namespace JobRequisitionPosting {
    /**
     * Static representation of the [[agencyComments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const AGENCY_COMMENTS: StringField<JobRequisitionPosting>;
    /**
     * Static representation of the [[boardId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BOARD_ID: StringField<JobRequisitionPosting>;
    /**
     * Static representation of the [[boardName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BOARD_NAME: StringField<JobRequisitionPosting>;
    /**
     * Static representation of the [[channelId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CHANNEL_ID: StringField<JobRequisitionPosting>;
    /**
     * Static representation of the [[extPartnerAccountId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXT_PARTNER_ACCOUNT_ID: BigNumberField<JobRequisitionPosting>;
    /**
     * Static representation of the [[isPostingUpdatable]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IS_POSTING_UPDATABLE: BooleanField<JobRequisitionPosting>;
    /**
     * Static representation of the [[jobPostingId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_POSTING_ID: BigNumberField<JobRequisitionPosting>;
    /**
     * Static representation of the [[jobReqId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_REQ_ID: BigNumberField<JobRequisitionPosting>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<JobRequisitionPosting>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<JobRequisitionPosting>;
    /**
     * Static representation of the [[postEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const POST_END_DATE: DateField<JobRequisitionPosting>;
    /**
     * Static representation of the [[postEndDateOffset]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const POST_END_DATE_OFFSET: DateField<JobRequisitionPosting>;
    /**
     * Static representation of the [[postStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const POST_START_DATE: DateField<JobRequisitionPosting>;
    /**
     * Static representation of the [[postStartDateOffset]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const POST_START_DATE_OFFSET: DateField<JobRequisitionPosting>;
    /**
     * Static representation of the [[postedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const POSTED_BY: StringField<JobRequisitionPosting>;
    /**
     * Static representation of the [[postingStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const POSTING_STATUS: StringField<JobRequisitionPosting>;
    /**
     * Static representation of the one-to-one navigation property [[jobReqPostingPermissionsNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_REQ_POSTING_PERMISSIONS_NAV: OneToOneLink<JobRequisitionPosting, JobRequisitionPostingFieldControls>;
    /**
     * Static representation of the one-to-one navigation property [[jobRequisition]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_REQUISITION: OneToOneLink<JobRequisitionPosting, JobRequisition>;
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY_NAV: OneToOneLink<JobRequisitionPosting, User>;
    /**
     * Static representation of the one-to-one navigation property [[postedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const POSTED_BY_NAV: OneToOneLink<JobRequisitionPosting, User>;
    /**
     * All fields of the JobRequisitionPosting entity.
     */
    const _allFields: Array<StringField<JobRequisitionPosting> | BigNumberField<JobRequisitionPosting> | BooleanField<JobRequisitionPosting> | DateField<JobRequisitionPosting> | OneToOneLink<JobRequisitionPosting, JobRequisitionPostingFieldControls> | OneToOneLink<JobRequisitionPosting, JobRequisition> | OneToOneLink<JobRequisitionPosting, User>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<JobRequisitionPosting>;
    /**
     * All key fields of the JobRequisitionPosting entity.
     */
    const _keyFields: Array<Selectable<JobRequisitionPosting>>;
    /**
     * Mapping of all key field names to the respective static field property JobRequisitionPosting.
     */
    const _keys: {
        [keys: string]: Selectable<JobRequisitionPosting>;
    };
}
//# sourceMappingURL=JobRequisitionPosting.d.ts.map