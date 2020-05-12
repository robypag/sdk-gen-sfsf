/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { MyPendingWorkflowRequestBuilder } from './MyPendingWorkflowRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "MyPendingWorkflow" of service "SFOData".
 */
export class MyPendingWorkflow extends Entity implements MyPendingWorkflowType {
  /**
   * Technical entity name for MyPendingWorkflow.
   */
  static _entityName = 'MyPendingWorkflow';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for MyPendingWorkflow.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
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
  wfRequestId!: string;

  /**
   * Returns an entity builder to construct instances `MyPendingWorkflow`.
   * @returns A builder that constructs instances of entity type `MyPendingWorkflow`.
   */
  static builder(): EntityBuilderType<MyPendingWorkflow, MyPendingWorkflowTypeForceMandatory> {
    return Entity.entityBuilder(MyPendingWorkflow);
  }

  /**
   * Returns a request builder to construct requests for operations on the `MyPendingWorkflow` entity type.
   * @returns A `MyPendingWorkflow` request builder.
   */
  static requestBuilder(): MyPendingWorkflowRequestBuilder {
    return new MyPendingWorkflowRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `MyPendingWorkflow`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `MyPendingWorkflow`.
   */
  static customField(fieldName: string): CustomField<MyPendingWorkflow> {
    return Entity.customFieldSelector(fieldName, MyPendingWorkflow);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
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

export namespace MyPendingWorkflow {
  /**
   * Static representation of the [[desc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESC: StringField<MyPendingWorkflow> = new StringField('desc', MyPendingWorkflow, 'Edm.String');
  /**
   * Static representation of the [[subject]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUBJECT: StringField<MyPendingWorkflow> = new StringField('subject', MyPendingWorkflow, 'Edm.String');
  /**
   * Static representation of the [[url]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const URL: StringField<MyPendingWorkflow> = new StringField('url', MyPendingWorkflow, 'Edm.String');
  /**
   * Static representation of the [[wfRequestId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WF_REQUEST_ID: StringField<MyPendingWorkflow> = new StringField('wfRequestId', MyPendingWorkflow, 'Edm.String');
  /**
   * All fields of the MyPendingWorkflow entity.
   */
  export const _allFields: Array<StringField<MyPendingWorkflow>> = [
    MyPendingWorkflow.DESC,
    MyPendingWorkflow.SUBJECT,
    MyPendingWorkflow.URL,
    MyPendingWorkflow.WF_REQUEST_ID
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<MyPendingWorkflow> = new AllFields('*', MyPendingWorkflow);
  /**
   * All key fields of the MyPendingWorkflow entity.
   */
  export const _keyFields: Array<Selectable<MyPendingWorkflow>> = [MyPendingWorkflow.WF_REQUEST_ID];
  /**
   * Mapping of all key field names to the respective static field property MyPendingWorkflow.
   */
  export const _keys: { [keys: string]: Selectable<MyPendingWorkflow> } = MyPendingWorkflow._keyFields.reduce((acc: { [keys: string]: Selectable<MyPendingWorkflow> }, field: Selectable<MyPendingWorkflow>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
