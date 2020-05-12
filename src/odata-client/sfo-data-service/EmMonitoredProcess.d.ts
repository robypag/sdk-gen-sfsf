import { EmMonitoredProcessRequestBuilder } from './EmMonitoredProcessRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "EMMonitoredProcess" of service "SFOData".
 */
export declare class EmMonitoredProcess extends Entity implements EmMonitoredProcessType {
    /**
     * Technical entity name for EmMonitoredProcess.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for EmMonitoredProcess.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Co-relator Id.
     * @nullable
     */
    coRelatorId?: string;
    /**
     * Time Of Event.
     */
    firstEventTime: Moment;
    /**
     * Has Errors.
     * @nullable
     */
    hasErrors?: string;
    /**
     * Has Warnings.
     * @nullable
     */
    hasWarnings?: string;
    /**
     * Time Of Event.
     */
    lastEventTime: Moment;
    /**
     * Module.
     * @nullable
     */
    moduleName?: string;
    /**
     * monitoredProcessId.
     */
    monitoredProcessId: BigNumber;
    /**
     * Process Definition Id.
     */
    processDefinitionId: string;
    /**
     * Process Definition Name.
     * @nullable
     */
    processDefinitionName?: string;
    /**
     * Process Instance Id.
     */
    processInstanceId: string;
    /**
     * Process Instance Name.
     * @nullable
     */
    processInstanceName?: string;
    /**
     * Process State.
     */
    processState: string;
    /**
     * Process Type.
     */
    processType: string;
    /**
     * Returns an entity builder to construct instances `EmMonitoredProcess`.
     * @returns A builder that constructs instances of entity type `EmMonitoredProcess`.
     */
    static builder(): EntityBuilderType<EmMonitoredProcess, EmMonitoredProcessTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `EmMonitoredProcess` entity type.
     * @returns A `EmMonitoredProcess` request builder.
     */
    static requestBuilder(): EmMonitoredProcessRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `EmMonitoredProcess`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `EmMonitoredProcess`.
     */
    static customField(fieldName: string): CustomField<EmMonitoredProcess>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface EmMonitoredProcessType {
    coRelatorId?: string;
    firstEventTime: Moment;
    hasErrors?: string;
    hasWarnings?: string;
    lastEventTime: Moment;
    moduleName?: string;
    monitoredProcessId: BigNumber;
    processDefinitionId: string;
    processDefinitionName?: string;
    processInstanceId: string;
    processInstanceName?: string;
    processState: string;
    processType: string;
}
export interface EmMonitoredProcessTypeForceMandatory {
    coRelatorId: string;
    firstEventTime: Moment;
    hasErrors: string;
    hasWarnings: string;
    lastEventTime: Moment;
    moduleName: string;
    monitoredProcessId: BigNumber;
    processDefinitionId: string;
    processDefinitionName: string;
    processInstanceId: string;
    processInstanceName: string;
    processState: string;
    processType: string;
}
export declare namespace EmMonitoredProcess {
    /**
     * Static representation of the [[coRelatorId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CO_RELATOR_ID: StringField<EmMonitoredProcess>;
    /**
     * Static representation of the [[firstEventTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FIRST_EVENT_TIME: DateField<EmMonitoredProcess>;
    /**
     * Static representation of the [[hasErrors]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HAS_ERRORS: StringField<EmMonitoredProcess>;
    /**
     * Static representation of the [[hasWarnings]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HAS_WARNINGS: StringField<EmMonitoredProcess>;
    /**
     * Static representation of the [[lastEventTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_EVENT_TIME: DateField<EmMonitoredProcess>;
    /**
     * Static representation of the [[moduleName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MODULE_NAME: StringField<EmMonitoredProcess>;
    /**
     * Static representation of the [[monitoredProcessId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MONITORED_PROCESS_ID: BigNumberField<EmMonitoredProcess>;
    /**
     * Static representation of the [[processDefinitionId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROCESS_DEFINITION_ID: StringField<EmMonitoredProcess>;
    /**
     * Static representation of the [[processDefinitionName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROCESS_DEFINITION_NAME: StringField<EmMonitoredProcess>;
    /**
     * Static representation of the [[processInstanceId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROCESS_INSTANCE_ID: StringField<EmMonitoredProcess>;
    /**
     * Static representation of the [[processInstanceName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROCESS_INSTANCE_NAME: StringField<EmMonitoredProcess>;
    /**
     * Static representation of the [[processState]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROCESS_STATE: StringField<EmMonitoredProcess>;
    /**
     * Static representation of the [[processType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROCESS_TYPE: StringField<EmMonitoredProcess>;
    /**
     * All fields of the EmMonitoredProcess entity.
     */
    const _allFields: Array<StringField<EmMonitoredProcess> | DateField<EmMonitoredProcess> | BigNumberField<EmMonitoredProcess>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<EmMonitoredProcess>;
    /**
     * All key fields of the EmMonitoredProcess entity.
     */
    const _keyFields: Array<Selectable<EmMonitoredProcess>>;
    /**
     * Mapping of all key field names to the respective static field property EmMonitoredProcess.
     */
    const _keys: {
        [keys: string]: Selectable<EmMonitoredProcess>;
    };
}
//# sourceMappingURL=EmMonitoredProcess.d.ts.map