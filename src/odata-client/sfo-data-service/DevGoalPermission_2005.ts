/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DevGoalPermission_2005RequestBuilder } from './DevGoalPermission_2005RequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, Entity, EntityBuilderType, NumberField, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "DevGoalPermission_2005" of service "SFOData".
 */
export class DevGoalPermission_2005 extends Entity implements DevGoalPermission_2005Type {
  /**
   * Technical entity name for DevGoalPermission_2005.
   */
  static _entityName = 'DevGoalPermission_2005';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for DevGoalPermission_2005.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * category.
   * @nullable
   */
  category?: number;
  /**
   * competency.
   * @nullable
   */
  competency?: number;
  /**
   * create.
   * @nullable
   */
  create?: boolean;
  /**
   * delete.
   * @nullable
   */
  delete?: boolean;
  /**
   * due.
   * @nullable
   */
  due?: number;
  /**
   * edit.
   * @nullable
   */
  edit?: boolean;
  /**
   * flag.
   * @nullable
   */
  flag?: number;
  /**
   * id.
   */
  id!: BigNumber;
  /**
   * name.
   * @nullable
   */
  name?: number;
  /**
   * privateAccess.
   * @nullable
   */
  privateAccess?: boolean;
  /**
   * purpose.
   * @nullable
   */
  purpose?: number;
  /**
   * start.
   * @nullable
   */
  start?: number;
  /**
   * state.
   * @nullable
   */
  state?: number;
  /**
   * tasks.
   * @nullable
   */
  tasks?: number;
  /**
   * type.
   * @nullable
   */
  type?: string;
  /**
   * userId.
   * @nullable
   */
  userId?: string;
  /**
   * view.
   * @nullable
   */
  view?: boolean;

  /**
   * Returns an entity builder to construct instances `DevGoalPermission_2005`.
   * @returns A builder that constructs instances of entity type `DevGoalPermission_2005`.
   */
  static builder(): EntityBuilderType<DevGoalPermission_2005, DevGoalPermission_2005TypeForceMandatory> {
    return Entity.entityBuilder(DevGoalPermission_2005);
  }

