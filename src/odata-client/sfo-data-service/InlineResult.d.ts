import { InlineResultRequestBuilder } from './InlineResultRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Link, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "InlineResult" of service "SFOData".
 */
export declare class InlineResult extends Entity implements InlineResultType {
    /**
     * Technical entity name for InlineResult.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for InlineResult.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * inlineProperty.
     */
    inlineProperty: string;
    /**
     * One-to-many navigation property to the [[UpsertResult]] entity.
     */
    results: UpsertResult[];
    /**
     * Returns an entity builder to construct instances `InlineResult`.
     * @returns A builder that constructs instances of entity type `InlineResult`.
     */
    static builder(): EntityBuilderType<InlineResult, InlineResultTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `InlineResult` entity type.
     * @returns A `InlineResult` request builder.
     */
    static requestBuilder(): InlineResultRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `InlineResult`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `InlineResult`.
     */
    static customField(fieldName: string): CustomField<InlineResult>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { UpsertResult, UpsertResultType } from './UpsertResult';
export interface InlineResultType {
    inlineProperty: string;
    results: UpsertResultType[];
}
export interface InlineResultTypeForceMandatory {
    inlineProperty: string;
    results: UpsertResultType[];
}
export declare namespace InlineResult {
    /**
     * Static representation of the [[inlineProperty]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INLINE_PROPERTY: StringField<InlineResult>;
    /**
     * Static representation of the one-to-many navigation property [[results]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RESULTS: Link<InlineResult, UpsertResult>;
    /**
     * All fields of the InlineResult entity.
     */
    const _allFields: Array<StringField<InlineResult> | Link<InlineResult, UpsertResult>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<InlineResult>;
    /**
     * All key fields of the InlineResult entity.
     */
    const _keyFields: Array<Selectable<InlineResult>>;
    /**
     * Mapping of all key field names to the respective static field property InlineResult.
     */
    const _keys: {
        [keys: string]: Selectable<InlineResult>;
    };
}
//# sourceMappingURL=InlineResult.d.ts.map