/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { JobOfferRequestBuilder } from './JobOfferRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "JobOffer" of service "SFOData".
 */
export class JobOffer extends Entity implements JobOfferType {
  /**
   * Technical entity name for JobOffer.
   */
  static _entityName = 'JobOffer';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for JobOffer.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Anonymized Date.
   * @nullable
   */
  anonymizedDate?: Moment;
  /**
   * Anonymized Flag.
   * @nullable
   */
  anonymizedFlag?: string;
  /**
   * Application Id.
   */
  applicationId!: BigNumber;
  /**
   * Contact Email.
   * @nullable
   */
  contactEmail?: string;
  /**
   * Created By.
   */
  createdBy!: string;
  /**
   * Created Date.
   */
  createdDate!: Moment;
  /**
   * Currency.
   * @nullable
   */
  currency?: string;
  /**
   * First Name.
   * @nullable
   */
  firstName?: string;
  /**
   * Form Data Id.
   * @nullable
   */
  formDataId?: BigNumber;
  /**
   * Form Template Id.
   * @nullable
   */
  formTemplateId?: BigNumber;
  /**
   * Initial Comment.
   * @nullable
   */
  initialComment?: string;
  /**
   * Internal Status.
   * @nullable
   */
  internalStatus?: string;
  /**
   * Job Code.
   * @nullable
   */
  jobCode?: string;
  /**
   * Last Modified By.
   */
  lastModifiedBy!: string;
  /**
   * Last Modified Date.
   */
  lastModifiedDate!: Moment;
  /**
   * Last Name.
   * @nullable
   */
  lastName?: string;
  /**
   * Location Code.
   * @nullable
   */
  locationObjCode?: string;
  /**
   * Offer Approval Id.
   */
  offerApprovalId!: BigNumber;
  /**
   * redefineTemplateApprovers.
   * @nullable
   */
  redefineTemplateApprovers?: string;
  /**
   * Template Id.
   * @nullable
   */
  templateId?: BigNumber;
  /**
   * userIsCurrentApprover.
   * @nullable
   */
  userIsCurrentApprover?: boolean;
  /**
   * userIsOriginator.
   * @nullable
   */
  userIsOriginator?: boolean;
  /**
   * Version.
   * @nullable
   */
  version?: BigNumber;
  /**
   * One-to-many navigation property to the [[JobOfferApprover]] entity.
   */
  approvers!: JobOfferApprover[];
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  createdByNav!: User;
  /**
   * One-to-one navigation property to the [[JobApplication]] entity.
   */
  jobApplication!: JobApplication;
  /**
   * One-to-one navigation property to the [[JobOfferFieldControls]] entity.
   */
  jobOfferPermissionsNav!: JobOfferFieldControls;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  lastModifiedByNav!: User;
  /**
   * One-to-many navigation property to the [[FoLocation]] entity.
   */
  locationObj!: FoLocation[];
  /**
   * One-to-one navigation property to the [[Attachment]] entity.
   */
  resume!: Attachment;

  /**
   * Returns an entity builder to construct instances `JobOffer`.
   * @returns A builder that constructs instances of entity type `JobOffer`.
   */
  static builder(): EntityBuilderType<JobOffer, JobOfferTypeForceMandatory> {
    return Entity.entityBuilder(JobOffer);
  }

