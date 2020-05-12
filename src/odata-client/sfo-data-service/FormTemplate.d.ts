import { FormTemplateRequestBuilder } from './FormTemplateRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, Entity, EntityBuilderType, Link, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "FormTemplate" of service "SFOData".
 */
export declare class FormTemplate extends Entity implements FormTemplateType {
    /**
     * Technical entity name for FormTemplate.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for FormTemplate.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * formTemplateId.
     */
    formTemplateId: BigNumber;
    /**
     * formTemplateName.
     */
    formTemplateName: string;
    /**
     * formTemplateType.
     */
    formTemplateType: string;
    /**
     * One-to-many navigation property to the [[FormHeader]] entity.
     */
    associatedForms: FormHeader[];
    /**
     * Returns an entity builder to construct instances `FormTemplate`.
     * @returns A builder that constructs instances of entity type `FormTemplate`.
     */
    static builder(): EntityBuilderType<FormTemplate, FormTemplateTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `FormTemplate` entity type.
     * @returns A `FormTemplate` request builder.
     */
    static requestBuilder(): FormTemplateRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `FormTemplate`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `FormTemplate`.
     */
    static customField(fieldName: string): CustomField<FormTemplate>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { FormHeader, FormHeaderType } from './FormHeader';
export interface FormTemplateType {
    formTemplateId: BigNumber;
    formTemplateName: string;
    formTemplateType: string;
    associatedForms: FormHeaderType[];
}
export interface FormTemplateTypeForceMandatory {
    formTemplateId: BigNumber;
    formTemplateName: string;
    formTemplateType: string;
    associatedForms: FormHeaderType[];
}
export declare namespace FormTemplate {
    /**
     * Static representation of the [[formTemplateId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FORM_TEMPLATE_ID: BigNumberField<FormTemplate>;
    /**
     * Static representation of the [[formTemplateName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FORM_TEMPLATE_NAME: StringField<FormTemplate>;
    /**
     * Static representation of the [[formTemplateType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FORM_TEMPLATE_TYPE: StringField<FormTemplate>;
    /**
     * Static representation of the one-to-many navigation property [[associatedForms]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ASSOCIATED_FORMS: Link<FormTemplate, FormHeader>;
    /**
     * All fields of the FormTemplate entity.
     */
    const _allFields: Array<BigNumberField<FormTemplate> | StringField<FormTemplate> | Link<FormTemplate, FormHeader>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<FormTemplate>;
    /**
     * All key fields of the FormTemplate entity.
     */
    const _keyFields: Array<Selectable<FormTemplate>>;
    /**
     * Mapping of all key field names to the respective static field property FormTemplate.
     */
    const _keys: {
        [keys: string]: Selectable<FormTemplate>;
    };
}
//# sourceMappingURL=FormTemplate.d.ts.map