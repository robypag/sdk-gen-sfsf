import { MessageDetailRequestBuilder } from './MessageDetailRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "MessageDetail" of service "SFOData".
 */
export declare class MessageDetail extends Entity implements MessageDetailType {
    /**
     * Technical entity name for MessageDetail.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for MessageDetail.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * code.
     */
    code: string;
    /**
     * message.
     */
    message: string;
    /**
     * severity.
     */
    severity: string;
    /**
     * target.
     */
    target: string;
    /**
     * Returns an entity builder to construct instances `MessageDetail`.
     * @returns A builder that constructs instances of entity type `MessageDetail`.
     */
    static builder(): EntityBuilderType<MessageDetail, MessageDetailTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `MessageDetail` entity type.
     * @returns A `MessageDetail` request builder.
     */
    static requestBuilder(): MessageDetailRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `MessageDetail`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `MessageDetail`.
     */
    static customField(fieldName: string): CustomField<MessageDetail>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface MessageDetailType {
    code: string;
    message: string;
    severity: string;
    target: string;
}
export interface MessageDetailTypeForceMandatory {
    code: string;
    message: string;
    severity: string;
    target: string;
}
export declare namespace MessageDetail {
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CODE: StringField<MessageDetail>;
    /**
     * Static representation of the [[message]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MESSAGE: StringField<MessageDetail>;
    /**
     * Static representation of the [[severity]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SEVERITY: StringField<MessageDetail>;
    /**
     * Static representation of the [[target]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TARGET: StringField<MessageDetail>;
    /**
     * All fields of the MessageDetail entity.
     */
    const _allFields: Array<StringField<MessageDetail>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<MessageDetail>;
    /**
     * All key fields of the MessageDetail entity.
     */
    const _keyFields: Array<Selectable<MessageDetail>>;
    /**
     * Mapping of all key field names to the respective static field property MessageDetail.
     */
    const _keys: {
        [keys: string]: Selectable<MessageDetail>;
    };
}
//# sourceMappingURL=MessageDetail.d.ts.map