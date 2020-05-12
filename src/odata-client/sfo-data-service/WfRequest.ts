/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { WfRequestRequestBuilder } from './WfRequestRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, Link, NumberField, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "WfRequest" of service "SFOData".
 */
export class WfRequest extends Entity implements WfRequestType {
  /**
   * Technical entity name for WfRequest.
   */
  static _entityName = 'WfRequest';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for WfRequest.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Created By.
   * Maximum length: 100.
   * @nullable
   */
  createdBy?: string;
  /**
   * Created Date Time.
   * @nullable
   */
  createdDateTime?: Moment;
  /**
   * Created On.
   * @nullable
   */
  createdOn?: Moment;
  /**
   * Current Step Number.
   * @nullable
   */
  currentStepNum?: number;
  /**
   * Last Modified By.
   * Maximum length: 100.
   * @nullable
   */
  lastModifiedBy?: string;
  /**
   * Last Modified Date Time.
   * @nullable
   */
  lastModifiedDateTime?: Moment;
  /**
   * Last Modified On.
   * @nullable
   */
  lastModifiedOn?: Moment;
  /**
   * Module.
   * Maximum length: 128.
   * @nullable
   */
  module?: string;
  /**
   * Parent WfRequest Id.
   * @nullable
   */
  parentWfRequestId?: BigNumber;
  /**
   * Reminder Sent Date.
   * @nullable
   */
  reminderSentDate?: Moment;
  /**
   * Status.
   * Maximum length: 30.
   * @nullable
   */
  status?: string;
  /**
   * Total Steps.
   * @nullable
   */
  totalSteps?: number;
  /**
   * URL.
   * @nullable
   */
  url?: string;
  /**
   * WfRequest Id.
   */
  wfRequestId!: BigNumber;
  /**
   * One-to-one navigation property to the [[EmpWfRequest]] entity.
   */
  empWfRequestNav!: EmpWfRequest;
  /**
   * One-to-one navigation property to the [[WfRequest]] entity.
   */
  parentWfRequestNav!: WfRequest;
  /**
   * One-to-many navigation property to the [[WfRequestComments]] entity.
   */
  wfRequestCommentsNav!: WfRequestComments[];
  /**
   * One-to-many navigation property to the [[WfRequestParticipator]] entity.
   */
  wfRequestParticipatorNav!: WfRequestParticipator[];
  /**
   * One-to-many navigation property to the [[WfRequestStep]] entity.
   */
  wfRequestStepNav!: WfRequestStep[];
  /**
   * One-to-one navigation property to the [[WfRequestUiData]] entity.
   */
  wfRequestUiNav!: WfRequestUiData;
  /**
   * One-to-many navigation property to the [[WorkflowAllowedActionList]] entity.
   */
  workflowAllowedActionListNav!: WorkflowAllowedActionList[];

  /**
   * Returns an entity builder to construct instances `WfRequest`.
   * @returns A builder that constructs instances of entity type `WfRequest`.
   */
  static builder(): EntityBuilderType<WfRequest, WfRequestTypeForceMandatory> {
    return Entity.entityBuilder(WfRequest);
  }

