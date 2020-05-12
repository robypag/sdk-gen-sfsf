/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { JobOfferFieldControlsRequestBuilder } from './JobOfferFieldControlsRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, NumberField, Selectable } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "JobOfferFieldControls" of service "SFOData".
 */
export class JobOfferFieldControls extends Entity implements JobOfferFieldControlsType {
  /**
   * Technical entity name for JobOfferFieldControls.
   */
  static _entityName = 'JobOfferFieldControls';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for JobOfferFieldControls.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * anonymizedDate.
   * @nullable
   */
  anonymizedDate?: number;
  /**
   * anonymizedFlag.
   * @nullable
   */
  anonymizedFlag?: number;
  /**
   * applicationId.
   * @nullable
   */
  applicationId?: number;
  /**
   * approvers.
   * @nullable
   */
  approvers?: number;
  /**
   * contactEmail.
   * @nullable
   */
  contactEmail?: number;
  /**
   * createdBy.
   * @nullable
   */
  createdBy?: number;
  /**
   * createdByNav.
   * @nullable
   */
  createdByNav?: number;
  /**
   * createdDate.
   * @nullable
   */
  createdDate?: number;
  /**
   * currency.
   * @nullable
   */
  currency?: number;
  /**
   * firstName.
   * @nullable
   */
  firstName?: number;
  /**
   * formDataId.
   * @nullable
   */
  formDataId?: number;
  /**
   * formTemplateId.
   * @nullable
   */
  formTemplateId?: number;
  /**
   * initialComment.
   * @nullable
   */
  initialComment?: number;
  /**
   * internalStatus.
   * @nullable
   */
  internalStatus?: number;
  /**
   * jobApplication.
   * @nullable
   */
  jobApplication?: number;
  /**
   * jobCode.
   * @nullable
   */
  jobCode?: number;
  /**
   * jobOfferPermissionsNav.
   * @nullable
   */
  jobOfferPermissionsNav?: number;
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
   * lastModifiedDate.
   * @nullable
   */
  lastModifiedDate?: number;
  /**
   * lastName.
   * @nullable
   */
  lastName?: number;
  /**
   * location_obj.
   * @nullable
   */
  locationObj?: number;
  /**
   * location_obj_code.
   * @nullable
   */
  locationObjCode?: number;
  /**
   * offerApprovalId.
   */
  offerApprovalId!: number;
  /**
   * redefineTemplateApprovers.
   * @nullable
   */
  redefineTemplateApprovers?: number;
  /**
   * resume.
   * @nullable
   */
  resume?: number;
  /**
   * templateId.
   * @nullable
   */
  templateId?: number;
  /**
   * userIsCurrentApprover.
   * @nullable
   */
  userIsCurrentApprover?: number;
  /**
   * userIsOriginator.
   * @nullable
   */
  userIsOriginator?: number;
  /**
   * version.
   * @nullable
   */
  version?: number;

  /**
   * Returns an entity builder to construct instances `JobOfferFieldControls`.
   * @returns A builder that constructs instances of entity type `JobOfferFieldControls`.
   */
  static builder(): EntityBuilderType<JobOfferFieldControls, JobOfferFieldControlsTypeForceMandatory> {
    return Entity.entityBuilder(JobOfferFieldControls);
  }

