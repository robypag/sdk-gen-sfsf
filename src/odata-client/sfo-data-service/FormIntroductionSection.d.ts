import { FormIntroductionSectionRequestBuilder } from './FormIntroductionSectionRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, Entity, EntityBuilderType, NumberField, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "FormIntroductionSection" of service "SFOData".
 */
export declare class FormIntroductionSection extends Entity implements FormIntroductionSectionType {
    /**
     * Technical entity name for FormIntroductionSection.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for FormIntroductionSection.
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
     * Returns an entity builder to construct instances `FormIntroductionSection`.
     * @returns A builder that constructs instances of entity type `FormIntroductionSection`.
     */
    static builder(): EntityBuilderType<FormIntroductionSection, FormIntroductionSectionTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `FormIntroductionSection` entity type.
     * @returns A `FormIntroductionSection` request builder.
     */
    static requestBuilder(): FormIntroductionSectionRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `FormIntroductionSection`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `FormIntroductionSection`.
     */
    static customField(fieldName: string): CustomField<FormIntroductionSection>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface FormIntroductionSectionType {
    formContentId: BigNumber;
    formDataId: BigNumber;
    sectionDescription?: string;
    sectionIndex: number;
    sectionName?: string;
}
export interface FormIntroductionSectionTypeForceMandatory {
    formContentId: BigNumber;
    formDataId: BigNumber;
    sectionDescription: string;
    sectionIndex: number;
    sectionName: string;
}
export declare namespace FormIntroductionSection {
    /**
     * Static representation of the [[formContentId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FORM_CONTENT_ID: BigNumberField<FormIntroductionSection>;
    /**
     * Static representation of the [[formDataId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FORM_DATA_ID: BigNumberField<FormIntroductionSection>;
    /**
     * Static representation of the [[sectionDescription]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SECTION_DESCRIPTION: StringField<FormIntroductionSection>;
    /**
     * Static representation of the [[sectionIndex]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SECTION_INDEX: NumberField<FormIntroductionSection>;
    /**
     * Static representation of the [[sectionName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SECTION_NAME: StringField<FormIntroductionSection>;
    /**
     * All fields of the FormIntroductionSection entity.
     */
    const _allFields: Array<BigNumberField<FormIntroductionSection> | StringField<FormIntroductionSection> | NumberField<FormIntroductionSection>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<FormIntroductionSection>;
    /**
     * All key fields of the FormIntroductionSection entity.
     */
    const _keyFields: Array<Selectable<FormIntroductionSection>>;
    /**
     * Mapping of all key field names to the respective static field property FormIntroductionSection.
     */
    const _keys: {
        [keys: string]: Selectable<FormIntroductionSection>;
    };
}
//# sourceMappingURL=FormIntroductionSection.d.ts.map