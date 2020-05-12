import { PicklistOptionRequestBuilder } from './PicklistOptionRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, Entity, EntityBuilderType, Link, NumberField, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "PicklistOption" of service "SFOData".
 */
export declare class PicklistOption extends Entity implements PicklistOptionType {
    /**
     * Technical entity name for PicklistOption.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for PicklistOption.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * externalCode.
     * Maximum length: 256.
     * @nullable
     */
    externalCode?: string;
    /**
     * id.
     */
    id: BigNumber;
    /**
     * localeLabel.
     * @nullable
     */
    localeLabel?: string;
    /**
     * maxValue.
     * @nullable
     */
    maxValue?: number;
    /**
     * minValue.
     * @nullable
     */
    minValue?: number;
    /**
     * optionValue.
     * @nullable
     */
    optionValue?: number;
    /**
     * sortOrder.
     * @nullable
     */
    sortOrder?: number;
    /**
     * status.
     * Maximum length: 9.
     * @nullable
     */
    status?: string;
    /**
     * One-to-many navigation property to the [[PicklistOption]] entity.
     */
    childPicklistOptions: PicklistOption[];
    /**
     * One-to-one navigation property to the [[PicklistOption]] entity.
     */
    parentPicklistOption: PicklistOption;
    /**
     * One-to-one navigation property to the [[Picklist]] entity.
     */
    picklist: Picklist;
    /**
     * One-to-many navigation property to the [[PicklistLabel]] entity.
     */
    picklistLabels: PicklistLabel[];
    /**
     * Returns an entity builder to construct instances `PicklistOption`.
     * @returns A builder that constructs instances of entity type `PicklistOption`.
     */
    static builder(): EntityBuilderType<PicklistOption, PicklistOptionTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `PicklistOption` entity type.
     * @returns A `PicklistOption` request builder.
     */
    static requestBuilder(): PicklistOptionRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `PicklistOption`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `PicklistOption`.
     */
    static customField(fieldName: string): CustomField<PicklistOption>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { Picklist, PicklistType } from './Picklist';
import { PicklistLabel, PicklistLabelType } from './PicklistLabel';
export interface PicklistOptionType {
    externalCode?: string;
    id: BigNumber;
    localeLabel?: string;
    maxValue?: number;
    minValue?: number;
    optionValue?: number;
    sortOrder?: number;
    status?: string;
    childPicklistOptions: PicklistOptionType[];
    parentPicklistOption: PicklistOptionType;
    picklist: PicklistType;
    picklistLabels: PicklistLabelType[];
}
export interface PicklistOptionTypeForceMandatory {
    externalCode: string;
    id: BigNumber;
    localeLabel: string;
    maxValue: number;
    minValue: number;
    optionValue: number;
    sortOrder: number;
    status: string;
    childPicklistOptions: PicklistOptionType[];
    parentPicklistOption: PicklistOptionType;
    picklist: PicklistType;
    picklistLabels: PicklistLabelType[];
}
export declare namespace PicklistOption {
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CODE: StringField<PicklistOption>;
    /**
     * Static representation of the [[id]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ID: BigNumberField<PicklistOption>;
    /**
     * Static representation of the [[localeLabel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LOCALE_LABEL: StringField<PicklistOption>;
    /**
     * Static representation of the [[maxValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MAX_VALUE: NumberField<PicklistOption>;
    /**
     * Static representation of the [[minValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MIN_VALUE: NumberField<PicklistOption>;
    /**
     * Static representation of the [[optionValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OPTION_VALUE: NumberField<PicklistOption>;
    /**
     * Static representation of the [[sortOrder]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SORT_ORDER: NumberField<PicklistOption>;
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS: StringField<PicklistOption>;
    /**
     * Static representation of the one-to-many navigation property [[childPicklistOptions]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CHILD_PICKLIST_OPTIONS: Link<PicklistOption, PicklistOption>;
    /**
     * Static representation of the one-to-one navigation property [[parentPicklistOption]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PARENT_PICKLIST_OPTION: OneToOneLink<PicklistOption, PicklistOption>;
    /**
     * Static representation of the one-to-one navigation property [[picklist]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PICKLIST: OneToOneLink<PicklistOption, Picklist>;
    /**
     * Static representation of the one-to-many navigation property [[picklistLabels]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PICKLIST_LABELS: Link<PicklistOption, PicklistLabel>;
    /**
     * All fields of the PicklistOption entity.
     */
    const _allFields: Array<StringField<PicklistOption> | BigNumberField<PicklistOption> | NumberField<PicklistOption> | Link<PicklistOption, PicklistOption> | OneToOneLink<PicklistOption, PicklistOption> | OneToOneLink<PicklistOption, Picklist> | Link<PicklistOption, PicklistLabel>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<PicklistOption>;
    /**
     * All key fields of the PicklistOption entity.
     */
    const _keyFields: Array<Selectable<PicklistOption>>;
    /**
     * Mapping of all key field names to the respective static field property PicklistOption.
     */
    const _keys: {
        [keys: string]: Selectable<PicklistOption>;
    };
}
//# sourceMappingURL=PicklistOption.d.ts.map