  /**
   * Returns a request builder to construct requests for operations on the `JobOfferFieldControls` entity type.
   * @returns A `JobOfferFieldControls` request builder.
   */
  static requestBuilder(): JobOfferFieldControlsRequestBuilder {
    return new JobOfferFieldControlsRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobOfferFieldControls`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `JobOfferFieldControls`.
   */
  static customField(fieldName: string): CustomField<JobOfferFieldControls> {
    return Entity.customFieldSelector(fieldName, JobOfferFieldControls);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface JobOfferFieldControlsType {
  anonymizedDate?: number;
  anonymizedFlag?: number;
  applicationId?: number;
  approvers?: number;
  contactEmail?: number;
  createdBy?: number;
  createdByNav?: number;
  createdDate?: number;
  currency?: number;
  firstName?: number;
  formDataId?: number;
  formTemplateId?: number;
  initialComment?: number;
  internalStatus?: number;
  jobApplication?: number;
  jobCode?: number;
  jobOfferPermissionsNav?: number;
  lastModifiedBy?: number;
  lastModifiedByNav?: number;
  lastModifiedDate?: number;
  lastName?: number;
  locationObj?: number;
  locationObjCode?: number;
  offerApprovalId: number;
  redefineTemplateApprovers?: number;
  resume?: number;
  templateId?: number;
  userIsCurrentApprover?: number;
  userIsOriginator?: number;
  version?: number;
}

export interface JobOfferFieldControlsTypeForceMandatory {
  anonymizedDate: number;
  anonymizedFlag: number;
  applicationId: number;
  approvers: number;
  contactEmail: number;
  createdBy: number;
  createdByNav: number;
  createdDate: number;
  currency: number;
  firstName: number;
  formDataId: number;
  formTemplateId: number;
  initialComment: number;
  internalStatus: number;
  jobApplication: number;
  jobCode: number;
  jobOfferPermissionsNav: number;
  lastModifiedBy: number;
  lastModifiedByNav: number;
  lastModifiedDate: number;
  lastName: number;
  locationObj: number;
  locationObjCode: number;
  offerApprovalId: number;
  redefineTemplateApprovers: number;
  resume: number;
  templateId: number;
  userIsCurrentApprover: number;
  userIsOriginator: number;
  version: number;
}

export namespace JobOfferFieldControls {
  /**
   * Static representation of the [[anonymizedDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ANONYMIZED_DATE: NumberField<JobOfferFieldControls> = new NumberField('anonymizedDate', JobOfferFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[anonymizedFlag]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ANONYMIZED_FLAG: NumberField<JobOfferFieldControls> = new NumberField('anonymizedFlag', JobOfferFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[applicationId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const APPLICATION_ID: NumberField<JobOfferFieldControls> = new NumberField('applicationId', JobOfferFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[approvers]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const APPROVERS: NumberField<JobOfferFieldControls> = new NumberField('approvers', JobOfferFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[contactEmail]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONTACT_EMAIL: NumberField<JobOfferFieldControls> = new NumberField('contactEmail', JobOfferFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: NumberField<JobOfferFieldControls> = new NumberField('createdBy', JobOfferFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[createdByNav]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: NumberField<JobOfferFieldControls> = new NumberField('createdByNav', JobOfferFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[createdDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE: NumberField<JobOfferFieldControls> = new NumberField('createdDate', JobOfferFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[currency]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CURRENCY: NumberField<JobOfferFieldControls> = new NumberField('currency', JobOfferFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[firstName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FIRST_NAME: NumberField<JobOfferFieldControls> = new NumberField('firstName', JobOfferFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[formDataId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_DATA_ID: NumberField<JobOfferFieldControls> = new NumberField('formDataId', JobOfferFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[formTemplateId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_TEMPLATE_ID: NumberField<JobOfferFieldControls> = new NumberField('formTemplateId', JobOfferFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[initialComment]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INITIAL_COMMENT: NumberField<JobOfferFieldControls> = new NumberField('initialComment', JobOfferFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[internalStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INTERNAL_STATUS: NumberField<JobOfferFieldControls> = new NumberField('internalStatus', JobOfferFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[jobApplication]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_APPLICATION: NumberField<JobOfferFieldControls> = new NumberField('jobApplication', JobOfferFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[jobCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_CODE: NumberField<JobOfferFieldControls> = new NumberField('jobCode', JobOfferFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[jobOfferPermissionsNav]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_OFFER_PERMISSIONS_NAV: NumberField<JobOfferFieldControls> = new NumberField('jobOfferPermissionsNav', JobOfferFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: NumberField<JobOfferFieldControls> = new NumberField('lastModifiedBy', JobOfferFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[lastModifiedByNav]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: NumberField<JobOfferFieldControls> = new NumberField('lastModifiedByNav', JobOfferFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[lastModifiedDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE: NumberField<JobOfferFieldControls> = new NumberField('lastModifiedDate', JobOfferFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[lastName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_NAME: NumberField<JobOfferFieldControls> = new NumberField('lastName', JobOfferFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[locationObj]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LOCATION_OBJ: NumberField<JobOfferFieldControls> = new NumberField('location_obj', JobOfferFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[locationObjCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LOCATION_OBJ_CODE: NumberField<JobOfferFieldControls> = new NumberField('location_obj_code', JobOfferFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[offerApprovalId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OFFER_APPROVAL_ID: NumberField<JobOfferFieldControls> = new NumberField('offerApprovalId', JobOfferFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[redefineTemplateApprovers]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REDEFINE_TEMPLATE_APPROVERS: NumberField<JobOfferFieldControls> = new NumberField('redefineTemplateApprovers', JobOfferFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[resume]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RESUME: NumberField<JobOfferFieldControls> = new NumberField('resume', JobOfferFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[templateId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TEMPLATE_ID: NumberField<JobOfferFieldControls> = new NumberField('templateId', JobOfferFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[userIsCurrentApprover]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_IS_CURRENT_APPROVER: NumberField<JobOfferFieldControls> = new NumberField('userIsCurrentApprover', JobOfferFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[userIsOriginator]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_IS_ORIGINATOR: NumberField<JobOfferFieldControls> = new NumberField('userIsOriginator', JobOfferFieldControls, 'Edm.Byte');
  /**
   * Static representation of the [[version]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VERSION: NumberField<JobOfferFieldControls> = new NumberField('version', JobOfferFieldControls, 'Edm.Byte');
  /**
   * All fields of the JobOfferFieldControls entity.
   */
  export const _allFields: Array<NumberField<JobOfferFieldControls>> = [
    JobOfferFieldControls.ANONYMIZED_DATE,
    JobOfferFieldControls.ANONYMIZED_FLAG,
    JobOfferFieldControls.APPLICATION_ID,
    JobOfferFieldControls.APPROVERS,
    JobOfferFieldControls.CONTACT_EMAIL,
    JobOfferFieldControls.CREATED_BY,
    JobOfferFieldControls.CREATED_BY_NAV,
    JobOfferFieldControls.CREATED_DATE,
    JobOfferFieldControls.CURRENCY,
    JobOfferFieldControls.FIRST_NAME,
    JobOfferFieldControls.FORM_DATA_ID,
    JobOfferFieldControls.FORM_TEMPLATE_ID,
    JobOfferFieldControls.INITIAL_COMMENT,
    JobOfferFieldControls.INTERNAL_STATUS,
    JobOfferFieldControls.JOB_APPLICATION,
    JobOfferFieldControls.JOB_CODE,
    JobOfferFieldControls.JOB_OFFER_PERMISSIONS_NAV,
    JobOfferFieldControls.LAST_MODIFIED_BY,
    JobOfferFieldControls.LAST_MODIFIED_BY_NAV,
    JobOfferFieldControls.LAST_MODIFIED_DATE,
    JobOfferFieldControls.LAST_NAME,
    JobOfferFieldControls.LOCATION_OBJ,
    JobOfferFieldControls.LOCATION_OBJ_CODE,
    JobOfferFieldControls.OFFER_APPROVAL_ID,
    JobOfferFieldControls.REDEFINE_TEMPLATE_APPROVERS,
    JobOfferFieldControls.RESUME,
    JobOfferFieldControls.TEMPLATE_ID,
    JobOfferFieldControls.USER_IS_CURRENT_APPROVER,
    JobOfferFieldControls.USER_IS_ORIGINATOR,
    JobOfferFieldControls.VERSION
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<JobOfferFieldControls> = new AllFields('*', JobOfferFieldControls);
  /**
   * All key fields of the JobOfferFieldControls entity.
   */
  export const _keyFields: Array<Selectable<JobOfferFieldControls>> = [JobOfferFieldControls.OFFER_APPROVAL_ID];
  /**
   * Mapping of all key field names to the respective static field property JobOfferFieldControls.
   */
  export const _keys: { [keys: string]: Selectable<JobOfferFieldControls> } = JobOfferFieldControls._keyFields.reduce((acc: { [keys: string]: Selectable<JobOfferFieldControls> }, field: Selectable<JobOfferFieldControls>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
