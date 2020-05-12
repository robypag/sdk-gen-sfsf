/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { JobRequisitionOperatorRequestBuilder } from './JobRequisitionOperatorRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "JobRequisitionOperator" of service "SFOData".
 */
export class JobRequisitionOperator extends Entity implements JobRequisitionOperatorType {
  /**
   * Technical entity name for JobRequisitionOperator.
   */
  static _entityName = 'JobRequisitionOperator';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for JobRequisitionOperator.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * AdminSelectedUserToBeRemoved.
   * @nullable
   */
  adminSelectedUserToBeRemoved?: boolean;
  /**
   * Operator email id.
   */
  email!: string;
  /**
   * Operator fax.
   */
  fax!: string;
  /**
   * Operator First Name.
   */
  firstName!: string;
  /**
   * Is Admin Selected.
   */
  isAdminSelected!: boolean;
  /**
   * Job Requisition Id.
   */
  jobReqId!: BigNumber;
  /**
   * Operator Last Name.
   */
  lastName!: string;
  /**
   * Job Requisition Id.
   */
  operatorRole!: string;
  /**
   * Operator phone number.
   */
  phone!: string;
  /**
   * Operator Username.
   */
  userName!: string;
  /**
   * Operator Users Sys.
   */
  usersSysId!: string;
  /**
   * One-to-one navigation property to the [[JobRequisition]] entity.
   */
  jobRequisition!: JobRequisition;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  userNav!: User;

  /**
   * Returns an entity builder to construct instances `JobRequisitionOperator`.
   * @returns A builder that constructs instances of entity type `JobRequisitionOperator`.
   */
  static builder(): EntityBuilderType<JobRequisitionOperator, JobRequisitionOperatorTypeForceMandatory> {
    return Entity.entityBuilder(JobRequisitionOperator);
  }

  /**
   * Returns a request builder to construct requests for operations on the `JobRequisitionOperator` entity type.
   * @returns A `JobRequisitionOperator` request builder.
   */
  static requestBuilder(): JobRequisitionOperatorRequestBuilder {
    return new JobRequisitionOperatorRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobRequisitionOperator`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `JobRequisitionOperator`.
   */
  static customField(fieldName: string): CustomField<JobRequisitionOperator> {
    return Entity.customFieldSelector(fieldName, JobRequisitionOperator);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { JobRequisition, JobRequisitionType } from './JobRequisition';
import { User, UserType } from './User';

export interface JobRequisitionOperatorType {
  adminSelectedUserToBeRemoved?: boolean;
  email: string;
  fax: string;
  firstName: string;
  isAdminSelected: boolean;
  jobReqId: BigNumber;
  lastName: string;
  operatorRole: string;
  phone: string;
  userName: string;
  usersSysId: string;
  jobRequisition: JobRequisitionType;
  userNav: UserType;
}

export interface JobRequisitionOperatorTypeForceMandatory {
  adminSelectedUserToBeRemoved: boolean;
  email: string;
  fax: string;
  firstName: string;
  isAdminSelected: boolean;
  jobReqId: BigNumber;
  lastName: string;
  operatorRole: string;
  phone: string;
  userName: string;
  usersSysId: string;
  jobRequisition: JobRequisitionType;
  userNav: UserType;
}

export namespace JobRequisitionOperator {
  /**
   * Static representation of the [[adminSelectedUserToBeRemoved]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADMIN_SELECTED_USER_TO_BE_REMOVED: BooleanField<JobRequisitionOperator> = new BooleanField('adminSelectedUserToBeRemoved', JobRequisitionOperator, 'Edm.Boolean');
  /**
   * Static representation of the [[email]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMAIL: StringField<JobRequisitionOperator> = new StringField('email', JobRequisitionOperator, 'Edm.String');
  /**
   * Static representation of the [[fax]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FAX: StringField<JobRequisitionOperator> = new StringField('fax', JobRequisitionOperator, 'Edm.String');
  /**
   * Static representation of the [[firstName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FIRST_NAME: StringField<JobRequisitionOperator> = new StringField('firstName', JobRequisitionOperator, 'Edm.String');
  /**
   * Static representation of the [[isAdminSelected]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_ADMIN_SELECTED: BooleanField<JobRequisitionOperator> = new BooleanField('isAdminSelected', JobRequisitionOperator, 'Edm.Boolean');
  /**
   * Static representation of the [[jobReqId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_REQ_ID: BigNumberField<JobRequisitionOperator> = new BigNumberField('jobReqId', JobRequisitionOperator, 'Edm.Int64');
  /**
   * Static representation of the [[lastName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_NAME: StringField<JobRequisitionOperator> = new StringField('lastName', JobRequisitionOperator, 'Edm.String');
  /**
   * Static representation of the [[operatorRole]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OPERATOR_ROLE: StringField<JobRequisitionOperator> = new StringField('operatorRole', JobRequisitionOperator, 'Edm.String');
  /**
   * Static representation of the [[phone]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PHONE: StringField<JobRequisitionOperator> = new StringField('phone', JobRequisitionOperator, 'Edm.String');
  /**
   * Static representation of the [[userName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_NAME: StringField<JobRequisitionOperator> = new StringField('userName', JobRequisitionOperator, 'Edm.String');
  /**
   * Static representation of the [[usersSysId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USERS_SYS_ID: StringField<JobRequisitionOperator> = new StringField('usersSysId', JobRequisitionOperator, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[jobRequisition]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_REQUISITION: OneToOneLink<JobRequisitionOperator, JobRequisition> = new OneToOneLink('jobRequisition', JobRequisitionOperator, JobRequisition);
  /**
   * Static representation of the one-to-one navigation property [[userNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_NAV: OneToOneLink<JobRequisitionOperator, User> = new OneToOneLink('userNav', JobRequisitionOperator, User);
  /**
   * All fields of the JobRequisitionOperator entity.
   */
  export const _allFields: Array<BooleanField<JobRequisitionOperator> | StringField<JobRequisitionOperator> | BigNumberField<JobRequisitionOperator> | OneToOneLink<JobRequisitionOperator, JobRequisition> | OneToOneLink<JobRequisitionOperator, User>> = [
    JobRequisitionOperator.ADMIN_SELECTED_USER_TO_BE_REMOVED,
    JobRequisitionOperator.EMAIL,
    JobRequisitionOperator.FAX,
    JobRequisitionOperator.FIRST_NAME,
    JobRequisitionOperator.IS_ADMIN_SELECTED,
    JobRequisitionOperator.JOB_REQ_ID,
    JobRequisitionOperator.LAST_NAME,
    JobRequisitionOperator.OPERATOR_ROLE,
    JobRequisitionOperator.PHONE,
    JobRequisitionOperator.USER_NAME,
    JobRequisitionOperator.USERS_SYS_ID,
    JobRequisitionOperator.JOB_REQUISITION,
    JobRequisitionOperator.USER_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<JobRequisitionOperator> = new AllFields('*', JobRequisitionOperator);
  /**
   * All key fields of the JobRequisitionOperator entity.
   */
  export const _keyFields: Array<Selectable<JobRequisitionOperator>> = [JobRequisitionOperator.JOB_REQ_ID, JobRequisitionOperator.OPERATOR_ROLE];
  /**
   * Mapping of all key field names to the respective static field property JobRequisitionOperator.
   */
  export const _keys: { [keys: string]: Selectable<JobRequisitionOperator> } = JobRequisitionOperator._keyFields.reduce((acc: { [keys: string]: Selectable<JobRequisitionOperator> }, field: Selectable<JobRequisitionOperator>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
