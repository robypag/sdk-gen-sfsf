import { WorkflowAllowedActionListRequestBuilder } from './WorkflowAllowedActionListRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, Entity, EntityBuilderType, Selectable } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "WorkflowAllowedActionList" of service "SFOData".
 */
export declare class WorkflowAllowedActionList extends Entity implements WorkflowAllowedActionListType {
    /**
     * Technical entity name for WorkflowAllowedActionList.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for WorkflowAllowedActionList.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Allow Approve.
     * @nullable
     */
    allowApprove?: boolean;
    /**
     * Allow Delegate Decline.
     * @nullable
     */
    allowDelegateDecline?: boolean;
    /**
     * Allow Delegate Grant.
     * @nullable
     */
    allowDelegateGrant?: boolean;
    /**
     * Allow Delegate Revoke.
     * @nullable
     */
    allowDelegateRevoke?: boolean;
    /**
     * Allow Post Comment.
     * @nullable
     */
    allowPostComment?: boolean;
    /**
     * Allow Reject.
     * @nullable
     */
    allowReject?: boolean;
    /**
     * Allow Resubmit.
     * @nullable
     */
    allowResubmit?: boolean;
    /**
     * Allow Sendback.
     * @nullable
     */
    allowSendback?: boolean;
    /**
     * Allow Update Request.
     * @nullable
     */
    allowUpdateRequest?: boolean;
    /**
     * Allow Withdraw.
     * @nullable
     */
    allowWithdraw?: boolean;
    /**
     * Workflow Request Id.
     */
    wfRequestId: BigNumber;
    /**
     * Returns an entity builder to construct instances `WorkflowAllowedActionList`.
     * @returns A builder that constructs instances of entity type `WorkflowAllowedActionList`.
     */
    static builder(): EntityBuilderType<WorkflowAllowedActionList, WorkflowAllowedActionListTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `WorkflowAllowedActionList` entity type.
     * @returns A `WorkflowAllowedActionList` request builder.
     */
    static requestBuilder(): WorkflowAllowedActionListRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `WorkflowAllowedActionList`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `WorkflowAllowedActionList`.
     */
    static customField(fieldName: string): CustomField<WorkflowAllowedActionList>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface WorkflowAllowedActionListType {
    allowApprove?: boolean;
    allowDelegateDecline?: boolean;
    allowDelegateGrant?: boolean;
    allowDelegateRevoke?: boolean;
    allowPostComment?: boolean;
    allowReject?: boolean;
    allowResubmit?: boolean;
    allowSendback?: boolean;
    allowUpdateRequest?: boolean;
    allowWithdraw?: boolean;
    wfRequestId: BigNumber;
}
export interface WorkflowAllowedActionListTypeForceMandatory {
    allowApprove: boolean;
    allowDelegateDecline: boolean;
    allowDelegateGrant: boolean;
    allowDelegateRevoke: boolean;
    allowPostComment: boolean;
    allowReject: boolean;
    allowResubmit: boolean;
    allowSendback: boolean;
    allowUpdateRequest: boolean;
    allowWithdraw: boolean;
    wfRequestId: BigNumber;
}
export declare namespace WorkflowAllowedActionList {
    /**
     * Static representation of the [[allowApprove]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ALLOW_APPROVE: BooleanField<WorkflowAllowedActionList>;
    /**
     * Static representation of the [[allowDelegateDecline]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ALLOW_DELEGATE_DECLINE: BooleanField<WorkflowAllowedActionList>;
    /**
     * Static representation of the [[allowDelegateGrant]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ALLOW_DELEGATE_GRANT: BooleanField<WorkflowAllowedActionList>;
    /**
     * Static representation of the [[allowDelegateRevoke]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ALLOW_DELEGATE_REVOKE: BooleanField<WorkflowAllowedActionList>;
    /**
     * Static representation of the [[allowPostComment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ALLOW_POST_COMMENT: BooleanField<WorkflowAllowedActionList>;
    /**
     * Static representation of the [[allowReject]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ALLOW_REJECT: BooleanField<WorkflowAllowedActionList>;
    /**
     * Static representation of the [[allowResubmit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ALLOW_RESUBMIT: BooleanField<WorkflowAllowedActionList>;
    /**
     * Static representation of the [[allowSendback]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ALLOW_SENDBACK: BooleanField<WorkflowAllowedActionList>;
    /**
     * Static representation of the [[allowUpdateRequest]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ALLOW_UPDATE_REQUEST: BooleanField<WorkflowAllowedActionList>;
    /**
     * Static representation of the [[allowWithdraw]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ALLOW_WITHDRAW: BooleanField<WorkflowAllowedActionList>;
    /**
     * Static representation of the [[wfRequestId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WF_REQUEST_ID: BigNumberField<WorkflowAllowedActionList>;
    /**
     * All fields of the WorkflowAllowedActionList entity.
     */
    const _allFields: Array<BooleanField<WorkflowAllowedActionList> | BigNumberField<WorkflowAllowedActionList>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<WorkflowAllowedActionList>;
    /**
     * All key fields of the WorkflowAllowedActionList entity.
     */
    const _keyFields: Array<Selectable<WorkflowAllowedActionList>>;
    /**
     * Mapping of all key field names to the respective static field property WorkflowAllowedActionList.
     */
    const _keys: {
        [keys: string]: Selectable<WorkflowAllowedActionList>;
    };
}
//# sourceMappingURL=WorkflowAllowedActionList.d.ts.map