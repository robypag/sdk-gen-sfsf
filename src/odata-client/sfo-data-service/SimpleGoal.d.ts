import { SimpleGoalRequestBuilder } from './SimpleGoalRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, Entity, EntityBuilderType, NumberField, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "SimpleGoal" of service "SFOData".
 */
export declare class SimpleGoal extends Entity implements SimpleGoalType {
    /**
     * Technical entity name for SimpleGoal.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for SimpleGoal.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * flag.
     * @nullable
     */
    flag?: number;
    /**
     * id.
     */
    id: BigNumber;
    /**
     * name.
     * @nullable
     */
    name?: string;
    /**
     * type.
     * @nullable
     */
    type?: string;
    /**
     * userId.
     * @nullable
     */
    userId?: string;
    /**
     * Returns an entity builder to construct instances `SimpleGoal`.
     * @returns A builder that constructs instances of entity type `SimpleGoal`.
     */
    static builder(): EntityBuilderType<SimpleGoal, SimpleGoalTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `SimpleGoal` entity type.
     * @returns A `SimpleGoal` request builder.
     */
    static requestBuilder(): SimpleGoalRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `SimpleGoal`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `SimpleGoal`.
     */
    static customField(fieldName: string): CustomField<SimpleGoal>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface SimpleGoalType {
    flag?: number;
    id: BigNumber;
    name?: string;
    type?: string;
    userId?: string;
}
export interface SimpleGoalTypeForceMandatory {
    flag: number;
    id: BigNumber;
    name: string;
    type: string;
    userId: string;
}
export declare namespace SimpleGoal {
    /**
     * Static representation of the [[flag]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FLAG: NumberField<SimpleGoal>;
    /**
     * Static representation of the [[id]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ID: BigNumberField<SimpleGoal>;
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME: StringField<SimpleGoal>;
    /**
     * Static representation of the [[type]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TYPE: StringField<SimpleGoal>;
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_ID: StringField<SimpleGoal>;
    /**
     * All fields of the SimpleGoal entity.
     */
    const _allFields: Array<NumberField<SimpleGoal> | BigNumberField<SimpleGoal> | StringField<SimpleGoal>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<SimpleGoal>;
    /**
     * All key fields of the SimpleGoal entity.
     */
    const _keyFields: Array<Selectable<SimpleGoal>>;
    /**
     * Mapping of all key field names to the respective static field property SimpleGoal.
     */
    const _keys: {
        [keys: string]: Selectable<SimpleGoal>;
    };
}
//# sourceMappingURL=SimpleGoal.d.ts.map