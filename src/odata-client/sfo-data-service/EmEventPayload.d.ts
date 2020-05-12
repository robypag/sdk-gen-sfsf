import { EmEventPayloadRequestBuilder } from './EmEventPayloadRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BinaryField, CustomField, Entity, EntityBuilderType, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "EMEventPayload" of service "SFOData".
 */
export declare class EmEventPayload extends Entity implements EmEventPayloadType {
    /**
     * Technical entity name for EmEventPayload.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for EmEventPayload.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Payload.
     * @nullable
     */
    fileName?: string;
    /**
     * Payload.
     * @nullable
     */
    fileType?: string;
    /**
     * Id.
     */
    id: BigNumber;
    /**
     * Mime Type.
     * @nullable
     */
    mimeType?: string;
    /**
     * Payload.
     */
    payload: string;
    /**
     * Type.
     */
    type: string;
    /**
     * Returns an entity builder to construct instances `EmEventPayload`.
     * @returns A builder that constructs instances of entity type `EmEventPayload`.
     */
    static builder(): EntityBuilderType<EmEventPayload, EmEventPayloadTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `EmEventPayload` entity type.
     * @returns A `EmEventPayload` request builder.
     */
    static requestBuilder(): EmEventPayloadRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `EmEventPayload`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `EmEventPayload`.
     */
    static customField(fieldName: string): CustomField<EmEventPayload>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface EmEventPayloadType {
    fileName?: string;
    fileType?: string;
    id: BigNumber;
    mimeType?: string;
    payload: string;
    type: string;
}
export interface EmEventPayloadTypeForceMandatory {
    fileName: string;
    fileType: string;
    id: BigNumber;
    mimeType: string;
    payload: string;
    type: string;
}
export declare namespace EmEventPayload {
    /**
     * Static representation of the [[fileName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FILE_NAME: StringField<EmEventPayload>;
    /**
     * Static representation of the [[fileType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FILE_TYPE: StringField<EmEventPayload>;
    /**
     * Static representation of the [[id]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ID: BigNumberField<EmEventPayload>;
    /**
     * Static representation of the [[mimeType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MIME_TYPE: StringField<EmEventPayload>;
    /**
     * Static representation of the [[payload]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYLOAD: BinaryField<EmEventPayload>;
    /**
     * Static representation of the [[type]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TYPE: StringField<EmEventPayload>;
    /**
     * All fields of the EmEventPayload entity.
     */
    const _allFields: Array<StringField<EmEventPayload> | BigNumberField<EmEventPayload> | BinaryField<EmEventPayload>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<EmEventPayload>;
    /**
     * All key fields of the EmEventPayload entity.
     */
    const _keyFields: Array<Selectable<EmEventPayload>>;
    /**
     * Mapping of all key field names to the respective static field property EmEventPayload.
     */
    const _keys: {
        [keys: string]: Selectable<EmEventPayload>;
    };
}
//# sourceMappingURL=EmEventPayload.d.ts.map