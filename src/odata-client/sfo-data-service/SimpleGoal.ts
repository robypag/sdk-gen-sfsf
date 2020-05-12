/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SimpleGoalRequestBuilder } from './SimpleGoalRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, Entity, EntityBuilderType, NumberField, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "SimpleGoal" of service "SFOData".
 */
export class SimpleGoal extends Entity implements SimpleGoalType {
  /**
   * Technical entity name for SimpleGoal.
   */
  static _entityName = 'SimpleGoal';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for SimpleGoal.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
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
  name?: string;
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
   * Returns an entity builder to construct instances `SimpleGoal`.
   * @returns A builder that constructs instances of entity type `SimpleGoal`.
   */
  static builder(): EntityBuilderType<SimpleGoal, SimpleGoalTypeForceMandatory> {
    return Entity.entityBuilder(SimpleGoal);
  }

  /**
   * Returns a request builder to construct requests for operations on the `SimpleGoal` entity type.
   * @returns A `SimpleGoal` request builder.
   */
  static requestBuilder(): SimpleGoalRequestBuilder {
    return new SimpleGoalRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `SimpleGoal`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `SimpleGoal`.
   */
  static customField(fieldName: string): CustomField<SimpleGoal> {
    return Entity.customFieldSelector(fieldName, SimpleGoal);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface SimpleGoalType {
  flag?: number;
  id: BigNumber;
  name?: string;
  type?: string;
  userId?: string;
}

export interface SimpleGoalTypeForceMandatory {
  flag: number;
  id: BigNumber;
  name: string;
  type: string;
  userId: string;
}

export namespace SimpleGoal {
  /**
   * Static representation of the [[flag]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FLAG: NumberField<SimpleGoal> = new NumberField('flag', SimpleGoal, 'Edm.Int32');
  /**
   * Static representation of the [[id]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ID: BigNumberField<SimpleGoal> = new BigNumberField('id', SimpleGoal, 'Edm.Int64');
  /**
   * Static representation of the [[name]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME: StringField<SimpleGoal> = new StringField('name', SimpleGoal, 'Edm.String');
  /**
   * Static representation of the [[type]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TYPE: StringField<SimpleGoal> = new StringField('type', SimpleGoal, 'Edm.String');
  /**
   * Static representation of the [[userId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_ID: StringField<SimpleGoal> = new StringField('userId', SimpleGoal, 'Edm.String');
  /**
   * All fields of the SimpleGoal entity.
   */
  export const _allFields: Array<NumberField<SimpleGoal> | BigNumberField<SimpleGoal> | StringField<SimpleGoal>> = [
    SimpleGoal.FLAG,
    SimpleGoal.ID,
    SimpleGoal.NAME,
    SimpleGoal.TYPE,
    SimpleGoal.USER_ID
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<SimpleGoal> = new AllFields('*', SimpleGoal);
  /**
   * All key fields of the SimpleGoal entity.
   */
  export const _keyFields: Array<Selectable<SimpleGoal>> = [SimpleGoal.ID];
  /**
   * Mapping of all key field names to the respective static field property SimpleGoal.
   */
  export const _keys: { [keys: string]: Selectable<SimpleGoal> } = SimpleGoal._keyFields.reduce((acc: { [keys: string]: Selectable<SimpleGoal> }, field: Selectable<SimpleGoal>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
