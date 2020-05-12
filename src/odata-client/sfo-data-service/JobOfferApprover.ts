/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { JobOfferApproverRequestBuilder } from './JobOfferApproverRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "JobOfferApprover" of service "SFOData".
 */
export class JobOfferApprover extends Entity implements JobOfferApproverType {
  /**
   * Technical entity name for JobOfferApprover.
   */
  static _entityName = 'JobOfferApprover';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for JobOfferApprover.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Approval Step Id.
   * @nullable
   */
  approvalStepId?: string;
  /**
   * Approver Action.
   * @nullable
   */
  approverAction?: string;
  /**
   * approverActionDate.
   * @nullable
   */
  approverActionDate?: Moment;
  /**
   * Approver First Name.
   */
  approverFirstName!: string;
  /**
   * Approver Last Name.
   */
  approverLastName!: string;
  /**
   * Approver Order.
   */
  approverOrder!: BigNumber;
  /**
   * Comment.
   * @nullable
   */
  comment?: string;
  /**
   * Created By.
   */
  createdBy!: string;
  /**
   * Created Date.
   */
  createdDate!: Moment;
  /**
   * Last Modified By.
   */
  lastModifiedBy!: string;
  /**
   * Last Modified Date.
   */
  lastModifiedDate!: Moment;
  /**
   * Offer Approver Id.
   */
  offerApprovalId!: BigNumber;
  /**
   * Offer Approver Id.
   */
  offerApproverId!: BigNumber;
  /**
   * Username.
   */
  username!: string;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  createdByNav!: User;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  lastModifiedByNav!: User;
  /**
   * One-to-one navigation property to the [[JobOffer]] entity.
   */
  offerApproval!: JobOffer;

  /**
   * Returns an entity builder to construct instances `JobOfferApprover`.
   * @returns A builder that constructs instances of entity type `JobOfferApprover`.
   */
  static builder(): EntityBuilderType<JobOfferApprover, JobOfferApproverTypeForceMandatory> {
    return Entity.entityBuilder(JobOfferApprover);
  }

