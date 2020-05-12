import { CandidateBackground_EducationRequestBuilder } from './CandidateBackground_EducationRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "CandidateBackground_Education" of service "SFOData".
 */
export declare class CandidateBackground_Education extends Entity implements CandidateBackground_EducationType {
    /**
     * Technical entity name for CandidateBackground_Education.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for CandidateBackground_Education.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Background Element Id.
     */
    backgroundElementId: BigNumber;
    /**
     * Background Order Position.
     */
    bgOrderPos: BigNumber;
    /**
     * Candidate Id.
     */
    candidateId: BigNumber;
    /**
     * Degree.
     */
    degree: string;
    /**
     * End Date.
     * @nullable
     */
    endDate?: Moment;
    /**
     * Last Modified Date.
     */
    lastModifiedDateTime: Moment;
    /**
     * Major.
     */
    major: string;
    /**
     * School.
     */
    school: string;
    /**
     * From Date.
     */
    startDate: Moment;
    /**
     * One-to-one navigation property to the [[Candidate]] entity.
     */
    candidate: Candidate;
    /**
     * One-to-one navigation property to the [[PicklistOption]] entity.
     */
    degreeNav: PicklistOption;
    /**
     * One-to-one navigation property to the [[PicklistOption]] entity.
     */
    majorNav: PicklistOption;
    /**
     * Returns an entity builder to construct instances `CandidateBackground_Education`.
     * @returns A builder that constructs instances of entity type `CandidateBackground_Education`.
     */
    static builder(): EntityBuilderType<CandidateBackground_Education, CandidateBackground_EducationTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `CandidateBackground_Education` entity type.
     * @returns A `CandidateBackground_Education` request builder.
     */
    static requestBuilder(): CandidateBackground_EducationRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `CandidateBackground_Education`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `CandidateBackground_Education`.
     */
    static customField(fieldName: string): CustomField<CandidateBackground_Education>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { Candidate, CandidateType } from './Candidate';
import { PicklistOption, PicklistOptionType } from './PicklistOption';
export interface CandidateBackground_EducationType {
    backgroundElementId: BigNumber;
    bgOrderPos: BigNumber;
    candidateId: BigNumber;
    degree: string;
    endDate?: Moment;
    lastModifiedDateTime: Moment;
    major: string;
    school: string;
    startDate: Moment;
    candidate: CandidateType;
    degreeNav: PicklistOptionType;
    majorNav: PicklistOptionType;
}
export interface CandidateBackground_EducationTypeForceMandatory {
    backgroundElementId: BigNumber;
    bgOrderPos: BigNumber;
    candidateId: BigNumber;
    degree: string;
    endDate: Moment;
    lastModifiedDateTime: Moment;
    major: string;
    school: string;
    startDate: Moment;
    candidate: CandidateType;
    degreeNav: PicklistOptionType;
    majorNav: PicklistOptionType;
}
export declare namespace CandidateBackground_Education {
    /**
     * Static representation of the [[backgroundElementId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BACKGROUND_ELEMENT_ID: BigNumberField<CandidateBackground_Education>;
    /**
     * Static representation of the [[bgOrderPos]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BG_ORDER_POS: BigNumberField<CandidateBackground_Education>;
    /**
     * Static representation of the [[candidateId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CANDIDATE_ID: BigNumberField<CandidateBackground_Education>;
    /**
     * Static representation of the [[degree]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEGREE: StringField<CandidateBackground_Education>;
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const END_DATE: DateField<CandidateBackground_Education>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<CandidateBackground_Education>;
    /**
     * Static representation of the [[major]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MAJOR: StringField<CandidateBackground_Education>;
    /**
     * Static representation of the [[school]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SCHOOL: StringField<CandidateBackground_Education>;
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const START_DATE: DateField<CandidateBackground_Education>;
    /**
     * Static representation of the one-to-one navigation property [[candidate]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CANDIDATE: OneToOneLink<CandidateBackground_Education, Candidate>;
    /**
     * Static representation of the one-to-one navigation property [[degreeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEGREE_NAV: OneToOneLink<CandidateBackground_Education, PicklistOption>;
    /**
     * Static representation of the one-to-one navigation property [[majorNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MAJOR_NAV: OneToOneLink<CandidateBackground_Education, PicklistOption>;
    /**
     * All fields of the CandidateBackground_Education entity.
     */
    const _allFields: Array<BigNumberField<CandidateBackground_Education> | StringField<CandidateBackground_Education> | DateField<CandidateBackground_Education> | OneToOneLink<CandidateBackground_Education, Candidate> | OneToOneLink<CandidateBackground_Education, PicklistOption>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<CandidateBackground_Education>;
    /**
     * All key fields of the CandidateBackground_Education entity.
     */
    const _keyFields: Array<Selectable<CandidateBackground_Education>>;
    /**
     * Mapping of all key field names to the respective static field property CandidateBackground_Education.
     */
    const _keys: {
        [keys: string]: Selectable<CandidateBackground_Education>;
    };
}
//# sourceMappingURL=CandidateBackground_Education.d.ts.map