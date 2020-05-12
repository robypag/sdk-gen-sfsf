import { CalibrationSubjectRankRequestBuilder } from './CalibrationSubjectRankRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, Entity, EntityBuilderType, NumberField, OneToOneLink, Selectable } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "CalibrationSubjectRank" of service "SFOData".
 */
export declare class CalibrationSubjectRank extends Entity implements CalibrationSubjectRankType {
    /**
     * Technical entity name for CalibrationSubjectRank.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for CalibrationSubjectRank.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * dataType.
     */
    dataType: number;
    /**
     * rank.
     */
    rank: number;
    /**
     * ratingValue.
     */
    ratingValue: number;
    /**
     * subjectRankId.
     */
    subjectRankId: BigNumber;
    /**
     * One-to-one navigation property to the [[CalibrationSessionSubject]] entity.
     */
    calSessionSubject: CalibrationSessionSubject;
    /**
     * Returns an entity builder to construct instances `CalibrationSubjectRank`.
     * @returns A builder that constructs instances of entity type `CalibrationSubjectRank`.
     */
    static builder(): EntityBuilderType<CalibrationSubjectRank, CalibrationSubjectRankTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `CalibrationSubjectRank` entity type.
     * @returns A `CalibrationSubjectRank` request builder.
     */
    static requestBuilder(): CalibrationSubjectRankRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `CalibrationSubjectRank`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `CalibrationSubjectRank`.
     */
    static customField(fieldName: string): CustomField<CalibrationSubjectRank>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { CalibrationSessionSubject, CalibrationSessionSubjectType } from './CalibrationSessionSubject';
export interface CalibrationSubjectRankType {
    dataType: number;
    rank: number;
    ratingValue: number;
    subjectRankId: BigNumber;
    calSessionSubject: CalibrationSessionSubjectType;
}
export interface CalibrationSubjectRankTypeForceMandatory {
    dataType: number;
    rank: number;
    ratingValue: number;
    subjectRankId: BigNumber;
    calSessionSubject: CalibrationSessionSubjectType;
}
export declare namespace CalibrationSubjectRank {
    /**
     * Static representation of the [[dataType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DATA_TYPE: NumberField<CalibrationSubjectRank>;
    /**
     * Static representation of the [[rank]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RANK: NumberField<CalibrationSubjectRank>;
    /**
     * Static representation of the [[ratingValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RATING_VALUE: NumberField<CalibrationSubjectRank>;
    /**
     * Static representation of the [[subjectRankId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUBJECT_RANK_ID: BigNumberField<CalibrationSubjectRank>;
    /**
     * Static representation of the one-to-one navigation property [[calSessionSubject]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CAL_SESSION_SUBJECT: OneToOneLink<CalibrationSubjectRank, CalibrationSessionSubject>;
    /**
     * All fields of the CalibrationSubjectRank entity.
     */
    const _allFields: Array<NumberField<CalibrationSubjectRank> | BigNumberField<CalibrationSubjectRank> | OneToOneLink<CalibrationSubjectRank, CalibrationSessionSubject>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<CalibrationSubjectRank>;
    /**
     * All key fields of the CalibrationSubjectRank entity.
     */
    const _keyFields: Array<Selectable<CalibrationSubjectRank>>;
    /**
     * Mapping of all key field names to the respective static field property CalibrationSubjectRank.
     */
    const _keys: {
        [keys: string]: Selectable<CalibrationSubjectRank>;
    };
}
//# sourceMappingURL=CalibrationSubjectRank.d.ts.map