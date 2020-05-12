/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EmMonitoredProcessRequestBuilder } from './EmMonitoredProcessRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "EMMonitoredProcess" of service "SFOData".
 */
export class EmMonitoredProcess extends Entity implements EmMonitoredProcessType {
  /**
   * Technical entity name for EmMonitoredProcess.
   */
  static _entityName = 'EMMonitoredProcess';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for EmMonitoredProcess.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Co-relator Id.
   * @nullable
   */
  coRelatorId?: string;
  /**
   * Time Of Event.
   */
  firstEventTime!: Moment;
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
  lastEventTime!: Moment;
  /**
   * Module.
   * @nullable
   */
  moduleName?: string;
  /**
   * monitoredProcessId.
   */
  monitoredProcessId!: BigNumber;
  /**
   * Process Definition Id.
   */
  processDefinitionId!: string;
  /**
   * Process Definition Name.
   * @nullable
   */
  processDefinitionName?: string;
  /**
   * Process Instance Id.
   */
  processInstanceId!: string;
  /**
   * Process Instance Name.
   * @nullable
   */
  processInstanceName?: string;
  /**
   * Process State.
   */
  processState!: string;
  /**
   * Process Type.
   */
  processType!: string;

  /**
   * Returns an entity builder to construct instances `EmMonitoredProcess`.
   * @returns A builder that constructs instances of entity type `EmMonitoredProcess`.
   */
  static builder(): EntityBuilderType<EmMonitoredProcess, EmMonitoredProcessTypeForceMandatory> {
    return Entity.entityBuilder(EmMonitoredProcess);
  }

  /**
   * Returns a request builder to construct requests for operations on the `EmMonitoredProcess` entity type.
   * @returns A `EmMonitoredProcess` request builder.
   */
  static requestBuilder(): EmMonitoredProcessRequestBuilder {
    return new EmMonitoredProcessRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `EmMonitoredProcess`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `EmMonitoredProcess`.
   */
  static customField(fieldName: string): CustomField<EmMonitoredProcess> {
    return Entity.customFieldSelector(fieldName, EmMonitoredProcess);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
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

export namespace EmMonitoredProcess {
  /**
   * Static representation of the [[coRelatorId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CO_RELATOR_ID: StringField<EmMonitoredProcess> = new StringField('coRelatorId', EmMonitoredProcess, 'Edm.String');
  /**
   * Static representation of the [[firstEventTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FIRST_EVENT_TIME: DateField<EmMonitoredProcess> = new DateField('firstEventTime', EmMonitoredProcess, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[hasErrors]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HAS_ERRORS: StringField<EmMonitoredProcess> = new StringField('hasErrors', EmMonitoredProcess, 'Edm.String');
  /**
   * Static representation of the [[hasWarnings]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HAS_WARNINGS: StringField<EmMonitoredProcess> = new StringField('hasWarnings', EmMonitoredProcess, 'Edm.String');
  /**
   * Static representation of the [[lastEventTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_EVENT_TIME: DateField<EmMonitoredProcess> = new DateField('lastEventTime', EmMonitoredProcess, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[moduleName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MODULE_NAME: StringField<EmMonitoredProcess> = new StringField('moduleName', EmMonitoredProcess, 'Edm.String');
  /**
   * Static representation of the [[monitoredProcessId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MONITORED_PROCESS_ID: BigNumberField<EmMonitoredProcess> = new BigNumberField('monitoredProcessId', EmMonitoredProcess, 'Edm.Int64');
  /**
   * Static representation of the [[processDefinitionId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROCESS_DEFINITION_ID: StringField<EmMonitoredProcess> = new StringField('processDefinitionId', EmMonitoredProcess, 'Edm.String');
  /**
   * Static representation of the [[processDefinitionName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROCESS_DEFINITION_NAME: StringField<EmMonitoredProcess> = new StringField('processDefinitionName', EmMonitoredProcess, 'Edm.String');
  /**
   * Static representation of the [[processInstanceId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROCESS_INSTANCE_ID: StringField<EmMonitoredProcess> = new StringField('processInstanceId', EmMonitoredProcess, 'Edm.String');
  /**
   * Static representation of the [[processInstanceName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROCESS_INSTANCE_NAME: StringField<EmMonitoredProcess> = new StringField('processInstanceName', EmMonitoredProcess, 'Edm.String');
  /**
   * Static representation of the [[processState]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROCESS_STATE: StringField<EmMonitoredProcess> = new StringField('processState', EmMonitoredProcess, 'Edm.String');
  /**
   * Static representation of the [[processType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROCESS_TYPE: StringField<EmMonitoredProcess> = new StringField('processType', EmMonitoredProcess, 'Edm.String');
  /**
   * All fields of the EmMonitoredProcess entity.
   */
  export const _allFields: Array<StringField<EmMonitoredProcess> | DateField<EmMonitoredProcess> | BigNumberField<EmMonitoredProcess>> = [
    EmMonitoredProcess.CO_RELATOR_ID,
    EmMonitoredProcess.FIRST_EVENT_TIME,
    EmMonitoredProcess.HAS_ERRORS,
    EmMonitoredProcess.HAS_WARNINGS,
    EmMonitoredProcess.LAST_EVENT_TIME,
    EmMonitoredProcess.MODULE_NAME,
    EmMonitoredProcess.MONITORED_PROCESS_ID,
    EmMonitoredProcess.PROCESS_DEFINITION_ID,
    EmMonitoredProcess.PROCESS_DEFINITION_NAME,
    EmMonitoredProcess.PROCESS_INSTANCE_ID,
    EmMonitoredProcess.PROCESS_INSTANCE_NAME,
    EmMonitoredProcess.PROCESS_STATE,
    EmMonitoredProcess.PROCESS_TYPE
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<EmMonitoredProcess> = new AllFields('*', EmMonitoredProcess);
  /**
   * All key fields of the EmMonitoredProcess entity.
   */
  export const _keyFields: Array<Selectable<EmMonitoredProcess>> = [EmMonitoredProcess.PROCESS_DEFINITION_ID, EmMonitoredProcess.PROCESS_INSTANCE_ID, EmMonitoredProcess.PROCESS_TYPE];
  /**
   * Mapping of all key field names to the respective static field property EmMonitoredProcess.
   */
  export const _keys: { [keys: string]: Selectable<EmMonitoredProcess> } = EmMonitoredProcess._keyFields.reduce((acc: { [keys: string]: Selectable<EmMonitoredProcess> }, field: Selectable<EmMonitoredProcess>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
