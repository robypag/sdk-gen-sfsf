import { MyPendingWorkflowRequestBuilder } from './MyPendingWorkflowRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "MyPendingWorkflow" of service "SFOData".
 */
export declare class MyPendingWorkflow extends Entity implements MyPendingWorkflowType {
    /**
     * Technical entity name for MyPendingWorkflow.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for MyPendingWorkflow.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Description.
     * @nullable
     */
    desc?: string;
    /**
     * Subject.
     * @nullable
     */
    subject?: string;
    /**
     * URL.
     * @nullable
     */
    url?: string;
    /**
     * WF Request ID.
     */
    wfRequestId: string;
    /**
     * Returns an entity builder to construct instances `MyPendingWorkflow`.
     * @returns A builder that constructs instances of entity type `MyPendingWorkflow`.
     */
    static builder(): EntityBuilderType<MyPendingWorkflow, MyPendingWorkflowTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `MyPendingWorkflow` entity type.
     * @returns A `MyPendingWorkflow` request builder.
     */
    static requestBuilder(): MyPendingWorkflowRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `MyPendingWorkflow`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `MyPendingWorkflow`.
     */
    static customField(fieldName: string): CustomField<MyPendingWorkflow>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface MyPendingWorkflowType {
    desc?: string;
    subject?: string;
    url?: string;
    wfRequestId: string;
}
export interface MyPendingWorkflowTypeForceMandatory {
    desc: string;
    subject: string;
    url: string;
    wfRequestId: string;
}
export declare namespace MyPendingWorkflow {
    /**
     * Static representation of the [[desc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESC: StringField<MyPendingWorkflow>;
    /**
     * Static representation of the [[subject]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUBJECT: StringField<MyPendingWorkflow>;
    /**
     * Static representation of the [[url]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const URL: StringField<MyPendingWorkflow>;
    /**
     * Static representation of the [[wfRequestId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WF_REQUEST_ID: StringField<MyPendingWorkflow>;
    /**
     * All fields of the MyPendingWorkflow entity.
     */
    const _allFields: Array<StringField<MyPendingWorkflow>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<MyPendingWorkflow>;
    /**
     * All key fields of the MyPendingWorkflow entity.
     */
    const _keyFields: Array<Selectable<MyPendingWorkflow>>;
    /**
     * Mapping of all key field names to the respective static field property MyPendingWorkflow.
     */
    const _keys: {
        [keys: string]: Selectable<MyPendingWorkflow>;
    };
}
//# sourceMappingURL=MyPendingWorkflow.d.ts.map