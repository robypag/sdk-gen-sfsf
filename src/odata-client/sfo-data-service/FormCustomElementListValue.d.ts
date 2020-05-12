import { FormCustomElementListValueRequestBuilder } from './FormCustomElementListValueRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, Entity, EntityBuilderType, NumberField, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "FormCustomElementListValue" of service "SFOData".
 */
export declare class FormCustomElementListValue extends Entity implements FormCustomElementListValueType {
    /**
     * Technical entity name for FormCustomElementListValue.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for FormCustomElementListValue.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
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
     * listIndex.
     * @nullable
     */
    listIndex?: number;
    /**
     * name.
     */
    name: string;
    /**
     * sectionIndex.
     */
    sectionIndex: number;
    /**
     * selected.
     * @nullable
     */
    selected?: boolean;
    /**
     * value.
     * @nullable
     */
    value?: string;
    /**
     * Returns an entity builder to construct instances `FormCustomElementListValue`.
     * @returns A builder that constructs instances of entity type `FormCustomElementListValue`.
     */
    static builder(): EntityBuilderType<FormCustomElementListValue, FormCustomElementListValueTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `FormCustomElementListValue` entity type.
     * @returns A `FormCustomElementListValue` request builder.
     */
    static requestBuilder(): FormCustomElementListValueRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `FormCustomElementListValue`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `FormCustomElementListValue`.
     */
    static customField(fieldName: string): CustomField<FormCustomElementListValue>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface FormCustomElementListValueType {
    elementKey: string;
    formContentId: BigNumber;
    formDataId: BigNumber;
    itemId: BigNumber;
    listIndex?: number;
    name: string;
    sectionIndex: number;
    selected?: boolean;
    value?: string;
}
export interface FormCustomElementListValueTypeForceMandatory {
    elementKey: string;
    formContentId: BigNumber;
    formDataId: BigNumber;
    itemId: BigNumber;
    listIndex: number;
    name: string;
    sectionIndex: number;
    selected: boolean;
    value: string;
}
export declare namespace FormCustomElementListValue {
    /**
     * Static representation of the [[elementKey]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ELEMENT_KEY: StringField<FormCustomElementListValue>;
    /**
     * Static representation of the [[formContentId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FORM_CONTENT_ID: BigNumberField<FormCustomElementListValue>;
    /**
     * Static representation of the [[formDataId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FORM_DATA_ID: BigNumberField<FormCustomElementListValue>;
    /**
     * Static representation of the [[itemId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ITEM_ID: BigNumberField<FormCustomElementListValue>;
    /**
     * Static representation of the [[listIndex]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LIST_INDEX: NumberField<FormCustomElementListValue>;
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME: StringField<FormCustomElementListValue>;
    /**
     * Static representation of the [[sectionIndex]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SECTION_INDEX: NumberField<FormCustomElementListValue>;
    /**
     * Static representation of the [[selected]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SELECTED: BooleanField<FormCustomElementListValue>;
    /**
     * Static representation of the [[value]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VALUE: StringField<FormCustomElementListValue>;
    /**
     * All fields of the FormCustomElementListValue entity.
     */
    const _allFields: Array<StringField<FormCustomElementListValue> | BigNumberField<FormCustomElementListValue> | NumberField<FormCustomElementListValue> | BooleanField<FormCustomElementListValue>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<FormCustomElementListValue>;
    /**
     * All key fields of the FormCustomElementListValue entity.
     */
    const _keyFields: Array<Selectable<FormCustomElementListValue>>;
    /**
     * Mapping of all key field names to the respective static field property FormCustomElementListValue.
     */
    const _keys: {
        [keys: string]: Selectable<FormCustomElementListValue>;
    };
}
//# sourceMappingURL=FormCustomElementListValue.d.ts.map