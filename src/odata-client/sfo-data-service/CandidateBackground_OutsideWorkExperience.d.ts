import { CandidateBackground_OutsideWorkExperienceRequestBuilder } from './CandidateBackground_OutsideWorkExperienceRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "CandidateBackground_OutsideWorkExperience" of service "SFOData".
 */
export declare class CandidateBackground_OutsideWorkExperience extends Entity implements CandidateBackground_OutsideWorkExperienceType {
    /**
     * Technical entity name for CandidateBackground_OutsideWorkExperience.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for CandidateBackground_OutsideWorkExperience.
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
     * Type of Business.
     */
    businessType: string;
    /**
     * Candidate Id.
     */
    candidateId: BigNumber;
    /**
     * Country.
     */
    country: string;
    /**
     * Company Name.
     */
    employer: string;
    /**
     * End Date.
     */
    endDate: Moment;
    /**
     * Last Modified Date.
     */
    lastModifiedDateTime: Moment;
    /**
     * Present Employer.
     */
    presentEmployer: string;
    /**
     * From Date.
     */
    startDate: Moment;
    /**
     * Title.
     */
    startTitle: string;
    /**
     * One-to-one navigation property to the [[PicklistOption]] entity.
     */
    businessTypeNav: PicklistOption;
    /**
     * One-to-one navigation property to the [[Candidate]] entity.
     */
    candidate: Candidate;
    /**
     * One-to-one navigation property to the [[PicklistOption]] entity.
     */
    countryNav: PicklistOption;
    /**
     * One-to-one navigation property to the [[PicklistOption]] entity.
     */
    presentEmployerNav: PicklistOption;
    /**
     * Returns an entity builder to construct instances `CandidateBackground_OutsideWorkExperience`.
     * @returns A builder that constructs instances of entity type `CandidateBackground_OutsideWorkExperience`.
     */
    static builder(): EntityBuilderType<CandidateBackground_OutsideWorkExperience, CandidateBackground_OutsideWorkExperienceTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `CandidateBackground_OutsideWorkExperience` entity type.
     * @returns A `CandidateBackground_OutsideWorkExperience` request builder.
     */
    static requestBuilder(): CandidateBackground_OutsideWorkExperienceRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `CandidateBackground_OutsideWorkExperience`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `CandidateBackground_OutsideWorkExperience`.
     */
    static customField(fieldName: string): CustomField<CandidateBackground_OutsideWorkExperience>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { PicklistOption, PicklistOptionType } from './PicklistOption';
import { Candidate, CandidateType } from './Candidate';
export interface CandidateBackground_OutsideWorkExperienceType {
    backgroundElementId: BigNumber;
    bgOrderPos: BigNumber;
    businessType: string;
    candidateId: BigNumber;
    country: string;
    employer: string;
    endDate: Moment;
    lastModifiedDateTime: Moment;
    presentEmployer: string;
    startDate: Moment;
    startTitle: string;
    businessTypeNav: PicklistOptionType;
    candidate: CandidateType;
    countryNav: PicklistOptionType;
    presentEmployerNav: PicklistOptionType;
}
export interface CandidateBackground_OutsideWorkExperienceTypeForceMandatory {
    backgroundElementId: BigNumber;
    bgOrderPos: BigNumber;
    businessType: string;
    candidateId: BigNumber;
    country: string;
    employer: string;
    endDate: Moment;
    lastModifiedDateTime: Moment;
    presentEmployer: string;
    startDate: Moment;
    startTitle: string;
    businessTypeNav: PicklistOptionType;
    candidate: CandidateType;
    countryNav: PicklistOptionType;
    presentEmployerNav: PicklistOptionType;
}
export declare namespace CandidateBackground_OutsideWorkExperience {
    /**
     * Static representation of the [[backgroundElementId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BACKGROUND_ELEMENT_ID: BigNumberField<CandidateBackground_OutsideWorkExperience>;
    /**
     * Static representation of the [[bgOrderPos]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BG_ORDER_POS: BigNumberField<CandidateBackground_OutsideWorkExperience>;
    /**
     * Static representation of the [[businessType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_TYPE: StringField<CandidateBackground_OutsideWorkExperience>;
    /**
     * Static representation of the [[candidateId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CANDIDATE_ID: BigNumberField<CandidateBackground_OutsideWorkExperience>;
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COUNTRY: StringField<CandidateBackground_OutsideWorkExperience>;
    /**
     * Static representation of the [[employer]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EMPLOYER: StringField<CandidateBackground_OutsideWorkExperience>;
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const END_DATE: DateField<CandidateBackground_OutsideWorkExperience>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<CandidateBackground_OutsideWorkExperience>;
    /**
     * Static representation of the [[presentEmployer]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRESENT_EMPLOYER: StringField<CandidateBackground_OutsideWorkExperience>;
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const START_DATE: DateField<CandidateBackground_OutsideWorkExperience>;
    /**
     * Static representation of the [[startTitle]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const START_TITLE: StringField<CandidateBackground_OutsideWorkExperience>;
    /**
     * Static representation of the one-to-one navigation property [[businessTypeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_TYPE_NAV: OneToOneLink<CandidateBackground_OutsideWorkExperience, PicklistOption>;
    /**
     * Static representation of the one-to-one navigation property [[candidate]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CANDIDATE: OneToOneLink<CandidateBackground_OutsideWorkExperience, Candidate>;
    /**
     * Static representation of the one-to-one navigation property [[countryNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COUNTRY_NAV: OneToOneLink<CandidateBackground_OutsideWorkExperience, PicklistOption>;
    /**
     * Static representation of the one-to-one navigation property [[presentEmployerNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRESENT_EMPLOYER_NAV: OneToOneLink<CandidateBackground_OutsideWorkExperience, PicklistOption>;
    /**
     * All fields of the CandidateBackground_OutsideWorkExperience entity.
     */
    const _allFields: Array<BigNumberField<CandidateBackground_OutsideWorkExperience> | StringField<CandidateBackground_OutsideWorkExperience> | DateField<CandidateBackground_OutsideWorkExperience> | OneToOneLink<CandidateBackground_OutsideWorkExperience, PicklistOption> | OneToOneLink<CandidateBackground_OutsideWorkExperience, Candidate>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<CandidateBackground_OutsideWorkExperience>;
    /**
     * All key fields of the CandidateBackground_OutsideWorkExperience entity.
     */
    const _keyFields: Array<Selectable<CandidateBackground_OutsideWorkExperience>>;
    /**
     * Mapping of all key field names to the respective static field property CandidateBackground_OutsideWorkExperience.
     */
    const _keys: {
        [keys: string]: Selectable<CandidateBackground_OutsideWorkExperience>;
    };
}
//# sourceMappingURL=CandidateBackground_OutsideWorkExperience.d.ts.map