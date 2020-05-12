/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { JobApplicationQuestionResponseRequestBuilder } from './JobApplicationQuestionResponseRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, Entity, EntityBuilderType, NumberField, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "JobApplicationQuestionResponse" of service "SFOData".
 */
export class JobApplicationQuestionResponse extends Entity implements JobApplicationQuestionResponseType {
  /**
   * Technical entity name for JobApplicationQuestionResponse.
   */
  static _entityName = 'JobApplicationQuestionResponse';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for JobApplicationQuestionResponse.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Answer.
   * @nullable
   */
  answer?: string;
  /**
   * Application Locale.
   * @nullable
   */
  appLocale?: string;
  /**
   * Job Application Id.
   */
  applicationId!: BigNumber;
  /**
   * Expected Answer.
   * @nullable
   */
  expectedAnswer?: string;
  /**
   * Expected Answer Value.
   * @nullable
   */
  expectedAnswerValue?: number;
  /**
   * High/Low.
   * @nullable
   */
  highLow?: string;
  /**
   * Max Length.
   * @nullable
   */
  maxLength?: number;
  /**
   * Question Order.
   */
  order!: BigNumber;
  /**
   * Question.
   * @nullable
   */
  question?: string;
  /**
   * Question Response.
   * @nullable
   */
  questionResponse?: string;
  /**
   * Type.
   * @nullable
   */
  type?: string;
  /**
   * One-to-one navigation property to the [[JobApplication]] entity.
   */
  jobApplication!: JobApplication;

  /**
   * Returns an entity builder to construct instances `JobApplicationQuestionResponse`.
   * @returns A builder that constructs instances of entity type `JobApplicationQuestionResponse`.
   */
  static builder(): EntityBuilderType<JobApplicationQuestionResponse, JobApplicationQuestionResponseTypeForceMandatory> {
    return Entity.entityBuilder(JobApplicationQuestionResponse);
  }

  /**
   * Returns a request builder to construct requests for operations on the `JobApplicationQuestionResponse` entity type.
   * @returns A `JobApplicationQuestionResponse` request builder.
   */
  static requestBuilder(): JobApplicationQuestionResponseRequestBuilder {
    return new JobApplicationQuestionResponseRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobApplicationQuestionResponse`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `JobApplicationQuestionResponse`.
   */
  static customField(fieldName: string): CustomField<JobApplicationQuestionResponse> {
    return Entity.customFieldSelector(fieldName, JobApplicationQuestionResponse);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { JobApplication, JobApplicationType } from './JobApplication';

export interface JobApplicationQuestionResponseType {
  answer?: string;
  appLocale?: string;
  applicationId: BigNumber;
  expectedAnswer?: string;
  expectedAnswerValue?: number;
  highLow?: string;
  maxLength?: number;
  order: BigNumber;
  question?: string;
  questionResponse?: string;
  type?: string;
  jobApplication: JobApplicationType;
}

export interface JobApplicationQuestionResponseTypeForceMandatory {
  answer: string;
  appLocale: string;
  applicationId: BigNumber;
  expectedAnswer: string;
  expectedAnswerValue: number;
  highLow: string;
  maxLength: number;
  order: BigNumber;
  question: string;
  questionResponse: string;
  type: string;
  jobApplication: JobApplicationType;
}

export namespace JobApplicationQuestionResponse {
  /**
   * Static representation of the [[answer]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ANSWER: StringField<JobApplicationQuestionResponse> = new StringField('answer', JobApplicationQuestionResponse, 'Edm.String');
  /**
   * Static representation of the [[appLocale]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const APP_LOCALE: StringField<JobApplicationQuestionResponse> = new StringField('appLocale', JobApplicationQuestionResponse, 'Edm.String');
  /**
   * Static representation of the [[applicationId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const APPLICATION_ID: BigNumberField<JobApplicationQuestionResponse> = new BigNumberField('applicationId', JobApplicationQuestionResponse, 'Edm.Int64');
  /**
   * Static representation of the [[expectedAnswer]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXPECTED_ANSWER: StringField<JobApplicationQuestionResponse> = new StringField('expectedAnswer', JobApplicationQuestionResponse, 'Edm.String');
  /**
   * Static representation of the [[expectedAnswerValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXPECTED_ANSWER_VALUE: NumberField<JobApplicationQuestionResponse> = new NumberField('expectedAnswerValue', JobApplicationQuestionResponse, 'Edm.Double');
  /**
   * Static representation of the [[highLow]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HIGH_LOW: StringField<JobApplicationQuestionResponse> = new StringField('highLow', JobApplicationQuestionResponse, 'Edm.String');
  /**
   * Static representation of the [[maxLength]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MAX_LENGTH: NumberField<JobApplicationQuestionResponse> = new NumberField('maxLength', JobApplicationQuestionResponse, 'Edm.Double');
  /**
   * Static representation of the [[order]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ORDER: BigNumberField<JobApplicationQuestionResponse> = new BigNumberField('order', JobApplicationQuestionResponse, 'Edm.Int64');
  /**
   * Static representation of the [[question]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const QUESTION: StringField<JobApplicationQuestionResponse> = new StringField('question', JobApplicationQuestionResponse, 'Edm.String');
  /**
   * Static representation of the [[questionResponse]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const QUESTION_RESPONSE: StringField<JobApplicationQuestionResponse> = new StringField('questionResponse', JobApplicationQuestionResponse, 'Edm.String');
  /**
   * Static representation of the [[type]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TYPE: StringField<JobApplicationQuestionResponse> = new StringField('type', JobApplicationQuestionResponse, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[jobApplication]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_APPLICATION: OneToOneLink<JobApplicationQuestionResponse, JobApplication> = new OneToOneLink('jobApplication', JobApplicationQuestionResponse, JobApplication);
  /**
   * All fields of the JobApplicationQuestionResponse entity.
   */
  export const _allFields: Array<StringField<JobApplicationQuestionResponse> | BigNumberField<JobApplicationQuestionResponse> | NumberField<JobApplicationQuestionResponse> | OneToOneLink<JobApplicationQuestionResponse, JobApplication>> = [
    JobApplicationQuestionResponse.ANSWER,
    JobApplicationQuestionResponse.APP_LOCALE,
    JobApplicationQuestionResponse.APPLICATION_ID,
    JobApplicationQuestionResponse.EXPECTED_ANSWER,
    JobApplicationQuestionResponse.EXPECTED_ANSWER_VALUE,
    JobApplicationQuestionResponse.HIGH_LOW,
    JobApplicationQuestionResponse.MAX_LENGTH,
    JobApplicationQuestionResponse.ORDER,
    JobApplicationQuestionResponse.QUESTION,
    JobApplicationQuestionResponse.QUESTION_RESPONSE,
    JobApplicationQuestionResponse.TYPE,
    JobApplicationQuestionResponse.JOB_APPLICATION
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<JobApplicationQuestionResponse> = new AllFields('*', JobApplicationQuestionResponse);
  /**
   * All key fields of the JobApplicationQuestionResponse entity.
   */
  export const _keyFields: Array<Selectable<JobApplicationQuestionResponse>> = [JobApplicationQuestionResponse.APPLICATION_ID, JobApplicationQuestionResponse.ORDER];
  /**
   * Mapping of all key field names to the respective static field property JobApplicationQuestionResponse.
   */
  export const _keys: { [keys: string]: Selectable<JobApplicationQuestionResponse> } = JobApplicationQuestionResponse._keyFields.reduce((acc: { [keys: string]: Selectable<JobApplicationQuestionResponse> }, field: Selectable<JobApplicationQuestionResponse>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
