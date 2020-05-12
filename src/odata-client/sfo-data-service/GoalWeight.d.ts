import { GoalWeightRequestBuilder } from './GoalWeightRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, Entity, EntityBuilderType, NumberField, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "GoalWeight" of service "SFOData".
 */
export declare class GoalWeight extends Entity implements GoalWeightType {
    /**
     * Technical entity name for GoalWeight.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for GoalWeight.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
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
     * planId.
     */
    planId: BigNumber;
    /**
     * type.
     */
    type: string;
    /**
     * Returns an entity builder to construct instances `GoalWeight`.
     * @returns A builder that constructs instances of entity type `GoalWeight`.
     */
    static builder(): EntityBuilderType<GoalWeight, GoalWeightTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `GoalWeight` entity type.
     * @returns A `GoalWeight` request builder.
     */
    static requestBuilder(): GoalWeightRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `GoalWeight`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `GoalWeight`.
     */
    static customField(fieldName: string): CustomField<GoalWeight>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface GoalWeightType {
    maxValue?: number;
    minValue?: number;
    planId: BigNumber;
    type: string;
}
export interface GoalWeightTypeForceMandatory {
    maxValue: number;
    minValue: number;
    planId: BigNumber;
    type: string;
}
export declare namespace GoalWeight {
    /**
     * Static representation of the [[maxValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MAX_VALUE: NumberField<GoalWeight>;
    /**
     * Static representation of the [[minValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MIN_VALUE: NumberField<GoalWeight>;
    /**
     * Static representation of the [[planId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PLAN_ID: BigNumberField<GoalWeight>;
    /**
     * Static representation of the [[type]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TYPE: StringField<GoalWeight>;
    /**
     * All fields of the GoalWeight entity.
     */
    const _allFields: Array<NumberField<GoalWeight> | BigNumberField<GoalWeight> | StringField<GoalWeight>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<GoalWeight>;
    /**
     * All key fields of the GoalWeight entity.
     */
    const _keyFields: Array<Selectable<GoalWeight>>;
    /**
     * Mapping of all key field names to the respective static field property GoalWeight.
     */
    const _keys: {
        [keys: string]: Selectable<GoalWeight>;
    };
}
//# sourceMappingURL=GoalWeight.d.ts.map