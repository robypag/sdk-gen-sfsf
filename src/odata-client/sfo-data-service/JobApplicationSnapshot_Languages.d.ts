import { JobApplicationSnapshot_LanguagesRequestBuilder } from './JobApplicationSnapshot_LanguagesRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "JobApplicationSnapshot_Languages" of service "SFOData".
 */
export declare class JobApplicationSnapshot_Languages extends Entity implements JobApplicationSnapshot_LanguagesType {
    /**
     * Technical entity name for JobApplicationSnapshot_Languages.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for JobApplicationSnapshot_Languages.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Application Id.
     */
    applicationId: BigNumber;
    /**
     * Background Element Id.
     */
    backgroundElementId: BigNumber;
    /**
     * Background Order Position.
     */
    bgOrderPos: BigNumber;
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
     * One-to-one navigation property to the [[JobApplication]] entity.
     */
    application: JobApplication;
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
     * Returns an entity builder to construct instances `JobApplicationSnapshot_Languages`.
     * @returns A builder that constructs instances of entity type `JobApplicationSnapshot_Languages`.
     */
    static builder(): EntityBuilderType<JobApplicationSnapshot_Languages, JobApplicationSnapshot_LanguagesTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `JobApplicationSnapshot_Languages` entity type.
     * @returns A `JobApplicationSnapshot_Languages` request builder.
     */
    static requestBuilder(): JobApplicationSnapshot_LanguagesRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobApplicationSnapshot_Languages`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `JobApplicationSnapshot_Languages`.
     */
    static customField(fieldName: string): CustomField<JobApplicationSnapshot_Languages>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { JobApplication, JobApplicationType } from './JobApplication';
import { PicklistOption, PicklistOptionType } from './PicklistOption';
export interface JobApplicationSnapshot_LanguagesType {
    applicationId: BigNumber;
    backgroundElementId: BigNumber;
    bgOrderPos: BigNumber;
    language: string;
    lastModifiedDateTime: Moment;
    readingProf: string;
    speakingProf: string;
    variant?: string;
    writingProf: string;
    application: JobApplicationType;
    languageNav: PicklistOptionType;
    readingProfNav: PicklistOptionType;
    speakingProfNav: PicklistOptionType;
    variantNav: PicklistOptionType;
    writingProfNav: PicklistOptionType;
}
export interface JobApplicationSnapshot_LanguagesTypeForceMandatory {
    applicationId: BigNumber;
    backgroundElementId: BigNumber;
    bgOrderPos: BigNumber;
    language: string;
    lastModifiedDateTime: Moment;
    readingProf: string;
    speakingProf: string;
    variant: string;
    writingProf: string;
    application: JobApplicationType;
    languageNav: PicklistOptionType;
    readingProfNav: PicklistOptionType;
    speakingProfNav: PicklistOptionType;
    variantNav: PicklistOptionType;
    writingProfNav: PicklistOptionType;
}
export declare namespace JobApplicationSnapshot_Languages {
    /**
     * Static representation of the [[applicationId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const APPLICATION_ID: BigNumberField<JobApplicationSnapshot_Languages>;
    /**
     * Static representation of the [[backgroundElementId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BACKGROUND_ELEMENT_ID: BigNumberField<JobApplicationSnapshot_Languages>;
    /**
     * Static representation of the [[bgOrderPos]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BG_ORDER_POS: BigNumberField<JobApplicationSnapshot_Languages>;
    /**
     * Static representation of the [[language]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LANGUAGE: StringField<JobApplicationSnapshot_Languages>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<JobApplicationSnapshot_Languages>;
    /**
     * Static representation of the [[readingProf]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const READING_PROF: StringField<JobApplicationSnapshot_Languages>;
    /**
     * Static representation of the [[speakingProf]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SPEAKING_PROF: StringField<JobApplicationSnapshot_Languages>;
    /**
     * Static representation of the [[variant]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VARIANT: StringField<JobApplicationSnapshot_Languages>;
    /**
     * Static representation of the [[writingProf]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WRITING_PROF: StringField<JobApplicationSnapshot_Languages>;
    /**
     * Static representation of the one-to-one navigation property [[application]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const APPLICATION: OneToOneLink<JobApplicationSnapshot_Languages, JobApplication>;
    /**
     * Static representation of the one-to-one navigation property [[languageNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LANGUAGE_NAV: OneToOneLink<JobApplicationSnapshot_Languages, PicklistOption>;
    /**
     * Static representation of the one-to-one navigation property [[readingProfNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const READING_PROF_NAV: OneToOneLink<JobApplicationSnapshot_Languages, PicklistOption>;
    /**
     * Static representation of the one-to-one navigation property [[speakingProfNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SPEAKING_PROF_NAV: OneToOneLink<JobApplicationSnapshot_Languages, PicklistOption>;
    /**
     * Static representation of the one-to-one navigation property [[variantNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VARIANT_NAV: OneToOneLink<JobApplicationSnapshot_Languages, PicklistOption>;
    /**
     * Static representation of the one-to-one navigation property [[writingProfNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WRITING_PROF_NAV: OneToOneLink<JobApplicationSnapshot_Languages, PicklistOption>;
    /**
     * All fields of the JobApplicationSnapshot_Languages entity.
     */
    const _allFields: Array<BigNumberField<JobApplicationSnapshot_Languages> | StringField<JobApplicationSnapshot_Languages> | DateField<JobApplicationSnapshot_Languages> | OneToOneLink<JobApplicationSnapshot_Languages, JobApplication> | OneToOneLink<JobApplicationSnapshot_Languages, PicklistOption>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<JobApplicationSnapshot_Languages>;
    /**
     * All key fields of the JobApplicationSnapshot_Languages entity.
     */
    const _keyFields: Array<Selectable<JobApplicationSnapshot_Languages>>;
    /**
     * Mapping of all key field names to the respective static field property JobApplicationSnapshot_Languages.
     */
    const _keys: {
        [keys: string]: Selectable<JobApplicationSnapshot_Languages>;
    };
}
//# sourceMappingURL=JobApplicationSnapshot_Languages.d.ts.map