  /**
   * Returns a request builder to construct requests for operations on the `JobOfferApprover` entity type.
   * @returns A `JobOfferApprover` request builder.
   */
  static requestBuilder(): JobOfferApproverRequestBuilder {
    return new JobOfferApproverRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobOfferApprover`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `JobOfferApprover`.
   */
  static customField(fieldName: string): CustomField<JobOfferApprover> {
    return Entity.customFieldSelector(fieldName, JobOfferApprover);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { User, UserType } from './User';
import { JobOffer, JobOfferType } from './JobOffer';

export interface JobOfferApproverType {
  approvalStepId?: string;
  approverAction?: string;
  approverActionDate?: Moment;
  approverFirstName: string;
  approverLastName: string;
  approverOrder: BigNumber;
  comment?: string;
  createdBy: string;
  createdDate: Moment;
  lastModifiedBy: string;
  lastModifiedDate: Moment;
  offerApprovalId: BigNumber;
  offerApproverId: BigNumber;
  username: string;
  createdByNav: UserType;
  lastModifiedByNav: UserType;
  offerApproval: JobOfferType;
}

export interface JobOfferApproverTypeForceMandatory {
  approvalStepId: string;
  approverAction: string;
  approverActionDate: Moment;
  approverFirstName: string;
  approverLastName: string;
  approverOrder: BigNumber;
  comment: string;
  createdBy: string;
  createdDate: Moment;
  lastModifiedBy: string;
  lastModifiedDate: Moment;
  offerApprovalId: BigNumber;
  offerApproverId: BigNumber;
  username: string;
  createdByNav: UserType;
  lastModifiedByNav: UserType;
  offerApproval: JobOfferType;
}

export namespace JobOfferApprover {
  /**
   * Static representation of the [[approvalStepId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const APPROVAL_STEP_ID: StringField<JobOfferApprover> = new StringField('approvalStepId', JobOfferApprover, 'Edm.String');
  /**
   * Static representation of the [[approverAction]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const APPROVER_ACTION: StringField<JobOfferApprover> = new StringField('approverAction', JobOfferApprover, 'Edm.String');
  /**
   * Static representation of the [[approverActionDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const APPROVER_ACTION_DATE: DateField<JobOfferApprover> = new DateField('approverActionDate', JobOfferApprover, 'Edm.DateTime');
  /**
   * Static representation of the [[approverFirstName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const APPROVER_FIRST_NAME: StringField<JobOfferApprover> = new StringField('approverFirstName', JobOfferApprover, 'Edm.String');
  /**
   * Static representation of the [[approverLastName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const APPROVER_LAST_NAME: StringField<JobOfferApprover> = new StringField('approverLastName', JobOfferApprover, 'Edm.String');
  /**
   * Static representation of the [[approverOrder]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const APPROVER_ORDER: BigNumberField<JobOfferApprover> = new BigNumberField('approverOrder', JobOfferApprover, 'Edm.Int64');
  /**
   * Static representation of the [[comment]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMMENT: StringField<JobOfferApprover> = new StringField('comment', JobOfferApprover, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<JobOfferApprover> = new StringField('createdBy', JobOfferApprover, 'Edm.String');
  /**
   * Static representation of the [[createdDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE: DateField<JobOfferApprover> = new DateField('createdDate', JobOfferApprover, 'Edm.DateTime');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<JobOfferApprover> = new StringField('lastModifiedBy', JobOfferApprover, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE: DateField<JobOfferApprover> = new DateField('lastModifiedDate', JobOfferApprover, 'Edm.DateTime');
  /**
   * Static representation of the [[offerApprovalId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OFFER_APPROVAL_ID: BigNumberField<JobOfferApprover> = new BigNumberField('offerApprovalId', JobOfferApprover, 'Edm.Int64');
  /**
   * Static representation of the [[offerApproverId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OFFER_APPROVER_ID: BigNumberField<JobOfferApprover> = new BigNumberField('offerApproverId', JobOfferApprover, 'Edm.Int64');
  /**
   * Static representation of the [[username]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USERNAME: StringField<JobOfferApprover> = new StringField('username', JobOfferApprover, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<JobOfferApprover, User> = new OneToOneLink('createdByNav', JobOfferApprover, User);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<JobOfferApprover, User> = new OneToOneLink('lastModifiedByNav', JobOfferApprover, User);
  /**
   * Static representation of the one-to-one navigation property [[offerApproval]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OFFER_APPROVAL: OneToOneLink<JobOfferApprover, JobOffer> = new OneToOneLink('offerApproval', JobOfferApprover, JobOffer);
  /**
   * All fields of the JobOfferApprover entity.
   */
  export const _allFields: Array<StringField<JobOfferApprover> | DateField<JobOfferApprover> | BigNumberField<JobOfferApprover> | OneToOneLink<JobOfferApprover, User> | OneToOneLink<JobOfferApprover, JobOffer>> = [
    JobOfferApprover.APPROVAL_STEP_ID,
    JobOfferApprover.APPROVER_ACTION,
    JobOfferApprover.APPROVER_ACTION_DATE,
    JobOfferApprover.APPROVER_FIRST_NAME,
    JobOfferApprover.APPROVER_LAST_NAME,
    JobOfferApprover.APPROVER_ORDER,
    JobOfferApprover.COMMENT,
    JobOfferApprover.CREATED_BY,
    JobOfferApprover.CREATED_DATE,
    JobOfferApprover.LAST_MODIFIED_BY,
    JobOfferApprover.LAST_MODIFIED_DATE,
    JobOfferApprover.OFFER_APPROVAL_ID,
    JobOfferApprover.OFFER_APPROVER_ID,
    JobOfferApprover.USERNAME,
    JobOfferApprover.CREATED_BY_NAV,
    JobOfferApprover.LAST_MODIFIED_BY_NAV,
    JobOfferApprover.OFFER_APPROVAL
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<JobOfferApprover> = new AllFields('*', JobOfferApprover);
  /**
   * All key fields of the JobOfferApprover entity.
   */
  export const _keyFields: Array<Selectable<JobOfferApprover>> = [JobOfferApprover.OFFER_APPROVER_ID];
  /**
   * Mapping of all key field names to the respective static field property JobOfferApprover.
   */
  export const _keys: { [keys: string]: Selectable<JobOfferApprover> } = JobOfferApprover._keyFields.reduce((acc: { [keys: string]: Selectable<JobOfferApprover> }, field: Selectable<JobOfferApprover>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
