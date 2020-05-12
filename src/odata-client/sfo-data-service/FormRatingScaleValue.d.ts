import { FormRatingScaleValueRequestBuilder } from './FormRatingScaleValueRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, Entity, EntityBuilderType, NumberField, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "FormRatingScaleValue" of service "SFOData".
 */
export declare class FormRatingScaleValue extends Entity implements FormRatingScaleValueType {
    /**
     * Technical entity name for FormRatingScaleValue.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for FormRatingScaleValue.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * description.
     * @nullable
     */
    description?: string;
    /**
     * formContentId.
     */
    formContentId: BigNumber;
    /**
     * formDataId.
     */
    formDataId: BigNumber;
    /**
     * longDescription.
     * @nullable
     */
    longDescription?: string;
    /**
     * scaleId.
     */
    scaleId: string;
    /**
     * sectionIndex.
     */
    sectionIndex: number;
    /**
     * value.
     */
    value: string;
    /**
     * Returns an entity builder to construct instances `FormRatingScaleValue`.
     * @returns A builder that constructs instances of entity type `FormRatingScaleValue`.
     */
    static builder(): EntityBuilderType<FormRatingScaleValue, FormRatingScaleValueTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `FormRatingScaleValue` entity type.
     * @returns A `FormRatingScaleValue` request builder.
     */
    static requestBuilder(): FormRatingScaleValueRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `FormRatingScaleValue`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `FormRatingScaleValue`.
     */
    static customField(fieldName: string): CustomField<FormRatingScaleValue>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface FormRatingScaleValueType {
    description?: string;
    formContentId: BigNumber;
    formDataId: BigNumber;
    longDescription?: string;
    scaleId: string;
    sectionIndex: number;
    value: string;
}
export interface FormRatingScaleValueTypeForceMandatory {
    description: string;
    formContentId: BigNumber;
    formDataId: BigNumber;
    longDescription: string;
    scaleId: string;
    sectionIndex: number;
    value: string;
}
export declare namespace FormRatingScaleValue {
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION: StringField<FormRatingScaleValue>;
    /**
     * Static representation of the [[formContentId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FORM_CONTENT_ID: BigNumberField<FormRatingScaleValue>;
    /**
     * Static representation of the [[formDataId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FORM_DATA_ID: BigNumberField<FormRatingScaleValue>;
    /**
     * Static representation of the [[longDescription]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LONG_DESCRIPTION: StringField<FormRatingScaleValue>;
    /**
     * Static representation of the [[scaleId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SCALE_ID: StringField<FormRatingScaleValue>;
    /**
     * Static representation of the [[sectionIndex]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SECTION_INDEX: NumberField<FormRatingScaleValue>;
    /**
     * Static representation of the [[value]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VALUE: StringField<FormRatingScaleValue>;
    /**
     * All fields of the FormRatingScaleValue entity.
     */
    const _allFields: Array<StringField<FormRatingScaleValue> | BigNumberField<FormRatingScaleValue> | NumberField<FormRatingScaleValue>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<FormRatingScaleValue>;
    /**
     * All key fields of the FormRatingScaleValue entity.
     */
    const _keyFields: Array<Selectable<FormRatingScaleValue>>;
    /**
     * Mapping of all key field names to the respective static field property FormRatingScaleValue.
     */
    const _keys: {
        [keys: string]: Selectable<FormRatingScaleValue>;
    };
}
//# sourceMappingURL=FormRatingScaleValue.d.ts.map