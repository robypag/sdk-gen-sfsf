import { CandidateBackground_MobilityRequestBuilder } from './CandidateBackground_MobilityRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "CandidateBackground_Mobility" of service "SFOData".
 */
export declare class CandidateBackground_Mobility extends Entity implements CandidateBackground_MobilityType {
    /**
     * Technical entity name for CandidateBackground_Mobility.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for CandidateBackground_Mobility.
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
     * Last Modified Date.
     */
    lastModifiedDateTime: Moment;
    /**
     * Location Desired.
     * @nullable
     */
    location?: string;
    /**
     * Willing to Relocate.
     */
    willingness: string;
    /**
     * One-to-one navigation property to the [[Candidate]] entity.
     */
    candidate: Candidate;
    /**
     * One-to-one navigation property to the [[PicklistOption]] entity.
     */
    willingnessNav: PicklistOption;
    /**
     * Returns an entity builder to construct instances `CandidateBackground_Mobility`.
     * @returns A builder that constructs instances of entity type `CandidateBackground_Mobility`.
     */
    static builder(): EntityBuilderType<CandidateBackground_Mobility, CandidateBackground_MobilityTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `CandidateBackground_Mobility` entity type.
     * @returns A `CandidateBackground_Mobility` request builder.
     */
    static requestBuilder(): CandidateBackground_MobilityRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `CandidateBackground_Mobility`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `CandidateBackground_Mobility`.
     */
    static customField(fieldName: string): CustomField<CandidateBackground_Mobility>;
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
export interface CandidateBackground_MobilityType {
    backgroundElementId: BigNumber;
    bgOrderPos: BigNumber;
    candidateId: BigNumber;
    lastModifiedDateTime: Moment;
    location?: string;
    willingness: string;
    candidate: CandidateType;
    willingnessNav: PicklistOptionType;
}
export interface CandidateBackground_MobilityTypeForceMandatory {
    backgroundElementId: BigNumber;
    bgOrderPos: BigNumber;
    candidateId: BigNumber;
    lastModifiedDateTime: Moment;
    location: string;
    willingness: string;
    candidate: CandidateType;
    willingnessNav: PicklistOptionType;
}
export declare namespace CandidateBackground_Mobility {
    /**
     * Static representation of the [[backgroundElementId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BACKGROUND_ELEMENT_ID: BigNumberField<CandidateBackground_Mobility>;
    /**
     * Static representation of the [[bgOrderPos]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BG_ORDER_POS: BigNumberField<CandidateBackground_Mobility>;
    /**
     * Static representation of the [[candidateId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CANDIDATE_ID: BigNumberField<CandidateBackground_Mobility>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<CandidateBackground_Mobility>;
    /**
     * Static representation of the [[location]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LOCATION: StringField<CandidateBackground_Mobility>;
    /**
     * Static representation of the [[willingness]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WILLINGNESS: StringField<CandidateBackground_Mobility>;
    /**
     * Static representation of the one-to-one navigation property [[candidate]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CANDIDATE: OneToOneLink<CandidateBackground_Mobility, Candidate>;
    /**
     * Static representation of the one-to-one navigation property [[willingnessNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WILLINGNESS_NAV: OneToOneLink<CandidateBackground_Mobility, PicklistOption>;
    /**
     * All fields of the CandidateBackground_Mobility entity.
     */
    const _allFields: Array<BigNumberField<CandidateBackground_Mobility> | DateField<CandidateBackground_Mobility> | StringField<CandidateBackground_Mobility> | OneToOneLink<CandidateBackground_Mobility, Candidate> | OneToOneLink<CandidateBackground_Mobility, PicklistOption>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<CandidateBackground_Mobility>;
    /**
     * All key fields of the CandidateBackground_Mobility entity.
     */
    const _keyFields: Array<Selectable<CandidateBackground_Mobility>>;
    /**
     * Mapping of all key field names to the respective static field property CandidateBackground_Mobility.
     */
    const _keys: {
        [keys: string]: Selectable<CandidateBackground_Mobility>;
    };
}
//# sourceMappingURL=CandidateBackground_Mobility.d.ts.map