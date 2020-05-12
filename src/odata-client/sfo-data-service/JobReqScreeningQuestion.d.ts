import { JobReqScreeningQuestionRequestBuilder } from './JobReqScreeningQuestionRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, Entity, EntityBuilderType, Link, NumberField, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "JobReqScreeningQuestion" of service "SFOData".
 */
export declare class JobReqScreeningQuestion extends Entity implements JobReqScreeningQuestionType {
    /**
     * Technical entity name for JobReqScreeningQuestion.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for JobReqScreeningQuestion.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Applicant must answer correctly.
     */
    disqualifier: boolean;
    /**
     * JobReq Question Expected Answer Value.
     */
    expectedAnswerValue: number;
    /**
     * JobReq Question Expected Dir.
     */
    expectedDir: string;
    /**
     * JobReq Content.
     */
    jobReqContent: string;
    /**
     * Job Requisition Id.
     */
    jobReqId: BigNumber;
    /**
     * JobReq Question Locale.
     */
    locale: string;
    /**
     * JobReq Question Max Length.
     */
    maxLength: BigNumber;
    /**
     * JobReq Question Order.
     */
    order: BigNumber;
    /**
     * JobReq Question Description.
     */
    questionDescription: string;
    /**
     * Question Id.
     */
    questionId: BigNumber;
    /**
     * JobReq Question Name.
     */
    questionName: string;
    /**
     * JobReq Question Parent Id.
     */
    questionParentId: BigNumber;
    /**
     * JobReq Question Parent Response.
     */
    questionParentResponse: string;
    /**
     * JobReq Question Type.
     */
    questionType: string;
    /**
     * Job Req Question Weight.
     */
    questionWeight: number;
    /**
     * Answer range.
     */
    ratingScale: string;
    /**
     * Applicant must answer.
     */
    required: boolean;
    /**
     * Include in screening score.
     */
    score: boolean;
    /**
     * One-to-many navigation property to the [[JobReqScreeningQuestionChoice]] entity.
     */
    choices: JobReqScreeningQuestionChoice[];
    /**
     * One-to-one navigation property to the [[JobRequisition]] entity.
     */
    jobRequisition: JobRequisition;
    /**
     * Returns an entity builder to construct instances `JobReqScreeningQuestion`.
     * @returns A builder that constructs instances of entity type `JobReqScreeningQuestion`.
     */
    static builder(): EntityBuilderType<JobReqScreeningQuestion, JobReqScreeningQuestionTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `JobReqScreeningQuestion` entity type.
     * @returns A `JobReqScreeningQuestion` request builder.
     */
    static requestBuilder(): JobReqScreeningQuestionRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobReqScreeningQuestion`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `JobReqScreeningQuestion`.
     */
    static customField(fieldName: string): CustomField<JobReqScreeningQuestion>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
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
export declare namespace JobReqScreeningQuestion {
    /**
     * Static representation of the [[disqualifier]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DISQUALIFIER: BooleanField<JobReqScreeningQuestion>;
    /**
     * Static representation of the [[expectedAnswerValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXPECTED_ANSWER_VALUE: NumberField<JobReqScreeningQuestion>;
    /**
     * Static representation of the [[expectedDir]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXPECTED_DIR: StringField<JobReqScreeningQuestion>;
    /**
     * Static representation of the [[jobReqContent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_REQ_CONTENT: StringField<JobReqScreeningQuestion>;
    /**
     * Static representation of the [[jobReqId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_REQ_ID: BigNumberField<JobReqScreeningQuestion>;
    /**
     * Static representation of the [[locale]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LOCALE: StringField<JobReqScreeningQuestion>;
    /**
     * Static representation of the [[maxLength]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MAX_LENGTH: BigNumberField<JobReqScreeningQuestion>;
    /**
     * Static representation of the [[order]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ORDER: BigNumberField<JobReqScreeningQuestion>;
    /**
     * Static representation of the [[questionDescription]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const QUESTION_DESCRIPTION: StringField<JobReqScreeningQuestion>;
    /**
     * Static representation of the [[questionId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const QUESTION_ID: BigNumberField<JobReqScreeningQuestion>;
    /**
     * Static representation of the [[questionName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const QUESTION_NAME: StringField<JobReqScreeningQuestion>;
    /**
     * Static representation of the [[questionParentId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const QUESTION_PARENT_ID: BigNumberField<JobReqScreeningQuestion>;
    /**
     * Static representation of the [[questionParentResponse]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const QUESTION_PARENT_RESPONSE: StringField<JobReqScreeningQuestion>;
    /**
     * Static representation of the [[questionType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const QUESTION_TYPE: StringField<JobReqScreeningQuestion>;
    /**
     * Static representation of the [[questionWeight]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const QUESTION_WEIGHT: NumberField<JobReqScreeningQuestion>;
    /**
     * Static representation of the [[ratingScale]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RATING_SCALE: StringField<JobReqScreeningQuestion>;
    /**
     * Static representation of the [[required]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REQUIRED: BooleanField<JobReqScreeningQuestion>;
    /**
     * Static representation of the [[score]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SCORE: BooleanField<JobReqScreeningQuestion>;
    /**
     * Static representation of the one-to-many navigation property [[choices]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CHOICES: Link<JobReqScreeningQuestion, JobReqScreeningQuestionChoice>;
    /**
     * Static representation of the one-to-one navigation property [[jobRequisition]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_REQUISITION: OneToOneLink<JobReqScreeningQuestion, JobRequisition>;
    /**
     * All fields of the JobReqScreeningQuestion entity.
     */
    const _allFields: Array<BooleanField<JobReqScreeningQuestion> | NumberField<JobReqScreeningQuestion> | StringField<JobReqScreeningQuestion> | BigNumberField<JobReqScreeningQuestion> | Link<JobReqScreeningQuestion, JobReqScreeningQuestionChoice> | OneToOneLink<JobReqScreeningQuestion, JobRequisition>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<JobReqScreeningQuestion>;
    /**
     * All key fields of the JobReqScreeningQuestion entity.
     */
    const _keyFields: Array<Selectable<JobReqScreeningQuestion>>;
    /**
     * Mapping of all key field names to the respective static field property JobReqScreeningQuestion.
     */
    const _keys: {
        [keys: string]: Selectable<JobReqScreeningQuestion>;
    };
}
//# sourceMappingURL=JobReqScreeningQuestion.d.ts.map