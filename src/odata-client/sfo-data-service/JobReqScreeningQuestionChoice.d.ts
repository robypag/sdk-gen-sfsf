import { JobReqScreeningQuestionChoiceRequestBuilder } from './JobReqScreeningQuestionChoiceRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, Entity, EntityBuilderType, NumberField, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "JobReqScreeningQuestionChoice" of service "SFOData".
 */
export declare class JobReqScreeningQuestionChoice extends Entity implements JobReqScreeningQuestionChoiceType {
    /**
     * Technical entity name for JobReqScreeningQuestionChoice.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for JobReqScreeningQuestionChoice.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Option Locale.
     */
    locale: string;
    /**
     * Option Id.
     */
    optionId: BigNumber;
    /**
     * Option Label.
     */
    optionLabel: string;
    /**
     * Option Value.
     */
    optionValue: number;
    /**
     * Returns an entity builder to construct instances `JobReqScreeningQuestionChoice`.
     * @returns A builder that constructs instances of entity type `JobReqScreeningQuestionChoice`.
     */
    static builder(): EntityBuilderType<JobReqScreeningQuestionChoice, JobReqScreeningQuestionChoiceTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `JobReqScreeningQuestionChoice` entity type.
     * @returns A `JobReqScreeningQuestionChoice` request builder.
     */
    static requestBuilder(): JobReqScreeningQuestionChoiceRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobReqScreeningQuestionChoice`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `JobReqScreeningQuestionChoice`.
     */
    static customField(fieldName: string): CustomField<JobReqScreeningQuestionChoice>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface JobReqScreeningQuestionChoiceType {
    locale: string;
    optionId: BigNumber;
    optionLabel: string;
    optionValue: number;
}
export interface JobReqScreeningQuestionChoiceTypeForceMandatory {
    locale: string;
    optionId: BigNumber;
    optionLabel: string;
    optionValue: number;
}
export declare namespace JobReqScreeningQuestionChoice {
    /**
     * Static representation of the [[locale]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LOCALE: StringField<JobReqScreeningQuestionChoice>;
    /**
     * Static representation of the [[optionId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OPTION_ID: BigNumberField<JobReqScreeningQuestionChoice>;
    /**
     * Static representation of the [[optionLabel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OPTION_LABEL: StringField<JobReqScreeningQuestionChoice>;
    /**
     * Static representation of the [[optionValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OPTION_VALUE: NumberField<JobReqScreeningQuestionChoice>;
    /**
     * All fields of the JobReqScreeningQuestionChoice entity.
     */
    const _allFields: Array<StringField<JobReqScreeningQuestionChoice> | BigNumberField<JobReqScreeningQuestionChoice> | NumberField<JobReqScreeningQuestionChoice>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<JobReqScreeningQuestionChoice>;
    /**
     * All key fields of the JobReqScreeningQuestionChoice entity.
     */
    const _keyFields: Array<Selectable<JobReqScreeningQuestionChoice>>;
    /**
     * Mapping of all key field names to the respective static field property JobReqScreeningQuestionChoice.
     */
    const _keys: {
        [keys: string]: Selectable<JobReqScreeningQuestionChoice>;
    };
}
//# sourceMappingURL=JobReqScreeningQuestionChoice.d.ts.map