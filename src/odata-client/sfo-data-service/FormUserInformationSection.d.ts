import { FormUserInformationSectionRequestBuilder } from './FormUserInformationSectionRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, Entity, EntityBuilderType, Link, NumberField, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "FormUserInformationSection" of service "SFOData".
 */
export declare class FormUserInformationSection extends Entity implements FormUserInformationSectionType {
    /**
     * Technical entity name for FormUserInformationSection.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for FormUserInformationSection.
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
    userInformationElements: FormCustomElement[];
    /**
     * Returns an entity builder to construct instances `FormUserInformationSection`.
     * @returns A builder that constructs instances of entity type `FormUserInformationSection`.
     */
    static builder(): EntityBuilderType<FormUserInformationSection, FormUserInformationSectionTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `FormUserInformationSection` entity type.
     * @returns A `FormUserInformationSection` request builder.
     */
    static requestBuilder(): FormUserInformationSectionRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `FormUserInformationSection`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `FormUserInformationSection`.
     */
    static customField(fieldName: string): CustomField<FormUserInformationSection>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { FormCustomElement, FormCustomElementType } from './FormCustomElement';
export interface FormUserInformationSectionType {
    formContentId: BigNumber;
    formDataId: BigNumber;
    sectionDescription?: string;
    sectionIndex: number;
    sectionName?: string;
    userInformationElements: FormCustomElementType[];
}
export interface FormUserInformationSectionTypeForceMandatory {
    formContentId: BigNumber;
    formDataId: BigNumber;
    sectionDescription: string;
    sectionIndex: number;
    sectionName: string;
    userInformationElements: FormCustomElementType[];
}
export declare namespace FormUserInformationSection {
    /**
     * Static representation of the [[formContentId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FORM_CONTENT_ID: BigNumberField<FormUserInformationSection>;
    /**
     * Static representation of the [[formDataId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FORM_DATA_ID: BigNumberField<FormUserInformationSection>;
    /**
     * Static representation of the [[sectionDescription]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SECTION_DESCRIPTION: StringField<FormUserInformationSection>;
    /**
     * Static representation of the [[sectionIndex]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SECTION_INDEX: NumberField<FormUserInformationSection>;
    /**
     * Static representation of the [[sectionName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SECTION_NAME: StringField<FormUserInformationSection>;
    /**
     * Static representation of the one-to-many navigation property [[userInformationElements]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_INFORMATION_ELEMENTS: Link<FormUserInformationSection, FormCustomElement>;
    /**
     * All fields of the FormUserInformationSection entity.
     */
    const _allFields: Array<BigNumberField<FormUserInformationSection> | StringField<FormUserInformationSection> | NumberField<FormUserInformationSection> | Link<FormUserInformationSection, FormCustomElement>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<FormUserInformationSection>;
    /**
     * All key fields of the FormUserInformationSection entity.
     */
    const _keyFields: Array<Selectable<FormUserInformationSection>>;
    /**
     * Mapping of all key field names to the respective static field property FormUserInformationSection.
     */
    const _keys: {
        [keys: string]: Selectable<FormUserInformationSection>;
    };
}
//# sourceMappingURL=FormUserInformationSection.d.ts.map