import { FormObjectiveOtherDetailsItemRequestBuilder } from './FormObjectiveOtherDetailsItemRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, Entity, EntityBuilderType, Link, NumberField, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "FormObjectiveOtherDetailsItem" of service "SFOData".
 */
export declare class FormObjectiveOtherDetailsItem extends Entity implements FormObjectiveOtherDetailsItemType {
    /**
     * Technical entity name for FormObjectiveOtherDetailsItem.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for FormObjectiveOtherDetailsItem.
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
     * itemId.
     */
    itemId: BigNumber;
    /**
     * sectionIndex.
     */
    sectionIndex: number;
    /**
     * title.
     * @nullable
     */
    title?: string;
    /**
     * type.
     */
    type: number;
    /**
     * One-to-many navigation property to the [[FormObjectiveOtherDetailsItemCol]] entity.
     */
    cols: FormObjectiveOtherDetailsItemCol[];
    /**
     * One-to-many navigation property to the [[FormObjectiveOtherDetailsItemValueCell]] entity.
     */
    values: FormObjectiveOtherDetailsItemValueCell[];
    /**
     * Returns an entity builder to construct instances `FormObjectiveOtherDetailsItem`.
     * @returns A builder that constructs instances of entity type `FormObjectiveOtherDetailsItem`.
     */
    static builder(): EntityBuilderType<FormObjectiveOtherDetailsItem, FormObjectiveOtherDetailsItemTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `FormObjectiveOtherDetailsItem` entity type.
     * @returns A `FormObjectiveOtherDetailsItem` request builder.
     */
    static requestBuilder(): FormObjectiveOtherDetailsItemRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `FormObjectiveOtherDetailsItem`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `FormObjectiveOtherDetailsItem`.
     */
    static customField(fieldName: string): CustomField<FormObjectiveOtherDetailsItem>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { FormObjectiveOtherDetailsItemCol, FormObjectiveOtherDetailsItemColType } from './FormObjectiveOtherDetailsItemCol';
import { FormObjectiveOtherDetailsItemValueCell, FormObjectiveOtherDetailsItemValueCellType } from './FormObjectiveOtherDetailsItemValueCell';
export interface FormObjectiveOtherDetailsItemType {
    formContentId: BigNumber;
    formDataId: BigNumber;
    itemId: BigNumber;
    sectionIndex: number;
    title?: string;
    type: number;
    cols: FormObjectiveOtherDetailsItemColType[];
    values: FormObjectiveOtherDetailsItemValueCellType[];
}
export interface FormObjectiveOtherDetailsItemTypeForceMandatory {
    formContentId: BigNumber;
    formDataId: BigNumber;
    itemId: BigNumber;
    sectionIndex: number;
    title: string;
    type: number;
    cols: FormObjectiveOtherDetailsItemColType[];
    values: FormObjectiveOtherDetailsItemValueCellType[];
}
export declare namespace FormObjectiveOtherDetailsItem {
    /**
     * Static representation of the [[formContentId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FORM_CONTENT_ID: BigNumberField<FormObjectiveOtherDetailsItem>;
    /**
     * Static representation of the [[formDataId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FORM_DATA_ID: BigNumberField<FormObjectiveOtherDetailsItem>;
    /**
     * Static representation of the [[itemId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ITEM_ID: BigNumberField<FormObjectiveOtherDetailsItem>;
    /**
     * Static representation of the [[sectionIndex]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SECTION_INDEX: NumberField<FormObjectiveOtherDetailsItem>;
    /**
     * Static representation of the [[title]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TITLE: StringField<FormObjectiveOtherDetailsItem>;
    /**
     * Static representation of the [[type]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TYPE: NumberField<FormObjectiveOtherDetailsItem>;
    /**
     * Static representation of the one-to-many navigation property [[cols]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COLS: Link<FormObjectiveOtherDetailsItem, FormObjectiveOtherDetailsItemCol>;
    /**
     * Static representation of the one-to-many navigation property [[values]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VALUES: Link<FormObjectiveOtherDetailsItem, FormObjectiveOtherDetailsItemValueCell>;
    /**
     * All fields of the FormObjectiveOtherDetailsItem entity.
     */
    const _allFields: Array<BigNumberField<FormObjectiveOtherDetailsItem> | NumberField<FormObjectiveOtherDetailsItem> | StringField<FormObjectiveOtherDetailsItem> | Link<FormObjectiveOtherDetailsItem, FormObjectiveOtherDetailsItemCol> | Link<FormObjectiveOtherDetailsItem, FormObjectiveOtherDetailsItemValueCell>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<FormObjectiveOtherDetailsItem>;
    /**
     * All key fields of the FormObjectiveOtherDetailsItem entity.
     */
    const _keyFields: Array<Selectable<FormObjectiveOtherDetailsItem>>;
    /**
     * Mapping of all key field names to the respective static field property FormObjectiveOtherDetailsItem.
     */
    const _keys: {
        [keys: string]: Selectable<FormObjectiveOtherDetailsItem>;
    };
}
//# sourceMappingURL=FormObjectiveOtherDetailsItem.d.ts.map