import { JobReqQuestionRequestBuilder } from './JobReqQuestionRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, Entity, EntityBuilderType, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "JobReqQuestion" of service "SFOData".
 */
export declare class JobReqQuestion extends Entity implements JobReqQuestionType {
    /**
     * Technical entity name for JobReqQuestion.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for JobReqQuestion.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Question Category.
     */
    questionCategory: string;
    /**
     * Question Id.
     */
    questionId: BigNumber;
    /**
     * Question Name.
     */
    questionName: string;
    /**
     * Question Source.
     */
    questionSource: string;
    /**
     * Question Type.
     */
    questionType: string;
    /**
     * Returns an entity builder to construct instances `JobReqQuestion`.
     * @returns A builder that constructs instances of entity type `JobReqQuestion`.
     */
    static builder(): EntityBuilderType<JobReqQuestion, JobReqQuestionTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `JobReqQuestion` entity type.
     * @returns A `JobReqQuestion` request builder.
     */
    static requestBuilder(): JobReqQuestionRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobReqQuestion`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `JobReqQuestion`.
     */
    static customField(fieldName: string): CustomField<JobReqQuestion>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
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
export declare namespace JobReqQuestion {
    /**
     * Static representation of the [[questionCategory]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const QUESTION_CATEGORY: StringField<JobReqQuestion>;
    /**
     * Static representation of the [[questionId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const QUESTION_ID: BigNumberField<JobReqQuestion>;
    /**
     * Static representation of the [[questionName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const QUESTION_NAME: StringField<JobReqQuestion>;
    /**
     * Static representation of the [[questionSource]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const QUESTION_SOURCE: StringField<JobReqQuestion>;
    /**
     * Static representation of the [[questionType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const QUESTION_TYPE: StringField<JobReqQuestion>;
    /**
     * All fields of the JobReqQuestion entity.
     */
    const _allFields: Array<StringField<JobReqQuestion> | BigNumberField<JobReqQuestion>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<JobReqQuestion>;
    /**
     * All key fields of the JobReqQuestion entity.
     */
    const _keyFields: Array<Selectable<JobReqQuestion>>;
    /**
     * Mapping of all key field names to the respective static field property JobReqQuestion.
     */
    const _keys: {
        [keys: string]: Selectable<JobReqQuestion>;
    };
}
//# sourceMappingURL=JobReqQuestion.d.ts.map