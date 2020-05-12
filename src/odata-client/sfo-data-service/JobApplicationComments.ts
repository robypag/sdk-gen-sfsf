/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { JobApplicationCommentsRequestBuilder } from './JobApplicationCommentsRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "JobApplicationComments" of service "SFOData".
 */
export class JobApplicationComments extends Entity implements JobApplicationCommentsType {
  /**
   * Technical entity name for JobApplicationComments.
   */
  static _entityName = 'JobApplicationComments';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for JobApplicationComments.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Application Id.
   * @nullable
   */
  applicationId?: BigNumber;
  /**
   * Associated Comment Id.
   * @nullable
   */
  associatedCommentId?: BigNumber;
  /**
   * Associated Id.
   * @nullable
   */
  associatedId?: string;
  /**
   * Comment Id.
   */
  commentId!: BigNumber;
  /**
   * Commentator.
   * @nullable
   */
  commentator?: string;
  /**
   * Content.
   * @nullable
   */
  content?: string;
  /**
   * Has Associated Comment.
   * @nullable
   */
  hasAssociatedComment?: string;
  /**
   * Migrated Commentator User Name.
   * @nullable
   */
  migratedCommentatorUserName?: string;
  /**
   * Reference Type.
   * @nullable
   */
  refType?: string;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  commentatorNav!: User;
  /**
   * One-to-one navigation property to the [[JobApplication]] entity.
   */
  jobApplication!: JobApplication;

  /**
   * Returns an entity builder to construct instances `JobApplicationComments`.
   * @returns A builder that constructs instances of entity type `JobApplicationComments`.
   */
  static builder(): EntityBuilderType<JobApplicationComments, JobApplicationCommentsTypeForceMandatory> {
    return Entity.entityBuilder(JobApplicationComments);
  }

  /**
   * Returns a request builder to construct requests for operations on the `JobApplicationComments` entity type.
   * @returns A `JobApplicationComments` request builder.
   */
  static requestBuilder(): JobApplicationCommentsRequestBuilder {
    return new JobApplicationCommentsRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobApplicationComments`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `JobApplicationComments`.
   */
  static customField(fieldName: string): CustomField<JobApplicationComments> {
    return Entity.customFieldSelector(fieldName, JobApplicationComments);
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
import { JobApplication, JobApplicationType } from './JobApplication';

export interface JobApplicationCommentsType {
  applicationId?: BigNumber;
  associatedCommentId?: BigNumber;
  associatedId?: string;
  commentId: BigNumber;
  commentator?: string;
  content?: string;
  hasAssociatedComment?: string;
  migratedCommentatorUserName?: string;
  refType?: string;
  commentatorNav: UserType;
  jobApplication: JobApplicationType;
}

export interface JobApplicationCommentsTypeForceMandatory {
  applicationId: BigNumber;
  associatedCommentId: BigNumber;
  associatedId: string;
  commentId: BigNumber;
  commentator: string;
  content: string;
  hasAssociatedComment: string;
  migratedCommentatorUserName: string;
  refType: string;
  commentatorNav: UserType;
  jobApplication: JobApplicationType;
}

export namespace JobApplicationComments {
  /**
   * Static representation of the [[applicationId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const APPLICATION_ID: BigNumberField<JobApplicationComments> = new BigNumberField('applicationId', JobApplicationComments, 'Edm.Int64');
  /**
   * Static representation of the [[associatedCommentId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ASSOCIATED_COMMENT_ID: BigNumberField<JobApplicationComments> = new BigNumberField('associatedCommentId', JobApplicationComments, 'Edm.Int64');
  /**
   * Static representation of the [[associatedId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ASSOCIATED_ID: StringField<JobApplicationComments> = new StringField('associatedId', JobApplicationComments, 'Edm.String');
  /**
   * Static representation of the [[commentId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMMENT_ID: BigNumberField<JobApplicationComments> = new BigNumberField('commentId', JobApplicationComments, 'Edm.Int64');
  /**
   * Static representation of the [[commentator]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMMENTATOR: StringField<JobApplicationComments> = new StringField('commentator', JobApplicationComments, 'Edm.String');
  /**
   * Static representation of the [[content]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONTENT: StringField<JobApplicationComments> = new StringField('content', JobApplicationComments, 'Edm.String');
  /**
   * Static representation of the [[hasAssociatedComment]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HAS_ASSOCIATED_COMMENT: StringField<JobApplicationComments> = new StringField('hasAssociatedComment', JobApplicationComments, 'Edm.String');
  /**
   * Static representation of the [[migratedCommentatorUserName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MIGRATED_COMMENTATOR_USER_NAME: StringField<JobApplicationComments> = new StringField('migratedCommentatorUserName', JobApplicationComments, 'Edm.String');
  /**
   * Static representation of the [[refType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REF_TYPE: StringField<JobApplicationComments> = new StringField('refType', JobApplicationComments, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[commentatorNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMMENTATOR_NAV: OneToOneLink<JobApplicationComments, User> = new OneToOneLink('commentatorNav', JobApplicationComments, User);
  /**
   * Static representation of the one-to-one navigation property [[jobApplication]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_APPLICATION: OneToOneLink<JobApplicationComments, JobApplication> = new OneToOneLink('jobApplication', JobApplicationComments, JobApplication);
  /**
   * All fields of the JobApplicationComments entity.
   */
  export const _allFields: Array<BigNumberField<JobApplicationComments> | StringField<JobApplicationComments> | OneToOneLink<JobApplicationComments, User> | OneToOneLink<JobApplicationComments, JobApplication>> = [
    JobApplicationComments.APPLICATION_ID,
    JobApplicationComments.ASSOCIATED_COMMENT_ID,
    JobApplicationComments.ASSOCIATED_ID,
    JobApplicationComments.COMMENT_ID,
    JobApplicationComments.COMMENTATOR,
    JobApplicationComments.CONTENT,
    JobApplicationComments.HAS_ASSOCIATED_COMMENT,
    JobApplicationComments.MIGRATED_COMMENTATOR_USER_NAME,
    JobApplicationComments.REF_TYPE,
    JobApplicationComments.COMMENTATOR_NAV,
    JobApplicationComments.JOB_APPLICATION
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<JobApplicationComments> = new AllFields('*', JobApplicationComments);
  /**
   * All key fields of the JobApplicationComments entity.
   */
  export const _keyFields: Array<Selectable<JobApplicationComments>> = [JobApplicationComments.COMMENT_ID];
  /**
   * Mapping of all key field names to the respective static field property JobApplicationComments.
   */
  export const _keys: { [keys: string]: Selectable<JobApplicationComments> } = JobApplicationComments._keyFields.reduce((acc: { [keys: string]: Selectable<JobApplicationComments> }, field: Selectable<JobApplicationComments>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
