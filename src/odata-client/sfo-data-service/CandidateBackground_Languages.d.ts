import { CandidateBackground_LanguagesRequestBuilder } from './CandidateBackground_LanguagesRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "CandidateBackground_Languages" of service "SFOData".
 */
export declare class CandidateBackground_Languages extends Entity implements CandidateBackground_LanguagesType {
    /**
     * Technical entity name for CandidateBackground_Languages.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for CandidateBackground_Languages.
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
     * Language.
     */
    language: string;
    /**
     * Last Modified Date.
     */
    lastModifiedDateTime: Moment;
    /**
     * Reading Proficiency.
     */
    readingProf: string;
    /**
     * Speaking Proficiency.
     */
    speakingProf: string;
    /**
     * Language Variant.
     * @nullable
     */
    variant?: string;
    /**
     * Writing Proficiency.
     */
    writingProf: string;
    /**
     * One-to-one navigation property to the [[Candidate]] entity.
     */
    candidate: Candidate;
    /**
     * One-to-one navigation property to the [[PicklistOption]] entity.
     */
    languageNav: PicklistOption;
    /**
     * One-to-one navigation property to the [[PicklistOption]] entity.
     */
    readingProfNav: PicklistOption;
    /**
     * One-to-one navigation property to the [[PicklistOption]] entity.
     */
    speakingProfNav: PicklistOption;
    /**
     * One-to-one navigation property to the [[PicklistOption]] entity.
     */
    variantNav: PicklistOption;
    /**
     * One-to-one navigation property to the [[PicklistOption]] entity.
     */
    writingProfNav: PicklistOption;
    /**
     * Returns an entity builder to construct instances `CandidateBackground_Languages`.
     * @returns A builder that constructs instances of entity type `CandidateBackground_Languages`.
     */
    static builder(): EntityBuilderType<CandidateBackground_Languages, CandidateBackground_LanguagesTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `CandidateBackground_Languages` entity type.
     * @returns A `CandidateBackground_Languages` request builder.
     */
    static requestBuilder(): CandidateBackground_LanguagesRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `CandidateBackground_Languages`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `CandidateBackground_Languages`.
     */
    static customField(fieldName: string): CustomField<CandidateBackground_Languages>;
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
export interface CandidateBackground_LanguagesType {
    backgroundElementId: BigNumber;
    bgOrderPos: BigNumber;
    candidateId: BigNumber;
    language: string;
    lastModifiedDateTime: Moment;
    readingProf: string;
    speakingProf: string;
    variant?: string;
    writingProf: string;
    candidate: CandidateType;
    languageNav: PicklistOptionType;
    readingProfNav: PicklistOptionType;
    speakingProfNav: PicklistOptionType;
    variantNav: PicklistOptionType;
    writingProfNav: PicklistOptionType;
}
export interface CandidateBackground_LanguagesTypeForceMandatory {
    backgroundElementId: BigNumber;
    bgOrderPos: BigNumber;
    candidateId: BigNumber;
    language: string;
    lastModifiedDateTime: Moment;
    readingProf: string;
    speakingProf: string;
    variant: string;
    writingProf: string;
    candidate: CandidateType;
    languageNav: PicklistOptionType;
    readingProfNav: PicklistOptionType;
    speakingProfNav: PicklistOptionType;
    variantNav: PicklistOptionType;
    writingProfNav: PicklistOptionType;
}
export declare namespace CandidateBackground_Languages {
    /**
     * Static representation of the [[backgroundElementId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BACKGROUND_ELEMENT_ID: BigNumberField<CandidateBackground_Languages>;
    /**
     * Static representation of the [[bgOrderPos]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BG_ORDER_POS: BigNumberField<CandidateBackground_Languages>;
    /**
     * Static representation of the [[candidateId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CANDIDATE_ID: BigNumberField<CandidateBackground_Languages>;
    /**
     * Static representation of the [[language]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LANGUAGE: StringField<CandidateBackground_Languages>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<CandidateBackground_Languages>;
    /**
     * Static representation of the [[readingProf]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const READING_PROF: StringField<CandidateBackground_Languages>;
    /**
     * Static representation of the [[speakingProf]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SPEAKING_PROF: StringField<CandidateBackground_Languages>;
    /**
     * Static representation of the [[variant]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VARIANT: StringField<CandidateBackground_Languages>;
    /**
     * Static representation of the [[writingProf]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WRITING_PROF: StringField<CandidateBackground_Languages>;
    /**
     * Static representation of the one-to-one navigation property [[candidate]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CANDIDATE: OneToOneLink<CandidateBackground_Languages, Candidate>;
    /**
     * Static representation of the one-to-one navigation property [[languageNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LANGUAGE_NAV: OneToOneLink<CandidateBackground_Languages, PicklistOption>;
    /**
     * Static representation of the one-to-one navigation property [[readingProfNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const READING_PROF_NAV: OneToOneLink<CandidateBackground_Languages, PicklistOption>;
    /**
     * Static representation of the one-to-one navigation property [[speakingProfNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SPEAKING_PROF_NAV: OneToOneLink<CandidateBackground_Languages, PicklistOption>;
    /**
     * Static representation of the one-to-one navigation property [[variantNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VARIANT_NAV: OneToOneLink<CandidateBackground_Languages, PicklistOption>;
    /**
     * Static representation of the one-to-one navigation property [[writingProfNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WRITING_PROF_NAV: OneToOneLink<CandidateBackground_Languages, PicklistOption>;
    /**
     * All fields of the CandidateBackground_Languages entity.
     */
    const _allFields: Array<BigNumberField<CandidateBackground_Languages> | StringField<CandidateBackground_Languages> | DateField<CandidateBackground_Languages> | OneToOneLink<CandidateBackground_Languages, Candidate> | OneToOneLink<CandidateBackground_Languages, PicklistOption>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<CandidateBackground_Languages>;
    /**
     * All key fields of the CandidateBackground_Languages entity.
     */
    const _keyFields: Array<Selectable<CandidateBackground_Languages>>;
    /**
     * Mapping of all key field names to the respective static field property CandidateBackground_Languages.
     */
    const _keys: {
        [keys: string]: Selectable<CandidateBackground_Languages>;
    };
}
//# sourceMappingURL=CandidateBackground_Languages.d.ts.map