import { Form360RaterRequestBuilder } from './Form360RaterRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "Form360Rater" of service "SFOData".
 */
export declare class Form360Rater extends Entity implements Form360RaterType {
    /**
     * Technical entity name for Form360Rater.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for Form360Rater.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * category.
     * @nullable
     */
    category?: string;
    /**
     * cellPhone.
     * @nullable
     */
    cellPhone?: string;
    /**
     * company.
     * @nullable
     */
    company?: string;
    /**
     * department.
     * @nullable
     */
    department?: string;
    /**
     * division.
     * @nullable
     */
    division?: string;
    /**
     * formContentId.
     */
    formContentId: BigNumber;
    /**
     * formDataId.
     */
    formDataId: BigNumber;
    /**
     * internalOrExternal.
     * @nullable
     */
    internalOrExternal?: string;
    /**
     * jobCode.
     * @nullable
     */
    jobCode?: string;
    /**
     * jobTitle.
     * @nullable
     */
    jobTitle?: string;
    /**
     * mail.
     * @nullable
     */
    mail?: string;
    /**
     * manager.
     * @nullable
     */
    manager?: string;
    /**
     * participantID.
     * @nullable
     */
    participantId?: string;
    /**
     * participantName.
     * @nullable
     */
    participantName?: string;
    /**
     * participantRating.
     * @nullable
     */
    participantRating?: string;
    /**
     * participantRatingStatus.
     * @nullable
     */
    participantRatingStatus?: string;
    /**
     * One-to-many navigation property to the [[FormCompetencySection]] entity.
     */
    competencySections: FormCompetencySection[];
    /**
     * One-to-many navigation property to the [[FormCustomSection]] entity.
     */
    customSections: FormCustomSection[];
    /**
     * One-to-many navigation property to the [[FormObjectiveSection]] entity.
     */
    objectiveSections: FormObjectiveSection[];
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    participantUser: User;
    /**
     * One-to-one navigation property to the [[FormSummarySection]] entity.
     */
    summarySection: FormSummarySection;
    /**
     * Returns an entity builder to construct instances `Form360Rater`.
     * @returns A builder that constructs instances of entity type `Form360Rater`.
     */
    static builder(): EntityBuilderType<Form360Rater, Form360RaterTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `Form360Rater` entity type.
     * @returns A `Form360Rater` request builder.
     */
    static requestBuilder(): Form360RaterRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Form360Rater`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Form360Rater`.
     */
    static customField(fieldName: string): CustomField<Form360Rater>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { FormCompetencySection, FormCompetencySectionType } from './FormCompetencySection';
import { FormCustomSection, FormCustomSectionType } from './FormCustomSection';
import { FormObjectiveSection, FormObjectiveSectionType } from './FormObjectiveSection';
import { User, UserType } from './User';
import { FormSummarySection, FormSummarySectionType } from './FormSummarySection';
export interface Form360RaterType {
    category?: string;
    cellPhone?: string;
    company?: string;
    department?: string;
    division?: string;
    formContentId: BigNumber;
    formDataId: BigNumber;
    internalOrExternal?: string;
    jobCode?: string;
    jobTitle?: string;
    mail?: string;
    manager?: string;
    participantId?: string;
    participantName?: string;
    participantRating?: string;
    participantRatingStatus?: string;
    competencySections: FormCompetencySectionType[];
    customSections: FormCustomSectionType[];
    objectiveSections: FormObjectiveSectionType[];
    participantUser: UserType;
    summarySection: FormSummarySectionType;
}
export interface Form360RaterTypeForceMandatory {
    category: string;
    cellPhone: string;
    company: string;
    department: string;
    division: string;
    formContentId: BigNumber;
    formDataId: BigNumber;
    internalOrExternal: string;
    jobCode: string;
    jobTitle: string;
    mail: string;
    manager: string;
    participantId: string;
    participantName: string;
    participantRating: string;
    participantRatingStatus: string;
    competencySections: FormCompetencySectionType[];
    customSections: FormCustomSectionType[];
    objectiveSections: FormObjectiveSectionType[];
    participantUser: UserType;
    summarySection: FormSummarySectionType;
}
export declare namespace Form360Rater {
    /**
     * Static representation of the [[category]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CATEGORY: StringField<Form360Rater>;
    /**
     * Static representation of the [[cellPhone]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CELL_PHONE: StringField<Form360Rater>;
    /**
     * Static representation of the [[company]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COMPANY: StringField<Form360Rater>;
    /**
     * Static representation of the [[department]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEPARTMENT: StringField<Form360Rater>;
    /**
     * Static representation of the [[division]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DIVISION: StringField<Form360Rater>;
    /**
     * Static representation of the [[formContentId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FORM_CONTENT_ID: BigNumberField<Form360Rater>;
    /**
     * Static representation of the [[formDataId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FORM_DATA_ID: BigNumberField<Form360Rater>;
    /**
     * Static representation of the [[internalOrExternal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INTERNAL_OR_EXTERNAL: StringField<Form360Rater>;
    /**
     * Static representation of the [[jobCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_CODE: StringField<Form360Rater>;
    /**
     * Static representation of the [[jobTitle]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_TITLE: StringField<Form360Rater>;
    /**
     * Static representation of the [[mail]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MAIL: StringField<Form360Rater>;
    /**
     * Static representation of the [[manager]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MANAGER: StringField<Form360Rater>;
    /**
     * Static representation of the [[participantId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PARTICIPANT_ID: StringField<Form360Rater>;
    /**
     * Static representation of the [[participantName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PARTICIPANT_NAME: StringField<Form360Rater>;
    /**
     * Static representation of the [[participantRating]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PARTICIPANT_RATING: StringField<Form360Rater>;
    /**
     * Static representation of the [[participantRatingStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PARTICIPANT_RATING_STATUS: StringField<Form360Rater>;
    /**
     * Static representation of the one-to-many navigation property [[competencySections]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COMPETENCY_SECTIONS: Link<Form360Rater, FormCompetencySection>;
    /**
     * Static representation of the one-to-many navigation property [[customSections]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOM_SECTIONS: Link<Form360Rater, FormCustomSection>;
    /**
     * Static representation of the one-to-many navigation property [[objectiveSections]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OBJECTIVE_SECTIONS: Link<Form360Rater, FormObjectiveSection>;
    /**
     * Static representation of the one-to-one navigation property [[participantUser]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PARTICIPANT_USER: OneToOneLink<Form360Rater, User>;
    /**
     * Static representation of the one-to-one navigation property [[summarySection]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUMMARY_SECTION: OneToOneLink<Form360Rater, FormSummarySection>;
    /**
     * All fields of the Form360Rater entity.
     */
    const _allFields: Array<StringField<Form360Rater> | BigNumberField<Form360Rater> | Link<Form360Rater, FormCompetencySection> | Link<Form360Rater, FormCustomSection> | Link<Form360Rater, FormObjectiveSection> | OneToOneLink<Form360Rater, User> | OneToOneLink<Form360Rater, FormSummarySection>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<Form360Rater>;
    /**
     * All key fields of the Form360Rater entity.
     */
    const _keyFields: Array<Selectable<Form360Rater>>;
    /**
     * Mapping of all key field names to the respective static field property Form360Rater.
     */
    const _keys: {
        [keys: string]: Selectable<Form360Rater>;
    };
}
//# sourceMappingURL=Form360Rater.d.ts.map