  /**
   * Returns a request builder to construct requests for operations on the `WfRequest` entity type.
   * @returns A `WfRequest` request builder.
   */
  static requestBuilder(): WfRequestRequestBuilder {
    return new WfRequestRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `WfRequest`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `WfRequest`.
   */
  static customField(fieldName: string): CustomField<WfRequest> {
    return Entity.customFieldSelector(fieldName, WfRequest);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { EmpWfRequest, EmpWfRequestType } from './EmpWfRequest';
import { WfRequestComments, WfRequestCommentsType } from './WfRequestComments';
import { WfRequestParticipator, WfRequestParticipatorType } from './WfRequestParticipator';
import { WfRequestStep, WfRequestStepType } from './WfRequestStep';
import { WfRequestUiData, WfRequestUiDataType } from './WfRequestUiData';
import { WorkflowAllowedActionList, WorkflowAllowedActionListType } from './WorkflowAllowedActionList';

export interface WfRequestType {
  createdBy?: string;
  createdDateTime?: Moment;
  createdOn?: Moment;
  currentStepNum?: number;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  lastModifiedOn?: Moment;
  module?: string;
  parentWfRequestId?: BigNumber;
  reminderSentDate?: Moment;
  status?: string;
  totalSteps?: number;
  url?: string;
  wfRequestId: BigNumber;
  empWfRequestNav: EmpWfRequestType;
  parentWfRequestNav: WfRequestType;
  wfRequestCommentsNav: WfRequestCommentsType[];
  wfRequestParticipatorNav: WfRequestParticipatorType[];
  wfRequestStepNav: WfRequestStepType[];
  wfRequestUiNav: WfRequestUiDataType;
  workflowAllowedActionListNav: WorkflowAllowedActionListType[];
}

export interface WfRequestTypeForceMandatory {
  createdBy: string;
  createdDateTime: Moment;
  createdOn: Moment;
  currentStepNum: number;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  lastModifiedOn: Moment;
  module: string;
  parentWfRequestId: BigNumber;
  reminderSentDate: Moment;
  status: string;
  totalSteps: number;
  url: string;
  wfRequestId: BigNumber;
  empWfRequestNav: EmpWfRequestType;
  parentWfRequestNav: WfRequestType;
  wfRequestCommentsNav: WfRequestCommentsType[];
  wfRequestParticipatorNav: WfRequestParticipatorType[];
  wfRequestStepNav: WfRequestStepType[];
  wfRequestUiNav: WfRequestUiDataType;
  workflowAllowedActionListNav: WorkflowAllowedActionListType[];
}

export namespace WfRequest {
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<WfRequest> = new StringField('createdBy', WfRequest, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<WfRequest> = new DateField('createdDateTime', WfRequest, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[createdOn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_ON: DateField<WfRequest> = new DateField('createdOn', WfRequest, 'Edm.DateTime');
  /**
   * Static representation of the [[currentStepNum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CURRENT_STEP_NUM: NumberField<WfRequest> = new NumberField('currentStepNum', WfRequest, 'Edm.Int32');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<WfRequest> = new StringField('lastModifiedBy', WfRequest, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<WfRequest> = new DateField('lastModifiedDateTime', WfRequest, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[lastModifiedOn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_ON: DateField<WfRequest> = new DateField('lastModifiedOn', WfRequest, 'Edm.DateTime');
  /**
   * Static representation of the [[module]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MODULE: StringField<WfRequest> = new StringField('module', WfRequest, 'Edm.String');
  /**
   * Static representation of the [[parentWfRequestId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PARENT_WF_REQUEST_ID: BigNumberField<WfRequest> = new BigNumberField('parentWfRequestId', WfRequest, 'Edm.Int64');
  /**
   * Static representation of the [[reminderSentDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REMINDER_SENT_DATE: DateField<WfRequest> = new DateField('reminderSentDate', WfRequest, 'Edm.DateTime');
  /**
   * Static representation of the [[status]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS: StringField<WfRequest> = new StringField('status', WfRequest, 'Edm.String');
  /**
   * Static representation of the [[totalSteps]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TOTAL_STEPS: NumberField<WfRequest> = new NumberField('totalSteps', WfRequest, 'Edm.Int32');
  /**
   * Static representation of the [[url]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const URL: StringField<WfRequest> = new StringField('url', WfRequest, 'Edm.String');
  /**
   * Static representation of the [[wfRequestId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WF_REQUEST_ID: BigNumberField<WfRequest> = new BigNumberField('wfRequestId', WfRequest, 'Edm.Int64');
  /**
   * Static representation of the one-to-one navigation property [[empWfRequestNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMP_WF_REQUEST_NAV: OneToOneLink<WfRequest, EmpWfRequest> = new OneToOneLink('empWfRequestNav', WfRequest, EmpWfRequest);
  /**
   * Static representation of the one-to-one navigation property [[parentWfRequestNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PARENT_WF_REQUEST_NAV: OneToOneLink<WfRequest, WfRequest> = new OneToOneLink('parentWfRequestNav', WfRequest, WfRequest);
  /**
   * Static representation of the one-to-many navigation property [[wfRequestCommentsNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WF_REQUEST_COMMENTS_NAV: Link<WfRequest, WfRequestComments> = new Link('wfRequestCommentsNav', WfRequest, WfRequestComments);
  /**
   * Static representation of the one-to-many navigation property [[wfRequestParticipatorNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WF_REQUEST_PARTICIPATOR_NAV: Link<WfRequest, WfRequestParticipator> = new Link('wfRequestParticipatorNav', WfRequest, WfRequestParticipator);
  /**
   * Static representation of the one-to-many navigation property [[wfRequestStepNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WF_REQUEST_STEP_NAV: Link<WfRequest, WfRequestStep> = new Link('wfRequestStepNav', WfRequest, WfRequestStep);
  /**
   * Static representation of the one-to-one navigation property [[wfRequestUiNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WF_REQUEST_UI_NAV: OneToOneLink<WfRequest, WfRequestUiData> = new OneToOneLink('wfRequestUINav', WfRequest, WfRequestUiData);
  /**
   * Static representation of the one-to-many navigation property [[workflowAllowedActionListNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WORKFLOW_ALLOWED_ACTION_LIST_NAV: Link<WfRequest, WorkflowAllowedActionList> = new Link('workflowAllowedActionListNav', WfRequest, WorkflowAllowedActionList);
  /**
   * All fields of the WfRequest entity.
   */
  export const _allFields: Array<StringField<WfRequest> | DateField<WfRequest> | NumberField<WfRequest> | BigNumberField<WfRequest> | OneToOneLink<WfRequest, EmpWfRequest> | OneToOneLink<WfRequest, WfRequest> | Link<WfRequest, WfRequestComments> | Link<WfRequest, WfRequestParticipator> | Link<WfRequest, WfRequestStep> | OneToOneLink<WfRequest, WfRequestUiData> | Link<WfRequest, WorkflowAllowedActionList>> = [
    WfRequest.CREATED_BY,
    WfRequest.CREATED_DATE_TIME,
    WfRequest.CREATED_ON,
    WfRequest.CURRENT_STEP_NUM,
    WfRequest.LAST_MODIFIED_BY,
    WfRequest.LAST_MODIFIED_DATE_TIME,
    WfRequest.LAST_MODIFIED_ON,
    WfRequest.MODULE,
    WfRequest.PARENT_WF_REQUEST_ID,
    WfRequest.REMINDER_SENT_DATE,
    WfRequest.STATUS,
    WfRequest.TOTAL_STEPS,
    WfRequest.URL,
    WfRequest.WF_REQUEST_ID,
    WfRequest.EMP_WF_REQUEST_NAV,
    WfRequest.PARENT_WF_REQUEST_NAV,
    WfRequest.WF_REQUEST_COMMENTS_NAV,
    WfRequest.WF_REQUEST_PARTICIPATOR_NAV,
    WfRequest.WF_REQUEST_STEP_NAV,
    WfRequest.WF_REQUEST_UI_NAV,
    WfRequest.WORKFLOW_ALLOWED_ACTION_LIST_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<WfRequest> = new AllFields('*', WfRequest);
  /**
   * All key fields of the WfRequest entity.
   */
  export const _keyFields: Array<Selectable<WfRequest>> = [WfRequest.WF_REQUEST_ID];
  /**
   * Mapping of all key field names to the respective static field property WfRequest.
   */
  export const _keys: { [keys: string]: Selectable<WfRequest> } = WfRequest._keyFields.reduce((acc: { [keys: string]: Selectable<WfRequest> }, field: Selectable<WfRequest>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
