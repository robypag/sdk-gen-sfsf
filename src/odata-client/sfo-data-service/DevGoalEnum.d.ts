import { DevGoalEnumRequestBuilder } from './DevGoalEnumRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, Entity, EntityBuilderType, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "DevGoalEnum" of service "SFOData".
 */
export declare class DevGoalEnum extends Entity implements DevGoalEnumType {
    /**
     * Technical entity name for DevGoalEnum.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for DevGoalEnum.
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
     * Returns an entity builder to construct instances `DevGoalEnum`.
     * @returns A builder that constructs instances of entity type `DevGoalEnum`.
     */
    static builder(): EntityBuilderType<DevGoalEnum, DevGoalEnumTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `DevGoalEnum` entity type.
     * @returns A `DevGoalEnum` request builder.
     */
    static requestBuilder(): DevGoalEnumRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `DevGoalEnum`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `DevGoalEnum`.
     */
    static customField(fieldName: string): CustomField<DevGoalEnum>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface DevGoalEnumType {
    fieldId: string;
    label?: string;
    planId: BigNumber;
    value: string;
}
export interface DevGoalEnumTypeForceMandatory {
    fieldId: string;
    label: string;
    planId: BigNumber;
    value: string;
}
export declare namespace DevGoalEnum {
    /**
     * Static representation of the [[fieldId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FIELD_ID: StringField<DevGoalEnum>;
    /**
     * Static representation of the [[label]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LABEL: StringField<DevGoalEnum>;
    /**
     * Static representation of the [[planId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PLAN_ID: BigNumberField<DevGoalEnum>;
    /**
     * Static representation of the [[value]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VALUE: StringField<DevGoalEnum>;
    /**
     * All fields of the DevGoalEnum entity.
     */
    const _allFields: Array<StringField<DevGoalEnum> | BigNumberField<DevGoalEnum>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<DevGoalEnum>;
    /**
     * All key fields of the DevGoalEnum entity.
     */
    const _keyFields: Array<Selectable<DevGoalEnum>>;
    /**
     * Mapping of all key field names to the respective static field property DevGoalEnum.
     */
    const _keys: {
        [keys: string]: Selectable<DevGoalEnum>;
    };
}
//# sourceMappingURL=DevGoalEnum.d.ts.map