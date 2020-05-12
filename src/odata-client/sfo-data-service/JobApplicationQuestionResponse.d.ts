import { JobApplicationQuestionResponseRequestBuilder } from './JobApplicationQuestionResponseRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, Entity, EntityBuilderType, NumberField, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "JobApplicationQuestionResponse" of service "SFOData".
 */
export declare class JobApplicationQuestionResponse extends Entity implements JobApplicationQuestionResponseType {
    /**
     * Technical entity name for JobApplicationQuestionResponse.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for JobApplicationQuestionResponse.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
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
    applicationId: BigNumber;
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
    order: BigNumber;
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
    jobApplication: JobApplication;
    /**
     * Returns an entity builder to construct instances `JobApplicationQuestionResponse`.
     * @returns A builder that constructs instances of entity type `JobApplicationQuestionResponse`.
     */
    static builder(): EntityBuilderType<JobApplicationQuestionResponse, JobApplicationQuestionResponseTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `JobApplicationQuestionResponse` entity type.
     * @returns A `JobApplicationQuestionResponse` request builder.
     */
    static requestBuilder(): JobApplicationQuestionResponseRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobApplicationQuestionResponse`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `JobApplicationQuestionResponse`.
     */
    static customField(fieldName: string): CustomField<JobApplicationQuestionResponse>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
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
export declare namespace JobApplicationQuestionResponse {
    /**
     * Static representation of the [[answer]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ANSWER: StringField<JobApplicationQuestionResponse>;
    /**
     * Static representation of the [[appLocale]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const APP_LOCALE: StringField<JobApplicationQuestionResponse>;
    /**
     * Static representation of the [[applicationId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const APPLICATION_ID: BigNumberField<JobApplicationQuestionResponse>;
    /**
     * Static representation of the [[expectedAnswer]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXPECTED_ANSWER: StringField<JobApplicationQuestionResponse>;
    /**
     * Static representation of the [[expectedAnswerValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXPECTED_ANSWER_VALUE: NumberField<JobApplicationQuestionResponse>;
    /**
     * Static representation of the [[highLow]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HIGH_LOW: StringField<JobApplicationQuestionResponse>;
    /**
     * Static representation of the [[maxLength]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MAX_LENGTH: NumberField<JobApplicationQuestionResponse>;
    /**
     * Static representation of the [[order]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ORDER: BigNumberField<JobApplicationQuestionResponse>;
    /**
     * Static representation of the [[question]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const QUESTION: StringField<JobApplicationQuestionResponse>;
    /**
     * Static representation of the [[questionResponse]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const QUESTION_RESPONSE: StringField<JobApplicationQuestionResponse>;
    /**
     * Static representation of the [[type]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TYPE: StringField<JobApplicationQuestionResponse>;
    /**
     * Static representation of the one-to-one navigation property [[jobApplication]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_APPLICATION: OneToOneLink<JobApplicationQuestionResponse, JobApplication>;
    /**
     * All fields of the JobApplicationQuestionResponse entity.
     */
    const _allFields: Array<StringField<JobApplicationQuestionResponse> | BigNumberField<JobApplicationQuestionResponse> | NumberField<JobApplicationQuestionResponse> | OneToOneLink<JobApplicationQuestionResponse, JobApplication>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<JobApplicationQuestionResponse>;
    /**
     * All key fields of the JobApplicationQuestionResponse entity.
     */
    const _keyFields: Array<Selectable<JobApplicationQuestionResponse>>;
    /**
     * Mapping of all key field names to the respective static field property JobApplicationQuestionResponse.
     */
    const _keys: {
        [keys: string]: Selectable<JobApplicationQuestionResponse>;
    };
}
//# sourceMappingURL=JobApplicationQuestionResponse.d.ts.map