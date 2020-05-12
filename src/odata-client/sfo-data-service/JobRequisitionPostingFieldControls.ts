/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { JobRequisitionPostingFieldControlsRequestBuilder } from './JobRequisitionPostingFieldControlsRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, NumberField, Selectable } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "JobRequisitionPostingFieldControls" of service "SFOData".
 */
export class JobRequisitionPostingFieldControls extends Entity implements JobRequisitionPostingFieldControlsType {
  /**
   * Technical entity name for JobRequisitionPostingFieldControls.
   */
  static _entityName = 'JobRequisitionPostingFieldControls';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for JobRequisitionPostingFieldControls.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
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
  jobPostingId!: number;
  /**
   * jobReqId.
   */
  jobReqId!: number;
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
  static builder(): EntityBuilderType<JobRequisitionPostingFieldControls, JobRequisitionPostingFieldControlsTypeForceMandatory> {
    return Entity.entityBuilder(JobRequisitionPostingFieldControls);
  }

  /**
   * Returns a request builder to construct requests for operations on the `JobRequisitionPostingFieldControls` entity type.
   * @returns A `JobRequisitionPostingFieldControls` request builder.
   */
  static requestBuilder(): JobRequisitionPostingFieldControlsRequestBuilder {
    return new JobRequisitionPostingFieldControlsRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobRequisitionPostingFieldControls`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `JobRequisitionPostingFieldControls`.
   */
  static customField(fieldName: string): CustomField<JobRequisitionPostingFieldControls> {
    return Entity.customFieldSelector(fieldName, JobRequisitionPostingFieldControls);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
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

export namespace JobRequisitionPostingFieldControls {
  /**
   * Static representation of the [[agencyComments]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const AGENCY_COMMENTS: NumberField<JobRequisitionPostingFieldControls> = new NumberField('agencyComments', JobRequisitionPostingFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[boardId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BOARD_ID: NumberField<JobRequisitionPostingFieldControls> = new NumberField('boardId', JobRequisitionPostingFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[boardName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BOARD_NAME: NumberField<JobRequisitionPostingFieldControls> = new NumberField('boardName', JobRequisitionPostingFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[channelId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CHANNEL_ID: NumberField<JobRequisitionPostingFieldControls> = new NumberField('channelId', JobRequisitionPostingFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[extPartnerAccountId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXT_PARTNER_ACCOUNT_ID: NumberField<JobRequisitionPostingFieldControls> = new NumberField('extPartnerAccountId', JobRequisitionPostingFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[isPostingUpdatable]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_POSTING_UPDATABLE: NumberField<JobRequisitionPostingFieldControls> = new NumberField('isPostingUpdatable', JobRequisitionPostingFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[jobPostingId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_POSTING_ID: NumberField<JobRequisitionPostingFieldControls> = new NumberField('jobPostingId', JobRequisitionPostingFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[jobReqId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_REQ_ID: NumberField<JobRequisitionPostingFieldControls> = new NumberField('jobReqId', JobRequisitionPostingFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[jobReqPostingPermissionsNav]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_REQ_POSTING_PERMISSIONS_NAV: NumberField<JobRequisitionPostingFieldControls> = new NumberField('jobReqPostingPermissionsNav', JobRequisitionPostingFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[jobRequisition]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_REQUISITION: NumberField<JobRequisitionPostingFieldControls> = new NumberField('jobRequisition', JobRequisitionPostingFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: NumberField<JobRequisitionPostingFieldControls> = new NumberField('lastModifiedBy', JobRequisitionPostingFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[lastModifiedByNav]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: NumberField<JobRequisitionPostingFieldControls> = new NumberField('lastModifiedByNav', JobRequisitionPostingFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: NumberField<JobRequisitionPostingFieldControls> = new NumberField('lastModifiedDateTime', JobRequisitionPostingFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[postEndDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const POST_END_DATE: NumberField<JobRequisitionPostingFieldControls> = new NumberField('postEndDate', JobRequisitionPostingFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[postEndDateOffset]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const POST_END_DATE_OFFSET: NumberField<JobRequisitionPostingFieldControls> = new NumberField('postEndDateOffset', JobRequisitionPostingFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[postStartDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const POST_START_DATE: NumberField<JobRequisitionPostingFieldControls> = new NumberField('postStartDate', JobRequisitionPostingFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[postStartDateOffset]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const POST_START_DATE_OFFSET: NumberField<JobRequisitionPostingFieldControls> = new NumberField('postStartDateOffset', JobRequisitionPostingFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[postedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const POSTED_BY: NumberField<JobRequisitionPostingFieldControls> = new NumberField('postedBy', JobRequisitionPostingFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[postedByNav]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const POSTED_BY_NAV: NumberField<JobRequisitionPostingFieldControls> = new NumberField('postedByNav', JobRequisitionPostingFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[postingStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const POSTING_STATUS: NumberField<JobRequisitionPostingFieldControls> = new NumberField('postingStatus', JobRequisitionPostingFieldControls, 'Edm.Byte');
  /**
   * All fields of the JobRequisitionPostingFieldControls entity.
   */
  export const _allFields: Array<NumberField<JobRequisitionPostingFieldControls>> = [
    JobRequisitionPostingFieldControls.AGENCY_COMMENTS,
    JobRequisitionPostingFieldControls.BOARD_ID,
    JobRequisitionPostingFieldControls.BOARD_NAME,
    JobRequisitionPostingFieldControls.CHANNEL_ID,
    JobRequisitionPostingFieldControls.EXT_PARTNER_ACCOUNT_ID,
    JobRequisitionPostingFieldControls.IS_POSTING_UPDATABLE,
    JobRequisitionPostingFieldControls.JOB_POSTING_ID,
    JobRequisitionPostingFieldControls.JOB_REQ_ID,
    JobRequisitionPostingFieldControls.JOB_REQ_POSTING_PERMISSIONS_NAV,
    JobRequisitionPostingFieldControls.JOB_REQUISITION,
    JobRequisitionPostingFieldControls.LAST_MODIFIED_BY,
    JobRequisitionPostingFieldControls.LAST_MODIFIED_BY_NAV,
    JobRequisitionPostingFieldControls.LAST_MODIFIED_DATE_TIME,
    JobRequisitionPostingFieldControls.POST_END_DATE,
    JobRequisitionPostingFieldControls.POST_END_DATE_OFFSET,
    JobRequisitionPostingFieldControls.POST_START_DATE,
    JobRequisitionPostingFieldControls.POST_START_DATE_OFFSET,
    JobRequisitionPostingFieldControls.POSTED_BY,
    JobRequisitionPostingFieldControls.POSTED_BY_NAV,
    JobRequisitionPostingFieldControls.POSTING_STATUS
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<JobRequisitionPostingFieldControls> = new AllFields('*', JobRequisitionPostingFieldControls);
  /**
   * All key fields of the JobRequisitionPostingFieldControls entity.
   */
  export const _keyFields: Array<Selectable<JobRequisitionPostingFieldControls>> = [JobRequisitionPostingFieldControls.JOB_POSTING_ID, JobRequisitionPostingFieldControls.JOB_REQ_ID];
  /**
   * Mapping of all key field names to the respective static field property JobRequisitionPostingFieldControls.
   */
  export const _keys: { [keys: string]: Selectable<JobRequisitionPostingFieldControls> } = JobRequisitionPostingFieldControls._keyFields.reduce((acc: { [keys: string]: Selectable<JobRequisitionPostingFieldControls> }, field: Selectable<JobRequisitionPostingFieldControls>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
