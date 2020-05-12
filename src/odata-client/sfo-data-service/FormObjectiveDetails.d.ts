import { FormObjectiveDetailsRequestBuilder } from './FormObjectiveDetailsRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, Entity, EntityBuilderType, NumberField, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "FormObjectiveDetails" of service "SFOData".
 */
export declare class FormObjectiveDetails extends Entity implements FormObjectiveDetailsType {
    /**
     * Technical entity name for FormObjectiveDetails.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for FormObjectiveDetails.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * fieldDataType.
     * @nullable
     */
    fieldDataType?: string;
    /**
     * fieldId.
     * @nullable
     */
    fieldId?: string;
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
     * label.
     * @nullable
     */
    label?: string;
    /**
     * sectionIndex.
     */
    sectionIndex: number;
    /**
     * type.
     */
    type: number;
    /**
     * value.
     * @nullable
     */
    value?: string;
    /**
     * Returns an entity builder to construct instances `FormObjectiveDetails`.
     * @returns A builder that constructs instances of entity type `FormObjectiveDetails`.
     */
    static builder(): EntityBuilderType<FormObjectiveDetails, FormObjectiveDetailsTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `FormObjectiveDetails` entity type.
     * @returns A `FormObjectiveDetails` request builder.
     */
    static requestBuilder(): FormObjectiveDetailsRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `FormObjectiveDetails`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `FormObjectiveDetails`.
     */
    static customField(fieldName: string): CustomField<FormObjectiveDetails>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface FormObjectiveDetailsType {
    fieldDataType?: string;
    fieldId?: string;
    formContentId: BigNumber;
    formDataId: BigNumber;
    itemId: BigNumber;
    label?: string;
    sectionIndex: number;
    type: number;
    value?: string;
}
export interface FormObjectiveDetailsTypeForceMandatory {
    fieldDataType: string;
    fieldId: string;
    formContentId: BigNumber;
    formDataId: BigNumber;
    itemId: BigNumber;
    label: string;
    sectionIndex: number;
    type: number;
    value: string;
}
export declare namespace FormObjectiveDetails {
    /**
     * Static representation of the [[fieldDataType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FIELD_DATA_TYPE: StringField<FormObjectiveDetails>;
    /**
     * Static representation of the [[fieldId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FIELD_ID: StringField<FormObjectiveDetails>;
    /**
     * Static representation of the [[formContentId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FORM_CONTENT_ID: BigNumberField<FormObjectiveDetails>;
    /**
     * Static representation of the [[formDataId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FORM_DATA_ID: BigNumberField<FormObjectiveDetails>;
    /**
     * Static representation of the [[itemId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ITEM_ID: BigNumberField<FormObjectiveDetails>;
    /**
     * Static representation of the [[label]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LABEL: StringField<FormObjectiveDetails>;
    /**
     * Static representation of the [[sectionIndex]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SECTION_INDEX: NumberField<FormObjectiveDetails>;
    /**
     * Static representation of the [[type]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TYPE: NumberField<FormObjectiveDetails>;
    /**
     * Static representation of the [[value]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VALUE: StringField<FormObjectiveDetails>;
    /**
     * All fields of the FormObjectiveDetails entity.
     */
    const _allFields: Array<StringField<FormObjectiveDetails> | BigNumberField<FormObjectiveDetails> | NumberField<FormObjectiveDetails>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<FormObjectiveDetails>;
    /**
     * All key fields of the FormObjectiveDetails entity.
     */
    const _keyFields: Array<Selectable<FormObjectiveDetails>>;
    /**
     * Mapping of all key field names to the respective static field property FormObjectiveDetails.
     */
    const _keys: {
        [keys: string]: Selectable<FormObjectiveDetails>;
    };
}
//# sourceMappingURL=FormObjectiveDetails.d.ts.map