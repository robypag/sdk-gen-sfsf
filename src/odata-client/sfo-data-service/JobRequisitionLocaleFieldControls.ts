/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { JobRequisitionLocaleFieldControlsRequestBuilder } from './JobRequisitionLocaleFieldControlsRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, NumberField, Selectable } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "JobRequisitionLocaleFieldControls" of service "SFOData".
 */
export class JobRequisitionLocaleFieldControls extends Entity implements JobRequisitionLocaleFieldControlsType {
  /**
   * Technical entity name for JobRequisitionLocaleFieldControls.
   */
  static _entityName = 'JobRequisitionLocaleFieldControls';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for JobRequisitionLocaleFieldControls.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * extJobDescFooter.
   * @nullable
   */
  extJobDescFooter?: number;
  /**
   * extJobDescHeader.
   * @nullable
   */
  extJobDescHeader?: number;
  /**
   * externalJobDescription.
   * @nullable
   */
  externalJobDescription?: number;
  /**
   * externalTitle.
   * @nullable
   */
  externalTitle?: number;
  /**
   * intJobDescFooter.
   * @nullable
   */
  intJobDescFooter?: number;
  /**
   * intJobDescHeader.
   * @nullable
   */
  intJobDescHeader?: number;
  /**
   * jobDescription.
   * @nullable
   */
  jobDescription?: number;
  /**
   * jobReqId.
   * @nullable
   */
  jobReqId?: number;
  /**
   * jobReqLocalId.
   */
  jobReqLocalId!: number;
  /**
   * jobReqLocalePermissionsNav.
   * @nullable
   */
  jobReqLocalePermissionsNav?: number;
  /**
   * jobRequisition.
   * @nullable
   */
  jobRequisition?: number;
  /**
   * jobTitle.
   * @nullable
   */
  jobTitle?: number;
  /**
   * locale.
   * @nullable
   */
  locale?: number;
  /**
   * status.
   * @nullable
   */
  status?: number;
  /**
   * templateHeaderFooter.
   * @nullable
   */
  templateHeaderFooter?: number;

  /**
   * Returns an entity builder to construct instances `JobRequisitionLocaleFieldControls`.
   * @returns A builder that constructs instances of entity type `JobRequisitionLocaleFieldControls`.
   */
  static builder(): EntityBuilderType<JobRequisitionLocaleFieldControls, JobRequisitionLocaleFieldControlsTypeForceMandatory> {
    return Entity.entityBuilder(JobRequisitionLocaleFieldControls);
  }

