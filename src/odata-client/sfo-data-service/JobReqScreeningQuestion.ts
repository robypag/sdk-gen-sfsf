/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { JobReqScreeningQuestionRequestBuilder } from './JobReqScreeningQuestionRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, Entity, EntityBuilderType, Link, NumberField, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "JobReqScreeningQuestion" of service "SFOData".
 */
export class JobReqScreeningQuestion extends Entity implements JobReqScreeningQuestionType {
  /**
   * Technical entity name for JobReqScreeningQuestion.
   */
  static _entityName = 'JobReqScreeningQuestion';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for JobReqScreeningQuestion.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Applicant must answer correctly.
   */
  disqualifier!: boolean;
  /**
   * JobReq Question Expected Answer Value.
   */
  expectedAnswerValue!: number;
  /**
   * JobReq Question Expected Dir.
   */
  expectedDir!: string;
  /**
   * JobReq Content.
   */
  jobReqContent!: string;
  /**
   * Job Requisition Id.
   */
  jobReqId!: BigNumber;
  /**
   * JobReq Question Locale.
   */
  locale!: string;
  /**
   * JobReq Question Max Length.
   */
  maxLength!: BigNumber;
  /**
   * JobReq Question Order.
   */
  order!: BigNumber;
  /**
   * JobReq Question Description.
   */
  questionDescription!: string;
  /**
   * Question Id.
   */
  questionId!: BigNumber;
  /**
   * JobReq Question Name.
   */
  questionName!: string;
  /**
   * JobReq Question Parent Id.
   */
  questionParentId!: BigNumber;
  /**
   * JobReq Question Parent Response.
   */
  questionParentResponse!: string;
  /**
   * JobReq Question Type.
   */
  questionType!: string;
  /**
   * Job Req Question Weight.
   */
  questionWeight!: number;
  /**
   * Answer range.
   */
  ratingScale!: string;
  /**
   * Applicant must answer.
   */
  required!: boolean;
  /**
   * Include in screening score.
   */
  score!: boolean;
  /**
   * One-to-many navigation property to the [[JobReqScreeningQuestionChoice]] entity.
   */
  choices!: JobReqScreeningQuestionChoice[];
  /**
   * One-to-one navigation property to the [[JobRequisition]] entity.
   */
  jobRequisition!: JobRequisition;

  /**
   * Returns an entity builder to construct instances `JobReqScreeningQuestion`.
   * @returns A builder that constructs instances of entity type `JobReqScreeningQuestion`.
   */
  static builder(): EntityBuilderType<JobReqScreeningQuestion, JobReqScreeningQuestionTypeForceMandatory> {
    return Entity.entityBuilder(JobReqScreeningQuestion);
  }

