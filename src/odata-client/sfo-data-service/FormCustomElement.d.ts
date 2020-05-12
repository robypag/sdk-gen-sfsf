import { FormCustomElementRequestBuilder } from './FormCustomElementRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, Entity, EntityBuilderType, Link, NumberField, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "FormCustomElement" of service "SFOData".
 */
export declare class FormCustomElement extends Entity implements FormCustomElementType {
    /**
     * Technical entity name for FormCustomElement.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for FormCustomElement.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * checked.
     * @nullable
     */
    checked?: boolean;
    /**
     * dateFormat.
     * @nullable
     */
    dateFormat?: string;
    /**
     * editable.
     * @nullable
     */
    editable?: boolean;
    /**
     * elementIndex.
     * @nullable
     */
    elementIndex?: number;
    /**
     * elementKey.
     */
    elementKey: string;
    /**
     * formContentId.
     */
    formContentId: BigNumber;
    /**
     * formDataId.
     */
    formDataId: BigNumber;
    /**
     * itemId.
     */
    itemId: BigNumber;
    /**
     * maximumValue.
     * @nullable
     */
    maximumValue?: number;
    /**
     * minimumValue.
     * @nullable
     */
    minimumValue?: number;
    /**
     * name.
     * @nullable
     */
    name?: string;
    /**
     * required.
     * @nullable
     */
    required?: boolean;
    /**
     * sectionIndex.
     */
    sectionIndex: number;
    /**
     * textMaximumLength.
     * @nullable
     */
    textMaximumLength?: number;
    /**
     * textSize.
     * @nullable
     */
    textSize?: number;
    /**
     * type.
     * @nullable
     */
    type?: string;
    /**
     * value.
     * @nullable
     */
    value?: string;
    /**
     * valueKey.
     * @nullable
     */
    valueKey?: string;
    /**
     * writingAssistant.
     * @nullable
     */
    writingAssistant?: boolean;
    /**
     * One-to-many navigation property to the [[FormCustomElementListValue]] entity.
     */
    elementListValues: FormCustomElementListValue[];
    /**
     * Returns an entity builder to construct instances `FormCustomElement`.
     * @returns A builder that constructs instances of entity type `FormCustomElement`.
     */
    static builder(): EntityBuilderType<FormCustomElement, FormCustomElementTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `FormCustomElement` entity type.
     * @returns A `FormCustomElement` request builder.
     */
    static requestBuilder(): FormCustomElementRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `FormCustomElement`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `FormCustomElement`.
     */
    static customField(fieldName: string): CustomField<FormCustomElement>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { FormCustomElementListValue, FormCustomElementListValueType } from './FormCustomElementListValue';
export interface FormCustomElementType {
    checked?: boolean;
    dateFormat?: string;
    editable?: boolean;
    elementIndex?: number;
    elementKey: string;
    formContentId: BigNumber;
    formDataId: BigNumber;
    itemId: BigNumber;
    maximumValue?: number;
    minimumValue?: number;
    name?: string;
    required?: boolean;
    sectionIndex: number;
    textMaximumLength?: number;
    textSize?: number;
    type?: string;
    value?: string;
    valueKey?: string;
    writingAssistant?: boolean;
    elementListValues: FormCustomElementListValueType[];
}
export interface FormCustomElementTypeForceMandatory {
    checked: boolean;
    dateFormat: string;
    editable: boolean;
    elementIndex: number;
    elementKey: string;
    formContentId: BigNumber;
    formDataId: BigNumber;
    itemId: BigNumber;
    maximumValue: number;
    minimumValue: number;
    name: string;
    required: boolean;
    sectionIndex: number;
    textMaximumLength: number;
    textSize: number;
    type: string;
    value: string;
    valueKey: string;
    writingAssistant: boolean;
    elementListValues: FormCustomElementListValueType[];
}
export declare namespace FormCustomElement {
    /**
     * Static representation of the [[checked]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CHECKED: BooleanField<FormCustomElement>;
    /**
     * Static representation of the [[dateFormat]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DATE_FORMAT: StringField<FormCustomElement>;
    /**
     * Static representation of the [[editable]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EDITABLE: BooleanField<FormCustomElement>;
    /**
     * Static representation of the [[elementIndex]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ELEMENT_INDEX: NumberField<FormCustomElement>;
    /**
     * Static representation of the [[elementKey]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ELEMENT_KEY: StringField<FormCustomElement>;
    /**
     * Static representation of the [[formContentId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FORM_CONTENT_ID: BigNumberField<FormCustomElement>;
    /**
     * Static representation of the [[formDataId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FORM_DATA_ID: BigNumberField<FormCustomElement>;
    /**
     * Static representation of the [[itemId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ITEM_ID: BigNumberField<FormCustomElement>;
    /**
     * Static representation of the [[maximumValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MAXIMUM_VALUE: NumberField<FormCustomElement>;
    /**
     * Static representation of the [[minimumValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MINIMUM_VALUE: NumberField<FormCustomElement>;
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME: StringField<FormCustomElement>;
    /**
     * Static representation of the [[required]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REQUIRED: BooleanField<FormCustomElement>;
    /**
     * Static representation of the [[sectionIndex]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SECTION_INDEX: NumberField<FormCustomElement>;
    /**
     * Static representation of the [[textMaximumLength]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TEXT_MAXIMUM_LENGTH: NumberField<FormCustomElement>;
    /**
     * Static representation of the [[textSize]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TEXT_SIZE: NumberField<FormCustomElement>;
    /**
     * Static representation of the [[type]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TYPE: StringField<FormCustomElement>;
    /**
     * Static representation of the [[value]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VALUE: StringField<FormCustomElement>;
    /**
     * Static representation of the [[valueKey]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VALUE_KEY: StringField<FormCustomElement>;
    /**
     * Static representation of the [[writingAssistant]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WRITING_ASSISTANT: BooleanField<FormCustomElement>;
    /**
     * Static representation of the one-to-many navigation property [[elementListValues]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ELEMENT_LIST_VALUES: Link<FormCustomElement, FormCustomElementListValue>;
    /**
     * All fields of the FormCustomElement entity.
     */
    const _allFields: Array<BooleanField<FormCustomElement> | StringField<FormCustomElement> | NumberField<FormCustomElement> | BigNumberField<FormCustomElement> | Link<FormCustomElement, FormCustomElementListValue>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<FormCustomElement>;
    /**
     * All key fields of the FormCustomElement entity.
     */
    const _keyFields: Array<Selectable<FormCustomElement>>;
    /**
     * Mapping of all key field names to the respective static field property FormCustomElement.
     */
    const _keys: {
        [keys: string]: Selectable<FormCustomElement>;
    };
}
//# sourceMappingURL=FormCustomElement.d.ts.map