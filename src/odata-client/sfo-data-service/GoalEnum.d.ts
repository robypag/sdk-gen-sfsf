import { GoalEnumRequestBuilder } from './GoalEnumRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, Entity, EntityBuilderType, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "GoalEnum" of service "SFOData".
 */
export declare class GoalEnum extends Entity implements GoalEnumType {
    /**
     * Technical entity name for GoalEnum.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for GoalEnum.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * fieldId.
     */
    fieldId: string;
    /**
     * label.
     * @nullable
     */
    label?: string;
    /**
     * planId.
     */
    planId: BigNumber;
    /**
     * value.
     */
    value: string;
    /**
     * Returns an entity builder to construct instances `GoalEnum`.
     * @returns A builder that constructs instances of entity type `GoalEnum`.
     */
    static builder(): EntityBuilderType<GoalEnum, GoalEnumTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `GoalEnum` entity type.
     * @returns A `GoalEnum` request builder.
     */
    static requestBuilder(): GoalEnumRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `GoalEnum`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `GoalEnum`.
     */
    static customField(fieldName: string): CustomField<GoalEnum>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface GoalEnumType {
    fieldId: string;
    label?: string;
    planId: BigNumber;
    value: string;
}
export interface GoalEnumTypeForceMandatory {
    fieldId: string;
    label: string;
    planId: BigNumber;
    value: string;
}
export declare namespace GoalEnum {
    /**
     * Static representation of the [[fieldId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FIELD_ID: StringField<GoalEnum>;
    /**
     * Static representation of the [[label]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LABEL: StringField<GoalEnum>;
    /**
     * Static representation of the [[planId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PLAN_ID: BigNumberField<GoalEnum>;
    /**
     * Static representation of the [[value]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VALUE: StringField<GoalEnum>;
    /**
     * All fields of the GoalEnum entity.
     */
    const _allFields: Array<StringField<GoalEnum> | BigNumberField<GoalEnum>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<GoalEnum>;
    /**
     * All key fields of the GoalEnum entity.
     */
    const _keyFields: Array<Selectable<GoalEnum>>;
    /**
     * Mapping of all key field names to the respective static field property GoalEnum.
     */
    const _keys: {
        [keys: string]: Selectable<GoalEnum>;
    };
}
//# sourceMappingURL=GoalEnum.d.ts.map