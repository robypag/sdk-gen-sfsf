import { EmEventRequestBuilder } from './EmEventRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "EMEvent" of service "SFOData".
 */
export declare class EmEvent extends Entity implements EmEventType {
    /**
     * Technical entity name for EmEvent.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for EmEvent.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Event Description.
     * @nullable
     */
    eventDescription?: string;
    /**
     * Event Description Messsage Key.
     * @nullable
     */
    eventDescriptionMsgKey?: string;
    /**
     * Event Name.
     */
    eventName: string;
    /**
     * Event Time.
     * @nullable
     */
    eventTime?: Moment;
    /**
     * Event Type.
     * @nullable
     */
    eventType?: string;
    /**
     * Id.
     */
    id: BigNumber;
    /**
     * One-to-many navigation property to the [[EmEventAttribute]] entity.
     */
    eventAttributes: EmEventAttribute[];
    /**
     * One-to-one navigation property to the [[EmEventPayload]] entity.
     */
    eventPayload: EmEventPayload;
    /**
     * One-to-one navigation property to the [[EmMonitoredProcess]] entity.
     */
    process: EmMonitoredProcess;
    /**
     * Returns an entity builder to construct instances `EmEvent`.
     * @returns A builder that constructs instances of entity type `EmEvent`.
     */
    static builder(): EntityBuilderType<EmEvent, EmEventTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `EmEvent` entity type.
     * @returns A `EmEvent` request builder.
     */
    static requestBuilder(): EmEventRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `EmEvent`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `EmEvent`.
     */
    static customField(fieldName: string): CustomField<EmEvent>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { EmEventAttribute, EmEventAttributeType } from './EmEventAttribute';
import { EmEventPayload, EmEventPayloadType } from './EmEventPayload';
import { EmMonitoredProcess, EmMonitoredProcessType } from './EmMonitoredProcess';
export interface EmEventType {
    eventDescription?: string;
    eventDescriptionMsgKey?: string;
    eventName: string;
    eventTime?: Moment;
    eventType?: string;
    id: BigNumber;
    eventAttributes: EmEventAttributeType[];
    eventPayload: EmEventPayloadType;
    process: EmMonitoredProcessType;
}
export interface EmEventTypeForceMandatory {
    eventDescription: string;
    eventDescriptionMsgKey: string;
    eventName: string;
    eventTime: Moment;
    eventType: string;
    id: BigNumber;
    eventAttributes: EmEventAttributeType[];
    eventPayload: EmEventPayloadType;
    process: EmMonitoredProcessType;
}
export declare namespace EmEvent {
    /**
     * Static representation of the [[eventDescription]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EVENT_DESCRIPTION: StringField<EmEvent>;
    /**
     * Static representation of the [[eventDescriptionMsgKey]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EVENT_DESCRIPTION_MSG_KEY: StringField<EmEvent>;
    /**
     * Static representation of the [[eventName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EVENT_NAME: StringField<EmEvent>;
    /**
     * Static representation of the [[eventTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EVENT_TIME: DateField<EmEvent>;
    /**
     * Static representation of the [[eventType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EVENT_TYPE: StringField<EmEvent>;
    /**
     * Static representation of the [[id]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ID: BigNumberField<EmEvent>;
    /**
     * Static representation of the one-to-many navigation property [[eventAttributes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EVENT_ATTRIBUTES: Link<EmEvent, EmEventAttribute>;
    /**
     * Static representation of the one-to-one navigation property [[eventPayload]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EVENT_PAYLOAD: OneToOneLink<EmEvent, EmEventPayload>;
    /**
     * Static representation of the one-to-one navigation property [[process]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROCESS: OneToOneLink<EmEvent, EmMonitoredProcess>;
    /**
     * All fields of the EmEvent entity.
     */
    const _allFields: Array<StringField<EmEvent> | DateField<EmEvent> | BigNumberField<EmEvent> | Link<EmEvent, EmEventAttribute> | OneToOneLink<EmEvent, EmEventPayload> | OneToOneLink<EmEvent, EmMonitoredProcess>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<EmEvent>;
    /**
     * All key fields of the EmEvent entity.
     */
    const _keyFields: Array<Selectable<EmEvent>>;
    /**
     * Mapping of all key field names to the respective static field property EmEvent.
     */
    const _keys: {
        [keys: string]: Selectable<EmEvent>;
    };
}
//# sourceMappingURL=EmEvent.d.ts.map