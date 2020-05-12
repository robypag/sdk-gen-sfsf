import { FormObjectiveOtherDetailsItemValueCellRequestBuilder } from './FormObjectiveOtherDetailsItemValueCellRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, Entity, EntityBuilderType, NumberField, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "FormObjectiveOtherDetailsItemValueCell" of service "SFOData".
 */
export declare class FormObjectiveOtherDetailsItemValueCell extends Entity implements FormObjectiveOtherDetailsItemValueCellType {
    /**
     * Technical entity name for FormObjectiveOtherDetailsItemValueCell.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for FormObjectiveOtherDetailsItemValueCell.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * colId.
     * @nullable
     */
    colId?: string;
    /**
     * colIndex.
     * @nullable
     */
    colIndex?: number;
    /**
     * datatype.
     * @nullable
     */
    datatype?: string;
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
     * rowIndex.
     * @nullable
     */
    rowIndex?: number;
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
     * Returns an entity builder to construct instances `FormObjectiveOtherDetailsItemValueCell`.
     * @returns A builder that constructs instances of entity type `FormObjectiveOtherDetailsItemValueCell`.
     */
    static builder(): EntityBuilderType<FormObjectiveOtherDetailsItemValueCell, FormObjectiveOtherDetailsItemValueCellTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `FormObjectiveOtherDetailsItemValueCell` entity type.
     * @returns A `FormObjectiveOtherDetailsItemValueCell` request builder.
     */
    static requestBuilder(): FormObjectiveOtherDetailsItemValueCellRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `FormObjectiveOtherDetailsItemValueCell`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `FormObjectiveOtherDetailsItemValueCell`.
     */
    static customField(fieldName: string): CustomField<FormObjectiveOtherDetailsItemValueCell>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface FormObjectiveOtherDetailsItemValueCellType {
    colId?: string;
    colIndex?: number;
    datatype?: string;
    formContentId: BigNumber;
    formDataId: BigNumber;
    itemId: BigNumber;
    rowIndex?: number;
    sectionIndex: number;
    type: number;
    value?: string;
}
export interface FormObjectiveOtherDetailsItemValueCellTypeForceMandatory {
    colId: string;
    colIndex: number;
    datatype: string;
    formContentId: BigNumber;
    formDataId: BigNumber;
    itemId: BigNumber;
    rowIndex: number;
    sectionIndex: number;
    type: number;
    value: string;
}
export declare namespace FormObjectiveOtherDetailsItemValueCell {
    /**
     * Static representation of the [[colId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COL_ID: StringField<FormObjectiveOtherDetailsItemValueCell>;
    /**
     * Static representation of the [[colIndex]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COL_INDEX: NumberField<FormObjectiveOtherDetailsItemValueCell>;
    /**
     * Static representation of the [[datatype]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DATATYPE: StringField<FormObjectiveOtherDetailsItemValueCell>;
    /**
     * Static representation of the [[formContentId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FORM_CONTENT_ID: BigNumberField<FormObjectiveOtherDetailsItemValueCell>;
    /**
     * Static representation of the [[formDataId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FORM_DATA_ID: BigNumberField<FormObjectiveOtherDetailsItemValueCell>;
    /**
     * Static representation of the [[itemId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ITEM_ID: BigNumberField<FormObjectiveOtherDetailsItemValueCell>;
    /**
     * Static representation of the [[rowIndex]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ROW_INDEX: NumberField<FormObjectiveOtherDetailsItemValueCell>;
    /**
     * Static representation of the [[sectionIndex]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SECTION_INDEX: NumberField<FormObjectiveOtherDetailsItemValueCell>;
    /**
     * Static representation of the [[type]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TYPE: NumberField<FormObjectiveOtherDetailsItemValueCell>;
    /**
     * Static representation of the [[value]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VALUE: StringField<FormObjectiveOtherDetailsItemValueCell>;
    /**
     * All fields of the FormObjectiveOtherDetailsItemValueCell entity.
     */
    const _allFields: Array<StringField<FormObjectiveOtherDetailsItemValueCell> | NumberField<FormObjectiveOtherDetailsItemValueCell> | BigNumberField<FormObjectiveOtherDetailsItemValueCell>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<FormObjectiveOtherDetailsItemValueCell>;
    /**
     * All key fields of the FormObjectiveOtherDetailsItemValueCell entity.
     */
    const _keyFields: Array<Selectable<FormObjectiveOtherDetailsItemValueCell>>;
    /**
     * Mapping of all key field names to the respective static field property FormObjectiveOtherDetailsItemValueCell.
     */
    const _keys: {
        [keys: string]: Selectable<FormObjectiveOtherDetailsItemValueCell>;
    };
}
//# sourceMappingURL=FormObjectiveOtherDetailsItemValueCell.d.ts.map