/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { WorkflowAllowedActionListRequestBuilder } from './WorkflowAllowedActionListRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, Entity, EntityBuilderType, Selectable } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "WorkflowAllowedActionList" of service "SFOData".
 */
export class WorkflowAllowedActionList extends Entity implements WorkflowAllowedActionListType {
  /**
   * Technical entity name for WorkflowAllowedActionList.
   */
  static _entityName = 'WorkflowAllowedActionList';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for WorkflowAllowedActionList.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
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
  wfRequestId!: BigNumber;

  /**
   * Returns an entity builder to construct instances `WorkflowAllowedActionList`.
   * @returns A builder that constructs instances of entity type `WorkflowAllowedActionList`.
   */
  static builder(): EntityBuilderType<WorkflowAllowedActionList, WorkflowAllowedActionListTypeForceMandatory> {
    return Entity.entityBuilder(WorkflowAllowedActionList);
  }

  /**
   * Returns a request builder to construct requests for operations on the `WorkflowAllowedActionList` entity type.
   * @returns A `WorkflowAllowedActionList` request builder.
   */
  static requestBuilder(): WorkflowAllowedActionListRequestBuilder {
    return new WorkflowAllowedActionListRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `WorkflowAllowedActionList`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `WorkflowAllowedActionList`.
   */
  static customField(fieldName: string): CustomField<WorkflowAllowedActionList> {
    return Entity.customFieldSelector(fieldName, WorkflowAllowedActionList);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
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

export namespace WorkflowAllowedActionList {
  /**
   * Static representation of the [[allowApprove]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ALLOW_APPROVE: BooleanField<WorkflowAllowedActionList> = new BooleanField('allowApprove', WorkflowAllowedActionList, 'Edm.Boolean');
  /**
   * Static representation of the [[allowDelegateDecline]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ALLOW_DELEGATE_DECLINE: BooleanField<WorkflowAllowedActionList> = new BooleanField('allowDelegateDecline', WorkflowAllowedActionList, 'Edm.Boolean');
  /**
   * Static representation of the [[allowDelegateGrant]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ALLOW_DELEGATE_GRANT: BooleanField<WorkflowAllowedActionList> = new BooleanField('allowDelegateGrant', WorkflowAllowedActionList, 'Edm.Boolean');
  /**
   * Static representation of the [[allowDelegateRevoke]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ALLOW_DELEGATE_REVOKE: BooleanField<WorkflowAllowedActionList> = new BooleanField('allowDelegateRevoke', WorkflowAllowedActionList, 'Edm.Boolean');
  /**
   * Static representation of the [[allowPostComment]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ALLOW_POST_COMMENT: BooleanField<WorkflowAllowedActionList> = new BooleanField('allowPostComment', WorkflowAllowedActionList, 'Edm.Boolean');
  /**
   * Static representation of the [[allowReject]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ALLOW_REJECT: BooleanField<WorkflowAllowedActionList> = new BooleanField('allowReject', WorkflowAllowedActionList, 'Edm.Boolean');
  /**
   * Static representation of the [[allowResubmit]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ALLOW_RESUBMIT: BooleanField<WorkflowAllowedActionList> = new BooleanField('allowResubmit', WorkflowAllowedActionList, 'Edm.Boolean');
  /**
   * Static representation of the [[allowSendback]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ALLOW_SENDBACK: BooleanField<WorkflowAllowedActionList> = new BooleanField('allowSendback', WorkflowAllowedActionList, 'Edm.Boolean');
  /**
   * Static representation of the [[allowUpdateRequest]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ALLOW_UPDATE_REQUEST: BooleanField<WorkflowAllowedActionList> = new BooleanField('allowUpdateRequest', WorkflowAllowedActionList, 'Edm.Boolean');
  /**
   * Static representation of the [[allowWithdraw]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ALLOW_WITHDRAW: BooleanField<WorkflowAllowedActionList> = new BooleanField('allowWithdraw', WorkflowAllowedActionList, 'Edm.Boolean');
  /**
   * Static representation of the [[wfRequestId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WF_REQUEST_ID: BigNumberField<WorkflowAllowedActionList> = new BigNumberField('wfRequestId', WorkflowAllowedActionList, 'Edm.Int64');
  /**
   * All fields of the WorkflowAllowedActionList entity.
   */
  export const _allFields: Array<BooleanField<WorkflowAllowedActionList> | BigNumberField<WorkflowAllowedActionList>> = [
    WorkflowAllowedActionList.ALLOW_APPROVE,
    WorkflowAllowedActionList.ALLOW_DELEGATE_DECLINE,
    WorkflowAllowedActionList.ALLOW_DELEGATE_GRANT,
    WorkflowAllowedActionList.ALLOW_DELEGATE_REVOKE,
    WorkflowAllowedActionList.ALLOW_POST_COMMENT,
    WorkflowAllowedActionList.ALLOW_REJECT,
    WorkflowAllowedActionList.ALLOW_RESUBMIT,
    WorkflowAllowedActionList.ALLOW_SENDBACK,
    WorkflowAllowedActionList.ALLOW_UPDATE_REQUEST,
    WorkflowAllowedActionList.ALLOW_WITHDRAW,
    WorkflowAllowedActionList.WF_REQUEST_ID
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<WorkflowAllowedActionList> = new AllFields('*', WorkflowAllowedActionList);
  /**
   * All key fields of the WorkflowAllowedActionList entity.
   */
  export const _keyFields: Array<Selectable<WorkflowAllowedActionList>> = [WorkflowAllowedActionList.WF_REQUEST_ID];
  /**
   * Mapping of all key field names to the respective static field property WorkflowAllowedActionList.
   */
  export const _keys: { [keys: string]: Selectable<WorkflowAllowedActionList> } = WorkflowAllowedActionList._keyFields.reduce((acc: { [keys: string]: Selectable<WorkflowAllowedActionList> }, field: Selectable<WorkflowAllowedActionList>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