  /**
   * Returns a request builder to construct requests for operations on the `JobOffer` entity type.
   * @returns A `JobOffer` request builder.
   */
  static requestBuilder(): JobOfferRequestBuilder {
    return new JobOfferRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobOffer`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `JobOffer`.
   */
  static customField(fieldName: string): CustomField<JobOffer> {
    return Entity.customFieldSelector(fieldName, JobOffer);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { JobOfferApprover, JobOfferApproverType } from './JobOfferApprover';
import { User, UserType } from './User';
import { JobApplication, JobApplicationType } from './JobApplication';
import { JobOfferFieldControls, JobOfferFieldControlsType } from './JobOfferFieldControls';
import { FoLocation, FoLocationType } from './FoLocation';
import { Attachment, AttachmentType } from './Attachment';

export interface JobOfferType {
  anonymizedDate?: Moment;
  anonymizedFlag?: string;
  applicationId: BigNumber;
  contactEmail?: string;
  createdBy: string;
  createdDate: Moment;
  currency?: string;
  firstName?: string;
  formDataId?: BigNumber;
  formTemplateId?: BigNumber;
  initialComment?: string;
  internalStatus?: string;
  jobCode?: string;
  lastModifiedBy: string;
  lastModifiedDate: Moment;
  lastName?: string;
  locationObjCode?: string;
  offerApprovalId: BigNumber;
  redefineTemplateApprovers?: string;
  templateId?: BigNumber;
  userIsCurrentApprover?: boolean;
  userIsOriginator?: boolean;
  version?: BigNumber;
  approvers: JobOfferApproverType[];
  createdByNav: UserType;
  jobApplication: JobApplicationType;
  jobOfferPermissionsNav: JobOfferFieldControlsType;
  lastModifiedByNav: UserType;
  locationObj: FoLocationType[];
  resume: AttachmentType;
}

export interface JobOfferTypeForceMandatory {
  anonymizedDate: Moment;
  anonymizedFlag: string;
  applicationId: BigNumber;
  contactEmail: string;
  createdBy: string;
  createdDate: Moment;
  currency: string;
  firstName: string;
  formDataId: BigNumber;
  formTemplateId: BigNumber;
  initialComment: string;
  internalStatus: string;
  jobCode: string;
  lastModifiedBy: string;
  lastModifiedDate: Moment;
  lastName: string;
  locationObjCode: string;
  offerApprovalId: BigNumber;
  redefineTemplateApprovers: string;
  templateId: BigNumber;
  userIsCurrentApprover: boolean;
  userIsOriginator: boolean;
  version: BigNumber;
  approvers: JobOfferApproverType[];
  createdByNav: UserType;
  jobApplication: JobApplicationType;
  jobOfferPermissionsNav: JobOfferFieldControlsType;
  lastModifiedByNav: UserType;
  locationObj: FoLocationType[];
  resume: AttachmentType;
}

export namespace JobOffer {
  /**
   * Static representation of the [[anonymizedDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ANONYMIZED_DATE: DateField<JobOffer> = new DateField('anonymizedDate', JobOffer, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[anonymizedFlag]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ANONYMIZED_FLAG: StringField<JobOffer> = new StringField('anonymizedFlag', JobOffer, 'Edm.String');
  /**
   * Static representation of the [[applicationId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const APPLICATION_ID: BigNumberField<JobOffer> = new BigNumberField('applicationId', JobOffer, 'Edm.Int64');
  /**
   * Static representation of the [[contactEmail]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONTACT_EMAIL: StringField<JobOffer> = new StringField('contactEmail', JobOffer, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<JobOffer> = new StringField('createdBy', JobOffer, 'Edm.String');
  /**
   * Static representation of the [[createdDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE: DateField<JobOffer> = new DateField('createdDate', JobOffer, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[currency]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CURRENCY: StringField<JobOffer> = new StringField('currency', JobOffer, 'Edm.String');
  /**
   * Static representation of the [[firstName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FIRST_NAME: StringField<JobOffer> = new StringField('firstName', JobOffer, 'Edm.String');
  /**
   * Static representation of the [[formDataId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_DATA_ID: BigNumberField<JobOffer> = new BigNumberField('formDataId', JobOffer, 'Edm.Int64');
  /**
   * Static representation of the [[formTemplateId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_TEMPLATE_ID: BigNumberField<JobOffer> = new BigNumberField('formTemplateId', JobOffer, 'Edm.Int64');
  /**
   * Static representation of the [[initialComment]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INITIAL_COMMENT: StringField<JobOffer> = new StringField('initialComment', JobOffer, 'Edm.String');
  /**
   * Static representation of the [[internalStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INTERNAL_STATUS: StringField<JobOffer> = new StringField('internalStatus', JobOffer, 'Edm.String');
  /**
   * Static representation of the [[jobCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_CODE: StringField<JobOffer> = new StringField('jobCode', JobOffer, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<JobOffer> = new StringField('lastModifiedBy', JobOffer, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE: DateField<JobOffer> = new DateField('lastModifiedDate', JobOffer, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[lastName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_NAME: StringField<JobOffer> = new StringField('lastName', JobOffer, 'Edm.String');
  /**
   * Static representation of the [[locationObjCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LOCATION_OBJ_CODE: StringField<JobOffer> = new StringField('location_obj_code', JobOffer, 'Edm.String');
  /**
   * Static representation of the [[offerApprovalId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OFFER_APPROVAL_ID: BigNumberField<JobOffer> = new BigNumberField('offerApprovalId', JobOffer, 'Edm.Int64');
  /**
   * Static representation of the [[redefineTemplateApprovers]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REDEFINE_TEMPLATE_APPROVERS: StringField<JobOffer> = new StringField('redefineTemplateApprovers', JobOffer, 'Edm.String');
  /**
   * Static representation of the [[templateId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TEMPLATE_ID: BigNumberField<JobOffer> = new BigNumberField('templateId', JobOffer, 'Edm.Int64');
  /**
   * Static representation of the [[userIsCurrentApprover]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_IS_CURRENT_APPROVER: BooleanField<JobOffer> = new BooleanField('userIsCurrentApprover', JobOffer, 'Edm.Boolean');
  /**
   * Static representation of the [[userIsOriginator]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_IS_ORIGINATOR: BooleanField<JobOffer> = new BooleanField('userIsOriginator', JobOffer, 'Edm.Boolean');
  /**
   * Static representation of the [[version]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VERSION: BigNumberField<JobOffer> = new BigNumberField('version', JobOffer, 'Edm.Int64');
  /**
   * Static representation of the one-to-many navigation property [[approvers]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const APPROVERS: Link<JobOffer, JobOfferApprover> = new Link('approvers', JobOffer, JobOfferApprover);
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<JobOffer, User> = new OneToOneLink('createdByNav', JobOffer, User);
  /**
   * Static representation of the one-to-one navigation property [[jobApplication]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_APPLICATION: OneToOneLink<JobOffer, JobApplication> = new OneToOneLink('jobApplication', JobOffer, JobApplication);
  /**
   * Static representation of the one-to-one navigation property [[jobOfferPermissionsNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_OFFER_PERMISSIONS_NAV: OneToOneLink<JobOffer, JobOfferFieldControls> = new OneToOneLink('jobOfferPermissionsNav', JobOffer, JobOfferFieldControls);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<JobOffer, User> = new OneToOneLink('lastModifiedByNav', JobOffer, User);
  /**
   * Static representation of the one-to-many navigation property [[locationObj]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LOCATION_OBJ: Link<JobOffer, FoLocation> = new Link('location_obj', JobOffer, FoLocation);
  /**
   * Static representation of the one-to-one navigation property [[resume]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RESUME: OneToOneLink<JobOffer, Attachment> = new OneToOneLink('resume', JobOffer, Attachment);
  /**
   * All fields of the JobOffer entity.
   */
  export const _allFields: Array<DateField<JobOffer> | StringField<JobOffer> | BigNumberField<JobOffer> | BooleanField<JobOffer> | Link<JobOffer, JobOfferApprover> | OneToOneLink<JobOffer, User> | OneToOneLink<JobOffer, JobApplication> | OneToOneLink<JobOffer, JobOfferFieldControls> | Link<JobOffer, FoLocation> | OneToOneLink<JobOffer, Attachment>> = [
    JobOffer.ANONYMIZED_DATE,
    JobOffer.ANONYMIZED_FLAG,
    JobOffer.APPLICATION_ID,
    JobOffer.CONTACT_EMAIL,
    JobOffer.CREATED_BY,
    JobOffer.CREATED_DATE,
    JobOffer.CURRENCY,
    JobOffer.FIRST_NAME,
    JobOffer.FORM_DATA_ID,
    JobOffer.FORM_TEMPLATE_ID,
    JobOffer.INITIAL_COMMENT,
    JobOffer.INTERNAL_STATUS,
    JobOffer.JOB_CODE,
    JobOffer.LAST_MODIFIED_BY,
    JobOffer.LAST_MODIFIED_DATE,
    JobOffer.LAST_NAME,
    JobOffer.LOCATION_OBJ_CODE,
    JobOffer.OFFER_APPROVAL_ID,
    JobOffer.REDEFINE_TEMPLATE_APPROVERS,
    JobOffer.TEMPLATE_ID,
    JobOffer.USER_IS_CURRENT_APPROVER,
    JobOffer.USER_IS_ORIGINATOR,
    JobOffer.VERSION,
    JobOffer.APPROVERS,
    JobOffer.CREATED_BY_NAV,
    JobOffer.JOB_APPLICATION,
    JobOffer.JOB_OFFER_PERMISSIONS_NAV,
    JobOffer.LAST_MODIFIED_BY_NAV,
    JobOffer.LOCATION_OBJ,
    JobOffer.RESUME
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<JobOffer> = new AllFields('*', JobOffer);
  /**
   * All key fields of the JobOffer entity.
   */
  export const _keyFields: Array<Selectable<JobOffer>> = [JobOffer.OFFER_APPROVAL_ID];
  /**
   * Mapping of all key field names to the respective static field property JobOffer.
   */
  export const _keys: { [keys: string]: Selectable<JobOffer> } = JobOffer._keyFields.reduce((acc: { [keys: string]: Selectable<JobOffer> }, field: Selectable<JobOffer>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