  /**
   * Returns a request builder to construct requests for operations on the `JobRequisitionLocaleFieldControls` entity type.
   * @returns A `JobRequisitionLocaleFieldControls` request builder.
   */
  static requestBuilder(): JobRequisitionLocaleFieldControlsRequestBuilder {
    return new JobRequisitionLocaleFieldControlsRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobRequisitionLocaleFieldControls`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `JobRequisitionLocaleFieldControls`.
   */
  static customField(fieldName: string): CustomField<JobRequisitionLocaleFieldControls> {
    return Entity.customFieldSelector(fieldName, JobRequisitionLocaleFieldControls);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface JobRequisitionLocaleFieldControlsType {
  extJobDescFooter?: number;
  extJobDescHeader?: number;
  externalJobDescription?: number;
  externalTitle?: number;
  intJobDescFooter?: number;
  intJobDescHeader?: number;
  jobDescription?: number;
  jobReqId?: number;
  jobReqLocalId: number;
  jobReqLocalePermissionsNav?: number;
  jobRequisition?: number;
  jobTitle?: number;
  locale?: number;
  status?: number;
  templateHeaderFooter?: number;
}

export interface JobRequisitionLocaleFieldControlsTypeForceMandatory {
  extJobDescFooter: number;
  extJobDescHeader: number;
  externalJobDescription: number;
  externalTitle: number;
  intJobDescFooter: number;
  intJobDescHeader: number;
  jobDescription: number;
  jobReqId: number;
  jobReqLocalId: number;
  jobReqLocalePermissionsNav: number;
  jobRequisition: number;
  jobTitle: number;
  locale: number;
  status: number;
  templateHeaderFooter: number;
}

export namespace JobRequisitionLocaleFieldControls {
  /**
   * Static representation of the [[extJobDescFooter]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXT_JOB_DESC_FOOTER: NumberField<JobRequisitionLocaleFieldControls> = new NumberField('extJobDescFooter', JobRequisitionLocaleFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[extJobDescHeader]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXT_JOB_DESC_HEADER: NumberField<JobRequisitionLocaleFieldControls> = new NumberField('extJobDescHeader', JobRequisitionLocaleFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[externalJobDescription]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_JOB_DESCRIPTION: NumberField<JobRequisitionLocaleFieldControls> = new NumberField('externalJobDescription', JobRequisitionLocaleFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[externalTitle]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_TITLE: NumberField<JobRequisitionLocaleFieldControls> = new NumberField('externalTitle', JobRequisitionLocaleFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[intJobDescFooter]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INT_JOB_DESC_FOOTER: NumberField<JobRequisitionLocaleFieldControls> = new NumberField('intJobDescFooter', JobRequisitionLocaleFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[intJobDescHeader]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INT_JOB_DESC_HEADER: NumberField<JobRequisitionLocaleFieldControls> = new NumberField('intJobDescHeader', JobRequisitionLocaleFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[jobDescription]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_DESCRIPTION: NumberField<JobRequisitionLocaleFieldControls> = new NumberField('jobDescription', JobRequisitionLocaleFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[jobReqId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_REQ_ID: NumberField<JobRequisitionLocaleFieldControls> = new NumberField('jobReqId', JobRequisitionLocaleFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[jobReqLocalId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_REQ_LOCAL_ID: NumberField<JobRequisitionLocaleFieldControls> = new NumberField('jobReqLocalId', JobRequisitionLocaleFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[jobReqLocalePermissionsNav]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_REQ_LOCALE_PERMISSIONS_NAV: NumberField<JobRequisitionLocaleFieldControls> = new NumberField('jobReqLocalePermissionsNav', JobRequisitionLocaleFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[jobRequisition]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_REQUISITION: NumberField<JobRequisitionLocaleFieldControls> = new NumberField('jobRequisition', JobRequisitionLocaleFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[jobTitle]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_TITLE: NumberField<JobRequisitionLocaleFieldControls> = new NumberField('jobTitle', JobRequisitionLocaleFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[locale]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LOCALE: NumberField<JobRequisitionLocaleFieldControls> = new NumberField('locale', JobRequisitionLocaleFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[status]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS: NumberField<JobRequisitionLocaleFieldControls> = new NumberField('status', JobRequisitionLocaleFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[templateHeaderFooter]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TEMPLATE_HEADER_FOOTER: NumberField<JobRequisitionLocaleFieldControls> = new NumberField('templateHeaderFooter', JobRequisitionLocaleFieldControls, 'Edm.Byte');
  /**
   * All fields of the JobRequisitionLocaleFieldControls entity.
   */
  export const _allFields: Array<NumberField<JobRequisitionLocaleFieldControls>> = [
    JobRequisitionLocaleFieldControls.EXT_JOB_DESC_FOOTER,
    JobRequisitionLocaleFieldControls.EXT_JOB_DESC_HEADER,
    JobRequisitionLocaleFieldControls.EXTERNAL_JOB_DESCRIPTION,
    JobRequisitionLocaleFieldControls.EXTERNAL_TITLE,
    JobRequisitionLocaleFieldControls.INT_JOB_DESC_FOOTER,
    JobRequisitionLocaleFieldControls.INT_JOB_DESC_HEADER,
    JobRequisitionLocaleFieldControls.JOB_DESCRIPTION,
    JobRequisitionLocaleFieldControls.JOB_REQ_ID,
    JobRequisitionLocaleFieldControls.JOB_REQ_LOCAL_ID,
    JobRequisitionLocaleFieldControls.JOB_REQ_LOCALE_PERMISSIONS_NAV,
    JobRequisitionLocaleFieldControls.JOB_REQUISITION,
    JobRequisitionLocaleFieldControls.JOB_TITLE,
    JobRequisitionLocaleFieldControls.LOCALE,
    JobRequisitionLocaleFieldControls.STATUS,
    JobRequisitionLocaleFieldControls.TEMPLATE_HEADER_FOOTER
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<JobRequisitionLocaleFieldControls> = new AllFields('*', JobRequisitionLocaleFieldControls);
  /**
   * All key fields of the JobRequisitionLocaleFieldControls entity.
   */
  export const _keyFields: Array<Selectable<JobRequisitionLocaleFieldControls>> = [JobRequisitionLocaleFieldControls.JOB_REQ_LOCAL_ID];
  /**
   * Mapping of all key field names to the respective static field property JobRequisitionLocaleFieldControls.
   */
  export const _keys: { [keys: string]: Selectable<JobRequisitionLocaleFieldControls> } = JobRequisitionLocaleFieldControls._keyFields.reduce((acc: { [keys: string]: Selectable<JobRequisitionLocaleFieldControls> }, field: Selectable<JobRequisitionLocaleFieldControls>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
