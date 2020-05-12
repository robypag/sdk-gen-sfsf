import { UpsertResultRequestBuilder } from './UpsertResultRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Link, NumberField, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "UpsertResult" of service "SFOData".
 */
export declare class UpsertResult extends Entity implements UpsertResultType {
    /**
     * Technical entity name for UpsertResult.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for UpsertResult.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * editStatus.
     */
    editStatus: string;
    /**
     * httpCode.
     */
    httpCode: number;
    /**
     * index.
     * @nullable
     */
    index?: number;
    /**
     * key.
     */
    key: string;
    /**
     * message.
     * @nullable
     */
    message?: string;
    /**
     * status.
     */
    status: string;
    /**
     * One-to-many navigation property to the [[InlineResult]] entity.
     */
    inlineResults: InlineResult[];
    /**
     * One-to-one navigation property to the [[InnerMessage]] entity.
     */
    innermessage: InnerMessage;
    /**
     * Returns an entity builder to construct instances `UpsertResult`.
     * @returns A builder that constructs instances of entity type `UpsertResult`.
     */
    static builder(): EntityBuilderType<UpsertResult, UpsertResultTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `UpsertResult` entity type.
     * @returns A `UpsertResult` request builder.
     */
    static requestBuilder(): UpsertResultRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `UpsertResult`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `UpsertResult`.
     */
    static customField(fieldName: string): CustomField<UpsertResult>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { InlineResult, InlineResultType } from './InlineResult';
import { InnerMessage, InnerMessageType } from './InnerMessage';
export interface UpsertResultType {
    editStatus: string;
    httpCode: number;
    index?: number;
    key: string;
    message?: string;
    status: string;
    inlineResults: InlineResultType[];
    innermessage: InnerMessageType;
}
export interface UpsertResultTypeForceMandatory {
    editStatus: string;
    httpCode: number;
    index: number;
    key: string;
    message: string;
    status: string;
    inlineResults: InlineResultType[];
    innermessage: InnerMessageType;
}
export declare namespace UpsertResult {
    /**
     * Static representation of the [[editStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EDIT_STATUS: StringField<UpsertResult>;
    /**
     * Static representation of the [[httpCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HTTP_CODE: NumberField<UpsertResult>;
    /**
     * Static representation of the [[index]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INDEX: NumberField<UpsertResult>;
    /**
     * Static representation of the [[key]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const KEY: StringField<UpsertResult>;
    /**
     * Static representation of the [[message]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MESSAGE: StringField<UpsertResult>;
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS: StringField<UpsertResult>;
    /**
     * Static representation of the one-to-many navigation property [[inlineResults]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INLINE_RESULTS: Link<UpsertResult, InlineResult>;
    /**
     * Static representation of the one-to-one navigation property [[innermessage]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INNERMESSAGE: OneToOneLink<UpsertResult, InnerMessage>;
    /**
     * All fields of the UpsertResult entity.
     */
    const _allFields: Array<StringField<UpsertResult> | NumberField<UpsertResult> | Link<UpsertResult, InlineResult> | OneToOneLink<UpsertResult, InnerMessage>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<UpsertResult>;
    /**
     * All key fields of the UpsertResult entity.
     */
    const _keyFields: Array<Selectable<UpsertResult>>;
    /**
     * Mapping of all key field names to the respective static field property UpsertResult.
     */
    const _keys: {
        [keys: string]: Selectable<UpsertResult>;
    };
}
//# sourceMappingURL=UpsertResult.d.ts.map