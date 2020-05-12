import { InterviewIndividualAssessmentRequestBuilder } from './InterviewIndividualAssessmentRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "InterviewIndividualAssessment" of service "SFOData".
 */
export declare class InterviewIndividualAssessment extends Entity implements InterviewIndividualAssessmentType {
    /**
     * Technical entity name for InterviewIndividualAssessment.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for InterviewIndividualAssessment.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Comments.
     * @nullable
     */
    comments?: string;
    /**
     * Interview Individual Assessment Id.
     */
    interviewIndividualAssessmentId: BigNumber;
    /**
     * Interview Overall Assessment Id.
     */
    interviewOverallAssessmentId: BigNumber;
    /**
     * IsDeleted.
     * @nullable
     */
    isDeleted?: string;
    /**
     * Rating.
     */
    rating: string;
    /**
     * Ref Id.
     */
    refId: BigNumber;
    /**
     * Type.
     */
    type: string;
    /**
     * One-to-one navigation property to the [[CompetencyEntity]] entity.
     */
    jobProfileCompetency: CompetencyEntity;
    /**
     * One-to-many navigation property to the [[RcmCompetency]] entity.
     */
    rcmCompetency: RcmCompetency[];
    /**
     * Returns an entity builder to construct instances `InterviewIndividualAssessment`.
     * @returns A builder that constructs instances of entity type `InterviewIndividualAssessment`.
     */
    static builder(): EntityBuilderType<InterviewIndividualAssessment, InterviewIndividualAssessmentTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `InterviewIndividualAssessment` entity type.
     * @returns A `InterviewIndividualAssessment` request builder.
     */
    static requestBuilder(): InterviewIndividualAssessmentRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `InterviewIndividualAssessment`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `InterviewIndividualAssessment`.
     */
    static customField(fieldName: string): CustomField<InterviewIndividualAssessment>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { CompetencyEntity, CompetencyEntityType } from './CompetencyEntity';
import { RcmCompetency, RcmCompetencyType } from './RcmCompetency';
export interface InterviewIndividualAssessmentType {
    comments?: string;
    interviewIndividualAssessmentId: BigNumber;
    interviewOverallAssessmentId: BigNumber;
    isDeleted?: string;
    rating: string;
    refId: BigNumber;
    type: string;
    jobProfileCompetency: CompetencyEntityType;
    rcmCompetency: RcmCompetencyType[];
}
export interface InterviewIndividualAssessmentTypeForceMandatory {
    comments: string;
    interviewIndividualAssessmentId: BigNumber;
    interviewOverallAssessmentId: BigNumber;
    isDeleted: string;
    rating: string;
    refId: BigNumber;
    type: string;
    jobProfileCompetency: CompetencyEntityType;
    rcmCompetency: RcmCompetencyType[];
}
export declare namespace InterviewIndividualAssessment {
    /**
     * Static representation of the [[comments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COMMENTS: StringField<InterviewIndividualAssessment>;
    /**
     * Static representation of the [[interviewIndividualAssessmentId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INTERVIEW_INDIVIDUAL_ASSESSMENT_ID: BigNumberField<InterviewIndividualAssessment>;
    /**
     * Static representation of the [[interviewOverallAssessmentId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INTERVIEW_OVERALL_ASSESSMENT_ID: BigNumberField<InterviewIndividualAssessment>;
    /**
     * Static representation of the [[isDeleted]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IS_DELETED: StringField<InterviewIndividualAssessment>;
    /**
     * Static representation of the [[rating]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RATING: StringField<InterviewIndividualAssessment>;
    /**
     * Static representation of the [[refId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REF_ID: BigNumberField<InterviewIndividualAssessment>;
    /**
     * Static representation of the [[type]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TYPE: StringField<InterviewIndividualAssessment>;
    /**
     * Static representation of the one-to-one navigation property [[jobProfileCompetency]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_PROFILE_COMPETENCY: OneToOneLink<InterviewIndividualAssessment, CompetencyEntity>;
    /**
     * Static representation of the one-to-many navigation property [[rcmCompetency]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RCM_COMPETENCY: Link<InterviewIndividualAssessment, RcmCompetency>;
    /**
     * All fields of the InterviewIndividualAssessment entity.
     */
    const _allFields: Array<StringField<InterviewIndividualAssessment> | BigNumberField<InterviewIndividualAssessment> | OneToOneLink<InterviewIndividualAssessment, CompetencyEntity> | Link<InterviewIndividualAssessment, RcmCompetency>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<InterviewIndividualAssessment>;
    /**
     * All key fields of the InterviewIndividualAssessment entity.
     */
    const _keyFields: Array<Selectable<InterviewIndividualAssessment>>;
    /**
     * Mapping of all key field names to the respective static field property InterviewIndividualAssessment.
     */
    const _keys: {
        [keys: string]: Selectable<InterviewIndividualAssessment>;
    };
}
//# sourceMappingURL=InterviewIndividualAssessment.d.ts.map