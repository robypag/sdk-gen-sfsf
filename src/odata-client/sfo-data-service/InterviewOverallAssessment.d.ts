import { InterviewOverallAssessmentRequestBuilder } from './InterviewOverallAssessmentRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, Entity, EntityBuilderType, Link, NumberField, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "InterviewOverallAssessment" of service "SFOData".
 */
export declare class InterviewOverallAssessment extends Entity implements InterviewOverallAssessmentType {
    /**
     * Technical entity name for InterviewOverallAssessment.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for InterviewOverallAssessment.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Average Rating.
     * @nullable
     */
    averageRating?: number;
    /**
     * Comments.
     * @nullable
     */
    comments?: string;
    /**
     * Interview Overall Assessment Id.
     */
    interviewOverallAssessmentId: BigNumber;
    /**
     * Interview Ref Id.
     */
    interviewRefId: BigNumber;
    /**
     * Overall Rating.
     */
    overallRating: string;
    /**
     * Type.
     * @nullable
     */
    type?: string;
    /**
     * One-to-many navigation property to the [[InterviewIndividualAssessment]] entity.
     */
    interviewIndividualAssessment: InterviewIndividualAssessment[];
    /**
     * One-to-one navigation property to the [[Attachment]] entity.
     */
    interviewNotes: Attachment;
    /**
     * Returns an entity builder to construct instances `InterviewOverallAssessment`.
     * @returns A builder that constructs instances of entity type `InterviewOverallAssessment`.
     */
    static builder(): EntityBuilderType<InterviewOverallAssessment, InterviewOverallAssessmentTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `InterviewOverallAssessment` entity type.
     * @returns A `InterviewOverallAssessment` request builder.
     */
    static requestBuilder(): InterviewOverallAssessmentRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `InterviewOverallAssessment`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `InterviewOverallAssessment`.
     */
    static customField(fieldName: string): CustomField<InterviewOverallAssessment>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { InterviewIndividualAssessment, InterviewIndividualAssessmentType } from './InterviewIndividualAssessment';
import { Attachment, AttachmentType } from './Attachment';
export interface InterviewOverallAssessmentType {
    averageRating?: number;
    comments?: string;
    interviewOverallAssessmentId: BigNumber;
    interviewRefId: BigNumber;
    overallRating: string;
    type?: string;
    interviewIndividualAssessment: InterviewIndividualAssessmentType[];
    interviewNotes: AttachmentType;
}
export interface InterviewOverallAssessmentTypeForceMandatory {
    averageRating: number;
    comments: string;
    interviewOverallAssessmentId: BigNumber;
    interviewRefId: BigNumber;
    overallRating: string;
    type: string;
    interviewIndividualAssessment: InterviewIndividualAssessmentType[];
    interviewNotes: AttachmentType;
}
export declare namespace InterviewOverallAssessment {
    /**
     * Static representation of the [[averageRating]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const AVERAGE_RATING: NumberField<InterviewOverallAssessment>;
    /**
     * Static representation of the [[comments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COMMENTS: StringField<InterviewOverallAssessment>;
    /**
     * Static representation of the [[interviewOverallAssessmentId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INTERVIEW_OVERALL_ASSESSMENT_ID: BigNumberField<InterviewOverallAssessment>;
    /**
     * Static representation of the [[interviewRefId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INTERVIEW_REF_ID: BigNumberField<InterviewOverallAssessment>;
    /**
     * Static representation of the [[overallRating]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OVERALL_RATING: StringField<InterviewOverallAssessment>;
    /**
     * Static representation of the [[type]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TYPE: StringField<InterviewOverallAssessment>;
    /**
     * Static representation of the one-to-many navigation property [[interviewIndividualAssessment]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INTERVIEW_INDIVIDUAL_ASSESSMENT: Link<InterviewOverallAssessment, InterviewIndividualAssessment>;
    /**
     * Static representation of the one-to-one navigation property [[interviewNotes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INTERVIEW_NOTES: OneToOneLink<InterviewOverallAssessment, Attachment>;
    /**
     * All fields of the InterviewOverallAssessment entity.
     */
    const _allFields: Array<NumberField<InterviewOverallAssessment> | StringField<InterviewOverallAssessment> | BigNumberField<InterviewOverallAssessment> | Link<InterviewOverallAssessment, InterviewIndividualAssessment> | OneToOneLink<InterviewOverallAssessment, Attachment>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<InterviewOverallAssessment>;
    /**
     * All key fields of the InterviewOverallAssessment entity.
     */
    const _keyFields: Array<Selectable<InterviewOverallAssessment>>;
    /**
     * Mapping of all key field names to the respective static field property InterviewOverallAssessment.
     */
    const _keys: {
        [keys: string]: Selectable<InterviewOverallAssessment>;
    };
}
//# sourceMappingURL=InterviewOverallAssessment.d.ts.map