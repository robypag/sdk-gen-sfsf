import { JobRequisitionPostingFieldControlsRequestBuilder } from './JobRequisitionPostingFieldControlsRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, NumberField, Selectable } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "JobRequisitionPostingFieldControls" of service "SFOData".
 */
export declare class JobRequisitionPostingFieldControls extends Entity implements JobRequisitionPostingFieldControlsType {
    /**
     * Technical entity name for JobRequisitionPostingFieldControls.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for JobRequisitionPostingFieldControls.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * agencyComments.
     * @nullable
     */
    agencyComments?: number;
    /**
     * boardId.
     * @nullable
     */
    boardId?: number;
    /**
     * boardName.
     * @nullable
     */
    boardName?: number;
    /**
     * channelId.
     * @nullable
     */
    channelId?: number;
    /**
     * extPartnerAccountId.
     * @nullable
     */
    extPartnerAccountId?: number;
    /**
     * isPostingUpdatable.
     * @nullable
     */
    isPostingUpdatable?: number;
    /**
     * jobPostingId.
     */
    jobPostingId: number;
    /**
     * jobReqId.
     */
    jobReqId: number;
    /**
     * jobReqPostingPermissionsNav.
     * @nullable
     */
    jobReqPostingPermissionsNav?: number;
    /**
     * jobRequisition.
     * @nullable
     */
    jobRequisition?: number;
    /**
     * lastModifiedBy.
     * @nullable
     */
    lastModifiedBy?: number;
    /**
     * lastModifiedByNav.
     * @nullable
     */
    lastModifiedByNav?: number;
    /**
     * lastModifiedDateTime.
     * @nullable
     */
    lastModifiedDateTime?: number;
    /**
     * postEndDate.
     * @nullable
     */
    postEndDate?: number;
    /**
     * postEndDateOffset.
     * @nullable
     */
    postEndDateOffset?: number;
    /**
     * postStartDate.
     * @nullable
     */
    postStartDate?: number;
    /**
     * postStartDateOffset.
     * @nullable
     */
    postStartDateOffset?: number;
    /**
     * postedBy.
     * @nullable
     */
    postedBy?: number;
    /**
     * postedByNav.
     * @nullable
     */
    postedByNav?: number;
    /**
     * postingStatus.
     * @nullable
     */
    postingStatus?: number;
    /**
     * Returns an entity builder to construct instances `JobRequisitionPostingFieldControls`.
     * @returns A builder that constructs instances of entity type `JobRequisitionPostingFieldControls`.
     */
    static builder(): EntityBuilderType<JobRequisitionPostingFieldControls, JobRequisitionPostingFieldControlsTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `JobRequisitionPostingFieldControls` entity type.
     * @returns A `JobRequisitionPostingFieldControls` request builder.
     */
    static requestBuilder(): JobRequisitionPostingFieldControlsRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobRequisitionPostingFieldControls`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `JobRequisitionPostingFieldControls`.
     */
    static customField(fieldName: string): CustomField<JobRequisitionPostingFieldControls>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface JobRequisitionPostingFieldControlsType {
    agencyComments?: number;
    boardId?: number;
    boardName?: number;
    channelId?: number;
    extPartnerAccountId?: number;
    isPostingUpdatable?: number;
    jobPostingId: number;
    jobReqId: number;
    jobReqPostingPermissionsNav?: number;
    jobRequisition?: number;
    lastModifiedBy?: number;
    lastModifiedByNav?: number;
    lastModifiedDateTime?: number;
    postEndDate?: number;
    postEndDateOffset?: number;
    postStartDate?: number;
    postStartDateOffset?: number;
    postedBy?: number;
    postedByNav?: number;
    postingStatus?: number;
}
export interface JobRequisitionPostingFieldControlsTypeForceMandatory {
    agencyComments: number;
    boardId: number;
    boardName: number;
    channelId: number;
    extPartnerAccountId: number;
    isPostingUpdatable: number;
    jobPostingId: number;
    jobReqId: number;
    jobReqPostingPermissionsNav: number;
    jobRequisition: number;
    lastModifiedBy: number;
    lastModifiedByNav: number;
    lastModifiedDateTime: number;
    postEndDate: number;
    postEndDateOffset: number;
    postStartDate: number;
    postStartDateOffset: number;
    postedBy: number;
    postedByNav: number;
    postingStatus: number;
}
export declare namespace JobRequisitionPostingFieldControls {
    /**
     * Static representation of the [[agencyComments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const AGENCY_COMMENTS: NumberField<JobRequisitionPostingFieldControls>;
    /**
     * Static representation of the [[boardId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BOARD_ID: NumberField<JobRequisitionPostingFieldControls>;
    /**
     * Static representation of the [[boardName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BOARD_NAME: NumberField<JobRequisitionPostingFieldControls>;
    /**
     * Static representation of the [[channelId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CHANNEL_ID: NumberField<JobRequisitionPostingFieldControls>;
    /**
     * Static representation of the [[extPartnerAccountId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXT_PARTNER_ACCOUNT_ID: NumberField<JobRequisitionPostingFieldControls>;
    /**
     * Static representation of the [[isPostingUpdatable]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IS_POSTING_UPDATABLE: NumberField<JobRequisitionPostingFieldControls>;
    /**
     * Static representation of the [[jobPostingId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_POSTING_ID: NumberField<JobRequisitionPostingFieldControls>;
    /**
     * Static representation of the [[jobReqId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_REQ_ID: NumberField<JobRequisitionPostingFieldControls>;
    /**
     * Static representation of the [[jobReqPostingPermissionsNav]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_REQ_POSTING_PERMISSIONS_NAV: NumberField<JobRequisitionPostingFieldControls>;
    /**
     * Static representation of the [[jobRequisition]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_REQUISITION: NumberField<JobRequisitionPostingFieldControls>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: NumberField<JobRequisitionPostingFieldControls>;
    /**
     * Static representation of the [[lastModifiedByNav]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY_NAV: NumberField<JobRequisitionPostingFieldControls>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: NumberField<JobRequisitionPostingFieldControls>;
    /**
     * Static representation of the [[postEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const POST_END_DATE: NumberField<JobRequisitionPostingFieldControls>;
    /**
     * Static representation of the [[postEndDateOffset]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const POST_END_DATE_OFFSET: NumberField<JobRequisitionPostingFieldControls>;
    /**
     * Static representation of the [[postStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const POST_START_DATE: NumberField<JobRequisitionPostingFieldControls>;
    /**
     * Static representation of the [[postStartDateOffset]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const POST_START_DATE_OFFSET: NumberField<JobRequisitionPostingFieldControls>;
    /**
     * Static representation of the [[postedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const POSTED_BY: NumberField<JobRequisitionPostingFieldControls>;
    /**
     * Static representation of the [[postedByNav]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const POSTED_BY_NAV: NumberField<JobRequisitionPostingFieldControls>;
    /**
     * Static representation of the [[postingStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const POSTING_STATUS: NumberField<JobRequisitionPostingFieldControls>;
    /**
     * All fields of the JobRequisitionPostingFieldControls entity.
     */
    const _allFields: Array<NumberField<JobRequisitionPostingFieldControls>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<JobRequisitionPostingFieldControls>;
    /**
     * All key fields of the JobRequisitionPostingFieldControls entity.
     */
    const _keyFields: Array<Selectable<JobRequisitionPostingFieldControls>>;
    /**
     * Mapping of all key field names to the respective static field property JobRequisitionPostingFieldControls.
     */
    const _keys: {
        [keys: string]: Selectable<JobRequisitionPostingFieldControls>;
    };
}
//# sourceMappingURL=JobRequisitionPostingFieldControls.d.ts.map