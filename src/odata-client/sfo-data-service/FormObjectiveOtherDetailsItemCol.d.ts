import { FormObjectiveOtherDetailsItemColRequestBuilder } from './FormObjectiveOtherDetailsItemColRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, Entity, EntityBuilderType, NumberField, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "FormObjectiveOtherDetailsItemCol" of service "SFOData".
 */
export declare class FormObjectiveOtherDetailsItemCol extends Entity implements FormObjectiveOtherDetailsItemColType {
    /**
     * Technical entity name for FormObjectiveOtherDetailsItemCol.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for FormObjectiveOtherDetailsItemCol.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * datatype.
     * @nullable
     */
    datatype?: string;
    /**
     * desc.
     * @nullable
     */
    desc?: string;
    /**
     * formContentId.
     */
    formContentId: BigNumber;
    /**
     * formDataId.
     */
    formDataId: BigNumber;
    /**
     * id.
     * @nullable
     */
    id?: string;
    /**
     * index.
     * @nullable
     */
    index?: number;
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
     * Returns an entity builder to construct instances `FormObjectiveOtherDetailsItemCol`.
     * @returns A builder that constructs instances of entity type `FormObjectiveOtherDetailsItemCol`.
     */
    static builder(): EntityBuilderType<FormObjectiveOtherDetailsItemCol, FormObjectiveOtherDetailsItemColTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `FormObjectiveOtherDetailsItemCol` entity type.
     * @returns A `FormObjectiveOtherDetailsItemCol` request builder.
     */
    static requestBuilder(): FormObjectiveOtherDetailsItemColRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `FormObjectiveOtherDetailsItemCol`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `FormObjectiveOtherDetailsItemCol`.
     */
    static customField(fieldName: string): CustomField<FormObjectiveOtherDetailsItemCol>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface FormObjectiveOtherDetailsItemColType {
    datatype?: string;
    desc?: string;
    formContentId: BigNumber;
    formDataId: BigNumber;
    id?: string;
    index?: number;
    itemId: BigNumber;
    label?: string;
    sectionIndex: number;
    type: number;
}
export interface FormObjectiveOtherDetailsItemColTypeForceMandatory {
    datatype: string;
    desc: string;
    formContentId: BigNumber;
    formDataId: BigNumber;
    id: string;
    index: number;
    itemId: BigNumber;
    label: string;
    sectionIndex: number;
    type: number;
}
export declare namespace FormObjectiveOtherDetailsItemCol {
    /**
     * Static representation of the [[datatype]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DATATYPE: StringField<FormObjectiveOtherDetailsItemCol>;
    /**
     * Static representation of the [[desc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESC: StringField<FormObjectiveOtherDetailsItemCol>;
    /**
     * Static representation of the [[formContentId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FORM_CONTENT_ID: BigNumberField<FormObjectiveOtherDetailsItemCol>;
    /**
     * Static representation of the [[formDataId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FORM_DATA_ID: BigNumberField<FormObjectiveOtherDetailsItemCol>;
    /**
     * Static representation of the [[id]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ID: StringField<FormObjectiveOtherDetailsItemCol>;
    /**
     * Static representation of the [[index]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INDEX: NumberField<FormObjectiveOtherDetailsItemCol>;
    /**
     * Static representation of the [[itemId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ITEM_ID: BigNumberField<FormObjectiveOtherDetailsItemCol>;
    /**
     * Static representation of the [[label]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LABEL: StringField<FormObjectiveOtherDetailsItemCol>;
    /**
     * Static representation of the [[sectionIndex]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SECTION_INDEX: NumberField<FormObjectiveOtherDetailsItemCol>;
    /**
     * Static representation of the [[type]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TYPE: NumberField<FormObjectiveOtherDetailsItemCol>;
    /**
     * All fields of the FormObjectiveOtherDetailsItemCol entity.
     */
    const _allFields: Array<StringField<FormObjectiveOtherDetailsItemCol> | BigNumberField<FormObjectiveOtherDetailsItemCol> | NumberField<FormObjectiveOtherDetailsItemCol>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<FormObjectiveOtherDetailsItemCol>;
    /**
     * All key fields of the FormObjectiveOtherDetailsItemCol entity.
     */
    const _keyFields: Array<Selectable<FormObjectiveOtherDetailsItemCol>>;
    /**
     * Mapping of all key field names to the respective static field property FormObjectiveOtherDetailsItemCol.
     */
    const _keys: {
        [keys: string]: Selectable<FormObjectiveOtherDetailsItemCol>;
    };
}
//# sourceMappingURL=FormObjectiveOtherDetailsItemCol.d.ts.map