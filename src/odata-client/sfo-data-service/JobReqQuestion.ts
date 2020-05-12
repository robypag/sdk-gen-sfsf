/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { JobReqQuestionRequestBuilder } from './JobReqQuestionRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, Entity, EntityBuilderType, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "JobReqQuestion" of service "SFOData".
 */
export class JobReqQuestion extends Entity implements JobReqQuestionType {
  /**
   * Technical entity name for JobReqQuestion.
   */
  static _entityName = 'JobReqQuestion';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for JobReqQuestion.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Question Category.
   */
  questionCategory!: string;
  /**
   * Question Id.
   */
  questionId!: BigNumber;
  /**
   * Question Name.
   */
  questionName!: string;
  /**
   * Question Source.
   */
  questionSource!: string;
  /**
   * Question Type.
   */
  questionType!: string;

  /**
   * Returns an entity builder to construct instances `JobReqQuestion`.
   * @returns A builder that constructs instances of entity type `JobReqQuestion`.
   */
  static builder(): EntityBuilderType<JobReqQuestion, JobReqQuestionTypeForceMandatory> {
    return Entity.entityBuilder(JobReqQuestion);
  }

  /**
   * Returns a request builder to construct requests for operations on the `JobReqQuestion` entity type.
   * @returns A `JobReqQuestion` request builder.
   */
  static requestBuilder(): JobReqQuestionRequestBuilder {
    return new JobReqQuestionRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobReqQuestion`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `JobReqQuestion`.
   */
  static customField(fieldName: string): CustomField<JobReqQuestion> {
    return Entity.customFieldSelector(fieldName, JobReqQuestion);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface JobReqQuestionType {
  questionCategory: string;
  questionId: BigNumber;
  questionName: string;
  questionSource: string;
  questionType: string;
}

export interface JobReqQuestionTypeForceMandatory {
  questionCategory: string;
  questionId: BigNumber;
  questionName: string;
  questionSource: string;
  questionType: string;
}

export namespace JobReqQuestion {
  /**
   * Static representation of the [[questionCategory]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const QUESTION_CATEGORY: StringField<JobReqQuestion> = new StringField('questionCategory', JobReqQuestion, 'Edm.String');
  /**
   * Static representation of the [[questionId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const QUESTION_ID: BigNumberField<JobReqQuestion> = new BigNumberField('questionId', JobReqQuestion, 'Edm.Int64');
  /**
   * Static representation of the [[questionName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const QUESTION_NAME: StringField<JobReqQuestion> = new StringField('questionName', JobReqQuestion, 'Edm.String');
  /**
   * Static representation of the [[questionSource]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const QUESTION_SOURCE: StringField<JobReqQuestion> = new StringField('questionSource', JobReqQuestion, 'Edm.String');
  /**
   * Static representation of the [[questionType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const QUESTION_TYPE: StringField<JobReqQuestion> = new StringField('questionType', JobReqQuestion, 'Edm.String');
  /**
   * All fields of the JobReqQuestion entity.
   */
  export const _allFields: Array<StringField<JobReqQuestion> | BigNumberField<JobReqQuestion>> = [
    JobReqQuestion.QUESTION_CATEGORY,
    JobReqQuestion.QUESTION_ID,
    JobReqQuestion.QUESTION_NAME,
    JobReqQuestion.QUESTION_SOURCE,
    JobReqQuestion.QUESTION_TYPE
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<JobReqQuestion> = new AllFields('*', JobReqQuestion);
  /**
   * All key fields of the JobReqQuestion entity.
   */
  export const _keyFields: Array<Selectable<JobReqQuestion>> = [JobReqQuestion.QUESTION_ID];
  /**
   * Mapping of all key field names to the respective static field property JobReqQuestion.
   */
  export const _keys: { [keys: string]: Selectable<JobReqQuestion> } = JobReqQuestion._keyFields.reduce((acc: { [keys: string]: Selectable<JobReqQuestion> }, field: Selectable<JobReqQuestion>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
