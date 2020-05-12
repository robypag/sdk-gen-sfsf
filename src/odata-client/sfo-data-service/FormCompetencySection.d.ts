import { FormCompetencySectionRequestBuilder } from './FormCompetencySectionRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, Entity, EntityBuilderType, Link, NumberField, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "FormCompetencySection" of service "SFOData".
 */
export declare class FormCompetencySection extends Entity implements FormCompetencySectionType {
    /**
     * Technical entity name for FormCompetencySection.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for FormCompetencySection.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * formContentId.
     */
    formContentId: BigNumber;
    /**
     * formDataId.
     */
    formDataId: BigNumber;
    /**
     * sectionDescription.
     * @nullable
     */
    sectionDescription?: string;
    /**
     * sectionIndex.
     */
    sectionIndex: number;
    /**
     * sectionName.
     * @nullable
     */
    sectionName?: string;
    /**
     * sectionWeight.
     * @nullable
     */
    sectionWeight?: string;
    /**
     * sectionWeightKey.
     * @nullable
     */
    sectionWeightKey?: string;
    /**
     * One-to-many navigation property to the [[FormCompetency]] entity.
     */
    competencies: FormCompetency[];
    /**
     * One-to-many navigation property to the [[FormUserRatingComment]] entity.
     */
    othersRatingComment: FormUserRatingComment[];
    /**
     * One-to-one navigation property to the [[FormSectionConfiguration]] entity.
     */
    sectionConfiguration: FormSectionConfiguration;
    /**
     * One-to-one navigation property to the [[FormUserRatingComment]] entity.
     */
    selfRatingComment: FormUserRatingComment;
    /**
     * Returns an entity builder to construct instances `FormCompetencySection`.
     * @returns A builder that constructs instances of entity type `FormCompetencySection`.
     */
    static builder(): EntityBuilderType<FormCompetencySection, FormCompetencySectionTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `FormCompetencySection` entity type.
     * @returns A `FormCompetencySection` request builder.
     */
    static requestBuilder(): FormCompetencySectionRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `FormCompetencySection`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `FormCompetencySection`.
     */
    static customField(fieldName: string): CustomField<FormCompetencySection>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { FormCompetency, FormCompetencyType } from './FormCompetency';
import { FormUserRatingComment, FormUserRatingCommentType } from './FormUserRatingComment';
import { FormSectionConfiguration, FormSectionConfigurationType } from './FormSectionConfiguration';
export interface FormCompetencySectionType {
    formContentId: BigNumber;
    formDataId: BigNumber;
    sectionDescription?: string;
    sectionIndex: number;
    sectionName?: string;
    sectionWeight?: string;
    sectionWeightKey?: string;
    competencies: FormCompetencyType[];
    othersRatingComment: FormUserRatingCommentType[];
    sectionConfiguration: FormSectionConfigurationType;
    selfRatingComment: FormUserRatingCommentType;
}
export interface FormCompetencySectionTypeForceMandatory {
    formContentId: BigNumber;
    formDataId: BigNumber;
    sectionDescription: string;
    sectionIndex: number;
    sectionName: string;
    sectionWeight: string;
    sectionWeightKey: string;
    competencies: FormCompetencyType[];
    othersRatingComment: FormUserRatingCommentType[];
    sectionConfiguration: FormSectionConfigurationType;
    selfRatingComment: FormUserRatingCommentType;
}
export declare namespace FormCompetencySection {
    /**
     * Static representation of the [[formContentId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FORM_CONTENT_ID: BigNumberField<FormCompetencySection>;
    /**
     * Static representation of the [[formDataId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FORM_DATA_ID: BigNumberField<FormCompetencySection>;
    /**
     * Static representation of the [[sectionDescription]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SECTION_DESCRIPTION: StringField<FormCompetencySection>;
    /**
     * Static representation of the [[sectionIndex]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SECTION_INDEX: NumberField<FormCompetencySection>;
    /**
     * Static representation of the [[sectionName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SECTION_NAME: StringField<FormCompetencySection>;
    /**
     * Static representation of the [[sectionWeight]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SECTION_WEIGHT: StringField<FormCompetencySection>;
    /**
     * Static representation of the [[sectionWeightKey]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SECTION_WEIGHT_KEY: StringField<FormCompetencySection>;
    /**
     * Static representation of the one-to-many navigation property [[competencies]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COMPETENCIES: Link<FormCompetencySection, FormCompetency>;
    /**
     * Static representation of the one-to-many navigation property [[othersRatingComment]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OTHERS_RATING_COMMENT: Link<FormCompetencySection, FormUserRatingComment>;
    /**
     * Static representation of the one-to-one navigation property [[sectionConfiguration]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SECTION_CONFIGURATION: OneToOneLink<FormCompetencySection, FormSectionConfiguration>;
    /**
     * Static representation of the one-to-one navigation property [[selfRatingComment]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SELF_RATING_COMMENT: OneToOneLink<FormCompetencySection, FormUserRatingComment>;
    /**
     * All fields of the FormCompetencySection entity.
     */
    const _allFields: Array<BigNumberField<FormCompetencySection> | StringField<FormCompetencySection> | NumberField<FormCompetencySection> | Link<FormCompetencySection, FormCompetency> | Link<FormCompetencySection, FormUserRatingComment> | OneToOneLink<FormCompetencySection, FormSectionConfiguration> | OneToOneLink<FormCompetencySection, FormUserRatingComment>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<FormCompetencySection>;
    /**
     * All key fields of the FormCompetencySection entity.
     */
    const _keyFields: Array<Selectable<FormCompetencySection>>;
    /**
     * Mapping of all key field names to the respective static field property FormCompetencySection.
     */
    const _keys: {
        [keys: string]: Selectable<FormCompetencySection>;
    };
}
//# sourceMappingURL=FormCompetencySection.d.ts.map