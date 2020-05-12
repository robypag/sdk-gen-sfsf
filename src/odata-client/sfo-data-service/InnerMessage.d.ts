import { InnerMessageRequestBuilder } from './InnerMessageRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Link, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "InnerMessage" of service "SFOData".
 */
export declare class InnerMessage extends Entity implements InnerMessageType {
    /**
     * Technical entity name for InnerMessage.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for InnerMessage.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * key.
     */
    key: string;
    /**
     * One-to-many navigation property to the [[MessageDetail]] entity.
     */
    messagedetails: MessageDetail[];
    /**
     * Returns an entity builder to construct instances `InnerMessage`.
     * @returns A builder that constructs instances of entity type `InnerMessage`.
     */
    static builder(): EntityBuilderType<InnerMessage, InnerMessageTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `InnerMessage` entity type.
     * @returns A `InnerMessage` request builder.
     */
    static requestBuilder(): InnerMessageRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `InnerMessage`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `InnerMessage`.
     */
    static customField(fieldName: string): CustomField<InnerMessage>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { MessageDetail, MessageDetailType } from './MessageDetail';
export interface InnerMessageType {
    key: string;
    messagedetails: MessageDetailType[];
}
export interface InnerMessageTypeForceMandatory {
    key: string;
    messagedetails: MessageDetailType[];
}
export declare namespace InnerMessage {
    /**
     * Static representation of the [[key]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const KEY: StringField<InnerMessage>;
    /**
     * Static representation of the one-to-many navigation property [[messagedetails]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MESSAGEDETAILS: Link<InnerMessage, MessageDetail>;
    /**
     * All fields of the InnerMessage entity.
     */
    const _allFields: Array<StringField<InnerMessage> | Link<InnerMessage, MessageDetail>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<InnerMessage>;
    /**
     * All key fields of the InnerMessage entity.
     */
    const _keyFields: Array<Selectable<InnerMessage>>;
    /**
     * Mapping of all key field names to the respective static field property InnerMessage.
     */
    const _keys: {
        [keys: string]: Selectable<InnerMessage>;
    };
}
//# sourceMappingURL=InnerMessage.d.ts.map