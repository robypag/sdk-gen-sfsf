import { EmEventAttributeRequestBuilder } from './EmEventAttributeRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, Entity, EntityBuilderType, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "EMEventAttribute" of service "SFOData".
 */
export declare class EmEventAttribute extends Entity implements EmEventAttributeType {
    /**
     * Technical entity name for EmEventAttribute.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for EmEventAttribute.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Id.
     */
    id: BigNumber;
    /**
     * Name.
     */
    name: string;
    /**
     * Value.
     * @nullable
     */
    value?: string;
    /**
     * Returns an entity builder to construct instances `EmEventAttribute`.
     * @returns A builder that constructs instances of entity type `EmEventAttribute`.
     */
    static builder(): EntityBuilderType<EmEventAttribute, EmEventAttributeTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `EmEventAttribute` entity type.
     * @returns A `EmEventAttribute` request builder.
     */
    static requestBuilder(): EmEventAttributeRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `EmEventAttribute`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `EmEventAttribute`.
     */
    static customField(fieldName: string): CustomField<EmEventAttribute>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface EmEventAttributeType {
    id: BigNumber;
    name: string;
    value?: string;
}
export interface EmEventAttributeTypeForceMandatory {
    id: BigNumber;
    name: string;
    value: string;
}
export declare namespace EmEventAttribute {
    /**
     * Static representation of the [[id]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ID: BigNumberField<EmEventAttribute>;
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME: StringField<EmEventAttribute>;
    /**
     * Static representation of the [[value]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VALUE: StringField<EmEventAttribute>;
    /**
     * All fields of the EmEventAttribute entity.
     */
    const _allFields: Array<BigNumberField<EmEventAttribute> | StringField<EmEventAttribute>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<EmEventAttribute>;
    /**
     * All key fields of the EmEventAttribute entity.
     */
    const _keyFields: Array<Selectable<EmEventAttribute>>;
    /**
     * Mapping of all key field names to the respective static field property EmEventAttribute.
     */
    const _keys: {
        [keys: string]: Selectable<EmEventAttribute>;
    };
}
//# sourceMappingURL=EmEventAttribute.d.ts.map