  /**
   * Returns a request builder to construct requests for operations on the `DevGoalPermission_2005` entity type.
   * @returns A `DevGoalPermission_2005` request builder.
   */
  static requestBuilder(): DevGoalPermission_2005RequestBuilder {
    return new DevGoalPermission_2005RequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `DevGoalPermission_2005`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `DevGoalPermission_2005`.
   */
  static customField(fieldName: string): CustomField<DevGoalPermission_2005> {
    return Entity.customFieldSelector(fieldName, DevGoalPermission_2005);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface DevGoalPermission_2005Type {
  category?: number;
  competency?: number;
  create?: boolean;
  delete?: boolean;
  due?: number;
  edit?: boolean;
  flag?: number;
  id: BigNumber;
  name?: number;
  privateAccess?: boolean;
  purpose?: number;
  start?: number;
  state?: number;
  tasks?: number;
  type?: string;
  userId?: string;
  view?: boolean;
}

export interface DevGoalPermission_2005TypeForceMandatory {
  category: number;
  competency: number;
  create: boolean;
  delete: boolean;
  due: number;
  edit: boolean;
  flag: number;
  id: BigNumber;
  name: number;
  privateAccess: boolean;
  purpose: number;
  start: number;
  state: number;
  tasks: number;
  type: string;
  userId: string;
  view: boolean;
}

export namespace DevGoalPermission_2005 {
  /**
   * Static representation of the [[category]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CATEGORY: NumberField<DevGoalPermission_2005> = new NumberField('category', DevGoalPermission_2005, 'Edm.Byte');
  /**
   * Static representation of the [[competency]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMPETENCY: NumberField<DevGoalPermission_2005> = new NumberField('competency', DevGoalPermission_2005, 'Edm.Byte');
  /**
   * Static representation of the [[create]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATE: BooleanField<DevGoalPermission_2005> = new BooleanField('create', DevGoalPermission_2005, 'Edm.Boolean');
  /**
   * Static representation of the [[delete]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DELETE: BooleanField<DevGoalPermission_2005> = new BooleanField('delete', DevGoalPermission_2005, 'Edm.Boolean');
  /**
   * Static representation of the [[due]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DUE: NumberField<DevGoalPermission_2005> = new NumberField('due', DevGoalPermission_2005, 'Edm.Byte');
  /**
   * Static representation of the [[edit]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EDIT: BooleanField<DevGoalPermission_2005> = new BooleanField('edit', DevGoalPermission_2005, 'Edm.Boolean');
  /**
   * Static representation of the [[flag]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FLAG: NumberField<DevGoalPermission_2005> = new NumberField('flag', DevGoalPermission_2005, 'Edm.Int32');
  /**
   * Static representation of the [[id]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ID: BigNumberField<DevGoalPermission_2005> = new BigNumberField('id', DevGoalPermission_2005, 'Edm.Int64');
  /**
   * Static representation of the [[name]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME: NumberField<DevGoalPermission_2005> = new NumberField('name', DevGoalPermission_2005, 'Edm.Byte');
  /**
   * Static representation of the [[privateAccess]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRIVATE_ACCESS: BooleanField<DevGoalPermission_2005> = new BooleanField('privateAccess', DevGoalPermission_2005, 'Edm.Boolean');
  /**
   * Static representation of the [[purpose]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURPOSE: NumberField<DevGoalPermission_2005> = new NumberField('purpose', DevGoalPermission_2005, 'Edm.Byte');
  /**
   * Static representation of the [[start]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const START: NumberField<DevGoalPermission_2005> = new NumberField('start', DevGoalPermission_2005, 'Edm.Byte');
  /**
   * Static representation of the [[state]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATE: NumberField<DevGoalPermission_2005> = new NumberField('state', DevGoalPermission_2005, 'Edm.Byte');
  /**
   * Static representation of the [[tasks]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TASKS: NumberField<DevGoalPermission_2005> = new NumberField('tasks', DevGoalPermission_2005, 'Edm.Byte');
  /**
   * Static representation of the [[type]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TYPE: StringField<DevGoalPermission_2005> = new StringField('type', DevGoalPermission_2005, 'Edm.String');
  /**
   * Static representation of the [[userId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_ID: StringField<DevGoalPermission_2005> = new StringField('userId', DevGoalPermission_2005, 'Edm.String');
  /**
   * Static representation of the [[view]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VIEW: BooleanField<DevGoalPermission_2005> = new BooleanField('view', DevGoalPermission_2005, 'Edm.Boolean');
  /**
   * All fields of the DevGoalPermission_2005 entity.
   */
  export const _allFields: Array<NumberField<DevGoalPermission_2005> | BooleanField<DevGoalPermission_2005> | BigNumberField<DevGoalPermission_2005> | StringField<DevGoalPermission_2005>> = [
    DevGoalPermission_2005.CATEGORY,
    DevGoalPermission_2005.COMPETENCY,
    DevGoalPermission_2005.CREATE,
    DevGoalPermission_2005.DELETE,
    DevGoalPermission_2005.DUE,
    DevGoalPermission_2005.EDIT,
    DevGoalPermission_2005.FLAG,
    DevGoalPermission_2005.ID,
    DevGoalPermission_2005.NAME,
    DevGoalPermission_2005.PRIVATE_ACCESS,
    DevGoalPermission_2005.PURPOSE,
    DevGoalPermission_2005.START,
    DevGoalPermission_2005.STATE,
    DevGoalPermission_2005.TASKS,
    DevGoalPermission_2005.TYPE,
    DevGoalPermission_2005.USER_ID,
    DevGoalPermission_2005.VIEW
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<DevGoalPermission_2005> = new AllFields('*', DevGoalPermission_2005);
  /**
   * All key fields of the DevGoalPermission_2005 entity.
   */
  export const _keyFields: Array<Selectable<DevGoalPermission_2005>> = [DevGoalPermission_2005.ID];
  /**
   * Mapping of all key field names to the respective static field property DevGoalPermission_2005.
   */
  export const _keys: { [keys: string]: Selectable<DevGoalPermission_2005> } = DevGoalPermission_2005._keyFields.reduce((acc: { [keys: string]: Selectable<DevGoalPermission_2005> }, field: Selectable<DevGoalPermission_2005>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
