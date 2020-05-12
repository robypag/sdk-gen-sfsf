/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { JobRequisitionGroupOperatorRequestBuilder } from './JobRequisitionGroupOperatorRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "JobRequisitionGroupOperator" of service "SFOData".
 */
export class JobRequisitionGroupOperator extends Entity implements JobRequisitionGroupOperatorType {
  /**
   * Technical entity name for JobRequisitionGroupOperator.
   */
  static _entityName = 'JobRequisitionGroupOperator';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for JobRequisitionGroupOperator.
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
  adminSelectedGroupToBeRemoved?: boolean;
  /**
   * Is Admin Selected.
   */
  isAdminSelected!: boolean;
  /**
   * Is Disabled.
   * @nullable
   */
  isDisabled?: boolean;
  /**
   * Job Requisition Id.
   */
  jobReqId!: BigNumber;
  /**
   * Job Requisition Id.
   */
  operatorRole!: string;
  /**
   * User Group Id.
   */
  userGroupId!: BigNumber;
  /**
   * Operator First Name.
   */
  userGroupName!: string;
  /**
   * One-to-one navigation property to the [[JobRequisition]] entity.
   */
  jobRequisition!: JobRequisition;

  /**
   * Returns an entity builder to construct instances `JobRequisitionGroupOperator`.
   * @returns A builder that constructs instances of entity type `JobRequisitionGroupOperator`.
   */
  static builder(): EntityBuilderType<JobRequisitionGroupOperator, JobRequisitionGroupOperatorTypeForceMandatory> {
    return Entity.entityBuilder(JobRequisitionGroupOperator);
  }

  /**
   * Returns a request builder to construct requests for operations on the `JobRequisitionGroupOperator` entity type.
   * @returns A `JobRequisitionGroupOperator` request builder.
   */
  static requestBuilder(): JobRequisitionGroupOperatorRequestBuilder {
    return new JobRequisitionGroupOperatorRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobRequisitionGroupOperator`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `JobRequisitionGroupOperator`.
   */
  static customField(fieldName: string): CustomField<JobRequisitionGroupOperator> {
    return Entity.customFieldSelector(fieldName, JobRequisitionGroupOperator);
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

export interface JobRequisitionGroupOperatorType {
  adminSelectedGroupToBeRemoved?: boolean;
  isAdminSelected: boolean;
  isDisabled?: boolean;
  jobReqId: BigNumber;
  operatorRole: string;
  userGroupId: BigNumber;
  userGroupName: string;
  jobRequisition: JobRequisitionType;
}

export interface JobRequisitionGroupOperatorTypeForceMandatory {
  adminSelectedGroupToBeRemoved: boolean;
  isAdminSelected: boolean;
  isDisabled: boolean;
  jobReqId: BigNumber;
  operatorRole: string;
  userGroupId: BigNumber;
  userGroupName: string;
  jobRequisition: JobRequisitionType;
}

export namespace JobRequisitionGroupOperator {
  /**
   * Static representation of the [[adminSelectedGroupToBeRemoved]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADMIN_SELECTED_GROUP_TO_BE_REMOVED: BooleanField<JobRequisitionGroupOperator> = new BooleanField('adminSelectedGroupToBeRemoved', JobRequisitionGroupOperator, 'Edm.Boolean');
  /**
   * Static representation of the [[isAdminSelected]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_ADMIN_SELECTED: BooleanField<JobRequisitionGroupOperator> = new BooleanField('isAdminSelected', JobRequisitionGroupOperator, 'Edm.Boolean');
  /**
   * Static representation of the [[isDisabled]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_DISABLED: BooleanField<JobRequisitionGroupOperator> = new BooleanField('isDisabled', JobRequisitionGroupOperator, 'Edm.Boolean');
  /**
   * Static representation of the [[jobReqId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_REQ_ID: BigNumberField<JobRequisitionGroupOperator> = new BigNumberField('jobReqId', JobRequisitionGroupOperator, 'Edm.Int64');
  /**
   * Static representation of the [[operatorRole]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OPERATOR_ROLE: StringField<JobRequisitionGroupOperator> = new StringField('operatorRole', JobRequisitionGroupOperator, 'Edm.String');
  /**
   * Static representation of the [[userGroupId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_GROUP_ID: BigNumberField<JobRequisitionGroupOperator> = new BigNumberField('userGroupId', JobRequisitionGroupOperator, 'Edm.Int64');
  /**
   * Static representation of the [[userGroupName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_GROUP_NAME: StringField<JobRequisitionGroupOperator> = new StringField('userGroupName', JobRequisitionGroupOperator, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[jobRequisition]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_REQUISITION: OneToOneLink<JobRequisitionGroupOperator, JobRequisition> = new OneToOneLink('jobRequisition', JobRequisitionGroupOperator, JobRequisition);
  /**
   * All fields of the JobRequisitionGroupOperator entity.
   */
  export const _allFields: Array<BooleanField<JobRequisitionGroupOperator> | BigNumberField<JobRequisitionGroupOperator> | StringField<JobRequisitionGroupOperator> | OneToOneLink<JobRequisitionGroupOperator, JobRequisition>> = [
    JobRequisitionGroupOperator.ADMIN_SELECTED_GROUP_TO_BE_REMOVED,
    JobRequisitionGroupOperator.IS_ADMIN_SELECTED,
    JobRequisitionGroupOperator.IS_DISABLED,
    JobRequisitionGroupOperator.JOB_REQ_ID,
    JobRequisitionGroupOperator.OPERATOR_ROLE,
    JobRequisitionGroupOperator.USER_GROUP_ID,
    JobRequisitionGroupOperator.USER_GROUP_NAME,
    JobRequisitionGroupOperator.JOB_REQUISITION
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<JobRequisitionGroupOperator> = new AllFields('*', JobRequisitionGroupOperator);
  /**
   * All key fields of the JobRequisitionGroupOperator entity.
   */
  export const _keyFields: Array<Selectable<JobRequisitionGroupOperator>> = [JobRequisitionGroupOperator.JOB_REQ_ID, JobRequisitionGroupOperator.OPERATOR_ROLE, JobRequisitionGroupOperator.USER_GROUP_ID];
  /**
   * Mapping of all key field names to the respective static field property JobRequisitionGroupOperator.
   */
  export const _keys: { [keys: string]: Selectable<JobRequisitionGroupOperator> } = JobRequisitionGroupOperator._keyFields.reduce((acc: { [keys: string]: Selectable<JobRequisitionGroupOperator> }, field: Selectable<JobRequisitionGroupOperator>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