  /**
   * Returns a request builder to construct requests for operations on the `JobReqScreeningQuestion` entity type.
   * @returns A `JobReqScreeningQuestion` request builder.
   */
  static requestBuilder(): JobReqScreeningQuestionRequestBuilder {
    return new JobReqScreeningQuestionRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobReqScreeningQuestion`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `JobReqScreeningQuestion`.
   */
  static customField(fieldName: string): CustomField<JobReqScreeningQuestion> {
    return Entity.customFieldSelector(fieldName, JobReqScreeningQuestion);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { JobReqScreeningQuestionChoice, JobReqScreeningQuestionChoiceType } from './JobReqScreeningQuestionChoice';
import { JobRequisition, JobRequisitionType } from './JobRequisition';

export interface JobReqScreeningQuestionType {
  disqualifier: boolean;
  expectedAnswerValue: number;
  expectedDir: string;
  jobReqContent: string;
  jobReqId: BigNumber;
  locale: string;
  maxLength: BigNumber;
  order: BigNumber;
  questionDescription: string;
  questionId: BigNumber;
  questionName: string;
  questionParentId: BigNumber;
  questionParentResponse: string;
  questionType: string;
  questionWeight: number;
  ratingScale: string;
  required: boolean;
  score: boolean;
  choices: JobReqScreeningQuestionChoiceType[];
  jobRequisition: JobRequisitionType;
}

export interface JobReqScreeningQuestionTypeForceMandatory {
  disqualifier: boolean;
  expectedAnswerValue: number;
  expectedDir: string;
  jobReqContent: string;
  jobReqId: BigNumber;
  locale: string;
  maxLength: BigNumber;
  order: BigNumber;
  questionDescription: string;
  questionId: BigNumber;
  questionName: string;
  questionParentId: BigNumber;
  questionParentResponse: string;
  questionType: string;
  questionWeight: number;
  ratingScale: string;
  required: boolean;
  score: boolean;
  choices: JobReqScreeningQuestionChoiceType[];
  jobRequisition: JobRequisitionType;
}

export namespace JobReqScreeningQuestion {
  /**
   * Static representation of the [[disqualifier]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DISQUALIFIER: BooleanField<JobReqScreeningQuestion> = new BooleanField('disqualifier', JobReqScreeningQuestion, 'Edm.Boolean');
  /**
   * Static representation of the [[expectedAnswerValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXPECTED_ANSWER_VALUE: NumberField<JobReqScreeningQuestion> = new NumberField('expectedAnswerValue', JobReqScreeningQuestion, 'Edm.Double');
  /**
   * Static representation of the [[expectedDir]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXPECTED_DIR: StringField<JobReqScreeningQuestion> = new StringField('expectedDir', JobReqScreeningQuestion, 'Edm.String');
  /**
   * Static representation of the [[jobReqContent]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_REQ_CONTENT: StringField<JobReqScreeningQuestion> = new StringField('jobReqContent', JobReqScreeningQuestion, 'Edm.String');
  /**
   * Static representation of the [[jobReqId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_REQ_ID: BigNumberField<JobReqScreeningQuestion> = new BigNumberField('jobReqId', JobReqScreeningQuestion, 'Edm.Int64');
  /**
   * Static representation of the [[locale]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LOCALE: StringField<JobReqScreeningQuestion> = new StringField('locale', JobReqScreeningQuestion, 'Edm.String');
  /**
   * Static representation of the [[maxLength]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MAX_LENGTH: BigNumberField<JobReqScreeningQuestion> = new BigNumberField('maxLength', JobReqScreeningQuestion, 'Edm.Int64');
  /**
   * Static representation of the [[order]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ORDER: BigNumberField<JobReqScreeningQuestion> = new BigNumberField('order', JobReqScreeningQuestion, 'Edm.Int64');
  /**
   * Static representation of the [[questionDescription]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const QUESTION_DESCRIPTION: StringField<JobReqScreeningQuestion> = new StringField('questionDescription', JobReqScreeningQuestion, 'Edm.String');
  /**
   * Static representation of the [[questionId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const QUESTION_ID: BigNumberField<JobReqScreeningQuestion> = new BigNumberField('questionId', JobReqScreeningQuestion, 'Edm.Int64');
  /**
   * Static representation of the [[questionName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const QUESTION_NAME: StringField<JobReqScreeningQuestion> = new StringField('questionName', JobReqScreeningQuestion, 'Edm.String');
  /**
   * Static representation of the [[questionParentId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const QUESTION_PARENT_ID: BigNumberField<JobReqScreeningQuestion> = new BigNumberField('questionParentId', JobReqScreeningQuestion, 'Edm.Int64');
  /**
   * Static representation of the [[questionParentResponse]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const QUESTION_PARENT_RESPONSE: StringField<JobReqScreeningQuestion> = new StringField('questionParentResponse', JobReqScreeningQuestion, 'Edm.String');
  /**
   * Static representation of the [[questionType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const QUESTION_TYPE: StringField<JobReqScreeningQuestion> = new StringField('questionType', JobReqScreeningQuestion, 'Edm.String');
  /**
   * Static representation of the [[questionWeight]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const QUESTION_WEIGHT: NumberField<JobReqScreeningQuestion> = new NumberField('questionWeight', JobReqScreeningQuestion, 'Edm.Double');
  /**
   * Static representation of the [[ratingScale]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RATING_SCALE: StringField<JobReqScreeningQuestion> = new StringField('ratingScale', JobReqScreeningQuestion, 'Edm.String');
  /**
   * Static representation of the [[required]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REQUIRED: BooleanField<JobReqScreeningQuestion> = new BooleanField('required', JobReqScreeningQuestion, 'Edm.Boolean');
  /**
   * Static representation of the [[score]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SCORE: BooleanField<JobReqScreeningQuestion> = new BooleanField('score', JobReqScreeningQuestion, 'Edm.Boolean');
  /**
   * Static representation of the one-to-many navigation property [[choices]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CHOICES: Link<JobReqScreeningQuestion, JobReqScreeningQuestionChoice> = new Link('choices', JobReqScreeningQuestion, JobReqScreeningQuestionChoice);
  /**
   * Static representation of the one-to-one navigation property [[jobRequisition]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_REQUISITION: OneToOneLink<JobReqScreeningQuestion, JobRequisition> = new OneToOneLink('jobRequisition', JobReqScreeningQuestion, JobRequisition);
  /**
   * All fields of the JobReqScreeningQuestion entity.
   */
  export const _allFields: Array<BooleanField<JobReqScreeningQuestion> | NumberField<JobReqScreeningQuestion> | StringField<JobReqScreeningQuestion> | BigNumberField<JobReqScreeningQuestion> | Link<JobReqScreeningQuestion, JobReqScreeningQuestionChoice> | OneToOneLink<JobReqScreeningQuestion, JobRequisition>> = [
    JobReqScreeningQuestion.DISQUALIFIER,
    JobReqScreeningQuestion.EXPECTED_ANSWER_VALUE,
    JobReqScreeningQuestion.EXPECTED_DIR,
    JobReqScreeningQuestion.JOB_REQ_CONTENT,
    JobReqScreeningQuestion.JOB_REQ_ID,
    JobReqScreeningQuestion.LOCALE,
    JobReqScreeningQuestion.MAX_LENGTH,
    JobReqScreeningQuestion.ORDER,
    JobReqScreeningQuestion.QUESTION_DESCRIPTION,
    JobReqScreeningQuestion.QUESTION_ID,
    JobReqScreeningQuestion.QUESTION_NAME,
    JobReqScreeningQuestion.QUESTION_PARENT_ID,
    JobReqScreeningQuestion.QUESTION_PARENT_RESPONSE,
    JobReqScreeningQuestion.QUESTION_TYPE,
    JobReqScreeningQuestion.QUESTION_WEIGHT,
    JobReqScreeningQuestion.RATING_SCALE,
    JobReqScreeningQuestion.REQUIRED,
    JobReqScreeningQuestion.SCORE,
    JobReqScreeningQuestion.CHOICES,
    JobReqScreeningQuestion.JOB_REQUISITION
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<JobReqScreeningQuestion> = new AllFields('*', JobReqScreeningQuestion);
  /**
   * All key fields of the JobReqScreeningQuestion entity.
   */
  export const _keyFields: Array<Selectable<JobReqScreeningQuestion>> = [JobReqScreeningQuestion.JOB_REQ_ID, JobReqScreeningQuestion.LOCALE, JobReqScreeningQuestion.ORDER];
  /**
   * Mapping of all key field names to the respective static field property JobReqScreeningQuestion.
   */
  export const _keys: { [keys: string]: Selectable<JobReqScreeningQuestion> } = JobReqScreeningQuestion._keyFields.reduce((acc: { [keys: string]: Selectable<JobReqScreeningQuestion> }, field: Selectable<JobReqScreeningQuestion>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
