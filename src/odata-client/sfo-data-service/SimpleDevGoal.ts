/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SimpleDevGoalRequestBuilder } from './SimpleDevGoalRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, Entity, EntityBuilderType, NumberField, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "SimpleDevGoal" of service "SFOData".
 */
export class SimpleDevGoal extends Entity implements SimpleDevGoalType {
  /**
   * Technical entity name for SimpleDevGoal.
   */
  static _entityName = 'SimpleDevGoal';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for SimpleDevGoal.
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
   * One-to-one navigation property to the [[User]] entity.
   */
  simpleDevGoalUserIdNavigation!: User;

  /**
   * Returns an entity builder to construct instances `SimpleDevGoal`.
   * @returns A builder that constructs instances of entity type `SimpleDevGoal`.
   */
  static builder(): EntityBuilderType<SimpleDevGoal, SimpleDevGoalTypeForceMandatory> {
    return Entity.entityBuilder(SimpleDevGoal);
  }

  /**
   * Returns a request builder to construct requests for operations on the `SimpleDevGoal` entity type.
   * @returns A `SimpleDevGoal` request builder.
   */
  static requestBuilder(): SimpleDevGoalRequestBuilder {
    return new SimpleDevGoalRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `SimpleDevGoal`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `SimpleDevGoal`.
   */
  static customField(fieldName: string): CustomField<SimpleDevGoal> {
    return Entity.customFieldSelector(fieldName, SimpleDevGoal);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { User, UserType } from './User';

export interface SimpleDevGoalType {
  flag?: number;
  id: BigNumber;
  name?: string;
  type?: string;
  userId?: string;
  simpleDevGoalUserIdNavigation: UserType;
}

export interface SimpleDevGoalTypeForceMandatory {
  flag: number;
  id: BigNumber;
  name: string;
  type: string;
  userId: string;
  simpleDevGoalUserIdNavigation: UserType;
}

export namespace SimpleDevGoal {
  /**
   * Static representation of the [[flag]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FLAG: NumberField<SimpleDevGoal> = new NumberField('flag', SimpleDevGoal, 'Edm.Int32');
  /**
   * Static representation of the [[id]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ID: BigNumberField<SimpleDevGoal> = new BigNumberField('id', SimpleDevGoal, 'Edm.Int64');
  /**
   * Static representation of the [[name]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME: StringField<SimpleDevGoal> = new StringField('name', SimpleDevGoal, 'Edm.String');
  /**
   * Static representation of the [[type]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TYPE: StringField<SimpleDevGoal> = new StringField('type', SimpleDevGoal, 'Edm.String');
  /**
   * Static representation of the [[userId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_ID: StringField<SimpleDevGoal> = new StringField('userId', SimpleDevGoal, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[simpleDevGoalUserIdNavigation]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SIMPLE_DEV_GOAL_USER_ID_NAVIGATION: OneToOneLink<SimpleDevGoal, User> = new OneToOneLink('simpleDevGoal_UserIdNavigation', SimpleDevGoal, User);
  /**
   * All fields of the SimpleDevGoal entity.
   */
  export const _allFields: Array<NumberField<SimpleDevGoal> | BigNumberField<SimpleDevGoal> | StringField<SimpleDevGoal> | OneToOneLink<SimpleDevGoal, User>> = [
    SimpleDevGoal.FLAG,
    SimpleDevGoal.ID,
    SimpleDevGoal.NAME,
    SimpleDevGoal.TYPE,
    SimpleDevGoal.USER_ID,
    SimpleDevGoal.SIMPLE_DEV_GOAL_USER_ID_NAVIGATION
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<SimpleDevGoal> = new AllFields('*', SimpleDevGoal);
  /**
   * All key fields of the SimpleDevGoal entity.
   */
  export const _keyFields: Array<Selectable<SimpleDevGoal>> = [SimpleDevGoal.ID];
  /**
   * Mapping of all key field names to the respective static field property SimpleDevGoal.
   */
  export const _keys: { [keys: string]: Selectable<SimpleDevGoal> } = SimpleDevGoal._keyFields.reduce((acc: { [keys: string]: Selectable<SimpleDevGoal> }, field: Selectable<SimpleDevGoal>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
