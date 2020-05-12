/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { GoalPermission_1RequestBuilder } from './GoalPermission_1RequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, Entity, EntityBuilderType, NumberField, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "GoalPermission_1" of service "SFOData".
 */
export class GoalPermission_1 extends Entity implements GoalPermission_1Type {
  /**
   * Technical entity name for GoalPermission_1.
   */
  static _entityName = 'GoalPermission_1';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for GoalPermission_1.
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
   * comments.
   * @nullable
   */
  comments?: number;
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
   * metric.
   * @nullable
   */
  metric?: number;
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
   * weight.
   * @nullable
   */
  weight?: number;

  /**
   * Returns an entity builder to construct instances `GoalPermission_1`.
   * @returns A builder that constructs instances of entity type `GoalPermission_1`.
   */
  static builder(): EntityBuilderType<GoalPermission_1, GoalPermission_1TypeForceMandatory> {
    return Entity.entityBuilder(GoalPermission_1);
  }

  /**
   * Returns a request builder to construct requests for operations on the `GoalPermission_1` entity type.
   * @returns A `GoalPermission_1` request builder.
   */
  static requestBuilder(): GoalPermission_1RequestBuilder {
    return new GoalPermission_1RequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `GoalPermission_1`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `GoalPermission_1`.
   */
  static customField(fieldName: string): CustomField<GoalPermission_1> {
    return Entity.customFieldSelector(fieldName, GoalPermission_1);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface GoalPermission_1Type {
  category?: number;
  comments?: number;
  create?: boolean;
  delete?: boolean;
  due?: number;
  edit?: boolean;
  flag?: number;
  id: BigNumber;
  metric?: number;
  name?: number;
  privateAccess?: boolean;
  start?: number;
  state?: number;
  type?: string;
  userId?: string;
  view?: boolean;
  weight?: number;
}

export interface GoalPermission_1TypeForceMandatory {
  category: number;
  comments: number;
  create: boolean;
  delete: boolean;
  due: number;
  edit: boolean;
  flag: number;
  id: BigNumber;
  metric: number;
  name: number;
  privateAccess: boolean;
  start: number;
  state: number;
  type: string;
  userId: string;
  view: boolean;
  weight: number;
}

export namespace GoalPermission_1 {
  /**
   * Static representation of the [[category]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CATEGORY: NumberField<GoalPermission_1> = new NumberField('category', GoalPermission_1, 'Edm.Byte');
  /**
   * Static representation of the [[comments]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMMENTS: NumberField<GoalPermission_1> = new NumberField('comments', GoalPermission_1, 'Edm.Byte');
  /**
   * Static representation of the [[create]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATE: BooleanField<GoalPermission_1> = new BooleanField('create', GoalPermission_1, 'Edm.Boolean');
  /**
   * Static representation of the [[delete]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DELETE: BooleanField<GoalPermission_1> = new BooleanField('delete', GoalPermission_1, 'Edm.Boolean');
  /**
   * Static representation of the [[due]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DUE: NumberField<GoalPermission_1> = new NumberField('due', GoalPermission_1, 'Edm.Byte');
  /**
   * Static representation of the [[edit]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EDIT: BooleanField<GoalPermission_1> = new BooleanField('edit', GoalPermission_1, 'Edm.Boolean');
  /**
   * Static representation of the [[flag]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FLAG: NumberField<GoalPermission_1> = new NumberField('flag', GoalPermission_1, 'Edm.Int32');
  /**
   * Static representation of the [[id]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ID: BigNumberField<GoalPermission_1> = new BigNumberField('id', GoalPermission_1, 'Edm.Int64');
  /**
   * Static representation of the [[metric]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const METRIC: NumberField<GoalPermission_1> = new NumberField('metric', GoalPermission_1, 'Edm.Byte');
  /**
   * Static representation of the [[name]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME: NumberField<GoalPermission_1> = new NumberField('name', GoalPermission_1, 'Edm.Byte');
  /**
   * Static representation of the [[privateAccess]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRIVATE_ACCESS: BooleanField<GoalPermission_1> = new BooleanField('privateAccess', GoalPermission_1, 'Edm.Boolean');
  /**
   * Static representation of the [[start]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const START: NumberField<GoalPermission_1> = new NumberField('start', GoalPermission_1, 'Edm.Byte');
  /**
   * Static representation of the [[state]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATE: NumberField<GoalPermission_1> = new NumberField('state', GoalPermission_1, 'Edm.Byte');
  /**
   * Static representation of the [[type]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TYPE: StringField<GoalPermission_1> = new StringField('type', GoalPermission_1, 'Edm.String');
  /**
   * Static representation of the [[userId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_ID: StringField<GoalPermission_1> = new StringField('userId', GoalPermission_1, 'Edm.String');
  /**
   * Static representation of the [[view]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VIEW: BooleanField<GoalPermission_1> = new BooleanField('view', GoalPermission_1, 'Edm.Boolean');
  /**
   * Static representation of the [[weight]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WEIGHT: NumberField<GoalPermission_1> = new NumberField('weight', GoalPermission_1, 'Edm.Byte');
  /**
   * All fields of the GoalPermission_1 entity.
   */
  export const _allFields: Array<NumberField<GoalPermission_1> | BooleanField<GoalPermission_1> | BigNumberField<GoalPermission_1> | StringField<GoalPermission_1>> = [
    GoalPermission_1.CATEGORY,
    GoalPermission_1.COMMENTS,
    GoalPermission_1.CREATE,
    GoalPermission_1.DELETE,
    GoalPermission_1.DUE,
    GoalPermission_1.EDIT,
    GoalPermission_1.FLAG,
    GoalPermission_1.ID,
    GoalPermission_1.METRIC,
    GoalPermission_1.NAME,
    GoalPermission_1.PRIVATE_ACCESS,
    GoalPermission_1.START,
    GoalPermission_1.STATE,
    GoalPermission_1.TYPE,
    GoalPermission_1.USER_ID,
    GoalPermission_1.VIEW,
    GoalPermission_1.WEIGHT
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<GoalPermission_1> = new AllFields('*', GoalPermission_1);
  /**
   * All key fields of the GoalPermission_1 entity.
   */
  export const _keyFields: Array<Selectable<GoalPermission_1>> = [GoalPermission_1.ID];
  /**
   * Mapping of all key field names to the respective static field property GoalPermission_1.
   */
  export const _keys: { [keys: string]: Selectable<GoalPermission_1> } = GoalPermission_1._keyFields.reduce((acc: { [keys: string]: Selectable<GoalPermission_1> }, field: Selectable<GoalPermission_1>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
