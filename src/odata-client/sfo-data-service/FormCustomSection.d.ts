import { FormCustomSectionRequestBuilder } from './FormCustomSectionRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, Entity, EntityBuilderType, Link, NumberField, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "FormCustomSection" of service "SFOData".
 */
export declare class FormCustomSection extends Entity implements FormCustomSectionType {
    /**
     * Technical entity name for FormCustomSection.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for FormCustomSection.
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
     * One-to-many navigation property to the [[FormCustomElement]] entity.
     */
    customElement: FormCustomElement[];
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
     * Returns an entity builder to construct instances `FormCustomSection`.
     * @returns A builder that constructs instances of entity type `FormCustomSection`.
     */
    static builder(): EntityBuilderType<FormCustomSection, FormCustomSectionTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `FormCustomSection` entity type.
     * @returns A `FormCustomSection` request builder.
     */
    static requestBuilder(): FormCustomSectionRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `FormCustomSection`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `FormCustomSection`.
     */
    static customField(fieldName: string): CustomField<FormCustomSection>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { FormCustomElement, FormCustomElementType } from './FormCustomElement';
import { FormUserRatingComment, FormUserRatingCommentType } from './FormUserRatingComment';
import { FormSectionConfiguration, FormSectionConfigurationType } from './FormSectionConfiguration';
export interface FormCustomSectionType {
    formContentId: BigNumber;
    formDataId: BigNumber;
    sectionDescription?: string;
    sectionIndex: number;
    sectionName?: string;
    customElement: FormCustomElementType[];
    othersRatingComment: FormUserRatingCommentType[];
    sectionConfiguration: FormSectionConfigurationType;
    selfRatingComment: FormUserRatingCommentType;
}
export interface FormCustomSectionTypeForceMandatory {
    formContentId: BigNumber;
    formDataId: BigNumber;
    sectionDescription: string;
    sectionIndex: number;
    sectionName: string;
    customElement: FormCustomElementType[];
    othersRatingComment: FormUserRatingCommentType[];
    sectionConfiguration: FormSectionConfigurationType;
    selfRatingComment: FormUserRatingCommentType;
}
export declare namespace FormCustomSection {
    /**
     * Static representation of the [[formContentId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FORM_CONTENT_ID: BigNumberField<FormCustomSection>;
    /**
     * Static representation of the [[formDataId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FORM_DATA_ID: BigNumberField<FormCustomSection>;
    /**
     * Static representation of the [[sectionDescription]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SECTION_DESCRIPTION: StringField<FormCustomSection>;
    /**
     * Static representation of the [[sectionIndex]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SECTION_INDEX: NumberField<FormCustomSection>;
    /**
     * Static representation of the [[sectionName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SECTION_NAME: StringField<FormCustomSection>;
    /**
     * Static representation of the one-to-many navigation property [[customElement]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOM_ELEMENT: Link<FormCustomSection, FormCustomElement>;
    /**
     * Static representation of the one-to-many navigation property [[othersRatingComment]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OTHERS_RATING_COMMENT: Link<FormCustomSection, FormUserRatingComment>;
    /**
     * Static representation of the one-to-one navigation property [[sectionConfiguration]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SECTION_CONFIGURATION: OneToOneLink<FormCustomSection, FormSectionConfiguration>;
    /**
     * Static representation of the one-to-one navigation property [[selfRatingComment]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SELF_RATING_COMMENT: OneToOneLink<FormCustomSection, FormUserRatingComment>;
    /**
     * All fields of the FormCustomSection entity.
     */
    const _allFields: Array<BigNumberField<FormCustomSection> | StringField<FormCustomSection> | NumberField<FormCustomSection> | Link<FormCustomSection, FormCustomElement> | Link<FormCustomSection, FormUserRatingComment> | OneToOneLink<FormCustomSection, FormSectionConfiguration> | OneToOneLink<FormCustomSection, FormUserRatingComment>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<FormCustomSection>;
    /**
     * All key fields of the FormCustomSection entity.
     */
    const _keyFields: Array<Selectable<FormCustomSection>>;
    /**
     * Mapping of all key field names to the respective static field property FormCustomSection.
     */
    const _keys: {
        [keys: string]: Selectable<FormCustomSection>;
    };
}
//# sourceMappingURL=FormCustomSection.d.ts.map